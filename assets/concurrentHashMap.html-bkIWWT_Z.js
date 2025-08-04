import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as e,e as l}from"./app-7KT7HDzT.js";const s={},d=l(`<p>ConcurrentHashMap</p><h1 id="concurrenthashmap" tabindex="-1"><a class="header-anchor" href="#concurrenthashmap"><span>ConcurrentHashMap</span></a></h1><h2 id="产生原因" tabindex="-1"><a class="header-anchor" href="#产生原因"><span>产生原因：</span></a></h2><ul><li>并发编程中使用HashMap可能导致程序死循环。导致HashMap的Entry链表形成环形数据结构，一旦形成环形数据结构，Entry的next节点永远不为空，就会产生死循环获取Entry。</li><li>而使用线程安全的HashTable效率低。HashTable容器使用synchronized来保证线程安全，竞争越激烈效率越低</li></ul><h2 id="实现高性能原理" tabindex="-1"><a class="header-anchor" href="#实现高性能原理"><span>实现高性能原理</span></a></h2><ul><li>ConcurrentHashMap使用分段锁来保证在多线程下的性能。一次锁住一个桶。将hash表分为16个桶，诸如 get,put,remove 等常用操作只锁当前需要用到的桶</li><li>ConcurrentHashMap使用了一种不同的迭代方式。当 iterator被创建后集合再发生改变就不再是抛出ConcurrentModificationException异常，而是在改变时new新的数据从而不影响原有的数据，iterator完成后再将头指针替换为新的数据 ，这样iterator线程可以使用原来老的数据，而写线程也可以并发的完成改变</li></ul><h2 id="concurrenthashmap的结构" tabindex="-1"><a class="header-anchor" href="#concurrenthashmap的结构"><span>ConcurrentHashMap的结构</span></a></h2><ul><li>ConcurrentHashMap是由Segment（ReentrantLock）数组结构和HashEntry(存储键值对数据)数组结构组成。一个ConcurrentHashMap里包含一个Segment数组。一个Segment里包含一个HashEntry数组，每个Segment守护着一个HashEntry数组里的元素，当对HashEntry数组的数据进行修改时，必须首先获得与它对应的Segment锁</li><li>Segment与HashMap类似，是一种数组和链表结构。每个HashEntry是一个链表结构的元素</li></ul><h2 id="concurrenthashmap的初始化" tabindex="-1"><a class="header-anchor" href="#concurrenthashmap的初始化"><span>ConcurrentHashMap的初始化</span></a></h2><ul><li>ConcurrentHashMap初始化方法是通过initialCapacity、loadFactor和concurrencyLevel等几个参数来初始化segment数组、段偏移量segmentShift、段掩码segmentMask和每个segment里的HashEntry数组来实现</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//负载因子，默认值75%。当table使用率达到75%，为减少hash碰撞，将table的长度扩容一倍。
private static final float LOAD_FACTOR = 0.75f;

//默认值为8。当链表的长度大于8时，结构由链表转为红黑树。
static final int TREEIFY_THRESHOLD = 8;

//默认值为6，红黑树转为链表的阈值。
static final int UNTREEIFY_THRESHOLD = 6;

//默认值16.当table扩容时，每个线程最少迁移table的槽位数。
private static final int MIN_TRANSFER_STRIDE = 16;

//table迁移过程的临时变量，在迁移过程中将元素全都迁移到nextTable上。
private transient volatile Node&lt;K,V&gt;[] nextTable;

//表示table容量从n扩容到2n时，是从索引n-&gt;1元素开始迁移， transferIndex代表当前已经迁移的元素的下标。
private transient volatile int transferIndex; 

//一个特殊的Node节点，其hashcode=MOVED，代表此时table正在做扩容。当下一个线程向这个元素插入数据时，检查hashcode=MOVED，就会帮着扩容。
ForwardingNode ：


//2^30而不是2^31原因在于int的范围是 -2^31~2^31-1，所以会越界(容量是要为 2^n)
private static final int MAXIMUM_CAPACITY = 1 &lt;&lt; 30;

/* 表初始化和调整大小控件。
* 如果sizeCtl = 0，表示哈希表未初始化，并且数组的初始容量是16；
* 如果sizeCtl = -1,表示哈希表正在进行初始化；
* 如果sizeCtl &lt; 0并且sizeCtl != -1，表示哈希表正在扩容，二进制的低16位数值为 M=(sizeCtl&amp;31)，此时有M-1个线程进行扩容
* sizeCtl高16位表示扩容标记，低16位表示并行扩容的线程数，（16位）
* 初始化后，保存要调整表大小的下一个元素计数值。
*/
private transient volatile int sizeCtl;


public ConcurrentHashMap(int initialCapacity) {
    //校验指定的初始容量大小是否大于等于最大容量大小的一半
    //如果大于等于最大容量大小的一半则在后续第一次添加元素的时候使用最大容量大小创建数组
    //如果小于最大容量大小的一半则根据指定容量来计算最接近指定容量大小并大于指定容量的2的次方
    //指定容量大小如果等于最大容量大小的一半则说明指定容量大小是2的29次方,为什么不使用指定容量大小,而是使用最大的容量大小?因为如果使用的话就会越界
    if (initialCapacity &lt; 0)
        throw new IllegalArgumentException();
    int cap = ((initialCapacity &gt;= (MAXIMUM_CAPACITY &gt;&gt;&gt; 1)) ?
                MAXIMUM_CAPACITY :
                tableSizeFor(initialCapacity + (initialCapacity &gt;&gt;&gt; 1) + 1));
    this.sizeCtl = cap;
}

/**
* 获得n最大的2^n数
* 思路：2^n本质是1&gt;&gt;&gt;n(1后面全部是0)，可以由n-1个1组成的数加1得到，即先求2^n-1最后再+1
* 实现：使用了或运算性质将某些位置为1，然后每次翻倍将数据置为1
* 之所以在开始移位前先将容量-1，是为了避免给定容量已经是8,16这样2的幂时，不减一直接移位会导致得到的结果比预期大。比如预期16得到应该是16，直接移位的话会得到32。在上图中就是所有x本身已经是0的情况下，不减1得到的结果变大了。
*/
private static final int tableSizeFor(int c) {
    int n = c - 1;
    n |= n &gt;&gt;&gt; 1;
    n |= n &gt;&gt;&gt; 2;
    n |= n &gt;&gt;&gt; 4;
    n |= n &gt;&gt;&gt; 8;
    n |= n &gt;&gt;&gt; 16;
    return (n &lt; 0) ? 1 : (n &gt;= MAXIMUM_CAPACITY) ? MAXIMUM_CAPACITY : n + 1;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/1e11ee1378bca91c1d8d8.jpg" alt="tableSizeFor原理.png" tabindex="0"><figcaption>tableSizeFor原理.png</figcaption></figure><h2 id="concurrenthashmap的put方法" tabindex="-1"><a class="header-anchor" href="#concurrenthashmap的put方法"><span>ConcurrentHashMap的put方法</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//值为-1。当Node.hash为MOVED时，代表table正在扩容。
static final int MOVED = -1;

//值为-2。代表此元素后接红黑树
static final int TREEBIN = -2;

public V put(K key, V value) {
    return putVal(key, value, false);
}

/** Implementation for put and putIfAbsent */
final V putVal(K key, V value, boolean onlyIfAbsent) {
    if (key == null || value == null) throw new NullPointerException();
    int hash = spread(key.hashCode());
    int binCount = 0;
    for (Node&lt;K,V&gt;[] tab = table;;) {
        Node&lt;K,V&gt; f; int n, i, fh;
        if (tab == null || (n = tab.length) == 0)
            tab = initTable();
            // key所在的桶没有一个元素，那就直接将当前key作为头节点，put操作完成
        else if ((f = tabAt(tab, i = (n - 1) &amp; hash)) == null) {
            // CAS设置头节点，因为可能有其它线程也在设置该头节点
            if (casTabAt(tab, i, null,
                            new Node&lt;K,V&gt;(hash, key, value, null)))
                break;                   // no lock when adding to empty bin
        }
        //如果桶中的元素不为空，那就需要从头节点开始遍历，注意，这里遍历的可能是链表也可能是红黑树。
        //当 put 的时候如果发现正在扩容，则需要帮助 map 完成扩容，相当于扩容可能由多个线程来完成，
        else if ((fh = f.hash) == MOVED)//-1
            tab = helpTransfer(tab, f);
        else {
            //接下来就要从头节点开始遍历了，链表使用的是尾插法，即新节点作为链表最后一个节点。
            V oldVal = null;
            synchronized (f) {
                if (tabAt(tab, i) == f) {
                    if (fh &gt;= 0) {//fh=f.hash如果=-1则在扩容，=-2则是红黑树，所以&gt;=0是链表
                        binCount = 1;
                        for (Node&lt;K,V&gt; e = f;; ++binCount) {
                            K ek;
                            //如果比较hash与equals方法有值则返回
                            if (e.hash == hash &amp;&amp;
                                ((ek = e.key) == key ||
                                    (ek != null &amp;&amp; key.equals(ek)))) {
                                oldVal = e.val;
                                if (!onlyIfAbsent)
                                    e.val = value;
                                break;
                            }
                            //值不存在则放入链表尾部
                            Node&lt;K,V&gt; pred = e;
                            if ((e = e.next) == null) {
                                pred.next = new Node&lt;K,V&gt;(hash, key,
                                                            value, null);
                                break;
                            }
                        }
                    }
                    else if (f instanceof TreeBin) {//红黑树
                        Node&lt;K,V&gt; p;
                        binCount = 2;
                        if ((p = ((TreeBin&lt;K,V&gt;)f).putTreeVal(hash, key,
                                                        value)) != null) {
                            oldVal = p.val;
                            if (!onlyIfAbsent)
                                p.val = value;
                        }
                    }
                }
            }
            if (binCount != 0) {
                if (binCount &gt;= TREEIFY_THRESHOLD)
                    treeifyBin(tab, i);
                if (oldVal != null)
                    return oldVal;
                break;
            }
        }
    }
    addCount(1L, binCount);
    return null;
}
//将key本身的hash值的高16位参加运算获取到新的hash值,如果数组的长度的二进制是在低16位二进制中就会导致key高16位的二进制没有参加运算
//容易导致运算后的key的索引位置发生冲突,所以需要将高16位二进制无符号右移16位与原hash值的二进制进行运算减少索引冲突。
//static final int HASH_BITS = 0x7fffffff;
static final int spread(int h) {
    return (h ^ (h &gt;&gt;&gt; 16)) &amp; HASH_BITS;
}

private final Node&lt;K,V&gt;[] initTable() {
    Node&lt;K,V&gt;[] tab; int sc;
    //第《1》步，判断数组是否未初始化
    while ((tab = table) == null || tab.length == 0) {
        //第《2》步，用sc保存sizeCtl的值，作为后面CAS的预期值
        //第《3》步判断sizeCtl的值是否&lt;0，是的话则发现有其他线程在做数据的初始化，让出CPU
        if ((sc = sizeCtl) &lt; 0)
            Thread.yield();
        //走到这里，说明sizeCtl&gt;=0，则有两种清况：一是数组未初始化。
        //二是有其他线程在第《1》步之后，第《2》步之前将数组初始化完成，此时sizeCtl为数组的扩容阈值.

        //第《4》步，CAS将SIZECTL值修改为-1，表示本线程开始进行数组的初始化
        //如果修改成功，开始初始化操作；如果修改失败，则表示有其他线程在《1》《2》之后抢先修改了SIZECTL
        else if (U.compareAndSwapInt(this, SIZECTL, sc, -1)) {//竞争锁，与ReentrantLock相似
            try {
                 /*第《5》步，double check数组是否初始化，这里为什么要采用双重校验呢？
                *因为在数组初始化完成之后，sizeCtl的值会，被改成数组的扩容阈值，会是一个大于0的值。
                *所以完全有可能本线程在《1》之后，有其他线程完成了数组的初始化全过程，
                * 使得本线程也能进到这个代码块里来。
                */
                if ((tab = table) == null || tab.length == 0) {
                    //第《6》步，执行哈希表的创建工作，
                    //确定哈希表的容量
                    int n = (sc &gt; 0) ? sc : DEFAULT_CAPACITY;
                    @SuppressWarnings(&quot;unchecked&quot;)
                    Node&lt;K,V&gt;[] nt = (Node&lt;K,V&gt;[])new Node&lt;?,?&gt;[n];
                    table = tab = nt;
                    sc = n - (n &gt;&gt;&gt; 2);//第sc=n-n/4，作为扩容的阈值，赋值给sc
                }
            } finally {
                //第《7》步，如果初始化完成，sizeCtl记录的是扩容阈值；
                //如果初始化失败，则还原sizeCtl
                sizeCtl = sc;
            }
            //走到这里，说明本线程初始化完成了或者其他线程在本线程的
            //《1》、《2》两步之间完成了哈希表的初始化全过程，此时结束循环
            break;
        }
        //走到这里，说明在发现数组未初始化之后，准确初始化之前，
        //有其他线程已经抢先开始初始化了
        //但是其他线程是否将初始化的工作全部正确的完成，并不知道，所以重新开始循环检查
    }
    return tab;
}
// 获取obj对象中offset偏移地址对应的object型field的值,支持volatile load语义。
public native Object getObjectVolatile(Object obj, long offset);

//获取数组中第一个元素的偏移量,与arrayIndexScale配合访问数组指定元素
public native int arrayBaseOffset(java.lang.Class aClass);

//获取数组中一个元素的大小
public native int arrayIndexScale(java.lang.Class aClass);

/**
* ABASE = U.arrayBaseOffset(Node[].class);//Node[].class数组中第一个元素的偏移量
* ASHIFT = 31 - Integer.numberOfLeadingZeros(U.arrayIndexScale(Node[].class));//int范围2^31-1，31-前缀0个数得到每个元素实际位数
* 数组的元素位置=数组第一个元素偏移量+索引i * 每个元素实际位数
*/
static final &lt;K,V&gt; Node&lt;K,V&gt; tabAt(Node&lt;K,V&gt;[] tab, int i) {
    return (Node&lt;K,V&gt;)U.getObjectVolatile(tab, ((long)i &lt;&lt; ASHIFT) + ABASE);
}
//返回无符号整型i的最高非零位前面的n个0的个数，包括符号位。如果i小于0则返回0，等于0则返回32。
//例：10的二进制为：0000 0000 0000 0000 0000 0000 0000 1010 java的int长度为32位，方法返回的就是28。
public static int numberOfLeadingZeros(int i) {
    // HD, Figure 5-6
    if (i == 0)
        return 32;
    int n = 1;
    if (i &gt;&gt;&gt; 16 == 0) { n += 16; i &lt;&lt;= 16; }//二分法32/2=16
    if (i &gt;&gt;&gt; 24 == 0) { n +=  8; i &lt;&lt;=  8; }//二分法16/2=8 + 16
    if (i &gt;&gt;&gt; 28 == 0) { n +=  4; i &lt;&lt;=  4; }//二分法 8/2=4 + 8 + 16
    if (i &gt;&gt;&gt; 30 == 0) { n +=  2; i &lt;&lt;=  2; }//二分法 4/2=2 + 4 + 8 + 16
    n -= i &gt;&gt;&gt; 31; //2/2=1 + 2 + 4 + 8 + 16
    return n;
}

static final &lt;K,V&gt; boolean casTabAt(Node&lt;K,V&gt;[] tab, int i,
                                    Node&lt;K,V&gt; c, Node&lt;K,V&gt; v) {
    return U.compareAndSwapObject(tab, ((long)i &lt;&lt; ASHIFT) + ABASE, c, v);
}
/**
* 判断是否需要扩容
*/
private final void addCount(long x, int check) {
    CounterCell[] as; long b, s;
    if ((as = counterCells) != null ||
        !U.compareAndSwapLong(this, BASECOUNT, b = baseCount, s = b + x)) {
        CounterCell a; long v; int m;
        boolean uncontended = true;
        if (as == null || (m = as.length - 1) &lt; 0 ||
            (a = as[ThreadLocalRandom.getProbe() &amp; m]) == null ||
            !(uncontended =
                U.compareAndSwapLong(a, CELLVALUE, v = a.value, v + x))) {
            fullAddCount(x, uncontended);
            return;
        }
        if (check &lt;= 1)
            return;
        s = sumCount();
    }
    if (check &gt;= 0) {
        Node&lt;K,V&gt;[] tab, nt; int n, sc;
        while (s &gt;= (long)(sc = sizeCtl) &amp;&amp; (tab = table) != null &amp;&amp;
                (n = tab.length) &lt; MAXIMUM_CAPACITY) {
            int rs = resizeStamp(n) &lt;&lt; RESIZE_STAMP_SHIFT;
            if (sc &lt; 0) {
                if (sc == rs + MAX_RESIZERS || sc == rs + 1 ||
                    (nt = nextTable) == null || transferIndex &lt;= 0)
                    break;
                if (U.compareAndSwapInt(this, SIZECTL, sc, sc + 1))
                    transfer(tab, nt);
            }
            else if (U.compareAndSwapInt(this, SIZECTL, sc, rs + 2))
                transfer(tab, null);
            s = sumCount();
        }
    }
}
//桶进行树化的最小表容量。(如果一个bin中的节点太多，则会调整表的大小)该值应至少为4 * TREEIFY_THRESHOLD，以避免调整大小阈值与树化阈值之间的冲突。
static final int MIN_TREEIFY_CAPACITY = 64;

private final void treeifyBin(Node&lt;K,V&gt;[] tab, int index) {
    Node&lt;K,V&gt; b; int n, sc;
    if (tab != null) {
        if ((n = tab.length) &lt; MIN_TREEIFY_CAPACITY)
            tryPresize(n &lt;&lt; 1);
        else if ((b = tabAt(tab, index)) != null &amp;&amp; b.hash &gt;= 0) {
            synchronized (b) {
                if (tabAt(tab, index) == b) {
                    TreeNode&lt;K,V&gt; hd = null, tl = null;
                    for (Node&lt;K,V&gt; e = b; e != null; e = e.next) {
                        TreeNode&lt;K,V&gt; p =
                            new TreeNode&lt;K,V&gt;(e.hash, e.key, e.val,
                                                null, null);
                        if ((p.prev = tl) == null)
                            hd = p;
                        else
                            tl.next = p;
                        tl = p;
                    }
                    setTabAt(tab, index, new TreeBin&lt;K,V&gt;(hd));
                }
            }
        }
    }
}


//2次方个数的数组
transient volatile Node&lt;K,V&gt;[] table;

//在sizeCtl中用于生成戳的位数。对于32位数组，必须至少为6。无法修改
private static int RESIZE_STAMP_BITS = 16;

//在sizeCtl中记录生成戳的位移。无法修改
private static final int RESIZE_STAMP_SHIFT = 32 - RESIZE_STAMP_BITS;

//尝试调整表的大小以容纳给定数量的元素。
private final void tryPresize(int size) {
    //获得n最接近的2^n ，其中size在传入之前就已经翻倍了，最终c是一个大于等于（size * 1.5 + 1）的2的幂次方数
    int c = (size &gt;= (MAXIMUM_CAPACITY &gt;&gt;&gt; 1)) ? MAXIMUM_CAPACITY :
        tableSizeFor(size + (size &gt;&gt;&gt; 1) + 1);
    int sc;
    while ((sc = sizeCtl) &gt;= 0) {
        Node&lt;K,V&gt;[] tab = table; int n;
        if (tab == null || (n = tab.length) == 0) {//如果临时数组为null，则初始化临时数组，尝试将SIZECTL变为-1扩容中
            n = (sc &gt; c) ? sc : c;
            if (U.compareAndSwapInt(this, SIZECTL, sc, -1)) {
                try {
                    if (table == tab) {
                        @SuppressWarnings(&quot;unchecked&quot;)
                        Node&lt;K,V&gt;[] nt = (Node&lt;K,V&gt;[])new Node&lt;?,?&gt;[n];
                        table = nt;
                        sc = n - (n &gt;&gt;&gt; 2);
                    }
                } finally {
                    sizeCtl = sc;
                }
            }
        }
        else if (c &lt;= sc || n &gt;= MAXIMUM_CAPACITY)//容量小于控制容量，或者大于桶最大容量则跳出循环
            break;
        else if (tab == table) {
             /**
             *  返回值作为正在扩容数组的长度n的一个标志位,并且当向左移RESIZE_STAMP_SHIFT=16位时得到一个负数
             * 扩容戳为啥这么设置未知
             * static final int resizeStamp(int n) {
             *   return Integer.numberOfLeadingZeros(n) | (1 &lt;&lt; (RESIZE_STAMP_BITS - 1));
             * }
             *   Integer.numberOfLeadingZeros(n)在指定 int 值的二进制补码表示形式中最高位（最左边）的 1 位之前，返回零位的数量
             * 例如 n为16 0001 0000 则Integer.numberOfLeadingZeros(n)为27，因为n为2的幂次方，因此不同的n此结果也不同
             * 然后与(1 &lt;&lt; (RESIZE_STAMP_BITS - 1)) | ，相当于2^15 | n中左边0的个数。
             * (因此其左移16位后符号位为1，结果肯定是个负数)
             */
            int rs = resizeStamp(n);
            if (sc &lt; 0) {//表明在-1初始化中或者-2树状态
                Node&lt;K,V&gt;[] nt;
                /**1.第一个判断 sc右移RESIZE_STAMP_SHIFT位，也就是比较高ESIZE_STAMP_BITS位生成戳和rs是否相等
                    * 相等则代表是同一个n，是在同一容量下进行的扩容，
                    *  2.第二个和第三个判断 判断当前帮助扩容线程数是否已达到MAX_RESIZERS最大扩容线程数
                    *  3.第四个和第五个判断 为了确保transfer()方法初始化完毕
                    */
                if ((sc &gt;&gt;&gt; RESIZE_STAMP_SHIFT) != rs || sc == rs + 1 ||
                    sc == rs + MAX_RESIZERS || (nt = nextTable) == null ||
                    transferIndex &lt;= 0)
                    break;
                if (U.compareAndSwapInt(this, SIZECTL, sc, sc + 1))
                    transfer(tab, nt);
            }
             /**如果没有线程在进行扩容，那么cas修改sizeCtl值，作为扩容的发起，rs左移RESIZE_STAMP_SHIFT位+2
            * 上面说了，左移RESIZE_STAMP_SHIFT位，肯定是个负数，代表有一个线程正在进行扩容
            * 此时sizeCtl高RESIZE_STAMP_BITS位为生成戳，低RESIZE_STAMP_SHIFT位为扩容线程数
            * +2原因未知
            */
            else if (U.compareAndSwapInt(this, SIZECTL, sc,
                                            (rs &lt;&lt; RESIZE_STAMP_SHIFT) + 2))
                transfer(tab, null);
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>static final int NCPU = Runtime.getRuntime().availableProcessors();

//每个转换红黑树步骤的最小重新绑定数。范围被细分以允许多个调整大小线程。此值用作下限，以避免调整大小器遇到过多的内存争用。该值至少为DEFAULT_CAPACITY。
private static final int MIN_TRANSFER_STRIDE = 16;

private static final long TRANSFERINDEX = U.objectFieldOffset(k.getDeclaredField(&quot;transferIndex&quot;));

private final void transfer(Node&lt;K,V&gt;[] tab, Node&lt;K,V&gt;[] nextTab) {
    int n = tab.length, stride;
    //将 (n&gt;&gt;&gt;3相当于 n/8) 然后除以 CPU核心数。如果得到的结果小于 16，那么就使用16
    //stride每个线程负责迁移数据的区域长度；目的是让每个 CPU 处理的桶一样多，避免出现转移任务不均匀的现象，默认16
    if ((stride = (NCPU &gt; 1) ? (n &gt;&gt;&gt; 3) / NCPU : n) &lt; MIN_TRANSFER_STRIDE)
        stride = MIN_TRANSFER_STRIDE; // subdivide range
         //nextTab未初始化，nextTab是用来扩容的node数组
    if (nextTab == null) {            // initiating
        try {
            @SuppressWarnings(&quot;unchecked&quot;)
            //扩容2倍
            Node&lt;K,V&gt;[] nt = (Node&lt;K,V&gt;[])new Node&lt;?,?&gt;[n &lt;&lt; 1];
            nextTab = nt;
        } catch (Throwable ex) {      // try to cope with OOME
            //扩容失败，sizeCtl使用int的最大值
            sizeCtl = Integer.MAX_VALUE;
            return;
        }
        nextTable = nextTab;//赋值给临时table，在扩容时，由创建新数组的线程初始化这个变量；扩容完成后，将其设置为null；
        transferIndex = n;//记录下一个线程迁移数据的起始位置；transferIndex-1就是下一个线程迁移数据的起始下标；
    }
    int nextn = nextTab.length;
    //创建一个 fwd 节点，表示一个正在被迁移的Node，并且它的hash值为-1(MOVED)，putval方法会有一个判断MOVED的逻辑。它的作用是用来占位，表示原数组中位置i处的节点完成迁移以后，就会在i位置设置一个fwd来告诉其他线程这个位置已经处理过了
    ForwardingNode&lt;K,V&gt; fwd = new ForwardingNode&lt;K,V&gt;(nextTab);
    boolean advance = true;
    boolean finishing = false; // to ensure sweep before committing nextTab
    for (int i = 0, bound = 0;;) {
        Node&lt;K,V&gt; f; int fh;
        // 这个循环使用CAS不断尝试为当前线程分配任务 直到分配成功或任务队列已经被全部分配完毕
        // 如果当前线程已经被分配过bucket区域 那么会通过--i指向下一个待处理bucket然后退出该循环
        while (advance) {
            //nextIndex=transferIndex，数据迁移的起始下标
            //nextBound=transferIndex-stride或者0下一个线程处理的起始位置
            //bound(边界)=nextBound/0是线程迁移数据的结束位置；等于0或者
            int nextIndex, nextBound;
            //i=nextIndex-1是每个待处理节点区间的索引，从尾部开始遍历 --i表示下一个待处理的bucket，如果它&gt;=bound,表示当前线程已经分配过bucket区域，退出while循环
            //finishing是迁移数据结束后的标志
            if (--i &gt;= bound || finishing)
                advance = false;
            //表示所有bucket已经被分配完毕 给nextIndex赋予初始值 = 16(nextIndex=transferIndex=n=tab.length) =24    
            else if ((nextIndex = transferIndex) &lt;= 0) {
                i = -1;
                advance = false;
            }
            //通过cas来修改TRANSFERINDEX(其实就是transferIndex),为当前线程分配任务,确定处理的节点区间为[nextBound,nextIndex] =&gt; [bound,i=nextIndex-1]  
            //transferIndex修改之前的值是迁移数据的起始位置，修改之后的值是结束位置；也作为下一个线程的迁移数据的起始位置；
            else if (U.compareAndSwapInt
                        (this, TRANSFERINDEX, nextIndex,
                        nextBound = (nextIndex &gt; stride ? nextIndex - stride : 0))) {
                bound = nextBound;
                i = nextIndex - 1;
                advance = false;
            }
        }
        //i&lt;0说明已经遍历完旧的数组，也就是当前线程已经处理完所有负责的bucket
        if (i &lt; 0 || i &gt;= n || i + n &gt;= nextn) {
            int sc;
             //如果完成了扩容
            if (finishing) {
                //删除成员变量
                nextTable = null;
                //更新table数组
                table = nextTab;
                //更新阈值 翻倍减去 0.25 ，为新数组大小的 0.75 倍的阈值
                sizeCtl = (n &lt;&lt; 1) - (n &gt;&gt;&gt; 1);
                return;
            }
            // sizeCtl 在迁移前会设置为 (rs &lt;&lt; RESIZE_STAMP_SHIFT) + 2
            // 然后，每增加一个线程参与迁移就会将 sizeCtl 加 1，
            // 这里使用 CAS 操作对 sizeCtl 的低16位进行减 1，代表做完了属于自己的任务
            if (U.compareAndSwapInt(this, SIZECTL, sc = sizeCtl, sc - 1)) {
                //第一个扩容的线程，执行transfer方法之前，会设置 sizeCtl = (resizeStamp(n) &lt;&lt; RESIZE_STAMP_SHIFT) + 2
                //后续帮其扩容的线程，执行transfer方法之前，会设置 sizeCtl = sizeCtl+1
                //每一个退出transfer的方法的线程，退出之前，会设置 sizeCtl = sizeCtl-1
                //那么最后一个线程退出时：必然有
                //sc == (resizeStamp(n) &lt;&lt; RESIZE_STAMP_SHIFT) + 2，即 (sc - 2) == resizeStamp(n) &lt;&lt; RESIZE_STAMP_SHIFT
                // 如果 sc - 2 不等于标识符左移 16 位。如果他们相等了，说明没有线程在帮助他们扩容了。也就是说，扩容结束了。
                if ((sc - 2) != resizeStamp(n) &lt;&lt; RESIZE_STAMP_SHIFT)
                    return;
                // 如果相等，扩容结束了，更新 finising 变量
                finishing = advance = true;
                // 再次循环检查一下整张表
                i = n; // recheck before commit
            }
        }
         // 如果位置 i 处是空的，没有任何节点，那么放入刚刚初始化的 ForwardingNode ”空节点“
        else if ((f = tabAt(tab, i)) == null)
            advance = casTabAt(tab, i, null, fwd);
        //表示该位置已经完成了迁移，也就是如果线程A已经处理过这个节点，那么线程B处理这个节点时，hash值一定为MOVED    
        else if ((fh = f.hash) == MOVED)
            advance = true; // already processed
        else {
            //处理节点
            synchronized (f) {
                if (tabAt(tab, i) == f) {//双重校验
                    Node&lt;K,V&gt; ln, hn;
                    if (fh &gt;= 0) {//fh=f.hash如果=-1则在扩容，=-2则是红黑树，所以&gt;=0是链表
                        int runBit = fh &amp; n;//只有0 和n两种取值；结果是0，表示扩容后位置不变；结果不为0，表示扩容后位置：i+n；
                        //链表上的节点，在扩容之后会分成2条链表.而这条链表上有哪些节点扩容之后位置要改变的哪些节点位置是不改变的，这两种节点在链表上的分布是不确定的；
                        //可以将连续相同的节点看作是一段链表（一个节点也是一段链表），那么这条链表就可以看作2种链表组合组成的；
                        //而lastRun，是指向最后一段链表的头节点；再配合runBit（偏移量）就可以确定最后一段链表属于哪种节点；因此可以看到再次遍历数组时，遍历到lastRun就结束遍历；
                        Node&lt;K,V&gt; lastRun = f;
                        for (Node&lt;K,V&gt; p = f.next; p != null; p = p.next) {
                            int b = p.hash &amp; n;
                            if (b != runBit) {
                                runBit = b;
                                lastRun = p;
                            }
                        }
                        if (runBit == 0) {//fh &amp; n = 0；扩容后下标不变；fh &amp; n = n；扩容后下标位置改变（i + n）；
                            ln = lastRun;
                            hn = null;
                        }
                        else {
                            hn = lastRun;
                            ln = null;
                        }
                        //从头遍历每个链表 ln为原链表，hn为扩容后链表
                        for (Node&lt;K,V&gt; p = f; p != lastRun; p = p.next) {
                            int ph = p.hash; K pk = p.key; V pv = p.val;
                            if ((ph &amp; n) == 0) //头插法，p.next = ln 然后 ln = p ，组成ln链表
                                ln = new Node&lt;K,V&gt;(ph, pk, pv, ln);
                            else //头插法，p.next = hn 然后 hn = p ，组成hn链表
                                hn = new Node&lt;K,V&gt;(ph, pk, pv, hn);
                        }
                        //遍历完旧数组的链表后，重新生成了ln，hn 2条链表；
                        //ln链表插入到新数组的下标：i
                        setTabAt(nextTab, i, ln);
                        // hn插入到：i+n位置；
                        setTabAt(nextTab, i + n, hn);
                        setTabAt(tab, i, fwd);
                        advance = true;
                    }
                    else if (f instanceof TreeBin) {
                        TreeBin&lt;K,V&gt; t = (TreeBin&lt;K,V&gt;)f;
                        //lo：TreeNode链表表头：下标位置不变：i
                        //loTail:表尾，每次插入节点都在表尾插入
                        TreeNode&lt;K,V&gt; lo = null, loTail = null;
                        //hi：TreeNode链表表头：下标位置：i+n;
                        //hiTail :表尾，每次插入节点都在表尾插入
                        TreeNode&lt;K,V&gt; hi = null, hiTail = null;
                        int lc = 0, hc = 0;
                        for (Node&lt;K,V&gt; e = t.first; e != null; e = e.next) {
                            int h = e.hash;
                            TreeNode&lt;K,V&gt; p = new TreeNode&lt;K,V&gt;
                                (h, e.key, e.val, null, null);
                            if ((h &amp; n) == 0) {//h &amp; n = 0；扩容后下标不变；h &amp; n = n；扩容后下标位置改变（i + n）；
                                if ((p.prev = loTail) == null)
                                    lo = p;
                                else
                                    loTail.next = p;//lo链表插入表尾
                                loTail = p;//更新lo链表表尾
                                ++lc;//记录lo链表节点个数
                            }
                            else {
                                if ((p.prev = hiTail) == null)
                                    hi = p;
                                else
                                    hiTail.next = p;
                                hiTail = p;
                                ++hc;
                            }
                        }
                        //分别判断ln，hn节点个数是否满足生成红黑树的条件；
                        //不满足则将TreeNode链表转换成Node链表；
                        //满足则将TreeNode节点重新生成红黑树；
                        ln = (lc &lt;= UNTREEIFY_THRESHOLD) ? untreeify(lo) :
                            (hc != 0) ? new TreeBin&lt;K,V&gt;(lo) : t;
                        hn = (hc &lt;= UNTREEIFY_THRESHOLD) ? untreeify(hi) :
                            (lc != 0) ? new TreeBin&lt;K,V&gt;(hi) : t;
                        setTabAt(nextTab, i, ln);
                        setTabAt(nextTab, i + n, hn);
                        setTabAt(tab, i, fwd);
                        advance = true;
                    }
                }
            }
        }
    }
}
//Helps transfer if a resize is in progress.
final Node&lt;K,V&gt;[] helpTransfer(Node&lt;K,V&gt;[] tab, Node&lt;K,V&gt; f) {
    Node&lt;K,V&gt;[] nextTab; int sc;
    if (tab != null &amp;&amp; (f instanceof ForwardingNode) &amp;&amp;
        (nextTab = ((ForwardingNode&lt;K,V&gt;)f).nextTable) != null) {
        int rs = resizeStamp(tab.length) &lt;&lt; RESIZE_STAMP_SHIFT;
        while (nextTab == nextTable &amp;&amp; table == tab &amp;&amp;
                (sc = sizeCtl) &lt; 0) {
            if (sc == rs + MAX_RESIZERS || sc == rs + 1 ||
                transferIndex &lt;= 0)
                break;
            if (U.compareAndSwapInt(this, SIZECTL, sc, sc + 1)) {
                transfer(tab, nextTab);
                break;
            }
        }
        return nextTab;
    }
    return table;
}
//将treenode链表换成非treenode链表
static &lt;K,V&gt; Node&lt;K,V&gt; untreeify(Node&lt;K,V&gt; b) {
    //hd头节点，tl辅助指向p的指针 hd=p =&gt; tl=p =&gt; tl.next=p =&gt; tl=p
    Node&lt;K,V&gt; hd = null, tl = null;
    for (Node&lt;K,V&gt; q = b; q != null; q = q.next) {
        Node&lt;K,V&gt; p = new Node&lt;K,V&gt;(q.hash, q.key, q.val);
        if (tl == null)
            hd = p;
        else
            tl.next = p;
        tl = p;
    }
    return hd;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="get方法" tabindex="-1"><a class="header-anchor" href="#get方法"><span>get方法</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public V get(Object key) {
    Node&lt;K,V&gt;[] tab; Node&lt;K,V&gt; e, p; int n, eh; K ek;
    //根据key.hashCode()计算hash: 扰动运算后得到得到更散列的hash值
    int h = spread(key.hashCode());
    if ((tab = table) != null &amp;&amp; (n = tab.length) &gt; 0 &amp;&amp;
        (e = tabAt(tab, (n - 1) &amp; h)) != null) {//当前key寻址的桶位有值
        if ((eh = e.hash) == h) {//如果第一个元素就是要找的元素，则直接返回
            if ((ek = e.key) == key || (ek != null &amp;&amp; key.equals(ek)))
                return e.val;
        }
        hash小于0 分2种情况，是树或者正在扩容,需要借助find方法寻找元素，find的寻找方式依据Node的不同子类有不同的实现方式:
        // 情况一：eh=-1 是fwd结点 -&gt; 说明当前table正在扩容，且当前查询的这个桶位的数据已经被迁移走了，需要借助fwd结点的内部方法find去查询
        // 情况二：eh=-2 是TreeBin节点 -&gt; 需要使用TreeBin 提供的find方法查询。
        else if (eh &lt; 0)
            return (p = e.find(h, key)) != null ? p.val : null;
        //说明是当前桶位已经形成链表的这种情况: 遍历整个链表寻找元素    
        while ((e = e.next) != null) {
            if (e.hash == h &amp;&amp;
                ((ek = e.key) == key || (ek != null &amp;&amp; key.equals(ek))))
                return e.val;
        }
    }
    return null;
}
//TreeBin节点的find方法
final Node&lt;K,V&gt; find(int h, Object k) {
    if (k != null) {
        for (Node&lt;K,V&gt; e = first; e != null; ) {
            int s; K ek;
            if (((s = lockState) &amp; (WAITER|WRITER)) != 0) {
                if (e.hash == h &amp;&amp;
                    ((ek = e.key) == k || (ek != null &amp;&amp; k.equals(ek))))
                    return e;
                e = e.next;
            }
            else if (U.compareAndSetInt(this, LOCKSTATE, s,
                                            s + READER)) {
                TreeNode&lt;K,V&gt; r, p;
                try {
                    p = ((r = root) == null ? null :
                            r.findTreeNode(h, k, null));
                } finally {
                    Thread w;
                    if (U.getAndAddInt(this, LOCKSTATE, -READER) ==
                        (READER|WAITER) &amp;&amp; (w = waiter) != null)
                        LockSupport.unpark(w);
                }
                return p;
            }
        }
    }
    return null;
}
//ForwardingNode的find方法 
Node&lt;K,V&gt; find(int h, Object k) {
    // loop to avoid arbitrarily deep recursion on forwarding nodes
    outer: for (Node&lt;K,V&gt;[] tab = nextTable;;) {
        Node&lt;K,V&gt; e; int n;
        if (k == null || tab == null || (n = tab.length) == 0 ||
            (e = tabAt(tab, (n - 1) &amp; h)) == null)
            return null;
        for (;;) {
            int eh; K ek;
            if ((eh = e.hash) == h &amp;&amp;
                ((ek = e.key) == k || (ek != null &amp;&amp; k.equals(ek))))
                return e;
            if (eh &lt; 0) {
                if (e instanceof ForwardingNode) {
                    tab = ((ForwardingNode&lt;K,V&gt;)e).nextTable;
                    continue outer;
                }
                else
                    return e.find(h, k);
            }
            if ((e = e.next) == null)
                return null;
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),a=[d];function v(t,r){return i(),e("div",null,a)}const b=n(s,[["render",v],["__file","concurrentHashMap.html.vue"]]),m=JSON.parse('{"path":"/backend/java/concurrentHashMap.html","title":"ConcurrentHashMap","lang":"zh-CN","frontmatter":{"title":"ConcurrentHashMap","date":"2023-01-01T00:00:00.000Z","tags":"sourcecode","categories":"源码","description":"ConcurrentHashMap ConcurrentHashMap 产生原因： 并发编程中使用HashMap可能导致程序死循环。导致HashMap的Entry链表形成环形数据结构，一旦形成环形数据结构，Entry的next节点永远不为空，就会产生死循环获取Entry。 而使用线程安全的HashTable效率低。HashTable容器使用synchr...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/java/concurrentHashMap.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"ConcurrentHashMap"}],["meta",{"property":"og:description","content":"ConcurrentHashMap ConcurrentHashMap 产生原因： 并发编程中使用HashMap可能导致程序死循环。导致HashMap的Entry链表形成环形数据结构，一旦形成环形数据结构，Entry的next节点永远不为空，就会产生死循环获取Entry。 而使用线程安全的HashTable效率低。HashTable容器使用synchr..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/1e11ee1378bca91c1d8d8.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ConcurrentHashMap\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/1e11ee1378bca91c1d8d8.jpg\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"产生原因：","slug":"产生原因","link":"#产生原因","children":[]},{"level":2,"title":"实现高性能原理","slug":"实现高性能原理","link":"#实现高性能原理","children":[]},{"level":2,"title":"ConcurrentHashMap的结构","slug":"concurrenthashmap的结构","link":"#concurrenthashmap的结构","children":[]},{"level":2,"title":"ConcurrentHashMap的初始化","slug":"concurrenthashmap的初始化","link":"#concurrenthashmap的初始化","children":[]},{"level":2,"title":"ConcurrentHashMap的put方法","slug":"concurrenthashmap的put方法","link":"#concurrenthashmap的put方法","children":[]}],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":21.89,"words":6568},"filePathRelative":"backend/java/concurrentHashMap.md","localizedDate":"2023年1月1日","excerpt":"<p>ConcurrentHashMap</p>\\n<h1>ConcurrentHashMap</h1>\\n<h2>产生原因：</h2>\\n<ul>\\n<li>并发编程中使用HashMap可能导致程序死循环。导致HashMap的Entry链表形成环形数据结构，一旦形成环形数据结构，Entry的next节点永远不为空，就会产生死循环获取Entry。</li>\\n<li>而使用线程安全的HashTable效率低。HashTable容器使用synchronized来保证线程安全，竞争越激烈效率越低</li>\\n</ul>\\n<h2>实现高性能原理</h2>\\n<ul>\\n<li>ConcurrentHashMap使用分段锁来保证在多线程下的性能。一次锁住一个桶。将hash表分为16个桶，诸如 get,put,remove 等常用操作只锁当前需要用到的桶</li>\\n<li>ConcurrentHashMap使用了一种不同的迭代方式。当 iterator被创建后集合再发生改变就不再是抛出ConcurrentModificationException异常，而是在改变时new新的数据从而不影响原有的数据，iterator完成后再将头指针替换为新的数据 ，这样iterator线程可以使用原来老的数据，而写线程也可以并发的完成改变</li>\\n</ul>","autoDesc":true}');export{b as comp,m as data};
