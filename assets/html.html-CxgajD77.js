import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as i,e as l}from"./app-7KT7HDzT.js";const n={},d=l(`<p>Html</p><h1 id="_1-html介绍" tabindex="-1"><a class="header-anchor" href="#_1-html介绍"><span>1. Html介绍</span></a></h1><ul><li>超文本标记语言（HyperText Markup Language）不是编程语言</li><li>超文本指页面可以包含图片、链接等非文字内容，比普通文本更强大</li><li>标记就是使用标签的方法将需要的内容包起来。使用一组标签对内容进行描述的语言</li><li>标签不区分大小写，建议小写，扩展名html或htm</li><li>HTML：它是整个网站的骨架。</li><li>CSS：它是对整个网站骨架的内容进行美化(修饰)</li><li>Javascript：它能够让整个页面具有动态效果。</li></ul><h1 id="_2-html文档结构" tabindex="-1"><a class="header-anchor" href="#_2-html文档结构"><span>2. Html文档结构</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;&lt;!--html5的头,比html4.01的文件头简洁--&gt;
&lt;html lang=&quot;zh&quot;&gt;&lt;!--根标签，由头和体组成 , lang语言--&gt;
&lt;head&gt;&lt;!--头标签，用于引入脚本、导入样式、提供元信息等，浏览器端不显示--&gt;
	&lt;meta charset=&quot;UTF-8&quot;&gt;&lt;!--设置html页面编码--&gt;
	&lt;title&gt;显示浏览器标题&lt;/title&gt;
&lt;/head&gt;
	&lt;body&gt;体标签，网页主体&lt;/body&gt;
&lt;/html&gt;

vscode 的 &quot;!&quot; 快捷键
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-html语法" tabindex="-1"><a class="header-anchor" href="#_3-html语法"><span>3. Html语法</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>注释:&lt;!--注释内容--&gt;  快捷键ctrl+/，源码可见，不能嵌套

超链接：&lt;a href=&quot;目标地址url&quot; target=&quot;_blank(新开)/_self(替换)/frame的name属性&quot; title=&quot;提示文本&quot;&gt;超链接&lt;/a&gt; 目标地址 &quot;2.html&quot; 、&quot;http://www.baidu.com&quot; &quot;#p1&quot; 锚点 &lt;p id=&quot;p1&quot;&gt;下面内容&lt;/p&gt;
&lt;a href=&quot;#&quot;&gt;回到顶部&lt;/a&gt;

&lt;b&gt;粗体&lt;/b&gt;

&lt;br/&gt;插入单个换行

&lt;div&gt;11&lt;/div&gt;

&lt;!--frameset（了解） --&gt;
&lt;!--多个窗口页面整合在一起的一个集合（框架集），每个页面都是单独文档，--&gt;
&lt;!--需要用子标签&lt;frame&gt;来确定页面的位置。多个frameset可以嵌套使用，frameset和body不能共存--&gt;
&lt;a href=&quot;right.html&quot; target=&quot;right&quot;&gt;&lt;/a&gt;
&lt;frameset rows=&quot;20%,*/？px，*(表示上边占？%/？像素，下边100-？%)&quot;&gt;
	&lt;frameset cols=&quot;20%,*/？px，*(左边占20%/？像素，右边占80%)&quot;&gt;
	&lt;frame src=&quot;url用于指向html页面&quot; nonresize=”true”noresize框架分割线不能移动/&gt;
	&lt;frame name=&quot;right(frame中的name 属性必须是超链接的的target属性值)&quot; /&gt;
&lt;/frameset&gt;

&lt;!--表单标签（重要）
action属性，请求路径，确定表单提交到服务器的地址（路径）
method属性，请求方式，默认get，提交的数据追加在请求路径上。不安全。
如/1.html?username=jack&amp;password=1234.数据格式k/v，追加使用？拦截，
之后每一对数据使用&amp;连接，url限制提交长度
post属性值，提交的数据不在请求路径上，不显示在地址栏上，安全，长度无限制
表单标签，无显示，要提交的数据必须放在表单标签内
enctype 在 post 请求时，指定请求体的数据格式
o application/x-www-form-urlencoded(默认)
o multipart/form-data
其中表单项提供多种收集数据的方式
。 有 name 属性的表单项数据，才会被发送给服务器
--&gt;
&lt;form action=&quot;#/\${pageContext.request.contextPath}/虚拟路径&quot; method=&quot;get/post&quot; entype=”multipart/form-data(包含上传控件) name=&quot;regist&quot;“”&gt;
	输入框:
	&lt;input type=&quot;text&quot; disabled name=&quot;a&quot; readonly=&quot;readonly(只读)&quot; value=&quot;a&quot; maxlength=&quot;5&quot;  placeholder=&quot;用户提示&quot; /&gt;
	&lt;input type=&quot;password&quot; name=&quot;password&quot; required=&quot;required（必填）&quot;/&gt;
	生日 &lt;input type=&quot;date&quot;name=&quot;birthday&quot;&gt; java用LocalDate birthday接收@DateTimeFormat(pattern =&quot;yyyy-MM-dd&quot;)
	单选按钮 java用String sex接收
	&lt;input type=&quot;radio&quot; name=&quot;sex&quot; value=&quot;男&quot;/&gt;男
	&lt;input type=&quot;radio&quot; name=&quot;sex&quot; value=&quot;女&quot; checked=&quot;checked（默选）&quot;/&gt;女
	复选按钮 java用List接收
	&lt;input type=&quot;checkbox&quot; name=&quot;hobby&quot; value=&quot;钓鱼&quot;/&gt;钓鱼
	&lt;input type=&quot;checkbox&quot; name=&quot;hobby&quot; value=&quot;a&quot; checked=&quot;checked&quot;/&gt;a
	提交按钮：&lt;input type=&quot;submit&quot; value=&quot;注册（显示文本）&quot;/&gt;
	普通按钮：&lt;input type=&quot;button&quot; value=&quot;zhuce&quot;/&gt;
	重置按钮：（将表单恢复到默认值）&lt;input type=&quot;reset&quot; /&gt;
	&lt;!--图形提交按钮通过src给按钮设置图片image--&gt;
	隐藏字段:&lt;input type=&quot;hidden&quot; name=&quot;id&quot; value=&quot;（暗中传输一些参数）&quot; /&gt;
	上传文件&lt;input type=&quot;file(上传)&quot; name=&quot;avatar&quot;/&gt; 后端用MultipartFile avatar接收
	&lt;!--name属性（必写）服务器通过name属性值获得表单提交的数据、见闻起义
	value属性:设置input默认值,submit和reset为按钮显示数据,发给服务器的值--&gt;
	下拉框：
	&lt;select name=&quot;province&quot; multiple=”multiple（多选）”size=“3（可见选项数）”&gt;
	&lt;option&gt;--请选择--&lt;/option&gt;
	&lt;option value=&quot;北京&quot;&gt;北京&lt;/option&gt;
	&lt;option value=&quot;上海&quot; selected=&quot;selected（默认勾选）&quot;&gt;上海&lt;/option&gt;
	&lt;/select&gt;
	文本域：
	&lt;textarea name=&quot;zwjs&quot; cos=”?（列数）” rows=”?（行数）”&gt;&lt;/textarea&gt;
&lt;/form&gt;

&lt;font size=&quot;7&quot;(1-7，默认3，大于7的按7显示)color=&quot;#FF0000(blue)&quot; face=“楷体”&gt;&lt;/font&gt;

&lt;h2&gt;标题标签hn 1-6，n越大，字体越小，大于6则按6算&lt;/h2&gt;加粗加黑显示，单独占用一行，与其他行有一定的间距

&lt;hr size=”5”（水平线的高度，单位像素） noshade=”noshade(水平线标签:noshade表示没阴影、纯色)”/&gt;

&lt;i&gt;斜体&lt;/i&gt;

&lt;img src=&quot;图片路径url/#（不跳转）&quot;  width=&quot;？px/？%&quot; height=&quot;？px&quot; alt=&quot;加载失败信息&quot;/&gt;
&lt;!--width和height设置百分数用于填充满整个表格或该像素
src:指的是图片显示的路径(位置)
绝对路径：E:\\Users\\Desktop\\WEB01_HTML\\资料\\WEB01\\image
相对路径：
①同一级：直接写文件名称或者./文件名称
②上一级：../文件名称③下一级：目录名称/文件名称--&gt;
文件地址
data URL
data:媒体类型;base64,数据
object URL

&lt;video src=&quot;文件路径&quot; controls&gt;&lt;/video&gt;
&lt;audio src=&quot;文件路径&quot; controls&gt;&lt;/audio&gt;

&lt;ol start=&quot;4&quot; reversed=&quot;reversed(有序列表降序排列)&quot; type=&quot;a/A/i/I/1&quot;&gt;
	&lt;li&gt;CSDN&lt;/li&gt;
	&lt;li&gt;百度&lt;/li&gt;
&lt;/ol&gt;

&lt;p title=&quot;I&#39;m a tooltip&quot;&gt;段落标签，自动在其前后创建一些空白 title将鼠标悬停在元素上时，title 属性的值将显示为工具提示&lt;/p&gt;

table(加载太慢，了解)
方式1
&lt;table align=&quot;center/right/center&quot; border=&quot;2px&quot; cellspacing=&quot;0px&quot; cellpadding=&quot;0px&quot; align=&quot;center&quot;
	width=&quot;500px&quot; height=&quot;400px&quot; bgcolor=&quot;blue&quot;&gt;			
	&lt;tr&gt;
		&lt;td colspan=&quot;2&quot;&gt;2&lt;/td&gt;//列
		&lt;td rowspan=&quot;2&quot;&gt;3&lt;/td&gt;
	&lt;/tr&gt;
	&lt;tr&gt;
		&lt;td &gt;4&lt;/td&gt;
		&lt;td &gt;5&lt;/td&gt;
	&lt;/tr&gt;
&lt;/table&gt;	
方式2
tbodies，所有的tbody，tbodies[i]，表示第几个tbody，rows多少行，rows[i],第几行。length，长度
&lt;table border=&quot;1px&quot; width=&quot;500px&quot; height=&quot;50px&quot; align=&quot;center&quot; id=&quot;tbl&quot;&gt;
	&lt;thead&gt;
		&lt;tr&gt;
		&lt;th&gt;编号&lt;/th&gt;//表头，该内容默认居中、加粗
		&lt;th&gt;姓名&lt;/th&gt;
		&lt;th&gt;年龄&lt;/th&gt;
		&lt;/tr&gt;
	&lt;/thead&gt;
	&lt;tbody&gt;
		&lt;tr &gt;
		&lt;td&gt;1&lt;/td&gt;
		&lt;td&gt;张三&lt;/td&gt;
		&lt;td&gt;22&lt;/td&gt;
		&lt;/tr&gt;
		&lt;tr &gt;
		&lt;td&gt;2&lt;/td&gt;
		&lt;td&gt;李四&lt;/td&gt;
		&lt;td&gt;25&lt;/td&gt;
		&lt;/tr&gt;
	&lt;/tbody&gt;
&lt;/table&gt;

&lt;ul type=&quot;square/circle/disc(无序列表方块/空心圆/实心圆)&quot;&gt;
	&lt;li&gt;CSDN&lt;/li&gt;
	&lt;li&gt;百度&lt;/li&gt;
&lt;/ul&gt;

&amp;nbsp；&amp;lt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),s=[d];function a(u,o){return e(),i("div",null,s)}const m=t(n,[["render",a],["__file","html.html.vue"]]),c=JSON.parse('{"path":"/frontend/html.html","title":"Html","lang":"zh-CN","frontmatter":{"title":"Html","date":"2023-01-01T00:00:00.000Z","tags":"Html","categories":"前端","description":"Html 1. Html介绍 超文本标记语言（HyperText Markup Language）不是编程语言 超文本指页面可以包含图片、链接等非文字内容，比普通文本更强大 标记就是使用标签的方法将需要的内容包起来。使用一组标签对内容进行描述的语言 标签不区分大小写，建议小写，扩展名html或htm HTML：它是整个网站的骨架。 CSS：它是对整个网...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/frontend/html.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"Html"}],["meta",{"property":"og:description","content":"Html 1. Html介绍 超文本标记语言（HyperText Markup Language）不是编程语言 超文本指页面可以包含图片、链接等非文字内容，比普通文本更强大 标记就是使用标签的方法将需要的内容包起来。使用一组标签对内容进行描述的语言 标签不区分大小写，建议小写，扩展名html或htm HTML：它是整个网站的骨架。 CSS：它是对整个网..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Html\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":5.09,"words":1528},"filePathRelative":"frontend/html.md","localizedDate":"2023年1月1日","excerpt":"<p>Html</p>\\n<!--more-->\\n<h1>1. Html介绍</h1>\\n<ul>\\n<li>超文本标记语言（HyperText Markup Language）不是编程语言</li>\\n<li>超文本指页面可以包含图片、链接等非文字内容，比普通文本更强大</li>\\n<li>标记就是使用标签的方法将需要的内容包起来。使用一组标签对内容进行描述的语言</li>\\n<li>标签不区分大小写，建议小写，扩展名html或htm</li>\\n<li>HTML：它是整个网站的骨架。</li>\\n<li>CSS：它是对整个网站骨架的内容进行美化(修饰)</li>\\n<li>Javascript：它能够让整个页面具有动态效果。</li>\\n</ul>","autoDesc":true}');export{m as comp,c as data};
