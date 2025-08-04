import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as r,c as d,a as e,b as i,d as t,e as s}from"./app-7KT7HDzT.js";const u={},c=s('<p>hibernate</p><ul><li><a href="#1-hibernate%E4%BB%8B%E7%BB%8D">1. hibernate介绍</a></li><li><a href="#2-hibernate%E6%A1%86%E6%9E%B650%E7%9A%84%E6%90%AD%E5%BB%BA">2. hibernate框架5.0的搭建</a></li><li><a href="#3-hibernate-api">3. hibernate-API</a></li><li><a href="#4-hibernate%E5%AF%B9%E8%B1%A1%E7%8A%B6%E6%80%813%E7%A7%8D">4. hibernate对象状态（3种）</a></li><li><a href="#5-hibernate%E4%B8%80%E7%BA%A7%E7%BC%93%E5%AD%98%E5%BF%AB%E7%85%A7">5. hibernate一级缓存+快照</a></li><li><a href="#6-hibernate%E4%BA%8B%E5%8A%A1">6. hibernate事务</a></li><li><a href="#7-no-session%E9%97%AE%E9%A2%98%E5%8F%8A%E5%85%B6%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88">7. no-session问题及其解决方案</a></li><li><a href="#8-hibernate%E5%85%B3%E7%B3%BB%E6%98%A0%E5%B0%84">8. hibernate关系映射</a><ul><li><a href="#81-%E4%B8%80%E5%AF%B9%E5%A4%9A%E5%A4%9A%E5%AF%B9%E4%B8%80">8.1. 一对多|多对一</a></li><li><a href="#82-%E5%A4%9A%E5%AF%B9%E5%A4%9A">8.2. 多对多</a></li></ul></li><li><a href="#9-%E6%9F%A5%E8%AF%A2%E6%80%BB%E7%BB%93session">9. 查询总结(session)</a><ul><li><a href="#91-oid%E6%9F%A5%E8%AF%A2-get">9.1. oid查询-get</a></li><li><a href="#92-%E5%AF%B9%E8%B1%A1%E5%B1%9E%E6%80%A7%E5%AF%BC%E8%88%AA%E6%9F%A5%E8%AF%A2">9.2. 对象属性导航查询</a></li><li><a href="#93-hql%E6%9F%A5%E8%AF%A2-%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%9F%A5%E8%AF%A2%E8%AF%AD%E8%A8%80%E5%A4%9A%E8%A1%A8%E6%9F%A5%E8%AF%A2">9.3. HQL查询-面向对象的查询语言(多表查询)</a></li><li><a href="#94-%E5%8E%9F%E7%94%9Fsql%E5%A4%8D%E6%9D%82%E7%9A%84%E4%B8%9A%E5%8A%A1%E6%9F%A5%E8%AF%A2">9.4. 原生SQL：复杂的业务查询</a></li><li><a href="#95-criteria%E5%8D%95%E8%A1%A8%E6%9D%A1%E4%BB%B6%E6%9F%A5%E8%AF%A2">9.5. Criteria：(单表条件查询)</a></li></ul></li><li><a href="#10-%E6%9F%A5%E8%AF%A2%E4%BC%98%E5%8C%96">10. 查询优化</a></li><li><a href="#11-hibernate%E6%8C%81%E4%B9%85%E5%B1%82%E6%8A%BD%E5%8F%96">11. hibernate持久层抽取</a></li></ul><h1 id="_1-hibernate介绍" tabindex="-1"><a class="header-anchor" href="#_1-hibernate介绍"><span>1. hibernate介绍</span></a></h1>',3),v=e("li",null,"hibernate是一款orm（orm:object relationg mapping. 对象关系映射）框架",-1),o=e("li",null,"其主要作用是在编程中，把面向对象的概念跟数据库中表的概念对应起来",-1),m={href:"http://hibernate.org/",target:"_blank",rel:"noopener noreferrer"},b={href:"http://hibernate.org/orm/documentation/5.4/",target:"_blank",rel:"noopener noreferrer"},h=e("li",null,"操作数据库的时候,可以以面向对象的方式来完成.不需要书写SQL语句",-1),g=e("li",null,"orm分4级：hibernate属于完全面向对象操作数据库、mybatis属于2级、dbutils属于1级",-1),p=s(`<figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/2204f0c7b2f5291d24e6d.png" alt="hibernate.jpg" tabindex="0"><figcaption>hibernate.jpg</figcaption></figure><h1 id="_2-hibernate框架5-0的搭建" tabindex="-1"><a class="header-anchor" href="#_2-hibernate框架5-0的搭建"><span>2. hibernate框架5.0的搭建</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>导包：web-content --&gt;web-INF--&gt;lib
hibernate-commons-annotations-5.0.1.Final.jar
hibernate-core-5.0.7.Final.jar
hibernate-jpa-2.1-api-1.0.0.Final.jar
jandex-2.0.0.Final.jar
javassist-3.18.1-GA.jar
jboss-logging-3.3.0.Final.jar
antlr-2.7.7.jar
dom4j-1.6.1.jar
geronimo-jta_1.1_spec-1.1.1.jar
mysql驱动包mysql-connector-java-5.1.7-bin.jar

建库建表，创建实体src目录的domain包下创建实体对象类(遵循以下规则)
- 不要用final修饰class,hibernate用cglib代理生成代理对象.代理对象是继承被代理对象.若被final修饰.将无法生成代理
- 成员变量私有,属性使用包装类型
- 提供get/set方法访问.需提供属性			
- 提供无参数构造
- 持久化类需要提供oid.与数据库中的主键列对应

orm元数据配置表与实体对象的关系配置文件src-&gt;表名.hbm.xml
- 导入mapping约束 window菜单--&gt; preference--&gt;cata
- 位置：Web App Libraries--hibernate-core-5.0.7.final.jar-org.hibernate-hibernate-mapping-3.0.dtd
&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;!DOCTYPE hibernate-mapping PUBLIC 
&quot;-//Hibernate/Hibernate Mapping DTD 3.0//EN&quot;
&quot;http://www.hibernate.org/dtd/hibernate-mapping-3.0.dtd&quot;&gt;
&lt;!-- package属性:填写一个包名.在元素内部凡是需要书写完整类名的属性,可以直接写简单类名了. --&gt;
&lt;hibernate-mapping package=&quot;&quot; &gt;
	&lt;!--class元素: 配置实体与表的对应关系的 name: 完整类名 table:数据库表名--&gt;
	&lt;class name=&quot;&quot; table=&quot;&quot; &gt;
		&lt;!-- id元素:配置主键映射的属性 name: 填写主键对应属性名
			column(可选): 填写表中的主键列名.默认值:列名会默认使用属性名
			type(可选):填写列(属性)的类型.hibernate会自动检测实体的属性类型.
					每个类型有三种填法: java类型|hibernate类型|数据库类型
			not-null(可选):配置该属性(列)是否不能为空. 默认值:false
			length(可选):配置数据库中列的长度. 默认值:使用数据库类型的最大长度--&gt;
		&lt;id name=&quot;&quot;  column=&quot;&quot;&gt;//属性名和列名
			&lt;generator class=&quot;native&quot;&gt;&lt;/generator&gt;
			&lt;!--generator主键生成策略
			代理主键：
			identity : 主键自增.由数据库来维护主键值.录入时不需要指定主键.
			sequence: Oracle中的主键生成策略.
			hilo(了解): 高低位算法.主键自增.由hibernate来维护.开发时不使用.
			native:hilo+sequence+identity 自动三选一策略.（使用这个换数据库不用改）
			increment(了解): 主键自增.由hibernate来维护.每次插入前先查询表中id最大值+1作为新主键值.线程不安全，效率低开发不使用
			uuid: 产生随机字符串作为主键. 主键类型必须为string 类型.

			自然主键：assigned:自然主键生成策略. hibernate不会管理主键值.录入时指定主键. --&gt;
		&lt;/id&gt;
		&lt;property name=&quot;&quot; column=&quot;&quot; &gt;&lt;/property&gt;&lt;!--与上面差不多--&gt;
	&lt;/class&gt;
&lt;/hibernate-mapping&gt;

主配置文件(src目录--&gt;hibernate.cfg.xml)
- 导入configuration约束window菜单--&gt; preference--&gt;cata
- 位置Web App Libraries--hibernate-core-5.0.7.final.jar-org.hibernate-hibernate-configuration-3.0.dtd
&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;!DOCTYPE hibernate-configuration PUBLIC
&quot;-//Hibernate/Hibernate Configuration DTD 3.0//EN&quot;
&quot;http://www.hibernate.org/dtd/hibernate-configuration-3.0.dtd&quot;&gt;
&lt;hibernate-configuration&gt;
	&lt;session-factory&gt;
		&lt;property name=&quot;hibernate.connection.driver_class&quot;&gt;com.mysql.jdbc.Driver&lt;/property&gt; 
		&lt;property name=&quot;hibernate.connection.url&quot;&gt;jdbc:mysql:///hibernate&lt;/property&gt;
		&lt;property name=&quot;hibernate.connection.username&quot;&gt;root&lt;/property&gt;
		&lt;property name=&quot;hibernate.connection.password&quot;&gt;1234&lt;/property&gt;
		&lt;property name=&quot;hibernate.dialect&quot;&gt;org.hibernate.dialect.MySQLDialect&lt;/property&gt;

		&lt;property name=&quot;hibernate.show_sql&quot;&gt;true&lt;/property&gt;
		&lt;property name=&quot;hibernate.format_sql&quot;&gt;true&lt;/property&gt;
		&lt;!-- ## auto schema export  自动导出表结构. 自动建表
		create自动建表.每次框架运行都创建新表.以前表将会被覆盖,表数据会丢失.(开发测试使用)
		create-drop自动建表.每次框架运行结束都会将所有表删除.(开发环境中测试使用)
		update(推荐)自动生成表.如果已经存在不会再生成.如果表有变动.自动更新表(不删除任何数据)
		validate校验.不自动生成表.每次启动会校验数据库中表是否正确.校验失败.--&gt;
		&lt;property name=&quot;hibernate.hbm2ddl.auto&quot;&gt;update&lt;/property&gt;	
		&lt;mapping resource=&quot;com/hechuangjun/domain/Customer.hbm.xml&quot; /&gt;//引入orm元数据
		&lt;!--指定数据库的隔离级别
		hibernate.connection.isolation 1|2|4|8		
		0001	1	读未提交
		0010	2	读已提交
		0100	4	可重复读（mysql）默认
		1000	8	串行化--&gt;
		&lt;property name=&quot;hibernate.connection.isolation&quot;&gt;4&lt;/property&gt;
		&lt;!-- 指定session与当前线程绑定 --&gt;
		&lt;property name=&quot;hibernate.current_session_context_class&quot;&gt;thread&lt;/property&gt;
	&lt;/session-factory&gt;
&lt;/hibernate-configuration&gt;

测试
class Test Hibernate {
	@Test
	public void fun(){
		Configuration configuration = new Configuration().configure();
		SessionFactory sessionfactory = configuration.buildSessionFactory();
		Session session = sessionfactory.openSession();
		Transaction tx = session.beginTransaction();
		//-----------------
		Customer c=new Customer();
		c.setCust_name(&quot;xiaojun&quot;);
		session.save(c);
		//-----------------
		tx.commit();
		session.close();
		sessionfactory.close();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-hibernate-api" tabindex="-1"><a class="header-anchor" href="#_3-hibernate-api"><span>3. hibernate-API</span></a></h1><ul><li>Configuration:用于加载主配置,orm元数据,创建sessionFactory对象 <ul><li>Configuration conf = new Configuration().configure();默认加载src目录下的hibernate.cfg.xml</li><li>sf = conf.buildSessionFactory();根据主配置信息,创建SessionFactory对象</li></ul></li><li>SessionFactory:创建session,负责保存和使用所有配置信息.消耗内存资源非常大. 线程安全.保证在web项目中,只创建一个sessionFactory <ul><li>获得一个新的session对象 sf.openSession();</li><li>获得一个与线程绑定的session对象 sf.getCurrentSession();//事务操作</li></ul></li><li>Session:操作数据库的核心对象,与数据库之间的连接(会话)类似于JDBC的connection对象 <ul><li>开启事务并获得操作事务对象Transaction tx = session.beginTransaction();</li><li>增:Customer c = new Customer(); session.save(c);</li><li>删:Customer c = session.get(Customer.class, 1l); session.delete(c);</li><li>改:Customer c = session.get(Customer.class, 1l); session.update(c);</li><li>查:session.get(Customer.class, 1l);</li></ul></li><li>Transaction：封装了事务的操作 <ul><li>打开事务：Transaction tx2 = session.beginTransaction();</li><li>提交事务：tx2.commit();</li><li>回滚事务：tx2.rollback();</li><li>释放资源：session.close(); sf.close();</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	public class HibernateUtils {
		private static SessionFactory sf;
		static{
			Configuration conf = new Configuration().configure();
			 sf = conf.buildSessionFactory();
		}
		public static Session openSession(){
			Session session = sf.openSession();
			return session;
			
		}
		public static Session getCurrentSession(){
			Session session = sf.getCurrentSession();
			return session;
		}
	}


	Session session = HibernateUtils.openSession();
	Transaction tx = session.beginTransaction();
	//执行需要执行的操作
	tx.commit();
	session.close();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-hibernate对象状态-3种" tabindex="-1"><a class="header-anchor" href="#_4-hibernate对象状态-3种"><span>4. hibernate对象状态（3种）</span></a></h1><ul><li>瞬时状态：没有id,没有在session缓存中（注意是id、其他普通属性不算）delete</li><li>持久化状态：有id,在session缓存中与session有关（save update get）</li><li>游离/托管状态：有id,没有在session缓存中，与session无关联 close</li></ul><h1 id="_5-hibernate一级缓存-快照" tabindex="-1"><a class="header-anchor" href="#_5-hibernate一级缓存-快照"><span>5. hibernate一级缓存+快照</span></a></h1><p><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/3e1126dc3dfb91c3d9e1a.png" alt="一级缓存.jpg"><br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/2e0a61bfd740e311921f2.png" alt="快照.jpg"></p><h1 id="_6-hibernate事务" tabindex="-1"><a class="header-anchor" href="#_6-hibernate事务"><span>6. hibernate事务</span></a></h1><ul><li>业务开始之前打开事务,业务执行之后提交事务. 执行过程中出现异常.回滚事务</li><li>在dao层操作数据库和service控制事务都需要使用session对象.要确保使用同一个session对象</li><li>调用sf.getCurrentSession()获得与当前线程绑定的session对象。事务提交时session会自动关闭.无需调用close关闭</li><li>必须在hibernate.cfg.xml中指定session与当前线程绑定&lt;property name=&quot;hibernate.current_session_context_class&quot;&gt;thread&lt;/property&gt;</li></ul><h1 id="_7-no-session问题及其解决方案" tabindex="-1"><a class="header-anchor" href="#_7-no-session问题及其解决方案"><span>7. no-session问题及其解决方案</span></a></h1><ul><li>hibernate使用了懒加载后会节省资源，发送要求到dao层，但此时的session已经关闭了，取不出相应的数据</li><li>解决方案：扩大session的作用范围</li></ul><h1 id="_8-hibernate关系映射" tabindex="-1"><a class="header-anchor" href="#_8-hibernate关系映射"><span>8. hibernate关系映射</span></a></h1><h2 id="_8-1-一对多-多对一" tabindex="-1"><a class="header-anchor" href="#_8-1-一对多-多对一"><span>8.1. 一对多|多对一</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>班级（一）与学生(多)
表中的表达：多方（学生从表）外键引用一方（班级主表）主键
实体中的表达private Set&lt;多&gt; 多(一方班级);private 一 一(多方学生);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	orm元数据中分别新建hbm.xml表达并在主配置引入orm数据源
	&lt;!-- name:表达一对多的集合属性名column: 外键列名class: 关联对象完整类名（many）--&gt;
	&lt;!--
	cascade级联操作
	save-update: 级联保存更新（推荐）
	delete:级联删除，删除一的数据，多的外键还在
	all:save-update+delete
	
	inverse(反转)属性: 
	配置关系是否维护. 性能优化.提高关系维护的性能.
	true: 不维护关系
	false(默认值): 维护关系,删除一的数据，多的外键消失

	在保存时.当两方都会维护外键关系.关系维护两次,冗余了. 
	多余的维护关系语句,显然是一方在维护关系（通过更新外键来维护的）
	原则: 一对多关系中: 一的一方放弃.多的一方不能放弃.
	如果一方放弃维护与多方的关系. 维护关系的代码可以省略
	--&gt;
	&lt;set name=&quot;&quot;  cascade=&quot;delete&quot; inverse=&quot;true&quot;&gt;
		&lt;key column=&quot;&quot; &gt;&lt;/key&gt;
		&lt;one-to-many class=&quot;&quot; /&gt;
	&lt;/set&gt;
	
	&lt;!-- name:表达多对一关系的属性名column: 外键列名class: 关联对象完整类名（one）--&gt;
	&lt;many-to-one name=&quot;&quot; column=&quot;&quot; class=&quot;&quot; &gt;&lt;/many-to-one&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>java代码
//增
Customer c = session.get(Customer.class,1l);
LinkMan lm1 = new LinkMan();
lm1.setLkm_name(&quot;test&quot;);
c.getLinkMens().add(lm1);
lm1.setCustomer(c);
session.save(lm1);
//存
Customer c = new Customer();
c.setCust_name(&quot;test1&quot;);	
LinkMan lm1 = new LinkMan();
lm1.setLkm_name(&quot;test2&quot;);
LinkMan lm2 = new LinkMan();
lm2.setLkm_name(&quot;test3&quot;);

c.getLinkMens().add(lm1);
c.getLinkMens().add(lm2);

lm1.setCustomer(c);
lm2.setCustomer(c);
session.save(c);
session.save(lm1);
session.save(lm2);
//删
Customer c = session.get(Customer.class,1l);
LinkMan lm = session.get(LinkMan.class, 3l);
c.getLinkMens().remove(lm);
lm.setCustomer(null);
session.save(c);
session.save(lm);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-2-多对多" tabindex="-1"><a class="header-anchor" href="#_8-2-多对多"><span>8.2. 多对多</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>表中的表达：通过中间表（从表）两个外键引用两个表的（主表）主键
实体中的表达：private Set&lt;多&gt; 多; private Set&lt;多&gt; 多;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	orm元数据中分别新建hbm.xml表达注意在主配置引入orm数据源
	- 级联属性cascade级联操作:
		- save-update: 级联保存更新(建议)
		- delete:级联删除(注意使用)
		- all:级联保存更新+级联删除
	- 使用inverse属性
		- true: 放弃维护外键关系
		- false(默认值):维护关系		
		- 多对多关系.一定要选择一方放弃维护关系.(看业务方向)
	name: 集合属性名table: 配置中间表名
		key
		|-column:外键,别人引用&quot;我&quot;的外键列名
		class: 我与哪个类是多对多关系
		column:外键.我引用比人的外键列名
		&lt;set name=&quot;&quot; table=&quot;&quot; &gt;
		&lt;key column=&quot;&quot; &gt;&lt;/key&gt;
		&lt;many-to-many class=&quot;&quot; column=&quot;&quot; &gt;&lt;/many-to-many&gt;
		&lt;/set&gt;
		&lt;set name=&quot;&quot; table=&quot;&quot; &gt;
		&lt;key column=&quot;&quot; &gt;&lt;/key&gt;
		&lt;many-to-many class=&quot;&quot; column=&quot;&quot; &gt;&lt;/many-to-many&gt;
		&lt;/set&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>java代码
u1.getRoles().add(r1);
u1.getRoles().add(r2);

u2.getRoles().add(r1);
u2.getRoles().add(r2);
		
r1.getUsers().add(u1);
r1.getUsers().add(u2);
		
r2.getUsers().add(u1);
r2.getUsers().add(u2);
		
session.save(u1);
session.save(u2);
session.save(r1);
session.save(r2);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_9-查询总结-session" tabindex="-1"><a class="header-anchor" href="#_9-查询总结-session"><span>9. 查询总结(session)</span></a></h1><h2 id="_9-1-oid查询-get" tabindex="-1"><a class="header-anchor" href="#_9-1-oid查询-get"><span>9.1. oid查询-get</span></a></h2><h2 id="_9-2-对象属性导航查询" tabindex="-1"><a class="header-anchor" href="#_9-2-对象属性导航查询"><span>9.2. 对象属性导航查询</span></a></h2><h2 id="_9-3-hql查询-面向对象的查询语言-多表查询" tabindex="-1"><a class="header-anchor" href="#_9-3-hql查询-面向对象的查询语言-多表查询"><span>9.3. HQL查询-面向对象的查询语言(多表查询)</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>单表查询
基础语法
String hql = &quot; from  cn.domain.Customer &quot;;
Query query = session.createQuery(hql);
List list = query.list();//接受list结果    
//query.uniqueResult();//接收唯一的查询结果

排序
String hql1 = &quot; from  cn.domain.Customer order by cust_id asc &quot;;
String hql2 = &quot; from  cn.domain.Customer order by cust_id desc &quot;;
Query query = session.createQuery(hql2);	
List list = query.list();

聚合
String hql1 = &quot; select count(*) from  cn.domain.Customer  &quot;;
String hql2 = &quot; select sum(cust_id) from  cn.domain.Customer  &quot;;
String hql3 = &quot; select avg(cust_id) from  cn.domain.Customer  &quot;;
String hql4 = &quot; select max(cust_id) from  cn.domain.Customer  &quot;;
String hql5 = &quot; select min(cust_id) from  cn.domain.Customer  &quot;;		
Query query = session.createQuery(hql5);
Number number  = (Number) query.uniqueResult();

投影（查询一部分）
String hql1 = &quot; select cust_name from  cn.domain.Customer&quot;;
//把列名封装到对象中，同时要在对象中写这个构造函数和无参构造
String hql3 = &quot; select new Customer(id,name) from  cn.domain.Customer&quot;;
Query query = session.createQuery(hql3);
List list = query.list();

分页
String hql1 = &quot; from cn.domain.Customer  &quot;;
Query query = session.createQuery(hql1);//limit ?,? (当前页数-1)*每页条数
query.setFirstResult(2);
query.setMaxResults(2);	
List list = query.list();

条件
？占位符
String hql1 = &quot; from  cn.domain.Customer where cust_id =? &quot;;
Query query = session.createQuery(hql1);	
query.setParameter(0, 2l);	
Customer c=(Customer)query.uniqueResult();//接收唯一的查询结果

命名占位符
String hql = &quot; from  cn.domain.Customer where cust_id = :id &quot;;
Query query = session.createQuery(hql1);
query.setParameter(&quot;id&quot;, 2l);
Customer c=(Customer)query.uniqueResult();//接收唯一的查询结果

多表查询
原生SQL:交叉连接-笛卡尔积(避免)select * from A,B 

内连接
隐式内连接:select * from A,B  where b.aid = a.id
显式内连接:select * from A inner join B on b.aid = a.id

外连接
左外:select * from A left [outer] join B on b.aid = a.id
右外:select * from A right [outer] join B on b.aid = a.id

内连接：将连接的两端对象分别返回.放到数组中.
普通内连接
String hql = &quot; from Customer c inner join c.linkMens &quot;;
Query query = session.createQuery(hql);
List&lt;Object[]&gt; list = query.list();
for(Object[] arr : list){
	System.out.println(Arrays.toString(arr));
}
迫切内连接 =&gt; 帮我们进行封装.返回值就是一个对象
String hql = &quot; from Customer c inner join fetch c.linkMens &quot;;
Query query = session.createQuery(hql);
List&lt;Customer&gt; list = query.list();

外连接
左外链接（迫切）: 将连接的两端对象分别返回.放到数组中.
String hql = &quot; from Customer c left join c.linkMens &quot;;	
Query query = session.createQuery(hql);	
List&lt;Object[]&gt; list = query.list();	
for(Object[] arr : list){
	System.out.println(Arrays.toString(arr));
}
右外连接（迫切）：将连接的两端对象分别返回.放到数组中.
String hql = &quot; from Customer c right join c.linkMens &quot;;
Query query = session.createQuery(hql);
List&lt;Object[]&gt; list = query.list();
for(Object[] arr : list){
	System.out.println(Arrays.toString(arr));
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-4-原生sql-复杂的业务查询" tabindex="-1"><a class="header-anchor" href="#_9-4-原生sql-复杂的业务查询"><span>9.4. 原生SQL：复杂的业务查询</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>基本查询
返回数组List
String sql = &quot;select * from cst_customer&quot;;	
SQLQuery query = session.createSQLQuery(sql);
List&lt;Object[]&gt; list = query.list();
//query.uniqueResult();
for(Object[] objs : list){
	System.out.println(Arrays.toString(objs));
}

返回对象List
String sql = &quot;select * from cst_customer&quot;;	
SQLQuery query = session.createSQLQuery(sql);
query.addEntity(Customer.class);
List&lt;Customer&gt; list = query.list();

条件查询
String sql = &quot;select * from cst_customer where cust_id = ? &quot;;
SQLQuery query = session.createSQLQuery(sql);
query.setParameter(0, 1l);
query.addEntity(Customer.class);	
List&lt;Customer&gt; list = query.list();

分页查询
String sql = &quot;select * from cst_customer  limit ?,? &quot;;
SQLQuery query = session.createSQLQuery(sql);
query.setParameter(0, 0);
query.setParameter(1, 1);
query.addEntity(Customer.class);
List&lt;Customer&gt; list = query.list();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-5-criteria-单表条件查询" tabindex="-1"><a class="header-anchor" href="#_9-5-criteria-单表条件查询"><span>9.5. Criteria：(单表条件查询)</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>基本
Criteria c = session.createCriteria(Customer.class);
List&lt;Customer&gt; list = c.list();

条件
//HQL语句中,不可能出现任何数据库相关的信息的
Criteria c = session.createCriteria(Customer.class);		
c.add(Restrictions.idEq(2l));//id专用
c.add(Restrictions.eq(&quot;cust_id&quot;,2l));//其他属性字段
List&lt;Customer&gt; list = c.list();   
Customer c = (Customer) criteria.uniqueResult();

分页limit ?,? 
Criteria c = session.createCriteria(Customer.class);
c.setFirstResult(0);
c.setMaxResults(2);		
List&lt;Customer&gt; list = c.list();

排序
Criteria c = session.createCriteria(Customer.class);	
c.addOrder(Order.asc(&quot;cust_id&quot;));//升序
c.addOrder(Order.desc(&quot;cust_id&quot;));//降序
List&lt;Customer&gt; list = c.list();	

统计(查询总记录数)
Criteria c = session.createCriteria(Customer.class);
c.setProjection(Projections.rowCount());//设置查询目标
List list = c.list();

离线查询
//Service/web层
DetachedCriteria dc  = DetachedCriteria.forClass(Customer.class);	
dc.add(Restrictions.idEq(6l));//拼装条件(全部与普通Criteria一致)		
//----------------------------------------------------
Session session = HibernateUtils.openSession();
Transaction tx = session.beginTransaction();
//----------------------------------------------------
Criteria c = dc.getExecutableCriteria(session);
List list = c.list();		
//----------------------------------------------------
tx.commit();
session.close();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32),q=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"方法名"),e("th",{style:{"text-align":"center"}},"说明")])],-1),y=e("td",{style:{"text-align":"center"}},">",-1),f={style:{"text-align":"center"}},E={href:"http://Restrictions.gt",target:"_blank",rel:"noopener noreferrer"},A=e("td",{style:{"text-align":"center"}},">=",-1),_={style:{"text-align":"center"}},x={href:"http://Restrictions.ge",target:"_blank",rel:"noopener noreferrer"},C=e("td",{style:{"text-align":"center"}},"<",-1),B={style:{"text-align":"center"}},S={href:"http://Restrictions.lt",target:"_blank",rel:"noopener noreferrer"},F=e("tr",null,[e("td",{style:{"text-align":"center"}},"<="),e("td",{style:{"text-align":"center"}},"Restrictions.le")],-1),L=e("tr",null,[e("td",{style:{"text-align":"center"}},"=="),e("td",{style:{"text-align":"center"}},"Restrictions.eq")],-1),j=e("td",{style:{"text-align":"center"}},"!=",-1),T={style:{"text-align":"center"}},k={href:"http://Restrictions.ne",target:"_blank",rel:"noopener noreferrer"},Q=e("td",{style:{"text-align":"center"}},"in",-1),D={style:{"text-align":"center"}},w={href:"http://Restrictions.in",target:"_blank",rel:"noopener noreferrer"},R=e("tr",null,[e("td",{style:{"text-align":"center"}},"between and"),e("td",{style:{"text-align":"center"}},"Restrictions.between")],-1),P=e("tr",null,[e("td",{style:{"text-align":"center"}},"like"),e("td",{style:{"text-align":"center"}},"Restrictions.like")],-1),H=e("tr",null,[e("td",{style:{"text-align":"center"}},"is not null"),e("td",{style:{"text-align":"center"}},"Restrictions.isNotNull")],-1),z=e("tr",null,[e("td",{style:{"text-align":"center"}},"is null"),e("td",{style:{"text-align":"center"}},"Restrictions.isNull")],-1),O=e("tr",null,[e("td",{style:{"text-align":"center"}},"or"),e("td",{style:{"text-align":"center"}},"or")],-1),M=e("tr",null,[e("td",{style:{"text-align":"center"}},"and"),e("td",{style:{"text-align":"center"}},"and")],-1),N=s(`<h1 id="_10-查询优化" tabindex="-1"><a class="header-anchor" href="#_10-查询优化"><span>10. 查询优化</span></a></h1><ul><li>类级别查询（原理：代理对象） <ul><li>get方法:没有任何策略.调用即立即查询数据库加载数据.</li><li>load方法(默认):应用级别加载策略，是在执行时,不发送任何sql语句.返回一个对象.使用该对象时,才执行查询(建议)</li><li>在orm数据源中配置<code>&lt;class name=&quot;&quot; table=&quot;&quot; lazy=&quot;false&quot; &gt;</code><ul><li>lazy(默认值):true, 查询类时,会返回代理对象（variable中有$.）会在使用属性时,根据关联的session查询数据库.加载数据.</li><li>lazy:false. load与get没有任何区别.调用时即加载数据.</li></ul></li><li>注意:使用懒加载时要确保,调用属性加载数据时,session还是打开的.不然会抛出异常</li></ul></li><li>关联级别查询 <ul><li>关联集合策略（one to many）在hbm.xml的set配置 <ul><li>lazy属性: 决定是否延迟加载 <ul><li>true(默认值): 延迟加载,懒加载</li><li>false: 立即加载</li><li>extra: 极其懒惰.与懒加载效果基本一致. 如果只获得集合的size.只查询集合的size(count语句)</li></ul></li><li>fetch属性: 决定加载策略.使用什么类型的sql语句加载集合数据 <ul><li>select(默认值): 单表查询加载（不影响lazy）</li><li>join: 使用多表查询加载集合（能使lazy加载失效，立即加载）</li><li>subselect:使用子查询加载集合（不影响lazy）没子查询不要配置，加载批量子查询</li></ul></li></ul></li><li>关联属性策略（many to one）在hbm.xml的set配置 <ul><li>lazy属性：决定加载时机 <ul><li>false: 立即加载</li><li>proxy: 由customer的类级别加载策略决定.</li></ul></li><li>fetch 决定加载的sql语句 <ul><li>select: 使用单表查询</li><li>join : 多表查询</li></ul></li></ul></li></ul></li><li>为了提高效率.fetch的选择上应选择select. lazy的取值应选择true. 全部使用默认值.</li><li>批量抓取在hbm.xml的set配置 <ul><li>batch-size: 抓取集合的数量为3.抓取客户的集合时,一次抓取几个客户的联系人集合.</li></ul></li></ul><h1 id="_11-hibernate持久层抽取" tabindex="-1"><a class="header-anchor" href="#_11-hibernate持久层抽取"><span>11. hibernate持久层抽取</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	package com.itheima.bos.dao.base.impl;
	import java.io.Serializable;
	import java.lang.reflect.ParameterizedType;
	import java.lang.reflect.Type;
	import java.util.List;

	import javax.annotation.Resource;

	import org.hibernate.Query;
	import org.hibernate.Session;
	import org.hibernate.SessionFactory;
	import org.hibernate.criterion.DetachedCriteria;
	import org.hibernate.criterion.Projections;
	import org.springframework.orm.hibernate5.support.HibernateDaoSupport;
	import com.itheima.bos.dao.base.IBaseDao;
	import com.itheima.bos.utils.PageBean;
	/**
	 * 持久层通用实现
	 */
	public class BaseDaoImpl&lt;T&gt; extends HibernateDaoSupport implements IBaseDao&lt;T&gt; {
		//代表的是某个实体的类型
		private Class&lt;T&gt; entityClass;
		
		@Resource//根据类型注入spring工厂中的会话工厂对象sessionFactory
		public void setMySessionFactory(SessionFactory sessionFactory){
			super.setSessionFactory(sessionFactory);
		}
		
		//在父类（BaseDaoImpl）的构造方法中动态获得entityClass
		public BaseDaoImpl() {
			ParameterizedType superclass = (ParameterizedType) this.getClass().getGenericSuperclass();
			//获得父类上声明的泛型数组
			Type[] actualTypeArguments = superclass.getActualTypeArguments();
			entityClass = (Class&lt;T&gt;) actualTypeArguments[0];
		}
		
		public void save(T entity) {
			this.getHibernateTemplate().save(entity);
		}
		
		public void delete(T entity) {
			this.getHibernateTemplate().delete(entity);
		}
		
		public void update(T entity) {
			this.getHibernateTemplate().update(entity);
		}

		public T findById(Serializable id) {
			return this.getHibernateTemplate().get(entityClass, id);
		}

		public List&lt;T&gt; findAll() {
			String hql = &quot;FROM &quot; + entityClass.getSimpleName();
			return (List&lt;T&gt;) this.getHibernateTemplate().find(hql);
		}

		//执行更新，批量删除
		public void executeUpdate(String queryName, Object... objects) {
			Session session = this.getSessionFactory().getCurrentSession();
			Query query = session.getNamedQuery(queryName);
			int i = 0;
			for (Object object : objects) {
				//为HQL语句中的？赋值
				query.setParameter(i++, object);
			}
			//执行更新
			query.executeUpdate();
		}
		//executeUpdate使用queryName为user.editpassword
		&lt;query name=&quot;user.editpassword&quot;&gt;
			UPDATE User SET password = ? WHERE id = ?
		&lt;/query&gt;

		/**
		 * 通用分页查询方法
		 */
		public void pageQuery(PageBean pageBean) {
			int currentPage = pageBean.getCurrentPage();
			int pageSize = pageBean.getPageSize();
			DetachedCriteria detachedCriteria = pageBean.getDetachedCriteria();
			
			//查询total---总数据量
			detachedCriteria.setProjection(Projections.rowCount());
			//指定hibernate框架发出sql的形式----》select count(*) from bc_staff;
			List&lt;Long&gt; countList = (List&lt;Long&gt;) this.getHibernateTemplate().findByCriteria(detachedCriteria);
			Long count = countList.get(0);
			pageBean.setTotal(count.intValue());
			
			//查询rows---当前页需要展示的数据集合
			detachedCriteria.setProjection(null);//指定hibernate框架发出sql的形式----》select * from bc_staff;
			//指定hibernate框架封装对象的方式
			detachedCriteria.setResultTransformer(DetachedCriteria.ROOT_ENTITY);
			int firstResult = (currentPage - 1) * pageSize;
			int maxResults = pageSize;
			List rows = this.getHibernateTemplate().findByCriteria(detachedCriteria, firstResult, maxResults);
			pageBean.setRows(rows);
		}

		public void saveOrUpdate(T entity) {
			this.getHibernateTemplate().saveOrUpdate(entity);
		}

		public List&lt;T&gt; findByCriteria(DetachedCriteria detachedCriteria) {
			return (List&lt;T&gt;) this.getHibernateTemplate().findByCriteria(detachedCriteria);
		}
	}


	hiebernate分页的封装
	public class PageBean {
		private int currentPage;//当前页码
		private int pageSize;//每页显示的记录数
		private DetachedCriteria detachedCriteria;//查询条件
		private int total;//总记录数
		private List rows;//当前页需要展示的数据集合
		set/get方法;
	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function U(I,J){const n=a("ExternalLinkIcon");return r(),d("div",null,[c,e("ul",null,[v,o,e("li",null,[i("hibernate官网"),e("a",m,[i("http://hibernate.org/"),t(n)])]),e("li",null,[i("hibernate文档"),e("a",b,[i("http://hibernate.org/orm/documentation/5.4/"),t(n)])]),h,g]),p,e("table",null,[q,e("tbody",null,[e("tr",null,[y,e("td",f,[e("a",E,[i("Restrictions.gt"),t(n)])])]),e("tr",null,[A,e("td",_,[e("a",x,[i("Restrictions.ge"),t(n)])])]),e("tr",null,[C,e("td",B,[e("a",S,[i("Restrictions.lt"),t(n)])])]),F,L,e("tr",null,[j,e("td",T,[e("a",k,[i("Restrictions.ne"),t(n)])])]),e("tr",null,[Q,e("td",D,[e("a",w,[i("Restrictions.in"),t(n)])])]),R,P,H,z,O,M])]),N])}const G=l(u,[["render",U],["__file","hibernate.html.vue"]]),W=JSON.parse('{"path":"/backend/ormframework/hibernate.html","title":"Hibernate","lang":"zh-CN","frontmatter":{"title":"Hibernate","date":"2023-01-01T00:00:00.000Z","tags":"Hibrenate","categories":"后端","description":"hibernate 1. hibernate介绍 2. hibernate框架5.0的搭建 3. hibernate-API 4. hibernate对象状态（3种） 5. hibernate一级缓存+快照 6. hibernate事务 7. no-session问题及其解决方案 8. hibernate关系映射 8.1. 一对多|多对一 8.2. 多...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/ormframework/hibernate.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"Hibernate"}],["meta",{"property":"og:description","content":"hibernate 1. hibernate介绍 2. hibernate框架5.0的搭建 3. hibernate-API 4. hibernate对象状态（3种） 5. hibernate一级缓存+快照 6. hibernate事务 7. no-session问题及其解决方案 8. hibernate关系映射 8.1. 一对多|多对一 8.2. 多..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/2204f0c7b2f5291d24e6d.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Hibernate\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/2204f0c7b2f5291d24e6d.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/3e1126dc3dfb91c3d9e1a.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/2e0a61bfd740e311921f2.png\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"8.1. 一对多|多对一","slug":"_8-1-一对多-多对一","link":"#_8-1-一对多-多对一","children":[]},{"level":2,"title":"8.2. 多对多","slug":"_8-2-多对多","link":"#_8-2-多对多","children":[]},{"level":2,"title":"9.1. oid查询-get","slug":"_9-1-oid查询-get","link":"#_9-1-oid查询-get","children":[]},{"level":2,"title":"9.2. 对象属性导航查询","slug":"_9-2-对象属性导航查询","link":"#_9-2-对象属性导航查询","children":[]},{"level":2,"title":"9.3. HQL查询-面向对象的查询语言(多表查询)","slug":"_9-3-hql查询-面向对象的查询语言-多表查询","link":"#_9-3-hql查询-面向对象的查询语言-多表查询","children":[]},{"level":2,"title":"9.4. 原生SQL：复杂的业务查询","slug":"_9-4-原生sql-复杂的业务查询","link":"#_9-4-原生sql-复杂的业务查询","children":[]},{"level":2,"title":"9.5. Criteria：(单表条件查询)","slug":"_9-5-criteria-单表条件查询","link":"#_9-5-criteria-单表条件查询","children":[]}],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":15.31,"words":4594},"filePathRelative":"backend/ormframework/hibernate.md","localizedDate":"2023年1月1日","excerpt":"<p>hibernate</p>\\n<!--more-->\\n<!-- TOC -->\\n<ul>\\n<li><a href=\\"#1-hibernate%E4%BB%8B%E7%BB%8D\\">1. hibernate介绍</a></li>\\n<li><a href=\\"#2-hibernate%E6%A1%86%E6%9E%B650%E7%9A%84%E6%90%AD%E5%BB%BA\\">2. hibernate框架5.0的搭建</a></li>\\n<li><a href=\\"#3-hibernate-api\\">3. hibernate-API</a></li>\\n<li><a href=\\"#4-hibernate%E5%AF%B9%E8%B1%A1%E7%8A%B6%E6%80%813%E7%A7%8D\\">4. hibernate对象状态（3种）</a></li>\\n<li><a href=\\"#5-hibernate%E4%B8%80%E7%BA%A7%E7%BC%93%E5%AD%98%E5%BF%AB%E7%85%A7\\">5. hibernate一级缓存+快照</a></li>\\n<li><a href=\\"#6-hibernate%E4%BA%8B%E5%8A%A1\\">6. hibernate事务</a></li>\\n<li><a href=\\"#7-no-session%E9%97%AE%E9%A2%98%E5%8F%8A%E5%85%B6%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88\\">7. no-session问题及其解决方案</a></li>\\n<li><a href=\\"#8-hibernate%E5%85%B3%E7%B3%BB%E6%98%A0%E5%B0%84\\">8. hibernate关系映射</a>\\n<ul>\\n<li><a href=\\"#81-%E4%B8%80%E5%AF%B9%E5%A4%9A%E5%A4%9A%E5%AF%B9%E4%B8%80\\">8.1. 一对多|多对一</a></li>\\n<li><a href=\\"#82-%E5%A4%9A%E5%AF%B9%E5%A4%9A\\">8.2. 多对多</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#9-%E6%9F%A5%E8%AF%A2%E6%80%BB%E7%BB%93session\\">9. 查询总结(session)</a>\\n<ul>\\n<li><a href=\\"#91-oid%E6%9F%A5%E8%AF%A2-get\\">9.1. oid查询-get</a></li>\\n<li><a href=\\"#92-%E5%AF%B9%E8%B1%A1%E5%B1%9E%E6%80%A7%E5%AF%BC%E8%88%AA%E6%9F%A5%E8%AF%A2\\">9.2. 对象属性导航查询</a></li>\\n<li><a href=\\"#93-hql%E6%9F%A5%E8%AF%A2-%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%9F%A5%E8%AF%A2%E8%AF%AD%E8%A8%80%E5%A4%9A%E8%A1%A8%E6%9F%A5%E8%AF%A2\\">9.3. HQL查询-面向对象的查询语言(多表查询)</a></li>\\n<li><a href=\\"#94-%E5%8E%9F%E7%94%9Fsql%E5%A4%8D%E6%9D%82%E7%9A%84%E4%B8%9A%E5%8A%A1%E6%9F%A5%E8%AF%A2\\">9.4. 原生SQL：复杂的业务查询</a></li>\\n<li><a href=\\"#95-criteria%E5%8D%95%E8%A1%A8%E6%9D%A1%E4%BB%B6%E6%9F%A5%E8%AF%A2\\">9.5. Criteria：(单表条件查询)</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#10-%E6%9F%A5%E8%AF%A2%E4%BC%98%E5%8C%96\\">10. 查询优化</a></li>\\n<li><a href=\\"#11-hibernate%E6%8C%81%E4%B9%85%E5%B1%82%E6%8A%BD%E5%8F%96\\">11. hibernate持久层抽取</a></li>\\n</ul>","autoDesc":true}');export{G as comp,W as data};
