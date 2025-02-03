import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as l,a}from"./app-Cw8r8IGg.js";const n={},t=a(`<h1 id="_1-为什么要分库-为什么要分表" tabindex="-1"><a class="header-anchor" href="#_1-为什么要分库-为什么要分表"><span>1. 为什么要分库？为什么要分表？</span></a></h1><ul><li>业务量剧增，磁盘容量不足，并发连接数不足，所以要分库</li><li>&lt;&lt;阿里开发手册&gt;&gt;单表行数超过500万行或者单表容量超过2GB。存储和查询的性能就会遇到瓶颈了</li></ul><h1 id="_2-什么是分库分表" tabindex="-1"><a class="header-anchor" href="#_2-什么是分库分表"><span>2. 什么是分库分表？</span></a></h1><ul><li>数据分片，指按照某个维度将存放在单一数据库中的数据分散地存放至多个数据库或表中以达到提升性能瓶颈以及可用性的效果。数据分片的有效手段是对关系型数据库进行分库和分表</li></ul><h1 id="_3-如何选择分表键" tabindex="-1"><a class="header-anchor" href="#_3-如何选择分表键"><span>3. 如何选择分表键？</span></a></h1><ul><li>需要先找到业务的主题。比如你的数据库表是一张企业客户信息表，就可以考虑用了客户号做为分表键。</li><li>信息表，使用 id 进行分片。例如说，文章、商品信息等等。</li><li>业务表，使用 user_id 进行分片。例如说，订单表、支付表等等。</li><li>日志表，使用 create_time 进行分片。例如说，访问日志、登陆日志等等。</li></ul><h1 id="_4-非分表键如何查询" tabindex="-1"><a class="header-anchor" href="#_4-非分表键如何查询"><span>4. 非分表键如何查询？</span></a></h1><ul><li>假设一张用户表，根据userId做分表键，来分库分表。但是用户登录时，需要根据用户手机号来登陆。这时候，就需要通过手机号查询用户信息。而手机号是非分表键。</li><li>非分表键查询，一般有这几种方案： <ul><li>将用户信息冗余同步到ES，同步发送到ES，然后通过ES来查询（推荐）</li><li>基因法：比如非分表键可以解析出分表键出来，比如常见的，订单号生成时，可以包含客户号进去，通过订单号查询，就可以解析出客户号。但是这个场景除外，手机号似乎不适合冗余userId。</li><li>映射关系：创建映射表，只有分表键、非分表键两列字段。使用非分表键查询时，先从映射表获得非分表键对应的分表键，然后再使用非分表键+分表键去查询对应的表。映射表可以改成缓存到Redis等缓存中。当然，需要考虑如果 Redis 持久化的情况。将映射表缓存到内存中，减少一次到映射表的查询。</li></ul></li></ul><h1 id="_5-分表策略如何选择-水平分表有哪几种路由方式" tabindex="-1"><a class="header-anchor" href="#_5-分表策略如何选择-水平分表有哪几种路由方式"><span>5. 分表策略如何选择？水平分表有哪几种路由方式？</span></a></h1><ul><li><p>路由：数据应该分到哪一张表。</p></li><li><p>根据范围：选取有序的数据列（例如，主键id、时间戳等）作为路由的条件，不同分段分散到不同的数据库表中。支付系统只能查一年范围内的支付记录可能就是按照时间进行了分表</p><ul><li>范围路由设计的复杂点主要体现在分段大小的选取上，分段太小会导致切分后子表数量过多，增加维护复杂度；分段太大可能会导致单表依然存在性能问题，一般建议分段大小在100万至2000万之间，具体需要根据业务选取合适的分段大小。</li><li>优点是有利于扩容。只需要增加新的表就可以了，原有的数据不需要动。</li><li>缺点分布不均匀和热点问题。假如按照1000万来进行分表，有可能某个分段实际存储的数据量只有1000条，而另外一个分段实际存储的数据量有900万条。最近一个月的订单都在300万~600万之间，平时用户一般都查最近一个月的订单比较多，请求都打到同一张表</li></ul></li><li><p>根据Hash取模：选取某个列（或者某几个列组合也可以）的值进行Hash运算，然后根据Hash结果取余分散到不同的数据库表中。同样以订单id为例，假如我们一开始就规划了4个数据库表，路由算法可以简单地用id%4的值来表示数据所属的数据库表编号，id为12的订单放到编号为50的子表中，id为13的订单放到编号为61的字表中。</p><ul><li>Hash路由设计的复杂点主要体现在初始表数量的选取上，表数量太多维护比较麻烦，表数量太少又可能导致单表性能存在问题</li><li>优点：表分布比较均匀，不会存在明显的热点问题。可以平均分配每个库的数据量和请求压力。</li><li>缺点：前期规划不好，需要扩容二次分表，表的数量需要增加，所以hash值需要重新计算，这时候需要迁移数据了。比如我们开始分了10张表，之后业务扩展需要，增加到20张表。那问题就来了，之前根据orderId取模10后的数据分散在了各个表中，现在需要重新对所有数据重新取模20来分配数据。</li></ul></li><li><p>一致性Hash</p><ul><li>如果用hash方式分表，为了解决这个扩容迁移问题，可以使用一致性hash思想来解决。</li><li>一致性哈希：在移除或者添加一个服务器时，能够尽可能小地改变已存在的服务请求与处理请求服务器之间的映射关系。一致性哈希解决了简单哈希算法在分布式哈希表存在的动态伸缩等问题</li><li>首先，选择一个足够大的Hash空间（一般是 0 ~ 2^32）构成一个哈希环。</li><li>然后，对于缓存集群内的每个存储服务器节点计算 Hash 值，可以用服务器的 IP 或 主机名计算得到哈希值，计算得到的哈希值就是服务节点在 Hash 环上的位置。</li><li>最后，对每个需要存储的数据 key 同样也计算一次哈希值，计算之后的哈希也映射到环上，数据存储的位置是沿顺时针的方向找到的环上的第一个节点。</li><li>扩容服务器时只需替移动重复的hash对应的资源</li><li>可以使用Guava // bucket 的范围在 0 ~ buckets 之间 int bucket = Hashing.consistentHash(id, buckets)</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class Main {
    //真实节点
    private static String[] serverIpArray = new String[]{&quot;192.168.1.100&quot;, &quot;47.100.61.70&quot;, &quot;172.87.2.10&quot;, &quot;1.1.1.1&quot;, &quot;34.125.90.32&quot;};
    //虚拟节点
    private static TreeMap&lt;Integer, String&gt; virtualNodeMap;
 
    static {
        virtualNodeMap = new TreeMap&lt;&gt;();
        //默认为每个真实节点生成3个虚拟节点
        for (String realIp : serverIpArray) {
            for (int i = 0; i &lt; 3; i++) {
                //这边加上随机数,只是为了使得虚拟节点的hash值更加分散
                //但是在实际情况中，虚拟节点的hash值需要固定
                String virtualIp = new Random().nextInt(10000) + &quot;#&quot; + realIp;
                virtualNodeMap.put(getHash(virtualIp), realIp);
            }
        }
    }
 
    //获取ip的哈希值,可以有多种算法实现,这里只用hashCode()演示
    //当然也有其他的实现,避免ip相近,hash相近的情况
    private static int getHash(String ip) {
        int hashCode = Math.abs(ip.hashCode());
        System.out.println(ip + &quot;:&quot; + hashCode);
        return hashCode;
    }
 
    //由客户端获取最近的虚拟节点,最后返回虚拟节点对应的真实节点
    private static String getRealServerIp(String client) {
        int clientHash = getHash(client);
        Integer higherKey = virtualNodeMap.higherKey(clientHash);
        if (higherKey == null) {
            //返回hash环中的第一个虚拟ip
            return virtualNodeMap.get(virtualNodeMap.firstKey());
        }
        //返回比客户端的哈希值稍微大一点的虚拟ip
        return virtualNodeMap.get(higherKey);
    }
 
    public static void main(String[] args) {
        String[] clientIpArray = new String[]{&quot;小明家的电脑&quot;, &quot;小红的平板&quot;, &quot;小华的手机&quot;};
        for (String client : clientIpArray) {
            String realIp = getRealServerIp(client);
            System.out.println(client + &quot;连接到了&quot; + realIp);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_6-分库分表带来的问题" tabindex="-1"><a class="header-anchor" href="#_6-分库分表带来的问题"><span>6. 分库分表带来的问题</span></a></h1><ul><li>从分库的角度 <ul><li>跨库事务问题：需要分布式事务来解决</li><li>跨库无法使用JOIN问题： <ul><li>业务代码中进行关联，先把一个表的数据查出来，然后通过得到的结果再去查另一张表，然后利用代码来关联得到最终的结果</li><li>适当的冗余一些字段。比如以前的表就存储一个关联ID，但是业务时常要求返回对应的Name或者其他字段。这时候就可以把这些字段冗余到当前表中，来去除需要关联的操作。</li><li>数据异构，通过binlog同步等方式，把需要跨库join的数据异构到ES等存储结构中，通过ES进行查询。</li></ul></li></ul></li><li>从分表的角度 <ul><li>跨节点的count,orderby,groupby以及聚合函数问题:只能由业务代码来实现或者用中间件将各表中的数据汇总、排序、分页然后返回。</li><li>数据迁移，容量规划，扩容等问题:数据的迁移，容量如何规划，未来是否可能再次需要扩容等</li><li>ID问题:数据库表被切分后，不能再依赖数据库自身的主键生成机制，所以需要一些手段来保证全局主键唯一。 <ul><li>自增但设置不同自增步长。比如现在有三张表，步长设置为3，三张表ID初始值分别是1、2、3。这样第一张表的ID增长是1、4、7。第二张表是2、5、8。第三张表是3、6、9，这样就不会重复了</li><li>UUID，简单，但是不连续的主键插入会导致严重的页分裂，性能差</li><li>分布式ID，Twitter开源的sonwflake雪花算法</li></ul></li></ul></li></ul><h1 id="_7-如果查询条件不带分片键-怎么办" tabindex="-1"><a class="header-anchor" href="#_7-如果查询条件不带分片键-怎么办"><span>7. 如果查询条件不带分片键，怎么办？</span></a></h1><ul><li>当查询不带分片键时，则中间件一般会扫描所有库表，然后聚合结果，然后进行返回。</li></ul><h1 id="_8-如何避免热点问题数据倾斜-热点数据" tabindex="-1"><a class="header-anchor" href="#_8-如何避免热点问题数据倾斜-热点数据"><span>8. 如何避免热点问题数据倾斜（热点数据）</span></a></h1><ul><li>如果我们根据时间范围分片，某电商公司11月搞营销活动，那么大部分的数据都落在11月份的表里面了，其他分片表可能很少被查询，即数据倾斜了，有热点数据问题了。</li><li>可以使用range范围+ hash哈希取模结合的分表策略，在拆分库的时候，可以先用range范围方案，比如订单id在0~4000万的区间，划分为订单库1;id在4000万~8000万的数据，划分到订单库2,将来要扩容时，id在8000万~1.2亿的数据，划分到订单库3。然后订单库内，再用hash取模的策略，把不同订单划分到不同的表。</li></ul><h1 id="_9-分库跨节点join关联问题" tabindex="-1"><a class="header-anchor" href="#_9-分库跨节点join关联问题"><span>9. 分库跨节点Join关联问题</span></a></h1><ul><li>字段冗余：把需要关联的字段放入主表中，避免关联操作；比如订单表保存了卖家ID（sellerId），你把卖家名字sellerName也保存到订单表，这就不用去关联卖家表了。这是一种空间换时间的思想。</li><li>全局表：比如系统中所有模块都可能会依赖到的一些基础表（即全局表），在每个数据库中均保存一份。</li><li>数据抽象同步：比如A库中的a表和B库中的b表有关联，可以定时将指定的表做同步，将数据汇合聚集，生成新的表。一般可以借助ETL工具。</li><li>应用层代码组装：分开多次查询，调用不同模块服务，获取到数据后，代码层进行字段计算拼装。</li></ul><h1 id="_10-跨节点的count-order-by-group-by等聚合函数问题" tabindex="-1"><a class="header-anchor" href="#_10-跨节点的count-order-by-group-by等聚合函数问题"><span>10. 跨节点的count,order by,group by等聚合函数问题</span></a></h1><ul><li>一般都需要基于全部数据集合进行计算。可以分别在各个节点上得到结果后，再在应用程序端进行合并。</li></ul><h1 id="_11-分库分表后的分页问题" tabindex="-1"><a class="header-anchor" href="#_11-分库分表后的分页问题"><span>11. 分库分表后的分页问题</span></a></h1><ul><li>全局视野法：在各个数据库节点查到对应结果后，在代码端汇聚再分页。这样优点是业务无损，精准返回所需数据；缺点则是会返回过多数据，增大网络传输比如分库分表前，你是根据创建时间排序，然后获取第2页数据。如果你是分了两个库，那你就可以每个库都根据时间排序，然后都返回2页数据，然后把两个数据库查询回来的数据汇总，再根据创建时间进行内存排序，最后再取第2页的数据。</li><li>业务折衷法-禁止跳页查询：不允许跳页查询了只有上一页和下一页，。查询第一页时，是跟全局视野法一样的。但是下一页时，需要把当前最大的创建时间传过来，然后每个节点，都查询大于创建时间的一页数据，接着汇总，内存排序返回</li></ul><h1 id="_12-分库分表实现方式" tabindex="-1"><a class="header-anchor" href="#_12-分库分表实现方式"><span>12. 分库分表实现方式：</span></a></h1><ul><li>Client 模式</li><li>Proxy 模式</li></ul><h1 id="_13-分库分表选择哪种中间件-如何选择" tabindex="-1"><a class="header-anchor" href="#_13-分库分表选择哪种中间件-如何选择"><span>13. 分库分表选择哪种中间件？如何选择</span></a></h1><ul><li><strong>Sharding-JDBC</strong> 当当开源 jdbc层面操作 client 层方案</li><li>cobar 阿里 Proxy方式 必须将拆分后的表分别放入不同的库实现分布式</li><li><strong>Mycat</strong> 国内开源 Proxy 方式</li><li>Atlas 360 Proxy方式 不能实现分布式分表 所有表都在同一个库</li><li>TDDL（淘宝）阿里 Client方式 功能强大 过于复杂部分开源</li><li>vitess 谷歌 集群基于Zookeeper管理，通过RPC方式进行数据处理，可支撑高流量</li><li>Sharding Sphere可能是目前最好的开源的分库分表解决方案，目前已经进入 Apache 孵化，提供三种模式 <ul><li>Sharding-JDBC</li><li>Sharding-Proxy</li><li>Sharding-Sidecar 计划开发中。</li></ul></li><li>Sharding Sphere ，这个可以满足我们的诉求。Sharding-JDBC 方案，这种 Client 层方案的优点在于不用部署，运维成本低，不需要代理层的二次转发请求，性能很高，但是如果遇到升级啥的需要各个系统都重新升级版本再发布，各个系统都需要耦合 sharding-jdbc 的依赖。例如阿里、美团内部，更多使用的是 Client 模式。</li><li>Sharding Sphere 的 Sharding-Proxy 方案，这种 Proxy 层方案，可以解决我们平时查询数据库的需求。我们只需要连接一个 Sharding-Proxy ，就可以查询分库分表中的数据。另外，如果我们有跨语言的需求，例如 PHP、GO 等，也可以使用它。</li></ul><h1 id="_14-如何迁移到分库分表" tabindex="-1"><a class="header-anchor" href="#_14-如何迁移到分库分表"><span>14. 如何迁移到分库分表？</span></a></h1><ul><li>1、停止部署法。凌晨停机，写迁移程序读旧数据库数据，通过中间件写入到新分库分表中，结束后校验迁移前后一致性，没问题就迁移业务到新库</li><li>2、双写部署法，基于业务层。 <ul><li>根据主键或者创建时间大小将表test数据区分为历史数据和增量数据</li><li>将与test表有关的写业务sql写入到消息队列中</li><li>系统上线，写迁移程序(1.查出最大id2.每次抓取id&gt;? adn id &lt;?+step步长的数据，写入到新库中&gt;)将test表历史数据迁移到新数据库中，历史数据迁移完成后再迁移消息队列里面的数据</li><li>将迁移程序下线，写一段订阅程序订阅消息队列中的数据。订阅程序将订阅到到数据，通过中间件写入新库</li><li>新老库一致性验证，去除代码中的双写代码，将涉及到 test_tb 表的读写操作，指向新库。</li></ul></li><li>3、双写部署法，基于 binlog 。 <ul><li>根据主键或者创建时间大小将表test数据区分为历史数据和增量数据</li><li>打开binlog日志，系统正常上线。写迁移程序将test表历史数据迁移到新数据库中，历史数据迁移完成后再迁移增量数据</li><li>写一个订阅程序，订阅binlog(mysql中有canal 。至于oracle中，大家就随缘自己写吧)。然后将订阅到到数据通过中间件，写入新库。</li><li>检验一致性，没问题就切库</li></ul></li><li>怎么验数据一致性 <ul><li>先验数量是否一致，因为验数量比较快。</li><li>验关键性的几个字段是否一致。</li><li>一次取50条(不一定50条，具体自己定，我只是举例),然后像拼字符串一样，拼在一起。用md5进行加密，得到一串数值。新库一样如法炮制，也得到一串数值，比较两串数值是否一致。如果一致，继续比较下50条数据。如果发现不一致，用二分法确定不一致的数据在0-25条，还是26条-50条。以此类推，找出不一致的数据，进行记录即可。</li></ul></li></ul><h1 id="_15-如何评估分库数量" tabindex="-1"><a class="header-anchor" href="#_15-如何评估分库数量"><span>15. 如何评估分库数量</span></a></h1><ul><li>MySQL一般单库超过5千万记录压力就非常大了。如果分库数量少，达不到分散存储和减轻DB性能压力的目的；如果分库的数量多，对于跨多个库的访问，应用程序需要访问多个库。建议分4~10个库</li></ul><h1 id="_16-垂直分库、水平分库、垂直分表、水平分表的区别-怎么分库分表-√" tabindex="-1"><a class="header-anchor" href="#_16-垂直分库、水平分库、垂直分表、水平分表的区别-怎么分库分表-√"><span>16. 垂直分库、水平分库、垂直分表、水平分表的区别？怎么分库分表？√</span></a></h1><ul><li>水平分库：以字段为依据，按照一定策略（hash、range等），将一个库中的数据拆分到多个库中。每个库的结构都一样，数据不一样，没有交集 id 1-1000</li><li>水平分表：以字段为依据，按照一定策略（hash、range等），将一个表中的数据拆分到多个表中。每个表的结构都一样，数据不一样，没有交集 id 1-1000</li><li>垂直分库：以表为依据，按照业务归属不同，将不同的表拆分到不同的库中。每个库的结构都不一样，数据也不一样，没有交集。按照用户、商品、订单分到不同的库中。</li><li>垂直分表：以字段为依据，按照字段的活跃性，将表中字段拆到不同的表（主表和扩展表）中。每个表的结构不一样。数据也不一样，一般来说，每个表的字段至少有一列交集，一般是主键，用于关联数据</li></ul><h1 id="_18-不停机扩容怎么实现" tabindex="-1"><a class="header-anchor" href="#_18-不停机扩容怎么实现"><span>18. 不停机扩容怎么实现？</span></a></h1><ul><li><p>在线双写，查询走老库</p><ul><li>建立好新的库表结构，数据写入久库的同时，也写入拆分的新库</li><li>数据迁移，使用数据迁移程序，将旧库中的历史数据迁移到新库</li><li>使用定时任务，新旧库的数据对比，把差异补齐<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/539f395d31202ddb73744.png" alt="databaseexpand1.jpg"></li></ul></li><li><p>在线双写，查询走新库</p><ul><li>完成了历史数据的同步和校验</li><li>把对数据的读切换到新库<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/da218b19c04ecca511246.png" alt="databaseexpand2.jpg"></li></ul></li><li><p>旧库下线</p><ul><li>旧库不再写入新的数据</li><li>经过一段时间，确定旧库没有请求之后，就可以下线老库<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/a9383293a12f5db0fe72b.png" alt="databaseexpand3.jpg"></li></ul></li></ul><h1 id="_19-如何解决分布式事务" tabindex="-1"><a class="header-anchor" href="#_19-如何解决分布式事务"><span>19. 如何解决分布式事务？</span></a></h1><ul><li>数据在分库分表时，需要保证一个逻辑中，能够形成本地事务。举个例子，创建订单时，我们会插入订单表和订单明细表，那么：如果我们基于这两个表的 id 进行分库分表，将会导致插入的记录被分到不同的库表中，因为创建下单可以购买 n 个商品，那么就会有 1 条订单记录和 n 条 订单明细记录。而这 n 条订单明细记录无法和 1 条订单记录分到一个库表中。如果我们基于这两个表的 user_id 进行分库分表，那么插入的记录被分到相同的库表中。这也是为什么业务表一般使用 user_id 进行分库分表的原因之一。</li><li>为什么一定要形成本地事务？在有了本地事务的基础上，通过使用分布式事务的解决方案，协调多个本地事务，形成最终一致性。另外，😈 本地事务在这个过程中，能够保证万一执行失败，再重试时，不会产生脏数据。</li></ul>`,37),s=[t];function r(d,h){return e(),l("div",null,s)}const p=i(n,[["render",r],["__file","databasesharding.html.vue"]]),o=JSON.parse('{"path":"/interview/databasesharding.html","title":"分库分表","lang":"zh-CN","frontmatter":{"title":"分库分表","date":"2023-01-01T00:00:00.000Z","tags":"面试","categories":"面试","description":"1. 为什么要分库？为什么要分表？ 业务量剧增，磁盘容量不足，并发连接数不足，所以要分库 <<阿里开发手册>>单表行数超过500万行或者单表容量超过2GB。存储和查询的性能就会遇到瓶颈了 2. 什么是分库分表？ 数据分片，指按照某个维度将存放在单一数据库中的数据分散地存放至多个数据库或表中以达到提升性能瓶颈以及可用性的效果。数据分片的有效手段是对关系型...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/interview/databasesharding.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"分库分表"}],["meta",{"property":"og:description","content":"1. 为什么要分库？为什么要分表？ 业务量剧增，磁盘容量不足，并发连接数不足，所以要分库 <<阿里开发手册>>单表行数超过500万行或者单表容量超过2GB。存储和查询的性能就会遇到瓶颈了 2. 什么是分库分表？ 数据分片，指按照某个维度将存放在单一数据库中的数据分散地存放至多个数据库或表中以达到提升性能瓶颈以及可用性的效果。数据分片的有效手段是对关系型..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/539f395d31202ddb73744.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分库分表\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/539f395d31202ddb73744.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/da218b19c04ecca511246.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/a9383293a12f5db0fe72b.png\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":16.53,"words":4958},"filePathRelative":"interview/databasesharding.md","localizedDate":"2023年1月1日","excerpt":"<!-- more -->\\n<h1>1. 为什么要分库？为什么要分表？</h1>\\n<ul>\\n<li>业务量剧增，磁盘容量不足，并发连接数不足，所以要分库</li>\\n<li>&lt;&lt;阿里开发手册&gt;&gt;单表行数超过500万行或者单表容量超过2GB。存储和查询的性能就会遇到瓶颈了</li>\\n</ul>\\n<h1>2. 什么是分库分表？</h1>\\n<ul>\\n<li>数据分片，指按照某个维度将存放在单一数据库中的数据分散地存放至多个数据库或表中以达到提升性能瓶颈以及可用性的效果。数据分片的有效手段是对关系型数据库进行分库和分表</li>\\n</ul>\\n<h1>3. 如何选择分表键？</h1>","autoDesc":true}');export{p as comp,o as data};
