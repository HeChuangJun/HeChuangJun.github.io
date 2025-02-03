import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,b as n,d as t,a as e}from"./app-Cw8r8IGg.js";const i={},p=e(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><ul><li>数据结构(data-structure)是一门研究组织数据方式的学科，</li><li>程序 = 数据结构 + 算法</li></ul><h2 id="数据结构的分类" tabindex="-1"><a class="header-anchor" href="#数据结构的分类"><span>数据结构的分类</span></a></h2><ul><li>线性结构：数据元素之间存在一对一的线性关系：如数组、队列、链表和栈.</li><li>非线性结构：二维数组，多维数组，广义表，树，图</li></ul><h2 id="数据结构的存储方式" tabindex="-1"><a class="header-anchor" href="#数据结构的存储方式"><span>数据结构的存储方式</span></a></h2><ul><li>顺序存储：存储元素是连续的，如数组</li><li>链式存储：存储元素不一定是连续的。元素节点中存放数据元素以及相邻元素的地址信息，如链表</li></ul><h2 id="数据结构特点" tabindex="-1"><a class="header-anchor" href="#数据结构特点"><span>数据结构特点</span></a></h2><ul><li><p>数组：顺序存储，可以随机访问，通过索引查找对应元素，速度快，对于有序数组，还可使用二分查找提高检索速度。而且相对节约存储空间。但正因为连续存储，内存空间必须一次性分配够，所以说数组如果要扩容，需要重新分配一块更大的空间，再把数据全部复制过去，时间复杂度 O(N)；而且你如果想在数组中间进行插入和删除，每次必须搬移后面的所有数据以保持连续，时间复杂度 O(N)。</p></li><li><p>链表：链式存储，靠指针指向下一个元素的位置，所以不存在数组的扩容问题；如果知道某一元素的前驱和后驱，操作指针即可删除该元素或者插入新元素，时间复杂度O(1)。但是正因为存储空间不连续，你无法根据一个索引算出对应元素的地址，所以不能随机访问，查找慢；而且由于每个元素必须存储指向前后元素位置的指针，会消耗相对更多的储存空间。</p></li><li><p>「队列(先进先出)」、「栈(先进先出)」这两种数据结构既可以使用链表也可以使用数组实现。用数组实现，就要处理扩容缩容的问题；用链表实现，没有这个问题，但需要更多的内存空间存储节点指针。</p></li><li><p>「图」的两种表示方法，邻接表就是链表，邻接矩阵就是二维数组。邻接矩阵判断连通性迅速，并可以进行矩阵运算解决一些问题，但是如果图比较稀疏的话很耗费空间。邻接表比较节省空间，但是很多操作的效率上肯定比不过邻接矩阵。</p></li><li><p>「散列表」通过散列函数把键映射到一个大数组里。而且对于解决散列冲突的方法，拉链法需要链表特性，操作简单，但需要额外的空间存储指针；线性探查法就需要数组特性，以便连续寻址，不需要指针的存储空间，但操作稍微复杂些。</p></li><li><p>「树」，用数组实现就是「堆」，因为「堆」是一个完全二叉树，用数组存储不需要节点指针，操作简单；用链表实现就是很常见的那种「树」，因为不一定是完全二叉树，所以不适合用数组存储。为此，在这种链表「树」结构之上衍生出二叉搜索树、AVL 树、红黑树、区间树、B 树等等，以应对不同的问题</p></li></ul><h2 id="算法的时间复杂度" tabindex="-1"><a class="header-anchor" href="#算法的时间复杂度"><span>算法的时间复杂度</span></a></h2><ul><li>度量一个程序(算法)执行时间方法 <ul><li>事后统计：同一台计算机的相同状态（硬件、软件）下运行并计算使用的时间</li><li>事前估算：分析算法时间复杂度</li></ul></li><li>时间频度 <ul><li>一个算法花费的时间与算法中语句的执行次数成正比例</li><li>一个算法中的语句执行次数称为语句频度或时间频度记为T(n)。</li></ul></li><li>时间复杂度:算法中的基本操作语句的重复执行次数是问题规模n的某个函数，用T(n)表示，若有某个辅助函数f(n)，使得当n趋近于无穷大时，<code>T(n) / f(n)</code> 的极限值为不等于零的常数，则称f(n)是T(n)的同数量级函数。记作 <code>T(n)=Ｏ( f(n) )，称Ｏ( f(n) )</code>  为算法的渐进时间复杂度，简称时间复杂度。T(n) 不同，但时间复杂度可能相同。 如：T(n)=n²+7n+6 与 T(n)=3n²+2n+2 它们的T(n) 不同，但时间复杂度相同，都为O(n²)</li><li>计算时间复杂度的方法： <ul><li>常数1代替运行时间中的所有加法常数  <code>T(n)=n²+7n+6 =&gt; T(n)=n²+7n+1</code></li><li>修改后的运行次数函数中，只保留最高阶项  <code>T(n)=n²+7n+1 =&gt; T(n) = n²</code></li><li>去除最高阶项的系数 <code>T(n) = 4n² =&gt; T(n) = n² =&gt; O(n²)</code></li></ul></li><li>平均时间复杂度：所有可能的输入实例均以等概率出现的情况下算法的运行时间。</li><li>最坏时间复杂度：最坏情况下的时间复杂度。一般讨论的时间复杂度均是最坏情况下的时间复杂度</li></ul><h2 id="常见的时间复杂度" tabindex="-1"><a class="header-anchor" href="#常见的时间复杂度"><span>常见的时间复杂度</span></a></h2><ul><li>常数阶O(1):无论代码执行了多少行，只要是没有循环等复杂结构，代码的时间复杂度就都是O(1)<code>while i&lt;11 do i = i+1</code></li><li>对数阶O(log2n) <code>int i = 1 ; while(i&lt;n){ i = i*2 } </code>二分查找</li><li>线性阶O(n) <code>for(int i=0;i&lt;n;i++){System.out.print(i)}</code></li><li>线性对数阶O(nlog2n) <code>for(int m=0;m&lt;n;m++){ int 1 = 1 ; while(i&lt;n){ i = i*2 } }</code></li><li>平方阶O(n^2) <code>for(int i=0;i&lt;n;i++){for(int j=0;j&lt;n;j++){System.out.print(j)}}</code></li><li>立方阶O(n^3)</li><li>k次方阶O(n^k)</li><li>指数阶O(2^n)集合里面找子集合</li><li>O(n!)找字符串所有排列</li><li>归并排序O(nlog(n))</li><li>O(nm)遍历二维数组</li><li>常见的算法时间复杂度由小到大依次为：<code>Ο(1)＜Ο(log2n)＜Ο(n)＜Ο(nlog2n)＜Ο(n2)＜Ο(n3)＜Ο(nk)＜Ο(2n)</code>,尽可能避免使用指数阶的算法</li></ul><h2 id="算法的空间复杂度" tabindex="-1"><a class="header-anchor" href="#算法的空间复杂度"><span>算法的空间复杂度</span></a></h2><ul><li>算法的空间复杂度(Space Complexity)定义为该算法所耗费的存储空间，也是问题规模n的函数。是对一个算法在运行过程中临时占用存储空间大小的量度</li><li>有的算法需要占用的临时工作单元数与与解决问题的规模n成正比，例如快速排序和归并排序算法</li><li>算法分析主要讨论的是时间复杂度。从用户使用体验上看，更看重的程序执行的速度。缓存(redis, memcache)和算法(基数排序)本质就是用空间换时间.</li></ul><h2 id="数据结构的基本操作框架-遍历-访问-树-二叉树-前中后序遍历" tabindex="-1"><a class="header-anchor" href="#数据结构的基本操作框架-遍历-访问-树-二叉树-前中后序遍历"><span>数据结构的基本操作框架(遍历+访问=&gt;树=&gt;二叉树=&gt;前中后序遍历)</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>数组遍历框架，典型的线性迭代结构
<span class="token keyword">void</span> <span class="token function">traverse</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 迭代访问 arr[i]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>链表遍历框架，兼具迭代和递归结构
<span class="token comment">/* 基本的单链表节点 */</span>
<span class="token keyword">class</span> <span class="token class-name">ListNode</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> val<span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">traverse</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">ListNode</span> p <span class="token operator">=</span> head<span class="token punctuation">;</span> p <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> p <span class="token operator">=</span> p<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 迭代访问 p.val</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">traverse</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 递归访问 head.val</span>
    <span class="token function">traverse</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>二叉树遍历框架，典型的非线性递归遍历结构
<span class="token comment">/* 基本的二叉树节点 */</span>
<span class="token keyword">class</span> <span class="token class-name">TreeNode</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> val<span class="token punctuation">;</span>
    <span class="token class-name">TreeNode</span> left<span class="token punctuation">,</span> right<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">traverse</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>二叉树框架可以扩展为 <span class="token class-name">N</span> 叉树的遍历框架
<span class="token comment">/* 基本的 N 叉树节点 */</span>
<span class="token keyword">class</span> <span class="token class-name">TreeNode</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> val<span class="token punctuation">;</span>
    <span class="token class-name">TreeNode</span><span class="token punctuation">[</span><span class="token punctuation">]</span> children<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">traverse</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">TreeNode</span> child <span class="token operator">:</span> root<span class="token punctuation">.</span>children<span class="token punctuation">)</span>
        <span class="token function">traverse</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>大部分算法技巧，本质上都是树的遍历问题
<span class="token keyword">void</span> <span class="token function">traverse</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 前序遍历</span>
    <span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
    <span class="token comment">// 中序遍历</span>
    <span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
    <span class="token comment">// 后序遍历</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">//动态规划模板</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">solve</span><span class="token punctuation">(</span><span class="token keyword">int</span> target<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> items<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>target <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// 初始化dp数组，假设所有值都未能被正确计算过</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>dp<span class="token punctuation">,</span> target<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//一般是target+1或者1</span>
        
        <span class="token comment">// 初始状态</span>
        dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// dp[0] = 0，因为0不需要任何数来组成</span>

        <span class="token comment">// 遍历目标值，从1到target</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> target<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 遍历每个物品（如硬币或平方数）</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> items<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>items<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//不能大于物品总值</span>
                    dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> items<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        
        <span class="token keyword">return</span> dp<span class="token punctuation">[</span>target<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> dp<span class="token punctuation">[</span>target<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="算法总结" tabindex="-1"><a class="header-anchor" href="#算法总结"><span>算法总结</span></a></h1>`,22),o={class:"MathJax",jax:"SVG",style:{position:"relative"}},c={style:{"vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.179ex",height:"1.595ex",role:"img",focusable:"false",viewBox:"0 -694 521 705","aria-hidden":"true"},u=n("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[n("g",{"data-mml-node":"math"},[n("g",{"data-mml-node":"mi"},[n("path",{"data-c":"1D458",d:"M121 647Q121 657 125 670T137 683Q138 683 209 688T282 694Q294 694 294 686Q294 679 244 477Q194 279 194 272Q213 282 223 291Q247 309 292 354T362 415Q402 442 438 442Q468 442 485 423T503 369Q503 344 496 327T477 302T456 291T438 288Q418 288 406 299T394 328Q394 353 410 369T442 390L458 393Q446 405 434 405H430Q398 402 367 380T294 316T228 255Q230 254 243 252T267 246T293 238T320 224T342 206T359 180T365 147Q365 130 360 106T354 66Q354 26 381 26Q429 26 459 145Q461 153 479 153H483Q499 153 499 144Q499 139 496 130Q455 -11 378 -11Q333 -11 305 15T277 90Q277 108 280 121T283 145Q283 167 269 183T234 206T200 217T182 220H180Q168 178 159 139T145 81T136 44T129 20T122 7T111 -2Q98 -11 83 -11Q66 -11 57 -1T48 16Q48 26 85 176T158 471L195 616Q196 629 188 632T149 637H144Q134 637 131 637T124 640T121 647Z"})])])],-1),r=[u],d=n("mjx-assistive-mml",{unselectable:"on",display:"inline"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("mi",null,"k")])],-1),k={class:"MathJax",jax:"SVG",style:{position:"relative"}},m={style:{"vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.076ex",height:"1.756ex",role:"img",focusable:"false",viewBox:"0 -694 2243.4 776","aria-hidden":"true"},v=e('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D458" d="M121 647Q121 657 125 670T137 683Q138 683 209 688T282 694Q294 694 294 686Q294 679 244 477Q194 279 194 272Q213 282 223 291Q247 309 292 354T362 415Q402 442 438 442Q468 442 485 423T503 369Q503 344 496 327T477 302T456 291T438 288Q418 288 406 299T394 328Q394 353 410 369T442 390L458 393Q446 405 434 405H430Q398 402 367 380T294 316T228 255Q230 254 243 252T267 246T293 238T320 224T342 206T359 180T365 147Q365 130 360 106T354 66Q354 26 381 26Q429 26 459 145Q461 153 479 153H483Q499 153 499 144Q499 139 496 130Q455 -11 378 -11Q333 -11 305 15T277 90Q277 108 280 121T283 145Q283 167 269 183T234 206T200 217T182 220H180Q168 178 159 139T145 81T136 44T129 20T122 7T111 -2Q98 -11 83 -11Q66 -11 57 -1T48 16Q48 26 85 176T158 471L195 616Q196 629 188 632T149 637H144Q134 637 131 637T124 640T121 647Z"></path></g><g data-mml-node="mo" transform="translate(743.2,0)"><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path></g><g data-mml-node="mn" transform="translate(1743.4,0)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path></g></g></g>',1),T=[v],h=n("mjx-assistive-mml",{unselectable:"on",display:"inline"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("mi",null,"k"),n("mo",null,"−"),n("mn",null,"1")])],-1),Q={class:"MathJax",jax:"SVG",style:{position:"relative"}},g={style:{"vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.179ex",height:"1.595ex",role:"img",focusable:"false",viewBox:"0 -694 521 705","aria-hidden":"true"},b=n("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[n("g",{"data-mml-node":"math"},[n("g",{"data-mml-node":"mi"},[n("path",{"data-c":"1D458",d:"M121 647Q121 657 125 670T137 683Q138 683 209 688T282 694Q294 694 294 686Q294 679 244 477Q194 279 194 272Q213 282 223 291Q247 309 292 354T362 415Q402 442 438 442Q468 442 485 423T503 369Q503 344 496 327T477 302T456 291T438 288Q418 288 406 299T394 328Q394 353 410 369T442 390L458 393Q446 405 434 405H430Q398 402 367 380T294 316T228 255Q230 254 243 252T267 246T293 238T320 224T342 206T359 180T365 147Q365 130 360 106T354 66Q354 26 381 26Q429 26 459 145Q461 153 479 153H483Q499 153 499 144Q499 139 496 130Q455 -11 378 -11Q333 -11 305 15T277 90Q277 108 280 121T283 145Q283 167 269 183T234 206T200 217T182 220H180Q168 178 159 139T145 81T136 44T129 20T122 7T111 -2Q98 -11 83 -11Q66 -11 57 -1T48 16Q48 26 85 176T158 471L195 616Q196 629 188 632T149 637H144Q134 637 131 637T124 640T121 647Z"})])])],-1),w=[b],f=n("mjx-assistive-mml",{unselectable:"on",display:"inline"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("mi",null,"k")])],-1),_={class:"MathJax",jax:"SVG",style:{position:"relative"}},x={style:{"vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.03ex",height:"1.756ex",role:"img",focusable:"false",viewBox:"0 -694 3107.4 776","aria-hidden":"true"},y=e('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D459" d="M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z"></path></g><g data-mml-node="mi" transform="translate(298,0)"><path data-c="1D452" d="M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z"></path></g><g data-mml-node="mi" transform="translate(764,0)"><path data-c="1D45B" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"></path></g><g data-mml-node="mo" transform="translate(1586.2,0)"><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path></g><g data-mml-node="mi" transform="translate(2586.4,0)"><path data-c="1D458" d="M121 647Q121 657 125 670T137 683Q138 683 209 688T282 694Q294 694 294 686Q294 679 244 477Q194 279 194 272Q213 282 223 291Q247 309 292 354T362 415Q402 442 438 442Q468 442 485 423T503 369Q503 344 496 327T477 302T456 291T438 288Q418 288 406 299T394 328Q394 353 410 369T442 390L458 393Q446 405 434 405H430Q398 402 367 380T294 316T228 255Q230 254 243 252T267 246T293 238T320 224T342 206T359 180T365 147Q365 130 360 106T354 66Q354 26 381 26Q429 26 459 145Q461 153 479 153H483Q499 153 499 144Q499 139 496 130Q455 -11 378 -11Q333 -11 305 15T277 90Q277 108 280 121T283 145Q283 167 269 183T234 206T200 217T182 220H180Q168 178 159 139T145 81T136 44T129 20T122 7T111 -2Q98 -11 83 -11Q66 -11 57 -1T48 16Q48 26 85 176T158 471L195 616Q196 629 188 632T149 637H144Q134 637 131 637T124 640T121 647Z"></path></g></g></g>',1),j=[y],H=n("mjx-assistive-mml",{unselectable:"on",display:"inline"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("mi",null,"l"),n("mi",null,"e"),n("mi",null,"n"),n("mo",null,"−"),n("mi",null,"k")])],-1),M=n("li",null,"已知大索引right，小索引left，个数right-left+1",-1),N=n("li",null,"数组topN问题，第几大小，第几高频，思路先去重，再堆排序，条件改为题目的条件，用hashMap构建数据与topn条件的关系",-1),L=n("li",null,"二叉平衡树topN问题，使用中序遍历得到数组是有序的",-1),O=n("li",null,"求连续总和问题，都可以用到前缀和的思想",-1),V=n("li",null,"记录字母出现次数或者字母最后一次出现的位置int[] arr = new int[26];arr[s.charAt(i) - 'a'] = i;",-1),Z=n("li",null,"切割个十百千位",-1),C=e(`<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>    <span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token function">getNextNumber</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> temp <span class="token operator">=</span> n <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">;</span>
            res <span class="token operator">+=</span> temp <span class="token operator">*</span> temp<span class="token punctuation">;</span>
            n <span class="token operator">=</span> n <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="队列和栈区别" tabindex="-1"><a class="header-anchor" href="#队列和栈区别"><span>队列和栈区别？</span></a></h2><p>队列：先进先出（FIFO, First-In-First-Out）的数据结构。第一个加入队列的元素会是第一个被移除的。用于处理按顺序的任务<br> 栈：后进先出（LIFO, Last-In-First-Out）的数据结构。最后一个加入栈的元素会是第一个被移除的。用于需要访问最新添加的数据元素</p>`,3);function S(B,D){return a(),s("div",null,[p,n("ul",null,[n("li",null,[t("顺数第"),n("mjx-container",o,[(a(),s("svg",c,r)),d]),t("个索引是"),n("mjx-container",k,[(a(),s("svg",m,T)),h]),t("，倒数第"),n("mjx-container",Q,[(a(),s("svg",g,w)),f]),t("个索引是"),n("mjx-container",_,[(a(),s("svg",x,j)),H]),t("，顺数第len-k+1个")]),M,N,L,O,V,Z]),C])}const G=l(i,[["render",S],["__file","introduction.html.vue"]]),A=JSON.parse('{"path":"/interview/datastructure/introduction.html","title":"概述","lang":"zh-CN","frontmatter":{"title":"概述","icon":"circle-info","date":"2023-01-01T00:00:00.000Z","tags":"概述","categories":"面试","description":"概述 数据结构(data-structure)是一门研究组织数据方式的学科， 程序 = 数据结构 + 算法 数据结构的分类 线性结构：数据元素之间存在一对一的线性关系：如数组、队列、链表和栈. 非线性结构：二维数组，多维数组，广义表，树，图 数据结构的存储方式 顺序存储：存储元素是连续的，如数组 链式存储：存储元素不一定是连续的。元素节点中存放数据元素...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/interview/datastructure/introduction.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"概述"}],["meta",{"property":"og:description","content":"概述 数据结构(data-structure)是一门研究组织数据方式的学科， 程序 = 数据结构 + 算法 数据结构的分类 线性结构：数据元素之间存在一对一的线性关系：如数组、队列、链表和栈. 非线性结构：二维数组，多维数组，广义表，树，图 数据结构的存储方式 顺序存储：存储元素是连续的，如数组 链式存储：存储元素不一定是连续的。元素节点中存放数据元素..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"概述\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"数据结构的分类","slug":"数据结构的分类","link":"#数据结构的分类","children":[]},{"level":2,"title":"数据结构的存储方式","slug":"数据结构的存储方式","link":"#数据结构的存储方式","children":[]},{"level":2,"title":"数据结构特点","slug":"数据结构特点","link":"#数据结构特点","children":[]},{"level":2,"title":"算法的时间复杂度","slug":"算法的时间复杂度","link":"#算法的时间复杂度","children":[]},{"level":2,"title":"常见的时间复杂度","slug":"常见的时间复杂度","link":"#常见的时间复杂度","children":[]},{"level":2,"title":"算法的空间复杂度","slug":"算法的空间复杂度","link":"#算法的空间复杂度","children":[]},{"level":2,"title":"数据结构的基本操作框架(遍历+访问=>树=>二叉树=>前中后序遍历)","slug":"数据结构的基本操作框架-遍历-访问-树-二叉树-前中后序遍历","link":"#数据结构的基本操作框架-遍历-访问-树-二叉树-前中后序遍历","children":[]},{"level":2,"title":"队列和栈区别？","slug":"队列和栈区别","link":"#队列和栈区别","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":7.92,"words":2376},"filePathRelative":"interview/datastructure/introduction.md","localizedDate":"2023年1月1日","excerpt":"<h2>概述</h2>\\n<ul>\\n<li>数据结构(data-structure)是一门研究组织数据方式的学科，</li>\\n<li>程序 = 数据结构 + 算法</li>\\n</ul>\\n<h2>数据结构的分类</h2>\\n<ul>\\n<li>线性结构：数据元素之间存在一对一的线性关系：如数组、队列、链表和栈.</li>\\n<li>非线性结构：二维数组，多维数组，广义表，树，图</li>\\n</ul>\\n<h2>数据结构的存储方式</h2>\\n<ul>\\n<li>顺序存储：存储元素是连续的，如数组</li>\\n<li>链式存储：存储元素不一定是连续的。元素节点中存放数据元素以及相邻元素的地址信息，如链表</li>\\n</ul>","autoDesc":true}');export{G as comp,A as data};
