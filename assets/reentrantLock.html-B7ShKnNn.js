import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as e,e as l}from"./app-7KT7HDzT.js";const d={},s=l(`<p>ReentrantLock</p><h1 id="reentrantlock" tabindex="-1"><a class="header-anchor" href="#reentrantlock"><span>ReentrantLock</span></a></h1><ul><li>特点：公平、非公平、可重入、互斥锁、需手动开启和释放锁,异常不自动释放锁，要在finally里面声明。底层使用Unsafe的park方法加锁，</li><li>所有方法实现实际上都是调用了其静态内存类Sync中的方法，而Sync类继承了同步器AbstractQueuedSynchronizer（AQS）是关键<br><code>![](源码-AbstractQueuedSynchronizer.md)</code></li><li>volatile保证有序和可见性，cas保证原子性，保证线程同步</li></ul><h2 id="_1-构造函数" tabindex="-1"><a class="header-anchor" href="#_1-构造函数"><span>1. 构造函数</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class ReentrantLock implements Lock, java.io.Serializable {
    private final Sync sync;
    public ReentrantLock() {
        sync = new NonfairSync();
    }
    public ReentrantLock(boolean fair) {
        sync = fair ? new FairSync() : new NonfairSync();
    }
    public void lock() {
        sync.lock();
    }
    public void lockInterruptibly() throws InterruptedException {
        sync.acquireInterruptibly(1);
    }
    public boolean tryLock() {
        return sync.nonfairTryAcquire(1);
    }
    public boolean tryLock(long timeout, TimeUnit unit)
            throws InterruptedException {
        return sync.tryAcquireNanos(1, unit.toNanos(timeout));
    }
    public void unlock() {
        sync.release(1);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-非公平锁的获取nonfairtryacquire-int-acquires-与释放tryrelease-int-releases" tabindex="-1"><a class="header-anchor" href="#_2-非公平锁的获取nonfairtryacquire-int-acquires-与释放tryrelease-int-releases"><span>2. 非公平锁的获取nonfairTryAcquire(int acquires)与释放tryRelease(int releases)</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>abstract static class Sync extends AbstractQueuedSynchronizer {
    abstract void lock();
    /*
    * 非公平锁获取锁-同步状态volatile变量state表示锁被一个线程重复获取的次数
    * 1 如果state为0，表明该锁未被任何线程占有，通过CAS操作将state改为1并设置独占锁线程为当前线程
    * 2 如果独占锁线程为当前线程，将state设置为state+1 重入锁原理
    * 非公平性锁可能使线程“饥饿”，为什么它又被设定成默认的实现呢？因为非公平性锁的开销更小。公平性锁
    * 保证了锁的获取按照FIFO原则，而代价是进行大量的线程切换。非公平性锁虽然可能造成线程“饥饿”，但极
    * 少的线程切换，保证了其更大的吞吐量。
    */
    final boolean nonfairTryAcquire(int acquires) {
        final Thread current = Thread.currentThread();
        int c = getState();
        if (c == 0) {
            if (compareAndSetState(0, acquires)) {
                setExclusiveOwnerThread(current);
                return true;
            }
        }
        else if (current == getExclusiveOwnerThread()) {
            int nextc = c + acquires;
            if (nextc &lt; 0) // overflow
                throw new Error(&quot;Maximum lock count exceeded&quot;);
            setState(nextc);
            return true;
        }
        return false;
    }
    /*
    * 释放锁
    * 1 state-1后判断是否为0，如果是设置当前独占锁线程为null
    * 2 设置state为state状态-1
    */
    protected final boolean tryRelease(int releases) {
        int c = getState() - releases;
        if (Thread.currentThread() != getExclusiveOwnerThread()) throw new IllegalMonitorStateException();
        boolean free = false;
        if (c == 0) {//将同步状态是否为0作为最终释放的条件
            free = true;
            setExclusiveOwnerThread(null);
        }
        setState(c);
        return free;
    }

    final ConditionObject newCondition() {
        return new ConditionObject();
    }

}

static final class NonfairSync extends Sync {
            
    final void lock() {
        if (compareAndSetState(0, 1))
            setExclusiveOwnerThread(Thread.currentThread());
        else
            acquire(1);
    }

    protected final boolean tryAcquire(int acquires) {
        return nonfairTryAcquire(acquires);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-公平锁的获取tryacquire-int-acquires-与释放tryrelease-int-releases" tabindex="-1"><a class="header-anchor" href="#_3-公平锁的获取tryacquire-int-acquires-与释放tryrelease-int-releases"><span>3. 公平锁的获取tryAcquire(int acquires)与释放tryRelease(int releases)</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>static final class FairSync extends Sync {
    final void lock() {
        acquire(1);
    }
    /*
    * 公平锁每次都是从同步队列中的第一个节点获取到锁，而非公平性锁则不一定，有可能刚释放锁的线程能再次获取到锁.锁的获取顺序就应该符合请求的绝对时间顺序FIFO。
    * 比非公平锁的获取多hasQueuedPredecessors()
    */
    protected final boolean tryAcquire(int acquires) {
        final Thread current = Thread.currentThread();
        int c = getState();
        if (c == 0) {
            if (!hasQueuedPredecessors() &amp;&amp;
                compareAndSetState(0, acquires)) {
                setExclusiveOwnerThread(current);
                return true;
            }
        }
        else if (current == getExclusiveOwnerThread()) {
            int nextc = c + acquires;
            if (nextc &lt; 0)
                throw new Error(&quot;Maximum lock count exceeded&quot;);
            setState(nextc);
            return true;
        }
        return false;
    }
}
    
public abstract class AbstractQueuedSynchronizer extends AbstractOwnableSynchronizer{
    /*
    * 判断同步队列中当前节点是否有前驱节点，如果有则需要等待前驱节点释放锁才能继续获取锁
    * 返回true条件:且不止有一个结点，头结点的后继节点不是当前节点时
    *   1 h != t返回true表示队列中至少有两个不同节点存在
    *   2 (s = h.next) == null返回true，说明头节点之后是没有后继节点的
    *        有另一个线程已经执行到初始化队列的操作了，介于compareAndSetHead(new Node())与tail = head之间
    *   3 s.thread != Thread.currentThread()返回true 表示后继节点的相关线程不是当前线程
    *
    */
    public final boolean hasQueuedPredecessors() {
        Node t = tail; 
        Node h = head;
        Node s;
        return h != t &amp;&amp;
            ((s = h.next) == null || s.thread != Thread.currentThread());
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-condition类的await" tabindex="-1"><a class="header-anchor" href="#_4-condition类的await"><span>4. Condition类的await()</span></a></h1><ul><li>1.等待队列：FIFO的队列，在队列中的每个节点都包含了一个在Condition对象上等待线程的引用，同步队列和等待队列中节点类型都是同步器的静态内部类AbstractQueuedSynchronizer.Node。<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/5c6c3548b7452d9f5df2c.jpg" alt="等待队列的基本结构.png"><ul><li>Condition拥有首尾节点的引用，而新增节点只需要将原有的尾节点nextWaiter指向它，并且更新尾节点即可。节点引用更新的过程并没有使用CAS保证，原因在于调用await()方法的线程必定是获取了锁的线程，由锁来保证线程安全的。</li><li>在Object的监视器模型上，一个对象拥有一个同步队列和等待队列，而并发包中的Lock（同步器）拥有一个同步队列和多个等待队列</li></ul></li><li>2.等待 <ul><li>调用Condition的await()方法，会使当前线程变为等待状态构造成节点从尾部加入等待队列并释放锁.当从await()方法返回时，当前线程一定获取了Condition相关联的锁。</li><li>如果从队列（同步队列和等待队列）的角度看await()方法，当调用await()方法时，相当于同步队列的首节点（获取了锁的节点）移动到Condition的等待队列中。</li></ul></li><li>如果从队列的角度去看，当前线程加入Condition的等待队列，同步队列的首节点并不会直接加入等待队列，而是通过addConditionWaiter()方法把当前线程构造成一个新的节点并将其加入等待队列中。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    private transient Node firstWaiter;
    private transient Node lastWaiter;
    Node nextWaiter
    /*
    * 调用该方法的线程成功获取了锁的线程，也就是同步队列中的首节点
    * 1 调用addConditionWaiter()将当前线程包装成Node，尾插入到等待队列中
    * 2 调用fullyRelease(node)释放当前线程所占用的lock，在释放的过程中会唤醒同步队列中的下一个节点
    * 3 while循环，退出条件如下
    *   调用checkInterruptWhileWaiting()通过Thread.interrupted()判断当前线程被中断，如果被中断了，
    *       则通过CAS操作判断是否已经被修改为Cancel。如果是则表明中断类型是THROW_IE(signal之前)，否则REINTERRUPT(没有中断过)
    *   调用isOnSyncQueue(node)判断当前节点在同步队列中(condition.signal/condition.signalAll方法当前节点移动到了同步队列)
    * 4 在同步队列中尝试获取锁。唤醒同步队列中的后继节点 当等待队列中的节点被唤醒，则唤醒节点的线程开始尝试获取同步状态。如果不是通过其他线程调用Condition.signal()方法唤醒，而是对等待线程进行中断，则会抛出InterruptedException。
    * 5 获取锁成功后如果有后继节点则调用unlinkCancelledWaiters()清除Condition队列中状态不是Node.CONDITION的节点
    * 6 如果中断了则调用reportInterruptAfterWait()响应中断，THROW_IE抛出异常，REINTERRUPT中断当前线程
    */
    public final void await() throws InterruptedException {
        if (Thread.interrupted()) throw new InterruptedException();
        Node node = addConditionWaiter();//1
        int savedState = fullyRelease(node);//2
        int interruptMode = 0;
        while (!isOnSyncQueue(node)) { //3
            LockSupport.park(this);
            if ((interruptMode = checkInterruptWhileWaiting(node)) != 0)
                break;
        }
        if (acquireQueued(node, savedState) &amp;&amp; interruptMode != THROW_IE)//4
            interruptMode = REINTERRUPT;
        if (node.nextWaiter != null) //5
            unlinkCancelledWaiters();
        if (interruptMode != 0) //6
            reportInterruptAfterWait(interruptMode);
    }
    /*
    * 将当前线程包装成Node，尾插入到等待队列中
    *   1 如果尾结点被取消了则调用unlinkCancelledWaiters()清除Condition队列中状态不是Node.CONDITION的节点
    *   2 将当前线程和Condition等待状态包装成Node放入Condition队列的尾节点中
    */
    private Node addConditionWaiter() {
        Node t = lastWaiter;
        if (t != null &amp;&amp; t.waitStatus != Node.CONDITION) {//1
            unlinkCancelledWaiters();
            t = lastWaiter;
        }
        Node node = new Node(Thread.currentThread(), Node.CONDITION);//2
        if (t == null)
            firstWaiter = node;
        else
            t.nextWaiter = node;
        lastWaiter = node;
        return node;
    }
    
    private void unlinkCancelledWaiters() {
        Node t = firstWaiter;
        Node trail = null;//记录从头结点到尾结点的最后一个有效结点
        while (t != null) {
            Node next = t.nextWaiter;
            if (t.waitStatus != Node.CONDITION) {
                t.nextWaiter = null;
                if (trail == null)// 如果trail为null，表示原先的condition队列头节点实效，需要设置新的condition队列头
                    firstWaiter = next;
                else
                    trail.nextWaiter = next;// 如果next为null，表示原先的condition队列尾节点也实效，重新设置队列尾节点
                if (next == null)
                    lastWaiter = trail;
            }
            else
                trail = t;
            t = next;
        }
    }
    
    final int fullyRelease(Node node) {
        boolean failed = true;
        try {
            int savedState = getState();
            if (release(savedState)) {
                //成功释放同步状态
                failed = false;
                return savedState;
            } else {
                //不成功释放同步状态抛出异常
                throw new IllegalMonitorStateException();
            }
        } finally {
            if (failed)
                node.waitStatus = Node.CANCELLED;
        }
    }

    public final boolean release(int arg) {
        if (tryRelease(arg)) {
            Node h = head;
            if (h != null &amp;&amp; h.waitStatus != 0)
                unparkSuccessor(h);
            return true;
        }
        return false;
    }

    final boolean isOnSyncQueue(Node node) {
        if (node.waitStatus == Node.CONDITION || node.prev == null)
            return false;
        if (node.next != null) // If has successor, it must be on queue
            return true;
        return findNodeFromTail(node);
    }
    
    private boolean findNodeFromTail(Node node) {
        Node t = tail;
        for (;;) {
            if (t == node)
                return true;
            if (t == null)
                return false;
            t = t.prev;
        }
    }
    
    private static final int REINTERRUPT =  1;//表示在线程中断发生时还没有调用过signal方法
    private static final int THROW_IE    = -1;//表示在线程中断发生时已经调用过signal方法了
    private int checkInterruptWhileWaiting(Node node) {
        return Thread.interrupted() ?
            (transferAfterCancelledWait(node) ? THROW_IE : REINTERRUPT) :
            0;
    }
    
    final boolean transferAfterCancelledWait(Node node) {
        //如果这步CAS操作成功的话就表明CONDITION被修改成Cancel了，中断发生在signal方法之前
        if (compareAndSetWaitStatus(node, Node.CONDITION, 0)) {
            enq(node);
            return true;
        }
        //说明中断发生在signal方法之后 如果sinal方法还没有将结点转移到同步队列, 就通过自旋等待一下
        while (!isOnSyncQueue(node))
            Thread.yield();
        return false;
    }
    
    private void reportInterruptAfterWait(int interruptMode) throws InterruptedException {
        if (interruptMode == THROW_IE) throw new InterruptedException();
        else if (interruptMode == REINTERRUPT) selfInterrupt();
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_5-condition类的不响应中断awaituninterruptibly" tabindex="-1"><a class="header-anchor" href="#_5-condition类的不响应中断awaituninterruptibly"><span>5. Condition类的不响应中断awaitUninterruptibly()</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    //reportInterruptAfterWait
    public final void awaitUninterruptibly() {
        Node node = addConditionWaiter();
        int savedState = fullyRelease(node);
        boolean interrupted = false;
        while (!isOnSyncQueue(node)) {
            LockSupport.park(this);
            if (Thread.interrupted())
                interrupted = true;
        }
        if (acquireQueued(node, savedState) || interrupted)
            selfInterrupt();
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_6-condition类的将等待时间最长的线程放入同步队列signal" tabindex="-1"><a class="header-anchor" href="#_6-condition类的将等待时间最长的线程放入同步队列signal"><span>6. Condition类的将等待时间最长的线程放入同步队列signal()</span></a></h1><ul><li>通过调用同步器的enq(Node node)方法，等待队列中的头节点线程安全地移动到同步队列。当节点移动到同步队列后，当前线程再使用LockSupport唤醒该节点的线程。</li><li>被唤醒后的线程，将从await()方法中的while循环中退出（isOnSyncQueue(Node node)方法返回true，节点已经在同步队列中），进而调用同步器的acquireQueued()方法加入到获取同步状态的竞争中。</li><li>成功获取同步状态（或者说锁）之后，被唤醒的线程将从先前调用的await()方法返回，此时该线程已经成功地获取了锁。</li><li>Condition的signalAll()方法，相当于对等待队列中的每个节点均执行一次signal()方法，效果就是将等待队列中所有节点全部移动到同步队列中，并唤醒每个节点的线程。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    /*
    * 将节点移到同步队列中。然后唤醒在等待队列中等待时间最长的节点（首节点）
    * 将等待队列的头结点
    * 1 调用isHeldExclusively()检测当前线程是否已经获取lock，没有则抛出异常（保证当前线程必须获取了锁）
    * 2 获取等待队列中第一个节点，将其移动到同步队列并使用LockSupport唤醒节点中的线程。之后的操作都是针对这个节点
    * 3 调用transferForSignal(node)配合循环将当前节点设置为0并加入同步队列，入队成功后尝试设置为SIGNAL，若失败则唤醒线程
    */
    public final void signal() {
        if (!isHeldExclusively()) throw new IllegalMonitorStateException();//1
        Node first = firstWaiter;//2
        if (first != null)
            doSignal(first);
    }
    protected final boolean isHeldExclusively() {
        return getExclusiveOwnerThread() == Thread.currentThread();
    }
    private void doSignal(Node first) {
        do {
            if ( (firstWaiter = first.nextWaiter) == null)
                lastWaiter = null;
            first.nextWaiter = null;
        } while (!transferForSignal(first) &amp;&amp;
                (first = firstWaiter) != null);
    }

    final boolean transferForSignal(Node node) {
        if (!compareAndSetWaitStatus(node, Node.CONDITION, 0))
            return false;
        Node p = enq(node);
        int ws = p.waitStatus;
        if (ws &gt; 0 || !compareAndSetWaitStatus(p, ws, Node.SIGNAL))
            LockSupport.unpark(node.thread);
        return true;
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_7-condition类的唤醒所有等待线程signalall" tabindex="-1"><a class="header-anchor" href="#_7-condition类的唤醒所有等待线程signalall"><span>7. Condition类的唤醒所有等待线程signalAll()</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    //从头到尾轮询节点唤醒，并释放所有节点的资源
    private void doSignalAll(Node first) {
        lastWaiter = firstWaiter = null;
        do {
            Node next = first.nextWaiter;
            first.nextWaiter = null;
            transferForSignal(first);
            first = next;
        } while (first != null);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_14-reentrantlock" tabindex="-1"><a class="header-anchor" href="#_14-reentrantlock"><span>14. ReentrantLock</span></a></h1><ul><li>API <ul><li>void lock(); //获取锁</li><li>void lockInterruptibly() throws InterruptedException；//获取锁的过程能够响应中断</li><li>boolean tryLock();//非阻塞式响应中断能立即返回，获取锁放回true反之返回fasle</li><li>boolean tryLock(long time, TimeUnit unit) throws InterruptedException;//超时获取锁，在超时内或者未中断的情况下能够获取锁</li><li>Condition newCondition();//获取与lock绑定的等待通知组件，当前线程必须获得了锁才能进行等待，进行等待时会先释放锁，当再次获取锁时才能从等待中返回</li><li>void unlock();//释放锁</li><li>Condition newCondition();//返回条件锁对象 可以多次调用lock.newCondition()方法创建多个condition对象</li></ul></li><li>Lock使用</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    lock.lock(); // 相当于 synchronized
    //lock.tryLock()优先考虑获取锁，待获取锁成功后，才响应中断
    //lock.lockInterruptibly()优先考虑响应中断Tread.interrupt可以中断等待，而不是响应锁的普通获取或重入获取
    try {
        System.out.println(&quot;m2...&quot;);
    } finally {
        lock.unlock();//必须在finally块中释放锁
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Condition类API <ul><li>void await():当前线程释放锁并进入等待队列，如果其他线程调用condition的signal或者signalAll方法并且当前线程获取Lock从await方法返回，如果在等待状态中被中断会抛出被中断异常；</li><li>long awaitNanos(long nanosTimeout)：当前线程进入等待状态直到被通知，中断或者超时；</li><li>boolean await(long time, TimeUnit unit)throws InterruptedException：同第二种，支持自定义时间单位</li><li>boolean awaitUntil(Date deadline) throws InterruptedException：当前线程进入等待状态直到被通知，中断或者到了某个时间</li><li>void signal()：唤醒一个等待在condition上的线程，将该线程从等待队列中转移到同步队列中，如果在同步队列中能够竞争到Lock则可以从等待方法中返回。</li><li>void signalAll()：与1的区别在于能够唤醒所有等待在condition上的线程</li></ul></li><li>Condition与Object的wait/notify/notifyAll <ul><li>Object的wait和notify/notify是与对象监视器配合完成线程间的等待/通知机制，而Condition与Lock配合完成等待通知机制</li><li>Condition能够支持不响应中断，而通过使用Object方式不支持；</li><li>Condition能够支持一个同步队列和多个等待队列，而Object方式只能支持一个同步队列和一个等待队列</li><li>Condition能够支持超时时间的设置，而Object不支持</li></ul></li><li>生产者和消费者的应用</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class ConditionTest {
    private LinkedList&lt;String&gt; buffer;    //容器
    private int maxSize ;           //容器最大
    private Lock lock;
    private Condition fullCondition;
    private Condition notFullCondition;

    ConditionTest(int maxSize){
        this.maxSize = maxSize;
        buffer = new LinkedList&lt;String&gt;();
        lock = new ReentrantLock();
        fullCondition = lock.newCondition();
        notFullCondition = lock.newCondition();
    }

    public void set(String string) throws InterruptedException {
        lock.lock();    //获取锁
        try {
            while (maxSize == buffer.size()){
                notFullCondition.await();       //满了，添加的线程进入等待状态
            }

            buffer.add(string);
            fullCondition.signal();
        } finally {
            lock.unlock();      //记得释放锁
        }
    }

    public String get() throws InterruptedException {
        String string;
        lock.lock();
        try {
            while (buffer.size() == 0){
                fullCondition.await();
            }
            string = buffer.poll();
            notFullCondition.signal();
        } finally {
            lock.unlock();
        }
        return string;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_6-locksupport" tabindex="-1"><a class="header-anchor" href="#_6-locksupport"><span>6. LockSupport</span></a></h1><ul><li>LockSupprot是线程的阻塞原语，用来阻塞线程和唤醒线程</li><li>void park()：阻塞当前线程，如果调用unpark方法或者当前线程被中断，从能从park()方法中返回</li><li>void park(Object blocker)：功能同方法1，入参增加一个Object对象，用来记录导致线程阻塞的阻塞对象，方便进行问题排查；</li><li>void parkNanos(long nanos)：阻塞当前线程，最长不超过nanos纳秒，增加了超时返回的特性；</li><li>void parkNanos(Object blocker, long nanos)：功能同方法3，入参增加一个Object对象，用来记录导致线程阻塞的阻塞对象，方便进行问题排查；</li><li>void parkUntil(long deadline)：阻塞当前线程，知道deadline；</li><li>void parkUntil(Object blocker, long deadline)：功能同方法5，入参增加一个Object对象，用来记录导致线程阻塞的阻塞对象，方便进行问题排查</li><li>void unpark(Thread thread):唤醒处于阻塞状态的指定线程</li></ul>`,26),a=[s];function r(t,v){return n(),e("div",null,a)}const o=i(d,[["render",r],["__file","reentrantLock.html.vue"]]),b=JSON.parse('{"path":"/backend/java/reentrantLock.html","title":"ReentrantLock","lang":"zh-CN","frontmatter":{"title":"ReentrantLock","date":"2023-01-01T00:00:00.000Z","tags":"sourcecode","categories":"源码","description":"ReentrantLock ReentrantLock 特点：公平、非公平、可重入、互斥锁、需手动开启和释放锁,异常不自动释放锁，要在finally里面声明。底层使用Unsafe的park方法加锁， 所有方法实现实际上都是调用了其静态内存类Sync中的方法，而Sync类继承了同步器AbstractQueuedSynchronizer（AQS）是关键 !...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/java/reentrantLock.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"ReentrantLock"}],["meta",{"property":"og:description","content":"ReentrantLock ReentrantLock 特点：公平、非公平、可重入、互斥锁、需手动开启和释放锁,异常不自动释放锁，要在finally里面声明。底层使用Unsafe的park方法加锁， 所有方法实现实际上都是调用了其静态内存类Sync中的方法，而Sync类继承了同步器AbstractQueuedSynchronizer（AQS）是关键 !..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/5c6c3548b7452d9f5df2c.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ReentrantLock\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/5c6c3548b7452d9f5df2c.jpg\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"1. 构造函数","slug":"_1-构造函数","link":"#_1-构造函数","children":[]},{"level":2,"title":"2. 非公平锁的获取nonfairTryAcquire(int acquires)与释放tryRelease(int releases)","slug":"_2-非公平锁的获取nonfairtryacquire-int-acquires-与释放tryrelease-int-releases","link":"#_2-非公平锁的获取nonfairtryacquire-int-acquires-与释放tryrelease-int-releases","children":[]},{"level":2,"title":"3. 公平锁的获取tryAcquire(int acquires)与释放tryRelease(int releases)","slug":"_3-公平锁的获取tryacquire-int-acquires-与释放tryrelease-int-releases","link":"#_3-公平锁的获取tryacquire-int-acquires-与释放tryrelease-int-releases","children":[]}],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":12.76,"words":3827},"filePathRelative":"backend/java/reentrantLock.md","localizedDate":"2023年1月1日","excerpt":"<p>ReentrantLock</p>\\n<!--more-->\\n<!-- TOC -->\\n<!-- /TOC -->\\n<h1>ReentrantLock</h1>\\n<ul>\\n<li>特点：公平、非公平、可重入、互斥锁、需手动开启和释放锁,异常不自动释放锁，要在finally里面声明。底层使用Unsafe的park方法加锁，</li>\\n<li>所有方法实现实际上都是调用了其静态内存类Sync中的方法，而Sync类继承了同步器AbstractQueuedSynchronizer（AQS）是关键<br>\\n<code>![](源码-AbstractQueuedSynchronizer.md)</code></li>\\n<li>volatile保证有序和可见性，cas保证原子性，保证线程同步</li>\\n</ul>","autoDesc":true}');export{o as comp,b as data};
