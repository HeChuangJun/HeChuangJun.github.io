import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,e as t}from"./app-7KT7HDzT.js";const s={},l=t(`<ul><li><a href="#1-websocket%E4%B8%8Ehttp%E7%9A%84%E6%AF%94%E8%BE%83">1. websocket与http的比较</a></li><li><a href="#2-%E6%9C%8D%E5%8A%A1%E7%AB%AF">2. 服务端</a><ul><li><a href="#21-pomxml">2.1. pom.xml</a></li><li><a href="#22-java">2.2. java</a></li></ul></li><li><a href="#3-springboot%E6%95%B4%E5%90%88websocket">3. springboot整合websocket</a><ul><li><a href="#31-pomxml">3.1. pom.xml</a></li><li><a href="#32-websocketconfigwebsocketinterceptormywebsockethandler">3.2. WebSocketConfig、WebSocketInterceptor、MyWebSocketHandler</a></li><li><a href="#33-sseemitter">3.3. SseEmitter</a></li></ul></li><li><a href="#4-%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%BF%9E%E6%8E%A5-%E5%89%8D%E7%AB%AFjs%E5%AF%B9%E8%B1%A1websocket%E5%92%8Ceventsource%E5%88%86%E5%88%AB%E7%94%A8%E4%BA%8E%E8%BF%9E%E6%8E%A5%E8%BF%99%E4%B8%A4%E7%A7%8D%E6%9C%8D%E5%8A%A1">4. 客户端连接 前端js对象WebSocket和EventSource分别用于连接这两种服务。</a></li><li><a href="#5-nginx%E9%9C%80%E8%A6%81%E7%9A%84%E9%A2%9D%E5%A4%96%E9%85%8D%E7%BD%AE">5. Nginx需要的额外配置</a><ul><li><a href="#51-eventsource">5.1. EventSource</a></li><li><a href="#52-websocket">5.2. WebSocket</a></li></ul></li><li><a href="#6-%E5%B7%B2%E7%9F%A5%E9%97%AE%E9%A2%98">6. 已知问题</a></li><li><a href="#7-%E8%8E%B7%E5%BE%97httpssession%E7%9A%84%E6%96%B9%E6%B3%95">7. 获得httpssession的方法</a><ul><li><a href="#71-gethttpsessionconfigurator">7.1. GetHttpSessionConfigurator</a></li><li><a href="#72-%E5%9C%A8serverendpoint%E6%B3%A8%E8%A7%A3%E9%87%8C%E9%9D%A2%E6%B7%BB%E5%8A%A0configurator%E5%B1%9E%E6%80%A7">7.2. 在@ServerEndpoint注解里面添加configurator属性</a></li><li><a href="#73-%E5%9C%A8onopen%E6%96%B9%E6%B3%95%E9%87%8C%E5%8A%A0%E5%85%A5%E5%8F%82%E6%95%B0endpointconfig-config%E5%8D%B3%E5%8F%AF%E8%8E%B7%E5%8F%96httpsession">7.3. 在onOpen方法里加入参数EndpointConfig config即可获取HttpSession</a></li></ul></li></ul><h1 id="_1-websocket与http的比较" tabindex="-1"><a class="header-anchor" href="#_1-websocket与http的比较"><span>1. websocket与http的比较</span></a></h1><ul><li>WebSocket协议实现了浏览器与服务器的全双工通信，扩展了浏览器与服务端的通信功能，使服务端也能主动向客户端发送数据。JavaEE 7中出了JSR-356:Java API for WebSocket规范。不少Web容器，如Tomcat,Nginx,Jetty等都支持WebSocket。Tomcat从7.0.27开始支持 WebSocket，从7.0.47开始支持JSR-356，下面的Demo代码也是需要部署在Tomcat7.0.47（不包括）以上的版本才能运行</li><li>webscoket相比于http的优势主要有服务器能主动发信息给前端,发的信息是轻量级的，所以服务器的压力较少</li></ul><h1 id="_2-服务端" tabindex="-1"><a class="header-anchor" href="#_2-服务端"><span>2. 服务端</span></a></h1><h2 id="_2-1-pom-xml" tabindex="-1"><a class="header-anchor" href="#_2-1-pom-xml"><span>2.1. pom.xml</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;dependencies&gt;
	&lt;dependency&gt;
	&lt;groupId&gt;javax&lt;/groupId&gt;
	&lt;artifactId&gt;javaee-api&lt;/artifactId&gt;
	&lt;version&gt;7.0&lt;/version&gt;
	&lt;/dependency&gt;
&lt;/dependencies&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-2-java" tabindex="-1"><a class="header-anchor" href="#_2-2-java"><span>2.2. java</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package com.junye.testwebsocket;
import java.io.IOException;
import java.util.concurrent.CopyOnWriteArraySet;
import javax.websocket.*;
import javax.websocket.server.ServerEndpoint;

@ServerEndpoint(&quot;/websocket&quot;)
public class TestWebscoket {
	/**
	* @ServerEndpoint 注解是一个类层次的注解，它的功能主要是将目前的类定义成一个websocket服务器端,
	* 注解的值将被用于监听用户连接的终端访问URL地址,客户端可以通过这个URL来连接到WebSocket服务器端
	*/
	
	//与某个客户端的连接会话，需要通过它来给客户端发送数据
	private Session session;
	
	/**
	* 连接建立成功调用的方法
	* @param session  可选的参数。
	*	session为与某个客户端的连接会话，需要通过它来给客户端发送数据
	*/
	@OnOpen
	public void onOpen(Session session){
		this.session = session;
	}

	/**
	* 连接关闭调用的方法
	*/
	@OnClose
	public void onClose(){
		System.out.println(&quot;连接关闭&quot;);
	}

	/**
	* 收到客户端消息后调用的方法
	* @param message 客户端发送过来的消息
	* @param session 可选的参数
	*/
	@OnMessage
	public void onMessage(String message, Session session) {
		System.out.println(&quot;来自客户端的消息:&quot; + message);
	}

	/**
	* 发生错误时调用
	* @param session
	* @param error
	*/
	@OnError
	public void onError(Session session, Throwable error){
		System.out.println(&quot;发生错误&quot;);
		error.printStackTrace();
	}

	/**
	* 这个方法与上面几个方法不一样。没有用注解，是根据自己需要添加的方法。
	* @param message
	* @throws IOException
	*/
	public void sendMessage(String message) throws IOException{
		this.session.getBasicRemote().sendText(message);
		//this.session.getAsyncRemote().sendText(message);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-springboot整合websocket" tabindex="-1"><a class="header-anchor" href="#_3-springboot整合websocket"><span>3. springboot整合websocket</span></a></h1><h2 id="_3-1-pom-xml" tabindex="-1"><a class="header-anchor" href="#_3-1-pom-xml"><span>3.1. pom.xml</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;dependencies&gt;
	&lt;dependency&gt;
	&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
	&lt;artifactId&gt;spring-boot-starter-websocket&lt;/artifactId&gt;
	&lt;/dependency&gt;
&lt;/dependencies&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-2-websocketconfig、websocketinterceptor、mywebsockethandler" tabindex="-1"><a class="header-anchor" href="#_3-2-websocketconfig、websocketinterceptor、mywebsockethandler"><span>3.2. WebSocketConfig、WebSocketInterceptor、MyWebSocketHandler</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {
  @Bean
  public TextWebSocketHandler myWebSocketHandler() {
    return new MyWebSocketHandler();
  }
  @Override
  public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
    registry.addHandler(myWebSocketHandler(), &quot;/myweb/socket&quot;).addInterceptors(new WebSocketInterceptor()).setAllowedOrigins(&quot;*&quot;);//https://www.cnblogs.com/exmyth/p/11720371.html  
    //registry.addHandler(myWebSocketHandler(), &quot;/myweb/sockjs&quot;).addInterceptors(new WebSocketInterceptor()).withSockJS();  
  }
  @Bean
  public TaskScheduler taskScheduler() {//避免找不到TaskScheduler Bean
    ThreadPoolTaskScheduler taskScheduler = new ThreadPoolTaskScheduler();
    taskScheduler.setPoolSize(10);
    taskScheduler.initialize();
    return taskScheduler;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class WebSocketInterceptor extends HttpSessionHandshakeInterceptor {
  @Override
  public boolean beforeHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler wsHandler, Map&lt;String, Object&gt; attributes) throws Exception {
    String channel = ((ServletServerHttpRequest)request).getServletRequest().getParameter(&quot;ch&quot;);
    attributes.put(&quot;channel&quot;, channel);//传参
    return super.beforeHandshake(request, response, wsHandler, attributes);
  }
  @Override
  public void afterHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler wsHandler, Exception ex) {
    super.afterHandshake(request, response, wsHandler, ex);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@Slf4j
public class MyWebSocketHandler extends TextWebSocketHandler{
  @Autowired MyWebSocketService myWebSocketService;//注入需要的Service
  @Override
  public void afterConnectionEstablished(WebSocketSession session) throws Exception {
    String channel = (String)session.getAttributes().get(&quot;channel&quot;);//获取参数
    //记下session和参数用于下一步发消息...
  }
  @Override
  public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
    String channel = (String)session.getAttributes().get(&quot;channel&quot;);
    //做会话关闭后的处理...
  }
  @Override
  protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
    log.debug(&quot;receive text message: &quot; + message.getPayload());
    //收到消息的处理...
  }
  public void send(WebSocketSession session, String text) {
    try {
      TextMessage message = new TextMessage(text);
      session.sendMessage(message);//发送消息的方法
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-3-sseemitter" tabindex="-1"><a class="header-anchor" href="#_3-3-sseemitter"><span>3.3. SseEmitter</span></a></h2><ul><li>Controller方法返回SseEmitter对象即可为客户端提供EventSource</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>private static Set&lt;SseEmitter&gt; emitters = new HashSet&lt;&gt;();
@RequestMapping(&quot;/myweb/eventsource&quot;)
@ResponseBody
SseEmitter eventSource(String ch) {
	SseEmitter emitter = new SseEmitter(0L);
	emitters.put(emitter);//记下emitter用于之后发送数据
	emitter.onCompletion(() -&gt; {
		emitters.remove(emitter);//做连接关闭后的处理(ch, emitter)...
	});
	emitter.onTimeout(() -&gt; {
		emitter.complete();
	});
	emitter.onError((e) -&gt; {
		emitter.completeWithError(e);
	});
	return emitter;
	}
	向所有的emitters发送数据text

	SseEventBuilder builder = SseEmitter.event().data(text);
	emitters.forEach(emitter -&gt; {
	try {
		emitter.send(builder);
	} catch (Exception e) {
		errors.add(emitter);
	}
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-客户端连接-前端js对象websocket和eventsource分别用于连接这两种服务。" tabindex="-1"><a class="header-anchor" href="#_4-客户端连接-前端js对象websocket和eventsource分别用于连接这两种服务。"><span>4. 客户端连接 前端js对象WebSocket和EventSource分别用于连接这两种服务。</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
	&lt;head&gt;
	&lt;title&gt;Java后端WebSocket的Tomcat实现&lt;/title&gt;
	&lt;/head&gt;
&lt;body&gt;
	Welcome&lt;br/&gt;&lt;input id=&quot;text&quot; type=&quot;text&quot;/&gt;
	&lt;button onclick=&quot;send()&quot;&gt;发送消息&lt;/button&gt;
	&lt;hr/&gt;
	&lt;button onclick=&quot;closeWebSocket()&quot;&gt;关闭WebSocket连接&lt;/button&gt;
	&lt;hr/&gt;
	&lt;button onclick=&quot;onclear()&quot;&gt;清空&lt;/button&gt;
	&lt;hr/&gt;
	&lt;div id=&quot;message&quot;&gt;&lt;/div&gt;
&lt;/body&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
     var websocket = null;
     //判断当前浏览器是否支持WebSocket
     if (&#39;WebSocket&#39; in window) {
         websocket = new WebSocket(&quot;ws://localhost:8080/testwebscoket/websocket&quot;);
     }
    else {
         alert(&#39;当前浏览器 Not support websocket&#39;)
    }
     //连接发生错误的回调方法
     websocket.onerror = function () {
         setMessageInnerHTML(&quot;WebSocket连接发生错误&quot;);
    };
 
     //连接成功建立的回调方法
     websocket.onopen = function () {
         setMessageInnerHTML(&quot;WebSocket连接成功&quot;);
     }
 
     //接收到消息的回调方法
     websocket.onmessage = function (event) {
         setMessageInnerHTML(event.data);
     }
 
     //连接关闭的回调方法
     websocket.onclose = function () {
         setMessageInnerHTML(&quot;WebSocket连接关闭&quot;);
     }
 
     //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，
	 //防止连接还没断开就关闭窗口，server端会抛异常。
     window.onbeforeunload = function () {
         closeWebSocket();
     }
 
     //将消息显示在网页上
     function setMessageInnerHTML(innerHTML) {
         document.getElementById(&#39;message&#39;).innerHTML += innerHTML + &#39;&lt;br/&gt;&#39;;
    }
 
    //关闭WebSocket连接
     function closeWebSocket() {
         websocket.close();
     }
 
     //发送消息
     function send() {
         var message = document.getElementById(&#39;text&#39;).value;
         websocket.send(message);
     }
	 function onclear(){
        document.getElementById(&#39;message&#39;).innerHTML = &quot;&quot;;
    }
	&lt;/script&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_5-nginx需要的额外配置" tabindex="-1"><a class="header-anchor" href="#_5-nginx需要的额外配置"><span>5. Nginx需要的额外配置</span></a></h1><h2 id="_5-1-eventsource" tabindex="-1"><a class="header-anchor" href="#_5-1-eventsource"><span>5.1. EventSource</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>proxy_http_version 1.1;
proxy_set_header Connection &#39;&#39;;
proxy_buffering off;
proxy_cache off;
gzip off;
chunked_transfer_encoding off;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-2-websocket" tabindex="-1"><a class="header-anchor" href="#_5-2-websocket"><span>5.2. WebSocket</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection &quot;Upgrade&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_6-已知问题" tabindex="-1"><a class="header-anchor" href="#_6-已知问题"><span>6. 已知问题</span></a></h1><ul><li>火狐下EventSource中断之后不会自动重连。</li><li>IE系列浏览器都不支持EventSource。</li></ul><h1 id="_7-获得httpssession的方法" tabindex="-1"><a class="header-anchor" href="#_7-获得httpssession的方法"><span>7. 获得httpssession的方法</span></a></h1><ul><li>由于WebSocket与Http协议的不同，故在使用常用的HttpSession方面就存在了一些问题。</li></ul><h2 id="_7-1-gethttpsessionconfigurator" tabindex="-1"><a class="header-anchor" href="#_7-1-gethttpsessionconfigurator"><span>7.1. GetHttpSessionConfigurator</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package per.zww.web;
import javax.servlet.http.HttpSession;
import javax.websocket.HandshakeResponse;
import javax.websocket.server.HandshakeRequest;
import javax.websocket.server.ServerEndpointConfig;
import javax.websocket.server.ServerEndpointConfig.Configurator;
/*
* 获取HttpSession
* 
*/
public class GetHttpSessionConfigurator extends Configurator {
	@Override
	public void modifyHandshake(ServerEndpointConfig sec,HandshakeRequest request, HandshakeResponse response) {
		// TODO Auto-generated method stub
		HttpSession httpSession=(HttpSession) request.getHttpSession();
		sec.getUserProperties().put(HttpSession.class.getName(),httpSession);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-2-在-serverendpoint注解里面添加configurator属性" tabindex="-1"><a class="header-anchor" href="#_7-2-在-serverendpoint注解里面添加configurator属性"><span>7.2. 在@ServerEndpoint注解里面添加configurator属性</span></a></h2><ul><li>@ServerEndpoint(value=&quot;/socketTest&quot;,configurator=GetHttpSessionConfigurator.class)</li></ul><h2 id="_7-3-在onopen方法里加入参数endpointconfig-config即可获取httpsession" tabindex="-1"><a class="header-anchor" href="#_7-3-在onopen方法里加入参数endpointconfig-config即可获取httpsession"><span>7.3. 在onOpen方法里加入参数EndpointConfig config即可获取HttpSession</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@OnOpen
public void onOpen(Session session,EndpointConfig config) {
	HttpSession httpSession= (HttpSession) config.getUserProperties().get(HttpSession.class.getName());
	if (httpSession == null){  
		httpSession = new HttpSession() {  
			@Override  
			public long getCreationTime() {  return 0;  }  

			@Override  
			public String getId() {  return null;  }  

			@Override  
			public long getLastAccessedTime() {  return 0;  }  

			@Override  
			public ServletContext getServletContext() {  return null;  }  

			@Override  
			public void setMaxInactiveInterval(int i) {}  

			@Override  
			public int getMaxInactiveInterval() {  return 0;  }  

			@Override  
			public HttpSessionContext getSessionContext() {  return null;  }  

			@Override  
			public Object getAttribute(String s) {  return null;  }  

			@Override  
			public Object getValue(String s) {  return null;  }  

			@Override  
			public Enumeration&lt;String&gt; getAttributeNames() {  return null;  }  

			@Override  
			public String[] getValueNames() {  return new String[0];  }  

			@Override  
			public void setAttribute(String s, Object o) {}  

			@Override  
			public void putValue(String s, Object o) {}  

			@Override  
			public void removeAttribute(String s) {}  

			@Override  
			public void removeValue(String s) {}  

			@Override  
			public void invalidate() {}  

			@Override  
			public boolean isNew() {  return false; }  
		};  
	}
	sessionMap.put(session.getId(), session);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),r=[l];function d(a,c){return n(),i("div",null,r)}const u=e(s,[["render",d],["__file","websocket.html.vue"]]),b=JSON.parse('{"path":"/backend/protocol/websocket.html","title":"websocket","lang":"zh-CN","frontmatter":{"title":"websocket","date":"2023-01-01T00:00:00.000Z","tags":"websocket","categories":"后端","description":"1. websocket与http的比较 2. 服务端 2.1. pom.xml 2.2. java 3. springboot整合websocket 3.1. pom.xml 3.2. WebSocketConfig、WebSocketInterceptor、MyWebSocketHandler 3.3. SseEmitter 4. 客户端连接 前端...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/protocol/websocket.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"websocket"}],["meta",{"property":"og:description","content":"1. websocket与http的比较 2. 服务端 2.1. pom.xml 2.2. java 3. springboot整合websocket 3.1. pom.xml 3.2. WebSocketConfig、WebSocketInterceptor、MyWebSocketHandler 3.3. SseEmitter 4. 客户端连接 前端..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"websocket\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"2.1. pom.xml","slug":"_2-1-pom-xml","link":"#_2-1-pom-xml","children":[]},{"level":2,"title":"2.2. java","slug":"_2-2-java","link":"#_2-2-java","children":[]},{"level":2,"title":"3.1. pom.xml","slug":"_3-1-pom-xml","link":"#_3-1-pom-xml","children":[]},{"level":2,"title":"3.2. WebSocketConfig、WebSocketInterceptor、MyWebSocketHandler","slug":"_3-2-websocketconfig、websocketinterceptor、mywebsockethandler","link":"#_3-2-websocketconfig、websocketinterceptor、mywebsockethandler","children":[]},{"level":2,"title":"3.3. SseEmitter","slug":"_3-3-sseemitter","link":"#_3-3-sseemitter","children":[]},{"level":2,"title":"5.1. EventSource","slug":"_5-1-eventsource","link":"#_5-1-eventsource","children":[]},{"level":2,"title":"5.2. WebSocket","slug":"_5-2-websocket","link":"#_5-2-websocket","children":[]},{"level":2,"title":"7.1. GetHttpSessionConfigurator","slug":"_7-1-gethttpsessionconfigurator","link":"#_7-1-gethttpsessionconfigurator","children":[]},{"level":2,"title":"7.2. 在@ServerEndpoint注解里面添加configurator属性","slug":"_7-2-在-serverendpoint注解里面添加configurator属性","link":"#_7-2-在-serverendpoint注解里面添加configurator属性","children":[]},{"level":2,"title":"7.3. 在onOpen方法里加入参数EndpointConfig config即可获取HttpSession","slug":"_7-3-在onopen方法里加入参数endpointconfig-config即可获取httpsession","link":"#_7-3-在onopen方法里加入参数endpointconfig-config即可获取httpsession","children":[]}],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":5.73,"words":1719},"filePathRelative":"backend/protocol/websocket.md","localizedDate":"2023年1月1日","excerpt":"<!-- TOC -->\\n<ul>\\n<li><a href=\\"#1-websocket%E4%B8%8Ehttp%E7%9A%84%E6%AF%94%E8%BE%83\\">1. websocket与http的比较</a></li>\\n<li><a href=\\"#2-%E6%9C%8D%E5%8A%A1%E7%AB%AF\\">2. 服务端</a>\\n<ul>\\n<li><a href=\\"#21-pomxml\\">2.1. pom.xml</a></li>\\n<li><a href=\\"#22-java\\">2.2. java</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#3-springboot%E6%95%B4%E5%90%88websocket\\">3. springboot整合websocket</a>\\n<ul>\\n<li><a href=\\"#31-pomxml\\">3.1. pom.xml</a></li>\\n<li><a href=\\"#32-websocketconfigwebsocketinterceptormywebsockethandler\\">3.2. WebSocketConfig、WebSocketInterceptor、MyWebSocketHandler</a></li>\\n<li><a href=\\"#33-sseemitter\\">3.3. SseEmitter</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#4-%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%BF%9E%E6%8E%A5-%E5%89%8D%E7%AB%AFjs%E5%AF%B9%E8%B1%A1websocket%E5%92%8Ceventsource%E5%88%86%E5%88%AB%E7%94%A8%E4%BA%8E%E8%BF%9E%E6%8E%A5%E8%BF%99%E4%B8%A4%E7%A7%8D%E6%9C%8D%E5%8A%A1\\">4. 客户端连接 前端js对象WebSocket和EventSource分别用于连接这两种服务。</a></li>\\n<li><a href=\\"#5-nginx%E9%9C%80%E8%A6%81%E7%9A%84%E9%A2%9D%E5%A4%96%E9%85%8D%E7%BD%AE\\">5. Nginx需要的额外配置</a>\\n<ul>\\n<li><a href=\\"#51-eventsource\\">5.1. EventSource</a></li>\\n<li><a href=\\"#52-websocket\\">5.2. WebSocket</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#6-%E5%B7%B2%E7%9F%A5%E9%97%AE%E9%A2%98\\">6. 已知问题</a></li>\\n<li><a href=\\"#7-%E8%8E%B7%E5%BE%97httpssession%E7%9A%84%E6%96%B9%E6%B3%95\\">7. 获得httpssession的方法</a>\\n<ul>\\n<li><a href=\\"#71-gethttpsessionconfigurator\\">7.1. GetHttpSessionConfigurator</a></li>\\n<li><a href=\\"#72-%E5%9C%A8serverendpoint%E6%B3%A8%E8%A7%A3%E9%87%8C%E9%9D%A2%E6%B7%BB%E5%8A%A0configurator%E5%B1%9E%E6%80%A7\\">7.2. 在@ServerEndpoint注解里面添加configurator属性</a></li>\\n<li><a href=\\"#73-%E5%9C%A8onopen%E6%96%B9%E6%B3%95%E9%87%8C%E5%8A%A0%E5%85%A5%E5%8F%82%E6%95%B0endpointconfig-config%E5%8D%B3%E5%8F%AF%E8%8E%B7%E5%8F%96httpsession\\">7.3. 在onOpen方法里加入参数EndpointConfig config即可获取HttpSession</a></li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{u as comp,b as data};
