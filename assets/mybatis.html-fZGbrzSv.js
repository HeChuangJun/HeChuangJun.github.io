import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o as r,c,b as e,d as t,e as i,a as l}from"./app-Cw8r8IGg.js";const d={},o=l(`<h1 id="_1-mybatis" tabindex="-1"><a class="header-anchor" href="#_1-mybatis"><span>1. MyBatis</span></a></h1><ul><li>Mybatis 是一个半 ORM（对象关系映射）框架，它内部封装了 JDBC，开发时只需要关注 SQL 语句本身，不需要花费精力去处理加载驱动、创建连接、创建 statement 等繁杂的过程。程序员直接编写原生态 sql，可以严格控制 sql 执行性能，灵活度高。</li><li>MyBatis 可以使用 XML 或注解来配置和映射原生信息，将 POJO 映射成数据库中的记录，避免了几乎所有的 JDBC 代码和手动设置参数以及获取结果集。</li><li>缺点:sql语句编写工作量大，要求高，据库移植性差</li></ul><h1 id="_2-jdbc" tabindex="-1"><a class="header-anchor" href="#_2-jdbc"><span>2. JDBC</span></a></h1><ul><li>JDBC（Java Data Base Connectivity,java数据库连接）是一种用于执行SQL语句的Java API接口</li><li>可以为多种关系数据库提供统一访问，它由一组用Java语言编写的类和接口组成。是Java访问数据库的标准规范</li><li>而JDBC驱动是数据库厂商对接口的实现，用来连接自己的数据库</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Class.forName(“com.mysql.jdbc.Driver”);//1.注册驱动
connection conn= DirverManger.getConnection	(jdbc:mysql://ip:port/数据库名，用户名，密码);//2.获得链接
String sql = &quot;select \\* from user where name = ?&quot;;
PreparedStatement psmt = conn.prepareStatement(sql);//3.获得预处理对象语句执行平台
//void setXxx(int index, Xxx xx); --设置实际参数
psmt.setString(1,&#39;张三&#39;);//4.设置实际参数
//int executeUpdate(); --执行insert update delete语句.
//ResultSet executeQuery(); --执行select语句.
//boolean execute(); --执行select返回true 执行其他的语句返回false.
ResultSet rs = psmt.executeQuery();//5.执行sql
while( rs.next() ){//6.处理结果集
	Object getObject(int index) / Object getObject(String name) 获得任意对象
	String getString(int index) / Object getObject(String name) 获得字符串
	int getInt(int index) / Object getObject(String name) 获得整形
	double getDouble(int index) / Object getObject(String name) 获得双精度浮点型
}
rs.close();//7.释放所有资源
stmt.close();
con.close();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-statement与preparedstatement的区别" tabindex="-1"><a class="header-anchor" href="#_3-statement与preparedstatement的区别"><span>3. Statement与PreparedStatement的区别</span></a></h1><ul><li>预编译： <ul><li>Statement每次执行Statement对象的executeQuery或executeUpdate方法时，SQL 语句在数据库端都需要重新编译和执行。这适用于一次性执行的 SQL 语句</li><li>PreparedStatement：SQL语句在PreparedStatement对象创建时就被发送到数据库进行预编译。之后可以通过设置参数值来多次高效地执行这个 SQL 语句。这不仅减少了数据库编译 SQL 语句的开销，也提高了性能，尤其是对于重复执行的 SQL 操作。</li></ul></li></ul><h1 id="_4-mybatis什么时候用的-、什么时候-√" tabindex="-1"><a class="header-anchor" href="#_4-mybatis什么时候用的-、什么时候-√"><span>4. mybatis什么时候用的#{}、什么时候\${} √</span></a></h1><ul><li>#{}是占位符，预编译处理；\${}是拼接符，字符串替换，没有预编译处理。<br> Mybatis 在处理#{}时，#{}传入参数是以字符串传入，会将 SQL 中的#{}替换为?号，调用 PreparedStatement 的 set 方法来赋值。</li><li>#{} 可以有效的防止 SQL 注入，提高系统安全性；\${} 不能防止 SQL 注入</li><li>#{} 的变量替换是在 DBMS 中；\${} 的变量替换是在 DBMS 外</li><li>#{}可实现preparedStatement向占位符中设置值，自动进行java类型和jdbc类型转换。自动加上&#39;&#39;.</li><li>\${}不进行java类型和jdbc类型转换， 不加&#39;&#39; 单条SQL不超过语句的最大限制max_allowed_packet（1m）</li></ul><h1 id="_5-模糊查询-like-语句该怎么写" tabindex="-1"><a class="header-anchor" href="#_5-模糊查询-like-语句该怎么写"><span>5. 模糊查询 like 语句该怎么写?</span></a></h1><ul><li>CONCAT(&#39;%&#39;,#{question},&#39;%&#39;)或者&quot;%&quot;#{question}&quot;%&quot;</li></ul><h1 id="_6-mybatis-能执行一对一、一对多的关联查询吗" tabindex="-1"><a class="header-anchor" href="#_6-mybatis-能执行一对一、一对多的关联查询吗"><span>6. Mybatis 能执行一对一、一对多的关联查询吗</span></a></h1><ul><li>一对一<code>&lt;association&gt;</code>、一对多<code>&lt;collection&gt;</code></li></ul><h1 id="_7-mybatis-是否支持延迟加载-原理" tabindex="-1"><a class="header-anchor" href="#_7-mybatis-是否支持延迟加载-原理"><span>7. Mybatis 是否支持延迟加载？原理？</span></a></h1><ul><li>Mybatis 支持 association 关联对象和 collection 关联集合对象的延迟加载，association 指的就是一对一，collection 指的就是一对多查询。在 Mybatis 配置文件中，可以配置是否启用延迟加载 lazyLoadingEnabled=true|false。</li><li>原理是，使用 CGLIB 创建目标对象的代理对象，当调用目标方法时，进入拦截器方法，比如调用 a.getB().getName()，拦截器 invoke()方法发现 a.getB()是 null 值，那么就会单独发送事先保存好的查询关联 B 对象的 sql，把 B 查询上来，然后调用 a.setB(b)，于是 a 的对象 b 属性就有值了，接着完成 a.getB().getName()方法的调用。这就是延迟加载的基本原理。<br> 当然了，不光是 Mybatis，几乎所有的包括 Hibernate，支持延迟加载的原理都是一样的。</li></ul><h1 id="_8-mybatis事务管理形式" tabindex="-1"><a class="header-anchor" href="#_8-mybatis事务管理形式"><span>8. MyBatis事务管理形式</span></a></h1><ul><li>使用JDBC的事务管理机制。利用java.sql.Connection对象完成对事务的提交commit、回滚rollback、关闭close等操作。</li><li>使用MANAGED的事务管理机制。MyBatis自身不会去实现事务管理，而是让容器如WebLogic、JBOSS等实现对事物的管理。</li></ul><h1 id="_9-mybatis一级缓存和二级缓存" tabindex="-1"><a class="header-anchor" href="#_9-mybatis一级缓存和二级缓存"><span>9. mybatis一级缓存和二级缓存？</span></a></h1>`,18),u=e("li",null,[e("p",null,"不推荐，因为分布式环境下缓存基于本地，会有脏数据，不如直接使用Redis、Memcached等分布式缓")],-1),m=e("li",null,[e("p",null,"对于缓存数据更新机制，当某一个作用域(一级缓存Session/二级缓存Namespaces)进行了C/U/D操作后，默认该作用域下所有select的缓存将被clear")],-1),p=l('<h1 id="_10-mybatis执行顺序" tabindex="-1"><a class="header-anchor" href="#_10-mybatis执行顺序"><span>10. mybatis执行顺序</span></a></h1><ul><li>读取 MyBatis 配置文件——mybatis-config.xml 、加载SQL映射文件Mapper.xml。最后生成一个配置对象</li><li>构造会话工厂：通过 MyBatis 的环境等配置信息构建会话工厂 SqlSessionFactory。</li><li>创建会话对象：由会话工厂创建 SqlSession 对象，该对象中包含了执行 SQL 语句的所有方法。</li><li>Executor 执行器：MyBatis 底层定义了一个 Executor 接口来操作数据库，它将根据 SqlSession 传递的参数动态地生成需要执行的 SQL 语句，同时负责查询缓存的维护。</li><li>StatementHandler：数据库会话器，串联起参数映射的处理和运行结果映射的处理。</li><li>ParameterHandler参数处理：对输入参数的类型进行处理，并预编译。</li><li>ResultSetHandler结果处理：对返回结果的类型进行处理，根据对象映射规则，返回相应的对象。</li></ul><h1 id="_11-动态sql概念-作用-执行原理吗" tabindex="-1"><a class="header-anchor" href="#_11-动态sql概念-作用-执行原理吗"><span>11. 动态SQL概念，作用，执行原理吗？</span></a></h1><ul><li>以XML标签的形式编写动态SQL ，完成逻辑判断和动态拼接SQL的功能。</li><li>动态SQL标签：<code>&lt;if /&gt;、&lt;choose /&gt;、&lt;when /&gt;、&lt;otherwise /&gt;、&lt;trim /&gt;、&lt;where /&gt;、&lt;set /&gt;、&lt;foreach /&gt;、&lt;bind /&gt;</code> 。</li><li>执行原理为使用OGNL的表达式，从SQL参数对象中计算表达式的值，根据表达式的值动态拼接SQL，以此来完成动态SQL功能。</li></ul><h1 id="_12-mapper接口与xml对应关系的原理-mapper-接口里的方法-参数不同时-方法能重载吗" tabindex="-1"><a class="header-anchor" href="#_12-mapper接口与xml对应关系的原理-mapper-接口里的方法-参数不同时-方法能重载吗"><span>12. Mapper接口与XML对应关系的原理？Mapper 接口里的方法，参数不同时，方法能重载吗？</span></a></h1><ul><li>Mapper接口XML对应的关系如下 <ul><li>接口的全限名映射文件namespace值</li><li>接口的方法名映射文件MappedStatement的id值</li><li>接口方法内的参数是传递给SQL的参数</li></ul></li><li>Mapper接口里的方法不能重载，因为是全限名+方法名的保存和寻找策略。</li><li>原理：每一个select、insert、update、delete标签，都会被解析为一个MappedStatement对象。Mapper接口的实现类通过使用JDK动态代理自动生成代理对象Proxy时会拦截接口方法，根据接口全限名+方法名拼接字符串作为key值，唯一定位一个对应的MappedStatement执行SQL<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/de704e9bac809e0be3798.jpg" alt="sqlexecutionprocedure.png"></li></ul><h1 id="_13-mybatis是否可以映射enum枚举类" tabindex="-1"><a class="header-anchor" href="#_13-mybatis是否可以映射enum枚举类"><span>13. Mybatis是否可以映射Enum枚举类？</span></a></h1>',7),h=e("li",null,"EnumTypeHandler基于Enum.name属性(String)。默认。",-1),b=e("li",null,"Mybatis可以映射任何对象到表的一列上。通过自定义一个TypeHandler类实现TypeHandler的#setParameter()和getResult() 接口完成从 javaType 至 jdbcType 的双向转换。",-1),y=l('<h1 id="_14-mybatis都有哪些executor执行器-它们之间的区别是什么" tabindex="-1"><a class="header-anchor" href="#_14-mybatis都有哪些executor执行器-它们之间的区别是什么"><span>14. Mybatis都有哪些Executor执行器？它们之间的区别是什么？</span></a></h1><ul><li>SimpleExecutor：每执行一次update或select操作就创建一个Statement对象，用完立刻关闭Statement对象</li><li>ReuseExecutor：执行update或select操作，以SQL作为key查找缓存的Statement对象，存在就使用，不存在就创建；用完后放置于缓存Map&lt;String, Statement&gt;内</li><li>BatchExecutor：执行update操作（不支持select），将所有SQL都添加到批处理中（通过addBatch方法），等待统一执行（使用executeBatch方法）。它缓存了多个Statement对象，都是调用addBatch方法后，等待一次执行 executeBatch 批处理。过程与JDBC批处理是相同。</li><li>CachingExecutor ：在上述的三个执行器之上，增加二级缓存的功能。</li><li><code>&lt;setting name=&quot;defaultExecutorType&quot; value=&quot;&quot;&gt;</code> value=SIMPLE、REUSE、BATCH 三个值，分别使用SimpleExecutor、ReuseExecutor、BatchExecutor执行器</li><li><code>&lt;setting name=&quot;cacheEnabled&quot; value=&quot;&quot;&gt;</code> value=true时创建 CachingExecutor 执行器。</li></ul><h1 id="_15-mybatis-如何执行批量操作" tabindex="-1"><a class="header-anchor" href="#_15-mybatis-如何执行批量操作"><span>15. MyBatis 如何执行批量操作？</span></a></h1><ul><li>使用 foreach 标签：foreach 标签的属性主要有 item，index，collection，open，separator，close。</li><li>使用 ExecutorType.BATCH</li></ul><h1 id="_16-简述-mybatis-的插件运行原理-以及如何编写一个插件" tabindex="-1"><a class="header-anchor" href="#_16-简述-mybatis-的插件运行原理-以及如何编写一个插件"><span>16. 简述 Mybatis 的插件运行原理？以及如何编写一个插件？</span></a></h1><ul><li>插件的原理就是在这四大对象调度的时候，使用JDK动态代理，插入一些我我们自己的代码。</li><li>仅可以自定义ParameterHandler、ResultSetHandler、StatementHandler、Executor的插件</li><li>为需要拦截的接口生成代理对象以实现接口方法拦截功能，每当执行这4种接口对象的方法时，就会进入拦截方法，具体就是 InvocationHandler 的 #invoke(...)方法。</li><li>1.实现Interceptor接口实现intercept(...) 方法。</li><li>2.在给插件编写注解，指定要拦截哪一个接口的哪些方法即可</li><li>3.在配置文件中配置你编写的插件。</li></ul><h1 id="_17-mybatis是如何进行分页的-分页插件的原理" tabindex="-1"><a class="header-anchor" href="#_17-mybatis是如何进行分页的-分页插件的原理"><span>17. Mybatis是如何进行分页的？分页插件的原理？</span></a></h1><ul><li>不推荐：使用RowBounds对象针对ResultSet结果集执行的内存分页，而非数据库分页</li><li>推荐：在SQL输入分页参数；使用分页插件自动添加分页条件来完成数据库分页</li><li>原理是使用插件接口，实现自定义分页插件。拦截Executor的query方法，重写SQL，根据dialect方言，添加对应的物理分页语句和物理分页参数。</li><li>常用分页插件：Mybatis-PageHelper MyBatis-Plus</li></ul>',8);function S(g,v){const a=s("setting");return r(),c("div",null,[o,e("ul",null,[u,e("li",null,[e("p",null,[t("一级缓存（默认打开）：基于PerpetualCache没有容量限定的HashMap缓存，作用域为sqlSession或者statement，有多个SqlSession或者分布式的环境下，数据库写操作会引起脏数据，建议设为Statement。配置："),i(a,{name:"localCacheScope",value:"SESSION|STATEMENT"})])]),e("li",null,[e("p",null,[t("二级缓存：基于PerpetualCache没有容量限定的HashMap缓存，其存储作用域为Mapper(Namespace)，可自定义存储源如Ehcache。配置："),i(a,{name:"cacheEnabled",value:"true"}),t("在映射XML中配置cache或者cache-ref")])]),m]),p,e("ul",null,[h,e("li",null,[t("EnumOrdinalTypeHandler基于Enum.ordinal属性(int)。可通过 "),i(a,{name:"defaultEnumTypeHandler",value:"EnumOrdinalTypeHandler"}),t(" 设置")]),b]),y])}const M=n(d,[["render",S],["__file","mybatis.html.vue"]]),B=JSON.parse('{"path":"/interview/mybatis.html","title":"MyBatis","lang":"zh-CN","frontmatter":{"title":"MyBatis","date":"2023-01-01T00:00:00.000Z","tags":"java","categories":"面试","description":"1. MyBatis Mybatis 是一个半 ORM（对象关系映射）框架，它内部封装了 JDBC，开发时只需要关注 SQL 语句本身，不需要花费精力去处理加载驱动、创建连接、创建 statement 等繁杂的过程。程序员直接编写原生态 sql，可以严格控制 sql 执行性能，灵活度高。 MyBatis 可以使用 XML 或注解来配置和映射原生信息，将...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/interview/mybatis.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"MyBatis"}],["meta",{"property":"og:description","content":"1. MyBatis Mybatis 是一个半 ORM（对象关系映射）框架，它内部封装了 JDBC，开发时只需要关注 SQL 语句本身，不需要花费精力去处理加载驱动、创建连接、创建 statement 等繁杂的过程。程序员直接编写原生态 sql，可以严格控制 sql 执行性能，灵活度高。 MyBatis 可以使用 XML 或注解来配置和映射原生信息，将..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/de704e9bac809e0be3798.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MyBatis\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/de704e9bac809e0be3798.jpg\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":8.5,"words":2549},"filePathRelative":"interview/mybatis.md","localizedDate":"2023年1月1日","excerpt":"\\n<ul>\\n<li>Mybatis 是一个半 ORM（对象关系映射）框架，它内部封装了 JDBC，开发时只需要关注 SQL 语句本身，不需要花费精力去处理加载驱动、创建连接、创建 statement 等繁杂的过程。程序员直接编写原生态 sql，可以严格控制 sql 执行性能，灵活度高。</li>\\n<li>MyBatis 可以使用 XML 或注解来配置和映射原生信息，将 POJO 映射成数据库中的记录，避免了几乎所有的 JDBC 代码和手动设置参数以及获取结果集。</li>\\n<li>缺点:sql语句编写工作量大，要求高，据库移植性差</li>\\n</ul>\\n<h1>2. JDBC</h1>\\n<ul>\\n<li>JDBC（Java Data Base Connectivity,java数据库连接）是一种用于执行SQL语句的Java API接口</li>\\n<li>可以为多种关系数据库提供统一访问，它由一组用Java语言编写的类和接口组成。是Java访问数据库的标准规范</li>\\n<li>而JDBC驱动是数据库厂商对接口的实现，用来连接自己的数据库</li>\\n</ul>","autoDesc":true}');export{M as comp,B as data};
