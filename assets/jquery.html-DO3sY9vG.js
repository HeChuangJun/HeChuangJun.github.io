import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,e as l}from"./app-7KT7HDzT.js";const t={},s=l(`<p>jQuery</p><ul><li><a href="#1-jquery%E9%87%8D%E7%82%B9">1. jquery(重点)</a></li><li><a href="#2-jsdom%E4%B8%8Ejq%E5%AF%B9%E8%B1%A1%E4%BA%92%E6%8D%A2">2. jsdom与jq对象互换</a></li><li><a href="#3-%E5%87%BD%E6%95%B0">3. 函数</a></li><li><a href="#4-%E9%80%89%E6%8B%A9%E5%99%A8%E8%8E%B7%E5%8F%96%E5%85%83%E7%B4%A0">4. 选择器：获取元素</a></li><li><a href="#5-jquery%E7%9A%84dom%E6%93%8D%E4%BD%9C">5. jquery的Dom操作</a></li><li><a href="#6-apache-poi%E6%8A%80%E6%9C%AF">6. apache POI技术</a></li></ul><h1 id="_1-jquery-重点" tabindex="-1"><a class="header-anchor" href="#_1-jquery-重点"><span>1. jquery(重点)</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>javascript的一个轻量级框架，对javascript进行封装，提供简便选择器和方法。
①Jquery它是一个库(框架)，要想使用它，必须先引入！
&lt;script type=&quot;text/javascript&quot; src=&quot;../../js/jquery-1.8.3.js&quot; &gt;
&lt;/script&gt;
②在&lt;scrpit&gt;&lt;/script&gt;之间写jquery代码,用法jQuery(选择器)==$(选择器)
变量尽量$开头，//单行注释   /*多行注释*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-jsdom与jq对象互换" tabindex="-1"><a class="header-anchor" href="#_2-jsdom与jq对象互换"><span>2. jsdom与jq对象互换</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>jsdom对象→jquery对象：$(dom对象)或jQuery(dom对象)
jquery对象→jsdom对象：jquery对象[索引]、
jquery对象.get(索引)其中索引为匹配到的jq对象，一般为0
js和jq对象的api不能相互调用 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-函数" tabindex="-1"><a class="header-anchor" href="#_3-函数"><span>3. 函数</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>js：window.onload=function(){}只赋值一次，覆盖，加载慢(整个页面加载完毕时执行&lt;包括图片&gt;)
jq:$(document).ready(function(){});多次赋值，依次执行快！
(整个dom树结构绘制完毕&lt;dom树图片可能没加载完&gt;加载)简写$(function(){});

jq选择器对象.事件=function(){});
jq选择器对象.事件(function(){})
可以用this代表当前的jq对象
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-选择器-获取元素" tabindex="-1"><a class="header-anchor" href="#_4-选择器-获取元素"><span>4. 选择器：获取元素</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>基本选择器
id选择器$(&quot;#id&quot;)
类选择器$(&quot;.class&quot;)
元素选择器$(&quot;元素&quot;)
$(&quot;*&quot;)
$(&quot;元素，元素&quot;) 选择两个样式都有的元素

层级选择器
$(&quot;父元素选择器   子元素选择器&quot;)选择父元素中所有的子元素
$(&quot;父元素选择器&gt;子元素选择器&quot;)选择父元素中的所有第一级子元素
$(&quot;父元素选择器+子元素选择器&quot;)选择父元素后面的所有子元素
$(&quot;父元素选择器~子元素选择器&quot;)选择父元素的所有同级兄弟元素

属性选择器
基本选择器[属性名=‘属性值’]
基本选择器[属性名]
基本选择器[属性名!=&#39;属性值&#39;]
基本选择器[属性名^=&#39;属性值&#39;]开头
基本选择器[属性名$=&#39;属性值&#39;]结尾
基本选择器[属性名*=&#39;属性值&#39;]

表单属性过滤选择器
$(&quot;select option:selected&quot;)
$(&quot;input:checked&quot;)
$(&quot;:text&quot;)

基本过滤选择器（常用）
:first
妙用---body div:first
:last
$(&#39;li&#39;).first() 等价于：$(“li:first”)
:odd表格隔行换色
:even
:enabled
:disabed
:checked
:selected
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_5-jquery的dom操作" tabindex="-1"><a class="header-anchor" href="#_5-jquery的dom操作"><span>5. jquery的Dom操作</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>addClass()、removeClass()，toggleclass表格隔行换色
attr();  prop();
对于HTML元素本身就带有的固有属性，在处理时，使用prop方法。
对于HTML元素我们自己自定义的DOM属性，在处理时，使用attr方法。
attr在jquery1.11版本不适用，采用prop()来替代(在各个版本都适用)。
removeattr(),removeProp()
append()  appendTo() 二级联动
apend:  A.append(B)  将B追加到A的内容的末尾处
appendTo: A.appendTo(B)  将A加到B内容的末尾处
相当于appendchild，createTextNode、createElement
css(“属性”，”属性值“)→js的style.属性，表格隔行换色
each()数组遍历→$().each(function(){});
$.each( jq对象, function(i, n){});	 i代表角标数，n代表每一个元素
n==this;
html()→js的innerHTML 、val()获得元素内部的值
text(), val()
show([s],[e],[fn]);hide([s],[e],[fn]);toggle([s],[e],[fn]);显示隐藏
fadeIn();fadeOut();
slideDown([s],[e],[fn]);滑动
slideUp([s],[e],[fn]);滑动
slideDown([s],[e],[fn]);滑动
hover();
toggle();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_6-apache-poi技术" tabindex="-1"><a class="header-anchor" href="#_6-apache-poi技术"><span>6. apache POI技术</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Apache POI是Apache软件基金会的开放源码函式库，
POI提供API给Java程序对Microsoft Office格式档案读和写的功能。
下载开发包：poi-bin-3.9-20121203.zip
- 在项目中引入POI的依赖
&lt;dependency&gt;
	&lt;groupId&gt;org.apache.poi&lt;/groupId&gt;
	&lt;artifactId&gt;poi&lt;/artifactId&gt;
	&lt;version&gt;3.11&lt;/version&gt;
&lt;/dependency&gt;
@Test
public void test1() throws FileNotFoundException, IOException{
	String filePath = &quot;C:\\\\Users\\\\zhaoqx\\\\Desktop\\\\区域导入测试数据.xls&quot;;
	//包装一个Excel文件对象
	HSSFWorkbook workbook = new HSSFWorkbook(new FileInputStream(new File(filePath)));
	//读取文件中第一个Sheet标签页
	HSSFSheet hssfSheet = workbook.getSheetAt(0);
	//遍历标签页中所有的行
	for (Row row : hssfSheet) {
		&lt;!--去掉第一行
		int rowNum=row.getRowNum();
		if(rowNum==0){
			continue;
		}--&gt;
		System.out.println();
		rowNum.getCell(1);//获得各行的第一个单元格
		//单元格
		for (Cell cell : row) {
			String value = cell.getStringCellValue();//获得一行每个单元格的文本值
			System.out.print(value + &quot; &quot;);
		}
	}
}
# POI的使用（导出数据）
//第二步：使用POI将数据写到Excel文件中
//在内存中创建一个Excel文件
HSSFWorkbook workbook = new HSSFWorkbook();
//创建一个标签页
HSSFSheet sheet = workbook.createSheet(&quot;分区数据&quot;);
//创建标题行
HSSFRow headRow = sheet.createRow(0);
headRow.createCell(0).setCellValue(&quot;分区编号&quot;);
headRow.createCell(1).setCellValue(&quot;开始编号&quot;);
headRow.createCell(2).setCellValue(&quot;结束编号&quot;);
headRow.createCell(3).setCellValue(&quot;位置信息&quot;);
headRow.createCell(4).setCellValue(&quot;省市区&quot;);

for (Subarea subarea : list) {
	HSSFRow dataRow = sheet.createRow(sheet.getLastRowNum() + 1);
	dataRow.createCell(0).setCellValue(subarea.getId());
	dataRow.createCell(1).setCellValue(subarea.getStartnum());
	dataRow.createCell(2).setCellValue(subarea.getEndnum());
	dataRow.createCell(3).setCellValue(subarea.getPosition());
	dataRow.createCell(4).setCellValue(subarea.getRegion().getName());
}

//第三步：使用输出流进行文件下载（一个流、两个头）

String filename = &quot;分区数据.xls&quot;;
String contentType = ServletActionContext.getServletContext().getMimeType(filename);
ServletOutputStream out = ServletActionContext.getResponse().getOutputStream();
ServletActionContext.getResponse().setContentType(contentType);

//获取客户端浏览器类型
String agent = ServletActionContext.getRequest().getHeader(&quot;User-Agent&quot;);
filename = FileUtils.encodeDownloadFilename(filename, agent);
ServletActionContext.getResponse().setHeader(&quot;content-disposition&quot;, &quot;attachment;filename=&quot;+filename);
workbook.write(out);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),a=[s];function d(r,u){return n(),i("div",null,a)}const o=e(t,[["render",d],["__file","jquery.html.vue"]]),m=JSON.parse('{"path":"/frontend/base/jquery.html","title":"jQuery","lang":"zh-CN","frontmatter":{"title":"jQuery","date":"2023-01-01T00:00:00.000Z","tags":"jQuery","categories":"前端","description":"jQuery 1. jquery(重点) 2. jsdom与jq对象互换 3. 函数 4. 选择器：获取元素 5. jquery的Dom操作 6. apache POI技术 1. jquery(重点) 2. jsdom与jq对象互换 3. 函数 4. 选择器：获取元素 5. jquery的Dom操作 6. apache POI技术","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/frontend/base/jquery.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"jQuery"}],["meta",{"property":"og:description","content":"jQuery 1. jquery(重点) 2. jsdom与jq对象互换 3. 函数 4. 选择器：获取元素 5. jquery的Dom操作 6. apache POI技术 1. jquery(重点) 2. jsdom与jq对象互换 3. 函数 4. 选择器：获取元素 5. jquery的Dom操作 6. apache POI技术"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"jQuery\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":4.16,"words":1249},"filePathRelative":"frontend/base/jquery.md","localizedDate":"2023年1月1日","excerpt":"<p>jQuery</p>\\n<!--more-->\\n<!-- TOC -->\\n<ul>\\n<li><a href=\\"#1-jquery%E9%87%8D%E7%82%B9\\">1. jquery(重点)</a></li>\\n<li><a href=\\"#2-jsdom%E4%B8%8Ejq%E5%AF%B9%E8%B1%A1%E4%BA%92%E6%8D%A2\\">2. jsdom与jq对象互换</a></li>\\n<li><a href=\\"#3-%E5%87%BD%E6%95%B0\\">3. 函数</a></li>\\n<li><a href=\\"#4-%E9%80%89%E6%8B%A9%E5%99%A8%E8%8E%B7%E5%8F%96%E5%85%83%E7%B4%A0\\">4. 选择器：获取元素</a></li>\\n<li><a href=\\"#5-jquery%E7%9A%84dom%E6%93%8D%E4%BD%9C\\">5. jquery的Dom操作</a></li>\\n<li><a href=\\"#6-apache-poi%E6%8A%80%E6%9C%AF\\">6. apache POI技术</a></li>\\n</ul>","autoDesc":true}');export{o as comp,m as data};
