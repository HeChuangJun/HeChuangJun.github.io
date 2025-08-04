import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as d,o as a,c as u,a as e,b as i,d as s,e as n}from"./app-7KT7HDzT.js";const r={},c=n('<h1 id="elasticsearch" tabindex="-1"><a class="header-anchor" href="#elasticsearch"><span>ElasticSearch</span></a></h1><h2 id="elasticsearch介绍" tabindex="-1"><a class="header-anchor" href="#elasticsearch介绍"><span>ElasticSearch介绍</span></a></h2><ul><li>注意： 在没有创建库的时候搜索，ES会创建一个库并自动创建该字段并且设置为String类型也就是text</li><li>什么是elasticsearch？一个开源的分布式搜索引擎，可以用来实现从海量数据存储、搜索、分析等功能。底层是基于lucene(Java语言的搜索引擎类库)来实现。</li><li>什么是elastic stack（ELK）？以elasticsearch为核心的技术栈，包括beats、Logstash、kibana(可视化界面)、elasticsearch，被广泛应用在日志数据分析、实时监控等领域：</li><li>什么是Lucene？Apache的开源搜索引擎类库，提供了搜索引擎的核心API</li></ul><h2 id="es参考文档" tabindex="-1"><a class="header-anchor" href="#es参考文档"><span>es参考文档</span></a></h2>',4),v={href:"https://www.cnblogs.com/buchizicai/p/17093719.html",target:"_blank",rel:"noopener noreferrer"},o=n(`<h2 id="正向索引和倒排索引" tabindex="-1"><a class="header-anchor" href="#正向索引和倒排索引"><span>正向索引和倒排索引</span></a></h2><ul><li><p>倒排索引的概念是基于MySQL这样的正向索引而言的。</p></li><li><p>正向索引：设置了索引的查询速度快，但要是模糊查询则就很慢！需要全表扫描</p></li><li><p>倒排索引</p><ul><li>词条（Term）：对文档数据或用户搜索数据，利用某种算法分词，得到的具备含义的词语就是词条。例如：我是中国人，就可以分为：我、是、中国人、中国、国人这样的几个词条</li><li>创建倒排索引流程： <ul><li>将每一个文档的数据利用算法分词，得到一个个词条</li><li>创建表，每行数据包括词条、词条所在文档id、位置等信息</li><li>因为词条唯一性，可以给词条创建索引，例如hash表结构索引</li></ul></li><li>查询时虽然要先查询倒排索引，再查询倒排索引，但是无论是词条、还是文档id都建立了索引，查询速度非常快！无需全表扫描。</li></ul></li><li><p>正向和倒排对比</p><ul><li>正向索引是最传统的，根据id索引的方式。但根据词条查询时，必须先逐条获取每个文档，然后判断文档中是否包含所需要的词条，是根据文档找词条的过程。</li><li>而倒排索引则相反，是先找到用户要搜索的词条，根据词条得到保护词条的文档的id，然后根据id获取文档。是根据词条找文档的过程。</li></ul></li><li><p>正向索引：</p><ul><li>优点：可以给多个字段创建索引、根据索引字段搜索、排序速度非常快</li><li>缺点：根据非索引字段，或者索引字段中的部分词条查找时，只能全表扫描。</li></ul></li><li><p>倒排索引：</p><ul><li>优点：根据词条搜索、模糊搜索时，速度非常快</li><li>缺点：只能给词条创建索引，而不是字段、无法根据字段做排序</li></ul></li></ul><h2 id="es数据库基本概念" tabindex="-1"><a class="header-anchor" href="#es数据库基本概念"><span>ES数据库基本概念</span></a></h2><table><thead><tr><th style="text-align:center;">MySQL</th><th style="text-align:center;">Elasticsearch</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">Table</td><td style="text-align:center;">Index</td><td style="text-align:center;">索引(index)，就是文档的集合，类似数据库的表(table)</td></tr><tr><td style="text-align:center;">Row</td><td style="text-align:center;">Document</td><td style="text-align:center;">文档（Document），就是一条条的数据，类似数据库中的行（Row），文档都是JSON格式</td></tr><tr><td style="text-align:center;">Column</td><td style="text-align:center;">Field</td><td style="text-align:center;">字段（Field），就是JSON文档中的字段，类似数据库中的列（Column）</td></tr><tr><td style="text-align:center;">Schema</td><td style="text-align:center;">Mapping</td><td style="text-align:center;">Mapping（映射）是索引中文档的约束，例如字段类型约束。类似数据库的表结构（Schema）</td></tr><tr><td style="text-align:center;">SQL</td><td style="text-align:center;">DSL</td><td style="text-align:center;">DSL是elasticsearch提供的JSON风格的请求语句，用来操作elasticsearch，实现CRUD</td></tr></tbody></table><h2 id="mapping属性" tabindex="-1"><a class="header-anchor" href="#mapping属性"><span>Mapping属性</span></a></h2><ul><li>type：字段数据类型，常见的简单类型有： <ul><li>字符串：text（可分词的文本）、keyword（不可分词，只能整体搜索，不支持搜索部分内容。例如：品牌、国家、ip地址）</li><li>数值：long、integer、short、byte、double、float、</li><li>布尔：boolean</li><li>日期：date</li><li>对象：object</li><li>geo_point地理坐标:由纬度(latitude)和经度(longitude)确定的一个点。例如:&quot;32.8752345,120.2981576&quot;</li><li>geo_shape:有多个geo_point组成的复杂几何图形。例如一条直线，&quot;LINESTRING(-770365338.897676,-77009051 38.889939)&quot;</li><li>completion：用来实现自动补全功能。这个查询会匹配以用户输入内容开头的词条并返回。字段的内容一般是用来补全的多个词条形成的数组。</li></ul></li><li>index：是否创建索引，默认为true</li><li>analyzer：使用哪种分词器</li><li>properties：该字段的子字段</li><li>copy_to:将当前字段值拷贝到另一个字段上，供用户搜索</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>例如下面的json文档：

{
    &quot;age&quot;: 21,
    &quot;weight&quot;: 52.1,
    &quot;isMarried&quot;: false,
    &quot;info&quot;: &quot;真相只有一个！&quot;,
    &quot;email&quot;: &quot;zy@itcast.cn&quot;,
    &quot;score&quot;: [99.1, 99.5, 98.9],
    &quot;name&quot;: {
        &quot;firstName&quot;: &quot;柯&quot;,
        &quot;lastName&quot;: &quot;南&quot;
    }
}
对应的每个字段映射（mapping）：
age：类型为 integer；参与搜索，因此需要index为true；无需分词器
weight：类型为float；参与搜索，因此需要index为true；无需分词器
isMarried：类型为boolean；参与搜索，因此需要index为true；无需分词器
info：类型为字符串，需要分词，因此是text；参与搜索，因此需要index为true；分词器可以用ik_smart
email：类型为字符串，但是不需要分词，因此是keyword；不参与搜索，因此需要index为false；无需分词器
score：虽然是数组，但是我们只看元素的类型，类型为float；参与搜索，因此需要index为true；无需分词器
name：类型为object，需要定义多个子属性
name.firstName；类型为字符串，但是不需要分词，因此是keyword；参与搜索，因此需要index为true；无需分词器
name.lastName；类型为字符串，但是不需要分词，因此是keyword；参与搜索，因此需要index为true；无需分词器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql与elasticsearch比较" tabindex="-1"><a class="header-anchor" href="#mysql与elasticsearch比较"><span>mysql与elasticsearch比较</span></a></h2><ul><li>Mysql：擅长事务类型操作，可以确保数据的安全和一致性.对安全性要求较高的写操作，使用mysql实现</li><li>Elasticsearch：擅长海量数据的搜索、分析、计算.对查询性能要求较高的搜索需求，使用elasticsearch实现</li><li>两者再基于某种方式，实现数据的同步，保证一致性</li></ul><h2 id="分词器" tabindex="-1"><a class="header-anchor" href="#分词器"><span>分词器</span></a></h2><ul><li>分词器的作用是什么？创建倒排索引时对文档分词、用户搜索时，对输入的内容分词搜索</li><li>IK分词器有几种模式？ik_smart：智能切分、粗粒度；ik_max_word：最细切分，细粒度</li><li>IK分词器如何拓展词条？如何停用词条？利用config目录的IkAnalyzer.cfg.xml文件添加拓展词典和停用词典；在词典中添加拓展词条或者停用词条</li><li>注意:只有类型是text的才能分词</li></ul><h2 id="docker部署单点es" tabindex="-1"><a class="header-anchor" href="#docker部署单点es"><span>docker部署单点es</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>docker run -d \\
	--name es \\
    -e &quot;ES_JAVA_OPTS=-Xms512m -Xmx512m&quot; \\
    -e &quot;discovery.type=single-node&quot; \\
    -v es-data:/usr/share/elasticsearch/data \\
    -v es-plugins:/usr/share/elasticsearch/plugins \\
    --privileged \\
    -p 9200:9200 \\
    -p 9300:9300 \\
elasticsearch:7.12.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>-e &quot;cluster.name=es-docker-cluster&quot;：设置集群名称<br> -e &quot;http.host=0.0.0.0&quot;：监听的地址，可以外网访问<br> -e &quot;ES_JAVA_OPTS=-Xms512m -Xmx512m&quot;：内存大小<br> -e &quot;discovery.type=single-node&quot;：非集群模式<br> -v es-data:/usr/share/elasticsearch/data：挂载逻辑卷，绑定es的数据目录<br> -v es-logs:/usr/share/elasticsearch/logs：挂载逻辑卷，绑定es的日志目录<br> -v es-plugins:/usr/share/elasticsearch/plugins：挂载逻辑卷，绑定es的插件目录<br> --privileged：授予逻辑卷访问权<br> --network es-net ：加入一个名为es-net的网络中<br> -p 9200:9200：端口映射配置</p><ul><li>下载ik分词器并安装 <ul><li>在线安装：./bin/elasticsearch-plugin install elasticsearch-analysis-ik-7.12.1.zip</li><li>离线安装：下载包后，放到plugins文件夹下</li><li>修改配置文件,并添加/停用自定义分词字典</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;!DOCTYPE properties SYSTEM &quot;http://java.sun.com/dtd/properties.dtd&quot;&gt;
&lt;properties&gt;
	&lt;comment&gt;IK Analyzer 扩展配置&lt;/comment&gt;
	&lt;!--用户可以在这里配置自己的扩展字典 --&gt;
	&lt;entry key=&quot;ext_dict&quot;&gt;xxx.dic&lt;/entry&gt;
	 &lt;!--用户可以在这里配置自己的扩展停止词字典--&gt;
	&lt;entry key=&quot;ext_stopwords&quot;&gt;&lt;/entry&gt;
	&lt;!--用户可以在这里配置远程扩展字典 --&gt;
	&lt;!-- &lt;entry key=&quot;remote_ext_dict&quot;&gt;words_location&lt;/entry&gt; --&gt;
	&lt;!--用户可以在这里配置远程扩展停止词字典--&gt;
	&lt;!-- &lt;entry key=&quot;remote_ext_stopwords&quot;&gt;words_location&lt;/entry&gt; --&gt;
&lt;/properties&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),m={href:"https://github.com/medcl/elasticsearch-analysis-pinyin",target:"_blank",rel:"noopener noreferrer"},b=e("li",null,"离线安装：下载包后，放到plugins文件夹下",-1),q=e("li",null,"安装/移除windows服务./bin/elasticsearch-plugin elasticsearch-service.bat start/remove",-1),h=e("li",null,"重置密码:./bin elasticsearch-reset-password -u elastic",-1),p=n(`<h1 id="es基本命令" tabindex="-1"><a class="header-anchor" href="#es基本命令"><span>ES基本命令</span></a></h1><ul><li>分词分析与自定义分词器</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
POST /_analyze
{
  &quot;analyzer&quot;: &quot;ik_max_word&quot;,//分词器模式
  &quot;text&quot;: &quot;黑马程序员学习java太棒了&quot;
}
# elasticsearch中分词器（analyzer）的组成包含三部分：
  - character filters：在tokenizer之前对文本进行处理。例如删除字符、替换字符
  - tokenizer：将文本按照一定的规则切割成词条（term）。例如keyword，就是不分词；还有ik_smart
  - tokenizer filter：将tokenizer输出的词条做进一步处理。例如大小写转换、同义词处理、拼音处理等
PUT /test
{
  &quot;settings&quot;: {
    &quot;analysis&quot;: {
      &quot;analyzer&quot;: { // 自定义分词器
        &quot;my_analyzer&quot;: {  // 分词器名称
          &quot;tokenizer&quot;: &quot;ik_max_word&quot;,
          &quot;filter&quot;: &quot;py&quot;
        }
      },
      &quot;filter&quot;: {   // 自定义tokenizer filter
        &quot;py&quot;: {  // 过滤器名称
          &quot;type&quot;: &quot;pinyin&quot;, // 过滤器类型，这里是pinyin
		  &quot;keep_full_pinyin&quot;: false,
          &quot;keep_joined_full_pinyin&quot;: true,
          &quot;keep_original&quot;: true,
          &quot;limit_first_letter_length&quot;: 16,
          &quot;remove_duplicated_term&quot;: true,
          &quot;none_chinese_pinyin_tokenize&quot;: false
        }
      }
    }
  },
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;name&quot;: {
        &quot;type&quot;: &quot;text&quot;,
        &quot;analyzer&quot;: &quot;my_analyzer&quot;,
        &quot;search_analyzer&quot;: &quot;ik_smart&quot;
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>索引库的CRUD</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 创建索引库和映射
PUT /索引库名称
{
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;testtext&quot;:{
        &quot;type&quot;: &quot;text&quot;,
        &quot;analyzer&quot;: &quot;ik_smart&quot;
      },
      &quot;testnumber&quot;:{
        &quot;type&quot;: &quot;text&quot;,
        &quot;analyzer&quot;:&quot;ik_max_word&quot;
      },
      &quot;testobject&quot;:{
        &quot;properties&quot;: {
          &quot;testobjectproperties&quot;: {
            &quot;type&quot;: &quot;keyword&quot;
          }
        }
      }
    }
  }
}

# 查询索引库 GET /索引库名

# 修改索引库（只能增加新的字段到mapping中）/索引库名/_mapping
# 倒排索引结构一旦数据结构改变（比如分词器），就需要重新创建倒排索引，因此索引库创建后无法修改mapping中已有的字段。但可以添加新的字段到mapping中，因为不会对倒排索引产生影响。
{
  &quot;properties&quot;: {
    &quot;testtext2&quot;:{
      &quot;type&quot;: &quot;text&quot;,
      &quot;analyzer&quot;: &quot;ik_max_word&quot;
    }
  }
}


# 删除索引库：DELETE /索引库名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>文档操作</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 创建文档：POST /{索引库名}/_doc/文档id（没有则会立即创建）
POST /索引库名/_doc/文档id
{
    &quot;字段1&quot;: &quot;值1&quot;,
    &quot;字段2&quot;: &quot;值2&quot;,
    &quot;字段3&quot;: {
        &quot;子属性1&quot;: &quot;值3&quot;,
        &quot;子属性2&quot;: &quot;值4&quot;
    },
    // ...
}

# 查询文档：GET /{索引库名}/_doc/文档id
# 批量查询：查询该索引库下的全部文档 GET /{索引库名称}/_search

# 删除文档：DELETE /{索引库名}/_doc/文档id


# 全量修改文档：PUT /{索引库名}/_doc/文档id
# 本质：根据指定的id删除文档，不管id存不存在都新增一个相同id的文档
{
  &quot;testtext&quot;:&quot;斑猪活动实在太棒了2&quot;,
  &quot;testnumber&quot;:321,
  &quot;testobject&quot;:{
      &quot;testobjectproperties&quot;: &quot;斑猪秀秀也不错2&quot;
  }
}


# 增量修改文档 ：POST /{索引库名}/_update/文档id { &quot;doc&quot;: {字段}}
{
  &quot;doc&quot;:{
    &quot;testtext&quot;:&quot;斑猪活动实在太棒了3&quot;,
    &quot;testnumber&quot;:321,
    &quot;testobject&quot;:{
        &quot;testobjectproperties&quot;: &quot;斑猪秀秀也不错3&quot;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查询</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># Elasticsearch提供了基于JSON的DSL（Domain Specific Language）来定义查询。常见的查询类型包括：
  - 查询所有：查询出所有数据，一般测试用。例如：match_all
  - 全文检索（full text）查询：利用分词器对用户输入内容分词，然后去倒排索引库中匹配
    - match:根据一个字段查询【推荐：使用copy_to构造all字段】
    - multi_match:根据多个字段查询，参与查询字段越多，查询性能越差。建议采用copy_to，然后单字段查询的方式
  - 精确查询：
    - term:根据精确词条值查找数据，一般是查找keyword、数值、日期、boolean等类型字段。例如：ids、range、term
    - range：根据数值范围查询，可以是数值、日期的范围
  - 地理（geo）查询：根据经纬度查询。附近的地点。矩形氛围搜索，原型范围搜索 。例如：geo_distance、geo_bounding_box
  - 复合（compound）查询：复合查询可以将上述各种查询条件组合起来，合并查询条件。例如：bool、function_score
  - suggest查询: 用于实现搜索框自动补全功能
# 查询语法 
GET /{索引库名}/_search
{
  &quot;query&quot;: {
    &quot;查询类型&quot;: {
      &quot;查询条件(属性名)&quot;: &quot;条件值&quot;
    }
  }
}
# match
{
  &quot;query&quot;: {
    &quot;match&quot;: {
      &quot;testtext&quot;: &quot;斑猪&quot;
    }
  }
}
# mulit_match
{
  &quot;query&quot;: {
    &quot;mulit_match&quot;: {
      &quot;query&quot;: &quot;斑猪&quot;,
      &quot;fields&quot;: [&quot;testtext&quot;, &quot; testtext2&quot;]
    }
  }
}
# term
{
  &quot;query&quot;: {
    &quot;term&quot;: {
      &quot;testtext&quot;: &quot;斑猪&quot;
    }
  }
}
# range:
{
  &quot;query&quot;: {
    &quot;range&quot;: {
      &quot;testnumber&quot;: {
        &quot;gte&quot;:100,
        &quot;lte&quot;:200
      }
    }
  }
}
# 矩形范围查询
// geo_bounding_box查询
GET /indexName/_search
{
  &quot;query&quot;: {
    &quot;geo_bounding_box&quot;: {
      &quot;testgeo_point&quot;: {
        &quot;top_left&quot;: { // 左上点
          &quot;lat&quot;: 31.1,
          &quot;lon&quot;: 121.5
        },
        &quot;bottom_right&quot;: { // 右下点
          &quot;lat&quot;: 30.9,
          &quot;lon&quot;: 121.7
        }
      }
    }
  }
}
# 附近(圆形)查询
{
  &quot;query&quot;: {
    &quot;geo_distance&quot;: {
      &quot;distance&quot;: &quot;15km&quot;, // 半径
      &quot;testgeo_point&quot;: &quot;31.21,121.5&quot; // 圆心
    }
  }
}
# 复合查询
# fuction score：算分函数查询，可以控制文档相关性算分，控制文档排名(广告优先)。三要素：过滤条件(哪些文档要加分)、算分函数(如何计算function score)、加权方式(function score 与 query score如何运算)
# bool query：布尔查询，利用逻辑关系组合多个其它的查询，实现复杂搜索
# elasticsearch会根据词条和文档的相关度做打分，包括TF-IDF算法、BM25算法。TF-IDF算法缺点是词条频率越高，文档得分也会越高，单个词条对文档影响较大。而BM25则会让单个词条的算分有一个上限，曲线更加平滑
# match查询结果会根据文档与搜索词条的关联度打分（_score），返回结果时按照分值降序排列
{
  &quot;query&quot;: {
    &quot;function_score&quot;: {
      //搜索时，参与打分的字段越多，查询的性能也越差。建议搜索框的关键字搜索，是全文检索查询，使用must查询，参与算分；其它过滤条件采用filter查询。不参与算分           
      &quot;query&quot;: { // 原始查询算分，搜索文档并根据相关性基于BM25算法打分
          &quot;bool&quot;: {
              &quot;must&quot;: [ //必须匹配每个子查询，类似“与”
                  {&quot;term&quot;: {&quot;city&quot;: &quot;上海&quot; }}
              ],
              &quot;should&quot;: [ //选择性匹配子查询，类似“或”
                  {&quot;term&quot;: {&quot;brand&quot;: &quot;皇冠假日&quot; }},
                  {&quot;term&quot;: {&quot;brand&quot;: &quot;华美达&quot; }}
              ],
              &quot;must_not&quot;: [ //必须不匹配，不参与算分，类似“非”
                  { &quot;range&quot;: { &quot;price&quot;: { &quot;lte&quot;: 500 } }}
              ],
              &quot;filter&quot;: [ //必须匹配，不参与算分
                  { &quot;range&quot;: {&quot;score&quot;: { &quot;gte&quot;: 45 } }}
              ]
          }
      },
      &quot;functions&quot;: [ // 算分函数算分
        {
          &quot;filter&quot;: { // 符合条件的才会重新算分
            &quot;term&quot;: {
              &quot;brand&quot;: &quot;如家&quot;
            }
          },
          &quot;weight&quot;: 2 // 算分权重为2，函数结果是常量
          &quot;field_value_factor&quot;: 以文档中的某个字段值作为函数结果
          &quot;random_score&quot;:以随机数作为函数结果
          &quot;script_score&quot;:自定义算分函数算法
        }
      ],
      &quot;boost_mode&quot;: &quot;sum&quot;//算分函数和原始查询的算分，两者结果的运算方式，包括sum、avg、max、min、multiply(相乘)、replace(function score替换query score)
    }
  }  
}

# Completion Suggester查询实现自动补全功能。参与补全查询的字段必须是completion类型。
// 创建索引库
PUT test
{
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;title&quot;:{
        &quot;type&quot;: &quot;completion&quot;
      }
    }
  }
}
//然后插入下面的数据：
POST test/_doc
{
  &quot;title&quot;: [&quot;Sony&quot;, &quot;WH-1000XM3&quot;]
}
POST test/_doc
{
  &quot;title&quot;: [&quot;SK-II&quot;, &quot;PITERA&quot;]
}
POST test/_doc
{
  &quot;title&quot;: [&quot;Nintendo&quot;, &quot;switch&quot;]
}
// 自动补全查询
GET /test/_search
{
  &quot;suggest&quot;: {
    &quot;title_suggest&quot;: {	//设置这个自动查询操作的名称
      &quot;text&quot;: &quot;s&quot;, // 关键字
      &quot;completion&quot;: {
        &quot;field&quot;: &quot;title&quot;, // 补全查询的字段名
        &quot;skip_duplicates&quot;: true, // 跳过重复的
        &quot;size&quot;: 10 // 获取前10条结果
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>搜索结果分类</li><li>查询的DSL是一个大的JSON对象，包含下列属性： <ul><li>query：查询条件</li><li>from和size：分页条件 elasticsearch会禁止from+ size 超过10000的请求.默认情况下只返回top10的数据</li><li>sort：排序条件 在使用排序后就不会进行算分了，根据排序设置的规则排列\\普通字段是根据字典序排序\\地理坐标是根据距离远近排序</li><li>highlight：高亮条件 高亮是对关键字高亮，因此搜索条件必须带有关键字，而不能是范围这样的查询。非搜索字段高亮，则需要添加一个属性：required_field_match=false</li><li>aggs：定义聚合 <ul><li>桶（Bucket）聚合：用来对文档做分组 <ul><li>term：按照文档字段值分组，例如按照品牌值分组、按照国家分组</li><li>Date Histogram：按照日期阶梯分组，例如一周为一组，或者一月为一组</li></ul></li><li>度量（Metric）聚合：用以计算一些值，比如：最大值Max、最小值Min、平均值Avg,Stats：同时求max、min、avg、sum等等</li><li>管道（pipeline）聚合：其它聚合的结果为基础做聚合.如：用桶聚合实现种类排序，然后使用度量聚合实现各个桶的最大值、最小值、平均值等</li></ul></li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;query&quot;: { //查询条件
    &quot;match&quot;: {
      &quot;name&quot;:&quot;如家&quot;
    }
  },
  &quot;from&quot;:0，// 分页开始的位置 分页条件
  &quot;size&quot;: 20，// 期望获取的文档总数
  &quot;sort&quot;: [ //当第一个条件相等时，再按照第二个条件排序，以此类推
    { &quot;price&quot;:&quot;asc&quot;}，// 普通排序
    &quot;_geo_distance&quot; : { // 距离排序
      &quot;location&quot; : &quot;31.040699,121.618075&quot;，
      &quot;order&quot; : &quot;asc&quot;,
      &quot;unit&quot; : &quot;km&quot;
    }
  ]
  &quot;highlight&quot;:{
    &quot;fields&quot;:{ // 高亮字段
      &quot;name&quot;: {
        &quot;pre_tags&quot;: &quot;&lt;em&gt;&quot;,用来标记高亮字段的前置标签
        &quot;post_tags&quot;: &quot;&lt;/em&gt;&quot;用来标记高亮字段的后置标签
      }
    }
  }
  &quot;aggs&quot;:{ //定义聚合 参加聚合的字段必须是keyword、日期、数值、布尔类型
    &quot;brandAgg&quot;:{ //聚合名字
      &quot;terms&quot;:{ // 聚合的类型，按照品牌值聚合，所以选择term
        &quot;field&quot;:&quot;brand&quot;，// 参与聚合的字段
        &quot;order&quot;:{
          &quot;doc_count&quot;: &quot;asc&quot; //.对聚合结果按照doc_count升序排列
        }
        &quot;size&quot;:20 // 聚合结果数量【设置多少就最多只显示多少】
      }
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="restapi" tabindex="-1"><a class="header-anchor" href="#restapi"><span>RestAPI</span></a></h1>`,12),g={href:"https://www.elastic.co/guide/en/elasticsearch/client/index.html",target:"_blank",rel:"noopener noreferrer"},_=n("<li>Java HighLevel Rest Client客户端。API操作elasticsearch的流程基本类似。核心是client.indices()方法来获取索引库的操作对象。</li><li>API索引库操作的基本步骤： <ul><li>初始化RestHighLevelClient</li><li>创建XxxIndexRequest。XXX是Create、Get、Delete</li><li>准备DSL（ Create时需要，其它是无参）</li><li>发送请求。调用RestHighLevelClient#indices().xxx()方法，xxx是create、exists、delete</li></ul></li><li>mapping映射分析 <ul><li>根据MySQL数据库表结构（建表语句），去写索引库结构JSON。表和索引库一一对应</li><li>注意：地理坐标、组合字段。索引库里的地理坐标是一个字段：坐标：维度,精度 。copy_to组合字段作用是供用户查询（输入关键字可以查询多个字段）</li><li>mapping映射要考虑的信息包括：字段名、字段数据类型、是否参与搜索、是否需要分词、分词的分词器(ik_max_word)</li></ul></li>",3),x=n(`<h1 id="springboot整合es客户端" tabindex="-1"><a class="header-anchor" href="#springboot整合es客户端"><span>springboot整合es客户端</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-data-elasticsearch&lt;/artifactId&gt;
&lt;/dependency&gt;

spring:
  elasticsearch:
    rest:
      password: elasticBanzhu
      username: elastic
      connection-timeout: 1s
      uris: 127.0.0.1:9200
      read-timeout: 30s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@Document(indexName = &quot;action&quot;, // 索引名
  shards = 1, // 默认索引分区数
  replicas = 0, // 每个分区的备份数
  refreshInterval = &quot;-1&quot; // 刷新间隔
)
@Data
public class ActionDO {
    CustomConversions customConversions;
    @Id
    private Integer id;

    @Field(analyzer = &quot;ik_max_word&quot;, type = FieldType.Text)
    private String title;

    @Field(analyzer = &quot;ik_smart&quot;, type = FieldType.Text)
    private String title2;
}

public interface ActionRepository extends ElasticsearchRepository&lt;ActionDO, Integer&gt; {}

@Service
public class ActionESServiceImpl implements ActionESService {

    @Autowired
    private ElasticsearchRestTemplate elasticsearchRestTemplate;
    @Resource
    private ActionRepository actionRepository;

    @Override
    public void saveAction(){
        ActionDO actionDO = new ActionDO();
        actionDO.setId(1);
        actionDO.setTitle(&quot;我是测试活动&quot;);
        elasticsearchRestTemplate.save(actionDO);
    }

    @Override
    public void updateAction(){
        ActionDO actionDO = new ActionDO();
        actionDO.setId(1);
        actionDO.setTitle(&quot;我是测试更新活动&quot;);
        actionRepository.save(actionDO);
    }

    @Override
    public void deleteActionById(){
        actionRepository.deleteById(1);
    }

    @Override
    public void selectById(){
        Iterable&lt;ActionDO&gt; actionDOS = actionRepository.findAllById(Arrays.asList(1, 4));
        actionDOS.forEach(System.out::println);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="es与mysql数据同步" tabindex="-1"><a class="header-anchor" href="#es与mysql数据同步"><span>ES与MySQL数据同步</span></a></h1><ul><li>同步调用:实现简单，粗暴、业务耦合度高</li><li>异步通知【常用】：低耦合，实现难度一般、依赖mq的可靠性</li><li>监听binlog：解耦合，开启binlog增加数据库负担、实现复杂度高。基于canal监听binlog变化，实时更新elasticsearch中的内容</li></ul><h1 id="es集群搭建" tabindex="-1"><a class="header-anchor" href="#es集群搭建"><span>ES集群搭建</span></a></h1><ul><li>创建ES集群：至少有4G的内存空间 <ul><li>创建docker-compose文件</li><li>es运行需要修改一些linux系统权限，修改/etc/sysctl.conf文件并添加vm.max_map_count=262144，执行sysctl -p生效</li><li>docker-compose up -d启动集群</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>version: &#39;2.2&#39;
services:
  es01:
    image: docker.elastic.co/elasticsearch/elasticsearch:7.12.1
    container_name: es01
    environment:
      - node.name=es01
      - cluster.name=es-docker-cluster
      - discovery.seed_hosts=es02,es03
      - cluster.initial_master_nodes=es01,es02,es03
      - bootstrap.memory_lock=true
      - &quot;ES_JAVA_OPTS=-Xms512m -Xmx512m&quot;
    ulimits:
      memlock:
        soft: -1
        hard: -1
    volumes:
      - data01:/usr/share/elasticsearch/data
    ports:
      - 9200:9200
    networks:
      - elastic
  es02:
    image: docker.elastic.co/elasticsearch/elasticsearch:7.12.1
    container_name: es02
    environment:
      - node.name=es02
      - cluster.name=es-docker-cluster
      - discovery.seed_hosts=es01,es03
      - cluster.initial_master_nodes=es01,es02,es03
      - bootstrap.memory_lock=true
      - &quot;ES_JAVA_OPTS=-Xms512m -Xmx512m&quot;
    ulimits:
      memlock:
        soft: -1
        hard: -1
    volumes:
      - data02:/usr/share/elasticsearch/data
    networks:
      - elastic
  es03:
    image: docker.elastic.co/elasticsearch/elasticsearch:7.12.1
    container_name: es03
    environment:
      - node.name=es03
      - cluster.name=es-docker-cluster
      - discovery.seed_hosts=es01,es02
      - cluster.initial_master_nodes=es01,es02,es03
      - bootstrap.memory_lock=true
      - &quot;ES_JAVA_OPTS=-Xms512m -Xmx512m&quot;
    ulimits:
      memlock:
        soft: -1
        hard: -1
    volumes:
      - data03:/usr/share/elasticsearch/data
    networks:
      - elastic

volumes:
  data01:
    driver: local
  data02:
    driver: local
  data03:
    driver: local

networks:
  elastic:
    driver: bridge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="集群状态监控" tabindex="-1"><a class="header-anchor" href="#集群状态监控"><span>集群状态监控</span></a></h1>`,9),y={href:"https://github.com/lmenezes/cerebro",target:"_blank",rel:"noopener noreferrer"},f=n('<h1 id="集群其他问题" tabindex="-1"><a class="header-anchor" href="#集群其他问题"><span>集群其他问题</span></a></h1><ul><li>master eligible节点的作用是什么？参与集群选主（主节点可以管理集群状态、管理分片信息、处理创建和删除索引库的请求）</li><li>data节点的作用是什么？数据的CRUD</li><li>coordinator节点的作用是什么？路由请求到其它节点。合并查询到的结果，返回给用户</li></ul><h1 id="集群职责划分" tabindex="-1"><a class="header-anchor" href="#集群职责划分"><span>集群职责划分</span></a></h1><ul><li>通过改变配置文件中的 true——&gt; false 来改变职责。如data数据职责节点就只保留data为true其他为false</li><li>注意：每个节点都是路由，这样可以保证不管哪个节点接收到请求可以分给其他人已经从其他人那接收信息。</li><li>默认情况下，集群中的任何一个节点都同时具备下述四种角色。<br> |节点类型|配置参数|默认值|节点职责|要求|<br> |:-😐:-😐:-😐:-😐:-😐<br> |master eligible|node.master|true|备选主节点:主节点可以管理和记录集群状态、决定。分片在哪个节点、处理创建和删除索引库的请求|对CPU要求高，但是内存要求低|<br> |data|node.data|true|数据节点:存储数据、搜索、聚合、CRUD|对CPU和内存要求都高|<br> |ingest|node.ingest|true|数据存储之前的预处理|<br> |coordinating|上面3个参数都为false则为coordinating节点|无|路由请求到其它节点。合并其它节点处理的结果，返回给用户|对网络带宽、CPU要求高|<br> image</li></ul><h1 id="脑裂问题" tabindex="-1"><a class="header-anchor" href="#脑裂问题"><span>脑裂问题</span></a></h1><ul><li>ES 7.0后默认配置了(eligible节点数量+1)/2来解决脑裂问题</li><li>脑裂是因为集群中的节点失联导致的。假设集群中有三个节点，主节点node1与node2和3失联，重新选举，node3成为主节点，node1自成集群，node2、3自成集群，网络恢复后，2个集群状态不一致</li><li>解决脑裂的方案是，要求选票超过(eligible节点数量 + 1)/ 2 才能当选为主，因此eligible节点数量最好是奇数。对应配置项是discovery.zen.minimum_master_nodes，在es7.0以后，已经成为默认配置，因此一般不会发生脑裂问题</li></ul><h1 id="集群分布式存储" tabindex="-1"><a class="header-anchor" href="#集群分布式存储"><span>集群分布式存储</span></a></h1><ul><li>当新增文档时，elasticsearch会通过hash算法来计算文档应该存储到哪个分片，保证数据均衡，shard = hash(_routing文档id) % number_of_shards分片数</li><li>算法与分片数量有关，因此索引库一旦创建，分片数量不能修改！</li></ul><h1 id="集群分布式查询原理" tabindex="-1"><a class="header-anchor" href="#集群分布式查询原理"><span>集群分布式查询原理：</span></a></h1><ul><li>elasticsearch的查询分成两个阶段： <ul><li>scatter phase：分散阶段，coordinating node会把请求分发到每一个分片</li><li>gather phase：聚集阶段，coordinating node汇总data node的搜索结果，并处理为最终结果集返回给用户</li></ul></li></ul><h1 id="集群故障转移" tabindex="-1"><a class="header-anchor" href="#集群故障转移"><span>集群故障转移</span></a></h1><ul><li>集群的master节点会监控集群中的节点状态，如果发现有节点宕机，会立即将宕机节点的分片数据迁移到其它节点，确保数据安全，这个叫做故障转移。</li><li>ES默认配置好了有集群故障转移</li></ul>',12);function k(S,E){const l=d("ExternalLinkIcon");return a(),u("div",null,[c,e("ul",null,[e("li",null,[e("a",v,[i("https://www.cnblogs.com/buchizicai/p/17093719.html"),s(l)])])]),o,e("ul",null,[e("li",null,[i("下载拼音分词器并安装 "),e("ul",null,[e("li",null,[i("在线安装: ./bin/elasticsearch-plugin install "),e("a",m,[i("https://github.com/medcl/elasticsearch-analysis-pinyin"),s(l)])]),b])]),q,h]),p,e("ul",null,[e("li",null,[i("ES官方提供了各种不同语言的客户端操作ES。本质就是组装DSL语句，通过http请求发送给ES。官方文档地址："),e("a",g,[i("https://www.elastic.co/guide/en/elasticsearch/client/index.html"),s(l)])]),_]),x,e("ul",null,[e("li",null,[i("kibana或者cerebro来监控es集群状态，官方网址："),e("a",y,[i("https://github.com/lmenezes/cerebro"),s(l)])])]),f])}const D=t(r,[["render",k],["__file","elasticsearch.html.vue"]]),O=JSON.parse('{"path":"/backend/searchengine/elasticsearch.html","title":"ElasticSearch","lang":"zh-CN","frontmatter":{"title":"ElasticSearch","date":"2023-01-01T00:00:00.000Z","tags":"ElasticSearch","categories":"后端","description":"ElasticSearch ElasticSearch介绍 注意： 在没有创建库的时候搜索，ES会创建一个库并自动创建该字段并且设置为String类型也就是text 什么是elasticsearch？一个开源的分布式搜索引擎，可以用来实现从海量数据存储、搜索、分析等功能。底层是基于lucene(Java语言的搜索引擎类库)来实现。 什么是elastic...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/searchengine/elasticsearch.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"ElasticSearch"}],["meta",{"property":"og:description","content":"ElasticSearch ElasticSearch介绍 注意： 在没有创建库的时候搜索，ES会创建一个库并自动创建该字段并且设置为String类型也就是text 什么是elasticsearch？一个开源的分布式搜索引擎，可以用来实现从海量数据存储、搜索、分析等功能。底层是基于lucene(Java语言的搜索引擎类库)来实现。 什么是elastic..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ElasticSearch\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"ElasticSearch介绍","slug":"elasticsearch介绍","link":"#elasticsearch介绍","children":[]},{"level":2,"title":"es参考文档","slug":"es参考文档","link":"#es参考文档","children":[]},{"level":2,"title":"正向索引和倒排索引","slug":"正向索引和倒排索引","link":"#正向索引和倒排索引","children":[]},{"level":2,"title":"ES数据库基本概念","slug":"es数据库基本概念","link":"#es数据库基本概念","children":[]},{"level":2,"title":"Mapping属性","slug":"mapping属性","link":"#mapping属性","children":[]},{"level":2,"title":"mysql与elasticsearch比较","slug":"mysql与elasticsearch比较","link":"#mysql与elasticsearch比较","children":[]},{"level":2,"title":"分词器","slug":"分词器","link":"#分词器","children":[]},{"level":2,"title":"docker部署单点es","slug":"docker部署单点es","link":"#docker部署单点es","children":[]}],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":18.68,"words":5604},"filePathRelative":"backend/searchengine/elasticsearch.md","localizedDate":"2023年1月1日","excerpt":"<!--more-->\\n<h1>ElasticSearch</h1>\\n<h2>ElasticSearch介绍</h2>\\n<ul>\\n<li>注意： 在没有创建库的时候搜索，ES会创建一个库并自动创建该字段并且设置为String类型也就是text</li>\\n<li>什么是elasticsearch？一个开源的分布式搜索引擎，可以用来实现从海量数据存储、搜索、分析等功能。底层是基于lucene(Java语言的搜索引擎类库)来实现。</li>\\n<li>什么是elastic stack（ELK）？以elasticsearch为核心的技术栈，包括beats、Logstash、kibana(可视化界面)、elasticsearch，被广泛应用在日志数据分析、实时监控等领域：</li>\\n<li>什么是Lucene？Apache的开源搜索引擎类库，提供了搜索引擎的核心API</li>\\n</ul>","autoDesc":true}');export{D as comp,O as data};
