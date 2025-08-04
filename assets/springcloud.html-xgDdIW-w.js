import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as n,e as l}from"./app-7KT7HDzT.js";const s={},a=l(`<ul><li><a href="#1-springcloud%E5%B8%B8%E7%94%A8%E7%BB%84%E4%BB%B6">1. springcloud常用组件</a><ul><li><a href="#11-%E6%9C%8D%E5%8A%A1%E5%8F%91%E7%8E%B0%E4%B8%8E%E6%B3%A8%E5%86%8Czookeepereurekaconsoul">1.1. 服务发现与注册ZooKeeper、Eureka、consoul</a></li><li><a href="#12-%E6%9C%8D%E5%8A%A1%E9%97%B4%E8%B0%83%E7%94%A8feign%E4%B8%8E%E6%96%AD%E8%B7%AF%E5%99%A8hystrix">1.2. 服务间调用Feign与断路器Hystrix</a></li><li><a href="#13-%E7%BD%91%E5%85%B3zuulgatyway">1.3. 网关Zuul、gatyway</a></li><li><a href="#14-%E5%88%86%E5%B8%83%E5%BC%8F%E9%85%8D%E7%BD%AEconsul">1.4. 分布式配置consul</a></li><li><a href="#15-%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1ribbon">1.5. 负载均衡Ribbon</a></li></ul></li></ul><h1 id="_1-springcloud常用组件" tabindex="-1"><a class="header-anchor" href="#_1-springcloud常用组件"><span>1. springcloud常用组件</span></a></h1><h2 id="_1-1-服务发现与注册zookeeper、eureka、consoul" tabindex="-1"><a class="header-anchor" href="#_1-1-服务发现与注册zookeeper、eureka、consoul"><span>1.1. 服务发现与注册ZooKeeper、Eureka、consoul</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//只需要使用 @EnableEurekaServer 注解就可以让应用变为 Eureka Server
@EnableEurekaServer
@SpringBootApplication
public class EurekaApplication {
    public static void main(String[] args) {
        SpringApplication.run(EurekaApplication.class, args);
    }
}

eureka:
  instance:
    hostname: localhost
  client:
    # eureka.client.fetch-registry: 表示是否从 Eureka Server 获取注册信息，默认为true。如果这是一个单点的 Eureka Server，不需要同步其他节点的数据，设为false
    fetch-registry: false
    # eureka.client.register-with-eureka: 表示是否将自己注册到 Eureka Server, 默认为true。由于当前应用就是 Eureka Server, 因此设为 false
    register-with-eureka: false
    # 设置 Eureka Server 所在的地址，查询服务和注册服务都需要依赖这个地址
    service-url:
      defaultZone: http://\${eureka.instance.hostname}:\${server.port}/eureka/

pom.xml
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-netflix-eureka-server&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Eureka client</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//只需要使用 @EnableEurekaClient 注解就可以让应用变为 Eureka Client
@EnableEurekaClient
@SpringBootApplication
public class HomepageCourseApplication {
    public static void main(String[] args) {
        SpringApplication.run(HomepageCourseApplication.class, args);
    }
}

eureka:
  client:
    service-url:
      defaultZone: http://localhost:8000/eureka/

pom.xml
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-netflix-eureka-client&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>服务注册与发现consul</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>默认端口8500
启动命令consul agent -client 0.0.0.0 -dev -config-dir=config-dev
mysql.json
{
	&quot;service&quot;: 
	{
		&quot;id&quot;: &quot;mysql&quot;,
		&quot;name&quot;: &quot;mysql&quot;,
		&quot;tags&quot;: [&quot;mysql&quot;],
		&quot;address&quot;: &quot;127.0.0.1&quot;,
		&quot;port&quot;: 3306,
		&quot;checks&quot;: 
		[
			{
				&quot;id&quot;: &quot;mysql&quot;,
    			&quot;name&quot;: &quot;mysql&quot;,
    			&quot;tcp&quot;: &quot;127.0.0.1:3306&quot;,
    			&quot;interval&quot;: &quot;60s&quot;,
    			&quot;timeout&quot;: &quot;2s&quot;
			}
		]
	}
}

java注册
@EnableDiscoveryClient
@RestController

spring.cloud.consul.enabled=true
spring.cloud.consul.host=localhost
spring.cloud.consul.port=8500
spring.cloud.consul.discovery.serviceName=xlsys-hscl-distributed-server
spring.cloud.consul.discovery.tags=xlsys,xlsys-server,xlsys-hscl-distributed-server
spring.cloud.consul.discovery.prefer-ip-address=true
spring.cloud.consul.discovery.instance-id=server2
spring.cloud.consul.discovery.healthCheckPath=/xlsys-check
spring.cloud.consul.discovery.healthCheckInterval=2s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-2-服务间调用feign与断路器hystrix" tabindex="-1"><a class="header-anchor" href="#_1-2-服务间调用feign与断路器hystrix"><span>1.2. 服务间调用Feign与断路器Hystrix</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@EnableFeignClients
@EnableCircuitBreaker
@EnableEurekaClient
@SpringBootApplication
public class HomepageUserApplication {

    public static void main(String[] args) {

        SpringApplication.run(HomepageUserApplication.class, args);
    }
}
与spring:application:name: eureka-client-homepage-course对应CourseClientHystrix熔断降级策略
@FeignClient(value = &quot;eureka-client-homepage-course&quot;, fallback = CourseClientHystrix.class)
public interface CourseClient {

    @RequestMapping(value = &quot;/homepage-course/get/course&quot;, method = RequestMethod.GET)
    CourseInfo getCourseInfo(Long id);

    @RequestMapping(value = &quot;/homepage-course/get/courses&quot;, method = RequestMethod.POST)
    List&lt;CourseInfo&gt; getCourseInfos(@RequestBody CourseInfosRequest request);
}

@Component
public class CourseClientHystrix implements CourseClient {

    @Override
    public CourseInfo getCourseInfo(Long id) {
        return CourseInfo.invalid();
    }

    @Override
    public List&lt;CourseInfo&gt; getCourseInfos(CourseInfosRequest request) {
        return Collections.emptyList();
    }
}

feign:
  hystrix:
    enabled: true
hystrix.command.default.execution.isolation.thread.timeoutInMilliseconds=180000
&lt;!-- 引入 Feign, 可以以声明的方式调用微服务 --&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-openfeign&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;!-- 引入服务容错 Hystrix 的依赖 --&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-netflix-hystrix&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-3-网关zuul、gatyway" tabindex="-1"><a class="header-anchor" href="#_1-3-网关zuul、gatyway"><span>1.3. 网关Zuul、gatyway</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//SpringCloudApplication = @SpringBootApplication + @EnableDiscoveryClient + @EnableCircuitBreaker
@EnableZuulProxy
@SpringCloudApplication
public class ZuulGatewayApplication {

    public static void main(String[] args) {

        SpringApplication.run(ZuulGatewayApplication.class, args);
    }
}
server:
  port: 9000

zuul:
  prefix: /imooc
  routes:
    course:
      path: /homepage-course/** ==&gt;server.servlet.context-path:/homepage-course
      serviceId: eureka-client-homepage-course ==&gt;spring.application.name:eureka-client-homepage-course
      strip-prefix: false
    user:
      path: /homepage-user/**
      serviceId: eureka-client-homepage-user
      strip-prefix: false
访问网关：http://网关服务ip:网关服务的端口号/imooc/....
不访问网关：http://普通服务ip:普通服务的端口号/....

pom.xml
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-netflix-zuul&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>网关gateway</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>spring.cloud.gateway.discovery.locator.enabled=true
spring.cloud.gateway.discovery.locator.lower-case-service-id=true
spring.cloud.gateway.httpclient.ssl.useInsecureTrustManager=true
spring.cloud.gateway.httpclient.ssl.handshake-timeout-millis=10000
spring.cloud.gateway.httpclient.ssl.close-notify-flush-timeout-millis=3000
spring.cloud.gateway.httpclient.ssl.close-notify-read-timeout-millis=0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-4-分布式配置consul" tabindex="-1"><a class="header-anchor" href="#_1-4-分布式配置consul"><span>1.4. 分布式配置consul</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>spring.cloud.consul.config.enabled=true
spring.cloud.consul.config.format=PROPERTIES
spring.cloud.consul.config.prefix=config
spring.cloud.consul.config.data-key=data

@EnableFeignClients //启用OpenFeign

服务间调用
@FeignClient(&quot;server2&quot;)
public interface OpenFeginDemo {
    @GetMapping(&quot;/testserver2&quot;)
    public String test();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-5-负载均衡ribbon" tabindex="-1"><a class="header-anchor" href="#_1-5-负载均衡ribbon"><span>1.5. 负载均衡Ribbon</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>ribbon.ConnectTimeout=30000
ribbon.ReadTimeout=60000
ribbon.SocketTimeout=60000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),r=[a];function t(d,u){return i(),n("div",null,r)}const v=e(s,[["render",t],["__file","springcloud.html.vue"]]),m=JSON.parse('{"path":"/backend/j2ee/springcloud.html","title":"SpringCloud","lang":"zh-CN","frontmatter":{"title":"SpringCloud","date":"2023-01-01T00:00:00.000Z","tags":"java框架","categories":"后端","description":"1. springcloud常用组件 1.1. 服务发现与注册ZooKeeper、Eureka、consoul 1.2. 服务间调用Feign与断路器Hystrix 1.3. 网关Zuul、gatyway 1.4. 分布式配置consul 1.5. 负载均衡Ribbon 1. springcloud常用组件 1.1. 服务发现与注册ZooKeeper、...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/j2ee/springcloud.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"SpringCloud"}],["meta",{"property":"og:description","content":"1. springcloud常用组件 1.1. 服务发现与注册ZooKeeper、Eureka、consoul 1.2. 服务间调用Feign与断路器Hystrix 1.3. 网关Zuul、gatyway 1.4. 分布式配置consul 1.5. 负载均衡Ribbon 1. springcloud常用组件 1.1. 服务发现与注册ZooKeeper、..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringCloud\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"1.1. 服务发现与注册ZooKeeper、Eureka、consoul","slug":"_1-1-服务发现与注册zookeeper、eureka、consoul","link":"#_1-1-服务发现与注册zookeeper、eureka、consoul","children":[]},{"level":2,"title":"1.2. 服务间调用Feign与断路器Hystrix","slug":"_1-2-服务间调用feign与断路器hystrix","link":"#_1-2-服务间调用feign与断路器hystrix","children":[]},{"level":2,"title":"1.3. 网关Zuul、gatyway","slug":"_1-3-网关zuul、gatyway","link":"#_1-3-网关zuul、gatyway","children":[]},{"level":2,"title":"1.4. 分布式配置consul","slug":"_1-4-分布式配置consul","link":"#_1-4-分布式配置consul","children":[]},{"level":2,"title":"1.5. 负载均衡Ribbon","slug":"_1-5-负载均衡ribbon","link":"#_1-5-负载均衡ribbon","children":[]}],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":2.64,"words":792},"filePathRelative":"backend/j2ee/springcloud.md","localizedDate":"2023年1月1日","excerpt":"<!-- TOC -->\\n<ul>\\n<li><a href=\\"#1-springcloud%E5%B8%B8%E7%94%A8%E7%BB%84%E4%BB%B6\\">1. springcloud常用组件</a>\\n<ul>\\n<li><a href=\\"#11-%E6%9C%8D%E5%8A%A1%E5%8F%91%E7%8E%B0%E4%B8%8E%E6%B3%A8%E5%86%8Czookeepereurekaconsoul\\">1.1. 服务发现与注册ZooKeeper、Eureka、consoul</a></li>\\n<li><a href=\\"#12-%E6%9C%8D%E5%8A%A1%E9%97%B4%E8%B0%83%E7%94%A8feign%E4%B8%8E%E6%96%AD%E8%B7%AF%E5%99%A8hystrix\\">1.2. 服务间调用Feign与断路器Hystrix</a></li>\\n<li><a href=\\"#13-%E7%BD%91%E5%85%B3zuulgatyway\\">1.3. 网关Zuul、gatyway</a></li>\\n<li><a href=\\"#14-%E5%88%86%E5%B8%83%E5%BC%8F%E9%85%8D%E7%BD%AEconsul\\">1.4. 分布式配置consul</a></li>\\n<li><a href=\\"#15-%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1ribbon\\">1.5. 负载均衡Ribbon</a></li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{v as comp,m as data};
