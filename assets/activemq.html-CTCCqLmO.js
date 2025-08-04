import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e as t}from"./app-7KT7HDzT.js";const e={},c=t(`<p>[toc]</p><h1 id="_1-activemq介绍" tabindex="-1"><a class="header-anchor" href="#_1-activemq介绍"><span>1. ActiveMQ介绍</span></a></h1><ul><li>ActiveMQ 是Apache出品，最流行的，能力强劲的开源消息总线。</li><li>主要特点： <ul><li>多种语言和协议编写客户端。应用协议: OpenWire,Stomp REST,WS Notification,XMPP,AMQP</li><li>完全支持JMS1.1和J2EE 1.4规范 (持久化,XA消息,事务)</li><li>通过了常见J2EE服务器(如 Geronimo,JBoss 4, GlassFish,WebLogic)的测试,其中通过JCA 1.5 resource adaptors的配置,可以让ActiveMQ可以自动的部署到任何兼容J2EE 1.4 商业服务器上</li><li>支持多种传送协议:in-VM,TCP,SSL,NIO,UDP,JGroups,JXTA</li><li>支持通过JDBC和journal提供高速的消息持久化</li><li>从设计上保证了高性能的集群,客户端-服务器,点对点</li><li>支持Ajax</li><li>支持与Axis的整合</li><li>可以很容易得调用内嵌JMS provider,进行测试</li></ul></li></ul><h1 id="_2-activemq的消息形式" tabindex="-1"><a class="header-anchor" href="#_2-activemq的消息形式"><span>2. ActiveMQ的消息形式</span></a></h1><ul><li>点对点的，即一个生产者和一个消费者一一对应；</li><li>发布/订阅模式，即一个生产者产生消息并进行发送后，可以由多个消费者进行接收。</li><li>JMS定义了五种不同的消息正文格式，以及调用的消息类型，允许你发送并接收以一些不同形式的数据，提供现有消息格式的一些级别的兼容性。 <ul><li>StreamMessage -- Java原始值的数据流</li><li>MapMessage--一套名称-值对</li><li>TextMessage--一个字符串对象</li><li>ObjectMessage--一个序列化的 Java对象</li><li>BytesMessage--一个字节的数据流</li></ul></li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/92a0cb632b97d682ef936.png" alt="图片1.png" tabindex="0"><figcaption>图片1.png</figcaption></figure><h1 id="_3-activemq使用" tabindex="-1"><a class="header-anchor" href="#_3-activemq使用"><span>3. ActiveMQ使用</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>使用bin目录下的activemq命令启动：./activemq start 
关闭：./activemq stop
查看状态：./activemq status
注意：如果ActiveMQ整合spring使用不要使用activemq-all-5.12.0.jar包。建议使用5.11.2
进入管理后台：http://192.168.25.168:8161/admin用户名：admin密码：admin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">Queue</span>
	<span class="token class-name">Producer</span>
	生产者：生产消息，发送端。
	把jar包添加到工程中。使用<span class="token number">5.11</span><span class="token number">.2</span>版本的jar包。

	第一步：创建<span class="token class-name">ConnectionFactory</span>对象，需要指定服务端ip及端口号。
	第二步：使用<span class="token class-name">ConnectionFactory</span>对象创建一个<span class="token class-name">Connection</span>对象。
	第三步：开启连接，调用<span class="token class-name">Connection</span>对象的start方法。
	第四步：使用<span class="token class-name">Connection</span>对象创建一个<span class="token class-name">Session</span>对象。
	第五步：使用<span class="token class-name">Session</span>对象创建一个<span class="token class-name">Destination</span>对象（topic、queue），此处创建一个<span class="token class-name">Queue</span>对象。
	第六步：使用<span class="token class-name">Session</span>对象创建一个<span class="token class-name">Producer</span>对象。
	第七步：创建一个<span class="token class-name">Message</span>对象，创建一个<span class="token class-name">TextMessage</span>对象。
	第八步：使用<span class="token class-name">Producer</span>对象发送消息。
	第九步：关闭资源。
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testQueueProducer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
		<span class="token comment">// 第一步：创建ConnectionFactory对象，需要指定服务端ip及端口号。</span>
		<span class="token comment">//brokerURL服务器的ip及端口号</span>
		<span class="token class-name">ConnectionFactory</span> connectionFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ActiveMQConnectionFactory</span><span class="token punctuation">(</span><span class="token string">&quot;tcp://192.168.25.168:61616&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 第二步：使用ConnectionFactory对象创建一个Connection对象。</span>
		<span class="token class-name">Connection</span> connection <span class="token operator">=</span> connectionFactory<span class="token punctuation">.</span><span class="token function">createConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 第三步：开启连接，调用Connection对象的start方法。</span>
		connection<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 第四步：使用Connection对象创建一个Session对象。</span>
		<span class="token comment">//第一个参数：是否开启事务。true：开启事务，第二个参数忽略。</span>
		<span class="token comment">//第二个参数：当第一个参数为false时，才有意义。消息的应答模式。1、自动应答2、手动应答。一般是自动应答。</span>
		<span class="token class-name">Session</span> session <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createSession</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token class-name">Session</span><span class="token punctuation">.</span><span class="token constant">AUTO_ACKNOWLEDGE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 第五步：使用Session对象创建一个Destination对象（topic、queue），此处创建一个Queue对象。</span>
		<span class="token comment">//参数：队列的名称。</span>
		<span class="token class-name">Queue</span> queue <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">createQueue</span><span class="token punctuation">(</span><span class="token string">&quot;test-queue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 第六步：使用Session对象创建一个Producer对象。</span>
		<span class="token class-name">MessageProducer</span> producer <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">createProducer</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 第七步：创建一个Message对象，创建一个TextMessage对象。</span>
		<span class="token comment">/*TextMessage message = new ActiveMQTextMessage();
		message.setText(&quot;hello activeMq,this is my first test.&quot;);*/</span>
		<span class="token class-name">TextMessage</span> textMessage <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">createTextMessage</span><span class="token punctuation">(</span><span class="token string">&quot;hello activeMq,this is my first test.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 第八步：使用Producer对象发送消息。</span>
		producer<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>textMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 第九步：关闭资源。</span>
		producer<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		session<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token class-name">Consumer</span>
	消费者：接收消息。
	第一步：创建一个<span class="token class-name">ConnectionFactory</span>对象。
	第二步：从<span class="token class-name">ConnectionFactory</span>对象中获得一个<span class="token class-name">Connection</span>对象。
	第三步：开启连接。调用<span class="token class-name">Connection</span>对象的start方法。
	第四步：使用<span class="token class-name">Connection</span>对象创建一个<span class="token class-name">Session</span>对象。
	第五步：使用<span class="token class-name">Session</span>对象创建一个<span class="token class-name">Destination</span>对象。和发送端保持一致queue，并且队列的名称一致。
	第六步：使用<span class="token class-name">Session</span>对象创建一个<span class="token class-name">Consumer</span>对象。
	第七步：接收消息。
	第八步：打印消息。
	第九步：关闭资源
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testQueueConsumer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
		<span class="token comment">// 第一步：创建一个ConnectionFactory对象。</span>
		<span class="token class-name">ConnectionFactory</span> connectionFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ActiveMQConnectionFactory</span><span class="token punctuation">(</span><span class="token string">&quot;tcp://192.168.25.168:61616&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 第二步：从ConnectionFactory对象中获得一个Connection对象。</span>
		<span class="token class-name">Connection</span> connection <span class="token operator">=</span> connectionFactory<span class="token punctuation">.</span><span class="token function">createConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 第三步：开启连接。调用Connection对象的start方法。</span>
		connection<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 第四步：使用Connection对象创建一个Session对象。</span>
		<span class="token class-name">Session</span> session <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createSession</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token class-name">Session</span><span class="token punctuation">.</span><span class="token constant">AUTO_ACKNOWLEDGE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 第五步：使用Session对象创建一个Destination对象。和发送端保持一致queue，并且队列的名称一致。</span>
		<span class="token class-name">Queue</span> queue <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">createQueue</span><span class="token punctuation">(</span><span class="token string">&quot;test-queue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 第六步：使用Session对象创建一个Consumer对象。</span>
		<span class="token class-name">MessageConsumer</span> consumer <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">createConsumer</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 第七步：接收消息。</span>
		consumer<span class="token punctuation">.</span><span class="token function">setMessageListener</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MessageListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			
			<span class="token annotation punctuation">@Override</span>
			<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onMessage</span><span class="token punctuation">(</span><span class="token class-name">Message</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">try</span> <span class="token punctuation">{</span>
					<span class="token class-name">TextMessage</span> textMessage <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">TextMessage</span><span class="token punctuation">)</span> message<span class="token punctuation">;</span>
					<span class="token class-name">String</span> text <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
					<span class="token comment">//取消息的内容</span>
					text <span class="token operator">=</span> textMessage<span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token comment">// 第八步：打印消息。</span>
					<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">JMSException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//等待键盘输入</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 第九步：关闭资源</span>
		consumer<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		session<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">Topic</span>
	<span class="token class-name">Producer</span>
	使用步骤：
	第一步：创建<span class="token class-name">ConnectionFactory</span>对象，需要指定服务端ip及端口号。
	第二步：使用<span class="token class-name">ConnectionFactory</span>对象创建一个<span class="token class-name">Connection</span>对象。
	第三步：开启连接，调用<span class="token class-name">Connection</span>对象的start方法。
	第四步：使用<span class="token class-name">Connection</span>对象创建一个<span class="token class-name">Session</span>对象。
	第五步：使用<span class="token class-name">Session</span>对象创建一个<span class="token class-name">Destination</span>对象（topic、queue），此处创建一个<span class="token class-name">Topic</span>对象。
	第六步：使用<span class="token class-name">Session</span>对象创建一个<span class="token class-name">Producer</span>对象。
	第七步：创建一个<span class="token class-name">Message</span>对象，创建一个<span class="token class-name">TextMessage</span>对象。
	第八步：使用<span class="token class-name">Producer</span>对象发送消息。
	第九步：关闭资源。

	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testTopicProducer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
		<span class="token comment">// 第一步：创建ConnectionFactory对象，需要指定服务端ip及端口号。</span>
		<span class="token comment">// brokerURL服务器的ip及端口号</span>
		<span class="token class-name">ConnectionFactory</span> connectionFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ActiveMQConnectionFactory</span><span class="token punctuation">(</span><span class="token string">&quot;tcp://192.168.25.168:61616&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 第二步：使用ConnectionFactory对象创建一个Connection对象。</span>
		<span class="token class-name">Connection</span> connection <span class="token operator">=</span> connectionFactory<span class="token punctuation">.</span><span class="token function">createConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 第三步：开启连接，调用Connection对象的start方法。</span>
		connection<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 第四步：使用Connection对象创建一个Session对象。</span>
		<span class="token comment">// 第一个参数：是否开启事务。true：开启事务，第二个参数忽略。</span>
		<span class="token comment">// 第二个参数：当第一个参数为false时，才有意义。消息的应答模式。1、自动应答2、手动应答。一般是自动应答。</span>
		<span class="token class-name">Session</span> session <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createSession</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token class-name">Session</span><span class="token punctuation">.</span><span class="token constant">AUTO_ACKNOWLEDGE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 第五步：使用Session对象创建一个Destination对象（topic、queue），此处创建一个topic对象。</span>
		<span class="token comment">// 参数：话题的名称。</span>
		<span class="token class-name">Topic</span> topic <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">createTopic</span><span class="token punctuation">(</span><span class="token string">&quot;test-topic&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 第六步：使用Session对象创建一个Producer对象。</span>
		<span class="token class-name">MessageProducer</span> producer <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">createProducer</span><span class="token punctuation">(</span>topic<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 第七步：创建一个Message对象，创建一个TextMessage对象。</span>
		<span class="token comment">/*
		* TextMessage message = new ActiveMQTextMessage(); message.setText(
		* &quot;hello activeMq,this is my first test.&quot;);
		*/</span>
		<span class="token class-name">TextMessage</span> textMessage <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">createTextMessage</span><span class="token punctuation">(</span><span class="token string">&quot;hello activeMq,this is my topic test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 第八步：使用Producer对象发送消息。</span>
		producer<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>textMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 第九步：关闭资源。</span>
		producer<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		session<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token class-name">Consumer</span>
	消费者：接收消息。
	第一步：创建一个<span class="token class-name">ConnectionFactory</span>对象。
	第二步：从<span class="token class-name">ConnectionFactory</span>对象中获得一个<span class="token class-name">Connection</span>对象。
	第三步：开启连接。调用<span class="token class-name">Connection</span>对象的start方法。
	第四步：使用<span class="token class-name">Connection</span>对象创建一个<span class="token class-name">Session</span>对象。
	第五步：使用<span class="token class-name">Session</span>对象创建一个<span class="token class-name">Destination</span>对象。和发送端保持一致topic，并且话题的名称一致。
	第六步：使用<span class="token class-name">Session</span>对象创建一个<span class="token class-name">Consumer</span>对象。
	第七步：接收消息。
	第八步：打印消息。
	第九步：关闭资源
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testTopicConsumer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
		<span class="token comment">// 第一步：创建一个ConnectionFactory对象。</span>
		<span class="token class-name">ConnectionFactory</span> connectionFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ActiveMQConnectionFactory</span><span class="token punctuation">(</span><span class="token string">&quot;tcp://192.168.25.168:61616&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 第二步：从ConnectionFactory对象中获得一个Connection对象。</span>
		<span class="token class-name">Connection</span> connection <span class="token operator">=</span> connectionFactory<span class="token punctuation">.</span><span class="token function">createConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 第三步：开启连接。调用Connection对象的start方法。</span>
		connection<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 第四步：使用Connection对象创建一个Session对象。</span>
		<span class="token class-name">Session</span> session <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createSession</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token class-name">Session</span><span class="token punctuation">.</span><span class="token constant">AUTO_ACKNOWLEDGE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 第五步：使用Session对象创建一个Destination对象。和发送端保持一致topic，并且话题的名称一致。</span>
		<span class="token class-name">Topic</span> topic <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">createTopic</span><span class="token punctuation">(</span><span class="token string">&quot;test-topic&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 第六步：使用Session对象创建一个Consumer对象。</span>
		<span class="token class-name">MessageConsumer</span> consumer <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">createConsumer</span><span class="token punctuation">(</span>topic<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 第七步：接收消息。</span>
		consumer<span class="token punctuation">.</span><span class="token function">setMessageListener</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MessageListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

			<span class="token annotation punctuation">@Override</span>
			<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onMessage</span><span class="token punctuation">(</span><span class="token class-name">Message</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">try</span> <span class="token punctuation">{</span>
					<span class="token class-name">TextMessage</span> textMessage <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">TextMessage</span><span class="token punctuation">)</span> message<span class="token punctuation">;</span>
					<span class="token class-name">String</span> text <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
					<span class="token comment">// 取消息的内容</span>
					text <span class="token operator">=</span> textMessage<span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token comment">// 第八步：打印消息。</span>
					<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">JMSException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;topic的消费端03。。。。。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 等待键盘输入</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 第九步：关闭资源</span>
		consumer<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		session<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),p=[c];function o(i,l){return s(),a("div",null,p)}const r=n(e,[["render",o],["__file","activemq.html.vue"]]),d=JSON.parse('{"path":"/backend/mq/activemq.html","title":"ActiveMQ","lang":"zh-CN","frontmatter":{"title":"ActiveMQ","date":"2023-01-01T00:00:00.000Z","tags":"ActiveMQ","categories":"后端","toc":true,"description":"[toc] 1. ActiveMQ介绍 ActiveMQ 是Apache出品，最流行的，能力强劲的开源消息总线。 主要特点： 多种语言和协议编写客户端。应用协议: OpenWire,Stomp REST,WS Notification,XMPP,AMQP 完全支持JMS1.1和J2EE 1.4规范 (持久化,XA消息,事务) 通过了常见J2EE服务器(...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/mq/activemq.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"ActiveMQ"}],["meta",{"property":"og:description","content":"[toc] 1. ActiveMQ介绍 ActiveMQ 是Apache出品，最流行的，能力强劲的开源消息总线。 主要特点： 多种语言和协议编写客户端。应用协议: OpenWire,Stomp REST,WS Notification,XMPP,AMQP 完全支持JMS1.1和J2EE 1.4规范 (持久化,XA消息,事务) 通过了常见J2EE服务器(..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/92a0cb632b97d682ef936.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ActiveMQ\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/92a0cb632b97d682ef936.png\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":6.89,"words":2066},"filePathRelative":"backend/mq/activemq.md","localizedDate":"2023年1月1日","excerpt":"<!--more-->\\n<p>[toc]</p>\\n<h1>1. ActiveMQ介绍</h1>\\n<ul>\\n<li>ActiveMQ 是Apache出品，最流行的，能力强劲的开源消息总线。</li>\\n<li>主要特点：\\n<ul>\\n<li>多种语言和协议编写客户端。应用协议: OpenWire,Stomp REST,WS Notification,XMPP,AMQP</li>\\n<li>完全支持JMS1.1和J2EE 1.4规范 (持久化,XA消息,事务)</li>\\n<li>通过了常见J2EE服务器(如 Geronimo,JBoss 4, GlassFish,WebLogic)的测试,其中通过JCA 1.5 resource adaptors的配置,可以让ActiveMQ可以自动的部署到任何兼容J2EE 1.4 商业服务器上</li>\\n<li>支持多种传送协议:in-VM,TCP,SSL,NIO,UDP,JGroups,JXTA</li>\\n<li>支持通过JDBC和journal提供高速的消息持久化</li>\\n<li>从设计上保证了高性能的集群,客户端-服务器,点对点</li>\\n<li>支持Ajax</li>\\n<li>支持与Axis的整合</li>\\n<li>可以很容易得调用内嵌JMS provider,进行测试</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{r as comp,d as data};
