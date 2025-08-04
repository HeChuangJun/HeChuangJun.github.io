import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as d,o as s,c as l,a as e,b as i,d as t,e as r}from"./app-7KT7HDzT.js";const u={},c=r('<p>SpringSecurity</p><ul><li><a href="#1-spring-security%E6%A6%82%E8%A7%88">1. Spring Security概览</a></li><li><a href="#2-spring-security%E7%8E%AF%E5%A2%83">2. Spring Security环境</a></li><li><a href="#3-spring-security%E4%B8%AD%E8%B5%84%E6%BA%90%E8%AE%A4%E8%AF%81%E4%B8%8E%E6%8E%88%E6%9D%83">3. Spring Security中资源、认证与授权</a></li><li><a href="#4-spring-security%E5%8D%95%E4%BD%93%E5%BA%94%E6%A8%A1%E5%BC%8F">4. Spring Security单体应⽤模式</a></li><li><a href="#5-spring-security%E5%BE%AE%E6%9C%8D%E5%8A%A1%E6%9E%B6%E6%9E%84">5. Spring Security微服务架构</a></li><li><a href="#6-spring-security%E8%AE%A4%E8%AF%81%E6%A8%A1%E5%BC%8F">6. Spring Security认证模式</a><ul><li><a href="#61-http%E5%9F%BA%E7%A1%80%E8%AE%A4%E8%AF%81">6.1. HTTP基础认证</a></li><li><a href="#62-http%E8%A1%A8%E5%8D%95%E8%AE%A4%E8%AF%81%E9%BB%98%E8%AE%A4">6.2. HTTP表单认证(默认)</a></li><li><a href="#63-%E4%B8%A4%E7%A7%8D%E6%A8%A1%E5%BC%8F%E7%9A%84%E8%BE%83">6.3. 两种模式的⽐较</a></li></ul></li><li><a href="#7-%E5%8A%A0%E5%AF%86%E6%8E%A5%E5%8F%A3passwordencoder">7. 加密接口PasswordEncoder</a></li><li><a href="#8-spring-security%E4%B8%AD%E7%9A%84%E6%88%B7%E4%B8%8E%E8%AE%A4%E8%AF%81%E5%AF%B9%E8%B1%A1">8. Spring Security中的⽤户与认证对象</a><ul><li><a href="#81-%E6%88%B7%E5%AF%B9%E8%B1%A1">8.1. ⽤户对象</a></li><li><a href="#82-%E8%AE%A4%E8%AF%81%E5%AF%B9%E8%B1%A1">8.2. 认证对象</a></li></ul></li><li><a href="#9-spring-security%E7%9A%84session%E4%BC%9A%E8%AF%9D%E6%8E%A7%E5%88%B6">9. Spring Security的Session会话控制</a></li><li><a href="#10-springsecurity%E7%9A%84%E8%BF%87%E6%BB%A4%E9%93%BE%E8%AE%BE%E8%AE%A1">10. SpringSecurity的过滤链设计</a></li><li><a href="#11-springsecurity%E7%9A%84securitycontextholder">11. SpringSecurity的SecurityContextHolder</a></li><li><a href="#12-rememberme%E6%9C%BA%E5%88%B6">12. RememberMe机制</a></li><li><a href="#13-csrf%E6%94%BB%E5%87%BB">13. CSRF攻击</a></li><li><a href="#14-spring-security%E5%85%A5%E9%97%A8">14. Spring Security入门</a></li><li><a href="#15-springsecurity%E5%9F%BA%E7%A1%80%E8%AE%A4%E8%AF%81">15. SpringSecurity基础认证</a></li><li><a href="#16-springsecurity%E5%AE%9E%E7%8E%B0%E5%9F%BA%E4%BA%8Emysql%E5%AE%9A%E4%B9%89%E5%9F%BA%E7%A1%80%E8%AE%A4%E8%AF%81">16. SpringSecurity实现基于MySQL⾃定义基础认证</a></li><li><a href="#17-springsecurity%E5%88%A9passwordencoder%E5%AF%B9%E5%AF%86%E7%A0%81%E5%8A%A0%E5%AF%86%E4%BF%9D%E6%8A%A4">17. SpringSecurity利⽤PasswordEncoder对密码加密保护</a></li><li><a href="#18-%E5%9F%BA%E4%BA%8E%E8%A1%A8%E5%8D%95%E6%A8%A1%E5%BC%8F%E5%AE%9E%E7%8E%B0%E5%AE%9A%E4%B9%89%E8%AE%A4%E8%AF%81">18. 基于表单模式实现⾃定义认证</a></li><li><a href="#19-springsecurity%E5%AE%9E%E7%8E%B0%E8%A1%A8%E5%8D%95%E8%AE%A4%E8%AF%81%E7%99%BB%E5%BD%95%E6%8E%A5%E8%BF%94%E5%9B%9Ejson">19. SpringSecurity实现表单认证登录接⼝返回JSON</a></li><li><a href="#20-security-contextholder%E5%AE%9E%E7%8E%B0%E5%AD%90%E7%BA%BF%E7%A8%8B%E8%8E%B7%E5%BE%97%E7%94%A8%E6%88%B7%E4%BF%A1%E6%81%AF">20. Security ContextHolder实现子线程获得用户信息</a></li><li><a href="#21-securitycontextholder%E8%8E%B7%E5%8F%96%E5%BD%93%E5%89%8D%E7%99%BB%E5%BD%95%E5%AF%B9%E8%B1%A1">21. SecurityContextHolder获取当前登录对象</a></li><li><a href="#22-spring-security%E9%85%8D%E7%BD%AE%E5%AE%9A%E4%B9%89%E8%BF%87%E6%BB%A4%E5%99%A8">22. Spring Security配置⾃定义过滤器</a></li><li><a href="#23-spring-security%E6%9D%83%E9%99%90%E6%8E%A7%E5%88%B6">23. Spring Security权限控制</a><ul><li><a href="#231-%E6%8E%88%E6%9D%83">23.1. 授权</a></li><li><a href="#232-%E9%89%B4%E6%9D%83">23.2. 鉴权</a></li></ul></li><li><a href="#24-rbac%E5%9F%BA%E4%BA%8E%E6%9D%83%E9%99%90%E6%8E%A7%E5%88%B6">24. RBAC基于⻆⾊权限控制</a></li><li><a href="#25-spring-security-%E5%8C%B9%E9%85%8D%E5%99%A8">25. Spring Security 匹配器</a></li><li><a href="#26-spring-security%E5%AE%9E%E7%8E%B0remember-me">26. Spring Security实现Remember Me</a></li><li><a href="#27-spring-security%E9%A2%84%E9%98%B2csrf%E6%94%BB%E5%87%BB">27. Spring Security预防CSRF攻击</a></li><li><a href="#28-%E5%88%86%E5%B8%83%E5%BC%8F%E8%AE%A4%E8%AF%81oauth2%E5%8D%8F%E8%AE%AE%E4%BB%8B%E7%BB%8D">28. 分布式认证Oauth2协议介绍</a><ul><li><a href="#281-oauth2%E5%8D%8F%E8%AE%AE%E7%9A%84%E5%BA%94%E5%9C%BA%E6%99%AF">28.1. OAuth2协议的应⽤场景</a></li><li><a href="#282-oauth2%E5%8D%8F%E8%AE%AE%E7%9A%84">28.2. OAuth2协议的⻆⾊</a></li><li><a href="#283-oauth2%E5%8D%8F%E8%AE%AE%E7%9A%84%E4%BB%A4%E7%89%8Ctoken">28.3. OAuth2协议的令牌Token</a></li><li><a href="#284-oauth2%E5%8D%8F%E8%AE%AE%E4%BD%9C%E6%B5%81%E7%A8%8B">28.4. OAuth2协议⼯作流程</a></li><li><a href="#285-oauth2%E4%B8%ADaccess_token%E7%9A%84%E7%A7%98%E5%AF%86">28.5. OAuth2中ACCESS_TOKEN的秘密</a></li><li><a href="#286-%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3oauth2-scope%E5%B1%9E%E6%80%A7%E7%9A%84%E4%BD%9C">28.6. 如何理解OAuth2 Scope属性的作⽤</a></li></ul></li><li><a href="#29-oauth2%E5%8D%8F%E8%AE%AE%E5%9B%9B%E7%A7%8D%E6%8E%88%E6%9D%83%E6%A8%A1%E5%BC%8F">29. Oauth2协议四种授权模式</a><ul><li><a href="#291-%E6%8E%88%E6%9D%83%E7%A0%81%E6%A8%A1%E5%BC%8Fauthorization-code">29.1. 授权码模式（Authorization Code）</a></li><li><a href="#292-%E9%9A%90%E5%BC%8F%E6%8E%88%E6%9D%83%E6%A8%A1%E5%BC%8Fimplicit">29.2. 隐式授权模式（Implicit）</a></li><li><a href="#293-%E5%AF%86%E7%A0%81%E6%A8%A1%E5%BC%8Fresource-owner-password-credentials">29.3. 密码模式（Resource Owner Password Credentials）</a></li><li><a href="#294-%E5%AE%A2%E6%88%B7%E7%AB%AF%E6%A8%A1%E5%BC%8Fclient-credentials">29.4. 客户端模式（Client Credentials）</a></li></ul></li><li><a href="#30-spring-security-oauth2-%E5%88%86%E5%B8%83%E5%BC%8F%E8%AE%A4%E8%AF%81%E6%B5%81%E7%A8%8B">30. Spring Security Oauth2 分布式认证流程</a></li><li><a href="#31-%E6%9E%84%E5%BB%BAoauth2%E8%AE%A4%E8%AF%81%E6%8E%88%E6%9D%83%E4%B8%AD">31. 构建OAuth2认证授权中⼼</a><ul><li><a href="#311-spring-authorization-server-%E6%8E%88%E6%9D%83%E4%B8%AD%E5%BF%83%E6%9E%84%E5%BB%BAauth-server">31.1. Spring Authorization Server 授权中心构建(auth-server)</a></li><li><a href="#312-%E6%9E%84%E5%BB%BAoauth2%E8%B5%84%E6%BA%90%E6%9C%8D%E5%8A%A1%E5%99%A8res-server">31.2. 构建OAuth2资源服务器(res-server)</a></li><li><a href="#313-%E6%9E%84%E5%BB%BAoauth2%E5%AE%A2%E6%88%B7%E7%AB%AFclient">31.3. 构建OAuth2客户端client</a></li></ul></li><li><a href="#32-%E5%9F%BA%E4%BA%8Emysql%E7%AE%A1%E7%90%86%E6%8E%88%E6%9D%83%E4%B8%AD%E6%95%B0%E6%8D%AE">32. 基于MySQL管理授权中⼼数据</a></li><li><a href="#33-access_token%E9%99%84%E5%8A%A0roles%E6%95%B0%E6%8D%AE">33. ACCESS_TOKEN附加⻆⾊ROLES数据</a></li><li><a href="#34-oauth2%E4%B8%8Erbac%E5%8D%8F%E5%90%8C%E4%BD%9C%E4%B8%9A">34. OAuth2与RBAC协同作业</a></li><li><a href="#35-%E7%8A%B6%E6%80%81%E7%9A%84access_token%E4%BB%A4%E7%89%8C%E5%A6%82%E4%BD%95%E5%8A%A8%E7%BB%AD%E7%BA%A6">35. ⽆状态的ACCESS_TOKEN令牌如何⾃动续约</a></li><li><a href="#shiro%E4%B8%8Espring-security%E5%8C%BA%E5%88%AB">shiro与spring security区别？</a></li><li><a href="#37-%E6%97%A7%E7%89%88spring-security%E8%AE%A4%E8%AF%81%E5%92%8C%E9%89%B4%E6%9D%83">37. 旧版spring Security认证和鉴权</a></li><li><a href="#38-%E6%97%A7%E7%89%88spring-security-oauth2%E8%AE%A4%E8%AF%81">38. 旧版spring Security oauth2认证</a></li><li><a href="#39-springsecurity%E5%8E%9F%E7%90%86%E5%BE%85%E6%95%B4%E7%90%86">39. springsecurity原理（待整理）</a></li><li><a href="#40-spring-authorization-server%E5%BE%85%E6%95%B4%E7%90%86">40. Spring Authorization Server（待整理）</a></li></ul><h1 id="_1-spring-security概览" tabindex="-1"><a class="header-anchor" href="#_1-spring-security概览"><span>1. Spring Security概览</span></a></h1>',3),o={href:"https://spring.io/projects/spring-security",target:"_blank",rel:"noopener noreferrer"},v={href:"https://spring.io/projects/spring%EF%BF%BEsecurity#learn",target:"_blank",rel:"noopener noreferrer"},m=e("li",null,"Spring Security是⼀个提供身份验证、授权和针对常⻅攻击的保护的框架。主要功能包括⽤户信息管理、敏感信息加解密、⽤户认证、权限控制、跨站点请求伪造保护、跨域⽀持、全局安全⽅法、单点登录",-1),b=r('<h1 id="_2-spring-security环境" tabindex="-1"><a class="header-anchor" href="#_2-spring-security环境"><span>2. Spring Security环境</span></a></h1><ul><li>jdk8+</li><li>SpringBoot2.4+和Spring Security 5.7.0+ 取消了WebSecurityConfigurerAdapter</li></ul><h1 id="_3-spring-security中资源、认证与授权" tabindex="-1"><a class="header-anchor" href="#_3-spring-security中资源、认证与授权"><span>3. Spring Security中资源、认证与授权</span></a></h1><ul><li>资源（resource）:指需要访问的内容，安全性设计的核⼼⽬标就是对这些资源进⾏保护，确保对它们的访问是安全受控的。例如，在Web应⽤程序中，对外暴露的HTTP端点就可以被理解为资源。</li><li>认证（authentication）：对于每次访问请求，系统都能判断出访问者是否具有合法的身份标识。明确“你是谁”，</li><li>授权（authorization）。授权是对资源、权限、⻆⾊和⽤户的⼀种组合处理</li></ul><h1 id="_4-spring-security单体应用模式" tabindex="-1"><a class="header-anchor" href="#_4-spring-security单体应用模式"><span>4. Spring Security单体应⽤模式</span></a></h1><ul><li>⽤户先通过请求传递⽤户身份凭证并完成⽤户认证，然后根据该⽤户所具备的⽤户⻆⾊来获取访问权限，并最终完成对HTTP端点的访问授权。</li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/e03536d14c58fb42b04bc.jpg" alt="singleservice.png" tabindex="0"><figcaption>singleservice.png</figcaption></figure><h1 id="_5-spring-security微服务架构" tabindex="-1"><a class="header-anchor" href="#_5-spring-security微服务架构"><span>5. Spring Security微服务架构</span></a></h1><ul><li>涉及服务与服务之间的调⽤关系。服务提供者所充当的⻆⾊就是资源服务器，⽽服务消费者就是客户端。所以，各个服务本身既可以是客户端，也可以是资源服务器</li><li>需要把认证和授权的过程进⾏集中化管理，授权中⼼⾸先会获取客户端请求中的身份凭证信息，然后基于该身份凭证信息⽣成⼀个令牌（Token），该令牌包含访问权限范围和有效期。客户端获取令牌之后就可以基于该令牌发起对微服务的访问。这时资源服务器需要对该令牌进⾏认证，并根据令牌的权限范围和有效期从授权中⼼获取该请求所能访问的特定资源。在微服务系统中，对外的资源表现形式同样可以理解为⼀个个HTTP端点。</li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/013a129d53f38109a20dc.jpg" alt="microservice.png" tabindex="0"><figcaption>microservice.png</figcaption></figure><h1 id="_6-spring-security认证模式" tabindex="-1"><a class="header-anchor" href="#_6-spring-security认证模式"><span>6. Spring Security认证模式</span></a></h1><ul><li>在Spring Security中，与⽤户认证相关的核⼼概念包括⽤户对象和认证对象、⽤户信息存储和认证⽅式。</li><li>Spring Security认证模式包括HTTP基础认证和表单登录认证<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/2750c08889738551b893d.jpg" alt="authentication.png"></li></ul><h2 id="_6-1-http基础认证" tabindex="-1"><a class="header-anchor" href="#_6-1-http基础认证"><span>6.1. HTTP基础认证</span></a></h2><ul><li>通过HTTP的消息头携带⽤户名和密码进⾏登录验证</li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/cb80a6c09cbd83bd608de.jpg" alt="httpbasicheader.png" tabindex="0"><figcaption>httpbasicheader.png</figcaption></figure><h2 id="_6-2-http表单认证-默认" tabindex="-1"><a class="header-anchor" href="#_6-2-http表单认证-默认"><span>6.2. HTTP表单认证(默认)</span></a></h2><ul><li>有登录界⾯并根据业务场景进⾏定制化处理。同时，也需要对登录的过程和结果进⾏细化控制。</li></ul><h2 id="_6-3-两种模式的比较" tabindex="-1"><a class="header-anchor" href="#_6-3-两种模式的比较"><span>6.3. 两种模式的⽐较</span></a></h2><ul><li>都使⽤⽤户名和密码来对客户端进⾏身份验证</li><li>基础认证在RFC 7617 中正式定义，Basic Auth使⽤HTTP RequestHeader，以便在向服务器发出请求时提供⽤户名和密码。标题字段本Authorization: Basic Base64-encoded(username:password)凭证是由单个冒号连接的⽤户名和密码的base64编码。 与基于表单模式不同，<strong>基本身份验证不使⽤cookie，因此没有会话或注销⽤户的概念</strong>，这意味着每个请求都必须携带该Request Header才能进⾏身份验证。</li><li>表单认证没有被任何RFC形式化。本质上是⼀种编程的身份验证⽅法，⽤于减轻每个请求都必须重新认证的压⼒。⼤多数基于表单的身份认证实现使⽤标准HTML表单字段通过POST请求将⽤户名和密码值传递给服务器。服务器验证所提供的凭据，<strong>并创建⼀个Session会话（有状态）</strong>，该会话绑定到存储在cookie中的SessionId，并在每个http请求上在客户端和服务器之间传递。如果cookie⽆效或⽤户注销，则服务器通常会重定向到登录⻚⾯。</li><li>表单认证⽤于对基于web浏览器的客户端和API进⾏身份认证，⽹站应⽤，企业级应⽤，提供登录、注销等操作（有状态）。</li><li>基础认证验证⽤于API之间的身份验证（⽆状态）。</li></ul><h1 id="_7-加密接口passwordencoder" tabindex="-1"><a class="header-anchor" href="#_7-加密接口passwordencoder"><span>7. 加密接口PasswordEncoder</span></a></h1>',20),p=e("li",null,[i("PasswordEncoder接⼝代表密码编码器，⽤于指定密码的具体加密⽅式，以及如何在给定的⼀段加密字符串与明⽂之间完成匹配校验。Spring Security内置了PasswordEncoder接⼝的实现类。 "),e("ul",null,[e("li",null,"NoOpPasswordEncoder：以明⽂形式保存密码，不对密码进⾏编码。通常只⽤于演示"),e("li",null,"StandardPasswordEncoder：使⽤SHA-256算法对密码执⾏散列操作（过期）"),e("li",null,"BCryptPasswordEncoder：使⽤bcrypt强散列算法对密码执⾏散列操作"),e("li",null,"Pbkdf2PasswordEncoder：使⽤PBKDF2算法对密码执⾏散列操作")])],-1),g={class:"MathJax",jax:"SVG",style:{position:"relative"}},h={style:{"vertical-align":"-0.05ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.262ex",height:"1.557ex",role:"img",focusable:"false",viewBox:"0 -666 1000 688","aria-hidden":"true"},E=r('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mn"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path><path data-c="30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z" transform="translate(500,0)"></path></g></g></g>',1),A=[E],y=e("mjx-assistive-mml",{unselectable:"on",display:"inline"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("mn",null,"10")])],-1),f=e("li",null,"为什么要加盐?加盐保证值不能根据字典得到值，即使得到值也不知道值本身是什么，因为加盐后字符看起来无意义",-1),S=r(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package org.springframework.security.crypto.password;
public interface PasswordEncoder {
  //对原始密码进⾏编码
  String encode(CharSequence rawPassword);
  //对提交的原始密码与库中存储的加密密码进⾏⽐对
  boolean matches(CharSequence rawPassword, String encodedPassword);
  //判断加密密码是否需要再次进⾏加密，默认返回false
  default boolean upgradeEncoding(String encodedPassword) {
    return false;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_8-spring-security中的用户与认证对象" tabindex="-1"><a class="header-anchor" href="#_8-spring-security中的用户与认证对象"><span>8. Spring Security中的⽤户与认证对象</span></a></h1><h2 id="_8-1-用户对象" tabindex="-1"><a class="header-anchor" href="#_8-1-用户对象"><span>8.1. ⽤户对象</span></a></h2><ul><li>⽤来描述⽤户并完成对⽤户信息的管理，涉及4个核⼼⽤户对象</li><li>UserDetails：描述Spring Security中的⽤户。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public interface UserDetails extends Serializable {
  //获取该⽤户的权限信息
  Collection&lt;? extends GrantedAuthority&gt; getAuthorities();
  //获取密码
  String getPassword();
  //获取⽤户名
  String getUsername();
  //判断该账户是否已失效
  boolean isAccountNonExpired();
  //判断该账户是否已被锁定
  boolean isAccountNonLocked();
  //判断该账户的凭证信息是否已失效
  boolean isCredentialsNonExpired();
  //判断该⽤户是否可⽤
  boolean isEnabled();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>GrantedAuthority：定义⽤户所能执⾏的操作权限</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public interface GrantedAuthority extends Serializable {
 //获取权限信息
 String getAuthority();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>UserDetailsService：定义对UserDetails的查询操作。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public interface UserDetailsService {
  //根据⽤户名获取⽤户信息
  UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>UserDetailsManager：扩展UserDetailsService，添加创建⽤户、修改⽤户密码等功能。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public interface UserDetailsManager extends UserDetailsService {
  //创建⽤户
  void createUser(UserDetails user);
  //更新⽤户
  void updateUser(UserDetails user);
  //删除⽤户
  void deleteUser(String username);
  //修改密码
  void changePassword(String oldPassword, String newPassword);
  //判断指定⽤户名的⽤户是否存在
  boolean userExists(String username);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-2-认证对象" tabindex="-1"><a class="header-anchor" href="#_8-2-认证对象"><span>8.2. 认证对象</span></a></h2><ul><li>Authentication-认证请求详细信息</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public interface Authentication extends Principal, Serializable {
  //安全主体所具有的权限
  Collection&lt;? extends GrantedAuthority&gt; getAuthorities();
  //证明主体有效性的凭证
  Object getCredentials();
  //认证请求的明细信息
  Object getDetails();
  //主体的标识信息
  Object getPrincipal();
  //是否认证通过
  boolean isAuthenticated();
  //设置认证结果
  void setAuthenticated(boolean isAuthenticated) throws IllegalArgumentException;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>AuthenticationProvider-认证的业务执⾏者</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public interface AuthenticationProvider {
  //执⾏认证，返回认证结果
  Authentication authenticate(Authentication authentication) throws AuthenticationException;
  //判断是否⽀持当前的认证对象
  boolean supports(Class&lt;?&gt; authentication);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Explanation: In the old version you inject AuthenticationManagerBuilder, set userDetailsService,<br> passwordEncoder and build it. But authenticationManager is already created in this step. It is<br> created the way we wanted (with userDetailsService and the passwordEncoder).</li></ul><h1 id="_9-spring-security的session会话控制" tabindex="-1"><a class="header-anchor" href="#_9-spring-security的session会话控制"><span>9. Spring Security的Session会话控制</span></a></h1><ul><li>Spring Security控制会话何时创建以及将如何与之交互 <ul><li>always – 如果会话尚不存在，则始终会创建会话</li><li>ifRequired – 仅在需要时创建会话 (默认) =&gt;表单认证-后台系统提供登录与注销</li><li>never – 该框架永远不会创建会话本身，但如果已经存在，它将使⽤会话</li><li>stateless – 不会创建或使⽤任何会话。此配置仅控制Spring Security的功能，⽽不是整个应⽤程序=&gt;基础认证-API认证</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception
{
  http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
  ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_10-springsecurity的过滤链设计" tabindex="-1"><a class="header-anchor" href="#_10-springsecurity的过滤链设计"><span>10. SpringSecurity的过滤链设计</span></a></h1><ul><li>在 Spring Security 中，认证、授权等功能都是基于过滤器来完成的。引⼊Spring Security依赖之后，开发者不做任何配置时，自动加载默认过滤器。这些过滤器按照既定的优先级排列，最终形成⼀个过滤器链。开发者也可以⾃定义过滤器，并通过@Order 注解去调整⾃定义过滤器在过滤器链中的位置。</li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/5daa71a0eb9c5c8eaa18f.jpg" alt="defaultfilter.png" tabindex="0"><figcaption>defaultfilter.png</figcaption></figure><ul><li>默认过滤器并不是直接放在Web项⽬的原⽣过滤器链中，⽽是通过⼀个FilterChainProxy来统⼀管理。Spring Security 中的过滤器链通过FilterChainProxy嵌⼊到Web 项⽬的原⽣过滤器链中。</li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/8db109b4aa659ed9bd2fb.jpg" alt="filterchainproxy.png" tabindex="0"><figcaption>filterchainproxy.png</figcaption></figure><ul><li>在Spring Security中，这样的过滤器链不仅仅只有⼀个，可能会有多个，如图所示。当存在多个过滤器链时，多个过滤器链之间要指定优先级，当请求到达后，会从FilterChainProxy 进⾏分发，先和哪个过滤器链匹配上，就⽤哪个过滤器链进⾏处理。当系统中存在多个不同的认证体系时，那么使⽤多个过滤器链就⾮常有效。</li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/4b6e6aa7d8d7dae60d69e.jpg" alt="filterchain.png" tabindex="0"><figcaption>filterchain.png</figcaption></figure><h1 id="_11-springsecurity的securitycontextholder" tabindex="-1"><a class="header-anchor" href="#_11-springsecurity的securitycontextholder"><span>11. SpringSecurity的SecurityContextHolder</span></a></h1><ul><li>当⽤户登录成功后，Spring Security 会将登录成功的⽤户信息保存到SecurityContextHolder 中。SecurityContextHolder中的数据保存默认是通过ThreadLocal来实现的，使⽤ThreadLocal 创建的变量只能被当前线程访问，不能被其他线程访问和修改，也就是⽤户数据和请求线程绑定在⼀起。当登录请求处理完毕后，Spring Security 会将SecurityContextHolder中的数据拿出来保存到Session中，同时将SecurityContextHolder中的数据清空。以后每当有请求到来时，Spring Security就会先从 Session 中取出⽤户登录数据，保存到SecurityContextHolder 中，⽅便在该请求的后续处理过程中使⽤，同时在请求结束时将SecurityContextHolder中的数据拿出来保存到Session中，然后将SecurityContextHolder中的数据清空。这⼀策略⾮常⽅便⽤户在Controller或者Service层获取当前登录⽤户数据，</li></ul><h1 id="_12-rememberme机制" tabindex="-1"><a class="header-anchor" href="#_12-rememberme机制"><span>12. RememberMe机制</span></a></h1><ul><li><p>Remember-Me实现机理是根据⽤户登录信息⽣成 Token 并保存在⽤户浏览器的Cookie 中，当⽤户需要再次登录时，⾃动实现校验并建⽴登录态的⼀种机制。</p></li><li><p>Remember-Me 功能的开启需要在configure(HttpSecurity http)⽅法中通过http.rememberMe()配置，该配置主要会在过滤器链中添加RememberMeAuthenticationFilter过滤器实现⾃动登录。位置在其它认证过滤器之后，其它认证过滤器没有进⾏认证处理时处理</p></li><li><p>Remember-Me 功能是⽤于再次登录（认证）的，⽽不是再次请求<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/77d2e9e49c415e4aaa80a.jpg" alt="rememberme.png"></p></li><li><p>⼯作流程如下：</p><ul><li>当⽤户成功登录认证后，浏览器中存在两个 Cookie，⼀个是remember-me+有效时间，另⼀个是JSESSIONID。</li><li>⽤户再次请求访问时，请求⾸先被SecurityContextPersistenceFilter 过滤器拦截并根据JSESSIONID 获取对应 Session 中存储的 SecurityContext 对象。 <ul><li>如果获取到的 SecurityContext 对象中存储了认证⽤户信息对象 Authentiacaion，也就是说线程可以直接获得认证⽤户信息，那么后续的认证过滤器不需要对该请求进⾏拦截，remember-me不起作⽤。</li><li>当 JSESSIONID 过期后，浏览器中只存在 remember-me 的Cookie。 <ul><li>⽤户再次请求访问时，由于请求没有携带 JSESSIONID，SecurityContextPersistenceFilter 过滤器⽆法获取Session 中的 SecurityContext 对象，也就没法获得认证⽤户信息，后续需要进⾏登录认证。 <ul><li>如果没有 remember-me 的 Cookie，浏览器会重定向到登录⻚⾯进⾏表单登录认证；</li><li>但是 remember-me 的 Cookie 存在，RememberMeAuthenticationFilter 过滤器会将请求进⾏拦截，根据 remember-me 存储的 Token 值实现⾃动登录，并将成功登录后的认证⽤户信息对象Authentiacaion 存储到 SecurityContext 中。当响应返回时，SecurityContextPersistenceFilter 过滤器会将 SecurityContext 存储在 Session 中，下次请求⼜通过 JSEESIONID 获取认证⽤户信息。</li></ul></li></ul></li></ul></li></ul></li><li><p>remember-me 只有在 JSESSIONID 失效和前⾯的过滤器认证失败或者未进⾏认证时才发挥作⽤。此时，只要 remember-me 的Cookie 不过期，我们就不需要填写登录表单，就能实现再次登录，并且 remember-me ⾃动登录成功之后，会⽣成新的 Token 替换旧的Token，相应 Cookie 的 Max-Age 也会重置。</p></li></ul><h1 id="_13-csrf攻击" tabindex="-1"><a class="header-anchor" href="#_13-csrf攻击"><span>13. CSRF攻击</span></a></h1><ul><li>CSRF的全称是Cross-Site Request Forgery，翻译成中⽂是跨站请求伪造。</li><li>从安全性的⻆度来说，CSRF是⼀种攻击⼿段，即攻击者盗⽤⽤户身份，然后以⽤户名义向第三⽅⽹站发送恶意请求。它诱骗web浏览器在⽤户登录的应⽤程序中执⾏不需要的操作。 <ul><li>⽤户A登录X银⾏官⽹，银⾏服务器为⽤户A开辟Session保存认证通过数据，响应返回后⽤户A浏览器的Cookie持有SessionId，下次操作⽆需再次登录</li><li>这时⽤户A收到本地电脑某⿊客软件发来的⼴告，⽤户点击后跳转到X钓⻥站，X钓⻥站向X银⾏⽹站发起Redirect“转账”请求</li><li>浏览器收到X钓⻥站发来的Rediect“转账”请求，因为⽤户之前已经认证过了，官⽹就认为该⽤户真的要发起“转账”操作，于是⽤户⾦钱就受到损失</li></ul></li><li>CSRF保护的基本思想就是为系统中的每个连接请求加上⼀个随机值，称为csrf_token。当⽤户A向X银⾏发送请求前，X银为其⽣成⼀个Token令牌，⽽在浏览器发送请求时，所提交的数据（Cookie或者Header）中也会有⼀个隐藏的csrf_token。这样X官⽹接收到请求之后，⼀⽅⾯从Session或其他存储介质中提取出csrf_token，另⼀⽅⾯获取来⾃浏览器的csrf_token，将两者进⾏⽐对，如果不⼀致就代表这是⼀个伪造的请求。csrf_token是⼀次性的，使⽤⼀次后会⽴即从Session清楚，下⼀次同样持有相同csrf_token的伪造请求将被拒绝</li><li>Spring Security专⻔提供了⼀个过滤器组件——CsrfFilter来实现对CSRF的保护，默认开启。CsrfFilter拦截请求，并允许通过那些使⽤GET、HEAD、TRACE和OPTIONS等HTTP⽅法的请求。⽽对于PUT、POST、DELETE等会修改数据的其他请求CsrfFilter希望接收包含csrf_token值的消息头。如果该消息头不存在或包含不正确的csrf_token值，则Web应⽤程序将拒绝该请求。</li><li>CsrfTokenRepository是Token令牌的存储操作类，默认CsrfToken将服务器端Token存储到到Session会话中，如果项⽬不允许使⽤Session可以⾃⼰实现⼀个CsrfTokenRepository将其转存到MySQL、Redis中即可。</li></ul><h1 id="_14-spring-security入门" tabindex="-1"><a class="header-anchor" href="#_14-spring-security入门"><span>14. Spring Security入门</span></a></h1><ul><li>pom.xml</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;dependency&gt;
 &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
 &lt;artifactId&gt;spring-boot-starter-security&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>application.properties</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>server.port=80
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>SampleController</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package com.example.firstspringsecurity.controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class SampleController {
  @GetMapping(&quot;/hello&quot;)
  public String hello() {
    return &quot;Hello World!&quot;;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>日志</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>WARN 19580 --- [ main] .s.s.UserDetailsServiceAutoConfiguration
:
Using generated security password: fc99acf0-73e1-4799-bcd4-d715d9133303
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,42),x={href:"http://localhost:80/hello%E3%80%82%E4%BC%9A%E8%B7%B3%E8%BD%AC%E5%88%B0%E7%9A%84Spring",target:"_blank",rel:"noopener noreferrer"},C=r(`<h1 id="_15-springsecurity基础认证" tabindex="-1"><a class="header-anchor" href="#_15-springsecurity基础认证"><span>15. SpringSecurity基础认证</span></a></h1><ul><li>按照入门配置pom.xml,application.properties,SampleController</li><li>新增配置SecurityConfiguration</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package com.example.firstspringsecurity;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import static org.springframework.security.config.Customizer.withDefaults;
@Configuration
public class SecurityConfiguration {
  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
      .authorizeHttpRequests((authz) -&gt; authz.anyRequest().authenticated())
      .httpBasic(withDefaults());
      return http.build();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Authorization的值在浏览器请求里面查看，附录：IDEA HTTP⼯具脚本</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>GET http://localhost:80/hello
Authorization: Basic dXNlcjo2ZWUwYWE0Yy02MjkyLTRjMTYtOWNkZi0wMmIzYmU0ZDgxNjg=
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_16-springsecurity实现基于mysql自定义基础认证" tabindex="-1"><a class="header-anchor" href="#_16-springsecurity实现基于mysql自定义基础认证"><span>16. SpringSecurity实现基于MySQL⾃定义基础认证</span></a></h1><ul><li>MySQL8服务器⼀台，导⼊下列脚本</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS \`authorities\`;
CREATE TABLE \`authorities\` (
 \`username\` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ciNOT NULL,
 \`authority\` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
 UNIQUE INDEX \`ix_auth_username\`(\`username\`, \`authority\`) USING BTREE,
 CONSTRAINT \`fk_authorities_users\` FOREIGN KEY (\`username\`) REFERENCES \`users\` (\`username\`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

DROP TABLE IF EXISTS \`cust_user\`;
CREATE TABLE \`cust_user\` (
 \`id\` int NOT NULL AUTO_INCREMENT,
 \`username\` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_c 42 i NOT NULL,
 \`password\` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_c 43 i NOT NULL,
 \`nickname\` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci 44 NOT NULL,
 \`enabled\` tinyint NOT NULL DEFAULT 1,
 PRIMARY KEY (\`id\`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf 47 8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

INSERT INTO \`cust_user\` VALUES (1, &#39;zhangsan&#39;, &#39;zhangsan&#39;, &#39;张三&#39;, 1);
INSERT INTO \`cust_user\` VALUES (2, &#39;lisi&#39;, &#39;lisi&#39;, &#39;李四&#39;, 1);
INSERT INTO \`cust_user\` VALUES (3, &#39;wangwu&#39;, &#39;wangwu&#39;, &#39;王五&#39;, 1);

DROP TABLE IF EXISTS \`users\`;
CREATE TABLE \`users\` (
 \`username\` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci 61 NOT NULL,
 \`password\` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_c 62 i NOT NULL,
 \`enabled\` tinyint(1) NOT NULL,
 PRIMARY KEY (\`username\`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW 65 _FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>pom.xml</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;dependency&gt;
 &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;
 &lt;artifactId&gt;lombok&lt;/artifactId&gt;
 &lt;optional&gt;true&lt;/optional&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
 &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
 &lt;artifactId&gt;spring-boot-starter-security&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
 &lt;groupId&gt;com.baomidou&lt;/groupId&gt;
 &lt;artifactId&gt;mybatis-plus-boot-starter&lt;/artifactId&gt;
 &lt;version&gt;3.5.2&lt;/version&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
 &lt;groupId&gt;mysql&lt;/groupId&gt;
 &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;
 &lt;version&gt;8.0.30&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>application.yaml</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>server:
  port: 80
  spring:
    datasource:
      driver-class-name: com.mysql.cj.jdbc.Driver
      url: jdbc:mysql://192.168.31.250:3306/authz?useUnicode=true&amp;characterEncoding=utf-8&amp;serverTimezone=Asia/Shanghai
      username: root
      password: root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>⼊⼝类增加@MapperSan</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package com.example.customizeauthz;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@SpringBootApplication
@MapperScan
public class CustomizeAuthzApplication {
  public static void main(String[] args) {
    SpringApplication.run(CustomizeAuthzApplication.class, args);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>测试用控制器</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package com.example.customizeauthz.controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class TestController {
  @GetMapping(&quot;/hello&quot;)
  public String hello(){
    return &quot;hello&quot;;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>开发Entity：User实体类实现UserDetails接⼝，并扩展若⼲⾃定义属性</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package com.example.customizeauthz.entity;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import java.util.Arrays;
import java.util.Collection;
@Data
@TableName(&quot;cust_user&quot;)
public class User implements UserDetails {
  @TableId(type = IdType.NONE)
  private Integer id;
  private String username;
  private String password;
  private String nickname;
  private Integer enabled;
  @Override
  public Collection&lt;? extends GrantedAuthority&gt; getAuthorities() {
    return Arrays.asList(new SimpleGrantedAuthority(&quot;ROLE_USER&quot;));
  }
  @Override
  public boolean isAccountNonExpired() {
    return true;
  }
  @Override
  public boolean isAccountNonLocked() {
    return true;
  }
  @Override
  public boolean isCredentialsNonExpired() {
    return true;
  }
  @Override
  public boolean isEnabled() {
    return enabled==1?true:false;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>开发Mapper</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package com.example.customizeauthz.mapper;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.customizeauthz.entity.User;
import org.apache.ibatis.annotations.Mapper;
@Mapper
public interface UserMapper extends BaseMapper&lt;User&gt; {
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>开发UserService:实现UserDetailsService接⼝，并完成loadUserByUsername()按⽤户名查询的操作</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package com.example.customizeauthz.service;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.example.customizeauthz.entity.User;
import com.example.customizeauthz.mapper.UserMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import javax.annotation.Resource;
@Service
@Slf4j
public class UserService implements UserDetailsService {
  @Resource
  UserMapper userMapper;
  @Override
  public UserDetails loadUserByUsername(String username) throws Username NotFoundException {
    QueryWrapper&lt;User&gt; queryWrapper = new QueryWrapper&lt;&gt;();
    queryWrapper.eq(&quot;username&quot;, username);
    User user = userMapper.selectOne(queryWrapper);
    if(user == null){
      log.error(&quot;Access denied: Username: &quot; + username + &quot; not found&quot;);
      throw new UsernameNotFoundException(&quot;Username:&quot; + username + &quot;not found&quot;);
    }else{
      return user;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>最关键⼀步，构建AuthenticationProvider</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package com.example.customizeauthz.security;
import com.example.customizeauthz.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.SecurityFilterChain;
import javax.annotation.Resource;
import static org.springframework.security.config.Customizer.withDefaults;
@Configuration
@Slf4j
public class SecurityConfiguration {
  @Resource
  private UserService userService;

  @Bean
  public AuthenticationProvider authenticationProvider() {
    return new AuthenticationProvider() {
      @Override //⾃⼰实现认证过程
      public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        //从Authentication对象中获取⽤户名和身份凭证信息
        String username = authentication.getName();
        String password = authentication.getCredentials().toString();
        UserDetails user = userService.loadUserByUsername(username);
        if (password.equals(user.getPassword())) {
          log.info(&quot;Access success:&quot; + user.toString());
          //密码匹配成功则构建⼀个UsernamePasswordAuthenticationToken对象并返回
           return new UsernamePasswordAuthenticationToken(username, password, user.getAuthorities());
        } else {
          //密码匹配失败则抛出异常
          log.error(&quot;Access denied:The username or password is wrong!&quot;);
          throw new BadCredentialsException(&quot;The username or password is wrong!&quot;);
        }
      }
      @Override
      public boolean supports(Class&lt;?&gt; authentication) {
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
      }
    };
  }
  //基于基础认证模式进⾏测试
  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http.authenticationProvider(authenticationProvider())
        .authorizeHttpRequests((authz) -&gt; {
        authz.anyRequest().authenticated();
        }).httpBasic(withDefaults());
    return http.build();
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>IDEA HTTP测试脚本</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>### 张三访问
GET http://localhost:80/hello
Authorization: Basic emhhbmdzYW46emhhbmdzYW4=
#Authorization: Basic amhhbmdzYW46emhhbmdzYW4=
#Authorization: Basic emhhbmdzYW46emhhbmdzYW3=
### 李四访问
GET http://localhost:80/hello
Authorization: Basic bGlzaTpsaXNp
### 王五访问
GET http://localhost:80/hello
Authorization: Basic d2FuZ3d1Ondhbmd3dQ==
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>测试结果</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>INFO 28188 --- [p-nio-80-exec-3] c.e.c.security.SecurityConfiguration 
: Access Success:User(id=1, username=zhangsan, password=zhangsan, nickname=
张三, enabled=1)
ERROR 28188 --- [p-nio-80-exec-8] c.e.customizeauthz.service.UserService 
: Access denied: Username: jhangsan not found
ERROR 28188 --- [-nio-80-exec-10] c.e.c.security.SecurityConfiguration 
: Access Fail:The username or password is wrong!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_17-springsecurity利用passwordencoder对密码加密保护" tabindex="-1"><a class="header-anchor" href="#_17-springsecurity利用passwordencoder对密码加密保护"><span>17. SpringSecurity利⽤PasswordEncoder对密码加密保护</span></a></h1><ul><li><strong>BCrypt算法⽣成⻓度为60的字符串，因此我们需要确保密码将存储在可以容纳它的列中（VARCHAR&gt;60）</strong></li><li>SecurityConfiguration新增PasswordEncoder&#39;s Bean</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@Bean
public PasswordEncoder passwordEncoder() {
  return new BCryptPasswordEncoder();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>SecurityConfiguration修改校验逻辑</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//if (password.equals(user.getPassword())) 
if ( passwordEncoder().matches(password,user.getPassword())) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>⽣成密码的测试⽤例</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package com.example.customizeauthz;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import sun.security.util.Password;
import javax.annotation.Resource;
@SpringBootTest
class CustomizeAuthzApplicationTests {
  @Resource
  PasswordEncoder passwordEncoder;
  @Test
  public void encoder(){
    System.out.println(passwordEncoder.encode(&quot;zhangsan&quot;));
    System.out.println(passwordEncoder.encode(&quot;lisi&quot;));
    System.out.println(passwordEncoder.encode(&quot;wangwu&quot;));
  }
  @Test
  void contextLoads() {
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_18-基于表单模式实现自定义认证" tabindex="-1"><a class="header-anchor" href="#_18-基于表单模式实现自定义认证"><span>18. 基于表单模式实现⾃定义认证</span></a></h1><ul><li>resources/static/login.html</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;Title&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;form method=&quot;post&quot; action=&quot;/check_login&quot;&gt;
      &lt;input name=&quot;u&quot;&gt;
      &lt;input name=&quot;p&quot; type=&quot;password&quot;&gt;
      &lt;input type=&quot;submit&quot;&gt;
    &lt;/form&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>表单模式在基于MySQL认证例子上重写filterChain，启⽤formLogin()表单认证模式和修改session模式即可</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//基于基础认证模式进⾏测试
@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    /*
  http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
  http.authorizeHttpRequests((authz) -&gt; {
      authz.anyRequest().authenticated();
  }).httpBasic(withDefaults());
  return http.build();
  */
  //启⽤会话存储
  http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED);
  //开启URL匹配的请求认证
  http.authorizeRequests()
    //任何请求必须要经过认证才可以⽅形
    .anyRequest().authenticated()
    .and()
    //启⽤表单认证模式
    .formLogin()
    //默认登录⻚⾯
    .loginPage(&quot;/login.html&quot;)
    //默认请求提交地址,只要有AuthenticationProvider
    .loginProcessingUrl(&quot;/check_login&quot;)
    //放⾏上⾯loginPage与loginProcessingUrl不做认证
    .permitAll()
    //设置提交的参数名
    .usernameParameter(&quot;u&quot;)
    .passwordParameter(&quot;p&quot;)
    .and()
    //开始设置注销功能
    .logout()
    //注销功能的URL地址
    .logoutUrl(&quot;/logout&quot;)
    //Session直接过期
    .invalidateHttpSession(true)
    //清除认证信息
    .clearAuthentication(true)
    //登录后跳转地址
    .logoutSuccessUrl(&quot;/login.html&quot;)
    .and()
    //禁⽤csrf安全防护
    .csrf().disable();
  ;
  return http.build();
  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_19-springsecurity实现表单认证登录接口返回json" tabindex="-1"><a class="header-anchor" href="#_19-springsecurity实现表单认证登录接口返回json"><span>19. SpringSecurity实现表单认证登录接⼝返回JSON</span></a></h1><ul><li>基于表单认证，注册4个处理器</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@Bean
//未认证异常处理器
public AuthenticationEntryPoint authenticationEntryPoint(){
    return (request,response,exception)-&gt;{
        response.setContentType(&quot;application/json;charset=utf-8&quot;);
        response.setStatus(401);
        // 写出去
        HashMap&lt;String, Object&gt; map = new HashMap&lt;&gt;(4);
        map.put(&quot;code&quot;, &quot;401&quot;);
        map.put(&quot;msg&quot;, exception.getMessage());
        ObjectMapper objectMapper = new ObjectMapper();
        String s = objectMapper.writeValueAsString(map);
        PrintWriter writer = response.getWriter();
        writer.write(s);
        writer.flush();
        writer.close();
    };
}

@Bean
//认证成功处理器
public AuthenticationSuccessHandler authenticationSuccessHandler(){
    return (request, response, authentication)-&gt;{
        response.setContentType(&quot;application/json;charset=utf-8&quot;);
        // 写出去
        HashMap&lt;String, Object&gt; map = new HashMap&lt;&gt;(4);
        map.put(&quot;code&quot;, &quot;0&quot;);
        map.put(&quot;msg&quot;, &quot;LOGIN SUCCESS&quot;);
        ObjectMapper objectMapper = new ObjectMapper();
        String s = objectMapper.writeValueAsString(map);
        PrintWriter writer = response.getWriter();
        writer.write(s);
        writer.flush();
        writer.close();
    };
}

@Bean
//认证失败处理器
public AuthenticationFailureHandler authenticationFailureHandler() {
    return (request, response, exception) -&gt; {
        response.setContentType(&quot;application/json;charset=utf-8&quot;);
        response.setStatus(401);
        // 写出去
        HashMap&lt;String, Object&gt; map = new HashMap&lt;&gt;(4);
        map.put(&quot;code&quot;, &quot;401&quot;);
        map.put(&quot;msg&quot;, exception.getMessage());
        ObjectMapper objectMapper = new ObjectMapper();
        String s = objectMapper.writeValueAsString(map);
        PrintWriter writer = response.getWriter();
        writer.write(s);
        writer.flush();
        writer.close();
    };
}

@Bean
//注销处理器
public LogoutSuccessHandler logoutSuccessHandler(){
    return (request, response, authentication)-&gt;{
        response.setContentType(&quot;application/json;charset=utf-8&quot;);
        // 写出去
        HashMap&lt;String, Object&gt; map = new HashMap&lt;&gt;(4);
        map.put(&quot;code&quot;, &quot;0&quot;);
        map.put(&quot;msg&quot;, &quot;LOGOUT SUCCESS&quot;);
        ObjectMapper objectMapper = new ObjectMapper();
        String s = objectMapper.writeValueAsString(map);
        PrintWriter writer = response.getWriter();
        writer.write(s);
        writer.flush();
        writer.close();
    };
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在filterchain中应用四个处理器</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//基于基础认证模式进行测试
@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    /*
    http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    http.authorizeHttpRequests((authz) -&gt; {
        authz.anyRequest().authenticated();
    }).httpBasic(withDefaults());
    return http.build();
    */
    //启用会话存储
    http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED);

    http.exceptionHandling().authenticationEntryPoint(authenticationEntryPoint())
            .and()
            .authorizeRequests()
            //任何请求必须要经过认证才可以放行
            .anyRequest().authenticated()
            .and()
            //启用表单认证模式
            .formLogin()
            // 登录成功执行的
            .successHandler(authenticationSuccessHandler())
            // 登录失败执行的
            .failureHandler(authenticationFailureHandler())
            //默认登录页面
            //.loginPage(&quot;/login.html&quot;)
            //默认请求提交地址
            .loginProcessingUrl(&quot;/check_login&quot;)
            //放行上面loginPage与loginProcessingUrl不做认证
            .permitAll()
            //设置提交的参数名
            .usernameParameter(&quot;u&quot;)
            .passwordParameter(&quot;p&quot;)
            .and()
            //开始设置注销功能
            .logout()
            .logoutSuccessHandler(logoutSuccessHandler())
            //注销功能的URL地址
            .logoutUrl(&quot;/logout&quot;)
            //Session直接过期
            .invalidateHttpSession(true)
            //清除认证信息
            .clearAuthentication(true)
            //注销后跳转地址
            //.logoutSuccessUrl(&quot;/login.html&quot;)
            .and()
            //禁用csrf安全防护
            .csrf().disable();
    return http.build();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>测试</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>### check_login
POST http://localhost/check_login
Content-Type: application/x-www-form-urlencoded
u=zhangsan&amp;p=zhangsan
### hello
GET http://localhost/hello
### logout
GET http://localhost/logout
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_20-security-contextholder实现子线程获得用户信息" tabindex="-1"><a class="header-anchor" href="#_20-security-contextholder实现子线程获得用户信息"><span>20. Security ContextHolder实现子线程获得用户信息</span></a></h1><ul><li>⼦线程中想要获取⽤户登录数据比较难。如果开发者使⽤@Async 注解来开启异步任务的话，那么只需要添加如下配置，使⽤ Spring Security 提供的异步任务代理，就可以在异步任务中从 Security ContextHolder⾥边获取当前登录⽤户的信息∶</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@Confiquration
public class ApplicationConfiguration extends AsyncConfigurerSupport {
  @Override
  public Executor getAsyncExecutor(){
    return new DelegatingSecurityContextExecutorService(
      Executors.newFixedThreadPool(5));
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_21-securitycontextholder获取当前登录对象" tabindex="-1"><a class="header-anchor" href="#_21-securitycontextholder获取当前登录对象"><span>21. SecurityContextHolder获取当前登录对象</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package com.example.customizeauthz.controller;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Collection;
@RestController
public class UserController {
  @GetMapping(&quot;/user&quot;)
  public void userInfo() {
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    String name = authentication.getName();
    Collection&lt;? extends GrantedAuthority&gt; authorities =authentication.getAuthorities();
    System.out.println(&quot;username = &quot; + name);
    System.out.println(&quot;authorities = &quot; + authorities);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_22-spring-security配置自定义过滤器" tabindex="-1"><a class="header-anchor" href="#_22-spring-security配置自定义过滤器"><span>22. Spring Security配置⾃定义过滤器</span></a></h1>`,53),q={href:"https://docs.spring.io/spring%EF%BF%BEsecurity/reference/servlet/configuration/xml%EF%BF%BEnamespace.html#ns-custom-filters",target:"_blank",rel:"noopener noreferrer"},w=e("li",null,[i("HttpSecurity有三个常⽤⽅法来配置： "),e("ul",null,[e("li",null,"addFilterBefore(Filter filter, Class<? extends Filter>beforeFilter) 在 beforeFilter 之前添加 filter"),e("li",null,"addFilterAfter(Filter filter, Class<? extends Filter> afterFilter)在 afterFilter 之后添加 filter"),e("li",null,"addFilterAt(Filter filter, Class<? extends Filter> atFilter) 在atFilter 相同位置添加 filter， 此 filter 不覆盖 filter，但是引⽤官⽅描述其前后位置具有不确定性")])],-1),T=e("li",null,"后置过滤器",-1),_=r(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package com.example.customizeauthz.filter;
import org.springframework.web.filter.GenericFilterBean;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import java.io.IOException;
public class AfterFilter extends GenericFilterBean {
  @Override
  public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException, ServletException, IOException {
    System.out.println(&quot;This is a filter after UsernamePasswordAuthenticationFilter.&quot;);
    // 继续调⽤ Filter 链
    filterChain.doFilter(servletRequest, servletResponse);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>前置过滤器</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package com.example.customizeauthz.filter;
import org.springframework.web.filter.GenericFilterBean;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import java.io.IOException;
public class BeforeFilter extends GenericFilterBean {
  @Override
  public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException, ServletException, IOException {
    System.out.println(&quot;This is a filter before UsernamePasswordAuthenticationFilter.&quot;);
    // 继续调⽤ Filter 链
    filterChain.doFilter(servletRequest, servletResponse);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>自定义过滤器</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package com.example.customizeauthz.filter;
import org.springframework.web.filter.GenericFilterBean;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import java.io.IOException;
public class CustomFilter extends GenericFilterBean {
  @Override
  public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException, ServletException, IOException {
    System.out.println(&quot;This is a filter at UsernamePasswordAuthenticationFilter.&quot;);
    // 继续调⽤ Filter 链
    filterChain.doFilter(servletRequest, servletResponse);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>添加过滤器</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//基于基础认证模式进行测试
@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    http.authorizeHttpRequests((authz) -&gt; {
        authz.anyRequest().authenticated();
    }).httpBasic(withDefaults());
    http.addFilterAfter(new AfterFilter(), UsernamePasswordAuthenticationFilter.class);
    http.addFilterBefore(new BeforeFilter(), UsernamePasswordAuthenticationFilter.class);
    http.addFilterAt(new CustomFilter(), UsernamePasswordAuthenticationFilter.class);
    return http.build();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>测试</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>###
http://localhost/hello
Authorization:basic emhhbmdzYW46emhhbmdzYW4=
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_23-spring-security权限控制" tabindex="-1"><a class="header-anchor" href="#_23-spring-security权限控制"><span>23. Spring Security权限控制</span></a></h1><ul><li>GrantedAuthority对象代表的就是⼀种权限对象，⽽⼀个UserDetails对象具备1个或多个 GrantedAuthority 对象。通过这种关联关系可以对⽤户的权限进⾏限制。</li></ul><h2 id="_23-1-授权" tabindex="-1"><a class="header-anchor" href="#_23-1-授权"><span>23.1. 授权</span></a></h2><ul><li>userDetails授权</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@Data
@TableName(&quot;cust_user&quot;)
public class User implements UserDetails {
  ...
  @Override
  public Collection&lt;? extends GrantedAuthority&gt; getAuthorities() {
     Arrays.asList(new SimpleGrantedAuthority(&quot;CREATE_DOC&quot;), new
    SimpleGrantedAuthority(&quot;UPDATE_DOC&quot;));
  }
  ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>⾼级⽤法，⾃定义⽅法实现授权过程</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public boolean authorize(Authentication authentication, HttpServletRequest request) {
  //查询username对应的权限，如拥有权限返回true,否则返回false
 return true;
}

//基于基础认证模式进⾏测试
@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
  http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
  ...
  http.authorizeRequests().anyRequest()
  // .access(&quot;hasAuthority(&#39;CREATE_DOC&#39;) and hasAuthority(&#39;UPDATE_DOC&#39;)&quot;)
  // .access(&quot;hasAnyRole(&#39;USER&#39;,&#39;USER1&#39;) and !isRememberMe()&quot;)
    .access(&quot;@securityConfiguration.authorize(authentication,request)&quot;)//高级用法
    .and().httpBasic(withDefaults());
return http.build();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_23-2-鉴权" tabindex="-1"><a class="header-anchor" href="#_23-2-鉴权"><span>23.2. 鉴权</span></a></h2><ul><li>Spring Security 提供了access()⽅法和SpEL （Spring Expression Language）表达式进⾏更加细粒度的权限控制。这⾥将引⼊，只要该表达式的返回值是true，那么access()⽅法允许⽤户访问。以下是公共表达式</li></ul><table><thead><tr><th>表达式</th><th>描述</th></tr></thead><tbody><tr><td>hasRole(String role)</td><td>当前主体（⽤户）拥有指定⻆⾊时通过授权hasRole(&#39;admin&#39;)</td></tr><tr><td>hasAnyRole(String… roles)</td><td>当前主体拥有任意⼀个⻆⾊时通过授权hasAnyRole(&#39;admin&#39;, &#39;user&#39;)</td></tr><tr><td>hasAuthority(String authority)</td><td>当前主体拥有指定权限时通过授权hasAuthority(&#39;read&#39;)</td></tr><tr><td>hasAnyAuthority(String…authorities)</td><td>当前主体拥有任意某⼀项权限时通过授权hasAnyAuthority(&#39;read&#39;, &#39;write&#39;)</td></tr><tr><td>principal</td><td>允许直接访问表示当前⽤户的主体对象</td></tr><tr><td>authentication</td><td>当前认证请求经过认证后允许访问</td></tr><tr><td>permitAll</td><td>始终允许permitAll()</td></tr><tr><td>denyAll</td><td>拒绝所有denyAll()</td></tr><tr><td>isAnonymous()</td><td>当前是匿名⽤户时允许通过授权</td></tr><tr><td>isRememberMe()</td><td>判断当前主体是否未remember-me</td></tr><tr><td>isAuthenticated()</td><td>判断当前主体是否经过认证</td></tr><tr><td>isFullyAuthenticated()</td><td>如果当前主体不是匿名⽤户以及不是remember-me⽤户返回true</td></tr><tr><td>hasPermission(Object target, Object permission)</td><td>判断⽤户是否拥有指定⽬标的访问权限hasPermission(domainObject, &#39;read&#39;)</td></tr><tr><td>hasPermission(Object targetId, String targetType, Object permission)</td><td>判断⽤户是否拥有指定⽬标的访问权限hasPermission(1,&#39;com.example.domain.Message&#39;,&#39;read&#39;)</td></tr></tbody></table><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public boolean authorize(Authentication authentication, HttpServletRequest request) {
    //查询username对应的权限，如拥有权限返回true,否则返回false
    return true;
}
//基于基础认证模式进行测试
@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

    http.authorizeRequests().mvcMatchers(&quot;/he*&quot;).access(&quot;permitAll()&quot;);
    http.authorizeRequests().mvcMatchers(&quot;/hello&quot;).access(&quot;denyAll()&quot;);

    http.authorizeRequests().anyRequest()
//                .access(&quot;hasAuthority(&#39;CREATE_DOC&#39;) and hasAuthority(&#39;UPDATE_DOC&#39;)&quot;)
//                .access(&quot;hasAnyRole(&#39;USER&#39;,&#39;USER1&#39;) and !isRememberMe()&quot;)
            .access(&quot;@securityConfiguration.authorize(authentication,request)&quot;)
            .and().httpBasic(withDefaults());

    return http.build();

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>方法鉴权:@PreAuthorize、@PostAuthorize、@preFilter、@postFilter</li><li>配置开启</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>...
@EnableGlobalMethodSecurity(prePostEnabled = true)
...
public class SecurityConfiguration {
 ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class UserService implements UserDetailsService {
  //拥有ADMIN⻆⾊的⽤户才能访问createUser⽅法
  @PreAuthorize(&quot;hasRole(&#39;ADMIN&#39;)&quot;)
  public void createUser(){
    System.out.println(&quot;user inserted&quot;);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//⼈们并不⼀定相信所返回数据的正确性，对调⽤的响应结果进⾏限制是有必要的。@PostAuthorize 注解为⼈们实现这类需求提供了很好的解决⽅案。该示例中，基于“returnObject”这个返回值对象，如果使⽤“ProductA2”的“UserA”对象调⽤这个⽅法就能正常返回数据；如果使⽤“UserB”对象调⽤，就会抛出403异常。
@PostAuthorize(&quot;returnObject.products.contains(&#39;ProductA2&#39;)&quot;)
public User getUserByName(String name) {
  return users.get(name);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//zhangsan认证⼯作后，只有username=zhangsan的User被传⼊⽅法内部
@PreFilter(value = &quot;filterObject.username == authentication.name&quot;,filterTarget = &quot;users&quot;)
public void batchImport(List&lt;User&gt; users){
  System.out.println(users);
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//只返回username=zhangsan的User
public class UserService implements UserDetailsService {
  @PostFilter(value = &quot;filterObject.username == authentication.name&quot;)
  public List&lt;User&gt; listUser(){
    return userMapper.selectList(new QueryWrapper&lt;&gt;());
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_24-rbac基于⻆色权限控制" tabindex="-1"><a class="header-anchor" href="#_24-rbac基于⻆色权限控制"><span>24. RBAC基于⻆⾊权限控制</span></a></h1><ul><li>基于⻆⾊的访问控制 (RBAC)与基于属性的访问控制 (ABAC)之间的区别主要区别在于每种⽅法授予访问权限的⽅式。RBAC 技术允许您按⻆⾊授予访问权限。ABAC 技术让您可以根据⽤户特征、对象特征、操作类型等来确定访问权限。<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/f1f670081c95eb50852e0.png" alt="rbac.png"></li></ul><h1 id="_25-spring-security-匹配器" tabindex="-1"><a class="header-anchor" href="#_25-spring-security-匹配器"><span>25. Spring Security 匹配器</span></a></h1><ul><li>Spring Security提供了三种强⼤的匹配器（Matcher）来实现HTTP请求与权限控制过程产⽣关联，分<br> 别是MVC匹配器、Ant匹配器及正则表达式匹配器。</li><li>MVC匹配器</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//基于HTTP端点的访问路径进⾏匹配即可
http.authorizeRequests()
 .mvcMatchers(&quot;/user&quot;).access(&quot;hasRole(&#39;USER&#39;)&quot;);
 .mvcMatchers(&quot;/admin&quot;).access(&quot;hasRole(&#39;ADMIN&#39;)&quot;);
.anyRequest().authenticated();
//针对统⼀URL不同请求⽅式的做法,多URL采⽤优先匹配原则
http.authorizeRequests()
 .mvcMatchers(HttpMethod.POST, &quot;/hello&quot;).authenticated()
 .mvcMatchers(HttpMethod.GET, &quot;/hello&quot;).permitAll()
 .anyRequest().denyAll();
//通配符表达
http.authorizeRequests()
 .mvcMatchers(HttpMethod.GET, &quot;/user/*&quot;).authenticated()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),k=e("br",null,null,-1),R={href:"http://127.0.0.1/hello/%E8%83%BD%E8%AE%BF%E9%97%AE%EF%BC%8C%E8%80%8Chttp://127.0.0.1/hello%E6%8A%A5401",target:"_blank",rel:"noopener noreferrer"},B=e("ul",null,[e("li",null,"antMatchers(String patterns)。"),e("li",null,"antMatchers(HttpMethod method)。"),e("li",null,"antMatchers(HttpMethod method, String patterns)。")],-1),O=e("li",null,[i("正则表达式匹配器：优势在于它能够基于复杂的正则表达式对请求地址进⾏匹配 "),e("ul",null,[e("li",null,"regexMatchers(HttpMethod method, String regex)。"),e("li",null,"regexMatchers(String regex)。")])],-1),z=r(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>http.authorizeRequests()
 .regexMatchers(&quot;/email/{email:.*(.+@.+\\\\.com)}&quot;)
 .permitAll()
 .anyRequest()
 .denyAll();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_26-spring-security实现remember-me" tabindex="-1"><a class="header-anchor" href="#_26-spring-security实现remember-me"><span>26. Spring Security实现Remember Me</span></a></h1><ul><li>开启Remember-Me：</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
  //启⽤会话存储
  http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED);
  http.authorizeRequests()
    //任何请求必须要经过认证才可以放⾏
    .anyRequest().authenticated()
    //TODO
    .and()
    .rememberMe().rememberMeParameter(&quot;rbm&quot;)
...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>确保参数名为rbm与设置保持⼀致，值不重要。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
 &lt;meta charset=&quot;UTF-8&quot;&gt;
 &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;form method=&quot;post&quot; action=&quot;/check_login&quot;&gt;
 &lt;input name=&quot;u&quot;&gt;
 &lt;input name=&quot;p&quot; type=&quot;password&quot;&gt;
 &lt;input type=&quot;checkbox&quot; name=&quot;rbm&quot;&gt;记住我！
 &lt;input type=&quot;submit&quot;&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>扩展：令牌持久化与⼆次登录</li></ul><h1 id="_27-spring-security预防csrf攻击" tabindex="-1"><a class="header-anchor" href="#_27-spring-security预防csrf攻击"><span>27. Spring Security预防CSRF攻击</span></a></h1><ul><li>提供获取Token的⽅法以及Post测试⽅法</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@GetMapping(&quot;/csrf-token&quot;)
public String getCsrfToken(HttpServletRequest request){
  CsrfToken csrfToken = (CsrfToken)request.getAttribute(&quot;_csrf&quot;);
  if(csrfToken != null) {
    return csrfToken.getToken();
  }else{
    return &quot;&quot;;
  }
}

@PostMapping(&quot;/hello&quot;)
public String phello(){
  return &quot;hello&quot;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置类</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>.csrf().ignoringAntMatchers(&quot;/csrf-token/&quot;); 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>请求csrf</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>### get csrf-token
GET http://localhost:80/csrf-token
Authorization: Basic emhhbmdzYW46emhhbmdzYW4=
### post hello
POST http://localhost/hello
Authorization: Basic emhhbmdzYW46emhhbmdzYW4=
X-CSRF-TOKEN: dfe03b62-de2d-460b-95cb-271ba4140bc9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_28-分布式认证oauth2协议介绍" tabindex="-1"><a class="header-anchor" href="#_28-分布式认证oauth2协议介绍"><span>28. 分布式认证Oauth2协议介绍</span></a></h1><ul><li>对分布式架构⽽⾔，安全性设计的核⼼还是认证和授权。但是因为分布式系统中服务之间可以存在相互的调⽤关系，针对每⼀个服务，⼀⽅⾯需要考虑来⾃客户端的请求，另⼀⽅⾯需要考虑来⾃另⼀个服务的请求，安全访问控制⾯临着从客户端到服务、从服务到服务的多种授权场景。基于上述安全性开发需求，需要引⼊专⻔⽤于分布式环境的授权体系，⽽OAuth2协议是应对这种应⽤场景的有效解决⽅案。</li><li>OAuth是Open Authorization的缩写，该协议解决的是授权问题⽽不是认证问题，⽬前普遍被采⽤的是 OAuth2。OAuth2对涉及的⻆⾊和授权模式给出了明确的定义。</li></ul><h2 id="_28-1-oauth2协议的应用场景" tabindex="-1"><a class="header-anchor" href="#_28-1-oauth2协议的应用场景"><span>28.1. OAuth2协议的应⽤场景</span></a></h2><ul><li>常⻅的电商系统通常都会存在类似⼯单处理的系统，⽽⼯单的⽣成过程⼀⽅⾯需要⽤到⽤户的基本信息，另⼀⽅⾯⼜依赖于⽤户的订单记录等数据。从降低开发成本的⻆度考虑，假设整个商品订单模块并不是⾃⼰研发的，⽽是集成了外部的订单管理平台。这样的话，为了⽣成⼯单记录，就必须让⼯单系统读取⽤户在订单管理平台上的订单记录。该场景中，难点在于只有得到⽤户的授权，才能同意⼯单系统读取⽤户在订单管理平台上的订单记录。那么问题来了，⼯单系统怎样才能获得⽤户的授权呢？⾸先想到的⽅法就是⽤户将⾃⼰在订单管理平台上的⽤户名和密码告诉⼯单系统，然后⼯单系统通过⽤户名和密码登录到订单管理平台并读取⽤户的订单记录。⽅案虽然可⾏，但存在⼏个严重的缺点，具体如下。 <ul><li>⼯单系统为了开展后续的服务，会保存⽤户在订单管理平台上的密码，这样很不安全。如果⽤户密码不⼩⼼被泄露了，就会导致订单管理平台上的⽤户数据发⽣泄露。</li><li>⼯单系统拥有了获取⽤户存储在订单管理平台上所有资料的权限，⽤户⽆法限制⼯单系统获得授权的范围和有效期。</li><li>如果⽤户修改了订单管理平台的密码，那么⼯单系统⽆法正常访问订单管理平台，这会导致业务中断，但我们⼜⽆法限制⽤户修改密码。</li></ul></li><li>OAuth2协议 <ul><li>针对密码的安全性，在OAuth2协议中，密码还是由⽤户⾃⼰保管，避免了敏感信息的泄露。</li><li>授权具有明确的应⽤范围和有效期，⽤户可以根据需要限制⼯单系统获取授权信息的作⽤效果。</li><li>⽤户如果对⾃⼰的密码等身份凭证信息进⾏了修改，那么只要通过OAuth2协议重新进⾏⼀次授权即可，不会影响到相关联的其他第三⽅应⽤程序</li></ul></li></ul><h2 id="_28-2-oauth2协议的⻆色" tabindex="-1"><a class="header-anchor" href="#_28-2-oauth2协议的⻆色"><span>28.2. OAuth2协议的⻆⾊</span></a></h2><ul><li>4个核⼼⻆⾊，即资源拥有者（Resource Owner）、客户端（Client）、授权服务器（Authorization Server）和资源服务器（Resource Server）</li><li>OAuth2中的⻆⾊与现实的应⽤场景对应情况如下。 <ul><li>OAuth2协议把需要访问的接⼝或服务统称为资源, 每个资源都有⼀个拥有者，也就是⽤户。</li><li>第三⽅应⽤程序，通常被称为客户端。</li><li>服务提供商拥有⼀个资源服务器和⼀个授权服务器，资源服务器存放着⽤户资源，案例中的订单记录就是⼀种⽤户资源；⽽授权服务器的作⽤是完成针对⽤户的授权流程，并最终颁发⼀个令牌。</li></ul></li></ul><h2 id="_28-3-oauth2协议的令牌token" tabindex="-1"><a class="header-anchor" href="#_28-3-oauth2协议的令牌token"><span>28.3. OAuth2协议的令牌Token</span></a></h2><ul><li>令牌本质上也是⼀种代表⽤户身份的授权凭证，但与普通的⽤户名和密码信息不同，令牌具有针对资源的访问权限范围和有效期。如下所示的就是⼀种常⻅的令牌信息。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
 &quot;access_token&quot;: &quot;0efa61be-32ab-4351-9dga-8ab668ababae&quot;,
 &quot;token_type&quot;: &quot;bearer&quot;,
 &quot;refresh_token&quot;: &quot;738c42f6-79a6-457d-8d5a-f9eab0c7cc5e&quot;,
 &quot;expires_in&quot;: 43199,
 &quot;scope&quot;: &quot;webclient&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>access_token：代表OAuth2的令牌，当访问每个受保护的资源时，⽤户都需要携带该令牌以便进⾏验证。</li><li>token_type：代表令牌类型，OAuth2协议中有多种可选的令牌类型，包括bearer类型、mac类型等，</li><li>expires_in：⽤于指定access_token的有效时间，⼀旦超过该有效时间，access_token将会⾃动失效。</li><li>refresh_token：⽤于当access_token过期之后重新下发⼀个新的access_token。</li><li>scope：指定可访问的权限范围，这⾥指定的是访问Web资源的“webclient”。</li></ul><h2 id="_28-4-oauth2协议工作流程" tabindex="-1"><a class="header-anchor" href="#_28-4-oauth2协议工作流程"><span>28.4. OAuth2协议⼯作流程</span></a></h2><ul><li>客户端向⽤户请求授权，请求中⼀般包含资源的访问路径、对资源的操作类型等信息。如果⽤户同意授权，就会将这个授权返回给客户端</li><li>客户端获取⽤户的授权信息后，向授权服务器请求访问令牌</li><li>授权服务器向客户端发放访问令牌，这样客户端就能携带访问令牌访问资源服务器上的资源</li><li>资源服务器获取访问令牌之后，验证令牌的有效性和过期时间，并向客户端开放其所需要访问的资源<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/8456277523314143042f5.jpg" alt="oauth2.png"></li></ul><h2 id="_28-5-oauth2中access-token的秘密" tabindex="-1"><a class="header-anchor" href="#_28-5-oauth2中access-token的秘密"><span>28.5. OAuth2中ACCESS_TOKEN的秘密</span></a></h2><ul><li>ACCESS_TOKEN（JWT）中包含什么信息？</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>eyJraWQiOiIxNTRlOTE0MC01YWNhLTQ1M2YtYjA3My1iMjdiZjc5YzRhZDYiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiYXVkIjoibWVzc2FnaW5nLWNsaWVudCIsIm5iZiI6MTY2ODIxOTk0Nywic2NvcGUi
OlsibWVzc2FnZS5yZWFkIl0sImlzcyI6Imh0dHA6XC9cL2F1dGgtc2VydmVyOjgwODAiLCJleHAiOjE2NjgyMjAyNDcsImlhdCI6MTY2ODIxOTk0N30.bsmz7U51zQ4ubfmvE89NXvmpC5YNivK2JOC2MmncEw1xpY8xhXzJWnPH_4mysn60rsfoBBMWjecGdf5DQWmMRr2Nadeb
DCMlrX7SqC_vNdooUx1PIJDL8zrq06YSwC5qEmC5LbD6T3CroAcvPKkToZY4yfrV0mYL_5Y67lQCp0Se0Sqm7EwsfRw8qmd_WsiYC_4p-e4uhUyJMuYb_zSErpgEXSI6gOKWyLXcgVyH88PYyKE27LzF6e2olf7Wp8ZuXmIvwaa5Oh0U￾JCkjm2yezk_PLWSQmvcLeeeTnLGwsx_DQ67XV5GNANFMuyjlAqLrR1bEBIZO10Hjx9_-Qa6Yg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用Base64 Decode： <ul><li>第一部分：eyJraWQiOiIxNTRlOTE0MC01YWNhLTQ1M2YtYjA3My1iMjdiZjc5YzRhZDYiLCJhbGciOiJSUzI1NiJ9</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
    &quot;kid&quot;: &quot;154e9140-5aca-453f-b073-b27bf79c4ad6&quot;,
    &quot;alg&quot;: &quot;RS256&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>第二部分：eyJzdWIiOiJ1c2VyIiwiYXVkIjoibWVzc2FnaW5nLWNsaWVudCIsIm5iZiI6MTY2ODIxOTk0Nywic2NvcGUiOlsibWVzc2FnZS5yZWFkIl0sI148mlzcyI6Imh0dHA6XC9cL2F1dGgtc2VydmVyOjgwODAiLCJleHAiOjE2NjgyMjAyNDcsImlhdCI6MTY2ODIxOTk0N30</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
    &quot;sub&quot;: &quot;user&quot;,//⽤户名
    &quot;aud&quot;: &quot;messaging￾client&quot;,//客户端ClientId
    &quot;nbf&quot;: 1668219947,//（Not Before）声明-标识在此时间之前JWT标记“不得”被接受进⾏处理。
    &quot;scope&quot;: [//授权给客户端的应⽤范围
        &quot;message.read&quot;
    ],
    &quot;iss&quot;: &quot;http:\\/\\/auth-server:8080&quot;,//（Issuer）声明-颁发令牌的实体的名称。
    &quot;exp&quot;: 1668220247,//（Expire）-标识到期时间，在该时间或之后，JWT不得被接受进⾏处理。
    &quot;iat&quot;: 1668219947//（Issued At）声明-标识JWT标记的颁发时间。
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>第三部分签名，防篡改bsmz7U51zQ4ubfmvE89NXvmpC5YNivK2JOC2MmncEw1xpY8xhXzJWnPH_4mysn60rsfoBBMWjecGdf5DQWmMRr2NadebDCMlrX7Sq<br> C_vNdooUx1PIJDL8zrq06YSwC5qEmC5LbD6T3CroAcvPKkToZY4yfrV0mYL_5Y67lQCp0Se0Sqm7EwsfRw8qmd_WsiYC_4p￾e4uhUyJMuYb_zSErpgEXSI6gOKWyLXcgVyH88PYyKE27LzF6e2olf7Wp8ZuXmIvwaa5Oh0U-149JCkjm2yezk_PLWSQmvcLeeeTnLGwsx_DQ67XV5GNANFMuyjlAqLrR1bEBIZO10Hjx9_-Qa6Yg</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>授权服务器颁发JWT签名Sign=RS256(Base64Encode(第一部分) + Base64Encode(第二部分),&#39;私钥&#39;)
资源服务器重算JWT签名Sign=RS256(Base64Encode(第一部分) + Base64Encode(第二部分),&#39;公钥&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,35),D=e("li",null,"JWK全称是JSON Web KeyJWK在OIDC中的主要作⽤是为JWT(id_token)提供加密密钥，⽤于加密/解密或签名/验签，是JSON格式的数据。",-1),I={href:"https://tools.ietf.org/html/draft-ietf-jose-json?web-key-41#section-5",target:"_blank",rel:"noopener noreferrer"},F=e("li",null,"RSA算法是⼀种⾮对称加密算法，主要依靠分解⼤素数的复杂性来实现其安全性，由于⼤素数之积难被分解，因此该密码就难被破解",-1),L={href:"http://auth-server:8080/oauth2/jwks",target:"_blank",rel:"noopener noreferrer"},U=r(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{&quot;keys&quot;:[{&quot;kty&quot;:&quot;RSA&quot;,&quot;e&quot;:&quot;AQAB&quot;,&quot;kid&quot;:&quot;154e9140-5aca-453f-b073-b27bf79c4ad
6&quot;,&quot;n&quot;:&quot;twxxcQEWftZI87aO_BbTVVyMalD7utHUDFtnYI_EIQIh6SeVj07jq0ctTxVXnXppAHp
Wnw8wEpCeW3QUuSoFbhRrMyu1ZpKm6S4eORGIGwKYzNQezhVAQ2WFZHhQ7rwR4B2PQjR0PzpdVE
nlh_rY8rthpDukaX9ycr_2cSgd98vpC3EGP1cU99fRQy9QHsfXhHps4ZHMW2dNjmVuyO-Z0P2cV
SERz8issgRCMd_i8QumrotPC0C-5sRRYOqF7_b_JIN0s9Z-YTZGJQwsnVw8_vOzdXC5WvRvWpA_
mOAQ1ey9VzSc7FQDwrWpZcL3jgV2Fw9EiiugRJwggaXxXWEM1w&quot;}]}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在哪⾥配置rsa算法细节呢？在授权服务器SecurityConfig的<code>JWKSource&lt;SecurityContext&gt;</code>和generateRsaKey()</li></ul><h2 id="_28-6-如何理解oauth2-scope属性的作用" tabindex="-1"><a class="header-anchor" href="#_28-6-如何理解oauth2-scope属性的作用"><span>28.6. 如何理解OAuth2 Scope属性的作⽤</span></a></h2><ul><li>scope是 OAuth 2.0 中的⼀种机制，⽤于限制客户端应⽤程序对⽤户帐户的访问。客户端应⽤程序可以请求⼀个或多个scope， 资源拥有者（终端⽤户）可以对客户端应⽤程序请求的scope进⾏拒绝、部分接受，通常是全部接受。客户端获得的访问令牌access_token将包含⽤户最终指示的scope。该access_token将只能访问其包含的scope限定的的资源。</li><li><strong>除了配置文件外，鉴授权⼀定要加SCOPE_前缀</strong></li></ul><h1 id="_29-oauth2协议四种授权模式" tabindex="-1"><a class="header-anchor" href="#_29-oauth2协议四种授权模式"><span>29. Oauth2协议四种授权模式</span></a></h1><h2 id="_29-1-授权码模式-authorization-code" tabindex="-1"><a class="header-anchor" href="#_29-1-授权码模式-authorization-code"><span>29.1. 授权码模式（Authorization Code）</span></a></h2><ul><li>最严谨的，它考虑到了⼏乎所有敏感信息泄漏的预防和后果。 <ul><li>资源所有者：⽤户，⼀个⽤户⾃⼰写了多篇博客，这些博客被称为“资源”</li><li>操作代理：Web环境下，就是浏览器</li><li>第三⽅应⽤：博客园提供的前台程序（别名：Client客户端，类似于电商应⽤前台）</li><li>授权服务器：提供认证与授权的服务</li><li>资源服务器：“博客服务”服务器</li><li>不把授权码给操作代理是因为操作代理不安全，浏览器可能被劫持</li></ul></li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/e210c4891cc55a8948e0d.jpg" alt="authorizationcode.png" tabindex="0"><figcaption>authorizationcode.png</figcaption></figure><h2 id="_29-2-隐式授权模式-implicit" tabindex="-1"><a class="header-anchor" href="#_29-2-隐式授权模式-implicit"><span>29.2. 隐式授权模式（Implicit）</span></a></h2><ul><li>省略掉了通过授权码换取令牌的步骤，整个授权过程都不需要服务端⽀持，⼀步到位。代价是在隐式授权中，授权服务器不会再去验证第三⽅应⽤的身份，因为已经没有应⽤服务器了，ClientSecret没有⼈保管，也就没有存在的意义。但其实还是会限制第三⽅应⽤的回调URI地址必须与注册时提供的域名⼀致，尽管有可能被DNS污染之类的攻击所攻破。同样，隐式授权也不能避免令牌暴露给资源所有者，不能避免⽤户机器上可能出现的意图不轨的其他程序、HTTP的中间⼈攻击等⻛险了。交互过程⾥，隐式模式与授权码模式的显著区别是QQ授权服务器在得到⽤户授权后，直接返回了访问令牌，这显著降低了安全性，但OAuth2仍然努⼒以尽可能地做到相对安全，譬如在前⾯提到的隐式授权中，尽管不需要⽤到服务端，但仍然需要在注册时提供回调域名，此时会要求该域名与接受令牌的服务处于同⼀个域内。此外，同样基于安全考虑，在隐私模式中明确禁⽌发放刷新令牌。<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/3a464047a04095fe6f98b.jpg" alt="implicit.png"></li></ul><h2 id="_29-3-密码模式-resource-owner-password-credentials" tabindex="-1"><a class="header-anchor" href="#_29-3-密码模式-resource-owner-password-credentials"><span>29.3. 密码模式（Resource Owner Password Credentials）</span></a></h2><ul><li>授权码模式和隐私模式属于纯粹的授权模式与认证没有直接联系，即认证与授权是互相独⽴的过程。但在密码模式⾥，认证和授权就被整合到同⼀个过程中。原本的设计意图是仅限⽤于⽤户对第三⽅应⽤是⾼度可信任的场景中，因为⽤户需要把密码明⽂提供给第三⽅应⽤，由第三⽅以此向授权服务器获取令牌。这种⾼度可信的第三⽅是极为罕⻅的，在真实应⽤中极少遇到这样的情况，合理性依然⼗分有限。调⽤过程就是第三⽅应⽤拿着⽤户名和密码向授权服务器换令牌⽽已。<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/6c9cfaf05f296ca15b7e9.jpg" alt="ropc.png"></li></ul><h2 id="_29-4-客户端模式-client-credentials" tabindex="-1"><a class="header-anchor" href="#_29-4-客户端模式-client-credentials"><span>29.4. 客户端模式（Client Credentials）</span></a></h2><ul><li>客户端模式是指第三⽅应⽤以⾃⼰的名义，三⽅应⽤既是资源所有者，也是资源服务器，向授权服务器申请资源许可。微服务架构并不提倡同⼀个系统的各服务间有默认的信任关系，所以服务之间调⽤也需要先进⾏认证授权，然后才能通信。此时，客户端模式便是⼀种常⽤的服务间认证授权的解决⽅案。<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/17ef07afce874e0586bf3.jpg" alt="clientcredentials.png"></li></ul><h1 id="_30-spring-security-oauth2-分布式认证流程" tabindex="-1"><a class="header-anchor" href="#_30-spring-security-oauth2-分布式认证流程"><span>30. Spring Security Oauth2 分布式认证流程</span></a></h1><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/e46763636e8a7573c146d.png" alt="oauth2process.png" tabindex="0"><figcaption>oauth2process.png</figcaption></figure><h1 id="_31-构建oauth2认证授权中心" tabindex="-1"><a class="header-anchor" href="#_31-构建oauth2认证授权中心"><span>31. 构建OAuth2认证授权中⼼</span></a></h1>`,17),P={href:"https://spring.io/blog/2019/11/14/spring-security-oauth-2-0-roadmap-update",target:"_blank",rel:"noopener noreferrer"},N=e("li",null,"Spring 曾经有旧版⽀持 OAuth2 的⽅案：Spring Security OAuth 项⽬，该项⽬已经被逐步淘汰。但⽹上有不少仍然是这个⽅案，需要充分注意他们的区别。",-1),M=r(`<h2 id="_31-1-spring-authorization-server-授权中心构建-auth-server" tabindex="-1"><a class="header-anchor" href="#_31-1-spring-authorization-server-授权中心构建-auth-server"><span>31.1. Spring Authorization Server 授权中心构建(auth-server)</span></a></h2><ul><li>修改host，⽤于区分⻆⾊，也⽤于避免cookie同域覆盖的问题</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>127.0.0.1 auth-server
127.0.0.1 res-server
127.0.0.1 client
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>pom.xml</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;dependency&gt;
  &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
  &lt;artifactId&gt;spring-boot-starter-security&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
  &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
  &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
  &lt;groupId&gt;org.springframework.security&lt;/groupId&gt;
  &lt;artifactId&gt;spring-security-oauth2-authorization-server&lt;/artifactId&gt;
  &lt;version&gt;0.3.1&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>SecurityConfig授权服务器配置类</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package com.itlaoqi.authserver.security;
import com.nimbusds.jose.jwk.JWKSet;
import com.nimbusds.jose.jwk.RSAKey;
import com.nimbusds.jose.jwk.source.ImmutableJWKSet;
import com.nimbusds.jose.jwk.source.JWKSource;
import com.nimbusds.jose.proc.SecurityContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.OAuth2AuthorizationServerConfiguration;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.oauth2.core.AuthorizationGrantType;
import org.springframework.security.oauth2.core.ClientAuthenticationMethod;
import org.springframework.security.oauth2.core.oidc.OidcScopes;
import org.springframework.security.oauth2.server.authorization.client.InMemoryRegisteredClientRepository;
import org.springframework.security.oauth2.server.authorization.client.RegisteredClient;
import org.springframework.security.oauth2.server.authorization.client.RegisteredClientRepository;
import org.springframework.security.oauth2.server.authorization.config.ClientSettings;
import org.springframework.security.oauth2.server.authorization.config.ProviderSettings;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.LoginUrlAuthenticationEntryPoint;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;
import java.util.UUID;
@Configuration
@EnableWebSecurity
public class SecurityConfig {
  @Bean
  @Order(1)
  public SecurityFilterChain authorizationServerSecurityFilterChain(HttpSecurity http) throws Exception {
    OAuth2AuthorizationServerConfiguration.applyDefaultSecurity(http);
    //设置默认的登录⻚⾯地址
    http.exceptionHandling((exceptions) -&gt; exceptions
      .authenticationEntryPoint(
      new LoginUrlAuthenticationEntryPoint(&quot;/login&quot;))
    );
    return http.build();
  }

  /**
  * 这个也是个Spring Security的过滤器链，⽤于Spring Security的身份认证。
  * @param http
  * @return
  * @throws Exception
  */
  @Bean
  @Order(2)
  public SecurityFilterChain defaultSecurityFilterChain(HttpSecurity http) throws Exception {
    http.authorizeHttpRequests((authorize) -&gt; authorize
      .anyRequest().authenticated())
      //采⽤表单认证⽅式
      .formLogin(Customizer.withDefaults());
    return http.build();
  }
  /**
  * 配置⽤户信息，或者配置⽤户数据来源，主要⽤于⽤户的检索。
  * @return
  */
  @Bean
  public UserDetailsService userDetailsService() {
    UserDetails userDetails = User.withDefaultPasswordEncoder()
      .username(&quot;user&quot;)
      .password(&quot;password&quot;)
      .roles(&quot;USER&quot;)
      .build();
    return new InMemoryUserDetailsManager(userDetails);
  }
  /**
  * oauth2 ⽤于第三⽅认证，RegisteredClientRepository 主要⽤于管理第三⽅（每个第三⽅就是⼀个客户端）
  * @return
  */
  @Bean
  public RegisteredClientRepository registeredClientRepository() {
    RegisteredClient registeredClient = RegisteredClient.withId(UUID.randomUUID().toString())
      .clientId(&quot;messaging-client&quot;)
      .clientSecret(&quot;{noop}secret&quot;) //不加密
      //客户端接⼊通过SECRET密码认证⽅式接⼊
      .clientAuthenticationMethod(ClientAuthenticationMethod.CLIENT_SECRET_BASIC)
      //客户端允许使⽤的授权模式，授权码模式、Refresh_Token刷新令牌、客户端认证
      .authorizationGrantType(AuthorizationGrantType.AUTHORIZATION_CODE)
      .authorizationGrantType(AuthorizationGrantType.REFRESH_TOKEN)
      .authorizationGrantType(AuthorizationGrantType.CLIENT_CREDENTIALS)
      //此客户端允许跳转的URI注册地址
      .redirectUri(&quot;http://auth-server:8080/authorized&quot;)
      .redirectUri(&quot;http://client:8082/login/oauth2/code/demo&quot;)
      //此客户端允许使⽤的授权范围
      .scope(&quot;message.read&quot;)
      .scope(&quot;message.write&quot;)
      //是否开启⽤户⼿动确认，fasle为⾃动确认
      .clientSettings(ClientSettings.builder().requireAuthorizationConsent(false).build())
      .build();
    return new InMemoryRegisteredClientRepository(registeredClient);
  }
  /**
  * 通过⾮对称加密⽣成ACCESS_TOKEN(JWT)的签名部分。
  * @return
  */
  @Bean
  public JWKSource&lt;SecurityContext&gt; jwkSource() {
    KeyPair keyPair = generateRsaKey();
    RSAPublicKey publicKey = (RSAPublicKey) keyPair.getPublic();
    RSAPrivateKey privateKey = (RSAPrivateKey) keyPair.getPrivate();
    RSAKey rsaKey = new RSAKey.Builder(publicKey)
        .privateKey(privateKey)
        .keyID(UUID.randomUUID().toString())
        .build();
    JWKSet jwkSet = new JWKSet(rsaKey);
    return new ImmutableJWKSet&lt;&gt;(jwkSet);
  }
  /**
  * ⽣成秘钥对，为jwkSource提供服务，私钥服务器⾃身持有，公钥对外开放。
  * @return
  */
  private static KeyPair generateRsaKey() {
    KeyPair keyPair;
    try {
      KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInsta
      nce(&quot;RSA&quot;);
      keyPairGenerator.initialize(2048);
      keyPair = keyPairGenerator.generateKeyPair();
    } catch (Exception ex) {
      throw new IllegalStateException(ex);
    }
    return keyPair;
  }
  /**
  * 配置Authorization Server Provider实例，默认配置即可
  * @return
  */
  @Bean
  public ProviderSettings providerSettings() {
    return ProviderSettings.builder().build();
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>application.yml</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 开启Debug⽇志纯粹为了⽅便调试
logging:
 level:
 root: debug
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>接收授权码的Controller（测试接收授权码并显示在浏览器上）</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package com.itlaoqi.authserver.controller;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.security.Principal;
import java.util.LinkedHashMap;
import java.util.Map;
@RestController
public class AuthController {
  @GetMapping(&quot;/authorized&quot;)
  public String getGrantCode(String code){
    return code;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>验证</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1.发起授权请求并跳转到登陆地址
http://auth-server:8080/oauth2/authorize?response_type=code&amp;client_id=messaging-client&amp;scope=message.read&amp;redirect_uri=http://auth-server:8080/authorized
2.登陆
3.确认授权操作并从AuthController获取授权码
http://auth-server:8080/authorized?
code=tr8ZTfusWZPVIc4TLKVSiE6lqIrooSH8L_XeWP6XSViS0DrCasJilojA1PKt93AIXCBfmYbbimh6YwqzEhWJCUf8H0EVL509nYr￾RbZPnt6NQsDdhJtFOI64jWrnih9b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_31-2-构建oauth2资源服务器-res-server" tabindex="-1"><a class="header-anchor" href="#_31-2-构建oauth2资源服务器-res-server"><span>31.2. 构建OAuth2资源服务器(res-server)</span></a></h2><ul><li>pom.xml</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;dependency&gt;
  &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
  &lt;artifactId&gt;spring-boot-starter-oauth2-resource-server&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
  &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
  &lt;artifactId&gt;spring-boot-starter-security&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
  &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
  &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
  &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;
  &lt;artifactId&gt;lombok&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>application.yml</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>server:
  port: 8081
logging:
  level:
    root: debug
spring:
  security:
    oauth2:
      resourceserver:
      jwt:
        #获取公钥的路径
        jwk-set-uri: http://auth-server:8080/oauth2/jwks
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Product实体类</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package com.example.resserver.entity;
import java.util.Date;
import java.util.UUID;
import lombok.Data;
@Data
public class Product {

    private String id;
    private String name;
    private String description;
    private float price;
    private String currency;

    public static Product from(String name, String description, float price, String currency) {
        Product product = new Product();
        product.setName(name);
        product.setDescription(description);
        product.setPrice(price);
        product.setCurrency(currency);

        product.setId(UUID.randomUUID().toString());
        return product;
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>ProductController</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package com.example.resserver.controller;
import com.example.resserver.entity.Product;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.security.Principal;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
@RestController
public class ProductController {
    private List&lt;Product&gt; products = new ArrayList&lt;&gt;();
    public ProductController() {
        products.add(Product.from(&quot;Men&#39;s Shoes (White)&quot;, &quot;White color men&#39;s shoes&quot;, 100, &quot;USD&quot;));
        products.add(Product.from(&quot;TShirt (Blue)&quot;, &quot;Blue color t-shirt&quot;, 55, &quot;USD&quot;));
        products.add(Product.from(&quot;TShirt (White)&quot;, &quot;White color t-shirt&quot;, 50, &quot;USD&quot;));
        products.add(Product.from(&quot;Short (White)&quot;, &quot;White color short&quot;, 60, &quot;USD&quot;));
        products.add(Product.from(&quot;Short (Black)&quot;, &quot;Black color short&quot;, 55, &quot;USD&quot;));
    }
    //资源接口
    @GetMapping(&quot;/products&quot;)
    public List&lt;Product&gt; getProducts() {
        return products;
    }

    //获取用户信息
    @GetMapping(value = &quot;/sso/user&quot;)
    public Map&lt;String, String&gt; user(Principal principal) {
        if (principal != null) {
            Map&lt;String, String&gt; map = new LinkedHashMap&lt;&gt;();
            map.put(&quot;name&quot;, principal.getName());
            return map;
        }
        return null;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>JWTSecurityConfig启用JWT格式的ACCESS_TOKEN</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package com.example.resserver.security;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
@Configuration
public class JWTSecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.authorizeRequests(
                        (authz) -&gt; authz.anyRequest()
                                .authenticated())
                .oauth2ResourceServer(oauth2 -&gt; oauth2.jwt());//令牌格式为jwt
        return http.build();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>验证脚本</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>### 1.兑换令牌ACCESS_TOKEN
POST http://auth-server:8080/oauth2/token
Content-Type: application/x-www-form-urlencoded
#Base64(messaging-client:secret)
Authorization: basic bWVzc2FnaW5nLWNsaWVudDpzZWNyZXQ=
#redirect_uri=http://auth-server:8080/authorized&amp;grant_type=authorization_code&amp;code={上一步的code授权码}
redirect_uri=http://auth-server:8080/authorized&amp;grant_type=authorization_code&amp;code=xdUFR0qg-0t5M-cFQhVmiktRyU1kq08GmcvngmEgywWUP7Iv0GkFC6T4T-CslCrcQ7N7PZHYacMejgGQEXufMWdGD68d7FBM3S7LqDPQD0nVqz-OJLYz9HS3FzTMmKhA

# 结果
{
  &quot;access_token&quot;:&quot;eyJraWQiOiIxNTRlOTE0MC01YWNhLTQ1M2YtYjA3My1iMjdiZjc5YzRhZDYiLCJhbGciOiJSUzI1NiJ9eyJzdWIiOiJ1c2VyIiwiYXVkIjoibWVzc2FnaW5nLWNsaWVudCIsIm5iZiI6MTY2ODIxOTk0Nywic2NvcGUiOlsibWVzc2FnZS5yZWFkIl0sImlzcyI6Imh0dHA6XC9cL2F1dGgtc2VydmVyOjgwODAiLCJleHAiOjE2NjgyMjAyNDcsImlhdCI6MTY2ODIxOTk0N30.bsmz7U51zQ4ubfmvE89NXvmpC5YNivK2JOC2MmncEw1xpY8xhXzJWnPH_4mysn60rsfoBBMWjecGdf5DQWmMRr2NadebDCMlrX7SqC_vNdooUx1PIJDL8zrq06YSwC5qEmC5LbD6T3CroAcvPKkToZY4yfrV0mYL_5Y67lQCp0Se0Sqm7EwsfRw8qmd_WsiYC_4p-e4uhUyJMuYb_zSErpgEXSI6gOKWyLXcgVyH88PYyKE27LzF6e2olf7Wp8ZuXmIvwaa5Oh0U-JCkjm2yezk_PLWSQmvcLeeeTnLGwsx_DQ67XV5GNANFMuyjlAqLrR1bEBIZO10Hjx9_-Qa6Yg&quot;,
  &quot;refresh_token&quot;: &quot;lp1IugY12VoxFKv8BD3ZXtnL7S3wSmJDOF54msl-zKbuqDaQmaZ5P1jLb_Y02D8JVnizxqluJNe8aVPq1Y7-6J0I0nGlY5PJlyopuQTEvoROpZwmEyuJJFyokKU1Q4hR&quot;,
  &quot;scope&quot;: &quot;message.read&quot;,
  &quot;token_type&quot;: &quot;Bearer&quot;,
  &quot;expires_in&quot;: 300
}

### 2.附加Bearer访问资源API
GET http://res-server:8081/products
#Authorization: Bearer {token}
Authorization: Bearer eyJraWQiOiI4MDYxYjYzYy1iOTgyLTRjNTctOWExYy03NGMyNDIyZThhNzgiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiYXVkIjoibWVzc2FnaW5nLWNsaWVudCIsIm5iZiI6MTY2ODE1NjgwNCwic2NvcGUiOlsibWVzc2FnZS5yZWFkIl0sImlzcyI6Imh0dHA6XC9cL2F1dGgtc2VydmVyOjgwODAiLCJleHAiOjE2NjgxNTcxMDQsImlhdCI6MTY2ODE1NjgwNH0.jjEsGNuT7cOjw5V6CPcrYAcen7S9npH5x_DjBwrdcIjQeoVYQT2pZP_RmsDOvwV8wksHuJVVJyRuYqOfjqlQTbQWtPtMyqysiBBJ6dQVJ1Ed3rBK2Uc8vyL5TqYyhlEXajH-U-1gc5R0cVUIbq1smyclYx-ZFtFoh1Kz4OEn2kX5KE1gmqhHApwGmYpRFQtQku8CeQPT4NaObRci1gKyIFfzzd-pVuJYbm_kJTQ2LKHzPmr-PTupt3mFUrs2ouvvyh0pSE1ohak9J0o5V62mLM-7Mc_m7A6rej-qGIaKCpRh9OwVdYeYrg2goj4VQ5ciSHyZxCuXJIgFT75V2HVfNg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_31-3-构建oauth2客户端client" tabindex="-1"><a class="header-anchor" href="#_31-3-构建oauth2客户端client"><span>31.3. 构建OAuth2客户端client</span></a></h2><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/adea22ea63fba2c1cf89a.jpg" alt="oauth2client.png" tabindex="0"><figcaption>oauth2client.png</figcaption></figure><ul><li>在资源服务器增加接⼝，⽤于返回当前ACCESS_TOKEN中包含的⽤户名</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package com.itlaoqi.resserver.controller;
import com.itlaoqi.resserver.entity.Product;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.security.Principal;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
@RestController
public class ProductController {
  ...
  //获取⽤户信息
  @GetMapping(value = &quot;/sso/user&quot;)
  public Map&lt;String, String&gt; user(Principal principal) {
    if (principal != null) {
      Map&lt;String, String&gt; map = new LinkedHashMap&lt;&gt;();
      map.put(&quot;name&quot;, principal.getName());
      return map;
    }
    return null;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>客户端-pom.xml</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;dependency&gt;
  &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
  &lt;artifactId&gt;spring-boot-starter-oauth2-client&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
  &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
  &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
  &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
  &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;
  &lt;scope&gt;test&lt;/scope&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
  &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;
  &lt;artifactId&gt;lombok&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>客户端-application.yml</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>spring:
  security:
    oauth2:
      client:
        registration:
          demo:
            client-id: messaging-client
            client-secret: secret
            provider: demo-provider
            authorization-grant-type: authorization_code
            #redirect-uri http://client:8082/login/oauth2/code/{profile-name}
            redirect-uri: http://client:8082/login/oauth2/code/demo
            scope:
              - message.read
        provider:
          demo-provider:
            authorization-uri: http://auth-server:8080/oauth2/authorize
            token-uri: http://auth-server:8080/oauth2/token
            user-info-uri: http://res-server:8081/sso/user
            user-name-attribute: name
  codec:
    log-request-details: true
server:
  port: 8082
logging:
  level:
    root: debug
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>客户端-SecurityConfig</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package com.example.client.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.authorizeRequests()
         .anyRequest().authenticated()
         .and()
         .oauth2Login();
        return http.build();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>客户端-新增RestTemplate Bean⽤于远程访问</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package com.example.client;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;
@SpringBootApplication
public class ClientApplication {
  @Bean
  public RestTemplate restTemplate(){
    return new RestTemplate();
  }
  public static void main(String[] args) {
    SpringApplication.run(ClientApplication.class, args);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>测试</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package com.example.client.controller;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.*;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.annotation.RegisteredOAuth2AuthorizedClient;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import javax.annotation.Resource;

@RestController
@Slf4j
public class HelloController {
    @Resource
    private RestTemplate restTemplate;
    //获得token，可选
    @GetMapping(&quot;/token&quot;)
    public String token(@RegisteredOAuth2AuthorizedClient OAuth2AuthorizedClient authorizedClient) {
        return authorizedClient.getAccessToken().getTokenValue();
    }

    @GetMapping(&quot;/product&quot;)
    public String product(@RegisteredOAuth2AuthorizedClient OAuth2AuthorizedClient authorizedClient) {
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(authorizedClient.getAccessToken().getTokenValue());
        HttpEntity&lt;String&gt; request = new HttpEntity&lt;&gt;(&quot;Product&quot;, headers);
        ResponseEntity&lt;String&gt; exchange = restTemplate.exchange(&quot;http://res-server:8081/products&quot;, HttpMethod.GET, request, String.class);
        String result = exchange.getBody();
        return result;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>测试</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1.访问:http://client:8082/product
2.登陆授权
3.得到结果
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_32-基于mysql管理授权中心数据" tabindex="-1"><a class="header-anchor" href="#_32-基于mysql管理授权中心数据"><span>32. 基于MySQL管理授权中⼼数据</span></a></h1><ul><li>默认PostgreSQL建表脚本</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Spring Security的建表语句在org/springframework/security/core/userdetails/jdbc/users.ddl
Spring authorization Server的建表⽂件在：
org/springframework/security/oauth2/server/authorization/oauth2-authorization-consent-schema.sql
org/springframework/security/oauth2/server/authorization/oauth2-authorization-schema.sql
org/springframework/security/oauth2/server/authorization/client/oauth2-registered-client-schema.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>改造后的MySQL脚本</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#users⽤户表UserDetails
create table users(
  username varchar(50) not null primary key,
  password varchar(500) not null,
  enabled boolean not null
);
#authorities⽤户权限表
create table authorities (
  username varchar(50) not null,authority varchar(50) not null,
  constraint fk_authorities_users foreign key(username) references users(username)
);
create unique index ix_auth_username on authorities (username,authority);
#oauth2_authorization_consent⽤户⼿动确认授权同意书
CREATE TABLE oauth2_authorization_consent (
 registered_client_id varchar(100) NOT NULL,
 principal_name varchar(200) NOT NULL,
 authorities varchar(1000) NOT NULL,
 PRIMARY KEY (registered_client_id, principal_name)
);
/*
IMPORTANT:
 If using PostgreSQL, update ALL columns defined with &#39;blob&#39; to &#39;text&#39;,
 as PostgreSQL does not support the &#39;blob&#39; data type.
*/
# oauth2_authorization客户端授权记录表（包含授权码、JWT等信息）
CREATE TABLE oauth2_authorization (
 id varchar(100) NOT NULL,
 registered_client_id varchar(100) NOT NULL,
 principal_name varchar(200) NOT NULL,
 authorization_grant_type varchar(100) NOT NULL,
 attributes blob DEFAULT NULL,
 state varchar(500) DEFAULT NULL,
 authorization_code_value blob DEFAULT NULL,
 authorization_code_issued_at timestamp DEFAULT NULL,
 authorization_code_expires_at timestamp DEFAULT NULL,
 authorization_code_metadata blob DEFAULT NULL,
 access_token_value blob DEFAULT NULL,
 access_token_issued_at timestamp DEFAULT NULL,
 access_token_expires_at timestamp DEFAULT NULL,
 access_token_metadata blob DEFAULT NULL,
 access_token_type varchar(100) DEFAULT NULL,
 access_token_scopes varchar(1000) DEFAULT NULL,
 oidc_id_token_value blob DEFAULT NULL,
 oidc_id_token_issued_at timestamp DEFAULT NULL,
 oidc_id_token_expires_at timestamp DEFAULT NULL,
 oidc_id_token_metadata blob DEFAULT NULL,
 refresh_token_value blob DEFAULT NULL,
 refresh_token_issued_at timestamp DEFAULT NULL,
 refresh_token_expires_at timestamp DEFAULT NULL,
 refresh_token_metadata blob DEFAULT NULL,
 PRIMARY KEY (id)
);
# oauth2_registered_client客户端注册信息表
CREATE TABLE oauth2_registered_client (
 id varchar(100) NOT NULL,
 client_id varchar(100) NOT NULL,
 client_id_issued_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
 client_secret varchar(200) DEFAULT NULL,
 client_secret_expires_at timestamp DEFAULT NULL,
 client_name varchar(200) NOT NULL,
 client_authentication_methods varchar(1000) NOT NULL,
 authorization_grant_types varchar(1000) NOT NULL,
 redirect_uris varchar(1000) DEFAULT NULL,
 scopes varchar(1000) NOT NULL,
 client_settings varchar(2000) NOT NULL,
 token_settings varchar(2000) NOT NULL,
 PRIMARY KEY (id)
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>授权服务器auth-server,pom.xml新增依赖</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;dependency&gt;
 &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
 &lt;artifactId&gt;spring-boot-starter-jdbc&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
 &lt;groupId&gt;mysql&lt;/groupId&gt;
 &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;
 &lt;version&gt;8.0.30&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>授权服务器auth-server配置数据源application.yml</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>logging:
  level:
    root: debug
#TODO
spring:
  datasource:
    #配置数据源
    url: jdbc:mysql://192.168.31.190:3306/oauth2
    driver-class-name: com.mysql.cj.jdbc.Driver
    username: root
    password: root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>授权服务器auth-server,SecurityConfig，修改UserDetailsService，RegisteredClientRepository，添加OAuth2AuthorizationService，OAuth2AuthorizationConsentService</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package com.example.authserver.security;

import com.nimbusds.jose.jwk.JWKSet;
import com.nimbusds.jose.jwk.RSAKey;
import com.nimbusds.jose.jwk.source.ImmutableJWKSet;
import com.nimbusds.jose.jwk.source.JWKSource;
import com.nimbusds.jose.proc.SecurityContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.OAuth2AuthorizationServerConfiguration;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.oauth2.core.AuthorizationGrantType;
import org.springframework.security.oauth2.core.ClientAuthenticationMethod;
import org.springframework.security.oauth2.core.oidc.OidcScopes;
import org.springframework.security.oauth2.server.authorization.JdbcOAuth2AuthorizationConsentService;
import org.springframework.security.oauth2.server.authorization.JdbcOAuth2AuthorizationService;
import org.springframework.security.oauth2.server.authorization.OAuth2AuthorizationConsentService;
import org.springframework.security.oauth2.server.authorization.OAuth2AuthorizationService;
import org.springframework.security.oauth2.server.authorization.client.InMemoryRegisteredClientRepository;
import org.springframework.security.oauth2.server.authorization.client.JdbcRegisteredClientRepository;
import org.springframework.security.oauth2.server.authorization.client.RegisteredClient;
import org.springframework.security.oauth2.server.authorization.client.RegisteredClientRepository;
import org.springframework.security.oauth2.server.authorization.config.ClientSettings;
import org.springframework.security.oauth2.server.authorization.config.ProviderSettings;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.LoginUrlAuthenticationEntryPoint;

import javax.sql.DataSource;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;
import java.util.UUID;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    ...
    /**
     * 配置用户信息，或者配置用户数据来源，主要用于用户的检索。
     *
     * @return
     */
/*    @Bean
    public UserDetailsService userDetailsService() {
        UserDetails userDetails = User.withDefaultPasswordEncoder()
                .username(&quot;user&quot;)
                .password(&quot;password&quot;)
                .roles(&quot;USER&quot;)
                .build();

        return new InMemoryUserDetailsManager(userDetails);
    }*/

    @Autowired
    //数据源
    private DataSource dataSource;
    //注入JdbcUserDetailsManager，用来实现用户的CRUD功能
    @Bean
    public UserDetailsService userDetailsService() {
        return new JdbcUserDetailsManager(dataSource);
    }

    /**
     * oauth2 用于第三方认证，RegisteredClientRepository 主要用于管理第三方（每个第三方就是一个客户端）
     *
     * @return
     */
    /*@Bean
    public RegisteredClientRepository registeredClientRepository() {
        RegisteredClient registeredClient = RegisteredClient.withId(UUID.randomUUID().toString())
                .clientId(&quot;messaging-client&quot;)
                .clientSecret(&quot;{noop}secret&quot;) //不加密
                //客户端接入通过SECRET密码认证方式接入
                .clientAuthenticationMethod(ClientAuthenticationMethod.CLIENT_SECRET_BASIC)
                //客户端允许使用的授权模式，授权码模式、Refresh_Token刷新令牌、客户端认证
                .authorizationGrantType(AuthorizationGrantType.AUTHORIZATION_CODE)
                .authorizationGrantType(AuthorizationGrantType.REFRESH_TOKEN)
                .authorizationGrantType(AuthorizationGrantType.CLIENT_CREDENTIALS)
                //此客户端允许跳转的URI注册地址
                .redirectUri(&quot;http://auth-server:8080/authorized&quot;)
                .redirectUri(&quot;http://client:8082/login/oauth2/code/demo&quot;)
                //此客户端允许使用的授权范围
                .scope(&quot;message.read&quot;)
                .scope(&quot;message.write&quot;)
                //是否开启用户手动确认，fasle为自动确认
                .clientSettings(ClientSettings.builder().requireAuthorizationConsent(false).build())
                .build();

        return new InMemoryRegisteredClientRepository(registeredClient);
    }*/

    @Autowired
    JdbcTemplate jdbcTemplate;
    @Bean
    //注册客户端仓库，提供了客户端CRUD功能
    public RegisteredClientRepository registeredClientRepository() {
        return new JdbcRegisteredClientRepository(jdbcTemplate);
    }

    ...
    @Bean
    //OAuth2授权服务（JDBC）
    public OAuth2AuthorizationService authorizationService() {
        return new JdbcOAuth2AuthorizationService(jdbcTemplate, registeredClientRepository());
    }

    @Bean
    //OAuth2授权同意书服务
    public OAuth2AuthorizationConsentService authorizationConsentService() {
        return new JdbcOAuth2AuthorizationConsentService(jdbcTemplate, registeredClientRepository());
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>添加测试用户和客户端</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package com.example.authserver;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.core.AuthorizationGrantType;
import org.springframework.security.oauth2.core.ClientAuthenticationMethod;
import org.springframework.security.oauth2.server.authorization.client.RegisteredClient;
import org.springframework.security.oauth2.server.authorization.client.RegisteredClientRepository;
import org.springframework.security.oauth2.server.authorization.config.ClientSettings;
import org.springframework.security.provisioning.UserDetailsManager;

import java.util.UUID;

@SpringBootTest
class AuthServerApplicationTests {

    @Test
    void contextLoads() {
    }

    @Autowired
    private UserDetailsManager userDetailsManager;

    /**
     * 创建用户信息
     */
//    TODO
    @Test
    void testSaveUser() {
        UserDetails userDetails = User.builder().passwordEncoder(s -&gt; &quot;{bcrypt}&quot; + new BCryptPasswordEncoder().encode(s))
                .username(&quot;user&quot;)
                .password(&quot;password&quot;)
                .roles(&quot;USER&quot;)
                .build();
        userDetailsManager.createUser(userDetails);
    }

    @Autowired
    private RegisteredClientRepository registeredClientRepository;

    @Test//新增客户端
    void testSaveClient() {
        RegisteredClient registeredClient = RegisteredClient.withId(UUID.randomUUID().toString())
                .clientId(&quot;messaging-client&quot;)
                .clientSecret(&quot;{bcrypt}&quot; + new BCryptPasswordEncoder().encode(&quot;secret&quot;))
                .clientAuthenticationMethod(ClientAuthenticationMethod.CLIENT_SECRET_BASIC)
                .authorizationGrantType(AuthorizationGrantType.AUTHORIZATION_CODE)
                .authorizationGrantType(AuthorizationGrantType.REFRESH_TOKEN)
                .authorizationGrantType(AuthorizationGrantType.CLIENT_CREDENTIALS)
                .redirectUri(&quot;http://auth-server:8080/authorized&quot;)
                .redirectUri(&quot;http://client:8082/login/oauth2/code/demo&quot;)
                .scope(&quot;message.read&quot;)
                .scope(&quot;message.write&quot;)
                .clientSettings(ClientSettings.builder().requireAuthorizationConsent(true).build())
                .build();
        registeredClientRepository.save(registeredClient);
    }

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>后续测试步骤与客户端测试一致</li></ul><h1 id="_33-access-token附加⻆色roles数据" tabindex="-1"><a class="header-anchor" href="#_33-access-token附加⻆色roles数据"><span>33. ACCESS_TOKEN附加⻆⾊ROLES数据</span></a></h1><ul><li>授权服务器auth-server，SecurityConfig配置增加JWT扩展对象</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@Bean
OAuth2TokenCustomizer&lt;JwtEncodingContext&gt; jwtCustomizer() {
  return context -&gt; {
    //判断JWT类型是否为ACCESS_TOKEN
    if (context.getTokenType() == OAuth2TokenType.ACCESS_TOKEN) {
      //获得认证对象，即当前登录的⽤户
      Authentication principal = context.getPrincipal();
      List roles = new ArrayList&lt;&gt;();
      //得到该⽤户所有的权限信息，即ROLE⻆⾊，循环遍历放⼊roles集合
      for (GrantedAuthority authority : principal.getAuthorities())
      {
        roles.add(authority.getAuthority());
      }
      //写⼊JWT
      /*
      Payload
      {&quot;sub&quot;:&quot;user&quot;,&quot;aud&quot;:&quot;messaging-client&quot;,&quot;nbf&quot;:1669021408,
      &quot;scope&quot;:[&quot;message.read&quot;],&quot;roles&quot;:[&quot;ROLE_USER&quot;],
      &quot;iss&quot;:&quot;http:\\/\\/auth-server:8080&quot;,&quot;exp&quot;:1669021708,&quot;iat&quot;:16690
      21408}
      */
      context.getClaims().claim(&quot;roles&quot;, roles);
    }
  };
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>资源服务器res-server新增JWT转换器，⽤于获取ROLES数据</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package com.example.resserver.security;
import org.springframework.core.convert.converter.Converter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.jwt.Jwt;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
public class JwtRoleConverter implements Converter&lt;Jwt, Collection&lt;GrantedAuthority&gt; &gt; {
  @Override
  public Collection convert (Jwt jwt) {
    List&lt;String&gt; roles = (ArrayList) jwt.getClaims().get(&quot;roles&quot;) ;
    if ( roles == null || roles.isEmpty ()) {
      return new ArrayList &lt;&gt;() ;
    }
    List&lt;GrantedAuthority&gt; authorityList = new ArrayList&lt;&gt;();
    for(String role : roles){
      authorityList.add(new SimpleGrantedAuthority(role));
    }
    return authorityList;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在JWTSecurityConfig对象启⽤JWT转换器解析ROLES，并完成授权</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>JwtAuthenticationConverter jwtAuthenticationConverter = new JwtAuthenticationConverter () ;
jwtAuthenticationConverter.setJwtGrantedAuthoritiesConverter(new JwtRoleConverter()) ;
...
oauth2.jwt().jwtAuthenticationConverter(jwtAuthenticationConverter)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package com.example.resserver.security;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.config.annotation.web.builders.HttpSec
urity;
import org.springframework.security.oauth2.server.resource.authentication.
JwtAuthenticationConverter;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.AccessDeniedHandler;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
@Configuration
public class JWTSecurityConfig {
  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http.exceptionHandling().accessDeniedHandler(new AccessDeniedHandler() {
    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException accessDeniedException) throws IOException, ServletException {
      response.getWriter().println(&quot;{code:403,msg:Access is denied}&quot;);
    }
  });
 JwtAuthenticationConverter jwtAuthenticationConverter = new JwtAuthenticationConverter () ;
 jwtAuthenticationConverter.setJwtGrantedAuthoritiesConverter(new JwtRoleConverter()) ;
 http.authorizeRequests(
  (authz) -&gt; authz
    .mvcMatchers(&quot;/products&quot;).access(&quot;hasRole(&#39;USER&#39;)&quot;)
    .anyRequest().authenticated())
    .oauth2ResourceServer(oauth2 -&gt; oauth2.jwt().jwtAuthenticationConverter(jwtAuthenticationConverter));
    return http.build();
 }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_34-oauth2与rbac协同作业" tabindex="-1"><a class="header-anchor" href="#_34-oauth2与rbac协同作业"><span>34. OAuth2与RBAC协同作业</span></a></h1><ul><li>RBAC建表监本</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;
-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS \`role\`;
CREATE TABLE \`role\` (
 \`role_id\` int NOT NULL AUTO_INCREMENT,
 \`role_name\` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
 PRIMARY KEY (\`role_id\`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;
-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO \`role\` VALUES (1, &#39;USER&#39;);
INSERT INTO \`role\` VALUES (2, &#39;ADMIN&#39;);
-- ----------------------------
-- Table structure for role_url_mapping
-- ----------------------------
DROP TABLE IF EXISTS \`role_url_mapping\`;
CREATE TABLE \`role_url_mapping\` (
 \`ru_id\` int NOT NULL AUTO_INCREMENT,
 \`role_id\` int NOT NULL,
 \`url_id\` int NOT NULL,
 PRIMARY KEY (\`ru_id\`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;
-- ----------------------------
-- Records of role_url_mapping
-- ----------------------------
INSERT INTO \`role_url_mapping\` VALUES (1, 1, 1);
INSERT INTO \`role_url_mapping\` VALUES (2, 1, 2);
INSERT INTO \`role_url_mapping\` VALUES (3, 2, 3);
INSERT INTO \`role_url_mapping\` VALUES (4, 1, 4);
INSERT INTO \`role_url_mapping\` VALUES (5, 2, 4);
-- ----------------------------
-- Table structure for url_resource
-- ----------------------------
DROP TABLE IF EXISTS \`url_resource\`;
CREATE TABLE \`url_resource\` (
 \`url_id\` int NOT NULL AUTO_INCREMENT,
 \`url_pattern\` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
 \`namespace\` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
 PRIMARY KEY (\`url_id\`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;
-- ----------------------------
-- Records of url_resource
-- ----------------------------
INSERT INTO \`url_resource\` VALUES (1, &#39;/products&#39;, &#39;res-sample&#39;);
INSERT INTO \`url_resource\` VALUES (2, &#39;/user/*&#39;, &#39;res-sample&#39;);
INSERT INTO \`url_resource\` VALUES (3, &#39;/admin/*&#39;, &#39;res-sample&#39;);
INSERT INTO \`url_resource\` VALUES (4, &#39;/sso/user&#39;, &#39;res-sample&#39;);
SET FOREIGN_KEY_CHECKS = 1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>资源服务器pom.xml增加依赖</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;dependency&gt;
  &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
  &lt;artifactId&gt;spring-boot-starter-jdbc&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
  &lt;groupId&gt;mysql&lt;/groupId&gt;
  &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;
  &lt;version&gt;8.0.30&lt;/version&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
  &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;
  &lt;artifactId&gt;lombok&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>资源服务器application.yml 新增配置数据源</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>...
spring:
...
datasource:
 url: jdbc:mysql://192.168.31.190:3306/res-db
 driver-class-name: com.mysql.cj.jdbc.Driver
 username: root
 password: root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>资源服务器实现AccessDecisionVoter接⼝，⾃定义数据库与⽤户对象的授权策略</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package com.example.resserver.security;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.access.AccessDecisionVoter;
import org.springframework.security.access.ConfigAttribute;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.web.FilterInvocation;
import org.springframework.stereotype.Component;
import org.springframework.util.AntPathMatcher;
import javax.annotation.Resource;
import java.util.Collection;
import java.util.List;
import java.util.Map;
@Component
@Slf4j
public class RoleBasedVoter implements AccessDecisionVoter&lt;Object&gt; {
  @Resource
  private JdbcTemplate jdbcTemplate;
  @Override
  public int vote(Authentication authentication, Object object, Collection&lt;ConfigAttribute&gt; attributes) {
    //如果⽤户还没有经过认证，则直接拒绝
    if (authentication == null) {
      return ACCESS_DENIED;
    }
    //得到该⽤户已被授权的⻆⾊对象
    Collection&lt;? extends GrantedAuthority&gt; roles = authentication.getAuthorities();//ROLE_USER
    //采⽤Ant语法规则的匹配器，只因为它⽤起来简单
    AntPathMatcher antPathMatcher = new AntPathMatcher();
    String requestURI = ((FilterInvocation) object).getRequest().getRequestURI();
    List&lt;Map&lt;String, Object&gt;&gt; dbAuthList = jdbcTemplate.queryForList(
      &quot;select r.role_id,r.role_name,u.url_pattern , u.namespace from role r, role_url_mapping ru , url_resource u where r.role_id = ru.role_id and ru.url_id = u.url_id and u.namespace =?&quot;, new Object[]{&quot;res-sample&quot;});
    log.debug(&quot;Authority data has been queried:&quot; + dbAuthList);
    //先⽐较URI，有符合条件的在判断是否有访问权限
   在SecurityConfig对象中⾃定义决策器，实现基于数据库RBAC的授权访问
    for (Map&lt;String, Object&gt; dbAuthority : dbAuthList) {
      if (antPathMatcher.match(dbAuthority.get(&quot;url_pattern&quot;).toString(), requestURI)) {
        for (GrantedAuthority userRole : roles) {
          //因为⻆⾊名在Spring OAuth2 中固定以ROLE_开头，所以增加上
          String dbRoleName = &quot;role_&quot; + dbAuthority.get(&quot;role_name&quot;).toString().toLowerCase();
          if (dbRoleName.equals(userRole.getAuthority().toLowerCase())) {
            return ACCESS_GRANTED;
          }
        }
      }
    }
    return ACCESS_DENIED;
  }
  @Override
  public boolean supports(Class clazz) {
    return true;
  }
  @Override
  public boolean supports(ConfigAttribute attribute) {
    return true;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>资源服务器，在SecurityConfig对象中实例化⾃定义决策器并注册，实现基于数据库RBAC的授权访问</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package com.example.resserver.security;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.access.AccessDecisionManager;
import org.springframework.security.access.AccessDecisionVoter;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.access.vote.AuthenticatedVoter;
import org.springframework.security.access.vote.UnanimousBased;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.security.web.access.expression.WebExpressionVoter;
import org.springframework.web.client.RestTemplate;
import javax.annotation.Resource;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
@Configuration
@Slf4j
public class JWTSecurityConfig {
...
@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
  ...
  //2.注册
  http.authorizeRequests().accessDecisionManager(accessDecisionManager()).anyRequest().authenticated();
  http.oauth2ResourceServer(
    oauth2 -&gt; oauth2.jwt().jwtAuthenticationConverter(jwtAuthenticationConverter));
    return http.build();
  }
  
  @Resource
  private RoleBasedVoter roleBasedVoter;
  
  @Bean
  //1.实例化决策器对象
  public AccessDecisionManager accessDecisionManager() {
    List&lt;AccessDecisionVoter&lt;? extends Object&gt;&gt; decisionVoters
      = Arrays.asList(
        new WebExpressionVoter(),roleBasedVoter,new AuthenticatedVoter());
    return new UnanimousBased(decisionVoters);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_35-无状态的access-token令牌如何自动续约" tabindex="-1"><a class="header-anchor" href="#_35-无状态的access-token令牌如何自动续约"><span>35. ⽆状态的ACCESS_TOKEN令牌如何⾃动续约</span></a></h1><p><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/bcbb19a9a652b3093d7eb.jpg" alt="refreshtoken.png"><br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/89e5d398bc3c392a3d29a.png" alt="refreshtoken2.png"></p><ul><li>授权服务器tokenSettings和authorizationGrantType(AuthorizationGrantType.REFRESH_TOKEN)</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@Bean
public RegisteredClientRepository registeredClientRepository() {

    RegisteredClient registeredClient = RegisteredClient.withId(UUID.randomUUID().toString())
            .clientId(&quot;messaging-client&quot;)
            .clientSecret(&quot;{noop}secret&quot;) //不加密
            //客户端接入通过SECRET密码认证方式接入
            .clientAuthenticationMethod(ClientAuthenticationMethod.CLIENT_SECRET_BASIC)
            //客户端允许使用的授权模式，授权码模式、Refresh_Token刷新令牌、客户端认证
            .authorizationGrantType(AuthorizationGrantType.AUTHORIZATION_CODE)
            .authorizationGrantType(AuthorizationGrantType.REFRESH_TOKEN)//1. authorizationGrantType
            .authorizationGrantType(AuthorizationGrantType.CLIENT_CREDENTIALS)
            //此客户端允许跳转的URI注册地址
            .redirectUri(&quot;http://auth-server:8080/authorized&quot;)
            .redirectUri(&quot;http://client:8082/login/oauth2/code/demo&quot;)
            //此客户端允许使用的授权范围
            .scope(&quot;message.read&quot;)
            .scope(&quot;message.write&quot;)
            //是否开启用户手动确认，fasle为自动确认
            .clientSettings(ClientSettings.builder().requireAuthorizationConsent(false).build())
            //2. tokenSettings
            .tokenSettings(TokenSettings.builder().accessTokenTimeToLive(Duration.ofMinutes(10))
                    .refreshTokenTimeToLive(Duration.ofHours(1))
                    .build())
            
            .build();


    return new InMemoryRegisteredClientRepository(registeredClient);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="shiro与spring-security区别" tabindex="-1"><a class="header-anchor" href="#shiro与spring-security区别"><span>shiro与spring security区别？</span></a></h1><ul><li>Shiro的配置和使用比较简单，Spring Security上手复杂</li><li>Shiro依赖性低，不需要任何框架和容器，可以独立运行，而Spring Security依赖于Spring容器</li><li>shiro更轻量</li></ul><h1 id="_37-旧版spring-security认证和鉴权" tabindex="-1"><a class="header-anchor" href="#_37-旧版spring-security认证和鉴权"><span>37. 旧版spring Security认证和鉴权</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@Configuration
@EnableWebSecurity
public class CustomSecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    private UserDetailsService userDetailsService;
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        //super.configure(auth);   //此行代码如果不注释掉，登录的时候会报密码错误
        //自定义实体类实现userDetails接口并从数据库查询出用户名密码权限三个
        auth.userDetailsService(userDetailsService).passwordEncoder(new BCryptPasswordEncoder());
    }
 
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        //super.configure(http);
        System.out.println(&quot;-=========httpSecurity----------&quot;);
        http.authorizeRequests()
                .antMatchers(&quot;/index&quot;).permitAll()   //这个请求放行，不进行认证
                .antMatchers(&quot;/access/user&quot;).hasRole(&quot;USER&quot;)
                .antMatchers(&quot;/access/admin&quot;).hasRole(&quot;ADMIN&quot;)
                .antMatchers(&quot;/access/read&quot;).hasRole(&quot;READ&quot;)
                .anyRequest().authenticated()   //其他请求需要认证
                .and()
                .formLogin();

        &lt;!-- http.authorizeRequests()
                //1.配置所有静态资源和登录页可以公开访问
                .antMatchers(adminContextPath + &quot;/assets/**&quot;).permitAll()
                .antMatchers(adminContextPath + &quot;/login&quot;).permitAll()
                .anyRequest().authenticated()
                .and()
                //2.配置登录和登出路径
                .formLogin().loginPage(adminContextPath + &quot;/login&quot;).successHandler(successHandler).and()
                .logout().logoutUrl(adminContextPath + &quot;/logout&quot;).and()
                //3.开启http basic支持，admin-client注册时需要使用
                .httpBasic().and()
                .csrf()
                //4.开启基于cookie的csrf保护
                .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
                //5.忽略这些路径的csrf保护以便admin-client注册
                .ignoringAntMatchers(
                        adminContextPath + &quot;/instances&quot;,
                        adminContextPath + &quot;/actuator/**&quot;
                );--&gt;
    }    
    
}
//使用
@PreAuthorize(&quot;hasRole(&#39;ROLE_ADMIN&#39;)&quot;)方法执行前进行权限检查
@PostAuthorize：方法执行后进行权限检查
@RequestMapping(&quot;/role/admin1&quot;)
String admin() {
    return &quot;role: ROLE_ADMIN&quot;;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_38-旧版spring-security-oauth2认证" tabindex="-1"><a class="header-anchor" href="#_38-旧版spring-security-oauth2认证"><span>38. 旧版spring Security oauth2认证</span></a></h1>`,84),j={href:"http://localhost:8080/oauth/authorize?client_id=client1&redirect_uri=https://blog.csdn.net/m0_53157173&response_type=code&scope=all%E6%8E%88%E6%9D%83",target:"_blank",rel:"noopener noreferrer"},H=r(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@AllArgsConstructor
@Configuration
@EnableAuthorizationServer
public class Oauth2ServerConfig extends AuthorizationServerConfigurerAdapter {

    private final PasswordEncoder passwordEncoder;
    private final UserServiceImpl userDetailsService;
    private final AuthenticationManager authenticationManager;
    private final JwtTokenEnhancer jwtTokenEnhancer;

    @Override
    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
        clients.inMemory()
                .withClient(&quot;admin-app&quot;)
                .secret(passwordEncoder.encode(&quot;123456&quot;))
                .scopes(&quot;all&quot;)
                .authorizedGrantTypes(&quot;password&quot;, &quot;refresh_token&quot;)
                .accessTokenValiditySeconds(3600*24)
                .refreshTokenValiditySeconds(3600*24*7)
                .and()
                .withClient(&quot;portal-app&quot;)
                .secret(passwordEncoder.encode(&quot;123456&quot;))
                .scopes(&quot;all&quot;)
                .authorizedGrantTypes(&quot;password&quot;, &quot;refresh_token&quot;)
                .accessTokenValiditySeconds(3600*24)
                .refreshTokenValiditySeconds(3600*24*7);
    }

    @Override
    public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
        TokenEnhancerChain enhancerChain = new TokenEnhancerChain();
        List&lt;TokenEnhancer&gt; delegates = new ArrayList&lt;&gt;();
        delegates.add(jwtTokenEnhancer);
        delegates.add(accessTokenConverter());
        enhancerChain.setTokenEnhancers(delegates); //配置JWT的内容增强器
        endpoints.authenticationManager(authenticationManager)
                .userDetailsService(userDetailsService) //配置加载用户信息的服务
                .accessTokenConverter(accessTokenConverter())
                .tokenEnhancer(enhancerChain);
    }

    @Override
    public void configure(AuthorizationServerSecurityConfigurer security) throws Exception {
        security.allowFormAuthenticationForClients();
    }

    @Bean
    public JwtAccessTokenConverter accessTokenConverter() {
        JwtAccessTokenConverter jwtAccessTokenConverter = new JwtAccessTokenConverter();
        jwtAccessTokenConverter.setKeyPair(keyPair());
        return jwtAccessTokenConverter;
    }

    @Bean
    public KeyPair keyPair() {
        //从classpath下的证书中获取秘钥对
        KeyStoreKeyFactory keyStoreKeyFactory = new KeyStoreKeyFactory(new ClassPathResource(&quot;jwt.jks&quot;), &quot;123456&quot;.toCharArray());
        return keyStoreKeyFactory.getKeyPair(&quot;jwt&quot;, &quot;123456&quot;.toCharArray());
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_39-springsecurity原理-待整理" tabindex="-1"><a class="header-anchor" href="#_39-springsecurity原理-待整理"><span>39. springsecurity原理（待整理）</span></a></h1><ul><li>Spring Security通过Servlet过滤器实现对Servlet的支持，提供Filter实现类DelegatingFilterProxy，DelegatingFilterProxy是在第一个servlet执行完成后调用，包含单例FilterChainProxy，FilterChainProxy使用SecurityFilterChain来确定应该为当前请求调用哪个Spring SecurityFilter实例。</li><li>FilterChainProxy包含多个SecurityFilterChain，是一个包含路由匹配规则筛选器，如果有多个，那么只会调用第一个匹配的SecurityFilterChain，可以通过@Order实现SecurityFilterChain的优先级，SecurityFilterChain包含多个实现了filter的spring bean。<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/8ad937504287578d371e8.png" alt="multi-securityfilterchain.png"></li><li>SecurityContextHolder:包含SecurityContext的类，SecurityContext包含Authentication接口</li><li>Authentication：认证接口，用于AuthenticationManager判断是否已经认证，包括用户认证信息，密码Principal，权限GrantedAuthority，用户名username</li><li>GrantedAuthority:权限接口，角色就用ROLE前缀，其他的实际写就ok</li><li>AuthenticationManager：认证管理器接口，通常使用实现类ProviderManager，此接口可以直接通过SecurityContextHolder实现认证</li><li>ProviderManager：提供管理接口包含多个认证管理接口AuthenticationProvider，并且各个管理AuthenticationProvider可以实现不同的认证Authentication，它们可以有公共的ProviderManager用于实现共通的认证功能</li><li>AuthenticationProvider：DaoAuthenticationProvider支持认证username/password,JwtAuthenticationProvider支持jwt认证</li><li>AuthenticationEntryPoint：用于验证带username和password等登录信息的接口，可用于登录认证，跳转或者返回认证响应头，其中LoginUrlAuthenticationEntryPoint就有跳转到登录页面的功能</li><li>AbstractAuthenticationProcessingFilter：认证凭证的基础过滤器，但是认证前会先请求AuthenticationEntryPoint.</li></ul><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/10a24e949875230846685.png" alt="abstractauthenticationprocessingfilter.png" tabindex="0"><figcaption>abstractauthenticationprocessingfilter.png</figcaption></figure><p>登录初始化<br> formLogin(Customizer.withDefaults())方法<br> 1.FormLoginConfigurer实例化<br> 1.1 初始化authenticationEntryPoint = new LoginUrlAuthenticationEntryPoint(loginPage);<br> 1.2 初始化authFilter = new UsernamePasswordAuthenticationFilter(usernameParameter,passwordParameter,new AntPathRequestMatcher(&quot;/login&quot;,&quot;POST&quot;)😉<br> 2.将FormLoginConfigurer传入httpSecurity<br> 3.httpSecurity.build()将调用所有SecurityConfigurer.init初始化<br> 3.1 初始化loginProcessingUrl failureHandler logoutConfigurer<br> 3.2 初始化ExceptionHandlingConfigurer，将defaultEntryPointMappings设置为LoginUrlAuthenticationEntryPoint<br> 4.httpSecurity.build()将调用所有SecurityConfigurer.configure配置<br> 4.1 设置defaultSuccessHandler，setAuthenticationManager，setAuthenticationSuccessHandler，<br> setAuthenticationFailureHandler，authenticationDetailsSource，setSessionAuthenticationStrategy<br> 4.2 设置rememberMeServices，securityContextConfigurer<br> 4.3 将UsernamePasswordAuthenticationFilter添加到filterchain<br> 登录认证过程</p>`,5),G={href:"http://127.0.0.1:9999/111",target:"_blank",rel:"noopener noreferrer"},W=e("li",null,"请求被AuthorizationFilter拦截，会取出SecurityContextHolder内的Authentication，交给RequestMatcherDelegatingAuthorizationManager的check方法校验，Authentication未认证则抛出AccessDeniedException，被ExceptionTranslationFilter的catch捕获，调用handleAccessDeniedException处理，",-1),J=e("li",null,"如果是RememberMe或者Anonymous的Authentication则调用sendStartAuthentication，否则调用accessDeniedHandler.handle方法",-1),K=e("li",null,"sendStartAuthentication方法保存 requestCache和调用authenticationEntryPoint.commence方法",-1),Y={href:"http://127.0.0.1:9999/login",target:"_blank",rel:"noopener noreferrer"},V={href:"http://127.0.0.1:9999/login%EF%BC%8C%E5%8C%B9%E9%85%8DUsernamePasswordAuthenticationFilter%E7%9A%84/login",target:"_blank",rel:"noopener noreferrer"},Q=e("li",null,[i("UsernamePasswordAuthenticationFilter调用父类AbstractAuthenticationProcessingFilter.dofilter方法，再具体调用子类UsernamePasswordAuthenticationFilter的attemptAuthentication方法，委托AuthenticationManager(ProviderManager/AnonymousAuthenticationProvider)的 authenticate方法，找到里面注册的所有provider，并轮询supports方法，如果是匹配了，则调用authenticate方法返回Authentication，如果返回null则调用父类的authenticate，在默认登录中AnonymousAuthenticationProvider父类是DaoAuthenticationProvider。成功则调用successHandler.onAuthenticationSuccess将UsernamePasswordAuthenticationToken放入securityContextRepository，同时根据第一次请求保存的requestCache获得之前请求的url，然后重定向到之前的url"),e("br"),i(" 第二次登陆过程")],-1),Z=e("li",null,"http请求经过SecurityContextPersistenceFilter，从SecurityContextRepository中获得UsernamePasswordAuthenticationToken，并将该token放入到SecurityContext",-1),X=e("li",null,"由AuthorizationFilter的RequestMatcherDelegatingAuthorizationManager中的RequestMatcher匹配，从securityContext中获得token，然后通过AuthenticatedAuthorizationManager的check方法返回AuthorizationDecision，然后AuthorizationFilter判断是否抛出AccessDeniedException，",-1),$=r('<p>注意！！！！！！<br> 如果http请求不能自动重定向到已经发过的请求，则检查requestCache是否正确，如果设置了sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)会导致requestCache失效，从而不能重定向</p><h1 id="_40-spring-authorization-server-待整理" tabindex="-1"><a class="header-anchor" href="#_40-spring-authorization-server-待整理"><span>40. Spring Authorization Server（待整理）</span></a></h1><ul><li>RegisteredClient客户机的主要目的是请求访问受保护的资源。客户端首先通过与授权服务器进行身份验证并提供授权授予来请求访问令牌。授权服务器对客户机和授权授权进行身份验证，如果它们有效，则发出访问令牌。客户机现在可以通过提供访问令牌向资源服务器请求受保护的资源。在springsecurity中对应的client端配置为ClientRegistration.</li><li>RegisteredClientRepository是核心 组件，可以注册和查询客户端。其他组件在遵循特定协议流时使用它，例如客户端身份验证、授权授予处理、令牌自省、动态客户端注册等。其中InMemoryRegisteredClientRepository实现将RegisteredClient实例存储在内存中，建议仅在开发和测试期间使用。JdbcRegisteredClientRepository是一个JDBC实现，通过使用JdbcOperations来持久化RegisteredClient实例。</li><li>OAuth2Authorization是OAuth2授权的表示形式，它保存与资源所有者或在client_credentials授权授予类型的情况下自己授予客户端的授权相关的状态。Spring Security的OAuth2 Client支持中对应的授权模型是OAuth2AuthorizedClient。在成功完成授权授予流之后，将创建OAuth2Authorization并关联OAuth2AccessToken、OAuth2RefreshToken(可选)和特定于执行的授权授予类型的其他状态。与OAuth2Authorization关联的OAuth2Token实例各不相同，具体取决于授权授予类型。对于OAuth2 authorization_code授予，OAuth2AuthorizationCode, OAuth2AccessToken和OAuth2RefreshToken(可选)是关联的。对于OAuth2 client_credentials授予，只关联OAuth2AccessToken。</li><li>OAuth2AuthorizationService是存储新授权和查询现有授权的中心组件。其他组件在遵循特定的协议流时使用它——例如，客户端身份验证、授权授予处理、令牌自省、令牌撤销、动态客户端注册等。<br> OAuth2AuthorizationService提供的实现是InMemoryOAuth2AuthorizationService和JdbcOAuth2AuthorizationService。InMemoryOAuth2AuthorizationService实现将OAuth2Authorization实例存储在内存中，建议仅在开发和测试期间使用。JdbcOAuth2AuthorizationService是一个JDBC实现，它通过使用JdbcOperations来持久化OAuth2Authorization实例。</li><li>OAuth2AuthorizationConsent是来自OAuth2授权请求流的授权“同意”(决策)的表示形式——例如，authorization_code授予，它保存资源所有者授予客户端的权限。当授权访问客户端时，资源所有者可能只授予客户端请求的权限的一个子集。典型的用例是authorization_code授予流，其中客户端请求范围，资源所有者授予(或拒绝)对所请求范围的访问。在完成OAuth2授权请求流之后，将创建(或更新)OAuth2AuthorizationConsent，并将授予的权限与客户端和资源所有者关联起来。</li><li>OAuth2AuthorizationConsentService是存储新授权同意和查询现有授权同意的中心组件。它主要由实现OAuth2授权请求流的组件使用——例如authorization_code授予。<br> OAuth2AuthorizationConsentService提供的实现是InMemoryOAuth2AuthorizationConsentService和JdbcOAuth2AuthorizationConsentService。InMemoryOAuth2AuthorizationConsentService实现将OAuth2AuthorizationConsent实例存储在内存中，建议仅用于开发和测试。JdbcOAuth2AuthorizationConsentService是一个JDBC实现，它通过使用JdbcOperations来持久化OAuth2AuthorizationConsent实例。</li><li>OAuth2TokenContext是一个context对象，它包含与OAuth2Token相关的信息，并由OAuth2TokenGenerator和OAuth2TokenCustomizer使用</li><li>OAuth2TokenGenerator负责从提供的OAuth2TokenContext中包含的信息生成OAuth2Token。生成的OAuth2Token主要取决于OAuth2TokenContext中指定的OAuth2TokenType类型。</li><li>OAuth2TokenCustomizer提供了自定义OAuth2Token属性的能力，这些属性可以在提供的OAuth2TokenContext中访问。OAuth2TokenGenerator使用它在生成OAuth2Token之前自定义其属性。</li></ul><p>认证初始化</p><ol><li>OAuth2AuthorizationServerConfiguration.applyDefaultSecurity(http);</li><li>OAuth2AuthorizationServerConfigurer实例化</li><li>OAuth2AuthorizationServerConfigurer.init <ol><li>OAuth2ClientAuthenticationConfigurer.init</li><li>OAuth2AuthorizationServerMetadataEndpointConfigurer.init</li><li>OAuth2AuthorizationEndpointConfigurer.init-&gt; <ol><li>设置OAuth2AuthorizationConsentAuthenticationProvider</li><li>设置OAuth2AuthorizationCodeRequestAuthenticationProvider</li></ol></li><li>OAuth2TokenEndpointConfigurer.init</li><li>OAuth2TokenIntrospectionEndpointConfigurer.init</li><li>OAuth2TokenRevocationEndpointConfigurer.init</li><li>ExceptionHandlingConfigurer.init</li></ol></li><li>OAuth2AuthorizationServerConfigurer.configure <ol><li>OAuth2ClientAuthenticationConfigurer.configure -&gt; [pattern=&#39;/oauth2/token&#39;, POST] [pattern=&#39;/oauth2/introspect&#39;, POST] [pattern=&#39;/oauth2/revoke&#39;, POST]&quot; <ol><li>设置OAuth2ClientAuthenticationFilter</li></ol></li><li>OAuth2AuthorizationServerMetadataEndpointConfigurer.configure</li><li>OAuth2AuthorizationEndpointConfigurer.configure -&gt; Ant [pattern=&#39;/oauth2/authorize&#39;, GET/POST] <ol><li>设置OAuth2AuthorizationEndpointFilter</li></ol></li><li>OAuth2TokenEndpointConfigurer.configure <ol><li>OAuth2TokenEndpointFilter</li></ol></li><li>OAuth2TokenIntrospectionEndpointConfigurer.configure</li><li>OAuth2TokenRevocationEndpointConfigurer.configure</li><li>ExceptionHandlingConfigurer.configure</li><li>设置AuthorizationServerContextFilter</li><li>设置NimbusJwkSetEndpointFilter</li></ol></li></ol><p>1.已经登陆请求认证过程</p>',6),ee={href:"http://127.0.0.1:9999/abc/oauth2/authorize?response_type=code&client_id=messaging-client&scope=message.read&state=some-state&redirect_uri=http://127.0.0.1:9999/abc/login/oauth2/code/messaging-client-oidc",target:"_blank",rel:"noopener noreferrer"},ie=e("li",null,[i("匹配/oauth2/authorize路由，被OAuth2AuthorizationEndpointFilter拦截然后调用doFilter方法 "),e("ol",null,[e("li",null,"调用DelegatingAuthenticationConverter里面的2个OAuth2AuthorizationCodeRequestAuthenticationConverter和OAuth2AuthorizationConsentAuthenticationConverter的convert方法转换为OAuth2AuthorizationCodeRequestAuthenticationToken或者OAuth2AuthorizationConsentAuthenticationToken"),e("li",null,"由OAuth2AuthorizationCodeRequestAuthenticationProvider判断是否已经认证，通过registeredClientRepository.findByClientId找到判断是否符合配置，不符合抛错，再根据isPrincipalAuthenticated判断是否认证过，没有则直接返回，否则再根据authorizationConsentService.findById()判断是否已经加载过授权范围，如果已授权这返回OAuth2AuthorizationCodeRequestAuthenticationToken。否则返回OAuth2AuthorizationConsentAuthenticationToken")])],-1),ne=e("li",null,"如果返回OAuth2AuthorizationConsentAuthenticationToken的话就会跳转到constent页面，两者都调用OAuth2AuthorizationService.save保存授权信息",-1),te={href:"http://127.0.0.1:9998/abc/login/oauth2/code/messaging-client?code=vT1qOzq2K3fzFXxOgwcuaeu6w5ybq5fMoIDEGCYNc9XZpLfCgh0Z05aKFCceRBwpO9utFbk_2YbZU58doFHZXnAzYAg18fgjhKK6RMOdOWQtOwbf7U4K-0tIyDqy9bGG&state=GmNqJkk2PsS149734FB-9vn6dAc6LFcfqHNlYMYRd3w%3D",target:"_blank",rel:"noopener noreferrer"},re=r("<li>客户端接收到后转发到/oauth2/token 匹配/oauth2/token or /oauth2/revoke or /oauth2/introspect 路由的OAuth2ClientAuthenticationFilter。其中包括4个converter<br> 0 = {JwtClientAssertionAuthenticationConverter@11345}<br> 1 = {ClientSecretBasicAuthenticationConverter@11346}<br> 2 = {ClientSecretPostAuthenticationConverter@11347}<br> 3 = {PublicClientAuthenticationConverter@11348} 、<br> 其中 ClientSecretBasicAuthenticationConverter获得参数CLIENT_ID等信息 生成OAuth2ClientAuthenticationToken，由ClientSecretAuthenticationProvider的authenticate，从registeredClientRepository根据clientId查询,然后生成OAuth2ClientAuthenticationToken，请求带着该token 到达OAuth2TokenEndpointFilter，匹配/oauth2/token，<br> 调用OAuth2AuthorizationCodeAuthenticationConverter转换为OAuth2AuthorizationCodeAuthenticationToken<br> 0 = {OAuth2AuthorizationCodeAuthenticationConverter@13504}<br> 1 = {OAuth2RefreshTokenAuthenticationConverter@13505}<br> 2 = {OAuth2ClientCredentialsAuthenticationConverter@13506}<br> 然后调用OAuth2AuthorizationCodeAuthenticationProvider.authenticate,然后又tokenGenerator生成OAuth2AccessTokenAuthenticationToken，返回给客户端<br> 0 = {JwtGenerator@13659}<br> 1 = {OAuth2AccessTokenGenerator@13660}<br> 2 = {OAuth2RefreshTokenGenerator@13661}</li><li>客户端收到token后调用/userinfo获取信息，带上token，被BearerTokenAuthenticationFilter拦截解析出BearerTokenAuthenticationToken，被JwtAuthenticationProvider解析</li>",2);function se(le,ae){const n=d("ExternalLinkIcon");return s(),l("div",null,[c,e("ul",null,[e("li",null,[i("Spring Security："),e("a",o,[i("https://spring.io/projects/spring-security"),t(n)])]),e("li",null,[i("Spring Security官⽅⽂档："),e("a",v,[i("https://spring.io/projects/spring￾security#learn"),t(n)])]),m]),b,e("ul",null,[p,e("li",null,[i("BCrypt将在内部产⽣随机盐值。每个调⽤将有不同的结果，只需要对密码进⾏⼀次编码。为了使这种随机的盐值能正常⼯作，BCrypt将盐存储在Hash值本身中。例如，以下Hash值:$2a"),e("mjx-container",g,[(s(),l("svg",h,A)),y]),i('ZLhnHxdpHETcxmtEStgpI./Ri1mksgJ9iDP36FmfMdYyVg9g0b2dq.⽤ $ 分隔三个字段： "2a" 代表BCrypt算法版本， "10" 表示算法的强度，"ZLhnHxdpHETcxmtEStgpI." 标识随机⽣成的盐值。基本上，前22个字符是salt。 最后⼀个字段的其余部分是纯⽂本的实际散列内容。')]),f]),S,e("ul",null,[e("li",null,[i("启动该Spring Boot应⽤程序，浏览器访问"),e("a",x,[i("http://localhost:80/hello。会跳转到的Spring"),t(n)]),i(" Security内置的登录界⾯。⽤户名：user密码：fc99acf0-73e1-4799-bcd4-d715d9133303最后输出Hello World!结果。")])]),C,e("ul",null,[e("li",null,[e("a",q,[i("https://docs.spring.io/spring￾security/reference/servlet/configuration/xml￾namespace.html#ns-custom-filters"),t(n)])]),w,T]),_,e("ul",null,[e("li",null,[i("Ant匹配器,推荐使⽤MVC匹配器⽽⾮Ant匹配器，Ant匹配器在匹配路径上存在⼀定⻛险。如：http.authorizeRequests()"),k,i(' .antMatchers( "/hello").authenticated();请求'),e("a",R,[i("http://127.0.0.1/hello/能访问，而http://127.0.0.1/hello报401"),t(n)]),B]),O]),z,e("ul",null,[D,e("li",null,[i("JWKS全称为 JSON Web Key Set：是指多个JWK组合在⼀起的⼀种格式(详⻅ "),e("a",I,[i("https://tools.ietf.org/html/draft-ietf-jose-json?web-key-41#section-5"),t(n)]),i(" )；")]),F,e("li",null,[i("获取公钥直接访问GET "),e("a",L,[i("http://auth-server:8080/oauth2/jwks"),t(n)])])]),U,e("ul",null,[e("li",null,[e("a",P,[i("https://spring.io/blog/2019/11/14/spring-security-oauth-2-0-roadmap-update"),t(n)])]),N]),M,e("ul",null,[e("li",null,[e("a",j,[i("http://localhost:8080/oauth/authorize?client_id=client1&redirect_uri=https://blog.csdn.net/m0_53157173&response_type=code&scope=all授权"),t(n)])])]),H,e("ol",null,[e("li",null,[i("http请求"),e("a",G,[i("http://127.0.0.1:9999/111"),t(n)])]),W,J,K,e("li",null,[i("LoginUrlAuthenticationEntryPoint.commence跳转到登录页面 GET "),e("a",Y,[i("http://127.0.0.1:9999/login"),t(n)])]),e("li",null,[i("用户在登录页面点击登录。请求POST "),e("a",V,[i("http://127.0.0.1:9999/login，匹配UsernamePasswordAuthenticationFilter的/login"),t(n)])]),Q,Z,X]),$,e("ol",null,[e("li",null,[i("请求发送"),e("a",ee,[i("http://127.0.0.1:9999/abc/oauth2/authorize?response_type=code&client_id=messaging-client&scope=message.read&state=some-state&redirect_uri=http://127.0.0.1:9999/abc/login/oauth2/code/messaging-client-oidc"),t(n)])]),ie,ne,e("li",null,[i("最后调用authenticationSuccessHandler的onAuthenticationSuccess方法，实际调用sendAuthorizationResponse，带上code重定向到"),e("a",te,[i("http://127.0.0.1:9998/abc/login/oauth2/code/messaging-client?code=vT1qOzq2K3fzFXxOgwcuaeu6w5ybq5fMoIDEGCYNc9XZpLfCgh0Z05aKFCceRBwpO9utFbk_2YbZU58doFHZXnAzYAg18fgjhKK6RMOdOWQtOwbf7U4K-0tIyDqy9bGG&state=GmNqJkk2PsS149734FB-9vn6dAc6LFcfqHNlYMYRd3w%3D"),t(n)])]),re])])}const ce=a(u,[["render",se],["__file","springsecurity.html.vue"]]),oe=JSON.parse('{"path":"/backend/securityframework/springsecurity.html","title":"SpringSecurity","lang":"zh-CN","frontmatter":{"title":"SpringSecurity","date":"2023-01-01T00:00:00.000Z","tags":"源码","categories":"后端","description":"SpringSecurity 1. Spring Security概览 2. Spring Security环境 3. Spring Security中资源、认证与授权 4. Spring Security单体应⽤模式 5. Spring Security微服务架构 6. Spring Security认证模式 6.1. HTTP基础认证 6.2. H...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/securityframework/springsecurity.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"SpringSecurity"}],["meta",{"property":"og:description","content":"SpringSecurity 1. Spring Security概览 2. Spring Security环境 3. Spring Security中资源、认证与授权 4. Spring Security单体应⽤模式 5. Spring Security微服务架构 6. Spring Security认证模式 6.1. HTTP基础认证 6.2. H..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/e03536d14c58fb42b04bc.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringSecurity\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/e03536d14c58fb42b04bc.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/013a129d53f38109a20dc.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/2750c08889738551b893d.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/cb80a6c09cbd83bd608de.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/5daa71a0eb9c5c8eaa18f.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/8db109b4aa659ed9bd2fb.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/4b6e6aa7d8d7dae60d69e.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/77d2e9e49c415e4aaa80a.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/f1f670081c95eb50852e0.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/8456277523314143042f5.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/e210c4891cc55a8948e0d.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/3a464047a04095fe6f98b.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/6c9cfaf05f296ca15b7e9.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/17ef07afce874e0586bf3.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/e46763636e8a7573c146d.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/adea22ea63fba2c1cf89a.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/bcbb19a9a652b3093d7eb.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/89e5d398bc3c392a3d29a.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/8ad937504287578d371e8.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/10a24e949875230846685.png\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"6.1. HTTP基础认证","slug":"_6-1-http基础认证","link":"#_6-1-http基础认证","children":[]},{"level":2,"title":"6.2. HTTP表单认证(默认)","slug":"_6-2-http表单认证-默认","link":"#_6-2-http表单认证-默认","children":[]},{"level":2,"title":"6.3. 两种模式的⽐较","slug":"_6-3-两种模式的比较","link":"#_6-3-两种模式的比较","children":[]},{"level":2,"title":"8.1. ⽤户对象","slug":"_8-1-用户对象","link":"#_8-1-用户对象","children":[]},{"level":2,"title":"8.2. 认证对象","slug":"_8-2-认证对象","link":"#_8-2-认证对象","children":[]},{"level":2,"title":"23.1. 授权","slug":"_23-1-授权","link":"#_23-1-授权","children":[]},{"level":2,"title":"23.2. 鉴权","slug":"_23-2-鉴权","link":"#_23-2-鉴权","children":[]},{"level":2,"title":"28.1. OAuth2协议的应⽤场景","slug":"_28-1-oauth2协议的应用场景","link":"#_28-1-oauth2协议的应用场景","children":[]},{"level":2,"title":"28.2. OAuth2协议的⻆⾊","slug":"_28-2-oauth2协议的⻆色","link":"#_28-2-oauth2协议的⻆色","children":[]},{"level":2,"title":"28.3. OAuth2协议的令牌Token","slug":"_28-3-oauth2协议的令牌token","link":"#_28-3-oauth2协议的令牌token","children":[]},{"level":2,"title":"28.4. OAuth2协议⼯作流程","slug":"_28-4-oauth2协议工作流程","link":"#_28-4-oauth2协议工作流程","children":[]},{"level":2,"title":"28.5. OAuth2中ACCESS_TOKEN的秘密","slug":"_28-5-oauth2中access-token的秘密","link":"#_28-5-oauth2中access-token的秘密","children":[]},{"level":2,"title":"28.6. 如何理解OAuth2 Scope属性的作⽤","slug":"_28-6-如何理解oauth2-scope属性的作用","link":"#_28-6-如何理解oauth2-scope属性的作用","children":[]},{"level":2,"title":"29.1. 授权码模式（Authorization Code）","slug":"_29-1-授权码模式-authorization-code","link":"#_29-1-授权码模式-authorization-code","children":[]},{"level":2,"title":"29.2. 隐式授权模式（Implicit）","slug":"_29-2-隐式授权模式-implicit","link":"#_29-2-隐式授权模式-implicit","children":[]},{"level":2,"title":"29.3. 密码模式（Resource Owner Password Credentials）","slug":"_29-3-密码模式-resource-owner-password-credentials","link":"#_29-3-密码模式-resource-owner-password-credentials","children":[]},{"level":2,"title":"29.4. 客户端模式（Client Credentials）","slug":"_29-4-客户端模式-client-credentials","link":"#_29-4-客户端模式-client-credentials","children":[]},{"level":2,"title":"31.1. Spring Authorization Server 授权中心构建(auth-server)","slug":"_31-1-spring-authorization-server-授权中心构建-auth-server","link":"#_31-1-spring-authorization-server-授权中心构建-auth-server","children":[]},{"level":2,"title":"31.2. 构建OAuth2资源服务器(res-server)","slug":"_31-2-构建oauth2资源服务器-res-server","link":"#_31-2-构建oauth2资源服务器-res-server","children":[]},{"level":2,"title":"31.3. 构建OAuth2客户端client","slug":"_31-3-构建oauth2客户端client","link":"#_31-3-构建oauth2客户端client","children":[]}],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":58.45,"words":17535},"filePathRelative":"backend/securityframework/springsecurity.md","localizedDate":"2023年1月1日","excerpt":"<p>SpringSecurity</p>\\n<!--more-->\\n<!-- TOC -->\\n<ul>\\n<li><a href=\\"#1-spring-security%E6%A6%82%E8%A7%88\\">1. Spring Security概览</a></li>\\n<li><a href=\\"#2-spring-security%E7%8E%AF%E5%A2%83\\">2. Spring Security环境</a></li>\\n<li><a href=\\"#3-spring-security%E4%B8%AD%E8%B5%84%E6%BA%90%E8%AE%A4%E8%AF%81%E4%B8%8E%E6%8E%88%E6%9D%83\\">3. Spring Security中资源、认证与授权</a></li>\\n<li><a href=\\"#4-spring-security%E5%8D%95%E4%BD%93%E5%BA%94%E6%A8%A1%E5%BC%8F\\">4. Spring Security单体应⽤模式</a></li>\\n<li><a href=\\"#5-spring-security%E5%BE%AE%E6%9C%8D%E5%8A%A1%E6%9E%B6%E6%9E%84\\">5. Spring Security微服务架构</a></li>\\n<li><a href=\\"#6-spring-security%E8%AE%A4%E8%AF%81%E6%A8%A1%E5%BC%8F\\">6. Spring Security认证模式</a>\\n<ul>\\n<li><a href=\\"#61-http%E5%9F%BA%E7%A1%80%E8%AE%A4%E8%AF%81\\">6.1. HTTP基础认证</a></li>\\n<li><a href=\\"#62-http%E8%A1%A8%E5%8D%95%E8%AE%A4%E8%AF%81%E9%BB%98%E8%AE%A4\\">6.2. HTTP表单认证(默认)</a></li>\\n<li><a href=\\"#63-%E4%B8%A4%E7%A7%8D%E6%A8%A1%E5%BC%8F%E7%9A%84%E8%BE%83\\">6.3. 两种模式的⽐较</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#7-%E5%8A%A0%E5%AF%86%E6%8E%A5%E5%8F%A3passwordencoder\\">7. 加密接口PasswordEncoder</a></li>\\n<li><a href=\\"#8-spring-security%E4%B8%AD%E7%9A%84%E6%88%B7%E4%B8%8E%E8%AE%A4%E8%AF%81%E5%AF%B9%E8%B1%A1\\">8. Spring Security中的⽤户与认证对象</a>\\n<ul>\\n<li><a href=\\"#81-%E6%88%B7%E5%AF%B9%E8%B1%A1\\">8.1. ⽤户对象</a></li>\\n<li><a href=\\"#82-%E8%AE%A4%E8%AF%81%E5%AF%B9%E8%B1%A1\\">8.2. 认证对象</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#9-spring-security%E7%9A%84session%E4%BC%9A%E8%AF%9D%E6%8E%A7%E5%88%B6\\">9. Spring Security的Session会话控制</a></li>\\n<li><a href=\\"#10-springsecurity%E7%9A%84%E8%BF%87%E6%BB%A4%E9%93%BE%E8%AE%BE%E8%AE%A1\\">10. SpringSecurity的过滤链设计</a></li>\\n<li><a href=\\"#11-springsecurity%E7%9A%84securitycontextholder\\">11. SpringSecurity的SecurityContextHolder</a></li>\\n<li><a href=\\"#12-rememberme%E6%9C%BA%E5%88%B6\\">12. RememberMe机制</a></li>\\n<li><a href=\\"#13-csrf%E6%94%BB%E5%87%BB\\">13. CSRF攻击</a></li>\\n<li><a href=\\"#14-spring-security%E5%85%A5%E9%97%A8\\">14. Spring Security入门</a></li>\\n<li><a href=\\"#15-springsecurity%E5%9F%BA%E7%A1%80%E8%AE%A4%E8%AF%81\\">15. SpringSecurity基础认证</a></li>\\n<li><a href=\\"#16-springsecurity%E5%AE%9E%E7%8E%B0%E5%9F%BA%E4%BA%8Emysql%E5%AE%9A%E4%B9%89%E5%9F%BA%E7%A1%80%E8%AE%A4%E8%AF%81\\">16. SpringSecurity实现基于MySQL⾃定义基础认证</a></li>\\n<li><a href=\\"#17-springsecurity%E5%88%A9passwordencoder%E5%AF%B9%E5%AF%86%E7%A0%81%E5%8A%A0%E5%AF%86%E4%BF%9D%E6%8A%A4\\">17. SpringSecurity利⽤PasswordEncoder对密码加密保护</a></li>\\n<li><a href=\\"#18-%E5%9F%BA%E4%BA%8E%E8%A1%A8%E5%8D%95%E6%A8%A1%E5%BC%8F%E5%AE%9E%E7%8E%B0%E5%AE%9A%E4%B9%89%E8%AE%A4%E8%AF%81\\">18. 基于表单模式实现⾃定义认证</a></li>\\n<li><a href=\\"#19-springsecurity%E5%AE%9E%E7%8E%B0%E8%A1%A8%E5%8D%95%E8%AE%A4%E8%AF%81%E7%99%BB%E5%BD%95%E6%8E%A5%E8%BF%94%E5%9B%9Ejson\\">19. SpringSecurity实现表单认证登录接⼝返回JSON</a></li>\\n<li><a href=\\"#20-security-contextholder%E5%AE%9E%E7%8E%B0%E5%AD%90%E7%BA%BF%E7%A8%8B%E8%8E%B7%E5%BE%97%E7%94%A8%E6%88%B7%E4%BF%A1%E6%81%AF\\">20. Security ContextHolder实现子线程获得用户信息</a></li>\\n<li><a href=\\"#21-securitycontextholder%E8%8E%B7%E5%8F%96%E5%BD%93%E5%89%8D%E7%99%BB%E5%BD%95%E5%AF%B9%E8%B1%A1\\">21. SecurityContextHolder获取当前登录对象</a></li>\\n<li><a href=\\"#22-spring-security%E9%85%8D%E7%BD%AE%E5%AE%9A%E4%B9%89%E8%BF%87%E6%BB%A4%E5%99%A8\\">22. Spring Security配置⾃定义过滤器</a></li>\\n<li><a href=\\"#23-spring-security%E6%9D%83%E9%99%90%E6%8E%A7%E5%88%B6\\">23. Spring Security权限控制</a>\\n<ul>\\n<li><a href=\\"#231-%E6%8E%88%E6%9D%83\\">23.1. 授权</a></li>\\n<li><a href=\\"#232-%E9%89%B4%E6%9D%83\\">23.2. 鉴权</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#24-rbac%E5%9F%BA%E4%BA%8E%E6%9D%83%E9%99%90%E6%8E%A7%E5%88%B6\\">24. RBAC基于⻆⾊权限控制</a></li>\\n<li><a href=\\"#25-spring-security-%E5%8C%B9%E9%85%8D%E5%99%A8\\">25. Spring Security 匹配器</a></li>\\n<li><a href=\\"#26-spring-security%E5%AE%9E%E7%8E%B0remember-me\\">26. Spring Security实现Remember Me</a></li>\\n<li><a href=\\"#27-spring-security%E9%A2%84%E9%98%B2csrf%E6%94%BB%E5%87%BB\\">27. Spring Security预防CSRF攻击</a></li>\\n<li><a href=\\"#28-%E5%88%86%E5%B8%83%E5%BC%8F%E8%AE%A4%E8%AF%81oauth2%E5%8D%8F%E8%AE%AE%E4%BB%8B%E7%BB%8D\\">28. 分布式认证Oauth2协议介绍</a>\\n<ul>\\n<li><a href=\\"#281-oauth2%E5%8D%8F%E8%AE%AE%E7%9A%84%E5%BA%94%E5%9C%BA%E6%99%AF\\">28.1. OAuth2协议的应⽤场景</a></li>\\n<li><a href=\\"#282-oauth2%E5%8D%8F%E8%AE%AE%E7%9A%84\\">28.2. OAuth2协议的⻆⾊</a></li>\\n<li><a href=\\"#283-oauth2%E5%8D%8F%E8%AE%AE%E7%9A%84%E4%BB%A4%E7%89%8Ctoken\\">28.3. OAuth2协议的令牌Token</a></li>\\n<li><a href=\\"#284-oauth2%E5%8D%8F%E8%AE%AE%E4%BD%9C%E6%B5%81%E7%A8%8B\\">28.4. OAuth2协议⼯作流程</a></li>\\n<li><a href=\\"#285-oauth2%E4%B8%ADaccess_token%E7%9A%84%E7%A7%98%E5%AF%86\\">28.5. OAuth2中ACCESS_TOKEN的秘密</a></li>\\n<li><a href=\\"#286-%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3oauth2-scope%E5%B1%9E%E6%80%A7%E7%9A%84%E4%BD%9C\\">28.6. 如何理解OAuth2 Scope属性的作⽤</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#29-oauth2%E5%8D%8F%E8%AE%AE%E5%9B%9B%E7%A7%8D%E6%8E%88%E6%9D%83%E6%A8%A1%E5%BC%8F\\">29. Oauth2协议四种授权模式</a>\\n<ul>\\n<li><a href=\\"#291-%E6%8E%88%E6%9D%83%E7%A0%81%E6%A8%A1%E5%BC%8Fauthorization-code\\">29.1. 授权码模式（Authorization Code）</a></li>\\n<li><a href=\\"#292-%E9%9A%90%E5%BC%8F%E6%8E%88%E6%9D%83%E6%A8%A1%E5%BC%8Fimplicit\\">29.2. 隐式授权模式（Implicit）</a></li>\\n<li><a href=\\"#293-%E5%AF%86%E7%A0%81%E6%A8%A1%E5%BC%8Fresource-owner-password-credentials\\">29.3. 密码模式（Resource Owner Password Credentials）</a></li>\\n<li><a href=\\"#294-%E5%AE%A2%E6%88%B7%E7%AB%AF%E6%A8%A1%E5%BC%8Fclient-credentials\\">29.4. 客户端模式（Client Credentials）</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#30-spring-security-oauth2-%E5%88%86%E5%B8%83%E5%BC%8F%E8%AE%A4%E8%AF%81%E6%B5%81%E7%A8%8B\\">30. Spring Security Oauth2 分布式认证流程</a></li>\\n<li><a href=\\"#31-%E6%9E%84%E5%BB%BAoauth2%E8%AE%A4%E8%AF%81%E6%8E%88%E6%9D%83%E4%B8%AD\\">31. 构建OAuth2认证授权中⼼</a>\\n<ul>\\n<li><a href=\\"#311-spring-authorization-server-%E6%8E%88%E6%9D%83%E4%B8%AD%E5%BF%83%E6%9E%84%E5%BB%BAauth-server\\">31.1. Spring Authorization Server 授权中心构建(auth-server)</a></li>\\n<li><a href=\\"#312-%E6%9E%84%E5%BB%BAoauth2%E8%B5%84%E6%BA%90%E6%9C%8D%E5%8A%A1%E5%99%A8res-server\\">31.2. 构建OAuth2资源服务器(res-server)</a></li>\\n<li><a href=\\"#313-%E6%9E%84%E5%BB%BAoauth2%E5%AE%A2%E6%88%B7%E7%AB%AFclient\\">31.3. 构建OAuth2客户端client</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#32-%E5%9F%BA%E4%BA%8Emysql%E7%AE%A1%E7%90%86%E6%8E%88%E6%9D%83%E4%B8%AD%E6%95%B0%E6%8D%AE\\">32. 基于MySQL管理授权中⼼数据</a></li>\\n<li><a href=\\"#33-access_token%E9%99%84%E5%8A%A0roles%E6%95%B0%E6%8D%AE\\">33. ACCESS_TOKEN附加⻆⾊ROLES数据</a></li>\\n<li><a href=\\"#34-oauth2%E4%B8%8Erbac%E5%8D%8F%E5%90%8C%E4%BD%9C%E4%B8%9A\\">34. OAuth2与RBAC协同作业</a></li>\\n<li><a href=\\"#35-%E7%8A%B6%E6%80%81%E7%9A%84access_token%E4%BB%A4%E7%89%8C%E5%A6%82%E4%BD%95%E5%8A%A8%E7%BB%AD%E7%BA%A6\\">35. ⽆状态的ACCESS_TOKEN令牌如何⾃动续约</a></li>\\n<li><a href=\\"#shiro%E4%B8%8Espring-security%E5%8C%BA%E5%88%AB\\">shiro与spring security区别？</a></li>\\n<li><a href=\\"#37-%E6%97%A7%E7%89%88spring-security%E8%AE%A4%E8%AF%81%E5%92%8C%E9%89%B4%E6%9D%83\\">37. 旧版spring Security认证和鉴权</a></li>\\n<li><a href=\\"#38-%E6%97%A7%E7%89%88spring-security-oauth2%E8%AE%A4%E8%AF%81\\">38. 旧版spring Security oauth2认证</a></li>\\n<li><a href=\\"#39-springsecurity%E5%8E%9F%E7%90%86%E5%BE%85%E6%95%B4%E7%90%86\\">39. springsecurity原理（待整理）</a></li>\\n<li><a href=\\"#40-spring-authorization-server%E5%BE%85%E6%95%B4%E7%90%86\\">40. Spring Authorization Server（待整理）</a></li>\\n</ul>","autoDesc":true}');export{ce as comp,oe as data};
