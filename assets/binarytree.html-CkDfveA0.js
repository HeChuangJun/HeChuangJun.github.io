import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e as t}from"./app-7KT7HDzT.js";const e={},p=t(`<h2 id="二叉树的存储方式" tabindex="-1"><a class="header-anchor" href="#二叉树的存储方式"><span>二叉树的存储方式</span></a></h2><ul><li>二叉树链式存储方式就用指针， 顺序存储的方式就是用数组。</li><li>顺序存储的元素在内存是连续分布的，而链式存储则是通过指针把分布在各个地址的节点串联一起。</li><li>顺序存储就是用数组来存储二叉树，用数组来存储二叉树如何遍历的呢？</li><li>如果父节点的数组下标是 i，那么它的左孩子就是 i * 2 + 1，右孩子就是 i * 2 + 2。父 = floor((子 - 1) / 2)</li></ul><h2 id="递归什么时候需要返回值" tabindex="-1"><a class="header-anchor" href="#递归什么时候需要返回值"><span>递归什么时候需要返回值</span></a></h2><p>需要返回值<br> 目标是计算某个值：如果递归的目的是通过多个子问题的解来计算一个整体的解（例如计算斐波那契数列、树的最大深度等），递归函数通常需要返回值，以将子问题的结果逐层传递回去。<br> 查找并返回结果：如果递归的目的是查找某个值或路径并返回（例如在树中查找某个节点是否存在），那么递归函数通常需要返回值，以便在找到结果时立即返回，并终止进一步的递归。<br> 路径汇总：在某些情况下，你需要汇总来自子树或子问题的多个结果，并将其返回给上一层。例如，计算树中所有路径和等于某个值的路径数量。<br> 不需要返回值<br> 目标是修改全局状态：如果递归的目的是修改某些全局状态，或直接对某些数据结构进行操作，而不需要从子问题中获取结果，那么递归函数通常不需要返回值。例如，在遍历过程中填充某个列表、集合、或字典。<br> 只做处理，不需要结果：如果递归的目的是执行某些操作，但这些操作的结果不需要传递回调用者，那么就不需要返回值。例如，前序遍历、中序遍历、后序遍历时，只需要访问每个节点并执行一些操作即可。</p><h2 id="二叉树遍历及其相关题目√" tabindex="-1"><a class="header-anchor" href="#二叉树遍历及其相关题目√"><span>二叉树遍历及其相关题目√</span></a></h2><p>深度优先遍历（Depth-first order）先往深走，遇到叶子节点再往回走。前中后序指的就是中间节点的位置</p><ul><li>前序遍历: 先输出父节点，再遍历左子树和右子树（递归法√，迭代法）中左右</li><li>中序遍历: 先遍历左子树，再输出父节点，再遍历右子树（递归法√，迭代法）左中右</li><li>后序遍历: 先遍历左子树，再遍历右子树，最后输出父节点（递归法√，迭代法）左右中</li></ul><p><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/d1c417facf44a16e0b651.png" alt="order"><br> 广度优先BFS遍历（Breadth-first order）：一层一层的去遍历。</p><ul><li>层次遍历（迭代法√）队列先进先出</li></ul><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">//递归实现前中后序遍历</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token function">preorderTraversal</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">preorder</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">preorder</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      result<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//前序遍历</span>
      <span class="token function">preorder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">//result.add(root.val);//中序遍历</span>
      <span class="token function">preorder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">//result.add(root.val);//后序遍历</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>    

<span class="token comment">//层序遍历，本身加入队列，然后遍历队列依次取出并把左右节点加入队列，直到队列为null</span>
<span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">levelOrder</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> ret <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>queue<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> level <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> currentLevelSize <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> currentLevelSize<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">TreeNode</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            level<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        ret<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>level<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>107二叉树的层次遍历 II<br> 给定一个二叉树，返回其节点值自底向上的层次遍历。（即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）最后把result数组反转一下就可以了,也可以使用linkedlist的addFirst</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>List&lt;List&lt;Integer&gt;&gt; result = new ArrayList&lt;&gt;();
for (int i = list.size() - 1; i &gt;= 0; i-- ) {
    result.add(list.get(i));
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>637二叉树的层平均值-&gt;for循环里面求和就行</li><li>429N叉树的层序遍历-&gt;left和right入队列改为for循环遍历子节点即可</li><li>515在每个树行中找最大值-&gt;for循环里面求和就行</li><li>116填充每个节点的下一个右侧节点指针</li><li>117填充每个节点的下一个右侧节点指针II<br> 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。</li></ul><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 二叉树之层次遍历</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Node</span> <span class="token function">connect</span><span class="token punctuation">(</span><span class="token class-name">Node</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Node</span><span class="token punctuation">&gt;</span></span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            queue<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>queue<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> size <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Node</span> node <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token class-name">Node</span> nodePre <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    nodePre <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 取出本层头一个节点</span>
                    node <span class="token operator">=</span> nodePre<span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    nodePre<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">;</span> <span class="token comment">// 本层前一个节点 next 指向当前节点</span>
                    nodePre <span class="token operator">=</span> nodePre<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    queue<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    queue<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            nodePre<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 本层最后一个节点 next 指向 null</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> root<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="t114二叉树展开为链表√" tabindex="-1"><a class="header-anchor" href="#t114二叉树展开为链表√"><span>t114二叉树展开为链表√</span></a></h2><p>提示 给你二叉树的根结点 root ，请你将它展开为一个单链表：</p><p>展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。<br> 展开后的单链表应该与二叉树 先序遍历 顺序相同。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">flatten</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">preorderTraversal</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> list<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> size <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">TreeNode</span> prev <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> curr <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            prev<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            prev<span class="token punctuation">.</span>right <span class="token operator">=</span> curr<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">preorderTraversal</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">preorderTraversal</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> list<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">preorderTraversal</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> list<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="t199二叉树的右视图-树左下角的值√" tabindex="-1"><a class="header-anchor" href="#t199二叉树的右视图-树左下角的值√"><span>t199二叉树的右视图/树左下角的值√</span></a></h2><p>给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">//广度优先</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token function">rightSideView</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      
      <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> result <span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>root<span class="token operator">==</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">return</span> result<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span> queue<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      queue<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
      
      <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>queue<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">int</span> n<span class="token operator">=</span>queue<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          
          <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
              <span class="token class-name">TreeNode</span> temp<span class="token operator">=</span>queue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token keyword">if</span><span class="token punctuation">(</span>temp<span class="token punctuation">.</span>left<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                  queue<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>temp<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span>
              <span class="token keyword">if</span><span class="token punctuation">(</span>temp<span class="token punctuation">.</span>right<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                  queue<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>temp<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span>
              <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">==</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                  result<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>temp<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span>
              <span class="token comment">//if (i == 0) result = temp.val;//左下角的值</span>
          <span class="token punctuation">}</span>
          
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="t104二叉树的最大深度" tabindex="-1"><a class="header-anchor" href="#t104二叉树的最大深度"><span>t104二叉树的最大深度</span></a></h2><p>给定一个二叉树 root ，返回其最大深度。<br> 二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>可以使用前序（中左右）<span class="token operator">/</span>后序遍历（左右中），前序求深度，后序求高度。
深度：指从根节点到该节点的最长简单路径边的条数或者节点数（取决于深度从<span class="token number">0</span>开始还是从<span class="token number">1</span>开始）
高度：指从该节点到叶子节点的最长简单路径边的条数或者节点数（取决于高度从<span class="token number">0</span>开始还是从<span class="token number">1</span>开始）
而根节点的高度就是二叉树的最大深度，可通过后序求的根节点高度来求的二叉树最大深度。
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">maxDepth</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> leftHeight <span class="token operator">=</span> <span class="token function">maxDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> rightHeight <span class="token operator">=</span> <span class="token function">maxDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>leftHeight<span class="token punctuation">,</span> rightHeight<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_111二叉树的最小深度" tabindex="-1"><a class="header-anchor" href="#_111二叉树的最小深度"><span>111二叉树的最小深度</span></a></h2><p>给定一个二叉树，找出其最小深度。<br> 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。<br> 说明: 叶子节点是指没有子节点的节点。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>使用后序遍历求根节点到叶子节点的最小距离，就是求高度的过程，不过这个最小距离也是最小深度。
注意，没有左孩子的分支会不算为最短深度
所以，如果左子树为空，右子树不为空，说明最小深度是 <span class="token number">1</span> <span class="token operator">+</span> 右子树的深度。
反之，右子树为空，左子树不为空，最小深度是 <span class="token number">1</span> <span class="token operator">+</span> 左子树的深度。 
最后如果左右子树都不为空，返回左右子树深度最小值 <span class="token operator">+</span> <span class="token number">1</span> 。
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">minDepth</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> leftDepth <span class="token operator">=</span> <span class="token function">minDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> rightDepth <span class="token operator">=</span> <span class="token function">minDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> rightDepth <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>right <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> leftDepth <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 左右结点都不为null</span>
        <span class="token keyword">return</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>leftDepth<span class="token punctuation">,</span> rightDepth<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_222求完全二叉树节点个数" tabindex="-1"><a class="header-anchor" href="#_222求完全二叉树节点个数"><span>222求完全二叉树节点个数</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">countNodes</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token function">countNodes</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">countNodes</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="t543求二叉树的直径" tabindex="-1"><a class="header-anchor" href="#t543求二叉树的直径"><span>t543求二叉树的直径</span></a></h2><p>直径是指树中任意两个节点之间最长路径的长度。这条路径可能经过也可能不经过根节点 root 。<br> 两节点之间路径的 长度 由它们之间边数表示。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">int</span> ans<span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">diameterOfBinaryTree</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ans <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//怎么样都会有一个节点</span>
    <span class="token function">depth</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//求经过的节点数</span>
    <span class="token keyword">return</span> ans <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//-1为边数</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">depth</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 访问到空节点了，返回0</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">int</span> <span class="token class-name">L</span> <span class="token operator">=</span> <span class="token function">depth</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 左儿子为根的子树的深度</span>
    <span class="token keyword">int</span> <span class="token class-name">R</span> <span class="token operator">=</span> <span class="token function">depth</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 右儿子为根的子树的深度</span>
    ans <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>ans<span class="token punctuation">,</span> <span class="token class-name">L</span><span class="token operator">+</span><span class="token class-name">R</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 计算d_node即L+R+1 并更新ans</span>
    <span class="token keyword">return</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token class-name">L</span><span class="token punctuation">,</span> <span class="token class-name">R</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 返回该节点为根的子树的深度</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="t266翻转二叉树" tabindex="-1"><a class="header-anchor" href="#t266翻转二叉树"><span>t266翻转二叉树</span></a></h2><ul><li>左右子树对调</li></ul><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">invertTree</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">invertTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">invertTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">swapChildren</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">swapChildren</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">TreeNode</span> tmp <span class="token operator">=</span> root<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
    root<span class="token punctuation">.</span>left <span class="token operator">=</span> root<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
    root<span class="token punctuation">.</span>right <span class="token operator">=</span> tmp<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="t101对称二叉树" tabindex="-1"><a class="header-anchor" href="#t101对称二叉树"><span>t101对称二叉树</span></a></h2><p>给你一个二叉树的根节点 root ， 检查它是否轴对称。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isSymmetric</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">check</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> root<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">check</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> p<span class="token punctuation">,</span> <span class="token class-name">TreeNode</span> q<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> q <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> q <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> p<span class="token punctuation">.</span>val <span class="token operator">==</span> q<span class="token punctuation">.</span>val <span class="token operator">&amp;&amp;</span> <span class="token function">check</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>left<span class="token punctuation">,</span> q<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">check</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>right<span class="token punctuation">,</span> q<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="t105从前序与中序遍历序列构造二叉树-或者中后序" tabindex="-1"><a class="header-anchor" href="#t105从前序与中序遍历序列构造二叉树-或者中后序"><span>t105从前序与中序遍历序列构造二叉树（或者中后序）</span></a></h2><p>给定两个整数数组preorder和inorder，其中preorder是二叉树的先序遍历，inorder是同一棵树的中序遍历，请构造二叉树并返回其根节点。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>时间复杂度<span class="token class-name">O</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>，n是树中的节点个数。
空间复杂度<span class="token class-name">O</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>，除去返回的答案需要的<span class="token class-name">O</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>空间之外，使用<span class="token class-name">O</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>存储哈希映射，
<span class="token class-name">O</span><span class="token punctuation">(</span>h<span class="token punctuation">)</span>（h是树的高度）的空间表示递归时栈空间。这里 h<span class="token operator">&lt;</span>n，所以总空间复杂度为 <span class="token class-name">O</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>。
前序遍历第一个节点就是根节点
中序遍历root左边是左子树，右边是右子树
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">buildTree</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> preorder<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> inorder<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">buildTreeHelper</span><span class="token punctuation">(</span>preorder<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> preorder<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span>
                               inorder<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> inorder<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">TreeNode</span> <span class="token function">buildTreeHelper</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> preorder<span class="token punctuation">,</span> <span class="token keyword">int</span> preStart<span class="token punctuation">,</span> <span class="token keyword">int</span> preEnd<span class="token punctuation">,</span>
                                     <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> inorder<span class="token punctuation">,</span> <span class="token keyword">int</span> inStart<span class="token punctuation">,</span> <span class="token keyword">int</span> inEnd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果没有元素了，返回 null</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>preStart <span class="token operator">&gt;</span> preEnd <span class="token operator">||</span> inStart <span class="token operator">&gt;</span> inEnd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 前序遍历的第一个元素是根节点</span>
        <span class="token keyword">int</span> rootVal <span class="token operator">=</span> preorder<span class="token punctuation">[</span>preStart<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token class-name">TreeNode</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>rootVal<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 在中序遍历中找到根节点的位置</span>
        <span class="token keyword">int</span> inRootIndex <span class="token operator">=</span> inStart<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>inorder<span class="token punctuation">[</span>inRootIndex<span class="token punctuation">]</span> <span class="token operator">!=</span> rootVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            inRootIndex<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 计算左子树的大小</span>
        <span class="token keyword">int</span> leftTreeSize <span class="token operator">=</span> inRootIndex <span class="token operator">-</span> inStart<span class="token punctuation">;</span>

        <span class="token comment">// 递归构造左子树</span>
        root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">buildTreeHelper</span><span class="token punctuation">(</span>preorder<span class="token punctuation">,</span> preStart <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> preStart <span class="token operator">+</span> leftTreeSize<span class="token punctuation">,</span>
                                     inorder<span class="token punctuation">,</span> inStart<span class="token punctuation">,</span> inRootIndex <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 递归构造右子树</span>
        root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">buildTreeHelper</span><span class="token punctuation">(</span>preorder<span class="token punctuation">,</span> preStart <span class="token operator">+</span> leftTreeSize <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> preEnd<span class="token punctuation">,</span>
                                     inorder<span class="token punctuation">,</span> inRootIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> inEnd<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> root<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_654最大二叉树" tabindex="-1"><a class="header-anchor" href="#_654最大二叉树"><span>654最大二叉树</span></a></h2><p>给定一个不含重复元素的整数数组。一个以此数组构建的最大二叉树定义如下：<br> 二叉树的根是数组中的最大元素。<br> 左子树是通过数组中最大值左边部分构造出的最大二叉树。<br> 右子树是通过数组中最大值右边部分构造出的最大二叉树。<br> 通过给定的数组构建最大二叉树，并且输出这个树的根节点。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">constructMaximumBinaryTree</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">constructMaximumBinaryTree1</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">constructMaximumBinaryTree1</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> leftIndex<span class="token punctuation">,</span> <span class="token keyword">int</span> rightIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>rightIndex <span class="token operator">-</span> leftIndex <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 没有元素了</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>rightIndex <span class="token operator">-</span> leftIndex <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 只有一个元素</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>leftIndex<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> maxIndex <span class="token operator">=</span> leftIndex<span class="token punctuation">;</span><span class="token comment">// 最大值所在位置</span>
        <span class="token keyword">int</span> maxVal <span class="token operator">=</span> nums<span class="token punctuation">[</span>maxIndex<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">// 最大值</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> leftIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> rightIndex<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> maxVal<span class="token punctuation">)</span><span class="token punctuation">{</span>
                maxVal <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
                maxIndex <span class="token operator">=</span> i<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">TreeNode</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>maxVal<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 根据maxIndex划分左右子树</span>
        root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">constructMaximumBinaryTree1</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> leftIndex<span class="token punctuation">,</span> maxIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
        root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">constructMaximumBinaryTree1</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> maxIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> rightIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> root<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_617合并二叉树" tabindex="-1"><a class="header-anchor" href="#_617合并二叉树"><span>617合并二叉树</span></a></h2><p>给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。<br> 你需要将他们合并为一个新的二叉树。合并的规则是如果两个节点重叠，那么将他们的值相加作为节点合并后的新值，否则不为 NULL 的节点将直接作为新二叉树的节点。<br> 注意: 合并必须从两个树的根节点开始。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token comment">// 递归</span>
    <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">mergeTrees</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root1<span class="token punctuation">,</span> <span class="token class-name">TreeNode</span> root2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root1 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> root2<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root2 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> root1<span class="token punctuation">;</span>

        root1<span class="token punctuation">.</span>val <span class="token operator">+=</span> root2<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
        root1<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">mergeTrees</span><span class="token punctuation">(</span>root1<span class="token punctuation">.</span>left<span class="token punctuation">,</span>root2<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
        root1<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">mergeTrees</span><span class="token punctuation">(</span>root1<span class="token punctuation">.</span>right<span class="token punctuation">,</span>root2<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> root1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_112路径总和" tabindex="-1"><a class="header-anchor" href="#_112路径总和"><span>112路径总和</span></a></h2><p>给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。<br> 说明: 叶子节点是指没有子节点的节点。<br> 示例: 给定如下二叉树，以及目标和 sum = 22，</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> solution <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hasPathSum</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">,</span> <span class="token keyword">int</span> targetSum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      
      <span class="token comment">// 减去当前节点的值</span>
      targetSum <span class="token operator">-=</span> root<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
      
      <span class="token comment">// 如果是叶子节点且当前路径和等于 targetSum，返回 true</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>right <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> targetSum <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      
      <span class="token comment">// 递归检查左子树或右子树</span>
      <span class="token keyword">return</span> <span class="token function">hasPathSum</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> targetSum<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">hasPathSum</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> targetSum<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_113路径总和2" tabindex="-1"><a class="header-anchor" href="#_113路径总和2"><span>113路径总和2</span></a></h2><p>给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。<br> 说明: 叶子节点是指没有子节点的节点。<br> 示例: 给定如下二叉树，以及目标和 sum = 22，</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">pathSum</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">,</span> <span class="token keyword">int</span> targetSum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> res<span class="token punctuation">;</span>

    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> path <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> targetSum<span class="token punctuation">,</span> res<span class="token punctuation">,</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">,</span> <span class="token keyword">int</span> targetSum<span class="token punctuation">,</span>
                   <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> res<span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> path<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    path<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 判断是否为叶子节点且路径和等于 targetSum</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>right <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> targetSum <span class="token operator">==</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 递归调用左右子树</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> targetSum <span class="token operator">-</span> root<span class="token punctuation">.</span>val<span class="token punctuation">,</span> res<span class="token punctuation">,</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> targetSum <span class="token operator">-</span> root<span class="token punctuation">.</span>val<span class="token punctuation">,</span> res<span class="token punctuation">,</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 回溯，移除当前节点</span>
    path<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="t437路径总和3" tabindex="-1"><a class="header-anchor" href="#t437路径总和3"><span>t437路径总和3</span></a></h2><p>给定一个二叉树的根节点 root 和整数targetSum ，求节点值之和等于 targetSum 的 路径 的数目。<br> 路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">//时间复杂度：O(N)，其中 N 为二叉树中节点的个数。利用前缀和只需遍历一次二叉树即可。</span>
<span class="token comment">//空间复杂度：O(N)。</span>
前缀和
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">pathSum</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">,</span> <span class="token keyword">int</span> targetSum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 使用 Long 来处理大数问题</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> prefix <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        prefix<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token number">0L</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 初始化前缀和为 0 的情况</span>
        <span class="token keyword">return</span> <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> prefix<span class="token punctuation">,</span> <span class="token number">0L</span><span class="token punctuation">,</span> targetSum<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> node<span class="token punctuation">,</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> prefix<span class="token punctuation">,</span> <span class="token keyword">long</span> currSum<span class="token punctuation">,</span> <span class="token keyword">int</span> targetSum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        currSum <span class="token operator">+=</span> node<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
        <span class="token comment">// 计算符合条件的路径数量</span>
        <span class="token keyword">int</span> count <span class="token operator">=</span> prefix<span class="token punctuation">.</span><span class="token function">getOrDefault</span><span class="token punctuation">(</span>currSum <span class="token operator">-</span> targetSum<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 更新当前前缀和的出现次数</span>
        prefix<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>currSum<span class="token punctuation">,</span> prefix<span class="token punctuation">.</span><span class="token function">getOrDefault</span><span class="token punctuation">(</span>currSum<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 递归遍历左右子树并累加结果</span>
        count <span class="token operator">+=</span> <span class="token function">dfs</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> prefix<span class="token punctuation">,</span> currSum<span class="token punctuation">,</span> targetSum<span class="token punctuation">)</span><span class="token punctuation">;</span>
        count <span class="token operator">+=</span> <span class="token function">dfs</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> prefix<span class="token punctuation">,</span> currSum<span class="token punctuation">,</span> targetSum<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 回溯：减去当前节点的贡献</span>
        prefix<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>currSum<span class="token punctuation">,</span> prefix<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>currSum<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="t124二叉树中的最大路径和" tabindex="-1"><a class="header-anchor" href="#t124二叉树中的最大路径和"><span>t124二叉树中的最大路径和</span></a></h2><p>二叉树中的 路径 被定义为一条节点序列，序列中每对相邻节点之间都存在一条边。同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个 节点，且不一定经过根节点。<br> 路径和 是路径中各节点值的总和。<br> 给你一个二叉树的根节点 root ，返回其 最大路径和 。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>时间复杂度：<span class="token class-name">O</span><span class="token punctuation">(</span><span class="token class-name">N</span><span class="token punctuation">)</span>，其中 <span class="token class-name">N</span> 是二叉树中的节点个数。对每个节点访问不超过 <span class="token number">2</span> 次。
空间复杂度：<span class="token class-name">O</span><span class="token punctuation">(</span><span class="token class-name">N</span><span class="token punctuation">)</span>，其中 <span class="token class-name">N</span> 是二叉树中的节点个数。空间复杂度主要取决于递归调用层数，
最大层数等于二叉树的高度，最坏情况下，二叉树的高度等于二叉树中的节点个数。
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> maxSum <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MIN_VALUE</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">maxPathSum</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">maxGain</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> maxSum<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">maxGain</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token comment">// 递归计算左右子节点的最大贡献值</span>
        <span class="token comment">// 只有在最大贡献值大于 0 时，才会选取对应子节点</span>
        <span class="token keyword">int</span> leftGain <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token function">maxGain</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> rightGain <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token function">maxGain</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 节点的最大路径和取决于该节点的值与该节点的左右子节点的最大贡献值</span>
        <span class="token keyword">int</span> priceNewpath <span class="token operator">=</span> node<span class="token punctuation">.</span>val <span class="token operator">+</span> leftGain <span class="token operator">+</span> rightGain<span class="token punctuation">;</span>

        <span class="token comment">// 更新答案</span>
        maxSum <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxSum<span class="token punctuation">,</span> priceNewpath<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 返回节点的最大贡献值</span>
        <span class="token keyword">return</span> node<span class="token punctuation">.</span>val <span class="token operator">+</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>leftGain<span class="token punctuation">,</span> rightGain<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_257二叉树的所有路径" tabindex="-1"><a class="header-anchor" href="#_257二叉树的所有路径"><span>257二叉树的所有路径</span></a></h2><p>给定一个二叉树，返回所有从根节点到叶子节点的路径。<br> 说明: 叶子节点是指没有子节点的节点。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">//方式一</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 递归法
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">binaryTreePaths</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 存储最终的结果</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">traversal</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">traversal</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">,</span> <span class="token class-name">String</span> path<span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> res<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 当前节点值添加到路径中</span>
        path <span class="token operator">+=</span> root<span class="token punctuation">.</span>val<span class="token punctuation">;</span>

        <span class="token comment">// 如果是叶子节点，直接将路径添加到结果中</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>right <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 如果不是叶子节点，继续递归遍历子节点</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">traversal</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> path <span class="token operator">+</span> <span class="token string">&quot;-&gt;&quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">traversal</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> path <span class="token operator">+</span> <span class="token string">&quot;-&gt;&quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_404左叶子之和" tabindex="-1"><a class="header-anchor" href="#_404左叶子之和"><span>404左叶子之和</span></a></h2><p>计算给定二叉树的所有左叶子之和。左叶子的明确定义：节点A的左孩子不为空，且左孩子的左右孩子都为空（说明是叶子节点），那么A节点的左孩子为左叶子节点</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">sumOfLeftLeaves</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> leftValue <span class="token operator">=</span> <span class="token function">sumOfLeftLeaves</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 左</span>
        <span class="token keyword">int</span> rightValue <span class="token operator">=</span> <span class="token function">sumOfLeftLeaves</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 右</span>
                                                       
        <span class="token keyword">int</span> midValue <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>left<span class="token punctuation">.</span>left <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>left<span class="token punctuation">.</span>right <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
            midValue <span class="token operator">=</span> root<span class="token punctuation">.</span>left<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> sum <span class="token operator">=</span> midValue <span class="token operator">+</span> leftValue <span class="token operator">+</span> rightValue<span class="token punctuation">;</span>  <span class="token comment">// 中</span>
        <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="t236二叉树的最近公共祖先" tabindex="-1"><a class="header-anchor" href="#t236二叉树的最近公共祖先"><span>t236二叉树的最近公共祖先</span></a></h2><p>给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。</p><p>最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>时间复杂度：<span class="token class-name">O</span><span class="token punctuation">(</span><span class="token class-name">N</span><span class="token punctuation">)</span>，其中 <span class="token class-name">N</span> 是二叉树的节点数。二叉树的所有节点有且只会被访问一次，
从 p 和 q 节点往上跳经过的祖先节点个数不会超过 <span class="token class-name">N</span>，因此总的时间复杂度为 <span class="token class-name">O</span><span class="token punctuation">(</span><span class="token class-name">N</span><span class="token punctuation">)</span>。

空间复杂度：<span class="token class-name">O</span><span class="token punctuation">(</span><span class="token class-name">N</span><span class="token punctuation">)</span> ，其中 <span class="token class-name">N</span> 是二叉树的节点数。递归调用的栈深度取决于二叉树的高度，
二叉树最坏情况下为一条链，此时高度为 <span class="token class-name">N</span>，因此空间复杂度为 <span class="token class-name">O</span><span class="token punctuation">(</span><span class="token class-name">N</span><span class="token punctuation">)</span>，
哈希表存储每个节点的父节点也需要 <span class="token class-name">O</span><span class="token punctuation">(</span><span class="token class-name">N</span><span class="token punctuation">)</span> 的空间复杂度，因此最后总的空间复杂度为 <span class="token class-name">O</span><span class="token punctuation">(</span><span class="token class-name">N</span><span class="token punctuation">)</span>。
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">lowestCommonAncestor</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">,</span> <span class="token class-name">TreeNode</span> p<span class="token punctuation">,</span> <span class="token class-name">TreeNode</span> q<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 递归基例：如果 root 为空，或者 root 是 p 或 q，则返回 root</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> root <span class="token operator">==</span> p <span class="token operator">||</span> root <span class="token operator">==</span> q<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> root<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 递归查找左子树和右子树</span>
        <span class="token class-name">TreeNode</span> left <span class="token operator">=</span> <span class="token function">lowestCommonAncestor</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">TreeNode</span> right <span class="token operator">=</span> <span class="token function">lowestCommonAncestor</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 如果在左子树和右子树分别找到 p 和 q，则 root 就是最近公共祖先</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> root<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 如果在其中一个子树找到最近公共祖先，返回该子树的结果</span>
        <span class="token keyword">return</span> left <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">?</span> left <span class="token operator">:</span> right<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="平衡二叉树avl树及其实现" tabindex="-1"><a class="header-anchor" href="#平衡二叉树avl树及其实现"><span>平衡二叉树AVL树及其实现</span></a></h2><ul><li><p>AVL树解决了BST树退化成链表导致查询最坏复杂度变为O(n)的问题</p></li><li><p>平衡因子：AVL树中每个节点的左右子树高度差的绝对值不超过1。这个高度差称为平衡因子（Balance Factor），其取值可以是-1, 0, 或1。插入、查找、删除的复杂度都为O(log n)</p></li><li><p>失衡<br><strong>LL</strong></p></li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/563b6b3d90fdd86d4d02c.jpg" alt="ll.png" tabindex="0"><figcaption>ll.png</figcaption></figure><ul><li>失衡节点（图中 8 红色）的 bf &gt; 1，即左边更高</li><li>失衡节点的左孩子（图中 6）的 bf &gt;= 0 即左孩子这边也是左边更高或等高</li></ul><p><strong>LR</strong></p><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/1547bf432d9f2c58e1955.jpg" alt="lr.png" tabindex="0"><figcaption>lr.png</figcaption></figure><ul><li>失衡节点（图中 8）的 bf &gt; 1，即左边更高</li><li>失衡节点的左孩子（图中 6 红色）的 bf &lt; 0 即左孩子这边是右边更高</li></ul><p>对称的还有两种情况</p><p><strong>RL</strong></p><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/4fc57156769db3803fcf1.jpg" alt="rl.png" tabindex="0"><figcaption>rl.png</figcaption></figure><ul><li>失衡节点（图中 3）的 bf &lt;-1，即右边更高</li><li>失衡节点的右孩子（图中 6 红色）的 bf &gt; 0，即右孩子这边左边更高</li></ul><p><strong>RR</strong></p><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/c43fb3ae062cf171c47d0.jpg" alt="rr.png" tabindex="0"><figcaption>rr.png</figcaption></figure><ul><li>失衡节点（图中 3）的 bf &lt;-1，即右边更高</li><li>失衡节点的右孩子（图中 6 红色）的 bf &lt;= 0，即右孩子这边右边更高或等高</li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/97baa149e758ee635aee1.jpg" alt="rightrotate.png" tabindex="0"><figcaption>rightrotate.png</figcaption></figure><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/03641da0f8c896c4ccb22.jpg" alt="leftrotate.png" tabindex="0"><figcaption>leftrotate.png</figcaption></figure><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * This file contains an implementation of an AVL tree. An AVL tree is a special type of binary tree
 * which self balances itself to keep operations logarithmic.
 *
 * <span class="token keyword">@author</span> William Fiset, william.alexandre.fiset@gmail.com
 */</span>


<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AVLTreeRecursive</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span> <span class="token keyword">extends</span> <span class="token class-name">Comparable</span><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name">Iterable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

  <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token keyword">implements</span> <span class="token class-name">PrintableNode</span> <span class="token punctuation">{</span>

    <span class="token comment">// &#39;bf&#39; is short for Balance Factor</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> bf<span class="token punctuation">;</span>

    <span class="token comment">// The value/data contained within the node.</span>
    <span class="token keyword">public</span> <span class="token class-name">T</span> value<span class="token punctuation">;</span>

    <span class="token comment">// The height of this node in the tree.</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> height<span class="token punctuation">;</span>

    <span class="token comment">// The left and the right children of this node.</span>
    <span class="token keyword">public</span> <span class="token class-name">Node</span> left<span class="token punctuation">,</span> right<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token class-name">T</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">PrintableNode</span> <span class="token function">getLeft</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> left<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">PrintableNode</span> <span class="token function">getRight</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> right<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> value<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// The root node of the AVL tree.</span>
  <span class="token keyword">public</span> <span class="token class-name">Node</span> root<span class="token punctuation">;</span>

  <span class="token comment">// Tracks the number of nodes inside the tree.</span>
  <span class="token keyword">private</span> <span class="token keyword">int</span> nodeCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token comment">// The height of a rooted tree is the number of edges between the tree&#39;s</span>
  <span class="token comment">// root and its furthest leaf. This means that a tree containing a single</span>
  <span class="token comment">// node has a height of 0.</span>
  <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">height</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> root<span class="token punctuation">.</span>height<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Returns the number of nodes in the tree.</span>
  <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> nodeCount<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Returns whether or not the tree is empty.</span>
  <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Return true/false depending on whether a value exists in the tree.</span>
  <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">contains</span><span class="token punctuation">(</span><span class="token class-name">T</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">contains</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Recursive contains helper method.</span>
  <span class="token keyword">private</span> <span class="token keyword">boolean</span> <span class="token function">contains</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">,</span> <span class="token class-name">T</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

    <span class="token comment">// Compare current value to the value in the node.</span>
    <span class="token keyword">int</span> cmp <span class="token operator">=</span> value<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Dig into left subtree.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cmp <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">contains</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Dig into right subtree.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cmp <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">contains</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Found value in tree.</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Insert/add a value to the AVL tree. The value must not be null, O(log(n))</span>
  <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">insert</span><span class="token punctuation">(</span><span class="token class-name">T</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">contains</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      root <span class="token operator">=</span> <span class="token function">insert</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      nodeCount<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Inserts a value inside the AVL tree.</span>
  <span class="token keyword">private</span> <span class="token class-name">Node</span> <span class="token function">insert</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">,</span> <span class="token class-name">T</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// Base case.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Compare current value to the value in the node.</span>
    <span class="token keyword">int</span> cmp <span class="token operator">=</span> value<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Insert node in left subtree.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cmp <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      node<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">insert</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">;</span>

      <span class="token comment">// Insert node in right subtree.</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      node<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">insert</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Update balance factor and height values.</span>
    <span class="token function">update</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Re-balance tree.</span>
    <span class="token keyword">return</span> <span class="token function">balance</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Update a node&#39;s height and balance factor.</span>
  <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">int</span> leftNodeHeight <span class="token operator">=</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> node<span class="token punctuation">.</span>left<span class="token punctuation">.</span>height<span class="token punctuation">;</span>
    <span class="token keyword">int</span> rightNodeHeight <span class="token operator">=</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> node<span class="token punctuation">.</span>right<span class="token punctuation">.</span>height<span class="token punctuation">;</span>

    <span class="token comment">// Update this node&#39;s height.</span>
    node<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>leftNodeHeight<span class="token punctuation">,</span> rightNodeHeight<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Update balance factor.</span>
    node<span class="token punctuation">.</span>bf <span class="token operator">=</span> rightNodeHeight <span class="token operator">-</span> leftNodeHeight<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Re-balance a node if its balance factor is +2 or -2.</span>
  <span class="token keyword">private</span> <span class="token class-name">Node</span> <span class="token function">balance</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// Left heavy subtree.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>bf <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token comment">// Left-Left case.</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">.</span>bf <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">leftLeftCase</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Left-Right case.</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">leftRightCase</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// Right heavy subtree needs balancing.</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>bf <span class="token operator">==</span> <span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token comment">// Right-Right case.</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">.</span>bf <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">rightRightCase</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Right-Left case.</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">rightLeftCase</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Node either has a balance factor of 0, +1 or -1 which is fine.</span>
    <span class="token keyword">return</span> node<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">private</span> <span class="token class-name">Node</span> <span class="token function">leftLeftCase</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">rightRotation</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">private</span> <span class="token class-name">Node</span> <span class="token function">leftRightCase</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    node<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">leftRotation</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">leftLeftCase</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">private</span> <span class="token class-name">Node</span> <span class="token function">rightRightCase</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">leftRotation</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">private</span> <span class="token class-name">Node</span> <span class="token function">rightLeftCase</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    node<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">rightRotation</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">rightRightCase</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">private</span> <span class="token class-name">Node</span> <span class="token function">leftRotation</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Node</span> newParent <span class="token operator">=</span> node<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
    node<span class="token punctuation">.</span>right <span class="token operator">=</span> newParent<span class="token punctuation">.</span>left<span class="token punctuation">;</span><span class="token comment">//失衡节点的右节点变为失衡节点的右节点的左节点</span>
    newParent<span class="token punctuation">.</span>left <span class="token operator">=</span> node<span class="token punctuation">;</span><span class="token comment">//失衡节点变为失衡节点的右节点的左节点</span>
    <span class="token function">update</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">update</span><span class="token punctuation">(</span>newParent<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> newParent<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">private</span> <span class="token class-name">Node</span> <span class="token function">rightRotation</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Node</span> newParent <span class="token operator">=</span> node<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
    node<span class="token punctuation">.</span>left <span class="token operator">=</span> newParent<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
    newParent<span class="token punctuation">.</span>right <span class="token operator">=</span> node<span class="token punctuation">;</span>
    <span class="token function">update</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">update</span><span class="token punctuation">(</span>newParent<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> newParent<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Remove a value from this binary tree if it exists, O(log(n))</span>
  <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token class-name">T</span> elem<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>elem <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">contains</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> elem<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      root <span class="token operator">=</span> <span class="token function">remove</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> elem<span class="token punctuation">)</span><span class="token punctuation">;</span>
      nodeCount<span class="token operator">--</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Removes a value from the AVL tree.</span>
  <span class="token keyword">private</span> <span class="token class-name">Node</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">,</span> <span class="token class-name">T</span> elem<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> cmp <span class="token operator">=</span> elem<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Dig into left subtree, the value we&#39;re looking</span>
    <span class="token comment">// for is smaller than the current value.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cmp <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      node<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">remove</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> elem<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// Dig into right subtree, the value we&#39;re looking</span>
      <span class="token comment">// for is greater than the current value.</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>cmp <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      node<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">remove</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> elem<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// Found the node we wish to remove.</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

      <span class="token comment">// This is the case with only a right subtree or no subtree at all.</span>
      <span class="token comment">// In this situation just swap the node we wish to remove</span>
      <span class="token comment">// with its right child.</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> node<span class="token punctuation">.</span>right<span class="token punctuation">;</span>

        <span class="token comment">// This is the case with only a left subtree or</span>
        <span class="token comment">// no subtree at all. In this situation just</span>
        <span class="token comment">// swap the node we wish to remove with its left child.</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> node<span class="token punctuation">.</span>left<span class="token punctuation">;</span>

        <span class="token comment">// When removing a node from a binary tree with two links the</span>
        <span class="token comment">// successor of the node being removed can either be the largest</span>
        <span class="token comment">// value in the left subtree or the smallest value in the right</span>
        <span class="token comment">// subtree. As a heuristic, I will remove from the subtree with</span>
        <span class="token comment">// the greatest hieght in hopes that this may help with balancing.</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

        <span class="token comment">// Choose to remove from left subtree</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">.</span>height <span class="token operator">&gt;</span> node<span class="token punctuation">.</span>right<span class="token punctuation">.</span>height<span class="token punctuation">)</span> <span class="token punctuation">{</span>

          <span class="token comment">// Swap the value of the successor into the node.</span>
          <span class="token class-name">T</span> successorValue <span class="token operator">=</span> <span class="token function">findMax</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
          node<span class="token punctuation">.</span>value <span class="token operator">=</span> successorValue<span class="token punctuation">;</span>

          <span class="token comment">// Find the largest node in the left subtree.</span>
          node<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">remove</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> successorValue<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

          <span class="token comment">// Swap the value of the successor into the node.</span>
          <span class="token class-name">T</span> successorValue <span class="token operator">=</span> <span class="token function">findMin</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
          node<span class="token punctuation">.</span>value <span class="token operator">=</span> successorValue<span class="token punctuation">;</span>

          <span class="token comment">// Go into the right subtree and remove the leftmost node we</span>
          <span class="token comment">// found and swapped data with. This prevents us from having</span>
          <span class="token comment">// two nodes in our tree with the same value.</span>
          node<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">remove</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> successorValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Update balance factor and height values.</span>
    <span class="token function">update</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Re-balance tree.</span>
    <span class="token keyword">return</span> <span class="token function">balance</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Helper method to find the leftmost node (which has the smallest value)</span>
  <span class="token keyword">private</span> <span class="token class-name">T</span> <span class="token function">findMin</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> node <span class="token operator">=</span> node<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
    <span class="token keyword">return</span> node<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Helper method to find the rightmost node (which has the largest value)</span>
  <span class="token keyword">private</span> <span class="token class-name">T</span> <span class="token function">findMax</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> node <span class="token operator">=</span> node<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
    <span class="token keyword">return</span> node<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Returns as iterator to traverse the tree in order.</span>
  <span class="token keyword">public</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span>Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">final</span> <span class="token keyword">int</span> expectedNodeCount <span class="token operator">=</span> nodeCount<span class="token punctuation">;</span>
    <span class="token keyword">final</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span>Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Node</span><span class="token punctuation">&gt;</span></span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span>Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span>Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">Node</span> trav <span class="token operator">=</span> root<span class="token punctuation">;</span>

      <span class="token annotation punctuation">@Override</span>
      <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>expectedNodeCount <span class="token operator">!=</span> nodeCount<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span>ConcurrentModificationException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> root <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token annotation punctuation">@Override</span>
      <span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>expectedNodeCount <span class="token operator">!=</span> nodeCount<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span>ConcurrentModificationException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span>trav <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> trav<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>trav<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
          trav <span class="token operator">=</span> trav<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">Node</span> node <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
          trav <span class="token operator">=</span> node<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> node<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token annotation punctuation">@Override</span>
      <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">UnsupportedOperationException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">TreePrinter</span><span class="token punctuation">.</span><span class="token function">getTreeDisplay</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Make sure all left child nodes are smaller in value than their parent and</span>
  <span class="token comment">// make sure all right child nodes are greater in value than their parent.</span>
  <span class="token comment">// (Used only for testing)</span>
  <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">validateBSTInvarient</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token class-name">T</span> val <span class="token operator">=</span> node<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token keyword">boolean</span> isValid <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> isValid <span class="token operator">=</span> isValid <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>left<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> isValid <span class="token operator">=</span> isValid <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>right<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> isValid <span class="token operator">&amp;&amp;</span> <span class="token function">validateBSTInvarient</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">validateBSTInvarient</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="顺序存储二叉树-堆排序" tabindex="-1"><a class="header-anchor" href="#顺序存储二叉树-堆排序"><span>顺序存储二叉树-&gt;堆排序</span></a></h2><ul><li>从数据存储来看，数组存储方式和树的存储方式可以相互转换，即数组可以转换成树，树也可以转换成数组</li><li>顺序二叉树通常只考虑完全二叉树,n为索引，从0开始</li><li>第n个元素的左子节点为 2 * n + 1</li><li>第n个元素的右子节点为 2 * n + 2</li><li>第n个元素的父节点为 (n-1) / 2</li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/d0e4012e7fbe7c6019c44.png" alt="顺序存储二叉树.png" tabindex="0"><figcaption>顺序存储二叉树.png</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class ArrBinaryTree {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="霍夫曼树" tabindex="-1"><a class="header-anchor" href="#霍夫曼树"><span>霍夫曼树</span></a></h2><ul><li>给定n个权值作为n个叶子结点，构造的带权路径长度(wpl)达到最小的二叉树，称为为最优二叉树或霍夫曼树(Huffman Tree), 带权路径长度最短的树，权值较大的结点离根较近。</li><li>路径和路径长度：在一棵树中，从一个结点往下可以达到的孩子或孙子结点之间的通路，称为路径。通路中分支的数目称为路径长度。若规定根结点的层数为1，则从根结点到第L层结点的路径长度为L-1</li><li>结点的权及带权路径长度：若将树中结点赋给一个有着某种含义的数值，则这个数值称为该结点的权。结点的带权路径长度为：从根结点到该结点之间的路径长度与该结点的权的乘积</li><li>树的带权路径长度：树的带权路径长度规定为所有叶子结点的带权路径长度之和，记为WPL(weighted path length),权值越大的结点离根结点越近的二叉树才是最优二叉树。</li><li>WPL最小的就是赫夫曼树</li><li>构成赫夫曼树的步骤： <ul><li>1.从小到大进行排序, 将每一个数据，每个数据都是一个节点 ， 每个节点可以看成是一颗最简单的二叉树</li><li>2.取出根节点权值最小的两颗二叉树</li><li>3.组成一颗新的二叉树, 该新的二叉树的根节点的权值是前面两颗二叉树根节点权值的和</li><li>4.再将这颗新的二叉树，以根节点的权值大小再次排序， 不断重复1-2-3-4的步骤，直到数列中，所有的数据都被处理，就得到一颗赫夫曼树</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="霍夫曼编码" tabindex="-1"><a class="header-anchor" href="#霍夫曼编码"><span>霍夫曼编码</span></a></h2><ul><li>赫夫曼编码也翻译为哈夫曼编码(Huffman Coding)，又称霍夫曼编码，是一种编码方式, 属于一种程序算法</li><li>赫夫曼编码是赫哈夫曼树在电讯通信中的经典的应用之一。</li><li>赫夫曼编码广泛地用于数据文件压缩。其压缩率通常在20%～90%之间</li><li>赫夫曼码是可变字长编码(VLC)的一种。Huffman于1952年提出一种编码方法，称之为最佳编码</li><li>通信领域中信息的处理方式</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>定长编码
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	class BinarySortTree {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	class AVLTree {
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="b树" tabindex="-1"><a class="header-anchor" href="#b树"><span>B树</span></a></h2><ul><li>二叉树需要加载到内存的，如果二叉树的节点很多(比如1亿)， 就存在如下问题: <ul><li>在构建二叉树时，需要多次进行i/o操作(海量数据存在数据库或文件中)，节点海量，构建二叉树时，速度有影响</li><li>节点海量，也会造成二叉树的高度很大，会降低操作速度.</li></ul></li><li>多叉树 <ul><li>在二叉树中，每个节点有数据项，最多有两个子节点。如果允许每个节点可以有更多的数据项和更多的子节点，就是多叉树（multiway tree）</li><li>2-3树，2-3-4树就是多叉树，多叉树通过重新组织节点，减少树的高度，能对二叉树进行优化。</li></ul></li><li>B树 <ul><li>B树通过重新组织节点，降低树的高度，并且减少i/o读写次数来提升效率。</li><li>文件系统及数据库系统的设计者利用了磁盘预读原理，将一个节点的大小设为等于一个页(页得大小通常为4k)，这样每个节点只需要一次I/O就可以完全载入</li><li>将树的度M设置为1024，在600亿个元素中最多只需要4次I/O操作就可以读取到想要的元素, B树(B+)广泛应用于文件存储系统以及数据库系统中</li></ul></li><li>2-3树(最简单的B树结构) <ul><li>由二节点和三节点构成的树，所有叶子节点都在同一层.(只要是B树都满足这个条件)</li><li>有两个子节点的节点叫二节点，二节点要么没有子节点，要么有两个子节点.</li><li>有三个子节点的节点叫三节点，三节点要么没有子节点，要么有三个子节点.</li><li>当按照规则插入一个数到某个节点时，不能满足上面三个要求，就需要拆，先向上拆，如果上层满，则拆本层，拆后仍然需要满足上面3个条件。</li><li>三节点的子树的值大小遵守(BST 二叉排序树)的规则，即左子树的值都小于三节点的第一个值，中间子树的值都介于三节点的第一个值和第二个值。右子树的值，都大于三节点的第二个值.</li></ul></li><li>B树(B-树)的说明: <ul><li>B树的阶：节点的最多子节点个数。比如2-3树的阶是3，2-3-4树的阶是4</li><li>B树的搜索，从根结点开始，对结点内的关键字（有序）序列进行二分查找，如果命中则结束，否则进入查询关键字所属范围的儿子结点；重复，直到所对应的儿子指针为空，或已经是叶子结点</li><li>关键字集合分布在整颗树中, 即叶子节点和非叶子节点都存放数据.</li><li>搜索有可能在非叶子结点结束</li><li>其搜索性能等价于在关键字全集内做一次二分查找</li></ul></li><li>B+树 <ul><li>B+树是B树的变体，也是一种多路搜索树。</li><li>B+树的搜索与B树也基本相同，区别是B+树只有达到叶子结点才命中（B树可以在非叶子结点命中），其性能也等价于在关键字全集做一次二分查找</li><li>所有关键字都出现在叶子结点的链表中（即数据只能在叶子节点【也叫稠密索引】），且链表中的关键字(数据)恰好是有序的。</li><li>非叶子结点相当于是叶子结点的索引（稀疏索引），叶子结点相当于是存储（关键字）数据的数据层</li><li>更适合文件索引系统</li><li>B树和B+树各有自己的应用场景，不能说B+树完全比B树好，反之亦然.</li></ul></li><li>B*树 <ul><li>B<em>树是B+树的变体，在B+树的非根和非叶子结点再增加指向兄弟的指针。B</em>树分配新结点的概率比B+树要低，空间使用率更高</li><li>B*树定义了非叶子结点关键字个数至少为(2/3)*M，即块的最低使用率为2/3，而B+树的块的最低使用率为B+树的1/2。</li></ul></li></ul><h2 id="二叉树深度优先遍历-迭代法-了解" tabindex="-1"><a class="header-anchor" href="#二叉树深度优先遍历-迭代法-了解"><span>二叉树深度优先遍历（迭代法）了解</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 前序遍历顺序：中-左-右，入栈顺序：中-右-左</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token function">preorderTraversal</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> result<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">TreeNode</span> node <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            result<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 中序遍历顺序: 左-中-右 入栈顺序： 左-右</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token function">inorderTraversal</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> result<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">TreeNode</span> cur <span class="token operator">=</span> root<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token operator">!</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
           <span class="token keyword">if</span> <span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
               stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">;</span>
               cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
           <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
               cur <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
               result<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
               cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
           <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 后序遍历顺序 左-右-中 入栈顺序：中-左-右 出栈顺序：中-右-左， 最后翻转结果</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token function">postorderTraversal</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> result<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">TreeNode</span> node <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            result<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//同一迭代方法</span>
<span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">TreeNode</span> curr <span class="token operator">=</span> root<span class="token punctuation">;</span> <span class="token comment">// 代表当前节点</span>
<span class="token class-name">TreeNode</span> pop <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 最近一次弹栈的元素</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>curr <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token operator">!</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>curr <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">colorPrintln</span><span class="token punctuation">(</span><span class="token string">&quot;前: &quot;</span> <span class="token operator">+</span> curr<span class="token punctuation">.</span>val<span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>curr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 压入栈，为了记住回来的路</span>
        curr <span class="token operator">=</span> curr<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token class-name">TreeNode</span> peek <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 右子树可以不处理, 对中序来说, 要在右子树处理之前打印</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>peek<span class="token punctuation">.</span>right <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">colorPrintln</span><span class="token punctuation">(</span><span class="token string">&quot;中: &quot;</span> <span class="token operator">+</span> peek<span class="token punctuation">.</span>val<span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            pop <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">colorPrintln</span><span class="token punctuation">(</span><span class="token string">&quot;后: &quot;</span> <span class="token operator">+</span> pop<span class="token punctuation">.</span>val<span class="token punctuation">,</span> <span class="token number">34</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 右子树处理完成, 对中序来说, 无需打印</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>peek<span class="token punctuation">.</span>right <span class="token operator">==</span> pop<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            pop <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">colorPrintln</span><span class="token punctuation">(</span><span class="token string">&quot;后: &quot;</span> <span class="token operator">+</span> pop<span class="token punctuation">.</span>val<span class="token punctuation">,</span> <span class="token number">34</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 右子树待处理, 对中序来说, 要在右子树处理之前打印</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">colorPrintln</span><span class="token punctuation">(</span><span class="token string">&quot;中: &quot;</span> <span class="token operator">+</span> peek<span class="token punctuation">.</span>val<span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            curr <span class="token operator">=</span> peek<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">colorPrintln</span><span class="token punctuation">(</span><span class="token class-name">String</span> origin<span class="token punctuation">,</span> <span class="token keyword">int</span> color<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\033[%dm%s\\033[0m%n&quot;</span><span class="token punctuation">,</span> color<span class="token punctuation">,</span> origin<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,105),i=[p];function l(o,c){return s(),a("div",null,i)}const r=n(e,[["render",l],["__file","binarytree.html.vue"]]),v=JSON.parse('{"path":"/interview/datastructure/tree/binarytree.html","title":"树","lang":"zh-CN","frontmatter":{"title":"树","icon":"circle-info","date":"2023-01-01T00:00:00.000Z","tags":"树","categories":"面试","description":"二叉树的存储方式 二叉树链式存储方式就用指针， 顺序存储的方式就是用数组。 顺序存储的元素在内存是连续分布的，而链式存储则是通过指针把分布在各个地址的节点串联一起。 顺序存储就是用数组来存储二叉树，用数组来存储二叉树如何遍历的呢？ 如果父节点的数组下标是 i，那么它的左孩子就是 i * 2 + 1，右孩子就是 i * 2 + 2。父 = floor((...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/interview/datastructure/tree/binarytree.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"树"}],["meta",{"property":"og:description","content":"二叉树的存储方式 二叉树链式存储方式就用指针， 顺序存储的方式就是用数组。 顺序存储的元素在内存是连续分布的，而链式存储则是通过指针把分布在各个地址的节点串联一起。 顺序存储就是用数组来存储二叉树，用数组来存储二叉树如何遍历的呢？ 如果父节点的数组下标是 i，那么它的左孩子就是 i * 2 + 1，右孩子就是 i * 2 + 2。父 = floor((..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/d1c417facf44a16e0b651.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"树\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/d1c417facf44a16e0b651.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/563b6b3d90fdd86d4d02c.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/1547bf432d9f2c58e1955.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/4fc57156769db3803fcf1.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/c43fb3ae062cf171c47d0.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/97baa149e758ee635aee1.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/03641da0f8c896c4ccb22.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/d0e4012e7fbe7c6019c44.png\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"二叉树的存储方式","slug":"二叉树的存储方式","link":"#二叉树的存储方式","children":[]},{"level":2,"title":"递归什么时候需要返回值","slug":"递归什么时候需要返回值","link":"#递归什么时候需要返回值","children":[]},{"level":2,"title":"二叉树遍历及其相关题目√","slug":"二叉树遍历及其相关题目√","link":"#二叉树遍历及其相关题目√","children":[]},{"level":2,"title":"t114二叉树展开为链表√","slug":"t114二叉树展开为链表√","link":"#t114二叉树展开为链表√","children":[]},{"level":2,"title":"t199二叉树的右视图/树左下角的值√","slug":"t199二叉树的右视图-树左下角的值√","link":"#t199二叉树的右视图-树左下角的值√","children":[]},{"level":2,"title":"t104二叉树的最大深度","slug":"t104二叉树的最大深度","link":"#t104二叉树的最大深度","children":[]},{"level":2,"title":"111二叉树的最小深度","slug":"_111二叉树的最小深度","link":"#_111二叉树的最小深度","children":[]},{"level":2,"title":"222求完全二叉树节点个数","slug":"_222求完全二叉树节点个数","link":"#_222求完全二叉树节点个数","children":[]},{"level":2,"title":"t543求二叉树的直径","slug":"t543求二叉树的直径","link":"#t543求二叉树的直径","children":[]},{"level":2,"title":"t266翻转二叉树","slug":"t266翻转二叉树","link":"#t266翻转二叉树","children":[]},{"level":2,"title":"t101对称二叉树","slug":"t101对称二叉树","link":"#t101对称二叉树","children":[]},{"level":2,"title":"t105从前序与中序遍历序列构造二叉树（或者中后序）","slug":"t105从前序与中序遍历序列构造二叉树-或者中后序","link":"#t105从前序与中序遍历序列构造二叉树-或者中后序","children":[]},{"level":2,"title":"654最大二叉树","slug":"_654最大二叉树","link":"#_654最大二叉树","children":[]},{"level":2,"title":"617合并二叉树","slug":"_617合并二叉树","link":"#_617合并二叉树","children":[]},{"level":2,"title":"112路径总和","slug":"_112路径总和","link":"#_112路径总和","children":[]},{"level":2,"title":"113路径总和2","slug":"_113路径总和2","link":"#_113路径总和2","children":[]},{"level":2,"title":"t437路径总和3","slug":"t437路径总和3","link":"#t437路径总和3","children":[]},{"level":2,"title":"t124二叉树中的最大路径和","slug":"t124二叉树中的最大路径和","link":"#t124二叉树中的最大路径和","children":[]},{"level":2,"title":"257二叉树的所有路径","slug":"_257二叉树的所有路径","link":"#_257二叉树的所有路径","children":[]},{"level":2,"title":"404左叶子之和","slug":"_404左叶子之和","link":"#_404左叶子之和","children":[]},{"level":2,"title":"t236二叉树的最近公共祖先","slug":"t236二叉树的最近公共祖先","link":"#t236二叉树的最近公共祖先","children":[]},{"level":2,"title":"平衡二叉树AVL树及其实现","slug":"平衡二叉树avl树及其实现","link":"#平衡二叉树avl树及其实现","children":[]},{"level":2,"title":"顺序存储二叉树->堆排序","slug":"顺序存储二叉树-堆排序","link":"#顺序存储二叉树-堆排序","children":[]},{"level":2,"title":"霍夫曼树","slug":"霍夫曼树","link":"#霍夫曼树","children":[]},{"level":2,"title":"霍夫曼编码","slug":"霍夫曼编码","link":"#霍夫曼编码","children":[]},{"level":2,"title":"B树","slug":"b树","link":"#b树","children":[]},{"level":2,"title":"二叉树深度优先遍历（迭代法）了解","slug":"二叉树深度优先遍历-迭代法-了解","link":"#二叉树深度优先遍历-迭代法-了解","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":46.75,"words":14024},"filePathRelative":"interview/datastructure/tree/binarytree.md","localizedDate":"2023年1月1日","excerpt":"<h2>二叉树的存储方式</h2>\\n<ul>\\n<li>二叉树链式存储方式就用指针， 顺序存储的方式就是用数组。</li>\\n<li>顺序存储的元素在内存是连续分布的，而链式存储则是通过指针把分布在各个地址的节点串联一起。</li>\\n<li>顺序存储就是用数组来存储二叉树，用数组来存储二叉树如何遍历的呢？</li>\\n<li>如果父节点的数组下标是 i，那么它的左孩子就是 i * 2 + 1，右孩子就是 i * 2 + 2。父 = floor((子 - 1) / 2)</li>\\n</ul>\\n<h2>递归什么时候需要返回值</h2>\\n<p>需要返回值<br>\\n目标是计算某个值：如果递归的目的是通过多个子问题的解来计算一个整体的解（例如计算斐波那契数列、树的最大深度等），递归函数通常需要返回值，以将子问题的结果逐层传递回去。<br>\\n查找并返回结果：如果递归的目的是查找某个值或路径并返回（例如在树中查找某个节点是否存在），那么递归函数通常需要返回值，以便在找到结果时立即返回，并终止进一步的递归。<br>\\n路径汇总：在某些情况下，你需要汇总来自子树或子问题的多个结果，并将其返回给上一层。例如，计算树中所有路径和等于某个值的路径数量。<br>\\n不需要返回值<br>\\n目标是修改全局状态：如果递归的目的是修改某些全局状态，或直接对某些数据结构进行操作，而不需要从子问题中获取结果，那么递归函数通常不需要返回值。例如，在遍历过程中填充某个列表、集合、或字典。<br>\\n只做处理，不需要结果：如果递归的目的是执行某些操作，但这些操作的结果不需要传递回调用者，那么就不需要返回值。例如，前序遍历、中序遍历、后序遍历时，只需要访问每个节点并执行一些操作即可。</p>","autoDesc":true}');export{r as comp,v as data};
