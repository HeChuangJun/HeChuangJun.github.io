import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as a,a as i}from"./app-Cw8r8IGg.js";const n={},l=i(`<p>exception</p><ul><li><a href="#1-%E5%BC%82%E5%B8%B8">1. 异常</a></li><li><a href="#2-%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86%E5%BD%93%E4%BA%A7%E7%94%9F%E5%BC%82%E5%B8%B8%E6%97%B6%E5%BF%85%E9%A1%BB%E6%9C%89%E5%A4%84%E7%90%86%E6%96%B9%E5%BC%8F%E8%A6%81%E4%B9%88%E6%8D%95%E8%8E%B7%E8%A6%81%E4%B9%88%E5%A3%B0%E6%98%8E%E6%8A%9B%E5%87%BA">2. 异常处理：当产生异常时，必须有处理方式。要么捕获，要么声明抛出</a></li><li><a href="#3-%E8%87%AA%E5%AE%9A%E4%B9%89%E5%BC%82%E5%B8%B8">3. 自定义异常</a></li></ul><h1 id="_1-异常" tabindex="-1"><a class="header-anchor" href="#_1-异常"><span>1. 异常</span></a></h1><ul><li>Java异常是Java提供的一种识别及响应错误的一致性机制。</li><li>Java异常机制可以使程序中异常处理代码和正常业务代码分离，保证程序代码更加优雅，并提高程序健壮性</li><li>Java把异常信息封装成一个类。异常时会创建异常类对象并抛出异常信息(如异常位置、原因)</li><li>Exception 类及其子类是 Throwable 的一种形式，它用来表示java程序中可能会产生的异常，并要求对产生的异常进行合理的异常处理</li><li>异常处理的性能成本非常高；仅在异常情况下使用异常；在可恢复的异常情况下使用异常；</li></ul><h1 id="_2-异常处理-当产生异常时-必须有处理方式。要么捕获-要么声明抛出" tabindex="-1"><a class="header-anchor" href="#_2-异常处理-当产生异常时-必须有处理方式。要么捕获-要么声明抛出"><span>2. 异常处理：当产生异常时，必须有处理方式。要么捕获，要么声明抛出</span></a></h1><ul><li>在一个方法中如果发生异常，这个方法会创建一个异常对象，并转交给 JVM，该异常对象包含异常名称，异常描述以及异常发生时应用程序的状态。创建异常对象并转交给 JVM 的过程称为抛出异常。可能有一系列的方法调用，最终才进入抛出异常的方法，这一系列方法调用的有序列表叫做调用栈。JVM 会顺着调用栈去查找看是否有可以处理异常的代码，如果有，则调用异常处理代码。当 JVM 发现可以处理异常的代码时，会把发生的异常传递给它。如果 JVM 没有找到可以处理该异常的代码块，JVM 就会将该异常转交给默认的异常处理器（默认处理器为 JVM 的一部分），默认异常处理器打印出异常信息并终止应用程序。</li><li>抛出异常：throw new 异常类名(参数)：抛出异常告知调用者。可以抛出所有异常；throw抛出的异常，本身不捕获就要throws抛出</li><li>声明异常：方法 throws 异常类名1,异常类名2… {} 声明异常,交给调用者去处理。非检查异常（Error、RuntimeException 或它们的子类）不可使用 throws 关键字来声明要抛出的异常</li><li>捕获异常：Java中对异常有针对性的语句进行捕获，可以对出现的异常进行指定方式的处理 <ul><li>try catch finally：检测异常，并传递给catch处理，并在finally中进行资源释放</li><li>try catch：对代码进行异常检测，并对检测的异常传递给catch处理.对异常进行捕获处理</li><li>try 多个catch：对代码进行异常检测，并对检测的异常传递给catch处理，多个catch中的异常不能相同，子类异常要求在上面的catch处理,父类异常在下面的catch处理。有继承关系的异常会最先捕获</li><li>try finally：异常是没有捕获处理的，finally，只为关闭资源</li><li>finally：一定会执行的，即使在try{}catch{}中有return；finally的return决定该方法的结果</li></ul></li><li>异常的处理，指处理异常的一种可能性，即有了异常处理的代码，不一定会产生异常；如果没有产生异常,则代码正常执行,如果产生异常,则中断当前执行代码,执行异常处理代码 <ul><li>String getMessage()：返回此throwable的详细消息字符串</li><li>void printStackTrace()：将此throwable及其追踪输出至标准错误流</li><li>String toString()：返回此throwable的简短描述</li></ul></li></ul><table><thead><tr><th style="text-align:center;">父类</th><th style="text-align:center;">子类重写方法的细节（&quot;不能比父类多&quot;）</th></tr></thead><tbody><tr><td style="text-align:center;">如果父类方法声明异常</td><td style="text-align:center;">子类只能声明父类异常或者该异常的子类，或者不声明</td></tr><tr><td style="text-align:center;">当父类方法声明多个异常时</td><td style="text-align:center;">子类覆盖时只能声明多个异常的子集</td></tr><tr><td style="text-align:center;">当被覆盖的方法没有异常声明时</td><td style="text-align:center;">子类覆盖时无法声明异常的。此时子类产生该异常，只能捕获处理，不能声明抛出</td></tr><tr><td style="text-align:center;">当多异常处理时，捕获处理</td><td style="text-align:center;">前边的类不能是后边类的父类</td></tr><tr><td style="text-align:center;">接口中没有声明异常，而实现类覆盖方法时发生了异常</td><td style="text-align:center;">只能catch的捕获继续throw抛出，并将异常转换成RuntimeException子类抛出</td></tr></tbody></table><h1 id="_3-自定义异常" tabindex="-1"><a class="header-anchor" href="#_3-自定义异常"><span>3. 自定义异常</span></a></h1><ul><li>继承Exception,必须throws声明,一声明就告知调用者捕获,问题处理了调用者的程序会继续执行</li><li>继承RuntimeExcpetion,不需throws声明的，调用者不需要编写捕获代码的，因为调用根本就不知道有问题。一旦发生异常，调用者程序会停掉，并由jvm将信息显示到屏幕，让调用者修正代码</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Class 异常名 extends Exception{ 
	//编译时异常继承Exception，运行时异常继承RuntimeException。
	public 异常名(){
		super();
	}
	public 异常名(String s){ 
		super(s); 
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),r=[l];function c(o,d){return e(),a("div",null,r)}const p=t(n,[["render",c],["__file","exception.html.vue"]]),h=JSON.parse('{"path":"/backend/java/exception.html","title":"Exception","lang":"zh-CN","frontmatter":{"title":"Exception","date":"2023-01-01T00:00:00.000Z","tags":"Exception","categories":"后端","description":"exception 1. 异常 2. 异常处理：当产生异常时，必须有处理方式。要么捕获，要么声明抛出 3. 自定义异常 1. 异常 Java异常是Java提供的一种识别及响应错误的一致性机制。 Java异常机制可以使程序中异常处理代码和正常业务代码分离，保证程序代码更加优雅，并提高程序健壮性 Java把异常信息封装成一个类。异常时会创建异常类对象并抛出...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/java/exception.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"Exception"}],["meta",{"property":"og:description","content":"exception 1. 异常 2. 异常处理：当产生异常时，必须有处理方式。要么捕获，要么声明抛出 3. 自定义异常 1. 异常 Java异常是Java提供的一种识别及响应错误的一致性机制。 Java异常机制可以使程序中异常处理代码和正常业务代码分离，保证程序代码更加优雅，并提高程序健壮性 Java把异常信息封装成一个类。异常时会创建异常类对象并抛出..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Exception\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":4.44,"words":1333},"filePathRelative":"backend/java/exception.md","localizedDate":"2023年1月1日","excerpt":"<p>exception</p>\\n<!--more-->\\n<!-- TOC -->\\n<ul>\\n<li><a href=\\"#1-%E5%BC%82%E5%B8%B8\\">1. 异常</a></li>\\n<li><a href=\\"#2-%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86%E5%BD%93%E4%BA%A7%E7%94%9F%E5%BC%82%E5%B8%B8%E6%97%B6%E5%BF%85%E9%A1%BB%E6%9C%89%E5%A4%84%E7%90%86%E6%96%B9%E5%BC%8F%E8%A6%81%E4%B9%88%E6%8D%95%E8%8E%B7%E8%A6%81%E4%B9%88%E5%A3%B0%E6%98%8E%E6%8A%9B%E5%87%BA\\">2. 异常处理：当产生异常时，必须有处理方式。要么捕获，要么声明抛出</a></li>\\n<li><a href=\\"#3-%E8%87%AA%E5%AE%9A%E4%B9%89%E5%BC%82%E5%B8%B8\\">3. 自定义异常</a></li>\\n</ul>","autoDesc":true}');export{p as comp,h as data};
