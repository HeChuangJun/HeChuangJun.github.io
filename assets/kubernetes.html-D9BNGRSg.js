import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as r,c as o,a as n,b as e,d as s,w as d,e as i}from"./app-7KT7HDzT.js";const v={},p=i(`<h2 id="k8s介绍" tabindex="-1"><a class="header-anchor" href="#k8s介绍"><span>k8s介绍</span></a></h2><ul><li>Kubernetes舵手。8替代K和s中的8个字母，Google开源基于Go</li><li>Kubernetes和Docker两个互补。Docker侧重于容器化应用，Kubernetes专注于容器编排。Docker开发应用、打包、测试和交付，Kubernetes在生产、测试环境中编排应用的运行</li><li>k8s类似云上的操作系统对资源进行抽象，并对多种云原生微服务应用进行调度</li></ul><h2 id="k8s架构" tabindex="-1"><a class="header-anchor" href="#k8s架构"><span>k8s架构</span></a></h2><p>Kubernetes集群由主节点（master）与工作节点（node）组成。这些节点都是Linux主机<br><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwc1af6a79492ff1fec2341d5f59ee453a.png" alt="k8s.png"></p><ul><li>主节点（master控制平面）：组成集群的控制平面的系统服务的集合。3-5个副本保证高可用</li><li>API Server（API服务）：负责所有组件(系统内置组件以及外部用户组件)之间的通信。对外通过HTTPS的方式提供了RESTful风格的API接口。访问API Server的全部请求都必须经过授权与认证</li><li>Controller Manager：管理和执行各种控制器(如 ReplicaSet、Deployment、StatefulSet等)。实现了全部的后台控制循环，完成对集群的监控并对事件作出响应</li><li>Controller(Deployment、DaemonSet以及StatefulSet)：每个controller都在后台启动了独立的监控循环功能，负责监控API Server的变更。每个控制循环都只关心与自己相关的逻辑。保证集群的当前状态（current state）与期望状态（desired state）相匹配。每个控制循环的基础逻辑如下。1获取期望状态2观察当前状态3判断两者间的差异。4变更当前状态来消除差异点</li><li>Scheduler：通过监听API Server来启动新的工作任务，并将其分配到适合的且处于正常运行状态的节点中。调度器过滤掉不能运行指定任务的工作节点并排序。选择分数最高的节点来运行指定的任务。然后进行多种前置校验包括：节点是否仍然存在、是否有affinity或者anti-affinity规则、任务所依赖的端口在当前工作节点是否可以访问、工作节点是否有足够的资源等。过滤不满足任务执行条件的工作节点，最后根据规则计算得分并排序，包括：工作节点上是否已经包含任务所需的镜像、剩余资源是否满足任务执行条件，正在执行多少任务。得分最高的工作节点执行任务。如果调度器没找到合适的工作节点，那么任务会被标记为暂停状态</li><li>ETCD：在整个控制层中，只有集群存储是有状态（stateful）的部分，持久化地存储了整个集群的配置与状态。底层用分布式数据库etcd。运行3～5个副本保证高可用。etcd认为一致性比可用性更重要。在出现脑裂时会停止为集群提供更新能力来保证存储数据的一致性。etcd不可用时应用仍然可以在集群性持续运行，只不过无法更新任何内容而已。etcd用RAFT一致性算法</li><li>工作节点：集群的工作者。负责1. 监听API Server分派的新任务。2. 执行新分派的任务。3. 通过API Server向控制平面回复任务执行的结果。</li><li>Kubelet：工作节点核心，每个工作节点上都有部署。负责将当前工作节点注册到集群当中，集群的资源池就会获取到当前工作节点的CPU、内存以及存储信息，并将工作节点加入当前资源池。负责监听API Server新分配的任务并执行，维护与控制平面之间的一个通信频道，准备将执行结果反馈回去。如果Kuberlet无法运行指定任务，就会将这个信息反馈给控制平面，并由控制平面决定接下来要采取什么措施</li><li>容器运行时 (Docker、Containerd、...)：Kubelet需要容器运行时（container runtime）来执行依赖容器才能执行的任务，例如拉取镜像并启动或停止容器。k8s通过运⾏时接⼝（CRI）的模块支持不同的容器运行时</li><li>Kube-proxy：运行在每个工作节点，负责本地集群网络。例如保证每个工作节点都可以获取到唯一的IP地址，并且实现了本地IPTABLE以及IPVS来保障Pod间的网络路由与负载均衡</li></ul><h2 id="pod、pause容器、yaml定义pod-了解-pod生命周期与重启、拉取策略-利用探针实现pod健康检查-对外暴露-pod调度与节点亲和性-污点-taint-与容忍度-toleration-limitrange与resourcequota" tabindex="-1"><a class="header-anchor" href="#pod、pause容器、yaml定义pod-了解-pod生命周期与重启、拉取策略-利用探针实现pod健康检查-对外暴露-pod调度与节点亲和性-污点-taint-与容忍度-toleration-limitrange与resourcequota"><span>POD、Pause容器、yaml定义pod(了解)，POD生命周期与重启、拉取策略，利用探针实现POD健康检查，对外暴露，Pod调度与节点亲和性，污点（Taint）与容忍度（Toleration）.LimitRange与ResourceQuota</span></a></h2><ul><li>Docker中调度的原子单位是容器；K8s中最小调度的原子单位是Pod。每个Pod中运行一个或一组容器，称为多容器Pod（multi-container Pod）</li><li>同一个Pod中运行多个容器会共享相同的Pod环境。包括了IPC命名空间，内存，磁盘、网络以及其他资源，如IP地址。容器之间可以用localhost接口通信。</li><li>多容器Pod适用于存在强绑定关系的多个容器，比如需要共享内存与存储。如果容器间并不存在如此紧密的关系，最好将容器封装到不同的Pod，通过网络以松耦合的方式来运行。在任务级别实现容器间的隔离，降低相互之间的影响。但会导致大量的未加密的网络流量产生。</li><li>Pause容器：infrastucture container（infra）基础容器，</li><li>每个Pod运行一个Pause的容器，其他容器（业务容器）都从pause容器中fork出来，共享Pause容器的网络栈和Volume挂载卷。因此他们之间通信和数据交换更为高效</li><li>Pause容器为每个业务容器提供以下功能：<br> PID命名空间：Pod中的不同应用程序可以看到其他应用程序的进程ID。<br> 网络命名空间：Pod中的多个容器能够访问同一个IP和端口范围。<br> IPC命名空间：Pod中的多个容器能够使用SystemV IPC或POSIX消息队列进行通信。<br> UTS命名空间：Pod中的多个容器共享一个主机名<br> Volumes（共享存储卷）：Pod中的各个容器可以访问Pod级别的Volumes</li><li>扩容或缩容应用时通过添加或删除Pod来实现。不要向已经存在的Pod中增加容器来扩容</li><li>Pod的部署是一个原子操作。只有当Pod中的<strong>所有容器都启动成功且处于运行状态</strong>时，Pod提供的服务才是可用的，一个Pod（即使包含多容器）只会被唯一的工作节点调度</li><li>如果Pod出现预期外的销毁时会启动新Pod来取代有问题的Pod。有全新的ID与IP地址。不要在设计程序的时依赖特定的Pod</li></ul><details><summary>yaml定义pod</summary><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 编写yaml</span>
<span class="token function">mkdir</span> /etc/k8s
<span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/k8s/nginx-pod.yaml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
# API版本号，固定写v1即可
apiVersion: v1 
# 创建对象类型
kind: Pod 
# 元数据，描述pod的辅助信息
metadata: 
	# pod名称
  name: pod-nginx
# 设置容器、镜像等关键选项
spec:
  # 重启策略
  restartPolicy: Never
  containers: 
    # 容器名称
    - name: container-nginx
    # 镜像名称
      image: nginx:1.20.2-alpine
      # 镜像拉取策略
      imagePullPolicy: IfNotPresent
      # 容器内部暴露的端口号，即expose
      ports: 
      # nginx容器默认对外暴露80端口
      - containerPort: 80 
      # 配置存活探针,每五秒钟执⾏⼀次探测容器80端⼝是否准备就绪
      # ⽽第⼀次探测执⾏前先等待10秒，留出必要的初始化时间
      livenessProbe:
        tcpSocket:
          port: 80
        initialDelaySeconds: 10
        periodSeconds: 5
      readinessProbe:
        httpGet:
          path: /abcde
          port: 80
          httpHeaders:
            - name: Custom-Header
              value: Awesome
        initialDelaySeconds: 3
        periodSeconds: 3
EOF</span>

kubectl apply <span class="token parameter variable">-f</span> /etc/k8s/nginx-pod.yaml
<span class="token comment">#移除</span>
kubectl delete <span class="token parameter variable">-f</span> /etc/k8s/nginx-pod.yaml

<span class="token comment"># 查看已部署的Nginx节点</span>
kubectl get pods <span class="token parameter variable">-A</span> <span class="token parameter variable">-o</span> wide

<span class="token comment"># 查看指定pod明细</span>
kubectl describe pod pod-nginx
<span class="token comment"># 查看输出的日志</span>
kubectl logs <span class="token parameter variable">-f</span> pod-nginx
<span class="token comment"># 查看运行时命令</span>
crictl <span class="token function">ps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>Pod生命周期五个阶段</p><ul><li>运行中（Running）：Pod已经绑定到了一个节点上，所有的容器都已被创建。至少有一个容器正在运行，或者正处于启动或重启状态。</li><li>等待中（Pending）: 创建Pod请求已被接受，但有一个或者多个容器镜像尚未创建</li><li>正常终止（Succeeded）：pod中的所有的容器已经正常退出，并且永远不会自动重启这些容器，一般在部署job时出现</li><li>异常停止（Failed）：Pod中的所有容器都已终止了，并且至少有一个容器是因为失败终止。容器以非0状态退出或者被系统终止</li><li>未知状态（PodUnkonwn）：出于某种原因，无法获得Pod的状态，通常是与Pod主机通信出错</li></ul><p>Pod详细状态</p><ul><li>CrashLoopBackOff：容器退出，正在重启，建议增加内存、CPU等资源</li><li>InvalidImageName： 无法解析镜像名称</li><li>ImageInspectError： 无法校验镜像</li><li>ErrImageNeverPull： 策略禁止拉取镜像</li><li>ImagePullBackOff： 正在重试拉取，建议更换镜像仓库</li><li>RegistryUnavailable： 连接不到镜像中心</li><li>ErrImagePull： 通用的拉取镜像出错</li><li>CreateContainerConfigError： 不能创建kubelet使用的容器配置</li><li>CreateContainerError： 创建容器失败</li><li>m.internalLifecycle.PreStartContainer 执行hook报错</li><li>RunContainerError： 启动容器失败</li><li>PostStartHookError： 执行hook报错</li><li>ContainersNotInitialized： 容器没有初始化完毕</li><li>ContainersNotReady： 容器没有准备完毕</li><li>ContainerCreating：容器创建中，长时间卡死要decribe与logs查看日志分析内容</li><li>PodInitializing：pod初始化中</li><li>DockerDaemonNotReady：docker还没有完全启动</li><li>NetworkPluginNotReady：网络插件还没有完全启动</li></ul><p>POD重启策略spec.restartPolicy：适用于pod中的所有首次需要重启的容器，随后再次需要重启将延迟一段时间后进行，时长为10，20，40，80，160，300s</p><ul><li>Always(默认)：容器失效时，自动重启该容器</li><li>OnFailure：容器停止运行且退出码不为0时重启</li><li>Never：任何状态都不重启容器<br> POD镜像拉取策略spec.containers[i].imagePullPolicy</li><li>IfNotPresent(默认)，镜像不存在时拉取（面对稳定版本）</li><li>Always：每次创建Pod都重新拉取镜像（面对不断变更版本）</li><li>Never：永远不会拉取镜像</li></ul><p>Pod实现健康检查三种探针类型spec.containers[i].StartupProbe：</p><ul><li>StartupProbe：用于判断容器内应用程序是否已经启动。会先禁止其他的探测直到成功为止，成功后将不再进行探测。适用于容器启动时间长的场景</li><li>LivenessProbe（存活探针）：用于探测容器是否运行，探测失败会根据配置的重启策略进行处理。没有配置则默认success。</li><li>ReadinessProbe（就绪探针）：用于探测容器内的程序是否健康，返回值为success代表容器完成启动，并且程序是可以接受流量的状态<br> 三者区别</li><li>存活探针用于确定重启容器时机。例如探测到死锁。提高应用的可用性，即使其中存在缺陷</li><li>就绪探针可以确定容器准备好接受请求流量时机，当所有容器都就绪时，才能认为该Pod就绪。用于控制Pod作为Service的后端。Pod尚未就绪会被从Service的负载均衡器中剔除</li></ul><p>Pod探针的四种检测方式spec.containers[i].StartupProbe.httpGet：</p><ul><li>exec：在容器内执行命令返回值为0，则认为容器健康。</li><li>tcpSocket：通过TCP连接检查容器内的端口是否连通，连通则容器健康</li><li>httpGet（常用）：通过程序暴露的API地址检查程序是否正常，如果状态码为200~400，则容器健康</li><li>grpc：用gRPC执行远程过程调用。如果响应的状态是&quot;SERVING&quot;，则认为诊断成功。<br> 探测结果</li><li>Success（成功）：容器通过了诊断。</li><li>Failure（失败）：容器未通过诊断。</li><li>Unknown（未知）：诊断失败，因此不会采取任何行动。<br> 配置范本：</li><li>容器启动5秒后发送第一个存活探针。尝试连接nginx容器的80端口。如果探测成功，Pod会被标记为就绪状态，每隔10秒运行一次探测</li><li>就绪探针periodSeconds字段指定每隔3秒执行一次存活探测</li><li>initialDelaySeconds 字段在执行第一次探测前等待3秒。向容器内运行的服务（服务监听8080端口）发送HTTP GET请求来探测。如果服务器上/healthz路径下的处理程序返回成功代码，则认为容器是健康存活的。如果返回失败代码，则会杀死容器并重启。返回200-400的任何代码都表示成功，其它表示失败</li></ul><p>对外暴露端口</p><table><thead><tr><th>方法</th><th>优点</th><th>缺点</th></tr></thead><tbody><tr><td>NodePort</td><td>简单、适合测试环境</td><td>端口范围受限，暴露到所有节点</td></tr><tr><td>LoadBalancer</td><td>云环境原生支持，外部访问简单</td><td>仅支持云环境，可能有额外成本</td></tr><tr><td>Ingress</td><td>强大的路由和域名支持，生产环境</td><td>要额外部署 Ingress Controller</td></tr><tr><td>直接暴露(HostPort)</td><td>配置简单</td><td>不推荐，破坏抽象，难以扩展和管理</td></tr></tbody></table><p>调度是指将Pod放置到合适的节点上，以便对应节点上运⾏Pod<br> 调度器通过K8s的监测Watch机制来发现集群中新创建且尚未被调度到节点上的Pod。调度器会将发现的每个未调度的Pod调度到合适的节点上运⾏</p><p>kube-scheduler是默认调度器，在设计上允许你⾃⼰编写⼀个调度组件并替换原有的kube-scheduler<br> Kube-scheduler选择⼀个最佳节点来运⾏新建或尚未调度（unscheduled）的Pod。由于Pod中的容器和Pod本身可能有不同的要求，调度程序会过滤掉任何不满⾜Pod特定调度需求的节点。API允许在创建Pod时指定节点<br> 满⾜Pod调度请求的所有节点称之为可调度节点。如果没有节点能满⾜Pod的资源请求，那么Pod将⼀直停留在未调度状态直到调度器找到合适节点<br> 调度器先找到⼀个Pod的所有可调度节点，然后对可调度节点打分，选出其中得分最⾼的节点来运⾏Pod。调度器将调度决定通知给kube-apiserver，这个过程叫做绑定<br> 做调度决定时要考虑的因素：单独和整体的资源请求、硬件/软件/策略限制、亲和以及反亲和要求、数据局部性、负载间的⼲扰等等。</p><p>kube-scheduler给Pod做调度选择时包含两个步骤<br> 过滤阶段：将所有满⾜Pod调度需求的节点选出来。例如PodFitsResources过滤函数会检查候选节点的可⽤资源能否满⾜Pod的资源请求。过滤后得出所有可调度节点的节点列表；通常包含不⽌⼀个节点。如果这个列表是空的，代表Pod不可调度<br> 打分阶段：为Pod从所有可调度节点中选取最合适的节点。根据打分规则给每⼀个可调度节点打分。最后将Pod调度到得分最⾼的节点上。如果存在多个得分最⾼的节点，则从中随机选取⼀个</p><p>过滤和打分配置<br> 调度策略：配置过滤所⽤的断⾔（Predicates）和打分优先级（Priorities）<br> 调度配置：配置实现不同调度阶段的插件，包括QueueSort、Filter、Score、Bind、Reserve、Permit等</p><p>Affinity亲和性：当满⾜了某些条件就把Pod调度到集群上。Anti-Affinity相反，~不把Pod调度到集群上.<br> Taint污点和Toleration容忍，Taint提供Node的标记，但标记不是Label，当设置好Taint后，满⾜Toleration的Pod将可以部署到该Node上。</p><p>Node Selector和Label可以实现精确筛选</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 新增有nodeSelector的Pod</span>
mkdir/etc/k8s
cd/etc/k8s
cat<span class="token operator">&gt;</span> pod-nginx.yaml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: v1
kind: Pod
metadata:
  name: pod-nginx
spec:
  containers:
    - name: container-nginx
      image: nginx:1.20.2-alpine
      ports:
        - containerPort: 80
  nodeSelector:
    disk: ssd # 放置到具有 &quot;disk=ssd&quot; 标签的节点上
EOF</span>
kubectl delete <span class="token parameter variable">-f</span> pod-nginx.yaml
kubectl apply <span class="token parameter variable">-f</span> pod-nginx.yaml

<span class="token comment"># 检查集群的Node状态，包含Labels，处于Pending状态，describe也提示⽆法匹配</span>
kubectl get po
NAME READY STATUS RESTARTS AGE
pod-nginx <span class="token number">0</span>/1 Pending <span class="token number">0</span> 24s

kubectl get no --show-labels
kubectl describe po pod-nginx
Warning  FailedScheduling  6s    default-scheduler  <span class="token number">0</span>/1 nodes are available: <span class="token number">1</span> node<span class="token punctuation">(</span>s<span class="token punctuation">)</span> didn<span class="token string">&#39;t match Pod&#39;</span>s <span class="token function">node</span> affinity/selector. preemption: <span class="token number">0</span>/1 nodes are available: <span class="token number">1</span> Preemption is not helpful <span class="token keyword">for</span> scheduling.
<span class="token comment"># 新增disk=ssd的Label并检查</span>
kubectl label nodes node1 <span class="token assign-left variable">disk</span><span class="token operator">=</span>ssd
kubectl get no --show-labels

<span class="token comment"># ⼜开始跑了，如果再度检查describe的讯息中的Event会发现：</span>
kubectl describe po pod-nginx
<span class="token comment"># 要删除标签，需要的key后⾯增加减号即可</span>
kubectl label <span class="token function">node</span> node1 disk-
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Affinity分类<br> 1、Node Affinity：和Node Selector不同的是，它会有更多细緻的操作，NodeSelector看成是简易版的NodeAffinity，<br> 两种策略：<br> preferredDuringSchedulingIgnoredDuringExecution：软策略，可以不满⾜<br> requiredDuringSchedulingIgnoredDuringExecution：硬策略，⼀定要满⾜</p>`,28),u=n("br",null,null,-1),m={href:"http://kubernetes.io/hostname",target:"_blank",rel:"noopener noreferrer"},b=n("br",null,null,-1),k={href:"http://failure-domain.beta.kubernetes.io/zone",target:"_blank",rel:"noopener noreferrer"},g=n("br",null,null,-1),y={href:"http://failure-domain.beta.kubernetes.io/region",target:"_blank",rel:"noopener noreferrer"},f=n("br",null,null,-1),h={href:"http://beta.kubernetes.io/instance-type",target:"_blank",rel:"noopener noreferrer"},P=n("br",null,null,-1),E={href:"http://beta.kubernetes.io/os",target:"_blank",rel:"noopener noreferrer"},x=n("br",null,null,-1),S={href:"http://beta.kubernetes.io/arch",target:"_blank",rel:"noopener noreferrer"},q=i(`<p>operator操作符<br> In：Label的值在某个列表中<br> NotIn：Label的值不在某个列表中<br> Gt：Label的值⼤于某个值<br> Lt：Label的值⼩于某个值<br> Exists：某个Label存在<br> DoesNotExist：某个Label不存在</p><p>weight权重1~100，越⾼越优先考虑</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 新的Pod不允许部署在Node0上，在剩余节点中优先部署在disk=ssd的Node上</span>
<span class="token function">mkdir</span> /etc/k8s
<span class="token builtin class-name">cd</span> /etc/k8s
<span class="token function">cat</span> <span class="token operator">&gt;</span> pod-nginx.yaml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: v1
kind: Pod
metadata:
  name: pod-nginx
spec:
  containers:
    - name: container-nginx
      image: nginx:1.20.2-alpine
      ports:
        - containerPort: 80
  affinity:
    nodeAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
        nodeSelectorTerms:
          - matchExpressions:
              - key: kubernetes.io/hostname
                operator: NotIn
                values:
                  - node0
      preferredDuringSchedulingIgnoredDuringExecution:
        - weight: 1
          preference:
            matchExpressions:
              - key: disk
                operator: In
                values:
                  - ssd
EOF</span>
kubectl delete <span class="token parameter variable">-f</span> pod-nginx.yaml
kubectl apply <span class="token parameter variable">-f</span> pod-nginx.yaml

kubectl get po <span class="token parameter variable">-o</span> wide
NAME READY STATUS RESTARTS AGE IP NODE NOMI
pod-nginx <span class="token number">1</span>/1 Running <span class="token number">0</span> 6s <span class="token number">10.244</span>.0.147 minikube <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、Pod Affinity<br> 也有两种类型：<br> requiredDuringSchedulingIgnoredDuringExecution<br> preferredDuringSchedulingIgnoredDuringExecution<br> Pod间亲和性，⽤Pod规约中的.affinity.podAffinity字段<br> Pod间反亲和性，⽤Pod规约中的.affinity.podAntiAffinity字段</p><figure><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwe93f41f0fe17e1e3a3bf470704ee8ff5.png" alt="affinity.png" tabindex="0"><figcaption>affinity.png</figcaption></figure>`,5),A={href:"http://xn--Podtopology-rb7re9edv2ddiictew32bed3lxr0b.kubernetes.io/zone=V%E6%A0%87%E7%AD%BE%E7%9A%84%E8%8A%82%E7%82%B9%E4%B8%8A%EF%BC%8C%E5%B9%B6%E4%B8%94%E9%9B%86%E7%BE%A4%E4%B8%AD%E2%BE%84%E5%B0%91%E6%9C%89%E2%BC%80%E4%B8%AA%E4%BD%8D%E4%BA%8E%E8%AF%A5%E5%8F%AF%E2%BD%A4%E5%8C%BA%E7%9A%84%E8%8A%82%E7%82%B9%E4%B8%8A%E8%BF%90%E2%BE%8F%E7%9D%80%E5%B8%A6%E6%9C%89security=S1%E6%A0%87%E7%AD%BE%E7%9A%84Pod%E3%80%82",target:"_blank",rel:"noopener noreferrer"},C=n("br",null,null,-1),_={href:"http://xn--topology-459lv3zuj1bwrvm4cl47bx07a5px.kubernetes.io/zone=R%EF%BC%8CPod%E4%B8%8D%E8%83%BD%E8%A2%AB%E8%B0%83%E5%BA%A6%E5%88%B0%E8%AF%A5%E8%8A%82%E7%82%B9%E4%B8%8A",target:"_blank",rel:"noopener noreferrer"},O=i(`<div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> with<span class="token punctuation">-</span>pod<span class="token punctuation">-</span>affinity
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">affinity</span><span class="token punctuation">:</span>
    <span class="token key atrule">podAffinity</span><span class="token punctuation">:</span>
      <span class="token key atrule">requiredDuringSchedulingIgnoredDuringExecution</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">labelSelector</span><span class="token punctuation">:</span>
            <span class="token key atrule">matchExpressions</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> security
                <span class="token key atrule">operator</span><span class="token punctuation">:</span> In
                <span class="token key atrule">values</span><span class="token punctuation">:</span>
                  <span class="token punctuation">-</span> S1
          <span class="token key atrule">topologyKey</span><span class="token punctuation">:</span> topology.kubernetes.io/zone
    <span class="token key atrule">podAntiAffinity</span><span class="token punctuation">:</span>
      <span class="token key atrule">preferredDuringSchedulingIgnoredDuringExecution</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">weight</span><span class="token punctuation">:</span> <span class="token number">100</span>
          <span class="token key atrule">podAffinityTerm</span><span class="token punctuation">:</span>
            <span class="token key atrule">labelSelector</span><span class="token punctuation">:</span>
              <span class="token key atrule">matchExpressions</span><span class="token punctuation">:</span>
                <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> security
                  <span class="token key atrule">operator</span><span class="token punctuation">:</span> In
                  <span class="token key atrule">values</span><span class="token punctuation">:</span>
                    <span class="token punctuation">-</span> S2
            <span class="token key atrule">topologyKey</span><span class="token punctuation">:</span> topology.kubernetes.io/zone
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> with<span class="token punctuation">-</span>pod<span class="token punctuation">-</span>affinity
      <span class="token key atrule">image</span><span class="token punctuation">:</span> registry.k8s.io/pause<span class="token punctuation">:</span><span class="token number">2.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>污点（Taint）与容忍度（Toleration）<br> 节点亲和性是Pod的属性，使Pod被吸引到特定的节点（出于偏好或硬性要求）<br> 污点（Taint）相反，使节点排斥特定的Pod<br> 容忍度（Toleration）⽤于Pod。允许调度器调度带有对应污点的Pod。但并不保证调度<br> 污点和容忍度配合⽤来避免Pod被分配到不合适的节点上</p><p>Taint的策略：<br> NoSchedule：POD不会被调度到标记为taints节点。<br> PreferNoSchedule：NoSchedule的软策略版本。<br> NoExecute：⼀旦Taint⽣效，如该节点内正在运⾏的POD没有对应Tolerate设置会被逐出</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 设置污点</span>
kubectl taint nodes node0 <span class="token assign-left variable">app</span><span class="token operator">=</span>nginx:NoSchedule

<span class="token comment"># 去除污点</span>
kubectl taint nodes node0 <span class="token assign-left variable">app</span><span class="token operator">=</span>nginx:NoSchedule-

<span class="token function">cat</span> <span class="token operator">&gt;</span> deploy-nginx.yaml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: v1
kind: Pod
metadata:
  name: nginx
  labels:
    app: nginx
spec:
  containers:
    - name: nginx
      image: nginx:1.20.2-alpine
      imagePullPolicy: IfNotPresent
      ports:
        - containerPort: 80
EOF</span>
kubectl delete <span class="token parameter variable">-f</span> deploy-nginx.yaml
kubectl apply <span class="token parameter variable">-f</span> deploy-nginx.yaml

<span class="token comment"># 没有任何⼀台服务器可以部署，因为所有node认为app=nginx是污点，不予部署</span>
kubectl get po
nginx <span class="token number">0</span>/1 Pending <span class="token number">0</span> 2m9s

<span class="token comment"># 设置容忍度，允许app=nginx部署在app=nginx:NoSchedule的节点上</span>

<span class="token function">cat</span> <span class="token operator">&gt;</span> deploy-nginx.yaml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: v1
kind: Pod
metadata:
  name: nginx
  labels:
    app: nginx
spec:
  containers:
    - name: nginx
      image: nginx:1.20.2-alpine
      imagePullPolicy: IfNotPresent
      ports:
        - containerPort: 80
  tolerations:
    - key: &quot;app&quot;
      operator: &quot;Equal&quot;
      value: &quot;nginx&quot;
      effect: &quot;NoSchedule&quot;
EOF</span>
kubectl delete <span class="token parameter variable">-f</span> deploy-nginx.yaml
kubectl apply <span class="token parameter variable">-f</span> deploy-nginx.yaml

<span class="token comment"># 有了</span>
kubectl get po <span class="token parameter variable">-o</span> wide
nginx <span class="token number">1</span>/1 Running <span class="token number">0</span> 2m9s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>LimitRange与ResourceQuota<br> LimitRange（限制范围）<br> 默认情况下，K8s集群上的容器运⾏使⽤的计算资源没有限制<br> 使⽤资源配额可以在⼀个指定的命名空间内限制集群资源的使⽤与创建<br> ⼀个Pod最多能够使⽤命名空间的资源配额所定义的CPU和内存⽤量<br> LimitRange是限制命名空间内每个适⽤的对象类别（例如Pod或PersistentVolumeClaim）指定的资源分配量（限制和请求）的策略对象</p><p>LimitRange对象能够限制在⼀个命名空间中实施：<br> 对每个Pod或Container最⼩和最⼤的资源使⽤量的限制。<br> 对每个PersistentVolumeClaim能申请的最⼩和最⼤的存储空间⼤⼩的限制。<br> 对⼀种资源的申请值和限制值的⽐值的控制。<br> 对计算资源的默认申请/限制值，并且⾃动的在运⾏时注⼊到多个Container中。</p><p>LimitRange默认值可能⼩于客户端提交给API服务器的规约中为容器指定的request值导致Pod将⽆法调度</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> myRange.yml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: v1
kind: LimitRange
metadata:
  name: cpu-resource-constraint
spec:
  limits:
  - default: 
      cpu: &quot;500m&quot; # 默认限制值
    defaultRequest: 
      cpu: &quot;500m&quot; # 默认请求值
    max: 
      cpu: &quot;1&quot; # 最大值
    min: 
      cpu: &quot;100m&quot; # 最小值
    type: Container # 限制类型为容器
EOF</span>
kubectl delete <span class="token parameter variable">-f</span> myRange.yml
kubectl apply <span class="token parameter variable">-f</span> myRange.yml

<span class="token comment"># K8s允许将CPU的限额设置为分数，⽐如CPU.limits=500m，500milliCPU，0.5个CPU，Pod就会被分到⼀个CPU⼀半计算能⼒。等价于cpu=0.5，不过官⽅推荐500m</span>
<span class="token comment"># 内存资源的单位是bytes，⽀持使⽤Ei，Pi，Ti，Gi，Mi，Ki的⽅式作为bytes的值，要注意Mi和M的区别（1Mi=10241024，1M=10001000）。</span>

<span class="token comment"># 声明CPU资源请求为700m但未声明limit的Pod：Pod将不会被调度，失败并出现类似以下的错误：</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> conflict.yml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: v1
kind: Pod
metadata:
  name: example-conflict-with-limitrange-cpu
spec:
  containers:
  - name: demo
    image: registry.k8s.io/pause:2.0
    resources:
      requests:
        cpu: &quot;700m&quot;
EOF</span>
kubectl delete <span class="token parameter variable">-f</span> conflict.yml
kubectl apply <span class="token parameter variable">-f</span> conflict.yml
Pod <span class="token string">&quot;example-conflict-with-limitrange-cpu&quot;</span> is invalid: spec.containers<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>.resources.requests: Invalid value: <span class="token string">&quot;700m&quot;</span><span class="token builtin class-name">:</span> must be <span class="token function">less</span> than or equal to cpu limit

<span class="token comment"># 如果你同时设置了request和limit，即使相同的LimitRange，新Pod也会被成功调度：</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> conflict.yml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: v1
kind: Pod
metadata:
  name: example-no-conflict-with-limitrange-cpu
spec:
  containers:
  - name: demo
    image: registry.k8s.io/pause:2.0
    resources:
      requests:
        cpu: &quot;700m&quot;
      limits:
        cpu: &quot;700m&quot;
EOF</span>
kubectl delete <span class="token parameter variable">-f</span> conflict.yml
kubectl apply <span class="token parameter variable">-f</span> conflict.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Resource Quota（资源配额）<br> 资源配额，通过ResourceQuota对象来定义，对每个命名空间的资源消耗总量、某种类型的对象的总数⽬、Pod可以使⽤的计算资源提供限制<br> 配额机制所⽀持的资源类型：</p><figure><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwee6ca4ddffd533cb55dd4b91337023be.png" alt="limits.png" tabindex="0"><figcaption>limits.png</figcaption></figure><p>不同的团队可以在不同的命名空间下⼯作。通过RBAC强制执⾏。集群管理员可为每个命名空间创建⼀个或多个ResourceQuota对象。<br> 当⽤户在命名空间下创建资源（如Pod、Service等）时，配额系统会跟踪集群的资源使⽤情况，确保使⽤的资源⽤量不超过ResourceQuota中定义的硬性资源限额。<br> 如果资源创建或者更新请求违反了配额约束，那么该请求会报错（HTTP403FORBIDDEN），并在消息中给出有可能违反的约束。<br> 如果命名空间下的计算资源cpu和memory的配额被启⽤，则必须设定请求值（request）和约束值（limit），否则配额系统将拒绝Pod的创建。可⽤LimitRanger准⼊控制器来为没有设置计算资源需求的Pod设置默认值<br> 对于其他资源：⽆需为该资源设置限制或请求。如果资源配额限制了此命名空间的临时存储，则可以创建没有限制/请求临时存储的新Pod。可⽤限制范围⾃动设置对这些资源的默认请求</p><p>在具有32GiB内存和16核CPU资源的集群中，允许A团队⽤20GiB内存和10核的CPU资源，B团队⽤10GiB内存和4核的CPU资源，预留2GiB内存和2核的CPU资源供将来分配。限制&quot;testing&quot;命名空间使⽤1核CPU资源和1GiB内存。允许&quot;production&quot;命名空间使⽤任意数量</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 查看是否支持</span>
kubectl api-resources <span class="token operator">|</span> <span class="token function">grep</span> resourcequota
resourcequotas <span class="token function">quota</span>  v1 <span class="token boolean">true</span> ResourceQuota

<span class="token function">cat</span> <span class="token operator">&gt;</span> helloworld.yml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: apps/v1
kind: Deployment
metadata:
  name: helloworld-deployment
  namespace: myspace
spec:
  replicas: 3
  selector:
    matchLabels:
      app: helloworld
  template:
    metadata:
      labels:
        app: helloworld
    spec:
      containers:
      - name: k8s-demo
        image: 105552010/k8s-demo
        ports:
        - name: nodejs-port
          containerPort: 3000
        resources:
          requests:
            cpu: &quot;200m&quot;
            memory: &quot;512Mi&quot;
          limits:
            cpu: &quot;400m&quot;
            memory: &quot;1Gi&quot;
EOF</span>
kubectl delete <span class="token parameter variable">-f</span> helloworld.yml
kubectl apply <span class="token parameter variable">-f</span> helloworld.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>存储资源配额</p><figure><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwe87568c263d25e19b2d136c7594e72c0.png" alt="storagelimits.png" tabindex="0"><figcaption>storagelimits.png</figcaption></figure>`,15),N=n("br",null,null,-1),R={href:"http://gold.storageclass.storage.k8s.io/requests.storage:500Gi",target:"_blank",rel:"noopener noreferrer"},I=n("br",null,null,-1),D={href:"http://bronze.storageclass.storage.k8s.io/requests.storage:100Gi",target:"_blank",rel:"noopener noreferrer"},M=i(`<p>对象数量限定</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> namespace-quota.yml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: v1
kind: Namespace
metadata:
  name: myspace
---
apiVersion: v1
kind: ResourceQuota
metadata:
  name: compute-quota
  namespace: myspace
spec:
  hard:
    requests.cpu: &quot;2&quot;
    requests.memory: &quot;2Gi&quot;
    requests.nvidia.com/gpu: &quot;2&quot;
    limits.cpu: &quot;3&quot;
    limits.memory: &quot;3Gi&quot;
    limits.nvidia.com/gpu: &quot;3&quot;
---
apiVersion: v1
kind: ResourceQuota
metadata:
  name: object-quota
  namespace: myspace
spec:
  hard:
    configmaps: &quot;10&quot;
    persistentvolumeclaims: &quot;4&quot;
    replicationcontrollers: &quot;20&quot;
    secrets: &quot;10&quot;
    services: &quot;10&quot;
    services.loadbalancers: &quot;2&quot;
EOF</span>
kubectl delete <span class="token parameter variable">-f</span> namespace-quota.yml
kubectl apply <span class="token parameter variable">-f</span> namespace-quota.yml

<span class="token comment"># 部署pod</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> myworld.yml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: apps/v1
kind: Deployment
metadata:
  name: helloworld-deployment
  namespace: myspace
spec:
  replicas: 3
  selector:
    matchLabels:
      app: helloworld
  template:
    metadata:
      labels:
        app: helloworld
    spec:
      containers:
      - name: k8s-demo
        image: 105552010/k8s-demo
        ports:
        - name: nodejs-port
          containerPort: 3000
EOF</span>
kubectl delete <span class="token parameter variable">-f</span> myworld.yml
kubectl apply <span class="token parameter variable">-f</span> myworld.yml
<span class="token comment"># 查看状态，所有pod未启动</span>
kubectl get all <span class="token parameter variable">-n</span> myspace
NAME                                    READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/helloworld-deployment   <span class="token number">0</span>/3     <span class="token number">0</span>            <span class="token number">0</span>           16s
NAME                                               DESIRED   CURRENT   READY   AGE
replicaset.apps/helloworld-deployment-7d47d68456   <span class="token number">3</span>         <span class="token number">0</span>         <span class="token number">0</span>       16s
<span class="token comment"># 查看明细</span>
kubectl describe replicaset.apps/helloworld-deployment-7d47d68456 <span class="token parameter variable">-n</span> myspace
Warning  FailedCreate  39s                replicaset-controller  Error creating: pods <span class="token string">&quot;helloworld-deployment-7d47d68456-jg72f&quot;</span> is forbidden: failed quota: compute-quota: must specify limits.cpu for: k8s-demo<span class="token punctuation">;</span> limits.memory for: k8s-demo<span class="token punctuation">;</span> requests.cpu for: k8s-demo<span class="token punctuation">;</span> requests.memory for: k8s-demo

<span class="token comment"># myspace命名空间下所有pod在部署时必须指定资源，否则不予分配</span>
limits.cpu
limits.memory
requests.cpu
requests.memory
<span class="token comment"># 调整后设置限定与需求数量</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> myworld.yml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: apps/v1
kind: Deployment
metadata:
  name: helloworld-deployment
  namespace: myspace
spec:
  replicas: 3
  selector:
    matchLabels:
      app: helloworld
  template:
    metadata:
      labels:
        app: helloworld
    spec:
      containers:
      - name: k8s-demo
        image: 105552010/k8s-demo
        ports:
        - name: nodejs-port
          containerPort: 3000
        resources:
          requests:
            cpu: &quot;100m&quot;
            memory: &quot;0.5Gi&quot;
          limits:
            cpu: &quot;200m&quot;
            memory: &quot;0.5Gi&quot;
EOF</span>
kubectl delete <span class="token parameter variable">-f</span> myworld.yml
kubectl apply <span class="token parameter variable">-f</span> myworld.yml

<span class="token comment"># 有⼀个pod没有启动，看明细</span>
kubectl get all <span class="token parameter variable">-n</span> myspace
<span class="token comment"># 检查限定明细</span>
kubectl get resourcequotas <span class="token parameter variable">-n</span> myspace
kubectl describe resourcequotas <span class="token parameter variable">-n</span> myspace
Name:                    compute-quota
Namespace:               myspace
Resource                 Used  Hard
--------                 ----  ----
limits.cpu               800m  <span class="token number">2</span>
limits.memory            2Gi   2Gi
limits.nvidia.com/gpu    <span class="token number">0</span>     <span class="token number">2</span>
requests.cpu             400m  <span class="token number">1</span>
requests.memory          1Gi   1Gi
requests.nvidia.com/gpu  <span class="token number">0</span>     <span class="token number">1</span>


Name:                   object-quota
Namespace:              myspace
Resource                Used  Hard
--------                ----  ----
configmaps              <span class="token number">1</span>     <span class="token number">10</span>
persistentvolumeclaims  <span class="token number">0</span>     <span class="token number">4</span>
replicationcontrollers  <span class="token number">0</span>     <span class="token number">20</span>
secrets                 <span class="token number">0</span>     <span class="token number">10</span>
services                <span class="token number">0</span>     <span class="token number">10</span>
services.loadbalancers  <span class="token number">0</span>     <span class="token number">2</span>
<span class="token comment"># 检查pod状态</span>
kubectl describe replicasets.apps <span class="token parameter variable">-n</span> myspace
Warning  FailedCreate      88s               replicaset-controller  Error creating: pods <span class="token string">&quot;helloworld-deployment-7c77885d8f-2kh6t&quot;</span> is forbidden: exceeded quota: compute-quota, requested: <span class="token assign-left variable">limits.memory</span><span class="token operator">=</span>1Gi,requests.memory<span class="token operator">=</span>512Mi, used: <span class="token assign-left variable">limits.memory</span><span class="token operator">=</span>2Gi,requests.memory<span class="token operator">=</span>1Gi, limited: <span class="token assign-left variable">limits.memory</span><span class="token operator">=</span>2Gi,requests.memory<span class="token operator">=</span>1Gi
<span class="token comment"># 确实内存不够分配</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="deployment控制器-零停机保障-滚动更新策略与设置-扩容缩容-回滚部署到指定版本" tabindex="-1"><a class="header-anchor" href="#deployment控制器-零停机保障-滚动更新策略与设置-扩容缩容-回滚部署到指定版本"><span>Deployment控制器，零停机保障-滚动更新策略与设置，扩容缩容，回滚部署到指定版本</span></a></h2><ul><li><p>应用程序源码被编译打包为容器，并被装入Pod中。但Pod没有自愈能力，不能扩缩容，不支持方便的升级和回滚。</p></li><li><p>Deployment提供了扩缩容管理、不停机更新以及版本控制、无缝迁移、自动灾难恢复、一键回滚等特性。用于部署无状态服务，是Pod控制器，管理多个Pod，如注册中心、网关、SpringBoot框架等</p></li><li><p>用户通过上层控制器来完成Pod部署。包括Deployment、DaemonSet以及StatefulSet</p></li><li><p>Deployment在底层利用了ReplicaSet的对象。但不建议直接操作ReplicaSet（自愈、扩展性）</p></li><li><p>Replication Controller（RC）:可以使Pod副本数达到指定数量，确保一个Pod或者一组同类Pod总是可用的。使用RC维护的Pod在失败、删除、终止时会自动替换，用来监视多个节点上的多个Pod</p></li><li><p>ReplicaSet（RS）：支持基于集合的标签选择器的新一代RC，主要作用于Deployment协调创建、删除、更新Pod，和RC的区别是，RS支持标签选择器，可以单独使用，但一般用Deployment来自动管理RS，除非自定义的Pod不需要更新或者其他编排等</p></li></ul><details><summary>yml构建Deploymemnt部署脚本</summary><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> /etc/k8s
<span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/k8s/deploy-nginx.yaml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
# 组/版本
apiVersion: apps/v1
# 对象类型
kind: Deployment
# 元数据：定义API对象名字和标签
metadata:
  #部署名称
  name: deploy-nginx
# 规范。对象资源的配置信息
spec:
  #spec.selector表明Deployment要管理的Pod所必须具备的标签
  selector:
    #匹配所有标签app且值为nginx
    matchLabels:
      app: nginx
  #replicas 部署多少个Pod副本
  #replicas: 5
  strategy:
    #使⽤滚动更新策略升级
    type: RollingUpdate
    rollingUpdate:
      #最多允许出现1个不可⽤pod
      maxUnavailable: 1
      #不允许溢出，Pod总量最多只能5个
      maxSurge: 1
  #滚动更新动作间隔10s
  minReadySeconds: 10
  #spec.template 定义了Deployment管理的Pod模板
  template:
    #元数据定义每一个POD拥有标签 key=app,value=nginx
    metadata:
      labels:
        app: nginx
    #template.spec说明具体部署的pod容器与镜像信息
    spec:
      containers:
        #容器名
      - name: container-nginx
        #镜像名称
        image: nginx:1.20.2-alpine
        #容器对外暴露的端口号
        ports:
        - containerPort: 80

EOF</span>
kubectl delete <span class="token parameter variable">-f</span> /etc/k8s/deploy-nginx.yaml
kubectl apply <span class="token parameter variable">-f</span> /etc/k8s/deploy-nginx.yaml

<span class="token comment"># 获取目前所有部署概况</span>
kubectl get deploy
NAME           READY   UP-TO-DATE   AVAILABLE   AGE
deploy-nginx   <span class="token number">4</span>/4     <span class="token number">4</span>            <span class="token number">4</span>           14h
NAME：Deployment名称
READY：Pod就绪个数和总副本数
UP-TO-DATE：显示已达到期望状态的被更新的副本数
AVAILABLE：显示用户可以使用的应用程序副本数，当前为0，说明目前还没有达到期望的Pod；
AGE：程序运行时间

<span class="token comment"># 查看具体部署详情</span>
kubectl describe deploy deploy-nginx

kubectl get pods <span class="token parameter variable">-o</span> wide  --show-labels
kubectl describe pod deploy-nginx-774c78fcfc-4z9hn

<span class="token comment"># 查看滚动更新进度</span>
kubectl rollout status deploy deploy-nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><ul><li>K8s支持RollingUpdate策略以逐渐用新pod替换旧pod，同时继续为客户端提供服务而不会导致停机</li><li>没有原始的YAML文档时，kubectl edit deploy deploy-nginx --record</li><li>拥有原始YAML文档时，滚动更新期望状态是Pod数量为4个副本，maxSurge:1是在更新过程中，Pod数量不超过4+1=5个，而maxUnavailable:1同一时间可用状态POD最多为4-1=3个。结果是在滚动更新的过程中最多只能同时更新5-3=2个Pod</li></ul><p>扩缩容</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># scale静态扩缩容</span>
kubectl scale deploy deploy-nginx <span class="token parameter variable">--replicas</span><span class="token operator">=</span><span class="token number">4</span>
<span class="token comment"># kube-scheduler调度：默认使用，pod自动分配到不同的节点</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回滚版本</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> /etc/k8s/deploy-nginx-v.1.20.yaml <span class="token parameter variable">--record</span>
kubectl apply <span class="token parameter variable">-f</span> /etc/k8s/deploy-nginx-v.1.21.yaml  <span class="token parameter variable">--record</span>
kubectl apply <span class="token parameter variable">-f</span> /etc/k8s/deploy-nginx-v.1.22.yaml  <span class="token parameter variable">--record</span>

<span class="token comment"># 查看版本历史</span>
kubectl rollout <span class="token function">history</span> deploy deploy-nginx
REVISION  CHANGE-CAUSE
<span class="token number">1</span>         kubectl apply <span class="token parameter variable">--filename</span><span class="token operator">=</span>/etc/k8s/deploy-nginx-v.1.20.yaml <span class="token parameter variable">--record</span><span class="token operator">=</span>true
<span class="token number">2</span>         kubectl apply <span class="token parameter variable">--filename</span><span class="token operator">=</span>/etc/k8s/deploy-nginx-v.1.21.yaml <span class="token parameter variable">--record</span><span class="token operator">=</span>true
<span class="token number">3</span>         kubectl apply <span class="token parameter variable">--filename</span><span class="token operator">=</span>/etc/k8s/deploy-nginx-v.1.22.yaml <span class="token parameter variable">--record</span><span class="token operator">=</span>true

<span class="token comment"># 回滚到指定版本，</span>
<span class="token comment"># 回滚后版本号会变最大，原来的版本号消失</span>
kubectl rollout undo deploy deploy-nginx --to-revision<span class="token operator">=</span><span class="token number">1</span>
<span class="token comment"># 回滚1和4后</span>
kubectl rollout <span class="token function">history</span> deploy deploy-nginx
deployment.apps/deploy-nginx 
REVISION  CHANGE-CAUSE
<span class="token number">2</span>         kubectl apply <span class="token parameter variable">--filename</span><span class="token operator">=</span>/etc/k8s/deploy-nginx-v.1.21.yaml <span class="token parameter variable">--record</span><span class="token operator">=</span>true
<span class="token number">3</span>         kubectl apply <span class="token parameter variable">--filename</span><span class="token operator">=</span>/etc/k8s/deploy-nginx-v.1.22.yaml <span class="token parameter variable">--record</span><span class="token operator">=</span>true
<span class="token number">5</span>         kubectl apply <span class="token parameter variable">--filename</span><span class="token operator">=</span>/etc/k8s/deploy-nginx-v.1.20.yaml <span class="token parameter variable">--record</span><span class="token operator">=</span>true
<span class="token number">6</span>         kubectl apply <span class="token parameter variable">--filename</span><span class="token operator">=</span>/etc/k8s/deploy-nginx-v.1.23.yaml <span class="token parameter variable">--record</span><span class="token operator">=</span>true

<span class="token comment">#yaml格式看所有历史版本yaml格式信息</span>
kubectl rollout <span class="token function">history</span> deploy deploy-nginx <span class="token parameter variable">-o</span> yaml
<span class="token comment">#yaml格式看指定历史版本yaml格式信息</span>
kubectl rollout <span class="token function">history</span> deploy deploy-nginx <span class="token parameter variable">-o</span> yaml <span class="token parameter variable">--revision</span><span class="token operator">=</span><span class="token number">3</span>
<span class="token comment">#yaml格式导出指定历史版本yaml格式信息到指定文件</span>
kubectl rollout <span class="token function">history</span> deploy deploy-nginx <span class="token parameter variable">-o</span> yaml <span class="token parameter variable">--revision</span><span class="token operator">=</span><span class="token number">3</span> <span class="token operator">&gt;</span> deploy-nginx-version-3.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="利用daemonset为新节点自动部署pod" tabindex="-1"><a class="header-anchor" href="#利用daemonset为新节点自动部署pod"><span>利用DaemonSet为新节点自动部署Pod</span></a></h2><figure><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw876e70eacff36b47208692de6bdf0ee9.png" alt="daemonset.png" tabindex="0"><figcaption>daemonset.png</figcaption></figure><ul><li>DaemonSet当有节点加入集群时，也会新增一个Pod。有节点从集群移除时，Pod会被回收。删除DaemonSet将会删除它创建的所有Pod</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># 为每一个节点自动部署一个Pod自动对外暴露Nginx服务，利用hostNetwork选项IP地址将变为真实节点IP</span>
mkdir /etc/k8s
cd /etc/k8s
cat <span class="token punctuation">&gt;</span> ds<span class="token punctuation">-</span>nginx.yaml &lt;&lt;<span class="token punctuation">-</span><span class="token string">&#39;EOF&#39;</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> DaemonSet
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
 <span class="token key atrule">name</span><span class="token punctuation">:</span> ds<span class="token punctuation">-</span>nginx
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
 <span class="token comment"># 选择app=nginx标签的pod</span>
 <span class="token key atrule">selector</span><span class="token punctuation">:</span>
  <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
   <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx
 <span class="token comment"># 定义由控制器创建的 Pod 的标签</span>
 <span class="token key atrule">template</span><span class="token punctuation">:</span>
  <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
   <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx
  <span class="token key atrule">spec</span><span class="token punctuation">:</span>
   <span class="token key atrule">hostNetwork</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
   <span class="token key atrule">containers</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
      <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.20.2<span class="token punctuation">-</span>alpine
      <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
EOF
kubectl delete <span class="token punctuation">-</span>f ds<span class="token punctuation">-</span>nginx.yaml
kubectl apply <span class="token punctuation">-</span>f ds<span class="token punctuation">-</span>nginx.yaml
 
kubectl get pods <span class="token punctuation">-</span>o wide
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="service控制器、作用-yaml定义service-service四种服务类型-service与kube-proxy实现原理" tabindex="-1"><a class="header-anchor" href="#service控制器、作用-yaml定义service-service四种服务类型-service与kube-proxy实现原理"><span>Service控制器、作用，YAML定义Service，Service四种服务类型，Service与Kube-Proxy实现原理</span></a></h2><ul><li>Service提供了一个稳定的服务名称与IP地址、端口、DNS，提供基组动态Pod集合的TCP以及UDP负载均衡能力。集群内不同应⽤之间可通过DNS相互访问</li><li>直接与独⽴的Pod进⾏通信是不明智的，因为Pod的IP地址不可靠。因为Pod可能在扩容、升级、回滚或发⽣故障等过程中失效。被新pod替代</li><li>Service与Pod之间、Deployment和Pod之间通过Label和Label筛选器（selector）松耦合。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> /etc/k8s
<span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/k8s/deploy-nginx.yaml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
#使用的API版本。最新版Kubernetes位于apps/v1的API组
apiVersion: apps/v1
#kind告诉Kubernetes现在定义的是一个Deployment对象
kind: Deployment
#metadata部分定义Deployment的名字和标签
metadata:
  #部署名称为
  name: deploy-nginx
#spec下的内容都与Pod有关
spec:
  #spec.selector表明Deployment要管理的Pod所必须具备的标签
  selector:
    #匹配所有标签app且值为nginx
    matchLabels:
      app: nginx
  #replicas告诉Kubernetes需要部署多少个Pod副本
  replicas: 4
  #spec.template下的内容定义了Deployment管理的Pod模板
  template:
    #元数据定义每一个POD拥有标签 key=app,value=nginx
    metadata:
      labels:
        app: nginx
    #template.spec说明具体部署的容器与镜像信息
    spec:
      containers:
        #容器名
      - name: container-nginx
        #镜像名称
        image: nginx:1.20.2-alpine
        #容器对外暴露的端口号
        ports:
        - containerPort: 80
EOF</span>
kubectl delete deploy deploy-nginx
kubectl apply <span class="token parameter variable">-f</span> /etc/k8s/deploy-nginx.yaml

kubectl get deploy

kubectl get pods --show-labels
NAME                            READY   STATUS    RESTARTS   AGE   LABELS
deploy-nginx-7fcfb9c499-64fdq   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          14h   <span class="token assign-left variable">app</span><span class="token operator">=</span>nginx,pod-template-hash<span class="token operator">=</span>7fcfb9c499
deploy-nginx-7fcfb9c499-9478t   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          14h   <span class="token assign-left variable">app</span><span class="token operator">=</span>nginx,pod-template-hash<span class="token operator">=</span>7fcfb9c499
deploy-nginx-7fcfb9c499-smcl2   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          14h   <span class="token assign-left variable">app</span><span class="token operator">=</span>nginx,pod-template-hash<span class="token operator">=</span>7fcfb9c499
deploy-nginx-7fcfb9c499-vvq6s   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          14h   <span class="token assign-left variable">app</span><span class="token operator">=</span>nginx,pod-template-hash<span class="token operator">=</span>7fcfb9c499

<span class="token function">mkdir</span> /etc/k8s
<span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/k8s/svc-nginx.yaml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: v1
#描述对象为Service
kind: Service
#定义Service的名称
metadata:
  name: svc-nginx
#配置细节
spec:
	#通过节点端口对外暴露
  type: NodePort
	#选择器，选中所有app=nginx的pod
  selector: 
    app: nginx
	#端口信息
  ports:
      #Service在集群内部对外暴露的端口
    - port: 8000
    	#容器内对外暴露的端口
      targetPort: 80
    	#节点对外暴露的端口
      nodePort: 30001
EOF</span>
kubectl delete svc svc-nginx
kubectl apply <span class="token parameter variable">-f</span> /etc/k8s/svc-nginx.yaml

kubectl get svc <span class="token parameter variable">-o</span> wide
NAME               TYPE        CLUSTER-IP     EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>          AGE    SELECTOR
kubernetes         ClusterIP   <span class="token number">172.16</span>.32.1    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">443</span>/TCP          4d2h   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
nginx-deployment   NodePort    <span class="token number">172.16</span>.32.46   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">9000</span>:31090/TCP   4d2h   <span class="token assign-left variable">app</span><span class="token operator">=</span>nginx
svc-nginx          NodePort    <span class="token number">172.16</span>.32.87   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">8000</span>:30000/TCP   19s    <span class="token assign-left variable">app</span><span class="token operator">=</span>my-nginx

kubectl describe svc svc-nginx 
Name:                     svc-nginx
Namespace:                default
Labels:                   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
Annotations:              <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
Selector:                 <span class="token assign-left variable">app</span><span class="token operator">=</span>my-nginx
Type:                     NodePort
IP Family Policy:         SingleStack
IP Families:              IPv4
IP:                       <span class="token number">172.16</span>.32.87
IPs:                      <span class="token number">172.16</span>.32.87
Port:                     <span class="token operator">&lt;</span>unset<span class="token operator">&gt;</span>  <span class="token number">8000</span>/TCP
TargetPort:               <span class="token number">80</span>/TCP
NodePort:                 <span class="token operator">&lt;</span>unset<span class="token operator">&gt;</span>  <span class="token number">30000</span>/TCP
Endpoints:                <span class="token number">172.16</span>.10.246:80,172.16.10.85:80,172.16.10.87:80
Session Affinity:         None
External Traffic Policy:  Cluster
Events:                   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>

<span class="token comment"># 扩缩容Endpoints会增多</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Service四种服务类型<br> ClusterIP(默认)</p><ul><li>为ClusterIP服务分配一个集群内部ip地址。</li><li>服务只能在集群内访问。不能从集群外部请求服务pod</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
 <span class="token key atrule">name</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>backend<span class="token punctuation">-</span>service
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
 <span class="token key atrule">type</span><span class="token punctuation">:</span> ClusterIP <span class="token comment"># Optional field (default)</span>
 <span class="token key atrule">clusterIP</span><span class="token punctuation">:</span> 10.10.0.1 <span class="token comment"># within service cluster ip range</span>
 <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> http
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">8080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>NodePort</p><ul><li>自动创建节点端口服务（30000-32767）路由到的ClusterIP服务。</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
 <span class="token key atrule">name</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>frontend<span class="token punctuation">-</span>service
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
 <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort
 <span class="token key atrule">selector</span><span class="token punctuation">:</span>
   <span class="token key atrule">app</span><span class="token punctuation">:</span> web
 <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> http
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">8080</span>
    <span class="token key atrule">nodePort</span><span class="token punctuation">:</span> <span class="token number">30000</span> <span class="token comment"># 30000-32767, Optional field</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>LoadBalancer</p><ul><li>NodePort服务的扩展。自动创建外部负载均衡器路由到的NodePort和ClusterIP服务。</li><li>将NodePort与基于云环境的负载器集成在一起。</li><li>云提供商 (AWS、Azure、GCP等) 提供自己的本机负载均衡器实现，然后自动将请求路由到K8s服务。</li><li>每次要向外界公开服务时，都必须创建一个新的LoadBalancer并获取ip地址。</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>frontend<span class="token punctuation">-</span>service
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> LoadBalancer
  <span class="token key atrule">clusterIP</span><span class="token punctuation">:</span> 10.0.171.123
  <span class="token key atrule">loadBalancerIP</span><span class="token punctuation">:</span> 123.123.123.123
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> web
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> http
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">8080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ExternalName</p>`,27),T=n("li",null,"将服务映射到DNS名称",-1),V={href:"http://x.com",target:"_blank",rel:"noopener noreferrer"},w=n("li",null,"用创建服务表示外部数据存储，例如在K8s外部运行的数据库。用ExternalName服务 (作为本地服务) 当pod从一个命名空间与另一个命名空间中的服务通讯",-1),L=i(`<div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> svc<span class="token punctuation">-</span>app
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> ExternalName
  <span class="token key atrule">externalName</span><span class="token punctuation">:</span> svc<span class="token punctuation">-</span>mysql.ns<span class="token punctuation">-</span>db.svc.cluster.local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Service与Kube-Proxy实现原理</p><ul><li>kube-proxy在每个节点上运行。可以执行TCP、UDP 和 SCTP 流转发</li><li>kube-proxy在默认的iptables模式下，会为每个Service添加iptables规则，捕获流向Service的ClusterIP和端口的流量，并通过负载均衡策略（如轮询）将流量重定向到Service后端集合中的一个Endpoint（Pod），使用iptables处理流量的系统开销低，因为流量由Linux netfilter处理，无需在用户空间和内核空间之间切换</li></ul><h2 id="k8s命令行工具安装-必须" tabindex="-1"><a class="header-anchor" href="#k8s命令行工具安装-必须"><span>k8s命令行工具安装（必须）</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 下载包</span>
<span class="token function">curl</span> <span class="token parameter variable">-LO</span> <span class="token string">&quot;https://dl.k8s.io/release/<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token parameter variable">-s</span> https://dl.k8s.io/release/stable.txt<span class="token variable">)</span></span>/bin/linux/amd64/kubectl&quot;</span>
<span class="token comment"># 安装</span>
<span class="token function">sudo</span> <span class="token function">install</span> <span class="token parameter variable">-o</span> root <span class="token parameter variable">-g</span> root <span class="token parameter variable">-m</span> 0755 kubectl /usr/local/bin/kubectl
<span class="token comment"># 测试</span>
kubectl version <span class="token parameter variable">--client</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="k8sminikube-学习环境" tabindex="-1"><a class="header-anchor" href="#k8sminikube-学习环境"><span>k8sminikube（学习环境）</span></a></h2>`,6),F=n("br",null,null,-1),B=n("br",null,null,-1),G=i(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 前提先按装docker、containerd等并启动，2xCPU，4G内存，20G磁盘</span>
<span class="token comment"># 安装minikube</span>
<span class="token function">curl</span> <span class="token parameter variable">-LO</span> https://github.com/kubernetes/minikube/releases/latest/download/minikube-linux-amd64
<span class="token function">sudo</span> <span class="token function">install</span> minikube-linux-amd64 /usr/local/bin/minikube <span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> minikube-linux-amd64

<span class="token comment"># 启动minikube，VMware情况下 --force</span>
<span class="token comment"># 无外网 --image-mirror-country=&#39;cn&#39;</span>
<span class="token comment"># 设置代理参考Linux 宿主机开通192.168.1.0/24的子网防火墙</span>
<span class="token comment"># --cpu=4防止ingress插件启用失败 --addons=ingress启动网关</span>
/usr/local/bin/minikube start <span class="token parameter variable">--cpus</span><span class="token operator">=</span><span class="token number">4</span> <span class="token parameter variable">--force</span> <span class="token parameter variable">--memory</span><span class="token operator">=</span>8192m  --insecure-registry<span class="token operator">=</span><span class="token string">&quot;192.168.1.155:80&quot;</span> <span class="token parameter variable">--addons</span><span class="token operator">=</span>ingress <span class="token parameter variable">--driver</span><span class="token operator">=</span>docker --registry-mirror<span class="token operator">=</span><span class="token string">&quot;https://docker.m.daocloud.io&quot;</span> 
<span class="token comment"># 安装kubectl</span>
minikube kubectl -- get pods <span class="token parameter variable">-A</span>
<span class="token comment"># 检查是否安装成功</span>
minikube

<span class="token comment"># 报错1：因 GUEST_MISSING_CONNTRACK 错误而退出：抱歉, Kubernetes 1.31.0 要求在 root 路径安装 crictl</span>
<span class="token comment"># VERSION=&quot;v1.31.0&quot; # 替换为实际版本</span>
<span class="token comment"># wget https://github.com/kubernetes-sigs/cri-tools/releases/download/$VERSION/crictl-$VERSION-linux-amd64.tar.gz</span>
<span class="token comment"># sudo tar -zxvf crictl-$VERSION-linux-amd64.tar.gz -C /usr/bin/</span>
<span class="token comment"># sudo chmod +x /usr/bin/crictl</span>
<span class="token comment"># crictl --version</span>

<span class="token comment"># 报错2：Kubernetes v1.24+ 和 docker 容器运行时的 none 驱动需要 cri-dockerd。</span>
<span class="token comment">#wget https://github.com/Mirantis/cri-dockerd/releases/download/v0.3.16/cri-dockerd-0.3.16.amd64.tgz</span>
<span class="token comment">#tar xf cri-dockerd-0.3.16.amd64.tgz</span>
<span class="token comment">#cd cri-dockerd</span>
<span class="token comment">#install -o root -g root -m 0755 cri-dockerd /usr/local/bin/cri-dockerd</span>

<span class="token comment"># 报错3：The none driver with Kubernetes v1.24+ requires containernetworking-plugins.</span>
<span class="token comment">#CNI_PLUGIN_VERSION=&quot;v1.34&quot;</span>
<span class="token comment">#CNI_PLUGIN_TAR=&quot;cni-plugins-linux-amd64-$CNI_PLUGIN_VERSION.tgz&quot; # change arch if not on amd64</span>
<span class="token comment">#CNI_PLUGIN_INSTALL_DIR=&quot;/opt/cni/bin&quot;</span>

<span class="token comment">#curl -LO &quot;https://github.com/containernetworking/plugins/releases/download/$CNI_PLUGIN_VERSION/$CNI_PLUGIN_TAR&quot;</span>
<span class="token comment">#sudo mkdir -p &quot;$CNI_PLUGIN_INSTALL_DIR&quot;</span>
<span class="token comment">#sudo tar -xf &quot;$CNI_PLUGIN_TAR&quot; -C &quot;$CNI_PLUGIN_INSTALL_DIR&quot;</span>
<span class="token comment">#rm &quot;$CNI_PLUGIN_TAR&quot;</span>

<span class="token comment">#  删除所有 Pod 和关联的 Controller</span>
kubectl delete all <span class="token parameter variable">--all</span> --all-namespaces
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="k8s安装-生产环境" tabindex="-1"><a class="header-anchor" href="#k8s安装-生产环境"><span>k8s安装（生产环境）</span></a></h2><ul><li>配置需求:4核8G\\40G硬盘、可联通外网</li><li>基准节点CentOS 7.6（内核4.19） &amp; Containerd 用户名 / 密码：root / root</li><li>环境说明 <ul><li>1个Master节点，2个Worknode节点</li><li>POD地址段：172.16.10.0/24 （172.16.10.0~255）学习环境最多部署255个POD</li><li>Service地址段：172.16.32.0/24 （172.16.32.0~255）学习环境最多部署255个Service</li></ul></li><li>所有k8s主机安装Containerd</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 安装Docker 20.10版本，内置Containerd
yum install docker-ce-20.10.* docker-ce-cli-20.10.* -y
# 启用自动containerd.conf的应用模块
cat &lt;&lt;EOF | sudo tee /etc/modules-load.d/containerd.conf
overlay
br_netfilter
EOF
modprobe -- overlay
modprobe -- br_netfilter
# 设置网络参数，开启iptable桥接模式与ip_forward转发
cat &lt;&lt;EOF | sudo tee /etc/sysctl.d/99-kubernetes-cri.conf
net.bridge.bridge-nf-call-iptables  = 1
net.ipv4.ip_forward                 = 1
net.bridge.bridge-nf-call-ip6tables = 1
EOF
# CentOS系统配置生效
sysctl --system
# 生成containerd的默认配置文件路径：/etc/containerd/config.toml
mkdir -p /etc/containerd
containerd config default | tee /etc/containerd/config.toml
# 搜索containerd.runtimes.runc.options，添加SystemdCgroup = true
# 搜索sandbox_image，将值改为 registry.cn-hangzhou.aliyuncs.com/google_containers/pause:3.6
vim /etc/containerd/config.toml
# 重载配置文件，并设置containerd自动启动
systemctl daemon-reload
systemctl enable --now containerd
# 添加对外暴露的sock端点，K8S通过该端点与containerd交互
cat &gt; /etc/crictl.yaml &lt;&lt;EOF
runtime-endpoint: unix:///run/containerd/containerd.sock
image-endpoint: unix:///run/containerd/containerd.sock
timeout: 10
debug: false
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>主节点安装</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 查看本地IP地址
ifconfig
# 设置主机名称
hostnamectl set-hostname master0
# 安装k8s
yum install kubeadm-1.26* kubelet-1.26* kubectl-1.26* -y
# 配置k8s
export LOCAL_IP=192.168.31.220
echo $LOCAL_IP

mkdir /etc/k8s
cd /etc/k8s
rm -f kubeadm-config.yaml
wget http://manongbiji.oss-cn-beijing.aliyuncs.com/ittailkshow/k8s/download/kubeadm-config.yaml
sed -i &#39;s/{LOCAL_IP}/&#39;$LOCAL_IP&#39;/&#39; kubeadm-config.yaml

cd /etc/k8s
kubeadm config migrate --old-config kubeadm-config.yaml --new-config new.yaml

# k8s开机自启动
systemctl start kubelet
systemctl enable kubelet

# 可选
kubeadm config images pull --config /etc/k8s/new.yaml

kubeadm init --config /etc/k8s/new.yaml  --upload-certs
# 执行完出现下面这几句
Your Kubernetes control-plane has initialized successfully!

To start using your cluster, you need to run the following as a regular user:
===========================================================
  mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config
===========================================================
Alternatively, if you are the root user, you can run:
=======================================================
  export KUBECONFIG=/etc/kubernetes/admin.conf
=======================================================
You should now deploy a pod network to the cluster.
Run &quot;kubectl apply -f [podnetwork].yaml&quot; with one of the options listed at:
  https://kubernetes.io/docs/concepts/cluster-administration/addons/

You can now join any number of the control-plane node running the following command on each as root:
================================================================
  kubeadm join 192.168.31.104:6443 --token 7t2weq.bjbawausm0jaxury \\
	--discovery-token-ca-cert-hash sha256:07db227ea83f8e777ffb0d8c9adc0f4999b52af1ce432d4072eb454bf73c5bff \\
	--control-plane --certificate-key 65961cc166a8d09910ac90849efa6121e91e87d8472aeafe1462a0f295a7c94e
============================================================================
Please note that the certificate-key gives access to cluster sensitive data, keep it secret!
As a safeguard, uploaded-certs will be deleted in two hours; If necessary, you can use
&quot;kubeadm init phase upload-certs --upload-certs&quot; to reload certs afterward.

# 安装失败清除脚本
kubeadm reset -f
ipvsadm --clear
rm -rf ~/.kube

# 主节点执行（上面k8s启动成功时）
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
export KUBECONFIG=/etc/kubernetes/admin.conf

cat &gt;&gt; /etc/profile &lt;&lt;-&#39;EOF&#39;
export KUBECONFIG=/etc/kubernetes/admin.conf
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>工作节点 * 2</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 分别设置主机名
hostnamectl set-hostname node0
hostnamectl set-hostname node1

# 安装Kubeadm
yum install kubeadm-1.26* kubelet-1.26* kubectl-1.26* -y

# 加入节点
kubeadm join 192.168.31.220:6443 --token 7t2weq.bjbawausm0jaxury \\
	--discovery-token-ca-cert-hash sha256:e180599ac5957eb5989dc9961d8252ff316c9df53492e76f3d4533695c4f555b 
# 设置自动重启
systemctl start kubelet
systemctl enable kubelet

# 主节点安装Calico网络插件，使主从节点的状态status进入ready
mkdir /etc/k8s
cd /etc/k8s
rm -f calico.yaml
wget http://manongbiji.oss-cn-beijing.aliyuncs.com/ittailkshow/k8s/download/calico.yaml
kubectl delete -f calico.yaml 
kubectl apply -f calico.yaml

# 查看节点
kubectl get nodes -A -o wide
# 查看pod
kubectl get pods -A -o wide
# 查看service
kubectl get services -A -o wide

# 主节点执行测试脚本
# 测试用部署脚本
mkdir /etc/k8s
cd /etc/k8s
rm -f nginx-dep.yml
wget http://manongbiji.oss-cn-beijing.aliyuncs.com/ittailkshow/k8s/download/nginx-dep.yml
kubectl delete deploy nginx-deployment
kubectl delete -f nginx-dep.yml
kubectl apply -f nginx-dep.yml
kubectl get deploy -o wide

# 测试用服务脚本
mkdir /etc/k8s
cd /etc/k8s
rm -f nginx-srv.yml
wget http://manongbiji.oss-cn-beijing.aliyuncs.com/ittailkshow/k8s/download/nginx-srv.yml
kubectl delete srv nginx-deployment
kubectl delete -f nginx-srv.yml
kubectl apply -f nginx-srv.yml
kubectl get service

http://192.168.31.105:31090
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令"><span>常用命令</span></a></h2><ul><li>基础命令</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 查看帮助</span>
kubectl <span class="token parameter variable">--help</span>
<span class="token comment"># 查看API版本</span>
kubectl api-versions
<span class="token comment"># 查看集群信息</span>
kubectl cluster-info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>资源的创建和运行</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 创建并运行一个指定的镜像</span>
kubectl run NAME <span class="token parameter variable">--image</span><span class="token operator">=</span>image <span class="token punctuation">[</span>params<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
<span class="token comment"># e.g. 创建并运行一个名字为nginx的Pod外部访问不了（不推荐，推荐使用deployment等）</span>
kubectl run nginx <span class="token parameter variable">--image</span><span class="token operator">=</span>nginx <span class="token parameter variable">--port</span><span class="token operator">=</span><span class="token number">80</span>

<span class="token comment"># create只创建一次资源，apply创建并更新资源</span>
<span class="token comment"># 根据YAML配置文件或者标准输入创建资源</span>
kubectl create RESOURCE
<span class="token comment"># e.g.</span>
<span class="token comment"># 根据nginx.yaml配置文件创建资源</span>
kubectl create <span class="token parameter variable">-f</span> nginx.yaml
<span class="token comment"># 根据URL创建资源</span>
kubectl create <span class="token parameter variable">-f</span> https://k8s.io/examples/application/deployment.yaml
<span class="token comment"># 根据目录下的所有配置文件创建资源</span>
kubectl create <span class="token parameter variable">-f</span> ./dir
<span class="token comment"># 创建deployment（命名：deploymentID-replicasetID-podID）</span>
kubectl create deployment nginx-deployment <span class="token parameter variable">--image</span><span class="token operator">=</span>nginx

<span class="token comment"># 通过文件名或标准输入配置资源</span>
kubectl apply <span class="token parameter variable">-f</span> <span class="token punctuation">(</span>-k DIRECTORY <span class="token operator">|</span> <span class="token parameter variable">-f</span> FILENAME <span class="token operator">|</span> stdin<span class="token punctuation">)</span>
<span class="token comment"># e.g.</span>
<span class="token comment"># 根据nginx.yaml配置文件创建资源</span>
kubectl apply <span class="token parameter variable">-f</span> nginx.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看资源信息</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 查看集群中某一类型的资源</span>
kubectl get RESOURCE <span class="token punctuation">[</span>-A <span class="token parameter variable">-o</span> wide<span class="token punctuation">]</span>
<span class="token comment"># 其中，RESOURCE可以是以下类型：</span>
kubectl get pods / po         <span class="token comment"># 查看Pod --show-labels</span>
kubectl get services / svc    <span class="token comment"># 查看Service</span>
kubectl get deployment/deploy <span class="token comment"># 查看Deployment</span>
kubectl get replicaset /rs    <span class="token comment"># 查看ReplicaSet</span>
kubectl get cm                <span class="token comment"># 查看ConfigMap</span>
kubectl get secret            <span class="token comment"># 查看Secret</span>
kubectl get ing               <span class="token comment"># 查看Ingress</span>
kubectl get <span class="token function">pv</span>                <span class="token comment"># 查看PersistentVolume</span>
kubectl get pvc               <span class="token comment"># 查看PersistentVolumeClaim</span>
kubectl get ns                <span class="token comment"># 查看Namespace</span>
kubectl get <span class="token function">node</span>              <span class="token comment"># 查看Node</span>
kubectl get all               <span class="token comment"># 查看所有资源</span>

<span class="token comment"># 后面还可以加上 -o wide 参数来查看更多信息</span>
kubectl get pods <span class="token parameter variable">-o</span> wide

<span class="token comment"># 查看某一类型资源的详细信息</span>
kubectl describe RESOURCE NAME
<span class="token comment"># e.g. 查看名字为nginx的Pod的详细信息</span>
kubectl describe pod nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>资源的修改、删除和清理</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 更新某个资源的标签</span>
kubectl label RESOURCE NAME <span class="token assign-left variable">KEY_1</span><span class="token operator">=</span>VALUE_1 <span class="token punctuation">..</span>. <span class="token assign-left variable">KEY_N</span><span class="token operator">=</span>VALUE_N
<span class="token comment"># e.g. 更新名字为nginx的Pod的标签</span>
kubectl label pod nginx <span class="token assign-left variable">app</span><span class="token operator">=</span>nginx

<span class="token comment"># 删除某个资源</span>
kubectl delete RESOURCE NAME
<span class="token comment"># e.g. 删除名字为nginx的Pod</span>
kubectl delete pod nginx
<span class="token comment"># e.g. 删除deployment</span>
kubectl delete deployment nginx-deployment

<span class="token comment"># 删除某个资源的所有实例</span>
kubectl delete RESOURCE <span class="token parameter variable">--all</span>
<span class="token comment"># e.g. 删除所有Pod</span>
kubectl delete pod <span class="token parameter variable">--all</span>

<span class="token comment"># 根据YAML配置文件删除资源</span>
kubectl delete <span class="token parameter variable">-f</span> FILENAME
<span class="token comment"># e.g. 根据nginx.yaml配置文件删除资源</span>
kubectl delete <span class="token parameter variable">-f</span> nginx.yaml

<span class="token comment"># 设置某个资源的副本数</span>
kubectl scale <span class="token parameter variable">--replicas</span><span class="token operator">=</span>COUNT RESOURCE NAME
<span class="token comment"># e.g. 设置名字为nginx的Deployment的副本数为3</span>
kubectl scale <span class="token parameter variable">--replicas</span><span class="token operator">=</span><span class="token number">3</span> deployment/nginx

<span class="token comment"># 根据配置文件或者标准输入替换某个资源</span>
kubectl replace <span class="token parameter variable">-f</span> FILENAME
<span class="token comment"># e.g. 根据nginx.yaml配置文件替换名字为nginx的Deployment</span>
kubectl replace <span class="token parameter variable">-f</span> nginx.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>调试和交互</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 进入某个Pod的容器中</span>
kubectl <span class="token builtin class-name">exec</span> <span class="token punctuation">[</span>-it<span class="token punctuation">]</span> POD <span class="token punctuation">[</span>-c CONTAINER<span class="token punctuation">]</span> -- COMMAND <span class="token punctuation">[</span>args<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
<span class="token comment"># e.g. 进入名字为nginx的Pod的容器中，并执行/bin/bash命令</span>
kubectl <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> nginx -- /bin/bash

<span class="token comment"># 编辑deployment配置文件(不常用) 修改replicas wq保存后更新自动生效不用手动重启</span>
kubectl edit deployment nignx-deployment

<span class="token comment"># 查看某个Pod的日志</span>
kubectl logs <span class="token punctuation">[</span>-f<span class="token punctuation">]</span> <span class="token punctuation">[</span>-p<span class="token punctuation">]</span> <span class="token punctuation">[</span>-c CONTAINER<span class="token punctuation">]</span> POD <span class="token punctuation">[</span>-n NAMESPACE<span class="token punctuation">]</span>
<span class="token comment"># e.g. 查看名字为nginx的Pod的日志</span>
kubectl logs nginx
<span class="token comment"># 查看deployment日志</span>
kubectl logs nignx-deployment

<span class="token comment"># 将某个Pod的端口转发到本地</span>
kubectl port-forward POD <span class="token punctuation">[</span>LOCAL_PORT:<span class="token punctuation">]</span>REMOTE_PORT <span class="token punctuation">[</span><span class="token punctuation">..</span>.<span class="token punctuation">[</span>LOCAL_PORT_N:<span class="token punctuation">]</span>REMOTE_PORT_N<span class="token punctuation">]</span>
<span class="token comment"># e.g. 将名字为nginx的Pod的80端口转发到本地的8080端口</span>
kubectl port-forward nginx <span class="token number">8080</span>:80

<span class="token comment"># 连接到现有的某个Pod（将某个Pod的标准输入输出转发到本地）</span>
kubectl attach POD <span class="token parameter variable">-c</span> CONTAINER
<span class="token comment"># e.g. 将名字为nginx的Pod的标准输入输出转发到本地</span>
kubectl attach nginx

<span class="token comment"># 运行某个Pod的命令</span>
kubectl run NAME <span class="token parameter variable">--image</span><span class="token operator">=</span>image -- COMMAND <span class="token punctuation">[</span>args<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
<span class="token comment"># e.g. 运行名字为nginx的Pod</span>
kubectl run nginx <span class="token parameter variable">--image</span><span class="token operator">=</span>nginx -- /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="endpoints与endpointslice端点切片的作用。使用service和endpointslice接入三方外部应用" tabindex="-1"><a class="header-anchor" href="#endpoints与endpointslice端点切片的作用。使用service和endpointslice接入三方外部应用"><span>Endpoints与Endpointslice端点切⽚的作⽤。使⽤Service和Endpointslice接⼊三⽅外部应⽤</span></a></h2><p>Endpoints用于存储与Service的selector关联的Pod的IP地址和端口信息。为了追踪PodIP变化进⾏负载均衡<br> 在Service创建时根据selector关联⼀个Endpoints资源，如果Service没有定义selector字段，将不会⾃动创建Endpoints。<br> Endpoints是资源对象，存储在etcd中，具有容量限制，如果某个Endpoints资源中端⼝的个数超过1000会被截断。kube-controller-manager[1]的--maxendpoints-per-slice标志设置<br> 在⼤流量场景下，Pod数量不断增多，Endpoints也将变得越⼤。其中⼀个端点发⽣了变更，将会导致整个Endpoints资源更新。Endpoints API局限性变为性能瓶颈。因此1.21+引⼊Endpointslice API，它将Service所有Endpoints分片存储，每个EndpointSlice只包含部分(默认100) Pod的地址和端口信息。提供了可扩展和可伸缩的能⼒。（默认启用）</p><p><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw7783e47ec1f254fc9c50e6a323e66a7a.png" alt="endpoints.png-Endpoints在流量⾼峰时的变化"><br><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwe949c25b8930989d9beb0acd5e2f6201.png" alt="endpointsslices.png-Endpointslices在流量⾼峰时的变化"></p><p>Endpoints场景：有弹性伸缩需求，Pod数量较少，传递资源不会造成⼤量⽹络流量和额外处理。⽆弹性伸缩需求，Pod数量不会太多。哪怕Pod数量是固定，但是总是要滚动更新或者出现故障的。<br> Endpointslice场景:有弹性需求，且Pod数量较多（⼏百上千）。Pod数量很多（⼏百上千），Endpoints⽹络端点超过最⼤数量限制1000</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl get endpoints
kubectl get endpointslice
kubectl describe endpointslice svc-nginx-sgnzf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使⽤Service+Endpointslice屏蔽外部环境细节，接⼊三⽅外部应⽤（如MySQL）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 定义Service，因为MySQL不属于K8S管理范畴，因此⽆法⽤selector进⾏匹配</span>
mkdir/etc/k8s
cat<span class="token operator">&gt;</span>/etc/k8s/svc-mysql.yaml<span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion:v1
#描述对象为Service
kind:Service
#定义Service的名称
metadata:
 name:svc-mysql
#配置细节
spec:
 #通过节点端⼝对外暴露
 type:NodePort
 #端⼝信息
 ports:
  # Service在集群内部对外暴露的端⼝
  - port:8306
  # 容器内程序运行的端⼝
    targetPort:3306
  # 节点对外暴露的端⼝
    nodePort:30001
EOF</span>
kubectl delete svc svc-mysql
kubectl apply <span class="token parameter variable">-f</span> /etc/k8s/svc-mysql.yaml

<span class="token comment"># 定义⼀个Endpointslice，指向外部应⽤，在Endpointlice⼀侧绑定服务名svc-mysql</span>
mkdir/etc/k8s
cat<span class="token operator">&gt;</span>/etc/k8s/svc-mysql-eps.yaml<span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion:discovery.k8s.io/v1
kind:EndpointSlice
metadata:
 name:svc-mysql-eps
 labels:
  kubernetes.io/service-name:svc-mysql
addressType:IPv4
ports:
 - name:&#39;&#39;
   appProtocol:http
   protocol:TCP
   port:3306
endpoints:
 - addresses:
   - &quot;192.168.31.103&quot;
EOF</span>
cd/etc/k8s
kubectl delete endpointslice svc-mysql-eps
kubectl apply <span class="token parameter variable">-f</span> /etc/k8s/svc-mysql-eps.yaml

kubectl get endpointslice
NAME ADDRESS TYPE PORTSENDPOINTS AGE
kubernetes IPv4 <span class="token number">6443</span> <span class="token number">192.168</span>.31.220 6d18h
svc-mysql-eps IPv4 <span class="token number">3306</span> <span class="token number">192.168</span>.31.103 6m50s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ingress与ingress-controller" tabindex="-1"><a class="header-anchor" href="#ingress与ingress-controller"><span>Ingress与Ingress Controller</span></a></h2><ul><li>Ingress是⼀个对象，用于管理集群中服务（Service）的外部访问，可以定义⼊站和出站规则集中管理路由，支持HTTP和HTTPS</li></ul><p>Kubernetes Ingress vs LoadBalancer vs NodePort</p><ul><li>NodePort是Service类型在YAML中的配置。在每个节点上向该服务分配⼀个特定的端⼝，并且对该端⼝上的群集的任何请求都将转发给该服务。缺点是每⼀个NodePort只能绑定⼀个Service，存在端口浪费</li><li>LoadBalancer：将Service设置为LoadBalancer。集群中需要有云提供商提供外部负载均衡器功能。具有可⽤于访问服务的ip地址。每次要向外界公开服务时，都必须创建⼀个新的LoadBalancer并获取ip地址。</li><li>Ingress：与Service完全独⽴的资源。可以将路由规则整合到⼀起。缺点必须配置⼀个Ingress Controller</li></ul><p>Ingress Controller<br> 使用Ingress时必需安装，负责将Ingress规则转化为底层网络配置，是一个部署在集群中的负载均衡器，不随集群⾃动启动。⽬前⽀持和维护AWS、GCE和Nginx Ingress控制器。<br> 其他控制器(非官方)</p><ul><li>AKS应⽤程序⽹关Ingress控制器：配置Azure应⽤程序⽹关的Ingress控制器。</li><li>Apache APISIX Ingress控制器：基于ApacheAPISIX⽹关的Ingress控制器。</li><li>HAProxy Ingress：针对HAProxy的Ingress控制器。</li><li>Istio Ingress：基于Istio的Ingress控制器。</li><li>Kong Ingress控制器：⽤来驱动Kong Gateway的Ingress控制器。</li><li>NGINX Ingress控制器：能够与NGINX⽹⻚ 服务器（作为代理）⼀起使⽤。</li></ul><p>安装部署Ingress-Nginx</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 不是minikube安装ingress</span>
kubectl apply <span class="token parameter variable">-f</span> https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.5.1/deploy/static/provider/baremetal/deploy.yaml
<span class="token comment"># laoqi自动将image: registry.k8s.io/ingress-nginx/controller:v1.5.1@sha256:4ba73c697770664c1e00e9f968de14e08f606ff961c76e5d7033a4a9c593c629</span>
<span class="token comment"># 改为：image: anjia0532/google-containers.ingress-nginx.controller:v1.5.1</span>
kubectl apply <span class="token parameter variable">-f</span> http://manongbiji.oss-cn-beijing.aliyuncs.com/ittailkshow/k8s/download/ingress-nginx-1.5.1.yaml
kubectl delete <span class="token parameter variable">-f</span> http://manongbiji.oss-cn-beijing.aliyuncs.com/ittailkshow/k8s/download/ingress-nginx-1.5.1.yaml
<span class="token comment"># minikube安装ingress插件</span>
minikube addons <span class="token builtin class-name">enable</span> ingress
<span class="token comment"># 查看ingress插件是否enable</span>
minikube addons list
<span class="token comment"># 出现如下状态表示安装成功</span>
kubectl get po <span class="token parameter variable">-A</span>
ingress-nginx   ingress-nginx-admission-create-n8p59        <span class="token number">0</span>/1     Completed   <span class="token number">0</span>          93m
ingress-nginx   ingress-nginx-admission-patch-tc6gf         <span class="token number">0</span>/1     Completed   <span class="token number">0</span>          93m
ingress-nginx   ingress-nginx-controller-66f74646d6-8vd8v   <span class="token number">1</span>/1     Running     <span class="token number">0</span>          55m
<span class="token comment"># 查看端口</span>
kubectl get svc <span class="token parameter variable">-n</span> ingress-nginx
NAME                                 TYPE        CLUSTER-IP     EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>                      AGE
ingress-nginx-controller             NodePort    <span class="token number">10.100</span>.72.74   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">80</span>:31403/TCP,443:31279/TCP   108m
ingress-nginx-controller-admission   ClusterIP   <span class="token number">10.107</span>.1.45    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">443</span>/TCP                      108m
<span class="token comment"># 查看ip</span>
minikube <span class="token function">ip</span>
<span class="token number">192.168</span>.49.2
<span class="token comment"># 测试</span>
minikube <span class="token function">service</span> ingress-nginx-controller <span class="token parameter variable">-n</span> ingress-nginx <span class="token parameter variable">--url</span>
<span class="token function">curl</span> <span class="token number">192.168</span>.49.2:31403
<span class="token comment"># 删除校验（本地环境）</span>
kubectl get validatingwebhookconfigurations
NAME                      WEBHOOKS   AGE
ingress-nginx-admission   <span class="token number">1</span>          76m
kubectl delete <span class="token parameter variable">-A</span> ValidatingWebhookConfiguration ingress-nginx-admission-tengine-controller

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>YAML创建Ingress路由规则<br> rules.host<br> host是完全限定域名。⼊站请求在通过IngressRuleValue处理之前先进⾏host匹配。如果主机未指定，Ingress将根据指定的IngressRuleValue规则路由所有流量。<br> host可以是&quot;通配符&quot;，如&quot;.foo.com&quot;）。通配符&quot;*&quot;必须单独显示为第⼀个DNS标签，并且仅与单个标签匹配。不能单独使⽤通配符作为标签（如Host=&quot;*&quot;）。请求将按以下⽅式与主机字段匹配：<br> 如果host是精确匹配的，则如果http Host标头等于host值，则请求与此规则匹配。<br> 如果host是⽤通配符给出的，那么如果HTTP Host标头与通配符规则的后缀（删除第⼀个标签）相同，则请求与此规则匹配。</li></ul><p>rules.http.paths.pathType<br> pathType：决定如何解释path匹配</p><ul><li>Exact：与URL路径完全匹配。</li><li>Prefix：根据按“/”拆分的URL路径前缀进⾏匹配。按路径元素逐个元素完成。路径元素引⽤的是路径中由“/”分隔符拆分的标签列表。如果每个p都是请求路径p的元素前缀，则请求与路径p匹配。如果路径的最后⼀个元素是请求路径中的最后⼀个元素的⼦字符串，则匹配不成功（例如/foo/bar匹配/foo/bar/baz，但不匹配/foo/barbaz）。</li><li>ImplementationSpecific：路径匹配的解释取决于IngressClass。实现可以将其视为单独的路径类型，也可以将其视为前缀或确切的路径类型。实现需要⽀持所有路径类型。</li></ul><p>rewrite-target</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>mkdir/etc/k8s
cd/etc/k8s
cat<span class="token operator">&gt;</span>svc-apple.yaml<span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: v1
kind: Pod
metadata:
  name: pod-apple
  labels:
    app: apple
spec:
  containers:
    - name: pod-apple
      image: hashicorp/http-echo
      args:
        - &quot;-text=apple&quot;
---
apiVersion: v1
kind: Service
metadata:
  name: svc-apple
spec:
  selector:
    app: apple
  ports:
    - port: 5678 # Default port for image
EOF</span>
kubectl delete <span class="token parameter variable">-f</span> svc-apple.yaml
kubectl apply <span class="token parameter variable">-f</span> svc-apple.yaml

cat<span class="token operator">&gt;</span>svc-banana.yaml<span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: v1
kind: Pod
metadata:
  name: pod-banana
  labels:
    app: banana
spec:
  containers:
    - name: pod-banana
      image: hashicorp/http-echo
      args:
        - &quot;-text=banana&quot;
---
apiVersion: v1
kind: Service
metadata:
  name: svc-banana
spec:
  selector:
    app: banana
  ports:
    - port: 5678 # Default port for image
EOF</span>
kubectl delete <span class="token parameter variable">-f</span> svc-banana.yaml
kubectl apply <span class="token parameter variable">-f</span> svc-banana.yaml

cat<span class="token operator">&gt;</span>ingress-example.yaml<span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ingress-example
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: &quot;/&quot;
spec:
  ingressClassName: nginx
  rules:
    - host: foo.bar.com
      http:
        paths:
          - path: /apple
            pathType: Prefix
            backend:
              service:
                name: svc-apple
                port:
                  number: 5678
          - path: /banana
            pathType: Prefix
            backend:
              service:
                name: svc-banana
                port:
                  number: 5678

EOF</span>
kubectl delete <span class="token parameter variable">-f</span> ingress-example.yaml
kubectl apply <span class="token parameter variable">-f</span> ingress-example.yaml

kubectl get ingress
NAME CLASS HOSTSADDRESS PORTS AGE
ingress-example nginx* <span class="token number">192.168</span>.49.2 <span class="token number">80</span> 8s

kubectl describe ingress ingress-example
Name:ingress-example
Labels:<span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
Namespace:default
Address:192.168.49.2
IngressClass:nginx
Defaultbackend:<span class="token operator">&lt;</span>default<span class="token operator">&gt;</span>
Rules:
HostPathBackends
----------------
*
/applesvc-apple:5678<span class="token punctuation">(</span><span class="token number">172.16</span>.10.74:5678<span class="token punctuation">)</span>
/bananasvc-banana:5678<span class="token punctuation">(</span><span class="token number">172.16</span>.10.75:5678<span class="token punctuation">)</span>
Annotations:ingress.kubernetes.io/rewrite-target:/
Events:
TypeReasonAgeFromMessage
-------------------------
NormalSync57s<span class="token punctuation">(</span>x2over64s<span class="token punctuation">)</span>nginx-ingress-controllerScheduledforsync

kubectl get svc <span class="token parameter variable">-n</span> ingress-nginx
NAME                                 TYPE        CLUSTER-IP      EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>                      AGE
ingress-nginx-controller             NodePort    <span class="token number">10.96</span>.42.20     <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">80</span>:30691/TCP,443:31606/TCP   17m
ingress-nginx-controller-admission   ClusterIP   <span class="token number">10.103</span>.187.67   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">443</span>/TCP                      <span class="token number">17</span>
<span class="token comment"># EXTERNAL-IP none 宿主机不能访问minikube集群，minikube仅学习用</span>

<span class="token comment"># 修改/etc/hosts</span>
<span class="token comment">#localhost name resolution is handled within DNS itself.</span>
<span class="token comment">#127.0.0.1 localhost ::1 localhost</span>
<span class="token number">192.168</span>.49.2 foo.bar.com

<span class="token comment"># 测试</span>
<span class="token function">curl</span> http://foo.bar.com:30691/apple
<span class="token function">curl</span> http://192.168.49.2:30691/apple
<span class="token function">curl</span> http://192.168.49.2:30691/banana
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># (/|$)(.*)表示2组匹配，</span>
<span class="token comment"># 第一组表示/或者结束符，表示匹配 apple 后面要么是 /，要么直接是路径的结尾。</span>
<span class="token comment"># 第二组表示&quot;.&quot;匹配任意单个字符（包括字母、数字、符号等，除了换行符）。&quot;*&quot;表示前面的 . 可以出现零次或多次。</span>
<span class="token comment"># (.*) 捕获了 /apple 或 /apple/ 后的所有内容。如果没有内容（即空字符串），也能匹配。</span>
<span class="token comment"># 总结</span>
<span class="token comment"># 匹配路径必须以 /apple 开头。</span>
<span class="token comment"># 在 apple 之后：</span>
<span class="token comment"># 如果是 / 或路径结束（由 (/|$) 匹配），继续匹配。</span>
<span class="token comment"># 捕获 / 或空字符串。</span>
<span class="token comment"># 捕获剩余路径的内容（.*）。</span>
<span class="token comment"># foo.bar.com/apple/abc请求会被派发到svc-apple:5678/abc</span>
<span class="token comment"># foo.bar.com/banana/bcd请求会被派发到svc-banana:5678/bcd</span>
mkdir/etc/k8s
cd/etc/k8s
cat<span class="token operator">&gt;</span>ingress-example.yaml<span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion:networking.k8s.io/v1
kind:Ingress
metadata:
  name:ingress-example
annotations:
  #直接映射⾄根路径
  ingress.kubernetes.io/rewrite-target:/$2
spec:
  ingressClassName:nginx
rules:
  - host:foo.bar.com
    http:
      paths:
        - path:/apple(/|$)(.*)
          pathType:Prefix
          backend:
          service:
          name:svc-apple
          port:
            number:5678
        - path:/banana(/|$)(.*)
          pathType:Prefix
          backend:
          service:
          name:svc-banana
          port:
            number:5678
EOF</span>
kubectl delete <span class="token parameter variable">-f</span> ingress-example.yaml
kubectl apply <span class="token parameter variable">-f</span> ingress-example.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ingress与Ingress-controller如何结合的？</p>`,41),U={href:"http://ingressclass.kubernetes.io/is-default-class%E6%B3%A8%E8%A7%A3%E5%8F%AF%E4%BB%A5%E2%BD%A4%E6%9D%A5%E6%A0%87%E6%98%8E%E2%BC%80%E4%B8%AAIngressClass%E5%BA%94%E8%AF%A5%E8%A2%AB%E8%A7%86%E4%B8%BA%E9%BB%98%E8%AE%A4%E7%9A%84Ingress%E7%B1%BB%E3%80%82%E5%BD%93%E6%9F%90%E4%B8%AAIngressClass%E8%B5%84%E6%BA%90%E5%B0%86%E6%AD%A4%E6%B3%A8%E8%A7%A3%E8%AE%BE%E7%BD%AE%E4%B8%BAtrue%E6%97%B6%EF%BC%8C%E6%B2%A1%E6%9C%89%E6%8C%87%E5%AE%9A%E7%B1%BB%E7%9A%84%E6%96%B0Ingress%E8%B5%84%E6%BA%90%E5%B0%86%E8%A2%AB%E5%88%86%E9%85%8D%E5%88%B0%E6%AD%A4%E9%BB%98%E8%AE%A4%E7%B1%BB%E3%80%82",target:"_blank",rel:"noopener noreferrer"},j=n("li",null,[e("参考安装nginx-Ingress-Controller的yaml文件"),n("br"),e(" IngressClass.spec.controller指的是应该处理这个类的控制器的名称。"),n("br"),e(" IngressClass.metadata.name指的是当前ingressClass定义的名字"),n("br"),e(" Deployment.spec.template.spec.args"),n("br"),e(" --controller-class：IngressClass.spec.controller值应与此处指定的值相同，以使该对象受到监视。"),n("br"),e(' --ingress-class：与IngressClass.metadata.name相同，形成绑定关系，如果不写默认值为"nginx"'),n("br"),e(" 本质就是修改Ingress-nginx-controllerPod中的nginx.conf⽂件完成请求转发与路由")],-1),Y=i(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Ingress配置文件指定了ingressClassName: nginx</span>
<span class="token comment"># k8s找到对应的ingressClass</span>
kubectl get ingressclass
NAME CONTROLLER PARAMETERS AGE
nginx k8s.io/ingress-nginx <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span> 20h

kubectl describe ingressclass
Name: nginx
Labels: app.kubernetes.io/component<span class="token operator">=</span>controller
 app.kubernetes.io/instance<span class="token operator">=</span>ingress-nginx
 app.kubernetes.io/name<span class="token operator">=</span>ingress-nginx
 app.kubernetes.io/part-of<span class="token operator">=</span>ingress-nginx
 app.kubernetes.io/version<span class="token operator">=</span><span class="token number">1.5</span>.1
Annotations: <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
Controller: k8s.io/ingress-nginx
Events: <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>

<span class="token comment"># 通过关键参数Name与Controller确定匹配的Deployment</span>
kubectl get deployment <span class="token parameter variable">-A</span>
NAMESPACE NAME READY UP-TO-DATE AVAILABLE AGE
ingress-nginx ingress-nginx-controller <span class="token number">1</span>/1 <span class="token number">1</span> <span class="token number">1</span> 20h

kubectl describe deploy ingress-nginx <span class="token parameter variable">-n</span> ingress-nginx

<span class="token function">curl</span> https://manongbiji.oss-cn-beijing.aliyuncs.com/ittailkshow/k8s/download/ingress-nginx-1.5.1.yaml
<span class="token punctuation">..</span>.
apiVersion:apps/v1
kind:Deployment
metadata:
labels:
app.kubernetes.io/component:controller
app.kubernetes.io/instance:ingress-nginx
app.kubernetes.io/name:ingress-nginx
app.kubernetes.io/part-of:ingress-nginx
app.kubernetes.io/version:1.5.1
name:ingress-nginx-controller
namespace:ingress-nginx
spec:
minReadySeconds:0
revisionHistoryLimit:10
selector:
matchLabels:
app.kubernetes.io/component:controller
app.kubernetes.io/instance:ingress-nginx
app.kubernetes.io/name:ingress-nginx
template:
metadata:
labels:
app.kubernetes.io/component:controller
app.kubernetes.io/instance:ingress-nginx
app.kubernetes.io/name:ingress-nginx
spec:
containers:
-args:
-/nginx-ingress-controller
---election-id<span class="token operator">=</span>ingress-nginx-leader
---controller-class<span class="token operator">=</span>k8s.io/ingress-nginx
---ingress-class<span class="token operator">=</span>nginx
---configmap<span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>POD_NAMESPACE<span class="token variable">)</span></span>/ingress-nginx-controller
---validating-webhook<span class="token operator">=</span>:8443
---validating-webhook-certificate<span class="token operator">=</span>/usr/local/certificates/cert
---validating-webhook-key<span class="token operator">=</span>/usr/local/certificates/key
env:
<span class="token punctuation">..</span>.
---
apiVersion:networking.k8s.io/v1
kind:IngressClass
metadata:
  labels:
    app.kubernetes.io/component:controller
    app.kubernetes.io/instance:ingress-nginx
    app.kubernetes.io/name:ingress-nginx
    app.kubernetes.io/part-of:ingress-nginx
    app.kubernetes.io/version:1.5.1
name:nginx
spec:
  controller:k8s.io/ingress-nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="隔离机制之namespaces命名空间-dns" tabindex="-1"><a class="header-anchor" href="#隔离机制之namespaces命名空间-dns"><span>隔离机制之Namespaces命名空间，DNS</span></a></h2><p>命名空间是⼀种在多个⽤户之间划分集群资源的⽅法(通过资源配额)。资源名称需要在命名空间内唯⼀，但不能跨命名空间。命名空间不能彼此嵌套，并且每个Kubernetes资源只能⾪属于某⼀个命名空间。基于names的作⽤域仅适⽤于命名空间的对象(Deployments、Services等)，<br> 不适⽤于群集对象(例如：storageClass、Nodes、PersistentVolumes等)<br> 在在许多⽤户分布在多个团队或项⽬中的环境中使⽤。<br> 不必使⽤多个命名空间来分隔略有不同的资源，例如同⼀软件的不同版本：正确的做法是使⽤标签（label）来区分同⼀命名空间内的资源。<br> 注意:对于⽣产集群，请考虑不使⽤default命名空间。应当使⽤指定的命名空间进⾏资源分配。</p><p>四个内置命名空间<br> default：默认，以便⽤新集群，⽽⽆需先创建命名空间<br> kube-node-lease：节点租约命名空间，保存与每个节点关联的租约对象。节点租赁允许kubelet发送⼼跳，以便控制平⾯可以检测到节点故障<br> kube-public：可被所有客户端(包括未经身份验证的客户端)读取。如果某些资源应该在整个集群中公开可⻅和可读<br> kube-system：由Kubernetes系统创建的对象的命名空间</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 查看现有的命名空间</span>
kubectl get namespace
NAMES TATUS AGE
default Active 11d
kube-node-lease Active 11d
kube-public Active 11d
kube-system Active 11d

<span class="token comment"># 为当前请求（命令）设置命名空间，--namespace与-n等价</span>
kubectl run nginx--image<span class="token operator">=</span>nginx--namespace<span class="token operator">=</span>default
kubectl get pods <span class="token parameter variable">-n</span> kube-system

<span class="token comment"># 创建新命名空间</span>
cat<span class="token operator">&gt;</span>newnamespace.yml<span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion:v1
kind:Namespace
metadata:
  labels:
    app.kubernetes.io/instance:ingress-nginx
    app.kubernetes.io/name:ingress-nginx
  name:ingress-nginx
EOF</span>
kubectl apply <span class="token parameter variable">-f</span> newnamespace.yml
<span class="token comment"># 或者</span>
kubectl create namespace my-namespace
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命名空间and DNS<br> 创建服务时，它会创建相应的DNS条⽬。如果容器只⽤<code>&lt;service-name&gt;</code>,它将解析为命名空间本地的服务。对于跨多个命名空间(例如开发，暂存和⽣产)使⽤相同的配置很有⽤。如果要跨越命名空间，则需要使⽤完限定名(FQDN)。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">&lt;</span>service-name<span class="token operator">&gt;</span>.<span class="token operator">&lt;</span>namespace<span class="token operator">&gt;</span>.svc.cluster.local
例⼦
svc-apple.default.svc.cluster.local
svc-apple.dev.svc.cluster.local

<span class="token comment"># 哪些对象可以⽤命名空间切分</span>
kubectl api-resources <span class="token parameter variable">--namespaced</span><span class="token operator">=</span>true
<span class="token comment">#哪些对象不可以⽤命名空间切分</span>
kubectl api-resources <span class="token parameter variable">--namespaced</span><span class="token operator">=</span>false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="statefulset-有状态集-与deployment-无状态部署-区别、statefulset的无头服务headless-services及作用-注意事项-更新策略" tabindex="-1"><a class="header-anchor" href="#statefulset-有状态集-与deployment-无状态部署-区别、statefulset的无头服务headless-services及作用-注意事项-更新策略"><span>StatefulSet（有状态集）与Deployment（⽆状态部署）区别、StatefulSet的⽆头服务Headless Services及作⽤，注意事项，更新策略</span></a></h2><ul><li>StatefulSet是⽤来管理有状态应⽤的⼯作负载API对象。管理基于相同容器规约的⼀组Pod集合的部署和扩缩，并为这些Pod提供持久存储和持久标识符。为每个Pod维护永久不变的ID。不能相互替换：⽆论怎么调度，</li><li>如果希望使⽤存储卷为⼯作负载提供持久存储，可以⽤StatefulSet。尽管StatefulSet中的单个Pod仍可能出现故障，但持久的Pod标识符使得将现有卷与替换已失败Pod的新Pod相匹配变得更加容易。</li><li>Deployment部署的⽆状态Pod，Name是随机产⽣的</li><li>StatefulSet创建的有状态Pod，Pod是有序创建的</li><li>StatefulSet对于需要满⾜以下⼀个或多个需求的应⽤程序很有价值：<br> 稳定的、唯⼀的⽹络标识符。<br> 稳定的、持久的存储。<br> 有序的、优雅的部署和扩缩。<br> 有序的、⾃动的滚动更新。<br> 稳定是指Pod调度或重调度的过程是持久性的。如果应⽤程序不需要任何稳定的标识符或有序的部署、删除或扩缩，则应该使⽤由⼀组⽆状态的副本控制器提供的⼯作负载来部署应⽤程序，⽐如Deployment或者ReplicaSet</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> /etc/k8s
<span class="token function">cat</span> <span class="token operator">&gt;</span> ss-nginx.yaml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
# Headless Service
apiVersion: v1
kind: Service
metadata:
  name: hsvc-nginx
spec:
  selector:
    app: nginx
  ports:
    - port: 8000
  clusterIP: None
---
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: ss-nginx
spec:
  serviceName: hsvc-nginx
  selector:
    matchLabels:
      app: nginx
  replicas: 2
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
        - name: container-nginx
          image: nginx:1.20.2-alpine
          ports:
            - containerPort: 80

EOF</span>
kubectl delete <span class="token parameter variable">-f</span> ss-nginx.yaml
kubectl apply <span class="token parameter variable">-f</span> ss-nginx.yaml

kubectl get statefulset
NAME READY AGE
ss-nginx <span class="token number">2</span>/2 33m

kubectl get pods
NAME READY STATUS RESTARTS AGE
ss-nginx-0 <span class="token number">1</span>/1 Running <span class="token number">0</span> 107s
ss-nginx-1 <span class="token number">1</span>/1 Running <span class="token number">0</span> 106s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>不需要负载均衡、单独的ServiceIP。可以指定ClusterIP（spec.clusterIP）的值为&quot;None&quot;来创建HeadlessService。</li><li>⽆头Service可以与其他服务发现机制进⾏接⼝，⽽不必与Kubernetes的实现捆绑在⼀起。</li><li>⽆头Services不会分配ClusterIP，kube-proxy不会处理，平台也不会进⾏负载均衡和路由。DNS实现⾃动配置依赖于Service是否定义了选择算符。</li><li>定义了选择算符的⽆头服务，控制平⾯在API中创建EndpointSlice对象，并且修改DNS配置返回A或AAA条记录（IPv4、6地址），通过这个地址直接到达Service的后端Pod上。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 跟上面声明一样，curl地址参考命名空间</span>
kubectl <span class="token builtin class-name">exec</span> <span class="token parameter variable">--stdin</span> <span class="token parameter variable">--tty</span> ss-nginx-0 -- <span class="token function">sh</span>
/<span class="token comment"># curl ss-nginx-1.hsvc-nginx.default.svc.cluster.local</span>
<span class="token operator">&lt;</span><span class="token operator">!</span>DOCTYPEhtml<span class="token operator">&gt;</span> <span class="token punctuation">..</span>.
<span class="token comment"># 因为ss-nginx-0与ss-nginx-1在同⼀命名空间下，因此后半部分可以省去的。如果需要访问别的命名空间下后缀必须加上</span>
/<span class="token comment"># curl ss-nginx-1.hsvc-nginx</span>
<span class="token operator">&lt;</span><span class="token operator">!</span>DOCTYPEhtml<span class="token operator">&gt;</span> <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>StatefulSet注意事项,限制</p><ul><li>对于包含N个副本的StatefulSet，部署Pod时按顺序0..N-1创建，删除Pod时逆序N-1..0。</li><li>在将扩缩操作应⽤到Pod之前，前⾯所有Pod必须是Running和Ready状态。Pod终⽌之前，所有的继任者必须完全关闭。</li><li>StatefulSet不应将pod.Spec.TerminationGracePeriodSeconds设置为0。不安全，解释参考强制删除StatefulSet Pod<br> terminationGracePeriodSeconds(int64)可选字段，表示Pod优雅终⽌时⻓（单位秒）。值必须是⾮负整数。0表示收到kill信号则⽴即停⽌。为nil将⽤默认宽限期。<br> 是从Pod中运⾏的进程收到终⽌信号后，到进程被kill信号强制停⽌之前，Pod可以继续存在的时间。应该设置为⽐进程的预期清理时间更⻓。默认30</li><li>给定Pod的存储由PersistentVolume Provisioner基于storageclass来制备，或者由管理员预先制备。</li><li>为了保证数据安全。删除或者扩缩StatefulSet并不会删除它关联的存储卷。</li><li>StatefulSet需要⽆头服务来负责Pod的⽹络标识。</li><li>为了实现StatefulSet中的Pod可以有序且体⾯地终⽌，可以在删除之前将StatefulSet缩容到0。</li><li>在默认Pod管理策略(OrderedReady)时使⽤滚动更新，可能进⼊需要⼈⼯⼲预才能修复的损坏状态。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>apiVersion:apps/v1
kind:StatefulSet
metadata:
  name:web
spec:
  <span class="token punctuation">..</span>.
  template:
    metadata:
      labels:
        app:nginx
    spec:
      terminationGracePeriodSeconds:10

kubectl scale sts ss-nginx--replicas<span class="token operator">=</span><span class="token number">0</span>
kubectl delete sts ss-nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更新策略</p><ul><li>StatefulSet的.spec.updateStrategy字段可以配置和禁⽤掉⾃动滚动更新Pod的容器、标签、资源请求或限制、以及注解。<br> OnDelete：⼿动删除Pod让控制器创建新Pod<br> RollingUpdate（默认）控制器⾃动的滚动更新pod</li><li>StatefulSet的.spec.updateStrategy.rollingUpdate.partition的可以实现分区更新。</li><li>如果声明了⼀个分区，当StatefulSet的.spec.template被更新时，所有序号⼤于等于该分区序号的Pod都会被更新。⼩于则不更新，并且即使被删除也会依据旧版本重建。</li><li>如果StatefulSet的.spec.updateStrategy.rollingUpdate.partition⼤于它的.spec.replicas，则对它的.spec.template的更新将不会传递到它的Pod。</li><li>在阶段更新、执⾏⾦丝雀或执⾏分阶段上线时分区时有⽤</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>apiVersion: apps/v1
kind: StatefulSet
metadata:
 name: web
spec:
 updateStrategy:
  rollingUpdate:
  partition: <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="利用volume卷实现pod数据持久化与资源共享-利用pv与pvc实现存储解耦-pv、pvc的绑定与访问模式-如何正确删除pv与pvc-利用statefulset为每一个pod分配独立存储" tabindex="-1"><a class="header-anchor" href="#利用volume卷实现pod数据持久化与资源共享-利用pv与pvc实现存储解耦-pv、pvc的绑定与访问模式-如何正确删除pv与pvc-利用statefulset为每一个pod分配独立存储"><span>利⽤Volume卷实现Pod数据持久化与资源共享，利用PV与PVC实现存储解耦，PV、PVC的绑定与访问模式，如何正确删除PV与PVC，利⽤StatefulSet为每⼀个Pod分配独⽴存储</span></a></h2><p>Volume的作⽤</p><ul><li>设置配置⽂件替代容器内的默认配置</li><li>将容器内产⽣的数据保存到容器外预防丢失</li></ul><p>单独使用Volume的弊端</p><ul><li>存储接口与实现严重耦合，并没有职责分离</li><li>Volume卷并没有被K8S有效管理</li><li>数据迁移难</li><li>无法进行更细粒度的控制，如（大小、是否只能被单个Pod挂载、读写控制级别）</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> some-nginx <span class="token parameter variable">-v</span> /some/content:/usr/share/nginx/html:ro <span class="token parameter variable">-d</span> nginx
<span class="token comment"># 或者docker file</span>
FROM nginx
COPY static-html-directory /usr/share/nginx/htm1

<span class="token comment"># node0节点新建⽬录与HTML</span>
<span class="token function">rm</span> <span class="token parameter variable">-f</span> /usr/local/share/logs/ng0
<span class="token function">rm</span> <span class="token parameter variable">-f</span> /usr/local/share/logs/ng1
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/local/share/html
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /usr/local/share/html
cat<span class="token operator">&gt;</span> /usr/local/share/html/test.html<span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
&lt;h1&gt;I&#39;m test page!&lt;/h1&gt;
EOF</span>

<span class="token comment"># master节点创建pod-nginx并挂载volume</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> pod-nginx.yaml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: v1
kind: Pod
metadata:
  name: pod-nginx-0
spec:
  # nodeName: node0
  containers:
    - name: ng0
      image: nginx:1.20.2-alpine
      ports:
        - containerPort: 80
          hostPort: 8000
      volumeMounts:
        - name: vol-html
          mountPath: /usr/share/nginx/html
        - name: vol-logs
          mountPath: /var/log/nginx
  volumes:
    - name: vol-html
      hostPath:
        path: /usr/local/share/html
        type: Directory
    - name: vol-logs
      hostPath:
        path: /usr/local/share/logs/ng0
        type: Directory
EOF</span>

kubectl delete <span class="token parameter variable">-f</span> pod-nginx.yaml
kubectl apply <span class="token parameter variable">-f</span> pod-nginx.yaml

<span class="token function">curl</span> <span class="token number">192.168</span>.49.2:8000/test.html
<span class="token operator">&lt;</span>h<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>I&#39;m <span class="token builtin class-name">test</span> page<span class="token operator">!</span><span class="token operator">&lt;</span>/h<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用PV（实现）与PVC（接口）实现存储解耦</p><ul><li>PersistentVolume是集群中的一块存储，由管理员配置或使用StorageClass动态配置。记录了存储的实现细节，无论其背后是NFS、iSCSI还是特定于云平台的存储系统。PV持久卷和普通的Volume都用卷插件实现。PV拥有独立于任何使用PV的Pod的生命周期。</li><li>PersistentVolumeClaim(PVC)是用户对存储的请求。类似Pod。Pod消耗Node节点资源，PVC消耗PV资源。Pod请求特定级别的资源(CPU和内存)、PVC请求特定的存储空间尺寸和访问模式</li><li>在pvc绑定pv时根据存储大小和访问模式来绑定</li></ul><p>pv的访问模式accessModes<br> ReadWriteOnce（RWO）：Volume可以被⼀个Node以读写⽅式挂载。允许运⾏在同⼀Node上的多个Pod访问PV。<br> ReadOnlyMany（ROM）：Volume可以被多个Node以只读⽅式挂载。<br> ReadWriteMany（RWM）：Volume可以被多个Node同时读写<br> ReadWriteOncePod（RWOP）:Volume可以被单个Pod以读写⽅式挂载。<br> 如果你想确保整个集群中只有⼀个Pod可以读取或写⼊该PVC，请使⽤ReadWriteOncePod访问模式。只⽀持CSI卷以及需要Kubernetes1.22+</p><p>PV与PVC中AccessModes的区别<br> PV设置AccessModes代表该PV能够提供的存储能⼒<br> PVC设置AccessModes代表访问者（程序）需要PV提供的存储能⼒</p><p><strong>PV中出现的AccessModes必须完全包含PVC的AccessModes才可以正常绑定，否则就会出现Pending阻塞</strong><br> K8s⽤AccessModes匹配PersistentVolumeClaim和PersistentVolume。在某些场合下，Access Modes会限制PersistentVolume是否可以被挂载。AccessModes并不会在存储已经被挂载的情况下为其实施写保护。即使访问模式设置为ReadWriteOnce、ReadOnlyMany或ReadWriteMany，它们也不会对Volumes形成限制。例如，即使某个PV创建时设置为ReadOnlyMany，也⽆法保证该Volume是只读的。如果访问模式设置为ReadWriteOncePod，则Volume会被限制起来并且只能挂载到⼀个Pod上。<br> 每个Volume同⼀时刻只能以⼀种访问模式挂载，即使Volume⽀持多种访问模式。例如，GCE PersistentDisk Volume可以被某节点以ReadWriteOnce模式挂载，或者被多个节点以ReadOnlyMany模式挂载，但不可以同时以两种模式挂载</p><figure><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwd121c70aa3ac061d168963d566b41a34.png" alt="pvac.png" tabindex="0"><figcaption>pvac.png</figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 主节点上</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> nfs-utils rpcbind
systemctl <span class="token builtin class-name">enable</span> nfs
<span class="token function">rm</span> <span class="token parameter variable">-f</span> /var/pv/mysql
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /var/pv/mysql
<span class="token function">chmod</span> <span class="token number">755</span> /var/pv/mysql

<span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/exports <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
/var/pv/mysql  *(rw,async,no_root_squash)
EOF</span>

systemctl restart rpcbind
systemctl <span class="token builtin class-name">enable</span> rpcbind
systemctl restart nfs
systemctl <span class="token builtin class-name">enable</span> nfs

showmount <span class="token parameter variable">-e</span> <span class="token number">192.168</span>.1.184
Export list <span class="token keyword">for</span> <span class="token number">192.168</span>.1.184:
/var/pv/mysql *

<span class="token function">mkdir</span> /etc/k8s
<span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/k8s/pv-mysql.yaml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: v1
kind: PersistentVolume
metadata:
    name: pv-mysql
spec:
    capacity:
        storage: 10Gi
    accessModes:
        - ReadWriteOnce
    storageClassName: pv-mysql
    persistentVolumeReclaimPolicy: Recycle
    nfs:
        path: /var/pv/mysql
        server: 192.168.1.184
EOF</span>
kubectl delete <span class="token parameter variable">-f</span> /etc/k8s/pv-mysql.yaml 
kubectl apply <span class="token parameter variable">-f</span> /etc/k8s/pv-mysql.yaml 

kubectl get <span class="token function">pv</span> <span class="token parameter variable">-o</span> wide
NAME       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS      CLAIM   STORAGECLASS   REASON   AGE     VOLUMEMODE
pv-mysql   10Gi       RWO            Recycle          Available           pv-mysql                2m23s   Filesystem

<span class="token comment"># 查看细节</span>
kubectl describe <span class="token function">pv</span> pv-mysql

<span class="token comment"># 创建pvc</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/k8s/pvc-mysql.yaml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
    name: pvc-mysql
    namespace: default
spec:
    storageClassName: pv-mysql
    accessModes:
        - ReadWriteOnce
    resources:
        requests:
            storage: 10Gi
EOF</span>
kubectl delete <span class="token parameter variable">-f</span> /etc/k8s/pvc-mysql.yaml 
kubectl apply <span class="token parameter variable">-f</span> /etc/k8s/pvc-mysql.yaml 

kubectl get pvc <span class="token parameter variable">-o</span> wide
NAME        STATUS   VOLUME     CAPACITY   ACCESS MODES   STORAGECLASS   AGE   VOLUMEMODE
pvc-mysql   Bound    pv-mysql   10Gi       RWO            pv-mysql       10s   Filesystem

kubectl get <span class="token function">pv</span>
NAME       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM               STORAGECLASS   REASON   AGE
pv-mysql   10Gi       RWO            Recycle          Bound    default/pvc-mysql   pv-mysql                10m

kubectl describe pvc pvc-mysql
Name:          pvc-mysql
Namespace:     default
StorageClass:  pv-mysql
Status:        Bound
Volume:        pv-mysql
Labels:        <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
Annotations:   pv.kubernetes.io/bind-completed: <span class="token function">yes</span>
               pv.kubernetes.io/bound-by-controller: <span class="token function">yes</span>
Finalizers:    <span class="token punctuation">[</span>kubernetes.io/pvc-protection<span class="token punctuation">]</span>
Capacity:      10Gi
Access Modes:  RWO
VolumeMode:    Filesystem
Used By:       <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
Events:        <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>

<span class="token comment"># 创建mysql实例</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/k8s/deploy-mysql.yml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: apps/v1
kind: Deployment
metadata:
  name: deploy-mysql
spec:
  replicas: 1 # pod数量
  selector:
    matchLabels:
      app: mysql
  template:
    metadata:
      labels:
        app: mysql
    spec:
      containers:
        - name: mysql
          image: mysql:8
          imagePullPolicy: IfNotPresent
          ports:
            - containerPort: 3306
          env:
            - name: MYSQL_ROOT_PASSWORD
              value: &quot;123456&quot;
          volumeMounts:
            - name: mysql-data
              mountPath: /var/lib/mysql
      volumes:
        - name: mysql-data
          persistentVolumeClaim:
            claimName: pvc-mysql
EOF</span>
kubectl delete <span class="token parameter variable">-f</span> /etc/k8s/deploy-mysql.yml
kubectl apply <span class="token parameter variable">-f</span> /etc/k8s/deploy-mysql.yml

kubectl get deploy <span class="token parameter variable">-o</span> wide
NAME           READY   UP-TO-DATE   AVAILABLE   AGE     CONTAINERS   IMAGES    SELECTOR
deploy-mysql   <span class="token number">1</span>/1     <span class="token number">1</span>            <span class="token number">1</span>           3m58s   mysql        mysql:8   <span class="token assign-left variable">app</span><span class="token operator">=</span>mysql

kubectl get <span class="token function">pv</span> <span class="token parameter variable">-o</span> wide
NAME       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM               STORAGECLASS   REASON   AGE   VOLUMEMODE
pv-mysql   10Gi       RWO            Recycle          Bound    default/pvc-mysql   pv-mysql                27m   Filesystem

kubectl get pvc <span class="token parameter variable">-o</span> wide
NAME        STATUS   VOLUME     CAPACITY   ACCESS MODES   STORAGECLASS   AGE   VOLUMEMODE
pvc-mysql   Bound    pv-mysql   10Gi       RWO            pv-mysql       24m   Filesystem

kubectl describe pvc pvc-mysql
Name:          pvc-mysql
Namespace:     default
StorageClass:  pv-mysql
Status:        Bound
Volume:        pv-mysql
Labels:        <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
Annotations:   pv.kubernetes.io/bind-completed: <span class="token function">yes</span>
               pv.kubernetes.io/bound-by-controller: <span class="token function">yes</span>
Finalizers:    <span class="token punctuation">[</span>kubernetes.io/pvc-protection<span class="token punctuation">]</span>
Capacity:      10Gi
Access Modes:  RWO
VolumeMode:    Filesystem
Used By:       deploy-mysql-85dddbc486-cvd5r <span class="token operator">&lt;=</span>已绑定Pod
Events:        <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>

<span class="token comment"># 工作节点</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> nfs-utils
<span class="token comment"># 查看主节点挂载</span>
showmount <span class="token parameter variable">-e</span> <span class="token number">192.168</span>.1.184
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正确删除PV与PVC<br> 删除顺序deploy-&gt;pvc-&gt;pv<br> persistentVolumeReclaimPolicy-PV回收策略</p><ul><li><p>Retain需⼿动删除。当PVC对象被删除时，PV仍保留数据，状态变为为&quot;已释放（released）&quot;且不能被其他PVC绑定，删除PV后数据仍保留<br> 手动回收PV步骤<br> 1.删除PV对象。与之相关的、位于外部基础设施中的存储资产（例如AWSEBS、阿⾥云OSS、AzureDisk等）在PV删除之后仍然存在<br> 2.⼿动清除所关联的存储资产上的数据<br> 3.⼿动删除所关联的存储资产<br> 重⽤该存储资产可以基于存储资产的定义创建新PV对象</p></li><li><p>Delete，删除时将PV对象从K8s中移除，同时会从外部基础设施（例如AWSEBS、阿⾥云OSS、AzureDisk等）中移除所关联的存储资产。动态PV会继承其StorageClass中设置的回收策略，默认Delete。管理员需要根据⽤户配置StorageClass；<br> Delete只删除存储设施上的Volume等信息，但不删除⽂件，因为NFS不⽀持Delete，所以Faild报错：“error getting deleter volume plugin for volume &quot;pv-mysql&quot;:no deletable volume plugin matched”</p></li><li><p>Recycle（回收）已被废弃。<br> 如果下层的PV⽀持，会在PV上执⾏⼀些基本的删除命令（rm-rf/thevolume/*）操作删除数据，之后允许该PV⽤于新的PVC申领。<br> NFS和HostPath⽀持回收（Recycle）。AWSEBS、GCEPD、AzureDisk和Cinder卷都⽀持删除（Delete）。</p></li></ul><p>Provisioner与StorageClass<br> StorageClass存储类：⾃动创建PV的机制，创建PV的模板。</p><p>Provisioner制备器：真正提供数据存储能⼒的应⽤程序，前⾯为了Node节点可以访问Master的NFS⽬录/var/pv/mysql，在每台Node上都安装NFS-Client提供⽹络传输功能，本质上NFSClient就是Provisioner，在⼤规模K8S集群下，通常Provisioner都是通过K8S以Pod形式⾃动部署的。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/pv/mysql/*
<span class="token function">mkdir</span> /etc/k8s
<span class="token builtin class-name">cd</span> /etc/k8s
<span class="token function">cat</span> <span class="token operator">&gt;</span> nfs-client-provisioner.yaml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: v1
kind: ServiceAccount
metadata:
  name: nfs-client-provisioner
  namespace: default
---
kind: ClusterRole
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  name: nfs-client-provisioner-runner
rules:
  - apiGroups: [&quot;&quot;]
    resources: [&quot;nodes&quot;]
    verbs: [&quot;get&quot;, &quot;list&quot;, &quot;watch&quot;]
  - apiGroups: [&quot;&quot;]
    resources: [&quot;persistentvolumes&quot;]
    verbs: [&quot;get&quot;, &quot;list&quot;, &quot;watch&quot;, &quot;create&quot;, &quot;delete&quot;]
  - apiGroups: [&quot;&quot;]
    resources: [&quot;persistentvolumeclaims&quot;]
    verbs: [&quot;get&quot;, &quot;list&quot;, &quot;watch&quot;, &quot;update&quot;]
  - apiGroups: [&quot;storage.k8s.io&quot;]
    resources: [&quot;storageclasses&quot;]
    verbs: [&quot;get&quot;, &quot;list&quot;, &quot;watch&quot;]
  - apiGroups: [&quot;&quot;]
    resources: [&quot;events&quot;]
    verbs: [&quot;create&quot;, &quot;update&quot;, &quot;patch&quot;]
---
kind: ClusterRoleBinding
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  name: run-nfs-client-provisioner
subjects:
  - kind: ServiceAccount
    name: nfs-client-provisioner
    namespace: default
roleRef:
  kind: ClusterRole
  name: nfs-client-provisioner-runner
  apiGroup: rbac.authorization.k8s.io
---
kind: Role
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  name: leader-locking-nfs-client-provisioner
  namespace: default
rules:
  - apiGroups: [&quot;&quot;]
    resources: [&quot;endpoints&quot;]
    verbs: [&quot;get&quot;, &quot;list&quot;, &quot;watch&quot;, &quot;create&quot;, &quot;update&quot;, &quot;patch&quot;]
---
kind: RoleBinding
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  name: leader-locking-nfs-client-provisioner
  namespace: default
subjects:
  - kind: ServiceAccount
    name: nfs-client-provisioner
    namespace: default
roleRef:
  kind: Role
  name: leader-locking-nfs-client-provisioner
  apiGroup: rbac.authorization.k8s.io
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nfs-client-provisioner
  namespace: default
  labels:
    app: nfs-client-provisioner
spec:
  replicas: 1
  strategy:
    type: Recreate
  selector:
    matchLabels:
      app: nfs-client-provisioner
  template:
    metadata:
      labels:
        app: nfs-client-provisioner
    spec:
      serviceAccountName: nfs-client-provisioner
      containers:
        - name: nfs-client-provisioner
          image: dyrnq/nfs-subdir-external-provisioner:v4.0.2
          volumeMounts:
            - name: nfs-client-root
              mountPath: /persistentvolumes
          env:
            - name: PROVISIONER_NAME
              value: k8s-sigs.io/nfs-subdir-external-provisioner
            - name: NFS_SERVER
              value: 192.168.1.184
            - name: NFS_PATH
              value: /var/pv/mysql
      volumes:
        - name: nfs-client-root
          nfs:
            server: 192.168.1.184
            path: /var/pv/mysql/
---
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: managed-nfs-storage
  annotations:
    storageclass.kubernetes.io/is-default-class: &quot;false&quot;
provisioner: k8s-sigs.io/nfs-subdir-external-provisioner
parameters:
  pathPattern: &quot;&quot;
  archiveOnDelete: &quot;false&quot;
mountOptions:
  - hard
  - nfsvers=4
EOF</span>
kubectl delete <span class="token parameter variable">-f</span> nfs-client-provisioner.yaml
kubectl apply <span class="token parameter variable">-f</span> nfs-client-provisioner.yaml

kubectl get po
NAME READY STATUS RESTARTS AGE
nfs-client-provisioner-54648b788b-hwpvx <span class="token number">1</span>/1 Running <span class="token number">0</span> 49s
kubectl get sc
NAME PROVISIONER RECLAIM
POLICY VOLUME BINDINGMODE ALLOWVOLUMEEXPANSION AGE
managed-nfs-storage k8s-sigs.io/nfs-subdir-external-provisioner Delete Immediate <span class="token boolean">false</span> 55s

<span class="token comment"># ⾃定义StorageClass后边不需要⼿动创建PV，在创建PVC时会⾃动根据StorageClass描述创建PV</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> pvc-mysql.yaml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
 name: pvc-mysql
spec:
 storageClassName: managed-nfs-storage
 accessModes:
 - ReadWriteMany
 resources:
 requests:
 storage: 1Mi
EOF</span>
kubectl delete deploy deploy-mysql
kubectl delete <span class="token parameter variable">-f</span> pvc-mysql.yaml
kubectl apply <span class="token parameter variable">-f</span> pvc-mysql.yaml

<span class="token comment"># 通过StorageClass可以在PVC创建时⾃动创建PV</span>
kubectl get pvc
kubectl get <span class="token function">pv</span>

<span class="token comment"># 部署MySQL脚本Deployment不变</span>

<span class="token comment"># 删除Deploy并不会对PV与PVC产⽣影响,动态产⽣的PV默认策略为Delete，会随着PVC删除⼀并被删除</span>
kubectl delete pvc pvc-mysql
kubectl get pvc
No resources found <span class="token keyword">in</span> default namespace.
kubectl get <span class="token function">pv</span>
No resources found
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利⽤StatefulSet为每⼀个Pod分配独⽴存储</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/mnt
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /var/mnt
<span class="token function">chmod</span> <span class="token number">755</span> /var/mnt

<span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/exports <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
/var/mnt *(rw,sync,no_root_squash)
EOF</span>
systemctl restart rpcbind
systemctl restart nfs

<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/mnt/*
<span class="token function">mkdir</span> /etc/k8s
<span class="token builtin class-name">cd</span> /etc/k8s
kubectl delete <span class="token parameter variable">-f</span> nfs-client-provisioner.yaml
kubectl apply <span class="token parameter variable">-f</span> nfs-client-provisioner.yaml

<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/mnt/*
<span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/k8s/stateful-mysql.yml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
# Headless Service
apiVersion: v1
kind: Service
metadata:
  name: hsvc-mysql
spec:
  selector:
    app: mysql
  ports:
    - port: 3306
  clusterIP: None
---
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: stateful-mysql
spec:
  replicas: 3 # pod数量
  selector:
    matchLabels:
      app: mysql
  serviceName: hsvc-mysql
  template:
    metadata:
      labels:
        app: mysql
    spec:
      containers:
        - name: mysql
          image: mysql:8
          imagePullPolicy: IfNotPresent
          ports:
            - containerPort: 3306
          env:
            - name: MYSQL_ROOT_PASSWORD
              value: &quot;123456&quot;
          volumeMounts:
            - name: pvc-mysql
              mountPath: /var/lib/mysql
  volumeClaimTemplates: # 定义创建 PVC 使用的模板
    - metadata:
        name: pvc-mysql
        annotations: # 指定 storageclass，确保 PVC 与 PV 自动创建
          volume.beta.kubernetes.io/storage-class: managed-nfs-storage
      spec:
        accessModes:
          - ReadWriteMany
        resources:
          requests:
            storage: 512Mi
EOF</span>
kubectl delete <span class="token parameter variable">-f</span> /etc/k8s/stateful-mysql.yml
kubectl apply <span class="token parameter variable">-f</span> /etc/k8s/stateful-mysql.yml

kubectl get po
NAME READY STATUS RESTARTS AGE
nfs-client-provisioner-5974ffbd47-q7n9s <span class="token number">1</span>/1 Running <span class="token number">0</span> 23m
stateful-mysql-0 <span class="token number">1</span>/1 Running <span class="token number">0</span> 24s
stateful-mysql-1 <span class="token number">1</span>/1 Running <span class="token number">0</span> 22s
stateful-mysql-2 <span class="token number">1</span>/1 Running <span class="token number">0</span> 18s

kubectl get pvc
NAME                         STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS          VOLUMEATTRIBUTESCLASS   AGE
pvc-mysql                    Bound    pv-mysql                                   10Gi       RWO            pv-mysql              <span class="token operator">&lt;</span>unset<span class="token operator">&gt;</span>                 3h45m
pvc-mysql-stateful-mysql-0   Bound    pvc-6726794b-3060-4a53-85a9-d60d15c4f43d   512Mi      RWX            managed-nfs-storage   <span class="token operator">&lt;</span>unset<span class="token operator">&gt;</span>                 75s
pvc-mysql-stateful-mysql-1   Bound    pvc-db82749c-5b2b-4d18-81d7-1326a3513cce   512Mi      RWX            managed-nfs-storage   <span class="token operator">&lt;</span>unset<span class="token operator">&gt;</span>                 71s
pvc-mysql-stateful-mysql-2   Bound    pvc-b209d390-6d6f-4aa8-9b39-478eb2782c8d   512Mi      RWX            managed-nfs-storage   <span class="token operator">&lt;</span>unset<span class="token operator">&gt;</span>                 55s
<span class="token comment"># 删除Stateful并不会删除PVC与PV</span>
kubectl delete <span class="token parameter variable">-f</span> /etc/k8s/stateful-mysql.yml
kubectl get pvc
ll /var/mnt
<span class="token comment"># ⼿动删除PVC后，PVC、PV、⽂件都被删除</span>
kubectl delete pvc pvc-mysql-stateful-mysql-0
kubectl delete pvc pvc-mysql-stateful-mysql-1
kubectl delete pvc pvc-mysql-stateful-mysql-2
kubectl get <span class="token function">pv</span>
ll /var/mnt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件存储、块存储、对象存储" tabindex="-1"><a class="header-anchor" href="#文件存储、块存储、对象存储"><span>⽂件存储、块存储、对象存储</span></a></h2><p>文件存储：FTP、NFS服务器、Nas<br> 基于⽂件的存储，数据会以单条信息的形式存储在⽂件夹中，访问该数据时要知道相应的查找路径。存储在⽂件中的数据会根据有限数量的元数据来进⾏整理和检索，元数据会告诉⽂件所在的确切位置<br> 每个⽂档都会按照某种类型的逻辑层次结构来排放。适⽤于直接和⽹络附加存储系统的⼀种数据存储系统；⽂件存储⼏乎可以存储任何内容。如复杂⽂件，并且有助于⽤户快速导航<br> 基于⽂件的存储系统必须通过添置更多系统来进⾏横向扩展，⽽不是通过增添更多容量来进⾏纵向扩展。</p><p>块存储：磁盘阵列，硬盘，SAN<br> 是裸磁盘，挂载到QVM后不能被操作系统应⽤直接访问，需要格式化成⽂件系统（ext3、ext4、NTFS等）后才能被访问。优势是性能⾼、时延低，适合于OLTP、NoSQL数据库等IO。但是⽆法容量弹性扩展，单盘最⼤只能32TB，且对共享访问的⽀持有限，需要配合类Oracle RAC、WSFC Windows故障转移集群等集群管理软件才能共享访问。因此主要还是针对单点的⾼性能，低时延的存储产品</p><p>对象存储：分布式服务器(oss、s3)<br> 基于对象的存储，扁平结构，⽂件被拆分成多个部分并散布在多个硬件间。数据会被分解为称为&quot;对象&quot;的离散单元，并保存在单个存储库中，⽽不是作为⽂件夹中的⽂件或服务器上的块来保存。<br> 作为模块化单元来⼯作：每个卷都是⼀个⾃包含式存储库，均含有数据、允许在分布式系统上找到对象的唯⼀标识符以及描述数据的元数据。元数据包括年龄、隐私/安全信息和访问突发事件等详细信息。也可以⾮常详细，并且能存储与视频拍摄地点、所⽤相机和各个帧中特写的演员有关的信息。为了检索数据，存储操作系统会使⽤元数据和标识符更好地分配负载，并允许管理员应⽤策略来执⾏更强⼤的搜索。</p><p>对象存储需要HTTP应⽤编程接⼝（API），供⼤多数客户端（各种语⾔）使⽤。~经济⾼效：只需为已⽤内容付费。可以轻松扩展，因⽽是公共云存储首选。适⽤于静态数据的存储系统，其灵活性和扁平性使它可以通过扩展来存储极⼤量的数据。对象具有⾜够的信息供应⽤快速查找数据，并且擅⻓存储⾮结构化数据。<br> 缺点。⽆法修改对象——必须⼀次性完整地写⼊对象；不能很好地与传统数据库搭配使⽤，因为编写对象很缓慢，编写应⽤以使⽤对象存储API并不像使⽤⽂件存储简单</p><p>块存储，最底层的存储，关注的是磁盘的基本存储单元块（Block），可以没有软件服务器。<br> ⽂件存储（像NAS）和对象存储（S3、七⽜云），是软件层⾯的存储，底层也基于块存储。<br> ⽂件存储和对象存储的区别在于，<br> 组织⽂件的⽅式，⽂件存储是有⽬录树的、有标准属性的（权限、⽤户、读写）。对象存储是扁平的、没有⽬录的、附加属性是灵活的，<br> ⼝协议也。对象存储接⼝主要以S3与Swift为代表，是简单的GET、PUT、DEL和其他扩展，⽂件存储以POSIX接⼝为主，以libcephfs为代表</p><h2 id="configmap、secret配置管理-configmap以文件形式挂载到pod-configmap应用至pod环境变量-configmap与secret支持热部署-configmap多环境配置-secret对敏感信息进行存储" tabindex="-1"><a class="header-anchor" href="#configmap、secret配置管理-configmap以文件形式挂载到pod-configmap应用至pod环境变量-configmap与secret支持热部署-configmap多环境配置-secret对敏感信息进行存储"><span>ConfigMap、Secret配置管理，ConfigMap以⽂件形式挂载到Pod，ConfigMap应⽤⾄Pod环境变量，ConfigMap与Secret⽀持热部署，ConfigMap多环境配置，Secret对敏感信息进⾏存储</span></a></h2><p>ConfigMap将配置数据（环境变量）和应⽤程序代码分开<br> ⽤于配置在Pod中运⾏的容器的设置、作为数据卷挂载、⽤作符合相应ConfigMap中设置的参数的附加组件或运算符。</p><figure><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw619207a2d8fa7d475a21794f0a7f100a.png" alt="configmap.png" tabindex="0"><figcaption>configmap.png</figcaption></figure><p>ConfigMap类型<br> FileSystem Object：挂载configmap，每个键将被创建为具有相应值作为内容的⽂件<br> Environment variable：要动态传递给容器的键和值对<br> Commandline Argument：更改容器命令⾏参数的默认值</p><p>注意事项<br> 信息未加密。因此不存储机密信息<br> ConfigMap⽂件⼤⼩不应超过1MB。超过则考虑挂载存储卷或者使⽤独⽴的数据库或者⽂件服务。<br> ConfigMap对象名称是DNS⼦域名<br> ConfigMaps与Namespace有关，只有同⼀Namespace中的pod才能引⽤<br> ConfigMaps不能⽤于静态pod</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># ⽅式1：利⽤YAML⽂件创建</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> configmap_Dev.yaml<span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: v1
kind: ConfigMap
metadata:
 name: game-demo
data:
# property-like keys; each key maps to a simple value
 player_initial_lives: &quot;3&quot;
 ui_properties_file_name: &quot;user-interface.properties&quot;
# file-like keys
 game.properties: |
 enemy.types=aliens,monsters
 player.maximum-lives=5
 user-interface.properties: |
 color.good=purple
 color.bad=yellow
 allow.textmode=true
EOF</span>
kubectl apply <span class="token parameter variable">-f</span> configmap_Dev.yaml 

<span class="token comment"># ⽅法2：从同⼀⽬录中的多个常规⽂件创建ConfigMap。忽略任何其他条⽬（例如⼦⽬录、符号链接、管道、设备等）。</span>
kubectl create configmap myconfigmap --from-file <span class="token punctuation">[</span>path/to/yaml/directory<span class="token punctuation">]</span>

<span class="token comment"># ⽅法3：从⽂件创建</span>
kubectl create configmap <span class="token punctuation">[</span>configmap_Dev<span class="token punctuation">]</span> --from-file <span class="token punctuation">[</span>path/to/file<span class="token punctuation">]</span> --from-file<span class="token punctuation">[</span>path/to/file2<span class="token punctuation">]</span><span class="token punctuation">..</span>.

<span class="token comment"># ⽅法4：创建⽂字值</span>
kubectl create configmap <span class="token punctuation">[</span>configmap_Dev<span class="token punctuation">]</span> --from-literal <span class="token punctuation">[</span>key1<span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">[</span>value1<span class="token punctuation">]</span> --from-literal <span class="token punctuation">[</span>key2<span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">[</span>value2<span class="token punctuation">]</span>

<span class="token comment"># ⽅法5：从⽣成器创建⼀个ConfigMap。然后应⽤于在Apiserver上创建对象</span>
<span class="token number">1.14</span>+通过Kustomize管理对象：⾃定义K8s配置的⼯具。功能是configMapGenerator，从⽂件或⽂字⽣成ConfigMap。在⽬录内的customization.yaml中指定⽣成器。

apiVersion:kustomize.config.k8s.io/v1beta1
kind:Kustomization
namespace:my-namespace
configMapGenerator:
 - name:my-map
files:
 - data/file1.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ConfigMap以⽂件形式挂载到Pod</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># ⽅式⼀：YAML创建configMap</span>
<span class="token function">mkdir</span> /etc/k8s
<span class="token builtin class-name">cd</span> /etc/k8s
<span class="token function">cat</span> <span class="token operator">&gt;</span> cm-nginx.yaml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: v1
kind: ConfigMap
metadata:
  name: cm-nginx
data:
  nginx.conf: |
    # 文件内容
    user nginx;
    worker_processes 1;
    error_log /var/log/nginx/error.log warn;
    pid /var/run/nginx.pid;

    events {
        worker_connections 1024;
    }

    http {
        include /etc/nginx/mime.types;
        default_type application/octet-stream;

        log_format main &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
                        &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
                        &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

        access_log /var/log/nginx/access.log main;
        sendfile on;
        # tcp_nopush on;
        keepalive_timeout 65;
        # gzip on;

        include /etc/nginx/conf.d/*.conf;
    }
EOF</span>
kubectl delete <span class="token parameter variable">-f</span> cm-nginx.yaml
kubectl apply <span class="token parameter variable">-f</span> cm-nginx.yaml 

kubectl get cm
NAME DATA AGE
cm-nginx <span class="token number">1</span> 8s
kube-root-ca.crt <span class="token number">1</span> 57d

kubectl describe cm cm-nginx

<span class="token comment"># ⽅式⼆：指定⽂件创建</span>
<span class="token function">mkdir</span> /etc/k8s/nginx
<span class="token builtin class-name">cd</span> /etc/k8s/nginx
<span class="token function">cat</span> <span class="token operator">&gt;</span> nginx.conf <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
# 文件内容后面的内容
EOF</span>
kubectl delete cm cm-nginx
kubectl create cm cm-nginx --from-file /etc/k8s/nginx/nginx.conf

<span class="token comment"># Pod以⽂件⽅式挂载ConfigMap</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> deploy-nginx.yaml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: apps/v1
kind: Deployment
metadata:
  name: deploy-nginx
spec:
  replicas: 1
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
        - name: nginx
          image: nginx:1.20.2-alpine
          imagePullPolicy: IfNotPresent
          ports:
            - containerPort: 80
          volumeMounts:
            - name: vol-nginx
              mountPath: /etc/nginx/nginx.conf
              subPath: nginx.conf
      volumes:
        - name: vol-nginx
          configMap:
            name: cm-nginx
            items:
              - key: nginx.conf
                path: nginx.conf
EOF</span>
kubectl delete <span class="token parameter variable">-f</span> deploy-nginx.yaml
kubectl apply <span class="token parameter variable">-f</span> deploy-nginx.yaml

kubectl get po
NAME READY STATUS RESTARTS AGE
deploy-nginx-67f4f67655-xxvht <span class="token number">1</span>/1 Running <span class="token number">0</span> 8s
kubectl <span class="token builtin class-name">exec</span> <span class="token parameter variable">--stdin</span> <span class="token parameter variable">--tty</span> deploy-nginx-67f4f67655-xxvht -- <span class="token function">sh</span> 
<span class="token comment"># cat /etc/nginx/nginx.conf</span>
<span class="token comment"># itlaoqi</span>
user nginx<span class="token punctuation">;</span>
worker_processes <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">..</span>.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ConfigMap应⽤⾄Pod环境变量</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 创建ConfigMap</span>
kubectl delete cm cm-mysql
kubectl create cm cm-mysql --from-literal<span class="token operator">=</span>RANDOM_PASSWORD<span class="token operator">=</span>yes

<span class="token comment"># 查看cm-mysql详细内容</span>
kubectl describe cm cm-mysql
Name: cm-mysql
Namespace: default
Labels: <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
Annotations: <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
Data
<span class="token operator">==</span><span class="token operator">==</span>
RANDOM_PASSWORD:
----
<span class="token function">yes</span>
BinaryData
<span class="token operator">==</span><span class="token operator">==</span>

<span class="token comment"># 部署MySQL节点，利⽤valueFrom.configMapKeyRef完成cm-mysql.RANDOM_PASSWORD与mysql容器MYSQL_RANDOM_ROOT_PASSWORD环境变量的绑定</span>
<span class="token function">mkdir</span> /etc/k8s
<span class="token builtin class-name">cd</span> /etc/k8s
<span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/k8s/deploy-mysql.yml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: apps/v1
kind: Deployment
metadata:
  name: deploy-mysql
spec:
  replicas: 1
  selector:
    matchLabels:
      app: mysql
  template:
    metadata:
      labels:
        app: mysql
    spec:
      containers:
        - name: mysql
          image: mysql:8
          imagePullPolicy: IfNotPresent
          ports:
            - containerPort: 3306
          env:
            - name: MYSQL_RANDOM_ROOT_PASSWORD
              valueFrom:
                configMapKeyRef:
                  name: cm-mysql
                  key: RANDOM_PASSWORD
EOF</span>
kubectl delete <span class="token parameter variable">-f</span> /etc/k8s/deploy-mysql.yml
kubectl apply <span class="token parameter variable">-f</span> /etc/k8s/deploy-mysql.yml

验证是否随机⽣成了ROOT密码
kubectl get pods
NAME READY STATUS RESTARTS AGE
deploy-mysql-846dbcc654-c4w7s <span class="token number">1</span>/1 Running <span class="token number">0</span> 7s
kubectl logs deploy-mysql-846dbcc654-c4w7s <span class="token operator">|</span> <span class="token function">grep</span> GENERATED
<span class="token punctuation">[</span>Note<span class="token punctuation">]</span> <span class="token punctuation">[</span>Entrypoint<span class="token punctuation">]</span>: GENERATED ROOT PASSWORD: RCqllQJmoBxf+X1i7+5gLHtutMxYCU2V

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,54),K=n("br",null,null,-1),H={href:"https://github.com/stakater/Reloader",target:"_blank",rel:"noopener noreferrer"},z=n("br",null,null,-1),W=n("br",null,null,-1),$=n("br",null,null,-1),J=n("br",null,null,-1),Z={href:"http://xn--reloader-4e6o.stakater.com/last-reloadedfrom%E5%9C%A8%E6%8B%A5%E6%9C%89%E7%9A%84%E8%B5%84%E6%BA%90%EF%BC%88%E4%BE%8B%E5%A6%82Deployment%EF%BC%8C%EF%BC%8CStatefulSet%E7%AD%89%EF%BC%89%E4%B8%8A%E9%99%84%E5%8A%A0%E2%BC%80%E4%B8%AApod%E6%A8%A1%E6%9D%BF%E6%B3%A8%E9%87%8A%E3%80%82%E5%9C%A8%E4%BD%BF%E2%BD%A4ArgoCD%E7%AD%89%E8%B5%84%E6%BA%90%E5%90%8C%E6%AD%A5%E2%BC%AF%E5%85%B7%E6%97%B6%E6%9C%89%E2%BD%A4%EF%BC%8C%E5%9B%A0%E4%B8%BA%E5%AE%83%E4%B8%8D%E4%BC%9A%E5%AF%BC%E8%87%B4%E8%BF%99%E4%BA%9B%E2%BC%AF%E5%85%B7%E5%9C%A8%E9%87%8D%E6%96%B0%E5%8A%A0%E8%BD%BD%E8%B5%84%E6%BA%90%E5%90%8E%E6%A3%80%E6%B5%8B%E9%85%8D%E7%BD%AE%E6%BC%82%E7%A7%BB",target:"_blank",rel:"noopener noreferrer"},Q=n("br",null,null,-1),X=i(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># ⾃动全量监听</span>
kind: Deployment
metadata:
 annotations:
 reloader.stakater.com/auto: <span class="token string">&quot;true&quot;</span>
spec:
 template:

<span class="token comment"># 局部监听：</span>
<span class="token comment"># 1.部署脚本增加reloader.stakater.com/search=true</span>
kind: Deployment
metadata:
 annotations:
 reloader.stakater.com/search: <span class="token string">&quot;true&quot;</span>
spec:
 template:

<span class="token comment"># 2.ConfigMap增加reloader.stakater.com/match=true</span>
kind: ConfigMap
metadata:
 annotations:
 reloader.stakater.com/match: <span class="token string">&quot;true&quot;</span>
data:
 key: value

<span class="token comment"># 局部热更新</span>
kind: Deployment
metadata:
 annotations:
 configmap.reloader.stakater.com/reload: <span class="token string">&quot;foo-configmap&quot;</span>
 <span class="token comment"># 可以写多个</span>
 <span class="token comment"># configmap.reloader.stakater.com/reload: &quot;foo-configmap,bar-configmap,baz-configmap&quot;</span>
spec:
 template:


<span class="token comment"># 案例使⽤</span>
<span class="token comment"># 安装</span>
kubectl apply <span class="token parameter variable">-f</span> https://raw.githubusercontent.com/stakater/Reloader/master/deployments/kubernetes/reloader.yaml
<span class="token comment"># 配置cm</span>
<span class="token function">mkdir</span> /etc/k8s
<span class="token builtin class-name">cd</span> /etc/k8s
<span class="token function">cat</span> <span class="token operator">&gt;</span> cm-nginx.yaml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: v1
kind: ConfigMap
metadata:
  name: cm-nginx
data:
  nginx.conf: |
    # v1.0
    user nginx;
    worker_processes 1;
    error_log /var/log/nginx/error.log warn;
    pid /var/run/nginx.pid;

    events {
      worker_connections 1024;
    }

    http {
      include /etc/nginx/mime.types;
      default_type application/octet-stream;

      log_format main &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

      access_log /var/log/nginx/access.log main;
      sendfile on;
      #tcp_nopush on;
      keepalive_timeout 65;
      #gzip on;

      include /etc/nginx/conf.d/*.conf;
    }
EOF</span>
kubectl delete <span class="token parameter variable">-f</span> cm-nginx.yaml
kubectl apply <span class="token parameter variable">-f</span> cm-nginx.yaml

<span class="token function">cat</span> <span class="token operator">&gt;</span> deploy-nginx.yaml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: apps/v1
kind: Deployment
metadata:
  name: deploy-nginx
  annotations:
    reloader.stakater.com/auto: &quot;true&quot;
spec:
  replicas: 1
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
        - name: nginx
          image: nginx
          imagePullPolicy: IfNotPresent
          ports:
            - containerPort: 80
          volumeMounts:
            - name: vol-nginx
              mountPath: /etc/nginx/nginx.conf
              subPath: nginx.conf
      volumes:
        - name: vol-nginx
          configMap:
            name: cm-nginx
            items:
              - key: nginx.conf
                path: nginx.conf
EOF</span>
kubectl delete <span class="token parameter variable">-f</span> deploy-nginx.yaml
kubectl apply <span class="token parameter variable">-f</span> deploy-nginx.yaml

<span class="token comment"># 修改配置⽂件后，重新加载</span>
kubectl apply <span class="token parameter variable">-f</span> cm-nginx.yaml
<span class="token comment"># 此时PodName已发⽣变化，说明已经滚动</span>
kubectl get pod
<span class="token comment"># 进⼊容器查看确认，发现配置已更新</span>
kubectl <span class="token builtin class-name">exec</span> <span class="token parameter variable">--stdin</span> <span class="token parameter variable">--tty</span> deploy-nginx-dbddd58c8-8cgwd -- <span class="token function">sh</span>
<span class="token comment"># cat /etc/nginx/nginx.conf</span>
<span class="token comment"># v1.1</span>
user nginx<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ConfigMap多环境配置<br> ConfigMap基于Namespace隔离，Pod只会加载当前Namespace的ConfigMap</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl create namespace dev
kubectl create namespace prod
kubectl create namespace <span class="token builtin class-name">test</span>

<span class="token comment"># 创建Dev Namespace ConfigMap</span>
开发环境Dev
<span class="token function">mkdir</span> /etc/k8s/dev
<span class="token builtin class-name">cd</span> /etc/k8s/dev
<span class="token function">cat</span> <span class="token operator">&gt;</span> cm-nginx.yaml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: v1
kind: ConfigMap
metadata:
 name: cm-nginx
 namespace: dev
...
EOF</span>
kubectl delete <span class="token parameter variable">-f</span> cm-nginx.yaml
kubectl apply <span class="token parameter variable">-f</span> cm-nginx.yaml
<span class="token comment"># 在Dev namespace下部署</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> deploy-nginx.yaml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: apps/v1
kind: Deployment
metadata:
 name: deploy-nginx
 namespace: dev
...
EOF</span>
kubectl delete <span class="token parameter variable">-f</span> deploy-nginx.yaml
kubectl apply <span class="token parameter variable">-f</span> deploy-nginx.yaml
<span class="token comment"># 读取到Dev下的cm-config信息</span>
kubectl get pod <span class="token parameter variable">-n</span> dev
NAME READY STATUS RESTARTS AGE
deploy-nginx-546c9b98bb-fzlft <span class="token number">1</span>/1 Running <span class="token number">0</span> 45s
deploy-nginx-546c9b98bb-lbtb2 <span class="token number">1</span>/1 Running <span class="token number">0</span> 45s
deploy-nginx-546c9b98bb-vmzf8 <span class="token number">1</span>/1 Running <span class="token number">0</span> 45s

kubectl <span class="token builtin class-name">exec</span> deploy-nginx-546c9b98bb-fzlft <span class="token parameter variable">-n</span> dev -- <span class="token function">cat</span> /etc/nginx/nginx.conf
<span class="token comment"># ENV: DEV</span>
user nginx<span class="token punctuation">;</span>
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Secret对敏感信息进⾏存储<br> Secret⽤于存储和管理敏感数据例如密码、令牌OAuth tokens或密钥ssh keys的对象。⽤Secret则不需要在代码中包含机密数据<br> 由于创建Secret独⽴于使⽤它们的Pod，因此在创建、查看和编辑Pod的⼯作流程中暴露Secret及其数据的⻛险⼩。K8s和在集群中运⾏的应⽤程序也可以对Secret采取额外的预防措施，如避免将机密数据写⼊⾮易失性存储<br> Secret用法：</p><ul><li>创建Pod时指定Service Account⾃动使⽤该Secret</li><li>通过挂载该Secret到Pod来使⽤</li><li>在Docker镜像下载时使⽤，通过指定Pod的spc.ImagePullSecrets来引⽤</li></ul><p>ConfigMap和Secret选择？</p><ul><li>使⽤ConfigMap存储⾮敏感的配置信息</li><li>使⽤Secret存储敏感的配置信息</li><li>如果配置⽂件既包含敏感信息、⼜包含⾮敏感信息，选择Secret存储</li></ul><p>Secret和ConfigMap对⽐<br> 同：</p><ul><li>存储数据都属于key-value键值对形式</li><li>属于某个特定的namespace</li><li>可以导出到环境变量</li><li>可以通过⽬录/⽂件形式挂载（⽀持挂载所有key和部分key）<br> 异：</li><li>Secret可以被ServerAccount关联使⽤</li><li>Secret可以存储Register的鉴权信息，⽤于ImagePullSecret参数中，⽤于拉取私有仓库的镜像</li><li>Secret⽀持Base64编码</li><li>Secret分为多种类型，ConfigMap不区分类型</li><li>Secret⽂件存储在tmpfs⽂件系统中，Pod删除后Secret也会对应被删除</li></ul><p>Secret类型<br> type字段或者kubectl命令⾏参数设置类型</p>`,10),nn=n("thead",null,[n("tr",null,[n("th",null,"内置类型"),n("th",null,"⽤法")])],-1),en=n("tr",null,[n("td",null,"Opaque"),n("td",null,"⽤户定义的任意数据")],-1),sn={href:"http://kubernetes.io/service-account-token",target:"_blank",rel:"noopener noreferrer"},an=n("td",null,"服务账号令牌",-1),ln={href:"http://kubernetes.io/dockercfg",target:"_blank",rel:"noopener noreferrer"},tn=n("td",null,"~/.dockercfg ⽂件的序列化形式",-1),dn={href:"http://kubernetes.io/dockerconfigjson",target:"_blank",rel:"noopener noreferrer"},cn=n("td",null,"~/.docker/config.json ⽂件的序列化形式",-1),rn={href:"http://kubernetes.io/basic-auth",target:"_blank",rel:"noopener noreferrer"},on=n("td",null,"⽤于基本身份认证的凭据",-1),vn={href:"http://kubernetes.io/ssh-auth",target:"_blank",rel:"noopener noreferrer"},pn=n("td",null,"⽤于 SSH 身份认证的凭据",-1),un={href:"http://kubernetes.io/tls",target:"_blank",rel:"noopener noreferrer"},mn=n("td",null,"⽤于 TLS 客户端或者服务器端的数据",-1),bn={href:"http://bootstrap.kubernetes.io/token",target:"_blank",rel:"noopener noreferrer"},kn=n("td",null,"启动引导令牌数据",-1),gn=i(`<p>K8s对Secret对象采取额外了预防措施。<br> 存储安全<br> 只有当挂载Secret的POD调度到具体节点上时，Secret才会被发送并存储到该节点上。但不会被写⼊磁盘，⽽是存储在tmpfs中。⼀旦POD被删除，Secret就被删除。<br> 由于节点上的Secret数据存储在tmpfs卷中，因此只会存在于内存中⽽不会写⼊到节点上的磁盘。以避免通过数据恢复等⽅法获取到敏感信息.<br> 访问安全<br> 同⼀节点上可能有多个POD分别拥有单个或多个Secret。但Secret只对请求挂载的POD中的容器才可⻅。因此，POD不能访问另⼀个POD的Secret</p><p>使⽤Secret⻛险<br> API server的Secret数据以纯⽂本的⽅式存储在etcd中，因此：<br> 管理员应该限制admin⽤户访问etcd<br> API server中的Secret数据位于etcd使⽤的磁盘上；管理员在不再使⽤时擦除/粉碎etcd使⽤的磁盘<br> 如果Secret数据编码为base64的（JSON 或 YAML）⽂件，共享该⽂件或将其检⼊代码库，密码将会被泄露。Base64编码不是⼀种加密⽅式，是纯⽂本<br> 应⽤程序在从卷中读取Secret后仍需要保护Secret值，例如不会意外记录或发送给不信任⽅<br> 可以创建和使⽤Secret的POD⽤户也可以Secret 的值。即使API server策略不允许⽤户读取Secret对象，⽤户也可以运⾏暴露Secret的POD<br> Secret会在多个副本共享。默认情况下，etcd不能保证与SSL/TLS的对等通信，但管理员可以配置<br> 任何节点的root⽤户都可以通过kubelet读取API server中的任何Secret</p><p>环境变量⽅式</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> /etc/k8s
<span class="token builtin class-name">cd</span> /etc/k8s
<span class="token function">cat</span> <span class="token operator">&gt;</span> secret.yaml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: v1
kind: Secret
metadata:
  name: mysecret
type: Opaque
stringData:
  USERNAME: admin
data:
  # 密码1f2d1e2e67df被base64后
  PASSWORD: MWYyZDFlMmU2N2Rm
EOF</span>
kubectl delete <span class="token parameter variable">-f</span> secret.yaml
kubectl apply <span class="token parameter variable">-f</span> secret.yaml

kubectl describe secret mysecret
Name: mysecret
Namespace: default
Labels: <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
Annotations: <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
Type: Opaque
Data
<span class="token operator">==</span><span class="token operator">==</span>
PASSWORD: <span class="token number">12</span> bytes
USERNAME: <span class="token number">5</span> bytes

<span class="token comment"># 环境变量方式</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> secret-test-pod.yaml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: v1
kind: Pod
metadata:
  name: secret-test-pod
spec:
  containers:
    - name: test-container
      image: busybox:1.37.0
      command: [ &quot;/bin/sh&quot;, &quot;-c&quot;, &quot;env&quot; ]
      envFrom:
        - secretRef:
            name: mysecret
  restartPolicy: Never
EOF</span>
kubectl delete <span class="token parameter variable">-f</span> secret-test-pod.yaml
kubectl apply <span class="token parameter variable">-f</span> secret-test-pod.yaml

<span class="token comment"># Secret并不安全</span>
kubectl get secret mysecret <span class="token parameter variable">-o</span> yaml
apiVersion: v1
data:
 PASSWORD: MWYyZDFlMmU2N2Rm
 USERNAME: <span class="token assign-left variable">YWRtaW4</span><span class="token operator">=</span>
kind: Secret
metadata:
 annotations:
 kubectl.kubernetes.io/last-applied-configuration: <span class="token operator">|</span>
  <span class="token punctuation">{</span><span class="token string">&quot;apiVersion&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;v1&quot;</span>,<span class="token string">&quot;data&quot;</span>:<span class="token punctuation">{</span><span class="token string">&quot;PASSWORD&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;MWYyZDFlMmU2N2Rm&quot;</span><span class="token punctuation">}</span>,<span class="token string">&quot;kind&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Secret&quot;</span>,<span class="token string">&quot;metadata&quot;</span>:<span class="token punctuation">{</span><span class="token string">&quot;annotations&quot;</span>:<span class="token punctuation">{</span><span class="token punctuation">}</span>,<span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;mysecret&quot;</span>,<span class="token string">&quot;namespace&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">}</span>,<span class="token string">&quot;stringData&quot;</span>:<span class="token punctuation">{</span><span class="token string">&quot;USERNAME&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">}</span>,<span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Opaque&quot;</span><span class="token punctuation">}</span>
 creationTimestamp: <span class="token string">&quot;2023-02-18T08:09:17Z&quot;</span>
 name: mysecret
 namespace: default
 resourceVersion: <span class="token string">&quot;902222&quot;</span>
 uid: febed5f8-426c-4dd1-bea5-06728167d817
type: Opaque

<span class="token comment"># 存储到配置⽂件</span>
<span class="token comment"># config.yml整个文件内容base64后</span>
apiUrl: <span class="token string">&quot;https://my.api.com/api/v1&quot;</span>
username: admin
password: 1f2d1e2e67df

<span class="token function">mkdir</span> /etc/k8s
<span class="token builtin class-name">cd</span> /etc/k8s
<span class="token function">cat</span> <span class="token operator">&gt;</span> secret.yaml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: v1
kind: Secret
metadata:
 name: mysecret
type: Opaque
data:
 config.yaml: YXBpVXJsOiAiaHR0cHM6Ly9teS5hcGkuY29tL2FwaS92MSIKdXNlcm5hbWU6IGFkbWluCnBhc3N3b3JkOiAxZjJkMWUyZTY3ZGY=
EOF</span>
kubectl delete <span class="token parameter variable">-f</span> secret.yaml
kubectl apply <span class="token parameter variable">-f</span> secret.yaml

<span class="token comment"># ⽂件⽅式挂载</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> secret-test-pod.yaml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: v1
kind: Pod
metadata:
  name: secret-test-pod
spec:
  containers:
    - name: test-container
      image: nginx
      volumeMounts:
        # name 必须与下⾯的卷名匹配
        - name: secret-volume
          mountPath: /etc/secret-volume
          readOnly: true
  volumes:
    - name: secret-volume
      secret:
        secretName: mysecret
EOF</span>
kubectl delete <span class="token parameter variable">-f</span> secret-test-pod.yaml
kubectl apply <span class="token parameter variable">-f</span> secret-test-pod.yaml

<span class="token comment"># 验证</span>
kubectl <span class="token builtin class-name">exec</span> secret-test-pod -- <span class="token function">ls</span> /etc/secret-volume
config.yaml
kubectl <span class="token builtin class-name">exec</span> secret-test-pod -- <span class="token function">cat</span> /etc/secret-volume/config.yaml
apiUrl:<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一次性任务-job-cronjob创建基于时隔重复调度的job" tabindex="-1"><a class="header-anchor" href="#一次性任务-job-cronjob创建基于时隔重复调度的job"><span>⼀次性任务-Job，CronJob创建基于时隔重复调度的Job</span></a></h2><p>Job会创建⼀个或多个Pod，并将继续重试Pod的执⾏，直到指定数量的Pod成功终⽌。随着Pod成功结束，Job跟踪记录成功完成的Pod个数。当数量达到指定的成功个数阈值时，任务Job结束。删除Job的操作会清除所创建的全部Pod。挂起Job的操作会删除Job的所有活跃Pod，直到Job被再次恢复执⾏<br> 使用场景<br> 1、⾮并⾏任务：只启⼀个pod，pod成功，job正常结束<br> 2、并⾏任务同时指定成功个数<br> 3、有⼯作队列的并⾏任务<br> 4、创建⼀个Job对象以可靠的⽅式运⾏某Pod直到完成。当第⼀个Pod失败或者被删除（⽐如因为节点硬件失效或者重启）时启动新Pod</p><p>Job不是设计⽤来完成通信密集型的并⾏程序，⽀持并⾏地处理⼀组独⽴但相关的workitem，如发送邮件，渲染帧，转码⽂件和扫描NoSql数据库中的key<br> 配置</p><ul><li>.spec.completions：完成该Job需要执⾏成功的Pod数.默认1</li><li>.spec.parallelism：能够同时运⾏的Pod数</li><li>.spec.backoffLimit：允许执⾏失败的Pod数，默认6，0不允许Pod执⾏失败。如果Pod是restartPolicy为Nerver，则失败后会创建新Pod，如果是OnFailed，则会重启Pod，只要Pod失败⼀次就计算⼀次，⽽不是等整个Pod失败后再计算⼀个。当失败的次数达到该限制时Job结束，所有正在运⾏的Pod都会被删除</li><li>.spec.activeDeadlineSeconds:Job的超时时间，运⾏时间超出该限制则Job失败，所有运⾏中的Pod会被结束并删除。不指定则不会超时</li></ul><p>CronJob创建基于时隔重复调度的Job<br> CronJob⽤于执⾏排期操作，例如备份、⽣成报告等。⽤Cron格式编写，并周期性地在给定的调度时间执⾏Job。<br> Cron时间表语法</p><ul><li>.spec.schedule字段 必需。遵循Cron语法：<br> 任务延迟开始的最后期限</li><li>.spec.startingDeadlineSeconds字段 可选。表示任务如果错过了调度时间，开始该任务的截⽌时间的秒数。过了截⽌时间就不会开始该任务（未来的任务仍在调度之中）。例如，如果你有⼀个每天运⾏两次的备份任务，你可能会允许它最多延迟8⼩时开始，但不能更晚，因为更晚的备份没有意义：宁愿等待下⼀次计划的运⾏。<br> 对于错过已配置的最后期限的Job将其视为失败的任务。如果没有指定就没有最后期限。如果被设置将会计算从预期创建Job到当前时间的时间差。如果时间差⼤于该限制，则跳过此次执⾏。例如，设置为200则允许在实际调度之后最多200秒内创建Job</li></ul><p>并发性规则<br> 仅适⽤于相同CronJob创建的任务。如果有多个CronJob是允许并发执⾏的<br> .spec.concurrencyPolicy 可选。声明任务执⾏时发⽣重叠如何处理。<br> Allow（默认）：允许并发任务执⾏。<br> Forbid：不允许并发任务执⾏；如果新任务的执⾏时间到了⽽⽼任务没有执⾏完，忽略新任务的执⾏。<br> Replace：如果新任务的执⾏时间到了⽽⽼任务没有执⾏完，⽤新任务替换当前正在运⾏的任务。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> /etc/k8s
<span class="token builtin class-name">cd</span> /etc/k8s
<span class="token function">cat</span> <span class="token operator">&gt;</span> job-echo.yaml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: batch/v1
kind: Job
metadata:
  name: job-echo
  namespace: default
  labels:
    job-name: job-echo
spec:
  suspend: true # Kubernetes 1.21+ 支持，true 代表挂起 Job，false代表job⽴即执⾏
  ttlSecondsAfterFinished: 100 # Job在执⾏结束之后（状态为completed或Failed）⾃动清理。设置为0表示执⾏结束⽴即删除，不设置则不会清除，需要开启TTLAfterFinished特性
  backoffLimit: 4 # 失败后重试次数
  completions: 2 # 成功执行的 Pod 数量 为空默认和parallelism数值⼀样
  parallelism: 2 # 并行执行任务的 Pod 数量,如果parallelism数值⼤于未完成任务数，只会创建未完成的数量；⽐如completions是4，并发是3，第⼀次会创建3个Pod执⾏任务，第⼆次只会创建⼀个Pod执⾏任务
  template:
    spec:
      containers:
        - name: echo
          image: registry.cn-beijing.aliyuncs.com/dotbalo/busybox
          imagePullPolicy: Always
          command:
            - echo
            - &quot;Hello, Job&quot;
          resources: {} # 保留空值，表示无特殊资源限制
      restartPolicy: Never
EOF</span>
kubectl delete <span class="token parameter variable">-f</span> job-echo.yaml
kubectl apply <span class="token parameter variable">-f</span> job-echo.yaml

<span class="token comment"># 查看状态</span>
kubectl get job
NAME COMPLETIONS DURATION AGE
job-echo <span class="token number">0</span>/2 8s

kubectl describe job job-echo
Name: job-echo
Namespace: default
Selector: controller-uid<span class="token operator">=</span>4f03e419-d3a2-45c4-840f-c29f29a295ce
Labels: job-name<span class="token operator">=</span>job-echo
Annotations: batch.kubernetes.io/job-tracking:
Parallelism: <span class="token number">2</span>
Completions: <span class="token number">2</span>
Completion Mode: NonIndexed
Pods Statuses: <span class="token number">0</span> Active <span class="token punctuation">(</span><span class="token number">0</span> Ready<span class="token punctuation">)</span> / <span class="token number">0</span> Succeeded / <span class="token number">0</span> Failed
Pod Template:
 Labels: controller-uid<span class="token operator">=</span>4f03e419-d3a2-45c4-840f-c29f29a295ce
 job-name<span class="token operator">=</span>job-echo
 Containers:
 echo:
 Image: registry.cn-beijing.aliyuncs.com/dotbalo/busybox
 Port: <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
 Host Port: <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
 Command:
 <span class="token builtin class-name">echo</span>
 Hello, Job
 Environment: <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
 Mounts: <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
 Volumes: <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
Events:
 Type Reason Age From Message
 ---- ------ ---- ---- -------
 Normal Suspended 23s job-controller Job suspended

<span class="token comment"># 激活运⾏job-echo</span>
kubectl patch job/job-echo <span class="token parameter variable">--type</span><span class="token operator">=</span>strategic <span class="token parameter variable">--patch</span> <span class="token string">&#39;{&quot;spec&quot;:{&quot;suspend&quot;:false}}&#39;</span>
<span class="token comment"># 查看⼯作状态</span>
kubectl describe job job-echo
<span class="token punctuation">..</span>Job completed

kubectl get job
NAME COMPLETIONS DURATION AGE
job-echo <span class="token number">2</span>/2 4s 2m9s

kubectl get po
NAME READY STATUS RESTARTS AGE
job-echo-tm4wg <span class="token number">0</span>/1 Completed <span class="token number">0</span> 92s
job-echo-zzw82 <span class="token number">0</span>/1 Completed <span class="token number">0</span> 92s

kubectl logs job-echo-kxnkm
Hello, Job
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> /etc/k8s
<span class="token builtin class-name">cd</span> /etc/k8s
<span class="token function">cat</span> <span class="token operator">&gt;</span> job-echo.yaml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: batch/v1
kind: CronJob
metadata:
  name: job-echo
spec:
  schedule: &quot;* * * * *&quot; # 每分钟运行一次
  jobTemplate:
    spec:
      template:
        spec:
          containers:
            - name: job-echo
              image: registry.cn-beijing.aliyuncs.com/dotbalo/busybox
              imagePullPolicy: IfNotPresent
              command:
                - /bin/sh
                - -c
                - date; echo Hello from the Kubernetes cluster
          restartPolicy: OnFailure # 失败时重启容器
EOF</span>
kubectl delete <span class="token parameter variable">-f</span> job-echo.yaml
kubectl apply <span class="token parameter variable">-f</span> job-echo.yaml

kubectl get <span class="token function">jobs</span> <span class="token parameter variable">--watch</span>
NAME COMPLETIONS DURATION AGE
job-echo-27948099 <span class="token number">0</span>/1 0s
job-echo-27948099 <span class="token number">0</span>/1 0s 0s
job-echo-27948099 <span class="token number">0</span>/1 3s 3s
job-echo-27948099 <span class="token number">1</span>/1 3s 3s
job-echo-27948100 <span class="token number">0</span>/1 0s
job-echo-27948100 <span class="token number">0</span>/1 0s 0s
job-echo-27948100 <span class="token number">0</span>/1 3s 3s
job-echo-27948100 <span class="token number">1</span>/1 3s 3s
job-echo-27948101 <span class="token number">0</span>/1 0s
job-echo-27948101 <span class="token number">0</span>/1 0s 0s
job-echo-27948101 <span class="token number">0</span>/1 3s 3s
job-echo-27948101 <span class="token number">1</span>/1 3s 3s

kubectl get cronjob
NAME SCHEDULE SUSPEND ACTIVE LAST SCHEDULE AGE
job-echo * * * * * False <span class="token number">0</span> 6s 3m45s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基于ks实现金丝雀发布" tabindex="-1"><a class="header-anchor" href="#基于ks实现金丝雀发布"><span>基于KS实现⾦丝雀发布</span></a></h2><p>⾦丝雀发布/灰度发布（Canaryreleas）是⼀种降低在⽣产中引⼊新软件版本的⻛险的技术，将更改推⼴到整个基础架构并使其可供所有⼈使⽤之前，缓慢地将更改推⼴到⼀⼩部分⽤户。</p><p>基于K8S业界中最佳实践<br> 通过节点亲和性特性在对应节点⾃动发布，控制不同版本的分布</p><p>如何控制动态扩容<br> kubectl label nodes node1 dtype=secondary<br> kubectl scale deploy deploy-nginx-v1 --replicas=15<br> kubectl scale deploy deploy-nginx-v2 --replicas=12</p>`,17),yn=n("br",null,null,-1),fn={href:"http://nginx.ingress.kubernetes.io/canary-weight:%2210%22",target:"_blank",rel:"noopener noreferrer"},hn=n("br",null,null,-1),Pn=i(`<p>⾦丝雀发布实战</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 安装ingress-nginx-controller，参考上面</span>

<span class="token comment"># 查看安装结果，获取对外暴露的端⼝号</span>
kubectl get all <span class="token parameter variable">-n</span> ingress-nginx
minikube <span class="token function">service</span> ingress-nginx-controller <span class="token parameter variable">-n</span> ingress-nginx <span class="token parameter variable">--url</span>

<span class="token comment"># 部署nginx-v1</span>
<span class="token function">mkdir</span> /etc/k8s
<span class="token builtin class-name">cd</span> /etc/k8s
<span class="token function">cat</span> <span class="token operator">&gt;</span> deploy-openresty-v1.yaml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-v1
spec:
  replicas: 1
  selector:
    matchLabels:
      app: nginx
      version: v1
  template:
    metadata:
      labels:
        app: nginx
        version: v1
    spec:
      containers:
      - name: nginx
        image: &quot;openresty/openresty:centos&quot;
        ports:
        - name: http
          protocol: TCP
          containerPort: 80
        volumeMounts:
        - mountPath: /usr/local/openresty/nginx/conf/nginx.conf
          name: config
          subPath: nginx.conf
      volumes:
      - name: config
        configMap:
          name: nginx-v1
---
apiVersion: v1
kind: ConfigMap
metadata:
  labels:
    app: nginx
    version: v1
  name: nginx-v1
data:
  nginx.conf: |-
    worker_processes 1;
    events {
      accept_mutex on;
      multi_accept on;
      use epoll;
      worker_connections 1024;
    }
    http {
      ignore_invalid_headers off;
      server {
        listen 80;
        location / {
          access_by_lua &#39;local header_str = ngx.say(&quot;nginx-v1&quot;)&#39;;
        }
      }
    }
---
apiVersion: v1
kind: Service
metadata:
  name: nginx-v1
spec:
  type: ClusterIP
  ports:
  - port: 80
    protocol: TCP
    name: http
  selector:
    app: nginx
    version: v1
EOF</span>
kubectl delete <span class="token parameter variable">-f</span> deploy-openresty-v1.yaml
kubectl apply <span class="token parameter variable">-f</span> deploy-openresty-v1.yaml
<span class="token comment"># 验证</span>
kubectl get po
<span class="token comment"># 部署nginx-v2</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> deploy-openresty-v2.yaml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-v2
spec:
  replicas: 1
  selector:
    matchLabels:
      app: nginx
      version: v2
  template:
    metadata:
      labels:
        app: nginx
        version: v2
    spec:
      containers:
      - name: nginx
        image: &quot;openresty/openresty:centos&quot;
        imagePullPolicy: IfNotPresent
        ports:
        - name: http
          protocol: TCP
          containerPort: 80
        volumeMounts:
        - name: config
          mountPath: /usr/local/openresty/nginx/conf/nginx.conf
          subPath: nginx.conf
      volumes:
      - name: config
        configMap:
          name: nginx-v2
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: nginx-v2
  labels:
    app: nginx
    version: v2
data:
  nginx.conf: |-
    worker_processes 1;
    events {
      accept_mutex on;
      multi_accept on;
      use epoll;
      worker_connections 1024;
    }
    http {
      ignore_invalid_headers off;
      server {
        listen 80;
        location / {
          access_by_lua &#39;ngx.say(&quot;nginx-v2&quot;)&#39;;
        }
      }
    }
---
apiVersion: v1
kind: Service
metadata:
  name: nginx-v2
spec:
  type: ClusterIP
  ports:
  - port: 80
    protocol: TCP
    targetPort: 80
    name: http
  selector:
    app: nginx
    version: v2
EOF</span>
kubectl delete <span class="token parameter variable">-f</span> deploy-openresty-v2.yaml
kubectl apply <span class="token parameter variable">-f</span> deploy-openresty-v2.yaml

<span class="token comment"># 验证</span>
kubectl get po
NAME                        READY   STATUS    RESTARTS   AGE
nginx-v1-6c5f8cc7b8-6r447   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          3m22s
nginx-v2-669cc8cbd6-8k2n8   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          4s
<span class="token comment"># 部署ingress-nginx-v1</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> ingress-nginx-v1.yaml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: nginx
  annotations:
    ingress.kubernetes.io/rewrite-target: /
spec:
  ingressClassName: nginx
  rules:
  - host: foo.itlaoqi.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: nginx-v1
            port:
              number: 80
EOF</span>
kubectl delete <span class="token parameter variable">-f</span> ingress-nginx-v1.yaml
kubectl apply <span class="token parameter variable">-f</span> ingress-nginx-v1.yaml
kubectl get ingress
<span class="token comment"># 部署ingress-nginx-v2</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> ingress-nginx-v2.yaml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: nginx-canary
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
    nginx.ingress.kubernetes.io/canary: &quot;true&quot; # 开启灰度发布
    nginx.ingress.kubernetes.io/canary-by-header: &quot;Region&quot; # 如果请求头包含 Region 属性，则路由到 v2
    nginx.ingress.kubernetes.io/canary-weight: &quot;10&quot; # v2 版本的权重
spec:
  ingressClassName: nginx
  rules:
  - host: foo.itlaoqi.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: nginx-v2
            port:
              number: 80
EOF</span>
kubectl delete <span class="token parameter variable">-f</span> ingress-nginx-v2.yaml
kubectl apply <span class="token parameter variable">-f</span> ingress-nginx-v2.yaml
kubectl get ingress
<span class="token comment"># 配置hosts⽂件</span>
<span class="token function">cat</span> <span class="token operator">&gt;&gt;</span> /etc/hosts <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
192.168.49.2 foo.itlaoqi.com
EOF</span>
<span class="token comment"># 测试灰度发布过程</span>
minikube <span class="token function">service</span> ingress-nginx-controller <span class="token parameter variable">-n</span> ingress-nginx <span class="token parameter variable">--url</span>
<span class="token comment"># 10%流量⾛v2</span>
<span class="token keyword">while</span> <span class="token function">sleep</span> <span class="token number">0.2</span><span class="token punctuation">;</span><span class="token keyword">do</span> <span class="token function">curl</span> http://foo.itlaoqi.com:31483<span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span><span class="token keyword">done</span>
<span class="token comment"># 强制⾛v2</span>
<span class="token keyword">while</span> <span class="token function">sleep</span> <span class="token number">0.2</span><span class="token punctuation">;</span><span class="token keyword">do</span> <span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&#39;Region:always&#39;</span> http://foo.itlaoqi.com:31483<span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span><span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="portainer的安装和使用" tabindex="-1"><a class="header-anchor" href="#portainer的安装和使用"><span>Portainer的安装和使用</span></a></h2>`,3),En=n("br",null,null,-1),xn=n("br",null,null,-1),Sn={href:"https://www.portainer.io/",target:"_blank",rel:"noopener noreferrer"},qn=n("p",null,[e("安装Portainer"),n("br"),e(" 创建一个名字叫做portainer的虚拟机"),n("br"),e(" multipass launch --name portainer --cpus 2 --memory 8G --disk 10G")],-1),An=n("br",null,null,-1),Cn={href:"https://downloads.portainer.io/ce2-19/portainer.yaml",target:"_blank",rel:"noopener noreferrer"},_n=n("br",null,null,-1),On=n("br",null,null,-1),Nn={href:"https://localhost:30779/",target:"_blank",rel:"noopener noreferrer"},Rn={href:"http://localhost:30777/",target:"_blank",rel:"noopener noreferrer"},In=n("br",null,null,-1),Dn=n("br",null,null,-1),Mn=n("br",null,null,-1),Tn={href:"https://helm.sh/",target:"_blank",rel:"noopener noreferrer"},Vn=i(`<p>安装Helm</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 使用包管理器安装：</span>
<span class="token function">curl</span> https://baltocdn.com/helm/signing.asc <span class="token operator">|</span> gpg <span class="token parameter variable">--dearmor</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /usr/share/keyrings/helm.gpg <span class="token operator">&gt;</span> /dev/null
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> apt-transport-https <span class="token parameter variable">--yes</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;deb [arch=<span class="token variable"><span class="token variable">$(</span>dpkg --print-architecture<span class="token variable">)</span></span> signed-by=/usr/share/keyrings/helm.gpg] https://baltocdn.com/helm/stable/debian/ all main&quot;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/helm-stable-debian.list
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> helm

<span class="token comment"># Linux（CentOS/Fedora）</span>
<span class="token function">sudo</span> dnf <span class="token function">install</span> helm

<span class="token comment"># Linux（Snap）</span>
<span class="token function">sudo</span> snap <span class="token function">install</span> helm <span class="token parameter variable">--classic</span>

<span class="token comment"># Linux（FreeBSD）</span>
pkg <span class="token function">install</span> helm

<span class="token comment"># 使用脚本安装</span>
$ <span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> <span class="token parameter variable">-o</span> get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3
$ <span class="token function">chmod</span> <span class="token number">700</span> get_helm.sh
$ ./get_helm.sh
或者
<span class="token function">curl</span> https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 <span class="token operator">|</span> <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="containerport、port、targetport、nodeport" tabindex="-1"><a class="header-anchor" href="#containerport、port、targetport、nodeport"><span>containerport、port、targetport、nodeport</span></a></h2><p>containerport：容器pod内监听程序端口<br> port：service对集群内部暴露的端口，其他pod通过这个端口访问service<br> targetport：Service 访问 Pod 时映射到的 containerPort<br> nodeport：在每个 Node 上分配的端口（范围 30000-32767），用于从集群外部访问 Service，它会转发到 targetPort。</p>`,4);function wn(Ln,Fn){const a=t("ExternalLinkIcon"),l=t("RouteLink");return r(),o("div",null,[p,n("p",null,[e("matchExpressions的key"),u,n("a",m,[e("kubernetes.io/hostname"),s(a)]),b,n("a",k,[e("failure-domain.beta.kubernetes.io/zone"),s(a)]),g,n("a",y,[e("failure-domain.beta.kubernetes.io/region"),s(a)]),f,n("a",h,[e("beta.kubernetes.io/instance-type"),s(a)]),P,n("a",E,[e("beta.kubernetes.io/os"),s(a)]),x,n("a",S,[e("beta.kubernetes.io/arch"),s(a)])]),q,n("p",null,[e("亲和性规则：仅当节点和⾄少⼀个已运⾏且有security=S1的标签的Pod处于同⼀区域时，才可以将该Pod调度到节点上。更确切说，"),n("a",A,[e("必须将Pod调度到具有topology.kubernetes.io/zone=V标签的节点上，并且集群中⾄少有⼀个位于该可⽤区的节点上运⾏着带有security=S1标签的Pod。"),s(a)]),C,e(" 反亲和性规则：如果节点处于Pod所在的同⼀可⽤区且⾄少⼀个Pod具有security=S2标签，则该Pod不应被调度到该节点上。更确切说，如果同⼀可⽤区中存在其他运⾏着带有security=S2标签的Pod节点，"),n("a",_,[e("并且节点具有标签topology.kubernetes.io/zone=R，Pod不能被调度到该节点上"),s(a)])]),O,n("p",null,[e('如果针对"gold"storageclass与"bronze"storageclass设置配额可以定义如下配额：'),N,n("a",R,[e("gold.storageclass.storage.k8s.io/requests.storage:500Gi"),s(a)]),I,n("a",D,[e("bronze.storageclass.storage.k8s.io/requests.storage:100Gi"),s(a)])]),M,n("ul",null,[T,n("li",null,[e("它通过返回CNAME记录及其值，将服务映射到externalName字段的内容 ("),n("a",V,[e("x.com"),s(a)]),e(")。它不会建立任何形式的代理")]),w]),L,n("p",null,[s(l,{to:"/backend/containerservice/linux%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA.md/#%E4%BB%A3%E7%90%86"},{default:d(()=>[e("linux代理")]),_:1}),F,s(l,{to:"/backend/containerservice/docker.md/#%E4%BB%A3%E7%90%86"},{default:d(()=>[e("docker代理")]),_:1}),B,e(" 轻量级的单节点的kubernetes集群环境")]),G,n("ul",null,[n("li",null,[e("IngressClass代表Ingress的类，"),n("a",U,[e("ingressclass.kubernetes.io/is-default-class注解可以⽤来标明⼀个IngressClass应该被视为默认的Ingress类。当某个IngressClass资源将此注解设置为true时，没有指定类的新Ingress资源将被分配到此默认类。"),s(a)])]),j]),Y,n("p",null,[e("ConfigMap与Secret⽀持热部署"),K,n("a",H,[e("https://github.com/stakater/Reloader"),s(a)]),z,e(" 重新加载策略"),W,e(" Reloader⽤于对资源执⾏滚动升级。"),$,e(" env-vars：当跟踪的configMap/secret更新时，将Reloader特定的环境变量附加到引⽤已更改configMap或secret拥有资源（例如Deployment，，StatefulSet等）的任何容器。可⽤参数指定--reload-strategy=env-vars。默认。"),J,e(" annotations：当跟踪configMap/secret更新时，"),n("a",Z,[e("将reloader.stakater.com/last-reloadedfrom在拥有的资源（例如Deployment，，StatefulSet等）上附加⼀个pod模板注释。在使⽤ArgoCD等资源同步⼯具时有⽤，因为它不会导致这些⼯具在重新加载资源后检测配置漂移"),s(a)]),Q,e(" 注意：由于附加的pod模板注释仅跟踪最后的重新加载源，因此该策略将重新加载任何被跟踪的资源，如果它configMap被secret删除并重新创建。可以⽤参数指定--reloadstrategy=annotations")]),X,n("table",null,[nn,n("tbody",null,[en,n("tr",null,[n("td",null,[n("a",sn,[e("kubernetes.io/service-account-token"),s(a)])]),an]),n("tr",null,[n("td",null,[n("a",ln,[e("kubernetes.io/dockercfg"),s(a)])]),tn]),n("tr",null,[n("td",null,[n("a",dn,[e("kubernetes.io/dockerconfigjson"),s(a)])]),cn]),n("tr",null,[n("td",null,[n("a",rn,[e("kubernetes.io/basic-auth"),s(a)])]),on]),n("tr",null,[n("td",null,[n("a",vn,[e("kubernetes.io/ssh-auth"),s(a)])]),pn]),n("tr",null,[n("td",null,[n("a",un,[e("kubernetes.io/tls"),s(a)])]),mn]),n("tr",null,[n("td",null,[n("a",bn,[e("bootstrap.kubernetes.io/token"),s(a)])]),kn])])]),gn,n("p",null,[e("如何实现访问可控"),yn,e(" 按⽐例实现流量分发："),n("a",fn,[e('nginx.ingress.kubernetes.io/canary-weight:"10"'),s(a)]),hn,e(" 流量稳定投递到V1/V2Pod：设置IPVS模式为sh")]),Pn,n("p",null,[e("轻量级的容器管理工具，管理Docker和Kubernetes，"),En,e(" 它提供了一个Web界面来方便我们管理容器，"),xn,e(" 官方网址: "),n("a",Sn,[e("https://www.portainer.io/"),s(a)])]),qn,n("p",null,[e("在master节点上安装portainer，并将其暴露在NodePort 30777上"),An,e(" kubectl apply -n portainer -f "),n("a",Cn,[e("https://downloads.portainer.io/ce2-19/portainer.yaml"),s(a)])]),n("p",null,[e("或者用Helm安装Portainer"),_n,e(" helm upgrade --install --create-namespace -n portainer portainer portainer/portainer --set tls.force=true"),On,e(" 然后直接访问 "),n("a",Nn,[e("https://localhost:30779/"),s(a)]),e(" 或者 "),n("a",Rn,[e("http://localhost:30777/"),s(a)]),e(" 就可以了，")]),n("p",null,[e("Helm的安装和使用"),In,e(" Helm是一个K8s的包管理工具"),Dn,e(" 提供命令行工具管理Kubernetes的应用"),Mn,e(" 官方网址: "),n("a",Tn,[e("https://helm.sh/"),s(a)])]),Vn])}const Un=c(v,[["render",wn],["__file","kubernetes.html.vue"]]),jn=JSON.parse('{"path":"/backend/containerservice/kubernetes.html","title":"Kubernetes","lang":"zh-CN","frontmatter":{"title":"Kubernetes","date":"2023-01-01T00:00:00.000Z","tags":"Kubernetes","categories":"运维","description":"k8s介绍 Kubernetes舵手。8替代K和s中的8个字母，Google开源基于Go Kubernetes和Docker两个互补。Docker侧重于容器化应用，Kubernetes专注于容器编排。Docker开发应用、打包、测试和交付，Kubernetes在生产、测试环境中编排应用的运行 k8s类似云上的操作系统对资源进行抽象，并对多种云原生微服务...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/containerservice/kubernetes.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"Kubernetes"}],["meta",{"property":"og:description","content":"k8s介绍 Kubernetes舵手。8替代K和s中的8个字母，Google开源基于Go Kubernetes和Docker两个互补。Docker侧重于容器化应用，Kubernetes专注于容器编排。Docker开发应用、打包、测试和交付，Kubernetes在生产、测试环境中编排应用的运行 k8s类似云上的操作系统对资源进行抽象，并对多种云原生微服务..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwc1af6a79492ff1fec2341d5f59ee453a.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Kubernetes\\",\\"image\\":[\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwc1af6a79492ff1fec2341d5f59ee453a.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwe93f41f0fe17e1e3a3bf470704ee8ff5.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwee6ca4ddffd533cb55dd4b91337023be.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwe87568c263d25e19b2d136c7594e72c0.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw876e70eacff36b47208692de6bdf0ee9.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw7783e47ec1f254fc9c50e6a323e66a7a.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwe949c25b8930989d9beb0acd5e2f6201.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwd121c70aa3ac061d168963d566b41a34.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw619207a2d8fa7d475a21794f0a7f100a.png\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"k8s介绍","slug":"k8s介绍","link":"#k8s介绍","children":[]},{"level":2,"title":"k8s架构","slug":"k8s架构","link":"#k8s架构","children":[]},{"level":2,"title":"POD、Pause容器、yaml定义pod(了解)，POD生命周期与重启、拉取策略，利用探针实现POD健康检查，对外暴露，Pod调度与节点亲和性，污点（Taint）与容忍度（Toleration）.LimitRange与ResourceQuota","slug":"pod、pause容器、yaml定义pod-了解-pod生命周期与重启、拉取策略-利用探针实现pod健康检查-对外暴露-pod调度与节点亲和性-污点-taint-与容忍度-toleration-limitrange与resourcequota","link":"#pod、pause容器、yaml定义pod-了解-pod生命周期与重启、拉取策略-利用探针实现pod健康检查-对外暴露-pod调度与节点亲和性-污点-taint-与容忍度-toleration-limitrange与resourcequota","children":[]},{"level":2,"title":"Deployment控制器，零停机保障-滚动更新策略与设置，扩容缩容，回滚部署到指定版本","slug":"deployment控制器-零停机保障-滚动更新策略与设置-扩容缩容-回滚部署到指定版本","link":"#deployment控制器-零停机保障-滚动更新策略与设置-扩容缩容-回滚部署到指定版本","children":[]},{"level":2,"title":"利用DaemonSet为新节点自动部署Pod","slug":"利用daemonset为新节点自动部署pod","link":"#利用daemonset为新节点自动部署pod","children":[]},{"level":2,"title":"Service控制器、作用，YAML定义Service，Service四种服务类型，Service与Kube-Proxy实现原理","slug":"service控制器、作用-yaml定义service-service四种服务类型-service与kube-proxy实现原理","link":"#service控制器、作用-yaml定义service-service四种服务类型-service与kube-proxy实现原理","children":[]},{"level":2,"title":"k8s命令行工具安装（必须）","slug":"k8s命令行工具安装-必须","link":"#k8s命令行工具安装-必须","children":[]},{"level":2,"title":"k8sminikube（学习环境）","slug":"k8sminikube-学习环境","link":"#k8sminikube-学习环境","children":[]},{"level":2,"title":"k8s安装（生产环境）","slug":"k8s安装-生产环境","link":"#k8s安装-生产环境","children":[]},{"level":2,"title":"常用命令","slug":"常用命令","link":"#常用命令","children":[]},{"level":2,"title":"Endpoints与Endpointslice端点切⽚的作⽤。使⽤Service和Endpointslice接⼊三⽅外部应⽤","slug":"endpoints与endpointslice端点切片的作用。使用service和endpointslice接入三方外部应用","link":"#endpoints与endpointslice端点切片的作用。使用service和endpointslice接入三方外部应用","children":[]},{"level":2,"title":"Ingress与Ingress Controller","slug":"ingress与ingress-controller","link":"#ingress与ingress-controller","children":[]},{"level":2,"title":"隔离机制之Namespaces命名空间，DNS","slug":"隔离机制之namespaces命名空间-dns","link":"#隔离机制之namespaces命名空间-dns","children":[]},{"level":2,"title":"StatefulSet（有状态集）与Deployment（⽆状态部署）区别、StatefulSet的⽆头服务Headless Services及作⽤，注意事项，更新策略","slug":"statefulset-有状态集-与deployment-无状态部署-区别、statefulset的无头服务headless-services及作用-注意事项-更新策略","link":"#statefulset-有状态集-与deployment-无状态部署-区别、statefulset的无头服务headless-services及作用-注意事项-更新策略","children":[]},{"level":2,"title":"利⽤Volume卷实现Pod数据持久化与资源共享，利用PV与PVC实现存储解耦，PV、PVC的绑定与访问模式，如何正确删除PV与PVC，利⽤StatefulSet为每⼀个Pod分配独⽴存储","slug":"利用volume卷实现pod数据持久化与资源共享-利用pv与pvc实现存储解耦-pv、pvc的绑定与访问模式-如何正确删除pv与pvc-利用statefulset为每一个pod分配独立存储","link":"#利用volume卷实现pod数据持久化与资源共享-利用pv与pvc实现存储解耦-pv、pvc的绑定与访问模式-如何正确删除pv与pvc-利用statefulset为每一个pod分配独立存储","children":[]},{"level":2,"title":"⽂件存储、块存储、对象存储","slug":"文件存储、块存储、对象存储","link":"#文件存储、块存储、对象存储","children":[]},{"level":2,"title":"ConfigMap、Secret配置管理，ConfigMap以⽂件形式挂载到Pod，ConfigMap应⽤⾄Pod环境变量，ConfigMap与Secret⽀持热部署，ConfigMap多环境配置，Secret对敏感信息进⾏存储","slug":"configmap、secret配置管理-configmap以文件形式挂载到pod-configmap应用至pod环境变量-configmap与secret支持热部署-configmap多环境配置-secret对敏感信息进行存储","link":"#configmap、secret配置管理-configmap以文件形式挂载到pod-configmap应用至pod环境变量-configmap与secret支持热部署-configmap多环境配置-secret对敏感信息进行存储","children":[]},{"level":2,"title":"⼀次性任务-Job，CronJob创建基于时隔重复调度的Job","slug":"一次性任务-job-cronjob创建基于时隔重复调度的job","link":"#一次性任务-job-cronjob创建基于时隔重复调度的job","children":[]},{"level":2,"title":"基于KS实现⾦丝雀发布","slug":"基于ks实现金丝雀发布","link":"#基于ks实现金丝雀发布","children":[]},{"level":2,"title":"Portainer的安装和使用","slug":"portainer的安装和使用","link":"#portainer的安装和使用","children":[]},{"level":2,"title":"containerport、port、targetport、nodeport","slug":"containerport、port、targetport、nodeport","link":"#containerport、port、targetport、nodeport","children":[]}],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":80.83,"words":24250},"filePathRelative":"backend/containerservice/kubernetes.md","localizedDate":"2023年1月1日","excerpt":"<!--more-->\\n<!-- TOC -->\\n<h2>k8s介绍</h2>\\n<ul>\\n<li>Kubernetes舵手。8替代K和s中的8个字母，Google开源基于Go</li>\\n<li>Kubernetes和Docker两个互补。Docker侧重于容器化应用，Kubernetes专注于容器编排。Docker开发应用、打包、测试和交付，Kubernetes在生产、测试环境中编排应用的运行</li>\\n<li>k8s类似云上的操作系统对资源进行抽象，并对多种云原生微服务应用进行调度</li>\\n</ul>\\n<h2>k8s架构</h2>\\n<p>Kubernetes集群由主节点（master）与工作节点（node）组成。这些节点都是Linux主机<br>\\n<img src=\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwc1af6a79492ff1fec2341d5f59ee453a.png\\" alt=\\"k8s.png\\"></p>","autoDesc":true}');export{Un as comp,jn as data};
