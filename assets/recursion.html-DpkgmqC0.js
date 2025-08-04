import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,e as t}from"./app-7KT7HDzT.js";const l={},a=t(`<h1 id="递归-recursion" tabindex="-1"><a class="header-anchor" href="#递归-recursion"><span>递归(Recursion)</span></a></h1><ul><li>递归就是方法自己调用自己,每次调用时传入不同的变量.递归有助于编程者解决复杂的问题,同时可以让代码变得简洁。</li><li>递归使用场景 <ul><li>各种数学问题如: 8皇后问题 , 汉诺塔, 阶乘问题, 迷宫问题(回溯), 球和篮子的问题(google编程大赛),打印问题，</li><li>各种算法中也会使用到递归，比如快排，归并排序，二分查找，分治算法等.</li></ul></li><li>递归需要遵守的重要规则 <ul><li>执行一个方法时，就创建一个新的受保护的独立空间(栈空间)</li><li>方法的局部变量是独立的，不会相互影响, 比如n变量</li><li>如果方法中使用的是引用类型变量(比如数组)，就会共享该引用类型的数据.</li><li>递归必须向退出递归的条件逼近，否则就是无限递归,出现StackOverflowError</li><li>当一个方法执行完毕，或者遇到return，就会返回，遵守谁调用，就将结果返回给谁，同时当方法执行完毕或者返回时，该方法也就执行完毕。</li></ul></li></ul><h2 id="迷宫问题" tabindex="-1"><a class="header-anchor" href="#迷宫问题"><span>迷宫问题</span></a></h2><ul><li>小球得到的路径，和设置的找路策略有关即：找路的上下左右的顺序相关,可以先下右上左，或者上右下左</li><li>求最短路径?</li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/84bc3b81a2ae107fe0891.png" alt="迷宫.png" tabindex="0"><figcaption>迷宫.png</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public static void main(String[] args) {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),r=[a];function s(d,c){return e(),n("div",null,r)}const m=i(l,[["render",s],["__file","recursion.html.vue"]]),o=JSON.parse('{"path":"/interview/algorithm/recursion.html","title":"递归","lang":"zh-CN","frontmatter":{"title":"递归","icon":"circle-info","date":"2023-01-01T00:00:00.000Z","tags":"递归","categories":"面试","description":"递归(Recursion) 递归就是方法自己调用自己,每次调用时传入不同的变量.递归有助于编程者解决复杂的问题,同时可以让代码变得简洁。 递归使用场景 各种数学问题如: 8皇后问题 , 汉诺塔, 阶乘问题, 迷宫问题(回溯), 球和篮子的问题(google编程大赛),打印问题， 各种算法中也会使用到递归，比如快排，归并排序，二分查找，分治算法等. 递归...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/interview/algorithm/recursion.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"递归"}],["meta",{"property":"og:description","content":"递归(Recursion) 递归就是方法自己调用自己,每次调用时传入不同的变量.递归有助于编程者解决复杂的问题,同时可以让代码变得简洁。 递归使用场景 各种数学问题如: 8皇后问题 , 汉诺塔, 阶乘问题, 迷宫问题(回溯), 球和篮子的问题(google编程大赛),打印问题， 各种算法中也会使用到递归，比如快排，归并排序，二分查找，分治算法等. 递归..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/84bc3b81a2ae107fe0891.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"递归\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/84bc3b81a2ae107fe0891.png\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"迷宫问题","slug":"迷宫问题","link":"#迷宫问题","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.59,"words":778},"filePathRelative":"interview/algorithm/recursion.md","localizedDate":"2023年1月1日","excerpt":"\\n<ul>\\n<li>递归就是方法自己调用自己,每次调用时传入不同的变量.递归有助于编程者解决复杂的问题,同时可以让代码变得简洁。</li>\\n<li>递归使用场景\\n<ul>\\n<li>各种数学问题如: 8皇后问题 , 汉诺塔, 阶乘问题, 迷宫问题(回溯), 球和篮子的问题(google编程大赛),打印问题，</li>\\n<li>各种算法中也会使用到递归，比如快排，归并排序，二分查找，分治算法等.</li>\\n</ul>\\n</li>\\n<li>递归需要遵守的重要规则\\n<ul>\\n<li>执行一个方法时，就创建一个新的受保护的独立空间(栈空间)</li>\\n<li>方法的局部变量是独立的，不会相互影响, 比如n变量</li>\\n<li>如果方法中使用的是引用类型变量(比如数组)，就会共享该引用类型的数据.</li>\\n<li>递归必须向退出递归的条件逼近，否则就是无限递归,出现StackOverflowError</li>\\n<li>当一个方法执行完毕，或者遇到return，就会返回，遵守谁调用，就将结果返回给谁，同时当方法执行完毕或者返回时，该方法也就执行完毕。</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{m as comp,o as data};
