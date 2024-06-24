import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o as d,c as r,b as e,d as n,e as l,a as i}from"./app-DqkiJzuz.js";const o={},c=i(`<h2 id="skywalking" tabindex="-1"><a class="header-anchor" href="#skywalking"><span>Skywalking</span></a></h2><p>Skywalking是专为微服务、云原生和基于容器的（Kubernetes）架构设计的分布式系统性能监控工具。</p><h2 id="skywalking关键特性" tabindex="-1"><a class="header-anchor" href="#skywalking关键特性"><span>Skywalking关键特性</span></a></h2><ul><li>分布式跟踪:端到端分布式跟踪。服务拓扑分析、以服务为中心的可观察性和API仪表板。</li><li>针对您的技术栈的代理:Java、.Net Core、PHP、NodeJS、Golang、LUA、Rust、C++、客户端JavaScript和Python代理，持续积极开发和维护。</li><li>早期采用eBPF技术:Rover代理作为指标收集器和性能分析工具，采用eBPF技术来诊断CPU和网络性能问题。</li><li>扩展能力:从一个SkyWalking集群中可以收集和分析1000亿级别的遥测数据。</li><li>成熟的遥测生态系统支持:支持成熟的遥测生态系统的指标、跟踪和日志，例如Zipkin、OpenTelemetry、Prometheus、Zabbix、Fluentd等。</li><li>原生APM数据库:BanyanDB是一个2022年创建的可观察性数据库，旨在接收、分析和存储遥测/可观察性数据。</li><li>一致的指标聚合:SkyWalking本机的度量格式和广泛使用的度量格式（如OpenCensus、OTLP、Telegraf、Zabbix等）通过相同的脚本管道进行处理。</li><li>日志管理管道:通过脚本管道支持日志格式化、提取指标和各种采样策略，具有高性能。</li><li>报警和遥测管道:支持基于服务、基于部署和基于API的报警规则设置。支持将报警和所有遥测数据转发给第三方。</li></ul><h2 id="skywalking搭建" tabindex="-1"><a class="header-anchor" href="#skywalking搭建"><span>Skywalking搭建</span></a></h2><ol><li>安装Skywalking</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/sca/skywalking
<span class="token builtin class-name">cd</span> /etc/sca/skywalking
<span class="token function">cat</span> <span class="token operator">&gt;</span> docker-compose.yaml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
version: &#39;3&#39;
services:
  mysql:
    container_name: mysql
    image: mysql:8
    restart: always
    environment: 
      - MYSQL_ROOT_PASSWORD=root
    ports:
      - &quot;3306:3306&quot;
  nacos:
    image: nacos/nacos-server:v2.2.1-slim
    container_name: nacos
    restart: always
    environment:
      - PREFER_HOST_MODE=hostname
      - MODE=standalone
      - NACOS_AUTH_IDENTITY_KEY=2222
      - NACOS_AUTH_IDENTITY_VALUE=2xxx
      - NACOS_AUTH_TOKEN=SecretKey012345678901234567890123456789012345678901234567890123456789
    depends_on:
      - mysql
    ports:
      - &quot;7848:7848&quot;
      - &quot;8848:8848&quot;
      - &quot;9848:9848&quot;
  oap:
    image: apache/skywalking-oap-server:9.4.0
    container_name: oap
    restart: always
    ports:
      - &quot;11800:11800&quot;
      - &quot;12800:12800&quot;

  oap-ui:
    image: apache/skywalking-ui:9.4.0
    container_name: oap-ui
    restart: always
    environment:
      SW_OAP_ADDRESS: http://oap:12800
    ports:
      - &quot;8080:8080&quot;
    depends_on:
      - oap
EOF</span>
<span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),g=e("li",null,"11800端口用于skywalking将应用的服务监控信息收集端口",-1),v=e("li",null,"12800端口用于skywalking对UI提供查询接口",-1),u=e("li",null,"8080端口是Skywalking WebUI接口提供可视化交互",-1),p={href:"https://skywalking.apache.org/downloads/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://skywalking.apache.org/docs/skywalking-java/v8.15.0/readme/",target:"_blank",rel:"noopener noreferrer"},k=i(`<ol start="2"><li>安装Java Agent</li></ol><ul><li>下载后apache-skywalking-java-agent-8.15.0.tgz后解压缩到D:\\java-agent<br> 打开D:\\java-agent\\config\\agent.config，将104行127.0.0.1:11800改成 宿主机IP:11800</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>collector.backend_service=\${SW_AGENT_COLLECTOR_BACKEND_SERVICES:192.168.31.230:11800}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">java</span> jar <span class="token punctuation">\\</span>
-javaagent:D:<span class="token punctuation">\\</span>java-agent<span class="token punctuation">\\</span>skywalking-agent.jar <span class="token punctuation">\\</span>
<span class="token parameter variable">-Dskywalking.agent.service_name</span><span class="token operator">=</span>c-service <span class="token punctuation">\\</span>
<span class="token parameter variable">-Dskywalking.logging.file_name</span><span class="token operator">=</span>c-service-api.log <span class="token punctuation">\\</span>
xxx.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>idea的配置<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/8c7f59ec782d865f3db03.jpg" alt="agentidea.png"></p>`,5),b=e("br",null,null,-1),y={href:"http://192.168.31.230:8080/",target:"_blank",rel:"noopener noreferrer"},h=e("br",null,null,-1),f=e("img",{src:"https://290ff162.telegraph-image-eg9.pages.dev/file/13ad44ad9260b2a4c8c1a.jpg",alt:"skywalking.png"},null,-1),q=i(`<h2 id="springboot整合-日志" tabindex="-1"><a class="header-anchor" href="#springboot整合-日志"><span>Springboot整合+日志</span></a></h2><ol><li>pom.xml,注意版本号与Skywalking的一致</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;!-- 该引用用于logback获取tranceId,也就是tid --&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.apache.skywalking&lt;/groupId&gt;
    &lt;artifactId&gt;apm-toolkit-logback-1.x&lt;/artifactId&gt;
    &lt;version&gt;9.2.0&lt;/version&gt;
&lt;/dependency&gt;

&lt;!-- 该引用用于代码获取tranceId --&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.apache.skywalking&lt;/groupId&gt;
    &lt;artifactId&gt;apm-toolkit-trace&lt;/artifactId&gt;
    &lt;version&gt;9.2.0&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>logback配置logback.xml</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;configuration scan=&quot;true&quot; scanPeriod=&quot; 5 seconds&quot;&gt;

    &lt;appender name=&quot;stdout&quot; class=&quot;ch.qos.logback.core.ConsoleAppender&quot;&gt;
        &lt;encoder class=&quot;ch.qos.logback.core.encoder.LayoutWrappingEncoder&quot;&gt;
            &lt;layout class=&quot;org.apache.skywalking.apm.toolkit.log.logback.v1.x.mdc.TraceIdMDCPatternLogbackLayout&quot;&gt;
                &lt;Pattern&gt;%d{yyyy-MM-dd HH:mm:ss.SSS} [%X{tid}] [%thread] %-5level %logger{36} -%msg%n&lt;/Pattern&gt;
            &lt;/layout&gt;
        &lt;/encoder&gt;
    &lt;/appender&gt;

    &lt;appender name=&quot;grpc-log&quot; class=&quot;org.apache.skywalking.apm.toolkit.log.logback.v1.x.log.GRPCLogClientAppender&quot;&gt;
        &lt;encoder class=&quot;ch.qos.logback.core.encoder.LayoutWrappingEncoder&quot;&gt;
            &lt;layout class=&quot;org.apache.skywalking.apm.toolkit.log.logback.v1.x.mdc.TraceIdMDCPatternLogbackLayout&quot;&gt;
                &lt;Pattern&gt;%d{yyyy-MM-dd HH:mm:ss.SSS} [%X{tid}] [%thread] %-5level %logger{36} -%msg%n&lt;/Pattern&gt;
            &lt;/layout&gt;
        &lt;/encoder&gt;
    &lt;/appender&gt;

    &lt;appender name=&quot;fileAppender&quot; class=&quot;ch.qos.logback.core.FileAppender&quot;&gt;
        &lt;file&gt;/tmp/skywalking-logs/logback/e2e-service-provider.log&lt;/file&gt;
        &lt;encoder class=&quot;ch.qos.logback.core.encoder.LayoutWrappingEncoder&quot;&gt;
            &lt;layout class=&quot;org.apache.skywalking.apm.toolkit.log.logback.v1.x.TraceIdPatternLogbackLayout&quot;&gt;
                &lt;Pattern&gt;[%sw_ctx] [%level] %d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %logger:%line - %msg%n&lt;/Pattern&gt;
            &lt;/layout&gt;
        &lt;/encoder&gt;
    &lt;/appender&gt;

    &lt;!--需要将日志单独输出的包路径--&gt;
    &lt;logger name=&quot;com.itlaoqi.aservice&quot; additivity=&quot;false&quot; level=&quot;INFO&quot;&gt;
        &lt;appender-ref ref=&quot;stdout&quot;/&gt;
        &lt;appender-ref ref=&quot;grpc-log&quot;/&gt;
        &lt;appender-ref ref=&quot;fileAppender&quot;/&gt;
    &lt;/logger&gt;

    &lt;root level=&quot;INFO&quot;&gt;
        &lt;appender-ref ref=&quot;grpc-log&quot;/&gt;
        &lt;appender-ref ref=&quot;stdout&quot;/&gt;
    &lt;/root&gt;
    &lt;logger name=&quot;fileLogger&quot; level=&quot;INFO&quot;&gt;
        &lt;appender-ref ref=&quot;fileAppender&quot;/&gt;
    &lt;/logger&gt;
&lt;/configuration&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>配置agent配置文件，config/agent.config</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>agent.service_name=my-application
collector.backend_service=oap-server-host:11800
logging.level=DEBUG

plugin.logging=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>其他的跟上面差不多</li><li>应用里面使用@Sl4j打印日志即可</li><li>查看日志收集结果<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/82cc1e58f1c0ea7df5af0.jpg" alt="skywalkinglog.png"></li></ol>`,8);function w(_,S){const a=s("ExternalLinkIcon");return d(),r("div",null,[c,e("ul",null,[g,v,u,e("li",null,[n("Agent下载地址："),e("a",p,[n("https://skywalking.apache.org/downloads/"),l(a)])]),e("li",null,[n("Java Agent说明文档："),e("a",m,[n("https://skywalking.apache.org/docs/skywalking-java/v8.15.0/readme/"),l(a)])])]),k,e("p",null,[n("通过WebUI获取监控数据"),b,e("a",y,[n("http://192.168.31.230:8080/"),l(a)]),h,f]),q])}const A=t(o,[["render",w],["__file","skywalking.html.vue"]]),I=JSON.parse('{"path":"/backend/linktracing/skywalking.html","title":"Skywalking","lang":"zh-CN","frontmatter":{"title":"Skywalking","date":"2023-01-01T00:00:00.000Z","tags":"Skywalking","categories":"后端","description":"Skywalking Skywalking是专为微服务、云原生和基于容器的（Kubernetes）架构设计的分布式系统性能监控工具。 Skywalking关键特性 分布式跟踪:端到端分布式跟踪。服务拓扑分析、以服务为中心的可观察性和API仪表板。 针对您的技术栈的代理:Java、.Net Core、PHP、NodeJS、Golang、LUA、Rust、...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/linktracing/skywalking.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"Skywalking"}],["meta",{"property":"og:description","content":"Skywalking Skywalking是专为微服务、云原生和基于容器的（Kubernetes）架构设计的分布式系统性能监控工具。 Skywalking关键特性 分布式跟踪:端到端分布式跟踪。服务拓扑分析、以服务为中心的可观察性和API仪表板。 针对您的技术栈的代理:Java、.Net Core、PHP、NodeJS、Golang、LUA、Rust、..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/8c7f59ec782d865f3db03.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Skywalking\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/8c7f59ec782d865f3db03.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/13ad44ad9260b2a4c8c1a.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/82cc1e58f1c0ea7df5af0.jpg\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"Skywalking","slug":"skywalking","link":"#skywalking","children":[]},{"level":2,"title":"Skywalking关键特性","slug":"skywalking关键特性","link":"#skywalking关键特性","children":[]},{"level":2,"title":"Skywalking搭建","slug":"skywalking搭建","link":"#skywalking搭建","children":[]},{"level":2,"title":"Springboot整合+日志","slug":"springboot整合-日志","link":"#springboot整合-日志","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.19,"words":957},"filePathRelative":"backend/linktracing/skywalking.md","localizedDate":"2023年1月1日","excerpt":"<h2>Skywalking</h2>\\n<p>Skywalking是专为微服务、云原生和基于容器的（Kubernetes）架构设计的分布式系统性能监控工具。</p>\\n<h2>Skywalking关键特性</h2>\\n<ul>\\n<li>分布式跟踪:端到端分布式跟踪。服务拓扑分析、以服务为中心的可观察性和API仪表板。</li>\\n<li>针对您的技术栈的代理:Java、.Net Core、PHP、NodeJS、Golang、LUA、Rust、C++、客户端JavaScript和Python代理，持续积极开发和维护。</li>\\n<li>早期采用eBPF技术:Rover代理作为指标收集器和性能分析工具，采用eBPF技术来诊断CPU和网络性能问题。</li>\\n<li>扩展能力:从一个SkyWalking集群中可以收集和分析1000亿级别的遥测数据。</li>\\n<li>成熟的遥测生态系统支持:支持成熟的遥测生态系统的指标、跟踪和日志，例如Zipkin、OpenTelemetry、Prometheus、Zabbix、Fluentd等。</li>\\n<li>原生APM数据库:BanyanDB是一个2022年创建的可观察性数据库，旨在接收、分析和存储遥测/可观察性数据。</li>\\n<li>一致的指标聚合:SkyWalking本机的度量格式和广泛使用的度量格式（如OpenCensus、OTLP、Telegraf、Zabbix等）通过相同的脚本管道进行处理。</li>\\n<li>日志管理管道:通过脚本管道支持日志格式化、提取指标和各种采样策略，具有高性能。</li>\\n<li>报警和遥测管道:支持基于服务、基于部署和基于API的报警规则设置。支持将报警和所有遥测数据转发给第三方。</li>\\n</ul>","autoDesc":true}');export{A as comp,I as data};
