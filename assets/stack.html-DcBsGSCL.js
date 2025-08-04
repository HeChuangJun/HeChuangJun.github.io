import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e as t}from"./app-7KT7HDzT.js";const e={},p=t(`<h2 id="什么是栈" tabindex="-1"><a class="header-anchor" href="#什么是栈"><span>什么是栈?</span></a></h2><ul><li><p>栈是一种单端线性数据结构，它通过两个主要操作（即推送和弹出）模拟真实世界的栈。</p></li><li><p>栈是一个先入后出(FILO-First In Last Out)的有序列表。</p></li><li><p>栈(stack)是限制线性表中元素的插入和删除只能在线性表的同一端进行的一种特殊线性表。允许插入和删除的一端，为变化的一端，称为栈顶(Top)，另一端为固定的一端，称为栈底(Bottom)。</p></li><li><p>使用场景</p><ul><li>由文本编辑器中的撤消机制使用。</li><li>用于编译器语法检查以匹配括号和花括号。[(){}]</li><li>在后台使用以通过跟踪以前的函数调用来支持递归。</li><li>图的深度优先搜索 (DFS)</li><li>子程序的调用：在跳往子程序前，会先将下个指令的地址存到堆栈中，直到子程序执行完后再将地址取出，以回到原来的程序中</li><li>处理递归调用：和子程序的调用类似，只是除了储存下一个指令的地址外，也将参数、区域变量等数据存入堆栈中。</li><li>表达式的转换<code>[中缀表达式转后缀表达式]</code>与求值(实际解决)。</li><li>二叉树的遍历。</li><li>汉诺塔</li><li>问题:表达式2x7x1+5计算机底层怎么计算,计算机收到的是一个字符串</li></ul></li><li><p>复杂度分析<br> pushing O(1)<br> popping O(1)<br> peeking O(1)<br> searching O(n)因为可能要搜索整个链表<br> size O(1)<br> 单调栈是一种特殊的栈，它的特点是栈内的元素保持某种单调性。根据单调性的不同，可以分为单调递增栈和单调递减栈。</p></li><li><p>单调递增栈</p><ul><li>定义: 单调递增栈中的元素从栈底到栈顶是严格递增的（即：栈顶元素小于或等于栈底元素）。</li><li>维护规则:当新元素要入栈时，如果栈顶元素大于或等于新元素，则弹出栈顶元素，直到栈顶元素小于新元素或栈为空时，再将新元素入栈。</li><li>作用:栈顶找到右边第一个比他小的元素</li><li>应用场景: 典型的应用是在解决“柱状图中最大的矩形面积”问题时，利用单调递增栈来确定每个柱子的左、右边界。</li></ul></li><li><p>单调递减栈</p><ul><li>定义: 单调递减栈中的元素从栈底到栈顶是严格递减的（即：栈顶元素大于或等于栈底元素）。</li><li>维护规则:当新元素要入栈时，如果栈顶元素小于或等于新元素，则弹出栈顶元素，直到栈顶元素大于新元素或栈为空时，再将新元素入栈。</li><li>作用:栈顶找到右边第一个比他大的元素</li><li>应用场景: 单调递减栈常用于寻找“下一个更大元素”的问题，例如在股票价格、温度变化等场景中。</li></ul></li><li><p>区别与选择<br> 单调递增栈:主要用于寻找数组中比当前元素小的值或寻找最小值问题。可以帮助在 O(n) 的时间复杂度内找到某个元素的左右边界。<br> 通常用于“最小值”问题，比如找到某个柱子左右最近的高度小于等于它的柱子。</p></li></ul><p>单调递减栈:主要用于寻找数组中比当前元素大的值或寻找最大值问题。<br> 常用于解决“最大值”问题，比如找到每个元素在其右边第一个大于它的元素。<br> 在股票买卖问题或温度问题中，它可以有效地找到某一天之后的最高温度或最高股票价格。</p><h2 id="基于数组实现stack" tabindex="-1"><a class="header-anchor" href="#基于数组实现stack"><span>基于数组实现stack</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ArrayStack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span> <span class="token class-name">Iterable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">E</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> top <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">&quot;all&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">ArrayStack</span><span class="token punctuation">(</span><span class="token keyword">int</span> capacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>array <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">E</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">[</span>capacity<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token class-name">E</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isFull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        array<span class="token punctuation">[</span>top<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">E</span> <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> array<span class="token punctuation">[</span><span class="token operator">--</span>top<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">E</span> <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> array<span class="token punctuation">[</span>top<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> top <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isFull</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> top <span class="token operator">==</span> array<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> p <span class="token operator">=</span> top<span class="token punctuation">;</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> p <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token class-name">E</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> array<span class="token punctuation">[</span><span class="token operator">--</span>p<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基于链表实现stack" tabindex="-1"><a class="header-anchor" href="#基于链表实现stack"><span>基于链表实现stack</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LinkedListStack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span> <span class="token class-name">Iterable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span> capacity<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> size<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">LinkedListStack</span><span class="token punctuation">(</span><span class="token keyword">int</span> capacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>capacity <span class="token operator">=</span> capacity<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token class-name">E</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isFull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        head<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> head<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
        size<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">E</span> <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> first <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        head<span class="token punctuation">.</span>next <span class="token operator">=</span> first<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        size<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> first<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">E</span> <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> head<span class="token punctuation">.</span>next<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> head<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isFull</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> size <span class="token operator">==</span> capacity<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> p <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> p <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token class-name">E</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">E</span> value <span class="token operator">=</span> p<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
                p <span class="token operator">=</span> p<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                <span class="token keyword">return</span> value<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
        <span class="token class-name">E</span> value<span class="token punctuation">;</span>
        <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> next<span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token class-name">E</span> value<span class="token punctuation">,</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="前缀表达式" tabindex="-1"><a class="header-anchor" href="#前缀表达式"><span>前缀表达式</span></a></h2><ul><li>从右至左扫描表达式，遇到数字时压入堆栈，遇到运算符时，弹出栈顶的两个数，用运算符对它们做相应的计算（栈顶元素和次顶元素），并将结果入栈；重复上述过程直到表达式最左端，最后运算得出的值即为表达式的结果</li><li>例如: <code>(3+4)×5-6</code> 对应的前缀表达式就是 <code>- × + 3 4 5 6 </code>, 针对前缀表达式求值步骤如下: <ul><li>从右至左扫描，将6、5、4、3压入堆栈</li><li>遇到+运算符，因此弹出3和4（3为栈顶元素，4为次顶元素），计算出3+4的值，得7，再将7入栈</li><li>接下来是×运算符，因此弹出7和5，计算出7×5=35，将35入栈</li><li>最后是-运算符，计算出35-6的值，即29，由此得出最终结果</li></ul></li></ul><h2 id="中缀表达式-波兰表达式" tabindex="-1"><a class="header-anchor" href="#中缀表达式-波兰表达式"><span>中缀表达式(波兰表达式)</span></a></h2><ul><li>中缀表达式如<code>(3+4)×5-6</code>，对计算机来说却不好操作，因此，往往会将中缀表达式转成其它表达式来操作(一般转成后缀表达式.)</li><li>使用栈完成(中缀)表达式的计算思路 <ul><li>通过一个index值（索引），来遍历我们的表达式</li><li>如果我们发现是一个数字, 就直接入数栈</li><li>如果发现扫描到是一个符号, 就分如下情况 <ul><li>如果发现当前的符号栈为空，就直接入栈</li><li>如果符号栈有操作符，就进行比较, <ul><li>如果当前的操作符的优先级小于或者等于栈中的操作符，就需要从数栈中pop出两个数,在从符号栈中pop出一个符号，进行运算，将得到结果入数栈，然后将当前的操作符入符号栈，</li><li>如果当前的操作符的优先级大于栈中的操作符， 就直接入符号栈.</li></ul></li></ul></li><li>当表达式扫描完毕，就顺序的从 数栈和符号栈中pop出相应的数和符号，并运行.</li><li>最后在数栈只有一个数字，就是表达式的结果</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>在上个例子中添加三个方法，并改名为ArrayStack2类
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="后缀表达式-逆波兰表达式" tabindex="-1"><a class="header-anchor" href="#后缀表达式-逆波兰表达式"><span>后缀表达式(逆波兰表达式)</span></a></h2><ul><li>与前缀表达式相似，只是运算符位于操作数之后</li><li>后缀表达式计算: <ul><li>举例说明： (3+4)×5-6 对应的后缀表达式就是 3 4 + 5 × 6 –</li><li>从左至右扫描表达式，遇到数字时，将数字压入堆栈，遇到运算符时，弹出栈顶的两个数，用运算符对它们做相应的计算（次顶元素 和 栈顶元素），并将结果入栈；重复上述过程直到表达式最右端，最后运算得出的值即为表达式的结果</li><li>例如: (3+4)×5-6 对应的后缀表达式就是 3 4 + 5 × 6 - , 针对后缀表达式求值步骤如下: <ul><li>从左至右扫描，将3和4压入堆栈；遇到+运算符，弹出4和3（4为栈顶元素，3为次顶元素），计算出3+4的值，得7，再将7入栈；将5入栈；</li><li>接下来是×运算符，因此弹出5和7，计算出7×5=35，将35入栈；将6入栈；最后是-运算符，计算出35-6的值，即29，由此得出最终结果</li></ul></li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    逆波兰表达式计算实现
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="t20有效的括号" tabindex="-1"><a class="header-anchor" href="#t20有效的括号"><span>t20有效的括号</span></a></h2><p>给定一个只包括 &#39;(&#39;，&#39;)&#39;，&#39;{&#39;，&#39;}&#39;，&#39;[&#39;，&#39;]&#39; 的字符串 s ，判断字符串是否有效。<br> 有效字符串需满足：<br> 左括号必须用相同类型的右括号闭合。<br> 左括号必须以正确的顺序闭合。<br> 每个右括号都有一个对应的相同类型的左括号。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>时间复杂度：<span class="token class-name">O</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>，其中 n 是字符串 s 的长度。
空间复杂度：<span class="token class-name">O</span><span class="token punctuation">(</span>n<span class="token operator">+</span>∣Σ∣<span class="token punctuation">)</span>，其中 Σ 表示字符集，
本题中字符串只包含 <span class="token number">6</span> 种括号，∣Σ∣<span class="token operator">=</span><span class="token number">6</span>。栈中的字符数量为 <span class="token class-name">O</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>，
而哈希表使用的空间为 <span class="token class-name">O</span><span class="token punctuation">(</span>∣Σ∣<span class="token punctuation">)</span>，相加即可得到总空间复杂度。
<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isValid</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> n <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Character</span><span class="token punctuation">,</span> <span class="token class-name">Character</span><span class="token punctuation">&gt;</span></span> pairs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Character</span><span class="token punctuation">,</span> <span class="token class-name">Character</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token function">put</span><span class="token punctuation">(</span><span class="token char">&#39;)&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;(&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">put</span><span class="token punctuation">(</span><span class="token char">&#39;]&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;[&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">put</span><span class="token punctuation">(</span><span class="token char">&#39;}&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;{&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token class-name">Deque</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Character</span><span class="token punctuation">&gt;</span></span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Character</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">char</span> ch <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>pairs<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> stack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> pairs<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="t155最小栈" tabindex="-1"><a class="header-anchor" href="#t155最小栈"><span>t155最小栈</span></a></h2><p>设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。<br> 实现 MinStack 类:<br> MinStack() 初始化堆栈对象。<br> void push(int val) 将元素val推入堆栈。<br> void pop() 删除堆栈顶部的元素。<br> int top() 获取堆栈顶部的元素。<br> int getMin() 获取堆栈中的最小元素。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>时间复杂度<span class="token class-name">O</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>。因为栈的插入、删除与读取操作都是 <span class="token class-name">O</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>，我们定义的每个操作最多调用栈操作两次。
空间复杂度<span class="token class-name">O</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>，其中 n 为总操作数。最坏情况下连续插入n个元素，此时两个栈占用的空间为 <span class="token class-name">O</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>。
<span class="token keyword">class</span> <span class="token class-name">MinStack</span> <span class="token punctuation">{</span>
    <span class="token class-name">Deque</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> xStack<span class="token punctuation">;</span>
    <span class="token class-name">Deque</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> minStack<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">MinStack</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        xStack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        minStack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        minStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        xStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
        minStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>minStack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        xStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        minStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> xStack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getMin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> minStack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="t394字符串解码" tabindex="-1"><a class="header-anchor" href="#t394字符串解码"><span>t394字符串解码</span></a></h2><p>给定一个经过编码的字符串，返回它解码后的字符串。<br> 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。<br> 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。<br> 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。</p><p>示例 1：输入：s = &quot;3[a]2[bc]&quot; 输出：&quot;aaabcbc&quot;<br> 3[a2[c]] ==&gt;accaccacc</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>时间复杂度：记解码后得出的字符串长度为 <span class="token class-name">S</span>，
遍历一次原字符串 s，和将解码后的字符串中的每个字符都入栈，
并最终拼接进答案中，故时间复杂度为 <span class="token class-name">O</span><span class="token punctuation">(</span><span class="token class-name">S</span><span class="token operator">+</span>∣s∣<span class="token punctuation">)</span>，即 <span class="token class-name">O</span><span class="token punctuation">(</span><span class="token class-name">S</span><span class="token punctuation">)</span>。
空间复杂度：记解码后得出的字符串长度为 <span class="token class-name">S</span>，这里用栈维护 <span class="token constant">TOKEN</span>，
栈的总大小最终与 <span class="token class-name">S</span> 相同，故渐进空间复杂度为 <span class="token class-name">O</span><span class="token punctuation">(</span><span class="token class-name">S</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> ptr<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">decodeString</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> stk <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ptr <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span>ptr <span class="token operator">&lt;</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">char</span> cur <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>ptr<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Character</span><span class="token punctuation">.</span><span class="token function">isDigit</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 获取一个数字并进栈</span>
                <span class="token class-name">String</span> digits <span class="token operator">=</span> <span class="token function">getDigits</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
                stk<span class="token punctuation">.</span><span class="token function">addLast</span><span class="token punctuation">(</span>digits<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Character</span><span class="token punctuation">.</span><span class="token function">isLetter</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token operator">||</span> cur <span class="token operator">==</span> <span class="token char">&#39;[&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 获取一个字母并进栈</span>
                stk<span class="token punctuation">.</span><span class="token function">addLast</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>ptr<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">//把栈顶的数字和[中的字母拿出来组成字符串后加回去栈顶</span>
                <span class="token operator">++</span>ptr<span class="token punctuation">;</span><span class="token comment">//跳过&#39;]&#39;</span>
                <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> sub <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token string">&quot;[&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>stk<span class="token punctuation">.</span><span class="token function">peekLast</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    sub<span class="token punctuation">.</span><span class="token function">addLast</span><span class="token punctuation">(</span>stk<span class="token punctuation">.</span><span class="token function">removeLast</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token comment">//翻转：因为压栈时再加到list中是相反的</span>
                <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span>sub<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 左括号出栈</span>
                stk<span class="token punctuation">.</span><span class="token function">removeLast</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 此时栈顶为当前 sub 对应的字符串应该出现的次数</span>
                <span class="token keyword">int</span> repTime <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>stk<span class="token punctuation">.</span><span class="token function">removeLast</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">StringBuffer</span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">String</span> o <span class="token operator">=</span> <span class="token function">getString</span><span class="token punctuation">(</span>sub<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 构造字符串</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span>repTime<span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    t<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token comment">// 将构造好的字符串入栈</span>
                stk<span class="token punctuation">.</span><span class="token function">addLast</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token function">getString</span><span class="token punctuation">(</span>stk<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getDigits</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">StringBuffer</span> ret <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token class-name">Character</span><span class="token punctuation">.</span><span class="token function">isDigit</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>ptr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ret<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>ptr<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> ret<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getString</span><span class="token punctuation">(</span><span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> v<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">StringBuffer</span> ret <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> s <span class="token operator">:</span> v<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ret<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> ret<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="t739每日温度" tabindex="-1"><a class="header-anchor" href="#t739每日温度"><span>t739每日温度</span></a></h2><p>给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。<br> 示例 1:输入: temperatures = [73,74,75,71,69,72,76,73]输出: [1,1,4,2,1,1,0,0]<br> 示例 2:输入: temperatures = [30,40,50,60]输出: [1,1,1,0]</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>时间复杂度：<span class="token class-name">O</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>，n是温度列表的长度。
正向遍历温度列表一遍，对于温度列表中的每个下标，最多有一次进栈和出栈的操作。
空间复杂度：<span class="token class-name">O</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>，n是温度列表的长度。
需要维护一个单调栈存储温度列表中的下标。
思路：使用单调递减栈找出左边第一个
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">dailyTemperatures</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> temperatures<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> length <span class="token operator">=</span> temperatures<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ans <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token class-name">Deque</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//单调递减栈，栈顶找到第一个右边比他大的数</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> temperature <span class="token operator">=</span> temperatures<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> temperature <span class="token operator">&gt;</span> temperatures<span class="token punctuation">[</span>stack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span> prevIndex <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                ans<span class="token punctuation">[</span>prevIndex<span class="token punctuation">]</span> <span class="token operator">=</span> i <span class="token operator">-</span> prevIndex<span class="token punctuation">;</span><span class="token comment">//当前i到大于栈里面元素的距离</span>
            <span class="token punctuation">}</span>
            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//单调递减</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="t84柱状图中最大的矩形" tabindex="-1"><a class="header-anchor" href="#t84柱状图中最大的矩形"><span>t84柱状图中最大的矩形</span></a></h2><p>给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。<br> 求在该柱状图中，能够勾勒出来的矩形的最大面积。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>时间复杂度：<span class="token class-name">O</span><span class="token punctuation">(</span><span class="token class-name">N</span><span class="token punctuation">)</span>。
空间复杂度：<span class="token class-name">O</span><span class="token punctuation">(</span><span class="token class-name">N</span><span class="token punctuation">)</span>。
思路：计算每一根柱子左右两边第一个小于当前高度的柱子组成的面积的最大值
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">largestRectangleArea</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> heights<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> n <span class="token operator">=</span> heights<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> left <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> right <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">//单调递增栈，栈顶找到右边第一个比它小的数</span>
    <span class="token class-name">Deque</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> mono_stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayDeque</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>mono_stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> heights<span class="token punctuation">[</span>mono_stack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">&gt;=</span> heights<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            mono_stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        left<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>mono_stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> mono_stack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mono_stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//单调递增栈，栈顶找到左边第一个比它小的数</span>
    mono_stack<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token operator">--</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>mono_stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> heights<span class="token punctuation">[</span>mono_stack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">&gt;=</span> heights<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            mono_stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        right<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>mono_stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">?</span> n <span class="token operator">:</span> mono_stack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mono_stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">int</span> ans <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ans <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>ans<span class="token punctuation">,</span> <span class="token punctuation">(</span>right<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> left<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> heights<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1047删除字符串中的所有相邻重复项" tabindex="-1"><a class="header-anchor" href="#_1047删除字符串中的所有相邻重复项"><span>1047删除字符串中的所有相邻重复项</span></a></h2><p>给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。<br> 在 S 上反复执行重复项删除操作，直到无法继续删除。在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。<br> 示例：输入：&quot;abbaca&quot; 输出：&quot;ca&quot;<br> 解释：例如，在 &quot;abbaca&quot; 中，我们可以删除 &quot;bb&quot; 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串 &quot;aaca&quot;，其中又只有 &quot;aa&quot; 可以执行重复项删除操作，所以最后的字符串为 &quot;ca&quot;。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">removeDuplicates</span><span class="token punctuation">(</span><span class="token class-name">String</span> <span class="token class-name">S</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//ArrayDeque会比LinkedList在除了删除元素这一点外会快一点</span>
    <span class="token comment">//https://stackoverflow.com/questions/6163166/why-is-arraydeque-better-than-linkedlist</span>
    <span class="token class-name">ArrayDeque</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Character</span><span class="token punctuation">&gt;</span></span> deque <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayDeque</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span> ch<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token class-name">S</span><span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ch <span class="token operator">=</span> <span class="token class-name">S</span><span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>deque<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> deque<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> ch<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            deque<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            deque<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">//剩余的元素即为不重复的元素</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>deque<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        str <span class="token operator">=</span> deque<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> str<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> str<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_496下一个更大元素-i" tabindex="-1"><a class="header-anchor" href="#_496下一个更大元素-i"><span>496下一个更大元素 I</span></a></h2><p>给你两个 没有重复元素 的数组 nums1 和 nums2 ，其中nums1 是 nums2 的子集。<br> 请你找出 nums1 中每个元素在 nums2 中的下一个比其大的值。<br> nums1 中数字 x 的下一个更大元素是指 x 在 nums2 中对应位置的右边的第一个比 x 大的元素。如果不存在，对应位置输出 -1 。<br> 示例 1:输入: nums1 = [4,1,2], nums2 = [1,3,4,2].<br> 输出: [-1,3,-1]<br> 解释:<br> 对于 num1 中的数字 4 ，你无法在第二个数组中找到下一个更大的数字，因此输出 -1 。<br> 对于 num1 中的数字 1 ，第二个数组中数字1右边的下一个较大数字是 3 。<br> 对于 num1 中的数字 2 ，第二个数组中没有下一个更大的数字，因此输出 -1 。<br> 示例 2: 输入: nums1 = [2,4], nums2 = [1,2,3,4].<br> 输出: [3,-1]<br> 解释:<br> 对于 num1 中的数字 2 ，第二个数组中的下一个较大数字是 3 。<br> 对于 num1 中的数字 4 ，第二个数组中没有下一个更大的数字，因此输出-1 。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>思路：使用单调递减栈，通过hashMap判断弹出时是否需要记录结果得到子集每个元素的第一个比它大的数字
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">nextGreaterElement</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums1<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> temp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>nums1<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//建立nums1的key-value</span>
        <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> hashMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">;</span> i<span class="token operator">&lt;</span> nums1<span class="token punctuation">.</span>length <span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            hashMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        temp<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//单调递减栈，给栈顶找到第一个比他大的数值</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums2<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>nums2<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> nums2<span class="token punctuation">[</span>temp<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                temp<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>temp<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> nums2<span class="token punctuation">[</span>temp<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> nums2<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>hashMap<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>nums2<span class="token punctuation">[</span>temp<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                        <span class="token class-name">Integer</span> index <span class="token operator">=</span> hashMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>nums2<span class="token punctuation">[</span>temp<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        res<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> nums2<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                    temp<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                temp<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_503下一个更大元素ii" tabindex="-1"><a class="header-anchor" href="#_503下一个更大元素ii"><span>503下一个更大元素II</span></a></h2><p>给定一个循环数组（最后一个元素的下一个元素是数组的第一个元素），输出每个元素的下一个更大元素。数字 x 的下一个更大的元素是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 -1。</p><p>示例 1:输入: [1,2,1] 输出: [2,-1,2]<br> 解释: 第一个 1 的下一个更大的数是 2；数字 2 找不到下一个更大的数；第二个 1 的下一个最大的数需要循环搜索，结果也是 2。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>思路：使用单调递减栈找到栈顶的下一个比他大的数只不过索引是i<span class="token operator">%</span>size
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">nextGreaterElements</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//边界判断</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>nums <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> nums<span class="token punctuation">.</span>length <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> size <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>size<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//存放结果</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//默认全部初始化为-1</span>
        <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> st<span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//栈中存放的是nums中的元素下标</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token operator">*</span>size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>st<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>i <span class="token operator">%</span> size<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>st<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                result<span class="token punctuation">[</span>st<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i <span class="token operator">%</span> size<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//更新result</span>
                st<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//弹出栈顶</span>
            <span class="token punctuation">}</span>
            st<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i <span class="token operator">%</span> size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,45),i=[p];function c(l,o){return s(),a("div",null,i)}const k=n(e,[["render",c],["__file","stack.html.vue"]]),d=JSON.parse('{"path":"/interview/datastructure/stack.html","title":"栈","lang":"zh-CN","frontmatter":{"title":"栈","icon":"circle-info","date":"2023-01-01T00:00:00.000Z","tags":"栈","categories":"面试","description":"什么是栈? 栈是一种单端线性数据结构，它通过两个主要操作（即推送和弹出）模拟真实世界的栈。 栈是一个先入后出(FILO-First In Last Out)的有序列表。 栈(stack)是限制线性表中元素的插入和删除只能在线性表的同一端进行的一种特殊线性表。允许插入和删除的一端，为变化的一端，称为栈顶(Top)，另一端为固定的一端，称为栈底(Botto...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/interview/datastructure/stack.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"栈"}],["meta",{"property":"og:description","content":"什么是栈? 栈是一种单端线性数据结构，它通过两个主要操作（即推送和弹出）模拟真实世界的栈。 栈是一个先入后出(FILO-First In Last Out)的有序列表。 栈(stack)是限制线性表中元素的插入和删除只能在线性表的同一端进行的一种特殊线性表。允许插入和删除的一端，为变化的一端，称为栈顶(Top)，另一端为固定的一端，称为栈底(Botto..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/18964256b0cd2651705eb.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"栈\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/18964256b0cd2651705eb.png\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"什么是栈?","slug":"什么是栈","link":"#什么是栈","children":[]},{"level":2,"title":"基于数组实现stack","slug":"基于数组实现stack","link":"#基于数组实现stack","children":[]},{"level":2,"title":"基于链表实现stack","slug":"基于链表实现stack","link":"#基于链表实现stack","children":[]},{"level":2,"title":"前缀表达式","slug":"前缀表达式","link":"#前缀表达式","children":[]},{"level":2,"title":"中缀表达式(波兰表达式)","slug":"中缀表达式-波兰表达式","link":"#中缀表达式-波兰表达式","children":[]},{"level":2,"title":"后缀表达式(逆波兰表达式)","slug":"后缀表达式-逆波兰表达式","link":"#后缀表达式-逆波兰表达式","children":[]},{"level":2,"title":"t20有效的括号","slug":"t20有效的括号","link":"#t20有效的括号","children":[]},{"level":2,"title":"t155最小栈","slug":"t155最小栈","link":"#t155最小栈","children":[]},{"level":2,"title":"t394字符串解码","slug":"t394字符串解码","link":"#t394字符串解码","children":[]},{"level":2,"title":"t739每日温度","slug":"t739每日温度","link":"#t739每日温度","children":[]},{"level":2,"title":"t84柱状图中最大的矩形","slug":"t84柱状图中最大的矩形","link":"#t84柱状图中最大的矩形","children":[]},{"level":2,"title":"1047删除字符串中的所有相邻重复项","slug":"_1047删除字符串中的所有相邻重复项","link":"#_1047删除字符串中的所有相邻重复项","children":[]},{"level":2,"title":"496下一个更大元素 I","slug":"_496下一个更大元素-i","link":"#_496下一个更大元素-i","children":[]},{"level":2,"title":"503下一个更大元素II","slug":"_503下一个更大元素ii","link":"#_503下一个更大元素ii","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":25.61,"words":7684},"filePathRelative":"interview/datastructure/stack.md","localizedDate":"2023年1月1日","excerpt":"<h2>什么是栈?</h2>\\n<ul>\\n<li>\\n<p>栈是一种单端线性数据结构，它通过两个主要操作（即推送和弹出）模拟真实世界的栈。</p>\\n</li>\\n<li>\\n<p>栈是一个先入后出(FILO-First In Last Out)的有序列表。</p>\\n</li>\\n<li>\\n<p>栈(stack)是限制线性表中元素的插入和删除只能在线性表的同一端进行的一种特殊线性表。允许插入和删除的一端，为变化的一端，称为栈顶(Top)，另一端为固定的一端，称为栈底(Bottom)。</p>\\n</li>\\n<li>\\n<p>使用场景</p>\\n<ul>\\n<li>由文本编辑器中的撤消机制使用。</li>\\n<li>用于编译器语法检查以匹配括号和花括号。[(){}]</li>\\n<li>在后台使用以通过跟踪以前的函数调用来支持递归。</li>\\n<li>图的深度优先搜索 (DFS)</li>\\n<li>子程序的调用：在跳往子程序前，会先将下个指令的地址存到堆栈中，直到子程序执行完后再将地址取出，以回到原来的程序中</li>\\n<li>处理递归调用：和子程序的调用类似，只是除了储存下一个指令的地址外，也将参数、区域变量等数据存入堆栈中。</li>\\n<li>表达式的转换<code>[中缀表达式转后缀表达式]</code>与求值(实际解决)。</li>\\n<li>二叉树的遍历。</li>\\n<li>汉诺塔</li>\\n<li>问题:表达式2x7x1+5计算机底层怎么计算,计算机收到的是一个字符串</li>\\n</ul>\\n</li>\\n<li>\\n<p>复杂度分析<br>\\npushing O(1)<br>\\npopping O(1)<br>\\npeeking O(1)<br>\\nsearching O(n)因为可能要搜索整个链表<br>\\nsize O(1)<br>\\n单调栈是一种特殊的栈，它的特点是栈内的元素保持某种单调性。根据单调性的不同，可以分为单调递增栈和单调递减栈。</p>\\n</li>\\n<li>\\n<p>单调递增栈</p>\\n<ul>\\n<li>定义: 单调递增栈中的元素从栈底到栈顶是严格递增的（即：栈顶元素小于或等于栈底元素）。</li>\\n<li>维护规则:当新元素要入栈时，如果栈顶元素大于或等于新元素，则弹出栈顶元素，直到栈顶元素小于新元素或栈为空时，再将新元素入栈。</li>\\n<li>作用:栈顶找到右边第一个比他小的元素</li>\\n<li>应用场景: 典型的应用是在解决“柱状图中最大的矩形面积”问题时，利用单调递增栈来确定每个柱子的左、右边界。</li>\\n</ul>\\n</li>\\n<li>\\n<p>单调递减栈</p>\\n<ul>\\n<li>定义: 单调递减栈中的元素从栈底到栈顶是严格递减的（即：栈顶元素大于或等于栈底元素）。</li>\\n<li>维护规则:当新元素要入栈时，如果栈顶元素小于或等于新元素，则弹出栈顶元素，直到栈顶元素大于新元素或栈为空时，再将新元素入栈。</li>\\n<li>作用:栈顶找到右边第一个比他大的元素</li>\\n<li>应用场景: 单调递减栈常用于寻找“下一个更大元素”的问题，例如在股票价格、温度变化等场景中。</li>\\n</ul>\\n</li>\\n<li>\\n<p>区别与选择<br>\\n单调递增栈:主要用于寻找数组中比当前元素小的值或寻找最小值问题。可以帮助在 O(n) 的时间复杂度内找到某个元素的左右边界。<br>\\n通常用于“最小值”问题，比如找到某个柱子左右最近的高度小于等于它的柱子。</p>\\n</li>\\n</ul>","autoDesc":true}');export{k as comp,d as data};
