import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,a as l}from"./app-BPKJBNij.js";const s={},d=l(`<h2 id="为什么要限流呢" tabindex="-1"><a class="header-anchor" href="#为什么要限流呢"><span>为什么要限流呢？</span></a></h2><ul><li>避免流量多到过载，把系统打挂了所以，在各种大促活动之前，要对系统进行压测，评估整个系统的峰值QPS，要做一些限流的设置，超过一定阈值，就拒绝处理或者延后处理，避免把系统打挂的情况出现。</li></ul><h2 id="限流和熔断有什么区别" tabindex="-1"><a class="header-anchor" href="#限流和熔断有什么区别"><span>限流和熔断有什么区别？</span></a></h2><ul><li>限流发生在流量进来之前，超过的流量进行限制。</li><li>熔断是一种应对故障的机制，发生在流量进来之后，如果系统发生故障或者异常，熔断会自动切断请求，防止故障进一步扩展，导致服务雪崩。</li></ul><h2 id="限流和削峰有什么区别" tabindex="-1"><a class="header-anchor" href="#限流和削峰有什么区别"><span>限流和削峰有什么区别？</span></a></h2><ul><li>削峰是对流量的平滑处理，通过缓慢地增加请求的处理速率来避免系统瞬时过载。</li><li>削峰大概就是水库，把流量储存起来，慢慢流，限流大概就是闸口，拒绝超出的流量。</li><li>限流的通用流程</li></ul><h2 id="限流实现步骤" tabindex="-1"><a class="header-anchor" href="#限流实现步骤"><span>限流实现步骤</span></a></h2><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/e5fc8eaeb7aedb13ab5d5.jpg" alt="限流设计.png" tabindex="0"><figcaption>限流设计.png</figcaption></figure><ul><li>统计请求流量：记录请求的数量或速率，可以通过计数器、滑动窗口等方式进行统计。</li><li>判断是否超过限制：根据设定的限制条件，判断当前请求流量是否超过限制。</li><li>执行限流策略：如果请求流量超过限制，执行限流策略，如拒绝请求、延迟处理、返回错误信息等。</li><li>更新统计信息：根据请求的处理结果，更新统计信息，如增加计数器的值、更新滑动窗口的数据等。</li><li>重复执行以上步骤：不断地统计请求流量、判断是否超过限制、执行限流策略、更新统计信息</li><li>具体的限流算法实现可能会根据不同的场景和需求进行调整和优化，比如使用令牌桶算法、漏桶算法等。</li></ul><h2 id="单机限流和分布式限流" tabindex="-1"><a class="header-anchor" href="#单机限流和分布式限流"><span>单机限流和分布式限流</span></a></h2><ul><li>在限流的通用流程里，需要统计请求量、更新统计量，那么这个请求量的统计和更新就必须维护在一个存储里。单机版环境直接储存到本地。集群可以把统计信息Tair或Redis等分布式的K-V存储中。</li></ul><h2 id="四种限流算法与分布式实现" tabindex="-1"><a class="header-anchor" href="#四种限流算法与分布式实现"><span>四种限流算法与分布式实现</span></a></h2><ul><li>使用Redis作为分布式存储；Redission作为Redis客户端，Redission用来做分布式锁和作为Redis的客户端也非常好用</li><li>准备一下环境，Redis安装和项目创建就不多说了</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;!--依赖--&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="固定窗口限流算法-计数器" tabindex="-1"><a class="header-anchor" href="#固定窗口限流算法-计数器"><span>固定窗口限流算法/计数器</span></a></h3><ul><li>固定窗口算法，也称之为计数器算法，当然我个人理解，计数器算法是固定窗口算法的一种特例，把时间划分为固定的时间窗口，每个窗口内允许的请求次数设置限制。如果在一个时间窗口内，请求次数超过了上限，那么就会触发限流。</li><li>算法实现，在每个窗口期内，我们可以通过incrementAndGet操作来统计请求的数量。一旦窗口期结束，我们可以利用Redis的键过期功能来自动重置计数。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class FixedWindowRateLimiter {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>固定窗口算法的优点是实现简单，占用空间小，但是它存在临界问题，由于窗口的切换是瞬间完成的，因此请求的处理并不平滑，可能会在窗口切换的瞬间出现流量的剧烈波动。比如在00:02，突然有大量请求过来，但是我们这时候计数重置了，那么就没法限制突发的这些流量。</li></ul><h3 id="滑动窗口算法" tabindex="-1"><a class="header-anchor" href="#滑动窗口算法"><span>滑动窗口算法</span></a></h3><ul><li>为了缓解固定窗口的突发流量问题，可以采用滑动窗口算法，计算机网络中TCP的流量控制就是采用滑动窗口算法。</li><li>滑动窗口限流算法的原理是将一个大的时间窗口划分为多个小的时间窗口，每个小的窗口都有独立的计数。请求过来的时候，判断请求的次数是否超过整个窗口的限制。窗口的移动是每次向前滑动一个小的单元窗口</li><li>例如下面这个滑动窗口，将大时间窗口1min分成了5个小窗口，每个小窗口的时间是12s。每个单元格有自己独立的计数器，每过12s就会向前移动一格。假如有请求在00:01的时候过来，这时候窗口的计数就是3+12+9+15=39，也能起到限流的作用。</li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/b8fe33d4224695aa1e3ea.jpg" alt="滑动窗口限流算法.png" tabindex="0"><figcaption>滑动窗口限流算法.png</figcaption></figure><ul><li>这就是为什么滑动窗口能解决临界问题，滑的格子越多，那么整体的滑动就会越平滑,限流的效果就会越精准。</li><li>算法实现:直接使用Redis的有序集合（zset）结构。使用时间戳作为score和member，有请求过来的时候，就把当前时间戳添加到有序集合里。那么窗口之外的请求，我们可以根据窗口大小，计算出起始时间戳，删除窗口外的请求。这样，有序集合的大小，就是我们这个窗口的请求数了。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class SlidingWindowRateLimiter {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>用Redis实现了滑动窗口限流，解决了固定窗口限流的边界问题，当然这里也带来了新的问题，因为我们存储了窗口期的所有请求，所以高并发的情况下，可能会比较占内存。</li></ul><h3 id="漏桶算法" tabindex="-1"><a class="header-anchor" href="#漏桶算法"><span>漏桶算法</span></a></h3><ul><li>希望请求平滑一些，追求的是“波澜不惊”，这时候就可以考虑使用其它的限流算法。</li><li>漏桶算法（Leaky Bucket），请求就像水一样以任意速度注入漏桶，而桶会按照固定的速率将水漏掉。当进水速率大于出水速率的时候，漏桶会变满，此时新进入的请求将会被丢弃。</li><li>漏桶算法的两大作用是网络流量整形（Traffic Shaping）和速度限制（Rate Limiting）。</li><li>使用RScoredSortedSet，直接使用ZREMRANGEBYSCORE命令来删除旧的请求。</li><li>进水请求进来，判断桶有没有满，满了就拒绝，没满就往桶里丢请求。</li><li>出水保证稳定速率出水，可以用一个定时任务，来定时去删除旧的请求。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class LeakyBucketRateLimiter {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>漏桶算法能够有效防止网络拥塞，实现也比较简单。但是，因为漏桶的出水速率是固定的，假如突然来了大量的请求，那么只能丢弃超量的请求，即使下游能处理更大的流量，没法充分利用系统资源。</li></ul><h3 id="令牌桶算法" tabindex="-1"><a class="header-anchor" href="#令牌桶算法"><span>令牌桶算法</span></a></h3><ul><li>令牌桶算法是对漏桶算法的一种改进。主要思想是：系统以一种固定的速率向桶中添加令牌，每个请求在发送前都需要从桶中取出一个令牌，只有取到令牌的请求才被通过。因此，令牌桶算法允许请求以任意速率发送，只要桶中有足够的令牌。</li><li>算法实现:首先是要发放令牌，要固定速率，那我们又得开个线程，定时往桶里投令牌，然后Redission提供了令牌桶算法的实现</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class TokenBucketRateLimiter {

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Redisson实现的，还是比较稳的，这里就不测试了。关于Redission是怎么实现这个限速器的，大家可以看一下参考[3]，还是Redisson家的老传统——Lua脚本，设计相当巧妙。</p></li><li><p>并发处理采用了分布式锁，高并发情况下，对性能有一定损耗，逻辑最好还是直接采用Lua脚本实现，来提高性能可以提供更加优雅的调用方式，比如利用aop实现注解式调用，代码设计也可以更加优雅，继承体系可以完善一下没有实现限流的拒绝策略，比如抛异常、缓存、丢进MQ打散……限流是一种方法，最终的目的还是尽可能保证系统平稳</p></li><li><p>Guava RateLimiter ，基于令牌桶算法限流，当然是单机的；</p></li><li><p>Sentinel ，基于滑动窗口限流，支持单机，也支持集群</p></li><li><p>网关限流，很多网关自带限流方法，比如Spring Cloud Gateway、Nginx</p></li></ul>`,40),t=[d];function a(r,v){return e(),n("div",null,t)}const m=i(s,[["render",a],["__file","ratelimit.html.vue"]]),o=JSON.parse('{"path":"/interview/scenedesign/ratelimit.html","title":"限流设计","lang":"zh-CN","frontmatter":{"title":"限流设计","date":"2023-01-01T00:00:00.000Z","tags":"面试","categories":"面试","description":"为什么要限流呢？ 避免流量多到过载，把系统打挂了所以，在各种大促活动之前，要对系统进行压测，评估整个系统的峰值QPS，要做一些限流的设置，超过一定阈值，就拒绝处理或者延后处理，避免把系统打挂的情况出现。 限流和熔断有什么区别？ 限流发生在流量进来之前，超过的流量进行限制。 熔断是一种应对故障的机制，发生在流量进来之后，如果系统发生故障或者异常，熔断会自...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/interview/scenedesign/ratelimit.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"限流设计"}],["meta",{"property":"og:description","content":"为什么要限流呢？ 避免流量多到过载，把系统打挂了所以，在各种大促活动之前，要对系统进行压测，评估整个系统的峰值QPS，要做一些限流的设置，超过一定阈值，就拒绝处理或者延后处理，避免把系统打挂的情况出现。 限流和熔断有什么区别？ 限流发生在流量进来之前，超过的流量进行限制。 熔断是一种应对故障的机制，发生在流量进来之后，如果系统发生故障或者异常，熔断会自..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/e5fc8eaeb7aedb13ab5d5.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"限流设计\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/e5fc8eaeb7aedb13ab5d5.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/b8fe33d4224695aa1e3ea.jpg\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"为什么要限流呢？","slug":"为什么要限流呢","link":"#为什么要限流呢","children":[]},{"level":2,"title":"限流和熔断有什么区别？","slug":"限流和熔断有什么区别","link":"#限流和熔断有什么区别","children":[]},{"level":2,"title":"限流和削峰有什么区别？","slug":"限流和削峰有什么区别","link":"#限流和削峰有什么区别","children":[]},{"level":2,"title":"限流实现步骤","slug":"限流实现步骤","link":"#限流实现步骤","children":[]},{"level":2,"title":"单机限流和分布式限流","slug":"单机限流和分布式限流","link":"#单机限流和分布式限流","children":[]},{"level":2,"title":"四种限流算法与分布式实现","slug":"四种限流算法与分布式实现","link":"#四种限流算法与分布式实现","children":[{"level":3,"title":"固定窗口限流算法/计数器","slug":"固定窗口限流算法-计数器","link":"#固定窗口限流算法-计数器","children":[]},{"level":3,"title":"滑动窗口算法","slug":"滑动窗口算法","link":"#滑动窗口算法","children":[]},{"level":3,"title":"漏桶算法","slug":"漏桶算法","link":"#漏桶算法","children":[]},{"level":3,"title":"令牌桶算法","slug":"令牌桶算法","link":"#令牌桶算法","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":11.47,"words":3440},"filePathRelative":"interview/scenedesign/ratelimit.md","localizedDate":"2023年1月1日","excerpt":"<h2>为什么要限流呢？</h2>\\n<ul>\\n<li>避免流量多到过载，把系统打挂了所以，在各种大促活动之前，要对系统进行压测，评估整个系统的峰值QPS，要做一些限流的设置，超过一定阈值，就拒绝处理或者延后处理，避免把系统打挂的情况出现。</li>\\n</ul>\\n<h2>限流和熔断有什么区别？</h2>\\n<ul>\\n<li>限流发生在流量进来之前，超过的流量进行限制。</li>\\n<li>熔断是一种应对故障的机制，发生在流量进来之后，如果系统发生故障或者异常，熔断会自动切断请求，防止故障进一步扩展，导致服务雪崩。</li>\\n</ul>\\n<h2>限流和削峰有什么区别？</h2>\\n<ul>\\n<li>削峰是对流量的平滑处理，通过缓慢地增加请求的处理速率来避免系统瞬时过载。</li>\\n<li>削峰大概就是水库，把流量储存起来，慢慢流，限流大概就是闸口，拒绝超出的流量。</li>\\n<li>限流的通用流程</li>\\n</ul>","autoDesc":true}');export{m as comp,o as data};
