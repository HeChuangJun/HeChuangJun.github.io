import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as d,o as a,c as r,a as n,b as e,d as t,e as l}from"./app-7KT7HDzT.js";const v={},c=l('<p>javaScript</p><ul><li><a href="#1-%E6%A6%82%E5%BF%B5%E4%BD%9C%E7%94%A8">1. 概念&amp;作用</a></li><li><a href="#2-javascript%E5%BC%95%E5%85%A5%E6%96%B9%E5%BC%8F">2. javascript引入方式</a></li><li><a href="#3-%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B">3. 数据类型</a></li><li><a href="#4-typeofinstanceof">4. typeof、instanceof、===</a></li><li><a href="#5-javascript%E8%AF%AD%E6%B3%95">5. javaScript语法</a></li><li><a href="#6-bom%E6%B5%8F%E8%A7%88%E5%99%A8%E5%AF%B9%E8%B1%A1%E6%A8%A1%E5%9E%8B%E6%95%B4%E4%B8%AAhtml%E9%A1%B5%E9%9D%A2%E5%86%85%E5%AE%B9">6. BOM浏览器对象模型（整个HTML页面内容）</a></li><li><a href="#7-javascript%E6%AD%A3%E5%88%99%E5%8C%B9%E9%85%8D">7. javascript正则匹配</a></li><li><a href="#8-%E8%BD%AC%E6%8D%A2%E6%88%90jq%E5%AF%B9%E8%B1%A1">8. 转换成jq对象</a></li><li><a href="#9-%E5%85%A8%E5%B1%80%E5%B1%9E%E6%80%A7%E5%92%8C%E5%87%BD%E6%95%B0%E5%8F%AF%E7%94%A8%E4%BA%8E%E6%89%80%E6%9C%89%E5%86%85%E5%BB%BA%E7%9A%84javascript%E5%AF%B9%E8%B1%A1">9. 全局属性和函数可用于所有内建的JavaScript对象</a></li><li><a href="#10-%E4%B8%BA%E4%BB%80%E4%B9%88js%E6%98%AF%E5%8D%95%E7%BA%BF%E7%A8%8B%E7%9A%84">10. 为什么JS是单线程的？</a></li></ul><h1 id="_1-概念-作用" tabindex="-1"><a class="header-anchor" href="#_1-概念-作用"><span>1. 概念&amp;作用</span></a></h1><ul><li>编程语言 用于开发交互式web页面（向HTML页面添加交互行为）</li><li>脚本语言（轻量级编程语言）</li><li>不需编译（解释性语言）直接嵌入HTML页面中，由浏览器执行</li><li>HTML页面中嵌入动态文本、对浏览器事件响应，读写HTML元素，</li><li>验证提交数据，检测访客数及访客的浏览信息等。使页面具有动态效果</li></ul><h1 id="_2-javascript引入方式" tabindex="-1"><a class="header-anchor" href="#_2-javascript引入方式"><span>2. javascript引入方式</span></a></h1><table><thead><tr><th style="text-align:center;">javascript引入方式</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">内嵌式</td><td style="text-align:center;">&lt;script type=&quot;text/javascript(默认，可省略)&quot;&gt;javascript代码&lt;/script&gt;</td></tr><tr><td style="text-align:center;">外联式</td><td style="text-align:center;">&lt;script type=&quot;text/javascript&quot; src=“1.js” charset=“utf-8”&gt;&lt;/script&gt;</td></tr></tbody></table><h1 id="_3-数据类型" tabindex="-1"><a class="header-anchor" href="#_3-数据类型"><span>3. 数据类型</span></a></h1>',7),u=n("br",null,null,-1),o=n("br",null,null,-1),m={href:"http://caibaojian.com",target:"_blank",rel:"noopener noreferrer"},b=n("br",null,null,-1),g=n("br",null,null,-1),p=n("br",null,null,-1),y=n("br",null,null,-1),x=n("br",null,null,-1),h=n("br",null,null,-1),f=n("br",null,null,-1),q=n("br",null,null,-1),E=n("br",null,null,-1),j=l(`<h1 id="_4-typeof、instanceof、" tabindex="-1"><a class="header-anchor" href="#_4-typeof、instanceof、"><span>4. typeof、instanceof、===</span></a></h1><ul><li>typeof返回类型字符串 <ul><li>可以判断undefined、Number、string、boolean、function</li><li>不能判断：null与object</li></ul></li><li>instanceof 判断对象具体类型</li><li>=== 可以判断null undefined<br> 严格相等运算符，用作逻辑判等</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1 == 1 // 返回 true
1 === &#39;1&#39;// 返回 true，会先将右侧的字符串转为数字，再做比较
1 === 1 // 返回 false，类型不等，直接返回 fa1se
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>typeof 查看某个值的类型</p><p>||<br> 需求，如果参数n没有传递，给它一个【男】</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>推荐做法
function test(n=&#39;男&#39;){conso1e.1og(n);}
你可能的做法
function test(n){
	if(n === undefined){
		n=&#39;男&#39;;
	}
	conso1e.1og(n);
}
还可能是这样
function test(n){
	n=(n=== undefined)?&#39;男’:n;
	console.1og(n);
}
一些老旧代码中可能的做法
function test(n){
	n = n ||&#39;男&#39;
	console.1og(n);
}
它的语法是
值1 || 值2
如果值1 是 Truthy，返回值1，如果值1 是 Falsy 返回值 2

3)??与?.
需求，如果参数 n没有传递或是 null，给它一个【男】
如果用传统办法
function test(n){
	if(n == undefined || n=== nu11){
		n=&#39;男&#39;
    }
	console.1og(n);
}
用??
function test(n){
	n = n ?? &#39;男&#39;;
	console.1og(n);
}

需求，函数参数是一个对象，可能包含有子属性
例如，参数可能是
let stul={
	name :&quot;张三”，
	address:{
		city:&#39;北京
	};
}
let stu2 ={
	name:&quot;李四”
}
let stu3={
name:&quot;李四&quot;
address:nu11
}
现在要访问子属性(有问题)
function test(stu){
console.1og(stu.address.city)
}
现在希望当某个属性是 nulish 时，短路并返回 undefined
function test(stu){
	console.1og(stu.address?.city)
}
用传统办法
function test(stu){
	if(stu.address ===undefined ll stu.address === nu11){
		console.1og(undefined);
		return;
    }
	console.1og(stu.address.city)
}

...
展开运算符
作用1:打散数组传递给多个参数
let arr = [1, 2, 3];
function test(a,b,c){
	console.1og(a,b,c);
}
test(arr[0],arr[1],arr[2]);// 输出 1,2,3
展开运算符写法
test(...arr);// 输出 1,2,3
打散可以理解为【去掉了】数组外侧的中括号，只剩下数组元素
作用2:复制数组或对象
数组
let arr1 = [1,2,3];
let arr2= [...arrl]; // 复制数组

注意:展开运算符复制属于浅拷贝，例如
let ol = {name:&#39;张三&#39;,address: {city:【北京&#39;}}
let o2 = {...01};

对象
let objl = {name:&#39;张三&#39;,age: 18};
Tet obj2 = {...obj1}; //复制对象
作用3:合并数组或对象
let a1 = [1,2];
let a2 = [3,4];
let b1= [...al,...a2];// 结果[1,2,3,4]
let b2 = [...a2,5,...al]// 结果[3,4,5,1,2]

合并对象
let ol= {name:&#39;张三&#39;};
Tet o2 = {age:18};
let o3 ={name:&#39;李四&#39;};
let nl={...ol,...02};
let n2 = {...03,...o2,..o1}:
同名后面覆盖前面

5)[] {}
解构赋值
[]
用在声明变量时
let arr = [1,2,3];
let [a,b，c]= arr;//结果 a=1，b=2，c=3

用在声明参数时
let arr =[1,2,3];
function test([a,b,c]){
	consofe.1og(a,b,c)
}
test(arr) // 结果 a=1，b=2，c=3

{}
用在声明变量时
let obj = {name:&quot;张三&quot;,age:18};
let {name,age} = obj;
用在声明参数时
let obj = {name:&quot;张三&quot;, age:18};
function test({name, age]) {console.1og(name，age);}
test(obj)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="控制语句" tabindex="-1"><a class="header-anchor" href="#控制语句"><span>控制语句</span></a></h2><p>if ...else<br> switch<br> while<br> do...while<br> for<br> for ... in ☆</p><p>for ... of ☆</p><p>try ... catch☆</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1) for in
主要用来遍历对象
let father = {name:&#39;张三&#39;, age:18, study:function(){}};
for(const n in father){
console.1og(n);
}
其中 const n代表遍历出来的属性名
注意1:方法名也能被遍历出来(它其实也算一种特殊属性)
注意2:遍历子对象时，父对象的属性会跟着遍历出来
Tet son =object.create(father);
son.sex =“男&quot;

for(const n in son){
	console.1og(n);
}

注意3:在 for in 内获取属性值，要使用[]语法，而不能用.语法
for(const n in son){
	console.log(n, son[n]);
}

2) for of
主要用来遍历数组，也可以是其它可迭代对象，如 Map，set 等
let al =[1,2,3];

for(const i of al){
console.1og(i);
}
let a2 =[
{name:&#39;张三&#39;, age:18},
{name:&#39;李四&#39;，age:20}
{name:&#39;王五&#39;，age:22}
];

for(const obj of a2){
console.1og(obj.name， obj.age);
}
for(const {name,age} of a2){
console.1og(name, age);
}

3) try catch
let stu1 = {name:&#39;张三&#39;,age:18, address: {city:&#39;北京&#39;}};
1et stu2 ={name:&#39;张三&#39;,age:18};

function test(stu){
	try {
		console.1og(stu.address.city)
    } catch(e){
		console.1og(&#39;出现了异常&#39;，e.message)
    } finally {
    	console.1og(&#39;fina11y&#39;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_5-javascript语法" tabindex="-1"><a class="header-anchor" href="#_5-javascript语法"><span>5. javaScript语法</span></a></h1><table><thead><tr><th style="text-align:center;">javaScript组成</th><th style="text-align:center;">基本语法</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">ECMAScript（核心）</td><td style="text-align:center;">变量定义</td><td style="text-align:center;">var 变量名[=值];(可以不声明，直接使用，默认值undefined、变量存在但没赋值)</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">（变量弱类型：同一个变量可以存放不同类型的数据）</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">如果在函数的内容用var定义，那么它是一个局部变量，</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">如果没有使用var它是一个全局的</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">严格区分大小写，注释与java相同</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">运算符</td><td style="text-align:center;">js比较===全等，值和类型，相比java没有equals，null写成&quot;&quot;</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">== 它在做比较的时候会进行自动转换。</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">=== 它在做比较的时候不会进行自动转换。</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">基本数据类型</td><td style="text-align:center;">number（任何数字）、bigint<br>number 类型标识的是双精度浮动小数，例如<br>10 /3;// 结果 3.3333333333333335<br>既然是浮点小数，那么可以除零<br>10 /0;// 结果 Infinity 正无穷大-10/0;//结果 -Infinity 负无穷大<br>浮点小数都有运算精度问题，例如<br>2.0-1.1;//结果 0.8999999999999999<br>字符串转数字<br>parseInt(&quot;10&quot;);// 结果是数字 10<br>parseInt(&quot;10.5&quot;)//结果是数字 10，去除了小数部分;<br>parseInt(&quot;10&quot;)/3;//结果仍视为 number 浮点数，因此结果为3.3333333333333335<br>parseInt(&quot;abc&quot;);<br>//转换失败，结果是特殊值 NaN(Not a Number)</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">string（“”‘’）<br>let s1 =&#39;超链接&#39;<br>let s2 =&#39;超链接&#39;;<br>Tet name=;//zhang li...<br>Tet age =;// 18 20<br>let uri2=<code>/test?name=$iname}&amp;age=\${age}</code> ;</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">boolean Truthy、Falsy<br>在js 中，并不是 boolean 才能用于条件判断，你可以在if语句中使用【数字】【字符串】.. 作为判断条件<br>这时就有一个规则，当需要条件判断时，这个值被当作 true 还是false，当作 true的值归类为 truthy，当作 false 的值归类为 falsy<br>false<br>Nullish (null, undefined)<br>0, 0n, NaN<br>&quot;&quot;,&quot;,\`\`</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">null（对象的默认值）和undefined(变量无初始化时的默认值))<br>执行表达式或函数，没有返回结果，出现 undefined<br>访问数组不存在的元素，访问对象不存在的属性，出现 undefined<br>定义变量，没有初始化，出现 undefined<br>二者共同点<br>都没有属性、方法<br>二者区别<br>undefined 由js产生，null 由程序员提供<br>Nullish</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">引用数据类型</td><td style="text-align:center;">Number</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">String match()找到一个或多个正则表达式的匹配.substr(a,b)从起始索引号提取字符串中指定数目的字符.substring(a,b)提取字符串中两个指定的索引号之间的字符。</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">Boolean new Boolean(value)value不写默认false</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">Array</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">Boolean</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">DateDate.getTime()返回1970年1月1日至今的毫秒数、解决浏览器缓存问题</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">Math</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">ReqExp对象正则表达式对象 ReqExp.test(要测的对象)</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">普通函数</td><td style="text-align:center;">[window/element.onload/var 变量名=]function 函数名(参数[=默认值],参数){函数体,return 返回值}</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">匿名函数</td><td style="text-align:center;"><code>[window/element.onload/var 变量名=]</code>(function(参数,参数){函数体，return 返回值})<br>(function(a,b){return a + b;})<br>(function(a,b){return a+ b;})(1,2)<br></td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">箭头函数</td><td style="text-align:center;">(参数)=&gt;{函数体 return结果}<br>如果只有一个参数，()可以省略<br>如果函数体内只有一行代码，{}可以省略document.getElementById(&quot;p1&quot;).onclick=()=&gt;<br>console.1og(“鼠标单击了...箭头函数&quot;);<br></td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">调用函数</td><td style="text-align:center;">函数名(参数，参数)</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">事件(调用函数)</td><td style="text-align:center;">事件=“[return] 函数名([参数，参数])”</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">onload 只能写一次并且放到body标签中</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">onsubmit 写在form标签中，必须有返回值。return false不提交</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">onclick、ondbclick</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">onblur 表单校验，text离焦</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">onfocus 表单校验，text获得焦点</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">onchange 二级联动、onkeydown搜索引擎</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">onkeypress 搜索引擎</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">onkeyup、onmousdown</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">onmouseup、onmouseover鼠标悬空高亮问题</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">onmouseout鼠标离开、onmousemove</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">让按钮点击失效：onclick=”javascript:volid(0)”</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">event对象</td><td style="text-align:center;">clientX,鼠标指针水平坐标</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">clientY鼠标指针垂直坐标</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">keyCode返回键盘输入的ASCII码</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">preventDefault()阻止浏览器默认行为</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">stopPropagation()阻止事件传播</td></tr><tr><td style="text-align:center;">BOM浏览器对象</td><td style="text-align:center;">window对象</td><td style="text-align:center;">表示浏览器中打开的窗口,都是全局函数，window可省略</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">alert(“提示框提示信息”);confirm(&quot;确认提示信息&quot;);prompt(&quot;提示信息框&quot;);</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">var xx=setInterval(function(),millisec)</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">setInterval（“function()”,毫秒值)----clearInterval(xx)</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">setInterval（string,毫秒值）----clearInterval(xx)</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">setTimeout（code,millsec）---clearTimeout(xx)</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">location对象</td><td style="text-align:center;">包含相关当前的url信息 href</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">history（了解）</td><td style="text-align:center;">包含用户在浏览器窗口中访问过的url</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">history.go(-1);加载前一个连接等于history.back()；</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">history.go(1)；加载后一个链接，等效history.forward();</td></tr><tr><td style="text-align:center;">DOM文档对象模型</td><td style="text-align:center;">Document对象</td><td style="text-align:center;">HTML文档，获得标签元素element对象</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">getElementById(“id”)单个，唯一</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">getElementsByTagName(&quot;name&quot;)需要遍历</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">getElementsByName(&quot;name&quot;)复选框全选与全不选，用数组表示，多个。批量，需要遍历</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">getElementById(&quot;id&quot;).value获取元素里面的值:字符串加“”，变量不加</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">createTextNode()创建文本节点</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">createElement()创建元素节点</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">write(&quot;&quot;);想页面写入内容</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">element对象</td><td style="text-align:center;">style.属性[=属性值]；获得[设置]样式</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">如果属性有多个单词使用“-”连接，则去掉“-”将后一个单词首字母大写</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">appendChild()向元素添加新的子节点，作为最后一个子节点</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">removeChild()从元素中移除子节点</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">replaceChild()替换元素中的子节点</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">firstChild返回元素的首个子节点。</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">lastChild返回元素的最后一个子元素。</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">innerHTML设置或返回元素的内容 =&quot;&quot;向页面某个元素写一段内容，将原有的东西覆盖</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">insertBefore()在指定的已有的子节点之前插入新节点。</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">setAttribute(“属性名”)把指定属性设置或更改为指定值。非css</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">getAttribute(“属性名”)返回元素节点的指定属性值。非css</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">attribute对象</td><td style="text-align:center;">标签属性</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">document.getElementById(“id”).value获得元素里面的值(显示的内容)</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">this.setAttribute(name,value)给当前元素设置属性</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">this</td><td style="text-align:center;">表示函数当前操作的元素</td></tr></tbody></table><ul><li>test检索字符串中指定的值。返回true或false。</li><li>对变量或者值使用typeof运算符，则object是由引用或null返回的</li><li>其他返回原始数据类型</li></ul><h3 id="函数是对象" tabindex="-1"><a class="header-anchor" href="#函数是对象"><span>函数是对象</span></a></h3><p>以下形式在js 中非常常见!<br> 1.可以参与赋值，例，具名函数也能参与赋值<br> function abc(){console.1og(&quot;bb&quot;);}<br> document.getElementById(&quot;p1&quot;).onclick = abc;<br> 2.有属性、有方法</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>function abc(){
	console.log(&quot;bb&quot;);
}
console.log(abc)
f abc(){
onsole.log(&quot;bb”);
}
console.dir(abc)
f abc()i
arguments:nu11
caller:nul1
length: 0
name: &quot;abc&quot;
prototype:{constructor:[[FunctionLocation]]: yM1962:1[[Prototype]1:f()[[scopes]]: scopes[1]

abc.name
&#39;abc&#39;
其中带有 f标记的是方法，不带的是属性
带有 -&gt; 符号的可以继续展开，限于篇幅省略了
带有[[]]的是内置属性，不能访问，只能查看
相对重要的是[[Prototype]]和[[scopes]]会在后面继承和作用域时讲到
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.可以作为方法参数</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>function a(){console.1og(&#39;a&#39;)}
function b(fn){
	console.1og(&#39;b&#39;) //fn 将来可以是一个函数对象
	fn(); // 调用函数对象
}
b(a)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.可以作为方法返回值</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>function c(){
	console.1og(&quot;c&quot;);
	function d(){
		conso1e. 1og(&quot;d”);
	}
	return d;
}

c()
c
f d(){
	console.log(&quot;d&quot;);
}
c()()
c
d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数作用域" tabindex="-1"><a class="header-anchor" href="#函数作用域"><span>函数作用域</span></a></h3><p>函数可以嵌套(js 代码中很常见，只是嵌套的形式更多是匿名函数，箭头函数)</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>function a(){	
	function b(){
	
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看下面的例子</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>function c(){
	var z=30;
}
var x= 10;
function a(){
	var y=20;
    function b(){
    // 看这里
    console.1og(x，y，z); //10 ,20 ,z is not defined
	}
	console.log(dir(b))
	b();
}
a();
console.log(a)

f b()
arguments: nul1
caller:null
length:0
name: &quot;b&quot;
prototype:{constructor:f}
[[FunctionLocation]]:yM2256:4
[[Prototype]]:f()
[[scopes]]:scopes[2]
0:Closure(a){y:20}
1:Global {window: Window,self: Window, document: document, name:
window里面包含10

a()
arguments:nul1
caller:nul1
length:
name :
prototype:{constructor:f}
[[FunctionLocation]]: yM2260:2
[[Prototype]]:f()
[[Scopes]l:scopes[1]
0:Gobal {window: Window,self: Window, document: document,
name :0

以函数为分界线划定作用域，所有函数之外是全局作用域
查找变量时，由内向外查找
。在内层作用域找到变量，就会停止查找，不会再找外层
所有作用域都找不到变量，报错。
作用域本质上是函数对象的属性，可以通过 console.dir 来查看调试
闭包
var x=10;
function a(){
	var y= 20;
	function b(){
		console.1og(x,y);
    }
    return b;
}
a()();//在外面执行了 b

函数定义时，它的作用域已经确定好了，因此无论函数将来去了哪，
都能从它的作用域中找到当时那些变量
别被概念忽悠了，闭包就是指函数能够访问自己的作用域中变量
//对比下面的
var x= 10;
function a(){
	var y=20;
	function b(){
		// 看这里
		console.1og(x， y);
	}
	b()
}
a();

let、var 与作用域
如果函数外层引用的是 let 变量，那么外层普通的 {} 也会作为作用域边界，最外层的let 也占一个 script 作用域
let x=10;
if(true){
    1et y= 20;
    function b(){
        console.1og(x,y);
    }
    console.dir(b);
}

b()
arguments:nul1
caller:null
length:o
name: &quot;b&quot;
prototype:fconstructor:f}
[[FunctionLocation1]:VM200:4
[[Prototype]]:f()
[[Scopes1]:Scopes[3]
0:Block {y:20}
1:script {x:10}
Glpbal {window: Window, self: Window, document: document, name:

如果函数外层引用的是 var 变量，外层普通的 {}不会视为边界
var x= 10;
if(true){
	var y= 20;
	function b(){
		console.1og(x,y);
    }
	console.dir(b);
}

f b()
arguments:nul1
caller:nul1
length: 0
name: &quot;b&quot;
prototype:{constructor:f}
[[FunctionLocation]]:yM217:4
[[Prototype]]:f()
[[scopes]]: scopes[1]
0:Globel {window: Window, self: Window, document: document, name:80

如果 var 变量出现了重名，则他俩会被视为同一作用域中的同一个变量
var e= 10
if(true){
	var e = 20;
	console.1og(e);
}
console.1og(e);//20
要想里面的e和外面的e能区分开来，最简单的办法是改成let，或者用函数来界定作用范围

如果是 let，则视为两个作用域中的两个变量
let e= 10;
if(true){
    let e= 20;
    console.1og(e);//打印 20
}
console.1og(e);// 打印 10

要想里面的e和外面的e能区分开来，最简单的办法是改成let，或者用函数来界定作用域范围
var e=10;
if(true){
	function b(){
		var e=20;
		console.1og(e);
	}
	b();
}
console.1og(e);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Array ☆</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>语法
// 创建数组
1et arr = [1,2,3];
// 获取数组元素
conso1e.1og(arr[0]);//输出1
// 修改数组元素
array[0]= 5;// 数组元素变成了 [5,2,3]
//遍历数组元素，其中 1ength 是数组属性，代表数组长度
for(let i=0;i&lt; arr.length; i++){
	console.1og(arr[i]);
}
API 
push、shift、splice

let arr =[1,2,3];
arr.push(4);// 向数组尾部(右侧)添加元素，结果[1,2,3,4]
arr.shift();// 从数组头部(左侧)移除元素，结果[2,3,4]
arr.splice(1,1);// 删除【参数1】索引位置的【参数2】个元素，结果[2,4]

join

let arr = [&#39;a&#39;,&#39;b&#39;,&#39;c&#39;]
arr.join()a,b，c
arr.join(&#39;&#39;)
&#39;abc&#39;
arr.join(&#39;-&#39;)
a-b-c

map、filter、forEach
let arr =[1,2,3,6];
function a(i){ // 代表的新旧元素之间的变换规则
	return i* 10
}
arr.map(a)//具名函数，结果[10,20,30,60]
// arr.map((i)=&gt;{return i*10});// 箭头函数
arr.map(i=&gt; i*10);// 箭头函数

。传给 map 的函数，参数代表旧元素，返回值代表新元素
map 的内部实现(伪代码)
function map(a){ // 参数是一个函数
	let narr =[];
	for(let i=0;i&lt;arr.length; i++){
        let o = arr[i];//旧元素
        let n = a(o);			// 新元素
        narr.push(n);
    }
	return narr;
}

filter 例子
let arr =[1,2,3,6];
arr.filter((i)=&gt;i%2==1);// 结果[1,3]
js。传给 filter 的函数，参数代表旧元素，返回值 true 表示要留下的元素
forEach 例子
Tet arr =[1,2,3,6];
/*for(let i=0;i&lt;arr.length; i++){
console.1og(arr[i]);
}*/
arr.forEach((i)=&gt;console.1og(i));
两个称呼
高阶函数，map，filter，forEach
回调函数，例如作为参数传入的函数

3) object ☆。
属性
let obj={
    属性名:值，
    方法名:函数，
    get 属性名(){}，
    set 属性名(新值){}
}
例1
Tet stu={
    name:“小明”,
    age: 18，
    study: function(){
    console.1og(this.name +&quot;爱学习”);
}
例2
let name =&quot;小黑”;
let age = 20;
1et study=function(){
console.1og(this.name +“爱学习&quot;);
}
let stu2={ name, age, study }
例3
let stu3 ={
	name:&quot;小明&quot;,
	age: 18,
	study(){//注意:对象方法这么写，仅限于对象内部
		console.1og(this.name +“爱学习&quot;);
	}
}
例4
//没有私有，属于约定规范
let stu4 ={
	_name: nu11,/*类似于java中私有成员变量*/
	get name(){
		return this._name;
	}
}
特色:属性增删
对比-下java 中的 Object
·Java 的 Object 是以类作为模板来创建，对象不能脱离类模板的范围，一个对象的属性、能用的方法都是确定好的
·js 的对象，不需要什么模板，它的属性和方法可以随时加减
let stu = {name:&#39;张三&#39;};
stu.age = 18; // 添加属性
delete stu.age;// 删除属性


stu.study=function(){// 添加方法
	console.1og(this.name +&quot;在学习”);
}
//添加 get，set
let stu = {_name:nu11};

Object.defineProperties(stu, &quot;name&quot; , {
	get() = {return this._name},
	set(name)  = {this._name = name;};
})
属性.属性名 相当于访问set/get方法

特色:this
public class TestMethod {
	static class student {
		private string name;
		public student(string name){
			this.name = name;
        }
        public void study(student this, string subject){
        	System.out.println(this.name +&quot;在学习&quot;+ subject):
        }
    }
    public static void main(string[] args){
        student stu = new student(&quot;小明&quot;);
        //下面的代码，本质上是执行 study(stu，&quot;java&quot;)，因此 this 就是stu
        stu.study(&quot;java&quot;);
    }
}

js 中的 this 也是隐式参数，但它与函数运行时上下文相关
例如，一个“落单”的函数
function study(subject){
	console.1og(this.name +&quot;在学习&quot;+ subject)
}
测试一下
study(&quot;js&quot;); //输出 在学习 js
这是因为此时函数执行，全局对象 window 被当作了this，window 对象的 name属性是空串
同样的函数，如果作为对象的方法
let stu={
	name:&quot;小白”
	study
}
这种情况下，会将当前对象作为 this

stu.study(&#39;js&#39;);
// 输出 小白在学习 js
还可以动态改变 this
let stu = {name:&#39;黑&quot;};
study.ca11(stu，&quot;js&quot;);//输出 小黑在学习 js
这回 study 执行时，就把 cal 的第一个参数 stu 作为 this

一个例外是，在箭头函数内出现的 this，以外层 this 理解
用匿名函数
let stu={
	name:“小花&quot;，
	friends:[“小白”,“小黑”,&quot;“小明”],
	p1ay(){
		this.friends.forEach(function(e){
			console.1og(this.name +“与&quot;+e +“在玩耍&quot;);
		});
    }
}
stu.play()
this.name 所在的函数是【落单】的函数，因此 this 代表window
输出结果为
与小白在玩耍
与小黑在玩耍
与小明在玩耍

用箭头函数
let stu={
	name:&quot;小花”，
	friends:[&quot;小白”,“小黑”,“小明”]
	play(){
		this.friends.forEach(e =&gt;{
		console.1og(this.name +“与”+e+“在玩耍&quot;);
		})
    }
)
this.name 所在的函数是箭头函数，因此 this 要看它外层的 play 函数，play 又是属于 stu 的方法，因此 this 代表 stu 对象

不用箭头函数的做法
let stu ={
	name:“小花”，
	friends:[&quot;小白&quot;,“小黑”,“小明”],
	play:function(){
		let me = this;
		this.friends.forEach(function(e){
			console.1og(this.name +“与&quot;+e +“在玩耍&quot;);
		});
    }
}

特色:原型继承
let father = {
	f1:&#39;父属性&#39;，
	m1:function(){
		console.1og(&quot;父方法&quot;);
	}
}
1et son = object.create(father);
conso1e.1og(son.f1);//打印 父属性
son.m1();// 打印 父方法

father是父对象，son去调用.m1或.f1时，自身对象没有，就到父对象找
son 自己可以添加自己的属性和方法
son 里有特殊属性 _proto_代表它的父对象，js 术语: son 的原型对象。
不同浏览器对打印 son的-proto_ 属性时显示不同
o Edge 打印 console.dir(son)显示[[Prototype]]
o Firefox打印console.dir(son)显示&lt;prototype&gt;

特色:基于函数的原型继承
出于方便的原因，js 又提供了一种基于函数的原型继承
函数职责
1.负责创建子对象，给子对象提供属性、方法，功能上相当于构造方法
2.函数有个特殊的属性 prototype，它就是函数创建的子对象的父对象
注意!名字有差异，这个属性的作用就是为新对象提供原型

function cons(f2){
	this.f2 = f2;
	this.m2 =function(){
		console.1og(&quot;子方法”);
	}
}	
// cons.prototype 就是父对象
cons.prototype.f1 =“父属性”;
cons.prototype.ml=function(){
	conso1e.1og(&quot;父方法&quot;);
}
配合 new 关键字，创建子对象
1et son = new cons(&quot;子属性&quot;)
子对象的_proto_就是函数的 prototype 属性
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="json" tabindex="-1"><a class="header-anchor" href="#json"><span>JSON</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>JSON
一个json 对象可以长这样:
{
&quot;name&quot;:&quot;张三”,
&quot;age&quot;:18
}
一个 is 对象长这样:
{
name:&quot;张三&quot;,
age:18
}

那么他们的区别在哪儿呢?我总结了这么几点
1.本质不同
json 对象本质上是个字符串，它的职责是作为客户端和服务器之间传递数据的一种格式，它的属性只是样子货
js 对象是切切实实的对象，可以有属性方法
2.语法细节不同
json 中只能有 nul、true|false、数字、字符串(只有双引号)、对象、数组
json 中不能有除以上的其它js 对象的特性，如方法等
json 中的属性必须用双引号引起来
json 字符串与js 对象的转换
JSON.parse(json字符串);// 返回js对象
JSON.stringify(js对象);//返回json字符串
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动态类型" tabindex="-1"><a class="header-anchor" href="#动态类型"><span>动态类型</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>静态类型语言，如Java，值有类型，变量也有类型、赋值给变量时，类型要相符
int a = 10;
string b=&quot;abc&quot;,
int c=&quot;abc&quot;; //错误
而js 属于动态类型语言，值有类型，但变量没有类型，赋值给变量时，没要求
例如
1et a= 20g
let b = 100;
b= &#39;abc&#39;;
b = true;
动态类型看起来比较灵活，但变量没有类型，会给后期维护带来困难
function test(obj){
// obj 的类型未知，必须根据不同类型做出各种容错处理
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_6-bom浏览器对象模型-整个html页面内容" tabindex="-1"><a class="header-anchor" href="#_6-bom浏览器对象模型-整个html页面内容"><span>6. BOM浏览器对象模型（整个HTML页面内容）</span></a></h1><p>操作文档中的元素和内容，DOM树通过js相应的api实现<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/7046ecfecabe6d05a7142.png" alt="dom.png"></p><h1 id="_7-javascript正则匹配" tabindex="-1"><a class="header-anchor" href="#_7-javascript正则匹配"><span>7. javascript正则匹配</span></a></h1><table><thead><tr><th style="text-align:center;">javascript正则匹配</th><th style="text-align:center;"></th></tr></thead><tbody><tr><td style="text-align:center;">String对象</td><td style="text-align:center;">match方法，str.match（）；</td></tr><tr><td style="text-align:center;">ReqExp对象</td><td style="text-align:center;">test方法 ReqExp.test(要测的对象)</td></tr></tbody></table><table><thead><tr><th style="text-align:center;">全局函数</th><th style="text-align:center;">函数名</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">转换</td><td style="text-align:center;">parseFloat()</td><td style="text-align:center;">解析一个字符串并返回一个浮点数</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">parseInt()</td><td style="text-align:center;">解析一个字符串并返回一个整数</td></tr><tr><td style="text-align:center;">执行</td><td style="text-align:center;">eval()</td><td style="text-align:center;">计算JavaScript字符串,并把它作为脚本运行</td></tr><tr><td style="text-align:center;">编码</td><td style="text-align:center;">encodeURI()</td><td style="text-align:center;">把字符串编码为URI</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">decodeURI()</td><td style="text-align:center;">解码某个编码的URI</td></tr></tbody></table><h1 id="_8-转换成jq对象" tabindex="-1"><a class="header-anchor" href="#_8-转换成jq对象"><span>8. 转换成jq对象</span></a></h1><ul><li>jq选择器.html();</li></ul><h1 id="_9-全局属性和函数可用于所有内建的javascript对象" tabindex="-1"><a class="header-anchor" href="#_9-全局属性和函数可用于所有内建的javascript对象"><span>9. 全局属性和函数可用于所有内建的JavaScript对象</span></a></h1><ul><li>括号里面传入js对象，如string</li><li>decodeURI()解码某个编码的 URI。</li><li>decodeURIComponent()解码一个编码的 URI 组件。</li><li>encodeURI()把字符串编码为 URI。</li><li>encodeURIComponent()把字符串编码为 URI 组件。</li><li>eval()计算 JavaScript 字符串，并把它作为脚本代码来执行。</li><li>parseFloat()解析一个字符串并返回一个浮点数。</li><li>parseInt()解析一个字符串并返回一个整数。</li></ul><h1 id="_10-为什么js是单线程的" tabindex="-1"><a class="header-anchor" href="#_10-为什么js是单线程的"><span>10. 为什么JS是单线程的？</span></a></h1><ul><li>为了避免复杂性，和提升效率。 为了利用多核CPU的计算能力，HTML5提出Web Worker标准，允许JavaScript脚本创建多个线程，但是子线程完全受主线程控制，且不得操作DOM。所以，这个新标准并没有改变JavaScript单线程的本质</li></ul><h2 id="声明变量" tabindex="-1"><a class="header-anchor" href="#声明变量"><span>声明变量</span></a></h2><p>(1)let ☆<br> 1et 变量名 = 值;<br> 。let 声明的变量可以被多次赋值，例如<br> 1et a=100; // 初始值是 100</p><p>a= 200;// ok，被重新赋值为 200<br> 2)const ☆<br> 。const 修饰的叫常量，只能赋值一次<br> const b=300;//初始值是 300<br> b = 400; //error，不能再次赋值</p><ol start="3"><li>var<br> var 声明的变量可以被多次赋值，例如<br> var f= 100;f = 200;</li></ol><h2 id="nodejs" tabindex="-1"><a class="header-anchor" href="#nodejs"><span>nodejs</span></a></h2><p>环境准备I<br> 1)安装 nvm<br> nvm 即(node version manager)，好处是方便切换 node.js 版本<br> 安装注意事项<br> 1.要卸载掉现有的 nodejs<br> 2.提示选择 nvm 和 nodejs 目录时，一定要避免目录中出现空格</p>`,49),B=n("br",null,null,-1),_=n("br",null,null,-1),A={href:"http://npm.taobao.org/mirrors/node/nvm",target:"_blank",rel:"noopener noreferrer"},w={href:"https://npm.taobao.org/mirrors/npm/",target:"_blank",rel:"noopener noreferrer"},S=n("br",null,null,-1),T=n("br",null,null,-1),C=n("br",null,null,-1),F=l("<p>建议安装 LTS(长期支持版)<br> nvm insta11 16.16.0</p><p>nvm insta11 14.20.0<br> 执行 nvm 1ist 会列出已安装版本<br> 切换到 16.16.0<br> nvm use 16.16.0<br> 切换到 14.20.0<br> nvm use 14.20.0</p><p>安装后 nvm 自己的环境变量会自动添加，但可能需要手工添加 nodejs的 PATH 环境变量</p><p>node -v</p><p>npm -v</p>",5),I=n("br",null,null,-1),D=n("br",null,null,-1),M=n("br",null,null,-1),L=n("br",null,null,-1),k={href:"https://registry.npm.taobao.org/%EF%BC%8C%E9%9C%80%E8%A6%81%E5%81%9A%E5%A6%82%E4%B8%8B%E8%AE%BE%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"},J={href:"https://registry.npm.taobao.org/",target:"_blank",rel:"noopener noreferrer"},N=n("br",null,null,-1),P=n("br",null,null,-1),O=n("br",null,null,-1),U=l(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
&quot;type&quot;: &quot;module&quot;&quot;,
devDependencies&quot;:{
&quot;express&quot;:&quot;^4.18.1&#39;
}
}

其中 devDependencies是npm install --save-dev 添加的
编写 main.js 代码
import express from &#39;express&#39;
const app =express()
app.use(&#39;&#39;,express.static(&#39;./&#39;))
app.listen(7070)

新建index.html

执行js 代码(运行前端服务器)
node main.js

innerHtml会解析内容
content不会

document.querySelector(&quot;.co1&#39;)
&lt;div class=&quot;co1&quot;&gt;编号&lt;/div&gt;
document.queryselectorA1l(&#39;.co1&#39;)
document.getElementById(&quot;h&quot;)
document.queryselector(&quot;#h&quot;)
document.querySelector(&quot;.title&quot;).textContent=\`&lt;div class=&quot;row bold&quot;&gt;
document.querySelector(&quot;.tbody&quot;).innerHTML=&#39;&#39;

let array =[
	{id:1，name:&#39;张三&#39;,SeX:&#39;男&#39;，age:18 }
	{id:2，name:&#39;李&#39;，sex:&#39;女&#39;，age:17 }
]
const tp= document.getElementById(&quot;tp&quot;);
const row =tp.content;
const [c1,c2,c3,c4]= row.querySelectorA1l(&quot;.col&quot;);
const tbody = document.queryselector(&#39;.tbody&#39;);
for(const {id,name,sex,age} of array){
c1.textContent =id;
c2.textContent = name;
c3.textContent =sex;
c4.textContent = age;
const newNode =document.importNode(row,true);
tbody.appendchild(newNode);
}

// 同步按收结果，异步接收结果
public class TestFuture 
	static ExecutorService pool = Executors.newFixedThreadPool( nThreads: 2);
	public static void main(Stringl] args)throws ExecutionException, InterruptedException 	{
	Loggerutil.get().debug(&quot;之前...&quot;);
	CompletableFuture.supplyAsync(()-&gt;{
		Loggerutil.get().debug(&quot;开始计算&quot;);
		sleep2s();
		Loggerutil.get().debug(&quot;结束计算&quot;)
		return &quot;123&quot;;
	}，pooL);//.thenAcceptAsync(result-&gt;Loggerutil.get().debug(result), pool);
	Loggerutil.get().debug(&quot;之后...&quot;);
   }
	static void sleep2s(){...}
}
[DEBUG]10:28:03.046[main]-之前..
[DEBUG]10:28:03.052[pool-1-thread-1]- 开始计算
[DEBUG]10:28:05.054[pool-1-thread-1]- 结束计算
[DEBUG] 10:28:05.055[main]- 123
[DEBUG]10:28:05.055[main]-之后...

4) Fetch APl
Fetch API可以用来获取远程数据，它有两种方式接收结果，同步方式与异步方式
格式
fetch(url, options) //返回 Promise
同步方式
const 结果=await fetch(url,options); = await Promise
// 后续代码
。await 关键字必须在一个标记了 async的 function 内来使用
·后续代码不会在结果返回前执行

String result =CompletableFuture.supplyAsync(
()-&gt;{Loggerutil.get().debug(&quot;开始计算&quot;);
sleep2s();
Loggerutil.get().debug(&quot;结束计算&quot;);return &quot;123&quot;;
},pool).get()

异步方式
fetch(url, options)
.then(结果 =&gt;{...});
.catch(=&gt;console.log(e))

==&gt; Promise.then(结果 =&gt;{...}).catch(=&gt;console.log(e))
//后续代码
后续代码不需等待返回结果即可执行
CompletableFuture.supplyAsync(()-&gt;{
Loggerutil.get().debug(&quot;开始计算&quot;);
sleep2s();
Loggerutil.get().debug(&quot;结束计算&quot;);
return &quot;123&quot;:
}，pool).thenAcceptAsync(relt-&gt;Loggerutil.get().debug(result), pool)

@CrossOrigin(&quot;http://localhost:7070&quot;)//后端设置跨域

npm insta11 http-proxy-middleware --save-dev
在 express 服务器启动代码中加入
importexpress from &#39;express&#39;
import {createProxyMiddleware} from http-proxy-middlew


const app =express()
app.use(&#39;/api&#39;,createProxyMiddleware({ target:&#39;http://localhost:8080，change0rigin:true ));
app.use(express.static(&#39;./&#39;))
app.listen(7070)

node .\\main.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://i0.wp.com/wx4.sinaimg.cn/large/0070JETugy1i4219mpwbtj30pc0ewwgn.jpg" alt="1.png" tabindex="0"><figcaption>1.png</figcaption></figure><figure><img src="https://i3.wp.com/wx4.sinaimg.cn/large/0070JETugy1i421aoiqvyj30mw07o74v.jpg" alt="2.png" tabindex="0"><figcaption>2.png</figcaption></figure><h2 id="导出导入" tabindex="-1"><a class="header-anchor" href="#导出导入"><span>导出导入</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>单个导出
export const a = 10;
export let b=20;
export function c(){
	console.log(&quot;c&quot;)
}

//一齐导出
const a=10;
let b = 20;
function c(){
	console.log(&#39;c&#39;);
}
export {a,b,c}

&lt;script type=&quot;module&quot;&gt;
import {a,b,c} from&#39;./1.js&#39;
console.log(a);
console.log(b);
c();
&lt;/script&gt;

//导出默认
export default b;

//导入默认
import x from&#39;./1.js
console.log(x)

//整体导入
import * as m from&#39;./1.js&#39;
console.log(m)
console.log(m.a)
console.log(m.b)
m.c()
console.log(m.defau1t)

//标签导入
&lt;script src=&quot;1.js&quot;&gt;&lt;/script)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function H(R,G){const i=d("ExternalLinkIcon");return a(),r("div",null,[c,n("p",null,[e("|基本（值）数据类型|说明|举例|"),u,e(" |:-😐:-😐"),o,e(` |String|使用双引号 " 或单引号 ' 括起来的一个或多个字符|"`),n("a",m,[e("http://caibaojian.com"),t(i)]),e(`"、'字符串'|`),b,e(" |Number|包括整数和浮点数（包含小数点的数或科学记数法的数）|30、-10、11.2、2.35e10|"),g,e(" |Boolean|表示 true 或 false 这两种状态|5 == 2 其运算结果为 false|"),p,e(" |Null|变量或内容值为空（null），可以通过给一个变量赋 null 值来清除变量的内容|str = null|"),y,e(" |Undefined|变量被创建后，未给该变量赋值，|var str|"),x,e(" |对象（引用）类型|说明|举例|"),h,e(' |Array|var cars=new Array();|var cars=["Audi","BMW","Volvo"];|'),f,e(' |Object|JavaScript 操作的对象|var person={firstname:"Bill", lastname:"Gates", id:5566};|'),q,e(" |Function|JavaScript 操作的对象|可以执行的一种特别对象|"),E]),j,n("p",null,[e("3.选用【以管理员身份运行】cmd程序来执行 nvm 命令"),B,e(" 4.首次运行前设置好国内镜像地址"),_,e(" nvm node_mirror "),n("a",A,[e("http://npm.taobao.org/mirrors/node/nvm"),t(i)])]),n("p",null,[e("npm_mirror "),n("a",w,[e("https://npm.taobao.org/mirrors/npm/"),t(i)]),S,e(" 首先查看有哪些可用版本"),T,e(" nvm list available"),C,e(" 输出")]),F,n("p",null,[e("2)检查 npm"),I,e(" npm 是js 的包管理器，就类似于java 界的 maver要确保它使用的是国内镜像"),D,e(" 检查镜像"),M,e(" npm get registry"),L,e(" 如果返回的不是 "),n("a",k,[e("https://registry.npm.taobao.org/，需要做如下设置"),t(i)])]),n("p",null,[e("npm config set registry "),n("a",J,[e("https://registry.npm.taobao.org/"),t(i)]),N,e(" 3)搭建简单服务"),P,e(" npm insta1l express --save-dev"),O,e(" 修改 package.json 文件")]),U])}const V=s(v,[["render",H],["__file","javascript.html.vue"]]),Z=JSON.parse('{"path":"/frontend/javascript.html","title":"javascript","lang":"zh-CN","frontmatter":{"title":"javascript","date":"2023-01-01T00:00:00.000Z","tags":"javascript","categories":"前端","description":"javaScript 1. 概念&作用 2. javascript引入方式 3. 数据类型 4. typeof、instanceof、=== 5. javaScript语法 6. BOM浏览器对象模型（整个HTML页面内容） 7. javascript正则匹配 8. 转换成jq对象 9. 全局属性和函数可用于所有内建的JavaScript对象 10. ...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/frontend/javascript.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"javascript"}],["meta",{"property":"og:description","content":"javaScript 1. 概念&作用 2. javascript引入方式 3. 数据类型 4. typeof、instanceof、=== 5. javaScript语法 6. BOM浏览器对象模型（整个HTML页面内容） 7. javascript正则匹配 8. 转换成jq对象 9. 全局属性和函数可用于所有内建的JavaScript对象 10. ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/7046ecfecabe6d05a7142.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"javascript\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/7046ecfecabe6d05a7142.png\\",\\"https://i0.wp.com/wx4.sinaimg.cn/large/0070JETugy1i4219mpwbtj30pc0ewwgn.jpg\\",\\"https://i3.wp.com/wx4.sinaimg.cn/large/0070JETugy1i421aoiqvyj30mw07o74v.jpg\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"控制语句","slug":"控制语句","link":"#控制语句","children":[{"level":3,"title":"函数是对象","slug":"函数是对象","link":"#函数是对象","children":[]},{"level":3,"title":"函数作用域","slug":"函数作用域","link":"#函数作用域","children":[]}]},{"level":2,"title":"JSON","slug":"json","link":"#json","children":[]},{"level":2,"title":"动态类型","slug":"动态类型","link":"#动态类型","children":[]},{"level":2,"title":"声明变量","slug":"声明变量","link":"#声明变量","children":[]},{"level":2,"title":"nodejs","slug":"nodejs","link":"#nodejs","children":[]},{"level":2,"title":"导出导入","slug":"导出导入","link":"#导出导入","children":[]}],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":23.56,"words":7068},"filePathRelative":"frontend/javascript.md","localizedDate":"2023年1月1日","excerpt":"<p>javaScript</p>\\n<!--more-->\\n<!-- TOC -->\\n<ul>\\n<li><a href=\\"#1-%E6%A6%82%E5%BF%B5%E4%BD%9C%E7%94%A8\\">1. 概念&amp;作用</a></li>\\n<li><a href=\\"#2-javascript%E5%BC%95%E5%85%A5%E6%96%B9%E5%BC%8F\\">2. javascript引入方式</a></li>\\n<li><a href=\\"#3-%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B\\">3. 数据类型</a></li>\\n<li><a href=\\"#4-typeofinstanceof\\">4. typeof、instanceof、===</a></li>\\n<li><a href=\\"#5-javascript%E8%AF%AD%E6%B3%95\\">5. javaScript语法</a></li>\\n<li><a href=\\"#6-bom%E6%B5%8F%E8%A7%88%E5%99%A8%E5%AF%B9%E8%B1%A1%E6%A8%A1%E5%9E%8B%E6%95%B4%E4%B8%AAhtml%E9%A1%B5%E9%9D%A2%E5%86%85%E5%AE%B9\\">6. BOM浏览器对象模型（整个HTML页面内容）</a></li>\\n<li><a href=\\"#7-javascript%E6%AD%A3%E5%88%99%E5%8C%B9%E9%85%8D\\">7. javascript正则匹配</a></li>\\n<li><a href=\\"#8-%E8%BD%AC%E6%8D%A2%E6%88%90jq%E5%AF%B9%E8%B1%A1\\">8. 转换成jq对象</a></li>\\n<li><a href=\\"#9-%E5%85%A8%E5%B1%80%E5%B1%9E%E6%80%A7%E5%92%8C%E5%87%BD%E6%95%B0%E5%8F%AF%E7%94%A8%E4%BA%8E%E6%89%80%E6%9C%89%E5%86%85%E5%BB%BA%E7%9A%84javascript%E5%AF%B9%E8%B1%A1\\">9. 全局属性和函数可用于所有内建的JavaScript对象</a></li>\\n<li><a href=\\"#10-%E4%B8%BA%E4%BB%80%E4%B9%88js%E6%98%AF%E5%8D%95%E7%BA%BF%E7%A8%8B%E7%9A%84\\">10. 为什么JS是单线程的？</a></li>\\n</ul>","autoDesc":true}');export{V as comp,Z as data};
