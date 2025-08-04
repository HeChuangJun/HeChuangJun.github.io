import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as n,e as i}from"./app-7KT7HDzT.js";const d={},l=i(`<h1 id="springai" tabindex="-1"><a class="header-anchor" href="#springai"><span>SpringAI</span></a></h1><table><thead><tr><th>功能</th><th>Spring AI</th><th>LangChain4j</th></tr></thead><tbody><tr><td>Chat</td><td>支持</td><td>支持</td></tr><tr><td>Function</td><td>支持</td><td>支持</td></tr><tr><td>RAG</td><td>支持</td><td>支持</td></tr><tr><td>对话模型</td><td>15+</td><td>15+</td></tr><tr><td>向量模型</td><td>10+</td><td>15+</td></tr><tr><td>向量数据库</td><td>15+</td><td>20+</td></tr><tr><td>多模态模型</td><td>5+</td><td>1</td></tr><tr><td>JDK</td><td>17</td><td>8</td></tr></tbody></table><p>1.2 Spring Al的主要功能<br> ·第一、对主流 A1大模型供应商提供了支持，比如:0penAl、Deepfeek、Microsoft、Ollama、Amazon、Google HuggingFace等。<br> 第二、支持AI大模型类型包括:聊天、文本到图像、文本到声音等。<br> 第三、支持主流的Embedding Models(嵌入模型)和向量数据库，比如:Azure Vector Search.<br> Chroma、Milvus、Neo4j、Redis、Pinecone、PostgreSQL/PGVector 等。<br> 第四、 把 A 大模型输出映射到简单的Java 对象(POJOS)上。<br> 第五、支持了函数调用(Function caling)功能。@<br> 第六、为数据工程提供 ETL(数据抽取、转换和加载)框架<br> 第七、支持 Spring Boot 自动配置和快速启动，便于运行 A1 模型和管理向量库。</p><h2 id="对话机器人-快速入门" tabindex="-1"><a class="header-anchor" href="#对话机器人-快速入门"><span>对话机器人-快速入门</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>引入依赖
配置模型
配置客户端
from openai import OpenAI
# 1.初始化0penAI客户端
clien = OpenAI( 
api_key=&quot;&lt;DeepSeek API Key&gt;&quot;,
base_url=&quot;https://api.deepseek.com&quot;)
#2.发送http请求到大模型
response =client.chat.completions.create(
model=&quot;deepseek-r1&quot;,
temperature=0.7,
messages=[
{&quot;role&quot;:&quot;system&quot;，&quot;content&quot;:&quot;你是一个热心的AI助手，你的名字叫小团团&quot;}，{&quot;role&quot;:&quot;user&quot;，&quot;content&quot;:&quot;你好，你是谁?&quot;}，
],
stream=False
)
#3.打印返回结果
print(response.choices[0].message.content)

&lt;dependencyManagement&gt;
	&lt;dependencies&gt;
	&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.ai&lt;/groupId&gt;
    &lt;artifactId&gt;spring-ai-bom&lt;/artifactId&gt;
    &lt;version&gt;\${sprlg-ai.version}&lt;/version&gt;
    &lt;type&gt;pom&lt;/type&gt;
    &lt;scope&gt;import&lt;/scope&gt;
    &lt;/dependency&gt;
    &lt;/dependencies&gt;
&lt;/dependencyManagement&gt;

&lt;dependency&gt;
&lt;groupId&gt;org.springframework.ai&lt;/groupId&gt;
&lt;artifactId&gt;spring-ai-ollama-spring-boot-starter&lt;/artifactId&gt;
&lt;/dependency&gt;

spring:
    ai:
    	ollama:
    		base-url:http://localhost:11434chat :
    		model: deepseek-rl:7b

spring:
    ai :
    	openai:
    		base-url:https://dashscope.aliyuncs.com/compatible-mode
    		api-key: \${OPENAI_API_KEY}
    		chat:
    			options:
        			model:qwen-max # 模型名称
        			temperature:0.8 # 模型温度，值越大，输出结果越随机:
        			
@Bean
public ChatClient chatclient(0llamachatModel model){
	return ChatClient.builder(model).defaultsystem(&quot;你是可爱的助手，名字叫小团团&quot;).build();
}

String content =chatClient.prompt().user(&quot;你是谁?&quot;).call().content();

Flux&lt;String&gt;content = chatClient.prompt().user(&quot;你是谁?&quot;).stream().content();

@RequestMapping(value = &quot;/chat&quot;,produges = &quot;text/event-stream&quot;)
public Flux&lt;string&gt; chat(string prompt){
	return  chatClient.prompt().user(prompt).stream().content();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="对话机器入-会话白志" tabindex="-1"><a class="header-anchor" href="#对话机器入-会话白志"><span>对话机器入-会话白志</span></a></h2><p>SpringAI利用AOP原理提供了AI会话时的拦截、增强等功能，也就是Advisor。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@Bean
public chatClient chatclient(0llamachatModel model){
	return ChatClient.builder(model)// 创建chatclient工厂实例
    .defaultSystem(&quot;你是可爱的小助手，名字叫小团团。&quot;)
    .defaultAdvisors(new SimpleLoggerAdvisor())//配置日志
    .Advisorbuild();//构建ChatClient实例
}
logging:
	level:
		org.springframework.ai.chat.client.advisor: debug
		com.itheima.ai: debug
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="对话机器人-会话记忆" tabindex="-1"><a class="header-anchor" href="#对话机器人-会话记忆"><span>对话机器人-会话记忆</span></a></h2><p>大模型是不具备记忆能力的，要想让大模型记住之前聊天的内容，唯一的办法就是把之前聊天的内容与新的提示词一起发给大模型。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>from openai import OpenAI
#1.初始化0penAI客户端
client = 0penAI(
	api_key=&quot;&lt;DeepSeek API Key&gt;&quot;
	base url=&quot;https://api.deepseek.com&quot;)
# 2.发送http请求到大模型
response =client.chat.completions.create(
	model=&quot;deepseek-r1&quot;,
	temperature=0.7,
	messages=[{&quot;role&quot;:&quot;system&quot;，&quot;content&quot;:&quot;你是一个热心的AI助手，你的名字叫小团团&quot;},
	{&quot;role&quot;: &quot;user&quot;,，&quot;content&quot;:&quot;你好，你是谁?&quot;,}]
	,stream=False
)
print(response)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>角色</th><th>描述</th><th>示例</th></tr></thead><tbody><tr><td><code>system</code></td><td>优先于 user 指令之前的指令，也就是给大模型设定角色和任务背景的系统指令</td><td>你是一个乐于助人的编程助手，你的名字叫小团团，请以小团团的风格来回答用户的问题。</td></tr><tr><td><code>user</code></td><td>终端用户输入的指令（类似于你在 ChatGPT 聊天框输入的内容）</td><td>你好，你是谁？</td></tr><tr><td><code>assistant</code></td><td>由大模型生成的消息，可能是上一轮对话生成的结果</td><td>注意，用户可能与模型产生多轮对话，每轮对话模型都会生成不同结果。</td></tr></tbody></table><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>定义会话存储方式
public interface ChatMemory{
	void add(String conversationId,List&lt;Message&gt; messages);
	List&lt;Message&gt;get(String conversationId, int lastN);
	void clear(String conversationId);
}
@Bean
public ChatMemory chatMemory(){
return new InMemoryChatMemory()
}
配置会话记忆Advisor
@Bean
public chatclient chatclient(0llamaChatModel model){
	return ChatClient.builder(model)
	.defaultSystem(&quot;你是可爱的助手，名字叫小团团&quot;)
	.defaultAdvisors(
    new SimpleLoggerAdvisor()，
    new MessageChatMemoryAdvisor(chatMemory)# 设置
    ).
build()
}
添加会话id
Flux&lt;String&gt;content = chatClient.prompt()
.user(&quot;你好，我叫小明&quot;).abisors(a -&gt;a.param(CHAT_MEMORY_CONVERSATION_ID_KEY, chatId)).stream().content();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),s=[l];function a(r,c){return t(),n("div",null,s)}const v=e(d,[["render",a],["__file","springai.html.vue"]]),m=JSON.parse('{"path":"/backend/springai.html","title":"SpringAI","lang":"zh-CN","frontmatter":{"description":"SpringAI 1.2 Spring Al的主要功能 ·第一、对主流 A1大模型供应商提供了支持，比如:0penAl、Deepfeek、Microsoft、Ollama、Amazon、Google HuggingFace等。 第二、支持AI大模型类型包括:聊天、文本到图像、文本到声音等。 第三、支持主流的Embedding Models(嵌入模型)和...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/springai.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"SpringAI"}],["meta",{"property":"og:description","content":"SpringAI 1.2 Spring Al的主要功能 ·第一、对主流 A1大模型供应商提供了支持，比如:0penAl、Deepfeek、Microsoft、Ollama、Amazon、Google HuggingFace等。 第二、支持AI大模型类型包括:聊天、文本到图像、文本到声音等。 第三、支持主流的Embedding Models(嵌入模型)和..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringAI\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"对话机器人-快速入门","slug":"对话机器人-快速入门","link":"#对话机器人-快速入门","children":[]},{"level":2,"title":"对话机器入-会话白志","slug":"对话机器入-会话白志","link":"#对话机器入-会话白志","children":[]},{"level":2,"title":"对话机器人-会话记忆","slug":"对话机器人-会话记忆","link":"#对话机器人-会话记忆","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.18,"words":953},"filePathRelative":"backend/springai.md","excerpt":"\\n<table>\\n<thead>\\n<tr>\\n<th>功能</th>\\n<th>Spring AI</th>\\n<th>LangChain4j</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>Chat</td>\\n<td>支持</td>\\n<td>支持</td>\\n</tr>\\n<tr>\\n<td>Function</td>\\n<td>支持</td>\\n<td>支持</td>\\n</tr>\\n<tr>\\n<td>RAG</td>\\n<td>支持</td>\\n<td>支持</td>\\n</tr>\\n<tr>\\n<td>对话模型</td>\\n<td>15+</td>\\n<td>15+</td>\\n</tr>\\n<tr>\\n<td>向量模型</td>\\n<td>10+</td>\\n<td>15+</td>\\n</tr>\\n<tr>\\n<td>向量数据库</td>\\n<td>15+</td>\\n<td>20+</td>\\n</tr>\\n<tr>\\n<td>多模态模型</td>\\n<td>5+</td>\\n<td>1</td>\\n</tr>\\n<tr>\\n<td>JDK</td>\\n<td>17</td>\\n<td>8</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{v as comp,m as data};
