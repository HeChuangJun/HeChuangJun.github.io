import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as t,d as p,a as n}from"./app-Cw8r8IGg.js";const e={},o=n(`<details><summary>支付系统架构图</summary><figure><img src="https://b.bdstatic.com/comment/I4MgmLj55Sgosm2EdtLMDQa097388916a8a7c551d6ec134b9da132.png" alt="payprocess.png" tabindex="0"><figcaption>payprocess.png</figcaption></figure></details><h2 id="设计概要" tabindex="-1"><a class="header-anchor" href="#设计概要"><span>设计概要</span></a></h2><details><summary>代码用整数int、数据库用int/bigint表示分，分元转换</summary><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PaymentUtils</span> <span class="token punctuation">{</span>
     <span class="token comment">// 分转元（保留两位小数）</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">centsToYuan</span><span class="token punctuation">(</span><span class="token keyword">int</span> cents<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;%.2f&quot;</span><span class="token punctuation">,</span> cents <span class="token operator">/</span> <span class="token number">100.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
     <span class="token comment">// 元转分（四舍五入）</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">yuanToCents</span><span class="token punctuation">(</span><span class="token class-name">String</span> yuan<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BigDecimal</span> amount <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span>yuan<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> amount<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">setScale</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token class-name">RoundingMode</span><span class="token punctuation">.</span><span class="token constant">HALF_UP</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,3),c=n(`<details><summary>分摊金额时，处理好余数分配问题，确保总金额一致性。</summary><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">//将金额（分）平摊给N个人（AA）</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DivideMoney</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> totalAmountInCents <span class="token operator">=</span> <span class="token number">1000</span><span class="token punctuation">;</span> <span class="token comment">// 总金额（分）</span>
        <span class="token keyword">int</span> numberOfPeople <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>       <span class="token comment">// 人数</span>

        <span class="token comment">// 计算每个人分得的金额（向下取整）</span>
        <span class="token keyword">int</span> perPerson <span class="token operator">=</span> totalAmountInCents <span class="token operator">/</span> numberOfPeople<span class="token punctuation">;</span>
        <span class="token keyword">int</span> remainder <span class="token operator">=</span> totalAmountInCents <span class="token operator">%</span> numberOfPeople<span class="token punctuation">;</span> <span class="token comment">// 余数</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;每人分得金额（分）：&quot;</span> <span class="token operator">+</span> perPerson<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;剩余未分金额（分）：&quot;</span> <span class="token operator">+</span> remainder<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 如果需要更加精确分配余数，可以按规则给部分人多分 1 分</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> numberOfPeople<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> finalAmount <span class="token operator">=</span> perPerson <span class="token operator">+</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> remainder <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;用户 &quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; 分得金额（分）： &quot;</span> <span class="token operator">+</span> finalAmount<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details><summary>计算折扣</summary><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DiscountCalculation</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> originalAmount <span class="token operator">=</span> <span class="token number">1500</span><span class="token punctuation">;</span> <span class="token comment">// 原始金额（分）</span>
        <span class="token class-name">BigDecimal</span> discountRate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;0.85&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 折扣比例</span>
        <span class="token comment">// 计算折扣后的金额（四舍五入到整数分）</span>
        <span class="token class-name">BigDecimal</span> discountedAmount <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span>originalAmount<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>discountRate<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setScale</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token class-name">RoundingMode</span><span class="token punctuation">.</span><span class="token constant">HALF_UP</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;折扣后金额（分）：&quot;</span> <span class="token operator">+</span> discountedAmount<span class="token punctuation">.</span><span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>结果转换为整数时，采用适当的舍入规则。<br> RoundingMode.HALF_UP（四舍五入）：大部分金额场景推荐。如分元转换，计算折扣<br> RoundingMode.DOWN（向下取整）：用于确保总金额不超过预算，优惠分摊<br> RoundingMode.UP（向上取整）：用于避免金额不足的场景。AA收款</p><p>类似分布式事务本地事务（微信后台）+通知（下游服务器：业务后台）<br> 订单状态<br> 待支付：支付未开始或支付请求未成功。<br> 支付中：支付请求已发出，但未收到第三方支付接口的明确响应（如超时）。<br> 支付失败：支付明确失败。<br> 支付成功：支付已完成。<br> 已取消</p><p>下单时先插入业务含有状态的业务数据，然后插入状态为支付中的订单数据，并记录支付请求的关键信息（如支付流水号）。最后向支付平台发起下单流程，下单时提交额外参数最好是id<br> 处理支付平台的结果通知时，判断订单状态是已支付则跳过（保持幂等，避免不必要的锁），加锁，再判断订单状态是已支付则跳过（二次检查防止并发问题）。修改订单状态为已支付，最后根据id修改业务数据的状态（如报名活动下单时是delete=1，通知成功则变成delete=0），释放锁</p><p>收入、支出订单前缀不要一样</p><h2 id="发起下单网络调用超时、异常订单表会保存么-先发起下单再保存数据库还是相反" tabindex="-1"><a class="header-anchor" href="#发起下单网络调用超时、异常订单表会保存么-先发起下单再保存数据库还是相反"><span>发起下单网络调用超时、异常订单表会保存么？先发起下单再保存数据库还是相反？</span></a></h2><p>保证数据完整性：保证用户能看到订单记录，避免支付成功但订单丢失的情况。<br> 方便处理异常、实现幂等：保存订单时生成唯一的订单号，第三方接口调用超时或返回失败时根据订单号进行异步重试，后台定时查询支付状态。如果支付成功则更新订单状态为已支付；如果多次重试后仍未成功，则更新订单状态为支付失败，同时通知用户重新支付，避免重复扣款或记录混乱<br> 方便定位问题：根据订单号向第三方支付询问失败原因</p><h2 id="如何防止重复支付" tabindex="-1"><a class="header-anchor" href="#如何防止重复支付"><span>如何防止重复支付？</span></a></h2><p>订单号唯一：确保支付请求的幂等性，避免第三方支付平台重复处理。<br> 订单状态校验：每次支付请求前，校验订单状态是否为待支付，如果已支付或正在支付，拒绝新支付请求<br> 分布式锁：为每笔订单加分布式锁，确保同一时间只处理一个支付请求。<br> 数据库约束：在数据库中为订单号或支付流水号加唯一约束，防止订单状态被重复更新。<br> 异步回调校验：在处理第三方支付回调时，检查支付状态是否已更新，避免重复处理支付结果。</p><h2 id="调用第三方银行接口怎么保证不超过银行的qps" tabindex="-1"><a class="header-anchor" href="#调用第三方银行接口怎么保证不超过银行的qps"><span>调用第三方银行接口怎么保证不超过银行的qps？</span></a></h2><p>限流机制：使用令牌桶算法在本地或分布式环境中实现精确的 QPS 控制<br> 异步队列：通过消息队列将请求排队处理，后台任务以受控速率消费队列并调用银行接口。<br> 动态配置：实时监控银行方的 QPS 限制参数（如 X-RateLimit），动态调整本地限流阈值。<br> 熔断器保护：在请求量接近银行 QPS 限制时启用熔断器，主动限制请求，保护系统稳定性。<br> 监控与降级：实时监控请求量，接近限流阈值时触发报警，并在必要时降级非关键服务。</p><h2 id="支付接口为什么分为下单和结果通知2步" tabindex="-1"><a class="header-anchor" href="#支付接口为什么分为下单和结果通知2步"><span>支付接口为什么分为下单和结果通知2步？</span></a></h2><p>避免支付超时问题：支付通常涉及第三方平台（如银行）处理、等待客户支付输密码等，时间比较长，容易超时，拆开能提高成功率，提升用户体验<br> 保障支付结果的准确性：即使在支付完成时出现网络中断等情况，也不会丢失支付结果。如果支付接口只有一步（下单返回结果），支付平台可能无法立即确认支付状态（例如用户支付后等待银行系统处理）<br> 提高系统的可扩展性：下单接口：负责订单创建、支付请求生成，可以独立优化性能，扩展支付渠道，结果通知接口：负责确认支付结果，可以独立实现幂等性和重试机制。</p><h2 id="回调没收到怎么办-掉单-为什么要新建掉单表-不能直接使用支付订单表-查询未成功的订单吗-为什么采用轮询-类似本地消息方案-完成掉单处理" tabindex="-1"><a class="header-anchor" href="#回调没收到怎么办-掉单-为什么要新建掉单表-不能直接使用支付订单表-查询未成功的订单吗-为什么采用轮询-类似本地消息方案-完成掉单处理"><span>回调没收到怎么办/掉单？为什么要新建掉单表？不能直接使用支付订单表，查询未成功的订单吗？为什么采用轮询（类似本地消息方案）完成掉单处理？</span></a></h2><p>采用异步补偿方案<br> 定时轮询：调用支付下单后，如果支付通道端返回受理成功或者处理中，将这类订单插入掉单表。后台用线程池异步的方式定时批量查询掉单记录。调用支付通道支付查询接口。如果支付结果为扣款成功、明确失败、掉单记录查询达到最大次数，则删除掉单记录。最后，如果掉单查询依旧还是处理中，经过一定的延时后，重复发起掉单补偿，直到成功或者查询到达最大次数。最后通知人工介入</p><p>因为数据库查询效率问题，因为支付订单表每天都会新增大量记录。支付记录越多，批量范围查询速度会变慢。新建一张掉单表仅记录支付未成功的订单，数据量小，查询效率高。另外，掉单表里的记录会在支付结果查询成功、明确失败或者查询次数到达规定最大次数时删除。<br> 优点：简单易实施。<br> 缺点：<br> 轮询效率稍低<br> 每次查询数据库，已经被执行过记录会被重复扫描<br> 时效性不够好，误差取决于轮询间隔<br> 如果为了解决时效性问题，增加定时任务查询效率，1跟2问题更加明显<br><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw0f7dc5ca595a4a759dde68c133df25a1.png" alt="定时轮询方案.png"></p><p>延迟消息：往延迟队列发送掉单消息。补单程序接收掉单消息，然后触发支付掉单查询。如果支付结果为扣款成功、明确失败、掉单记录查询达到最大次数。补单程序将会告知延迟队列消费成功删除这条消息。其他状态将会告知消费失效，延迟队列将会在一定延时之后，再次发送掉单消息，然后重复发送延迟队列消息<br><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw9bf521af3f334a1a41ae83a90e8c05c9.png" alt="延迟消息方案.png"><br> 实现复杂，无需再查询全部订单，效率高、时效性较好</p><p>因为外部系统不方便接入才使用本地消息表</p><h2 id="在线扫码、离线码实现" tabindex="-1"><a class="header-anchor" href="#在线扫码、离线码实现"><span>在线扫码、离线码实现？</span></a></h2><p>点击付款时客户端调用后台申请付款码接口生成付款码，然后在数据库保存付款码与用户的关系，并且返回给客户端。客户端在有效期内展示该付款码完成支付，否则该二维码就将会过期。</p><p>相对安全，因为服务端生成码，可以控制幂等，没有客户端伪造的风险。<br> 调整付款码规则时只要调整服务端代码，客户端无需升级<br> 缺点：客户端必须联网</p><p>银行网盾，手机验证app(输入完密码还要输入动态口令)<br> 动态产生一次性口令(OTp, One-time Password)防止密码被盗用</p><p>客户端基于用户账户和动态参数（如时间戳、交易 Token）生成离线支付码，并通过数字签名防篡改<br> 商户设备扫描支付码并校验其合法性（如签名验证、时间戳校验），生成本地交易记录。<br> 商户设备将离线交易记录本地加密存储，等待网络恢复后批量上传到支付平台。<br> 支付平台校验支付码合法性和唯一性，完成扣款并更新交易状态。</p><p>调整付款码规则时需要升级客户端，服务端代码还要兼容新老算法<br> 安全性问题，通过获取手机Root权限或者越狱获取密钥，然后随意生成付款码<br> 数据碰撞问题，算法有概率才生一样的Hash值。导致扣错用户的钱<br> 从风控方面，超过一定额度强制拉用户的收银台确认，根据用户最近上报的地理位置和商家的地理位置，交易频次等各种风控因素做控制</p>`,25);function l(i,u){return a(),t("div",null,[o,p(" BigDecimal计算加减乘除 "),c])}const d=s(e,[["render",l],["__file","paysystem.html.vue"]]),m=JSON.parse('{"path":"/interview/scenedesign/paysystem.html","title":"支付系统设计","lang":"zh-CN","frontmatter":{"title":"支付系统设计","date":"2023-01-01T00:00:00.000Z","tags":"面试","categories":"面试","description":"支付系统架构图 payprocess.pngpayprocess.png 设计概要 代码用整数int、数据库用int/bigint表示分，分元转换 BigDecimal计算加减乘除 分摊金额时，处理好余数分配问题，确保总金额一致性。 计算折扣 结果转换为整数时，采用适当的舍入规则。 RoundingMode.HALF_UP（四舍五入）：大部分金额场景推...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/interview/scenedesign/paysystem.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"支付系统设计"}],["meta",{"property":"og:description","content":"支付系统架构图 payprocess.pngpayprocess.png 设计概要 代码用整数int、数据库用int/bigint表示分，分元转换 BigDecimal计算加减乘除 分摊金额时，处理好余数分配问题，确保总金额一致性。 计算折扣 结果转换为整数时，采用适当的舍入规则。 RoundingMode.HALF_UP（四舍五入）：大部分金额场景推..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://b.bdstatic.com/comment/I4MgmLj55Sgosm2EdtLMDQa097388916a8a7c551d6ec134b9da132.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"支付系统设计\\",\\"image\\":[\\"https://b.bdstatic.com/comment/I4MgmLj55Sgosm2EdtLMDQa097388916a8a7c551d6ec134b9da132.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw0f7dc5ca595a4a759dde68c133df25a1.png\\",\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMw9bf521af3f334a1a41ae83a90e8c05c9.png\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"设计概要","slug":"设计概要","link":"#设计概要","children":[]},{"level":2,"title":"发起下单网络调用超时、异常订单表会保存么？先发起下单再保存数据库还是相反？","slug":"发起下单网络调用超时、异常订单表会保存么-先发起下单再保存数据库还是相反","link":"#发起下单网络调用超时、异常订单表会保存么-先发起下单再保存数据库还是相反","children":[]},{"level":2,"title":"如何防止重复支付？","slug":"如何防止重复支付","link":"#如何防止重复支付","children":[]},{"level":2,"title":"调用第三方银行接口怎么保证不超过银行的qps？","slug":"调用第三方银行接口怎么保证不超过银行的qps","link":"#调用第三方银行接口怎么保证不超过银行的qps","children":[]},{"level":2,"title":"支付接口为什么分为下单和结果通知2步？","slug":"支付接口为什么分为下单和结果通知2步","link":"#支付接口为什么分为下单和结果通知2步","children":[]},{"level":2,"title":"回调没收到怎么办/掉单？为什么要新建掉单表？不能直接使用支付订单表，查询未成功的订单吗？为什么采用轮询（类似本地消息方案）完成掉单处理？","slug":"回调没收到怎么办-掉单-为什么要新建掉单表-不能直接使用支付订单表-查询未成功的订单吗-为什么采用轮询-类似本地消息方案-完成掉单处理","link":"#回调没收到怎么办-掉单-为什么要新建掉单表-不能直接使用支付订单表-查询未成功的订单吗-为什么采用轮询-类似本地消息方案-完成掉单处理","children":[]},{"level":2,"title":"在线扫码、离线码实现？","slug":"在线扫码、离线码实现","link":"#在线扫码、离线码实现","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":8.66,"words":2599},"filePathRelative":"interview/scenedesign/paysystem.md","localizedDate":"2023年1月1日","excerpt":"<!-- more -->\\n<details>\\n<summary>支付系统架构图</summary>\\n<figure><img src=\\"https://b.bdstatic.com/comment/I4MgmLj55Sgosm2EdtLMDQa097388916a8a7c551d6ec134b9da132.png\\" alt=\\"payprocess.png\\" tabindex=\\"0\\"><figcaption>payprocess.png</figcaption></figure>\\n</details>\\n<h2>设计概要</h2>\\n<details>\\n<summary>代码用整数int、数据库用int/bigint表示分，分元转换</summary>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">PaymentUtils</span> <span class=\\"token punctuation\\">{</span>\\n     <span class=\\"token comment\\">// 分转元（保留两位小数）</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token class-name\\">String</span> <span class=\\"token function\\">centsToYuan</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> cents<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">format</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"%.2f\\"</span><span class=\\"token punctuation\\">,</span> cents <span class=\\"token operator\\">/</span> <span class=\\"token number\\">100.0</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n     <span class=\\"token comment\\">// 元转分（四舍五入）</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">int</span> <span class=\\"token function\\">yuanToCents</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span> yuan<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token class-name\\">BigDecimal</span> amount <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">BigDecimal</span><span class=\\"token punctuation\\">(</span>yuan<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">return</span> amount<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">multiply</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">BigDecimal</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">100</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token punctuation\\">.</span><span class=\\"token function\\">setScale</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">RoundingMode</span><span class=\\"token punctuation\\">.</span><span class=\\"token constant\\">HALF_UP</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">intValue</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div></details>","autoDesc":true}');export{d as comp,m as data};
