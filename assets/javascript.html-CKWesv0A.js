import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as d,c as i,b as e,d as t,e as s,a as n}from"./app-CAt2Ig6m.js";const c={},g=n('<p>javaScript</p><ul><li><a href="#1-%E6%A6%82%E5%BF%B5%E4%BD%9C%E7%94%A8">1. 概念&amp;作用</a></li><li><a href="#2-javascript%E5%BC%95%E5%85%A5%E6%96%B9%E5%BC%8F">2. javascript引入方式</a></li><li><a href="#3-%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B">3. 数据类型</a></li><li><a href="#4-typeofinstanceof">4. typeof、instanceof、===</a></li><li><a href="#5-javascript%E8%AF%AD%E6%B3%95">5. javaScript语法</a></li><li><a href="#6-bom%E6%B5%8F%E8%A7%88%E5%99%A8%E5%AF%B9%E8%B1%A1%E6%A8%A1%E5%9E%8B%E6%95%B4%E4%B8%AAhtml%E9%A1%B5%E9%9D%A2%E5%86%85%E5%AE%B9">6. BOM浏览器对象模型（整个HTML页面内容）</a></li><li><a href="#7-javascript%E6%AD%A3%E5%88%99%E5%8C%B9%E9%85%8D">7. javascript正则匹配</a></li><li><a href="#8-%E8%BD%AC%E6%8D%A2%E6%88%90jq%E5%AF%B9%E8%B1%A1">8. 转换成jq对象</a></li><li><a href="#9-%E5%85%A8%E5%B1%80%E5%B1%9E%E6%80%A7%E5%92%8C%E5%87%BD%E6%95%B0%E5%8F%AF%E7%94%A8%E4%BA%8E%E6%89%80%E6%9C%89%E5%86%85%E5%BB%BA%E7%9A%84javascript%E5%AF%B9%E8%B1%A1">9. 全局属性和函数可用于所有内建的JavaScript对象</a></li><li><a href="#10-%E4%B8%BA%E4%BB%80%E4%B9%88js%E6%98%AF%E5%8D%95%E7%BA%BF%E7%A8%8B%E7%9A%84">10. 为什么JS是单线程的？</a></li></ul><h1 id="_1-概念-作用" tabindex="-1"><a class="header-anchor" href="#_1-概念-作用"><span>1. 概念&amp;作用</span></a></h1><ul><li>编程语言 用于开发交互式web页面（向HTML页面添加交互行为）</li><li>脚本语言（轻量级编程语言）</li><li>不需编译（解释性语言）直接嵌入HTML页面中，由浏览器执行</li><li>HTML页面中嵌入动态文本、对浏览器事件响应，读写HTML元素，</li><li>验证提交数据，检测访客数及访客的浏览信息等。使页面具有动态效果</li></ul><h1 id="_2-javascript引入方式" tabindex="-1"><a class="header-anchor" href="#_2-javascript引入方式"><span>2. javascript引入方式</span></a></h1><table><thead><tr><th style="text-align:center;">javascript引入方式</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">内嵌式</td><td style="text-align:center;">&lt;script type=&quot;text/javascript(默认，可省略)&quot;&gt;javascript代码&lt;/script&gt;</td></tr><tr><td style="text-align:center;">外联式</td><td style="text-align:center;">&lt;script type=&quot;text/javascript&quot; src=“1.js” charset=“utf-8”&gt;&lt;/script&gt;</td></tr></tbody></table><h1 id="_3-数据类型" tabindex="-1"><a class="header-anchor" href="#_3-数据类型"><span>3. 数据类型</span></a></h1>',7),y=e("br",null,null,-1),x=e("br",null,null,-1),o={href:"http://caibaojian.com",target:"_blank",rel:"noopener noreferrer"},p=e("br",null,null,-1),h=e("br",null,null,-1),E=e("br",null,null,-1),u=e("br",null,null,-1),m=e("br",null,null,-1),B=e("br",null,null,-1),f=e("br",null,null,-1),v=e("br",null,null,-1),A=e("br",null,null,-1),j=n('<h1 id="_4-typeof、instanceof、" tabindex="-1"><a class="header-anchor" href="#_4-typeof、instanceof、"><span>4. typeof、instanceof、===</span></a></h1><ul><li>typeof返回类型字符串 <ul><li>可以判断undefined、Number、string、boolean、function</li><li>不能判断：null与object</li></ul></li><li>instanceof 判断对象具体类型</li><li>=== 可以判断null undefined</li></ul><h1 id="_5-javascript语法" tabindex="-1"><a class="header-anchor" href="#_5-javascript语法"><span>5. javaScript语法</span></a></h1><table><thead><tr><th style="text-align:center;">javaScript组成</th><th style="text-align:center;">基本语法</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">ECMAScript（核心）</td><td style="text-align:center;">变量定义</td><td style="text-align:center;">var 变量名[=值];(可以不声明，直接使用，默认值undefined、变量存在但没赋值)</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">（变量弱类型：同一个变量可以存放不同类型的数据）</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">如果在函数的内容用var定义，那么它是一个局部变量，</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">如果没有使用var它是一个全局的</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">严格区分大小写，注释与java相同</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">运算符</td><td style="text-align:center;">js比较===全等，值和类型，相比java没有equals，null写成&quot;&quot;</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">== 它在做比较的时候会进行自动转换。</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">=== 它在做比较的时候不会进行自动转换。</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">基本数据类型</td><td style="text-align:center;">number（任何数字）</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">string（“”‘’）</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">boolean</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">null（对象的默认值）</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">undefined(变量无初始化时的默认值))</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">引用数据类型</td><td style="text-align:center;">Number</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">String match()找到一个或多个正则表达式的匹配.substr(a,b)从起始索引号提取字符串中指定数目的字符.substring(a,b)提取字符串中两个指定的索引号之间的字符。</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">Boolean new Boolean(value)value不写默认false</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">Array</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">Boolean</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">DateDate.getTime()返回1970年1月1日至今的毫秒数、解决浏览器缓存问题</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">Math</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">ReqExp对象正则表达式对象 ReqExp.test(要测的对象)</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">普通函数</td><td style="text-align:center;">[window/element.onload/var 变量名=]function 函数名(参数,参数){函数体,return 返回值}</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">匿名函数</td><td style="text-align:center;">[window/element.onload/var 变量名=]function(参数,参数){函数体，return 返回值}</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">调用函数</td><td style="text-align:center;">函数名(参数，参数)</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">事件(调用函数)</td><td style="text-align:center;">事件=“[return] 函数名([参数，参数])”</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">onload 只能写一次并且放到body标签中</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">onsubmit 写在form标签中，必须有返回值。return false不提交</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">onclick、ondbclick</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">onblur 表单校验，text离焦</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">onfocus 表单校验，text获得焦点</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">onchange 二级联动、onkeydown搜索引擎</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">onkeypress 搜索引擎</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">onkeyup、onmousdown</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">onmouseup、onmouseover鼠标悬空高亮问题</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">onmouseout鼠标离开、onmousemove</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">让按钮点击失效：onclick=”javascript:volid(0)”</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">event对象</td><td style="text-align:center;">clientX,鼠标指针水平坐标</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">clientY鼠标指针垂直坐标</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">keyCode返回键盘输入的ASCII码</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">preventDefault()阻止浏览器默认行为</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">stopPropagation()阻止事件传播</td></tr><tr><td style="text-align:center;">BOM浏览器对象</td><td style="text-align:center;">window对象</td><td style="text-align:center;">表示浏览器中打开的窗口,都是全局函数，window可省略</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">alert(“提示框提示信息”);confirm(&quot;确认提示信息&quot;);prompt(&quot;提示信息框&quot;);</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">var xx=setInterval(function(),millisec)</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">setInterval（“function()”,毫秒值)----clearInterval(xx)</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">setInterval（string,毫秒值）----clearInterval(xx)</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">setTimeout（code,millsec）---clearTimeout(xx)</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">location对象</td><td style="text-align:center;">包含相关当前的url信息 href</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">history（了解）</td><td style="text-align:center;">包含用户在浏览器窗口中访问过的url</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">history.go(-1);加载前一个连接等于history.back()；</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">history.go(1)；加载后一个链接，等效history.forward();</td></tr><tr><td style="text-align:center;">DOM文档对象模型</td><td style="text-align:center;">Document对象</td><td style="text-align:center;">HTML文档，获得标签元素element对象</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">getElementById(“id”)单个，唯一</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">getElementsByTagName(&quot;name&quot;)需要遍历</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">getElementsByName(&quot;name&quot;)复选框全选与全不选，用数组表示，多个。批量，需要遍历</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">getElementById(&quot;id&quot;).value获取元素里面的值:字符串加“”，变量不加</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">createTextNode()创建文本节点</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">createElement()创建元素节点</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">write(&quot;&quot;);想页面写入内容</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">element对象</td><td style="text-align:center;">style.属性[=属性值]；获得[设置]样式</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">如果属性有多个单词使用“-”连接，则去掉“-”将后一个单词首字母大写</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">appendChild()向元素添加新的子节点，作为最后一个子节点</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">removeChild()从元素中移除子节点</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">replaceChild()替换元素中的子节点</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">firstChild返回元素的首个子节点。</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">lastChild返回元素的最后一个子元素。</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">innerHTML设置或返回元素的内容 =&quot;&quot;向页面某个元素写一段内容，将原有的东西覆盖</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">insertBefore()在指定的已有的子节点之前插入新节点。</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">setAttribute(“属性名”)把指定属性设置或更改为指定值。非css</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">getAttribute(“属性名”)返回元素节点的指定属性值。非css</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">attribute对象</td><td style="text-align:center;">标签属性</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">document.getElementById(“id”).value获得元素里面的值(显示的内容)</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">this.setAttribute(name,value)给当前元素设置属性</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">this</td><td style="text-align:center;">表示函数当前操作的元素</td></tr></tbody></table><ul><li>test检索字符串中指定的值。返回true或false。</li><li>对变量或者值使用typeof运算符，则object是由引用或null返回的</li><li>其他返回原始数据类型</li></ul><h1 id="_6-bom浏览器对象模型-整个html页面内容" tabindex="-1"><a class="header-anchor" href="#_6-bom浏览器对象模型-整个html页面内容"><span>6. BOM浏览器对象模型（整个HTML页面内容）</span></a></h1><p>操作文档中的元素和内容，DOM树通过js相应的api实现<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/7046ecfecabe6d05a7142.png" alt="dom.png"></p><h1 id="_7-javascript正则匹配" tabindex="-1"><a class="header-anchor" href="#_7-javascript正则匹配"><span>7. javascript正则匹配</span></a></h1><table><thead><tr><th style="text-align:center;">javascript正则匹配</th><th style="text-align:center;"></th></tr></thead><tbody><tr><td style="text-align:center;">String对象</td><td style="text-align:center;">match方法，str.match（）；</td></tr><tr><td style="text-align:center;">ReqExp对象</td><td style="text-align:center;">test方法 ReqExp.test(要测的对象)</td></tr></tbody></table><table><thead><tr><th style="text-align:center;">全局函数</th><th style="text-align:center;">函数名</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">转换</td><td style="text-align:center;">parseFloat()</td><td style="text-align:center;">解析一个字符串并返回一个浮点数</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">parseInt()</td><td style="text-align:center;">解析一个字符串并返回一个整数</td></tr><tr><td style="text-align:center;">执行</td><td style="text-align:center;">eval()</td><td style="text-align:center;">计算JavaScript字符串,并把它作为脚本运行</td></tr><tr><td style="text-align:center;">编码</td><td style="text-align:center;">encodeURI()</td><td style="text-align:center;">把字符串编码为URI</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">decodeURI()</td><td style="text-align:center;">解码某个编码的URI</td></tr></tbody></table><h1 id="_8-转换成jq对象" tabindex="-1"><a class="header-anchor" href="#_8-转换成jq对象"><span>8. 转换成jq对象</span></a></h1><ul><li>jq选择器.html();</li></ul><h1 id="_9-全局属性和函数可用于所有内建的javascript对象" tabindex="-1"><a class="header-anchor" href="#_9-全局属性和函数可用于所有内建的javascript对象"><span>9. 全局属性和函数可用于所有内建的JavaScript对象</span></a></h1><ul><li>括号里面传入js对象，如string</li><li>decodeURI()解码某个编码的 URI。</li><li>decodeURIComponent()解码一个编码的 URI 组件。</li><li>encodeURI()把字符串编码为 URI。</li><li>encodeURIComponent()把字符串编码为 URI 组件。</li><li>eval()计算 JavaScript 字符串，并把它作为脚本代码来执行。</li><li>parseFloat()解析一个字符串并返回一个浮点数。</li><li>parseInt()解析一个字符串并返回一个整数。</li></ul><h1 id="_10-为什么js是单线程的" tabindex="-1"><a class="header-anchor" href="#_10-为什么js是单线程的"><span>10. 为什么JS是单线程的？</span></a></h1><ul><li>为了避免复杂性，和提升效率。 为了利用多核CPU的计算能力，HTML5提出Web Worker标准，允许JavaScript脚本创建多个线程，但是子线程完全受主线程控制，且不得操作DOM。所以，这个新标准并没有改变JavaScript单线程的本质</li></ul>',16);function b(_,q){const l=a("ExternalLinkIcon");return d(),i("div",null,[g,e("p",null,[t("|基本（值）数据类型|说明|举例|"),y,t(" |:-😐:-😐"),x,t(` |String|使用双引号 " 或单引号 ' 括起来的一个或多个字符|"`),e("a",o,[t("http://caibaojian.com"),s(l)]),t(`"、'字符串'|`),p,t(" |Number|包括整数和浮点数（包含小数点的数或科学记数法的数）|30、-10、11.2、2.35e10|"),h,t(" |Boolean|表示 true 或 false 这两种状态|5 == 2 其运算结果为 false|"),E,t(" |Null|变量或内容值为空（null），可以通过给一个变量赋 null 值来清除变量的内容|str = null|"),u,t(" |Undefined|变量被创建后，未给该变量赋值，|var str|"),m,t(" |对象（引用）类型|说明|举例|"),B,t(' |Array|var cars=new Array();|var cars=["Audi","BMW","Volvo"];|'),f,t(' |Object|JavaScript 操作的对象|var person={firstname:"Bill", lastname:"Gates", id:5566};|'),v,t(" |Function|JavaScript 操作的对象|可以执行的一种特别对象|"),A]),j])}const D=r(c,[["render",b],["__file","javascript.html.vue"]]),T=JSON.parse('{"path":"/frontend/javascript.html","title":"javascript","lang":"zh-CN","frontmatter":{"title":"javascript","date":"2023-01-01T00:00:00.000Z","tags":"javascript","categories":"前端","description":"javaScript 1. 概念&作用 2. javascript引入方式 3. 数据类型 4. typeof、instanceof、=== 5. javaScript语法 6. BOM浏览器对象模型（整个HTML页面内容） 7. javascript正则匹配 8. 转换成jq对象 9. 全局属性和函数可用于所有内建的JavaScript对象 10. ...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/frontend/javascript.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"javascript"}],["meta",{"property":"og:description","content":"javaScript 1. 概念&作用 2. javascript引入方式 3. 数据类型 4. typeof、instanceof、=== 5. javaScript语法 6. BOM浏览器对象模型（整个HTML页面内容） 7. javascript正则匹配 8. 转换成jq对象 9. 全局属性和函数可用于所有内建的JavaScript对象 10. ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/7046ecfecabe6d05a7142.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"javascript\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/7046ecfecabe6d05a7142.png\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":6.68,"words":2003},"filePathRelative":"frontend/javascript.md","localizedDate":"2023年1月1日","excerpt":"<p>javaScript</p>\\n<!--more-->\\n<!-- TOC -->\\n<ul>\\n<li><a href=\\"#1-%E6%A6%82%E5%BF%B5%E4%BD%9C%E7%94%A8\\">1. 概念&amp;作用</a></li>\\n<li><a href=\\"#2-javascript%E5%BC%95%E5%85%A5%E6%96%B9%E5%BC%8F\\">2. javascript引入方式</a></li>\\n<li><a href=\\"#3-%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B\\">3. 数据类型</a></li>\\n<li><a href=\\"#4-typeofinstanceof\\">4. typeof、instanceof、===</a></li>\\n<li><a href=\\"#5-javascript%E8%AF%AD%E6%B3%95\\">5. javaScript语法</a></li>\\n<li><a href=\\"#6-bom%E6%B5%8F%E8%A7%88%E5%99%A8%E5%AF%B9%E8%B1%A1%E6%A8%A1%E5%9E%8B%E6%95%B4%E4%B8%AAhtml%E9%A1%B5%E9%9D%A2%E5%86%85%E5%AE%B9\\">6. BOM浏览器对象模型（整个HTML页面内容）</a></li>\\n<li><a href=\\"#7-javascript%E6%AD%A3%E5%88%99%E5%8C%B9%E9%85%8D\\">7. javascript正则匹配</a></li>\\n<li><a href=\\"#8-%E8%BD%AC%E6%8D%A2%E6%88%90jq%E5%AF%B9%E8%B1%A1\\">8. 转换成jq对象</a></li>\\n<li><a href=\\"#9-%E5%85%A8%E5%B1%80%E5%B1%9E%E6%80%A7%E5%92%8C%E5%87%BD%E6%95%B0%E5%8F%AF%E7%94%A8%E4%BA%8E%E6%89%80%E6%9C%89%E5%86%85%E5%BB%BA%E7%9A%84javascript%E5%AF%B9%E8%B1%A1\\">9. 全局属性和函数可用于所有内建的JavaScript对象</a></li>\\n<li><a href=\\"#10-%E4%B8%BA%E4%BB%80%E4%B9%88js%E6%98%AF%E5%8D%95%E7%BA%BF%E7%A8%8B%E7%9A%84\\">10. 为什么JS是单线程的？</a></li>\\n</ul>","autoDesc":true}');export{D as comp,T as data};