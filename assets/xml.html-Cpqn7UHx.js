import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o,c as m,b as l,d as e,e as a,a as i}from"./app-Cw8r8IGg.js";const p={},s=i('<p>xml</p><ul><li><a href="#1-xml%E4%BB%8B%E7%BB%8D">1. xml介绍</a></li><li><a href="#2-xml%E8%AF%AD%E6%B3%95">2. xml语法:</a></li><li><a href="#3-xml%E7%BA%A6%E6%9D%9F">3. xml约束</a><ul><li><a href="#31-dtd%E7%BA%A6%E6%9D%9F">3.1. DTD约束</a></li><li><a href="#32-schema%E7%BA%A6%E6%9D%9F">3.2. Schema约束</a></li></ul></li><li><a href="#33-xml%E8%A7%A3%E6%9E%90">3.3. xml解析</a></li><li><a href="#34-%E8%A7%A3%E6%9E%90%E5%BC%80%E5%8F%91%E5%8C%85">3.4. 解析开发包</a></li><li><a href="#35-dom%E8%A7%A3%E6%9E%90%E5%8E%9F%E7%90%86%E5%8F%8A%E7%BB%93%E6%9E%84%E6%A8%A1%E5%9E%8B">3.5. DOM解析原理及结构模型</a></li></ul><h1 id="_1-xml介绍" tabindex="-1"><a class="header-anchor" href="#_1-xml介绍"><span>1. xml介绍</span></a></h1><ul><li>xml:Extensible Markup Language 可扩展的标记语言，标签可自定义，其他与Html相似</li><li>用作:配置文件/存放数据</li></ul><h1 id="_2-xml语法" tabindex="-1"><a class="header-anchor" href="#_2-xml语法"><span>2. xml语法:</span></a></h1><ul><li>文档声明:必须从文档的0行0列位置开始;必须以&lt;?xml开头，以?&gt;结束; <ul><li>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</li><li>文档声明只有三个属性 <ul><li>1.version：指定xml文档版本，必须属性，只选1.0版</li><li>2.encoding：指定当前文档的编码，可选属性，默认值是utf-8;</li><li>3.standalone:指定文档独立性，可选属性，默认值为yes，表示当前文档是独立的文档；no表示当前文档不是独立文档，依赖外部文件</li></ul></li></ul></li><li>元素 <ul><li>&lt;servlet&gt;</li><li>普通元素的结构由开始标签，元素体，结束标签组成&lt;a&gt;&lt;/a&gt;</li><li>元素体可以是元素或者文本&lt;a&gt;&lt;b&gt;文本&lt;/b&gt;&lt;/a&gt;</li><li>空元素只有开始标签，无结束标签，元素必须自己闭合&lt;c/&gt;</li><li>元素命名区分大小写，不能空格冒号，不建议各种xml开头</li><li>格式化良好的xml有一个根元素</li></ul></li><li>属性 <ul><li>&lt;web-app version=&quot;2.5&quot;&gt;</li><li>位于元素的开始标签中，属性=属性值</li><li>属性值必须单引号或者双引</li><li>一个元素可以有n个不同名属性</li><li>属性名不能空格冒号，必须字母开头</li></ul></li><li>注释 &lt;!--注释--&gt;</li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/d5cf38d9a11590a845bb2.png" alt="xml转义字符.png" tabindex="0"><figcaption>xml转义字符.png</figcaption></figure><ul><li>&lt;![CDATA[需要大量转义字符原来的字符]]&gt;</li></ul><h1 id="_3-xml约束" tabindex="-1"><a class="header-anchor" href="#_3-xml约束"><span>3. xml约束</span></a></h1><h2 id="_3-1-dtd约束" tabindex="-1"><a class="header-anchor" href="#_3-1-dtd约束"><span>3.1. DTD约束</span></a></h2><ul><li><p>文档类型定义，约束XML元素及其子元素的名称及顺序、属性等</p></li><li><p>文档声明：&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;后面</p><ul><li>内部DTD:&lt;!DOCTYPE 根标签名 [语法....]&gt;只对当前的xml有效</li><li>外部DTD--本地文件:&lt;!DOCTYPE 根标签名 SYSTEM &quot;xxxx.dtd&quot;&gt;</li><li>外部DTD--网络:&lt;!DOCTYPE 根标签名 PUBLIC &quot;名称&quot; &quot;路径&quot;&gt;一般由框架提供</li></ul></li><li><p>元素声明&lt;!ELEMENT 标签名 [符号|约束]&gt;</p><ul><li>&lt;!ELEMENT hibernate-mapping (meta*)&gt;</li><li>符号：？+ * , | () “文嘉兴”</li><li>约束：#PCDATA 表示内容是文本不是子标签</li><li>后面没加符号的表示有且只有一次，()分组并指示子元素个数及顺序</li></ul></li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/71ba34c1b3ed854bd6ae4.png" alt="dtd元素声明.png" tabindex="0"><figcaption>dtd元素声明.png</figcaption></figure><ul><li>属性声明&lt;!ATTLIST 标签名 属性描述 属性描述2 ...&gt; <ul><li>&lt;!ATTLIST hibernate-mapping schema CDATA #IMPLIED&gt;</li><li>属性描述 <ul><li>属性名：自定义</li><li>属性类型：CDATA ，ID ，枚举（xx|）</li><li>属性约束：#REQUIRED （必须） #IMPLIED（可选）</li></ul></li></ul></li></ul><h2 id="_3-2-schema约束" tabindex="-1"><a class="header-anchor" href="#_3-2-schema约束"><span>3.2. Schema约束</span></a></h2>',14),h=l("li",null,[l("p",null,"比DTD功能强、扩展名为xsd、支持命名空间、数据类型更完善")],-1),c=l("li",null,[l("p",null,"命名空间(解决多个xsd的元素和属性名冲突的问题)"),l("ul",null,[l("li",null,"给schema文档起一个名称，只是建议采用是url进行命名。是不是官方文档看那个url"),l("li",null,"能在xml中区别多个约束文档中，重名的元素、属性等内容。"),l("li",null,'缺省命名空间（默认）:<xxx xmlns="" >使用元素或属性时不加前缀<xxx>'),l("li",null,'显示命名空间:<xsd xmlns:别名="">使用元素或属性时加前缀<别名:xxx>'),l("li",null,"只要url一样，两种声明方式一样")])],-1),g=l("p",null,"文档声明",-1),d={href:"http://www.w3.org/2001/XMLSchema-instance",target:"_blank",rel:"noopener noreferrer"},u={href:"http://www.example.org/web-app_2_5",target:"_blank",rel:"noopener noreferrer"},x=l("br",null,null,-1),f={href:"http://www.w3.org/2001/XMLSchema-instance",target:"_blank",rel:"noopener noreferrer"},E=l("br",null,null,-1),_={href:"http://www.example.org/web-app_2_5",target:"_blank",rel:"noopener noreferrer"},D=i('<h1 id="_3-3-xml解析" tabindex="-1"><a class="header-anchor" href="#_3-3-xml解析"><span>3.3. xml解析</span></a></h1><ul><li>DOM解析 <ul><li>将xml文档加载到内存形成树结构，形成Document对象 <ul><li>优点:元素与元素有结构关系，能CRUD，</li><li>缺点：文档太大易内存溢出</li></ul></li></ul></li><li>SAX解析 <ul><li>事件驱动的方式逐行边读边解析，每执行一行都触发相应的事件 <ul><li>优点：文档大也不内存溢出，速度快</li><li>缺点：只读，不能CRUD，运行后释放资源</li></ul></li></ul></li><li>PULL:安卓内置的xml解析方式，类似sax（了解）</li></ul><h1 id="_3-4-解析开发包" tabindex="-1"><a class="header-anchor" href="#_3-4-解析开发包"><span>3.4. 解析开发包</span></a></h1><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/a77f965211515afaa58ae.png" alt="xml解析开发包.png" tabindex="0"><figcaption>xml解析开发包.png</figcaption></figure><h1 id="_3-5-dom解析原理及结构模型" tabindex="-1"><a class="header-anchor" href="#_3-5-dom解析原理及结构模型"><span>3.5. DOM解析原理及结构模型</span></a></h1><ul><li>原理:将整个xml文档加载到内存，生成一个DOM树并获得Document对象以完成DOM操作</li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/d5859ea3930b7466265ed.png" alt="dom解析原理.png" tabindex="0"><figcaption>dom解析原理.png</figcaption></figure>',7);function b(A,T){const t=r("ExternalLinkIcon");return o(),m("div",null,[s,l("ul",null,[h,c,l("li",null,[g,l("ul",null,[l("li",null,[e('<xxx xmlns="...."xmlns:xsi="'),l("a",d,[e("http://www.w3.org/2001/XMLSchema-instance"),a(t)]),e('" xsi:schemaLocation="名称 路径 名称2 路径2 ....."> .....')]),l("li",null,[e('<web-app xmlns="'),l("a",u,[e("http://www.example.org/web-app_2_5"),a(t)]),e('" 自定义文档命名空间（包名）'),x,e(' xmlns:xsi="'),l("a",f,[e("http://www.w3.org/2001/XMLSchema-instance"),a(t)]),e('"（官方文档命名空间）'),E,e(' xsi:schemaLocation="'),l("a",_,[e("http://www.example.org/web-app_2_5"),a(t)]),e(' web-app_2_5.xsd" 使用了官方文档的自定义文档位置属性（包里面的具体类）version="2.5">')])])])]),D])}const v=n(p,[["render",b],["__file","xml.html.vue"]]),M=JSON.parse('{"path":"/backend/protocol/xml.html","title":"xml","lang":"zh-CN","frontmatter":{"title":"xml","date":"2023-01-01T00:00:00.000Z","tags":"xml","categories":"理论","description":"xml 1. xml介绍 2. xml语法: 3. xml约束 3.1. DTD约束 3.2. Schema约束 3.3. xml解析 3.4. 解析开发包 3.5. DOM解析原理及结构模型 1. xml介绍 xml:Extensible Markup Language 可扩展的标记语言，标签可自定义，其他与Html相似 用作:配置文件/存放数据 2...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/protocol/xml.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"xml"}],["meta",{"property":"og:description","content":"xml 1. xml介绍 2. xml语法: 3. xml约束 3.1. DTD约束 3.2. Schema约束 3.3. xml解析 3.4. 解析开发包 3.5. DOM解析原理及结构模型 1. xml介绍 xml:Extensible Markup Language 可扩展的标记语言，标签可自定义，其他与Html相似 用作:配置文件/存放数据 2..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/d5cf38d9a11590a845bb2.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"xml\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/d5cf38d9a11590a845bb2.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/71ba34c1b3ed854bd6ae4.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/a77f965211515afaa58ae.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/d5859ea3930b7466265ed.png\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"3.1. DTD约束","slug":"_3-1-dtd约束","link":"#_3-1-dtd约束","children":[]},{"level":2,"title":"3.2. Schema约束","slug":"_3-2-schema约束","link":"#_3-2-schema约束","children":[]}],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":3.88,"words":1163},"filePathRelative":"backend/protocol/xml.md","localizedDate":"2023年1月1日","excerpt":"<p>xml</p>\\n<!--more-->\\n<!-- TOC -->\\n<ul>\\n<li><a href=\\"#1-xml%E4%BB%8B%E7%BB%8D\\">1. xml介绍</a></li>\\n<li><a href=\\"#2-xml%E8%AF%AD%E6%B3%95\\">2. xml语法:</a></li>\\n<li><a href=\\"#3-xml%E7%BA%A6%E6%9D%9F\\">3. xml约束</a>\\n<ul>\\n<li><a href=\\"#31-dtd%E7%BA%A6%E6%9D%9F\\">3.1. DTD约束</a></li>\\n<li><a href=\\"#32-schema%E7%BA%A6%E6%9D%9F\\">3.2. Schema约束</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#33-xml%E8%A7%A3%E6%9E%90\\">3.3. xml解析</a></li>\\n<li><a href=\\"#34-%E8%A7%A3%E6%9E%90%E5%BC%80%E5%8F%91%E5%8C%85\\">3.4. 解析开发包</a></li>\\n<li><a href=\\"#35-dom%E8%A7%A3%E6%9E%90%E5%8E%9F%E7%90%86%E5%8F%8A%E7%BB%93%E6%9E%84%E6%A8%A1%E5%9E%8B\\">3.5. DOM解析原理及结构模型</a></li>\\n</ul>","autoDesc":true}');export{v as comp,M as data};
