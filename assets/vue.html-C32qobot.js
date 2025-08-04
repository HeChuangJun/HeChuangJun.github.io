import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as d,o as a,c as v,a as e,b as i,d as t,e as s}from"./app-7KT7HDzT.js";const r={},u=s('<h1 id="vue2" tabindex="-1"><a class="header-anchor" href="#vue2"><span>Vue2</span></a></h1><h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备"><span>环境准备</span></a></h2><p>安装脚手架<br> npm install -g @vue/cli<br> 创建项目</p><p>vue ui //新建项目界面</p><p>。使用图形向导来创建 vue 项目，记得要勾选router 和 vuex</p><p><img src="https://i2.wp.com/wx4.sinaimg.cn/large/0070JETugy1i421sqvelxj31vo0v9gw0.jpg" alt="1.png"><br><img src="https://i0.wp.com/wx4.sinaimg.cn/large/0070JETugy1i421sqwrqmj31vo0v9k4i.jpg" alt="2.png"><br><img src="https://i3.wp.com/wx4.sinaimg.cn/large/0070JETugy1i421sr1l7mj31vo0v9ng8.jpg" alt="3.png"><br><img src="https://i2.wp.com/wx4.sinaimg.cn/large/0070JETugy1i421sr1ra2j31vo0v9e1b.jpg" alt="4.png"></p><p>安装 devtools</p>',7),o={href:"https://devtools.vuejs.org/guide/installation.html",target:"_blank",rel:"noopener noreferrer"},c=e("figure",null,[e("img",{src:"https://i3.wp.com/wx4.sinaimg.cn/large/0070JETugy1i421tt4n52j31vo0v97lv.jpg",alt:"5.png",tabindex:"0"}),e("figcaption",null,"5.png")],-1),m=e("p",null,"运行项目",-1),b=e("p",null,"npm run serve",-1),p=e("p",null,"修改端口",-1),g=e("p",null,"文档地址:DevServer | webpack",-1),h={href:"https://webpack.js.org/configuration/dev-server/#devserverproxy",target:"_blank",rel:"noopener noreferrer"},x=s(`<figure><img src="https://i4.wp.com/wx4.sinaimg.cn/large/0070JETugy1i4221vzwf2j31vo0v9qf2.jpg" alt="6.png" tabindex="0"><figcaption>6.png</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>。打开 vue.config.js 添加
const { defineconfig }=require(&#39;@vue/cli-service&#39;)
module.exports= defineconfig({
devserver: {port:7070}
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加代理</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>const{defineConfig }=require(&#39;@vue/cli-service&#39;)
module.exports = defineConfig({
	transpileDependencies:true,
	devServer:{
		port: 7070，
		proxy:{&#39;/api&#39;:
			{
			target:&#39;http://localhost:3000&#39;
			,changeorigin:true
			}
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue项目结构" tabindex="-1"><a class="header-anchor" href="#vue项目结构"><span>Vue项目结构</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>PS D:\\2022.js\\代码\\第3章\\client&gt;tree src
D:\\2022.JS\\代码\\第3章\\CLIENT\\SRC
|-assets
|-components
|-router
|-store
|-views

。assets-静态资源
。components-可重用组件
·router-路由
。store-数据共享
。views-视图组件
以后还会添加
。api-跟后台交互，发送fetch、xhr 请求，接收响应
plugins-插件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vue组件</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Vue 的组件文件以 .vue 结尾，每个组件由三部分组成
&lt;template&gt;&lt;/template&gt;
&lt;script&gt;&lt;/script&gt;
&lt;sty1e&gt;&lt;/style&gt;
。template 模板部分，由它生成 html 代码。
script 代码部分，控制模板的数据来源和行为
。style 样式部分

App.vue 注意顶层元素只能有一个！！！！！！！！！！
&lt;temnlate&gt;
&lt;div&gt;
&lt;h1&gt;{{msg}}&lt;/h1&gt;
&lt;h1&gt;{{age &gt; 18?&#39;老年&#39;:&#39;青年&#39;}}&lt;/h1)
&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
const options ={
    data: function(){
        return {msg:&#39;你好!&#39;,age:18};
    }
}
export default options;
&lt;/script&gt;

main.js
import Vue from &#39;vue&#39;
import App from &#39;./App.vue&#39;
import router from &#39;./router&#39;
import store from &#39;./store&#39;
Vue.config.productionTip = false

new vue({
router,
store,
render:h=&gt;h(App)}).$mount(&#39;#app&#39;)

index.html
&lt;!DOCTYPE htm1&gt;&lt;html lang=&quot;&quot;
	&lt;head&gt;
	&lt;meta charset=&quot;utf-8&quot;&gt;&lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=&lt;meta 	
	name=&quot;viewport&quot; content=&quot;width=device-widt&lt;link rel=&quot;icon&quot; href=&quot;&lt;%= BASE URL 
	%&gt;favicon.ic&lt;title&gt;&lt;%= htmlWebpackPlugin.options.title %&gt;&lt;/i&lt;/head&gt;
&lt;body&gt;
&lt;noscript&gt;
&lt;strong&gt;We&#39;re sorry but
&lt;%= htmlWebpackPlugin&lt;/noscript&gt;
&lt;div id=&quot;app&quot;&gt;&lt;!--这里是渲染的id--&gt;
&lt;/div&gt;
&lt;!--built files will be auto
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue绑定" tabindex="-1"><a class="header-anchor" href="#vue绑定"><span>Vue绑定</span></a></h2><p>vuetools在浏览器的vue导航可以看到vue里面的数据</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div&gt;
        &lt;div&gt;&lt;input type=&quot;text&quot; v-bind:value=&quot;name&quot;&gt;&lt;/div&gt;
        &lt;div&gt;&lt;input type=&quot;date&quot; v-bind:value=&quot;birthday&quot;&gt;&lt;/div&gt;
        &lt;div&gt;&lt;input type=&quot;text&quot; :value=&quot;age&quot;&gt;&lt;/div&gt;
        &lt;input type=&quot;button&quot; value=”点我&quot; v-on:click=&quot;m1&quot;&gt;
        &lt;input type=&quot;button&quot; value=”点我&quot; @click=&quot;m1&quot;&gt;
        
        &lt;label for=&quot;&gt;请输入姓名&lt;/1abe1&gt;
        &lt;input type=&quot;text” v-model=&quot;name&quot; /&gt;
        &lt;!-- v-model双向绑定，只用于表单，v-model默认和value绑定，不用写属性名--&gt;
        
        &lt;div&gt;
			&lt;label for=&quot;&quot;&gt;请选择性别&lt;/label&gt;男
			&lt;input type=&quot;radio&quot; value=&quot;男&quot;v-model=&quot;sex&quot;&gt;女
			&lt;input type=&quot;radio&quot; value=&quot;女”v-model=&quot;sex&quot;&gt;
        &lt;/div&gt;
		&lt;div&gt;
			&lt;label for=&quot;&quot;&gt;请选择爱好&lt;/label&gt;
			游泳&lt;input type=&quot;checkbox&quot; value=&quot;游泳”v-model=&quot;fav&quot;&gt;
			打球&lt;input type=&quot;checkbox&quot; value=&quot;打球”v-model=&quot;fav&quot;&gt;
			健身&lt;input type=&quot;checkbox” value=&quot;健身”v-model=&quot;fav&quot;&gt;
		&lt;/div&gt;
		&lt;h2&gt;{{lastName + firstName}}&lt;/h2&gt;
		&lt;h2&gt;{{fullName()}}&lt;/h2&gt;&lt;!--多个使用methods的会重复计算--&gt;
		&lt;h2&gt;{{fullName}}&lt;/h2&gt;&lt;!--多个使用computed不会重复计算，提升性能--&gt;
		&lt;!--if与for不能同一个标签--&gt;
            &lt;div v-if=&quot;students.length &gt;o&quot;
                &lt;div class=&quot;row&quot; v-for=&quot;s of students&quot; :key=&quot;s.id&quot;&gt;
                &lt;div class=&quot;col&quot;&gt;{{s.id}}&lt;/div&gt;
                &lt;div class=&quot;col&quot;&gt;{{s.name}}&lt;/div&gt;
                &lt;div class=&quot;col&quot;&gt;{{s.sex}}&lt;/div&gt;
                &lt;div class=&quot;col&quot;&gt;{{s.age}}&lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        	&lt;div class=&quot;row&quot; v-else&gt;暂无学生数据&lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
const options ={
	data:function(){
		return{ name:&#39;王五&#39;,birthday:&#39;1995-05-01&#39;,age: 20,sex:&#39;男&#39;，fav:[]
        ,firstName :&#39;三&#39;,lastName:&#39;张&#39;};
	}
	methods:{
        m1(){
        	console.log(“m1&quot;)
        },
        m2(){
        	console.log(&quot;m2&quot;)
        }
        fullName(){
			return this.lastName + this.firstName;
        }
	},
	computed:fullName(){
		return this.lastName + this.firstName;
	}
	//页面加载完时执行
	mounted: function(){this.sendReq())} I
}
export default options;
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="axios" tabindex="-1"><a class="header-anchor" href="#axios"><span>axios</span></a></h2><p>axios 它的底层是用了 XMLHttpRequest(xhr)方式发送请求和接收响应，xhr相对于之前讲过的 fetch api来说，功能更强大，但由于是比较老的 api，不支持 Promise，axios 对xhr进行了封装，使之支持 Promise，并提供了对请求响应的统一拦截功能<br> 安装<br> npm install axios -s<br> 创建实例<br> const _axios = axios.create(config);<br> 。config 见后面说明<br> 方法<br> axios.get(url[, config])<br> axios.delete(url[, config])</p><p>axios.head(url[, config])</p><p>axios.options(url[, config])</p><p>axios.pdst(url[, data[, config]])</p><p>axios.put(url[, data[, config]])</p><p>axios.patch(url[, data[, config]])</p><p>axios.request(config)</p><p>config-选项对象、例如查询参数、请求头..</p><p>data-请求体数据、最常见的是json 格式数据</p><p>get、head 请求无法携带请求体，这应当是浏览器的限制所致(xhr、fetchapi均有限制)<br> options、delete 请求可以通过 config 中的 data 携带请求体</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div&gt;
    	&lt;input type=&quot;button&quot; value=&quot;获取远程数据”@click=&quot;sendReg()&quot;&gt;
    &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
import axios from &#39;axio’
const options ={
	methods:{
		async sendReq(){
			const resp= await axios.get(&#39;/api/students&#39;);
			console.log(resp);
			
			// 1.演示 get，post
			// const resp= await axios.post(&#39;/api/a2&#39;);
			
			// 2.发送请求头
			// const resp= await axios.post(&#39;/api/a3&#39;,{},{
				headers:{Authorization:&#39;abc&#39;}});

			// 3.发送请求时携带查询参数 ?name=xxx&amp;age=xxx
			//const name =encodeURIcomponent(&#39;&amp;&amp;&amp;&#39;);
			//const age =18;
			//const resp=await axios.post( /api/a4?name=\${name)&amp;age=\${age}
			
			//不想自己拼串、处理特殊字符、就用下面的办法
			const resp=await axios.post(&#39;/api/a4&#39;,{}，{params:{
				name:&#39;&amp;&amp;&amp;&amp;&#39;,
				age:20
            });
			console.log(resp);
			
			//4.用请求体发数据，格式为urlencoded
			// const params = new URLSearchParams();
			// params.append(&quot;name&quot;,&quot;张三&quot;);
			// params.append(&quot;age&quot;,24)
			// const resp=await axios.post(&#39;/api/a4&#39;,params)

			//5.用请求体发数据，格式为multipart
			const params =new FormData();
			params.append(&quot;name&quot;,&quot;李&quot;);
			params.append(&quot;age&quot;,30);
			const resp= await axios.post(&#39;/api/a4&#39;,params);

			console.log(resp);
			
			//6.用请求体发数据，格式为json
			const resp = await axios.post(&#39;/api/a5jso&#39;,{
                name:&#39;王五&#39;
                age:50
            });
			// JsoN.stringify
            console.log(resp);
		
		}
    }
export default options;
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建实例<br> const _axios = axios.create(config);<br> 。axios 对象可以直接使用，但使用的是默认的设置。</p><p>用 axios.create 创建的对象，可以覆盖默认设置，config 见下面说明</p><table><thead><tr><th>名称</th><th>含义</th></tr></thead><tbody><tr><td>baseURL</td><td>将自动加在 url 前面</td></tr><tr><td>headers</td><td>请求头，类型为简单对象</td></tr><tr><td>params</td><td>跟在 URL 后的请求参数，类型为简单对象或 URLSearchParams</td></tr><tr><td>data</td><td>请求体，类型有简单对象、FormData、URLSearchParams、File 等</td></tr><tr><td>withCredentials</td><td>跨域时是否携带 Cookie 等凭证，默认为 false</td></tr><tr><td>responseType</td><td>响应类型，默认为 json</td></tr></tbody></table><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>const _axios = axios.create({
	baseURL:&#39;http://localhost:8080&#39;,
	withCredentials:true
});
await _axios.post(&#39;/api/a6set&#39;,{})
await _axios.post(&#39;/api/a6get&#39;,{})

//8.响应格式
try{
const resp=await _axios.get(&#39;/api/students&#39;)
console.log(resp)
} catch(e){
console.log(e.response)
}
//java配置
@CrossOrigin(value = &quot;http://localhost:7070&quot;, allowcrydentials = &quot;true&quot;)

PostMapping(&quot;/api/a6set&quot;)
public string a6set(HttpSession session){
    System.out.println(&quot;========== a6 set ==========&quot;);
    System.out.println(session.getId())
    session.setAttribute( name:&quot;name&quot;,&quot;张三&quot;);
    return &quot;post request&quot;;
}
@PostMapping(&quot;/api/a6get&quot;)
public string a6get(HttpSession session){
	System.out.println(&quot;========== a6 get ==========&quot;)
	System.out.println(session.getId());
	System.out.println(&quot;name:&quot;+ session.getAttribute( name: &quot;name&quot;));
	return &quot;post request&quot;;
}

@0verride
public void addcorsMappings(corsRegistry registry){
	registry.addMapping(&quot;/**&quot;)
	.allowedorigins(&quot;http://localhost:7070&quot;)
	.allowCredentials(true);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>名称</th><th>含义</th></tr></thead><tbody><tr><td>data</td><td>响应体数据 ⭐</td></tr><tr><td>status</td><td>状态码 ⭐</td></tr><tr><td>headers</td><td>响应头</td></tr></tbody></table><p>200 表示响应成功</p><p>400 请求数据不正确</p><p>401 身份验证没通过</p><p>403 没有权限</p><p>404 资源不存在</p><p>405 不支持请求方式</p><p>500 服务器内部错误</p><h2 id="axios拦截器" tabindex="-1"><a class="header-anchor" href="#axios拦截器"><span>axios拦截器</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>请求拦截器
axios.interceptors.request.use(
function(config){
    //比如在这里添加统一的 headers
    config.headers = {Authorization:&#39;aaa.bbb.ccc}
    return config;
}
function(error){
    return Promise.reject(error)
);
}
响应拦截器
_axios.interceptors.response.use(
function(response){
if(error.response.status ===400){
console.1og(&#39;请求参数不正确&#39;);
}
else if(error.response.status === 401){
console.1og(&#39;跳转至登录页面’);
}
// 2xx 范围内走这里
return response;
}
function(error){
//超出 2xx，比如 4xx，5xx 走这里
return Promise.reject(error);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="父子组件" tabindex="-1"><a class="header-anchor" href="#父子组件"><span>父子组件</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>子组件
&lt;template&gt;
&lt;div class=&quot;button&quot; :class=&quot;[type,size]&gt;
	a&lt;slot&gt;&lt;/slot&gt;b&lt;!--显示父组件标签中间值--&gt;
&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
const options ={
props: [&quot;type&quot;,&quot;size&quot;]
};
export default options;
&lt;/script&gt;

&lt;!--重用组件--&gt;
&lt;template&gt;
&lt;div&gt;
&lt;h1&gt;父组件&lt;/h1&gt;
&lt;my-button type=&quot;primary&quot; size=&quot;small&quot;&gt;1&lt;/my-button&gt;
&lt;my-button&gt;2&lt;/my-button&gt;
&lt;my-button&gt;3&lt;/my-button&gt;
&lt;my-button&gt;4&lt;/my-button&gt;
&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
import MyButton from &#39;../components/MyButton.vue&#39;
const options ={
components:{
MyButton
}
export default options;
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="elementul" tabindex="-1"><a class="header-anchor" href="#elementul"><span>ElementUl</span></a></h2><p>安装<br> npm install element-ui -s<br> 引入组件</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>import Element from &#39;element-ui&#39;

import &#39;element-ui/lib/theme-chalk/index.css&#39;
Vue.use(Element)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;e1-button&gt;按钮&lt;/e1-button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="vue-router" tabindex="-1"><a class="header-anchor" href="#vue-router"><span>Vue-Router</span></a></h2><p>vue 属于单页面应用，所谓的路由，就是根据浏览器路径不同，用不同的视图组件替换这个页面内容展示</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>example14.js
import Vue from &#39;vue&#39;
import VueRouter from &#39;vue-router&#39;
import ContainerView from &#39;@/views/example14/ContainerView.vue&#39;
import Loginview from &#39;@/views/example14/LoginView.vue&#39;
import NotFoundView from &#39;@/views/example14/NotFoundView.vue&#39;

Vue.use(VueRouter)

const routes =[
{
path:&#39;/&#39;，
component:ContainerView
redirect:&#39;/c/p1&#39;//重定向到。。
children:[
{
	path:&#39;c/p1&#39;,
	...
}
]
},
{
path:&#39;/login&#39;,component:LoginView
},
{
//匹配不到则404
path:&#39;*&#39;&#39;,redirect:&#39;/404&#39;
}
{
//动态按需加载提升性能
path:&#39;/404&#39;,component:()=&gt;import(&#39;@/views/example14/NotFoundView.vue&#39;)
},
]
const router = new VueRouter({routes})

export default router

main.js
import router from &#39;./router/example14&#39;
new Vue({
router,store,render:h=&gt;h(e14)
}).$mount(&#39;#app&#39;)

Example14View.vue
&lt;template&gt;
&lt;div class=&quot;all&quot;&gt;
&lt;router-view&gt;&lt;/router-view&gt;
&lt;!--点击这个使得router-view替换--&gt;
&lt;/router-link to=&quot;/c/p1&quot;&gt;P1&lt;/router-link&gt;
&lt;/div&gt;
&lt;/template&gt;

@click=jump(&#39;c/p1&#39;);

methods:{
	jump(url){
    	this.$router.push(url);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vuex" tabindex="-1"><a class="header-anchor" href="#vuex"><span>Vuex</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>store/index.js
import Vue from &#39;vue&#39;
import Vuex from &#39;vuex&#39;
Vue.use(Vuex)

//读取数据，走 state，getters
//修改数据，走 mutations，actions
export default new Vuex.store({
	state:{
		name:&#39;&#39;,
	},
	getters:{},
	mutations:{
		updateName(state,name){
			state.name =name;
		}
	}
	actions:{},
	modules:{}
})

this.$store.commit(&#39;updateName&#39;, this.name);

{{$store.state.name}}

简写
computed:{
name(){
	return this.$store.state.name
}
}
欢迎您:{{name}}

多个参数
computed:mapState([&#39;name&#39;,&#39;age&#39;])
或者
computed:{
...mapState([&#39;name&#39;,&#39;age&#39;])
}

import {mapMutations} from&#39;vuex&#39;
console.log(mapMutations([&#39;updateName&#39;]))

methods:{
	...mapMutations([&#39;updateName&#39;])
}

@click=&quot;updateName(name)&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,49);function q(f,w){const n=d("ExternalLinkIcon");return a(),v("div",null,[u,e("p",null,[i("devtools插件网址:"),e("a",o,[i("https://devtools.vuejs.org/guide/installation.html"),t(n)])]),c,m,b,p,g,e("p",null,[e("a",h,[i("https://webpack.js.org/configuration/dev-server/#devserverproxy"),t(n)])]),x])}const V=l(r,[["render",q],["__file","vue.html.vue"]]),_=JSON.parse('{"path":"/frontend/vue.html","title":"Vue2","lang":"zh-CN","frontmatter":{"description":"Vue2 环境准备 安装脚手架 npm install -g @vue/cli 创建项目 vue ui //新建项目界面 。使用图形向导来创建 vue 项目，记得要勾选router 和 vuex 1.png 2.png 3.png 4.png 安装 devtools devtools插件网址:https://devtools.vuejs.org/gui...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/frontend/vue.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"Vue2"}],["meta",{"property":"og:description","content":"Vue2 环境准备 安装脚手架 npm install -g @vue/cli 创建项目 vue ui //新建项目界面 。使用图形向导来创建 vue 项目，记得要勾选router 和 vuex 1.png 2.png 3.png 4.png 安装 devtools devtools插件网址:https://devtools.vuejs.org/gui..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://i2.wp.com/wx4.sinaimg.cn/large/0070JETugy1i421sqvelxj31vo0v9gw0.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue2\\",\\"image\\":[\\"https://i2.wp.com/wx4.sinaimg.cn/large/0070JETugy1i421sqvelxj31vo0v9gw0.jpg\\",\\"https://i0.wp.com/wx4.sinaimg.cn/large/0070JETugy1i421sqwrqmj31vo0v9k4i.jpg\\",\\"https://i3.wp.com/wx4.sinaimg.cn/large/0070JETugy1i421sr1l7mj31vo0v9ng8.jpg\\",\\"https://i2.wp.com/wx4.sinaimg.cn/large/0070JETugy1i421sr1ra2j31vo0v9e1b.jpg\\",\\"https://i3.wp.com/wx4.sinaimg.cn/large/0070JETugy1i421tt4n52j31vo0v97lv.jpg\\",\\"https://i4.wp.com/wx4.sinaimg.cn/large/0070JETugy1i4221vzwf2j31vo0v9qf2.jpg\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"环境准备","slug":"环境准备","link":"#环境准备","children":[]},{"level":2,"title":"Vue项目结构","slug":"vue项目结构","link":"#vue项目结构","children":[]},{"level":2,"title":"Vue绑定","slug":"vue绑定","link":"#vue绑定","children":[]},{"level":2,"title":"axios","slug":"axios","link":"#axios","children":[]},{"level":2,"title":"axios拦截器","slug":"axios拦截器","link":"#axios拦截器","children":[]},{"level":2,"title":"父子组件","slug":"父子组件","link":"#父子组件","children":[]},{"level":2,"title":"ElementUl","slug":"elementul","link":"#elementul","children":[]},{"level":2,"title":"Vue-Router","slug":"vue-router","link":"#vue-router","children":[]},{"level":2,"title":"Vuex","slug":"vuex","link":"#vuex","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":6.45,"words":1935},"filePathRelative":"frontend/vue.md","excerpt":"\\n<h2>环境准备</h2>\\n<p>安装脚手架<br>\\nnpm install -g @vue/cli<br>\\n创建项目</p>\\n<p>vue ui //新建项目界面</p>\\n<p>。使用图形向导来创建 vue 项目，记得要勾选router 和 vuex</p>\\n<p><img src=\\"https://i2.wp.com/wx4.sinaimg.cn/large/0070JETugy1i421sqvelxj31vo0v9gw0.jpg\\" alt=\\"1.png\\"><br>\\n<img src=\\"https://i0.wp.com/wx4.sinaimg.cn/large/0070JETugy1i421sqwrqmj31vo0v9k4i.jpg\\" alt=\\"2.png\\"><br>\\n<img src=\\"https://i3.wp.com/wx4.sinaimg.cn/large/0070JETugy1i421sr1l7mj31vo0v9ng8.jpg\\" alt=\\"3.png\\"><br>\\n<img src=\\"https://i2.wp.com/wx4.sinaimg.cn/large/0070JETugy1i421sr1ra2j31vo0v9e1b.jpg\\" alt=\\"4.png\\"></p>","autoDesc":true}');export{V as comp,_ as data};
