import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as d,o as t,c as r,b as e,d as i,e as a,a as n}from"./app-CbX7tyD8.js";const u={},v=n(`<p>延时任务设计</p><h2 id="超时30分钟怎么自动关闭订单" tabindex="-1"><a class="header-anchor" href="#超时30分钟怎么自动关闭订单"><span>超时30分钟怎么自动关闭订单</span></a></h2><ul><li>数据库定时任务（如Quartz）quartz-scheduler 支持集群操作；对服务器内存消耗大，数据库压力大，存在延时，最坏延时为定时时间</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;dependency&gt;
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c={href:"https://tech.youzan.com/queuing",target:"_blank",rel:"noopener noreferrer"},m=e("li",null,"Redis ZSet 实现 zadd key score(毫秒数) member score member 且long int = zrem key >0 且(毫秒数)大于当前时间",-1),o=n(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class AppTest {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>基于 RocketMQ 延迟消息。开箱即用，使用起来还是比较简单的。 <ul><li>RocketMQ延迟消息支持18个等级，分别如下:11s 5s 10s 30s 1m 2m3m4m5m6M7M8m 9m10m20m 30m 1h 2h</li><li>消息发送方可以通过以下方式指定延迟等级，对应上方的延迟时间Message#setDelayTimeLevel</li><li>消息消费方，如果消费失败，默认将会在消息发送方的的延迟等级基础上加1。如果消息消费方需要指定其他的延迟等级，可以使用如下方式:ConsumeConcurrentlyContext#setDelayLevelwhenNextConsume</li><li>RocketMQ延迟消息，支持的特性还是比较基础、简单，不支持自定义延迟时间。不过对于掉单补偿的这个场景刚好够用，但是如果需要自定义延迟的，那还是得采用其他的方案。</li></ul></li><li>MQ 延时队列实现 RabbitMQ可以针对Queue和Message设置 x-message-tt，来控制消息的生存时间，如果超时，则消息变为dead letter。RabbitMQ的Queue可以配置x-dead-letter-exchange 和x-dead-letter-routing-key（可选）两个参数，用来控制队列内出现了deadletter，则按照这两个参数重新路由。高效,可以利用rabbitmq的分布式特性轻易的进行横向扩展,消息支持持久化增加了可靠性。本身的易用度要依赖于rabbitMq的运维.因为要引用rabbitMq,所以复杂度和成本变高</li></ul>`,4);function b(p,g){const l=d("ExternalLinkIcon");return t(),r("div",null,[v,e("ul",null,[e("li",null,[i("基于 Redis SortedSet 实现延迟队列。有赞的实现方案"),e("a",c,[i("https://tech.youzan.com/queuing"),a(l)]),i(" delay/")]),m]),o])}const T=s(u,[["render",b],["__file","delaytask.html.vue"]]),S=JSON.parse('{"path":"/interview/scenedesign/delaytask.html","title":"延时任务设计","lang":"zh-CN","frontmatter":{"title":"延时任务设计","date":"2023-01-01T00:00:00.000Z","tags":"面试","categories":"面试","description":"延时任务设计","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/interview/scenedesign/delaytask.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"延时任务设计"}],["meta",{"property":"og:description","content":"延时任务设计"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"延时任务设计\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"超时30分钟怎么自动关闭订单","slug":"超时30分钟怎么自动关闭订单","link":"#超时30分钟怎么自动关闭订单","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":4.08,"words":1223},"filePathRelative":"interview/scenedesign/delaytask.md","localizedDate":"2023年1月1日","excerpt":"<p>延时任务设计</p>\\n","autoDesc":true}');export{T as comp,S as data};
