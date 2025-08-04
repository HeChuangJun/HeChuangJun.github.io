import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,e as t}from"./app-7KT7HDzT.js";const s={},a=t(`<p>最好的API使用Swagger工具构建</p><h1 id="_1-springboot整合swagger2" tabindex="-1"><a class="header-anchor" href="#_1-springboot整合swagger2"><span>1. springboot整合swagger2</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>导入swagger依赖（在maven项目pom.xml中添加以下依赖）
&lt;dependency&gt;
    &lt;groupId&gt;io.springfox&lt;/groupId&gt;
    &lt;artifactId&gt;springfox-swagger2&lt;/artifactId&gt;
    &lt;version&gt;2.9.2&lt;/version&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;io.springfox&lt;/groupId&gt;
    &lt;artifactId&gt;springfox-swagger-ui&lt;/artifactId&gt;
    &lt;version&gt;2.9.2&lt;/version&gt;
&lt;/dependency&gt;
在主程序中添加@EnableSwagger2
@SpringBootApplication
@EnableSwagger2
public class MainApplication {
	public static void main(String[] args) {
		SpringApplication.run(MainApplication.class, args);
	}
}

在需要api的类上面添加注解
@RestController
@Api(tags = &quot;UserinfoCtrl&quot;, description = &quot;用户信息相关&quot;)  
public class testswaggercontroller {
	@RequestMapping(&quot;/testswagger&quot;)
	@ApiOperation(value = &quot;获取用户信息&quot;, httpMethod = &quot;GET&quot;, notes = &quot;显示用户信息&quot;)  
	public Map&lt;String, Object&gt; fun() {
		Map&lt;String , Object&gt; result=new HashMap&lt;String,Object&gt;();
		result.put(&quot;test&quot;, &quot;test&quot;);
		Demo demo=new Demo(&quot;junye&quot;, &quot;1&quot;);
		result.put(&quot;Demo&quot;, demo);
		System.out.println(&quot;chenggong&quot;);
		return result;
	}
}
测试是否生成了api：浏览器访问：localhost:8080/swagger-ui.html#
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-swagger主要注解的说明" tabindex="-1"><a class="header-anchor" href="#_2-swagger主要注解的说明"><span>2. swagger主要注解的说明</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@Api用在类上，说明该类的作用。可以标记一个Controller类做为swagger文档资源
@Api(value = &quot;/user&quot;, description = &quot;Operations about user&quot;)
value:url的路径值
tags:如果设置这个值、value的值会被覆盖
description:对api资源的描述
basePath:基本路径可以不配置
position:如果配置多个Api 想改变显示的顺序位置
produces:For example, &quot;application/json, application/xml&quot;
consumes:For example, &quot;application/json, application/xml&quot;
authorizations:高级特性认证时配置
hidden:配置为true 将在文档中隐藏

ApiOperation：用在方法上，说明方法的作用，每一个url资源的定义,与Controller中的方法并列使用。
@ApiOperation(
value = &quot;Find purchase order by ID&quot;,
notes = &quot;&quot;,
response = Order,
tags = {&quot;Pet Store&quot;})
value:url的路径值
tags:如果设置这个值、value的值会被覆盖
description:对api资源的描述
position:如果配置多个Api 想改变显示的顺序位置
produces:For example, &quot;application/json, application/xml&quot;
consumes:For example, &quot;application/json, application/xml&quot;
protocols:Possible values: http, https, ws, wss.
authorizations:高级特性认证时配置
hidden:配置为true 将在文档中隐藏
response:返回的对象
responseContainer:这些对象是有效的 &quot;List&quot;, &quot;Set&quot; or &quot;Map&quot;.，其他无效
httpMethod:&quot;GET&quot;, &quot;HEAD&quot;, &quot;POST&quot;, &quot;PUT&quot;, &quot;DELETE&quot;, &quot;OPTIONS&quot; and &quot;PATCH&quot;
code:http的状态码 默认 200
extensions:扩展属性

ApiParam请求属性,与Controller中的方法并列使用。
public ResponseEntity&lt;User&gt; createUser(@RequestBody @ApiParam(value = &quot;Created user object&quot;)
name:属性名称
value:属性值
defaultValue:默认属性值
allowableValues:可以不配置
required:是否属性必填
access	:不过多描述
allowMultiple:	默认为false
hidden:隐藏该属性
example:举例子

ApiResponse：响应配置，与Controller中的方法并列使用
@ApiResponse(code = 400, message = &quot;Invalid user supplied&quot;)
code:http的状态码
message:描述
response:默认响应类 Void
reference:参考ApiOperation中配置
responseHeaders:参考 ResponseHeader 属性配置说明
responseContainer:参考ApiOperation中配置

ApiResponses 与Controller中的方法并列使用ApiResponses：响应集配置，使用方式：只有value属性
@ApiResponses({ @ApiResponse(code = 400, message = &quot;Invalid Order&quot;) })

ResponseHeader 与Controller中的方法并列使用响应头设置
@ResponseHeader(name=&quot;head1&quot;,description=&quot;response head conf&quot;)
name:响应头名称
description:头描述
response:默认响应类 Void
responseContainer:参考ApiOperation中配置

其他
@ApiImplicitParams：用在方法上包含一组参数说明；
@ApiImplicitParam：用在@ApiImplicitParams注解中，指定一个请求参数的各个方面
paramType：参数放在哪个地方
name：参数代表的含义
value：参数名称
dataType： 参数类型，有String/int，无用
required ： 是否必要
defaultValue：参数的默认值
@ApiResponses：用于表示一组响应；
@ApiResponse：用在@ApiResponses中，一般用于表达一个错误的响应信息；
code： 响应码(int型)，可自定义
message：状态码对应的响应信息
@ApiModel：描述一个Model的信息（这种一般用在post创建的时候，
使用@RequestBody这样的场景，请求参数无法使用@ApiImplicitParam注解进行描述的时候；
@ApiModelProperty：描述一个model的属性。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[a];function r(d,o){return n(),i("div",null,l)}const v=e(s,[["render",r],["__file","swagger.html.vue"]]),p=JSON.parse('{"path":"/backend/apidocumentation/swagger.html","title":"Swagger","lang":"zh-CN","frontmatter":{"title":"Swagger","date":"2023-01-01T00:00:00.000Z","tags":"Swagger","categories":"后端","description":"最好的API使用Swagger工具构建 1. springboot整合swagger2 2. swagger主要注解的说明","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/apidocumentation/swagger.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"Swagger"}],["meta",{"property":"og:description","content":"最好的API使用Swagger工具构建 1. springboot整合swagger2 2. swagger主要注解的说明"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Swagger\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":2.99,"words":896},"filePathRelative":"backend/apidocumentation/swagger.md","localizedDate":"2023年1月1日","excerpt":"<p>最好的API使用Swagger工具构建</p>\\n<!--more-->\\n<h1>1. springboot整合swagger2</h1>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>导入swagger依赖（在maven项目pom.xml中添加以下依赖）\\n&lt;dependency&gt;\\n    &lt;groupId&gt;io.springfox&lt;/groupId&gt;\\n    &lt;artifactId&gt;springfox-swagger2&lt;/artifactId&gt;\\n    &lt;version&gt;2.9.2&lt;/version&gt;\\n&lt;/dependency&gt;\\n&lt;dependency&gt;\\n    &lt;groupId&gt;io.springfox&lt;/groupId&gt;\\n    &lt;artifactId&gt;springfox-swagger-ui&lt;/artifactId&gt;\\n    &lt;version&gt;2.9.2&lt;/version&gt;\\n&lt;/dependency&gt;\\n在主程序中添加@EnableSwagger2\\n@SpringBootApplication\\n@EnableSwagger2\\npublic class MainApplication {\\n\\tpublic static void main(String[] args) {\\n\\t\\tSpringApplication.run(MainApplication.class, args);\\n\\t}\\n}\\n\\n在需要api的类上面添加注解\\n@RestController\\n@Api(tags = \\"UserinfoCtrl\\", description = \\"用户信息相关\\")  \\npublic class testswaggercontroller {\\n\\t@RequestMapping(\\"/testswagger\\")\\n\\t@ApiOperation(value = \\"获取用户信息\\", httpMethod = \\"GET\\", notes = \\"显示用户信息\\")  \\n\\tpublic Map&lt;String, Object&gt; fun() {\\n\\t\\tMap&lt;String , Object&gt; result=new HashMap&lt;String,Object&gt;();\\n\\t\\tresult.put(\\"test\\", \\"test\\");\\n\\t\\tDemo demo=new Demo(\\"junye\\", \\"1\\");\\n\\t\\tresult.put(\\"Demo\\", demo);\\n\\t\\tSystem.out.println(\\"chenggong\\");\\n\\t\\treturn result;\\n\\t}\\n}\\n测试是否生成了api：浏览器访问：localhost:8080/swagger-ui.html#\\n</code></pre></div>","autoDesc":true}');export{v as comp,p as data};
