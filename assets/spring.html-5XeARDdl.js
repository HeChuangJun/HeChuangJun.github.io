import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,a as t}from"./app-Cw8r8IGg.js";const s={},l=t(`<p>spring</p><ul><li><a href="#1-spring%E4%BB%8B%E7%BB%8D">1. spring介绍</a></li><li><a href="#4-spring%E6%A1%86%E6%9E%B6%E4%BD%BF%E7%94%A8">4. spring框架使用</a></li><li><a href="#5-spring%E4%B8%8Ejunit%E6%95%B4%E5%90%88%E6%B5%8B%E8%AF%95%E5%B8%B8%E7%94%A8">5. spring与junit整合测试（常用）</a></li><li><a href="#6-applicationcontextxml%E9%85%8D%E7%BD%AE%E8%AF%A6%E8%A7%A3">6. applicationContext.xml配置详解</a></li><li><a href="#7-spring%E5%88%9B%E5%BB%BA%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E5%BC%8F">7. spring创建对象的方式</a></li><li><a href="#8-springaop">8. SpringAOP</a></li><li><a href="#9-spring%E6%95%B4%E5%90%88jdbc">9. spring整合JDBC</a></li><li><a href="#10-spring%E4%BA%8B%E5%8A%A1">10. spring事务</a></li><li><a href="#11-spring-web%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AE">11. spring web项目配置</a></li><li><a href="#12-spring%E6%95%B4%E5%90%88struts2">12. spring整合struts2</a></li><li><a href="#13-spring%E6%95%B4%E5%90%88c3p0%E8%BF%9E%E6%8E%A5%E6%B1%A0">13. spring整合c3p0连接池</a></li><li><a href="#14-spring%E6%95%B4%E5%90%88hibernate">14. spring整合hibernate</a></li><li><a href="#15-spring%E7%9A%84java%E9%85%8D%E7%BD%AE%E5%A4%9A%E6%95%B0%E6%8D%AE%E6%BA%90">15. spring的java配置多数据源</a></li><li><a href="#16-spring4x%E7%9A%84java%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F%E5%8F%AF%E4%BB%A5%E5%AE%8C%E5%85%A8%E6%9B%BF%E4%BB%A3xml%E9%85%8D%E7%BD%AE">16. Spring4.x的Java配置方式（可以完全替代xml配置）</a></li><li><a href="#17-spring4x%E9%85%8D%E7%BD%AE%E6%95%B0%E6%8D%AE%E5%BA%93%E8%BF%9E%E6%8E%A5%E6%B1%A0">17. spring4.x配置数据库连接池</a></li><li><a href="#spring%E4%B8%8D%E5%90%8C%E7%B1%BB%E5%9E%8B%E7%9A%84%E4%BA%8B%E4%BB%B6">spring不同类型的事件？</a></li></ul><h1 id="_1-spring介绍" tabindex="-1"><a class="header-anchor" href="#_1-spring介绍"><span>1. spring介绍</span></a></h1><ul><li>spring框架性质是属于容器性质的.容器中装什么对象就有什么功能.所以可以一站式.不仅不排斥其他框架,还能帮其他框架管理对象.</li><li>aop支持\\ioc思想&#39;\\spring jdbc\\aop 事务\\junit 测试支持</li></ul><h1 id="_4-spring框架使用" tabindex="-1"><a class="header-anchor" href="#_4-spring框架使用"><span>4. spring框架使用</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>xml配置
导包
com.springsource.org.apache.log4j-1.2.15.jar可选
spring-beans-4.2.4.RELEASE.jar
spring-context-4.2.4.RELEASE.jar
spring-core-4.2.4.RELEASE.jar
spring-expression-4.2.4.RELEASE.jar

com.springsource.org.apache.commons.logging-1.1.1.jar日志包

创建一个对象，set/get方法
在src下的applicationContext.xml中导入约束beans约束,并注册对象
&lt;bean name=&quot;&quot; class=&quot;&quot;/&gt;
代码测试
@Test
public void fun(){
	ApplicationContext ac = new ClassPathXmlApplicationContext(&quot;applicationContext.xml&quot;);
	User u = ac.getBean(&quot;user&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>注解配置
导包一样
配置applicationContext.xml开启使用注解代理
导入约束spring-context-4.2.xsd
指定扫描该com.junye.bean包及子孙包下所有类中的注解
&lt;context:component-scan base-package=&quot;com.junye.bean&quot;&gt;&lt;/context&gt;
在类中使用注解完成配置
将对象注册到容器四个注解没区别，唯一区分就是分层，推荐使用最后三个
@component(&quot;user&quot;)
@Controller(&quot;user&quot;)//web层
@Service(&quot;user&quot;)//service层
@Repository(&quot;user&quot;)//dao层

修改对象的作用范围(struts中的Action是多例的才线程安全，单例不安全)
@Scope(scopeName=&quot;prototype&quot;)	

值类型注入
@Value(&quot;tom&quot;)//通过反射的Field赋值,破坏了封装性
private String name;
通过set方法赋值,推荐使用.
@Value(&quot;tom&quot;)
public void setName(String name){
	this.name=name;
}

引用类型注入
@Autowired//自动装配,如果匹配多个类型一致的对象，将无法选择注入那个对象
@Qualifier(&quot;car2&quot;)告诉spring容器自动装配那个名称的对象
private Car car;
@Resource(name=&quot;car&quot;)手动注入，指定注入那个对象
private Car car;

初始化|销毁方法
@PostConstruct//在对象被创建后调用。init-method
public voud init(){}
@PreDestroy//在销毁之前调用。destory-method
public void destory(){}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_5-spring与junit整合测试-常用" tabindex="-1"><a class="header-anchor" href="#_5-spring与junit整合测试-常用"><span>5. spring与junit整合测试（常用）</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>导包
com.springsource.org.apache.log4j-1.2.15.jar可选
spring-beans-4.2.4.RELEASE.jar
spring-context-4.2.4.RELEASE.jar
spring-core-4.2.4.RELEASE.jar
spring-expression-4.2.4.RELEASE.jar
com.springsource.org.apache.commons.logging-1.1.1.jar
spring-aop-4.2.4.RELEASE.jar

spring-test-4.2.4.RELEASE.jar

配置注解与测试
@RunWith(SpringJUnit4ClassRunner.class)		
@ContextConfiguration(&quot;classpath:applicationContext.xml&quot;)
public class Demo{
	@Resource(name=&quot;user&quot;)
	private User u;
	
	@Test
	public void fun1(){
		System.out.println(&quot;测试&quot;);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_6-applicationcontext-xml配置详解" tabindex="-1"><a class="header-anchor" href="#_6-applicationcontext-xml配置详解"><span>6. applicationContext.xml配置详解</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;!-- 
Bean元素：描述需要spring容器管理的对象
class属性:被管理对象的完整类名.
name属性:命名被管理的对象.获得对象时根据该名称获得对象.可重复.可用特殊字符（推荐）
id属性: 与name属性一模一样. 名称不可重复.不能使用特殊字符. 
scope属性(整合struts2时,ActionBean必须配置为多例的)
	singleton(默认值):单例对象.被标识为单例的对象在spring容器中只会存在一个实例
	prototype:多例原型.被标识为多例的对象,每次再获得才会创建.每次创建都是新的对象.
	request:web环境下.对象与request生命周期一致.
	session:web环境下,对象与session生命周期一致. 
生命周期属性(需要在相应的类中实现其方法)
	配置生命周期初始化方法.spring会在对象创建之后立即调用.init-method
	配置生命周期的销毁方法.spring容器在关闭并销毁所有容器中的对象之前调用.destory-method	
--&gt;
&lt;bean  id=&quot;user&quot; name=&quot;user&quot; class=&quot;cn.bean.User&quot; scope=&quot;singleton&quot; init-method=&quot;init&quot; destroy-method=&quot;destroy&quot;&gt;&lt;/bean&gt;
&lt;!-- spring的分模块配置(导入其他spring配置文件) --&gt;
&lt;import resource=&quot;cn/b_create/applicationContext.xml&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_7-spring创建对象的方式" tabindex="-1"><a class="header-anchor" href="#_7-spring创建对象的方式"><span>7. spring创建对象的方式</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>空参构造方式
&lt;bean name=&quot;junye&quot; class=&quot;cn.junye.hello.Junye&quot;&gt;&lt;/bean&gt;

静态工厂(了解)不需创建即可用类名调用静态方法
public class UserFactory{
	public static User createUser(){
		System.out.println(&quot;静态工厂创建User&quot;);
		return new User();
	}
}
&lt;bean name=&quot;userFactory&quot; class=&quot;cn.junye.hello.UserFactory&quot; factory-method=&quot;createUser&quot;&gt;&lt;/bean&gt;

实例工厂(了解)
public  User fun(){
	System.out.println(&quot;实例工厂创建User&quot;);
	return new User();	
}
&lt;!-- 调用UserFactory对象的createUser2方法创建名为user3的对象.放入容器--&gt;
&lt;bean  name=&quot;user3&quot; factory-bean=&quot;userFactory&quot; factory-method=&quot;fun&quot;&gt;&lt;/bean&gt;
&lt;bean  name=&quot;userFactory&quot; class=&quot;cn.b_create.UserFactory&quot; &lt;/bean&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_8-springaop" tabindex="-1"><a class="header-anchor" href="#_8-springaop"><span>8. SpringAOP</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>xml配置
导包
com.springsource.org.apache.log4j-1.2.15.jar
spring-beans-4.2.4.RELEASE.jar
spring-context-4.2.4.RELEASE.jar
spring-core-4.2.4.RELEASE.jar
spring-expression-4.2.4.RELEASE.jar
com.springsource.org.apache.commons.logging-1.1.1.jar
spring的aop包
spring-aspects-4.2.4.RELEASE.jar
spring-aop-4.2.4.RELEASE.jar
spring需要的第三方aop包
com.springsource.org.aopalliance-1.0.0.jar
com.springsource.org.aspectj.weaver-1.6.8.RELEASE.jar

目标对象(接口实现关系)
public class UserServiceImpl implements UserService {
	@Override
	public void save() {
		System.out.println(&quot;保存用户!&quot;);
	}
}

准备通知类
public class MyAdvice {
	//前置通知:目标方法运行之前调用
	public void before(){
		System.out.println(&quot;这是前置通知!!&quot;);
	}
	//环绕通知:在目标方法之前和之后都调用
	public Object around(ProceedingJoinPoint pjp) throws Throwable {
		System.out.println(&quot;这是环绕通知之前的部分!!&quot;);
		Object proceed = pjp.proceed();//调用目标方法
		System.out.println(&quot;这是环绕通知之后的部分!!&quot;);
		return proceed;
	}
	//后置通知:在目标方法运行之后调用(如果出现异常不会调用)
	public void afterReturning(){
		System.out.println(&quot;这是后置通知(如果出现异常不会调用)!!&quot;);
	}
	//后置通知:在目标方法运行之后调用(无论是否出现 异常都会调用)
	public void after(){
		System.out.println(&quot;这是后置通知(出现异常也会调用)!!&quot;);
	}
	//异常通知:如果出现异常,就会调用
	public void afterException(){
		System.out.println(&quot;出事啦!出现异常了!!&quot;);
	}
}
配置applicationContext.xml,将通知织入目标对象中
//导入aop约束
&lt;!-- 1.配置目标对象 --&gt;
&lt;bean name=&quot;userService&quot; class=&quot;cn.itcast.service.UserServiceImpl&quot; &gt;&lt;/bean&gt;

&lt;!-- 2.配置通知对象 --&gt;
&lt;bean name=&quot;myAdvice&quot; class=&quot;cn.itcast.d_springaop.MyAdvice&quot; &gt;&lt;/bean&gt;

&lt;aop:config&gt;&lt;!--执行顺序为下面那个--&gt;
	&lt;aop:pointcut expression=&quot;execution(* cn.service.*ServiceImpl.*(..))&quot; id=&quot;pc&quot;/&gt;
	&lt;aop:aspect ref=&quot;myAdvice&quot; &gt;
		&lt;aop:before method=&quot;before&quot; pointcut-ref=&quot;pc&quot; /&gt;
		&lt;aop:around method=&quot;around&quot; pointcut-ref=&quot;pc&quot; /&gt;
		&lt;aop:after-returning method=&quot;afterReturning&quot; pointcut-ref=&quot;pc&quot; /&gt;
		&lt;aop:after method=&quot;after&quot; pointcut-ref=&quot;pc&quot;/&gt;
		&lt;aop:after-throwing method=&quot;afterException&quot; pointcut-ref=&quot;pc&quot;/&gt;
	&lt;/aop:aspect&gt;
&lt;/aop:config&gt;

&lt;!-- 配置切入点 ，配置要被切的方法通常在service层

public void cn.itcast.service.UserServiceImpl.save() 
void cn.itcast.service.UserServiceImpl.save()
* cn.itcast.service.UserServiceImpl.save()
* cn.itcast.service.UserServiceImpl.*()

* cn.itcast.service.*ServiceImpl.*(..)包括一到多的参数
* cn.itcast.service..*ServiceImpl.*(..)包括所有的子包 --&gt;
测试

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(&quot;classpath:applicationContext.xml&quot;)
public class Demo {
	@Resource(name=&quot;myAop&quot;)
	private MyAop us;接口
	@Test
	public void fun1(){
		us.save();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>注解配置
导包(一样)
开启使用注解完成织入
&lt;aop:aspectj-autoproxy&gt;&lt;/aop:aspectj-autoproxy&gt;
准备目标对象(一样)	
准备通知(一样)配置目标对象和通知对象（xml中）一样
配置进行织入,将通知织入目标对象中
//通知类
@Aspect
//表示该类是一个通知类
public class MyAdvice {
	@Pointcut(&quot;execution(* cn.itcast.service.*ServiceImpl.*(..))&quot;)
	public void pc(){}
	//前置通知
	//指定该方法是前置通知,并制定切入点
	@Before(&quot;MyAdvice.pc()&quot;)
	public void before(){
		System.out.println(&quot;这是前置通知!!&quot;);
	}
	//后置通知
	@AfterReturning(&quot;execution(* cn.itcast.service.*ServiceImpl.*(..))&quot;)
	public void afterReturning(){
		System.out.println(&quot;这是后置通知(如果出现异常不会调用)!!&quot;);
	}
	//环绕通知
	@Around(&quot;execution(* cn.itcast.service.*ServiceImpl.*(..))&quot;)
	public Object around(ProceedingJoinPoint pjp) throws Throwable {
		System.out.println(&quot;这是环绕通知之前的部分!!&quot;);
		Object proceed = pjp.proceed();//调用目标方法
		System.out.println(&quot;这是环绕通知之后的部分!!&quot;);
		return proceed;
	}
	//异常通知
	@AfterThrowing(&quot;execution(* cn.itcast.service.*ServiceImpl.*(..))&quot;)
	public void afterException(){
		System.out.println(&quot;出事啦!出现异常了!!&quot;);
	}
	//后置通知
	@After(&quot;execution(* cn.itcast.service.*ServiceImpl.*(..))&quot;)
	public void after(){
		System.out.println(&quot;这是后置通知(出现异常也会调用)!!&quot;);
	}
}
@before（Myadvice.pc()指寻找Myadvice的pc方法的pointcut注释，与pc这个方法内容无关）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_9-spring整合jdbc" tabindex="-1"><a class="header-anchor" href="#_9-spring整合jdbc"><span>9. spring整合JDBC</span></a></h1><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/8a89f9ce1d4d779c62ba4.png" alt="dao.png" tabindex="0"><figcaption>dao.png</figcaption></figure><ul><li>spring提供了很多模板整合Dao技术</li><li>spring中提供了一个可以操作数据库的对象.对象封装了jdbc技术.</li><li>JDBCTemplate =&gt; JDBC模板对象与DBUtils中的QueryRunner非常相似.</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>导包
com.springsource.com.mchange.v2.c3p0-0.9.1.2.jar
com.springsource.org.apache.commons.logging-1.1.1.jar
com.springsource.org.apache.log4j-1.2.15.jar
mysql-connector-java-5.1.7-bin.jar
spring-aop-4.2.4.RELEASE.jar
spring-beans-4.2.4.RELEASE.jar
spring-context-4.2.4.RELEASE.jar
spring-core-4.2.4.RELEASE.jar
spring-expression-4.2.4.RELEASE.jar
spring-jdbc-4.2.4.RELEASE.jar
spring-test-4.2.4.RELEASE.jar
spring-tx-4.2.4.RELEASE.jar

准备数据库
application.xml的配置

JdbcTemplate依赖dataSource，UserDao依赖JdbcTemplate

&lt;context:property-placeholder location=&quot;classpath:db.properties&quot;  /&gt;
&lt;bean name=&quot;dataSource&quot; class=&quot;com.mchange.v2.c3p0.ComboPooledDataSource&quot; &gt;
	&lt;property name=&quot;jdbcUrl&quot; value=&quot;\${jdbc.jdbcUrl}&quot; &gt;&lt;/property&gt;
	&lt;property name=&quot;driverClass&quot; value=&quot;\${jdbc.driverClass}&quot; &gt;&lt;/property&gt;
	&lt;property name=&quot;user&quot; value=&quot;\${jdbc.user}&quot; &gt;&lt;/property&gt;
	&lt;property name=&quot;password&quot; value=&quot;\${jdbc.password}&quot; &gt;&lt;/property&gt;
&lt;/bean&gt;
&lt;bean name=&quot;jdbcTemplate&quot; class=&quot;org.springframework.jdbc.core.JdbcTemplate&quot; &gt;
	&lt;property name=&quot;dataSource&quot; ref=&quot;dataSource&quot; &gt;&lt;/property&gt;
&lt;/bean&gt;
&lt;bean name=&quot;userDao&quot; class=&quot;cn.itcast.a_jdbctemplate.UserDaoImpl&quot; &gt;
	&lt;property name=&quot;jt&quot; ref=&quot;jdbcTemplate&quot; &gt;&lt;/property&gt;
&lt;/bean&gt;

测试
③1、Dao实现类通过定义private JdbcTemplate jt和set方法操作数据库
2、Dao实现类继承jdbcDaoSupport通过super.getJdbcTemplate()操作数据库
public class UserDaoImpl extends JdbcDaoSupport implements UserDao {
	@Override
	public void save(User u) {
		String sql = &quot;insert into t_user values(null,?) &quot;;
		super.getJdbcTemplate().update(sql, u.getName());
	}
	@Override
	public void delete(Integer id) {
		String sql = &quot;delete from t_user where id = ? &quot;;
		super.getJdbcTemplate().update(sql,id);
	}
	@Override
	public void update(User u) {
		String sql = &quot;update  t_user set name = ? where id=? &quot;;
		super.getJdbcTemplate().update(sql, u.getName(),u.getId());
	}
	@Override
	public User getById(Integer id) {
		String sql = &quot;select * from t_user where id = ? &quot;;
		return super.getJdbcTemplate().queryForObject(sql,new RowMapper&lt;User&gt;(){
	@Override
	public User mapRow(ResultSet rs, int arg1) throws SQLException {
		User u = new User();
		u.setId(rs.getInt(&quot;id&quot;));
		u.setName(rs.getString(&quot;name&quot;));
		return u;
		}}, id);
	}
	@Override
	public int getTotalCount() {
		String sql = &quot;select count(*) from t_user  &quot;;
		Integer count = super.getJdbcTemplate().queryForObject(sql, Integer.class);
		return count;
	}

	@Override
	public List&lt;User&gt; getAll() {
		String sql = &quot;select * from t_user  &quot;;
		List&lt;User&gt; list = super.getJdbcTemplate().query(sql, new RowMapper&lt;User&gt;(){
		@Override
		public User mapRow(ResultSet rs, int arg1) throws SQLException {
			User u = new User();
			u.setId(rs.getInt(&quot;id&quot;));
			u.setName(rs.getString(&quot;name&quot;));
			return u;
		}});
	return list;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_10-spring事务" tabindex="-1"><a class="header-anchor" href="#_10-spring事务"><span>10. spring事务</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>xml配置(aop)
导包
com.springsource.com.mchange.v2.c3p0-0.9.1.2.jar
com.springsource.org.aopalliance-1.0.0.jar
com.springsource.org.apache.commons.logging-1.1.1.jar
com.springsource.org.apache.log4j-1.2.15.jar
com.springsource.org.aspectj.weaver-1.6.8.RELEASE.jar
mysql-connector-java-5.1.7-bin.jar
spring-aop-4.2.4.RELEASE.jar
spring-aspects-4.2.4.RELEASE.jar
spring-beans-4.2.4.RELEASE.jar
spring-context-4.2.4.RELEASE.jar
spring-core-4.2.4.RELEASE.jar
spring-expression-4.2.4.RELEASE.jar
spring-jdbc-4.2.4.RELEASE.jar
spring-test-4.2.4.RELEASE.jar
spring-tx-4.2.4.RELEASE.jar				

application.xml配置
&lt;!-- 导入新的约束(tx)
beans: 最基本
context:读取properties配置
aop:配置aop
tx:配置事务通知 --&gt;
&lt;!-- 将核心事务管理器配置到spring容器 --&gt;
&lt;bean name=&quot;transactionManager&quot; class=&quot;org.springframework.jdbc.datasource.DataSourceTransactionManager&quot; &gt;
	&lt;property name=&quot;dataSource&quot; ref=&quot;dataSource&quot; &gt;&lt;/property&gt;
&lt;/bean&gt;

&lt;!-- 配置通知（环绕通知）会改写数据库的语句增加了read-only的话会报错--&gt;
&lt;tx:advice id=&quot;txAdvice&quot; transaction-manager=&quot;transactionManager&quot; &gt;
	&lt;tx:attributes&gt;
		&lt;tx:method name=&quot;save*&quot; isolation=&quot;REPEATABLE_READ&quot; propagation=&quot;REQUIRED&quot; read-only=&quot;false&quot; /&gt;
	&lt;/tx:attributes&gt;
&lt;/tx:advice&gt;

&lt;!--配置将通知织入目标--&gt;
&lt;aop:config&gt;
	&lt;aop:advisor advice-ref=&quot;txAdvice&quot; pointcut=&quot;execution(* cn.service.*.*(..))&quot; /&gt;
&lt;/aop:config&gt;
或者
&lt;!-- 配置织入 --&gt;
&lt;aop:config  &gt;
	&lt;!-- 配置切点表达式 --&gt;
	&lt;aop:pointcut expression=&quot;execution(* cn.itcast.service.*ServiceImpl.*(..))&quot; id=&quot;txPc&quot;/&gt;
	&lt;!-- 配置切面 : 通知+切点 advice-ref:通知的名称pointcut-ref:切点的名称--&gt;
	&lt;aop:advisor advice-ref=&quot;txAdvice&quot; pointcut-ref=&quot;txPc&quot; /&gt;
&lt;/aop:config&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>注解配置(aop)
导包（一样）
导入新的约束(tx)(一样)
将核心事务管理器配置到spring容器(一样)
开启注解管理事务&lt;tx:annotation-driven/&gt;
在类或方法上面配置注解
- @Transactional(isolation=Isolation.REPEATABLE_READ,propagation=Propagation.REQUIRED,readOnly=true)					
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_11-spring-web项目配置" tabindex="-1"><a class="header-anchor" href="#_11-spring-web项目配置"><span>11. spring web项目配置</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>导包(41个)
创建配置文件applicationContext.xml,并导入约束(4个)beans|context|aop|tx
&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;beans xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
	xmlns=&quot;http://www.springframework.org/schema/beans&quot; 
	xmlns:context=&quot;http://www.springframework.org/schema/context&quot;
	xmlns:aop=&quot;http://www.springframework.org/schema/aop&quot; 
	xmlns:tx=&quot;http://www.springframework.org/schema/tx&quot;
	xsi:schemaLocation=&quot;http://www.springframework.org/schema/beans 
	http://www.springframework.org/schema/beans/spring-beans-4.2.xsd 
	http://www.springframework.org/schema/context 
	http://www.springframework.org/schema/context/spring-context-4.2.xsd 
	http://www.springframework.org/schema/aop 
	http://www.springframework.org/schema/aop/spring-aop-4.2.xsd 
	http://www.springframework.org/schema/tx 
	http://www.springframework.org/schema/tx/spring-tx-4.2.xsd &quot;&gt;
&lt;/beans&gt;

配置spring随项目启动(web.xml)
&lt;!-- 让spring随web启动而创建的监听器 --&gt;
&lt;listener&gt;
	&lt;listener-class&gt;org.springframework.web.context.ContextLoaderListener&lt;/listener-class&gt;
&lt;/listener&gt;
&lt;!-- 配置spring配置文件位置参数 --&gt;
&lt;context-param&gt;
	&lt;param-name&gt;contextConfigLocation&lt;/param-name&gt;
	&lt;param-value&gt;classpath:applicationContext.xml&lt;/param-value&gt;
&lt;/context-param&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_12-spring整合struts2" tabindex="-1"><a class="header-anchor" href="#_12-spring整合struts2"><span>12. spring整合struts2</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>导包
struts.xml配置常量
在/struts2-spring-plugin-2.3.24.jar/struts-plugin.xml
struts.objectFactory = spring	将action的创建交给spring容器(已开)
&lt;constant name=&quot;struts.objectFactory&quot; value=&quot;spring&quot;&gt;&lt;/constant&gt;

在/struts2-core-2.3.24.jar/default.properties	
struts.objectFactory.spring.autoWire = name spring负责装配Action依赖属性(已开)

	配置struts2主配置文件struts.xml并倒入约束
	&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
	&lt;!DOCTYPE struts PUBLIC
	&quot;-//Apache Software Foundation//DTD Struts Configuration 2.3//EN&quot;
	&quot;http://struts.apache.org/dtds/struts-2.3.dtd&quot;&gt;
		&lt;package name=&quot;crm&quot; namespace=&quot;/&quot; extends=&quot;struts-default&quot; &gt;
			&lt;!-- class属性上填写spring中action对象的BeanName完全由spring管理action生命周期,包括Action的创建 注意:需要手动组装依赖属性
			struts.xml，Action中的属性不组装则为null--&gt;
			&lt;action name=&quot;UserAction_*&quot; class=&quot;userAction&quot; method=&quot;{1}&quot; &gt;
				&lt;result name=&quot;toHome&quot; type=&quot;redirect&quot; &gt;/index.htm&lt;/result&gt;
				&lt;result name=&quot;error&quot; &gt;/login.jsp&lt;/result&gt;
			&lt;/action&gt;
		&lt;/package&gt;
	&lt;/struts&gt;


配置applicationContext.xml

&lt;!-- 注意:Action对象作用范围一定是多例的.这样才符合struts2架构 --&gt;
&lt;bean name=&quot;userAction&quot; class=&quot;cn.action.UserAction&quot; scope=&quot;prototype&quot; &gt;
	&lt;property name=&quot;userService&quot; ref=&quot;userService&quot; &gt;&lt;/property&gt;
&lt;/bean&gt;

配置struts2核心过滤器到web.xml
&lt;filter&gt;
	&lt;filter-name&gt;struts2&lt;/filter-name&gt;
	&lt;filter-class&gt;org.apache.struts2.dispatcher.ng.filter.StrutsPrepareAndExecuteFilter&lt;/filter-class&gt;
&lt;/filter&gt;
&lt;filter-mapping&gt;
	&lt;filter-name&gt;struts2&lt;/filter-name&gt;
	&lt;url-pattern&gt;/*&lt;/url-pattern&gt;
&lt;/filter-mapping&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_13-spring整合c3p0连接池" tabindex="-1"><a class="header-anchor" href="#_13-spring整合c3p0连接池"><span>13. spring整合c3p0连接池</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>配置db.properties
jdbc.jdbcUrl=jdbc:mysql:///crm_32
jdbc.driverClass=com.mysql.jdbc.Driver
jdbc.user=root
jdbc.password=1234

引入连接池到spring中
	&lt;!-- 读取db.properties文件 --&gt;
	&lt;context:property-placeholder location=&quot;classpath:db.properties&quot; /&gt;
	&lt;bean name=&quot;dataSource&quot; class=&quot;com.mchange.v2.c3p0.ComboPooledDataSource&quot; &gt;
		&lt;property name=&quot;jdbcUrl&quot; value=&quot;\${jdbc.jdbcUrl}&quot; &gt;&lt;/property&gt;
		&lt;property name=&quot;driverClass&quot; value=&quot;\${jdbc.driverClass}&quot; &gt;&lt;/property&gt;
		&lt;property name=&quot;user&quot; value=&quot;\${jdbc.user}&quot; &gt;&lt;/property&gt;
		&lt;property name=&quot;password&quot; value=&quot;\${jdbc.password}&quot; &gt;&lt;/property&gt;
	&lt;/bean&gt;


	将连接池注入给SessionFactory
	&lt;bean name=&quot;sessionFactory&quot; class=&quot;org.springframework.orm.hibernate5.LocalSessionFactoryBean&quot; &gt;
	&lt;!-- 将连接池注入到sessionFactory, hibernate会通过连接池获得连接 --&gt;
	&lt;property name=&quot;dataSource&quot; ref=&quot;dataSource&quot; &gt;&lt;/property&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_14-spring整合hibernate" tabindex="-1"><a class="header-anchor" href="#_14-spring整合hibernate"><span>14. spring整合hibernate</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>导入实体类&amp;orm元数据
&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;!DOCTYPE hibernate-mapping PUBLIC 
&quot;-//Hibernate/Hibernate Mapping DTD 3.0//EN&quot;
&quot;http://www.hibernate.org/dtd/hibernate-mapping-3.0.dtd&quot;&gt;
&lt;hibernate-mapping package=&quot;&quot; &gt;
	&lt;class name=&quot;&quot; table=&quot;&quot; &gt;
	&lt;id name=&quot;&quot; column=&quot;&quot; &gt;
		&lt;generator class=&quot;native|assigned|uuid|increment|hilo|identity|sequence&quot;&gt;&lt;/generator&gt;
	&lt;/id&gt;
	&lt;property name=&quot;&quot; column=&quot;&quot; &gt;&lt;/property&gt;

	&lt;set name=&quot;&quot; inverse=&quot;true|false&quot; cascade=&quot;save-update|delete|all&quot; 
	lazy=&quot;true|false|extra&quot; fetch=&quot;select/join/subselect&quot; batch-size=&quot;3&quot;&gt;
	&lt;key column=&quot;&quot; &gt;&lt;/key&gt;
		&lt;one-to-many class=&quot;&quot; /&gt;
	&lt;/set&gt;
	&lt;many-to-one name=&quot;&quot; column=&quot;&quot; class=&quot;&quot; inverse=&quot;false|true&quot; cascade=&quot;save-update|delete|all&quot; 
		lazy=&quot;false/proxy&quot; fetch=&quot;select/join&quot;&gt;
	&lt;/many-to-one&gt;

	&lt;set name=&quot;&quot; table=&quot;&quot; inverse=&quot;true|false&quot; cascade=&quot;save-update|delete|all&quot;
		lazy=&quot;true|false|extra&quot; fetch=&quot;select/join/subselect&quot;&gt;
		&lt;key column=&quot;&quot; &gt;&lt;/key&gt;
		&lt;many-to-many class=&quot;&quot; column=&quot;&quot; &gt;&lt;/many-to-many&gt;
	&lt;/set&gt;
	&lt;/class&gt;
&lt;/hibernate-mapping&gt;

在spring配置中放置hibernate配置信息
//将sessionFactory交给spring代替配置主配置文件
&lt;bean name=&quot;sessionFactory&quot; class=&quot;org.springframework.orm.hibernate5.LocalSessionFactoryBean&quot; &gt;
&lt;!-- 将连接池注入到sessionFactory, hibernate会通过连接池获得连接 --&gt;
	&lt;property name=&quot;dataSource&quot; ref=&quot;dataSource&quot; &gt;&lt;/property&gt;
	&lt;property name=&quot;hibernateProperties&quot;&gt;
	&lt;props&gt;
		&lt;prop key=&quot;hibernate.connection.driver_class&quot; &gt;com.mysql.jdbc.Driver&lt;/prop&gt;
		&lt;prop key=&quot;hibernate.connection.url&quot; &gt;jdbc:mysql:///crm&lt;/prop&gt;
		&lt;prop key=&quot;hibernate.connection.username&quot; &gt;root&lt;/prop&gt;
		&lt;prop key=&quot;hibernate.connection.password&quot; &gt;1234&lt;/prop&gt; --&gt;
		&lt;prop key=&quot;hibernate.dialect&quot; &gt;org.hibernate.dialect.MySQL5Dialect&lt;/prop&gt;

		&lt;prop key=&quot;hibernate.show_sql&quot; &gt;true&lt;/prop&gt;
		&lt;prop key=&quot;hibernate.format_sql&quot; &gt;true&lt;/prop&gt;
		&lt;prop key=&quot;hibernate.hbm2ddl.auto&quot; &gt;update&lt;/prop&gt;
	&lt;/props&gt;
	&lt;!-- ①引入orm元数据,指定orm元数据所在的包路径,spring会自动读取包中的所有配置 --&gt;
	&lt;/property&gt;
		&lt;property name=&quot;mappingDirectoryLocations&quot; value=&quot;classpath:cn/itcast/domain&quot; &gt;
	&lt;/property&gt;
	&lt;!--②引入orm元数据,指定orm元数据所在的包路径,spring会自动读取包中的所有配置--&gt;
	&lt;!--&lt;property name=&quot;mappingLocations&quot;&gt;
		&lt;list&gt;
			&lt;value&gt;classpath:com/itheima/bos/domain/*.xml&lt;/value&gt;
		&lt;/list&gt;
	&lt;/property&gt;--&gt;
&lt;/bean&gt;

&lt;!-- 为dao注入sessionFactory --&gt;
&lt;bean name=&quot;userDao&quot; class=&quot;cn.itcast.dao.impl.UserDaoImpl&quot; &gt;
	&lt;property name=&quot;sessionFactory&quot; ref=&quot;sessionFactory&quot; &gt;&lt;/property&gt;
&lt;/bean&gt;

hibernate操作数据库

dao实现类继承HibernateDaoSupport操作HIbernateTemplate
增删改
this.getHibernateTemplate().save(entity);
this.getHibernateTemplate().delete(entity);
this.getHibernateTemplate().update(entity);
this.getHibernateTemplate().get(entityClass, id);

spring中hibernate的aop事务

配置事务管理器(xml和注解都要配置)
&lt;bean name=&quot;transactionManager&quot; class=&quot;org.springframework.orm.hibernate5.HibernateTransactionManager&quot; &gt;
	&lt;property name=&quot;sessionFactory&quot; ref=&quot;sessionFactory&quot; &gt;&lt;/property&gt;
&lt;/bean&gt;

1、xml配置aop事务
配置通知
&lt;tx:advice id=&quot;txAdvice&quot; transaction-manager=&quot;transactionManager&quot; &gt;
	&lt;tx:attributes&gt;
		&lt;tx:method name=&quot;save*&quot; isolation=&quot;REPEATABLE_READ&quot; propagation=&quot;REQUIRED&quot; read-only=&quot;false&quot; /&gt;
	&lt;/tx:attributes&gt;
&lt;/tx:advice&gt;


配置将通知织入目标对象，配置切点，配置切面 
&lt;aop:config&gt;
	&lt;aop:pointcut expression=&quot;execution(* com.serviceimpl.*ServiceImpl.*(..))&quot; id=&quot;txPc&quot;/&gt;
	&lt;aop:advisor advice-ref=&quot;txAdvice&quot; pointcut-ref=&quot;txPc&quot; /&gt;
&lt;/aop:config&gt; 

2、注解配置aop事务
开启注解事务&lt;tx:annotation-driven transaction-manager=&quot;transactionManager&quot; /&gt;	


Service类、方法中使用注解
@Transactional(isolation=Isolation.REPEATABLE_READ,
propagation=Propagation.REQUIRED,readOnly=false)					

为了避免使用懒加载时出现no-session问题.需要扩大session的作用范围
注意: 任何filter一定要在struts的filter之前调用，在struts2过滤器前面
配置web.xml
&lt;filter&gt;
	&lt;filter-name&gt;openSessionInView&lt;/filter-name&gt;
	&lt;filter-class&gt;org.springframework.orm.hibernate5.support.OpenSessionInViewFilter&lt;/filter-class&gt;
&lt;/filter&gt;
&lt;filter-mapping&gt;
	&lt;filter-name&gt;openSessionInView&lt;/filter-name&gt;
	&lt;url-pattern&gt;/*&lt;/url-pattern&gt;
&lt;/filter-mapping&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_15-spring的java配置多数据源" tabindex="-1"><a class="header-anchor" href="#_15-spring的java配置多数据源"><span>15. spring的java配置多数据源</span></a></h1><h1 id="_16-spring4-x的java配置方式-可以完全替代xml配置" tabindex="-1"><a class="header-anchor" href="#_16-spring4-x的java配置方式-可以完全替代xml配置"><span>16. Spring4.x的Java配置方式（可以完全替代xml配置）</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	编写SpringConfig 用于实例化Spring容器，整个文件相当于applicationContext.xml
	@Configuration //通过该注解来表明该类是一个Spring的配置，相当于一个xml文件
		@ComponentScan(basePackages = &quot;cn.itcast.springboot.javaconfig&quot;) //配置扫描包，扫描组件
		//@PropertySource可以指定读取的配置文件，通过@Value注解获取值
		@PropertySource(value= {&quot;classpath:jdbc.properties&quot;,&quot;xxxx&quot;},ignoreResourceNotFound=true)
		public class SpringConfig {
		@Value(&quot;\${jdbc.url}&quot;)
		private String jdbcUrl;	
		@Bean // 通过该注解来表明是一个Bean对象，相当于xml中的&lt;bean&gt;
		public UserDAO getUserDAO(){
			return new UserDAO(); // 直接new对象做演示
		}
	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_17-spring4-x配置数据库连接池" tabindex="-1"><a class="header-anchor" href="#_17-spring4-x配置数据库连接池"><span>17. spring4.x配置数据库连接池</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	导入依赖：
		&lt;!-- 连接池 --&gt;
		&lt;dependency&gt;
		&lt;groupId&gt;com.jolbox&lt;/groupId&gt;
		&lt;artifactId&gt;bonecp-spring&lt;/artifactId&gt;
		&lt;version&gt;0.8.0.RELEASE&lt;/version&gt;
		&lt;/dependency&gt;

	xml配置改造成java配置方式：
	@Value(&quot;\${jdbc.url}&quot;)
		private String jdbcUrl;

		@Value(&quot;\${jdbc.driverClassName}&quot;)
		private String jdbcDriverClassName;

		@Value(&quot;\${jdbc.username}&quot;)
		private String jdbcUsername;

		@Value(&quot;\${jdbc.password}&quot;)
		private String jdbcPassword;

		@Bean(destroyMethod = &quot;close&quot;)
		public DataSource dataSource() {
		BoneCPDataSource boneCPDataSource = new BoneCPDataSource();
		boneCPDataSource.setDriverClass(jdbcDriverClassName);
		boneCPDataSource.setJdbcUrl(jdbcUrl);
		boneCPDataSource.setUsername(jdbcUsername);
		boneCPDataSource.setPassword(jdbcUsername);
		// 检查数据库连接池中空闲连接的间隔时间，单位是分，默认值：240，如果要取消则设置为0
		boneCPDataSource.setIdleConnectionTestPeriodInMinutes(60);
		// 连接池中未使用的链接最大存活时间，单位是分，默认值：60，如果要永远存活设置为0
		boneCPDataSource.setIdleMaxAgeInMinutes(30);
		// 每个分区最大的连接数
		boneCPDataSource.setMaxConnectionsPerPartition(100);
		// 每个分区最小的连接数    
		boneCPDataSource.setMinConnectionsPerPartition(5);
		return boneCPDataSource;
		}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="spring不同类型的事件" tabindex="-1"><a class="header-anchor" href="#spring不同类型的事件"><span>spring不同类型的事件？</span></a></h1><ul><li>Spring 的 ApplicationContext 提供了支持事件和代码中监听器的功能,Spring 提供了以下五种标准的事件：</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//监听系统事件
上下文更新事件（ContextRefreshedEvent）：该事件会在ApplicationContext 被初始化或者更新时发布。也可以在调用ConfigurableApplicationContext 接口中的 #refresh() 方法时被触发。
上下文开始事件（ContextStartedEvent）：当容器调用ConfigurableApplicationContext 的 #start() 方法开始/重新开始容器时触发该事件。
上下文停止事件（ContextStoppedEvent）：当容器调用 ConfigurableApplicationContext 的 #stop() 方法停止容器时触发该事件。
上下文关闭事件（ContextClosedEvent）：当ApplicationContext 被关闭时触发该事件。容器被关闭时，其管理的所有单例 Bean 都被销毁。
请求处理事件（RequestHandledEvent）：在 We b应用中，当一个HTTP 请求（request）结束触发该事件。
public class AllApplicationEventListener implements ApplicationListener&lt;ApplicationEvent&gt; {  
    @Override  
    public void onApplicationEvent(ApplicationEvent applicationEvent) {}
}
//自定义事件
public class CustomApplicationEvent extends ApplicationEvent{  
    public CustomApplicationEvent(Object source, final String msg) {  
        super(source);
    }  
}
//监听自定义事件
public class CustomEventListener implements ApplicationListener&lt;CustomApplicationEvent&gt; {
    @Override  
    public void onApplicationEvent(CustomApplicationEvent applicationEvent) {}
}
//发布自定义事件
// 创建 CustomApplicationEvent 事件
CustomApplicationEvent customEvent = new CustomApplicationEvent(applicationContext, &quot;Test message&quot;);
// 发布事件
applicationContext.publishEvent(customEvent);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@ConditionalOnMissingBean条件注解最好在@AutoConfiguration里面的@Bean上面使用，同时将该配置类注册为自动配置类，才能保证100%生效，否则会被另外的配置类覆盖</p>`,40),a=[l];function r(d,u){return n(),i("div",null,a)}const o=e(s,[["render",r],["__file","spring.html.vue"]]),m=JSON.parse('{"path":"/backend/j2ee/spring.html","title":"spring","lang":"zh-CN","frontmatter":{"title":"spring","date":"2023-01-01T00:00:00.000Z","tags":"spring","categories":"后端","description":"spring 1. spring介绍 4. spring框架使用 5. spring与junit整合测试（常用） 6. applicationContext.xml配置详解 7. spring创建对象的方式 8. SpringAOP 9. spring整合JDBC 10. spring事务 11. spring web项目配置 12. spring整合...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/j2ee/spring.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"spring"}],["meta",{"property":"og:description","content":"spring 1. spring介绍 4. spring框架使用 5. spring与junit整合测试（常用） 6. applicationContext.xml配置详解 7. spring创建对象的方式 8. SpringAOP 9. spring整合JDBC 10. spring事务 11. spring web项目配置 12. spring整合..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/8a89f9ce1d4d779c62ba4.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"spring\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/8a89f9ce1d4d779c62ba4.png\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":14.86,"words":4457},"filePathRelative":"backend/j2ee/spring.md","localizedDate":"2023年1月1日","excerpt":"<p>spring</p>\\n<!--more-->\\n<!-- TOC -->\\n<ul>\\n<li><a href=\\"#1-spring%E4%BB%8B%E7%BB%8D\\">1. spring介绍</a></li>\\n<li><a href=\\"#4-spring%E6%A1%86%E6%9E%B6%E4%BD%BF%E7%94%A8\\">4. spring框架使用</a></li>\\n<li><a href=\\"#5-spring%E4%B8%8Ejunit%E6%95%B4%E5%90%88%E6%B5%8B%E8%AF%95%E5%B8%B8%E7%94%A8\\">5. spring与junit整合测试（常用）</a></li>\\n<li><a href=\\"#6-applicationcontextxml%E9%85%8D%E7%BD%AE%E8%AF%A6%E8%A7%A3\\">6. applicationContext.xml配置详解</a></li>\\n<li><a href=\\"#7-spring%E5%88%9B%E5%BB%BA%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E5%BC%8F\\">7. spring创建对象的方式</a></li>\\n<li><a href=\\"#8-springaop\\">8. SpringAOP</a></li>\\n<li><a href=\\"#9-spring%E6%95%B4%E5%90%88jdbc\\">9. spring整合JDBC</a></li>\\n<li><a href=\\"#10-spring%E4%BA%8B%E5%8A%A1\\">10. spring事务</a></li>\\n<li><a href=\\"#11-spring-web%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AE\\">11. spring web项目配置</a></li>\\n<li><a href=\\"#12-spring%E6%95%B4%E5%90%88struts2\\">12. spring整合struts2</a></li>\\n<li><a href=\\"#13-spring%E6%95%B4%E5%90%88c3p0%E8%BF%9E%E6%8E%A5%E6%B1%A0\\">13. spring整合c3p0连接池</a></li>\\n<li><a href=\\"#14-spring%E6%95%B4%E5%90%88hibernate\\">14. spring整合hibernate</a></li>\\n<li><a href=\\"#15-spring%E7%9A%84java%E9%85%8D%E7%BD%AE%E5%A4%9A%E6%95%B0%E6%8D%AE%E6%BA%90\\">15. spring的java配置多数据源</a></li>\\n<li><a href=\\"#16-spring4x%E7%9A%84java%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F%E5%8F%AF%E4%BB%A5%E5%AE%8C%E5%85%A8%E6%9B%BF%E4%BB%A3xml%E9%85%8D%E7%BD%AE\\">16. Spring4.x的Java配置方式（可以完全替代xml配置）</a></li>\\n<li><a href=\\"#17-spring4x%E9%85%8D%E7%BD%AE%E6%95%B0%E6%8D%AE%E5%BA%93%E8%BF%9E%E6%8E%A5%E6%B1%A0\\">17. spring4.x配置数据库连接池</a></li>\\n<li><a href=\\"#spring%E4%B8%8D%E5%90%8C%E7%B1%BB%E5%9E%8B%E7%9A%84%E4%BA%8B%E4%BB%B6\\">spring不同类型的事件？</a></li>\\n</ul>","autoDesc":true}');export{o as comp,m as data};
