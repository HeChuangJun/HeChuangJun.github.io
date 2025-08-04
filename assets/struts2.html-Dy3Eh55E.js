import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as a,c as r,a as t,b as e,d,e as n}from"./app-7KT7HDzT.js";const u={},o=n(`<p>struts2</p><ul><li><a href="#1-struts2%E8%AE%BF%E9%97%AE%E6%B5%81%E7%A8%8B%E6%9E%B6%E6%9E%84%E4%BB%8B%E7%BB%8D">1. struts2访问流程&amp;架构&amp;介绍</a></li><li><a href="#2-%E6%90%AD%E5%BB%BAstruts2%E6%A1%86%E6%9E%B6">2. 搭建struts2框架</a></li><li><a href="#3-strustxml%E9%85%8D%E7%BD%AE%E8%AF%A6%E8%A7%A3">3. strust.xml配置详解</a></li><li><a href="#4-action%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F">4. Action生命周期</a></li><li><a href="#5-actioncontext%E5%86%85%E5%AE%B9">5. ActionContext内容</a></li><li><a href="#6-%E8%AE%BF%E9%97%AEservletapi%E6%96%B9%E5%BC%8F">6. 访问servletAPI方式</a></li><li><a href="#7-jsp%E8%8E%B7%E5%BE%97">7. jsp获得</a></li><li><a href="#8-action%E6%8E%A5%E6%94%B6%E5%8F%82%E6%95%B0">8. Action接收参数</a></li><li><a href="#9-strutshibernate%E7%9A%84javassist-3181-gajar%E5%8C%85%E9%87%8D%E5%A4%8D%E5%88%A0%E9%99%A4%E7%89%88%E6%9C%AC%E4%BD%8E%E7%9A%84">9. struts、hibernate的javassist-3.18.1-GA.jar包重复,删除版本低的.</a></li><li><a href="#10-ognl%E8%A1%A8%E8%BE%BE%E5%BC%8F">10. OGNL表达式</a><ul><li><a href="#101-ognl%E4%B8%8Estruts2%E7%9A%84%E7%BB%93%E5%90%88%E5%8E%9F%E7%90%86">10.1. OGNL与Struts2的结合原理</a></li><li><a href="#102-struts2%E4%B8%8Eognl%E7%BB%93%E5%90%88%E4%BD%93%E7%8E%B0">10.2. struts2与ognl结合体现</a></li></ul></li><li><a href="#11-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8B%A6%E6%88%AA%E5%99%A8">11. 自定义拦截器</a></li><li><a href="#12-struts2%E6%A0%87%E7%AD%BE%E4%BA%86%E8%A7%A3">12. struts2标签(了解)</a></li><li><a href="#13-%E8%A1%A8%E7%8E%B0%E5%B1%82%E6%8A%BD%E5%8F%96">13. 表现层抽取</a></li><li><a href="#14-%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0">14. 文件上传</a></li><li><a href="#15-%E5%A4%84%E7%90%86ajax%E8%AF%B7%E6%B1%82">15. 处理Ajax请求</a></li></ul><h1 id="_1-struts2访问流程-架构-介绍" tabindex="-1"><a class="header-anchor" href="#_1-struts2访问流程-架构-介绍"><span>1. struts2访问流程&amp;架构&amp;介绍</span></a></h1><ul><li>自动封装参数、参数校验、结果的处理(转发|重定向)、国际化、显示等待页面、表单的防止重复提交</li><li>struts2前身：webwork框架(基于filter)与struts1(基于Servlet)两者无关.</li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/61bb9c3bcf7d5ee3f1d3a.png" alt="struts2.png" tabindex="0"><figcaption>struts2.png</figcaption></figure><h1 id="_2-搭建struts2框架" tabindex="-1"><a class="header-anchor" href="#_2-搭建struts2框架"><span>2. 搭建struts2框架</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>导包:web-content --&gt;web-INF--&gt;lib
asm-3.3.jar
asm-commons-3.3.jar
asm-tree-3.3.jar
commons-fileupload-1.3.1.jar
commons-io-2.2.jar
commons-lang3-3.2.jar
freemarker-2.3.22.jar
javassist-3.11.0.GA.jar
log4j-api-2.2.jar
log4j-core-2.2.jar
ognl-3.0.6.jar
struts2-core-2.3.24.jar
xwork-core-2.3.24.jar

在src下面创建*Action.java
	方法一：创建一个类.不继承任何父类.不实现任何接口.使struts2框架的代码侵入性更低.
	public class DemoAction {
		public String hello(){
			return &quot;success&quot;;
		}
	}
	方法二：实现一个接口Action
	import com.opensymphony.xwork2.Action;
	// 里面有execute方法,提供action方法的规范.
	// Action接口预置了一些字符串.可以在返回结果时使用.为了方便
	public class DemoAction implements Action {
		@Override
		public String execute() throws Exception {
			return null;
		}
	}
	方法三：继承ActionSupport
	// 帮我们实现了 Validateable, ValidationAware, TextProvider, LocaleProvider .
	//如果我们需要用到这些接口的实现时,不需要自己来实现了.
	public class Demo5Action  extends ActionSupport{}

创建struts主配置文件在src下创建struts.xml
导入约束window菜单--&gt; preference--&gt;cata 在web App Libraries--struts2-core-2.3.24.jar--struts-2.3.dtd
&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;!DOCTYPE struts PUBLIC
&quot;-//Apache Software Foundation//DTD Struts Configuration 2.3//EN&quot;
&quot;http://struts.apache.org/dtds/struts-2.3.dtd&quot;&gt;
&lt;struts&gt;
		&lt;!-- package:将Action配置封装.就是可以在Package中配置很多action.
			name属性: 给包起个名字,起到标识作用.随便起.不能其他包名重复.
			namespace属性:给action的访问路径中定义一个命名空间
			extends属性: 继承一个 指定包
			abstract属性:包是否为抽象的; 标识性属性.标识该包不能独立运行.专门被继承 --&gt;
	&lt;package name=&quot;hello&quot; namespace=&quot;/hello&quot; extends=&quot;struts-default&quot;&gt;
			&lt;!-- action元素:配置action类
				name属性: 决定了Action访问资源名.
				class属性: action的完整类名
				method属性: 指定调用Action中的哪个方法来处理请求 --&gt;
		&lt;action name=&quot;TestAction&quot; class=&quot;com.junye.test.HelloAction&quot; method=&quot;fun&quot;&gt;
			&lt;!-- result元素:结果配置 
				name属性: 标识结果处理的名称.与action方法的返回值对应.
				type属性: 指定调用哪一个result类来处理结果,默认使用转发.
				标签体:填写页面的相对路径--&gt;
			&lt;result name=&quot;success&quot;&gt;/hello.jsp&lt;/result&gt;
		&lt;/action&gt;
	&lt;/package&gt;
	&lt;!-- 引入其他struts配置文件 --&gt;
	&lt;include file=&quot;cn/junye/b_dynamic/struts.xml&quot;&gt;&lt;/include&gt;
&lt;/struts&gt;

将struts2核心过滤器配置到web.xml,配置在欢迎页前面
	&lt;filter&gt;
		&lt;filter-name&gt;struts2&lt;/filter-name&gt;
		&lt;filter-class&gt;org.apache.struts2.dispatcher.ng.filter.StrutsPrepareAndExecuteFilter&lt;/filter-class&gt;
	&lt;/filter&gt;
	&lt;filter-mapping&gt;
		&lt;filter-name&gt;struts2&lt;/filter-name&gt;
		&lt;url-pattern&gt;/*&lt;/url-pattern&gt;
	&lt;/filter-mapping&gt;
	
测试:访问http://localhost:8080/mystruts/hello/TestAction
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-strust-xml配置详解" tabindex="-1"><a class="header-anchor" href="#_3-strust-xml配置详解"><span>3. strust.xml配置详解</span></a></h1><ul><li>struts2常量配置方式(先后也是加载顺序)后加载覆盖</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>方式1:src/struts.xml（只用这个）
	&lt;constant name=&quot;struts.i18n.encoding&quot; value=&quot;UTF8&quot;&gt;&lt;/constant&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>方式2:在src下创建struts.properties：
struts.i18n.encoding=UTF8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>方式3:在项目的web.xml中
&lt;context-param&gt;
	&lt;param-name&gt;struts.i18n.encoding&lt;/param-name&gt;
	&lt;param-value&gt;UTF-8&lt;/param-value&gt;
&lt;/context-param&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>struts2常量配置位置App Libraries--struts2-core-2.3.24.jar--org.apache.struts2-default.properties;</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;!--常量配置struts.xml--&gt;
&lt;!-- i18n:国际化. 解决post提交乱码 get提交，按以前的方式--&gt;
&lt;constant name=&quot;struts.i18n.encoding&quot; value=&quot;UTF-8&quot;&gt;&lt;/constant&gt;
&lt;!-- 指定访问action时的后缀名 
http://localhost:8080/struts2_day01/hello/HelloAction.？默认.action 和 “空”--&gt;
&lt;constant name=&quot;struts.action.extension&quot; value=&quot;？&quot;&gt;&lt;/constant&gt;
&lt;!-- 指定struts2是否以开发模式运行1.热加载主配置.(不需要重启即可生效)2.提供更多错误信息输出,方便开发时的调试--&gt;
&lt;constant name=&quot;struts.devMode&quot; value=&quot;true&quot;&gt;&lt;/constant&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>struts2动态方法调用(struts.xml)</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>通配符方式  使用{1} 取出第一个星号通配的内容
&lt;package name=&quot;dynamic&quot; namespace=&quot;/dynamic&quot; extends=&quot;struts-default&quot; &gt;
	&lt;action name=&quot;Demo1Action_*&quot; class=&quot;cn.b.Demo1Action&quot; method=&quot;{1}&quot; &gt;
		&lt;result name=&quot;success&quot; &gt;/{1}.jsp&lt;/result&gt;
	&lt;/action&gt;
&lt;/package&gt;	
访问http://localhost:8080/struts2_day01/dynamic/Demo1Action_find.action跳转到find.jsp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>struts2中的默认配置</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;package name=&quot;default&quot; namespace=&quot;/default&quot; extends=&quot;struts-default&quot; &gt;
	&lt;!--不声明则默认访问,不管整合没整合--&gt;
	&lt;!--&lt;default-class-ref class=&quot;com.opensymphony.xwork2.ActionSupport&quot; /&gt;--&gt;
	&lt;!-- 声明后找不到包下的action,会使用Demo2Action作为默认action处理请求 --&gt;
	&lt;default-action-ref name=&quot;Demo2Action&quot;&gt;&lt;/default-action-ref&gt;
	&lt;!-- method属性:execute result的name属性:success   result的type属性:dispatcher转发  --&gt;
	&lt;!-- class属性:com.opensymphony.xwork2.ActionSupport --&gt;
	&lt;action name=&quot;Demo2Action&quot;   &gt;
		&lt;result  &gt;/hello.jsp&lt;/result&gt;
	&lt;/action&gt;
&lt;/package&gt;
http://localhost:8080/struts2_day01/default/xxxx.action,默认访问Demo2Action
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>结果跳转方式struts.xml中（result的type属性）用于post/get提交</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	转发
	&lt;action name=&quot;Demo1Action&quot; class=&quot;cn.a_result.Demo1Action&quot; method=&quot;execute&quot; &gt;
		&lt;result name=&quot;success&quot; type=&quot;dispatcher&quot; &gt;/hello.jsp&lt;/result&gt;
	&lt;/action&gt;

	重定向地址栏发生变化
	&lt;action name=&quot;Demo2Action&quot; class=&quot;cn.a_result.Demo2Action&quot; method=&quot;execute&quot; &gt;
		&lt;result name=&quot;success&quot; type=&quot;redirect&quot; &gt;/hello.jsp&lt;/result&gt;
	&lt;/action&gt;

	转发到Action
	&lt;action name=&quot;Demo3Action&quot; class=&quot;cn.a_result.Demo3Action&quot; method=&quot;execute&quot; &gt;
		&lt;result name=&quot;success&quot; type=&quot;chain&quot;&gt;
			&lt;param name=&quot;actionName&quot;&gt;Demo1Action&lt;/param&gt;
			&lt;param name=&quot;namespace&quot;&gt;/&lt;/param&gt;//转发的命名空间
		&lt;/result&gt;
	&lt;/action&gt;

	重定向到Action
	&lt;action name=&quot;Demo4Action&quot; class=&quot;cn.a_result.Demo4Action&quot; method=&quot;execute&quot; &gt;
		&lt;result  name=&quot;success&quot;  type=&quot;redirectAction&quot;&gt;
			&lt;param name=&quot;actionName&quot;&gt;Demo1Action&lt;/param&gt;
			&lt;param name=&quot;namespace&quot;&gt;/&lt;/param&gt;//转发的命名空间
		&lt;/result&gt;
	&lt;/action&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>全局结果集</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;global-result&gt;
	&lt;result name=&quot;&quot; type=&quot;redirect&quot;&gt;/login.jsp&lt;/result&gt;
&lt;/global-result&gt;
&lt;global-exception-mappings&gt;
	&lt;exception-mapping result=&quot;error&quot; exception=&quot;java.lang.RuntimeException&quot;&gt;
&lt;/exception-mapping&gt;
&lt;/global-exception-mappings&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-action生命周期" tabindex="-1"><a class="header-anchor" href="#_4-action生命周期"><span>4. Action生命周期</span></a></h1><ul><li>1.每次请求到来时,都会创建一个新的Action实例、</li><li>2.Action是线程安全的.可以使用成员变量接收参数,servlet线程不安全</li></ul><h1 id="_5-actioncontext内容" tabindex="-1"><a class="header-anchor" href="#_5-actioncontext内容"><span>5. ActionContext内容</span></a></h1><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/01a9aa1dcc1e771d064fe.png" alt="ActionContext.png" tabindex="0"><figcaption>ActionContext.png</figcaption></figure><ul><li>attr域以最小的域的map的键为准、request域就是request中的一个map</li></ul><h1 id="_6-访问servletapi方式" tabindex="-1"><a class="header-anchor" href="#_6-访问servletapi方式"><span>6. 访问servletAPI方式</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>通过ActionContext,通过Map原来的方法键值对获得,或者通过封装好的方法获得
//request域=&gt; map (不推荐,ActionContext生命周期和request一样，推荐ActionContext)
//不推荐Map&lt;String, Object&gt; requestScope = (Map&lt;String, Object&gt;) ActionContext.getContext().get(&quot;request&quot;);
ActionContext.getContext().put(&quot;name&quot;, &quot;requestTom&quot;);//推荐

//session域 =&gt; map
Map&lt;String, Object&gt; sessionScope = ActionContext.getContext().getSession();
sessionScope.put(&quot;name&quot;, &quot;sessionTom&quot;);
销毁session：ActionContext.getContext().getSession().invalidate();

//application域=&gt;map
Map&lt;String, Object&gt;applicationScope =ActionContext.getContext().getApplication(); 
操作map put(&quot;name&quot;,&quot;Tom&quot;)、remove(&quot;name&quot;, &quot;Tom&quot;)、get(&quot;&quot;,&quot;&quot;);

//获得原生response的方法(推荐)
HttpServletResponse response = ServletActionContext.getResponse();
	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>通过ServletActionContext（不推荐）获得各种原生域
HttpServletRequest request = ServletActionContext.getRequest();
HttpSession session = request.getSession();
HttpServletResponse response = ServletActionContext.getResponse();
ServletContext servletContext = ServletActionContext.getServletContext();
PageContext pageContext = ServletActionContext.getPageContext();
操作各种域：setAttribute、addAttribute、getAttribute、removeAttribute
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>通过实现接口方式（用拦截器完成的）
public class Demo7Action extends ActionSupport implements ServletRequestAware {
	private HttpServletRequest request;
	public String execute() throws Exception { 	
		System.out.println(&quot;原生request:&quot;+request);
		return SUCCESS;
	}
	@Override
	public void setServletRequest(HttpServletRequest request) {
		this.request = request;
	}	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_7-jsp获得" tabindex="-1"><a class="header-anchor" href="#_7-jsp获得"><span>7. jsp获得</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>page：\${pageScope.name};
request: \${requestScope.name}
session:\${sessionScope.name}
application:\${applicationScope.name}
\${name}按顺序取
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_8-action接收参数" tabindex="-1"><a class="header-anchor" href="#_8-action接收参数"><span>8. Action接收参数</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>表单
&lt;form action=&quot;\${pageContext.request.contextPath}/Demo8Action&quot;&gt;
	用户名:&lt;input type=&quot;text&quot; name=&quot;name&quot; /&gt;&lt;br&gt;
	年龄:&lt;input type=&quot;text&quot; name=&quot;age&quot; /&gt;&lt;br&gt;
	生日:&lt;input type=&quot;text&quot; name=&quot;birthday&quot; /&gt;&lt;br&gt;
		&lt;input type=&quot;submit&quot; value=&quot;提交&quot; /&gt;
&lt;/form&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>单个类型：能获得radio和chekbox的值
属性驱动获得参数：set/get方法
public class Demo8Action extends ActionSupport  {
	//准备与参数键名称相同的属性
	private String name;
	//自动类型转换 只能转换8大基本数据类型以及对应包装类
	private Integer age;
	//支持特定类型字符串转换为Date ,例如 yyyy-MM-dd，一定要有set/get方法
	private Date   birthday;
	public String execute() throws Exception { 
		System.out.println(&quot;name参数值:&quot;+name+&quot;,age参数值:&quot;+age+&quot;,生日:&quot;+birthday);
		return SUCCESS;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>对象驱动获得参数
public class Demo9Action extends ActionSupport  {
	private User user;//生成set/get方法
	public String execute() throws Exception { 	
		System.out.println(user);
		return SUCCESS;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>模型驱动获得参数实现接口（只能返回一个对象）
public class Demo10Action extends ActionSupport implements ModelDriven&lt;User&gt; {
	private User user =new User();
	public String execute() throws Exception { 
		System.out.println(user);
		return SUCCESS;
	}
	@Override
	public User getModel() {
		return user;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	④radio或checkbox的获取
	只要将属性名字设置成对应的radio或checkbox的值即可获得提交的参数，
	radio是单个值，而checkbox是一行value，空格value的结构，拆分即可
	String[] split = hobby.split(&quot;, &quot;);
	for(String s:split) {
		System.err.println(s);
	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	⑤集合类型参数封装
	list:&lt;input type=&quot;text&quot; name=&quot;list&quot; /&gt;&lt;br&gt;//不指定索引则一个一个塞
	list:&lt;input type=&quot;text&quot; name=&quot;list[3]&quot; /&gt;&lt;br&gt;//指定就放到规定的地方，不指定就null
	private List&lt;String&gt; list;set、get方法
	map:&lt;input type=&quot;text&quot; name=&quot;map[&#39;haha&#39;]&quot; /&gt;&lt;br&gt;//值封装到键值haha上
	private Map&lt;String,String&gt; map;set/get方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_9-struts、hibernate的javassist-3-18-1-ga-jar包重复-删除版本低的" tabindex="-1"><a class="header-anchor" href="#_9-struts、hibernate的javassist-3-18-1-ga-jar包重复-删除版本低的"><span>9. struts、hibernate的javassist-3.18.1-GA.jar包重复,删除版本低的.</span></a></h1><h1 id="_10-ognl表达式" tabindex="-1"><a class="header-anchor" href="#_10-ognl表达式"><span>10. OGNL表达式</span></a></h1><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/ade13c1a8726195fa2700.png" alt="Ognl.png" tabindex="0"><figcaption>Ognl.png</figcaption></figure>`,43),c={href:"http://user.addr.name",target:"_blank",rel:"noopener noreferrer"},v=t("li",null,"OGNL不仅仅可以视图导航.支持比EL表达式（11内置对象）更加丰富的功能.",-1),m=n(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	使用OGNL准备工作：struts2 的包中已经包含了ognl-3.0.6.jar.不需要导入额外的jar包
	保存
	root和context可以放多个对象或者map，查找时只输入key或者属性名即可。从栈顶一直查到栈低，重复的查不到两个
	User rootUser = new User(&quot;tom&quot;,18);
	Map&lt;String,User&gt; context = new HashMap&lt;String,User&gt;();
	context.put(&quot;user1&quot;, new User(&quot;jack&quot;,18));
	context.put(&quot;user2&quot;, new User(&quot;rose&quot;,22));
	OgnlContext oc = new OgnlContext();
	oc.setRoot(rootUser);//将rootUser作为root部分
	oc.setValues(context);//将context这个Map作为Context部分

	基本取值
	//取出root中user对象的name属性
	String name = (String) Ognl.getValue(&quot;name&quot;, oc, oc.getRoot());
	Integer age = (Integer) Ognl.getValue(&quot;age&quot;, oc, oc.getRoot());
	//取出context中键为user1对象的name属性#代表context
	String name = (String) Ognl.getValue(&quot;#user1.name&quot;, oc, oc.getRoot());
	String name2 = (String) Ognl.getValue(&quot;#user2.name&quot;, oc, oc.getRoot());
	Integer age = (Integer) Ognl.getValue(&quot;#user2.age&quot;, oc, oc.getRoot());

	赋值
	//将root中的user对象的name属性赋值
	Ognl.getValue(&quot;name=&#39;jerry&#39;&quot;, oc, oc.getRoot());
	String name2 = (String) Ognl.getValue(&quot;#user1.name=&#39;a&#39;,#user1.name&quot;, oc, oc.getRoot());

	调用方法（赋值和取值）
	//调用root中user对象的setName方法
	Ognl.getValue(&quot;setName(&#39;lilei&#39;)&quot;, oc, oc.getRoot());
	String name = (String) Ognl.getValue(&quot;getName()&quot;, oc, oc.getRoot());
	String name2 = (String)Ognl.getValue(&quot;#user1.setName(&#39;lucy&#39;),#user1.getName()&quot;, oc, oc.getRoot());

	调用静态方法（static）
	String name = (String) Ognl.getValue(&quot;@cn.a_ognl.HahaUtils@echo(&#39;hello 强勇!&#39;)&quot;, oc, oc.getRoot());//@完整类名
	//Double pi = (Double) Ognl.getValue(&quot;@java.lang.Math@PI&quot;, oc, oc.getRoot());
	Double pi = (Double) Ognl.getValue(&quot;@@PI&quot;, oc, oc.getRoot())

	创建对象(List,Map)
	Integer size = (Integer) Ognl.getValue(&quot;{&#39;tom&#39;,&#39;jerry&#39;,&#39;jack&#39;,&#39;rose&#39;}.size()&quot;, oc, oc.getRoot());
	String name = (String) Ognl.getValue(&quot;{&#39;tom&#39;,&#39;jerry&#39;,&#39;jack&#39;,&#39;rose&#39;}[0]&quot;, oc, oc.getRoot());//tom
	String name2 = (String) Ognl.getValue(&quot;{&#39;tom&#39;,&#39;jerry&#39;,&#39;jack&#39;,&#39;rose&#39;}.get(1)&quot;, oc, oc.getRoot());//jerry
	Integer size2 = (Integer) Ognl.getValue(&quot;#{&#39;name&#39;:&#39;tom&#39;,&#39;age&#39;:18}.size()&quot;, oc, oc.getRoot());
	String name3  = (String) Ognl.getValue(&quot;#{&#39;name&#39;:&#39;tom&#39;,&#39;age&#39;:18}[&#39;name&#39;]&quot;, oc, oc.getRoot());
	Integer age  = (Integer) Ognl.getValue(&quot;#{&#39;name&#39;:&#39;tom&#39;,&#39;age&#39;:18}.get(&#39;age&#39;)&quot;, oc, oc.getRoot());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-1-ognl与struts2的结合原理" tabindex="-1"><a class="header-anchor" href="#_10-1-ognl与struts2的结合原理"><span>10.1. OGNL与Struts2的结合原理</span></a></h2><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/dee2b3721039564887ecb.png" alt="Struts2与Ognl结合原理.png" tabindex="0"><figcaption>Struts2与Ognl结合原理.png</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	接口ValueStack实现类OgnlValueStack包括root和context两部分
	public class OgnlValueStack implements ValueStack{
		CompoundRoot root;//栈结构
		transient Map&lt;String,Object&gt; context;//map结构
	}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	//root是栈，是由ArrayList和栈方法模拟的，访问栈中属性的特点.由上到下
	//默认情况下，root放置的是被访问的当前Aciton,请求参数被封装到Action中
	public class CompoundRoot extends ArrayList{
		//栈方法：弹栈
		public Object pop(){
			return remove(0);
		}
		//栈方法：压栈
		public Object push(Object o){
			add(0,o);
		}
	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	查看值栈中两部分内容
	(使用DEBUG标签)&lt;s:debug&gt;&lt;/s:debug&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-2-struts2与ognl结合体现" tabindex="-1"><a class="header-anchor" href="#_10-2-struts2与ognl结合体现"><span>10.2. struts2与ognl结合体现</span></a></h2><ul><li>参数接收</li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/01fe1aa30249f33864027.jpg" alt="ognl与struts2结合.JPG" tabindex="0"><figcaption>ognl与struts2结合.JPG</figcaption></figure><ul><li><p>获得ValueStack和ActionContext的方法</p><ul><li>获得ActionContext数据中心: ActionContext.getContext();</li><li>获得值栈：ActionContext.getContext().getValueStack();</li></ul></li><li><p>ValueStack的API（少用）常用来接收表单数据，很少往这root放数据</p><ul><li>将数据obj放入值栈ValueStack中的Root：ActionContext.getContext().getValueStack().push(obj);</li><li>从值栈ValueStack中的Root将数据obj取出：ActionContext.getContext().getValueStack().pop();</li><li>从值栈ValueStack中的Root将查询数据Object findValue = ActionContext.getContext().getValueStack().findValue(&quot;name&quot;);</li><li>从值栈ValueStack中的Root将修改数据ActionContext.getContext().getValueStack().setParameter(&quot;name&quot;, &quot;name&quot;);</li><li>通过键值对key和value将数据放入值栈ValueStack中的Context：ActionContext.getContext().put(key, value);</li><li>通过键名找到值栈ValueStack中的对象Object object = ActionContext.getContext().get(&quot;name&quot;);</li><li>可以通过EL表达式\${}从值栈中的Context取数据</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;action name=&quot;Demo4Action&quot; class=&quot;cn.a_result.Demo4Action&quot; method=&quot;execute&quot; &gt;
	&lt;result  name=&quot;success&quot;  type=&quot;redirectAction&quot;&gt;
		&lt;param name=&quot;actionName&quot;&gt;Demo1Action&lt;/param&gt;
		&lt;param name=&quot;namespace&quot;&gt;/&lt;/param&gt;//转发的命名空间
		&lt;param name=&quot;name&quot;&gt;{{name}}&lt;/param&gt;//转发的命名空间
	&lt;/result&gt;
&lt;/action&gt;
语法:\${ognl表达式}，将数据传递到结果那边，不过一般都是在域中传递，不常用
可以通过EL表达式\${}从值栈中的Context取数据

扩展:request对象的getAttribute方法
同时也是ognl表达式获得参数的方法（查找顺序）
request.getAttribute()
原生request域
查找valueStack的Root部分（栈）
查找valueStack的context部分（ActionContext）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_11-自定义拦截器" tabindex="-1"><a class="header-anchor" href="#_11-自定义拦截器"><span>11. 自定义拦截器</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//拦截器生命周期:随项目的启动而创建,随项目关闭而销毁
①拦截器创建
方法一：实现Interceptor接口并实现其三个方法
public class MyInterceptor implements Intercepter{}

方法二：继承AbstractInterceptor
空实现了init 和 destory方法. 我们如果不需要实现这两个方法,就可以只实现intercept方法
public class MyInterceptor2 extends AbstractInterceptor {}

方法三：继承MethodFilterInterceptor 方法过滤拦截器并复写doIntercept方法
//功能: 定制拦截器拦截的方法.  定制哪些方法需要拦截、哪些方法不需要拦截
public class MyInterceptor3 extends MethodFilterInterceptor{
	doIntercept(ActionInvocation invocation){
		放行+前后处理:
		//前处理
		invocation.invoke();
		//后处理
		//不处理直接放行
		return invocation.invoke();
		不放行,直接跳转到一个结果页面
		return &quot;success&quot;;//不执行后续的拦截器以及Action,直接交给Result处理结果.进行页面跳转
	}
}

②配置struts.xml，在default.properties中可以找到相应的默认配置
注册拦截器&lt;interceptor name=&quot;&quot; class=&quot;&quot;&gt;&lt;/interceptor&gt;

定制拦截方法并配置拦截器栈
&lt;interceptor-stack name=&quot;myStack&quot;&gt;
	&lt;!-- 自定义拦截器引入(建议放在20个拦截器之前) --&gt;
	&lt;interceptor-ref name=&quot;myInter3&quot;&gt;
		&lt;!-- 指定哪些方法不拦截
		&lt;param name=&quot;excludeMethods&quot;&gt;add,delete&lt;/param&gt; --&gt;
		&lt;!-- 指定哪些方法需要拦截 --&gt;
		&lt;param name=&quot;includeMethods&quot;&gt;add,delete&lt;/param&gt;
	&lt;/interceptor-ref&gt;
	&lt;!-- 引用默认的拦截器栈(20个) --&gt;
	&lt;interceptor-ref name=&quot;defaultStack&quot;&gt;&lt;/interceptor-ref&gt;
&lt;/interceptor-stack&gt;

指定包中默认拦截器栈&lt;default-interceptor-ref name=&quot;myStack&quot;&gt;&lt;/default-interceptor-ref&gt;

Action指定拦截器
&lt;action name=&quot;Demo1Action_*&quot; class=&quot;cn.interceptor.Demo1Action&quot; method=&quot;{1}&quot; &gt;
	&lt;!-- 为Action单独指定走哪个拦截器(栈) 
	&lt;interceptor-ref name=&quot;myStack&quot;&gt;&lt;/interceptor-ref&gt;--&gt;
	&lt;result name=&quot;success&quot; type=&quot;dispatcher&quot; &gt;/index.jsp&lt;/result&gt;
&lt;/action&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_12-struts2标签-了解" tabindex="-1"><a class="header-anchor" href="#_12-struts2标签-了解"><span>12. struts2标签(了解)</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	控制标签
	遍历标签 iterator 
	&lt;s:iterator value=&quot;#list&quot; &gt;
		&lt;s:property /&gt;&lt;br&gt;
	&lt;/s:iterator&gt;

	&lt;s:iterator value=&quot;#list&quot; var=&quot;name&quot; &gt;
		&lt;s:property value=&quot;#name&quot; /&gt;&lt;br&gt;
	&lt;/s:iterator&gt;

	&lt;s:iterator begin=&quot;1&quot; end=&quot;100&quot; step=&quot;1&quot;  &gt;
		&lt;s:property /&gt;
	&lt;/s:iterator&gt;

	if标签
	&lt;s:if test=&quot;#list.size()==4&quot;&gt;
		list长度为4!
	&lt;/s:if&gt;
	&lt;s:elseif test=&quot;#list.size()==3&quot;&gt;
		list长度为3!
	&lt;/s:elseif&gt;
	&lt;s:else&gt;
		list不3不4!
	&lt;/s:else&gt;
	判断boolean值不要自己用==true判断

	数据标签
	&lt;!--property 配合ognl表达式页面取值,Action没有返回数据时没有值--&gt;
	&lt;s:property value=&quot;#list.size()&quot; /&gt;
	&lt;!--获得session中的值，常用于表达登录用户信息--&gt;
	&lt;s:property value=&quot;#session.user.name&quot; /&gt;

	表单标签
	&lt;!-- 好处1: 内置了一套样式.  - 好处2: 自动回显,根据栈中的属性  --&gt;
	&lt;!-- theme:指定表单的主题，就是表单的style，xhtml:默认，simple:没有主题--&gt;
	&lt;s:form action=&quot;Demo3Action&quot; namespace=&quot;/&quot; theme=&quot;xhtml&quot; &gt;
		&lt;s:textfield name=&quot;name&quot; label=&quot;用户名&quot;  &gt;&lt;/s:textfield&gt;
		&lt;s:password name=&quot;password&quot; label=&quot;密码&quot; &gt;&lt;/s:password&gt;
		&lt;s:radio list=&quot;{&#39;男&#39;,&#39;女&#39;}&quot; name=&quot;gender&quot; label=&quot;性别&quot; &gt;&lt;/s:radio&gt;
		&lt;s:radio list=&quot;#{1:&#39;男&#39;,0:&#39;女&#39;}&quot; name=&quot;gender&quot; label=&quot;性别&quot; &gt;&lt;/s:radio&gt;
		&lt;s:checkboxlist list=&quot;#{2:&#39;抽烟&#39;,1:&#39;喝酒&#39;,0:&#39;烫头&#39;}&quot; name=&quot;habits&quot; label=&quot;爱好&quot; &gt;&lt;/s:checkboxlist&gt;
		&lt;s:select list=&quot;#{2:&#39;大专&#39;,1:&#39;本科&#39;,0:&#39;硕士&#39;}&quot; headerKey=&quot;&quot; headerValue=&quot;---请选择---&quot; name=&quot;edu&quot; label=&quot;学历&quot; &gt;&lt;/s:select&gt;
		&lt;s:file name=&quot;photo&quot; label=&quot;近照&quot; &gt;&lt;/s:file&gt;
		&lt;s:textarea name=&quot;desc&quot; label=&quot;个人简介&quot; &gt;&lt;/s:textarea&gt;
		&lt;s:submit value=&quot;提交&quot; &gt;&lt;/s:submit&gt;
	&lt;/s:form&gt;

	非表单标签
	在action中添加错误信息this.addActionError(&quot;你错了&quot;);
	取出错误信息&lt;s:actionerror&gt;
	&lt;s:debug&gt;&lt;/s:debug&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_13-表现层抽取" tabindex="-1"><a class="header-anchor" href="#_13-表现层抽取"><span>13. 表现层抽取</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	//表现层通用实现
	public class BaseAction&lt;T&gt; extends ActionSupport implements ModelDriven&lt;T&gt; {
		//模型对象
		private T model;
		public T getModel() {
			return model;
		}
		
		//在构造方法中动态获取实体类型，通过反射创建model对象
		public BaseAction() {
			ParameterizedType genericSuperclass = (ParameterizedType) this.getClass().getGenericSuperclass();
			//获得BaseAction上声明的泛型数组
			Type[] actualTypeArguments = genericSuperclass.getActualTypeArguments();
			Class&lt;T&gt; entityClass = (Class&lt;T&gt;) actualTypeArguments[0];
			//通过反射创建对象
			try {
				model = entityClass.newInstance();
			} catch (InstantiationException e) {
				e.printStackTrace();
			} catch (IllegalAccessException e) {
				e.printStackTrace();
			}
		}
	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_14-文件上传" tabindex="-1"><a class="header-anchor" href="#_14-文件上传"><span>14. 文件上传</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	&lt;!-- 文件上传页面三个要求：
	表单必须post提交，
	表单提交类型，必须多项式，
	文件上传使用&lt;input type=&quot;file&quot;/&gt;组件 --&gt;
	&lt;FORM id=form1 name=form1
	action=&quot;\${pageContext.request.contextPath }/CustomerAction_add&quot;
	method=&quot;post&quot; enctype=&quot;multipart/form-data&quot;&gt;
	&lt;input type=&quot;file&quot; name=&quot;photo&quot;/&gt;
	&lt;/FORM&gt;
	//上传的文件自动封装到File对象,
	//只需后台提供一个FIle属性且名字与前台file的name属性名相同的字段
	private File photo;
	//在提交键名后加上固定后缀FIleName，文件名会自动封装到属性中
	private String photoFileName;
	//在提交键名后加上固定后缀ContentType，文件MIME类型会自动封装到属性中
	//image/jpeg等
	private String photoContentType;
	set/get方法

	//测试上传，上传文件保存到指定位置
	//默认保存到？
	photo.renameTo(new File(&quot;F:/testupload/test.jpg&quot;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_15-处理ajax请求" tabindex="-1"><a class="header-anchor" href="#_15-处理ajax请求"><span>15. 处理Ajax请求</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public String fun(){
	通过ServletAPI方式		
	/*使用jsonlib将pageBean转为json，通过输出流写回页面中 
	JSONObject将单一对象转为json,不用看里面是什么，主要看本来的性质
	JSONArray将数组或者集合对象转为json*/
	JsonConfig jsonConfig = new JsonConfig();
	jsonConfig.setExcludes(new String[] {&quot;currentPage&quot;,&quot;detachedCriteria&quot;,&quot;pageSize&quot;});
	String json = JSONObject.fromObject(pageBean).toString();

	//ServletActionContext.getResponse().setContentType(&quot;text/json;charset=utf-8&quot;);
	ServletActionContext.getResponse().setContentType(&quot;text/html;charset=utf-8&quot;);
	ServletActionContext.getResponse().getWriter().print(f);
	return null;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21);function g(b,p){const i=l("ExternalLinkIcon");return a(),r("div",null,[o,t("ul",null,[t("li",null,[e("OGNL:对象视图导航语言. ${"),t("a",c,[e("user.addr.name"),d(i)]),e("} 这种写法就叫对象视图导航.")]),v]),m])}const h=s(u,[["render",g],["__file","struts2.html.vue"]]),A=JSON.parse('{"path":"/backend/webframework/struts2.html","title":"struts2","lang":"zh-CN","frontmatter":{"title":"struts2","date":"2023-01-01T00:00:00.000Z","tags":"struts2","categories":"后端","description":"struts2 1. struts2访问流程&架构&介绍 2. 搭建struts2框架 3. strust.xml配置详解 4. Action生命周期 5. ActionContext内容 6. 访问servletAPI方式 7. jsp获得 8. Action接收参数 9. struts、hibernate的javassist-3.18.1-GA.j...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/webframework/struts2.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"struts2"}],["meta",{"property":"og:description","content":"struts2 1. struts2访问流程&架构&介绍 2. 搭建struts2框架 3. strust.xml配置详解 4. Action生命周期 5. ActionContext内容 6. 访问servletAPI方式 7. jsp获得 8. Action接收参数 9. struts、hibernate的javassist-3.18.1-GA.j..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/61bb9c3bcf7d5ee3f1d3a.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"struts2\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/61bb9c3bcf7d5ee3f1d3a.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/01a9aa1dcc1e771d064fe.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/ade13c1a8726195fa2700.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/dee2b3721039564887ecb.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/01fe1aa30249f33864027.jpg\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"10.1. OGNL与Struts2的结合原理","slug":"_10-1-ognl与struts2的结合原理","link":"#_10-1-ognl与struts2的结合原理","children":[]},{"level":2,"title":"10.2. struts2与ognl结合体现","slug":"_10-2-struts2与ognl结合体现","link":"#_10-2-struts2与ognl结合体现","children":[]}],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":14.26,"words":4278},"filePathRelative":"backend/webframework/struts2.md","localizedDate":"2023年1月1日","excerpt":"<p>struts2</p>\\n<!--more-->\\n<!-- TOC -->\\n<ul>\\n<li><a href=\\"#1-struts2%E8%AE%BF%E9%97%AE%E6%B5%81%E7%A8%8B%E6%9E%B6%E6%9E%84%E4%BB%8B%E7%BB%8D\\">1. struts2访问流程&amp;架构&amp;介绍</a></li>\\n<li><a href=\\"#2-%E6%90%AD%E5%BB%BAstruts2%E6%A1%86%E6%9E%B6\\">2. 搭建struts2框架</a></li>\\n<li><a href=\\"#3-strustxml%E9%85%8D%E7%BD%AE%E8%AF%A6%E8%A7%A3\\">3. strust.xml配置详解</a></li>\\n<li><a href=\\"#4-action%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F\\">4. Action生命周期</a></li>\\n<li><a href=\\"#5-actioncontext%E5%86%85%E5%AE%B9\\">5. ActionContext内容</a></li>\\n<li><a href=\\"#6-%E8%AE%BF%E9%97%AEservletapi%E6%96%B9%E5%BC%8F\\">6. 访问servletAPI方式</a></li>\\n<li><a href=\\"#7-jsp%E8%8E%B7%E5%BE%97\\">7. jsp获得</a></li>\\n<li><a href=\\"#8-action%E6%8E%A5%E6%94%B6%E5%8F%82%E6%95%B0\\">8. Action接收参数</a></li>\\n<li><a href=\\"#9-strutshibernate%E7%9A%84javassist-3181-gajar%E5%8C%85%E9%87%8D%E5%A4%8D%E5%88%A0%E9%99%A4%E7%89%88%E6%9C%AC%E4%BD%8E%E7%9A%84\\">9. struts、hibernate的javassist-3.18.1-GA.jar包重复,删除版本低的.</a></li>\\n<li><a href=\\"#10-ognl%E8%A1%A8%E8%BE%BE%E5%BC%8F\\">10. OGNL表达式</a>\\n<ul>\\n<li><a href=\\"#101-ognl%E4%B8%8Estruts2%E7%9A%84%E7%BB%93%E5%90%88%E5%8E%9F%E7%90%86\\">10.1. OGNL与Struts2的结合原理</a></li>\\n<li><a href=\\"#102-struts2%E4%B8%8Eognl%E7%BB%93%E5%90%88%E4%BD%93%E7%8E%B0\\">10.2. struts2与ognl结合体现</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#11-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8B%A6%E6%88%AA%E5%99%A8\\">11. 自定义拦截器</a></li>\\n<li><a href=\\"#12-struts2%E6%A0%87%E7%AD%BE%E4%BA%86%E8%A7%A3\\">12. struts2标签(了解)</a></li>\\n<li><a href=\\"#13-%E8%A1%A8%E7%8E%B0%E5%B1%82%E6%8A%BD%E5%8F%96\\">13. 表现层抽取</a></li>\\n<li><a href=\\"#14-%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0\\">14. 文件上传</a></li>\\n<li><a href=\\"#15-%E5%A4%84%E7%90%86ajax%E8%AF%B7%E6%B1%82\\">15. 处理Ajax请求</a></li>\\n</ul>","autoDesc":true}');export{h as comp,A as data};
