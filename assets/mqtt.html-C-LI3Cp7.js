import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,e as t}from"./app-7KT7HDzT.js";const s={},l=t(`<p>MQTT协议</p><ul><li><a href="#1-%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9">1. 注意事项</a></li><li><a href="#2-mqtt%E5%AE%A2%E6%88%B7%E7%AB%AF">2. MQTT客户端</a></li><li><a href="#3-spring%E6%95%B4%E5%90%88mqtt">3. spring整合MQTT</a></li></ul><h1 id="_1-注意事项" tabindex="-1"><a class="header-anchor" href="#_1-注意事项"><span>1. 注意事项</span></a></h1><ul><li>同一个clientId重复连接会导致连接断开</li><li>MQTT订阅上下线的主题为 <ul><li>$SYS/brokers/+/clients/+/connected</li><li>$SYS/brokers/+/clients/+/disconnected</li><li>$SYS/brokers/+/clients/#</li><li>$SYS/#</li></ul></li></ul><h1 id="_2-mqtt客户端" tabindex="-1"><a class="header-anchor" href="#_2-mqtt客户端"><span>2. MQTT客户端</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>import java.io.FileNotFoundException;
import java.io.IOException;
import java.security.KeyManagementException;
import java.security.KeyStoreException;
import java.security.cert.CertificateException;
import org.eclipse.paho.client.mqttv3.MqttClient;
import org.eclipse.paho.client.mqttv3.MqttConnectOptions;
import org.eclipse.paho.client.mqttv3.MqttException;
import org.eclipse.paho.client.mqttv3.MqttMessage;
import org.eclipse.paho.client.mqttv3.persist.MemoryPersistence;

public class MqttPublishSample {
	public static void main(String[] args) throws KeyManagementException, CertificateException, FileNotFoundException, IOException, KeyStoreException {
		String topic        = &quot;MQTT Examples&quot;;
		String content      = &quot;Message from MqttPublishSample&quot;;
		int qos             = 2;
		String broker       = &quot;tcp://127.0.0.1:11883&quot;;
		String broker       = &quot;ssl://10.110.111.251:8883&quot;;
		String clientId     = &quot;JavaSample&quot;;
		MemoryPersistence persistence = new MemoryPersistence();

		try {
			MqttClient sampleClient = new MqttClient(broker, clientId, persistence);
			MqttConnectOptions connOpts = new MqttConnectOptions();
			connOpts.setCleanSession(true);
			System.out.println(&quot;Connecting to broker: &quot;+broker);
			sampleClient.connect(connOpts);
			System.out.println(&quot;Connected&quot;);
			System.out.println(&quot;Publishing message: &quot;+content);
			MqttMessage message = new MqttMessage(content.getBytes());
			message.setQos(qos);
			sampleClient.publish(topic, message);
			System.out.println(&quot;Message published&quot;);
			sampleClient.disconnect();
			System.out.println(&quot;Disconnected&quot;);
			System.exit(0);
		} catch(MqttException me) {
			System.out.println(&quot;reason &quot;+me.getReasonCode());
			System.out.println(&quot;msg &quot;+me.getMessage());
			System.out.println(&quot;loc &quot;+me.getLocalizedMessage());
			System.out.println(&quot;cause &quot;+me.getCause());
			System.out.println(&quot;excep &quot;+me);
			me.printStackTrace();
		} 
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-spring整合mqtt" tabindex="-1"><a class="header-anchor" href="#_3-spring整合mqtt"><span>3. spring整合MQTT</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 定义mqtt的配置类

package com.junye.test;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Data
public class ClientConfig {
	@Value(&quot;tcp://127.0.0.1:11883&quot;)
	private String broker;
	@Value(&quot;admin&quot;)
	private String user;
	@Value(&quot;public&quot;)
	private String password;
	private int qos = 2;
	private String clientId;
}

# 定义RemoteClient接口

package com.junye.test;
import org.eclipse.paho.client.mqttv3.MqttException;
public interface RemoteClient {
	void init(String broker, String user, String password) throws MqttException;
	void publish(String topic, String message, int qos) throws MqttException;
	void subscribe(String topic, OnMessageListener listener) throws MqttException;
	void unSubscribe(String topic) throws MqttException;
	void close() throws MqttException;
}

# 实现RemoteClient接口RemoteClientImpl类

package com.junye.test;
import java.util.UUID;
import org.eclipse.paho.client.mqttv3.IMqttDeliveryToken;
import org.eclipse.paho.client.mqttv3.MqttCallback;
import org.eclipse.paho.client.mqttv3.MqttClient;
import org.eclipse.paho.client.mqttv3.MqttConnectOptions;
import org.eclipse.paho.client.mqttv3.MqttException;
import org.eclipse.paho.client.mqttv3.MqttMessage;
import org.eclipse.paho.client.mqttv3.persist.MemoryPersistence;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.Assert;
@Data
public class RemoteClientImpl implements RemoteClient {  
	private String broker;
	private String user;
	private String password;
	private int qos = 2;
	private String clientId;  
	private MqttClient client;  

	public RemoteClientImpl() {  
		this(UUID.randomUUID().toString());  
	}  

	public BasicRemoteClient(String clientId) {  
		this.clientId = clientId;  
	}  

	public void init(String broker, String user, String password) throws MqttException {  
		MemoryPersistence persistence = new MemoryPersistence();  
		client = new MqttClient(broker, clientId, persistence);  
		MqttConnectOptions options = new MqttConnectOptions();  

		options.setCleanSession(true);  
		options.setUserName(user);  
		options.setPassword(password.toCharArray());  
		client.connect(options);  
	}  

	public void init() throws MqttException {  
		MemoryPersistence persistence = new MemoryPersistence();  
		client = new MqttClient(broker, clientId, persistence);  
		MqttConnectOptions options = new MqttConnectOptions();  
		options.setCleanSession(true);  
		options.setUserName(user);  
		options.setPassword(password.toCharArray());  
		client.connect(options);  
	}  


	public void publish(String topic, String message, int qos) throws MqttException {  
		MqttMessage mqttMessage = new MqttMessage(message.getBytes());  
		mqttMessage.setQos(qos);  
		client.publish(topic, mqttMessage);  
	}  

	public void subscribe(String topic, final OnMessageListener listener) throws MqttException {  
		try {  
			client.subscribe(topic, this.qos);
			client.setCallback(new MqttCallback(){
				@Override
				public void connectionLost(Throwable cause) {
					try {
						init();
						System.out.println(&quot;重连&quot;);
					} catch (MqttException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				}

				@Override
				public void messageArrived(String topic2, MqttMessage message) throws Exception {
					listener.handleMessage(topic2, message.toString());  
				}

				@Override
				public void deliveryComplete(IMqttDeliveryToken token) {
					System.out.println(&quot;成功&quot;);
					logger.info(&quot;deliveryComplete {}&quot;, token);
				}
			});
		} catch (MqttException e) {  
			throw e;  
		}  
	}  

	public void unSubscribe(String topic) throws MqttException {  
		client.unsubscribe(topic);  
	}  

	@Override  
	public void close() throws MqttException {  
		client.disconnect();  
	}  

}

# 定义监听接口OnMessageListener用于传入RemoteClient处理信息
public interface OnMessageListener {
	void handleMessage(String topic, String message);
}
# 自定义Bean注入
//自定义Basic的注入，直接当成一个普通的Bean即可，只是初始化的方法自定义了
@Component
public class BasicRemoteClientFactory implements FactoryBean&lt;RemoteClient&gt;{

	@Autowired
	private ClientConfig clientConfig;
	public void setClientConfig(ClientConfig clientConfig) {
		this.clientConfig = clientConfig;
	}
	@Override
	public RemoteClient getObject() throws Exception {
		BasicRemoteClient client = new BasicRemoteClient();
		if(clientConfig.getClientId()!=null){
			client.setClientId(clientConfig.getClientId());
		}
		client.init(clientConfig.getBroker(), clientConfig.getUser(), clientConfig.getPassword());
		client.setQos(clientConfig.getQos());
		return (RemoteClient) client;
	}

	@Override
	public Class&lt;?&gt; getObjectType() {
		return BasicRemoteClient.class;
	}

	@Override
	public boolean isSingleton() {
		return false;
	}
}
# 定义抽象类BaseMqttSubscriber用于多个Controller继承（可选）
	public abstract class BaseMqttSubscriber {
		protected Logger logger =LoggerFactory.getLogger(this.getClass());
		@Value(&quot;TEST&quot;)
		private String clientId;

		public void setClientId(String clientId) {
			this.clientId = clientId;
		}

		@Autowired
		private ClientConfig clientConfig;

		public void setClientConfig(ClientConfig clientConfig) {
			this.clientConfig = clientConfig;
		}


		public RemoteClient getMqttClient() throws Exception {
			clientConfig.setClientId(clientId);//override the clientId;
			BasicRemoteClientFactory factory=new BasicRemoteClientFactory();
			factory.setClientConfig(clientConfig);
			return factory.getObject();
		}
	}
# 定义HelloController测试
package com.junye.test;
import java.util.HashMap;
import java.util.Map;
import javax.annotation.PostConstruct;
import org.eclipse.paho.client.mqttv3.MqttException;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class HelloController extends BaseMqttSubscriber{
	@RequestMapping(&quot;/hello&quot;)
	public Map&lt;String, Object&gt; index(String test,String test2) throws MqttException, Exception {
		Map&lt;String , Object&gt; result=new HashMap&lt;String,Object&gt;();
		result.put(&quot;test&quot;, test);
		Demo demo=new Demo(&quot;junye&quot;, &quot;1&quot;);
		result.put(&quot;Demo&quot;, demo);
		this.getMqttClient().publish(&quot;/test&quot;, &quot;hahah&quot;, 2);
		System.out.println(&quot;chenggong&quot;);
		return result;
	}
	@PostConstruct
	public void init() throws MqttException, Exception {
		System.out.println(&quot;qidong&quot;);
		this.getMqttClient().subscribe(&quot;/test&quot;, new OnMessageListener() {
			@Override
			public void handleMessage(String topic, String message)  {
			System.out.println(&quot;test&quot;);
			}
		});	
	}  
}
# 定义springboot入口
package com.junye.test;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableAutoConfiguration
public class MainApplication {
	public static void main(String[] args) {
		SpringApplication.run(MainApplication.class, args);
	}	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-javascript连接emq" tabindex="-1"><a class="header-anchor" href="#_4-javascript连接emq"><span>4. JavaScript连接emq</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
	&lt;meta charset=&quot;UTF-8&quot;&gt;
	&lt;title&gt;Insert title here&lt;/title&gt;
&lt;/head&gt;
&lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script&gt;
window.onload=function(){
	client = new Paho.MQTT.Client(location.hostname, Number(8083), &quot;clientId&quot;);
	client.onConnectionLost = onConnectionLost;
	client.onMessageArrived = onMessageArrived;
	client.connect({onSuccess:onConnect});
	//,onFailure : artmisMqttOnError
	function onConnect() {
		// Once a connection has been made, make a subscription and send a message.
		alert(&quot;connect&quot;);
		console.log(&quot;onConnect&quot;);
		client.subscribe(&quot;/World&quot;);
		message = new Paho.MQTT.Message(&quot;Hello&quot;);
		message.destinationName = &quot;/World&quot;;
		client.send(message);
	};
	function onConnectionLost(responseObject) {
		if (responseObject.errorCode !== 0){
			console.log(&quot;onConnectionLost:&quot;+responseObject.errorMessage);
			alter(&quot;lost&quot;);
		}
	};
	function onMessageArrived(message) {
		console.log(&quot;onMessageArrived:&quot;+message.payloadString);
		alert(message.payloadString);
		client.disconnect();
	};
}

&lt;/script&gt;
&lt;body&gt;
xxx
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),r=[l];function d(c,a){return e(),n("div",null,r)}const u=i(s,[["render",d],["__file","mqtt.html.vue"]]),m=JSON.parse('{"path":"/backend/protocol/mqtt.html","title":"MQTT","lang":"zh-CN","frontmatter":{"title":"MQTT","date":"2023-01-01T00:00:00.000Z","tags":"MQTT","categories":"理论","description":"MQTT协议 1. 注意事项 2. MQTT客户端 3. spring整合MQTT 1. 注意事项 同一个clientId重复连接会导致连接断开 MQTT订阅上下线的主题为 $SYS/brokers/+/clients/+/connected $SYS/brokers/+/clients/+/disconnected $SYS/brokers/+/cl...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/protocol/mqtt.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"MQTT"}],["meta",{"property":"og:description","content":"MQTT协议 1. 注意事项 2. MQTT客户端 3. spring整合MQTT 1. 注意事项 同一个clientId重复连接会导致连接断开 MQTT订阅上下线的主题为 $SYS/brokers/+/clients/+/connected $SYS/brokers/+/clients/+/disconnected $SYS/brokers/+/cl..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MQTT\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":3.19,"words":956},"filePathRelative":"backend/protocol/mqtt.md","localizedDate":"2023年1月1日","excerpt":"<p>MQTT协议</p>\\n<!--more-->\\n<!-- TOC -->\\n<ul>\\n<li><a href=\\"#1-%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9\\">1. 注意事项</a></li>\\n<li><a href=\\"#2-mqtt%E5%AE%A2%E6%88%B7%E7%AB%AF\\">2. MQTT客户端</a></li>\\n<li><a href=\\"#3-spring%E6%95%B4%E5%90%88mqtt\\">3. spring整合MQTT</a></li>\\n</ul>\\n<!-- /TOC -->\\n<h1>1. 注意事项</h1>\\n<ul>\\n<li>同一个clientId重复连接会导致连接断开</li>\\n<li>MQTT订阅上下线的主题为\\n<ul>\\n<li>$SYS/brokers/+/clients/+/connected</li>\\n<li>$SYS/brokers/+/clients/+/disconnected</li>\\n<li>$SYS/brokers/+/clients/#</li>\\n<li>$SYS/#</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{u as comp,m as data};
