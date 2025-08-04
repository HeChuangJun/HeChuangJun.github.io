import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as c,c as p,a as n,b as s,d as e,e as i}from"./app-7KT7HDzT.js";const o={},r=i(`<h2 id="devops" tabindex="-1"><a class="header-anchor" href="#devops"><span>DevOps</span></a></h2><p>Development（开发）和 Operations（运维）的组合，是⼀种⽅法论，是⼀组过程、⽅法与系统的统称，⽤于促进应⽤开发DEV、应⽤运维OPS和质量保障（QA）部⻔之间的沟通、协作与整合，以期打破传统开发和运营之间的壁垒和鸿沟；<br> 通过⾃动化软件交付和架构变更的流程，来使得构建、测试、发布软件能够更加地快捷、频繁和可靠；具体来说，就是在软件交付和部署过程中提⾼沟通与协作的效率，旨在更快、更可靠的的发布更⾼质量的产品；<br> DevOps并不指代某⼀特定的软件⼯具或软件⼯具组合；各种⼯具软件或软件组合可以实现 DevOps 的概念⽅法，与软件开发中设计到的 OOP、AOP、IOC（或DI）等类似，是⼀种理论或过程或⽅法的抽象或代称。当下容器化技术与K8S是DevOps的核⼼</p><h2 id="ci-cd" tabindex="-1"><a class="header-anchor" href="#ci-cd"><span>CI/CD</span></a></h2><p>通过将⾃动化引⼊应⽤程序开发阶段来频繁向客户交付应⽤程序的⽅法。主要概念是持续集成、持续交付和持续部署。<br> 解决集成新代码可能给开发和运营团队带来的问题（⼜名“集成地狱”）的解决⽅案。<br> CI指持续集成，开发⼈员的⾃动化过程。成功的CI指对应⽤程序的新代码更改会定期构建、测试并合并到共享存储库。解决同时开发的应⽤程序有太多分⽀可能相互冲突的问题的解决⽅案。<br> CD指持续交付(Continuous Delivery)/持续部署(Continuous Deployment)，两者都是关于⾃动化流⽔线的进⼀步阶段，但有时会单独使⽤它们来说明正在发⽣的⾃动化程度。持续交付意味着开发⼈员对应⽤程序的更改会⾃动进⾏错误测试并上传到存储库（如 GitHub 或容器注册表），然后运维团队可以将它们部署到实时⽣产环境中。这是对开发团队和业务团队之间可⻅性和沟通不佳问题的解决⽅案。⽬的是确保以最少的努⼒部署<br> 新代码。<br> 持续部署指⾃动将开发⼈员的更改从存储库发布到⽣产环境，供客户使⽤。减少⼈⼯部署。通过⾃动化管道中的下⼀阶段来构建持续交付的优势。</p><p>持续集成 (CI) 帮助开发⼈员更频繁地将他们的代码更改合并回共享分⽀或“主⼲”。合并开发⼈员对应⽤程序的更改后，将通过⾃动构建应⽤程序并运⾏不同级别的⾃动化测试（通常是单元测试和集成测试）来验证这些更改，以确保更改不会破坏应⽤程序。这意味着测试从类和函数到构成整个应⽤程序的不同模块的所有内容。如果⾃动化测试发现新代码和现有代码之间存在冲突，CI可以更轻松地快速、频繁地修复这些错误。</p><p>持续交付CD：⾃动将经过验证的代码发布到存储库。⽬标是拥有⼀个始终准备好部署到⽣产环境的代码库。在持续交付中，从合并代码更改到交付⽣产就绪版本的每个阶段都涉及测试⾃动化和代码发布⾃动化。在该过程结束时，运营团队能够快速轻松地将应⽤程序部署到⽣产环境。</p><p>持续部署CD：⾃动将⽣产就绪的构建发布到代码存储库，⾃动将应⽤程序发布到⽣产环境。因为在⽣产前的流⽔线阶段没有⼈⼯⻔，依赖于精⼼设计的测试⾃动化。<br> 持续部署意味着开发⼈员对云应⽤程序的更改可以在编写后⼏分钟内⽣效（假设通过了⾃动化测试）。使得持续接收和整合⽤户反馈变得更容易。降低了应⽤程序部署的⻛险，从⽽更容易以⼩块的形式发布对应⽤程序的更改，⽽不是⼀次全部发布。</p><p>代码上传gitlab --&gt; 触发jenkins构建--&gt; 拉取项目、maven构建jar包、基于项目内的dockerfile进行docker build ---&gt; 产出物docker镜像推送至harbor---&gt;镜像地址等一些常规数据渲染至k8s的资源对象清单---&gt;提交apiserver ---&gt;jenkins控制台打印访问地址</p><h2 id="helm-与-helm-chart" tabindex="-1"><a class="header-anchor" href="#helm-与-helm-chart"><span>Helm 与 Helm Chart</span></a></h2><p><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw6b453f16568a9dcfabe40633c508c6d0.png" alt="cicd3.png"><br> 想要部署应⽤程序到云上，⾸先要准备好需要的环境，打包成 Docker 镜像，把镜像放在部署⽂件 (Deployment) 中、配置服务 (Service)、应⽤所需的账户 (ServiceAccount) 及权限 (Role)、命<br> 名空间 (Namespace)、密钥信息 (Secret)、可持久化存储(PersistentVolumes) 等资源。编写⼀系列互相相关的 YAML 配置⽂件，部署在 Kubernetes 集群上。</p><p>基于 Kubernetes 的应⽤包管理⼯具Helm<br> 第1阶段：开发⼈员对代码进⾏更改并在本地进⾏测试，然后将更改推送到 git，这将触发 Jenkins 管道。Pipeline 将构建新的 docker 镜像并使⽤ git describe 命令的输出对其进⾏标记，并将其推送到 docker注册中⼼仓库。Helm Chart代码中更新了相同的标签，并且Helm Chart代码也被推送到Chart仓库。最后，部署是通过 Jenkins 在开发的Namespace中针对新版本的Chart运⾏ helm update命令来完成开发环境部署。最后，开发者提出拉取请求<br> 第 2 阶段：Reviewer 审查代码并在满意后接受并合并到发布分⽀。版本号也可以通过删除所有后缀来更新，⽅法是根据其主要/次要/路径版本增加它，使⽤新标签创建新的 Docker Image镜像，并且使⽤相同的标签更新 helm chart。Jenkins 然后在 staging namespace中运⾏helm update 以便其他⼈可以验证<br> 第 3 阶段：如果 staging 看起来不错，最后⼀步是将更改推送到⽣产中。在这种情况下，Jenkins 管道不会创建新的Docker Image镜像，它只使⽤最后⼀个 helm 图表版本并更新⽣产命名空间中的图表</p><h2 id="安装部署过程" tabindex="-1"><a class="header-anchor" href="#安装部署过程"><span>安装部署过程</span></a></h2><p><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwd28f80b73bea27afa3b2469ae8a16ec1.png" alt="CICD.png"><br><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw217f4220247230aa56c65280692cb450.png" alt="cicd2.png"></p><p>192.168.1.155：harbor服务器（不能通过macvlan网络部署、端口映射一坨屎） Docker、Docker compose、harbor<br> 192.168.1.176：生产服务器 Docker、Docker compose、jdk<br> 192.168.1.184：jenkins（192.168.1.241:8080）、gitlab（192.168.1.240）服务器（通过macvlan网络，注意不能端口映射） Docker、Docker Compose、jdk、mvn。<br> 192.168.1.177 kubeode服务器</p><h2 id="_184安装docker、docker-compose、jdk" tabindex="-1"><a class="header-anchor" href="#_184安装docker、docker-compose、jdk"><span>184安装Docker、Docker Compose、jdk</span></a></h2><ul><li>推荐配置：2核CPU，8G内存，CentOS7</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 启用 IP 转发，支持路由或容器集群间通信。</span>
<span class="token comment"># 优化虚拟内存区域映射数，支持高内存需求的应用（如 Elasticsearch）。</span>
<span class="token comment"># 临时关闭防火墙，以避免防火墙规则对网络调试的干扰。</span>
<span class="token function">cat</span> <span class="token operator">&gt;&gt;</span> /etc/sysctl.conf <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
net.ipv4.ip_forward=1
vm.max_map_count=655360
EOF</span>
<span class="token function">sysctl</span> <span class="token parameter variable">-p</span>
systemctl stop firewalld

<span class="token comment"># 安装底层工具</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils device-mapper-persistent-data lvm2

<span class="token comment"># 加⼊阿⾥云yum仓库提速docker下载过程</span>
<span class="token function">sudo</span> yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

<span class="token comment"># 更新⼀下仓库的源信息</span>
<span class="token function">sudo</span> yum makecache fast

<span class="token comment"># ⾃动安装下载Docker</span>
<span class="token function">sudo</span> yum <span class="token parameter variable">-y</span> <span class="token function">install</span> docker-ce

<span class="token comment"># 启动Docker服务</span>
<span class="token function">sudo</span> <span class="token function">service</span> <span class="token function">docker</span> start

<span class="token comment"># 验证docker是否启动成功</span>
<span class="token function">docker</span> version

<span class="token comment"># Aliyun加速镜像下载或者设置代理</span>
<span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker
<span class="token function">sudo</span> <span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
{
 &quot;registry-mirrors&quot;: [&quot;https://fskvstob.mirror.aliyuncs.com&quot;]
}
EOF</span>
<span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>

<span class="token comment"># 安装OpenJDK8+</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> java-1.8.0-openjdk-devel.x86_64
<span class="token function">sudo</span> <span class="token function">cat</span> <span class="token operator">&gt;&gt;</span> /etc/profile <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk
export JRE_HOME=$JAVA_HOME/jre
export CLASSPATH=$JAVA_HOME/lib:$JRE_HOME/lib:$CLASSPATH
export PATH=$JAVA_HOME/bin:$JRE_HOME/bin:$PATH
EOF</span>
<span class="token builtin class-name">source</span> /etc/profile
<span class="token builtin class-name">echo</span> <span class="token variable">$JAVA_HOME</span>


<span class="token comment"># 根据ifconfig 创建docker网络 开启Macvlan：使每个容器ip和端口独立，能在宿主机访问</span>
<span class="token function">docker</span> network create <span class="token parameter variable">-d</span> macvlan <span class="token punctuation">\\</span>
<span class="token parameter variable">--subnet</span><span class="token operator">=</span><span class="token number">192.168</span>.1.0/24 <span class="token punctuation">\\</span>
--ip-range<span class="token operator">=</span><span class="token number">192.168</span>.1.0/24 <span class="token punctuation">\\</span>
<span class="token parameter variable">--gateway</span><span class="token operator">=</span><span class="token number">192.168</span>.1.1 <span class="token punctuation">\\</span>
<span class="token parameter variable">-o</span> <span class="token assign-left variable">parent</span><span class="token operator">=</span>ens33 <span class="token punctuation">\\</span>
<span class="token parameter variable">-o</span> <span class="token assign-left variable">macvlan_mode</span><span class="token operator">=</span>bridge <span class="token punctuation">\\</span>
macvlan31

<span class="token comment"># 查看结果</span>
<span class="token function">ip</span> addr show macvlan0
<span class="token number">41</span>: macvlan0@ens33: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noqueue state UP group default qlen <span class="token number">1000</span>
    link/ether <span class="token number">36</span>:a4:b7:e0:8b:56 brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">192.168</span>.2.100/24 scope global macvlan0
        valid_lft forever preferred_lft forever
    inet6 <span class="token number">2409</span>:8a55:713:a450:34a4:b7ff:fee0:8b56/64 scope global mngtmpaddr dynamic 
        valid_lft 86370sec preferred_lft 86370sec
    inet6 fe80::34a4:b7ff:fee0:8b56/64 scope <span class="token function">link</span> 
        valid_lft forever preferred_lft forever
<span class="token comment"># 删除 ip addr del 192.168.1.100/24 dev macvlan0</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_184安装gitlab-相当于github-分配ip240-不要与主机和虚拟机ip冲突" tabindex="-1"><a class="header-anchor" href="#_184安装gitlab-相当于github-分配ip240-不要与主机和虚拟机ip冲突"><span>184安装gitlab（相当于github）分配ip240，不要与主机和虚拟机ip冲突</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 生成目录并授权</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/gitlab
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/log/gitlab
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/opt/gitlab
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> gitlab
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/gitlab
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /var/log/gitlab
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /var/opt/gitlab
<span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">755</span> /etc/gitlab
<span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">755</span> /var/log/gitlab
<span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">755</span> /var/opt/gitlab

<span class="token comment"># 安装gitlab容器</span>
<span class="token function">docker</span> run <span class="token parameter variable">--name</span> gitlab <span class="token punctuation">\\</span>
<span class="token parameter variable">--hostname</span> gitlab.example.com <span class="token punctuation">\\</span>
<span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
<span class="token parameter variable">--network</span> macvlan31 <span class="token parameter variable">--ip</span><span class="token operator">=</span><span class="token number">192.168</span>.1.240 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /etc/gitlab:/etc/gitlab <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /var/log/gitlab:/var/log/gitlab <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /var/opt/gitlab:/var/opt/gitlab <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> gitlab/gitlab-ce

<span class="token function">docker</span> logs <span class="token parameter variable">-f</span> gitlab

<span class="token comment"># 获得密码</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> gitlab <span class="token function">grep</span> <span class="token string">&#39;Password:&#39;</span> /etc/gitlab/initial_root_password
Password: HxWxngkN31ppwQ3kPKpJMpdqP/Z/c0eAepIZm+uGWDs<span class="token operator">=</span>

<span class="token comment"># 访问http://192.168.1.240</span>
<span class="token comment"># 账号 root</span>
<span class="token comment"># 密码 HxWxngkN31ppwQ3kPKpJMpdqP/Z/c0eAepIZm+uGWDs=</span>
<span class="token comment">#⽤户头像-&gt;Preferences-&gt;Password修改初始密码</span>
<span class="token comment">#username:root</span>
<span class="token comment">#password:12345678</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_184安装jenkins-分配ip241" tabindex="-1"><a class="header-anchor" href="#_184安装jenkins-分配ip241"><span>184安装Jenkins，分配ip241</span></a></h2><p>Jenkins:java语言开发，用于监控持续重复的工作，包括:持续的软件版本发布/测试项目，监控外部调用执行的工作。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local
<span class="token comment"># 安装jdk</span>
<span class="token function">wget</span> --no-check-certificate https://manongbiji.oss-cn-beijing.aliyuncs.com/ittailkshow/devops/download/jdk-8u341-linux-x64.tar.gz
<span class="token function">tar</span> zxvf jdk-8u341-linux-x64.tar.gz
<span class="token function">mv</span> jdk1.8.0_341 jdk
<span class="token function">rm</span> <span class="token parameter variable">-f</span> jdk-8u341-linux-x64.tar.gz

<span class="token builtin class-name">cd</span> /usr/local
<span class="token comment"># 安装maven</span>
<span class="token function">wget</span> --no-check-certificate https://manongbiji.oss-cn-beijing.aliyuncs.com/ittailkshow/devops/download/apache-maven-3.8.6-bin.tar.gz
<span class="token function">tar</span> zxvf apache-maven-3.8.6-bin.tar.gz
<span class="token function">mv</span> apache-maven-3.8.6 maven
<span class="token function">rm</span> <span class="token parameter variable">-f</span> apache-maven-3.8.6-bin.tar.gz
<span class="token builtin class-name">cd</span> /usr/local/maven/conf
<span class="token function">rm</span> <span class="token parameter variable">-f</span> settings.xml
<span class="token function">wget</span> --no-check-certificate https://manongbiji.oss-cn-beijing.aliyuncs.com/ittailkshow/devops/download/settings.xml
<span class="token comment"># 修改了以下内容</span>
<span class="token operator">&lt;</span>mirrors<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>mirror<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>id<span class="token operator">&gt;</span>alimaven<span class="token operator">&lt;</span>/id<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>aliyun maven<span class="token operator">&lt;</span>/name<span class="token operator">&gt;</span><span class="token operator">&lt;</span>url<span class="token operator">&gt;</span>https://maven.aliyun.com/repository/public<span class="token operator">&lt;</span>/url<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>mirrorOf<span class="token operator">&gt;</span>central<span class="token operator">&lt;</span>/mirror0f<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>/mirror<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/mirrors<span class="token operator">&gt;</span>

<span class="token comment"># 安装jenkins，记得修改jdk目录</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/jenkins/
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> jenkins
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /var/jenkins/
<span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> /var/jenkins/
<span class="token function">docker</span> run <span class="token parameter variable">--name</span> jenkins <span class="token punctuation">\\</span>
<span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
<span class="token parameter variable">--network</span> macvlan31 <span class="token parameter variable">--ip</span><span class="token operator">=</span><span class="token number">192.168</span>.1.241 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /var/jenkins/:/var/jenkins_home/ <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /usr/local/jdk:/usr/local/jdk <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /usr/local/maven:/usr/local/maven <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">JENKINS_UC</span><span class="token operator">=</span>https://mirrors.cloud.tencent.com/jenkins/ <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">JENKINS_UC_DOWNLOAD</span><span class="token operator">=</span>https://mirrors.cloud.tencent.com/jenkins/ <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> jenkins/jenkins:2.442-jdk17

<span class="token comment">#国内常⽤的Jenkins插件安装源</span>
<span class="token comment"># tencent https://mirrors.cloud.tencent.com/jenkins/</span>
<span class="token comment"># huawei https://mirrors.huaweicloud.com/jenkins/</span>
<span class="token comment"># tsinghua https://mirrors.tuna.tsinghua.edu.cn/jenkins/</span>
<span class="token comment"># ustc https://mirrors.ustc.edu.cn/jenkins/</span>
<span class="token comment"># bit http://mirror.bit.edu.cn/jenkins/</span>

<span class="token comment"># 查看密码</span>
<span class="token function">docker</span> logs <span class="token parameter variable">-f</span> jenkins

Jenkins initial setup is required. An admin user has been created and a password generated.
Please use the following password to proceed to installation:

dc6e3167a27e4823a043a10b9d96d240

This may also be found at: /var/jenkins_home/secrets/initialAdminPassword
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),d={href:"http://192.168.1.241:8080",target:"_blank",rel:"noopener noreferrer"},u=n("br",null,null,-1),m=n("img",{src:"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw894cd1ab73b89d804305120f03be7472.png",alt:"Jenkins1.png"},null,-1),b=n("br",null,null,-1),v=n("br",null,null,-1),k=n("br",null,null,-1),g=n("img",{src:"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwf9e5c23e2799829e5d0eb80cb7d09da4.png",alt:"Jenkins2.png"},null,-1),h=n("br",null,null,-1),f={href:"http://192.168.1.241:8080",target:"_blank",rel:"noopener noreferrer"},_=n("br",null,null,-1),S=n("img",{src:"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw9458b153267df7151387665288773778.png",alt:"Jenkins3.png"},null,-1),P=i(`<p>⾸⻚点击Manage Jenkins _&gt;Manage Plugins管理插件<br><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw6901d9039698f3db60fd0d3ecc1b9105.png" alt="Jenkins4.png"><br> 在可选插件栏-添加Git Parameter与Publish Over SSH 两款插件即可<br> 点击Download and install restart now等待重启，点击安装完成后重启Jenkins</p><p>系统管理-全局工具配置-设置jdk和maven的地址</p><h2 id="gitlab创建项目" tabindex="-1"><a class="header-anchor" href="#gitlab创建项目"><span>gitlab创建项目</span></a></h2><p><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwc0d68dcba05161530eb92796a3c74f66.png" alt="gitlab1.png"><br><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwe2242ee278419393f816207ace76918f.png" alt="gitlab2.png"><br><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwe1cbf985d35c8e2e0ca5e67e40e990ac.png" alt="gitlab3.png"></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 下载代码</span>
<span class="token function">git</span> clone http://192.168.1.240/root/springbootdemo.git

<span class="token comment"># 添加文件并提交</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;first-commit&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_176安装docker、docker、compose、jdk" tabindex="-1"><a class="header-anchor" href="#_176安装docker、docker、compose、jdk"><span>176安装docker、docker、Compose、jdk</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 安装OpenJDK8+</span>
<span class="token comment"># 2核CPU，最少4G内存，CentOS 7</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> java-1.8.0-openjdk-devel.x86_64
<span class="token function">sudo</span> <span class="token function">cat</span> <span class="token operator">&gt;&gt;</span> /etc/profile <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk
export JRE_HOME=$JAVA_HOME/jre
export CLASSPATH=$JAVA_HOME/lib:$JRE_HOME/lib:$CLASSPATH
export PATH=$JAVA_HOME/bin:$JRE_HOME/bin:$PATH
EOF</span>
<span class="token builtin class-name">source</span> /etc/profile
<span class="token builtin class-name">echo</span> <span class="token variable">$JAVA_HOME</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jekins设置" tabindex="-1"><a class="header-anchor" href="#jekins设置"><span>jekins设置</span></a></h2>`,8),y=n("br",null,null,-1),H=n("img",{src:"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwd411a36f1a52fee5fcfff29f3543e9dd.png",alt:"Jenkins5.png"},null,-1),E=n("br",null,null,-1),Y={href:"http://192.168.1.240/root/springbootdemo=",target:"_blank",rel:"noopener noreferrer"},x=n("br",null,null,-1),A=n("img",{src:"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw650cb8541a5a33da5e2b54f690d19ff2.png",alt:"Jenkins6.png"},null,-1),w=n("br",null,null,-1),q=i(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sh</span> /usr/local/maven/bin/mvn package
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw1e7e18679cfc3b2c59f0eb35413e3dc3.png" alt="Jenkins7.png" tabindex="0"><figcaption>Jenkins7.png</figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 拉取代码所在目录，因为之前Jenkins卷已经挂载到外面了</span>
<span class="token builtin class-name">cd</span> /var/jenkins/workspace
<span class="token function">ls</span>
springbootdemo
<span class="token comment"># 里面有target</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置176⽬标服务器，点击主界⾯系统管理的系统配置找到Public Over SSH，新增⼀个SSH Server<br> Name：Target-176<br> Hostname：192.168.1.176<br> Username：root<br> Remote Directory：/usr/local</p><p><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwba4b334d8e75d6d2d00e159a55ef9608.png" alt="Jenkins8.png"><br> 点击高级=&gt;勾选=&gt;Use password authentication, or use a different key=&gt;输入密码Password: root=&gt;保存<br><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwc5f5c31b85ffb74d64503fec10d91e8f.png" alt="Jenkins9.png"></p><p>选择构建后操作“Send build artifacts over SSH”向231服务器发布jar包并运⾏<br> SSH Server：<br> name：Target-176<br> Source files：target/*.jar<br> Exec command：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span><span class="token function">grep</span> <span class="token function">java</span> <span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-w</span> springbootdemo-0.0.1-SNAPSHOT.jar<span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token string">&#39;grep&#39;</span><span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token operator">|</span> <span class="token function">xargs</span> -i<span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
<span class="token function">sleep</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token function">nohup</span> <span class="token function">java</span> <span class="token parameter variable">-server</span> <span class="token parameter variable">-jar</span> /usr/local/target/springbootdemo-0.0.1-SNAPSHOT.jar <span class="token parameter variable">--server.port</span><span class="token operator">=</span><span class="token number">8888</span> <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,7),I=n("br",null,null,-1),R=n("img",{src:"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw9c5925213b115c86938d7bd9ba31b12e.png",alt:"Jenkins10.png"},null,-1),M=n("br",null,null,-1),D=n("br",null,null,-1),N=n("img",{src:"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwaeaa0f2f67553344a15e6860fe30c91a.png",alt:"Jenkins11.png"},null,-1),j=n("br",null,null,-1),z={href:"http://192.168.1.176",target:"_blank",rel:"noopener noreferrer"},C=n("br",null,null,-1),Z=i(`<h2 id="自动构建docker镜像" tabindex="-1"><a class="header-anchor" href="#自动构建docker镜像"><span>⾃动构建Docker镜像</span></a></h2><p>176安装docker</p><p>项目目录下创建docker文件夹并创建Dockerfile文件，用于构建镜像</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>FROM openjdk:8-slim
WORKDIR /usr/local
COPY springbootdemo-0.0.1-SNAPSHOT.jar <span class="token builtin class-name">.</span>
CMD <span class="token function">java</span> <span class="token parameter variable">-jar</span> springbootdemo-0.0.1-SNAPSHOT.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>确认并上传到gitlab</p><p>回到Jenkins，找到构建后操作，删除Exec command所有内容<br> 添加Remove prefix：target<br><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw765188861a04667c54a6b05fe4d514ee.png" alt="Jenkins12.png"><br> 在231服务器下额外新增⼀个Transfer Set 传输Dockerfile，并执⾏构建镜像启动容器的代码<br> Source files：docker/*<br> Remove prefix：docker<br> Exec command：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> test/springbootdemo:1.0 /usr/local/
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> springbootdemo
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">80</span>:8081 <span class="token parameter variable">--name</span><span class="token operator">=</span>springbootdemo test/springbootdemo:1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw7bf5e952a9c15ca327b58bc7b34043b2.png" alt="Jenkins13.png" tabindex="0"><figcaption>Jenkins13.png</figcaption></figure>`,8),J={href:"http://192.168.1.176:80",target:"_blank",rel:"noopener noreferrer"},T=i(`<h2 id="单独虚拟机安装部署harbor镜像仓库-等价于dockerhub" tabindex="-1"><a class="header-anchor" href="#单独虚拟机安装部署harbor镜像仓库-等价于dockerhub"><span>单独虚拟机安装部署Harbor镜像仓库(等价于dockerHub)</span></a></h2><p>Jenkins构建镜像推送到Harbor，目标服务器从Harbor下载镜像<br><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw3f060b0e1caf86f72695e27395cd595f.png" alt="Harbor.png"><br> 推荐2 CPU 4 GB 40 GB<br> 必装Docker engine、Docker Compose、Openssl<br> 安装Docker Compose，已安装，因为它在高版本是插件</p><p>下载离线harbor安装包</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local
<span class="token comment"># wget下载</span>
<span class="token function">wget</span> --no-check-certificate https://github.com/goharbor/harbor/releases/download/v1.10.14/harbor-offline-installer-v1.10.14.tgz
<span class="token comment"># 解压</span>
<span class="token function">tar</span> xzvf harbor-offline-installer-v2.12.2.tgz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改Habor核⼼配置⽂件harbor.yml<br> hostname：192.168.1.155<br> 注释掉https.*<br> 默认密码：Harbor12345<br> docker ps<br> 4e26ad58f858 goharbor/nginx-photon:v2.12.2 &quot;nginx -g &#39;daemon of…&quot; 12 minutes ago Up 12 minutes (healthy) 0.0.0.0:80-&gt;8080/tcp, :::80-&gt;8080/tcp nginx<br><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw009398c3d41768ea94b6b388a7971803.png" alt="Harbor1.png"></p><p>安装Harbor<br> ./install<br> Harbor由⼗多个容器组合构成，必须使⽤docker-compose才可以款速安装<br> 卸载docker compose down<br> 访问：<br> 192.168.1.155:80<br> ⽤户名：admin<br> 密码：Harbor12345<br><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw382b27c678c4e162eb89c7c4e3114613.png" alt="Harbor2.png"></p><p>Harbor新建镜像仓库<br> 项⽬名称：public<br> 访问级别：公开<br><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw5862ccb7d0abcfe390675234e9214854.png" alt="Harbor3.png"></p><p>在155Harbor服务器，修改daemon.json，增加harbor私有仓库地址，insecure-registries</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
{
 &quot;registry-mirrors&quot;: [],
 &quot;insecure-registries&quot;: [&quot;192.168.1.155:80&quot;]
}
EOF</span>
systemctl daemon-reload
systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按书写规范修改springbootdemo镜像格式：Harbor IP:Port/项⽬名/镜像名:Tag<br> 使⽤⽤户名、密码登录Harbor仓库并利⽤push命令推送本地镜像</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> images
<span class="token function">docker</span> tag 0e2577308988 <span class="token number">192.168</span>.1.155:80/public/springbootdemo:1.0
<span class="token function">docker</span> login <span class="token parameter variable">-u</span> admin <span class="token parameter variable">-p</span> Harbor12345 <span class="token number">192.168</span>.1.155:80
<span class="token function">docker</span> push <span class="token number">192.168</span>.1.155:80/public/springbootdemo:1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进⼊Harbor确认上传成功<br> 在176⽬标服务器修改私服地址</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
{
 &quot;registry-mirrors&quot;: [&quot;https://fskvstob.mirror.aliyuncs.com&quot;],
 &quot;insecure-registries&quot;: [&quot;192.168.1.155:80&quot;]
}
EOF</span>
systemctl daemon-reload
systemctl restart <span class="token function">docker</span>

<span class="token comment"># 执⾏pull拉取镜像</span>
<span class="token function">docker</span> pull <span class="token number">192.168</span>.1.155:80/public/myproject:1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>jenkins的构建后改成</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> <span class="token number">192.168</span>.1.155:80/public/springbootdemo:2.0 /usr/local/
<span class="token function">docker</span> login <span class="token parameter variable">-u</span> admin <span class="token parameter variable">-p</span> Harbor12345 <span class="token number">192.168</span>.1.155:80
<span class="token function">docker</span> push <span class="token number">192.168</span>.1.155:80/public/springbootdemo:2.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jenkins自动实现ci持续集成" tabindex="-1"><a class="header-anchor" href="#jenkins自动实现ci持续集成"><span>Jenkins⾃动实现CI持续集成</span></a></h2><p>确保155节点上登记了insecure-registries</p><p>在jenkins241系统设置中新增SSH Server：<br> name：Harbor-155<br> hostname：192.168.1.155<br> username：root<br> password：root<br> remote directory：/usr/local</p><p>在原有构建后操作176之前，新增Harbor155节点操作<br><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwe9d571ef16b6112760d87c15581b5b0c.png" alt="Jenkins14.png"><br> 向155传输Jar⽂件、Dockerfile，并构建、推送容器</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> <span class="token number">192.168</span>.1.155:80/public/springbootdemo:1.0 /usr/local/
<span class="token function">docker</span> login <span class="token parameter variable">-u</span> admin <span class="token parameter variable">-p</span> Harbor12345 <span class="token number">192.168</span>.1.155:80
<span class="token function">docker</span> push <span class="token number">192.168</span>.1.155:80/public/springbootdemo:1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>176目标改为只负责容器创建⼯作<br><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw14fb786b3c53b1f21f8e40c891f1ee8a.png" alt="Jenkins15.png"></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> springbootdemo
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">80</span>:8081 <span class="token parameter variable">--name</span><span class="token operator">=</span>springbootdemo <span class="token number">192.168</span>.1.155:80/public/springbootdemo:1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jenkins参数化构建多版本发布" tabindex="-1"><a class="header-anchor" href="#jenkins参数化构建多版本发布"><span>Jenkins参数化构建多版本发布</span></a></h2><p>解决固定版本号问题<br><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw1827643f0e8f386301f0fd0e5fb0b10b.png" alt="Jenkins16.png"><br> 参数化构建过程-&gt;Git参数<br> 编辑Git参数<br> 名称：tag<br> 描述：发布的版本号<br> 默认值：origin/master<br><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwa4620137b08167f2732eec8bd45dbd6c.png" alt="Jenkins17.png"><br> 在构建部分原本的package前新增Shell，现⾏checkout指定的版本，<br> $tag引⽤选择的版本号<br><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw7f13746d03f09837eb8eb4a15ddc9700.png" alt="Jenkins18.png"></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout <span class="token variable">$tag</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>原本155 Harbor仓库Exec command，将所有1.0改为$tag进⾏引⽤<br><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwf1e1f07bc082174b3dc0c915f88514f6.png" alt="Jenkins19.png"></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> <span class="token number">192.168</span>.1.155:80/public/springbootdemo:<span class="token variable">$tag</span> /usr/local/
<span class="token function">docker</span> login <span class="token parameter variable">-u</span> admin <span class="token parameter variable">-p</span> Harbor12345 <span class="token number">192.168</span>.1.155:80
<span class="token function">docker</span> push <span class="token number">192.168</span>.1.155:80/public/springbootdemo:<span class="token variable">$tag</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原本176 ⽬标服务器的Exec command位置，将1.0改为$tag<br><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw27b1f5b58bd4194ce5b7b2ff6fc47ff8.png" alt="Jenkins20.png"></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> springbootdemo
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">80</span>:8081 <span class="token parameter variable">--name</span><span class="token operator">=</span>springbootdemo <span class="token number">192.168</span>.1.155:80/public/springbootdemo:<span class="token variable">$tag</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Git新建Tag 1.0.0<br><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw27b1f5b58bd4194ce5b7b2ff6fc47ff8.png" alt="Jenkins20.png"><br> 此时会出现Build with Parameters，请选择1.0.1完成构建过程<br><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw017adbeaa20ffd838832968651dd5f9b.png" alt="Jenkins21.png"></p><h2 id="jenkins-pipeline流水线作业" tabindex="-1"><a class="header-anchor" href="#jenkins-pipeline流水线作业"><span>Jenkins Pipeline流⽔线作业</span></a></h2><p>Pipeline流⽔线提供了脚本化，按阶段步骤处理<br><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw0bf1c43524aca488e54ddf14c1dd8307.png" alt="Jenkins22.png"></p><p>配置过程<br> 参照之前选择参数化构建<br> 选择实例脚本Hello World<br><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw12084ccae452cce85c0fe29514665809.png" alt="Jenkins23.png"></p><p>通过上面的流水线语法，利⽤脚本⽚段⽣成⼯具，⾃动⽣成各种Stage脚本，指定分⽀：$tag ，然后⽣成脚本即可<br> 注意第一次可能只有master的tag，构建完一次后才有版本的tag</p><p>Pipeline script</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>pipeline <span class="token punctuation">{</span>
    agent any
    stages <span class="token punctuation">{</span>
        stage<span class="token punctuation">(</span><span class="token string">&#39;Pull SourceCode&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                checkout<span class="token punctuation">(</span><span class="token punctuation">[</span>
                    <span class="token variable">$class</span><span class="token builtin class-name">:</span> <span class="token string">&#39;GitSCM&#39;</span>, 
                    branches: <span class="token punctuation">[</span><span class="token punctuation">[</span>name: <span class="token string">&#39;$tag&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>, 
                    extensions: <span class="token punctuation">[</span><span class="token punctuation">]</span>, 
                    userRemoteConfigs: <span class="token punctuation">[</span><span class="token punctuation">[</span>url: <span class="token string">&#39;http://192.168.1.240/root/springbootdemo&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
                <span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        stage<span class="token punctuation">(</span><span class="token string">&#39;Maven Build&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                <span class="token function">sh</span> <span class="token string">&#39;/usr/local/maven/bin/mvn package&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        stage<span class="token punctuation">(</span><span class="token string">&#39;Publish Harbor Image&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                sshPublisher<span class="token punctuation">(</span>publishers: <span class="token punctuation">[</span>
                    sshPublisherDesc<span class="token punctuation">(</span>
                        configName: <span class="token string">&#39;harbor-155&#39;</span>, 
                        transfers: <span class="token punctuation">[</span>
                            sshTransfer<span class="token punctuation">(</span>
                                cleanRemote: false, 
                                excludes: <span class="token string">&#39;&#39;</span>, 
                                execCommand: <span class="token string">&#39;&#39;</span>, 
                                execTimeout: <span class="token number">120000</span>, 
                                flatten: false, 
                                makeEmptyDirs: false, 
                                noDefaultExcludes: false, 
                                patternSeparator: <span class="token string">&#39;[, ]+&#39;</span>, 
                                remoteDirectory: <span class="token string">&#39;&#39;</span>, 
                                remoteDirectorySDF: false, 
                                removePrefix: <span class="token string">&#39;target&#39;</span>, 
                                sourceFiles: <span class="token string">&#39;target/*.jar&#39;</span>
                            <span class="token punctuation">)</span>, 
                            sshTransfer<span class="token punctuation">(</span>
                                cleanRemote: false, 
                                excludes: <span class="token string">&#39;&#39;</span>, 
                                execCommand: <span class="token string">&#39;&#39;</span>&#39;docker build <span class="token parameter variable">-t</span> <span class="token number">192.168</span>.1.155:80/public/springbootdemo:<span class="token variable">$tag</span> /usr/local/
<span class="token function">docker</span> login <span class="token parameter variable">-u</span> admin <span class="token parameter variable">-p</span> Harbor12345 <span class="token number">192.168</span>.1.155:80
<span class="token function">docker</span> push <span class="token number">192.168</span>.1.155:80/public/springbootdemo:<span class="token variable">$tag</span><span class="token string">&#39;&#39;</span>&#39;, 
                                execTimeout: <span class="token number">120000</span>, 
                                flatten: false, 
                                makeEmptyDirs: false, 
                                noDefaultExcludes: false, 
                                patternSeparator: <span class="token string">&#39;[, ]+&#39;</span>, 
                                remoteDirectory: <span class="token string">&#39;&#39;</span>, 
                                remoteDirectorySDF: false, 
                                removePrefix: <span class="token string">&#39;docker&#39;</span>, 
                                sourceFiles: <span class="token string">&#39;docker/*&#39;</span>
                            <span class="token punctuation">)</span>
                        <span class="token punctuation">]</span>, 
                        usePromotionTimestamp: false, 
                        useWorkspaceInPromotion: false, 
                        verbose: <span class="token boolean">false</span>
                    <span class="token punctuation">)</span>
                <span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        stage<span class="token punctuation">(</span><span class="token string">&#39;Run Container&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                sshPublisher<span class="token punctuation">(</span>publishers: <span class="token punctuation">[</span>
                    sshPublisherDesc<span class="token punctuation">(</span>
                        configName: <span class="token string">&#39;target176&#39;</span>, 
                        transfers: <span class="token punctuation">[</span>
                            sshTransfer<span class="token punctuation">(</span>
                                cleanRemote: false, 
                                excludes: <span class="token string">&#39;&#39;</span>, 
                                execCommand: <span class="token string">&#39;&#39;</span>&#39;docker <span class="token function">rm</span> <span class="token parameter variable">-f</span> springbootdemo
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">80</span>:8081 <span class="token parameter variable">--name</span><span class="token operator">=</span>springbootdemo <span class="token number">192.168</span>.1.155:80/public/springbootdemo:<span class="token variable">$tag</span><span class="token string">&#39;&#39;</span>&#39;, 
                                execTimeout: <span class="token number">120000</span>, 
                                flatten: false, 
                                makeEmptyDirs: false, 
                                noDefaultExcludes: false, 
                                patternSeparator: <span class="token string">&#39;[, ]+&#39;</span>, 
                                remoteDirectory: <span class="token string">&#39;&#39;</span>, 
                                remoteDirectorySDF: false, 
                                removePrefix: <span class="token string">&#39;&#39;</span>, 
                                sourceFiles: <span class="token string">&#39;&#39;</span>
                            <span class="token punctuation">)</span>
                        <span class="token punctuation">]</span>, 
                        usePromotionTimestamp: false, 
                        useWorkspaceInPromotion: false, 
                        verbose: <span class="token boolean">false</span>
                    <span class="token punctuation">)</span>
                <span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gitlab托管jenkinsfile" tabindex="-1"><a class="header-anchor" href="#gitlab托管jenkinsfile"><span>Gitlab托管Jenkinsfile</span></a></h2><p>在项目目录下新建文件Jenkinsfile，将上面的Pipeline script复制进去，然后上传⾄master分⽀即可。</p>`,38),O=n("br",null,null,-1),$={href:"http://192.168.1.240/root/springbootdemo",target:"_blank",rel:"noopener noreferrer"},F=n("br",null,null,-1),K=n("br",null,null,-1),G=i(`<p>Jenkins Pipeline会先从Gitlab下载Jekinsfile，在读取脚本执⾏，通过SCM构建会额外增加⼀个Checkout SCM的Stage，说明拉取<br><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw39cbc92b9c4a9d65e6c1fe91b09ba59e.png" alt="Jenkins24.png"></p><h2 id="为什么要引入kubernetes" tabindex="-1"><a class="header-anchor" href="#为什么要引入kubernetes"><span>为什么要引⼊Kubernetes</span></a></h2><p><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw3998ccc43762872112ec89c00253d3da.png" alt="k8s1.png"><br> 部署和管理成千上万组件，并⽀持基础设施的全球性伸缩，</p><p>用于部署和管理容器化的应⽤。依赖于Linux容器的特性来运⾏异构应⽤，⽆须知道应⽤的内部详情，不需要⼿动将应⽤部署到每台机器。因为这些应⽤运⾏在容器⾥，与同⼀台服务器上的其他应⽤隔离</p><p>etcd是⾼可⽤的键值对的分布式安全存储系统，⽤于持久化存储集群中所有的资源对象，例如集群中的Node、Service、Pod的状态和元数据，以及配置数据等。</p><p>API Server，kube-API Server。承担API的⽹关职责，⽤户请求及其他系统组件与集群交互的唯⼀⼊⼝。</p><p>控制器是Kubernetes集群的⾃动化管理控制中⼼，有Pod管理的（Replication 控制器、Deployment 控制器等）、有⽹络管理的（Endpoints 控制器、Service 控制器等）、有存储相关的（Attachdetach 控制器等）</p><p>集群中的调度器负责Pod在集群节点中的调度分配。能够提⾼每台机器的资源利⽤率，将压⼒分摊到各个机器上</p><p>kubelet是运⾏在每个节点上的负责启动容器的重要的守护进程。在启动加载配置参数，向API Server 处创建⼀个Node 对象来注册⾃身的节点信息，例如操作系统、Kernel 版本、IP地址、总容量（Capacity）和可供分配的容量（Allocatable Capacity）等<br> kube-proxy ，也是⼀个“控制器”。从API Server 监听Service和Endpoint对象的变化，并根据Endpoint 对象的信息设置Service 到后端Pod的路由，维护⽹络规则，执⾏TCP、UDP和SCTP 流转发。<br> 容器运⾏时是真正删除和管理容器的组件。容器运⾏时可以分为⾼层运⾏时和底层运⾏时。⾼层运⾏时主要包括Docker、Containerd和Cri-o，底层运⾏时包含运⾏时runc、kata 及gVisor。</p><p>通⽤容器⽹络接⼝CNI（Container Network Interface），专⻔⽤于设置和删除容器的⽹络连通性。容器运⾏时通过CNI调⽤⽹络插件来完成容器的⽹络设置。<br> Pod作为承载容器化应⽤的基本调度和运⾏单元。是⼀个或者多个容器镜像的组合。当应⽤启动以后，每⼀个容器镜像对应⼀组进程，⽽同⼀个Pod的所有容器中的进程默认公⽤同⼀⽹络Namespace，并且共⽤同⼀⽹络标识</p><h2 id="_177快速部署kubernetes" tabindex="-1"><a class="header-anchor" href="#_177快速部署kubernetes"><span>177快速部署Kubernetes</span></a></h2><p>利⽤Kubeode快速部署单节点K8S<br><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw90e5648b7282428a6159cf6db0797c15.png" alt="k8s2.png"><br> 下载k8s-2022-04-24.tar版本<br> 准备服务器：4核CPU/8G内存/CentoS7.x<br> 将压缩包上传⾄/usr/local⽬录解压缩，并执⾏安装</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">tar</span> xf k8s-2022-04-24.tar
<span class="token builtin class-name">cd</span> k8s-2022-04-24
<span class="token function">bash</span> install.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),V=n("br",null,null,-1),L=n("img",{src:"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwec391542f55e353450fb538c58e758e6.png",alt:"k8s3.png"},null,-1),W=n("br",null,null,-1),U=n("br",null,null,-1),B=n("img",{src:"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw331e7ab243c1d8755b592166eee0e556.png",alt:"k8s4.png"},null,-1),Q=n("br",null,null,-1),X=n("br",null,null,-1),nn=n("img",{src:"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwab92321c5ddfe81768e664fcc027052c.png",alt:"k8s5.png"},null,-1),sn=n("br",null,null,-1),an={href:"http://192.168.1.177:30080",target:"_blank",rel:"noopener noreferrer"},en=n("br",null,null,-1),tn=n("br",null,null,-1),ln=n("br",null,null,-1),cn=n("img",{src:"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwa0acf36fcdc6bd74f9b088ae91bd9657.png",alt:"k8s6.png"},null,-1),pn=i(`<p>添加集群<br><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw3df14b3a771e2f252a44e959e9edc671.png" alt="k8s7.png"></p><p>复制命令在177安装Agent<br><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw75cab5f84411cb9559368ce89e39111f.png" alt="k8s8.png"></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-k</span> <span class="token string">&#39;http://192.168.1.177:30080/kuboard-api/cluster/k8s-177/kind/KubernetesCluster/k8s-177/resource/installAgentToKubernetes?token=l2cTNnbw9TmtdblOvuonpxARV3cHQbRk&#39;</span> <span class="token operator">&gt;</span> kuboard-agent.yaml
kubectl apply <span class="token parameter variable">-f</span> ./kuboard-agent.yaml

<span class="token comment"># 检查agent</span>
kubectl get pods <span class="token parameter variable">-n</span> kuboard <span class="token parameter variable">-o</span> wide <span class="token parameter variable">-l</span> <span class="token string">&quot;k8s.kuboard.cn/name in (kuboard-agent-1bwakkm, kuboard-agent-1bwakkm-2)&quot;</span>

<span class="token comment"># 检查tcp连通性</span>
<span class="token function">nc</span> <span class="token parameter variable">-vz</span> <span class="token number">192.168</span>.1.177 <span class="token number">30081</span>
<span class="token comment"># 检查日志</span>
kubectl logs <span class="token parameter variable">-f</span>  <span class="token parameter variable">-n</span> kuboard <span class="token parameter variable">-l</span> <span class="token string">&quot;k8s.kuboard.cn/name in (kuboard-agent-1bwakkm, kuboard-agent-1bwakkm-2)&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>集群导⼊完毕，选择kuboard-admin管理集群<br><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwebe0a996a969ffc3ad6ca16b6304f071.png" alt="k8s9.png"></p>`,4),on=n("br",null,null,-1),rn={href:"http://192.168.1.177:30000",target:"_blank",rel:"noopener noreferrer"},dn=n("br",null,null,-1),un=n("br",null,null,-1),mn=n("br",null,null,-1),bn=i(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/docker/daemon.json

<span class="token punctuation">{</span>
 <span class="token string">&quot;registry-mirrors&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;https://dockerhub.azk8s.cn&quot;</span>,<span class="token string">&quot;https://hub-mirror.c.163.com&quot;</span><span class="token punctuation">]</span>,
 <span class="token string">&quot;insecure-registries&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;192.168.1.155:80&quot;</span><span class="token punctuation">]</span>,
 <span class="token string">&quot;exec-opts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;native.cgroupdriver=cgroupfs&quot;</span><span class="token punctuation">]</span>,
 <span class="token string">&quot;log-driver&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;json-file&quot;</span>,
 <span class="token string">&quot;log-opts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token string">&quot;max-size&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;10m&quot;</span>,<span class="token string">&quot;max-file&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;10&quot;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

systemctl daemon-reload
systemctl restart <span class="token function">docker</span>

<span class="token comment"># 检查能不能用</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">80</span>:8081 <span class="token parameter variable">--name</span><span class="token operator">=</span>springbootdemo <span class="token number">192.168</span>.1.155:80/public/springbootdemo:1.0
<span class="token comment"># 查看</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token operator">|</span> <span class="token function">grep</span> springbootdemo
<span class="token comment"># 关闭</span>
<span class="token function">docker</span> stop springbootdemo
<span class="token function">docker</span> <span class="token function">rm</span> springbootdemo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建ks部署-deployment-脚本" tabindex="-1"><a class="header-anchor" href="#创建ks部署-deployment-脚本"><span>创建KS部署(Deployment)脚本</span></a></h2><p>deployment控制器通过管理replicaset来间接管理pod<br> 采⽤脚本⽅式</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl get deployment
kubectl delete deployment springbootdemo
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/k8s
<span class="token function">cat</span> <span class="token operator">&gt;</span> springbootdemo-deployment.yml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: apps/v1
kind: Deployment
metadata:
  name: springbootdemo
spec:
  replicas: 2
  selector:
    matchLabels:
      app: springbootdemo
  template:
    metadata:
      labels:
        app: springbootdemo
    spec:
      containers:
        - name: springbootdemo
          image: 192.168.1.155:80/public/springbootdemo:1.0.4
          ports:
            - containerPort: 8081
EOF</span>
kubectl apply <span class="token parameter variable">-f</span> springbootdemo-deployment.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建ks服务-service-脚本" tabindex="-1"><a class="header-anchor" href="#创建ks服务-service-脚本"><span>创建KS服务（Service）脚本</span></a></h2><p>Pod⽹络插件的实现⽅式是将PodIP 作为私有IP地址，Pod 与Pod之间的通信是在⼀个私有⽹络中，因此要将Pod 中运⾏的服务发布出去需要⼀个服务发布机制。<br> 为default命名空间创建服务脚本<br><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw862017d53e56a3bedde49a967936bd5a.png" alt="k8s10.png"><br> ⽤命令创建</p>`,6),vn={href:"http://192.168.1.177:31005",target:"_blank",rel:"noopener noreferrer"},kn=i(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/k8s
<span class="token builtin class-name">cd</span> /etc/k8s
kubectl delete <span class="token parameter variable">-f</span> springbootdemo-service.yml
<span class="token function">cat</span> <span class="token operator">&gt;</span> springbootdemo-service.yml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: v1
kind: Service
metadata:
  name: springbootdemo-service
spec:
  type: NodePort
  ports:
    - port: 80
      targetPort: 8081
      nodePort: 31005
      name: springbootdemo-port
  selector:
    app: springbootdemo
EOF</span>
kubectl apply <span class="token parameter variable">-f</span> springbootdemo-service.yml

minikube <span class="token function">service</span> springbootdemo-service <span class="token parameter variable">--url</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jenkins流水线驱动ks持续部署" tabindex="-1"><a class="header-anchor" href="#jenkins流水线驱动ks持续部署"><span>Jenkins流⽔线驱动KS持续部署</span></a></h2><p>在项目根目录（src同级目录）中增加deployment.yml，将原有的Deployment与Service两个脚本合并在⼀起<br> 将原本写死的版本号更换为占位符<code>&lt;TAG&gt;</code></p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> springbootdemo<span class="token punctuation">-</span>deployment
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">2</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> springbootdemo<span class="token punctuation">-</span>pod
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> springbootdemo<span class="token punctuation">-</span>pod
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> springbootdemo
          <span class="token key atrule">image</span><span class="token punctuation">:</span> 192.168.1.155<span class="token punctuation">:</span>80/public/springbootdemo<span class="token punctuation">:</span>&lt;TAG<span class="token punctuation">&gt;</span>
          <span class="token key atrule">ports</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">8081</span>
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> springbootdemo<span class="token punctuation">-</span>service
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>
      <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">8081</span>
      <span class="token key atrule">nodePort</span><span class="token punctuation">:</span> <span class="token number">31005</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> springbootdemo<span class="token punctuation">-</span>port
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> springbootdemo<span class="token punctuation">-</span>pod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回到Jenkins192.168.1.241:8080系统设置配置177服务器(参考之前)<br> Name：K8S-Master-177<br> Hostname：192.168.1.177<br> Username：root<br> Password：root<br> Remote Directory：/usr/local</p><p>回到任务配置，新增SSH Service，向177发布deployment.yml</p><p>选择K8S-Master-233<br> Source files：deployment.yml<br> Exec command:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/&lt;TAG&gt;/$tag/&#39;</span> /usr/local/deployment.yml
kubectl delete deployment springbootdemo-deployment
kubectl delete <span class="token function">service</span> springbootdemo-service
kubectl apply <span class="token parameter variable">-f</span> /usr/local/deployment.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>作⽤是<br> 根据选择版本替换掉deployment.yml中<code>&lt;TAG&gt;</code>占位符<br> 删除遗留的部署<br> 删除遗留的服务<br> 重新应⽤新的deployment.yml脚本</p><p>完整Pipeline Script</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>pipeline <span class="token punctuation">{</span>
    agent any
    stages <span class="token punctuation">{</span>
        stage<span class="token punctuation">(</span><span class="token string">&#39;Pull SourceCode&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                checkout<span class="token punctuation">(</span><span class="token punctuation">[</span>
                    <span class="token variable">$class</span><span class="token builtin class-name">:</span> <span class="token string">&#39;GitSCM&#39;</span>, 
                    branches: <span class="token punctuation">[</span><span class="token punctuation">[</span>name: <span class="token string">&#39;$tag&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>, 
                    extensions: <span class="token punctuation">[</span><span class="token punctuation">]</span>, 
                    userRemoteConfigs: <span class="token punctuation">[</span><span class="token punctuation">[</span>url: <span class="token string">&#39;http://192.168.1.240/root/springbootdemo&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
                <span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        stage<span class="token punctuation">(</span><span class="token string">&#39;Maven Build&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                <span class="token function">sh</span> <span class="token string">&#39;/usr/local/maven/bin/mvn package&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        stage<span class="token punctuation">(</span><span class="token string">&#39;Publish Harbor Image&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                sshPublisher<span class="token punctuation">(</span>publishers: <span class="token punctuation">[</span>
                    sshPublisherDesc<span class="token punctuation">(</span>
                        configName: <span class="token string">&#39;harbor-155&#39;</span>, 
                        transfers: <span class="token punctuation">[</span>
                            sshTransfer<span class="token punctuation">(</span>
                                cleanRemote: false, 
                                excludes: <span class="token string">&#39;&#39;</span>, 
                                execCommand: <span class="token string">&#39;&#39;</span>, 
                                execTimeout: <span class="token number">120000</span>, 
                                flatten: false, 
                                makeEmptyDirs: false, 
                                noDefaultExcludes: false, 
                                patternSeparator: <span class="token string">&#39;[, ]+&#39;</span>, 
                                remoteDirectory: <span class="token string">&#39;&#39;</span>, 
                                remoteDirectorySDF: false, 
                                removePrefix: <span class="token string">&#39;target&#39;</span>, 
                                sourceFiles: <span class="token string">&#39;target/*.jar&#39;</span>
                            <span class="token punctuation">)</span>, 
                            sshTransfer<span class="token punctuation">(</span>
                                cleanRemote: false, 
                                excludes: <span class="token string">&#39;&#39;</span>, 
                                execCommand: <span class="token string">&#39;&#39;</span>&#39;docker build <span class="token parameter variable">-t</span> <span class="token number">192.168</span>.1.155:80/public/springbootdemo:<span class="token variable">$tag</span> /usr/local/
<span class="token function">docker</span> login <span class="token parameter variable">-u</span> admin <span class="token parameter variable">-p</span> Harbor12345 <span class="token number">192.168</span>.1.155:80
<span class="token function">docker</span> push <span class="token number">192.168</span>.1.155:80/public/springbootdemo:<span class="token variable">$tag</span><span class="token string">&#39;&#39;</span>&#39;, 
                                execTimeout: <span class="token number">120000</span>, 
                                flatten: false, 
                                makeEmptyDirs: false, 
                                noDefaultExcludes: false, 
                                patternSeparator: <span class="token string">&#39;[, ]+&#39;</span>, 
                                remoteDirectory: <span class="token string">&#39;&#39;</span>, 
                                remoteDirectorySDF: false, 
                                removePrefix: <span class="token string">&#39;docker&#39;</span>, 
                                sourceFiles: <span class="token string">&#39;docker/*&#39;</span>
                            <span class="token punctuation">)</span>
                        <span class="token punctuation">]</span>, 
                        usePromotionTimestamp: false, 
                        useWorkspaceInPromotion: false, 
                        verbose: <span class="token boolean">false</span>
                    <span class="token punctuation">)</span>
                <span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        stage<span class="token punctuation">(</span><span class="token string">&#39;Run Container&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                sshPublisher<span class="token punctuation">(</span>publishers: <span class="token punctuation">[</span>
                    sshPublisherDesc<span class="token punctuation">(</span>
                        configName: <span class="token string">&#39;K8S-Master-177&#39;</span>, 
                        transfers: <span class="token punctuation">[</span>
                            sshTransfer<span class="token punctuation">(</span>
                                cleanRemote: false, 
                                excludes: <span class="token string">&#39;&#39;</span>, 
                                execCommand: <span class="token string">&#39;&#39;</span>&#39;sed <span class="token parameter variable">-i</span> <span class="token punctuation">\\</span>&#39;s/<span class="token operator">&lt;</span>TAG<span class="token operator">&gt;</span>/<span class="token variable">$tag</span>/<span class="token punctuation">\\</span>&#39; /usr/local/deployment.yml
 kubectl delete deployment springbootdemo-deployment
 kubectl delete <span class="token function">service</span> springbootdemo-service
 kubectl apply <span class="token parameter variable">-f</span> /usr/local/deployment.yml<span class="token string">&#39;&#39;</span>&#39;,
                                execTimeout: <span class="token number">120000</span>, 
                                flatten: false, 
                                makeEmptyDirs: false, 
                                noDefaultExcludes: false, 
                                patternSeparator: <span class="token string">&#39;[, ]+&#39;</span>, 
                                remoteDirectory: <span class="token string">&#39;&#39;</span>, 
                                remoteDirectorySDF: false, 
                                removePrefix: <span class="token string">&#39;&#39;</span>, 
                                sourceFiles: <span class="token string">&#39;deployment.yml&#39;</span>
                            <span class="token punctuation">)</span>
                        <span class="token punctuation">]</span>, 
                        usePromotionTimestamp: false, 
                        useWorkspaceInPromotion: false, 
                        verbose: <span class="token boolean">false</span>
                    <span class="token punctuation">)</span>
                <span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gitlab-webhook自动版本发布" tabindex="-1"><a class="header-anchor" href="#gitlab-webhook自动版本发布"><span>Gitlab Webhook⾃动版本发布</span></a></h2><p>通过Gitlab 在发布新Tag时⾃动进⾏构建<br><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwe8b285726bab60a2c54138ebbcbb19a5.png" alt="gitlab5.png"><br> Jenkins192.168.1.241:8080安装Generic Webhook Trigger插件<br> 在构建触发器位置会出现Generic Webhook Trigger，勾选后⽣成URL可被Gitlab调⽤<br> 输⼊项 Token：123<br><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw7746f701d8969a00cf7ea804b15824e0.png" alt="Jenkins25.png"></p>`,13),gn=n("br",null,null,-1),hn=n("img",{src:"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw010c525fbd79969af9a6db1d0cd5eb5f.png",alt:"gitlab6.png"},null,-1),fn=n("br",null,null,-1),_n=n("br",null,null,-1),Sn={href:"http://192.168.1.241:8080/generic-webhook-trigger/invoke",target:"_blank",rel:"noopener noreferrer"},Pn=n("br",null,null,-1),yn=n("br",null,null,-1),Hn=n("br",null,null,-1),En=n("br",null,null,-1),Yn=n("img",{src:"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwb0baf6e6ce3760d09f0225aa1a096b0e.png",alt:"gitlab8.png"},null,-1),xn=n("br",null,null,-1),An=n("br",null,null,-1),wn=n("br",null,null,-1),qn=n("br",null,null,-1),In=n("img",{src:"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwa7314adc8745b5efc256666a18546cdc.png",alt:"gitlab9.png"},null,-1),Rn=n("br",null,null,-1),Mn=n("br",null,null,-1),Dn=n("br",null,null,-1),Nn=n("br",null,null,-1),jn=n("br",null,null,-1),zn=n("br",null,null,-1),Cn=n("br",null,null,-1),Zn=n("br",null,null,-1),Jn=n("br",null,null,-1),Tn=n("img",{src:"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw04aca43c5300cebd2b89fd8310f8af4b.png",alt:"gitlab10.png"},null,-1),On=n("br",null,null,-1),$n=n("h2",{id:"helm-kubernetes应用包管理工具",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#helm-kubernetes应用包管理工具"},[n("span",null,"Helm：Kubernetes应⽤包管理⼯具")])],-1),Fn=n("p",null,[s("对于复杂的应⽤或者中间件系统，在K8s上容器化部署通常需要研究Docker镜像的运⾏需求、环境变量等内容，为容器配置依赖的存储、⽹络等资源，并设计和编写Deployment、ConfigMap、Service、Volume、Ingress等YAML⽂件，再将其依次提交给Kubernetes部署。总之，微服务架构和容器化给复杂应⽤的部署和管理都带来了很⼤的挑战。"),n("br"),s(" Helm⽤于对需要在Kubernetes 上部署的复杂应⽤进⾏定义、安装和更新，"),n("br"),s(" Helm将Kubernetes的资源如Deployment、Service、ConfigMap、Ingress等，打包到⼀个Chart（图表）中，保存到Chart仓库，由Chart仓库存储、分发和共享。Helm⽀持应⽤Chart的版本管理，简化了Kubernetes应⽤部署的应⽤定义、打包、部 署、更新、删除和回滚等操作。 Helm通过将各种Kubernetes资源打包，类似Linux的apt-get或yum⼯具，来完成复杂软件的安装和部署，并且⽀持部署实例的版本管理等")],-1),Kn={href:"https://artifacthub.io/",target:"_blank",rel:"noopener noreferrer"},Gn=i(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">wget</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /usr/local/helm
<span class="token builtin class-name">cd</span> /usr/local/helm
<span class="token function">wget</span> --no-check-certificate https://manongbiji.oss-cn-beijing.aliyuncs.com/ittailkshow/devops/download/helm-v3.10.0-linux-amd64.tar.gz
<span class="token function">tar</span> zxvf helm-v3.10.0-linux-amd64.tar.gz
<span class="token function">mv</span> linux-amd64/helm /usr/local/bin/helm


<span class="token comment"># 安装nginx https://artifacthub.io/packages/helm/bitnami/nginx</span>
helm uninstall my-nginx
helm repo <span class="token function">add</span> bitnami https://charts.bitnami.com/bitnami
helm <span class="token function">install</span> my-nginx bitnami/nginx <span class="token parameter variable">--version</span> <span class="token number">13.2</span>.10 <span class="token parameter variable">--set</span> <span class="token assign-left variable">replicaCount</span><span class="token operator">=</span><span class="token number">2</span>
helm list
helm status my-nginx
kubectl get deploy
kubectl get svc
NAME                     TYPE           CLUSTER-IP      EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>        AGE
kubernetes               ClusterIP      <span class="token number">10.96</span>.0.1       <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">443</span>/TCP        10h
my-nginx                 LoadBalancer   <span class="token number">10.110</span>.29.244   <span class="token operator">&lt;</span>pending<span class="token operator">&gt;</span>     <span class="token number">80</span>:30633/TCP   96s
<span class="token comment"># 访问http://192.168.1.177:30633</span>
helm Templates
Helm Values
更新配置，set设置变量
helm upgrade my-nginx bitnami/nginx <span class="token parameter variable">--version</span> <span class="token number">13.2</span>.10 <span class="token parameter variable">--set</span> <span class="token assign-left variable">replicaCount</span><span class="token operator">=</span><span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="构建helm私有仓库发布自定义charts" tabindex="-1"><a class="header-anchor" href="#构建helm私有仓库发布自定义charts"><span>构建Helm私有仓库发布⾃定义Charts</span></a></h2>`,2),Vn={href:"https://github.com/helm/chartmuseum",target:"_blank",rel:"noopener noreferrer"},Ln=i(`<p>184服务器新建ChartMuseum</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /usr/local/charts
<span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token parameter variable">-itd</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">DEBUG</span><span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">STORAGE</span><span class="token operator">=</span>local <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">STORAGE_LOCAL_ROOTDIR</span><span class="token operator">=</span>/charts <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /usr/local/charts:/charts <span class="token punctuation">\\</span>
  <span class="token parameter variable">--name</span> chartmuseum <span class="token punctuation">\\</span>
  <span class="token parameter variable">--network</span> macvlan31 <span class="token parameter variable">--ip</span><span class="token operator">=</span><span class="token number">192.168</span>.1.242 <span class="token punctuation">\\</span>
  ghcr.io/helm/chartmuseum:v0.14.0

<span class="token comment"># 授权，否则上传charts时报权限不够</span>
<span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> /usr/local/charts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在177 K8S Master服务器安装Helm</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">wget</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /usr/local/helm
<span class="token builtin class-name">cd</span> /usr/local/helm
<span class="token function">wget</span> --no-check-certificate https://manongbiji.oss-cn-beijing.aliyuncs.com/ittailkshow/devops/download/helm-v3.10.0-linux-amd64.tar.gz
<span class="token function">tar</span> zxvf helm-v3.10.0-linux-amd64.tar.gz
<span class="token function">mv</span> <span class="token parameter variable">-f</span> linux-amd64/helm /usr/local/bin/helm

<span class="token comment"># 创建myproject-charts，并将默认的版本号与APP版本号替换为1.0.0与stable</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /usr/local/charts
<span class="token builtin class-name">cd</span> /usr/local/charts
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> springbootdemo-charts
helm create springbootdemo-charts
<span class="token builtin class-name">cd</span> /usr/local/charts/springbootdemo-charts
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/version: 0.1.0/version: 1.0.0/&#39;</span> /usr/local/charts/springbootdemo-charts/Chart.yaml
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/appVersion: \\&quot;1.16.0\\&quot;/appVersion: stable/&#39;</span> /usr/local/charts/springbootdemo-charts/Chart.yaml
<span class="token builtin class-name">cd</span> /usr/local/charts/springbootdemo-charts/templates
<span class="token comment"># 移除所有templates⽬录下⽂件，新建部署与服务YAML脚本</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> *
<span class="token function">cat</span> <span class="token operator">&gt;</span> deployment.yaml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: apps/v1
kind: Deployment
metadata:
  name: springbootdemo-deployment
spec:
  replicas: 2
  selector:
    matchLabels:
      app: springbootdemo-pod
  template:
    metadata:
      labels:
        app: springbootdemo-pod
    spec:
      containers:
        - name: springbootdemo
          image: 192.168.1.155:80/public/springbootdemo:1.0.9
          ports:
            - containerPort: 8081
EOF</span>

<span class="token function">cat</span> <span class="token operator">&gt;</span> service.yaml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: v1
kind: Service
metadata:
  name: springbootdemo-service
spec:
  type: NodePort
  ports:
    - port: 80
      targetPort: 8081
      nodePort: 31005
      name: springbootdemo-port
  selector:
    app: springbootdemo-pod
EOF</span>

<span class="token comment"># 执⾏helm package打包，并将其上传⾄242Helm Museum私服</span>
<span class="token builtin class-name">cd</span> /usr/local/charts/springbootdemo-charts
helm package <span class="token builtin class-name">.</span>
<span class="token function">curl</span> <span class="token parameter variable">-X</span> DELETE http://192.168.1.242:8080/api/charts/springbootdemo-charts/1.0.0
<span class="token function">curl</span> --data-binary <span class="token string">&quot;@springbootdemo-charts-1.0.0.tgz&quot;</span> http://192.168.1.242:8080/api/charts
<span class="token comment"># 上传成功后通过helm install命令⾃动安装myproject-charts，完成应⽤发布</span>
helm uninstall springbootdemo
kubectl delete deployment springbootdemo-deployment
kubectl delete <span class="token function">service</span> springbootdemo-service
helm repo <span class="token function">add</span> my-repo http://192.168.1.242:8080/
helm repo update
helm search repo my-repo
helm <span class="token function">install</span> springbootdemo my-repo/springbootdemo-charts
helm list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基于charts模板实现版本动态发布" tabindex="-1"><a class="header-anchor" href="#基于charts模板实现版本动态发布"><span>基于Charts模板实现版本动态发布</span></a></h2><p>利⽤values.yaml脚本参数化</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 重写values.yaml，设置必要的选项</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> /usr/local/charts/springbootdemo-charts/values.yaml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
replicas: 3
tag: 1.0.9
nodePort: 31005
EOF</span>
<span class="token comment"># 在部署脚本中利⽤{{.Values.xxx}}加载对应的选项</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> /usr/local/charts/springbootdemo-charts/templates/deployment.yaml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: apps/v1
kind: Deployment
metadata:
  name: springbootdemo-deployment
spec:
  replicas: {{.Values.replicas}}
  selector:
    matchLabels:
      app: springbootdemo-pod
  template:
    metadata:
      labels:
        app: springbootdemo-pod
    spec:
      containers:
        - name: springbootdemo
          image: 192.168.1.155:80/public/springbootdemo:{{.Values.tag}}
          ports:
            - containerPort: 8081
EOF</span>
<span class="token comment"># 在服务脚本中利⽤{{.Values.xxx}}加载对应的选项</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> /usr/local/charts/springbootdemo-charts/templates/service.yaml <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
apiVersion: v1
kind: Service
metadata:
  name: springbootdemo-service
spec:
  type: NodePort
  ports:
    - port: 80
      targetPort: 8081
      nodePort: {{.Values.nodePort}}
      name: springbootdemo-port
  selector:
    app: springbootdemo-pod
EOF</span>

<span class="token comment"># 删除原有旧版本的Helm-Charts，重新打包，重新发布</span>
<span class="token function">curl</span> <span class="token parameter variable">-X</span> DELETE http://192.168.1.242:8080/api/charts/springbootdemo-charts/1.0.0
<span class="token builtin class-name">cd</span> /usr/local/charts/springbootdemo-charts/
helm package <span class="token builtin class-name">.</span>
<span class="token function">curl</span> --data-binary <span class="token string">&quot;@springbootdemo-charts-1.0.0.tgz&quot;</span> http://192.168.1.242:8080/api/charts

<span class="token comment"># 在177服务器运⾏调整replicas与tag，完成版本动态变更。注意执⾏repo update清缓存</span>
helm uninstall springbootdemo
kubectl delete deployment springbootdemo-deployment
kubectl delete <span class="token function">service</span> springbootdemo-service
helm repo <span class="token function">add</span> my-repo http://192.168.1.242:8080/
helm repo update
helm <span class="token function">install</span> springbootdemo my-repo/springbootdemo-charts <span class="token parameter variable">--set</span> <span class="token assign-left variable">replicas</span><span class="token operator">=</span><span class="token number">1</span> <span class="token parameter variable">--set</span> <span class="token assign-left variable">tag</span><span class="token operator">=</span><span class="token number">1.0</span>.9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基于helm实施jenkins动态发布" tabindex="-1"><a class="header-anchor" href="#基于helm实施jenkins动态发布"><span>基于Helm实施Jenkins动态发布</span></a></h2><p>利⽤Helm结合Jenkins流⽔线动态发布<br> 两个变量<code>$replicas</code>与<code>$tag</code>，在Jenkins配置界⾯Git Parameters中对其设置 新增字符参数replicas，默认值为1<br> 名称：replicas<br> 默认值：1<br> 描述：发布数量<br><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwd78d1fecff5323bf805a5c2400e05add.png" alt="Jenkins28.png"><br> 在Webhook位置也增加replicas<br> Variable：replicas<br> Expression：（nil）<br> Type：JSONPath<br> Default value：1<br> ⼿动构建时会产⽣两个输⼊项<br> 也可以在构建时，选择参数查看当时数据<br><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwad89e84b0ea5b3c21686e4a462b6d6c8.png" alt="Jenkins27.png"><br> Jenkins 最后阶段调整为Helm Install，添加参数rep</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>helm uninstall springbootdemo
kubectl delete deployment springbootdemo-deployment
kubectl delete <span class="token function">service</span> springbootdemo-service
helm repo <span class="token function">add</span> my-repo http://192.168.1.242:8080/
helm repo update
helm <span class="token function">install</span> springbootdemo my-repo/springbootdemo-charts <span class="token parameter variable">--set</span> <span class="token assign-left variable">replicas</span><span class="token operator">=</span><span class="token variable">$rep</span> <span class="token parameter variable">--set</span> <span class="token assign-left variable">tag</span><span class="token operator">=</span><span class="token variable">$tag</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw5263613458754b07ebb51045a8197ee4.png" alt="Jenkins26.png" tabindex="0"><figcaption>Jenkins26.png</figcaption></figure><p>Jenkins Pipeline脚本最后阶段调整为Helm Install，添加参数rep<br> 完整脚本</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>pipeline <span class="token punctuation">{</span>
    agent any
    stages <span class="token punctuation">{</span>
        stage<span class="token punctuation">(</span><span class="token string">&#39;Pull SourceCode&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                checkout<span class="token punctuation">(</span><span class="token punctuation">[</span>
                    <span class="token variable">$class</span><span class="token builtin class-name">:</span> <span class="token string">&#39;GitSCM&#39;</span>, 
                    branches: <span class="token punctuation">[</span><span class="token punctuation">[</span>name: <span class="token string">&#39;$tag&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>, 
                    extensions: <span class="token punctuation">[</span><span class="token punctuation">]</span>, 
                    userRemoteConfigs: <span class="token punctuation">[</span><span class="token punctuation">[</span>url: <span class="token string">&#39;http://192.168.1.240/root/springbootdemo&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
                <span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        stage<span class="token punctuation">(</span><span class="token string">&#39;Maven Build&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                <span class="token function">sh</span> <span class="token string">&#39;/usr/local/maven/bin/mvn package&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        stage<span class="token punctuation">(</span><span class="token string">&#39;Publish Harbor Image&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                sshPublisher<span class="token punctuation">(</span>publishers: <span class="token punctuation">[</span>
                    sshPublisherDesc<span class="token punctuation">(</span>
                        configName: <span class="token string">&#39;harbor-155&#39;</span>, 
                        transfers: <span class="token punctuation">[</span>
                            sshTransfer<span class="token punctuation">(</span>
                                cleanRemote: false, 
                                excludes: <span class="token string">&#39;&#39;</span>, 
                                execCommand: <span class="token string">&#39;&#39;</span>, 
                                execTimeout: <span class="token number">120000</span>, 
                                flatten: false, 
                                makeEmptyDirs: false, 
                                noDefaultExcludes: false, 
                                patternSeparator: <span class="token string">&#39;[, ]+&#39;</span>, 
                                remoteDirectory: <span class="token string">&#39;&#39;</span>, 
                                remoteDirectorySDF: false, 
                                removePrefix: <span class="token string">&#39;target&#39;</span>, 
                                sourceFiles: <span class="token string">&#39;target/*.jar&#39;</span>
                            <span class="token punctuation">)</span>, 
                            sshTransfer<span class="token punctuation">(</span>
                                cleanRemote: false, 
                                excludes: <span class="token string">&#39;&#39;</span>, 
                                execCommand: <span class="token string">&#39;&#39;</span>&#39;docker build <span class="token parameter variable">-t</span> <span class="token number">192.168</span>.1.155:80/public/springbootdemo:<span class="token variable">$tag</span> /usr/local/
<span class="token function">docker</span> login <span class="token parameter variable">-u</span> admin <span class="token parameter variable">-p</span> Harbor12345 <span class="token number">192.168</span>.1.155:80
<span class="token function">docker</span> push <span class="token number">192.168</span>.1.155:80/public/springbootdemo:<span class="token variable">$tag</span><span class="token string">&#39;&#39;</span>&#39;, 
                                execTimeout: <span class="token number">120000</span>, 
                                flatten: false, 
                                makeEmptyDirs: false, 
                                noDefaultExcludes: false, 
                                patternSeparator: <span class="token string">&#39;[, ]+&#39;</span>, 
                                remoteDirectory: <span class="token string">&#39;&#39;</span>, 
                                remoteDirectorySDF: false, 
                                removePrefix: <span class="token string">&#39;docker&#39;</span>, 
                                sourceFiles: <span class="token string">&#39;docker/*&#39;</span>
                            <span class="token punctuation">)</span>
                        <span class="token punctuation">]</span>, 
                        usePromotionTimestamp: false, 
                        useWorkspaceInPromotion: false, 
                        verbose: <span class="token boolean">false</span>
                    <span class="token punctuation">)</span>
                <span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        stage<span class="token punctuation">(</span><span class="token string">&#39;Run Container&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                sshPublisher<span class="token punctuation">(</span>publishers: <span class="token punctuation">[</span>
                    sshPublisherDesc<span class="token punctuation">(</span>
                        configName: <span class="token string">&#39;K8S-Master-177&#39;</span>, 
                        transfers: <span class="token punctuation">[</span>
                            sshTransfer<span class="token punctuation">(</span>
                                cleanRemote: false, 
                                excludes: <span class="token string">&#39;&#39;</span>, 
                                execCommand:  <span class="token string">&#39;&#39;</span>&#39;helm uninstall springbootdemo
kubectl delete deployment springbootdemo-deployment
kubectl delete <span class="token function">service</span> springbootdemo-service
helm repo <span class="token function">add</span> my-repo http://192.168.1.242:8080/
helm repo update
helm <span class="token function">install</span> springbootdemo my-repo/springbootdemo-charts <span class="token parameter variable">--set</span> <span class="token assign-left variable">replicas</span><span class="token operator">=</span><span class="token variable">$rep</span> <span class="token parameter variable">--set</span> <span class="token assign-left variable">tag</span><span class="token operator">=</span><span class="token variable">$tag</span><span class="token string">&#39;&#39;</span>&#39;,
                                execTimeout: <span class="token number">120000</span>, 
                                flatten: false, 
                                makeEmptyDirs: false, 
                                noDefaultExcludes: false, 
                                patternSeparator: <span class="token string">&#39;[, ]+&#39;</span>, 
                                remoteDirectory: <span class="token string">&#39;&#39;</span>, 
                                remoteDirectorySDF: false, 
                                removePrefix: <span class="token string">&#39;&#39;</span>, 
                                sourceFiles: <span class="token string">&#39;deployment.yml&#39;</span>
                            <span class="token punctuation">)</span>
                        <span class="token punctuation">]</span>, 
                        usePromotionTimestamp: false, 
                        useWorkspaceInPromotion: false, 
                        verbose: <span class="token boolean">false</span>
                    <span class="token punctuation">)</span>
                <span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwe53558c7ce80c50c61e43bef5aacd8e8.png" alt="Jenkins29.png" tabindex="0"><figcaption>Jenkins29.png</figcaption></figure><h2 id="helm流水线发布的补充修正" tabindex="-1"><a class="header-anchor" href="#helm流水线发布的补充修正"><span>Helm流⽔线发布的补充修正</span></a></h2><p>对Helm打包、上传的⼯作交给Jenkins，⽽不应由K8S Master完成。<br> 因此要针对Jenkins容器内安装Helm，完成Helm打包上传<br> 将前⾯⽣成的charts/springbootdemo-charts复制到代码中，并上传⾄Gitlab</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/bin/
<span class="token comment"># 下载我准备好的Helm</span>
<span class="token function">wget</span> --no-check-certificate https://manongbiji.oss-cn-beijing.aliyuncs.com/ittailkshow/devops/download/helm
<span class="token comment">#复制到Jenkins容器内部，Helm会⾃动启⽤，记得授权</span>
chomd <span class="token number">777</span> /usr/bin/helm
<span class="token function">docker</span> <span class="token function">cp</span> /usr/bin/helm jenkins:/usr/bin/helm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调整流⽔线脚本，在Maven build stage后⾯增加下⾯的阶段，完成Helm Package与上传私服</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>stage<span class="token punctuation">(</span><span class="token string">&#39;Helm Build&amp;Upload&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 steps <span class="token punctuation">{</span>
 <span class="token function">sh</span> <span class="token string">&#39;curl -X DELETE http://192.168.1.242:8080/api/charts/springbootdemo-charts/1.0.0&#39;</span>
 <span class="token function">sh</span> <span class="token string">&#39;helm package ./charts/springbootdemo-charts&#39;</span>
 <span class="token function">sh</span> <span class="token string">&#39;curl --data-binary \\&quot;@springbootdemo-charts-1.0.0.tgz\\&quot; http://192.168.1.242:8080/api/charts&#39;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完整脚本</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>pipeline <span class="token punctuation">{</span>
    agent any
    stages <span class="token punctuation">{</span>
        stage<span class="token punctuation">(</span><span class="token string">&#39;Pull SourceCode&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                checkout<span class="token punctuation">(</span><span class="token punctuation">[</span>
                    <span class="token variable">$class</span><span class="token builtin class-name">:</span> <span class="token string">&#39;GitSCM&#39;</span>, 
                    branches: <span class="token punctuation">[</span><span class="token punctuation">[</span>name: <span class="token string">&#39;$tag&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>, 
                    extensions: <span class="token punctuation">[</span><span class="token punctuation">]</span>, 
                    userRemoteConfigs: <span class="token punctuation">[</span><span class="token punctuation">[</span>url: <span class="token string">&#39;http://192.168.1.240/root/springbootdemo&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
                <span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        stage<span class="token punctuation">(</span><span class="token string">&#39;Maven Build&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                <span class="token function">sh</span> <span class="token string">&#39;/usr/local/maven/bin/mvn package&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        stage<span class="token punctuation">(</span><span class="token string">&#39;Helm Build&amp;Upload&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          steps <span class="token punctuation">{</span>
          <span class="token function">sh</span> <span class="token string">&#39;curl -X DELETE http://192.168.1.242:8080/api/charts/springbootdemo-charts/1.0.0&#39;</span>
          <span class="token function">sh</span> <span class="token string">&#39;helm package ./charts/springbootdemo-charts&#39;</span>
          <span class="token function">sh</span> <span class="token string">&#39;curl --data-binary \\&quot;@springbootdemo-charts-1.0.0.tgz\\&quot; http://192.168.1.242:8080/api/charts&#39;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        stage<span class="token punctuation">(</span><span class="token string">&#39;Publish Harbor Image&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                sshPublisher<span class="token punctuation">(</span>publishers: <span class="token punctuation">[</span>
                    sshPublisherDesc<span class="token punctuation">(</span>
                        configName: <span class="token string">&#39;harbor-155&#39;</span>, 
                        transfers: <span class="token punctuation">[</span>
                            sshTransfer<span class="token punctuation">(</span>
                                cleanRemote: false, 
                                excludes: <span class="token string">&#39;&#39;</span>, 
                                execCommand: <span class="token string">&#39;&#39;</span>, 
                                execTimeout: <span class="token number">120000</span>, 
                                flatten: false, 
                                makeEmptyDirs: false, 
                                noDefaultExcludes: false, 
                                patternSeparator: <span class="token string">&#39;[, ]+&#39;</span>, 
                                remoteDirectory: <span class="token string">&#39;&#39;</span>, 
                                remoteDirectorySDF: false, 
                                removePrefix: <span class="token string">&#39;target&#39;</span>, 
                                sourceFiles: <span class="token string">&#39;target/*.jar&#39;</span>
                            <span class="token punctuation">)</span>, 
                            sshTransfer<span class="token punctuation">(</span>
                                cleanRemote: false, 
                                excludes: <span class="token string">&#39;&#39;</span>, 
                                execCommand: <span class="token string">&#39;&#39;</span>&#39;docker build <span class="token parameter variable">-t</span> <span class="token number">192.168</span>.1.155:80/public/springbootdemo:<span class="token variable">$tag</span> /usr/local/
<span class="token function">docker</span> login <span class="token parameter variable">-u</span> admin <span class="token parameter variable">-p</span> Harbor12345 <span class="token number">192.168</span>.1.155:80
<span class="token function">docker</span> push <span class="token number">192.168</span>.1.155:80/public/springbootdemo:<span class="token variable">$tag</span><span class="token string">&#39;&#39;</span>&#39;, 
                                execTimeout: <span class="token number">120000</span>, 
                                flatten: false, 
                                makeEmptyDirs: false, 
                                noDefaultExcludes: false, 
                                patternSeparator: <span class="token string">&#39;[, ]+&#39;</span>, 
                                remoteDirectory: <span class="token string">&#39;&#39;</span>, 
                                remoteDirectorySDF: false, 
                                removePrefix: <span class="token string">&#39;docker&#39;</span>, 
                                sourceFiles: <span class="token string">&#39;docker/*&#39;</span>
                            <span class="token punctuation">)</span>
                        <span class="token punctuation">]</span>, 
                        usePromotionTimestamp: false, 
                        useWorkspaceInPromotion: false, 
                        verbose: <span class="token boolean">false</span>
                    <span class="token punctuation">)</span>
                <span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        stage<span class="token punctuation">(</span><span class="token string">&#39;Run Container&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                sshPublisher<span class="token punctuation">(</span>publishers: <span class="token punctuation">[</span>
                    sshPublisherDesc<span class="token punctuation">(</span>
                        configName: <span class="token string">&#39;K8S-Master-177&#39;</span>, 
                        transfers: <span class="token punctuation">[</span>
                            sshTransfer<span class="token punctuation">(</span>
                                cleanRemote: false, 
                                excludes: <span class="token string">&#39;&#39;</span>, 
                                execCommand:  <span class="token string">&#39;&#39;</span>&#39;helm uninstall springbootdemo
kubectl delete deployment springbootdemo-deployment
kubectl delete <span class="token function">service</span> springbootdemo-service
helm repo <span class="token function">add</span> my-repo http://192.168.1.242:8080/
helm repo update
helm <span class="token function">install</span> springbootdemo my-repo/springbootdemo-charts <span class="token parameter variable">--set</span> <span class="token assign-left variable">replicas</span><span class="token operator">=</span><span class="token variable">$rep</span> <span class="token parameter variable">--set</span> <span class="token assign-left variable">tag</span><span class="token operator">=</span><span class="token variable">$tag</span><span class="token string">&#39;&#39;</span>&#39;,
                                execTimeout: <span class="token number">120000</span>, 
                                flatten: false, 
                                makeEmptyDirs: false, 
                                noDefaultExcludes: false, 
                                patternSeparator: <span class="token string">&#39;[, ]+&#39;</span>, 
                                remoteDirectory: <span class="token string">&#39;&#39;</span>, 
                                remoteDirectorySDF: false, 
                                removePrefix: <span class="token string">&#39;&#39;</span>, 
                                sourceFiles: <span class="token string">&#39;deployment.yml&#39;</span>
                            <span class="token punctuation">)</span>
                        <span class="token punctuation">]</span>, 
                        usePromotionTimestamp: false, 
                        useWorkspaceInPromotion: false, 
                        verbose: <span class="token boolean">false</span>
                    <span class="token punctuation">)</span>
                <span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="devops流水线总结" tabindex="-1"><a class="header-anchor" href="#devops流水线总结"><span>DevOps流⽔线总结</span></a></h2><p><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw1aac97dcb1e9526e672307e7a5b884cd.png" alt="cicd4.png"><br> 执行流程</p><ol><li>IDEA推送代码的IDEA仓库，内含代码、Dockerfile、HelmCharts</li><li>Gitlab接受到代码后，研发⼈员定义Tag，如配置WebHook，则⾃动触发Jenkins流⽔线</li><li>配置管理员、运维⼈员在Jenkins选择Tag，开始Jekins流⽔线。<br> a. Jenkins 从Gitlab checkout指定Tag的代码<br> b. Jenkins本地执⾏mvn package⽣成Jar包<br> c. Jenkins本地执⾏helm package⽣成helm-charts.tgz⽂件<br> d. Jenkins将Jar与Dockerfile发送到Harbor镜像服务器，先执⾏docker build构建镜像，再执⾏docker push将镜像推送是Habor仓库<br> e. Jenkins将本地⽣成的helm-chart.tgz通过curl --data-binary 上传⾄Helm Museum私服<br> f. Jenkins远程连接到K8S Master执⾏helm install，K8S Master先拉取Helm Charts，再执⾏脚本⾃动从Habor拉取Tag镜像，完整⾃动化发布流程</li></ol><p>扩展点</p><ol><li>每个步骤的正确性确认</li><li>部署结果通知，如⾃动发送Email、⾃动推送钉钉等</li><li>安全校验与RBAC权限</li><li>K8S多环境的管理与发布</li><li>增加对Jenkins Pipeline的版本管理</li><li>其他各种细节...</li></ol>`,26);function Wn(Un,Bn){const a=l("ExternalLinkIcon");return c(),p("div",null,[r,n("p",null,[s("访问"),n("a",d,[s("http://192.168.1.241:8080"),e(a)]),s("，将上面的密码贴进去"),u,m,b,s(" 等待初始化=>选“选择插件来安装”选项=>点击安装=>等待安装"),v,s(" 初始化用户名密码root，邮箱随便x@163.com=>保存并完成"),k,g,h,s(" 设置访问地址"),n("a",f,[s("http://192.168.1.241:8080"),e(a)]),s("，或者是有域名的=>保存并完成"),_,S]),P,n("p",null,[s("新建项目名为springbootdemo选择⾃由⻛格"),y,H,E,s(" 源码管理=>Repository URL:"),n("a",Y,[s("http://192.168.1.240/root/springbootdemo="),e(a)]),s(">指定分支(为空时代表any)*/master"),x,A,w,s(" Build Steps=>添加构建步骤=>执行shell=>应用并保存")]),q,n("p",null,[s("注意上面的命令在176上能运行才行"),I,R,M,s(" 勾选⾼级->Exec in pty（⾮常重要）=>应用=>保存"),D,N,j,s(" 再次执⾏构建，访问"),n("a",z,[s("http://192.168.1.176"),e(a)]),C,s(" 可以看到已经⾃动构建并⾃动启动应⽤")]),Z,n("p",null,[s("访问"),n("a",J,[s("http://192.168.1.176:80"),e(a)])]),T,n("p",null,[s("流⽔线部分选择Pipeline script from SCM"),O,s(" Repository URL: "),n("a",$,[s("http://192.168.1.240/root/springbootdemo"),e(a)]),F,s(" 指定分⽀：*/master"),K,s(" 脚本路径：Jenkinsfile")]),G,n("p",null,[s("选择1.单机部署"),V,L,W,s(" 输⼊177服务器root密码：root"),U,B,Q,s(" 安装成功，⽣成各种⽤户名密码"),X,nn,sn,s(" 访问"),n("a",an,[s("http://192.168.1.177:30080"),e(a)]),en,s(" ⽤户名：admin"),tn,s(" 密码：Kuboard123"),ln,cn]),pn,n("p",null,[s("访问Grafana监控仪表盘"),on,n("a",rn,[s("http://192.168.1.177:30000"),e(a)]),dn,s(" ⽤户名：admin"),un,s(" 密码：admin"),mn,s(" 为docker-daemon.json增加insecure-registries私有仓库")]),bn,n("p",null,[n("a",vn,[s("http://192.168.1.177:31005"),e(a)])]),kn,n("p",null,[s("回到Gitlab192.168.1.240，点击Menu->Admin->setting->Network->Outbound requests ,勾选Allow requests to the local network from web hooks and services，允许外部⽹络远程调⽤Webhook"),gn,hn,fn,s(" 启⽤Webhook，选择springboot-demo->Settings->Webhooks，输⼊项："),_n,s(" URL："),n("a",Sn,[s("http://192.168.1.241:8080/generic-webhook-trigger/invoke"),e(a)]),Pn,s(" Secret token：123"),yn,s(" Trigger：Tag push events"),Hn,s(" 在下⽅的Project Hooks点击Test，触发Tag push events，测试环境"),En,Yn,xn,s(" ⽬前构建因为没有传递Tag变量所以构建会失败"),An,s(" 在Gitlab Project Hooks点Edit，可以查看发送Webhook的明细"),wn,s(" 在Webhook请求头中ref项包含的发布的Tag，将其截取出来赋给Jenkins Tag变量即可"),qn,In,Rn,s(" 定义tag变量，值来⾃请求体的ref，同时忽略掉refs/tags/前缀，只保"),Mn,s(" 留1.0.7部分，如果没有这个选项，则tag默认值为1.0.0"),Dn,s(" 在Jenkins Webhook⾯板选择Post Content Parameters"),Nn,s(" Variable：tag"),jn,s(" Expression：$.ref"),zn,s(" Type：JSONPath"),Cn,s(" Value filter：refs/tags/"),Zn,s(" Default value：1.0.0"),Jn,Tn,On,s(" 新建tag后根据版本号构建成功200")]),$n,Fn,n("p",null,[s("查找相应包"),n("a",Kn,[s("https://artifacthub.io/"),e(a)])]),Gn,n("p",null,[n("a",Vn,[s("https://github.com/helm/chartmuseum"),e(a)])]),Ln])}const ns=t(o,[["render",Wn],["__file","cicd.html.vue"]]),ss=JSON.parse('{"path":"/backend/containerservice/cicd.html","title":"CICD","lang":"zh-CN","frontmatter":{"title":"CICD","date":"2023-01-01T00:00:00.000Z","tags":"CICD","categories":"运维","description":"DevOps Development（开发）和 Operations（运维）的组合，是⼀种⽅法论，是⼀组过程、⽅法与系统的统称，⽤于促进应⽤开发DEV、应⽤运维OPS和质量保障（QA）部⻔之间的沟通、协作与整合，以期打破传统开发和运营之间的壁垒和鸿沟； 通过⾃动化软件交付和架构变更的流程，来使得构建、测试、发布软件能够更加地快捷、频繁和可靠；具体来说，...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/containerservice/cicd.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"CICD"}],["meta",{"property":"og:description","content":"DevOps Development（开发）和 Operations（运维）的组合，是⼀种⽅法论，是⼀组过程、⽅法与系统的统称，⽤于促进应⽤开发DEV、应⽤运维OPS和质量保障（QA）部⻔之间的沟通、协作与整合，以期打破传统开发和运营之间的壁垒和鸿沟； 通过⾃动化软件交付和架构变更的流程，来使得构建、测试、发布软件能够更加地快捷、频繁和可靠；具体来说，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw6b453f16568a9dcfabe40633c508c6d0.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CICD\\",\\"image\\":[\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw6b453f16568a9dcfabe40633c508c6d0.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwd28f80b73bea27afa3b2469ae8a16ec1.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw217f4220247230aa56c65280692cb450.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw894cd1ab73b89d804305120f03be7472.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwf9e5c23e2799829e5d0eb80cb7d09da4.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw9458b153267df7151387665288773778.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw6901d9039698f3db60fd0d3ecc1b9105.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwc0d68dcba05161530eb92796a3c74f66.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwe2242ee278419393f816207ace76918f.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwe1cbf985d35c8e2e0ca5e67e40e990ac.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwd411a36f1a52fee5fcfff29f3543e9dd.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw650cb8541a5a33da5e2b54f690d19ff2.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw1e7e18679cfc3b2c59f0eb35413e3dc3.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwba4b334d8e75d6d2d00e159a55ef9608.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwc5f5c31b85ffb74d64503fec10d91e8f.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw9c5925213b115c86938d7bd9ba31b12e.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwaeaa0f2f67553344a15e6860fe30c91a.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw765188861a04667c54a6b05fe4d514ee.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw7bf5e952a9c15ca327b58bc7b34043b2.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw3f060b0e1caf86f72695e27395cd595f.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw009398c3d41768ea94b6b388a7971803.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw382b27c678c4e162eb89c7c4e3114613.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw5862ccb7d0abcfe390675234e9214854.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwe9d571ef16b6112760d87c15581b5b0c.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw14fb786b3c53b1f21f8e40c891f1ee8a.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw1827643f0e8f386301f0fd0e5fb0b10b.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwa4620137b08167f2732eec8bd45dbd6c.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw7f13746d03f09837eb8eb4a15ddc9700.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwf1e1f07bc082174b3dc0c915f88514f6.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw27b1f5b58bd4194ce5b7b2ff6fc47ff8.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw27b1f5b58bd4194ce5b7b2ff6fc47ff8.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw017adbeaa20ffd838832968651dd5f9b.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw0bf1c43524aca488e54ddf14c1dd8307.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw12084ccae452cce85c0fe29514665809.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw39cbc92b9c4a9d65e6c1fe91b09ba59e.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw3998ccc43762872112ec89c00253d3da.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw90e5648b7282428a6159cf6db0797c15.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwec391542f55e353450fb538c58e758e6.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw331e7ab243c1d8755b592166eee0e556.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwab92321c5ddfe81768e664fcc027052c.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwa0acf36fcdc6bd74f9b088ae91bd9657.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw3df14b3a771e2f252a44e959e9edc671.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw75cab5f84411cb9559368ce89e39111f.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwebe0a996a969ffc3ad6ca16b6304f071.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw862017d53e56a3bedde49a967936bd5a.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwe8b285726bab60a2c54138ebbcbb19a5.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw7746f701d8969a00cf7ea804b15824e0.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw010c525fbd79969af9a6db1d0cd5eb5f.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwb0baf6e6ce3760d09f0225aa1a096b0e.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwa7314adc8745b5efc256666a18546cdc.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw04aca43c5300cebd2b89fd8310f8af4b.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwd78d1fecff5323bf805a5c2400e05add.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwad89e84b0ea5b3c21686e4a462b6d6c8.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw5263613458754b07ebb51045a8197ee4.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwe53558c7ce80c50c61e43bef5aacd8e8.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw1aac97dcb1e9526e672307e7a5b884cd.png\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"DevOps","slug":"devops","link":"#devops","children":[]},{"level":2,"title":"CI/CD","slug":"ci-cd","link":"#ci-cd","children":[]},{"level":2,"title":"Helm 与 Helm Chart","slug":"helm-与-helm-chart","link":"#helm-与-helm-chart","children":[]},{"level":2,"title":"安装部署过程","slug":"安装部署过程","link":"#安装部署过程","children":[]},{"level":2,"title":"184安装Docker、Docker Compose、jdk","slug":"_184安装docker、docker-compose、jdk","link":"#_184安装docker、docker-compose、jdk","children":[]},{"level":2,"title":"184安装gitlab（相当于github）分配ip240，不要与主机和虚拟机ip冲突","slug":"_184安装gitlab-相当于github-分配ip240-不要与主机和虚拟机ip冲突","link":"#_184安装gitlab-相当于github-分配ip240-不要与主机和虚拟机ip冲突","children":[]},{"level":2,"title":"184安装Jenkins，分配ip241","slug":"_184安装jenkins-分配ip241","link":"#_184安装jenkins-分配ip241","children":[]},{"level":2,"title":"gitlab创建项目","slug":"gitlab创建项目","link":"#gitlab创建项目","children":[]},{"level":2,"title":"176安装docker、docker、Compose、jdk","slug":"_176安装docker、docker、compose、jdk","link":"#_176安装docker、docker、compose、jdk","children":[]},{"level":2,"title":"jekins设置","slug":"jekins设置","link":"#jekins设置","children":[]},{"level":2,"title":"⾃动构建Docker镜像","slug":"自动构建docker镜像","link":"#自动构建docker镜像","children":[]},{"level":2,"title":"单独虚拟机安装部署Harbor镜像仓库(等价于dockerHub)","slug":"单独虚拟机安装部署harbor镜像仓库-等价于dockerhub","link":"#单独虚拟机安装部署harbor镜像仓库-等价于dockerhub","children":[]},{"level":2,"title":"Jenkins⾃动实现CI持续集成","slug":"jenkins自动实现ci持续集成","link":"#jenkins自动实现ci持续集成","children":[]},{"level":2,"title":"Jenkins参数化构建多版本发布","slug":"jenkins参数化构建多版本发布","link":"#jenkins参数化构建多版本发布","children":[]},{"level":2,"title":"Jenkins Pipeline流⽔线作业","slug":"jenkins-pipeline流水线作业","link":"#jenkins-pipeline流水线作业","children":[]},{"level":2,"title":"Gitlab托管Jenkinsfile","slug":"gitlab托管jenkinsfile","link":"#gitlab托管jenkinsfile","children":[]},{"level":2,"title":"为什么要引⼊Kubernetes","slug":"为什么要引入kubernetes","link":"#为什么要引入kubernetes","children":[]},{"level":2,"title":"177快速部署Kubernetes","slug":"_177快速部署kubernetes","link":"#_177快速部署kubernetes","children":[]},{"level":2,"title":"创建KS部署(Deployment)脚本","slug":"创建ks部署-deployment-脚本","link":"#创建ks部署-deployment-脚本","children":[]},{"level":2,"title":"创建KS服务（Service）脚本","slug":"创建ks服务-service-脚本","link":"#创建ks服务-service-脚本","children":[]},{"level":2,"title":"Jenkins流⽔线驱动KS持续部署","slug":"jenkins流水线驱动ks持续部署","link":"#jenkins流水线驱动ks持续部署","children":[]},{"level":2,"title":"Gitlab Webhook⾃动版本发布","slug":"gitlab-webhook自动版本发布","link":"#gitlab-webhook自动版本发布","children":[]},{"level":2,"title":"Helm：Kubernetes应⽤包管理⼯具","slug":"helm-kubernetes应用包管理工具","link":"#helm-kubernetes应用包管理工具","children":[]},{"level":2,"title":"构建Helm私有仓库发布⾃定义Charts","slug":"构建helm私有仓库发布自定义charts","link":"#构建helm私有仓库发布自定义charts","children":[]},{"level":2,"title":"基于Charts模板实现版本动态发布","slug":"基于charts模板实现版本动态发布","link":"#基于charts模板实现版本动态发布","children":[]},{"level":2,"title":"基于Helm实施Jenkins动态发布","slug":"基于helm实施jenkins动态发布","link":"#基于helm实施jenkins动态发布","children":[]},{"level":2,"title":"Helm流⽔线发布的补充修正","slug":"helm流水线发布的补充修正","link":"#helm流水线发布的补充修正","children":[]},{"level":2,"title":"DevOps流⽔线总结","slug":"devops流水线总结","link":"#devops流水线总结","children":[]}],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":26.51,"words":7952},"filePathRelative":"backend/containerservice/cicd.md","localizedDate":"2023年1月1日","excerpt":"<!--more-->\\n<!-- TOC -->\\n<h2>DevOps</h2>\\n<p>Development（开发）和 Operations（运维）的组合，是⼀种⽅法论，是⼀组过程、⽅法与系统的统称，⽤于促进应⽤开发DEV、应⽤运维OPS和质量保障（QA）部⻔之间的沟通、协作与整合，以期打破传统开发和运营之间的壁垒和鸿沟；<br>\\n通过⾃动化软件交付和架构变更的流程，来使得构建、测试、发布软件能够更加地快捷、频繁和可靠；具体来说，就是在软件交付和部署过程中提⾼沟通与协作的效率，旨在更快、更可靠的的发布更⾼质量的产品；<br>\\nDevOps并不指代某⼀特定的软件⼯具或软件⼯具组合；各种⼯具软件或软件组合可以实现 DevOps 的概念⽅法，与软件开发中设计到的 OOP、AOP、IOC（或DI）等类似，是⼀种理论或过程或⽅法的抽象或代称。当下容器化技术与K8S是DevOps的核⼼</p>","autoDesc":true}');export{ns as comp,ss as data};
