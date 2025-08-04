import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as a,e as n}from"./app-7KT7HDzT.js";const t={},s=n(`<p>mycat是用来做数据库集群的</p><h2 id="什么是mycat" tabindex="-1"><a class="header-anchor" href="#什么是mycat"><span>什么是MyCAT？</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>简单的说，MyCAT就是：
一个彻底开源的，面向企业应用开发的“大数据库集群”
支持事务、ACID、可以替代Mysql的加强版数据库
一个可以视为“Mysql”集群的企业级数据库，用来替代昂贵的Oracle集群
一个融合内存缓存技术、Nosql技术、HDFS大数据的新型SQL Server
结合传统数据库和新型分布式数据仓库的新一代企业级数据库产品
一个新颖的数据库中间件产品
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mycat的关键特性" tabindex="-1"><a class="header-anchor" href="#mycat的关键特性"><span>MyCAT的关键特性</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>支持 SQL 92标准
支持Mysql集群，可以作为Proxy使用
支持JDBC连接ORACLE、DB2、SQL Server，将其模拟为MySQL  Server使用
支持galera for mysql集群，percona-cluster或者mariadb cluster，提供高可用性数据分片集群
自动故障切换，高可用性
支持读写分离，支持Mysql双主多从，以及一主多从的模式
支持全局表，数据自动分片到多个节点，用于高效表关联查询
支持独有的基于E-R 关系的分片策略，实现了高效的表关联查询
多平台支持，部署和实施简单
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mycat架构" tabindex="-1"><a class="header-anchor" href="#mycat架构"><span>MyCAT架构</span></a></h2><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/be77b7731e8a7d473fae0.png" alt="图片1.png" tabindex="0"><figcaption>图片1.png</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>如图所示：MyCAT使用Mysql的通讯协议模拟成了一个Mysql服务器，并建立了完整的Schema（数据库）、Table （数据表）、User(用户)的逻辑模型，
并将这套逻辑模型映射到后端的存储节点DataNode（MySQL Instance）上的真实物理库中，
这样一来，所有能使用Mysql的客户端以及编程语言都能将MyCAT当成是Mysql Server来使用，不必开发新的客户端协议。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mycat解决的问题" tabindex="-1"><a class="header-anchor" href="#mycat解决的问题"><span>Mycat解决的问题</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>性能问题
数据库连接过多
E-R分片难处理
可用性问题
成本和伸缩性问题
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/68e7f50ac03acbda118c5.png" alt="图片2.png" tabindex="0"><figcaption>图片2.png</figcaption></figure><h2 id="mycat对多数据库的支持" tabindex="-1"><a class="header-anchor" href="#mycat对多数据库的支持"><span>Mycat对多数据库的支持</span></a></h2><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/49b80914303756fdc7d09.png" alt="图片3.png" tabindex="0"><figcaption>图片3.png</figcaption></figure><h2 id="分片策略" tabindex="-1"><a class="header-anchor" href="#分片策略"><span>分片策略</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>MyCAT支持水平分片与垂直分片：
水平分片：一个表格的数据分割到多个节点上，按照行分隔。
垂直分片：一个数据库中多个表格A，B，C，A存储到节点1上，B存储到节点2上，C存储到节点3上。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/3bf27b197b0c27e368119.png" alt="图片4.png" tabindex="0"><figcaption>图片4.png</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>MyCAT通过定义表的分片规则来实现分片，每个表格可以捆绑一个分片规则，每个分片规则指定一个分片字段并绑定一个函数，来实现动态分片算法。

Schema：逻辑库，与MySQL中的Database（数据库）对应，一个逻辑库中定义了所包括的Table。
Table：表，即物理数据库中存储的某一张表，表格需要声明其所存储的逻辑数据节点DataNode。在此可以指定表的分片规则。
DataNode：MyCAT的逻辑数据节点，是存放table的具体物理节点，也称之为分片节点，通过DataSource来关联到后端某个具体数据库上
DataSource：定义某个物理库的访问地址，用于捆绑到Datanode上
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mycat读写分离" tabindex="-1"><a class="header-anchor" href="#mycat读写分离"><span>Mycat读写分离</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>数据库读写分离对于大型系统或者访问量很高的互联网应用来说，是必不可少的一个重要功能。对于MySQL来说，标准的读写分离是主从模式，
一个写节点Master后面跟着多个读节点，读节点的数量取决于系统的压力，通常是1-3个读节点的配置
Mycat读写分离和自动切换机制，需要mysql的主从复制机制配合。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/c4d3eb1798cca24863085.png" alt="图片5.png" tabindex="0"><figcaption>图片5.png</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Mysql的主从复制
主从配置需要注意的地方
1、主DB server和从DB server数据库的版本一致
2、主DB server和从DB server数据库数据一致[ 这里就会可以把主的备份在从上还原，也可以直接将主的数据目录拷贝到从的相应数据目录]
3、主DB server开启二进制日志,主DB server和从DB server的server_id都必须唯一
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/290e0357dc61fcd674032.png" alt="图片6.png" tabindex="0"><figcaption>图片6.png</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Mysql主服务器配置
第一步：修改my.conf文件：
在[mysqld]段下添加：
binlog-do-db=db1
binlog-ignore-db=mysql
#启用二进制日志
log-bin=mysql-bin
#服务器唯一ID，一般取IP最后一段
server-id=134

第二步：重启mysql服务
service mysqld restart

第三步：建立帐户并授权slave
mysql&gt;GRANT FILE ON *.* TO &#39;backup&#39;@&#39;%&#39; IDENTIFIED BY &#39;123456&#39;;
mysql&gt;GRANT REPLICATION SLAVE, REPLICATION CLIENT ON *.* to &#39;backup&#39;@&#39;%&#39; identified by &#39;123456&#39;; 
#一般不用root帐号，“%”表示所有客户端都可能连，只要帐号，密码正确，此处可用具体客户端IP代替，如192.168.145.226，加强安全。
刷新权限 :FLUSH PRIVILEGES;
查看mysql现在有哪些用户:select user,host from mysql.user;

第四步：查询master的状态
mysql&gt; show master status;
+------------------+----------+--------------+------------------+-------------------+
| File             | Position | Binlog_Do_DB | Binlog_Ignore_DB | Executed_Gtid_Set |
+------------------+----------+--------------+------------------+-------------------+
| mysql-bin.000001 |      120 | db1          | mysql            |                   |
+------------------+----------+--------------+------------------+-------------------+
1 row in set
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Mysql从服务器配置
第一步：修改my.conf文件
[mysqld]
server-id=166

第二步：配置从服务器
change master to master_host=&#39;192.168.25.134&#39;,master_port=3306,master_user=&#39;backup&#39;,
master_password=&#39;123456&#39;,master_log_file=&#39;mysql-bin.000001&#39;,master_log_pos=120 
注意语句中间不要断开，master_port为mysql服务器端口号(无引号)，master_user为执行同步操作的数据库账户，
“120”无单引号(此处的120就是show master status 中看到的position的值，这里的mysql-bin.000001就是file对应的值)

第二步：启动从服务器复制功能
Mysql&gt;start slave; 

第三步：检查从服务器复制功能状态：
mysql&gt; show slave status
……………………(省略部分)
Slave_IO_Running: Yes //此状态必须YES
Slave_SQL_Running: Yes //此状态必须YES
……………………(省略部分)
注：Slave_IO及Slave_SQL进程必须正常运行，即YES状态，否则都是错误的状态(如：其中一个NO均属错误)。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>错误处理：
如果出现此错误：
Fatal error: The slave I/O thread stops because master and slave have equal MySQL server UUIDs; 
these UUIDs must be different for replication to work.
因为是mysql是克隆的系统所以mysql的uuid是一样的，所以需要修改。
解决方法：
删除/var/lib/mysql/auto.cnf文件，重新启动服务。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Mycat配置
Mycat 1.4 支持MySQL主从复制状态绑定的读写分离机制，让读更加安全可靠，配置如下：
&lt;dataNode name=&quot;dn1&quot; dataHost=&quot;localhost1&quot; database=&quot;db1&quot; /&gt;
	&lt;dataNode name=&quot;dn2&quot; dataHost=&quot;localhost1&quot; database=&quot;db2&quot; /&gt;
	&lt;dataNode name=&quot;dn3&quot; dataHost=&quot;localhost1&quot; database=&quot;db3&quot; /&gt;
	&lt;dataHost name=&quot;localhost1&quot; maxCon=&quot;1000&quot; minCon=&quot;10&quot; balance=&quot;1&quot;
		writeType=&quot;0&quot; dbType=&quot;mysql&quot; dbDriver=&quot;native&quot; switchType=&quot;2&quot;  slaveThreshold=&quot;100&quot;&gt;
		&lt;heartbeat&gt;show slave status&lt;/heartbeat&gt;
		&lt;writeHost host=&quot;hostM&quot; url=&quot;192.168.25.134:3306&quot; user=&quot;root&quot;
			password=&quot;root&quot;&gt;
			&lt;readHost host=&quot;hostS&quot; url=&quot;192.168.25.166:3306&quot; user=&quot;root&quot;
			password=&quot;root&quot; /&gt;
		&lt;/writeHost&gt;
	&lt;/dataHost&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>(1)设置 balance=&quot;1&quot;与writeType=&quot;0&quot;
Balance参数设置：
1. balance=“0”, 所有读操作都发送到当前可用的writeHost上。
2. balance=“1”，所有读操作都随机的发送到readHost。
3. balance=“2”，所有读操作都随机的在writeHost、readhost上分发
WriteType参数设置：
1. writeType=“0”, 所有写操作都发送到可用的writeHost上。
2. writeType=“1”，所有写操作都随机的发送到readHost。
3. writeType=“2”，所有写操作都随机的在writeHost、readhost分上发。
 “readHost是从属于writeHost的，即意味着它从那个writeHost获取同步数据，
 因此，当它所属的writeHost宕机了，则它也不会再参与到读写分离中来，即“不工作了”，这是因为此时，它的数据已经“不可靠”了。
 基于这个考虑，目前mycat 1.3和1.4版本中，若想支持MySQL一主一从的标准配置，并且在主节点宕机的情况下，
 从节点还能读取数据，则需要在Mycat里配置为两个writeHost并设置banlance=1。”
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>(2)设置 switchType=&quot;2&quot; 与slaveThreshold=&quot;100&quot;
switchType 目前有三种选择：
-1：表示不自动切换
1 ：默认值，自动切换
2 ：基于MySQL主从同步的状态决定是否切换
“Mycat心跳检查语句配置为 show slave status ，dataHost 上定义两个新属性： switchType=&quot;2&quot; 与slaveThreshold=&quot;100&quot;，
此时意味着开启MySQL主从复制状态绑定的读写分离与切换机制。
Mycat心跳机制通过检测 show slave status 中的 &quot;Seconds_Behind_Master&quot;, &quot;Slave_IO_Running&quot;, &quot;Slave_SQL_Running&quot; 
三个字段来确定当前主从同步的状态以及Seconds_Behind_Master主从复制时延。“
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),l=[s];function d(r,c){return i(),a("div",null,l)}const m=e(t,[["render",d],["__file","mycat.html.vue"]]),o=JSON.parse('{"path":"/backend/databasemiddleware/mycat.html","title":"mycat","lang":"zh-CN","frontmatter":{"title":"mycat","date":"2023-01-01T00:00:00.000Z","tags":"mycat","categories":"后端","description":"mycat是用来做数据库集群的 什么是MyCAT？ MyCAT的关键特性 MyCAT架构 图片1.png图片1.png Mycat解决的问题 图片2.png图片2.png Mycat对多数据库的支持 图片3.png图片3.png 分片策略 图片4.png图片4.png Mycat读写分离 图片5.png图片5.png 图片6.png图片6.png","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/databasemiddleware/mycat.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"mycat"}],["meta",{"property":"og:description","content":"mycat是用来做数据库集群的 什么是MyCAT？ MyCAT的关键特性 MyCAT架构 图片1.png图片1.png Mycat解决的问题 图片2.png图片2.png Mycat对多数据库的支持 图片3.png图片3.png 分片策略 图片4.png图片4.png Mycat读写分离 图片5.png图片5.png 图片6.png图片6.png"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/be77b7731e8a7d473fae0.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"mycat\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/be77b7731e8a7d473fae0.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/68e7f50ac03acbda118c5.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/49b80914303756fdc7d09.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/3bf27b197b0c27e368119.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/c4d3eb1798cca24863085.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/290e0357dc61fcd674032.png\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"什么是MyCAT？","slug":"什么是mycat","link":"#什么是mycat","children":[]},{"level":2,"title":"MyCAT的关键特性","slug":"mycat的关键特性","link":"#mycat的关键特性","children":[]},{"level":2,"title":"MyCAT架构","slug":"mycat架构","link":"#mycat架构","children":[]},{"level":2,"title":"Mycat解决的问题","slug":"mycat解决的问题","link":"#mycat解决的问题","children":[]},{"level":2,"title":"Mycat对多数据库的支持","slug":"mycat对多数据库的支持","link":"#mycat对多数据库的支持","children":[]},{"level":2,"title":"分片策略","slug":"分片策略","link":"#分片策略","children":[]},{"level":2,"title":"Mycat读写分离","slug":"mycat读写分离","link":"#mycat读写分离","children":[]}],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":6.82,"words":2046},"filePathRelative":"backend/databasemiddleware/mycat.md","localizedDate":"2023年1月1日","excerpt":"<p>mycat是用来做数据库集群的</p>\\n<!--more-->\\n<h2>什么是MyCAT？</h2>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>简单的说，MyCAT就是：\\n一个彻底开源的，面向企业应用开发的“大数据库集群”\\n支持事务、ACID、可以替代Mysql的加强版数据库\\n一个可以视为“Mysql”集群的企业级数据库，用来替代昂贵的Oracle集群\\n一个融合内存缓存技术、Nosql技术、HDFS大数据的新型SQL Server\\n结合传统数据库和新型分布式数据仓库的新一代企业级数据库产品\\n一个新颖的数据库中间件产品\\n</code></pre></div>","autoDesc":true}');export{m as comp,o as data};
