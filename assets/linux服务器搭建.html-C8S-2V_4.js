import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as t,c as d,a as n,b as e,d as r,e as i}from"./app-7KT7HDzT.js";const o={},c=i(`<p>记录linux安装各种服务器的方法</p><h2 id="linux7的安装" tabindex="-1"><a class="header-anchor" href="#linux7的安装"><span>linux7的安装</span></a></h2><p><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/71c1796efe37e96e0628b.png" alt="1.png"><br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/6e44053497d2ef56f4534.png" alt="2.png"><br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/1e0c79462792d22eacc18.png" alt="3.png"><br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/0e340472b9b2523467702.png" alt="4.png"><br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/4a8f5d63c6d02c4466d4c.png" alt="5.png"><br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/1e22b257b346f674fb850.png" alt="6.png"><br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/986d71aa592cea3f3c998.png" alt="7.png"><br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/12da83371510377bf3ba8.png" alt="8.png"><br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/c4b6234550cc8e1bd2268.png" alt="9.png"><br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/0d2a0b6967800c5f9be2a.png" alt="10.png"><br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/f5113dbb606a51484f5bb.png" alt="11.png"><br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/b18714b9fa515816e1433.png" alt="12.png"><br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/ce31ccbf61b3e9bd91be0.png" alt="13.png"><br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/e33b59a7d062218650ec8.png" alt="14.png"></p><p>centos查看ip: ip addr</p><h2 id="jdk1-7安装" tabindex="-1"><a class="header-anchor" href="#jdk1-7安装"><span>jdk1.7安装</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>jdk的解压
在usr目录下sudo mkdir java新建/usr/java目录
将jdk-7u55-linux-i586.tar.gz放到/usr/java目录下(putty按tab键能快速补全)
tar -zxvf jdk-7u55-linux-i586.tar.gz -C /usr/java/解压到/usr/java/目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>配置jdk环境变量
vim /etc/profile如果找不到vim命令就yum install vim
输入G到文件末尾，输入i在文件尾部添加：
JAVA_HOME=/usr/java/jdk1.7.0_55/
export PATH=$JAVA_HOME/bin:$PATH
按esc退出编辑，:wq保存并退出
重新加载一下文件:source /etc/profile
查看jdk版本：java -version
报错-bash: /usr/java/jdk1.7.0_55//bin/java: /lib/ld-linux.so.2: bad ELF interpreter: 没有那个文件或目录
则sudo yum install glibc.i686
再查看jdk版本：java -version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装jdk17" tabindex="-1"><a class="header-anchor" href="#安装jdk17"><span>安装JDK17</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">1</span>. 下载安装包
<span class="token function">mkdir</span> /home/jdk17
<span class="token function">wget</span> https://download.oracle.com/java/17/latest/jdk-17_linux-x64_bin.tar.gz <span class="token parameter variable">-P</span> /home/jdk17/openjdk-17.0.0.1+2_linux-x64_bin.tar.gz
<span class="token number">2</span>. 解压
<span class="token function">tar</span> xf /home/jdk17/openjdk-17.0.0.1+2_linux-x64_bin.tar.gz <span class="token parameter variable">-C</span> /home/jdk17/
 
<span class="token number">3</span>. 配置环境变量
<span class="token function">vim</span> /etc/profile　　<span class="token comment">#末尾添加如下位置</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/home/jdk17/jdk-17.0.0.1
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span>.:<span class="token variable">$JAVA_HOME</span>/lib/tools.jar:<span class="token variable">$JAVA_HOME</span>/lib/dt.jar
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token environment constant">$PATH</span>
 
<span class="token number">4</span>. 使环境变量生效
<span class="token builtin class-name">source</span> /etc/profile
 
<span class="token number">5</span>. 验证
<span class="token function">java</span>
javac
<span class="token function">java</span> <span class="token parameter variable">-version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装tomcat" tabindex="-1"><a class="header-anchor" href="#安装tomcat"><span>安装tomcat</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>tomcat的解压
将apache-tomcat-7.0.47.tar.gz放到/usr/java目录下
tar -zxvf apache-tomcat-7.0.47.tar.gz -C /usr/java/将tomcat解压到/usr/java目录下
到tomcat的bin目录下执行： ./startup.sh 启动tomcat
到tomcat的logs文件夹下执行 cat catalina.out查看执行情况
关闭防火墙:servive iptables stop（centos7以前）
关闭防火墙:sudo systemctl stop firewalld.service &amp;&amp; sudo systemctl disable firewalld.service（centos7）
查看是否启动成功： 执行jps 访问http://192.168.13.123:8080/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="yum安装mysql" tabindex="-1"><a class="header-anchor" href="#yum安装mysql"><span>yum安装mysql</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>安装带有可用的mysql5系列社区版资源的rpm包rpm -Uvh http://dev.mysql.com/get/mysql-community-release-el7-5.noarch.rpm
查看当前可用的mysql安装资源：yum repolist enabled | grep &quot;mysql.*-community.*&quot;
yum的方式安装MySQL:yum -y install mysql-community-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>加入开机启动:systemctl enable mysqld
启动mysql服务进程:systemctl start mysqld
重置密码:mysql_secure_installation   然后按回车就行，接着做按提示做一系列的事情
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装mysql" tabindex="-1"><a class="header-anchor" href="#安装mysql"><span>安装MySQL</span></a></h2>`,15),v=n("br",null,null,-1),u=n("br",null,null,-1),m=n("br",null,null,-1),b=n("br",null,null,-1),p=n("br",null,null,-1),g=n("br",null,null,-1),h={href:"https://dev.mysql.com/get/Downloads/MySQL-8.0/mysql-8.0.30-linux-glibc2.12-x86_64.tar.xz",target:"_blank",rel:"noopener noreferrer"},f=n("br",null,null,-1),q=n("br",null,null,-1),x=n("br",null,null,-1),y=n("br",null,null,-1),k=n("br",null,null,-1),_=n("br",null,null,-1),z=n("br",null,null,-1),S=n("br",null,null,-1),j=n("br",null,null,-1),w=i(`<p>6.授权用户<br> chown -R mysql.mysql /usr/local/mysql/mysql-8.0<br> 7.切换到bin目录下，初始化基础信息得到临时密码<br> cd bin<br> ./mysqld --user=mysql --basedir=/usr/local/mysql/mysql-8.0 --datadir=/usr/local/mysql/mysql-8.0/data/ --initialize<br> 8.编辑配置文件my.cnf<br> 如果没有 my.cnf 文件就通过命令 touch /etc/my.cnf 创建一个</p><p>vi /etc/my.cnf<br> 内容如下：</p><p>[mysql]<br> #MySQL 提示符配置</p><p>#用户名@主机名+数据库名<br> #prompt=&quot;\\u@\\h [\\d]&gt;&quot;</p><p>#用户名@主机名+mysql版本号+数据库名<br> prompt=\\u@\\h \\v [\\d]&gt;\\_</p><p>#用户名@主机名+当前时间+mysql版本号+数据库名<br> #prompt=&quot;(\\u@\\h) \\R:\\m:\\s \\v [\\d] \\n&gt;&quot;</p><p>[mysqld]<br> #mysql安装根目录<br> basedir = /usr/local/mysql/mysql-8.0/</p><p>#mysql数据文件所在位置<br> datadir = /usr/local/mysql/mysql-8.0/data/</p><p>#设置socke文件所在目录<br> socket = /tmp/mysql.sock</p><p>#数据库默认字符集, 主流字符集支持一些特殊表情符号（特殊表情符占用4个字节）<br> character-set-server = utf8mb4</p><p>#数据库字符集对应一些排序等规则，注意要和character-set-server对应<br> collation-server = utf8mb4_general_ci</p><p>#设置client连接mysql时的字符集,防止乱码<br> init_connect=&#39;SET NAMES utf8mb4&#39;<br> 9.切换到mysql-8.0目录下，添加mysqld服务到系统<br> cd /usr/local/mysql/mysql-8.0<br> cp -a ./support-files/mysql.server /etc/init.d/mysql<br> 10.授权以及添加服务<br> chmod +x /etc/init.d/mysql<br> chkconfig --add mysql<br> 11.启动mysql<br> service mysql start<br> 12.查看启动状态<br> service mysql status<br> 13.将mysql命令添加到系统指令<br> ln -s /usr/local/mysql/mysql-8.0/bin/mysql /usr/bin</p><p>现在任何目录下执行 mysql -uroot -p 就可以进行登录</p><p>14.登录mysql，密码使用之前随机生成的密码<br> mysql -uroot -p</p><p>15.修改root密码<br> ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED WITH mysql_native_password BY &#39;123456&#39;;<br> 修改root用户密码为 123456 ，也可以换成别的</p><p>16.执行 flush privileges 使密码生效<br> flush privileges;<br> 17.选择mysql数据库<br> use mysql;<br> 18.修改远程连接并生效，%表示开启远程权限<br> update user set host=&#39;%&#39; where user=&#39;root&#39;;<br> flush privileges;<br> 19.退出MySQL：<br> \\q<br> 20.查看mysql是否开机启动<br> chkconfig --list<br> 如果 mysql服务的 第3、4、5项都是开着的，则已经开启了开机启动，反之则没有。</p><p>如果没有，可以用命令设置开机自启动：</p><p>systemctl enable mysqld.service<br> 再次查看mysql是否开机启动：</p><p>chkconfig --list</p><p>1.查看3306端口状态<br> firewall-cmd --zone=public --query-port=3306/tcp<br> 2、如果是no，表示关闭，打开3306端口<br> firewall-cmd --zone=public --add-port=3306/tcp --permanent<br> 3、防火墙重载<br> firewall-cmd --reload<br> 4、再次查看3306端口状态<br> firewall-cmd --zone=public --query-port=3306/tcp<br> 应该是yes，说明端口已经打开，去navicat测试连接，输入ip和root账户密码，即可成功！<br> 执行下面命令一键登录：<br> mysql -uroot -hlocalhost -p123456</p><h2 id="dubbo的注册中心zookeeper的安装" tabindex="-1"><a class="header-anchor" href="#dubbo的注册中心zookeeper的安装"><span>Dubbo的注册中心Zookeeper的安装</span></a></h2><pre><code>Zookeeper是java开发的可以运行在windows、linux环境。需要先安装jdk。
安装环境：Linux：centos6.4 Jdk:1.7以上版本

安装步骤：
第一步：安装jdk
第二步：把zookeeper的压缩包上传到linux系统（目录随意）
第三步：解压缩压缩包tar -zxvf zookeeper-3.4.6.tar.gz
第四步：进入zookeeper-3.4.6目录，创建data文件夹。
第五步：把zookeeper-3.4.6目录下的conf目录将zoo_sample.cfg改名为zoo.cfg ：mv zoo_sample.cfg zoo.cfg
第六步：修改zoo.cfg的data属性设置为data所在的目录：vim zoo.cfg然后输入i编辑
dataDir=/usr/zookeeper-3.4.6/data 然后Esc，然后:wq保存并退出
第七步：进入bin目录启动zookeeper ./zkServer.sh start
关闭：./zkServer.sh stop
查看状态：./zkServer.sh status
注意：需要关闭防火墙。
service iptables stop
永久关闭修改配置开机不启动防火墙：
chkconfig iptables off
如果不能成功启动zookeeper，需要删除data目录下的zookeeper_server.pid文件。
</code></pre><h2 id="dubbo监控中心的安装" tabindex="-1"><a class="header-anchor" href="#dubbo监控中心的安装"><span>Dubbo监控中心的安装</span></a></h2><pre><code>需要安装tomcat，然后部署监控中心即可。

部署监控中心：
cp dubbo-admin-2.5.4.war apache-tomcat-7.0.47/webapps/dubbo-admin.war 
进入tomcat的bin目录下启动tomcat
访问http://192.168.25.167:8080/dubbo-admin/
用户名：root密码：root

如果监控中心和注册中心在同一台服务器上，可以不需要任何配置。
如果不在同一台服务器，需要修改配置文件dubbo.properties：
/root/apache-tomcat-7.0.47/webapps/dubbo-admin/WEB-INF/dubbo.properties
dubbo.registry.address=zookeeper://127.0.0.1:2181注册中心地址
dubbo.admin.root.password=root root用户的密码
dubbo.admin.guest.password=guest
</code></pre><h2 id="redis安装" tabindex="-1"><a class="header-anchor" href="#redis安装"><span>redis安装</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Redis是c语言开发的。
输入gcc；如果找不到命令的话就要安装
安装redis需要c语言的编译环境。如果没有gcc需要在线安装。yum install gcc-c++

安装步骤：
第一步：redis的源码包上传到linux系统。
第二步：解压缩redis。tar -zxvf redis-3.0.0.tar.gz
第三步：编译。进入redis源码目录redis-3.0.0。make 
第四步：安装。make install PREFIX=/usr/java/redis install命令安装redis到/usr/local/redis中
PREFIX参数指定redis的安装目录。一般软件安装到/usr目录下
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>redis的启动：
前端启动：在redis的安装目录bin下直接启动redis-server  ./redis-server 

后台启动：
把redis-3.0.0/redis.conf复制到/usr/java/redis/bin/目录下
cp redis.conf /usr/java/redis/bin/
修改配置文件：daemonize no 为yes
在/usr/java/redis/bin/中执行 ./redis-server redis.conf
查看redis进程：ps aux|grep redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Redis-cli
在redis的安装目录下的bin
[root@localhost bin]# ./redis-cli 
默认连接localhost运行在6379端口的redis服务。
[root@localhost bin]# ./redis-cli -h 192.168.25.153 -p 6379
-h：连接的服务器的地址
-p：服务的端口号

关闭redis：[root@localhost bin]# ./redis-cli shutdown
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="solr服务器的安装" tabindex="-1"><a class="header-anchor" href="#solr服务器的安装"><span>solr服务器的安装</span></a></h2><h3 id="solr的环境" tabindex="-1"><a class="header-anchor" href="#solr的环境"><span>Solr的环境</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Solr是java开发。
需要安装jdk。安装环境Linux。需要安装Tomcat。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="搭建步骤" tabindex="-1"><a class="header-anchor" href="#搭建步骤"><span>搭建步骤</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>第一步：把solr 的压缩包上传到Linux系统
第二步：解压solr。tar -zxvf solr-4.10.3.tgz.tgz
第三步：安装Tomcat，解压缩即可。 tar -zxvf apache-tomcat-7.0.47.tar.gz
第四步：把solr复制到Tomcat下webapps 
第五步：解压缩war包。进入bin目录下./startup.bat启动Tomcat解压。关闭tomcat
第六步：把/root/solr-4.10.3/example/lib/ext目录下的所有的jar包，添加到solr工程中。
cp * /usr/java/solr/tomcat/webapps/solr/WEB-INF/lib/
第七步：创建一个solrhome。/usr/java/solr-4.10.3/example/solr目录就是一个solrhome。复制此目录到/usr/java/solr/solrhome
cp -r solr /usr/java/solr/solrhome
第八步：关联solr及solrhome。需要修改tomcat下的solr工程的web.xml文件。
把这个注释打开并配置好solrhome地址
&lt;env-entry&gt;
   &lt;env-entry-name&gt;solr/home&lt;/env-entry-name&gt;
   &lt;env-entry-value&gt;/usr/java/solr/solrhome/&lt;/env-entry-value&gt;
   &lt;env-entry-type&gt;java.lang.String&lt;/env-entry-type&gt;
&lt;/env-entry&gt;
第九步：启动Tomcat
http://192.168.25.154:8080/solr/
和windows下的配置完全一样。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>配置业务域
1、把/usr/java/IK Analyzer 2012FF_hf1/IKAnalyzer2012FF_u1.jar添加到tomcat/webappps/solr/lib目录下
2、把/usr/java/IK Analyzer 2012FF_hf1/ext_stopword.dic、IKAnalyzer.cfg.xml、mydict.dic放到tomcat/webappps/solr/WEB-INF/classes目录下。
配置一个FieldType，制定使用IKAnalyzer
3、修改/usr/java/solr/solrhome/collection1/conf/schema.xml,添加
&lt;fieldType name=&quot;text_ik&quot; class=&quot;solr.TextField&quot;&gt;
  &lt;analyzer class=&quot;org.wltea.analyzer.lucene.IKAnalyzer&quot;/&gt;
&lt;/fieldType&gt;
配置业务域，type制定使用自定义的FieldType。设置业务系统Field,添加
&lt;field name=&quot;item_title&quot; type=&quot;text_ik&quot; indexed=&quot;true&quot; stored=&quot;true&quot;/&gt;
&lt;field name=&quot;item_sell_point&quot; type=&quot;text_ik&quot; indexed=&quot;true&quot; stored=&quot;true&quot;/&gt;
&lt;field name=&quot;item_price&quot;  type=&quot;long&quot; indexed=&quot;true&quot; stored=&quot;true&quot;/&gt;
&lt;field name=&quot;item_image&quot; type=&quot;string&quot; indexed=&quot;false&quot; stored=&quot;true&quot; /&gt;
&lt;field name=&quot;item_category_name&quot; type=&quot;string&quot; indexed=&quot;true&quot; stored=&quot;true&quot; /&gt;

&lt;field name=&quot;item_keywords&quot; type=&quot;text_ik&quot; indexed=&quot;true&quot; stored=&quot;false&quot; multiValued=&quot;true&quot;/&gt;
&lt;copyField source=&quot;item_title&quot; dest=&quot;item_keywords&quot;/&gt;
&lt;copyField source=&quot;item_sell_point&quot; dest=&quot;item_keywords&quot;/&gt;
&lt;copyField source=&quot;item_category_name&quot; dest=&quot;item_keywords&quot;/&gt;
4、重启tomcat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="solr-cloud搭建" tabindex="-1"><a class="header-anchor" href="#solr-cloud搭建"><span>solr-cloud搭建</span></a></h2><h3 id="zookeeper集群搭建" tabindex="-1"><a class="header-anchor" href="#zookeeper集群搭建"><span>Zookeeper集群搭建</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>第一步：需要安装jdk环境。
第二步：把zookeeper的压缩包上传到服务器。
第三步：解压缩。tar -zxvf zookeeper-3.4.6.tar.gz
第四步：把zookeeper复制三份。
[root@localhost ~]# mkdir /usr/java/solr-cloud
[root@localhost ~]# cp -r zookeeper-3.4.6 /usr/java/solr-cloud/zookeeper01
[root@localhost ~]# cp -r zookeeper-3.4.6 /usr/java/solr-cloud/zookeeper02
[root@localhost ~]# cp -r zookeeper-3.4.6 /usr/java/solr-cloud/zookeeper03
第五步：在每个zookeeper目录下创建一个data目录。
mkdir data
第六步：在data目录下创建一个myid文件，文件名就叫做“myid”。内容就是每个实例的id。例如1、2、3
vim data 然后输入i 输入1 输入esc 输入：wq
cat myid //检查myid的内容1
第七步：修改配置文件。把conf目录下的zoo_sample.cfg文件改名为zoo.cfg
每个一样配置！
cp zoo_sample.cfg zoo.cfg
将datadir=改成data文件夹的地址
保证clientPort三个不冲突
然后在最后一行配置
server.1=192.168.25.135:2881:3881
server.2=192.168.25.135:2882:3882
server.3=192.168.25.135:2883:3883
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>创建全部启动的脚本 start-all.sh :vim start-all.sh
cd zookeeper01/bin
./zkServer.sh start
cd ../../
cd zookeeper02/bin
./zkServer.sh start
cd ../../
cd zookeeper03/bin
./zkServer.sh start
cd ../../
使用以下命令授权
chmod u+x start-all.sh 
查看zookeeper的状态
一个leader其他都是follower
zookeeper01/bin/zkServer.sh status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Using config: /usr/java/solr-cloud/zookeeper01/bin/../conf/zoo.cfg
Stopping zookeeper ... bin/zkServer.sh: 第 143 行:kill: (26838) - 没有那个进程
STOPPED
如果关闭zookeeper的时候有这句话 说明端口占用

查看占用2181端口的程序pid：
[root@localhost local]# lsof -i:5432

kill掉该进程
[root@localhost local]# kill -9 7035
重新启动即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>创建全部关闭的脚本 start-all.sh :vim shutdown-all.sh
cd zookeeper01/bin
./zkServer.sh stop
cd ../../
cd zookeeper02/bin
./zkServer.sh stop
cd ../../
cd zookeeper03/bin
./zkServer.sh stop
cd ../../
使用以下命令授权
chmod u+x shutdown-all.sh 
查看zookeeper的状态
一个leader其他都是follower
zookeeper01/bin/zkServer.sh status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="solr集群的搭建" tabindex="-1"><a class="header-anchor" href="#solr集群的搭建"><span>Solr集群的搭建</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>第一步：创建四个tomcat实例。每个tomcat运行在不同的端口。8180、8280、8380、8480
在/usr/java目录下tar -zxvf apache-tomcat-7.0.47解压tomcat
复制四个tomcat到/usr/java/solr-cloud目录下
cp -r apache-tomcat-7.0.47 /usr/java/solr-cloud/tomcat04
vim /usr/java/solr/tomcat/conf/server.xml 将8080改成8180，其他端口号同时加1
第二步：部署solr的war包。把单机版的/usr/java/solr/tomcat/webapps/solr复制到集群中的tomcat01234中。
cp -r /usr/java/solr/tomcat/webapps/solr /usr/java/solr-cloud/tomcat01/webapps/solr
第三步：为每个solr实例创建一个对应的solrhome。使用单机版的solrhome复制四份
cp -r /usr/java/solr/solrhome /usr/java/solr-cloud/solrhome01
第四步：需要修改solr的web.xml文件。把solrhome关联起来。
vim /usr/java/solr/tomcat/webapps/solr/WEB-INF/web.xml
&lt;env-entry&gt;
   &lt;env-entry-name&gt;solr/home&lt;/env-entry-name&gt;
   &lt;env-entry-value&gt;/usr/java/solr-cloud/solrhome01/&lt;/env-entry-value&gt;
   &lt;env-entry-type&gt;java.lang.String&lt;/env-entry-type&gt;
&lt;/env-entry&gt;

第五步：配置solrCloud相关的配置。每个solrhome下都有一个solr.xml，把其中的ip及端口号配置好。
vim /usr/java/solr-cloud/solrhome01/solr.xml
&lt;solrcloud&gt;
	&lt;str name=&quot;host&quot;&gt;192.168.25.135&lt;/str&gt;
	&lt;int name=&quot;hostPort&quot;&gt;8180&lt;/int&gt;
	&lt;str name=&quot;hostContext&quot;&gt;\${hostContext:solr}&lt;/str&gt;
	&lt;int name=&quot;zkClientTimeout&quot;&gt;\${zkClientTimeout:30000}&lt;/int&gt;
	&lt;bool name=&quot;genericCoreNodeNames&quot;&gt;\${genericCoreNodeNames:true}&lt;/bool&gt;
&lt;/solrcloud&gt;
第六步：让zookeeper统一管理配置文件。需要把solrhome/collection1/conf目录上传到zookeeper。上传任意solrhome中的配置文件即可。
使用工具上传配置文件：/root/solr-4.10.3/example/scripts/cloud-scripts/zkcli.sh
./zkcli.sh -zkhost 192.168.25.135:2181,192.168.25.135:2182,192.168.25.135:2183 -cmd upconfig -confdir /usr/local/solr-cloud/solrhome01/collection1/conf -confname myconf
第七步：修改tomcat/bin目录下的catalina.sh 文件，关联solr和zookeeper。
把此配置添加到配置文件中：
JAVA_OPTS=&quot;-DzkHost=192.168.25.135:2181,192.168.25.135:2182,192.168.25.135:2183&quot;
第八步：启动每个tomcat实例。要包装zookeeper集群是启动状态。
第九步：访问集群
第十步：创建新的Collection进行分片处理。
http://192.168.25.135:8180/solr/admin/collections?action=CREATE&amp;name=collection2&amp;numShards=2&amp;replicationFactor=2
第十一步：删除不用的Collection。
http://192.168.25.135:8180/solr/admin/collections?action=DELETE&amp;name=collection1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>查看第六步的zookeeper上的配置文件：
使用zookeeper目录下的bin/zkCli.sh命令查看zookeeper上的配置文件：
[root@localhost bin]# ./zkCli.sh 
[zk: localhost:2181(CONNECTED) 0] ls /
[configs, zookeeper]
[zk: localhost:2181(CONNECTED) 1] ls /configs
[myconf]
[zk: localhost:2181(CONNECTED) 2] ls /configs/myconf
[admin-extra.menu-top.html, protwords.txt, mapping-FoldToASCIIenglish.enu-bottom.html, clustering, schema.xml..]
[zk: localhost:2181(CONNECTED) 3] 
退出：
[zk: localhost:2181(CONNECTED) 3] quit
使用以下命令连接指定的zookeeper服务：
./zkCli.sh -server 192.168.25.154:2183
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="activemq的安装" tabindex="-1"><a class="header-anchor" href="#activemq的安装"><span>ActiveMQ的安装</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>进入http://activemq.apache.org/下载ActiveMQ 使用的版本是5.12.0
安装环境：
1、需要jdk、Linux系统。生产环境都是Linux系统。
安装步骤
第一步： 把ActiveMQ 的压缩包上传到Linux系统。
第二步：解压缩。
第三步：启动。
使用bin目录下的activemq命令启动：./activemq start 
关闭：./activemq stop
查看状态：./activemq status
注意：如果ActiveMQ整合spring使用不要使用activemq-all-5.12.0.jar包。建议使用5.11.2
进入管理后台：http://192.168.25.168:8161/admin用户名：admin密码：admin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>11.3.解决405问题：
修改hosts文件，配置机器名和127.0.0.1的映射关系。
机器名：/etc/sysconfig/network文件中定义了机器名：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/bfd35cb9434cac5a500fe.png" alt="15.png" tabindex="0"><figcaption>15.png</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Host文件的配置：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/ca5682c10b4ee9f1c9a6f.png" alt="16.png" tabindex="0"><figcaption>16.png</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>重新启动Activemq的服务
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="mycat安装" tabindex="-1"><a class="header-anchor" href="#mycat安装"><span>mycat安装</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>第一步：把MyCat的压缩包上传到linux服务器
第二步：解压缩，得到mycat目录
第三步：进入mycat/bin，启动MyCat
启动命令：./mycat start
停止命令：./mycat stop
重启命令：./mycat restart
注意：可以使用mysql的客户端直接连接mycat服务。默认服务端口为8066
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>配置schema.xml
Schema.xml作为MyCat中重要的配置文件之一，管理着MyCat的逻辑库、表、分片规则、DataNode以及DataSource。

schema 标签用于定义MyCat实例中的逻辑库
Table 标签定义了MyCat中的逻辑表
dataNode 标签定义了MyCat中的数据节点，也就是我们通常说所的数据分片。
dataHost标签在mycat逻辑库中也是作为最底层的标签存在，直接定义了具体的数据库实例、读写分离配置和心跳语句。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>注意：若是LINUX版本的MYSQL，则需要设置为Mysql大小写不敏感，否则可能会发生表找不到的问题。
在MySQL的配置文件中my.ini [mysqld] 中增加一行
　　lower_case_table_names = 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot;?&gt;
&lt;!DOCTYPE mycat:schema SYSTEM &quot;schema.dtd&quot;&gt;
&lt;mycat:schema xmlns:mycat=&quot;http://org.opencloudb/&quot;&gt;
	&lt;!--TESTDB是用程序连的数据库名字--&gt;
	&lt;schema name=&quot;TESTDB&quot; checkSQLschema=&quot;false&quot; sqlMaxLimit=&quot;100&quot;&gt;
		&lt;!-- TB_ITEM是TESTDB中含有的表，dataNode指定存到那几个真正的数据库上 --&gt;
		&lt;!-- auto sharding by id (long) --&gt;
		&lt;table name=&quot;TB_ITEM&quot; dataNode=&quot;dn1,dn2,dn3&quot; rule=&quot;auto-sharding-long&quot; /&gt;
		&lt;table name=&quot;TB_USER&quot; dataNode=&quot;dn1,dn2&quot; primaryKey=&quot;ID&quot; type=&quot;global&quot;  /&gt;
	&lt;/schema&gt;
	&lt;!--配置节点真正的数据库地址--&gt;
	&lt;dataNode name=&quot;dn1&quot; dataHost=&quot;localhost1&quot; database=&quot;db1&quot; /&gt;
	&lt;dataNode name=&quot;dn2&quot; dataHost=&quot;localhost2&quot; database=&quot;db2&quot; /&gt;
	&lt;dataNode name=&quot;dn3&quot; dataHost=&quot;localhost1&quot; database=&quot;db3&quot; /&gt;
	&lt;dataHost name=&quot;localhost1&quot; maxCon=&quot;1000&quot; minCon=&quot;10&quot; balance=&quot;0&quot;
		writeType=&quot;0&quot; dbType=&quot;mysql&quot; dbDriver=&quot;native&quot; switchType=&quot;1&quot;  slaveThreshold=&quot;100&quot;&gt;
		&lt;!--检查心跳包健康检查--&gt;
		&lt;heartbeat&gt;select user()&lt;/heartbeat&gt;
		&lt;!-- can have multi write hosts --&gt;
		&lt;writeHost host=&quot;hostM1&quot; url=&quot;192.168.25.134:3306&quot; user=&quot;root&quot; password=&quot;root&quot;&gt;
		&lt;!-- can have multi read hosts --&gt;
		&lt;/writeHost&gt;
	&lt;/dataHost&gt;
	&lt;dataHost name=&quot;localhost2&quot; maxCon=&quot;1000&quot; minCon=&quot;10&quot; balance=&quot;0&quot;
		writeType=&quot;0&quot; dbType=&quot;mysql&quot; dbDriver=&quot;native&quot; switchType=&quot;1&quot;  slaveThreshold=&quot;100&quot;&gt;
		&lt;heartbeat&gt;select user()&lt;/heartbeat&gt;
		&lt;!-- can have multi write hosts --&gt;
		&lt;writeHost host=&quot;hostM1&quot; url=&quot;192.168.25.166:3306&quot; user=&quot;root&quot; password=&quot;root&quot;&gt;
		&lt;!-- can have multi read hosts --&gt;
		&lt;/writeHost&gt;
	&lt;/dataHost&gt;
&lt;/mycat:schema&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>配置server.xml
server.xml几乎保存了所有mycat需要的系统配置信息。最常用的是在此配置用户名、密码及权限。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;!--TESTDB是用程序连的数据库名字，test是账号和密码--&gt;
&lt;user name=&quot;test&quot;&gt;
    &lt;property name=&quot;password&quot;&gt;test&lt;/property&gt;
    &lt;property name=&quot;schemas&quot;&gt;TESTDB&lt;/property&gt;
    &lt;property name=&quot;readOnly&quot;&gt;true&lt;/property&gt;
&lt;/user&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>配置rule.xml
rule.xml里面就定义了我们对表进行拆分所涉及到的规则定义。我们可以灵活的对表使用不同的分片算法，
或者对表使用相同的算法但具体的参数不同。这个文件里面主要有tableRule和function这两个标签。
在具体使用过程中可以按照需求添加tableRule和function。
此配置文件可以不用修改，使用默认即可。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在centos7上安装sql-server-2017" tabindex="-1"><a class="header-anchor" href="#在centos7上安装sql-server-2017"><span>在CentOS7上安装SQL Server 2017</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>系统需求：
CentOS7.3以上，我目前用的是CenOS7.4
服务器至少3.25GB内存
好像对CPU没有什么要求，我在虚拟机中配置的CPU为一核
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>安装 SQL Server
下载 Microsoft SQL Server Red Hat 存储库配置文件：
[root@CentOS7~]#curl -o /etc/yum.repos.d/mssql-server.repo https://packages.microsoft.com/config/rhel/7/mssql-server-2017.repo
运行以下命令，安装 SQL Server：
[root@CentOS7 ~]# yum update
[root@CentOS7 ~]# yum install -y mssql-server
运行包安装完成后mssql-conf 安装并按照提示操作以设置 SA 密码，并选择你的版本、语言、设置sql密码
[root@CentOS7 ~]# /opt/mssql/bin/mssql-conf setup
确认 SQL Server 系统管理员密码:
在安装的最后，系统会提示如下：
正在配置 SQL Server...
Created symlink from 
/etc/systemd/system/multi-user.target.wants/mssql-server.service to /usr/lib/systemd/system/mssql-server.service.
安装程序已成功完成。SQL Server 正在启动。
配置完成后，请验证服务是否正在运行：
[root@CentOS7 ~]# systemctl status mssql-server
● mssql-server.service - Microsoft SQL Server Database Engine
   Loaded: loaded (/usr/lib/systemd/system/mssql-server.service; enabled; vendor preset: disabled)
   Active: active (running) since 四 2017-10-05 14:19:18 CST; 21s ago
	 Docs: https://docs.microsoft.com/en-us/sql/linux
 Main PID: 1208 (sqlservr)
   CGroup: /system.slice/mssql-server.service
		   ├─1208 /opt/mssql/bin/sqlservr
		   └─1228 /opt/mssql/bin/sqlservr
............
（以下进行省略）
如果运行结果如上（●正常是绿颜色的）就是服务正常运行了。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>若要允许远程连接，请打开防火墙上的 SQL Server 端口。
默认的 SQL Server 端口为 TCP 1433。 如果你使用FirewallD防火墙，可以使用以下命令添加规则：
[root@CentOS7 ~]# firewall-cmd --zone=public --add-port=1433/tcp --permanent
[root@CentOS7 ~]# firewall-cmd --reload

当然如果你的服务器前端是有防火墙进行保护的，
也可以不用运行上述命令，而是直接将系统的防火墙关闭。
使用如下命令关闭firewallD防火墙并设置为开机不自动启动：
[root@CentOS7 ~]# systemctl stop firewalld
[root@CentOS7 ~]# systemctl disable firewalld
Removed symlink /etc/systemd/system/dbus-org.fedoraproject.FirewallD1.service.
Removed symlink /etc/systemd/system/multi-user.target.wants/firewalld.service.
以上就完成了SQL Server 2017的安装
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>安装 SQL Server 命令行工具（sqlcmd和bcp）
下载安装源。[root@CentOS7 ~]# curl -o /etc/yum.repos.d/msprod.repo https://packages.microsoft.com/config/rhel/7/prod.repo
安装mssql 工具与 unixODBC 开发人员包，安装之前系统会提示你必须同意相关许可，注意：需要输入大写的YES
[root@CentOS7 ~]# yum update
[root@CentOS7 ~]# yum install -y mssql-tools unixODBC-devel
添加/opt/mssql-tools/bin/到环境变量
[root@CentOS7 ~]# echo &#39;export PATH=&quot;$PATH:/opt/mssql-tools/bin&quot;&#39; &gt;&gt; ~/.bash_profile
[root@CentOS7 ~]# echo &#39;export PATH=&quot;$PATH:/opt/mssql-tools/bin&quot;&#39; &gt;&gt; ~/.bashrc
[root@CentOS7 ~]# source ~/.bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>使用sqlcmd进行本地连接
[root@CentOS7 ~]# sqlcmd -S localhost -U SA
Password:
这时系统会提示你输入sa密码，输入后回车
如果成功，应会显示 sqlcmd 命令提示符：1&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="一键trojan搭建-centos-7" tabindex="-1"><a class="header-anchor" href="#一键trojan搭建-centos-7"><span>一键Trojan搭建(CentOS 7)</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>

# 查看日志
journalctl -u trojan -f

# 查看端口占用
netstat -tunlp | grep 端口号

# 连接端口
telnet 38.47.108.105  81

junye54231535@gmail.com
https://www.namesilo.com/
junye54231535@gmail.com Junye54231535@gmail.com


admin
2fEfpDxB




03事务隔离的实现结合08
06 和05问题时间
10 问题时间
15 ask
38.47.108.105




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="在linux下开启指定端口号" tabindex="-1"><a class="header-anchor" href="#在linux下开启指定端口号"><span>在Linux下开启指定端口号</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1、查看某个端口是否已开启，如果提示no表示未开启
firewall-cmd --query-port=8888/tcp

2、永久开启端口号，提示 success 表示成功
firewall-cmd --add-port=8888/tcp --permanent

3、开启端口后要重载配置
firewall-cmd --reload
 
4、移除端口
firewall-cmd --permanent --remove-port=8888/tcp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代理" tabindex="-1"><a class="header-anchor" href="#代理"><span>代理</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>编辑 /etc/profile 文件，添加以下内容：
export HTTP_PROXY=http://192.168.1.141:7890/
export HTTPS_PROXY=http://192.168.1.141:7890/
export NO_PROXY=localhost,127.0.0.1,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16,169.254.0.0/16

保存后，执行以下命令使更改生效：
source /etc/profile
检查
curl -I https://www.google.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="虚拟机磁盘扩容" tabindex="-1"><a class="header-anchor" href="#虚拟机磁盘扩容"><span>虚拟机磁盘扩容</span></a></h2><p>使用 fdisk 创建新分区<br> 执行以下命令为未分配的磁盘空间创建新分区：</p><p>fdisk /dev/sda<br> 按以下步骤操作：</p><p>输入 n 创建一个新分区。<br> 选择分区类型为 primary（主分区）。<br> 提供起始和结束位置（直接按回车键默认使用剩余空间）。<br> 输入 t 修改分区类型为 8e（Linux LVM）。<br> 输入 w 保存更改并退出。<br> partprobe /dev/sda<br> 运行 fdisk -l 再次查看，新分区应该显示为 /dev/sda3。</p><ol start="3"><li>将新分区添加为物理卷<br> 将新创建的分区 /dev/sda3 初始化为 LVM 的物理卷：<br> pvcreate /dev/sda3<br> Physical volume &quot;/dev/sda3&quot; successfully created</li></ol><p>扩展卷组<br> 将新创建的物理卷 /dev/sda3 添加到现有卷组 centos：<br> vgextend centos /dev/sda3<br> 验证卷组是否扩展成功：<br> vgs<br> 此时应该能看到 VFree 显示有了新的空闲空间。<br> lvextend -l +100%FREE /dev/mapper/centos-root<br> 报错lvextend -l +100%FREE /dev/mapper/centos-root<br> 就 rm -rf /etc/lvm/archive/*<br> rm -rf /tmp/*清除后重新执行<br> 文件系统扩容sudo xfs_growfs /dev/mapper/centos-root</p>`,76);function T(C,E){const s=a("ExternalLinkIcon");return t(),d("div",null,[c,n("p",null,[e("1.创建mysql文件夹并切换路径"),v,e(" local是linux上安装文件的目录"),u,e(" cd /usr/local"),m,e(" mkdir mysql"),b,e(" cd mysql"),p,e(" 2.下载mysql"),g,e(" wget "),n("a",h,[e("https://dev.mysql.com/get/Downloads/MySQL-8.0/mysql-8.0.30-linux-glibc2.12-x86_64.tar.xz"),r(s)]),f,e(" 3.解压mysql"),q,e(" tar xvJf mysql-8.0.30-linux-glibc2.12-x86_64.tar.xz"),x,e(" 4.重命名文件夹并删除压缩包"),y,e(" mv mysql-8.0.30-linux-glibc2.12-x86_64 mysql-8.0"),k,e(" rm -rf mysql-8.0.30-linux-glibc2.12-x86_64"),_,e(" 5.创建用户组以及用户和密码"),z,e(" groupadd mysql"),S,e(" useradd -g mysql mysql"),j,e(" 编译安装时候创建mysql组和mysql用户，并把datadir和安装目录属主改为mysql，启动时，mysqld进程的属主是mysql，即便mysql服务被黑掉，得到了mysql用户权限，也不会影响系统安全")]),w])}const M=l(o,[["render",T],["__file","linux服务器搭建.html.vue"]]),O=JSON.parse('{"path":"/backend/containerservice/linux%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA.html","title":"linux服务器搭建","lang":"zh-CN","frontmatter":{"title":"linux服务器搭建","date":"2023-01-01T00:00:00.000Z","tags":"linux服务器搭建","categories":"运维","description":"记录linux安装各种服务器的方法 linux7的安装 1.png 2.png 3.png 4.png 5.png 6.png 7.png 8.png 9.png 10.png 11.png 12.png 13.png 14.png centos查看ip: ip addr jdk1.7安装 安装JDK17 安装tomcat yum安装mysql 安装M...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/containerservice/linux%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"linux服务器搭建"}],["meta",{"property":"og:description","content":"记录linux安装各种服务器的方法 linux7的安装 1.png 2.png 3.png 4.png 5.png 6.png 7.png 8.png 9.png 10.png 11.png 12.png 13.png 14.png centos查看ip: ip addr jdk1.7安装 安装JDK17 安装tomcat yum安装mysql 安装M..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/71c1796efe37e96e0628b.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"linux服务器搭建\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/71c1796efe37e96e0628b.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/6e44053497d2ef56f4534.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/1e0c79462792d22eacc18.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/0e340472b9b2523467702.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/4a8f5d63c6d02c4466d4c.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/1e22b257b346f674fb850.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/986d71aa592cea3f3c998.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/12da83371510377bf3ba8.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/c4b6234550cc8e1bd2268.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/0d2a0b6967800c5f9be2a.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/f5113dbb606a51484f5bb.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/b18714b9fa515816e1433.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/ce31ccbf61b3e9bd91be0.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/e33b59a7d062218650ec8.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/bfd35cb9434cac5a500fe.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/ca5682c10b4ee9f1c9a6f.png\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"linux7的安装","slug":"linux7的安装","link":"#linux7的安装","children":[]},{"level":2,"title":"jdk1.7安装","slug":"jdk1-7安装","link":"#jdk1-7安装","children":[]},{"level":2,"title":"安装JDK17","slug":"安装jdk17","link":"#安装jdk17","children":[]},{"level":2,"title":"安装tomcat","slug":"安装tomcat","link":"#安装tomcat","children":[]},{"level":2,"title":"yum安装mysql","slug":"yum安装mysql","link":"#yum安装mysql","children":[]},{"level":2,"title":"安装MySQL","slug":"安装mysql","link":"#安装mysql","children":[]},{"level":2,"title":"Dubbo的注册中心Zookeeper的安装","slug":"dubbo的注册中心zookeeper的安装","link":"#dubbo的注册中心zookeeper的安装","children":[]},{"level":2,"title":"Dubbo监控中心的安装","slug":"dubbo监控中心的安装","link":"#dubbo监控中心的安装","children":[]},{"level":2,"title":"redis安装","slug":"redis安装","link":"#redis安装","children":[]},{"level":2,"title":"solr服务器的安装","slug":"solr服务器的安装","link":"#solr服务器的安装","children":[{"level":3,"title":"Solr的环境","slug":"solr的环境","link":"#solr的环境","children":[]},{"level":3,"title":"搭建步骤","slug":"搭建步骤","link":"#搭建步骤","children":[]}]},{"level":2,"title":"solr-cloud搭建","slug":"solr-cloud搭建","link":"#solr-cloud搭建","children":[{"level":3,"title":"Zookeeper集群搭建","slug":"zookeeper集群搭建","link":"#zookeeper集群搭建","children":[]},{"level":3,"title":"Solr集群的搭建","slug":"solr集群的搭建","link":"#solr集群的搭建","children":[]}]},{"level":2,"title":"ActiveMQ的安装","slug":"activemq的安装","link":"#activemq的安装","children":[]},{"level":2,"title":"mycat安装","slug":"mycat安装","link":"#mycat安装","children":[]},{"level":2,"title":"在CentOS7上安装SQL Server 2017","slug":"在centos7上安装sql-server-2017","link":"#在centos7上安装sql-server-2017","children":[]},{"level":2,"title":"代理","slug":"代理","link":"#代理","children":[]},{"level":2,"title":"虚拟机磁盘扩容","slug":"虚拟机磁盘扩容","link":"#虚拟机磁盘扩容","children":[]}],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":17.7,"words":5311},"filePathRelative":"backend/containerservice/linux服务器搭建.md","localizedDate":"2023年1月1日","excerpt":"<p>记录linux安装各种服务器的方法</p>\\n<!--more-->\\n<h2>linux7的安装</h2>\\n<p><img src=\\"https://290ff162.telegraph-image-eg9.pages.dev/file/71c1796efe37e96e0628b.png\\" alt=\\"1.png\\"><br>\\n<img src=\\"https://290ff162.telegraph-image-eg9.pages.dev/file/6e44053497d2ef56f4534.png\\" alt=\\"2.png\\"><br>\\n<img src=\\"https://290ff162.telegraph-image-eg9.pages.dev/file/1e0c79462792d22eacc18.png\\" alt=\\"3.png\\"><br>\\n<img src=\\"https://290ff162.telegraph-image-eg9.pages.dev/file/0e340472b9b2523467702.png\\" alt=\\"4.png\\"><br>\\n<img src=\\"https://290ff162.telegraph-image-eg9.pages.dev/file/4a8f5d63c6d02c4466d4c.png\\" alt=\\"5.png\\"><br>\\n<img src=\\"https://290ff162.telegraph-image-eg9.pages.dev/file/1e22b257b346f674fb850.png\\" alt=\\"6.png\\"><br>\\n<img src=\\"https://290ff162.telegraph-image-eg9.pages.dev/file/986d71aa592cea3f3c998.png\\" alt=\\"7.png\\"><br>\\n<img src=\\"https://290ff162.telegraph-image-eg9.pages.dev/file/12da83371510377bf3ba8.png\\" alt=\\"8.png\\"><br>\\n<img src=\\"https://290ff162.telegraph-image-eg9.pages.dev/file/c4b6234550cc8e1bd2268.png\\" alt=\\"9.png\\"><br>\\n<img src=\\"https://290ff162.telegraph-image-eg9.pages.dev/file/0d2a0b6967800c5f9be2a.png\\" alt=\\"10.png\\"><br>\\n<img src=\\"https://290ff162.telegraph-image-eg9.pages.dev/file/f5113dbb606a51484f5bb.png\\" alt=\\"11.png\\"><br>\\n<img src=\\"https://290ff162.telegraph-image-eg9.pages.dev/file/b18714b9fa515816e1433.png\\" alt=\\"12.png\\"><br>\\n<img src=\\"https://290ff162.telegraph-image-eg9.pages.dev/file/ce31ccbf61b3e9bd91be0.png\\" alt=\\"13.png\\"><br>\\n<img src=\\"https://290ff162.telegraph-image-eg9.pages.dev/file/e33b59a7d062218650ec8.png\\" alt=\\"14.png\\"></p>","autoDesc":true}');export{M as comp,O as data};
