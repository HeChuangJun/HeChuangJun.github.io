import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as d,c as o,a as e,b as t,d as n,e as i}from"./app-7KT7HDzT.js";const a={},u=i('<p>solr</p><ul><li><a href="#1-solr%E4%BB%8B%E7%BB%8D">1. solr介绍</a></li><li><a href="#2-solr%E4%B8%8Elucene%E7%9A%84%E5%8C%BA%E5%88%AB">2. Solr与Lucene的区别</a></li><li><a href="#3-solr%E5%AE%89%E8%A3%85%E5%8F%8A%E9%85%8D%E7%BD%AE">3. Solr安装及配置</a></li><li><a href="#4-solr%E7%AE%A1%E7%90%86%E7%B4%A2%E5%BC%95%E5%BA%93">4. Solr管理索引库</a></li><li><a href="#5-%E4%BD%BF%E7%94%A8solrj%E7%AE%A1%E7%90%86%E7%B4%A2%E5%BC%95%E5%BA%93">5. 使用SolrJ管理索引库</a></li><li><a href="#6-%E4%BB%80%E4%B9%88%E6%98%AFsolrcloud">6. 什么是SolrCloud</a></li><li><a href="#7-solr%E9%9B%86%E7%BE%A4%E7%9A%84%E7%B3%BB%E7%BB%9F%E6%9E%B6%E6%9E%84">7. Solr集群的系统架构</a></li><li><a href="#8-%E9%9C%80%E8%A6%81%E5%AE%9E%E7%8E%B0%E7%9A%84solr%E9%9B%86%E7%BE%A4%E6%9E%B6%E6%9E%84">8. 需要实现的solr集群架构</a></li><li><a href="#9-solrcloud%E7%9A%84%E6%90%AD%E5%BB%BA">9. solrcloud的搭建</a></li></ul><h1 id="_1-solr介绍" tabindex="-1"><a class="header-anchor" href="#_1-solr介绍"><span>1. solr介绍</span></a></h1><ul><li>Solr是Apache下的一个顶级开源项目，它是基于Lucene的全文搜索服务器。Solr提供了比Lucene更为丰富的查询语言，<br> 同时实现了可配置、可扩展，并对索引、搜索性能进行了优化。</li><li>Solr可以独立运行，运行在Jetty、Tomcat等这些Servlet容器中</li><li>Solr用 POST 方法向 Solr 服务器发送一个描述 Field 及其内容的 XML 文档，Solr根据xml文档添加、删除、更新索引 。</li><li>Solr 搜索只需要发送 HTTP GET 请求，然后对 Solr 返回Xml、json等格式的查询结果进行解析，组织页面布局。</li><li>Solr不提供构建UI的功能，Solr提供了一个管理界面，通过管理界面可以查询Solr的配置和运行情况。</li></ul><h1 id="_2-solr与lucene的区别" tabindex="-1"><a class="header-anchor" href="#_2-solr与lucene的区别"><span>2. Solr与Lucene的区别</span></a></h1><ul><li>Lucene是一个开放源代码的全文检索引擎工具包，它不是一个完整的全文检索引擎，Lucene提供了完整的查询引擎和索引引擎，目的是为软件开发人员提供一个简单易用的工具包，以方便的在目标系统中实现全文检索的功能，或者以Lucene为基础构建全文检索引擎。</li><li>Solr的目标是打造一款企业级的搜索引擎系统，它是一个搜索引擎服务，可以独立运行，通过Solr可以非常快速的构建企业的搜索引擎，通过Solr也可以高效的完成站内搜索功能。</li></ul><h1 id="_3-solr安装及配置" tabindex="-1"><a class="header-anchor" href="#_3-solr安装及配置"><span>3. Solr安装及配置</span></a></h1>',7),v={href:"http://lucene.apache.org/solr/",target:"_blank",rel:"noopener noreferrer"},c={href:"https://wiki.apache.org/solr/FrontPage",target:"_blank",rel:"noopener noreferrer"},m=i(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Solr的文件夹结构
	bin：solr的运行脚本
	contrib：solr的一些贡献软件/插件，用于增强solr的功能。
	dist：该目录包含build过程中产生的war和jar文件，以及相关的依赖文件。
	docs：solr的API文档
	licenses：solr相关的一些许可信息
	example：solr工程的例子目录：
		example/solr：包含了默认配置信息的Solr home目录(Solr运行的主目录,包括了运行Solr实例所有的配置文件和数据文件)。
		一个SolrHome可以包括多个SolrCore（Solr实例），每个SolrCore提供单独的搜索和索引服务。
			example/solr/collection1包含了一个solr Core实例目录
				SolrCore名称不固定，一个solr运行实例对外单独提供索引和搜索接口和一个索引目录。
				一个solrcore相当于mysql中一个数据库。Solrcore之间是相互隔离。
				一个Solr工程可以运行多个SolrCore（Solr实例），一个Core对应一个索引目录。
			example/solr/collection1/data 该目录存放索引文件需要创建
			example/solr/collection1/core.properties配置solrcore实例名字
				example/solr/collection1/conf/solrconfig.xml配置实例的相关信息
				example/solr/collection1/conf/schema.xml配置中文分析器，定义索引数据类型
			example/solr/solr.xml
			example/solr/zoo.cfg
		example/multicore：该目录包含了在Solr的multicore中设置的多个Core目录。 
		example/webapps/solr.war：该目录中包括一个solr.war，该war可作为solr的运行实例工程。
			example/webapps/solr.war/web.xml配置了solrhome的位置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>solr的安装	
	solr 需要运行在一个Servlet容器中，Solr4.10.3要求jdk使用1.7以上，Solr默认提供Jetty
	①将solr.war解压到tomcat的webapp目录中
	②把\\solr-4.10.3\\example\\lib\\ext目录下的所有的jar包添加到solr工程中的lib文件夹下
	cp * /usr/local/solr/tomcat/webapps/solr/WEB-INF/lib/
	③配置solrHome和solrCore。把\\solr-4.10.3\\example\\solr文件夹复制并重命名为solrhome(更容易理解)
		Xml的配置信息：
		Lib：solr服务依赖的扩展包，默认的路径是collection1\\lib文件夹，如果没有就创建一个
		dataDir：配置了索引库的存放路径。默认路径是collection1\\data文件夹，如果没有data文件夹，会自动创建。
		requestHandler：
		查询时用url：name=&quot;/select&quot;
		&lt;requestHandler name=&quot;/select&quot; class=&quot;solr.SearchHandler&quot;&gt;
			&lt;lst name=&quot;defaults&quot;&gt;
			&lt;str name=&quot;echoParams&quot;&gt;explicit&lt;/str&gt;
			&lt;int name=&quot;rows&quot;&gt;10&lt;/int&gt;
			&lt;str name=&quot;df&quot;&gt;text&lt;/str&gt;
			&lt;/lst&gt;
		&lt;/requestHandler&gt;
		维护索引时用url：name=&quot;/select&quot;
		&lt;requestHandler name=&quot;/update&quot; class=&quot;solr.UpdateRequestHandler&quot;&gt;
			&lt;!-- See below for information on defining
				updateRequestProcessorChains that can be used by name
				on each Update Request
			--&gt;
			&lt;!--
			&lt;lst name=&quot;defaults&quot;&gt;
				&lt;str name=&quot;update.chain&quot;&gt;dedupe&lt;/str&gt;
			&lt;/lst&gt;
			--&gt;
		&lt;/requestHandler&gt;
	第六步：告诉solr服务器配置文件也就是solrHome的位置。
	修改solr.war的web.xml使用jndi的方式告诉solr服务器。Solr/home名称必须是固定的。
	&lt;env-entry&gt;
       &lt;env-entry-name&gt;solr/home&lt;/env-entry-name&gt;
       &lt;env-entry-value&gt;/put/your/solr/home/here&lt;/env-entry-value&gt;
       &lt;env-entry-type&gt;java.lang.String&lt;/env-entry-type&gt;
    &lt;/env-entry&gt;

	第七步：启动tomcat
	第八步：访问http://localhost:8080/solr/

	Solr后台管理
	Solr Core 是Solr的一个独立运行实例单位，它可以对外提供索引和搜索服务，
	添加solrcore：
	第一步：复制collection1改名为collection2
	第二步：修改collection文件夹里的core.properties。name=collection2
	第三步：重启tomcat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>配置中文分析器
	Schema.xml在SolrCore的conf目录下，它是Solr数据表配置文件，它定义了加入索引的数据的数据类型的。
	主要包括FieldTypes、Fields和其他的一些缺省设置。
	
	FieldType域类型定义
	text_general是Solr默认提供的FieldType，通过它说明FieldType定义的内容:
	&lt;fieldType name=&quot;text_general&quot; class=&quot;solr.TextField&quot; positionIncrementGap=&quot;100&quot;&gt;
		&lt;!--name：是这个FieldType的名称
		class：是Solr提供的包solr.TextField，solr.TextField 允许用户通过分析器来定制索引和查询，分析器包括一个分词器（tokenizer）和多个过滤器（filter）
		positionIncrementGap：可选属性，定义在同一个文档中此类型数据的空白间隔，避免短语匹配错误，此值相当于Lucene的短语查询设置slop值，根据经验设置为100。--&gt;
      &lt;analyzer type=&quot;index&quot;&gt;
        &lt;tokenizer class=&quot;solr.StandardTokenizerFactory&quot;/&gt;
        &lt;filter class=&quot;solr.StopFilterFactory&quot; ignoreCase=&quot;true&quot; words=&quot;stopwords.txt&quot; /&gt;
        &lt;!-- in this example, we will only use synonyms at query time
        	&lt;filter class=&quot;solr.SynonymFilterFactory&quot; synonyms=&quot;index_synonyms.txt&quot; ignoreCase=&quot;true&quot; expand=&quot;false&quot;/&gt;
        --&gt;
        &lt;filter class=&quot;solr.LowerCaseFilterFactory&quot;/&gt;
      &lt;/analyzer&gt;
      &lt;analyzer type=&quot;query&quot;&gt;
	  	&lt;!--
		在FieldType定义的时候最重要的就是定义这个类型的数据在建立索引和进行查询的时候要使用的分析器analyzer,包括分词和过滤
		索引分析器中：使用solr.StandardTokenizerFactory标准分词器，solr.StopFilterFactory停用词过滤器，solr.LowerCaseFilterFactory小写过滤器。
		搜索分析器中：使用solr.StandardTokenizerFactory标准分词器，solr.StopFilterFactory停用词过滤器，这里还用到了solr.SynonymFilterFactory同义词过滤器。
		--&gt;
        &lt;tokenizer class=&quot;solr.StandardTokenizerFactory&quot;/&gt;
        &lt;filter class=&quot;solr.StopFilterFactory&quot; ignoreCase=&quot;true&quot; words=&quot;stopwords.txt&quot; /&gt;
        &lt;filter class=&quot;solr.SynonymFilterFactory&quot; synonyms=&quot;synonyms.txt&quot; ignoreCase=&quot;true&quot; expand=&quot;true&quot;/&gt;
        &lt;filter class=&quot;solr.LowerCaseFilterFactory&quot;/&gt;
      &lt;/analyzer&gt;
    &lt;/fieldType&gt;

	Field定义
	&lt;!--filed定义包括name,type（为之前定义过的各种FieldType）,indexed（是否被索引）,
	stored（是否被储存），multiValued（是否存储多个值）等属性。
	multiValued：该Field如果要存储多个值时设置为true，solr允许一个Field存储多个值，
	比如存储一个用户的好友id（多个），商品的图片（多个，大图和小图），通过使用solr查询要看出返回给客户端是数组：--&gt;
	&lt;field name=&quot;name&quot; type=&quot;text_general&quot; indexed=&quot;true&quot; stored=&quot;true&quot;/&gt;
	&lt;field name=&quot;features&quot; type=&quot;text_general&quot; indexed=&quot;true&quot; stored=&quot;true&quot; multiValued=&quot;true&quot;/&gt;
	
	
	&lt;!--uniqueKey Solr中默认定义唯一主键key为id域，
	Solr在删除、更新索引时使用id域进行判断，也可以自定义唯一主键。注意在创建索引时必须指定唯一约束。--&gt;
	&lt;uniqueKey&gt;id&lt;/uniqueKey&gt;
	
	
	copyField复制域
	&lt;!--copyField复制域，可以将多个Field复制到一个Field中，以便进行统一的检索：
	根据关键字只搜索text域的内容就相当于搜索title和content，将title和content复制到text中，如下：--&gt;
	&lt;field name=&quot;title&quot; type=&quot;text_general&quot; indexed=&quot;true&quot; stored=&quot;true&quot; multiValued=&quot;true&quot;/&gt;
	&lt;field name=&quot;content&quot; type=&quot;text_general&quot; indexed=&quot;false&quot; stored=&quot;true&quot; multiValued=&quot;true&quot;/&gt;
	&lt;field name=&quot;text&quot; type=&quot;text_general&quot; indexed=&quot;true&quot; stored=&quot;false&quot; multiValued=&quot;true&quot;/&gt;
	&lt;copyField source=&quot;title&quot; dest=&quot;text&quot;/&gt;
	&lt;copyField source=&quot;content&quot; dest=&quot;text&quot;/&gt;
	
	dynamicField（动态字段）
	&lt;!--动态字段就是不用指定具体的名称，只要定义字段名称的规则，例如定义一个 dynamicField，name 为*_i，
	定义它的type为text，那么在使用这个字段的时候，任何以_i结尾的字段都被认为是符合这个定义的，
	例如：name_i，gender_i，school_i等。--&gt;
	&lt;dynamicField name=&quot;*_i&quot;  type=&quot;int&quot;    indexed=&quot;true&quot;  stored=&quot;true&quot;/&gt;

	安装中文分词器
	使用IKAnalyzer中文分析器
	第一步：把IKAnalyzer2012FF_u1.jar添加到solr/WEB-INF/lib目录下。
	第二步：复制IKAnalyzer的配置文件	IKAnalyzer.cfg.xml和自定义词典ext.dic;和停用词词典stopword.dic;到solr的classpath下。
	第三步：在schema.xml中添加一个自定义的fieldType，使用中文分析器。
	&lt;!-- IKAnalyzer--&gt;
	&lt;fieldType name=&quot;text_ik&quot; class=&quot;solr.TextField&quot;&gt;
		&lt;analyzer class=&quot;org.wltea.analyzer.lucene.IKAnalyzer&quot;/&gt;
	&lt;/fieldType&gt;

	第四步：定义field，指定field的type属性为text_ik
	&lt;!--IKAnalyzer Field--&gt;
	&lt;field name=&quot;title_ik&quot; type=&quot;text_ik&quot; indexed=&quot;true&quot; stored=&quot;true&quot; /&gt;
	&lt;field name=&quot;content_ik&quot; type=&quot;text_ik&quot; indexed=&quot;true&quot; stored=&quot;false&quot; multiValued=&quot;true&quot;/&gt;

	第四步：重启tomcat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-solr管理索引库" tabindex="-1"><a class="header-anchor" href="#_4-solr管理索引库"><span>4. Solr管理索引库</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	维护索引
	添加/更新单个文档(通过管理后台添加)
	
	批量导入数据
	使用dataimport插件批量导入数据。
	第一步：把dataimport插件依赖的jar包添加到solrcore（collection1\\lib）中，还需要mysql的数据库驱动。
	第二步：配置solrconfig.xml文件，添加一个requestHandler。
	&lt;requestHandler name=&quot;/dataimport&quot; class=&quot;org.apache.solr.handler.dataimport.DataImportHandler&quot;&gt;
		&lt;lst name=&quot;defaults&quot;&gt;
			&lt;str name=&quot;config&quot;&gt;data-config.xml&lt;/str&gt;
		&lt;/lst&gt;
	&lt;/requestHandler&gt;
	第三步：创建一个data-config.xml，保存到collection1\\conf\\目录下
	&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;  
	&lt;dataConfig&gt;   
		&lt;dataSource type=&quot;JdbcDataSource&quot;   
			driver=&quot;com.mysql.jdbc.Driver&quot;   
			url=&quot;jdbc:mysql://localhost:3306/lucene&quot;   
			user=&quot;root&quot;   
			password=&quot;root&quot;/&gt;   
		&lt;document&gt;   
		&lt;entity name=&quot;product&quot; query=&quot;SELECT pid,name,catalog_name,price,description,picture FROM products &quot;&gt;
			&lt;field column=&quot;pid&quot; name=&quot;id&quot;/&gt; 
			&lt;field column=&quot;name&quot; name=&quot;product_name&quot;/&gt; 
			&lt;field column=&quot;catalog_name&quot; name=&quot;product_catalog_name&quot;/&gt; 
			&lt;field column=&quot;price&quot; name=&quot;product_price&quot;/&gt; 
			&lt;field column=&quot;description&quot; name=&quot;product_description&quot;/&gt; 
			&lt;field column=&quot;picture&quot; name=&quot;product_picture&quot;/&gt; 
		&lt;/entity&gt;   
		&lt;/document&gt;
	&lt;/dataConfig&gt;

	第四步：重启tomcat
	第五步：在管理后台点击“execute”按钮导入数据

	到入数据前会先清空索引库，然后再导入。
	
	删除文档
	删除制定ID的索引 
	&lt;delete&gt;
		&lt;id&gt;8&lt;/id&gt;
	&lt;/delete&gt;
	&lt;commit/&gt;
	删除查询到的索引数据 
	&lt;delete&gt;
		&lt;query&gt;product_catalog_name:幽默杂货&lt;/query&gt;
	&lt;/delete&gt;
	&lt;commit/&gt;
	删除所有索引数据
	&lt;delete&gt;
		&lt;query&gt;*:*&lt;/query&gt;
	&lt;/delete&gt;
	
	查询索引
	通过/select搜索索引，Solr制定一些参数完成不同需求的搜索：
	1.q - 查询字符串，必须的，如果查询所有使用*:*。
	2.fq - （filter query）过虑查询，作用：在q查询符合结果中同时是fq查询符合的，例如：：
	过滤查询价格从1到20的记录。product_price:[1 TO 20]
	也可以在“q”查询条件中使用product_price:[1 TO 20]
	使用“*”表示无限，例如：20以上：product_price:[20 TO *]20以下：product_price:[* TO 20]
	3.sort - 排序，格式：sort=&lt;field name&gt;+&lt;desc|asc&gt;[,&lt;field name&gt;+&lt;desc|asc&gt;]… 。示例： 
	按价格降序
	4.start - 分页显示使用，开始记录下标，从0开始 
	5.rows - 指定返回结果最多有多少条记录，配合start来实现分页。
	6.fl - 指定返回那些字段内容，用逗号或空格分隔多个。
	7.df-指定一个默认搜索Field
	也可以在SolrCore目录 中conf/solrconfig.xml文件中指定默认搜索Field，指定后就可以直接在“q”查询条件中输入关键字。
	&lt;requestHandler name=&quot;/select&quot; class=&quot;solr.SearchHandler&quot;&gt;
    &lt;!-- default values for query parameters can be specified, these
         will be overridden by parameters in the request
      --&gt;
     &lt;lst name=&quot;defaults&quot;&gt;
       &lt;str name=&quot;echoParams&quot;&gt;explicit&lt;/str&gt;
       &lt;int name=&quot;rows&quot;&gt;10&lt;/int&gt;
       &lt;str name=&quot;df&quot;&gt;text&lt;/str&gt;
     &lt;/lst&gt;
	&lt;/requestHandler&gt; 
	8.wt - (writer type)指定输出格式，可以有 xml, json, php, phps, 
	9.hl 是否高亮 ,设置高亮Field，设置格式前缀和后缀
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_5-使用solrj管理索引库" tabindex="-1"><a class="header-anchor" href="#_5-使用solrj管理索引库"><span>5. 使用SolrJ管理索引库</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	solrj是访问Solr服务的java客户端，提供索引和搜索的请求方法，SolrJ通常在嵌入在业务系统中，通过SolrJ的API接口操作Solr服务，

	c)添加文档
	实现步骤
	第一步：创建一个java工程
	第二步：导入jar包。包括solrJ的jar包。还需要
	第三步：和Solr服务器建立连接。HttpSolrServer对象建立连接。
	第四步：创建一个SolrInputDocument对象，然后添加域。
	第五步：将SolrInputDocument添加到索引库。
	第六步：提交。
	//向索引库中添加索引
		@Test
		public void addDocument() throws Exception {
			//和solr服务器创建连接
			//参数：solr服务器的地址
			SolrServer solrServer = new HttpSolrServer(&quot;http://localhost:8080/solr/collection1&quot;);
			//创建一个文档对象
			SolrInputDocument document = new SolrInputDocument();
			//向文档中添加域
			//第一个参数：域的名称，域的名称必须是在schema.xml中定义的
			//第二个参数：域的值
			document.addField(&quot;id&quot;, &quot;c0001&quot;);
			document.addField(&quot;title_ik&quot;, &quot;使用solrJ添加的文档&quot;);
			document.addField(&quot;content_ik&quot;, &quot;文档的内容&quot;);
			document.addField(&quot;product_name&quot;, &quot;商品名称&quot;);
			//把document对象添加到索引库中
			solrServer.add(document);
			//提交修改
			solrServer.commit();		
		}
	//删除文档，根据id删除
		@Test
		public void deleteDocumentByid() throws Exception {
			//创建连接
			SolrServer solrServer = new HttpSolrServer(&quot;http://localhost:8080/solr&quot;);
			//根据id删除文档
			solrServer.deleteById(&quot;c0001&quot;);
			//提交修改
			solrServer.commit();
		}

	查询语法完全支持Lucene的查询语法。
	//根据查询条件删除文档
		@Test
		public void deleteDocumentByQuery() throws Exception {
			//创建连接
			SolrServer solrServer = new HttpSolrServer(&quot;http://localhost:8080/solr&quot;);
			//根据查询条件删除文档
			solrServer.deleteByQuery(&quot;*:*&quot;);
			//提交修改
			solrServer.commit();
		}


	修改文档
	在solrJ中修改没有对应的update方法，只有add方法，只需要添加一条新的文档，
	和被修改的文档id一致就可以修改了。本质上就是先删除后添加。

	查询文档
	简单查询
	//查询索引
		@Test
		public void queryIndex() throws Exception {
			//创建连接
			SolrServer solrServer = new HttpSolrServer(&quot;http://localhost:8080/solr&quot;);
			//创建一个query对象
			SolrQuery query = new SolrQuery();
			//设置查询条件
			query.setQuery(&quot;*:*&quot;);
			//执行查询
			QueryResponse queryResponse = solrServer.query(query);
			//取查询结果
			SolrDocumentList solrDocumentList = queryResponse.getResults();
			//共查询到商品数量
			System.out.println(&quot;共查询到商品数量:&quot; + solrDocumentList.getNumFound());
			//遍历查询的结果
			for (SolrDocument solrDocument : solrDocumentList) {
				System.out.println(solrDocument.get(&quot;id&quot;));
				System.out.println(solrDocument.get(&quot;product_name&quot;));
				System.out.println(solrDocument.get(&quot;product_price&quot;));
				System.out.println(solrDocument.get(&quot;product_catalog_name&quot;));
				System.out.println(solrDocument.get(&quot;product_picture&quot;));
				
			}
		}

	复杂查询(最好！！！！！！！！！！！！！！！！！)
	其中包含查询、过滤、分页、排序、高亮显示等处理。
	//复杂查询索引
		@Test
		public void queryIndex2() throws Exception {
			//创建连接
			SolrServer solrServer = new HttpSolrServer(&quot;http://localhost:8080/solr&quot;);
			//创建一个query对象
			SolrQuery query = new SolrQuery();
			//设置查询条件
			query.setQuery(&quot;钻石&quot;);
			//过滤条件
			query.setFilterQueries(&quot;product_catalog_name:幽默杂货&quot;);
			//排序条件
			query.setSort(&quot;product_price&quot;, ORDER.asc);
			//分页处理
			query.setStart(0);
			query.setRows(10);
			//结果中域的列表
			query.setFields(&quot;id&quot;,&quot;product_name&quot;,&quot;product_price&quot;,&quot;product_catalog_name&quot;,&quot;product_picture&quot;);
			//设置默认搜索域
			query.set(&quot;df&quot;, &quot;product_keywords&quot;);
			//高亮显示
			query.setHighlight(true);
			//高亮显示的域
			query.addHighlightField(&quot;product_name&quot;);
			//高亮显示的前缀
			query.setHighlightSimplePre(&quot;&lt;em&gt;&quot;);
			//高亮显示的后缀
			query.setHighlightSimplePost(&quot;&lt;/em&gt;&quot;);
			//执行查询
			QueryResponse queryResponse = solrServer.query(query);
			//取查询结果
			SolrDocumentList solrDocumentList = queryResponse.getResults();
			//共查询到商品数量
			System.out.println(&quot;共查询到商品数量:&quot; + solrDocumentList.getNumFound());
			//遍历查询的结果
			for (SolrDocument solrDocument : solrDocumentList) {
				System.out.println(solrDocument.get(&quot;id&quot;));
				//取高亮显示
				String productName = &quot;&quot;;
				Map&lt;String, Map&lt;String, List&lt;String&gt;&gt;&gt; highlighting = queryResponse.getHighlighting();
				List&lt;String&gt; list = highlighting.get(solrDocument.get(&quot;id&quot;)).get(&quot;product_name&quot;);
				//判断是否有高亮内容
				if (null != list) {
					productName = list.get(0);
				} else {
					productName = (String) solrDocument.get(&quot;product_name&quot;);
				}
				
				System.out.println(productName);
				System.out.println(solrDocument.get(&quot;product_price&quot;));
				System.out.println(solrDocument.get(&quot;product_catalog_name&quot;));
				System.out.println(solrDocument.get(&quot;product_picture&quot;));
				
			}
		}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_6-什么是solrcloud" tabindex="-1"><a class="header-anchor" href="#_6-什么是solrcloud"><span>6. 什么是SolrCloud</span></a></h1><ul><li>SolrCloud是Solr提供的分布式搜索方案，当你需要大规模，容错，分布式索引和检索能力时使用 SolrCloud。</li><li>SolrCloud是基于Solr和Zookeeper的分布式搜索方案，它的主要思想是使用Zookeeper作为集群的配置信息中心。</li><li>它有几个特色功能：1）集中式的配置信息2）自动容错3）近实时搜索4）查询时自动负载均衡</li></ul><h1 id="_7-solr集群的系统架构" tabindex="-1"><a class="header-anchor" href="#_7-solr集群的系统架构"><span>7. Solr集群的系统架构</span></a></h1><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/81aca86bd4364734e8d46.png" alt="图片1.png" tabindex="0"><figcaption>图片1.png</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>物理结构
三个Solr实例（ 每个实例包括两个Core），组成一个SolrCloud。

逻辑结构
索引集合包括两个Shard（shard1和shard2），shard1和shard2分别由三个Core组成，其中一个Leader两个Replication，Leader是由zookeeper选举产生，
zookeeper控制每个shard上三个Core的索引数据一致，解决高可用问题。
用户发起索引请求分别从shard1和shard2上获取，解决高并发问题。
	
collection
Collection在SolrCloud集群中是一个逻辑意义上的完整的索引结构。它常常被划分为一个或多个Shard（分片），它们使用相同的配置信息。
比如：针对商品信息搜索可以创建一个collection。
collection=shard1+shard2+....+shardX
Core
每个Core是Solr中一个独立运行单位，提供 索引和搜索服务。一个shard需要由一个Core或多个Core组成。由于collection由多个shard组成所以collection一般由多个core组成。
Master或Slave
Master是master-slave结构中的主结点（通常说主服务器），Slave是master-slave结构中的从结点（通常说从服务器或备服务器）。
同一个Shard下master和slave存储的数据是一致的，这是为了达到高可用目的。
Shard
Collection的逻辑分片。每个Shard被化成一个或者多个replication，通过选举确定哪个是Leader。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_8-需要实现的solr集群架构" tabindex="-1"><a class="header-anchor" href="#_8-需要实现的solr集群架构"><span>8. 需要实现的solr集群架构</span></a></h1><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/6ede782b265996f3c120c.png" alt="图片2.png" tabindex="0"><figcaption>图片2.png</figcaption></figure><pre><code>Zookeeper作为集群的管理工具。
1、集群管理：容错、负载均衡。
2、配置文件的集中管理
3、集群的入口
需要实现zookeeper 高可用。需要搭建集群。建议是奇数节点。需要三个zookeeper服务器。
搭建solr集群需要7台服务器。
搭建伪分布式：需要三个zookeeper节点需要四个tomcat节点。建议虚拟机的内容1G以上。
</code></pre><h1 id="_9-solrcloud的搭建" tabindex="-1"><a class="header-anchor" href="#_9-solrcloud的搭建"><span>9. solrcloud的搭建</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	Zookeeper集群搭建

	1、需要安装jdk环境。
	2、把zookeeper的压缩包上传到服务器并解压缩tar -zxvf zookeeper-3.4.6.tar.gz。
	3、把zookeeper复制三份。
	[root@localhost ~]# mkdir /usr/java/solr-cloud
	[root@localhost ~]# cp -r zookeeper-3.4.6 /usr/java/solr-cloud/zookeeper01
	[root@localhost ~]# cp -r zookeeper-3.4.6 /usr/java/solr-cloud/zookeeper02
	[root@localhost ~]# cp -r zookeeper-3.4.6 /usr/java/solr-cloud/zookeeper03
	4、在每个zookeeper目录下创建一个data目录mkdir data
	5、在data目录下创建一个myid文件，文件名就叫做“myid”。内容就是每个实例的id。例如1、2、3
	vim data 然后输入i 输入1 输入esc 输入：wq  、cat myid //检查myid的内容1
	6、改配置文件。把conf目录下的zoo_sample.cfg文件改名为zoo.cfg，每个一样配置！
	cp zoo_sample.cfg zoo.cfg
	将datadir=改成data文件夹的地址
	保证clientPort三个不冲突
	然后在最后一行配置
	server.1=192.168.25.135:2881:3881
	server.2=192.168.25.135:2882:3882
	server.3=192.168.25.135:2883:3883
	7、创建全部启动的脚本 start-all.sh :vim start-all.sh
	cd zookeeper01/bin
	./zkServer.sh start
	cd ../../
	cd zookeeper02/bin
	./zkServer.sh start
	cd ../../
	cd zookeeper03/bin
	./zkServer.sh start
	cd ../../
	8、并使用以下命令授权chmod u+x start-all.sh 
	9、查看zookeeper的状态一个leader其他都是follower zookeeper01/bin/zkServer.sh status

	Using config: /usr/java/solr-cloud/zookeeper01/bin/../conf/zoo.cfg
	Stopping zookeeper ... bin/zkServer.sh: 第 143 行:kill: (26838) - 没有那个进程
	STOPPED
	如果关闭zookeeper的时候有这句话 说明端口占用

	查看占用2181端口的程序pid：
	[root@localhost local]# lsof -i:5432

	kill掉该进程
	[root@localhost local]# kill -9 7035
	重新启动即可

	10、创建全部关闭的脚本 start-all.sh :vim shutdown-all.sh
	cd zookeeper01/bin
	./zkServer.sh stop
	cd ../../
	cd zookeeper02/bin
	./zkServer.sh stop
	cd ../../
	cd zookeeper03/bin
	./zkServer.sh stop
	cd ../../
	11、并使用以下命令授权chmod u+x shutdown-all.sh 

	# Solr集群的搭建
	1、复制四个单机版的带solr的tomcat，并修改tomcat端口号、solrhome地址
	2、配置solrCloud相关的配置。每个solrhome下都有一个solr.xml，把其中的ip及端口号配置好。
	vim /usr/java/solr-cloud/solrhome01/solr.xml
	&lt;solrcloud&gt;
		&lt;str name=&quot;host&quot;&gt;192.168.25.135&lt;/str&gt;
		&lt;int name=&quot;hostPort&quot;&gt;8180&lt;/int&gt;
		&lt;str name=&quot;hostContext&quot;&gt;\${hostContext:solr}&lt;/str&gt;
		&lt;int name=&quot;zkClientTimeout&quot;&gt;\${zkClientTimeout:30000}&lt;/int&gt;
		&lt;bool name=&quot;genericCoreNodeNames&quot;&gt;\${genericCoreNodeNames:true}&lt;/bool&gt;
	&lt;/solrcloud&gt;
	3、让zookeeper统一管理配置文件。需要把solrhome/collection1/conf目录上传到zookeeper。上传任意solrhome中的配置文件即可。
	使用工具上传配置文件：/root/solr-4.10.3/example/scripts/cloud-scripts/zkcli.sh
	./zkcli.sh -zkhost 192.168.25.135:2181,192.168.25.135:2182,192.168.25.135:2183 -cmd upconfig -confdir /usr/local/solr-cloud/solrhome01/collection1/conf -confname myconf
	4、修改tomcat/bin目录下的catalina.sh 文件，关联solr和zookeeper。
	把此配置添加到配置文件中：
	JAVA_OPTS=&quot;-DzkHost=192.168.25.135:2181,192.168.25.135:2182,192.168.25.135:2183&quot;
	5、启动每个tomcat实例。要包装zookeeper集群是启动状态。
	6、访问集群
	第十步：创建新的Collection进行分片处理。
	http://192.168.25.135:8180/solr/admin/collections?action=CREATE&amp;name=collection2&amp;numShards=2&amp;replicationFactor=2
	第十一步：删除不用的Collection。
	http://192.168.25.135:8180/solr/admin/collections?action=DELETE&amp;name=collection1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function b(p,q){const l=r("ExternalLinkIcon");return d(),o("div",null,[u,e("ul",null,[e("li",null,[t("从Solr官方网站（"),e("a",v,[t("http://lucene.apache.org/solr/"),n(l)]),t(" ）下载Solr4.10.3，根据Solr的运行环境，Linux下需要下载lucene-4.10.3.tgz，windows下需要下载lucene-4.10.3.zip。")]),e("li",null,[t("Solr使用指南可参考："),e("a",c,[t("https://wiki.apache.org/solr/FrontPage"),n(l)])])]),m])}const S=s(a,[["render",b],["__file","solr.html.vue"]]),y=JSON.parse('{"path":"/backend/searchengine/solr.html","title":"solr","lang":"zh-CN","frontmatter":{"title":"solr","date":"2023-01-01T00:00:00.000Z","tags":"solr","categories":"后端","description":"solr 1. solr介绍 2. Solr与Lucene的区别 3. Solr安装及配置 4. Solr管理索引库 5. 使用SolrJ管理索引库 6. 什么是SolrCloud 7. Solr集群的系统架构 8. 需要实现的solr集群架构 9. solrcloud的搭建 1. solr介绍 Solr是Apache下的一个顶级开源项目，它是基于Lu...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/searchengine/solr.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"solr"}],["meta",{"property":"og:description","content":"solr 1. solr介绍 2. Solr与Lucene的区别 3. Solr安装及配置 4. Solr管理索引库 5. 使用SolrJ管理索引库 6. 什么是SolrCloud 7. Solr集群的系统架构 8. 需要实现的solr集群架构 9. solrcloud的搭建 1. solr介绍 Solr是Apache下的一个顶级开源项目，它是基于Lu..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/81aca86bd4364734e8d46.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"solr\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/81aca86bd4364734e8d46.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/6ede782b265996f3c120c.png\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":16.56,"words":4967},"filePathRelative":"backend/searchengine/solr.md","localizedDate":"2023年1月1日","excerpt":"<p>solr</p>\\n<!--more-->\\n<!-- TOC -->\\n<ul>\\n<li><a href=\\"#1-solr%E4%BB%8B%E7%BB%8D\\">1. solr介绍</a></li>\\n<li><a href=\\"#2-solr%E4%B8%8Elucene%E7%9A%84%E5%8C%BA%E5%88%AB\\">2. Solr与Lucene的区别</a></li>\\n<li><a href=\\"#3-solr%E5%AE%89%E8%A3%85%E5%8F%8A%E9%85%8D%E7%BD%AE\\">3. Solr安装及配置</a></li>\\n<li><a href=\\"#4-solr%E7%AE%A1%E7%90%86%E7%B4%A2%E5%BC%95%E5%BA%93\\">4. Solr管理索引库</a></li>\\n<li><a href=\\"#5-%E4%BD%BF%E7%94%A8solrj%E7%AE%A1%E7%90%86%E7%B4%A2%E5%BC%95%E5%BA%93\\">5. 使用SolrJ管理索引库</a></li>\\n<li><a href=\\"#6-%E4%BB%80%E4%B9%88%E6%98%AFsolrcloud\\">6. 什么是SolrCloud</a></li>\\n<li><a href=\\"#7-solr%E9%9B%86%E7%BE%A4%E7%9A%84%E7%B3%BB%E7%BB%9F%E6%9E%B6%E6%9E%84\\">7. Solr集群的系统架构</a></li>\\n<li><a href=\\"#8-%E9%9C%80%E8%A6%81%E5%AE%9E%E7%8E%B0%E7%9A%84solr%E9%9B%86%E7%BE%A4%E6%9E%B6%E6%9E%84\\">8. 需要实现的solr集群架构</a></li>\\n<li><a href=\\"#9-solrcloud%E7%9A%84%E6%90%AD%E5%BB%BA\\">9. solrcloud的搭建</a></li>\\n</ul>","autoDesc":true}');export{S as comp,y as data};
