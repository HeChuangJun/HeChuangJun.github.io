import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as s,c,b as e,d as t,e as p,a}from"./app-CAt2Ig6m.js";const i={},d=a('<details><summary>执行top列出系统各个进程的资源占用情况。</summary><figure><img src="https://b.bdstatic.com/comment/I4MgmLj55Sgosm2EdtLMDQ42d873730feb93da83342ff523db3209.png" alt="top.png" tabindex="0"><figcaption>top.png</figcaption></figure></details><details><summary>找到CPU或者内存高的进程，执行top -Hp 【pid】列出对应进程里面的线程占用资源情况</summary><figure><img src="https://b.bdstatic.com/comment/I4MgmLj55Sgosm2EdtLMDQ91c1544b6b26cd1f39dce887f504b416.png" alt="tophp.png" tabindex="0"><figcaption>tophp.png</figcaption></figure></details><h2 id="java进程cpu-100-、死锁" tabindex="-1"><a class="header-anchor" href="#java进程cpu-100-、死锁"><span>java进程CPU 100%、死锁</span></a></h2><p>打印堆栈信息jstack [pid] | grep -A 10 [nid = tid的十六进制 printf &quot;%x&quot; 线程id]<br> 定时多次导出该线程的堆栈信息jstack pid &gt; log.txt，线程栈分析可使用 VisualVM 插件 TDA。<br> 重点关注：WAITING/BLOCKED，根据锁的地址找到是哪个线程持有<code>&lt;xx&gt;</code>这把锁，里面有代码行数<br> 使用JDK性能监控工具排查，比如说jps、jstat、jinfo、jmap、jstack、jcmd等等。<br><img src="https://b.bdstatic.com/comment/I4MgmLj55Sgosm2EdtLMDQ354f02a0552f91253de40a1dc6d5556c.png" alt="javadeadlockjps.png"></p><h2 id="java进程内存mem-100-有没有处理过内存溢出问题-oom有哪些异常类型-√" tabindex="-1"><a class="header-anchor" href="#java进程内存mem-100-有没有处理过内存溢出问题-oom有哪些异常类型-√"><span>java进程内存Mem 100%？有没有处理过内存溢出问题？OOM有哪些异常类型？√</span></a></h2><p>一般因为创建了大量对象，持续飚高说明垃圾回收跟不上对象创建的速度，或者内存泄露导致对象无法回收<br> 先观察垃圾回收的情况，判断是不是持久代或年老代满导致Full GC，CPU利用率和内存持续飙高<br> 监控系统监控JVM的各项指标。</p><p>查看概况jstat -gcutil PID 1000 5监控gc，每秒输出一次，共5次<br> S0、S1：Survivor空间0和1的使用率（百分比）。<br> E：Eden区的使用率。<br> O：老年代的使用率。<br> M：Metaspace的使用率。<br> CCS：压缩类空间的使用率。<br> YGC：Minor GC次数。<br> YGCT：Minor GC耗时（秒）。<br> FGC：Full GC次数。<br> FGCT：Full GC耗时（秒）。<br> GCT：GC总耗时（秒）。</p><figure><img src="https://b.bdstatic.com/comment/I4MgmLj55Sgosm2EdtLMDQ8e13af95355967a41cd245cd5784f518.png" alt="jstatgcutil.png" tabindex="0"><figcaption>jstatgcutil.png</figcaption></figure><p>查询详细jstat -gc -h3 PID 250 10监控gc，每三行输出一次表头 ，每250ms 输出一次，一共 10 次。<br> S0C、S1C、S0U、S1U：Survivor空间0和1的容量（Capacity）和使用量（Usage）。<br> EC、EU：Eden区的容量和使用量KB。<br> OC、OU：老年代的容量和使用量。<br> MC、MU：Metaspace元数据区的容量和使用量（Jdk8+）。<br> CCSC、CCSU：压缩类空间的容量和使用量（如果存在）。<br> YGC、YGCT：Minor GC（新生代GC）的次数和总耗时。<br> FGC、FGCT：Full GC的次数和总耗时。<br> GCT：GC的总耗时（Minor GC和Full GC的总和）。</p><figure><img src="https://b.bdstatic.com/comment/I4MgmLj55Sgosm2EdtLMDQ6eaefb1173850eb54cbacd81daa69699.png" alt="jstatgc.png" tabindex="0"><figcaption>jstatgc.png</figcaption></figure><p>jmap -histo PID | head -20 查看堆内存占用空间最大的前20个对象类型<br> 如果GC次数频繁，而且每次回收的内存空间正常，那是因为对象创建速度快导致内存一直占用很高<br> 如果每次回收的内存非常少，那么可能因为内存泄露导致内存一直无法被回收<br><img src="https://b.bdstatic.com/comment/I4MgmLj55Sgosm2EdtLMDQc922a156b2dc12cae13f4aa1fbdea181.png" alt="jmaphisto.png"></p><p>导出堆内存多次<br> (推荐)jmap ‐dump:format=b,file=/tmp/dump.hprof pid<br> 开启HeapDumpOnOutOfMemoryError会stw：‐XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=./heapdump.hprof溢出时生成java_pidxxxx.hprof</p>',12),m=e("br",null,null,-1),l={href:"http://ip:9999",target:"_blank",rel:"noopener noreferrer"},b=e("br",null,null,-1),g=e("br",null,null,-1),h=e("br",null,null,-1),f=e("br",null,null,-1),u=e("br",null,null,-1),j=e("br",null,null,-1),M=e("br",null,null,-1),y=e("br",null,null,-1),C=a('<figure><img src="https://b.bdstatic.com/comment/I4MgmLj55Sgosm2EdtLMDQ6981d3db99811de4416ba2237ee1e4df.png" alt="matanalyze.png" tabindex="0"><figcaption>matanalyze.png</figcaption></figure><p>频繁minor gc？因为新生代空间小，Eden区很快填满，增大新生代空间-Xmn<br> 频繁Full GC /内存泄漏怎么办？<br> FGC原因<br> 大对象：系统一次性加载了过多数据到内存中（SQL查询未分页），导致大对象进入老年代<br> 内存泄漏：频繁创建了大量对象用完没回收（IO对象使用完后未调用close方法释放资源），程序频繁生成一些长生命周期的对象，当这些对象的存活年龄超过分代年龄时便会进入老年代，<br> 程序BUG、程序上线、基础组件升级<br> 代码中调用System.gc()方法<br> JVM参数设置问题：包括总内存大小、新生代和老年代的大小、Eden区和S区的大小、元空间大小、垃圾回收算法等等</p><p>查看监控对比出现问题的时间点以及当前FGC的频率<br> 针对大对象或者长生命周期对象导致的 FGC，可通过 jmap -histo 命令并结合 dump 堆内存文件作进一步分析，需要先定位到可疑对象。通过可疑对象定位到具体代码再次分析，这时候要结合 GC 原理和 JVM 参数设置，弄清楚可疑对象是否满足了进入到老年代的条件才能下结论。<br> 了解JVM的参数设置，包括：堆空间各个区域的大小设置，新生代和老年代分别采用了哪些垃圾收集器，分析是否合理</p><p>查询端口连接数netstat -nat | grep 12200 –c<br> 查看网络流量。cat /proc/net/dev<br> 查看系统平均负载。cat /proc/loadavg<br> 查看系统内存情况。cat /proc/meminfo<br> 查看CPU的利用率。cat /proc/stat</p><p>排查过程和排查内存泄漏过程类似。</p><p>Java heap space堆空间溢出，常见（对象创建太多）<br> java.lang.StackOverflowError栈空间溢出，栈管运行，每个方法就是一个栈帧，循环调用方法，会出现这种问题<br> Direct buffer memory 由于ByteBuffer. allocteDirect(capability)分配操作系统本地内存，不属于GC 管辖范围。不需要内存拷贝所以速度相对较快。分配太多内存不够<br> GC overhead limit exceeded GC连续多次GC都只回收了不到2%的极端情况下会抛出。<br> unable to create new native thread；多线程linux系统默认允许单个进程可以创建的线程数是1024个,应用创建超过这个数量，就会报</p><p>控制台查看错误日志。<br> 使用JDK自带的jvisualvm工具查看系统的堆栈日志。<br> 定位出内存溢出的空间：堆，栈还是永久代（JDK8 以后不会出现永久代的内存溢出）。<br> 如果是堆内存溢出，看是否创建了超大的对象。<br> 如果是栈内存溢出，看是否创建了超大的对象，或者产生了死循环。</p><h1 id="_2-jvm" tabindex="-1"><a class="header-anchor" href="#_2-jvm"><span>2. JVM</span></a></h1><p>minor gc频繁，增大eden区，减少次数，可能停顿增大<br> full gc，visualVM。避免minorgc直接full gc，大对象<br> 停顿时间长，安全点阻塞<br> 内存泄漏<br> 使用virualvm<br> cas处理返回时间快的，避免cpu消耗，不用转换内核态，syscnirozed内核态转换，syscnirozed死锁，relock的超时重试机制<br> aqs模版方法模式<br> 设计模式使用原型模式，复制上万个对象用于消息推送，对象复杂程度，需要性能测试，浅拷贝，构造函数复杂性高时可以使用，活动、账单对象重复<br> 工厂模式<br> 模板方法，用户行为日志，日志格式不多，维护性好，为什么不用解释器？类膨胀，递归深度，不容易debug<br> 适配器<br> 观察者模式，订阅发布<br> 提高并发量，瞬时并发量，提高单节点并发能力单接口，用资源换吞吐量，代码，异步多线程，数据库插入、索引、查询，缓存，第三方服务强依赖，多线程调用，网络带宽，尽量使用stream流，避免json<br> 无状态容易水平拆分，引入消息队列，拆分服务，只需发送，保证接入端，加入缓存提高返回时间，使用分布式集群部署，缓存分布式部署，消息队列集群部署，数据库分布式部署和读写分离</p><p>ecache不同节点的数据同步，省市级数据，过期时间长不用同步，如果缓存redis会有额外网络开销，不变才真么存，前端缓存，时间短+redis缓存，补偿程序保证同步，可以手动或者持续监听binlog<br> 可以放cdn，但不推荐<br> redis内存满了，增加redis，切片，数据分不到不同的节点上，<br> 不能删除，不能备份，<br> redis压缩列表。redis列表长度小于512，且每个元素小于64字节开启压缩列表，不开启时，String，三个指针32位6-7字节，2个整数长度每个占1字节，大概占用20字节开启压缩后序列化存储，存储2个整数，一个是前一个节点的长度，和当前节点字符串的长度，调整到1024，太大的话不像，编解码性能损耗太大，代码尽量减少key，满足唯一性和可读性，代码层面对大列表存储进行数据拆分，利用分片思想在redis长列表存储结构里面，将长链表分为n个短链表。配合lua脚本，4将数据打包成二进制位。用户的位置信息，广东省广州市，在代码里面索引Map映射成01这个2个字节，能节省一半左右，性能提升：1减少快照生成时间，aof和rdb速度都快，主从同步速度加快。带宽少了，传输时间减少，从服务器加载速度加快，<br> 高可用理解：最大限度保证服务的正常运行，保证用户服务不受到影响，需要有1合理的负载均衡，使用线程隔离，集群隔离，数据读写分离。热点数据的隔离，保护项目重点接口，2限流，舒缓请求的速度和量级<br> 从接入层限流，分布式+lua限流，应用限流，3降级预案。超时降级、读服务降级、写服务降级，4业务代码加入重试机制，保证所有请求能别完全处理，nginx限流一般是连接数和请求数量限制，分布式+lua限流对单个用户session或者ip限流，防止单个用户恶意攻击系统或者刷流量，限制单用户的瞬间爆发量，令牌桶算法限流，应用层面对接口进行限流，分布式+lua限流不用细粒度限流为了把更多资源放在存储和查询缓存业务里面，应用限流更方便降级<br> 手写跳表nlogn增删查</p><h2 id="可视化-命令行性能监控和故障处理工具" tabindex="-1"><a class="header-anchor" href="#可视化-命令行性能监控和故障处理工具"><span>可视化/命令行性能监控和故障处理工具？</span></a></h2><p>操作系统工具<br> top：显示系统整体资源使用情况<br> vmstat：监控内存和 CPU<br> iostat：监控 IO 使用<br> netstat：监控网络使用</p><p>JDK性能监控工具<br> jps：虚拟机进程查看<br> jstat：虚拟机运行时信息查看<br> jinfo：虚拟机配置查看<br> jmap：内存映像（导出）<br> jhat：堆转储快照分析<br> jstack：Java 堆栈跟踪<br> jcmd：实现上面除了 jstat 外所有命令的功能</p><p>JConsole<br> VisualVM<br> Java Mission Control<br> MAT Java 堆内存分析工具。<br> GChisto GC 日志分析工具。<br> GCViewer GC 日志分析工具。<br> JProfiler 商用的性能分析利器。<br> arthas 阿里开源诊断工具。<br> async-profiler Java 应用性能分析工具，开源、火焰图、跨平台。</p><h1 id="_3-微服务高可用配置" tabindex="-1"><a class="header-anchor" href="#_3-微服务高可用配置"><span>3. 微服务高可用配置</span></a></h1><p>nacos + MySQL 4C 8G 3节点 4000TPS<br> gateway 4C 8G 3节点 启用HTTPS+GZIP 1wQPS<br> zookeeper 4C 8G 3节点 4000TPS<br> alibaba Sentinel + nacos + MySQL 3节点<br> rabbitmq 3节点 镜像集群模式<br> Elasticsearch 3节点<br> mysql MGR 1主2从 3节点<br> skywalking + nacos 2节点<br> XXL-JOB 2节点<br> RocketMQ 1主2从</p><p><img src="https://b.bdstatic.com/comment/I4MgmLj55Sgosm2EdtLMDQ42e212545d48c5fdb0f320f841f6558f.png" alt="nacos.png"><br><img src="https://b.bdstatic.com/comment/I4MgmLj55Sgosm2EdtLMDQ86044fb44de48c1ee9f98f6b8b910748.png" alt="gateway.png"><br><img src="https://b.bdstatic.com/comment/I4MgmLj55Sgosm2EdtLMDQfe6963de019c57bf30885d5898c880a1.png" alt="zookeeper.png"></p><h2 id="项目难点" tabindex="-1"><a class="header-anchor" href="#项目难点"><span>项目难点</span></a></h2><p><img src="https://b.bdstatic.com/comment/I4MgmLj55Sgosm2EdtLMDQe29516281b44fc6ea6efdc8a0094d494.png" alt="jvmadjust.png"><br> 运营后台系统，偶发性OOM异常，堆内存溢出。<br> 因为是偶发性的，所以第一次简单的认为就是堆内存不足导致，单方面的加大了堆内存从 4G 调整到 8G -Xms8g。<br> 问题依然没有解决，只能从堆内存信息下手，通过开启-XX:+HeapDumpOnOutOfMemoryError参数 获得堆内存的 dump 文件<br> 用JProfiler对堆dump文件分析，查看到占用内存最大的对象是 String 对象，本来想跟踪着 String 对象找到其引用的地方，但 dump 文件太大，跟踪进去的时候总是卡死，而 String 对象占用比较多也比较正常，最开始也没有认定就是这里的问题，于是就从线程信息里面找突破点。<br> 通过线程进行分析，先找到了几个正在运行的业务线程，然后逐一跟进业务线程看了下代码，有个方法引起了我的注意，导出订单信息<br> 因为订单信息导出这个方法可能会有几万的数据量，首先要从数据库里面查询出来订单信息，然后把订单信息生成 excel，这个过程会产生大量的 String 对象。<br> 为了验证自己的猜想，于是准备登录后台去测试下，结果在测试的过程中发现导出订单的按钮前端居然没有做点击后按钮置灰交互事件，后端也没有做防止重复提交，因为导出订单数据本来就非常慢，使用的人员可能发现点击后很久后页面都没反应，然后就一直点，结果就大量的请求进入到后台，堆内存产生了大量的订单对象和 EXCEL 对象，而且方法执行非常慢，导致这一段时间内这些对象都无法被回收，所以最终导致内存溢出。<br> 知道了问题就容易解决了，最终没有调整任何 JVM 参数，只是做了两个处理：</p><p>在前端的导出订单按钮上加上了置灰状态，等后端响应之后按钮才可以进行点击<br> 后端代码加分布式锁，做防重处理<br> 这样双管齐下，保证导出的请求不会一直打到服务端，问题解决！</p><h2 id="k8s中有状态与无状态服务√" tabindex="-1"><a class="header-anchor" href="#k8s中有状态与无状态服务√"><span>k8s中有状态与无状态服务√</span></a></h2><table><thead><tr><th style="text-align:center;">特征</th><th style="text-align:center;">有状态应用</th><th style="text-align:center;">无状态应用</th></tr></thead><tbody><tr><td style="text-align:center;">数据持久性</td><td style="text-align:center;">需要保存客户端状态的服务，保证数据不丢失</td><td style="text-align:center;">不需要~</td></tr><tr><td style="text-align:center;">扩展性</td><td style="text-align:center;">相对复杂，需要处理数据一致性问题</td><td style="text-align:center;">易水平扩展，只需增加副本</td></tr><tr><td style="text-align:center;">故障恢复</td><td style="text-align:center;">需要处理数据一致性问题，如数据恢复等</td><td style="text-align:center;">可以快速替换失败的实例</td></tr><tr><td style="text-align:center;">请求独立性</td><td style="text-align:center;">不依赖之前请求</td><td style="text-align:center;">依赖~， 如会话数据、用户信息、数据库记录等</td></tr><tr><td style="text-align:center;">负载均衡</td><td style="text-align:center;">容易实现，没有发送请求限制</td><td style="text-align:center;">实例具有唯一标识（如Pod名称）,客户端需要与特定的实例交互</td></tr><tr><td style="text-align:center;">实现过程</td><td style="text-align:center;">通过Deployment和Service</td><td style="text-align:center;">通过 StatefulSet 和 PersistentVolume</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">Deployment控制Pod副本数和滚动更新</td><td style="text-align:center;">StatefulSet确保每个Pod都有唯一的网络标识和持久存储</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">Service提供负载均衡和服务发现</td><td style="text-align:center;">PersistentVolume提供存储支持</td></tr></tbody></table>',22);function v(x,S){const r=o("ExternalLinkIcon");return s(),c("div",null,[d,e("p",null,[t("离线分析"),m,t(" jhat工具：jhat ‐port 9999 /tmp/dump.dat ，访问"),e("a",l,[t("http://ip:9999"),p(r)]),t(" 通过OQL查询"),b,t(" (推荐)下载jvisualvm工具，需要配置本地etc/visualvm_jdkhome：菜单 > 文件 > 装入 dump 文件。，通过summary查询；或者远程连接别的jvm"),g,t(" Dcom.sun.management.jmxremote # 允许用JMX远程管理"),h,t(" Dcom.sun.management.jmxremote.port=9999 # 端口"),f,t(" Dcom.sun.management.jmxremote.authenticate=false # 不进行身份认证，任何用"),u,t(" Dcom.sun.management.jmxremote.ssl=false # 不用ssl"),j,t(" jprofiler商业软件,GCViewer 工具。"),M,t(" 在线分析平台 GCEasy。"),y,t(" 使用MAT工具(基于Eclipse免费)分析内存溢出，查看Leak Suspects")]),C])}const G=n(i,[["render",v],["__file","problemsolve.html.vue"]]),_=JSON.parse('{"path":"/interview/problemsolve/problemsolve.html","title":"问题解决","lang":"zh-CN","frontmatter":{"title":"问题解决","date":"2023-01-01T00:00:00.000Z","tags":"java","categories":"面试","description":"执行top列出系统各个进程的资源占用情况。 top.pngtop.png 找到CPU或者内存高的进程，执行top -Hp 【pid】列出对应进程里面的线程占用资源情况 tophp.pngtophp.png java进程CPU 100%、死锁 打印堆栈信息jstack [pid] | grep -A 10 [nid = tid的十六进制 printf \\"...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/interview/problemsolve/problemsolve.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"问题解决"}],["meta",{"property":"og:description","content":"执行top列出系统各个进程的资源占用情况。 top.pngtop.png 找到CPU或者内存高的进程，执行top -Hp 【pid】列出对应进程里面的线程占用资源情况 tophp.pngtophp.png java进程CPU 100%、死锁 打印堆栈信息jstack [pid] | grep -A 10 [nid = tid的十六进制 printf \\"..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://b.bdstatic.com/comment/I4MgmLj55Sgosm2EdtLMDQ42d873730feb93da83342ff523db3209.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"问题解决\\",\\"image\\":[\\"https://b.bdstatic.com/comment/I4MgmLj55Sgosm2EdtLMDQ42d873730feb93da83342ff523db3209.png\\",\\"https://b.bdstatic.com/comment/I4MgmLj55Sgosm2EdtLMDQ91c1544b6b26cd1f39dce887f504b416.png\\",\\"https://b.bdstatic.com/comment/I4MgmLj55Sgosm2EdtLMDQ354f02a0552f91253de40a1dc6d5556c.png\\",\\"https://b.bdstatic.com/comment/I4MgmLj55Sgosm2EdtLMDQ8e13af95355967a41cd245cd5784f518.png\\",\\"https://b.bdstatic.com/comment/I4MgmLj55Sgosm2EdtLMDQ6eaefb1173850eb54cbacd81daa69699.png\\",\\"https://b.bdstatic.com/comment/I4MgmLj55Sgosm2EdtLMDQc922a156b2dc12cae13f4aa1fbdea181.png\\",\\"https://b.bdstatic.com/comment/I4MgmLj55Sgosm2EdtLMDQ6981d3db99811de4416ba2237ee1e4df.png\\",\\"https://b.bdstatic.com/comment/I4MgmLj55Sgosm2EdtLMDQ42e212545d48c5fdb0f320f841f6558f.png\\",\\"https://b.bdstatic.com/comment/I4MgmLj55Sgosm2EdtLMDQ86044fb44de48c1ee9f98f6b8b910748.png\\",\\"https://b.bdstatic.com/comment/I4MgmLj55Sgosm2EdtLMDQfe6963de019c57bf30885d5898c880a1.png\\",\\"https://b.bdstatic.com/comment/I4MgmLj55Sgosm2EdtLMDQe29516281b44fc6ea6efdc8a0094d494.png\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"java进程CPU 100%、死锁","slug":"java进程cpu-100-、死锁","link":"#java进程cpu-100-、死锁","children":[]},{"level":2,"title":"java进程内存Mem 100%？有没有处理过内存溢出问题？OOM有哪些异常类型？√","slug":"java进程内存mem-100-有没有处理过内存溢出问题-oom有哪些异常类型-√","link":"#java进程内存mem-100-有没有处理过内存溢出问题-oom有哪些异常类型-√","children":[]},{"level":2,"title":"可视化/命令行性能监控和故障处理工具？","slug":"可视化-命令行性能监控和故障处理工具","link":"#可视化-命令行性能监控和故障处理工具","children":[]},{"level":2,"title":"项目难点","slug":"项目难点","link":"#项目难点","children":[]},{"level":2,"title":"k8s中有状态与无状态服务√","slug":"k8s中有状态与无状态服务√","link":"#k8s中有状态与无状态服务√","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":12.37,"words":3712},"filePathRelative":"interview/problemsolve/problemsolve.md","localizedDate":"2023年1月1日","excerpt":"<!--more-->\\n<details>\\n<summary>执行top列出系统各个进程的资源占用情况。</summary>\\n<figure><img src=\\"https://b.bdstatic.com/comment/I4MgmLj55Sgosm2EdtLMDQ42d873730feb93da83342ff523db3209.png\\" alt=\\"top.png\\" tabindex=\\"0\\"><figcaption>top.png</figcaption></figure>\\n</details>\\n<details>\\n<summary>找到CPU或者内存高的进程，执行top -Hp 【pid】列出对应进程里面的线程占用资源情况</summary>\\n<figure><img src=\\"https://b.bdstatic.com/comment/I4MgmLj55Sgosm2EdtLMDQ91c1544b6b26cd1f39dce887f504b416.png\\" alt=\\"tophp.png\\" tabindex=\\"0\\"><figcaption>tophp.png</figcaption></figure>\\n</details>","autoDesc":true}');export{G as comp,_ as data};