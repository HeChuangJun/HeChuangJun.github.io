import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,e as t}from"./app-7KT7HDzT.js";const d={},l=t(`<p>lucene</p><ul><li><a href="#1-%E5%85%A8%E6%96%87%E6%A3%80%E7%B4%A2%E4%BB%8B%E7%BB%8D">1. 全文检索介绍</a></li><li><a href="#2-lucene%E4%BB%8B%E7%BB%8D">2. Lucene介绍</a></li><li><a href="#3-lucene%E5%AE%9E%E7%8E%B0%E5%85%A8%E6%96%87%E6%A3%80%E7%B4%A2%E7%9A%84%E6%B5%81%E7%A8%8B">3. Lucene实现全文检索的流程</a></li><li><a href="#4-lucene%E4%BD%BF%E7%94%A8">4. Lucene使用</a></li></ul><h1 id="_1-全文检索介绍" tabindex="-1"><a class="header-anchor" href="#_1-全文检索介绍"><span>1. 全文检索介绍</span></a></h1><ul><li>数据分类 <ul><li>结构化数据：指具有固定格式或有限长度的数据，如数据库，元数据等。</li><li>非结构化数据：指不定长或无固定格式的数据，如邮件，word文档等磁盘上的文件 <ul><li>顺序扫描法(Serial Scanning)顺序遍历所有文档的内容,直到扫描完所有的文档,如利用windows的搜索也可以搜索文件内容，只是慢</li><li>全文检索(Full-text Search)先从非结构化数据中提取出的然后重新组织的信息(索引)再对索引进行搜索</li></ul></li></ul></li></ul><h1 id="_2-lucene介绍" tabindex="-1"><a class="header-anchor" href="#_2-lucene介绍"><span>2. Lucene介绍</span></a></h1><ul><li>Lucene是apache下的一个开放源代码的全文检索引擎工具包。提供了完整的查询引擎和索引引擎，部分文本分析引擎。</li><li>对于数据量大、数据结构不固定的数据可采用全文检索方式搜索，比如百度、Google等搜索引擎、论坛站内搜索、电商网站站内搜索等。</li></ul><h1 id="_3-lucene实现全文检索的流程" tabindex="-1"><a class="header-anchor" href="#_3-lucene实现全文检索的流程"><span>3. Lucene实现全文检索的流程</span></a></h1><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/eabbde040a19fe3ae942a.png" alt="图片1.png" tabindex="0"><figcaption>图片1.png</figcaption></figure><ul><li>绿色表示索引过程，对要搜索的原始内容进行索引构建一个索引库，索引过程包括：确定原始内容即要搜索的内容→采集文档→创建文档→分析文档→索引文档</li><li>红色表示搜索过程，从索引库中搜索内容，搜索过程包括：用户通过搜索界面→创建查询→执行搜索，从索引库搜索→渲染搜索结果</li></ul><h1 id="_4-lucene使用" tabindex="-1"><a class="header-anchor" href="#_4-lucene使用"><span>4. Lucene使用</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>从官方网站：http://lucene.apache.org/ 下载Lucene4.10.3，并解压。
Jdk要求：1.7以上

jar包
lucene-core-4.10.3.jar
lucene-analyzers-common-4.10.3.jar
lucene-queryparser-4.10.3.jar
其它：
commons-io-2.4.jar
junit-4.9.jar

功能一：创建索引库
使用indexwriter对象创建索引
第一步：创建一个java工程，并导入jar包。
第二步：创建一个indexwriter对象。
1）指定索引库的存放位置Directory对象
2）指定一个分析器，对文档内容进行分析。
第二步：创建document对象。
第三步：创建field对象，将field添加到document对象中。
第四步：使用indexwriter对象将document对象写入索引库，此过程进行索引创建。并将索引和document对象写入索引库。
第五步：关闭IndexWriter对象。

@Test
public void createIndex() throws Exception {
	//指定索引库存放的路径
	//D:\\temp\\0108\\index
	Directory directory = FSDirectory.open(new File(&quot;D:\\\\temp\\\\0108\\\\index&quot;));
	//索引库还可以存放到内存中
	//Directory directory = new RAMDirectory();
	//创建一个标准分析器
	//Analyzer analyzer = new StandardAnalyzer();// 官方推荐
	Analyzer analyzer = new IKAnalyzer();// 官方推荐
	//创建indexwriterCofig对象
	//第一个参数： Lucene的版本信息，可以选择对应的lucene版本也可以使用LATEST
	//第二根参数：分析器对象
	IndexWriterConfig config = new IndexWriterConfig(Version.LATEST, analyzer);
	//创建indexwriter对象
	IndexWriter indexWriter = new IndexWriter(directory, config);
	//原始文档的路径D:\\传智播客\\01.课程\\04.lucene\\01.参考资料\\searchsource
	File dir = new File(&quot;D:\\\\传智播客\\\\01.课程\\\\04.lucene\\\\01.参考资料\\\\searchsource&quot;);
	for (File f : dir.listFiles()) {
		//文件名
		String fileName = f.getName();
		//文件内容
		String fileContent = FileUtils.readFileToString(f);
		//文件路径
		String filePath = f.getPath();
		//文件的大小
		long fileSize  = FileUtils.sizeOf(f);
		//创建文件名域
		//第一个参数：域的名称
		//第二个参数：域的内容
		//第三个参数：是否存储
		Field fileNameField = new TextField(&quot;filename&quot;, fileName, Store.YES);
		//Field域的属性
		//是否分析：是否对域的内容进行分词处理。前提是我们要对域的内容进行查询。
		//是否索引：将Field分析后的词或整个Field值进行索引，只有索引方可搜索到。
		//比如：商品名称、商品简介分析后进行索引，订单号、身份证号不用分析但也要索引，这些将来都要作为查询条件。
		//是否存储：将Field值存储在文档中，存储在文档中的Field才可以从Document中获取
		//是否存储的标准：是否要将内容展示给用户
		//比如：商品名称、订单号，凡是将来要从Document中获取的Field都要存储。
		//文件内容域
		Field fileContentField = new TextField(&quot;content&quot;, fileContent, Store.YES);
		//文件路径域（不分析、不索引、只存储）
		Field filePathField = new StoredField(&quot;path&quot;, filePath);
		//文件大小域
		Field fileSizeField = new LongField(&quot;size&quot;, fileSize, Store.YES);
		
		//创建document对象
		Document document = new Document();
		document.add(fileNameField);
		document.add(fileContentField);
		document.add(filePathField);
		document.add(fileSizeField);
		//创建索引，并写入索引库
		indexWriter.addDocument(document);
	}
	//关闭indexwriter
	indexWriter.close();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/ee25b2bd28aa2f116963c.png" alt="图片6.png"><br> 使用Luke工具查看索引文件<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/88cb3f7a269de2dce082e.png" alt="图片7.png"></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>功能二：查询索引
实现步骤
第一步：创建一个Directory对象，也就是索引库存放的位置。
第二步：创建一个indexReader对象，需要指定Directory对象。
第三步：创建一个indexsearcher对象，需要指定IndexReader对象
第四步：创建一个TermQuery对象，指定查询的域和查询的关键词。
第五步：执行查询。
第六步：返回查询结果。遍历查询结果并输出。
第七步：关闭IndexReader对象

@Test
public void searchIndex() throws Exception {
	//指定索引库存放的路径
	//D:\\temp\\0108\\index
	Directory directory = FSDirectory.open(new File(&quot;D:\\\\temp\\\\0108\\\\index&quot;));
	//创建indexReader对象
	IndexReader indexReader = DirectoryReader.open(directory);
	//创建indexsearcher对象
	IndexSearcher indexSearcher = new IndexSearcher(indexReader);
	//创建一个TermQuery对象，指定查询的域和查询的关键词。
	Query query = new TermQuery(new Term(&quot;filename&quot;, &quot;apache&quot;));
	//执行查询
	//第一个参数是查询对象，第二个参数是查询结果返回的最大值
	//indexSearcher.search(query, n)	根据Query搜索，返回评分最高的n条记录
	//indexSearcher.search(query, filter, n)	根据Query搜索，添加过滤策略，返回评分最高的n条记录
	//indexSearcher.search(query, n, sort)	根据Query搜索，添加排序策略，返回评分最高的n条记录
	//indexSearcher.search(booleanQuery, filter, n, sort)	根据Query搜索，添加过滤策略，添加排序策略，返回评分最高的n条记录
	TopDocs topDocs = indexSearcher.search(query, 10);

	//查询结果的总条数
	//TopDocs.totalHits：是匹配索引库中所有记录的数量
	//TopDocs.scoreDocs：匹配相关度高的前边记录数组，scoreDocs的长度小于等于search方法指定的参数n
	System.out.println(&quot;查询结果的总条数：&quot;+ topDocs.totalHits);
	//遍历查询结果
	//topDocs.scoreDocs存储了document对象的id
	for (ScoreDoc scoreDoc : topDocs.scoreDocs) {
		//scoreDoc.doc属性就是document对象的id
		//根据document的id找到document对象
		Document document = indexSearcher.doc(scoreDoc.doc);
		System.out.println(document.get(&quot;filename&quot;));
		//System.out.println(document.get(&quot;content&quot;));
		System.out.println(document.get(&quot;path&quot;));
		System.out.println(document.get(&quot;size&quot;));
	}
	//关闭indexreader对象
	indexReader.close();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>功能三：支持中文分词
分析器（Analyzer）的执行过程语汇单元的生成过程：Reader-&gt;Tokenizer-&gt;TokenFilter-&gt;TokenFilter-&gt;TokenFilter-&gt;Tokens
要看分析器的分析效果，只需要看Tokenstream中的内容就可以了。每个分析器都有一个方法tokenStream，返回一个tokenStream对象。

分析器的分词效果
//查看标准分析器的分词效果
@Test
public void testTokenStream() throws Exception {
	//创建一个标准分析器对象
	Analyzer analyzer = new IKAnalyzer();
	//获得tokenStream对象
	//第一个参数：域名，可以随便给一个
	//第二个参数：要分析的文本内容
	TokenStream tokenStream = analyzer.tokenStream(&quot;test&quot;, &quot;The Spring Framework provides a comprehensive programming and configuration model.&quot;);
	//添加一个引用，可以获得每个关键词
	CharTermAttribute charTermAttribute = tokenStream.addAttribute(CharTermAttribute.class);
	//添加一个偏移量的引用，记录了关键词的开始位置以及结束位置
	OffsetAttribute offsetAttribute = tokenStream.addAttribute(OffsetAttribute.class);
	//将指针调整到列表的头部
	tokenStream.reset();
	//遍历关键词列表，通过incrementToken方法判断列表是否结束
	while(tokenStream.incrementToken()) {
		//关键词的起始位置
		System.out.println(&quot;start-&gt;&quot; + offsetAttribute.startOffset());
		//取关键词
		System.out.println(charTermAttribute);
		//结束位置
		System.out.println(&quot;end-&gt;&quot; + offsetAttribute.endOffset());
	}
	tokenStream.close();
}
IKAnalyzer.cfg.xml扩展ik分析器
&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;!DOCTYPE properties SYSTEM &quot;http://java.sun.com/dtd/properties.dtd&quot;&gt;  
&lt;properties&gt;  
	&lt;comment&gt;IK Analyzer 扩展配置&lt;/comment&gt;
	&lt;!--用户可以在这里配置自己的扩展字典 --&gt;
	&lt;entry key=&quot;ext_dict&quot;&gt;ext.dic;&lt;/entry&gt; 
	
	&lt;!--用户可以在这里配置自己的扩展停止词字典--&gt;
	&lt;entry key=&quot;ext_stopwords&quot;&gt;stopword.dic;&lt;/entry&gt; 
	
&lt;/properties&gt;
中文分析器
Lucene自带中文分词器
StandardAnalyzer：单字分词：就是按照中文一个字一个字地进行分词。如：“我爱中国”， 效果：“我”、“爱”、“中”、“国”。
CJKAnalyzer：二分法分词：按两个字进行切分。如：“我是中国人”，效果：“我是”、“是中”、“中国”“国人”。
上边两个分词器无法满足需求。SmartChineseAnalyzer 对中文支持较好，但扩展性差，扩展词库，禁用词库和同义词库等不好处理
第三方中文分析器IK-analyzer(zhongdian)： 最新版在https://code.google.com/p/ik-analyzer/上，支持Lucene 4.10从2006年12月推出1.0版开始， 
IKAnalyzer已经推出了4个大版本。最初，它是以开源项目Luence为应用主体的，结合词典分词和文法分析算法的中文分词组件。
从3.0版本开 始，IK发展为面向Java的公用分词组件，独立于Lucene项目，同时提供了对Lucene的默认优化实现。
在2012版本中，IK实现了简单的分词 歧义排除算法，标志着IK分词器从单纯的词典分词向模拟语义分词衍化。 


IKAnalyzer
使用方法：
第一步：把jar包添加到工程中
第二步：把配置文件和扩展词典和停用词词典添加到classpath下
注意：mydict.dic和ext_stopword.dic文件的格式为UTF-8，注意是无BOM 的UTF-8 编码。
使用EditPlus.exe保存为无BOM 的UTF-8 编码格式
Analyzer使用时机
索引时使用Analyzer
输入关键字进行搜索，当需要让该关键字与文档域内容所包含的词进行匹配时需要对文档域内容进行分析，
需要经过Analyzer分析器处理生成语汇单元（Token）。分析器分析的对象是文档中的Field域。
当Field的属性tokenized（是否分词）为true时会对Field值进行分析，如下图：
对于一些Field可以不用分析：
1、不作为查询条件的内容，比如文件路径
2、不是匹配内容中的词而匹配Field的整体内容，比如订单号、身份证号等。

搜索时使用Analyzer
对搜索关键字进行分析和索引分析一样，使用Analyzer对搜索关键字进行分析、分词处理，
使用分析后每个词语进行搜索。比如：搜索关键字：spring web ，经过分析器进行分词，
得出：spring  web拿词去索引词典表查找 ，找到索引链接到Document，解析Document内容。
对于匹配整体Field域的查询可以在搜索时不分析，比如根据订单号、身份证号查询等。
注意：搜索使用的分析器要和索引使用的分析器一致。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/70c59e47babacadd5ed42.png" alt="图片10.png" tabindex="0"><figcaption>图片10.png</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>索引库的维护
索引库的添加
	向索引库中添加document对象。
	第一步：先创建一个indexwriter对象
	第二步：创建一个document对象
	第三步：把document对象写入索引库
	第四步：关闭indexwriter。

	//添加索引
	@Test
	public void addDocument() throws Exception {
		//索引库存放路径
		Directory directory = FSDirectory.open(new File(&quot;D:\\\\temp\\\\0108\\\\index&quot;));	
		IndexWriterConfig config = new IndexWriterConfig(Version.LATEST, new IKAnalyzer());
		//创建一个indexwriter对象
		IndexWriter indexWriter = new IndexWriter(directory, config);
		//创建一个Document对象
		Document document = new Document();
		//向document对象中添加域。
		//不同的document可以有不同的域，同一个document可以有相同的域。
		document.add(new TextField(&quot;filename&quot;, &quot;新添加的文档&quot;, Store.YES));
		document.add(new TextField(&quot;content&quot;, &quot;新添加的文档的内容&quot;, Store.NO));
		document.add(new TextField(&quot;content&quot;, &quot;新添加的文档的内容第二个content&quot;, Store.YES));
		document.add(new TextField(&quot;content1&quot;, &quot;新添加的文档的内容要能看到&quot;, Store.YES));
		//添加文档到索引库
		indexWriter.addDocument(document);
		//关闭indexwriter
		indexWriter.close();	
	}

索引库删除
	将索引目录的索引信息全部删除，直接彻底删除，无法恢复。此方法慎用！！
	//删除全部索引
	@Test
	public void deleteAllIndex() throws Exception {
		IndexWriter indexWriter = getIndexWriter();
		//删除全部索引
		indexWriter.deleteAll();
		//关闭indexwriter
		indexWriter.close();
	}

指定查询条件删除
	//根据查询条件删除索引
	@Test
	public void deleteIndexByQuery() throws Exception {
		IndexWriter indexWriter = getIndexWriter();
		//创建一个查询条件
		Query query = new TermQuery(new Term(&quot;filename&quot;, &quot;apache&quot;));
		//根据查询条件删除
		indexWriter.deleteDocuments(query);
		//关闭indexwriter
		indexWriter.close();
	}

索引库的修改
	原理就是先删除后添加。
	//修改索引库
	@Test
	public void updateIndex() throws Exception {
		IndexWriter indexWriter = getIndexWriter();
		//创建一个Document对象
		Document document = new Document();
		//向document对象中添加域。
		//不同的document可以有不同的域，同一个document可以有相同的域。
		document.add(new TextField(&quot;filename&quot;, &quot;要更新的文档&quot;, Store.YES));
		document.add(new TextField(&quot;content&quot;, &quot;2013年11月18日 - Lucene 简介 Lucene 是一个基于 Java 的全文信息检索工具包,&quot;+&quot;
		它不是一个完整的搜索应用程序,而是为你的应用程序提供索引和搜索功能。&quot;, Store.YES));
		//先根据content域为java查找到文档，新文档覆盖该文档，原文档的content域及其文档本身不再存在于新索引库中，被整个新文档的域和新文档本身取代
		//先根据content域为java查找到文档，如果有就更新它(如果有多条，最后更新后只有一条)。如果没有就新增.
		indexWriter.updateDocument(new Term(&quot;content&quot;, &quot;java&quot;), document);
		//关闭indexWriter
		indexWriter.close();
	}

索引库查询（重点）
	对要搜索的信息创建Query查询对象，Lucene会根据Query查询对象生成最终的查询语法，
	可通过两种方法创建查询对象：
	1）使用Lucene提供Query子类
	Query是一个抽象类，lucene提供了很多查询对象，比如TermQuery项精确查询，NumericRangeQuery数字范围查询等。
	Query query = new TermQuery(new Term(&quot;name&quot;, &quot;lucene&quot;));

	2）使用QueryParse解析查询表达式
	QueryParse会将用户输入的查询表达式解析成Query对象实例。
	QueryParser queryParser = new QueryParser(&quot;name&quot;, new IKAnalyzer());
	Query query = queryParser.parse(&quot;name:lucene&quot;);


使用query的子类查询
	MatchAllDocsQuery
	使用MatchAllDocsQuery查询索引目录中的所有文档
	@Test
	public void testMatchAllDocsQuery() throws Exception {
		IndexSearcher indexSearcher = getIndexSearcher();
		//创建查询条件
		Query query = new MatchAllDocsQuery();
		//执行查询
		printResult(query, indexSearcher);
	}

	TermQuery
	TermQuery，通过项查询，TermQuery不使用分析器所以建议匹配不分词的Field域查询，比如订单号、分类ID号等。
	指定要查询的域和要查询的关键词。
	@Test
	public void testTermQuery() throws Exception {
		IndexSearcher indexSearcher = getIndexSearcher();
		//创建查询对象
		Query query = new TermQuery(new Term(&quot;content&quot;, &quot;lucene&quot;));
		//执行查询
		TopDocs topDocs = indexSearcher.search(query, 10);
		//共查询到的document个数
		System.out.println(&quot;查询结果总数量：&quot; + topDocs.totalHits);
		//遍历查询结果
		for (ScoreDoc scoreDoc : topDocs.scoreDocs) {
			Document document = indexSearcher.doc(scoreDoc.doc);
			System.out.println(document.get(&quot;filename&quot;));
			//System.out.println(document.get(&quot;content&quot;));
			System.out.println(document.get(&quot;path&quot;));
			System.out.println(document.get(&quot;size&quot;));
		}
		//关闭indexreader
		indexSearcher.getIndexReader().close();
	}

	NumericRangeQuery
	可以根据数值范围查询。
	//数值范围查询
	@Test
	public void testNumericRangeQuery() throws Exception {
		IndexSearcher indexSearcher = getIndexSearcher();
		//创建查询
		//参数：
		//1.域名
		//2.最小值
		//3.最大值
		//4.是否包含最小值
		//5.是否包含最大值
		Query query = NumericRangeQuery.newLongRange(&quot;size&quot;, 1l, 1000l, true, true);
		//执行查询
		printResult(query, indexSearcher);
	}

	BooleanQuery
	可以组合查询条件。
	//组合条件查询
	@Test
	public void testBooleanQuery() throws Exception {
		IndexSearcher indexSearcher = getIndexSearcher();
		//创建一个布尔查询对象
		BooleanQuery query = new BooleanQuery();
		//创建第一个查询条件
		Query query1 = new TermQuery(new Term(&quot;filename&quot;, &quot;apache&quot;));
		Query query2 = new TermQuery(new Term(&quot;content&quot;, &quot;apache&quot;));
		//组合查询条件
		//Occur.MUST：必须满足此条件，相当于and
		//Occur.SHOULD：应该满足，但是不满足也可以，相当于or
		//Occur.MUST_NOT：必须不满足。相当于not
		query.add(query1, Occur.MUST);
		query.add(query2, Occur.MUST);
		//执行查询
		printResult(query, indexSearcher);
	}

	


使用queryparser查询
	通过QueryParser也可以创建Query，QueryParser提供一个Parse方法，此方法可以直接根据查询语法来查询。
	Query对象执行的查询语法可通过System.out.println(query);查询。
	需要使用到分析器。建议创建索引时使用的分析器和查询索引时使用的分析器要一致。

	需要加入queryParser依赖的jar包。
	lucene-queryparser-4.10.3.jar
	@Test
	public void testQueryParser() throws Exception {
		IndexSearcher indexSearcher = getIndexSearcher();
		//创建queryparser对象
		//第一个参数默认搜索的域*:*全部查的语法
		//第二个参数就是分析器对象
		QueryParser queryParser = new QueryParser(&quot;content&quot;, new IKAnalyzer());
		//执行*:*
		Query query = queryParser.parse(&quot;Lucene是java开发的&quot;);
		//执行fileName:test
		//Query query = queryParser.parse(&quot;fileName:test&quot;);
		//执行查询
		printResult(query, indexSearcher);
	}

查询语法
1、基础的查询语法，关键词查询：
	域名+“：”+搜索的关键字
	例如：content:java
2、范围查询
	域名+“:”+[最小值 TO 最大值]
	例如：size:[1 TO 1000]
	范围查询在lucene中支持数值类型，不支持字符串类型。在solr中支持字符串类型。
3、组合条件查询
1）+条件1 +条件2：两个条件之间是并且的关系and
例如：+filename:apache +content:apache
2）+条件1 条件2：必须满足第一个条件，应该满足第二个条件
例如：+filename:apache content:apache
3）条件1 条件2：两个条件满足其一即可。
例如：filename:apache content:apache
4）-条件1 条件2：必须不满足条件1，要满足条件2
例如：-filename:apache content:apache
Occur.MUST 查询条件必须满足，相当于and	+（加号）
Occur.SHOULD 查询条件可选，相当于or 空（不用符号）
Occur.MUST_NOT 查询条件不能满足，相当于not非	-（减号）

第二种写法：
条件1 AND 条件2
条件1 OR 条件2
条件1 NOT 条件2

MultiFieldQueryParser
可以指定多个默认搜索域
@Test
public void testMultiFiledQueryParser() throws Exception {
	IndexSearcher indexSearcher = getIndexSearcher();
	//可以指定默认搜索的域是多个
	String[] fields = {&quot;filename&quot;, &quot;content&quot;};
	//创建一个MulitFiledQueryParser对象
	MultiFieldQueryParser queryParser = new MultiFieldQueryParser(fields, new IKAnalyzer());
	Query query = queryParser.parse(&quot;java AND apache&quot;);
	System.out.println(query);
	//执行查询
	printResult(query, indexSearcher);
	
	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),r=[l];function s(a,u){return n(),i("div",null,r)}const m=e(d,[["render",s],["__file","lucene.html.vue"]]),o=JSON.parse('{"path":"/backend/searchengine/lucene.html","title":"lucene","lang":"zh-CN","frontmatter":{"title":"lucene","date":"2023-01-01T00:00:00.000Z","tags":"lucene","categories":"后端","description":"lucene 1. 全文检索介绍 2. Lucene介绍 3. Lucene实现全文检索的流程 4. Lucene使用 1. 全文检索介绍 数据分类 结构化数据：指具有固定格式或有限长度的数据，如数据库，元数据等。 非结构化数据：指不定长或无固定格式的数据，如邮件，word文档等磁盘上的文件 顺序扫描法(Serial Scanning)顺序遍历所有文档...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/searchengine/lucene.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"lucene"}],["meta",{"property":"og:description","content":"lucene 1. 全文检索介绍 2. Lucene介绍 3. Lucene实现全文检索的流程 4. Lucene使用 1. 全文检索介绍 数据分类 结构化数据：指具有固定格式或有限长度的数据，如数据库，元数据等。 非结构化数据：指不定长或无固定格式的数据，如邮件，word文档等磁盘上的文件 顺序扫描法(Serial Scanning)顺序遍历所有文档..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/eabbde040a19fe3ae942a.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"lucene\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/eabbde040a19fe3ae942a.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/ee25b2bd28aa2f116963c.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/88cb3f7a269de2dce082e.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/70c59e47babacadd5ed42.png\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":14.69,"words":4408},"filePathRelative":"backend/searchengine/lucene.md","localizedDate":"2023年1月1日","excerpt":"<p>lucene</p>\\n<!--more-->\\n<!-- TOC -->\\n<ul>\\n<li><a href=\\"#1-%E5%85%A8%E6%96%87%E6%A3%80%E7%B4%A2%E4%BB%8B%E7%BB%8D\\">1. 全文检索介绍</a></li>\\n<li><a href=\\"#2-lucene%E4%BB%8B%E7%BB%8D\\">2. Lucene介绍</a></li>\\n<li><a href=\\"#3-lucene%E5%AE%9E%E7%8E%B0%E5%85%A8%E6%96%87%E6%A3%80%E7%B4%A2%E7%9A%84%E6%B5%81%E7%A8%8B\\">3. Lucene实现全文检索的流程</a></li>\\n<li><a href=\\"#4-lucene%E4%BD%BF%E7%94%A8\\">4. Lucene使用</a></li>\\n</ul>","autoDesc":true}');export{m as comp,o as data};
