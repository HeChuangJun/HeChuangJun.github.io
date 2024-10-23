import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as d,o as a,c as v,b as e,d as n,e as r,a as i}from"./app-CbX7tyD8.js";const c={},t=i(`<p>docker</p><h1 id="k8s介绍" tabindex="-1"><a class="header-anchor" href="#k8s介绍"><span>k8s介绍</span></a></h1><ul><li>Kubernetes（读作koo-ber-net-eez）一词来源于希腊语“舵手”——轮船的掌舵之人。Kubernetes经常被写作K8s。其中的数字8替代了K和s中的8个字母——这一点倒是方便了发推，也方便了像我这样懒惰的人。</li><li>Kubernetes通过Go语言编写而成，开源在GitHub上（项目名为kubernetes/Kubernetes）</li><li>Kubernetes和Docker是两个互补的技术。比如，通常人们会使用Docker进行应用的开发，然后用Kubernetes在生产环境中对应用进行编排。在这样的模式中，开发者使用自己喜欢的语言编写代码，然后用Docker进行打包、测试和交付。但是最终在测试环境或生产环境中运行的过程是由Kubernetes来完成的。</li><li>k8s类似于云上的操作系统（OS）当在云上安装Kubernetes时，它会对云上的资源进行抽象，并对多种云原生微服务应用进行调度。</li></ul><h1 id="kubernetes架构图" tabindex="-1"><a class="header-anchor" href="#kubernetes架构图"><span>Kubernetes架构图</span></a></h1><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/799af35cbeb4cad30b9f7.jpg" alt="k8s.png" tabindex="0"><figcaption>k8s.png</figcaption></figure><ul><li>主节点（控制平面）:一个Kubernetes集群由主节点（master）与工作节点（node）组成。这些节点都是Linux主机，可以运行在虚拟机（VM）、数据中心的物理机，或者公有云/私有云的实例上。<br> Kubernetes的主节点（master）是组成集群的控制平面的系统服务的集合。一般来说，建议使用3或5个副本来完成一个主节点高可用性部署方案。</li><li>API Server（API服务）:所有组件(系统内置组件以及外部用户组件)之间的通信，都需要通过API Server来完成。API Server对外通过HTTPS的方式提供了RESTful风格的API接口，读者上传YAML配置文件也是通过这种接口实现的。这些YAML文件有时也被称作manifest文件，它们描述了用户希望应用在运行时达到的期望状态（desired state）。期望状态中包含但不限于如下内容：需要使用的容器镜像、希望对外提供的端口号，以及希望运行的Pod副本数量。访问API Server的全部请求都必须经过授权与认证，一旦通过之后，YAML文件配置就会被认为是有效的，并被持久化到集群的存储中，最后部署到整个集群。</li><li>Controller Manager:controller管理器实现了全部的后台控制循环，完成对集群的监控并对事件作出响应。是controller的管理者（controller of controller），负责创建controller，并监控它们的执行。一些控制循环包括：工作节点controller、终端controller，以及副本controller。对应的每个controller都在后台启动了独立的循环监听功能，负责监控API Server的变更。这样做的目的是保证集群的当前状态（current state）可以与期望状态（desired state）相匹配。每个控制循环实现上述功能的基础逻辑大致如下。<br> （1）获取期望状态。<br> （2）观察当前状态。<br> （3）判断两者间的差异。<br> （4）变更当前状态来消除差异点。<br> 上面的逻辑是Kubernetes与声明式设计模式的关键所在。每个控制循环都极其定制化，并且仅关心Kubernetes集群中与其相关的部分。感知系统的其他部分并调用这种复杂的事情我们是绝对不会尝试的，每个控制循环都只关心与自己相关的逻辑，剩下的部分会交给其他控制循环来处理。这就是如Kubernetes这样的分布式系统设计的关键点所在，也与UNIX设计哲学不谋而合：每个组件都专注做好一件事，复杂系统是通过多个专一职责的组件组合而构成的。</li><li>Scheduler:从整体上来看，调度器的职责就是通过监听API Server来启动新的工作任务，并将其分配到适合的且处于正常运行状态的节点中。为了完成这样的工作，调度器实现了复杂的逻辑，过滤掉不能运行指定任务的工作节点，并对过滤后的节点进行排序。排序系统非常复杂，在排序之后会选择分数最高的节点来运行指定的任务。<br> 当确定了可以执行任务的具体节点之后，调度器会进行多种前置校验。这些前置校验包括：节点是否仍然存在、是否有affinity或者anti-affinity规则、任务所依赖的端口在当前工作节点是否可以访问、工作节点是否有足够的资源等。不满足任务执行条件的工作节点会被直接忽略，剩下的工作节点会依据下面的判定规则计算得分并排序，具体包括：工作节点上是否已经包含任务所需的镜像、剩余资源是否满足任务执行条件，以及正在执行多少任务。每条判定规则都有对应的得分，得分最高的工作节点会被选中，并执行相应任务。<br> 如果调度器无法找到一个合适的工作节点，那么当前任务就无法被调度，并且会被标记为暂停状态。<br> 调度器并不负责执行任务，只是为当前任务选择一个合适的节点运行。</li><li>ETCD:在整个控制层中，只有集群存储是有状态（stateful）的部分，它持久化地存储了整个集群的配置与状态。因此，这也是集群中的重要组件之一——没有集群存储，就没有集群。<br> 通常集群存储底层会选用一种常见的分布式数据库etcd。因为这是整个集群的唯一存储源，用户需要运行3～5个etcd副本来保证存储的高可用性，并且需要有充分的手段来应对可能出现的异常情况。<br> 在关于集群的可用性（availability）这一点上，etcd认为一致性比可用性更加重要。这意味着etcd在出现脑裂的情况时，会停止为集群提供更新能力，来保证存储数据的一致性。但是，就算etcd不可用，应用仍然可以在集群性持续运行，只不过无法更新任何内容而已。对于所有分布式数据库来说，写操作的一致性都至关重要。例如，分布式数据库需要能够处理并发写操作来尝试通过不同的工作节点对相同的数据进行更新。etcd使用业界流行的RAFT一致性算法来解决这个问题。</li><li>工作节点:Kubernetes集群中的工作者。从整体上看，工作节点主要负责如下3件事情。</li></ul><ol><li>监听API Server分派的新任务。</li><li>执行新分派的任务。</li><li>向控制平面回复任务执行的结果（通过API Server）。</li></ol><ul><li>Kubelet:每个工作节点上的核心部分，是Kubernetes中重要的代理端，并且在集群中的每个工作节点上都有部署。实际上，通常工作节点与Kubelet这两个术语基本上是等价的。在一个新的工作节点加入集群之后，Kubelet就会被部署到新节点上。然后Kubelet负责将当前工作节点注册到集群当中，集群的资源池就会获取到当前工作节点的CPU、内存以及存储信息，并将工作节点加入当前资源池。<br> Kubelet的一个重要职责就是负责监听API Server新分配的任务。每当其监听到一个任务时，Kubelet就会负责执行该任务，并维护与控制平面之间的一个通信频道，准备将执行结果反馈回去。<br> 如果Kuberlet无法运行指定任务，就会将这个信息反馈给控制平面，并由控制平面决定接下来要采取什么措施。例如，如果Kubelet无法执行一个任务，则其并不会负责寻找另外一个可执行任务的工作节点。Kubelet仅仅是将这个消息上报给控制平面，由控制平面决定接下来该如何做。</li><li>容器运行时 (Docker、Containerd、...):Kubelet需要一个容器运行时（container runtime）来执行依赖容器才能执行的任务，例如拉取镜像并启动或停止容器。<br> 在早期的版本中，Kubernetes原生支持了少量容器运行时，例如Docker。而在最近的版本中，Kubernetes将其迁移到了一个叫作容器运行时接口（CRI）的模块当中。从整体上来看，CRI屏蔽了Kubernetes内部运行机制，并向第三方容器运行时提供了文档化接口来接入。<br> Kubernetes目前支持丰富的容器运行时。一个非常著名的例子就是cri-containerd。这是一个开源的、社区维护的项目，将CNCF运行时通过CRI接口接入Kubernetes。该项目得到了广泛的支持，在很多Kubernetes场景中已经替代Docker成为当前最流行的容器运行时。注意：containerd（发音如“container-dee”）是基于Docker Engine剥离出来的容器管理与运行逻辑。该项目由Docker公司捐献给CNCF，并获得了大量的社区支持。同期也存在其他的符合CRI标准的容器运行时。</li><li>Kube-proxy:kube-proxy运行在集群中的每个工作节点，负责本地集群网络。例如保证了每个工作节点都可以获取到唯一的IP地址，并且实现了本地IPTABLE以及IPVS来保障Pod间的网络路由与负载均衡。</li></ul><h1 id="pod" tabindex="-1"><a class="header-anchor" href="#pod"><span>POD</span></a></h1><ul><li>在Docker的世界中，调度的原子单位是容器；而在Kubernetes的世界中，调度的原子单位是Pod。在Kubernetes集群中容器必须在Pod中才能运行。每个Pod中可以只运行一个容器，也可以运行一组容器，称为多容器Pod（multi-container Pod）。</li><li>整体来看，Pod是一个用于运行容器的有限制的环境。Pod本身并不会运行任何东西，只是作为一个承载容器的沙箱而存在。换一种说法，Pod就是为用户在宿主机操作系统中划出有限的一部分特定区域，构建一个网络栈，创建一组内核命名空间，并且在其中运行一个或者多个容器，这就是Pod。</li><li>如果在Pod中运行多个容器，那么多个容器间是共享相同的Pod环境的。共享环境中包括了IPC命名空间，共享的内存，共享的磁盘、网络以及其他资源等。举一个具体的例子，运行在相同Pod中的所有容器都有相同的IP地址（Pod的IP地址）。</li><li>如果在同一个Pod中运行的两个容器之间需要通信（在Pod内部的容器间），那么就可以使用Pod提供的localhost接口来完成。</li><li>对于存在强绑定关系的多个容器，比如需要共享内存与存储，多容器Pod就是一个非常完美的选择。但是，如果容器间并不存在如此紧密的关系，则更好的方式是将容器封装到不同的Pod，通过网络以松耦合的方式来运行。这样可以在任务级别实现容器间的隔离，降低相互之间的影响。当然这样也会导致大量的未加密的网络流量产生。</li></ul><h1 id="pause容器" tabindex="-1"><a class="header-anchor" href="#pause容器"><span>Pause容器</span></a></h1><ul><li>全称infrastucture container（又叫infra）基础容器，作为init pod存在，其他pod都会从pause 容器中fork出来<br> ● 每个Pod里运行着一个特殊的被称之为Pause的容器，其他容器则为业务容器，这些业务容器共享Pause容器的网络栈和Volume挂载卷，<br> ● 因此他们之间通信和数据交换更为高效，在设计时我们可以充分利用这一特性将一组密切相关的服务进程放入同一个Pod中。<br> ● 同一个Pod里的容器之间仅需通过localhost就能互相通信。<br> Pause容器主要为每个业务容器提供以下功能：<br> ● PID命名空间：Pod中的不同应用程序可以看到其他应用程序的进程ID。<br> ● 网络命名空间：Pod中的多个容器能够访问同一个IP和端口范围。<br> ● IPC命名空间：Pod中的多个容器能够使用SystemV IPC或POSIX消息队列进行通信。<br> ● UTS命名空间：Pod中的多个容器共享一个主机名；Volumes（共享存储卷）。<br> ● Pod中的各个容器可以访问在Pod级别定义的Volumes。</li></ul><h1 id="调度单元" tabindex="-1"><a class="header-anchor" href="#调度单元"><span>调度单元</span></a></h1><ul><li>Kubernetes中最小的调度单元也是Pod。如果读者需要扩容或缩容自己的应用，可以通过添加或删除Pod来实现。千万不要选择通过向一个已经存在的Pod中增加更多的容器这种方式来完成扩容。多容器Pod仅适用于那种两个的确是不同容器但又需要共享资源的场景。</li></ul><h1 id="原子操作单位" tabindex="-1"><a class="header-anchor" href="#原子操作单位"><span>原子操作单位</span></a></h1><ul><li>Pod的部署是一个原子操作。只有当Pod中的所有容器都启动成功且处于运行状态时，Pod提供的服务才会被认为是可用的。对于部分启动的Pod，绝对不会响应服务请求。整个Pod要么全部启动成功，并加入服务；要么被认为启动失败。一个Pod只会被唯一的工作节点调度。这一点对于多容器Pod来说也是一样的，一个多容器Pod中的全部容器都会运行在相同的工作节点上。</li></ul><h1 id="pod的生命周期" tabindex="-1"><a class="header-anchor" href="#pod的生命周期"><span>Pod的生命周期</span></a></h1><ul><li>Pod的生命周期是有限的。Pod会被创建并运行，并且最终被销毁。如果Pod出现预期外的销毁，用户无须将其重新启动。因为Kubernetes会启动一个新的Pod来取代有问题的Pod。尽管新启动的Pod看起来跟原来的Pod完全一样，本质上却并不是同一个。这是一个有全新的ID与IP地址的Pod。不要在设计程序的时候使其依赖特定的Pod</li></ul><h1 id="deployment-部署" tabindex="-1"><a class="header-anchor" href="#deployment-部署"><span>Deployment（部署）</span></a></h1><ul><li>大多数时间，用户通过更上层的控制器来完成Pod部署。上层的控制器包括Deployment、DaemonSet以及StatefulSet。</li><li>Deployment是对Pod的更高一层的封装，除Pod之外，还提供了如扩缩容管理、不停机更新以及版本控制等其他特性。</li><li>Deployment、DaemonSet以及StatefulSet还实现了自己的controller与监控循环，可以持续监控集群状态，并确保当前状态与期望状态相符。</li></ul><h1 id="service-服务" tabindex="-1"><a class="header-anchor" href="#service-服务"><span>Service（服务）</span></a></h1><ul><li>Pod可能随时会出现故障并销毁。如果通过Deployment或者DaemonSet对Pod进行管理，出现故障的Pod会自动被替换。但是替换后的新Pod会拥有完全不同的IP地址。这种情况也会在水平扩/缩容时发生，扩容时会创建拥有新IP地址的Pod，缩容时会移除掉现有的Pod。这些都会引起IP地址变化（IP churn）。此时需要Service（服务）机制。Service为一组Pod提供了可靠且稳定的网络。</li><li>上传器微服务通过Kubernetes中的Service机制来与渲染微服务进行交互的过程。Kubernetes Service提供了一个稳定的服务名称与IP地址，并且对于其下的两个Pod提供了请求级别的负载均衡机制。<br> 如果对于Pod进行数量上的增加，则在Service中同样会生效。新的Pod会被无缝添加到Service并承担请求流量。已经终止的Pod会被平滑地从当前Service中移除，并不再处理请求流量。<br> 这就是Service的职责：一个稳定的网络终端，提供了基组动态Pod集合的TCP以及UDP负载均衡能力。</li></ul><h1 id="k8s安装" tabindex="-1"><a class="header-anchor" href="#k8s安装"><span>k8s安装</span></a></h1><ul><li>配置需求:4核8G\\40G硬盘、可联通外网</li><li>基准节点CentOS 7.6（内核4.19） &amp; Containerd 用户名 / 密码：root / root</li><li>环境说明 <ul><li>1个Master节点，2个Worknode节点</li><li>POD地址段：172.16.10.0/24 （172.16.10.0~255）学习环境最多部署255个POD</li><li>Service地址段：172.16.32.0/24 （172.16.32.0~255）学习环境最多部署255个Service</li></ul></li><li>所有k8s主机安装Containerd</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 安装Docker 20.10版本，内置Containerd
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="yaml定义pod" tabindex="-1"><a class="header-anchor" href="#yaml定义pod"><span>yaml定义pod</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 编写yaml
mkdir /etc/k8s
cat &gt; /etc/k8s/nginx-pod.yaml &lt;&lt;-&#39;EOF&#39;
#API版本号，固定写v1即可
apiVersion: v1 
#创建对象类型，Pod代表该YAML要创建一个pod
kind: Pod 
#元数据，描述pod的辅助信息，后面用于
metadata: 
	#k8s管理pod的名称
  name: pod-nginx
#Spec用于设置容器、镜像等关键选项
spec: 
  #配置容器信息
  containers: 
    #容器名称
  - name: container-nginx
    #镜像名称
    image: nginx:latest 
    #容器内部暴露的端口号，即expose
    ports: 
    #nginx容器默认对外暴露80端口
    - containerPort: 80 
EOF


#应用
kubectl apply -f /etc/k8s/nginx-pod.yaml
#移除
kubectl delete -f /etc/k8s/nginx-pod.yaml

#查看已部署的Nginx节点
kubectl get pods -A -o wide

#查看指定pod明细
kubectl describe pod pod-nginx
#查看输出的日志
kubectl logs -f pod-nginx
# 查看运行时命令
crictl ps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="pod生命周期与重启、拉取策略" tabindex="-1"><a class="header-anchor" href="#pod生命周期与重启、拉取策略"><span>POD生命周期与重启、拉取策略</span></a></h1><ul><li>Kubernetes 中， pod 从创建到成功运行会分别处于不同的阶段，每个阶段又分为不同的状态</li><li>K8S中Pod生命周期 <ul><li>运行中（Running）：该 Pod 已经绑定到了一个节点上，Pod 中所有的容器都已被创建。至少有一个容器正在运行，或者正处于启动或重启状态。</li><li>等待中（Pending）: 创建 Pod 的请求已被 Kubernetes 系统接受，但有一个或者多个容器镜像尚未创建。可能的原因有，写数据到etcd，调度，pull镜像，启动容器这四个阶段中的任何一个阶段，pending 伴随的事件通常会有：ADDED, Modified这两个事件的产生。等待时间包括调度 Pod 的时间和下载镜像的时间，这可能需要花些时间。</li><li>正常终止（Succeeded）：pod中的所有的容器已经正常的自行退出，并且k8s永远不会自动重启这些容器，一般会是在部署job的时候会出现。</li><li>异常停止（Failed）：Pod 中的所有容器都已终止了，并且至少有一个容器是因为失败终止。也就是说，容器以非0状态退出或者被系统终止。</li><li>未知状态（PodUnkonwn）：出于某种原因，无法获得Pod的状态，通常是由于与Pod主机通信时出错。</li></ul></li><li>K8S中Pod的四个阶段及状态分析：一个 pod 的创建，通常会伴随着各种事件的产生，k8s中事件的种类共分为4种： <ul><li>Pod 的详细状态 <ul><li>CrashLoopBackOff： 容器退出，kubelet正在将它重启，建议增加内存、CPU等资源</li><li>InvalidImageName： 无法解析镜像名称</li><li>ImageInspectError： 无法校验镜像</li><li>ErrImageNeverPull： 策略禁止拉取镜像</li><li>ImagePullBackOff： 正在重试拉取，建议更换镜像仓库</li><li>RegistryUnavailable： 连接不到镜像中心</li><li>ErrImagePull： 通用的拉取镜像出错</li><li>CreateContainerConfigError： 不能创建kubelet使用的容器配置</li><li>CreateContainerError： 创建容器失败</li><li>m.internalLifecycle.PreStartContainer 执行hook报错</li><li>RunContainerError： 启动容器失败</li><li>PostStartHookError： 执行hook报错</li><li>ContainersNotInitialized： 容器没有初始化完毕</li><li>ContainersNotReady： 容器没有准备完毕</li><li>ContainerCreating：容器创建中，长时间卡死要decribe与logs查看日志分析内容</li><li>PodInitializing：pod 初始化中</li><li>DockerDaemonNotReady：docker还没有完全启动</li><li>NetworkPluginNotReady： 网络插件还没有完全启动</li></ul></li></ul></li><li>POD重启策略：适用于pod对象中的所有容器，首次需要重启的容器，将在其需要时立即进行重启，随后再次需要重启的操作将由kubelet延迟一段时间后进行，且反复的重启操作的延迟时长为10s，20s，40s，80s，160s，300s，300s是最大延迟时长 <ul><li>Always：容器失效时，自动重启该容器，默认</li><li>OnFailure：容器停止运行且退出码不为0时重启</li><li>Never：不论状态为何，都不重启该容器</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>mkdir /etc/k8s
cat &gt; /etc/k8s/nginx-pod.yaml &lt;&lt;-&#39;EOF&#39;
apiVersion: v1 
kind: Pod 
metadata: 
  name: pod-nginx
spec: 
  containers: 
  - name: container-nginx
    image: nginx:latest 
    ports: 
    - containerPort: 80
  #定义重启策略
  restartPolicy: Never
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>POD镜像拉取策略 <ul><li>IfNotPresent：默认值，镜像在宿主机上不存在时才拉取（面对稳定版本）</li><li>Always：每次创建 Pod 都会重新拉取一次镜像（面对不断变更版本）</li><li>Never： Pod 永远不会主动拉取这个镜像</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>mkdir /etc/k8s
cat &gt; /etc/k8s/nginx-pod.yaml &lt;&lt;-&#39;EOF&#39;
apiVersion: v1 
kind: Pod 
metadata: 
  name: pod-nginx
spec: 
  containers: 
  - name: container-nginx
    image: nginx:latest
    #镜像拉取策略
    imagePullPolicy: IfNotPresent
    ports: 
    - containerPort: 80
  restartPolicy: Never
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="利用探针实现pod健康检查" tabindex="-1"><a class="header-anchor" href="#利用探针实现pod健康检查"><span>利用探针实现POD健康检查</span></a></h1><ul><li>Pod的三种探针类型： <ul><li>StartupProbe：用于判断容器内应用程序是否已经启动。如果配置了startupProbe，就会先禁止其他的探测，直到它成功为止，成功后将不再进行探测。比较适用于容器启动时间长的场景。</li><li>LivenessProbe（存活探针）：用于探测容器是否运行，如果探测失败，kubelet会根据配置的重启策略进行相应的处理。若没有配置该探针，默认就是success。</li><li>ReadinessProbe（就绪探针）：一般用于探测容器内的程序是否健康，它的返回值如果为success，那么久代表这个容器已经完成启动，并且程序已经是可以接受流量的状态。</li></ul></li><li>三者区别 <ul><li>存活探针用于确定什么时候要重启容器。 例如探测到应用死锁（应用程序在运行，但是无法继续执行后面的步骤）情况。 重启这种状态下的容器有助于提高应用的可用性，即使其中存在缺陷。</li><li>就绪探针可以知道容器何时准备好接受请求流量，当一个Pod内的所有容器都就绪时，才能认为该Pod就绪。 这种信号的一个用途就是控制哪个Pod作为 Service 的后端。 若 Pod 尚未就绪，会被从 Service 的负载均衡器中剔除。</li></ul></li><li>Pod探针的四种检测方式 <ul><li>exec：在容器内执行一个命令，如果返回值为0，则认为容器健康。</li><li>tcpSocket：通过TCP连接检查容器内的端口是否通的，如果是通的就认为容器健康。</li><li>httpGet：通过应用程序暴露的API地址检查程序是否正常，如果状态码为200~400之间，则认为容器健康。（常用）</li><li>grpc：使用 gRPC 执行一个远程过程调用。 实现 gRPC健康检查。 如果响应的状态是 &quot;SERVING&quot;，则认为诊断成功。 gRPC 探针是一个 Alpha 特性，只有在你启用了 &quot;GRPCContainerProbe&quot; 特性门控时才能使用。</li></ul></li><li>探测结果：每次探测都将获得以下三种结果之一： <ul><li>Success（成功）：容器通过了诊断。</li><li>Failure（失败）：容器未通过诊断。</li><li>Unknown（未知）：诊断失败，因此不会采取任何行动。</li></ul></li><li>配置范本： <ul><li>kubelet 会在容器启动 5 秒后发送第一个存活探针。 探针会尝试连接 nginx 容器的 80 端口。 如果探测成功，这个 Pod 会被标记为就绪状态，kubelet 将继续每隔 10 秒运行一次探测。</li><li>就绪探针 periodSeconds 字段指定了 kubelet 每隔 3 秒执行一次存活探测。</li><li>initialDelaySeconds 字段告诉 kubelet 在执行第一次探测前应该等待 3 秒。 kubelet 会向容器内运行的服务（服务在监听 8080 端口）发送一个 HTTP GET 请求来执行探测。 如果服务器上 /healthz 路径下的处理程序返回成功代码，则 kubelet 认为容器是健康存活的。 如果处理程序返回失败代码，则 kubelet 会杀死这个容器并将其重启。返回大于或等于 200 并且小于 400 的任何代码都标示成功，其它返回代码都标示失败。</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>mkdir /etc/k8s
kubectl delete -f /etc/k8s/nginx-pod.yaml

cat &gt; /etc/k8s/nginx-pod.yaml &lt;&lt;-&#39;EOF&#39;
apiVersion: v1 
kind: Pod 
metadata: 
  name: pod-nginx
spec: 
  containers: 
  - name: container-nginx
    image: nginx:latest 
    ports: 
    - containerPort: 80
  	#配置存活探针,每五秒钟执行一次探测容器80端口是否准备就绪
    #而第一次探测执行前先等待10秒，留出必要的初始化时间
    livenessProbe:
      tcpSocket:
        #port: 8080
        port: 80
      initialDelaySeconds: 10
      periodSeconds: 5
    readinessProbe:
      httpGet:
        path: /abcde
        #path: /
        port: 80
        httpHeaders:
        - name: Custom-Header
          value: Awesome
      initialDelaySeconds: 3
      periodSeconds: 3      
EOF

kubectl apply -f /etc/k8s/nginx-pod.yaml
kubectl describe pod pod-nginx

kubectl get pods
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>异常情况 <ul><li>存活探针检测失败-&gt;反复重启尝试恢复</li><li>就绪探针检测失败，不会对外暴露服务,READY状态为0/1 ，没有对外暴露服务，但该POD不会自动重启</li></ul></li></ul><h1 id="pod如何对外暴露" tabindex="-1"><a class="header-anchor" href="#pod如何对外暴露"><span>Pod如何对外暴露</span></a></h1><ul><li>利用hostNetwork选项暴露端口:一次性可以暴露多个端口，且与容器端口保持一致，但会出现端口冲突可能</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>mkdir /etc/k8s
cat &gt; /etc/k8s/nginx-pod.yaml &lt;&lt;-&#39;EOF&#39;
#API版本号，固定写v1即可
apiVersion: v1 
#创建对象类型，Pod代表该YAML要创建一个pod
kind: Pod 
#元数据，描述pod的辅助信息，后面用于
metadata: 
	#k8s管理pod的名称
  name: pod-nginx-0
#Spec用于设置容器、镜像等关键选项
spec: 
  nodeName: node0
  #配置容器信息
  containers: 
    #容器名称
  - name: container-nginx
    #镜像名称
    image: nginx:latest 
    #容器内部暴露的端口号，即expose
    ports: 
    #nginx容器默认对外暴露80端口
    - containerPort: 80
      hostPort: 8000
    - containerPort: 443
      hostPort: 8443
---
#API版本号，固定写v1即可
apiVersion: v1 
#创建对象类型，Pod代表该YAML要创建一个pod
kind: Pod 
#元数据，描述pod的辅助信息，后面用于
metadata: 
	#k8s管理pod的名称
  name: pod-nginx-1
#Spec用于设置容器、镜像等关键选项
spec: 
  nodeName: node1
  #配置容器信息
  containers: 
    #容器名称
  - name: container-nginx
    #镜像名称
    image: nginx:latest 
    #容器内部暴露的端口号，即expose
    ports: 
    #nginx容器默认对外暴露80端口
    - containerPort: 80
      hostPort: 8000
    - containerPort: 443
      hostPort: 8443
EOF
cd /etc/k8s
kubectl delete -f nginx-pod.yaml
kubectl apply -f nginx-pod.yaml

kubectl get pods -o wide
curl 192.168.31.231:8000

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>利用hostPort选项暴露端口:需要手动声明对外暴露的端口号</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>mkdir /etc/k8s
cat &gt; /etc/k8s/nginx-pod.yaml &lt;&lt;-&#39;EOF&#39;
#API版本号，固定写v1即可
apiVersion: v1 
#创建对象类型，Pod代表该YAML要创建一个pod
kind: Pod 
#元数据，描述pod的辅助信息，后面用于
metadata: 
	#k8s管理pod的名称
  name: pod-nginx-0
#Spec用于设置容器、镜像等关键选项
spec: 
  nodeName: node0
  #配置容器信息
  containers: 
    #容器名称
  - name: container-nginx
    #镜像名称
    image: nginx:latest 
    #容器内部暴露的端口号，即expose
    ports: 
    #nginx容器默认对外暴露80端口
    - containerPort: 80
      hostPort: 8000
    - containerPort: 443
      hostPort: 8443
---
#API版本号，固定写v1即可
apiVersion: v1 
#创建对象类型，Pod代表该YAML要创建一个pod
kind: Pod 
#元数据，描述pod的辅助信息，后面用于
metadata: 
	#k8s管理pod的名称
  name: pod-nginx-1
#Spec用于设置容器、镜像等关键选项
spec: 
  nodeName: node1
  #配置容器信息
  containers: 
    #容器名称
  - name: container-nginx
    #镜像名称
    image: nginx:latest 
    #容器内部暴露的端口号，即expose
    ports: 
    #nginx容器默认对外暴露80端口
    - containerPort: 80
      hostPort: 8000
    - containerPort: 443
      hostPort: 8443
EOF
cd /etc/k8s
kubectl delete -f nginx-pod.yaml
kubectl apply -f nginx-pod.yaml

kubectl get pods -o wide
curl 192.168.31.231:8000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="deployment-部署介绍" tabindex="-1"><a class="header-anchor" href="#deployment-部署介绍"><span>Deployment 部署介绍</span></a></h1><ul><li>应用程序源码被编译打包为容器，并被装入一个Pod中在Kubernetes运行。不过，Pod没有自愈能力，不能扩缩容，也不支持方便的升级和回滚。而Deployment可以。因此，建议绝大多数情况下采用Deployment来部署Pod。</li><li>Deployment主要用于部署无状态服务，是最常用的Pod控制器，一般用于管理公司中无状态的微服务，例如Config-Server注册中心、Zuul网关、SpringBoot微服务框架等，Deployment可以管理多个副本的Pod，实现无缝迁移、自动扩容缩容、自动灾难恢复、一键回滚功能等。</li><li>无状态服务:不会在本地存储持久化数据.多个服务实例对于同一个用户请求的响应结果是完全一致的.这种多服务实例之间是没有依赖关系,比如web应用,在k8s控制器 中动态启停无状态服务的pod并不会对其它的pod产生影响.<br> ​- 有状态服务:需要在本地存储持久化数据,典型的是分布式数据库的应用,分布式节点实例之间有依赖的拓扑关系.比如,主从关系. 如果K8S停止分布式集群中任 一实例pod,就可能会导致数据丢失或者集群的crash.</li><li>Deployment是一种完全成熟的Kubernetes API对象。因此可以在清单文件中定义它，并POST到API Server端。Deployment在底层利用了另一种名为ReplicaSet的对象。虽然并不建议直接操作ReplicaSet，不过了解其关系是比较重要的。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  selector:
    matchLabels:
      app: nginx
  replicas: 3
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:alpine
        ports:
        - containerPort: 80
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>扩展话题：Replication Controller(RC) vs ReplicaSet(RS)</li><li>Replication Controller（RC）:使用RC可以使Pod副本数达到指定数量，确保一个Pod或者一组同类Pod总是可用的.如果存在的Pod大于了设置的数量，那么RC将会终止多余的Pod，相反，如果小于设置的数量，RC则会启动一些Pod以达到设置的数量.和手动创建Pod不同，使用RC维护的Pod在失败、删除、终止时会自动替换，因此就算所需的应用程序只需要一个Pod，也应该使用RC或者其他的方式进行管理.RC类似于进程管理程序，但是RC不是监视单个节点上的各个进程，而是监视多个节点上的多个Pod.</li><li>ReplicaSet（RS）:RS是支持基于集合的标签选择器的新一代RC，RS主要作用于Deployment协调创建、删除、更新Pod，和RC的区别是，RS支持标签选择器在实际应用中，RS可以单独使用，但是一般使用Deployment来自动管理RS，除非自定义的Pod不需要更新或者其他编排等</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>apiVersion: v1
kind: ReplicationController
metadata:
 name: nginx
spec:
 replicas: 3
 selector:
  app: nginx
 template:
  metadata:
   name: nginx
   labels:
     app: nginx
  spec:
   containers:
   - name: nginx
     image: nginx
     ports:
     - containerPort: 80
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="yaml构建deployment部署脚本" tabindex="-1"><a class="header-anchor" href="#yaml构建deployment部署脚本"><span>YAML构建Deployment部署脚本</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>mkdir /etc/k8s
cat &gt; /etc/k8s/deploy-nginx.yaml &lt;&lt;-&#39;EOF&#39;
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
  replicas: 5
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
EOF
kubectl delete -f /etc/k8s/deploy-nginx.yaml
kubectl apply -f /etc/k8s/deploy-nginx.yaml

# 获取目前所有部署概况
kubectl get deploy
● NAME：集群中Deployment的名称；
● READY：Pod就绪个数和总副本数；
● UP-TO-DATE：显示已达到期望状态的被更新的副本数；
● AVAILABLE：显示用户可以使用的应用程序副本数，当前为0，说明目前还没有达到期望的Pod；
● AGE：显示应用程序运行的时间。

# 查看具体部署详情
kubectl describe deploy deploy-nginx

kubectl get pods -o wide  --show-labels
kubectl describe pod deploy-nginx-774c78fcfc-4z9hn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="零停机保障-滚动更新策略与设置" tabindex="-1"><a class="header-anchor" href="#零停机保障-滚动更新策略与设置"><span>零停机保障-滚动更新策略与设置</span></a></h1><ul><li>Kubernetes 支持 RollingUpdate 策略以逐渐用新的 pod 替换旧的 pod，同时继续为客户端提供服务而不会导致停机。要执行滚动更新部署：</li><li>没有原始的YAML文档时,kubectl edit deploy deploy-nginx --record</li><li>拥有原始YAML文档时,滚动更新期望状态是Pod数量为4个副本，那么maxSurge:0的意思是在更新过程中，Pod数量不能超过4个，而maxUnavailable:1的意思同一时间不可用状态POD数量最多为1个。导致的结果就是，在滚动更新的过程中，最多只能同时更新1个Pod（4-3=1）,如果maxSurge:1的意思是在更新过程中，Pod数量不能超过4+1=5个，而maxUnavailable:1的意思同一时间可用状态POD数量最多为4-1=3个。导致的结果就是，在滚动更新的过程中，最多只能同时更新2个Pod（5-3=2）</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>mkdir /etc/k8s
cat &gt; /etc/k8s/deploy-nginx.yaml &lt;&lt;-&#39;EOF&#39;
apiVersion: apps/v1
kind: Deployment
metadata:
  name: deploy-nginx
spec:
  selector:
    matchLabels:
      app: nginx
	#滚动更新动作间隔10s
  minReadySeconds: 10 
  strategy: 
    #使用滚动更新策略升级
    type: RollingUpdate 
    rollingUpdate: 
    	#最多允许出现1个不可用pod
      maxUnavailable: 1 
    	#不允许溢出，Pod总量最多只能4个
      maxSurge: 0 
  replicas: 4
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
EOF
kubectl delete -f /etc/k8s/deploy-nginx.yaml
kubectl apply -f /etc/k8s/deploy-nginx.yaml  --record


kubectl rollout status deploy deploy-nginx
部署的负载均衡
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="部署pod的扩容与缩容" tabindex="-1"><a class="header-anchor" href="#部署pod的扩容与缩容"><span>部署POD的扩容与缩容</span></a></h1><ul><li>scale实现静态扩容与缩容</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>kubectl scale deploy deploy-nginx --replicas=4
kubectl get pods
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>kube-scheduler调度:默认配置使用的就是kube-scheduler调度组件，我们下面例子启动三个Pod，看分别被分配到哪个Node。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 创建资源配置清单
cat scheduler-pod.yaml

apiVersion: apps/v1
kind: Deployment
metadata:
  name: scheduler-deploy
spec:
  replicas: 3
  selector:
    matchLabels:
      app: scheduler-pod
  template:
    metadata:
      labels:
        app: scheduler-pod
    spec:
      containers:
      - image: busybox:latest
        name: scheduler-pod
# 使用kubectl创建资源对象
kubectl apply -f scheduler-pod.yaml
# 查看被kube-scheduler自动调度的Pod 两个Pod在Node03上，一个在Node02上
kubectl get pods -o wide | grep scheduler

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="回滚部署到指定版本" tabindex="-1"><a class="header-anchor" href="#回滚部署到指定版本"><span>回滚部署到指定版本</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 版本1.20
mkdir /etc/k8s
kubectl delete -f /etc/k8s/deploy-nginx.yaml
cat &gt; /etc/k8s/deploy-nginx-v.1.20.yaml &lt;&lt;-&#39;EOF&#39;
apiVersion: apps/v1
kind: Deployment
metadata:
  name: deploy-nginx
spec:
  selector:
    matchLabels:
      app: nginx
  replicas: 1
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: container-nginx
        image: nginx:1.20-alpine
        ports:
        - containerPort: 80
EOF
kubectl apply -f /etc/k8s/deploy-nginx-v.1.20.yaml --record

# 版本1.21
cat &gt; /etc/k8s/deploy-nginx-v.1.21.yaml &lt;&lt;-&#39;EOF&#39;
apiVersion: apps/v1
kind: Deployment
metadata:
  name: deploy-nginx
spec:
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
        image: nginx:1.21-alpine
        ports:
        - containerPort: 80
EOF
kubectl apply -f /etc/k8s/deploy-nginx-v.1.21.yaml  --record

# 版本1.22
cat &gt; /etc/k8s/deploy-nginx-v.1.22.yaml &lt;&lt;-&#39;EOF&#39;
apiVersion: apps/v1
kind: Deployment
metadata:
  name: deploy-nginx
spec:
  selector:
    matchLabels:
      app: nginx
  replicas: 3
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: container-nginx
        image: nginx:1.22-alpine
        ports:
        - containerPort: 80
EOF
kubectl apply -f /etc/k8s/deploy-nginx-v.1.22.yaml  --record


# 查看版本历史
kubectl rollout history deploy deploy-nginx
REVISION  CHANGE-CAUSE
1         kubectl apply --filename=/etc/k8s/deploy-nginx-v.1.20.yaml --record=true
2         kubectl apply --filename=/etc/k8s/deploy-nginx-v.1.21.yaml --record=true
3         kubectl apply --filename=/etc/k8s/deploy-nginx-v.1.22.yaml --record=true

# 回滚到指定版本
kubectl rollout undo deploy deploy-nginx --to-revision=1

#yaml格式看所有历史版本yaml格式信息
kubectl rollout history deploy deploy-nginx -o yaml
#yaml格式看指定历史版本yaml格式信息
kubectl rollout history deploy deploy-nginx -o yaml --revision=3
#yaml格式导出指定历史版本yaml格式信息
kubectl rollout history deploy deploy-nginx -o yaml --revision=3 &gt; deploy-nginx-version-3.yaml

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="利用daemonset为新节点自动部署pod" tabindex="-1"><a class="header-anchor" href="#利用daemonset为新节点自动部署pod"><span>利用DaemonSet为新节点自动部署Pod</span></a></h1><ul><li>DaemonSet 确保全部（或者某些）节点上运行一个 Pod 的副本。 当有节点加入集群时， 也会为他们新增一个 Pod 。 当有节点从集群移除时，这些 Pod 也会被回收。删除 DaemonSet 将会删除它创建的所有 Pod。</li><li>DaemonSet 的一些典型用法： <ul><li>在每个节点上运行集群守护进程</li><li>在每个节点上运行日志收集守护进程</li><li>在每个节点上运行监控守护进程</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>mkdir /etc/k8s
cd /etc/k8s
cat &gt; ds-nginx.yaml &lt;&lt;-&#39;EOF&#39;
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: ds-nginx
spec:
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
        image: nginx:alpine
        ports:
        - containerPort: 80
EOF
kubectl delete -f ds-nginx.yaml
kubectl apply -f ds-nginx.yaml

为每一个节点自动部署一个Pod自动对外暴露Nginx服务，利用hostNetwork选项IP地址将变为真实节点IP
mkdir /etc/k8s
cd /etc/k8s
cat &gt; ds-nginx.yaml &lt;&lt;-&#39;EOF&#39;
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: ds-nginx
spec:
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      hostNetwork: true
      containers:
      - name: nginx
        image: nginx:alpine
        ports:
        - containerPort: 80
EOF
kubectl delete -f ds-nginx.yaml
kubectl apply -f ds-nginx.yaml
 
kubectl get pods -o wide
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="kubernetes-service的作用" tabindex="-1"><a class="header-anchor" href="#kubernetes-service的作用"><span>Kubernetes Service的作用</span></a></h1><ul><li>Service解决了什么问题？Pod的IP地址是不可靠的。在某个Pod失效之后，它会被一个拥有新的IP的Pod代替。Deployment扩容也会引入拥有新IP的Pod；而缩容则会删除Pod。这会导致大量的IP流失，因而Pod的IP地址是不可靠的。</li><li>Service（服务）指的是Kubernetes中用来为Pod提供稳定的网络服务的Service对象。就像Pod、ReplicaSet或Deployment，一个Kubernetes Service是指我们在部署文件中定义的API中的一个REST对象，最终需要POST到API Server。</li><li>为通过Kubernetes Deployment部署的一个简单的基于Pod的应用。可以看到客户端（也可能是应用的其他组件）无法通过一个可靠的网络端口来访问Pod。请记住，直接与独立的Pod进行通信是不明智的，因为这些Pod可能在进行扩容、升级、回滚或发生故障等过程中失效。同样的一个应用，不过其中增加了一个Service。这个Service可以将各个Pod与客户端一侧，通过固定的IP、DNS和端口连接起来。同时还可以对请求进行负载均衡。由于Service的存在，这些Pod可以扩容或缩容，可以出现故障，也可以进行更新或回滚。当这些操作发生的时候，前方的Service能够监测到这些变化，并且更新其关联的健康Pod的列表。同时，可以保持IP、DNS和暴露的端口是固定不变的。</li><li>可以将Service理解为具有固定的前端和动态的后端的中间层。所谓前端，主要由IP、DNS名称和端口组成，始终不变；而后端，则主要由一系列的Pod构成，会时常发生变化。<br> Label与松耦合</li><li>Service与Pod之间是通过Label和Label筛选器（selector）松耦合在一起的。Deployment和Pod之间也是通过这种方式进行关联的，这种松耦合方式是Kubernete的灵活性的关键。Service的Label筛选器可以匹配到3个拥有zone=prod和version=1的Pod。</li><li>Service为这3个Pod提供了稳定的网络连接方式：到达Service的请求会被转发到各个Pod，Service能够提供简单的负载均衡功能。对于Service与Pod的关联关系来说，所有匹配的Pod必须拥有Service Label筛选器中定义的所有Label。当然，所匹配的Pod也可以拥有其他不在Service Label筛选器中的Label。</li></ul><h1 id="yaml定义service服务脚本" tabindex="-1"><a class="header-anchor" href="#yaml定义service服务脚本"><span>YAML定义Service服务脚本</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>mkdir /etc/k8s
cat &gt; /etc/k8s/deploy-nginx.yaml &lt;&lt;-&#39;EOF&#39;
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
EOF
kubectl delete deploy deploy-nginx
kubectl apply -f /etc/k8s/deploy-nginx.yaml

[root@master0 k8s]# kubectl get deploy
NAME           READY   UP-TO-DATE   AVAILABLE   AGE
deploy-nginx   4/4     4            4           14h
[root@master0 k8s]# kubectl get pods --show-labels
NAME                            READY   STATUS    RESTARTS   AGE   LABELS
deploy-nginx-7fcfb9c499-64fdq   1/1     Running   0          14h   app=nginx,pod-template-hash=7fcfb9c499
deploy-nginx-7fcfb9c499-9478t   1/1     Running   0          14h   app=nginx,pod-template-hash=7fcfb9c499
deploy-nginx-7fcfb9c499-smcl2   1/1     Running   0          14h   app=nginx,pod-template-hash=7fcfb9c499
deploy-nginx-7fcfb9c499-vvq6s   1/1     Running   0          14h   app=nginx,pod-template-hash=7fcfb9c499

mkdir /etc/k8s
cat &gt; /etc/k8s/svc-nginx.yaml &lt;&lt;-&#39;EOF&#39;
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
EOF
kubectl delete svc svc-nginx
kubectl apply -f /etc/k8s/svc-nginx.yaml

[root@master0 ~]# kubectl get svc -o wide
NAME               TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)          AGE    SELECTOR
kubernetes         ClusterIP   172.16.32.1    &lt;none&gt;        443/TCP          4d2h   &lt;none&gt;
nginx-deployment   NodePort    172.16.32.46   &lt;none&gt;        9000:31090/TCP   4d2h   app=nginx
svc-nginx          NodePort    172.16.32.87   &lt;none&gt;        8000:30000/TCP   19s    app=my-nginx

[root@master0 ~]# kubectl describe svc svc-nginx 
Name:                     svc-nginx
Namespace:                default
Labels:                   &lt;none&gt;
Annotations:              &lt;none&gt;
Selector:                 app=my-nginx
Type:                     NodePort
IP Family Policy:         SingleStack
IP Families:              IPv4
IP:                       172.16.32.87
IPs:                      172.16.32.87
Port:                     &lt;unset&gt;  8000/TCP
TargetPort:               80/TCP
NodePort:                 &lt;unset&gt;  30000/TCP
Endpoints:                172.16.10.246:80,172.16.10.85:80,172.16.10.87:80
Session Affinity:         None
External Traffic Policy:  Cluster
Events:                   &lt;none&gt;

# 扩容缩容后的变化
#扩容到4个节点
[root@master0 ~]# kubectl scale deploy deploy-nginx --replicas=4
deployment.apps/deploy-nginx scaled
#查看PODS数量确认已扩容
[root@master0 ~]# kubectl get pods
NAME                            READY   STATUS    RESTARTS   AGE
deploy-nginx-7fcfb9c499-64fdq   1/1     Running   0          100s
deploy-nginx-7fcfb9c499-9478t   1/1     Running   0          100s
deploy-nginx-7fcfb9c499-smcl2   1/1     Running   0          14s
deploy-nginx-7fcfb9c499-vvq6s   1/1     Running   0          100s
#再次查看svc-nginx，发现Endpoints已经自动扩展
[root@master0 ~]# kubectl describe svc svc-nginx
Name:                     svc-nginx
Namespace:                default
Labels:                   &lt;none&gt;
Annotations:              &lt;none&gt;
Selector:                 app=nginx
Type:                     NodePort
IP Family Policy:         SingleStack
IP Families:              IPv4
IP:                       172.16.32.187
IPs:                      172.16.32.187
Port:                     &lt;unset&gt;  8000/TCP
TargetPort:               80/TCP
NodePort:                 &lt;unset&gt;  30000/TCP
Endpoints:                172.16.10.247:80,172.16.10.248:80,172.16.10.88:80 + 1 more...
Session Affinity:         None
External Traffic Policy:  Cluster
Events:                   &lt;none&gt;

[root@master0 ~]# curl 172.16.32.187:8000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>为什么是10与32两个网段</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>export LOCAL_IP=192.168.31.220
echo $LOCAL_IP

mkdir /etc/k8s
cd /etc/k8s
rm -f kubeadm-config.yaml
wget http://manongbiji.oss-cn-beijing.aliyuncs.com/ittailkshow/k8s/download/kubeadm-config.yaml
sed -i &#39;s/{LOCAL_IP}/&#39;$LOCAL_IP&#39;/&#39; kubeadm-config.yaml

[root@master0 k8s]# cat kubeadm-config.yaml 
apiVersion: kubeadm.k8s.io/v1beta3
bootstrapTokens:
- groups:
  - system:bootstrappers:kubeadm:default-node-token
  token: 7t2weq.bjbawausm0jaxury
  ttl: 24h0m0s
  usages:
  - signing
  - authentication
kind: InitConfiguration
localAPIEndpoint:
  advertiseAddress: 192.168.31.220
  bindPort: 6443
nodeRegistration:
  criSocket: unix:///var/run/containerd/containerd.sock
  name: k8s-master0
  taints:
  - effect: NoSchedule
    key: node-role.kubernetes.io/control-plane
---
apiServer:
  certSANs:
  - 192.168.31.220
  timeoutForControlPlane: 4m0s
apiVersion: kubeadm.k8s.io/v1beta2
certificatesDir: /etc/kubernetes/pki
clusterName: kubernetes
controlPlaneEndpoint: 192.168.31.220:6443
controllerManager: {}
dns:
  type: CoreDNS
etcd:
  local:
    dataDir: /var/lib/etcd
imageRepository: registry.cn-hangzhou.aliyuncs.com/google_containers
kind: ClusterConfiguration
kubernetesVersion: v1.26.0
networking:
  dnsDomain: cluster.local
  podSubnet: 172.16.10.0/24
  serviceSubnet: 172.16.32.0/24
scheduler: {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="service-四种服务类型" tabindex="-1"><a class="header-anchor" href="#service-四种服务类型"><span>Service 四种服务类型</span></a></h1><ul><li>ClusterIP(默认) <ul><li>Kubernetes将为ClusterIP服务分配一个集群内部ip地址。</li><li>服务只能在集群内访问。不能从集群外部请求服务 (pod)。</li><li>可以在服务定义文件中选择设置集群IP。</li><li>集群内的服务间通信。例如，应用程序的前端和后端组件之间的通信。</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>apiVersion: v1
kind: Service
metadata:
  name: my-backend-service
spec:
  type: ClusterIP # Optional field (default)
  clusterIP: 10.10.0.1 # within service cluster ip range
  ports:
  - name: http
    protocol: TCP
    port: 80
    targetPort: 8080
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>NodePort(不建议) <ul><li>自动创建节点端口服务路由到的ClusterIP服务。</li><li>它通过在ClusterIP之上添加群集范围的端口来公开群集外部的服务。</li><li>NodePort在静态端口 (NodePort) 上公开每个节点IP上的服务。每个节点代理移植到您的服务。因此，外部流量可以访问每个节点上的固定端口。这意味着对该端口上群集的任何请求都将转发到服务。</li><li>可以通过请求从集群外部联系NodePort服务<code>&lt;NodeIP&gt;:&lt;NodePort&gt;</code>.</li><li>节点端口必须在30000-32767范围内。手动为服务分配端口是可选的。如果未定义，Kubernetes会自动分配一个。</li><li>如果要显式选择节点端口，请确保该端口尚未被其他服务使用。</li><li>当您想要启用到您的服务的外部连接时， 使用NodePort使您可以自由设置自己的负载均衡解决方案，配置Kubernetes不完全支持的环境，甚至可以直接公开一个或多个nodes的ip。</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>apiVersion: v1
kind: Service
metadata:
  name: my-frontend-service
spec:
  type: NodePort
  selector:
    app: web
  ports:
  - name: http
    protocol: TCP
    port: 80
    targetPort: 8080
    nodePort: 30000 # 30000-32767, Optional field
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>LoadBalancer <ul><li>LoadBalancer服务是NodePort服务的扩展。自动创建外部负载均衡器路由到的NodePort和ClusterIP服务。</li><li>它将NodePort与基于云环境的负载器集成在一起。</li><li>它使用云提供商的负载均衡器从外部公开服务。</li><li>每个云提供商 (AWS、Azure、GCP等) 都有自己的本机负载均衡器实现。云提供商将创建一个负载均衡器，然后自动将请求路由到您的Kubernetes服务。</li><li>来自外部负载均衡器的流量指向后端pod。云提供商决定如何实现负载平衡。 负载均衡器的实际创建是异步发生的。</li><li>每次要向外界公开服务时，都必须创建一个新的LoadBalancer并获取ip地址。</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>apiVersion: v1
kind: Service
metadata:
  name: my-frontend-service
spec:
  type: LoadBalancer
  clusterIP: 10.0.171.123
  loadBalancerIP: 123.123.123.123
  selector:
    app: web
  ports:
  - name: http
    protocol: TCP
    port: 80
    targetPort: 8080
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,78),u=e("li",null,"ExternalName类型的服务将服务映射到DNS名称，而不是像my-Service这样的典型选择器。",-1),m=e("li",null,"您可以使用 'spec.externalName' 参数指定这些服务。",-1),b={href:"http://xn--foo-uc0ep96b.bar.example.com",target:"_blank",rel:"noopener noreferrer"},o=e("li",null,"通常用于在Kubernetes中创建服务，以表示外部数据存储，例如在Kubernetes外部运行的数据库。您可以使用该ExternalName服务 (作为本地服务) 当pod从一个命名空间与另一个命名空间中的服务进行对话。",-1),p=i(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>apiVersion: v1
kind: Service
metadata:
  name: svc-app
spec:
  type: ExternalName
  externalName: svc-mysql.ns-db.svc.cluster.local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="service与kube-proxy实现原理" tabindex="-1"><a class="header-anchor" href="#service与kube-proxy实现原理"><span>Service与Kube-Proxy实现原理</span></a></h1><ul><li>Kubernetes 网络代理在每个节点上运行。网络代理反映了每个节点上 Kubernetes API 中定义的服务，并且可以执行简单的 TCP、UDP 和 SCTP 流转发，或者在一组后端进行 循环 TCP、UDP 和 SCTP 转发。</li><li>kube-proxy 监视 Kubernetes 控制平面，获知对 Service 和 EndpointSlice 对象的添加和删除操作。 对于每个 Service，kube-proxy 会添加 iptables 规则，这些规则捕获流向 Service 的 clusterIP 和 port 的流量， 并将这些流量重定向到 Service 后端集合中的其中之一。 对于每个端点，它会添加指向一个特定后端 Pod 的 iptables 规则。</li><li>默认情况下，iptables 模式下的 kube-proxy 会随机选择一个Endpoint。</li><li>使用 iptables 处理流量的系统开销较低，因为流量由 Linux netfilter 处理， 无需在用户空间和内核空间之间切换。这种方案也更为可靠。</li><li>默认 kube-proxy 以 iptables 模式运行，并且它选择的第一个 Pod 没有响应， 那么连接会失败。你可以使用 Pod 就绪探针来验证后端 Pod 是否健康。 这样可以避免 kube-proxy 将流量发送到已知失败的 Pod 上。</li></ul><h1 id="利用pv与pvc实现存储解耦" tabindex="-1"><a class="header-anchor" href="#利用pv与pvc实现存储解耦"><span>利用PV与PVC实现存储解耦</span></a></h1><ul><li>单独使用Volume的弊端 <ul><li>存储接口与实现严重耦合，并没有职责分离</li><li>Volume卷并没有被K8S有效管理</li><li>难以进行数据迁移</li><li>无法进行更细粒度的控制，如（大小、是否只能被单个Pod挂载、读写控制级别）</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>apiVersion: v1 
kind: Pod 
metadata: 
  name: pod-nginx-0
spec: 
  nodeName: node0
  containers: 
  - name: ng0
    image: nginx:latest 
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
  - name: vol-logs
    hostPath:
      path: /usr/local/share/logs/ng0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>PV与PVC实现存储解耦</li><li>PersistentVolume (PV) 是群集中的一块存储，已由管理员配置或使用StorageClass动态配置。PV 持久卷和普通的 Volume 一样， 也是使用卷插件来实现的，只是它们拥有独立于任何使用 PV 的 Pod 的生命周期。 此 API 对象中记述了存储的实现细节，无论其背后是 NFS、iSCSI 还是特定于云平台的存储系统。</li><li>PersistentVolumeClaim (PVC) 是用户对存储的请求。它类似于Pod。Pod消耗Node节点资源，PVC消耗PV资源。Pod可以请求特定级别的资源 (CPU和内存)。PVC可以请求特定的存储空间尺寸和访问模式 (例如，它们可以挂载ReadWriteOnce、ReadOnlyMany或ReadWriteMany，参见AccessModes)。</li></ul><p>pv的访问模式（accessModes）有3种：<br> ● ReadWriteOnce:可读科写，但支持被单个node挂载<br> ● ReadOnlyMany:可以以读的方式被多个node挂载<br> ● ReadWriteMany:可以以读写的方式被多个node挂载</p><p>pv的回收策略（persistentVolumeReclaimPolicy）:<br> ● Retain，不清理, 保留 Volume（需要手动清理）<br> ● Recycle，删除数据，即 rm -rf /thevolume/*（只有 NFS 和 HostPath 支持）<br> ● Delete，删除存储资源，比如删除 AWS EBS 卷（只有 AWS EBS, GCE PD, Azure Disk 和 Cinder 支持）</p><p>在pvc绑定pv时通常根据俩个条件来绑定，一个时存储大小，另一个时访问模式</p><table><thead><tr><th>Volume Plugin</th><th>ReadWriteOnce</th><th>ReadOnlyMany</th><th>ReadWriteMany</th></tr></thead><tbody><tr><td>AWSElasticBlockStore</td><td>√</td><td></td><td></td></tr><tr><td>Glusterfs</td><td>√</td><td>√</td><td>√</td></tr><tr><td>HostPath</td><td>√</td><td></td><td></td></tr><tr><td>NFS</td><td>√</td><td>√</td><td>√</td></tr></tbody></table><ul><li>搭建</li><li>主节点上</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>yum install -y nfs-utils rpcbind
systemctl enable nfs
rm -f /var/pv/mysql
mkdir -p /var/pv/mysql
chmod 755 /var/pv/mysql

cat &gt; /etc/exports &lt;&lt;-&#39;EOF&#39;
/var/pv/mysql  *(rw,async,no_root_squash)
EOF

systemctl restart rpcbind
systemctl enable rpcbind
systemctl restart nfs
systemctl enable nfs


mkdir /etc/k8s
cat &gt; /etc/k8s/pv-mysql.yaml &lt;&lt;-&#39;EOF&#39;
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
        server: 192.168.31.220
EOF
kubectl delete -f /etc/k8s/pv-mysql.yaml 
kubectl apply -f /etc/k8s/pv-mysql.yaml 

[root@master0 ~]# kubectl get pv -o wide
NAME       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS      CLAIM   STORAGECLASS   REASON   AGE     VOLUMEMODE
pv-mysql   10Gi       RWO            Recycle          Available           pv-mysql                2m23s   Filesystem

# 查看细节
kubectl describe pv pv-mysql

# 创建pvc
cat &gt; /etc/k8s/pvc-mysql.yaml &lt;&lt;-&#39;EOF&#39;
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
EOF
kubectl delete -f /etc/k8s/pvc-mysql.yaml 
kubectl apply -f /etc/k8s/pvc-mysql.yaml 

[root@master0 k8s]# kubectl get pvc -o wide
NAME        STATUS   VOLUME     CAPACITY   ACCESS MODES   STORAGECLASS   AGE   VOLUMEMODE
pvc-mysql   Bound    pv-mysql   10Gi       RWO            pv-mysql       10s   Filesystem

[root@master0 k8s]# kubectl get pv
NAME       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM               STORAGECLASS   REASON   AGE
pv-mysql   10Gi       RWO            Recycle          Bound    default/pvc-mysql   pv-mysql                10m

[root@master0 k8s]# kubectl describe pvc pvc-mysql
Name:          pvc-mysql
Namespace:     default
StorageClass:  pv-mysql
Status:        Bound
Volume:        pv-mysql
Labels:        &lt;none&gt;
Annotations:   pv.kubernetes.io/bind-completed: yes
               pv.kubernetes.io/bound-by-controller: yes
Finalizers:    [kubernetes.io/pvc-protection]
Capacity:      10Gi
Access Modes:  RWO
VolumeMode:    Filesystem
Used By:       &lt;none&gt;
Events:        &lt;none&gt;

# 创建mysql实例
cat &gt; /etc/k8s/deploy-mysql.yml &lt;&lt;-&#39;EOF&#39;
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
EOF
kubectl delete -f /etc/k8s/deploy-mysql.yml
kubectl apply -f /etc/k8s/deploy-mysql.yml

[root@master0 k8s]# kubectl get deploy -o wide
NAME           READY   UP-TO-DATE   AVAILABLE   AGE     CONTAINERS   IMAGES    SELECTOR
deploy-mysql   1/1     1            1           3m58s   mysql        mysql:8   app=mysql

[root@master0 k8s]# kubectl get pv -o wide
NAME       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM               STORAGECLASS   REASON   AGE   VOLUMEMODE
pv-mysql   10Gi       RWO            Recycle          Bound    default/pvc-mysql   pv-mysql                27m   Filesystem

[root@master0 k8s]# kubectl get pvc -o wide
NAME        STATUS   VOLUME     CAPACITY   ACCESS MODES   STORAGECLASS   AGE   VOLUMEMODE
pvc-mysql   Bound    pv-mysql   10Gi       RWO            pv-mysql       24m   Filesystem

[root@master0 k8s]# kubectl describe pvc pvc-mysql
Name:          pvc-mysql
Namespace:     default
StorageClass:  pv-mysql
Status:        Bound
Volume:        pv-mysql
Labels:        &lt;none&gt;
Annotations:   pv.kubernetes.io/bind-completed: yes
               pv.kubernetes.io/bound-by-controller: yes
Finalizers:    [kubernetes.io/pvc-protection]
Capacity:      10Gi
Access Modes:  RWO
VolumeMode:    Filesystem
Used By:       deploy-mysql-85dddbc486-cvd5r &lt;=已绑定Pod
Events:        &lt;none&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>工作节点</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>yum install -y nfs-utils
# 查看主节点挂载
showmount -e 192.168.31.220
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function g(y,P){const l=d("ExternalLinkIcon");return a(),v("div",null,[t,e("ul",null,[e("li",null,[n("ExternalName "),e("ul",null,[u,m,e("li",null,[n("它通过返回CNAME记录及其值，将服务映射到externalName字段的内容 ("),e("a",b,[n("例如foo.bar.example.com"),r(l)]),n(")。它不会建立任何形式的代理。")]),o])])]),p])}const h=s(c,[["render",g],["__file","kubernetes.html.vue"]]),f=JSON.parse('{"path":"/backend/containerservice/kubernetes.html","title":"Kubernetes","lang":"zh-CN","frontmatter":{"title":"Kubernetes","date":"2023-01-01T00:00:00.000Z","tags":"Kubernetes","categories":"运维","description":"docker k8s介绍 Kubernetes（读作koo-ber-net-eez）一词来源于希腊语“舵手”——轮船的掌舵之人。Kubernetes经常被写作K8s。其中的数字8替代了K和s中的8个字母——这一点倒是方便了发推，也方便了像我这样懒惰的人。 Kubernetes通过Go语言编写而成，开源在GitHub上（项目名为kubernetes/Ku...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/containerservice/kubernetes.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"Kubernetes"}],["meta",{"property":"og:description","content":"docker k8s介绍 Kubernetes（读作koo-ber-net-eez）一词来源于希腊语“舵手”——轮船的掌舵之人。Kubernetes经常被写作K8s。其中的数字8替代了K和s中的8个字母——这一点倒是方便了发推，也方便了像我这样懒惰的人。 Kubernetes通过Go语言编写而成，开源在GitHub上（项目名为kubernetes/Ku..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/799af35cbeb4cad30b9f7.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-18T06:56:35.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-18T06:56:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Kubernetes\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/799af35cbeb4cad30b9f7.jpg\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-18T06:56:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[],"git":{"createdTime":1729234595000,"updatedTime":1729234595000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":44.73,"words":13419},"filePathRelative":"backend/containerservice/kubernetes.md","localizedDate":"2023年1月1日","excerpt":"<p>docker</p>\\n<!--more-->\\n<!-- TOC -->\\n<h1>k8s介绍</h1>\\n<ul>\\n<li>Kubernetes（读作koo-ber-net-eez）一词来源于希腊语“舵手”——轮船的掌舵之人。Kubernetes经常被写作K8s。其中的数字8替代了K和s中的8个字母——这一点倒是方便了发推，也方便了像我这样懒惰的人。</li>\\n<li>Kubernetes通过Go语言编写而成，开源在GitHub上（项目名为kubernetes/Kubernetes）</li>\\n<li>Kubernetes和Docker是两个互补的技术。比如，通常人们会使用Docker进行应用的开发，然后用Kubernetes在生产环境中对应用进行编排。在这样的模式中，开发者使用自己喜欢的语言编写代码，然后用Docker进行打包、测试和交付。但是最终在测试环境或生产环境中运行的过程是由Kubernetes来完成的。</li>\\n<li>k8s类似于云上的操作系统（OS）当在云上安装Kubernetes时，它会对云上的资源进行抽象，并对多种云原生微服务应用进行调度。</li>\\n</ul>","autoDesc":true}');export{h as comp,f as data};
