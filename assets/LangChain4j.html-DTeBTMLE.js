import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as a,c as r,a as e,b as i,d as s,e as d}from"./app-7KT7HDzT.js";const v={},c=e("h1",{id:"langchain4j",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#langchain4j"},[e("span",null,"LangChain4j")])],-1),u={href:"https://docs.langchain4j.dev/",target:"_blank",rel:"noopener noreferrer"},m=d('<table><thead><tr><th>功能</th><th>Spring AI</th><th>LangChain4j</th></tr></thead><tbody><tr><td>Chat</td><td>支持</td><td>支持</td></tr><tr><td>Function</td><td>支持</td><td>支持</td></tr><tr><td>RAG</td><td>支持</td><td>支持</td></tr><tr><td>对话模型</td><td>15+</td><td>15+</td></tr><tr><td>向量模型</td><td>10+</td><td>15+</td></tr><tr><td>向量数据库</td><td>15+</td><td>20+</td></tr><tr><td>多模态模型</td><td>5+</td><td>1</td></tr><tr><td>JDK</td><td>17</td><td>8</td></tr></tbody></table><h2 id="大模型部署" tabindex="-1"><a class="header-anchor" href="#大模型部署"><span>大模型部署</span></a></h2><p>自己部署<br> 》云服务器部署<br> 优势:前期成本低，维护简单</p><p>劣势:数据不安全，长期使用成本高<br> 本地机器部署<br> 优势:数据安全;长期成本</p><p>低劣势:初期成本高，维护困难</p><p>他人部署<br> 百度智能云 硅基流动 火山引擎 阿里云百炼 API接口<br> 优势:无需部署<br> 劣势:数据不安全，长期成本高</p><h3 id="大模型部署-自己部署-本机" tabindex="-1"><a class="header-anchor" href="#大模型部署-自己部署-本机"><span>大模型部署-自己部署(本机)</span></a></h3><p>0llama、LM Studio一键下载、运行大模型</p>',8),o={href:"https://ollama.com",target:"_blank",rel:"noopener noreferrer"},b=d(`<p>ollama run qwen3:0.6b</p><p>0llama默认端口11434</p><h2 id="大模型使用" tabindex="-1"><a class="header-anchor" href="#大模型使用"><span>大模型使用</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Example using Ollama&#39;s chat APl with thinking enabled
curl http://localhost:11434/api/chat -d &#39;{
	model&quot;:&quot;qwen3:6.6b&quot;
	&quot;messages&quot;:[
		{
		&quot;role&quot;: &quot;user&quot;
		&quot;content&quot;: &quot;how many r in the word strawberry?&quot;
		}
    ],
    &quot;think”: true,
    &quot;stream&quot;: false
}&#39;

Qutput
[&quot;model&quot;:&quot;deepseek-r1&quot;,&quot;created at&quot;:&quot;2025-05-29T09:35:56.836222Z&quot;&quot;message :
{&quot;role&quot;: &quot;assistant&quot;,&quot;content&quot;: &quot;The word \\&quot;strawberry\\&quot; contains **three** instances of the letter &quot;R&#39;&quot;thinking&quot;:&quot;First, the question is: i&quot;how manyr in the word strawberry?\\&quot; Ineed to count the number of times the letter &#39;r&#39; appears in the word \\&quot;strawberry\\&quot;Let me write down the word:...”,
&quot;done reason&quot;:&quot;stop&quot;,

使用APIFOX的json发送和自动合并即可看到结果

使用大模型需要传递的参数，在访问大模型时都需要在请求体中以json的形式进行传递
{
	&quot;model&quot;: &quot;qwen-plus&quot;
	&quot;messages&quot;:[
		{
		&quot;role&quot;:&quot;system&quot;,
		&quot;content&quot;:&quot;你是东哥的助手小月月’,
		},
		{
		&quot;role&quot;: &quot;user&quot;,
        &quot;content&quot;:&quot;你是谁?&quot;,
		},
		{
		&quot;role&quot;: &quot;assistant&quot;,
		&quot;content&quot;:&quot;您好，有什么可以帮助您?&quot;
		}
	],
    &quot;stream&quot;: true,
    &quot;enable search&quot;: true
}

model:告诉平台，当前调用哪个模型
messages:发送给模型的数据，模型会根据这些数据给出合适的响应
content:消息内容
role:消息角色(类型)
- user:用户消息
- system:系统消息
- assistant:模型响应消息
stream:调用方式
true:非阻塞调用(流式调用)
- false:阻塞调用(一次性响应),默认值
enable_search:联网搜索，启用后，模型会将搜索结果作为参考信息
true:开启
- false:关闭(默认)

在大语言模型中，Token是大模型处理文本的基本单位
可以理解为模型“看得懂”的最小文本片段
用户输入的内容都需要转换成token，才能让大模型更好的处理
英文:-个tokenx4个字符
中文:一个汉字≈1~2个token

在与大模型交互的过程中，大模型响应的数据是json格式的数据
{
    &quot;choices&quot;:[
    &quot;message&quot;:{
        &quot;role&quot;:&quot;assistant&quot;
        “content”:“我是通义千问，阿里巴巴.….”
    },
    &quot;finish reason&quot;:&quot;stop&quot;
    &quot;index&quot;: @
    }
    &quot;object&quot;:&quot;chat.completion&quot;,
    &quot;usage&quot;:{
    &quot;prompt tokens&quot;: 22,
    &#39;completion_tokens&quot;: 80,
    &quot;total tokens&quot;: 102,
    },
    &#39;created&quot;: 1748068508,
    &quot;system _fingerprint&quot;: nul1,
    &quot;model&quot;:&quot;qwen-plus&quot;,
    &quot;id&quot;:&quot;chatcmpl-99f8d040-0f49-955b-943a-21c83&#39;
}

choices:模型生成的内容数组，可以包含一条或多条内容
message:本次调用模型输出的消息
finish_reason:自然结束(stop)，生成内容过长(length)
index:当前内容在choices数组中的索引

object:始终为chat.completion，无需关注
usage:本次对话过程中使用的token信息
prompt_tokens:用户的输入转换成token的个数
completion_tokens:模型生成的回复转换成token的个数
total tokens:用户输入和模型生成的总token个数
created:本次会话被创建时的时间戳
system_fingerprint:固定为null，无需关注
model:本次会话使用的模型名称
id:本次调用的唯一标识符
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="会话功能-快速入门" tabindex="-1"><a class="header-anchor" href="#会话功能-快速入门"><span>会话功能-快速入门</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1.引入Langchian4j依赖
&lt;dependency&gt;
&lt;groupld&gt;dev.langchain4j&lt;/groupld&gt;
&lt;artifactld&gt;langchain4j-open-ai&lt;/artifactld&gt;
&lt;version&gt;1.0.1&lt;/version&gt;
&lt;/dependency&gt;
2.构建0penAichatModel对象
OpenAiChatModel model = OpenAiChatModel.builder()
.baseUrl(&quot;https://dashscope.aliyuncs.com/compatible-mode/v1&quot;)
.apikey(System.getenv(&quot;API-KEY&quot;))# API-KEY配置在计算机的属性那里的话需要重启一下IDE
.modelName(&quot;qwen-plus&quot;)
.build();
3.调用chat方法与大模型交互
String result = model.chat(&quot;东哥帅不帅”)
System.out.printin(result);

打印日志信息
&lt;dependency&gt;
&lt;groupld&gt;ch.qos.logback&lt;/groupld&gt;
&lt;artifactld&gt;logback-classic&lt;/artifactld&gt;
&lt;version&gt;1.5.18&lt;/version&gt;
&lt;/dependency&gt;
OpenAiChatModel model = OpenAiChatModel.builder()
.baseUrl(&quot;https://dashscope.aliyuncs.com/compatible-mode/v1&quot;)
.apiKey(System.getenv(&quot;API-KEY&quot;))
.modelName(&quot;qwen-plus&quot;)
.logRequests(true)# 设置
.logResponses(true)# 设置
.build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="会话功能-spring整合langchain4j" tabindex="-1"><a class="header-anchor" href="#会话功能-spring整合langchain4j"><span>会话功能-Spring整合Langchain4j</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1.构建springboot项目
2.引入起步依赖
3.application.yml中配置大模型
4.开发接口，调用大模型
&lt;dependency&gt;
&lt;groupld&gt;dev.langchain4j&lt;/groupld&gt;
&lt;artifactld&gt;langchain4j-open-ai-spring-boot-starter&lt;/artifactld&gt;
&lt;version&gt;1.0.1-beta6&lt;/version&gt;
&lt;/dependency&gt;

langchain4j:
	open-ai:
		chat-model:
			base-url: https://dashscope.aliyuncs.com/compatible-mode/v1
			api-key: \${API-KEY}
			model-name: qwen-plus
			log-requests: true
			log-responses: true
logging:
	level:
		dev.langchain4j: debug

@Configuration
public class CommonConfig {
    @Autowired
    private OpenAiChatModel model;
    @Bean
    public ConsultantService consultantService(){
    	ConsultantService cs =  AiServices.builder(ConsultantService.class).chatModel(model).build():
    	return cs;
    }
}

@RestController
public class ChatController {
    @Autowired
    private OpenAiChatModel model;
    
    @RequestMapping(&quot;/chat&quot;)
    public String chat(String message){
        String result = model.chat(message)
        return result;
    }
}

package com.itheima.consultant.aiservice;
import dev.langchain4j.service.spring.AiService;
import dev.langchain4j.service.spring.AiServiceWiringMode;
@AiService(
	wiringMode =AiserviceWiringMode.EXPLICIT,//手动装配
	chatModel =&quot;openAichatModel&quot;//指定模型
)I
public interface ConsultantService {
	//用于聊天的方法
	public string chat(string message);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="会话功能-流式调用" tabindex="-1"><a class="header-anchor" href="#会话功能-流式调用"><span>会话功能-流式调用</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1.引入依赖
2.配置流式模型对象
3.切换接口中方法的返回值类型
4.修改Controller中的代码

&lt;dependency&gt;
&lt;groupld&gt;org.springframework.boot&lt;/groupld&gt;
&lt;artifactld&gt;spring-boot-starter-webflux&lt;/artifactld&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
&lt;groupld&gt;dev.langchain4j&lt;/groupld&gt;
&lt;artifactld&gt;langchain4j-reactor&lt;/artifactld&gt;
&lt;version&gt;1.0.1-beta6&lt;/version&gt;
&lt;/dependency&gt;

langchain4j:
	open-ai:
		streaming-chat-model:
			base-url: https://dashscope.aliyuncs.com/compatible-mode/v1
			api-key: \${API-KEY}
            model-name: qwen-plus
            log-requests: true
            log-responses: true

@AiService(
wkingMode =AiServiceWiringMode.EXPLICIT
chatModel = &quot;openAiChatModel&quot;
streamingChatModel =&quot;openAistreamingChatMode&quot;
}
public interface ConsultantService {
	public Flux&lt;String&gt; chat(String message);
}

@RestController
public class ChatController {
	@Autowired
	private ConsultantService consultantService;
	@RequestMapping(value = &quot;/chat&quot;,produces = &quot;text/html;charset=utf-8&quot;)
	public Flux&lt;String&gt; chat(string message){
		Flux&lt;String&gt;result =consultantService.chat(message);
		return result;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="会话功能-消息注解" tabindex="-1"><a class="header-anchor" href="#会话功能-消息注解"><span>会话功能-消息注解</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@SystemMessage(“你是东哥的助手小月月，温柔貌美又多金。&quot;)
public Flux&lt;String&gt; chat(String message);

@SystemMessage(fromResource =&quot;system.txt&quot;)
public Flux&lt;String&gt; chat(String message);

@AiService( 
wiringMode =AiServiceWiringMode.EXPLICIT,//手动装配
chatModel =&quot;openAiChatModel&quot;,//指定模型
streamingChatModel=&quot;openAiStreamingChatModel&quot;
//@AiService
public interface ConsultantService {
    //用于聊天的方法
    //public string chat(string message);
    //@SystemMessage(&quot;你是东哥的助手小月月,人美心善又多金!&quot;)
    @SystemMessage(fromResource=&quot;system.txt&quot;)
    public Flux&lt;String&gt;chat(String message);
    
    @UserMessage(&quot;你是东哥的助手小月月，温柔貌美又多金。{{it)}”)
    //这个花括号内的it它是固定的
    public Flux&lt;String&gt; chat(String message);
    
    @UserMessage(&quot;你是东哥的助手小月月，温柔貌美又多金。{{msg}}&quot;)
    public Flux&lt;String&gt; chat(@V(&quot;msg&quot;) String message);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="会话功能-会话记忆" tabindex="-1"><a class="header-anchor" href="#会话功能-会话记忆"><span>会话功能-会话记忆</span></a></h2><p>大模型是不具备记忆能力的，要想让大模型记住之前聊天的内容，唯一的办法就是把之前聊天的内容与新的提示词一起发给大模型，</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public interface ChatMemory {
	Object id();/记忆存储对象的唯一标识
	void add(ChatMessage var1)://添加一条会话记记
	List&lt;ChatMessage&gt;messages();/获取所有会话记忆
	void clear();/清除所有会话记忆
}

@Bean
public ChatMemory chatMemory(){
	return MessageWindowChatMemory.builder().maxMessages(20).build();
}

@AiService(
	wiringMode =AiServiceWiringMode.EXPLICIT,
	chatModel = &quot;openAiChatModel&quot;,
	streamingChatModel =&quot;openAiStreamingChatMode&quot;,
	chatMemory=&quot;chatMemory&quot; # 手动设置
)
public interface ConsultantService {
	@SystemMessage(fromResource =&quot;system.txt&quot;)
	public Flux&lt;String&gt; chat(String message);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="会话功能-会话记忆隔离" tabindex="-1"><a class="header-anchor" href="#会话功能-会话记忆隔离"><span>会话功能-会话记忆隔离</span></a></h2><p>刚才我们做的会话记忆，所有会话使用的是同一个记忆存储对象，因此不同会话之间的记忆并没有做到隔离</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1.定义会话记忆对象提供者
2.配置会话记忆对象提供者
3.ConsultantService接口方法中添加参数
memoryId
4.Controller中chat接囗接收memoryId
5.前端页面请求时传递memoryId

@Bean
public ChatMemoryProvider chatMemoryProvider() {
	ChatMemoryProvider chatMemoryProvider = new ChatMemoryProvider() {
		@Override
        public ChatMemory get(Object memoryld) {
            return MessageWindowChatMemory.builder().id(memoryld).maxMessages(20)
            .build();
        }
    };
	return chatMemoryProvider;
}
@AiService(
wiringMode =AiServiceWiringMode.EXPLICIT
chatModel = &quot;openAiChatModel&quot;,
streamingChatModel =&quot;openAiStreamingChatModel&quot;
//chatMemory=&quot;chatMemory&quot; # 手动设置 注释掉
chatMemoryProvider=&quot;chatMemoryProvider&quot; //新提供
)

public interface ConsultantService {
	@SystemMessage(fromResource = &quot;system.txt&quot;)
	public Flux&lt;String&gt; chat(
        @Memoryld String memoryld,//前端传过来
        @UserMessage String message
    );
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="会话功能-会话记忆持久化" tabindex="-1"><a class="header-anchor" href="#会话功能-会话记忆持久化"><span>会话功能-会话记忆持久化</span></a></h2><p>刚才我们做的会话记忆，只要后端重启，会话记忆就没有了</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public interface ChatMemoryStore {
	List&lt;ChatMessage&gt;getMessages(Object memoryld);
	void updateMessages(Object memoryld,List&lt;ChatMessage&gt; messages)
	void deleteMessages(Object memoryld);
}

class SingleSlotChatMemoryStore implements ChatMemoryStore{
    private List&lt;ChatMessage&gt;messages = new ArrayList();
    public List&lt;ChatMessage&gt; getMessages(Object memoryld){
    	return this.messages;
    }
	public void updateMessages(Object memoryld,List&lt;ChatMessage&gt;messages){
		this.messages =messages
    }
	public yoid deleteMessages(Obiect memoryld){
		this.messages = new ArraysList();
	}
}

return MessageWindowChatemory.builder().id(memoryld)
.maxMessages(20)
.build();

public class MessageWindowChatMemory implements ChatMemory {
    private final String id;
    private final ChatMemoryStore store;
    public void add(ChatMessage message) {
    	this.store.updateMessages(this.id, messages);
    }
    public List&lt;ChatMessage&gt; messages(){
    	return this.store.getMessages(this.id);
    }
    public void clear() {
    	this.store.deleteMessages(this.id)
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="会话功能-会话记忆持久化-redis" tabindex="-1"><a class="header-anchor" href="#会话功能-会话记忆持久化-redis"><span>会话功能-会话记忆持久化-redis</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public interface ChatMemoryStore {
	List&lt;ChatMessage&gt;getMessages(Object memoryld);
	void updateMessages(Object memoryld,List&lt;ChatMessage&gt; messages)
	void deleteMessages(Object memoryld);
}

public class RedisChatMemoryStore implements ChatMemoryStore {
	@Override
    public List&lt;ChatMessage&gt; getMessages(Object o) {
    	//TODO 从redis中获取数据return List.of();
    }
    @Override
    public void updateMessages(Object o, List&lt;ChatMessage&gt; list){
    	//TODO 更新redis 中数据
    }
    @Override
    public void deleteMessages(Object o) {
    	//TODO 删除redis中数据
    }
}
1.准备redis环境
2.引入redis起步依赖
3.配置redis连接信息
4.提供ChatMemoryStore实现类
5.配置ChatMemoryStore

docker run--name redis-d-p6379:6379 redis

&lt;dependency&gt;
	&lt;groupld&gt;org.springframework.boot&lt;/groupld&gt;
	&lt;artifactld&gt;spring-boot-starter-data-redis&lt;/artifactld&gt;
&lt;/dependency&gt;

spring:
	data:
		redis:
			host: localhost
			port:6379

@Repository
public class RedisChatMemoryStore implements ChatMemoryStore {
	//TODO重写getMessages()、updateMessages()、deleteMessages()方法
	//注入RedisTemplate
    @Autowired
    private stringRedisTemplate redisTemplate;
    @0verride
    public List&lt;ChatMessage&gt; getMessages(0bject memoryId){
        //获取会话消息
        String json =redisTemplate.opsForValue().get(memoryId);
        //把json字符电转化成List&lt;ChatMessage&gt;
        List&lt;ChatMessage&gt; list =ChatMessageDeserializer.messagesFromJson(json);
        return list;
    }
    @0verride
    public void updateMessages(0bject memoryId, List&lt;chatMessage&gt; list) {
    	//更新会话消息
    	//1.把list转换成json数据
    	String json =ChatMessageSerializer.messagesToJson(list);//
    	2.把json数据存储到redis中
    	redisTemplate.opsForValue().set(memoryId.toString(),json, Duration.ofDays(1));
    }
    @0verride no usages
	public void deleteMessages(0bject memoryId){
		redisTemplate.delete(memoryId.tostring())
	}
}

public ChatMemory get(Object memoryld) {
	return MessageWindowChatMemory.builder().id(memoryld).maxMessages(20)
.chatMemoryStore(store)# 设置持久化
.build();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rag知识库-原理" tabindex="-1"><a class="header-anchor" href="#rag知识库-原理"><span>RAG知识库-原理</span></a></h2><p>RAG,RetrievalAugmented Generation,检索增强生成。通过检索外部知识库的方式增强大模型的生成能力</p><p>通用训练数据2023/10 、专业领域数据</p><p>1.两个向量的余弦相似度越高，说明向量对应的文本相似度越高<br> 2.向量数据库使用流程<br> 借助于向量模型，把文档知识数据向量化后存储到向量数据库用户输入的内容，借助于向量模型转化为向量后，与数据库中的向量通过计算余弦相似度的方式，找出相似度比较高的文本片段</p><figure><img src="https://i2.wp.com/wx4.sinaimg.cn/large/0070JETugy1i41jorkbbaj30qp0efwf5.jpg" alt="1.png" tabindex="0"><figcaption>1.png</figcaption></figure><figure><img src="https://i1.wp.com/wx4.sinaimg.cn/large/0070JETugy1i41jpv2r82j30mo0e2js1.jpg" alt="2.png" tabindex="0"><figcaption>2.png</figcaption></figure><p>向量数据库:<br> Milvus、Chroma、pineconeRedisSearch(Reids)、pgvector(PostgresQL)</p><figure><img src="https://i2.wp.com/wx4.sinaimg.cn/large/0070JETugy1i41jqq00n4j30l60codgf.jpg" alt="3.png" tabindex="0"><figcaption>3.png</figcaption></figure><figure><img src="https://i1.wp.com/wx4.sinaimg.cn/large/0070JETugy1i41jr686s9j30pw0cr0um.jpg" alt="4.png" tabindex="0"><figcaption>4.png</figcaption></figure><figure><img src="https://i2.wp.com/wx4.sinaimg.cn/large/0070JETugy1i41jrs5e9fj30mk075js4.jpg" alt="5.png" tabindex="0"><figcaption>5.png</figcaption></figure><figure><img src="https://i0.wp.com/wx4.sinaimg.cn/large/0070JETugy1i41js9qbgkj30ke0bq74x.jpg" alt="6.png" tabindex="0"><figcaption>6.png</figcaption></figure><figure><img src="https://i1.wp.com/wx4.sinaimg.cn/large/0070JETugy1i41jsshrj2j30o30c4tac.jpg" alt="7.png" tabindex="0"><figcaption>7.png</figcaption></figure><figure><img src="https://i3.wp.com/wx4.sinaimg.cn/large/0070JETugy1i41jtcvf8cj30lq06at95.jpg" alt="8.png" tabindex="0"><figcaption>8.png</figcaption></figure><figure><img src="https://i1.wp.com/wx4.sinaimg.cn/large/0070JETugy1i41ju2jxucj30pz09zmyv.jpg" alt="9.png" tabindex="0"><figcaption>9.png</figcaption></figure><h2 id="rag知识库-快速入门" tabindex="-1"><a class="header-anchor" href="#rag知识库-快速入门"><span>RAG知识库-快速入门</span></a></h2><p>1.存储(构建向量数据库操作对象)<br> ·引入依赖<br> 加载知识数据文档<br> ·构建向量数据库操作对象<br> ·把文档切割、向量化并存储到向量数据库中<br> 2.检索(构建向量数据库检索对象)<br> 构建向量数据库检索对象<br> 配置向量数据库检索对象</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;dependency&gt;
&lt;groupld&gt;dev.langchain4j&lt;/groupld&gt;
&lt;artifactld&gt;langchain4j-easy-rag&lt;/artifactld&gt;
&lt;version&gt;1.0.1-beta6&lt;/version&gt;
&lt;/dependency&gt;
public EmbeddingStore embeddingstore(){
    List&lt;Document&gt; documents = ClassPathDocumentLoader.loadDocuments(“文档路径&quot;);

    InMemoryEmbeddingStore&lt;TextSegment&gt; store = new InMemoryEmbeddingStore&lt;&gt;();

    EmbeddingStoreingestor ingestor = EmbeddingStoreingestor.builder().embeddingStore(store)
    .build();
    ingestor.ingest(documents);
    return store;
}

//构建向量数据库检索对象远
@Bean
public ContentRetriever contentRetriever(EmbeddingStore store){
	return EmbeddingStorecontentRetriever.builder.embeddingStore(store).minScore(0.5).maxResults(3).build();
}

@AiService(
	wiringMode =AiServiceWiringMode.EXPLICIT
	contentRetriever = &quot;contentRetriever&quot; # 设置
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rag知识库-核心api" tabindex="-1"><a class="header-anchor" href="#rag知识库-核心api"><span>RAG知识库-核心API</span></a></h2><figure><img src="https://i4.wp.com/wx4.sinaimg.cn/large/0070JETugy1i41kavy35sj30tx0dqt9y.jpg" alt="11.png" tabindex="0"><figcaption>11.png</figcaption></figure><p>文档加载器，用于把磁盘或者网络中的数据加载进程序<br> ●FileSystemDocumentLoader，根据本地磁盘绝对路径加载</p><p>●ClassPathDocumentLoader，相对于类路径加载<br> ●UrlDocumentLoader，根据url路径加载</p><p><code>List&lt;Document&gt; documents = FileSystemDocumentLoader.loadDocuments( C:\\\\UsersllAdministratonllideaProjects\\\\)</code></p><p>文档解析器，用于解析使用文档加载器加载进内存的内容，把非纯文本数据转化成纯文本●TextDocumentParser，解析纯文本格式的文件</p><p>●ApachePdfBoxDocumentParser，解析pdf格式文件</p><p>ApachePoiDocumentParser，解析微软的office文件，例如DOC、PPT、XLS</p><p>ApacheTikaDocumentParser(默认)，几乎可以解析所有格式的文件</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;dependency&gt;
&lt;groupld&gt;dev.langchain4j&lt;/groupld&gt;
&lt;artifactld&gt;langchain4j-document-parser-apache-pdfbox&lt;/artifactld&gt;
&lt;version&gt;1.0.1-beta6&lt;/version&gt;
&lt;/dependency&gt;

List&lt;Document&gt; documents =  ClassPathDocumentLoader.loadDocuments(
&quot;content&quot;,new ApachePdfBoxDocumentParser())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文档分割器，用于把一个大的文档，切割成一个一个的小片段<br> ●DocuemntByParagraphSplitter，按照段落分割文本</p><p>●DocumentByLineSplitter，按照行分割文本</p><p>DocumentBySentenceSplitter，按照句子分割文本</p><p>●DocumentByWordSplitter，按照词分割文本</p><p>DocumentByCharacterSplitter，按照固定数量的字符分割文本</p><p>DocumentByRegexSplitter，按照正则表达式分割文本</p><p>DocumentSplitters.recursive(.)(默认)，递归分割器,优先段落分割再按照行分割，再按照句子分割，再按照词分割</p><p>文本片段:最大300个字符</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>DocumentSplitter documentSplitter = DocumentSplitters.recursive(
每个片段最大容纳的字符,两个片段之间重叠字符的个数)

EmbeddingStoreIngestor ingestor= 
EmbeddingStorelngestor.builder()
.embeddingStore(store)
documentSplitter(documentSplitter) # 设置RAG
.build();

//1.加载文档进内存
//List&lt;Document&gt; documents = ClassPathDocumentLoader.loadDocuments(&quot;content&quot;);
List&lt;Document&gt; documents = classPathDocumentLoader.loadDocuments(&quot;content&quot;,new ApachePdf
//List&lt;Document&gt; documents = FilesystemDocumentLoader.loadDocuments(&quot;c:\\\\Users (AdministratorllideaProjec)
//2.构建向量数据库操作对象
InMemoryEmbeddingStore store =new InMemoryEmbeddingStore();
//构建文档分割器对象
jocumentSplitter ds = Documentsplitters.recursive(
maxSegmentsizelnChars: 500, maxOverlapSizelnChars: 100);
//3.构建一个EmbeddingStoreIngestor对象,完成文本数据切割,向量化，存储
EmbeddingStoreIngestor ingestor = EmbeddingStoreIngestor.builder()
.embeddingStore(store)
.documentSplitter(ds).build():
ingestor.ingest(documents),
return store;
}

向量模型，用于把文档分割后的片段向量化或者查询时把用户输入的内容向量化
1.配置向量模型信息
2.设置EmbeddingModel
向量数据库:
Milvus、Chroma、PineconeRedisSearch(Reids)、pgvector(PostgreSQL)

public interface EmbeddingModel {
	default Response&lt;Embedding&gt; embed(String text) {
		return this.embed(TextSegment.from(text));
    }
	default Response&lt;Embedding&gt;embed(TextSegment textSegment) {
	
	}
	Response&lt;List&lt;Embedding&gt;&gt;embedAll(List&lt;TextSegment&gt; texts);
	default int dimension(){
		return((Embedding)this.embed(&quot;test&quot;).content()).dimension();
    }
}

langchain4j:
    open-ai:
    	embedding-model:
            base-url: https://dashscope.aliyuncs.com/compatible-mode/v1
            api-key: \${API-KEY}
            model-name: text-embedding-v3
            log-requests: true
            log-responses: true
            
EmbeddingStoreingestor.builder()
.embeddingStore(store) # 设置
.documentSplitter(documentSplitter)  
.embeddingModel(embeddingModel)
.build();

EmbeddingStoreContentRetriever.builder()
.embeddingStore(store)
.embeddingModel(embeddingModel) # 设置
.maxResults(3)
.minScore(0.6)
.build();

EmbeddingStore，用于操作向量数据库(添加、检索)
1.准备向量数据库
2.引入依赖
3.配置向量数据库信息
4.注入RedisEmbeddingstore并使用
public interface EmbeddingStore&lt;Embedded&gt; {
    String add(Embedding embedding);
    void add(String text, Embedding embedding);
    String add(Embedding embedding, Embedded embedded);
    List&lt;String&gt; addAll(List&lt;Embedding&gt; embeddings);
    EmbeddingSearchResult&lt;Embedded&gt; search(EmbeddingSearchRequest request);
}

docker stop redis #停止原有的redis镜像
docker rm redis #删除原有的redis镜像
docker run --name redis-vector -d -p 6379:6379 redislabs/redisearch

&lt;dependency&gt;
    &lt;groupld&gt;dev.langchain4j&lt;/groupld&gt;
    &lt;artifactld&gt;langchain4j-community-redis-spring-boot-starter&lt;/artifactld&gt;
    &lt;version&gt;1.0.1-beta6&lt;/version&gt;
&lt;/dependency&gt;

langchain4j:
	community:
		redis:
			host: localhost
			port: 6379
			
EmbeddingStoreingestor.builder()
.embeddingStore(store) # 设置
.documentSplitter(documentSplitter)
.embeddingModel(embeddingModel)
.build();

EmbeddingStoreContentRetriever.builder()
.embeddingStore(store) # 设置
.embeddingModel(embeddingModel)
.maxResults(3)
.minScore(0.6)
.build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tools工具-准备工作" tabindex="-1"><a class="header-anchor" href="#tools工具-准备工作"><span>Tools工具-准备工作</span></a></h2><p>准备工作:开发一个预约信息服务，可以读写MySql中预约表中的信息</p><figure><img src="https://i0.wp.com/wx4.sinaimg.cn/large/0070JETugy1i41m8dtd8kj30jz0aq3z5.jpg" alt="12.png" tabindex="0"><figcaption>12.png</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1.准备数据库环境
2.引入依赖
3.配置连接信息
4.准备实体类
5.开发Mapper
6.开发Service
7.完成测试

docker run --name mysql -d -p 3307:3306 -e MYSQL ROOT PASSWORD=1234 mysql
create database if not exists volunteer;
use volunteer;
create table if not exists reservation
(
    id                  bigint      primary key auto_increment not null comment &#39;主键ID&#39;,
    name                varchar(50) not null comment &#39;考生姓名&#39;,
    gender              varchar(2)  not null comment &#39;考生性别&#39;,
    phone               varchar(20) not null comment &#39;考生手机号&#39;,
    communication_time  datetime    not null comment &#39;沟通时间&#39;,
    province            varchar(32) not null comment &#39;考生所处的省份&#39;,
    estimated_score     int         not null comment &#39;考生预估分数&#39;
);

&lt;dependency&gt;
&lt;groupld&gt;org.projectlombok&lt;/groupld&gt;
&lt;artifactld&gt;lombok&lt;/artifactld&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
&lt;groupld&gt;org.mybatis.spring.boot&lt;/groupld&gt;
&lt;artifactld&gt;mybatis-spring-boot-starter&lt;/artifactld&gt;
&lt;version&gt;3.0.3&lt;/version&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
&lt;groupld&gt;com.mysql&lt;/groupld&gt;
&lt;artifactld&gt;mysql-connector-j&lt;/artifactld&gt;
&lt;/dependency&gt;

spring:
	datasource:
		username: root
		password:1234url:jdbc:mysql://localhost:3307/gk?
		useUnicode=true&amp;characterEncoding=utf-
		8&amp;useSSL=false&amp;serverTimezone=Asia/Shanghai&amp;allowPublicKeyRetrieval=true
		driver-class-name: com.mysql.cj.jdbc.Driver
mybatis:
	configuration:
		map-underscore-to-camel-case: true
		
@Service
public class ReservationService {
	@Autowired
	private ReservationMapper reservationMapper;
	public void insert(Reservation reservation){
		reservationMapper.insert(reservation);
    }
	public Reservation findByPhone(String phone) {
		return reservationMapper.findByPhone(phone);
	}
}
@AiService(
	wiringMode =AiServiceWiringMode.EXPLICIT,
	tools =&quot;reservationTool&quot;
}
@Component
public class ReservationTool {
	@Autowired
	private ReservationService reservationService,
	@Tool(&quot;添加志愿指导服务预约&quot;)
	public void addReservation(
        @P(&quot;考生姓名&quot;) String name,
        @P(&quot;考生性别&quot;) String gender
        @P(&quot;考生电话&quot;) String phone,
        @P(&quot;沟通时间&quot;) LocalDateTime communicationTime.
        @P(&quot;考生所在省份&quot;)String province,
        @P(&quot;考生预估分数&quot;) Integer estimatedScore)
    {
		Reservation reservation = new Reservation(null, name, gender, phone, communicationTime, province, estimatedScore));
		reservationService.insert(reservation);
    }
    //2.工具方法:查询预约信息
	@Tool(&quot;根据考生电话查询考生预约详情&quot;)
	public Reservation findReservation(@P(&quot;考生电话&quot;) String phone){
		return reserationSerice,fndBvPhope(phone);
    }
}

@AiService(
wiringMode =AiServiceWiringMode.EXPLICIT,
..tools= &quot;reservationTool&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,63);function g(p,h){const n=l("ExternalLinkIcon");return a(),r("div",null,[c,e("p",null,[e("a",u,[i("https://docs.langchain4j.dev/"),s(n)])]),m,e("p",null,[i("ollama是一种用于快速下载、部署、管理大模型的工具，官网地址:"),e("a",o,[i("https://ollama.com"),s(n)])]),b])}const S=t(v,[["render",g],["__file","LangChain4j.html.vue"]]),x=JSON.parse('{"path":"/backend/LangChain4j.html","title":"LangChain4j","lang":"zh-CN","frontmatter":{"description":"LangChain4j https://docs.langchain4j.dev/ 大模型部署 自己部署 》云服务器部署 优势:前期成本低，维护简单 劣势:数据不安全，长期使用成本高 本地机器部署 优势:数据安全;长期成本 低劣势:初期成本高，维护困难 他人部署 百度智能云 硅基流动 火山引擎 阿里云百炼 API接口 优势:无需部署 劣势:数据不安全，...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/LangChain4j.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"LangChain4j"}],["meta",{"property":"og:description","content":"LangChain4j https://docs.langchain4j.dev/ 大模型部署 自己部署 》云服务器部署 优势:前期成本低，维护简单 劣势:数据不安全，长期使用成本高 本地机器部署 优势:数据安全;长期成本 低劣势:初期成本高，维护困难 他人部署 百度智能云 硅基流动 火山引擎 阿里云百炼 API接口 优势:无需部署 劣势:数据不安全，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://i2.wp.com/wx4.sinaimg.cn/large/0070JETugy1i41jorkbbaj30qp0efwf5.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"LangChain4j\\",\\"image\\":[\\"https://i2.wp.com/wx4.sinaimg.cn/large/0070JETugy1i41jorkbbaj30qp0efwf5.jpg\\",\\"https://i1.wp.com/wx4.sinaimg.cn/large/0070JETugy1i41jpv2r82j30mo0e2js1.jpg\\",\\"https://i2.wp.com/wx4.sinaimg.cn/large/0070JETugy1i41jqq00n4j30l60codgf.jpg\\",\\"https://i1.wp.com/wx4.sinaimg.cn/large/0070JETugy1i41jr686s9j30pw0cr0um.jpg\\",\\"https://i2.wp.com/wx4.sinaimg.cn/large/0070JETugy1i41jrs5e9fj30mk075js4.jpg\\",\\"https://i0.wp.com/wx4.sinaimg.cn/large/0070JETugy1i41js9qbgkj30ke0bq74x.jpg\\",\\"https://i1.wp.com/wx4.sinaimg.cn/large/0070JETugy1i41jsshrj2j30o30c4tac.jpg\\",\\"https://i3.wp.com/wx4.sinaimg.cn/large/0070JETugy1i41jtcvf8cj30lq06at95.jpg\\",\\"https://i1.wp.com/wx4.sinaimg.cn/large/0070JETugy1i41ju2jxucj30pz09zmyv.jpg\\",\\"https://i4.wp.com/wx4.sinaimg.cn/large/0070JETugy1i41kavy35sj30tx0dqt9y.jpg\\",\\"https://i0.wp.com/wx4.sinaimg.cn/large/0070JETugy1i41m8dtd8kj30jz0aq3z5.jpg\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"大模型部署","slug":"大模型部署","link":"#大模型部署","children":[{"level":3,"title":"大模型部署-自己部署(本机)","slug":"大模型部署-自己部署-本机","link":"#大模型部署-自己部署-本机","children":[]}]},{"level":2,"title":"大模型使用","slug":"大模型使用","link":"#大模型使用","children":[]},{"level":2,"title":"会话功能-快速入门","slug":"会话功能-快速入门","link":"#会话功能-快速入门","children":[]},{"level":2,"title":"会话功能-Spring整合Langchain4j","slug":"会话功能-spring整合langchain4j","link":"#会话功能-spring整合langchain4j","children":[]},{"level":2,"title":"会话功能-流式调用","slug":"会话功能-流式调用","link":"#会话功能-流式调用","children":[]},{"level":2,"title":"会话功能-消息注解","slug":"会话功能-消息注解","link":"#会话功能-消息注解","children":[]},{"level":2,"title":"会话功能-会话记忆","slug":"会话功能-会话记忆","link":"#会话功能-会话记忆","children":[]},{"level":2,"title":"会话功能-会话记忆隔离","slug":"会话功能-会话记忆隔离","link":"#会话功能-会话记忆隔离","children":[]},{"level":2,"title":"会话功能-会话记忆持久化","slug":"会话功能-会话记忆持久化","link":"#会话功能-会话记忆持久化","children":[]},{"level":2,"title":"会话功能-会话记忆持久化-redis","slug":"会话功能-会话记忆持久化-redis","link":"#会话功能-会话记忆持久化-redis","children":[]},{"level":2,"title":"RAG知识库-原理","slug":"rag知识库-原理","link":"#rag知识库-原理","children":[]},{"level":2,"title":"RAG知识库-快速入门","slug":"rag知识库-快速入门","link":"#rag知识库-快速入门","children":[]},{"level":2,"title":"RAG知识库-核心API","slug":"rag知识库-核心api","link":"#rag知识库-核心api","children":[]},{"level":2,"title":"Tools工具-准备工作","slug":"tools工具-准备工作","link":"#tools工具-准备工作","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":12.35,"words":3706},"filePathRelative":"backend/LangChain4j.md","excerpt":"\\n<p><a href=\\"https://docs.langchain4j.dev/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://docs.langchain4j.dev/</a></p>\\n<table>\\n<thead>\\n<tr>\\n<th>功能</th>\\n<th>Spring AI</th>\\n<th>LangChain4j</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>Chat</td>\\n<td>支持</td>\\n<td>支持</td>\\n</tr>\\n<tr>\\n<td>Function</td>\\n<td>支持</td>\\n<td>支持</td>\\n</tr>\\n<tr>\\n<td>RAG</td>\\n<td>支持</td>\\n<td>支持</td>\\n</tr>\\n<tr>\\n<td>对话模型</td>\\n<td>15+</td>\\n<td>15+</td>\\n</tr>\\n<tr>\\n<td>向量模型</td>\\n<td>10+</td>\\n<td>15+</td>\\n</tr>\\n<tr>\\n<td>向量数据库</td>\\n<td>15+</td>\\n<td>20+</td>\\n</tr>\\n<tr>\\n<td>多模态模型</td>\\n<td>5+</td>\\n<td>1</td>\\n</tr>\\n<tr>\\n<td>JDK</td>\\n<td>17</td>\\n<td>8</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{S as comp,x as data};
