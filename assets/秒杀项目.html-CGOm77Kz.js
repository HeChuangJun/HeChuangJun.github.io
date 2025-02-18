import{_ as v}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as r,c as d,b as e,d as n,e as i,w as t,a as s}from"./app-Cw8r8IGg.js";const m={},b=s('<h1 id="电商秒杀系统-核心高性能解决方案" tabindex="-1"><a class="header-anchor" href="#电商秒杀系统-核心高性能解决方案"><span>电商秒杀系统-核心高性能解决方案</span></a></h1><h2 id="分层设计" tabindex="-1"><a class="header-anchor" href="#分层设计"><span>分层设计</span></a></h2><ul><li>接入层模型 View Object 与前端对接的模型，隐藏内部实现，仅展示的聚合模型</li><li>业务层模型 Domain Object 领域模型，业务核心模型，拥有生命周期贫血以及服务输出能力 （贫血模型，只有数据库对应字段，不提供其他功能，其他功能由sevice提供，比如用户模型只有username password 不会有注册等功能，充血模型则表示用户模型包括username password之外还能提供注册功能）可以处理用户生命周期，例如从注册登录到退出，包含多个数据模型，例如用户包括用户基础信息数据模型和用户密码信息数据模型</li><li>数据层 Data Object数据模型，同数据库映射，用以ORM方式操作数据库的能力模型<br> -- 用户密码会与用户信息分开存储，用户密码会放在加密数据库中，而平时只用到用户的基础信息</li></ul><h2 id="环境部署" tabindex="-1"><a class="header-anchor" href="#环境部署"><span>环境部署</span></a></h2><h3 id="jdk安装" tabindex="-1"><a class="header-anchor" href="#jdk安装"><span>jdk安装</span></a></h3>',5),g=e("li",null,"下载jdk的rpm文件",-1),h=e("li",null,"授权最高权限 chmod 777 rpm文件",-1),x=e("li",null,"安装rpm文件 rpm -ivh rpm文件 （默认安装到/usr/java）",-1),_={class:"MathJax",jax:"SVG",style:{position:"relative"}},k={style:{"vertical-align":"0"},xmlns:"http://www.w3.org/2000/svg",width:"8.255ex",height:"1.62ex",role:"img",focusable:"false",viewBox:"0 -716 3648.8 716","aria-hidden":"true"},T=s('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D443" d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path></g><g data-mml-node="mi" transform="translate(751,0)"><path data-c="1D434" d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"></path></g><g data-mml-node="mi" transform="translate(1501,0)"><path data-c="1D447" d="M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z"></path></g><g data-mml-node="mi" transform="translate(2205,0)"><path data-c="1D43B" d="M228 637Q194 637 192 641Q191 643 191 649Q191 673 202 682Q204 683 219 683Q260 681 355 681Q389 681 418 681T463 682T483 682Q499 682 499 672Q499 670 497 658Q492 641 487 638H485Q483 638 480 638T473 638T464 637T455 637Q416 636 405 634T387 623Q384 619 355 500Q348 474 340 442T328 395L324 380Q324 378 469 378H614L615 381Q615 384 646 504Q674 619 674 627T617 637Q594 637 587 639T580 648Q580 650 582 660Q586 677 588 679T604 682Q609 682 646 681T740 680Q802 680 835 681T871 682Q888 682 888 672Q888 645 876 638H874Q872 638 869 638T862 638T853 637T844 637Q805 636 794 634T776 623Q773 618 704 340T634 58Q634 51 638 51Q646 48 692 46H723Q729 38 729 37T726 19Q722 6 716 0H701Q664 2 567 2Q533 2 504 2T458 2T437 1Q420 1 420 10Q420 15 423 24Q428 43 433 45Q437 46 448 46H454Q481 46 514 49Q520 50 522 50T528 55T534 64T540 82T547 110T558 153Q565 181 569 198Q602 330 602 331T457 332H312L279 197Q245 63 245 58Q245 51 253 49T303 46H334Q340 38 340 37T337 19Q333 6 327 0H312Q275 2 178 2Q144 2 115 2T69 2T48 1Q31 1 31 10Q31 12 34 24Q39 43 44 45Q48 46 59 46H65Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Q285 635 228 637Z"></path></g><g data-mml-node="mo" transform="translate(3370.8,0)"><path data-c="3A" d="M78 370Q78 394 95 412T138 430Q162 430 180 414T199 371Q199 346 182 328T139 310T96 327T78 370ZM78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z"></path></g></g></g>',1),y=[T],f=e("mjx-assistive-mml",{unselectable:"on",display:"inline"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("mi",null,"P"),e("mi",null,"A"),e("mi",null,"T"),e("mi",null,"H"),e("mo",null,":")])],-1),Q=e("li",null,"保存并退出:wq",-1),q=e("li",null,"刷新配置文件source ~/.bash_profile",-1),w=s(`<h3 id="mysql安装" tabindex="-1"><a class="header-anchor" href="#mysql安装"><span>mysql安装</span></a></h3><ul><li>安装mysql相关依赖yum install mysql*</li><li>rpm方式不需要镜像就能更新，但需要解决依赖</li><li>yum方式不需要解决依赖</li><li>yum install mariadb-server</li><li>启动mysql systemctl start mariadb.service</li><li>初始化root账户密码mysqladmin -u root password root</li></ul><h3 id="jar上传" tabindex="-1"><a class="header-anchor" href="#jar上传"><span>jar上传</span></a></h3><ul><li>打包成springboot应用</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    &lt;plugins&gt;
      &lt;plugin&gt;
        &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
        &lt;artifactId&gt;maven-compiler-plugin&lt;/artifactId&gt;
        &lt;configuration&gt;
          &lt;source&gt;1.8&lt;/source&gt;
          &lt;target&gt;1.8&lt;/target&gt;
        &lt;/configuration&gt;
      &lt;/plugin&gt;
      &lt;plugin&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-maven-plugin&lt;/artifactId&gt;
      &lt;/plugin&gt;
    &lt;/plugins&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),S=e("li",null,"maven clean package",-1),M=e("li",null,"上传将文件传送到服务器 scp *.sql root@ip://tmp/ -> -r 复制文件夹",-1),C=e("li",null,"chmod 777 jar包",-1),I={href:"http://deploy.sh",target:"_blank",rel:"noopener noreferrer"},j={href:"http://deploy.sh",target:"_blank",rel:"noopener noreferrer"},E=s(`<h3 id="安装nginx" tabindex="-1"><a class="header-anchor" href="#安装nginx"><span>安装nginx</span></a></h3><ul><li>下载openresty-1.13.6.2.tar.gz</li><li>chomd -R 777 openresty-1.13.6.2.tar.gz</li><li>tar -xvzf openresty-1.13.6.2.tar.gz</li><li>cd openresty-1.13.6.2</li><li>yum install pcre-devel openssl-devel gcc curl</li><li>编译 ./configure</li><li>make 编译</li><li>make install 安装</li><li>cd /usr/local/openresty <ul><li>bin</li><li>luajit</li><li>nginx /sbin/nginx(这个文件替换掉就能替换了nginx)</li></ul></li><li>启动nginx nginx/sbin/nginx -c nginx/conf/nginx.conf</li><li>修改配置后直接sbin/nginx -s reload 无缝重启 不影响客户连接</li></ul><h2 id="分布式" tabindex="-1"><a class="header-anchor" href="#分布式"><span>分布式</span></a></h2><h3 id="单台应用" tabindex="-1"><a class="header-anchor" href="#单台应用"><span>单台应用</span></a></h3><ul><li>pstree -p 端口号 | wc -l 查看java线程数</li><li>top -H查看性能数量 <ul><li>%Cpu 1、us 用户态下CPU的耗时 2、sy 内核空间对CPU的耗时（socket send read） 两个加起来不能超100%</li><li>load average 最近 1 分钟 5 分钟 15分钟的 cpu load数量，越低越好 控制在CPU数内 高表示CPU很忙（死循环us高，但load average很低）</li></ul></li><li>sever端的并发线程数上不去（spring-configuration-metadata.json文件）</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>server.tomcat.accept-count:等待队列长度(超过就拒绝)，默认100-&gt;1000
server.tomcat.max-connections:最大可被连接数，默认10000
server.tomcat.max-threads:最大工作线程数，默认200-&gt;800 4核8G
server.tomcat.min-space-threads:最小工作线程数，默认10-&gt;100

默认配置下，连接超过10000后出现拒绝链接情况
默认配置下，触发的请求超过200+100后拒绝处理
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>keep-alive减少连接消耗<br> keepAliveTimeOut:多少毫秒后不响应的断开keepalive<br> maxKeepAliveRequests:多少次请求后keepalive断开失效</p><ul><li>定制化内嵌tomcat配置</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//当spring容器内没有TomcatEmbeddedServletContainerFactory这个bean时，会把此bean加载进spring容器中
@Component
public class WebServerConfiguration implements WebServerFactoryCustomizer&lt;ConfigurableWebServerFactory&gt; {
    @Override
    public void customize(ConfigurableWebServerFactory factory) {
        ((TomcatServletWebServerFactory)factory).addConnectorCustomizers(new TomcatConnectorCustomizer() {
            @Override
            public void customize(Connector connector) {
                Http11NioProtocol http11NioProtocol = (Http11NioProtocol) connector.getProtocolHandler();

                //定制化keepalivetimeout 设置30秒内没有请求则服务器自动断开keepalive连接
                http11NioProtocol.setKeepAliveTimeout(30000);
                //当客户端发送超过10000个请求则自动断开keepalive连接
                http11NioProtocol.setMaxKeepAliveRequests(1000);
            }
        });
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>单机容量问题（响应时间变长 TPS上不去），</p><ul><li>线程数量：4核CPU 8G内存单进程调度线程数800-1000以上后即花费巨大时间在CPU调度上</li><li>等待队列长度：队列做缓冲池用，但也不能无限长，消耗内存，出队入队也耗CPU（1000-2000）</li><li>表象:单机CPU使用率增高，memory占用增加，网络带宽使用增加</li><li>cpu us ：用户空间的cpu使用情况（用户层代码）</li><li>cpu sy：内核空间的cpu使用情况（系统调用）</li><li>load average：1,5,15分钟load平均值，跟着核数系数，0代表正常1代表打满1+表示等待阻塞</li><li>memory fee空闲内存，used使用内存</li></ul></li><li><p>MySql QPS容量问题</p><ul><li>主键查询:千万级别数据 = 1-10毫秒</li><li>唯一索引查询:千万级别数据 = 10-100毫秒</li><li>非唯一索引查询:千万级别数据 = 100-1000毫秒 -&gt;分库分表，扩容热点数据</li><li>无索引:百万条数据 1000毫秒+ -&gt;分库分表，扩容热点数据</li></ul></li><li><p>Mysql TPS容量问题</p><ul><li>非插入更新删除操作:同查询 -&gt;where条件</li><li>插入操作:1w-10w tps（依赖配置优化）</li></ul></li></ul><h3 id="nginx反向代理-水平扩展" tabindex="-1"><a class="header-anchor" href="#nginx反向代理-水平扩展"><span>nginx反向代理(水平扩展)</span></a></h3><ul><li>水平扩展-&gt;使用nginx反向代理（1个nginx，2个jar，1个mysql共4个虚拟机）</li><li>nginx作为web服务器（静态）</li><li>nginx作为动静分离服务器</li><li>nginx作为反向代理服务器</li><li>nginx生产环境使用nas（无限容量）代替本地磁盘</li><li>OpenResty框架-&gt;nginx开发和调优OpenResty是一款基于 NGINX 和 LuaJIT 的 Web 平台。redis lua nginx配置都有</li></ul><ol><li>nginx静态资源访问配置（访问/resources/都是访问静态资源）</li></ol><ul><li>location节点path:指定url映射key</li><li>location节点内容:root指定location path后对应的根路径，index指定默认的访问页 alias 指替换调路径</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>worker_processes 1工作进程
events{
	worker_connections 1024;可以接受的工作连接
}
mine.types-&gt;content-type设置

location /resources/ { -&gt;/resource/xxxx 替换为 /usr/local/openresty/nginx/html/resources/
	alias /usr/local/openresty/nginx/html/resources/;
	index index.html index.html;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.反向代理配置（默认与后端没有长连接keep alive）数据库连接池和h5与nginx有keepalive，长连接<br> 2.1设置upstream server</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>server{
	upstream back_server {
		server ip:port weight=1;
		server ip:port weight=1;
		keepalive 30;//设置nginx与后端长连接30s，30内没操作断开 与 http1.1配合使用
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.2设置动态请求location为proxy pass 路径</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	location  /{
		proxy_pass http://back_server;
		proxy_set_header Host $http_host:$proxy_port;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header : X-Forwared-For $proxy_add_x_forwarded_for;//代表nginx转发请求
		proxy_http_version 1.1;//使用keepalive
		proxy_set_header Connection &quot;&quot;;//使用keepalive
		
	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.3开启tomcat access log验证<br> 在application.properties配置<br> server.tomcat.accesslog.enabled=true<br> server.tomcat.accesslog.directory=/var/www/miaosha/tomcat //先创建<br> server.tomcat.accesslog.pattern=%h %l %u %t &quot;%r&quot; %s %b %D<br> %h-&gt;远端ip<br> %l-&gt; -<br> %u-&gt;远端用户<br> %t-&gt;耗时<br> %r-&gt;请求信息方法和url<br> %s-&gt;返回状态码<br> %b-&gt;byte send响应大小<br> %D-&gt;处理请求时长<br> 设置长连接优化 proxy_http_version 1.1;//使用keepalive proxy_ser_header Connection &quot;&quot;;//使用keepalive<br> keepalive 30;//设置nginx与后端长连接30s，30内没操作断开 与 http1.1配合使用</p><ul><li><p>nginx高性能原因</p></li><li><p>epoll多路复用机制完成非阻塞IO操作</p><ul><li>bio模型。阻塞式进程模型，write过程阻塞，等到网络完成才能继续执行、</li><li>linux select模型 变更触发轮询查找， 有1024数量上限 首先阻塞自己，监听100个客户连接是否有变化，若有变化则唤醒自己，循环遍历100连接，找到发生变化的一个或者多个执行read操作。遍历效率低，连接数量有上限</li><li>epoll模型，变更触发回调直接读取，理论上无上限，不会断开客户连接，监听100个客户端连接是否有变化，设置回调函数，若有变化则唤醒自己，并执行回调函数</li></ul></li><li><p>java nio-》自动选择select或者epoll模型。linux内核2.6以上才有epoll模型</p></li><li><p>master worker 进程模型平滑加载和重启,不会断开与客户端连接<br> master worker父子进程-&gt;master可以管理worker进程内存空间（两者共享内存，根据worker_processes配置worker进程数），worker进程可以竞争处理客户端连接accept请求，用内存锁保证多个worker进程能有序负责某个连接，一旦accept之后，就由当时处理的worker进程一直处理下去。reload配置文件只会切换worker进程，master进程不会修改，客户端也不会断开socket连接，是因为重启的时候将所有worker进程句柄交给master进程，重启时，master进程又交回给新的worker进程去处理，每个worker进程都是单线程的，没有阻塞的话，单线程比多线程快，只做了内核空间转向外部空间的拷贝。并没有阻塞什么，所以高性能</p></li><li><p>协程机制 非阻塞编程 单进程单线程<br> 依附于线程的内存模型，切换开销小（内存切换）而线程是CPU切换开销<br> 遇到阻塞及归还执行权，代码同步，可以处理大量的异步回调函数（大量异步函数嵌套，本身不好做顺序控制），协程可以作顺序控制，写代码可以直接return<br> 无需加锁，串行执行</p></li></ul><h3 id="分布式会话管理" tabindex="-1"><a class="header-anchor" href="#分布式会话管理"><span>分布式会话管理</span></a></h3><ul><li>基于cookie传输sessionid（jsessionid）：tomcat实现session（转移到redis）(移动端不行，禁cookie)<br> @Autowired<br> private HttpServletRequest httpServletRequest;</li></ul><p>httpServletRequest.getSession.setAttribute(&quot;xx&quot;,xx);</p><ul><li>基于token(令牌)实现sessionid：java实现session（uuid）（转移到redis）<br> 请求带上？token =<br> 后端 String token2 = this.httpServletRequest.getParameterMap().get(&quot;token&quot;)[0];//拿到</li></ul><p>@Autowired<br> private RedisTemplate redisTemplate;</p><p>String uuidToken = UUID.randomUUID().toString();<br> redisTemplate.opsForValue().set(uuidToken,userModel);<br> redisTemplate.expire(token,1, TimeUnit.HOURS);</p><p>redisTemplate.opsForValue().get(uuidToken,userModel);</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>下载redis
chmod -R 777 redis-5.0.4.tag.gz
tar -zxvf redis-5.0.4.tag.gz
cd redis-5.0.4
./configure
make
make install
cd src
./redis-server

    &lt;dependency&gt;
      &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
      &lt;artifactId&gt;spring-boot-starter-data-redis&lt;/artifactId&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.springframework.session&lt;/groupId&gt;
      &lt;artifactId&gt;spring-session-data-redis&lt;/artifactId&gt;
      &lt;version&gt;2.0.5.RELEASE&lt;/version&gt;
    &lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>spring.redis.host=127.0.0.1
spring.redis.port=6379
spring.redis.password=xxx
#默认16个数据库
spring.redis.database=0
#连接池
spring.redis.jedis.pool.max-active=50
spring.redis.jedis.pool.max-idle=20

@Component
@EnableRedisHttpSession(maxInactiveIntervalInSeconds = 3600)
public class RedisConfig {
    //将java序列化转成json序列化
    @Bean
    public RedisTemplate restTemplate(RedisConnectionFactory redisConnectionFactory) {
        RedisTemplate redisTemplate = new RedisTemplate();
        redisTemplate.setConnectionFactory(redisConnectionFactory);

        //设置key序列化方式-&gt;不设置则表示一定要实现序列化接口
        StringRedisSerializer stringRedisSerializer = new StringRedisSerializer();
        redisTemplate.setKeySerializer(stringRedisSerializer);

        //解决value的序列化方式-&gt;不设置则表示一定要实现序列化接口
        Jackson2JsonRedisSerializer jackson2JsonRedisSerializer = new Jackson2JsonRedisSerializer(Object.class);
        ObjectMapper objectMapper = new ObjectMapper();
        SimpleModule simpleModule = new SimpleModule();
        simpleModule.addDeserializer(DateTime.class, new JodaDateTimeJsonDeserializer());
        simpleModule.addSerializer(DateTime.class, new JodaDateTimeJsonSerializer());

        //各个属性都能有对应的解析说明，加了列的类型说明
        objectMapper.enableDefaultTyping(ObjectMapper.DefaultTyping.NON_FINAL);

        objectMapper.registerModule(simpleModule);
        jackson2JsonRedisSerializer.setObjectMapper(objectMapper);
        redisTemplate.setValueSerializer(jackson2JsonRedisSerializer);

        return redisTemplate;
    }
}

public class JodaDateTimeJsonDeserializer extends JsonDeserializer&lt;DateTime&gt; {
    @Override
    public DateTime deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JsonProcessingException {
        String dateString = jsonParser.readValueAs(String.class);
        DateTimeFormatter formatter = DateTimeFormat.forPattern(&quot;yyyy-MM-dd HH:ss&quot;);

        return DateTime.parse(dateString,formatter);
    }
}
public class JodaDateTimeJsonSerializer extends JsonSerializer&lt;DateTime&gt; {
    @Override
    public void serialize(DateTime dateTime, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
        jsonGenerator.writeString(dateTime.toString(&quot;yyyy-MM-dd HH:mm:ss&quot;));

    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查询多级缓存-丢失" tabindex="-1"><a class="header-anchor" href="#查询多级缓存-丢失"><span>查询多级缓存（丢失）</span></a></h2><ul><li>缓存设计 <ul><li>用内存做缓存</li><li>将缓存推到离用户最近的地方，性能越高，但是更新越难</li><li>脏缓存清理-&gt;数据更新了缓存没更新的情况（牺牲内存，并且有脏读问题）</li></ul></li><li>nginx proxy cache缓存</li><li>nginx lua缓存</li></ul><h3 id="redis缓存" tabindex="-1"><a class="header-anchor" href="#redis缓存"><span>redis缓存</span></a></h3><ul><li>redis缓存（网络，集中式负载均衡瓶颈）-&gt;一般把model放入到redis中缓存起来，并且记得设置超时时间，记得实现序列化接口(默认)<br> redis nosql数据库可以持久化，集中式缓存，可以丢失<br> 单机，容量，故障瓶颈，所有业务炸掉<br> sentinal哨兵模式 redis1对应一个slave redis2，则redis1会将数据同步到redis2，redis1挂了使用redis2，两者主从关系。redis sentinel与多个redis建立长连接，通过心跳机制，而后台访问redis sentinel决定redis主从问题，最后后台直接访问该redis<br> 容量问题明显，master不好扩容，难以复制数据</li></ul><p>cluster集群模式<br> redis都在互连，使用算法保证高可用，后端只要访问其中一个redis就行</p><p>//配合RedisConfig<br> redisTemplate.opsForValue().set(uuidToken,userModel);<br> redisTemplate.expire(token,1, TimeUnit.HOURS);</p><p>redisTemplate.opsForValue().get(uuidToken,userModel);</p><h3 id="本地缓存" tabindex="-1"><a class="header-anchor" href="#本地缓存"><span>本地缓存</span></a></h3><ul><li>存放热点数据，较少redis访问，减少io，在每秒上万情况下</li><li>脏读非常不敏感，分散，数据难同步（可以用mq解决，但没必要）</li><li>内存可控</li><li>生命周期短，比redis短</li><li>内存jvm本地缓存</li><li>方案使用Guava cache有淘汰机制，能支持并发读写（线程安全） <ul><li>可控制的大小和超时时间</li><li>可配置的lru策略(最近最少访问优先淘汰)</li><li>线程安全</li></ul></li></ul>`,39),P=e("br",null,null,-1),O=e("br",null,null,-1),H=e("br",null,null,-1),A=e("br",null,null,-1),R=e("br",null,null,-1),L=e("br",null,null,-1),N=e("br",null,null,-1),D=s(`<pre><code>private Cache&lt;String,Object&gt; commonCache = null;

@PostConstruct
public void init(){
    this.commonCache = CacheBuilder.newBuilder()
            //设置缓存容器初始容量为10
            .initialCapacity(10)
            //设置缓存中最大可以存储100个KEY,超过100个之后会按照LRU的策略移除缓存项
            .maximumSize(100)
            //设置写缓存后多少秒过期
            .expireAfterWrite(30, TimeUnit.SECONDS).build();
}

@Override
public void setCommonCache(String key, Object value) {
    commonCache.put(key,value);
}

@Override
public Object getCommonCache(String key) {
    return commonCache.getIfPresent(key);
}
</code></pre><p>}</p><h3 id="nginx-proxy-缓存-少用-因为还是访问文件" tabindex="-1"><a class="header-anchor" href="#nginx-proxy-缓存-少用-因为还是访问文件"><span>nginx proxy 缓存（少用，因为还是访问文件）</span></a></h3><ul><li>nginx proxy cache缓存（不好用，因为读文件，反而比其他内存缓存慢）</li><li>必须是nginx反向代理前置才能生效</li><li>依靠文件系统存索引级文件（把请求当做文件，去本地找是否有对应文件，有则缓存生效）</li><li>依靠内存缓存文件地址</li></ul><p>在nginx.conf中声明<br> http{<br> #声明一个cache缓存节点内容，生成二级目录，在url生成hash值时取最后一位当第一级目录，倒数第二位当二级目录 inactive=7d保存7天<br> proxy_cache_path /usr/local/openresty/nginx/tmp_cache levels=1:2 keys_zone=tmp_cache:100m inactive=7d<br> max_size=10g;<br> location /{<br> proxy_cache tmp_cache;<br> proxy_cache_key $uri;<br> # 返回状态码200 206 304 302<br> proxy_cache_valid 200 206 304 302 7d;<br> }<br> }</p><h3 id="nginx-lua缓存-放nginx内存-推荐" tabindex="-1"><a class="header-anchor" href="#nginx-lua缓存-放nginx内存-推荐"><span>nginx lua缓存（放nginx内存，推荐）</span></a></h3><p>nginx 内存缓存(最好热点数据)</p><ul><li><p>lua协程机制，线程空间栈的执行单元，串行执行，用户态模拟出来的内存空间，以同步方式编写代码</p></li><li><p>nginx协程机制</p></li><li><p>nginx lua插载点</p></li><li><p>OpenResty</p></li><li><p>协程机制</p></li><li><p>依附于线程的内存模型，切换开销小</p></li><li><p>遇阻塞即归还执行权，代码同步</p></li><li><p>无需加锁</p></li><li><p>nginx协程</p></li><li><p>nginx的每一个worker进程都是在epoll或kqueue这种事件模型之上，封装成协程</p></li><li><p>每一个请求都有一个协程进行处理</p></li><li><p>即使ngx_lua须运行Lua，相对C有一定开销，但依旧能保证高并发能力</p></li><li><p>nginx每个worker进程都创建一个lua虚拟机</p></li><li><p>worker进程内所有协程共享同一个lua虚拟机</p></li><li><p>每个外部请求由一个lua协程处理，协程间数据隔离</p></li><li><p>lua代码 调用io等异步接口时，协程被挂起，上下文数据自动保存，不阻塞worker进程，io异步操作完成后还原协程上下文，代码继续执行</p></li></ul><p>nginx处理阶段<br> NGX_HTTP_POST_READ_PHASE=0;//读取请求头<br> NGX_HTTP_SERVER_REWRITE_PHASE;//执行rewrite -&gt;rewrite_handler定制开发<br> NGX_HTTP_FIND_CONFIG_PHASE;//根据uri替换location<br> NGX_HTTP_REWRITE_PHASE;//根据替换结果继续执行rewrite-&gt; reweite_handler定制开发<br> NGX_HTTP_POST_REWRITE_PHASE;//执行rewrite后处理<br> NGX_HTTP_PREACCESS_PHASE;//认证预处理，请求限制，连接限制 -&gt; limit_conn_hander_limit_req_handler定制开发<br> NGX_HTTP_ACCESS_PHASE;//认证处理-&gt;auth_basic_handler_access_handler定制开发<br> NGX_HTTP_POST_ACCESS_PHASE;//认证后处理，认证不通过，丢包<br> NGX_HTTP_TRY_FILES_PHASE;//尝试try标签<br> NGX_HTTP_CONTENT_PHASE;//内容处理-&gt;static_handler 定制开发<br> NGX_HTTP_LOG_PHASE;//日志处理-&gt;log_handler</p><p>nginx lua插载点<br> init_by_lua:系统启动时调用<br> init_worker_by_lua:worker进程启动时调用<br> set_by_lua:NGINX变量用复杂lua return<br> rewrite_by_lua:重写url规则<br> access_by_lua:权限认证阶段<br> content_by_lua:内容输出节点</p><ul><li>使用lua<br> init.lua文件<br> ngx.lua(ngx.ERR,&quot;init lua success&quot;);</li></ul><p>content.lua文件<br> ngx.say(&quot;hello&quot;);<br> ngx.exec(&quot;url&quot;);//nginx代理请求</p><p>在http模块下<br> http{<br> init_by_lua_file /usr/local/init.lua;<br> location /xxx/ {<br> default_type &quot;text/html&quot;;<br> content_by_lua_file /usr/local/content.lua;<br> }<br> }</p><ul><li>开发OpenResty与nginx的lua(放入nginx的内存里面)</li><li>OpenResty由Nginx核心加很多第三方模块组成，默认集成了Lua开发环境，使得Nginx可以作为一个web server使用</li><li>借助于nginx的时间驱动模型和非阻塞IO,可以实现高性能的web应用程序</li><li>openResty提供了大量组件如mysql，redis，memcached等等，使在nginx上开发web应用方便简单</li><li>shared dic共享内存字典，所有worker进程可见，lru淘汰<br> 在nginx 文件中<br> http{<br> lua_shared_dict my_cache 128m<br> location /xxx/ {<br> default_type &quot;application/json&quot;;<br> content_by_lua_file /usr/local/sharedic.lua;<br> }<br> }</li></ul><p>sharedic.lua文件</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>function get_from_cache(key)
	local cache_ngx = ngx.shared.my_cache
	local value = cache_ngx:get(key)
return value
end

function set_to_cache(key,value,exptime)
	if not exptime then 
		exptime = 0
	end
	local cache_ngx = ngx.shared.my_cache
	local succ,err,forcible = cache_ngx:set(key,value,exptime)
	return succ
end

local args = ngx.req.get_uri.args()
local id = agrs[&quot;id&quot;]
local item_model = get_from_cache(&quot;item&quot;..id)
if item_model == nill then
	local resp = ngx.location.capture(&quot;/item/get?id=&quot;..id)
	item_model = resp.body
	set_to_cache(&quot;item_&quot;..id,item_model,1*60)
end
ngx.say(item_model)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>openresty redis支持（减少访问jar消耗，减少数据更新问题）推荐</p><p>在nginx 文件中<br> http{<br> lua_shared_dict my_cache 128m<br> location /xxx/ {<br> default_type &quot;application/json&quot;;<br> content_by_lua_file /usr/local/redis.lua;<br> }<br> }</p><p>redis.lua<br> local args = ngx.req.get_uri.args()<br> local id = agrs[&quot;id&quot;]<br> local cache = redis:new()<br> local ok,err = cache:connect(&quot;127.0.0.1&quot;,6379)<br> local item_model = cache:get(&quot;&quot;item_&quot;..id)<br> if item_model == ngx.null or item_model == nil then<br> local resp = ngx.location.capture(&quot;/item/get?id=&quot;..id);<br> item_model =resp.body<br> end</p><p>ngx.say(item_model)</p><h3 id="动态缓存cdn-访问静态资源html" tabindex="-1"><a class="header-anchor" href="#动态缓存cdn-访问静态资源html"><span>动态缓存cdn(访问静态资源html)</span></a></h3><ul><li><p>静态请求CDN（使用阿里云CDN加速和配置CNAME）<br> DNS用CNAME解析到源站，域名解析分成A解析和CNAME解析等A解析就是域名-&gt;ip,而CNAME就是将请求发送到CNAME指定的服务器，然后由CNAME的服务器处理，此时CNAME的服务器会指向一个最近的服务器ip，该服务器会判断是否有缓存，没有则请求源站（回源）</p></li><li><p>回源缓冲设置</p></li><li><p>cache control响应头</p></li><li><p>private 客户端可以缓存（默认）</p></li><li><p>public：客户端和代理服务器都可以缓存</p></li><li><p>max-age=xxx:缓存的内容将在xxx秒后失效</p></li><li><p>no-cache：强制向服务端再验证一次</p><ul><li>有效性判断：ETag资源唯一标识，</li><li>Etag一致则 if-None-Match 客户端发送的匹配Etag标识符-&gt;一致则304</li><li>Etag不致则 -&gt;Last-modified: 资源最后被修改时间 if-Modified-Since:客户端发送的匹配资源最后修改时间的标识符 -&gt;一致则304</li></ul></li><li><p>no-store:不缓存请求的任何返回内容</p></li><li><p>浏览器的三种刷新方式</p></li><li><p>回车或a链接：cache-control对应的max-age是否仍然有效，有效则直接from cache，若cache-control中为no-cache，则进入缓存协商逻辑</p></li><li><p>F5刷新或command+R刷新：去掉cache-control中的max-age或直接设置max-age为0，然后进入缓存协商逻辑</p></li><li><p>ctrl+F5或commond+shift+R刷新：去掉cache-control和协商头，强制刷新</p></li><li><p>协商机制，比较Last-modified和Etag到服务端，若服务端判断没变化则304不返回数据否则200返回数据</p></li><li><p>CDN自定义缓存策略</p></li><li><p>可自定义目录过期时间</p></li><li><p>可自定义后缀名过期时间</p></li><li><p>可自定义对应权重</p></li><li><p>可通过界面或api强制刷新cdn对应目录刷新（非保成功，有通信限制）</p></li><li><p>静态资源cdn深入讲解--CDN自定义缓存策略04:16</p></li><li><p>静态资源部署策略</p></li><li><p>html必定no-cache或者max-age很短,便于更新。html文件或者设置较长的max age。依靠动态的获取版本号请求（对比版本号）发送到后端，异步下载最新的版本号的html后展示渲染在前端</p></li><li><p>css,js,img等元素使用带版本号部署，a.js?v=1.0，不便利，维护困难</p></li><li><p>css,js,img等元素使用带摘要部署，例如a.js?v=45edw存在先部署html还是先部署资源的覆盖问题，因为所有html与资源都要更新</p></li><li><p>（推荐）css,js,img等元素使用摘要做文件名，例如45edw.js,新老版本并存且可回滚，资源部署后再部署html-&gt;css,js,img对应静态资源保持生命周期内不会变，max-age可设置的很长，无视失效更新周期</p></li><li><p>动态请求也可以静态化成json资源推送到cdn上（获取商品）</p></li><li><p>前端先显示旧版本，因为cdn推送不一定成功，所以可以再依靠异步请求获取后端节点比对版本号，不一致则可以对对应资源状态做紧急下架处理（覆盖）</p></li><li><p>可通过跑批紧急推送cdn内容以使其下架等操作</p></li></ul><p>强推失效</p><ul><li><p>全页面静态化</p></li><li><p>html，css，js静态资源cdn化+js ajax 动态请求cdn化=全页面静态化</p></li><li><p>在服务端完成html，css，甚至js的load渲染成html文件后直接以静态资源的方式部署到cdn上（已渲染好的页面）</p></li><li><p>使用phantomjs（本质爬虫）</p></li><li><p>无头浏览器，可以借助器模拟webkit js的执行<br> 修改需要全页面静态化的实现，采用initView和hasInit方式防止多次初始化(写程序保证只加载一次)<br> 编写对应轮询生成内容方式<br> 将全静态话页面生成后推送到cdn</p></li></ul>`,24),z=e("br",null,null,-1),J=e("br",null,null,-1),G=e("br",null,null,-1),F={href:"http://xxxx",target:"_blank",rel:"noopener noreferrer"},V=e("br",null,null,-1),U=e("br",null,null,-1),B=e("br",null,null,-1),X={href:"//page.evaluate",target:"_blank",rel:"noopener noreferrer"},Z=e("br",null,null,-1),K=e("br",null,null,-1),W=e("br",null,null,-1),$=e("br",null,null,-1),Y=e("br",null,null,-1),ee=s(`<p>})</p><p>bin/phantomjs js/genitem.js</p><h3 id="动态请求缓存" tabindex="-1"><a class="header-anchor" href="#动态请求缓存"><span>动态请求缓存</span></a></h3><h3 id="页面静态化" tabindex="-1"><a class="header-anchor" href="#页面静态化"><span>页面静态化</span></a></h3><h2 id="交易泄压" tabindex="-1"><a class="header-anchor" href="#交易泄压"><span>交易泄压</span></a></h2><h3 id="缓存库存" tabindex="-1"><a class="header-anchor" href="#缓存库存"><span>缓存库存</span></a></h3><p>交易性能瓶颈<br> 交易验证完全依赖数据库(判断商品和用户，活动信息)<br> 数据库行锁；某个id（扣减库存）<br> 后置处理逻辑（保存订单，增加销量）</p><p>交易验证优化<br> 用户风控策略优化：策略缓存模型优化（放redis并设置超时时间）<br> 活动校验策略优化（放redis并设置超时时间）：引入活动发布流程，模型缓存化，紧急下线能力（异常商品去掉redis缓存即可）</p><p>库存行锁优化<br> update的时候如果没有指定索引的话会锁表，有索引的话有行锁，行锁保证某条数据的更新操作串行化</p><p>扣减缓存异步化-&gt;1.活动发布同步库存进缓存-&gt;2.下单交易减库存缓存<br> 异步同步数据库-&gt;3.异步事务型消息扣减数据库内库存（异步消息队列rocketmq）高性能，高并发，分布式消息中间件<br> 应用，分布式事务，异步解耦（producer，name server consumer（注册中心），consumer group（consumer），broker（queue））-&gt;引入库存操作流水（库存数量，商品id，操作流水号，订单状态，操作前insert初始状态，操作完update为已扣减库存状态，操作中select查看操作状态，若为已扣减，则提交事务，否则回滚事务）-&gt;库存数据库最终一致性保证<br> redis不能用时如何处理？扣减流水错误如何处理？</p><p>库存设计原则：<br> 宁可少卖，不能超卖<br> redis可以比实际数据库中少，订单长时间没处理时，需要超时释放库存，把库存加回去</p><p>分布式事务<br> CAP理论，最终一致性BASE<br> 安装rocketmq<br> 下载rocketmq<br> chomd -R 777<br> yum install unzip<br> unzip rocketmq-all-4.4.0-release.zip<br> cd rocketmq-all-4.4.0-release<br> nohup sh bin/mqnamesrv(9876端口)<br> nohup sh bin/mqbroker -n localhost:9876</p><p>mq.nameserver=xxxx:port<br> mq.topicname=xx</p><pre><code>&lt;dependency&gt;
  &lt;groupId&gt;org.apache.rocketmq&lt;/groupId&gt;
  &lt;artifactId&gt;rocketmq-client&lt;/artifactId&gt;
  &lt;version&gt;4.3.0&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//异步修改库存，要保证数据库插入订单和redis扣减库存成功后才异步把数据库扣减
TransactionSynchronizationManager.registerSynchronization(new TransactionSynchronizationAdapter() {
    @Override
    public void afterCommit() {

        super.afterCommit();
    }
});

确保最近的事务提交完成后会触发
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@Component
public class MqProducer {

    @Autowired
    private DefaultMQProducer producer;

    @Autowired
    private TransactionMQProducer transactionMQProducer;

    @Value(&quot;\${mq.nameserver.addr}&quot;)
    private String nameAddr;

    @Value(&quot;\${mq.topicname}&quot;)
    private String topicName;

    @PostConstruct
    public void init() throws MQClientException {
        producer = new DefaultMQProducer(&quot;producer_group&quot;);
        producer.setNamesrvAddr(nameAddr);
        producer.start();

        transactionMQProducer = new TransactionMQProducer(&quot;transaction_producer_group&quot;);
        transactionMQProducer.setNamesrvAddr(nameAddr);
        transactionMQProducer.start();
        transactionMQProducer.setTransactionListener(new TransactionListener() {
            @Override
            public LocalTransactionState executeLocalTransaction(Message message, Object o) {
                 //真正要做的事  创建订单
                Integer itemId = (Integer) ((Map)arg).get(&quot;itemId&quot;);
                Integer promoId = (Integer) ((Map)arg).get(&quot;promoId&quot;);
                Integer userId = (Integer) ((Map)arg).get(&quot;userId&quot;);
                Integer amount = (Integer) ((Map)arg).get(&quot;amount&quot;);
                String stockLogId = (String) ((Map)arg).get(&quot;stockLogId&quot;);
                try {
                    orderService.createOrder(userId,itemId,promoId,amount,stockLogId);
                } catch (BusinessException e) {
                    e.printStackTrace();
                    //设置对应的stockLog为回滚状态
                    StockLogDO stockLogDO = stockLogDOMapper.selectByPrimaryKey(stockLogId);
                    stockLogDO.setStatus(3);
                    stockLogDOMapper.updateByPrimaryKeySelective(stockLogDO);
                    return LocalTransactionState.ROLLBACK_MESSAGE;
                }
                return LocalTransactionState.COMMIT_MESSAGE;
            }

            @Override
            //事务执行时间太长的时候rocketmq要回调这个方法，这里应该检查redis库存
            public LocalTransactionState checkLocalTransaction(MessageExt messageExt) {
		        //查询操作流水中操作的状态，用数据库并传入流水号
                //如果订单状态为已扣减，则成功，否则unknown
                return null;
            }
        });
    }
    //事务性扣减库存
    //事务型同步库存扣减消息
    public boolean transactionAsyncReduceStock(Integer userId,Integer itemId,Integer promoId,Integer amount,String stockLogId){
        Map&lt;String,Object&gt; bodyMap = new HashMap&lt;&gt;();
        bodyMap.put(&quot;itemId&quot;,itemId);
        bodyMap.put(&quot;amount&quot;,amount);
        bodyMap.put(&quot;stockLogId&quot;,stockLogId);

        Map&lt;String,Object&gt; argsMap = new HashMap&lt;&gt;();
        argsMap.put(&quot;itemId&quot;,itemId);
        argsMap.put(&quot;amount&quot;,amount);
        argsMap.put(&quot;userId&quot;,userId);
        argsMap.put(&quot;promoId&quot;,promoId);
        argsMap.put(&quot;stockLogId&quot;,stockLogId);

        Message message = new Message(topicName,&quot;increase&quot;,
                JSON.toJSON(bodyMap).toString().getBytes(Charset.forName(&quot;UTF-8&quot;)));
        TransactionSendResult sendResult = null;
        try {

            sendResult = transactionMQProducer.sendMessageInTransaction(message,argsMap);
        } catch (MQClientException e) {
            e.printStackTrace();
            return false;
        }
        if(sendResult.getLocalTransactionState() == LocalTransactionState.ROLLBACK_MESSAGE){
            return false;
        }else if(sendResult.getLocalTransactionState() == LocalTransactionState.COMMIT_MESSAGE){
            return true;
        }else{
            return false;
        }

    }
    //无事务发送
    public boolean send(String itemId,Integer amount) {
        Map&lt;String,Object&gt; bodyMap = new HashMap&lt;&gt;();
        bodyMap.put(&quot;itemId&quot;,itemId);
        bodyMap.put(&quot;amount&quot;,amount);
        Message message = new Message(topicName,&quot;increse&quot;,
                JSON.toJSON(bodyMap).toString().getBytes(Charset.forName(&quot;UTF-8&quot;)));
        try {
            producer.send(message);
        } catch (MQClientException e) {
            e.printStackTrace();
            return false;
        } catch (RemotingException e) {
            e.printStackTrace();
            return false;
        } catch (MQBrokerException e) {
            e.printStackTrace();
            return false;
        } catch (InterruptedException e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@Component
public class MqConsumer {

    @Autowired
    private DefaultMQPushConsumer consumer;

    @Value(&quot;\${mq.nameserver.addr}&quot;)
    private String nameAddr;

    @Value(&quot;\${mq.topicname}&quot;)
    private String topicName;

    @PostConstruct
    public void init() throws MQClientException {
        consumer = new DefaultMQPushConsumer(&quot;stock_consumer_group&quot;);
        consumer.setNamesrvAddr(nameAddr);
        consumer.subscribe(topicName,&quot;*&quot;);
        consumer.registerMessageListener(new MessageListenerConcurrently() {
            @Override
            public ConsumeConcurrentlyStatus consumeMessage(List&lt;MessageExt&gt; list, ConsumeConcurrentlyContext consumeConcurrentlyContext) {
                Message msg = list.get(0);
                String body = new String(msg.getBody());
                return ConsumeConcurrentlyStatus.CONSUME_SUCCESS;
            }
        });
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="交易异步化" tabindex="-1"><a class="header-anchor" href="#交易异步化"><span>交易异步化</span></a></h3><h3 id="异步化事务" tabindex="-1"><a class="header-anchor" href="#异步化事务"><span>异步化事务</span></a></h3><p>操作流水<br> 数据类型<br> 主业务数据master data<br> 操作性数据log data</p><p>库存售罄<br> 库存售罄标识，放到redis<br> 出售前判断是否售罄，售罄后不去操作后续流程<br> 售罄后通知各系统售罄<br> 回补上新</p><p>后置流程<br> 销量逻辑异步化<br> 交易单逻辑异步化（生成交易单sequence后直接异步返回，前端轮询异步单状态）</p><h2 id="流量错峰" tabindex="-1"><a class="header-anchor" href="#流量错峰"><span>流量错峰</span></a></h2><p>流量削峰技术<br> 秒杀下单接口会被脚本不停的刷<br> 秒杀验证逻辑和秒杀下单接口强关联，代码冗余度高-&gt;引入秒杀令牌<br> 秒杀验证逻辑复杂，对交易系统产生无关联负载-&gt;引入秒杀令牌</p><h3 id="秒杀令牌" tabindex="-1"><a class="header-anchor" href="#秒杀令牌"><span>秒杀令牌</span></a></h3><p>秒杀令牌原理（少流量）<br> 秒杀接口需要依靠令牌才能进入（uid+商品id+秒杀id）<br> 秒杀的令牌由秒杀模块生成<br> 秒杀活动模块对秒杀令牌生成全权处理（将验证用户，商品，活动迁移到令牌生成，没有令牌不能下单，放redis，前端需要单独获取秒杀令牌，后端单独写秒杀令牌），逻辑收口（没有令牌不往下走）<br> 秒杀下单前需要获得秒杀令牌，没有令牌则不能下单</p><h3 id="秒杀大闸" tabindex="-1"><a class="header-anchor" href="#秒杀大闸"><span>秒杀大闸</span></a></h3><p>秒杀令牌只要活动一开始就无限制生成，影响系统性能<br> 解决方案：依靠秒杀令牌的授权原理定制化发牌逻辑，做到大闸功能，<br> 根据秒杀商品初始库存颁发对应数量的令牌，控制大闸流量，在redis保存库存数乘以系数个数量，然后放到redis中，每次生成秒杀令牌减掉1然后为0则不再发牌<br> 用户风控策略前置到秒杀令牌发放中<br> 库存售罄判断前置到秒杀令牌发放中</p><h3 id="队列泄洪" tabindex="-1"><a class="header-anchor" href="#队列泄洪"><span>队列泄洪</span></a></h3><p>浪涌流量涌入后系统无法应对（超大流量）<br> 多库存，多商品等令牌限制能力弱<br> 解决方案-&gt;队列泄洪原理<br> 排队有时候比并发更高效（redis单线程模型 innodb mutex key等）<br> 依靠排队去限制并发流量<br> 依靠排队和下游拥塞窗口程度调整队列释放流量大小-&gt;支付宝银行网关队列举例,支付宝做拥塞窗口处理，保证下游银行的tps</p><p>实现 本地：将队列维护在本地内存中（生产环境，推荐）<br> 分布式：将队列设置到外部redis内，性能太差，负载大<br> 企业一般是集中式异常，超时后转本地<br> private ExecutorService executorService;</p><pre><code>@PostConstruct
public void init(){
    executorService = Executors.newFixedThreadPool(20);

}

    Future&lt;Object&gt; submit = executorService.submit(new Callable&lt;Object&gt;() {
        @Override
        public Object call() throws Exception {

            return null;

        }
    });
    try {
        submit.get();
    } catch (InterruptedException e) {
        e.printStackTrace();
    } catch (ExecutionException e) {
        e.printStackTrace();
    }
    return;
</code></pre><h2 id="防刷限流" tabindex="-1"><a class="header-anchor" href="#防刷限流"><span>防刷限流</span></a></h2><h3 id="验证码" tabindex="-1"><a class="header-anchor" href="#验证码"><span>验证码</span></a></h3><p>包装秒杀令牌前置，需要验证码来错峰<br> 数学公式验证码生成器,生成验证码返回给前端，然后放入redis在生成秒杀令牌时校验一下，没有校验过的不发放秒杀令牌</p><h3 id="限流器" tabindex="-1"><a class="header-anchor" href="#限流器"><span>限流器</span></a></h3><p>系统宁愿只让少数人能用，不能让所有人不能用<br> 方案<br> 1.限制并发 tps 每秒处理请求数量（不用）<br> 2.令牌桶算法 令牌桶算法的原理是系统会以一个恒定的速度往桶里放入令牌，而如果请求需要被处理，则需要先从桶里获取一个令牌，当桶里没有令牌可取时，则拒绝服务。（常用）<br> 3.漏桶算法，水（请求）先进入到漏桶里，漏桶以一定的速度出水，当水流入速度过大会直接溢出，可以看出漏桶算法能强行限制数据的传输速率。</p><p>对于很多应用场景来说，除了要求能够限制数据的平均传输速率外，还要求允许某种程度的突发传输。这时候漏桶算法可能就不合适了，令牌桶算法更为适合。</p><p>限流力度<br> 接口维度（限制controller）<br> 总维度（计算机资源限制）</p><p>限流范围<br> 集群限流：依赖redis或其他中间件技术做统一计数器，往往会产生性能瓶颈<br> 单机限流：负载均衡的前提下单机平均限流效果更好</p><pre><code>&lt;dependency&gt;
  &lt;groupId&gt;com.google.guava&lt;/groupId&gt;
  &lt;artifactId&gt;guava&lt;/artifactId&gt;
  &lt;version&gt;18.0&lt;/version&gt;
&lt;/dependency&gt;
private RateLimiter rateLimiter;

@PostConstruct
public  void init(){
    rateLimiter = RateLimiter.create(300);
}

    if(!rateLimiter.tryAcquire()){
        throw new RuntimeException(&quot;xxx&quot;);
    }
</code></pre><h3 id="防黄牛" tabindex="-1"><a class="header-anchor" href="#防黄牛"><span>防黄牛</span></a></h3><p>排队，限流，令牌均只能控制总流量，无法控制黄牛流量<br> 传统防刷<br> 限制一个会话(session_id,token)同一秒钟/分钟接口调用多少次-&gt;多会话接口绕开无效<br> 限制一个ip同一秒钟/分钟 接口调用多少次，数量不好控制-&gt;容易误伤</p><p>使用设备指纹防刷<br> 采集终端设备各项参数，启动应用时生成唯一设备指纹<br> 根据对应设备指纹的参数猜测出模拟器等可疑设备概率</p><p>凭证系统<br> 根据设备指纹下发凭证<br> 关键业务链路上带上凭证并由业务系统到凭证服务器上验证<br> 凭证服务器根据对应凭证所等价的设备指纹参数并根据实时行为风控系统判定对应凭证的可疑分数<br> 若分数低于某个数值则业务系统返回固定错误码，拉起前端验证码验身，验身成功后加入凭证服务器对应分数</p><p>H5最难防</p><h2 id="性能测试" tabindex="-1"><a class="header-anchor" href="#性能测试"><span>性能测试</span></a></h2><h3 id="jemeter压测" tabindex="-1"><a class="header-anchor" href="#jemeter压测"><span>jemeter压测</span></a></h3><ul><li>线程组 高并发压测 -&gt;发送http请求 -&gt;查看结果树 -&gt;聚合报告 tps qps :</li><li>新建测试计划 <ul><li>添加线程组-&gt;线程数-&gt;Ramp-up时间（多少秒内启动所有线程）-&gt;循环次数(每个线程调用接口几次) <ul><li>添加http请求-&gt;名称-&gt;协议-&gt;服务器名称ip-&gt;请求方法-&gt;路径,同时选择keep-alive，因为要测的是返回时间而不是连接断开或者连接的时间 <ul><li>高级-&gt;客户端实现一定要选java</li></ul></li><li>添加察看结果树</li><li>添加聚合报表 <ul><li>Throughput (tps)每秒能接受多少流量</li><li>Average平均响应时间</li><li>Median中位线响应时间</li><li>90%Line 90%响应时间小于多少毫秒</li><li>Min最小返回时间</li></ul></li></ul></li></ul></li></ul><h3 id="压测优化" tabindex="-1"><a class="header-anchor" href="#压测优化"><span>压测优化</span></a></h3><h3 id="分布式会话管理-1" tabindex="-1"><a class="header-anchor" href="#分布式会话管理-1"><span>分布式会话管理</span></a></h3><p>分布式会话持久性管理-&gt;放redis，一定要redis高可用（redis cluster）<br> 会话有效期时间，tomcat默认30分钟，不与服务器发生交互的呆滞时间<br> 会话续命管理，触发操作延长生命周期，延长到30min，不是加30min<br> 安全性问题，用安全传输的https，但也会被浏览器捕获，最安全使用自定义协议并使用app提高安全性</p><p>强登录态与弱登录态<br> 强登录态：&gt;需要登录才能操作<br> 无需登录<br> 弱登录态: &gt;千人千面的智能推荐，电商，续命能力弱<br> 弱登录续命：&gt;1.请求续命，2.页面使用定时器请求续命（keepalive续命）</p><p>sso单点登录<br> 只要域名不一样时，cookie就不一样</p>`,54),ne={href:"http://wwww.xxx.com/a/",target:"_blank",rel:"noopener noreferrer"},ie={href:"http://wwww.xxx.com/b/",target:"_blank",rel:"noopener noreferrer"},le={href:"http://wap.a.com",target:"_blank",rel:"noopener noreferrer"},se={href:"http://www.a.com",target:"_blank",rel:"noopener noreferrer"},ae=e("ul",null,[e("li",null,"httpOnly = false/true(除了浏览器自身，js无法访问cookieid)"),e("li",null,"domain =/ 只要访问同一个一级域名时cookie域名就一样")],-1),te={href:"http://a.com",target:"_blank",rel:"noopener noreferrer"},re={href:"http://b.com",target:"_blank",rel:"noopener noreferrer"},de=s(`<p>mysql应用性能优化拓展:&gt;缓存，异步，批处理<br> 写操作：批量insert 批量update 批量写，sql编译N次和1次的时间与空间复杂度，网络消耗的时间复杂度 磁盘寻址的复杂度<br> 读操作：索引<br> mysql单机配置性能优化拓展 执行sql前先写undo/redo日志顺序写，写数据则是随机读写<br> max_connection=1000默认100<br> innodb_file_per_table=1,每个table一个文件<br> innodb_buffer_pool_size=1G 写数据缓冲区大小，越大越容易命中buffer缓存，内存60%-80%</p><p>innodb_log_file_size=256M redo/undo日志大小<br> innodb_log_buffer_size=16M 日志满了切换的时候添加buffer缓冲</p><p>innodb_flush_log_at_trx_commit=2需要放在【mysqlId_safe】节点下，默认1，事务提交立马刷盘</p><p>innodb_data_file_path=ibdata1:1G;ibdata2:1G;ibdata3:1G;autoextend,数据量大时分区</p><p>秒杀系统扣减库存</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token operator">--</span> 库存未预热
<span class="token keyword">if</span> <span class="token punctuation">(</span>redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token char">&#39;exists&#39;</span><span class="token punctuation">,</span> KEYS<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> then
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">;</span>
end<span class="token punctuation">;</span>
<span class="token operator">--</span> 秒杀商品库存存在
<span class="token keyword">if</span> <span class="token punctuation">(</span>redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token char">&#39;exists&#39;</span><span class="token punctuation">,</span> KEYS<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> then
    local stock <span class="token operator">=</span> <span class="token function">tonumber</span><span class="token punctuation">(</span>redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token char">&#39;get&#39;</span><span class="token punctuation">,</span> KEYS<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    local num <span class="token operator">=</span> <span class="token function">tonumber</span><span class="token punctuation">(</span>ARGV<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">--</span> 剩余库存少于请求数量
    <span class="token keyword">if</span> <span class="token punctuation">(</span>stock <span class="token operator">&lt;</span> num<span class="token punctuation">)</span> then
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">3</span>
    end<span class="token punctuation">;</span>
    <span class="token operator">--</span> 扣减库存
    <span class="token keyword">if</span> <span class="token punctuation">(</span>stock <span class="token operator">&gt;=</span> num<span class="token punctuation">)</span> then
        redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token char">&#39;incrby&#39;</span><span class="token punctuation">,</span> KEYS<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0</span> <span class="token operator">-</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token operator">--</span> 扣减成功
        <span class="token keyword">return</span> <span class="token number">1</span>
    end<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">;</span>
end<span class="token punctuation">;</span>
<span class="token operator">--</span> 秒杀商品库存不存在
<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function oe(ce,ue){const l=a("ExternalLinkIcon"),o=a("groupId"),c=a("artifactId"),u=a("version"),p=a("dependency");return r(),d("div",null,[b,e("ul",null,[g,h,x,e("li",null,[n("添加环境变量vim ~/.bash_profile "),e("ul",null,[e("li",null,[n("添加JAVA_HOME=/usr/java/jdk1.8.0_65 PATH="),e("mjx-container",_,[(r(),d("svg",k,y)),f]),n("JAVA_HOME/bin")]),Q,q])])]),w,e("ul",null,[S,M,C,e("li",null,[e("a",I,[n("deploy.sh"),i(l)]),n(" 文件 nohup java -Xms400m -Xmx400m -XX:NewSize=200m -XX:MaxNewSize=200m -jar miaosha.jar --spring.config.addition-location=/var/www/miaosha/application.properties")]),e("li",null,[n("chmod 777 "),e("a",j,[n("deploy.sh"),i(l)])])]),E,e("p",null,[n("先去取本地缓存->redis->mysql"),P,i(p,null,{default:t(()=>[O,i(o,null,{default:t(()=>[n("com.google.guava")]),_:1}),H,i(c,null,{default:t(()=>[n("guava")]),_:1}),A,i(u,null,{default:t(()=>[n("18.0")]),_:1}),R]),_:1}),L,n(" @Service"),N,n(" public class CacheServiceImpl implements CacheService {")]),D,e("p",null,[n("xxx.js"),z,n(' var page = require("webpage").create();'),J,n(' var fs = require("fs");'),G,n(' page.open("'),e("a",F,[n("http://xxxx"),i(l)]),n('",function(status){'),V,n(' console.log("status = " + status);'),U,n(" setTimeout(function(){"),B,e("a",X,[n("//page.evaluate"),i(l)]),n("(function(){"),Z,n(" //调用拿到的请求的html里面的函数 "),K,n(" //});"),W,n(' fs.write("xxxx.html",page.content,"w");'),$,n(" phantom.exit();"),Y,n(" },1000);")]),ee,e("ul",null,[e("li",null,[n("同域名：>cookie一样，"),e("a",ne,[n("wwww.xxx.com/a/"),i(l)]),n(),e("a",ie,[n("wwww.xxx.com/b/"),i(l)])]),e("li",null,[n("根域名相同，子域名不同 "),e("a",le,[n("wap.a.com"),i(l)]),n(),e("a",se,[n("www.a.com"),i(l)]),ae]),e("li",null,[n("域名都不相同 "),e("a",te,[n("a.com"),i(l)]),n(),e("a",re,[n("b.com"),i(l)]),n(" 通过sso服务配合redirect，颁发cookie，然后返回需要请求的服务，服务缓存起来，后再去sso校验，成功后就继续服务，cookie颁发后一定要有有效期，或者强制更改手段，手动删除")])]),de])}const me=v(m,[["render",oe],["__file","秒杀项目.html.vue"]]),be=JSON.parse('{"path":"/backend/systemdesign/%E7%A7%92%E6%9D%80%E9%A1%B9%E7%9B%AE.html","title":"秒杀项目","lang":"zh-CN","frontmatter":{"title":"秒杀项目","date":"2023-01-01T00:00:00.000Z","tags":"项目","categories":"架构设计","description":"电商秒杀系统-核心高性能解决方案 分层设计 接入层模型 View Object 与前端对接的模型，隐藏内部实现，仅展示的聚合模型 业务层模型 Domain Object 领域模型，业务核心模型，拥有生命周期贫血以及服务输出能力 （贫血模型，只有数据库对应字段，不提供其他功能，其他功能由sevice提供，比如用户模型只有username password...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/systemdesign/%E7%A7%92%E6%9D%80%E9%A1%B9%E7%9B%AE.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"秒杀项目"}],["meta",{"property":"og:description","content":"电商秒杀系统-核心高性能解决方案 分层设计 接入层模型 View Object 与前端对接的模型，隐藏内部实现，仅展示的聚合模型 业务层模型 Domain Object 领域模型，业务核心模型，拥有生命周期贫血以及服务输出能力 （贫血模型，只有数据库对应字段，不提供其他功能，其他功能由sevice提供，比如用户模型只有username password..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"秒杀项目\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"分层设计","slug":"分层设计","link":"#分层设计","children":[]},{"level":2,"title":"环境部署","slug":"环境部署","link":"#环境部署","children":[{"level":3,"title":"jdk安装","slug":"jdk安装","link":"#jdk安装","children":[]},{"level":3,"title":"mysql安装","slug":"mysql安装","link":"#mysql安装","children":[]},{"level":3,"title":"jar上传","slug":"jar上传","link":"#jar上传","children":[]},{"level":3,"title":"安装nginx","slug":"安装nginx","link":"#安装nginx","children":[]}]},{"level":2,"title":"分布式","slug":"分布式","link":"#分布式","children":[{"level":3,"title":"单台应用","slug":"单台应用","link":"#单台应用","children":[]},{"level":3,"title":"nginx反向代理(水平扩展)","slug":"nginx反向代理-水平扩展","link":"#nginx反向代理-水平扩展","children":[]},{"level":3,"title":"分布式会话管理","slug":"分布式会话管理","link":"#分布式会话管理","children":[]}]},{"level":2,"title":"查询多级缓存（丢失）","slug":"查询多级缓存-丢失","link":"#查询多级缓存-丢失","children":[{"level":3,"title":"redis缓存","slug":"redis缓存","link":"#redis缓存","children":[]},{"level":3,"title":"本地缓存","slug":"本地缓存","link":"#本地缓存","children":[]},{"level":3,"title":"nginx proxy 缓存（少用，因为还是访问文件）","slug":"nginx-proxy-缓存-少用-因为还是访问文件","link":"#nginx-proxy-缓存-少用-因为还是访问文件","children":[]},{"level":3,"title":"nginx lua缓存（放nginx内存，推荐）","slug":"nginx-lua缓存-放nginx内存-推荐","link":"#nginx-lua缓存-放nginx内存-推荐","children":[]},{"level":3,"title":"动态缓存cdn(访问静态资源html)","slug":"动态缓存cdn-访问静态资源html","link":"#动态缓存cdn-访问静态资源html","children":[]},{"level":3,"title":"动态请求缓存","slug":"动态请求缓存","link":"#动态请求缓存","children":[]},{"level":3,"title":"页面静态化","slug":"页面静态化","link":"#页面静态化","children":[]}]},{"level":2,"title":"交易泄压","slug":"交易泄压","link":"#交易泄压","children":[{"level":3,"title":"缓存库存","slug":"缓存库存","link":"#缓存库存","children":[]},{"level":3,"title":"交易异步化","slug":"交易异步化","link":"#交易异步化","children":[]},{"level":3,"title":"异步化事务","slug":"异步化事务","link":"#异步化事务","children":[]}]},{"level":2,"title":"流量错峰","slug":"流量错峰","link":"#流量错峰","children":[{"level":3,"title":"秒杀令牌","slug":"秒杀令牌","link":"#秒杀令牌","children":[]},{"level":3,"title":"秒杀大闸","slug":"秒杀大闸","link":"#秒杀大闸","children":[]},{"level":3,"title":"队列泄洪","slug":"队列泄洪","link":"#队列泄洪","children":[]}]},{"level":2,"title":"防刷限流","slug":"防刷限流","link":"#防刷限流","children":[{"level":3,"title":"验证码","slug":"验证码","link":"#验证码","children":[]},{"level":3,"title":"限流器","slug":"限流器","link":"#限流器","children":[]},{"level":3,"title":"防黄牛","slug":"防黄牛","link":"#防黄牛","children":[]}]},{"level":2,"title":"性能测试","slug":"性能测试","link":"#性能测试","children":[{"level":3,"title":"jemeter压测","slug":"jemeter压测","link":"#jemeter压测","children":[]},{"level":3,"title":"压测优化","slug":"压测优化","link":"#压测优化","children":[]},{"level":3,"title":"分布式会话管理","slug":"分布式会话管理-1","link":"#分布式会话管理-1","children":[]}]}],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":28.27,"words":8482},"filePathRelative":"backend/systemdesign/秒杀项目.md","localizedDate":"2023年1月1日","excerpt":"\\n<h2>分层设计</h2>\\n<ul>\\n<li>接入层模型 View Object 与前端对接的模型，隐藏内部实现，仅展示的聚合模型</li>\\n<li>业务层模型 Domain Object 领域模型，业务核心模型，拥有生命周期贫血以及服务输出能力 （贫血模型，只有数据库对应字段，不提供其他功能，其他功能由sevice提供，比如用户模型只有username password 不会有注册等功能，充血模型则表示用户模型包括username password之外还能提供注册功能）可以处理用户生命周期，例如从注册登录到退出，包含多个数据模型，例如用户包括用户基础信息数据模型和用户密码信息数据模型</li>\\n<li>数据层 Data Object数据模型，同数据库映射，用以ORM方式操作数据库的能力模型<br>\\n-- 用户密码会与用户信息分开存储，用户密码会放在加密数据库中，而平时只用到用户的基础信息</li>\\n</ul>","autoDesc":true}');export{me as comp,be as data};
