import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,e as r}from"./app-7KT7HDzT.js";const a={},i=r(`<p>quartz是用于执行定时任务的框架</p><h1 id="_1-quartz的介绍" tabindex="-1"><a class="header-anchor" href="#_1-quartz的介绍"><span>1. Quartz的介绍</span></a></h1><p>Quartz是OpenSymphony开源组织在Job scheduling领域又一个开源项目，它可以与J2EE与J2SE应用程序相结合也可以单独使用。<br> Quartz可以用来创建简单或为运行十个，百个，甚至是好几万个Jobs这样复杂的程序。Jobs可以做成标准的Java组件或 EJBs。</p><h1 id="_2-quartz的使用" tabindex="-1"><a class="header-anchor" href="#_2-quartz的使用"><span>2. Quartz的使用</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>创建maven工程，导入spring和quartz相关依赖
&lt;!-- 引入quartz对应的依赖 --&gt;
&lt;dependency&gt;
	&lt;groupId&gt;org.quartz-scheduler&lt;/groupId&gt;
	&lt;artifactId&gt;quartz&lt;/artifactId&gt;
	&lt;version&gt;2.2.3&lt;/version&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
	&lt;groupId&gt;org.quartz-scheduler&lt;/groupId&gt;
	&lt;artifactId&gt;quartz-jobs&lt;/artifactId&gt;
	&lt;version&gt;2.2.3&lt;/version&gt;
&lt;/dependency&gt;

创建任务类
public class MyJob {
	public void run() {
		System.out.println(&quot;自定义的作业类执行了：&quot; + 
				new SimpleDateFormat(&quot;yyyy-MM-dd HH:mm:ss&quot;).format(new Date()));
	}
}

在spring配置文件中配置任务类
&lt;!-- 注册自定义作业类 --&gt;
&lt;bean id=&quot;myJob&quot; class=&quot;com.itheima.quartz.MyJob&quot;&gt;&lt;/bean&gt;

在spring配置文件中配置JobDetail
&lt;!-- 配置JobDetail --&gt;
&lt;bean id=&quot;jobDetail&quot; class=&quot;org.springframework.scheduling.quartz.MethodInvokingJobDetailFactoryBean&quot;&gt;
	&lt;!-- 注入目标对象 --&gt;
	&lt;property name=&quot;targetObject&quot; ref=&quot;myJob&quot;/&gt;
	&lt;!-- 注入目标方法 --&gt;
	&lt;property name=&quot;targetMethod&quot; value=&quot;run&quot;/&gt;
&lt;/bean&gt;

在spring配置文件中配置触发器
&lt;!-- 配置触发器 --&gt;
&lt;bean id=&quot;myTrigger&quot; class=&quot;org.springframework.scheduling.quartz.CronTriggerFactoryBean&quot;&gt;
	&lt;!-- 注入任务详情对象 --&gt;
	&lt;property name=&quot;jobDetail&quot; ref=&quot;jobDetail&quot;/&gt;
	&lt;!-- 注入cron表达式，通过这个表达式指定触发的时间点 --&gt;
	&lt;property name=&quot;cronExpression&quot;&gt;
		&lt;value&gt;0/2 * * * * ? 2017-2099&lt;/value&gt;
	&lt;/property&gt;
&lt;/bean&gt;

在spring配置文件中配置scheduler
&lt;!-- 配置调度工厂 --&gt;
&lt;bean id=&quot;schedulerFactoryBean&quot; class=&quot;org.springframework.scheduling.quartz.SchedulerFactoryBean&quot;&gt;
	&lt;!-- 注入触发器 --&gt;
	&lt;property name=&quot;triggers&quot;&gt;
		&lt;list&gt;
			&lt;ref bean=&quot;myTrigger&quot;/&gt;
		&lt;/list&gt;
	&lt;/property&gt;
&lt;/bean&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[i];function s(d,o){return e(),n("div",null,l)}const g=t(a,[["render",s],["__file","quartz.html.vue"]]),v=JSON.parse('{"path":"/backend/jobscheduling/quartz.html","title":"Quartz","lang":"zh-CN","frontmatter":{"title":"Quartz","date":"2023-01-01T00:00:00.000Z","tags":"Quartz","categories":"后端","description":"quartz是用于执行定时任务的框架 1. Quartz的介绍 Quartz是OpenSymphony开源组织在Job scheduling领域又一个开源项目，它可以与J2EE与J2SE应用程序相结合也可以单独使用。 Quartz可以用来创建简单或为运行十个，百个，甚至是好几万个Jobs这样复杂的程序。Jobs可以做成标准的Java组件或 EJBs。 ...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/jobscheduling/quartz.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"Quartz"}],["meta",{"property":"og:description","content":"quartz是用于执行定时任务的框架 1. Quartz的介绍 Quartz是OpenSymphony开源组织在Job scheduling领域又一个开源项目，它可以与J2EE与J2SE应用程序相结合也可以单独使用。 Quartz可以用来创建简单或为运行十个，百个，甚至是好几万个Jobs这样复杂的程序。Jobs可以做成标准的Java组件或 EJBs。 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Quartz\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":1.25,"words":376},"filePathRelative":"backend/jobscheduling/quartz.md","localizedDate":"2023年1月1日","excerpt":"<p>quartz是用于执行定时任务的框架</p>\\n<!--more-->\\n<h1>1. Quartz的介绍</h1>\\n<p>Quartz是OpenSymphony开源组织在Job scheduling领域又一个开源项目，它可以与J2EE与J2SE应用程序相结合也可以单独使用。<br>\\nQuartz可以用来创建简单或为运行十个，百个，甚至是好几万个Jobs这样复杂的程序。Jobs可以做成标准的Java组件或 EJBs。</p>\\n<h1>2. Quartz的使用</h1>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>创建maven工程，导入spring和quartz相关依赖\\n&lt;!-- 引入quartz对应的依赖 --&gt;\\n&lt;dependency&gt;\\n\\t&lt;groupId&gt;org.quartz-scheduler&lt;/groupId&gt;\\n\\t&lt;artifactId&gt;quartz&lt;/artifactId&gt;\\n\\t&lt;version&gt;2.2.3&lt;/version&gt;\\n&lt;/dependency&gt;\\n&lt;dependency&gt;\\n\\t&lt;groupId&gt;org.quartz-scheduler&lt;/groupId&gt;\\n\\t&lt;artifactId&gt;quartz-jobs&lt;/artifactId&gt;\\n\\t&lt;version&gt;2.2.3&lt;/version&gt;\\n&lt;/dependency&gt;\\n\\n创建任务类\\npublic class MyJob {\\n\\tpublic void run() {\\n\\t\\tSystem.out.println(\\"自定义的作业类执行了：\\" + \\n\\t\\t\\t\\tnew SimpleDateFormat(\\"yyyy-MM-dd HH:mm:ss\\").format(new Date()));\\n\\t}\\n}\\n\\n在spring配置文件中配置任务类\\n&lt;!-- 注册自定义作业类 --&gt;\\n&lt;bean id=\\"myJob\\" class=\\"com.itheima.quartz.MyJob\\"&gt;&lt;/bean&gt;\\n\\n在spring配置文件中配置JobDetail\\n&lt;!-- 配置JobDetail --&gt;\\n&lt;bean id=\\"jobDetail\\" class=\\"org.springframework.scheduling.quartz.MethodInvokingJobDetailFactoryBean\\"&gt;\\n\\t&lt;!-- 注入目标对象 --&gt;\\n\\t&lt;property name=\\"targetObject\\" ref=\\"myJob\\"/&gt;\\n\\t&lt;!-- 注入目标方法 --&gt;\\n\\t&lt;property name=\\"targetMethod\\" value=\\"run\\"/&gt;\\n&lt;/bean&gt;\\n\\n在spring配置文件中配置触发器\\n&lt;!-- 配置触发器 --&gt;\\n&lt;bean id=\\"myTrigger\\" class=\\"org.springframework.scheduling.quartz.CronTriggerFactoryBean\\"&gt;\\n\\t&lt;!-- 注入任务详情对象 --&gt;\\n\\t&lt;property name=\\"jobDetail\\" ref=\\"jobDetail\\"/&gt;\\n\\t&lt;!-- 注入cron表达式，通过这个表达式指定触发的时间点 --&gt;\\n\\t&lt;property name=\\"cronExpression\\"&gt;\\n\\t\\t&lt;value&gt;0/2 * * * * ? 2017-2099&lt;/value&gt;\\n\\t&lt;/property&gt;\\n&lt;/bean&gt;\\n\\n在spring配置文件中配置scheduler\\n&lt;!-- 配置调度工厂 --&gt;\\n&lt;bean id=\\"schedulerFactoryBean\\" class=\\"org.springframework.scheduling.quartz.SchedulerFactoryBean\\"&gt;\\n\\t&lt;!-- 注入触发器 --&gt;\\n\\t&lt;property name=\\"triggers\\"&gt;\\n\\t\\t&lt;list&gt;\\n\\t\\t\\t&lt;ref bean=\\"myTrigger\\"/&gt;\\n\\t\\t&lt;/list&gt;\\n\\t&lt;/property&gt;\\n&lt;/bean&gt;\\n</code></pre></div>","autoDesc":true}');export{g as comp,v as data};
