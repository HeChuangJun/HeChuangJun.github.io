import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,e as i}from"./app-7KT7HDzT.js";const l={},s=i(`<p>http</p><ul><li><a href="#1-http%E5%8D%8F%E8%AE%AE">1. http协议</a></li><li><a href="#2-tomcat%E8%BD%BB%E9%87%8F%E7%BA%A7%E5%BA%94%E7%94%A8%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%94%AF%E6%8C%81servlet%E5%92%8Cjsp%E8%A7%84%E8%8C%83%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84%E4%BA%86%E8%A7%A3">2. Tomcat(轻量级应用服务器，支持Servlet和jsp规范)目录结构（了解）</a></li><li><a href="#3-web%E9%A1%B9%E7%9B%AE%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84">3. WEB项目目录结构</a></li><li><a href="#4-%E8%BD%AF%E4%BB%B6%E6%9E%B6%E6%9E%84">4. 软件架构</a></li><li><a href="#5-web%E6%9C%8D%E5%8A%A1%E5%99%A8">5. WEB服务器</a></li><li><a href="#6-web%E8%B5%84%E6%BA%90%E5%AD%98%E5%9C%A8%E4%BA%8Eweb%E5%BA%94%E7%94%A8%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%8F%AF%E4%BE%9B%E5%A4%96%E7%95%8C%E8%AE%BF%E9%97%AE%E7%9A%84%E8%B5%84%E6%BA%90%E5%B0%B1%E6%98%AFweb%E8%B5%84%E6%BA%90">6. WEB资源：存在于web应用服务器可供外界访问的资源就是web资源</a></li></ul><h1 id="_1-http协议" tabindex="-1"><a class="header-anchor" href="#_1-http协议"><span>1. http协议</span></a></h1><ul><li>超文本传输协议，用于定义WEB服务器和WEB浏览器之间交换数据的过程</li><li>特点：HTTP协议默认端口80，响应和请求必须成对，先有请求后有响应</li></ul><table><thead><tr><th style="text-align:center;">http协议组成</th><th style="text-align:center;">组成</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">Http请求协议</td><td style="text-align:center;">请求行</td><td style="text-align:center;">POST/day09/01.http/from.html HTTP/1.1请求格式的第一行</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">①请求方式get：请求参数在url后面,例:x.html?a=a&amp;b=b url长度限制get请求数据大小，没有请求体，不安全</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">Post：请求参数在请求体，长度无限制，安全,除了表单的method为post外，其他都是get请求</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">②统一资源定位符URl 协议://域名:端口号/资源位置?参数=值</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">③协议版本</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">请求头</td><td style="text-align:center;">Host：localhost:8080</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">User-Agent\\refer:防盗链（判断它是不是以什么开头就行startswith）</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">if-modified-since:浏览器最后一次缓存时间</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">cookie:浏览器缓存的一种</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">请求体</td><td style="text-align:center;">a=a&amp;b=b 一般只有post请求方式才有，都是用户表单提交的数据</td></tr><tr><td style="text-align:center;">Http响应协议</td><td style="text-align:center;">响应行</td><td style="text-align:center;">HTTP/1.1 200 OK 协议/版本 状态码</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">200：成功302：重定向304：访问本地缓存404：找不到资源500：服务器内部错误</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">响应头</td><td style="text-align:center;">服务器通过响应头来控制浏览器的行为，不同头浏览器的操作不同</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">Location:指定响应的路径，需要与状态码302配合使用</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">Content-Type:响应正文的类型(MIME类型)text/html:charset=UTF-8</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">Content-Disposition:通过浏览器以下载的方式解析正文attachment;filename=xx.zip</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">Set-Cookie:服务器向浏览器写入cookie</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">响应体</td><td style="text-align:center;">服务器发给浏览器的正文、响应体是服务器回写给客户端的页面正文</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">浏览器将正文加载到内存，然后解析渲染显示页面内容</td></tr></tbody></table><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/306a175def763027c2977.png" alt="http请求.png" tabindex="0"><figcaption>http请求.png</figcaption></figure><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/e60aaac0f67769eb9b331.png" alt="http响应.png" tabindex="0"><figcaption>http响应.png</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>可以用 telnet 程序测试 telnet 192.168.80.1 8080
get 请求示例

GET /test2?name=1i&amp;age=10 HTTP/1.1
Host:1ocalhost

post 请求示例
PosT /test2 HTTP/1.1 
Host: localhost
Content-Type:application/x-www-form-urlencoded
Content-Length:10

name=zhang&amp;age=10

// java求urlencode utf-8
bytel]bytes =&quot;张&quot;.getBytes(standardcharsets.UTF_8);
System.out.println(bytes);
bytes:[-27，-68，-96]
右键-查看方式-Hex查看16进制

application/x-www-form-urlencoed 格式细节
。参数分成名字和值，中间用=分隔
。多个参数使用 &amp; 进行分隔
。【张】等特殊字符需要用 encodeURIComponent()编码为【%E5%BC%A0】后才能发送
encodeURIComponent(&quot;张&quot;)
%E5%BC%AB

可以用谷歌浏览器的控制台求数据长度
&quot;name=zhang&amp;age=18&quot;.length
求urlencode

json 请求示例
PosT /test3 HTTP/1.1
Host: 1ocalhost
Content-Type:application/json
Content-Length:25
{&quot;name&quot;: &quot;zhang&quot; , &quot;age&quot; : 18}

后端@RequestBody对象接收
{&quot;属性名&quot;:属性值}
字符串&quot;”
数字
true, false
null
属性值中文也可以，不用urlencode
求长度&#39;{&quot;name&quot;:&quot;张&quot;,&quot;age&quot;:18}&#39;.length

multipart 请求示例
PosT /test2 HTTP/1.1
Host: 1ocalhost
Content-Type:mutipart/form-data;boundary=123
content-Length:125

--123
Content-Disposition:form-data;name-&quot;&#39;name

1isi
--123
Content-Disposition:form-data; name=&quot;age&quot;

39
--123--

boundary=123 用来定义分隔符
起始分隔符是 --分隔符
结束分隔符是 --分隔符--

使用length计算时，会忽略/r/n，导致len减少

客户端发送
编码
o application/x-www-form-urlencoded :url 编码
o application/json: utf-8 编码
o multipart/form-data:每部分编码可以不同
表单只支持以 application/x-www-form-urlencoded 和multipart/form-data 格式发送数据
文件上传需要用 multipart/form-data 格式
js 代码可以支持任意格式发送数据

服务端接收
对application/x-www-form-urlencoded 和multipart/form-data格式的数据，Spring 接收方式是统一的，只需要用java bean 的属性名对应请求参数名即可
对于 applicaiton/json 格式的数据，Spring 接收需要使用@RequestBody 注解+java bean 的方式

session 原理
Http 无状态，有会话
。无状态是指，请求之间相互盘立，第一次请求的数据，第二次请求不能重用name=zhang
，有会话是指，客户端和服务端都有相应的技术，可以暂存数据，让数据在请求间共享
服务端使用了 session 技术来暂存数据
存
GET /s1?name=zhang HTTP/1.1
Host: 1ocalhost
取
GET /S2 HTTP/1.1
Host: 1ocalhost
Cookie:ISESSIONID=BF219FEFB6FF6960DA2537CDDED6C393

@RequestMapping(&quot;/s1&quot;)
@ResponseBody
public string sl(
HttpSession session,string name){
	session.setAttribute( name:&quot;name&quot;, name);
	return&quot;数据已存储&quot;;
}
@RequestMapping(&quot;/s2&quot;)
#ResponseBody
public string s2(Httpsession session){
	return &quot;取出数据&quot;+session.getAttribute( name:&quot;name&quot;);
}

生成 token
GET /j1?name=zhang&amp;pass=123 HTTP/1.1
Host: 1ocalhost

校验 token
GET /2 HTTP/1.1Host:1ocalhost
Authorization:
eyihbGcioijIuzIlNi19.eyzdwIioijhzGlpbi19.G4xp74SX4dECKIwhK2kRmj1w157nSAR0OBMSpQ-108

RequestMapping(&quot;/j1&quot;)
ResponseBody
public string j1(string name,string pass){
	if(&quot;zhang&quot;.equals(name)&amp;&amp;&quot;123&quot;.equals(pass)){
		string token =wts.builder().setsubject(name).signwith(key).compact
		return&quot;验证身份通过:&quot;+token;
    } else {
		return“验证身份失败&quot;;
	}
}
RequestMapping(&quot;/j2&quot;)
ResponseBody
public string j2(@RequestHeader string authorization){
    try {
        System.out.println(authorization);
        Jws&lt;Claims&gt; jws = Jwts.parserBuilder().setsigningKey(key).build().pa
        return“校验通过，你是:&quot;+jws.getBody().getSubject();
    }catch(Exception e){
        return“校验失败&quot;;
    }
}

header(签名算法) payload(数据) 签名 最后一段数据与前两个数加服务器的Key签名生成

String token = &quot;eyJhbGci0iJIUzI1NiJ9.eyJzdWIi0iJ6aGFuZyJ9._1-P_TLLZQPb1_LCYGWPLMZaKQ8MCW_PLBbYPZ30X28&quot;;

System.out.printin(new string(Base64.getDecoder().decode(&quot;eyIhbGci0iJIUzI1NiJ9&quot;)));

System.out.printin(new string(Base64.getDecoder().decode(&quot;eyJzdWIi0iJ6aGFuZyJ9&quot;)));

String str =&quot;&quot;&quot;{&quot;sub&quot;:&quot;admin&quot;}&quot;“&quot;;
System.out.println(Base64.getEncoder().encodeTostring(str.getBytes(standardcharsets.UTF_8)));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://i2.wp.com/wx4.sinaimg.cn/large/0070JETugy1i41p4pix52j30qp0efwf5.jpg" alt="1.png" tabindex="0"><figcaption>1.png</figcaption></figure><figure><img src="https://i3.wp.com/wx4.sinaimg.cn/large/0070JETugy1i41p55yez6j30mo0e2js1.jpg" alt="2.png" tabindex="0"><figcaption>2.png</figcaption></figure><h1 id="_2-tomcat-轻量级应用服务器-支持servlet和jsp规范-目录结构-了解" tabindex="-1"><a class="header-anchor" href="#_2-tomcat-轻量级应用服务器-支持servlet和jsp规范-目录结构-了解"><span>2. Tomcat(轻量级应用服务器，支持Servlet和jsp规范)目录结构（了解）</span></a></h1><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/9a417a4b6d5586ad9e533.png" alt="tomcat目录.png" tabindex="0"><figcaption>tomcat目录.png</figcaption></figure><ul><li>conf：配置文件目录 (config /configuration) <ul><li>核心配置文件：server.xml</li><li>用户权限配置文件：tomcat-users.xml</li><li>所有web项目默认配置文件：web.xml</li></ul></li><li>bin：脚本目录 <ul><li>启动脚本：startup.bat</li><li>停止脚本：shutdown.bat</li></ul></li><li>lib：依赖库，tomcat和web项目中需要使用的jar包 <ul><li>logs：日志文件.</li><li>localhost_access_log.<em>.txt tomcat记录用户访问信息，星</em>表示时间。</li><li>例如：localhost_access_log.2016-02-28.txt</li></ul></li><li>temp：临时文件目录，文件夹内内容可以任意删除 <ul><li>webapps：默认情况下发布WEB项目所存放的目录</li><li>work：tomcat处理JSP的工作目录</li></ul></li></ul><h1 id="_3-web项目目录结构" tabindex="-1"><a class="header-anchor" href="#_3-web项目目录结构"><span>3. WEB项目目录结构</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	项目名称(webapps：)		
	|----静态资源html，css，js
	|---WEB-INF(不能直接通过浏览器进行访问)
		|--web.xml 当前web项目的核心配置，servlet2.5有，3.0省略
		|--lib：依赖库，tomcat和web项目中需要使用的jar包
		|--class:java源码编译后生成的class文件存放的位置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-软件架构" tabindex="-1"><a class="header-anchor" href="#_4-软件架构"><span>4. 软件架构</span></a></h1><table><thead><tr><th style="text-align:center;">软件架构</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">B/S结构(淘宝)</td><td style="text-align:center;">浏览器/服务器，通过浏览器和服务器交互，不需要安装其他程序</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">优点:维护和升级简单，无缝升级、不必安装程序，操作系统内置浏览器</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">缺点:用户体验受浏览器限制、信息不安全（要用U盾）服务器负荷重（大部分计算在服务器端）</td></tr><tr><td style="text-align:center;">C/S结构（迅雷）</td><td style="text-align:center;">客户端/浏览器端，要求客户端安装客户端程序</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">优点:用户体验不守限制、信息安全、服务器负荷低，部分计算功能在客户端</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">缺点:占用磁盘空间、维护和升级麻烦、安装依赖其他条件</td></tr></tbody></table><h1 id="_5-web服务器" tabindex="-1"><a class="header-anchor" href="#_5-web服务器"><span>5. WEB服务器</span></a></h1><table><thead><tr><th style="text-align:center;">WEB服务器</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">Tomcat</td><td style="text-align:center;">Apache组织提供的一个免费的小型服务器软件，支持servlet和JSP规范</td></tr><tr><td style="text-align:center;">WebLogic</td><td style="text-align:center;">bea公司的一个收费的大型的服务器软件，后被oracle收购，支持ee所有规范</td></tr><tr><td style="text-align:center;">WebSphere</td><td style="text-align:center;">IBM公司的一个收费的大型服务器软件，支持ee所有规范</td></tr><tr><td style="text-align:center;">JBoss</td><td style="text-align:center;">基于j2ee的开放源代码的应用服务器，管理EJB的容器的和服务器</td></tr></tbody></table><h1 id="_6-web资源-存在于web应用服务器可供外界访问的资源就是web资源" tabindex="-1"><a class="header-anchor" href="#_6-web资源-存在于web应用服务器可供外界访问的资源就是web资源"><span>6. WEB资源：存在于web应用服务器可供外界访问的资源就是web资源</span></a></h1><table><thead><tr><th style="text-align:center;">WEB资源</th><th style="text-align:center;">说明</th><th style="text-align:center;">举例</th></tr></thead><tbody><tr><td style="text-align:center;">动态资源</td><td style="text-align:center;">web页面中供人们浏览的数据是由程序产生，不同时间点访问web页面看到的内容各不相同</td><td style="text-align:center;">JSP/Servlet、ASP、PHP</td></tr><tr><td style="text-align:center;">静态资源</td><td style="text-align:center;">web页面中供人们浏览的数据始终是不变</td><td style="text-align:center;">HTML、CSS、JS、图片、多媒体</td></tr></tbody></table>`,21),a=[s];function d(r,c){return e(),n("div",null,a)}const v=t(l,[["render",d],["__file","http.html.vue"]]),m=JSON.parse('{"path":"/backend/protocol/http.html","title":"Http","lang":"zh-CN","frontmatter":{"title":"Http","date":"2023-01-01T00:00:00.000Z","tags":"Http","categories":"理论","description":"http 1. http协议 2. Tomcat(轻量级应用服务器，支持Servlet和jsp规范)目录结构（了解） 3. WEB项目目录结构 4. 软件架构 5. WEB服务器 6. WEB资源：存在于web应用服务器可供外界访问的资源就是web资源 1. http协议 超文本传输协议，用于定义WEB服务器和WEB浏览器之间交换数据的过程 特点：HT...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/protocol/http.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"Http"}],["meta",{"property":"og:description","content":"http 1. http协议 2. Tomcat(轻量级应用服务器，支持Servlet和jsp规范)目录结构（了解） 3. WEB项目目录结构 4. 软件架构 5. WEB服务器 6. WEB资源：存在于web应用服务器可供外界访问的资源就是web资源 1. http协议 超文本传输协议，用于定义WEB服务器和WEB浏览器之间交换数据的过程 特点：HT..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/306a175def763027c2977.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Http\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/306a175def763027c2977.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/e60aaac0f67769eb9b331.png\\",\\"https://i2.wp.com/wx4.sinaimg.cn/large/0070JETugy1i41p4pix52j30qp0efwf5.jpg\\",\\"https://i3.wp.com/wx4.sinaimg.cn/large/0070JETugy1i41p55yez6j30mo0e2js1.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/9a417a4b6d5586ad9e533.png\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":6.87,"words":2061},"filePathRelative":"backend/protocol/http.md","localizedDate":"2023年1月1日","excerpt":"<p>http</p>\\n<!--more-->\\n<!-- TOC -->\\n<ul>\\n<li><a href=\\"#1-http%E5%8D%8F%E8%AE%AE\\">1. http协议</a></li>\\n<li><a href=\\"#2-tomcat%E8%BD%BB%E9%87%8F%E7%BA%A7%E5%BA%94%E7%94%A8%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%94%AF%E6%8C%81servlet%E5%92%8Cjsp%E8%A7%84%E8%8C%83%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84%E4%BA%86%E8%A7%A3\\">2. Tomcat(轻量级应用服务器，支持Servlet和jsp规范)目录结构（了解）</a></li>\\n<li><a href=\\"#3-web%E9%A1%B9%E7%9B%AE%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84\\">3. WEB项目目录结构</a></li>\\n<li><a href=\\"#4-%E8%BD%AF%E4%BB%B6%E6%9E%B6%E6%9E%84\\">4. 软件架构</a></li>\\n<li><a href=\\"#5-web%E6%9C%8D%E5%8A%A1%E5%99%A8\\">5. WEB服务器</a></li>\\n<li><a href=\\"#6-web%E8%B5%84%E6%BA%90%E5%AD%98%E5%9C%A8%E4%BA%8Eweb%E5%BA%94%E7%94%A8%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%8F%AF%E4%BE%9B%E5%A4%96%E7%95%8C%E8%AE%BF%E9%97%AE%E7%9A%84%E8%B5%84%E6%BA%90%E5%B0%B1%E6%98%AFweb%E8%B5%84%E6%BA%90\\">6. WEB资源：存在于web应用服务器可供外界访问的资源就是web资源</a></li>\\n</ul>","autoDesc":true}');export{v as comp,m as data};
