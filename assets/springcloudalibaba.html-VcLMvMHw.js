import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as n,e as t}from"./app-7KT7HDzT.js";const l={},a=t(`<h1 id="利用spring官方向导构建spring-cloud-alibaba" tabindex="-1"><a class="header-anchor" href="#利用spring官方向导构建spring-cloud-alibaba"><span>利用Spring官方向导构建Spring Cloud Alibaba</span></a></h1><ul><li>idea-&gt;new Project-&gt;选择springboot版本-&gt;Web-&gt;Spring Web-&gt;create</li><li>1.pom.xml加入版本参数和依赖管理器和nacos</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;properties&gt;
    &lt;java.version&gt;17&lt;/java.version&gt;
    &lt;!--1.加入下面2个--&gt;
    &lt;spring-cloud.version&gt;2022.0.1&lt;/spring-cloud.version&gt;
    &lt;spring-cloud-alibaba.version&gt;2022.0.0.0-RC1&lt;/spring-cloud-alibaba.version&gt;
&lt;/properties&gt;

&lt;dependencies&gt;
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
    &lt;!--3.引入nacos--&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;com.alibaba.cloud&lt;/groupId&gt;
        &lt;artifactId&gt;spring-cloud-starter-alibaba-nacos-discovery&lt;/artifactId&gt;
    &lt;/dependency&gt;
&lt;/dependencies&gt;

&lt;dependencyManagement&gt;
    &lt;dependencies&gt;
        &lt;!--2.加入2个依赖管理器--&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
            &lt;artifactId&gt;spring-cloud-dependencies&lt;/artifactId&gt;
            &lt;version&gt;\${spring-cloud.version}&lt;/version&gt;
            &lt;type&gt;pom&lt;/type&gt;
            &lt;scope&gt;import&lt;/scope&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;com.alibaba.cloud&lt;/groupId&gt;
            &lt;artifactId&gt;spring-cloud-alibaba-dependencies&lt;/artifactId&gt;
            &lt;version&gt;\${spring-cloud-alibaba.version}&lt;/version&gt;
            &lt;type&gt;pom&lt;/type&gt;
            &lt;scope&gt;import&lt;/scope&gt;
        &lt;/dependency&gt;
    &lt;/dependencies&gt;
&lt;/dependencyManagement&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>2.application.properties</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
server.port=80
# nacos参数
spring.application.name=first-microservice
spring.cloud.nacos.discovery.username=nacos
spring.cloud.nacos.discovery.password=nacos
spring.cloud.nacos.discovery.server-addr=nacos:8848
spring.cloud.nacos.discovery.namespace=public
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/a05791cc2ebf7434eb2aa.jpg" alt="newproject.png" tabindex="0"><figcaption>newproject.png</figcaption></figure><h1 id="nacos心跳机制" tabindex="-1"><a class="header-anchor" href="#nacos心跳机制"><span>nacos心跳机制</span></a></h1><ul><li>健康检查机制：客户端主动上报或者服务端主动向客户端探测</li><li>主流的注册中心，包括nacos的健康检查机制主要都采用了 TTL（Time To Live）机制，即客户端在⼀定时间没有向注册中心发送心跳，那么注册中心会认为此服务不健康，进而触发后续的剔除逻辑</li><li>Nacos 提供了两种服务类型供用户注册实例时选择，实例分为临时实例和永久实例。 <ul><li>临时实例只是临时存在于注册中心中，会在服务下线或不可用时被注册中心剔除， <ul><li>OpenAPI 进行服务注册。实际是用户根据自身需求调用 Http 接口对服务进行注册，然后通过 Http 接口发送心跳到注册中心。在注册服务的同时会注册⼀个全局的客户端心跳检测的任务。在服务⼀段时间没有收到来自客户端的心跳后，该任务会将其标记为不健康，如果在间隔的时间内还未收到心跳，那么该任务会将其剔除。</li><li>SDK 的注册方式实际是通过 RPC 与注册中心保持连接。客户端会定时的通过 RPC 连接向 Nacos 注册中心发送心跳，保持连接的存活。如果客户端和注册中心的连接断开，那么注册中心会主动剔除该 client 所注册的服务，达到下线的效果。</li></ul></li><li>永久实例健康检查机制：永久实例永不提除但是会心跳失败。Nacos 中使用 SDK 对于永久实例的注册实际也是使用 OpenAPI 的方式进行注册，这样可以保证即使是客户端下线后也不会影响永久实例的健康检查。Nacos 采用的是注册中心探测机制，注册中心会在永久服务初始化时根据客户端选择的协议类型注册探活的定时任务。Nacos 现在内置提供了三种探测的协议，即Http、TCP 以及 MySQL 。⼀般而言 Http 和 TCP 已经可以涵盖绝大多数的健康检查场景。</li></ul></li><li>对于集群下的服务，Nacos ⼀个服务只会被 Nacos 集群中的⼀个注册中心所负责，其余节点的服务信息只是集群副本，用于订阅者在查询服务列表时，始终可以获取到全部的服务列表。临时实例只会对其被负责的注册中心节点发送心跳信息，注册中心服务节点会对其负责的永久实例进行健康探测，在获取到健康状态后由当前负责的注册中心节点将健康信息同步到集群中的其他的注册中心。</li><li>在 Nacos 中，服务的注册我们从注册方式维度实际可以分为两大类。 <ul><li>SDK RPC 连接进行注册，客户端会和注册中心保持链接。只需要和注册中心集群中的任意⼀台节点建立联系，那么由这个节点负责这个客户端就可以了。注册中心会在启动时注册⼀个全局的同步任务，用于将其当前负责的所有节点信息同步到集群中的其他节点，其他非负责的节点也会创建该客户端的信息，在非负责的节点上，连接类型的客户端，会有⼀个续约时间的概念，在收到其他节点的同步信息时，更新续约时间为当前时间，如果在集群中的其他节点在⼀段时间内没有收到不是自己的负责的节点的同步信息，那么认为此节点已经不健康，从而达到对不是自己负责的节点健康状态检查。</li><li>OpenAPI 进行 IP 和端口注册。OpenAPI 注册的临时实例也是通过同步自身负责的节点到其他节点来更新其他节点的对应的临时实例的心跳时间，保证其他节点不会删除或者修改此实例的健康状态。前面我们特别指明了是临时实例而没有说所有实例，你应该也可能会想到这种方式对于持久化节点会显得多余，永久实例会在被主动删除前⼀直存在于注册中心，那么我们健康检查并不会去删除实例，所以我们只需要在负责的节点永久实例健康状态变更的时候通知到其余的节点即可。</li></ul></li><li>最后。如果不是给集群中raft算法节点的leader发送请求，则该节点会转发到leader去，leader判断完再同步到当前节点</li></ul><h1 id="临时节点与永久节点配置" tabindex="-1"><a class="header-anchor" href="#临时节点与永久节点配置"><span>临时节点与永久节点配置</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 默认临时节点
# 开启查看心跳包日志
logging.level.root=debug
# 临时节点基于心跳包形式向Nacos发送，每5秒发送一次
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
logging.level.root=debug
# 开启永久节点
spring.cloud.nacos.discovery.ephemeral=false
# 一定要配置这个ip段，否则nacos服务端对客户端探测再多网卡情况下不知道对走哪个网卡
spring.cloud.inetutils.preferred-networks=192.168.31
# 永久节点每秒会接收到来自Nacos的探查
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="raft算法与distro算法" tabindex="-1"><a class="header-anchor" href="#raft算法与distro算法"><span>Raft算法与Distro算法</span></a></h1><p>Raft算法用于服务数据持久化，保证一致性，首先低频，需要关注所有节点数据一致性<br> Distro算法用于服务注册，关注性能而不太关注数据库，而且Raft算法如果3个节点有2个挂了就挂了，显然不合理</p><h1 id="客户端负载均衡器与spring-cloud-loadbalancer" tabindex="-1"><a class="header-anchor" href="#客户端负载均衡器与spring-cloud-loadbalancer"><span>客户端负载均衡器与Spring Cloud Loadbalancer</span></a></h1><ul><li>Spring Cloud Loadbalancer不用写ip只用写服务名</li><li>Spring Cloud Loadbalancer初始化时去注册中心查询可用服务列表并保存到内存，服务上下线时注册中心会推送消息Spring Cloud Loadbalancer并更新可用服务列表</li></ul><h1 id="openfeign" tabindex="-1"><a class="header-anchor" href="#openfeign"><span>OpenFeign</span></a></h1><ul><li>OpenFeign是Spring Cloud项目中的一个模块，它是基于Feign开发的，可以看作是对Feign的进一步封装和增强。Feign是一个声明式、模板化的HTTP客户端，它的目标是简化HTTP API开发。OpenFeign在Feign的基础上增加了对Spring MVC注解、Spring Boot自动配置等特性的支持，并且集成了Spring Cloud的服务发现和负载均衡功能。相比于Feign，OpenFeign更适合在Spring Cloud微服务架构中使用。</li><li>1.依赖</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-loadbalancer&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-openfeign&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>2.config类增加@EnableFeignClients注解</li><li>3.一个基于Spring Cloud的Feign客户端接口。其中，@FeignClient(name = &quot;provider-service&quot;)标注表示该接口是对名为&quot;provider-service&quot;的服务进行调用，这个服务名称通常是在配置文件中指定的，用于实现服务发现。<br> 接口中定义了三个方法，它们对应着服务提供者中的三个API接口。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package com.itlaoqi.consumerserviceopenfeign.feignclient;

import com.itlaoqi.consumerserviceopenfeign.dto.User;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Map;

@FeignClient(name = &quot;provider-service&quot;)
public interface ProviderServiceFeignClient {

    @GetMapping(&quot;/hello&quot;)
    Map&lt;String, Object&gt; sendMessage();

    @PostMapping(&quot;/user/{uid}&quot;)
    User createUser(@PathVariable(&quot;uid&quot;) String uid, @RequestBody User user);

    @GetMapping(&quot;/list&quot;)
    List&lt;User&gt; query(@RequestParam(&quot;page&quot;) int page, @RequestParam(&quot;rows&quot;) int rows);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>4.使用</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package com.itlaoqi.consumerserviceopenfeign.controller;

import com.itlaoqi.consumerserviceopenfeign.dto.User;
import com.itlaoqi.consumerserviceopenfeign.feignclient.ProviderServiceFeignClient;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ConsumerController {
    @Resource
    private ProviderServiceFeignClient providerServiceFeignClient;
    @GetMapping(&quot;/do1&quot;)
    public List doSth1(){
        List&lt;User&gt; userList = providerServiceFeignClient.query(1, 10);
        return userList;
    }

    @GetMapping(&quot;/do2&quot;)
    public User doSth2(){
        String uid=&quot;10&quot;;
        User user = providerServiceFeignClient.createUser(uid, new User(uid, &quot;testUser&quot;, &quot;testPassword&quot;, &quot;testNickname&quot;));
        return user;
    }

    @GetMapping(&quot;/do3&quot;)
    public String doSth3(){
        String result = providerServiceFeignClient.hello();
        return result;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="gateway" tabindex="-1"><a class="header-anchor" href="#gateway"><span>gateway</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>  &lt;dependency&gt;
      &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
      &lt;artifactId&gt;spring-cloud-starter-loadbalancer&lt;/artifactId&gt;
  &lt;/dependency&gt;

  &lt;dependency&gt;
      &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
      &lt;artifactId&gt;spring-cloud-starter-gateway&lt;/artifactId&gt;
  &lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>spring:
  application:
    name: gateway
  cloud:
    nacos:
      discovery:
        username: nacos
        password: nacos
        server-addr: nacos:8848
    gateway:#自动根据服务名匹配
      discovery:
        locator:
          enabled: true
server:
  port: 80


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="gateway自定义谓词" tabindex="-1"><a class="header-anchor" href="#gateway自定义谓词"><span>gateway自定义谓词</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># TokenHeader为谓词前缀，Springcloud会自动将RoutePredicateFactory后缀注册为谓词
package com.itlaoqi.gateway.predicate;

import org.springframework.cloud.gateway.handler.predicate.AbstractRoutePredicateFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.function.Predicate;

@Component
public class TokenHeaderRoutePredicateFactory extends AbstractRoutePredicateFactory&lt;TokenHeaderRoutePredicateFactory.Config&gt; {

    public TokenHeaderRoutePredicateFactory() {
        super(Config.class);
    }

    @Override
    public Predicate&lt;ServerWebExchange&gt; apply(Config config) {
        return exchange -&gt; {
            Set&lt;Map.Entry&lt;String, List&lt;String&gt;&gt;&gt; headers = exchange.getRequest().getHeaders().entrySet();
            for(Map.Entry me : headers){
                if(me.getKey().equals(config.getHeaderName())){
                    return true;
                }
            }
            return false;
        };
    }

    public static class Config {
        private String headerName;

        public String getHeaderName() {
            return headerName;
        }

        public void setHeaderName(String headerName) {
            this.headerName = headerName;
        }
    }

    @Override
    public List&lt;String&gt; shortcutFieldOrder() {
        return Arrays.asList(&quot;headerName&quot;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>spring:
    ...
    gateway:
      discovery:
        locator:
          enabled: false
      routes:
        - id: route_user_service 
          uri: lb://gateway-user-service
          predicates:
            - Path=/user/** 
            - TokenHeader=Token # 谓词前缀与谓词名称
          filters:
            - StripPrefix=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="nacos-config" tabindex="-1"><a class="header-anchor" href="#nacos-config"><span>nacos config</span></a></h1><p>grpc长连接监听</p><div class="language-pom.xml line-numbers-mode" data-ext="pom.xml" data-title="pom.xml"><pre class="language-pom.xml"><code>&lt;!-- Nacos配置中心starter --&gt;
&lt;dependency&gt;
  &lt;groupId&gt;com.alibaba.cloud&lt;/groupId&gt;
  &lt;artifactId&gt;spring-cloud-starter-alibaba-nacos-config&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
  &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
  &lt;artifactId&gt;spring-cloud-starter-bootstrap&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tax-service-dev.yaml</p><div class="language-bootstrap.yml line-numbers-mode" data-ext="bootstrap.yml" data-title="bootstrap.yml"><pre class="language-bootstrap.yml"><code>spring:
  application:
    name: tax-service
  profiles:
    active: dev
  cloud:
    nacos:
      config:
        file-extension: yml
        server-addr: 192.168.31.231:8848
        username: nacos
        password: nacos
logging:
  level:
    root: info

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@RefreshScope</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package com.itlaoqi.nacosconfig.config;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.context.annotation.Configuration;

@Configuration
@RefreshScope
@Data
public class Setting {
    @Value(&quot;\${setting.upload-addr}&quot;)
    private String uploadAddr;
    @Value(&quot;\${setting.path}&quot;)
    private String path;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),d=[a];function r(s,c){return i(),n("div",null,d)}const u=e(l,[["render",r],["__file","springcloudalibaba.html.vue"]]),g=JSON.parse('{"path":"/backend/j2ee/springcloudalibaba.html","title":"SpringCloudAlibaba","lang":"zh-CN","frontmatter":{"title":"SpringCloudAlibaba","date":"2023-01-01T00:00:00.000Z","tags":"java框架","categories":"后端","description":"利用Spring官方向导构建Spring Cloud Alibaba idea->new Project->选择springboot版本->Web->Spring Web->create 1.pom.xml加入版本参数和依赖管理器和nacos 2.application.properties newproject.pngnewproject.png n...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/j2ee/springcloudalibaba.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"SpringCloudAlibaba"}],["meta",{"property":"og:description","content":"利用Spring官方向导构建Spring Cloud Alibaba idea->new Project->选择springboot版本->Web->Spring Web->create 1.pom.xml加入版本参数和依赖管理器和nacos 2.application.properties newproject.pngnewproject.png n..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/a05791cc2ebf7434eb2aa.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringCloudAlibaba\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/a05791cc2ebf7434eb2aa.jpg\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":7.99,"words":2397},"filePathRelative":"backend/j2ee/springcloudalibaba.md","localizedDate":"2023年1月1日","excerpt":"<!-- TOC -->\\n<h1>利用Spring官方向导构建Spring Cloud Alibaba</h1>\\n<ul>\\n<li>idea-&gt;new Project-&gt;选择springboot版本-&gt;Web-&gt;Spring Web-&gt;create</li>\\n<li>1.pom.xml加入版本参数和依赖管理器和nacos</li>\\n</ul>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>&lt;properties&gt;\\n    &lt;java.version&gt;17&lt;/java.version&gt;\\n    &lt;!--1.加入下面2个--&gt;\\n    &lt;spring-cloud.version&gt;2022.0.1&lt;/spring-cloud.version&gt;\\n    &lt;spring-cloud-alibaba.version&gt;2022.0.0.0-RC1&lt;/spring-cloud-alibaba.version&gt;\\n&lt;/properties&gt;\\n\\n&lt;dependencies&gt;\\n  &lt;dependency&gt;\\n        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;\\n        &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;\\n    &lt;/dependency&gt;\\n    &lt;dependency&gt;\\n        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;\\n        &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;\\n        &lt;scope&gt;test&lt;/scope&gt;\\n    &lt;/dependency&gt;\\n    &lt;dependency&gt;\\n        &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;\\n        &lt;artifactId&gt;lombok&lt;/artifactId&gt;\\n    &lt;/dependency&gt;\\n    &lt;!--3.引入nacos--&gt;\\n    &lt;dependency&gt;\\n        &lt;groupId&gt;com.alibaba.cloud&lt;/groupId&gt;\\n        &lt;artifactId&gt;spring-cloud-starter-alibaba-nacos-discovery&lt;/artifactId&gt;\\n    &lt;/dependency&gt;\\n&lt;/dependencies&gt;\\n\\n&lt;dependencyManagement&gt;\\n    &lt;dependencies&gt;\\n        &lt;!--2.加入2个依赖管理器--&gt;\\n        &lt;dependency&gt;\\n            &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;\\n            &lt;artifactId&gt;spring-cloud-dependencies&lt;/artifactId&gt;\\n            &lt;version&gt;${spring-cloud.version}&lt;/version&gt;\\n            &lt;type&gt;pom&lt;/type&gt;\\n            &lt;scope&gt;import&lt;/scope&gt;\\n        &lt;/dependency&gt;\\n        &lt;dependency&gt;\\n            &lt;groupId&gt;com.alibaba.cloud&lt;/groupId&gt;\\n            &lt;artifactId&gt;spring-cloud-alibaba-dependencies&lt;/artifactId&gt;\\n            &lt;version&gt;${spring-cloud-alibaba.version}&lt;/version&gt;\\n            &lt;type&gt;pom&lt;/type&gt;\\n            &lt;scope&gt;import&lt;/scope&gt;\\n        &lt;/dependency&gt;\\n    &lt;/dependencies&gt;\\n&lt;/dependencyManagement&gt;\\n</code></pre></div>","autoDesc":true}');export{u as comp,g as data};
