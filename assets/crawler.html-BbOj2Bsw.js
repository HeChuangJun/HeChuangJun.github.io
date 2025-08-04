import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as r,c as d,a as e,b as n,d as i,e as l}from"./app-7KT7HDzT.js";const u={},c=l('<h2 id="架构" tabindex="-1"><a class="header-anchor" href="#架构"><span>架构</span></a></h2><p>python 3.7.6 +requests 2.23.0 + beautifulsoup4 4.8.2 + lxml 4.5.0</p><p>开发工具 pycharm2019</p><h2 id="requests-介绍与安装" tabindex="-1"><a class="header-anchor" href="#requests-介绍与安装"><span>requests 介绍与安装</span></a></h2><p>requests 是一个优雅而简单的 Python HTTP请求库requests 的作用是 发送请求获取响应数据<br> requests 安装：在终端(命令行工具)运行这个简单命令即可<br> pip install requests</p><p>注意:<br> 如果你要安装Python虚拟环境中，先进入虚拟机环境再执行上述命令<br> 如果系统中既安装了Python2 又安装了 Python3,需要安装Python3环境中:pip3 install requests</p>',6),v=e("br",null,null,-1),o={href:"http://cn.python-requests.org/zh_cN/latest/",target:"_blank",rel:"noopener noreferrer"},p=e("br",null,null,-1),m={href:"http://cn.python-requests.org/zh",target:"_blank",rel:"noopener noreferrer"},b=l(`<h3 id="requests使用步骤" tabindex="-1"><a class="header-anchor" href="#requests使用步骤"><span>requests使用步骤</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 1.导入模块import requests
# 2.发送请求，获取响应
headers ={
&quot;User-Agent&#39;:&#39;Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36
}
data ={
	&#39;wd&#39;:&#39;北京&#39;
}

#url请求资源路径
#params 参数
#kwargs 字典
response =requests.get(url=url,params=data,headers=headers)
response = requests.get(&#39;http://www.baidu.com&#39;)
参数使用params传递
参数无需urlencode编码
不需要请求对象的定制
请求资源路径中的?可以加也可以不加

# print(response)
# 3。获取响应数据
# print(response.encoding) # IS0-8859-1 二进制转换字符使用的编码
response.encoding=&#39;utf8&#39; 
print(response.text) # 响应体 str类型
print(response.content.decode()) # respones.content:响应体 bytes类型

response的属性以及类型
类型 type(response) models.Response
r.text 获取网站源码
r.encoding 访问或定制编码方式
r.url 获取请求的ur1
r.content 响应的字节类型 二进制数据
r.status_code 响应的状态码
r.headers 响应的头信息

# urllib
(1)一个类型以及六个方法
(2)get请求
(3)post请求百度翻译
(4)ajax的get请求
(5)ajax的post请求
(6)cookie登陆 微博
(7)代理

# requests
(1)一个类型以及六个属性
(2)get请求
(3)post请求
(4)代理
(5)cookie 验证码

requests.post()
百度翻译:
eg:
import requests
post_url=&#39;http://fanyi.baidu.com/sug&#39;
headers={
	&#39;user-Agent&#39;: Mozilla/5.0 (windows NT 10.0; win64; x64)Applewebkit/537.36(KHTML,like Gecko)chrome/68.0.3440.106 safari/537.36&#39;
}
data ={
&#39;kw&#39;: &#39;eye
}
r=requests.post(url=post url,headers=headers,data=data)
post请求 是不需要编解码
post请求的参数是
data不需要请求对象的定制

get和post区别?
get请求的参数名字是paramspost请求的参数的名字是data
请求资源路径后面可以不加?
不需要手动编解码
不需要做请求对象的定制

session =requests.session()
# 验证码的url的内容
response_code =session.get(code url)
# 注意此时要使用二进制数据因为我们要使用的是图片的 下载
content code = response code.content
# wb的模式就是将二进制数据写入到文件
with open(&#39;code.jpg&#39;,&quot;wb&#39;)as fp:
	fp.write(content code)
# 获取了验证码的图片之后 下载到本地 然后观蔡验证码 观察之后 然后在控制台输入这个验证码 就可以将这个值给
# code的参数 就可以登陆
code_name = input(&#39;请输入你的验证码&#39;)
**建议使用ddddor库，免费**
# 点击登陆
url_post = &#39;https://so.gushiwen.cn/user/login.aspx?from=http%3a%2f%2fso.gushiwen.cn%2fuser%21
data_post={
&#39;VIEWSTATE&#39;:viewstate,
VIEWSTATEGENERATOR&#39;:viewstategenerator,
from&#39;:&quot;http://so.gushiwen.cn/user/collect.aspx&#39;
email:&#39;595165358@qq.com&#39;,
pwd&quot; :action&#39;
code&#39;: code_name
&#39;denglu&#39;:&#39;登录&#39;
}
response_post= session.post(url = url, headers = headers, data = data_post)
content_post =response_post.text
with open(&#39;gushiwen.html&#39;,&#39;w&#39;,encoding= &quot; utf-8&#39;)as fp:
	fp.write(content post)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="beautifulsoup-介绍与安装" tabindex="-1"><a class="header-anchor" href="#beautifulsoup-介绍与安装"><span>BeautifulSoup 介绍与安装</span></a></h2><p>BeautifulSoup4 是一个可以从HTML或XML文件中提取数据的Python库<br> Beautifulsoup4 安装<br> pip install bs4</p><p>安装 lxml</p><p>pip install lxml</p><h3 id="beautifulsoup对象介绍与创建" tabindex="-1"><a class="header-anchor" href="#beautifulsoup对象介绍与创建"><span>BeautifulSoup对象介绍与创建</span></a></h3><p>Beautifulsoup对象<br> Beautifulsoup对象:代表要解析整个文档树它支持 遍历文档树 和 搜索文档树 中描述的大部分的方法</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>创建 Beautifulsoup 对象
# 1.导入模块
from bs4 import BeautifulSoup
#2.创建BeautifulSoup对象
soup = BeautifulSoup(&quot;&lt;html&gt;data&lt;/html&gt;&quot;)
print(soup)

警告问题
/usr/local/lib/python3.7/site-packages/bs4/ initpy:181:UserWarning: No parser was explicitlyspecified, so I&#39;m using the best available HTMLparser for this system(&quot;lxml&quot;). This usually isn&#39;t aproblem, but if you run this code on another system,or in a different virtual environment, it may use adifferent parser and behave differently.

解决警告问题
# 指定解析器
soup = BeautifulSoup(&quot;&lt;html&gt;data&lt;/html&gt;&quot;，&#39;lxml&#39;)

find方法的作用:搜索文档树
find(self,name=None,attrs={l,recursive=True,text=None, **kwargs)
参数
	name:标签名
	attrs:属性字典
	recursive:是否递归循环查找
	text:根据文本内容查找
返回
	查找到的第一个元素对象

#4.查找title标签
title = soup.find(&#39;title&#39;)
print(title)# 
5。查找a 标签
a= soup.find(&#39;a&#39;)
print(a)
# 查找所有的a标签
a_s= soup.find_all(&#39;a&#39;)
print(a_s)

二。根据属性进行查找查找id为link1的标签
方式1:通过命名参数进行指定的
a= soup.find(id=&#39;link1&#39;)
print(a)
#方式2:使用attrs来指定属性字典，进行查找
a= soup.find(attrs={&#39;id&#39;:&#39;link1&#39;})
print(a)
# 三，根据文本内容进行查找
text = soup.find(text=&#39;Elsie&#39;)
print(text)
# Tag对象
print(type(a)) #&lt;class &#39;bs4.element.Tag&#39;&gt;
print(&#39;标签名&#39;，a.name)
print(&#39;标签所有属性 (键和值)&#39;，a.attrs)
print(&#39;标签文本内容&quot;，a.text)


Tag 对象介绍
Tag对象对应于原始文档中的XML或HTML标签
Tag有很多方法和属性，可用 遍历文档树 和 搜索文档树
以及获取标签内容

Tag 对象常见属性
name:获取标签名称
attrs:获取标签所有属性的键和值
text:获取标签的文本字符串

#4。使用正则表达式，提取json字符串
json_str= re.findall(r&#39;\\[.+\\]&#39;,text)print(json_str)[0]

正则表达式
1.正则表达式是是一种字符串匹配的模式(pattern),在爬虫中主要用于从某个字符串中提取符合某种条件的子串.
2.常见语法:·0 \\d \\w*+?
3.re.findall()查找字符串所有与正则匹配的子串,返回一个列表,如果没有找到返回空列表
4.re.findall()如果正则中没有分组,返回与整个正则匹配的子串,如果正则中有分组,只返回与分组匹配的子串，分组两边的正则是用于定位的.
5.正则中使用r原串,就是为了消除转移符(\\)的影响,也就是匹配的字符串中,有多少个转移符，r原串的正则中写几个\\就可以了
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="json模块" tabindex="-1"><a class="header-anchor" href="#json模块"><span>Json模块</span></a></h2><p>json模块是Python自带的模块,用于json与python数据之间的相互转换.</p><table><thead><tr><th>JSON</th><th>Python</th></tr></thead><tbody><tr><td>object</td><td>dict</td></tr><tr><td>array</td><td>list</td></tr><tr><td>string</td><td>str</td></tr><tr><td>number(int)</td><td>int, long</td></tr><tr><td>number(real)</td><td>float</td></tr><tr><td>true</td><td>True</td></tr><tr><td>false</td><td>False</td></tr><tr><td>null</td><td>None</td></tr></tbody></table><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>json字符串 =&gt; json.loads(s) =&gt; Python类型数据
json格式的文件对象=&gt;json.load(fp)=&gt; Python类型数据

python类型数据 =&gt;json.dumps(obj) =&gt; json字符串
Python类型数据以json格式写入文件 =&gt; json.dump(obj, fp) =&gt; json格式文件

#3。python类型转换为json字符串
json_str=json.dumps(python_dict)
print(json_str)
# 输出:{&quot;provinceName&quot;:&quot;1u7f8elu56fd&quot;, &quot;currentConfirmedcount&quot;:1115312,&quot;confirmedcount”: 1465066}
#ensure_ascii:指定False，返回结果中可以包含非ASCII字符
json_str:json.dumps(python_dict,ensure_ascii=False)
print(json_str)
#输出:{&quot;provinceName&quot;:&quot;美国”,&quot;currentConfirmedCount&quot;:1115312,&quot;confirmedCount&quot;: 1465066)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="爬虫介绍" tabindex="-1"><a class="header-anchor" href="#爬虫介绍"><span>爬虫介绍</span></a></h2><p>如果我们把互联网比作一张大的蜘蛛网，那一台计算机上的数据便是蜘蛛网上的一个猎物，而爬虫程序就是一只小蜘蛛，沿着蜘蛛网抓取自己想要的数据<br> 解释</p>`,15),h={href:"http://www.taobao.xn--co-2v2d",target:"_blank",rel:"noopener noreferrer"},g=l(`<p>2:使用程序模拟浏览器，去向服务器发送请求，获取响应信息</p><h3 id="爬虫核心" tabindex="-1"><a class="header-anchor" href="#爬虫核心"><span>爬虫核心?</span></a></h3><p>1.爬取网页:爬取整个网页 包含了网页中所有得内容<br> 2.解析数据:将网页中你得到的数据 进行解析<br> 3.难点:爬虫和反爬虫之间的博弈</p><h3 id="爬虫的用途" tabindex="-1"><a class="header-anchor" href="#爬虫的用途"><span>爬虫的用途?</span></a></h3><p>数据分析/人工数据集</p><p>社交软件冷启动</p><p>舆情监控<br> 竞争对手监控</p><h3 id="爬虫分类" tabindex="-1"><a class="header-anchor" href="#爬虫分类"><span>爬虫分类</span></a></h3><h4 id="通用爬虫" tabindex="-1"><a class="header-anchor" href="#通用爬虫"><span>通用爬虫</span></a></h4><p>实例<br> 百度、360、google、sougou等搜索引擎---伯乐在线<br> 功能<br> 访问网页-&gt;抓取数据-&gt;数据存储-&gt;数据处理-&gt;提供检索服务robots协议<br> 一个约定俗成的协议，添加robots.txt文件，来说明本网站哪些内容不可以被抓取，起不到限制作用<br> 自己写的爬虫无需遵守</p><p>网站排名(SEO)<br> 1.根据pagerank算法值进行排名(参考个网站流量、点击率等指标)<br> 2.百度竞价排名<br> 缺点<br> 1.抓取的数据大多是无用的<br> 2.不能根据用户的需求来精准获取数据</p><h4 id="聚焦爬虫" tabindex="-1"><a class="header-anchor" href="#聚焦爬虫"><span>聚焦爬虫</span></a></h4><p>功能<br> 根据需求，实现爬虫程序，抓取需要的数据设计思路<br> 1.确定要爬取的ur1<br> 如何获取ur1<br> 2.模拟浏览器通过http协议访问ur1，获取服务器返回的htm1代码</p><p>如何访问<br> 3.解析htm1字符串(根据一定规则提取需要的数据)</p><p>如何解析</p><h2 id="反爬手段" tabindex="-1"><a class="header-anchor" href="#反爬手段"><span>反爬手段</span></a></h2><h4 id="user-agent" tabindex="-1"><a class="header-anchor" href="#user-agent"><span>User-Agent</span></a></h4><p>User Agent中文名为用户代理，简称 UA，它是一个特殊字符串头，使得服务器能够识别客户使用的操作系统及版本、CPU 类型、浏览器及版本、浏览器渲染引、浏览器语言、浏览器插件等。</p><h4 id="代理ip" tabindex="-1"><a class="header-anchor" href="#代理ip"><span>代理IP</span></a></h4><p>西次代理<br> 快代理<br> 什么是高匿名、匿名和透明代理?它们有什么区别?<br> 1.使用透明代理，对方服务器可以知道你使用了代理，并且也知道你的真实IP。<br> 2.使用匿名代理，对方服务器可以知道你使用了代理，但不知道你的真实IP。<br> 3.使用高匿名代理，对方服务器不知道你使用了代理，更不知道你的真实IP。</p><h4 id="验证码访问" tabindex="-1"><a class="header-anchor" href="#验证码访问"><span>验证码访问</span></a></h4><p>打码平台<br> 云打码平台<br> 超级喁</p><h4 id="动态加载网页" tabindex="-1"><a class="header-anchor" href="#动态加载网页"><span>动态加载网页</span></a></h4><p>网站返回的是js数据 并不是网页的真实数据<br> selenium驱动真实的浏览器发送请求</p><h4 id="数据加密" tabindex="-1"><a class="header-anchor" href="#数据加密"><span>数据加密</span></a></h4><p>分析js代码</p><h2 id="urllib库使用" tabindex="-1"><a class="header-anchor" href="#urllib库使用"><span>urllib库使用</span></a></h2><p>urllib.request.urlopen()模拟浏览器向服务器发送请求</p><p>response服务器返回的数据<br> response的数据类型是HttpResponse<br> 字节--&gt;字符串 解码decode<br> 字符串--&gt;字节 编码encode<br> read() 字节形式读取二进制 扩展:read(5)返回前几个字节<br> readline() 读取一行<br> readlines() 一行一行读取 直至结束<br> getcode() 获取状态码<br> getur1()获取ur1</p><p>getheaders()获取headers</p><p>urllib.request.urlretrieve()<br> 请求网页<br> 请求图片<br> 请求视频</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>使用urllib来获取百度首页的源码
import urllib.request
#(1)定义一个url 就是你要访问的地址
url = &#39;http://www.baidu.com
#(2)模拟浏览器向服务器发送请求response响应
response =urllib.request.urlopen(url)
#3)获取响应中的页面的源码content 内容的意思
# read方法返回的是字节形式的二进制数据
# 我们要将二进制的数据转换为字符串
# 二进制--》字符串 解码 decode(&#39;编码的格式&#39;)
content =response.read().decode(&#39;utf-8&#39;)
#(4)打印数据
print(content)

#一个类型和六个方法
# response是HTTPResponse的类型
# print(type(response))

# 按照一个字节一个字节的去读
# content =response.read()
# print(content)
# 返回多少个字节
# content =response.read(5)
# print(content)

#content =response.readline()
#print(content)

#content =response.readlines()
#print(content)


# 返回状态码 如果是200了 那么就证明我们的逻辑没有错
# print(response.getcode())

# 返回的是url地址
# print(response.geturl())

# 获取是一个状态信息
print(response.getheaders())

# 一个类型 HTTPResponse
#六个方法 read readline readlines getcode geturl getheaders

# 下载网页
# url_page = &#39;http://ww.baidu.com&#39;

# url代表的是下载的路径 
# filename文件的名字
# 在python中 可以变量的名字也可以直接写值
# urllib.request.urlretrieve(url_page,&#39;baidu.html&#39;)

#下载图片
url_img = &#39;https://img1.baidu.com/it/u=3004965690,40892345938.jpg&#39;
urllib.request.urlretrieve(url= url_img,filename=&#39;lisa.jpg&#39;)

response = urllib.request.urlopen(url)
content =response.read().decode(&#39;utf8&#39;)
print(content)

headers ={
	&quot;User-Agent&#39;: &quot;Mozilla/5.0 (Windows NT 10.0; Win64;x64)AppleWebKit/537.36 (KHTML
}
# 因为urlopen方法中不能存储字典所以headers不能传递进去
# 请求对象的定制
#注意 因为参数顺序的问题 不能直接写url 和headers 中间还有data 所以我们需要关键字传参
request =urllib.request.Request(url=url,headers=headers)
response = urllib.request.urlopen(request)
content =response.read().decode(&quot;utf8&#39;)
print(content)

# 请求参数urlencode urlencode应用场景:多个参数的时候 ，在有中文的时候，或者get的?后面的参数
import urllib.parse
data ={
&#39;wd&#39;:&#39;周杰伦&quot;,
&#39;sex&#39;:&#39;男&#39;
}
#将周杰伦三个字变成unicode编码的格式
#我们需要体赖于
#urllib.parsename = urllib.parse.quote(&#39;周杰伦&#39;)
a= urllib.parse.urlencode(data)
print(a)

3.post请求方式
eg:百度翻译
import urllib.request
import urllib.parse
url=&#39;https://fanyi.baidu.com/sug’
headers = {
	&#39;user-agent&#39;:&#39;Mozilla/5.0 (Windows NT 10.0; Win64;x64) AppleWebKit/537.36 (KHTMLlike Gecko)Chrome/74.0.3729.169 Safari/537.36&#39;
}
keyword = input(&#39;请输入您要查询的单词&#39;)
data ={
	&#39;kw&#39; : keyword
}
# post请求的参数 必须要进行编码
data =urllib.parse.urlencode(data).encode(&#39;utf-8&#39;)

总结:post和get区别?
get请求方式的参数必须编码，参数是拼接到ur1后面，编码之后不需要调用encode方法

# post的请求的参数 是不会拼接在url的后面的 而是需要放在请求对象定制的参数中
request = urllib.request.Request(url=url,headers=headers,data=data)
response =urllib.request.urlopen(request)
print(response.read().decode(&#39;utf-8&#39;))

# post请求方式的参数 必须编码，编码之后 必须调用encode方渚
data =urllib.parse.urlencode(data).encode(&#39;utf-8&#39;)
# 参数是放在请求对象定制的方法中 request=urllib.request.Request(url=url,data=data,headers=headers)

#(3)数据下载到本地
# open方法默认情况下使用的是gbk的编码 如果我们要想保存汉字 那么需要在open方法中指定编码格式为utf-8
# encoding =&#39;utf-8&#39;
# fp = open(&#39;douban.json&#39;,&#39;w&#39;,encoding=&#39;utf-8&#39;)
# fp.write(content)

with open(&#39;douban1.json&#39;,&#39;w&#39;,encoding=&#39;utf-8&#39;)as fp:
	fp.write(content)
	
11.URLError\\HTTPError
简介:1.HTTPError类是URLError类的子类
2.导入的包urllib.error.HTTPError urllib.error.URLError
3.http错误:http错误是针对浏览器无法连接到服务器而增加出来的错误提示。引导并告诉浏览者该页是哪里出了问题。
4.通过ur11ib发送请求的时候，有可能会发送失败，这个时候如果想让你的代码更加的健壮，可以通过try-except进行捕获异常，异常有两类，URLError\\HTTPError

try:
    request =urllib.request.Request(url= url, headers = headers)
    response = urllib.request.urlopen(request)
    content = response.read().decode(&#39;utf-8&#39;)
	print(content)
except urllib.error.HTTPError:
	print(&#39;系统正在升级。。。&#39;)
except urllib.error.URLError:
	print(&#39;我都说了 系统正在升级。。。&#39;)

#cookie中携带着你的登陆信息如果有登陆之后的cookie 那么我们就可以携带着cookie进入到任何页面
cookie&quot;:&#39;TWM=24c44910ba98d188fced94ba0da5960e;SUBP=0033WrSXqPxfM725Ws9j9gMF55529P9判断当前# #referer路径是不是由上一个路径进来的……一般情况下 是做图片防盗键
&quot;referer&#39;:&quot;https://weibo.cn/

Handler处理器
定制更高级的请求头(动态cookie和代理不能使用请求对象的定制)

eg:
import urllib.request
url =&#39;http://www.baidu.com&#39;
headers={
	&#39;User -Agent&#39;:&#39;Mozilla/5.0(Windows NT 10.0;Win64;x64)AppleWebKit /537.36(KHTML,likeGecko)Chrome /74.0.3729.169safari / 537.36&#39;
}
request =urllib.request.Request(url=url,headers=headers)
handler = urllib.request.HTTPHandler()
opener = urllib.request.build opener(handler)
response =opener.open(request)
print(response.read().decode(&#39;utf-8&#39;))
with open(&#39;daili.html&#39;,&#39;w&#39;,encoding=&#39;utf-8&#39;)as fp
	fp.write(content)
# 代理池、***快代理***

cookie库能干啥:通过handler登陆会自动的保存登录之后的cookie
cookie库配置
创建一个cookie]ar对象
使用cookiejar对象，创建一个handler对象
使用handler创建一个opener
通过opener登录
handler会自动的保存登录之后的cookie

代理服务器
代理的常用功能?
突破自身IP访问限制，访问国外站点。
访问一些单位或团体内部资源
扩展:某大学FTP(前提是该代理地址在该资源的允许访问范围之内)，使用教育网内地址段免费代理服务器，就可以用于对教育网开放的各类FTP下载上传，以及各类资料查询共享等服务。
提高访问速度
扩展:通常代理服务器都设置一个较大的硬盘缓冲区，当有外界的信息通过时，同时也将其保存到缓冲区中，当其他用户再访问相同的信息时， 则直接由缓冲区中取出信息，传给用户，以提高访问速度。
隐藏真实IP
扩展:上网者也可以通过这种方法隐藏自己的IP，免受攻击。
代码配置代理
创建Reugest对象
创建ProxyHandler对象
用handler对象创建opener对象
使用opener.open函数发送请求
eg:
import urllib.request
url=&quot;http://www.baidu.com/s?wd=ip&quot;
headers ={
	&#39;User - Agent&#39;:&#39;Mozilla/5.0(windows NT 10.0;Win64;x64)AppleWebkit / 537.36(KHTML,likeGecko)chrome /74.0.3729.169safari /537.36&#39;
	}
request = urllib.request.Request(url=url,headers=headers)
proxies ={&#39;http&#39;:&#39;117.141.155.244:53281&#39;}
handler =urllib.request.ProxyHandler(proxies=proxies)
opener =urllib.request.build_opener(handler)
response =opener.open(request)
content = response.read().decode(&#39;utf-8&#39;)
with open(&#39;daili.html&#39;,&quot;w&#39;,encoding=&#39;utf-8&quot;)as fp:
	fp.write(content)

proxies_pool =[
{&#39;http&#39;:&#39;118.24.219.151:16817&#39;}
{&#39;http&#39;:&#39;118.24.219.151:16817&#39;}
]
import random
proxies =random.choice(proxies_pool)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解析" tabindex="-1"><a class="header-anchor" href="#解析"><span>解析</span></a></h2><h3 id="xpath" tabindex="-1"><a class="header-anchor" href="#xpath"><span>Xpath</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>xpath使用:
	注意:提前安装xpath插件
    (1)打开chrome浏览器
    (2)点击右上角小圆点
    (3)更多工具
    (4)扩展程序
    (5)拖拽xpath插件到扩展程序中
    (6)如果crx文件失效，需要将后缀修改zip
    (7)再次拖拽
    (8)关闭浏览器重新打开
    (9)ctrl+ shift + x
    (10)出现小黑框
	1.安装lxml库
		pip install lxml -i https://pypi.douban.com/simple
    2.导入lxml.etree
		from lxml import etree
    3.etree.parse() 解析本地文件
		html tree = etree.parse(&#39;xx.html&#39;)
    4.etree .HTML() 服务器响应文件
		html tree =etree.HTML(response.read().decode(&#39;utf-8&quot;)
    4.html tree.xpath(xpath路径)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>xpath基本语法:
1.路径查询
	//:查找所有子孙节点，不考虑层级关系
	/:找直接子节点
2.谓词查询
	//div[@id]
	//div[@id=&quot;maincontent”]
3.属性查询
	//@class
4.模糊查询
	//div[contains(@id, &quot;he”)]
	//div[starts-with(@id, &quot;he&quot;)]
5.内容查询
	//div/h1/text()
6.逻辑运算
	//div[@id=&quot;head&quot; and @class=&quot;s_down&quot;]
	//title | //price
	
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
	&lt;meta charset=&quot;UTF-8&quot;&gt;
	&lt;title&gt;Title&lt;/title&gt;
	&lt;/head&gt;
&lt;body&gt;
    &lt;ul&gt;
        &lt;li&gt;北京&lt;/li&gt;
        &lt;li&gt;上海&lt;/li&gt;
        &lt;li&gt;深圳&lt;/l1&gt;
    	&lt;li&gt;武汉&lt;/li&gt;
    &lt;/u1&gt;
    &lt;ul&gt;
        &lt;li&gt;大连&lt;/li&gt;
        &lt;li&gt;锦州&lt;/li&gt;
        &lt;li&gt;沈阳&lt;/1i&gt;
    &lt;/ul&gt;
&lt;/body&gt;
&lt;/html&gt;

from lxml import etree
# xpath解析
# (1)本地文件etree.parse
#(2)服务器响应的数据 response.read().decode(&#39;utf-8&#39;)*****etree.HTML()
# xpath解析本地文件
tree = etree.parse(&#39;070_尚硅谷_爬虫_解析_xpath的基本使用.html&#39;)
#tree.xpath(&#39;xpath路径&#39;)
# 查找ul下面的li
li_list = tree.xpath(&#39;//body/ul/li&#39;)

# 查找所有有id的属性的li标签
# text()获取标签中的内容并
# li_list=tree.xpath(&#39;//ul/li[@id]/text()&#39;)

#找到id为l1的li标签注意引号的问题
# li_list = tree.xpath(&#39;//ul/li[@id=&quot;11&quot;]/text()&#39;)
#查找到id为l1的li标签的class的属性值
li = tree.xpath(&quot;//ul/li[@id=&quot;11&quot;]/@class&#39;)

# 查询id中包含l的li标签
li list = tree.xpath(&#39;//ul/li[contains(@id,&quot;l&quot;)]/text()&#39;)

#查询id的值以l开头的li标签
li_list = tree.xpath(&#39;//ul/li[starts-with(@id,&quot;c&quot;)]/text()&#39;)

li_list = tree.xpath(&#39;//ul/li[@id=&quot;11&quot;]/text()| //u1/li[@id=&quot;12&quot;]/text()&#39;)

# 判断列表的长度
print(li_list)
print(len(li_list))

# 获取网页源码
content = response.read().decode(&#39;utf-8&#39;)
# 解析网页源码 来获取我们想要的数据
from lxml import etree
# 解析服务器响应的文件
tree = etree.HTML(content)
# 荻取想要的数据
result = tree.xpath(&#39;//input[@id=&quot;su&quot;]/@value&#39;)
print(result)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jsonpath" tabindex="-1"><a class="header-anchor" href="#jsonpath"><span>JsonPath</span></a></h3><p>jsonpath的安装及使用方式</p><p>pip安装:<br> pip install jsonpath</p><p>jsonpath的使用:<br> obj= json.load(open(&#39;json文件&#39;,&#39;r&#39;,encoding=&#39;utf-8&#39;))</p><p>ret = jsonpath.jsonpath(obj,&#39;jsonpath语法&#39;)</p>`,41),_={href:"http://quote.stockstar.com/",target:"_blank",rel:"noopener noreferrer"},f=e("br",null,null,-1),x=e("br",null,null,-1),k=e("br",null,null,-1),y=l('<h3 id="beautifulsoup" tabindex="-1"><a class="header-anchor" href="#beautifulsoup"><span>Beautifulsoup</span></a></h3><p>Beautifulsoup简称:bs4<br> Beautifulsoup，和lxml一样，是一个htm1的解析器，主要功能也是解析和提取数据</p><p>优缺点?<br> 缺点:效率没有1xml的效率高<br> 优点:接口设计人性化，使用方便<br> 2.安装以及创建<br> 1.安装<br> pip install bs4<br> 2.导入<br> from bs4 import Beautifulsoup</p><p>3.创建对象<br> 服务器响应的文件生成对象<br> soup = Beautifulsoup(response.read().decode(),&#39;lxml&#39;)</p><p>本地文件生成对象<br> soup= Beautifulsoup(open(&#39;1.html&#39;),&#39;lxml&#39;)</p><p>注意:默认打开文件的编码格式gbk所以需要指定打开编码格式</p><p>soup = Beautifulsoup(open(&#39;075_尚硅谷_爬虫_解析_bs4的基本使用.html&#39;,encoding=&#39;utf-8&#39;),&#39;lxml&#39;)</p>',7),w=e("br",null,null,-1),q=e("br",null,null,-1),j=e("br",null,null,-1),T={href:"http://soup.a.name",target:"_blank",rel:"noopener noreferrer"},P=e("br",null,null,-1),E=e("br",null,null,-1),B=e("br",null,null,-1),S=e("br",null,null,-1),R=l("<p>find(&#39;a&#39;，title=&#39;名字&#39;)<br> find(&#39;a&#39;，class=&#39;名字&#39;)</p><p>(2).find_all(返回一个列表)<br> find_all(&#39;a&#39;) 查找到所有的a</p><p>find_all([&#39;a&#39;，&#39;span&#39;])返回所有的a和span</p><p>find_all(&#39;a&#39;，limit=2) 只找前两个a</p><p>(3).select(根据选择器得到节点对象)【推荐】<br> 1.element<br> eg:p</p><p>2..class<br> eg:.firstname</p><p>3.#id<br> eg:#firstname</p><p>4.属性选择器</p><p>[attribute]</p><p>eg:li=soup.select(&#39;li[class]&#39;)</p><p>[attribute=value]<br> eg:li = soup.select(&#39;li[class=&quot;hengheng1&quot;]&#39;)</p><p>5.层级选择器<br> element element<br> div p<br> element&gt;element<br> div&gt;p<br> element,element<br> div,p<br> eg:soup = soup.select(&#39;a,span&#39;)</p><p>print(soup.select(&quot;div&gt;ul&gt;li&#39;))</p>",13),A={start:"5"},I=e("p",null,[n("节点信息"),e("br"),n(" (1).获取节点内容:适用于标签中嵌套标签的结构")],-1),D=e("p",null,"​ obj= soup.select('#d1')[0]print(obj.string)",-1),L=e("ol",null,[e("li",null,"obj.string"),e("li",null,"obj.get_text()【推荐】")],-1),M=e("p",null,"如果标签对象中 只有内容 那么string和get_text()都可以使用",-1),H=e("p",null,"如果标签对象中 除了内容还有标签 那么string就获取不到数据 而get_text()是可以获取数据",-1),C=e("p",null,"#我们一般情况下推荐使用get_text",-1),N=e("br",null,null,-1),U={href:"http://tag.name",target:"_blank",rel:"noopener noreferrer"},W=e("br",null,null,-1),O={href:"http://tag.name",target:"_blank",rel:"noopener noreferrer"},z=e("p",null,"tag.attrs将属性值作为一个字典返回",-1),J=e("p",null,[n("(3)获取节点属性"),e("br"),n(" obj.attrs.get('title')【常用】")],-1),F=e("p",null,"obj.get('title')",-1),G=e("br",null,null,-1),K=e("br",null,null,-1),V={href:"https://hr",target:"_blank",rel:"noopener noreferrer"},X={href:"http://tencent.com/index.php",target:"_blank",rel:"noopener noreferrer"},Y=l('<h2 id="selenium" tabindex="-1"><a class="header-anchor" href="#selenium"><span>Selenium</span></a></h2><h3 id="_1-什么是selenium" tabindex="-1"><a class="header-anchor" href="#_1-什么是selenium"><span>1.什么是selenium?</span></a></h3><p>(1)selenium是一个用于web应用程序测试的工具。<br> (2)selenium 测试直接运行在浏览器中，就像真正的用户在操作一样。<br> (3)支持通过各种driver(firfoxpriver,IternetExplorerDriver,OperaDriver，chromeDriver)驱动真实浏览器完成测试。<br> (4)selenium也是支持无界面浏览器操作的。</p><h3 id="_2-为什么使用selenium" tabindex="-1"><a class="header-anchor" href="#_2-为什么使用selenium"><span>2.为什么使用selenium?</span></a></h3><p>模拟浏览器功能，自动执行网页中的js代码，实现动态加载</p><h3 id="_3-如何安装selenium" tabindex="-1"><a class="header-anchor" href="#_3-如何安装selenium"><span>3.如何安装selenium?</span></a></h3>',6),Q=e("br",null,null,-1),Z={href:"http://chromedriver.storage.googleapis.com/index.html",target:"_blank",rel:"noopener noreferrer"},$=e("br",null,null,-1),ee={href:"http://blog.csdn.net/huilan",target:"_blank",rel:"noopener noreferrer"},ne=l(`<p>(3)查看谷歌浏览器版本<br> 谷歌浏览器右上角--&gt;帮助--&gt;关于<br> (4)pip install selenium</p><h3 id="_4-selenium的使用步骤" tabindex="-1"><a class="header-anchor" href="#_4-selenium的使用步骤"><span>4.selenium的使用步骤?</span></a></h3><p>(1)导入:from selenium import webdriver</p><p>(2)创建谷歌浏览器操作对象:<br> path =谷歌浏览器驱动文件路径.<strong>为了方便直接放在根目录</strong></p><p>browser =webdriver.Chrome(path)</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#(1)导入selenium
from selenium import webdriver
#(2)创建浏览器操作对象
path =&#39;chromedriver.exe
browser = webdriver.Chrome(path)
#(3)访问网站
url =&#39;https://ww.baidu.com&#39;
browser.get(url)
# page_source获取网页源码
content =browser.page_sourceprint(content)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="selenium的元素定位" tabindex="-1"><a class="header-anchor" href="#selenium的元素定位"><span>selenium的元素定位?</span></a></h3><p>元素定位:自动化要做的就是模拟鼠标和键盘来操作来操作这些元素，点击、输入等等。操作这些元素前首先要找到它们，webpriver提供很多定位元素的方法<br> 方法:1.find_element_by_id</p><p>eg:button=browser.find_element_by_id(&#39;su&#39;)</p><p>2.find_elements_by_name</p><p>eg:name_=_browser.find_element_by_name(&#39;wd&#39;)</p><p>3.find_elements_by_xpath</p><p>eg:xpath1=browser.find_elements_by_xpath(&#39;//input[@id=&quot;su&quot;]&#39;)</p><p>4.find_elements_by_tag_name</p><p>eg:names=browser.find_elements_by_tag_name(&#39;input&#39;)</p><p>5.find_elements_by_css_selector</p><p>eg:my_input_=_browser.find_elements_by_css_selector(&#39;#kw&#39;)[0]</p><p>6.find_elements_by_link_text</p><p>eg:browser.find_element_by_link_text(&quot;新闻&quot;)</p><p>访问元素信息</p><p>获取元素属性<br> .get_attribute(&#39;class&#39;)</p><p>获取元素文本<br> .text<br> 获取标签名<br> .tag_name<br> 交互<br> 点击:click()<br> 输入:send_keys()<br> 后退操作:browser.back()<br> 前进操作:browser.forword()</p><p>模拟Js滚动:<br> js=&#39;document.body.scrollTop=100000&#39;</p><p>js=&#39;document .documentelement.scrollTop=100000&#39;</p><p>browser.execute_script(js)执行js代码</p><p>获取网页代码:page_source</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>from selenium import webdriver
# 刨建渕览器对象
path =&#39;chromedriver.exe&#39;
browser = webdriver.Chrome(path)
# urI
url=&#39;https://ww.baidu.combrowser.get(url)
import time
time.sleep(2)
# 获取文本框的对象
input = browser.find_element_by_id(&#39;kw&#39;)
# 在文本框中输入周杰伦
input.send_keys(&#39;周杰伦&#39;)
time.sleep(2)
# 获取百度一下的按钮
button = browser.find_element by_id(&#39;su&#39;)
# 点击按钮
button.click()
time.sleep(2)
# 滑到底部
js_bottom =&quot;document.documentElement.scrollTop=100000’
browser.execute_script(js_bottom)
time.sleep(2)
# 获取下一页的按钮
next =browser.find_element_by_xpath(&quot;//a[@class=&quot;n&quot;]&#39;)
# 并点击下一页
next.click()
time.sleep(2)
#回到上一页browser .back()
time.sleep(2)
# 回去
browser.forward()
time.sleep(3)
#退出
browser.quit( )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="phantomjs" tabindex="-1"><a class="header-anchor" href="#phantomjs"><span>Phantomjs</span></a></h2><h3 id="_1-什么是phantomjs" tabindex="-1"><a class="header-anchor" href="#_1-什么是phantomjs"><span>1.什么是Phantomjs?</span></a></h3><p>(1)是一个无界面的浏览器<br> (2)支持页面元素查找，js的执行等<br> (3)由于不进行css和gui渲染，运行效率要比真实的浏览器要快很多</p><h3 id="_2-如何使用phantomjs" tabindex="-1"><a class="header-anchor" href="#_2-如何使用phantomjs"><span>2.如何使用Phantomjs?</span></a></h3><p>(1)获取PhantomJs.exe文件路径path<br> (2)browser =webdriver.PhantomIs(path)<br> (3)browser.get(url)<br> 扩展:保存屏幕快照:browser.save_screenshot(&#39;baidu.png&#39;)</p><p>phantomjs.exe放在项目根目录</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>from selenium import webdriver
path=&#39;phantomjs.exe&#39;
browser =webdriver.PhantomJS(path)
url = &#39;https://www.baidu.com&#39;
browser.get(url)

browser.save_screenshot(&#39;baidu.png&#39;)
import time
time.sleep(2)
input =browser.find_element_by_id(&#39;kw&#39;)
input.send_keys(&#39;昆凌&#39;)
time.sleep(3)
browser.save screenshot(&quot;kunling.png&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-chrome-handless" tabindex="-1"><a class="header-anchor" href="#_3-chrome-handless"><span>3.Chrome handless</span></a></h3><p>1.系统要求:<br> Chrome<br> Unix\\Linux 系统需要 chrome &gt;= 59</p><p>Windows 系统需要 chrome&gt;=60<br> Python3.6<br> Selenium==3.4.*<br> ChromeDriver==2.31</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>配置:
from selenium import webdriver
from selenium.webdriver.chrome.options import options
chrome options = options()
chrome options.add_argument(&#39;--headless )
chrome options.add_argument(&#39;--disable-gpu&#39;)
path = r&#39;c:\\Program Files(x86)\\Google\\chrome\\Application\\chrome.exe&#39;
chrome_options.binary_location = path
browser = webdriver.chrome(chrome_options=chrome_options)
browser.get(&#39;http://www.baidu.com/&#39;)
browser.save_screenshot(&#39;baidu.png&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="scrapy" tabindex="-1"><a class="header-anchor" href="#scrapy"><span>scrapy</span></a></h2><p>Scrapy是一个为了爬取网站数据，提取结构性数据而编写的应用框架。可以应用在包括数据挖掘，信息处理或存储历史数据等一系列的程序中。</p>`,40),se=e("br",null,null,-1),ie=e("br",null,null,-1),le=e("br",null,null,-1),ae={href:"http://landinghub.visualstudio.com/visual-cpp-build-tools",target:"_blank",rel:"noopener noreferrer"},te={href:"http://www.lfd.uci.edu/~gohlke/pythonlibs/#twisted%E4%B8%8B%E8%BD%BDtwisted%E5%AF%B9%E5%BA%94%E7%89%88%E6%9C%AC%E7%9A%84wh1%E6%96%87%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"},re=l(`<p>运行命令:pip install C:\\Users...\\Twisted-17.5.0-cp36-cp36m-win-amd64.whl</p><p>pip install scrapy</p><p>如果再报错<br> python -m pip install --upgrade pip</p><p>如果再报错 win32</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1.scrapy项目的创建以及运行
1.创建scrapy项目:
	终端输入 scrapy startproject 项目名称
	注意:项目的名字不允许使用数字开头也不能包会中文
2.项目组成:
spiders
	__init__.py
	自定义的爬虫文件·py ---》由我们自己创建，是实现爬虫核心功能的文件
__init__.py
items .py ---》定义数据结构的地方，是一个继承自scrapy.Item的类
middlewares.py ---》中间件代理
pipelines.py ---》管道文件，里面只有一个类，用于处理下载数据的后续处理
默认是300优先级，值越小优先级越高(1-1000)
settings.py ---》配置文件 比如:是否遵守robots协议，user-Agent定义等
	
3.创建爬虫文件:
	(1)跳转到spiders文件夹 cd 目录名字/目录名字/spiders
	(2)scrapy genspider 爬虫名字 网页的域名
	eg:scrapy genspider baidu http://www.baidu.com
	一般情况下不需要添加http协议 因为start_urls的值是根据allowed domains
	修改的 所以添加了http的话 那么start_urls就需要我们手动去修改了
爬虫文件的基本组成:
	继承scrapy.spider类
		name = &#39;baidu&#39; ==&gt; 运行爬虫文件时使用的名字
		allowed_domains ==&gt; 爬虫允许的域名，在爬取的时候，如果不是此域名之下的ur1，会被过滤掉
		start_urls ==&gt; 声明了爬虫的起始地址，可以写多个ur1，一般是一个
		parse(self，response)---》解析数据的回调函数
		response.text---》响应的是字符串
		response.body---》响应的是二进制文件
		response.xpath()-》xpath方法的返回值类型是selector列表
		extract() -》提取的是selector对象的是data
		extract_first() -》提取的是selector列表中的第一个数据

import scrapy
class Baiduspider(scrapy.Spider):
	# 爬虫的名字 用于运行爬虫的时候 使用的值
	name =&#39;baidu
	# 允许访问的域名
	allowed domains =[&#39;http://ww.baidu.com&#39;]
	# 起始的url地址 指的是第一次要访问的域名
	# start_urls 是在allowed_domains的前面添加一个http://
	# 在 allowed_domains的后面添加一个/
	start_urls =[&#39;http://http://www.baidu.com/&#39;]
	
	# 是执行了start_urls之后 执行的方法
	# 方法中的response 就是返回的那个对象
	# 相当于 response =urllib.request.urlopen()
	# response =requests.get()
	def parse(self, response):
		pass
3.运行爬虫代码
scrapy crawl 爬虫的名字
scrapy crawl baidu
D:\\Users\\lijingAction\\Desktop\\尚硅谷爬虫视频录制\\python爬虫\\代码\\Python爬虫scrapy baidu 091scrapy baidu 09l\\spiders&gt;scrapy genspider baidu http://www.baidu.com

settings.py
注释掉君子协议
# ROBOTSTXT_0BEY=True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scrapy架构组成" tabindex="-1"><a class="header-anchor" href="#scrapy架构组成"><span>scrapy架构组成</span></a></h3><p>(1)引擎 ---》自动运行，无需关注，会自动组织所有的请求对象，分发给下载器<br> (2)下载器 ---》从引擎处获取到请求对象后，请求数据<br> (3)spiders ---》spider类定义了如何爬取某个(或某些)网站。包括了爬取的动作(例如:是否跟进链接)以及如何从网页的内容中提取结构化数据(爬取item)。 换句话说，spider就是您定义爬取的动作及分析某个网页(或者是有些网页)的地方。</p><p>(4)调度器 ---》有自己的调度规则，无需关注</p><p>(5)管道(Item pipeline)---》最终处理数据的管道，会预留接口供我们处理数据当Item在spider中被收集之后，它将会被传递到Item pipeline，一些组件会按照一定的顺序执行对Item的处理。每个item pipeline组件(有时称之为“Item pipeline”)是实现了简单方法的Python类。他们接收到Item并通过它执行一些行为，同时也决定此Item是否继续通过pipeline，或是被丢弃而不再进行处理。</p><p>以下是item pipeline的一些典型应用:<br> 1.清理HTML数据<br> 2.验证爬取的数据(检查item包含某些字段)<br> 3.查重(井丢弃)<br> 4.将爬取结果保存到数据库中</p><h3 id="scrapy工作原理" tabindex="-1"><a class="header-anchor" href="#scrapy工作原理"><span>scrapy工作原理</span></a></h3><p>1、引擎向spiders要ur<br> 2、引擎将要爬取的url给调度器<br> 3、调度器会将url生成请求对象放入到指定的队列中<br> 4、从队列中出队一个请求<br> 5、引擎将请求交给下载霞进行处理</p><p>6、下载路发送请求获取互联网教据<br> 7、下载器将数据返回给引肇<br> 8、引革将数据再次给到spiders</p><p>9、spiders通过xpath解析该数据，得到数据或者url</p><p>10、spiders将数据或者url给到引肇</p><p>11、引|擎判断该数据还是ur，是数据，交给管道(itempipeline)处理，是ur交给调度器处理</p><figure><img src="https://i4.wp.com/wx4.sinaimg.cn/large/0070JETugy1i40z8k8vhuj30om0fwgnv.jpg" alt="1.png" tabindex="0"><figcaption>1.png</figcaption></figure><h3 id="scrapy-shell" tabindex="-1"><a class="header-anchor" href="#scrapy-shell"><span>scrapy shell</span></a></h3><p>Scrapy终端，是一个交互终端，供您在未启动spider的情况下尝试及调试您的爬取代码。 其本意是用来测试提取数据的代码，不过您可以将其作为正常的Python终端，在上面测试任何的Python代码。</p><p>该终端是用来测试XPath或css表达式，查看他们的工作方式及从爬取的网页中提取的数据。在编写您的spider时，该终端提供了交互性测试您的表达式代码的功能，免去了每次修改后运行spider的麻烦。-旦熟悉了scrapy终端后，您会发现其在开发和调试spider时发挥的巨大作用。</p><p>安装ipython<br> 安装:pip install ipython<br> 简介:如果您安装了 IPythonscrapy终端将使用 IPython(替代标准Pthon终端)。IPython 终端与其他相比更为强大，提供智能的自动补全，高亮输出，及其他特性。</p>`,21),de=e("br",null,null,-1),ue={href:"http://www.baidu.com",target:"_blank",rel:"noopener noreferrer"},ce=e("br",null,null,-1),ve={href:"http://www.baidu.com",target:"_blank",rel:"noopener noreferrer"},oe=e("br",null,null,-1),pe={href:"http://www.baidu.com",target:"_blank",rel:"noopener noreferrer"},me=e("br",null,null,-1),be={href:"http://www.baidu.com",target:"_blank",rel:"noopener noreferrer"},he=e("br",null,null,-1),ge=e("br",null,null,-1),_e=e("br",null,null,-1),fe=e("br",null,null,-1),xe=e("br",null,null,-1),ke=e("br",null,null,-1),ye=e("br",null,null,-1),we=e("br",null,null,-1),qe=l(`<p>extract_first()</p><p>提取seletor列表中的第一个值<br> 如果提取不到值 会返回一个空值<br> 返回第一个解析到的值，如果列表为空，此种方法也不会报错，会返回一个空值</p><p>xpath()</p><p>css() -个selector对象可以再次的去使用xpath或者css方法</p><p>使用xpath路径查询特定元素，返回一个selector列表对象</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>response.url
http://www.baidu.com

response.status
200
response.xpath( //input[@id=&quot;su&quot;]/@value’)
[&lt;Selector xpath=’//inputl@id=&quot;su&quot;]/@value&#39;data=’百度一下’&gt;]

a = response. xpath(&#39;//input[@id=&quot;su&quot;]/@value’)
a
[&lt;Selector xpath=’//input[@id=&quot;su&quot;]/@value’ data=&#39;百度一下’&gt;]

a. extract_first()
’百度一下’

response.css( #su::attr(&quot;value”)’)
[&lt;Selector xpath=&quot;descendant-or-self::*[@id =’su’]/@value&quot; data=’百度一下’&gt;]

a=response.css( #su::attr(&quot;value”)’)

3.yield
1.带有 yield 的函数不再是一个普通函数，而是一个生成器generator，可用于迭代
2. yield 是一个类似 return 的关键字，迭代一次遇到yield时就返回yield后面(右边)的值。重点是:下一次迭代时，从上一次迭代遇到的yield后面的代码(下一行)开始执行
3.简要理解:yield就是 return 返回一个值，并且记住这个返回的位置，下次迭代就从这个位置后(下一行)开始
案例:
1.当当网
2.电影天堂
(1)yield(2).管道封装(3).多条管道下载 (4)多页数据下载
(1)一个item包含多级页面的数据

4.MysqI
(1)下载(https://dev.mysal.com/downloads/windows/installer/5.7.html)
(2)安装(https://ingyan.baidu.com/album/d7130635f1c77d13fdf475df.html)

5.pymysql的使用步骤
1.pip install pymysql
2.pymysql.connect(host,port,user,password,db,charset)
3.conn.cursor()
4.cursor.execute()

6.Crawlspider
继承spider.scrapy
独门秘笈
crawlspider可以定义规则，再解析html内容的时候，可以根据链接规则提取出指定的链接，然后再向这些链接发送请求
所以，如果有需要跟进链接的需求，意思就是爬取了网页之后，需要提取链接再次爬取，使用crawlspider是非常合适的
提取链接
链接提取器，在这里就可以写规则提取指定链接
scrapy.linkextractors.LinkExtractor(
	allow=()， #正则表达式，提取符合正则的链接 常用
	deny =(), #(不用)正则表达式 不提取符合正则的链接
	allow domains =() #(不用)允许的域名
	deny domains =(),#(不用)不允许的域名
	restrict_xpaths=()，#xpath，提取符合xpath规则的链接 常用
	restrict css=() #提取符合选择器规则的链接) 常用
)

4.模拟使用
正则用法:1inks1 =LinkExtractor(allow=r&#39;list 23 d+\\.html&#39;)
xpath用法:links2 = LinkExtractor(restrict xpaths=r&#39;//div[@class=&quot;x&quot;]&#39;)
css用法:links3 =LinkExtractor(restrict css=&#39;.x&#39;)

5.提取连接
link.extract links(response)

In [3]: link = LinkExtractor(allow=r’/book/1188 d+\\.html’)
link
scrapy.linkextractors.lxmlhtml.LxmlLinkExtractor at 0xlf4b7bf04a8
link.extract links (response)

6.注意事项
【注1】ca1lback只能写函数名字符串，callback=&#39;parse item
【注2】在基本的spider中，如果重新发送请求，那里的callback写的是callback=self.parse item【注.稍后看】follow=true 是否跟进 就是按照提取连接规则进行提取

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://i0.wp.com/wx4.sinaimg.cn/large/0070JETugy1i410fn2q0fj30om0ddta2.jpg" alt="2.png" tabindex="0"><figcaption>2.png</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>7.Crawlspider案例
需求:读书网数据入库
1.创建项目:scrapy startproject dushuproject
2.跳转到spiders路径 cddushuproject\\dushuproject\\spiders
3.创建爬虫类:scrapy genspider -t crawl read www.dushu.com
4.items
5.spiders
6.settings
7.pipelines
	数据保存到本地
	数据保存到mysql数据库
read.py文件
import scrapy
from scrapy.linkextractors 
import LinkExtractorfrom scrapy.spiders import CrawlSpider, Rule

from scrapy readbook 101.items import ScrapyReadbook101Item

class Readspider(Crawlspider):
	name =&quot;read&#39;
	allowed_domains =[&#39;www. dushu. com&#39;]
	start_urls =[&#39;https://ww.dushu.com/book/1188_1.html&#39;]
	rules =(
		Rule(LinkExtractor(allow=r&#39;/book/1188-\\d+.html&#39;),
			callback=&#39;parse_item&#39;,
			follow=True
        ),
	def parse item(self, response):
		item ={}
		#item[&#39;domain_id&#39;]= response.xpath(&#39;//input[@id=&quot;sid&quot;]/@value&#39;).get()
		#item[&#39;name&#39;]= response.xpath(&#39;//div[@id=&quot;name&quot;]&#39;).get()
		#item[&#39;description&#39;]= response,xpath(&#39;//div[@id=&quot;description&quot;]&#39;).get()
		
		img_list =response.xpath(&#39;//div[@class=&quot;bookslist&quot;]//img&#39;)
        for img in img list:
        	name = img.xpath(&#39;./@data-original&#39;).extract_first()
        	src = img.xpath(&#39;./@alt&#39;).extract_first()
		book =ScrapyReadbookt01Item(name=name,src=src)
		return item
		
items.py文件
# Define here the models for your scraped items并
# See documentation in:# https://docs,scrapy,org/en/latest/topics/items.html

import scrapy

class ScrapyReadbook101Item(scrapy.Item):
# define the fields for your item here like.#name = scrapy.Field()
	name = scrapy.Field()
	src =scrapy.Field()
	

settings.py文件
ITEM PIPELINES {
	&#39;scrapy_readbook_101.pipelines.ScrapyReadbook101Pipeline&#39;: 300
	# MysqlPipeline
	&#39;scrapy_readbook_101.pipelines.MysqlPipeline&#39;:301
}

DB HOST =&#39;192.168.231.130# 端口号是一个整数
DB PORT = 3306
DB USER = &#39;root&#39;
DB PASSWROD=1234
DB_NAME =&#39;spider01&#39;
DB CHARSET =&#39;utf-8&#39;

pipelines.py文件
class ScrapyReadbook101Pipeline:
    def open_spider(self,spider):
    	self.fp =open(&#39;book.json&#39;,&#39;w&#39;,encoding=&#39;utf-8&#39;)
    def process item(self, item, spider):
    	self.fp.write(str(item))
    	return item
    def close_spider(self,spider):
    	self.fp.close()
    	
class MysqlPipeline:
    def open_spider(self,spider):
    	settings =get_project_settings()
    	self.host = settings[&#39;DB HOST&#39;]
    	self.port =settings[&#39;DB_PORT&#39;]
    	self.user =settings[&#39;DB USER&#39;]
    	self.password =settings[&#39;DB_PASSWROD&#39;]
    	self.name =settings[&#39;DB NAME&#39;]
    	self.charset =settings[&#39;DB_CHARSET&#39;]
    	self.connect()
    def connect(self):
        self.conn = pymysql.connect(
            host=self.host,
            port=self.port,
            user=self.user,I
            password=self.password,db=self.name,
            charset=self.charset
        }
    	Self.cursor = self.conn.cursor()
    def process item(self, item, spider):
        sql = &#39;insert into book(name,src) values(&quot;{}&quot;,“{}&quot;)&#39;.format(item[&#39;name&#39;],item{
        # 执行sql语句
        self.cursor.execute(sql)
        #提对self.conn.commit()
		return item
    def close_spider(self,spider):
    	self.cursor.close()
    	self.conn.close()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>9.日志信息和日志等级<br> (1)日志级别:<br> CRITICAL:严重错误<br> ERROR :一般错误<br> 警告WARNING:<br> INFO:一般信息<br> DEBUG:调试信息<br> 默认的日志等级是DEBUG</p><p>​ 只要出现了DEBUG或者DEBUG以上等级的日志</p>`,10),je=e("br",null,null,-1),Te=e("br",null,null,-1),Pe=e("br",null,null,-1),Ee={href:"http://settings.py",target:"_blank",rel:"noopener noreferrer"},Be=e("br",null,null,-1),Se=l("<p>LOG LEVEL :设置日志显示的等级，就是显示哪些，不显示哪些</p><p>10.scrapy的post请求<br> (1)重写start_requests方法:<br> def start_requests(self)<br> (2)start requests的返回值:<br> scrapy.formRequest(url=url,headers=headers, callback=self.parse item, formdata=data)</p><p>​ ur1:要发送的post地址</p><p>​ headers:可以定制头信息</p><p>​ callback:回调函数<br> ​ formdata: post所携带的数据，这是一个字典</p><p>11.代理<br> (1)到settings.py中，打开一个选项</p><p>DOWNLOADER MIDDLEWARES ={<br> postproject.middlewares.Proxy&#39;: 543,</p><p>}</p><p>(2)到middlewares.py中写代码</p><p>def process request(self, request, spider):</p>",10),Re={href:"https://113.68.202.10:9999",target:"_blank",rel:"noopener noreferrer"},Ae=l(`<p>​ return None</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">TestpostSpider</span><span class="token punctuation">(</span>scrapy<span class="token punctuation">.</span>spider<span class="token punctuation">)</span><span class="token punctuation">:</span>
	name <span class="token operator">=</span> <span class="token string">&#39;testpost&#39;</span>
	allowed domains <span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;https://fanyi.baidu.com/sug&#39;</span><span class="token punctuation">]</span>
	<span class="token comment"># post请求 如果没有参数 那么这个请求将没有任何意义</span>
	<span class="token comment">#所以start urls 也没有用了</span>
	<span class="token comment"># parse方法也没有用了</span>
	<span class="token comment">#start urls=[&#39;https://fanyi.baidu.com/sug/&#39;]</span>
	<span class="token comment">#def parse(self, response):</span>
		<span class="token comment">#pass</span>
<span class="token keyword">def</span> start requests<span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
	url<span class="token operator">=</span><span class="token string">&#39;https://fanyi.baidu.com/sug&#39;</span>
	data <span class="token operator">=</span><span class="token punctuation">{</span>
		<span class="token string">&#39;kw&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;final&#39;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">yield</span> scrapy<span class="token punctuation">.</span>FormRequest<span class="token punctuation">(</span>url<span class="token operator">=</span>url<span class="token punctuation">,</span>formdata<span class="token operator">=</span>data<span class="token punctuation">,</span>callback<span class="token operator">=</span>self<span class="token punctuation">.</span>parse_second<span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">parse_second</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>response<span class="token punctuation">)</span>
	content <span class="token operator">=</span> response<span class="token punctuation">.</span>text
	obj<span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>content<span class="token punctuation">,</span>encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
	
middlewares<span class="token punctuation">.</span>py文件
<span class="token keyword">class</span> <span class="token class-name">RandomUserAgentMiddleware</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token keyword">def</span> process request<span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> spider<span class="token punctuation">)</span><span class="token punctuation">:</span>
	request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>setdefault<span class="token punctuation">(</span><span class="token string">&quot;User Agent&quot;</span><span class="token punctuation">,</span> UserAgent <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span> random<span class="token punctuation">)</span>

settings<span class="token punctuation">.</span>py文件
DOWNLOADER MIDDLEWARES<span class="token operator">=</span><span class="token punctuation">{</span>
	scrapy test<span class="token punctuation">.</span>middlewares<span class="token punctuation">.</span>ScrapyTestDownloaderMiddleware’<span class="token punctuation">:</span> <span class="token number">543</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment"># 代理服务</span>
proxyserver <span class="token operator">=</span> <span class="token string">&#39;xxxxx&#39;</span>


<span class="token comment">#代理隧道验证信息</span>
proxyUser <span class="token operator">=</span><span class="token string">&quot;H25X8780PF55HSBD&quot;</span>
proxyPass<span class="token operator">=</span><span class="token string">&quot;AED98499BE02B4B3&quot;</span>

<span class="token comment">#for Python2</span>
proxyAuth <span class="token operator">=</span><span class="token string">&quot;Basic &quot;</span><span class="token operator">+</span> base64<span class="token punctuation">.</span>b64encode<span class="token punctuation">(</span>proxyUser <span class="token operator">+</span><span class="token operator">+</span> proxyPass<span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">ProxyMiddleware</span> <span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">def</span> process request<span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> spider<span class="token punctuation">)</span><span class="token punctuation">:</span>
		request<span class="token punctuation">.</span>meta<span class="token punctuation">[</span><span class="token string">&quot;proxy&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span> proxyServer
		request<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&quot;Proxy Authorization&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span> proxyAuth

settings<span class="token punctuation">.</span>py
DOWNLOADER MIDDLEWARES<span class="token operator">=</span><span class="token punctuation">(</span>
	scrapy test<span class="token punctuation">.</span>middlewares<span class="token punctuation">.</span>RandomUserAgentMiddleware’<span class="token punctuation">:</span><span class="token number">543</span><span class="token punctuation">,</span>
	scrapy test<span class="token punctuation">.</span>middlewares<span class="token punctuation">.</span>ProxyMiddleware’<span class="token punctuation">:</span> <span class="token number">542</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function Ie(De,Le){const s=t("ExternalLinkIcon");return r(),d("div",null,[c,e("p",null,[n("官方文档"),v,e("a",o,[n("http://cn.python-requests.org/zh_cN/latest/"),i(s)])]),e("p",null,[n("快速上手"),p,e("a",m,[n("http://cn.python-requests.org/zh"),i(s)]),n(" c/latest/user/quickstart.html")]),b,e("p",null,[n("1:通过一个程序，根据ur1("),e("a",h,[n("http://www.taobao.co币"),i(s)]),n(")进行爬取网页，获取有用信息解释")]),g,e("p",null,[n("作业:1.股票信息提取("),e("a",_,[n("http://quote.stockstar.com/"),i(s)]),n(")"),f,n(" 2.boos直聘"),x,n(" 3.中华英才"),k,n(" 4.汽车之家")]),y,e("p",null,[n("3.节点定位"),w,n(" 1.根据标签名查找节点"),q,n(" soup.a 【注】只能找到第一个a"),j,e("a",T,[n("soup.a.name"),i(s)]),P,n(" soup.a.attrs"),E,n(" 2.函数"),B,n(" (1).find(返回一个对象)"),S,n(" find('a'):只找到第一个a标签")]),R,e("ol",A,[e("li",null,[I,D,L,M,H,C,e("p",null,[n("(2).节点的属性"),N,e("a",U,[n("tag.name"),i(s)]),n(" 获取标签名"),W,n(" eg:tag = find('li)")]),e("p",null,[n("​ print("),e("a",O,[n("tag.name"),i(s)]),n(")")]),z,J,F])]),e("p",null,[n("应用实例:1.股票信息提取("),G,n(" 2.中华英才网-旧日版"),K,n(" 3.腾讯公司招聘需求抓取("),e("a",V,[n("https://hr"),i(s)]),n(","),e("a",X,[n("tencent.com/index.php"),i(s)]),n(")")]),Y,e("p",null,[n("(1)操作谷歌浏览器驱动下载地址"),Q,e("a",Z,[n("http://chromedriver.storage.googleapis.com/index.html"),i(s)])]),e("p",null,[n("(2)谷歌驱动和谷歌浏览器版本之间的映射表"),$,e("a",ee,[n("http://blog.csdn.net/huilan"),i(s)]),n(" same/article/details/51896672")]),ne,e("p",null,[n("安装scrapy: pip install scrapy"),se,n(" 安装过程中出错: 如果安装有错误!!!! pip install scrapy"),ie,n(` building 'twisted.test.raiser'extensionerror: Microsoft Visual C++ 14.0 is required, Get it with "Microsoft Visual C++`),le,n(' Build Tools":'),e("a",ae,[n("http://landinghub.visualstudio.com/visual-cpp-build-tools"),i(s)])]),e("p",null,[n("解决方案:"),e("a",te,[n("http://www.lfd.uci.edu/~gohlke/pythonlibs/#twisted下载twisted对应版本的wh1文件"),i(s)]),n("(如我的Twisted-17.5.0-cp36-cp36m-win amd64.wh1)，cpp后面是python版本，amd64代表64位，")]),re,e("p",null,[n("3.应用:"),de,n(" (1)scrapy shell "),e("a",ue,[n("www.baidu.com"),i(s)]),ce,n(" (2)scrapy shell "),e("a",ve,[n("http://www.baidu.com"),i(s)]),oe,n(' (3)scrapy shell "'),e("a",pe,[n("http://www.baidu.com"),i(s)]),n("'"),me,n(' (4)scrapy shell "'),e("a",be,[n("www.baidu.com"),i(s)]),n('"'),he,n(" 语法:"),ge,n(" (1)response对象"),_e,n(" response.body"),fe,n(" response.text"),xe,n(" response.url"),ke,n(" response.status"),ye,n(" (2)response的解析:"),we,n(" response.xpath()(常用)")]),qe,e("p",null,[n("​ 那么这些日志将会打印"),je,n(" (2)settings.py文件设置:"),Te,n(" 默认的级别为DEBUG，会显示上面所有的信息"),Pe,n(" 在配置文件中 "),e("a",Ee,[n("settings.py"),i(s)]),Be,n(" LOG FILE :将屏幕显示的信息全部记录到文件中，屏幕不再显示，注意文件后缀一定是.log")]),Se,e("p",null,[n("​ request.meta['proxy']='"),e("a",Re,[n("https://113.68.202.10:9999"),i(s)]),n("'")]),Ae])}const Ce=a(u,[["render",Ie],["__file","crawler.html.vue"]]),Ne=JSON.parse('{"path":"/backend/crawler.html","title":"","lang":"zh-CN","frontmatter":{"description":"架构 python 3.7.6 +requests 2.23.0 + beautifulsoup4 4.8.2 + lxml 4.5.0 开发工具 pycharm2019 requests 介绍与安装 requests 是一个优雅而简单的 Python HTTP请求库requests 的作用是 发送请求获取响应数据 requests 安装：在终端(命令...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/crawler.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:description","content":"架构 python 3.7.6 +requests 2.23.0 + beautifulsoup4 4.8.2 + lxml 4.5.0 开发工具 pycharm2019 requests 介绍与安装 requests 是一个优雅而简单的 Python HTTP请求库requests 的作用是 发送请求获取响应数据 requests 安装：在终端(命令..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://i4.wp.com/wx4.sinaimg.cn/large/0070JETugy1i40z8k8vhuj30om0fwgnv.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"https://i4.wp.com/wx4.sinaimg.cn/large/0070JETugy1i40z8k8vhuj30om0fwgnv.jpg\\",\\"https://i0.wp.com/wx4.sinaimg.cn/large/0070JETugy1i410fn2q0fj30om0ddta2.jpg\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"架构","slug":"架构","link":"#架构","children":[]},{"level":2,"title":"requests 介绍与安装","slug":"requests-介绍与安装","link":"#requests-介绍与安装","children":[{"level":3,"title":"requests使用步骤","slug":"requests使用步骤","link":"#requests使用步骤","children":[]}]},{"level":2,"title":"BeautifulSoup 介绍与安装","slug":"beautifulsoup-介绍与安装","link":"#beautifulsoup-介绍与安装","children":[{"level":3,"title":"BeautifulSoup对象介绍与创建","slug":"beautifulsoup对象介绍与创建","link":"#beautifulsoup对象介绍与创建","children":[]}]},{"level":2,"title":"Json模块","slug":"json模块","link":"#json模块","children":[]},{"level":2,"title":"爬虫介绍","slug":"爬虫介绍","link":"#爬虫介绍","children":[{"level":3,"title":"爬虫核心?","slug":"爬虫核心","link":"#爬虫核心","children":[]},{"level":3,"title":"爬虫的用途?","slug":"爬虫的用途","link":"#爬虫的用途","children":[]},{"level":3,"title":"爬虫分类","slug":"爬虫分类","link":"#爬虫分类","children":[]}]},{"level":2,"title":"反爬手段","slug":"反爬手段","link":"#反爬手段","children":[]},{"level":2,"title":"urllib库使用","slug":"urllib库使用","link":"#urllib库使用","children":[]},{"level":2,"title":"解析","slug":"解析","link":"#解析","children":[{"level":3,"title":"Xpath","slug":"xpath","link":"#xpath","children":[]},{"level":3,"title":"JsonPath","slug":"jsonpath","link":"#jsonpath","children":[]},{"level":3,"title":"Beautifulsoup","slug":"beautifulsoup","link":"#beautifulsoup","children":[]}]},{"level":2,"title":"Selenium","slug":"selenium","link":"#selenium","children":[{"level":3,"title":"1.什么是selenium?","slug":"_1-什么是selenium","link":"#_1-什么是selenium","children":[]},{"level":3,"title":"2.为什么使用selenium?","slug":"_2-为什么使用selenium","link":"#_2-为什么使用selenium","children":[]},{"level":3,"title":"3.如何安装selenium?","slug":"_3-如何安装selenium","link":"#_3-如何安装selenium","children":[]},{"level":3,"title":"4.selenium的使用步骤?","slug":"_4-selenium的使用步骤","link":"#_4-selenium的使用步骤","children":[]},{"level":3,"title":"selenium的元素定位?","slug":"selenium的元素定位","link":"#selenium的元素定位","children":[]}]},{"level":2,"title":"Phantomjs","slug":"phantomjs","link":"#phantomjs","children":[{"level":3,"title":"1.什么是Phantomjs?","slug":"_1-什么是phantomjs","link":"#_1-什么是phantomjs","children":[]},{"level":3,"title":"2.如何使用Phantomjs?","slug":"_2-如何使用phantomjs","link":"#_2-如何使用phantomjs","children":[]},{"level":3,"title":"3.Chrome handless","slug":"_3-chrome-handless","link":"#_3-chrome-handless","children":[]}]},{"level":2,"title":"scrapy","slug":"scrapy","link":"#scrapy","children":[{"level":3,"title":"scrapy架构组成","slug":"scrapy架构组成","link":"#scrapy架构组成","children":[]},{"level":3,"title":"scrapy工作原理","slug":"scrapy工作原理","link":"#scrapy工作原理","children":[]},{"level":3,"title":"scrapy shell","slug":"scrapy-shell","link":"#scrapy-shell","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":29.67,"words":8902},"filePathRelative":"backend/crawler.md","excerpt":"<h2>架构</h2>\\n<p>python 3.7.6 +requests 2.23.0 + beautifulsoup4 4.8.2 + lxml 4.5.0</p>\\n<p>开发工具 pycharm2019</p>\\n<h2>requests 介绍与安装</h2>\\n<p>requests 是一个优雅而简单的 Python HTTP请求库requests 的作用是 发送请求获取响应数据<br>\\nrequests 安装：在终端(命令行工具)运行这个简单命令即可<br>\\npip install requests</p>\\n<p>注意:<br>\\n如果你要安装Python虚拟环境中，先进入虚拟机环境再执行上述命令<br>\\n如果系统中既安装了Python2 又安装了 Python3,需要安装Python3环境中:pip3 install requests</p>","autoDesc":true}');export{Ce as comp,Ne as data};
