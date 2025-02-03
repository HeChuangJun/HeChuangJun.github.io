import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as l,a as n}from"./app-Cw8r8IGg.js";const a={},r=n(`<h1 id="_1-并发与并行区别" tabindex="-1"><a class="header-anchor" href="#_1-并发与并行区别"><span>1. 并发与并行区别?</span></a></h1><ul><li>并发:指多个任务在同一时间执行。这些任务在单核或多核处理器上通过进程或线程轮流地占有处理器资源来执行。</li><li>并行:指多个任务在同一时刻执行。多个处理器同时执行多个任务，每个核心实际上可以在同一时间独立地执行不同的任务。</li><li>串行:多个事件按顺序执行</li><li>并行就是每个人对应一个阿姨，同时打饭；而并发就是一个阿姨，轮流给每个人打饭。</li></ul><h1 id="_2-进程和线程的区别" tabindex="-1"><a class="header-anchor" href="#_2-进程和线程的区别"><span>2. 进程和线程的区别？</span></a></h1><ul><li>进程是程序运行和操作系统资源分配的基本单位，而线程是cpu调度和执行的基本单位</li></ul><h1 id="_3-创建线程的几种方式-√" tabindex="-1"><a class="header-anchor" href="#_3-创建线程的几种方式-√"><span>3. 创建线程的几种方式？√</span></a></h1><ul><li>继承Thread类并覆盖run方法</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class MyThread extends Thread {
  @Override
  public void run() {
      System.out.println(Thread.currentThread().getName() + &quot;正在执行！&quot;);
  }
  public static void main(String[] args) {
      new MyThread(&quot;新的线程！&quot;).start();
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>实现Runnable接口并实现run方法</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class MyRunnable implements Runnable{
  @Override
  public void run() {
    System.out.println(Thread.currentThread().getName() + &quot;正在执行！&quot;);
  }
  public static void main(String[] args) {
    new Thread(new MyRunnable()).start();
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>通过Callable和Future创建线程</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class MyCallable implements Callable&lt;Integer&gt;{
    @Override
    public Integer call() {//调用FutureTask.get()得到返回值，调用后会阻塞主进程的继续往下执行
        System.out.println(Thread.currentThread().getName() + &quot; call()方法执行中...&quot;);
        return 1;
    }
    public static void main(String[] args) throws ExecutionException, InterruptedException{
        FutureTask&lt;Integer&gt; futureTask = new FutureTask&lt;Integer&gt;(new MyCallable());
        Thread thread = new Thread(futureTask);
        thread.start();
        System.out.println(&quot;返回结果 &quot; + futureTask.get());
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-线程的run和start方法有什么区别-√" tabindex="-1"><a class="header-anchor" href="#_4-线程的run和start方法有什么区别-√"><span>4. 线程的run和start方法有什么区别？√</span></a></h1><ul><li>start方法启动线程并使线程进入就绪状态，jvm调用该线程的run方法</li><li>run方法普通方法调用</li></ul><h1 id="_5-如何停止一个正在运行的线程" tabindex="-1"><a class="header-anchor" href="#_5-如何停止一个正在运行的线程"><span>5. 如何停止一个正在运行的线程？</span></a></h1><ul><li>使用volatile退出标志，使线程正常退出，也就是当run方法完成后线程终止</li><li>使用interrupt方法中断线程。捕获中断异常后退出线程并结束阻塞状态</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//响应中断
public void run() {
    try {
        while (!Thread.currentThread().isInterrupted()) {
            // 执行任务
        }
    } catch (InterruptedException e) {
        // 线程被中断时的清理代码
    } finally {
        // 线程结束前的清理代码
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>run方法结束</li></ul><h1 id="_6-一个线程如果出现了运行时异常会怎么样" tabindex="-1"><a class="header-anchor" href="#_6-一个线程如果出现了运行时异常会怎么样"><span>6. 一个线程如果出现了运行时异常会怎么样?</span></a></h1><ul><li>如果异常没有被捕获，那么线程就停止执行了。</li><li>如果线程持有某个某个对象的监视器，那么这个对象监视器会被立即释放。</li></ul><h1 id="_7-主线程可以捕获到子线程的异常吗-√" tabindex="-1"><a class="header-anchor" href="#_7-主线程可以捕获到子线程的异常吗-√"><span>7. 主线程可以捕获到子线程的异常吗？√</span></a></h1><ul><li>不能。但主线程可用Thread.setDefaultUncaughtExceptionHandler(new MyUncaughtExceptionHandler())捕获子线程异常</li></ul><h1 id="_8-线程有哪些常用的调度方法" tabindex="-1"><a class="header-anchor" href="#_8-线程有哪些常用的调度方法"><span>8. 线程有哪些常用的调度方法？</span></a></h1><ul><li>在Object类中用于线程的等待与通知方法 <ul><li>wait()：当线程A调用共享变量的wait()方法时，线程A会被阻塞挂起，直到线程B调用了共享对象notify()或者notifyAll()方法或者其他线程调用了线程A的interrupt()方法，线程A抛出InterruptedException异常才返回。</li><li>wait(long timeout)：如果线程A没有在timeout时间内被其它线程唤醒，那么这个方法会因为超时而返回。</li><li>wait(long timeout, int nanos)，其内部调用的是 wait(long timout) 方法。</li><li>notify()：线程A调用共享对象的notify()方法后，会随机唤醒一个在这个共享变量上调用wait系列方法后被挂起的线程</li><li>notifyAll()：唤醒所有在该共享变量上调用wait系列方法而被挂起的线程。</li><li>join()，线程A执行了thread.join()，当前线程A会等待thread线程终止之后才从thread.join()返回</li></ul></li><li>线程休眠 <ul><li>sleep(long millis)：静态方法，让出cpu。但不释放锁。指定的睡眠时间到了后该方法会正常返回，接着参与CPU调度，获取到CPU资源后就可以继续运行。</li></ul></li><li>让出优先权 <ul><li>yield()：静态方法，让出CPU，但是有可能立马又得到CPU调度</li></ul></li><li>线程中断：是一种线程间的协作模式，通过设置线程的中断标志并不能直接终止该线程的执行，而是被中断的线程会根据中断状态自行处理。 <ul><li>void interrupt()：中断线程，设置线程的中断标志为true。并抛出InterruptedException，但不会停止线程。需要用监视线程的状态为并做处理。会使wait、join、sleep方法抛出InterruptedException，然后执行catch代码</li><li>isInterrupted()： 检测当前线程是否被中断。不清除标志位</li><li>interrupted()： 检测当前线程是否被中断，如果发现当前线程被中断，则会清除中断标志。如果一个线程被中断了，第一次调用返回true，后面返回false。当抛出InterruptedException时候，会清除中断标志位，也就是说在调用isInterrupted会返回false</li></ul></li></ul><h1 id="_9-sleep-和wait-的区别-√" tabindex="-1"><a class="header-anchor" href="#_9-sleep-和wait-的区别-√"><span>9. sleep()和wait()的区别？√</span></a></h1><ul><li>wait()是Object实例方法，sleep()方法是Thread的静态方法</li><li>wait()必须在同步方法或者同步块中调用(必须已获得对象锁)。否则抛出IllegalMonitorStateException异常，sleep()可以在任何地方种使用</li><li>wait()会让出CPU并释放占有的对象锁。sleep()会让出CPU但不会释放掉对象锁</li><li>wait()必须等待Object.notify/notifyAll通知或者wait()等待时间到期后，再次获得CPU时间片才会继续执行，sleep()在休眠时间达到后如果再次获得CPU时间片就会继续执行</li></ul><h1 id="_10-线程状态及转换" tabindex="-1"><a class="header-anchor" href="#_10-线程状态及转换"><span>10. 线程状态及转换？</span></a></h1><p>Thread源码中定义了6种状态：</p><ul><li>new:初始状态，线程被构建，还没有调用start方法</li><li>runnnable:运行状态，java线程将操作系统的就绪和运行两种状态统称为运行中</li><li>blocked:阻塞状态，表示线程阻塞与锁</li><li>waiting:等待状态，表示当前线程需要等待其他线程通知或者中断</li><li>time_waiting:超时等待状态，可以在指定时间自行返回</li><li>terminated:终止状态，表示线程执行完毕<br> ![threadstatus.png)</li></ul><h1 id="_11-什么是线程上下文切换" tabindex="-1"><a class="header-anchor" href="#_11-什么是线程上下文切换"><span>11. 什么是线程上下文切换？</span></a></h1><ul><li>线程上下文切换是指操作系统在多个线程之间切换执行时，保存当前线程的执行状态并恢复另一个线程的执行状态的过程。</li></ul><h1 id="_12-守护线程daemon与用户线程user区别" tabindex="-1"><a class="header-anchor" href="#_12-守护线程daemon与用户线程user区别"><span>12. 守护线程Daemon与用户线程User区别？</span></a></h1><ul><li>用户(User)线程：运行在前台，执行具体的任务，如连接网络的子线程、main函数所在的线程等</li><li>守护(Daemon)线程：运行在后台，为其他前台线程服务。在守护线程中产生的新线程也是守护线程，必须在start()之前setDaemon(true)设置为守护线程，否则会抛异常，如垃圾回收线程</li><li>区别:程序运行完毕，JVM会等待非守护线程完成后关闭，但不会等待守护线程完成，因此守护线程中不能依靠finally块的内容来确保执行关闭或清理资源的逻辑</li></ul><h1 id="_13-线程间有哪些通信方式" tabindex="-1"><a class="header-anchor" href="#_13-线程间有哪些通信方式"><span>13. 线程间有哪些通信方式？</span></a></h1><ul><li>volatile和synchronized关键字 <ul><li>volatile修饰成员变量，告知程序任何对该变量的访问均需要从共享内存中获取，而对它的改变必须同步刷新回共享内存，保证所有线程对变量访问的可见性。</li><li>synchronized修饰方法，或者以同步代码块的形式来使用，确保多个线程在同一个时刻，只能有一个线程在执行某个方法或某个代码块。</li></ul></li><li>Object等待/通知机制 <ul><li>一个线程调用共享对象的wait()方法时，它会进入该对象的等待池，并释放已经持有的该对象的锁，进入等待状态，直到其他线程调用相同对象的notify()或notifyAll()方法。</li><li>一个线程调用共享对象的notify()方法时，它会唤醒在该对象等待池中等待的一个线程，使其进入锁池，等待获取锁。</li></ul></li><li>ReentrantLock等待/通知机制 <ul><li>Condition await()负责等待、signal()和signalAll()负责通知。与锁ReentrantLock一起使用，为线程提供了一种等待某个条件成真的机制，并允许其他线程在该条件变化时通知等待线程。</li></ul></li><li>管道输入/输出流 <ul><li>主要用于线程之间的数据传输，而传输的媒介为内存。主要包括了如下4种具体实现：PipedOutputStream、PipedInputStream、PipedReader和PipedWriter，前两种面向字节，而后两种面向字符。</li></ul></li><li>Thread.join() <ul><li>如果一个线程A执行了thread.join()语句，其含义是：当前线程A等待thread线程终止之后才从thread.join()返回。</li></ul></li><li>使用ThreadLocal <ul><li>一种用于实现线程局部变量的工具。它允许每个线程都拥有自己的独立副本，从而实现线程隔离。用于解决多线程中共享对象的线程安全问题。</li></ul></li><li>CountDownLatch、CyclicBarrier、Semaphore等并发工具类。</li></ul><h1 id="_14-什么是线程安全-导致原因-解决线程安全问题的方法" tabindex="-1"><a class="header-anchor" href="#_14-什么是线程安全-导致原因-解决线程安全问题的方法"><span>14. 什么是线程安全？导致原因？解决线程安全问题的方法？</span></a></h1><ul><li><p>线程安全，指并发编程中，代码能够正确地处理多个线程对共享数据的并发访问，不会导致数据的不一致或其他不可预见的结果</p></li><li><p>Servlet线程不安全，Servlet单实例多线程，当多个线程同时访问同一个方法，不能保证共享变量的线程安全。</p></li><li><p>Struts2线程安全，Action多实例多线程，每个请求过来都会new一个新的Action处理，完成后销毁。</p></li><li><p>SpringMVC线程不安全，和Servlet类似</p></li><li><p>原因：主内存和工作内存数据不一致和重排序导致表现全局变量及静态变量同时读写引起</p></li><li><p>synchronized 关键字可以用于方法和代码块，确保同一时间只有一个线程可以执行特定的代码段。</p></li><li><p>volatile 变量保证了变量的可见性，修改操作是立即同步到主存的，读操作从主存中读取。</p></li><li><p>ThreadLocal 为每个线程提供了变量的独立副本，每个线程都只能访问自己的副本，从而实现了线程隔离，保证了线程安全</p></li><li><p>并发包（java.util.concurrent.locks）中提供了 Lock 接口和一些实现类，如 ReentrantLock。相比于 synchronized，ReentrantLock 提供了公平锁和非公平锁。</p></li><li><p>原子变量类（如 AtomicInteger，AtomicLong 等），它们利用 CAS（比较并交换），实现了无锁的原子操作，适用于简单的计数器场景。</p></li><li><p>线程安全的集合类，如 ConcurrentHashMap，CopyOnWriteArrayList 等。这些集合类内部实现了必要的同步策略，提供了更高效的并发访问。</p></li></ul><h1 id="_15-threadlocal的理解" tabindex="-1"><a class="header-anchor" href="#_15-threadlocal的理解"><span>15. ThreadLocal的理解？</span></a></h1><ul><li>线程局部变量类。使得每个线程都可以存储和访问其自己的线程局部变量，从而实现了线程间的数据隔离。避免了线程安全问题</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>private static ThreadLocal&lt;Connection&gt; connectionHolder = new ThreadLocal&lt;Connection&gt;() {
  public Connection initialValue() {
      return DriverManager.getConnection(DB_URL);
  }
};
public static Connection getConnection() {
  return connectionHolder.get();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_16-threadlocal-使用场景" tabindex="-1"><a class="header-anchor" href="#_16-threadlocal-使用场景"><span>16. ThreadLocal 使用场景？</span></a></h1><ul><li>用户信息上下文的存储。用户登录后的每次访问接口，都会在请求头中携带一个token，在控制层可以根据这个token，解析出用户的基本信息。在控制层拦截请求把用户信息存入ThreadLocal，这样在任何地方都可以取出ThreadLocal中的用户数据</li><li>线程级单例</li><li>为每个线程分配一个JDBC连接。保证每个线程的都在各自的JDBC连接上进行数据库的操作，不会出现A线程关了B线程正在使用的JDBC连接</li><li>tomcat处理请求</li><li>session、cookie管理</li></ul><h1 id="_17-threadlocal怎么实现的呢" tabindex="-1"><a class="header-anchor" href="#_17-threadlocal怎么实现的呢"><span>17. ThreadLocal怎么实现的呢？</span></a></h1><ul><li>ThreadLocal 通过为每个线程提供一个独立的 ThreadLocalMap 来实现线程间的数据隔离，ThreadLocalMap 是 ThreadLocal静态内部类，ThreadLocalMap内部维护着Entry数组，每个Entry代表一个完整的对象，key是ThreadLocal的弱引用，value是ThreadLocal的泛型值。Entry 继承了 WeakReference，因此 key 是一个弱引用，当一个线程调用 ThreadLocal的set或get方法时，实际上是访问线程自己的ThreadLocal.ThreadLocalMap</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class ThreadLocal&lt;T&gt; {
  public T get() {
      Thread t = Thread.currentThread();
      ThreadLocalMap map = getMap(t);
      if (map != null) {
          ThreadLocalMap.Entry e = map.getEntry(this);
          if (e != null) {
              @SuppressWarnings(&quot;unchecked&quot;)
              T result = (T)e.value;
              return result;
          }
      }
      return setInitialValue();
  }
  public void set(T value) {
      //获取当前线程
      Thread t = Thread.currentThread();
      //获取ThreadLocalMap
      ThreadLocalMap map = getMap(t);
      //将当前元素存入map
      if (map != null)
          map.set(this, value);
      else
          createMap(t, value);
  }
  ThreadLocalMap getMap(Thread t) {
      return t.threadLocals;
  }
  static class ThreadLocalMap {
    static class Entry extends WeakReference&lt;ThreadLocal&lt;?&gt;&gt; {
        Object value;
        Entry(ThreadLocal&lt;?&gt; k, Object v) {
            super(k);
            value = v;
        }
    }
    private Entry[] table;
  }
}
public class Thread implements Runnable {
  //ThreadLocal.ThreadLocalMap是Thread的属性
  ThreadLocal.ThreadLocalMap threadLocals = null;
}
public class WeakReference&lt;T&gt; extends Reference&lt;T&gt; {
  public WeakReference(T referent) {
      super(referent);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_18-为什么key设计成弱引用" tabindex="-1"><a class="header-anchor" href="#_18-为什么key设计成弱引用"><span>18. 为什么key设计成弱引用？</span></a></h1><ul><li>为了防止内存泄漏。保证线程结束jvm垃圾回收时、或者内存不足时回收key。一旦 key 被回收，ThreadLocalMap 在进行 set、get 的时候就会对 key 为 null 的 Entry 进行清理。避免内存泄漏</li></ul><h1 id="_19-threadlocal内存泄露问题及解决方案" tabindex="-1"><a class="header-anchor" href="#_19-threadlocal内存泄露问题及解决方案"><span>19. ThreadLocal内存泄露问题及解决方案？</span></a></h1><ul><li>ThreadLocal的私有属性ThreadLocalMap中使用的key为ThreadLocal实例，弱引用,而value是强引用。通常情况下，随着线程 Thread 的结束，其内部的 ThreadLocalMap 也会被回收，从而避免了内存泄漏。但如果一个线程一直在运行，并且其 ThreadLocalMap 中的 Entry.value 一直指向某个强引用对象，那么这个对象就不会被回收，从而导致内存泄漏。当 Entry 非常多时，可能就会引发更严重的内存溢出问题。</li><li>每次使用完ThreadLocal，都finally调用它的remove()方法，清除数据。</li></ul><h1 id="_20-threadlocalmap的结构" tabindex="-1"><a class="header-anchor" href="#_20-threadlocalmap的结构"><span>20. ThreadLocalMap的结构？</span></a></h1><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/9c42c9f380bcb496ccaae.png" alt="threadlocalmapstructure.png" tabindex="0"><figcaption>threadlocalmapstructure.png</figcaption></figure><ul><li>元素数组:存储Entry类型的元素的数组，Entry 是 ThreaLocal 弱引用作为 key，Object 作为 value 的结构。</li><li>散列方法:哈希取余法取出 key 的 threadLocalHashCode，然后和 table 数组长度减一&amp;运算（相当于取余）。把对应的key映射到table 数组的相应下标int i = key.threadLocalHashCode &amp; (table.length - 1);每创建一个ThreadLocal对象，threadLocalHashCode就会新增0x61c88647，它是斐波那契数。好处是 hash 分布非常均匀。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>private static final int HASH_INCREMENT = 0x61c88647;

private static int nextHashCode() {
    return nextHashCode.getAndAdd(HASH_INCREMENT);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_21-threadlocalmap怎么解决hash冲突" tabindex="-1"><a class="header-anchor" href="#_21-threadlocalmap怎么解决hash冲突"><span>21. ThreadLocalMap怎么解决Hash冲突</span></a></h1><ul><li>开放定址法: <ul><li>插入数据时通过hash计算后得到数组下标，如果对应位置已经有数据，而且Entry数据的key和当前不相等。就会线性向后查找，一直找到Entry为null的槽位才会停止查找，把元素放到空的槽中。</li><li>在获取数据时也会根据ThreadLocal对象的hash值，定位到table中的位置，然后判断该槽位Entry对象中的key是否和get的key一致，如果不一致，就判断下一个位置</li></ul></li></ul><h1 id="_22-threadlocalmap扩容机制" tabindex="-1"><a class="header-anchor" href="#_22-threadlocalmap扩容机制"><span>22. ThreadLocalMap扩容机制？</span></a></h1><ul><li>在ThreadLocalMap.set()最后，如果执行完启发式清理工作后，未清理到任何数据，且当前散列数组中Entry的数量已经达到了列表的扩容阈值(len*2/3)，就开始执行rehash()逻辑：</li><li>rehash()会先去清理过期的Entry，然后还要根据条件判断size &gt;= threshold* 3/4来决定是否需要扩容。</li><li>resize()扩容后的newTab的大小为老数组的两倍，然后遍历老的table数组，散列方法重新计算位置，开放地址解决冲突，然后放到新的newTab，遍历完成之后，oldTab中所有的entry数据都已经放入到newTab中了，然后table引用指向newTab</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>if (!cleanSomeSlots(i, sz) &amp;&amp; sz &gt;= threshold)
    rehash();
private void rehash() {
    //清理过期Entry
    expungeStaleEntries();

    //扩容
    if (size &gt;= threshold - threshold / 4)
        resize();
}

//清理过期Entry
private void expungeStaleEntries() {
    Entry[] tab = table;
    int len = tab.length;
    for (int j = 0; j &lt; len; j++) {
        Entry e = tab[j];
        if (e != null &amp;&amp; e.get() == null)
            expungeStaleEntry(j);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/73d10d14f94df858737e5.png" alt="javathreadlocalresize.png" tabindex="0"><figcaption>javathreadlocalresize.png</figcaption></figure><h1 id="_23-父子线程怎么共享数据" tabindex="-1"><a class="header-anchor" href="#_23-父子线程怎么共享数据"><span>23. 父子线程怎么共享数据？</span></a></h1><ul><li>父线程使用InheritableThreadLocal来给子线程传值</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class InheritableThreadLocalTest {
    public static void main(String[] args) {
        final ThreadLocal threadLocal = new InheritableThreadLocal();
        // 主线程
        threadLocal.set(&quot;不擅技术&quot;);
        //子线程
        Thread t = new Thread() {
            @Override
            public void run() {
                super.run();
                System.out.println(&quot;鄙人三某 ，&quot; + threadLocal.get());
            }
        };
        t.start();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>原理？在 Thread 类里还有另外一个变量inheritableThreadLocals。在Thread.init的时候，如果父线程的inheritableThreadLocals不为空，就把它赋给当前线程（子线程）的inheritableThreadLocals 。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class Thread {
  ThreadLocal.ThreadLocalMap inheritableThreadLocals = null;
}

if (inheritThreadLocals &amp;&amp; parent.inheritableThreadLocals != null)
    this.inheritableThreadLocals =
        ThreadLocal.createInheritedMap(parent.inheritableThreadLocals);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_24-什么是jmm内存模型" tabindex="-1"><a class="header-anchor" href="#_24-什么是jmm内存模型"><span>24. 什么是JMM内存模型？</span></a></h1><ul><li><p>Java内存模型（Java Memory Model,JMM）是一种抽象的模型.主要用来定义多线程中变量的访问规则，用来解决变量的可见性、有序性和原子性问题，确保在并发环境中安全地访问共享变量。</p></li><li><p>JMM规定共享变量存储在主内存（Main Memory）中。每条线程都有私有的本地内存（Local Memory），本地内存中存储了共享变量的副本，线程对变量的所有操作（读取、赋值等）都必须在本地内存中进行，而不能直接读写主内存中的变量。不同的线程之间也无法直接访问对方本地内存中的变量，线程间的变量值的传递均需要通过主内存来完成。因此线程之间的变量变得不可见</p></li><li><p>当一个线程更改了本地内存中共享变量的副本后，它需要将这些更改刷新到主内存中，以确保其他线程可以看到这些更改。</p></li><li><p>当一个线程需要读取共享变量时，它可能首先从本地内存中读取。如果本地内存中的副本是过时的，线程将从主内存中重新加载共享变量的最新值到本地内存中。</p></li><li><p>本地内存是JMM中的抽象概念，并不真实存在。实际上，本地内存可能对应于CPU缓存、寄存器或者其他硬件和编译器优化。</p></li><li><p>对于多核CPU的系统架构，每个核包括ALU计算单元+PC+Registers(寄存器)+L1缓存+L2缓存，同一个CPU所有核共享L3缓存，还有除CPU外的主存(按块8字节（缓存行）将L3读入到内存),缓存的目的就是为了提高性能，避免每次都要向主内存取（具体指缓存行的状态Modified、Exclusive、Shared、Invalid）为了提高存取效率需要缓存行对齐。JMM的本地内存可能对应的L1、L2、L3缓存或者CPU寄存器。<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/36e655d8c884c2fc1727a.jpg" alt="multicorecpuarchitecture.png"><br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/20ce26451ceb038b9daac.png" alt="JMM内存模型JMM.png"></p></li><li><p>为什么线程要用自己的内存？</p><ul><li>多线程环境中，如果所有线程都直接操作主内存中的共享变量，会引发更多的内存访问竞争，这不仅影响性能，还增加了线程安全问题的复杂度。通过让每个线程使用本地内存，可以减少对主内存的直接访问和竞争，提高程序的并发性能</li><li>现代CPU为了优化执行效率，可能会对指令重排序。使用本地内存（CPU 缓存和寄存器）可以在不影响最终执行结果的前提下，提高执行效率。</li></ul></li></ul><h1 id="_25-在-java-程序中怎么保证多线程的运行安全和并发编程三要素" tabindex="-1"><a class="header-anchor" href="#_25-在-java-程序中怎么保证多线程的运行安全和并发编程三要素"><span>25. 在 Java 程序中怎么保证多线程的运行安全和并发编程三要素?</span></a></h1><ul><li>原子性：一个操作是不可分割、不可中断的，要么全部执行并且执行的过程不会被任何因素打断，要么就全不执行(线程切换引起:synchronized,LOCK,原子类)</li><li>可见性：一个线程修改了某一个共享变量的值时，其它线程能够立即知道这个修改。（工作内存和主内存不一致引起synchronized,volatile,LOCK,final）</li><li>有序性：对于一个线程的执行代码，从前往后依次执行，单线程下可以认为程序是有序的，但是并发时有可能会发生指令重排。(重排序引起synchronized,volatile,LOCK)</li></ul><p>编译优化-处理器可能会对指令进行重排序</p><h1 id="_26-什么是指令重排" tabindex="-1"><a class="header-anchor" href="#_26-什么是指令重排"><span>26. 什么是指令重排？</span></a></h1><ul><li>在执行程序时，为了提高性能，处理器和编译器常常会对指令进行重排序，分类如下 <ul><li>编译器优化的重排序。编译器在不改变单线程程序语义的前提下，可以重新安排语句的执行顺序；JMM的编译器重排序规则会禁止特定类型的编译器重排序</li><li>指令级并行的重排序。现代处理器采用了指令级并行技术ILP来将多条指令重叠执行。如果不存在数据依赖性，处理器可以改变语句对应机器指令的执行顺序；</li><li>内存系统的重排序。由于处理器使用缓存和读/写缓冲区，使得加载和存储操作看上去可能是在乱序执行的</li></ul></li><li>从Java源代码到最终实际执行的指令序列，经历3种重排序，源代码-&gt;编译器优化重排序-&gt;指令级并行重排序-&gt;内存系统重排序-&gt;最终执行的指令序列。重排序可能会导致多线程程序出现内存可见性问题</li><li>双重校验单例模式：Singleton instance=new Singleton()对应的JVM指令分为三步：分配内存空间-&gt;初始化对象-&gt;对象指向分配的内存空间，经过编译器指令重排序，第二、第三步就可能会重排序。<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/b2a1c6c49d8b99afb099f.png" alt="doublecheckerror.png"></li></ul><h1 id="_27-指令重排有限制吗-happens-before-了解吗" tabindex="-1"><a class="header-anchor" href="#_27-指令重排有限制吗-happens-before-了解吗"><span>27. 指令重排有限制吗？happens-before 了解吗？</span></a></h1><ul><li>happens-before保证多线程情况下指令重排序后程序正确性和内存的可见性</li><li>happens-before定义: <ul><li>如果一个操作happens-before另一个操作，那么第一个操作的执行结果将对第二个操作可见.而且第一个操作的执行顺序在第二个操作之前</li><li>两个操作之间存在happens-before关系，并不意味着一定要按照happens-before原则制定的顺序来执行。只需重排序之后的执行结果与happens-before关系来执行的结果一致</li></ul></li><li>规则 <ul><li>程序次序规则（Program Order Rule）：在一个线程内，按照程序代码顺序，书写在前面的操作先行发生于书写在后面的操作</li><li>监视器锁定规则（Monitor Lock Rule）：一个锁的unlock操作happens-before对同一个锁的lock操作。</li><li>volatile变量规则（Volatile Variable Rule）：对一个volatile变量的写操作happens-before后面对这个变量的读操作，可以看成对变量读写加了锁</li><li>线程启动规则（Thread Start Rule）：Thread对象的start()方法happens-before此线程的每一个动作。保证释放锁和获取锁的两个线程之间的内存可见性</li><li>线程终止规则（Thread Termination Rule）：线程中的所有操作happens-before对此线程的终止检测，可通过Thread.join()方法结束、Thread.isAlive()的返回值等手段检测到线程已经终止执行。</li><li>线程中断规则（Thread Interruption Rule）：对线程interrupt()方法的调用happens-before被中断线程的代码检测到中断事件的发生，可通过Thread.interrupted()方法检测到是否有中断发生。</li><li>对象终结规则（Finalizer Rule）：一个对象的初始化完成（构造函数执行结束）happens-before它的finalize()方法的开始</li><li>传递性（Transitivity）：如果操作A happens-before B，B happens-before C，可以得出A happens-before C</li><li>join()规则：如果线程 A 执行操作 ThreadB.join()并成功返回，那么线程 B 中的任意操作 happens-before 于线程 A 从 ThreadB.join()操作成功返回</li></ul></li></ul><h1 id="_28-as-if-serial又是什么-单线程的程序一定是顺序的吗" tabindex="-1"><a class="header-anchor" href="#_28-as-if-serial又是什么-单线程的程序一定是顺序的吗"><span>28. as-if-serial又是什么？单线程的程序一定是顺序的吗？</span></a></h1><ul><li>as-if-serial保证单线程情况下指令重排序后程序正确性和内存的可见性</li><li>as-if-serial语义:不管怎么重排序，单线程程序的执行结果不变。编译器、runtime和处理器都必须遵守</li><li>为了遵守 as-if-serial 语义，存在数据依赖关系的不允许重排序</li></ul><h1 id="_29-volatile关键字-√" tabindex="-1"><a class="header-anchor" href="#_29-volatile关键字-√"><span>29. volatile关键字?√</span></a></h1><ul><li>保证可见性：确保对某个变量的更新对其他线程马上可见，一个变量被声明为volatile时，线程在写入变量时不会把值缓存在寄存器或者其他地方，而是会把值刷新回主内存 当其它线程读取该共享变量，会从主内存重新获取最新值，而不是使用当前线程的本地内存中的值，无上下文切换和调度，不会造成线程阻塞.</li><li>有序性：禁止编译器和处理器重排序;</li><li>原子性：部分原子性：volatile修饰long和double可以保证其操作原子性；volatile类型的引用的改变是原子性的，如果引用是数组/对象，修改数组元素/对象属性不是原子性的，</li><li>volatile 常用于多线程环境下的单次操作(单次读或者单次写)。</li><li>常用场景：状态标记变量（停止线程）、单例禁止重排序双重检查</li></ul><h1 id="_30-volatile怎么保证可见性" tabindex="-1"><a class="header-anchor" href="#_30-volatile怎么保证可见性"><span>30. volatile怎么保证可见性?</span></a></h1><ul><li>JVM实现通过对有volatile关键字的变量时，编译时在汇编代码中加入lock前缀指令（lock addl）锁住缓存行，引起处理器CPU缓存行的数据写回内存并导致其他处理器的缓存失效（处理器通过嗅探在总线上传播的数据来检查自己缓存的值是不是过期）。当处理器发现本地缓存失效后，就会从内存中重读该变量数据，即可以获取当前最新值（一次读取64字节缓存行）其实就相当于一个内存屏障（一组处理指令），用来实现对内存操作的顺序限制。内存屏障使用sfence mfence lfence等系统原语或者锁总线实现</li></ul><h1 id="_31-volatile怎么保证有序性" tabindex="-1"><a class="header-anchor" href="#_31-volatile怎么保证有序性"><span>31. volatile怎么保证有序性?</span></a></h1><ul><li>valatile限制编译器和处理器重排序<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/76465270e62b6e41c4af9.png" alt="reorder.png"></li><li>为了实现 volatile 的内存语义，编译器在生成字节码时，会在指令序列中插入内存屏障来禁止特定类型的处理器重排序，强制把写缓冲区/高速缓存中的脏数据等写回主内存 <ul><li>①在每个 volatile 写操作的前面插入一个 StoreStore 屏障（禁止volatile写/普通写与volatile写重排序）</li><li>②在每个 volatile 写操作的后面插入一个 StoreLoad 屏障（禁止volatile写-volatile读）</li><li>③在每个 volatile 读操作的后面插入一个 LoadLoad 屏障（禁止volatile读与后面的读操作重排序）</li><li>④在每个 volatile 读操作的后面插入一个 LoadStore 屏障（禁止volatile读与后面的写操作重排序）</li><li>为什么少了普通读--volatile写禁止重排序？（volatile写前LoadStore屏障）因为一个是普通变量读，一个是volatile的读\\写，两个变量之间本身不存在数据依赖与竞态条件； 普通变量写。因为普通变量读与普通变量写之间没有happens-before规则，所以会有竞态条件。但是volatile的写操作的内存语义与释放锁相同，即会刷新该线程的写缓冲到内存中，而普通变量读根本不涉及到写缓冲，所以即使重排序了也不会破坏volatile的内存语义。<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/ed5d433a7450dbaf88e23.jpg" alt="memorybarrier.png"></li></ul></li></ul><h1 id="_32-线程同步" tabindex="-1"><a class="header-anchor" href="#_32-线程同步"><span>32. 线程同步</span></a></h1><ul><li>如果多个线程同时读写某个共享资源（如变量、文件等），而没有适当的同步机制，就可能导致数据不一致、数据损坏等问题出现</li><li>线程同步的实现方式 <ul><li>互斥量（mutex）：本质上是一把锁，在访问共享资源前先对互斥量进行加锁，访问完后再解锁。对互斥量加锁后，任何其他试图再次对互斥量加锁的线程都会被阻塞，直到当前线程解锁。</li><li>读写锁：有三种状态，读模式加锁、写模式加锁和不加锁；一次只有一个线程可以占有写模式的读写锁，但是可以有多个线程同时占有读模式的读写锁。适合读多写少的场景。</li><li>条件变量：允许线程在满足特定条件时才继续执行，否则进入等待状态。条件变量通常与互斥量一起使用，防止竞争条件的发生</li><li>自旋锁：一种锁的实现方式，它不会让线程进入睡眠状态，而是一直循环检测锁是否被释放。自旋锁适用于锁的持有时间非常短的情况。</li><li>信号量（Semaphore）：本质上是一个计数器，用于为多个进程提供共享数据对象的访问。</li></ul></li></ul><h1 id="_33-synchronized关键字" tabindex="-1"><a class="header-anchor" href="#_33-synchronized关键字"><span>33. synchronized关键字</span></a></h1><ul><li>非公平锁、悲观锁、互斥锁</li><li>当一个线程访问某对象的 synchronized 方法或代码块时，其他线程对该对象的所有 synchronized 方法或代码块的访问将被阻塞，直到第一个线程完成操作。</li><li>synchronized关键字属于互斥量，它保证了同一时间只有一个线程可以访问共享资源。</li><li>synchronized保证原子性、可见性（锁释放会把数据刷回到主存）、有序性</li></ul><h1 id="_34-synchronized锁类和静态方法的锁对象区别" tabindex="-1"><a class="header-anchor" href="#_34-synchronized锁类和静态方法的锁对象区别"><span>34. synchronized锁类和静态方法的锁对象区别？</span></a></h1><ul><li>同步代码块synchronized (实例对象/this/xxx.class) {} 锁对象是指定的实例对象/类</li><li>同步方法synchronized void method(){} 锁对象是当前实例对象</li><li>静态同步方法public static synchronized void method(){}锁对象是当前Class类</li><li>注意事项 <ul><li>锁对象属性变化不影响，引用改变影响，一般设置为final</li><li>锁对象不能用字符串常量，可能与类库使用同一把锁</li></ul></li></ul><h1 id="_35-synchronized同步代码、静态同步方法原理" tabindex="-1"><a class="header-anchor" href="#_35-synchronized同步代码、静态同步方法原理"><span>35. synchronized同步代码、静态同步方法原理？</span></a></h1><ul><li>同步代码块原理：使用jvm的字节码指令monitorenter和monitorexit，monitorenter指令是在编译后插入到同步代码块的开始位置，而monitorexit是插入到方法结束处和异常处，JVM保证每个monitorenter必须有对应的monitorexit与之配对。依赖于底层的操作系统的Mutex Lock来实现，需要将当前线程挂起并从用户态切换到内核态来执行，效率低。jvm保证每个对象的都有Monitor监视器（Java任意对象都可以作为锁的原因），一个线程执行同步代码块，首先尝试获取monitor的持有权。当线程尝试获取锁的时候，如果获取不到锁会一直阻塞。如果获取对象锁失败，那当前线程就要阻塞等待，直到锁被另外一个线程释放为止、如果获取锁的线程进入休眠或者阻塞，除非当前线程异常，否则其他线程尝试获取锁必须一直等待。在执行完代码块之后，执行monitorexit释放锁。最后一个monitorexit是保证在异常情况下，锁也可以得到释放，避免死锁.<br><code>javap -c -s -v -l SynchronizedDemo.class</code><br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/567a83434eb62881d322b.png" alt="javamonitorenter.png"></li><li>静态/普通同步方法原理：依靠方法修饰符ACC_SYNCHRONIZED， 具体是在Class文件的方法表中将该方法的access_flags字段中的synchronized标志位置设置为1，表示该方法是同步方法，并使用调用该方法的对象或该方法所属的Class在JVM的内部对象表示Klass(类在HotSpot中的c++对等体)作为锁对象。<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/06ab05afe794f6421797d.png" alt="javaaccsynchornized.png"></li><li>monitorenter、monitorexit或者ACC_SYNCHRONIZED 都是基于Monitor实现。 <ul><li>实例对象结构里有对象头，对象头里面有一块结构叫Mark Word，Mark Word指针指向了monitor。</li><li>Monitor其实是一种同步机制。在Java虚拟机HotSpot中，Monitor是由ObjectMonitor实现</li></ul></li><li>ObjectMonitor工作原理 <ul><li>ObjectMonitor有两个队列：_WaitSet、_EntryList，用来保存ObjectWaiter对象列表；</li><li>_owner，获取Monitor对象的线程进入_owner区时，_count+1。如果线程调用了wait()方法，此时会释放Monitor 对象，_owner恢复为空， _count-1。同时该等待线程进入_WaitSet 中，等待被唤醒。</li></ul></li><li>monitorenter在判断拥有同步标识ACC_SYNCHRONIZED抢先进入此方法的线程会优先拥有Monitor的owner，此时计数器+1</li><li>monitorexit当执行完退出后计数器-1，归0后被其他进入的线程获得。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>ObjectMonitor() {
    _header       = NULL;
    _count        = 0; // 记录线程获取锁的次数
    _waiters      = 0,
    _recursions   = 0;  //锁的重入次数
    _object       = NULL;
    _owner        = NULL;  // 指向持有ObjectMonitor对象的线程
    _WaitSet      = NULL;  // 处于wait状态的线程，会被加入到_WaitSet
    _WaitSetLock  = 0 ;
    _Responsible  = NULL ;
    _succ         = NULL ;
    _cxq          = NULL ;
    FreeNext      = NULL ;
    _EntryList    = NULL ;  // 处于等待锁block状态的线程，会被加入到该列表
    _SpinFreq     = 0 ;
    _SpinClock    = 0 ;
    OwnerIsThread = 0 ;
  }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_36-synchronized-怎么保证可见性" tabindex="-1"><a class="header-anchor" href="#_36-synchronized-怎么保证可见性"><span>36. synchronized 怎么保证可见性？</span></a></h1><ul><li>线程加锁前，将清空工作内存中共享变量的值，从而使用共享变量时需要从主内存中重新读取最新的值。</li><li>线程加锁后，其它线程无法获取主内存中的共享变量</li><li>线程解锁前，把共享变量的最新值刷新到主内存中</li></ul><h1 id="_37-synchronized-怎么保证有序性" tabindex="-1"><a class="header-anchor" href="#_37-synchronized-怎么保证有序性"><span>37. synchronized 怎么保证有序性？</span></a></h1><ul><li>synchronized 同步的代码块，具有排他性，一次只能被一个线程拥有，所以 synchronized 保证同一时刻，代码是单线程执行的。因为 as-if-serial 语义的存在，单线程的程序能保证最终结果是有序的，但是不保证不会指令重排。所以 synchronized 保证的有序是执行结果的有序性，而不是防止指令重排的有序性。</li></ul><h1 id="_38-synchronized-怎么实现可重入的呢" tabindex="-1"><a class="header-anchor" href="#_38-synchronized-怎么实现可重入的呢"><span>38. synchronized 怎么实现可重入的呢？</span></a></h1><ul><li>synchronized 是可重入锁，允许一个线程二次请求自己持有对象锁的临界资源。</li><li>因为 synchronized 锁对象有个计数器，会随着线程获取锁后 +1 计数，当线程执行完毕后 -1，直到清零释放锁。</li></ul><h1 id="_39-synchronized锁升级原理" tabindex="-1"><a class="header-anchor" href="#_39-synchronized锁升级原理"><span>39. synchronized锁升级原理？</span></a></h1><ul><li>在Java对象头里的Mark Word记录对象自身的运行数据，如哈希码、GC 分代年龄、锁状态标志、偏向时间戳（Epoch）等。其中的锁状态标志位就是用来记录锁的状态的</li><li>jdk1.6中为了减少获得锁和释放锁带来的性能消耗而引入的偏向锁和轻量级锁</li><li>无锁-&gt;偏向锁-&gt;轻量级锁-&gt;重量级锁（执行过程自动升级 更低层 lock comxchg）(堆)</li><li>无锁：没有线程试图获取锁</li><li>偏向锁:当第一个线程访问同步块时，锁会进入偏向模式.Mark Word 会被设置为偏向模式，并且存储了获取它的线程 ID.为了消除同一线程的后续锁获取和释放的开销。如果同一线程再次请求锁，就无需再次同步。 <ul><li><strong>获取偏向锁</strong><ul><li>1.检测对象头中Mark Word是否为可偏向状态（偏向锁的标识位为1，锁标识位为01）</li><li>2.若为可偏向状态，则测试线程ID是否为当前线程ID？如果是则执行步骤（5）；否则，执行步骤（3）。</li><li>3.如果线程ID不为当前线程ID，则通过CAS操作竞争锁。成功则将Mark Word的线程ID替换为当前线程ID，则执行步骤（5）；否则执行步骤（4）。</li><li>4.通过CAS竞争锁失败，证明当前存在多线程竞争情况，当到达全局安全点，获得偏向锁的线程被挂起，偏向锁升级为轻量级锁，然后被阻塞在安全点的线程继续往下执行同步代码块。</li><li>5.执行同步代码块</li></ul></li><li>偏向锁撤销：偏向锁使用了等到竞争出现才释放锁的机制，所以当其他线程尝试竞争偏向锁时，持有偏向锁的线程才会释放锁。需要等待全局安全点（在这个时间点上没有正在执行的字节码） <ul><li>首先暂停拥有偏向锁的线程，然后检查持有偏向锁的线程是否活着</li><li>如果线程不处于活动状态，则将对象头设置成无锁状态</li><li>如果线程仍然活着，拥有偏向锁的栈会被执行，遍历偏向对象的锁记录，栈中的锁记录和对象头的Mark Word要么重新偏向于其他线程，要么恢复到无锁或者标记对象不适合作为偏向锁，最后唤醒暂停的线程，被阻塞在安全点的线程继续往下执行同步代码块</li></ul></li><li>偏向锁注意事项 <ul><li>优势：偏向锁只需要在置换ThreadID的时候依赖一次CAS原子指令，其余时刻不需要CAS指令(相比其他锁)</li><li>隐患：由于一旦出现多线程竞争的情况就必须撤销偏向锁，所以偏向锁的撤销操作的性能损耗必须小于节省下来的CAS原子指令的性能消耗（这个通常只能通过大量压测才可知）</li><li>对比：轻量级锁是为了在线程交替执行同步块时提高性能，而偏向锁则是在只有一个线程执行同步块时进一步提高性能</li></ul></li></ul></li><li>轻量级锁：当有多个线程竞争锁，但没有锁竞争的强烈迹象（即线程交替执行同步块）时，偏向锁会升级为轻量级锁。 <ul><li><strong>JVM会先在当前线程的栈桢中创建用于存储锁记录的空间Lock Record，并将对象头中的Mark Word复制到锁记录中，官方称为Displaced Mark Word。然后线程尝试使用CAS将对象头中的Mark Word替换为指向锁记录的指针。如果成功，当前线程获得锁，如果失败，表示其他线程竞争锁，当前线程便尝试使用自旋来获取锁。当一个线程旋超过10次，或者自旋线程数超过CPU核数的一半，如果还没有正常获取到要使用的对象，此时就会把锁从轻量级升级为重量级锁</strong></li><li>轻量级解锁时，会使用原子的CAS操作将Displaced Mark Word替换回到对象头，如果成功，则表示没有竞争发生。如果失败，表示当前锁存在竞争，锁就会膨胀成重量级锁。需要在释放锁的同时唤醒被阻塞的线程，之后线程间要根据重量级锁规则重新竞争重量级锁、因为自旋会消耗CPU，为了避免无用的自旋（比如获得锁的线程被阻塞住了），一旦锁升级成重量级锁，就不会再恢复到轻量级锁状态。当锁处于这个状态下，其他线程试图获取锁时，都会被阻塞住，当持有锁的线程释放锁之后会唤醒这些线程，被唤醒的线程就会进行新一轮的夺锁之争</li></ul></li><li>重量级锁：当锁竞争激烈时，轻量级锁会膨胀为重量级锁。效率低，由操作系统的Mutex Lock实现，如果要挂起或者唤醒一个线程，都需要操作系统帮忙完成，而操作系统实现线程之间的切换时需要从用户态转换到内核态，时间成本高。重量级锁通过将对象头的 Mark Word 指向监视器（Monitor）对象来实现，该对象包含了锁的持有者、锁的等待队列等信息。</li><li>锁的优缺点对比 <ul><li>偏向锁：加锁和解锁不需要额外的消耗，和执行非同步方法相比仅存在纳秒级的差距。如果线程间存在锁竞争，会带来额外的锁撤销的消耗。适用于只有一个线程访问同步块的场景</li><li>轻量级锁：线程竞争不阻塞，提高了程序的响应速度，得不到锁的线程自旋会消耗CPU，适用于追求响应时间响应速度。同步块执行速度非常快</li><li>重量级锁：线程竞争不自旋、不消耗CPU；线程阻塞，响应时间慢。适用于追求吞吐量。同步块执行速度较长<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/b0a1f7d7ac59d447ff05f.png" alt="64bithotSpotmarkword.png"></li></ul></li></ul><h1 id="_40-synchronized-做了哪些优化" tabindex="-1"><a class="header-anchor" href="#_40-synchronized-做了哪些优化"><span>40. synchronized 做了哪些优化？</span></a></h1><ul><li>偏向锁：当一个线程首次获得锁时，JVM 会将锁标记为偏向这个线程，将锁的标志位设置为偏向模式，并且在对象头中记录下该线程的 ID。之后，当相同的线程再次请求这个锁时，就无需进行额外的同步。如果另一个线程尝试获取这个锁，偏向模式会被撤销，并且锁会升级为轻量级锁。</li><li>轻量级锁：多个线程在不同时段获取同一把锁，即不存在锁竞争的情况，也就没有线程阻塞。针对这种情况，JVM 采用轻量级锁来避免线程的阻塞与唤醒。当一个线程尝试获取轻量级锁时，它会在自己的栈帧中创建一个锁记录（Lock Record），然后尝试使用 CAS 操作将对象头的 Mark Word 替换为指向锁记录的指针。如果成功，该线程持有锁；如果失败，表示有其他线程竞争，锁会升级为重量级锁。</li><li>自旋锁：当线程尝试获取轻量级锁失败时，它会进行自旋，即循环检查锁是否可用，以避免立即进入阻塞状态。自旋的次数不是固定的，而是根据之前在同一个锁上的自旋时间和锁的状态动态调整的。</li><li>锁粗化：如果 JVM 检测到一系列连续的锁操作实际上是在单一线程中完成的，则会将多个锁操作合并为一个更大范围的锁操作，这可以减少锁请求的次数。锁粗化主要针对循环内连续加锁解锁的情况进行优化。</li><li>锁消除：JVM的即时编译器（JIT）可以在运行时进行代码分析，如果发现某些锁操作不可能被多个线程同时访问，那么锁操作就会被消除。减少不必要的同步开销</li></ul><h1 id="_41-synchronized和reentrantlock异同-√" tabindex="-1"><a class="header-anchor" href="#_41-synchronized和reentrantlock异同-√"><span>41. synchronized和ReenTrantLock异同？√</span></a></h1><ul><li>都是可重入锁</li><li>用法不同：synchronized是关键字，可修饰方法、代码块，无需手动释放锁。ReentrantLock是类，调用tryLock和lock方法，需要在finally块中释放锁</li><li>功能特点不同：synchronized只支持非公平锁，ReentrantLock提供公平锁和非公平锁、等待可中断、选择性通知（锁可以绑定多个条件）等特性</li><li>synchronized发生异常时自动释放锁，故不会死锁。Lock发生异常，若没有主动释放，有死锁，故需在finally中调用unLock方法释放锁</li><li>实现机制不同：synchronized通过Java对象头锁标记和Monitor对象实现同步。ReentrantLock通过CAS、AQS（AbstractQueuedSynchronizer）和 LockSupport（用于阻塞和解除阻塞）实现同步。</li><li>可见性实现机制不同：synchronized依赖JVM内存模型保证包含共享变量的多线程内存可见性。ReentrantLock通过AQS的volatile state保证包含共享变量的多线程内存可见性</li><li>ReentrantLock 可以实现多条件通知（可以绑定多个 Condition），而 synchronized 只能通过 wait 和 notify/notifyAll 方法唤醒一个线程或者唤醒全部线程（单条件通知）；</li></ul><h1 id="_42-aqs了解多少" tabindex="-1"><a class="header-anchor" href="#_42-aqs了解多少"><span>42. AQS了解多少？</span></a></h1><ul><li>AbstractQueuedSynchronizer抽象同步队列，简称AQS。并发包中的锁就是基于AQS实现。</li><li>AQS是基于一个FIFO的双向队列，其内部定义了一个节点类Node，Node节点内部的SHARED用来标记该线程是获取共享资源时被阻挂起后放入AQS队列的，EXCLUSIVE用来标记线程是取独占资源时被挂起后放入AQS队列</li><li>AQS使用一个volatile修饰的int类型的成员变量state来表示同步状态，修改同步状态成功即为获得锁，volatile保证了变量在多线程之间的可见性，修改State值时通过CAS机制来保证修改的原子性</li><li>获取state的方式分为两种，独占方式和共享方式，一个线程使用独占方式获取了资源，其它线程就会在获取失败后被阻塞。一个线程使用共享方式获取了资源，另外一个线程还可以通过CAS的方式进行获取。</li><li>如果共享资源被占用，需要一定的阻塞等待唤醒机制来保证锁的分配，AQS中会将竞争共享资源失败的线程添加到一个变体的CLH队列中</li><li>AQS中的队列是CLH变体的虚拟双向队列，通过将每条请求共享资源的线程封装成一个节点来实现锁的分配：拥有以下特性： <ul><li>AQS中队列是个双向链表，FIFO先进先出</li><li>通过Head、Tail头尾两个节点来组成队列结构，通过volatile修饰保证可见性</li><li>Head指向节点为已获得锁的节点，是一个虚拟节点，节点本身不持有具体线程</li><li>获取不到同步状态，会将节点进行自旋获取锁，自旋一定次数失败后会将线程阻塞</li><li>解锁时唤醒后继节点</li></ul></li></ul><h1 id="_43-reentrantlock实现原理" tabindex="-1"><a class="header-anchor" href="#_43-reentrantlock实现原理"><span>43. ReentrantLock实现原理？</span></a></h1><ul><li>ReentrantLock是可重入的独占锁，只能有一个线程可以获取该锁，其它获取该锁的线程会被阻塞。可重入表示同一个线程可以多次获得同一个锁而不会发生死锁。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//创建非公平锁
ReentrantLock lock=new ReentrantLock();
//获取锁操作
lock.lock();
try{
//执行代码逻辑
}catch(Exceptionex){
//...
}finally{
//解锁操作
lock.unlock();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在公平锁模式下，锁会授予等待时间最长的线程。在非公平锁模式下，锁可能会授予刚刚请求它的线程，而不考虑等待时间。</li><li>ReentrantLock内部通过一个计数器来跟踪锁的持有次数。 <ul><li>当线程调用lock()方法获取锁时，ReentrantLock会检查当前状态，判断锁是否已经被其他线程持有。如果没有被持有，则当前线程将获得锁；如果锁已被其他线程持有，则当前线程将根据锁的公平性策略，可能会被加入到等待队列中。</li><li>线程首次获取锁时，计数器值变为1；如果同一线程再次获取锁，计数器增加；每释放一次锁，计数器减1。</li><li>当线程调用unlock()方法时，ReentrantLock会将持有锁的计数减1，如果计数到达0则释放锁，并唤醒等待队列中的线程来竞争锁</li></ul></li></ul><h1 id="_44-reentrantlock-怎么实现公平锁的" tabindex="-1"><a class="header-anchor" href="#_44-reentrantlock-怎么实现公平锁的"><span>44. ReentrantLock 怎么实现公平锁的？</span></a></h1><ul><li>new ReentrantLock()</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//构造方法默认创建的是非公平锁 NonfairSync
public ReentrantLock() {
    sync = new NonfairSync();
}
//创建锁构造方法中传入具体参数创建公平锁 FairSync
ReentrantLock lock = new ReentrantLock(true);

// true 代表公平锁，false 代表非公平锁
//FairSync、NonfairSync 代表公平锁和非公平锁，两者都是 ReentrantLock 静态内部类，只不过实现不同锁语义。
public ReentrantLock(boolean fair) {
    sync = fair ? new FairSync() : new NonfairSync();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>非公平锁和公平锁的两处不同： <ul><li>非公平锁在调用 lock 后，首先就会调用 CAS 进行一次抢锁，如果这个时候恰巧锁没有被占用，那么直接就获取到锁返回了。</li><li>非公平锁在 CAS 失败后，和公平锁一样都会进入到 tryAcquire 方法，在 tryAcquire 方法中，如果发现锁这个时候被释放了（state == 0），非公平锁会直接 CAS 抢锁，但是公平锁会判断等待队列是否有线程处于等待状态，如果有则不去抢锁，乖乖排到后面。</li></ul></li><li>非公平锁性能更好，因为吞吐量大。但非公平锁让获取锁的时间变得更加不确定，阻塞队列中的线程可能长期处于饥饿状态</li><li>怎么实现一个非公平锁呢？只需要在创建ReentrantLock实例时，不传递任何参数或者传递false给构造方法。</li></ul><h1 id="_45-什么是cas" tabindex="-1"><a class="header-anchor" href="#_45-什么是cas"><span>45. 什么是cas?</span></a></h1><ul><li>CAS叫做CompareAndSwap，⽐较并交换，是一个无锁的原子操作。CAS操作包含3个参数：共享变量的内存地址A、预期的值B和共享变量的新值C。只有当内存中地址A处的值等于B时，才能将内存中地址A处的值更新为新值C。</li><li>synchronized 是悲观锁，线程开始执行第一步就要获取锁，一旦获得锁，其他的线程进入后就会阻塞并等待锁。</li><li>CAS是乐观锁，线程执行的时候不会加锁，它会假设此时没有冲突，然后完成某项操作；如果因为冲突失败了就重试，直到成功为止</li><li>主要是通过处理器的指令来保证操作的原⼦性的。Unsafe 对 CAS 的实现是通过 C++ 实现的。Linux 的 X86 下主要是通过 cmpxchg 指令在 CPU 上完成 CAS 操作的，但在多处理器情况下，必须使用 lock 指令加锁来完成。不同的操作系统和处理器在实现方式上肯定会有所不同。</li></ul><h1 id="_46-cas问题" tabindex="-1"><a class="header-anchor" href="#_46-cas问题"><span>46. cas问题？</span></a></h1><ul><li>ABA问题：如果一个变量V初次读取的时候是A值，在赋值的时仍然是A值，在这段时间它的值可能被改为其他值，然后又改回A，CAS操作会误认为它从来没有被修改过。 <ul><li>使用AtomicStampedReference类解决，带有时间戳的对象引用，其中compareAndSet方法会比较前引用是否等于预期引用并且印戳是否等于预期印戳，如果全部相等，则以原子方式将该引用和该标志的值设置为给定的更新值</li><li>使用版本号去解决。每次修改变量，都在这个变量的版本号上加1，此时虽然值没变，但版本号变了。</li></ul></li><li>循环性能开销：自旋CAS（不成功就一直循环执行直到成功）如果长时间不成功，会给CPU带来非常大的执行开销。 <ul><li>限制自旋次数，超过一定次数停止自旋。</li></ul></li><li>只能保证一个共享变量的原子操作：cas无法保证多个共享变量操作的原子性，可以使用锁或者AtomicReference类把多个共享变量合并成一个共享变量来操作</li></ul><h1 id="_47-java保证原子性的方法-如何保证多线程下-i-结果正确" tabindex="-1"><a class="header-anchor" href="#_47-java保证原子性的方法-如何保证多线程下-i-结果正确"><span>47. Java保证原子性的方法？如何保证多线程下 i++ 结果正确？</span></a></h1><ul><li>使用循环原子类，例如AtomicInteger，实现i++原子操作</li><li>使用juc包下的锁，如ReentrantLock，对i++操作加锁lock.lock()来实现原子性</li><li>使用synchronized，对i++操作加锁</li></ul><h1 id="_48-java中的13个原子操作类√" tabindex="-1"><a class="header-anchor" href="#_48-java中的13个原子操作类√"><span>48. Java中的13个原子操作类√</span></a></h1><ul><li>java.util.concurrent.atomic包中的原子操作类提供了一种用法简单、性能高效、线程安全地更新一个变量的方式。</li><li>原理CAS(Compare&amp;Set或Compare&amp;Swap)原子操作volatile变量</li><li>原子更新基本类型类: <ul><li>AtomicBoolean：原子更新布尔类型;</li><li>AtomicInteger：原子更新整型;</li><li>AtomicLong：原子更新长整型。</li><li>char、float和double原子类型的更新:使用compareAndSwapObject、compareAndSwapInt、compareAndSwapLong，参考AtomicBoolean</li></ul></li><li>原子更新数组某个元素： <ul><li>AtomicIntegerArray：原子更新整型数组里的元素。</li><li>AtomicLongArray：原子更新长整型数组里的元素。</li><li>AtomicReferenceArray：原子更新引用类型数组里的元素。</li></ul></li><li>原子更新引用类型/多个对象属性： <ul><li>AtomicReference：原子更新引用类型。</li><li>AtomicReferenceFieldUpdater：原子更新引用类型里的字段。</li><li>AtomicMarkableReference：原子更新带有标记位的引用类型。解决ABA问题。可以原子更新一个布尔类型的标记位和引用类型。构造方法是AtomicMarkableReference（V initialRef，boolean initialMark）。</li></ul></li><li>原子更新字段类： <ul><li>AtomicIntegerFieldUpdater：原子更新整型的字段。</li><li>AtomicLongFieldUpdater：原子更新长整型字段。</li><li>AtomicStampedReference：原子更新带有版本号的引用类型(解决ABA)</li></ul></li></ul><h1 id="_49-atomicinteger-的原理" tabindex="-1"><a class="header-anchor" href="#_49-atomicinteger-的原理"><span>49. AtomicInteger 的原理？</span></a></h1><ul><li>使用CAS+volatile int实现</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//AtomicInteger 的添加方法。以Unsafe类的实例来进行添加操作
public final int getAndIncrement() {
    return unsafe.getAndAddInt(this, valueOffset, 1);
}
//compareAndSwapInt是一个native方法，基于CAS来操作int类型变量。其它的原子操作类基本都是大同小异。
public final int getAndAddInt(Object var1, long var2, int var4) {
    int var5;
    do {
        var5 = this.getIntVolatile(var1, var2);
    } while(!this.compareAndSwapInt(var1, var2, var5, var5 + var4));
    return var5;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_50-什么是死锁" tabindex="-1"><a class="header-anchor" href="#_50-什么是死锁"><span>50. 什么是死锁</span></a></h1><ul><li>死锁：两个或两个以上的进程或线程在执行过程中因争夺资源而造成的一种互相等待的现象，若无外力作用，它们都将无法推进下去</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class DeadLockDemo {
    private static final Object lock1 = new Object();
    private static final Object lock2 = new Object();

    public static void main(String[] args) {
        new Thread(() -&gt; {
            synchronized (lock1) {
                System.out.println(&quot;线程1获取到了锁1&quot;);
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                synchronized (lock2) {
                    System.out.println(&quot;线程1获取到了锁2&quot;);
                }
            }
        }).start();

        new Thread(() -&gt; {
            synchronized (lock2) {
                System.out.println(&quot;线程2获取到了锁2&quot;);
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                synchronized (lock1) {
                    System.out.println(&quot;线程2获取到了锁1&quot;);
                }
            }
        }).start();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_51-死锁的产生条件" tabindex="-1"><a class="header-anchor" href="#_51-死锁的产生条件"><span>51. 死锁的产生条件</span></a></h1><ul><li>互斥条件：资源不能被多个线程共享，一次只能由一个线程使用。如果一个线程已经占用了一个资源，其他请求该资源的线程必须等待，直到资源被释放。</li><li>请求和保持条件：一个线程至少已经持有至少一个资源，且正在等待获取额外的资源，这些额外的资源被其他线程占有。</li><li>不可剥夺条件：资源不能被强制从一个线程中抢占过来，只能由持有资源的线程主动释放。</li><li>循环等待条件：存在一种线程资源的循环链，每个线程至少持有一个其他线程所需要的资源，然后又等待下一个线程所占有的资源。这形成了一个循环等待的环路。</li></ul><h1 id="_52-死锁避免" tabindex="-1"><a class="header-anchor" href="#_52-死锁避免"><span>52. 死锁避免？</span></a></h1><p>至少破坏死锁发生的一个条件</p><ul><li>破坏互斥条件：通常不可行，因为加锁就是为了互斥。</li><li>破坏持有并等待条件：要求线程在开始执行前一次性地申请所有需要的资源。</li><li>破坏非抢占条件：占用部分资源的线程进一步申请其他资源时，如果申请不到，可以主动释放它占有的资源。</li><li>破坏循环等待条件：对所有资源类型进行排序，强制每个线程按顺序申请资源，这样可以避免循环等待的发生。</li><li>避免一个线程同时获取多个锁。</li><li>避免一个线程在锁内同时占用多个资源，尽量保证每个锁只占用一个资源。</li><li>尝试使用定时锁，使用lock.tryLock（timeout）来替代使用内部锁机制。</li></ul><h1 id="_87-悲观锁和乐观锁" tabindex="-1"><a class="header-anchor" href="#_87-悲观锁和乐观锁"><span>87. 悲观锁和乐观锁？</span></a></h1><ul><li>悲观锁：认为每次访问共享资源时会发生冲突，所以每次访问共享资源的时候都会上锁，这样别人想拿这个数据就会阻塞直到它拿到锁。关系型数据库里边的行锁，表锁等，读锁，写锁等.synchronized 和 ReentrantLock 等独占锁。适用于多写的情况。CAS 自旋的概率会比较大，从而浪费更多的 CPU 资源，效率低于 synchronized。</li><li>乐观锁：认为每次访问共享资源时不会发生冲突，所以不会上锁，但是在更新的时候会判断一下在此期间别人有没有去更新这个数据，适用于多读的应用类型，如数据库的write_condition 机制，atomic包下面的原子变量类.可以使用版本号机制和 CAS 算法实现。使用版本标识来确定读到的数据与提交时的数据是否一致。提交后修改版本标识，不一致时可以采取丢弃和再次尝试的策略.CAS ，当多个线程尝试使用 CAS 同时更新同一个变量时，只有其中一个线程能更新变量的值，而其它线程都失败，失败的线程并不会被挂起，而是被告知这次竞争中失败，并可以再次尝试。CAS 基于硬件实现，不需要进入内核，不需要切换线程，操作自旋几率较少，因此可以获得更高的性能，这样可以提高吞吐量。</li></ul><h1 id="_54-jdk7中concurrenthashmap实现" tabindex="-1"><a class="header-anchor" href="#_54-jdk7中concurrenthashmap实现"><span>54. jdk7中ConcurrentHashMap实现</span></a></h1><ul><li>JDK7时采用的是分段锁机制（Segment Locking），整个 Map 被分为若干段，每个段都可以独立地加锁。因此，不同的线程可以同时操作不同的段，从而实现并发访问。</li><li>由Segment数组结构和HashEntry数组构成的。Segment是一种可重入的锁ReentrantLock，HashEntry用于存储键值对数据。</li><li>一个 ConcurrentHashMap 里包含一个 Segment 数组，Segment 的结构和 HashMap 类似，是一种数组和链表结构，一个 Segment 里包含一个 HashEntry 数组，每个 HashEntry 是一个链表结构的元素，每个 Segment 守护着一个 HashEntry 数组里的元素，当对 HashEntry 数组的数据进行修改时，必须首先获得它对应的 Segment 锁。</li><li>put 流程： <ul><li>计算 hash，定位到 segment，segment 如果是空就先初始化；</li><li>使用 ReentrantLock 加锁，如果获取锁失败则尝试自旋，自旋超过次数就阻塞获取，保证一定能获取到锁；</li><li>遍历 HashEntry，key 相同就直接替换，不存在就插入。</li><li>释放锁</li></ul></li><li>get流程:通过 hash(key)定位到segment，再遍历链表定位到具体的元素上，因为value是volatile的，所以不需要加锁<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/798b56179a1383beb4c98.png" alt="jdk7concurrenthashmapput.png"></li></ul><h1 id="_55-jdk8中concurrenthashmap实现" tabindex="-1"><a class="header-anchor" href="#_55-jdk8中concurrenthashmap实现"><span>55. jdk8中ConcurrentHashMap实现</span></a></h1><ul><li>JDK8以上ConcurrentHashMap使用桶锁以及CAS无锁算法。每个桶（Node 数组的每个元素）都可以独立地加锁，锁粒度更小</li><li>对于读操作，通常不需要加锁，可以直接读取，因为 ConcurrentHashMap 内部使用了 volatile 变量来保证内存可见性。</li><li>对于写操作，ConcurrentHashMap 使用 CAS 操作来实现无锁的更新，这是一种乐观锁的实现，因为它假设没有冲突发生，在实际更新数据时才检查是否有其他线程在尝试修改数据，如果有，采用悲观的锁策略，如 synchronized 代码块来保证数据的一致性。</li><li>采用 CAS + synchronized 来保证并发安全性，整个容器只有一个Segment，即table数组。Node使用 volatile 关键字，保证多线程操作时，变量的可见性！</li><li>put 流程</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//1. 计算 hash，遍历 node 数组，如果 node 是空的话，就通过 CAS+自旋的方式初始化。
// 准备初始化
tab = initTable();
// 具体实现
private final Node&lt;K,V&gt;[] initTable() {
    Node&lt;K,V&gt;[] tab; int sc;
    while ((tab = table) == null || tab.length == 0) {
        //如果正在初始化或者扩容
        if ((sc = sizeCtl) &lt; 0)
            //等待
            Thread.yield(); // lost initialization race; just spin
        else if (U.compareAndSwapInt(this, SIZECTL, sc, -1)) {   //CAS操作
            try {
                if ((tab = table) == null || tab.length == 0) {
                    int n = (sc &gt; 0) ? sc : DEFAULT_CAPACITY;
                    @SuppressWarnings(&quot;unchecked&quot;)
                    Node&lt;K,V&gt;[] nt = (Node&lt;K,V&gt;[])new Node&lt;?,?&gt;[n];
                    table = tab = nt;
                    sc = n - (n &gt;&gt;&gt; 2);
                }
            } finally {
                sizeCtl = sc;
            }
            break;
        }
    }
    return tab;
}
//2. 如果当前数组位置是空，直接通过 CAS 自旋写入数据。
static final &lt;K,V&gt; boolean casTabAt(Node&lt;K,V&gt;[] tab, int i,
                                    Node&lt;K,V&gt; c, Node&lt;K,V&gt; v) {
    return U.compareAndSwapObject(tab, ((long)i &lt;&lt; ASHIFT) + ABASE, c, v);
}
//3. 如果 hash==MOVED，说明需要扩容。
else if ((fh = f.hash) == MOVED)
    tab = helpTransfer(tab, f);
//扩容的具体实现：
final Node&lt;K,V&gt;[] helpTransfer(Node&lt;K,V&gt;[] tab, Node&lt;K,V&gt; f) {
    Node&lt;K,V&gt;[] nextTab; // 下一个表的引用，即新的扩容后的数组
    int sc; // 用于缓存sizeCtl的值
    // 检查条件：传入的表不为空，节点f是ForwardingNode类型，且f中的nextTable不为空
    if (tab != null &amp;&amp; (f instanceof ForwardingNode) &amp;&amp;
        (nextTab = ((ForwardingNode&lt;K,V&gt;)f).nextTable) != null) {
        int rs = resizeStamp(tab.length); // 根据当前表长度计算resize stamp
        // 检查循环条件：nextTab等于nextTable，table等于传入的tab，且sizeCtl为负数（表示正在进行或准备进行扩容）
        while (nextTab == nextTable &amp;&amp; table == tab &amp;&amp;
               (sc = sizeCtl) &lt; 0) {
            // 检查是否应该停止扩容（比如：resize stamp不匹配，或者已达到最大并发扩容线程数，或者transferIndex已经不大于0）
            if ((sc &gt;&gt;&gt; RESIZE_STAMP_SHIFT) != rs || sc == rs + 1 ||
                sc == rs + MAX_RESIZERS || transferIndex &lt;= 0)
                break;
            // 尝试通过CAS增加sizeCtl的值，以表示有更多线程参与扩容
            if (U.compareAndSwapInt(this, SIZECTL, sc, sc + 1)) {
                transfer(tab, nextTab); // 调用transfer方法，实际进行数据迁移
                break;
            }
        }
        return nextTab; // 返回新的表引用
    }
    return table; // 如果不符合扩容协助条件，返回当前表引用
}
//第四步，如果都不满足，就使用 synchronized 写入数据，和 HashMap 一样，key 的 hash 一样就覆盖，反之使用拉链法解决哈希冲突，当链表长度超过 8 就转换成红黑树。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/b9c204aae190e13fcbfd2.jpg" alt="jdk7concurrenthashmapput.jpg" tabindex="0"><figcaption>jdk7concurrenthashmapput.jpg</figcaption></figure><h1 id="_56-concurrenthashmap-怎么保证可见性" tabindex="-1"><a class="header-anchor" href="#_56-concurrenthashmap-怎么保证可见性"><span>56. ConcurrentHashMap 怎么保证可见性？</span></a></h1><ul><li>ConcurrentHashMap 保证可见性主要通过使用 volatile 关键字和 synchronized 同步块。</li><li>volatile 关键字保证了变量的可见性，即一个线程修改了一个 volatile 变量后，其他线程可以立即看到这个修改。在 ConcurrentHashMap 的内部实现中，有些关键的变量被声明为 volatile，比如 Segment 数组和 Node 数组等。</li><li>synchronized 同步块来保证复合操作的原子性。当一个线程进入 synchronized 同步块时，它会获得锁，然后执行同步块内的代码。当它退出 synchronized 同步块时，它会释放锁，并将在同步块内对共享变量的所有修改立即刷新到主内存，这样其他线程就可以看到这些修改了。</li></ul><h1 id="_57-为什么-concurrenthashmap-比-hashtable-效率高" tabindex="-1"><a class="header-anchor" href="#_57-为什么-concurrenthashmap-比-hashtable-效率高"><span>57. 为什么 ConcurrentHashMap 比 Hashtable 效率高</span></a></h1><ul><li>Hashtable 在任何时刻只允许一个线程访问整个 Map，通过对整个 Map 加锁来实现线程安全。</li><li>ConcurrentHashMap（尤其JDK8后）通过锁分离和 CAS 操作实现更细粒度的锁定策略，允许更高的并发。</li><li>CAS 操作是乐观锁，它不会阻塞线程，而是在更新时检查是否有其他线程已经修改了数据，如果没有就更新，如果有就重试。ConcurrentHashMap 允许多个读操作并发进行而不加锁，因为它通过 volatile 变量来保证读取操作的内存可见性。相比之下，Hashtable 对读操作也加锁，增加了开销</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>static final &lt;K,V&gt; boolean casTabAt(Node&lt;K,V&gt;[] tab, int i,
                                    Node&lt;K,V&gt; c, Node&lt;K,V&gt; v) {
    return U.compareAndSwapObject(tab, ((long)i &lt;&lt; ASHIFT) + ABASE, c, v);
}

public V get(Object key) {
    Node&lt;K,V&gt;[] tab; Node&lt;K,V&gt; e, p; int n, eh; K ek;
	// 1. 重hash
    int h = spread(key.hashCode());
    if ((tab = table) != null &amp;&amp; (n = tab.length) &gt; 0 &amp;&amp;
        (e = tabAt(tab, (n - 1) &amp; h)) != null) {
        // 2. table[i]桶节点的key与查找的key相同，则直接返回
		if ((eh = e.hash) == h) {
            if ((ek = e.key) == key || (ek != null &amp;&amp; key.equals(ek)))
                return e.val;
        }
		// 3. 当前节点hash小于0说明为树节点，在红黑树中查找即可
        else if (eh &lt; 0)
            return (p = e.find(h, key)) != null ? p.val : null;
        while ((e = e.next) != null) {
		//4. 从链表中查找，查找到则返回该节点的value，否则就返回null即可
            if (e.hash == h &amp;&amp;
                ((ek = e.key) == key || (ek != null &amp;&amp; key.equals(ek))))
                return e.val;
        }
    }
    return null;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_58-countdownlatch√" tabindex="-1"><a class="header-anchor" href="#_58-countdownlatch√"><span>58. CountDownLatch√</span></a></h1><ul><li>CountDownLatch允许一个或多个线程等待其他线程完成操作。</li><li>场景： <ul><li>协调子线程结束动作：等待所有子线程运行结束</li><li>协调子线程开始动作：统一各线程动作开始的时机</li><li>多线程解析一个Excel里多个sheet的数据（或者使用join）</li></ul></li><li>CountDownLatch的构造函数接传入countDown调用次数n。直到countDown调用次数达到n，才从await方法返回</li><li>CountDownLatch不能重新初始化或者修改CountDownLatch对象的内部计数器的值。一个线程调用countDown方法happen-before，另外一个线程调用await方法</li></ul><h1 id="_59-cyclicbarrier同步屏障" tabindex="-1"><a class="header-anchor" href="#_59-cyclicbarrier同步屏障"><span>59. CyclicBarrier同步屏障</span></a></h1><ul><li>CyclicBarrier构造方法传入屏障拦截的线程数量n，直到await调用次数达到n，才从await方法返回继续执行</li><li>构造函数CyclicBarrier（int parties，Runnable barrierAction），用于在线程到达屏障时，优先执行barrierAction</li><li>CyclicBarrier可以用于多线程计算数据，最后合并计算结果的场景</li><li>CyclicBarrier可以重复利用</li></ul><h1 id="_60-cyclibarriar-和-countdownlatch-有什么区别" tabindex="-1"><a class="header-anchor" href="#_60-cyclibarriar-和-countdownlatch-有什么区别"><span>60. CycliBarriar 和 CountdownLatch 有什么区别？</span></a></h1><ul><li><p>都是用于控制并发的工具类，都可以实现让一段程序并发的执行，并最终汇总结果</p></li><li><p>CyclicBarrier是可重用的，其中的线程会等待所有的线程完成任务。届时，屏障将被拆除，并可以选择性地做一些特定的动作；CountDownLatch是一次性的，不同的线程在同一个计数器上工作，直到计数器为0</p></li><li><p>CyclicBarrier面向的是线程数 CountDownLatch面向的是任务数</p></li><li><p>在使用CyclicBarrier时，你必须在构造中指定参与协作的线程数，这些线程必须调用await()方法 使用CountDownLatch时，则必须要指定任务数，至于这些任务由哪些线程完成无关紧要</p></li><li><p>CyclicBarrier可以在所有的线程释放后重新使用 CountDownLatch在计数器为0时不能再使用</p></li><li><p>在CyclicBarrier中，如果某个线程遇到了中断、超时等问题时，则处于await的线程都会出现问题 在CountDownLatch中，如果某个线程出现问题，其他线程不受影响</p></li><li><p>CyclicBarrier 中的各个线程可以等待其他线程；CountDownLatch中的各个子线程不可以等待其他线程，只能完成自己的任务</p></li><li><p>CountDownLatch使用减数方式直至计数为0时释放所有等待线程，CyclicBarrier使用加数方式直至计数为指定时释放所有等待线程，并且重置为0，还可指定到达栅栏后优先执行的任务，如果计算发生错误，可以reset重置计数器，并让线程重新执行一次。</p></li><li><p>CountDownLatch调用countDown()方法计数减一，调用await()方法只进行阻塞，对计数没影响；CyclicBarrier调用await()方法计数加1 ，若加1后的值不等于构造方法的值，则线程阻塞</p></li><li><p>CountDownLatch强调一个线程等多个线程完成某件事情。CyclicBarrier是多个线程互等，等大家都完成，再携手共进</p></li></ul><h1 id="_61-控制并发线程数的semaphore" tabindex="-1"><a class="header-anchor" href="#_61-控制并发线程数的semaphore"><span>61. 控制并发线程数的Semaphore</span></a></h1><ul><li>Semaphore（信号量）是用来控制同时访问特定资源的线程数量</li><li>场景：流量控制，公用资源有限的应用场景，比如数据库连接。</li><li>Semaphore的acquire()方法获取一个许可证，使用完之后调用release()方法归还许可证。还可以用tryAcquire()方法尝试获取许可证。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class SemaphoreTest {
    private static final int THREAD_COUNT = 30;
    private static ExecutorService threadPool = Executors.newFixedThreadPool(THREAD_COUNT);
    private static Semaphore s = new Semaphore(10);

    public static void main(String[] args) {
        for (int i = 0; i &lt; THREAD_COUNT; i++) {
            threadPool.execute(new Runnable() {
                @Override
                public void run() {
                    try {
                        s.acquire();
                        System.out.println(&quot;save data&quot;);
                        s.release();
                    } catch (InterruptedException e) {
                    }
                }
            });
        }
        threadPool.shutdown();
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_62-exchanger" tabindex="-1"><a class="header-anchor" href="#_62-exchanger"><span>62. Exchanger</span></a></h1><ul><li>Exchanger用于进行线程间的数据交换。它提供一个同步点使得两个线程可以通过exchange方法交换彼此的数据，如果第一个线程先执行exchange()方法，它会一直等待第二个线程也执行exchange方法，当两个线程都到达同步点时，这两个线程就可以交换数据，将本线程生产出来的数据传递给对方。为了避免一直等待，可以使用exchange(V x, long timeOut, TimeUnit unit) 设置最大等待时长。</li><li>场景</li><li>遗传算法，选出两个人作为交配对象，这时候会交换两人的数据，并使用交叉规则得出2个交配结果。</li><li>校对工作，比如纸制银行流水通过人工的方式录入成电子银行流水，为了避免错误，采用AB岗两人进行录入，并看看两个Excel数据是否录入一致</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class ExchangerTest {
    private static final Exchanger&lt;String&gt; exgr = new Exchanger&lt;String&gt;();
    private static ExecutorService threadPool = Executors.newFixedThreadPool(2);

    public static void main(String[] args) {
        threadPool.execute(new Runnable() {
            @Override
            public void run() {
                try {
                    String A = &quot;银行流水A&quot;; // A录入银行流水数据
                    exgr.exchange(A);
                } catch (InterruptedException e) {
                }
            }
        });
        threadPool.execute(new Runnable() {
            @Override
            public void run() {
                try {
                    String B = &quot;银行流水B&quot;; // B录入银行流水数据
                    String A = exgr.exchange(&quot;B&quot;);
                    System.out.println(&quot;A和B数据是否一致：&quot; + A.equals(B) + &quot;，A录入的是：&quot;
                            + A + &quot;，B录入是：&quot; + B);
                } catch (InterruptedException e) {
                }
            }
        });
        threadPool.shutdown();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_63-为什么要使用线程池" tabindex="-1"><a class="header-anchor" href="#_63-为什么要使用线程池"><span>63. 为什么要使用线程池？</span></a></h1><ul><li>降低资源消耗：通过重复利用已创建的线程降低频繁线程创建和销毁造成的消耗</li><li>提高响应速度：当任务到达时，任务可以不需要的等到线程创建就能立即执行</li><li>线程池支持定时执行、周期性执行、单线程执行和并发数控制等功能</li></ul><h1 id="_64-线程池的应用" tabindex="-1"><a class="header-anchor" href="#_64-线程池的应用"><span>64. 线程池的应用？</span></a></h1><ul><li>多线程发送短信，公众号消息</li><li>处理9图gif</li><li>保存私密文件(头像、身份证)</li></ul><h1 id="_65-线程池的处理流程√" tabindex="-1"><a class="header-anchor" href="#_65-线程池的处理流程√"><span>65. 线程池的处理流程√</span></a></h1><ul><li>如果当前池中线程数小于corePoolSize，则创建一个线程执行该任务,即使当前核心线程池有空闲的线程。</li><li>如果当前线程池中线程数已经达到 corePoolSize，则将任务放入等待队列。</li><li>如果任务等待队列已满，若当前池中线程数小于maximumPoolSize，则创建一个临时线程执行该任务。</li><li>如果当前池中线程数已经等于maximumPoolSize，此时无法执行该任务，根据拒绝执行策略处理。</li><li>空闲的线程会从任务队列中取出任务来执行，当任务执行完毕后，线程并不会立即销毁，而是继续保持在池中等待下一个任务。</li><li>当线程空闲时间超出指定时间，且当前线程数量大于核心线程数时，线程会被回收。</li></ul><h1 id="_66-如何创建线程池-线程池常用参数-√" tabindex="-1"><a class="header-anchor" href="#_66-如何创建线程池-线程池常用参数-√"><span>66. 如何创建线程池？线程池常用参数?√</span></a></h1><p>通过ThreadPoolExecutor构造方法,参数如下</p><ul><li>corePoolSize核心池大小。即使这些线程处于空闲状态，它们也不会被回收.线程池保持在等待状态下的线程数。</li><li>maximumPoolSize允许的最大线程数，当工作队列满了之后，线程池会创建新线程来处理任务，直到线程数达到这个最大值</li><li>workQueue用于保存任务的阻塞队列,推荐使用有界队列。</li><li>RejectedExecutionHandler拒绝策略。定义了当线程池和工作队列都满了之后对新提交的任务的处理策略。</li><li>keepAliveTime空闲线程空闲存活时间。如果线程池中的线程数量超过了corePoolSize，那么这些多余的线程在空闲时间超过keepAliveTime时会被终止。如果任务很多，并且每个任务执行的时间比较短，可以调大时间，提高线程的利用率。</li><li>unit keepAliveTime参数的单位，如：毫秒、秒。</li><li>threadFactory创建线程的工程类。指定线程工厂为每个创建出来的线程设置更有意义的名字，方便查找并发问题原因</li></ul><h1 id="_67-拒绝策略-√" tabindex="-1"><a class="header-anchor" href="#_67-拒绝策略-√"><span>67. 拒绝策略?√</span></a></h1><ul><li>AbortPolicy：抛出 RejectedExecutionException来拒绝新任务的处理(默认)</li><li>CallerRunsPolicy：使用当前线程执行任务，可能会阻塞主线程</li><li>DiscardOldestPolicy： 丢弃在队列中队首的任务，并执行当前任务。</li><li>DiscardPolicy：直接丢弃后来的任务</li><li>实现RejectedExecutionHandler接口自定义策略。如记录日志或持久化存储不能处理的任务。</li></ul><h1 id="_68-线程池的阻塞队列" tabindex="-1"><a class="header-anchor" href="#_68-线程池的阻塞队列"><span>68. 线程池的阻塞队列</span></a></h1><ul><li>BlockingQueue:是一个支持两个附加操作的阻塞队列：在队列为空时，获取元素的线程会等待队列（阻塞）变为非空。当队列满时，存储元素的线程会等待队列可用（阻塞） <ul><li>常用于生产者和消费者的场景，生产者是往队列里添加元素的线程，消费者是从队列里拿元素的线程。阻塞队列就是生产者存放元素的容器，而消费者也只从容器里拿元素</li><li>常用于socket客户端数据的读取和解析的场景，读取数据的线程不断将数据放入队列，然后解析线程不断从队列取数据解析</li></ul></li><li>ArrayBlockingQueue：用数组实现的有界阻塞队列，有序，按FIFO排序量。不保证线程公平的访问队列</li><li>LinkedBlockingQueue：是基于链表结构的阻塞队列，按FIFO排序任务，容量可以选择进行设置，不设置的话，将是一个无边界的阻塞队列，最大长度为Integer.MAX_VALUE，吞吐量通常要高于ArrayBlockingQuene；</li><li>DelayQueue（延迟队列）是一个任务定时周期的延迟执行的队列。根据指定的执行时间从小到大排序，否则根据插入到队列的先后排序。newScheduledThreadPool线程池使用了这个队列。队列中的元素必须实现Delayed接口，在创建元素时可以指定多久才能从队列中获取当前元素。只有在延迟期满时才能从队列中提取元素。 <ul><li>缓存系统的设计：DelayQueue保存缓存元素的有效期，使用一个线程循环查询DelayQueue，一旦能从DelayQueue中获取元素时，表示缓存有效期到了。</li><li>定时任务调度：DelayQueue保存执行的任务和执行时间，一旦从DelayQueue中获取到任务就执行，比如TimerQueue就是使用DelayQueue实现的</li></ul></li><li>PriorityBlockingQueue（优先级队列）是具有优先级的无界阻塞队列，不能保证同优先级元素的顺序</li><li>SynchronousQueue（同步队列）是一个不存储元素的阻塞队列，每个插入put操作必须等到另一个线程调用移除take操作，否则插入操作一直处于阻塞状态，吞吐量通常要高于LinkedBlockingQuene，newCachedThreadPool线程池使用了这个队列。</li><li>LinkedTransferQueue：一个由链表结构组成的无界阻塞队列。</li><li>LinkedBlockingDeque：一个由链表结构组成的双向阻塞队列。</li></ul><h1 id="_69-runnable-和-callable-有什么区别-√" tabindex="-1"><a class="header-anchor" href="#_69-runnable-和-callable-有什么区别-√"><span>69. Runnable 和 Callable 有什么区别？√</span></a></h1><ul><li>Runnable接口中的run()方法无返回值，只是执行run()方法中的代码，不能抛异常</li><li>Callable接口中的call()方法返回值是泛型，能抛出异常，和Future、FutureTask配合可用来获取异步执行的结果</li></ul><h1 id="_70-执行execute-和submit-方法的区别" tabindex="-1"><a class="header-anchor" href="#_70-执行execute-和submit-方法的区别"><span>70. 执行execute()和submit()方法的区别？</span></a></h1><ul><li>execute(Runnable command)只能提交Runnable类型的任务，无法判断任务是否被线程池执行成功与否；用于提交不需要返回值的任务</li><li>submit(Runnable task)和submit(Callable task)用于提交需要返回值的任务、既能提交Runnable类型任务也能提交Callable类型任务。可以通过Future的get()方法阻塞当前线程直到任务完成并获取返回值，使用get（long timeout，TimeUnit unit）方法则会阻塞当前线程一段时间后立即返回（有可能任务没有执行完）。</li></ul><h1 id="_71-线程池的关闭" tabindex="-1"><a class="header-anchor" href="#_71-线程池的关闭"><span>71. 线程池的关闭</span></a></h1><ul><li>shutdown和shutdownNow方法,原理都是遍历线程池中所有的线程，然后依次调用interrupt方法中断线程。无法响应中断的任务可能永远无法终止</li><li>shutdown() 将线程池状态置为 shutdown,并不会立即停止，首先停止接收外部 submit 的任务，直到内部正在跑的任务和队列里等待的任务全部执行完成后才真正停止</li><li>shutdownNow将线程池的状态设置为STOP,一般会立即停止，风险较大.首先停止接收外部提交的任务，然后忽略队列里等待的任务并尝试将正在跑的任务 interrupt 中断最后返回未执行的任务列表，</li><li>两个方法都会使isShutdown方法返回true，当所有的线程都关闭成功，才表示线程池成功关闭，这时调用isTerminated方法才会返回true。</li><li>通常调用shutdown方法来关闭线程池，如果任务不一定要执行完，则可以调用shutdownNow方法</li></ul><h1 id="_72-线程池参数怎么设置-√" tabindex="-1"><a class="header-anchor" href="#_72-线程池参数怎么设置-√"><span>72. 线程池参数怎么设置？√</span></a></h1><ul><li>任务的性质：N为CPU核数：过小的线程池可能会导致任务一直在排队。过大的线程池可能会导致大家都在竞争 CPU 资源，增加上下文切换的开销 <ul><li>CPU密集型任务(加解密逻辑操作)（Ncpu+1），+1 是因为可能存在页缺失(就是可能存在有些数据在硬盘中需要多来一个线程将数据读入内存)。</li><li>IO密集型任务(数据库链接，通讯传输等)（2xNcpu）</li><li>混合型任务（拆分成一个CPU密集型任务和一个IO密集型任务）</li></ul></li><li>cpu 使用率：观察机器的 cpu 使用率和 cpu 负载两个参数来判断线程数是否合理。</li><li>内存使用率：队列的大小应该通过前期计算线程池任务的条数，来合理的设置队列的大小，不宜过小，让其不会溢出，因为溢出会走拒绝策略，多少会影响性能，也会增加复杂度。</li><li>下游系统抗并发能力：考虑下游系统是否能抗的住这么多并发量，不能把下游系统打挂了。</li><li>任务的优先级：高，中和低。PriorityBlockingQueue 如果一直有优先级高的任务提交到队列里，那么优先级低的任务可能永远不能执行。</li><li>任务的执行时间：长，中和短。如果一直有优先级高的任务提交到队列里，那么优先级低的任务可能永远不能执行。</li><li>任务的依赖性：是否依赖其他系统资源，如数据库连接。线程数应该设置越大</li><li>可以通过Runtime.getRuntime().availableProcessors()方法获得当前设备的CPU个数</li><li>建议使用有界队列。有界队列能增加系统的稳定性和预警能力，可以根据需要设大一点儿，比如几千。避免oom</li><li>尽量使用自定义的线程池，而不是使用 Executors 创建的线程池，因为 newFixedThreadPool 线程池由于使用了 LinkedBlockingQueue，队列的容量默认无限大，实际使用中出现任务过多时会导致内存溢出；newCachedThreadPool 线程池由于核心线程数无限大，当任务过多的时候会导致创建大量的线程，可能机器负载过高导致服务宕机。</li></ul><h1 id="_73-executors创建线程池对象的弊端-阿里开发规范为什么不允许executors快速创建线程池" tabindex="-1"><a class="header-anchor" href="#_73-executors创建线程池对象的弊端-阿里开发规范为什么不允许executors快速创建线程池"><span>73. Executors创建线程池对象的弊端? 阿里开发规范为什么不允许Executors快速创建线程池？</span></a></h1><ul><li>newSingleThreadExecutor (单线程的线程池) 适用于串行执行任务的场景，一个任务一个任务地执行。</li><li>newFixedThreadPool (固定数目线程的线程池) CPU密集型的任务</li><li>newCachedThreadPool (可缓存线程的线程池)用于并发执行大量短期的小任务。（60 秒不执行任务）的线程将被回收</li><li>newScheduledThreadPool (定时及周期执行的线程池)周期性执行任务的场景，需要限制线程数量的场景</li><li>FixedThreadPool和SingleThreadExecutor使用LinkedBlockingQueue允许请求的队列长度为Integer.MAX_VALUE，任务执行时间长，队列堆积导致OOM</li><li>CachedThreadPool和ScheduledThreadPool最大线程数量为Integer.MAX_VALUE，任务执行时间长，任务堆积导致创建大量线程导致OOM</li></ul><h1 id="_74-线程池异常怎么处理" tabindex="-1"><a class="header-anchor" href="#_74-线程池异常怎么处理"><span>74. 线程池异常怎么处理</span></a></h1><ul><li>trycatch捕获</li><li>submit执行，Future.get接受异常</li><li>重写ThreadPoolExcutor.afterExcute方法，处理传递的异常引用</li><li>实例化时，传入自定义ThreadFactory,设置Thread.uncaughtExceptionHandler处理未检测的异常</li></ul><h1 id="_75-线程池状态" tabindex="-1"><a class="header-anchor" href="#_75-线程池状态"><span>75. 线程池状态</span></a></h1><ul><li>RUNNING：正常状态，接受新的任务，处理等待队列中的任务。</li><li>SHUTDOWN：不接受新的任务提交，但是会继续处理等待队列中的任务。队列为空，并且线程池中执行的任务也为空,进入TIDYING状态;(shutdown)</li><li>STOP：不接受新的任务提交，不再处理等待队列中的任务，中断正在执行任务的线程。线程池中执行的任务为空,进入TIDYING状态;(shutdownnow)</li><li>TIDYING：所有的任务都销毁了，workCount为0，转换为此状态时会执行terminated()。</li><li>TERMINATED：terminated()方法结束后线程池的状态。<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/77b2ca8a8016db88b8754.png" alt="threadpoolstatus.png"></li></ul><h1 id="_76-线程池调优" tabindex="-1"><a class="header-anchor" href="#_76-线程池调优"><span>76. 线程池调优</span></a></h1><ul><li>事前评估-&gt;监控/告警-&gt;动态调整-&gt;事后观察</li></ul><h1 id="_77-线程池使用注意事项" tabindex="-1"><a class="header-anchor" href="#_77-线程池使用注意事项"><span>77. 线程池使用注意事项</span></a></h1><ul><li>选择合适的线程池大小</li><li>选择有界队列并设置大小，防止OOM</li><li>尽量使用自定义ThreadPoolExecutor而不是Executors 创建的线程池</li></ul><h1 id="_78-你能设计实现一个线程池吗" tabindex="-1"><a class="header-anchor" href="#_78-你能设计实现一个线程池吗"><span>78. 你能设计实现一个线程池吗</span></a></h1><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/16f08fa922ac6a89fcaea.png" alt="customthreadpool.png" tabindex="0"><figcaption>customthreadpool.png</figcaption></figure><h1 id="_79-单机线程池执行断电了应该怎么处理" tabindex="-1"><a class="header-anchor" href="#_79-单机线程池执行断电了应该怎么处理"><span>79. 单机线程池执行断电了应该怎么处理？</span></a></h1><ul><li>对阻塞队列持久化；正在处理任务事务控制；断电之后正在处理任务的回滚，通过日志恢复该次操作；服务器重启后阻塞队列中的数据再加载。</li></ul><h1 id="_80-fork-join框架" tabindex="-1"><a class="header-anchor" href="#_80-fork-join框架"><span>80. Fork/Join框架？</span></a></h1><ul><li>用于并行执行任务的框架，是一个把大任务分割成若干个小任务，最终汇总每个小任务结果后得到大任务结果的框架。</li><li>分而治之:Fork/Join 框架的定义体现了分治思想：将一个规模为 N 的问题分解为 K 个规模较小的子问题，这些子问题相互独立且与原问题性质相同。求出子问题的解，就可得到原问题的解。</li><li>工作窃取算法:大任务拆成了若干个小任务，把这些小任务放到不同的队列里，各自创建单独线程来执行队列里的任务。有的线程干活块，有的线程干活慢。干完活的线程去帮没干完活的线程干活。去其它线程的队列里窃取一个任务来执行，这就是所谓的工作窃取。工作窃取发生的时候，它们会访问同一个队列，为了减少窃取任务线程和被窃取任务线程之间的竞争，通常任务会使用双端队列，被窃取任务线程永远从双端队列的头部拿，而窃取任务的线程永远从双端队列的尾部拿任务执行。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//计算 1~n 之间的和：1+2+3+…+n 设置一个分割阈值，任务大于阈值就拆分任务 任务有结果，所以需要继承 RecursiveTask

public class CountTask extends RecursiveTask&lt;Integer&gt; {
    private static final int THRESHOLD = 16; // 阈值
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
            rightTask.fork(); // 等待子任务执行完，并得到其结果
            int leftResult = leftTask.join();
            int rightResult = rightTask.join(); // 合并子任务
            sum = leftResult + rightResult;
        }
        return sum;
    }

    public static void main(String[] args) {
        ForkJoinPool forkJoinPool = new ForkJoinPool(); // 生成一个计算任务，负责计算1+2+3+4
        CountTask task = new CountTask(1, 100); // 执行一个任务
        Future&lt;Integer&gt; result = forkJoinPool.submit(task);
        try {
            System.out.println(result.get());
        } catch (InterruptedException e) {
        } catch (ExecutionException e) {
        }
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>ForkJoinTask 与一般 Task 的主要区别在于它需要实现 compute 方法，在这个方法里，首先需要判断任务是否足够小，如果足够小就直接执行任务。如果比较大，就必须分割成两个子任务，每个子任务在调用 fork 方法时，又会进 compute 方法，看看当前子任务是否需要继续分割成子任务，如果不需要继续分割，则执行当前子任务并返回结果。使用 join 方法会等待子任务执行完并得到其结果。</li></ul><p>=====================================================================================================================</p><h1 id="_81-多线程的优缺点" tabindex="-1"><a class="header-anchor" href="#_81-多线程的优缺点"><span>81. 多线程的优缺点?</span></a></h1><ul><li><p>优点</p><ul><li>使用多线程可以把程序中占据时间长的任务放到后台去处理，如图片、视频的下载。生成订单快照、发送邮件等</li><li>发挥多核处理器的优势，并发执行让系统运行的更快、更流畅，用户体验更好</li></ul></li><li><p>缺点</p><ul><li>大量的线程降低代码的可读性</li><li>更多的线程需要更多的内存空间</li><li>当多个线程对同一个资源出现争夺时候要注意线程安全的问题</li></ul></li><li><p>CPU核之间的数据一致性保证方法</p><ul><li>总线加锁：通过在总线加LOCK#锁的方式；只能有一个CPU能够运行，其他CPU都阻塞，效率低下</li><li>缓存一致性协议MESI：确保每个缓存中使用的共享变量的副本是一致的：当某个CPU在写数据时，如果发现操作的变量是共享变量，则会通知其他CPU告知该变量的缓存行是无效的，其他CPU在读取该变量时，发现其无效会重新从主存中加载数据</li></ul></li></ul><h1 id="_82-java如何实现原子操作" tabindex="-1"><a class="header-anchor" href="#_82-java如何实现原子操作"><span>82. java如何实现原子操作？</span></a></h1><ul><li>原子操作是指一个不受其他操作影响的操作任务单元。处理器使用基于对缓存加锁或总线加锁的方式，来实现多处理器之间的原子操作</li><li>使用总线锁保证原子性：使用处理器提供的一个LOCK＃信号，当一个处理器在总线上输出此信号时，其他处理器的请求将被阻塞住，那么该处理器可以独占共享内存。对应#lock前缀 加上后面具体的指令</li><li>使用缓存锁保证原子性：通过缓存一致性协议实现，对应位测试和修改指令：BTS、BTR、BTC；交换指令XADD、CMPXCHG，以及其他一些操作数和逻辑指令（如ADD、OR）等</li><li>使用循环CAS实现原子操作，CAS利用了处理器提供的CMPXCHG指令(java)</li><li>使用锁机制实现原子操作，锁机制保证了只有获得锁的线程才能够操作锁定的内存区域。JVM内部实现了很多种锁机制，有偏向锁、轻量级锁和互斥锁。除了偏向锁，JVM实现锁的方式都用了循环CAS，即当一个线程想进入同步块的时候使用循环CAS的方式来获取锁，当它退出同步块的时候使用循环CAS释放锁。</li></ul><h1 id="_83-wait和notify典型范式" tabindex="-1"><a class="header-anchor" href="#_83-wait和notify典型范式"><span>83. wait和notify典型范式？</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 等待方
synchronized(对象){
    while(条件不满足){//为什么被通知后仍要检查条件？防止多线程情况下，都从wait()返回时条件不满足导致程序出错
        对象.wait();
    }
    对应的处理逻辑
}
# 通知方
synchronized(对象){
    改变条件
    对象.notifyAll();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_84-多线程开发注意事项" tabindex="-1"><a class="header-anchor" href="#_84-多线程开发注意事项"><span>84. 多线程开发注意事项</span></a></h1><ul><li>给线程命名，方便找bug和跟踪、jstack分析程序或者问题排查</li><li>最小化同步范围</li><li>优先使用volatile，而不是 synchronized</li><li>尽可能使用更高层次的并发工具而非wait和notify方法来实现线程通信</li><li>优先使用并发容器，而非同步容器</li><li>考虑使用线程池</li><li>小心死锁</li><li>尽量避免上下文切换</li><li>控制资源 <ul><li>硬件资源：带宽的上传/下载速度、硬盘读写速度和CPU的处理速度；使用集群并行执行程序。让程序在多机上运行。比如使用ODPS、Hadoop或者自己搭建服务器集群，不同的机器处理不同的数据。可以通过“数据ID%机器数”，计算得到一个机器编号，然后由对应编号的机器处理这笔数据。</li><li>软件资源：数据库的连接数和socket连接数等；使用资源池将资源复用。比如使用连接池将数据库和Socket连接复用，或者在调用对方webservice接口获取数据时，只建立一个连接。</li><li>根据不同的资源限制调整程序的并发度</li></ul></li></ul><h1 id="_85-final域的重排" tabindex="-1"><a class="header-anchor" href="#_85-final域的重排"><span>85. final域的重排</span></a></h1><ul><li>基本数据类型: <ul><li>final域写：禁止final域写与构造方法重排序，保证该对象对所有线程可见时，该对象的final域全部已经初始化过</li><li>final域读（针对处理器）：禁止初次读对象的引用与读该对象包含的final域的重排序。保证读一个对象的final域之前先读这个包含这个final域的对象的引用</li></ul></li><li>引用数据类型： <ul><li>额外约束：禁止在构造函数对一个final修饰的对象的成员域的写入与随后将这个被构造的对象的引用赋值给引用变量重排序</li></ul></li><li>final实现 <ul><li>写final域会要求编译器在final域写之后，构造函数返回前插入一个StoreStore屏障</li><li>读final域会要求编译器在读final域的操作前插入一个LoadLoad屏障</li></ul></li></ul><h1 id="_86-锁分类-重入锁、互斥锁、读写锁、公平锁、非公平锁、自旋锁、适应自旋锁" tabindex="-1"><a class="header-anchor" href="#_86-锁分类-重入锁、互斥锁、读写锁、公平锁、非公平锁、自旋锁、适应自旋锁"><span>86. 锁分类（重入锁、互斥锁、读写锁、公平锁、非公平锁、自旋锁、适应自旋锁）</span></a></h1><ul><li>互斥锁：没有获取到锁的线程进入阻塞，线程阻塞涉及到用户态和内核态切换的问题，性能可能很差</li><li>读写锁：读取锁允许多个reader线程同时持有，而写入锁最多只能有一个writer线程持有</li><li>公平锁：先请求锁的人，在锁被释放时，优先获得锁，即同步队列的第一个节点先获取锁，需要频繁的上下文切换</li><li>不公平锁：无论先后，线程调度器将会随机给某个线程锁，不用计算线程时序，上下文切换较少，有可能刚释放锁的线程能再次获取到锁，导致其他线程永远无法获取到锁，造成“饥饿”现象</li><li>自旋锁：没有获取到锁的线程不进入阻塞，而是让该线程等待一段时间（执行一段无意义的循环），一直循环等待释放锁。自旋等待不能替代阻塞，虽然可以避免线程切换带来的开销，但是它占用了处理器的时间。如果持有锁的线程很快就释放了锁，那么自旋的效率高，反之，自旋的线程就会浪费处理器的资源，所以，自旋等待的时间（自旋次数）必须要有上限，如果自旋超过了定义的时间仍然没有获取到锁，则应该被挂起</li><li>自适应是指由前一次在同一个锁上的自旋时间及锁的拥有者的状态来决定自旋次数。线程如果自旋成功了，那么下次自旋的次数会更加多，因为虚拟机认为既然上次成功了，那么此次自旋也很有可能会再次成功，那么它就会允许自旋等待持续的次数更多。反之，如果对于某个锁，很少有自旋能够成功的，那么在以后要或者这个锁的时候自旋的次数会减少甚至省略掉自旋过程，以免浪费处理器资源。</li></ul><h1 id="_88-乐观锁常见的两种实现方式是什么" tabindex="-1"><a class="header-anchor" href="#_88-乐观锁常见的两种实现方式是什么"><span>88. 乐观锁常见的两种实现方式是什么？</span></a></h1><ul><li>版本号机制:一般是在数据表中加上一个数据版本号version字段表示数据被修改的次数，当数据被修改时version会加1。当线程要更新数据值时,会先读取version值，在提交更新时，若刚才读取到的version值为当前数据库中的version值相等时才更新，否则重试更新操作直到成功</li><li>CAS算法:compare and swap（比较与交换，是原子操作），不使用锁的情况下实现多线程之间的变量同步（非阻塞同步Non-blocking Synchronization）。CAS算法涉及到三个操作数：需要读写的内存值V；进行比较的值A；拟写入的新值B;当且仅当V的值等于A时，CAS通过原子方式用新值B来更新V值，否则不会执行任何操作。一般情况下会自旋（不断的重试。无限循环）</li></ul><h1 id="_89-synchronized-和-volatile-的区别是什么" tabindex="-1"><a class="header-anchor" href="#_89-synchronized-和-volatile-的区别是什么"><span>89. synchronized 和 volatile 的区别是什么？</span></a></h1><ul><li>volatile 本质是在告诉 JVM当前变量在寄存器（工作内存）中的值是不确定的，需要从主存中读取；synchronized 则是锁定当前变量，只有当前线程可以访问该变量，其他线程被阻塞住。</li><li>volatile 仅能使用在变量级别；synchronized 则可以使用在变量、方法、和类级别的。</li><li>volatile 仅能实现变量的修改可见性，不能保证原子性；而 synchronized 则可以保证变量的修改可见性和原子性。</li><li>volatile 不会造成线程的阻塞；synchronized 可能会造成线程的阻塞。</li><li>volatile 标记的变量不会被编译器优化；synchronized 标记的变量可以被编译器优化。</li></ul><h1 id="_90-什么场景下可以使用-volatile-替换-synchronized" tabindex="-1"><a class="header-anchor" href="#_90-什么场景下可以使用-volatile-替换-synchronized"><span>90. 什么场景下可以使用 volatile 替换 synchronized ？</span></a></h1><ul><li>只需要保证共享资源的可见性的时，synchronized保证可操作的原子性一致性和可见性。volatile适用于新值不依赖于旧值的情形</li><li>1 写 N 读</li><li>不与其他变量构成不变性条件时候使用 volatile</li></ul><h1 id="_91-simpledateformat是线程安全的吗" tabindex="-1"><a class="header-anchor" href="#_91-simpledateformat是线程安全的吗"><span>91. SimpleDateFormat是线程安全的吗？</span></a></h1><ul><li>DateFormat所有实现，包括SimpleDateFormat都不是线程安全的，可将SimpleDateFormat限制在ThreadLocal中。或者使用joda-time库</li></ul><h1 id="_91-1-concurrenthashmap√" tabindex="-1"><a class="header-anchor" href="#_91-1-concurrenthashmap√"><span>91.1. ConcurrentHashMap√</span></a></h1><ul><li>CopyOnWriteArrayList:适合读多写少的场景，不能用于实时读，因为执行写操作时会复制原数组并执行写入操作，读操作可以安全进行，但读取的可能是旧数据，原数组比较大时可能发生young gc或者full gc</li><li>ConcurrentLinkedQueue是一个基于链接节点的无界线程安全队列，先进先出</li></ul><h1 id="_91-2-volatile-变量和-atomic-变量有什么不同" tabindex="-1"><a class="header-anchor" href="#_91-2-volatile-变量和-atomic-变量有什么不同"><span>91.2. volatile 变量和 atomic 变量有什么不同？</span></a></h1><ul><li>volatile变量确保有序性，即写操作会发生在后续的读操作之前，但它并不能保证原子性。</li><li>AtomicInteger类提供的atomic方法具有原子性</li></ul><h1 id="_91-3-什么是-callable、future、futuretask" tabindex="-1"><a class="header-anchor" href="#_91-3-什么是-callable、future、futuretask"><span>91.3. 什么是 Callable、Future、FutureTask？</span></a></h1><ul><li>Callable 接口类似回调的 Runnable可以被 Future 拿到</li><li>Future 接口，表示异步任务，是还没有完成的任务给出的未来结果。所以说 Callable 用于产生结果，Future 用于获取结果。</li><li>FutureTask表示一个可以取消的异步运算。它有启动和取消运算、查询运算是否完成和取回运算结果等方法。只有当运算完成的时候结果才能取回，如果运算尚未完成get方法将会阻塞。实现基于AQS</li></ul>`,221),s=[r];function t(d,c){return i(),l("div",null,s)}const v=e(a,[["render",t],["__file","javahighconcurrency.html.vue"]]),h=JSON.parse('{"path":"/interview/javahighconcurrency.html","title":"java并发","lang":"zh-CN","frontmatter":{"title":"java并发","date":"2023-01-01T00:00:00.000Z","tags":"面试","categories":"面试","description":"1. 并发与并行区别? 并发:指多个任务在同一时间执行。这些任务在单核或多核处理器上通过进程或线程轮流地占有处理器资源来执行。 并行:指多个任务在同一时刻执行。多个处理器同时执行多个任务，每个核心实际上可以在同一时间独立地执行不同的任务。 串行:多个事件按顺序执行 并行就是每个人对应一个阿姨，同时打饭；而并发就是一个阿姨，轮流给每个人打饭。 2. 进程...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/interview/javahighconcurrency.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"java并发"}],["meta",{"property":"og:description","content":"1. 并发与并行区别? 并发:指多个任务在同一时间执行。这些任务在单核或多核处理器上通过进程或线程轮流地占有处理器资源来执行。 并行:指多个任务在同一时刻执行。多个处理器同时执行多个任务，每个核心实际上可以在同一时间独立地执行不同的任务。 串行:多个事件按顺序执行 并行就是每个人对应一个阿姨，同时打饭；而并发就是一个阿姨，轮流给每个人打饭。 2. 进程..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/9c42c9f380bcb496ccaae.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"java并发\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/9c42c9f380bcb496ccaae.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/73d10d14f94df858737e5.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/36e655d8c884c2fc1727a.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/20ce26451ceb038b9daac.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/b2a1c6c49d8b99afb099f.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/76465270e62b6e41c4af9.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/ed5d433a7450dbaf88e23.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/567a83434eb62881d322b.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/06ab05afe794f6421797d.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/b0a1f7d7ac59d447ff05f.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/798b56179a1383beb4c98.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/b9c204aae190e13fcbfd2.jpg\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/77b2ca8a8016db88b8754.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/16f08fa922ac6a89fcaea.png\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":78.32,"words":23496},"filePathRelative":"interview/javahighconcurrency.md","localizedDate":"2023年1月1日","excerpt":"<!-- more -->\\n<h1>1. 并发与并行区别?</h1>\\n<ul>\\n<li>并发:指多个任务在同一时间执行。这些任务在单核或多核处理器上通过进程或线程轮流地占有处理器资源来执行。</li>\\n<li>并行:指多个任务在同一时刻执行。多个处理器同时执行多个任务，每个核心实际上可以在同一时间独立地执行不同的任务。</li>\\n<li>串行:多个事件按顺序执行</li>\\n<li>并行就是每个人对应一个阿姨，同时打饭；而并发就是一个阿姨，轮流给每个人打饭。</li>\\n</ul>\\n<h1>2. 进程和线程的区别？</h1>\\n<ul>\\n<li>进程是程序运行和操作系统资源分配的基本单位，而线程是cpu调度和执行的基本单位</li>\\n</ul>","autoDesc":true}');export{v as comp,h as data};
