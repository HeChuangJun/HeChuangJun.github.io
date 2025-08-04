import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as i,e as l}from"./app-7KT7HDzT.js";const d={},s=l(`<p>MongoDB是nosql数据库的一种,对node.js有比较好的支持<br> 是非关系型数据库</p><ul><li><a href="#1-%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93%E4%B8%8E%E9%9D%9E%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93">1. 关系型数据库与非关系型数据库</a></li><li><a href="#2-mongodb%E6%98%AF%E6%9C%80%E6%8E%A5%E8%BF%91%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93%E7%9A%84%E9%9D%9E%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93">2. MongoDB是最接近关系型数据库的非关系型数据库</a></li><li><a href="#%E6%94%AF%E6%8C%81%E7%9A%84%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B">支持的数据类型√</a></li><li><a href="#3-mongodb%E6%95%B0%E6%8D%AE%E5%BA%93%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5">3. mongodb数据库的基本概念</a></li><li><a href="#mongodb%E5%91%BD%E4%BB%A4">MongoDB命令</a></li><li><a href="#54-nodejs%E6%93%8D%E4%BD%9Cmongodb%E6%89%80%E6%9C%89%E5%AF%B9mongodb%E6%95%B0%E6%8D%AE%E5%BA%93%E6%93%8D%E4%BD%9C%E9%83%BD%E6%98%AF%E5%BC%82%E6%AD%A5%E7%9A%84">5.4. node.js操作mongodb(所有对mongodb数据库操作都是异步的)</a></li></ul><h1 id="_1-关系型数据库与非关系型数据库" tabindex="-1"><a class="header-anchor" href="#_1-关系型数据库与非关系型数据库"><span>1. 关系型数据库与非关系型数据库</span></a></h1><ul><li>关系型数据库是指表与表之间存在联系</li><li>所有关系型数据库在操作之前都要设计表结构</li><li>所有关系型数据库都要通过sql语音来操作</li><li>关系型数据库的表还支持约束</li><li>非关系型数据库非常灵活（键值对）</li></ul><h1 id="_2-mongodb是最接近关系型数据库的非关系型数据库" tabindex="-1"><a class="header-anchor" href="#_2-mongodb是最接近关系型数据库的非关系型数据库"><span>2. MongoDB是最接近关系型数据库的非关系型数据库</span></a></h1><ul><li>数据库→数据库；数据表→集合；表记录→文档对象</li></ul><h1 id="支持的数据类型√" tabindex="-1"><a class="header-anchor" href="#支持的数据类型√"><span>支持的数据类型√</span></a></h1><p>1、String<br> 2、Integer<br> 3、Double<br> 4、Boolean<br> 5、Object<br> 6、Object ID<br> 7、Arrays<br> 8、Min/Max Keys<br> 9、Datetime<br> 10、Code<br> 11、Regular Expression 等</p><h1 id="_3-mongodb数据库的基本概念" tabindex="-1"><a class="header-anchor" href="#_3-mongodb数据库的基本概念"><span>3. mongodb数据库的基本概念</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>数据库（大对象）→集合（数组）→文档（小对象）
{
	a(数据库):{
		aa(集合):[
			{&quot;name&quot;:&quot;junye1&quot;},（文档1）
			{&quot;name&quot;:&quot;junye2&quot;},（文档2）
		]
	}
	b(数据库):{
		bb(集合):[
			{&quot;name&quot;:&quot;junye3&quot;},（文档3）
			{&quot;name&quot;:&quot;junye4&quot;},（文档4）
		]
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="mongodb命令" tabindex="-1"><a class="header-anchor" href="#mongodb命令"><span>MongoDB命令</span></a></h1><ul><li>测试是否成功mongod --version测试是否成功</li><li>开启服务mongod [--dbpath=数据存储目录路径]默认使用执行mongod命令所处盘符根目录下的/data/db作为数据存储目录，所以在执行第一次命令的时候手动创建一个/data/db作为数据存储目录</li><li>关闭服务 ：ctrl+c</li><li>查看数据库列表show dbs</li><li>查看当前操作的数据库db</li><li>切换到指定数据库，如没有则（当有数据的时候）新建:use 数据库名称</li><li>插入数据 db.student.insertOne({&quot;name&quot;:&quot;jack&quot;})</li><li>查询集合（“表==数组”）show conllections</li><li>查询集合下所有的数据db.student.find()</li></ul><h1 id="_5-4-node-js操作mongodb-所有对mongodb数据库操作都是异步的" tabindex="-1"><a class="header-anchor" href="#_5-4-node-js操作mongodb-所有对mongodb数据库操作都是异步的"><span>5.4. node.js操作mongodb(所有对mongodb数据库操作都是异步的)</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 使用第三方monggose操作（基于上面的包再次封装）（推荐）

//安装npm -i install monggose
const mongoose = require(&#39;mongoose&#39;);
mongoose.connect(&#39;mongodb://localhost/test&#39;);

const Cat = mongoose.model(&#39;Cat&#39;, { name: String });

const kitty = new Cat({ name: &#39;Zildjian&#39; });
kitty.save().then(() =&gt; console.log(&#39;meow&#39;));

# 6. node.js连接mongodb设计集合结构

var mongoose = require(&#39;mongoose&#39;);
var Schema = mongoose.Schema;
//设计集合结构(表结构)
//字段名称是表结构中的属性名称(约束)值
var blogSchema = new Schema({
	title:  String,
	author: String,
	body:   String,
	comments: [{ body: String, date: Date }],
	date: { type: Date, default: Date.now },
	hidden: Boolean,
	meta: {
	  votes: Number,
	  favs:  Number,
	  require：true
	}
});
//将文档结构发布为模型
//第一个参数表示数据库名称，mongoose会自动将大写名词的字符串生成小写复数的集合名称例如这里的Blog会变成blogs集合名称
//第二个参数表示架构Schema
var Blog = mongoose.model(&#39;Blog&#39;, blogSchema);

# 插入数据

var testsave = new Blog({
	title:  &quot;haha&quot;,
	author: &quot;junye&quot;,
	body:   &quot;ceshi&quot;,
	comments: [{ body: &quot;xh&quot;, date: &quot;2018-08-06&quot; }],
	date: { type: &quot;2018-08-06&quot;, default: &quot;2018-08-06&quot; },
	hidden: false,
	meta: {
		1
	}

})
test.save((function)(err,ret//返回值){
	if(err){console.log(&#39;保存失败&#39;)}
	else{console.log(&#39;保存成功&#39;)}
})

# 查询数据

//查询所有
Blog.find(function(err,ret){
	if(err){
		console.log(&#39;查询失败&#39;)
	}else{console.log(ret)//返回所有数组}
})
//条件查询（可能多个）
Blog.find({title:&#39;haha&#39;},function(err,ret){
	if(err){
		console.log(&#39;查询失败&#39;)
	}else{console.log(ret)//返回所有数组}
})
//查询一个
Blog.findOne({title:&#39;haha&#39;},function(err,ret){
	if(err){
		console.log(&#39;查询失败&#39;)
	}else{console.log(ret)//返回所有数组}
})

# 删除数据

//根据条件删除所有
Blog.remove({title:&#39;haha&#39;},function(err,ret){
	if(err){
		console.log(&#39;删除失败&#39;)
	}else{console.log(&#39;删除成功&#39;)}
})
//根据条件删除一个
Blog.findOneAndRemove(conditions,[options],[callback])
//根据id删除一个
Model.findByIdAndRemove(conditions,[options],[callback])

# 更新数据

//根据条件更新所有
Blog.findByIdAndUpdate(conditions,[options],[callback])
//根据指定条件更新一个
Blog.findOneAndUpdate([conditions],[update][options],[callback])
//根据id更新一个
Blog.findByIdAndUpdate(&#39;xxxxxxxx&#39;,function(err,ret){
	if(err){
		console.log(&#39;更新失败&#39;)
	}else{console.log(ret)//更新成功}
})

# 异步promise操作数据库的方法
User.findOne({
	username:&#39;456&#39;
})
.then(function(user){
	if(user){
		console.log(&#39;用户已存在&#39;)
	}else{
		return new User({
			username:&#39;aaa&#39;
			password:&#39;123&#39;
			email:&#39;dads&#39;
		}).save()
	}
}).then(function(ret){

})
# 异步回调操作数据库的方法
User.findOne({username:&#39;456&#39;},function(user){}
	if(user){
	}else{
		new User({
			username:&#39;aaa&#39;
			password:&#39;123&#39;
			email:&#39;dads&#39;
		}),save(function(){
		
		})
	}
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),a=[s];function o(t,r){return e(),i("div",null,a)}const c=n(d,[["render",o],["__file","mongodb.html.vue"]]),u=JSON.parse('{"path":"/backend/database/mongodb.html","title":"MongoDB","lang":"zh-CN","frontmatter":{"title":"MongoDB","date":"2023-01-01T00:00:00.000Z","tags":"MongoDB","categories":"数据库","description":"MongoDB是nosql数据库的一种,对node.js有比较好的支持 是非关系型数据库 1. 关系型数据库与非关系型数据库 2. MongoDB是最接近关系型数据库的非关系型数据库 支持的数据类型√ 3. mongodb数据库的基本概念 MongoDB命令 5.4. node.js操作mongodb(所有对mongodb数据库操作都是异步的) 1. ...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/database/mongodb.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"MongoDB"}],["meta",{"property":"og:description","content":"MongoDB是nosql数据库的一种,对node.js有比较好的支持 是非关系型数据库 1. 关系型数据库与非关系型数据库 2. MongoDB是最接近关系型数据库的非关系型数据库 支持的数据类型√ 3. mongodb数据库的基本概念 MongoDB命令 5.4. node.js操作mongodb(所有对mongodb数据库操作都是异步的) 1. ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MongoDB\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":3.79,"words":1138},"filePathRelative":"backend/database/mongodb.md","localizedDate":"2023年1月1日","excerpt":"<p>MongoDB是nosql数据库的一种,对node.js有比较好的支持<br>\\n是非关系型数据库</p>\\n<!--more-->\\n<!-- TOC -->\\n<ul>\\n<li><a href=\\"#1-%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93%E4%B8%8E%E9%9D%9E%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93\\">1. 关系型数据库与非关系型数据库</a></li>\\n<li><a href=\\"#2-mongodb%E6%98%AF%E6%9C%80%E6%8E%A5%E8%BF%91%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93%E7%9A%84%E9%9D%9E%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93\\">2. MongoDB是最接近关系型数据库的非关系型数据库</a></li>\\n<li><a href=\\"#%E6%94%AF%E6%8C%81%E7%9A%84%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B\\">支持的数据类型√</a></li>\\n<li><a href=\\"#3-mongodb%E6%95%B0%E6%8D%AE%E5%BA%93%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5\\">3. mongodb数据库的基本概念</a></li>\\n<li><a href=\\"#mongodb%E5%91%BD%E4%BB%A4\\">MongoDB命令</a></li>\\n<li><a href=\\"#54-nodejs%E6%93%8D%E4%BD%9Cmongodb%E6%89%80%E6%9C%89%E5%AF%B9mongodb%E6%95%B0%E6%8D%AE%E5%BA%93%E6%93%8D%E4%BD%9C%E9%83%BD%E6%98%AF%E5%BC%82%E6%AD%A5%E7%9A%84\\">5.4. node.js操作mongodb(所有对mongodb数据库操作都是异步的)</a></li>\\n</ul>","autoDesc":true}');export{c as comp,u as data};
