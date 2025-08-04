import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as n,o as a,c as v,a as e,b as i,d as t,e as s}from"./app-7KT7HDzT.js";const u={},m=s(`<p>springmvc</p><ul><li><a href="#2-springmvc%E6%A6%82%E8%BF%B0">2. Springmvc概述</a></li><li><a href="#3-springmvc%E4%B8%8Estruts2%E4%B8%8D%E5%90%8C">3. springmvc与struts2不同</a></li><li><a href="#5-springmvc%E5%85%A5%E9%97%A8">5. springmvc入门</a></li><li><a href="#6-springmvc-%E9%85%8D%E7%BD%AE">6. springmvc 配置</a></li><li><a href="#7-handler%E9%85%8D%E7%BD%AE">7. Handler配置</a></li><li><a href="#8-%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86%E5%99%A8">8. 异常处理器</a></li><li><a href="#9-ssm%E6%95%B4%E5%90%88%E6%80%9D%E8%B7%AF">9. ssm整合思路</a></li><li><a href="#10-%E4%B8%8A%E4%BC%A0%E5%9B%BE%E7%89%87">10. 上传图片</a></li><li><a href="#11-restful%E6%94%AF%E6%8C%81">11. RESTful支持</a></li><li><a href="#12-%E6%8B%A6%E6%88%AA%E5%99%A8">12. 拦截器</a></li></ul><h1 id="_2-springmvc概述" tabindex="-1"><a class="header-anchor" href="#_2-springmvc概述"><span>2. Springmvc概述</span></a></h1><ul><li>Spring web mvc和Struts2都属于表现层的框架,它是Spring框架的一部分<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/be7cbdbe994b2221f35c0.png" alt="springmvc.png"></li></ul><h1 id="_3-springmvc与struts2不同" tabindex="-1"><a class="header-anchor" href="#_3-springmvc与struts2不同"><span>3. springmvc与struts2不同</span></a></h1><ul><li>springmvc的入口是一个servlet即前端控制器，而struts2入口是一个filter过滤器。</li><li>springmvc是基于方法开发(一个url对应一个方法)，请求参数传递到方法的形参，struts2是基于类开发，传递参数是通过类的属性</li><li>Struts采用值栈存储请求和响应的数据，通过OGNL存取数据， springmvc通过参数解析器是将request请求内容解析，并给方法形参赋值，</li></ul><h1 id="_5-springmvc入门" tabindex="-1"><a class="header-anchor" href="#_5-springmvc入门"><span>5. springmvc入门</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	创建动态web工程(2.5)
	导入jar包
	commons-logging-1.1.1.jar
	jstl-1.2.jar
	spring-aop-4.1.3.RELEASE.jar
	spring-aspects-4.1.3.RELEASE.jar
	spring-beans-4.1.3.RELEASE.jar
	spring-context-4.1.3.RELEASE.jar
	spring-context-support-4.1.3.RELEASE.jar
	spring-core-4.1.3.RELEASE.jar
	spring-expression-4.1.3.RELEASE.jar
	spring-jdbc-4.1.3.RELEASE.jar
	spring-jms-4.1.3.RELEASE.jar
	spring-messaging-4.1.3.RELEASE.jar
	spring-tx-4.1.3.RELEASE.jar
	spring-web-4.1.3.RELEASE.jar
	spring-webmvc-4.1.3.RELEASE.jar

	在src下创建springmvc.xml
	导入所有约束文件aop、beans、context、mvc、tool、tx、util
	&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
	&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
	xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot; 
	xmlns:p=&quot;http://www.springframework.org/schema/p&quot;
	xmlns:context=&quot;http://www.springframework.org/schema/context&quot;
	xmlns:mvc=&quot;http://www.springframework.org/schema/mvc&quot;
	xsi:schemaLocation=&quot;http://www.springframework.org/schema/beans 
	http://www.springframework.org/schema/beans/spring-beans-4.0.xsd
	http://www.springframework.org/schema/mvc 
	http://www.springframework.org/schema/mvc/spring-mvc-4.0.xsd
	http://www.springframework.org/schema/context 
	http://www.springframework.org/schema/context/spring-context-4.0.xsd&quot;&gt;
		&lt;!--配置扫描注解 配置controller扫描包 --&gt;
		&lt;context:component-scan base-package=&quot;cn.itcast.springmvc.controller&quot;/&gt;
	&lt;/beans&gt;
		
	在web.xml中配置SpringMVC的前端控制器DispatcherServlet
	&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
		&lt;web-app xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
		xmlns=&quot;http://java.sun.com/xml/ns/javaee&quot;
		xsi:schemaLocation=&quot;http://java.sun.com/xml/ns/javaee 
		http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd&quot;
		id=&quot;WebApp_ID&quot; version=&quot;2.5&quot;&gt;
		&lt;display-name&gt;springmvc-first&lt;/display-name&gt;
		&lt;welcome-file-list&gt;
			&lt;welcome-file&gt;index.html&lt;/welcome-file&gt;
		&lt;/welcome-file-list&gt;

		&lt;!-- 配置SpringMVC前端控制器 --&gt;
		&lt;servlet&gt;
			&lt;servlet-name&gt;springmvc-first&lt;/servlet-name&gt;
			&lt;servlet-class&gt;org.springframework.web.servlet.DispatcherServlet
		&lt;/servlet-class&gt;
			&lt;!-- 指定SpringMVC配置文件 --&gt;
			&lt;!-- SpringMVC的配置文件的默认路径是
			/WEB-INF/\${servlet-name}-servlet.xml --&gt;
			&lt;init-param&gt;
				&lt;param-name&gt;contextConfigLocation&lt;/param-name&gt;
				&lt;param-value&gt;classpath:springmvc.xml&lt;/param-value&gt;
			&lt;/init-param&gt;
		&lt;/servlet&gt;

		&lt;servlet-mapping&gt;
			&lt;servlet-name&gt;springmvc-first&lt;/servlet-name&gt;
				&lt;!-- 设置所有以action结尾的请求进入SpringMVC --&gt;
				&lt;url-pattern&gt;*.action&lt;/url-pattern&gt;
			&lt;/servlet-mapping&gt;
		&lt;/web-app&gt;
		在web.Xml中用dispathcherservlet然后Alt+/提示然后配置一下就行
	
	加入jsp页面
	把itemList.jsp放到/WEB-INF/jsp目录
	&lt;c:forEach items=&quot;\${itemList }&quot; var=&quot;item&quot;&gt;
		&lt;tr&gt;
			&lt;td&gt;\${item.name }&lt;/td&gt;
			&lt;td&gt;\${item.price }&lt;/td&gt;
			&lt;td&gt;&lt;fmt:formatDate value=&quot;\${item.createtime}&quot; pattern=&quot;yyyy-MM-dd HH:mm:ss&quot;/&gt;&lt;/td&gt;
			&lt;td&gt;\${item.detail }&lt;/td&gt;
			&lt;td&gt;
				&lt;a href=&quot;\${pageContext.request.contextPath}/itemEdit.action?id=\${item.id}&quot;&gt;修改&lt;/a&gt;
			&lt;/td&gt;
		&lt;/tr&gt;
	&lt;/c:forEach&gt;

	创建pojo
	public class Item {
		private int id;
		private String name;
		private double price;
		private Date createtime;
		private String detail;
		创建带参数的构造器
		set/get。。。
		}

	创建ItemController类，不需要实现任何接口。
	在类上添加@Controller注解，把Controller交由Spring管理
		在方法上面添加@RequestMapping注解，里面指定请求的url。
		其中“.action”可以加也可以不加。
		@Controller
		public class ItemController {
			@RequestMapping(&quot;/itemList.action&quot;)
			public ModelAndView queryItemList() {
				List&lt;Item&gt; list = new ArrayList&lt;&gt;();
				list.add(new Item(1, &quot;1华为 荣耀8&quot;, 2399, new Date(), &quot;质量好！1&quot;));
				list.add(new Item(2, &quot;2华为 荣耀8&quot;, 2399, new Date(), &quot;质量好！2&quot;));
				list.add(new Item(3, &quot;3华为 荣耀8&quot;, 2399, new Date(), &quot;质量好！3&quot;));
				list.add(new Item(4, &quot;4华为 荣耀8&quot;, 2399, new Date(), &quot;质量好！4&quot;));
				list.add(new Item(5, &quot;5华为 荣耀8&quot;, 2399, new Date(), &quot;质量好！5&quot;));
				list.add(new Item(6, &quot;6华为 荣耀8&quot;, 2399, new Date(), &quot;质量好！6&quot;));

				ModelAndView modelAndView = new ModelAndView();
				modelAndView.addObject(&quot;list&quot;, list);
				modelAndView.setViewName(&quot;/WEB-INF/jsp/itemList.jsp&quot;);

				//或者像下面这么写
				// 创建ModelAndView，用来存放数据和视图
				//ModelAndView modelAndView = new ModelAndView();
				// 设置数据到模型中
				//modelAndView.addObject(&quot;itemList&quot;, list);
				// 设置视图jsp，需要设置视图的物理地址
				// modelAndView.setViewName(&quot;/WEB-INF/jsp/itemList.jsp&quot;);
				// 配置好视图解析器前缀和后缀，这里只需要设置逻辑视图就可以了。
				// 视图解析器根据前缀+逻辑视图名+后缀拼接出来物理路径
				//modelAndView.setViewName(&quot;itemList&quot;);
				//return modelAndView;

				return modelAndView;
			}
		}
	启动项目测试
	浏览器访问地址http://127.0.0.1:8080/springmvc-first/itemList.action
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_6-springmvc-配置" tabindex="-1"><a class="header-anchor" href="#_6-springmvc-配置"><span>6. springmvc 配置</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	组件扫描器(省去在spring容器配置每个Controller类的繁琐)
	使用&lt;context:component-scan&gt;自动扫描标记@Controller的控制器类，
	在springmvc.xml配置文件中配置如下：
	&lt;!-- 配置controller扫描包，多个包之间用,分隔 --&gt;
	&lt;context:component-scan base-package=&quot;cn.test.springmvc&quot; /&gt;
	
	注解驱动（省去直接配置处理器映射器和处理器适配器的麻烦）
	SpringMVC使用&lt;mvc:annotation-driven&gt;
	自动加载RequestMappingHandlerMapping和RequestMappingHandlerAdapter
	&lt;!-- 注解驱动 --&gt;
	&lt;mvc:annotation-driven /&gt;
	
	视图解析器
	视图解析器使用SpringMVC框架默认的InternalResourceViewResolver（）
	这个视图解析器支持JSP视图解析
	在springmvc.xml配置文件中配置如下：
	&lt;!-- Example: prefix=&quot;/WEB-INF/jsp/&quot;,suffix=&quot;.jsp&quot;,viewname=&quot;test&quot; -&gt; 
	&quot;/WEB-INF/jsp/test.jsp&quot; --&gt;
	&lt;!-- 配置视图解析器 --&gt;
	&lt;bean class=&quot;org.springframework.web.servlet.view.InternalResourceViewResolver&quot;&gt;
		&lt;!-- 配置逻辑视图的前缀 --&gt;
		&lt;property name=&quot;prefix&quot; value=&quot;/WEB-INF/jsp/&quot; /&gt;
		&lt;!-- 配置逻辑视图的后缀 --&gt;
		&lt;property name=&quot;suffix&quot; value=&quot;.jsp&quot; /&gt;
	&lt;/bean&gt;
	逻辑视图名需要在controller中返回ModelAndView指定，
	比如逻辑视图名为ItemList，则最终返回的jsp视图地址:
	“WEB-INF/jsp/itemList.jsp”
	最终jsp物理地址：前缀+逻辑视图名+后缀
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_7-handler配置" tabindex="-1"><a class="header-anchor" href="#_7-handler配置"><span>7. Handler配置</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>参数绑定（接受请求参数的方法）
处理器形参中添加如下类型的参数处理适配器会默认识别并进行赋值。
HttpServletRequest:通过request对象获取请求信息public String editItem(HttpServletRequest request)
HttpServletResponse:通过response处理响应信息public String editItem(HttpServletResponse response)
HttpSession:通过session对象得到session中存放的对象public String editItem(HttpSession session)
简单数据类型(基本数据类型，基本类型包装类)参数类型推荐使用包装数据类型，因为基础数据类型不可以为null
public String editItem(Model model,Integer id,Boolean status) 请求url：http://localhost:8080/xxx.action?id=2&amp;status=false

@RequestParam:常用于处理简单类型的绑定。
value：请求参数名字，required：是否必须，默认是true、defaultValue：默认值，表示如果请求中没有同名参数时的默认值
public String queryItemById(@RequestParam(value = &quot;itemId&quot;, required = true, defaultValue = &quot;1&quot;) Integer id)

使用pojo对象接收表单数据（提交内容很多的时候）
要求：pojo对象中的属性名和表单中input的name属性一致
前端：name=&quot;pojo对象的属性名&quot; value=&quot;\${pojo.属性名}&quot;
后端：test(pojo){}
pojo定义对应的属性并生成set/get方法
请求的参数名称和pojo的属性名称一致，会自动将请求参数赋值给pojo的属性。
注意：提交的表单中不要有日期类型的数据，否则会报400错误。
如果想提交日期类型的数据需要用到后面的自定义参数绑定的内容。

使用绑定包装pojo（内部类）
前端：name=&quot;内部类.内部属性名&quot; value=&quot;外部类.内部类.内部属性名&quot;
后端：定义pojo内部类
定义参数接收
@RequestMapping(&quot;/queryItem&quot;)
	public String queryItem(QueryVo queryVo) {
	System.out.println(queryVo.getItem().getId());
	System.out.println(queryVo.getItem().getName());
	return &quot;success&quot;;
}

自定义参数绑定（自定义日期格式）
	可以在springmvc处理器适配器上自定义转换器Converter进行参数绑定。
	一般使用&lt;mvc:annotation-driven/&gt;注解驱动加载处理器适配器，可以在此标签上进行配置。
	前端
	&lt;input type=&quot;text&quot; name=&quot;items.createtime&quot; value=&quot;&lt;fmt:formatDate value=&quot;\${item.createtime}&quot; pattern=&quot;yyyy-MM-dd HH:mm:ss&quot;/&gt;&quot; /&gt;
	后端自定义Converter，
	//Converter&lt;S, T&gt;
	//S:source,需要转换的源的类型
	//T:target,需要转换的目标类型
	public class DateConverter implements Converter&lt;String, Date&gt; {
		@Override
		public Date convert(String source) {
			try {
				// 把字符串转换为日期类型
				SimpleDateFormat simpleDateFormat = 
				new SimpleDateFormat(&quot;yyy-MM-dd HH:mm:ss&quot;);
				Date date = simpleDateFormat.parse(source);
				return date;
			} catch (ParseException e) {
				e.printStackTrace();
			}
			// 如果转换异常则返回空
			return null;
		}
	}
	springmvc.xml配置Converter 同时可以配置多个的转换器。
	&lt;!-- 配置注解驱动 --&gt;
	&lt;!-- 如果配置此标签,可以不用配置... --&gt;
	&lt;mvc:annotation-driven conversion-service=&quot;conversionService&quot; /&gt;

	&lt;!-- 转换器配置 --&gt;
	&lt;bean id=&quot;conversionService&quot; class=&quot;org.springframework.format.support.FormattingConversionServiceFactoryBean&quot;&gt;
		&lt;property name=&quot;converters&quot;&gt;
		&lt;set&gt;
			&lt;bean class=&quot;cn.itcast.springmvc.converter.DateConverter&quot; /&gt;
		&lt;/set&gt;
		&lt;/property&gt;
	&lt;/bean&gt;
绑定数组
	前端 &lt;c:forEach item=&quot;\${itemList}&quot; var=&quot;item&quot;&gt;
			&lt;input type=&quot;checkbox&quot; name=&quot;ids&quot; value=&quot;\${item.id}&quot;/&gt;
			&lt;input type=&quot;checkbox&quot; name=&quot;ids&quot; value=&quot;\${item.id}&quot;/&gt;
		&lt;/c:forEach&gt;
	后端：pojo中定义private integer[] ids;生成set/get方法
	包装类型 绑定数组类型，可以使用两种方式，pojo的属性接收和直接接收
	@RequestMapping(&quot;queryItem&quot;)
	public String queryItem(QueryVo queryVo, Integer[] ids) {
		System.out.println(queryVo.getItem().getId());
		System.out.println(queryVo.getIds().length);
		System.out.println(ids.length);
		return &quot;success&quot;;
	}
绑定List
	后端：在pojo中定义private List&lt;Item&gt; itemList;生成set/get方法
	前端页面：name属性必须是list属性名+下标+元素属性。
	&lt;c:forEach items=&quot;\${itemList }&quot; var=&quot;item&quot; varStatus=&quot;s&quot;&gt;
		&lt;tr&gt;
			&lt;td&gt;&lt;input type=&quot;checkbox&quot; name=&quot;ids&quot; value=&quot;\${item.id}&quot;/&gt;&lt;/td&gt;
		&lt;td&gt;
			&lt;input type=&quot;hidden&quot; name=&quot;itemList[\${s.index}].id&quot; value=&quot;\${item.id }&quot;/&gt;
			&lt;input type=&quot;text&quot; name=&quot;itemList[\${s.index}].name&quot; value=&quot;\${item.name }&quot;/&gt;
		&lt;/td&gt;
		&lt;/tr&gt;
	&lt;/c:forEach&gt;
	\${current}	当前这次迭代的（集合中的）项
	\${status.first}	判断当前项是否为集合中的第一项，返回值为true或false
	\${status.last}	判断当前项是否为集合中的最
	varStatus属性常用参数总结下：
	\${status.index}	输出行号，从0开始。
	\${status.count}	输出行号，从1开始。
	\${status.后一项，返回值为true或false
	begin、end、step分别表示：起始序号，结束序号，跳跃步伐。
	接收List类型的数据必须是pojo的属性，如果方法的形参为ArrayList类型无法正确接收到数据
我们需要从url上获取商品id，步骤如下：
	1.@RequestMapping(&quot;item/{id}&quot;)声明请求的url
	{xxx}叫做占位符，请求的URL可以是“item /1”或“item/2”
	2.使用(@PathVariable() Integer id)获取url上的数据	
	* 使用RESTful风格开发接口，实现根据id查询商品
	@RequestMapping(&quot;item/{id}&quot;)
	@ResponseBody
	public Item queryItemById(@PathVariable() Integer id) {
		Item item = this.itemService.queryItemById(id);
		return item;
	}
	如果@RequestMapping中表示为&quot;item/{id}&quot;，id和形参名称一致，
	@PathVariable不用指定名称。如果不一致，例如&quot;item/{ItemId}&quot;
	则需要指定名称@PathVariable(&quot;itemId&quot;)。

	http://127.0.0.1/item/123?id=1
	注意两个区别
	1.@PathVariable是获取url上数据的。@RequestParam获取请求参数的（包括post表单提交）
	2.如果加上@ResponseBody注解，就不会走视图解析器，
	不会返回页面，目前返回的json数据。如果不加，就走视图解析器，返回页面
	@RequestMapping(&quot;/hello&quot;)//接收所有hello路径的请求
		public String index(参数名与接收的参数名一致) {
		return &quot;Hello World&quot;;
		}
### 指定前端url请求参数名称与方法名一致
### 通过HttpServletRequest来获取前端页面参数
### 创建一个JavaBean对象来封装表单参数或者是请求url路径中的参数
### 通过PathVariable注解来绑定请求路径的参数
### 通过RequestParam注解来获取
## springboot返回参数

### 返回jsp页面（undertow不支持jsp）
	值得注意的是，当我们使用Spring Boot 2.0 想要返回页面而不是提供json或者xml数据接口的时候，
		切记不能再使用@RestController了,只能使用@Controller.

@RequestMapping：定义不同的处理器映射规则，URL路径映射
	添加在方法上面
	@RequestMapping(&quot;/item&quot;）
	value的值是数组，可以将多个url映射到同一个方法
	@RequestMapping(value = { &quot;/itemList&quot;, &quot;/itemListAll&quot; })
	public ModelAndView queryItemList() {
		List&lt;Item&gt; list = this.itemService.queryItemList();
		ModelAndView mv = new ModelAndView(&quot;itemList&quot;);
		mv.addObject(&quot;itemList&quot;, list);
		return mv;
	}

	添加在类上面 在class上添加@RequestMapping(url)指定通用请求前缀， 
	限制此类下的所有方法请求url必须以请求前缀开头，可以使用此方法对url进行分类管理
	@controller
	@RequestMapping(&quot;item&quot;)
	public class ItemController{
		@RequestMapping(value = { &quot;itemList&quot;, &quot;itemListAll&quot; })
		public ModelAndView queryItemList() {
		}
	}
	此时需要进入queryItemList()方法的请求url为：
	http://127.0.0.1:8080/springmvc-web2/item/itemList.action
	或者
	http://127.0.0.1:8080/springmvc-web2/item/itemListAll.action

请求方法限定 
	限定GET方法
	@RequestMapping(method = RequestMethod.GET)如果通过POST访问则报错：
	HTTP Status 405 - Request method &#39;POST&#39; not supported
	@RequestMapping(value = &quot;itemList&quot;,method = RequestMethod.POST)
	限定POST方法
	@RequestMapping(method = RequestMethod.POST)
	如果通过GET访问则报错：HTTP Status 405 - Request method &#39;GET&#39; not supported
	
	GET和POST都可以@RequestMapping(method = {RequestMethod.GET,RequestMethod.POST})

Controller方法返回值
	返回ModelAndView
	controller方法中定义ModelAndView对象并返回，可添加model数据、指定view
	
	返回void
	request转发
	request.getRequestDispatcher(&quot;页面路径&quot;).forward(request, response);
	request.getRequestDispatcher(&quot;/WEB-INF/jsp/success.jsp&quot;).forward(request, response);
	response重定向
	response.sendRedirect(&quot;url&quot;)
	response.sendRedirect(&quot;/springmvc-web2/itemEdit.action&quot;);
	response指定响应结果，例如响应json数据
	response.getWriter().print(&quot;{\\&quot;abc\\&quot;:123}&quot;);
	
	返回字符串
	逻辑视图名
	controller方法返回字符串可以指定逻辑视图名，通过视图解析器解析为物理视图地址。
	/WEB-INF/jsp/itemList.jsp
	return &quot;itemList&quot;;
	Redirect重定向
	Contrller方法返回字符串可以重定向到一个url地址,重定向后浏览器地址栏变更为重定向的地址，
	重定向相当于执行了新的request和response，所以之前的请求参数都会丢失
	如果要指定请求参数，需要在重定向的url后面添加 ?itemId=1 这样的请求参数
	return &quot;redirect:/itemEdit.action?itemId=&quot; + item.getId();
	forward转发
	Controller方法执行后继续执行另一个Controller方法
	修改商品成功后，继续执行另一个方法,使用转发的方式实现。转发后浏览器地址栏还是原来的请求地址，
	转发并没有执行新的request和response，所以之前的请求参数都存在
	return &quot;forward:/itemEdit.action&quot;;

	Model/ModelMap（返回处理结果给页面的方法）
	Model
	除了ModelAndView以外，还可以使用Model来向页面传递数据
	Model是一个接口，在参数里直接声明model即可
	如果使用Model则可以不使用ModelAndView对象，
	Model对象可以向页面传递数据，View对象则可以使用String返回值替代。
	不管是Model还是ModelAndView，其本质都是使用Request对象向jsp传递数据。
	@RequestMapping(&quot;/itemEdit&quot;)
	public String queryItemById(HttpServletRequest request, Model model) {
		// ModelAndView modelAndView = new ModelAndView();
		// modelAndView.addObject(&quot;item&quot;, item);
		// 设置逻辑视图
		// modelAndView.setViewName(&quot;itemEdit&quot;);

		model.addAttribute(&quot;item&quot;, item);
		return &quot;itemEdit&quot;;
	}
	ModelMap
	ModelMap是Model接口的实现类，也可以通过ModelMap向页面传递数据
	使用Model和ModelMap的效果一样，如果直接使用Model，
	springmvc会实例化ModelMap。
	@RequestMapping(&quot;/itemEdit&quot;)
	public String queryItemById(HttpServletRequest request, ModelMap model) {
		model.addAttribute(&quot;item&quot;, item);
		return &quot;itemEdit&quot;;
	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_8-异常处理器" tabindex="-1"><a class="header-anchor" href="#_8-异常处理器"><span>8. 异常处理器</span></a></h1><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/3687ac6947ed3a8f15d51.png" alt="异常.png" tabindex="0"><figcaption>异常.png</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	系统的dao、service、controller出现都通过throws Exception向上抛出，最后由springmvc前端控制器交由异常处理器进行异常处理，

	自定义异常类
	如果controller、service、dao抛出此类异常说明是系统预期处理的异常信息。
	public class MyException extends Exception {
		private String message;
		public MyException() {
			super();
		}
		public MyException(String message) {
			super();
			this.message = message;
		}
		public String getMessage() {
			return message;
		}
		public void setMessage(String message) {
			this.message = message;
		}
	}
	自定义异常处理器
	public class CustomHandleException implements HandlerExceptionResolver {
		@Override
		public ModelAndView resolveException(HttpServletRequest request, HttpServletResponse response, Object handler,Exception exception) {
			String msg;
			if (exception instanceof MyException) {
				// 如果是自定义异常，读取异常信息
				msg = exception.getMessage();
			} else {
				// 如果是运行时异常，则取错误堆栈，从堆栈中获取异常信息
				Writer out = new StringWriter();
				PrintWriter s = new PrintWriter(out);
				exception.printStackTrace(s);
				msg = out.toString();
			}
			// 把错误信息发给相关人员,邮件,短信等方式
			// 返回错误页面，给用户友好页面显示错误信息
			ModelAndView modelAndView = new ModelAndView();
			modelAndView.addObject(&quot;msg&quot;, msg);
			modelAndView.setViewName(&quot;error&quot;);
			return modelAndView;
		}
	}
	
	在springmvc.xml中添加：
	&lt;!-- 配置全局异常处理器 --&gt;
	&lt;bean id=&quot;customHandleException&quot; class=&quot;cn.itcast.ssm.exception.CustomHandleException&quot;/&gt;

	错误页面
	&lt;%@ page language=&quot;java&quot; contentType=&quot;text/html; charset=UTF-8&quot;
		pageEncoding=&quot;UTF-8&quot;%&gt;
		&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD HTML 4.01 Transitional//EN&quot; &quot;
		http://www.w3.org/TR/html4/loose.dtd&quot;&gt;
		&lt;html&gt;
	&lt;head&gt;
		&lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=UTF-8&quot;&gt;
		&lt;title&gt;Insert title here&lt;/title&gt;
	&lt;/head&gt;
	&lt;body&gt;
		&lt;h1&gt;异常信息&lt;/h1&gt;&lt;br /&gt;
		&lt;h2&gt;\${msg }&lt;/h2&gt;
	&lt;/body&gt;
	&lt;/html&gt;
	异常测试
	修改ItemController方法“queryItemList”，抛出异常：
	@RequestMapping(value = { &quot;itemList&quot;, &quot;itemListAll&quot; })
	public ModelAndView queryItemList() throws Exception {
		// 自定义异常
		if (true) {
			throw new MyException(&quot;自定义异常出现了~&quot;);
		}
		// 运行时异常
		int a = 1 / 0;
		// 查询商品数据
		List&lt;Item&gt; list = this.itemService.queryItemList();
		// 创建ModelAndView,设置逻辑视图名
		ModelAndView mv = new ModelAndView(&quot;itemList&quot;);
		// 把商品数据放到模型中
		mv.addObject(&quot;itemList&quot;, list);
		return mv;
	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_9-ssm整合思路" tabindex="-1"><a class="header-anchor" href="#_9-ssm整合思路"><span>9. ssm整合思路</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>创建数据库和表
导入的jar包
aopalliance-1.0.jar
asm-3.3.1.jar
aspectjweaver-1.6.11.jar
cglib-2.2.2.jar
commons-dbcp-1.2.2.jar
commons-logging-1.1.1.jar
commons-pool-1.3.jar
javassist-3.17.1-GA.jar
jstl-1.2.jar
junit-4.9.jar
log4j-1.2.17.jar
log4j-api-2.0-rc1.jar
log4j-core-2.0-rc1.jar
mybatis-3.2.7.jar
mybatis-spring-1.2.2.jar
mysql-connector-java-5.1.7-bin.jar
slf4j-api-1.7.5.jar
slf4j-log4j12-1.7.5.jar
spring-aop-4.1.3.RELEASE.jar
spring-aspects-4.1.3.RELEASE.jar
spring-beans-4.1.3.RELEASE.jar
spring-context-4.1.3.RELEASE.jar
spring-context-support-4.1.3.RELEASE.jar
spring-core-4.1.3.RELEASE.jar
spring-expression-4.1.3.RELEASE.jar
spring-jdbc-4.1.3.RELEASE.jar
spring-jms-4.1.3.RELEASE.jar
spring-messaging-4.1.3.RELEASE.jar
spring-tx-4.1.3.RELEASE.jar
spring-web-4.1.3.RELEASE.jar
spring-webmvc-4.1.3.RELEASE.jar

创建动态web工程springmvc-web(2.5)

加入sqlMapConfig.xml配置文件

在src下创建SqlMapConfig.xml
&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;!DOCTYPE configuration
PUBLIC &quot;-//mybatis.org//DTD Config 3.0//EN&quot;
&quot;http://mybatis.org/dtd/mybatis-3-config.dtd&quot;&gt;
&lt;configuration&gt;
&lt;/configuration&gt;
加入UserMapper.xml配置文件
applicationContext-dao.xml
配置数据源、配置SqlSessionFactory、mapper扫描器。
&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
xmlns:context=&quot;http://www.springframework.org/schema/context&quot; xmlns:p=&quot;
http://www.springframework.org/schema/p&quot;
xmlns:aop=&quot;http://www.springframework.org/schema/aop&quot; xmlns:tx=&quot;
http://www.springframework.org/schema/tx&quot;
xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
xsi:schemaLocation=&quot;http://www.springframework.org/schema/beans 
http://www.springframework.org/schema/beans/spring-beans-4.0.xsd
http://www.springframework.org/schema/context 
http://www.springframework.org/schema/context/spring-context-4.0.xsd
http://www.springframework.org/schema/aop 
http://www.springframework.org/schema/aop/spring-aop-4.0.xsd 
http://www.springframework.org/schema/tx 
http://www.springframework.org/schema/tx/spring-tx-4.0.xsd
http://www.springframework.org/schema/util 
http://www.springframework.org/schema/util/spring-util-4.0.xsd&quot;&gt;
&lt;!-- 加载配置文件 --&gt;
	&lt;context:property-placeholder location=&quot;classpath:db.properties&quot; /&gt;
	&lt;bean id=&quot;dataSource&quot; class=&quot;org.apache.commons.dbcp.BasicDataSource&quot; destroy-method=&quot;close&quot;&gt;
		&lt;property name=&quot;driverClassName&quot; value=&quot;\${jdbc.driver}&quot; /&gt;
		&lt;property name=&quot;url&quot; value=&quot;\${jdbc.url}&quot; /&gt;
		&lt;property name=&quot;username&quot; value=&quot;\${jdbc.username}&quot; /&gt;
		&lt;property name=&quot;password&quot; value=&quot;\${jdbc.password}&quot; /&gt;
		&lt;property name=&quot;maxActive&quot; value=&quot;10&quot; /&gt;
		&lt;property name=&quot;maxIdle&quot; value=&quot;5&quot; /&gt;
	&lt;/bean&gt;
	&lt;!-- 配置SqlSessionFactory --&gt;
	&lt;bean id=&quot;sqlSessionFactory&quot; class=&quot;org.mybatis.spring.SqlSessionFactoryBean&quot;&gt;
		&lt;property name=&quot;dataSource&quot; ref=&quot;dataSource&quot; /&gt;
		&lt;property name=&quot;configLocation&quot; value=&quot;classpath:mybatis/SqlMapConfig.xml&quot; /&gt;
	&lt;/bean&gt;
	&lt;!-- 配置Mapper扫描 --&gt;
	&lt;bean class=&quot;org.mybatis.spring.mapper.MapperScannerConfigurer&quot;&gt;
		&lt;!-- 配置Mapper的接口所在的扫描包，
		同时默认扫描了同包下的同类名的Mapper.xml文件 mapper接口方式开发，
		整合后的spring默认加载与接口同包下与接口同名的Mapper文件，
		而dao开发就要手动配置mapper的位置，如果没找到就报错，
		可以在sqlMapperConfig.xml配置mapper resourc解决--&gt;
		&lt;property name=&quot;basePackage&quot; value=&quot;cn.itcast.ssm.mapper&quot; /&gt;
	&lt;/bean&gt;
&lt;/beans&gt;

db.properties
applicationContext-service.xml
&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
	xmlns:context=&quot;http://www.springframework.org/schema/context&quot; 
	xmlns:p=&quot;http://www.springframework.org/schema/p&quot;
	xmlns:aop=&quot;http://www.springframework.org/schema/aop&quot; xmlns:tx=&quot;
	http://www.springframework.org/schema/tx&quot;
	xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
	xsi:schemaLocation=&quot;http://www.springframework.org/schema/beans 
	http://www.springframework.org/schema/beans/spring-beans-4.0.xsd
	http://www.springframework.org/schema/context 
	http://www.springframework.org/schema/context/spring-context-4.0.xsd
	http://www.springframework.org/schema/aop 
	http://www.springframework.org/schema/aop/spring-aop-4.0.xsd 
	http://www.springframework.org/schema/tx 
	http://www.springframework.org/schema/tx/spring-tx-4.0.xsd
	http://www.springframework.org/schema/util 
	http://www.springframework.org/schema/util/spring-util-4.0.xsd&quot;&gt;
&lt;!-- 配置service扫描 --&gt;
	&lt;context:component-scan base-package=&quot;cn.itcast.ssm.service&quot; /&gt;
&lt;/beans&gt;

applicationContext-trans.xml
&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
	xmlns:context=&quot;http://www.springframework.org/schema/context&quot; xmlns:p=&quot;
	http://www.springframework.org/schema/p&quot;
	xmlns:aop=&quot;http://www.springframework.org/schema/aop&quot; xmlns:tx=&quot;
	http://www.springframework.org/schema/tx&quot;
	xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
	xsi:schemaLocation=&quot;http://www.springframework.org/schema/beans 
	http://www.springframework.org/schema/beans/spring-beans-4.0.xsd
	http://www.springframework.org/schema/context 
	http://www.springframework.org/schema/context/spring-context-4.0.xsd
	http://www.springframework.org/schema/aop 
	http://www.springframework.org/schema/aop/spring-aop-4.0.xsd 
	http://www.springframework.org/schema/tx 
	http://www.springframework.org/schema/tx/spring-tx-4.0.xsd
	http://www.springframework.org/schema/util 
	http://www.springframework.org/schema/util/spring-util-4.0.xsd&quot;&gt;
	&lt;!-- 事务管理器 --&gt;
	&lt;bean id=&quot;transactionManager&quot;class=&quot;org.springframework.jdbc.datasource.DataSourceTransactionManager&quot;&gt;
		&lt;!-- 数据源 --&gt;
		&lt;property name=&quot;dataSource&quot; ref=&quot;dataSource&quot; /&gt;
	&lt;/bean&gt;
	&lt;!-- 通知 --&gt;
	&lt;tx:advice id=&quot;txAdvice&quot; transaction-manager=&quot;transactionManager&quot;&gt;
		&lt;tx:attributes&gt;
			&lt;tx:method name=&quot;find*&quot; propagation=&quot;SUPPORTS&quot; read-only=&quot;true&quot; /&gt;
		&lt;/tx:attributes&gt;
	&lt;/tx:advice&gt;
	&lt;aop:config&gt;
		&lt;aop:advisor advice-ref=&quot;txAdvice&quot; pointcut=&quot;execution(* cn.itcast.ssm.service.*.*(..))&quot; /&gt;
	&lt;/aop:config&gt;
&lt;/beans&gt;
springmvc.xml
&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
	xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot; xmlns:p=&quot;
	http://www.springframework.org/schema/p&quot;
	xmlns:context=&quot;http://www.springframework.org/schema/context&quot;
	xmlns:mvc=&quot;http://www.springframework.org/schema/mvc&quot;
	xsi:schemaLocation=&quot;http://www.springframework.org/schema/beans 
	http://www.springframework.org/schema/beans/spring-beans-4.0.xsd
	http://www.springframework.org/schema/mvc
	http://www.springframework.org/schema/mvc/spring-mvc-4.0.xsd
	http://www.springframework.org/schema/context
	http://www.springframework.org/schema/context/spring-context-4.0.xsd&quot;&gt;
	&lt;!-- 配置controller扫描包 --&gt;
	&lt;context:component-scan base-package=&quot;cn.itcast.ssm.controller&quot; /&gt;
	&lt;!-- 注解驱动 --&gt;
	&lt;mvc:annotation-driven /&gt;
	&lt;!-- Example: prefix=&quot;/WEB-INF/jsp/&quot;, suffix=&quot;.jsp&quot;, viewname=&quot;test&quot;-&gt; 
	&quot;/WEB-INF/jsp/test.jsp&quot; --&gt;
	&lt;!-- 配置视图解析器 --&gt;
	&lt;bean class=&quot;org.springframework.web.servlet.view.InternalResourceViewResolver&quot;&gt;
		&lt;!-- 配置逻辑视图的前缀 --&gt;
		&lt;property name=&quot;prefix&quot; value=&quot;/WEB-INF/jsp/&quot; /&gt;
		&lt;!-- 配置逻辑视图的后缀 --&gt;
		&lt;property name=&quot;suffix&quot; value=&quot;.jsp&quot; /&gt;
	&lt;/bean&gt;
&lt;/beans&gt;

web.xml
&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;web-app xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
xmlns=&quot;http://java.sun.com/xml/ns/javaee&quot;
xsi:schemaLocation=&quot;http://java.sun.com/xml/ns/javaee 
http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd&quot;
id=&quot;WebApp_ID&quot; version=&quot;2.5&quot;&gt;
&lt;display-name&gt;springmvc-web&lt;/display-name&gt;
&lt;welcome-file-list&gt;
	&lt;welcome-file&gt;index.html&lt;/welcome-file&gt;
&lt;/welcome-file-list&gt;

&lt;context-param&gt;
	&lt;param-name&gt;contextConfigLocation&lt;/param-name&gt;
	&lt;param-value&gt;classpath:spring/applicationContext*.xml&lt;/param-value&gt;
&lt;/context-param&gt;

&lt;listener&gt;
	&lt;listener-class&gt;org.springframework.web.context.ContextLoaderListener&lt;/listener-class&gt;
&lt;/listener&gt;

&lt;servlet&gt;
	&lt;servlet-name&gt;springmvc-web&lt;/servlet-name&gt;
	&lt;servlet-class&gt;org.springframework.web.servlet.DispatcherServlet&lt;/servlet-class&gt;
	&lt;init-param&gt;
		&lt;param-name&gt;contextConfigLocation&lt;/param-name&gt;
		&lt;param-value&gt;classpath:spring/springmvc.xml&lt;/param-value&gt;
	&lt;/init-param&gt;
&lt;/servlet&gt;
&lt;servlet-mapping&gt;
	&lt;servlet-name&gt;springmvc-web&lt;/servlet-name&gt;
	&lt;url-pattern&gt;*.action&lt;/url-pattern&gt;
&lt;/servlet-mapping&gt;
&lt;/web-app&gt;

加入jsp页面
itemList.jsp和itemEdit.jsp到工程中

DAO开发
mapper.xml配置文件
使用逆向工程，生成配置文件，将生成的包复制粘贴到工程下面

ItemService接口
public interface ItemService {
	List&lt;Item&gt; queryItemList();
}

ItemServiceImpl实现类
@Service
public class ItemServiceImpl implements ItemService {
	@Autowired
	private ItemMapper itemMapper;
	@Override
	public List&lt;Item&gt; queryItemList() {
		List&lt;Item&gt; list = this.itemMapper.selectByExample(null);
		return list;
	}
}
ItemController
@Controller
public class ItemController {
	@Autowired
	private ItemService itemService;
	@RequestMapping(&quot;/itemList&quot;)
	public ModelAndView queryItemList() {
		// 获取商品数据
		List&lt;Item&gt; list = this.itemService.queryItemList();
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject(&quot;itemList&quot;, list);
		modelAndView.setViewName(&quot;itemList&quot;);
		return modelAndView;
	}

}
测试访问url：http://127.0.0.1:8080/springmvc-web/itemList.action
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_10-上传图片" tabindex="-1"><a class="header-anchor" href="#_10-上传图片"><span>10. 上传图片</span></a></h1>`,18),c=e("li",null,"在tomcat上配置图片虚拟目录，在tomcat下conf/server.xml中添加：",-1),o={href:"http://localhost:8080/pic%E5%8D%B3%E5%8F%AF%E8%AE%BF%E9%97%AED:%5Cdevelop%5Cupload%5Ctemp%E4%B8%8B%E7%9A%84%E5%9B%BE%E7%89%87%E3%80%82",target:"_blank",rel:"noopener noreferrer"},b=e("li",null,"也可以通过eclipse配置，如下图：",-1),p=e("li",null,"复制一张图片到存放图片的文件夹，使用浏览器访问",-1),g=e("li",null,"测试效果，并复制一张图片到存放图片的文件夹",-1),q=s(`<p><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/124e400cb9fbe7a173728.png" alt="上传1.png"><br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/9e2725e89c87cb0d490f1.png" alt="上传2.png"></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>加入jar包
实现图片上传需要加入的jar包，fileupload和io包、放到工程的lib文件夹中
在springmvc.xml中配置文件上传解析器
&lt;!-- 文件上传,id必须设置为multipartResolver --&gt;
&lt;bean id=&quot;multipartResolver&quot;class=&quot;org.springframework.web.multipart.commons.CommonsMultipartResolver&quot;&gt;
	!-- 设置文件上传大小 --&gt;
	&lt;property name=&quot;maxUploadSize&quot; value=&quot;5000000&quot; /&gt;
&lt;/bean&gt;

jsp页面修改
在商品修改页面，打开图片上传功能
&lt;tr&gt;
&lt;td&gt;商品图片&lt;/td&gt;
&lt;td&gt;
&lt;!-- 上传图片是需要指定属性 enctype=&quot;multipart/form-data&quot; --&gt;
&lt;form id=&quot;itemForm&quot; action=&quot;&quot; method=&quot;post&quot; enctype=&quot;multipart/form-data&quot;&gt;
	&lt;c:if test=&quot;\${item.pic !=null}&quot;&gt;
		&lt;img src=&quot;/pic/\${item.pic}&quot; width=100 height=100/&gt;&lt;br/&gt;
	&lt;/c:if&gt;
	&lt;input type=&quot;file&quot;  name=&quot;pictureFile&quot;/&gt; 
&lt;/form&gt;
&lt;/td&gt;
&lt;/tr&gt;

图片上传方法
@RequestMapping(&quot;updateItem&quot;)
public String updateItemById(Item item, MultipartFile pictureFile) throws Exception {
	// 图片上传
	// 设置图片名称，不能重复，可以使用uuid
	String picName = UUID.randomUUID().toString();

	// 获取文件名
	String oriName = pictureFile.getOriginalFilename();
	// 获取图片后缀
	String extName = oriName.substring(oriName.lastIndexOf(&quot;.&quot;));

	// 开始上传
	pictureFile.transferTo(new File(&quot;C:/upload/image/&quot; + picName + extName));

	// 设置图片名到商品中
	item.setPic(picName + extName);
	// ---------------------------------------------
	// 更新商品
	this.itemService.updateItemById(item);

	return &quot;forward:/itemEdit.action&quot;;
}

json数据交互
@RequestBody
用于读取http请求的内容(字符串)，通过springmvc的HttpMessageConverter接口
将读到的内容（json数据）转换为java对象并绑定到Controller方法的参数上。

传统的请求参数：itemEdit.action?id=1&amp;name=zhangsan&amp;age=12
现在的请求参数：使用POST请求，在请求体里面加入json数据
{
	&quot;id&quot;: 1,
	&quot;name&quot;: &quot;测试商品&quot;,
	&quot;price&quot;: 99.9,
	&quot;detail&quot;: &quot;测试商品描述&quot;,
	&quot;pic&quot;: &quot;123456.jpg&quot;
}
	
@ResponseBody
用于将Controller的方法返回的对象，通过springmvc提供的HttpMessageConverter接口
转换为指定格式的数据如：json,xml等，通过Response响应给客户端
请求json，响应json实现：
加入jar包
jackson-annotations-2.4.0.jar
jackson-core-2.4.2.jar
jackson-databind-2.4.2.jar
ItemController编写
测试json的交互
@RequestMapping(&quot;testJson&quot;)
public @ResponseBody Item testJson(@RequestBody Item item) {
	return item;
}
	
配置json转换器
如果不使用注解驱动&lt;mvc:annotation-driven /&gt;，就需要给处理器适配器配置json转换器，
在springmvc.xml配置文件中，给处理器适配器加入json转换器：
&lt;!--处理器适配器 --&gt;
&lt;bean class=&quot;org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter&quot;&gt;
	&lt;property name=&quot;messageConverters&quot;&gt;
		&lt;list&gt;
		&lt;bean class=&quot;org.springframework.http.converter.json.
		MappingJacksonHttpMessageConverter&quot;&gt;&lt;/bean&gt;
		&lt;/list&gt;
	&lt;/property&gt;
&lt;/bean&gt;

解决post乱码问题
在web.xml中加入：
&lt;!-- 解决post乱码问题 --&gt;
&lt;filter&gt;
	&lt;filter-name&gt;encoding&lt;/filter-name&gt;
	&lt;filter-class&gt;org.springframework.web.filter.CharacterEncodingFilter&lt;/filter-class&gt;
	&lt;!-- 设置编码参是UTF8 --&gt;
	&lt;init-param&gt;
		&lt;param-name&gt;encoding&lt;/param-name&gt;
		&lt;param-value&gt;UTF-8&lt;/param-value&gt;
	&lt;/init-param&gt;
&lt;/filter&gt;
&lt;filter-mapping&gt;
	&lt;filter-name&gt;encoding&lt;/filter-name&gt;
	&lt;url-pattern&gt;/*&lt;/url-pattern&gt;
&lt;/filter-mapping&gt;

解决get请求乱码	
①修改tomcat配置文件添加编码与工程编码一致，如下：
&lt;Connector URIEncoding=&quot;utf-8&quot; connectionTimeout=&quot;20000&quot; port=&quot;8080&quot; protocol=&quot;HTTP/1.1&quot; redirectPort=&quot;8443&quot;/&gt;
②另外一种方法对参数进行重新编码：
String userName =new String(request.getParamter(&quot;userName&quot;).getBytes(&quot;ISO8859-1&quot;),&quot;utf-8&quot;)
ISO8859-1是tomcat默认编码，需要将tomcat编码后的内容按utf-8编码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_11-restful支持" tabindex="-1"><a class="header-anchor" href="#_11-restful支持"><span>11. RESTful支持</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	Restful就是一个资源定位及资源操作的风格。基于这个风格设计的软件可以更简洁，更有层次，更易于实现缓存等机制。
	
	资源：互联网所有的事物都可以被抽象为资源
	资源操作：使用POST、DELETE、PUT、GET，
	使用不同方法对资源进行操作。分别对应 添加、 删除、修改、查询。
	传统方式操作资源
	http://127.0.0.1/item/queryItem.action?id=1查询,GET
	http://127.0.0.1/item/saveItem.action新增,POST
	http://127.0.0.1/item/updateItem.action更新,POST
	http://127.0.0.1/item/deleteItem.action?id=1删除,GET或POST

	使用RESTful操作资源
	http://127.0.0.1/item/1查询,GET
	http://127.0.0.1/item新增,POST
	http://127.0.0.1/item更新,PUT
	http://127.0.0.1/item/1删除,DELETE

	需求
	RESTful方式实现商品信息查询，返回json数据
	从URL上获取参数
	使用RESTful风格开发的接口，根据id查询商品，接口地址是：
	http://127.0.0.1/item/1
		
	我们需要从url上获取商品id，步骤如下：
	1.@RequestMapping(&quot;item/{id}&quot;)声明请求的url
	{xxx}叫做占位符，请求的URL可以是“item /1”或“item/2”
	2.使用(@PathVariable() Integer id)获取url上的数据	
	* 使用RESTful风格开发接口，实现根据id查询商品
	@RequestMapping(&quot;item/{id}&quot;)
	@ResponseBody
	public Item queryItemById(@PathVariable() Integer id) {
		Item item = this.itemService.queryItemById(id);
		return item;
	}
	如果@RequestMapping中表示为&quot;item/{id}&quot;，id和形参名称一致，
	@PathVariable不用指定名称。如果不一致，例如&quot;item/{ItemId}&quot;
	则需要指定名称@PathVariable(&quot;itemId&quot;)。

	http://127.0.0.1/item/123?id=1
	注意两个区别
	1.@PathVariable是获取url上数据的。@RequestParam获取请求参数的（包括post表单提交）
	2.如果加上@ResponseBody注解，就不会走视图解析器，
	不会返回页面，目前返回的json数据。如果不加，就走视图解析器，返回页面
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_12-拦截器" tabindex="-1"><a class="header-anchor" href="#_12-拦截器"><span>12. 拦截器</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	Spring Web MVC 的处理器拦截器类似于Servlet开发中的过滤器Filter，用于对处理器进行预处理和后处理
	
	拦截器定义
	实现HandlerInterceptor接口，如下：
	public class HandlerInterceptor1 implements HandlerInterceptor {
		// controller执行后且视图返回后调用此方法
		// 这里可得到执行controller时的异常信息
		// 这里可记录操作日志
		@Override
		public void afterCompletion(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, Exception arg3)
			throws Exception {
			System.out.println(&quot;HandlerInterceptor1....afterCompletion&quot;);
		}

		// controller执行后但未返回视图前调用此方法
		// 这里可在返回用户前对模型数据进行加工处理，
		比如这里加入公用信息以便页面显示
		@Override
		public void postHandle(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, ModelAndView arg3)
			throws Exception {
			System.out.println(&quot;HandlerInterceptor1....postHandle&quot;);
		}

		// Controller执行前调用此方法
		// 返回true表示继续执行，返回false中止执行
		// 这里可以加入登录校验、权限拦截等
		@Override
		public boolean preHandle(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2) throws Exception {
			System.out.println(&quot;HandlerInterceptor1....preHandle&quot;);
			// 设置为true，测试使用
			return true;
		}
	}
	
	拦截器配置
	上面定义的拦截器再复制一份HandlerInterceptor2，注意新的拦截器修改代码：
	System.out.println(&quot;HandlerInterceptor2....preHandle&quot;);
	
	在springmvc.xml中配置拦截器
	&lt;!-- 配置拦截器 --&gt;
	&lt;mvc:interceptors&gt;
		&lt;mvc:interceptor&gt;
			&lt;!-- 所有的请求都进入拦截器 --&gt;
			&lt;mvc:mapping path=&quot;/**&quot; /&gt;
			&lt;!-- 配置具体的拦截器 --&gt;
			&lt;bean class=&quot;cn.itcast.ssm.interceptor.HandlerInterceptor1&quot; /&gt;
		&lt;/mvc:interceptor&gt;
		&lt;mvc:interceptor&gt;	
			&lt;mvc:mapping path=&quot;/**&quot; /&gt;
			&lt;bean class=&quot;cn.itcast.ssm.interceptor.HandlerInterceptor2&quot; /&gt;
		&lt;/mvc:interceptor&gt;
	&lt;/mvc:interceptors&gt;

	正常流程测试
	浏览器访问地址http://127.0.0.1:8080/springmvc-web2/itemList.action
	运行流程

	HandlerInterceptor1..preHandle..
	HandlerInterceptor2..preHandle..

	HandlerInterceptor2..postHandle..
	HandlerInterceptor1..postHandle..

	HandlerInterceptor2..afterCompletion..
	HandlerInterceptor1..afterCompletion..
	
	中断流程测试
	浏览器访问地址http://127.0.0.1:8080/springmvc-web2/itemList.action

	运行流程
	HandlerInterceptor1的preHandler方法返回false，
	HandlerInterceptor2返回true，运行流程如下：
	HandlerInterceptor1..preHandle..

	从日志看出第一个拦截器的preHandler方法返回false
	后第一个拦截器只执行了preHandler方法，其它两个方法没有执行，
	第二个拦截器的所有方法不执行，且Controller也不执行了。


	HandlerInterceptor1的preHandler方法返回true，
	HandlerInterceptor2返回false，运行流程如下：
	HandlerInterceptor1..preHandle..
	HandlerInterceptor2..preHandle..
	HandlerInterceptor1..afterCompletion..

	从日志看出第二个拦截器的preHandler方法返回false
	后第一个拦截器的postHandler没有执行，
	第二个拦截器的postHandler和afterCompletion没有执行，且controller也不执行了。

	总结：
	preHandle按拦截器定义顺序调用
	postHandler按拦截器定义逆序调用
	afterCompletion按拦截器定义逆序调用

	postHandler在拦截器链内所有拦截器返成功调用
	afterCompletion只有preHandle返回true才调用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function w(h,x){const l=n("Context"),d=n("ExternalLinkIcon");return a(),v("div",null,[m,e("ul",null,[e("li",null,[i("配置虚拟目录 "),e("ul",null,[c,e("li",null,[t(l,{docBase:"D:\\develop\\upload\\temp",path:"/pic",reloadable:"false"})]),e("li",null,[i("访问"),e("a",o,[i("http://localhost:8080/pic即可访问D:\\develop\\upload\\temp下的图片。"),t(d)])]),b,p,g])])]),q])}const S=r(u,[["render",w],["__file","springmvc.html.vue"]]),j=JSON.parse('{"path":"/backend/webframework/springmvc.html","title":"springmvc","lang":"zh-CN","frontmatter":{"title":"springmvc","date":"2023-01-01T00:00:00.000Z","tags":"springmvc","categories":"后端","description":"springmvc 2. Springmvc概述 3. springmvc与struts2不同 5. springmvc入门 6. springmvc 配置 7. Handler配置 8. 异常处理器 9. ssm整合思路 10. 上传图片 11. RESTful支持 12. 拦截器 2. Springmvc概述 Spring web mvc和Stru...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/webframework/springmvc.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"springmvc"}],["meta",{"property":"og:description","content":"springmvc 2. Springmvc概述 3. springmvc与struts2不同 5. springmvc入门 6. springmvc 配置 7. Handler配置 8. 异常处理器 9. ssm整合思路 10. 上传图片 11. RESTful支持 12. 拦截器 2. Springmvc概述 Spring web mvc和Stru..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/be7cbdbe994b2221f35c0.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"springmvc\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/be7cbdbe994b2221f35c0.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/3687ac6947ed3a8f15d51.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/124e400cb9fbe7a173728.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/9e2725e89c87cb0d490f1.png\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":22.21,"words":6664},"filePathRelative":"backend/webframework/springmvc.md","localizedDate":"2023年1月1日","excerpt":"<p>springmvc</p>\\n<!--more-->\\n<!-- TOC -->\\n<ul>\\n<li><a href=\\"#2-springmvc%E6%A6%82%E8%BF%B0\\">2. Springmvc概述</a></li>\\n<li><a href=\\"#3-springmvc%E4%B8%8Estruts2%E4%B8%8D%E5%90%8C\\">3. springmvc与struts2不同</a></li>\\n<li><a href=\\"#5-springmvc%E5%85%A5%E9%97%A8\\">5. springmvc入门</a></li>\\n<li><a href=\\"#6-springmvc-%E9%85%8D%E7%BD%AE\\">6. springmvc 配置</a></li>\\n<li><a href=\\"#7-handler%E9%85%8D%E7%BD%AE\\">7. Handler配置</a></li>\\n<li><a href=\\"#8-%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86%E5%99%A8\\">8. 异常处理器</a></li>\\n<li><a href=\\"#9-ssm%E6%95%B4%E5%90%88%E6%80%9D%E8%B7%AF\\">9. ssm整合思路</a></li>\\n<li><a href=\\"#10-%E4%B8%8A%E4%BC%A0%E5%9B%BE%E7%89%87\\">10. 上传图片</a></li>\\n<li><a href=\\"#11-restful%E6%94%AF%E6%8C%81\\">11. RESTful支持</a></li>\\n<li><a href=\\"#12-%E6%8B%A6%E6%88%AA%E5%99%A8\\">12. 拦截器</a></li>\\n</ul>","autoDesc":true}');export{S as comp,j as data};
