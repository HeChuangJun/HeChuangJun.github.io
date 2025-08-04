import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as e,e as t}from"./app-7KT7HDzT.js";const s={},r=t(`<p>springboot</p><ul><li><a href="#1-springboot">1. SpringBoot</a></li><li><a href="#2-springboot2%E7%A8%8B%E5%BA%8F%E5%85%A5%E9%97%A8">2. springboot2程序入门</a></li><li><a href="#3-spring-boot-api">3. Spring Boot API</a></li><li><a href="#4-%E8%87%AA%E5%AE%9A%E4%B9%89springmvc%E7%9A%84%E9%85%8D%E7%BD%AE%E6%8B%A6%E6%88%AA%E5%99%A8">4. 自定义SpringMVC的配置(拦截器)</a></li><li><a href="#5-mybatis%E5%92%8Cspring-boot%E6%95%B4%E5%90%88%E4%B8%A4%E7%A7%8D%E6%96%B9%E5%BC%8F">5. Mybatis和Spring Boot整合(两种方式)</a></li><li><a href="#6-spring%E7%9A%84%E6%95%B4%E5%90%88redis">6. Spring的整合Redis</a></li><li><a href="#7-spring%E7%9A%84%E6%95%B4%E5%90%88httpclient">7. Spring的整合Httpclient</a></li><li><a href="#8-spring%E7%9A%84%E6%95%B4%E5%90%88rabbitmq">8. Spring的整合RabbitMQ</a></li><li><a href="#9-spring%E6%95%B4%E5%90%88servletfilterlistener">9. spring整合Servlet、Filter、Listener</a></li><li><a href="#10-springboot%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98">10. springboot常见问题</a></li></ul><h1 id="_1-springboot" tabindex="-1"><a class="header-anchor" href="#_1-springboot"><span>1. SpringBoot</span></a></h1><p>springboot快速创建一个独立运行、准生产级别的基于spring框架的项目<br> springboot其实包含了springmvc等许多的组件，还允许自动配置，省事</p><h1 id="_2-springboot2程序入门" tabindex="-1"><a class="header-anchor" href="#_2-springboot2程序入门"><span>2. springboot2程序入门</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>创建maven项目，打包方式选择war，跳过骨架
配置pom.xml（注意编译jdk版本和运行的jdk版本匹配）
	&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; 
		xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot; 
		xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 
		http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;
		&lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
		&lt;groupId&gt;com.junye&lt;/groupId&gt;
		&lt;artifactId&gt;testspringboot&lt;/artifactId&gt;
		&lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;
		&lt;!--打包的方式为war，自动生成jar包--&gt;
		&lt;packaging&gt;war&lt;/packaging&gt;
		&lt;name&gt;testspringboot&lt;/name&gt;
		&lt;description&gt;AAA&lt;/description&gt;
		&lt;!-- 定义公共资源版本 --&gt;
		&lt;parent&gt;
			&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
			&lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;
			&lt;version&gt;2.0.2.RELEASE&lt;/version&gt;
		&lt;/parent&gt;
		&lt;!--设置资源的版本--&gt;
		&lt;properties&gt;
		&lt;project.build.sourceEncoding&gt;UTF-8&lt;/project.build.sourceEncoding&gt;
		&lt;project.reporting.outputEncoding&gt;UTF-8&lt;/project.reporting.outputEncoding&gt;
		&lt;java.version&gt;1.8&lt;/java.version&gt;
		&lt;/properties&gt;
		
		&lt;dependencies&gt;
		&lt;dependency&gt;
		&lt;!-- 上边引入 parent，因此 下边无需指定版本，相当于配置了springmvc --&gt;
		&lt;!-- 包含 mvc,aop 等jar资源 --&gt;
		&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
		&lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
		&lt;!--使用别的服务器，如undertow
		&lt;exclusions&gt;
		&lt;exclusion&gt;
		&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
		&lt;artifactId&gt;spring-boot-starter-tomcat&lt;/artifactId&gt;
		&lt;/exclusion&gt;
		&lt;/exclusions&gt;
		&lt;/dependency&gt;
		指定特定的服务器
		&lt;dependency&gt;
		   &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
		   &lt;artifactId&gt;spring-boot-starter-undertow&lt;/artifactId&gt;
		&lt;/dependency&gt;--&gt;
		&lt;/dependencies&gt;
		&lt;build&gt;
		&lt;!--指定springboot的maven插件--&gt;
		&lt;plugins&gt;
		&lt;plugin&gt;
		&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
		&lt;artifactId&gt;spring-boot-maven-plugin&lt;/artifactId&gt;
		&lt;/plugin&gt;
		&lt;/plugins&gt;
		&lt;/build&gt;
		&lt;/project&gt;
src/main/java下的程序入口：Chapter1Application（必须）
	run中传入的名字必须与类名一致
		package com.junye.test;
		import org.springframework.boot.SpringApplication;
		import org.springframework.boot.autoconfigure.SpringBootApplication;
		@SpringBootApplication
		public class Chapter1Application {
			public static void main(String[] args) {
				SpringApplication.run(Chapter1Application.class, args);
			}
		}


src/main/java下的controller层（必须）
	package com.junye.test;
		import org.springframework.stereotype.Controller;
		import org.springframework.ui.Model;
		import org.springframework.web.bind.annotation.RequestMapping;
		import org.springframework.web.bind.annotation.RestController;
		@RestController//自动返回json数据
		public class HelloController {
		@RequestMapping(&quot;/hello&quot;)
		public String index() {
		return &quot;Hello World&quot;;
		}
		}
	
启动项目的方法
	Debug Run或者运行主函数或者maven的spring-boot：run
	完成上述步骤访问：http://localhost:8080/hello即可显示helloworld
springboot参数接收与返回与springmvc一致
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-spring-boot-api" tabindex="-1"><a class="header-anchor" href="#_3-spring-boot-api"><span>3. Spring Boot API</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>入口类和@SpringBootApplication
Spring Boot的项目一般都会有*Application的入口类，入口类中会有main方法，这是一个标准的Java应用程序的入口方法。
@SpringBootApplication注解是Spring Boot的核心注解，它其实是一个组合注解

@SpringBootConfiguration=&gt;@Configuration
@EnableAutoConfiguration 启用自动配置使项目中依赖的jar包自动配置项目的配置项
@ComponentScan(
    excludeFilters = {@Filter(
    type = FilterType.CUSTOM,
    classes = {TypeExcludeFilter.class}
), @Filter(
    type = FilterType.CUSTOM,
    classes = {AutoConfigurationExcludeFilter.class}
)}//默认扫描@SpringBootApplication所在类的同级目录以及它的子目录

关闭自动配置
spring-boot-autoconfigure-xxx.jar
@SpringBootApplication(exclude={RedisAutoConfiguration.class})

自定义Banner(spring启动图案)
http://patorjk.com/software/taag/#p=display&amp;f=Graffiti&amp;t=Type%20Something%20
拷贝生成的字符到一个文本文件中，并且将该文件命名为banner.txt，将banner.txt拷贝到maven项目的resources目录中即可
关闭Banner application.properties
spring.main.banner-mode = off

全局配置文件application.properties或者application.yml，在resources目录下或者类路径下的/config下，
server.port=8088 #tomcat端口
server.servlet-path=*.html # 修改进入DispatcherServlet的规则为：*.html
    
设置日志级别
logging.level.org.springframework=DEBUG

静态资源路径
spring.resources.static-locations=classpath:/META-INF/resources/,classpath:/resources/,classpath:/static/,classpath:/public/

mvc视图
spring.mvc.view.prefix=/WEB-INF/views/
spring.mvc.view.suffix=.jsp

# springboot设置session过期的时间
server.session.timeout=120

springbootjava配置和application.properties配置冲突优先java配置
springboot的@component配置导致数据源配置不可用，说明springboot的配置是先加载component然后再加configuration

引入xml配置文件
@ImportResource({&quot;classpath:xxx-context.xml&quot;})

读取外部的配置文件
@PropertySource(value = { &quot;classpath:jdbc.properties&quot;, &quot;classpath:env.properties&quot;})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-自定义springmvc的配置-拦截器" tabindex="-1"><a class="header-anchor" href="#_4-自定义springmvc的配置-拦截器"><span>4. 自定义SpringMVC的配置(拦截器)</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>继承WebMvcConfigurerAdapter,然后重写父类中的方法进行扩展。
import java.nio.charset.Charset;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class MySrpingMVCConfig extends WebMvcConfigurerAdapter{
	// 自定义拦截器
	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		HandlerInterceptor handlerInterceptor = new HandlerInterceptor() {
			@Override
			public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
				System.out.println(&quot;自定义拦截器............&quot;);
				return true;
			}
			@Override
			public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {

			}

			@Override
			public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler,
			Exception ex) throws Exception {
			}
		};
		//注册拦截器     
		registry.addInterceptor(handlerInterceptor).addPathPatterns(&quot;/**&quot;);
	}

	// 自定义消息转化器的第二种方法
	@Override
	public void configureMessageConverters(List&lt;HttpMessageConverter&lt;?&gt;&gt; converters) {
		StringHttpMessageConverter converter  = new StringHttpMessageConverter(Charset.forName(&quot;UTF-8&quot;));
		converters.add(converter);
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_5-mybatis和spring-boot整合-两种方式" tabindex="-1"><a class="header-anchor" href="#_5-mybatis和spring-boot整合-两种方式"><span>5. Mybatis和Spring Boot整合(两种方式)</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>使用mybatis官方提供的Spring Boot整合包实现https://github.com/mybatis/spring-boot-starter
&lt;!--三包合一，包括mybatis、整合包和事务包--&gt;
&lt;dependency&gt;
	&lt;groupId&gt;org.mybatis.spring.boot&lt;/groupId&gt;
	&lt;artifactId&gt;mybatis-spring-boot-starter&lt;/artifactId&gt;
	&lt;version&gt;1.3.0&lt;/version&gt;
&lt;/dependency&gt;
@Mapper（在接口上面注解即可）或者直接扫描包
@MapperScan(basePackages= {&quot;com.junye.testspringbootMybaits&quot;})
@Transactional（service层上面注册）
java配置sqlfactorysession和数据源
@Bean
//@Primary//设置优先,多数据源的时候使用就是当遇到数据对接的时候用
public ComboPooledDataSource getComboPooledDataSource() throws PropertyVetoException{
	ComboPooledDataSource cd=new ComboPooledDataSource();
	cd.setDriverClass(&quot;com.mysql.cj.jdbc.Driver&quot;);
	cd.setJdbcUrl(&quot;jdbc:mysql://localhost:3306/testmybatis?useSSL=true&amp;serverTimezone=GMT%2B8&quot;);
	cd.setUser(&quot;root&quot;);
	cd.setPassword(&quot;1105128664&quot;);
	return cd;
}

@Bean(name=&quot;sqlSessionFactory&quot;)
public SqlSessionFactoryBean getSqlSessionFactoryBean() throws Exception{
	SqlSessionFactoryBean sf = new SqlSessionFactoryBean();
	sf.setDataSource(getComboPooledDataSource());
	sf.setMapperLocations(new PathMatchingResourcePatternResolver().getResources(&quot;classpath:match2/test/*.xml&quot;));
	sf.setTypeAliasesPackage(&quot;com.junye.test&quot;);//设置包的别名
	//下面的配置可有可无，毕竟设置包的别名已经设计好了
	//sf.setConfigLocation(new PathMatchingResourcePatternResolver().getResource(&quot;classpath:mybatis-configuration.xml&quot;));
	return sf;
}

使用mybatis-spring整合的方式（推荐）
&lt;!--mybatis核心包--&gt;
&lt;dependency&gt;
	&lt;groupId&gt;org.mybatis&lt;/groupId&gt;
	&lt;artifactId&gt;mybatis&lt;/artifactId&gt;
	&lt;version&gt;3.2.8&lt;/version&gt;
&lt;/dependency&gt;
&lt;!--整合包--&gt;
&lt;dependency&gt;
	&lt;groupId&gt;org.mybatis&lt;/groupId&gt;
	&lt;artifactId&gt;mybatis-spring&lt;/artifactId&gt;
	&lt;version&gt;1.2.2&lt;/version&gt;
&lt;/dependency&gt; 
&lt;!--整合事务--&gt;
&lt;dependency&gt;
	&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
	&lt;artifactId&gt;spring-boot-starter-jdbc&lt;/artifactId&gt;
&lt;/dependency&gt;
java配置类
import javax.sql.DataSource;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.core.io.support.ResourcePatternResolver;
import org.mybatis.spring.mapper.MapperScannerConfigurer;
@Configuration
public class MyBatisConfig {
@Bean
@ConditionalOnMissingBean //当容器里没有指定的Bean的情况下创建该对象
public SqlSessionFactoryBean sqlSessionFactory(DataSource dataSource) {
	SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
	sqlSessionFactoryBean.setDataSource(dataSource);
	ResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
	Resource mybatisConfigXml = resolver.getResource(&quot;classpath:mybatis/mybatis-config.xml&quot;);
	sqlSessionFactoryBean.setConfigLocation(mybatisConfigXml);
	sqlSessionFactoryBean.setTypeAliasesPackage(&quot;com.taotao.cart.pojo&quot;);
	return sqlSessionFactoryBean;
}
// mapper接口的扫描器，可用@MapperScan代替
@Bean
public MapperScannerConfigurer mapperScannerConfigurer() {
	MapperScannerConfigurer mapperScannerConfigurer = new MapperScannerConfigurer();
	mapperScannerConfigurer.setBasePackage(&quot;com.taotao.cart.mapper&quot;);
	return mapperScannerConfigurer;
	}
}

事务管理
在Spring Boot中推荐使用@Transactional注解来申明事务。
当引入jdbc依赖之后，Spring Boot会自动默认分别注入DataSourceTransactionManager
或JpaTransactionManager，所以我们不需要任何额外配置就可以用@Transactional注解进行事务的使用。
在Service中添加@Transactional注解：

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_6-spring的整合redis" tabindex="-1"><a class="header-anchor" href="#_6-spring的整合redis"><span>6. Spring的整合Redis</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	在Spring Boot中提供了RedisTempplate的操作，
	import java.util.ArrayList;
	import java.util.List;

	import org.springframework.beans.factory.annotation.Value;
	import org.springframework.context.annotation.Bean;
	import org.springframework.context.annotation.Configuration;
	import org.springframework.context.annotation.PropertySource;

	import redis.clients.jedis.JedisPoolConfig;
	import redis.clients.jedis.JedisShardInfo;
	import redis.clients.jedis.ShardedJedisPool;

	@Configuration
	@PropertySource(value = &quot;classpath:redis.properties&quot;)
	public class RedisSpringConfig {

	@Value(&quot;\${redis.maxTotal}&quot;)
	private Integer redisMaxTotal;

	@Value(&quot;\${redis.node1.host}&quot;)
	private String redisNode1Host;

	@Value(&quot;\${redis.node1.port}&quot;)
	private Integer redisNode1Port;

	private JedisPoolConfig jedisPoolConfig() {
		JedisPoolConfig jedisPoolConfig = new JedisPoolConfig();
		jedisPoolConfig.setMaxTotal(redisMaxTotal);
		return jedisPoolConfig;
	}

	@Bean
	public ShardedJedisPool shardedJedisPool() {
		List&lt;JedisShardInfo&gt; jedisShardInfos = new ArrayList&lt;JedisShardInfo&gt;();
		jedisShardInfos.add(new JedisShardInfo(redisNode1Host, redisNode1Port));
		return new ShardedJedisPool(jedisPoolConfig(), jedisShardInfos);
		}
	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_7-spring的整合httpclient" tabindex="-1"><a class="header-anchor" href="#_7-spring的整合httpclient"><span>7. Spring的整合Httpclient</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>import org.apache.http.client.config.RequestConfig;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.impl.conn.PoolingHttpClientConnectionManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.Scope;

import com.taotao.common.httpclient.IdleConnectionEvictor;

@Configuration
@PropertySource(value = &quot;classpath:httpclient.properties&quot;)
public class HttpclientSpringConfig {

@Value(&quot;\${http.maxTotal}&quot;)
private Integer httpMaxTotal;

@Value(&quot;\${http.defaultMaxPerRoute}&quot;)
private Integer httpDefaultMaxPerRoute;

@Value(&quot;\${http.connectTimeout}&quot;)
private Integer httpConnectTimeout;

@Value(&quot;\${http.connectionRequestTimeout}&quot;)
private Integer httpConnectionRequestTimeout;

@Value(&quot;\${http.socketTimeout}&quot;)
private Integer httpSocketTimeout;

@Value(&quot;\${http.staleConnectionCheckEnabled}&quot;)
private Boolean httpStaleConnectionCheckEnabled;

@Autowired
private PoolingHttpClientConnectionManager manager;

@Bean
public PoolingHttpClientConnectionManager poolingHttpClientConnectionManager() {
	PoolingHttpClientConnectionManager poolingHttpClientConnectionManager = new PoolingHttpClientConnectionManager();
	// 最大连接数
	poolingHttpClientConnectionManager.setMaxTotal(httpMaxTotal);
	// 每个主机的最大并发数
	poolingHttpClientConnectionManager.setDefaultMaxPerRoute(httpDefaultMaxPerRoute);
	return poolingHttpClientConnectionManager;
}

// 定期关闭无效连接
@Bean
public IdleConnectionEvictor idleConnectionEvictor() {
	return new IdleConnectionEvictor(manager);
}

// 定义Httpclient对
@Bean
@Scope(&quot;prototype&quot;)
public CloseableHttpClient closeableHttpClient() {
	return HttpClients.custom().setConnectionManager(this.manager).build();
}

// 请求配置
@Bean
public RequestConfig requestConfig() {
	return RequestConfig.custom().setConnectTimeout(httpConnectTimeout) // 创建连接的最长时间
	.setConnectionRequestTimeout(httpConnectionRequestTimeout) // 从连接池中获取到连接的最长时间
	.setSocketTimeout(httpSocketTimeout) // 数据传输的最长时间
	.setStaleConnectionCheckEnabled(httpStaleConnectionCheckEnabled) // 提交请求前测试连接是否可用
	.build();
}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_8-spring的整合rabbitmq" tabindex="-1"><a class="header-anchor" href="#_8-spring的整合rabbitmq"><span>8. Spring的整合RabbitMQ</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>导入spring-boot-starter-amqp的依赖
&lt;dependency&gt;
	&lt;groupId&gt;org.springframeword.boot&lt;/groupId&gt;
	&lt;artifactId&gt;spring-boot-starter-amqp&lt;/artifactId&gt;
&lt;/dependency&gt;
application.properties文件中配置RabbitMQ的连接信息
spring.rabbitmq.host=127.0.0.1
spring.rabbitmq.port=5672
spring.rabbitmq.password=root
spring.rabbitmq.username=test
spring.rabbitmq.virtual-hos=/test

编写Rabbit的Spring配置类
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitAdmin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitMQSpringConfig {

@Autowired
private ConnectionFactory connectionFactory;

// 管理
@Bean
public RabbitAdmin rabbitAdmin() {
	return new RabbitAdmin(connectionFactory);
}

// 声明队列
@Bean
public Queue taotaoCartLoginQueue() {
	// 默认就是自动声明的
	return new Queue(&quot;TAOTAO-CART-LOGIN-QUEUE&quot;, true);
}

// 声明队列
@Bean
public Queue taotaoCartOrderSuccessQueue() {
	// 默认就是自动声明的
	return new Queue(&quot;TAOTAO-CART-ORDER-SUCCESS-QUEUE&quot;, true);
}

}
设置监听
@Component
public class Test{
	@RabbitListener(queues = &quot;xxxx&quot;)
	public void fun(){}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_9-spring整合servlet、filter、listener" tabindex="-1"><a class="header-anchor" href="#_9-spring整合servlet、filter、listener"><span>9. spring整合Servlet、Filter、Listener</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>注册Servlet
①使用ServletRegistrationBean注册
使用ServletRegistrationBean注册只需要在@Configuration类中加入即可
@Configuration
public class Registration{
@Bean  
public ServletRegistrationBean myServlet() {  
	ServletRegistrationBean myServlet = new ServletRegistrationBean();  
	myServlet.addUrlMappings(&quot;/servlet&quot;);  
	myServlet.setServlet(new MyServlet());  
	return myServlet;  
}
}
②使用@WebServlet
使用@WebServlet注册，需要在Servlet类上使用该注解即可，
但是需要在@Configuration类中使用@ServletComponentScan扫描注册相应的Servlet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>注册Filter
注意注册多个filter要自己一个个注册不要挤在一起
①使用FilterRegistrationBean注册
使用FilterRegistrationBean注册Filter，只需要在@Configuration类中加入即可
@Bean  
public FilterRegistrationBean myFilter() {  
	FilterRegistrationBean myFilter = new FilterRegistrationBean();  
	myFilter.addUrlPatterns(&quot;/*&quot;);  
	myFilter.setFilter(new MyFilter());  
	return myFilter;  
}  
②使用@WebFilter
使用@WebFilter注册，需要在Filter类上使用该注解即可，
但是需要在@Configuration类中使用@ServletComponentScan扫描注册相应的Filter。
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>注册Listener
①使用ServletListenerRegistrationBean注册
使用ServletListenerRegistrationBean注册Listener只需要在@Configuration类中加入即可
@Bean  
public ServletListenerRegistrationBean&lt;MyListener&gt; myServletListener() {  
	ServletListenerRegistrationBean&lt;MyListener&gt; myListener = 
	new ServletListenerRegistrationBean&lt;MyListener&gt;();
	myListener.setListener(new MyListener());  
	return myListener;  
}  
②使用@WebListener
使用@WebListener注册，需要在Filter类上使用该注解即可，
但是需要在@Configuration类中使用Spring Boot提供的注解
@ServletComponentScan扫描注册相应的Listener
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_10-springboot常见问题" tabindex="-1"><a class="header-anchor" href="#_10-springboot常见问题"><span>10. springboot常见问题</span></a></h1><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/03d148b38878303db4ee4.png" alt="47.png" tabindex="0"><figcaption>47.png</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Slf4j日志警告
提示我们当前的项目中slf4j引入了2个，导致了jar冲突。
解决：删除自己引入到slf4j的依赖
&lt;dependency&gt;
	&lt;groupId&gt;org.slf4j&lt;/groupId&gt;
	&lt;artifactId&gt;slf4j-log4jl2&lt;/artifactId&gt;
&lt;/dependency&gt;

jsp访问404的问题
由于Spring boot使用的内嵌的tomcat，而内嵌的tamcat是不支持jsp页面的，
导包
&lt;dependency&gt;
	&lt;groupId&gt;org.apache.tomcat.embed&lt;/groupId&gt;
	&lt;artifactId&gt;tomcat-embed-jasper&lt;/artifactId&gt;
	&lt;scope&gt;provided&lt;/scope&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),l=[r];function a(d,o){return i(),e("div",null,l)}const u=n(s,[["render",a],["__file","springboot.html.vue"]]),m=JSON.parse('{"path":"/backend/j2ee/springboot.html","title":"springboot","lang":"zh-CN","frontmatter":{"title":"springboot","date":"2023-01-01T00:00:00.000Z","tags":"springboot","categories":"后端","description":"springboot 1. SpringBoot 2. springboot2程序入门 3. Spring Boot API 4. 自定义SpringMVC的配置(拦截器) 5. Mybatis和Spring Boot整合(两种方式) 6. Spring的整合Redis 7. Spring的整合Httpclient 8. Spring的整合Rabbit...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/j2ee/springboot.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"springboot"}],["meta",{"property":"og:description","content":"springboot 1. SpringBoot 2. springboot2程序入门 3. Spring Boot API 4. 自定义SpringMVC的配置(拦截器) 5. Mybatis和Spring Boot整合(两种方式) 6. Spring的整合Redis 7. Spring的整合Httpclient 8. Spring的整合Rabbit..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/03d148b38878303db4ee4.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"springboot\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/03d148b38878303db4ee4.png\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":7.93,"words":2378},"filePathRelative":"backend/j2ee/springboot.md","localizedDate":"2023年1月1日","excerpt":"<p>springboot</p>\\n<!--more-->\\n<!-- TOC -->\\n<ul>\\n<li><a href=\\"#1-springboot\\">1. SpringBoot</a></li>\\n<li><a href=\\"#2-springboot2%E7%A8%8B%E5%BA%8F%E5%85%A5%E9%97%A8\\">2. springboot2程序入门</a></li>\\n<li><a href=\\"#3-spring-boot-api\\">3. Spring Boot API</a></li>\\n<li><a href=\\"#4-%E8%87%AA%E5%AE%9A%E4%B9%89springmvc%E7%9A%84%E9%85%8D%E7%BD%AE%E6%8B%A6%E6%88%AA%E5%99%A8\\">4. 自定义SpringMVC的配置(拦截器)</a></li>\\n<li><a href=\\"#5-mybatis%E5%92%8Cspring-boot%E6%95%B4%E5%90%88%E4%B8%A4%E7%A7%8D%E6%96%B9%E5%BC%8F\\">5. Mybatis和Spring Boot整合(两种方式)</a></li>\\n<li><a href=\\"#6-spring%E7%9A%84%E6%95%B4%E5%90%88redis\\">6. Spring的整合Redis</a></li>\\n<li><a href=\\"#7-spring%E7%9A%84%E6%95%B4%E5%90%88httpclient\\">7. Spring的整合Httpclient</a></li>\\n<li><a href=\\"#8-spring%E7%9A%84%E6%95%B4%E5%90%88rabbitmq\\">8. Spring的整合RabbitMQ</a></li>\\n<li><a href=\\"#9-spring%E6%95%B4%E5%90%88servletfilterlistener\\">9. spring整合Servlet、Filter、Listener</a></li>\\n<li><a href=\\"#10-springboot%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98\\">10. springboot常见问题</a></li>\\n</ul>","autoDesc":true}');export{u as comp,m as data};
