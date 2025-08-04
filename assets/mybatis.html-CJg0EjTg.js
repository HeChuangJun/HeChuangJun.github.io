import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as i,e as n}from"./app-7KT7HDzT.js";const s={},l=n(`<p>Mybatis</p><ul><li><a href="#1-mybatis%E4%BB%8B%E7%BB%8D">1. Mybatis介绍</a></li><li><a href="#2-mybatis%E6%9E%B6%E6%9E%84">2. Mybatis架构</a></li><li><a href="#3-mybatis%E5%85%A5%E9%97%A8%E7%A8%8B%E5%BA%8F">3. Mybatis入门程序</a></li><li><a href="#4-mapper%E5%8A%A8%E6%80%81%E4%BB%A3%E7%90%86%E5%BC%80%E5%8F%91%E6%8C%81%E4%B9%85%E5%B1%82%E6%96%B9%E6%B3%95">4. Mapper动态代理开发持久层方法</a></li><li><a href="#5-sqlmapconfigxml%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6">5. SqlMapConfig.xml配置文件</a></li><li><a href="#6-mapperxml">6. Mapper.xml</a></li><li><a href="#7-mybatis%E6%95%B4%E5%90%88spring">7. Mybatis整合spring</a></li><li><a href="#8-mybatis%E9%80%86%E5%90%91%E5%B7%A5%E7%A8%8B%E4%BA%86%E8%A7%A3">8. Mybatis逆向工程（了解）</a></li><li><a href="#9-%E5%88%86%E9%A1%B5%E6%8F%92%E4%BB%B6pagehelper">9. 分页插件PageHelper</a></li></ul><h1 id="_1-mybatis介绍" tabindex="-1"><a class="header-anchor" href="#_1-mybatis介绍"><span>1. Mybatis介绍</span></a></h1><ul><li>MyBatis是优秀的持久层框架，对jdbc的操作数据库的过程进行封装</li><li>使开发者只需要关注SQL本身，而不需要花费精力去处理例如注册驱动、创建connection、创建statement、手动设置参数、结果集检索等jdbc繁杂的过程代码</li><li>Mybatis通过xml或注解的方式将要执行的各种statement（statement、preparedStatemnt、CallableStatement）配置起来。并通过java对象和statement中的sql进行映射生成最终执行的sql语句，最后由mybatis框架执行sql并将结果映射成java对象并返回</li></ul><h1 id="_2-mybatis架构" tabindex="-1"><a class="header-anchor" href="#_2-mybatis架构"><span>2. Mybatis架构</span></a></h1><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/1500ef07f438bf61f8679.png" alt="mybatis.png" tabindex="0"><figcaption>mybatis.png</figcaption></figure><h1 id="_3-mybatis入门程序" tabindex="-1"><a class="header-anchor" href="#_3-mybatis入门程序"><span>3. Mybatis入门程序</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>导包
commons-logging-1.1.1.jar
javassist-3.17.1-GA.jar
log4j-1.2.17.jar
log4j-api-2.0-rc1.jar
log4j-core-2.0-rc1.jar
slf4j-api-1.7.5.jar
slf4j-log4j12-1.7.5.jar
asm-3.3.1.jar
cglib-2.2.2.jar

在src下创建log4j.properties
# Global logging configuration
log4j.rootLogger=DEBUG, stdout
# Console output...
log4j.appender.stdout=org.apache.log4j.ConsoleAppender
log4j.appender.stdout.layout=org.apache.log4j.PatternLayout
log4j.appender.stdout.layout.ConversionPattern=%5p [%t] - %m%n
mybatis默认使用log4j作为输出日志信息。
	
在src下创建SqlMapConfig.xml
SqlMapConfig.xml是mybatis核心配置文件，内容为数据源、事务管理
&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;
	&lt;!DOCTYPE configuration
	PUBLIC &quot;-//mybatis.org//DTD Config 3.0//EN&quot;
	&quot;http://mybatis.org/dtd/mybatis-3-config.dtd&quot;&gt;
	&lt;configuration&gt;
		&lt;!-- 和spring整合后 environments配置将废除 --&gt;
		&lt;environments default=&quot;development&quot;&gt;
			&lt;environment id=&quot;development&quot;&gt;
			&lt;!-- 使用jdbc事务管理 --&gt;
			&lt;transactionManager type=&quot;JDBC&quot; /&gt;
				&lt;!-- 数据库连接池 --&gt;
				&lt;dataSource type=&quot;POOLED&quot;&gt;
					&lt;property name=&quot;driver&quot; value=&quot;com.mysql.jdbc.Driver&quot; /&gt;
					&lt;property name=&quot;url&quot; value=&quot;jdbc:mysql://localhost:3306/mybatis?characterEncoding=utf-8&quot; /&gt;
					&lt;property name=&quot;username&quot; value=&quot;root&quot; /&gt;
					&lt;property name=&quot;password&quot; value=&quot;root&quot; /&gt;
				&lt;/dataSource&gt;
			&lt;/environment&gt;
		&lt;/environments&gt;
		&lt;!--加载配置文件--&gt;
		&lt;mappers&gt;
			&lt;mapper resource=&quot;sqlmap/User.xml&quot;/&gt;
		&lt;/mappers&gt;
	&lt;/configuration&gt;

创建pojo类生成set、get方法并创建对应的表

在src下的sqlmap目录下创建sql映射文件User.xml
mybatis框架需要加载Mapper.xml映射文件 将user.xml添加在SqlMapConfig.xml
&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;
	&lt;!DOCTYPE mapper
	PUBLIC &quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;
	&quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;&gt;
	&lt;!-- namespace：命名空间，用于隔离sql --&gt;
	&lt;mapper namespace=&quot;test&quot;&gt;
	&lt;!-- id:statement的id 或者叫做sql的id--&gt;
	&lt;!-- parameterType:声明输入参数的类型 --&gt;
	&lt;!-- resultType:声明输出结果的类型，应该填写pojo的全路径 --&gt;
	&lt;!-- #{}：输入参数的占位符，相当于jdbc的？ --&gt;
	&lt;!--实现根据id查询用户（传入基本值）--&gt;
	&lt;select id=&quot;queryUserById&quot; parameterType=&quot;int&quot; resultType=&quot;cn.mybatis.pojo.User&quot;&gt;
		SELECT * FROM \`user\` WHERE id  = #{id}
	&lt;/select&gt;
	&lt;!-- 如果返回多个结果，mybatis会自动把返回的结果放在list容器中 --&gt;
	&lt;!-- resultType的配置和返回一个结果的配置一样 --&gt;
	&lt;!-- ①方式一：实现根据用户名模糊查询用户 --&gt;
	&lt;select id=&quot;queryUserByUsername1&quot; parameterType=&quot;string&quot; resultType=&quot;cn.itcast.mybatis.pojo.User&quot;&gt;
		SELECT * FROM \`user\` WHERE username LIKE #{username}
	&lt;/select&gt;
	&lt;!-- ②方式二：实现根据用户名模糊查询用户--&gt;
	&lt;!-- 如果传入的参数是简单数据类型，\${}里面必须写value --&gt;
	&lt;select id=&quot;queryUserByUsername2&quot; parameterType=&quot;string&quot; resultType=&quot;cn.itcast.mybatis.pojo.User&quot;&gt;
		SELECT * FROM \`user\` WHERE username LIKE &#39;%\${value}%&#39;
	&lt;/select&gt;
	&lt;!-- 实现添加用户(传入对象) --&gt;
	&lt;insert id=&quot;saveUser&quot; parameterType=&quot;cn.itcast.mybatis.pojo.User&quot;&gt;
		INSERT INTO \`user\`
		(username,birthday,sex,address) VALUES
		(#{username},#{birthday},#{sex},#{address})
	&lt;/insert&gt;	
	&lt;!-- mysql自增主键返回--&gt;
	&lt;insert id=&quot;saveUser&quot; parameterType=&quot;cn.mybatis.pojo.User&quot;&gt;
	&lt;!-- selectKey 标签实现主键返回 --&gt;
	&lt;!-- keyColumn:主键对应的表中的哪一列 --&gt;
	&lt;!-- keyProperty：主键对应的pojo中的哪一个属性 --&gt;
	&lt;!-- order：设置在执行insert语句前执行查询id的sql，
	在执行insert语句之后执行查询id的sql --&gt;
	&lt;!-- resultType：设置返回的id的类型 --&gt;
	&lt;!-- LAST_INSERT_ID():是mysql的函数，返回auto_increment自增列新记录id值--&gt;
	&lt;selectKey keyColumn=&quot;id&quot; keyProperty=&quot;id&quot; order=&quot;AFTER&quot; resultType=&quot;int&quot;&gt;
		SELECT LAST_INSERT_ID()
	&lt;/selectKey&gt;
		INSERT INTO \`user\`
		(username,birthday,sex,address) VALUES
		(#{username},#{birthday},#{sex},#{address})
	&lt;/insert&gt;
	&lt;!--mysql uuid实现主键返回 注意这里使用的order是“BEFORE”--&gt;
	&lt;selectKey keyColumn=&quot;id&quot; keyProperty=&quot;id&quot; order=&quot;BEFORE&quot; resultType=&quot;string&quot;&gt;
		SELECT LAST_INSERT_ID()
	&lt;/selectKey&gt;
		INSERT INTO \`user\`
		(username,birthday,sex,address) VALUES
		(#{username},#{birthday},#{sex},#{address})
	&lt;/insert&gt;
	&lt;!--修改用户（传入对象）--&gt;
	&lt;update id=&quot;updateUserById&quot; parameterType=&quot;cn.mybatis.pojo.User&quot;&gt;
		UPDATE \`user\` SET username = #{username} WHERE id = #{id}
	&lt;/update&gt;		
	&lt;!-- 删除用户 --&gt;
	&lt;delete id=&quot;deleteUserById&quot; parameterType=&quot;int&quot;&gt;
		delete from user where id=#{id}
	&lt;/delete&gt;	
&lt;/mapper&gt;
		
测试程序：
1. 创建SqlSessionFactoryBuilder对象
2. 加载SqlMapConfig.xml配置文件
3. 创建SqlSessionFactory对象
4. 创建SqlSession对象
5. 执行SqlSession对象执行查询，获取结果User
6. 打印结果
7. 释放资源

public class MybatisTest {
	private SqlSessionFactory sqlSessionFactory = null;
	@Before
	public void init() throws Exception {
		SqlSessionFactoryBuilder sqlSessionFactoryBuilder = new SqlSessionFactoryBuilder();
		InputStream inputStream = Resources.getResourceAsStream(&quot;SqlMapConfig.xml&quot;);
		this.sqlSessionFactory = sqlSessionFactoryBuilder.build(inputStream);
	}
	@Test
	public void testQueryUserById() throws Exception {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		Object user = sqlSession.selectOne(&quot;queryUserById&quot;, 1);
		sqlSession.close();
	}
	@Test
	public void testQueryUserByUsername1() throws Exception {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		List&lt;Object&gt; list =  sqlSession.selectList(&quot;queryUserByUsername1&quot;, &quot;%王%&quot;);
		for (Object user : list) {
			System.out.println(user);
		}
		sqlSession.close();
	}
	@Test
	public void testQueryUserByUsername2() throws Exception {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		List&lt;Object&gt; list = sqlSession.selectList(&quot;queryUserByUsername2&quot;, &quot;王&quot;);
		for (Object user : list) {
			System.out.println(user);
		}
		sqlSession.close();
	}	
	@Test
	public void testSaveUser() {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		User user = new User();
		user.setUsername(&quot;张飞&quot;);
		user.setSex(&quot;1&quot;);
		user.setBirthday(new Date());
		user.setAddress(&quot;蜀国&quot;);
		sqlSession.insert(&quot;saveUser&quot;, user);
		System.out.println(user);
		sqlSession.commit();
		sqlSession.close();
	}
	@Test
	public void testUpdateUserById() {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		User user = new User();
		user.setId(26);
		user.setUsername(&quot;关羽&quot;);
		user.setSex(&quot;1&quot;);
		user.setBirthday(new Date());
		user.setAddress(&quot;蜀国&quot;);
		sqlSession.update(&quot;updateUserById&quot;, user);
		sqlSession.commit();
		sqlSession.close();
	}
	@Test
	public void testDeleteUserById() {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		sqlSession.delete(&quot;deleteUserById&quot;, 48);
		sqlSession.commit();
		sqlSession.close();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-mapper动态代理开发持久层方法" tabindex="-1"><a class="header-anchor" href="#_4-mapper动态代理开发持久层方法"><span>4. Mapper动态代理开发持久层方法</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	Mapper接口开发方法只需编写Mapper接口（Dao接口），由Mybatis框架根据接口定义创建接口的动态代理对象遵循以下规范：
	1、Mapper.xml文件中的namespace与mapper接口的完整类名相同。
	2、Mapper接口方法名和Mapper.xml中定义的每个statement的id相同 
	3、Mapper接口方法的输入参数类型和mapper.xml中定义的每个sql的parameterType的类型相同
	4、Mapper接口方法的输出参数类型和mapper.xml中定义的每个sql的resultType的类型相同

	Mapper.xml(映射文件)必须满足规范
	&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;
		&lt;!DOCTYPE mapper
		PUBLIC &quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;
		&quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;&gt;
		&lt;!-- namespace：命名空间，用于隔离sql 还有一个很重要的作用，使用动态代理开发DAO，
		1. namespace必须和Mapper接口类路径一致 --&gt;
		&lt;mapper namespace=&quot;cn.itcast.mybatis.mapper.UserMapper&quot;&gt;
			&lt;!-- 根据用户id查询用户 --&gt;
			&lt;!-- 2. id必须和Mapper接口方法名一致 --&gt;
			&lt;!-- 3. parameterType必须和接口方法参数类型一致 --&gt;
			&lt;!-- 4. resultType必须和接口方法返回值类型一致 --&gt;
			&lt;select id=&quot;queryUserById&quot; parameterType=&quot;int&quot; resultType=&quot;cn.itcast.mybatis.pojo.User&quot;&gt;
				select * from user where id = #{id}
			&lt;/select&gt;

			&lt;!-- 根据用户名查询用户 --&gt;
			&lt;select id=&quot;queryUserByUsername&quot; parameterType=&quot;string&quot; resultType=&quot;cn.itcast.mybatis.pojo.User&quot;&gt;
				select * from user where username like &#39;%\${value}%&#39;
			&lt;/select&gt;
		&lt;/mapper&gt;
	UserMapper(接口文件)
	public interface UserMapper {
		User queryUserById(int id);
		List&lt;User&gt; queryUserByUsername(String username);
		}
	SqlMapConfig.xml文件(一样)
	测试
	public class UserMapperTest {
		private SqlSessionFactory sqlSessionFactory;
		@Before
		public void init() throws Exception {
			SqlSessionFactoryBuilder sqlSessionFactoryBuilder = new SqlSessionFactoryBuilder();
			InputStream inputStream = Resources.getResourceAsStream(&quot;SqlMapConfig.xml&quot;);
			this.sqlSessionFactory = sqlSessionFactoryBuilder.build(inputStream);
		}
		@Test
		public void testQueryUserById() {
			SqlSession sqlSession = this.sqlSessionFactory.openSession();
			UserMapper userMapper = sqlSession.getMapper(UserMapper.class);
			User user = userMapper.queryUserById(1);
			System.out.println(user);
			sqlSession.close();
		}

		@Test
		public void testQueryUserByUsername() {
			SqlSession sqlSession = this.sqlSessionFactory.openSession();
			UserMapper userMapper = sqlSession.getMapper(UserMapper.class);
			List&lt;User&gt; list = userMapper.queryUserByUsername(&quot;张&quot;);
			for (User user : list) {
				System.out.println(user);
			}
			sqlSession.close();
			}
		}
	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_5-sqlmapconfig-xml配置文件" tabindex="-1"><a class="header-anchor" href="#_5-sqlmapconfig-xml配置文件"><span>5. SqlMapConfig.xml配置文件</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	SqlMapConfig.xml中配置的内容和顺序如下：
	properties（属性）
	settings（全局配置参数）
	typeAliases（类型别名）
	typeHandlers（类型处理器）
	objectFactory（对象工厂）
	plugins（插件）
	environments（环境集合属性对象）
	environment（环境子属性对象）
	transactionManager（事务管理）
	dataSource（数据源）
	mappers（映射器）
	
	properties（属性）
	SqlMapConfig.xml可以引用java属性文件中的配置信息如下：
	在src下定义db.properties文件
	jdbc.driver=com.mysql.jdbc.Driver
	jdbc.url=jdbc:mysql://localhost:3306/mybatis?characterEncoding=utf-8
	jdbc.username=root
	jdbc.password=root

	MyBatis加载属性顺序：在properties元素中resource或 url 加载的属性，它会覆盖已读取的同名属性。 

	&lt;configuration&gt;
		&lt;!-- 是用resource属性加载外部配置文件 --&gt;
		&lt;properties resource=&quot;db.properties&quot;&gt;
			&lt;!-- 在properties内部用property定义属性 --&gt;
			&lt;!-- 如果外部配置文件有该属性，则内部定义属性被外部属性覆盖 --&gt;
			&lt;property name=&quot;jdbc.username&quot; value=&quot;root123&quot; /&gt;
			&lt;property name=&quot;jdbc.password&quot; value=&quot;root123&quot; /&gt;	
		&lt;/properties&gt;
		&lt;typeAliases&gt;
			&lt;!-- 单个别名定义 在mapper.xml配置文件中，就可以使用设置的别名user了，别名大小写不敏感--&gt;
			&lt;typeAlias alias=&quot;user&quot; type=&quot;cn.itcast.mybatis.pojo.User&quot; /&gt;
			&lt;!-- 批量别名定义，扫描整个包下的类，别名为类名（大小写不敏感） --&gt;
			&lt;package name=&quot;cn.itcast.mybatis.pojo&quot; /&gt;
			&lt;package name=&quot;其它包&quot; /&gt;
		&lt;/typeAliases&gt;
		&lt;!-- 和spring整合后 environments配置将废除 --&gt;
		&lt;environments default=&quot;development&quot;&gt;
			&lt;environment id=&quot;development&quot;&gt;
				&lt;!-- 使用jdbc事务管理 --&gt;
				&lt;transactionManager type=&quot;JDBC&quot; /&gt;
				&lt;!-- 数据库连接池 --&gt;
				&lt;dataSource type=&quot;POOLED&quot;&gt;
					&lt;property name=&quot;driver&quot; value=&quot;\${jdbc.driver}&quot; /&gt;
					&lt;property name=&quot;url&quot; value=&quot;\${jdbc.url}&quot; /&gt;
					&lt;property name=&quot;username&quot; value=&quot;\${jdbc.username}&quot; /&gt;
					&lt;property name=&quot;password&quot; value=&quot;\${jdbc.password}&quot; /&gt;
				&lt;/dataSource&gt;
			&lt;/environment&gt;
		&lt;/environments&gt;
		&lt;mappers&gt;
			&lt;!-- mappers（映射器）加载Mapper.xml配置文件 --&gt;
			&lt;!-- ①使用相对于类路径的资源（现在的使用方式）原始dao第一种有用--&gt;
			&lt;mapper resource=&quot;sqlmap/User.xml&quot; /&gt;
			&lt;!-- ②使用mapper接口类路径--&gt;
			&lt;!-- 要求mapper接口名称和mapper映射文件名称相同，且在同一个目录中 --&gt;
			&lt;!-- &lt;mapper class=&quot;cn.mybatis.mapper.UserMapper&quot;/&gt;--&gt;
			&lt;!--③注册指定包下的所有mapper接口--&gt;
			&lt;!--&lt;package name=&quot;cn.itcast.mybatis.mapper&quot;/&gt;--&gt;
			&lt;!--要求mapper接口名称和mapper映射文件名称相同，且放在同一个目录中。--&gt;
			&lt;!--整合spring后用代理方式开发的话，后两者没有用（默认）--&gt;			
		&lt;/mappers&gt;
	&lt;/configuration&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:center;">mybatis支持别名</th><th style="text-align:center;">映射的类型</th><th style="text-align:center;">别名</th><th style="text-align:center;">映射的类型</th></tr></thead><tbody><tr><td style="text-align:center;">_byte</td><td style="text-align:center;">byte</td><td style="text-align:center;">byte</td><td style="text-align:center;">Byte</td></tr><tr><td style="text-align:center;">_long</td><td style="text-align:center;">long</td><td style="text-align:center;">long</td><td style="text-align:center;">Long</td></tr><tr><td style="text-align:center;">_short</td><td style="text-align:center;">short</td><td style="text-align:center;">short</td><td style="text-align:center;">Short</td></tr><tr><td style="text-align:center;">_int</td><td style="text-align:center;">int</td><td style="text-align:center;">int</td><td style="text-align:center;">Integer</td></tr><tr><td style="text-align:center;">_integer</td><td style="text-align:center;">int</td><td style="text-align:center;">integer</td><td style="text-align:center;">Integer</td></tr><tr><td style="text-align:center;">_double</td><td style="text-align:center;">double</td><td style="text-align:center;">double</td><td style="text-align:center;">Double</td></tr><tr><td style="text-align:center;">_float</td><td style="text-align:center;">float</td><td style="text-align:center;">float</td><td style="text-align:center;">Float</td></tr><tr><td style="text-align:center;">_boolean</td><td style="text-align:center;">boolean</td><td style="text-align:center;">boolean</td><td style="text-align:center;">Boolean</td></tr><tr><td style="text-align:center;">string</td><td style="text-align:center;">String</td><td style="text-align:center;">date</td><td style="text-align:center;">Date</td></tr><tr><td style="text-align:center;">decimal</td><td style="text-align:center;">BigDecimal</td><td style="text-align:center;">bigdecimal</td><td style="text-align:center;">BigDecimal</td></tr><tr><td style="text-align:center;">map</td><td style="text-align:center;">Map</td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr></tbody></table><h1 id="_6-mapper-xml" tabindex="-1"><a class="header-anchor" href="#_6-mapper-xml"><span>6. Mapper.xml</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>If标签
&lt;!--注意字符串类型的数据需要要做不等于空字符串校验。--&gt;
&lt;select id=&quot;queryUserByWhere&quot; parameterType=&quot;user&quot; resultType=&quot;user&quot;&gt;
	SELECT id, username, birthday, sex, address FROM \`user\`
	WHERE 1=1
	&lt;if test=&quot;sex != null and sex != &#39;&#39;&quot;&gt;
		AND sex = #{sex}
	&lt;/if&gt;
	&lt;if test=&quot;username != null and username != &#39;&#39;&quot;&gt;
		AND username LIKE
		&#39;%\${username}%&#39;
	&lt;/if&gt;
&lt;/select&gt;

Where标签
上面的sql还有where 1=1 这样的语句，很麻烦，可以使用where标签进行改造,只能处理前面的and，不能处理后置and
	改造UserMapper.xml，如下
	&lt;select id=&quot;queryUserByWhere&quot; parameterType=&quot;user&quot; resultType=&quot;user&quot;&gt;
		SELECT id, username, birthday, sex, address FROM \`user\`
		&lt;!-- where标签可以自动添加where，同时处理sql语句中第一个and关键字 --&gt;
		&lt;where&gt;
			&lt;if test=&quot;sex != null&quot;&gt;
				AND sex = #{sex}
			&lt;/if&gt;
			&lt;if test=&quot;username != null and username != &#39;&#39;&quot;&gt;
				AND username LIKE
				&#39;%\${username}%&#39;
			&lt;/if&gt;
		&lt;/where&gt;
	&lt;/select&gt;

Sql片段
Sql中可将重复的sql提取出来，使用时用include引用即可，达到sql重用的目的
&lt;select id=&quot;queryUserByWhere&quot; parameterType=&quot;user&quot; resultType=&quot;user&quot;&gt;
	&lt;!-- SELECT id, username, birthday, sex, address FROM \`user\` --&gt;
	&lt;!-- 使用include标签加载sql片段；refid是sql片段id --&gt;
	SELECT &lt;include refid=&quot;userFields&quot; /&gt; FROM \`user\`
&lt;/select&gt;

&lt;!-- 声明sql片段 如果要使用别的Mapper.xml配置的sql片段，可以在refid前面加上对应的Mapper.xml的namespace
refid=&quot;com.junye.userFields&quot;--&gt;
&lt;sql id=&quot;userFields&quot;&gt;
	id, username, birthday, sex, address
&lt;/sql&gt;

foreach标签
向sql传递数组或List，mybatis使用foreach解析
Integer[]→ collection=&quot;array&quot;、
List&lt;Integer&gt;→ collection=&quot;list&quot;
如果以上两个东西放进类中被包装了，那么用属性名表示
&lt;select id=&quot;queryUserByIds&quot; parameterType=&quot;queryVo&quot; resultType=&quot;user&quot;&gt;
	SELECT * FROM \`user\`
	&lt;where&gt;
		&lt;!-- foreach标签，进行遍历 --&gt;
		&lt;!-- collection：遍历的集合，这里是QueryVo的ids属性 --&gt;
		&lt;!-- item：遍历的项目，可以随便写，，但是和后面的#{}里面要一致 --&gt;
		&lt;!-- open：在前面添加的sql片段 --&gt;
		&lt;!-- close：在结尾处添加的sql片段 --&gt;
		&lt;!-- separator：指定遍历的元素之间使用的分隔符 --&gt;
		&lt;foreach collection=&quot;ids&quot; item=&quot;item&quot; open=&quot;id IN (&quot; close=&quot;)&quot; separator=&quot;,&quot;&gt;
			#{item}
		&lt;/foreach&gt;
	&lt;/where&gt;
&lt;/select&gt;

一对多查询
在UserMapper.xml添加sql，如下：
resultMap，数据库字段与对象字段不一致时使用
&lt;resultMap type=&quot;user&quot; id=&quot;userOrderResultMap&quot;&gt;
	&lt;id property=&quot;id&quot; column=&quot;id&quot; /&gt;
	&lt;result property=&quot;username&quot; column=&quot;username&quot; /&gt;
	&lt;result property=&quot;birthday&quot; column=&quot;birthday&quot; /&gt;
	&lt;result property=&quot;sex&quot; column=&quot;sex&quot; /&gt;
	&lt;result property=&quot;address&quot; column=&quot;address&quot; /&gt;

	&lt;!-- 配置一对多的关系 --&gt;
	&lt;collection property=&quot;orders&quot; javaType=&quot;list&quot; ofType=&quot;order&quot;&gt;
		&lt;!-- 配置主键，是关联Order的唯一标识 --&gt;
		&lt;id property=&quot;id&quot; column=&quot;oid&quot; /&gt;
		&lt;result property=&quot;number&quot; column=&quot;number&quot; /&gt;
		&lt;result property=&quot;createtime&quot; column=&quot;createtime&quot; /&gt;
		&lt;result property=&quot;note&quot; column=&quot;note&quot; /&gt;
	&lt;/collection&gt;
&lt;/resultMap&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_7-mybatis整合spring" tabindex="-1"><a class="header-anchor" href="#_7-mybatis整合spring"><span>7. Mybatis整合spring</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>整合思路
SqlSessionFactory对象应该放到spring容器中作为单例存在
Mapper代理形式中，应该从spring容器中直接获得mapper的代理对象
数据库的连接以及数据库连接池事务管理都交给spring容器来完成。

mybatis整合原理
SqlSessionFactoryBean implements FactoryBean&lt;SqlSessionFactory&gt;重写getobject方法返回SqlSessionFactory注入到spring中，
而SqlSessionFactoryBean将由开发人员在spring中声明，完美整合

整合需要的jar包
spring-core-4.1.3.RELEASE.jar
spring-expression-4.1.3.RELEASE.jar
spring-jdbc-4.1.3.RELEASE.jar
spring-jms-4.1.3.RELEASE.jar
spring-messaging-4.1.3.RELEASE.jar
spring-tx-4.1.3.RELEASE.jar
spring-web-4.1.3.RELEASE.jar
spring-webmvc-4.1.3.RELEASE.jar
aopalliance-1.0.jar
asm-3.3.1.jar
aspectjweaver-1.6.11.jar
cglib-2.2.2.jar
commons-dbcp-1.2.2.jar
commons-logging-1.1.1.jar
commons-pool-1.3.jar
javassist-3.17.1-GA.jar
jstl-1.2.jar
junit-4.9.jar
log4j-1.2.17.jar
log4j-api-2.0-rc1.jar
log4j-core-2.0-rc1.jar
mybatis-3.2.7.jar
mybatis-spring-1.2.2.jar
mysql-connector-java-5.1.7-bin.jar
slf4j-api-1.7.5.jar
slf4j-log4j12-1.7.5.jar
spring-aop-4.1.3.RELEASE.jar
spring-aspects-4.1.3.RELEASE.jar
spring-beans-4.1.3.RELEASE.jar
spring-context-4.1.3.RELEASE.jar
spring-context-support-4.1.3.RELEASE.jar


创建工程
sqlmapConfig.xml
&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;
	&lt;!DOCTYPE configuration
	PUBLIC &quot;-//mybatis.org//DTD Config 3.0//EN&quot;
	&quot;http://mybatis.org/dtd/mybatis-3-config.dtd&quot;&gt;
&lt;configuration&gt;
	&lt;!-- 设置别名 --&gt;
	&lt;typeAliases&gt;
		&lt;!-- 2. 指定扫描包，会把包内所有的类都设置别名，别名的名称就是类名，大小写不敏感 --&gt;
		&lt;package name=&quot;cn.itcast.mybatis.pojo&quot; /&gt;
	&lt;/typeAliases&gt;
&lt;/configuration&gt;

applicationContext.xml
	SqlSessionFactoryBean属于mybatis-spring这个jar包
	对于spring来说，mybatis是另外一个架构，需要整合jar包。
&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
	&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
	xmlns:context=&quot;http://www.springframework.org/schema/context&quot; 
	xmlns:p=&quot;http://www.springframework.org/schema/p&quot;
	xmlns:aop=&quot;http://www.springframework.org/schema/aop&quot; 
	xmlns:tx=&quot;http://www.springframework.org/schema/tx&quot;
	xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
	xsi:schemaLocation=&quot;http://www.springframework.org/schema/beans 
	http://www.springframework.org/schema/beans/spring-beans-4.0.xsd
	http://www.springframework.org/schema/context 
	http://www.springframework.org/schema/context/spring-context-4.0.xsd
	http://www.springframework.org/schema/aop 
	http://www.springframework.org/schema/aop/spring-aop-4.0.xsd 
	http://www.springframework.org/schema/tx 
	http://www.springframework.org/schema/tx/spring-tx-4.0.xsd
	http://www.springframework.org/schema/util 
	http://www.springframework.org/schema/util/spring-util-4.0.xsd&quot;&gt;
	&lt;context:property-placeholder location=&quot;classpath:db.properties&quot; /&gt;
	&lt;bean id=&quot;dataSource&quot; class=&quot;org.apache.commons.dbcp.BasicDataSource&quot; destroy-method=&quot;close&quot;&gt;
		&lt;property name=&quot;driverClassName&quot; value=&quot;\${jdbc.driver}&quot; /&gt;
		&lt;property name=&quot;url&quot; value=&quot;\${jdbc.url}&quot; /&gt;
		&lt;property name=&quot;username&quot; value=&quot;\${jdbc.username}&quot; /&gt;
		&lt;property name=&quot;password&quot; value=&quot;\${jdbc.password}&quot; /&gt;
		&lt;property name=&quot;maxActive&quot; value=&quot;10&quot; /&gt;
		&lt;property name=&quot;maxIdle&quot; value=&quot;5&quot; /&gt;
	&lt;/bean&gt;
	&lt;!-- 配置SqlSessionFactory --&gt;
	&lt;bean id=&quot;sqlSessionFactory&quot; class=&quot;org.mybatis.spring.SqlSessionFactoryBean&quot;&gt;
		&lt;!-- 配置mybatis核心配置文件 --&gt;
		&lt;property name=&quot;configLocation&quot; value=&quot;classpath:SqlMapConfig.xml&quot; /&gt;
		&lt;!-- 配置数据源 --&gt;
		&lt;property name=&quot;dataSource&quot; ref=&quot;dataSource&quot; /&gt;
	&lt;/bean&gt;
&lt;/beans&gt;
db.properties、log4j.properties

Dao开发(使用Mapper代理开发方式)
编写UserMapper.xml配置文件，如下：
	&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;
	&lt;!DOCTYPE mapper
	PUBLIC &quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;
	&quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;&gt;
	&lt;mapper namespace=&quot;cn.itcast.mybatis.mapper.UserMapper&quot;&gt;
		&lt;!-- 根据用户id查询 --&gt;
		&lt;select id=&quot;queryUserById&quot; parameterType=&quot;int&quot; resultType=&quot;user&quot;&gt;
			select * from user where id = #{id}
		&lt;/select&gt;
	&lt;/mapper&gt;

UserMapper接口实现类
public interface UserMapper {
	User queryUserById(int id);
}
扫描包形式配置mapper（注意这个自动寻找sqlsession，所以不用注入sqlsession，自动扫描该包下，
不包括子包的所有接口，默认加载该包下的与接口同名的xml文件作为Mapper，也可以在sqlMapper中配置mapper resource以加载其他的Mapper
没找到mapper.xml就报错，可以在sqlMapperConfig.xml配置mapper resource解决当默认和自己配的文件一样的时候，优先加载默认位置的
每个mapper代理对象的id就是类名，首字母小写
&lt;!-- 扫描包方式配置代理 --&gt;
&lt;bean class=&quot;org.mybatis.spring.mapper.MapperScannerConfigurer&quot;&gt;
	&lt;!-- 配置Mapper接口 --&gt;
	&lt;property name=&quot;basePackage&quot; value=&quot;cn.mybatis.mapper&quot; /&gt;
&lt;/bean&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_8-mybatis逆向工程-了解" tabindex="-1"><a class="header-anchor" href="#_8-mybatis逆向工程-了解"><span>8. Mybatis逆向工程（了解）</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	生成逆向工程代码
	找到下图所示的java文件，执行工程main主函数,
	刷新工程，发现代码生成

	注意
	1.逆向工程生成的代码只能做单表查询
	2.不能在生成的代码上进行扩展，因为如果数据库变更，
	需要重新使用逆向工程生成代码，原来编写的代码就被覆盖了。
	3.一张表会生成4个文件

	使用官方网站的Mapper自动生成工具mybatis-generator-core-1.3.2
	来生成po类和Mapper映射文件
	导入逆向工程
	修改配置文件
	在generatorConfig.xml中配置Mapper生成的详细信息，
	1.修改要生成的数据库表
	2.pojo文件所在包路径
	3.Mapper所在的包路径
	&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
	&lt;!DOCTYPE generatorConfiguration
	PUBLIC &quot;-//mybatis.org//DTD MyBatis Generator Configuration 1.0//EN&quot;
	&quot;http://mybatis.org/dtd/mybatis-generator-config_1_0.dtd&quot;&gt;

	&lt;generatorConfiguration&gt;
		&lt;context id=&quot;testTables&quot; targetRuntime=&quot;MyBatis3&quot;&gt;
		&lt;commentGenerator&gt;
			&lt;!-- 是否去除自动生成的注释 true：是 ： false:否 --&gt;
			&lt;property name=&quot;suppressAllComments&quot; value=&quot;true&quot; /&gt;
		&lt;/commentGenerator&gt;
			&lt;!--数据库连接的信息：驱动类、连接地址、用户名、密码 --&gt;
			&lt;jdbcConnection driverClass=&quot;com.mysql.jdbc.Driver&quot; connectionURL=&quot;jdbc:mysql://localhost:3306/mybatis&quot; 
				userId=&quot;root&quot; password=&quot;root&quot;&gt;
			&lt;/jdbcConnection&gt;
			&lt;!-- &lt;jdbcConnection driverClass=&quot;oracle.jdbc.OracleDriver&quot; connectionURL=&quot;jdbc:oracle:thin:@127.0.0.1:1521:yycg&quot; 
				userId=&quot;yycg&quot; password=&quot;yycg&quot;&gt; &lt;/jdbcConnection&gt; --&gt;
			&lt;!-- 默认false，把JDBC DECIMAL 和 NUMERIC 类型解析为 Integer，为 true时把JDBC DECIMAL 和 NUMERIC 类型解析为java.math.BigDecimal --&gt;
			&lt;javaTypeResolver&gt;
				&lt;property name=&quot;forceBigDecimals&quot; value=&quot;false&quot; /&gt;
			&lt;/javaTypeResolver&gt;

		&lt;!-- targetProject:生成PO类的位置 --&gt;
		&lt;javaModelGenerator targetPackage=&quot;cn.itcast.ssm.po&quot; targetProject=&quot;.\\src&quot;&gt;
			&lt;!-- enableSubPackages:是否让schema作为包的后缀 --&gt;
			&lt;property name=&quot;enableSubPackages&quot; value=&quot;false&quot; /&gt;
			&lt;!-- 从数据库返回的值被清理前后的空格 --&gt;
			&lt;property name=&quot;trimStrings&quot; value=&quot;true&quot; /&gt;
		&lt;/javaModelGenerator&gt;

		&lt;!-- targetProject:mapper映射文件生成的位置 --&gt;
		&lt;sqlMapGenerator targetPackage=&quot;cn.itcast.ssm.mapper&quot; targetProject=&quot;.\\src&quot;&gt;
			&lt;!-- enableSubPackages:是否让schema作为包的后缀 --&gt;
			&lt;property name=&quot;enableSubPackages&quot; value=&quot;false&quot; /&gt;
		&lt;/sqlMapGenerator&gt;
		&lt;!-- targetPackage：mapper接口生成的位置 --&gt;
		&lt;javaClientGenerator type=&quot;XMLMAPPER&quot; targetPackage=&quot;cn.itcast.ssm.mapper&quot; targetProject=&quot;.\\src&quot;&gt;
			&lt;!-- enableSubPackages:是否让schema作为包的后缀 --&gt;
		&lt;property name=&quot;enableSubPackages&quot; value=&quot;false&quot; /&gt;
			&lt;/javaClientGenerator&gt;
			&lt;!-- 指定数据库表 --&gt;
			&lt;table schema=&quot;&quot; tableName=&quot;user&quot;&gt;&lt;/table&gt;
			&lt;table schema=&quot;&quot; tableName=&quot;order&quot;&gt;&lt;/table&gt;
		&lt;/context&gt;
	&lt;/generatorConfiguration&gt;
	

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_9-分页插件pagehelper" tabindex="-1"><a class="header-anchor" href="#_9-分页插件pagehelper"><span>9. 分页插件PageHelper</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>目前支持Oracle,Mysql,MariaDB,SQLite,Hsqldb,PostgreSQL六种数据库分页。

把PageHelper依赖的jar包添加到工程中。官方提供的代码对逆向工程支持的不好，使用参考资料中的pagehelper-fix。

第二步：在Mybatis配置xml中配置拦截器插件:
&lt;plugins&gt;
    &lt;!-- com.github.pagehelper为PageHelper类所在包名 --&gt;
    &lt;plugin interceptor=&quot;com.github.pagehelper.PageHelper&quot;&gt;
        &lt;!-- 设置数据库类型 Oracle,Mysql,MariaDB,SQLite,Hsqldb,PostgreSQL六种数据库--&gt;        
        &lt;property name=&quot;dialect&quot; value=&quot;mysql&quot;/&gt;
    &lt;/plugin&gt;
&lt;/plugins&gt;

第三步：在代码中使用
1、设置分页信息：
//获取第1页，10条内容，默认查询总数count
PageHelper.startPage(1, 10);

//紧跟着的第一个select方法会被分页
List&lt;Country&gt; list = countryMapper.selectIf(1);

2、取分页信息
//分页后，实际返回的结果list类型是Page&lt;E&gt;，如果想取出分页信息，需要强制转换为Page&lt;E&gt;，
Page&lt;Country&gt; listCountry = (Page&lt;Country&gt;)list;
listCountry.getTotal();

3、取分页信息的第二种方法
//获取第1页，10条内容，默认查询总数count
PageHelper.startPage(1, 10);
List&lt;Country&gt; list = countryMapper.selectAll();
//用PageInfo对结果进行包装
PageInfo page = new PageInfo(list);
//测试PageInfo全部属性
//PageInfo包含了非常全面的分页属性
assertEquals(1, page.getPageNum());
assertEquals(10, page.getPageSize());
assertEquals(1, page.getStartRow());
assertEquals(10, page.getEndRow());
assertEquals(183, page.getTotal());
assertEquals(19, page.getPages());
assertEquals(1, page.getFirstPage());
assertEquals(8, page.getLastPage());
assertEquals(true, page.isFirstPage());
assertEquals(false, page.isLastPage());
assertEquals(false, page.isHasPreviousPage());
assertEquals(true, page.isHasNextPage());

@Test
public void testPageHelper() throws Exception {
	//初始化spring容器
	ApplicationContext applicationContext = new ClassPathXmlApplicationContext(&quot;classpath:spring/applicationContext-*.xml&quot;);
	//获得Mapper的代理对象
	TbItemMapper itemMapper = applicationContext.getBean(TbItemMapper.class);
	//设置分页信息
	PageHelper.startPage(1, 30);
	//执行查询
	TbItemExample example = new TbItemExample();
	List&lt;TbItem&gt; list = itemMapper.selectByExample(example);
	//取分页信息
	PageInfo&lt;TbItem&gt; pageInfo = new PageInfo&lt;&gt;(list);
	System.out.println(pageInfo.getTotal());
	System.out.println(pageInfo.getPages());
	System.out.println(pageInfo.getPageNum());
	System.out.println(pageInfo.getPageSize());
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),a=[l];function r(d,u){return t(),i("div",null,a)}const c=e(s,[["render",r],["__file","mybatis.html.vue"]]),m=JSON.parse('{"path":"/backend/ormframework/mybatis.html","title":"Mybatis","lang":"zh-CN","frontmatter":{"title":"Mybatis","date":"2023-01-01T00:00:00.000Z","tags":"Mybatis","categories":"后端","description":"Mybatis 1. Mybatis介绍 2. Mybatis架构 3. Mybatis入门程序 4. Mapper动态代理开发持久层方法 5. SqlMapConfig.xml配置文件 6. Mapper.xml 7. Mybatis整合spring 8. Mybatis逆向工程（了解） 9. 分页插件PageHelper 1. Mybatis介绍 ...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/ormframework/mybatis.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"Mybatis"}],["meta",{"property":"og:description","content":"Mybatis 1. Mybatis介绍 2. Mybatis架构 3. Mybatis入门程序 4. Mapper动态代理开发持久层方法 5. SqlMapConfig.xml配置文件 6. Mapper.xml 7. Mybatis整合spring 8. Mybatis逆向工程（了解） 9. 分页插件PageHelper 1. Mybatis介绍 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/1500ef07f438bf61f8679.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mybatis\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/1500ef07f438bf61f8679.png\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":14.44,"words":4332},"filePathRelative":"backend/ormframework/mybatis.md","localizedDate":"2023年1月1日","excerpt":"<p>Mybatis</p>\\n<!--more-->\\n<!-- TOC -->\\n<ul>\\n<li><a href=\\"#1-mybatis%E4%BB%8B%E7%BB%8D\\">1. Mybatis介绍</a></li>\\n<li><a href=\\"#2-mybatis%E6%9E%B6%E6%9E%84\\">2. Mybatis架构</a></li>\\n<li><a href=\\"#3-mybatis%E5%85%A5%E9%97%A8%E7%A8%8B%E5%BA%8F\\">3. Mybatis入门程序</a></li>\\n<li><a href=\\"#4-mapper%E5%8A%A8%E6%80%81%E4%BB%A3%E7%90%86%E5%BC%80%E5%8F%91%E6%8C%81%E4%B9%85%E5%B1%82%E6%96%B9%E6%B3%95\\">4. Mapper动态代理开发持久层方法</a></li>\\n<li><a href=\\"#5-sqlmapconfigxml%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6\\">5. SqlMapConfig.xml配置文件</a></li>\\n<li><a href=\\"#6-mapperxml\\">6. Mapper.xml</a></li>\\n<li><a href=\\"#7-mybatis%E6%95%B4%E5%90%88spring\\">7. Mybatis整合spring</a></li>\\n<li><a href=\\"#8-mybatis%E9%80%86%E5%90%91%E5%B7%A5%E7%A8%8B%E4%BA%86%E8%A7%A3\\">8. Mybatis逆向工程（了解）</a></li>\\n<li><a href=\\"#9-%E5%88%86%E9%A1%B5%E6%8F%92%E4%BB%B6pagehelper\\">9. 分页插件PageHelper</a></li>\\n</ul>","autoDesc":true}');export{c as comp,m as data};
