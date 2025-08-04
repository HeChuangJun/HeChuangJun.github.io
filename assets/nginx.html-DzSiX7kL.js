import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o as d,c as r,a as e,b as n,d as l,e as i}from"./app-7KT7HDzT.js";const v={},c=i('<h1 id="_1-什么是nginx" tabindex="-1"><a class="header-anchor" href="#_1-什么是nginx"><span>1. 什么是nginx?</span></a></h1><ul><li>Nginx是一款高性能的http 服务器/反向代理服务器及电子邮件（IMAP/POP3）代理服务器。</li><li>由俄罗斯的程序设计师Igor Sysoev所开发，官方测试nginx能够支支撑5万并发链接，并且cpu、内存等资源消耗却非常低，运行非常稳定。而且可以负载均衡</li></ul><h1 id="_2-应用场景" tabindex="-1"><a class="header-anchor" href="#_2-应用场景"><span>2. 应用场景</span></a></h1><ul><li>http服务器。Nginx是一个http服务可以独立提供http服务。可以做网页静态服务器。</li><li>虚拟主机。可以实现在一台服务器虚拟出多个网站。例如个人网站使用的虚拟主机。</li><li>反向代理，负载均衡。当网站的访问量达到一定程度后，单台服务器不能满足用户的请求时，需要用多台服务器集群可以使用nginx做反向代理。并且多台服务器可以平均分担负载，不会因为某台服务器负载高宕机而某台服务器闲置的情况。</li></ul><h1 id="_3-nginx安装" tabindex="-1"><a class="header-anchor" href="#_3-nginx安装"><span>3. nginx安装</span></a></h1>',5),o={href:"http://nginx.org/,1.8.0%E7%89%88%E6%9C%AC%E3%80%82Nginx%E6%8F%90%E4%BE%9B%E7%9A%84%E6%BA%90%E7%A0%81%E5%AE%89%E8%A3%85",target:"_blank",rel:"noopener noreferrer"},m=i("<li>环境安装 <ul><li>gcc环境:yum install gcc-c++</li><li>PCRE(Perl Compatible Regular Expressions)是一个Perl库，包括 perl 兼容的正则表达式库。nginx的http模块使用pcre来解析正则表达式，所以需要在linux上安装pcre库。pcre-devel是使用pcre开发的一个二次开发库。nginx也需要此库。yum install -y pcre pcre-devel</li><li>zlib库:提供了很多种压缩和解压缩的方式，nginx使用zlib对http包的内容进行gzip，所以需要在linux上安装zlib库。yum install -y zlib zlib-devel</li><li>OpenSSL 是一个强大的安全套接字层密码库，囊括主要的密码算法、常用的密钥和证书封装管理功能及SSL协议，并提供丰富的应用程序供测试或其它目的使用。nginx不仅支持http协议，还支持https（即在ssl协议上传输http），所以需要在linux安装openssl库。yum install -y openssl openssl-devel</li></ul></li><li>正式安装 <ul><li>第一步：把nginx的源码包上传到linux系统</li><li>第二步：解压缩[root@localhost ~]# tar zxf nginx-1.8.0.tar.gz</li><li>第三步：使用configure命令创建makeFile文件，执行下面一大行</li></ul></li>",2),u=i(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	./configure \\
	--prefix=/usr/local/nginx \\
	--pid-path=/var/run/nginx/nginx.pid \\
	--lock-path=/var/lock/nginx.lock \\
	--error-log-path=/var/log/nginx/error.log \\
	--http-log-path=/var/log/nginx/access.log \\
	--with-http_gzip_static_module \\
	--http-client-body-temp-path=/var/temp/nginx/client \\
	--http-proxy-temp-path=/var/temp/nginx/proxy \\
	--http-fastcgi-temp-path=/var/temp/nginx/fastcgi \\
	--http-uwsgi-temp-path=/var/temp/nginx/uwsgi \\
	--http-scgi-temp-path=/var/temp/nginx/scgi
	注意：启动nginx之前，上边将临时文件目录指定为/var/temp/nginx，需要在/var下创建temp及nginx目录
	mkdir /var/temp/nginx/client -p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>- 第四步：make
- 第五步：make install
- 启动nginx 进入/usr/local/nginx/sbin目录[root@localhost sbin]# ./nginx -c /nginx.conf
- 指定配置文件启动:/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
- 查找nginx是否存在ps aux|grep nginx
- 关闭nginx：[root@localhost sbin]# ./nginx -s stop
- 推荐使用：[root@localhost sbin]# ./nginx -s quit
- 重启nginx：1、先关闭后启动。2、刷新配置文件：[root@localhost sbin]# ./nginx -s reload
</code></pre>`,2),g={href:"http://192.168.25.135:80/",target:"_blank",rel:"noopener noreferrer"},p=e("li",null,"查看nginx配置文件：nginx -t",-1),x=i(`<h1 id="_4-nginx-conf配置" tabindex="-1"><a class="header-anchor" href="#_4-nginx-conf配置"><span>4. nginx.conf配置</span></a></h1><h2 id="配置虚拟主机-server节点" tabindex="-1"><a class="header-anchor" href="#配置虚拟主机-server节点"><span>配置虚拟主机(server节点)</span></a></h2><ul><li>在一台服务器启动多个网站。如何区分不同的网站?:1域名不同2端口不同</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>通过端口listen区分不同虚拟机
http {	
	server {//一个server节点就是一个虚拟主机
		listen       
		server_name  localhost;
		location / {
			root   html;//Html是nginx安装目录下的html目录
			index  index.html index.htm;
		}
	}
	/*server {
		listen       81;
		server_name  localhost;
		location / {
			root   html-81;
			index  index.html index.htm;
		}
	}*/
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>通过域名server_name区分虚拟主机
http {
	server {
		listen       80;
		server_name  www.taobao.com;
		location / {
			root   html-taobao;
			index  index.html index.htm;
		}
	}
	/*server {
		listen       80;
		server_name  www.baidu.com;
		location / {
			root   html-baidu;
			index  index.html index.htm;
		}
	}*/
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-nginx反向代理配置" tabindex="-1"><a class="header-anchor" href="#_5-nginx反向代理配置"><span>5. nginx反向代理配置</span></a></h2><ul><li>正向代理(客户端转发请求和响应)</li><li>反向代理：(服务端转发请求和响应)</li><li>反向代理服务器决定哪台服务器提供服务。返回代理服务器不提供服务器。也是请求的转发。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	upstream tomcat1 {
		server 192.168.25.148:8080;
	}
	server {
		listen       80;
		server_name  www.sina.com.cn;
		location / {
			proxy_pass   http://tomcat1;//代理配置
			index  index.html index.htm;
		}
	}
	upstream tomcat2 {
		server 192.168.25.148:8081;
	}
	server {
		listen       80;
		server_name  www.sohu.com;
		location / {
			proxy_pass   http://tomcat2;//代理配置
			index  index.html index.htm;
		}
	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-负载均衡-集群配置" tabindex="-1"><a class="header-anchor" href="#_6-负载均衡-集群配置"><span>6. 负载均衡/集群配置</span></a></h2><ul><li>如果一个服务由多条服务器提供，需要把负载分配到不同的服务器处理，需要负载均衡。</li><li>可以根据服务器的实际情况调整服务器权重。权重越高分配的请求越多，权重越低，请求越少。默认是都是1</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	upstream tomcat2 {
		server 192.168.25.148:8081;//集群配置
		server 192.168.25.148:8082 weight=2;
		server 192.168.25.148:8083;
	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-1-nginx的高可用配置" tabindex="-1"><a class="header-anchor" href="#_6-1-nginx的高可用配置"><span>6.1. Nginx的高可用配置</span></a></h2><ul><li>要实现nginx的高可用，需要实现备份机。主服务器和备份机上都运行高可用（High Availability）监控程序，通过传送诸如“I am alive”这样的信息来监控对方的运行状况。当备份机不能在一定的时间内收到这样的信息时，它就接管主服务器的服务IP并继续提供负载均衡服务；当备份管理器又从主管理器收到“I am alive”这样的信息时，它就释放服务IP地址，这样的主服务器就开始再次提供负载均衡服务。</li><li>keepalived是集群管理中保证集群高可用的一个服务软件，用来防止单点故障。Keepalived的作用是检测web服务器的状态，如果有一台web服务器死机，或工作出现故障，Keepalived将检测到，并将有故障的web服务器从系统中剔除，当web服务器工作正常后Keepalived自动将web服务器加入到服务器群中，这些工作全部自动完成，不需要人工干涉，需要人工做的只是修复故障的web服务器。<br> -keepalived工作原理：keepalived是以VRRP协议为实现基础的，VRRP全称Virtual Router Redundancy Protocol，即虚拟路由冗余协议。可以认为是实现路由器高可用的协议，即将N台提供相同功能的路由器组成一个路由器组，这个组里面有一个master和多个backup，master上面有一个对外提供服务的vip（VIP = Virtual IP Address，虚拟IP地址，该路由器所在局域网内其他机器的默认路由为该vip），master会发组播，当backup收不到VRRP包时就认为master宕掉了，这时就需要根据VRRP的优先级来选举一个backup当master。这样的话就可以保证路由器的高可用了。</li><li>keepalived主要有三个模块，分别是core、check和VRRP。core模块为keepalived的核心，负责主进程的启动、维护以及全局配置文件的加载和解析。check负责健康检查，包括常见的各种检查方式。VRRP模块是来实现VRRP协议的。</li><li>keepalived+nginx实现主备过程<br> 初始状态<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/68448aa3db9eda659080a.png" alt="图片8.png"><br> 主机宕机<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/2139793d9471132befa39.png" alt="图片9.png"><br> 主机恢复<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/cf3135d3956bb4bcab747.png" alt="图片10.png"></li></ul><h2 id="_11-vue页面部署到nginx" tabindex="-1"><a class="header-anchor" href="#_11-vue页面部署到nginx"><span>11. vue页面部署到nginx</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	带子路由
	server{
		location /newmatch/ {           
			proxy_pass  http://localhost:11001/;
			proxy_redirect   off;
			proxy_set_header Host $host;
			proxy_set_header X-Real-IP $remote_addr;
			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		}
	}
	server {
        listen       11001;
        location / {
            root   html\\test;
            index  index.html index.htm;
			expires 1s;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	或者不带子路由
	server {
        listen       9999;
		location / {
			root   html\\test;
		}
		#location = /index.html {
        #    root   html;
        #}
	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-nginx的websocket配置" tabindex="-1"><a class="header-anchor" href="#_12-nginx的websocket配置"><span>12. nginx的websocket配置</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	server {
        listen       8083;
		location / {
			proxy_pass http://wx.bio-match.com:8083/;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;//websocket配置1
            proxy_set_header Connection &quot;upgrade&quot;;//websocket配置2
		}
       error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_13-使用winws-exe注册成windows服务" tabindex="-1"><a class="header-anchor" href="#_13-使用winws-exe注册成windows服务"><span>13. 使用winws.exe注册成windows服务</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	winws.xml配置
	&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;
	&lt;service&gt;
		&lt;id&gt;nginx&lt;/id&gt;
		&lt;name&gt;nginx&lt;/name&gt;
		&lt;description&gt;nginx&lt;/description&gt;
		&lt;executable&gt;D:\\tools\\nginx-1.14.2\\nginx.exe&lt;/executable&gt;
		&lt;logpath&gt;D:\\tools\\nginx-1.14.2\\&lt;/logpath&gt;
		&lt;logmode&gt;roll&lt;/logmode&gt;
		&lt;depend&gt;&lt;/depend&gt;
		&lt;startargument&gt;-p D:\\tools\\nginx-1.14.2&lt;/startargument&gt;
		&lt;stopargument&gt;-p D:\\tools\\nginx-1.14.2 -s stop&lt;/stopargument&gt;
	&lt;/service&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function b(h,_){const t=s("ExternalLinkIcon");return d(),r("div",null,[c,e("ul",null,[e("li",null,[n("下载nginx：官方网站："),e("a",o,[n("http://nginx.org/,1.8.0版本。Nginx提供的源码安装"),l(t)])]),m]),u,e("ul",null,[e("li",null,[n("访问nginx:"),e("a",g,[n("http://192.168.25.135:80/"),l(t)]),n(" 默认是80端口。注意：是否关闭防火墙。")]),p]),x])}const y=a(v,[["render",b],["__file","nginx.html.vue"]]),k=JSON.parse('{"path":"/backend/apigateway/nginx.html","title":"nginx","lang":"zh-CN","frontmatter":{"title":"nginx","date":"2023-01-01T00:00:00.000Z","tags":"nginx","categories":"后端","description":"1. 什么是nginx? Nginx是一款高性能的http 服务器/反向代理服务器及电子邮件（IMAP/POP3）代理服务器。 由俄罗斯的程序设计师Igor Sysoev所开发，官方测试nginx能够支支撑5万并发链接，并且cpu、内存等资源消耗却非常低，运行非常稳定。而且可以负载均衡 2. 应用场景 http服务器。Nginx是一个http服务可以独...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/apigateway/nginx.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"nginx"}],["meta",{"property":"og:description","content":"1. 什么是nginx? Nginx是一款高性能的http 服务器/反向代理服务器及电子邮件（IMAP/POP3）代理服务器。 由俄罗斯的程序设计师Igor Sysoev所开发，官方测试nginx能够支支撑5万并发链接，并且cpu、内存等资源消耗却非常低，运行非常稳定。而且可以负载均衡 2. 应用场景 http服务器。Nginx是一个http服务可以独..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/68448aa3db9eda659080a.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"nginx\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/68448aa3db9eda659080a.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/2139793d9471132befa39.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/cf3135d3956bb4bcab747.png\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"配置虚拟主机(server节点)","slug":"配置虚拟主机-server节点","link":"#配置虚拟主机-server节点","children":[]},{"level":2,"title":"5. nginx反向代理配置","slug":"_5-nginx反向代理配置","link":"#_5-nginx反向代理配置","children":[]},{"level":2,"title":"6. 负载均衡/集群配置","slug":"_6-负载均衡-集群配置","link":"#_6-负载均衡-集群配置","children":[]},{"level":2,"title":"6.1. Nginx的高可用配置","slug":"_6-1-nginx的高可用配置","link":"#_6-1-nginx的高可用配置","children":[]},{"level":2,"title":"11. vue页面部署到nginx","slug":"_11-vue页面部署到nginx","link":"#_11-vue页面部署到nginx","children":[]},{"level":2,"title":"12. nginx的websocket配置","slug":"_12-nginx的websocket配置","link":"#_12-nginx的websocket配置","children":[]}],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":6.45,"words":1935},"filePathRelative":"backend/apigateway/nginx.md","localizedDate":"2023年1月1日","excerpt":"\\n<ul>\\n<li>Nginx是一款高性能的http 服务器/反向代理服务器及电子邮件（IMAP/POP3）代理服务器。</li>\\n<li>由俄罗斯的程序设计师Igor Sysoev所开发，官方测试nginx能够支支撑5万并发链接，并且cpu、内存等资源消耗却非常低，运行非常稳定。而且可以负载均衡</li>\\n</ul>\\n<h1>2. 应用场景</h1>\\n<ul>\\n<li>http服务器。Nginx是一个http服务可以独立提供http服务。可以做网页静态服务器。</li>\\n<li>虚拟主机。可以实现在一台服务器虚拟出多个网站。例如个人网站使用的虚拟主机。</li>\\n<li>反向代理，负载均衡。当网站的访问量达到一定程度后，单台服务器不能满足用户的请求时，需要用多台服务器集群可以使用nginx做反向代理。并且多台服务器可以平均分担负载，不会因为某台服务器负载高宕机而某台服务器闲置的情况。</li>\\n</ul>","autoDesc":true}');export{y as comp,k as data};
