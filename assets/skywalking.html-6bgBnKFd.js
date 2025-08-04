import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as r,c as d,a as e,b as n,d as s,e as l}from"./app-7KT7HDzT.js";const c={},v=l(`<h2 id="skywalking" tabindex="-1"><a class="header-anchor" href="#skywalking"><span>Skywalking</span></a></h2><p>Skywalking是专为微服务、云原生和基于容器的（Kubernetes）架构设计的分布式系统性能监控工具。</p><h2 id="skywalking关键特性" tabindex="-1"><a class="header-anchor" href="#skywalking关键特性"><span>Skywalking关键特性</span></a></h2><ul><li>分布式跟踪:端到端分布式跟踪。服务拓扑分析、以服务为中心的可观察性和API仪表板。</li><li>针对您的技术栈的代理:Java、.Net Core、PHP、NodeJS、Golang、LUA、Rust、C++、客户端JavaScript和Python代理，持续积极开发和维护。</li><li>早期采用eBPF技术:Rover代理作为指标收集器和性能分析工具，采用eBPF技术来诊断CPU和网络性能问题。</li><li>扩展能力:从一个SkyWalking集群中可以收集和分析1000亿级别的遥测数据。</li><li>成熟的遥测生态系统支持:支持成熟的遥测生态系统的指标、跟踪和日志，例如Zipkin、OpenTelemetry、Prometheus、Zabbix、Fluentd等。</li><li>原生APM数据库:BanyanDB是一个2022年创建的可观察性数据库，旨在接收、分析和存储遥测/可观察性数据。</li><li>一致的指标聚合:SkyWalking本机的度量格式和广泛使用的度量格式（如OpenCensus、OTLP、Telegraf、Zabbix等）通过相同的脚本管道进行处理。</li><li>日志管理管道:通过脚本管道支持日志格式化、提取指标和各种采样策略，具有高性能。</li><li>报警和遥测管道:支持基于服务、基于部署和基于API的报警规则设置。支持将报警和所有遥测数据转发给第三方。</li></ul><h2 id="skywalking搭建" tabindex="-1"><a class="header-anchor" href="#skywalking搭建"><span>Skywalking搭建</span></a></h2><ol><li>安装Skywalking</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/sca/skywalking
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),u=e("li",null,"11800端口用于skywalking将应用的服务监控信息收集端口",-1),o=e("li",null,"12800端口用于skywalking对UI提供查询接口",-1),m=e("li",null,"8080端口是Skywalking WebUI接口提供可视化交互",-1),b={href:"https://skywalking.apache.org/downloads/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://skywalking.apache.org/docs/skywalking-java/v8.15.0/readme/",target:"_blank",rel:"noopener noreferrer"},p=l(`<ol start="2"><li>安装Java Agent</li></ol><ul><li>下载后apache-skywalking-java-agent-8.15.0.tgz后解压缩到D:\\java-agent<br> 打开D:\\java-agent\\config\\agent.config，将104行127.0.0.1:11800改成 宿主机IP:11800</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>collector.backend_service=\${SW_AGENT_COLLECTOR_BACKEND_SERVICES:192.168.31.230:11800}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">java</span> jar <span class="token punctuation">\\</span>
-javaagent:D:<span class="token punctuation">\\</span>java-agent<span class="token punctuation">\\</span>skywalking-agent.jar <span class="token punctuation">\\</span>
<span class="token parameter variable">-Dskywalking.agent.service_name</span><span class="token operator">=</span>c-service <span class="token punctuation">\\</span>
<span class="token parameter variable">-Dskywalking.logging.file_name</span><span class="token operator">=</span>c-service-api.log <span class="token punctuation">\\</span>
xxx.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>idea的配置<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/8c7f59ec782d865f3db03.jpg" alt="agentidea.png"></p>`,5),h=e("br",null,null,-1),C={href:"http://192.168.31.230:8080/",target:"_blank",rel:"noopener noreferrer"},S=e("br",null,null,-1),f=e("img",{src:"https://290ff162.telegraph-image-eg9.pages.dev/file/13ad44ad9260b2a4c8c1a.jpg",alt:"skywalking.png"},null,-1),y=l(`<h2 id="springboot整合-日志" tabindex="-1"><a class="header-anchor" href="#springboot整合-日志"><span>Springboot整合+日志</span></a></h2><ol><li>pom.xml,注意版本号与Skywalking的一致</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;!-- 该引用用于logback获取tranceId,也就是tid --&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>其他的跟上面差不多</li><li>应用里面使用@Sl4j打印日志即可</li><li>查看日志收集结果<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/82cc1e58f1c0ea7df5af0.jpg" alt="skywalkinglog.png"></li></ol><h1 id="sky源码" tabindex="-1"><a class="header-anchor" href="#sky源码"><span>Sky源码</span></a></h1><ul><li>controller中traceId产生：SkyWalkingAgent的premain方法，访问每个插件的skywalking-plugin.def文件加载所有插件包括接口插件（org.apache.skywalking.apm.plugin.spring.mvc.v5.define.ControllerInstrumentation,指定拦截org.springframework.stereotype.Controller类，而它的父类AbstractControllerInstrumentation，已经拦截了RequestMapping，拦截类是RestMappingMethodInterceptor），同时调用installClassTransformer方法增强对应插件类名的类，里面调用了静态内部类Transformer的transform方法，调用所有插件的define方法，而所有插件继承了AbstractClassEnhancePluginDefine类，它的默认define方法调用子类ClassEnhancePluginDefine的enhanceClass和enhanceInstance分别增强了构造方法、实例方法和静态方法，都是调用子类插件的getConstructorsInterceptPoints(),getInstanceMethodsInterceptPoints(),getStaticMethodsInterceptPoints()3个方法返回拦截器的全类名实现调用拦截器接口实现类InstanceMethodsAroundInterceptor的beforeMethod目的，而traceId的产生由RestMappingMethodInterceptor的父类AbstractMethodInterceptor调用beforeMethod，然后里面再调用ContextManager的createEntrySpan方法创建Span，同时采集其他请求信息，服务间调用的时候通过HttpClientDoExecuteInterceptor的beforeMethod方法将trace信息添加到请求头</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class SkyWalkingAgent {
    //主入口。使用byte-buddy transform 来增强所有在插件中定义的类。
    public static void premain(String agentArgs, Instrumentation instrumentation) throws PluginException {
        final PluginFinder pluginFinder;
        try {
            //加载配置
            SnifferConfigInitializer.initializeCoreConfig(agentArgs);
        } catch (Exception e) {
            // try to resolve a new logger, and use the new logger to write the error log here
            LogManager.getLogger(SkyWalkingAgent.class)
                    .error(e, &quot;SkyWalking agent initialized failure. Shutting down.&quot;);
            return;
        } finally {
            // refresh logger again after initialization finishes
            LOGGER = LogManager.getLogger(SkyWalkingAgent.class);
        }

        if (!Config.Agent.ENABLE) {
            LOGGER.warn(&quot;SkyWalking agent is disabled.&quot;);
            return;
        }

        try {
            //加载插件
            pluginFinder = new PluginFinder(new PluginBootstrap().loadPlugins());
        } catch (AgentPackageNotFoundException ape) {
            LOGGER.error(ape, &quot;Locate agent.jar failure. Shutting down.&quot;);
            return;
        } catch (Exception e) {
            LOGGER.error(e, &quot;SkyWalking agent initialized failure. Shutting down.&quot;);
            return;
        }

        try {
            //方法增强
            installClassTransformer(instrumentation, pluginFinder);
        } catch (Exception e) {
            LOGGER.error(e, &quot;Skywalking agent installed class transformer failure.&quot;);
        }

        try {
            //启动服务
            ServiceManager.INSTANCE.boot();
        } catch (Exception e) {
            LOGGER.error(e, &quot;Skywalking agent boot failure.&quot;);
        }

        Runtime.getRuntime()
               .addShutdownHook(new Thread(ServiceManager.INSTANCE::shutdown, &quot;skywalking service shutdown thread&quot;));
    }

    static void installClassTransformer(Instrumentation instrumentation, PluginFinder pluginFinder) throws Exception {
        LOGGER.info(&quot;Skywalking agent begin to install transformer ...&quot;);

        AgentBuilder agentBuilder = newAgentBuilder().ignore(
            nameStartsWith(&quot;net.bytebuddy.&quot;)
                .or(nameStartsWith(&quot;org.slf4j.&quot;))
                .or(nameStartsWith(&quot;org.groovy.&quot;))
                .or(nameContains(&quot;javassist&quot;))
                .or(nameContains(&quot;.asm.&quot;))
                .or(nameContains(&quot;.reflectasm.&quot;))
                .or(nameStartsWith(&quot;sun.reflect&quot;))
                .or(allSkyWalkingAgentExcludeToolkit())
                .or(ElementMatchers.isSynthetic()));

        JDK9ModuleExporter.EdgeClasses edgeClasses = new JDK9ModuleExporter.EdgeClasses();
        try {
            agentBuilder = BootstrapInstrumentBoost.inject(pluginFinder, instrumentation, agentBuilder, edgeClasses);
        } catch (Exception e) {
            throw new Exception(&quot;SkyWalking agent inject bootstrap instrumentation failure. Shutting down.&quot;, e);
        }

        try {
            agentBuilder = JDK9ModuleExporter.openReadEdge(instrumentation, agentBuilder, edgeClasses);
        } catch (Exception e) {
            throw new Exception(&quot;SkyWalking agent open read edge in JDK 9+ failure. Shutting down.&quot;, e);
        }
        //核心。agentBuilder#transform,
        agentBuilder.type(pluginFinder.buildMatch())
                    .transform(new Transformer(pluginFinder))
                    .with(AgentBuilder.RedefinitionStrategy.RETRANSFORMATION)
                    .with(new RedefinitionListener())
                    .with(new Listener())
                    .installOn(instrumentation);

        PluginFinder.pluginInitCompleted();

        LOGGER.info(&quot;Skywalking agent transformer has installed.&quot;);
    }

    private static class Transformer implements AgentBuilder.Transformer {
        private PluginFinder pluginFinder;

        Transformer(PluginFinder pluginFinder) {
            this.pluginFinder = pluginFinder;
        }

        @Override
        //调用所有插件的define
        public DynamicType.Builder&lt;?&gt; transform(final DynamicType.Builder&lt;?&gt; builder,
                                                final TypeDescription typeDescription,
                                                final ClassLoader classLoader,
                                                final JavaModule javaModule,
                                                final ProtectionDomain protectionDomain) {
            LoadedLibraryCollector.registerURLClassLoader(classLoader);
            List&lt;AbstractClassEnhancePluginDefine&gt; pluginDefines = pluginFinder.find(typeDescription);
            if (pluginDefines.size() &gt; 0) {
                DynamicType.Builder&lt;?&gt; newBuilder = builder;
                EnhanceContext context = new EnhanceContext();
                for (AbstractClassEnhancePluginDefine define : pluginDefines) {
                    DynamicType.Builder&lt;?&gt; possibleNewBuilder = define.define(
                        typeDescription, newBuilder, classLoader, context);
                    if (possibleNewBuilder != null) {
                        newBuilder = possibleNewBuilder;
                    }
                }
                if (context.isEnhanced()) {
                    LOGGER.debug(&quot;Finish the prepare stage for {}.&quot;, typeDescription.getName());
                }

                return newBuilder;
            }

            LOGGER.debug(&quot;Matched class {}, but ignore by finding mechanism.&quot;, typeDescription.getTypeName());
            return builder;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public abstract class AbstractClassEnhancePluginDefine {
    /**
     * Main entrance of enhancing the class.
     *
     * @param typeDescription target class description.
     * @param builder         byte-buddy&#39;s builder to manipulate target class&#39;s bytecode.
     * @param classLoader     load the given transformClass
     * @return the new builder, or &lt;code&gt;null&lt;/code&gt; if not be enhanced.
     * @throws PluginException when set builder failure.
     */
    public DynamicType.Builder&lt;?&gt; define(TypeDescription typeDescription, DynamicType.Builder&lt;?&gt; builder,
        ClassLoader classLoader, EnhanceContext context) throws PluginException {
        String interceptorDefineClassName = this.getClass().getName();
        String transformClassName = typeDescription.getTypeName();
        if (StringUtil.isEmpty(transformClassName)) {
            LOGGER.warn(&quot;classname of being intercepted is not defined by {}.&quot;, interceptorDefineClassName);
            return null;
        }

        LOGGER.debug(&quot;prepare to enhance class {} by {}.&quot;, transformClassName, interceptorDefineClassName);
        WitnessFinder finder = WitnessFinder.INSTANCE;
        /**
         * find witness classes for enhance class
         */
        String[] witnessClasses = witnessClasses();
        if (witnessClasses != null) {
            for (String witnessClass : witnessClasses) {
                if (!finder.exist(witnessClass, classLoader)) {
                    LOGGER.warn(&quot;enhance class {} by plugin {} is not activated. Witness class {} does not exist.&quot;, transformClassName, interceptorDefineClassName, witnessClass);
                    return null;
                }
            }
        }
        List&lt;WitnessMethod&gt; witnessMethods = witnessMethods();
        if (!CollectionUtil.isEmpty(witnessMethods)) {
            for (WitnessMethod witnessMethod : witnessMethods) {
                if (!finder.exist(witnessMethod, classLoader)) {
                    LOGGER.warn(&quot;enhance class {} by plugin {} is not activated. Witness method {} does not exist.&quot;, transformClassName, interceptorDefineClassName, witnessMethod);
                    return null;
                }
            }
        }

        /**
         * find origin class source code for interceptor
         */
        DynamicType.Builder&lt;?&gt; newClassBuilder = this.enhance(typeDescription, builder, classLoader, context);

        context.initializationStageCompleted();
        LOGGER.debug(&quot;enhance class {} by {} completely.&quot;, transformClassName, interceptorDefineClassName);

        return newClassBuilder;
    }

    /**
     * Begin to define how to enhance class. After invoke this method, only means definition is finished.
     *
     * @param typeDescription target class description
     * @param newClassBuilder byte-buddy&#39;s builder to manipulate class bytecode.
     * @return new byte-buddy&#39;s builder for further manipulation.
     */
    protected DynamicType.Builder&lt;?&gt; enhance(TypeDescription typeDescription, DynamicType.Builder&lt;?&gt; newClassBuilder,
                                             ClassLoader classLoader, EnhanceContext context) throws PluginException {
        newClassBuilder = this.enhanceClass(typeDescription, newClassBuilder, classLoader);

        newClassBuilder = this.enhanceInstance(typeDescription, newClassBuilder, classLoader, context);

        return newClassBuilder;
    }

    /**
     * Enhance a class to intercept constructors and class instance methods.
     *
     * @param typeDescription target class description
     * @param newClassBuilder byte-buddy&#39;s builder to manipulate class bytecode.
     * @return new byte-buddy&#39;s builder for further manipulation.
     */
    protected abstract DynamicType.Builder&lt;?&gt; enhanceInstance(TypeDescription typeDescription,
                                                     DynamicType.Builder&lt;?&gt; newClassBuilder, ClassLoader classLoader,
                                                     EnhanceContext context) throws PluginException;

    /**
     * Enhance a class to intercept class static methods.
     *
     * @param typeDescription target class description
     * @param newClassBuilder byte-buddy&#39;s builder to manipulate class bytecode.
     * @return new byte-buddy&#39;s builder for further manipulation.
     */
    protected abstract DynamicType.Builder&lt;?&gt; enhanceClass(TypeDescription typeDescription, DynamicType.Builder&lt;?&gt; newClassBuilder,
                                                  ClassLoader classLoader) throws PluginException;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public abstract class ClassEnhancePluginDefine extends AbstractClassEnhancePluginDefine {
    private static final ILog LOGGER = LogManager.getLogger(ClassEnhancePluginDefine.class);

    /**
     * Enhance a class to intercept constructors and class instance methods.
     *
     * @param typeDescription target class description
     * @param newClassBuilder byte-buddy&#39;s builder to manipulate class bytecode.
     * @return new byte-buddy&#39;s builder for further manipulation.
     */
    @Override
    protected DynamicType.Builder&lt;?&gt; enhanceInstance(TypeDescription typeDescription,
        DynamicType.Builder&lt;?&gt; newClassBuilder, ClassLoader classLoader,
        EnhanceContext context) throws PluginException {
        ConstructorInterceptPoint[] constructorInterceptPoints = getConstructorsInterceptPoints();
        InstanceMethodsInterceptPoint[] instanceMethodsInterceptPoints = getInstanceMethodsInterceptPoints();
        String enhanceOriginClassName = typeDescription.getTypeName();
        boolean existedConstructorInterceptPoint = false;
        if (constructorInterceptPoints != null &amp;&amp; constructorInterceptPoints.length &gt; 0) {
            existedConstructorInterceptPoint = true;
        }
        boolean existedMethodsInterceptPoints = false;
        if (instanceMethodsInterceptPoints != null &amp;&amp; instanceMethodsInterceptPoints.length &gt; 0) {
            existedMethodsInterceptPoints = true;
        }
        DelegateNamingResolver delegateNamingResolver = new DelegateNamingResolver(typeDescription.getTypeName(), this);

        /**
         * nothing need to be enhanced in class instance, maybe need enhance static methods.
         */
        if (!existedConstructorInterceptPoint &amp;&amp; !existedMethodsInterceptPoints) {
            return newClassBuilder;
        }

        /**
         * Manipulate class source code.&lt;br/&gt;
         *
         * new class need:&lt;br/&gt;
         * 1.Add field, name {@link #CONTEXT_ATTR_NAME}.
         * 2.Add a field accessor for this field.
         *
         * And make sure the source codes manipulation only occurs once.
         *
         */
        if (!typeDescription.isAssignableTo(EnhancedInstance.class)) {
            if (!context.isObjectExtended()) {
                newClassBuilder = newClassBuilder.defineField(
                    CONTEXT_ATTR_NAME, Object.class, ACC_PRIVATE | ACC_VOLATILE)
                                                 .implement(EnhancedInstance.class)
                                                 .intercept(FieldAccessor.ofField(CONTEXT_ATTR_NAME));
                context.extendObjectCompleted();
            }
        }

        /**
         * 2. enhance constructors
         */
        if (existedConstructorInterceptPoint) {
            for (ConstructorInterceptPoint constructorInterceptPoint : constructorInterceptPoints) {
                if (isBootstrapInstrumentation()) {
                    newClassBuilder = newClassBuilder.constructor(constructorInterceptPoint.getConstructorMatcher())
                                                     .intercept(SuperMethodCall.INSTANCE.andThen(MethodDelegation.withDefaultConfiguration()
                                                                                                                 .to(BootstrapInstrumentBoost
                                                                                                                     .forInternalDelegateClass(constructorInterceptPoint
                                                                                                                         .getConstructorInterceptor()))));
                } else {
                    newClassBuilder = newClassBuilder.constructor(constructorInterceptPoint.getConstructorMatcher())
                                                     .intercept(SuperMethodCall.INSTANCE.andThen(MethodDelegation.withDefaultConfiguration()
                                                                                                                 .to(new ConstructorInter(constructorInterceptPoint
                                                                                                                     .getConstructorInterceptor(), classLoader), delegateNamingResolver.resolve(constructorInterceptPoint))));
                }
            }
        }

        /**
         * 3. enhance instance methods
         */
        if (existedMethodsInterceptPoints) {
            for (InstanceMethodsInterceptPoint instanceMethodsInterceptPoint : instanceMethodsInterceptPoints) {
                String interceptor = instanceMethodsInterceptPoint.getMethodsInterceptor();
                if (StringUtil.isEmpty(interceptor)) {
                    throw new EnhanceException(&quot;no InstanceMethodsAroundInterceptor define to enhance class &quot; + enhanceOriginClassName);
                }
                ElementMatcher.Junction&lt;MethodDescription&gt; junction = not(isStatic()).and(instanceMethodsInterceptPoint.getMethodsMatcher());
                if (instanceMethodsInterceptPoint instanceof DeclaredInstanceMethodsInterceptPoint) {
                    junction = junction.and(ElementMatchers.&lt;MethodDescription&gt;isDeclaredBy(typeDescription));
                }
                if (instanceMethodsInterceptPoint.isOverrideArgs()) {
                    if (isBootstrapInstrumentation()) {
                        newClassBuilder = newClassBuilder.method(junction)
                                                         .intercept(MethodDelegation.withDefaultConfiguration()
                                                                                    .withBinders(Morph.Binder.install(OverrideCallable.class))
                                                                                    .to(BootstrapInstrumentBoost.forInternalDelegateClass(interceptor)));
                    } else {
                        newClassBuilder = newClassBuilder.method(junction)
                                                         .intercept(MethodDelegation.withDefaultConfiguration()
                                                                                    .withBinders(Morph.Binder.install(OverrideCallable.class))
                                                                                    .to(new InstMethodsInterWithOverrideArgs(interceptor, classLoader), delegateNamingResolver.resolve(instanceMethodsInterceptPoint)));
                    }
                } else {
                    if (isBootstrapInstrumentation()) {
                        newClassBuilder = newClassBuilder.method(junction)
                                                         .intercept(MethodDelegation.withDefaultConfiguration()
                                                                                    .to(BootstrapInstrumentBoost.forInternalDelegateClass(interceptor)));
                    } else {
                        newClassBuilder = newClassBuilder.method(junction)
                                                         .intercept(MethodDelegation.withDefaultConfiguration()
                                                                                    .to(new InstMethodsInter(interceptor, classLoader), delegateNamingResolver.resolve(instanceMethodsInterceptPoint)));
                    }
                }
            }
        }

        return newClassBuilder;
    }

    /**
     * Enhance a class to intercept class static methods.
     *
     * @param typeDescription target class description
     * @param newClassBuilder byte-buddy&#39;s builder to manipulate class bytecode.
     * @return new byte-buddy&#39;s builder for further manipulation.
     */
    @Override
    protected DynamicType.Builder&lt;?&gt; enhanceClass(TypeDescription typeDescription, DynamicType.Builder&lt;?&gt; newClassBuilder,
        ClassLoader classLoader) throws PluginException {
        StaticMethodsInterceptPoint[] staticMethodsInterceptPoints = getStaticMethodsInterceptPoints();
        String enhanceOriginClassName = typeDescription.getTypeName();
        if (staticMethodsInterceptPoints == null || staticMethodsInterceptPoints.length == 0) {
            return newClassBuilder;
        }
        DelegateNamingResolver delegateNamingResolver = new DelegateNamingResolver(typeDescription.getTypeName(), this);

        for (StaticMethodsInterceptPoint staticMethodsInterceptPoint : staticMethodsInterceptPoints) {
            String interceptor = staticMethodsInterceptPoint.getMethodsInterceptor();
            if (StringUtil.isEmpty(interceptor)) {
                throw new EnhanceException(&quot;no StaticMethodsAroundInterceptor define to enhance class &quot; + enhanceOriginClassName);
            }

            if (staticMethodsInterceptPoint.isOverrideArgs()) {
                if (isBootstrapInstrumentation()) {
                    newClassBuilder = newClassBuilder.method(isStatic().and(staticMethodsInterceptPoint.getMethodsMatcher()))
                                                     .intercept(MethodDelegation.withDefaultConfiguration()
                                                                                .withBinders(Morph.Binder.install(OverrideCallable.class))
                                                                                .to(BootstrapInstrumentBoost.forInternalDelegateClass(interceptor)));
                } else {
                    newClassBuilder = newClassBuilder.method(isStatic().and(staticMethodsInterceptPoint.getMethodsMatcher()))
                                                     .intercept(MethodDelegation.withDefaultConfiguration()
                                                                                .withBinders(Morph.Binder.install(OverrideCallable.class))
                                                                                .to(new StaticMethodsInterWithOverrideArgs(interceptor), delegateNamingResolver.resolve(staticMethodsInterceptPoint)));
                }
            } else {
                if (isBootstrapInstrumentation()) {
                    newClassBuilder = newClassBuilder.method(isStatic().and(staticMethodsInterceptPoint.getMethodsMatcher()))
                                                     .intercept(MethodDelegation.withDefaultConfiguration()
                                                                                .to(BootstrapInstrumentBoost.forInternalDelegateClass(interceptor)));
                } else {
                    newClassBuilder = newClassBuilder.method(isStatic().and(staticMethodsInterceptPoint.getMethodsMatcher()))
                                                     .intercept(MethodDelegation.withDefaultConfiguration()
                                                                                .to(new StaticMethodsInter(interceptor), delegateNamingResolver.resolve(staticMethodsInterceptPoint)));
                }
            }

        }

        return newClassBuilder;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class TraceContextActivation extends ClassStaticMethodsEnhancePluginDefine {
  //三个拦截器负责生成traceId,spanId,SegementId,都是由ContextManager生成
    public static final String TRACE_ID_INTERCEPT_CLASS = &quot;org.apache.skywalking.apm.toolkit.activation.trace.TraceIDInterceptor&quot;;
    public static final String SEGMENT_ID_INTERCEPT_CLASS = &quot;org.apache.skywalking.apm.toolkit.activation.trace.SegmentIDInterceptor&quot;;
    public static final String SPAN_ID_INTERCEPT_CLASS = &quot;org.apache.skywalking.apm.toolkit.activation.trace.SpanIDInterceptor&quot;;

  @Override
    public StaticMethodsInterceptPoint[] getStaticMethodsInterceptPoints() {
        return new StaticMethodsInterceptPoint[] {
            new StaticMethodsInterceptPoint() {
                @Override
                public ElementMatcher&lt;MethodDescription&gt; getMethodsMatcher() {
                    return named(ENHANCE_TRACE_ID_METHOD);
                }

                @Override
                public String getMethodsInterceptor() {
                    return TRACE_ID_INTERCEPT_CLASS;
                }

                @Override
                public boolean isOverrideArgs() {
                    return false;
                }
            },
            new StaticMethodsInterceptPoint() {
                @Override
                public ElementMatcher&lt;MethodDescription&gt; getMethodsMatcher() {
                    return named(ENHANCE_SEGMENT_ID_METHOD);
                }

                @Override
                public String getMethodsInterceptor() {
                    return SEGMENT_ID_INTERCEPT_CLASS;
                }

                @Override
                public boolean isOverrideArgs() {
                    return false;
                }
            },
            new StaticMethodsInterceptPoint() {
                @Override
                public ElementMatcher&lt;MethodDescription&gt; getMethodsMatcher() {
                    return named(ENHANCE_SPAN_ID_METHOD);
                }

                @Override
                public String getMethodsInterceptor() {
                    return SPAN_ID_INTERCEPT_CLASS;
                }

                @Override
                public boolean isOverrideArgs() {
                    return false;
                }
            },

            new StaticMethodsInterceptPoint() {
                @Override
                public ElementMatcher&lt;MethodDescription&gt; getMethodsMatcher() {
                    return named(ENHANCE_GET_CORRELATION_METHOD);
                }

                @Override
                public String getMethodsInterceptor() {
                    return INTERCEPT_GET_CORRELATION_CLASS;
                }

                @Override
                public boolean isOverrideArgs() {
                    return false;
                }
            },
            new StaticMethodsInterceptPoint() {
                @Override
                public ElementMatcher&lt;MethodDescription&gt; getMethodsMatcher() {
                    return named(ENHANCE_PUT_CORRELATION_METHOD);
                }

                @Override
                public String getMethodsInterceptor() {
                    return INTERCEPT_PUT_CORRELATION_CLASS;
                }

                @Override
                public boolean isOverrideArgs() {
                    return false;
                }
            }
        };
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class ContextManager implements BootService {
  private static ThreadLocal&lt;AbstractTracerContext&gt; CONTEXT = new ThreadLocal&lt;AbstractTracerContext&gt;();
  private static AbstractTracerContext get() {
        return CONTEXT.get();
    }

    /**
     * @return the first global trace id when tracing. Otherwise, &quot;N/A&quot;.
     */
    public static String getGlobalTraceId() {
        AbstractTracerContext context = CONTEXT.get();
        return Objects.nonNull(context) ? context.getReadablePrimaryTraceId() : EMPTY_TRACE_CONTEXT_ID;
    }

    /**
     * @return the current segment id when tracing. Otherwise, &quot;N/A&quot;.
     */
    public static String getSegmentId() {
        AbstractTracerContext context = CONTEXT.get();
        return Objects.nonNull(context) ? context.getSegmentId() : EMPTY_TRACE_CONTEXT_ID;
    }

    /**
     * @return the current span id when tracing. Otherwise, the value is -1.
     */
    public static int getSpanId() {
        AbstractTracerContext context = CONTEXT.get();
        return Objects.nonNull(context) ? context.getSpanId() : -1;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="插件定义" tabindex="-1"><a class="header-anchor" href="#插件定义"><span>插件定义</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/**
 * 插件的定义,继承xxxPluginDefine,通常命名为xxxInstrumentation
 */
public class DruidDataSourceInstrumentation extends ClassInstanceMethodsEnhancePluginDefine {
    private static final String ENHANCE_CLASS = &quot;com.alibaba.druid.pool.DruidDataSource&quot;;
    private static final String ENHANCE_METHOD = &quot;getConnection&quot;;
    private static final String INTERCEPTOR_CLASS = &quot;org.apache.skywalking.apm.plugin.druid.v1.PoolingGetConnectInterceptor&quot;;

    /**
     * 在哪个类进行字节码增强
     * */
    @Override
    protected ClassMatch enhanceClass() {
        return byName(ENHANCE_CLASS);
    }
    /**
     * 进行构造方法的拦截
     * */
    @Override
    public ConstructorInterceptPoint[] getConstructorsInterceptPoints() {
        return new ConstructorInterceptPoint[0];
    }

    /**
     * 进行实例方法的拦截
     * */
    @Override
    public InstanceMethodsInterceptPoint[] getInstanceMethodsInterceptPoints() {
        return new InstanceMethodsInterceptPoint[]{
                new InstanceMethodsInterceptPoint() {
                    //对getConnection无参方法记性增强
                    @Override
                    public ElementMatcher&lt;MethodDescription&gt; getMethodsMatcher() {
                        return named(ENHANCE_METHOD).and(takesNoArguments());
                    }
                    //增强逻辑在哪个具体的插件类中执行
                    @Override
                    public String getMethodsInterceptor() {
                        return INTERCEPTOR_CLASS;
                    }

                    @Override
                    public boolean isOverrideArgs() {
                        return false;
                    }
                },
                new InstanceMethodsInterceptPoint() {
                    //对getConnection有参方法记性增强
                    @Override
                    public ElementMatcher&lt;MethodDescription&gt; getMethodsMatcher() {
                        return named(ENHANCE_METHOD).and(takesArguments(String.class, String.class));
                    }
                    //增强逻辑在哪个具体的插件类中执行
                    @Override
                    public String getMethodsInterceptor() {
                        return INTERCEPTOR_CLASS;
                    }
                    //在增强时是否要对原方法的入参进行改变
                    @Override
                    public boolean isOverrideArgs() {
                        return false;
                    }
                }
        };
    }

    @Override
    public StaticMethodsInterceptPoint[] getStaticMethodsInterceptPoints() {
        return new StaticMethodsInterceptPoint[0];
    }

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="skywalking链路追踪traceid" tabindex="-1"><a class="header-anchor" href="#skywalking链路追踪traceid"><span>Skywalking链路追踪traceId</span></a></h1><p>SkyWalking 中使用 DistributedTraceId 类来抽象 Trace ID，其中封装了一个 ID 类型的字段。DistributedTraceId 有两个实现类</p><ul><li><p>NewDistirbutedTraceId 负责生成新 Trace ID，请求刚刚进入系统时，会创建 NewDistirbutedTraceId 对象，其构造方法内部会调用 GlobalIdGenerator.generate() 方法生成 ID 对象。</p></li><li><p>PropagatedTraceId 负责处理 Trace 传播过程中的 TraceId。PropagatedTraceId 的构造方法接收一个 String 类型参数（也就是在跨进程传播时序列化后的 Trace ID），解析之后得到 ID 对象。</p></li><li><p>在 SkyWalking 中，TraceSegment 是一个介于 Trace 与 Span 之间的概念，它是一条 Trace 的一段，可以包含多个 Span。在微服务架构中，一个请求基本都会涉及跨进程（以及跨线程）的操作，例如， RPC 调用、通过 MQ 异步执行、HTTP 请求远端资源等，处理一个请求就需要涉及到多个服务的多个线程。TraceSegment 记录了一个请求在一个线程中的执行流程（即 Trace 信息）。将该请求关联的 TraceSegment 串联起来，就能得到该请求对应的完整 Trace。</p></li><li><p>TraceId的生成：ContextManager的createEntrySpan方法，调用getOrCreate方法，再调用ContextManagerExtendService的createTraceContext方法，里面创建了TracingContext(operationName, spanLimitWatcher);里面包含了traceId，SegmentId等<br> Skwalking的TraceId的生成是通过GlobalIdGenerator的generate()方法来生成的，<br> 第一部分：具体是应用程序实例 ID<br> 第二部分：线程 ID<br> 第三部分：时间戳*10000+当前线程中的 seq，seq的值介于 0（包含）和 9999（包含）之间<br> 三部分通过.来分隔开</p></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class ContextManager implements BootService {
    public static AbstractSpan createEntrySpan(String operationName, ContextCarrier carrier) {
        AbstractSpan span;
        AbstractTracerContext context;
        operationName = StringUtil.cut(operationName, OPERATION_NAME_THRESHOLD);
        if (carrier != null &amp;&amp; carrier.isValid()) {
            SamplingService samplingService = ServiceManager.INSTANCE.findService(SamplingService.class);
            samplingService.forceSampled();
            context = getOrCreate(operationName, true);
            span = context.createEntrySpan(operationName);
            context.extract(carrier);
        } else {
            context = getOrCreate(operationName, false);
            span = context.createEntrySpan(operationName);
        }
        return span;
    }

    private static AbstractTracerContext getOrCreate(String operationName, boolean forceSampling) {
        AbstractTracerContext context = CONTEXT.get();
        if (context == null) {
            if (StringUtil.isEmpty(operationName)) {
                if (LOGGER.isDebugEnable()) {
                    LOGGER.debug(&quot;No operation name, ignore this trace.&quot;);
                }
                context = new IgnoredTracerContext();
            } else {
                if (EXTEND_SERVICE == null) {
                    EXTEND_SERVICE = ServiceManager.INSTANCE.findService(ContextManagerExtendService.class);
                }
                context = EXTEND_SERVICE.createTraceContext(operationName, forceSampling);

            }
            CONTEXT.set(context);
        }
        return context;
    }

    public static AbstractSpan createLocalSpan(String operationName) {
        operationName = StringUtil.cut(operationName, OPERATION_NAME_THRESHOLD);
        AbstractTracerContext context = getOrCreate(operationName, false);
        return context.createLocalSpan(operationName);
    }

    public static AbstractSpan createExitSpan(String operationName, ContextCarrier carrier, String remotePeer) {
        if (carrier == null) {
            throw new IllegalArgumentException(&quot;ContextCarrier can&#39;t be null.&quot;);
        }
        operationName = StringUtil.cut(operationName, OPERATION_NAME_THRESHOLD);
        AbstractTracerContext context = getOrCreate(operationName, false);
        AbstractSpan span = context.createExitSpan(operationName, remotePeer);
        context.inject(carrier);
        return span;
    }

    public static AbstractSpan createExitSpan(String operationName, String remotePeer) {
        operationName = StringUtil.cut(operationName, OPERATION_NAME_THRESHOLD);
        AbstractTracerContext context = getOrCreate(operationName, false);
        return context.createExitSpan(operationName, remotePeer);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class TracingContext implements AbstractTracerContext {

  TracingContext(String firstOPName, SpanLimitWatcher spanLimitWatcher) {
        this.segment = new TraceSegment();
        this.spanIdGenerator = 0;
        isRunningInAsyncMode = false;
        createTime = System.currentTimeMillis();
        running = true;

        // profiling status
        if (PROFILE_TASK_EXECUTION_SERVICE == null) {
            PROFILE_TASK_EXECUTION_SERVICE = ServiceManager.INSTANCE.findService(ProfileTaskExecutionService.class);
        }
        this.profileStatus = PROFILE_TASK_EXECUTION_SERVICE.addProfiling(
            this, segment.getTraceSegmentId(), firstOPName);

        this.correlationContext = new CorrelationContext();
        this.extensionContext = new ExtensionContext();
        this.spanLimitWatcher = spanLimitWatcher;
    }

    @Override
    public AbstractSpan createEntrySpan(final String operationName) {
        if (isLimitMechanismWorking()) {
            NoopSpan span = new NoopSpan();
            return push(span);
        }
        AbstractSpan entrySpan;
        TracingContext owner = this;
        final AbstractSpan parentSpan = peek();
        final int parentSpanId = parentSpan == null ? -1 : parentSpan.getSpanId();
        if (parentSpan != null &amp;&amp; parentSpan.isEntry()) {
            /*
             * Only add the profiling recheck on creating entry span,
             * as the operation name could be overrided.
             */
            profilingRecheck(parentSpan, operationName);
            parentSpan.setOperationName(operationName);
            entrySpan = parentSpan;
            return entrySpan.start();
        } else {
            entrySpan = new EntrySpan(
                spanIdGenerator++, parentSpanId,
                operationName, owner
            );
            entrySpan.start();
            return push(entrySpan);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@DefaultImplementor
public class ContextManagerExtendService implements BootService, GRPCChannelListener {
    public AbstractTracerContext createTraceContext(String operationName, boolean forceSampling) {
        AbstractTracerContext context;
        /*
         * Don&#39;t trace anything if the backend is not available.
         */
        if (!Config.Agent.KEEP_TRACING &amp;&amp; GRPCChannelStatus.DISCONNECT.equals(status)) {
            return new IgnoredTracerContext();
        }

        int suffixIdx = operationName.lastIndexOf(&quot;.&quot;);
        if (suffixIdx &gt; -1 &amp;&amp; ignoreSuffixSet.contains(operationName.substring(suffixIdx))) {
            context = new IgnoredTracerContext();
        } else {
            SamplingService samplingService = ServiceManager.INSTANCE.findService(SamplingService.class);
            if (forceSampling || samplingService.trySampling(operationName)) {
                context = new TracingContext(operationName, spanLimitWatcher);
            } else {
                context = new IgnoredTracerContext();
            }
        }

        return context;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//生成id的类
public final class GlobalIdGenerator {
    public static String generate() {
      return StringUtil.join(
          &#39;.&#39;,
          PROCESS_ID,
          String.valueOf(Thread.currentThread().getId()),
          String.valueOf(THREAD_ID_SEQUENCE.get().nextSeq())
      );
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class NewDistributedTraceId extends DistributedTraceId {
    public NewDistributedTraceId() {
        super(GlobalIdGenerator.generate());
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class TraceSegment {
    public TraceSegment() {
        this.traceSegmentId = GlobalIdGenerator.generate();
        this.spans = new LinkedList&lt;&gt;();
        this.relatedGlobalTraceId = new NewDistributedTraceId();
        this.createTime = System.currentTimeMillis();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="skywalking的agent注册了这些service" tabindex="-1"><a class="header-anchor" href="#skywalking的agent注册了这些service"><span>SkyWalking的agent注册了这些Service</span></a></h2><p>org.apache.skywalking.apm.agent.core.remote.TraceSegmentServiceClient<br> org.apache.skywalking.apm.agent.core.context.ContextManager<br> org.apache.skywalking.apm.agent.core.sampling.SamplingService<br> org.apache.skywalking.apm.agent.core.remote.GRPCChannelManager<br> org.apache.skywalking.apm.agent.core.jvm.JVMMetricsSender<br> org.apache.skywalking.apm.agent.core.jvm.JVMService<br> org.apache.skywalking.apm.agent.core.remote.ServiceManagementClient<br> org.apache.skywalking.apm.agent.core.context.ContextManagerExtendService<br> org.apache.skywalking.apm.agent.core.commands.CommandService<br> org.apache.skywalking.apm.agent.core.commands.CommandExecutorService<br> org.apache.skywalking.apm.agent.core.profile.ProfileTaskChannelService<br> org.apache.skywalking.apm.agent.core.profile.ProfileSnapshotSender<br> org.apache.skywalking.apm.agent.core.profile.ProfileTaskExecutionService<br> org.apache.skywalking.apm.agent.core.meter.MeterService<br> org.apache.skywalking.apm.agent.core.meter.MeterSender<br> org.apache.skywalking.apm.agent.core.context.status.StatusCheckService<br> org.apache.skywalking.apm.agent.core.remote.LogReportServiceClient<br> org.apache.skywalking.apm.agent.core.conf.dynamic.ConfigurationDiscoveryService<br> org.apache.skywalking.apm.agent.core.remote.EventReportServiceClient<br> org.apache.skywalking.apm.agent.core.ServiceInstanceGenerator</p><p>TraceSegmentServiceClient</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@Override
public void prepare() {
    //在GRPCChannelManager中注册statusChanged方法
    ServiceManager.INSTANCE.findService(GRPCChannelManager.class).addChannelListener(this);
}

@Override
public void boot() {
    lastLogTime = System.currentTimeMillis();
    segmentUplinkedCounter = 0;
    segmentAbandonedCounter = 0;
    carrier = new DataCarrier&lt;&gt;(CHANNEL_SIZE, BUFFER_SIZE, BufferStrategy.IF_POSSIBLE);
    carrier.consume(this, 1);
}

@Override
public void onComplete() {
    //在ListenerManager中注册 afterFinished(TraceSegment traceSegment);
    TracingContext.ListenerManager.add(this);
}

@Override
public void statusChanged(GRPCChannelStatus status) {
    if (CONNECTED.equals(status)) {
        Channel channel = ServiceManager.INSTANCE.findService(GRPCChannelManager.class).getChannel();
        serviceStub = TraceSegmentReportServiceGrpc.newStub(channel);
    }
    this.status = status;
}

@Override
public void afterFinished(TraceSegment traceSegment) {
    if (traceSegment.isIgnore()) {
        return;
    }
    if (!carrier.produce(traceSegment)) {
        if (LOGGER.isDebugEnable()) {
            LOGGER.debug(&quot;One trace segment has been abandoned, cause by buffer is full.&quot;);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ContextManager的bootService都是空实现</p><p>SamplingService</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@Override
public void prepare() {}

  private void resetSamplingFactor() {
      samplingFactorHolder = new AtomicInteger(0);
  }


@Override
public void boot() {
  
    service = Executors.newSingleThreadScheduledExecutor(
            new DefaultNamedThreadFactory(&quot;SamplingService&quot;));
    //监听配置更新        
    samplingRateWatcher = new SamplingRateWatcher(&quot;agent.sample_n_per_3_secs&quot;, this);
    ServiceManager.INSTANCE.findService(ConfigurationDiscoveryService.class)
                            .registerAgentConfigChangeWatcher(samplingRateWatcher);
    //启动定时任务，每隔3秒调用resetSamplingFactor();
    handleSamplingRateChanged();
}

public void handleSamplingRateChanged() {
    if (samplingRateWatcher.getSamplingRate() &gt; 0) {
        if (!on) {
            on = true;
            this.resetSamplingFactor();
            scheduledFuture = service.scheduleAtFixedRate(new RunnableWithExceptionProtection(
                this::resetSamplingFactor, t -&gt; LOGGER.error(&quot;unexpected exception.&quot;, t)), 0, 3, TimeUnit.SECONDS);
            LOGGER.debug(
                &quot;Agent sampling mechanism started. Sample {} traces in 3 seconds.&quot;,
                samplingRateWatcher.getSamplingRate()
            );
        }
    } else {
        if (on) {
            if (scheduledFuture != null) {
                scheduledFuture.cancel(true);
            }
            on = false;
        }
    }
}

@Override
public void onComplete() {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>GRPCChannelManager</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@Override
public void prepare() {

}
//创建单线程定时线程池链接oap server
@Override
public void boot() {
    if (Config.Collector.BACKEND_SERVICE.trim().length() == 0) {
        LOGGER.error(&quot;Collector server addresses are not set.&quot;);
        LOGGER.error(&quot;Agent will not uplink any data.&quot;);
        return;
    }
    grpcServers = Arrays.asList(Config.Collector.BACKEND_SERVICE.split(&quot;,&quot;));
    connectCheckFuture = Executors.newSingleThreadScheduledExecutor(
        new DefaultNamedThreadFactory(&quot;GRPCChannelManager&quot;)
    ).scheduleAtFixedRate(
        new RunnableWithExceptionProtection(
            this,
            t -&gt; LOGGER.error(&quot;unexpected exception.&quot;, t)
        ), 0, Config.Collector.GRPC_CHANNEL_CHECK_INTERVAL, TimeUnit.SECONDS
    );
}

@Override
public void onComplete() {}

@Override
public void run() {
    LOGGER.debug(&quot;Selected collector grpc service running, reconnect:{}.&quot;, reconnect);
    //IS_RESOLVE_DNS_PERIODICALLY 如果为 True，Skywalking 代理将定期解析 DNS 以更新接收者服务地址。
    if (IS_RESOLVE_DNS_PERIODICALLY &amp;&amp; reconnect) {
        grpcServers = Arrays.stream(Config.Collector.BACKEND_SERVICE.split(&quot;,&quot;))
                .filter(StringUtil::isNotBlank)
                .map(eachBackendService -&gt; eachBackendService.split(&quot;:&quot;))
                .filter(domainPortPairs -&gt; {
                    if (domainPortPairs.length &lt; 2) {
                        LOGGER.debug(&quot;Service address [{}] format error. The expected format is IP:port&quot;, domainPortPairs[0]);
                        return false;
                    }
                    return true;
                })
                .flatMap(domainPortPairs -&gt; {
                    try {
                        return Arrays.stream(InetAddress.getAllByName(domainPortPairs[0]))
                                .map(InetAddress::getHostAddress)
                                .map(ip -&gt; String.format(&quot;%s:%s&quot;, ip, domainPortPairs[1]));
                    } catch (Throwable t) {
                        LOGGER.error(t, &quot;Failed to resolve {} of backend service.&quot;, domainPortPairs[0]);
                    }
                    return Stream.empty();
                })
                .distinct()
                .collect(Collectors.toList());
    }

    if (reconnect) {
        if (grpcServers.size() &gt; 0) {
            String server = &quot;&quot;;
            try {
                int index = Math.abs(random.nextInt()) % grpcServers.size();
                if (index != selectedIdx) {
                    selectedIdx = index;

                    server = grpcServers.get(index);
                    String[] ipAndPort = server.split(&quot;:&quot;);

                    if (managedChannel != null) {
                        managedChannel.shutdownNow();
                    }

                    managedChannel = GRPCChannel.newBuilder(ipAndPort[0], Integer.parseInt(ipAndPort[1]))
                                                .addManagedChannelBuilder(new StandardChannelBuilder())
                                                .addManagedChannelBuilder(new TLSChannelBuilder())
                                                .addChannelDecorator(new AgentIDDecorator())
                                                .addChannelDecorator(new AuthenticationDecorator())
                                                .build();
                    reconnectCount = 0;
                    reconnect = false;
                    notify(GRPCChannelStatus.CONNECTED);
                } else if (managedChannel.isConnected(++reconnectCount &gt; Config.Agent.FORCE_RECONNECTION_PERIOD)) {
                    // Reconnect to the same server is automatically done by GRPC,
                    // therefore we are responsible to check the connectivity and
                    // set the state and notify listeners
                    reconnectCount = 0;
                    reconnect = false;
                    notify(GRPCChannelStatus.CONNECTED);
                }

                return;
            } catch (Throwable t) {
                LOGGER.error(t, &quot;Create channel to {} fail.&quot;, server);
            }
        }

        LOGGER.debug(
            &quot;Selected collector grpc service is not available. Wait {} seconds to retry&quot;,
            Config.Collector.GRPC_CHANNEL_CHECK_INTERVAL
        );
    }
}
//通知所有监听器状态更新
private void notify(GRPCChannelStatus status) {
    for (GRPCChannelListener listener : listeners) {
        try {
            listener.statusChanged(status);
        } catch (Throwable t) {
            LOGGER.error(t, &quot;Fail to notify {} about channel connected.&quot;, listener.getClass().getName());
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35);function k(E,I){const i=t("ExternalLinkIcon");return r(),d("div",null,[v,e("ul",null,[u,o,m,e("li",null,[n("Agent下载地址："),e("a",b,[n("https://skywalking.apache.org/downloads/"),s(i)])]),e("li",null,[n("Java Agent说明文档："),e("a",g,[n("https://skywalking.apache.org/docs/skywalking-java/v8.15.0/readme/"),s(i)])])]),p,e("p",null,[n("通过WebUI获取监控数据"),h,e("a",C,[n("http://192.168.31.230:8080/"),s(i)]),S,f]),y])}const T=a(c,[["render",k],["__file","skywalking.html.vue"]]),N=JSON.parse('{"path":"/backend/linktracing/skywalking.html","title":"Skywalking","lang":"zh-CN","frontmatter":{"title":"Skywalking","date":"2023-01-01T00:00:00.000Z","tags":"Skywalking","categories":"后端","description":"Skywalking Skywalking是专为微服务、云原生和基于容器的（Kubernetes）架构设计的分布式系统性能监控工具。 Skywalking关键特性 分布式跟踪:端到端分布式跟踪。服务拓扑分析、以服务为中心的可观察性和API仪表板。 针对您的技术栈的代理:Java、.Net Core、PHP、NodeJS、Golang、LUA、Rust、...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/linktracing/skywalking.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"Skywalking"}],["meta",{"property":"og:description","content":"Skywalking Skywalking是专为微服务、云原生和基于容器的（Kubernetes）架构设计的分布式系统性能监控工具。 Skywalking关键特性 分布式跟踪:端到端分布式跟踪。服务拓扑分析、以服务为中心的可观察性和API仪表板。 针对您的技术栈的代理:Java、.Net Core、PHP、NodeJS、Golang、LUA、Rust、..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/8c7f59ec782d865f3db03.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Skywalking\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/8c7f59ec782d865f3db03.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/13ad44ad9260b2a4c8c1a.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/82cc1e58f1c0ea7df5af0.jpg\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"Skywalking","slug":"skywalking","link":"#skywalking","children":[]},{"level":2,"title":"Skywalking关键特性","slug":"skywalking关键特性","link":"#skywalking关键特性","children":[]},{"level":2,"title":"Skywalking搭建","slug":"skywalking搭建","link":"#skywalking搭建","children":[]},{"level":2,"title":"Springboot整合+日志","slug":"springboot整合-日志","link":"#springboot整合-日志","children":[]},{"level":2,"title":"SkyWalking的agent注册了这些Service","slug":"skywalking的agent注册了这些service","link":"#skywalking的agent注册了这些service","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":14.28,"words":4283},"filePathRelative":"backend/linktracing/skywalking.md","localizedDate":"2023年1月1日","excerpt":"<h2>Skywalking</h2>\\n<p>Skywalking是专为微服务、云原生和基于容器的（Kubernetes）架构设计的分布式系统性能监控工具。</p>\\n<h2>Skywalking关键特性</h2>\\n<ul>\\n<li>分布式跟踪:端到端分布式跟踪。服务拓扑分析、以服务为中心的可观察性和API仪表板。</li>\\n<li>针对您的技术栈的代理:Java、.Net Core、PHP、NodeJS、Golang、LUA、Rust、C++、客户端JavaScript和Python代理，持续积极开发和维护。</li>\\n<li>早期采用eBPF技术:Rover代理作为指标收集器和性能分析工具，采用eBPF技术来诊断CPU和网络性能问题。</li>\\n<li>扩展能力:从一个SkyWalking集群中可以收集和分析1000亿级别的遥测数据。</li>\\n<li>成熟的遥测生态系统支持:支持成熟的遥测生态系统的指标、跟踪和日志，例如Zipkin、OpenTelemetry、Prometheus、Zabbix、Fluentd等。</li>\\n<li>原生APM数据库:BanyanDB是一个2022年创建的可观察性数据库，旨在接收、分析和存储遥测/可观察性数据。</li>\\n<li>一致的指标聚合:SkyWalking本机的度量格式和广泛使用的度量格式（如OpenCensus、OTLP、Telegraf、Zabbix等）通过相同的脚本管道进行处理。</li>\\n<li>日志管理管道:通过脚本管道支持日志格式化、提取指标和各种采样策略，具有高性能。</li>\\n<li>报警和遥测管道:支持基于服务、基于部署和基于API的报警规则设置。支持将报警和所有遥测数据转发给第三方。</li>\\n</ul>","autoDesc":true}');export{T as comp,N as data};
