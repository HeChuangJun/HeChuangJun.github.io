import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as p}from"./app-CAt2Ig6m.js";const t={},e=p(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p>大顶堆：根节点（堆顶元素）是所有节点中的最大值（父节点都大于左右子节点）。常用于实现优先队列，构建堆排序算法。升序，第k大，前k高<br> 小顶堆：小顶堆中的根节点是所有节点中的最小值（父节点都小于左右子节点）。常用于查找流中的前K个最小元素。降序</p><p>Binary Heapconstruction O(n)<br> Polling O(log(n))<br> Peeking O(1)<br> Adding O(log(n))</p><p>Naive Removing O(n)<br> Advanced removing withhelp from a hash table O(log(n))<br> Naive contains O(n)<br> Contains check withhelp of a hash table O(1)</p><ul><li>使用哈希表来帮助优化这些操作确实会占用线性空间，并且还会给二叉堆实现增加一些开销。</li></ul><h2 id="t215数组中的第k个最大元素" tabindex="-1"><a class="header-anchor" href="#t215数组中的第k个最大元素"><span>t215数组中的第K个最大元素</span></a></h2><p>给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。<br> 请注意，你需要找的是数组排序后的第k个最大的元素，而不是第k个不同的元素。<br> 时间复杂度为 O(n) 的算法解决此问题。<br> 示例 1: 输入: [3,2,1,5,6,4], k = 2 输出: 5</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>时间复杂度：<span class="token class-name">O</span><span class="token punctuation">(</span>nlogn<span class="token punctuation">)</span>，建堆的时间代价是 <span class="token class-name">O</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>，删除的总代价是 <span class="token class-name">O</span><span class="token punctuation">(</span>klogn<span class="token punctuation">)</span>，
因为 k<span class="token operator">&lt;</span>n，故渐进时间复杂为 <span class="token class-name">O</span><span class="token punctuation">(</span>n<span class="token operator">+</span>klogn<span class="token punctuation">)</span><span class="token operator">=</span><span class="token class-name">O</span><span class="token punctuation">(</span>nlogn<span class="token punctuation">)</span>。
空间复杂度：<span class="token class-name">O</span><span class="token punctuation">(</span>logn<span class="token punctuation">)</span>，即递归使用栈空间的空间代价。
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">findKthLargest</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span>nums<span class="token punctuation">.</span>length<span class="token operator">/</span><span class="token number">2</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&gt;=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">adjustHeap</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span>i<span class="token punctuation">,</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span>nums<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&gt;</span>nums<span class="token punctuation">.</span>length<span class="token operator">-</span>k<span class="token punctuation">;</span>i<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">int</span> temp <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
            <span class="token function">adjustHeap</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">adjustHeap</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> len<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> temp <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> k<span class="token operator">=</span><span class="token number">2</span><span class="token operator">*</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>k<span class="token operator">&lt;</span>len<span class="token punctuation">;</span>k<span class="token operator">=</span><span class="token number">2</span><span class="token operator">*</span>k<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>k<span class="token operator">+</span><span class="token number">1</span><span class="token operator">&lt;</span>len <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>k<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                k<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">&gt;</span> temp<span class="token punctuation">)</span><span class="token punctuation">{</span>
                nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span>
                i<span class="token operator">=</span>k<span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_347前k个高频元素" tabindex="-1"><a class="header-anchor" href="#_347前k个高频元素"><span>347前K个高频元素</span></a></h2><p>给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。可以按任意顺序返回答案。<br> 示例 1:输入: nums = [1,1,1,2,2,3], k = 2输出: [1,2]<br> 示例 2:输入: nums = [1], k = 1 输出: [1]</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>思路比较的条件可以是大小也可以是频率
时间复杂度：<span class="token class-name">O</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>，n 表示数组的长度。
遍历一遍数组统计元素的频率时间复杂度 <span class="token class-name">O</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>；
桶的数量为 n<span class="token operator">+</span><span class="token number">1</span>，所以桶排序的时间复杂度为 <span class="token class-name">O</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>；
因此，总的时间复杂度是 <span class="token class-name">O</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>。
空间复杂度：很明显为 <span class="token class-name">O</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">topKFrequent</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 统计每个数字的出现频率</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> num <span class="token operator">:</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> map<span class="token punctuation">.</span><span class="token function">getOrDefault</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 把所有不同的数字放到一个数组里，方便后续操作</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> uniqueNums <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>map<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> num <span class="token operator">:</span> map<span class="token punctuation">.</span><span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            uniqueNums<span class="token punctuation">[</span>index<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> num<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 构建大根堆</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> uniqueNums<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">adjustHeap</span><span class="token punctuation">(</span>uniqueNums<span class="token punctuation">,</span> i<span class="token punctuation">,</span> uniqueNums<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 取出前 k 个频繁的数字</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> uniqueNums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&gt;=</span> uniqueNums<span class="token punctuation">.</span>length <span class="token operator">-</span> k<span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> temp <span class="token operator">=</span> uniqueNums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
            uniqueNums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> uniqueNums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            uniqueNums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
            <span class="token function">adjustHeap</span><span class="token punctuation">(</span>uniqueNums<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 返回结果</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>uniqueNums<span class="token punctuation">,</span> uniqueNums<span class="token punctuation">.</span>length <span class="token operator">-</span> k<span class="token punctuation">,</span> result<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">adjustHeap</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> k <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> k <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> k <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> k <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;</span> len <span class="token operator">&amp;&amp;</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>k <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                k<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span>
                i <span class="token operator">=</span> k<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_295数据流的中位数" tabindex="-1"><a class="header-anchor" href="#_295数据流的中位数"><span>295数据流的中位数</span></a></h2><p>中位数是有序整数列表中的中间值。如果列表的大小是偶数，则没有中间值，中位数是两个中间值的平均值。<br> 例如 arr = [2,3,4] 的中位数是 3 。<br> 例如 arr = [2,3] 的中位数是 (2 + 3) / 2 = 2.5 。<br> 实现 MedianFinder 类:<br> MedianFinder() 初始化 MedianFinder 对象。<br> void addNum(int num) 将数据流中的整数 num 添加到数据结构中。<br> double findMedian() 返回到目前为止所有元素的中位数。与实际答案相差 10-5 以内的答案将被接受。<br> 示例 1：<br> 输入 [&quot;MedianFinder&quot;, &quot;addNum&quot;, &quot;addNum&quot;, &quot;findMedian&quot;, &quot;addNum&quot;, &quot;findMedian&quot;]<br> [[], [1], [2], [], [3], []]<br> 输出 [null, null, null, 1.5, null, 2.0]</p><p>解释<br> MedianFinder medianFinder = new MedianFinder();<br> medianFinder.addNum(1); // arr = [1]<br> medianFinder.addNum(2); // arr = [1, 2]<br> medianFinder.findMedian(); // 返回 1.5 ((1 + 2) / 2)<br> medianFinder.addNum(3); // arr[1, 2, 3]<br> medianFinder.findMedian(); // return 2.0</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>时间复杂度：addNum<span class="token operator">:</span> <span class="token class-name">O</span><span class="token punctuation">(</span>logn<span class="token punctuation">)</span>，其中 n 为累计添加的数的数量。findMedian<span class="token operator">:</span> <span class="token class-name">O</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>。
空间复杂度：<span class="token class-name">O</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>，主要为优先队列的开销。

<span class="token keyword">class</span> <span class="token class-name">MedianFinder</span> <span class="token punctuation">{</span>
    <span class="token class-name">PriorityQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> queMin<span class="token punctuation">;</span>
    <span class="token class-name">PriorityQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> queMax<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">MedianFinder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        queMin <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PriorityQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">(</span>b <span class="token operator">-</span> a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//小顶堆</span>
        queMax <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PriorityQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">(</span>a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//大顶堆</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addNum</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>queMin<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> num <span class="token operator">&lt;=</span> queMin<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            queMin<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>queMax<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;</span> queMin<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                queMax<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>queMin<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            queMax<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>queMax<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> queMin<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                queMin<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>queMax<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">findMedian</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>queMin<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> queMax<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> queMin<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>queMin<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> queMax<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2.0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),o=[e];function c(u,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","heap.html.vue"]]),d=JSON.parse('{"path":"/interview/datastructure/heap.html","title":"堆","lang":"zh-CN","frontmatter":{"title":"堆","icon":"circle-info","date":"2023-01-01T00:00:00.000Z","tags":"堆","categories":"面试","description":"介绍 大顶堆：根节点（堆顶元素）是所有节点中的最大值（父节点都大于左右子节点）。常用于实现优先队列，构建堆排序算法。升序，第k大，前k高 小顶堆：小顶堆中的根节点是所有节点中的最小值（父节点都小于左右子节点）。常用于查找流中的前K个最小元素。降序 Binary Heapconstruction O(n) Polling O(log(n)) Peekin...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/interview/datastructure/heap.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"堆"}],["meta",{"property":"og:description","content":"介绍 大顶堆：根节点（堆顶元素）是所有节点中的最大值（父节点都大于左右子节点）。常用于实现优先队列，构建堆排序算法。升序，第k大，前k高 小顶堆：小顶堆中的根节点是所有节点中的最小值（父节点都小于左右子节点）。常用于查找流中的前K个最小元素。降序 Binary Heapconstruction O(n) Polling O(log(n)) Peekin..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"堆\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"t215数组中的第K个最大元素","slug":"t215数组中的第k个最大元素","link":"#t215数组中的第k个最大元素","children":[]},{"level":2,"title":"347前K个高频元素","slug":"_347前k个高频元素","link":"#_347前k个高频元素","children":[]},{"level":2,"title":"295数据流的中位数","slug":"_295数据流的中位数","link":"#_295数据流的中位数","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.9,"words":1169},"filePathRelative":"interview/datastructure/heap.md","localizedDate":"2023年1月1日","excerpt":"<h2>介绍</h2>\\n<p>大顶堆：根节点（堆顶元素）是所有节点中的最大值（父节点都大于左右子节点）。常用于实现优先队列，构建堆排序算法。升序，第k大，前k高<br>\\n小顶堆：小顶堆中的根节点是所有节点中的最小值（父节点都小于左右子节点）。常用于查找流中的前K个最小元素。降序</p>\\n<p>Binary Heapconstruction O(n)<br>\\nPolling O(log(n))<br>\\nPeeking O(1)<br>\\nAdding O(log(n))</p>\\n<p>Naive Removing O(n)<br>\\nAdvanced removing withhelp from a hash table O(log(n))<br>\\nNaive contains O(n)<br>\\nContains check withhelp of a hash table O(1)</p>","autoDesc":true}');export{r as comp,d as data};