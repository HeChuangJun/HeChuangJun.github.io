import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as d,o as t,c as r,a as i,b as e,d as s,e as n}from"./app-7KT7HDzT.js";const c={},v=n(`<h1 id="_1-支付系统设计" tabindex="-1"><a class="header-anchor" href="#_1-支付系统设计"><span>1. 支付系统设计</span></a></h1><h2 id="_1-1-支付系统架构图" tabindex="-1"><a class="header-anchor" href="#_1-1-支付系统架构图"><span>1.1. 支付系统架构图</span></a></h2><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/d4a02ad890b4cf42ab109.png" alt="payprocess.png" tabindex="0"><figcaption>payprocess.png</figcaption></figure><h2 id="_1-2-商户系统设计" tabindex="-1"><a class="header-anchor" href="#_1-2-商户系统设计"><span>1.2. 商户系统设计</span></a></h2><ul><li>下单时需要同时插入需要做的记录和状态，比如报名活动下单时是delete=1，回调成功则变成delete=1，而不是成功回调才插入</li><li>下单时提交额外参数最好是id，回调的时候根据id修改订单和记录的状态delete=0</li><li>支付后最先判断订单是否已经处理，保持幂等性</li><li>收入订单和支出订单前缀不要一样</li><li>涉及支付回调或者阻塞都是先设置status为0的状态的记录并提交事务，然后调用他们的接口回填status的状态</li></ul><h2 id="_1-3-发起下单网络调用超时订单表会保存么" tabindex="-1"><a class="header-anchor" href="#_1-3-发起下单网络调用超时订单表会保存么"><span>1.3. 发起下单网络调用超时订单表会保存么？</span></a></h2><ul><li>分场景</li><li>如果是没有额外成本，比如用户支付到企业且价格不会变，则不需要记录，然后直接提醒失败事务回滚提示前端，让用户再次发起</li><li>如果有额外成本，比如企业支付到用户，那么需要记录，并且需要延时消息去补偿和重试，最后将结果通知用户</li></ul><h2 id="_1-4-先发起下单再保存数据库还是相反" tabindex="-1"><a class="header-anchor" href="#_1-4-先发起下单再保存数据库还是相反"><span>1.4. 先发起下单再保存数据库还是相反？</span></a></h2><ul><li>前者可以再异常状况下比如超时不用再修改一次订单状态，但可能事务比较长，后者事务短但是异常需要修改订单状态</li></ul><h2 id="_1-5-如何防止重复支付" tabindex="-1"><a class="header-anchor" href="#_1-5-如何防止重复支付"><span>1.5. 如何防止重复支付？</span></a></h2><ul><li>使用分布式锁保证，查询是否已经报名，查询是否正在支付</li></ul><h2 id="_1-6-调用第三方银行接口怎么保证不超过银行的qps" tabindex="-1"><a class="header-anchor" href="#_1-6-调用第三方银行接口怎么保证不超过银行的qps"><span>1.6. 调用第三方银行接口怎么保证不超过银行的qps？</span></a></h2><ul><li>积压到rocketmq流量削峰</li><li>限流</li></ul><h2 id="_1-7-回调没收到怎么办-掉单" tabindex="-1"><a class="header-anchor" href="#_1-7-回调没收到怎么办-掉单"><span>1.7. 回调没收到怎么办？掉单</span></a></h2><ul><li>采用异步补偿方案 <ul><li>定时轮询: <ul><li>第三步调用支付通道之后，如果支付通道端返回支付受理成功或者支付处理中，将调用第四步。将这类订单插入掉单表。</li><li>第五步，补单应用将会定时查询数据库，批量查询掉单记录。</li><li>第六步，补单应用使用线程池，多线程异步的方式发起掉单查询</li><li>第七步，调用支付通道支付查询接口。</li><li>如果第七步支付结果查询为以下状态:支付结果为扣款成功、明确失败、掉单记录查询达到最大次数，第八步就会删除掉单记录。</li><li>最后，如果掉单查询依旧还是处理中，那么经过一定的延时之后，重复第五步，再次重新掉单补偿，直到成功或者查询到达最大次数。</li></ul></li><li>问题：为什么需要新建一张掉单表?不能直接使用支付订单表，查询未成功的订单吗?确实可以直接使用的支付订单表，然后批量查询当天未成功的订单，补单程序发起支付查询。主要是因为数据库查询效率问题，因为支付订单表每天都会大量记录新增，随着时间，这张表记录将会越来越多越来越大。支付记录越多，批量范围查询效率就会变低，查询速度将会变慢。所以为了查询效率，新建一张掉单表。这张表里仅记录支付未成功的订单，所以数据量就会很小，那么查询效率就会很高。另外，掉单表里的记录，不会被永久保存，只是临时性。当支付结果查询成功，或者支付结果明确失败，再或者查询次数到达规定最大次数，就会删除掉单记录。这就是第八步为什么需要删除掉单表的原因。如果需要保存每次掉单表查询详情，那么这里建议再新增一张掉单查询记录表，保存每一次的查询记录,</li><li>方案优缺点 <ul><li>优点是系统架构方案比较简单，比较容易实施。</li><li>缺点主要在于定时任务上。 <ul><li>1.轮询效率稍低</li><li>2.每次查询数据库，已经被执行过记录，仍然会被扫描(补单程序将会根据一定策略决定是否发起支付通道查询)，有重复计算的嫌疑</li><li>3.时效性不够好，如果每小时轮询一次，最差的情况下，时间误差会达到1小时</li><li>4.如果为了解决时效性问题，增加定时任务查询效率，那么1中查询效率跟2 的重复计算问题将会更加明显<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/4021f4a12d493c1a96e79.jpg" alt="定时轮询方案.png"></li></ul></li></ul></li><li>延迟消息 <ul><li>第四步的流程从插入掉单表变更为往延迟队列发送掉单消息。</li><li>第五步，补单程序接收掉单消息，然后触发支付掉单查询</li><li>第八步，如果第七步支付结果查询为以下状态:支付结果为扣款成功、明确失败、掉单记录查询达到最大次数。补单程序将会告知延迟队列消费成功，延迟队列将会删除这条掉单消息。其他状态将会告知消费失效，延迟队列将会在一定延时之后，再次发送掉单消息，然后继续重复第五步</li><li>延时消息参考下面30分钟关闭订单<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/f718d072b6567151798eb.jpg" alt="延迟消息方案.png"></li></ul></li><li>延迟消息的方案相对于定时轮询方案来讲: <ul><li>无需再查询全部订单，效率高</li><li>时效性较好</li><li>不过延迟消息这种方案，需要基于延迟队列，实现复杂，</li></ul></li></ul></li></ul><h2 id="_1-8-超时30分钟怎么自动关闭订单" tabindex="-1"><a class="header-anchor" href="#_1-8-超时30分钟怎么自动关闭订单"><span>1.8. 超时30分钟怎么自动关闭订单</span></a></h2><ul><li>数据库定时任务（如Quartz）quartz-scheduler 支持集群操作；对服务器内存消耗大，数据库压力大，存在延时，最坏延时为定时时间</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.quartz-scheduler&lt;/groupId&gt;
    &lt;artifactId&gt;quartz&lt;/artifactId&gt;
    &lt;version&gt;2.2.2&lt;/version&gt;
&lt;/dependency&gt;
public class MyJob implements Job {
    public void execute(JobExecutionContext context) throws JobExecutionException {
        System.out.println(&quot;要去数据库扫描啦。。。&quot;);
    }
    public static void main(String[] args) throws Exception {
        // 创建任务
        JobDetail jobDetail = JobBuilder.newJob(MyJob.class)
                .withIdentity(&quot;job1&quot;, &quot;group1&quot;).build();
        // 创建触发器 每3秒钟执行一次
        Trigger trigger = TriggerBuilder
                .newTrigger()
                .withIdentity(&quot;trigger1&quot;, &quot;group3&quot;)
                .withSchedule(
                        SimpleScheduleBuilder
                                .simpleSchedule()
                                .withIntervalInSeconds(3).
                                repeatForever())
                .build();
        Scheduler scheduler = new StdSchedulerFactory().getScheduler();
        // 将任务及其触发器放入调度器
        scheduler.scheduleJob(jobDetail, trigger);
        // 调度器开始调度任务
        scheduler.start();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>JDK的DelayQueue延迟队列(无界阻塞队列)只有在延迟期满的时候才能从中获取元素。 延迟低；服务器重启后，数据全部消失，怕宕机 集群扩展相当麻烦 容易就出现OOM异常</li><li>Poll():获取并移除队列的超时元素，没有则返回空.take():获取并移除队列的超时元素，如果没有则 wait 当前线程，直到有元素满足超时条件，返回结果。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class OrderDelay implements Delayed {
    private String orderId;
    private long timeout;
    OrderDelay(String orderId, long timeout) {
        this.orderId = orderId;
        this.timeout = timeout + System.nanoTime();
    }

    public int compareTo(Delayed other) {
        if (other == this) {
            return 0;
        }
        OrderDelay t = (OrderDelay) other;
        long d = (getDelay(TimeUnit.NANOSECONDS) - t.getDelay(TimeUnit.NANOSECONDS));
        return (d == 0) ? 0 : ((d &lt; 0) ? -1 : 1);
    }

    // 返回距离你自定义的超时时间还有多少
    public long getDelay(TimeUnit unit) {
        return unit.convert(timeout - System.nanoTime(), TimeUnit.NANOSECONDS);
    }

    void print() {
        System.out.println(orderId + &quot;编号的订单要删除啦。。。。&quot;);
    }

    public static void main(String[] args) {
        DelayQueue&lt;OrderDelayed&gt; delayQueue = new DelayQueue&lt;&gt;();
        delayQueue.put(new OrderDelayed(&quot;220101001&quot;, 8, TimeUnit.SECONDS));
        delayQueue.put(new OrderDelayed(&quot;220101002&quot;, 4, TimeUnit.SECONDS));  
        while (true) {
            // 取队列头部元素是否过期
            OrderDelayed task = delayQueue.poll();
            if (task != null) {
                System.out.println(&quot;订单 ---&gt; &quot; + task.orderNo + &quot; 已过期准备取消&quot;);
            }
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),u={href:"https://tech.youzan.com/queuing",target:"_blank",rel:"noopener noreferrer"},m=i("li",null,"Redis ZSet 实现 zadd key score(毫秒数) member score member 且long int = zrem key >0 且(毫秒数)大于当前时间",-1),o=n(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class AppTest {
    private static JedisPool jedisPool = new JedisPool(&quot;127.0.0.1&quot;, 6379);
    public static Jedis getJedis() {
        return jedisPool.getResource();
    }

    //生产者,生成5个订单放进去
    public void productionDelayMessage() {
        for (int i = 0; i &lt; 5; i++) {
            //延迟3秒
            Calendar cal1 = Calendar.getInstance();
            cal1.add(Calendar.SECOND, 3);
            int second3later = (int) (cal1.getTimeInMillis() / 1000);
            AppTest.getJedis().zadd(&quot;OrderId&quot;, second3later, &quot;OID0000001&quot; + i);
            System.out.println(System.currentTimeMillis() + &quot;ms:redis生成了一个订单任务：订单ID为&quot; + &quot;OID0000001&quot; + i);
        }
    }

    //消费者，取订单
    public void consumerDelayMessage() {
        Jedis jedis = AppTest.getJedis();
        while (true) {
            Set&lt;Tuple&gt; items = jedis.zrangeWithScores(&quot;OrderId&quot;, 0, 1);
            if (items == null || items.isEmpty()) {
                System.out.println(&quot;当前没有等待的任务&quot;);
                try {
                    Thread.sleep(500);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                continue;
            }
            int score = (int) ((Tuple) items.toArray()[0]).getScore();
            Calendar cal = Calendar.getInstance();
            int nowSecond = (int) (cal.getTimeInMillis() / 1000);
            if (nowSecond &gt;= score) {
                String orderId = ((Tuple) items.toArray()[0]).getElement();
                Long num = jedis.zrem(&quot;OrderId&quot;, orderId);
                if( num != null &amp;&amp; num&gt;0){
                    System.out.println(System.currentTimeMillis() + &quot;ms:redis消费了一个任务：消费的订单OrderId为&quot; + orderId);
                }
            }
        }
    }

    public static void main(String[] args) {
        AppTest appTest = new AppTest();
        appTest.productionDelayMessage();
        appTest.consumerDelayMessage();
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>基于时间轮算法(TimingWheel)实现延迟队列，具体可以参考Kafka 延时队列。时间轮算法Netty的HashedWheelTimer 延迟时间比delayQueue低，服务器重启后，数据全部消失，怕宕机 集群扩展相当麻烦 ；容易就出现OOM异常</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;io.netty&lt;/groupId&gt;
    &lt;artifactId&gt;netty-all&lt;/artifactId&gt;
    &lt;version&gt;4.1.24.Final&lt;/version&gt;
&lt;/dependency&gt;
public class HashedWheelTimerTest {
    static class MyTimerTask implements TimerTask {
        boolean flag;
        public MyTimerTask(boolean flag) {
            this.flag = flag;
        }
        public void run(Timeout timeout) throws Exception {
            System.out.println(&quot;要去数据库删除订单了。。。。&quot;);
            this.flag = false;
        }
    }

    public static void main(String[] argv) {
        MyTimerTask timerTask = new MyTimerTask(true);
        Timer timer = new HashedWheelTimer();
        timer.newTimeout(timerTask, 5, TimeUnit.SECONDS);
        int i = 1;
        while (timerTask.flag) {
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println(i + &quot;秒过去了&quot;);
            i++;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>基于 RocketMQ 延迟消息。开箱即用，使用起来还是比较简单的。 <ul><li>RocketMQ延迟消息支持18个等级，分别如下:11s 5s 10s 30s 1m 2m3m4m5m6M7M8m 9m10m20m 30m 1h 2h</li><li>消息发送方可以通过以下方式指定延迟等级，对应上方的延迟时间Message#setDelayTimeLevel</li><li>消息消费方，如果消费失败，默认将会在消息发送方的的延迟等级基础上加1。如果消息消费方需要指定其他的延迟等级，可以使用如下方式:ConsumeConcurrentlyContext#setDelayLevelwhenNextConsume</li><li>RocketMQ延迟消息，支持的特性还是比较基础、简单，不支持自定义延迟时间。不过对于掉单补偿的这个场景刚好够用，但是如果需要自定义延迟的，那还是得采用其他的方案。</li></ul></li><li>MQ 延时队列实现 RabbitMQ可以针对Queue和Message设置 x-message-tt，来控制消息的生存时间，如果超时，则消息变为dead letter。RabbitMQ的Queue可以配置x-dead-letter-exchange 和x-dead-letter-routing-key（可选）两个参数，用来控制队列内出现了deadletter，则按照这两个参数重新路由。高效,可以利用rabbitmq的分布式特性轻易的进行横向扩展,消息支持持久化增加了可靠性。本身的易用度要依赖于rabbitMq的运维.因为要引用rabbitMq,所以复杂度和成本变高</li></ul><h1 id="_2-聊聊对账系统的设计方案" tabindex="-1"><a class="header-anchor" href="#_2-聊聊对账系统的设计方案"><span>2. 聊聊对账系统的设计方案</span></a></h1><h2 id="_2-1-渠道数据处理模块" tabindex="-1"><a class="header-anchor" href="#_2-1-渠道数据处理模块"><span>2.1. 渠道数据处理模块</span></a></h2>`,6),b=i("li",null,"负责渠道对账文件的下载，解析，以及数据落库",-1),p=i("li",null,"手动在支付渠道网站下载对账文件（SFTP）",-1),g={href:"https://api.mch.weixin.qq.com/pay/downloadbill%EF%BC%8Cntnstqryx%E6%8B%9B%E8%A1%8C",target:"_blank",rel:"noopener noreferrer"},h=i("li",null,[e("对账文件格式 "),i("ul",null,[i("li",null,"支付宝对账文件格式为 cv，"),i("li",null,"微信的对账文件格式为txt"),i("li",null,"有些渠道为 xml,xls。")])],-1),f=i("li",null,"第三方渠道对账文件里面字段数量以及字段名称也存在不同。",-1),_=i("li",null,[e("般这一层每接入一个渠道需要专门根据这个渠道特性开发。这一层可以抽象化接口，对外暴露下载与解析接[每次接入渠道，实现该接口相应方法即可。"),i("br"),e(" 这一层开发难度不大，只要根据对账文件格式相应解析文件即可。一般需要提取对账文件里面信息如下:")],-1),x=n(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>商户号
商户订单号
渠道流水号
交易日期
交易金额
手续费
退款原订单号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>注意事项 <ul><li>1、同一渠道若申请了多个商户号。这种情况下，每个商户号若前一日都存在交易，第三方渠道会为每个商户号都会产生一份对账文件。所以这里系统设计时候需要考虑到多份对账文件处理的情况。</li><li>2、对账文件需要考虑重复下载的情况。一般情况下，渠道的对账文件一旦生成，就不会改变。但是第三方渠道也可能发生异常，导致我方收到对账文件数据不完整。这种情况下，需要有机制重新下载解析入库。</li><li>3、每个第三方渠道下载文件时间都不一样。</li></ul></li></ul><h2 id="_2-2-数据处理模块" tabindex="-1"><a class="header-anchor" href="#_2-2-数据处理模块"><span>2.2. 数据处理模块</span></a></h2><ul><li>主要用来提取我方前一日所有支付成功的流水数据以及上一模块入库的前一日对账单的流水数据。为了减少数据库的压力，提取的数据只需要包括必要字段即可，无需将整行数数据信息都提取出来。一般来说只要需要提取交易时间，金额，交易订单号，渠道返回流水号</li><li>最好使用备库进行数据查询。因为这里我们需要提取前一日全量的支付成功的数据，数据量大的情况下，可能会拖慢主库，影响在线的支付交易。</li></ul><h2 id="_2-3-数据核对模块" tabindex="-1"><a class="header-anchor" href="#_2-3-数据核对模块"><span>2.3. 数据核对模块</span></a></h2><ul><li>使用上一模块提取出来的数据，核对订单号与金额是否完全一致。核对模块伪代码如下</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//获取某一渠道本地支付数据
List&lt;LocalDataDT0&gt;localDatalist= getLocalPayData(&quot;支付渠道编号&quot;，&quot;账期”);
//获取某一渠道对账单数据
List&lt;channelDataDTo&gt; channelDataList= getchannelPayData(&quot;支付渠道编号&quot;，“账期”);
Map&lt;string, LocalDataDT0&gt; localDataMaplocalDataList.stream().collect(collectors.toMap(localData→ localData.getorderNo()+localData.getAmount()，00));
Map&lt;String,channelDataDT0&gt; channelDataMapchannelDataList.stream().collect(Collectors.toMap(channelData&gt; channelData.getOrderNo()+channelData.getAmount()，0o));
List&lt;LocalDataDTo&gt;localDiffDetails = new ArrayList();
//用本地账单数据的键值逐笔核对
LocalDataMap.forEach((key,localDataDT0)-&gt;{
  if(channelDataMap.containsKey(key)){
    channelDataMap.remove(key);
  }else {
    //渠道账单数据不包含本地数据键值
    localDiffDetails.add(localDataDTo)
  };
})
//若 channelDataMap 里面还有元素将其放入 channelDiffDataList
List&lt;channelDataDTo&gt; channelDiffDatalist = new ArrayList&gt;(channelDataMap.values());
//记录差异数据
recordDiffData(localDiffDetails,channelDiffDataList);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>这个过程可能产生三类差异数据 <ul><li>第一种情况为本端数据存在，对端数据不存在，我们称为本端多账</li><li>第二种情况为对端数据存在，本端数据不存在，我们称为对端多账</li><li>第三种情况为金额不一致。</li></ul></li></ul><h2 id="_2-4-差异数据处理模块" tabindex="-1"><a class="header-anchor" href="#_2-4-差异数据处理模块"><span>2.4. 差异数据处理模块</span></a></h2><ul><li>上面三类差异数据中，金额不一致相当少见，这种情况需要人工判断。</li><li>本端多账的情况。 <ul><li>存在跨日情况，对账文件将缺少跨日这笔，但是我方T日数据却存在这笔，这就导致了核对过程中产生一笔本端多账差异数据。对于这类差异数据，我们可以选择将这笔数据挂账，等待T+1工作日对账。T+1日对账的时候，对账单会相应多出数据，这样在核对过程就会产生对端多账的差异数据。然后在 T+1日差异处理模块将前几日差异数据都提取出来，逐笔核对本端多账数据与对端多账数据。若核对一致，将两笔差异状态都更新成处理完成。最后若无剩余差异数据，当天账单平账。</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>int range =7;
//查询对账日期到 range 天所有的差异记录 包括local和非local
List&lt;DiffPayData&gt; allDiffDatas = queryDiffDatas(new Date(),range);
//本端多账数据
Map&lt;String, DiffPayData&gt; localDiffDatas = new HashMap();
//对端多账
Map&lt;String, DiffPayData&gt; remoteDiffDatas = new HashMap◇();
//根据类型将差异数据分为本端差异数据与对端差异数据
for(DiffPayData diffData :allDiffDatas){
  if(&quot;local&quot;.equalsIgnorecase(diffData.getType())){
    localDiffDatas.put(diffData.getOrderNo()+ diffData.getAmount(), diffData);
  }else {
    remoteDiffDatas.put(diffData.getOrderNo()+ diffData.getAmount(), diffData);
  }
}  
//核对上的差异数据
List&lt;DiffPayData&gt; checkSucessDatas = new Arraylist&lt;&gt;();核对失败的差异数据
List&lt;DiffPayData&gt; checkFailedDatas = new ArrayList&lt;&gt;();
//核对过程
localDiffDatas.forEach((key,diffPayData)-&gt; {
  //本端多账与对端多账键值相等
  if (remoteDiffDatas.containsKey(key)){
    checkSucessDatas.add(remoteDiffDatas.remove(key));
    checkSucessDatas.add(diffPayData);
  } else {
    checkFailedDatas.add(diffPayData);
  }

});
checkFailedDatas.addAll(remoteDiffDatas.values());
//将成功对平的差异账状态修改为处理成功
updateSuccessDiffData(checkSucessDatas):
// 最后判断是否存在未对平对账记
if(checkFailedDatas.size()&gt;0){
  System.out.println(&quot;不平账”);
}else {
  System.out.println(&quot;平账”);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>对端多账的产生情况可能可能有两种情况, <ul><li>第一种情况测试环境与生产环境共用一份第三方渠道参数，这就导致测试环境交易订单也会出现在对账单中。若是这种情况，我们确认测试环境存在这批数据之后，我们忽略这批差异数据即可。</li><li>第二种情况，本端交易订单存在，但是状态不是成功状态。这种情况下，需要调用第三方渠道提供的查询接口，查询订单最终状态。若查询成功，更新订单状态，然后将差异数据状态更改为处理成功。</li><li>最后我们再次重新对账，由于对端多账的数据会有对应的本端数据，将不会产生差异数据，这次对账完成且平账。</li></ul></li></ul><h1 id="_3-权限系统怎么设计" tabindex="-1"><a class="header-anchor" href="#_3-权限系统怎么设计"><span>3. 权限系统怎么设计？</span></a></h1><h2 id="_3-1-为什么需要权限管理" tabindex="-1"><a class="header-anchor" href="#_3-1-为什么需要权限管理"><span>3.1. 为什么需要权限管理？</span></a></h2><ul><li>权限管理是公司数据安全的重要保证，针对不同的岗位，不同的级别看到的数据是不一样的，操作数据的限制也是不一样的</li></ul><h2 id="_3-2-权限设计" tabindex="-1"><a class="header-anchor" href="#_3-2-权限设计"><span>3.2. 权限设计</span></a></h2><ul><li>最好设计成树形结构,比较清新<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/d44f02e28c96b279f7aa5.jpg" alt="树形结构.png"></li></ul><h2 id="_3-3-权限模型的演进" tabindex="-1"><a class="header-anchor" href="#_3-3-权限模型的演进"><span>3.3. 权限模型的演进</span></a></h2><ul><li>RBAC模型：把权限分配给角色，需要相同权限的用户和角色对应起来就可以了，一个权限可以分配给多个角色，一个角色可以拥有多个权限，同样一个用户可以分配多个角色，一个角色也可以对应多个用户</li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/af9e39be4400e525eb30c.png" alt="RBAC模型.png" tabindex="0"><figcaption>RBAC模型.png</figcaption></figure><ul><li>角色继承的RBAC模型(RABC1模型) :下级角色只能拥有一个上级角色，但是上级角色可以拥有多个下级角色。并且可以额外拥有其他权限。</li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/39723ce62d4b0a4e98bb8.png" alt="RBAC1模型.png" tabindex="0"><figcaption>RBAC1模型.png</figcaption></figure><ul><li>带约束的RBAC模型(RABC2模型) 约束条件有：角色互斥、基数约束(限制数量)、先决条件约束(先用有A角色才能拥有B角色)等。</li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/1e3783bb5c71541c69a98.png" alt="RBAC2模型.png" tabindex="0"><figcaption>RBAC2模型.png</figcaption></figure><h2 id="_3-4-用户划分" tabindex="-1"><a class="header-anchor" href="#_3-4-用户划分"><span>3.4. 用户划分</span></a></h2><ul><li><p>用户组：避免用户数量大时一个个把角色赋予给用户</p></li><li><p>权限组：避免角色数量大时一个个把权限赋予角色<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/0195417399fa59b3485cd.png" alt="用户组与权限组.png"></p></li><li><p>组织</p><ul><li>实现权限分配的自动化： 和组织关系打通之后，按照组织来分配角色，如果有新入职的用户，被划分在某个组织下面之后，会自动获取该组织下所有的权限，无需人工分配。又比如有用户调岗，只需要把组织关系调整就可以了，权限会跟着组织关系自动调整，也无需人工干预。这么做首先需要把权限和组织关系打通。</li><li>控制数据权限： 把角色关联到组织，组织里的成员只能看到本组织下的数据，比如市场推广和大客定制，市场推广针对的是零散的客户，大可定制针对的是有一定体量的客户，相互的数据虽然在一个平台，但是只能看自己组织下的数据。</li></ul></li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/c06866a714f91963ccb88.png" alt="组织.png" tabindex="0"><figcaption>组织.png</figcaption></figure><h2 id="_3-5-理想rbac模型" tabindex="-1"><a class="header-anchor" href="#_3-5-理想rbac模型"><span>3.5. 理想RBAC模型</span></a></h2><ul><li>创建用户表、角色表、权限表，用户和角色是多对多的关系，角色和权限是多对多的关系，需要再创建两章关系表，分别是用户-角色关系表和角色-权限关系表。<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/ba128c99d9939e8bf3745.png" alt="理想RBAC模型.png"></li></ul><h2 id="_3-6-标准rbac模型表设计" tabindex="-1"><a class="header-anchor" href="#_3-6-标准rbac模型表设计"><span>3.6. 标准RBAC模型表设计</span></a></h2><p><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/2d04bc6f96beb57b9ea8e.png" alt="标准RBAC模型表设计.png"><br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/eae1914c04a3d341bfb3f.png" alt="理想RBAC模型表设计.png"></p><h1 id="_4-接口幂等性怎么设计" tabindex="-1"><a class="header-anchor" href="#_4-接口幂等性怎么设计"><span>4. 接口幂等性怎么设计？</span></a></h1><h2 id="_4-1-什么是幂等" tabindex="-1"><a class="header-anchor" href="#_4-1-什么是幂等"><span>4.1. 什么是幂等？</span></a></h2><ul><li>对于同一笔业务操作，不管调用多少次，得到的结果都是一样的。订单支付成功回调通知多次应该每次结果一致。简单说，就是多次调用如一次。</li></ul><h2 id="_4-2-有哪些幂等性问题" tabindex="-1"><a class="header-anchor" href="#_4-2-有哪些幂等性问题"><span>4.2. 有哪些幂等性问题？</span></a></h2><ul><li>前段重复提交</li><li>接口超时重试</li><li>mq消费读到重复消息</li></ul><h2 id="_4-3-解决方案" tabindex="-1"><a class="header-anchor" href="#_4-3-解决方案"><span>4.3. 解决方案</span></a></h2><ul><li>insert前先select:保存数据的前，先判断数据是否已存在，如果数据已存在，则直接返回，如果不存在，才执行insert操作</li><li>建防重表并加唯一索引:如果重复插入数据的话，就会抛出异常，为了保证幂等性，一般需要捕获这个异常。java程序需要捕获：DuplicateKeyException异常，spring框架还需要捕获MySQLIntegrityConstraintViolationException异常。例如消息消费中，创建防重表，存储消息的唯一ID，消费时先去查询是否已经消费，已经消费直接返回成功</li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/e26e2f67cbb333f48b6a3.jpg" alt="mysqlduplicateremove.png" tabindex="0"><figcaption>mysqlduplicateremove.png</figcaption></figure><ul><li>加悲观锁:同一时刻只允许一个请求获得锁，其他请求则等待。比如更新用户账户余额，把对应用户的哪一行数据锁住。select * from user id=xx for update;缺点是获取不到锁的请求一般只能报失败，比较难保证接口返回相同值。</li><li>加乐观锁:更新逻辑，性能更好。在表中增加一个timestamp或者version字段,在更新前，先查询一下数据，将version也作为更新的条件，同时也更新version：update user set amount=amount+100,version=version+1 where id=123 and version=1;更新成功后，version增加，重复更新请求进来就无法更新了。</li><li>状态机:有些业务表是有状态的，比如订单表中有：1-下单、2-已支付、3-完成、4-撤销等状态，可以通过限制状态的流动来完成幂等。</li><li>分布式锁:直接在数据库上加锁的做法性能不够友好，可以使用分布式锁的方式，目前最流行的分布式锁实现是通过Redis，具体实现一般都是使用Redission框架</li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/6c5536628ad13c7529c03.jpg" alt="redisduplicateremove.png" tabindex="0"><figcaption>redisduplicateremove.png</figcaption></figure><ul><li>token机制: <ul><li>客户端会先发送一个请求去获取 token，服务端会生成一个全局唯一的ID 作为 token 保存在 redis 中，同时把这个 |D 返回给客户端</li><li>客户端第二次调用业务请求的时候必须携带这个 token</li><li>服务端会校验这个 token，如果校验成功，则执行业务，并删除 redis 中的token</li><li>如果校验失败，说明 redis 中已经没有对应的 token，则表示重复操作，直接返回指定的结果给客户端</li><li>对 redis 中是否存在 token 以及删除的代码逻辑建议用 Lua 脚本实现，保证原子性</li><li>全局唯一ID 可以用百度的 uid-generator、美团的 Leaf 去生成</li></ul></li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/4a41e14b187155e112f87.jpg" alt="token.png" tabindex="0"><figcaption>token.png</figcaption></figure><h1 id="_5-手机扫码pc登录" tabindex="-1"><a class="header-anchor" href="#_5-手机扫码pc登录"><span>5. 手机扫码pc登录</span></a></h1><ul><li>1.访问PC端二维码生成页面，PC端请求服务端获取二维码ID</li><li>2.服务端生成相应的 二维码ID ，设置二维码的过期时间，状态等。</li><li>3.PC获取 二维码ID，生成相应的二维码。</li><li>4.手机端扫描二维码，获取 二维码ID。</li><li>5.手机端将 手机端token和 二维码ID 发送给服务端，确认登录。</li><li>6.服务端校验 手机端token，根据手机端token和二维码ID生成 PC端token</li><li>7.PC端通过轮询方式请求服务端，通过二维码ID 获取二维码状态，如果已成功，返回PC token，登录成功</li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/88b98a4e35d755ca1ff7a.jpg" alt="phonescancode.jpg" tabindex="0"><figcaption>phonescancode.jpg</figcaption></figure><h1 id="_6-限流怎么设计" tabindex="-1"><a class="header-anchor" href="#_6-限流怎么设计"><span>6. 限流怎么设计</span></a></h1><h2 id="_6-1-为什么要限流呢" tabindex="-1"><a class="header-anchor" href="#_6-1-为什么要限流呢"><span>6.1. 为什么要限流呢？</span></a></h2><ul><li>避免流量多到过载，把系统打挂了所以，在各种大促活动之前，要对系统进行压测，评估整个系统的峰值QPS，要做一些限流的设置，超过一定阈值，就拒绝处理或者延后处理，避免把系统打挂的情况出现。</li></ul><h2 id="_6-2-限流和熔断有什么区别" tabindex="-1"><a class="header-anchor" href="#_6-2-限流和熔断有什么区别"><span>6.2. 限流和熔断有什么区别？</span></a></h2><ul><li>限流发生在流量进来之前，超过的流量进行限制。</li><li>熔断是一种应对故障的机制，发生在流量进来之后，如果系统发生故障或者异常，熔断会自动切断请求，防止故障进一步扩展，导致服务雪崩。</li></ul><h2 id="_6-3-限流和削峰有什么区别" tabindex="-1"><a class="header-anchor" href="#_6-3-限流和削峰有什么区别"><span>6.3. 限流和削峰有什么区别？</span></a></h2><ul><li>削峰是对流量的平滑处理，通过缓慢地增加请求的处理速率来避免系统瞬时过载。</li><li>削峰大概就是水库，把流量储存起来，慢慢流，限流大概就是闸口，拒绝超出的流量。</li><li>限流的通用流程</li></ul><h2 id="_6-4-限流实现步骤" tabindex="-1"><a class="header-anchor" href="#_6-4-限流实现步骤"><span>6.4. 限流实现步骤</span></a></h2><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/e5fc8eaeb7aedb13ab5d5.jpg" alt="限流设计.png" tabindex="0"><figcaption>限流设计.png</figcaption></figure><ul><li>统计请求流量：记录请求的数量或速率，可以通过计数器、滑动窗口等方式进行统计。</li><li>判断是否超过限制：根据设定的限制条件，判断当前请求流量是否超过限制。</li><li>执行限流策略：如果请求流量超过限制，执行限流策略，如拒绝请求、延迟处理、返回错误信息等。</li><li>更新统计信息：根据请求的处理结果，更新统计信息，如增加计数器的值、更新滑动窗口的数据等。</li><li>重复执行以上步骤：不断地统计请求流量、判断是否超过限制、执行限流策略、更新统计信息</li><li>具体的限流算法实现可能会根据不同的场景和需求进行调整和优化，比如使用令牌桶算法、漏桶算法等。</li></ul><h2 id="_6-5-单机限流和分布式限流" tabindex="-1"><a class="header-anchor" href="#_6-5-单机限流和分布式限流"><span>6.5. 单机限流和分布式限流</span></a></h2><ul><li>在限流的通用流程里，需要统计请求量、更新统计量，那么这个请求量的统计和更新就必须维护在一个存储里。单机版环境直接储存到本地。集群可以把统计信息Tair或Redis等分布式的K-V存储中。</li></ul><h2 id="_6-6-四种限流算法与分布式实现" tabindex="-1"><a class="header-anchor" href="#_6-6-四种限流算法与分布式实现"><span>6.6. 四种限流算法与分布式实现</span></a></h2><ul><li>使用Redis作为分布式存储；Redission作为Redis客户端，Redission用来做分布式锁和作为Redis的客户端也非常好用</li><li>准备一下环境，Redis安装和项目创建就不多说了</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;!--依赖--&gt;
&lt;dependency&gt;
  &lt;groupId&gt;org.redisson&lt;/groupId&gt;
  &lt;artifactId&gt;redisson&lt;/artifactId&gt;
  &lt;version&gt;3.16.2&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//用单例模式获取RedissonClient，这里就不注册成bean了，跑单测太慢
public class RedissonConfig {

    private static final String REDIS_ADDRESS = &quot;redis://127.0.0.1:6379&quot;;

    private static volatile  RedissonClient redissonClient;

   public static RedissonClient getInstance(){
        if (redissonClient==null){
            synchronized (RedissonConfig.class){
                if (redissonClient==null){
                    Config config = new Config();
                    config.useSingleServer().setAddress(REDIS_ADDRESS);
                    redissonClient = Redisson.create(config);
                    return redissonClient;
                }
            }
        }
        return redissonClient;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-6-1-固定窗口限流算法" tabindex="-1"><a class="header-anchor" href="#_6-6-1-固定窗口限流算法"><span>6.6.1. 固定窗口限流算法</span></a></h3><ul><li>固定窗口算法，也称之为计数器算法，当然我个人理解，计数器算法是固定窗口算法的一种特例，把时间划分为固定的时间窗口，每个窗口内允许的请求次数设置限制。如果在一个时间窗口内，请求次数超过了上限，那么就会触发限流。</li><li>算法实现，在每个窗口期内，我们可以通过incrementAndGet操作来统计请求的数量。一旦窗口期结束，我们可以利用Redis的键过期功能来自动重置计数。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class FixedWindowRateLimiter {
    public static final String KEY = &quot;fixedWindowRateLimiter:&quot;;
    /**
     * 请求限制数量
     */
    private Long limit;
    /**
     * 窗口大小（单位：S）
     */
    private Long windowSize;

    public FixedWindowRateLimiter(Long limit, Long windowSize) {
        this.limit = limit;
        this.windowSize = windowSize;
    }

    /**
     * 固定窗口限流
     */
    public boolean triggerLimit(String path) {
        RedissonClient redissonClient = RedissonConfig.getInstance();
        //加分布式锁，防止并发情况下窗口初始化时间不一致问题
        RLock rLock = redissonClient.getLock(KEY + &quot;LOCK:&quot; + path);
        try {
            rLock.lock(100, TimeUnit.MILLISECONDS);
            String redisKey = KEY + path;
            RAtomicLong counter = redissonClient.getAtomicLong(redisKey);
            //计数
            long count = counter.incrementAndGet();
            //如果为1的话，就说明窗口刚初始化
            if (count == 1) {
                //直接设置过期时间，作为窗口
                counter.expire(windowSize, TimeUnit.SECONDS);
            }
            //触发限流
            if (count &gt; limit) {
                //触发限流的不记在请求数量中
                counter.decrementAndGet();
                return true;
            }
            return false;
        } finally {
            rLock.unlock();
        }
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里还额外用了一个分布式锁，来解决并发情况下，窗口的初始化问题。</p><p>再来测试一下,也可以写个接口，用Jmeter之类的压测工具来进行测试。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class FixedWindowRateLimiterTest {
    ThreadPoolExecutor threadPoolExecutor = new ThreadPoolExecutor(20, 50, 10, TimeUnit.SECONDS, new LinkedBlockingDeque&lt;&gt;(10));

    @Test
    @DisplayName(&quot;1min限制10次请求固定窗口测试&quot;)
    void triggerLimit() throws InterruptedException {
        FixedWindowRateLimiter fixedWindowRateLimiter = new FixedWindowRateLimiter(10L,60L);
        //模拟不同窗口内的调用
        for (int i = 0; i &lt; 3; i++) {
            CountDownLatch countDownLatch = new CountDownLatch(20);
            //20个线程并发调用
            for (int j = 0; j &lt; 20; j++) {
                threadPoolExecutor.execute(() -&gt; {
                    boolean isLimit = fixedWindowRateLimiter.triggerLimit(&quot;/test&quot;);
                    System.out.println(isLimit);
                    countDownLatch.countDown();
                });
            }
            countDownLatch.await();
            //休眠1min
            TimeUnit.MINUTES.sleep(1);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>固定窗口算法的优点是实现简单，占用空间小，但是它存在临界问题，由于窗口的切换是瞬间完成的，因此请求的处理并不平滑，可能会在窗口切换的瞬间出现流量的剧烈波动。比如在00:02，突然有大量请求过来，但是我们这时候计数重置了，那么就没法限制突发的这些流量。</li></ul><h3 id="_6-6-2-滑动窗口算法" tabindex="-1"><a class="header-anchor" href="#_6-6-2-滑动窗口算法"><span>6.6.2. 滑动窗口算法</span></a></h3><ul><li>为了缓解固定窗口的突发流量问题，可以采用滑动窗口算法，计算机网络中TCP的流量控制就是采用滑动窗口算法。</li><li>滑动窗口限流算法的原理是将一个大的时间窗口划分为多个小的时间窗口，每个小的窗口都有独立的计数。请求过来的时候，判断请求的次数是否超过整个窗口的限制。窗口的移动是每次向前滑动一个小的单元窗口</li><li>例如下面这个滑动窗口，将大时间窗口1min分成了5个小窗口，每个小窗口的时间是12s。每个单元格有自己独立的计数器，每过12s就会向前移动一格。假如有请求在00:01的时候过来，这时候窗口的计数就是3+12+9+15=39，也能起到限流的作用。</li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/b8fe33d4224695aa1e3ea.jpg" alt="滑动窗口限流算法.png" tabindex="0"><figcaption>滑动窗口限流算法.png</figcaption></figure><ul><li>这就是为什么滑动窗口能解决临界问题，滑的格子越多，那么整体的滑动就会越平滑,限流的效果就会越精准。</li><li>算法实现:直接使用Redis的有序集合（zset）结构。使用时间戳作为score和member，有请求过来的时候，就把当前时间戳添加到有序集合里。那么窗口之外的请求，我们可以根据窗口大小，计算出起始时间戳，删除窗口外的请求。这样，有序集合的大小，就是我们这个窗口的请求数了。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class SlidingWindowRateLimiter {
    public static final String KEY = &quot;slidingWindowRateLimiter:&quot;;

    /**
     * 请求次数限制
     */
    private Long limit;
    /**
     * 窗口大小（单位：S）
     */
    private Long windowSize;

    public SlidingWindowRateLimiter(Long limit, Long windowSize) {
        this.limit = limit;
        this.windowSize = windowSize;
    }


    public boolean triggerLimit(String path) {
        RedissonClient redissonClient = RedissonConfig.getInstance();
        //窗口计数
        RScoredSortedSet&lt;Long&gt; counter = redissonClient.getScoredSortedSet(KEY + path);
        //使用分布式锁，避免并发设置初始值的时候，导致窗口计数被覆盖
        RLock rLock = redissonClient.getLock(KEY + &quot;LOCK:&quot; + path);
        try {
            rLock.lock(200, TimeUnit.MILLISECONDS);
            // 当前时间戳
            long currentTimestamp = System.currentTimeMillis();
            // 窗口起始时间戳
            long windowStartTimestamp = currentTimestamp - windowSize * 1000;
            // 移除窗口外的时间戳，左闭右开
            counter.removeRangeByScore(0, true, windowStartTimestamp, false);
            // 将当前时间戳作为score,也作为member，
            // TODO:高并发情况下可能没法保证唯一，可以加一个唯一标识
            counter.add(currentTimestamp, currentTimestamp);
            //使用zset的元素个数，作为请求计数
            long count = counter.size();
            // 判断时间戳数量是否超过限流阈值
            if (count &gt; limit) {
                System.out.println(&quot;[triggerLimit] path:&quot; + path + &quot; count:&quot; + count + &quot; over limit:&quot; + limit);
                return true;
            }
            return false;
        } finally {
            rLock.unlock();
        }
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>还有一个小的可以完善的点，zset在member相同的情况下，是会覆盖的，也就是说高并发情况下，时间戳可能会重复，那么就有可能统计的请求偏少，这里可以用时间戳+随机数来缓解，也可以生成唯一序列来解决，比如UUID、雪花算法等等。</p></li><li><p>测试一下</p></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class SlidingWindowRateLimiterTest {
    ThreadPoolExecutor threadPoolExecutor = new ThreadPoolExecutor(30, 50, 10, TimeUnit.SECONDS, new LinkedBlockingDeque&lt;&gt;(10));

    @Test
    @DisplayName(&quot;滑动窗口限流&quot;)
    void triggerLimit() throws InterruptedException {
        SlidingWindowRateLimiter slidingWindowRateLimiter = new SlidingWindowRateLimiter(10L, 1L);
        //模拟在不同时间片内的请求
        for (int i = 0; i &lt; 8; i++) {
            CountDownLatch countDownLatch = new CountDownLatch(20);
            for (int j = 0; j &lt; 20; j++) {
                threadPoolExecutor.execute(() -&gt; {
                    boolean isLimit = slidingWindowRateLimiter.triggerLimit(&quot;/test&quot;);
                    System.out.println(isLimit);
                    countDownLatch.countDown();
                });
            }
            countDownLatch.await();
            //休眠10s
            TimeUnit.SECONDS.sleep(10L);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>用Redis实现了滑动窗口限流，解决了固定窗口限流的边界问题，当然这里也带来了新的问题，因为我们存储了窗口期的所有请求，所以高并发的情况下，可能会比较占内存。</li></ul><h3 id="_6-6-3-漏桶算法" tabindex="-1"><a class="header-anchor" href="#_6-6-3-漏桶算法"><span>6.6.3. 漏桶算法</span></a></h3><ul><li>希望请求平滑一些，追求的是“波澜不惊”，这时候就可以考虑使用其它的限流算法。</li><li>漏桶算法（Leaky Bucket），请求就像水一样以任意速度注入漏桶，而桶会按照固定的速率将水漏掉。当进水速率大于出水速率的时候，漏桶会变满，此时新进入的请求将会被丢弃。</li><li>漏桶算法的两大作用是网络流量整形（Traffic Shaping）和速度限制（Rate Limiting）。</li><li>使用RScoredSortedSet，直接使用ZREMRANGEBYSCORE命令来删除旧的请求。</li><li>进水请求进来，判断桶有没有满，满了就拒绝，没满就往桶里丢请求。</li><li>出水保证稳定速率出水，可以用一个定时任务，来定时去删除旧的请求。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class LeakyBucketRateLimiter {
    private RedissonClient redissonClient = RedissonConfig.getInstance();
    private static final String KEY_PREFIX = &quot;LeakyBucket:&quot;;

    /**
     * 桶的大小
     */
    private Long bucketSize;
    /**
     * 漏水速率，单位:个/秒
     */
    private Long leakRate;


    public LeakyBucketRateLimiter(Long bucketSize, Long leakRate) {
        this.bucketSize = bucketSize;
        this.leakRate = leakRate;
        //这里启动一个定时任务，每s执行一次
        ScheduledExecutorService executorService = Executors.newScheduledThreadPool(1);
        executorService.scheduleAtFixedRate(this::leakWater, 0, 1, TimeUnit.SECONDS);
    }

    /**
     * 漏水
     */
    public void leakWater() {
        RSet&lt;String&gt; pathSet=redissonClient.getSet(KEY_PREFIX+&quot;:pathSet&quot;);
        //遍历所有path,删除旧请求
        for(String path:pathSet){
            String redisKey = KEY_PREFIX + path;
            RScoredSortedSet&lt;Long&gt; bucket = redissonClient.getScoredSortedSet(KEY_PREFIX + path);
            // 获取当前时间
            long now = System.currentTimeMillis();
            // 删除旧的请求
            bucket.removeRangeByScore(0, true,now - 1000 * leakRate,true);
        }
    }

    /**
     * 限流
     */
    public boolean triggerLimit(String path) {
        //加锁，防止并发初始化问题
        RLock rLock = redissonClient.getLock(KEY_PREFIX + &quot;LOCK:&quot; + path);
        try {
            rLock.lock(100,TimeUnit.MILLISECONDS);
            String redisKey = KEY_PREFIX + path;
            RScoredSortedSet&lt;Long&gt; bucket = redissonClient.getScoredSortedSet(redisKey);
            //这里用一个set，来存储所有path
            RSet&lt;String&gt; pathSet=redissonClient.getSet(KEY_PREFIX+&quot;:pathSet&quot;);
            pathSet.add(path);
            // 获取当前时间
            long now = System.currentTimeMillis();
            // 检查桶是否已满
            if (bucket.size() &lt; bucketSize) {
                // 桶未满，添加一个元素到桶中
                bucket.add(now,now);
                return false;
            }
            // 桶已满，触发限流
            System.out.println(&quot;[triggerLimit] path:&quot;+path+&quot; bucket size:&quot;+bucket.size());
            return true;
        }finally {
            rLock.unlock();
        }
    }
    
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>用了RSet来存储path，这样一来，一个定时任务，就可以搞定所有path对应的桶的出水，而不用每个桶都创建一个一个定时任务</p></li><li><p>直接用ScheduledExecutorService启动了一个定时任务，1s跑一次，当然集群环境下，每台机器都跑一个定时任务，对性能是极大的浪费，而且不好管理，我们可以用分布式定时任务，比如xxl-job去执行leakWater。</p></li><li><p>测试</p></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class LeakyBucketRateLimiterTest {

    ThreadPoolExecutor threadPoolExecutor = new ThreadPoolExecutor(30, 50, 10, TimeUnit.SECONDS, new LinkedBlockingDeque&lt;&gt;(10));

    @Test
    @DisplayName(&quot;漏桶算法&quot;)
    void triggerLimit() throws InterruptedException {
        LeakyBucketRateLimiter leakyBucketRateLimiter = new LeakyBucketRateLimiter(10L, 1L);
        for (int i = 0; i &lt; 8; i++) {
            CountDownLatch countDownLatch = new CountDownLatch(20);
            for (int j = 0; j &lt; 20; j++) {
                threadPoolExecutor.execute(() -&gt; {
                    boolean isLimit = leakyBucketRateLimiter.triggerLimit(&quot;/test&quot;);
                    System.out.println(isLimit);
                    countDownLatch.countDown();
                });
            }
            countDownLatch.await();
            //休眠10s
            TimeUnit.SECONDS.sleep(10L);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>漏桶算法能够有效防止网络拥塞，实现也比较简单。但是，因为漏桶的出水速率是固定的，假如突然来了大量的请求，那么只能丢弃超量的请求，即使下游能处理更大的流量，没法充分利用系统资源。</li></ul><h3 id="_6-6-4-令牌桶算法" tabindex="-1"><a class="header-anchor" href="#_6-6-4-令牌桶算法"><span>6.6.4. 令牌桶算法</span></a></h3><ul><li>令牌桶算法是对漏桶算法的一种改进。主要思想是：系统以一种固定的速率向桶中添加令牌，每个请求在发送前都需要从桶中取出一个令牌，只有取到令牌的请求才被通过。因此，令牌桶算法允许请求以任意速率发送，只要桶中有足够的令牌。</li><li>算法实现:首先是要发放令牌，要固定速率，那我们又得开个线程，定时往桶里投令牌，然后Redission提供了令牌桶算法的实现</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class TokenBucketRateLimiter {

    public static final String KEY = &quot;TokenBucketRateLimiter:&quot;;

    /**
     * 阈值
     */
    private Long limit;
    /**
     * 添加令牌的速率，单位：个/秒
     */
    private Long tokenRate;

    public TokenBucketRateLimiter(Long limit, Long tokenRate) {
        this.limit = limit;
        this.tokenRate = tokenRate;
    }

    /**
     * 限流算法
     */
    public boolean triggerLimit(String path){
        RedissonClient redissonClient=RedissonConfig.getInstance();
        RRateLimiter rateLimiter = redissonClient.getRateLimiter(KEY+path);
        // 初始化，设置速率模式，速率，间隔，间隔单位
        rateLimiter.trySetRate(RateType.OVERALL, limit, tokenRate, RateIntervalUnit.SECONDS);
        // 获取令牌
        return rateLimiter.tryAcquire();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Redisson实现的，还是比较稳的，这里就不测试了。关于Redission是怎么实现这个限速器的，大家可以看一下参考[3]，还是Redisson家的老传统——Lua脚本，设计相当巧妙。</p></li><li><p>并发处理采用了分布式锁，高并发情况下，对性能有一定损耗，逻辑最好还是直接采用Lua脚本实现，来提高性能可以提供更加优雅的调用方式，比如利用aop实现注解式调用，代码设计也可以更加优雅，继承体系可以完善一下没有实现限流的拒绝策略，比如抛异常、缓存、丢进MQ打散……限流是一种方法，最终的目的还是尽可能保证系统平稳</p></li><li><p>Guava RateLimiter ，基于令牌桶算法限流，当然是单机的；</p></li><li><p>Sentinel ，基于滑动窗口限流，支持单机，也支持集群</p></li><li><p>网关限流，很多网关自带限流方法，比如Spring Cloud Gateway、Nginx</p></li></ul><h1 id="_7-etl怎么设计" tabindex="-1"><a class="header-anchor" href="#_7-etl怎么设计"><span>7. ETL怎么设计</span></a></h1><h2 id="_7-1-数据提取" tabindex="-1"><a class="header-anchor" href="#_7-1-数据提取"><span>7.1. 数据提取</span></a></h2><ul><li>使用策略模式采集不同的数据，接口、视图等</li><li>接口采用异步投放到消息队列削峰</li><li>视图采用定时任务按照时间间隔来抓取数据</li></ul><h2 id="_7-2-数据转换" tabindex="-1"><a class="header-anchor" href="#_7-2-数据转换"><span>7.2. 数据转换</span></a></h2><ul><li>按照业务逻辑将数据转换成保存接口的数据</li></ul><h2 id="_7-3-数据保存" tabindex="-1"><a class="header-anchor" href="#_7-3-数据保存"><span>7.3. 数据保存</span></a></h2><ul><li>提供保存和更新接口</li></ul><h1 id="_8-聊天项目" tabindex="-1"><a class="header-anchor" href="#_8-聊天项目"><span>8. 聊天项目</span></a></h1><h2 id="_8-1-怎么保证实时性" tabindex="-1"><a class="header-anchor" href="#_8-1-怎么保证实时性"><span>8.1. 怎么保证实时性</span></a></h2><ul><li>使用websocket</li></ul><h2 id="_8-2-为什么消息是无序的" tabindex="-1"><a class="header-anchor" href="#_8-2-为什么消息是无序的"><span>8.2. 为什么消息是无序的？</span></a></h2><ul><li>因为websocket是异步的，基于时间驱动</li></ul><h2 id="_8-3-怎么保证消息有序" tabindex="-1"><a class="header-anchor" href="#_8-3-怎么保证消息有序"><span>8.3. 怎么保证消息有序？</span></a></h2><ul><li>给每个消息加时间戳</li></ul><h2 id="_8-4-怎么做消息已读" tabindex="-1"><a class="header-anchor" href="#_8-4-怎么做消息已读"><span>8.4. 怎么做消息已读？</span></a></h2><ul><li>做一张表记录每个人对群或者对人已读的最大消息</li><li>进来加载消息时就记录已读最大值</li></ul><h1 id="_9-什么是ddd" tabindex="-1"><a class="header-anchor" href="#_9-什么是ddd"><span>9. 什么是ddd？</span></a></h1><ul><li><p>实现DDD落地大致需要经历这样三个阶段</p><ul><li>业务分析：项目团队的成员主要包括领域专家、设计人员、开发人员等一起对业务问题域以及业务期望进行全面的梳理，厘请业务中的统一语言，在业务领域中发现领域事件、领域对象及其对应的领域行为，搞清楚他们各自的关联关系</li><li>战略设计：通过DDD理论对业务进行领域划分构建领域模型，梳理出相应的限界上下文，通过统一的领域语言从战略层面进行领域划分以及构建领域模型。在构建领域模型的过程中需要梳理出对应的聚合根、实体、以及值对象。</li><li>战术设计：以领域模型为战术设计的输入，以限界上下文作为微服务划分的边界进行微服务拆分，在每个微服务中进行领域分层，实现领域模型对于代码的映射，从而实现 DDD 的真正落地实施。</li></ul></li><li><p>概念</p><ul><li>实体（Entity），具备唯一ID，能够被持久化，具备业务逻辑，对应现实世界业务对象的业务属性以及业务行为。</li><li>值对象（Value Object），不具有唯一ID，由对象的属性描述，一般为内存中的临时对象，可以用来传递参数或对实体进行补充描述。值对象以及实体都是领域模型中的领域对象，是组成领域模型的基础元素，一起实现领域内的最基本的核心领域逻辑。</li><li>领域服务（Domain Service），为上层建筑提供可操作的接口，负责对领域对象进行调度和封装，同时可以对外提供各种形式的服务。</li><li>聚合根（Aggregate Root），聚合根属于实体对象，聚合根具有全局唯一ID，而实体只有在聚合内部有唯一的本地ID，值对象没有唯一ID。聚合根在聚合之内采用引用依赖的方式对实体和值对象进行组织和协调，聚合根和聚合根之间通过唯一 id 进行聚合之间的协同。</li><li>工厂（Factories），主要用来创建聚合根，目前架构实践中一般采用IOC容器来实现工厂的功能。</li><li>仓储（Repository），封装了基础设施来提供查询和持久化聚合操作。</li><li>聚合：有业务关联关系的实体以及值对象的集合，通过实体、值对象以及各自之间的业务逻辑聚合在一起完成某个业务节点。可以根据业务的单一职责以及高内聚的的设计原来来进行聚合的划分</li></ul></li><li><p>如何建立领域模型？</p><ul><li>业务分析：领域专家、DDD 专家、架构师、产品经理、项目经理、开发人员以及测试人员等集合在一起之后需要通过头脑风暴的方式梳理当前的业务域问题</li><li>领域建模：找出实体和值对象，构建聚合，划分聚合到边界上下文</li></ul></li></ul><h1 id="_10-数组去重" tabindex="-1"><a class="header-anchor" href="#_10-数组去重"><span>10. 数组去重</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public static Object[] oneClear(Object[] arr){
    Set set = new HashSet();
    for(int i=0;i&lt;arr.length;i++){
    　 set.add(arr[i]);
    　}
    return set.toArray();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_11-单点登录" tabindex="-1"><a class="header-anchor" href="#_11-单点登录"><span>11. 单点登录</span></a></h1><ul><li>第一次请求app server fillter判断有没有局部session（登录状态等）和token，301重定向sso带上请求url参数</li><li>sso通过filter和全局session判断是否登录，未登录跳到登录页面并返回请求url参数，输入用户名密码和url参数请求登录</li><li>登录成功创建全局会话和令牌token，301重定向到app server带上token</li><li>app server判断没有局部session则带上token、url访问sso校验有全局session ，重定向到app server返回登录成功</li><li>app server根据结果创建session</li></ul><h1 id="_12-微服务session共享" tabindex="-1"><a class="header-anchor" href="#_12-微服务session共享"><span>12. 微服务session共享</span></a></h1><ul><li>在微服务中，一个完整的项目被拆分成多个不相同的独立的服务，各个服务独立部署在不同的服务器上，各自的 session 被从物理空间上隔离开了，但是经常，我们需要在不同微服务之间共享 session ，常见的方案就是 Spring Session + Redis 来实现 session 共享。将所有微服务的 session 统一保存在 Redis 上，当各个微服务对 session 有相关的读写操作时，都去操作 Redis 上的 session 。这样就实现了 session 共享，Spring Session 基于 Spring 中的代理过滤器实现，使得 session 的同步操作对开发人员而言是透明的，非常简便。</li></ul><h1 id="_13-编写消费者-生产者模式demo代码" tabindex="-1"><a class="header-anchor" href="#_13-编写消费者-生产者模式demo代码"><span>13. 编写消费者-生产者模式Demo代码</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/**
 * 生产者和消费者，wait()和notify()的实现
 * @author ZGJ
 * @date 2017年6月22日
 */
public class Test1 {
    private static Integer count = 0;
    private static final Integer FULL = 10;
    private static String LOCK = &quot;lock&quot;;
    
    public static void main(String[] args) {
        Test1 test1 = new Test1();
        new Thread(test1.new Producer()).start();
        new Thread(test1.new Consumer()).start();
        new Thread(test1.new Producer()).start();
        new Thread(test1.new Consumer()).start();
        new Thread(test1.new Producer()).start();
        new Thread(test1.new Consumer()).start();
        new Thread(test1.new Producer()).start();
        new Thread(test1.new Consumer()).start();
    }
    class Producer implements Runnable {
        @Override
        public void run() {
            for (int i = 0; i &lt; 10; i++) {
                try {
                    Thread.sleep(3000);
                } catch (Exception e) {
                    e.printStackTrace();
                }
                synchronized (LOCK) {
                    while (count == FULL) {
                        try {
                            LOCK.wait();
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    }
                    count++;
                    System.out.println(Thread.currentThread().getName() + &quot;生产者生产，目前总共有&quot; + count);
                    LOCK.notifyAll();
                }
            }
        }
    }
    class Consumer implements Runnable {
        @Override
        public void run() {
            for (int i = 0; i &lt; 10; i++) {
                try {
                    Thread.sleep(3000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                synchronized (LOCK) {
                    while (count == 0) {
                        try {
                            LOCK.wait();
                        } catch (Exception e) {
                        }
                    }
                    count--;
                    System.out.println(Thread.currentThread().getName() + &quot;消费者消费，目前总共有&quot; + count);
                    LOCK.notifyAll();
                }
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class Test2 {
    private static Integer count = 0;
    private static final Integer FULL = 10;
    //创建一个锁对象
    private Lock lock = new ReentrantLock();
    //创建两个条件变量，一个为缓冲区非满，一个为缓冲区非空
    private final Condition notFull = lock.newCondition();
    private final Condition notEmpty = lock.newCondition();
    public static void main(String[] args) {
        Test2 test2 = new Test2();
        new Thread(test2.new Producer()).start();
        new Thread(test2.new Consumer()).start();
        new Thread(test2.new Producer()).start();
        new Thread(test2.new Consumer()).start();
        new Thread(test2.new Producer()).start();
        new Thread(test2.new Consumer()).start();
        new Thread(test2.new Producer()).start();
        new Thread(test2.new Consumer()).start();
    }
    class Producer implements Runnable {
        @Override
        public void run() {
            for (int i = 0; i &lt; 10; i++) {
                try {
                    Thread.sleep(3000);
                } catch (Exception e) {
                    e.printStackTrace();
                }
                //获取锁
                lock.lock();
                try {
                    while (count == FULL) {
                        try {
                            notFull.await();
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                    }
                    count++;
                    System.out.println(Thread.currentThread().getName()
                            + &quot;生产者生产，目前总共有&quot; + count);
                    //唤醒消费者
                    notEmpty.signal();
                } finally {
                    //释放锁
                    lock.unlock();
                }
            }
        }
    }
    class Consumer implements Runnable {
        @Override
        public void run() {
            for (int i = 0; i &lt; 10; i++) {
                try {
                    Thread.sleep(3000);
                } catch (InterruptedException e1) {
                    e1.printStackTrace();
                }
                lock.lock();
                try {
                    while (count == 0) {
                        try {
                            notEmpty.await();
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    }
                    count--;
                    System.out.println(Thread.currentThread().getName()
                            + &quot;消费者消费，目前总共有&quot; + count);
                    notFull.signal();
                } finally {
                    lock.unlock();
                }
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_14-java处理高并发" tabindex="-1"><a class="header-anchor" href="#_14-java处理高并发"><span>14. Java处理高并发</span></a></h1><ul><li><p>采用分布式部署的方式，部署多台服务器，把流量分流开，让每个服务器都承担一部分的并发和流量，提升整体系统的并发能力。</p></li><li><p>微服务拆分，把一个单体的应用，按功能单一性，拆分为多个服务模块。比如一个电商系统，拆分为用户系统、订单系统、商品系统等等</p></li><li><p>分库分表</p></li><li><p>主从分离：实时性要求不高的读请求，都去读从库，写的请求或者实时性要求高的请求，才走主库</p></li><li><p>池化技术：数据库连接池、Redis 连接池、线程池</p></li><li><p>缓存：Redis缓存</p></li><li><p>CDN加速静态资源访问</p></li><li><p>消息队列，削锋</p></li><li><p>ElasticSearch：支持简单的查询搜索、统计类的操作。</p></li><li><p>降级熔断：开源组件Hystrix</p></li><li><p>限流：可以使用Guava的RateLimiter单机版限流，也可以使用Redis分布式限流，还可以使用阿里开源组件sentinel限流。</p></li><li><p>异步：后端可以借用消息队列实现。比如在海量秒杀请求过来时，先放到消息队列中，快速响应用户，告诉用户请求正在处理中，这样就可以释放资源来处理更多的请求。秒杀请求处理完后，通知用户秒杀抢购成功或者失败</p></li><li><p>接口的常规优化</p></li><li><p>压力测试确定系统瓶颈：压测完要分析整个调用链路，性能可能出现问题是网络层（如带宽）、Nginx层、服务层、还是数据路缓存等中间件等等。loadrunner是一款不错的压力测试工具，jmeter则是接口性能测试工具，都可以来做下压测。</p></li><li><p>应对突发流量峰值：扩容+切流量：扩容：比如增加从库、提升配置的方式，提升系统/组件的流量承载能力。比如增加MySQL、Redis从库来处理查询请求。<br> 切流量：服务多机房部署，如果高并发流量来了，把流量从一个机房切换到另一个机房。</p></li><li><p>HTML静态化</p></li><li><p>图片服务器分离</p></li><li><p>数据库集群，库表散列</p></li><li><p>镜像</p></li><li><p>负载均衡</p></li></ul><h1 id="_15-请说出2种减少页面加载时间的方法" tabindex="-1"><a class="header-anchor" href="#_15-请说出2种减少页面加载时间的方法"><span>15. 请说出2种减少页面加载时间的方法</span></a></h1><ul><li><ol><li>减少重复的HTTP请求数量</li></ol></li><li><ol start="2"><li>压缩Javascript、CSS代码</li></ol></li><li><ol start="3"><li>在文件头部放置css样式的定义</li></ol></li><li><ol start="4"><li>在文件末尾放Javascript脚本</li></ol></li><li><ol start="5"><li>css、javascript改由外部调用</li></ol></li><li><ol start="6"><li>尽可能减少DCOM元素</li></ol></li><li><ol start="7"><li>避免使用CSS脚本(CSS Expressions)</li></ol></li><li><ol start="10"><li>服务器启用gzip压缩功能</li></ol></li><li><ol start="11"><li>Ajax采用缓存调用</li></ol></li><li><ol start="12"><li>Ajax调用尽量采用GET方法调用</li></ol></li><li><ol start="13"><li>养成良好的开发维护习惯，尽量避免脚本重复调用</li></ol></li><li><ol start="14"><li>缩减iframe的使用，如无必要，尽量不要使用</li></ol></li></ul><h1 id="_16-软件开发一般有几个阶段-每个阶段的作用" tabindex="-1"><a class="header-anchor" href="#_16-软件开发一般有几个阶段-每个阶段的作用"><span>16. 软件开发一般有几个阶段？每个阶段的作用？</span></a></h1><ul><li>问题的定义及规划:软件开发与需求放共同讨论，主要确定软件的开发目标及其可行性。</li><li>需求分析:在确定软件开发可行性的情况下，对软件需要实现的各个功能进行详细需求分析。为整个软件项目的开发打下良好的基础</li><li>软件设计:此阶段中偶要根据需求分析的结果，对整个软件系统进行设计，如系统框架设计、数据库设计等软件设计一般分为总体设计和详细设计。软件设计将为软件程序编写打下良好的基础</li><li>程序编码:此阶段是将软件设计的结果转化为计算机可运行的程序代码。在程序编码中必定要制定统一、符合标准的编写规范。以保证程序的可读性、易维护性。提高程序的运行效率。</li><li>软件测试:在软件设计完成之后要进行严密的测试，一发现软件在整个软件设计过程中存在的问题并加以纠正.分为单元测试、组装测试、系统测试三个阶段进行。测试方法主要有白盒测试和黑盒测试</li></ul><h1 id="_17-英文字母和中文汉字在不同字符集编码下的字节数" tabindex="-1"><a class="header-anchor" href="#_17-英文字母和中文汉字在不同字符集编码下的字节数"><span>17. 英文字母和中文汉字在不同字符集编码下的字节数</span></a></h1><ul><li>英文字母都是1字节：GB2312，GBK，ISO-8859-1，UTF-8</li><li>中文汉字：GB2312 2字节：GBK 2字节 ；ISO-8859-1 1字节；UTF-8 3字节</li></ul><h1 id="_18-敏捷开发与devops" tabindex="-1"><a class="header-anchor" href="#_18-敏捷开发与devops"><span>18. 敏捷开发与devOps</span></a></h1><ul><li>DevOps强调的是高效组织团队(开发、运维、测试)之间如何通过自动化的工具协作和沟通来完成软件的生命周期管理，从而更快、更频繁地交付更稳定的软件（软件的发布和管理）</li><li>敏捷开发并不追求前期完美的设计、完美编码，而是力求在很短的周期内开发出产品的核心功能，尽早发布出可用的版本。然后在后续的生产周期内，按照新需求不断迭代升级，完善产品（软件的开发）</li></ul><h1 id="_19-http请求方法有哪些" tabindex="-1"><a class="header-anchor" href="#_19-http请求方法有哪些"><span>19. http请求方法有哪些?</span></a></h1><ul><li>GET 请求指定的页面信息，并返回实体主体。</li><li>HEAD 只请求页面的首部 仅传输状态行和标题部分</li><li>PUT PUT方法用于将数据发送到服务器以创建或更新资源，它可以用上传的内容替换目标资源中的所有当前内容。</li><li>POST 请求服务器接受所指定的文档作为对所标识的URI的新的从属实体</li><li>DELETE 用来删除指定的资源，它会删除URI给出的目标资源的所有当前内容。</li></ul><h1 id="_20-restful" tabindex="-1"><a class="header-anchor" href="#_20-restful"><span>20. RestFul</span></a></h1><ul><li>每一个URI代表1种资源；客户端使用GET、POST、PUT、DELETE4个表示操作方式的动词对服务端资源进行操作：GET用来获取资源，POST用来新建资源（也可以用于更新资源），PUT用来更新资源，DELETE用来删除资源；</li></ul><h1 id="_21-linux常用命令√" tabindex="-1"><a class="header-anchor" href="#_21-linux常用命令√"><span>21. linux常用命令√</span></a></h1>`,129),S=i("li",null,"目录切换：cd 路径",-1),D=i("li",null,"增加目录：mkdir 目录名称",-1),y=i("li",null,"查看目录：ls",-1),k=i("li",null,"修改文件：vim 文件名 vim 文件→进入文件→命令模式→按i进入编辑模式→编辑文件→按Esc进入底行模式→输入:wq/q!",-1),L=i("li",null,"删除文件（删）: rm -rf 文件名",-1),T=i("li",null,"查找文件：find / -name httpd.conf",-1),w=i("li",null,'查找文件内容grep "被查找的字符串" *.log',-1),R=i("li",null,"查看所有linux的java进程 ps -ef | grep java",-1),C=i("li",null,"查看linux的内核版本 uname -a",-1),q={href:"http://some.webstie/some.tar.gz",target:"_blank",rel:"noopener noreferrer"},E=i("li",null,"302临时重定向、301永久重定向（sso单点登录用到）",-1),I=n('<h1 id="_22-对-高内聚-低耦合-方法理解-你在程序设计和架构设计中的经验" tabindex="-1"><a class="header-anchor" href="#_22-对-高内聚-低耦合-方法理解-你在程序设计和架构设计中的经验"><span>22. 对&quot;高内聚，低耦合&quot;方法理解，你在程序设计和架构设计中的经验</span></a></h1><ul><li>降低耦合度的方法 <ul><li>1、少使用类的继承，多用接口隐藏实现的细节。 Java面向对象编程引入接口除了支持多态外， 隐藏实现细节也是其中一个目的。</li><li>2、模块的功能化分尽可能的单一，道理也很简单，功能单一的模块供其它模块调用的机会就少。（其实这是高内聚的一种说法，高内聚低耦合一般同时出现）。</li><li>3、遵循一个定义只在一个地方出现。</li><li>4、少使用全局变量。</li><li>5、类属性和方法的声明少用public，多用private关键字。</li><li>6、多用设计模式，比如采用MVC的设计模式就可以降低界面与业务逻辑的耦合度。</li><li>7、尽量不用“硬编码”的方式写程序，同时也尽量避免直接用SQL语句操作数据库。</li><li>8、最后当然就是避免直接操作或调用其它模块或类（内容耦合）；如果模块间必须存在耦合，原则上尽量使用数据耦合，少用控制耦合，限制公共耦合的范围，避免使用内容耦合。</li></ul></li><li>增强内聚度方法 <ul><li>1、模块只对外暴露最小限度的接口，形成最低的依赖关系。</li><li>2、只要对外接口不变，模块内部的修改，就不得影响其他模块。</li><li>3、删除一个模块，应当只影响有依赖关系的其他模块，而不应该影响其他无关部分。</li></ul></li></ul><h1 id="_23-讲一下对复用的几个层次-代码级-函数级-模块级-服务级的理解-以及在设计过程中的思路和原则" tabindex="-1"><a class="header-anchor" href="#_23-讲一下对复用的几个层次-代码级-函数级-模块级-服务级的理解-以及在设计过程中的思路和原则"><span>23. 讲一下对复用的几个层次，代码级，函数级，模块级，服务级的理解，以及在设计过程中的思路和原则</span></a></h1><h1 id="_24-shiro组件-认证-权限怎么做-与spring-security区别-spring-security认证和鉴权-spring-security-oauth2认证" tabindex="-1"><a class="header-anchor" href="#_24-shiro组件-认证-权限怎么做-与spring-security区别-spring-security认证和鉴权-spring-security-oauth2认证"><span>24. shiro组件，认证，权限怎么做？与spring security区别？spring Security认证和鉴权？spring Security oauth2认证</span></a></h1><p><code>![SpringSecurity](SpringSecurity.md/#SpringSecurity)</code></p>',5);function O(P,A){const l=d("ExternalLinkIcon");return t(),r("div",null,[v,i("ul",null,[i("li",null,[e("基于 Redis SortedSet 实现延迟队列。有赞的实现方案"),i("a",u,[e("https://tech.youzan.com/queuing"),s(l)]),e(" delay/")]),m]),o,i("ul",null,[b,i("li",null,[e("第三方支付渠道对账文件下载方式分类 "),i("ul",null,[p,i("li",null,[e("定时调用下载对账文件接口（微信支付宝招行云直连）"),i("a",g,[e("https://api.mch.weixin.qq.com/pay/downloadbill，ntnstqryx招行"),s(l)])])])]),h,f,_]),x,i("ul",null,[S,D,y,k,L,T,w,R,C,i("li",null,[e("下载文件wget "),i("a",q,[e("http://some.webstie/some.tar.gz"),s(l)])]),E]),I])}const B=a(c,[["render",O],["__file","scenedesign.html.vue"]]),N=JSON.parse('{"path":"/interview/scenedesign.html","title":"场景设计","lang":"zh-CN","frontmatter":{"title":"场景设计","date":"2023-01-01T00:00:00.000Z","tags":"java","categories":"面试","description":"1. 支付系统设计 1.1. 支付系统架构图 payprocess.pngpayprocess.png 1.2. 商户系统设计 下单时需要同时插入需要做的记录和状态，比如报名活动下单时是delete=1，回调成功则变成delete=1，而不是成功回调才插入 下单时提交额外参数最好是id，回调的时候根据id修改订单和记录的状态delete=0 支付后最先...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/interview/scenedesign.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"场景设计"}],["meta",{"property":"og:description","content":"1. 支付系统设计 1.1. 支付系统架构图 payprocess.pngpayprocess.png 1.2. 商户系统设计 下单时需要同时插入需要做的记录和状态，比如报名活动下单时是delete=1，回调成功则变成delete=1，而不是成功回调才插入 下单时提交额外参数最好是id，回调的时候根据id修改订单和记录的状态delete=0 支付后最先..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/d4a02ad890b4cf42ab109.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"场景设计\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/d4a02ad890b4cf42ab109.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/4021f4a12d493c1a96e79.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/f718d072b6567151798eb.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/d44f02e28c96b279f7aa5.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/af9e39be4400e525eb30c.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/39723ce62d4b0a4e98bb8.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/1e3783bb5c71541c69a98.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/0195417399fa59b3485cd.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/c06866a714f91963ccb88.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/ba128c99d9939e8bf3745.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/2d04bc6f96beb57b9ea8e.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/eae1914c04a3d341bfb3f.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/e26e2f67cbb333f48b6a3.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/6c5536628ad13c7529c03.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/4a41e14b187155e112f87.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/88b98a4e35d755ca1ff7a.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/e5fc8eaeb7aedb13ab5d5.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/b8fe33d4224695aa1e3ea.jpg\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"1.1. 支付系统架构图","slug":"_1-1-支付系统架构图","link":"#_1-1-支付系统架构图","children":[]},{"level":2,"title":"1.2. 商户系统设计","slug":"_1-2-商户系统设计","link":"#_1-2-商户系统设计","children":[]},{"level":2,"title":"1.3. 发起下单网络调用超时订单表会保存么？","slug":"_1-3-发起下单网络调用超时订单表会保存么","link":"#_1-3-发起下单网络调用超时订单表会保存么","children":[]},{"level":2,"title":"1.4. 先发起下单再保存数据库还是相反？","slug":"_1-4-先发起下单再保存数据库还是相反","link":"#_1-4-先发起下单再保存数据库还是相反","children":[]},{"level":2,"title":"1.5. 如何防止重复支付？","slug":"_1-5-如何防止重复支付","link":"#_1-5-如何防止重复支付","children":[]},{"level":2,"title":"1.6. 调用第三方银行接口怎么保证不超过银行的qps？","slug":"_1-6-调用第三方银行接口怎么保证不超过银行的qps","link":"#_1-6-调用第三方银行接口怎么保证不超过银行的qps","children":[]},{"level":2,"title":"1.7. 回调没收到怎么办？掉单","slug":"_1-7-回调没收到怎么办-掉单","link":"#_1-7-回调没收到怎么办-掉单","children":[]},{"level":2,"title":"1.8. 超时30分钟怎么自动关闭订单","slug":"_1-8-超时30分钟怎么自动关闭订单","link":"#_1-8-超时30分钟怎么自动关闭订单","children":[]},{"level":2,"title":"2.1. 渠道数据处理模块","slug":"_2-1-渠道数据处理模块","link":"#_2-1-渠道数据处理模块","children":[]},{"level":2,"title":"2.2. 数据处理模块","slug":"_2-2-数据处理模块","link":"#_2-2-数据处理模块","children":[]},{"level":2,"title":"2.3. 数据核对模块","slug":"_2-3-数据核对模块","link":"#_2-3-数据核对模块","children":[]},{"level":2,"title":"2.4. 差异数据处理模块","slug":"_2-4-差异数据处理模块","link":"#_2-4-差异数据处理模块","children":[]},{"level":2,"title":"3.1. 为什么需要权限管理？","slug":"_3-1-为什么需要权限管理","link":"#_3-1-为什么需要权限管理","children":[]},{"level":2,"title":"3.2. 权限设计","slug":"_3-2-权限设计","link":"#_3-2-权限设计","children":[]},{"level":2,"title":"3.3. 权限模型的演进","slug":"_3-3-权限模型的演进","link":"#_3-3-权限模型的演进","children":[]},{"level":2,"title":"3.4. 用户划分","slug":"_3-4-用户划分","link":"#_3-4-用户划分","children":[]},{"level":2,"title":"3.5. 理想RBAC模型","slug":"_3-5-理想rbac模型","link":"#_3-5-理想rbac模型","children":[]},{"level":2,"title":"3.6. 标准RBAC模型表设计","slug":"_3-6-标准rbac模型表设计","link":"#_3-6-标准rbac模型表设计","children":[]},{"level":2,"title":"4.1. 什么是幂等？","slug":"_4-1-什么是幂等","link":"#_4-1-什么是幂等","children":[]},{"level":2,"title":"4.2. 有哪些幂等性问题？","slug":"_4-2-有哪些幂等性问题","link":"#_4-2-有哪些幂等性问题","children":[]},{"level":2,"title":"4.3. 解决方案","slug":"_4-3-解决方案","link":"#_4-3-解决方案","children":[]},{"level":2,"title":"6.1. 为什么要限流呢？","slug":"_6-1-为什么要限流呢","link":"#_6-1-为什么要限流呢","children":[]},{"level":2,"title":"6.2. 限流和熔断有什么区别？","slug":"_6-2-限流和熔断有什么区别","link":"#_6-2-限流和熔断有什么区别","children":[]},{"level":2,"title":"6.3. 限流和削峰有什么区别？","slug":"_6-3-限流和削峰有什么区别","link":"#_6-3-限流和削峰有什么区别","children":[]},{"level":2,"title":"6.4. 限流实现步骤","slug":"_6-4-限流实现步骤","link":"#_6-4-限流实现步骤","children":[]},{"level":2,"title":"6.5. 单机限流和分布式限流","slug":"_6-5-单机限流和分布式限流","link":"#_6-5-单机限流和分布式限流","children":[]},{"level":2,"title":"6.6. 四种限流算法与分布式实现","slug":"_6-6-四种限流算法与分布式实现","link":"#_6-6-四种限流算法与分布式实现","children":[{"level":3,"title":"6.6.1. 固定窗口限流算法","slug":"_6-6-1-固定窗口限流算法","link":"#_6-6-1-固定窗口限流算法","children":[]},{"level":3,"title":"6.6.2. 滑动窗口算法","slug":"_6-6-2-滑动窗口算法","link":"#_6-6-2-滑动窗口算法","children":[]},{"level":3,"title":"6.6.3. 漏桶算法","slug":"_6-6-3-漏桶算法","link":"#_6-6-3-漏桶算法","children":[]},{"level":3,"title":"6.6.4. 令牌桶算法","slug":"_6-6-4-令牌桶算法","link":"#_6-6-4-令牌桶算法","children":[]}]},{"level":2,"title":"7.1. 数据提取","slug":"_7-1-数据提取","link":"#_7-1-数据提取","children":[]},{"level":2,"title":"7.2. 数据转换","slug":"_7-2-数据转换","link":"#_7-2-数据转换","children":[]},{"level":2,"title":"7.3. 数据保存","slug":"_7-3-数据保存","link":"#_7-3-数据保存","children":[]},{"level":2,"title":"8.1. 怎么保证实时性","slug":"_8-1-怎么保证实时性","link":"#_8-1-怎么保证实时性","children":[]},{"level":2,"title":"8.2. 为什么消息是无序的？","slug":"_8-2-为什么消息是无序的","link":"#_8-2-为什么消息是无序的","children":[]},{"level":2,"title":"8.3. 怎么保证消息有序？","slug":"_8-3-怎么保证消息有序","link":"#_8-3-怎么保证消息有序","children":[]},{"level":2,"title":"8.4. 怎么做消息已读？","slug":"_8-4-怎么做消息已读","link":"#_8-4-怎么做消息已读","children":[]}],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":44.36,"words":13308},"filePathRelative":"interview/scenedesign.md","localizedDate":"2023年1月1日","excerpt":"<!-- more -->\\n<!-- TOC -->\\n<!-- TOC -->\\n<h1>1. 支付系统设计</h1>\\n<h2>1.1. 支付系统架构图</h2>\\n<figure><img src=\\"https://290ff162.telegraph-image-eg9.pages.dev/file/d4a02ad890b4cf42ab109.png\\" alt=\\"payprocess.png\\" tabindex=\\"0\\"><figcaption>payprocess.png</figcaption></figure>\\n<h2>1.2. 商户系统设计</h2>\\n<ul>\\n<li>下单时需要同时插入需要做的记录和状态，比如报名活动下单时是delete=1，回调成功则变成delete=1，而不是成功回调才插入</li>\\n<li>下单时提交额外参数最好是id，回调的时候根据id修改订单和记录的状态delete=0</li>\\n<li>支付后最先判断订单是否已经处理，保持幂等性</li>\\n<li>收入订单和支出订单前缀不要一样</li>\\n<li>涉及支付回调或者阻塞都是先设置status为0的状态的记录并提交事务，然后调用他们的接口回填status的状态</li>\\n</ul>","autoDesc":true}');export{B as comp,N as data};
