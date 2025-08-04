import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,e as t}from"./app-7KT7HDzT.js";const s={},l=t(`<p>shiro权限控制</p><ul><li><a href="#1-%E6%9D%83%E9%99%90%E6%A6%82%E8%BF%B0">1. 权限概述</a></li><li><a href="#2-shiro%E7%9A%84%E4%BB%8B%E7%BB%8D">2. shiro的介绍</a></li><li><a href="#3-shiro%E7%9A%84%E4%BD%BF%E7%94%A8">3. shiro的使用</a></li><li><a href="#36-shiro%E7%BB%84%E4%BB%B6%E8%AE%A4%E8%AF%81%E6%9D%83%E9%99%90%E6%80%8E%E4%B9%88%E5%81%9A">36. shiro组件，认证，权限怎么做？</a></li></ul><h1 id="_1-权限概述" tabindex="-1"><a class="header-anchor" href="#_1-权限概述"><span>1. 权限概述</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>认证：系统提供的用于识别用户身份的功能，通常登录功能就是认证功能-----让系统知道你是谁？？
授权：系统授予用户可以访问哪些功能的许可（证书）----让系统知道你能做什么？？

常见的权限控制方式
URL拦截权限控制：底层基于拦截器或者过滤器实现
方法注解权限控制：底层基于代理技术实现，为Action创建代理对象，由代理对象进行权限校验

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-shiro的介绍" tabindex="-1"><a class="header-anchor" href="#_2-shiro的介绍"><span>2. shiro的介绍</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>官网：shiro.apache.org
shiro框架的核心功能：认证、授权、会话管理、加密


shiro框架认证流程
Application Code：应用程序代码，由开发人员负责开发的
Subject：框架提供的接口，代表当前用户对象
SecurityManager：框架提供的接口，代表安全管理器对象
Realm：可以开发人员编写，框架也提供一些，类似于ＤＡＯ，用于访问权限数据

框架提供的过滤器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/a225ee4bba93bf94ffef9.png" alt="1.png" tabindex="0"><figcaption>1.png</figcaption></figure><h1 id="_3-shiro的使用" tabindex="-1"><a class="header-anchor" href="#_3-shiro的使用"><span>3. shiro的使用</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>创建权限数据模型
权限表、角色表、用户表、角色权限关系表、用户角色关系表
角色就是权限的集合，引入角色表，是为了方便授权
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>使用shiro的URL拦截权限控制（基于过滤器实现）
maven项目引入shiro依赖
&lt;!-- 引入shiro框架的依赖 --&gt;
&lt;dependency&gt;
	&lt;groupId&gt;org.apache.shiro&lt;/groupId&gt;
	&lt;artifactId&gt;shiro-all&lt;/artifactId&gt;
	&lt;version&gt;1.2.2&lt;/version&gt;
&lt;/dependency&gt;

在web.xml配置shiro框架进行权限控制在struts2前面
&lt;!-- 配置spring框架提供的用于整合shiro框架的过滤器 --&gt;
&lt;filter&gt;
	&lt;filter-name&gt;shiroFilter&lt;/filter-name&gt;
	&lt;filter-class&gt;org.springframework.web.filter.DelegatingFilterProxy&lt;/filter-class&gt;
&lt;/filter&gt;
&lt;filter-mapping&gt;
	&lt;filter-name&gt;shiroFilter&lt;/filter-name&gt;
	&lt;url-pattern&gt;/*&lt;/url-pattern&gt;
&lt;/filter-mapping&gt;

在spring配置文件中配置bean，id为shiroFilter
&lt;!-- 配置shiro框架的过滤器工厂对象 --&gt;
&lt;bean id=&quot;shiroFilter&quot; class=&quot;org.apache.shiro.spring.web.ShiroFilterFactoryBean&quot;&gt;
	&lt;!-- 注入安全管理器对象 --&gt;
	&lt;property name=&quot;securityManager&quot; ref=&quot;securityManager&quot;/&gt;
	&lt;!-- 注入相关页面访问URL --&gt;
	&lt;property name=&quot;loginUrl&quot; value=&quot;/login.jsp&quot;/&gt;
	&lt;property name=&quot;successUrl&quot; value=&quot;/index.jsp&quot;/&gt;
	&lt;property name=&quot;unauthorizedUrl&quot; value=&quot;/unauthorized.jsp&quot;/&gt;
	&lt;!--注入URL拦截规则 --&gt;
	&lt;property name=&quot;filterChainDefinitions&quot;&gt;
		&lt;value&gt;
			/css/** = anon
			/js/** = anon
			/images/** = anon
			/validatecode.jsp* = anon
			/login.jsp = anon
			/userAction_login.action = anon
			/page_base_staff.action = perms[&quot;staff-list&quot;]
			/* = authc
		&lt;/value&gt;
	&lt;/property&gt;
&lt;/bean&gt;

配置安全管理器
&lt;!-- 注册安全管理器对象 --&gt;
&lt;bean id=&quot;securityManager&quot; class=&quot;org.apache.shiro.web.mgt.DefaultWebSecurityManager&quot;&gt;
	&lt;property name=&quot;realm&quot; ref=&quot;bosRealm&quot;/&gt;
&lt;/bean&gt;

注册realm并注入给安全管理器
&lt;bean id=&quot;bosRealm&quot; class=&quot;com.itheima.bos.realm.BOSRealm&quot;&gt;&lt;/bean&gt;

修改UserAction的login方法，使用shiro提供的方法进行认证
public String login(){
	//从Session中获取生成的验证码
	String validatecode = (String) 
	ServletActionContext.getRequest().getSession().getAttribute(&quot;key&quot;);
	//校验验证码是否输入正确
	if(StringUtils.isNotBlank(checkcode) &amp;&amp; checkcode.equals(validatecode)){
		//使用shiro框架提供的方式进行认证操作
		Subject subject = SecurityUtils.getSubject();//获得当前用户对象,状态为“未认证”
		//创建用户名密码令牌对象
		AuthenticationToken token = new UsernamePasswordToken(model.getUsername(),MD5Utils.md5(model.getPassword()));
		try{
			subject.login(token);
		}catch(Exception e){
			e.printStackTrace();
			return LOGIN;
		}
		User user = (User) subject.getPrincipal();
		ServletActionContext.getRequest().getSession().setAttribute(&quot;loginUser&quot;, user);
		return HOME;
	}else{
		//输入的验证码错误,设置提示信息，跳转到登录页面
		this.addActionError(&quot;输入的验证码错误！&quot;);
		return LOGIN;
	}
}

自定义realm，实现AuthorizingRealm接口，并注入给安全管理器
public class BOSRealm extends AuthorizingRealm{
	@Autowired
	private IUserDao userDao;
	//认证方法
	protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
		System.out.println(&quot;realm中的认证方法执行了。。。。&quot;);
		UsernamePasswordToken mytoken = (UsernamePasswordToken)token;
		String username = mytoken.getUsername();
		//根据用户名查询数据库中的密码
		User user = userDao.findUserByUserName(username);
		if(user == null){
			//用户名不存在
			return null;
		}
		//如果能查询到，再由框架比对数据库中查询到的密码和页面提交的密码是否一致
		AuthenticationInfo info = new SimpleAuthenticationInfo(user, user.getPassword(), this.getName());
		return info;
	}

	//授权方法
	protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
		SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();
		//为用户授权
		info.addStringPermission(&quot;staff-list&quot;);

		//TODO 后期需要修改为根据当前登录用户查询数据库，获取实际对应的权限
		User user1 = (User) SecurityUtils.getSubject().getPrincipal();
		User user2 = (User) principals.getPrimaryPrincipal();
		System.out.println(user1 == user2);
		return info;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>使用shiro的方法注解方式权限控制（基于代理技术实现）
在spring配置文件中开启shiro注解支持
&lt;!-- 开启shiro框架注解支持 --&gt;
&lt;bean id=&quot;defaultAdvisorAutoProxyCreator&quot; 
	class=&quot;org.springframework.aop.framework.autoproxy.DefaultAdvisorAutoProxyCreator&quot;&gt;
		&lt;!-- 必须使用cglib方式为Action对象创建代理对象 --&gt;
	&lt;property name=&quot;proxyTargetClass&quot; value=&quot;true&quot;/&gt;
&lt;/bean&gt;

&lt;!-- 配置shiro框架提供的切面类，用于创建代理对象 --&gt;
&lt;bean class=&quot;org.apache.shiro.spring.security.interceptor.AuthorizationAttributeSourceAdvisor&quot;/&gt;

在Action的方法上使用shiro注解
@RequestPermission(&quot;staff-delete&quot;)
//执行这个方法必须有staff-delete权限
public String deleteBatch(){
	staffService.deleteBatch(ids);
	return LIST;
}

在struts.xml中配置全局异常捕获，
当shiro框架抛出权限不足异常时，跳转到权限不足提示页面
&lt;!-- 全局结果集定义 --&gt;
&lt;global-results&gt;
	&lt;result name=&quot;login&quot;&gt;/login.jsp&lt;/result&gt;
	&lt;result name=&quot;unauthorized&quot;&gt;/unauthorized.jsp&lt;/result&gt;
&lt;/global-results&gt;
&lt;global-exception-mapping&gt;
&lt;exception-mapping result=&quot;unauthorized&quot;
	exception=&quot;org.apache.shiro.authz.unauthorizedException&quot;&gt;&lt;/exception-mapping&gt;
&lt;/global-exception-mapping&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>使用shiro提供的页面标签方式权限控制（标签技术实现）
在jsp页面中引入shiro的标签库
&lt;%@ taglib prefix=&quot;shiro&quot; uri=&quot;http://shiro.apache.org/tags&quot; %&gt;

使用shiro的标签控制页面元素展示
&lt;shiro:hasPermission name=&quot;staff-delete&quot;&gt;
{
	id : &#39;button-delete&#39;,
	text : &#39;删除&#39;,
	iconCls : &#39;icon-cancel&#39;,
	handler : doDelete
},
&lt;/shiro:hasPermission&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>代码级别权限控制（基于代理技术实现）
public String edit(){
	//Subject subject = SecurityUtils.getSubject();
	//subject.checkPermission(&quot;staff-edit&quot;);
	//显查询数据库，根据id查询原始数据
	Staff staff = staffService.findById(model.getId());
	//使用页面提交的数据进行覆盖
	staff.setName(model.getName());
	staff.setTelephone(model.getTelephone());
	staff.setHaspda(model.getHaspda());
	staff.setStandard(model.getStandard());
	staff.setStation(model.getStation());
	staffService.update(staff);
	return LIST;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_36-shiro组件-认证-权限怎么做" tabindex="-1"><a class="header-anchor" href="#_36-shiro组件-认证-权限怎么做"><span>36. shiro组件，认证，权限怎么做？</span></a></h1><ul><li>shiro组件 <ul><li>Subject：主体，代表了当前“用户”,表示要和应用交互的东西.</li><li>SecurityManager: 安全管理器. Shiro中所有的操作都是通过安全管理器操作的.内部会把Subject发出的请求转发到对应的内部组件中完成具体功能</li><li>Realm: 域，shiro从Realm获取安全数据(如用户、角色、权限)，就是说SecurityManager要验证用户身份，那么它需要从Realm获取相应的用户进行比较以确定用户身份是否合法；也需要从Realm得到用户相应的角色/权限进行验证用户是否能进行操作(通常我们使用自定义的Realm)</li></ul></li><li>Shiro认证的流程.(Subject,SecurityManager,Authenticator,Realm做了哪些事情) <ul><li>1.将需要登录的账号和密码封装成UsernamePasswordToken</li><li>2.然后从SecurityUtils中获取Subject对象,然后调用login方法,把token作为参数传入.</li><li>3.调用subject.login()之后,会交给SecurityManager进行请求的处理.</li><li>4.安全管理器SecurityManager会把请求转发给认证器Authenticator</li><li>5.认证器Authenticator会调用Realm中的方法并把token作为参数传入</li><li>6.我们需要在Realm中根据用户名从数据库中查询用户信息并封装成认证信息对象SimpleAuthenticationInfo</li><li>7.如果返回的SimpleAuthenticationInfo对象为空会抛出异常</li><li>8.认证器Authenticator会拿到传入token中的password和返回认证信息对象SimpleAuthenticationInfo中的password进行比对，如果不一致则抛出异常.</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    //filter
    
    //1、获取SecurityManager工厂，此处使用Ini配置文件初始化SecurityManager  
    Factory&lt;org.apache.shiro.mgt.SecurityManager&gt; factory = new IniSecurityManagerFactory(&quot;classpath:shiro.ini&quot;);
    //2、得到SecurityManager实例 并绑定给SecurityUtils
    org.apache.shiro.mgt.SecurityManager securityManager = factory.getInstance();
    SecurityUtils.setSecurityManager(securityManager);
    //3、得到Subject及创建用户名/密码身份验证Token（即用户身份/凭证）
    Subject subject = SecurityUtils.getSubject();
    UsernamePasswordToken token = new UsernamePasswordToken(&quot;zhang&quot;, &quot;123&quot;);
    try {
        //4、登录，即身份验证
        subject.login(token);
    } catch (AuthenticationException e) {
        //5、身份验证失败
    }
    Assert.assertEquals(true, subject.isAuthenticated()); //断言用户已经登录
    //6、退出
    subject.logout();

    自定义realm
    public class CustomAuthorizationRealm extends AuthorizingRealm{
        //认证
        @Override
        protected AuthenticationInfo doGetAuthenticationInfo(
                AuthenticationToken token) throws AuthenticationException {

            //从token中 获取用户身份信息
            String username = (String) token.getPrincipal();
            //拿username从数据库中查询
            //....
            //如果查询不到则返回null

            //获取从数据库查询出来的用户密码
            UsrinfMapper usrinfMapper = (UsrinfMapper)SpringContainer.getBean(&quot;usrinfMapper&quot;);
            Usrinf USRINF = usrinfMapper.loadByLGNNAM(username);
            if(USRINF == null){
                return null;
            }
            String password =  USRINF.getLGNPWD();//这里使用静态数据模拟。。
            //返回认证信息由父类AuthenticatingRealm进行认证
            SimpleAuthenticationInfo sinfo = new SimpleAuthenticationInfo(username, password, getName());
            return sinfo;

            &lt;!-- String username = (String)principals.getPrimaryPrincipal();
            SimpleAuthorizationInfo authorizationInfo = new SimpleAuthorizationInfo();
            authorizationInfo.setRoles(userService.findRoles(username));
            authorizationInfo.setStringPermissions(userService.findPermissions(username));
            return authorizationInfo; --&gt;
        }

        //授权
        @Override
        protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
            SimpleAuthorizationInfo authorizationInfo = new SimpleAuthorizationInfo();
            authorizationInfo.addRole(&quot;role1&quot;);
            authorizationInfo.addRole(&quot;role2&quot;);
            authorizationInfo.addObjectPermission(new BitPermission(&quot;+user1+10&quot;));
            authorizationInfo.addObjectPermission(new WildcardPermission(&quot;user1:*&quot;));
            authorizationInfo.addStringPermission(&quot;+user2+10&quot;);
            authorizationInfo.addStringPermission(&quot;user2:*&quot;);
            return authorizationInfo;
        }
    }    

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>4.Shiro鉴权的流程.(Subject,SecurityManager,Realm做了哪些事情) <ul><li>1.会先判断用户是否已经登录,如果没登录返回false,登录继续后续流程</li><li>2.然后会通过安全管理器securityManager判断当前登录用户是否有该权限.</li><li>3.安全管理器securityManager会调用Realm中的方法获取当前用户拥有的角色/权限集合</li><li>4.然后判断用户的角色/权限集合中是否包含当前判断的权限，如果包含返回true,否则返回false.</li></ul></li><li>@RequiresRoles(&quot;admin&quot;)注解</li></ul>`,17),r=[l];function a(d,u){return e(),n("div",null,r)}const c=i(s,[["render",a],["__file","shiro.html.vue"]]),m=JSON.parse('{"path":"/backend/securityframework/shiro.html","title":"shiro","lang":"zh-CN","frontmatter":{"title":"shiro","date":"2023-01-01T00:00:00.000Z","tags":"shiro","categories":"后端","description":"shiro权限控制 1. 权限概述 2. shiro的介绍 3. shiro的使用 36. shiro组件，认证，权限怎么做？ 1. 权限概述 2. shiro的介绍 1.png1.png 3. shiro的使用 36. shiro组件，认证，权限怎么做？ shiro组件 Subject：主体，代表了当前“用户”,表示要和应用交互的东西. Securi...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/securityframework/shiro.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"shiro"}],["meta",{"property":"og:description","content":"shiro权限控制 1. 权限概述 2. shiro的介绍 3. shiro的使用 36. shiro组件，认证，权限怎么做？ 1. 权限概述 2. shiro的介绍 1.png1.png 3. shiro的使用 36. shiro组件，认证，权限怎么做？ shiro组件 Subject：主体，代表了当前“用户”,表示要和应用交互的东西. Securi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/a225ee4bba93bf94ffef9.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"shiro\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/a225ee4bba93bf94ffef9.png\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":7.35,"words":2204},"filePathRelative":"backend/securityframework/shiro.md","localizedDate":"2023年1月1日","excerpt":"<p>shiro权限控制</p>\\n<!--more-->\\n<!-- TOC -->\\n<ul>\\n<li><a href=\\"#1-%E6%9D%83%E9%99%90%E6%A6%82%E8%BF%B0\\">1. 权限概述</a></li>\\n<li><a href=\\"#2-shiro%E7%9A%84%E4%BB%8B%E7%BB%8D\\">2. shiro的介绍</a></li>\\n<li><a href=\\"#3-shiro%E7%9A%84%E4%BD%BF%E7%94%A8\\">3. shiro的使用</a></li>\\n<li><a href=\\"#36-shiro%E7%BB%84%E4%BB%B6%E8%AE%A4%E8%AF%81%E6%9D%83%E9%99%90%E6%80%8E%E4%B9%88%E5%81%9A\\">36. shiro组件，认证，权限怎么做？</a></li>\\n</ul>","autoDesc":true}');export{c as comp,m as data};
