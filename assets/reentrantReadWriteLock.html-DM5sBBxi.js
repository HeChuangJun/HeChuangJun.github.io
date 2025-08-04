import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,e as l}from"./app-7KT7HDzT.js";const a={},r=l(`<p>ReentrantReadWriteLock</p><h1 id="_15-reentrantreadwritelock" tabindex="-1"><a class="header-anchor" href="#_15-reentrantreadwritelock"><span>15. ReentrantReadWriteLock</span></a></h1><ul><li>特点：公平、非公平锁、读写锁、重入锁、锁降级</li></ul><h1 id="_1-构造方法" tabindex="-1"><a class="header-anchor" href="#_1-构造方法"><span>1. 构造方法</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class ReentrantReadWriteLock implements ReadWriteLock, java.io.Serializable {
    public ReentrantReadWriteLock() {
        this(false);
    }
    public ReentrantReadWriteLock(boolean fair) {
        sync = fair ? new FairSync() : new NonfairSync();
        readerLock = new ReadLock(this);
        writerLock = new WriteLock(this);
    }
    public static class ReadLock implements Lock, java.io.Serializable{
        private final Sync sync;
        protected ReadLock(ReentrantReadWriteLock lock) {
            sync = lock.sync;
        }
    }
    public static class WriteLock implements Lock, java.io.Serializable{
        private final Sync sync;
        protected WriteLock(ReentrantReadWriteLock lock) {
            sync = lock.sync;
        }
    }
    static final class FairSync extends Sync {
        final boolean writerShouldBlock() {
            return hasQueuedPredecessors();
        }
        final boolean readerShouldBlock() {
            return hasQueuedPredecessors();
        }
    }
    static final class NonfairSync extends Sync {
        final boolean writerShouldBlock() {
            return false; // writers can always barge
        }
        final boolean readerShouldBlock() {
            return apparentlyFirstQueuedIsExclusive();
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-写锁的获取tryacquire-int-acquires-与释放tryrelease-int-releases" tabindex="-1"><a class="header-anchor" href="#_2-写锁的获取tryacquire-int-acquires-与释放tryrelease-int-releases"><span>2. 写锁的获取tryAcquire(int acquires)与释放tryRelease(int releases)</span></a></h1><ul><li>写锁是一个支持重进入的排它锁。如果当前线程已经获取了写锁，则增加写状态。如果当前线程在获取写锁时，读锁已经被获取（读状态不为0）或者该线程不是已经获取写锁的线程，则当前线程进入等待状态，原因在于：读写锁要确保写锁的操作对读锁可见，如果允许读锁在已被获取的情况下对写锁的获取，那么正在运行的其他读线程就无法感知到当前写线程的操作。因此，只有等待其他读线程都释放了读锁，写锁才能被当前线程获取，而写锁一旦被获取，则其他读写线程的后续访问均被阻塞。</li><li>写锁的释放与ReentrantLock的释放过程基本类似，每次释放均减少写状态，当写状态为0时表示写锁已被释放，从而等待的读写线程能够继续访问读写锁，同时前次写线程的修改对后续读写线程可见。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    static final int SHARED_SHIFT   = 16;
    static final int EXCLUSIVE_MASK = (1 &lt;&lt; SHARED_SHIFT) - 1 //1左移16位然后减1 0x0000FFFF
    static int exclusiveCount(int c) { return c &amp; EXCLUSIVE_MASK; } //取同步状态的低16位 表示写锁的获取次数
    /*
    * 在同步状态state上维护多个读线程和一个写线程的状态。读写锁将变量切分成了两个部分，高16位表示读，低16位表示写
    * 同步状态state不等于0时，当写状态（state&amp;0x0000FFFF(抹去高16位与运算得到低16位的值)）等于0时，则读状态（state&gt;&gt;&gt;16）大于0，即读锁已被获取。
    * 如果在一个整型变量上维护多种状态，就一定需要“按位切割使用”这个变量
    *  功能：写锁的获取：持有锁的线程state+1，非持有锁的线程CAS操作成功后获得锁
    * 1 判断state是否有线程已经获取锁，若不等于0执行2，等于0则执行3
    * 2 若持有锁的是当前线程时设置state+1并返回true（重入锁）
    * 3 writerShouldBlock(非公平锁false（默认），公平锁hasQueuedPredecessors())或者CAS设置state失败，获取锁失败
    * 4 将持有线程的设置为当前线程并返回true
    */
    protected final boolean tryAcquire(int acquires) {
        Thread current = Thread.currentThread();
        int c = getState();//1
        int w = exclusiveCount(c);
        if (c != 0) {//2
            // 存在读锁或者当前获取线程不是已经获取写锁的线程
            if (w == 0 || current != getExclusiveOwnerThread())
                return false;
            if (w + exclusiveCount(acquires) &gt; MAX_COUNT)
                throw new Error(&quot;Maximum lock count exceeded&quot;);
            setState(c + acquires);
            return true;
        }
        if (writerShouldBlock() ||
            !compareAndSetState(c, c + acquires))
            return false;
        setExclusiveOwnerThread(current);
        return true;
    }

    final boolean writerShouldBlock() {//非公平锁（默认）
        return false; // writers can always barge
    }
    final boolean writerShouldBlock() {//公平锁
        return hasQueuedPredecessors();
    }
    /*
    *  写锁的释放：设置state=state-1如果state=0则独占锁线程为null
    *  1 state-1
    *  2 写状态为0则占有锁的线程为null
    *  3 设置state
    */
    protected final boolean tryRelease(int releases) {
        if (!isHeldExclusively())
            throw new IllegalMonitorStateException();
        int nextc = getState() - releases;//1
        boolean free = exclusiveCount(nextc) == 0;//2
        if (free)
            setExclusiveOwnerThread(null);
        setState(nextc);//3
        return free;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-读锁的获取与释放" tabindex="-1"><a class="header-anchor" href="#_3-读锁的获取与释放"><span>3. 读锁的获取与释放</span></a></h1><ul><li>读锁是一个支持重进入的共享锁，它能够被多个线程同时获取，在没有其他写线程访问（或者写状态为0）时，读锁总会被成功地获取，而所做的也只是（线程安全的）增加读状态。如果当前线程已经获取了读锁，则增加读状态。如果当前线程在获取读锁时，写锁已被其他线程获取，则进入等待状态。</li><li>getReadHoldCount()方法，作用是返回当前线程获取读锁的次数。读状态是所有线程获取读锁次数的总和，而每个线程各自获取读锁的次数只能选择保存在ThreadLocal中，由线程自身维护，这使获取读锁的实现变得复杂。因此，这里将获取读锁的代码做了删减，保留必要的部分</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    static final int SHARED_UNIT    = (1 &lt;&lt; SHARED_SHIFT);
    static int sharedCount(int c)    { return c &gt;&gt;&gt; SHARED_SHIFT; } //同步状态的高16位用来表示读锁被获取的次数
    /*
    *  读锁的获取
    *  1 若持有锁的线程不为当前线程时，锁获取失败 
    *  2 获取同步状态state的高16位的读锁获取次数
    *  3 如果头结点的下一个节点不是共享节点且CAS操作state设置高位成功则成功获取锁，如果不成功则执行4
    *  4 调用fullTryAcquireShared()重复CAS操作直至获取共享锁（待看）
    */
    protected final int tryAcquireShared(int unused) {
        Thread current = Thread.currentThread();
        int c = getState();
        if (exclusiveCount(c) != 0 &amp;&amp;//1
            getExclusiveOwnerThread() != current)
            return -1;
        int r = sharedCount(c);//2
        if (!readerShouldBlock() &amp;&amp; //3
            r &lt; MAX_COUNT &amp;&amp;
            compareAndSetState(c, c + SHARED_UNIT)) {//同步状态的高16位用来表示读锁被获取的次数
            //省略无关代码
            return 1;
        }
        return fullTryAcquireShared(current);
    }

    final boolean readerShouldBlock() {//非公平锁（默认）
        return apparentlyFirstQueuedIsExclusive();
    }

    final boolean apparentlyFirstQueuedIsExclusive() {
        Node h, s;
        return (h = head) != null &amp;&amp; (s = h.next)  != null &amp;&amp;
        !s.isShared() &amp;&amp; s.thread != null;
    }

    final boolean readerShouldBlock() {//公平锁
        return hasQueuedPredecessors();
    }
    //待看
    final int fullTryAcquireShared(Thread current) {
        HoldCounter rh = null;
        for (;;) {
            int c = getState();
            if (exclusiveCount(c) != 0) {
                if (getExclusiveOwnerThread() != current)
                    return -1;
                // else we hold the exclusive lock; blocking here
                // would cause deadlock.
            } else if (readerShouldBlock()) {
                // Make sure we&#39;re not acquiring read lock reentrantly
                if (firstReader == current) {
                    // assert firstReaderHoldCount &gt; 0;
                } else {
                    if (rh == null) {
                        rh = cachedHoldCounter;
                        if (rh == null || rh.tid != getThreadId(current)) {
                            rh = readHolds.get();
                            if (rh.count == 0)
                                readHolds.remove();
                        }
                    }
                    if (rh.count == 0)
                        return -1;
                }
            }
            if (sharedCount(c) == MAX_COUNT)
                throw new Error(&quot;Maximum lock count exceeded&quot;);
            if (compareAndSetState(c, c + SHARED_UNIT)) {
                if (sharedCount(c) == 0) {
                    firstReader = current;
                    firstReaderHoldCount = 1;
                } else if (firstReader == current) {
                    firstReaderHoldCount++;
                } else {
                    if (rh == null)
                        rh = cachedHoldCounter;
                    if (rh == null || rh.tid != getThreadId(current))
                        rh = readHolds.get();
                    else if (rh.count == 0)
                        readHolds.set(rh);
                    rh.count++;
                    cachedHoldCounter = rh; // cache for release
                }
                return 1;
            }
        }
    }
    //读锁的释放：将设置成state-SHARED_UNIT
    //读锁的每次释放（线程安全的，可能有多个读线程同时释放读锁）均减少读状态，减少的值是（1&lt;&lt;16）。
    protected final boolean tryReleaseShared(int unused) {
        //省略无关代码...
        for (;;) {
            int c = getState();
            int nextc = c - SHARED_UNIT;
            if (compareAndSetState(c, nextc))
                return nextc == 0;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 读锁简化版
protected final int tryAcquireShared(int unused) {
    for (;;) {
        int c = getState();
        int nextc = c + (1 &lt;&lt; 16);
        if (nextc &lt; c)
            throw new Error(&quot;Maximum lock count exceeded&quot;);
        if (exclusiveCount(c) != 0 &amp;&amp; owner != Thread.currentThread())
            return -1;
        if (compareAndSetState(c, nextc))
            return 1;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-锁降级" tabindex="-1"><a class="header-anchor" href="#_4-锁降级"><span>4. 锁降级</span></a></h1><ul><li>读写锁支持锁降级，遵循按照获取写锁，获取读锁再释放写锁的次序，写锁能够降级成为读锁，不支持锁升级</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>  class CachedData {
    Object data;
    volatile boolean cacheValid;
    final ReentrantReadWriteLock rwl = new ReentrantReadWriteLock();
    void processCachedData() {
            rwl.readLock().lock();
            if (!cacheValid) {
                // Must release read lock before acquiring write lock
                rwl.readLock().unlock();
                rwl.writeLock().lock();
                try {
                    // Recheck state because another thread might have
                    // acquired write lock and changed state before we did.
                    if (!cacheValid) {
                        data = ...
                cacheValid = true;
            }
            // Downgrade by acquiring read lock before releasing write lock
            rwl.readLock().lock();
            } finally {
            rwl.writeLock().unlock(); // Unlock write, still hold read
            }
        }
    
        try {
            use(data);
        } finally {
            rwl.readLock().unlock();
        }
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),s=[r];function d(t,c){return n(),i("div",null,s)}const o=e(a,[["render",d],["__file","reentrantReadWriteLock.html.vue"]]),m=JSON.parse('{"path":"/backend/java/reentrantReadWriteLock.html","title":"ReentrantReadWriteLock","lang":"zh-CN","frontmatter":{"title":"ReentrantReadWriteLock","date":"2023-01-01T00:00:00.000Z","tags":"sourcecode","categories":"源码","description":"ReentrantReadWriteLock 15. ReentrantReadWriteLock 特点：公平、非公平锁、读写锁、重入锁、锁降级 1. 构造方法 2. 写锁的获取tryAcquire(int acquires)与释放tryRelease(int releases) 写锁是一个支持重进入的排它锁。如果当前线程已经获取了写锁，则增加写状态。...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/java/reentrantReadWriteLock.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"ReentrantReadWriteLock"}],["meta",{"property":"og:description","content":"ReentrantReadWriteLock 15. ReentrantReadWriteLock 特点：公平、非公平锁、读写锁、重入锁、锁降级 1. 构造方法 2. 写锁的获取tryAcquire(int acquires)与释放tryRelease(int releases) 写锁是一个支持重进入的排它锁。如果当前线程已经获取了写锁，则增加写状态。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ReentrantReadWriteLock\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":6.01,"words":1803},"filePathRelative":"backend/java/reentrantReadWriteLock.md","localizedDate":"2023年1月1日","excerpt":"<p>ReentrantReadWriteLock</p>\\n<!--more-->\\n<!-- TOC -->\\n<!-- /TOC -->\\n<h1>15. ReentrantReadWriteLock</h1>\\n<ul>\\n<li>特点：公平、非公平锁、读写锁、重入锁、锁降级</li>\\n</ul>\\n<h1>1. 构造方法</h1>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>public class ReentrantReadWriteLock implements ReadWriteLock, java.io.Serializable {\\n    public ReentrantReadWriteLock() {\\n        this(false);\\n    }\\n    public ReentrantReadWriteLock(boolean fair) {\\n        sync = fair ? new FairSync() : new NonfairSync();\\n        readerLock = new ReadLock(this);\\n        writerLock = new WriteLock(this);\\n    }\\n    public static class ReadLock implements Lock, java.io.Serializable{\\n        private final Sync sync;\\n        protected ReadLock(ReentrantReadWriteLock lock) {\\n            sync = lock.sync;\\n        }\\n    }\\n    public static class WriteLock implements Lock, java.io.Serializable{\\n        private final Sync sync;\\n        protected WriteLock(ReentrantReadWriteLock lock) {\\n            sync = lock.sync;\\n        }\\n    }\\n    static final class FairSync extends Sync {\\n        final boolean writerShouldBlock() {\\n            return hasQueuedPredecessors();\\n        }\\n        final boolean readerShouldBlock() {\\n            return hasQueuedPredecessors();\\n        }\\n    }\\n    static final class NonfairSync extends Sync {\\n        final boolean writerShouldBlock() {\\n            return false; // writers can always barge\\n        }\\n        final boolean readerShouldBlock() {\\n            return apparentlyFirstQueuedIsExclusive();\\n        }\\n    }\\n}\\n</code></pre></div>","autoDesc":true}');export{o as comp,m as data};
