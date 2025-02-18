import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as l,a as n}from"./app-Cw8r8IGg.js";const a={},s=n(`<p>多线程</p><ul><li><a href="#1-cas%E5%BA%95%E5%B1%82">1. cas底层</a></li><li><a href="#2-%E5%8E%9F%E5%AD%90%E6%93%8D%E4%BD%9C%E7%B1%BB">2. 原子操作类</a></li><li><a href="#3-semaphore%E4%BF%A1%E5%8F%B7%E9%87%8F-%E5%85%81%E8%AE%B8%E5%A4%9A%E4%B8%AA%E7%BA%BF%E7%A8%8B%E5%90%8C%E6%97%B6%E8%AE%BF%E9%97%AE">3. Semaphore(信号量)-允许多个线程同时访问</a><ul><li><a href="#18-%E4%BB%80%E4%B9%88%E6%98%AF%E7%BA%BF%E7%A8%8B%E9%A5%A5%E9%A5%BF%E5%AF%BC%E8%87%B4%E5%8E%9F%E5%9B%A0">1.8. 什么是线程饥饿？导致原因？</a></li><li><a href="#17-java%E4%B8%AD%E7%94%A8%E5%88%B0%E7%9A%84%E7%BA%BF%E7%A8%8B%E8%B0%83%E5%BA%A6%E7%AE%97%E6%B3%95%E6%98%AF%E4%BB%80%E4%B9%88">1.7. Java中用到的线程调度算法是什么？</a></li><li><a href="#15-%E7%A8%8B%E5%BA%8F%E8%BF%90%E8%A1%8C%E5%8E%9F%E7%90%86">1.5. 程序运行原理</a></li><li><a href="#16-%E4%BB%80%E4%B9%88%E6%98%AF%E5%A4%9A%E7%BA%BF%E7%A8%8B%E4%B8%8A%E4%B8%8B%E6%96%87%E5%88%87%E6%8D%A2%E5%A6%82%E4%BD%95%E5%87%8F%E5%B0%91%E6%88%96%E8%80%85%E9%81%BF%E5%85%8D">1.6. 什么是多线程上下文切换？如何减少或者避免？</a></li><li><a href="#111-%E7%BA%BF%E7%A8%8B%E9%80%9A%E4%BF%A1%E7%BA%BF%E7%A8%8B%E5%90%8C%E6%AD%A5%E7%BA%BF%E7%A8%8B%E4%BA%92%E6%96%A5%E4%B8%89%E8%80%85%E5%85%B3%E7%B3%BB">1.11. 线程通信、线程同步、线程互斥三者关系？</a></li><li><a href="#113-%E5%A6%82%E4%BD%95%E5%9C%A8%E4%B8%A4%E4%B8%AA%E7%BA%BF%E7%A8%8B%E9%97%B4%E5%85%B1%E4%BA%AB%E6%95%B0%E6%8D%AE">1.13. 如何在两个线程间共享数据？</a></li><li><a href="#21-%E5%A4%9A%E6%A0%B8cpu%E7%BC%93%E5%AD%98%E6%9E%B6%E6%9E%84">2.1. 多核CPU缓存架构？</a></li><li><a href="#32-%E9%94%81%E7%9A%84%E5%86%85%E5%AD%98%E8%AF%AD%E4%B9%89">3.2. 锁的内存语义</a></li><li><a href="#34-%E9%94%81%E7%B2%97%E5%8C%96%E6%B6%88%E9%99%A4%E5%92%8C%E8%86%A8%E8%83%80">3.4. 锁粗化消除和膨胀</a></li><li><a href="#316-volatile%E5%86%85%E5%AD%98%E8%AF%AD%E4%B9%89">3.16. volatile内存语义</a></li></ul></li><li><a href="#6-forkjoin%E6%A1%86%E6%9E%B6">6. Fork/Join框架</a></li><li><a href="#10-java%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E8%87%AA%E6%97%8B">10. java如何实现自旋?</a></li><li><a href="#6-java%E5%B9%B6%E5%8F%91%E6%9C%BA%E5%88%B6%E7%9A%84%E5%BA%95%E5%B1%82%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86">6. Java并发机制的底层实现原理</a><ul><li><a href="#61-volatile%E7%9A%84%E5%BA%94%E7%94%A8">6.1. volatile的应用</a></li><li><a href="#62-%E5%8E%9F%E5%AD%90%E6%93%8D%E4%BD%9C%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86">6.2. 原子操作的实现原理</a></li><li><a href="#63-%E5%A4%84%E7%90%86%E5%99%A8%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E5%8E%9F%E5%AD%90%E6%93%8D%E4%BD%9C">6.3. 处理器如何实现原子操作：</a></li></ul></li><li><a href="#7-java%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B%E5%9F%BA%E7%A1%80">7. java内存模型基础</a><ul><li><a href="#71-%E5%B9%B6%E5%8F%91%E7%BC%96%E7%A8%8B%E6%A8%A1%E5%9E%8B%E7%9A%84%E4%B8%A4%E4%B8%AA%E5%85%B3%E9%94%AE%E9%97%AE%E9%A2%98">7.1. 并发编程模型的两个关键问题</a></li></ul></li><li><a href="#8-java%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B%E7%9A%84%E6%8A%BD%E8%B1%A1%E7%BB%93%E6%9E%84">8. Java内存模型的抽象结构</a></li><li><a href="#9-%E4%BB%8E%E6%BA%90%E4%BB%A3%E7%A0%81%E5%88%B0%E6%8C%87%E4%BB%A4%E5%BA%8F%E5%88%97%E7%9A%84%E9%87%8D%E6%8E%92%E5%BA%8F">9. 从源代码到指令序列的重排序</a></li><li><a href="#10-%E5%B9%B6%E5%8F%91%E7%BC%96%E7%A8%8B%E6%A8%A1%E5%9E%8B%E7%9A%84%E5%88%86%E7%B1%BB">10. 并发编程模型的分类</a></li><li><a href="#11-happens-before%E7%AE%80%E4%BB%8B">11. happens-before简介</a></li><li><a href="#12-%E9%87%8D%E6%8E%92%E5%BA%8F">12. 重排序</a></li><li><a href="#13-as-if-serial%E8%AF%AD%E4%B9%89">13. as-if-serial语义</a></li><li><a href="#14-%E9%87%8D%E6%8E%92%E5%BA%8F%E5%AF%B9%E5%A4%9A%E7%BA%BF%E7%A8%8B%E7%9A%84%E5%BD%B1%E5%93%8D">14. 重排序对多线程的影响</a></li><li><a href="#15-%E9%A1%BA%E5%BA%8F%E4%B8%80%E8%87%B4%E6%80%A7">15. 顺序一致性</a></li><li><a href="#16-%E9%A1%BA%E5%BA%8F%E4%B8%80%E8%87%B4%E6%80%A7%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B">16. 顺序一致性内存模型</a></li><li><a href="#17-volatile%E7%9A%84%E5%86%85%E5%AD%98%E8%AF%AD%E4%B9%89">17. volatile的内存语义</a></li><li><a href="#18-volatile%E7%9A%84%E7%89%B9%E6%80%A7">18. volatile的特性</a></li><li><a href="#19-volatile%E5%86%99-%E8%AF%BB%E5%BB%BA%E7%AB%8B%E7%9A%84happens-before%E5%85%B3%E7%B3%BB">19. volatile写-读建立的happens-before关系</a></li><li><a href="#20-volatile%E5%86%99-%E8%AF%BB%E7%9A%84%E5%86%85%E5%AD%98%E8%AF%AD%E4%B9%89">20. volatile写-读的内存语义</a></li><li><a href="#21-volatile%E5%86%85%E5%AD%98%E8%AF%AD%E4%B9%89%E7%9A%84%E5%AE%9E%E7%8E%B0">21. volatile内存语义的实现</a></li><li><a href="#22-%E9%94%81%E7%9A%84%E5%86%85%E5%AD%98%E8%AF%AD%E4%B9%89">22. 锁的内存语义</a><ul><li><a href="#221-%E9%94%81%E7%9A%84%E9%87%8A%E6%94%BE-%E8%8E%B7%E5%8F%96%E5%BB%BA%E7%AB%8B%E7%9A%84happens-before%E5%85%B3%E7%B3%BB">22.1. 锁的释放-获取建立的happens-before关系</a></li><li><a href="#222-%E9%94%81%E7%9A%84%E9%87%8A%E6%94%BE%E5%92%8C%E8%8E%B7%E5%8F%96%E7%9A%84%E5%86%85%E5%AD%98%E8%AF%AD%E4%B9%89">22.2. 锁的释放和获取的内存语义</a></li><li><a href="#223-%E9%94%81%E5%86%85%E5%AD%98%E8%AF%AD%E4%B9%89%E7%9A%84%E5%AE%9E%E7%8E%B0">22.3. 锁内存语义的实现</a></li><li><a href="#224-concurrent%E5%8C%85%E7%9A%84%E5%AE%9E%E7%8E%B0">22.4. concurrent包的实现</a></li><li><a href="#225-final%E5%9F%9F%E7%9A%84%E5%86%85%E5%AD%98%E8%AF%AD%E4%B9%89">22.5. final域的内存语义</a><ul><li><a href="#2251-final%E5%9F%9F%E7%9A%84%E9%87%8D%E6%8E%92%E5%BA%8F%E8%A7%84%E5%88%99">22.5.1. final域的重排序规则</a></li><li><a href="#2252-%E5%86%99final%E5%9F%9F%E7%9A%84%E9%87%8D%E6%8E%92%E5%BA%8F%E8%A7%84%E5%88%99">22.5.2. 写final域的重排序规则</a></li><li><a href="#2253-%E8%AF%BBfinal%E5%9F%9F%E7%9A%84%E9%87%8D%E6%8E%92%E5%BA%8F%E8%A7%84%E5%88%99">22.5.3. 读final域的重排序规则</a></li><li><a href="#2254-final%E5%9F%9F%E4%B8%BA%E5%BC%95%E7%94%A8%E7%B1%BB%E5%9E%8B">22.5.4. final域为引用类型</a></li><li><a href="#2255-%E4%B8%BA%E4%BB%80%E4%B9%88final%E5%BC%95%E7%94%A8%E4%B8%8D%E8%83%BD%E4%BB%8E%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E5%86%85%E6%BA%A2%E5%87%BA">22.5.5. 为什么final引用不能从构造函数内“溢出”</a></li><li><a href="#2256-final%E8%AF%AD%E4%B9%89%E5%9C%A8%E5%A4%84%E7%90%86%E5%99%A8%E4%B8%AD%E7%9A%84%E5%AE%9E%E7%8E%B0">22.5.6. final语义在处理器中的实现</a></li><li><a href="#2257-happens-before">22.5.7. happens-before</a></li><li><a href="#2258-happens-before%E7%9A%84%E5%AE%9A%E4%B9%89">22.5.8. happens-before的定义</a></li><li><a href="#2259-happens-before%E8%A7%84%E5%88%99">22.5.9. happens-before规则</a></li><li><a href="#22510-%E5%8F%8C%E9%87%8D%E6%A3%80%E6%9F%A5%E9%94%81%E5%AE%9A%E4%B8%8E%E5%BB%B6%E8%BF%9F%E5%88%9D%E5%A7%8B%E5%8C%96">22.5.10. 双重检查锁定与延迟初始化</a></li><li><a href="#22511---381-%E5%8F%8C%E9%87%8D%E6%A3%80%E6%9F%A5%E9%94%81%E5%AE%9A%E7%9A%84%E7%94%B1%E6%9D%A5">22.5.11. - 3.8.1 双重检查锁定的由来</a></li></ul></li></ul></li><li><a href="#23-java%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B%E7%BB%BC%E8%BF%B0">23. Java内存模型综述</a><ul><li><a href="#231-%E5%A4%84%E7%90%86%E5%99%A8%E7%9A%84%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B">23.1. 处理器的内存模型</a></li><li><a href="#232-%E5%90%84%E7%A7%8D%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B3%E7%B3%BB">23.2. 各种内存模型之间的关系</a></li><li><a href="#233-jmm%E7%9A%84%E5%86%85%E5%AD%98%E5%8F%AF%E8%A7%81%E6%80%A7%E4%BF%9D%E8%AF%81">23.3. JMM的内存可见性保证</a></li></ul></li><li><a href="#24-%E7%BA%BF%E7%A8%8B%E4%BC%98%E5%85%88%E7%BA%A7">24. 线程优先级</a></li><li><a href="#25-%E4%B8%AD%E6%96%AD">25. 中断</a></li><li><a href="#26-%E7%BA%BF%E7%A8%8B%E9%97%B4%E9%80%9A%E4%BF%A1">26. 线程间通信</a><ul><li><a href="#261-volatile%E5%92%8Csynchronized%E5%85%B3%E9%94%AE%E5%AD%97">26.1. volatile和synchronized关键字</a></li></ul></li><li><a href="#27-%E7%AD%89%E5%BE%85%E9%80%9A%E7%9F%A5%E6%9C%BA%E5%88%B6">27. 等待/通知机制</a></li><li><a href="#28-%E7%AE%A1%E9%81%93%E8%BE%93%E5%85%A5%E8%BE%93%E5%87%BA%E6%B5%81">28. 管道输入/输出流</a></li><li><a href="#29-threadlocal%E7%9A%84%E4%BD%BF%E7%94%A8">29. ThreadLocal的使用</a></li><li><a href="#30-%E7%AD%89%E5%BE%85%E8%B6%85%E6%97%B6%E6%A8%A1%E5%BC%8F">30. 等待超时模式</a></li><li><a href="#31-%E6%95%B0%E6%8D%AE%E5%BA%93%E8%BF%9E%E6%8E%A5%E6%B1%A0%E7%A4%BA%E4%BE%8B">31. 数据库连接池示例</a></li><li><a href="#32-%E4%B8%80%E4%B8%AA%E5%9F%BA%E4%BA%8E%E7%BA%BF%E7%A8%8B%E6%B1%A0%E6%8A%80%E6%9C%AF%E7%9A%84%E7%AE%80%E5%8D%95web%E6%9C%8D%E5%8A%A1%E5%99%A8">32. 一个基于线程池技术的简单Web服务器</a></li><li><a href="#33-java%E4%B8%AD%E7%9A%84%E9%94%81">33. Java中的锁</a><ul><li><a href="#331-lock%E6%8E%A5%E5%8F%A3">33.1. Lock接口</a></li></ul></li><li><a href="#34-%E9%98%9F%E5%88%97%E5%90%8C%E6%AD%A5%E5%99%A8">34. 队列同步器</a></li><li><a href="#35-%E9%98%9F%E5%88%97%E5%90%8C%E6%AD%A5%E5%99%A8%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%88%86%E6%9E%90">35. 队列同步器的实现分析</a></li><li><a href="#36-%E9%87%8D%E5%85%A5%E9%94%81">36. 重入锁</a><ul><li><a href="#361-%E5%85%AC%E5%B9%B3%E4%B8%8E%E9%9D%9E%E5%85%AC%E5%B9%B3%E8%8E%B7%E5%8F%96%E9%94%81%E7%9A%84%E5%8C%BA%E5%88%AB">36.1. 公平与非公平获取锁的区别</a></li></ul></li><li><a href="#37-%E8%AF%BB%E5%86%99%E9%94%81">37. 读写锁</a><ul><li><a href="#371-%E8%AF%BB%E5%86%99%E9%94%81%E7%9A%84%E6%8E%A5%E5%8F%A3%E4%B8%8E%E7%A4%BA%E4%BE%8B">37.1. 读写锁的接口与示例</a></li><li><a href="#372-%E8%AF%BB%E5%86%99%E9%94%81%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%88%86%E6%9E%90">37.2. 读写锁的实现分析</a><ul><li><a href="#3721-%E5%86%99%E9%94%81%E7%9A%84%E8%8E%B7%E5%8F%96%E4%B8%8E%E9%87%8A%E6%94%BE">37.2.1. 写锁的获取与释放</a></li><li><a href="#3722-%E9%94%81%E9%99%8D%E7%BA%A7">37.2.2. 锁降级</a></li><li><a href="#3723-locksupport%E5%B7%A5%E5%85%B7">37.2.3. LockSupport工具</a></li></ul></li><li><a href="#373-condition%E6%8E%A5%E5%8F%A3">37.3. Condition接口</a><ul><li><a href="#3731-condition%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%88%86%E6%9E%90">37.3.1. Condition的实现分析</a></li></ul></li><li><a href="#%E7%BA%BF%E7%A8%8B%E6%B1%A0%E5%A4%84%E7%90%86%E6%B5%81%E7%A8%8B%E6%BA%90%E7%A0%81">线程池处理流程源码</a></li><li><a href="#final%E5%9F%9F%E7%9A%84%E9%87%8D%E6%8E%92">final域的重排</a></li><li><a href="#java%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E5%8E%9F%E5%AD%90%E6%93%8D%E4%BD%9C">java如何实现原子操作？</a></li><li><a href="#%E5%A4%9A%E7%BA%BF%E7%A8%8B%E7%9A%84%E4%BC%98%E7%BC%BA%E7%82%B9%E5%BC%80%E5%8F%91%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9">多线程的优缺点？开发注意事项</a></li></ul></li></ul><h1 id="_1-cas底层" tabindex="-1"><a class="header-anchor" href="#_1-cas底层"><span>1. cas底层</span></a></h1><ul><li>lock cmpxchg汇编指令cmpxchg 非原子性 但lock保证了cmpxchg原子性：不允许多核CPU修改该数据</li><li>lock指令在执行后面指令的时候锁定一个北桥信号（不采用锁总线的方式）</li><li>处理器使用基于对缓存加锁或总线加锁的方式来实现多处理器之间的原子操作。</li></ul><h1 id="_2-原子操作类" tabindex="-1"><a class="header-anchor" href="#_2-原子操作类"><span>2. 原子操作类</span></a></h1><ul><li>原子类：AtomicBoolean，AtomicInteger，AtomicLong，AtomicReference</li><li>原子数组：AtomicIntegerArray，AtomicLongArray，AtomicReferenceArray</li><li>原子属性更新器：AtomicLongFieldUpdater，AtomicIntegerFieldUpdater，AtomicReferenceFieldUpdater</li><li>解决 ABA 问题的原子类：AtomicStampedReference（通过引入一个 int 来累加来反映中间有没有变过）</li></ul><h1 id="_3-semaphore-信号量-允许多个线程同时访问" tabindex="-1"><a class="header-anchor" href="#_3-semaphore-信号量-允许多个线程同时访问"><span>3. Semaphore(信号量)-允许多个线程同时访问</span></a></h1><ul><li>Semaphore 就是一个信号量，它的作用是限制某段代码块的并发数。允许多个线程同时访问：public Semaphore(int permits)int表示某段代码最多只有 n 个线程可以访问，如果超出了 n，那么请等待，等到某个线程执行完毕这段代码块，下一个线程再进入。由此可以看出如果 Semaphore 构造函数中传入的 int 型整数 n=1，相当于变成了一个 synchronized 了</li></ul><h2 id="_1-8-什么是线程饥饿-导致原因" tabindex="-1"><a class="header-anchor" href="#_1-8-什么是线程饥饿-导致原因"><span>1.8. 什么是线程饥饿？导致原因？</span></a></h2><ul><li>一个或者多个线程因为种种原因无法获得所需要的资源，导致一直无法执行的状态。 <ul><li>高优先级线程吞噬所有的低优先级线程的CPU时间</li><li>线程被永久堵塞在一个等待进入同步块的状态，因为其他线程总是能在它之前持续地对该同步块进行访问。</li><li>线程在等待一个本身也处于永久等待完成的对象(比如调用这个对象的wait方法)，因为其他线程总是被持续地获得唤醒。</li></ul></li></ul><h2 id="_1-7-java中用到的线程调度算法是什么" tabindex="-1"><a class="header-anchor" href="#_1-7-java中用到的线程调度算法是什么"><span>1.7. Java中用到的线程调度算法是什么？</span></a></h2><ul><li>多线程并发运行是指各个线程轮流获得CPU的使用权，分别执行各自的任务。在运行池中会有多个处于就绪状态的线程在等待CPU，Java虚拟机负责线程调度，线程调度是指按照特定机制为多个线程分配CPU的使用权</li><li>线程调度算法/模型 <ul><li>分时调度模型：让所有的线程轮流获得CPU的使用权,并且平均分配每个线程占用的CPU的时间片</li><li>抢占式调度模型（Java虚拟机采用）优先让可运行池中优先级高的线程占用CPU ，如果优先级相同，那么就随机选择一个线程占用CPU 。处于运行状态的线程会一直运行，直至它放弃CPU</li></ul></li></ul><h2 id="_1-5-程序运行原理" tabindex="-1"><a class="header-anchor" href="#_1-5-程序运行原理"><span>1.5. 程序运行原理</span></a></h2><ul><li>操作系统上可以感觉“同时”运行多个程序，实际上是CPU(中央处理器)使用抢占式调度模式在多个线程间进行着高速的切换。对于CPU的一个核而言，某个时刻，只能执行一个线程</li><li>线程调度器:一个操作系统服务，负责为Runnable状态的线程分配CPU时间。线程执行便依赖于线程调度器的实现。</li><li>时间分片是指将可用的CPU时间分配给可用的Runnable线程的过程。分配CPU时间可以基于线程优先级或者线程等待的时间</li><li>线程的调度策略 线程调度器选择优先级最高的线程运行，但是以下情况会终止线程的运行： <ul><li>线程体中调用了yield方法让出cpu的占用权利</li><li>线程体中调用了sleep方法使线程进入睡眠状态</li><li>线程由于IO操作受到阻塞</li><li>另外一个更高优先级线程出现</li><li>在支持时间片的系统中，该线程的时间片用完</li></ul></li></ul><h2 id="_1-6-什么是多线程上下文切换-如何减少或者避免" tabindex="-1"><a class="header-anchor" href="#_1-6-什么是多线程上下文切换-如何减少或者避免"><span>1.6. 什么是多线程上下文切换？如何减少或者避免？</span></a></h2><ul><li>多线程会共同使用一组计算机上的CPU，而线程数大于给程序分配的CPU数量时，为了让各个线程都有执行的机会，就需要轮转使用CPU。不同的线程切换使用 CPU 发生的切换数据等，就是上下文切换。</li><li>在上下文切换过程中，CPU 会停止处理当前运行的程序，并将当前程序运行的具体位置等信息保存在CPU内存的进程控制块（PCB）中以便之后继续运行。PCB还经常被称作“切换桢”（switchframe）。</li><li>上下文切换是存储和恢复 CPU 状态的过程，它使得线程执行能够从中断点恢复执行。上下文切换是多任务操作系统和多线程环境的基本特征。</li><li>上下文切换：当前任务在执行完CPU时间片切换到另一个任务之前会先保存自己的状态，以便下次再切换回这个任务时，可以再加载这个任务的状态。任务从保存到再加载的过程就是一次上下文切换</li><li>如何减少上下文切换？ <ul><li>无锁并发编程。多线程竞争锁会引起上下文切换，如将数据ID按照Hash算法取模分段交给不同的线程处理</li><li>CAS算法。Java的Atomic包使用CAS算法来更新数据，而不需要加锁。</li><li>避免创建不需要的线程，</li><li>协程：在单线程里实现多任务的调度，并在单线程里维持多个任务间的切换。</li></ul></li></ul><h2 id="_1-11-线程通信、线程同步、线程互斥三者关系" tabindex="-1"><a class="header-anchor" href="#_1-11-线程通信、线程同步、线程互斥三者关系"><span>1.11. 线程通信、线程同步、线程互斥三者关系？</span></a></h2><ul><li>线程通信是指线程之间以何种机制来交换信息</li><li>线程通信的实现方式 <ul><li>共享内存：线程之间共享程序的公共状态，线程之间通过写-读内存中的公共状态来隐式进行通信。如通过共享对象进行通信。</li><li>消息传递：线程之间必须通过明确的发送消息来显式进行通信。</li></ul></li><li>线程通讯的常见场景 <ul><li>多个线程共同完成某个任务：例如一个爬虫程序需要多个线程同时抓取不同的网页，然后将抓取结果合并保存到数据库中。这时需要线程通讯来协调各个线程的执行顺序和共享数据。</li><li>避免资源冲突：多个线程访问共享资源时可能会引发竞争条件，例如多个线程同时读写一个文件或数据库。这时需要线程通讯来同步线程之间的数据访问，避免资源冲突。保证顺序执行：</li><li>在某些情况下，需要保证多个线程按照一定的顺序执行，例如一个多线程排序算法。这时需要线程通讯来协调各个线程的执行顺序。</li><li>线程之间的互斥和同步：有些场景需要确保只有一个线程能够访问某个共享资源，例如一个计数器。这时需要使用线程通讯机制来实现线程之间的互斥和同步。</li></ul></li><li>线程通信实现方法 <ul><li>等待和通知机制：使用Synchronized关键字和Object类的wait()/notify()/notifyAll()方法来实现线程之间的通讯 <ul><li>wait():使一个线程处于等待（阻塞）状态并释放所持有的对象的锁；释放CPU使用权、在等待的时间内，需要别的线程调用同一个对象上的notify()或者notifyAll()方法唤醒</li><li>notify()：由JVM确定唤醒线程池中任意一个被wait()的线程，</li><li>notifyAll()：将线程池中的所有wait()线程都唤醒.将全部线程由等待池移到锁池，然后参与锁的竞争，竞争成功则继续执行，如果不成功则留在锁池等待锁被释放后再次参与竞争</li><li>上面的方法必须在同步块或者方法中被调用，并且在被调用前要保证获得的锁对象是同一个</li></ul></li><li>信号量机制：使用Semaphore类来实现线程之间的同步和互斥。</li><li>栅栏机制：使用CyclicBarrier类来实现多个线程之间的同步，它允许多个线程在指定的屏障处等待，并在所有线程都达到屏障时继续执行。</li><li>锁机制：使用Lock接口和Condition接口来实现线程之间的同步和互斥。Lock是一种更高级的互斥机制，它允许多个条件变量（Condition）并支持在同一个锁上等待和唤醒。await()/signal()/signalAll()</li><li>轮询机制：使用while轮询</li><li>管道机制：通过管道进行线程间通信：1）字节流；2）字符流</li><li>CAS+volatile：使用特殊域变量 volatile + cas实现线程同步；使用阻塞队列实现线程同步；blockqueue</li></ul></li><li>线程同步，是指线程之间所具有的一种制约关系，一个线程的执行依赖另一个线程的消息，当它没有得到另一个线程的消息时应等待，直到消息到达时才被唤醒。分为2种模式 <ul><li>内核模式，就是指利用系统内核对象的单一性来进行同步，使用时需要切换内核态与用户态。如事件、信号量、互斥量、</li><li>用户模式，就是不需要切换到内核态，只在用户态完成操作。原子操作（例如一个单一的全局变量）、临界区</li></ul></li><li>线程互斥，是指对于共享的进程系统资源，在各单个线程访问时的排它性。当有若干个线程都要使用某一共享资源时，任何时刻最多只允许一个线程去使用，其它要使用该资源的线程必须等待，直到占用资源者释放该资源。线程互斥可以看成是一种特殊的线程同步</li></ul><h2 id="_1-13-如何在两个线程间共享数据" tabindex="-1"><a class="header-anchor" href="#_1-13-如何在两个线程间共享数据"><span>1.13. 如何在两个线程间共享数据？</span></a></h2><ul><li>通过线程安全的共享变量</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Thread.join()方法的源码与等待/通知经典范式一致，即加锁、循环和处理逻辑3步
join()方法是用wait()方法实现，为什么没有通过notify()方法唤醒？因为Thread类线程执行完run()方法后自动执行notifyAll()方法
// 加锁当前线程对象
public final void join() throws InterruptedException { join(0); }
public final synchronized void join(long millis) throws InterruptedException {
    long base = System.currentTimeMillis();
    long now = 0;
    if (millis == 0) {
        while (isAlive()) {
            wait(0);
        }
    } else {
        while (isAlive()) {
            long delay = millis - now;
            if (delay &lt;= 0) {
                break;
            }
            wait(delay);
            now = System.currentTimeMillis() - base;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-1-多核cpu缓存架构" tabindex="-1"><a class="header-anchor" href="#_2-1-多核cpu缓存架构"><span>2.1. 多核CPU缓存架构？</span></a></h2><ul><li>活锁：任务或者执行者没有被阻塞，由于某些条件没有满足，导致一直重复尝试，失败，尝试，失败。</li><li><ul><li>活锁和死锁区别：处于活锁的实体是在不断的改变状态，死锁则表现为等待；活锁有可能自行解开，死锁则不能。</li></ul></li></ul><h2 id="_3-2-锁的内存语义" tabindex="-1"><a class="header-anchor" href="#_3-2-锁的内存语义"><span>3.2. 锁的内存语义</span></a></h2><ul><li>当线程释放锁时，JMM会把该线程对应的本地内存中的共享变量刷新到主内存中。</li><li>当线程获取锁时，JMM会把该线程对应的本地内存置为无效。从而使得被监视器保护的临界区代码必须从主内存中读取共享变量</li><li>线程A释放一个锁，实质上是线程A向接下来将要获取这个锁的某个线程发出了（线程A对共享变量所做修改的）消息。</li><li>线程B获取一个锁，实质上是线程B接收了之前某个线程发出的（在释放这个锁之前对共享变量所做修改的）消息。</li><li>线程A释放锁，随后线程B获取这个锁，这个过程实质上是线程A通过主内存向线程B发送消息。</li></ul><h2 id="_3-4-锁粗化消除和膨胀" tabindex="-1"><a class="header-anchor" href="#_3-4-锁粗化消除和膨胀"><span>3.4. 锁粗化消除和膨胀</span></a></h2><ul><li>锁膨胀：当出现有两个线程来竞争synchronized锁的话，那么偏向锁就失效了，此时锁就会膨胀，升级为轻量级锁</li><li>锁消除：JVM会对不可能存在共享数据竞争的同步锁进行锁消除</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//sb只会在栈中使用，属于不可能共享的资源，jvm会自动消除StringBuffer对象内部的锁
public void add(String str1,String str2){
	StringBuffer sb = new StringBuffer();
	sb.append(str1).append(str2);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>锁粗化：将多个连续的加锁、解锁操作连接在一起，扩展成一个范围更大的锁</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//jvm检测到一连串操作都对同一个对象加锁，jvm会将加锁范围粗化到一连串操作的外部
public String test(String str){
	int i=0;
	StringBuffer sb = new StringBuffer();
	while(i&lt;100){
		sb.append(str);
		i++;
	}
	return sb.toString();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-16-volatile内存语义" tabindex="-1"><a class="header-anchor" href="#_3-16-volatile内存语义"><span>3.16. volatile内存语义</span></a></h2><ul><li>volatile写的内存语义：写一个volatile变量时，JMM会把该线程对应的本地内存中的共享变量值刷新到主内存</li><li>volatile读的内存语义：当读一个volatile变量时，JMM会把该线程对应的本地内存置为无效。线程接下来将从主内存中读取共享变量</li></ul><h1 id="_6-fork-join框架" tabindex="-1"><a class="header-anchor" href="#_6-fork-join框架"><span>6. Fork/Join框架</span></a></h1><ul><li>Fork/Join是用于并行执行任务的框架，是一个把大任务分割成若干个互不依赖的小任务分别放到不同队列里，最终汇总每个小任务结果后得到大任务结果的框架。</li><li>工作窃取（work-stealing）算法是指某个线程从其他队列里窃取任务来执行。</li><li>为什么需要使用工作窃取算法呢？为了减少线程间的竞争，并为每个队列创建一个单独的线程来执行队列里的任务，线程和队列一一对应。有的线程会先把自己队列里的任务干完，而其他线程对应的队列里还有任务等待处理。此时空闲线程会去其他线程的队列里窃取一个任务来执行。而在这时它们会访问同一个队列，为了减少窃取任务线程和被窃取任务线程之间的竞争，通常会使用双端队列，被窃取任务线程永远从双端队列的头部拿任务执行，而窃取任务的线程永远从双端队列的尾部拿任务执行。</li><li>工作窃取算法优点：充分利用线程进行并行计算，减少了线程间的竞争;缺点：在某些情况下还是存在竞争，比如双端队列里只有一个任务时。会消耗了更多的系统资源，比如创建多个线程和双端队列</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//ForkJoinTask表示ForkJoin任务,实现类RecursiveAction：用于没有返回结果的任务。RecursiveTask：用于有返回结果的任务。
//ForkJoinTask需要通过ForkJoinPool来执行。
public class CountTask extends RecursiveTask&lt;Integer&gt; {
  private static final int THRESHOLD = 2; // 阈值
  private int start;
  private int end;
  public CountTask(int start, int end) {
    this.start = start;
    this.end = end;
  }
  @Override
  protected Integer compute() {
    int sum = 0;
    // 如果任务足够小就计算任务
    boolean canCompute = (end - start) &lt;= THRESHOLD;
    if (canCompute) {
      for (int i = start; i &lt;= end; i++) {
        sum += i;
      }
    } else {
      // 如果任务大于阈值，就分裂成两个子任务计算
      int middle = (start + end) / 2;
      CountTask leftTask = new CountTask(start, middle);
      CountTask rightTask = new CountTask(middle + 1, end);
      // 执行子任务
      leftTask.fork();
      rightTask.fork();
      // 等待子任务执行完，并得到其结果
      int leftResult=leftTask.join();
      int rightResult=rightTask.join();
      // 合并子任务
      sum = leftResult + rightResult;
    }
    return sum;
  }
  public static void main(String[] args) {
    ForkJoinPool forkJoinPool = new ForkJoinPool();
    // 生成一个计算任务，负责计算1+2+3+4
    CountTask task = new CountTask(1, 4);
    // 执行一个任务
    Future&lt;Integer&gt; result = forkJoinPool.submit(task);
    try {
      System.out.println(result.get());
    } catch (InterruptedException e) {
    } catch (ExecutionException e) {
    }
    //getException方法返回Throwable对象，如果任务被取消了则返回CancellationException。如果任务没有完成或者没有抛出异常则返回null。
    if(task.isCompletedAbnormally())
    {
    System.out.println(task.getException());
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Fork/Join框架的实现原理</li><li>ForkJoinPool由ForkJoinTask数组和ForkJoinWorkerThread数组组成，ForkJoinTask数组负责将存放程序提交给ForkJoinPool的任务，而ForkJoinWorkerThread数组负责执行这些任务。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//ForkJoinTask的fork方法实际调用ForkJoinWorkerThread的pushTask方法异步地执行这个任务，然后立即返回结果。
public final ForkJoinTask&lt;V&gt; fork() {
  ((ForkJoinWorkerThread) Thread.currentThread()).pushTask(this);
  return this;
}

//pushTask方法把当前任务存放在ForkJoinTask数组队列里。然后再调用ForkJoinPool的signalWork()方法唤醒或创建一个工作线程来执行任务。
final void pushTask(ForkJoinTask&lt;&gt; t) {
  ForkJoinTask&lt;&gt;[] q; int s, m;
  if ((q = queue) != null) { // ignore if queue removed
    long u = (((s = queueTop) &amp; (m = q.length - 1)) &lt;&lt; ASHIFT) + ABASE;
    UNSAFE.putOrderedObject(q, u, t);
    queueTop = s + 1; // or use putOrderedInt
  if ((s -= queueBase) &lt;= 2)
    pool.signalWork();
  else if (s == m)
    growQueue();
  }
}

//ForkJoinTask的join方法主要作用是阻塞当前线程并等待获取结果
public final V join() {
  if (doJoin() != NORMAL)
    return reportResult();
  else
    return getRawResult();
}
private V reportResult() {
  int s; Throwable ex;
  if ((s = status) == CANCELLED)
    throw new CancellationException();
  if (s == EXCEPTIONAL &amp;&amp; (ex = getThrowableException()) != null)
    UNSAFE.throwException(ex);
  return getRawResult();
}
//doJoin()方法得到当前任务的状态：已完成（NORMAL）、被取消（CANCELLED）、信号（SIGNAL）和出现异常（EXCEPTIONAL）。
//如果任务状态是已完成，则直接返回任务结果;如果任务状态是被取消，则直接抛出CancellationException。
//如果任务状态是抛出异常，则直接抛出对应的异常。
private int doJoin() {
  Thread t; ForkJoinWorkerThread w; int s; boolean completed;
  if ((t = Thread.currentThread()) instanceof ForkJoinWorkerThread) {
    if ((s = status) &lt; 0) //首先通过查看任务的状态是否已经执行完成，如果执行完成，则直接返回任务状态；
      return s;
    if ((w = (ForkJoinWorkerThread)t).unpushTask(this)) {//如果没有执行完，则从任务数组里取出任务并执行。
      try {
        completed = exec();
      } catch (Throwable rex) {//如果出现异常，则记录异常，并将任务状态设置为EXCEPTIONAL。
        return setExceptionalCompletion(rex);
      }
      if (completed) //如果任务顺利执行完成，则设置任务状态为NORMAL，
        return setCompletion(NORMAL);
    }
    return w.joinTask(this);
  }
  else
    return externalAwaitDone();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_10-java如何实现自旋" tabindex="-1"><a class="header-anchor" href="#_10-java如何实现自旋"><span>10. java如何实现自旋?</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class SpinLock {
    private AtomicReference&lt;Thread&gt; sign =new AtomicReference&lt;&gt;();
    public void lock() { // &lt;1&gt;
        Thread current = Thread.currentThread();
        while(!sign .compareAndSet(null, current)) {
            // &lt;1.1&gt;
        }
    }
    public void unlock () { // &lt;2&gt;
        Thread current = Thread.currentThread();
        sign .compareAndSet(current, null);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>阻塞队列的实现原理</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>private final Condition notFull;
private final Condition notEmpty;
public ArrayBlockingQueue(int capacity, boolean fair) {
  notEmpty = lock.newCondition();
  notFull = lock.newCondition();
}
public void put(E e) throws InterruptedException {
  checkNotNull(e);
  final ReentrantLock lock = this.lock;
  lock.lockInterruptibly();
  try {
    while (count == items.length)
    notFull.await();
    insert(e);
  } finally {
    lock.unlock();
  }
}
public E take() throws InterruptedException {
  final ReentrantLock lock = this.lock;
  lock.lockInterruptibly();
  try {
    while (count == 0)
      notEmpty.await();
    return extract();
  } finally {
    lock.unlock();
  }
}
private void insert(E x) {
  items[putIndex] = x;
  putIndex = inc(putIndex);
  ++count;
  notEmpty.signal();
}

当往队列里插入一个元素时，如果队列不可用，那么阻塞生产者主要通过LockSupport.park（this）来实现。
public final void await() throws InterruptedException {
  if (Thread.interrupted())
    throw new InterruptedException();
  Node node = addConditionWaiter();
  int savedState = fullyRelease(node);
  int interruptMode = 0;
  while (!isOnSyncQueue(node)) {
    LockSupport.park(this);
    if ((interruptMode = checkInterruptWhileWaiting(node)) != 0)
      break;
    }
  if (acquireQueued(node, savedState) &amp;&amp; interruptMode != THROW_IE)
    interruptMode = REINTERRUPT;
  if (node.nextWaiter != null) // clean up if cancelled
    unlinkCancelledWaiters();
  if (interruptMode != 0)
    reportInterruptAfterWait(interruptMode);
}
//park这个方法会阻塞当前线程，只有以下4种情况中的一种发生时，该方法才会返回。
//与park对应的unpark执行或已经执行时。“已经执行”是指unpark先执行，然后再执行park的情况。
//线程被中断时。
//等待完time参数指定的毫秒数时。
//异常现象发生时，这个异常现象没有任何原因。
public static void park(Object blocker) {
  Thread t = Thread.currentThread();
  setBlocker(t, blocker);
  unsafe.park(false, 0L);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>AtomicInteger源码
public final int getAndIncrement() {
  for (;;) {
    int current = get();
    int next = current + 1;
    if (compareAndSet(current, next))
      return current;
  }
}
public final boolean compareAndSet(int expect, int update) {
  return unsafe.compareAndSwapInt(this, valueOffset, expect, update);
}
AtomicBoolean源码
public final boolean compareAndSet(boolean expectedValue, boolean newValue) {
    return VALUE.compareAndSet(this, (expectedValue ? 1 : 0), (newValue ? 1 : 0));
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_6-java并发机制的底层实现原理" tabindex="-1"><a class="header-anchor" href="#_6-java并发机制的底层实现原理"><span>6. Java并发机制的底层实现原理</span></a></h1><ul><li>Java代码在编译后会变成Java字节码，字节码被类加载器加载到JVM里，JVM执行字节码，最终需要转化为汇编指令在CPU上执行，Java中所使用的并发机制依赖于JVM的实现和CPU的指令。</li></ul><h2 id="_6-1-volatile的应用" tabindex="-1"><a class="header-anchor" href="#_6-1-volatile的应用"><span>6.1. volatile的应用</span></a></h2><ul><li>volatile是轻量级的synchronized，它在多处理器开发中保证了共享变量的“可见性”。可见性的意思是当一个线程修改一个共享变量时，另外一个线程能读到这个修改的值。如果volatile变量修饰符使用恰当的话，它比synchronized的使用和执行成本更低，因为它不会引起线程上下文的切换和调度。本文将深入分析在硬件层面上Intel处理器是如何实现volatile的，通过深入分析帮助我们正确地使用volatile变量。</li><li>volatile的定义与实现原理 <ul><li>Java语言规范第3版中对volatile的定义如下：Java编程语言允许线程访问共享变量，为了确保共享变量能被准确和一致地更新，线程应该确保通过排他锁单独获得这个变量。Java语言提供了volatile，在某些情况下比锁要更加方便。如果一个字段被声明成volatile，Java线程内存模型确保所有线程看到这个变量的值是一致的。<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/d1a3ad11e842eda9f71fa.png" alt="cpu术语.png"></li></ul></li><li>volatile是如何来保证可见性的呢？在X86处理器下通过工具获取JIT编译器生成的汇编指令来查看对volatile进行写操作时，CPU会做什么事情。java代码转变成汇编代码如下</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>0x01a3de1d: movb $0×0,0×1104800(%esi);0x01a3de24: lock addl $0×0,(%esp);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>有volatile变量修饰的共享变量进行写操作的时候会多出第二行汇编代码，通过查IA-32架构软件开发者手册可知，Lock前缀的指令在多核处理器下会引发了两件事情[1]。</p><ul><li>1）将当前处理器缓存行的数据写回到系统内存。</li><li>2）这个写回内存的操作会使在其他CPU里缓存了该内存地址的数据无效。</li><li>为了提高处理速度，处理器不直接和内存进行通信，而是先将系统内存的数据读到内部缓存（L1，L2或其他）后再进行操作，但操作完不知道何时会写到内存。如果对声明了volatile的变量进行写操作，JVM就会向处理器发送一条Lock前缀的指令，将这个变量所在缓存行的数据写回到系统内存。但是，就算写回到内存，如果其他处理器缓存的值还是旧的，再执行计算操作就会有问题。所以，在多处理器下，为了保证各个处理器的缓存是一致的，就会实现缓存一致性协议，每个处理器通过嗅探在总线上传播的数据来检查自己缓存的值是不是过期了，当处理器发现自己缓存行对应的内存地址被修改，就会将当前处理器的缓存行设置成无效状态，当处理器对这个数据进行修改操作的时候，会重新从系统内存中把数据读到处理器缓存里。</li><li>volatile的两条实现原则。 <ul><li>Lock前缀指令会引起处理器缓存回写到内存。Lock前缀指令导致在执行指令期间，声言处理器的LOCK#信号。在多处理器环境中，LOCK#信号确保在声言该信号期间，处理器可以独占任何共享内存<a href="%E5%9B%A0%E4%B8%BA%E5%AE%83%E4%BC%9A%E9%94%81%E4%BD%8F%E6%80%BB%E7%BA%BF%EF%BC%8C%E5%AF%BC%E8%87%B4%E5%85%B6%E4%BB%96CPU%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE%E6%80%BB%E7%BA%BF%EF%BC%8C%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE%E6%80%BB%E7%BA%BF%E5%B0%B1%E6%84%8F%E5%91%B3%E7%9D%80%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE%E7%B3%BB%E7%BB%9F%E5%86%85%E5%AD%98">2</a>。但是，在最近的处理器里，LOCK＃信号一般不锁总线，而是锁缓存，毕竟锁总线开销的比较大。在8.1.4节有详细说明锁定操作对处理器缓存的影响，对于Intel486和Pentium处理器，在锁操作时，总是在总线上声言LOCK#信号。但在P6和目前的处理器中，如果访问的内存区域已经缓存在处理器内部，则不会声言LOCK#信号。相反，它会锁定这块内存区域的缓存并回写到内存，并使用缓存一致性机制来确保修改的原子性，此操作被称为“缓存锁定”，缓存一致性机制会阻止同时修改由两个以上处理器缓存的内存区域数据。</li><li>一个处理器的缓存回写到内存会导致其他处理器的缓存无效。IA-32处理器和Intel 64处理器使用MESI（修改、独占、共享、无效）控制协议去维护内部缓存和其他处理器缓存的一致性。在多核处理器系统中进行操作的时候，IA-32和Intel 64处理器能嗅探其他处理器访问系统内存和它们的内部缓存。处理器使用嗅探技术保证它的内部缓存、系统内存和其他处理器的缓存的数据在总线上保持一致。例如，在Pentium和P6 family处理器中，如果通过嗅探一个处理器来检测其他处理器打算写内存地址，而这个地址当前处于共享状态，那么正在嗅探的处理器将使它的缓存行无效，在下次访问相同内存地址时，强制执行缓存行填充。</li></ul></li><li>volatile的使用优化 <ul><li>著名的Java并发编程大师Doug lea在JDK 7的并发包里新增一个队列集合类LinkedTransferQueue，它在使用volatile变量时，用一种追加字节的方式来优化队列出队和入队的性能。它使用一个内部类类型来定义队列的头节点（head）和尾节点（tail），而这个内部类PaddedAtomicReference相对于父类AtomicReference只做了一件事情，就是将共享变量追加到64字节。我们可以来计算下，一个对象的引用占4个字节，它追加了15个变量（共占60个字节），再加上父类的value变量，一共64个字节。</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    /** 队列中的头部节点 */
    private transient f?inal PaddedAtomicReference&lt;QNode&gt; head;
    /** 队列中的尾部节点 */
    private transient f?inal PaddedAtomicReference&lt;QNode&gt; tail;
    static f?inal class PaddedAtomicReference &lt;T&gt; extends AtomicReference T&gt; {
        // 使用很多4个字节的引用追加到64个字节
        Object p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, pa, pb, pc, pd, pe;
        PaddedAtomicReference(T r) {
            super(r);
        }
    }
    public class AtomicReference &lt;V&gt; implements java.io.Serializable {
        private volatile V value;
        // 省略其他代码
    ｝
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>- 为什么追加64字节能够提高并发编程的效率呢？因为对于英特尔酷睿i7、酷睿、Atom和NetBurst，以及Core Solo和Pentium M处理器的L1、L2或L3缓存的高速缓存行是64个字节宽，不支持部分填充缓存行，这意味着，如果队列的头节点和尾节点都不足64字节的话，处理器会将它们都读到同一个高速缓存行中，在多处理器下每个处理器都会缓存同样的头、尾节点，当一个处理器试图修改头节点时，会将整个缓存行锁定，那么在缓存一致性机制的作用下，会导致其他处理器不能访问自己高速缓存中的尾节点，而队列的入队和出队操作则需要不停修改头节点和尾节点，所以在多处理器的情况下将会严重影响到队列的入队和出队效率。Doug lea使用追加到64字节的方式来填满高速缓冲区的缓存行，避免头节点和尾节点加载到同一个缓存行，使头、尾节点在修改时不会互相锁定。
- 那么是不是在使用volatile变量时都应该追加到64字节呢？不是的。在两种场景下不应该使用这种方式。
  - 缓存行非64字节宽的处理器。如P6系列和奔腾处理器，它们的L1和L2高速缓存行是32个字节宽。
  - 共享变量不会被频繁地写。因为使用追加字节的方式需要处理器读取更多的字节到高速缓冲区，这本身就会带来一定的性能消耗，如果共享变量不被频繁写的话，锁的几率也非常小，就没必要通过追加字节的方式来避免相互锁定。
- 不过这种追加字节的方式在Java 7下可能不生效，因为Java 7变得更加智慧，它会淘汰或重新排列无用字段，需要使用其他追加字节的方式。
</code></pre><h2 id="_6-2-原子操作的实现原理" tabindex="-1"><a class="header-anchor" href="#_6-2-原子操作的实现原理"><span>6.2. 原子操作的实现原理</span></a></h2><ul><li>缓存行Cache line 缓存的最小操作单位</li><li>比较并交换Compare and Swap CAS操作需要输入两个数值，一个旧值(期望操作前的值)和一个新值，在操作期问先比较旧值有没有发生变化，如果没有发生变化，才交换成新值，发生了变化则不交换</li><li>CPU 流水线 CPU pipeline CPU流水线的工作方式就像工业生产上的装配流水线，在CPU中由5~6个不同功能的电路单元组成一条指令处理流水线，然后将一条X86指令分成5~6步后再由这些电路单元分别执行，这样就能实现在一个CPU时钟周期完成一条指令，因此提高CPU的运算速度</li><li>内存顺序冲突Memory order violation内存顺序冲突一般是由假共享引起的，假共享是指多个CPU同时修改同一个缓存行的不同部分而引起其中一个CPU的操作无效，当出现这个内存顺序冲突时，CPU必须清空流水线</li></ul><h2 id="_6-3-处理器如何实现原子操作" tabindex="-1"><a class="header-anchor" href="#_6-3-处理器如何实现原子操作"><span>6.3. 处理器如何实现原子操作：</span></a></h2><ul><li>32位IA-32处理器使用基于对缓存加锁或总线加锁的方式来实现多处理器之间的原子操作。首先处理器会自动保证基本的内存操作的原子性。处理器保证从系统内存中读取或者写入一个字节是原子的，意思是当一个处理器读取一个字节时，其他处理器不能访问这个字节的内存地址。Pentium 6和最新的处理器能自动保证单处理器对同一个缓存行里进行16/32/64位的操作是原子的，但是复杂的内存操作处理器是不能自动保证其原子性的，比如跨总线宽度、跨多个缓存行和跨页表的访问。但是，处理器提供总线锁定和缓存锁定两个机制来保证复杂内存操作的原子性。</li><li>使用总线锁保证原子性：如果多个处理器同时对共享变量进行读改写操作（i++），那么共享变量就会被多个处理器同时进行操作，这样读改写操作就不是原子的，操作完之后共享变量的值会和期望的不一致。如果i=1进行两次i++操作，我们期望的结果是3，但是有可能结果是2，原因可能是多个处理器同时从各自的缓存中读取变量i，分别进行加1操作，然后分别写入系统内存中。那么，想要保证读改写共享变量的操作是原子的，就必须保证CPU1读改写共享变量的时候，CPU2不能操作缓存了该共享变量内存地址的缓存。处理器使用总线锁就是来解决这个问题的。所谓总线锁就是使用处理器提供的一个LOCK＃信号，当一个处理器在总线上输出此信号时，其他处理器的请求将被阻塞住，那么该处理器可以独占共享内存。</li><li>使用缓存锁保证原子性.在同一时刻只需保证对某个内存地址的操作是原子性即可，但总线锁定把CPU和内存之间的通信锁住了，这使得锁定期间，其他处理器不能操作其他内存地址的数据，所以总线锁定的开销比较大，目前处理器在某些场合下使用缓存锁定代替总线锁定来进行优化。频繁使用的内存会缓存在处理器的L1、L2和L3高速缓存里，那么原子操作就可以直接在处理器内部缓存中进行，并不需要声明总线锁，在Pentium 6和目前的处理器中可以使用“缓存锁定”的方式来实现复杂的原子性。所谓“缓存锁定”是指内存区域如果被缓存在处理器的缓存行中，并且在Lock操作期间被锁定，那么当它执行锁操作回写到内存时，处理器不在总线上声言LOCK＃信号，而是修改内部的内存地址，并允许它的缓存一致性机制来保证操作的原子性，因为缓存一致性机制会阻止同时修改由两个以上处理器缓存的内存区域数据，当其他处理器回写已被锁定的缓存行的数据时，会使缓存行无效，在如图2-3所示的例子中，当CPU1修改缓存行中的i时使用了缓存锁定，那么CPU2就不能同时缓存i的缓存行。</li><li>但是有两种情况下处理器不会使用缓存锁定。 <ul><li>当操作的数据不能被缓存在处理器内部，或操作的数据跨多个缓存行（cache line）时，则处理器会调用总线锁定。</li><li>有些处理器不支持缓存锁定。对于Intel 486和Pentium处理器，就算锁定的内存区域在处理器的缓存行中也会调用总线锁定。</li></ul></li><li>针对以上两个机制，我们通过Intel处理器提供了很多Lock前缀的指令来实现。例如，位测试和修改指令：BTS、BTR、BTC；交换指令XADD、CMPXCHG，以及其他一些操作数和逻辑指令（如ADD、OR）等，被这些指令操作的内存区域就会加锁，导致其他处理器不能同时访问它。</li><li>Java通过锁和循环CAS的方式来实现原子操作。 <ul><li>使用循环CAS实现原子操作.JVM中的CAS操作正是利用了处理器提供的CMPXCHG指令实现的。自旋CAS实现的基本思路就是循环进行CAS操作直到成功为止，以下代码实现了一个基于CAS线程安全的计数器方法safeCount和一个非线程安全的计数器count。</li><li>JDK的并发包里提供了一些类来支持原子操作，如AtomicBoolean（用原子方式更新的boolean值）、AtomicInteger（用原子方式更新的int值）和AtomicLong（用原子方式更新的long值）。这些原子包装类还提供了有用的工具方法，比如以原子的方式将当前值自增1和自减1。</li><li>锁机制保证了只有获得锁的线程才能够操作锁定的内存区域。JVM内部实现了很多种锁机制，有偏向锁、轻量级锁和互斥锁。有意思的是除了偏向锁，JVM实现锁的方式都用了循环CAS，即当一个线程想进入同步块的时候使用循环CAS的方式来获取锁，当它退出同步块的时候使用循环CAS释放锁</li></ul></li></ul><h1 id="_7-java内存模型基础" tabindex="-1"><a class="header-anchor" href="#_7-java内存模型基础"><span>7. java内存模型基础</span></a></h1><h2 id="_7-1-并发编程模型的两个关键问题" tabindex="-1"><a class="header-anchor" href="#_7-1-并发编程模型的两个关键问题"><span>7.1. 并发编程模型的两个关键问题</span></a></h2><ul><li>线程之间如何通信。指线程之间以何种机制来交换信息。在命令式编程中，线程之间的通信机制有共享内存和消息传递两种： <ul><li>在共享内存的并发模型里。线程之间共享程序的公共状态，通过写-读内存中的公共状态进行隐式通信。</li><li>在消息传递的并发模型里，线程之间没有公共状态，线程之间必须通过发送消息来显式进行通信。</li></ul></li><li>线程之间如何同步。指程序中用于控制不同线程间操作发生相对顺序的机制。 <ul><li>在共享内存并发模型里，同步是显式进行的。必须显式指定某个方法或某段代码需要在线程之间互斥执行。</li><li>在消息传递的并发模型里，由于消息的发送必须在消息的接收之前，因此同步是隐式进行的。</li></ul></li><li>Java的并发采用的是共享内存模型，Java线程之间的通信总是隐式进行</li></ul><h1 id="_8-java内存模型的抽象结构" tabindex="-1"><a class="header-anchor" href="#_8-java内存模型的抽象结构"><span>8. Java内存模型的抽象结构</span></a></h1><ul><li>在Java中，所有实例域、静态域和数组元素都存储(3个统称共享变量)在堆内存中，堆内存在线程之间共享</li><li>局部变量（Local Variables），方法定义参数（Java语言规范称之为Formal Method Parameters）和异常处理器参数（Exception Handler Parameters）不会在线程之间共享，它们不会有内存可见性问题，也不受内存模型的影响。</li><li>Java线程之间的通信由Java内存模型（JMM）控制，JMM决定一个线程对共享变量的写入何时对另一个线程可见。从抽象的角度来看，JMM定义了线程和主内存之间的抽象关系：线程之间的共享变量存储在主内存（Main Memory）中，每个线程都有一个私有的本地内存（Local Memory），本地内存中存储了该线程以读/写共享变量的副本。本地内存是JMM的一个抽象概念，并不真实存在。它涵盖了缓存、写缓冲存器以及其他的硬件和编译器优化。</li><li>如果线程A与线程B之间要通信的话，经过2步：1）线程A把本地内存A中更新过的共享变量刷新到主内存中去。2）线程B到主内存中去读取线程A之前已更新过的共享变量。</li><li>从整体来看，这两个步骤实质上是线程A在向线程B发送消息，而且这个通信过程必须要经过主内存。JMM通过控制主内存与每个线程的本地内存之间的交互，提供内存可见性保证。<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/29c188f244a273e4ed948.jpg" alt="java内存模型抽象结构.png"></li></ul><h1 id="_9-从源代码到指令序列的重排序" tabindex="-1"><a class="header-anchor" href="#_9-从源代码到指令序列的重排序"><span>9. 从源代码到指令序列的重排序</span></a></h1><ul><li>在执行程序时，为了提高性能，编译器和处理器常常会对指令做重排序。重排序分3种类型。 <ul><li>编译器优化的重排序。编译器在不改变单线程程序语义的前提下，可以重新安排语句的执行顺序。</li><li>指令级并行的重排序。如果不存在数据依赖性，处理器可以改变语句对应机器指令的执行顺序。</li><li>内存系统的重排序。由于处理器使用缓存和读/写缓冲区，这使得加载和存储操作看上去可能是在乱序执行。</li></ul></li><li></li><li>编译器优化重排序属于编译器重排序，指令级并行重排序和内存系统重排序属于处理器重排序。这些重排序可能会导致多线程程序<br> 出现内存可见性问题。JMM的编译器重排序规则会禁止特定类型的编译器重排序。JMM的处理器重排序规则会要求Java编译器在生成指令序列时，插入特定类型的内存屏障（Memory Barriers，Intel称之为Memory Fence）指令禁止特定类型的处理器重排序。</li></ul><h1 id="_10-并发编程模型的分类" tabindex="-1"><a class="header-anchor" href="#_10-并发编程模型的分类"><span>10. 并发编程模型的分类</span></a></h1><ul><li>处理器使用写缓冲区临时保存向内存写入的数据。写缓冲区可以保证指令流水线持续运行，它可以避免由于处理器停顿下来等待向内存写入数据而产生的延迟。同时，通过以批处理的方式刷新写缓冲区，以及合并写缓冲区中对同一内存地址的多次写，减少对内存总<br> 线的占用。</li><li>每个处理器上的写缓冲区，仅对它所在的处理器可见。导致处理器执行内存操作的顺序可能会与内存实际的操作执行顺序不一致</li><li>为了保证内存可见性，Java编译器在生成指令序列的适当位置会插入内存屏障指令来禁止特定类型的处理器重排序。JMM把内存屏障指令分为4类，<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/ad125ea59be25ae21d5e9.jpg" alt="内存屏障类型表.png"></li><li>StoreLoad Barriers同时具有其他3个屏障的效果。执行该屏障开销会很昂贵，因为当前处理器通常要把写缓冲区中的数据全部刷新到内存中（Buffer Fully Flush）</li></ul><h1 id="_11-happens-before简介" tabindex="-1"><a class="header-anchor" href="#_11-happens-before简介"><span>11. happens-before简介</span></a></h1><ul><li>自JDK5后Java使用JSR-133内存模型。为了屏蔽重排序规则复杂性，JSR-133使用happens-before的阐述操作之间的内存可见性。在JMM中，如果一个操作执行的结果需要对另一个操作可见，那么这两个操作之间必须存在happens-before关系。这两个操作可以在一个线程之内，也可以是在不同线程之间</li><li>happens-before规则如下。 <ul><li>程序顺序规则：一个线程中的每个操作，happens-before于该线程中的任意后续操作。</li><li>监视器锁规则：对一个锁的解锁，happens-before于随后对这个锁的加锁。</li><li>volatile变量规则：对一个volatile域的写，happens-before于任意后续对这个volatile域的读。</li><li>传递性：如果A happens-before B，且B happens-before C，那么A happens-before C。</li></ul></li><li>注意 两个操作之间具有happens-before关系，并不意味着前一个操作必须要在后一个操作之前执行！happens-before仅仅要求前一个操作（执行的结果）对后一个操作可见，且前一个操作按顺序排在第二个操作之前（the first is visible to and ordered before the second）。</li></ul><h1 id="_12-重排序" tabindex="-1"><a class="header-anchor" href="#_12-重排序"><span>12. 重排序</span></a></h1><ul><li>数据依赖性：如果两个操作访问同一个变量，且这两个操作中有一个为写操作，此时这两个操作之间就存在数据依赖性。数据依赖分为下列3种类型，只要重排序两个操作的执行顺序，程序的执行结果就会被改变。 <ul><li>写后读 a=1; b=a; 写一个变量之后，再读这个位置</li><li>写后写 a=1; a=2; 写一个变量之后，再写这个变量</li><li>读后写 a=b; b=1; 读一个变量之后，再写这个变量</li></ul></li><li>编译器和处理器不会重排序存在数据依赖关系的两个操作。数据依赖性仅针对单个处理器中执行的指令序列和单个线程中执行的操作</li></ul><h1 id="_13-as-if-serial语义" tabindex="-1"><a class="header-anchor" href="#_13-as-if-serial语义"><span>13. as-if-serial语义</span></a></h1><ul><li>as-if-serial语义：不管怎么重排序，（单线程）程序的执行结果不能被改变。编译器、runtime和处理器都必须遵守as-if-serial语义。为此，编译器和处理器不会对存在数据依赖关系的操作做重排序，因为这种重排序会改变执行结果。</li><li>as-if-serial语义把单线程程序保护了起来，遵守as-if-serial语义的编译器、runtime和处理器共同为编写单线程程序的程序员创建了一个幻觉：单线程程序是按程序的顺序来执行的。as-if-serial语义使单线程程序员无需担心重排序会干扰他们，也无需担心内存可见性问题</li></ul><h1 id="_14-重排序对多线程的影响" tabindex="-1"><a class="header-anchor" href="#_14-重排序对多线程的影响"><span>14. 重排序对多线程的影响</span></a></h1><ul><li>在多线程程序中，对存在控制依赖的操作重排序，可能会改变程序的执行结果</li></ul><h1 id="_15-顺序一致性" tabindex="-1"><a class="header-anchor" href="#_15-顺序一致性"><span>15. 顺序一致性</span></a></h1><ul><li>顺序一致性内存模型是一个理论参考模型，在设计的时候，处理器的内存模型和编程语言的内存模型都会以顺序一致性内存模型作为参照</li><li>当程序未正确同步时，就可能会存在数据竞争。数据竞争指在一个线程中写一个变量，在另一个线程读同一个变量，而且写和读没有通过同步来排序。当代码中包含数据竞争时，程序的执行往往产生违反直觉的结果。</li><li>JMM对正确同步的多线程程序的内存一致性做了如下保证。如果程序是正确同步的，程序的执行将具有顺序一致性（Sequentially Consistent）——即程序的执行结果与该程序在顺序一致性内存模型中的执行结果相同。同步是指广义上的同步，包括对常用同步原语（synchronized、volatile和final）的正确使用</li></ul><h1 id="_16-顺序一致性内存模型" tabindex="-1"><a class="header-anchor" href="#_16-顺序一致性内存模型"><span>16. 顺序一致性内存模型</span></a></h1><ul><li>顺序一致性内存模型是一个理想化的理论参考模型，它提供了极强的内存可见性保证。包含两大特性。 <ul><li>1）一个线程中的所有操作必须按照程序的顺序来执行。</li><li>2）（不管程序是否同步）所有线程都只能看到一个单一的操作执行顺序。每个操作都必须原子执行且立刻对所有线程可见。</li></ul></li><li>在概念上，顺序一致性模型有一个单一的全局内存，这个内存通过一个左右摆动的开关可以连接到任意一个线程，同时每一个线程必须按照程序的顺序来执行内存读/写操作。在任意时间点最多只能有一个线程可以连接到内存。当多个线程并发执行时，图中的开关装置能把所有线程的所有内存读/写操作串行化（即在顺序一致性模型中，所有操作之间具有全序关系）。</li><li>未同步程序在顺序一致性模型中虽然整体执行顺序是无序的，但所有线程都只能看到一个一致的整体执行顺序。在JMM中就没有这个保证。未同步程序在JMM中不但整体的执行顺序是无序的，而且所有线程看到的操作执行顺序也可能不一致。比如，在当前线程把写过的数据缓存在本地内存中，在没有刷新到主内存之前，这个写操作仅对当前线程可见；从其他线程的角度来观察，会认为这个写操作根本没有被当前线程执行。只有当前线程把本地内存中写过的数据刷新到主内存之后，这个写操作才能对其他线程可见。在这种情况下，当前线程和其他线程看到的操作执行顺序将不一致</li><li>正确同步的程序具有顺序一致性。顺序一致性模型中，所有操作完全按程序的顺序串行执行。而在JMM中，临界区内的代码可以重排序（但JMM不允许临界区内的代码“逸出”到临界区之外，那样会破坏监视器的语义）。JMM会在退出临界区和进入临界区这两个关键时间点做一些特别处理，使得线程在这两个时间点具有与顺序一致性模型相同的内存视图。虽然线程A在临界区内做了重排序，但由于监视器互斥执行的特性，这里的线程B根本无法“观察”到线程A在临界区内的重排序。</li><li>未同步程序在JMM中的执行时，整体上是无序的，其执行结果无法预知。未同步程序在两个模型中的执行特性有如下几个差异。 <ul><li>1）顺序一致性模型保证单线程内的操作会按程序的顺序执行，而JMM不保证单线程内的操作会按程序的顺序执行（临界区内允许重排序）</li><li>2）顺序一致性模型保证所有线程只能看到一致的操作执行顺序，而JMM不保证所有线程能看到一致的操作执行顺序。(只有刷新到主存才能被其他线程看见)</li><li>3）顺序一致性模型保证对所有的内存读/写操作具有原子性，而JMM不保证对64位的long型和double型变量的写操作具有原子性</li></ul></li></ul><h1 id="_17-volatile的内存语义" tabindex="-1"><a class="header-anchor" href="#_17-volatile的内存语义"><span>17. volatile的内存语义</span></a></h1><h1 id="_18-volatile的特性" tabindex="-1"><a class="header-anchor" href="#_18-volatile的特性"><span>18. volatile的特性</span></a></h1><ul><li>可见性。对一个volatile变量(包括64位的long型和double型变量)的读，总是能看到（任意线程）对这个volatile变量最后的写入。(一个volatile变量的单个读/写操作，与一个普通变量的读/写操作都是使用同一个锁来同步的执行效果相同)</li><li>原子性：对任意单个volatile变量的读/写具有原子性，但类似于volatile++这种复合操作不具有原子性</li></ul><h1 id="_19-volatile写-读建立的happens-before关系" tabindex="-1"><a class="header-anchor" href="#_19-volatile写-读建立的happens-before关系"><span>19. volatile写-读建立的happens-before关系</span></a></h1><ul><li>volatile变量的写-读可以实现线程之间的通信。</li><li>从内存语义的角度来说，volatile的写-读与锁的释放-获取有相同的内存效果：volatile写和锁的释放有相同的内存语义；volatile读与锁的获取有相同的内存语义。</li></ul><h1 id="_20-volatile写-读的内存语义" tabindex="-1"><a class="header-anchor" href="#_20-volatile写-读的内存语义"><span>20. volatile写-读的内存语义</span></a></h1><ul><li>volatile写的内存语义：当写一个volatile变量时，JMM会把该线程对应的本地内存中的共享变量值刷新到主内存。</li><li>volatile读的内存语义：当读一个volatile变量时，JMM会把该线程对应的本地内存置为无效。接下来将从主内存中读取共享变量</li><li>volatile写和volatile读的内存语义总结 <ul><li>线程A写一个volatile变量，实质上是向接下来将要读这个volatile变量的某个线程发出了（其对共享变量所做修改的）消息</li><li>线程B读一个volatile变量，实质上是接收了之前某个线程发出的（在写这个volatile变量之前对共享变量所做修改的）消息</li><li>线程A写一个volatile变量，随后线程B读这个volatile变量的过程实质上是线程A通过主内存向线程B发送消息。</li></ul></li></ul><h1 id="_21-volatile内存语义的实现" tabindex="-1"><a class="header-anchor" href="#_21-volatile内存语义的实现"><span>21. volatile内存语义的实现</span></a></h1><ul><li>为了实现volatile内存语义，JMM会分别限制这编译器重排序和处理器重排序。JMM针对编译器制定的volatile重排序规则表。<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/f66640919403ca0772f31.jpg" alt="volatile重排序规则表.png"></li><li>为了实现volatile的内存语义，编译器在生成字节码时，会在指令序列中插入内存屏障来禁止特定类型的处理器重排序。下面是基于保守策略的JMM内存屏障插入策略.可以保证在任意处理器平台，任意的程序中都能得到正确的volatile内存语义。 <ul><li>在每个volatile写操作的前面插入一个StoreStore屏障。</li><li>在每个volatile写操作的后面插入一个StoreLoad屏障。</li><li>在每个volatile读操作的后面插入一个LoadLoad屏障。</li><li>在每个volatile读操作的后面插入一个LoadStore屏障。</li></ul></li><li>下面是保守策略下，volatile写插入内存屏障后生成的指令序列示意图，<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/947cfcb6466bf62c7ecf4.jpg" alt="volatile写插入内存屏障后生成的指令序列.png"></li><li>StoreStore屏障可以保证在volatile写之前，其前面的所有普通写操作已经对任意处理器可见了。这是因为StoreStore屏障将保障上面所有的普通写在volatile写之前刷新到主内存。</li><li>StoreLoad屏障可以保证volatile写与后面可能有的volatile读/写操作重排序。因为编译器常常无法准确判断在一个volatile写的后面是否需要插入一个StoreLoad屏障（比如，一个volatile写之后方法立即return）。为了保证能正确实现volatile的内存语义，JMM在采取了保守策略：在每个volatile写的后面，或者在每个volatile读的前面插入一个StoreLoad屏障。从整体执行效率的角度考虑，JMM最终选择了在每个volatile写的后面插入一个StoreLoad屏障。因为volatile写-读内存语义的常见使用模式是：一个写线程写volatile变量，多个读线程读同一个volatile变量。当读线程的数量大大超过写线程时，选择在volatile写之后插入StoreLoad屏障将带来可观的执行效率的提升。</li><li>下面是在保守策略下，volatile读插入内存屏障后生成的指令序列示意图<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/98c014e7330736cf5b7c9.jpg" alt="volatile读插入内存屏障后生成的指令序列.png"></li><li>LoadLoad屏障用来禁止处理器把上面的volatile读与下面的普通读重排序。</li><li>LoadStore屏障用来禁止处理器把上面的volatile读与下面的普通写重排序。</li><li>上述volatile写和volatile读的内存屏障插入策略非常保守。在实际执行时，只要不改变volatile写-读的内存语义，编译器可以根据具体情况省略不必要的屏障。</li></ul><h1 id="_22-锁的内存语义" tabindex="-1"><a class="header-anchor" href="#_22-锁的内存语义"><span>22. 锁的内存语义</span></a></h1><h2 id="_22-1-锁的释放-获取建立的happens-before关系" tabindex="-1"><a class="header-anchor" href="#_22-1-锁的释放-获取建立的happens-before关系"><span>22.1. 锁的释放-获取建立的happens-before关系</span></a></h2><ul><li>锁是Java并发编程中最重要的同步机制。锁除了让临界区互斥执行外，还可以让释放锁的线程向获取同一个锁的线程发送消息。</li></ul><h2 id="_22-2-锁的释放和获取的内存语义" tabindex="-1"><a class="header-anchor" href="#_22-2-锁的释放和获取的内存语义"><span>22.2. 锁的释放和获取的内存语义</span></a></h2><ul><li>当线程释放锁时，JMM会把该线程对应的本地内存中的共享变量刷新到主内存中。</li><li>当线程获取锁时，JMM会把该线程对应的本地内存置为无效。从而使得被监视器保护的临界区代码必须从主内存中读取共享变量。</li><li>对锁释放和锁获取的内存语义做个总结。 <ul><li>线程A释放一个锁，实质上是线程A向接下来将要获取这个锁的某个线程发出了（线程A对共享变量所做修改的）消息。</li><li>线程B获取一个锁，实质上是线程B接收了之前某个线程发出的（在释放这个锁之前对共享变量所做修改的）消息。</li><li>线程A释放锁，随后线程B获取这个锁，这个过程实质上是线程A通过主内存向线程B发送消息。</li></ul></li></ul><h2 id="_22-3-锁内存语义的实现" tabindex="-1"><a class="header-anchor" href="#_22-3-锁内存语义的实现"><span>22.3. 锁内存语义的实现</span></a></h2><ul><li>在ReentrantLock中调用lock()方法获取锁；调用unlock()方法释放锁。ReentrantLock的实现依赖于Java同步器框架AbstractQueuedSynchronizer（AQS）。使用一个整型的volatile变量（state）来维护同步状态，是ReentrantLock内存语义实现的关键。</li><li>ReentrantLock分为公平锁和非公平锁，使用公平锁时，加锁方法lock()调用轨迹如下。 <ul><li>1）ReentrantLock:lock()。</li><li>2）FairSync:lock()。</li><li>3）AbstractQueuedSynchronizer:acquire(int arg)。</li><li>4）ReentrantLock:tryAcquire(int acquires)。真正开始加锁，下面是该方法的源代码。</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>protected final boolean tryAcquire(int acquires) {
    final Thread current = Thread.currentThread();
        int c = getState(); // 获取锁的开始，首先读volatile变量state
        if (c == 0) {
            if (isFirst(current) &amp;&amp;
            compareAndSetState(0, acquires)) {
                setExclusiveOwnerThread(current);
                return true;
            }
        }
        else if (current == getExclusiveOwnerThread()) {
            int nextc = c + acquires;
            if (nextc &lt; 0)
                throw new Error(&quot;Maximum lock count exceeded&quot;);
            setState(nextc);
            return true;
        }
    return false;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在使用公平锁时，解锁方法unlock()调用轨迹如下。 <ul><li>1）ReentrantLock:unlock()。</li><li>2）AbstractQueuedSynchronizer:release(int arg)。</li><li>3）Sync:tryRelease(int releases)。真正开始释放锁，</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>protected final boolean tryRelease(int releases) {
    int c = getState() - releases;
    if (Thread.currentThread() != getExclusiveOwnerThread())
        throw new IllegalMonitorStateException();
    boolean free = false;
    if (c == 0) {
        free = true;
        setExclusiveOwnerThread(null);
    }
    setState(c); // 释放锁的最后，写volatile变量state
    return free;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>公平锁在释放锁的最后写volatile变量state，在获取锁时首先读这个volatile变量。根据volatile的happens-before规则，释放锁的线程在写volatile变量之前可见的共享变量，在获取锁的线程读取同一个volatile变量后将立即变得对获取锁的线程可见。</li><li>非公平锁的内存语义的实现。非公平锁的释放和公平锁完全一样，使用非公平锁时，加锁方法lock()调用轨迹如下。</li><li>1）ReentrantLock:lock()。</li><li>2）NonfairSync:lock()。</li><li>3）AbstractQueuedSynchronizer:compareAndSetState(int expect,int update)。真正开始加锁</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>protected final boolean compareAndSetState(int expect, int update) {
    return unsafe.compareAndSwapInt(this, stateOffset, expect, update);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>该方法以原子操作的方式更新state变量，把compareAndSet()方法调用简称为CAS。JDK文档对该方法的说明如下：如果当前状态值等于预期值，则以原子方式将同步状态设置为给定的更新值。此操作具有volatile读和写的内存语义。</li><li>分别从编译器和处理器的角度来分析，CAS如何同时具有volatile读和volatile写的内存语义。编译器不会对volatile读与volatile读后面的任意内存操作重排序；编译器不会对volatile写与volatile写前面的任意内存操作重排序。组合这两个条件，意味着为了同时实现volatile读和volatile写的内存语义，编译器不能对CAS与CAS前面和后面的任意内存操作重排序。</li><li>在常见的intel X86处理器中，CAS是如何同时具有volatile读和volatile写的内存语义的。下面是sun.misc.Unsafe类的compareAndSwapInt()方法的源代码。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public final native boolean compareAndSwapInt(Object o, long offset,int expected,int x);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>这个本地方法在openjdk中依次调用的c++代码为：unsafe.cpp，atomic.cpp和atomic_windows_x86.inline.hpp。这个本地方法的最终实现在openjdk的如下位置：openjdk-7-fcs-src-b147-27_jun_2011\\openjdk\\hotspot\\src\\os_cpu\\windows_x86\\vm\\atomic_windows_x86.inline.hpp（对应于Windows操作系统，X86处理器）。下面是对应于intel X86处理器的源代码的片段。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>inline jint Atomic::cmpxchg (jint exchange_value, volatile jint* dest,
jint compare_value) {
    // alternative for InterlockedCompareExchange
    int mp = os::is_MP();
    __asm {
        mov edx, dest
        mov ecx, exchange_value
        mov eax, compare_value
        LOCK_IF_MP(mp)
        cmpxchg dword ptr [edx], ecx
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>程序会根据当前处理器的类型来决定是否为cmpxchg指令添加lock前缀。如果程序是在多处理器上运行，就为cmpxchg指令加上lock前缀（Lock Cmpxchg）。反之，如果程序是在单处理器上运行，就省略lock前缀（单处理器自身会维护单处理器内的顺序一致性，不需要lock前缀提供的内存屏障效果）。</li><li>intel的手册对lock前缀的说明如下。 <ul><li>1）确保对内存的读-改-写操作原子执行。在Pentium及Pentium之前的处理器中，带有lock前缀的指令在执行期间会锁住总线，使得其他处理器暂时无法通过总线访问内存。很显然，这会带来昂贵的开销。从Pentium 4、Intel Xeon及P6处理器开始，Intel使用缓存锁定（Cache Locking）来保证指令执行的原子性。缓存锁定将大大降低lock前缀指令的执行开销。</li><li>2）禁止该指令，与之前和之后的读和写指令重排序。</li><li>3）把写缓冲区中的所有数据刷新到内存中。</li><li>第2点和第3点所具有的内存屏障效果，足以同时实现volatile读和volatile写的内存语义。</li></ul></li><li>对公平锁和非公平锁的内存语义做个总结。 <ul><li>公平锁和非公平锁释放时，最后都要写一个volatile变量state。</li><li>公平锁获取时，首先会去读volatile变量。</li><li>非公平锁获取时，首先会用CAS更新volatile变量，这个操作同时具有volatile读和volatile写的内存语义。</li></ul></li><li>对ReentrantLock的分析可以看出，锁释放-获取的内存语义的实现至少有下面两种方式。 <ul><li>1）利用volatile变量的写-读所具有的内存语义。</li><li>2）利用CAS所附带的volatile读和volatile写的内存语义。</li></ul></li></ul><h2 id="_22-4-concurrent包的实现" tabindex="-1"><a class="header-anchor" href="#_22-4-concurrent包的实现"><span>22.4. concurrent包的实现</span></a></h2><ul><li>由于Java的CAS同时具有volatile读和volatile写的内存语义，因此Java线程之间的通信现在有了下面4种方式。 <ul><li>1）A线程写volatile变量，随后B线程读这个volatile变量。</li><li>2）A线程写volatile变量，随后B线程用CAS更新这个volatile变量。</li><li>3）A线程用CAS更新一个volatile变量，随后B线程用CAS更新这个volatile变量。</li><li>4）A线程用CAS更新一个volatile变量，随后B线程读这个volatile变量。</li></ul></li><li>Jconcurrent包的源代码通用化的实现模式。首先，声明共享变量为volatile。然后，使用CAS的原子条件更新来实现线程之间的同步。同时，配合以volatile的读/写和CAS所具有的volatile读和写的内存语义来实现线程之间的通信。</li><li>AQS，非阻塞数据结构和原子变量类（java.util.concurrent.atomic包中的类），这些concurrent包中的基础类都是使用这种模式来实现的，而concurrent包中的高层类又是依赖于这些基础类来实现的。</li></ul><h2 id="_22-5-final域的内存语义" tabindex="-1"><a class="header-anchor" href="#_22-5-final域的内存语义"><span>22.5. final域的内存语义</span></a></h2><ul><li>与锁和volatile相比，对final域的读和写更像是普通的变量访问。</li></ul><h3 id="_22-5-1-final域的重排序规则" tabindex="-1"><a class="header-anchor" href="#_22-5-1-final域的重排序规则"><span>22.5.1. final域的重排序规则</span></a></h3><ul><li>在构造函数内对一个final域的写入，与随后把这个被构造对象的引用赋值给一个引用变量，这两个操作之间不能重排序。</li><li>针对单个处理器，初次读一个包含final域的对象的引用，与随后初次读这个final域，这两个操作之间不能重排序。编译器会在读final域操作的前面插入一个LoadLoad屏障。</li></ul><h3 id="_22-5-2-写final域的重排序规则" tabindex="-1"><a class="header-anchor" href="#_22-5-2-写final域的重排序规则"><span>22.5.2. 写final域的重排序规则</span></a></h3><ul><li>写final域的重排序规则禁止把final域的写重排序到构造函数之外。这个规则的实现包含下面2个方面。 <ul><li>JMM禁止编译器把final域的写重排序到构造函数之外。</li><li>编译器会在final域的写之后，构造函数return之前，插入StoreStore屏障禁止处理器把final域的写重排序到构造函数之外</li></ul></li><li>写final域的重排序规则可以确保：在对象引用为任意线程可见之前，对象的final域已经被正确初始化过了，而普通域不具有这个保障。</li></ul><h3 id="_22-5-3-读final域的重排序规则" tabindex="-1"><a class="header-anchor" href="#_22-5-3-读final域的重排序规则"><span>22.5.3. 读final域的重排序规则</span></a></h3><ul><li>初次读对象引用与初次读该对象包含的final域，这两个操作之间存在间接依赖关系。因此编译器不会重排序这两个操作。读final域的重排序规则可以确保：在读一个对象的final域之前，一定会先读包含这个final域的对象的引用</li></ul><h3 id="_22-5-4-final域为引用类型" tabindex="-1"><a class="header-anchor" href="#_22-5-4-final域为引用类型"><span>22.5.4. final域为引用类型</span></a></h3><ul><li>对于引用类型，写final域的重排序规则对编译器和处理器增加了如下约束：在构造函数内对一个final引用的对象的成员域<br> 的写入，与随后在构造函数外把这个被构造对象的引用赋值给一个引用变量，这两个操作之间不能重排序。</li></ul><h3 id="_22-5-5-为什么final引用不能从构造函数内-溢出" tabindex="-1"><a class="header-anchor" href="#_22-5-5-为什么final引用不能从构造函数内-溢出"><span>22.5.5. 为什么final引用不能从构造函数内“溢出”</span></a></h3><ul><li>写final域的重排序规则可以确保：在引用变量为任意线程可见之前，该引用变量指向的对象的final域已经在构造函数中被正确初始化过了。其实还需要一个保证：在构造函数内部，不能让这个被构造对象的引用为其他线程所见，也就是对象引用不能在构造函数中“逸出”。</li><li>在构造函数返回前，被构造对象的引用不能为其他线程所见，因为此时的final域可能还没有被初始化。在构造函数返回后，任意线程都将保证能看到final域正确初始化之后的值。</li></ul><h3 id="_22-5-6-final语义在处理器中的实现" tabindex="-1"><a class="header-anchor" href="#_22-5-6-final语义在处理器中的实现"><span>22.5.6. final语义在处理器中的实现</span></a></h3><ul><li>以X86处理器为例，说明final语义在处理器中的具体实现。</li><li>写final域的重排序规则会要求编译器在final域的写之后，构造函数return之前插入一个StoreStore障屏。读final域的重排序规则要求编译器在读final域的操作前面插入一个LoadLoad屏障。</li></ul><h3 id="_22-5-7-happens-before" tabindex="-1"><a class="header-anchor" href="#_22-5-7-happens-before"><span>22.5.7. happens-before</span></a></h3><h3 id="_22-5-8-happens-before的定义" tabindex="-1"><a class="header-anchor" href="#_22-5-8-happens-before的定义"><span>22.5.8. happens-before的定义</span></a></h3><ul><li>as-if-serial语义保证单线程内程序的执行结果不被改变，happens-before关系保证正确同步的多线程程序的执行结果不被改变。</li><li>as-if-serial语义给编写单线程程序的程序员创造了一个幻境：单线程程序是按程序的顺序来执行的。happens-before关系给编写正确同步的多线程程序的程序员创造了一个幻境：正确同步的多线程程序是按happens-before指定的顺序来执行的。</li><li>as-if-serial语义和happens-before这么做的目的，都是为了在不改变程序执行结果的前提下，尽可能地提高程序执行的并行度。</li></ul><h3 id="_22-5-9-happens-before规则" tabindex="-1"><a class="header-anchor" href="#_22-5-9-happens-before规则"><span>22.5.9. happens-before规则</span></a></h3><ul><li>《JSR-133:Java Memory Model and Thread Specification》定义了如下happens-before规则。 <ul><li>1）程序顺序规则：一个线程中的每个操作，happens-before于该线程中的任意后续操作。</li><li>2）监视器锁规则：对一个锁的解锁，happens-before于随后对这个锁的加锁。</li><li>3）volatile变量规则：对一个volatile域的写，happens-before于任意后续对这个volatile域的读。</li><li>4）传递性：如果A happens-before B，且B happens-before C，那么A happens-before C。</li><li>5）start()规则：如果线程A执行操作ThreadB.start()（启动线程B），那么A线程的ThreadB.start()操作happens-before于线程B中的任意操作。</li><li>6）join()规则：如果线程A执行操作ThreadB.join()并成功返回，那么线程B中的任意操作happens-before于线程A从ThreadB.join()操作成功返回。</li></ul></li></ul><h3 id="_22-5-10-双重检查锁定与延迟初始化" tabindex="-1"><a class="header-anchor" href="#_22-5-10-双重检查锁定与延迟初始化"><span>22.5.10. 双重检查锁定与延迟初始化</span></a></h3><ul><li>在Java多线程程序中，有时候需要采用延迟初始化来降低初始化类和创建对象的开销。双重检查锁定是常见的延迟初始化技术，</li></ul><h3 id="_22-5-11-3-8-1-双重检查锁定的由来" tabindex="-1"><a class="header-anchor" href="#_22-5-11-3-8-1-双重检查锁定的由来"><span>22.5.11. - 3.8.1 双重检查锁定的由来</span></a></h3><ul><li>双重检查锁定如果变量不是volatile的话可能有问题，因为创建对象可以分为3步 1：分配对象的内存空间 2：初始化对象 3：设置instance指向刚分配的内存地址。2和3之间，可能会被重排序，因为此时并不影响程序执行结果。同时可能在多线程情况下，读线程读取到2，将会访问到一个未初始化的对象。添加volatile可以阻止2和3重排序</li><li>基于类初始化的解决方案：JVM在类的初始化阶段（即在Class被加载后，且被线程使用之前），会执行类的初始化。在执行类的初始化期间，JVM会去获取一个锁。这个锁可以同步多个线程对同一个类的初始化。基于这个特性，可以实现另一种线程安全的延迟初始化</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class InstanceFactory {
    private static class InstanceHolder {
        public static Instance instance = new Instance();
    }
    public static Instance getInstance() {
        return InstanceHolder.instance ; // 这里将导致InstanceHolder类被初始化
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>初始化一个类，包括执行这个类的静态初始化和初始化在这个类中声明的静态字段。根据Java语言规范，在首次发生下列任意一种情况时，一个类或接口类型T将被立即初始化。 <ul><li>1）T是一个类，而且一个T类型的实例被创建。</li><li>2）T是一个类，且T中声明的一个静态方法被调用。</li><li>3）T中声明的一个静态字段被赋值。</li><li>4）T中声明的一个静态字段被使用，而且这个字段不是一个常量字段。(InstanceFactory符合)</li><li>5）T是一个顶级类（Top Level Class，见Java语言规范的§7.6），而且一个断言语句嵌套在T内部被执行。</li></ul></li><li>由于Java语言是多线程的，多个线程可能在同一时间尝试去初始化同一个类或接口（比如这里多个线程可能在同一时刻调用getInstance()方法来初始化InstanceHolder类）。因此，在Java中初始化一个类或者接口时，需要做细致的同步处理。</li><li>Java语言规范规定，对于每一个类或接口C，都有一个唯一的初始化锁LC与之对应。JVM在类初始化期间会获取这个初始化锁，并且每个线程至少获取一次锁来确保这个类已经被初始化过了。</li><li>对于类或接口的初始化过程 <ul><li>第1阶段：通过在Class对象上同步（即获取Class对象的初始化锁），来控制类或接口的初始化。这个获取锁的线程会一直等待，直到当前线程能够获取到这个初始化锁。</li><li>第2阶段：线程A执行类的初始化，同时线程B在初始化锁对应的condition上等待。</li><li>第3阶段：线程A设置state=initialized，然后唤醒在condition中等待的所有线程。</li><li>第4阶段：线程B结束类的初始化处理。</li><li>第5阶段：线程C执行类的初始化的处理。</li></ul></li></ul><h1 id="_23-java内存模型综述" tabindex="-1"><a class="header-anchor" href="#_23-java内存模型综述"><span>23. Java内存模型综述</span></a></h1><h2 id="_23-1-处理器的内存模型" tabindex="-1"><a class="header-anchor" href="#_23-1-处理器的内存模型"><span>23.1. 处理器的内存模型</span></a></h2><ul><li>顺序一致性内存模型是一个理论参考模型，JMM和处理器内存模型在设计时通常会以顺序一致性内存模型为参照。在设计时，JMM和处理器内存模型会对顺序一致性模型做一些放松，因为如果完全按照顺序一致性模型来实现处理器和JMM，那么很多的处理器和编译器优化都要被禁止，这对执行性能将会有很大的影响。</li></ul><h2 id="_23-2-各种内存模型之间的关系" tabindex="-1"><a class="header-anchor" href="#_23-2-各种内存模型之间的关系"><span>23.2. 各种内存模型之间的关系</span></a></h2><ul><li>JMM是一个语言级的内存模型，处理器内存模型是硬件级的内存模型，顺序一致性内存模型是一个理论参考模型。下面是语言内存模型、处理器内存模型和顺序一致性内存模型的</li><li>常见的4种处理器内存模型比常用的3中语言内存模型要弱，处理器内存模型和语言内存模型都比顺序一致性内存模型要弱。同处理器内存模型一样，越是追求执行性能的语言，内存模型设计得会越弱。</li></ul><h2 id="_23-3-jmm的内存可见性保证" tabindex="-1"><a class="header-anchor" href="#_23-3-jmm的内存可见性保证"><span>23.3. JMM的内存可见性保证</span></a></h2><ul><li>按程序类型，Java程序的内存可见性保证可以分为下列3类。 <ul><li>单线程程序。单线程程序不会出现内存可见性问题。编译器、runtime和处理器会共同确保单线程程序的执行结果与该程序在顺序一致性模型中的执行结果相同。</li><li>正确同步的多线程程序。正确同步的多线程程序的执行将具有顺序一致性（程序的执行结果与该程序在顺序一致性内存模型中的执行结果相同）。这是JMM关注的重点，JMM通过限制编译器和处理器的重排序来为程序员提供内存可见性保证。</li><li>未同步/未正确同步的多线程程序。JMM为它们提供了最小安全性保障：线程执行时读取到的值，要么是之前某个线程写入的值，要么是默认值（0、null、false）。</li></ul></li><li>只要多线程程序是正确同步的，JMM保证该程序在任意的处理器平台上的执行结果，与该程序在顺序一致性内存模型中的执行结果一致。</li></ul><h1 id="_24-线程优先级" tabindex="-1"><a class="header-anchor" href="#_24-线程优先级"><span>24. 线程优先级</span></a></h1><ul><li>在Java线程中，通过一个整型成员变量priority来控制优先级，优先级的范围从1~10，在线程构建的时候可以通过setPriority(int)方法来修改优先级，默认优先级是5，优先级高的线程分配时间片的数量要多于优先级低的线程。设置线程优先级时，针对频繁阻塞（休眠或者I/O操作）的线程需要设置较高优先级，而偏重计算（需要较多CPU时间或者偏运算）的线程则设置较低的优先级，确保处理器不会被独占。</li><li>程序正确性不能依赖线程的优先级高低。</li></ul><h1 id="_25-中断" tabindex="-1"><a class="header-anchor" href="#_25-中断"><span>25. 中断</span></a></h1><ul><li>中断它表示一个运行中的线程是否被其他线程进行了中断操作。中断好比其他线程对该线程打了个招呼，其他线程通过调用该线程的interrupt()方法对其进行中断操作。</li><li>线程通过检查自身是否被中断来进行响应，线程通过方法isInterrupted()来进行判断是否被中断，也可以调用静态方法Thread.interrupted()对当前线程的中断标识位进行复位。如果该线程已经处于终结状态，即使该线程被中断过，在调用该线程对象的isInterrupted()时依旧会返回false。</li><li>许多声明抛出InterruptedException的方法（例如Thread.sleep(long millis)方法）这些方法在抛出InterruptedException之前，Java虚拟机会先将该线程的中断标识位清除，然后抛出InterruptedException，此时调用isInterrupted()方法将会返回false。</li></ul><h1 id="_26-线程间通信" tabindex="-1"><a class="header-anchor" href="#_26-线程间通信"><span>26. 线程间通信</span></a></h1><h2 id="_26-1-volatile和synchronized关键字" tabindex="-1"><a class="header-anchor" href="#_26-1-volatile和synchronized关键字"><span>26.1. volatile和synchronized关键字</span></a></h2><ul><li>Java支持多个线程同时访问一个对象或者对象的成员变量，由于每个线程可以拥有这个变量的拷贝（虽然对象以及成员变量分配的内存是在共享内存中的，但是每个执行的线程还是可以拥有一份拷贝，目的是加速程序的执行，），所以程序在执行过程中，一个线程看到的变量并不一定是最新的。</li><li>关键字volatile可以用来修饰字段（成员变量），就是告知程序任何对该变量的访问均需要从共享内存中获取，而对它的改变必须同步刷新回共享内存，它能保证所有线程对变量访问的可见性。</li><li>关键字synchronized可以修饰方法或者以同步块的形式来进行使用，它主要确保多个线程在同一个时刻，只能有一个线程处于方法或者同步块中，它保证了线程对变量访问的可见性和排他性。</li><li>对于同步块的实现使用了monitorenter和monitorexit指令，而同步方法则是依靠方法修饰符上的ACC_SYNCHRONIZED来完成的。无论采用哪种方式，其本质是对一个对象的监视器（monitor）进行获取，而这个获取过程是排他的，也就是同一时刻只能有一个<br> 线程获取到由synchronized所保护对象的监视器。</li><li>任意一个对象都拥有自己的监视器，当这个对象由同步块或者这个对象的同步方法调用时，执行方法的线程必须先获取到该对象的监视器才能进入同步块或者同步方法，而没有获取到监视器（执行该方法）的线程将会被阻塞在同步块和同步方法的入口处，进入BLOCKED<br> 状态。</li><li>任意线程对Object（Object由synchronized保护）的访问，首先要获得Object的监视器。如果获取失败，线程进入同步队列，线程状态变为BLOCKED。当访问Object的前驱（获得了锁的线程）释放了锁，则该释放操作唤醒阻塞在同步队列中的线程，使其重新尝试对监视器的获取。</li></ul><h1 id="_27-等待-通知机制" tabindex="-1"><a class="header-anchor" href="#_27-等待-通知机制"><span>27. 等待/通知机制</span></a></h1><ul><li>一个线程修改了一个对象的值，而另一个线程感知到了变化，然后进行相应的操作，整个过程开始于一个线程，而最终执行又是另一个线程。前者是生产者，后者就是消费者，</li><li>notify：通知一个在对象上等待的线程，使其从wait()方法返回，而返回的前提是该线程获取到了对象的锁</li><li>notifyAll：通知所有等待在该对象上的线程</li><li>wait：调用该方法的线程进入WAITING状态，只有等待另外线程的通知或被中断才会返回，调用wait()方法后，会释放对象的锁</li><li>wait(long)超时等待一段时间，等待长达n毫秒，如果没有通知就超时返回</li><li>wait(long, int)对于超时时间更细粒度的控制，可以达到纳秒</li><li>等待/通知机制，是指一个线程A调用了对象O的wait()方法进入等待状态，而另一个线程B调用了对象O的notify()或者notifyAll()方法，线程A收到通知后从对象O的wait()方法返回，进而执行后续操作。上述两个线程通过对象O来完成交互，而对象上的wait()和notify/notifyAll()的关系就如同开关信号一样，用来完成等待方和通知方之间的交互工作。</li></ul><h1 id="_28-管道输入-输出流" tabindex="-1"><a class="header-anchor" href="#_28-管道输入-输出流"><span>28. 管道输入/输出流</span></a></h1><ul><li>管道输入/输出流主要用于线程之间的数据传输，而传输的媒介为内存。包括了如下4种具体实现：PipedOutputStream、PipedInputStream、PipedReader和PipedWriter，前两种面向字节，而后两种面向字符。对于Piped类型的流，必须先要进行绑定，也就是调用connect()方法，如果没有将输入/输出流绑定起来，对于该流的访问将会抛出异常。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class Piped {
    public static void main(String[] args) throws Exception {
        PipedWriter out = new PipedWriter();
        PipedReader in = new PipedReader();
        // 将输出流和输入流进行连接，否则在使用时会抛出IOException
        out.connect(in);
        Thread printThread = new Thread(new Print(in), &quot;PrintThread&quot;);
        printThread.start();
        int receive = 0;
        try {
            while ((receive = System.in.read()) != -1) {
                out.write(receive);
            }
        } finally {
            out.close();
        }
    }
    static class Print implements Runnable {
        private PipedReader in;
        public Print(PipedReader in) {
            this.in = in;
        }
        public void run() {
            int receive = 0;
            try {
                while ((receive = in.read()) != -1) {
                    System.out.print((char) receive);
                }
            } catch (IOException ex) {
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_29-threadlocal的使用" tabindex="-1"><a class="header-anchor" href="#_29-threadlocal的使用"><span>29. ThreadLocal的使用</span></a></h1><ul><li>ThreadLocal线程变量，是一个以ThreadLocal对象为键、任意对象为值的存储结构。一个线程可以根据一个ThreadLocal对象查询到绑定在这个线程上的一个值。</li><li>可通过set(T)方法来设置一个值，在当前线程下再通过get()方法获取到原先设置的值。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class Profiler {
    // 第一次get()方法调用时会进行初始化（如果set方法没有调用），每个线程会调用一次
    private static final ThreadLocal&lt;Long&gt; TIME_THREADLOCAL = new ThreadLocal&lt;Long&gt;() {
        protected Long initialValue() {
            return System.currentTimeMillis();
        }
    };
    public static final void begin() {
        TIME_THREADLOCAL.set(System.currentTimeMillis());
    }
    public static final long end() {
        return System.currentTimeMillis() - TIME_THREADLOCAL.get();
    }
    public static void main(String[] args) throws Exception {
        Profiler.begin();
        TimeUnit.SECONDS.sleep(1);
        System.out.println(&quot;Cost: &quot; + Profiler.end() + &quot; mills&quot;);
    }
}
输出结果。Cost: 1001 mills
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Profiler可以被复用在方法调用耗时统计的功能上，在方法的入口前执行begin()方法，在方法调用后执行end()方法，好处是两个方法的调用不用在一个方法或者类中，比如在AOP（面向方面编程）中，可以在方法调用前的切入点执行begin()方法，而在方法调用后的切入点执行end()方法，这样依旧可以获得方法的执行耗时。</li></ul><h1 id="_30-等待超时模式" tabindex="-1"><a class="header-anchor" href="#_30-等待超时模式"><span>30. 等待超时模式</span></a></h1><ul><li>调用一个方法时等待一段时间，如果该方法能够在给定的时间段之内得到结果，那么将结果立刻返回，反之，超时返回默认结果。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>// 对当前对象加锁
public synchronized Object get(long mills) throws InterruptedException {
    long future = System.currentTimeMillis() + mills;
    long remaining = mills;
    // 当超时大于0并且result返回值不满足要求
    while ((result == null) &amp;&amp; remaining &gt; 0) {
        wait(remaining);
        remaining = future - System.currentTimeMillis();
    }
    return result;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_31-数据库连接池示例" tabindex="-1"><a class="header-anchor" href="#_31-数据库连接池示例"><span>31. 数据库连接池示例</span></a></h1><ul><li>使用等待超时模式来构造一个简单的数据库连接池，在示例中模拟从连接池中获取、使用和释放连接的过程，而客户端获取连接的过程被设定为等待超时的模式，也就是在1000毫秒内如果无法获取到可用连接，将会返回给客户端一个null。设定连接池的大小为10<br> 个，然后通过调节客户端的线程数来模拟无法获取连接的场景。<br> 首先看一下连接池的定义。它通过构造函数初始化连接的最大上限，通过一个双向队列<br> 来维护连接，调用方需要先调用fetchConnection(long)方法来指定在多少毫秒内超时获取连接，<br> 当连接使用完成后，需要调用releaseConnection(Connection)方法将连接放回线程池，示例如代<br> 码清单4-16所示。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
public class ConnectionPool {
    private LinkedList&lt;Connection&gt; pool = new LinkedList&lt;Connection&gt;();
    public ConnectionPool(int initialSize) {
        if (initialSize &gt; 0) {
            for (int i = 0; i &lt; initialSize; i++) {
                pool.addLast(ConnectionDriver.createConnection());
            }
        }   
    }
    public void releaseConnection(Connection connection) {
        if (connection != null) {
            synchronized (pool) {
                // 连接释放后需要进行通知，这样其他消费者能够感知到连接池中已经归还了一个连接
                pool.addLast(connection);
                pool.notifyAll();
            }
        }
    }
    // 在mills内无法获取到连接，将会返回null
    public Connection fetchConnection(long mills) throws InterruptedException {
        synchronized (pool) {
             // 完全超时
            if (mills &lt;= 0) {
                while (pool.isEmpty()) {
                    pool.wait();
                }
                return pool.removeFirst();
            } else {
                long future = System.currentTimeMillis() + mills;
                long remaining = mills;
                while (pool.isEmpty() &amp;&amp; remaining &gt; 0) {
                    pool.wait(remaining);
                    remaining = future - System.currentTimeMillis();
                }
                Connection result = null;
                if (!pool.isEmpty()) {
                    result = pool.removeFirst();
                }
                return result;
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>由于java.sql.Connection是一个接口，最终的实现是由数据库驱动提供方来实现的，考虑到只是个示例，我们通过动态代理构造了一个Connection，该Connection的代理实现仅仅是在commit()方法调用时休眠100毫秒，示例如代码清单4-17所示。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class ConnectionDriver {
    static class ConnectionHandler implements InvocationHandler {
        public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
            if (method.getName().equals(&quot;commit&quot;)) {
                TimeUnit.MILLISECONDS.sleep(100);
            }
            return null;
        }
     }
    // 创建一个Connection的代理，在commit时休眠100毫秒
    public static final Connection createConnection() {
        return (Connection) Proxy.newProxyInstance(ConnectionDriver.class.getClassLoader(),
        new Class&lt;&gt;[] { Connection.class }, new ConnectionHandler());
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>测试简易数据库连接池的工作情况，模拟客户端ConnectionRunner获取、使用、最后释放连接的过程，当它使用时连接将会增加获取到连接的数量，反之，将会增加未获取到连接的数量，</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class ConnectionPoolTest {
    static ConnectionPool pool = new ConnectionPool(10);
    // 保证所有ConnectionRunner能够同时开始
    static CountDownLatch start = new CountDownLatch(1);
    // main线程将会等待所有ConnectionRunner结束后才能继续执行
    static CountDownLatch end;
    public static void main(String[] args) throws Exception {
        // 线程数量，可以修改线程数量进行观察
        int threadCount = 10;
        end = new CountDownLatch(threadCount);
        int count = 20;
        AtomicInteger got = new AtomicInteger();
        AtomicInteger notGot = new AtomicInteger();
        for (int i = 0; i &lt; threadCount; i++) {
            Thread thread = new Thread(new ConnetionRunner(count, got, notGot),
            &quot;ConnectionRunnerThread&quot;);
            thread.start();
        }
        start.countDown();
        end.await();
        System.out.println(&quot;total invoke: &quot; + (threadCount * count));
        System.out.println(&quot;got connection: &quot; + got);
        System.out.println(&quot;not got connection &quot; + notGot);
    }
    static class ConnetionRunner implements Runnable {
        int count;
        AtomicInteger got;
        AtomicInteger notGot;
        public ConnetionRunner(int count, AtomicInteger got, AtomicInteger notGot) {
            this.count = count;
            this.got = got;
            this.notGot = notGot;
        }
        public void run() {
            try {
                start.await();
            } catch (Exception ex) {
            }
            while (count &gt; 0) {
                try {
                    // 从线程池中获取连接，如果1000ms内无法获取到，将会返回null
                    // 分别统计连接获取的数量got和未获取到的数量notGot
                    Connection connection = pool.fetchConnection(1000);
                    if (connection != null) {
                        try {
                            connection.createStatement();
                            connection.commit();
                        } finally {
                            pool.releaseConnection(connection);
                            got.incrementAndGet();
                        }
                    } else {
                        notGot.incrementAndGet();
                    }
                } catch (Exception ex) {
                } finally {
                    count--;
                }
            }
            end.countDown();
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>上述示例中使用了CountDownLatch来确保ConnectionRunnerThread能够同时开始执行，并且在全部结束之后，才使main线程从等待状态中返回。在资源一定的情况下（连接池中的10个连接），随着客户端线程的逐步增加，客户端出现超时无法获取连接的比率不断升高。虽然客户端线程在这种超时获取的模式下会出现连接无法获取的情况，但是它能够保证客户端线程不会一直挂在连接获取的操作上，而是“按时”返回，并告知客户端连接获取出现问题，是系统的一种自我保护机制。数据库连接池的设计也可以复用到其他的资源获取的场景，针对昂贵资源（比如数据库连接）的获取都应该加以超时限制。</li></ul><h1 id="_32-一个基于线程池技术的简单web服务器" tabindex="-1"><a class="header-anchor" href="#_32-一个基于线程池技术的简单web服务器"><span>32. 一个基于线程池技术的简单Web服务器</span></a></h1><ul><li>浏览器都支持多线程访问，比如说在请求一个HTML页面的时候，页面中包含的图片资源、样式资源会被浏览器发起并发的获取，这样用户就不会遇到一直等到一个图片完全下载完成才能继续查看文字内容的尴尬情况。</li><li>大部分Web服务器都是支持并发访问的。常用的Java Web服务器，如Tomcat、Jetty在其处理请求的过程中都使用到了线程池技术。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class SimpleHttpServer {
    // 处理HttpRequest的线程池
    static ThreadPool&lt;HttpRequestHandler&gt; threadPool = new DefaultThreadPool&lt;HttpRequestHandler&gt;(1);
    // SimpleHttpServer的根路径
    static String basePath;
    static ServerSocket serverSocket;
    // 服务监听端口
    static int port = 8080;
    public static void setPort(int port) {
        if (port &gt; 0) {
            SimpleHttpServer.port = port;
        }
    }
    public static void setBasePath(String basePath) {
        if (basePath != null &amp;&amp; new File(basePath).exists() &amp;&amp; new File(basePath).isDirectory()) {
                SimpleHttpServer.basePath = basePath;
        }
    }
    // 启动SimpleHttpServer
    public static void start() throws Exception {
        serverSocket = new ServerSocket(port);
        Socket socket = null;
        while ((socket = serverSocket.accept()) != null) {
            // 接收一个客户端Socket，生成一个HttpRequestHandler，放入线程池执行
            threadPool.execute(new HttpRequestHandler(socket));
        }
        serverSocket.close();
    }
    static class HttpRequestHandler implements Runnable {
        private Socket socket;
        public HttpRequestHandler(Socket socket) {
            this.socket = socket;
        }
        @Override
        public void run() {
            String line = null;
            BufferedReader br = null;
            BufferedReader reader = null;
            PrintWriter out = null;
            InputStream in = null;
            try {
                reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
                String header = reader.readLine();
                // 由相对路径计算出绝对路径
                String filePath = basePath + header.split(&quot; &quot;)[1];
                out = new PrintWriter(socket.getOutputStream());
                // 如果请求资源的后缀为jpg或者ico，则读取资源并输出
                if (filePath.endsWith(&quot;jpg&quot;) || filePath.endsWith(&quot;ico&quot;)) {
                    in = new FileInputStream(filePath);
                    ByteArrayOutputStream baos = new ByteArrayOutputStream();
                    int i = 0;
                    while ((i = in.read()) != -1) {
                        baos.write(i);
                    }
                    byte[] array = baos.toByteArray();
                    out.println(&quot;HTTP/1.1 200 OK&quot;);
                    out.println(&quot;Server: Molly&quot;);
                    out.println(&quot;Content-Type: image/jpeg&quot;);
                    out.println(&quot;Content-Length: &quot; + array.length);
                    out.println(&quot;&quot;);
                    socket.getOutputStream().write(array, 0, array.length);
                } else {
                    br = new BufferedReader(new InputStreamReader(new
                    FileInputStream(filePath)));
                    out = new PrintWriter(socket.getOutputStream());
                    out.println(&quot;HTTP/1.1 200 OK&quot;);
                    out.println(&quot;Server: Molly&quot;);
                    out.println(&quot;Content-Type: text/html; charset=UTF-8&quot;);
                    out.println(&quot;&quot;);
                    while ((line = br.readLine()) != null) {
                        out.println(line);
                    }
                }
                out.flush();
            } catch (Exception ex) {
                out.println(&quot;HTTP/1.1 500&quot;);
                out.println(&quot;&quot;);
                out.flush();
            } finally {
                close(br, in, reader, out, socket);
            }
        }
    }
    // 关闭流或者Socket
    private static void close(Closeable... closeables) {
        if (closeables != null) {
            for (Closeable closeable : closeables) {
                try {
                    closeable.close();
                } catch (Exception ex) {
                }
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>随着线程池中线程数量的增加，SimpleHttpServer的吞吐量不断增大，响应时间不断变小，线程池的作用非常明显。但是，线程池中线程数量并不是越多越好，具体的数量需要评估每个任务的处理时间，以及当前计算机的处理器能力和数量。使用的线程过少，无法发挥处理器的性能；使用的线程过多，将会增加系统的无故开销，起到相反的作用</li></ul><h1 id="_33-java中的锁" tabindex="-1"><a class="header-anchor" href="#_33-java中的锁"><span>33. Java中的锁</span></a></h1><h2 id="_33-1-lock接口" tabindex="-1"><a class="header-anchor" href="#_33-1-lock接口"><span>33.1. Lock接口</span></a></h2><ul><li>锁是用来控制多个线程访问共享资源的方式，一般来说，一个锁能够防止多个线程同时访问共享资源（但是有些锁可以允许多个线程并发的访问共享资源，比如读写锁）。</li><li>使用synchronized关键字将会隐式地获取锁，简化了同步的管理，但是它将锁的获取和释放固化了，也就是先获取再释放。可是扩展性，可操作性没有Lock显示的锁获取和释放来的好。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Lock lock = new ReentrantLock();
lock.lock();//不要将获取锁的过程写在try块中，因为如果在获取锁（自定义锁的实现）时发生了异常，异常抛出的同时，也会导致锁无故释放
try {
} finally {
    lock.unlock();//在finally块中释放锁，目的是保证在获取到锁之后，最终能够被释放。
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Lock接口提供的synchronized关键字所不具备的主要特性</li><li>尝试非阻塞地获取锁:当前线程尝试获取锁，如果这一时刻锁没有被其他线程获取到，则成功获取并持有锁</li><li>能被中断地获取锁:与synchronized不同，获取到锁的线程能够响应中断，当获取到锁的线程被中断时，中断异常将会被抛出，同时锁会被释放</li><li>超时获取锁:在指定的截止时间之前获取锁，如果截止时间到了仍旧无法获取锁，则返回</li></ul><h1 id="_34-队列同步器" tabindex="-1"><a class="header-anchor" href="#_34-队列同步器"><span>34. 队列同步器</span></a></h1><ul><li><p>队列同步器AbstractQueuedSynchronizer是用来构建锁或者其他同步组件的基础框架，它使用了一个int成员变量表示同步状态，通过内置的FIFO队列来完成资源获取线程的排队工作，能够成为实现大部分同步需求的基础。</p></li><li><p>同步器的主要使用方式是继承，子类通过继承同步器并实现它的抽象方法来管理同步状态，在抽象方法的实现过程中免不了要对同步状态进行更改，这时就需要使用同步器提供的3个方法（getState()、setState(int newState)和compareAndSetState(int expect,int update)）来进行操作，因为它们能够保证状态的改变是安全的。子类推荐被定义为自定义同步组件的静态内部类，同步器自身没有实现任何同步接口，它仅仅是定义了若干同步状态获取和释放的方法来供自定义同步组件使用，同步器既可以支持独占式地获取同步状态，也可以支持共享式地获取同步状态，这样就可以方便实现不同类型的同步组件（ReentrantLock、ReentrantReadWriteLock和CountDownLatch等）。</p></li><li><p>同步器是实现锁（也可以是任意同步组件）的关键，在锁的实现中聚合同步器，利用同步器实现锁的语义。可以这样理解二者之间的关系：锁是面向使用者的，它定义了使用者与锁交互的接口（比如可以允许两个线程并行访问），隐藏了实现细节；同步器面向的是锁的实现者，它简化了锁的实现方式，屏蔽了同步状态管理、线程的排队、等待与唤醒等底层操作。锁和同步器很好地隔离了使用者和实现者所需关注的领域。</p></li><li><p>队列同步器的接口与示例</p></li><li><p>同步器的设计是基于模板方法模式的，使用者需要继承同步器并重写指定的方法，随后将同步器组合在自定义同步组件的实现中，并调用同步器提供的模板方法，而这些模板方法将会调用使用者重写的方法。</p></li><li><p>重写同步器指定的方法时，需要使用同步器提供的如下3个方法来访问或修改同步状态。</p><ul><li>getState()：获取当前同步状态。</li><li>setState(int newState)：设置当前同步状态。</li><li>compareAndSetState(int expect,int update)：使用CAS设置当前状态，该方法能够保证状态设置的原子性。</li></ul></li><li><p>同步器可重写的方法</p><ul><li>boolean tryAcquire(int arg) 独占式获取同步状态，实现该方法需要查询当前状态并判断同步状态是否符合预期，然后再进行CAS设置同步状态</li><li>boolean tryRelease(int arg) 独占式释放同步状态，等待获取同步状态的线程将有机会获取同步状态</li><li>int tryAcquireShared(int arg) 共享式获取同步状态，返回大于等于0的值，表示获取成功，反之获取失败</li><li>boolean tryReleaseShared(int arg)共享式释放同步状态，</li><li>boolean isHeldExclusively() 当前同步器是否在独占模式下被线程占用，一般该方法表示是否被当前线程所独占</li></ul></li><li><p>同步器提供的模板方法</p><ul><li>void acquire(int arg)独占式获取同步状态，如果当前线程获取同步状态成功，则由该方法返回，否则，将会进入同步队列等待，该方法将会调用重写的tryAcquire(int arg) 方法</li><li>void acquireInterruptibly(int arg) 与acquire(intarg)相同，但是该方法响应中断，当前线程未获取到同步状态而进入同步队列中，如果当前线程被中断，则该方法会抛出InterruptedException并返回</li><li>boolean tryAcquireNanos(int arg,long nanos) 在acquireInterruptibly(int arg)基础上增加了超时限制，如果当前线程在超时时间内没有获取到同步状态，那么将会返回false，如果获取到了返回true</li><li>void acquireShared(int arg)共享式的获取同步状态，如果当前线程未获取到同步状态，将会进入同步队列等待，与独占式获取的主要区别是在同一时刻可以有多个线程获取到同步状态</li><li>void acquireSharedInteruptibly(int arg)与acquireShared(int arg)相同，该方法响应中断</li><li>boolean tryAcquireSharedNanos(int arg, long nanos)在acquireSharedInterruptibly(int arg)基础上增加了超时限制</li><li>boolean release(int arg)独占式的释放同步状态，该方法会在释放同步状态之后，将同步队列中第一个节点包含的线程唤醒</li><li>boolean releaseShared(int arg)共享式的释放同步状态</li><li><code>Collection&lt;Thread&gt;</code>getQueuedThreads()获取等待在同步队列上的线程集合</li></ul></li><li><p>自定义锁示例</p></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class Mutex implements Lock {
    // 静态内部类，自定义同步器
    private static class Sync extends AbstractQueuedSynchronizer {
        // 是否处于占用状态
        protected boolean isHeldExclusively() {
            return getState() == 1;
        }
        // 当状态为0的时候获取锁
        public boolean tryAcquire(int acquires) {
        if (compareAndSetState(0, 1)) {
            setExclusiveOwnerThread(Thread.currentThread());
            return true;
        }
            return false;
        }
        // 释放锁，将状态设置为0
        protected boolean tryRelease(int releases) {
            if (getState() == 0) throw new
            IllegalMonitorStateException();
            setExclusiveOwnerThread(null);
            setState(0);
            return true;
        }
        // 返回一个Condition，每个condition都包含了一个condition队列
        Condition newCondition() { return new ConditionObject(); }
    }
    // 仅需要将操作代理到Sync上即可
    private final Sync sync = new Sync();
    public void lock() { sync.acquire(1); }
    public boolean tryLock() { return sync.tryAcquire(1); }
    public void unlock() { sync.release(1); }
    public Condition newCondition() { return sync.newCondition(); }
    public boolean isLocked() { return sync.isHeldExclusively(); }
    public boolean hasQueuedThreads() { return sync.hasQueuedThreads(); }
    public void lockInterruptibly() throws InterruptedException {
        sync.acquireInterruptibly(1);
    }
    public boolean tryLock(long timeout, TimeUnit unit) throws InterruptedException {
        return sync.tryAcquireNanos(1, unit.toNanos(timeout));
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_35-队列同步器的实现分析" tabindex="-1"><a class="header-anchor" href="#_35-队列同步器的实现分析"><span>35. 队列同步器的实现分析</span></a></h1><h1 id="_36-重入锁" tabindex="-1"><a class="header-anchor" href="#_36-重入锁"><span>36. 重入锁</span></a></h1><ul><li>重入锁ReentrantLock，重入是指任意线程在获取到锁之后能够再次获取该锁而不会被锁所阻塞。该锁的还支持获取锁时的公平和非公平性选择。</li><li>示例Mutex是一个不支持重进入的锁。而synchronized关键字隐式的支持重进入，比如一个synchronized修饰的递归方法，在方法执行时，执行线程在获取了锁之后仍能连续多次地获得该锁，而不像Mutex由于获取了锁，而在下一次获取锁时出现阻塞自己的情况。</li><li>ReentrantLock虽然没能像synchronized关键字一样支持隐式的重进入，但是在调用lock()方法时，已经获取到锁的线程，能够再次调用lock()方法获取锁而不被阻塞。</li><li>锁获取的公平性问题，如果在绝对时间上，先对锁进行获取的请求一定先被满足，那么这个锁是公平的，反之，是不公平的。公平的获取锁，也就是等待时间最长的线程最优先获取锁，也可以说锁获取是顺序的。ReentrantLock提供构造函数控制锁是否是公平的。事实上，公平的锁机制往往没有非公平的效率高，但是，并不是任何场景都是以TPS作为唯一的指标，公平锁能够减少“饥饿”发生的概率，等待越久的请求越是能够得到优先满足。</li><li>实现重进入</li><li>重入特性的实现需要解决以下两个问题。 <ul><li>1）线程再次获取锁。锁需要去识别获取锁的线程是否为当前占据锁的线程，如果是，则再次成功获取。</li><li>2）锁的最终释放。线程重复n次获取了锁，随后在第n次释放该锁后，其他线程能够获取到该锁。锁的最终释放要求锁对于获取进行计数自增，计数表示当前锁被重复获取的次数，而锁被释放时，计数自减，当计数等于0时表示锁已经成功释放。</li></ul></li></ul><h2 id="_36-1-公平与非公平获取锁的区别" tabindex="-1"><a class="header-anchor" href="#_36-1-公平与非公平获取锁的区别"><span>36.1. 公平与非公平获取锁的区别</span></a></h2><h1 id="_37-读写锁" tabindex="-1"><a class="header-anchor" href="#_37-读写锁"><span>37. 读写锁</span></a></h1><ul><li>Mutex和ReentrantLock）都是排他锁，这些锁在同一时刻只允许一个线程进行访问，而读写锁在同一时刻可以允许多个读线程访问，但是在写线程访问时，所有的读线程和其他写线程均被阻塞。读写锁维护了一对锁，一个读锁和一个写锁，通过分离读锁和写<br> 锁，使得并发性相比一般的排他锁有了很大提升。</li><li>除了保证写操作对读操作的可见性以及并发性的提升之外，读写锁能够简化读写交互场景的编程方式。假设在程序中定义一个共享的用作缓存数据结构，它大部分时间提供读服务（例如查询和搜索），而写操作占有的时间很少，但是写操作完成之后的更新需要对后续的读服务可见。也可以使用等待通知机制实现</li><li>一般情况下，读写锁的性能都会比排它锁好，因为大多数场景读是多于写的。在读多于写的情况下，读写锁能够提供比排它锁更好的并发性和吞吐量。</li><li>Java并发包提供读写锁的实现是ReentrantReadWriteLock，它提供的特性 <ul><li>支持非公平(默认)和公平的锁获取方式，吞吐量还是非公平优于公平</li><li>该锁支持重进入，以读写线程为例:读线程在获取了读锁之后，能够再次获取读锁。而写线程在获取了写锁之后能够再次获取写锁，同时也可以获取读锁</li><li>锁降级遵循获取写锁、获取读锁再释放写锁的次序，写锁能够降级成为读锁</li></ul></li></ul><h2 id="_37-1-读写锁的接口与示例" tabindex="-1"><a class="header-anchor" href="#_37-1-读写锁的接口与示例"><span>37.1. 读写锁的接口与示例</span></a></h2><ul><li>ReadWriteLock仅定义了获取读锁和写锁的两个方法，即readLock()方法和writeLock()方法</li><li>实现类ReentrantReadWriteLock提供的方法 <ul><li>int getReadLockCount() 返回当前读锁被获取的次数。该次数不等于获取读锁的线程数，例如，仅一个线程，它连续获取(重进入)了n次读锁，那么占据读锁的线程数是1，但该方法返回n</li><li>int getReadHoldCount() 返回当前线程获取读锁的次数。使用ThreadLocal保存当前线程获取的次数</li><li>boolean isWriteLocked()判断写锁是否被获取</li><li>int getWriteHoldCount()返回当前写锁被获取的次数</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//缓存示例说明读写锁的使用方式，示例代码如代码清单5-16所示。
public class Cache {
    static Map&lt;String, Object&gt; map = new HashMap&lt;String, Object&gt;();
    static ReentrantReadWriteLock rwl = new ReentrantReadWriteLock();
    static Lock r = rwl.readLock();
    static Lock w = rwl.writeLock();
    // 获取一个key对应的value
    public static final Object get(String key) {
        r.lock();
        try {
            return map.get(key);
        } finally {
            r.unlock();
        }
    }
    // 设置key对应的value，并返回旧的value
    public static final Object put(String key, Object value) {
        w.lock();
        try {
        return map.put(key, value);
        } finally {
            w.unlock();
        }
    }
    // 清空所有的内容
    public static final void clear() {
        w.lock();
        try {
            map.clear();
        } finally {
            w.unlock();
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_37-2-读写锁的实现分析" tabindex="-1"><a class="header-anchor" href="#_37-2-读写锁的实现分析"><span>37.2. 读写锁的实现分析</span></a></h2><h3 id="_37-2-1-写锁的获取与释放" tabindex="-1"><a class="header-anchor" href="#_37-2-1-写锁的获取与释放"><span>37.2.1. 写锁的获取与释放</span></a></h3><h3 id="_37-2-2-锁降级" tabindex="-1"><a class="header-anchor" href="#_37-2-2-锁降级"><span>37.2.2. 锁降级</span></a></h3><ul><li>锁降级指的是写锁降级成为读锁。如果当前线程拥有写锁，然后将其释放，最后再获取读锁，这种分段完成的过程不能称之为锁降级。锁降级是指把持住（当前拥有的）写锁，再获取到读锁，随后释放（先前拥有的）写锁的过程。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//锁降级的示例。因为数据不常变化，所以多个线程可以并发地进行数据处理，当数据变更后，如果当前线程感知到数据变化，则进行数据的准备工作，同时其他处理线程被阻塞，直到当前线程完成数据的准备工作
public void processData() {
    readLock.lock();
    if (!update) {
        // 必须先释放读锁
        readLock.unlock();
        // 锁降级从写锁获取到开始
        writeLock.lock();
        try {
            if (!update) {
                // 准备数据的流程（略）
                update = true;
            }
            readLock.lock();
        } finally {
            writeLock.unlock();
        }
        // 锁降级完成，写锁降级为读锁
    }
    try {
        // 使用数据的流程（略）
    } finally {
        readLock.unlock();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>当数据发生变更后，update变量（布尔类型且volatile修饰）被设置为false，此时所有访问processData()方法的线程都能够感知到变化，但只有一个线程能够获取到写锁，其他线程会被阻塞在读锁和写锁的lock()方法上。当前线程获取写锁完成数据准备之后，再获取读锁，随后释放写锁，完成锁降级。</li><li>锁降级中读锁的获取是否必要呢？答案是必要的。主要是为了保证数据的可见性，如果当前线程不获取读锁而是直接释放写锁，假设此刻另一个线程（记作线程T）获取了写锁并修改了数据，那么当前线程无法感知线程T的数据更新。如果当前线程获取读锁，即遵循锁降级的步骤，则线程T将会被阻塞，直到当前线程使用数据并释放读锁之后，线程T才能获取写锁进行数据更新。</li><li>RentrantReadWriteLock不支持锁升级（把持读锁、获取写锁，最后释放读锁的过程）。目的也是保证数据可见性，如果读锁已被多个线程获取，其中任意线程成功获取了写锁并更新了数据，则其更新对其他获取到读锁的线程是不可见的</li></ul><h3 id="_37-2-3-locksupport工具" tabindex="-1"><a class="header-anchor" href="#_37-2-3-locksupport工具"><span>37.2.3. LockSupport工具</span></a></h3><ul><li>当需要阻塞或唤醒一个线程的时候，都会使用LockSupport工具类来完成相应工作。LockSupport定义了一组的公共静态方法，这些方法提供了最基本的线程阻塞和唤醒功能，而LockSupport也成为构建同步组件的基础工具。</li><li>LockSupport定义了一组以park开头的方法用来阻塞当前线程，以及unpark(Thread thread)方法来唤醒一个被阻塞的线程。Park有停车的意思，</li><li>LockSupport提供的阻塞和唤醒方法. <ul><li>void park()阻塞当前线程，如果调用unpark(Thread thread)方法或者当前线程被中断，才能从park0方法返回</li><li>void parkNanos(long nanos)阻塞当前线程，最长不超过nanos纳秒，返回条件在park()的基础上增加了超时返回</li><li>void parkUntil(long deadline)阻塞当前线程，直到deadline时间(从1970年开始到deadline时间的毫秒数)</li><li>void unpark(Thread thread) 唤醒处于阻塞状态的线程thread</li><li>park(Object blocker)、parkNanos(Object blocker,long nanos)和parkUntil(Object blocker,long deadline)3个方法，用于实现阻塞当前线程的功能，其中参数blocker是用来标识当前线程在等待的对象（以下称为阻塞对象），该对象主要用于问题排查和系统监控。</li></ul></li></ul><h2 id="_37-3-condition接口" tabindex="-1"><a class="header-anchor" href="#_37-3-condition接口"><span>37.3. Condition接口</span></a></h2><ul><li>任意一个Java对象，都拥有一组监视器方法（定义在java.lang.Object上），主要包括wait()、wait(long timeout)、notify()以及notifyAll()方法，与synchronized配合可以实现等待/通知模式。</li><li>Condition接口也提供了类似方法，与Lock配合可以实现等待/通知模式，但两者在使用方式以及功能特性上还是有差别的。<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/984fefa00d458d2c3f773.jpg" alt="Object的监视器方法与Condition接口的对比.png"></li><li>Condition定义了等待/通知两种类型的方法，当前线程调用这些方法时，需要提前获取到Condition对象关联的锁。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Lock lock = new ReentrantLock();
Condition condition = lock.newCondition();//一般都会将Condition对象作为成员变量
public void conditionWait() throws InterruptedException {
    lock.lock();
    try {
        condition.await();
    } finally {
        lock.unlock();
    }
}
public void conditionSignal() throws InterruptedException {
    lock.lock();
    try {
        condition.signal();
    } finally {
        lock.unlock();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Condition包含的方法 <ul><li>void await() throws InterruptedException 释放锁，当前线程进入等待状态直到被通知(signal)或中断interrupt()，如果当前等待线程从await()方法返回，那么表明该线程已经获取了Condition对象所对应的锁</li><li>void awaitUninterruptibly()释放锁，当前线程进入等待状态直到被通知，对中断不敏感</li><li>long awaitNanos(long nanosTimeout) throws InterruptedException当前线程进入等待状态直到被通知、中断或者超时。返回值表示剩余的时间，如果在nanosTimeout纳秒之前被唤醒，那么返回值就是(nanosTimeout-实际耗时)。如果返回值是0或者负数，那么可以认定已经超时了</li><li>boolean awaitUntil(Date deadline) throws InterruptedException当前线程进入等待状态直到被通知、中断或者到某个时间。如果没有到指定时间就被通知，方法返回true，否则，表示到了指定时间，方法返回false</li><li>void signal()唤醒一个等待在Condition上的线程，该线程从等待方法返回前必须获得与Condition相关联的锁</li><li>void signalAll()唤醒所有等待在Condition上的线程，能够从等待方法返回的线程必须获得与Condition 相关联的锁</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//有界队列示例。有界队列是一种特殊的队列，当队列为空时，队列的获取操作将会阻塞获取线程，直到队列中有新增元素，当队列已满时，队列的插入操作将会阻塞插入线程，直到队列出现“空位”.在添加和删除方法中使用while循环而非if判断，目的是防止过早或意外的通知，只有条件符合才能够退出循环。与等待/通知的经典范式类似。
public class BoundedQueue&lt;T&gt; {
    private Object[] items;
    // 添加的下标，删除的下标和数组当前数量
    private int addIndex, removeIndex, count;
    private Lock lock = new ReentrantLock();
    private Condition notEmpty = lock.newCondition();
    private Condition notFull = lock.newCondition();
    public BoundedQueue(int size) {
        items = new Object[size];
    }
    // 添加一个元素，如果数组满，则添加线程进入等待状态，直到有&quot;空位&quot;
    public void add(T t) throws InterruptedException {
        lock.lock();//1.首先需要获得锁，目的是确保数组修改的可见性和排他性
        try {
            //当数组数量等于数组长度时，表示数组已满，则调用notFull.await()，当前线程随之释放锁并进入等待状态。
            while (count == items.length)
                notFull.await();
            items[addIndex] = t;
            if (++addIndex == items.length)
                addIndex = 0;
            ++count;
            //如果数组数量不等于数组长度，表示数组未满，则添加元素到数组中，同时通知等待在notEmpty上的线程，数组中已经有新元素可以获取。
            notEmpty.signal();
        } finally {
            lock.unlock();
        }
    }
    // 由头部删除一个元素，如果数组空，则删除线程进入等待状态，直到有新添加元素
    @SuppressWarnings(&quot;unchecked&quot;)
    public T remove() throws InterruptedException {
        lock.lock();
        try {
            while (count == 0)
                notEmpty.await();
            Object x = items[removeIndex];
            if (++removeIndex == items.length)
                removeIndex = 0;
            --count;
            notFull.signal();
            return (T) x;
        } finally {
            lock.unlock();
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_37-3-1-condition的实现分析" tabindex="-1"><a class="header-anchor" href="#_37-3-1-condition的实现分析"><span>37.3.1. Condition的实现分析</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class MyRunnable implements Runnable {
    @Override
    public void run() {
        System.out.println(Thread.currentThread().getName() + &quot; run()方法执行中...&quot;);
    }
}
public class SingleThreadExecutorTest {
    public static void main(String[] args) {
        ExecutorService executorService = Executors.newSingleThreadExecutor();
        MyRunnable runnableTest = new MyRunnable();
        for (int i = 0; i &lt; 5; i++) {
            executorService.execute(runnableTest);
        }
        System.out.println(&quot;线程任务开始执行&quot;);
        executorService.shutdown();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>// 第一步获取任务源码
public E take() throws InterruptedException {
  final ReentrantLock lock = this.lock;
  lock.lockInterruptibly(); // 1 获取Lock
  try {
    for (;;) {
      E first = q.peek();
      if (first == null) {
        available.await(); // 2.1 如果PriorityQueue为空，当前线程到Condition中等待；否则执行下面的2.2
      } else {
        long delay = first.getDelay(TimeUnit.NANOSECONDS);
        if (delay &gt; 0) {
          long tl = available.awaitNanos(delay); // 2.2 如果PriorityQueue的头元素的time时间比当前时间大，到Condition中等待到time时间；否则执行2.3
        } else {
          E x = q.poll(); // 2.3.1 获取PriorityQueue的头元素
          assert x != null;
          if (q.size() != 0)
            available.signalAll(); // 2.3.2 如果PriorityQueue不为空，则唤醒在Condition中等待的所有线程
          return x;
        }
      }
    }
  } finally {
    lock.unlock(); // 3 释放Lock
  }
}
// 第4步把ScheduledFutureTask放入DelayQueue中的过程
public boolean offer(E e) {
  final ReentrantLock lock = this.lock;
  lock.lock(); // 1 获取Lock
  try {
    E first = q.peek();
    q.offer(e); // 2.1 向PriorityQueue添加任务
    if (first == null || e.compareTo(first) &lt; 0) //如果2.1中添加的任务是PriorityQueue的头元素，唤醒在Condition中等待的所有线程
      available.signalAll(); // 2.2
    return true;
  } finally {
    lock.unlock(); // 3 释放Lock
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="线程池处理流程源码" tabindex="-1"><a class="header-anchor" href="#线程池处理流程源码"><span>线程池处理流程源码</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public void execute(Runnable command) {
  if (command == null)
    throw new NullPointerException();
  // 如果线程数小于基本线程数，则创建线程并执行当前任务
  if (poolSize &gt;= corePoolSize || !addIfUnderCorePoolSize(command)) {
      // 如线程数大于等于基本线程数或线程创建失败，则将当前任务放到工作队列中。
      if (runState == RUNNING &amp;&amp; workQueue.offer(command)) {
        if (runState != RUNNING || poolSize == 0)
          ensureQueuedTaskHandled(command);
      }
    // 如果线程池不处于运行中或任务无法放入队列，并且当前线程数量小于最大允许的线程数量，
    // 则创建一个线程执行任务。
    else if (!addIfUnderMaximumPoolSize(command))
      // 抛出RejectedExecutionException异常
      reject(command); // is shutdown or saturated
  } 
}
//工作线程：线程池创建线程时，会将线程封装成工作线程Worker，Worker在执行完任务后，还会循环获取工作队列里的任务来执行
public void run() {
  try {
    Runnable task = firstTask;
    firstTask = null;
    while (task != null || (task = getTask()) != null) {
      runTask(task);
      task = null;
    }
  } finally {
    workerDone(this);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="final域的重排" tabindex="-1"><a class="header-anchor" href="#final域的重排"><span>final域的重排</span></a></h2><ul><li><p>基本数据类型:</p><ul><li>final域写：禁止final域写与构造方法重排序，保证该对象对所有线程可见时，该对象的final域全部已经初始化过</li><li>final域读（针对处理器）：禁止初次读对象的引用与读该对象包含的final域的重排序。保证读一个对象的final域之前先读这个包含这个final域的对象的引用</li></ul></li><li><p>引用数据类型：</p><ul><li>额外约束：禁止在构造函数对一个final修饰的对象的成员域的写入与随后将这个被构造的对象的引用赋值给引用变量重排序</li></ul></li><li><p>final实现</p><ul><li>写final域会要求编译器在final域写之后，构造函数返回前插入一个StoreStore屏障</li><li>读final域会要求编译器在读final域的操作前插入一个LoadLoad屏障</li></ul></li><li><p>CPU核之间的数据一致性保证方法</p><ul><li>总线加锁：通过在总线加LOCK#锁的方式；只能有一个CPU能够运行，其他CPU都阻塞，效率低下</li><li>缓存一致性协议MESI：确保每个缓存中使用的共享变量的副本是一致的：当某个CPU在写数据时，如果发现操作的变量是共享变量，则会通知其他CPU告知该变量的缓存行是无效的，其他CPU在读取该变量时，发现其无效会重新从主存中加载数据</li></ul></li></ul><h2 id="java如何实现原子操作" tabindex="-1"><a class="header-anchor" href="#java如何实现原子操作"><span>java如何实现原子操作？</span></a></h2><ul><li>原子操作是指一个不受其他操作影响的操作任务单元。处理器使用基于对缓存加锁或总线加锁的方式，来实现多处理器之间的原子操作</li><li>使用总线锁保证原子性：使用处理器提供的一个LOCK＃信号，当一个处理器在总线上输出此信号时，其他处理器的请求将被阻塞住，那么该处理器可以独占共享内存。对应#lock前缀 加上后面具体的指令</li><li>使用缓存锁保证原子性：通过缓存一致性协议实现，对应位测试和修改指令：BTS、BTR、BTC；交换指令XADD、CMPXCHG，以及其他一些操作数和逻辑指令（如ADD、OR）等</li><li>使用循环CAS实现原子操作，CAS利用了处理器提供的CMPXCHG指令(java)</li><li>使用锁机制实现原子操作，锁机制保证了只有获得锁的线程才能够操作锁定的内存区域。JVM内部实现了很多种锁机制，有偏向锁、轻量级锁和互斥锁。除了偏向锁，JVM实现锁的方式都用了循环CAS，即当一个线程想进入同步块的时候使用循环CAS的方式来获取锁，当它退出同步块的时候使用循环CAS释放锁。</li></ul><h2 id="多线程的优缺点-开发注意事项" tabindex="-1"><a class="header-anchor" href="#多线程的优缺点-开发注意事项"><span>多线程的优缺点？开发注意事项</span></a></h2><p>优点<br> 把程序中占据时间长的任务放到后台去处理，如图片、视频的下载。生成订单快照、发送邮件等<br> 发挥多核处理器的优势，并发执行让系统运行的更快、更流畅，用户体验更好<br> 缺点<br> 大量的线程降低代码的可读性<br> 更多的线程需要更多的内存空间<br> 当多个线程对同一个资源出现争夺时候要注意线程安全的问题</p><ul><li>给线程命名，方便找bug和跟踪、jstack分析程序或者问题排查</li><li>最小化同步范围</li><li>优先使用volatile，而不是 synchronized</li><li>尽可能使用更高层次的并发工具而非wait和notify方法来实现线程通信</li><li>优先使用并发容器，而非同步容器</li><li>考虑使用线程池</li><li>小心死锁</li><li>尽量避免上下文切换</li><li>控制资源 <ul><li>硬件资源：带宽的上传/下载速度、硬盘读写速度和CPU的处理速度；使用集群并行执行程序。让程序在多机上运行。比如使用ODPS、Hadoop或者自己搭建服务器集群，不同的机器处理不同的数据。可以通过“数据ID%机器数”，计算得到一个机器编号，然后由对应编号的机器处理这笔数据。</li><li>软件资源：数据库的连接数和socket连接数等；使用资源池将资源复用。比如使用连接池将数据库和Socket连接复用，或者在调用对方webservice接口获取数据时，只建立一个连接。</li><li>根据不同的资源限制调整程序的并发度</li></ul></li></ul><p>还有除CPU外的主存(按块8字节（缓存行）将L3读入到内存)，缓存的目的就是为了提高性能，避免每次都要向主内存取（具体指缓存行的状态Modified、Exclusive、Shared、Invalid）为了提高存取效率需要缓存行对齐<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/36e655d8c884c2fc1727a.jpg" alt="multicorecpuarchitecture.png"><br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/20ce26451ceb038b9daac.png" alt="JMM内存模型JMM.png"></p><p>轻量级解锁时，会使用原子的CAS操作将Displaced Mark Word替换回到对象头，如果成功，则表示没有竞争发生。如果失败，表示当前锁存在竞争，锁就会膨胀成重量级锁。为了避免无用的自旋消耗CPU（比如获得锁的线程被阻塞住了），重量级锁不会回到轻量级锁状态。</p>`,211),r=[s];function d(t,v){return e(),l("div",null,r)}const o=i(a,[["render",d],["__file","concurrentprogramming.html.vue"]]),E=JSON.parse('{"path":"/backend/java/concurrentprogramming.html","title":"多线程","lang":"zh-CN","frontmatter":{"title":"多线程","date":"2023-01-01T00:00:00.000Z","tags":"多线程","categories":"后端","description":"多线程 1. cas底层 2. 原子操作类 3. Semaphore(信号量)-允许多个线程同时访问 1.8. 什么是线程饥饿？导致原因？ 1.7. Java中用到的线程调度算法是什么？ 1.5. 程序运行原理 1.6. 什么是多线程上下文切换？如何减少或者避免？ 1.11. 线程通信、线程同步、线程互斥三者关系？ 1.13. 如何在两个线程间共享数据...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/java/concurrentprogramming.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"多线程"}],["meta",{"property":"og:description","content":"多线程 1. cas底层 2. 原子操作类 3. Semaphore(信号量)-允许多个线程同时访问 1.8. 什么是线程饥饿？导致原因？ 1.7. Java中用到的线程调度算法是什么？ 1.5. 程序运行原理 1.6. 什么是多线程上下文切换？如何减少或者避免？ 1.11. 线程通信、线程同步、线程互斥三者关系？ 1.13. 如何在两个线程间共享数据..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/d1a3ad11e842eda9f71fa.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"多线程\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/d1a3ad11e842eda9f71fa.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/29c188f244a273e4ed948.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/ad125ea59be25ae21d5e9.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/f66640919403ca0772f31.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/947cfcb6466bf62c7ecf4.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/98c014e7330736cf5b7c9.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/984fefa00d458d2c3f773.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/36e655d8c884c2fc1727a.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/20ce26451ceb038b9daac.png\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"1.8. 什么是线程饥饿？导致原因？","slug":"_1-8-什么是线程饥饿-导致原因","link":"#_1-8-什么是线程饥饿-导致原因","children":[]},{"level":2,"title":"1.7. Java中用到的线程调度算法是什么？","slug":"_1-7-java中用到的线程调度算法是什么","link":"#_1-7-java中用到的线程调度算法是什么","children":[]},{"level":2,"title":"1.5. 程序运行原理","slug":"_1-5-程序运行原理","link":"#_1-5-程序运行原理","children":[]},{"level":2,"title":"1.6. 什么是多线程上下文切换？如何减少或者避免？","slug":"_1-6-什么是多线程上下文切换-如何减少或者避免","link":"#_1-6-什么是多线程上下文切换-如何减少或者避免","children":[]},{"level":2,"title":"1.11. 线程通信、线程同步、线程互斥三者关系？","slug":"_1-11-线程通信、线程同步、线程互斥三者关系","link":"#_1-11-线程通信、线程同步、线程互斥三者关系","children":[]},{"level":2,"title":"1.13. 如何在两个线程间共享数据？","slug":"_1-13-如何在两个线程间共享数据","link":"#_1-13-如何在两个线程间共享数据","children":[]},{"level":2,"title":"2.1. 多核CPU缓存架构？","slug":"_2-1-多核cpu缓存架构","link":"#_2-1-多核cpu缓存架构","children":[]},{"level":2,"title":"3.2. 锁的内存语义","slug":"_3-2-锁的内存语义","link":"#_3-2-锁的内存语义","children":[]},{"level":2,"title":"3.4. 锁粗化消除和膨胀","slug":"_3-4-锁粗化消除和膨胀","link":"#_3-4-锁粗化消除和膨胀","children":[]},{"level":2,"title":"3.16. volatile内存语义","slug":"_3-16-volatile内存语义","link":"#_3-16-volatile内存语义","children":[]},{"level":2,"title":"6.1. volatile的应用","slug":"_6-1-volatile的应用","link":"#_6-1-volatile的应用","children":[]},{"level":2,"title":"6.2. 原子操作的实现原理","slug":"_6-2-原子操作的实现原理","link":"#_6-2-原子操作的实现原理","children":[]},{"level":2,"title":"6.3. 处理器如何实现原子操作：","slug":"_6-3-处理器如何实现原子操作","link":"#_6-3-处理器如何实现原子操作","children":[]},{"level":2,"title":"7.1. 并发编程模型的两个关键问题","slug":"_7-1-并发编程模型的两个关键问题","link":"#_7-1-并发编程模型的两个关键问题","children":[]},{"level":2,"title":"22.1. 锁的释放-获取建立的happens-before关系","slug":"_22-1-锁的释放-获取建立的happens-before关系","link":"#_22-1-锁的释放-获取建立的happens-before关系","children":[]},{"level":2,"title":"22.2. 锁的释放和获取的内存语义","slug":"_22-2-锁的释放和获取的内存语义","link":"#_22-2-锁的释放和获取的内存语义","children":[]},{"level":2,"title":"22.3. 锁内存语义的实现","slug":"_22-3-锁内存语义的实现","link":"#_22-3-锁内存语义的实现","children":[]},{"level":2,"title":"22.4. concurrent包的实现","slug":"_22-4-concurrent包的实现","link":"#_22-4-concurrent包的实现","children":[]},{"level":2,"title":"22.5. final域的内存语义","slug":"_22-5-final域的内存语义","link":"#_22-5-final域的内存语义","children":[{"level":3,"title":"22.5.1. final域的重排序规则","slug":"_22-5-1-final域的重排序规则","link":"#_22-5-1-final域的重排序规则","children":[]},{"level":3,"title":"22.5.2. 写final域的重排序规则","slug":"_22-5-2-写final域的重排序规则","link":"#_22-5-2-写final域的重排序规则","children":[]},{"level":3,"title":"22.5.3. 读final域的重排序规则","slug":"_22-5-3-读final域的重排序规则","link":"#_22-5-3-读final域的重排序规则","children":[]},{"level":3,"title":"22.5.4. final域为引用类型","slug":"_22-5-4-final域为引用类型","link":"#_22-5-4-final域为引用类型","children":[]},{"level":3,"title":"22.5.5. 为什么final引用不能从构造函数内“溢出”","slug":"_22-5-5-为什么final引用不能从构造函数内-溢出","link":"#_22-5-5-为什么final引用不能从构造函数内-溢出","children":[]},{"level":3,"title":"22.5.6. final语义在处理器中的实现","slug":"_22-5-6-final语义在处理器中的实现","link":"#_22-5-6-final语义在处理器中的实现","children":[]},{"level":3,"title":"22.5.7. happens-before","slug":"_22-5-7-happens-before","link":"#_22-5-7-happens-before","children":[]},{"level":3,"title":"22.5.8. happens-before的定义","slug":"_22-5-8-happens-before的定义","link":"#_22-5-8-happens-before的定义","children":[]},{"level":3,"title":"22.5.9. happens-before规则","slug":"_22-5-9-happens-before规则","link":"#_22-5-9-happens-before规则","children":[]},{"level":3,"title":"22.5.10. 双重检查锁定与延迟初始化","slug":"_22-5-10-双重检查锁定与延迟初始化","link":"#_22-5-10-双重检查锁定与延迟初始化","children":[]},{"level":3,"title":"22.5.11. - 3.8.1 双重检查锁定的由来","slug":"_22-5-11-3-8-1-双重检查锁定的由来","link":"#_22-5-11-3-8-1-双重检查锁定的由来","children":[]}]},{"level":2,"title":"23.1. 处理器的内存模型","slug":"_23-1-处理器的内存模型","link":"#_23-1-处理器的内存模型","children":[]},{"level":2,"title":"23.2. 各种内存模型之间的关系","slug":"_23-2-各种内存模型之间的关系","link":"#_23-2-各种内存模型之间的关系","children":[]},{"level":2,"title":"23.3. JMM的内存可见性保证","slug":"_23-3-jmm的内存可见性保证","link":"#_23-3-jmm的内存可见性保证","children":[]},{"level":2,"title":"26.1. volatile和synchronized关键字","slug":"_26-1-volatile和synchronized关键字","link":"#_26-1-volatile和synchronized关键字","children":[]},{"level":2,"title":"33.1. Lock接口","slug":"_33-1-lock接口","link":"#_33-1-lock接口","children":[]},{"level":2,"title":"36.1. 公平与非公平获取锁的区别","slug":"_36-1-公平与非公平获取锁的区别","link":"#_36-1-公平与非公平获取锁的区别","children":[]},{"level":2,"title":"37.1. 读写锁的接口与示例","slug":"_37-1-读写锁的接口与示例","link":"#_37-1-读写锁的接口与示例","children":[]},{"level":2,"title":"37.2. 读写锁的实现分析","slug":"_37-2-读写锁的实现分析","link":"#_37-2-读写锁的实现分析","children":[{"level":3,"title":"37.2.1. 写锁的获取与释放","slug":"_37-2-1-写锁的获取与释放","link":"#_37-2-1-写锁的获取与释放","children":[]},{"level":3,"title":"37.2.2. 锁降级","slug":"_37-2-2-锁降级","link":"#_37-2-2-锁降级","children":[]},{"level":3,"title":"37.2.3. LockSupport工具","slug":"_37-2-3-locksupport工具","link":"#_37-2-3-locksupport工具","children":[]}]},{"level":2,"title":"37.3. Condition接口","slug":"_37-3-condition接口","link":"#_37-3-condition接口","children":[{"level":3,"title":"37.3.1. Condition的实现分析","slug":"_37-3-1-condition的实现分析","link":"#_37-3-1-condition的实现分析","children":[]}]},{"level":2,"title":"线程池处理流程源码","slug":"线程池处理流程源码","link":"#线程池处理流程源码","children":[]},{"level":2,"title":"final域的重排","slug":"final域的重排","link":"#final域的重排","children":[]},{"level":2,"title":"java如何实现原子操作？","slug":"java如何实现原子操作","link":"#java如何实现原子操作","children":[]},{"level":2,"title":"多线程的优缺点？开发注意事项","slug":"多线程的优缺点-开发注意事项","link":"#多线程的优缺点-开发注意事项","children":[]}],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":100.09,"words":30028},"filePathRelative":"backend/java/concurrentprogramming.md","localizedDate":"2023年1月1日","excerpt":"<p>多线程</p>\\n<!--more-->\\n<!-- TOC -->\\n<ul>\\n<li><a href=\\"#1-cas%E5%BA%95%E5%B1%82\\">1. cas底层</a></li>\\n<li><a href=\\"#2-%E5%8E%9F%E5%AD%90%E6%93%8D%E4%BD%9C%E7%B1%BB\\">2. 原子操作类</a></li>\\n<li><a href=\\"#3-semaphore%E4%BF%A1%E5%8F%B7%E9%87%8F-%E5%85%81%E8%AE%B8%E5%A4%9A%E4%B8%AA%E7%BA%BF%E7%A8%8B%E5%90%8C%E6%97%B6%E8%AE%BF%E9%97%AE\\">3. Semaphore(信号量)-允许多个线程同时访问</a>\\n<ul>\\n<li><a href=\\"#18-%E4%BB%80%E4%B9%88%E6%98%AF%E7%BA%BF%E7%A8%8B%E9%A5%A5%E9%A5%BF%E5%AF%BC%E8%87%B4%E5%8E%9F%E5%9B%A0\\">1.8. 什么是线程饥饿？导致原因？</a></li>\\n<li><a href=\\"#17-java%E4%B8%AD%E7%94%A8%E5%88%B0%E7%9A%84%E7%BA%BF%E7%A8%8B%E8%B0%83%E5%BA%A6%E7%AE%97%E6%B3%95%E6%98%AF%E4%BB%80%E4%B9%88\\">1.7. Java中用到的线程调度算法是什么？</a></li>\\n<li><a href=\\"#15-%E7%A8%8B%E5%BA%8F%E8%BF%90%E8%A1%8C%E5%8E%9F%E7%90%86\\">1.5. 程序运行原理</a></li>\\n<li><a href=\\"#16-%E4%BB%80%E4%B9%88%E6%98%AF%E5%A4%9A%E7%BA%BF%E7%A8%8B%E4%B8%8A%E4%B8%8B%E6%96%87%E5%88%87%E6%8D%A2%E5%A6%82%E4%BD%95%E5%87%8F%E5%B0%91%E6%88%96%E8%80%85%E9%81%BF%E5%85%8D\\">1.6. 什么是多线程上下文切换？如何减少或者避免？</a></li>\\n<li><a href=\\"#111-%E7%BA%BF%E7%A8%8B%E9%80%9A%E4%BF%A1%E7%BA%BF%E7%A8%8B%E5%90%8C%E6%AD%A5%E7%BA%BF%E7%A8%8B%E4%BA%92%E6%96%A5%E4%B8%89%E8%80%85%E5%85%B3%E7%B3%BB\\">1.11. 线程通信、线程同步、线程互斥三者关系？</a></li>\\n<li><a href=\\"#113-%E5%A6%82%E4%BD%95%E5%9C%A8%E4%B8%A4%E4%B8%AA%E7%BA%BF%E7%A8%8B%E9%97%B4%E5%85%B1%E4%BA%AB%E6%95%B0%E6%8D%AE\\">1.13. 如何在两个线程间共享数据？</a></li>\\n<li><a href=\\"#21-%E5%A4%9A%E6%A0%B8cpu%E7%BC%93%E5%AD%98%E6%9E%B6%E6%9E%84\\">2.1. 多核CPU缓存架构？</a></li>\\n<li><a href=\\"#32-%E9%94%81%E7%9A%84%E5%86%85%E5%AD%98%E8%AF%AD%E4%B9%89\\">3.2. 锁的内存语义</a></li>\\n<li><a href=\\"#34-%E9%94%81%E7%B2%97%E5%8C%96%E6%B6%88%E9%99%A4%E5%92%8C%E8%86%A8%E8%83%80\\">3.4. 锁粗化消除和膨胀</a></li>\\n<li><a href=\\"#316-volatile%E5%86%85%E5%AD%98%E8%AF%AD%E4%B9%89\\">3.16. volatile内存语义</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#6-forkjoin%E6%A1%86%E6%9E%B6\\">6. Fork/Join框架</a></li>\\n<li><a href=\\"#10-java%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E8%87%AA%E6%97%8B\\">10. java如何实现自旋?</a></li>\\n<li><a href=\\"#6-java%E5%B9%B6%E5%8F%91%E6%9C%BA%E5%88%B6%E7%9A%84%E5%BA%95%E5%B1%82%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86\\">6. Java并发机制的底层实现原理</a>\\n<ul>\\n<li><a href=\\"#61-volatile%E7%9A%84%E5%BA%94%E7%94%A8\\">6.1. volatile的应用</a></li>\\n<li><a href=\\"#62-%E5%8E%9F%E5%AD%90%E6%93%8D%E4%BD%9C%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86\\">6.2. 原子操作的实现原理</a></li>\\n<li><a href=\\"#63-%E5%A4%84%E7%90%86%E5%99%A8%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E5%8E%9F%E5%AD%90%E6%93%8D%E4%BD%9C\\">6.3. 处理器如何实现原子操作：</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#7-java%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B%E5%9F%BA%E7%A1%80\\">7. java内存模型基础</a>\\n<ul>\\n<li><a href=\\"#71-%E5%B9%B6%E5%8F%91%E7%BC%96%E7%A8%8B%E6%A8%A1%E5%9E%8B%E7%9A%84%E4%B8%A4%E4%B8%AA%E5%85%B3%E9%94%AE%E9%97%AE%E9%A2%98\\">7.1. 并发编程模型的两个关键问题</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#8-java%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B%E7%9A%84%E6%8A%BD%E8%B1%A1%E7%BB%93%E6%9E%84\\">8. Java内存模型的抽象结构</a></li>\\n<li><a href=\\"#9-%E4%BB%8E%E6%BA%90%E4%BB%A3%E7%A0%81%E5%88%B0%E6%8C%87%E4%BB%A4%E5%BA%8F%E5%88%97%E7%9A%84%E9%87%8D%E6%8E%92%E5%BA%8F\\">9. 从源代码到指令序列的重排序</a></li>\\n<li><a href=\\"#10-%E5%B9%B6%E5%8F%91%E7%BC%96%E7%A8%8B%E6%A8%A1%E5%9E%8B%E7%9A%84%E5%88%86%E7%B1%BB\\">10. 并发编程模型的分类</a></li>\\n<li><a href=\\"#11-happens-before%E7%AE%80%E4%BB%8B\\">11. happens-before简介</a></li>\\n<li><a href=\\"#12-%E9%87%8D%E6%8E%92%E5%BA%8F\\">12. 重排序</a></li>\\n<li><a href=\\"#13-as-if-serial%E8%AF%AD%E4%B9%89\\">13. as-if-serial语义</a></li>\\n<li><a href=\\"#14-%E9%87%8D%E6%8E%92%E5%BA%8F%E5%AF%B9%E5%A4%9A%E7%BA%BF%E7%A8%8B%E7%9A%84%E5%BD%B1%E5%93%8D\\">14. 重排序对多线程的影响</a></li>\\n<li><a href=\\"#15-%E9%A1%BA%E5%BA%8F%E4%B8%80%E8%87%B4%E6%80%A7\\">15. 顺序一致性</a></li>\\n<li><a href=\\"#16-%E9%A1%BA%E5%BA%8F%E4%B8%80%E8%87%B4%E6%80%A7%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B\\">16. 顺序一致性内存模型</a></li>\\n<li><a href=\\"#17-volatile%E7%9A%84%E5%86%85%E5%AD%98%E8%AF%AD%E4%B9%89\\">17. volatile的内存语义</a></li>\\n<li><a href=\\"#18-volatile%E7%9A%84%E7%89%B9%E6%80%A7\\">18. volatile的特性</a></li>\\n<li><a href=\\"#19-volatile%E5%86%99-%E8%AF%BB%E5%BB%BA%E7%AB%8B%E7%9A%84happens-before%E5%85%B3%E7%B3%BB\\">19. volatile写-读建立的happens-before关系</a></li>\\n<li><a href=\\"#20-volatile%E5%86%99-%E8%AF%BB%E7%9A%84%E5%86%85%E5%AD%98%E8%AF%AD%E4%B9%89\\">20. volatile写-读的内存语义</a></li>\\n<li><a href=\\"#21-volatile%E5%86%85%E5%AD%98%E8%AF%AD%E4%B9%89%E7%9A%84%E5%AE%9E%E7%8E%B0\\">21. volatile内存语义的实现</a></li>\\n<li><a href=\\"#22-%E9%94%81%E7%9A%84%E5%86%85%E5%AD%98%E8%AF%AD%E4%B9%89\\">22. 锁的内存语义</a>\\n<ul>\\n<li><a href=\\"#221-%E9%94%81%E7%9A%84%E9%87%8A%E6%94%BE-%E8%8E%B7%E5%8F%96%E5%BB%BA%E7%AB%8B%E7%9A%84happens-before%E5%85%B3%E7%B3%BB\\">22.1. 锁的释放-获取建立的happens-before关系</a></li>\\n<li><a href=\\"#222-%E9%94%81%E7%9A%84%E9%87%8A%E6%94%BE%E5%92%8C%E8%8E%B7%E5%8F%96%E7%9A%84%E5%86%85%E5%AD%98%E8%AF%AD%E4%B9%89\\">22.2. 锁的释放和获取的内存语义</a></li>\\n<li><a href=\\"#223-%E9%94%81%E5%86%85%E5%AD%98%E8%AF%AD%E4%B9%89%E7%9A%84%E5%AE%9E%E7%8E%B0\\">22.3. 锁内存语义的实现</a></li>\\n<li><a href=\\"#224-concurrent%E5%8C%85%E7%9A%84%E5%AE%9E%E7%8E%B0\\">22.4. concurrent包的实现</a></li>\\n<li><a href=\\"#225-final%E5%9F%9F%E7%9A%84%E5%86%85%E5%AD%98%E8%AF%AD%E4%B9%89\\">22.5. final域的内存语义</a>\\n<ul>\\n<li><a href=\\"#2251-final%E5%9F%9F%E7%9A%84%E9%87%8D%E6%8E%92%E5%BA%8F%E8%A7%84%E5%88%99\\">22.5.1. final域的重排序规则</a></li>\\n<li><a href=\\"#2252-%E5%86%99final%E5%9F%9F%E7%9A%84%E9%87%8D%E6%8E%92%E5%BA%8F%E8%A7%84%E5%88%99\\">22.5.2. 写final域的重排序规则</a></li>\\n<li><a href=\\"#2253-%E8%AF%BBfinal%E5%9F%9F%E7%9A%84%E9%87%8D%E6%8E%92%E5%BA%8F%E8%A7%84%E5%88%99\\">22.5.3. 读final域的重排序规则</a></li>\\n<li><a href=\\"#2254-final%E5%9F%9F%E4%B8%BA%E5%BC%95%E7%94%A8%E7%B1%BB%E5%9E%8B\\">22.5.4. final域为引用类型</a></li>\\n<li><a href=\\"#2255-%E4%B8%BA%E4%BB%80%E4%B9%88final%E5%BC%95%E7%94%A8%E4%B8%8D%E8%83%BD%E4%BB%8E%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E5%86%85%E6%BA%A2%E5%87%BA\\">22.5.5. 为什么final引用不能从构造函数内“溢出”</a></li>\\n<li><a href=\\"#2256-final%E8%AF%AD%E4%B9%89%E5%9C%A8%E5%A4%84%E7%90%86%E5%99%A8%E4%B8%AD%E7%9A%84%E5%AE%9E%E7%8E%B0\\">22.5.6. final语义在处理器中的实现</a></li>\\n<li><a href=\\"#2257-happens-before\\">22.5.7. happens-before</a></li>\\n<li><a href=\\"#2258-happens-before%E7%9A%84%E5%AE%9A%E4%B9%89\\">22.5.8. happens-before的定义</a></li>\\n<li><a href=\\"#2259-happens-before%E8%A7%84%E5%88%99\\">22.5.9. happens-before规则</a></li>\\n<li><a href=\\"#22510-%E5%8F%8C%E9%87%8D%E6%A3%80%E6%9F%A5%E9%94%81%E5%AE%9A%E4%B8%8E%E5%BB%B6%E8%BF%9F%E5%88%9D%E5%A7%8B%E5%8C%96\\">22.5.10. 双重检查锁定与延迟初始化</a></li>\\n<li><a href=\\"#22511---381-%E5%8F%8C%E9%87%8D%E6%A3%80%E6%9F%A5%E9%94%81%E5%AE%9A%E7%9A%84%E7%94%B1%E6%9D%A5\\">22.5.11. - 3.8.1 双重检查锁定的由来</a></li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li><a href=\\"#23-java%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B%E7%BB%BC%E8%BF%B0\\">23. Java内存模型综述</a>\\n<ul>\\n<li><a href=\\"#231-%E5%A4%84%E7%90%86%E5%99%A8%E7%9A%84%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B\\">23.1. 处理器的内存模型</a></li>\\n<li><a href=\\"#232-%E5%90%84%E7%A7%8D%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B3%E7%B3%BB\\">23.2. 各种内存模型之间的关系</a></li>\\n<li><a href=\\"#233-jmm%E7%9A%84%E5%86%85%E5%AD%98%E5%8F%AF%E8%A7%81%E6%80%A7%E4%BF%9D%E8%AF%81\\">23.3. JMM的内存可见性保证</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#24-%E7%BA%BF%E7%A8%8B%E4%BC%98%E5%85%88%E7%BA%A7\\">24. 线程优先级</a></li>\\n<li><a href=\\"#25-%E4%B8%AD%E6%96%AD\\">25. 中断</a></li>\\n<li><a href=\\"#26-%E7%BA%BF%E7%A8%8B%E9%97%B4%E9%80%9A%E4%BF%A1\\">26. 线程间通信</a>\\n<ul>\\n<li><a href=\\"#261-volatile%E5%92%8Csynchronized%E5%85%B3%E9%94%AE%E5%AD%97\\">26.1. volatile和synchronized关键字</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#27-%E7%AD%89%E5%BE%85%E9%80%9A%E7%9F%A5%E6%9C%BA%E5%88%B6\\">27. 等待/通知机制</a></li>\\n<li><a href=\\"#28-%E7%AE%A1%E9%81%93%E8%BE%93%E5%85%A5%E8%BE%93%E5%87%BA%E6%B5%81\\">28. 管道输入/输出流</a></li>\\n<li><a href=\\"#29-threadlocal%E7%9A%84%E4%BD%BF%E7%94%A8\\">29. ThreadLocal的使用</a></li>\\n<li><a href=\\"#30-%E7%AD%89%E5%BE%85%E8%B6%85%E6%97%B6%E6%A8%A1%E5%BC%8F\\">30. 等待超时模式</a></li>\\n<li><a href=\\"#31-%E6%95%B0%E6%8D%AE%E5%BA%93%E8%BF%9E%E6%8E%A5%E6%B1%A0%E7%A4%BA%E4%BE%8B\\">31. 数据库连接池示例</a></li>\\n<li><a href=\\"#32-%E4%B8%80%E4%B8%AA%E5%9F%BA%E4%BA%8E%E7%BA%BF%E7%A8%8B%E6%B1%A0%E6%8A%80%E6%9C%AF%E7%9A%84%E7%AE%80%E5%8D%95web%E6%9C%8D%E5%8A%A1%E5%99%A8\\">32. 一个基于线程池技术的简单Web服务器</a></li>\\n<li><a href=\\"#33-java%E4%B8%AD%E7%9A%84%E9%94%81\\">33. Java中的锁</a>\\n<ul>\\n<li><a href=\\"#331-lock%E6%8E%A5%E5%8F%A3\\">33.1. Lock接口</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#34-%E9%98%9F%E5%88%97%E5%90%8C%E6%AD%A5%E5%99%A8\\">34. 队列同步器</a></li>\\n<li><a href=\\"#35-%E9%98%9F%E5%88%97%E5%90%8C%E6%AD%A5%E5%99%A8%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%88%86%E6%9E%90\\">35. 队列同步器的实现分析</a></li>\\n<li><a href=\\"#36-%E9%87%8D%E5%85%A5%E9%94%81\\">36. 重入锁</a>\\n<ul>\\n<li><a href=\\"#361-%E5%85%AC%E5%B9%B3%E4%B8%8E%E9%9D%9E%E5%85%AC%E5%B9%B3%E8%8E%B7%E5%8F%96%E9%94%81%E7%9A%84%E5%8C%BA%E5%88%AB\\">36.1. 公平与非公平获取锁的区别</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#37-%E8%AF%BB%E5%86%99%E9%94%81\\">37. 读写锁</a>\\n<ul>\\n<li><a href=\\"#371-%E8%AF%BB%E5%86%99%E9%94%81%E7%9A%84%E6%8E%A5%E5%8F%A3%E4%B8%8E%E7%A4%BA%E4%BE%8B\\">37.1. 读写锁的接口与示例</a></li>\\n<li><a href=\\"#372-%E8%AF%BB%E5%86%99%E9%94%81%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%88%86%E6%9E%90\\">37.2. 读写锁的实现分析</a>\\n<ul>\\n<li><a href=\\"#3721-%E5%86%99%E9%94%81%E7%9A%84%E8%8E%B7%E5%8F%96%E4%B8%8E%E9%87%8A%E6%94%BE\\">37.2.1. 写锁的获取与释放</a></li>\\n<li><a href=\\"#3722-%E9%94%81%E9%99%8D%E7%BA%A7\\">37.2.2. 锁降级</a></li>\\n<li><a href=\\"#3723-locksupport%E5%B7%A5%E5%85%B7\\">37.2.3. LockSupport工具</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#373-condition%E6%8E%A5%E5%8F%A3\\">37.3. Condition接口</a>\\n<ul>\\n<li><a href=\\"#3731-condition%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%88%86%E6%9E%90\\">37.3.1. Condition的实现分析</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#%E7%BA%BF%E7%A8%8B%E6%B1%A0%E5%A4%84%E7%90%86%E6%B5%81%E7%A8%8B%E6%BA%90%E7%A0%81\\">线程池处理流程源码</a></li>\\n<li><a href=\\"#final%E5%9F%9F%E7%9A%84%E9%87%8D%E6%8E%92\\">final域的重排</a></li>\\n<li><a href=\\"#java%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E5%8E%9F%E5%AD%90%E6%93%8D%E4%BD%9C\\">java如何实现原子操作？</a></li>\\n<li><a href=\\"#%E5%A4%9A%E7%BA%BF%E7%A8%8B%E7%9A%84%E4%BC%98%E7%BC%BA%E7%82%B9%E5%BC%80%E5%8F%91%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9\\">多线程的优缺点？开发注意事项</a></li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{o as comp,E as data};
