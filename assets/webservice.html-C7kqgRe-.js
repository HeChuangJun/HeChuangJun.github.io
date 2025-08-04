import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as n,e as t}from"./app-7KT7HDzT.js";const s={},l=t(`<p>WebService是用来开发分布式的互操作应用程序</p><ul><li><a href="#1-webservice%E4%BB%8B%E7%BB%8D">1. WebService介绍</a></li><li><a href="#2-soap%E5%92%8Cwsdl">2. SOAP和WSDL</a></li><li><a href="#3-%E5%9F%BA%E4%BA%8Ejdk17%E5%8F%91%E5%B8%83%E4%B8%80%E4%B8%AAwebservice%E6%9C%8D%E5%8A%A1">3. 基于jdk1.7发布一个WebService服务</a></li><li><a href="#4-apache-cxf%E5%85%A5%E9%97%A8">4. apache CXF入门</a></li></ul><h1 id="_1-webservice介绍" tabindex="-1"><a class="header-anchor" href="#_1-webservice介绍"><span>1. WebService介绍</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Web service是一个平台独立的，低耦合的，自包含的、基于可编程的web的应用程序，
可使用开放的XML（标准通用标记语言下的一个子集）标准来描述、发布、发现、协调和配置这些应用程序，用于开发分布式的互操作的应用程序 
Web Service技术， 能使得运行在不同机器上的不同应用无须借助附加的、专门的第三方软件或硬件， 就可相互交换数据或集成。依据Web Service规范实施的应用之间， 无论它们所使用的语言、 平台或内部协议是什么， 
都可以相互交换数据
Web Service是自描述、 自包含的可用网络模块，可以执行具体的业务功能。
Web Service也很容易部署， 因为它们基于一些常规的产业标准以及已有的一些技术，诸如标准通用标记语言下的子集XML、HTTP。Web Service减少了应用接口的花费。
Web Service为整个企业甚至多个组织之间的业务流程的集成提供了一个通用机制

WebService通过HTTP POST方式接受客户的请求,实现两个系统之间的远程调用
WebService与客户端之间一般使用SOAP协议传输XML数据
它本身就是为了跨平台或跨语言而设计的

调用网络上的WebService服务http://webxml.com.cn/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/d9e138740635ff40f1378.png" alt="图片1.png" tabindex="0"><figcaption>图片1.png</figcaption></figure><h1 id="_2-soap和wsdl" tabindex="-1"><a class="header-anchor" href="#_2-soap和wsdl"><span>2. SOAP和WSDL</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>SOAP（Simple Object Access Protocol）：简单对象访问协议
SOAP作为一个基于XML语言的协议用于在网上传输数据。
SOAP = 在HTTP的基础上+XML数据。都是post请求
SOAP是基于HTTP的。!!!!!!!!!!!!!!!!
SOAP的组成如下：
Envelope – 必须的部分。以XML的根元素出现。
Headers – 可选的。
Body – 必须的。在body部分，包含要执行的服务器的方法。和发送到服务器的数据。

示例：
POST /WebServices/IpAddressSearchWebService.asmx HTTP/1.1
Host: ws.webxml.com.cn
Content-Type: text/xml; charset=utf-8
Content-Length: length
SOAPAction: &quot;http://WebXml.com.cn/getCountryCityByIp&quot;

&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;soap:Envelope xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot; xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot; xmlns:soap=&quot;http://schemas.xmlsoap.org/soap/envelope/&quot;&gt;
  &lt;soap:Body&gt;
	&lt;getCountryCityByIp xmlns=&quot;http://WebXml.com.cn/&quot;&gt;
	  &lt;theIpAddress&gt;string&lt;/theIpAddress&gt;
	&lt;/getCountryCityByIp&gt;
  &lt;/soap:Body&gt;
&lt;/soap:Envelope&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>WSDL Web服务描述语言
WSDL(WebService Description Language):web 服务描述语言
就是一个xml文档，用于描述当前服务的一些信息（服务名称、服务的发布地址、服务提供的方法、方法的参数类型、方法的返回值类型等）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-基于jdk1-7发布一个webservice服务" tabindex="-1"><a class="header-anchor" href="#_3-基于jdk1-7发布一个webservice服务"><span>3. 基于jdk1.7发布一个WebService服务</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>服务端发布
第一步：创建一个Java项目
第二步：创建一个类，加入Webservice注解
第三步：提供一个方法sayHello
第四步：在main方法中调用jdk提供的发布服务的方法
第五步：访问服务的wsdl文档（服务的发布地址+?wsdl）http://192.168.115.87:8080/hello?wsdl
import javax.jws.WebService;
import javax.xml.ws.Endpoint;
@WebService
public class HelloService {
	public String sayHello(String name,int i){
		System.out.println(&quot;服务端的sayHello方法被调用了。。。。&quot;);
		return &quot;helle&quot; + name;
	}
	
	public static void main(String[] args) {
		String address = &quot;http://192.168.115.87:8080/hello&quot;;
		Object implementor = new HelloService();
		Endpoint.publish(address, implementor);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>客户端调用
//使用wsimport命令解析wsdl文件生成本地代码,把本地代码拷到项目中
//通过本地代码创建一个代理对象
//通过代理对象实现远程调用
public class App {
	public static void main(String[] args) {
		HelloServiceService ss = new HelloServiceService();
		//创建客户端代理对象，用于远程调用
		HelloService proxy = ss.getHelloServicePort();
		String ret = proxy.sayHello(&quot;小明&quot;, 10);
		System.out.println(ret);
	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/f0324ee4eed25d8d96ac1.png" alt="图片2.png" tabindex="0"><figcaption>图片2.png</figcaption></figure><h1 id="_4-apache-cxf入门" tabindex="-1"><a class="header-anchor" href="#_4-apache-cxf入门"><span>4. apache CXF入门</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>官网：cxf.apache.org
Apache CXF = Celtix + Xfire 
支持多种协议：SOAP1.1,1.2、XML/HTTP
CORBA（Common Object Request Broker Architecture公共对象请求代理体系结构,早期语言使用的WS。C,c++,C#） 
并可以与Spring进行快速无缝的整合,灵活的部署：可以运行在Tomcat,Jboss,Jetty(内置),IBMWS,BeaWL上面。

服务端开发
第一步：创建动态web项目
第二步：导入CXF相关jar包
&lt;dependency&gt;
	&lt;groupId&gt;org.apache.cxf&lt;/groupId&gt;
	&lt;artifactId&gt;cxf-rt-frontend-jaxws&lt;/artifactId&gt;
	&lt;version&gt;3.0.1&lt;/version&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
	&lt;groupId&gt;org.apache.cxf&lt;/groupId&gt;
	&lt;artifactId&gt;cxf-rt-transports-http&lt;/artifactId&gt;
	&lt;version&gt;3.0.1&lt;/version&gt;
&lt;/dependency&gt;
第三步：在web.xml中配置CXF框架提供的一个Servlet
&lt;!-- 配置CXF框架提供的Servlet --&gt;
&lt;servlet&gt;
	&lt;servlet-name&gt;cxf&lt;/servlet-name&gt;
	&lt;servlet-class&gt;org.apache.cxf.transport.servlet.CXFServlet&lt;/servlet-class&gt;
	&lt;!-- 通过初始化参数指定CXF框架的配置文件位置 默认cxf-servlet.xml--&gt;
	&lt;init-param&gt;
		&lt;param-name&gt;config-location&lt;/param-name&gt;
		&lt;param-value&gt;classpath:cxf.xml&lt;/param-value&gt;
	&lt;/init-param&gt;
&lt;/servlet&gt;
&lt;servlet-mapping&gt;
	&lt;servlet-name&gt;cxf&lt;/servlet-name&gt;
	&lt;url-pattern&gt;/service/*&lt;/url-pattern&gt;
&lt;/servlet-mapping&gt;
第四步：在类路径下提供cxf.xml
&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot; 
xmlns:jaxws=&quot;http://cxf.apache.org/jaxws&quot;
xmlns:soap=&quot;http://cxf.apache.org/bindings/soap&quot;
xsi:schemaLocation=&quot;http://www.springframework.org/schema/beans 
					http://www.springframework.org/schema/beans/spring-beans.xsd
					http://cxf.apache.org/bindings/soap 
					http://cxf.apache.org/schemas/configuration/soap.xsd
					http://cxf.apache.org/jaxws 
					http://cxf.apache.org/schemas/jaxws.xsd&quot;&gt;
	&lt;!-- 引入CXF Bean定义如下,早期的版本中使用 --&gt;
	&lt;import resource=&quot;classpath:META-INF/cxf/cxf.xml&quot; /&gt;
	&lt;import resource=&quot;classpath:META-INF/cxf/cxf-extension-soap.xml&quot; /&gt;
	&lt;import resource=&quot;classpath:META-INF/cxf/cxf-servlet.xml&quot; /&gt;

&lt;/beans&gt;
第五步：开发一个接口和实现类
@WebService
public interface HelloService {
	public String sayHello(String name);
}
public class HelloServiceImpl implements HelloService{
	public String sayHello(String name) {
		System.out.println(&quot;基于CXF开发的服务端sayHello方法被调用了。。。。&quot;);
		return &quot;hello &quot; + name;
	}
}
第六步：在cxf.xml中注册服务
&lt;bean id=&quot;helloService&quot; class=&quot;com.itheima.service.HelloServiceImpl&quot;/&gt;
&lt;!-- 注册服务 --&gt;
&lt;jaxws:server id=&quot;myService&quot; address=&quot;/cxfService&quot;&gt;
	&lt;jaxws:serviceBean&gt;
		&lt;ref bean=&quot;helloService&quot;/&gt;
	&lt;/jaxws:serviceBean&gt;
&lt;/jaxws:server&gt;
最后请求http://ip:port/projectName/service/cxfService

客户端开发
第一步：创建Java项目并导入CXF相关jar包
第二步：使用wsimport或者CXF提供wsdl2java生成本地代码，只需要生成接口文件
第三步：将接口文件复制到项目中
第四步：提供spring配置文件，注册客户端代理对象
&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot; 
xmlns:jaxws=&quot;http://cxf.apache.org/jaxws&quot;
xmlns:soap=&quot;http://cxf.apache.org/bindings/soap&quot;
xsi:schemaLocation=&quot;http://www.springframework.org/schema/beans 
					http://www.springframework.org/schema/beans/spring-beans.xsd
					http://cxf.apache.org/bindings/soap 
					http://cxf.apache.org/schemas/configuration/soap.xsd
					http://cxf.apache.org/jaxws 
					http://cxf.apache.org/schemas/jaxws.xsd&quot;&gt;
	&lt;!-- 引入CXF Bean定义如下,早期的版本中使用 --&gt;
	&lt;import resource=&quot;classpath:META-INF/cxf/cxf.xml&quot; /&gt;
	&lt;import resource=&quot;classpath:META-INF/cxf/cxf-extension-soap.xml&quot; /&gt;
	&lt;import resource=&quot;classpath:META-INF/cxf/cxf-servlet.xml&quot; /&gt;
	
	&lt;!-- 注册CXF客户端代理对象，通过spring框架创建这个代理对象，使用代理对象实现远程调用 --&gt;
	&lt;jaxws:client id=&quot;myClient&quot; 
				address=&quot;http://192.168.115.87:8080/cxf_service/service/cxfService&quot; 
				serviceClass=&quot;cn.itcast.client.HelloService&quot;&gt;
	&lt;/jaxws:client&gt;
&lt;/beans&gt;
第五步：读取spring配置文件，创建spring工厂，从工厂中获取代理对象，实现远程调用
public class App {
	public static void main(String[] args) {
		ApplicationContext ctx = new ClassPathXmlApplicationContext(&quot;cxf.xml&quot;);
		HelloService proxy = (HelloService) ctx.getBean(&quot;myClient&quot;);
		String ret = proxy.sayHello(&quot;test&quot;);
		System.out.println(ret);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),a=[l];function r(d,c){return i(),n("div",null,a)}const o=e(s,[["render",r],["__file","webservice.html.vue"]]),m=JSON.parse('{"path":"/backend/protocol/webservice.html","title":"webservice","lang":"zh-CN","frontmatter":{"title":"webservice","date":"2023-01-01T00:00:00.000Z","tags":"webservice","categories":"后端","description":"WebService是用来开发分布式的互操作应用程序 1. WebService介绍 2. SOAP和WSDL 3. 基于jdk1.7发布一个WebService服务 4. apache CXF入门 1. WebService介绍 图片1.png图片1.png 2. SOAP和WSDL 3. 基于jdk1.7发布一个WebService服务 图片2.p...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/protocol/webservice.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"webservice"}],["meta",{"property":"og:description","content":"WebService是用来开发分布式的互操作应用程序 1. WebService介绍 2. SOAP和WSDL 3. 基于jdk1.7发布一个WebService服务 4. apache CXF入门 1. WebService介绍 图片1.png图片1.png 2. SOAP和WSDL 3. 基于jdk1.7发布一个WebService服务 图片2.p..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/d9e138740635ff40f1378.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"webservice\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/d9e138740635ff40f1378.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/f0324ee4eed25d8d96ac1.png\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":5.41,"words":1623},"filePathRelative":"backend/protocol/webservice.md","localizedDate":"2023年1月1日","excerpt":"<p>WebService是用来开发分布式的互操作应用程序</p>\\n<!--more-->\\n<!-- TOC -->\\n<ul>\\n<li><a href=\\"#1-webservice%E4%BB%8B%E7%BB%8D\\">1. WebService介绍</a></li>\\n<li><a href=\\"#2-soap%E5%92%8Cwsdl\\">2. SOAP和WSDL</a></li>\\n<li><a href=\\"#3-%E5%9F%BA%E4%BA%8Ejdk17%E5%8F%91%E5%B8%83%E4%B8%80%E4%B8%AAwebservice%E6%9C%8D%E5%8A%A1\\">3. 基于jdk1.7发布一个WebService服务</a></li>\\n<li><a href=\\"#4-apache-cxf%E5%85%A5%E9%97%A8\\">4. apache CXF入门</a></li>\\n</ul>","autoDesc":true}');export{o as comp,m as data};
