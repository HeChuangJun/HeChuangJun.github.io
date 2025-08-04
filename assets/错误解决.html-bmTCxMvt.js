import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o as r,c as i,a as e,b as n,d as o,e as l}from"./app-7KT7HDzT.js";const c={},p=l(`<p>常见错误解决</p><h1 id="常见报错解决" tabindex="-1"><a class="header-anchor" href="#常见报错解决"><span>常见报错解决</span></a></h1><h2 id="spring-整合junit4测试" tabindex="-1"><a class="header-anchor" href="#spring-整合junit4测试"><span>Spring 整合Junit4测试：</span></a></h2><pre><code>log4j:WARN No appenders could be found for logger 
	(org.springframework.test.context.junit4.SpringJUnit4ClassRunner).
	log4j:WARN Please initialize the log4j system properly.
	解决办法：在src下建新的file名为log4j.properties
	然后其内如下
	log4j.rootLogger=WARN, stdout
	log4j.appender.stdout=org.apache.log4j.ConsoleAppender
	log4j.appender.stdout.layout=org.apache.log4j.PatternLayout
	log4j.appender.stdout.layout.ConversionPattern=%d %p [%c] - %m%n
</code></pre><h2 id="junit4" tabindex="-1"><a class="header-anchor" href="#junit4"><span>Junit4</span></a></h2><pre><code>initilizationError[Runner:JUnit4](0.00)表示可能该方法没加@Test
</code></pre><h2 id="js使用时一定要注意每句后面加分号" tabindex="-1"><a class="header-anchor" href="#js使用时一定要注意每句后面加分号"><span>js使用时一定要注意每句后面加分号</span></a></h2><pre><code>jsp页面数据传递①hidden②？参数名=值
</code></pre><h2 id="maven错误" tabindex="-1"><a class="header-anchor" href="#maven错误"><span>maven错误</span></a></h2><pre><code>Batch update returned unexpected row count from update [0]; actual row count: 0;
	Batch update returned unexpected row count from update [0]; actual row count: 0; 
	expected: 1
	这个异常是由于主键设置为自增长/uuid，而在我们插入记录的时候设置了ID的值导致的
</code></pre><h2 id="maven项目启动的时候一定要设置好tomcat7的版本-注意端口占用问题" tabindex="-1"><a class="header-anchor" href="#maven项目启动的时候一定要设置好tomcat7的版本-注意端口占用问题"><span>Maven项目启动的时候一定要设置好tomcat7的版本，注意端口占用问题</span></a></h2><pre><code>&lt;plugin&gt;
	&lt;groupId&gt;org.apache.tomcat.maven&lt;/groupId&gt;
	&lt;artifactId&gt;tomcat7-maven-plugin&lt;/artifactId&gt;
	&lt;version&gt;2.2&lt;/version&gt;
	&lt;configuration&gt;
	&lt;!-- 可以灵活配置工程路径 --&gt;
	&lt;path&gt;/ssh&lt;/path&gt;
	&lt;!-- 可以灵活配置端口号 --&gt;
	&lt;port&gt;8080&lt;/port&gt;
	&lt;/configuration&gt;
	&lt;/plugin&gt;
</code></pre><h2 id="maven错误-1" tabindex="-1"><a class="header-anchor" href="#maven错误-1"><span>Maven错误</span></a></h2><pre><code>[ERROR] No compiler is provided in this environment. 
	Perhaps you are running on a JRE rather than a JDK?
	对于Java开发者来说, Installed JREs中使用jdk目录
	而不适用jre目录也是最好的选择. 按下图配置
</code></pre><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/0bf9fbde3ee68241766f7.png" alt="maven报错1.PNG" tabindex="0"><figcaption>maven报错1.PNG</figcaption></figure><h2 id="永久去除jsp报错" tabindex="-1"><a class="header-anchor" href="#永久去除jsp报错"><span>永久去除jsp报错</span></a></h2><pre><code>https://jingyan.baidu.com/article/7f766dafbb5cf34101e1d0d8.html
</code></pre><h2 id="spring报错" tabindex="-1"><a class="header-anchor" href="#spring报错"><span>spring报错</span></a></h2><pre><code>注意单独配置后springmvc改了url后面重新启动项目不会更新配置，
	一定要clean
	Springmvc的 service经过扫描后无法xml配解注入dao接口实现类，
	需要用@Resource（name=”xxx”）来注入，是因为springmvc配置为子容器，
	而spring本身是父容器，且子能访问父，父不能访问子，
	故由于springmvc在请求到来的时候扫描了controller作为bean，即使没注解dao属性，
	但是已经将整个该类注册成bean，故之后的spring
	父容器再注册也不能再注入dao进去了

	是因为，系统首先加载spring父容器（application。Xml文件）
	第一次注册了service整个注解（包括依赖的dao接口），然而跟springmvc无关，
	相当于没注册进去springmvc容器。
	然后再加载springmvc文件，当加载到dao接口属性的时候，
	由于springmvc的扫描扫描bean的时候该接口属性没配置注解，导致没注入dao接口，报空指针错误。
	①如果在springmvc里面再用xml注解补充dao的注入的话，会报
	There is already handler of type [class com.junye.service.ItemsServiceImpl] 
	mapped.错误，
	②即使注解和xml配置调转了都不行，仍然报同样的错误
	（解释：是因为系统优先加载xml配置，然后再加载注解配置）
	③单独xml配置（去掉包扫描）完全没问题，说明springmvc不能同时用注解配置和xml配置
	④而对于spring本身来说却可以重复配置一样的bean进去容器，但以xml的配置为准

	补充，子容器能访问父容器的内容，但是父容器不能访问子容器的内容
	结论：springmvc开启扫描包扫描bean的时候。里面必须都注解注入，
	不要部分属性xml配置、部分注解，springmvc不允许用注解配置和xml注册同一个bean，
	而spring本身却可以，以xml为准

	applicationContext里面已经声明了 service的对象bean，
	又扫描service类的上面注解@Component声明为bean，
	重复导致spring容器不能判断Service的成员装配哪个对象。

	Xml配置优先于注解配置，加载顺序listener》filter》servlet，
	而spring配置文件先加载，后加载springmvc的配置文件。

	Springmvc使用必须用自己的springmvc扫描到controller注解的bean，
	若是spring扫的话没用，404
</code></pre><h2 id="struts2" tabindex="-1"><a class="header-anchor" href="#struts2"><span>struts2</span></a></h2><pre><code>注意struts整合spring时action必须设置scope=”prototype”
	判断是不是为true，直接&lt;s:if test=&quot;#parameters.select&quot;&gt;，
	不要&lt;s:if test=&quot;#parameters.select==true&quot;&gt;
</code></pre><h2 id="hibernate-named-query-not-known异常的一种解决方案" tabindex="-1"><a class="header-anchor" href="#hibernate-named-query-not-known异常的一种解决方案"><span>Hibernate:Named query not known异常的一种解决方案</span></a></h2><pre><code>请注意标签&lt;query&gt;要定义在&lt;class&gt;之外&lt;hibernate-mapping&gt;之内
	如果定义在&lt;class&gt;之内，就有可能报这个错误
	&lt;/class&gt;
	********************************************
	******************注意&lt;query&gt;标签位置*******
	**********************************************
	&lt;query name=&quot;getTeacherNotInClasses&quot;&gt;SQL语句&lt;/query&gt;
	&lt;query name=&quot;getClassesByTitle&quot;&gt;sql语句&lt;/query&gt;
	&lt;/hibernate-mapping&gt;
</code></pre>`,23),d=e("br",null,null,-1),u={href:"https://bzstatic.udinovo.com/tmp_34a994ba8130b1cec3431b941a6af9f5.jpg%22%7D,%7B%22type%22:%22image%22,%22content%22:%22https://bzstatic.udinovo.com/tmp_bbd3892eba215a1d247aadef19a0f764.jpg%22%7D,%7B%22type%22:%22image%22,%22content%22:%22https://bzstatic.udinovo.com/tmp_5c72371caeb39b1ae705527c49fbeacb.gif",target:"_blank",rel:"noopener noreferrer"},h=e("br",null,null,-1),g=e("br",null,null,-1),m=e("br",null,null,-1),_=e("br",null,null,-1),b={href:"https://www.cnblogs.com/aoxueshou/p/13546814.html",target:"_blank",rel:"noopener noreferrer"},f=e("br",null,null,-1),v=e("br",null,null,-1),x=e("br",null,null,-1),y=e("br",null,null,-1),j=e("br",null,null,-1),k=e("br",null,null,-1),E=e("br",null,null,-1),w=e("br",null,null,-1),N={href:"https://blog.csdn.net/worilb/article/details/124976921",target:"_blank",rel:"noopener noreferrer"},A=e("br",null,null,-1),z=e("br",null,null,-1),C=e("br",null,null,-1),I=e("br",null,null,-1),R=e("br",null,null,-1),S=e("br",null,null,-1),q=e("br",null,null,-1),T=e("br",null,null,-1),J=e("br",null,null,-1),P=e("br",null,null,-1),L=e("br",null,null,-1),D=e("br",null,null,-1),B=e("br",null,null,-1),M=e("p",null,"Your authorization verification fails, you can still continue to use the system for 5 minutes, and the system will automatically stop after 5 minutes",-1),H=e("p",null,"17 一个字段是否为null业务可以判断是否已经坐过什么，如果字段为更新时间，那么就可以一个字段同时满足是否更新和什么时候更新两个业务",-1),W=e("p",null,"雪狼框架的分配分布式唯一id可能会因为已经存在类似的id而导致堆栈溢出",-1),F={href:"https://bzstatic.udinovo.com/2313.mp4",target:"_blank",rel:"noopener noreferrer"},O=e("p",null,[n("18 自定义费用"),e("br"),n(" xxx:xx;xxx,xx;")],-1),U=e("p",null,[n("SELECT s.*,u.nick,u.gender,u.avatar,t.mode"),e("br"),n(" FROM banzhu_sport s inner join banzhu_user u on u.uid = s.uid")],-1),G=e("pre",null,[e("code",null,`    WHERE s.uid IN (select fs.uid from banzhu_user_focus fs
    inner join banzhu_user u on fs.uid = u.uid where fs.focusUid = #{pagination.uid} and fs.uid in (select focusUid from banzhu_user_focus where uid = #{pagination.uid})
    and fs.uid != #{pagination.uid}
    <if test="pagination.keywords">
        and u.nick like "%"#{pagination.keywords}"%"
    </if>
    and u.uid != #{pagination.uid} )
    AND s.typeId = #{pagination.map.typeId} AND s.seconds = #{pagination.map.seconds}
    AND NOT EXISTS (SELECT 1 FROM banzhu_sport WHERE uid = s.uid AND typeId = s.typeId AND seconds = s.seconds AND sportCnt > s.sportCnt)
    group by s.uid
`)],-1),V={href:"http://s.id",target:"_blank",rel:"noopener noreferrer"},Z=e("br",null,null,-1),K=e("br",null,null,-1),X=e("br",null,null,-1),Y=e("br",null,null,-1),Q=e("br",null,null,-1),$=e("br",null,null,-1),ee={href:"http://st.id",target:"_blank",rel:"noopener noreferrer"},ne=e("br",null,null,-1),te=e("br",null,null,-1),oe=e("p",null,[n("sse客户端解析代码"),e("br"),n(" 怎么接收http请求response 的content-type=text/event-stream"),e("br"),n(" boolean processNextEvent() throws IOException {"),e("br"),n(" String id = this.lastId;"),e("br"),n(" String type = null;"),e("br"),n(" Buffer data = new Buffer();")],-1),ae=e("pre",null,[e("code",null,`    while(true) {
        long lineEnd = this.source.indexOfElement(CRLF);
        if (lineEnd == -1L) {
            return false;
        }

        switch(this.source.getBuffer().getByte(0L)) {
        case 10:
        case 13:
            this.completeEvent(id, type, data);
            return true;
        case 100:
            if (this.isKey(DATA)) {
                this.parseData(data, lineEnd);
                continue;
            }
            break;
        case 101:
            if (this.isKey(EVENT)) {
                type = this.parseEvent(lineEnd);
                continue;
            }
            break;
        case 105:
            if (this.isKey(ID)) {
                id = this.parseId(lineEnd);
                continue;
            }
            break;
        case 114:
            if (this.isKey(RETRY)) {
                this.parseRetry(lineEnd);
                continue;
            }
        }

        this.source.skip(lineEnd);
        this.skipCrAndOrLf();
    }
}
`)],-1),se=e("p",null,"update xxx set xxx-1 where xxx>0 and id = ?",-1),re=e("p",null,"表设计可以使用action_xxx来即可用到action前缀索引，又能用到action_xxx索引，还能分action类和action_xxx小类",-1),ie=e("br",null,null,-1),le={href:"https://www.coder4.com/homs_online/ch01-architecture/micro-service-intro.html",target:"_blank",rel:"noopener noreferrer"},ce=e("br",null,null,-1),pe={href:"https://help.aliyun.com/document_detail/90529.html?spm=a2c4g.11186623.6.569.1408519e9VE04k",target:"_blank",rel:"noopener noreferrer"},de=e("p",null,"目前要么elk efk 或者fk-elk",-1),ue=e("p",null,[n("ps -ef |grep java |grep -w testbanzhu.jar|grep -v 'grep'|awk '{print $2}'| xargs -i{} kill -9 {}"),e("br"),n(" sleep 1 && nohup java -server -jar testbanzhu.jar --server.port=8888 &")],-1);function he(ge,me){const t=s("ExternalLinkIcon");return r(),i("div",null,[p,e("p",null,[n("1、存储json用blob类型"),d,n(' 活动介绍[{"type":"image","content":"'),e("a",u,[n('https://bzstatic.udinovo.com/tmp_34a994ba8130b1cec3431b941a6af9f5.jpg"},{"type":"image","content":"https://bzstatic.udinovo.com/tmp_bbd3892eba215a1d247aadef19a0f764.jpg"},{"type":"image","content":"https://bzstatic.udinovo.com/tmp_5c72371caeb39b1ae705527c49fbeacb.gif'),o(t)]),n('"}]'),h,n(" 2、只要用户登入系统，一般就记录一个游客记录到user表，以ctype 客户身份. 0:游客;1:授权用户;2:品牌用户标志一下"),g,n(" 3.、存储自定义列表可以用,;,;"),m,n(" 4、获取长度判断char_length(an.comment)<=?"),_,n(" 5、服务器不重用tcp解决方案"),e("a",b,[n("https://www.cnblogs.com/aoxueshou/p/13546814.html"),o(t)]),f,n(" 7、join on可以加and or条件"),v,n(" 8、esxist用于判断有人报名的显示"),x,n(" 9、min（delete）判断是否报过名banzhu_action_bao"),y,n(" 10\\gradlew build --refresh-dependencies"),j,n(" 11、"),k,n(" 12、order by xxx!=xxx"),E,n(" 13、group by 巧用max和min筛选匹配项max(if xxxx= xx,1,0)"),w,n(" 14、数据库中计算2点的距离,ifnull(st_distance(point(c.lat,c.lng),point(#{pagination.lat},#{pagination.lng})) * 111195,0) as pointdistance单位m "),e("a",N,[n("https://blog.csdn.net/worilb/article/details/124976921"),o(t)]),A,n(" lat是纬度lng是经度"),z,n(" this AnnotationConfigServletWebServerApplicationContext"),C,n(" spring refresh(){"),I,n(" prepareRefresh->"),R,n(" {"),S,n(" initPropertySourcesStandardServletEnvironment"),q,n(" earlyApplicationListeners"),T,n(" earlyApplicationEvents"),J,n(" }"),P,n(" }"),L,n(" 15.排序不包括同名"),D,n(" rank() over (order by)"),B,n(" Creating sort index")]),M,H,W,e("p",null,[n("七牛云测试视频"),e("a",F,[n("https://bzstatic.udinovo.com/2313.mp4"),o(t)])]),O,U,G,e("p",null,[n("select abc.*,IFNULL(max(s.sportCnt),0) as sportCnt,"),e("a",V,[n("s.id"),o(t)]),n(",st.mode,s.round,s.createTime,t.mode"),Z,n(" from"),K,n(" (select fs.uid,u.nick,u.gender,u.avatar from banzhu_user_focus fs"),X,n(" inner join banzhu_user u on fs.uid = u.uid where fs.focusUid = #{pagination.uid} and fs.uid in (select focusUid from banzhu_user_focus where uid = #{pagination.uid})"),Y,n(" and fs.uid != #{pagination.uid}"),Q,n(" and u.uid != #{pagination.uid} ) abc left join banzhu_sport s on s.uid = abc.uid and s.seconds = #{pagination.map.seconds} and s.typeId = #{pagination.map.typeId}"),$,n(" left join banzhu_sport_team st on "),e("a",ee,[n("st.id"),o(t)]),n(" = s.teamId"),ne,n(" group by abc.uid"),te,n(" mysqlsysdate()不走索引")]),oe,ae,se,re,e("p",null,[n("docker日志收集"),ie,e("a",le,[n("https://www.coder4.com/homs_online/ch01-architecture/micro-service-intro.html"),o(t)])]),e("p",null,[n("redis集群持久化"),ce,e("a",pe,[n("https://help.aliyun.com/document_detail/90529.html?spm=a2c4g.11186623.6.569.1408519e9VE04k"),o(t)])]),de,ue])}const fe=a(c,[["render",he],["__file","错误解决.html.vue"]]),ve=JSON.parse('{"path":"/backend/systemdesign/%E9%94%99%E8%AF%AF%E8%A7%A3%E5%86%B3.html","title":"错误解决","lang":"zh-CN","frontmatter":{"title":"错误解决","date":"2023-01-01T00:00:00.000Z","tags":"错误解决","categories":"后端","description":"常见错误解决 常见报错解决 Spring 整合Junit4测试： Junit4 js使用时一定要注意每句后面加分号 maven错误 Maven项目启动的时候一定要设置好tomcat7的版本，注意端口占用问题 Maven错误 maven报错1.PNGmaven报错1.PNG 永久去除jsp报错 spring报错 struts2 Hibernate:Nam...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/systemdesign/%E9%94%99%E8%AF%AF%E8%A7%A3%E5%86%B3.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"错误解决"}],["meta",{"property":"og:description","content":"常见错误解决 常见报错解决 Spring 整合Junit4测试： Junit4 js使用时一定要注意每句后面加分号 maven错误 Maven项目启动的时候一定要设置好tomcat7的版本，注意端口占用问题 Maven错误 maven报错1.PNGmaven报错1.PNG 永久去除jsp报错 spring报错 struts2 Hibernate:Nam..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/0bf9fbde3ee68241766f7.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"错误解决\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/0bf9fbde3ee68241766f7.png\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"Spring 整合Junit4测试：","slug":"spring-整合junit4测试","link":"#spring-整合junit4测试","children":[]},{"level":2,"title":"Junit4","slug":"junit4","link":"#junit4","children":[]},{"level":2,"title":"js使用时一定要注意每句后面加分号","slug":"js使用时一定要注意每句后面加分号","link":"#js使用时一定要注意每句后面加分号","children":[]},{"level":2,"title":"maven错误","slug":"maven错误","link":"#maven错误","children":[]},{"level":2,"title":"Maven项目启动的时候一定要设置好tomcat7的版本，注意端口占用问题","slug":"maven项目启动的时候一定要设置好tomcat7的版本-注意端口占用问题","link":"#maven项目启动的时候一定要设置好tomcat7的版本-注意端口占用问题","children":[]},{"level":2,"title":"Maven错误","slug":"maven错误-1","link":"#maven错误-1","children":[]},{"level":2,"title":"永久去除jsp报错","slug":"永久去除jsp报错","link":"#永久去除jsp报错","children":[]},{"level":2,"title":"spring报错","slug":"spring报错","link":"#spring报错","children":[]},{"level":2,"title":"struts2","slug":"struts2","link":"#struts2","children":[]},{"level":2,"title":"Hibernate:Named query not known异常的一种解决方案","slug":"hibernate-named-query-not-known异常的一种解决方案","link":"#hibernate-named-query-not-known异常的一种解决方案","children":[]}],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":5.95,"words":1786},"filePathRelative":"backend/systemdesign/错误解决.md","localizedDate":"2023年1月1日","excerpt":"<p>常见错误解决</p>\\n<!--more-->\\n<h1>常见报错解决</h1>\\n<h2>Spring 整合Junit4测试：</h2>\\n<pre><code>log4j:WARN No appenders could be found for logger \\n\\t(org.springframework.test.context.junit4.SpringJUnit4ClassRunner).\\n\\tlog4j:WARN Please initialize the log4j system properly.\\n\\t解决办法：在src下建新的file名为log4j.properties\\n\\t然后其内如下\\n\\tlog4j.rootLogger=WARN, stdout\\n\\tlog4j.appender.stdout=org.apache.log4j.ConsoleAppender\\n\\tlog4j.appender.stdout.layout=org.apache.log4j.PatternLayout\\n\\tlog4j.appender.stdout.layout.ConversionPattern=%d %p [%c] - %m%n\\n</code></pre>","autoDesc":true}');export{fe as comp,ve as data};
