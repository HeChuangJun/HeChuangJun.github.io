import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as s,c as r,b as e,d as a,e as d,a as n}from"./app-Cw8r8IGg.js";const m={},v=n('<p>maven项目管理工具</p><ul><li><a href="#1-maven%E6%A6%82%E8%BF%B0">1. maven概述</a></li><li><a href="#2-maven%E9%A1%B9%E7%9B%AE%E6%9E%84%E5%BB%BA%E8%BF%87%E7%A8%8B">2. maven项目构建过程</a></li><li><a href="#3-maven%E9%A1%B9%E7%9B%AE%E4%BE%9D%E8%B5%96%E7%AE%A1%E7%90%86">3. maven项目依赖管理</a></li><li><a href="#4-maven%E4%BB%93%E5%BA%93">4. maven仓库</a></li><li><a href="#5-maven%E5%B7%A5%E7%A8%8B%E7%9B%AE%E5%BD%95">5. maven工程目录</a></li><li><a href="#6-%E5%B8%B8%E7%94%A8maven%E5%91%BD%E4%BB%A4">6. 常用maven命令</a></li><li><a href="#7-maven%E6%A6%82%E5%BF%B5%E6%A8%A1%E5%9E%8B%E5%86%85%E5%AE%B9">7. maven概念模型内容</a></li><li><a href="#8-pomxml%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE">8. pom.xml基本配置</a></li><li><a href="#9-%E4%BE%9D%E8%B5%96%E7%AE%A1%E7%90%86">9. 依赖管理</a></li><li><a href="#10-%E4%BE%9D%E8%B5%96%E8%8C%83%E5%9B%B4%E5%AF%B9%E4%BC%A0%E9%80%92%E4%BE%9D%E8%B5%96%E7%9A%84%E5%BD%B1%E5%93%8D">10. 依赖范围对传递依赖的影响</a></li><li><a href="#11-%E4%BE%9D%E8%B5%96%E4%BC%A0%E9%80%92%E4%B8%8E%E4%BE%9D%E8%B5%96%E5%86%B2%E7%AA%81%E8%A7%A3%E5%86%B3">11. 依赖传递与依赖冲突解决</a></li></ul><h1 id="_1-maven概述" tabindex="-1"><a class="header-anchor" href="#_1-maven概述"><span>1. maven概述</span></a></h1><ul><li>apache下的项目管理工具,开源java项目</li><li>一步构建项目：项目构建过程标准化，一个命令完成、编译、测试、运行、打包、部署、运行(tomcat:run)</li><li>依赖管理：不用手动导入jar包，在pom.xml定义坐标自动从maven仓库中下载，不易出错</li><li>跨平台 window 和 linux都可以使用</li><li>遵循规范，提高开发效率，降低项目维护成本</li></ul><h1 id="_2-maven项目构建过程" tabindex="-1"><a class="header-anchor" href="#_2-maven项目构建过程"><span>2. maven项目构建过程</span></a></h1><ul><li>清理(clean)、编译(commpile)、测试、报告、</li><li>打包(package：java→jar、web→war)、部署</li><li>运行mavenLtomcat：run、tomcat7:run</li><li>一个命令完成构建、运行、方便快捷，每个构建阶段规范，有利于团队开发</li></ul><h1 id="_3-maven项目依赖管理" tabindex="-1"><a class="header-anchor" href="#_3-maven项目依赖管理"><span>3. maven项目依赖管理</span></a></h1><ul><li>通过pom.xml对jar包版本同一管理，避免冲突、可以从maven仓库中下载jar包</li></ul><h1 id="_4-maven仓库" tabindex="-1"><a class="header-anchor" href="#_4-maven仓库"><span>4. maven仓库</span></a></h1>',9),c=e("li",null,"优先查找本地仓库、没有查远程(可以私服)、最后中央、查到自动下载到本地仓库保存",-1),o=e("li",null,"本地仓库(默认:${usr.dir}/.m2/repository)",-1),g=e("li",null,"远程仓库：互联网或局域网内",-1),p={href:"//repo1.maven.org/maven2%E3%80%81maven%E5%9B%A2%E9%98%9F%E8%87%AA%E5%B7%B1%E7%BB%B4%E6%8A%A4",target:"_blank",rel:"noopener noreferrer"},u=e("li",null,"配置本地仓库",-1),E=n(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>F:\\apache-maven-3.5.3\\conf\\setting.xml
&lt;localRepository&gt;F:\\repository&lt;/localRepository&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_5-maven工程目录" tabindex="-1"><a class="header-anchor" href="#_5-maven工程目录"><span>5. maven工程目录</span></a></h1><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/92c263ed3f7d72f7502aa.png" alt="maven工程目录" tabindex="0"><figcaption>maven工程目录</figcaption></figure><h1 id="_6-常用maven命令" tabindex="-1"><a class="header-anchor" href="#_6-常用maven命令"><span>6. 常用maven命令</span></a></h1><ul><li>mvn compile 将src/main/java下的 文件编译为class文件 并放到target/classes目录下,不编译测试的代码</li><li>mvn test 执行src/test/java的单元测试类</li><li>mvn clean 删除target目录的内容(包括打包结果和编译结果)，清理后编译</li><li>mvn package java工程→jar、web工程→war包，默认jar包名称：artificild-version.jar</li><li>mvn install：将maven打成jar包或者war包发布到本地仓库(模块开发的时候使用)安装到仓库/groupId/artifacid/version</li><li>tomcat:run 一键启动</li></ul><h1 id="_7-maven概念模型内容" tabindex="-1"><a class="header-anchor" href="#_7-maven概念模型内容"><span>7. maven概念模型内容</span></a></h1><ul><li>项目对象模型:pom.xml定义项目坐标、依赖、信息、插件目标</li><li>标准集合:标准目录结构、生命周期阶段、依赖管理有标准的坐标定义</li><li>项目生命周期:清理(clean)、编译(commpile)、测试(test)、报告、打包(package：java→jar、web→war)、部署 通过命令实现生命周期</li><li>依赖管理系统:对jar包同一管理</li><li>运行定义在生命周期阶段中插件的目标的逻辑:maven管理项目生命周期过程都是基于插件完成的</li></ul><h1 id="_8-pom-xml基本配置" tabindex="-1"><a class="header-anchor" href="#_8-pom-xml基本配置"><span>8. pom.xml基本配置</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;project&gt;:文件的根节点
	&lt;modelVersion&gt;:pom.xml使用的对象模型版本
	&lt;groupId&gt;:项目名称：组织名+项目名。类似包名
	&lt;artifactId&gt;:模块名，子项目名或模块名称
	&lt;version&gt;:当前版本号snapshot快照版本非正式版本release为正式发布版
	&lt;packaging&gt;:打包类型jar、war、pom父工程使用这个设置与package有关
	&lt;name&gt;:项目的显示名，常用于maven的生成文档
	&lt;description&gt;:项目描述，常用于maven的生成文档
	&lt;dependencies&gt;:项目依赖构件配置，配置项目依赖构件的坐标
&lt;build&gt;:项目构建配置，配置编译，运行插件等
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_9-依赖管理" tabindex="-1"><a class="header-anchor" href="#_9-依赖管理"><span>9. 依赖管理</span></a></h1><ul><li>依赖范围(添加依赖jar包格式)</li><li>依赖war包、依赖模块\\依赖范围由强到弱的顺序是：compile&gt;provided&gt;runtime&gt;test<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/1981723b2ddbd1162469b.png" alt="1.png"><br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/5bc716d0fa32c19a37e1c.png" alt="2.png"><br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/0f9106b3033aecf7b87c6.png" alt="3.png"></li></ul><h1 id="_10-依赖范围对传递依赖的影响" tabindex="-1"><a class="header-anchor" href="#_10-依赖范围对传递依赖的影响"><span>10. 依赖范围对传递依赖的影响</span></a></h1><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/1b1f8d1ff53575fc3ff22.png" alt="4.png" tabindex="0"><figcaption>4.png</figcaption></figure><h1 id="_11-依赖传递与依赖冲突解决" tabindex="-1"><a class="header-anchor" href="#_11-依赖传递与依赖冲突解决"><span>11. 依赖传递与依赖冲突解决</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>- 调解原则
  - 第一声明者优先原则：谁先声明谁先依赖
  - 路径近者优先原则：谁的依赖层小，谁先被依赖
- 排除依赖
	&lt;dependency&gt;
		&lt;groupId&gt;org.apache.struts&lt;/groupId&gt;
		&lt;artifactId&gt;struts2-spring-plugin&lt;/artifactId&gt;
		&lt;version&gt;2.3.24&lt;/version&gt;
		&lt;exclusions&gt;
			&lt;exclusion&gt;
				&lt;groupId&gt;org.springframework&lt;/groupId&gt;
				&lt;artifactId&gt;spring-beans&lt;/artifactId&gt;
			&lt;/exclusion&gt;
		&lt;/exclusions&gt;
	&lt;/dependency&gt;
- 锁定版本:配置了锁定版本必须相应地配置依赖，但不需要指定版本
	&lt;dependencyManagement&gt;
		&lt;dependencies&gt;
			&lt;dependency&gt;
			&lt;groupId&gt;org.springframework&lt;/groupId&gt;
			&lt;artifactId&gt;spring-bean&lt;/artifactId&gt;
			&lt;version&gt;4.2.4.RELEASE&lt;/version&gt;
			&lt;/dependency&gt;
		&lt;/dependencies&gt;
	&lt;/dependencyManagement&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_12-maven私服-了解-自己看文档" tabindex="-1"><a class="header-anchor" href="#_12-maven私服-了解-自己看文档"><span>12. maven私服(了解)自己看文档</span></a></h1><h1 id="_13-springboot设置为windows服务-maven插件" tabindex="-1"><a class="header-anchor" href="#_13-springboot设置为windows服务-maven插件"><span>13. springboot设置为windows服务 maven插件</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;plugin&gt;
	&lt;groupId&gt;cn.joylau.code&lt;/groupId&gt;
	&lt;artifactId&gt;joylau-springboot-daemon-windows&lt;/artifactId&gt;
	&lt;version&gt;1.1.RELEASE&lt;/version&gt;
	&lt;executions&gt;
		&lt;execution&gt;
			&lt;id&gt;make-win-service&lt;/id&gt;
			&lt;phase&gt;install&lt;/phase&gt;
			&lt;goals&gt;
				&lt;goal&gt;make-win-service&lt;/goal&gt;
			&lt;/goals&gt;
		&lt;/execution&gt;
	&lt;/executions&gt;
	&lt;configuration&gt;
	&lt;vmOptions&gt;           
		-Xbootclasspath/a:config/ -Xmx1024m -Xms512m -XX:MaxPermSize=256m -XX:PermSize=128m -Dfile.encoding=UTF-8 -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.ssl=false -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.port=22221            
	&lt;/vmOptions&gt;
	&lt;arguments&gt;
	&lt;/arguments&gt;
&lt;/configuration&gt;
&lt;/plugin&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18);function h(f,b){const t=l("ExternalLinkIcon");return s(),r("div",null,[v,e("ul",null,[c,o,g,e("li",null,[a("中央仓库：http："),e("a",p,[a("//repo1.maven.org/maven2、maven团队自己维护"),d(t)])]),u]),E])}const A=i(m,[["render",h],["__file","maven.html.vue"]]),_=JSON.parse('{"path":"/backend/developmenttool/maven.html","title":"Maven","lang":"zh-CN","frontmatter":{"title":"Maven","date":"2023-01-01T00:00:00.000Z","tags":"Maven","categories":"后端","description":"maven项目管理工具 1. maven概述 2. maven项目构建过程 3. maven项目依赖管理 4. maven仓库 5. maven工程目录 6. 常用maven命令 7. maven概念模型内容 8. pom.xml基本配置 9. 依赖管理 10. 依赖范围对传递依赖的影响 11. 依赖传递与依赖冲突解决 1. maven概述 apach...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/developmenttool/maven.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"Maven"}],["meta",{"property":"og:description","content":"maven项目管理工具 1. maven概述 2. maven项目构建过程 3. maven项目依赖管理 4. maven仓库 5. maven工程目录 6. 常用maven命令 7. maven概念模型内容 8. pom.xml基本配置 9. 依赖管理 10. 依赖范围对传递依赖的影响 11. 依赖传递与依赖冲突解决 1. maven概述 apach..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/92c263ed3f7d72f7502aa.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Maven\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/92c263ed3f7d72f7502aa.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/1981723b2ddbd1162469b.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/5bc716d0fa32c19a37e1c.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/0f9106b3033aecf7b87c6.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/1b1f8d1ff53575fc3ff22.png\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":4.05,"words":1214},"filePathRelative":"backend/developmenttool/maven.md","localizedDate":"2023年1月1日","excerpt":"<p>maven项目管理工具</p>\\n<!-- TOC -->\\n<ul>\\n<li><a href=\\"#1-maven%E6%A6%82%E8%BF%B0\\">1. maven概述</a></li>\\n<li><a href=\\"#2-maven%E9%A1%B9%E7%9B%AE%E6%9E%84%E5%BB%BA%E8%BF%87%E7%A8%8B\\">2. maven项目构建过程</a></li>\\n<li><a href=\\"#3-maven%E9%A1%B9%E7%9B%AE%E4%BE%9D%E8%B5%96%E7%AE%A1%E7%90%86\\">3. maven项目依赖管理</a></li>\\n<li><a href=\\"#4-maven%E4%BB%93%E5%BA%93\\">4. maven仓库</a></li>\\n<li><a href=\\"#5-maven%E5%B7%A5%E7%A8%8B%E7%9B%AE%E5%BD%95\\">5. maven工程目录</a></li>\\n<li><a href=\\"#6-%E5%B8%B8%E7%94%A8maven%E5%91%BD%E4%BB%A4\\">6. 常用maven命令</a></li>\\n<li><a href=\\"#7-maven%E6%A6%82%E5%BF%B5%E6%A8%A1%E5%9E%8B%E5%86%85%E5%AE%B9\\">7. maven概念模型内容</a></li>\\n<li><a href=\\"#8-pomxml%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE\\">8. pom.xml基本配置</a></li>\\n<li><a href=\\"#9-%E4%BE%9D%E8%B5%96%E7%AE%A1%E7%90%86\\">9. 依赖管理</a></li>\\n<li><a href=\\"#10-%E4%BE%9D%E8%B5%96%E8%8C%83%E5%9B%B4%E5%AF%B9%E4%BC%A0%E9%80%92%E4%BE%9D%E8%B5%96%E7%9A%84%E5%BD%B1%E5%93%8D\\">10. 依赖范围对传递依赖的影响</a></li>\\n<li><a href=\\"#11-%E4%BE%9D%E8%B5%96%E4%BC%A0%E9%80%92%E4%B8%8E%E4%BE%9D%E8%B5%96%E5%86%B2%E7%AA%81%E8%A7%A3%E5%86%B3\\">11. 依赖传递与依赖冲突解决</a></li>\\n</ul>","autoDesc":true}');export{A as comp,_ as data};
