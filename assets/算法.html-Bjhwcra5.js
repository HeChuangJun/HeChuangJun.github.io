import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as d,o as v,c as r,b as i,d as n,e as l,a as e}from"./app-Cw8r8IGg.js";const a={},u=e(`<p>数据结构和算法</p><h1 id="_1-概述" tabindex="-1"><a class="header-anchor" href="#_1-概述"><span>1. 概述</span></a></h1><ul><li>数据data结构(structure)是一门研究组织数据方式的学科，有了编程语言也就有了数据结构.学好数据结构可以编写更加有效率的代码</li><li>程序 = 数据结构 + 算法</li></ul><h2 id="_1-1-数据结构的分类" tabindex="-1"><a class="header-anchor" href="#_1-1-数据结构的分类"><span>1.1. 数据结构的分类</span></a></h2><ul><li>线性结构：特点是数据元素之间存在一对一的线性关系：常见的有：数组、队列、链表和栈.有两种不同的存储结构，即顺序存储结构(数组)和链式存储结构(链表) <ul><li>顺序存储的线性表称为顺序表，顺序表中的存储元素是连续的</li><li>链式存储的线性表称为链表，链表中的存储元素不一定是连续的，元素节点中存放数据元素以及相邻元素的地址信息</li></ul></li><li>非线性结构包括：二维数组，多维数组，广义表，树结构，图结构</li></ul><h2 id="_1-2-算法的时间复杂度" tabindex="-1"><a class="header-anchor" href="#_1-2-算法的时间复杂度"><span>1.2. 算法的时间复杂度</span></a></h2><ul><li>度量一个程序(算法)执行时间的两种方法 <ul><li>事后统计的方法 <ul><li>要想对设计的算法的运行性能进行评测，需要实际运行该程序；</li><li>所得时间的统计量依赖于计算机的硬件、软件等环境因素,要在同一台计算机的相同状态下运行，才能比较算法速度</li></ul></li><li>事前估算的方法：通过分析某个算法的时间复杂度来判断哪个算法更优.</li></ul></li><li>时间频度 <ul><li>一个算法花费的时间与算法中语句的执行次数成正比例，哪个算法中语句执行次数多，它花费时间就多。</li><li>一个算法中的语句执行次数称为语句频度或时间频度。记为T(n)。</li></ul></li><li>时间复杂度 <ul><li>一般情况下，算法中的基本操作语句的重复执行次数是问题规模n的某个函数，用T(n)表示，</li><li>若有某个辅助函数f(n)，使得当n趋近于无穷大时，<code>T(n) / f(n)</code> 的极限值为不等于零的常数，则称f(n)是T(n)的同数量级函数。</li><li>记作 <code>T(n)=Ｏ( f(n) )，称Ｏ( f(n) )</code>  为算法的渐进时间复杂度，简称时间复杂度。</li><li>T(n) 不同，但时间复杂度可能相同。 如：T(n)=n²+7n+6 与 T(n)=3n²+2n+2 它们的T(n) 不同，但时间复杂度相同，都为O(n²)</li><li>计算时间复杂度的方法： <ul><li>常数1代替运行时间中的所有加法常数  <code>T(n)=n²+7n+6 =&gt; T(n)=n²+7n+1</code></li><li>修改后的运行次数函数中，只保留最高阶项  <code>T(n)=n²+7n+1 =&gt; T(n) = n²</code></li><li>去除最高阶项的系数 <code>T(n) = 4n² =&gt; T(n) = n² =&gt; O(n²)</code></li></ul></li><li>常见的时间复杂度 <ul><li>常数阶O(1):无论代码执行了多少行，只要是没有循环等复杂结构，代码的时间复杂度就都是O(1)</li><li>对数阶O(log2n) <code>int i = 1 ; while(i&lt;n){ i = i*2 } </code></li><li>线性阶O(n) <code>for(int i=0;i&lt;n;i++){System.out.print(i)}</code></li><li>线性对数阶O(nlog2n) <code>for(int m=0;m&lt;n;m++){ int 1 = 1 ; while(i&lt;n){ i = i*2 } }</code></li><li>平方阶O(n^2) <code>for(int i=0;i&lt;n;i++){for(int j=0;j&lt;n;j++){System.out.print(j)}}</code></li><li>立方阶O(n^3)</li><li>k次方阶O(n^k)</li><li>指数阶O(2^n)</li><li>常见的算法时间复杂度由小到大依次为：<code>Ο(1)＜Ο(log2n)＜Ο(n)＜Ο(nlog2n)＜Ο(n2)＜Ο(n3)＜Ο(nk)＜Ο(2n)</code>,尽可能避免使用指数阶的算法</li></ul></li><li>平均时间复杂度：所有可能的输入实例均以等概率出现的情况下，该算法的运行时间。</li><li>最坏时间复杂度：最坏情况下的时间复杂度。一般讨论的时间复杂度均是最坏情况下的时间复杂度。保证算法运行时间不会比最坏情况更长</li></ul></li></ul><h2 id="_1-3-算法的空间复杂度" tabindex="-1"><a class="header-anchor" href="#_1-3-算法的空间复杂度"><span>1.3. 算法的空间复杂度</span></a></h2><ul><li>算法的空间复杂度(Space Complexity)定义为该算法所耗费的存储空间，它也是问题规模n的函数。是对一个算法在运行过程中临时占用存储空间大小的量度</li><li>有的算法需要占用的临时工作单元数与解决问题的规模n有关，它随着n的增大而增大，当n较大时，将占用较多的存储单元，例如快速排序和归并排序算法就属于这种情况</li><li>在做算法分析时，主要讨论的是时间复杂度。从用户使用体验上看，更看重的程序执行的速度。一些缓存产品(redis, memcache)和算法(基数排序)本质就是用空间换时间.</li></ul><h2 id="_1-4-算法框架" tabindex="-1"><a class="header-anchor" href="#_1-4-算法框架"><span>1.4. 算法框架</span></a></h2><h3 id="_1-4-1-数据结构的存储方式" tabindex="-1"><a class="header-anchor" href="#_1-4-1-数据结构的存储方式"><span>1.4.1. 数据结构的存储方式</span></a></h3><ul><li>数据结构的存储方式只有两种：数组（顺序存储:查找块，索引访问，增删快，需要扩容）和链表（链式存储：增删快，只需操作尾结点，查找慢，遍历） <ul><li>「队列(先进先出)」、「栈(先进先出)」这两种数据结构既可以使用链表也可以使用数组实现。用数组实现，就要处理扩容缩容的问题；用链表实现，没有这个问题，但需要更多的内存空间存储节点指针。</li><li>「图」的两种表示方法，邻接表就是链表，邻接矩阵就是二维数组。邻接矩阵判断连通性迅速，并可以进行矩阵运算解决一些问题，但是如果图比较稀疏的话很耗费空间。邻接表比较节省空间，但是很多操作的效率上肯定比不过邻接矩阵。</li><li>「散列表」就是通过散列函数把键映射到一个大数组里。而且对于解决散列冲突的方法，拉链法需要链表特性，操作简单，但需要额外的空间存储指针；线性探查法就需要数组特性，以便连续寻址，不需要指针的存储空间，但操作稍微复杂些。</li><li>「树」，用数组实现就是「堆」，因为「堆」是一个完全二叉树，用数组存储不需要节点指针，操作也比较简单；用链表实现就是很常见的那种「树」，因为不一定是完全二叉树，所以不适合用数组存储。为此，在这种链表「树」结构之上，又衍生出各种巧妙的设计，比如二叉搜索树、AVL 树、红黑树、区间树、B 树等等，以应对不同的问题</li></ul></li><li>数组由于是紧凑连续存储,可以随机访问，通过索引快速找到对应元素，而且相对节约存储空间。但正因为连续存储，内存空间必须一次性分配够，所以说数组如果要扩容，需要重新分配一块更大的空间，再把数据全部复制过去，时间复杂度 O(N)；而且你如果想在数组中间进行插入和删除，每次必须搬移后面的所有数据以保持连续，时间复杂度 O(N)。</li><li>链表因为元素不连续，而是靠指针指向下一个元素的位置，所以不存在数组的扩容问题；如果知道某一元素的前驱和后驱，操作指针即可删除该元素或者插入新元素，时间复杂度 O(1)。但是正因为存储空间不连续，你无法根据一个索引算出对应元素的地址，所以不能随机访问；而且由于每个元素必须存储指向前后元素位置的指针，会消耗相对更多的储存空间。</li></ul><h3 id="_1-4-2-数据结构的基本操作框架-遍历-访问-树-二叉树-前中后序遍历" tabindex="-1"><a class="header-anchor" href="#_1-4-2-数据结构的基本操作框架-遍历-访问-树-二叉树-前中后序遍历"><span>1.4.2. 数据结构的基本操作框架(遍历+访问=&gt;树=&gt;二叉树=&gt;前中后序遍历)</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>数组遍历框架，典型的线性迭代结构
void traverse(int[] arr) {
    for (int i = 0; i &lt; arr.length; i++) {
        // 迭代访问 arr[i]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>链表遍历框架，兼具迭代和递归结构
/* 基本的单链表节点 */
class ListNode {
    int val;
    ListNode next;
}

void traverse(ListNode head) {
    for (ListNode p = head; p != null; p = p.next) {
        // 迭代访问 p.val
    }
}

void traverse(ListNode head) {
    // 递归访问 head.val
    traverse(head.next);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>二叉树遍历框架，典型的非线性递归遍历结构
/* 基本的二叉树节点 */
class TreeNode {
    int val;
    TreeNode left, right;
}

void traverse(TreeNode root) {
    traverse(root.left);
    traverse(root.right);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>二叉树框架可以扩展为 N 叉树的遍历框架
/* 基本的 N 叉树节点 */
class TreeNode {
    int val;
    TreeNode[] children;
}

void traverse(TreeNode root) {
    for (TreeNode child : root.children)
        traverse(child);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>大部分算法技巧，本质上都是树的遍历问题
void traverse(TreeNode root) {
    // 前序遍历
    traverse(root.left)
    // 中序遍历
    traverse(root.right)
    // 后序遍历
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-稀疏数组sparsearray" tabindex="-1"><a class="header-anchor" href="#_2-稀疏数组sparsearray"><span>2. 稀疏数组sparsearray</span></a></h1><ul><li>稀疏数组：当保存一个数组中大部分元素为0或者同一个值的时，节省存储空间，如果写入磁盘则减少I/O，提升性能</li><li>问题:五子棋程序存盘退出和续上盘功能，二维数组的棋盘、地图等</li><li>思路: <ul><li>二维数组 -&gt; 稀疏数组 <ul><li>遍历二维数组得到有效数据的个数sum</li><li>根据sum 创建稀疏数组<code>sparseArr int[sum + 1][3]</code>(留个一维数组数组一共有几行几列，有多少个不同的值)</li><li>第1个一维数组记录数组的一维数组个数、二维数组的个数、有效数据个数sum</li><li>从第2个一维数组开始记录数组的有效数据<code>（int[?][1]和int[?][2]记录有效数据的位置int[?][3]记录有效数据的值）</code>直到所有数组记录完</li></ul></li><li>稀疏数组 转 二维数组思路 <ul><li>先根据读取稀疏数组的第一个一维数组数据建立二维数组</li><li>从第2个一维数组开始将给二维数组一一赋值</li></ul></li></ul></li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/fe862b3b8a9644e8f5035.png" alt="稀疏数组2.png" tabindex="0"><figcaption>稀疏数组2.png</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    public class SparseArray {
        public static void main(String[] args) {
            int[][] testarray = new int[5][6];
            testarray[2][1] = 3;
            testarray[0][3] = 10;
            testarray[4][5] = 4;
            System.out.println(&quot;原来数组~~&quot;);
            printArray(testarray);
            System.out.println(&quot;稀疏数组~~&quot;);
            printArray(getSpaseArray(testarray));
            System.out.println(&quot;原来数组~~&quot;);
            printArray(getOldArray(getSpaseArray(testarray)));
        }
        
        public static int[][] getSpaseArray(int[][] oldArray){
            //1.求出有效数据的个数
            int sum = 0;
            for(int i=0;i&lt;oldArray.length;i++){
                for(int j=0;j&lt;oldArray[i].length;j++){
                    if(oldArray[i][j]!=0){
                        sum++;
                    }
                }
            }
            //2.创建稀疏数组
            int[][] result= new int[sum+1][3];
            result[0][0] = oldArray.length;//每个赋值
            result[0][1] = oldArray[0].length;
            result[0][2] = sum;
            int index = 0;//用于记录是第几个非0数据,稀疏数组的&quot;第几行&quot;
            for(int i=0;i&lt;oldArray.length;i++){
                for(int j=0;j&lt;oldArray[i].length;j++){
                    if(oldArray[i][j]!=0){
                        index++;
                        result[index][0] = i;
                        result[index][1] = j;
                        result[index][2] = oldArray[i][j];
                    }
                }
            }
            return result;
        }
        
        public static int[][] getOldArray(int[][] spaseArray){
            int[][] result = new int[spaseArray[0][0]][spaseArray[0][1]];
            for(int i=1;i&lt;spaseArray.length;i++){//将后面几行读取完就行了
                result[spaseArray[i][0]][spaseArray[i][1]] = spaseArray[i][2];
            }
            return result;
        }
        
        public static void printArray(int[][] printarray){
            for(int i=0;i&lt;printarray.length;i++){
                for(int j=0;j&lt;printarray[i].length;j++){
                    System.out.printf(&quot;%d\\t&quot;,printarray[i][j]);
                }
                System.out.println();
            }
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-队列" tabindex="-1"><a class="header-anchor" href="#_3-队列"><span>3. 队列</span></a></h1><ul><li>队列是一个有序列表，可以用数组或是链表来实现。遵循先入先出的原则。即：先存入队列的数据，要先取出。后存入的要后取出</li><li>使用条件/应用实例:银行排队</li><li>单向队列(数组结构) <ul><li>指针front指向第一个元素前一个位置默认为-1</li><li>指针rear指向最后一个元素默认为-1</li><li>队列的最大容量为maxSize</li><li>队列满的条件为rear = maxSize - 1</li><li>队列null的条件为front == rear</li><li>给队列添加元素时,先判断满,先rear++然后arr[rear]赋值</li><li>出队列时，先判断null，先front++并返回arr[front]</li><li>队列头数据为arr[front+1];</li><li>存在的问题:数组不能复用,使用算法改成环形队列取模解决</li></ul></li><li>循环队列(数组结构) <ul><li>指针front指向队列的第一个元素,默认为0</li><li>指针rear指向队列的最后一个元素的后一个位置,默认为0</li><li>队列的最大数量为maxSize</li><li>队列满的条件<code>(rear+1)%maxSize==front</code></li><li>队列为null条件rear==front</li><li>有效数字的个数<code>size = (rear+maxSize-front)%maxSize</code>,推导过程 <ul><li>当<code>rear&gt;=front,size = rear - front = rear - front + 0 = (rear - front) % maxSize + maxSize % maxSize = (rear - front + maxSize ) % maxSize (注：rear - front &lt; maxSize)</code></li><li>当<code>rear&lt;front,size = (rear-0) + (maxSize - front) = rear - front + maxSize = (rear - front + maxSize ) % maxSize (注：rear - front &lt; maxSize)</code></li></ul></li><li>为了区分循环队列中队列为满时和队列为空时的情况，可以有至少2种方法 <ul><li>浪费一个空间，来区分队列为满时和队列为空时的情况，也就是当 <code>( rear + 1 ) % maxSize == front</code>的时候，表示队列已经满了，当front == tail的时候，表示队列为空。rear永远指向&quot;空元素&quot;.（本例子）</li><li>附加一个标志位tag，当head赶上tail，队列空，则令tag=0,当tail赶上head，队列满，则令tag=1</li></ul></li></ul></li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/1e004863e3a952a2c7ac8.png" alt="队列.png" tabindex="0"><figcaption>队列.png</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    //使用数组模拟单向队列 -编写一个ArrayQueue类
    class ArrayQueue {
        private int maxSize; // 表示数组的最大容量
        private int front = -1; // 指向队列头部，指向队列头的前一个位置
        private int rear = -1; // 指向队列尾，指向队列尾的数据
        private int[] arr; // 该数组用于存放数据, 模拟队列
        public ArrayQueue(int arrMaxSize) {
            maxSize = arrMaxSize;
            arr = new int[maxSize];
        }
        public boolean isFull() {return rear == maxSize - 1;}// 判断队列是否满
        public boolean isEmpty() {return rear == front;}// 判断队列是否为空
        public void addQueue(int n) {
            if (isFull()) System.out.println(&quot;队列满，不能加入数据~~&quot;);return;
            rear++; // 让rear 后移
            arr[rear] = n;
        }
        public int getQueue() {
            if (isEmpty()) System.out.println(&quot;队列空的，没有数据~~&quot;);return;
            front++; // front后移
            return arr[front];
        }
        public void showQueue() {
            if (isEmpty()) System.out.println(&quot;队列空的，没有数据~~&quot;);return;
            for (int i = 0; i &lt; arr.length; i++) {
                System.out.printf(&quot;arr[%d]=%d\\n&quot;, i, arr[i]);
            }
        }
        public int headQueue() {// 显示队列的头数据， 注意不是取出数据
            if (isEmpty()) throw new RuntimeException(&quot;队列空的，没有数据~~&quot;);
            return arr[front + 1];
        }
    } 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    class CircleArray {
        private int maxSize;// 表示数组的最大容量
        private int front = 0;//指向队列的第一个元素
        private int rear = 0;//指向队列的最后一个元素的后一个位置. 因为空出一个空间做为约定.
        private int[] arr; // 该数据用于存放数据, 模拟队列
        
        public CircleArray(int arrMaxSize) {
            maxSize = arrMaxSize;
            arr = new int[maxSize];
        }
        public boolean isFull() {return (rear  + 1) % maxSize == front;}
        public boolean isEmpty() {return rear == front;}
        public void addQueue(int n) {
            if (isFull()) System.out.println(&quot;队列满，不能加入数据~&quot;);return;
            arr[rear] = n;
            rear = (rear + 1) % maxSize; //将 rear 后移, 这里必须考虑取模
        }
        public int getQueue() {// 获取队列的数据, 出队列
            if (isEmpty()) throw new RuntimeException(&quot;队列空，不能取数据);
            int value = arr[front];
            front = (front + 1) % maxSize;
            return value;
        }
        public void showQueue() {
            if (isEmpty()) System.out.println(&quot;队列空的，没有数据~~&quot;);return;
            for (int i = front; i &lt; front + size() ; i++) {
                System.out.printf(&quot;arr[%d]=%d\\n&quot;, i % maxSize, arr[i % maxSize]);
            }
        }
        public int size() {
            return (rear + maxSize - front) % maxSize;   
        }
        public int headQueue() {// 显示队列的头数据， 注意不是取出数据
            if (isEmpty()) throw new RuntimeException(&quot;队列空的，没有数据~~&quot;);
            return arr[front];
        }
    }  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-链表" tabindex="-1"><a class="header-anchor" href="#_4-链表"><span>4. 链表</span></a></h1><ul><li>链表是有序的列表，是以节点的方式来存储,是链式存储，每个节点包含data域，next 域：指向下一个节点.</li><li>链表的各个节点不一定是连续存储.链表分带头节点的链表和没有头节点的链表</li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/954fffe0ef1d2c2cbd746.png" alt="链表.png" tabindex="0"><figcaption>链表.png</figcaption></figure><h2 id="_4-1-单链表" tabindex="-1"><a class="header-anchor" href="#_4-1-单链表"><span>4.1. 单链表</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    class SingleLinkedList {
        private HeroNode head = new HeroNode(0, &quot;&quot;, &quot;&quot;);//先初始化一个头节点, 头节点不要动, 不存放具体的数据
        public HeroNode getHead() {return head;}
        //不考虑编号顺序时添加节点到单向链表时，找到当前链表的最后节点，将这个节点的next指向新节点
        public void add(HeroNode heroNode) {
            HeroNode temp = head;
            while(true) {
                if(temp.next == null) break;
                temp = temp.next;
            }
            temp.next = heroNode;
        }
        //根据条件将元素插入到指定位置(如果有这元素，则添加失败，并给出提示)
        public void addByOrder(HeroNode heroNode) {
            HeroNode temp = head;
            boolean flag = false;
            while(true) {
                if(temp.next == null) break;
                if(temp.next.no &gt; heroNode.no) break;
                if (temp.next.no == heroNode.no) {flag = true;break;}
                temp = temp.next;
            }
            if(flag) {
                System.out.printf(&quot;准备插入的英雄的编号 %d 已经存在了, 不能加入\\n&quot;, heroNode.no);
            } else {
                heroNode.next = temp.next;
                temp.next = heroNode;
            }
        }
        //修改节点的信息, 根据no编号来修改，即no编号不能改.
        public void update(HeroNode newHeroNode) {
            HeroNode temp = head;
            boolean flag = false;
            while(true) {
                if (temp == null) break;
                if(temp.no == newHeroNode.no) {flag = true;break;}
                temp = temp.next;
            }
            if(flag) {
                temp.name = newHeroNode.name;
                temp.nickname = newHeroNode.nickname;
            } else {
                System.out.printf(&quot;没有找到 编号 %d 的节点，不能修改\\n&quot;, newHeroNode.no);
            }
        }
        //删除节点
        public void del(int no) {
            HeroNode temp = head;
            boolean flag = false; 
            while(true) {
                if(temp.next == null) break; 
                if(temp.next.no == no) {flag = true;break;}
                temp = temp.next;
            }
            if(flag) {
                temp.next = temp.next.next;
            }else {
                System.out.printf(&quot;要删除的 %d 节点不存在\\n&quot;, no);
            }
        }
        //显示链表[遍历]
        public void list() {
            if(head.next == null) return;
            HeroNode temp = head.next;
            while(true) {
                if(temp == null) break;
                temp = temp.next;
            }
        }
    }
    //定义HeroNode，每个HeroNode 对象就是一个节点
    class HeroNode {
        public int no;
        public String name;
        public String nickname;
        public HeroNode next; //指向下一个节点
        public HeroNode(int no, String name, String nickname) {
            this.no = no;
            this.name = name;
            this.nickname = nickname;
        }
        //toString
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    /**
	* 1.获取到单链表的节点的个数(如果是带头结点的链表，需求不统计头节点)
    * @param head 链表的头节点
    * @return 返回的就是有效节点的个数
    */
    public static int getLength(HeroNode head) {
        if(head.next == null) return 0;
        int length = 0;//定义一个辅助的变量, 这里我们没有统计头节点
        HeroNode cur = head.next;
        while(cur != null) {
            length++;
            cur = cur.next;
        }
        return length;
    }
	/**
	 * 2.查找单链表中的倒数第k个结点 【新浪面试】
	 *  先把链表从头到尾遍历，得到链表的总的长度size 从链表的第一个开始遍历 (size-index)个，就可以得到
	 * @param head head节点
	 * @param index 表示是倒数第index个节点
	 * @return
	 */
	public static HeroNode findLastIndexNode(HeroNode head, int index) {
		if(head.next == null) return null;
		int size = getLength(head);
		if(index &lt;=0 || index &gt; size) {
			return null; 
		}
		HeroNode cur = head.next;
		for(int i =0; i&lt; size - index; i++) {
			cur = cur.next;
		}
		return cur;
	}
	/**
	 * 将旧链表的数据取出并将其放到新链表的最前端
	 * 单链表反转 【腾讯面试】
	 * @param head
	 */
	public static void reversetList(HeroNode head) {
		if(head.next == null || head.next.next == null) return ;
		HeroNode cur = head.next;
		HeroNode next = null;// 指向当前节点[cur]的下一个节点，方便循环的时候指向当前节点
		HeroNode reverseHead = new HeroNode(0, &quot;&quot;, &quot;&quot;);
		//遍历原来的链表，每遍历一个节点，就将其取出，并放在新的链表reverseHead 的最前端
		while(cur != null) { 
			next = cur.next;//先暂时保存当前节点的下一个节点，因为后面需要使用
			//----**把遍历到的节点插入到反转头的下个节点中**-----
			cur.next = reverseHead.next;
			reverseHead.next = cur;
			//--------------------------------------------
			cur = next;
		}
		//将head.next 指向 reverseHead.next , 实现单链表的反转
		head.next = reverseHead.next;
	}
	/**
	 * 单链表逆序打印
	 * 可以利用栈这个数据结构，将各个节点压入到栈中，然后利用栈的先进后出的特点，就实现了逆序打印的效果
	 * @param head
	 */
	public static void reversePrint(HeroNode head) {
		if(head.next == null) return;
		Stack&lt;HeroNode&gt; stack = new Stack&lt;HeroNode&gt;();
		HeroNode cur = head.next;
		while(cur != null) {//将链表的所有节点压入栈
			stack.push(cur);
			cur = cur.next; //cur后移，这样就可以压入下一个节点
		}
		while (stack.size() &gt; 0) {//将栈中的节点进行打印,pop 出栈
			System.out.println(stack.pop()); //stack的特点是先进后出
		}
	}
	//5.合并两个列表，合并后依然有序
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-2-双向链表" tabindex="-1"><a class="header-anchor" href="#_4-2-双向链表"><span>4.2. 双向链表</span></a></h2><ul><li>单向链表的查找的方向只能是一个方向，而双向链表可以向前或者向后查找。</li><li>单向链表不能自我删除，需要靠辅助节点temp,temp是待删除节点的前一个节点 ，而双向链表，则可以自我删除，</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    class DoubleLinkedList {
        private HeroNode2 head = new HeroNode2(0, &quot;&quot;, &quot;&quot;);//初始化一个头节点, 头节点不要动, 不存放具体的数据
		public HeroNode2 getHead() {return head;}
        public void list() {
            if (head.next == null) return;
            HeroNode2 temp = head.next;// 因为头节点，不能动，因此我们需要一个辅助变量来遍历
            while (true) {
                if (temp == null) break;
                System.out.println(temp);
                temp = temp.next;
            }
        }
        // 添加一个节点到双向链表的最后.
        public void add(HeroNode2 heroNode) {
            HeroNode2 temp = head;// 因为head节点不能动，因此我们需要一个辅助遍历 temp
            while (true) {
                if (temp.next == null)  break;
                temp = temp.next;
            }
            temp.next = heroNode;
            heroNode.pre = temp;
        }
        // 修改一个节点的内容, 双向链表的节点内容修改和单向链表一样只是 节点类型改成 HeroNode2
        public void update(HeroNode2 newHeroNode) {
            if (head.next == null)return;
            HeroNode2 temp = head.next; // 定义一个辅助变量 找到需要修改的节点, 根据no编号
            boolean flag = false; 
            while (true) {
                if (temp == null) break; 
                if (temp.no == newHeroNode.no) {
                    flag = true;
                    break;
                }
                temp = temp.next;
            }
            if (flag) {
                temp.name = newHeroNode.name;
                temp.nickname = newHeroNode.nickname;
            } else {
                System.out.printf(&quot;没有找到 编号 %d 的节点，不能修改\\n&quot;, newHeroNode.no);
            }
        }
        // 从双向链表中删除一个节点，对于双向链表可以直接自我删除
        public void del(int no) {
            if (head.next == null) return;
            HeroNode2 temp = head.next; 
            boolean flag = false;
            while (true) {
                if (temp == null) break;
                if (temp.no == no) {
                    flag = true;
                    break;
                }
                temp = temp.next;
            }
            if (flag) {
                // temp.next = temp.next.next;[单向链表]// 可以删除
                temp.pre.next = temp.next;
                if (temp.next != null) { // 如果是最后一个节点，就不需要执行下面这句话，否则出现空指针
                    temp.next.pre = temp.pre;
                }
            } else {
                System.out.printf(&quot;要删除的 %d 节点不存在\\n&quot;, no);
            }
        }
    }
    
    class HeroNode2 {
        public int no;
        public String name;
        public String nickname;
        public HeroNode2 next; // 指向下一个节点, 默认为null
        public HeroNode2 pre; // 指向前一个节点, 默认为null
        public HeroNode2(int no, String name, String nickname) {
            this.no = no;
            this.name = name;
            this.nickname = nickname;
        }
        //toString
    }
    双向链表的第二种添加方式,按照编号顺序 [示意图] 按照单链表的顺序添加，稍作修改即可.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-3-约瑟夫-josephu-问题" tabindex="-1"><a class="header-anchor" href="#_4-3-约瑟夫-josephu-问题"><span>4.3. 约瑟夫(Josephu)问题</span></a></h2><ul><li>Josephu问题为：设编号为1，2，… n的n个人围坐一圈，约定编号为k（1&lt;=k&lt;=n）的人从1开始报数，数到m 的那个人出列，它的下一位又从1开始报数，数到m的那个人又出列，依次类推，直到所有人出列为止，由此产生一个出队编号的序列。使用单向环形链表解决</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class CircleSingleLinkedList {
	private Boy first = null;
	public void addBoy(int nums) {
		if (nums &lt; 1) return;// nums 做一个数据校验
		Boy curBoy = null; // 辅助指针，帮助构建环形链表
		for (int i = 1; i &lt;= nums; i++) {
			Boy boy = new Boy(i);
			if (i == 1) {
				first = boy;
				first.setNext(first); // 构成环
				curBoy = first; 
			} else {
				curBoy.setNext(boy);
				boy.setNext(first);
				curBoy = boy;
			}
		}
	}
	/**
	* @param startNo 表示从第K个小孩开始数数
	* @param countNum 表示数m下
	* @param nums 表示最初有多少小孩在圈中
	*/
	public void countBoy(int startNo, int countNum, int nums) {
		if (first == null || startNo &lt; 1 || startNo &gt; nums) return;
		Boy helper = first;// 创建要给辅助指针helper指向环形链表的最后这个节点,帮助完成小孩出圈
		while (true) {
			if (helper.getNext() == first)  break; // 说明helper指向最后小孩节点    
			helper = helper.getNext();
		}
		for(int j = 0; j &lt; startNo - 1; j++) {
			first = first.getNext();
			helper = helper.getNext();
		}
		while(true) {
			if(helper == first) break; //直到圈中只有一个节点
			for(int j = 0; j &lt; countNum - 1; j++) {//让 first 和 helper 指针同时 的移动 countNum - 1
				first = first.getNext();
				helper = helper.getNext();
			}
			System.out.printf(&quot;小孩%d出圈\\n&quot;, first.getNo()); //这时first指向的节点，就是要出圈的小孩节点
			first = first.getNext();//这时将first指向的小孩节点出圈
			helper.setNext(first); //闭环
		}
		System.out.printf(&quot;最后留在圈中的小孩编号%d \\n&quot;, first.getNo());
	}
}
class Boy {
	private int no;
	private Boy next;
	public Boy(int no) {this.no = no;}
	//set,get
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_5-栈-stack" tabindex="-1"><a class="header-anchor" href="#_5-栈-stack"><span>5. 栈(stack)</span></a></h1><ul><li>栈是一个先入后出(FILO-First In Last Out)的有序列表。</li><li>栈(stack)是限制线性表中元素的插入和删除只能在线性表的同一端进行的一种特殊线性表。允许插入和删除的一端，为变化的一端，称为栈顶(Top)，另一端为固定的一端，称为栈底(Bottom)。最先放入栈中元素在栈底，最后放入的元素在栈顶，而删除元素刚好相反，最后放入的元素最先删除，最先放入的元素最后删除</li><li>栈的应用场景 <ul><li>子程序的调用：在跳往子程序前，会先将下个指令的地址存到堆栈中，直到子程序执行完后再将地址取出，以回到原来的程序中</li><li>处理递归调用：和子程序的调用类似，只是除了储存下一个指令的地址外，也将参数、区域变量等数据存入堆栈中。</li><li>表达式的转换<code>[中缀表达式转后缀表达式]</code>与求值(实际解决)。</li><li>二叉树的遍历。</li><li>图形的深度优先(depth一first)搜索法</li></ul></li><li>问题:表达式2x7x1+5计算机底层怎么计算,计算机收到的是一个字符串</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	//数组实现栈
    class ArrayStack {
        private int maxSize; // 栈的大小
        private int[] stack; // 数组，数组模拟栈，数据就放在该数组
        private int top = -1;// top表示栈顶，初始化为-1
        public ArrayStack(int maxSize) {
            this.maxSize = maxSize;
            stack = new int[this.maxSize];
        }
        public boolean isFull() {return top == maxSize - 1;}
        public boolean isEmpty() {return top == -1;}
        public void push(int value) {
            if(isFull())System.out.println(&quot;栈满&quot;);return;
            top++;
            stack[top] = value;
        }
        public int pop() {
            if(isEmpty())throw new RuntimeException(&quot;栈空，没有数据~&quot;);
            int value = stack[top];
            top--;
            return value;
        }
        public int peek() {
            return stack[top];
        }
        public void list() {
            if(isEmpty()) return;
            for(int i = top; i &gt;= 0 ; i--) {//需要从栈顶开始显示数据
                System.out.printf(&quot;stack[%d]=%d\\n&quot;, i, stack[i]);
            }
        }
    }
	// 链表实现栈
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>前缀表达式</p></li><li><p>前缀表达式的计算机求值</p><ul><li>从右至左扫描表达式，遇到数字时压入堆栈，遇到运算符时，弹出栈顶的两个数，用运算符对它们做相应的计算（栈顶元素和次顶元素），并将结果入栈；重复上述过程直到表达式最左端，最后运算得出的值即为表达式的结果</li><li>例如: <code>(3+4)×5-6</code> 对应的前缀表达式就是 <code>- × + 3 4 5 6 </code>, 针对前缀表达式求值步骤如下: <ul><li>从右至左扫描，将6、5、4、3压入堆栈</li><li>遇到+运算符，因此弹出3和4（3为栈顶元素，4为次顶元素），计算出3+4的值，得7，再将7入栈</li><li>接下来是×运算符，因此弹出7和5，计算出7×5=35，将35入栈</li><li>最后是-运算符，计算出35-6的值，即29，由此得出最终结果</li></ul></li></ul></li><li><p>中缀表达式(波兰表达式)</p></li><li><p>中缀表达式如<code>(3+4)×5-6</code>，对计算机来说却不好操作，因此，往往会将中缀表达式转成其它表达式来操作(一般转成后缀表达式.)</p></li><li><p>使用栈完成(中缀)表达式的计算思路</p><ul><li>通过一个index值（索引），来遍历我们的表达式</li><li>如果我们发现是一个数字, 就直接入数栈</li><li>如果发现扫描到是一个符号, 就分如下情况 <ul><li>如果发现当前的符号栈为空，就直接入栈</li><li>如果符号栈有操作符，就进行比较, <ul><li>如果当前的操作符的优先级小于或者等于栈中的操作符，就需要从数栈中pop出两个数,在从符号栈中pop出一个符号，进行运算，将得到结果入数栈，然后将当前的操作符入符号栈，</li><li>如果当前的操作符的优先级大于栈中的操作符， 就直接入符号栈.</li></ul></li></ul></li><li>当表达式扫描完毕，就顺序的从 数栈和符号栈中pop出相应的数和符号，并运行.</li><li>最后在数栈只有一个数字，就是表达式的结果</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>在上个例子中添加三个方法，并改名为ArrayStack2类
返回运算符的优先级 数字越大，则优先级就越高
public int priority(int oper) {
    if(oper == &#39;*&#39; || oper == &#39;/&#39;){
        return 1;
    } else if (oper == &#39;+&#39; || oper == &#39;-&#39;) {
        return 0;
    } else {
        return -1; // 假定目前的表达式只有 +, - , * , /
    }
}
//判断是不是一个运算符
public boolean isOper(char val) {
    return val == &#39;+&#39; || val == &#39;-&#39; || val == &#39;*&#39; || val == &#39;/&#39;;
}
//计算方法
public int cal(int num1, int num2, int oper) {
    int res = 0; // res 用于存放计算的结果
    switch (oper) {
    case &#39;+&#39;:
        res = num1 + num2;
        break;
    case &#39;-&#39;:
        res = num2 - num1;// 注意顺序
        break;
    case &#39;*&#39;:
        res = num1 * num2;
        break;
    case &#39;/&#39;:
        res = num2 / num1;
        break;
    default:
        break;
    }
    return res;
}
计算器实现
public class Calculator {

    public static void main(String[] args) {
        String expression = &quot;7*2*2-5+1-5+3-4&quot;; // 15//如何处理多位数的问题？
        ArrayStack2 numStack = new ArrayStack2(10);//创建两个栈，数栈，一个符号栈
        ArrayStack2 operStack = new ArrayStack2(10);
        int index = 0;//用于扫描//定义需要的相关变量
        int num1 = 0; 
        int num2 = 0;
        int oper = 0;
        int res = 0;
        char ch = &#39; &#39;; //将每次扫描得到char保存到ch
        String keepNum = &quot;&quot;; //用于拼接 多位数
        while(true) {//开始while循环的扫描expression
            ch = expression.substring(index, index+1).charAt(0);//依次得到expression 的每一个字符
            //判断ch是什么，然后做相应的处理
            if(operStack.isOper(ch)) {//如果是运算符
                if(!operStack.isEmpty()) {//判断当前的符号栈是否为空
                    //如果符号栈有操作符，就进行比较,如果当前的操作符的优先级小于或者等于栈中的操作符,就需要从数栈中pop出两个数,
                    //在从符号栈中pop出一个符号，进行运算，将得到结果，入数栈，然后将当前的操作符入符号栈
                    if(operStack.priority(ch) &lt;= operStack.priority(operStack.peek())) {
                        num1 = numStack.pop();
                        num2 = numStack.pop();
                        oper = operStack.pop();
                        res = numStack.cal(num1, num2, oper);
                        numStack.push(res);//把运算的结果如数栈
                        operStack.push(ch);//然后将当前的操作符入符号栈
                    } else {//如果当前的操作符的优先级大于栈中的操作符， 就直接入符号栈.
                        operStack.push(ch);
                    }
                }else {
                    operStack.push(ch); // 1 + 3//如果为空直接入符号栈..
                }
            } else { //如果是数，则直接入数栈
                //numStack.push(ch - 48); //? &quot;1+3&quot; &#39;1&#39; =&gt; 1
                //1. 当处理多位数时，不能发现是一个数就立即入栈，因为他可能是多位数
                //2. 在处理数，需要向expression的表达式的index 后再看一位,如果是数就进行扫描，如果是符号才入栈
                //3. 因此我们需要定义一个变量 字符串，用于拼接
                keepNum += ch;//处理多位数
                //如果ch已经是expression的最后一位，就直接入栈
                if (index == expression.length() - 1) {
                    numStack.push(Integer.parseInt(keepNum));
                }else{
                    //判断下一个字符是不是数字，如果是数字，就继续扫描，如果是运算符，则入栈
                    //注意是看后一位，不是index++
                    if (operStack.isOper(expression.substring(index+1,index+2).charAt(0))) {
                        numStack.push(Integer.parseInt(keepNum));//如果后一位是运算符，则入栈 keepNum = &quot;1&quot; 或者 &quot;123&quot;
                        keepNum = &quot;&quot;; //重要的!!!!!!, keepNum清空
                    }
                }
            }
            index++;//让index + 1, 并判断是否扫描到expression最后.
            if (index &gt;= expression.length()) break;
        }
        while(true) {//当表达式扫描完毕，就顺序的从 数栈和符号栈中pop出相应的数和符号，并运行.
            //如果符号栈为空，则计算到最后的结果, 数栈中只有一个数字【结果】
            if(operStack.isEmpty()break;
            num1 = numStack.pop();
            num2 = numStack.pop();
            oper = operStack.pop();
            res = numStack.cal(num1, num2, oper);
            numStack.push(res);//入栈
        }
        int res2 = numStack.pop();//将数栈的最后数，pop出，就是结果
        System.out.printf(&quot;表达式 %s = %d&quot;, expression, res2);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>后缀表达式(逆波兰表达式)</li><li>与前缀表达式相似，只是运算符位于操作数之后</li><li>后缀表达式计算: <ul><li>举例说明： (3+4)×5-6 对应的后缀表达式就是 3 4 + 5 × 6 –</li><li>从左至右扫描表达式，遇到数字时，将数字压入堆栈，遇到运算符时，弹出栈顶的两个数，用运算符对它们做相应的计算（次顶元素 和 栈顶元素），并将结果入栈；重复上述过程直到表达式最右端，最后运算得出的值即为表达式的结果</li><li>例如: (3+4)×5-6 对应的后缀表达式就是 3 4 + 5 × 6 - , 针对后缀表达式求值步骤如下: <ul><li>从左至右扫描，将3和4压入堆栈；遇到+运算符，弹出4和3（4为栈顶元素，3为次顶元素），计算出3+4的值，得7，再将7入栈；将5入栈；</li><li>接下来是×运算符，因此弹出5和7，计算出7×5=35，将35入栈；将6入栈；最后是-运算符，计算出35-6的值，即29，由此得出最终结果</li></ul></li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    逆波兰表达式计算实现
    public class PolandNotation {
        public static void main(String[] args) {
            //(30+4)×5-6  =&gt; 30 4 + 5 × 6 - =&gt; 164 先定义给逆波兰表达式
            //为了方便，逆波兰表达式 的数字和符号使用空格隔开
            //String suffixExpression = &quot;30 4 + 5 * 6 -&quot;;
            //1. 先将 &quot;30 4 + 5 × 6 - &quot; =&gt; 放到ArrayList中,上面是扫描字符串，改成ArrayList方便一点
            //2. 将 ArrayList 传递给一个方法，遍历 ArrayList 配合栈 完成计算
            List&lt;String&gt; list = getListString(suffixExpression);
            System.out.println(&quot;rpnList=&quot; + list);
            int res = calculate(list);
            System.out.println(&quot;计算的结果是=&quot; + res);
        }
        //将一个逆波兰表达式， 依次将数据和运算符 放入到 ArrayList中
        public static List&lt;String&gt; getListString(String suffixExpression) {
            //将 suffixExpression 分割
            String[] split = suffixExpression.split(&quot; &quot;);
            List&lt;String&gt; list = new ArrayList&lt;String&gt;();
            for(String ele: split) {
                list.add(ele);
            }
            return list;
        }
        //完成对逆波兰表达式的运算
        public static int calculate(List&lt;String&gt; ls) {
            Stack&lt;String&gt; stack = new Stack&lt;String&gt;();// 创建给栈, 只需要一个栈即可
            for (String item : ls) {// 遍历 ls
                if (item.matches(&quot;\\\\d+&quot;)) { // 使用正则表达式来取出数 匹配的是多位数
                    stack.push(item);
                } else {
                    int num2 = Integer.parseInt(stack.pop());// pop出两个数，并运算， 再入栈
                    int num1 = Integer.parseInt(stack.pop());
                    int res = 0;
                    if (item.equals(&quot;+&quot;)) {
                        res = num1 + num2;
                    } else if (item.equals(&quot;-&quot;)) {
                        res = num1 - num2;
                    } else if (item.equals(&quot;*&quot;)) {
                        res = num1 * num2;
                    } else if (item.equals(&quot;/&quot;)) {
                        res = num1 / num2;
                    } else {
                        throw new RuntimeException(&quot;运算符有误&quot;);
                    }
                    stack.push(&quot;&quot; + res); //把res 入栈
                }
            }
            return Integer.parseInt(stack.pop());//最后留在stack中的数据是运算结果
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/18964256b0cd2651705eb.png" alt="中缀表达式.png" tabindex="0"><figcaption>中缀表达式.png</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>- 中缀表达式转成后缀表达式
    - 1) 初始化两个栈：运算符栈s1和储存中间结果的栈s2；
    - 2) 从左至右扫描中缀表达式；
    - 3) 遇到操作数时，将其压s2；
    - 4) 遇到运算符时，比较其与s1栈顶运算符的优先级：
        - 1.如果s1为空，或栈顶运算符为左括号“(”，则直接将此运算符入栈；
        - 2.否则，若优先级比栈顶运算符的高，也将运算符压入s1；
        - 3.否则，将s1栈顶的运算符弹出并压入到s2中，再次转到(4.1)与s1中新的栈顶运算符相比较；
    - 5) 遇到括号时：
        - (1) 如果是左括号“(”，则直接压入s1
        - (2) 如果是右括号“)”，则依次弹出s1栈顶的运算符，并压入s2，直到遇到左括号为止，此时将这一对括号丢弃
    - 6) 重复步骤2至5，直到表达式的最右边
    - 7) 将s1中剩余的运算符依次弹出并压入s2
    - 8) 依次弹出s2中的元素并输出，结果的逆序即为中缀表达式对应的后缀表达式

public class PolandNotation {
    public static void main(String[] args) {
        //完成将一个中缀表达式转成后缀表达式的功能
        //1. 1+((2+3)×4)-5 =&gt; 转成  1 2 3 + 4 × + 5 –
        //2. 因为直接对str 进行操作，不方便，因此 先将  &quot;1+((2+3)×4)-5&quot; =》 中缀的表达式对应的List
        //   即 &quot;1+((2+3)×4)-5&quot; =&gt; ArrayList [1,+,(,(,2,+,3,),*,4,),-,5]
        //3. 将得到的中缀表达式对应的List =&gt; 后缀表达式对应的List
        //   即 ArrayList [1,+,(,(,2,+,3,),*,4,),-,5]  =》 ArrayList [1,2,3,+,4,*,+,5,–]
        
        String expression = &quot;1+((2+3)*4)-5&quot;;//注意表达式 
        List&lt;String&gt; infixExpressionList = toInfixExpressionList(expression);
        System.out.println(&quot;中缀表达式对应的List=&quot; + infixExpressionList); // ArrayList [1,+,(,(,2,+,3,),*,4,),-,5]
        List&lt;String&gt; suffixExpreesionList = parseSuffixExpreesionList(infixExpressionList);
        System.out.println(&quot;后缀表达式对应的List&quot; + suffixExpreesionList); //ArrayList [1,2,3,+,4,*,+,5,–] 
        System.out.printf(&quot;expression=%d&quot;, calculate(suffixExpreesionList)); // ?//计算取上面那个
    }

    //即 ArrayList [1,+,(,(,2,+,3,),*,4,),-,5]  =》 ArrayList [1,2,3,+,4,*,+,5,–]
    //方法：根据中缀表达式对应的List =&gt; 后缀表达式对应的List
    public static List&lt;String&gt; parseSuffixExpreesionList(List&lt;String&gt; ls) {
        //定义两个栈
        Stack&lt;String&gt; s1 = new Stack&lt;String&gt;(); // 符号栈
        //因为s2 这个栈，在整个转换过程中，没有pop操作，而且后面我们还需要逆序输出
        //因此比较麻烦，这里我们就不用 Stack&lt;String&gt; 直接使用 List&lt;String&gt; s2
        //Stack&lt;String&gt; s2 = new Stack&lt;String&gt;(); // 储存中间结果的栈s2
        List&lt;String&gt; s2 = new ArrayList&lt;String&gt;(); // 储存中间结果的Lists2
        
        for(String item: ls) {
            if(item.matches(&quot;\\\\d+&quot;)) {//如果是一个数，加入s2
                s2.add(item);
            } else if (item.equals(&quot;(&quot;)) {
                s1.push(item);
            } else if (item.equals(&quot;)&quot;)) {
                while(!s1.peek().equals(&quot;(&quot;)) {//如果是右括号“)”，则依次弹出s1栈顶的运算符，并压入s2，直到遇到左括号为止，此时将这一对括号丢弃
                    s2.add(s1.pop());
                }
                s1.pop();//!!! 将 ( 弹出 s1栈， 消除小括号
            } else {
                //当item的优先级小于等于s1栈顶运算符, 将s1栈顶的运算符弹出并加入到s2中，再次转到(4.1)与s1中新的栈顶运算符相比较
                while(s1.size() != 0 &amp;&amp; Operation.getValue(s1.peek()) &gt;= Operation.getValue(item) ) {
                    s2.add(s1.pop());
                }
                s1.push(item);//还需要将item压入栈
            }
        }
        while(s1.size() != 0) {//将s1中剩余的运算符依次弹出并加入s2
            s2.add(s1.pop());
        }
        return s2; //注意因为是存放到List, 因此按顺序输出就是对应的后缀表达式对应的List
    }
    
    //方法：将中缀表达式转成对应的List s=&quot;1+((2+3)×4)-5&quot;;
    public static List&lt;String&gt; toInfixExpressionList(String s) {
        //定义一个List,存放中缀表达式 对应的内容
        List&lt;String&gt; ls = new ArrayList&lt;String&gt;();
        int i = 0; //这时是一个指针，用于遍历 中缀表达式字符串
        String str; // 对多位数的拼接
        char c; // 每遍历到一个字符，就放入到c
        do {
            if((c=s.charAt(i)) &lt; 48 ||  (c=s.charAt(i)) &gt; 57) {//如果c是一个非数字，我需要加入到ls
                ls.add(&quot;&quot; + c);
                i++; //i需要后移
            } else { //如果是一个数，需要考虑多位数
                str = &quot;&quot;; //先将str 置成&quot;&quot; &#39;0&#39;[48]-&gt;&#39;9&#39;[57]
                while(i &lt; s.length() &amp;&amp; (c=s.charAt(i)) &gt;= 48 &amp;&amp; (c=s.charAt(i)) &lt;= 57) {
                    str += c;//拼接
                    i++;
                }
                ls.add(str);
            }
        }while(i &lt; s.length());
        return ls;//返回
    }

}
//编写一个类 Operation 可以返回一个运算符 对应的优先级
class Operation {
    private static int ADD = 1;
    private static int SUB = 1;
    private static int MUL = 2;
    private static int DIV = 2;
    
    //写一个方法，返回对应的优先级数字
    public static int getValue(String operation) {
        int result = 0;
        switch (operation) {
        case &quot;+&quot;:
            result = ADD;
            break;
        case &quot;-&quot;:
            result = SUB;
            break;
        case &quot;*&quot;:
            result = MUL;
            break;
        case &quot;/&quot;:
            result = DIV;
            break;
        default:
            System.out.println(&quot;不存在该运算符&quot; + operation);
            break;
        }
        return result;
    }
    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>逆波兰表达式完整版</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    支持 + - * / ( ) 
    多位数，支持小数,
    兼容处理, 过滤任何空白字符，包括空格、制表符、换页符
    public class ReversePolishMultiCalc {

        static final String SYMBOL = &quot;\\\\+|-|\\\\*|/|\\\\(|\\\\)&quot;;//匹配 + - * / ( ) 运算符

        static final String LEFT = &quot;(&quot;,RIGHT = &quot;)&quot;,ADD = &quot;+&quot;,MINUS= &quot;-&quot;,TIMES = &quot;*&quot;,DIVISION = &quot;/&quot;;
        
        static final int LEVEL_01 = 1,LEVEL_02 = 2,LEVEL_HIGH = Integer.MAX_VALUE;//1+-,2*/,3()

        static Stack&lt;String&gt; stack = new Stack&lt;&gt;();

        static List&lt;String&gt; data = Collections.synchronizedList(new ArrayList&lt;String&gt;());


        //去除所有空白符
        public static String replaceAllBlank(String s ){
            return s.replaceAll(&quot;\\\\s+&quot;,&quot;&quot;);// \\\\s+ 匹配任何空白字符，包括空格、制表符、换页符等等, 等价于[ \\f\\n\\r\\t\\v]
        }

        //判断是不是数字 int double long float
        public static boolean isNumber(String s){
            Pattern pattern = Pattern.compile(&quot;^[-\\\\+]?[.\\\\d]*$&quot;);
            return pattern.matcher(s).matches();
        }

        //判断是不是运算符
        public static boolean isSymbol(String s){
            return s.matches(SYMBOL);
        }

        //匹配运算等级
        public static int calcLevel(String s){
            if(&quot;+&quot;.equals(s) || &quot;-&quot;.equals(s)){
                return LEVEL_01;
            } else if(&quot;*&quot;.equals(s) || &quot;/&quot;.equals(s)){
                return LEVEL_02;
            }
            return LEVEL_HIGH;
        }

        //匹配
        public static List&lt;String&gt; doMatch (String s) throws Exception{
            if(s == null || &quot;&quot;.equals(s.trim())) throw new RuntimeException(&quot;data is empty&quot;);
            if(!isNumber(s.charAt(0)+&quot;&quot;)) throw new RuntimeException(&quot;data illeagle,start not with a number&quot;);
            s = replaceAllBlank(s);//去掉所有空白

            String each;
            int start = 0;

            for (int i = 0; i &lt; s.length(); i++) {
                if(isSymbol(s.charAt(i)+&quot;&quot;)){
                    each = s.charAt(i)+&quot;&quot;;
                    //栈为空，(操作符，或者 操作符优先级大于栈顶优先级 &amp;&amp; 操作符优先级不是&quot;(&quot;和&quot;)&quot;的优先级 （ &quot;)&quot; 不能直接入栈）
                    if(stack.isEmpty() || LEFT.equals(each)
                            || ((calcLevel(each) &gt; calcLevel(stack.peek())) &amp;&amp; calcLevel(each) &lt; LEVEL_HIGH)){
                        stack.push(each);
                    }else if( !stack.isEmpty() &amp;&amp; calcLevel(each) &lt;= calcLevel(stack.peek())){
                        //栈非空，操作符优先级小于等于栈顶优先级时出栈入列，直到栈为空，或者遇到了(，最后操作符入栈
                        while (!stack.isEmpty() &amp;&amp; calcLevel(each) &lt;= calcLevel(stack.peek()) ){
                            if(calcLevel(stack.peek()) == LEVEL_HIGH){
                                break;
                            }
                            data.add(stack.pop());
                        }
                        stack.push(each);
                    }else if(RIGHT.equals(each)){
                        // ) 操作符，依次出栈入列直到空栈或者遇到了第一个)操作符，此时)出栈
                        while (!stack.isEmpty() &amp;&amp; LEVEL_HIGH &gt;= calcLevel(stack.peek())){
                            if(LEVEL_HIGH == calcLevel(stack.peek())){
                                stack.pop();
                                break;
                            }
                            data.add(stack.pop());//去掉&quot;(&quot;
                        }
                    }
                    start = i ;    //前一个运算符的位置
                }else if( i == s.length()-1 || isSymbol(s.charAt(i+1)+&quot;&quot;) ){
                    each = start == 0 ? s.substring(start,i+1) : s.substring(start+1,i+1);
                    if(isNumber(each)) {
                        data.add(each);
                        continue;
                    }
                    throw new RuntimeException(&quot;data not match number&quot;);
                }
            }
            //如果栈里还有元素，此时元素需要依次出栈入列，可以想象栈里剩下栈顶为/，栈底为+，应该依次出栈入列，可以直接翻转整个stack 添加到队列
            Collections.reverse(stack);
            data.addAll(new ArrayList&lt;&gt;(stack));
            return data;
        }

        //算出结果
        public static Double doCalc(List&lt;String&gt; list){
            Double d = 0d;
            if(list == null || list.isEmpty())return null;
            if (list.size() == 1) return Double.valueOf(list.get(0));//只剩一个数
            
            ArrayList&lt;String&gt; list1 = new ArrayList&lt;&gt;();
            for (int i = 0; i &lt; list.size(); i++) {
                list1.add(list.get(i));
                if(isSymbol(list.get(i))){
                    Double d1 = doTheMath(list.get(i - 2), list.get(i - 1), list.get(i));
                    list1.remove(i);
                    list1.remove(i-1);
                    list1.set(i-2,d1+&quot;&quot;);
                    list1.addAll(list.subList(i+1,list.size()));
                    break;
                }
            }
            doCalc(list1);
            return d;
        }

        //运算
        public static Double doTheMath(String s1,String s2,String symbol){
            Double result ;
            switch (symbol){
                case ADD : result = Double.valueOf(s1) + Double.valueOf(s2); break;
                case MINUS : result = Double.valueOf(s1) - Double.valueOf(s2); break;
                case TIMES : result = Double.valueOf(s1) * Double.valueOf(s2); break;
                case DIVISION : result = Double.valueOf(s1) / Double.valueOf(s2); break;
                default : result = null;
            }
            return result;
        }

        public static void main(String[] args) {
            //String math = &quot;9+(3-1)*3+10/2&quot;;
            String math = &quot;12.8 + (2 - 3.55)*4+10/5.0&quot;;
            try {
                doCalc(doMatch(math));
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_6-递归-recursion" tabindex="-1"><a class="header-anchor" href="#_6-递归-recursion"><span>6. 递归(Recursion)</span></a></h1><ul><li>递归就是方法自己调用自己,每次调用时传入不同的变量.递归有助于编程者解决复杂的问题,同时可以让代码变得简洁。</li><li>递归使用场景 <ul><li>各种数学问题如: 8皇后问题 , 汉诺塔, 阶乘问题, 迷宫问题(回溯), 球和篮子的问题(google编程大赛),打印问题，</li><li>各种算法中也会使用到递归，比如快排，归并排序，二分查找，分治算法等.</li></ul></li><li>递归需要遵守的重要规则 <ul><li>执行一个方法时，就创建一个新的受保护的独立空间(栈空间)</li><li>方法的局部变量是独立的，不会相互影响, 比如n变量</li><li>如果方法中使用的是引用类型变量(比如数组)，就会共享该引用类型的数据.</li><li>递归必须向退出递归的条件逼近，否则就是无限递归,出现StackOverflowError</li><li>当一个方法执行完毕，或者遇到return，就会返回，遵守谁调用，就将结果返回给谁，同时当方法执行完毕或者返回时，该方法也就执行完毕。</li></ul></li></ul><h2 id="_6-1-迷宫问题" tabindex="-1"><a class="header-anchor" href="#_6-1-迷宫问题"><span>6.1. 迷宫问题</span></a></h2><ul><li>小球得到的路径，和设置的找路策略有关即：找路的上下左右的顺序相关,可以先下右上左，或者上右下左</li><li>求最短路径?</li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/84bc3b81a2ae107fe0891.png" alt="迷宫.png" tabindex="0"><figcaption>迷宫.png</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public static void main(String[] args) {
	int[][] map = new int[8][7];// 先创建一个二维数组，模拟迷宫
	for (int i = 0; i &lt; 7; i++) {// 使用1 表示墙,上下全部置为1
		map[0][i] = 1;
		map[7][i] = 1;
	}
	for (int i = 0; i &lt; 8; i++) {// 左右全部置为1
		map[i][0] = 1;
		map[i][6] = 1;
	}
	map[3][1] = 1;//设置挡板, 1 表示
	map[3][2] = 1;
	setWay(map, 1, 1);//使用递归回溯给小球找路
	System.out.println(&quot;小球走过，并标识过的 地图的情况&quot;);
	for (int i = 0; i &lt; 8; i++) {
		for (int j = 0; j &lt; 7; j++) {
			System.out.print(map[i][j] + &quot; &quot;);
		}
		System.out.println();
	}
}
/**
* @param map 表示地图
* @param i 表示从地图的哪个位置开始出发
* @param j 表示从地图的哪个位置开始出发
* @return 如果找到通路，就返回true, 否则返回false
*/
public static boolean setWay(int[][] map, int i, int j) {
	//当map[i][j] 为 0 表示该点没有走过当为1表示墙2表示通路可以走 ；3表示该点已经走过，但是走不通
	if(map[6][5] == 2) { // 通路已经找到ok
		return true;
	} else {
		if(map[i][j] == 0) { //如果当前这个点还没有走过
			//按照自定义策略 下-&gt;右-&gt;上-&gt;左  走
			map[i][j] = 2; // 假定该点是可以走通.
			if(setWay(map, i+1, j)) {//向下走
				return true;
			} else if (setWay(map, i, j+1)) { //向右走
				return true;
			} else if (setWay(map, i-1, j)) { //向上
				return true;
			} else if (setWay(map, i, j-1)){ // 向左走
				return true;
			} else {
				map[i][j] = 3;//说明该点是走不通，是死路
				return false;
			}
		} else { // 如果map[i][j] != 0 , 可能是 1， 2， 3
			return false;
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-2-八皇后问题-回溯算法" tabindex="-1"><a class="header-anchor" href="#_6-2-八皇后问题-回溯算法"><span>6.2. 八皇后问题:（回溯算法）</span></a></h2><ul><li>在8×8格的国际象棋上摆放八个皇后，使其不能互相攻击，即任意两个皇后都不能处于同一行、同一列或同一斜线上，问有多少种摆法（92）如<code>{0 , 4, 7, 5, 2, 6, 1, 3} </code></li><li>思路 <ul><li>1 第一个皇后先放第一行第一列</li><li>2 第二个皇后放在第二行第一列、然后判断是否冲突， 如果冲突，继续放在第二列、第三列、依次把所有列都放完，找到一个合适</li><li>3 继续第三个皇后，还是第一列、第二列……直到第8个皇后也能放在一个不冲突的位置，算是找到了一个正确解</li><li>4 当得到一个正确解时，在栈回退到上一个栈时，就会开始回溯，即将第一个皇后，放到第一列的所有正确解，全部得到.</li><li>5 然后回头继续第一个皇后放第二列，后面继续循环执行 1,2,3,4的步骤</li></ul></li><li>用一个一维数组存放结果，因为任意两个皇后是不可能存在同一行的情况。只需记录皇后在棋盘中的列坐标即可。一维数组的索引表示皇后在棋盘中的横坐标，数组所对应的值表示皇后在棋盘中的列坐标。</li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/15f4bb4bec7ff506159c0.png" alt="八皇后.png" tabindex="0"><figcaption>八皇后.png</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class Queue8 {
	int max = 8;
	int[] array = new int[max];
	static int count = 0;
	static int judgeCount = 0;
	public static void main(String[] args) {
		Queue8 queue8 = new Queue8();
		queue8.check(0);
		System.out.printf(&quot;一共有%d解法&quot;, count);
		System.out.printf(&quot;一共判断冲突的次数%d次&quot;, judgeCount); // 1.5w
	}
	//check是每一次递归时，进入到check中都有for(int i=0; i&lt; max;i++)，因此会有回溯(检查之前的对不对)
	private void check(int n) {//编写一个方法，放置第n个皇后
		if(n == max) {  //n = 8 , 其实8个皇后就既然放好
			print();
			return;
		}
		for(int i = 0; i &lt; max; i++) {//依次放入皇后，并判断是否冲突
			array[n] = i;//先把当前这个皇后 n , 放到该行的第1列
			if(judge(n)) { // 不冲突 判断当放置第n个皇后到i列时，是否冲突
				check(n+1); //接着放n+1个皇后,即开始递归
			}
			//如果冲突，就继续执行 array[n] = i; 即将第n个皇后，放置在本行得后移的一个位置
		}
	}
	//查看当我们放置第n个皇后, 就去检测该皇后是否和前面已经摆放的皇后冲突
	private boolean judge(int n) {
		judgeCount++;
		for(int i = 0; i &lt; n; i++) {
			//1. array[i] == array[n]  判断纵坐标是否相等
			//2. Math.abs(n-i) == Math.abs(array[n] - array[i]) 判断横纵坐标是否相等
			if(array[i] == array[n] || Math.abs(n-i) == Math.abs(array[n] - array[i]) ) {
				return false;
			}
		}
		return true;
	}
	private void print() {
		count++;
		for (int i = 0; i &lt; array.length; i++) {
			System.out.print(array[i] + &quot; &quot;);
		}
		System.out.println();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_7-排序算法" tabindex="-1"><a class="header-anchor" href="#_7-排序算法"><span>7. 排序算法</span></a></h1><ul><li>排序算法(Sort Algorithm)是将一组数据，依指定的顺序进行排列的过程。</li><li>排序的分类： <ul><li>内部排序：指将需要处理的所有数据都加载到内部存储器中进行排序。 <ul><li>插入排序：直接插入排序、希尔排序</li><li>选择排序：简单选择排序、堆排序</li><li>交换排序：冒泡排序、快速排序</li><li>归并排序</li><li>基数排序</li></ul></li><li>外部排序：数据量过大，无法全部加载到内存中，需要借助外部存储(文件等)进行排序。</li></ul></li></ul>`,62),c={href:"https://290ff162.telegraph-image-eg9.pages.dev/file/f09d5844368902224fda6.png",target:"_blank",rel:"noopener noreferrer"},m=e(`<ul><li><p>稳定：如果a原本在b前面，而a=b，排序之后a仍然在b的前面；</p></li><li><p>不稳定：如果a原本在b的前面，而a=b，排序之后a可能会出现在b的后面；</p></li><li><p>内排序：所有排序操作都在内存中完成；</p></li><li><p>外排序：由于数据太大，因此把数据放在磁盘中，而排序通过磁盘和内存的数据传输才能进行；</p></li><li><p>n: 数据规模</p></li><li><p>k: “桶”的个数</p></li><li><p>In-place: 不占用额外内存</p></li><li><p>Out-place: 占用额外内存</p></li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/42c8f6b8f06cfbbad2482.png" alt="排序算法总结.png" tabindex="0"><figcaption>排序算法总结.png</figcaption></figure><h2 id="_7-1-冒泡排序-bubble-sorting-o-n-2" tabindex="-1"><a class="header-anchor" href="#_7-1-冒泡排序-bubble-sorting-o-n-2"><span>7.1. 冒泡排序(Bubble Sorting) O(n^2)</span></a></h2><ul><li>通过对待排序序列从前向后（从下标较小的元素开始）,依次比较相邻元素的值，若发现逆序则交换，使值较大的元素逐渐从前移向后部，就象水底下的气泡一样逐渐向上冒</li><li>冒泡排序规则 <ul><li>一共进行 数组的大小-1 次 大的循环</li><li>每一趟排序的次数在逐渐的减少</li><li>优化：因为排序的过程中，各元素不断接近自己的位置，如果一趟比较下来没有进行过交换，就说明序列有序，因此要在排序过程中设置一个标志flag判断元素是否进行过交换。从而减少不必要的比较</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public static void bubbleSort(int[] arr) {
	int temp = 0; // 临时变量
	boolean flag = false; // 标识变量，表示是否进行过交换//优化代码
	for (int i = 0; i &lt; arr.length - 1; i++) {//外层循环控制循环趟数
		for (int j = 0; j &lt; arr.length - 1 - i; j++) {//内层循环控制每趟循环比较次数
			if (arr[j] &gt; arr[j + 1]) {// 如果前面的数比后面的数大，则交换
				flag = true;//优化代码
				temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
		//优化代码
		if (!flag) { // 在一趟排序中，一次交换都没有发生过
			break;
		} else {
			flag = false; // 重置flag!!!, 进行下次判断
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-2-选择排序-select-sorting-o-n-2" tabindex="-1"><a class="header-anchor" href="#_7-2-选择排序-select-sorting-o-n-2"><span>7.2. 选择排序(select sorting)O(n^2)</span></a></h2><ul><li>基本思想： <ul><li>第一次从arr[0]~arr[n-1]中选取最小值，与arr[0]交换，</li><li>第二次从arr[1]~arr[n-1]中选取最小值，与arr[1]交换，</li><li>第i次从arr[i-1]~arr[n-1]中选取最小值，与arr[i-1]交换，…,</li><li>第n-1次从arr[n-2]~arr[n-1]中选取最小值，与arr[n-2]交换，</li><li>总共通过n-1次，得到一个按排序码从小到大排列的有序序列</li></ul></li><li>说明 <ul><li>选择排序一共有 数组大小 - 1 轮排序</li><li>每1轮排序，又是一个循环, 循环的规则(代码) <ul><li>先假定当前这个数是最小数</li><li>然后和后面的每个数进行比较，如果发现有比当前数更小的数，就重新确定最小数，并得到下标</li><li>当遍历到数组的最后时，就得到本轮最小数和下标</li><li>交换</li></ul></li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public static void selectSort(int[] arr) {
	for (int i = 0; i &lt; arr.length - 1; i++) {//外层循环控制循环趟数
		int minIndex = i;
		int min = arr[i];
		for (int j = i + 1; j &lt; arr.length; j++) {
			if (min &gt; arr[j]) { // 说明假定的最小值，并不是最小
				min = arr[j]; // 重置min
				minIndex = j; // 重置minIndex
			}
		}
		// 将最小值，放在arr[0], 即交换
		if (minIndex != i) {
			arr[minIndex] = arr[i];
			arr[i] = min;
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-3-插入排序-insertion-sorting-o-n-2" tabindex="-1"><a class="header-anchor" href="#_7-3-插入排序-insertion-sorting-o-n-2"><span>7.3. 插入排序(Insertion Sorting)O(n^2)</span></a></h2><ul><li>把n个待排序的元素看成为一个有序表和一个无序表，</li><li>开始时有序表中只包含一个元素，无序表中包含有n-1个元素，</li><li>排序过程中每次从无序表中取出第一个元素，把它的排序码依次与有序表元素的排序码进行比较，</li><li>将它插入到有序表中的适当位置，然后插入位置后面的数值后移，使之成为新的有序表。</li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/8c51d3e56ec82be128c9b.png" alt="插入排序.png" tabindex="0"><figcaption>插入排序.png</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//将i从1-&gt;arr.length循环遍历，每次取出arr[i],然后比较之前的数值
//大于则让之前的数值往后移，同时索引减少，小于则将arr[i]放到当前索引
public static void insertSort(int[] arr) {
	int insertVal = 0;
	int insertIndex = 0;
	for(int i = 1; i &lt; arr.length; i++) {
		insertVal = arr[i];
		insertIndex = i - 1; 
		// 1. insertIndex &gt;= 0 保证在给insertVal 找插入位置，不越界
		// 2. insertVal &lt; arr[insertIndex] 待插入的数，还没有找到插入位置
		//3. 将arr[insertIndex]后移
		while (insertIndex &gt;= 0 &amp;&amp; insertVal &lt; arr[insertIndex]) {//arr[insertIndex],从后向前遍历比较的数值
			arr[insertIndex + 1] = arr[insertIndex];
			insertIndex--;//当需要插入的数是较小的数时，后移的次数明显增多，对效率有影响.引出
		}
		// 当退出while循环时，说明插入的位置找到, insertIndex + 1
		if(insertIndex + 1 != i) {//while减了1,加上1获得当前索引
			arr[insertIndex + 1] = insertVal;
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-4-希尔排序-shell-sort-o-nlog2n" tabindex="-1"><a class="header-anchor" href="#_7-4-希尔排序-shell-sort-o-nlog2n"><span>7.4. 希尔排序(shell Sort)O(nlog2n)</span></a></h2><ul><li>希尔排序是简单插入排序经过改进之后的一个更高效的版本，也称为缩小增量排序。</li><li>希尔排序是把记录按下标的一定增量分组，对每组使用直接插入排序算法排序；随着增量逐渐减少，每组包含的关键词越来越多，当增量减至1时，整个文件恰被分成一组，算法便终止</li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/8bb7c9d4b07f9195a38bf.png" alt="希尔排序.png" tabindex="0"><figcaption>希尔排序.png</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//交换法;希尔排序时， 对有序序列在插入时采用交换法, 
public static void shellSort(int[] arr) {
	int temp = 0;
	int count = 0;
	for (int gap = arr.length / 2; gap &gt; 0; gap /= 2) {
		for (int i = gap; i &lt; arr.length; i++) {// 遍历各组中所有的元素(共gap组，每组有arr.length/gap个元素), 步长gap
			for (int j = i - gap; j &gt;= 0; j -= gap) {// 如果当前元素大于加上步长后的那个元素，说明交换
				if (arr[j] &gt; arr[j + gap]) {
					temp = arr[j];
					arr[j] = arr[j + gap];
					arr[j + gap] = temp;
				}
			}
		}
	}
}
//位移法;对交换式的希尔排序进行优化-&gt;移位法（分组+插入排序）
public static void shellSort2(int[] arr) {
	for (int gap = arr.length / 2; gap &gt; 0; gap /= 2) {
		for (int i = gap; i &lt; arr.length; i++) {// 从第gap个元素，逐个对其所在的组进行直接插入排序
			int j = i;
			int temp = arr[j];
			//if (arr[j] &lt; arr[j - gap]) {
				while (j - gap &gt;= 0 &amp;&amp; temp &lt; arr[j - gap]) {
					arr[j] = arr[j-gap];//移动
					j -= gap;
				}
				//当退出while后，就给temp找到插入的位置
				arr[j] = temp;
			//}
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-5-快速排序-quick-sort-o-n-2" tabindex="-1"><a class="header-anchor" href="#_7-5-快速排序-quick-sort-o-n-2"><span>7.5. 快速排序(Quick sort)O(n^2)</span></a></h2><ul><li>通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据都比另外一部分的所有数据都要小，然后再按此方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，以此达到整个数据变成有序序列</li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/5a6d66d80e037389d69d7.png" alt="快速排序.png" tabindex="0"><figcaption>快速排序.png</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//首先向左向右找小于和大于中间值的索引，相等继续移动，找到然后交换
public static void quickSort(int[] arr,int left, int right) {
	int l = left; //左下标
	int r = right; //右下标
	int pivot = arr[(left + right) / 2];//pivot 中轴值
	int temp = 0; //临时变量，作为交换时使用
	//while循环的目的是让比pivot 值小放到左边,比pivot 值大放到右边
	while( l &lt; r) { 
		while( arr[l] &lt; pivot) {//在pivot的左边一直找,找到大于等于pivot值,才退出
			l += 1;
		}
		while(arr[r] &gt; pivot) {//在pivot的右边一直找,找到小于等于pivot值,才退出
			r -= 1;
		}
		//如果l &gt;= r说明pivot 的左右两的值，已经按照左边全部是
		//小于等于pivot值，右边全部是大于等于pivot值
		if( l &gt;= r) {
			break;
		}
		temp = arr[l];
		arr[l] = arr[r];
		arr[r] = temp;
		if(arr[l] == pivot) {//如果交换完后，发现这个arr[l] == pivot值 相等 r--， 前移
			r -= 1;
		}
		if(arr[r] == pivot) {//如果交换完后，发现这个arr[r] == pivot值 相等 l++， 后移
			l += 1;
		}
	}
	// 如果 l == r, 必须l++, r--, 否则为出现栈溢出
	if (l == r) {
		l += 1;
		r -= 1;
	}
	if(left &lt; r) {
		quickSort(arr, left, r);
	}
	if(right &gt; l) {
		quickSort(arr, l, right);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-6-归并排序-merge-sort-o-nlog2n" tabindex="-1"><a class="header-anchor" href="#_7-6-归并排序-merge-sort-o-nlog2n"><span>7.6. 归并排序(Merge sort)O(nlog2n)</span></a></h2><ul><li>归并排序（MERGE-SORT）是利用归并的思想实现的排序方法，该算法采用经典的分治（divide-and-conquer）策略（分治法将问题分(divide)成一些小的问题然后递归求解，</li><li>而治(conquer)的阶段则将分的阶段得到的各答案&quot;修补&quot;在一起，即分而治之)。<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/a053e1ecb9acb06c487e1.png" alt="归并排序.png"><br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/625043b7e9c3fa53e3c46.png" alt="归并排序2.png"></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//合并的方法
/**
* @param arr 排序的原始数组
* @param left 左边有序序列的初始索引
* @param mid 中间索引
* @param right 右边索引
* @param temp 做中转的数组
*/
public static void merge(int[] arr, int left, int mid, int right, int[] temp) {
	
	int i = left; // 初始化i, 左边有序序列的初始索引
	int j = mid + 1; //初始化j, 右边有序序列的初始索引
	int t = 0; // 指向temp数组的当前索引
	
	//(一)先把左右两边(有序)的数据填充到temp数组,直到左右两边的有序序列，有一边处理完毕为止
	while (i &lt;= mid &amp;&amp; j &lt;= right) {//继续
		if(arr[i] &lt;= arr[j]) {
			temp[t++] = arr[i++];
		} else { //反之,将右边有序序列的当前元素，填充到temp数组
			temp[t++] = arr[j++];
		}
	}
	
	//(二)把有剩余数据的一边的数据依次全部填充到temp
	while( i &lt;= mid) { //左边的有序序列还有剩余的元素，就全部填充到temp
		temp[t++] = arr[i++];
	}
	
	while( j &lt;= right) { //右边的有序序列还有剩余的元素，就全部填充到temp
		temp[t++] = arr[j++];
	}
	
	
	//(三)将temp数组的元素拷贝到arr,注意，并不是每次都拷贝所有
	t = 0;
	int tempLeft = left;
	while(tempLeft &lt;= right) { 
		arr[tempLeft++] = temp[t++];
	}
	
}

//分+合方法
public static void mergeSort(int[] arr, int left, int right, int[] temp) {
	if(left &lt; right) {
		int mid = (left + right) / 2; //中间索引
		//向左递归进行分解
		mergeSort(arr, left, mid, temp);
		//向右递归进行分解
		mergeSort(arr, mid + 1, right, temp);
		//合并
		merge(arr, left, mid, right, temp);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-7-基数排序-radix-sort-o-nlog2n" tabindex="-1"><a class="header-anchor" href="#_7-7-基数排序-radix-sort-o-nlog2n"><span>7.7. 基数排序(radix sort)O(nlog2n)</span></a></h2><ul><li>属于“分配式排序”（distribution sort），又称“桶子法”（bucket sort）或bin sort，桶排序的扩展</li><li>通过键值的各个位的值，将要排序的元素分配至某些“桶”中，达到排序的作用</li><li>基数排序法是属于稳定性的排序，基数排序法的是效率高的稳定性排序法</li><li>基数排序是1887年赫尔曼·何乐礼发明的。它是这样实现的：将整数按位数切割成不同的数字，然后按每个位数分别比较。将所有待比较数值统一为同样的数位长度，数位较短的数前面补零。然后，从最低位开始，依次进行一次排序。这样从最低位排序一直到最高位排序完成以后, 数列就变成一个有序序列。</li><li>基数排序是使用空间换时间的经典算法</li><li>第1轮排序: <ul><li>(1) 将每个元素的个位数取出，然后看这个数应该放在哪个对应的桶(一个一维数组)</li><li>(2) 按照这个桶的顺序(一维数组的下标依次取出数据，放入原来数组)</li></ul></li><li>第2轮排序: <ul><li>(1) 将每个元素的十位数取出，然后看这个数应该放在哪个对应的桶(一个一维数组)</li><li>(2) 按照这个桶的顺序(一维数组的下标依次取出数据，放入原来数组)<br> ...</li></ul></li></ul><p><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/c9c5e395b4d5db1de172e.png" alt="基数排序1.png"><br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/8eb855b2d5544664f87cc.png" alt="基数排序2.png"></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public static void radixSort(int[] arr) {
	int max = arr[0];
	for(int i = 1; i &lt; arr.length; i++) {
		if (arr[i] &gt; max) {
			max = arr[i];
		}
	}
	int maxLength = (max + &quot;&quot;).length();
	
	//1. 二维数组包含10个一维数组，表示10个桶, 每个桶就是一个一维数组
	//2. 为了防止在放入数的时候，数据溢出，则每个一维数组(桶)，大小定为arr.length
	int[][] bucket = new int[10][arr.length];
	
	//定义一个一维数组来记录各个桶的每次放入的数据个数 bucketElementCounts[0],记录的是 bucket[0]桶的数据个数
	int[] bucketElementCounts = new int[10];
	
	for(int i = 0 , n = 1; i &lt; maxLength; i++, n *= 10) {
		//(针对每个元素的对应位进行排序处理)， 第一次是个位，第二次是十位，第三次是百位..
		for(int j = 0; j &lt; arr.length; j++) {
			int digitOfElement = arr[j] / n % 10;
			bucket[digitOfElement][bucketElementCounts[digitOfElement]] = arr[j];
			bucketElementCounts[digitOfElement]++;
		}
		//按照这个桶的顺序(一维数组的下标依次取出数据，放入原来数组)
		int index = 0;
		for(int k = 0; k &lt; bucketElementCounts.length; k++) {
			if(bucketElementCounts[k] != 0) {
				for(int l = 0; l &lt; bucketElementCounts[k]; l++) {
					arr[index++] = bucket[k][l];
				}
			}
			//第i+1轮处理后，需要将每个 bucketElementCounts[k] = 0 ！！！！
			bucketElementCounts[k] = 0;
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_8-查找算法" tabindex="-1"><a class="header-anchor" href="#_8-查找算法"><span>8. 查找算法</span></a></h1><h2 id="_8-1-顺序-线性-查找" tabindex="-1"><a class="header-anchor" href="#_8-1-顺序-线性-查找"><span>8.1. 顺序(线性)查找</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public static int seqSearch(int[] arr, int value) {
	for (int i = 0; i &lt; arr.length; i++) {
		if(arr[i] == value) {
			return i;
		}
	}
	return -1;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-2-二分-折半查找算法-递归和非递归" tabindex="-1"><a class="header-anchor" href="#_8-2-二分-折半查找算法-递归和非递归"><span>8.2. 二分/折半查找算法(递归和非递归)</span></a></h2><ul><li>二分查找法只适用于从有序的数列中进行查找(比如数字和字母等)，将数列排序后再进行查找</li><li>二分查找法的运行时间为对数时间O(㏒₂n) ，即查找到需要的目标位置最多只需要㏒₂n步，假设从[0,99]的队列(100个数，即n=100)中寻到目标数30，则需要查找步数为㏒₂100 , 即最多需要查找7次( 2^6 &lt; 100 &lt; 2^7)</li><li>递归 <ul><li>首先确定该数组的中间的下标:mid = (left + right) / 2</li><li>然后让需要查找的数 findVal 和 arr[mid] 比较 <ul><li>findVal &gt; arr[mid] , 说明你要查找的数在mid 的右边, 因此需要递归的向右查找</li><li>findVal &lt; arr[mid], 说明你要查找的数在mid 的左边, 因此需要递归的向左查找</li><li>findVal == arr[mid] 说明找到，就返回</li></ul></li><li>找到就结束递归;递归完整个数组，仍然没有找到findVal需要结束递归;当 left &gt; right就需要退出</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//二分查找的非递归实现
/**
* @param arr 待查找的数组, arr是升序排序
* @param target 需要查找的数
* @return 返回对应下标，-1表示没有找到
*/
public static int binarySearch(int[] arr, int target) {
	int left = 0;
	int right = arr.length - 1;
	while(left &lt;= right) { //说明继续查找
		int mid = (left + right) / 2;
		if(arr[mid] == target) {
			return mid;
		} else if ( arr[mid] &gt; target) {
			right = mid - 1;//需要向左边查找
		} else {
			left = mid + 1; //需要向右边查找
		}
	}
	return -1;
}
/**
* @param arr数组
* @param left左边的索引
* @param right右边的索引
* @param findVal要查找的值
* @return 如果找到就返回下标，如果没有找到，就返回 -1
*/
public static int binarySearch(int[] arr, int left, int right, int findVal) {
	// 当 left &gt; right 时，说明递归整个数组，但是没有找到
	if (left &gt; right) return -1;
	int mid = (left + right) / 2;
	int midVal = arr[mid];

	if (findVal &gt; midVal) { // 向右递归
		return binarySearch(arr, mid + 1, right, findVal);
	} else if (findVal &lt; midVal) { // 向左递归
		return binarySearch(arr, left, mid - 1, findVal);
	} else {
		return mid;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/*
* 课后思考题： {1,8, 10, 89, 1000, 1000，1234} 当一个有序数组中，
* 有多个相同的数值时，如何将所有的数值都查找到，比如这里的 1000
* 思路分析
* 1. 在找到mid 索引值，不要马上返回
* 2. 向mid 索引值的左边扫描，将所有满足 1000， 的元素的下标，加入到集合ArrayList
* 3. 向mid 索引值的右边扫描，将所有满足 1000， 的元素的下标，加入到集合ArrayList
* 4. 将Arraylist返回
*/
public static List&lt;Integer&gt; binarySearch2(int[] arr, int left, int right, int findVal) {
	// 当 left &gt; right 时，说明递归整个数组，但是没有找到
	if (left &gt; right) return new ArrayList&lt;Integer&gt;();
	int mid = (left + right) / 2;
	int midVal = arr[mid];

	if (findVal &gt; midVal) { // 向 右递归
		return binarySearch2(arr, mid + 1, right, findVal);
	} else if (findVal &lt; midVal) { // 向左递归
		return binarySearch2(arr, left, mid - 1, findVal);
	} else {			
		List&lt;Integer&gt; resIndexlist = new ArrayList&lt;Integer&gt;();
		//向mid 索引值的左边扫描，将所有满足 1000， 的元素的下标，加入到集合ArrayList
		int temp = mid - 1;
		while(true) {
			if (temp &lt; 0 || arr[temp] != findVal) {//退出
				break;
			}
			resIndexlist.add(temp);
			temp -= 1; //temp左移
		}
		resIndexlist.add(mid);  //
		//向mid 索引值的右边扫描，将所有满足 1000， 的元素的下标，加入到集合ArrayList
		temp = mid + 1;
		while(true) {
			if (temp &gt; arr.length - 1 || arr[temp] != findVal) {//退出
				break;
			}
			resIndexlist.add(temp);
			temp += 1; //temp右移
		}
		return resIndexlist;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-3-插入查找" tabindex="-1"><a class="header-anchor" href="#_8-3-插入查找"><span>8.3. 插入查找</span></a></h2><ul><li>插值查找算法类似于二分查找，不同的是插值查找每次从自适应mid处开始查找。</li><li>将折半查找中的求mid 索引的公式 , low 表示左边索引left, high表示右边索引right.key就是前面我们讲的findVal</li><li>原公式:int mid = (left + right) / 2 = low + 1/2 * (right - low)</li><li>新公式:int mid = left + (right – left) * (findVal – arr[left]) / (arr[right] – arr[left])</li><li>对于数据量较大，关键字分布比较均匀的查找表来说，采用插值查找, 速度较快.关键字分布不均匀的情况下，该方法不一定比折半查找要好</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//说明：插值查找算法，也要求数组是有序的
/**
* @param arr 数组
* @param left 左边索引
* @param right 右边索引
* @param findVal 查找值
* @return 如果找到，就返回对应的下标，如果没有找到，返回-1
*/
public static int insertValueSearch(int[] arr, int left, int right, int findVal) { 
	//注意：findVal &lt; arr[0]  和  findVal &gt; arr[arr.length - 1] 必须需要
	//否则我们得到的 mid 可能越界
	if (left &gt; right || findVal &lt; arr[0] || findVal &gt; arr[arr.length - 1]) {
		return -1;
	}
	// 求出mid, 自适应
	int mid = left + (right - left) * (findVal - arr[left]) / (arr[right] - arr[left]);
	int midVal = arr[mid];
	if (findVal &gt; midVal) { // 说明应该向右边递归
		return insertValueSearch(arr, mid + 1, right, findVal);
	} else if (findVal &lt; midVal) { // 说明向左递归查找
		return insertValueSearch(arr, left, mid - 1, findVal);
	} else {
		return mid;
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-4-斐波那契-黄金分割法-查找算法" tabindex="-1"><a class="header-anchor" href="#_8-4-斐波那契-黄金分割法-查找算法"><span>8.4. 斐波那契(黄金分割法)查找算法</span></a></h2><ul><li>黄金分割点是指把一条线段分割为两部分，使其中一部分与全长之比等于另一部分与这部分之比。取其前三位数字的近似值是0.618。由于按此比例设计的造型十分美丽，因此称为黄金分割，也称为中外比。</li><li>斐波那契数列 {1, 1, 2, 3, 5, 8, 13, 21, 34, 55 } 发现斐波那契数列的两个相邻数的比例，无限接近黄金分割值0.618</li><li>斐波那契查找原理与前两种相似，仅仅改变了中间结点（mid）的位置，mid不再是中间或插值得到，而是位于黄金分割点附近，即mid=low+F(k-1)-1（F代表斐波那契数列）</li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/d194d99ba71d3049212fe.png" alt="查找算法.png" tabindex="0"><figcaption>查找算法.png</figcaption></figure><ul><li>F(k-1)-1推导过程： <ul><li>由斐波那契数列 F[k]=F[k-1]+F[k-2] 的性质，可以得到（F[k]-1）=（F[k-1]-1）+（F[k-2]-1）+1 。</li><li>只要顺序表的长度为F[k]-1，则可以将该表分成长度为F[k-1]-1和F[k-2]-1的两段。从而中间位置为mid=low+F(k-1)-1</li><li>类似的，每一子段也可以用相同的方式分割</li><li>但顺序表长度n不一定刚好等于F[k]-1，所以需要将原来的顺序表长度n增加至F[k]-1。这里的k值只要能使得F[k]-1恰好大于或等于n即可，由以下代码得到,顺序表长度增加后，新增的位置（从n+1到F[k]-1位置），都赋为n位置的值即可。</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	public static int maxSize = 20;
	public static int[] fib() {
		int[] f = new int[maxSize];
		f[0] = 1;
		f[1] = 1;
		for (int i = 2; i &lt; maxSize; i++) {
			f[i] = f[i - 1] + f[i - 2];
		}
		return f;
	}
	/**
	* @param a  数组
	* @param key 我们需要查找的关键码(值)
	* @return 返回对应的下标，如果没有-1
	*/
	public static int fibSearch(int[] a, int key) {
		int low = 0;
		int high = a.length - 1;
		int k = 0; //表示斐波那契分割数值的下标
		int mid = 0; //存放mid值
		int f[] = fib(); //获取到斐波那契数列
		//获取到斐波那契分割数值的下标
		while(high &gt; f[k] - 1) {
			k++;
		}
		//因为 f[k] 值可能大于a的长度，因此需要使用Arrays类，构造一个新的数组，并指向temp[],不足的部分会使用0填充
		int[] temp = Arrays.copyOf(a, f[k]);
		//实际上要使用a数组最后的数填充 temp
		//举例:temp = {1,8, 10, 89, 1000, 1234, 0, 0}  =&gt; {1,8, 10, 89, 1000, 1234, 1234, 1234,}
		for(int i = high + 1; i &lt; temp.length; i++) {
			temp[i] = a[high];
		}
		// 使用while来循环处理，找到我们的数 key
		while (low &lt;= high) {
			mid = low + f[k - 1] - 1;
			if(key &lt; temp[mid]) { //我们应该继续向数组的前面查找(左边)
				high = mid - 1;
				//全部元素 = 前面的元素 + 后边元素 f[k] = f[k-1] + f[k-2]
				//因为 前面有 f[k-1]个元素,所以可以继续拆分 f[k-1] = f[k-2] + f[k-3]
				//即 在 f[k-1] 的前面继续查找 k-- 即下次循环 mid = f[k-1-1]-1
				k--;
			} else if ( key &gt; temp[mid]) { // 我们应该继续向数组的后面查找(右边)
				low = mid + 1;
				//全部元素 = 前面的元素 + 后边元素 f[k] = f[k-1] + f[k-2]
				//因为后面我们有f[k-2] 所以可以继续拆分 f[k-1] = f[k-3] + f[k-4]
				//即在f[k-2] 的前面进行查找 k -=2 即下次循环 mid = f[k - 1 - 2] - 1
				k -= 2;
			} else { //找到
				if(mid &lt;= high) {
					return mid;
				} else {
					return high;
				}
			}
		}
		return -1;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_9-哈希表" tabindex="-1"><a class="header-anchor" href="#_9-哈希表"><span>9. 哈希表</span></a></h1><ul><li>有一个公司,当有新的员工来报道时,要求将该员工的信息加入(id,性别,年龄,住址..),当输入该员工的id时,要求查找到该员工的所有信息.要求: 不使用数据库,尽量节省内存,速度越快越好=&gt;哈希表(散列) <ul><li>1.添加时，保证按照id从低到高插入 [课后思考：如果id不是从\v低到高插入，但要求各条链表仍是从低到高，怎么解决?]</li><li>2.使用链表来实现哈希表, 该链表不带表头[即: 链表的第一个结点就存放雇员信息]</li></ul></li><li>散列表（Hash table，也叫哈希表），是根据关键码值(Key value)而直接进行访问的数据结构。通过把关键码值映射到表中一个位置来访问记录，以加快查找的速度。这个映射函数叫做散列函数，存放记录的数组叫做散列表。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    class HashTab {
        private EmpLinkedList[] empLinkedListArray;
        private int size; //表示有多少条链表
        public HashTab(int size) {
            this.size = size;
            empLinkedListArray = new EmpLinkedList[size];
            //？留一个坑, 这时不要分别初始化每个链表
            for(int i = 0; i &lt; size; i++) {
                empLinkedListArray[i] = new EmpLinkedList();
            }
        }
        public void add(Emp emp) {
            int empLinkedListNO = hashFun(emp.id);
            empLinkedListArray[empLinkedListNO].add(emp);
        }
        public void list() {
            for(int i = 0; i &lt; size; i++) {
                empLinkedListArray[i].list(i);
            }
        }
        public void findEmpById(int id) {
            int empLinkedListNO = hashFun(id);
            Emp emp = empLinkedListArray[empLinkedListNO].findEmpById(id);
            if(emp != null) {//找到
                System.out.printf(&quot;在第%d条链表中找到 雇员 id = %d\\n&quot;, (empLinkedListNO + 1), id);
            }else{
                System.out.println(&quot;在哈希表中，没有找到该雇员~&quot;);
            }
        }
        //编写散列函数, 使用一个简单取模法
        public int hashFun(int id) {
            return id % size;
        }
    }
    class Emp {
        public int id;
        public String name;
        public Emp next; //next 默认为 null
        public Emp(int id, String name) {
            super();
            this.id = id;
            this.name = name;
        }
    }

    class EmpLinkedList {
        private Emp head; //默认null
        
        //假定，当添加雇员时，id 是自增长，即id的分配总是从小到大，因此我们将该雇员直接加入到本链表的最后即可
        public void add(Emp emp) {
            if(head == null) {
                head = emp;
                return;
            }
            Emp curEmp = head;
            while(true) {
                if(curEmp.next == null) {//说明到链表最后
                    break;
                }
                curEmp = curEmp.next; //后移
            }
            curEmp.next = emp;
        }
        public void list(int no) {
            if(head == null) { //说明链表为空
                System.out.println(&quot;第 &quot;+(no+1)+&quot; 链表为空&quot;);
                return;
            }
            System.out.print(&quot;第 &quot;+(no+1)+&quot; 链表的信息为&quot;);
            Emp curEmp = head; //辅助指针
            while(true) {
                System.out.printf(&quot; =&gt; id=%d name=%s\\t&quot;, curEmp.id, curEmp.name);
                if(curEmp.next == null) {//说明curEmp已经是最后结点
                    break;
                }
                curEmp = curEmp.next; //后移，遍历
            }
            System.out.println();
        }
        
        public Emp findEmpById(int id) {
            if(head == null) return null;
            Emp curEmp = head;//辅助指针
            while(true) {
                if(curEmp.id == id) break;//这时curEmp就指向要查找的雇员//找到
                if(curEmp.next == null) {//说明遍历当前链表没有找到该雇员
                    curEmp = null;
                    break;
                }
                curEmp = curEmp.next;//以后
            }
            return curEmp;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_10-树" tabindex="-1"><a class="header-anchor" href="#_10-树"><span>10. 树</span></a></h1><ul><li>数组存储方式的分析 <ul><li>优点：通过下标方式访问元素，速度快。对于有序数组，还可使用二分查找提高检索速度。</li><li>缺点：如果要检索具体某个值，或者插入值(按一定顺序)会整体移动，效率较低，插入时需要创建一个新的数组，将原值和新值复制到新数组中</li></ul></li><li>链式存储方式的分析 <ul><li>优点：插入和删除效率较高(比如：插入一个数值节点，只需要将插入节点，链接到链表中即可， 删除效率也很好)</li><li>缺点：在进行检索时，效率仍然较低，(比如检索某个值，需要从头节点开始遍历)</li></ul></li><li>树存储方式的分析 <ul><li>能提高数据存储，读取的效率, 比如利用二叉排序树(Binary Sort Tree)，既可以保证数据的检索速度，同时也可以保证数据的插入，删除，修改的速度</li></ul></li><li>树的概念：节点、根节点、父节点、子节点、叶子节点 (没有子节点的节点)、节点的权(节点值)、路径(从root节点找到该节点的路线)、层(根节点所在的位置为1层)、子树、树的高度(最大层数)</li><li>森林 :多颗子树构成森林</li><li>二叉树：每个节点最多只能有两个子节点。二叉树的子节点分为左节点和右节点</li><li>满二叉树：二叉树中除了叶子结点，每个结点的度都为 2，并且结点总数= 2^n -1 , n 为层数</li><li>完全二叉树：二叉树的所有叶子节点都在最后一层或者倒数第二层，而且最后一层的叶子节点在左边连续，倒数第二层的叶子节点在右边连续。</li><li>二叉树遍历 <ul><li>前序遍历: 先输出父节点，再遍历左子树和右子树</li><li>中序遍历: 先遍历左子树，再输出父节点，再遍历右子树</li><li>后序遍历: 先遍历左子树，再遍历右子树，最后输出父节点</li><li>小结: 看输出父节点的顺序，就确定是前序，中序还是后序</li></ul></li></ul><p><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/27bb13aae3705df7a2a85.gif" alt="二叉树遍历.gif"><br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/f57e2e5341b50277933c8.png" alt="二叉树.png"></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public static void main(String[] args) {
	Node node1 = new Node(10);
	Node node2 = new Node(6);
	Node node3 = new Node(14);
	Node node4 = new Node(4);
	Node node5 = new Node(8);
	Node node6 = new Node(12);
	Node node7 = new Node(16);

	node1.setLeft(node2);
	node1.setRight(node3);
	node2.setLeft(node4);
	node2.setRight(node5);
	node3.setLeft(node6);
	node3.setRight(node7);

	Tree tree = new Tree();
	tree.setRoot(node1);
	System.out.println(&quot;前序遍历&quot;);
	tree.preOrder();
	System.out.println(&quot;中序遍历&quot;);
	tree.infixOrder();
	System.out.println(&quot;后序遍历&quot;);
	tree.postOrder();
}
class Node{
    private int no;
    private Node left;
    private Node right;
    //set,get toString
    public void preOrder(){
        System.out.println(this);
        if(this.left != null){
            this.left.preOrder();
        }
        if(this.right != null){
            this.right.preOrder();
        }
    }
    public void infixOrder(){
        if(this.left != null){
            this.left.infixOrder();
        }
        System.out.println(this);
        if(this.right != null){
            this.right.infixOrder();
        }
    }
    public void postOrder(){
        if(this.left != null){
            this.left.postOrder();
        }
        if(this.right != null){
            this.right.postOrder();
        }
        System.out.println(this);
    }
    public Node preOrderSearch(int no){
        if(this.no == no){
            return this;
        }
        Node result = null;
        if(this.left != null){
            result = this.left.preOrderSearch(no);
        }
        if(result != null){
            return result;
        }
        if(this.right != null){
            result = this.right.preOrderSearch(no);
        }
        return result;
    }
    public Node infixOrderSearch(int no){
        Node result = null;
        if(this.left != null){
            result = this.left.infixOrderSearch(no);
        }
        if(result != null){
            return result;
        }
        if(this.no == no){
            return this;
        }
        if(this.right != null){
            result = this.right.infixOrderSearch(no);
        }
        return result;
    }
    public Node postOrderSearch(int no){
        Node result = null;
        if(this.left != null){
            result = this.left.postOrderSearch(no);
        }
        if(result != null){
            return result;
        }

        if(this.right != null){
            result = this.right.postOrderSearch(no);
        }
        if(result != null){
            return result;
        }

        if(this.no == no){
            return this;
        }
        return result;
    }
	public void delNode(int no){
		if(this.left != null &amp;&amp; this.left.no == no) {
			this.left = null;
			return;
		}
		if(this.right != null &amp;&amp; this.right.no == no) {
			this.right = null;
			return;
		}
		if(this.left != null) {
			this.left.delNode(no);
		}
		if(this.right != null) {
			this.right.delNode(no);
		}
	}
}
class Tree{
    private Node root;
    public void setRoot(Node root) {
        this.root = root;
    }
    public void preOrder(){
        if(root!=null){
            this.root.preOrder();
        }else {
            System.out.println(&quot;树为空!&quot;);
        }
    }
    public void infixOrder(){
        if(root!=null){
            this.root.infixOrder();
        }else {
            System.out.println(&quot;树为空!&quot;);
        }
    }
    public void postOrder(){
        if(root!=null){
            this.root.postOrder();
        }else {
            System.out.println(&quot;树为空!&quot;);
        }
    }
    public Node preOrderSearch(int no){
        if(root != null){
            return this.root.preOrderSearch(no);
        }else {
            return null;
        }
    }
    public Node infixOrderSearch(int no){
        if(root != null){
            return this.root.infixOrderSearch(no);
        }else {
            return null;
        }
    }
    public Node postOrderSearch(int no){
        if(root != null){
            return this.root.postOrderSearch(no);
        }else {
            return null;
        }
    }
	public void delNode(int no){
		if(root != null) {
			if(root.getNo() == no) {
				root = null;
			} else {
				root.delNode(no);
			}
		}else{
			System.out.println(&quot;空树，不能删除~&quot;);
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-1-顺序存储二叉树-堆排序" tabindex="-1"><a class="header-anchor" href="#_10-1-顺序存储二叉树-堆排序"><span>10.1. 顺序存储二叉树-&gt;堆排序</span></a></h2><ul><li>从数据存储来看，数组存储方式和树的存储方式可以相互转换，即数组可以转换成树，树也可以转换成数组</li><li>顺序二叉树通常只考虑完全二叉树,n为索引，从0开始</li><li>第n个元素的左子节点为 2 * n + 1</li><li>第n个元素的右子节点为 2 * n + 2</li><li>第n个元素的父节点为 (n-1) / 2</li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/d0e4012e7fbe7c6019c44.png" alt="顺序存储二叉树.png" tabindex="0"><figcaption>顺序存储二叉树.png</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class ArrBinaryTree {
	private int[] arr;//存储数据结点的数组
	public ArrBinaryTree(int[] arr) {
		this.arr = arr;
	}
	public void preOrder() {
		this.preOrder(0);
	}
	public void preOrder(int index) {//index 数组的下标  前序遍历
		if(index &lt; arr.length){
			//前序遍历 System.out.println(arr[index]); 1,2,4,5,3,6,7
			preOrder(2 * index + 1 );//向左递归遍历
			//中序遍历 System.out.println(arr[index]); 
			preOrder(2 * index + 2);//向右递归遍历
			//后序遍历 System.out.println(arr[index]); 
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-2-线索化二叉树" tabindex="-1"><a class="header-anchor" href="#_10-2-线索化二叉树"><span>10.2. 线索化二叉树</span></a></h2><ul><li>当二叉树不是完全二叉树的时候，有些节点的左右指针没有完全用上,如图的6的右节点以及8, 10, 14 这几个节点的 左右指针，并没有完全的利用上</li><li>n个结点的二叉链表中，有2n个指针域，其中所有节点的都有父节点指向它，除了root节点，所以有n-1个非空指针，含有n+1【2n-(n-1)=n+1】个空指针域。</li><li>利用二叉链表中的空指针域，存放指向该结点在某种遍历次序下的前驱和后继结点的指针（这种附加的指针称为&quot;线索&quot;）加上了线索的二叉链表称为线索链表，相应的二叉树称为线索二叉树(Threaded BinaryTree)。根据线索性质的不同，线索二叉树可分为前序线索二叉树、中序线索二叉树和后序线索二叉树三种</li><li>当线索化二叉树后，Node节点的属性left 和right ，有如下情况: <ul><li>left指向的是左子树，也可能是指向的前驱节点. 比如①节点left指向的左子树, 而⑩节点的 left 指向的就是前驱节点.</li><li>right指向的是右子树，也可能是指向后继节点，比如①节点right指向的是右子树，而⑩节点的right 指向的是后继节点.</li></ul></li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/995e5814cf08387d0266b.png" alt="线索化二叉树.png" tabindex="0"><figcaption>线索化二叉树.png</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class Node2 extends Node{
	private int leftType;//1. 如果leftType == 0 表示指向的是左子树, 如果 1 则表示指向前驱结点
	private int rightType;//2. 如果rightType == 0 表示指向是右子树, 如果 1表示指向后继结点
	//set,get,toString
}


class ThreadedBinaryTree extends Tree{
	private Node pre = null;//在递归进行线索化时，总是保留前一个节点
	public void threadedNodes() {
		this.threadedNodes(root);
	}
	//遍历线索化二叉树的方法
	public static void threadedList() {//8,3,10,1,14,6
		Node node = root;
		while(node != null) {
			//循环的找到leftType == 1的结点，第一个找到就是8结点
			//后面随着遍历而变化,因为当leftType==1时，说明该结点是按照线索化处理后的有效结点
			while(node.getLeftType() == 0) {
				node = node.getLeft();
			}
			System.out.println(node);
			//如果当前结点的右指针指向的是后继结点,就一直输出
			while(node.getRightType() == 1) {
				//获取到当前结点的后继结点
				node = node.getRight();
				System.out.println(node);
			}
			//替换这个遍历的结点
			node = node.getRight();
		}
	}
	
	//编写对二叉树进行中序线索化的方法
	/**
	* @param node 就是当前需要线索化的结点
	* @param pre 指向当前结点的前驱结点的指针
	*/
	public void threadedNodes(TreeNode node) {
		if(node == null) {return;}
		
		//(一)先线索化左子树
		threadedNodes(node.getLeft());
		//(二)线索化当前结点
		//处理当前结点的前驱结点
		//以8结点来理解，8结点的.left = null , 8结点的.leftType = 1
		if(node.getLeft() == null) {
			node.setLeft(pre); 
			node.setLeftType(1);
		}
		
		if (pre != null &amp;&amp; pre.getRight() == null) {
			pre.setRight(node);
			pre.setRightType(1);
		}
		//!!! 每处理一个结点后，让当前结点是下一个结点的前驱结点
		pre = node;
		
		//(三)在线索化右子树
		threadedNodes(node.getRight());
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-3-堆排序o-nlogn" tabindex="-1"><a class="header-anchor" href="#_10-3-堆排序o-nlogn"><span>10.3. 堆排序O(nlogn)</span></a></h2><ul><li>堆排序是利用堆这种数据结构而设计的一种选择排序算法，它的最坏，最好，平均时间复杂度均为O(nlogn)，也是不稳定排序</li><li>堆是具有以下性质的完全二叉树，对于n个元素的序列{R0, R1, ... , Rn}当且仅当满足下列关系之一时，称之为堆： <ul><li>每个结点的值都大于或等于其左右孩子结点的值，Ri &gt;= R2i+1 且 Ri &gt;= R2i+2 称为大顶堆,i从0开始编号。注意 : 没有要求结点的左孩子的值和右孩子的值的大小关系。</li><li>每个结点的值都小于或等于其左右孩子结点的值，Ri &lt;= R2i+1 且 Ri &lt;= R2i+2 称为小顶堆,i从0开始编号。</li><li>升序用大顶堆，降序用小顶堆</li><li>设当前元素在数组中以R[i]表示，它的左孩子、右孩子、父结点是：R[2i+1]、R[2i+2]、R[(i-1)/2];其中i=1,2,…,n/2向下取整;</li></ul></li><li>堆排序的思想 <ul><li>将待排序序列构造成一个大顶堆,此时，整个序列的最大值就是堆顶的根节点。 <ul><li>找到所有包含子节点的节点，也就是非叶子节点，然后调整他们的父子关系，因爲根据大顶堆的性质，每个节点的值都大于或者等于它的左右子节点的值。</li><li>非叶子节点遍历的顺序应该是从下往上，这比从上往下的顺序遍历次数少很多，因为，大顶堆的性质要求父节点的值要大于或者等于子节点的值，如果从上往下遍历，当某个节点即是父节点又是子节点并且它的子节点仍然有子节点的时候，因为子节点还没有遍历到，所以子节点不符合大顶堆性质，当子节点调整后，必然会影响其父节点需要二次调整。但是从下往上的方式不需要考虑父节点，因为当前节点调整完之后，当前节点必然比它的所有子节点都大，所以，只会影响到子节点二次调整。相比之下，从下往上的遍历方式比从上往下的方式少了父节点的二次调整。</li><li>最后一个非叶子节点的索引值？对于一个完全二叉树，在填满的情况下（非叶子节点都有两个子节点），每一层的元素个数是上一层的二倍，根节点数量是1，所以最后一层的节点数量，一定是之前所有层节点总数+1，所以，最后一层的第一个节点的索引，即节点总数/2（根节点索引为0），也就是第一个叶子节点，所以第一个非叶子节点的索引就是第一个叶子结点的索引-1。那么对于填不满的二叉树呢？当我们从上往下，从左往右填充二叉树的过程中，第一个叶子节点，一定是序列长度/2，所以第一个非叶子节点的索引就是arr.length / 2 -1。</li></ul></li><li>将其与末尾元素进行交换，此时末尾就为最大值。</li><li>然后将剩余n-1个元素重新构造成一个堆，这样会得到n个元素的次小值。如此反复执行，便能得到一个有序序列了。在构建大顶堆的过程中，元素的个数逐渐减少，最后就得到一个有序序列了</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    //编写一个堆排序的方法
	public static void heapSort(int arr[]) {
		//将无序序列构建成一个堆，根据升序降序需求选择大顶堆或小顶堆
		for(int i = arr.length / 2 -1; i &gt;=0; i--) {
			adjustHeap(arr, i, arr.length);
		}
		//2.将堆顶元素与末尾元素交换，将最大元素&quot;沉&quot;到数组末端
		//3.重新调整结构，使其满足堆定义，然后继续交换堆顶元素与当前末尾元素，反复执行调整+交换步骤，直到整个序列有序。
		for(int j = arr.length-1;j &gt;0; j--) {
			//交换
			int temp = arr[j];
			arr[j] = arr[0];
			arr[0] = temp;
			adjustHeap(arr, 0, j); 
		}
		
	}
	
	//将一个数组(二叉树), 调整成一个大顶堆
	/**
	 * 功能： 完成 将 以 i 对应的非叶子结点的树调整成大顶堆
	 * 举例  int arr[] = {4, 6, 8, 5, 9}; =&gt; i = 1 =&gt; adjustHeap =&gt; 得到 {4, 9, 8, 5, 6}
	 * 如果我们再次调用  adjustHeap 传入的是 i = 0 =&gt; 得到 {4, 9, 8, 5, 6} =&gt; {9,6,8,5, 4}
	 * @param arr 待调整的数组
	 * @param i 表示非叶子结点在数组中索引
	 * @param length 表示对多少个元素继续调整， length 是在逐渐的减少
	 */
	public  static void adjustHeap(int arr[], int i, int length) {
		
		int temp = arr[i];
		//1. k = i * 2 + 1 k 是 i结点的左子结点,循环找左节点，并防止溢出
		for(int k = i * 2 + 1; k &lt; length; k = k * 2 + 1) {
			if(k+1 &lt; length &amp;&amp; arr[k] &lt; arr[k+1]) {
				k++;
			}
			if(arr[k] &gt; temp) {
				arr[i] = arr[k];
				i = k; //发生交换后，子节点可能受影响，所以继续遍历子节点
			} else {
				break;//没有发生交换直接退出
			}
		}
		//当for 循环结束后，我们已经将以i 为父结点的树的最大值，放在了最顶(局部)
		arr[i] = temp;//将temp值放到之前最大值的索引的地方完成当前节点和最大值的交换
	}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-4-霍夫曼树" tabindex="-1"><a class="header-anchor" href="#_10-4-霍夫曼树"><span>10.4. 霍夫曼树</span></a></h2><ul><li>给定n个权值作为n个叶子结点，构造的带权路径长度(wpl)达到最小的二叉树，称为为最优二叉树或霍夫曼树(Huffman Tree), 带权路径长度最短的树，权值较大的结点离根较近。</li><li>路径和路径长度：在一棵树中，从一个结点往下可以达到的孩子或孙子结点之间的通路，称为路径。通路中分支的数目称为路径长度。若规定根结点的层数为1，则从根结点到第L层结点的路径长度为L-1</li><li>结点的权及带权路径长度：若将树中结点赋给一个有着某种含义的数值，则这个数值称为该结点的权。结点的带权路径长度为：从根结点到该结点之间的路径长度与该结点的权的乘积</li><li>树的带权路径长度：树的带权路径长度规定为所有叶子结点的带权路径长度之和，记为WPL(weighted path length),权值越大的结点离根结点越近的二叉树才是最优二叉树。</li><li>WPL最小的就是赫夫曼树</li><li>构成赫夫曼树的步骤： <ul><li>1.从小到大进行排序, 将每一个数据，每个数据都是一个节点 ， 每个节点可以看成是一颗最简单的二叉树</li><li>2.取出根节点权值最小的两颗二叉树</li><li>3.组成一颗新的二叉树, 该新的二叉树的根节点的权值是前面两颗二叉树根节点权值的和</li><li>4.再将这颗新的二叉树，以根节点的权值大小再次排序， 不断重复1-2-3-4的步骤，直到数列中，所有的数据都被处理，就得到一颗赫夫曼树</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/**
* @param arr 需要创建成哈夫曼树的数组
* @return 创建好后的赫夫曼树的root结点
*/
public static Node createHuffmanTree(int[] arr) {

	List&lt;Node&gt; nodes = new ArrayList&lt;Node&gt;();
	for (int value : arr) {
		nodes.add(new Node(value));
	}
	
	while(nodes.size() &gt; 1) {
		//排序 从小到大 
		Collections.sort(nodes);
		
		//取出根节点权值最小的两颗二叉树 
		//(1) 取出权值最小的结点（二叉树）
		Node leftNode = nodes.get(0);
		//(2) 取出权值第二小的结点（二叉树）
		Node rightNode = nodes.get(1);
		
		//(3)构建一颗新的二叉树
		Node parent = new Node(leftNode.value + rightNode.value);
		parent.left = leftNode;
		parent.right = rightNode;
		
		//(4)从ArrayList删除处理过的二叉树
		nodes.remove(leftNode);
		nodes.remove(rightNode);
		//(5)将parent加入到nodes
		nodes.add(parent);
	}
	
	//返回哈夫曼树的root结点
	return nodes.get(0);
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-5-霍夫曼编码" tabindex="-1"><a class="header-anchor" href="#_10-5-霍夫曼编码"><span>10.5. 霍夫曼编码</span></a></h2><ul><li>赫夫曼编码也翻译为哈夫曼编码(Huffman Coding)，又称霍夫曼编码，是一种编码方式, 属于一种程序算法</li><li>赫夫曼编码是赫哈夫曼树在电讯通信中的经典的应用之一。</li><li>赫夫曼编码广泛地用于数据文件压缩。其压缩率通常在20%～90%之间</li><li>赫夫曼码是可变字长编码(VLC)的一种。Huffman于1952年提出一种编码方法，称之为最佳编码</li><li>通信领域中信息的处理方式</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>定长编码
i like like like java do you like a java       // 共40个字符(包括空格)  
105 32 108 105 107 101 32 108 105 107 101 32 108 105 107 101 32 106 97 118 
97 32 100 111 32 121 111 117 32 108 105 107 101 32 97 32 106 97 118 97  //对应Ascii码

01101001 00100000 01101100 01101001 01101011 01100101 00100000 01101100 
01101001 01101011 01100101 00100000 01101100 01101001 01101011 01100101 
00100000 01101010 01100001 01110110 01100001 00100000 01100100 01101111 
00100000 01111001 01101111 01110101 00100000 01101100 01101001 01101011 
01100101 00100000 01100001 00100000 01101010 01100001 01110110 01100001 //对应的二进制
按照二进制来传递信息，总的长度是  359   (包括空格)
在线转码 工具 ：https://www.mokuge.com/tool/asciito16/ 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>变长编码
i like like like java do you like a java       // 共40个字符(包括空格)
d:1 y:1 u:1 j:2  v:2  o:2  l:4  k:4  e:4 i:5  a:5   :9  // 各个字符对应的个数
0=  ,  1=a, 10=i, 11=e, 100=k, 101=l, 110=o, 111=v, 1000=j, 1001=u, 1010=y, 1011=d
说明：按照各个字符出现的次数进行编码，原则是出现次数越多的，则编码越小，比如 空格出现了9 次， 编码为0 ,其它依次类推.

按照上面给各个字符规定的编码，则我们在传输  &quot;i like like like java do you like a java&quot; 数据时，编码就是 10010110100...  
字符的编码都不能是其他字符编码的前缀，符合此要求的编码叫做前缀编码， 即不能匹配到重复的编码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>赫夫曼编码
i like like like java do you like a java       // 共40个字符(包括空格)
d:1 y:1 u:1 j:2  v:2  o:2  l:4  k:4  e:4 i:5  a:5   :9  // 各个字符对应的个数
按照上面字符出现的次数构建一颗赫夫曼树, 次数作为权值.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	public class HuffmanCode {

		public static void main(String[] args) {
			
			//测试压缩文件
	//		String srcFile = &quot;d://Uninstall.xml&quot;;
	//		String dstFile = &quot;d://Uninstall.zip&quot;;
	//		
	//		zipFile(srcFile, dstFile);
	//		System.out.println(&quot;压缩文件ok~~&quot;);
			
			
			//测试解压文件
			String zipFile = &quot;d://Uninstall.zip&quot;;
			String dstFile = &quot;d://Uninstall2.xml&quot;;
			unZipFile(zipFile, dstFile);
			System.out.println(&quot;解压成功!&quot;);
			
			/*
			String content = &quot;i like like like java do you like a java&quot;;
			byte[] contentBytes = content.getBytes();
			System.out.println(contentBytes.length); //40
			
			byte[] huffmanCodesBytes= huffmanZip(contentBytes);
			System.out.println(&quot;压缩后的结果是:&quot; + Arrays.toString(huffmanCodesBytes) + &quot; 长度= &quot; + huffmanCodesBytes.length);
			
			
			//测试一把byteToBitString方法
			//System.out.println(byteToBitString((byte)1));
			byte[] sourceBytes = decode(huffmanCodes, huffmanCodesBytes);
			
			System.out.println(&quot;原来的字符串=&quot; + new String(sourceBytes)); // &quot;i like like like java do you like a java&quot;
			*/
			
			
			
			//如何将 数据进行解压(解码)  
			//分步过程
			/*
			List&lt;Node&gt; nodes = getNodes(contentBytes);
			System.out.println(&quot;nodes=&quot; + nodes);
			
			//测试一把，创建的赫夫曼树
			System.out.println(&quot;赫夫曼树&quot;);
			Node huffmanTreeRoot = createHuffmanTree(nodes);
			System.out.println(&quot;前序遍历&quot;);
			huffmanTreeRoot.preOrder();
			
			//测试一把是否生成了对应的赫夫曼编码
			Map&lt;Byte, String&gt; huffmanCodes = getCodes(huffmanTreeRoot);
			System.out.println(&quot;~生成的赫夫曼编码表= &quot; + huffmanCodes);
			
			//测试
			byte[] huffmanCodeBytes = zip(contentBytes, huffmanCodes);
			System.out.println(&quot;huffmanCodeBytes=&quot; + Arrays.toString(huffmanCodeBytes));//17
			
			//发送huffmanCodeBytes 数组 */
			
			
		}
		
		//编写一个方法，完成对压缩文件的解压
		/**
		* 
		* @param zipFile 准备解压的文件
		* @param dstFile 将文件解压到哪个路径
		*/
		public static void unZipFile(String zipFile, String dstFile) {
			
			//定义文件输入流
			InputStream is = null;
			//定义一个对象输入流
			ObjectInputStream ois = null;
			//定义文件的输出流
			OutputStream os = null;
			try {
				//创建文件输入流
				is = new FileInputStream(zipFile);
				//创建一个和  is关联的对象输入流
				ois = new ObjectInputStream(is);
				//读取byte数组  huffmanBytes
				byte[] huffmanBytes = (byte[])ois.readObject();
				//读取赫夫曼编码表
				Map&lt;Byte,String&gt; huffmanCodes = (Map&lt;Byte,String&gt;)ois.readObject();
				
				//解码
				byte[] bytes = decode(huffmanCodes, huffmanBytes);
				//将bytes 数组写入到目标文件
				os = new FileOutputStream(dstFile);
				//写数据到 dstFile 文件
				os.write(bytes);
			} catch (Exception e) {
				// TODO: handle exception
				System.out.println(e.getMessage());
			} finally {
				
				try {
					os.close();
					ois.close();
					is.close();
				} catch (Exception e2) {
					// TODO: handle exception
					System.out.println(e2.getMessage());
				}
				
			}
		}
		
		//编写方法，将一个文件进行压缩
		/**
		* 
		* @param srcFile 你传入的希望压缩的文件的全路径
		* @param dstFile 我们压缩后将压缩文件放到哪个目录
		*/
		public static void zipFile(String srcFile, String dstFile) {
			
			//创建输出流
			OutputStream os = null;
			ObjectOutputStream oos = null;
			//创建文件的输入流
			FileInputStream is = null;
			try {
				//创建文件的输入流
				is = new FileInputStream(srcFile);
				//创建一个和源文件大小一样的byte[]
				byte[] b = new byte[is.available()];
				//读取文件
				is.read(b);
				//直接对源文件压缩
				byte[] huffmanBytes = huffmanZip(b);
				//创建文件的输出流, 存放压缩文件
				os = new FileOutputStream(dstFile);
				//创建一个和文件输出流关联的ObjectOutputStream
				oos = new ObjectOutputStream(os);
				//把 赫夫曼编码后的字节数组写入压缩文件
				oos.writeObject(huffmanBytes); //我们是把
				//这里我们以对象流的方式写入 赫夫曼编码，是为了以后我们恢复源文件时使用
				//注意一定要把赫夫曼编码 写入压缩文件
				oos.writeObject(huffmanCodes);
				
				
			}catch (Exception e) {
				// TODO: handle exception
				System.out.println(e.getMessage());
			}finally {
				try {
					is.close();
					oos.close();
					os.close();
				}catch (Exception e) {
					// TODO: handle exception
					System.out.println(e.getMessage());
				}
			}
			
		}
		
		//完成数据的解压
		//思路
		//1. 将huffmanCodeBytes [-88, -65, -56, -65, -56, -65, -55, 77, -57, 6, -24, -14, -117, -4, -60, -90, 28]
		//   重写先转成 赫夫曼编码对应的二进制的字符串 &quot;1010100010111...&quot;
		//2.  赫夫曼编码对应的二进制的字符串 &quot;1010100010111...&quot; =》 对照 赫夫曼编码  =》 &quot;i like like like \vjava do you like a java&quot;
		
		
		//编写一个方法，完成对压缩数据的解码
		/**
		* 
		* @param huffmanCodes 赫夫曼编码表 map
		* @param huffmanBytes 赫夫曼编码得到的字节数组
		* @return 就是原来的字符串对应的数组
		*/
		private static byte[] decode(Map&lt;Byte,String&gt; huffmanCodes, byte[] huffmanBytes) {
			
			//1. 先得到 huffmanBytes 对应的 二进制的字符串 ， 形式 1010100010111...
			StringBuilder stringBuilder = new StringBuilder();
			//将byte数组转成二进制的字符串
			for(int i = 0; i &lt; huffmanBytes.length; i++) {
				byte b = huffmanBytes[i];
				//判断是不是最后一个字节
				boolean flag = (i == huffmanBytes.length - 1);
				stringBuilder.append(byteToBitString(!flag, b));
			}
			//把字符串安装指定的赫夫曼编码进行解码
			//把赫夫曼编码表进行调换，因为反向查询 a-&gt;100 100-&gt;a
			Map&lt;String, Byte&gt;  map = new HashMap&lt;String,Byte&gt;();
			for(Map.Entry&lt;Byte, String&gt; entry: huffmanCodes.entrySet()) {
				map.put(entry.getValue(), entry.getKey());
			}
			
			//创建要给集合，存放byte
			List&lt;Byte&gt; list = new ArrayList&lt;&gt;();
			//i 可以理解成就是索引,扫描 stringBuilder 
			for(int  i = 0; i &lt; stringBuilder.length(); ) {
				int count = 1; // 小的计数器
				boolean flag = true;
				Byte b = null;
				
				while(flag) {
					//1010100010111...
					//递增的取出 key 1 
					String key = stringBuilder.substring(i, i+count);//i 不动，让count移动，指定匹配到一个字符
					b = map.get(key);
					if(b == null) {//说明没有匹配到
						count++;
					}else {
						//匹配到
						flag = false;
					}
				}
				list.add(b);
				i += count;//i 直接移动到 count	
			}
			//当for循环结束后，我们list中就存放了所有的字符  &quot;i like like like java do you like a java&quot;
			//把list 中的数据放入到byte[] 并返回
			byte b[] = new byte[list.size()];
			for(int i = 0;i &lt; b.length; i++) {
				b[i] = list.get(i);
			}
			return b;
			
		}
		
		/**
		* 将一个byte 转成一个二进制的字符串, 如果看不懂，可以参考我讲的Java基础 二进制的原码，反码，补码
		* @param b 传入的 byte
		* @param flag 标志是否需要补高位如果是true ，表示需要补高位，如果是false表示不补, 如果是最后一个字节，无需补高位
		* @return 是该b 对应的二进制的字符串，（注意是按补码返回）
		*/
		private static String byteToBitString(boolean flag, byte b) {
			//使用变量保存 b
			int temp = b; //将 b 转成 int
			//如果是正数我们还存在补高位
			if(flag) {
				temp |= 256; //按位与 256  1 0000 0000  | 0000 0001 =&gt; 1 0000 0001
			}
			String str = Integer.toBinaryString(temp); //返回的是temp对应的二进制的补码
			if(flag) {
				return str.substring(str.length() - 8);
			} else {
				return str;
			}
		}
		
		//使用一个方法，将前面的方法封装起来，便于我们的调用.
		/**
		* 
		* @param bytes 原始的字符串对应的字节数组
		* @return 是经过 赫夫曼编码处理后的字节数组(压缩后的数组)
		*/
		private static byte[] huffmanZip(byte[] bytes) {
			List&lt;Node&gt; nodes = getNodes(bytes);
			//根据 nodes 创建的赫夫曼树
			Node huffmanTreeRoot = createHuffmanTree(nodes);
			//对应的赫夫曼编码(根据 赫夫曼树)
			Map&lt;Byte, String&gt; huffmanCodes = getCodes(huffmanTreeRoot);
			//根据生成的赫夫曼编码，压缩得到压缩后的赫夫曼编码字节数组
			byte[] huffmanCodeBytes = zip(bytes, huffmanCodes);
			return huffmanCodeBytes;
		}
		
		
		//编写一个方法，将字符串对应的byte[] 数组，通过生成的赫夫曼编码表，返回一个赫夫曼编码 压缩后的byte[]
		/**
		* 
		* @param bytes 这时原始的字符串对应的 byte[]
		* @param huffmanCodes 生成的赫夫曼编码map
		* @return 返回赫夫曼编码处理后的 byte[] 
		* 举例： String content = &quot;i like like like java do you like a java&quot;; =》 byte[] contentBytes = content.getBytes();
		* 返回的是 字符串 &quot;1010100010111111110010001011111111001000101111111100100101001101110001110000011011101000111100101000101111111100110001001010011011100&quot;
		* =&gt; 对应的 byte[] huffmanCodeBytes  ，即 8位对应一个 byte,放入到 huffmanCodeBytes
		* huffmanCodeBytes[0] =  10101000(补码) =&gt; byte  [推导  10101000=&gt; 10101000 - 1 =&gt; 10100111(反码)=&gt; 11011000= -88 ]
		* huffmanCodeBytes[1] = -88
		*/
		private static byte[] zip(byte[] bytes, Map&lt;Byte, String&gt; huffmanCodes) {
			
			//1.利用 huffmanCodes 将  bytes 转成  赫夫曼编码对应的字符串
			StringBuilder stringBuilder = new StringBuilder();
			//遍历bytes 数组 
			for(byte b: bytes) {
				stringBuilder.append(huffmanCodes.get(b));
			}
			
			//System.out.println(&quot;测试 stringBuilder~~~=&quot; + stringBuilder.toString());
			
			//将 &quot;1010100010111111110...&quot; 转成 byte[]
			
			//统计返回  byte[] huffmanCodeBytes 长度
			//一句话 int len = (stringBuilder.length() + 7) / 8;
			int len;
			if(stringBuilder.length() % 8 == 0) {
				len = stringBuilder.length() / 8;
			} else {
				len = stringBuilder.length() / 8 + 1;
			}
			//创建 存储压缩后的 byte数组
			byte[] huffmanCodeBytes = new byte[len];
			int index = 0;//记录是第几个byte
			for (int i = 0; i &lt; stringBuilder.length(); i += 8) { //因为是每8位对应一个byte,所以步长 +8
					String strByte;
					if(i+8 &gt; stringBuilder.length()) {//不够8位
						strByte = stringBuilder.substring(i);
					}else{
						strByte = stringBuilder.substring(i, i + 8);
					}	
					//将strByte 转成一个byte,放入到 huffmanCodeBytes
					huffmanCodeBytes[index] = (byte)Integer.parseInt(strByte, 2);
					index++;
			}
			return huffmanCodeBytes;
		}
		
		//生成赫夫曼树对应的赫夫曼编码
		//思路:
		//1. 将赫夫曼编码表存放在 Map&lt;Byte,String&gt; 形式
		//   生成的赫夫曼编码表{32=01, 97=100, 100=11000, 117=11001, 101=1110, 118=11011, 105=101, 121=11010, 106=0010, 107=1111, 108=000, 111=0011}
		static Map&lt;Byte, String&gt; huffmanCodes = new HashMap&lt;Byte,String&gt;();
		//2. 在生成赫夫曼编码表示，需要去拼接路径, 定义一个StringBuilder 存储某个叶子结点的路径
		static StringBuilder stringBuilder = new StringBuilder();
		
		
		//为了调用方便，我们重载 getCodes
		private static Map&lt;Byte, String&gt; getCodes(Node root) {
			if(root == null) {
				return null;
			}
			//处理root的左子树
			getCodes(root.left, &quot;0&quot;, stringBuilder);
			//处理root的右子树
			getCodes(root.right, &quot;1&quot;, stringBuilder);
			return huffmanCodes;
		}
		
		/**
		* 功能：将传入的node结点的所有叶子结点的赫夫曼编码得到，并放入到huffmanCodes集合
		* @param node  传入结点
		* @param code  路径： 左子结点是 0, 右子结点 1
		* @param stringBuilder 用于拼接路径
		*/
		private static void getCodes(Node node, String code, StringBuilder stringBuilder) {
			StringBuilder stringBuilder2 = new StringBuilder(stringBuilder);
			//将code 加入到 stringBuilder2
			stringBuilder2.append(code);
			if(node != null) { //如果node == null不处理
				//判断当前node 是叶子结点还是非叶子结点
				if(node.data == null) { //非叶子结点
					//递归处理
					//向左递归
					getCodes(node.left, &quot;0&quot;, stringBuilder2);
					//向右递归
					getCodes(node.right, &quot;1&quot;, stringBuilder2);
				} else { //说明是一个叶子结点
					//就表示找到某个叶子结点的最后
					huffmanCodes.put(node.data, stringBuilder2.toString());
				}
			}
		}
		
		//前序遍历的方法
		private static void preOrder(Node root) {
			if(root != null) {
				root.preOrder();
			}else {
				System.out.println(&quot;赫夫曼树为空&quot;);
			}
		}
		
		/**
		* 
		* @param bytes 接收字节数组
		* @return 返回的就是 List 形式   [Node[date=97 ,weight = 5], Node[]date=32,weight = 9]......],
		*/
		private static List&lt;Node&gt; getNodes(byte[] bytes) {
			
			//1创建一个ArrayList
			ArrayList&lt;Node&gt; nodes = new ArrayList&lt;Node&gt;();
			
			//遍历 bytes , 统计 每一个byte出现的次数-&gt;map[key,value]
			Map&lt;Byte, Integer&gt; counts = new HashMap&lt;&gt;();
			for (byte b : bytes) {
				Integer count = counts.get(b);
				if (count == null) { // Map还没有这个字符数据,第一次
					counts.put(b, 1);
				} else {
					counts.put(b, count + 1);
				}
			}
			
			//把每一个键值对转成一个Node 对象，并加入到nodes集合
			//遍历map
			for(Map.Entry&lt;Byte, Integer&gt; entry: counts.entrySet()) {
				nodes.add(new Node(entry.getKey(), entry.getValue()));
			}
			return nodes;
			
		}
		
		//可以通过List 创建对应的赫夫曼树
		private static Node createHuffmanTree(List&lt;Node&gt; nodes) {
			
			while(nodes.size() &gt; 1) {
				//排序, 从小到大
				Collections.sort(nodes);
				//取出第一颗最小的二叉树
				Node leftNode = nodes.get(0);
				//取出第二颗最小的二叉树
				Node rightNode = nodes.get(1);
				//创建一颗新的二叉树,它的根节点 没有data, 只有权值
				Node parent = new Node(null, leftNode.weight + rightNode.weight);
				parent.left = leftNode;
				parent.right = rightNode;
				
				//将已经处理的两颗二叉树从nodes删除
				nodes.remove(leftNode);
				nodes.remove(rightNode);
				//将新的二叉树，加入到nodes
				nodes.add(parent);
				
			}
			//nodes 最后的结点，就是赫夫曼树的根结点
			return nodes.get(0);
			
		}
		

	}



	//创建Node ,待数据和权值
	class Node implements Comparable&lt;Node&gt;  {
		Byte data; // 存放数据(字符)本身，比如&#39;a&#39; =&gt; 97 &#39; &#39; =&gt; 32
		int weight; //权值, 表示字符出现的次数
		Node left;//
		Node right;
		public Node(Byte data, int weight) {
			
			this.data = data;
			this.weight = weight;
		}
		@Override
		public int compareTo(Node o) {
			// 从小到大排序
			return this.weight - o.weight;
		}
		
		public String toString() {
			return &quot;Node [data = &quot; + data + &quot; weight=&quot; + weight + &quot;]&quot;;
		}
		
		//前序遍历
		public void preOrder() {
			System.out.println(this);
			if(this.left != null) {
				this.left.preOrder();
			}
			if(this.right != null) {
				this.right.preOrder();
			}
		}
	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-6-二叉排序树-bst" tabindex="-1"><a class="header-anchor" href="#_10-6-二叉排序树-bst"><span>10.6. 二叉排序树(BST)</span></a></h2><ul><li>给你一个数列 (7, 3, 10, 12, 5, 1, 9)，要求能够高效的完成对数据的查询和添加。 <ul><li>使用数组 <ul><li>数组未排序， 优点：直接在数组尾添加，速度快。 缺点：查找速度慢.</li><li>数组排序，优点：可以使用二分查找，查找速度快，缺点：为了保证数组有序，在添加新数据时，找到插入位置后，后面的数据需整体移动，速度慢。</li></ul></li><li>使用链式存储-链表 <ul><li>不管链表是否有序，查找速度都慢，添加数据速度比数组快，不需要数据整体移动。</li></ul></li><li>使用二叉排序树</li></ul></li><li>BST: (Binary Sort(Search) Tree), 对于二叉排序树的任何一个非叶子节点，要求左子节点的值比当前节点的值小，右子节点的值比当前节点的值大。特别说明：如果有相同的值，可以将该节点放在左子节点或右子节点</li><li>比如针对前面的数据 (7, 3, 10, 12, 5, 1, 9) ，对应的二叉排序树为：</li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/10cfa35d42f38c2d7e1fb.png" alt="二叉排序树.png" tabindex="0"><figcaption>二叉排序树.png</figcaption></figure><ul><li>二叉排序树删除节点的情况</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	第一种情况:删除叶子节点 (比如：2, 5, 9, 12)
	(1) 需求先去找到要删除的结点  targetNode
	(2)  找到targetNode 的 父结点 parent 
	(3)  确定 targetNode 是 parent的左子结点 还是右子结点
	(4)  根据前面的情况来对应删除
	左子结点 parent.left = null
	右子结点 parent.right = null;

	第二种情况: 删除只有一颗子树的节点 比如 1
	(1) 需求先去找到要删除的结点  targetNode
	(2)  找到targetNode 的 父结点 parent 
	(3) 确定targetNode 的子结点是左子结点还是右子结点
	(4) targetNode 是 parent 的左子结点还是右子结点
	(5) 如果targetNode 有左子结点
	5. 1 如果 targetNode 是 parent 的左子结点
	parent.left = targetNode.left;
	5.2  如果 targetNode 是 parent 的右子结点
	parent.right = targetNode.left;
	(6) 如果targetNode 有右子结点
	6.1 如果 targetNode 是 parent 的左子结点
	parent.left = targetNode.right;
	6.2 如果 targetNode 是 parent 的右子结点
	parent.right = targetNode.right

	情况三 ： 删除有两颗子树的节点. (比如：7, 3，10 )（右子树最小值删除，该节点值改为右子树最小值）
	(1) 需求先去找到要删除的结点  targetNode
	(2)  找到targetNode 的 父结点 parent 
	(3)  从targetNode 的右子树找到最小的结点(左子树最小的点)
	(4) 用一个临时变量，将 最小结点的值保存 temp
	(5)  删除该最小结点
	(6)  targetNode.value = temp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	class BinarySortTree {
		private Node root;
		public Node getRoot() {return root;}
		public Node search(int value) {
			if(root == null) {
				return null;
			} else {
				return root.search(value);
			}
		}
		public Node searchParent(int value) {
			if(root == null) {
				return null;
			} else {
				return root.searchParent(value);
			}
		}
		
		//返回以node 为根结点的二叉排序树的最小结点的值并删除该最小节点
		/**
		* @param node 传入的结点(当做二叉排序树的根结点)
		* @return 返回的 以node 为根结点的二叉排序树的最小结点的值
		*/
		public int delRightTreeMin(Node node) {
			Node target = node;
			//循环的查找左子节点，就会找到最小值
			while(target.left != null) {
				target = target.left;
			}
			//这时 target就指向了最小结点
			delNode(target.value);//删除最小结点
			return target.value;
		}
		
		//删除结点
		public void delNode(int value) {
			if(root == null) {
				return;
			}else {
				Node targetNode = search(value);
				if(targetNode == null) {
					return;
				}
				//当二叉排序树只有一个结点
				if(root.left == null &amp;&amp; root.right == null) {
					root = null;
					return;
				}
				//去找到targetNode的父结点
				Node parent = searchParent(value);
				//如果要删除的结点是叶子结点
				if(targetNode.left == null &amp;&amp; targetNode.right == null) {
					//判断targetNode 是父结点的左子结点，还是右子结点
					if(parent.left != null &amp;&amp; parent.left.value == value) { //是左子结点
						parent.left = null;
					} else if (parent.right != null &amp;&amp; parent.right.value == value) {//是由子结点
						parent.right = null;
					}
				} else if (targetNode.left != null &amp;&amp; targetNode.right != null) { //删除有两颗子树的节点
					int minVal = delRightTreeMin(targetNode.right);
					targetNode.value = minVal;
				} else { // 删除只有一颗子树的结点
					//如果要删除的结点有左子结点 
					if(targetNode.left != null) {
						if(parent != null) {
							//如果 targetNode 是 parent 的左子结点
							if(parent.left.value == value) {
								parent.left = targetNode.left;
							} else { //  targetNode 是 parent 的右子结点
								parent.right = targetNode.left;
							} 
						} else {
							root = targetNode.left;
						}
					} else { //如果要删除的结点有右子结点 
						if(parent != null) {
							//如果 targetNode 是 parent 的左子结点
							if(parent.left.value == value) {
								parent.left = targetNode.right;
							} else { //如果 targetNode 是 parent 的右子结点
								parent.right = targetNode.right;
							}
						} else {
							root = targetNode.right;
						}
					}
					
				}
				
			}
		}
		
		//添加结点的方法
		public void add(Node node) {
			if(root == null) {
				root = node;//如果root为空则直接让root指向node
			} else {
				root.add(node);
			}
		}
		//中序遍历
		public void infixOrder() {
			if(root != null) {
				root.infixOrder();
			} else {
				System.out.println(&quot;二叉排序树为空，不能遍历&quot;);
			}
		}
	}

	class Node {
		int value;
		Node left;
		Node right;
		public Node(int value) {this.value = value;}
		//toString
		public Node search(int value) {
			if(value == this.value) { //找到就是该结点
				return this;
			} else if(value &lt; this.value) {//如果查找的值小于当前结点，向左子树递归查找
				//如果左子结点为空
				if(this.left  == null) {
					return null;
				}
				return this.left.search(value);
			} else { //如果查找的值不小于当前结点，向右子树递归查找
				if(this.right == null) {
					return null;
				}
				return this.right.search(value);
			}
			
		}
		//查找要删除结点的父结点
		public Node searchParent(int value) {
			//如果当前结点就是要删除的结点的父结点，就返回
			if((this.left != null &amp;&amp; this.left.value == value) || 
					(this.right != null &amp;&amp; this.right.value == value)) {
				return this;
			} else {
				//如果查找的值小于当前结点的值, 并且当前结点的左子结点不为空
				if(value &lt; this.value &amp;&amp; this.left != null) {
					return this.left.searchParent(value); //向左子树递归查找
				} else if (value &gt;= this.value &amp;&amp; this.right != null) {
					return this.right.searchParent(value); //向右子树递归查找
				} else {
					return null; // 没有找到父结点
				}
			}
			
		}

		//递归的形式添加结点，注意需要满足二叉排序树的要求
		public void add(Node node) {
			if(node == null) {return;}
			
			if(node.value &lt; this.value) {
				if(this.left == null) {
					this.left = node;
				} else {
					this.left.add(node);
				}
			} else { 
				if(this.right == null) {
					this.right = node;
				} else {
					this.right.add(node);
				}
			}
		}
		
		//中序遍历
		public void infixOrder() {
			if(this.left != null) {
				this.left.infixOrder();
			}
			System.out.println(this);
			if(this.right != null) {
				this.right.infixOrder();
			}
		}
	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-7-平衡二叉树-avl树" tabindex="-1"><a class="header-anchor" href="#_10-7-平衡二叉树-avl树"><span>10.7. 平衡二叉树(avl树)</span></a></h2><ul><li>给你一个数列{1,2,3,4,5,6}，要求创建一颗二叉排序树(BST), 左子树全部为空，从形式上看，更像一个单链表.插入速度没有影响</li><li>查询速度明显降低(因为需要依次比较), 不能发挥BST的优势，因为每次还需要比较左子树，其查询速度比单链表还慢</li><li>解决方案-平衡二叉树(AVL)</li><li>平衡二叉树也叫平衡二叉搜索树（Self-balancing binary search tree）又被称为AVL树， 可以保证查询效率较高。它是一棵空树或它的左右两个子树的高度差的绝对值不超过1，并且左右两个子树都是一棵平衡二叉树。平衡二叉树的常用实现方法有红黑树、AVL、替罪羊树、Treap、伸展树等。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	class AVLTree {
		private Node root;
		public Node getRoot() {return root;}
		public Node search(int value) {
			if (root == null) {
				return null;
			} else {
				return root.search(value);
			}
		}
		public Node searchParent(int value) {
			if (root == null) {
				return null;
			} else {
				return root.searchParent(value);
			}
		}

		// 返回的以node为根结点的二叉排序树的最小结点的值并删除该节点
		public int delRightTreeMin(Node node) {
			Node target = node;
			while (target.left != null) {
				target = target.left;
			}
			// 这时 target就指向了最小结点
			// 删除最小结点
			delNode(target.value);
			return target.value;
		}

		public void delNode(int value) {
			if (root == null) {
				return;
			} else {
				// 1.需求先去找到要删除的结点 targetNode
				Node targetNode = search(value);
				// 如果没有找到要删除的结点
				if (targetNode == null) {
					return;
				}
				// 如果我们发现当前这颗二叉排序树只有一个结点
				if (root.left == null &amp;&amp; root.right == null) {
					root = null;
					return;
				}

				// 去找到targetNode的父结点
				Node parent = searchParent(value);
				// 如果要删除的结点是叶子结点
				if (targetNode.left == null &amp;&amp; targetNode.right == null) {
					// 判断targetNode 是父结点的左子结点，还是右子结点
					if (parent.left != null &amp;&amp; parent.left.value == value) { // 是左子结点
						parent.left = null;
					} else if (parent.right != null &amp;&amp; parent.right.value == value) {// 是由子结点
						parent.right = null;
					}
				} else if (targetNode.left != null &amp;&amp; targetNode.right != null) { // 删除有两颗子树的节点
					int minVal = delRightTreeMin(targetNode.right);
					targetNode.value = minVal;

				} else { // 删除只有一颗子树的结点
					// 如果要删除的结点有左子结点
					if (targetNode.left != null) {
						if (parent != null) {
							// 如果 targetNode 是 parent 的左子结点
							if (parent.left.value == value) {
								parent.left = targetNode.left;
							} else { // targetNode 是 parent 的右子结点
								parent.right = targetNode.left;
							}
						} else {
							root = targetNode.left;
						}
					} else { // 如果要删除的结点有右子结点
						if (parent != null) {
							// 如果 targetNode 是 parent 的左子结点
							if (parent.left.value == value) {
								parent.left = targetNode.right;
							} else { // 如果 targetNode 是 parent 的右子结点
								parent.right = targetNode.right;
							}
						} else {
							root = targetNode.right;
						}
					}

				}

			}
		}

		// 添加结点的方法
		public void add(Node node) {
			if (root == null) {
				root = node;// 如果root为空则直接让root指向node
			} else {
				root.add(node);
			}
		}

		// 中序遍历
		public void infixOrder() {
			if (root != null) {
				root.infixOrder();
			} else {
				System.out.println(&quot;二叉排序树为空，不能遍历&quot;);
			}
		}
	}

	// 创建Node结点
	class Node {
		int value;
		Node left;
		Node right;
		public Node(int value) {this.value = value;}
		//toString()
		// 返回左子树的高度
		public int leftHeight() {
			if (left == null) {return 0;}
			return left.height();
		}
		// 返回右子树的高度
		public int rightHeight() {
			if (right == null) {return 0;}
			return right.height();
		}

		// 返回 以该结点为根结点的树的高度
		public int height() {
			return Math.max(left == null ? 0 : left.height(), right == null ? 0 : right.height()) + 1;
		}
		
		//左旋转方法
		private void leftRotate() {
			//创建新的结点，以当前根结点的值
			Node newNode = new Node(value);
			//把新的结点的左子树设置成当前结点的左子树
			newNode.left = left;
			//把新的结点的右子树设置成带你过去结点的右子树的左子树
			newNode.right = right.left;
			//把当前结点的值替换成右子结点的值
			value = right.value;
			//把当前结点的右子树设置成当前结点右子树的右子树
			right = right.right;
			//把当前结点的左子树(左子结点)设置成新的结点
			left = newNode;
		}
		
		//右旋转
		private void rightRotate() {
			Node newNode = new Node(value);
			newNode.right = right;
			newNode.left = left.right;
			value = left.value;
			left = left.left;
			right = newNode;
		}

		// 查找要删除的结点
		public Node search(int value) {
			if (value == this.value) { // 找到就是该结点
				return this;
			} else if (value &lt; this.value) {// 如果查找的值小于当前结点，向左子树递归查找
				// 如果左子结点为空
				if (this.left == null) {
					return null;
				}
				return this.left.search(value);
			} else { // 如果查找的值不小于当前结点，向右子树递归查找
				if (this.right == null) {
					return null;
				}
				return this.right.search(value);
			}

		}

		// 查找要删除结点的父结点
		public Node searchParent(int value) {
			// 如果当前结点就是要删除的结点的父结点，就返回
			if ((this.left != null &amp;&amp; this.left.value == value) || (this.right != null &amp;&amp; this.right.value == value)) {
				return this;
			} else {
				// 如果查找的值小于当前结点的值, 并且当前结点的左子结点不为空
				if (value &lt; this.value &amp;&amp; this.left != null) {
					return this.left.searchParent(value); // 向左子树递归查找
				} else if (value &gt;= this.value &amp;&amp; this.right != null) {
					return this.right.searchParent(value); // 向右子树递归查找
				} else {
					return null; // 没有找到父结点
				}
			}

		}

		// 添加结点的方法
		// 递归的形式添加结点，注意需要满足二叉排序树的要求
		public void add(Node node) {
			if (node == null) {
				return;
			}

			// 判断传入的结点的值，和当前子树的根结点的值关系
			if (node.value &lt; this.value) {
				// 如果当前结点左子结点为null
				if (this.left == null) {
					this.left = node;
				} else {
					// 递归的向左子树添加
					this.left.add(node);
				}
			} else { // 添加的结点的值大于 当前结点的值
				if (this.right == null) {
					this.right = node;
				} else {
					// 递归的向右子树添加
					this.right.add(node);
				}

			}
			
			//当添加完一个结点后，如果: (右子树的高度-左子树的高度) &gt; 1 , 左旋转
			if(rightHeight() - leftHeight() &gt; 1) {
				//如果它的右子树的左子树的高度大于它的右子树的右子树的高度
				if(right != null &amp;&amp; right.leftHeight() &gt; right.rightHeight()) {
					//先对右子结点进行右旋转
					right.rightRotate();
					//然后在对当前结点进行左旋转
					leftRotate(); //左旋转..
				} else {
					//直接进行左旋转即可
					leftRotate();
				}
				return ; //必须要!!!
			}
			
			//当添加完一个结点后，如果 (左子树的高度 - 右子树的高度) &gt; 1, 右旋转
			if(leftHeight() - rightHeight() &gt; 1) {
				//如果它的左子树的右子树高度大于它的左子树的高度
				if(left != null &amp;&amp; left.rightHeight() &gt; left.leftHeight()) {
					//先对当前结点的左结点(左子树)-&gt;左旋转
					left.leftRotate();
					//再对当前结点进行右旋转
					rightRotate();
				} else {
					//直接进行右旋转即可
					rightRotate();
				}
			}
		}

		// 中序遍历
		public void infixOrder() {
			if (this.left != null) {
				this.left.infixOrder();
			}
			System.out.println(this);
			if (this.right != null) {
				this.right.infixOrder();
			}
		}
	}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-8-b树" tabindex="-1"><a class="header-anchor" href="#_10-8-b树"><span>10.8. B树</span></a></h2><ul><li>二叉树需要加载到内存的，如果二叉树的节点很多(比如1亿)， 就存在如下问题: <ul><li>在构建二叉树时，需要多次进行i/o操作(海量数据存在数据库或文件中)，节点海量，构建二叉树时，速度有影响</li><li>节点海量，也会造成二叉树的高度很大，会降低操作速度.</li></ul></li><li>多叉树 <ul><li>在二叉树中，每个节点有数据项，最多有两个子节点。如果允许每个节点可以有更多的数据项和更多的子节点，就是多叉树（multiway tree）</li><li>2-3树，2-3-4树就是多叉树，多叉树通过重新组织节点，减少树的高度，能对二叉树进行优化。</li></ul></li><li>B树 <ul><li>B树通过重新组织节点，降低树的高度，并且减少i/o读写次数来提升效率。</li><li>文件系统及数据库系统的设计者利用了磁盘预读原理，将一个节点的大小设为等于一个页(页得大小通常为4k)，这样每个节点只需要一次I/O就可以完全载入</li><li>将树的度M设置为1024，在600亿个元素中最多只需要4次I/O操作就可以读取到想要的元素, B树(B+)广泛应用于文件存储系统以及数据库系统中</li></ul></li><li>2-3树(最简单的B树结构) <ul><li>由二节点和三节点构成的树，所有叶子节点都在同一层.(只要是B树都满足这个条件)</li><li>有两个子节点的节点叫二节点，二节点要么没有子节点，要么有两个子节点.</li><li>有三个子节点的节点叫三节点，三节点要么没有子节点，要么有三个子节点.</li><li>当按照规则插入一个数到某个节点时，不能满足上面三个要求，就需要拆，先向上拆，如果上层满，则拆本层，拆后仍然需要满足上面3个条件。</li><li>三节点的子树的值大小遵守(BST 二叉排序树)的规则，即左子树的值都小于三节点的第一个值，中间子树的值都介于三节点的第一个值和第二个值。右子树的值，都大于三节点的第二个值.</li></ul></li><li>B树(B-树)的说明: <ul><li>B树的阶：节点的最多子节点个数。比如2-3树的阶是3，2-3-4树的阶是4</li><li>B树的搜索，从根结点开始，对结点内的关键字（有序）序列进行二分查找，如果命中则结束，否则进入查询关键字所属范围的儿子结点；重复，直到所对应的儿子指针为空，或已经是叶子结点</li><li>关键字集合分布在整颗树中, 即叶子节点和非叶子节点都存放数据.</li><li>搜索有可能在非叶子结点结束</li><li>其搜索性能等价于在关键字全集内做一次二分查找</li></ul></li><li>B+树 <ul><li>B+树是B树的变体，也是一种多路搜索树。</li><li>B+树的搜索与B树也基本相同，区别是B+树只有达到叶子结点才命中（B树可以在非叶子结点命中），其性能也等价于在关键字全集做一次二分查找</li><li>所有关键字都出现在叶子结点的链表中（即数据只能在叶子节点【也叫稠密索引】），且链表中的关键字(数据)恰好是有序的。</li><li>非叶子结点相当于是叶子结点的索引（稀疏索引），叶子结点相当于是存储（关键字）数据的数据层</li><li>更适合文件索引系统</li><li>B树和B+树各有自己的应用场景，不能说B+树完全比B树好，反之亦然.</li></ul></li><li>B*树 <ul><li>B<em>树是B+树的变体，在B+树的非根和非叶子结点再增加指向兄弟的指针。B</em>树分配新结点的概率比B+树要低，空间使用率更高</li><li>B*树定义了非叶子结点关键字个数至少为(2/3)*M，即块的最低使用率为2/3，而B+树的块的最低使用率为B+树的1/2。</li></ul></li></ul><h1 id="_11-图" tabindex="-1"><a class="header-anchor" href="#_11-图"><span>11. 图</span></a></h1><ul><li><p>产生图的原因</p><ul><li>线性表局限于一个直接前驱和一个直接后继的关系</li><li>树也只能有一个直接前驱也就是父节点</li><li>当我们需要表示多对多的关系时， 就用到了图</li></ul></li><li><p>图的相关介绍<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/84e07fa83ecd1eaab1f79.png" alt="图的介绍1.png"><br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/187b476f84c465f1adbc0.png" alt="图的介绍2.png"></p></li><li><p>图的表达方式</p></li><li><p>二维数组表示（邻接矩阵）；</p><ul><li>邻接矩阵:是表示图形中顶点之间相邻关系的矩阵，对于n个顶点的图而言，矩阵是的row和col表示的是1....n个点。其中1是表示两个点能连通</li></ul></li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/85065fc195f0e6515c7c5.png" alt="邻接矩阵.png" tabindex="0"><figcaption>邻接矩阵.png</figcaption></figure><ul><li>链表表示（邻接表） <ul><li>邻接矩阵需要为每个顶点都分配n个边的空间，其实有很多边都是不存在,会造成空间的一定损失.</li><li>邻接表的实现只关心存在的边，不关心不存在的边。因此没有空间浪费，邻接表由数组+链表组成</li></ul></li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/ccf39801402e880fc4abb.png" alt="邻接表.png" tabindex="0"><figcaption>邻接表.png</figcaption></figure><ul><li>图遍历介绍 <ul><li>所谓图的遍历，即是对结点的访问。一个图有那么多个结点，如何遍历这些结点，需要特定策略，</li><li>一般有两种访问策略: (1)深度优先遍历 (2)广度优先遍历</li></ul></li></ul><h2 id="_11-1-深度优先遍历基本思想" tabindex="-1"><a class="header-anchor" href="#_11-1-深度优先遍历基本思想"><span>11.1. 深度优先遍历基本思想</span></a></h2><ul><li>图的深度优先搜索(Depth First Search) 。 <ul><li>深度优先遍历，从初始访问结点出发，初始访问结点可能有多个邻接结点，深度优先遍历的策略就是首先访问第一个邻接结点，然后再以这个被访问的邻接结点作为初始结点，访问它的第一个邻接结点，</li><li>可以这样理解：每次都在访问完当前结点后首先访问当前结点的第一个邻接结点。这样的访问策略是优先往纵向挖掘深入，而不是对一个结点的所有邻接结点进行横向访问。显然，深度优先搜索是一个递归的过程</li></ul></li><li>深度优先遍历算法步骤 <ul><li>1.访问初始结点v，并标记结点v为已访问。</li><li>2.查找结点v的第一个邻接结点w。</li><li>3,若w存在，则继续执行4，如果w不存在，则回到第1步，将从v的下一个结点继续。</li><li>4.若w未被访问，对w进行深度优先遍历递归（即把w当做另一个v，然后进行步骤123）。</li><li>5.查找结点v的w邻接结点的下一个邻接结点，转到步骤3。</li></ul></li></ul><h2 id="_11-2-广度优先遍历基本思想" tabindex="-1"><a class="header-anchor" href="#_11-2-广度优先遍历基本思想"><span>11.2. 广度优先遍历基本思想</span></a></h2><ul><li><p>图的广度优先搜索(Broad First Search) 。</p><ul><li>类似于一个分层搜索的过程，广度优先遍历需要使用一个队列以保持访问过的结点的顺序，以便按这个顺序来访问这些结点的邻接结点</li></ul></li><li><p>广度优先遍历算法步骤</p><ul><li>1.访问初始结点v并标记结点v为已访问。</li><li>2.结点v入队列</li><li>3.当队列非空时，继续执行，否则算法结束。</li><li>4.出队列，取得队头结点u。</li><li>5.查找结点u的第一个邻接结点w。</li><li>6.若结点u的邻接结点w不存在，则转到步骤3；否则循环执行以下三个步骤： <ul><li>6.1 若结点w尚未被访问，则访问结点w并标记为已访问。</li><li>6.2 结点w入队列</li><li>6.3 查找结点u的继w邻接结点后的下一个邻接结点w，转到步骤6。</li></ul></li></ul></li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/3885cc6d40908c001d40d.png" alt="图的广度优先遍历.png" tabindex="0"><figcaption>图的广度优先遍历.png</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class Graph {

	private ArrayList&lt;String&gt; vertexList; //存储顶点集合
	private int[][] edges; //存储图对应的邻结矩阵
	private int numOfEdges; //表示边的数目
	private boolean[] isVisited;//记录某个结点是否被访问
	
	public static void main(String[] args) {
		int n = 8;  //结点的个数
		//String Vertexs[] = {&quot;A&quot;, &quot;B&quot;, &quot;C&quot;, &quot;D&quot;, &quot;E&quot;};
		String Vertexs[] = {&quot;1&quot;, &quot;2&quot;, &quot;3&quot;, &quot;4&quot;, &quot;5&quot;, &quot;6&quot;, &quot;7&quot;, &quot;8&quot;};
		
		Graph graph = new Graph(n);
		for(String vertex: Vertexs) {
			graph.insertVertex(vertex);
		}
		
		//更新边的关系
		graph.insertEdge(0, 1, 1);//1-&gt;2
		graph.insertEdge(0, 2, 1);//1-&gt;3
		graph.insertEdge(1, 3, 1);//2-&gt;4
		graph.insertEdge(1, 4, 1);//2-&gt;5
		graph.insertEdge(3, 7, 1);//4-&gt;8
		graph.insertEdge(4, 7, 1);//5-&gt;8
		graph.insertEdge(2, 5, 1);//3-&gt;6
		graph.insertEdge(2, 6, 1);//3-&gt;7
		graph.insertEdge(5, 6, 1);//6-&gt;7

		graph.showGraph();
		
		System.out.println(&quot;深度遍历&quot;);
		graph.dfs(); // A-&gt;B-&gt;C-&gt;D-&gt;E [1-&gt;2-&gt;4-&gt;8-&gt;5-&gt;3-&gt;6-&gt;7]
		System.out.println(&quot;广度优先!&quot;);
		graph.bfs(); // A-&gt;B-&gt;C-&gt;D-E [1-&gt;2-&gt;3-&gt;4-&gt;5-&gt;6-&gt;7-&gt;8]
		
	}
	
	public Graph(int n) {
		edges = new int[n][n];
		vertexList = new ArrayList&lt;String&gt;(n);
		numOfEdges = 0;
	}
	
	//得到第一个邻接结点的下标 w 
	public int getFirstNeighbor(int index) {
		for(int j = 0; j &lt; vertexList.size(); j++) {
			if(edges[index][j] &gt; 0) {
				return j;
			}
		}
		return -1;
	}
	//根据前一个邻接结点的下标V2来获取下一个邻接结点
	public int getNextNeighbor(int v1, int v2) {
		for(int j = v2 + 1; j &lt; vertexList.size(); j++) {
			if(edges[v1][j] &gt; 0) {
				return j;
			}
		}
		return -1;
	}
	
	private void dfs(boolean[] isVisited, int i) {
		//System.out.print(getValueByIndex(i) + &quot;-&gt;&quot;);
		isVisited[i] = true;
		//查找结点i的第一个邻接结点w
		int w = getFirstNeighbor(i);
		while(w != -1) {//说明有
			if(!isVisited[w]) {
				dfs(isVisited, w);
			}
			//如果w结点已经被访问过
			w = getNextNeighbor(i, w);
		}
		
	}
	
	public void dfs() {
		isVisited = new boolean[vertexList.size()];
		//遍历所有的结点，进行dfs[回溯]
		for(int i = 0; i &lt; getNumOfVertex(); i++) {
			if(!isVisited[i]) {
				dfs(isVisited, i);
			}
		}
	}
	
	//对一个结点进行广度优先遍历的方法
	private void bfs(boolean[] isVisited, int i) {
		int u ; // 表示队列的头结点对应下标
		int w ; // 邻接结点w
		//队列，记录结点访问的顺序
		LinkedList queue = new LinkedList();
		//访问结点，输出结点信息
		System.out.print(getValueByIndex(i) + &quot;=&gt;&quot;);
		//标记为已访问
		isVisited[i] = true;
		//将结点加入队列
		queue.addLast(i);
		
		while( !queue.isEmpty()) {
			//取出队列的头结点下标
			u = (Integer)queue.removeFirst();
			//得到第一个邻接结点的下标 w 
			w = getFirstNeighbor(u);
			while(w != -1) {//找到
				//是否访问过
				if(!isVisited[w]) {
					System.out.print(getValueByIndex(w) + &quot;=&gt;&quot;);
					//标记已经访问
					isVisited[w] = true;
					//入队
					queue.addLast(w);
				}
				//以u为前驱点，找w后面的下一个邻结点
				w = getNextNeighbor(u, w); //体现出我们的广度优先
			}
		}
		
	} 
	
	public void bfs() {
		isVisited = new boolean[vertexList.size()];
		for(int i = 0; i &lt; getNumOfVertex(); i++) {
			if(!isVisited[i]) {
				bfs(isVisited, i);
			}
		}
	}
	
	public int getNumOfVertex() {
		return vertexList.size();
	}

	public void showGraph() {
		for(int[] link : edges) {
			System.err.println(Arrays.toString(link));
		}
	}

	public int getNumOfEdges() {
		return numOfEdges;
	}

	public String getValueByIndex(int i) {
		return vertexList.get(i);
	}
	//返回v1和v2的权值
	public int getWeight(int v1, int v2) {
		return edges[v1][v2];
	}
	//插入结点
	public void insertVertex(String vertex) {
		vertexList.add(vertex);
	}
	//添加边
	/**
	 * @param v1 表示点的下标即使第几个顶点  
	 * @param v2 第二个顶点对应的下标
	 * @param weight 表示 
	 */
	public void insertEdge(int v1, int v2, int weight) {
		edges[v1][v2] = weight;
		edges[v2][v1] = weight;
		numOfEdges++;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_12-分治算法" tabindex="-1"><a class="header-anchor" href="#_12-分治算法"><span>12. 分治算法</span></a></h1><ul><li>分治法就是把一个复杂的问题分成两个或更多的相同或相似的子问题，再把子问题分成更小的子问题……直到最后子问题可以简单的直接求解，原问题的解即子问题的解的合并。这个技巧是很多高效算法的基础，如排序算法(快速排序，归并排序)，傅立叶变换(快速傅立叶变换)……</li><li>分治算法可以求解的一些经典问题:二分搜索\\大整数乘法\\棋盘覆盖\\合并排序\\快速排序\\线性时间选择\\最接近点对问题\\循环赛日程表\\汉诺塔</li><li>分治算法的基本步骤,分治法在每一层递归上都有三个步骤： <ul><li>分解：将原问题分解为若干个规模较小，相互独立，与原问题形式相同的子问题</li><li>解决：若子问题规模较小而容易被解决则直接解，否则递归地解各个子问题</li><li>合并：将各个子问题的解合并为原问题的解。</li></ul></li></ul><h2 id="_12-1-汉诺塔" tabindex="-1"><a class="header-anchor" href="#_12-1-汉诺塔"><span>12.1. 汉诺塔</span></a></h2><ul><li>汉诺塔（又称河内塔）问题是源于印度一个古老传说的益智玩具。大梵天创造世界的时候做了三根金刚石柱子，在一根柱子上从下往上按照大小顺序摞着64片黄金圆盘。大梵天命令婆罗门把圆盘从下面开始按大小顺序重新摆放在另一根柱子上。并且规定，在小圆盘上不能放大圆盘，在三根柱子之间一次只能移动一个圆盘。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class Hanoitower {

	public static void main(String[] args) {
		hanoiTower(10, &#39;A&#39;, &#39;B&#39;, &#39;C&#39;);
	}
	public static void hanoiTower(int num, char a, char b, char c) {
		//如果是有一个盘， A-&gt;C 
		if(num == 1) {
			System.out.println(&quot;第1个盘从 &quot; + a + &quot;-&gt;&quot; + c);
		} else {
			//盘数 n &gt;= 2 情况，可以看做是两个盘 1.最下边的盘 2. 上面的盘
			//1. 先把 最上面的所有盘 A-&gt;B， 移动过程会使用到 c
			hanoiTower(num - 1, a, c, b);
			//2. 把最下边的盘 A-&gt;C
			System.out.println(&quot;第&quot; + num + &quot;个盘从 &quot; + a + &quot;-&gt;&quot; + c);
			//3. 把B塔的所有盘 从 B-&gt;C , 移动过程使用到 a塔  
			hanoiTower(num - 1, b, a, c);
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_13-动态规划算法-dynamic-programming" tabindex="-1"><a class="header-anchor" href="#_13-动态规划算法-dynamic-programming"><span>13. 动态规划算法(Dynamic Programming)</span></a></h1><ul><li>动态规划算法的核心思想是：将大问题划分为小问题进行解决，从而一步步获取最优解的处理算法</li><li>动态规划算法与分治算法类似，其基本思想也是将待求解问题分解成若干个子问题，先求解子问题，然后从这些子问题的解得到原问题的解。</li><li>与分治法不同的是，适合于用动态规划求解的问题，经分解得到子问题往往不是互相独立的( 即下一个子阶段的求解是建立在上一个子阶段的解的基础上，进行进一步的求解)</li><li>动态规划可以通过填表的方式来逐步推进，得到最优解.</li></ul><h2 id="_13-1-背包问题" tabindex="-1"><a class="header-anchor" href="#_13-1-背包问题"><span>13.1. 背包问题</span></a></h2><ul><li>背包问题：有一个背包，容量为4磅 ， 现有如下物品 <ul><li>1.要求达到的目标为装入的背包的总价值最大，并且重量不超出</li><li>2，要求装入的物品不能重复</li></ul></li><li>思路分析和图解 <ul><li>1.背包问题主要是指一个给定容量的背包、若干具有一定价值和重量的物品，如何选择物品放入背包使物品的价值最大</li><li>2.其中又分01背包和完全背包(完全背包指的是：每种物品都有无限件可用)</li><li>3.这里的问题属于01背包，即每个物品最多放一个。而无限背包可以转化为01背包。</li><li>4.每次遍历到的第i个物品，根据w[i]和v[i]来确定是否需要将该物品放入背包中。即对于给定的n个物品，设v[i]、w[i]分别为第i个物品的价值和重量，C为背包的容量。再令v[i][j]表示在前i个物品中能够装入容量为j的背包中的最大价值。则我们有下面的结果： <ul><li>(1) v[i][0]=v[0][j]=0; //表示 填入表 第一行和第一列是0</li><li>(2) 当w[i]&gt; j 时：v[i][j]=v[i-1][j]   // 当准备加入新增的商品的容量大于 当前背包的容量时，就直接使用上一个单元格的装入策略</li><li>(3) 当j&gt;=w[i]时： v[i][j]=max{v[i-1][j], v[i]+v[i-1][j-w[i]]}  // 当 准备加入的新增的商品的容量小于等于当前背包的容量,<br> v[i-1][j]：上一个单元格的装入的最大值,(还没装i的值)<br> v[i] : 表示当前商品的价值,v[i-1][j-w[i]] ： 装入i-1商品，到剩余空间j-w[i]的最大值(装了i的值)</li></ul></li></ul></li></ul><table><thead><tr><th style="text-align:center;">物品</th><th style="text-align:center;">重量</th><th style="text-align:center;">价格</th></tr></thead><tbody><tr><td style="text-align:center;">吉他(G)</td><td style="text-align:center;">1</td><td style="text-align:center;">1500</td></tr><tr><td style="text-align:center;">音响(S)</td><td style="text-align:center;">4</td><td style="text-align:center;">3000</td></tr><tr><td style="text-align:center;">电脑(L)</td><td style="text-align:center;">3</td><td style="text-align:center;">2000</td></tr></tbody></table><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    public class KnapsackProblem {

        public static void main(String[] args) {
            int[] w = {1, 4, 3};//物品的重量
            int[] val = {1500, 3000, 2000}; //物品的价值 这里val[i] 就是前面讲的v[i]
            int m = 4; //背包的容量
            int n = val.length; //物品的个数
            
            //v[i][j] 表示在前i个物品中能够装入容量为j的背包中的最大价值
            int[][] v = new int[n+1][m+1];
            //记录放入商品的情况，定一个二维数组
            int[][] path = new int[n+1][m+1];
            
            //初始化第一行和第一列, 这里在本程序中，可以不去处理，因为默认就是0
            for(int i = 0; i &lt; v.length; i++) {
                v[i][0] = 0; //将第一列设置为0
            }
            for(int i=0; i &lt; v[0].length; i++) {
                v[0][i] = 0; //将第一行设置0
            }
            
            //根据前面得到公式来动态规划处理
            for(int i = 1; i &lt; v.length; i++) { //不处理第一行 i是从1开始的
                for(int j=1; j &lt; v[0].length; j++) {//不处理第一列, j是从1开始的
                    //公式
                    if(w[i-1]&gt; j) { // 因为我们程序i 是从1开始的，因此原来公式中的 w[i] 修改成 w[i-1]
                        v[i][j]=v[i-1][j];
                    } else {
                        //说明:
                        //因为我们的i 从1开始的， 因此公式需要调整成
                        //v[i][j] = Math.max(v[i - 1][j], val[i - 1] + v[i - 1][j - w[i - 1]]);
                        //为了记录商品存放到背包的情况，我们不能直接的使用上面的公式，需要使用if-else来体现公式
                        if(v[i - 1][j] &lt; val[i - 1] + v[i - 1][j - w[i - 1]]) {
                            v[i][j] = val[i - 1] + v[i - 1][j - w[i - 1]];
                            //把当前的情况记录到path
                            path[i][j] = 1;
                        } else {
                            v[i][j] = v[i - 1][j];
                        }
                        
                    }
                }
            }
            
            //输出最后我们是放入的哪些商品
            //遍历path, 这样输出会把所有的放入情况都得到, 其实我们只需要最后的放入
    //		for(int i = 0; i &lt; path.length; i++) {
    //			for(int j=0; j &lt; path[i].length; j++) {
    //				if(path[i][j] == 1) {
    //					System.out.printf(&quot;第%d个商品放入到背包\\n&quot;, i);
    //				}
    //			}
    //		}
            
            int i = path.length - 1; //行的最大下标
            int j = path[0].length - 1;  //列的最大下标
            while(i &gt; 0 &amp;&amp; j &gt; 0 ) { //从path的最后开始找
                if(path[i][j] == 1) {
                    System.out.printf(&quot;第%d个商品放入到背包\\n&quot;, i); 
                    j -= w[i-1]; //w[i-1]
                }
                i--;
            }
            
        }

    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_14-kmp算法-字符串匹配问题" tabindex="-1"><a class="header-anchor" href="#_14-kmp算法-字符串匹配问题"><span>14. KMP算法(字符串匹配问题)</span></a></h1>`,104),b=i("li",null,[i("p",null,"判断字符串是否含有子字符串，如果存在，就返回第一次出现的位置, 如果没有，则返回-1")],-1),o=i("li",null,[i("p",null,"暴力匹配算法:如果用暴力匹配的思路，并假设现在str1匹配到 i 位置，子串str2匹配到 j 位置，则有:如果当前字符匹配成功（即str1[i] == str2[j]），则i++，j++，继续匹配下一个字符如果失配（即str1[i]! = str2[j]），令i = i - (j - 1)，j = 0。相当于每次匹配失败时，i 回溯，j 被置为0。暴力方法解决的话就会有大量的回溯，每次只移动一位，若是不匹配，移动到下一位接着判断，浪费了大量的时间。(不可行!)")],-1),p=i("li",null,[i("p",null,"KMP是一个解决模式串在文本串是否出现过，如果出现过，最早出现的位置的经典算法Knuth-Morris-Pratt 字符串查找算法，简称为 “KMP算法”，常用于在一个文本串S内查找一个模式串P 的出现位置，这个算法由Donald Knuth、Vaughan Pratt、James H. Morris三人于1977年联合发表，故取这3人的姓氏命名此算法.")],-1),g=i("li",null,[i("p",null,"KMP方法算法就利用之前判断过信息，通过一个next数组，保存模式串中前后最长公共子序列的长度，每次回溯时，通过next数组找到，前面匹配过的位置，省去了大量的计算时间")],-1),h={href:"https://www.cnblogs.com/ZuoAndFutureGirl/p/9028287.html",target:"_blank",rel:"noopener noreferrer"},f=e(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	public static int violenceMatch(String str1, String str2) {
		char[] s1 = str1.toCharArray();
		char[] s2 = str2.toCharArray();
		int s1Len = s1.length;
		int s2Len = s2.length;
		int i = 0; // i索引指向s1
		int j = 0; // j索引指向s2
		while (i &lt; s1Len &amp;&amp; j &lt; s2Len) {// 保证匹配时，不越界
			if(s1[i] == s2[j]) {//匹配ok
				i++;
				j++;
			} else {
				i = i - (j - 1);//???
				j = 0;
			}
		}
		if(j == s2Len) {
			return i - j;
		} else {
			return -1;
		}
	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	/**
	* @param str1 源字符串
	* @param str2 子串
	* @param next 部分匹配表, 是子串对应的部分匹配表
	* @return 如果是-1就是没有匹配到，否则返回第一个匹配的位置
	*/
	public static int kmpSearch(String str1, String str2, int[] next) {
		for(int i = 0, j = 0; i &lt; str1.length(); i++) {
			
			//需要处理 str1.charAt(i) ！= str2.charAt(j), 去调整j的大小
			//KMP算法核心点, 可以验证...
			while( j &gt; 0 &amp;&amp; str1.charAt(i) != str2.charAt(j)) {
				j = next[j-1]; 
			}
			
			if(str1.charAt(i) == str2.charAt(j)) {
				j++;
			}			
			if(j == str2.length()) {//找到了 // j = 3 i 
				return i - j + 1;
			}
		}
		return  -1;
	}

	//获取到一个字符串(子串) 的部分匹配值表
	public static  int[] kmpNext(String dest) {
		int[] next = new int[dest.length()];
		next[0] = 0; //如果字符串是长度为1 部分匹配值就是0
		for(int i = 1, j = 0; i &lt; dest.length(); i++) {
			while(j &gt; 0 &amp;&amp; dest.charAt(i) != dest.charAt(j)) {
				j = next[j-1];
			}
			if(dest.charAt(i) == dest.charAt(j)) {
				j++;
			}
			next[i] = j;
		}
		return next;
	}
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_15-贪心算法" tabindex="-1"><a class="header-anchor" href="#_15-贪心算法"><span>15. 贪心算法</span></a></h1><ul><li>贪婪算法(贪心算法)是指在对问题进行求解时，在每一步选择中都采取最好或者最优(即最有利)的选择，从而希望能够导致结果是最好或者最优的算法</li><li>贪婪算法所得到的结果不一定是最优的结果(有时候会是最优解)，但是都是相对近似(接近)最优解的结果</li><li>比如上题的算法选出的是K1, K2, K3, K5，符合覆盖了全部的地区</li><li>但是我们发现 K2, K3,K4,K5 也可以覆盖全部地区，如果K2 的使用成本低于K1,那么我们上题的 K1, K2, K3, K5 虽然是满足条件，但是并不是最优的.</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>假设存在如下表的需要付费的广播台，以及广播台信号可以覆盖的地区。 如何选择最少的广播台，让所有的地区都可以接收到信号
广播台	覆盖地区
K1	&quot;北京&quot;, &quot;上海&quot;, &quot;天津&quot;
K2	&quot;广州&quot;, &quot;北京&quot;, &quot;深圳&quot;
K3	&quot;成都&quot;, &quot;上海&quot;, &quot;杭州&quot;
K4	&quot;上海&quot;, &quot;天津&quot;
K5	&quot;杭州&quot;, &quot;大连&quot;
如何找出覆盖所有地区的广播台的集合呢，使用穷举法实现,列出每个可能的广播台的集合，这被称为幂集
假设总的有n个广播台，则广播台的组合总共有2ⁿ -1 个

使用贪婪算法，效率高:
目前并没有算法可以快速计算得到准备的值， 使用贪婪算法，则可以得到非常接近的解，并且效率高。选择策略上，因为需要覆盖全部地区的最小集合:
1.遍历所有的广播电台, 找到一个覆盖了最多未覆盖的地区的电台(此电台可能包含一些已覆盖的地区，但没有关系） 
2.将这个电台加入到一个集合中(比如ArrayList), 把该电台覆盖的地区在下次比较时去掉。
3.重复第1步直到覆盖了全部的地区
public class GreedyAlgorithm {

	public static void main(String[] args) {
		//创建广播电台,放入到Map
		HashMap&lt;String,HashSet&lt;String&gt;&gt; broadcasts = new HashMap&lt;String, HashSet&lt;String&gt;&gt;();
		//将各个电台放入到broadcasts
		HashSet&lt;String&gt; hashSet1 = new HashSet&lt;String&gt;();
		hashSet1.add(&quot;北京&quot;);
		hashSet1.add(&quot;上海&quot;);
		hashSet1.add(&quot;天津&quot;);
		
		HashSet&lt;String&gt; hashSet2 = new HashSet&lt;String&gt;();
		hashSet2.add(&quot;广州&quot;);
		hashSet2.add(&quot;北京&quot;);
		hashSet2.add(&quot;深圳&quot;);
		
		HashSet&lt;String&gt; hashSet3 = new HashSet&lt;String&gt;();
		hashSet3.add(&quot;成都&quot;);
		hashSet3.add(&quot;上海&quot;);
		hashSet3.add(&quot;杭州&quot;);
		
		
		HashSet&lt;String&gt; hashSet4 = new HashSet&lt;String&gt;();
		hashSet4.add(&quot;上海&quot;);
		hashSet4.add(&quot;天津&quot;);
		
		HashSet&lt;String&gt; hashSet5 = new HashSet&lt;String&gt;();
		hashSet5.add(&quot;杭州&quot;);
		hashSet5.add(&quot;大连&quot;);
	
		//加入到map
		broadcasts.put(&quot;K1&quot;, hashSet1);
		broadcasts.put(&quot;K2&quot;, hashSet2);
		broadcasts.put(&quot;K3&quot;, hashSet3);
		broadcasts.put(&quot;K4&quot;, hashSet4);
		broadcasts.put(&quot;K5&quot;, hashSet5);
		
		//allAreas 存放所有的地区
		HashSet&lt;String&gt; allAreas = new HashSet&lt;String&gt;();
		allAreas.add(&quot;北京&quot;);
		allAreas.add(&quot;上海&quot;);
		allAreas.add(&quot;天津&quot;);
		allAreas.add(&quot;广州&quot;);
		allAreas.add(&quot;深圳&quot;);
		allAreas.add(&quot;成都&quot;);
		allAreas.add(&quot;杭州&quot;);
		allAreas.add(&quot;大连&quot;);
		
		//创建ArrayList, 存放选择的电台集合
		ArrayList&lt;String&gt; selects = new ArrayList&lt;String&gt;();
		
		//定义一个临时的集合， 在遍历的过程中，存放遍历过程中的电台覆盖的地区和当前还没有覆盖的地区的交集
		HashSet&lt;String&gt; tempSet = new HashSet&lt;String&gt;();
		
		//定义给maxKey ， 保存在一次遍历过程中，能够覆盖最大未覆盖的地区对应的电台的key
		//如果maxKey 不为null , 则会加入到 selects
		String maxKey = null;
		while(allAreas.size() != 0) { // 如果allAreas 不为0, 则表示还没有覆盖到所有的地区
			//每进行一次while,需要
			maxKey = null;
			
			//遍历 broadcasts, 取出对应key
			for(String key : broadcasts.keySet()) {
				//每进行一次for
				tempSet.clear();
				//当前这个key能够覆盖的地区
				HashSet&lt;String&gt; areas = broadcasts.get(key);
				tempSet.addAll(areas);
				//求出tempSet 和   allAreas 集合的交集, 得到该电台所能覆盖到未覆盖的地区
				tempSet.retainAll(allAreas);
				//如果当前这个集合包含的未覆盖地区的数量，比maxKey指向的集合地区还多
				//就需要重置maxKey
				// tempSet.size() &gt;broadcasts.get(maxKey).size() 体现出贪心算法的特点,每次都选择最优的
				if(tempSet.size() &gt; 0 &amp;&amp; 
						(maxKey == null || tempSet.size() &gt;broadcasts.get(maxKey).size())){
					maxKey = key;
				}
			}
			//maxKey != null, 就应该将maxKey 加入selects
			if(maxKey != null) {
				selects.add(maxKey);
				//将maxKey指向的广播电台覆盖的地区，从 allAreas 去掉
				allAreas.removeAll(broadcasts.get(maxKey));
			}
			
		}
		
		System.out.println(&quot;得到的选择结果是&quot; + selects);//[K1,K2,K3,K5]
	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_16-普里姆算法" tabindex="-1"><a class="header-anchor" href="#_16-普里姆算法"><span>16. 普里姆算法</span></a></h1><ul><li><p>最小生成树(Minimum Cost Spanning Tree)，简称MST。给定一个带权的无向连通图,如何选取一棵生成树,使树上所有边上权的总和为最小,这叫最小生成树</p></li><li><p>求最小生成树的算法主要是普里姆算法和克鲁斯卡尔算法</p></li><li><p>普利姆(Prim)算法求最小生成树，从顶点的角度求最小生成树。也就是在包含n个顶点的连通图中，找出只有(n-1)条边包含所有n个顶点的连通子图，也就是所谓的极小连通子图</p><ul><li>1.设G=(V,E)是连通网，T=(U,D)是最小生成树，V,U是顶点集合，E,D是边的集合</li><li>2.若从顶点u开始构造最小生成树，则从集合V中取出顶点u放入集合U中，标记顶点v的visited[u]=1</li><li>3.若集合U中顶点ui与集合V-U中的顶点vj之间存在边，则寻找这些边中权值最小的边，但不能构成回路，将顶点vj加入集合U中，将边（ui,vj）加入集合D中，标记visited[vj]=1</li><li>重复步骤②，直到U与V相等，即所有顶点都被标记为访问过，此时D中有n-1条边</li></ul></li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/d7f62ea369236ecbf035c.png" alt="普里姆算法1.png" tabindex="0"><figcaption>普里姆算法1.png</figcaption></figure><ul><li>有7个村庄(A,B,C,D,E,F,G),现在要修路吧7个村庄连通，各个村庄的距离用边线表示，比如A-B距离5公里，如何修路才能保证各个村庄都能连通，并且总的修建公路总里程最短？</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class PrimAlgorithm {
	public static void main(String[] args) {
		char[] data = new char[]{&#39;A&#39;,&#39;B&#39;,&#39;C&#39;,&#39;D&#39;,&#39;E&#39;,&#39;F&#39;,&#39;G&#39;};
		int verxs = data.length;
		//邻接矩阵的关系使用二维数组表示,10000这个大数，表示两个点不联通
		int [][]weight=new int[][]{
			{10000,5,7,10000,10000,10000,2},//A-&gt;{A,B,C,D,E,F,G}
			{5,10000,10000,9,10000,10000,3},
			{7,10000,10000,10000,8,10000,10000},
			{10000,9,10000,10000,10000,4,10000},
			{10000,10000,8,10000,10000,5,4},
			{10000,10000,10000,4,5,10000,6},
			{2,3,10000,10000,4,6,10000},};
			
		MGraph graph = new MGraph(verxs);
		MinTree minTree = new MinTree();
		minTree.createGraph(graph, verxs, data, weight);
		minTree.prim(graph, 1);//&lt;B,G&gt;&lt;G,A&gt;&lt;G,E&gt;&lt;E,F&gt;&lt;F,D&gt;&lt;A,C&gt;
	}
}

//创建最小生成树
class MinTree {
	//创建图的邻接矩阵
	/**
	* @param graph 图对象
	* @param verxs 图对应的顶点个数
	* @param data 图的各个顶点的值
	* @param weight 图的邻接矩阵
	*/
	public void createGraph(MGraph graph, int verxs, char data[], int[][] weight) {
		int i, j;
		for(i = 0; i &lt; verxs; i++) {//顶点
			graph.data[i] = data[i];
			for(j = 0; j &lt; verxs; j++) {
				graph.weight[i][j] = weight[i][j];
			}
		}
	}
	
	/**
	* @param graph 图
	* @param v 表示从图的第几个顶点开始生成&#39;A&#39;-&gt;0 &#39;B&#39;-&gt;1...
	*/
	public void prim(MGraph graph, int v) {
		int visited[] = new int[graph.verxs];//visited[] 标记结点(顶点)是否被访问过
		
		visited[v] = 1;//把当前这个结点标记为已访问
		//h1 和 h2 记录两个顶点的下标
		int h1 = -1;
		int h2 = -1;
		int minWeight = 10000; //将 minWeight 初始成一个大数，后面在遍历过程中，会被替换
		for(int k = 1; k &lt; graph.verxs; k++) {//因为有 graph.verxs顶点，普利姆算法结束后，有 graph.verxs-1边
			
			//这个是确定每一次生成的子图 ，和哪个结点的距离最近
			for(int i = 0; i &lt; graph.verxs; i++) {// i结点表示被访问过的结点
				for(int j = 0; j&lt; graph.verxs;j++) {//j结点表示还没有访问过的结点
					if(visited[i] == 1 &amp;&amp; visited[j] == 0 &amp;&amp; graph.weight[i][j] &lt; minWeight) {
						//替换minWeight(寻找已经访问过的结点和未访问过的结点间的权值最小的边)
						minWeight = graph.weight[i][j];
						h1 = i;
						h2 = j;
					}
				}
			}
			//找到一条边是最小
			System.out.println(&quot;边&lt;&quot; + graph.data[h1] + &quot;,&quot; + graph.data[h2] + &quot;&gt; 权值:&quot; + minWeight);
			visited[h2] = 1;
			minWeight = 10000;
		}
		
	}
}

class MGraph {
	int verxs; //表示图的节点个数
	char[] data;//存放结点数据
	int[][] weight; //存放边，就是我们的邻接矩阵
	
	public MGraph(int verxs) {
		this.verxs = verxs;
		data = new char[verxs];
		weight = new int[verxs][verxs];
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_17-克鲁斯卡尔算法" tabindex="-1"><a class="header-anchor" href="#_17-克鲁斯卡尔算法"><span>17. 克鲁斯卡尔算法</span></a></h1><ul><li><p>从边的角度求最小生成树</p></li><li><p>克鲁斯卡尔(Kruskal)算法，是用来求加权连通图的最小生成树的算法。</p></li><li><p>基本思想：按照权值从小到大的顺序选择n-1条边，并保证这n-1条边不构成回路</p></li><li><p>具体做法：首先构造一个只含n个顶点的森林，然后依权值从小到大从连通网中选择边加入到森林中，并使森林中不产生回路(!!!!加入的边的定点都不能指向同一个终点)，直至森林变成一棵树为止</p></li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/2f128cfff2ee7595c410a.png" alt="数据结构和算法" tabindex="0"><figcaption>数据结构和算法</figcaption></figure><ul><li>某城市新增7个站点(A, B, C, D, E, F, G) ，现在需要修路把7个站点连通,各个站点的距离用边线表示(权) ，比如 A – B 距离 12公里.如何修路保证各个站点都能连通，并且总的修建公路总里程最短?</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class KruskalCase {
	private int edgeNum; //边的个数
	private char[] vertexs; //顶点数组
	private int[][] matrix; //邻接矩阵
	private static final int INF = Integer.MAX_VALUE;//使用 INF 表示两个顶点不能连通
	
	public static void main(String[] args) {
		char[] vertexs = {&#39;A&#39;, &#39;B&#39;, &#39;C&#39;, &#39;D&#39;, &#39;E&#39;, &#39;F&#39;, &#39;G&#39;};
	      int matrix[][] = {
	      /*A*//*B*//*C*//*D*//*E*//*F*//*G*/
	/*A*/ {   0,  12, INF, INF, INF,  16,  14},
	/*B*/ {  12,   0,  10, INF, INF,   7, INF},
	/*C*/ { INF,  10,   0,   3,   5,   6, INF},
	/*D*/ { INF, INF,   3,   0,   4, INF, INF},
	/*E*/ { INF, INF,   5,   4,   0,   2,   8},
	/*F*/ {  16,   7,   6, INF,   2,   0,   9},
	/*G*/ {  14, INF, INF, INF,   8,   9,   0}}; 
	      KruskalCase kruskalCase = new KruskalCase(vertexs, matrix);
	      kruskalCase.kruskal();
	      
	}
	
	public KruskalCase(char[] vertexs, int[][] matrix) {
		this.vertexs = vertexs;
		this.matrix = matrix;
		//统计边的条数
		for(int i =0; i &lt; vertexs.length; i++) {
			for(int j = i+1; j &lt; vertexs.length; j++) {
				if(this.matrix[i][j] != INF) {
					edgeNum++;
				}
			}
		}
	}
	public void kruskal() {
		int index = 0; //表示最后结果数组的索引
		int[] ends = new int[edgeNum]; //用于保存&quot;已有最小生成树&quot; 中的每个顶点在最小生成树中的终点
		EData[] rets = new EData[edgeNum];//创建结果数组, 用于保存最后的最小生成树
		
		EData[] edges = getEdges();//获取图中 所有的边的集合 ， 一共有12边
		
		sortEdges(edges);//按照边的权值大小进行排序(从小到大)
		
		//遍历edges 数组，将边添加到最小生成树中时，判断是准备加入的边否形成了回路，如果没有，就加入 rets, 否则不能加入
		for(int i=0; i &lt; edgeNum; i++) {
			//获取到第i条边的第一个顶点(起点)
			int p1 = getPosition(edges[i].start); //p1=4
			//获取到第i条边的第2个顶点
			int p2 = getPosition(edges[i].end); //p2 = 5
			
			//获取p1这个顶点在已有最小生成树中的终点
			int m = getEnd(ends, p1); //m = 4
			//获取p2这个顶点在已有最小生成树中的终点
			int n = getEnd(ends, p2); // n = 5
			//是否构成回路
			if(m != n) { //没有构成回路
				ends[m] = n; // 设置m 在&quot;已有最小生成树&quot;中的终点 &lt;E,F&gt; [0,0,0,0,5,0,0,0,0,0,0,0]
				rets[index++] = edges[i]; //有一条边加入到rets数组
			}
		}
		//&lt;E,F&gt; &lt;C,D&gt; &lt;D,E&gt; &lt;B,F&gt; &lt;E,G&gt; &lt;A,B&gt;。
		for(int i = 0; i &lt; index; i++) {
			System.out.println(rets[i]);
		}
	}

	//对边进行排序处理, 冒泡排序
	private void sortEdges(EData[] edges) {
		for(int i = 0; i &lt; edges.length - 1; i++) {
			for(int j = 0; j &lt; edges.length - 1 - i; j++) {
				if(edges[j].weight &gt; edges[j+1].weight) {//交换
					EData tmp = edges[j];
					edges[j] = edges[j+1];
					edges[j+1] = tmp;
				}
			}
 		}
	}

	//返回ch顶点对应的下标，如果找不到，返回-1
	private int getPosition(char ch) {
		for(int i = 0; i &lt; vertexs.length; i++) {
			if(vertexs[i] == ch) {
				return i;
			}
		}
		return -1;
	}

	//获取图中边，放到EData[] 数组中
	private EData[] getEdges() {
		int index = 0;
		EData[] edges = new EData[edgeNum];
		for(int i = 0; i &lt; vertexs.length; i++) {
			for(int j=i+1; j &lt;vertexs.length; j++) {
				if(matrix[i][j] != INF) {
					edges[index++] = new EData(vertexs[i], vertexs[j], matrix[i][j]);
				}
			}
		}
		return edges;
	}
	/**
	 * 功能: 获取下标为i的顶点的终点(), 用于后面判断两个顶点的终点是否相同
	 * @param ends ： 数组就是记录了各个顶点对应的终点是哪个,ends 数组是在遍历过程中，逐步形成
	 * @param i : 表示传入的顶点对应的下标
	 * @return 返回的就是 下标为i的这个顶点对应的终点的下标
	 */
	private int getEnd(int[] ends, int i) { // i = 4 [0,0,0,0,5,0,0,0,0,0,0,0]
		while(ends[i] != 0) {
			i = ends[i];
		}
		return i;
	}
 
}

//创建一个类EData ，它的对象实例就表示一条边
class EData {
	char start; //边的一个点
	char end; //边的另外一个点
	int weight; //边的权值
	public EData(char start, char end, int weight) {
		this.start = start;
		this.end = end;
		this.weight = weight;
	}
	@Override
	public String toString() {return &quot;EData [&lt;&quot; + start + &quot;, &quot; + end + &quot;&gt;= &quot; + weight + &quot;]&quot;;}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_18-迪杰斯特拉算法-dijkstra" tabindex="-1"><a class="header-anchor" href="#_18-迪杰斯特拉算法-dijkstra"><span>18. 迪杰斯特拉算法(Dijkstra)</span></a></h1><ul><li>迪杰斯特拉(Dijkstra)算法用于计算一个结点到其他结点的最短路径。 它的主要特点是以起始点为中心向外层层扩展(广度优先搜索思想)，直到扩展到终点为止。</li><li>迪杰斯特拉(Dijkstra)算法过程 <ul><li>设置出发顶点为v，顶点集合V{v1,v2,vi...}，v到V中各顶点的距离构成距离集合Dis，Dis{d1,d2,di...}，Dis集合记录着v到图中各顶点的距离(到自身可以看作0，v到vi距离对应为di)从Dis中选择值最小的di并移出Dis集合，同时移出V集合中对应的顶点vi，此时的v到vi即为最短路径</li><li>更新Dis集合，更新规则为：比较v到V集合中顶点的距离值，与v通过vi到V集合中顶点的距离值，保留值较小的一个(同时也应该更新顶点的前驱节点为vi，表明是通过vi到达的)重复执行两步骤，直到最短路径顶点为目标顶点即可结束</li></ul></li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/797d43e246da0d4516363.png" alt="Dijkstra.PNG" tabindex="0"><figcaption>Dijkstra.PNG</figcaption></figure><ul><li>胜利乡有7个村庄(A, B, C, D, E, F, G) ，各个村庄的距离用边线表示(权) ，比如 A – B 距离 5公里,如何计算出G村庄到 其它各个村庄的最短距离? 如果从其它点出发到各个点的最短距离又是多少?</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class DijkstraAlgorithm {//???
	public static void main(String[] args) {
		char[] vertex = { &#39;A&#39;, &#39;B&#39;, &#39;C&#39;, &#39;D&#39;, &#39;E&#39;, &#39;F&#39;, &#39;G&#39; };
		int[][] matrix = new int[vertex.length][vertex.length];
		final int N = 65535;// 表示不可以连接
		matrix[0]=new int[]{N,5,7,N,N,N,2};  
		matrix[1]=new int[]{5,N,N,9,N,N,3};  
		matrix[2]=new int[]{7,N,N,N,8,N,N};  
		matrix[3]=new int[]{N,9,N,N,N,4,N};  
		matrix[4]=new int[]{N,N,8,N,N,5,4};  
		matrix[5]=new int[]{N,N,N,4,5,N,6};  
		matrix[6]=new int[]{2,3,N,N,4,6,N};
		Graph graph = new Graph(vertex, matrix);
		graph.showGraph();
		graph.dsj(2);//C
		graph.showDijkstra();
	}
}

class Graph {
	private char[] vertex; // 顶点数组
	private int[][] matrix; // 邻接矩阵
	private VisitedVertex vv; //已经访问的顶点的集合

	public Graph(char[] vertex, int[][] matrix) {
		this.vertex = vertex;
		this.matrix = matrix;
	}
	
	public void showDijkstra() {vv.show();}

	public void showGraph() {
		for (int[] link : matrix) {
			System.out.println(Arrays.toString(link));
		}
	}
	
	//index 表示出发顶点对应的下标
	public void dsj(int index) {
		vv = new VisitedVertex(vertex.length, index);
		update(index);//更新index顶点到周围顶点的距离和前驱顶点
		for(int j = 1; j &lt;vertex.length; j++) {
			index = vv.updateArr();// 选择并返回新的访问顶点
			update(index); // 更新index顶点到周围顶点的距离和前驱顶点
		} 
	}
	
	//更新index下标顶点到周围顶点的距离和周围顶点的前驱顶点,
	private void update(int index) {
		int len = 0;
		//根据遍历我们的邻接矩阵的  matrix[index]行
		for(int j = 0; j &lt; matrix[index].length; j++) {
			// len 含义是 : 出发顶点到index顶点的距离 + 从index顶点到j顶点的距离的和 
			len = vv.getDis(index) + matrix[index][j];
			// 如果j顶点没有被访问过，并且 len 小于出发顶点到j顶点的距离，就需要更新
			if(!vv.in(j) &amp;&amp; len &lt; vv.getDis(j)) {
				vv.updatePre(j, index); //更新j顶点的前驱为index顶点
				vv.updateDis(j, len); //更新出发顶点到j顶点的距离
			}
		}
	}
}

// 已访问顶点集合
class VisitedVertex {
	public int[] already_arr;// 记录各个顶点是否访问过 1表示访问过,0未访问,会动态更新
	public int[] pre_visited;//非必要 // 每个下标对应的值为前一个顶点下标, 会动态更新
	// 记录出发顶点到其他所有顶点的距离,比如G为出发顶点，就会记录G到其它顶点的距离，会动态更新，求的最短距离就会存放到dis
	public int[] dis;
	
	/**
	 * @param length :表示顶点的个数 
	 * @param index: 出发顶点对应的下标, 比如G顶点，下标就是6
	 */
	public VisitedVertex(int length, int index) {
		this.already_arr = new int[length];
		this.pre_visited = new int[length];
		this.dis = new int[length];
		//初始化 dis数组
		Arrays.fill(dis, 65535);
		this.already_arr[index] = 1; //设置出发顶点被访问过
		this.dis[index] = 0;//设置出发顶点的访问距离为0
				
	}

	//判断index顶点是否被访问过
	public boolean in(int index) {
		return already_arr[index] == 1;
	}
	
	//更新出发顶点到index顶点的距离
	public void updateDis(int index, int len) {
		dis[index] = len;
	}

	//更新pre这个顶点的前驱顶点为index顶点
	public void updatePre(int pre, int index) {
		pre_visited[pre] = index;
	}

	//返回出发顶点到index顶点的距离
	public int getDis(int index) {
		return dis[index];
	}
	
	//继续选择并返回新的访问顶点， 比如这里的G 完后，就是 A点作为新的访问顶点(注意不是出发顶点)
	public int updateArr() {
		int min = 65535, index = 0;
		for(int i = 0; i &lt; already_arr.length; i++) {
			if(already_arr[i] == 0 &amp;&amp; dis[i] &lt; min ) {
				min = dis[i];
				index = i;
			}
		}
		//更新 index 顶点被访问过
		already_arr[index] = 1;
		return index;
	}
	
	//显示最后的结果
	//即将三个数组的情况输出
	public void show() {
		for(int i : already_arr) {
			System.out.print(i + &quot; &quot;);
		}
		System.out.println();
		for(int i : pre_visited) {
			System.out.print(i + &quot; &quot;);
		}
		System.out.println();
		for(int i : dis) {
			System.out.print(i + &quot; &quot;);
		}
		System.out.println();
		char[] vertex = { &#39;A&#39;, &#39;B&#39;, &#39;C&#39;, &#39;D&#39;, &#39;E&#39;, &#39;F&#39;, &#39;G&#39; };
		int count = 0;
		for (int i : dis) {
			if (i != 65535) {
				System.out.print(vertex[count] + &quot;(&quot;+i+&quot;) &quot;);
			} else {
				System.out.println(&quot;N &quot;);
			}
			count++;
		}
		System.out.println();
		
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_19-弗洛伊德-floyd-算法介绍" tabindex="-1"><a class="header-anchor" href="#_19-弗洛伊德-floyd-算法介绍"><span>19. 弗洛伊德(Floyd)算法介绍</span></a></h1><ul><li>和Dijkstra算法一样，弗洛伊德(Floyd)算法也是一种用于寻找给定的加权图中顶点间最短路径的算法。该算法名称以创始人之一、1978年图灵奖获得者、斯坦福大学计算机科学系教授罗伯特·弗洛伊德命名</li><li>弗洛伊德算法(Floyd)计算图中各个顶点之间的最短路径，所以需要将每一个顶点看做被访问顶点，求出从每一个顶点到其他顶点的最短路径.迪杰斯特拉算法用于计算图中某一个顶点到其他顶点的最短路径。</li><li>弗洛伊德(Floyd)算法思路：设置顶点vi到顶点vk的最短路径已知为Lik，顶点vk到vj的最短路径已知为Lkj，顶点vi到vj的路径为Lij，则vi到vj的最短路径为：min((Lik+Lkj),Lij)，vk的取值为图中所有顶点，则可获得vi到vj的最短路径，至于vi到vk的最短路径Lik或者vk到vj的最短路径Lkj，是以同样的方式获得</li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/1e01bd4806df7d8d73d5d.png" alt="floyd.PNG" tabindex="0"><figcaption>floyd.PNG</figcaption></figure><ul><li>胜利乡有7个村庄(A,B,C,D,E,F,G),各个村庄的距离用边线表示(权)，比如A-B距离5公里,如何计算出各村庄到其他村庄的距离?</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class FloydAlgorithm {
	public static void main(String[] args) {
		char[] vertex = { &#39;A&#39;, &#39;B&#39;, &#39;C&#39;, &#39;D&#39;, &#39;E&#39;, &#39;F&#39;, &#39;G&#39; };
		int[][] matrix = new int[vertex.length][vertex.length];
		final int N = 65535;
		matrix[0] = new int[] { 0, 5, 7, N, N, N, 2 };
		matrix[1] = new int[] { 5, 0, N, 9, N, N, 3 };
		matrix[2] = new int[] { 7, N, 0, N, 8, N, N };
		matrix[3] = new int[] { N, 9, N, 0, N, 4, N };
		matrix[4] = new int[] { N, N, 8, N, 0, 5, 4 };
		matrix[5] = new int[] { N, N, N, 4, 5, 0, 6 };
		matrix[6] = new int[] { 2, 3, N, N, 4, 6, 0 };
		
		Graph graph = new Graph(vertex.length, matrix, vertex);
		graph.floyd();
		graph.show();
	}
}

class Graph {
	private char[] vertex; // 存放顶点的数组
	private int[][] dis; // 保存从各个顶点出发到其它顶点的距离，最后的结果也是保留在该数组
	private int[][] pre;// 保存到达目标顶点的前驱顶点

	public Graph(int length, int[][] matrix, char[] vertex) {
		this.vertex = vertex;
		this.dis = matrix;
		this.pre = new int[length][length];
		// 对pre数组初始化, 注意存放的是前驱顶点的下标
		for (int i = 0; i &lt; length; i++) {
			Arrays.fill(pre[i], i);
		}
	}

	// 显示pre数组和dis数组
	public void show() {
		char[] vertex = { &#39;A&#39;, &#39;B&#39;, &#39;C&#39;, &#39;D&#39;, &#39;E&#39;, &#39;F&#39;, &#39;G&#39; };
		for (int k = 0; k &lt; dis.length; k++) {
			for (int i = 0; i &lt; dis.length; i++) {
				System.out.print(vertex[pre[k][i]] + &quot; &quot;);
			}
			System.out.println();
			for (int i = 0; i &lt; dis.length; i++) {
				System.out.print(&quot;(&quot;+vertex[k]+&quot;到&quot;+vertex[i]+&quot;的最短路径是&quot; + dis[k][i] + &quot;) &quot;);
			}
			System.out.println();
		}
	}
	
	public void floyd() {
		int len = 0; //变量保存距离
		//对中间顶点遍历， k 就是中间顶点的下标 [A, B, C, D, E, F, G] 
		for(int k = 0; k &lt; dis.length; k++) { // 
			//从i顶点开始出发 [A, B, C, D, E, F, G]
			for(int i = 0; i &lt; dis.length; i++) {
				//到达j顶点 // [A, B, C, D, E, F, G]
				for(int j = 0; j &lt; dis.length; j++) {
					len = dis[i][k] + dis[k][j];// =&gt; 求出从i 顶点出发，经过 k中间顶点，到达 j 顶点距离
					if(len &lt; dis[i][j]) {//如果len小于 dis[i][j]
						dis[i][j] = len;//更新距离
						pre[i][j] = pre[k][j];//更新前驱顶点
					}
				}
			}
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_20-马踏棋盘算法-骑士周游问题" tabindex="-1"><a class="header-anchor" href="#_20-马踏棋盘算法-骑士周游问题"><span>20. 马踏棋盘算法(骑士周游问题)</span></a></h1>`,26),x=i("li",null,"将马随机放在国际象棋的8×8棋盘Board[0～7][0～7]的某个方格中，马按走棋规则(马走日字)进行移动。要求每个方格只进入一次，走遍棋盘上全部64个方格",-1),y={href:"http://www.4399.com/flash/146267_2.htm",target:"_blank",rel:"noopener noreferrer"},S=i("li",null,"马踏棋盘问题(骑士周游问题)实际上是图的深度优先搜索(DFS)(回溯)的应用。还能用贪心算法优化",-1),q=e(`<figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/0ec2bd6488a829ead8441.png" alt="骑士周游问题.png" tabindex="0"><figcaption>骑士周游问题.png</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    public class HorseChessboard {
        private static int X; // 棋盘的列数
        private static int Y; // 棋盘的行数
        private static boolean visited[];//标记棋盘的各个位置是否被访问过
        private static boolean finished; // 标记是否棋盘的所有位置都被访问,如果为true,表示成功
        
        public static void main(String[] args) {
            X = 8;
            Y = 8;
            int row = 1; //马儿初始位置的行，从1开始编号
            int column = 1; //马儿初始位置的列，从1开始编号
            
            int[][] chessboard = new int[X][Y];//创建棋盘
            visited = new boolean[X * Y];//初始值都是false
			
            traversalChessboard(chessboard, row - 1, column - 1, 1);
            
            //输出棋盘的最后情况
            for(int[] rows : chessboard) {
                for(int step: rows) {
                    System.out.print(step + &quot;\\t&quot;);
                }
                System.out.println();
            }
        }
        
        /**
        * 完成骑士周游问题的算法
        * @param chessboard 棋盘
        * @param row 马儿当前的位置的行 从0开始 
        * @param column 马儿当前的位置的列  从0开始
        * @param step 是第几步 ,初始位置就是第1步 
        */
        public static void traversalChessboard(int[][] chessboard, int row, int column, int step) {
            chessboard[row][column] = step;
            visited[row * X + column] = true;
            ArrayList&lt;Point&gt; ps = next(new Point(column, row));
            sort(ps); //对ps进行排序,排序的规则就是对ps的所有的Point对象的下一步的位置的数目，进行非递减排序
            
            while(!ps.isEmpty()) {
                Point p = ps.remove(0);//取出下一个可以走的位置
                if(!visited[p.y * X + p.x]) {
                    traversalChessboard(chessboard, p.y, p.x, step + 1);
                }
            }
            //判断马儿是否完成了任务，使用   step 和应该走的步数比较 ， 
            //如果没有达到数量，则表示没有完成任务，将整个棋盘置0
            //说明: step &lt; X * Y  成立的情况有两种
            //1. 棋盘到目前位置,仍然没有走完
            //2. 棋盘处于一个回溯过程
            if(step &lt; X * Y &amp;&amp; !finished ) {//???
                chessboard[row][column] = 0;
                visited[row * X + column] = false;
            } else {
                finished = true;
            }
            
        }
        
        // 根据当前位置(Point对象)，计算马儿还能走哪些位置(Point)，并放入到一个集合中(ArrayList), 最多有8个位置
        public static ArrayList&lt;Point&gt; next(Point curPoint) {
            ArrayList&lt;Point&gt; ps = new ArrayList&lt;Point&gt;();
            Point p1 = new Point();
            //表示马儿可以走5这个位置
            if((p1.x = curPoint.x - 2) &gt;= 0 &amp;&amp; (p1.y = curPoint.y -1) &gt;= 0) {
                ps.add(new Point(p1));
            }
            //判断马儿可以走6这个位置
            if((p1.x = curPoint.x - 1) &gt;=0 &amp;&amp; (p1.y=curPoint.y-2)&gt;=0) {
                ps.add(new Point(p1));
            }
            //判断马儿可以走7这个位置
            if ((p1.x = curPoint.x + 1) &lt; X &amp;&amp; (p1.y = curPoint.y - 2) &gt;= 0) {
                ps.add(new Point(p1));
            }
            //判断马儿可以走0这个位置
            if ((p1.x = curPoint.x + 2) &lt; X &amp;&amp; (p1.y = curPoint.y - 1) &gt;= 0) {
                ps.add(new Point(p1));
            }
            //判断马儿可以走1这个位置
            if ((p1.x = curPoint.x + 2) &lt; X &amp;&amp; (p1.y = curPoint.y + 1) &lt; Y) {
                ps.add(new Point(p1));
            }
            //判断马儿可以走2这个位置
            if ((p1.x = curPoint.x + 1) &lt; X &amp;&amp; (p1.y = curPoint.y + 2) &lt; Y) {
                ps.add(new Point(p1));
            }
            //判断马儿可以走3这个位置
            if ((p1.x = curPoint.x - 1) &gt;= 0 &amp;&amp; (p1.y = curPoint.y + 2) &lt; Y) {
                ps.add(new Point(p1));
            }
            //判断马儿可以走4这个位置
            if ((p1.x = curPoint.x - 2) &gt;= 0 &amp;&amp; (p1.y = curPoint.y + 1) &lt; Y) {
                ps.add(new Point(p1));
            }
            return ps;
        }

        //根据当前这个一步的所有的下一步的选择位置，进行非递减排序(1,2,2,2,3,3,4,5), 减少回溯的次数(贪心算法优化)
        public static void sort(ArrayList&lt;Point&gt; ps) {
            ps.sort(new Comparator&lt;Point&gt;() {

                @Override
                public int compare(Point o1, Point o2) {
                    //获取到o1的下一步的所有位置个数
                    int count1 = next(o1).size();
                    //获取到o2的下一步的所有位置个数
                    int count2 = next(o2).size();
                    if(count1 &lt; count2) {
                        return -1;
                    } else if (count1 == count2) {
                        return 0;
                    } else {
                        return 1;
                    }
                }
                
            });
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function k(N,w){const t=d("ExternalLinkIcon");return v(),r("div",null,[u,i("p",null,[n("![排序算法概述.png("),i("a",c,[n("https://290ff162.telegraph-image-eg9.pages.dev/file/f09d5844368902224fda6.png"),l(t)]),n(")")]),m,i("ul",null,[b,o,p,g,i("li",null,[i("p",null,[n("参考资料："),i("a",h,[n("https://www.cnblogs.com/ZuoAndFutureGirl/p/9028287.html"),l(t)])])])]),f,i("ul",null,[x,i("li",null,[n("游戏演示: "),i("a",y,[n("http://www.4399.com/flash/146267_2.htm"),l(t)])]),S]),q])}const L=s(a,[["render",k],["__file","算法.html.vue"]]),B=JSON.parse('{"path":"/backend/cs/%E7%AE%97%E6%B3%95.html","title":"算法","lang":"zh-CN","frontmatter":{"title":"算法","icon":"circle-info","date":"2023-01-01T00:00:00.000Z","tags":"算法","categories":"算法","description":"数据结构和算法 1. 概述 数据data结构(structure)是一门研究组织数据方式的学科，有了编程语言也就有了数据结构.学好数据结构可以编写更加有效率的代码 程序 = 数据结构 + 算法 1.1. 数据结构的分类 线性结构：特点是数据元素之间存在一对一的线性关系：常见的有：数组、队列、链表和栈.有两种不同的存储结构，即顺序存储结构(数组)和链式存...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/cs/%E7%AE%97%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"算法"}],["meta",{"property":"og:description","content":"数据结构和算法 1. 概述 数据data结构(structure)是一门研究组织数据方式的学科，有了编程语言也就有了数据结构.学好数据结构可以编写更加有效率的代码 程序 = 数据结构 + 算法 1.1. 数据结构的分类 线性结构：特点是数据元素之间存在一对一的线性关系：常见的有：数组、队列、链表和栈.有两种不同的存储结构，即顺序存储结构(数组)和链式存..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/fe862b3b8a9644e8f5035.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"算法\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/fe862b3b8a9644e8f5035.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/1e004863e3a952a2c7ac8.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/954fffe0ef1d2c2cbd746.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/18964256b0cd2651705eb.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/84bc3b81a2ae107fe0891.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/15f4bb4bec7ff506159c0.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/42c8f6b8f06cfbbad2482.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/8c51d3e56ec82be128c9b.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/8bb7c9d4b07f9195a38bf.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/5a6d66d80e037389d69d7.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/a053e1ecb9acb06c487e1.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/625043b7e9c3fa53e3c46.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/c9c5e395b4d5db1de172e.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/8eb855b2d5544664f87cc.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/d194d99ba71d3049212fe.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/27bb13aae3705df7a2a85.gif\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/f57e2e5341b50277933c8.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/d0e4012e7fbe7c6019c44.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/995e5814cf08387d0266b.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/10cfa35d42f38c2d7e1fb.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/84e07fa83ecd1eaab1f79.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/187b476f84c465f1adbc0.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/85065fc195f0e6515c7c5.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/ccf39801402e880fc4abb.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/3885cc6d40908c001d40d.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/d7f62ea369236ecbf035c.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/2f128cfff2ee7595c410a.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/797d43e246da0d4516363.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/1e01bd4806df7d8d73d5d.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/0ec2bd6488a829ead8441.png\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"1.1. 数据结构的分类","slug":"_1-1-数据结构的分类","link":"#_1-1-数据结构的分类","children":[]},{"level":2,"title":"1.2. 算法的时间复杂度","slug":"_1-2-算法的时间复杂度","link":"#_1-2-算法的时间复杂度","children":[]},{"level":2,"title":"1.3. 算法的空间复杂度","slug":"_1-3-算法的空间复杂度","link":"#_1-3-算法的空间复杂度","children":[]},{"level":2,"title":"1.4. 算法框架","slug":"_1-4-算法框架","link":"#_1-4-算法框架","children":[{"level":3,"title":"1.4.1. 数据结构的存储方式","slug":"_1-4-1-数据结构的存储方式","link":"#_1-4-1-数据结构的存储方式","children":[]},{"level":3,"title":"1.4.2. 数据结构的基本操作框架(遍历+访问=>树=>二叉树=>前中后序遍历)","slug":"_1-4-2-数据结构的基本操作框架-遍历-访问-树-二叉树-前中后序遍历","link":"#_1-4-2-数据结构的基本操作框架-遍历-访问-树-二叉树-前中后序遍历","children":[]}]},{"level":2,"title":"4.1. 单链表","slug":"_4-1-单链表","link":"#_4-1-单链表","children":[]},{"level":2,"title":"4.2. 双向链表","slug":"_4-2-双向链表","link":"#_4-2-双向链表","children":[]},{"level":2,"title":"4.3. 约瑟夫(Josephu)问题","slug":"_4-3-约瑟夫-josephu-问题","link":"#_4-3-约瑟夫-josephu-问题","children":[]},{"level":2,"title":"6.1. 迷宫问题","slug":"_6-1-迷宫问题","link":"#_6-1-迷宫问题","children":[]},{"level":2,"title":"6.2. 八皇后问题:（回溯算法）","slug":"_6-2-八皇后问题-回溯算法","link":"#_6-2-八皇后问题-回溯算法","children":[]},{"level":2,"title":"7.1. 冒泡排序(Bubble Sorting) O(n^2)","slug":"_7-1-冒泡排序-bubble-sorting-o-n-2","link":"#_7-1-冒泡排序-bubble-sorting-o-n-2","children":[]},{"level":2,"title":"7.2. 选择排序(select sorting)O(n^2)","slug":"_7-2-选择排序-select-sorting-o-n-2","link":"#_7-2-选择排序-select-sorting-o-n-2","children":[]},{"level":2,"title":"7.3. 插入排序(Insertion Sorting)O(n^2)","slug":"_7-3-插入排序-insertion-sorting-o-n-2","link":"#_7-3-插入排序-insertion-sorting-o-n-2","children":[]},{"level":2,"title":"7.4. 希尔排序(shell Sort)O(nlog2n)","slug":"_7-4-希尔排序-shell-sort-o-nlog2n","link":"#_7-4-希尔排序-shell-sort-o-nlog2n","children":[]},{"level":2,"title":"7.5. 快速排序(Quick sort)O(n^2)","slug":"_7-5-快速排序-quick-sort-o-n-2","link":"#_7-5-快速排序-quick-sort-o-n-2","children":[]},{"level":2,"title":"7.6. 归并排序(Merge sort)O(nlog2n)","slug":"_7-6-归并排序-merge-sort-o-nlog2n","link":"#_7-6-归并排序-merge-sort-o-nlog2n","children":[]},{"level":2,"title":"7.7. 基数排序(radix sort)O(nlog2n)","slug":"_7-7-基数排序-radix-sort-o-nlog2n","link":"#_7-7-基数排序-radix-sort-o-nlog2n","children":[]},{"level":2,"title":"8.1. 顺序(线性)查找","slug":"_8-1-顺序-线性-查找","link":"#_8-1-顺序-线性-查找","children":[]},{"level":2,"title":"8.2. 二分/折半查找算法(递归和非递归)","slug":"_8-2-二分-折半查找算法-递归和非递归","link":"#_8-2-二分-折半查找算法-递归和非递归","children":[]},{"level":2,"title":"8.3. 插入查找","slug":"_8-3-插入查找","link":"#_8-3-插入查找","children":[]},{"level":2,"title":"8.4. 斐波那契(黄金分割法)查找算法","slug":"_8-4-斐波那契-黄金分割法-查找算法","link":"#_8-4-斐波那契-黄金分割法-查找算法","children":[]},{"level":2,"title":"10.1. 顺序存储二叉树->堆排序","slug":"_10-1-顺序存储二叉树-堆排序","link":"#_10-1-顺序存储二叉树-堆排序","children":[]},{"level":2,"title":"10.2. 线索化二叉树","slug":"_10-2-线索化二叉树","link":"#_10-2-线索化二叉树","children":[]},{"level":2,"title":"10.3. 堆排序O(nlogn)","slug":"_10-3-堆排序o-nlogn","link":"#_10-3-堆排序o-nlogn","children":[]},{"level":2,"title":"10.4. 霍夫曼树","slug":"_10-4-霍夫曼树","link":"#_10-4-霍夫曼树","children":[]},{"level":2,"title":"10.5. 霍夫曼编码","slug":"_10-5-霍夫曼编码","link":"#_10-5-霍夫曼编码","children":[]},{"level":2,"title":"10.6. 二叉排序树(BST)","slug":"_10-6-二叉排序树-bst","link":"#_10-6-二叉排序树-bst","children":[]},{"level":2,"title":"10.7. 平衡二叉树(avl树)","slug":"_10-7-平衡二叉树-avl树","link":"#_10-7-平衡二叉树-avl树","children":[]},{"level":2,"title":"10.8. B树","slug":"_10-8-b树","link":"#_10-8-b树","children":[]},{"level":2,"title":"11.1. 深度优先遍历基本思想","slug":"_11-1-深度优先遍历基本思想","link":"#_11-1-深度优先遍历基本思想","children":[]},{"level":2,"title":"11.2. 广度优先遍历基本思想","slug":"_11-2-广度优先遍历基本思想","link":"#_11-2-广度优先遍历基本思想","children":[]},{"level":2,"title":"12.1. 汉诺塔","slug":"_12-1-汉诺塔","link":"#_12-1-汉诺塔","children":[]},{"level":2,"title":"13.1. 背包问题","slug":"_13-1-背包问题","link":"#_13-1-背包问题","children":[]}],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":131.15,"words":39345},"filePathRelative":"backend/cs/算法.md","localizedDate":"2023年1月1日","excerpt":"<p>数据结构和算法</p>\\n<!--more-->\\n<h1>1. 概述</h1>\\n<ul>\\n<li>数据data结构(structure)是一门研究组织数据方式的学科，有了编程语言也就有了数据结构.学好数据结构可以编写更加有效率的代码</li>\\n<li>程序 = 数据结构 + 算法</li>\\n</ul>\\n<h2>1.1. 数据结构的分类</h2>\\n<ul>\\n<li>线性结构：特点是数据元素之间存在一对一的线性关系：常见的有：数组、队列、链表和栈.有两种不同的存储结构，即顺序存储结构(数组)和链式存储结构(链表)\\n<ul>\\n<li>顺序存储的线性表称为顺序表，顺序表中的存储元素是连续的</li>\\n<li>链式存储的线性表称为链表，链表中的存储元素不一定是连续的，元素节点中存放数据元素以及相邻元素的地址信息</li>\\n</ul>\\n</li>\\n<li>非线性结构包括：二维数组，多维数组，广义表，树结构，图结构</li>\\n</ul>","autoDesc":true}');export{L as comp,B as data};
