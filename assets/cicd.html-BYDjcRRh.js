import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,a}from"./app-CAt2Ig6m.js";const t={},l=a(`<p>CICD</p><h1 id="安装部署过程" tabindex="-1"><a class="header-anchor" href="#安装部署过程"><span>安装部署过程</span></a></h1><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/c533f4cfab85ff5a80531.jpg" alt="CICD.png" tabindex="0"><figcaption>CICD.png</figcaption></figure><h1 id="_230安装docker-推荐配置-2核cpu-最少8g内存-centos-7" tabindex="-1"><a class="header-anchor" href="#_230安装docker-推荐配置-2核cpu-最少8g内存-centos-7"><span>230安装Docker 推荐配置：2核CPU，最少8G内存，CentOS 7</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>cat &gt;&gt; /etc/sysctl.conf &lt;&lt;-&#39;EOF&#39;
net.ipv4.ip_forward=1
vm.max_map_count=655360
EOF
sysctl -p
systemctl stop firewalld

# 安装底层工具
sudo yum install -y yum-utils device-mapper-persistent-data lvm2

# 加⼊阿⾥云yum仓库提速docker下载过程
sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

# 更新⼀下仓库的源信息
sudo yum makecache fast

# ⾃动安装下载Docker
sudo yum -y install docker-ce

# 启动Docker服务
sudo service docker start

# 验证docker是否启动成功
docker version

# Aliyun加速镜像下载
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json &lt;&lt;-&#39;EOF&#39;
{
 &quot;registry-mirrors&quot;: [&quot;https://fskvstob.mirror.aliyuncs.com&quot;]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_231安装openjdk8" tabindex="-1"><a class="header-anchor" href="#_231安装openjdk8"><span>231安装OpenJDK8+</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>yum -y install java-1.8.0-openjdk-devel.x86_64
sudo cat &gt;&gt; /etc/profile &lt;&lt;-&#39;EOF&#39;
export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk
export JRE_HOME=$JAVA_HOME/jre
export CLASSPATH=$JAVA_HOME/lib:$JRE_HOME/lib:$CLASSPATH
export PATH=$JAVA_HOME/bin:$JRE_HOME/bin:$PATH
EOF
source /etc/profile
echo $JAVA_HOME
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_230安装gitlab" tabindex="-1"><a class="header-anchor" href="#_230安装gitlab"><span>230安装gitlab</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 创建docker网络 开启Macvlan
docker network create -d macvlan \\
--subnet=192.168.31.0/24 \\
--ip-range=192.168.31.0/24 \\
--gateway=192.168.31.1 \\
-o parent=ens33 \\
macvlan31

# 生成目录并授权
rm -rf /etc/gitlab
rm -rf /var/log/gitlab
rm -rf /var/opt/gitlab
docker rm -f gitlab
mkdir -p /etc/gitlab
mkdir -p /var/log/gitlab
mkdir -p /var/opt/gitlab
chmod -R 755 /etc/gitlab
chmod -R 755 /var/log/gitlab
chmod -R 755 /var/opt/gitlab

# 安装gitlab容器
docker run --name gitlab \\
--hostname gitlab.example.com \\
--restart=always \\
--network macvlan31 --ip=192.168.0.100 \\
-v /etc/gitlab:/etc/gitlab \\
-v /var/log/gitlab:/var/log/gitlab \\
-v /var/opt/gitlab:/var/opt/gitlab \\
-d gitlab/gitlab-ce
docker logs -f gitlab


docker run --name gitlab \\
--hostname gitlab.example.com \\
--restart=always \\
--network macvlan31 --ip=192.168.0.100 \\
-v /etc/gitlab:/etc/gitlab \\
-v /var/log/gitlab:/var/log/gitlab \\
-v /var/opt/gitlab:/var/opt/gitlab \\
-d gitlab/gitlab-ce
docker logs -f gitlab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),s=[l];function d(r,c){return n(),i("div",null,s)}const m=e(t,[["render",d],["__file","cicd.html.vue"]]),u=JSON.parse(`{"path":"/backend/containerservice/cicd.html","title":"CICD","lang":"zh-CN","frontmatter":{"title":"CICD","date":"2023-01-01T00:00:00.000Z","tags":"CICD","categories":"运维","description":"CICD 安装部署过程 CICD.pngCICD.png 230安装Docker 推荐配置：2核CPU，最少8G内存，CentOS 7 231安装OpenJDK8+ 230安装gitlab","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/containerservice/cicd.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"CICD"}],["meta",{"property":"og:description","content":"CICD 安装部署过程 CICD.pngCICD.png 230安装Docker 推荐配置：2核CPU，最少8G内存，CentOS 7 231安装OpenJDK8+ 230安装gitlab"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/c533f4cfab85ff5a80531.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CICD\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/c533f4cfab85ff5a80531.jpg\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":1.13,"words":340},"filePathRelative":"backend/containerservice/cicd.md","localizedDate":"2023年1月1日","excerpt":"<p>CICD</p>\\n<!--more-->\\n<!-- TOC -->\\n<h1>安装部署过程</h1>\\n<figure><img src=\\"https://290ff162.telegraph-image-eg9.pages.dev/file/c533f4cfab85ff5a80531.jpg\\" alt=\\"CICD.png\\" tabindex=\\"0\\"><figcaption>CICD.png</figcaption></figure>\\n<h1>230安装Docker 推荐配置：2核CPU，最少8G内存，CentOS 7</h1>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>cat &gt;&gt; /etc/sysctl.conf &lt;&lt;-'EOF'\\nnet.ipv4.ip_forward=1\\nvm.max_map_count=655360\\nEOF\\nsysctl -p\\nsystemctl stop firewalld\\n\\n# 安装底层工具\\nsudo yum install -y yum-utils device-mapper-persistent-data lvm2\\n\\n# 加⼊阿⾥云yum仓库提速docker下载过程\\nsudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\\n\\n# 更新⼀下仓库的源信息\\nsudo yum makecache fast\\n\\n# ⾃动安装下载Docker\\nsudo yum -y install docker-ce\\n\\n# 启动Docker服务\\nsudo service docker start\\n\\n# 验证docker是否启动成功\\ndocker version\\n\\n# Aliyun加速镜像下载\\nsudo mkdir -p /etc/docker\\nsudo tee /etc/docker/daemon.json &lt;&lt;-'EOF'\\n{\\n \\"registry-mirrors\\": [\\"https://fskvstob.mirror.aliyuncs.com\\"]\\n}\\nEOF\\nsudo systemctl daemon-reload\\nsudo systemctl restart docker\\n</code></pre></div>","autoDesc":true}`);export{m as comp,u as data};
