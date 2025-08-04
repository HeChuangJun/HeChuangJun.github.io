import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e as t}from"./app-7KT7HDzT.js";const e={},i=t(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><ul><li><p>贪心算法（Greedy Algorithm）是一种在解决问题时所采用的逐步构建解决方案的策略。它在每一步选择中都采取当前状态下最优或最有利的选择，而不管这个选择在全局范围内是否最优。简单来说，贪心算法总是做出看起来最好的选择，期望通过一系列的局部最优选择最终得到全局最优解。</p></li><li><p>贪心算法的特点</p><ul><li>局部最优：贪心算法在每一步都选择当前状态下最优的操作。</li><li>全局最优：通过局部最优的选择，贪心算法期望最终能得到全局最优解。但贪心算法并不总是能保证得到全局最优解。</li><li>不回溯：一旦作出某个选择，贪心算法不会回头更改以前的选择。它不会像动态规划或回溯算法那样存储之前的状态。</li></ul></li><li><p>应用场景</p><ul><li>最优子结构性质：一个问题具有最优子结构，如果问题的最优解包含其子问题的最优解。贪心算法可以通过解决子问题来构建全局最优解。</li><li>贪心选择性质：每一步的局部最优选择可以构成问题的全局最优解。</li></ul></li><li><p>常见的贪心算法例子</p><ul><li>活动选择问题：选择最多的活动在一个时间段内参加，要求选出的活动互不冲突。</li><li>最小生成树问题：Kruskal和Prim算法都利用贪心思想构造图的最小生成树。</li><li>Huffman编码：基于字符出现的频率，构建最优的前缀编码。</li><li>找零问题：在商店找零时，使用最少数量的硬币来找出指定金额。</li></ul></li><li><p>贪心算法的局限性：贪心算法不是万能的，只有当问题满足贪心选择性质和最优子结构性质时，才能确保贪心算法得到的解是全局最优的。在某些情况下，贪心算法得到的解可能不是最优的，因为它只考虑了局部的最优解，没有考虑全局的情况。</p></li></ul><h1 id="_15-贪心算法" tabindex="-1"><a class="header-anchor" href="#_15-贪心算法"><span>15. 贪心算法</span></a></h1><ul><li>贪婪算法(贪心算法)是指在对问题进行求解时，在每一步选择中都采取最好或者最优(即最有利)的选择，从而希望能够导致结果是最好或者最优的算法</li><li>贪婪算法所得到的结果不一定是最优的结果(有时候会是最优解)，但是都是相对近似(接近)最优解的结果</li><li>比如上题的算法选出的是K1, K2, K3, K5，符合覆盖了全部的地区</li><li>但是我们发现 K2, K3,K4,K5 也可以覆盖全部地区，如果K2 的使用成本低于K1,那么我们上题的 K1, K2, K3, K5 虽然是满足条件，但是并不是最优的.</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>假设存在如下表的需要付费的广播台，以及广播台信号可以覆盖的地区。 如何选择最少的广播台，让所有的地区都可以接收到信号
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_121买卖股票的最佳时机" tabindex="-1"><a class="header-anchor" href="#_121买卖股票的最佳时机"><span>121买卖股票的最佳时机</span></a></h2><p>给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。<br> 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。<br> 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>时间复杂度：<span class="token class-name">O</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>，只需要遍历一次。
空间复杂度：<span class="token class-name">O</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>，只使用了常数个变量。
用一个变量记录一个历史最低价格 minprice，我们就可以假设自己的股票是在那天买的。那么我们在第 i 天卖出股票能得到的利润就是 prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> minprice。
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">maxProfit</span><span class="token punctuation">(</span><span class="token keyword">int</span> prices<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> minprice <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> maxprofit <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> prices<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> minprice<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                minprice <span class="token operator">=</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> minprice <span class="token operator">&gt;</span> maxprofit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                maxprofit <span class="token operator">=</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> minprice<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> maxprofit<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_55跳跃游戏" tabindex="-1"><a class="header-anchor" href="#_55跳跃游戏"><span>55跳跃游戏</span></a></h2><p>给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。数组中的每个元素代表你在该位置可以跳跃的最大长度。<br> 判断你是否能够到达最后一个下标，如果可以，返回 true ；否则，返回 false 。<br> 示例 1：输入：nums = [2,3,1,1,4]输出：true<br> 解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>时间复杂度：<span class="token class-name">O</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>，其中 n 为数组的大小。只需要访问 nums 数组一遍，共 n 个位置。
空间复杂度：<span class="token class-name">O</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>，不需要额外的空间开销。
 <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">canJump</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">int</span> rightmost <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> rightmost<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//如果 i &lt;= rightmost：说明位置 i 是可以从起点经过某些跳跃到达的。</span>
            <span class="token comment">//换句话说，rightmost 已经覆盖到了位置 i，所以可以在这个位置 i 继续考虑从这里往后跳跃，进一步更新 rightmost。</span>
                rightmost <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>rightmost<span class="token punctuation">,</span> i <span class="token operator">+</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>rightmost <span class="token operator">&gt;=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_45跳跃游戏ii" tabindex="-1"><a class="header-anchor" href="#_45跳跃游戏ii"><span>45跳跃游戏II</span></a></h2><p>给定一个长度为 n 的 0 索引整数数组 nums。初始位置为 nums[0]。</p><p>每个元素 nums[i] 表示从索引 i 向前跳转的最大长度。换句话说，如果你在 nums[i] 处，你可以跳转到任意 nums[i + j] 处:</p><p>0 &lt;= j &lt;= nums[i]<br> i + j &lt; n<br> 返回到达 nums[n - 1] 的最小跳跃次数。生成的测试用例可以到达 nums[n - 1]。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>时间复杂度：<span class="token class-name">O</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>，其中 n 是数组长度。
空间复杂度：<span class="token class-name">O</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>。
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">jump</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> length <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">int</span> end <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> maxPosition <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> 
        <span class="token keyword">int</span> steps <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//记录从0-end的最大位置</span>
            maxPosition <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxPosition<span class="token punctuation">,</span> i <span class="token operator">+</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//更新end的位置</span>
                end <span class="token operator">=</span> maxPosition<span class="token punctuation">;</span>
                steps<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> steps<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_763划分字母区间" tabindex="-1"><a class="header-anchor" href="#_763划分字母区间"><span>763划分字母区间</span></a></h2><p>给你一个字符串 s 。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。<br> 注意，划分结果需要满足：将所有划分结果按顺序连接，得到的字符串仍然是 s 。<br> 返回一个表示每个字符串片段的长度的列表。</p><p>示例 1：输入：s = &quot;ababcbacadefegdehijhklij&quot; 输出：[9,7,8]<br> 解释：<br> 划分结果为 &quot;ababcbaca&quot;、&quot;defegde&quot;、&quot;hijhklij&quot; 。<br> 每个字母最多出现在一个片段中。<br> 像 &quot;ababcbacadefegde&quot;, &quot;hijhklij&quot; 这样的划分是错误的，因为划分的片段数较少。<br> 示例 2：</p><p>输入：s = &quot;eccbbbbdec&quot;<br> 输出：[10]</p><p>由于同一个字母只会出现在同一个片段，显然同一个字母的第一次出现的下标位置和最后一次出现的下标位置必须出现在同一个片段。因此需要遍历字符串，得到每个字母最后一次出现的下标位置。</p><p>在得到每个字母最后一次出现的下标位置之后，可以使用贪心的方法将字符串划分为尽可能多的片段，具体做法如下：</p><ul><li>从左到右遍历字符串，遍历的同时维护当前片段的开始下标 <code>start</code> 和结束下标 <code>end</code>，初始时 <code>start = end = 0</code>。</li><li>对于每个访问到的字符 <code>c</code>，得到当前字符的最后一次出现的下标位置 <code>end_c</code>，则当前片段的结束下标一定不会小于 <code>end_c</code>，因此令 <code>end = max(end, end_c)</code>。</li><li>当访问到下标 <code>end</code> 时，当前片段访问结束，当前片段的下标范围是 <code>[start, end]</code>，长度为 <code>end - start + 1</code>，将当前片段的长度添加到返回值，然后令 <code>start = end + 1</code>，继续寻找下一个片段。</li><li>重复上述过程，直到遍历完字符串。</li></ul><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token function">partitionLabels</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> last <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">26</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> length <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//记录每个字母最后一次出现的索引</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            last<span class="token punctuation">[</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> partition <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> end <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            end <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>end<span class="token punctuation">,</span> last<span class="token punctuation">[</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                partition<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>end <span class="token operator">-</span> start <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                start <span class="token operator">=</span> end <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> partition<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),p=[i];function l(o,c){return s(),a("div",null,p)}const d=n(e,[["render",l],["__file","greedy.html.vue"]]),k=JSON.parse('{"path":"/interview/algorithm/greedy.html","title":"贪心算法","lang":"zh-CN","frontmatter":{"title":"贪心算法","icon":"circle-info","date":"2023-01-01T00:00:00.000Z","tags":"贪心算法","categories":"面试","description":"介绍 贪心算法（Greedy Algorithm）是一种在解决问题时所采用的逐步构建解决方案的策略。它在每一步选择中都采取当前状态下最优或最有利的选择，而不管这个选择在全局范围内是否最优。简单来说，贪心算法总是做出看起来最好的选择，期望通过一系列的局部最优选择最终得到全局最优解。 贪心算法的特点 局部最优：贪心算法在每一步都选择当前状态下最优的操作。 ...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/interview/algorithm/greedy.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"贪心算法"}],["meta",{"property":"og:description","content":"介绍 贪心算法（Greedy Algorithm）是一种在解决问题时所采用的逐步构建解决方案的策略。它在每一步选择中都采取当前状态下最优或最有利的选择，而不管这个选择在全局范围内是否最优。简单来说，贪心算法总是做出看起来最好的选择，期望通过一系列的局部最优选择最终得到全局最优解。 贪心算法的特点 局部最优：贪心算法在每一步都选择当前状态下最优的操作。 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"贪心算法\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"121买卖股票的最佳时机","slug":"_121买卖股票的最佳时机","link":"#_121买卖股票的最佳时机","children":[]},{"level":2,"title":"55跳跃游戏","slug":"_55跳跃游戏","link":"#_55跳跃游戏","children":[]},{"level":2,"title":"45跳跃游戏II","slug":"_45跳跃游戏ii","link":"#_45跳跃游戏ii","children":[]},{"level":2,"title":"763划分字母区间","slug":"_763划分字母区间","link":"#_763划分字母区间","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":9.62,"words":2887},"filePathRelative":"interview/algorithm/greedy.md","localizedDate":"2023年1月1日","excerpt":"<h2>介绍</h2>\\n<ul>\\n<li>\\n<p>贪心算法（Greedy Algorithm）是一种在解决问题时所采用的逐步构建解决方案的策略。它在每一步选择中都采取当前状态下最优或最有利的选择，而不管这个选择在全局范围内是否最优。简单来说，贪心算法总是做出看起来最好的选择，期望通过一系列的局部最优选择最终得到全局最优解。</p>\\n</li>\\n<li>\\n<p>贪心算法的特点</p>\\n<ul>\\n<li>局部最优：贪心算法在每一步都选择当前状态下最优的操作。</li>\\n<li>全局最优：通过局部最优的选择，贪心算法期望最终能得到全局最优解。但贪心算法并不总是能保证得到全局最优解。</li>\\n<li>不回溯：一旦作出某个选择，贪心算法不会回头更改以前的选择。它不会像动态规划或回溯算法那样存储之前的状态。</li>\\n</ul>\\n</li>\\n<li>\\n<p>应用场景</p>\\n<ul>\\n<li>最优子结构性质：一个问题具有最优子结构，如果问题的最优解包含其子问题的最优解。贪心算法可以通过解决子问题来构建全局最优解。</li>\\n<li>贪心选择性质：每一步的局部最优选择可以构成问题的全局最优解。</li>\\n</ul>\\n</li>\\n<li>\\n<p>常见的贪心算法例子</p>\\n<ul>\\n<li>活动选择问题：选择最多的活动在一个时间段内参加，要求选出的活动互不冲突。</li>\\n<li>最小生成树问题：Kruskal和Prim算法都利用贪心思想构造图的最小生成树。</li>\\n<li>Huffman编码：基于字符出现的频率，构建最优的前缀编码。</li>\\n<li>找零问题：在商店找零时，使用最少数量的硬币来找出指定金额。</li>\\n</ul>\\n</li>\\n<li>\\n<p>贪心算法的局限性：贪心算法不是万能的，只有当问题满足贪心选择性质和最优子结构性质时，才能确保贪心算法得到的解是全局最优的。在某些情况下，贪心算法得到的解可能不是最优的，因为它只考虑了局部的最优解，没有考虑全局的情况。</p>\\n</li>\\n</ul>","autoDesc":true}');export{d as comp,k as data};
