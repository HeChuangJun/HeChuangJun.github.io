import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as t,c as r,b as i,d as e,e as d,a as l}from"./app-CbX7tyD8.js";const c={},u=l(`<h2 id="接口幂等性怎么设计" tabindex="-1"><a class="header-anchor" href="#接口幂等性怎么设计"><span>接口幂等性怎么设计？</span></a></h2><h3 id="什么是幂等" tabindex="-1"><a class="header-anchor" href="#什么是幂等"><span>什么是幂等？</span></a></h3><ul><li>对于同一笔业务操作，不管调用多少次，得到的结果都是一样的。订单支付成功回调通知多次应该每次结果一致。简单说，就是多次调用如一次。</li></ul><h3 id="有哪些幂等性问题" tabindex="-1"><a class="header-anchor" href="#有哪些幂等性问题"><span>有哪些幂等性问题？</span></a></h3><ul><li>前段重复提交</li><li>接口超时重试</li><li>mq消费读到重复消息</li></ul><h3 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h3><ul><li>insert前先select:保存数据的前，先判断数据是否已存在，如果数据已存在，则直接返回，如果不存在，才执行insert操作</li><li>建防重表并加唯一索引:如果重复插入数据的话，就会抛出异常，为了保证幂等性，一般需要捕获这个异常。java程序需要捕获：DuplicateKeyException异常，spring框架还需要捕获MySQLIntegrityConstraintViolationException异常。例如消息消费中，创建防重表，存储消息的唯一ID，消费时先去查询是否已经消费，已经消费直接返回成功</li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/e26e2f67cbb333f48b6a3.jpg" alt="mysqlduplicateremove.png" tabindex="0"><figcaption>mysqlduplicateremove.png</figcaption></figure><ul><li>加悲观锁:同一时刻只允许一个请求获得锁，其他请求则等待。比如更新用户账户余额，把对应用户的哪一行数据锁住。select * from user id=xx for update;缺点是获取不到锁的请求一般只能报失败，比较难保证接口返回相同值。</li><li>加乐观锁:更新逻辑，性能更好。在表中增加一个timestamp或者version字段,在更新前，先查询一下数据，将version也作为更新的条件，同时也更新version：update user set amount=amount+100,version=version+1 where id=123 and version=1;更新成功后，version增加，重复更新请求进来就无法更新了。</li><li>状态机:有些业务表是有状态的，比如订单表中有：1-下单、2-已支付、3-完成、4-撤销等状态，可以通过限制状态的流动来完成幂等。</li><li>分布式锁:直接在数据库上加锁的做法性能不够友好，可以使用分布式锁的方式，目前最流行的分布式锁实现是通过Redis，具体实现一般都是使用Redission框架</li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/6c5536628ad13c7529c03.jpg" alt="redisduplicateremove.png" tabindex="0"><figcaption>redisduplicateremove.png</figcaption></figure><ul><li>token机制: <ul><li>客户端会先发送一个请求去获取 token，服务端会生成一个全局唯一的ID 作为 token 保存在 redis 中，同时把这个 |D 返回给客户端</li><li>客户端第二次调用业务请求的时候必须携带这个 token</li><li>服务端会校验这个 token，如果校验成功，则执行业务，并删除 redis 中的token</li><li>如果校验失败，说明 redis 中已经没有对应的 token，则表示重复操作，直接返回指定的结果给客户端</li><li>对 redis 中是否存在 token 以及删除的代码逻辑建议用 Lua 脚本实现，保证原子性</li><li>全局唯一ID 可以用百度的 uid-generator、美团的 Leaf 去生成</li></ul></li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/4a41e14b187155e112f87.jpg" alt="token.png" tabindex="0"><figcaption>token.png</figcaption></figure><h2 id="手机扫码pc登录" tabindex="-1"><a class="header-anchor" href="#手机扫码pc登录"><span>手机扫码pc登录</span></a></h2><ul><li>1.访问PC端二维码生成页面，PC端请求服务端获取二维码ID</li><li>2.服务端生成相应的 二维码ID ，设置二维码的过期时间，状态等。</li><li>3.PC获取 二维码ID，生成相应的二维码。</li><li>4.手机端扫描二维码，获取 二维码ID。</li><li>5.手机端将 手机端token和 二维码ID 发送给服务端，确认登录。</li><li>6.服务端校验 手机端token，根据手机端token和二维码ID生成 PC端token</li><li>7.PC端通过轮询方式请求服务端，通过二维码ID 获取二维码状态，如果已成功，返回PC token，登录成功</li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/88b98a4e35d755ca1ff7a.jpg" alt="phonescancode.jpg" tabindex="0"><figcaption>phonescancode.jpg</figcaption></figure><h2 id="etl怎么设计" tabindex="-1"><a class="header-anchor" href="#etl怎么设计"><span>ETL怎么设计</span></a></h2><h3 id="数据提取" tabindex="-1"><a class="header-anchor" href="#数据提取"><span>数据提取</span></a></h3><ul><li>使用策略模式采集不同的数据，接口、视图等</li><li>接口采用异步投放到消息队列削峰</li><li>视图采用定时任务按照时间间隔来抓取数据</li></ul><h3 id="数据转换" tabindex="-1"><a class="header-anchor" href="#数据转换"><span>数据转换</span></a></h3><ul><li>按照业务逻辑将数据转换成保存接口的数据</li></ul><h3 id="数据保存" tabindex="-1"><a class="header-anchor" href="#数据保存"><span>数据保存</span></a></h3><ul><li>提供保存和更新接口</li></ul><h2 id="什么是ddd" tabindex="-1"><a class="header-anchor" href="#什么是ddd"><span>什么是ddd？</span></a></h2><ul><li><p>实现DDD落地大致需要经历这样三个阶段</p><ul><li>业务分析：项目团队的成员主要包括领域专家、设计人员、开发人员等一起对业务问题域以及业务期望进行全面的梳理，厘请业务中的统一语言，在业务领域中发现领域事件、领域对象及其对应的领域行为，搞清楚他们各自的关联关系</li><li>战略设计：通过DDD理论对业务进行领域划分构建领域模型，梳理出相应的限界上下文，通过统一的领域语言从战略层面进行领域划分以及构建领域模型。在构建领域模型的过程中需要梳理出对应的聚合根、实体、以及值对象。</li><li>战术设计：以领域模型为战术设计的输入，以限界上下文作为微服务划分的边界进行微服务拆分，在每个微服务中进行领域分层，实现领域模型对于代码的映射，从而实现 DDD 的真正落地实施。</li></ul></li><li><p>概念</p><ul><li>实体（Entity），具备唯一ID，能够被持久化，具备业务逻辑，对应现实世界业务对象的业务属性以及业务行为。</li><li>值对象（Value Object），不具有唯一ID，由对象的属性描述，一般为内存中的临时对象，可以用来传递参数或对实体进行补充描述。值对象以及实体都是领域模型中的领域对象，是组成领域模型的基础元素，一起实现领域内的最基本的核心领域逻辑。</li><li>领域服务（Domain Service），为上层建筑提供可操作的接口，负责对领域对象进行调度和封装，同时可以对外提供各种形式的服务。</li><li>聚合根（Aggregate Root），聚合根属于实体对象，聚合根具有全局唯一ID，而实体只有在聚合内部有唯一的本地ID，值对象没有唯一ID。聚合根在聚合之内采用引用依赖的方式对实体和值对象进行组织和协调，聚合根和聚合根之间通过唯一 id 进行聚合之间的协同。</li><li>工厂（Factories），主要用来创建聚合根，目前架构实践中一般采用IOC容器来实现工厂的功能。</li><li>仓储（Repository），封装了基础设施来提供查询和持久化聚合操作。</li><li>聚合：有业务关联关系的实体以及值对象的集合，通过实体、值对象以及各自之间的业务逻辑聚合在一起完成某个业务节点。可以根据业务的单一职责以及高内聚的的设计原来来进行聚合的划分</li></ul></li><li><p>如何建立领域模型？</p><ul><li>业务分析：领域专家、DDD 专家、架构师、产品经理、项目经理、开发人员以及测试人员等集合在一起之后需要通过头脑风暴的方式梳理当前的业务域问题</li><li>领域建模：找出实体和值对象，构建聚合，划分聚合到边界上下文</li></ul></li></ul><h2 id="数组去重" tabindex="-1"><a class="header-anchor" href="#数组去重"><span>数组去重</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public static Object[] oneClear(Object[] arr){
    Set set = new HashSet();
    for(int i=0;i&lt;arr.length;i++){
    　 set.add(arr[i]);
    　}
    return set.toArray();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="单点登录" tabindex="-1"><a class="header-anchor" href="#单点登录"><span>单点登录</span></a></h2><ul><li>第一次请求app server fillter判断有没有局部session（登录状态等）和token，301重定向sso带上请求url参数</li><li>sso通过filter和全局session判断是否登录，未登录跳到登录页面并返回请求url参数，输入用户名密码和url参数请求登录</li><li>登录成功创建全局会话和令牌token，301重定向到app server带上token</li><li>app server判断没有局部session则带上token、url访问sso校验有全局session ，重定向到app server返回登录成功</li><li>app server根据结果创建session</li></ul><h2 id="微服务session共享" tabindex="-1"><a class="header-anchor" href="#微服务session共享"><span>微服务session共享</span></a></h2><ul><li>在微服务中，一个完整的项目被拆分成多个不相同的独立的服务，各个服务独立部署在不同的服务器上，各自的 session 被从物理空间上隔离开了，但是经常，我们需要在不同微服务之间共享 session ，常见的方案就是 Spring Session + Redis 来实现 session 共享。将所有微服务的 session 统一保存在 Redis 上，当各个微服务对 session 有相关的读写操作时，都去操作 Redis 上的 session 。这样就实现了 session 共享，Spring Session 基于 Spring 中的代理过滤器实现，使得 session 的同步操作对开发人员而言是透明的，非常简便。</li></ul><h2 id="编写消费者-生产者模式demo代码" tabindex="-1"><a class="header-anchor" href="#编写消费者-生产者模式demo代码"><span>编写消费者-生产者模式Demo代码</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="java处理高并发" tabindex="-1"><a class="header-anchor" href="#java处理高并发"><span>Java处理高并发</span></a></h2><ul><li><p>采用分布式部署的方式，部署多台服务器，把流量分流开，让每个服务器都承担一部分的并发和流量，提升整体系统的并发能力。</p></li><li><p>微服务拆分，把一个单体的应用，按功能单一性，拆分为多个服务模块。比如一个电商系统，拆分为用户系统、订单系统、商品系统等等</p></li><li><p>分库分表</p></li><li><p>主从分离：实时性要求不高的读请求，都去读从库，写的请求或者实时性要求高的请求，才走主库</p></li><li><p>池化技术：数据库连接池、Redis 连接池、线程池</p></li><li><p>缓存：Redis缓存</p></li><li><p>CDN加速静态资源访问</p></li><li><p>消息队列，削锋</p></li><li><p>ElasticSearch：支持简单的查询搜索、统计类的操作。</p></li><li><p>降级熔断：开源组件Hystrix</p></li><li><p>限流：可以使用Guava的RateLimiter单机版限流，也可以使用Redis分布式限流，还可以使用阿里开源组件sentinel限流。</p></li><li><p>异步：后端可以借用消息队列实现。比如在海量秒杀请求过来时，先放到消息队列中，快速响应用户，告诉用户请求正在处理中，这样就可以释放资源来处理更多的请求。秒杀请求处理完后，通知用户秒杀抢购成功或者失败</p></li><li><p>接口的常规优化</p></li><li><p>压力测试确定系统瓶颈：压测完要分析整个调用链路，性能可能出现问题是网络层（如带宽）、Nginx层、服务层、还是数据路缓存等中间件等等。loadrunner是一款不错的压力测试工具，jmeter则是接口性能测试工具，都可以来做下压测。</p></li><li><p>应对突发流量峰值：扩容+切流量：扩容：比如增加从库、提升配置的方式，提升系统/组件的流量承载能力。比如增加MySQL、Redis从库来处理查询请求。<br> 切流量：服务多机房部署，如果高并发流量来了，把流量从一个机房切换到另一个机房。</p></li><li><p>HTML静态化</p></li><li><p>图片服务器分离</p></li><li><p>数据库集群，库表散列</p></li><li><p>镜像</p></li><li><p>负载均衡</p></li></ul><h2 id="请说出2种减少页面加载时间的方法" tabindex="-1"><a class="header-anchor" href="#请说出2种减少页面加载时间的方法"><span>请说出2种减少页面加载时间的方法</span></a></h2><ul><li><ol><li>减少重复的HTTP请求数量</li></ol></li><li><ol start="2"><li>压缩Javascript、CSS代码</li></ol></li><li><ol start="3"><li>在文件头部放置css样式的定义</li></ol></li><li><ol start="4"><li>在文件末尾放Javascript脚本</li></ol></li><li><ol start="5"><li>css、javascript改由外部调用</li></ol></li><li><ol start="6"><li>尽可能减少DCOM元素</li></ol></li><li><ol start="7"><li>避免使用CSS脚本(CSS Expressions)</li></ol></li><li><ol start="10"><li>服务器启用gzip压缩功能</li></ol></li><li><ol start="11"><li>Ajax采用缓存调用</li></ol></li><li><ol start="12"><li>Ajax调用尽量采用GET方法调用</li></ol></li><li><ol start="13"><li>养成良好的开发维护习惯，尽量避免脚本重复调用</li></ol></li><li><ol start="14"><li>缩减iframe的使用，如无必要，尽量不要使用</li></ol></li></ul><h2 id="软件开发一般有几个阶段-每个阶段的作用" tabindex="-1"><a class="header-anchor" href="#软件开发一般有几个阶段-每个阶段的作用"><span>软件开发一般有几个阶段？每个阶段的作用？</span></a></h2><ul><li>问题的定义及规划:软件开发与需求放共同讨论，主要确定软件的开发目标及其可行性。</li><li>需求分析:在确定软件开发可行性的情况下，对软件需要实现的各个功能进行详细需求分析。为整个软件项目的开发打下良好的基础</li><li>软件设计:此阶段中偶要根据需求分析的结果，对整个软件系统进行设计，如系统框架设计、数据库设计等软件设计一般分为总体设计和详细设计。软件设计将为软件程序编写打下良好的基础</li><li>程序编码:此阶段是将软件设计的结果转化为计算机可运行的程序代码。在程序编码中必定要制定统一、符合标准的编写规范。以保证程序的可读性、易维护性。提高程序的运行效率。</li><li>软件测试:在软件设计完成之后要进行严密的测试，一发现软件在整个软件设计过程中存在的问题并加以纠正.分为单元测试、组装测试、系统测试三个阶段进行。测试方法主要有白盒测试和黑盒测试</li></ul><h2 id="英文字母和中文汉字在不同字符集编码下的字节数" tabindex="-1"><a class="header-anchor" href="#英文字母和中文汉字在不同字符集编码下的字节数"><span>英文字母和中文汉字在不同字符集编码下的字节数</span></a></h2><ul><li>英文字母都是1字节：GB2312，GBK，ISO-8859-1，UTF-8</li><li>中文汉字：GB2312 2字节：GBK 2字节 ；ISO-8859-1 1字节；UTF-8 3字节</li></ul><h2 id="敏捷开发与devops" tabindex="-1"><a class="header-anchor" href="#敏捷开发与devops"><span>敏捷开发与devOps</span></a></h2><ul><li>DevOps强调的是高效组织团队(开发、运维、测试)之间如何通过自动化的工具协作和沟通来完成软件的生命周期管理，从而更快、更频繁地交付更稳定的软件（软件的发布和管理）</li><li>敏捷开发并不追求前期完美的设计、完美编码，而是力求在很短的周期内开发出产品的核心功能，尽早发布出可用的版本。然后在后续的生产周期内，按照新需求不断迭代升级，完善产品（软件的开发）</li></ul><h2 id="http请求方法有哪些" tabindex="-1"><a class="header-anchor" href="#http请求方法有哪些"><span>http请求方法有哪些?</span></a></h2><ul><li>GET 请求指定的页面信息，并返回实体主体。</li><li>HEAD 只请求页面的首部 仅传输状态行和标题部分</li><li>PUT PUT方法用于将数据发送到服务器以创建或更新资源，它可以用上传的内容替换目标资源中的所有当前内容。</li><li>POST 请求服务器接受所指定的文档作为对所标识的URI的新的从属实体</li><li>DELETE 用来删除指定的资源，它会删除URI给出的目标资源的所有当前内容。</li></ul><h2 id="restful" tabindex="-1"><a class="header-anchor" href="#restful"><span>RestFul</span></a></h2><ul><li>每一个URI代表1种资源；客户端使用GET、POST、PUT、DELETE4个表示操作方式的动词对服务端资源进行操作：GET用来获取资源，POST用来新建资源（也可以用于更新资源），PUT用来更新资源，DELETE用来删除资源；</li></ul><h2 id="linux常用命令√" tabindex="-1"><a class="header-anchor" href="#linux常用命令√"><span>linux常用命令√</span></a></h2>`,48),v=i("li",null,"目录切换：cd 路径",-1),o=i("li",null,"增加目录：mkdir 目录名称",-1),p=i("li",null,"查看目录：ls",-1),h=i("li",null,"修改文件：vim 文件名 vim 文件→进入文件→命令模式→按i进入编辑模式→编辑文件→按Esc进入底行模式→输入:wq/q!",-1),m=i("li",null,"删除文件（删）: rm -rf 文件名",-1),b=i("li",null,"查找文件：find / -name httpd.conf",-1),g=i("li",null,'查找文件内容grep "被查找的字符串" *.log',-1),f=i("li",null,"查看所有linux的java进程 ps -ef | grep java",-1),x=i("li",null,"查看linux的内核版本 uname -a",-1),k={href:"http://some.webstie/some.tar.gz",target:"_blank",rel:"noopener noreferrer"},y=i("li",null,"302临时重定向、301永久重定向（sso单点登录用到）",-1),T=l('<h2 id="对-高内聚-低耦合-方法理解-你在程序设计和架构设计中的经验" tabindex="-1"><a class="header-anchor" href="#对-高内聚-低耦合-方法理解-你在程序设计和架构设计中的经验"><span>对&quot;高内聚，低耦合&quot;方法理解，你在程序设计和架构设计中的经验</span></a></h2><ul><li>降低耦合度的方法 <ul><li>1、少使用类的继承，多用接口隐藏实现的细节。 Java面向对象编程引入接口除了支持多态外， 隐藏实现细节也是其中一个目的。</li><li>2、模块的功能化分尽可能的单一，道理也很简单，功能单一的模块供其它模块调用的机会就少。（其实这是高内聚的一种说法，高内聚低耦合一般同时出现）。</li><li>3、遵循一个定义只在一个地方出现。</li><li>4、少使用全局变量。</li><li>5、类属性和方法的声明少用public，多用private关键字。</li><li>6、多用设计模式，比如采用MVC的设计模式就可以降低界面与业务逻辑的耦合度。</li><li>7、尽量不用“硬编码”的方式写程序，同时也尽量避免直接用SQL语句操作数据库。</li><li>8、最后当然就是避免直接操作或调用其它模块或类（内容耦合）；如果模块间必须存在耦合，原则上尽量使用数据耦合，少用控制耦合，限制公共耦合的范围，避免使用内容耦合。</li></ul></li><li>增强内聚度方法 <ul><li>1、模块只对外暴露最小限度的接口，形成最低的依赖关系。</li><li>2、只要对外接口不变，模块内部的修改，就不得影响其他模块。</li><li>3、删除一个模块，应当只影响有依赖关系的其他模块，而不应该影响其他无关部分。</li></ul></li></ul><h2 id="讲一下对复用的几个层次-代码级-函数级-模块级-服务级的理解-以及在设计过程中的思路和原则" tabindex="-1"><a class="header-anchor" href="#讲一下对复用的几个层次-代码级-函数级-模块级-服务级的理解-以及在设计过程中的思路和原则"><span>讲一下对复用的几个层次，代码级，函数级，模块级，服务级的理解，以及在设计过程中的思路和原则</span></a></h2><h2 id="shiro组件-认证-权限怎么做-与spring-security区别-spring-security认证和鉴权-spring-security-oauth2认证" tabindex="-1"><a class="header-anchor" href="#shiro组件-认证-权限怎么做-与spring-security区别-spring-security认证和鉴权-spring-security-oauth2认证"><span>shiro组件，认证，权限怎么做？与spring security区别？spring Security认证和鉴权？spring Security oauth2认证</span></a></h2><p><code>![SpringSecurity](SpringSecurity.md/#SpringSecurity)</code></p>',5);function w(S,D){const n=a("ExternalLinkIcon");return t(),r("div",null,[u,i("ul",null,[v,o,p,h,m,b,g,f,x,i("li",null,[e("下载文件wget "),i("a",k,[e("http://some.webstie/some.tar.gz"),d(n)])]),y]),T])}const E=s(c,[["render",w],["__file","scenedesign.html.vue"]]),I=JSON.parse('{"path":"/interview/scenedesign/scenedesign.html","title":"场景设计","lang":"zh-CN","frontmatter":{"title":"场景设计","date":"2023-01-01T00:00:00.000Z","tags":"面试","categories":"面试","description":"接口幂等性怎么设计？ 什么是幂等？ 对于同一笔业务操作，不管调用多少次，得到的结果都是一样的。订单支付成功回调通知多次应该每次结果一致。简单说，就是多次调用如一次。 有哪些幂等性问题？ 前段重复提交 接口超时重试 mq消费读到重复消息 解决方案 insert前先select:保存数据的前，先判断数据是否已存在，如果数据已存在，则直接返回，如果不存在，才...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/interview/scenedesign/scenedesign.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"场景设计"}],["meta",{"property":"og:description","content":"接口幂等性怎么设计？ 什么是幂等？ 对于同一笔业务操作，不管调用多少次，得到的结果都是一样的。订单支付成功回调通知多次应该每次结果一致。简单说，就是多次调用如一次。 有哪些幂等性问题？ 前段重复提交 接口超时重试 mq消费读到重复消息 解决方案 insert前先select:保存数据的前，先判断数据是否已存在，如果数据已存在，则直接返回，如果不存在，才..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/e26e2f67cbb333f48b6a3.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"场景设计\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/e26e2f67cbb333f48b6a3.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/6c5536628ad13c7529c03.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/4a41e14b187155e112f87.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/88b98a4e35d755ca1ff7a.jpg\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"接口幂等性怎么设计？","slug":"接口幂等性怎么设计","link":"#接口幂等性怎么设计","children":[{"level":3,"title":"什么是幂等？","slug":"什么是幂等","link":"#什么是幂等","children":[]},{"level":3,"title":"有哪些幂等性问题？","slug":"有哪些幂等性问题","link":"#有哪些幂等性问题","children":[]},{"level":3,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[]}]},{"level":2,"title":"手机扫码pc登录","slug":"手机扫码pc登录","link":"#手机扫码pc登录","children":[]},{"level":2,"title":"ETL怎么设计","slug":"etl怎么设计","link":"#etl怎么设计","children":[{"level":3,"title":"数据提取","slug":"数据提取","link":"#数据提取","children":[]},{"level":3,"title":"数据转换","slug":"数据转换","link":"#数据转换","children":[]},{"level":3,"title":"数据保存","slug":"数据保存","link":"#数据保存","children":[]}]},{"level":2,"title":"什么是ddd？","slug":"什么是ddd","link":"#什么是ddd","children":[]},{"level":2,"title":"数组去重","slug":"数组去重","link":"#数组去重","children":[]},{"level":2,"title":"单点登录","slug":"单点登录","link":"#单点登录","children":[]},{"level":2,"title":"微服务session共享","slug":"微服务session共享","link":"#微服务session共享","children":[]},{"level":2,"title":"编写消费者-生产者模式Demo代码","slug":"编写消费者-生产者模式demo代码","link":"#编写消费者-生产者模式demo代码","children":[]},{"level":2,"title":"Java处理高并发","slug":"java处理高并发","link":"#java处理高并发","children":[]},{"level":2,"title":"请说出2种减少页面加载时间的方法","slug":"请说出2种减少页面加载时间的方法","link":"#请说出2种减少页面加载时间的方法","children":[]},{"level":2,"title":"软件开发一般有几个阶段？每个阶段的作用？","slug":"软件开发一般有几个阶段-每个阶段的作用","link":"#软件开发一般有几个阶段-每个阶段的作用","children":[]},{"level":2,"title":"英文字母和中文汉字在不同字符集编码下的字节数","slug":"英文字母和中文汉字在不同字符集编码下的字节数","link":"#英文字母和中文汉字在不同字符集编码下的字节数","children":[]},{"level":2,"title":"敏捷开发与devOps","slug":"敏捷开发与devops","link":"#敏捷开发与devops","children":[]},{"level":2,"title":"http请求方法有哪些?","slug":"http请求方法有哪些","link":"#http请求方法有哪些","children":[]},{"level":2,"title":"RestFul","slug":"restful","link":"#restful","children":[]},{"level":2,"title":"linux常用命令√","slug":"linux常用命令√","link":"#linux常用命令√","children":[]},{"level":2,"title":"对\\"高内聚，低耦合\\"方法理解，你在程序设计和架构设计中的经验","slug":"对-高内聚-低耦合-方法理解-你在程序设计和架构设计中的经验","link":"#对-高内聚-低耦合-方法理解-你在程序设计和架构设计中的经验","children":[]},{"level":2,"title":"讲一下对复用的几个层次，代码级，函数级，模块级，服务级的理解，以及在设计过程中的思路和原则","slug":"讲一下对复用的几个层次-代码级-函数级-模块级-服务级的理解-以及在设计过程中的思路和原则","link":"#讲一下对复用的几个层次-代码级-函数级-模块级-服务级的理解-以及在设计过程中的思路和原则","children":[]},{"level":2,"title":"shiro组件，认证，权限怎么做？与spring security区别？spring Security认证和鉴权？spring Security oauth2认证","slug":"shiro组件-认证-权限怎么做-与spring-security区别-spring-security认证和鉴权-spring-security-oauth2认证","link":"#shiro组件-认证-权限怎么做-与spring-security区别-spring-security认证和鉴权-spring-security-oauth2认证","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":15.97,"words":4790},"filePathRelative":"interview/scenedesign/scenedesign.md","localizedDate":"2023年1月1日","excerpt":"<!-- more -->\\n<h2>接口幂等性怎么设计？</h2>\\n<h3>什么是幂等？</h3>\\n<ul>\\n<li>对于同一笔业务操作，不管调用多少次，得到的结果都是一样的。订单支付成功回调通知多次应该每次结果一致。简单说，就是多次调用如一次。</li>\\n</ul>\\n<h3>有哪些幂等性问题？</h3>\\n<ul>\\n<li>前段重复提交</li>\\n<li>接口超时重试</li>\\n<li>mq消费读到重复消息</li>\\n</ul>\\n<h3>解决方案</h3>\\n<ul>\\n<li>insert前先select:保存数据的前，先判断数据是否已存在，如果数据已存在，则直接返回，如果不存在，才执行insert操作</li>\\n<li>建防重表并加唯一索引:如果重复插入数据的话，就会抛出异常，为了保证幂等性，一般需要捕获这个异常。java程序需要捕获：DuplicateKeyException异常，spring框架还需要捕获MySQLIntegrityConstraintViolationException异常。例如消息消费中，创建防重表，存储消息的唯一ID，消费时先去查询是否已经消费，已经消费直接返回成功</li>\\n</ul>","autoDesc":true}');export{E as comp,I as data};
