import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,e as d}from"./app-7KT7HDzT.js";const l={},s=d(`<p>AbstractQueuedSynchronizer</p><h1 id="_48-aqs-的原理是什么-共享模式有哪些" tabindex="-1"><a class="header-anchor" href="#_48-aqs-的原理是什么-共享模式有哪些"><span>48. AQS 的原理是什么？共享模式有哪些？</span></a></h1><ul><li><p>AQS用来构建锁和同步器的框架，如ReentrantLock、ReentrantReadWriteLock，FutureTask等等皆是基于AQS的</p></li><li><p>思想：如果被请求的共享资源空闲，则将当前请求资源的线程设置为有效的工作线程，并且将共享资源设置为锁定状态。如果被请求的共享资源被占用，阻塞该线程然后加入到CLH队列中等待被唤醒。AQS使用一个int成员变量(state) 来表示同步状态，通过内置的 FIFO 队列来完成获取资源线程的排队工作。使用 CAS 对该同步状态进行原子操作实现对其值的修改。</p></li><li><p>AQS资源共享方式</p><ul><li>Exclusive（独占）：只有一个线程能执行，如ReentrantLock。又可分为公平锁和非公平锁</li><li>Share（共享）：多个线程可同时执行，如Semaphore、CountDownLatch、CyclicBarrier、ReadWriteLock</li></ul></li><li><p>AQS的模板方法设计模式，推荐定义为静态内部类并按需要重写下面几个模板方法；这些方法的实现必须是内部线程安全的，非阻塞</p><ul><li>isHeldExclusively()//该线程是否正在独占资源。只有用到condition才需要去实现它</li><li>tryAcquire(int)//独占方式。尝试获取资源，成功则返回true，失败则返回false</li><li>tryRelease(int)//独占方式。尝试释放资源，成功则返回true，失败则返回false</li><li>tryAcquireShared(int)//共享方式。尝试获取资源。负数表示失败；0表示成功，但没有剩余可用资源；正数表示成功，且有剩余资源</li><li>tryReleaseShared(int)//共享方式。尝试释放资源，成功则返回true，失败则返回false</li></ul></li><li><p>在获取锁时，AQS维护一个双向同步队列，获取锁失败的线程会加入到队列中进行自旋直到获取锁退出，期间如果前驱节点被成功设置为signal则阻塞当前线程</p></li><li><p>在释放锁时，AQS会调用unparkSuccessor()方法唤醒后继节点</p></li></ul><h1 id="_2-同步队列节点-双向链表" tabindex="-1"><a class="header-anchor" href="#_2-同步队列节点-双向链表"><span>2. 同步队列节点(双向链表)</span></a></h1><ul><li>同步器依赖内部的同步CLH(Craig,Landin,and Hagersten)队列（一个FIFO双向队列）来完成同步状态的管理，将每条请求共享资源的线程封装成一个CLH锁队列的一个结点（Node）来实现锁的分配。当前线程获取同步状态成功时，将会被设置为同步队列首节点，由于已经获取同步状态成功，因此设置头节点的方法并不需要使用CAS来保证，它只需要将首节点设置成为原首节点的后继节点并断开原首节点的next引用即可。获取同步状态失败时，同步器会将当前线程以及等待状态等信息构造成为一个节点（Node）并将其加入同步队列尾部，同时会阻塞当前线程，加入队列的过程必须要保证线程安全，因此同步器提供了一个基于CAS的设置尾节点的方法：compareAndSetTail(Node expect,Node update)，它需要传递当前线程“认为”的尾节点和当前节点，只有设置成功后，当前节点才正式与之前的尾节点建立关联。当同步状态释放时，会把等待队列中后继节点线程唤醒，使其再次尝试获取同步状态。<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/e9915cfd1e0090d670830.jpg" alt="同步队列的基本结构.png"></li><li>同步队列中的节点（Node）用来保存获取同步状态失败的线程引用、等待状态以及前驱和后继节点</li><li>同步状态的管理volatile int state，通过getState，setState，compareAndSetState使用CAS对该同步状态进行原子操作实现对其值的修改</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public abstract class AbstractQueuedSynchronizer extends AbstractOwnableSynchronizer implements java.io.Serializable{

    static final class Node {
        static final Node SHARED = new Node();//节点在共享模式中等待
        static final Node EXCLUSIVE = null;//节点在独享模式等待

        static final int CANCELLED =  1;//当前节点的线程被取消（当前线程在同步队列中等待超时或者被中断）节点进入该状态将不会变化，线程也不会再阻塞/等待
        static final int SIGNAL    = -1;//当前节点的后继节点处于阻塞/等待状态，当前节点必须在释放或者被取消时通过signal方法唤醒后续节点，获得锁的方法acquire在signal方法后调用，为了避免竞争，必须重试原子获取锁，失败则阻塞
        static final int CONDITION = -2;//当前节点在等待Condition等待队列中等待被唤醒
        static final int PROPAGATE = -3;//表示下一次共享式同步状态获取将会无条件传播下去 
        volatile int waitStatus;//compareAndSetWaitStatus//同步队列的等待状态默认0;

        volatile Node prev;//predecessor 当前节点的前驱节点 当节点加入同步队列时被设置(尾部添加)
        volatile Node next;//successor 当前节点的后继节点
        volatile Thread thread;//加入同步队列的线程引用
        Node nextWaiter;//指向条件等待的下一个节点，或者特定的分享节点SHARED，节点类型(独占和共享)和等待队列中的后继节点共用同一个字段

        final boolean isShared() {//判断当前节点是不是在共享模式中等待
            return nextWaiter == SHARED;
        }

        final Node predecessor() throws NullPointerException {
            Node p = prev;
            if (p == null)
                throw new NullPointerException();
            else
                return p;
        }

        Node() {}    // Used to establish initial head or SHARED marker
    
        Node(Thread thread, Node mode) {     // Used by addWaiter
            this.nextWaiter = mode;
            this.thread = thread;
        }

        Node(Thread thread, int waitStatus) { // Used by Condition
            this.waitStatus = waitStatus;
            this.thread = thread;
        }
    }

    private transient volatile Node head;//compareAndSetHead
    private transient volatile Node tail;//compareAndSetTail

    private volatile int state;//set/get/compareAndSetState

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-独占锁的获取acquire-int-arg-和释放release-int-arg" tabindex="-1"><a class="header-anchor" href="#_3-独占锁的获取acquire-int-arg-和释放release-int-arg"><span>3. 独占锁的获取acquire(int arg)和释放release(int arg)</span></a></h1><ul><li>通过调用同步器的acquire(int arg)方法可以获取同步状态，该方法对中断不敏感，也就是由于线程获取同步状态失败后进入同步队列中，后续对线程进行中断操作时，线程不会从同步队列中移出，<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/3587c268ff7987d7194c7.jpg" alt="节点自旋获取同步状态.png"><br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/0dea4caed6f09b4eb4cad.jpg" alt="独占式同步状态获取流程.png"></li><li>独占式同步状态获取和释放过程总结：在获取同步状态时，同步器维护一个同步队列，获取状态失败的线程都会被加入到队列中并在队列中进行自旋；移出队列（或停止自旋）的条件是前驱节点为头节点且成功获取了同步状态。在释放同步状态时，同步器调用tryRelease(int arg)方法释放同步状态，然后唤醒头节点的后继节点。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    /*
    * 独占锁的获取
    *    尝试获取锁，失败则自旋加入同步队列队尾直到成功为止
    *    然后自旋尝试获取锁返回中断状态并退出，期间如果将前驱节点状态成功设置为signal后挂起当前线程，被唤醒后判断中断状态在获取锁后返回
    * 1 调用tryAcquire自定义同步器实现的子类方法，需要保证线程安全地获取锁，成功则返回，失败执行2
    * 2 调用addWaiter()将当前线程构造成独享类型的Node加入队列，并返回构造的节点Node，继续执行3
    * 3 调用acquireQueued()无限循环尝试获取锁，成功则返回中断状态，失败则将Node的前驱节点置为Sginal后挂起当前线程，被唤醒后判断当前线程的中断状态在成功获取锁后返回
    * 4 acquireQueued()返回true时，中断（停止）当前线程Thread.currentThread().interrupt()
    */
    public final void acquire(int arg) {
        if (!tryAcquire(arg)//1
            &amp;&amp; acquireQueued( //3
                addWaiter(Node.EXCLUSIVE),//2
            arg))
        selfInterrupt();//4
    }

    /*
    * 根据当前线程和mode构造Node加入同步队列尾部，并返回构造的节点Node
    * 2.1 根据当前线程和mode构造独占模式的节点Node
    * 2.2 若tail节点不为null则使用CAS操作compareAndSetTail将Node加入到队尾；快速入队成功则返回node，失败则执行3
    * 2.3 调用enq()无限循环初始化队头空节点或者使用CAS操作直到compareAndSetTail将Node加入到队尾中(自旋)
    *    2.3.1 如果tail为null，构造新的空节点，并将其设置为队列的Head，此时head=tail=new Node();
    *    2.3.2 如果tail不为null，使用CAS操作compareAndSetTail将Node加入到队尾(跟2一样)
    */
    private Node addWaiter(Node mode) {
        Node node = new Node(Thread.currentThread(), mode);//2.1
        Node pred = tail;
        if (pred != null) {//2.2
            node.prev = pred;
            /**
             * 基于CAS将node设置为尾节点，如果设置失败，说明在当前线程获取尾节点到现在这段过程中已经有其他线程将尾节点给替换过了，确保节点能够被线程安全添加
             * 假设有链表node1--&gt;node2--&gt;pred（当然是双链表，这里画成双链表才合适）,
             * 通过CAS将pred替换成了node节点，即当下的链表为node1--&gt;node2--&gt;node,
             * 然后根据上边的&quot;node.prev = pred&quot;与下边的&quot;pred.next = node&quot;将pred插入到双链表中去，组成最终的链表如下：
             * node1--&gt;node2--&gt;pred--&gt;node
             * 这样的话，实际上我们发现没有指定node2.next=pred与pred.prev=node2，这是为什么呢？
             * 因为在之前这两句就早就执行好了，即node2.next和pred.prev这两个属性之前就设置好了
             */
            if (compareAndSetTail(pred, node)) {
                pred.next = node;
                return node;
            }
        }
        enq(node);//2.3
        return node;
    }
    //同步器通过“死循环”来保证节点的正确添加，只有通过CAS将节点设置成为尾节点之后，当前线程才能从该方法返回，否则，当前线程不断地尝试设置。enq(final Node node)方法将并发添加节点的请求通过CAS变得“串行化”了。
    private Node enq(final Node node) {//2.3
        for (;;) {//2.3
            Node t = tail;
            if (t == null) { //2.3.1
                /*
                * 基于CAS将新节点（dummy节点）设置到头上head去，如果设置失败，则说明，在这个过程中，已经有其他线程设置过了
                * 如果设置成功则head=tail=new Node()，之后有新节点入队的话，就插入到该dummy之后
                */
                if (compareAndSetHead(new Node()))//空白的节点用来新建新的节点
                    tail = head;
            } else {//3.2
                node.prev = t;
                if (compareAndSetTail(t, node)) {
                    t.next = node;
                    return t;
                }
            }
        }
    }
    /* 
    * 节点进入同步队列后无限循环(自旋)直至获取锁退出，如果获取不到则阻塞，而被阻塞线程的唤醒主要依靠前驱节点的出队或阻塞线程被中断来实现。如果将Node的前置节点置为Sginal成功后挂起当前线程，线程被唤醒后判断中断状态
    * 1 无限循环
    * 2 同步队列获得锁的条件：如果当前驱节点为Head节点(保证FIFO和前驱节点不是头节点的线程由于中断而被唤醒情况)并且获取锁成功(注意异常)，将Node设置为头节点并返回是否中断的结果退出循环，否则执行3
    * 3 调用shouldParkAfterFailedAcquire()去掉在队列中前驱节点的CANCELLED状态的节点，借助无限循环将前驱节点状态通过CAS操作设置为SIGNAL，成功则执行4
    * 4 调用parkAndCheckInterrupt()挂起当前节点所在的线程并在被唤醒后判断线程中断状态
    * 5 finally调用cancelAcquire(node)将node从队列中去掉或者如果当前节点是头结点则唤醒后置节点
    */
    final boolean acquireQueued(final Node node, int arg) {
        boolean failed = true;
        try {
            boolean interrupted = false;
            for (;;) {//1
                final Node p = node.predecessor();
                if (p == head &amp;&amp; tryAcquire(arg)) {//2
                    setHead(node);
                    p.next = null; // help GC
                    failed = false;
                    return interrupted;
                }
                if (shouldParkAfterFailedAcquire(p, node) &amp;&amp; //3
                    parkAndCheckInterrupt())//4
                    interrupted = true;
            }
        } finally {
            if (failed)
                cancelAcquire(node);//5
        }
    }
    /*
    *  判断前驱节点是否为signal并通过CAS操作将前驱节点的等待状态设置为signal
    *  1 如果前继节点状态为SIGNAL，表明当前节点需要被unpark(唤醒)，此时则返回true。
    *  2 如果前继节点状态为CANCELLED(ws&gt;0)，说明前继节点已经被取消，则通过先前回溯找到一个有效(非CANCELLED状态)的节点，并返回false。
    *  3 如果前继节点状态为非SIGNAL、非CANCELLED，则设置前继的状态为SIGNAL，并返回false
    */
    private static boolean shouldParkAfterFailedAcquire(Node pred, Node node) {
        int ws = pred.waitStatus;
        if (ws == Node.SIGNAL)//1
            return true;
        if (ws &gt; 0) {//2
            do {
                //==&gt;pred = pred.prev;node.prev = pred;将当前节点的前驱节点换成前驱节点的前驱节点
                node.prev = pred = pred.prev;
            } while (pred.waitStatus &gt; 0);
            pred.next = node;
        } else {//3
            /*
             * 1/这为什么用CAS，现在已经入队成功了，前驱节点就是pred，除了node外应该没有别的线程在操作这个节点了，那为什么还要用CAS？而不直接赋值呢？
             * （解释：因为pred可以自己将自己的状态改为cancel，也就是pred的状态可能同时会有两条线程（pred和node）去操作）
             * 2/既然前驱节点已经设为SIGNAL了，为什么最后还要返回false
             * （因为CAS可能会失败，这里不管失败与否，都返回false，下一次执行该方法的之后，pred的等待状态就是SIGNAL了）
             */
            compareAndSetWaitStatus(pred, ws, Node.SIGNAL);//调用下面的
        }
        return false;
    }
    
    //挂起当前线程并返回中断状态
    private final boolean parkAndCheckInterrupt() {
        LockSupport.park(this);
        return Thread.interrupted();
    }

    /*
    * 将node从队列中去掉或者如果当前节点是头结点则唤醒后置节点
    * 1 如果node为null，则忽略(被GC回收了)
    * 2 将node的thread置为null
    * 3 如果node状态为CANCELLED，则通过回溯找到一个有效(非CANCELLED状态)的节点作为前驱节点
    * 4 将node状态设置为CANCELLED
    * 5 如果node是tail节点，则直接将前驱节点的后置节点设置为null
    * 6 如果当前节点Node不是tail节点
    *   6.1 如果当前节点的前驱节点不是head节点，则将当前节点Node的后置节点与前置节点通过CAS操作连接起来
    *   6.2 如果当前节点的前驱节点是head节点，则调用unparkSuccessor唤醒当前节点的后置节点
    */
    private void cancelAcquire(Node node) {
        if (node == null) return;//1

        node.thread = null;//2

        Node pred = node.prev;//3
        while (pred.waitStatus &gt; 0)
            node.prev = pred = pred.prev;

        Node predNext = pred.next;

        node.waitStatus = Node.CANCELLED;//4

        if (node == tail &amp;&amp; compareAndSetTail(node, pred)) {//5
            compareAndSetNext(pred, predNext, null);
        } else {
            int ws;
            if (pred != head &amp;&amp;
                ((ws = pred.waitStatus) == Node.SIGNAL ||
                 (ws &lt;= 0 &amp;&amp; compareAndSetWaitStatus(pred, ws, Node.SIGNAL))) &amp;&amp;
                pred.thread != null) {
                Node next = node.next;
                if (next != null &amp;&amp; next.waitStatus &lt;= 0)
                    compareAndSetNext(pred, predNext, next);
            } else {
                unparkSuccessor(node);//6.2
            }

            node.next = node; // help GC
        }
    }
    /*
    * 功能 唤醒当前节点的后置节点
    * 1 Node节点的WaitStatus如果是非CANCELLED则尝试设置为0，设置成不成功无所谓
    * 2 找出Node节点的下一个节点，如果为null或者被CANCELLED则从尾结点轮询到头结点选出一个未被CANCELLED结点
    * 3 如果找到的Node节点不为null则直接唤醒该节点所在的线程
    */
    private void unparkSuccessor(Node node) {
        int ws = node.waitStatus;
        if (ws &lt; 0)
            compareAndSetWaitStatus(node, ws, 0);//1
            
        Node s = node.next;//2
        if (s == null || s.waitStatus &gt; 0) {
            s = null;
            for (Node t = tail; t != null &amp;&amp; t != node; t = t.prev)
                if (t.waitStatus &lt;= 0)
                    s = t;
        }
        if (s != null)
            LockSupport.unpark(s.thread);//3
    }
    /*
    * 独占锁的释放
    *   1 调用子类tryRelease
    *   2 头结点不为空则唤醒头节点后继节点
    */
    public final boolean release(int arg) {
        if (tryRelease(arg)) {//1
            Node h = head;
            if (h != null &amp;&amp; h.waitStatus != 0)//2
                unparkSuccessor(h);
            return true;
        }
        return false;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_5-可中断式获取锁acquireinterruptibly-int-arg" tabindex="-1"><a class="header-anchor" href="#_5-可中断式获取锁acquireinterruptibly-int-arg"><span>5. 可中断式获取锁acquireInterruptibly(int arg)</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    /*
    * 1 与acquire区别线程唤醒后如果处于中断状态则抛出中断异常
    */
    public final void acquireInterruptibly(int arg) throws InterruptedException {
        if (Thread.interrupted()) throw new InterruptedException();
        if (!tryAcquire(arg))
            doAcquireInterruptibly(arg);//3
    }
    private void doAcquireInterruptibly(int arg)
        throws InterruptedException {
        //将节点插入到同步队列中
        final Node node = addWaiter(Node.EXCLUSIVE);
        boolean failed = true;
        try {
            for (;;) {
                final Node p = node.predecessor();
                if (p == head &amp;&amp; tryAcquire(arg)) {
                    setHead(node);
                    p.next = null;
                    failed = false;
                    return;
                }
                if (shouldParkAfterFailedAcquire(p, node) &amp;&amp;
                    parkAndCheckInterrupt())
                    throw new InterruptedException();//1
            }
        } finally {
            if (failed)
                cancelAcquire(node);
        }
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_6-超时等待式获取锁tryacquirenanos-int-arg-long-nanostimeout" tabindex="-1"><a class="header-anchor" href="#_6-超时等待式获取锁tryacquirenanos-int-arg-long-nanostimeout"><span>6. 超时等待式获取锁tryAcquireNanos(int arg, long nanosTimeout)</span></a></h1><ul><li>doAcquireNanos(int arg,long nanosTimeout)方法可以超时获取同步状态，即在指定的时间段内获取同步状态，如果获取到同步状态则返回true，否则，返回false。如果当前线程被中断，会立刻返回，并抛出InterruptedException。而synchronized不具备该特性</li><li>独占式超时获取同步状态doAcquireNanos(int arg,long nanosTimeout)和独占式获取同步状态acquire(int args)在流程上非常相似，当节点的前驱节点为头节点时尝试获取同步状态，如果获取成功则从该方法返回，其主要区别在于未获取到同步状态时的处理逻辑。acquire(int args)在未获取到同步状态时，将会使当前线程一直处于等待状态，而doAcquireNanos(int arg,long nanosTimeout)会判断是否超时（nanosTimeout小于等于0表示已经超时），如果没有超时，重新计算超时间隔nanosTimeout，然后使当前线程等待nanosTimeout纳秒，如果当前线程在nanosTimeout纳秒内没有获取到同步状态，将会从等待逻辑LockSupport.parkNanos(Object blocker,long nanos)中自动返回。</li><li>如果nanosTimeout小于等于spinForTimeoutThreshold（1000纳秒）时，将不会使该线程进行超时等待，而是进入快速的自旋过程。原因在于，非常短的超时等待无法做到十分精确，如果这时再进行超时等待，相反会让nanosTimeout的超时从整体上表现得反而不精确。因此，在超时非常短的场景下，同步器会进入无条件的快速自旋。<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/4eeae1acd7ba26e380300.jpg" alt="独占式超时获取同步状态流程.png"></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    /*
    * 与acquireInterruptibly区别挂起条件添加一条：剩余时间大于1秒则按剩余时间阻塞当前线程
    */
    public final boolean tryAcquireNanos(int arg, long nanosTimeout)
            throws InterruptedException {
        if (Thread.interrupted()) throw new InterruptedException();
        return tryAcquire(arg) || doAcquireNanos(arg, nanosTimeout);
    }

    static final long spinForTimeoutThreshold = 1000L;

    private boolean doAcquireNanos(int arg, long nanosTimeout)
            throws InterruptedException {
        if (nanosTimeout &lt;= 0L)
            return false;
        final long deadline = System.nanoTime() + nanosTimeout;
        final Node node = addWaiter(Node.EXCLUSIVE);
        boolean failed = true;
        try {
            for (;;) {
                final Node p = node.predecessor();
                if (p == head &amp;&amp; tryAcquire(arg)) {
                    setHead(node);
                    p.next = null; // help GC
                    failed = false;
                    return true;
                }
                nanosTimeout = deadline - System.nanoTime();
                //计算时间，当前时间now减去睡眠之前的时间lastTime得到已经睡眠
                //的时间delta，然后被原有超时时间nanosTimeout减去，得到了
                //还应该睡眠的时间
                if (nanosTimeout &lt;= 0L) return false;
                    
                if (shouldParkAfterFailedAcquire(p, node) &amp;&amp; 
                    nanosTimeout &gt; spinForTimeoutThreshold) 
                    LockSupport.parkNanos(this, nanosTimeout);
                if (Thread.interrupted())
                    throw new InterruptedException();
            }
        } finally {
            if (failed)
                cancelAcquire(node);
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_7-共享锁的获取acquireshared-int-arg-和释放releaseshared-int-arg" tabindex="-1"><a class="header-anchor" href="#_7-共享锁的获取acquireshared-int-arg-和释放releaseshared-int-arg"><span>7. 共享锁的获取acquireShared(int arg)和释放releaseShared(int arg)</span></a></h1><ul><li>共享式获取与独占式获取最主要的区别在于同一时刻能否有多个线程同时获取到同步状态。写操作要求对资源的独占式访问，而读操作可以是共享式访问，</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    /*
    * tryAcquireShared(int arg)返回值大于等于0时，表示能够获取到同步状态
    * 与独占锁的区别
    * 1 获取锁成功后当tryAcquireShared&gt;0或者新旧头结点的waitStatus为signal或者propagate唤醒后继节点
    */
    public final void acquireShared(int arg) {
        if (tryAcquireShared(arg) &lt; 0)
            doAcquireShared(arg);
    }

    private void doAcquireShared(int arg) {
        final Node node = addWaiter(Node.SHARED);
        boolean failed = true;
        try {
            boolean interrupted = false;
            for (;;) {
                final Node p = node.predecessor();
                if (p == head) {
                    int r = tryAcquireShared(arg);
                    if (r &gt;= 0) {
                        setHeadAndPropagate(node, r);
                        p.next = null; // help GC
                        if (interrupted)
                            selfInterrupt();
                        failed = false;
                        return;
                    }
                }
                if (shouldParkAfterFailedAcquire(p, node) &amp;&amp;
                    parkAndCheckInterrupt())
                    interrupted = true;
            }
        } finally {
            if (failed)
                cancelAcquire(node);
        }
    }

    private void setHeadAndPropagate(Node node, int propagate) {
        Node h = head; // Record old head for check below
        setHead(node);
        //1
        if (propagate &gt; 0 || h == null || h.waitStatus &lt; 0 ||
            (h = head) == null || h.waitStatus &lt; 0) {
            Node s = node.next;
            if (s == null || s.isShared())
                doReleaseShared();
        }
    }

    /*
    * 共享锁唤醒后继节点
    * 1 调用时机：
    *    刚获取共享锁的线程并且tryAcquireShared&gt;0或者waitStatus为signal或者propagate时
    *    已经持有共享锁的线程释放锁
    * 2 目的：唤醒头结点的下一个节点
    * 3 唤醒下一个节点的条件？头结点为SIGNAL且CAS操作头结点的WaitStatus设置为0成功
    * 4 PROPAGATE的作用?解决并发释放信号量所导致部分请求信号量的线程无法被唤醒的问题
    *    https://bugs.java.com/bugdatabase/view_bug.do?bug_id=6801020
    *    当线程调用tryAcquireShared返回0并将头的waitstatus设置为0时并不唤醒后继节点的瞬间
    *    线程2调用doReleaseShared释放锁，并读取到头的waitstatus为0时也不唤醒后继节点，导致队列等待线程无法被唤醒
    * 5 退出条件为什么是h == head?
    *   配合for(;;)加快唤醒后继节点的速度，即提供多线程竞争
    */
    private void doReleaseShared() {
        for (;;) {
            Node h = head;
            if (h != null &amp;&amp; h != tail) {
                int ws = h.waitStatus;
                if (ws == Node.SIGNAL) {
                    if (!compareAndSetWaitStatus(h, Node.SIGNAL, 0))
                        continue;            // loop to recheck cases
                    unparkSuccessor(h);
                }
                else if (ws == 0 &amp;&amp;
                         !compareAndSetWaitStatus(h, 0, Node.PROPAGATE))
                    continue;                // loop on failed CAS
            }
            if (h == head)                   // loop if head changed
                break;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    /*
    * tryReleaseShared(int arg)方法必须确保同步状态（或者资源数）线程安全释放，一般是通过循环和CAS来保证的，因为释放同* 步状态的操作会同时来自多个线程。
    * 共享锁的释放
    * 1 调用子类tryReleaseShared
    * 2 成功则调用doReleaseShared 唤醒下一个线程或者设置传播状态。
    */
    public final boolean releaseShared(int arg) {
        if (tryReleaseShared(arg)) {//1
            doReleaseShared();//2
            return true;
        }
        return false;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_9-可中断acquiresharedinterruptibly-一样" tabindex="-1"><a class="header-anchor" href="#_9-可中断acquiresharedinterruptibly-一样"><span>9. 可中断acquireSharedInterruptibly()一样</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    private void doAcquireSharedInterruptibly(int arg)
            throws InterruptedException {
        final Node node = addWaiter(Node.SHARED);
        boolean failed = true;
        try {
            for (;;) {
                final Node p = node.predecessor();
                if (p == head) {
                    int r = tryAcquireShared(arg);
                    if (r &gt;= 0) {
                        setHeadAndPropagate(node, r);
                        p.next = null; // help GC
                        failed = false;
                        return;
                    }
                }
                if (shouldParkAfterFailedAcquire(p, node) &amp;&amp;
                    parkAndCheckInterrupt())
                    throw new InterruptedException();
            }
        } finally {
            if (failed)
                cancelAcquire(node);
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_10-超时等待tryacquiresharednanos-一样" tabindex="-1"><a class="header-anchor" href="#_10-超时等待tryacquiresharednanos-一样"><span>10. 超时等待tryAcquireSharedNanos()一样</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    private boolean doAcquireSharedNanos(int arg, long nanosTimeout)
            throws InterruptedException {
        if (nanosTimeout &lt;= 0L)
            return false;
        final long deadline = System.nanoTime() + nanosTimeout;
        final Node node = addWaiter(Node.SHARED);
        boolean failed = true;
        try {
            for (;;) {
                final Node p = node.predecessor();
                if (p == head) {
                    int r = tryAcquireShared(arg);
                    if (r &gt;= 0) {
                        setHeadAndPropagate(node, r);
                        p.next = null; // help GC
                        failed = false;
                        return true;
                    }
                }
                nanosTimeout = deadline - System.nanoTime();
                if (nanosTimeout &lt;= 0L)
                    return false;
                if (shouldParkAfterFailedAcquire(p, node) &amp;&amp;
                    nanosTimeout &gt; spinForTimeoutThreshold)
                    LockSupport.parkNanos(this, nanosTimeout);
                if (Thread.interrupted())
                    throw new InterruptedException();
            }
        } finally {
            if (failed)
                cancelAcquire(node);
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="自定义同步组件——twinslock" tabindex="-1"><a class="header-anchor" href="#自定义同步组件——twinslock"><span>自定义同步组件——TwinsLock</span></a></h1><ul><li>设计一个同步工具：同一时刻，只允许至多两个线程同时访问，超过两个线程的访问将被阻塞</li><li>首先，确定访问模式。TwinsLock能够在同一时刻支持多个线程的访问，这显然是共享式访问，因此，需要使用同步器提供的acquireShared(int args)方法等和Shared相关的方法，这就要求TwinsLock必须重写tryAcquireShared(int args)方法和tryReleaseShared(int args)方法，这样才能保证同步器的共享式同步状态的获取与释放方法得以执行。</li><li>其次，定义资源数。TwinsLock在同一时刻允许至多两个线程的同时访问，表明同步资源数为2，这样可以设置初始状态status为2，当一个线程进行获取，status减1，该线程释放，则status加1，状态的合法范围为0、1和2，其中0表示当前已经有两个线程获取了同步资源，此时再有其他线程对同步状态进行获取，该线程只能被阻塞。在同步状态变更时，需要使用compareAndSet(int expect,int update)方法做原子性保障。</li><li>最后，组合自定义同步器。前面的章节提到，自定义同步组件通过组合自定义同步器来完成同步功能，一般情况下自定义同步器会被定义为自定义同步组件的内部类。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class TwinsLock implements Lock {
    private final Sync sync = new Sync(2);
    private static final class Sync extends AbstractQueuedSynchronizer {
        Sync(int count) {
            if (count &lt;= 0) {
                throw new IllegalArgumentException(&quot;count must large
                than zero.&quot;);
            }
            setState(count);
        }
        public int tryAcquireShared(int reduceCount) {
            for (;;) {
                int current = getState();
                int newCount = current - reduceCount;
                if (newCount &lt; 0 || compareAndSetState(current,newCount)) {
                    return newCount;
                }
            }
        }
        public boolean tryReleaseShared(int returnCount) {
            for (;;) {
                int current = getState();
                int newCount = current + returnCount;
                if (compareAndSetState(current, newCount)) {
                    return true;
                }
            }
        }
    }
    public void lock() {
        sync.acquireShared(1);
    }
    public void unlock() {
        sync.releaseShared(1);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class TwinsLockTest {
    @Test
    public void test() {
        final Lock lock = new TwinsLock();
        class Worker extends Thread {
            public void run() {
                while (true) {
                    lock.lock();
                    try {
                        SleepUtils.second(1);
                        System.out.println(Thread.currentThread().getName());
                        SleepUtils.second(1);
                    } finally {
                        lock.unlock();
                    }
                }
            }
        }
        // 启动10个线程
        for (int i = 0; i &lt; 10; i++) {
            Worker w = new Worker();
            w.setDaemon(true);
            w.start();
        }
        // 每隔1秒换行
        for (int i = 0; i &lt; 10; i++) {
            SleepUtils.second(1);
            System.out.println();
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),a=[s];function r(v,t){return n(),i("div",null,a)}const m=e(l,[["render",r],["__file","aqs.html.vue"]]),o=JSON.parse('{"path":"/backend/java/aqs.html","title":"AbstractQueuedSynchronizer","lang":"zh-CN","frontmatter":{"title":"AbstractQueuedSynchronizer","date":"2023-01-01T00:00:00.000Z","tags":"sourcecode","categories":"源码","description":"AbstractQueuedSynchronizer","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/java/aqs.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"AbstractQueuedSynchronizer"}],["meta",{"property":"og:description","content":"AbstractQueuedSynchronizer"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/e9915cfd1e0090d670830.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"AbstractQueuedSynchronizer\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/e9915cfd1e0090d670830.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/3587c268ff7987d7194c7.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/0dea4caed6f09b4eb4cad.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/4eeae1acd7ba26e380300.jpg\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":19.63,"words":5888},"filePathRelative":"backend/java/aqs.md","localizedDate":"2023年1月1日","excerpt":"<p>AbstractQueuedSynchronizer</p>\\n","autoDesc":true}');export{m as comp,o as data};
