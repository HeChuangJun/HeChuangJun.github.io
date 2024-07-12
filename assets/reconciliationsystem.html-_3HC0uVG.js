import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as n,o as t,c as s,b as e,d as a,e as d,a as c}from"./app-BPKJBNij.js";const r={},o=e("p",null,"对账系统设计",-1),u=e("h2",{id:"渠道数据处理模块",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#渠道数据处理模块"},[e("span",null,"渠道数据处理模块")])],-1),v=e("p",null,[e("strong",null,"负责渠道对账文件的下载，解析，以及数据落库")],-1),m=e("li",null,"手动在支付渠道网站下载对账文件（SFTP）",-1),D={href:"https://api.mch.weixin.qq.com/pay/downloadbill%EF%BC%8Cntnstqryx%E6%8B%9B%E8%A1%8C",target:"_blank",rel:"noopener noreferrer"},f=e("li",null,"对账文件格式:cv(支付宝对账),txt(微信的对账文件),有些渠道为 xml,xls。",-1),h=e("li",null,"第三方渠道对账文件里面字段数量以及字段名称也存在不同。",-1),p=e("li",null,[a("这一层每接入一个渠道需要专门根据这个渠道特性开发。这一层可以抽象化接口，对外暴露下载与解析接接口，每次接入渠道，实现该接口相应方法即可。"),e("br"),a(" 这一层开发难度不大，只要根据对账文件格式相应解析文件即可。一般需要提取对账文件里面信息如下:")],-1),b=c(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>商户号
商户订单号
渠道流水号
交易日期
交易金额
手续费
退款原订单号
退款金额
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>注意事项 <ul><li>1、同一渠道若申请了多个商户号。这种情况下，每个商户号若前一日都存在交易，第三方渠道会为每个商户号都会产生一份对账文件。所以这里系统设计时候需要考虑到多份对账文件处理的情况。</li><li>2、对账文件需要考虑重复下载的情况。一般情况下，渠道的对账文件一旦生成，就不会改变。但是第三方渠道也可能发生异常，导致我方收到对账文件数据不完整。这种情况下，需要有机制重新下载解析入库。</li><li>3、每个第三方渠道下载文件时间都不一样。</li></ul></li></ul><h2 id="数据处理模块" tabindex="-1"><a class="header-anchor" href="#数据处理模块"><span>数据处理模块</span></a></h2><ul><li>主要用来提取我方前一日所有支付成功的流水数据以及上一模块入库的前一日对账单的流水数据。为了减少数据库的压力，提取的数据只需要包括必要字段即可，无需将整行数数据信息都提取出来。一般来说只要需要提取交易时间，金额，交易订单号，渠道返回流水号</li><li>最好使用备库进行数据查询。因为这里我们需要提取前一日全量的支付成功的数据，数据量大的情况下，可能会拖慢主库，影响在线的支付交易。</li></ul><h2 id="数据核对模块" tabindex="-1"><a class="header-anchor" href="#数据核对模块"><span>数据核对模块</span></a></h2><ul><li>使用上一模块提取出来的数据，核对订单号与金额是否完全一致。核对模块伪代码如下</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//获取某一渠道本地支付数据
List&lt;LocalDataDT0&gt;localDatalist= getLocalPayData(&quot;支付渠道编号&quot;，&quot;账期”);
//获取某一渠道对账单数据
List&lt;channelDataDTo&gt; channelDataList= getchannelPayData(&quot;支付渠道编号&quot;，“账期”);
Map&lt;string, LocalDataDT0&gt; localDataMaplocalDataList.stream().collect(collectors.toMap(localData→ localData.getorderNo()+localData.getAmount()，00));
Map&lt;String,channelDataDT0&gt; channelDataMapchannelDataList.stream().collect(Collectors.toMap(channelData&gt; channelData.getOrderNo()+channelData.getAmount()，0o));
List&lt;LocalDataDTo&gt;localDiffDetails = new ArrayList();
//用本地账单数据的键值逐笔核对
LocalDataMap.forEach((key,localDataDT0)-&gt;{
  if(channelDataMap.containsKey(key)){
    channelDataMap.remove(key);
  }else {
    //渠道账单数据不包含本地数据键值
    localDiffDetails.add(localDataDTo)
  };
})
//若 channelDataMap 里面还有元素将其放入 channelDiffDataList
List&lt;channelDataDTo&gt; channelDiffDatalist = new ArrayList&gt;(channelDataMap.values());
//记录差异数据
recordDiffData(localDiffDetails,channelDiffDataList);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>这个过程可能产生三类差异数据 <ul><li>第一种情况为本端数据存在，对端数据不存在，我们称为本端多账</li><li>第二种情况为对端数据存在，本端数据不存在，我们称为对端多账</li><li>第三种情况为金额不一致。</li></ul></li></ul><h2 id="差异数据处理模块" tabindex="-1"><a class="header-anchor" href="#差异数据处理模块"><span>差异数据处理模块</span></a></h2><ul><li>上面三类差异数据中，金额不一致相当少见，这种情况需要人工判断。</li><li>本端多账的情况。 <ul><li>存在跨日情况，对账文件将缺少跨日这笔，但是我方T日数据却存在这笔，这就导致了核对过程中产生一笔本端多账差异数据。对于这类差异数据，我们可以选择将这笔数据挂账，等待T+1工作日对账。T+1日对账的时候，对账单会相应多出数据，这样在核对过程就会产生对端多账的差异数据。然后在 T+1日差异处理模块将前几日差异数据都提取出来，逐笔核对本端多账数据与对端多账数据。若核对一致，将两笔差异状态都更新成处理完成。最后若无剩余差异数据，当天账单平账。</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>int range =7;
//查询对账日期到 range 天所有的差异记录 包括local和非local
List&lt;DiffPayData&gt; allDiffDatas = queryDiffDatas(new Date(),range);
//本端多账数据
Map&lt;String, DiffPayData&gt; localDiffDatas = new HashMap();
//对端多账
Map&lt;String, DiffPayData&gt; remoteDiffDatas = new HashMap◇();
//根据类型将差异数据分为本端差异数据与对端差异数据
for(DiffPayData diffData :allDiffDatas){
  if(&quot;local&quot;.equalsIgnorecase(diffData.getType())){
    localDiffDatas.put(diffData.getOrderNo()+ diffData.getAmount(), diffData);
  }else {
    remoteDiffDatas.put(diffData.getOrderNo()+ diffData.getAmount(), diffData);
  }
}  
//核对上的差异数据
List&lt;DiffPayData&gt; checkSucessDatas = new Arraylist&lt;&gt;();核对失败的差异数据
List&lt;DiffPayData&gt; checkFailedDatas = new ArrayList&lt;&gt;();
//核对过程
localDiffDatas.forEach((key,diffPayData)-&gt; {
  //本端多账与对端多账键值相等
  if (remoteDiffDatas.containsKey(key)){
    checkSucessDatas.add(remoteDiffDatas.remove(key));
    checkSucessDatas.add(diffPayData);
  } else {
    checkFailedDatas.add(diffPayData);
  }

});
checkFailedDatas.addAll(remoteDiffDatas.values());
//将成功对平的差异账状态修改为处理成功
updateSuccessDiffData(checkSucessDatas):
// 最后判断是否存在未对平对账记
if(checkFailedDatas.size()&gt;0){
  System.out.println(&quot;不平账”);
}else {
  System.out.println(&quot;平账”);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>对端多账的产生情况可能可能有两种情况, <ul><li>第一种情况测试环境与生产环境共用一份第三方渠道参数，这就导致测试环境交易订单也会出现在对账单中。若是这种情况，我们确认测试环境存在这批数据之后，我们忽略这批差异数据即可。</li><li>第二种情况，本端交易订单存在，但是状态不是成功状态。这种情况下，需要调用第三方渠道提供的查询接口，查询订单最终状态。若查询成功，更新订单状态，然后将差异数据状态更改为处理成功。</li><li>最后我们再次重新对账，由于对端多账的数据会有对应的本端数据，将不会产生差异数据，这次对账完成且平账。</li></ul></li></ul>`,12);function g(y,_){const i=n("ExternalLinkIcon");return t(),s("div",null,[o,u,v,e("ul",null,[e("li",null,[a("第三方支付渠道对账文件下载方式分类 "),e("ul",null,[m,e("li",null,[a("定时调用下载对账文件接口（微信支付宝招行云直连）=>"),e("a",D,[a("https://api.mch.weixin.qq.com/pay/downloadbill，ntnstqryx招行"),d(i)])])])]),f,h,p]),b])}const L=l(r,[["render",g],["__file","reconciliationsystem.html.vue"]]),T=JSON.parse('{"path":"/interview/scenedesign/reconciliationsystem.html","title":"对账系统设计","lang":"zh-CN","frontmatter":{"title":"对账系统设计","date":"2023-01-01T00:00:00.000Z","tags":"面试","categories":"面试","description":"对账系统设计","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/interview/scenedesign/reconciliationsystem.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"对账系统设计"}],["meta",{"property":"og:description","content":"对账系统设计"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"对账系统设计\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"渠道数据处理模块","slug":"渠道数据处理模块","link":"#渠道数据处理模块","children":[]},{"level":2,"title":"数据处理模块","slug":"数据处理模块","link":"#数据处理模块","children":[]},{"level":2,"title":"数据核对模块","slug":"数据核对模块","link":"#数据核对模块","children":[]},{"level":2,"title":"差异数据处理模块","slug":"差异数据处理模块","link":"#差异数据处理模块","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":5.37,"words":1610},"filePathRelative":"interview/scenedesign/reconciliationsystem.md","localizedDate":"2023年1月1日","excerpt":"<p>对账系统设计</p>\\n","autoDesc":true}');export{L as comp,T as data};
