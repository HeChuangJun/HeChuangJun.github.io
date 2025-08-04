import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as t,e as i}from"./app-7KT7HDzT.js";const s={},d=i(`<p>支付系统设计</p><h2 id="redis怎么做排行榜" tabindex="-1"><a class="header-anchor" href="#redis怎么做排行榜"><span>redis怎么做排行榜</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 添加成员及其分数
ZADD leaderboard 1000 &quot;player1&quot;
ZADD leaderboard 800 &quot;player2&quot;
ZADD leaderboard 1200 &quot;player3&quot;
ZADD leaderboard 600 &quot;player4&quot;

# 获取前5名
ZREVRANGE leaderboard 0 4 WITHSCORES
1) &quot;player3&quot;
   &quot;1200&quot;
2) &quot;player1&quot;
   &quot;1000&quot;
3) &quot;player2&quot;
   &quot;800&quot;
4) &quot;player4&quot;
   &quot;600&quot;

# 玩家 player2 的分数增加到 900
ZADD leaderboard 900 &quot;player2&quot;

# 玩家 player2 的份数增加100,注意，没有则新增
zincrby  leaderboard 100 &quot;player2&quot; 

# 查询 player1 的排名（从高到低）输出为排名，从0开始计数。
ZREVRANK leaderboard &quot;player1&quot;
(integer) 1

# 分数相同怎么办
按数字，大小写字母顺序排序
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何实现最近7天的活跃度榜单" tabindex="-1"><a class="header-anchor" href="#如何实现最近7天的活跃度榜单"><span>如何实现最近7天的活跃度榜单?</span></a></h2><p>方案一:Redis的zunionstore命令可以将多个Zset并起来，同时还可以设置集合的权重。<br> 方案二:“每日榜单”的info同步添加在“最近7天榜单”中，定时减去最远一天的榜单集合的score。可以使用lua脚本实现。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 假设你有以下7个 zset：
ZADD zset1 1 &quot;a&quot; 2 &quot;b&quot; 3 &quot;c&quot;
ZADD zset2 1 &quot;a&quot; 2 &quot;d&quot; 3 &quot;e&quot;
ZADD zset3 2 &quot;b&quot; 3 &quot;c&quot; 4 &quot;f&quot;
ZADD zset4 1 &quot;a&quot; 4 &quot;d&quot; 5 &quot;g&quot;
ZADD zset5 2 &quot;b&quot; 5 &quot;c&quot; 6 &quot;h&quot;
ZADD zset6 1 &quot;a&quot; 3 &quot;d&quot; 7 &quot;i&quot;
ZADD zset7 2 &quot;b&quot; 4 &quot;c&quot; 8 &quot;j&quot;
# 使用 ZUNIONSTORE 命令将它们合并：
ZUNIONSTORE merged_zset 7 zset1 zset2 zset3 zset4 zset5 zset6 zset7
# 查看合并后的结果：
ZREVRANGE merged_zset 0 -1 WITHSCORES
 1) &quot;e&quot;
 2) &quot;3&quot;
 3) &quot;a&quot;
 4) &quot;4&quot;
 5) &quot;f&quot;
 6) &quot;4&quot;
 7) &quot;g&quot;
 8) &quot;5&quot;
 9) &quot;h&quot;
10) &quot;6&quot;
11) &quot;i&quot;
12) &quot;7&quot;
13) &quot;b&quot;
14) &quot;8&quot;
15) &quot;j&quot;
16) &quot;8&quot;
17) &quot;d&quot;
18) &quot;9&quot;
19) &quot;c&quot;
20) &quot;15&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[d];function u(a,o){return n(),t("div",null,l)}const c=e(s,[["render",u],["__file","ranksystem.html.vue"]]),q=JSON.parse('{"path":"/interview/scenedesign/ranksystem.html","title":"排名系统设计","lang":"zh-CN","frontmatter":{"title":"排名系统设计","date":"2023-01-01T00:00:00.000Z","tags":"面试","categories":"面试","description":"支付系统设计","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/interview/scenedesign/ranksystem.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"排名系统设计"}],["meta",{"property":"og:description","content":"支付系统设计"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"排名系统设计\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"redis怎么做排行榜","slug":"redis怎么做排行榜","link":"#redis怎么做排行榜","children":[]},{"level":2,"title":"如何实现最近7天的活跃度榜单?","slug":"如何实现最近7天的活跃度榜单","link":"#如何实现最近7天的活跃度榜单","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.28,"words":385},"filePathRelative":"interview/scenedesign/ranksystem.md","localizedDate":"2023年1月1日","excerpt":"<p>支付系统设计</p>\\n","autoDesc":true}');export{c as comp,q as data};
