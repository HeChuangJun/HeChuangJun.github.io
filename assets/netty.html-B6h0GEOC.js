import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,a as l}from"./app-Cw8r8IGg.js";const s={},d=l(`<ul><li>linux网络I/O模型(对于操作系统而言，底层支持异步I/O通信) <ul><li>linux的内核将所有外部设备都看作一个文件来操作，对文件的读写操作会调用内核提供的系统命令，返回一个file descriptor(fd，文件描述符)。而对一个socket的读写也会有相应的描述符，成为socketfd(socket描述符)，描述符就是一个数字，它只想内核中的一个结构体（文件路径，数据区等一个些属性）</li><li>根据UNIX网络编程对I/O模型的分类，UNIX提供了5中I/O模型 <ul><li>阻塞I/O模型:缺省情形下，所有文件的操作都是阻塞的。以套接字接口为例：在进程空间中调用recvfrom，其系统调用直到数据包到达且被复制到应用进程的缓冲区中或者发生错误时才返回，在此期间一直会等待，进程在从调用recvfrom开始到它返回的争端时间内都是被阻塞的</li><li>非阻塞I/O模型:recvfrom从应用层到内核的时候，如果该缓冲区没有数据的话，就直接返回一个EWOULDBLIOCK错误，一般都对非阻塞I/O模型进行轮询检查这个状态，看内核是不是又数据到来</li><li>I/O复用模型:linux提供select/poll，进程通过将一个或多个fd传递给select或epoll系统调用，阻塞在select操作上，这样select/poll可以检测到多个fd是否处于就绪状态，select/poll是顺序扫描fd是否就绪，而且支持的fd数量有限。linux还提供了一个epoll系统调用，epoll使用基于时间驱动方式代替顺序扫描，性能更高。当有fd就绪是，就立即回调函数rollback</li><li>信号驱动I/O模型:首先开启套接扣信号驱动I/O功能，并通过系统调用sigaction执行一个信号处理函数（此系统调用立即返回，进程继续工作，非阻塞）。当数据准备就绪时，就为该进程生成一个SIGIO信号，通过信号回调通知应用程序调用recvfrom来读取数据，并通知主循环函数处理数据。</li><li>异步I/O:告知内核启动某个操作，并让内核在整个操作完成后（包括将数据从内核复制到用户自己的缓冲区）通知调用者，与信号驱动模型的主要区别是：信号驱动I/O有内核通知我们什么时候开始I/O操作，而异步I/O模型这由内核通知我们I/O操作何时完成</li></ul></li></ul></li><li>I/O多路复用技术 <ul><li>通过把多个I/O的阻塞复用到同一个select的阻塞上，从而使得系统在单线程的情况下可以同时处理多个客户端需求，与传统的多线程/多进程模型相比，I/O多路复用的最大优势是系统开销小，系统不需要创建新的额外进程或者线程。也不需要维护这些进程和线程的运行，降低了系统的苇湖梁，节省系统资源</li><li>I/O复用的主要应用场景：服务器需要同时处理多个处于监听状态或者多个连接状态的套接字，多种网络协议的套接字</li><li>目前支持I/O多路复用的系统调用有select，pselect，poll，epoll，epoll新特性 <ul><li>支持一个进程的socket描述符（FD）不受限制（仅受限于操作系统的最大文件句柄数）：select最大的缺陷是单个进程所打开的FD是有一定限制的，它由FD_SETSIZE设置，默认1024。可以选择修改这个宏然后重新编译内核，但这回带来网络效率的下降。也可以选择多进程的方案（Apache），但创建进程需要付出一定代价，而且进程之间的数据交换非常麻烦。对于没有共享内存的java，需要通过socket通信或者其它方式进行数据同步，带来额外的性能消耗，增加了程序复杂度。1GB内存的机器上大约10万个句柄左右</li><li>I/O效率不会随着FD数目的增加而线性下降:传统的select/poll另一个致命弱点就是当你拥有一个很大的socket集合，由于网络延时或者链路空闲，在任一时刻只有少部分的socket是&quot;活跃&quot;的，但是select/poll每次调用都会现行扫描全部的集合，导致效率呈现线性下降。而内核实现中epoll是根据每个fd上面的callback函数实现的，只有活跃的socket才会主动调用callback函数，其它的idle状态socket则不会。epoll实现了一个伪AIO</li><li>使用mmap加速内核与用户空间的消息传递:无论select，poll还是epoll都需要内核把FD消息通知给用户空间，如何避免不必要的内存复制就显得非常重要，epoll是通过内核和用户控件mmap同一块内存实现</li></ul></li></ul></li><li>NIO入门 <ul><li>传统的同步阻塞BIO编程:采用BIO通信模型的服务端，通常由一个独立的Acceptor线程负责监听客户端的连接，它接收到客户端连接请求之后未每个客户端创建一个新的线程进行链路处理，处理完成之后，通过输出流返回应答给客户端，线程销毁（典型的已请求一应答通信模型）。该模型最大的问题是当客户端并发访问量增加后，服务端的线程个数和客户端并发访问数成1:1正比关系，并发量很大是，系统会发生线程堆栈溢出、创建新线程失败等问题，导致进程宕机或僵死，不能对外提供服务。</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class TimeServer{
    
    public static void main(String[] args) throws IOException{
        int port = 6666;
        ServerSocket serverSocket = null;
        try {
            serverSocket = new ServerSocket(port);
            Socket socket = null;
            System.out.println(&quot;BIOServer listening...&quot;);
            while (true){//阻塞
                socket = serverSocket.accept();
                new Thread(new TimeServerHandler(socket)).start();
            }
        } finally {
            if(serverSocket != null){
              serverSocket.close();
              serverSocket = null;
            }
        }
    }
}
 public class TimeServerHandler implements Runnable{
 
    private  Socket socket;
    public TimeServerHandler(Socket socket){
        this.socket = socket;
    }
    @Override
    public void run() {
        BufferedReader bufferedReader = null;
        PrintWriter printWriter = null;
        try {
            bufferedReader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            printWriter = new PrintWriter(this.socket.getOutputStream(),true);
            String currentTime = null;
            String body = null;
            while (true){
                body = bufferedReader.readLine();
                if(body == null)break;
                System.out.println(&quot;The time Server receive oder:&quot; + body);
                currentTime = &quot;QUERY TIME ORDER&quot;.equalsIgnoreCase(body)?new java.util.Date(System.currentTimeMillis()).toString():&quot;BAD ORDER&quot;;
                printWriter.println(currentTime);
            }
        } catch (IOException e) {
            e.printStackTrace();
            if(bufferedReader != null){
                try {
                    bufferedReader.close();
                } catch (IOException e1) {
                    e1.printStackTrace();
                }
            }
            if(printWriter != null){
                printWriter.close();
                printWriter = null;
            }
            if(this.socket != null){
                try {
                    this.socket.close();
                } catch (IOException e1) {
                    e1.printStackTrace();
                }
                this.socket = null;
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class TimeClient {
    public static void main(String[] args) {
        int port = 6666;
        Socket socket = null;
        BufferedReader bufferedReader = null;
        PrintWriter printWriter = null;
        try {
            socket = new Socket(&quot;127.0.0.1&quot;,port);
            bufferedReader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            printWriter = new PrintWriter(socket.getOutputStream(),true);
            printWriter.println(&quot;QUERY TIME ORDER&quot;);
            System.out.println(&quot;Send oder 2 server succeed.&quot;);
            String resp = bufferedReader.readLine();
            System.out.println(&quot;Now is : &quot;+ resp);
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if(printWriter != null){
                printWriter.close();
            }
            if(bufferedReader != null){
                try {
                    bufferedReader.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            if(socket != null){
                try {
                    socket.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>伪异步I/O编程:为了解决同步阻塞I/O面临的一个链路需要一个线程处理的问题，后来对他的线程模型进行优化，后端通过一个线程池来处理多个客户端的请求接入，形成客户端个数M；线程池最大线程数N的比例关系，其中M可以远远大于N，通过线程池可以灵活地调配线程资源，设置线程的最大值，防止由于海量并发接入导致线程耗尽 <ul><li>伪异步I/O通信弊端: <ul><li>java.io.InputStream的read(byte b[])方法在对socket的输入流进行读取操作的时候，会一直阻塞下去，直到发生:1.有数据可读，2.可用数据以及读取完毕，3.空指针异常或者I/O异常。当对方发送请求或者应答消息比较缓慢、或者网络传输比较慢时，读取输入流的一方的通信线程将被长时间阻塞，在此期间其它接入消息只能在消息队列中排队</li><li>java.io.OutputStreamwrite(byte b[])方法在对socket的输出流进行写操作时，会一直阻塞下去，直到所有的字节全部写入完毕，或者发生异常。当消息的接收方处理缓慢的时候，将不能及时地从TCP缓冲区读取数据，将导致发送方的TCP windows size不断减小，直到为0，双方处于Keep-Alive状态，消息发送方将不能再向TCP缓冲区写入消息，这时如果饿采用的是同步阻塞I/O，write操作将被五险阻塞，直到TCP windows size 大于0 或者发生I/O异常。</li></ul></li><li>可能的级联故障: <ul><li>服务端处理缓慢，返回应答消息耗费60s,平时只需要10ms</li><li>采用伪异步I/O的线程正在读取故障服务节点的响应，由于读取输入流的阻塞的，因此，它将会被同步阻塞60s</li><li>假如所有的可用线程都被故障服务器阻塞，那后续所有的I/O消息都将在队列种排队。</li><li>由于线程池采用阻塞队列实现，当队列积满之后，后续如队列的操作将被阻塞</li><li>由于前端只有一个Acceptor线程接收客户端接入，它被阻塞在线程池同步阻塞队列之后，新的客户端请求消息将被拒绝，客户端会发生大量的连接超时。</li><li>由于几乎所有的连接都超时，调用者会认为系统已经崩溃，无法接收新的请求消息</li></ul></li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class TimeServer{

    public static void main(String[] args) throws IOException{
        int port = 6666;
        ServerSocket serverSocket = null;
        try {
            serverSocket = new ServerSocket(port);
            Socket socket = null;
            System.out.println(&quot;BIOServer listening...&quot;);
            ExecutorService executorService = new ThreadPoolExecutor(Runtime.getRuntime().availableProcessors(),50,120L, TimeUnit.SECONDS,new ArrayBlockingQueue&lt;Runnable&gt;(10000));
            while (true){//阻塞
                socket = serverSocket.accept();
                executorService.execute(new TimeServerHandler(socket));
            }
        } finally {
            if(serverSocket != null){
                serverSocket.close();
                serverSocket = null;
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>NIO编程: <ul><li>缓冲区Buffer:Buffer是一个对象，包含一些要写入或者读出的数据，在面向流的I/O中，可以直接将数据写入或者将数据直接读到Stream对象中。在NIO库中，写入和读取数据都是用缓冲区进行处理的。缓冲器实质上市一个数组。通常是一个字节数组ByteBuffer，缓冲区提供对数据的结构化访问以及维护读写位置limit等信息。每一种Java基本类型（Boolean除外）都有对应的缓冲区（ByteBuffer、CharBuffer、ShortBuffer、IntBuffer、LongBuffer、FloatBuffer、DoubleBuffer）。其中ByteBuffer还提供特殊的操作，方便网络读写</li><li>通道Channel:Channel是一个全双工通道，可以通过它可以双向地读，写入或者同时读写数据，而流只是一个方向上移动，一个流必须是InputSteam或者OutputStream的子类。Channel可以分成两大类：分别是用于网络读写的SelectableChannel和用于文件操作的FileChannel</li><li>多路复用器Selector:提供选择已经就绪的任务的能力。Selector会不断地轮询注册在其上的Channel，如果某个Channel上面有新的TCP连接接入、读和写时间，这个Channel就处于就绪状态，会被Selector轮询出来，然后通过SelectionKey就可以获取就绪Channel的集合，进行后续的I/O操作。一个多路复用器Selector可以同时轮询多个Channel。使用epoll实现，并没有最大连接句柄1024/2048的限制（select）。只需一个线程负责Selector的轮询，就可以介入成千上万的客户端</li><li>优点: <ul><li>客户端发起的连接操作是异步的，可以通过再多路复用器注册OP_CONNECT等待后续结果，不需要像之前客户端那样被同步阻塞</li><li>SocketChannel的读写操作都是一步的，如果没有可读写的数据它不会同步等待，直接返回，这样I/O通信线程就可以处理其他的链路，不需要同步等待这个链路可用</li><li>线程模型的优化:JDK的Selector在Linux等主流操作系统上通过epoll实现，它没有句柄数限制（只受限于操作系统的最大句柄数或者对单个进程的句柄限制）。一个Selector线程可以同时处理成千上万个客户端的连接，并且性能不会随着客户端的增加而线性下降</li></ul></li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class TimeServer{

    public static void main(String[] args) throws IOException{
        int port = 6666;
        MultiplexerTimeServer timeServer = new MultiplexerTimeServer(port);
        new Thread(timeServer,&quot;NIO-MultplexerTimeServer-001&quot;).start();
    }

}
public class MultiplexerTimeServer implements Runnable {
    private Selector selector;
    private ServerSocketChannel servChannnel;
    private volatile boolean stop;
    public MultiplexerTimeServer(int port){
      try{
        selector = Selector.open();
        servChannnel = ServerSocketChannel.open();
        servChannnel.configureBlocking(false);
        servChannnel.socket().bind(new InetSocketAddress(port),1024);//https://www.cnblogs.com/qiumingcheng/p/9492962.html
        servChannnel.register(selector, SelectionKey.OP_ACCEPT);
        System.out.println(&quot;The time server is start in port :&quot; + port);
      } catch (IOException e) {
            e.printStackTrace();
            System.exit(1);
      }
    }
    public void stop(){
        this.stop = true;
    }
    @Override
    public void run() {
        while (!stop){
            try {
                selector.select(1000);//selector每隔1秒唤醒一次。当有处于就绪状态的Channel时，selector将返回就绪状态的SelectionKey集合，通过对就绪状态的Channel集合进行迭代可以进行网络的异步读写操作
                Set&lt;SelectionKey&gt; selectionKeySet = selector.selectedKeys();
                Iterator&lt;SelectionKey&gt; it = selectionKeySet.iterator();
                SelectionKey selectionKey = null;
                while (it.hasNext()){
                    selectionKey = it.next();
                    it.remove();
                    try {
                        handleInput(selectionKey);
                    }catch (Exception e){
                        if(selectionKey != null){
                            selectionKey.cancel();
                            if(selectionKey.channel() != null){
                                selectionKey.channel().close();
                            }
                        }
                    }
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        //多路复用器关闭后，所有注册在上面的Channel和Pipe等资源都会被自动去注册并关闭，所有不需要重复释放资源
        if(selector != null){
            try {
                selector.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
    private void handleInput(SelectionKey selectionKey) throws IOException {
        if(selectionKey.isValid()){
            //根据SelectionKey的操作未进行判断即可获知网络事件的类型
            if(selectionKey.isAcceptable()){
                ServerSocketChannel serverSocketChannel = (ServerSocketChannel) selectionKey.channel();//相当于完成了TCP的三次握手，TCP物理链路正式建立
                SocketChannel socketChannel = serverSocketChannel.accept();
                socketChannel.configureBlocking(false);
                socketChannel.register(selector,SelectionKey.OP_READ);
            }
            if(selectionKey.isReadable()){
                SocketChannel socketChannel = (SocketChannel) selectionKey.channel();
                //创建ByteBuffer，事先不知道客户端发送的码流大小，先开辟一个1K的缓冲区
                ByteBuffer readBuffer = ByteBuffer.allocate(1024);
                int readBytes = socketChannel.read(readBuffer);//此时的read非阻塞
                if(readBytes &gt; 0){//读到了字节，对字节进行编解码
                    //调用flip()之后，读/写指针position指到缓冲区头部，并且设置了最多只能读出之前写入的数据长度(而不是整个缓存的容量大小)。相当于limit =&gt; position;position=&gt;0
                    readBuffer.flip();
                    //返回剩余的可用长度，此长度为实际可读取的数据长度，最大自然是底层数组的长度
                    byte[] bytes = new byte[readBuffer.remaining()];
                    //从ByteBuffer中读取byte[]。将缓冲区可读的字节数组复制到新创建的字节数组中
                    readBuffer.get(bytes);
                    String body = new String(bytes,&quot;UTF-8&quot;);
                    System.out.println(&quot;The Time server receive order:&quot;+body);
                    String currentTime = &quot;QUERY TIME ORDER&quot;.equalsIgnoreCase(body)?new java.util.Date(System.currentTimeMillis()).toString():&quot;BAD ORDER&quot;;
                    doWrite(socketChannel,currentTime);
                } else if(readBytes &lt; 0){//-1 链路已经关闭，需要关闭SocketChannel，释放资源
                    selectionKey.cancel();
                    socketChannel.close();
                } else {
                    //读到0字节，忽略
                }
            }
        }
    }

    private void doWrite(SocketChannel socketChannel,String response) throws IOException {
        if(response !=null &amp;&amp; response.trim().length() &gt; 0){
            byte[] bytes = response.getBytes();
            ByteBuffer writeBuffer = ByteBuffer.allocate(bytes.length);
            writeBuffer.put(bytes);//将字节数组复制到缓冲区中
            writeBuffer.flip();
            socketChannel.write(writeBuffer);//并不能保证一次性能够把需要发送的字节数组发送完，会出现&quot;写半包&quot;的问题，此时需要注册写操作，不断轮询Selector将没有发送玩的ByteBuffer发送完毕。可以通过ByteBuffer的hasRemaining()方法判断消息是否发送完成。如果发送区的TCP缓冲区满，会导致写半包，此时需要注册监听写操作位，循环写，直到整包消息写入TCP缓冲区
        }
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class TimeClient{
  public static void main(String[] args){
        new Thread(new TimeClientHandle(&quot;127.0.0.1&quot;,6666)).start();
    }
}
public class TimeClientHandle implements Runnable{
    private String host;
    private int port;
    private Selector selector;
    private SocketChannel socketChannel;
    private volatile boolean stop;

    public TimeClientHandle(String host, int port) {
        this.host = host;
        this.port = port;
        try {
            selector = Selector.open();
            socketChannel = SocketChannel.open();
            socketChannel.configureBlocking(false);
        } catch (IOException e) {
            e.printStackTrace();
            System.exit(1);
        }


    }

    @Override
    public void run() {
        try{
            doConnect();
        }catch (IOException e){
            e.printStackTrace();
        }
        while(!stop){
            try {
                selector.select(1000);
                Set&lt;SelectionKey&gt; selectionKeySet = selector.selectedKeys();
                Iterator&lt;SelectionKey&gt; it = selectionKeySet.iterator();
                SelectionKey selectionKey = null;
                while (it.hasNext()) {
                    selectionKey = it.next();
                    it.remove();
                    try {
                        handleInput(selectionKey);
                    } catch (Exception e) {
                        e.printStackTrace();
                        if (selectionKey != null) {
                            selectionKey.cancel();
                            if (selectionKey.channel() != null) {
                                try {
                                    selectionKey.channel().close();
                                } catch (IOException e1) {
                                    e1.printStackTrace();
                                }
                            }
                        }
                    }
                }
            }catch (IOException e2) {
                e2.printStackTrace();
            }
        }
        // 多路复用器关闭后，所有注册在上面的Channel和Pipe等资源都会被自动去注册并关闭，所以不需要重复释放资源
        if(selector != null){
            try {
                selector.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    private void handleInput(SelectionKey key) throws IOException{
        if(key.isValid()){
            SocketChannel socketChannel = (SocketChannel) key.channel();
            if(key.isConnectable()){//处于连接状态，说明服务端以及返回ACK应答消息
                if(socketChannel.finishConnect()){//客户端连接成功
                    socketChannel.register(selector,SelectionKey.OP_READ);
                    doWrite(socketChannel);
                }else{
                    System.exit(1);
                }
                if(key.isReadable()){
                    ByteBuffer readBuffer = ByteBuffer.allocate(1024);
                    int readBytes = socketChannel.read(readBuffer);
                    if(readBytes &gt; 0){
                        readBuffer.flip();
                        byte[] bytes = new byte[readBuffer.remaining()];
                        readBuffer.get(bytes);
                        String body = new String(bytes,&quot;UTF-8&quot;);
                        System.out.println(&quot;Now is:&quot;+body);
                        this.stop = true;
                    }else if(readBytes &lt; 0){
                        //对链路关闭
                        key.cancel();
                        socketChannel.close();
                    }else{
                        //读到0字节忽略
                    }
                }
            }
        }
    }

    private void doConnect() throws IOException {
        if(socketChannel.connect(new InetSocketAddress(this.host,this.port))){
            socketChannel.register(selector,SelectionKey.OP_READ);
            doWrite(socketChannel);
        }else{
            socketChannel.register(selector,SelectionKey.OP_CONNECT);//当服务端返回TCP syn-ack消息后，Selector就能够轮询到这个SocketChannel处于连接就绪状态
        }
    }

    private void doWrite(SocketChannel socketChannel) throws IOException{
        byte[] req = &quot;QUERY TIME ORDER&quot;.getBytes();
        ByteBuffer writeBuffer = ByteBuffer.allocate(req.length);
        writeBuffer.put(req);
        writeBuffer.flip();
        socketChannel.write(writeBuffer);
        if(!writeBuffer.hasRemaining()){
            System.out.println(&quot;Send order 2 server succeed.&quot;);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>- AIO编程:NIO2.0引入了新的以不同送到的概念，并提供了异步文件通道和异步套接字通道的实现，异步通道提供两种方式获取操作结果。1.通过java.util.concurrent.Future类来表示异步操作的结果，2.在执行异步操作的时候传入一个java.nio.channels。CompletionHandler接口实现类作为操作完成的回调。
- NIO2.0的异步套接字通道是真正的异步非阻塞I/O,它对应UNIX网络编程中时间驱动I/O(AIO),它不需要通过多路复用器（Selector）对注册的通道进行轮询操作即可实现异步读写，异步Socket Channel是被动执行对象，不需要想NIO编程那样创建一个独立的I/O线程处理读写操作，对于AsynchronousServerSocketChannel和AsynChronousSocketChannel，它们都由JDK底层的线程池负责回调并驱动读写操作
</code></pre><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class TimeServer{
    public static void main(String[] args) throws IOException{
        AsyncTimeServerHandler timeServer = new AsyncTimeServerHandler(6666);
        new Thread(timeServer,&quot;AIO-AsyncTimeServerHandler-001&quot;).start();
    }

}
public class AsyncTimeServerHandler implements Runnable{
    private int port;
    CountDownLatch latch;
     AsynchronousServerSocketChannel asynchronousServerSocketChannel;
    public AsyncTimeServerHandler(int port){
        this.port = port;
        try {
            asynchronousServerSocketChannel = AsynchronousServerSocketChannel.open();
            asynchronousServerSocketChannel.bind(new InetSocketAddress(port));
            System.out.println(&quot;The time server is start in port :&quot; + port);
        } catch (IOException e) {
            e.printStackTrace();
            System.exit(1);
        }
    }

    @Override
    public void run() {
        countDownLatch = new CountDownLatch(1);
        doAccept();
        try{
            countDownLatch.await();
        }catch (InterruptedException e){
            e.printStackTrace();
        }
    }

    private void doAccept(){
        asynchronousServerSocketChannel.accept(this,new AcceptCompletionHandler());
    }


}

public class AcceptCompletionHandler implements CompletionHandler&lt;AsynchronousSocketChannel,AcceptCompletionHandler&gt; {

    @Override
    public void completed(AsynchronousSocketChannel result, AsyncTimeServerHandler attachment) {
        attachment.asynchronousServerSocketChannel.accept(attachment,this);
        ByteBuffer byteBuffer = ByteBuffer.allocate(1024);
        //ByteBuffer dst;接收缓冲区，用于从异步channel中读取数据包
        //Attachment a;异步channel携带的附件，通知回调的时候作为入参使用
        //CompletionHandler&lt;Integer,? super A&gt;;接收通知回调业务的handler
        result.read(byteBuffer,byteBuffer,new ReadCompletionHandler(result));
    }

    @Override
    public void failed(Throwable exc, AIOSocketServer attachment) {
        attachment.countDownLatch.countDown();
    }
}

public class ReadCompletionHandler implements CompletionHandler&lt;Integer,ByteBuffer&gt; {

    private AsynchronousSocketChannel channel;

    public ReadCompletionHandler(AsynchronousSocketChannel channel){
        if(this.channel == null){
            this.channel = channel;
        }

    }

    @Override
    public void completed(Integer result, ByteBuffer attachment) {
        attachment.flip();
        byte[] body = new byte[attachment.remaining()];
        attachment.get(body);
        try {
            String req = new String(body,&quot;UTF-8&quot;);
            System.out.println(&quot;The time server recive order :&quot;+ req);
            String currentTime = &quot;QUERY TIME ORDER&quot;.equalsIgnoreCase(req)?new java.util.Date(System.currentTimeMillis()).toString():&quot;BAD ORDER&quot;;
            doWrite(currentTime);
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void failed(Throwable exc, ByteBuffer attachment) {
        try {
            this.channel.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void doWrite(String currentTime){
        if(currentTime != null &amp;&amp; currentTime.trim().length() &gt; 0){
            byte[] bytes = (currentTime).getBytes();
            ByteBuffer writeBuffer = ByteBuffer.allocate(bytes.length);
            writeBuffer.put(bytes);
            writeBuffer.flip();
            channel.write(writeBuffer, writeBuffer, new CompletionHandler&lt;Integer, ByteBuffer&gt;() {
                @Override
                public void completed(Integer result, ByteBuffer buffer) {
                    //如果没有发送完就继续发送
                    if(buffer.hasRemaining()){
                        channel.write(buffer,buffer,this);
                    }
                }

                @Override
                public void failed(Throwable exc, ByteBuffer attachment) {
                    try {
                        channel.close();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            });
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class TimeClient{
    public static void main(String[] args) throws IOException{
        new Thread(new AsyncTimeClientHandler(6666),&quot;AIO-AsyncTimeClientHandler-001&quot;).start();
    }
}
public class AsyncTimeClientHandler implements Completionhandler&lt;Void,AsycTimeClientHandler&gt;,Runnable{
    private AsynchronousSocketChannel client;
    private String host;
    private int port;
    private CountDownLatch latch;
    public AsyncTimeClientHandler(String host,int port){
        this.host = host;
        this.port = port;
        try{
            client = AsynchronousSocketChannel.open();
        }catch(IOException e){
            e.printStatckTrace();
        }
    }
    @Override
    public void run() {
        latch = new CountDownLatch(1);//防止异步没执行完就线程就退出
        //A attachment: AsynchronousSocketChannel的附件，用于回调通知时作为入参被传递
        //CompletionHandler&lt;Void,? super A&gt; handler: 异步操作回调通知接口，由调用者实现
        client.connect(new InetSocketAddress(host,port),this,this);
        try {
            latch.await();
        } catch (InterruptedException e1){
            e1.printStackTrace();
        }
        try{
            client.close();
        }catch (IOException e){
            e.printStackTrace();
        }
    }



    @Override
    public void completed(Void result, AIOSocketClient attachment) {
        byte[] req = &quot;QUERY TIME ORDER&quot;.getBytes();
        ByteBuffer writeBuffer = ByteBuffer.allocate(req.length);
        writeBuffer.put(req);
        writeBuffer.flip();
        client.write(writeBuffer, writeBuffer, new CompletionHandler&lt;Integer, ByteBuffer&gt;() {
            @Override
            public void completed(Integer result, ByteBuffer buffer) {
                if( buffer.hasRemaining()){
                    client.write(buffer,buffer,this);
                }else{
                    ByteBuffer readBuffer = ByteBuffer.allocate(1024);
                    client.read(readBuffer, readBuffer, new CompletionHandler&lt;Integer, ByteBuffer&gt;() {
                        @Override
                        public void completed(Integer result, ByteBuffer buffer) {
                            buffer.flip();
                            byte[] bytes = new byte[buffer.remaining()];
                            buffer.get(bytes);
                            String body;
                            try {
                                body = new String(bytes,&quot;UTF-8&quot;);
                                System.out.println(&quot;Now is :&quot; + body);
                                latch.countDown();
                            } catch (UnsupportedEncodingException e) {
                                e.printStackTrace();
                            }
                        }

                        @Override
                        public void failed(Throwable exc, ByteBuffer buffer) {
                            try {
                                client.close();
                            } catch (IOException e) {
                                e.printStackTrace();
                            }
                        }
                    });
                }
            }

            @Override
            public void failed(Throwable exc, ByteBuffer buffer) {
                try {
                    client.close();
                    latch.countDown();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        });
    }

    @Override
    public void failed(Throwable exc, AIOSocketClient attachment) {
        exc.printStackTrace();
        try {
            client.close();
            latch.countDown();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>不同I/O模型对比</li><li>Netty开发</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class TimeServer{
    public void bind(int port) throws Exception{
        EventLoopGroup boosGroup = new NioEventLoopGroup();//一组NIO线程，专门用于处理网络事件 服务端用于接收客户端的链接
        EventLoopGroup workerGroup = new NioEventLoopGroup();//进行SocketChannel的网络读写
        try {
            ServerBootstrap serverBootstrap = new ServerBootstrap();
            serverBootstrap.group(boosGroup,workerGroup)
                    .channel(NioServerSocketChannel.class)//类比ServerSocketChannel
                    .option(ChannelOption.SO_BACKLOG,1024).
                    childHandler(new ChildChannelHandler());//类似Reactor模式中的handler类，主要用于处理网络I/O事件，例如记录日志，对消息进行编解码等。
            ChannelFuture f = serverBootstrap.bind(port).sync();//sync同步阻塞方法等待绑定完成,ChannelFuture 用于异步操作的通知回调
            f.channel().closeFuture().sync();//sync阻塞等待服务端链路关闭后main函数才退出
        }finally {
            boosGroup.shutdownGracefully();
            workerGroup.shutdownGracefully();
        }
    }



    private class ChildChannelHandler extends  ChannelInitializer&lt;SocketChannel&gt;{

        @Override
        protected void initChannel(SocketChannel socketChannel) throws Exception {
            socketChannel.pipeline().addLast(new TimeServerHandler());
        }
    }

    public static void main(String[] args) throws Exception {
        new TimeServer().bind(8080);
    }
}
public class TimeServerHandler extends ChannelHandlerAdapter {
    @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {
        ByteBuf byteBuf = (ByteBuf) msg;
        byte[] req = new byte[byteBuf.readableBytes()];//readableBytes获取缓冲区可读的字节数
        byteBuf.readBytes(req);
        String body = new String(req,&quot;UTF-8&quot;);
        System.out.println(&quot;The Time server recevice order :  &quot;+body);
        String currentTime = &quot;QUERY TIME ORDER&quot;.equalsIgnoreCase(body)?new java.util.Date(
                System.currentTimeMillis()
        ).toString():&quot;BAD ORDER&quot;;
        ByteBuf resp = Unpooled.copiedBuffer(currentTime.getBytes());
        ctx.write(resp);
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception {
        ctx.close();//释放和ChannelHandlerContext相关联的句柄等资源
    }

    @Override
    public void channelReadComplete(ChannelHandlerContext ctx) throws Exception {
        ctx.flush();//将消息发送队列中的消息写入到SocketChannel中发送给对方。从性能角度考虑，为了防止频繁地唤醒Selector进行消息发送，Netty的write方法并不直接将消息写入SocketChannel中，调用write方法只是把待发送的消息放到发送缓冲数组中，再通过调用flush方法，将发送缓冲区中的消息全部写到SocketChannel中
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class TimeClient {
    public void connect(int port, String host) throws Exception{
        EventLoopGroup group = new NioEventLoopGroup();
        try{
            Bootstrap b = new Bootstrap();
            b.group(group).channel(NioSocketChannel.class)
                    .option(ChannelOption.TCP_NODELAY,true)
                    .handler(new ChannelInitializer&lt;SocketChannel&gt;() {
                        @Override
                        protected void initChannel(SocketChannel socketChannel) throws Exception {
                            socketChannel.pipeline().addLast(new TimeClentHandler());//处理网络I/O事件
                        }
                    });
            ChannelFuture f = b.connect(host,port).sync();
            f.channel().closeFuture().sync();
        }finally {
            group.shutdownGracefully();
        }

    }
    public static void main(String[] args) throws Exception {
        new TimeClient().connect(8080,&quot;127.0.0.1&quot;);
    }
}
public class TimeClentHandler extends ChannelHandlerAdapter {
    private final ByteBuf firstMessage;

    public TimeClentHandler() {
        byte[] req = &quot;QUERY TIME ORDER&quot;.getBytes();
        firstMessage = Unpooled.buffer(req.length);
        firstMessage.writeBytes(req);
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception {
        System.out.println(&quot;Unexpected exception from downstram :&quot; +cause.getMessage());
        ctx.close();
    }

    @Override
    public void channelActive(ChannelHandlerContext ctx) throws Exception {
        //当客户端和服务端TCP链路建立成功之后，Netty的NIO线程会调用channelActive方法
        ctx.writeAndFlush(firstMessage);
    }

    @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {
        ByteBuf byteBuf = (ByteBuf) msg;
        byte[] req = new byte[byteBuf.readableBytes()];
        byteBuf.readBytes(req);
        String body = new String(req,&quot;UTF-8&quot;);
        System.out.println(&quot;Now is :&quot; + body);
    }


}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>TCP粘包/拆包 <ul><li>TCP是个流协议，没有没有界限的一串数据。TCP底层并不了解上层业务数据的具体含义，会根据TCP缓冲区的实际情况进行报的划分，所以在业务上认为，一个完整的包可能被TCP拆分成多个包进行发送，也有可能吧多个小的包封装成一个大的数据包发送，就是所谓的TCP的粘包和拆包问题</li><li>假设客户端分别发送了两个数据包D1和D2给服务端，由于服务端一次读取到的字节数是不确定的，可能存在以下4种情况 <ul><li>服务端分2次读取到了两个独立的数据包，分别是D1和D2，没有粘包和拆包</li><li>服务端一次接受到两个数据包，D1和D2粘合在一起，被称为TCP粘包</li><li>服务端分两次读取到了两个数据包，第一次读取到了完整的D1包和D2的部分内容，第二次读取到了D2包的剩余内容，这被称为TCP拆包</li><li>服务端分两次读取到了两个数据包，第一次读取到了D1包的部分内容D1_1，第二次读取到了D1包的剩余内容D1_2和D2包的整包。</li><li>如果此时服务器TCP接收滑动窗口非常小，而数据包D1和D2比较大，很有可能发生第五中可能，即服务端分多次才能将D1和D2包接收完全，期间发生多次拆包</li></ul></li><li>TCP粘包/拆包发生的原因 <ul><li>应用程序写入的字节大小大于套接口发送的缓冲区大小</li><li>进行MSS（TCP协议的Maxitum Segment Size 最大报文段长度选项）大小的TCP分段</li><li>以太网帧的payload大于MTU（Maximum Transmission Unit网络上传送的最大数据包 单位是字节。 大部分网络设备的MTU都是1500）进行IP分片</li></ul></li><li>粘包问题的解决策略 <ul><li>消息定长：固定长度为n个字节，空位补弄个</li><li>在包尾增加回车换行符进行分割，如FTP协议</li><li>将消息分为消息头和消息体，消息头中包含表示消息总长度或者消息体长度的字段，通常涉及思路为消息头的第一个字段用int32表示消息的总长度</li><li>Netty提供了半包解码器解决TCP粘包/拆包问题</li></ul></li><li>TCP粘包异常案例</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class TimeServer{
    public void bind(int port) throws Exception{
        EventLoopGroup boosGroup = new NioEventLoopGroup();//一组NIO线程，专门用于处理网络事件 服务端用于接收客户端的链接
        EventLoopGroup workerGroup = new NioEventLoopGroup();//进行SocketChannel的网络读写
        try {
            ServerBootstrap serverBootstrap = new ServerBootstrap();
            serverBootstrap.group(boosGroup,workerGroup)
                    .channel(NioServerSocketChannel.class)//类比ServerSocketChannel
                    .option(ChannelOption.SO_BACKLOG,1024).
                    childHandler(new ChildChannelHandler());//类似Reactor模式中的handler类，主要用于处理网络I/O事件，例如记录日志，对消息进行编解码等。
            ChannelFuture f = serverBootstrap.bind(port).sync();//sync同步阻塞方法等待绑定完成,ChannelFuture 用于异步操作的通知回调
            f.channel().closeFuture().sync();//sync阻塞等待服务端链路关闭后main函数才退出
        }finally {
            boosGroup.shutdownGracefully();
            workerGroup.shutdownGracefully();
        }
    }



    private class ChildChannelHandler extends  ChannelInitializer&lt;SocketChannel&gt;{

        @Override
        protected void initChannel(SocketChannel socketChannel) throws Exception {
            socketChannel.pipeline().addLast(new TimeServerHandler());
        }
    }

    public static void main(String[] args) throws Exception {
        new TimeServer().bind(8080);
    }
}
public class TimeServerHandler extends ChannelHandlerAdapter {
    private int counter;
    @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {
        ByteBuf byteBuf = (ByteBuf) msg;
        byte[] req = new byte[byteBuf.readableBytes()];
        byteBuf.readBytes(req);
        String body = new String(req,&quot;UTF-8&quot;).substring(0,req.length -System.getProperty(&quot;line.separator&quot;).length());
        System.out.println(&quot;The Time server recevice order :  &quot;+body+&quot;; the counter is:&quot; + ++counter);
        String currentTime = &quot;QUERY TIME ORDER&quot;.equalsIgnoreCase(body)?new java.util.Date(
                System.currentTimeMillis()
        ).toString():&quot;BAD ORDER&quot;;
        currentTime = currentTime + System.getProperty(&quot;line.separator&quot;);
        ByteBuf resp = Unpooled.copiedBuffer(currentTime.getBytes());
        ctx.writeAndFlush(resp);
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception {
        ctx.close();
    }

    @Override
    public void channelReadComplete(ChannelHandlerContext ctx) throws Exception {
        ctx.flush();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class TimeClient {
    public void connect(int port, String host) throws Exception{
        EventLoopGroup group = new NioEventLoopGroup();
        try{
            Bootstrap b = new Bootstrap();
            b.group(group).channel(NioSocketChannel.class)
                    .option(ChannelOption.TCP_NODELAY,true)
                    .handler(new ChannelInitializer&lt;SocketChannel&gt;() {
                        @Override
                        protected void initChannel(SocketChannel socketChannel) throws Exception {
                            socketChannel.pipeline().addLast(new TimeClentHandler());
                        }
                    });
            ChannelFuture f = b.connect(host,port).sync();
            f.channel().closeFuture().sync();
        }finally {
            group.shutdownGracefully();
        }

    }
    public static void main(String[] args) throws Exception {
        new TimeClient().connect(8080,&quot;127.0.0.1&quot;);
    }
}
public class TimeClentHandler extends ChannelHandlerAdapter {
    private byte[] req;
    private int counter;

    public TimeClentHandler() {
        req = (&quot;QUERY TIME ORDER&quot; + System.getProperty(&quot;line.separator&quot;)).getBytes();
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception {
        System.out.println(&quot;Unexpected exception from downstram :&quot; +cause.getMessage());
        ctx.close();
    }

    @Override
    public void channelActive(ChannelHandlerContext ctx) throws Exception {
        ByteBuf message = null;
        for(int i=0;i&lt;100;i++){
            message = Unpooled.buffer(req.length);
            message.writeBytes(req);
            ctx.writeAndFlush(message);
        }
    }

    @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {
        ByteBuf byteBuf = (ByteBuf) msg;
        byte[] req = new byte[byteBuf.readableBytes()];
        byteBuf.readBytes(req);
        String body = new String(req,&quot;UTF-8&quot;);
        System.out.println(&quot;Now is :&quot; + body + &quot;: the counter is : &quot; + ++counter);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Netty使用LineBasedFrameDecoder解决TCP粘包问题</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class TimeServer {
    public void bind(int port) throws Exception{
        EventLoopGroup boosGroup = new NioEventLoopGroup();
        EventLoopGroup workerGroup = new NioEventLoopGroup();
        try {
            ServerBootstrap serverBootstrap = new ServerBootstrap();
            serverBootstrap.group(boosGroup,workerGroup)
                    .channel(NioServerSocketChannel.class)
                    .option(ChannelOption.SO_BACKLOG,1024).
                    childHandler(new ChildChannelHandler());
            ChannelFuture f = serverBootstrap.bind(port).sync();
            f.channel().closeFuture().sync();
        }finally {
            boosGroup.shutdownGracefully();
            workerGroup.shutdownGracefully();
        }
    }



    private class ChildChannelHandler extends  ChannelInitializer&lt;SocketChannel&gt;{

        @Override
        protected void initChannel(SocketChannel socketChannel) throws Exception {
            socketChannel.pipeline().addLast(new LineBasedFrameDecoder(1024));
            socketChannel.pipeline().addLast(new StringDecoder());
            socketChannel.pipeline().addLast(new TimeServerHandler());
        }
    }

    public static void main(String[] args) throws Exception {
        new TimeServer().bind(8080);
    }
}
public class TimeServerHandler extends ChannelHandlerAdapter {

    private int counter;

    @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {
        String body = (String) msg;
        System.out.println(&quot;The Time server recevice order :  &quot;+body+&quot;; the counter is:&quot; + ++counter);
        String currentTime = &quot;QUERY TIME ORDER&quot;.equalsIgnoreCase(body)?new java.util.Date(
                System.currentTimeMillis()
        ).toString():&quot;BAD ORDER&quot;;
        currentTime = currentTime + System.getProperty(&quot;line.separator&quot;);
        ByteBuf resp = Unpooled.copiedBuffer(currentTime.getBytes());
        ctx.write(resp);
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception {
        ctx.close();
    }

    @Override
    public void channelReadComplete(ChannelHandlerContext ctx) throws Exception {
        ctx.flush();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class TimeClient {
    public void connect(int port, String host) throws Exception{
        EventLoopGroup group = new NioEventLoopGroup();
        try{
            Bootstrap b = new Bootstrap();
            b.group(group).channel(NioSocketChannel.class)
                    .option(ChannelOption.TCP_NODELAY,true)
                    .handler(new ChannelInitializer&lt;SocketChannel&gt;() {
                        @Override
                        protected void initChannel(SocketChannel socketChannel) throws Exception {
                            socketChannel.pipeline().addLast(new LineBasedFrameDecoder(1024));
                            socketChannel.pipeline().addLast(new StringDecoder());
                            socketChannel.pipeline().addLast(new TimeClentHandler());

                        }
                    });
            ChannelFuture f = b.connect(host,port).sync();
            f.channel().closeFuture().sync();
        }finally {
            group.shutdownGracefully();
        }

    }
    public static void main(String[] args) throws Exception {
        new TimeClient().connect(8080,&quot;127.0.0.1&quot;);
    }
}
public class TimeClentHandler extends ChannelHandlerAdapter {
    private int counter;
    private byte[] req;
    public TimeClentHandler() {
        req = (&quot;QUERY TIME ORDER&quot;+ System.getProperty(&quot;line.separator&quot;)).getBytes();
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception {
        System.out.println(&quot;Unexpected exception from downstram :&quot; +cause.getMessage());
        ctx.close();
    }

    @Override
    public void channelActive(ChannelHandlerContext ctx) throws Exception {
        ByteBuf message = null;
        for(int i=0;i&lt;100;i++){
            message = Unpooled.buffer(req.length);
            message.writeBytes(req);
            ctx.writeAndFlush(message);
        }
    }

    @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {
        String body = (String) msg;
        System.out.println(&quot;Now is :&quot; + body +&quot;; the counter is :&quot; + ++counter);
    }


}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>LineBasedFrameDecoder和StringDecoder的原理分析 <ul><li>LineBasedFrameDecoder的工作原理是它依次遍历ByteBuf中的可读字节，判断看是否有&quot;\\n&quot;或者&quot;\\r\\n&quot;，如果有，就以此位置为结束位置，从可读索引到结束位置区间的字节就组成了一行，它是以换行符未结束标志的解码器，只是携带结束符或者不携带结束符两种解码方式，同时支持配置单行的最大长度。如果连续读取到最大长度后仍然没有发现换行符，就会抛出异常，同时忽略掉之前读到的异常码流。</li><li>StringDecoder讲接收到的对象转换成字符串在继续调用后面的handler，LineBasedFrameDecoder组合就是按行切换的文本解码器。</li></ul></li><li>分隔符合定长解码器的应用 <ul><li>TCP以流的方式进行数据传输，上层的应用协议为了对消息进行区分 <ul><li>消息长度固定，累计读取到长度综合为定长LEN的报文后，就认为读取到了一个完整的消息；将计数器职位，重新开始读取下一个数据报</li><li>将回车换行符作为消息结束符，例如FTP协议，这种方式在文本协议中应用比较广泛</li><li>将特殊的分隔符作为消息的结束标志，回车换行符就是一种特殊的结束分隔符</li><li>通过在消息头中定义长度字段标识消息的总长度</li><li>DelimiterBasedFrameDecoder可以自动完成以分隔符做结束标志的解码</li><li>FixedLengthFrameDecoder可以自动完成对定长消息的解码</li></ul></li></ul></li><li>DelimiterBasedFrameDecoder</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class EchoServer{
    public void bind(int port) throws Exception{
        EventLoopGroup boosGroup = new NioEventLoopGroup();
        EventLoopGroup workerGroup = new NioEventLoopGroup();
        try {
            ServerBootstrap serverBootstrap = new ServerBootstrap();
            serverBootstrap.group(boosGroup,workerGroup)
                    .channel(NioServerSocketChannel.class)
                    .option(ChannelOption.SO_BACKLOG,1024)
                    .handler(new LoggingHandler(LogLevel.INFO))
                    .childHandler(new ChannelInitalizer&lt;SocketChannel&gt;(){
                        @Override
                        public void initChannel(SocketChannel ch) throws Exception{
                            ByteBuf delimiter = Unpooled.copideBuffer(&quot;$_&quot;.getBytes());
                            ch.pipeline().addLast(new DelimiterBasedFrameDecoder(1024,delimiter));//单条消息最大长度，当达到该长度后仍然没有查找到分隔符，就抛出TooLongFrameException异常，防止由于异常码流确实分隔符导致的内存溢出，是可靠性保护，
                            ch.pipeline().addLast(new StringDecode());
                            ch.pipeline().addLast(new EchoServerHandler());
                        }
                    });
            ChannelFuture f = serverBootstrap.bind(port).sync();
            f.channel().closeFuture().sync();
        }finally {
            boosGroup.shutdownGracefully();
            workerGroup.shutdownGracefully();
        }
    }

    public static void main(String[] args) throws Exception {
        new EchoServer().bind(8080);
    }
}
public class EchoServerHandler extends ChannelHandlerAdapter{
    int counter = 0;
    @Override
    public void channelRead(ChannelHandlerContext ctx,Object msg) throws Exception{
        String body = (String) msg;
        System.out.println(&quot;This is&quot; + ++counter + &quot;time receive clinet :{&quot; + body + &quot;}&quot;);
    }
    @Override
    public void exceptionCaught(ChannelHandlerContext ctx , Throwable cause){
        cause.printStackTrace();
        ctx.close();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class EchoClient {
    public void connect(int port, String host) throws Exception{
        EventLoopGroup group = new NioEventLoopGroup();
        try{
            Bootstrap b = new Bootstrap();
            b.group(group).channel(NioSocketChannel.class)
                    .option(ChannelOption.TCP_NODELAY,true)
                    .handler(new ChannelInitializer&lt;SocketChannel&gt;() {
                        @Override
                        protected void initChannel(SocketChannel socketChannel) throws Exception {
                            ByteBuf delimiter = Unpooled.copideBuffer(&quot;$_&quot;.getBytes());
                            ch.pipeline().addLast(new DelimiterBasedFrameDecoder(1024,delimiter));//单条消息最大长度，当达到该长度后仍然没有查找到分隔符，就抛出TooLongFrameException异常，防止由于异常码流确实分隔符导致的内存溢出，是可靠性保护，
                            ch.pipeline().addLast(new StringDecode());
                            ch.pipeline().addLast(new EchoClientHandler());

                        }
                    });
            ChannelFuture f = b.connect(host,port).sync();
            f.channel().closeFuture().sync();
        }finally {
            group.shutdownGracefully();
        }

    }
    public static void main(String[] args) throws Exception {
        new EchoClient().connect(8080,&quot;127.0.0.1&quot;);
    }
}
public class EchoClentHandler extends ChannelHandlerAdapter {
    private int counter;
    public EchoClentHandler() {}

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception {
        System.out.println(&quot;Unexpected exception from downstram :&quot; +cause.getMessage());
        ctx.close();
    }

    @Override
    public void channelActive(ChannelHandlerContext ctx) throws Exception {
        for(int i=0;i&lt;100;i++){
            ctx.writeAndFlush(Unpooled.copiedBuffer(ECHO_REQ.getBytes()));
        }
    }

    @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {
        System.out.println(&quot;This is&quot;+ ++counter + &quot;times receive server : [&quot; + msg + &quot;]&quot;);
    }
    @Override
    public void channelReadComplete(ChannelHandlerContext ctx) throws Exception {
        ctx.flush();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>FixedLengthFrameDecoder解码器，无论一次接收到多少数据包，它都会按照构造函数中设置的固定长度进行解码，如果是半包消息，它会缓存半包消息并等待下个包到达后进行拼包，直到读取到一个完整的包</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class EchoServer{
    public void bind(int port) throws Exception{
        EventLoopGroup boosGroup = new NioEventLoopGroup();
        EventLoopGroup workerGroup = new NioEventLoopGroup();
        try {
            ServerBootstrap serverBootstrap = new ServerBootstrap();
            serverBootstrap.group(boosGroup,workerGroup)
                    .channel(NioServerSocketChannel.class)
                    .option(ChannelOption.SO_BACKLOG,1024)
                    .handler(new LoggingHandler(LogLevel.INFO))
                    .childHandler(new ChannelInitalizer&lt;SocketChannel&gt;(){
                        @Override
                        public void initChannel(SocketChannel ch) throws Exception{
                            ch.pipeline().addLast(new FixedLengthFrameDecoder(20));
                            ch.pipeline().addLast(new StringDecoder());
                            ch.pipeline().addLast(new EchoServerHandler());
                        }
                    });
            ChannelFuture f = serverBootstrap.bind(port).sync();
            f.channel().closeFuture().sync();
        }finally {
            boosGroup.shutdownGracefully();
            workerGroup.shutdownGracefully();
        }
    }

    public static void main(String[] args) throws Exception {
        new EchoServer().bind(8080);
    }
}
public class EchoServerHandler extends ChannelHandlerAdapter{
    int counter = 0;
    @Override
    public void channelRead(ChannelHandlerContext ctx,Object msg) throws Exception{
        System.out.println(&quot;Receive client [&quot; + msg +&quot;}&quot;);
    }
    @Override
    public void exceptionCaught(ChannelHandlerContext ctx , Throwable cause){
        cause.printStackTrace();
        ctx.close();
    }
}
可以用cmd命令telnet localhost 8080 链接服务端
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>编解码技术 <ul><li>基于java提供的对象输入/输出流ObjectInputStream和ObjectOutputStream，可以直接把java对象作为可存储的字节数组写入文件，也可以传输到网络上。java序列化的目的主要有网络传输或者对象持久化</li><li>当进行远程跨进程服务调用时，需要把被传输的java字节码编码为字节数组或者ByteBuffer对象。而当远程服务读取到ByteBuffer对象或者字节数组时，需要将其解码为发送时的java对象，被称为java对象编解码技术。java序列化仅仅是java编解码技术的一种。</li><li>java序列化缺点：无法跨语言，序列化之后的码流太大，编解码性能太差</li></ul></li><li>Google的Protobuf <ul><li>Protobuf全称Google Protocol Buffers，它由谷歌开源而来，将数据结构以.proto文件进行描述，通过代码生成工具就可以生成对应数据结构的POJO对象和Protobuf的方法和属性。它的特点包括结构化数据存储格式（XML，JSON等），高效的编解码性能，语言无关、平台无关、扩展性好，支持Java语言。</li><li>尽管XML的可读性和可扩展性非常好，也非常适合描述数据结构，但是XML解析的时间开销和XML为了可读性而牺牲的空间开销都非常大，不适合做高性能的通信协议。Protobuf使用二进制编码，在空间和性能上具有更大的优势</li><li>Protobuf另一个比较吸引人的地方就是他的数据描述文件和代码生成机制，利用数据描述文件对数据结构进行说明的优点如下 <ul><li>文本化的数据结构描述语言，可以实现语言与平台无关，适合易购系统间的集成</li><li>通过标识字段的顺序，可以实现协议的向前兼容</li><li>自动代码生成，不需要手工编写同样数据结构的C++和Java版本</li><li>方便后续的管理和维护。相比于代码，结构化的文档更容易管理和维护</li></ul></li></ul></li><li>Facebook的Thrift <ul><li>Thrift支持Java等多种语言，在多种不同语言之间通信，Thrift可以作为高性能的通信中间件使用，它支持数据（对象）序列化和多种类型的RPC服务。Thrift使用于静态的数据交换，需要先确定好它的数据结构，当数据结构发生变化时，必须重新编辑lDL文件，生成代码和编译，是弱项，适用于搭建大型数据交换及存储的通用工具，对于大型系统中的内部数据传输，相对于JSON和XML的性能和传输大小上都有明显优势</li><li>Thrift由5部分组成 <ul><li>语言系统一届IDL编译器，负责由用户给定的IDL文件生成相应语言的接口代码</li><li>TProtocol：RPC协议层，可以选择多种不同的对象序列化方式，如JSON和Binary</li><li>TTransport：RPC传输层，同样可以选择不同的传输层实现，如socket，NIO，MemoryBuffer等</li><li>TProcessor:作为协议层和用户提供的服务实现之间的纽带，负责调用服务实现的接口</li><li>TServer:聚合Trotocol,TTransport和TProcessor等对象</li></ul></li><li>Thrift通过IDL描述接口和数据结构定义，支持8中Java基本类型，Map，Set和List，功能强大没因为可以定义数据结构中字段的顺序，所以它也可以支持协议的向前兼容</li><li>Thrift支持三种比较典型的编解码方式 <ul><li>通用的二进制编解码</li><li>压缩的二进制编解码</li><li>优化的可选字段压缩编解码</li></ul></li></ul></li><li>JBoss Marshalling <ul><li>JBoss Marshalling是java对象序列化API包，修正了JDK自带序列化包的很多问题，兼容java.io.Serializable接口的兼容；同时增加了一些可调的参数和附加的属性，并且这些参数和特性可通过工厂类进行配置</li><li>相比于传统的Java序列化机制，优点如下 <ul><li>可插拔的类解析器，提供更加便捷的类加载定制策略，通过一个接口即可实现定制</li><li>可插拔的对象替换技术，不需要通过继承的方式</li><li>可插拔的预定义类缓存表，可以减小序列化的字节数组长度，提升常用类型的对象序列化性能</li><li>无须实现java.io.Serializable接口，即可实现Java序列化</li><li>通过缓存技术提升对象的序列化性能</li></ul></li></ul></li><li>Java序列化 <ul><li>最简单的Java的默认序列化，只需要序列化的POJO对象实现java.io.Serializable接口，根据实际情况生成序列ID，这个类就能通过java.io.ObjectInput和java.io.ObjectOutput序列化和反序列化</li><li>Netty Java序列化服务端开发（使用ObjectEncoder和ObjectDecoder）对订购请求和应答消息进行序列化</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class SubscribeReq implements Serializable{//1.序列化的POJO对象实现java.io.Serializable接口
    private static final long serialVersionUID = 1L;
    private int subReqID;
    private String userName;
    private String productName;
    private String phoneNumber;
    private String address;
    @Override
    public String toString(){
        return &quot;SubscriberReq[subReqID=&quot; + subReqID + &quot;, userName=&quot; +userName + &quot;,productName=&quot; + productName + &quot;,phoneNumber=&quot; + phoneNumber +&quot;,address=&quot; + address + &quot;]&quot;;
    }
}
public class SubscribeResp implements Serializable{
    private static final long serialVersionUID = 1L;
    private int subReqID;
    private int respCode;
    private String desc;
    @Override
    public String toString(){
        return &quot;SubscriberResp [subReqID=&quot; + subReqID + &quot;, respCode=&quot; + respCode + &quot;, desc=&quot; + desc +&quot;]&quot;;
    }
}
public class SubReqServer{
    public void bind(int port) throws Exception{
        EventLoopGroup boosGroup = new NioEventLoopGroup();
        EventLoopGroup workerGroup = new NioEventLoopGroup();
        try {
            ServerBootstrap serverBootstrap = new ServerBootstrap();
            serverBootstrap.group(boosGroup,workerGroup)
                    .channel(NioServerSocketChannel.class)
                    .option(ChannelOption.SO_BACKLOG,1024)
                    .handler(new LoggingHandler(LogLevel.INFO))
                    .childHandler(new ChannelInitalizer&lt;SocketChannel&gt;(){
                        @Override
                        public void initChannel(SocketChannel ch) throws Exception{
                            //weakCachingConcurrentResolver创建线程安全的WeakReferenceMap对类加载器进行缓存，
                            支持多线程并发访问，当虚拟机内存不足时，会释放缓存中的内存，防止内存泄漏
                            //为了防止异常码流和解码错位导致的内存溢出，将单个对象最大序列化后的字节数组长度设置为1M
                            ch.pipeline().addLast(new ObjectDecoder(1024 * 1024,ClassResolvers.weakCachingConcurrentResolver(this.getClass().getClassLoader())));
                            //ObjectEncoder，可以在消息发送的时候自动将实现的Serializable的POJO对象进行编码，因此用户需亲自对对象进行手工序列化，只需要关注自己的业务逻辑处理即可，对象序列化和反序列化都由netty的对象解码器搞定
                            ch.pipeline().addLast(new ObejectEncoder());
                            ch.pipeline().addLast(new EchoServerHandler());
                        }
                    });
            ChannelFuture f = serverBootstrap.bind(port).sync();
            f.channel().closeFuture().sync();
        }finally {
            boosGroup.shutdownGracefully();
            workerGroup.shutdownGracefully();
        }
    }

    public static void main(String[] args) throws Exception {
        new EchoServer().bind(8080);
    }
}
public class SubReqServerHandler extends ChannelHandlerAdapter {
    @Override
    public void channelRead(ChannelHandlerContext ctx,Object msg) throws Exception{
        SubscribeReq req = (SubscribeReq) msg;
        if(&quot;Lilinfeng&quot;.equalsIgnoreCase(req.getUserName())){
            System.out.println(&quot;Service accept client subscribe req : [&quot; + req.toString() + &quot;]&quot;);
            ctx.writeAndFlush(resp(req.getSubReqID));
        }
    }
    private SubscribeResp resp(int subReqID){
        SubscribeResp rep = new SubscribeResp();
        resp.setSubReqID(subReqID);
        resp.setRespCode(0);
        resp.setDes(&quot;Netty book order succeed,3 days latter, sent to the designated address&quot;);
        return resp;
    }
    @Override
    public void exceptionCaught(ChannelHandlerContext ctx ,Throwable cause){
        cause.printStackTrace();
        ctx.close();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class SubReqClient {
    public void connect(int port, String host) throws Exception{
        EventLoopGroup group = new NioEventLoopGroup();
        try{
            Bootstrap b = new Bootstrap();
            b.group(group).channel(NioSocketChannel.class)
                    .option(ChannelOption.TCP_NODELAY,true)
                    .handler(new ChannelInitializer&lt;SocketChannel&gt;() {
                        @Override
                        protected void initChannel(SocketChannel socketChannel) throws Exception {
                            socketChannel.pipeline().addLast(new ObjectDecoder(1024,ClassResolvers.cacheDisabled(this.getClass().getClassLoader)));
                            socketChannel.pipeline().addLast(new ObjectEncoder());
                            socketChannel.pipeline().addLast(new SubReqClientHandler());

                        }
                    });
            ChannelFuture f = b.connect(host,port).sync();
            f.channel().closeFuture().sync();
        }finally {
            group.shutdownGracefully();
        }

    }
    public static void main(String[] args) throws Exception {
        new SubReqClient().connect(8080,&quot;127.0.0.1&quot;);
    }
}
public class SubReqClientHandler extends ChannelHandlerAdapter{
    public SubReqClientHandler(){}
    public void channelActive(ChannelHandlerContext ctx){
        for(int i=0;i&lt;10;i++){
            ctx.write(subReq(i))
        }
        ctx.flush();
    }
    private SubscriberReq subReq(int i){
        SubsribeReq req = new SubscribeReq();
        req.setAddress(&quot;南京市江宁区房山国家地质公园&quot;)
        req.setPhoneNumber(&quot;138XXXXXXXX&quot;);
        req.setProductName(&quot;Netty 权威指南&quot;);
        req.setSubReqID(i);
        req.setUserName(&quot;Lilinfeng&quot;);
        return req;
    }

    @Override
    public void channelRead(ChannelHandlerContext ctx,Object msg) throws Exception{
        ctx.flush();
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause){
        cause.printStackTrace();
        ctx.close();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Google Protobuf编解码 <ul><li>Protobuf支持数据结构化一次可以到处使用，甚至跨语言使用，通过代码生成工具可以自动生成不同语言的源代码，甚至可以使用不同版本的数据结构进程间进行数据传递，实现数据结构的向前兼容</li><li>ProtobufDecoder仅仅负责解码，不支持读半包。因此，在ProtobufDecoder前面补上能处理读半包的解码器 <ul><li>使用Nettty提供的ProtoVarint32FrameDecoder</li><li>继承Netty提供的同样半包解码器LengthFieldBasedFrameDecoder</li><li>继承ByteToMessageDecoder类，自己处理半包消息</li></ul></li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>创建SubscribeReq.proto
package netty;
option java_package = &quot;com.phei.netty.codec.protobuf&quot;;
option java_outer_Clasaname  = &quot;SubscribeReqProto&quot;;

message SubscribeReq{
    required int32 subReqID = 1;
    required string userName = 2;
    required string productName = 3;
    required string address = 4;
}

创建SubscribeResp.proto
package netty;
option java_package = &quot;com.phei.netty.codec.protobuf&quot;;
option java_outer_Clasaname  = &quot;SubscribeRespProto&quot;;

message SubscribeResp{
    required int32 subReqID = 1;
    required string respCode = 2;
    required string desc = 3;
}
使用cmd proto.exe --java_out=.\\src .\\netty\\SubscribeReq.proto
使用cmd proto.exe --java_out=.\\src .\\netty\\SubscribeResp.proto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class TestSubscribeReqProto{
    private static byte[] encode(SubscriberReqProto.SubscrobeReq req){
        retrun req.toByteArray();//将SubscribeReq编码为byte数组
    }
    private static SubscriberReqProto.subscribeReq decode(byte[] body)
        {
        return SubscribeReqProto.SubscribeReq.parseFrom(body);//将二进制byte数组解码为原始对象
    }
    private static SubscrobeReqProto.SubscribeReq createSubscribeReq(){
        SubscibeReqProto.SubscribeReq.Builder builder = SubscribeReqProto.,SubscribeReq.newBuilder();
        builder.setSubReqID(1);
        builder.setUserName(&quot;Lilinfeng&quot;);
        builder.setProductName(&quot;Netty Book&quot;);
        List&lt;String&gt; address = new ArrayList();
        address.add(&quot;NanJing YuHuaTai&quot;);
        address.add(&quot;BeiJing LiuLiChang&quot;);
        builder.addAddAddress(address);
        return  builder.build();
    }
    public static void main(String[] args)throws InvalidProtocolBufferException{
        SubscribeReqProto.SubscribeReq req = createSubscribeReq();
        System.out.println(&quot;Before encode:&quot;+req.toString());
        SubscribeReqProto.SubscribeReq req2 = decode(encode(req));
        System.out.println(&quot;After decode: &quot;+ req.toString());
        System.out.println(&quot;Assert equal:--&gt;&quot; + req2.equals(req));
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Netty的Protobuf开发</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class SubReqServer{
    public void bind(int port) throws Exception{
        EventLoopGroup boosGroup = new NioEventLoopGroup();
        EventLoopGroup workerGroup = new NioEventLoopGroup();
        try {
            ServerBootstrap serverBootstrap = new ServerBootstrap();
            serverBootstrap.group(boosGroup,workerGroup)
                    .channel(NioServerSocketChannel.class)
                    .option(ChannelOption.SO_BACKLOG,1024)
                    .handler(new LoggingHandler(LogLevel.INFO))
                    .childHandler(new ChannelInitalizer&lt;SocketChannel&gt;(){
                        @Override
                        public void initChannel(SocketChannel ch) throws Exception{
                            
                            ch.pipeline().addLast(new ProtobufVarint32FrameDecoder());
                            
                            ch.pipeline().addLast(new ProtobufDecoder(SubscribeReqProto.SubscribeReq.getDefaultInstance()));
                            ch.pipeline().addLast(new ProtobufVarint32LengthFieldPrepender());
                            ch.pipeline().addLast(new ProtobufEncode());
                            ch.pipeline().addLast(new SubReqServerHandler());
                        }
                    });
            ChannelFuture f = serverBootstrap.bind(port).sync();
            f.channel().closeFuture().sync();
        }finally {
            boosGroup.shutdownGracefully();
            workerGroup.shutdownGracefully();
        }
    }

    public static void main(String[] args) throws Exception {
        new EchoServer().bind(8080);
    }
}
public class SubReqServerHandler extends ChannelHandlerAdapter {
    @Override
    public void channelRead(ChannelHandlerContext ctx,Object msg) throws Exception{
        SubscrobeReqProto.SubscribeReq req = (SubscribeReqProto.SubscribeReq) msg;
        if(&quot;Lilinfeng&quot;.equalsIgnoreCase(req.getUserName())){
            System.out.print(&quot;Service accept client subscribe req: [&quot; + req.toString() + &quot;]&quot;);
            ctx.writeAndFlush(resp(req.getSubReqID()));
        }
    }
    private SubscribeResp resp(int subReqID){
        SubscribeResp rep = new SubscribeResp();
        resp.setSubReqID(subReqID);
        resp.setRespCode(0);
        resp.setDes(&quot;Netty book order succeed,3 days latter, sent to the designated address&quot;);
        return resp;
    }
    @Override
    public void exceptionCaught(ChannelHandlerContext ctx ,Throwable cause){
        cause.printStackTrace();
        ctx.close();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class SubReqClient {
    public void connect(int port, String host) throws Exception{
        EventLoopGroup group = new NioEventLoopGroup();
        try{
            Bootstrap b = new Bootstrap();
            b.group(group).channel(NioSocketChannel.class)
                    .option(ChannelOption.TCP_NODELAY,true)
                    .handler(new ChannelInitializer&lt;SocketChannel&gt;() {
                        @Override
                        protected void initChannel(SocketChannel socketChannel) throws Exception {
                            socketChannel.pipeline().addLast(new ProtobufVarint32FrameDecoder());
                            
                            socketChannel.pipeline().addLast(new ProtobufDecoder(SubscribeRespProto.SubscribeResp.getDefaultInstance()));
                            socketChannel.pipeline().addLast(new ProtobufVarint32LengthFieldPrepender());
                            socketChannel.pipeline().addLast(new ProtobufEncode());
                            socketChannel.pipeline().addLast(new SubReqClientHandler());
                        }
                    });
            ChannelFuture f = b.connect(host,port).sync();
            f.channel().closeFuture().sync();
        }finally {
            group.shutdownGracefully();
        }

    }
    public static void main(String[] args) throws Exception {
        new SubReqClient().connect(8080,&quot;127.0.0.1&quot;);
    }
}
public class SubReqClientHandler extends ChannelHandlerAdapter{
    public SubReqClientHandler(){}
    public void channelActive(ChannelHandlerContext ctx){
        for(int i=0;i&lt;10;i++){
            ctx.write(subReq(i))
        }
        ctx.flush();
    }
    private SubscrobeReqProto.SubscribeReq createSubscribeReq(){
        SubscibeReqProto.SubscribeReq.Builder builder = SubscribeReqProto.,SubscribeReq.newBuilder();
        builder.setSubReqID(1);
        builder.setUserName(&quot;Lilinfeng&quot;);
        builder.setProductName(&quot;Netty Book&quot;);
        List&lt;String&gt; address = new ArrayList();
        address.add(&quot;NanJing YuHuaTai&quot;);
        address.add(&quot;BeiJing LiuLiChang&quot;);
        builder.addAddAddress(address);
        return  builder.build();
    }       

    @Override
    public void channelRead(ChannelHandlerContext ctx,Object msg) throws Exception{
       System.out.println(&quot;Receive server response :[&quot; + msg + &quot;]&quot;);
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause){
        cause.printStackTrace();
        ctx.close();
    }

    @Override
    public void channelReadComplete(ChannelHandlerContext ctx) throws Exception{
        ctx.flush();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>JBoss Marshalling编解码开发 <ul><li>JBoss Marshalling是一个对象序列化包，对jdk默认的序列化框架进行优化，但有保持跟java.io.Serializable接口的兼容，同时增加了一些可调的参数和附加的特性</li><li>Netty的Marshalling支持半包和粘包处理</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class SubReqServer{
    public void bind(int port) throws Exception{
        EventLoopGroup boosGroup = new NioEventLoopGroup();
        EventLoopGroup workerGroup = new NioEventLoopGroup();
        try {
            ServerBootstrap serverBootstrap = new ServerBootstrap();
            serverBootstrap.group(boosGroup,workerGroup)
                    .channel(NioServerSocketChannel.class)
                    .option(ChannelOption.SO_BACKLOG,1024)
                    .handler(new LoggingHandler(LogLevel.INFO))
                    .childHandler(new ChannelInitalizer&lt;SocketChannel&gt;(){
                        @Override
                        public void initChannel(SocketChannel ch) throws Exception{
                            
                            ch.pipeline().addLast(MarshallingCodeCFactory.buildMarshallingDecoder());
                            
                            ch.pipeline().addLast(MarshallingCodeCFactory.buildMarshallingEncoder());
                            ch.pipeline().addLast(new SubReqServerHandler());
                        }
                    });
            ChannelFuture f = serverBootstrap.bind(port).sync();
            f.channel().closeFuture().sync();
        }finally {
            boosGroup.shutdownGracefully();
            workerGroup.shutdownGracefully();
        }
    }

    public static void main(String[] args) throws Exception {
        new EchoServer().bind(8080);
    }
}
public final class MarshallingCodeCFactory{
    public static MarshallingDecoder buildMarshallingDecoder(){
        final MarshallingFactory marshallerFactory = Marshalling.getProvidedMarshallerFactory(&quot;serial&quot;);
        final MarshallingConfigutation configuration = new MarshallingConfiguration();
        configuration.setVersion(5);
        UnmarshallerProvider provider = new DefalutUnmarshallerProvider(marshallerFactorymconfiguration);
        MarshallingDecoder decoder = new MarshallingDecoder(provider,1024);
        return decoder;
    }
    public static MarshallingEncoder builMarshallingEncoder(){
        final MarshallingFactory marshallerFactory = Marshalling.getProvidedMarshallerFactory(&quot;serial&quot;);
        final MarshallingConfigutation configuration = new MarshallingConfiguration();
        configuration.setVersion(5);
        MarshallerProvider provider = new DefalutMarshallerProvider(marshallerFactorymconfiguration);
        MarshallingEncoder decoder = new MarshallingEncoder(provider,1024);
        return decoder;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class SubReqClient {
    public void connect(int port, String host) throws Exception{
        EventLoopGroup group = new NioEventLoopGroup();
        try{
            Bootstrap b = new Bootstrap();
            b.group(group).channel(NioSocketChannel.class)
                    .option(ChannelOption.TCP_NODELAY,true)
                    .handler(new ChannelInitializer&lt;SocketChannel&gt;() {
                        @Override
                        protected void initChannel(SocketChannel socketChannel) throws Exception {
                            socketChannel.pipeline().addLast(MarshallingCodeCFactory.buildMarshallingDecoder());
                            
                            socketChannel.pipeline().addLast(MarshallingCodeCFactory.buildMarshallingEncoder());
                            socketChannel.pipeline().addLast(new SubReqClientHandler());
                        }
                    });
            ChannelFuture f = b.connect(host,port).sync();
            f.channel().closeFuture().sync();
        }finally {
            group.shutdownGracefully();
        }

    }
    public static void main(String[] args) throws Exception {
        new SubReqClient().connect(8080,&quot;127.0.0.1&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Netty多协议开发和应用 <ul><li>HTTP(超文本传输协议)协议是建立在TCP传输协议之上的应用成协议，是一个属于应用层的面向对象的协议，适用于分布式超媒体信息系统，是目前Web开发的主流协议，特定如下 <ul><li>支持Client/Server模式</li><li>简单：客户想服务端请求服务时，只需指定服务的URL，携带必要的请求参数或者消息体</li><li>灵活：HTTP允许传输任意类型的数据对象，传输的内容类型由HTTP消息头中的Content-Type加以标记</li><li>无状态：HTTP协议是无状态协议，无状态是指协议对于事务处理没有记忆能力，缺少状态意味着如果后续需要处理之前的信息，则它必须重传，这样可能导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答比较快，负载较轻</li></ul></li></ul></li><li>Netty HTTP服务端入门开发 <ul><li>由于Netty是异步事件驱动的架构，因此基于NIO TCP协议栈开发的HTTP协议栈也是异步非阻塞的</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class HttpFileServer{
    private static final String DEFAULT_URL = &quot;/src/com/phei/netty/&quot;;

    public void bind(int port,final String url) throws Exception{
        EventLoopGroup boosGroup = new NioEventLoopGroup();
        EventLoopGroup workerGroup = new NioEventLoopGroup();
        try {
            ServerBootstrap serverBootstrap = new ServerBootstrap();
            serverBootstrap.group(boosGroup,workerGroup)
                    .channel(NioServerSocketChannel.class)
                    .option(ChannelOption.SO_BACKLOG,1024)
                    .handler(new LoggingHandler(LogLevel.INFO))
                    .childHandler(new ChannelInitalizer&lt;SocketChannel&gt;(){
                        @Override
                        public void initChannel(SocketChannel ch) throws Exception{
                            
                            ch.pipeline().addLast(&quot;http-decoder&quot;,new HttpRequestDecoder());
                            //作用是讲多个消息转换为单一的FullHttpRequest或者FullHttpResponse，原因是HTTP解码器会生成多个消息对象（HttpRequest/HttpResponse、HttpContent、LastHttpContent）
                            ch.pipeline().addLast(&quot;http-aggregator&quot;,new HttpObjectAggregator(65536));
                            
                            ch.pipeline().addLast(&quot;http-encoder&quot;,new HttpResponseEncoder());
                            //作用是支持异步发送大的码流（例如大的文件传输），但不占用过多的内存，防止发生Java内存溢出错误
                            ch.pipeline().addLast(&quot;http-chunked&quot;,new ChunkedWriteHandler(65536));

                            ch.pipeline().addLast(&quot;fileServerHandler&quot;,new HttpFileServerHandler(url));
                        }
                    });
            ChannelFuture f = serverBootstrap.bind(port).sync();
            f.channel().closeFuture().sync();
        }finally {
            boosGroup.shutdownGracefully();
            workerGroup.shutdownGracefully();
        }
    }

    public static void main(String[] args) throws Exception {
        new HttpFileServer().run(8080,DEFAULT_URL);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class HttpFileServerHandler extends SimpleChannelInboundHandler&lt;FullHttpRequest&gt;{
    private final String url;
    public HttpFileServerHandler(String url){
        this.url = url;
    }
    @Override
    public void mssageReceived(ChannelHandlerContext ctx,FullHttpRequest request) throws Exception{
        if(!request.getDecoderResult().isSuccess()){
            sendError(ctx,BAD_REQUEST);
            return;
        }
        if(request.getMethod() != GET){
            sendError(ctx,METHOD_NOT_ALLOWED);
            return;
        }
        final String uri = request.getUri();
        final String path = sanitizeUri(uri);
        if(path == null){
            sendError(ctx,FORBIDDEN);
            return;
        }
        File file = new File(path);
        if(file.isHidden() || !file.exists()){
            sendError(ctx,NOT_FOUND);
            return;
        }
        if(file.isDirectory()){
            if(uri.endsWith(&quot;/&quot;)){
                sendListing(ctx,file);
            }else{
                sendRedirect(ctx, uri + &#39;/&#39;);
            }
            return;
        }
        if(!file.isFile()){
            sendError(ctx,FORBIDDEN);
            return;
        }
        RandomAccessFile randomAccessFile = null;
        try{
            randomAccessFile = new RandomAccessFile(file,&quot;r&quot;);//以只读的方式打开文件
        }cath(FileNotFounException fnfe){
            sendError(ctx,NOT_FOUND);
            return;
        }
        long fileLength = randomAccessFile.length();
        HttpResponse response = new DefaultHttpResponse(HTTP_1_1,OK);
        setContentLength(response,fileLength);
        if(isKeepAlive(request)){
            reponse.headers().set(CONNECTION,HttpHeaders.Values.KEEP_ALIVE);
        }
        ctx.wirte(response);
        ChannelFuture sendFileFuture;
        sendFileFuture = ctx.write(new ChunkedFile(randomAccessFile,0,fileLength,8192),ctx.newProgressivePromise());
        sendFileFuture.addListenner(new ChannelProgressiveFutueListenner(){
            @Override
            public void operationProgressed(ChannelProgressiveFuture future,long progress,long total){
                if(total &lt;0){
                    System.out.println(&quot;Transfer progress :&quot; + progress)
                }else {
                    System.out.println(&quot;Transfer progress :&quot;+progress +&quot;/&quot; + total);
                }
            }
            @Override
            public void operationComplete(ChannelProgressiveFuture future)throws Exception{
                System.out.println(&quot;Transfer complete.&quot;);
            }
        });
        ChannelFuture lastContentFuture = ctx.wirteAndFlush(LasHttpContent.EMPTY_LAST_CONNENT);
        if(!isKeepAlive(request)){
            lastContentFutue.addListener(ChannelFutureListener.CLOSE);
        }
    }

    @Override
    public oid exceptionCaught(ChannelHandlerContext ctx,Throwable cause) throws Exception{
        cause.printStackTrace();
        if(ctx.channel().isActive()){
            sendError(ctx,INTERNAL_SERVER_ERROR);
        }
    }

    private static final Pattern INSECURE_URI = Pattern.compile(&quot;.*[&lt;&gt;&amp;\\&quot;].*&quot;);
    private String sanitizeUri(String uri){
        try{
            uri = URIDecoder.decode(uri,&quot;UTF-8&quot;);
        }catch(UnsupportedEncodeingException e){
            try{
                uri = URLDecoder.decode(uri,&quot;ISO-8859-1&quot;);
            }catch(UnsupporedEncodingException e1){
                throw new Error();
            }
        }
        if(!uri.startsWith(url)){
            return null;
        }
        if(!uri.startsWith(&quot;/&quot;)){
            return null;
        }
        uri = uri.replace(&#39;/&#39;,File.separatorChar);
        if(uri.contains(File.separator + &#39;.&#39;) || uri.contains(&#39;.&#39;+File.separator)||uri.startsWith(&quot;.&quot;)
        || uri.endsWith(&quot;.&quot;)|| INSECURE_URI.matcher(uri).matches()){
            return null;
        }
        return System.getProperty(&quot;user.dir&quot;) + File.separtor + uri;
    }
    private static void sendListing(ChannelHandlerContext ctx,File dir){
        FullHttpResponse response = new DefaultFullHttpResponse(HTTP_1_1，OK);
        response.headers().set(CONTENT_TYPE,&quot;text/html;charset=UTF-8&quot;);
        StringBuilder buf = new StringBuilder();
        String dirPath = dir.getPath();
        buf.append(&quot;&lt;!DOCTYPE html&gt;\\r\\n&quot;);
        buf.append(&quot;&lt;html&gt;&lt;head&gt;&lt;title&gt;&quot;);
        buf.append(dirPath);
        buf.append(&quot;目录:&quot;);
        buf.append(&quot;&lt;/title&gt;&lt;/head&gt;&lt;body&gt;\\r\\n&quot;);
        buf.append(&quot;&lt;h3&gt;&quot;);
        buf.append(dirpatch).append(&quot;目录:&quot;);
        buf.append(&quot;&lt;/h3&gt;\\r\\n&quot;);
        buf.append(&quot;&lt;li&gt;链接:&lt;a href=\\&quot;../\\&quot;&gt;..&lt;/a&gt;&lt;/li&gt;\\r\\n&quot;);
        for(File f:dir.listFiles()){
            if(f.isHidden() || !f.canRead()){
                continue;
            }
            String name = f.getName();
            if(!ALLOWED_FILE_NAME.matcher(name).matches()){
                continue;
            }
            buf.append(&quot;&lt;li&gt;链接：&lt;a href-\\&quot;&quot;);
            buf.append(name);
            buf.append(&quot;\\&quot;&gt;&quot;);
            buf.append(name);
            buf.append(&quot;&lt;/a&gt;&lt;/li&gt;\\r\\n&quot;);
        }
        buf.append(&quot;&lt;/ul&gt;&lt;/body&gt;&lt;/html&gt;\\r\\n&quot;);
        ByteBuf buffer = Upooled.copiedBuffer(buf,CharsetUtil.UTF_8);
        response.content().writeBytes(buffer);
        buffer.release();
        ctx.writeAndFlush(response).addListener(ChannelFutureListener.CLOSE);
    }

    private static void sendRedirect(ChannelHandlerContext ctx,String new Uri){
        FullHttpResponse response = new DefaultFullHttpResponse(HTTP_1_1,FOUND);
        response.headers().set(LOCATION,newUri);
        ctx.writeAndFlush(response).addListener(ChannelFutureListener.CLOSE);
    }
    private staitc void sendError(ChannelHandlerContext ctx,HttpResponseStatus status){
        FullHttpResponse response = new DefaultFullHttpResponse(HTTP_1_1,status,Unpooled.copiedBuffer(&quot;Failure:&quot; + status.toString() + &quot;\\r\\n&quot;,CharsetUtil.UTF_8));
        response.headers().set(CONTENT_TYPE,&quot;text/plain;charset=UTF-8&quot;);
        ctx.writeAndFlush(response).addListener(ChannelFutureListener.CLOSE);
    }
    private static void setContentTypeHeader(HttpResponse response,File file){
        MimetypesFileTypeMap mineTypesMap = new MimetypesFileTypeMap();
        response.headers().set(CONTENT_TYPE,mineTypesMap.getContetnType(file.getPath()));
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Netty HTTP+XML协议栈开发 <ul><li>由于HTTP协议的通用性，很多易购系统间的通信交互采用HTTP协议，通过HTTP协议承载业务数据进行交互，例如HTTP+XML或者RESTFul+JSON</li><li>最常用的HTTP协议栈就是基于Servlet规范的Tomcat等Web容器，Jetty等轻量级Web容器。但是很多基于HTTP的应用都是后台应用，HTTP不仅是承载数据交换的一个通道，是一个载体而不是web容器，在这种场景下，一般不需要类似tomcat这样重量型的Web容器。由于其功能繁杂，会存在很多安全漏洞，会带来开发或维护成本的增加，在这种场景下，一个更加轻量级的HTTP协议栈是更好的选择</li></ul></li><li>高效的XML绑定框架jiBx <ul><li>JiBX是一个非常优秀的XML数据绑定框架，提供灵活的绑定映射文件，实现数据对象与XML文件之间的转换，并不需要修改既有的Java类，转换效率是目前很多其他开源项目无法比拟的</li><li>JiBx优点包括：转换效率高，配置绑定文件简单、不需要操作xpath文件，不需要写属性的get/set方法、对象属性名与XML文件名可以不同等等</li><li>使用jiBX绑定XML文档与Java对象需要分两步：第一步是绑定XML文件，也就是映射XML文件与Java对象之间的对应关系；第二步是在运行时，实现XML文件与Java实例之间的相互转换。这时，它已经与绑定文件无关，可以说是完全脱耦了</li><li>在程序运行之前，需要先配置绑定文件并进行绑定，在绑定过程中它将会动态的修改程序中相应的class文件，主要是生成对应对象实例方法和添加被绑定标记的属性JiBx_bindingList等。它使用的技术是BCEL(Byte Code Engineering Library)，BCEL是目前java classworking最广泛使用的一种框架，他可以让你深入JVM汇编语言进行类操作。在JiBX运行时，使用了目前比较流行的一个技术XPP(Xml Pull Parsing)，这也正是JiBX如此高效的原因</li><li>JiBx有两个比较重要的概念: Unmarshal（数据分解）和Marshal（数据编排），Unmarshal是讲XML文件转换成Java对象，而Marshal则是讲Java对象编排成规范的XML文件。JiBX在Unmarshal/Marshal上如此高效，这要归功于使用了XXP技术，而不是使用了基于树型（tree-based）方式，将整个文档写入内存，然后进行操作的DOM(Document Object Model)，也不是使用基于事件流（event stream）的SAX(Simple API for Xml)。XPP使用的是不断增加的数据流处理方式，同时允许在解析XML文件时中断</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class Order{
    private long orderNumber;
    private Customer customer;
    private Address billTo;
    private Shippiong shipping;
    private Address shipTo;
    private Float total;
    //set 、get
}
public class Customer{
    private long customerNumber;
    private String firstName;
    private String lastName;
    private List&lt;String&gt; middleNames;
    //定义set 、get
}
public class Address{
    private String street1;
    private String street2;
    private String city;
    private String state;
    private String postCode;
    private String country;
    //定义set、get方法
}
public enum Shipping{
    STANDARD_MAIL,PRIORITY_MAIL,INTERNATIONAL_MAIL,DOMESTC_EXPRESS,INTERNATIONAL_EXPRESS
}
public class TestOrder {
    private IBindingFactory factory = null;
    private StringWriter writer = null;
    private StringReader reader = null;
    private final static String CHARSET_NAME = &quot;UTF-8&quot;;
    private String encode2Xml(Order order) throws JiBXException,IOException{
        factory = BindingDirectory.getFactory(Order.class);
        writer = new StringWriter();
        IMarShallingContext mctx = factory.createMarshallingContext();
        mctx.setIndent(2);
        mctx.marshalDocument(order,CHARSET_NAME,null,writer);
        String xmlStr = writer.toString();
        writer.close();
        System.out.println(xmlStr.toString());
        return xmlStr;
    }
    private Order decode2Order(String xmlBody) throws JiBXException{
        reader = new StringReader(xmlBody);
        IUnmarshallingContext uctx = factory.createUnmarshallingContext();
        Order order = (Order) uctx.unmarshalDocument(reader);
        return order;
    }
    public static void main(String[] args) throws JiBXExcpetion,IOExcpetion{
        TestOrder test = new TestOrder();
        Order order = OrderFactory.create(123);
        String body = test.encode2Xml(order);
        Order order2 = test.decode2Order(body);
        System.out.prinln(order2);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>HTTP+XML HTTP请求消息编码类
public class HttpXmlRequestEncoder extends AbstractHttpXmlEncoder&lt;HttpXmlRequest&gt;{
    @Override
    protected void encode(ChannelHandlerConetext ctx,HttpXmlRequest msg,List&lt;Object&gt; out) throws Exception{
        ByteBuf body = encode0(ctx,msg.getBody());
        FullHttpRequest request = msg.getRequest();
        if(request == null){
            request = new DefaultFullHttpRequest(HttpVersion.HTTP_1_1,HttpMethod.GET,&quot;/do&quot;,body);
            HttpHeaders headers = request.headers();
            headers.set(HttpHeaders.Names.HOST,InetAddress.getLocalHost().getHostAddress());
            headers.set(HttpHeaders.Names.CONNECTION,HttpHeaders.Values.CLOSE);
            headers.set(HttpHeaders.Names.ACCEPT ENCODING,HttpHeaders.Values.GZIP.toString()+&#39;,&#39;+HttpHeaders.Values.DEFLATE.toString());
            headers.set(HttpHeaders.Names.USER_ACCEPT_CHARSET,&quot;ISO-8859-1.utf-8;q=0.7*;q=0.7&quot;)
            headers.set(HttpHeaders.Names.ACCEPT_LANGUACGE,&quot;zh&quot;);l
            headers.set(HttpHeaders.Names.USER_AGENT,&quot;Netty xml Http Client side&quot;);
            headers.set(HttpHeaders.Names.ACCEPT,&quot;text/html,application/xhtml+xml,application/xml;q=0.9*/*;q=0.8&quot;);
            HttpHeaders.setContentLength(request,body.readableBytes());
            out.add(request);
        }

    }
}
public abstract class AbstarctHttpXmlEncoder&lt;T&gt; extends MessageToMessageEncoder&lt;T&gt;{
    IBindingFactory factory = null;
    StringWriter writer = null;
    final static String CHARSET_NAME = &quot;UTF-8&quot;;
    final static Charset UTF_8 = Charset.forName(CHARSET_NAME);
    protected ByteBuf encode0(ChannelHandlerContext ctx,Object body) throws Exception{
        factory = BindingDirectory.getFactory(body.getClass());
        writer = new StringWriter();
        IMarshallingContext mctx = factory.createMarshallingContext();
        mctx.setIndent(2);
        mctx.marshalDocument(body, CHARSET_NAME,null,writer);
        writer.close();
        writer = null;
        ByteBuf encodeBuf = Unpooled.copiedBuffer(xmlStr,UTF_8);
        return encodeBuf;
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx,Throwable cause) throws Exception{
        if(writer !=null){
            writer.close();
            writer = null;
        }
    }
}
HTTP+XML请求消息HttpXmlRequest 用于实现和协议栈之间的解耦
public class HttpXmlRequest{
    private FullHttpRequest request;
    private Object body;//编码对象
    public HttpXmlRequest(FullHttpRequest request ,Object body){
        this.request = request;
        this.body = body;
    }
    public final FullHttpRequest getRequest(){
        return request;
    }
    public final void setRequest(FullHttpRequest request){
        this.request = request;
    }
    public final Object getBody(){
        return body;
    }
    public final void setBody(Obejct body){
        this.body = body;
    }
}
HTTP+XML请求消息解码类
public class HttpXmlRequestDecoder extends AbstractHttpXmlDecoder&lt;FullHttpRequest&gt;{
    public HttpXmlRequestDecoder(Class&lt;?&gt; clazz){
        this(clazz,false);
    }
    public HttpXmlRequestDecoder(Class&lt;?&gt; clazz,boolean isPrint){
        super(clazz,isPrint);//是否打印Http码流的开关
    }
    @Override
    protected void decode(ChannelHandlerContext arg0,FullHttpRequest arg1,List&lt;Object&gt; arg2) throws Exception{
        if(!arg1.getDecoderResult().isSuccess()){
            sendError(arg0,BAD_REQUEST);
            return;
        }
        HttpXmlRequest request = new HttpXmlRequest(arg1,decode0(arg0,arg1.content()));
        arg2.add(request);
    }

    private staitc void sendError(ChannelHandlerContext ctx,HttpResponseStatus status){
        FullHttpResponse response = new DefaultFullHttpResponse(HTTP_1_1,status,Unpooled.copiedBuffer(&quot;Failure:&quot; + status.toString() + &quot;\\r\\n&quot;,CharsetUtil.UTF_8));
        response.headers().set(CONTENT_TYPE,&quot;text/plain;charset=UTF-8&quot;);
        ctx.writeAndFlush(response).addListener(ChannelFutureListener.CLOSE);
    }
}

public abstract class AbstractHttpXmlDecoder&lt;T&gt; extends MessageToMessageDecoder&lt;T&gt;{
    private IBindingFactory factory;
    private StringReader reader;
    private Class&lt;?&gt; clazz;
    private boolean isPrint;
    private final static String CHARSET_NAME = &quot;UTF-8&quot;;
    private final static Charset UTF_8 = Charset.forName(CHARSET_NAME);

    protected AbstractHttpXmlDecoder(Class&lt;?&gt; clazz){
        this(clazz,false);
    }
    
    protected AbstractHttpXmlDecoder(Class&lt;?&gt; clazz,boolean isPrint){
        this.clazz = clazz;
        this.isPrint = isPrint;
    }

    protected Object decode0(ChannelHandlerContext arg0,ByteBuf body) throws Exception{
        factory = BinddingDirectory.getFactory(clazz);
        String content = body.toString(UTF_8);
        if(isPrint) Sytem.out.print(&quot;The body is :&quot;+content);
        reader = new StringReader(content);
        IUnmarshallingContext uctx = factory.createUnmarshallingContext();
        Object result = uctx.unmarshalDocument(reader);
        reader.close();
        reader = null;
        return result;
    }

    @Ovrride
    public void exceptionCaught(ChannelHandlerContext ctx,Throwable cause) throws Exception{
        if(reader !=null){
            reader.close();
            reader = null;
        }
    }
}
Http + XML 响应消息编码类
public class HttpXmlResponse{
    private FullHttpResponse httpResponse;
    private Object result;
    public HttpXmlResponse(FullHttpResponse httpResponse,Object result){
        this.httpResponse = httpResponse;
        this.result = result;
    }
    public final FullHttpResponse getHttpResponse(){
        return httpResponse;
    }
    public final void setHttpResponse(FullHttpResponse httpResponse){
        this.httpResponse = httpResponse;
    }
    public final Object getResult(){
        return result;
    }
    public final void setResult(Object result){
        this.result = result;
    }
}

public class HttpXmlResponseEncode extends AbstractHttpXmlEncoder&lt;HttpXmlResponse&gt;{
    protected void encode(ChannelHandlerContext ctx,HttpXmlResponse msg,List&lt;Object&gt; out) throws Exception{
        ByteBuf body = encode0(ctx,msg.getResult());
        FullHttpResponse response = msg.getHttpResponse();
        i(response == null){
            response = newDefaultFullHttpResponse(HTTP_1_1,OK,body);
        }else{//无法重用业务侧自定义HTTP应答消息的主要原因是netty的DefaultFullHttpResponse没有提供动态设置消息体的content接口，只能在第一次构造的时候设置内容
            reponse = new DefaultFullHttpResponse(msg.getHttpResponse().getProtocolVersion(),msg.getHttpResponse.getStatus(),body);
        }
        response.headers().set(CONTENT_TYPE,&quot;text/xml&quot;);
        setContentLength(response,body.readableBytes());
        out.add(response);
    }
}
public class HttpXmlResponseDecoder extends AbstractHttpXmlDecoder&lt;DefaultFullHttpResponse&gt;{
    public httpXmlResponseDecoder(Class&lt;?&gt; clazz){
        this(clazz,false);
    }
    public HttpXmlResponseDecoder(Class&lt;?&gt; clazz,boolean isPrintlog){
        super(clazz,isPrintlog);
    }
    @Override
    protect void decode(ChannelHandlerContent ctx,DefaultFullHttpResponse msg,List&lt;Object&gt; out) throws Exception {
        HttpXmlResponse resHttpXmlResponse = new HttpXmlResponse(msg,decode0(ctx,msg.content()));
        out.add(resHttpXmlResponse);
    }
}
HTTP+XML客户端
public class HttpXmlClient{
    public void connet(int port) throws Exception{
        EventLoopGroup group = new NioEventLoopGroup();
        try {
            ServerBootstrap b = new ServerBootstrap();
            b.group(group)
                    .channel(NioSocketChannel.class)
                    .option(ChannelOption.TCP_NODELAY,true)
                    .handler(new ChannelInitalizer&lt;SocketChannel&gt;(){
                        @Override
                        public void initChannel(SocketChannel ch) throws Exception{
                            
                            ch.pipeline().addLast(&quot;http-decoder&quot;,new HttpResponseDecoder());
                            //负责将1个Http请求消息的多个部分合并成一个完整的HTTP消息
                            ch.pipeline().addLast(&quot;http-aggregator&quot;,new HttpObjectAggregator(65536));
                            //XML解码器
                            ch.pipeline().addLast(&quot;xml-decoder&quot;,new HttpXmlResponseDecoder(Oder.class,true));
                            ch.pipeline().addLast(&quot;http-encoder&quot;,new HttpXmlRequestEncoder());

                            ch.pipeline().addLast(&quot;xmlClientHandler&quot;,new HttpXmlClienHandle());
                        }
                    });
            ChannelFuture f = b.bind(port).sync();
            f.channel().closeFuture().sync();
        }finally {
            group.shutdownGracefully();
        }
    }

    public static void main(String[] args) throws Exception {
        new HttpXmlClient().run(8080);
    }
}
public class HttpXmlClientHandle extends SimpleChannelInboundHandle&lt;HttpXmlResponse&gt;{
    @Override
    public void ChannelActive(ChannelHandlerContext ctx){
        HttpXmlRequest request = new HttpXmlRequest(null,OderFactory.create(123));
        ctx.writeAndFlush(request);
    }
    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause){
        cause.printStackTrace();
        ctx.close();
    }

    @Override
    protected void messageReceived(ChannelHandlerContext ctx,HttpXmlResponse msg) throws Exception{
        System.out.println(&quot;The client receive response of http header is:&quot; + msg.getHttpResponse().headers().names());
        System.out.println(&quot;Thre client receive of http body is &quot; + msg.getResult());
    }
}
public class OrderFactory{
    public static Order create(long orderID){
        Oder order = new Order();
        order.setOrderNumber(orderID);
        Address address = new Address();
        address.setCity(&quot;广州&quot;);
        address.setCounty(&quot;中国&quot;);
        order.setBillTo(address);
        Customer customer = new Customer();
        customer.setCustomerNumber(orderID);
        order.setCustomer(customer);
        return order;
    }
}

Http+XML服务端开发
public class HttpXmlServer{

    public void bind(final int portl) throws Exception{
        EventLoopGroup boosGroup = new NioEventLoopGroup();
        EventLoopGroup workerGroup = new NioEventLoopGroup();
        try {
            ServerBootstrap serverBootstrap = new ServerBootstrap();
            serverBootstrap.group(boosGroup,workerGroup)
                    .channel(NioServerSocketChannel.class)
                    .handler(new ChannelInitalizer&lt;SocketChannel&gt;(){
                        @Override
                        public void initChannel(SocketChannel ch) throws Exception{
                            
                            ch.pipeline().addLast(&quot;http-decoder&quot;,new HttpRequestDecoder());
                            ch.pipeline().addLast(&quot;http-aggregator&quot;,new HttpObjectAggregator(65536));
                            
                            ch.pipeline().addLast(&quot;xml-decoder&quot;,new HttpXmlRequestDecoder(Oder.class,true));
                            ch.pipeline().addLast(&quot;http-encoder&quot;,new HttpXmlResponseEncoder());

                            ch.pipeline().addLast(&quot;fileServerHandler&quot;,new HttpXmlServerHandler());
                        }
                    });
            ChannelFuture f = serverBootstrap.bind(port).sync();
            f.channel().closeFuture().sync();
        }finally {
            boosGroup.shutdownGracefully();
            workerGroup.shutdownGracefully();
        }
    }

    public static void main(String[] args) throws Exception {
        new HttpXmlServer().run(8080);
    }
}
public class HttpXmlServerHandler extends SimpleChannelInboundHandler&lt;HttpXmlRequest&gt;{
    @Override
    public void messagReceived(final ChannelHandlerContext ctx,HttpXmlRequest xmlRequest) throws Exception{
        HttpRequest request = xmlRequest.getRequest();
        Order order = (Order) xmlRequest.getBody();
        System.out.println(&quot;Http server receive request:&quot; + order);
        dobusiness(order);
        if(!isKeeypAlive(request)){
            future.addListener(new GenericFutureListener&lt;Futrue&lt;? super Void&gt;&gt;{
                public void operationComplete(Future future) throws Exception{
                    ctx.close();
                }
            })
        }
    }
    private void dobusiness(Order oder){
        order.getCustomer().setFirstName(&quot;xxx&quot;);
    }
    public void exceptionCaught(ChannelHandlerContext ctx,Throwable cause) throws Exception{
        cause.printStackTrace();
        if(ctx.channel().isActive()){
            sendError(ctx,INTERNAL_SERVER_ERROR);
        }
    }
    private staitc void sendError(ChannelHandlerContext ctx,HttpResponseStatus status){
        FullHttpResponse response = new DefaultFullHttpResponse(HTTP_1_1,status,Unpooled.copiedBuffer(&quot;Failure:&quot; + status.toString() + &quot;\\r\\n&quot;,CharsetUtil.UTF_8));
        response.headers().set(CONTENT_TYPE,&quot;text/plain;charset=UTF-8&quot;);
        ctx.writeAndFlush(response).addListener(ChannelFutureListener.CLOSE);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>webSocket协议开发 <ul><li>WebSocket将网络套接字引入到了客户端和服务端，浏览器和服务器之间可以通过套接字建立持久的连接，双方可以随时互发数据给对方，而不是之前由客户端控制的一请求一应答模式。</li><li>HTTP协议为半数双工协议。半双工协议指数据可以在客户端和服务端两个方向上传输，但是不能同时传输。意味着在同一个时刻，只有同一个方向上的数据传送</li><li>HTTP消息冗长而繁琐。HTTP消息包含消息头、消息体、换行符等，通常情况下采用文本方式传输、相比于其他的二进制通信协议，冗长而繁琐</li><li>针对服务器推送的黑客工具，例如长时间轮询</li><li>轮询：在特定时间间隔如1秒，由浏览器对服务器发送HTTPRequest，然后由服务器返回的最新的数据给客户端浏览器。浏览器需要不断向服务器发出请求，然而HTTP request的header是非常冗长的，里面包含的可用数据比例可能非常低，会占用很多带宽和服务器资源</li><li>比较新的一种轮询技术是Comet，使用了Ajax，这种技术可以达到双向通信，但仍然需要发出请求，在Comet中，普遍采用长连接，会大量消耗服务器带宽和资源</li><li>在WebsocketAPI中，浏览器和服务器只需要做一个握手动作，然后浏览器和服务器之间形成了一条快速通道，两者就可以直接相互传送数据了。WebSocket基于TCP双向全双工进行消息传递，在同一时刻，既可以发送消息，又可以接受消息，性能有较大提升。</li><li>WebSocket特点 <ul><li>单一的TCP连接，采用全双工模式通信</li><li>对代理、防火墙和路由器透明</li><li>无头部消息’Cookie和身份验证</li><li>无安全开销</li><li>通过&quot;ping/pong&quot;帧保持链路激活</li><li>服务器可以主动推送消息给客户端，不需要客户端轮询</li></ul></li></ul></li><li>WebSocket生命周期 <ul><li>握手成功之后，服务端和客户端就可以通过&quot;message&quot;的方式进行通信了，一个消息由一个或者多个帧组成，WebSocket的消息并不一定对应一个特定网络层的真，他可以被分隔成多个帧或者被合并</li><li>帧都有自己对应的类型，属于同一个消息的多个帧具有相同类型的数据。从广义上将，数据类型可以使文本数据，二进制数据和控制帧（协议级信令，如信号）</li><li>WebSocket连接关闭 <ul><li>为关闭WebSocket连接，客户端和服务端需要通过一个安全的方法关闭底层TCP连接以及TLS会话，如果合适，丢弃任何可能已经接收的字节；必要时（比如收到工具），可以通过任何可用的手段关闭连接</li><li>底层的TCP连接，在正常情况下，应该首先有服务器关闭，在异常情况下（例如在一个合理的时间周期后没有收到TCP Close），客户端可以发起TCP Close。因此，当服务器被只是关闭WebSocket连接时，他应该立即发起一个TCP Close操作，客户端应该等待服务器的TCP Close</li><li>Websocket的握手关闭消息带有一个状态码和一个可选的关闭原因，它必须按照协议要求发送一个Close控制帧，当对端接收到关闭控制帧指令时，需要主动关闭WebSocket连接</li></ul></li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class WebSocketServer{

    public void bind(final int portl) throws Exception{
        EventLoopGroup boosGroup = new NioEventLoopGroup();
        EventLoopGroup workerGroup = new NioEventLoopGroup();
        try {
            ServerBootstrap serverBootstrap = new ServerBootstrap();
            serverBootstrap.group(boosGroup,workerGroup)
                    .channel(NioServerSocketChannel.class)
                    .handler(new ChannelInitalizer&lt;SocketChannel&gt;(){
                        @Override
                        public void initChannel(SocketChannel ch) throws Exception{
                            
                            ch.pipeline().addLast(&quot;http-codec&quot;,new HttpServerCodec());
                            ch.pipeline().addLast(&quot;aggregator&quot;,new HttpObjectAggregator(65536));
                            //支持浏览器和服务器进行WebSocket通信
                            ch.pipeline().addLast(&quot;http-chunked&quot;,new ChunkedWriteHandler());
                            ch.pipeline().addLast(&quot;http-encoder&quot;,new HttpXmlResponseEncoder());

                            ch.pipeline().addLast(&quot;handler&quot;,new WebSocketHandler());
                        }
                    });
            ChannelFuture f = serverBootstrap.bind(port).sync();
            f.channel().closeFuture().sync();
        }finally {
            boosGroup.shutdownGracefully();
            workerGroup.shutdownGracefully();
        }
    }

    public static void main(String[] args) throws Exception {
        new WebSocketServer().run(8080);
    }
}
public class WebSocketServerHandler extends SimpleChannelInboundHandler&lt;Object&gt;{
    private WebSocketServerHandshaker handshaker;
    @Override
    public void messageReceived(ChannelHandlerContext ctx,Object msg) throws Exception{
        if(msg instanceof FullHttpRequest){
            handleHttpRequest(ctx,(FullHttpRequest) msg);
        }
        else if(msg instanceof WebSocketFrame){
            handleWebSocketFrame(ctx,(WebSocketFrame) msg);
        }
    }
    @Ovrride
    public void channelReadCompelte(ChannelHandlerContext ctx) throws Exception{
        ctx.flush();
    }
    private void handleHttpRequest(ChannelHandlerContext ctx,FullHttpRequest req) throws Exception{
        if(!reql.getDecoderResult().isSuccess()|| (!&quot;websocket&quot;.equals(req.headers().get(&quot;upgrade&quot;)))){
            sendHttpResponse(ctx,req,new DefauleFullHttpResponse(HTTP_1_1,BAD_REQUEST);
            return;
        }
    }
    WebSocketServerHandshakerFactory wsFactory = new WebSoketServerHandshakerFactory(&quot;ws://localhost:8080/webscoket&quot;,null,false);
    handshaker = wsFactory.newHandshaker(req);
    if(handshaker == null){
        WebSocketServerHandShakerFactory.sendUnsupportedWebSocketVersionResponse(ctx.channel());
    }else{
        handshaker.handshake(ctx.channel(),req);
    }
    private void handleWebSocketFrame(ChannelHandlerContext ctx，WebSocketFrame frame){
        if(frame instanceof CloseWebSocketFrame){
            handshaker.close(ctx.channel(),(CloseWebSocketFrame) frame.retain());
            return;
        }
        if(frame instanceof PingWebSocketFrame){
            ctx.channel().write(new PongWebSocketFrame(frame.content.retain()));
            return;
        }
        if(!(frame instanceof TextWebSocketFrame)){
            throw new UnsupportOperationException(String.format(&quot;% frame types not supported&quot;,frame.getClass().getName()))
        }
        String request = ((TextWebSocketFrame) frame).text();
        System.out.println(String.format(&quot;%s received %s&quot;),ctx.channel(),request);
        ctx.channel().write(
            new TextWebSocketFrame(request + &quot;, 欢迎使用Nettty Websocket服务，现在时刻：&quot; +new java.util.Date().toString());

        )
    }
    private static void sendHttpResponse(ChannelHandlerContext ctx,FullHtppRequest req,FullHttpResponse res){
        if(res.getStatus().code()!=200){
            ByteBuf buf = Unpooled.copiedBuffer(res.getStatus().toString(),CharsettUtil.UTF_8);
            res.content().writeBytes(buf);
            buf.release();
            setContentLength(res,res.content().readableBytes());
        }
        ChannelFuture f = ctx.channel().writeAndFlush(res);
        if(!isKeepAlive(req) || res.getStatus().code()!=200){
            f.addListener(ChannelFutureListener.CLOSE);
        }
    }
    @Ovrride
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception{
        cause.printStatckTrace();
        ctx.close();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;html&gt;
&lt;head&gt;
&lt;meta charset=&quot;UTF-8&quot;&gt;
Netty WebSocket 时间服务器
&lt;/head&gt;
&lt;br&gt;
&lt;body&gt;
&lt;br
&lt;script type=&quot;text/javascipt&quot;&gt;
var socket;
if(!window.WebSocket){
    window.WebSocket = windows.MozWebSocket;

}
if(window.WebSocket){
    socket = new WebSocket(&quot;ws://localhost:8080/websocket&quot;);
    socket.onmessage = function(event){
        var ta = document.getElementById(&#39;responseText&#39;);
        ta.valeu = &#39;&#39;;
        ta.value = event.data;
    };
    socket.onopen = function(event){
        var ta = document.getElementById(&#39;reseponseText&#39;);
        ta.value = &quot;打开Websocket服务正常，浏览器支持Websocket&quot;;
    }
    socket.onclose = function(event){
        vat ta = document.getElementById(responseText&#39;);
        ta.value = &#39;&#39;&#39;;
        ta.value = &#39;webScoket关闭&#39;;
    }
    }
    else {
        alert(“error&quot;);
    }
function send(message){
    if(!window.WebSocket){return;}
    if(socket.readState == WebSokcet.OPNE){
        socket.send(message);
    }else{
        alert(&quot;WebSocket连接没有建立成功&quot;);
    }
}
&lt;/script&gt;
&lt;form onsubmit= &quot;return false;&quot;&gt;
&lt;input type =&quot;text&quot; name=&quot;message&quot; value =&quot;Netty最佳实践&quot;&gt;
&lt;br&gt;&lt;br&gt;
&lt;input type = &quot;button&quot; value =&quot;发送 Websocket请求消息&quot; onclick =&quot;send(this.form.message.value)&quot;&gt;
&lt;hr color&quot;blue&quot;&gt;
&lt;h3&gt;服务端返回应答消息&lt;/h3&gt;
&lt;textarea id=&quot;responseText&quot; style=&quot;width:500px;height:300px;&quot;&gt;&lt;/textarea&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>UDP协议开发 <ul><li>UDP用户数据包协议(User Datagram Protocol,UDP)的简称，其主要作用是讲网络数据流量压缩成数据报形式，提供面向事务的简单信息传送服务。与TCP协议不同，UDP协议直接利用IP协议进行UDP数据报的传输，UDP提供的是面向无连接的，不可靠的数据报投递服务。当使用UDP协议传输信息时，用户应用程序必须负责解决数据报丢失，重复，排序，差错确认等问题</li><li>由于UDP具有资源消耗小，处理速度快的有点，所以通常视频，音频等可靠性要求不高的数据传输一般会使用UDP，即便有一定的丢包率，也不会对功能造成严重的影响</li><li>UDP是无连接的，通信双方不需要建立物理链路连接。在网络中它用于处理数据包，在OSI模型中，它处于第四传输层，位于IP协议的上一层，它不对数据报分组，组装，校验和排序，因此是不可靠的。报文的发送者不知道报文是否被对方正确接收</li><li>UDP数据报格式有首部和数据两个部分，首部8个字节 <ul><li>源端口：源端口号，2个字节，最大值为65535；</li><li>目的端口：目的端口号，2个字节，最大值为65535；</li><li>长度：2个字节，UDP用户数据报的总长度</li><li>校验和：2字节，用于校验UDP数据报的数字段和包含UDP数据报首部的“伪首部”。校验方法类似IP分组首部校验和</li><li>伪首部，又称为伪包头，是指在TCP的分段或UDP的数据报格式中，在数据报首部前面增加源IP地址，目的IP地址，IP分组的协议字段，TCP或UDP数据报的总长度等，共12字节，所构成的扩展首部结构，此伪首部是一个临时结构，既不向上也不向下传递，仅仅为了保证可以校验套接字的正确性</li></ul></li><li>UDP协议的特点 <ul><li>UDP传送数据前并不与对方建立连接，UDP是无连接的，在传输数据前，发送方和接收方相互交换信息是双方同步</li><li>UDP对接收到的数据包不发送确认信号，发送端不知道数据是否被正确接收，也不会重发数据</li><li>UDP传送数据比TCP快速，系统开销少，UDP比较简单，UDP头包含了源端口，目的端口，消息长度和校验和等很少的字节。由于UDP比TCP简单，灵活，常用于可靠性要求不高的数据传输，如视频，图片以及简单文件传输系统（TFTP）等，TCP适用于可靠性要求很高的但实时性要求不高的应用，如文件传输协议FTP，超文本传输协议HTTP，简单邮件传输协议SMTP等。</li></ul></li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class ChineseProverbServer{

    public void run(final int portl) throws Exception{
        EventLoopGroup group = new NioEventLoopGroup();
        try {
            ServerBootstrap serverBootstrap = new ServerBootstrap();
            serverBootstrap.group(group)
                    .channel(NioDatagramChannel.class)
                    .option(ChannelOption.SO_BROADCAST,true)
                    .handler(new ChineseProverbServerHandler());
            ChannelFuture f = serverBootstrap.bind(port).sync();
            f.channel().closeFuture().sync();
        }finally {
            boosGroup.shutdownGracefully();
            workerGroup.shutdownGracefully();
        }
    }

    public static void main(String[] args) throws Exception {
        new ChineseProverbServer().run(8080);
    }
}
public class ChineseProverbServerHandler extends SipmleChannelInbounHandler&lt;DataramPacket&gt;{
    private static final String[] DICTIONARY={&quot;只要功夫深，铁柱磨成针&quot;};
    private String nextQuote(){
        int quoted = ThreadLocalRandom.current().nextInf(DICTIONARY.length);
        return DICTIONARY(quotedId);
    }
    public void messageReceived(ChannelHandlerContext ctx,DatagramPacket packet)throws Exception{
        String req = packet.content().toString(CharsetUitl.UTF_8);
        System.out.println(req);
        if(&quot;谚语字典查询?&quot;.equals(req)){
            ctx.writeAndFlush(new DatagramPacket(Unpooled.copiedBuffer(&quot;谚语查询结果：&quot; +newQuote(),CharsetUtil.UTF_8),packet.sender()));
        }
    }
    public void exceptionCaught(ChannelHandlerContext ctx,Throwable cause){
        ctx.close();
        cause.printStatckTrace();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class ChineseProverbClient{

    public void run(final int portl) throws Exception{
        EventLoopGroup group = new NioEventLoopGroup();
        try {
            Bootstrap b = new Bootstrap();
            b .group(group)
                    .channel(NioDatagramChannel.class)
                    .option(ChannelOption.SO_BROADCAST,true)
                    .handler(new ChineseProverbClientHandler());
            Channel ch = b.bind(0).sync().channel();
            ch.writeAndFlush(
                new DatagramPacket(Unpooled.copiedBuffer(&quot;谚语字典查询?&quot;,CharsetUtil.UTF_9),new InetSocketAddress(&quot;255.255.255.255&quot;,port)).sync();//向本网段内所有主机广播请求消息
            );
            if(!ch.closeFuture().await(15000)){
                System.out.println(&quot;查询超时!&quot;)
            }
        }finally {
            group.shutdownGracefully();
        }
    }

    public static void main(String[] args) throws Exception {
        new ChineseProverbClient().run(8080);
    }
}
public class ChineseProverbClientHandler extends SimpleChannelInboundHandler&lt;DatagramPacket&gt;{
    public void messageReceived(channelHandlerContext ctx,DatagramPacket msg) throws Exception{
        String response = msg.content().toString(CharsetUtil.UTF_8);
        if(response.startsWitch(&quot;谚语查询结果:&quot;)){
            System.out.println(response);
            ctx.close();
        }
    }

    public void exceptionCaught(ChannelHandlerContext ctx,Throwable cause){
        cause.prinStackTrace();
        ctx.close();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>文件传输 <ul><li>文件是计算机中一种基本的数据存储形式，在实际存储数据是，如果对于数据的读写速度要求不是很高，存储的数据量不是很大，使用文件作为一种持久数据存储的方式是比较好的选择。存储在文件内部的数据和内存中的数据不同，存储在文件中的数据是一种永久存储</li><li>在不同存储介质中，文件中的数据都是以一定的顺序依次存储起来的。在世界读取时由硬件以及操作系统完成对于数据的控制，保证程序读取到的数据与存储的顺序一致，每个文件以一个文件路径和文件名称进行表示，在需要访问该文件时，只需要知道改文件的路径以及文件的全名即可</li><li>绝对路径是指文件的完整路径，使用路径可以找到一个唯一的文件。使用绝对路径的最大缺点是不同操作系统的文件路径和表现形式不同，使用不当往往会导致文件读取失败，实际往往使用相对路径或者类路径</li><li>文件一般采用文件名.后缀名形式进行命名，文件名表示文件的作用，后缀名表示文件的类型</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class FileServer{

    public void bind(final int portl) throws Exception{
        EventLoopGroup boosGroup = new NioEventLoopGroup();
        EventLoopGroup workerGroup = new NioEventLoopGroup();
        try {
            ServerBootstrap serverBootstrap = new ServerBootstrap();
            serverBootstrap.group(boosGroup,workerGroup)
                    .channel(NioServerSocketChannel.class)
                    .option(ChannelOption.SO_BAKCLOG,100)
                    .handler(new ChannelInitalizer&lt;SocketChannel&gt;(){
                        @Override
                        public void initChannel(SocketChannel ch) throws Exception{
                            
                            ch.pipeline().addLast(new StringEncoder(CharsetUtil.UTF_8),
                            new LineBasedFrameDecoder(1024)
                            new StringDecoder(CharsetUtil.UTF_8),
                            new FileServerHandler()
                            );
                        }
                    });
            ChannelFuture f = serverBootstrap.bind(port).sync();
            f.channel().closeFuture().sync();
        }finally {
            boosGroup.shutdownGracefully();
            workerGroup.shutdownGracefully();
        }
    }

    public static void main(String[] args) throws Exception {
        new FileServer().run(8080);
    }
}
public class FileServerHandler extends SimpleChannelInboundHandler&lt;String&gt;{
    private static String CR = System.getProperty(&quot;line.separtor&quot;);
    public void messageReceived(ChannelHandlerContext ctx,String msg) throws Exception{
        File file = new File(meg);
        if(file.exist()){
            if(!file.isFile()){
                ctx.writeAndFlush(&quot;Not a file:&quot;+ file +CR);
                return;
            }
            ctx.write(file + &quot; &quot; file.length() + CR;
            RandomAccessFile randomAccessFile = new RandomAccessFile(msg,&quot;r&quot;);
            FileRegion region = new DefaultFileRegion(
                //文件通道，用于对文件进行读写操作
                //文件操作位置，读取或写入的起始点
                //操作的总字节数
                randomAccessFile.getChannel(),0,randomAccessFile.length());
            )
            ctx.write(region);
            ctx.writeAndFlush(CR;
            randomAccessFile.close();
        }else{
            ctx.writeAndFlush(&quot;File not found: &quot;+ file + CR);
        }
    }

    public void exceptionCaugtht(ChannelHandlerContext ctx,Throwable cause){
        cause.printStackrace();
        ctx.close();
    }
}

使用telnet localhost 8080进行调试
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>私有协议开发 <ul><li>私有协议本质上是厂商内部发展和采用的标准，除非授权，其它厂商一般无权使用该协议。只要能够用于跨进程，跨主机数据交换的非标准协议，都可以成为私有协议，在传统的Java应用中，通常使用一下4种方式进行跨节点通信。 <ul><li>通过RMI进行远程服务调用</li><li>通过Java的Socket+Java序列化的范式进行跨节点调用</li><li>利用一些开源的RPC框架进行远程服务调用。如Facebooke的Thrift，Apache的Avro等</li><li>利用标准的共有协议进行跨节点服务调用：HTTP+XML，RESTful+JSON或者Webservice</li></ul></li></ul></li><li>私有协议栈功能描述 <ul><li>基于Netty的NIO通信框架，提供高性能的异步通信能力</li><li>提供消息的编解码框架，可以实现POJO的序列化和反序列化</li><li>提供基于IP地址的白名单接入认证机制</li><li>链路有效性校验机制</li><li>链路的断连重连机制</li></ul></li><li>通信模型 <ul><li>Netty协议栈客户端发送握手请求消息，携带节点ID等有效身份认证信息</li><li>Netty协议栈服务端对握手请求协议进行合法性校验，包括节点ID有效性校验，节点重复登录校验和IP地址合法新校验，校验通过后，返回登录成功的握手应答消息</li><li>链路建立成功之后，客户端发送业务消息</li><li>链路成功之后，服务端发送心跳消息</li><li>链路建立成功之后，客户端发送心跳消息</li><li>链路建立成功之后，服务端发送业务消息</li><li>服务端退出时，服务端关闭连接，客户端感知对方关闭连接后，被动关闭客户端连接</li><li>备注：Netty协议通信双方链路建立成功之后，双方可以进行全双工通信，无论客户端还是服务端，都可以主动发送请求消息给对安防，通信方式可以是TWOWAY或者ONEWAY。双方之间的心跳采用Ping-Pong机制，当链路处于空闲状态时，客户端主动发送Ping消息给服务端，服务端接收到Ping消息后发送应答消息Pong给客户端，如果客户端连续发送N条Ping消息欧没有接收到服务端返回的Pong消息，说明链路已经挂死或者对方处于异常状态，客户端主动关闭连接，间隔周期T后发起重连操作，直到重连成功</li><li>Netty协议栈消息定义 <ul><li>消息头 <ul><li>header：Header 变长 消息头定义 <ul><li>crcCode :整型int 32 Netty消息的校验码 <ul><li>0xABEF:固定值，表明该消息是Netty协议消息，2个字节</li><li>主版本号:1-255,1个字节</li><li>次版本号:1-255,1个字节</li></ul></li><li>length: 整型int 32 消息长度，整个消息，包括消息头和消息体</li><li>sessionID：长整型long 64 集群节点内全局唯一，由会话ID生成器生成</li><li>type Byte 8 0业务请求消息 1业务响应消息 2业务ONE WAY消息（既是请求又是响应消息）3我收请求消息 4 握手应答消息5 心跳请求消息 6心跳应答消息</li><li>priority Byte 8 消息优先级 0-255</li><li>attachment Map&lt;String,Object&gt; 变长 可选字段，用于扩展消息头</li></ul></li><li>body：Object 变长 对于请求消息，它是方法的参数，对于响应消息，它是返回值</li></ul></li></ul></li></ul></li><li>Netty协议支持的字段类型 <ul><li>boolean/Boolean</li><li>byte/Byte</li><li>int对应C/C++int32</li><li>char/Character</li><li>short对应C/C++int16</li><li>long对应C/C++int64</li><li>float/Float</li><li>double/Double</li><li>String 对应C/C++String</li><li>list支持各种List实现</li><li>array支持各种数组实现</li><li>map支持Map嵌套和泛型</li><li>set支持Set嵌套和泛型</li></ul></li><li>Netty协议的编解码规范 <ul><li>Neety协议NettyMessage的编码规范如下 <ul><li>crcCode:java.nio.ByteBuffer.putInt(int value),如果采用其他缓冲区实现，必须与其等价</li><li>length:java.nio.ByteBuffer.putInt(int value),如果采用其他缓冲区实现，必须与其等价</li><li>sessionID:java.nio.ByteBuffer.putLong(Long value),如果采用其他缓冲区实现，必须与其等价</li><li>type:java.nio.ByteBuffer.put(byte b),如果采用其他缓冲区实现，必须与其等价</li><li>priority:java.nio.ByteBuffer.put(byte b),如果采用其他缓冲区实现，必须与其等价</li><li>attachment:如果attachment长度为0，表示没有可选附件，则将长度编码设为0，java.nio.ByteBuffer.putInt(0);如果大于0，说明有附件编码，首先对附件个数进行编码，java.nio.ByteBuffer.putInt(attachment.size());然后对Key进行编码，先编码长度，再将它转成byte数组之后编码内容</li><li>body的编码: 通过JBossMarshalling将其序列化为byte数组，然后调用java.nio.ByteBuffer.put(byte[] src)将其写入ByteBuffer缓冲区中</li><li>由于整个消息的长度必须等全部字段都编码完成之后才能确认，所以最后需要更新消息头中的length字段，将其重新写入ByteBuffer中</li></ul></li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>String key = null;
byte[] value = null;
for(Map.Entry&lt;String,Object&gt; param:attchment.entrySet()){
    key = param.getKey();
    buffer.writeString(key);
    value = marshallier.writeObject(parm.getValue());
    buffer.writeBinary(value);
    key = null;
    value = null;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>- Netty协议的解码
  -  crcCode:java.nio.ByteBuffer.getInt()获取校验码字段，其它缓冲区必须与其等价
  -  length:java.nio.ByteBuffer.getInt()获取Netty消息的长度，其它缓冲区必须与其等价
  -  sessionID:java.nio.ByteBuffer.getLong()获取会话ID，其它缓冲区必须与其等价
  -  type:java.nio.ByteBuffer.get()获取消息类型，其它缓冲区必须与其等价
  -  priority:java.nio.ByteBuffer.get()获取消息优先级，其它缓冲区必须与其等价
  -  attachment:首先创建一个新的attachment对象，调用java.nio.ByteBuffer.getInt()获取附件的长度，如果为0，说明附件为空，解码结束，继续解消息体，如果非空，则根据长度通过for循环解码
  -  body 通过JBoss的marshaller进行解码
</code></pre><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>String key = null;
Object value = null;
for(int i=0;i&lt;size;i++){
    key = buffer.readString();
    value = unmarshaller.readObject(buffer.readBinary());
    this.attachment.put(key,value)l;
}
key = null;
value = null;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>链路的建立 <ul><li>Netty协议栈对客户端的说明如下：如果A节点需要调用B节点的服务，但是A和B之间还没有建立物理链路，则由调用方主动发起连接，此时，调用方为客户端，被调用方为服务端</li><li>考虑到安全，链路建立需要通过基于IP地址或者号段的黑白名单安全认证机制。</li><li>客户端与服务端链路建立成功之后，由客户端发送握手请求消息，握手请求消息定义如下 <ul><li>消息头的type字段值为3</li><li>可选附件为个数为0</li><li>消息体为空</li><li>握手消息的长度为22个字节</li></ul></li><li>服务端收到客户端的握手请求消息之后，如果IP校验通过，返回握手成功应答消息给客户端，应用层链路建立成功。握手应答消息定义如下 <ul><li>消息头的type字段值为4</li><li>可选附件个数为0</li><li>消息体byte类型的结果 0 认证成功 - 认证失败</li></ul></li></ul></li><li>链路的关闭 <ul><li>由于采用长连接通信，在正常的业务运行期间，双方通过心跳和业务消息维持链路，任何一方都不需要主动关闭连接 <ul><li>当对方宕机或者重启时，会主动关闭链路，另一方读取到操作系统的通知信号，得知对方REST链路，需要关闭连接，释放自身句柄等资源。由于采用全双工通信，通信双方都需要关闭连接，释放资源</li><li>消息读写过程中，发生了I/O异常，需要主动关闭连接</li><li>信条消息读写过程中发生了I/O异常，需要主动关闭连接</li><li>心跳超时，需要主动关闭连接</li><li>发生编码异常等不可恢复错误时，需要主动关闭连接</li></ul></li></ul></li><li>可靠性设计 <ul><li>Netty协议栈可能会运行在非常恶劣的网络环境中，网络超时，闪断，对方进程僵死或者处理缓慢等情况都有可能发生。为了保证在这些极端的异常场景下Netty协议栈能够正常工作或者自动恢复，需要对它的可靠性进行统一规划和设计 <ul><li>心跳机制 <ul><li>在凌晨等业务低谷期时段，如果发生网络闪断，连接被Hang等网络问题时，由于没有业务消息，应用进程很难发现。到了白天业务高峰期时，会发生大量的网络通信失败。严重会导致一段时间进程无法处理业务消息。为了解决这个问题，在网络空闲时采用心跳机制来检测链路的互通性，一旦发生网络故障，立即关闭链路，主动重连 <ul><li>当网络处于空闲状态持续达到T（连续周期T没有读写消息）时，客户端主动发送Ping心跳消息给服务端</li><li>如果在下一个周期T到来市客户端没有收到对方发送的Pong心跳应答消息或者读到服务端发送的其它业务消息，则心跳失败计数器加1</li><li>每当客户端收到服务的业务消息或者Pong应答消息，将心跳失败计数器清零；当连续N次没有接收到服务端的Pong消息或者业务消息，则关闭链路，间隔INTERVAL时间后发起重连操作</li><li>服务端网络空闲状态持续时间达到T后，服务端将心跳失败计数器加1；只要接收到客户端发送的Ping消息或者其它业务消息，计数器清零</li><li>服务端连续N次没有接收到客户端的Ping消息或者其它业务消息，则关闭链路，释放资源，等待客户端重连</li><li>通过Ping-Pong双向心跳机制，可以保证无论通信哪一方出现网络故障，都能被几时地检测出来，为了防止由于对方短时间内繁忙而没有及时返回应答造成的误判，只有连续N次心跳检测失败才认定链路已经损害，需要关闭链路并重建链路</li><li>当读或者写信条消息发生I/O异常的时候，说明链路已经中断，此时需要立即关闭链路，如果是客户端，需要重新发起连接，如果是服务端，需要清空缓存的半包信息，等待客户端重连</li></ul></li></ul></li></ul></li><li>重连机制 <ul><li>如果链路中断，等待INTERVAL时间后，由客户端发起重连操作，如果重连失败，间隔周期INTERVAL后再次发起重连，直到重连成功</li><li>为了保证服务端能够有充足的时间释放句柄资源，在首次断连时客户端需要等待INTERVAL时间之后再发起重连，而不是失败就立即重连</li><li>为了保证句柄资源几时释放，无论什么场景下的重连失败，客户端都必须保证自身资源被及时释放，包括但不限于SocketChannel。Socket等</li><li>重连失败后，需要打印异常堆栈信息，方便后续的问题定位</li></ul></li><li>重复登录保护 <ul><li>当客户端握手成功之后，在链路处于正常状态下，不允许客户端重复登录，以防止客户端在异常状态下反复重连导致句柄资源被耗尽</li><li>服务端接收到客户端握手请求消息之后，首先对IP地址进行合法性校验，如果校验成功，在缓存的地址表中查看客户端是否已经登录，如果已经登录，则拒绝重复登录，返回错误码-1，同时关闭TCP链路，并在服务端的日志中打印握手失败的原因</li><li>客户端收到握手失败的应答消息之后，关闭客户端的TCP连接，等待INTERVAL时间之后，再次发起TCP连接，直到认证成功</li><li>为了防止由服务端和客户端对链路状态理解不一致导致的客户端无法握手成功的问题，当服务端连续N次心跳超时之后需要主动关闭链路，清空改客户端的地址缓存信息，为了保证后续该客户端可以重连成功，防止被重复登录保护机制拒绝掉</li></ul></li><li>消息缓存重发 <ul><li>无论客户端还是服务端，当链路发生中断之后，在链路恢复之前，缓存在消息队列中待发送的消息不能丢失，等链路恢复之后，重新发送这些消息，保证链路中断期间消息不丢失</li><li>考虑到内存溢出的风险，建议消息缓存队列设置上限，当达到上限之后，应该拒绝继续向该队列添加消息</li></ul></li></ul></li><li>安全性设计 <ul><li>为了保证整个集群环境的安全，内部长连接采用基于IP地址的安全认证机制，服务端对握手请求消息的IP地址进行合法性校验，如果在白名单之内，则校验通过，否则，拒绝对方连接</li><li>如果将Netty协议栈放到公网中使用，需要采用更加严格的安全认证机制，例如基于秘钥和AES加密的用户名+密码认证机制，也可以采用SSL/TSL安全传输</li></ul></li><li>可扩展性设计 <ul><li>Netty协议需要具备一定的扩展能力，业务可以在消息头中自定义业务域字段，例如消息流水号，业务自定义消息头等，通过netty消息头中的可选附件attachment字段，业务可以方便地进行自定义扩展</li><li>Netty协议架构需要具备一定的扩展能力，如统一的消息拦截，接口日志，安全，加解密等可以被方便地添加和删除，不需要修改之前的逻辑代码，类似Servet的FilterChain和AOP，但考虑到性能因素，不推荐通过AOP实现功能的扩展</li></ul></li><li>Netty协议栈开发</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public final class NettyMessage{
    private Header header;
    private Object body;
    public final Header getHeader(){
        return header;
    }
    public final void setHeader(Header header){
        this.header = header;
    }
    public final Object getBody(){
        return body;
    }
    public final void setBody(Object body){
        this.body = body;
    }
    public String toString(){
        return &quot;NettyMessage [ header=&quot; + header + &quot;]&quot;;
    }
}
public final class Header{
    private int crcCode = 0xabef0101;
    private int length;//消息长度
    private long sessionID;//会话ID
    private byte type;//消息类型
    private byte priority;//消息有衔接
    private Map&lt;String,Object&gt; attachment = new HashMap&lt;String,Object&gt;();//附件
    //set/get/toString();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public final class NettyMessageEncoder extends MessageToMessageEncoder&lt;NettyMessage&gt;{
    MarshallingEncoder marshallingEncoder;
    public NettyMessageEncoder() throws IOException{
        this.marshallingEncoder = new MarshallingEncoder();
    }
    protected void encde(ChannelHandlerContext ctx,NettyMessage msg.List&lt;Object&gt; out) throws Exception{
        if(msg == null || msg.getHeader() == null){
            throw new Exception(&quot;The encode message is null&quot;);
        }
        ByteBuf sendBuf = Unpooled.buffer();
        sendBuf.writeInt((msg.getHeader().getCrcCode()));
        sendBuf.wirteInt((msg.getHeader().getLength()));
        sendBuf.wirteInt((msg.getHeader().getSessionID()));
        sendBuf.wirteInt((msg.getHeader().getType()));
        sendBuf.wirteInt((msg.getHeader().getPriority()));
        sendBuf.wirteInt((msg.getHeader().getAttachment().size()));
        String key = null;
        byte[] keyArray = null;
        Object value = null;
        for(Map.Entry&lt;String,Object&gt; param:msg.getHeader().getAttachment().entrySet()){
            key = parm.getKey();
            keyArray = key.getBytes(&quot;UTF-8&quot;);
            sendBuf.writeInt(keyArray.length);
            sendBuf.wirteBytes(keyArray);
            value = param.getValue();
            marshallingEncoder.encode(value,senBuf);
        } 
        key = null;
        keyArray = null;
        value = null;
        if(msg.getBody()!=null){
            marshallingEncoder.encode(msg.getBody(),sendBuf);
        }else{
            sendBuf.writeInt(0);
            sendBuf.setInt(4,sendBuf.readableBytes());
        }
    }
}
public class Marshalling Encoder{
    private static final byte[] LENGTH_PLACHOLDER = new byte[4];
    public MarshallingEncoder() throws IOException{
        marshaller = MarshallingCodeFactory.buildmarshalling();
    }
    protected void encode(Object msg.ByteBuf out) throws Exception{
        try{
            int lengthPos = out.writerIndex();
            out.writeBytes(LENGTH_PLACEHOLDER);
            ChannelBufferByteOutput output = new ChannleBufferByteOutput(out);
            marshaller.start(output);
            marshaller.writeObject(msg);
            marshaller.finish();
            out.setInt(lengthPos,out.writerIndex() - lengthPos - 4);
        }finally{
            marshaller.close();
        }
    }
}
public class NettyMessageDecoder extends LengthFieldBasedFrameDecoder{
    MarshallingDecoder marshallingDecoder;
    public NettyMessageDecoder(int max FrameLength,int lengthFieldOffset,int lengthFiedlLength) throws IOException{
        super(maxFrameLength,lengthFieldOffset,lengthFieldLength);
        marshallingDecode = new MarshallingDecoder();
    }
    protected Object decode(ChannelHandlerContext ctx,ByteBuf in) throws Exception{
        ByteBuf frame = (ByteBuf) super.decode(ctx,in);
        if(frame == null){//调用父类LengthFieldBasedFrameDecoder解码之后，返回的是整包消息或者为null，直接返回继续由I/O线程读取后面的码流
            return null;
        }
        NettyMessage message = new NettyMessage();
        Header header = new Header();
        header.setCrcCode(in.readInt());
        header.setLength(in.readInt());
        header.setSessionID(in.readLong());
        header.setType(in.readByte());
        header.setPriority(in.readByte());

        int size = in.readInt();
        if(size &gt; 0){
            Map&lt;String,Object&gt; attch = new HashMap&lt;String,Object&gt;(size);
            int keySize = 0;
            byte[] keyArray = null;
            String key = null;
            for(int i=0;i&lt;size;i++){
                keySize = in.readInt();
                keyArray = new byte[keySize];
                in.readBytes(keyArray);
                key = new String(keyArray,&quot;UTF-8&quot;);
                attch.put(key,marshallingDecoder.decode(in));
            } 
            keyArray = null;
            key = null;
            header.setAttachment(attch);
        }
        if(in.readableBytes()&gt;4){
            message.setBody(marshallingDecoder.decode(in));
        }
        message.setHeader(header);
        return message;
    }
}
public class MarshallingDecoder{
    private final Unmarshaller unmarshaller;
    public MarshallingDecoder() throws IOException{
        unmarshaller = MarshallingCodecFactory.buildUnMarshalling();
    }

    protected Object decode(ByteBuf in) throws Exception{
        int objectSize = in.readInt();
        ByteBuf buf = in.slice(in.readerIndex(),objectSize);
        ByteInput input = new ChannelBufferByteInput(buf);
        try{
            unmarshaller.start(input);
            Object obj = unmarshaller.readObject();
            umarshaller.finish();
            in.readerIndex(in.readerIndex()+objectSize);
            return obj;
        }finally{
            unmarshaller.close();
        }
    }
}
public class LoginAuthReqHandler extends ChannelHandlerAdapter{
    public void channelActive(ChannelHandlerContext ctx) throws Exception{
        ctx.wirteAndFlush(buildLoginReq());
    }
    public void channelRead(ChannelHandlerContext ctx,Object msg)throws Exception{
        NettyMessage message = (NettyMessage) msg;
        if(message.getHeader()!=null &amp;&amp; message.getHeader().getType() == MessaagType.LOGIN_RESP.value()){
            byte loginResult = (byte) message.getBody();
            if(loginResult != (byte)0){
                ctx.close();
            }else{
                System.out.println(&quot;Login is ok：&quot; + message);
                ctx.fireChannelRead(msg);
            }
        }else{
            ctx.fireChannelRead(msg);
        }
    }
    private NettyMessage buildLoginReq(){
        NettyMessage message = new NettyMessage();
        Header header = new Header();
        header.setType(MessageType.LOGIN_REQ.value());
        message.setHeader(header);
        return message;
    }

    public void exceptionCaught(ChannelHandlerContext ctx,Throwable cause){
        ctx.fireExceptionCaught(cause);
    }
}
public class LoginAuthRespHandler extends channelHandlerAdapter{
    private Map&lt;String,Boolean nodeCheck&gt; = new ConcurrentHashMap&lt;String,Boolean&gt;();
    private String[] whiteList = {&quot;127.0.0.1&quot;,&quot;192.168.1.104&quot;};
    public void channelRead(ChannelHandlerContext ctx,Object msg) throws Exception{
            NettyMessage  message = (NettyMessage) msg;
            if(message.getHeader!=null &amp;&amp; message.getHeader().getType()==MessageType.LOGIN_REQ.value()){
                String nodeIndex = ctx.channel().remoteAddress().toString();
                NettyMessagType  loginResp = null;
                //重复登录，拒绝
                if(nodeCheck.containsKey(nodeIndex)){
                    loginResp = buildResponse((byte)-1);
                }else{
                    InetSocketAddress address = (InetSocketAddress) ctx.channel().remoteAddress();
                    String ip = address.getAddress().getHostAddress();
                    boolean isOK = false;
                    for(String WIP:whiteList){
                        if(WIP.equals(ip)){
                            isOK = true;
                            break;
                        }
                    }
                }
                loginResp = isOK? bulidResponse((byte)0):buildResponse((byte)-1);
                if(isOK){
                    nodeCheck.put(nodeIndex,true);
                }
                System.out.println(&quot;The login response is:&quot; + loginResp + &quot;body [&quot; + loginResp.getBody+&quot;]&quot;);
                ctx.writeAdnFlush(loginResp);
            }else{
                ctx.fireChannelread(msg);
            }
    }
    private NettyMessag buildResponse(byte result){
        NettyMessage  message = new NettyMessage();
        Header header = new Header();
        header.setType(MessageType.LOGIN_RESP.value());
        message.setHeader(header);
        message.setBody(result);
        return message;
    }
    publuc void exceptionCaught(ChannelHandlerContext ctx,Throwable cause) throws Exception{
        nodeCheck.remove(ctx.channel().remoteAddress().toString());
        ctx.close();
        ctx.fireExceptionCaught(cause);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class HeartBeatReqHandler extends ChannelHandlerAdapter{
    private volatile SchduledFuture&lt;?&gt; heartBeat;

    public void channelRead(ChannelHandlerContext ctx,Object msg)throws Exception{
        NettyMessage message = (NettyMessage) msg;
        if(message.getHeader()!=null &amp;&amp; message.getHeader().getType == MessageType.LOGIN_RESP.value()){
            hearBeat = ctx.executor().scheduleAtFixedRate(new HeartBeatReqHandler.HearBeatTask(ctx,0,5000,TimeUnit.MILLISECONDS));

        }else if(message.getHeader()!=null &amp;&amp; message.getHeader().getType == MessageType.HEARTBEAT_RESP.value()){
            Sytem.out.println(&quot;Client receive server heart beat message:--&gt;&quot; + message);
           
        }else{
             ctx.fireChannelRead(msg);
        }
        
    }
    private class HearBeatTask implements Runnable{
        private final ChannelHandlerContext ctx;
        public HearBeatTask(final ChannelHanderContext ctx){
            this.ctx = ctx;
        }
        @Override
        public void run(){
            NettyMessag heatBeat = buildHeatBeat();
            System.out.println(&quot;client send heart beat message to server :---&gt;&quot;+heatBeat);
        }
    }
    private NettyMessag buildHeatBeat(){
        NettyMessage message = new NettyMessage();
        header header = new Header();
        header.setType(MessageType.HEARTBEAT_REQ.value());
        message.setHeader(header);
        return message;
    }
    @Override
    public void exceptionCaught(ChannelHanderContext ctx,Throwable cause) throws Exception{
        if(heartBeat !=null){
            heartBeat.cancel(true);
            heartBeat = null;
        }
        ctx.fireExceptionCaught(cause);
    }
}
public class HeartBeatRespHandler extends ChannelHandlerAdapter{
    public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception{
        NettyMessag message = (NettyMessage) msg;
        if(messag.getHeader()!=null &amp;&amp; message.getHeader().getType()==MesaageType.HEARTBEAT_REQ.value()){
            Sytem.out.println(&quot;Receive client heart beat message :---&gt;&quot; +message);
            NettyMessage  hearBeat = buildHeatBeat();
            System.out.println(&quot;send heart beat response message to client:---&gt;&quot; + heartBeat);
            ctx.writeAndFlush(heartBeat;
        }else{
            ctx.fireChannelRead(msg);
        }
    }
    private NettyMessage buildHeatBeat(){
        NettyMessage  message = new NettyMessage();
        Header header = new Header();
        header.setType(MessageType.HEARBEAT_RESP.value());
        message.setHeader(header);
        return message;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class NettyClient{

    private ScheduledExecutorService executor = Executors.newScheduledThreadPool(1);l

    EventLoopGroup group = new NioEventLoopGroup();

    public void run(final int portl) throws Exception{
        
        try {
            Bootstrap b = new Bootstrap();
            b .group(group)
                    .channel(NioSocketChannel.class)
                    .option(ChannelOption.TCP_NODELAY,true)
                    .handler(new ChannelInitializer&lt;SocketChannel&gt;(){
                        @Ovrride
                        public void initChannel(SocketChannel ch) throws Exception{
                            ch.pipeline().addLast(new NettyMessageDecoder(1024 * 1024,4,4));
                            ch.pipeline().addLast(&quot;MessageEncoder&quot;,new NettyMessageEncoder());
                            ch.pipeline().addLast(&quot;readTimeoutHandler&quot;,new ReaderTimeoutHandler(50));
                            ch.pipeline().addLast(&quot;LoginAuthHandler&quot;,new LoginAuthReqHandler());
                            ch.pipeline().addLast(&quot;HeartBeatHandler&quot;,new HeartBeatReqHandler());
                        }
                    });
            //发起异步连接操作
            ChannelFuture future = b.connect(new InetSocketAddress(host,port),new InetSocketAddress(NettyConstant.LOCLIP,NettyConstant.LOCAL_PORT)).sync();
            future.channel.closeFuture().sync();l
        }finally {
            executor.executor(new Runnable(){
                @Overrider
                public void run(){
                    try{
                        TimeUnit.SECONDS.sleep(5);
                        try{
                            connect(NettyConstant.PORT,NettyConstant.REMOTEIP);
                        }catch(Exception e){
                            e.printStatckTrace();
                        }
                    }catch(InterrrupetedException e){
                        e.printStatckTrace();
                    }
                }    
            }
        }
    }

    public static void main(String[] args) throws Exception {
        new NettyClient().conect(NettyConstant.PORT,NettyConstan.PEMOTEIP);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class NettyServer{
    public void bind() throws Exception{
        EventLoopGroup boosGroup = new NioEventLoopGroup();
        EventLoopGroup workerGroup = new NioEventLoopGroup();
        try {
            ServerBootstrap serverBootstrap = new ServerBootstrap();
            serverBootstrap.group(boosGroup,workerGroup)
                    .channel(NioServerSocketChannel.class)
                    .option(ChannelOption.SO_BACKLOG,100)
                    .handler(new LoggingHandler(LogLevel.INFO))
                    .childHandler(new ChannelInitalizer&lt;SocketChannel&gt;(){
                        @Override
                        public void initChannel(SocketChannel ch) throws Exception{
                            ch.pipeline().addLast(new NettyMessageEncoder());
                            ch.pipeline().addLast(&quot;readTimeoutHandler&quot;,new ReadTimeoutHandler(50));
                            ch.pipeline().addLast(new LoginAuthRespHandler());
                            ch.pipeline().addLast(&quot;HeartBeatHandler&quot;,new HeartBeatRespHandler());
                        }
                    });
                    b.bind(NettyConstant.REMOTEIP,NettyConstant.PORT).sync();
           Sytem.out.println(&quot;Netty Server start ok：&quot; + (NettyConstant.REMOTEIP) +&quot;:&quot; + (NettyConstan.PORT));
        }finally {
            boosGroup.shutdownGracefully();
            workerGroup.shutdownGracefully();
        }
    }

    public static void main(String[] args) throws Exception {
        new NettyServer().bind();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>ByteBuf <ul><li>java.nio.Buffer，7种基础类型（Boolean除外）都有自己的缓冲区实现。主要使用的是ByteBuffer，但有以下缺点 <ul><li>ByteBuffer长度固定，一旦分配完成，它的容量不能动态扩展和收缩，当需要编码的POJO对象大于ByteBuffer的容量时，会发生索引越界异常</li><li>ByteBuffer只有一个标识位置的指针position，读写的时候需要手工调用flip()和rewind()等，使用者必须小心谨慎地处理API，否则很容易导致程序处理失败</li><li>ByteBuffer的API功能有限，一些高级和使用的特性它不支持，需要使用者自己编程实现</li><li>ByteBuffer由于只有一个位置指针用于处理读写操作，因此每次读写的时候都需要额外调用filp()和clear()等方法，否则功能将出错</li></ul></li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>ByteBuffer buffer = ByteBuffer.allocate(88);
String value = &quot;Netty权威指南&quot;;
buffer.put(value.getBytes());
buffer.flip();
byte[] vArray = new byte[buffer.remaining()];
buffer.get(vArray);
String decodeValue = new String(vArray);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>ByteBuf的工作原理 <ul><li>ByteBuf依然是Byte数组的缓冲区，基本功能与JDK的ByteBuffer一样 <ul><li>7种java基础类型、byte数组、ByteBuffer等的读写</li><li>缓冲区的自身copy和slice等</li><li>设置网络字节序</li><li>构造缓冲实例</li><li>操作位置指针等方法</li></ul></li><li>ByteBuf通过两个位置指针来协助缓冲区的读写操作，读操作使用readerIndex，写操作使用writerIndex，readerIndex和writerIndex的取值一开始都是0，随着数据的写入writerIndex会增加，读取数据会使readerIndex增加，但它不会超过writerIndex。在读取之后，0-readerIndex的就被视为discard的，调用discardReadBytes方法，可以释放这部分空间，它的作用类似ByteBuffer的compact方法，ReaderIndex和writerIndex之间的数据是可读取的，等价于ByteBuffer position和limit之间的数据。WriterIndex和capacity之间的空间是可写的，等价于ByteBuffer limit和capacity之间的可用空间</li><li>由于写操作不修改readerIndex指针，读操作不修改writerIndex指针，因此读写之间不再需要调整位置指针，这极大地简化了缓冲区的读写操作，避免了由于遗漏或者不熟悉flip()操作导致的功能异常</li><li>通常情况下， 对ByteBuffer进行put操作的时候，如果缓冲区剩余可写空间不够，就会发生BufferOverflowException异常，为了避免发生这个问题，通常在进行put操作的时候会对剩余可用空间进行校验，如果剩余空间不足，需要重新创建一个新的ByteBuffer,并将之前的ByteBuffer复制到新创建的ByteBuffer中，最后释放老的ByteBuffer,为了防止ByteBuffer溢出，每进行一次put操作，都需要对可用空间进行校验，导致了代码冗余，稍有不慎，可能引入其他问题，为了解决这个问题，ByteBuf对write操作进行了封装，由ByteBuf的write操作进行剩余空间的校验，如果可用缓冲区不足，ByteBuf会自动进行动态扩展，对于使用者而言， 不需要关心底层的校验和扩展姐，只要不通过设置的最大缓冲区容量即可,通过源码分析，当进行write操作时会对需要的write的字节进行校验，如果可写的字节数小于需要写入的字节数，并且需要写入的字节数小于可写的最大字节数时，对缓冲区进行动态扩展。无论缓冲区是否进行了动态扩展，从功能角度看使用者并不感知，简化上层应用</li><li>由于NIO的Channel读写的参数都是ByteBuffer，因此Netty的ByteBuf接口必须提供API方便的将ByteBuf转换成ByteBuffer，或者将ByteBuffer包装成ByteBuf。考虑到性能，应该尽量避免缓冲区的复制，内部实现可以考虑聚合一个ByteBuffer的私有指针来代表ByteBuffer。</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>if(this.buffer.remaining()&lt;needSize){
    int toBeExtSize = needSize &gt;128?needSize:128;
    ByteBuffer tmpBuffer = ByteBuffer.alloccate(this.buffer.capactity() + toBeExtSize);
    this.buffer.filp();
    tmpBuffer.put(this.buffer);
    this.buffer = tmpBuffer;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@Override
public ByteBuf writeByte(int value) {
    ensureWritable(1);
    setByte(writerIndex++, value);
    return this;
}
@Override
public ByteBuf ensureWriteable(int minWritableBytes){
    if (minWritableBytes &lt; 0) {
        throw new IllegalArgumentException(String.format(
                &quot;minWritableBytes: %d (expected: &gt;= 0)&quot;, minWritableBytes));
    }

    if (minWritableBytes &lt;= writableBytes()) {
        return this;
    }

    if (minWritableBytes &gt; maxCapacity - writerIndex) {
        throw new IndexOutOfBoundsException(String.format(
                &quot;writerIndex(%d) + minWritableBytes(%d) exceeds maxCapacity(%d): %s&quot;,
                writerIndex, minWritableBytes, maxCapacity, this));
    }

    // Normalize the current capacity to the power of 2.
    int newCapacity = calculateNewCapacity(writerIndex + minWritableBytes);

    // Adjust to the new capacity.
    capacity(newCapacity);
    return this;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>ByteBuf的功能介绍 <ul><li>顺序读操作</li><li>顺序写操作</li><li>readerIndex用于表示读取索引，writerIndex表示写入索引，两个指针将ByteBuf缓冲区分隔成三个区域。调用ByteBuf的read操作时，从readerIndex处开始读取。readerIndex到writerIndex之间的空间为可读的字节缓冲区；从writerIndex到capacity之间为可写的字节缓冲区，0到readerIndex之间是已经读取过的缓冲区，可以调用discardReadBytes操作来重用这部分空间，以节约内存，防止ByteBuf动态扩张。这在私有云协议栈消息解码的时候非常有用，因为TCP底层可能粘包，几百个整包消息被TCP粘包后作为一个整包发送，通过discardReadBytes操作可以重用之前已经解码过的缓冲区，这样就可以防止接收缓冲区因为容量不足导致的扩张。但是discardReadBytes不能滥用</li><li>discardable bytes 缓冲区的分配和释放是个耗时的操作，尽量重用。由于缓冲区的动态扩张需要进行字节数组的复制。是个耗时的操作，因此，为了最大程度地提升性能，往往需要尽最大努力提升缓冲区的重用率</li><li>假如缓冲区包含了N个整包消息，每个消息的长度为L，消息的可写字节数为R。当读取M个整包消息后，如果不对ByteBuf做压缩或者discardReadBytes操作，则可以写的缓冲区航都依然为R。如果调用discardReadBytes操作，则可写字节数会变为R = R +MxL，之前已经服务的M个整包的空间会被重用，假如此时ByteBuf需要写入R+1个字节，则不需要动态扩张ByteBuf。调用discardReadBytes会发生字节数组的内存复制，频繁调用将会导致性能下降，因此应该确认是否牺牲性能换取更多可用内存</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    @Override
    public ByteBuf discardReadBytes() {
        ensureAccessible();
        if (readerIndex == 0) {
            return this;
        }

        if (readerIndex != writerIndex) {
            setBytes(0, this, readerIndex, writerIndex - readerIndex);
            writerIndex -= readerIndex;
            adjustMarkers(readerIndex);
            readerIndex = 0;
        } else {
            adjustMarkers(readerIndex);
            writerIndex = readerIndex = 0;
        }
        return this;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>- Readable bytes和write bytes
  - 可读空间段是数据实际存储区域，以read或者skip开头的任何操作将会从readerIndex开始读取或者跳过指定的数据，操作完成之后readerIndex增加了读取或者跳过的字节数长度。如果读取的字节数长度大于实际可读的字节数，则抛出IndexOutOfBoundsException，当新分配、包装或者复制一个新的ByteBuf对象时，他的readerIndex为0
  - 可写空间段尚未被使用可填充的空闲空间，任何以write开头的操作都会从writerIndex开始向空闲空间写入字节，操作完成后writerIndex增加了写入字节数长度。如果写入的字节数大于可写的字节数，则会抛出IndexOutOfBoundsException异常。新分配一个ByteBuf对象时，它的readerIndex为0。通过包装或复制的方式创建一个新的ByteBuf对象时，它的writerInde是ByteBuf的容量
- clear操作
  - clear操作并不会清空缓冲区内容本身，例如填充为NUl(0x00)。他主要用来操作位置指针例如position、limit、mark。对于ByteBuf，它也是用来操作readerIndex和writerIndex，将它们还原为初始分配值 （0=readerIndex=writerIndex《=capacity）
- Mark和Rest
  - 当对缓冲区进行读操作时，由于某种原因，可能需要对之前的操作进行回滚。读操作并不会改变缓冲区的内容，回滚操作主要是重新设置索引信息。对于JDK的ByteBuffer，调用mark操作会将当前的位置指针备份到mark变量中，当调用rest操作之后，重新将指针的当前位置恢复为备份在mark中的值。netty的ByteBuf也有类似的rest和mark接口，因为ByteBuf有读索引和写索引，有四个方法
    - markReaderIndex：将当前的readerIndex备份到markedReaderIndex中
    - resetReaderIndex：将当前readerIndex设置为markedReaderIndex
    - markWriterIndex：将当前的writerIndex备份到markedWriterIndex
    - resetWriterIndex：将当前的writerIndex设置为markedWriterIndex
- 查找操作
  - 要从ByteBuf中查找某个字符
    - indexOf(int fromIndex,int toIndex,byte value);从当前ByteBuf中定位出首次出现value的位置，起始索引为fromIndex,重点是toIndex，如果没有查找到则返回-1，否则返回第一条满足条件的位置索引
    - bytesBefore(byte value):从当前ByteBuf中定位出首次出现value的位置，起始索引为readerIndex，重点是writerIndex，如果没有查找到则返回-1，否则返回第一条满足搜索条件的位置索引。该方法不会修改readerIndex和writerIndex
    - bytesBefore(int length,byte value);从当前ByteBuf中定位首次出现value的位置，起始索引为readerIndex，终点是readerIndex+length，如果没有查找到则返回-1，否则返回第一条满足搜索条件的位置索引。如果length大于当前字节缓冲区的可读字节书，则抛出IndexOutBoundsException异常
    - bytesBefore(int index,int length,byte value) 从当前ByteBuf中定位出首次出现value的位置，起始索引为index，终点是index+length，如果没有查找到则返回-1，否则返回第一条满足搜索条件的位置索引。如果length大于当前字节缓冲区的可读字节数，则抛出IndexOutOfBoundsException异常
    - forEachByte(ByteBufProcessor processor)遍历当前ByteBuf的可读字节数组，与ByteBufProcessor设置的查找条件进行对比，如果满足条件，则返回位置索引，否则返回-1
    - forEachByteDesc(ByteBufProcessor processor)遍历当前ByteBuf的可读字节数组，与ByteBufProcessor设置的查找条件进行对比，如果满足条件，则返回位置索引，否则返回-1，注意对字节数组进行迭代的时候采用逆序的方式，也就是从writerIndex-1开始迭代，知道readerIndex
    - forEachByteDesc(int index,int length,ByteBufProcessor processor)以index为起始位置，index+length为终止位置进行遍历，与ByteBufProcessor设置的查找条件进行对比，如果满足条件，则返回位置索引，否则返回-1，采用逆序查找的方式从index+length-1开始，直到index
    - Netty为了减少业务的重复定义，在ByeBufProcessor接口中对常用的查找自己进行了抽象
      - FIND_NUL：NUL(0x00)
      - FIND_CR:CR(&#39;\\r&#39;)
      - FIND_LF:LF(&#39;\\n&#39;)
      - FIND_CRLF:CR(&#39;\\r&#39;)或者LF(&#39;\\n&#39;)
      - FIND_LINEAR_WHITESPACE: &#39; &#39;或者&#39;\\t&#39;
      - 使用者也可以自定义查找规则，实现接口即可
        - boolean process(byte value) throws Exception;
  - Derived buffers
    - 类似数据库视图，ByteBuf提供多个接口用于创建某个ByteBuf的视图或者复制ByteBuf
      - duplicate:返回当前ByteBuf的复制对象，复制后返回的ByteBuf与操作的ByteBuf共享缓冲区内容，但是维护自己独立的读写索引。当修改复制后的ByteBuf内容后，之前原ByteBuf的内容也随之改变，双方持有的是同一个内容的指针引用
      - copy复制一个新的ByteBuf对象，他的内容和索引都是独立的，复制操作本身并不修改元ByteBuf的读写索引
      - copy(int index,int length)从指定的索引开始复制，复制的字节长度为length，复制后的ByteBuf内容和读写索引都与之前的独立
      - slice返回当前ByteBuf的可读子缓冲区，起始位置从readerIndex到writerIndex，返回后的ByteBuf与原ByteBuf共享内容，但是读写索引独立维护。该操作并不修改原ByteBuf的readerIndex和writerIndex
      - slice(int index,int length)返回当前ByteBuf的可读子缓冲区，起始位置从index到index+length，返回后的ByteBuf与元ByteBuf共享内容，但是读写索引独立维护。该操作并不修改原ByteBuf的readerIndex和writerIndex
- 转换成标准的ByteBuffer
  - 通过NIO的SocketChannel进行网络读写时，操作的对象是JDK标准的java.io.ByteBuffer没有与Netty统一使用ByteBuf替代JDK原生的java.nio.ByteBuffer,所以必须从接口层面支持两者的转换
    - ByteBuffer nioBuffer() 将当前ByteBuf可读的缓冲区转换成ByteBuffer，两者共享同一个缓冲区内容引用，对ByteBuffer的读写操作并不会修改原ByteBuf的读写索引，返回后的ByteBuffer无法感知原ByteBuf的动态扩展操作
    - ByteBuffer nioBuffer(int index, int length)将当前ByteBuf从index开始长度为length的缓冲区转换成ByteBuffer，两者贡献沟通一个缓冲区内容引用，对ByteBuffer的读写操作并不会修改原ByteBuf的读写索引，返回后的ByteBuffer无法感知原ByteBuf的动态扩展操作
- 随机读写（set和get）
  -  无论是get还是set操作，ByteBuf都会对其索引和长度进行合法新校验，与顺序读写一直，但是set操作和write操作不同的是它不支持动态扩展缓冲区，使用者必须保障当前的缓冲区可写的字节数大于需要写入的字节长度，否则会抛出数组或者缓冲器越界异常
</code></pre><ul><li>从内存分配的角度看，ByteBuf可以分为两类 <ul><li>堆内存（HeapByteBuf）字节缓冲区：内存分配合回收速度快，可以被JVM自动回收，缺点是如果进行Socket的I/O读写，需要额外做一次内存复制，讲堆内存对应的缓冲区复制到内核Channel中，性能会有一定程度的下降</li><li>直接内存（DirectByteBuf）字节缓冲区：非堆内存，在堆外进行内存分配，分配和回收速度慢一些，但是将它写入或者从Socket Channel中读取时，由于少了内存复制速度比堆内存快</li><li>ByteBuf的最佳实践是在I/O通信线程的读写缓冲区使用DirectByteBuf，后端业务消息的编解码模块使用HeapByteBuf，这样的组合可以达到性能最优</li></ul></li><li>从内存回收角度看，ByteBuf可以分为两类，基于对象池的ByteBuf和普通ByteBuf，主要区别是基于对象池的ByteBuf可以重用ByteBuf对象，自己维护了一个内存池，可以循环利用创建的ByteBuf，提升内存的使用效率，降低由于高负载导致的频繁GC。测试赛表明使用内存池后的Netty在高负载、大并发的冲击下内存和GC更加平稳</li><li>AbstactByteBuf源码分析</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    static final ResourceLeakDetector&lt;ByteBuf&gt; leakDetector = new ResourceLeakDetector&lt;ByteBuf&gt;(ByteBuf.class);//用于检测对象是否泄漏

    int readerIndex;
    private int writerIndex;
    private int markedReaderIndex;
    private int markedWriterIndex;

    private int maxCapacity;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>读操作</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    public ByteBuf readBytes(byte[] dst, int dstIndex, int length) {
        checkReadableBytes(length);
        getBytes(readerIndex, dst, dstIndex, length);
        readerIndex += length;
        return this;
    }
    protected final void checkReadableBytes(int minimumReadableBytes) {
        ensureAccessible();
        if (minimumReadableBytes &lt; 0) {
            throw new IllegalArgumentException(&quot;minimumReadableBytes: &quot; + minimumReadableBytes + &quot; (expected: &gt;= 0)&quot;);
        }
        if (readerIndex &gt; writerIndex - minimumReadableBytes) {
            throw new IndexOutOfBoundsException(String.format(
                    &quot;readerIndex(%d) + length(%d) exceeds writerIndex(%d): %s&quot;,
                    readerIndex, minimumReadableBytes, writerIndex, this));
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>写操作 <ul><li>Netty的ByteBuffer可以动态扩展，为了保证安全性，允许使用者指定最大的容量，在容量范围内，可以先分配个较小的初始容量，后面不够用再动态扩展，这样可以达到功能和性能的最优组合</li><li>采用先倍增后步进算法的原因如下，如果以minNewCapacity作为目标容量，则本次扩容后的可写字节数刚好够本次写入使用。写入完成后，它的可写字节数会变为0，下次做写入操作的时候，需要再次动态扩张。这样就会形成一次动态扩张后，每次写入操作都会进行动态扩张，由于动态扩张需要进行内存复制，频繁的内存复制会导致性能下降</li><li>采用先倍增后步进的原因如下，在内存比较小的情况，倍增操作并不会带来太多的内存朗威，这样的内存扩张方式对于大多数应用系统是可以接受的，但是当内存增长到一定阈值后，再进行倍增就可能带来额外的内存浪费，由于每个客户端连接都可能维护自己独立的接收和发送缓冲区，这样随着客户读的线性增长，内存浪费也会成比例增加，因此，达到某个阈值后就需要以步进的方式对内存进行平滑地扩张</li><li>这个阈值是个经验值，不同的应用场景，这个值可能不同，此处，ByteBuf取值为4M</li><li>重新计算完动态扩张后的目标容量后，需要重新创建个新的缓冲区，将原缓冲区的内容复制到新创建的ByteBuf中，最后设置读写索引和mark标签等，由于不同的子类会对应不同的复制操作，所以方法依然是个抽象方法，由子类负责实现</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    @Override
    public ByteBuf writeBytes(ByteBuf src, int srcIndex, int length) {
        ensureWritable(length);
        setBytes(writerIndex, src, srcIndex, length);
        writerIndex += length;
        return this;
    }
    @Override
    public int ensureWritable(int minWritableBytes, boolean force) {
        if (minWritableBytes &lt; 0) {
            throw new IllegalArgumentException(String.format(
                    &quot;minWritableBytes: %d (expected: &gt;= 0)&quot;, minWritableBytes));
        }

        if (minWritableBytes &lt;= writableBytes()) {
            return 0;
        }

        if (minWritableBytes &gt; maxCapacity - writerIndex) {
            if (force) {
                if (capacity() == maxCapacity()) {
                    return 1;
                }

                capacity(maxCapacity());
                return 3;
            }
        }

        // Normalize the current capacity to the power of 2.
        int newCapacity = calculateNewCapacity(writerIndex + minWritableBytes);

        // Adjust to the new capacity.
        capacity(newCapacity);
        return 2;
    }
    private int calculateNewCapacity(int minNewCapacity) {
        final int maxCapacity = this.maxCapacity;
        final int threshold = 1048576 * 4; // 4 MiB page 先设置门限阈值为4M

        if (minNewCapacity == threshold) {//当需要的新容量正好等于门限阈值，则使用阈值作为新的缓冲区容量
            return threshold;
        }

        // If over threshold, do not double but just increase by threshold.
        if (minNewCapacity &gt; threshold) {//新申请的内存空间大于阈值，不能采用倍增的方式（防止内存膨胀和浪费）
            int newCapacity = minNewCapacity / threshold * threshold;//采用每次步进4M的方式进行内存扩张
            if (newCapacity &gt; maxCapacity - threshold) {//扩张内存大于缓冲区最大长度，则使用maxCapacity作为扩容后的缓冲区容量
                newCapacity = maxCapacity;
            } else {
                newCapacity += threshold;
            }
            return newCapacity;
        }

        // Not over threshold. Double up to 4 MiB, starting from 64.
        int newCapacity = 64;
        while (newCapacity &lt; minNewCapacity) {//如果扩容后的心容量小于阈值，则以64位计数进行倍增，直到倍增后的效果大于或等于需要的容量值
            newCapacity &lt;&lt;= 1;
        }

        return Math.min(newCapacity, maxCapacity);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>重用缓冲区</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    @Override
    public ByteBuf discardReadBytes() {
        ensureAccessible();
        if (readerIndex == 0) {
            return this;
        }

        if (readerIndex != writerIndex) {
            setBytes(0, this, readerIndex, writerIndex - readerIndex);
            writerIndex -= readerIndex;
            adjustMarkers(readerIndex);
            readerIndex = 0;
        } else {
            adjustMarkers(readerIndex);
            writerIndex = readerIndex = 0;
        }
        return this;
    }
    protected final void adjustMarkers(int decrement) {
        int markedReaderIndex = this.markedReaderIndex;
        if (markedReaderIndex &lt;= decrement) {
            this.markedReaderIndex = 0;
            int markedWriterIndex = this.markedWriterIndex;
            if (markedWriterIndex &lt;= decrement) {
                this.markedWriterIndex = 0;
            } else {
                this.markedWriterIndex = markedWriterIndex - decrement;
            }
        } else {
            this.markedReaderIndex = markedReaderIndex - decrement;
            markedWriterIndex -= decrement;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>skipBytes <ul><li>在解码的时候，有时候需要丢弃非法的数据包，或者跳跃过不需要读取的字节或字节数组。此时调用skipBytes方法非常方便，它可以忽略指定长度的字节数组，读操作时直接跳过这些数据读取后面的可读缓冲区</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@Override
    public ByteBuf skipBytes(int length) {
        checkReadableBytes(length);

        int newReaderIndex = readerIndex + length;
        if (newReaderIndex &gt; writerIndex) {
            throw new IndexOutOfBoundsException(String.format(
                    &quot;length: %d (expected: readerIndex(%d) + length &lt;= writerIndex(%d))&quot;,
                    length, readerIndex, writerIndex));
        }
        readerIndex = newReaderIndex;
        return this;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>AbstractReferenceCountedByteBuf源码分析 <ul><li>主要对引用进行计数，类似于JVM内存回收的对象引用计数器，用于根据跟踪对象的分配和销毁，做自动内存回收</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    private static final AtomicIntegerFieldUpdater&lt;AbstractReferenceCountedByteBuf&gt; refCntUpdater =
            AtomicIntegerFieldUpdater.newUpdater(AbstractReferenceCountedByteBuf.class, &quot;refCnt&quot;);

    private static final long REFCNT_FIELD_OFFSET;//用于表示refCnt字段在AbstractReferenceCountedByteBuf中的内存地址，该地址的获取是JDK实现强相关的，如果使用SUN的JDK，它通过sun.misc.Unsafe的objecttFieldOffset接口来获得，ByteBuf的实现子类UnpooledUnsafeDirectByteBuf和PooledUnsafeDirectByteBuf会使用到这个偏移量

    static {
        long refCntFieldOffset = -1;
        try {
            if (PlatformDependent.hasUnsafe()) {
                refCntFieldOffset = PlatformDependent.objectFieldOffset(
                        AbstractReferenceCountedByteBuf.class.getDeclaredField(&quot;refCnt&quot;));
            }
        } catch (Throwable t) {
            // Ignored
        }

        REFCNT_FIELD_OFFSET = refCntFieldOffset;
    }
    private volatile int refCnt = 1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>对象引用计数器 <ul><li>每调用一次retain方法，引用计数器就会加以，由于可能存在多线程并发调用的场景，所以它的累加操作必须是线程安全的</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    @Override
    public ByteBuf retain() {
        for (;;) {
            int refCnt = this.refCnt;
            if (refCnt == 0) {//如果为0，说明对象被以外，错误地引用，抛出异常
                throw new IllegalReferenceCountException(0, 1);
            }
            if (refCnt == Integer.MAX_VALUE) {如果达到整形最大值，排除引用越界异常
                throw new IllegalReferenceCountException(Integer.MAX_VALUE, 1);
            }
            if (refCntUpdater.compareAndSet(this, refCnt, refCnt + 1)) {
                break;
            }
        }
        return this;
    }
    @Override
    public final boolean release() {
        for (;;) {
            int refCnt = this.refCnt;
            if (refCnt == 0) {
                throw new IllegalReferenceCountException(0, -1);
            }

            if (refCntUpdater.compareAndSet(this, refCnt, refCnt - 1)) {
                if (refCnt == 1) {//申请和释放相等，说明对象不可达，改对象需要被释放和垃圾回收掉
                    deallocate();
                    return true;
                }
                return false;
            }
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>UnpooledHeapByteBuf源码分析 <ul><li>UnpooledHeapByteBuf基于堆内存进行内存分配的字节缓冲区，没有基于对象池实现，意味着每次I/O读写都会创建一个新的UnpooledHeapByteBuf，频繁进行大块内存的分配和回收对性能会造成一定影响，但相比于堆外内存的申请和释放，它的成本低一些</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class UnpooledHeapByteBuf extends AbstractReferenceCountedByteBuf {

    private final ByteBufAllocator alloc;
    private byte[] array;
    private ByteBuffer tmpNioBuf;//用于实现NettByteBuf到NIOByteBuffer的转换
    @Override
    public ByteBuf capacity(int newCapacity) {
        ensureAccessible();
        if (newCapacity &lt; 0 || newCapacity &gt; maxCapacity()) {
            throw new IllegalArgumentException(&quot;newCapacity: &quot; + newCapacity);
        }

        int oldCapacity = array.length;
        if (newCapacity &gt; oldCapacity) {
            byte[] newArray = new byte[newCapacity];
            System.arraycopy(array, 0, newArray, 0, array.length);
            setArray(newArray);
        } else if (newCapacity &lt; oldCapacity) {
            byte[] newArray = new byte[newCapacity];
            int readerIndex = readerIndex();
            if (readerIndex &lt; newCapacity) {
                int writerIndex = writerIndex();
                if (writerIndex &gt; newCapacity) {
                    writerIndex(writerIndex = newCapacity);
                }
                System.arraycopy(array, readerIndex, newArray, readerIndex, writerIndex - readerIndex);//内存复制，将将就得字节数组复制到新创建的字节数组中
            } else {
                setIndex(newCapacity, newCapacity);
            }
            setArray(newArray);
        }
        return this;
    }
    private void setArray(byte[] initialArray) {
        array = initialArray;
        tmpNioBuf = null;
    }
    //字节数组的复制
    @Override
    public ByteBuf setBytes(int index, byte[] src, int srcIndex, int length) {
        checkSrcIndex(index, length, srcIndex, src.length);
        System.arraycopy(src, srcIndex, array, index, length);
        return this;
    }
    protected final void checkSrcIndex(int index, int length, int srcIndex, int srcCapacity) {
        checkIndex(index, length);
        if (srcIndex &lt; 0 || srcIndex &gt; srcCapacity - length) {
            throw new IndexOutOfBoundsException(String.format(
                    &quot;srcIndex: %d, length: %d (expected: range(0, %d))&quot;, srcIndex, length, srcCapacity));
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>转换成JDK的ByteBuffer <ul><li>ByteBuf基于byte数组实现，NIO的ByteBuffer提供了wrap方法，可以将byte数组转换成ByteBuffer对象，JDK的相关源码实现如下</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    @Override
    public ByteBuffer nioBuffer(int index, int length) {
        ensureAccessible();
        return ByteBuffer.wrap(array, index, length).slice();
    }
    public static ByteBuffer wrap(byte[] array,
                                    int offset, int length)
    {
        try {
            return new HeapByteBuffer(array, offset, length);
        } catch (IllegalArgumentException x) {
            throw new IndexOutOfBoundsException();
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>PooledByteBuf内存池原理分析 <ul><li>PoolArena：Arena本身是指一块区域，在内存管理中，Memory Arena是指内存中的一大块连续的区域，PoolArena就是Netty的内存池实现类。为了集中管理内存的分配和释放，同时提高分配和释放内存时候的性能，很多框架和应用都会预先申请一大块内存，然后通过提供相应的分配和释放接口使用内存。对内存的管理就被集中到几个类或者函数中，由于不再频繁使用系统调用来申请和释放内存，应用或者系统的性能也会大大提高。预先申请的那一大块内存就被称为Memory Arena</li><li>Netty的PoolArena是由多个Chunk组成的大块内存区域，而每个Chunk则由一个或者多个Page组成，因此，对内存的组织和管理也就集中在如何管理和组织Chunk和Page了</li><li>poolChunk:chunk主要用来组织和管理多个Page的内存分配和释放，在Netty中，Chunk中的Page被构建成一颗二叉树，那么这些Page将会被按照图所示的形式组织起来</li><li>page的大小是4个字节，Chunk的大小是64个字节，整棵树有5层，第一层也就是叶子节点所在的层用来分配所有Page的内存，第四层用来分配2个Page的内存，依次类推</li><li>每个节点都记录了自己在整个MemoryArena中的偏移地址，当一个节点代表的内存区域被分配出去后，这个节点就会被标记为已分配，滋这个节点一下的所有节点在后面的内存分配请求中都会被忽略，举例来说，当我们请求一个16字节的存储区域时，上面这个树中的第三层中的第四个节点就会被标记为已分配，表示整个MemoryArena中有16个字节被分配出去了，新分配的请求只能从剩下的三个字节及其子树中寻找合适的节点</li><li>对树的遍历采用深度优先的算法，但是在选择哪个子节点点继续遍历时则是随机的，并不像通常的深度优先算法中那样总是访问左边的子节点</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>abstract class PoolArena&lt;T&gt; {

    final PooledByteBufAllocator parent;

    private final int pageSize;
    private final int maxOrder;
    private final int pageShifts;
    private final int chunkSize;
    private final int subpageOverflowMask;

    private final PoolSubpage&lt;T&gt;[] tinySubpagePools;
    private final PoolSubpage&lt;T&gt;[] smallSubpagePools;

    private final PoolChunkList&lt;T&gt; q050;
    private final PoolChunkList&lt;T&gt; q025;
    private final PoolChunkList&lt;T&gt; q000;
    private final PoolChunkList&lt;T&gt; qInit;
    private final PoolChunkList&lt;T&gt; q075;
    private final PoolChunkList&lt;T&gt; q100;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>PoolSubpage <ul><li>对于小于一个page的内存，Netty在Page中完成分配，每个Page会被切割分成大小相等的多个存储块，存储块的带下有第一次申请的内存块大小决定。</li><li>一个Page只能用于分配与第一次申请时大小相同的内存</li><li>Page中存储区域的使用状态通过一个long数组来维护，数组中每个long的每一位表示一个存储区域的占用情况0表示未占用1表示已占用，对于一个4字节的Page来说，如果这个Page用来分配1字节的存储区域，那么long数组中就只有一个long类型的元素，这个数值额低4位用来指示各个存储区域的占用情况，对于一个128字节的Page来说，如果这个Page也是用来分配1个字节的存储区域，那么long数组就会包含2个元素总共128位，每一位代表一个区域的占用情况</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>final class PoolSubpage&lt;T&gt; {

    final PoolChunk&lt;T&gt; chunk;
    final int memoryMapIdx;
    final int runOffset;
    final int pageSize;
    final long[] bitmap;

    PoolSubpage&lt;T&gt; prev;
    PoolSubpage&lt;T&gt; next;

    boolean doNotDestroy;
    int elemSize;
    int maxNumElems;
    int nextAvail;
    int bitmapLength;
    int numAvail;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>PooledDirectByteBuf源码分析 <ul><li>PooledDirectByteBuf基于内存池实现，与UnPooledDirectByteBuf不同的是缓冲区的分配和销毁策略不同</li><li>PooledDirectByteBuf从内存池中获取对象，然后设置引用计数器的值</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    //创建字节缓冲区实例
    private static final Recycler&lt;PooledDirectByteBuf&gt; RECYCLER = new Recycler&lt;PooledDirectByteBuf&gt;() {
        @Override
        protected PooledDirectByteBuf newObject(Handle&lt;PooledDirectByteBuf&gt; handle) {
            return new PooledDirectByteBuf(handle, 0);
        }
    };
    static PooledDirectByteBuf newInstance(int maxCapacity) {
        PooledDirectByteBuf buf = RECYCLER.get();//直接从内存池中获取PooledDirectByteBuf对象，然后设置它的引用计数器为1，设置缓冲区最大容量后返回
        buf.setRefCnt(1);
        buf.maxCapacity(maxCapacity);
        return buf;
    }
    //复制新的字节缓冲区实例，如果使用者确实需要复制一个新的实例，与原来的PooledDirectByteBuf独立，则调用copy方法
    @Override
    public ByteBuf copy(int index, int length) {
        checkIndex(index, length);
        ByteBuf copy = alloc().directBuffer(length, maxCapacity());
        copy.writeBytes(this, index, length);
        return copy;
    }
    //基于内存池的缓冲区分配
    @Override
    public ByteBuf directBuffer(int initialCapacity, int maxCapacity) {
        if (initialCapacity == 0 &amp;&amp; maxCapacity == 0) {
            return emptyBuf;
        }
        validate(initialCapacity, maxCapacity);
        return newDirectBuffer(initialCapacity, maxCapacity);
    }
    @Override
    protected ByteBuf newDirectBuffer(int initialCapacity, int maxCapacity) {
        PoolThreadCache cache = threadCache.get();
        PoolArena&lt;ByteBuffer&gt; directArena = cache.directArena;

        ByteBuf buf;
        if (directArena != null) {
            buf = directArena.allocate(cache, initialCapacity, maxCapacity);
        } else {
            if (PlatformDependent.hasUnsafe()) {
                buf = new UnpooledUnsafeDirectByteBuf(this, initialCapacity, maxCapacity);
            } else {
                buf = new UnpooledDirectByteBuf(this, initialCapacity, maxCapacity);
            }
        }

        return toLeakAwareBuffer(buf);
    }
    //非内存池实现直接创建新的缓冲区
    @Override
    protected ByteBuf newDirectBuffer(int initialCapacity, int maxCapacity) {
        ByteBuf buf;
        if (PlatformDependent.hasUnsafe()) {
            buf = new UnpooledUnsafeDirectByteBuf(this, initialCapacity, maxCapacity);
        } else {
            buf = new UnpooledDirectByteBuf(this, initialCapacity, maxCapacity);
        }

        return toLeakAwareBuffer(buf);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>ByteBufHolder <ul><li>ByteBufHolder是ByteBuf的容器，包含了一个ByteBuf，另外提供了一些其他实用的方法，使用者继承ByteBufHolder接口后可以按需封装自己的实现</li><li>ByteBufAllocator字节缓冲分配器，按照缓冲区实现不同，共有两种不用的分配器，基于内存池的字节缓冲分配器PooledByteBufAllocator和普通的字节缓冲区分配器UnpooledByteBufAllocator <ul><li>ByteBuf buffer()分配一个字节缓冲区，缓冲区的类型由ByteBufAllocator的实现类决定</li><li>ByteBuf buffer(int initCapacity)分配一个初始容量为initalCapacity的字节缓冲区，缓冲区的乐西由ByteBufAllocator的实现类决定</li><li>ByteBuf buffer(int initialCapacity,int maxCapacity) 分配一个初始容量为initialCapapcoty，最大容量为maxCapacity的字节缓冲区，缓冲区的类型有ByteBufAllocator的实现类决定</li><li>ByteBuf ioBuffer(int initialCapacity,int max Capacity) 分配一个初始容量为initialCapacity，最大容量为maxCpapcity的direct buffer，因为direct buffer的IO操作性能更高</li><li>ByteBuf heapBuffer(int initialCapacity,int maxCapacity) 分配一个初始容量为initalCapcity,最大容量为maxCapacity的heap buffer</li><li>ByteBuf directBuffer(int initialCapacoty,int maxCapacity) 分配一个初始容量为initialCapacity，最大容量为maxCapacity的direct buffer</li><li>ByteBuf CompositeByteBuf compositeBuffer(int maxNumComponents)分配一个最大容量为maxCapacity的CompositeByteBuf，内存类型有ByteBufAllocator的实现类决定</li><li>boolean isDirectBufferPooled() 是否使用了直接内存内存池</li></ul></li></ul></li><li>CompositeByteBuf允许多个ByteBuf的实例组装到一起，形成一个统一的视图，有点类似于数据库将多个表的字段组装在一起统一用视图展示，解决了缓冲区有多个，但是需要统一展示和处理，必须有存放他们的统一容器</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class CompositeByteBuf extends AbstractReferenceCountedByteBuf {

    private final ResourceLeak leak;
    private final ByteBufAllocator alloc;
    private final boolean direct;
    private final List&lt;Component&gt; components = new ArrayList&lt;Component&gt;();
    private final int maxNumComponents;
    private static final ByteBuffer FULL_BYTEBUFFER = (ByteBuffer) ByteBuffer.allocate(1).position(1);

    private boolean freed;

        private final class Component {
        final ByteBuf buf;
        final int length;
        int offset;
        int endOffset;

        Component(ByteBuf buf) {
            this.buf = buf;
            length = buf.readableBytes();
        }

        void freeIfNecessary() {
            // Unwrap so that we can free slices, too.
            buf.release(); // We should not get a NPE here. If so, it must be a bug.
        }
    }
    public CompositeByteBuf addComponent(ByteBuf buffer) {
        addComponent0(components.size(), buffer);
        consolidateIfNeeded();
        return this;
    }
    public CompositeByteBuf removeComponent(int cIndex) {
        checkComponentIndex(cIndex);
        components.remove(cIndex).freeIfNecessary();
        updateComponentOffsets(cIndex);
        return this;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>ByteBufUtil <ul><li>encodeString(ByteBufAllocator alloc,CharBuffer src,Charset charset);对需要编码的字符串src按照指定的字符集charset进行编码，利用指定的ByteBufAllocator生成一个新的ByteBuf</li><li>decodeString(ByteBuffer src,Charset charset)使用指定的ByteBuffer和charset进行对ByteBuffer进行解码，获取解码后的字符串</li><li>hexDump将参数ByteBuf的内容以十六进制字符串的方式打印出来，用于输出日志或者打印码流</li></ul></li><li>Channel <ul><li>io.netty.channel.Channel是netty网络操作的抽象类，聚合了网路的读，写，客户端发起连接，主动关闭连接，链路关闭，获取通信双方的网络地址等，获取改Channel的EventLoop，获取缓冲分配器ByteBufAllocator和pipline等</li><li>为什么不使用原生的Channel <ul><li>jdk的SocketChannel和ServerSocketChannel没有统一的Channel接口供业务开发者使用，对于用户而言，没有统一的操作视图，使用起来不方便</li><li>JDK的SocketChannel和ServerSocketChannel的主要职责是网络I/O操作，由于它们是SPI类接口，由具体的虚拟机厂家来提供，所以通过继承SPI功能类来扩展其功能的难度很大；直接实现ServerSocketChannel和SocketChannel抽象类，其工作量和重新开发一个新的Channel功能类是差不多的</li><li>Netty的Channel需要能够跟Netty的整体架构融合在一起，例如I/O模型，基于ChannelPipeline的定制模型，以及基于元数据描述配置化的TCP参数等，这些JDK的SocketChannel和ServerSocketChannel都没有提供，需要重新封装</li><li>自定义的Channel，功能实现灵活</li></ul></li><li>主要设计理念 <ul><li>在Channel接口层，采用Facade模式进行统一封装，将网络I/O操作，网络I/O相关联的其它操作封装起来，统一对外提供</li><li>Channel接口的定义尽量大而全，为SocketChannel和ServerSocketChannel提供统一视图，由不同子类实现不同的宫那个，公共功能再抽象父类中实现，最大程度上实现功能和接口的重用</li><li>具体实现采用聚合而非包含的方式，将相关的功能聚合在Channel中，由Channel统一负责分配和调度</li></ul></li><li>网络I/O操作 <ul><li>channel read();从当前的Channel中读取数据到第一个inbound缓冲区中，如果数据被成功读取，除法ChannelHandler.channelRead(ChannelHandlerContext，Object)事件，读取操作API调用完成后，紧接着会触发ChannelHandlerReadComplete(ChannelContext)事件，这样业务的ChannelHandler可以决定是否需要继续读取数据，如果已经有读操作请求被挂起，则后续的读操作会被忽略</li><li>ChannelFuture write(Object msg)请求将当前msg通过CHannelPipeline写入到目标Channel中。注意write操作只是将消息存入到消息发送的环形数组中，并没有真正被发送，只有调用flush操作才会被写入到Channel中，发送给对方</li><li>ChannelFuture write(Object msg,ChannelPromise promise)功能与write(Object msg)相同，但是携带了ChannelPromise参数负责设置写入操作的结果</li><li>ChannelFuture writeAndFlush(Object msg,ChannelPromise promise)与write操作类似，但它会将消息写入到Channel中发送，等价于单独调用write和flush组合</li><li>Channel flush();将之前写入到发送环形数组中的消息全部写入到目标Channel中，发送给通信对方</li><li>ChannelFuture close(ChannelPromise promise)主动关闭当前连接，通过Channel Promise设置操作结果并进行结果通知，无论操作成与否，都可以通过ChannelPromise获取操作结果，该操作会级联触发ChannelPipeline中所有ChannelHandler的ChannelHandler.close(ChannelHanderContext,ChannelPromise)事件</li><li>ChannelFuture disconnect(ChannelPromise promise)请求断开与远程通信对端的连接并使用ChannelPromise来获取操作结果的通知消息，该方法会级联触发ChannelHandler.disconnect(ChannelHandlerContext,ChannelPromise)事件</li><li>ChannelFuture connect(SocketAddress remoteAddress)客户端使用指定的服务器地址remoteAddress发起连接请求，如果因为应答超时而失败，ChannelFuture中的操作结果就是ConnectTimeoutException异常，如果连接被拒绝，操作结果为ConnectException.该方法会级联触发ChannelHandler.connect(ChannelHandlerContext,SocketAddress,SocketAddress,ChannelPromise)等</li><li>ChannelFuture connect(SocketAddress remoteAddress,SocketAddress localAddress)。与上面的差不多，唯一不同的就是先绑定指定的本地地址localAddress，然后再连接服务端</li><li>ChannelFuture connect(SocketAddress remoteAddress,ChannelPromise promise)与上面的差不多，唯一不同的是懈怠了ChannelPromise参数用于写入操作结果</li><li>connect(SocketAddress remoteAddress,SocketAddress localAddress,ChannelPromise promise)唯一不懂就是绑定了本地地址</li><li>ChannelFuture bind(SocketAddress localAddress)绑定指定的本地Socket地址localAddress，改方法会级联触发ChannelHandler.bind(ChannelHandlerContext,SockteAddress,ChannelPromise)事件</li><li>ChannelFuture bind(SocketAddress localAddress,ChannelPromise promise)携带多了一个ChannelPromise用于写入操作结果</li><li>ChannelConfig config()获取当前Channel的配置信息</li><li>boolean isOpen()判断当前Channel是否已经打开</li><li>boolean isRegistered()判断当前Channel是否已经注册到EventLoop上</li><li>boolean isActive()判断当前Channel是否已经处于激活状态</li><li>ChannelMetadata metadata()获取当前Channel的元数据描述信息</li><li>SocketAddress localAddress() 获取当前Channel的本地绑定地址</li><li>SocketAddress remoteAddress() 获取当前Channel通信的远程Socket地址</li><li>eventLoop();Channel需要注册到EventLoop的多路复用器上，用于处理I/O事件，通过eventLoop()方法可以获取到Channel注册的EventLoop。EventLoop本质上就是处理网络读写时间的Reactor线程，在Netty中，不仅仅用来处理网络事件，也可以用来执行定时任务和用户自定义的NioTask等任务</li><li>matadata()方法，在Netty中每个Channel对应一个物理连接，每个连接都有自己的TCP参数配置。所以Channel会聚合一个ChannelMetadata用来应付TCP参数提供元数据描述信息，通过metadata()方法就可以获取当前Channel的TCP参数配置</li><li>parent()对于服务端Channel而言，他的符Channel为空，对于客户端Channel，它的符Channel就是创建它的ServerSocketChannel</li><li>id()用户获取Channel标识返回ChannelId对象，ChannelId是Channel唯一的表示，生成策略如下 <ul><li>机器的MAC地址（EUI-48或者EUI-64）等可以代表全局唯一的信息</li><li>当前进程的ID</li><li>当前系统时间的毫秒 System.currentTimeMillis()</li><li>当前系统时间纳秒数 System.nanoTime();</li><li>32位的随机整型数</li><li>32位的自增序列数</li></ul></li></ul></li></ul></li><li>Channel源码 <ul><li>AbstractChannel:Netty基于时间驱动，当Channel进行I/O操作时会产生对应的I/O时间，然后驱动时间在ChannelPipeline中传播，由对应的ChannelHandler对时间进行拦截和处理，不关心的时间可以直接忽略。采用时间驱动的方式可以非常轻松地通过事件定义来划分时间拦截切面，方便业务的定制和功能扩展，相比AOP，性能更高，但是功能基本等价</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    static final ClosedChannelException CLOSED_CHANNEL_EXCEPTION = new ClosedChannelException();//链路已经关闭已经异常
    static final NotYetConnectedException NOT_YET_CONNECTED_EXCEPTION = new NotYetConnectedException();//物理链路尚未建立异常

    static {
        CLOSED_CHANNEL_EXCEPTION.setStackTrace(EmptyArrays.EMPTY_STACK_TRACE);
        NOT_YET_CONNECTED_EXCEPTION.setStackTrace(EmptyArrays.EMPTY_STACK_TRACE);
    }
    private MessageSizeEstimator.Handle estimatorHandle;
    private final Channel parent;
    private final ChannelId id = DefaultChannelId.newInstance();
    private final Unsafe unsafe;
    private final DefaultChannelPipeline pipeline;
    @Override
    public ChannelFuture connect(SocketAddress remoteAddress) {
        return pipeline.connect(remoteAddress);
    }

    @Override
    public ChannelFuture connect(SocketAddress remoteAddress, SocketAddress localAddress) {
        return pipeline.connect(remoteAddress, localAddress);
    }

        @Override
    public SocketAddress localAddress() {
        SocketAddress localAddress = this.localAddress;
        if (localAddress == null) {
            try {
                this.localAddress = localAddress = unsafe().localAddress();
            } catch (Throwable t) {
                // Sometimes fails on a closed socket in Windows.
                return null;
            }
        }
        return localAddress;
    }
        @Override
    public SocketAddress remoteAddress() {
        SocketAddress remoteAddress = this.remoteAddress;
        if (remoteAddress == null) {
            try {
                this.remoteAddress = remoteAddress = unsafe().remoteAddress();
            } catch (Throwable t) {
                // Sometimes fails on a closed socket in Windows.
                return null;
            }
        }
        return remoteAddress;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>AbstractNioChannel源码分析 <ul><li>注册Channel的时候需要指定监听的网络操作位来表示Channel对哪几类网络事件感兴趣</li><li>int OP_READ = 1&lt;&lt; 0 读操作位</li><li>int OP_WRITE = 1&lt;&lt;2 写操作位</li><li>int OP_CONNECT = 1 &lt;&lt; 3 客户端连接服务端操作位</li><li>int OP_ACCEPT = 1 &lt;&lt; 4 服务端接收客户端连接操作位</li><li>AbstractNioChannel注册的是0，说明对任何事件都不感兴趣，仅仅完成注册操作，注册的时候可以指定附件，后续Channel接收到网络时间通知时可以从SelectionKey中重新获取之前的附件进行处理，此处将AbstractNioChannel的实现子类自身当作附件注册。如果注册成功，则返回selectionKey，通过selectionKey可以从多路复用器中获取Channel对象</li><li>如果当前注册返回的seelctionKey已经被取消，则抛出CanceledKeyException异常，捕获改异常进行处理，如果是第一次处理该异常，调用多路复用器selectNow()方法将已经取消的selectionKey从多路复用器中删除掉。操作成功之后，将selected置为ture，说明之前失效的selectionKey已经被删除掉。继续发起下一次注册操作，如果成功则退出，如果仍然发生CancelledKeyException异常，说明我们无法删除已经被取消额selectionKey，按照jdk的API说明，意外不应该发生，如果发生这种问题，说明NIO的相关类库存在不可恢复的Bug，直接抛出CancelledKeyException到上层进行统一处理</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public abstract class AbstractNioChannel extends AbstractChannel {

    private static final InternalLogger logger =
            InternalLoggerFactory.getInstance(AbstractNioChannel.class);

    private final SelectableChannel ch;//SocketChannel和ServerSocketChannel公共父类SelectableChannel
    protected final int readInterestOp;//代表jdk selectionKey的OP_READ
    private volatile SelectionKey selectionKey;//Channel注册到EventLoop后返回的选择键，由于Channel会面临多个业务线程的并发写操作，当SelectionKey由SelectionKey修改之后为了让其他业务线程感知到变化，所以需要使用volatile保证修改的可见性
    private volatile boolean inputShutdown;

    /**
     * The future of the current connection attempt.  If not null, subsequent
     * connection attempts will fail.
     */
    private ChannelPromise connectPromise;//代表连接操作结果
    private ScheduledFuture&lt;?&gt; connectTimeoutFuture;//连接超时定时器
    private SocketAddress requestedRemoteAddress;//请求的通信地址信息

        @Override
    protected void doRegister() throws Exception {
        boolean selected = false;
        for (;;) {
            try {
                selectionKey = javaChannel().register(eventLoop().selector, 0, this);
                return;
            } catch (CancelledKeyException e) {
                if (!selected) {
                    // Force the Selector to select now as the &quot;canceled&quot; SelectionKey may still be
                    // cached and not removed because no Select.select(..) operation was called yet.
                    eventLoop().selectNow();
                    selected = true;
                } else {
                    // We forced a select operation on the selector before but the SelectionKey is still cached
                    // for whatever reason. JDK bug ?
                    throw e;
                }
            }
        }
    }
    @Override
    protected void doBeginRead() throws Exception {
        if (inputShutdown) {
            return;
        }

        final SelectionKey selectionKey = this.selectionKey;
        if (!selectionKey.isValid()) {
            return;
        }

        final int interestOps = selectionKey.interestOps();
        if ((interestOps &amp; readInterestOp) == 0) {//与jdk NIO SelectionKey的相关方法实现是等价的
            selectionKey.interestOps(interestOps | readInterestOp);
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>AbstractNioByteChannel源码分析</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    @Override
    protected void doWrite(ChannelOutboundBuffer in) throws Exception {
        int writeSpinCount = -1;

        for (;;) {
            Object msg = in.current(true);
            if (msg == null) {//如果为空，说明消息发送数组中所有待发送的消息都已经发送完成，清除半包表示，然后退出循环
                // Wrote all messages.
                clearOpWrite();
                break;
            }
            
            if (msg instanceof ByteBuf) {
                ByteBuf buf = (ByteBuf) msg;
                int readableBytes = buf.readableBytes();
                if (readableBytes == 0) {//说明消息不可读，需要丢弃，从环形发送数组中删除该消息
                    in.remove();
                    continue;
                }

                boolean setOpWrite = false;//写半包标识
                boolean done = false;//消息是否全部发送表示
                long flushedAmount = 0;//发送的总消息字节数
                if (writeSpinCount == -1) {//对循环发送次数进行判断
                    writeSpinCount = config().getWriteSpinCount();//从Channel配置对象中获取循环发送次数，循环发送次数是指当前发送没有完成时（写半包），继续循环发送的次数。设置写半包最大循环次数的原因是当循环发送的时候，I/O线程会一直尝试进行写操作，此时I/O线程无法处理其他的I/O操作，例如读心的消息或者执行定时任务和NioTask等，如果网络I/O阻塞或者对方接收消息太慢，可能会导致线程假死
                }

                for (int i = writeSpinCount - 1; i &gt;= 0; i --) {
                    int localFlushedAmount = doWriteBytes(buf);//调用抽象方法进行发送
                    if (localFlushedAmount == 0) {//如果本次发送的字节数为0，说明发送TCP缓冲区已满，发生了ZERO_WINDOW。此时再次发送仍然可能出现写0字节，空循环占用CPU资源，导致I/O线程无法处理其他操作，所以将写半包标识setOpWrite设置为true，退出循环，释放I/O线程
                        setOpWrite = true;
                        break;
                    }

                    flushedAmount += localFlushedAmount;//如果发送的字节数大于0，则对发送总数进行计数，判断房钱消息是否已经发送成功（缓冲区没有可读字节），如果发送成功则设置done为true，退出循环
                    if (!buf.isReadable()) {
                        done = true;
                        break;
                    }
                }

                in.progress(flushedAmount);//消息发送操作完成之后调用ChannelOutboundBuffer更新发送进度消息，然后对发送结果进行判断，如果发送成功，则将已经发送的消息从发送数组中删除；否则调用incompelteWrite方法，设置写半包标识，启动刷新线程继续发送之前没有发送完全的半包消息（写半包）

                if (done) {
                    in.remove();
                } else {
                    incompleteWrite(setOpWrite);
                    break;
                }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    protected final void clearOpWrite() {
        final SelectionKey key = selectionKey();
        final int interestOps = key.interestOps();
        if ((interestOps &amp; SelectionKey.OP_WRITE) != 0) {//从当前SelectionKey中获取网络操作位，然后与SelectionKey.OP_WRITE做按位与，如果不等于0，说明当前SelectionKey是isWritable的，需要清除写操作操作位，就是SelectionKey.WRITE取非之后与元操作位做按位与操作，清除SelectionKey的写操作为
            key.interestOps(interestOps &amp; ~SelectionKey.OP_WRITE);
        }
    }

    protected final void incompleteWrite(boolean setOpWrite) {
        // Did not write completely.
        if (setOpWrite) {//判断是否需要设置写半包表示，如果需要则调用setOpWrite设置写半包表示
            setOpWrite();
        } else {
            // Schedule flush again later so other tasks can be picked up in the meantime
            Runnable flushTask = this.flushTask;
            //如果SelectionKey的OP_WRITE被设置，多路复用器会不断轮询对应的Channel用于处理没有发送完成的半包消息，直到清除SelectionKey的OP_WRITE操作位。因此，设置了OP_WRITE操作位后，就不需要启动独立的Runnable来负责发送半包消息了
            //如果没有设置OP_WEITE操作位，需要启动独立的Runnable，将其加入到EventLoop中执行，由Runnable负责半包消息的发送，它的实现很简单，就是地阿偶用flush()方法来发送缓冲数组中的消息
            if (flushTask == null) {
                flushTask = this.flushTask = new Runnable() {
                    @Override
                    public void run() {
                        flush();
                    }
                };
            }
            eventLoop().execute(flushTask);
        }
    }
    protected final void setOpWrite() {//设置写半包表示就是讲SelectionKey设置成可写的，通过原操作位与SelectionKey.OP_WRITE做按位或操作即可实现
        final SelectionKey key = selectionKey();
        final int interestOps = key.interestOps();
        if ((interestOps &amp; SelectionKey.OP_WRITE) == 0) {
            key.interestOps(interestOps | SelectionKey.OP_WRITE);
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>AbstractNioMessageChannel源码</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@Override
    protected void doWrite(ChannelOutboundBuffer in) throws Exception {
        final SelectionKey key = selectionKey();
        final int interestOps = key.interestOps();

        for (;;) {
            Object msg = in.current();
            if (msg == null) {//说明发送缓冲区为空，所有消息都已经被发送完成，清除写半包标识
                // Wrote all messages.
                if ((interestOps &amp; SelectionKey.OP_WRITE) != 0) {
                    key.interestOps(interestOps &amp; ~SelectionKey.OP_WRITE);
                }
                break;
            }

            boolean done = false;
            //利用writeSpinCount对单条消息进行发送
            for (int i = config().getWriteSpinCount() - 1; i &gt;= 0; i --) {
                if (doWriteMessage(msg, in)) {//判断消息是否发送成功
                    done = true;
                    break;
                }
            }

            if (done) {//如果当前的消息被完全发送出去，则将该消息从缓冲数组中删除；
                in.remove();
            } else {//否则设置半包标识，注册SelectionKey.OP_WRITE到多路复用器上，由多路复用器轮询对应的Channel重新发送尚未发送完全的半包消息
                // Did not write all messages.
                if ((interestOps &amp; SelectionKey.OP_WRITE) == 0) {
                    key.interestOps(interestOps | SelectionKey.OP_WRITE);
                }
                break;
            }
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>AbstractNioMessageServerChannel源码分析 <ul><li>每当服务端接入一个新的客户端连接NioSocketChannel时，都会调用childEventLoopGroup方法获取EventLoopGroup线程组，用于给NioSocketChannel分配Reactor线程EventLoop</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public abstract class AbstractNioMessageServerChannel extends AbstractNioMessageChannel implements ServerChannel {

    private final EventLoopGroup childGroup;//用于给新接入的客户端NioSocketChannel分配EventLoop

    protected AbstractNioMessageServerChannel(
            Channel parent, EventLoop eventLoop, EventLoopGroup childGroup, SelectableChannel ch, int readInterestOp) {
        super(parent, eventLoop, ch, readInterestOp);
        this.childGroup = childGroup;
    }

    @Override
    public EventLoopGroup childEventLoopGroup() {
        return childGroup;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>if(ch != null){
    buf.add(new NioSocketChannel(this,childEventLoopGroup().next(),ch));
    return 1;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>NioServerSocketChannel源码</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    private static final ChannelMetadata METADATA = new ChannelMetadata(false);

    private static final InternalLogger logger = InternalLoggerFactory.getInstance(NioServerSocketChannel.class);

    private static ServerSocketChannel newSocket() {
        try {
            return ServerSocketChannel.open();
        } catch (IOException e) {
            throw new ChannelException(
                    &quot;Failed to open a server socket.&quot;, e);
        }
    }

    private final ServerSocketChannelConfig config;//用于配置TCP参数

    @Override
    public boolean isActive() {
        return javaChannel().socket().isBound();
    }

    @Override
    public InetSocketAddress remoteAddress() {
        return null;
    }

    @Override
    protected ServerSocketChannel javaChannel() {
        return (ServerSocketChannel) super.javaChannel();
    }

    @Override
    protected SocketAddress localAddress0() {
        return javaChannel().socket().getLocalSocketAddress();
    }

    @Override
    protected void doBind(SocketAddress localAddress) throws Exception {
        javaChannel().socket().bind(localAddress, config.getBacklog());//可以指定backlog，允许客户端排队的最大长度
    }

    @Override
    protected int doReadMessages(List&lt;Object&gt; buf) throws Exception {
        SocketChannel ch = javaChannel().accept();

        try {
            if (ch != null) {
                buf.add(new NioSocketChannel(this, childEventLoopGroup().next(), ch));
                return 1;//返回1表示服务端消息读取成功
            }
        } catch (Throwable t) {
            logger.warn(&quot;Failed to create a new channel from an accepted socket.&quot;, t);

            try {
                ch.close();
            } catch (Throwable t2) {
                logger.warn(&quot;Failed to close a socket.&quot;, t2);
            }
        }

        return 0;
    }

    // Unnecessary stuff
    @Override
    protected boolean doConnect(
            SocketAddress remoteAddress, SocketAddress localAddress) throws Exception {
        throw new UnsupportedOperationException();
    }

    @Override
    protected void doFinishConnect() throws Exception {
        throw new UnsupportedOperationException();
    }

    @Override
    protected SocketAddress remoteAddress0() {
        return null;
    }

    @Override
    protected void doDisconnect() throws Exception {
        throw new UnsupportedOperationException();
    }

    @Override
    protected boolean doWriteMessage(Object msg, ChannelOutboundBuffer in) throws Exception {
        throw new UnsupportedOperationException();
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>NioSocketChannel源码分析</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    @Override
    protected boolean doConnect(SocketAddress remoteAddress, SocketAddress localAddress) throws Exception {
        if (localAddress != null) {
            javaChannel().socket().bind(localAddress);
        }

        boolean success = false;
        try {
            boolean connected = javaChannel().connect(remoteAddress);
            if (!connected) {//暂时没有连接上，服务端没有返回ACK应答，连接结果不确定，返回false
                selectionKey().interestOps(SelectionKey.OP_CONNECT);
            }
            success = true;
            return connected;
        } finally {
            if (!success) {//抛出I/O异常，说明客户端的TCP握手请求被REST或者被拒绝，此时需要关闭客户端连接
                doClose();
            }
        }
    }

    @Override
    protected void doClose() throws Exception {
        javaChannel().close();
    }

    @Override
    protected void doWrite(ChannelOutboundBuffer in) throws Exception {
        for (;;) {
            // Do non-gathering write for a single buffer case.
            final int msgCount = in.size();//获取待发送的ByteBuf个数，如果小于等于1，则调用父类AbstracetNioByteChannel的dowrite方法
            if (msgCount &lt;= 1) {
                super.doWrite(in);
                return;
            }

            // Ensure the pending writes are made of ByteBufs only.
            //在批量发送缓冲区的消息之前，先对一系列的局部变量进行赋值，首先，获取需要发送的ByteBuffer数组个数nioBufferCnt，然后，从ChannelOutboundBuffer中获取需要发送的总字节数，从NioSocketChannel中获取NIO的SocketChannel，将是否发送完成标识设置为false，将是否有写半包表示设置为false
            ByteBuffer[] nioBuffers = in.nioBuffers();
            if (nioBuffers == null) {
                super.doWrite(in);
                return;
            }

            int nioBufferCnt = in.nioBufferCount();
            long expectedWrittenBytes = in.nioBufferSize();

            final SocketChannel ch = javaChannel();
            long writtenBytes = 0;
            boolean done = false;
            boolean setOpWrite = false;
            //需要对一次Selector的轮询的写操作次数进行上线控制，因为如果TCP的发送缓冲区满，TCP处于KEEP-ALIVE状态，消息会无法发出去，如果不对上限进行控制，就会长时间地处于发送状态，Reactor线程无法及时读取其它消息和执行排队的Task，所以，我们必须对循环次数上限做控制
            for (int i = config().getWriteSpinCount() - 1; i &gt;= 0; i --) {
                final long localWrittenBytes = ch.write(nioBuffers, 0, nioBufferCnt);
                if (localWrittenBytes == 0) {//表示TCP发送缓冲区已满，可能无法再写进去，因此从循环跳出，同时将写半包标识设置为true，用于向多路复用器注册写操作位，告诉多路复用器有没发完的半包消息，需要轮询出就绪的SocketChannel继续发送
                    setOpWrite = true;
                    break;
                }
                //计算需要发送的字节数要减去已经发送的字节数；计算发送的字节总数+已经发送的字节数
                expectedWrittenBytes -= localWrittenBytes;
                writtenBytes += localWrittenBytes;
                if (expectedWrittenBytes == 0) {//判断缓冲区中所有的消息是否已经发送完成，如果是，则把发送完成标识设置为true同时推出循环，如果没有发送完成，则继续返还
                    done = true;
                    break;
                }
            }

            if (done) {//如果发送完成则循环释放已经发送的消息
                // Release all buffers
                for (int i = msgCount; i &gt; 0; i --) {
                    in.remove();
                }

                // Finish the write loop if no new messages were flushed by in.remove().
                //环形数组的发送发送缓冲区释放完成后，取消半包标识，告诉多路复用器消息已经全部发送完成
                if (in.isEmpty()) {
                    clearOpWrite();
                    break;
                }
            } else {
                //处理写半包
                // Did not write all buffers completely.
                // Release the fully written buffers and update the indexes of the partially written buffer.

                for (int i = msgCount; i &gt; 0; i --) {
                    //从ChannelOutboundBuffer弹出第一条发送的ByteBuf，然后获取改ByteBuf的读索引和可读字节数
                    final ByteBuf buf = (ByteBuf) in.current();
                    final int readerIndex = buf.readerIndex();
                    final int readableBytes = buf.writerIndex() - readerIndex;

                    if (readableBytes &lt; writtenBytes) {
                        in.progress(readableBytes);//说明当前的ByteBuf已经被完全发出去，更新ChannelOutbounfBuffer的发送进度信息，将已经发送的ByteBuf删除，释放相关资源，最后发送的字节数要减去第一条发送的字节数，得到后续发送的总字节数，然继续循环判断第二条信息...
                        in.remove();
                        writtenBytes -= readableBytes;
                    } else if (readableBytes &gt; writtenBytes) {
                        //说明这条消息没有被完整地发送出去，仅仅发送了部分数据包，出现了写半包的问题，需要更新可读的索引为当前索引+已经发送的粽子节数，然后更新ChannelOutboundBuffer的发送进度信息，退出循环
                        buf.readerIndex(readerIndex + (int) writtenBytes);
                        in.progress(writtenBytes);
                        break;
                    } else { // readableBytes == writtenBytes
                        //说明最后一次发送的消息是个整包消息，没有剩余的半包消息待发送，更新发送进度信息，将最后一条已经发送的消息从缓冲区中删除，退出循环
                        in.progress(readableBytes);
                        in.remove();
                        break;
                    }
                }
                //更新SocketChannel的操作位位OP_WRITE，由多路复用器在下一次轮询中触发SocketChannel，继续处理没有发送完成的半包消息
                incompleteWrite(setOpWrite);
                break;
            }
        }
    }

    @Override
    //NioSocketChannel的读写操作实际上市基于NIO的SocketChannel和Netty的ByteBuf封装而成
    //实际上市从SocketChannel中读取L个字节到ByteBuf中，L为可写的字节数
    protected int doReadBytes(ByteBuf byteBuf) throws Exception {
        return byteBuf.writeBytes(javaChannel(), byteBuf.writableBytes());
    }

    @Override
    public int writeBytes(ScatteringByteChannel in, int length) throws IOException {
        ensureWritable(length);
        int writtenBytes = setBytes(writerIndex, in, length);
        if (writtenBytes &gt; 0) {
            writerIndex += writtenBytes;
        }
        return writtenBytes;
    }

    @Override
    //UnpooledHeapByteBuf
    public int setBytes(int index, ScatteringByteChannel in, int length) throws IOException {
        ensureAccessible();
        try {
            return in.read((ByteBuffer) internalNioBuffer().clear().position(index).limit(index + length));
        } catch (ClosedChannelException e) {
            return -1;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Unsafe功能呢个说明 <ul><li>ChannelHandlerInvoker invoker();//返回默认使用的ChannelHandlerInvoker</li><li>SocketAddress localAddress();//返回本地绑定的Socket地址</li><li>SocketAddress remoteAddress();//返回通信对端的Socket地址</li><li>void register(ChannelPromise promise);//注册Channel到多路复用器上，一旦注册操作完成，通知ChannelFuture</li><li>void bind(SocketAddress localAddress,ChannelPromise promise);//绑定指定的本地地址localAddress到当前的Channel上，一旦完成，通知ChannelFuture</li><li>void connect(SocketAddress remoteAddress,SocketAddress localAddress,ChannelPromise promise);//绑定本地的localAddress到当前的Channel上，一旦完成，通知ChannelFuture</li><li>void disconnect(ChannelPromise promise);//断开Channel的连接，一旦完成通知ChannelFuture</li><li>void close(ChannelPromise promise);//关闭Channel的连接，一旦完成通知ChannelFuture</li><li>void closeForcibly();//强制关闭连接</li><li>void beginRead();//设置网络操作位位用于读取消息</li><li>void write(Object msg,ChannelPromise promise) //发送消息，一旦完成，通知ChannelFuture</li><li>void flush();//将发送缓冲数组中的消息写入到Channel中</li><li>ChannelPromise voidPromise();//返回一个特殊的可重用和传递的ChannelPromise,它不用于操作成功或者失败的通知其，仅仅作为一个容器被使用</li><li>ChannelOutboundBuffer outboundBuffer();//返回消息发送缓冲区</li></ul></li><li>AbstractUnsafe源码分析</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    @Override
    public final void register(final ChannelPromise promise) {
        if (eventLoop.inEventLoop()) {//判断当前所在的线程是否是Channel对应的NioEventLoop线程，如果是同一个线程则不存在多线程并发操作问题，直接调用register0进行注册
            register0(promise);
        } else {
            //如果由用户线程或者其它线程发起的注册操作，则将注册操作封装成Runnable，放到NioEventLoop任务队列中执行，如果直接执行register0方法，会存在多线程并发操作Channel问题
            try {
                eventLoop.execute(new Runnable() {
                    @Override
                    public void run() {
                        register0(promise);
                    }
                });
            } catch (Throwable t) {
                logger.warn(
                        &quot;Force-closing a channel whose registration task was not accepted by an event loop: {}&quot;,
                        AbstractChannel.this, t);
                closeForcibly();
                closeFuture.setClosed();
                promise.setFailure(t);
            }
        }
    }

    private void register0(ChannelPromise promise) {
            try {
                // check if the channel is still open as it could be closed in the mean time when the register
                // call was outside of the eventLoop
                if (!ensureOpen(promise)) {//判断Channel是否打开，没有打开则无法注册，直接返回
                    return;
                }
                doRegister();
                //doRegister没有抛出异常，则说明Channel注册成功，将ChannelPromise的结果设置为成功
                registered = true;
                promise.setSuccess();
                pipeline.fireChannelRegistered();
                if (isActive()) {
                    pipeline.fireChannelActive();
                }
            } catch (Throwable t) {
                // Close the channel directly to avoid FD leak.
                closeForcibly();
                closeFuture.setClosed();
                if (!promise.tryFailure(t)) {
                    logger.warn(
                            &quot;Tried to fail the registration promise, but it is complete already. &quot; +
                                    &quot;Swallowing the cause of the registration failure:&quot;, t);
                }
            }
        }

    @Override
    protected void doRegister() throws Exception {
        boolean selected = false;
        for (;;) {
            try {
                selectionKey = javaChannel().register(eventLoop().selector, 0, this);
                return;
            } catch (CancelledKeyException e) {
                if (!selected) {
                    // Force the Selector to select now as the &quot;canceled&quot; SelectionKey may still be
                    // cached and not removed because no Select.select(..) operation was called yet.
                    eventLoop().selectNow();
                    selected = true;
                } else {
                    // We forced a select operation on the selector before but the SelectionKey is still cached
                    // for whatever reason. JDK bug ?
                    throw e;
                }
            }
        }
    }

        @Override
        public final void bind(final SocketAddress localAddress, final ChannelPromise promise) {
            if (!ensureOpen(promise)) {
                return;
            }

            // See: https://github.com/netty/netty/issues/576
            if (!PlatformDependent.isWindows() &amp;&amp; !PlatformDependent.isRoot() &amp;&amp;
                Boolean.TRUE.equals(config().getOption(ChannelOption.SO_BROADCAST)) &amp;&amp;
                localAddress instanceof InetSocketAddress &amp;&amp;
                !((InetSocketAddress) localAddress).getAddress().isAnyLocalAddress()) {
                // Warn a user about the fact that a non-root user can&#39;t receive a
                // broadcast packet on *nix if the socket is bound on non-wildcard address.
                logger.warn(
                        &quot;A non-root user can&#39;t receive a broadcast packet if the socket &quot; +
                        &quot;is not bound to a wildcard address; binding to a non-wildcard &quot; +
                        &quot;address (&quot; + localAddress + &quot;) anyway as requested.&quot;);
            }

            boolean wasActive = isActive();
            try {
                doBind(localAddress);
            } catch (Throwable t) {
                //将异常设置到ChannelPromise中用于通知ChannelFuture
                promise.setFailure(t);
                closeIfClosed();//关闭Channel
                return;
            }
            if (!wasActive &amp;&amp; isActive()) {
                invokeLater(new Runnable() {
                    @Override
                    public void run() {
                        pipeline.fireChannelActive();
                    }
                });
            }
            promise.setSuccess();
        }

    @Override
    //客户端代码实现
    protected void doBind(SocketAddress localAddress) throws Exception {
        javaChannel().bind(localAddress, config.getBacklog());
    }
    //服务端代码实现
    @Override
    protected void doBind(SocketAddress localAddress) throws Exception {
        javaChannel().socket().bind(localAddress, config.getBacklog());
    }

    @Override
    public final void disconnect(final ChannelPromise promise) {
        boolean wasActive = isActive();
        try {
            doDisconnect();
        } catch (Throwable t) {
            promise.setFailure(t);
            closeIfClosed();
            return;
        }
        if (wasActive &amp;&amp; !isActive()) {
            invokeLater(new Runnable() {
                @Override
                public void run() {
                    pipeline.fireChannelInactive();
                }
            });
        }
        promise.setSuccess();
        closeIfClosed(); // doDisconnect() might have closed the channel
    }

    @Override
    public final void close(final ChannelPromise promise) {
        if (inFlush0) {
            //判断是否处于刷新状态，说明还有消息尚未发送出去，需要等到所有消息发送完成再关闭链路
            //将关闭操作封装成Runnable稍后执行
            invokeLater(new Runnable() {
                @Override
                public void run() {
                    close(promise);
                }
            });
            return;
        }
        //从closeFuture中判断关闭操作是否完成，如果已经完成就不需要关闭链路，设置ChannelPromise的操作结果为成功并返回
        if (closeFuture.isDone()) {
            // Closed already.
            promise.setSuccess();
            return;
        }
        //执行关闭操作，将消息发送缓冲数组设置为空，通知jvm进行内存回收，调用抽象方法doclose关闭链路
        boolean wasActive = isActive();
        ChannelOutboundBuffer outboundBuffer = this.outboundBuffer;
        this.outboundBuffer = null; // Disallow adding any messages and flushes to outboundBuffer.

        try {
            doClose();
            closeFuture.setClosed();
            promise.setSuccess();
        } catch (Throwable t) {
            closeFuture.setClosed();
            promise.setFailure(t);
        }

        // Fail all the queued messages
        //调用ChannelOutboundBuffer的close方法释放缓冲区的消息，随后构造链路关闭通知Runnable放到NioEventLoop中执行
        try {
            outboundBuffer.failFlushed(CLOSED_CHANNEL_EXCEPTION);
            outboundBuffer.close(CLOSED_CHANNEL_EXCEPTION);
        } finally {

            if (wasActive &amp;&amp; !isActive()) {
                invokeLater(new Runnable() {
                    @Override
                    public void run() {
                        pipeline.fireChannelInactive();
                    }
                });
            }
            //将Channel从多路复用器上取消注册
            deregister();
        }
    }

    @Override
    protected void doDeregister() throws Exception {
        eventLoop().cancel(selectionKey());
    }

    void cancel(SelectionKey key) {
        key.cancel();
        cancelledKeys ++;
        if (cancelledKeys &gt;= CLEANUP_INTERVAL) {
            cancelledKeys = 0;
            needsToSelectAgain = true;
        }
    }

    @Override
    public void write(Object msg, ChannelPromise promise) {
        if (!isActive()) {
            // Mark the write request as failure if the channel is inactive.
            //Channel打开，但是TCP链路尚未成功
            if (isOpen()) {
                promise.tryFailure(NOT_YET_CONNECTED_EXCEPTION);
            //Channel已经关闭
            } else {
                promise.tryFailure(CLOSED_CHANNEL_EXCEPTION);
            }
            // release message now to prevent resource-leak
            //对链路状态进行判断，给ChannelPromise设置对应的异常，然后调用ReferenceCountUtil的release方法释放发送的msg对象
            ReferenceCountUtil.release(msg);
        } else {
            //如果链路状态正常，则将需要发送的msg和promise放入发送缓冲区中（环形数组）
            outboundBuffer.addMessage(msg, promise);
        }
    }

    @Override
    //将发送缓冲区中待发送的消息全部写入到Channel中，并发送给通信对方
    public void flush() {
        ChannelOutboundBuffer outboundBuffer = this.outboundBuffer;
        if (outboundBuffer == null) {
            return;
        }

        outboundBuffer.addFlush();
        flush0();
    }

    @Override
    protected void doWrite(ChannelOutboundBuffer in) throws Exception {
        for (;;) {
            // Do non-gathering write for a single buffer case.
            // 计算需要发送的消息个数，如果只有一个消息需要发送调用父类的写操作
            final int msgCount = in.size();
            if (msgCount &lt;= 1) {
                super.doWrite(in);
                return;
            }

            // Ensure the pending writes are made of ByteBufs only.
            ByteBuffer[] nioBuffers = in.nioBuffers();
            if (nioBuffers == null) {
                super.doWrite(in);
                return;
            }

            int nioBufferCnt = in.nioBufferCount();
            long expectedWrittenBytes = in.nioBufferSize();

            final SocketChannel ch = javaChannel();
            long writtenBytes = 0;
            boolean done = false;
            boolean setOpWrite = false;
            for (int i = config().getWriteSpinCount() - 1; i &gt;= 0; i --) {
                final long localWrittenBytes = ch.write(nioBuffers, 0, nioBufferCnt);
                if (localWrittenBytes == 0) {
                    setOpWrite = true;
                    break;
                }
                expectedWrittenBytes -= localWrittenBytes;
                writtenBytes += localWrittenBytes;
                if (expectedWrittenBytes == 0) {
                    done = true;
                    break;
                }
            }

            if (done) {
                // Release all buffers
                for (int i = msgCount; i &gt; 0; i --) {
                    in.remove();
                }

                // Finish the write loop if no new messages were flushed by in.remove().
                if (in.isEmpty()) {
                    clearOpWrite();
                    break;
                }
            } else {
                // Did not write all buffers completely.
                // Release the fully written buffers and update the indexes of the partially written buffer.

                for (int i = msgCount; i &gt; 0; i --) {
                    final ByteBuf buf = (ByteBuf) in.current();
                    final int readerIndex = buf.readerIndex();
                    final int readableBytes = buf.writerIndex() - readerIndex;

                    if (readableBytes &lt; writtenBytes) {
                        in.progress(readableBytes);
                        in.remove();
                        writtenBytes -= readableBytes;
                    } else if (readableBytes &gt; writtenBytes) {
                        buf.readerIndex(readerIndex + (int) writtenBytes);
                        in.progress(writtenBytes);
                        break;
                    } else { // readableBytes == writtenBytes
                        in.progress(readableBytes);
                        in.remove();
                        break;
                    }
                }

                incompleteWrite(setOpWrite);
                break;
            }
        }
    }
    //AbstractNioByteChannel的doWrite
    @Override
    protected void doWrite(ChannelOutboundBuffer in) throws Exception {
        int writeSpinCount = -1;

        for (;;) {
            Object msg = in.current(true);
            if (msg == null) {//说明该消息已经发送完成并被回收，然后执行情况OP_WRITE操作位的clearOpWrite方法
                // Wrote all messages.
                clearOpWrite();
                break;
            }

            if (msg instanceof ByteBuf) {
                ByteBuf buf = (ByteBuf) msg;
                int readableBytes = buf.readableBytes();
                //如果需要发送的ByteBuf已经没有可写的字节了，则说明已经发送完成，将该消息从环形队列中删除，然后循环
                if (readableBytes == 0) {
                    in.remove();
                    continue;
                }
                //对写入的字节个数进行判读，如果为0说明TCP的发送缓冲区已满，需要退出并监听写操作
                //首先将半包表示设置为false,从DefaultSocketChannelConfig中获取循环发送的次数，进行循环发送
                boolean setOpWrite = false;
                boolean done = false;
                long flushedAmount = 0;
                if (writeSpinCount == -1) {
                    writeSpinCount = config().getWriteSpinCount();
                }
                for (int i = writeSpinCount - 1; i &gt;= 0; i --) {
                    int localFlushedAmount = doWriteBytes(buf);
                    //从写操作中返回，需要对写入的字节数进行判断，如果为0，说明TCP发送缓冲区已满，不能继续再向里面写入消息，因此，将写半包设置为true，然后退出循环，执行后续排队的其它任务或者读操作，等待下一次selector的轮询继续触发写操作
                    if (localFlushedAmount == 0) {
                        setOpWrite = true;
                        break;
                    }
                    //对写入的字节数进行累加，判断当前的ByteBuf是否还有没有发送的字节，如果没有可以发送的字节，则将done设置为true，退出循环
                    flushedAmount += localFlushedAmount;
                    if (!buf.isReadable()) {
                        done = true;
                        break;
                    }
                }
                //根据实际发送的字节数更新发送进度，实际是发送的字节数和需要发送的字节数的一个比值。执行完进度更新后，判断本轮循环是否将需要发送的消息全部发送完成，如果发送完成则将该消息从循环队列中删除，否则，设置多路复用器的OP_WRITE操作位，用于通知Reactor线程还有半包消息需要继续发送
                in.progress(flushedAmount);

                if (done) {
                    in.remove();
                } else {
                    incompleteWrite(setOpWrite);
                    break;
                }
            } else if (msg instanceof FileRegion) {
                FileRegion region = (FileRegion) msg;
                boolean setOpWrite = false;
                boolean done = false;
                long flushedAmount = 0;
                if (writeSpinCount == -1) {
                    writeSpinCount = config().getWriteSpinCount();
                }
                for (int i = writeSpinCount - 1; i &gt;= 0; i --) {
                    long localFlushedAmount = doWriteFileRegion(region);
                    if (localFlushedAmount == 0) {
                        setOpWrite = true;
                        break;
                    }

                    flushedAmount += localFlushedAmount;
                    if (region.transfered() &gt;= region.count()) {
                        done = true;
                        break;
                    }
                }

                in.progress(flushedAmount);

                if (done) {
                    in.remove();
                } else {
                    incompleteWrite(setOpWrite);
                    break;
                }
            } else {
                throw new UnsupportedOperationException(&quot;unsupported message type: &quot; + StringUtil.simpleClassName(msg));
            }
        }
    }

    public Object current(boolean preferDirect) {
        if (isEmpty()) {
            return null;
        } else {
            // TODO: Think of a smart way to handle ByteBufHolder messages
            Object msg = buffer[flushed].msg;
            if (threadLocalDirectBufferSize &lt;= 0 || !preferDirect) {
                return msg;
            }
            if (msg instanceof ByteBuf) {
                ByteBuf buf = (ByteBuf) msg;
                if (buf.isDirect()) {
                    return buf;
                } else {
                    int readableBytes = buf.readableBytes();
                    if (readableBytes == 0) {
                        return buf;
                    }

                    // Non-direct buffers are copied into JDK&#39;s own internal direct buffer on every I/O.
                    // We can do a better job by using our pooled allocator. If the current allocator does not
                    // pool a direct buffer, we use a ThreadLocal based pool.
                    ByteBufAllocator alloc = channel.alloc();
                    ByteBuf directBuf;
                    if (alloc.isDirectBufferPooled()) {
                        directBuf = alloc.directBuffer(readableBytes);
                    } else {
                        directBuf = ThreadLocalPooledByteBuf.newInstance();
                    }
                    directBuf.writeBytes(buf, buf.readerIndex(), readableBytes);
                    current(directBuf);
                    return directBuf;
                }
            }
            return msg;
        }
    }

    
    protected final void clearOpWrite() {
        final SelectionKey key = selectionKey();
        final int interestOps = key.interestOps();
        if ((interestOps &amp; SelectionKey.OP_WRITE) != 0) {
            key.interestOps(interestOps &amp; ~SelectionKey.OP_WRITE);
        }
    }
    
    public boolean remove() {
        //判断环形队列中是否还有需要发送的消息，如果没有，则直接反悔啊
        if (isEmpty()) {
            return false;
        }
        //获取Entry，然后对其进行资源释放，同时对需要发送的索引flushed进行更新
        Entry e = buffer[flushed];
        Object msg = e.msg;
        if (msg == null) {
            return false;
        }

        ChannelPromise promise = e.promise;
        int size = e.pendingSize;

        e.clear();

        flushed = flushed + 1 &amp; buffer.length - 1;

        safeRelease(msg);

        promise.trySuccess();
        //减去已经发送的字节数，跟incrementPendingOutboundBytes类似，会进行发送低水位判断和事件通知
        decrementPendingOutboundBytes(size);

        return true;
    }

    @Override
    protected int doWriteBytes(ByteBuf buf) throws Exception {
        //将当前ByteBuf中的可写字节数组写入到指定的Channel中。等于ByteBuf的可读字节数，返回值是写入的字节个数。由于我们将SocketChannel设置为异步非阻塞模式，所以写操作不会阻塞
        final int expectedWrittenBytes = buf.readableBytes();
        final int writtenBytes = buf.readBytes(javaChannel(), expectedWrittenBytes);
        return writtenBytes;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>AbstractNioUnsafe源码分析</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    //connect方法
    //首先获取当前的连接状态进行缓存，然后发起连接操作，需要指出的是，SocketChannel执行connect()操作的有三种可能的结果
    //1.连接成功，返回ture
    //2.暂时没有连接上，服务端没有返回ACK应答，连接记过不确定，返回false（将NioSocketChannel中的selectKey设置为OP_CONNECT,监听应答消息）
    //3。连接失败，直接抛出I/O异常
    @Override
    protected boolean doConnect(SocketAddress remoteAddress, SocketAddress localAddress) throws Exception {
        if (localAddress != null) {
            javaChannel().socket().bind(localAddress);
        }

        boolean success = false;
        try {
            boolean connected = javaChannel().connect(remoteAddress);
            if (!connected) {
                selectionKey().interestOps(SelectionKey.OP_CONNECT);
            }
            success = true;
            return connected;
        } finally {
            if (!success) {
                doClose();
            }
        }
    }

    @Override
        public void connect(
                final SocketAddress remoteAddress, final SocketAddress localAddress, final ChannelPromise promise) {
            if (!ensureOpen(promise)) {
                return;
            }

            try {
                if (connectPromise != null) {
                    throw new IllegalStateException(&quot;connection attempt already made&quot;);
                }

                boolean wasActive = isActive();
                if (doConnect(remoteAddress, localAddress)) {
                    fulfillConnectPromise(promise, wasActive);//异步连接返回后，需要判断连接结果，如果连接成功，则触发ChannelActive事件，最终会将NioSocketChannel中的selectionKey设置为SelectionKey.OP_READ
                } else {//如果没有立即脸上服务端，执行所示分支
                    //根据连接超时时间设置定时任务，超时时间到之后触发校验，如果发现连接并没有完成，则关闭连接句柄，释放资源，设置异常堆栈并发起去注册
                    //设置连接结果监听器，如果接收到连接完成通知则判断是否被取消，如果被取消则关闭连接句柄，释放资源，发起取消注册操作
                    connectPromise = promise;
                    requestedRemoteAddress = remoteAddress;

                    // Schedule connect timeout.
                    int connectTimeoutMillis = config().getConnectTimeoutMillis();
                    if (connectTimeoutMillis &gt; 0) {
                        connectTimeoutFuture = eventLoop().schedule(new Runnable() {
                            @Override
                            public void run() {
                                ChannelPromise connectPromise = AbstractNioChannel.this.connectPromise;
                                ConnectTimeoutException cause =
                                        new ConnectTimeoutException(&quot;connection timed out: &quot; + remoteAddress);
                                if (connectPromise != null &amp;&amp; connectPromise.tryFailure(cause)) {
                                    close(voidPromise());
                                }
                            }
                        }, connectTimeoutMillis, TimeUnit.MILLISECONDS);
                    }

                    promise.addListener(new ChannelFutureListener() {
                        @Override
                        public void operationComplete(ChannelFuture future) throws Exception {
                            if (future.isCancelled()) {
                                if (connectTimeoutFuture != null) {
                                    connectTimeoutFuture.cancel(false);
                                }
                                connectPromise = null;
                                close(voidPromise());
                            }
                        }
                    });
                }
            } catch (Throwable t) {
                if (t instanceof ConnectException) {
                    Throwable newT = new ConnectException(t.getMessage() + &quot;: &quot; + remoteAddress);
                    newT.setStackTrace(t.getStackTrace());
                    t = newT;
                }
                promise.tryFailure(t);
                closeIfClosed();
            }
        }
        @Override
        public void finishConnect() {
            // Note this method is invoked by the event loop only if the connection attempt was
            // neither cancelled nor timed out.
            //首先缓存连接状态，当前返回false
            assert eventLoop().inEventLoop();
            assert connectPromise != null;

            try {
                boolean wasActive = isActive();
                doFinishConnect();//判断连接结果:1.连接成功返回true，失败返回false，发生链路被关闭，链路中断等异常，连接失败
                fulfillConnectPromise(connectPromise, wasActive);//负责将SocketChannel修改为监听读操作位，用来监听网络的读时间
            } catch (Throwable t) {
                if (t instanceof ConnectException) {
                    Throwable newT = new ConnectException(t.getMessage() + &quot;: &quot; + requestedRemoteAddress);
                    newT.setStackTrace(t.getStackTrace());
                    t = newT;
                }

                // Use tryFailure() instead of setFailure() to avoid the race against cancel().
                connectPromise.tryFailure(t);
                closeIfClosed();
            } finally {
                // Check for null as the connectTimeoutFuture is only created if a connectTimeoutMillis &gt; 0 is used
                // See https://github.com/netty/netty/issues/1770
                //最后对连接超时进行判断，如果连接超时时仍然没有接收到服务端的ACK应答消息，则由定时任务关闭客户端连接，将SocketChannel从Reactor线程的多路复用器上摘除，释放资源
                if (connectTimeoutFuture != null) {
                    connectTimeoutFuture.cancel(false);
                }
                connectPromise = null;
            }
        }
        @Override
        //只要连接失败，就抛出Error(),由调用方执行句柄关闭的等资源释放操作，如果返回成功，则执行doFinishConnect
        protected void doFinishConnect() throws Exception {
            if (!javaChannel().finishConnect()) {
                throw new Error();
            }
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>NioByteUnsafe源码分析</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>        @Override
        public void read() {
            final ChannelConfig config = config();
            final ChannelPipeline pipeline = pipeline();
            final ByteBufAllocator allocator = config.getAllocator();
            final int maxMessagesPerRead = config.getMaxMessagesPerRead();
            RecvByteBufAllocator.Handle allocHandle = this.allocHandle;
            if (allocHandle == null) {//如果是首次调用，从SocketChannelConfig的RecvByteBufAllocator中创建Handle
                //RecvByteBufAllocator默认有两种实现，分别是AdaptiveRecvByteBufAllocator和FixedRecvByteBufAllocator
                this.allocHandle = allocHandle = config.getRecvByteBufAllocator().newHandle();
            }
            if (!config.isAutoRead()) {
                removeReadOp();
            }

            ByteBuf byteBuf = null;
            int messages = 0;
            boolean close = false;
            try {
                //首先通过接收缓冲区分配器的Handler计算获得下次预分配的缓冲区容量byteBufCapacity，紧接着根据缓冲区容量进行缓冲区分配
                int byteBufCapacity = allocHandle.guess();
                int totalReadAmount = 0;
                do {
                    byteBuf = allocator.ioBuffer(byteBufCapacity);
                    int writable = byteBuf.writableBytes();
                    //接收缓冲区ByteBuf分配完成后，进行消息的异步读取
                    int localReadAmount = doReadBytes(byteBuf);
                    //完成消息的异步读取之后，需要对本次读取的字节数进行判断，有以下三种可能
                    //返回0，表示没有就绪的消息可读
                    //返回值大于0，读到了消息
                    //返回值-1，表示发生了I/O异常，读取失败
                    if (localReadAmount &lt;= 0) {//没有就绪的消息可读或者发生了I/O异常，需要释放接收缓冲区
                        // not was read release the buffer
                        byteBuf.release();
                        close = localReadAmount &lt; 0;//如果读取的字节数小于0，则需要将close状态位置位，用于关闭连接，释放资源，置位完成之后，退出循环
                        break;
                    }
                    //完成一次异步读之后，就会触发一次ChannelRead事件，但并不意味读到了一条完整的消息，因为TCP底层存在组包和粘包，所以，一次读操作可能包含多个消息，也可能是不完整的消息。以ChannelRead的触发次数做计数器来进行性能分析和统计，是完全错误的，当然，如果你使用了半包解码器或者处理了半包，就能够实现一次ChannelRead对应一条完整的消息
                    pipeline.fireChannelRead(byteBuf);
                    //触发和完成ChannelRead事件调用之后，将接收缓冲区释放
                    byteBuf = null;
                    //因为一次读取操作未必能够完成TCP缓冲区的全部读取工作，所以，读操作在循环体中进行，每次读取操作完成后，会对读取的字节数进行累加，累加之前，需要对长度上线做保护，如果累计服务的字节数已经发生溢出，则将读取到字节数设置为整形最大值，退出循环，原因是本次循环已经读取过多的字节，需要退出，否则会影响后面排队的Task任务和写操作的执行，如果没有溢出，则执行累加操作
                    if (totalReadAmount &gt;= Integer.MAX_VALUE - localReadAmount) {
                        // Avoid overflow.
                        totalReadAmount = Integer.MAX_VALUE;
                        break;
                    }

                    totalReadAmount += localReadAmount;
                    //最后对本次读取的字节数进行判断，如果小于缓冲区可写的容量，说明TCP缓冲区已经没有就绪的字节可读，读取操作已经完成，需要退出循环。如果仍然有未读的消息，则继续执行读操作。连续的读操作会阻塞排在后面的任务队列中待执行的Task，以及写操作。所以要对连续读操作做上限控制，默认值为16次，无论TCP缓冲区有多少码流需要读取，只要连续16次没有读完，都要强制对出，等待下一次Selector轮询周期再执行
                    if (localReadAmount &lt; writable) {
                        // Read less than what the buffer can hold,
                        // which might mean we drained the recv buffer completely.
                        break;
                    }
                } while (++ messages &lt; maxMessagesPerRead);

                pipeline.fireChannelReadComplete();
                //完成多路复用器本轮读操作之后触发ChannelReadComplete事件，随后调用接收缓冲区容量分配器的Handler的记录方法，将本次读取的总字节数传入到record()方法中进行缓存区的动态分配，为下一次读取选取更加合适的缓冲区容量
                allocHandle.record(totalReadAmount);

                if (close) {
                    closeOnRead(pipeline);
                    close = false;
                }
            } catch (Throwable t) {
                handleReadException(pipeline, byteBuf, t, close);
            }
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>AdaptiveRecvByteBufAllocator是指缓冲区大小可以动态调整的ByteBuf分配器 <ul><li>AdaptiveRecvByteBufAllocator就是根据本次读取的实际字节数对下次接收缓冲区的容量进行动态调整。动态缓冲区分配器的优点入戏 <ul><li>Netty作为一个通用的NIO框架，并不对用户的应用场景进行假设，可以使用它做流媒体传输，也可以用它做聊天工具，不同的应用场景，传输的码流大小千差万别，无论初始化分配的是32K还是1M，都会随着应用场景的变化而变得不适应。因此，Netty是根据上次实际读取的码流大小对下次的接收Buffer缓冲区进行预测和调整，能够调整最大限度的满足不同行业的应用场景</li><li>性能更高，容量过大会导致内存占用开销增加，后续的Buffer处理性能会下降，容量过小时需要频繁地内存扩张来接受大的请求消息，同样会导致性能下降。</li><li>更新约内存。假如通常情况下请求消息平均值为1M左右，接收缓冲区大小为1.2M；突然某个客户发送了一个10M的流媒体附件，接收缓冲区扩张为10M以接纳该附件，如果缓冲区不能收缩，每次缓冲区创建都会分配10M的内存，但是后续的所有的消息都是1M左右，这样会导致内存的浪费，如果并打客户端过多，可能发生内存溢出，最终宕机</li></ul></li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    static final int DEFAULT_MINIMUM = 64;//最小缓冲区长度64字节
    static final int DEFAULT_INITIAL = 1024;//初始容量1024字节
    static final int DEFAULT_MAXIMUM = 65536;//最大容量65526字节

    private static final int INDEX_INCREMENT = 4;//扩张的步进索引为4
    private static final int INDEX_DECREMENT = 1;//收缩的步近索引为1

    //定义了长度的向量表size_table并初始它，向量数组的每个值都对应一个Buffer容量，当容量小于512时，由于缓冲区已经比较小，需要降低步进值，容量每次下调的幅度要小些，当大于512时，说明需要解码的消息码流比较大，这时采用调大步进幅度的方式减少动态扩张的频率，所以它采用512的倍数进行扩张
    static {
        List&lt;Integer&gt; sizeTable = new ArrayList&lt;Integer&gt;();
        for (int i = 16; i &lt; 512; i += 16) {
            sizeTable.add(i);
        }

        for (int i = 512; i &gt; 0; i &lt;&lt;= 1) {
            sizeTable.add(i);
        }

        SIZE_TABLE = new int[sizeTable.size()];
        for (int i = 0; i &lt; SIZE_TABLE.length; i ++) {
            SIZE_TABLE[i] = sizeTable.get(i);
        }
    }
    //根据容量Size查找容量向量表对应的索引，经典的二分查找法
    private static int getSizeTableIndex(final int size) {
        for (int low = 0, high = SIZE_TABLE.length - 1;;) {
            if (high &lt; low) {
                return low;
            }
            if (high == low) {
                return high;
            }

            int mid = low + high &gt;&gt;&gt; 1;
            int a = SIZE_TABLE[mid];
            int b = SIZE_TABLE[mid + 1];
            if (size &gt; b) {
                low = mid + 1;
            } else if (size &lt; a) {
                high = mid - 1;
            } else if (size == a) {
                return mid;
            } else {
                return mid + 1;
            }
        }
    }

    private static final class HandleImpl implements Handle {
        private final int minIndex;//最小索引
        private final int maxIndex;//最大索引
        private int index;//当前索引
        private int nextReceiveBufferSize;//下一次与预分配的Buffer大小和是否立即执行容量收缩操作
        private boolean decreaseNow;//是否立即执行容量收缩操作

        @Override
        public void record(int actualReadBytes) {
            //当NioSocketChannel执行完读操作后，会计算获得本次轮询读取的总字节数
            //根据实际读取的字节数对ByteBuf进行动态伸缩和扩张
            //首先，对当前索引做步进缩减，然后获取收缩后索引对应的容量，与实际读取的字节数进行比对，如果发现小于收缩后的容量，则重新对当前索引进行赋值，取收缩的索引和最小索引中的较大者作为最新的索引，然后，为下一次缓冲区容量分配赋值---新的索引对应容量向量表中的容量。相反，如果对当前实际读取的字节数大于之前预分配的初始容量，则说明实际分配的容量不足，需要动态扩张。重新计算索引，选取当前索引+扩张步进和最大索引中较小作为当前索引值，然后对下次缓冲区的容量值进行重新分配，完成缓冲区容量的动态扩张
            if (actualReadBytes &lt;= SIZE_TABLE[Math.max(0, index - INDEX_DECREMENT - 1)]) {
                if (decreaseNow) {
                    index = Math.max(index - INDEX_DECREMENT, minIndex);
                    nextReceiveBufferSize = SIZE_TABLE[index];
                    decreaseNow = false;
                } else {
                    decreaseNow = true;
                }
            } else if (actualReadBytes &gt;= nextReceiveBufferSize) {
                index = Math.min(index + INDEX_INCREMENT, maxIndex);
                nextReceiveBufferSize = SIZE_TABLE[index];
                decreaseNow = false;
            }
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>ChannelPipeline和ChannelHandler <ul><li>Netty的ChannelPipeline和ChannelHandler机制类似于servlet和Filter过滤器，这类拦截器实际上是职责链模式的一种变形，主要为了方便事件拦截和用户业务逻辑的定制</li><li>Servlet Filter是JEE web应用程序级的Java代码组件，能够以声明的方式插入到HTTP请求响应的处理过程中，用于拦截请求和响应，以便能够查看，提取或者以某种方式操作正在客户端和服务器之间交互的数据。拦截器封装了业务定制逻辑，能够实现对Web应用程序的预处理和事后处理</li><li>过滤器提供了一种面向对象的模块化机制，用来将公共任务封装到可插入的组件中。这些组件通过Web部署配置文件Web.xml进行声明，可以方便地添加和删除过滤器，无须改动任何应用程序代码或JSP页面，由Servlet进行动态调用。通过再请求/响应链中使用过滤器，可以对应用程序（而不是以任何方式替代）的Servlet或JSP页面提供的核心处理进行补充，而不破坏Servlet或JSP页面的功能。由于是纯Java实现，所以Servlet过滤器具有跨平台的可重用性，似的他们很容器被部署到任何符合Servlet规范的JEE环境中</li><li>Netty的Channel过滤器实现原理和Servlet Filter机制一致，他将Channel的数据管道抽象为ChannelPipeline，消息在ChannelPipeline中流动和传递，ChannelPipeline持有I/O时间拦截器ChannelHandler的链表，由ChannelHandler对I/O时间进行拦截和处理，可以方便地通过新增和删除啊ChannelHandler来实现不同业务逻辑定制，不需要对已有的ChannelHandler进行修改，能够实现对修改封闭和扩展的支持</li></ul></li><li>ChannelPipeline <ul><li>ChannelHandler的容器，负责ChannelHandler的管理和时间拦截与调度</li><li>底层的SocketChannel read()读取ByteBuf，触发ChannelRead事件，由I/O线程NioEventLoop调用ChannelPipline的fireChannelRead(Object msg)方法，将消息（ByteBuf）传输到CHannelPipeline中</li><li>消息依次被HeadHandler，ChannelHandler2，tailHandler拦截和处理，在这个过程中，任何ChannelHandler都可以中断当前的流程，结束消息的传递</li><li>调用ChannelHandlerContext的write方法发送消息，消息从tailHandler开始，途经过ChannelHandlerN。。。ChandlerN，最终被添加到消息发送缓冲中等待刷新和发送，此过程也可以中断消息的传递。</li><li>Netty中的时间分为Inbound事件和outbound事件。Inbound事件通常由I/O线程触发 <ul><li>ChannelHandlerContext.fireChannelRegistered();Channel注册时间</li><li>ChannelHandlerContext.fireChannelActive()TCP链路建立成功，Channel激活时间</li><li>ChannelHandlerContext.fireChannelRead()读事件</li><li>ChannelHandlerContext.fireChannelReadCompete()读操作完成通知事件</li><li>ChannelHandlerContext.fireExceptionCaught（Throwable）异常通知事件</li><li>ChannelHandlerContext.fireUserEventTriggered(Object)用户自定义时间</li><li>ChannelHandlerContext.fireChannelWritblilityChanged();Channel的可写状态变化通知事件</li><li>ChannelHandlerContext.fireChannelInactive();TCP连接关闭。链路不可用通知事件。</li></ul></li><li>Outbound事件的方法如下 <ul><li>ChannelHandlerContext.bind(SocketAddress,ChannelPromise)绑定本地地址时间</li><li>ChannelHandlerContext.connect(SocketAddress,SocketAddress,ChannelPromise);连接服务端时间</li><li>ChannelHandlerContext.write(Object,ChanelPromise);发送事件</li><li>ChannelHandlerContext.flush();//刷新时间</li><li>ChannelHandlerContext.read();//读事件</li><li>ChannelHandlerContext.disconnect(ChannelPromise);//断开连接事件</li><li>ChannelHandlerContext.close(ChannelPromise);//关闭当前Channel事件</li></ul></li></ul></li><li>自定义拦截器：可以实现ChannelHandler接口实现事件的拦截和处理，通常只需要继承ChannelHandlerAdapter类覆盖自己关心的方法即可</li><li>构建pipeline：用户不需要自己创建pipeline，因为使用ServerBootstrap或者Bootsrap启动服务端或者客户端时，Netty会为每个Channel连接创建一个独立的pipeline。对于使用者来说，只要将自定义的拦截器加入到pipeline中即可pipeline.addLast(&quot;decoder&quot;,new MyProtocolDecoder());。对于类似编解码的ChannelHandler存在先后顺序</li><li>ChannelPipeline特性 <ul><li>ChannelPipeline支持动态添加或者删除ChannelHandler，如可以在高峰的时候添加拥塞保护</li><li>ChannelPipeline是线程安全的，意味着N个业务线程可以并发操作。ChannelHandler不是线程安全的</li></ul></li><li>ChannelPipeline源码 <ul><li>实际是ChannelHandler容器，内部维护了一个ChannelHandler的链表和迭代器，方便地是爱心纳ChannelHandler查找，添加，替换和删除</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    @Override
    public ChannelPipeline addBefore(String baseName, String name, ChannelHandler handler) {
        return addBefore((ChannelHandlerInvoker) null, baseName, name, handler);
    }
    @Override
    //ChannelPipeline支持运行期动态修改，因此存在两种潜在的多线程并发访问场景
    //I/O线程和用户业务线程的并发访问
    //用户多个线程之间的并发访问
    public ChannelPipeline addBefore(
            ChannelHandlerInvoker invoker, String baseName, final String name, ChannelHandler handler) {
        synchronized (this) {
            DefaultChannelHandlerContext ctx = getContextOrDie(baseName);
            //对新增的ChannelHandler名进行重复性校验，如果已经有同名的ChannelHandler存在则不允许覆盖
            checkDuplicateName(name);
            //构造新的DefaultChannelHandlerContext并添加到当前的pipeline中
            DefaultChannelHandlerContext newCtx =
                    new DefaultChannelHandlerContext(this, invoker, name, handler);

            addBefore0(name, ctx, newCtx);
        }
        return this;
    }
    //如果ChannelHandlerContext不是可以在多个ChannelPipeline中共享的，且已经被添加到pipeline中，则抛出异常
    加入成功之后，缓存ChannelHandlerContext，发送新增的ChannelHandlerContext通知消息
    private void addBefore0(final String name, DefaultChannelHandlerContext ctx, DefaultChannelHandlerContext newCtx) {
        checkMultiplicity(newCtx);

        newCtx.prev = ctx.prev;
        newCtx.next = ctx;
        ctx.prev.next = newCtx;
        ctx.prev = newCtx;

        name2ctx.put(name, newCtx);

        callHandlerAdded(newCtx);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>ChannelPipeline的inbound事件 <ul><li>当发生某个I/O事件的时候，例如链路建立，链路关闭，读取操作完成等，都会产生一个事件，事件在pipeline中得到传播和处理，他是事件处理的总入口。由于网络I/O相关的事件有限，因此Netty对这些时间进行了统一抽象，Netty自身和用户的ChannelHandler会对感兴趣的时间进行拦截和处理</li><li>pipeline中已fireXXX命名的方法都是从I/O线程流向用户业务的Handler的inbound事件，他们的实现因功能而异，处理步骤类似</li><li>调用HandHandler对应的fireXXX方法</li><li>执行事件相关的逻辑操作</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    //如调用head.fireChannelActive()之后执行如下方法
    @Override
    public ChannelPipeline fireChannelActive() {
        head.fireChannelActive();

        if (channel.config().isAutoRead()) {
            channel.read();
        }

        return this;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>ChannelPipeline的outbound事件 <ul><li>由用户线程或者代码发起的I/O操作被称为outbound事件，事实上inbound和outbound是Netty根据事件在pipeline中的流向抽象出来的术语</li><li>Pipeline本身并不直接进行I/O操作，最终都是由Unsafe和Channel来实现真正的I/O操作的，Pipeline负责将I/O事件通过TailHandler进行调度和传播，最终调用Unsafe的I/O方法进行I/O操作</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    @Override
    public ChannelFuture connect(SocketAddress remoteAddress, ChannelPromise promise) {
        return tail.connect(remoteAddress, promise);
    }

    //最终调用HeadHandler的connect方法
     @Override
    public void connect(
            ChannelHandlerContext ctx,
            SocketAddress remoteAddress, SocketAddress localAddress,
            ChannelPromise promise) throws Exception {
        unsafe.connect(remoteAddress, localAddress, promise);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>ChannelHandler功能说明 <ul><li>类似于Servlet的Filter过滤器，对I/O事件或者I/O操作进行拦截和处理，可以选择性地拦截和处理自己感兴趣的事件，也可以透传和终止事件的传递</li><li>基于Channel接口，用户可以方便地进行业务逻辑定制</li><li>ChannelHandler支持注解 <ul><li>Sharable：多个ChannelPipeline共用同一个ChannelHandler</li><li>Skip: 被Skip注解的方法不会被调用，直接被忽略</li></ul></li></ul></li><li>ChannelHandlerAdapter <ul><li>对于大多数ChannelHandler会选择性地拦截和处理某个或者某些事件，其他的事件会忽略，由下一个ChannelHandler进行拦截和处理，这会导致一个问题，用户必须实现ChannelHandler必须要实现ChannelHandler的所有接口，包括它并不关心的那些事件处理接口，这会导致用户代码的冗余和臃肿，代码的可维护性也会变差。Netty提供了ChannelHandlerAdapter。它的所有接口事件都是事件透传，如果用户ChannelHandler关心某个事件，只需要覆盖ChannelHandlerAdapter对应的方法即可，对于不关心的，可以直接继承使用父类方法</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    @Skip
    @Override
    public void write(ChannelHandlerContext ctx, Object msg, ChannelPromise promise) throws Exception {
        ctx.write(msg, promise);
    }

    @Skip//执行过程中会被忽略，直接跳到下一个ChannelHandler中执行对应方法
    @Override
    public void read(ChannelHandlerContext ctx) throws Exception {
        ctx.read();
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>ByteToMessageDecoder <ul><li>ByteToMessageDecoder:将ByteBuf转成业务POJO对象</li><li>用户的解码器继承ByteToMessageDecoder，只需要实现<code>void decode(ChannelHandlerContextctx,ByteBufin,List&lt;Object&gt; out)</code>抽象方法即可完成ByteBuf到POJO对象的解码</li><li>由于ByteToMessageDecoder并没有考虑到TCP粘包和组包等场景，读半包需要用户解码器自己负责处理</li></ul></li><li>MessageToMessageDecoder <ul><li>MessageToMessageDecoder将一个对象二次解码为其它对象</li><li>从SocketChannel中读取到的TCP数据报是ByteBuffer，实际就是字节数组，我们首先对需要将ByteBuffer缓冲区中的数据报读取出来，并将其解码为java对象，然后对Java对象根据某些规则做二次解码，将其解码为另一个POJO对象</li><li>用户的解码器只需要实现<code>void decode(ChannelHandlerContextctx,ByteBufin,List&lt;Object&gt; out)</code>抽象方法即可，由于它是讲一个POJO解码成另一个POJO所以一般不会涉及到半包的处理，相对于ByteToMessageDecode更简单</li></ul></li><li>LengthFieldBasedFrameDecoder源码 <ul><li>基于消息长度的半包解码器</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    @Override
    protected final void decode(ChannelHandlerContext ctx, ByteBuf in, List&lt;Object&gt; out) throws Exception {
        Object decoded = decode(ctx, in);
        if (decoded != null) {
            out.add(decoded);
        }
    }

    protected Object decode(ChannelHandlerContext ctx, ByteBuf in) throws Exception {
        if (discardingTooLongFrame) {//判断是否需要丢弃当前可读的缓冲区
            //判断需要丢弃的字节长度，由于丢弃的字节数不能大于当前缓冲区可读的字节数，所以需要通过Math.min(bytesToDiscard,in.readableBytes())函数进行选择， 取bytesToDiscard和缓冲区可读字节数之中的最小值。
            long bytesToDiscard = this.bytesToDiscard;
            int localBytesToDiscard = (int) Math.min(bytesToDiscard, in.readableBytes());
            //跳过需要忽略的字节长度
            in.skipBytes(localBytesToDiscard);
            bytesToDiscard -= localBytesToDiscard;
            this.bytesToDiscard = bytesToDiscard;
            //判断是否已经达到需要忽略的字节数，达到的话对DiscardingTooLongFrame等进行设置
            failIfNecessary(false);
        }
        //对当前缓冲区的可读字节数和长度偏移量进行对比，如果小于长度偏移量，则说明缓冲区数据报不够，需要返回空，由I/O线程继续读取后续的数据报
        if (in.readableBytes() &lt; lengthFieldEndOffset) {
            return null;
        }
        //通过读索引和lengthFieldOffset计算获取实际的长度字段索引，然后通过索引值获取消息报文的长度字段，根据字段自身的字节长度进行判断
        //长度所占字节为1，通过ByteBuf的getUnsignedByte方法获取长度值
        //长度所占字节为2，通过ByteBuf的getUngisnedShort方法获取长度值
        //长度所占字节为3，通过ByteBuf的getUngisnedMedium方法获取长度值
        //长度所占字节为4，通过ByteBuf的getUngisnedInt方法获取长度值
        //长度所占字节为8，通过ByteBuf的getLong方法获取长度值
        //其它长度不支持，抛出DecoderExcpetion异常
        int actualLengthFieldOffset = in.readerIndex() + lengthFieldOffset;
        long frameLength = getUnadjustedFrameLength(in, actualLengthFieldOffset, lengthFieldLength, byteOrder);

        //小于0 说明非法 跳过lengthFieldEndOffset个字节，抛出异常
        if (frameLength &lt; 0) {
            in.skipBytes(lengthFieldEndOffset);
            throw new CorruptedFrameException(
                    &quot;negative pre-adjustment length field: &quot; + frameLength);
        }
        //根据lengthFieldEndOffset和lengthAdjustment字段进行长度修正，如果修正后的报文长度小于lengthFieldendOffset,说明是非法数据包，抛出异常
        frameLength += lengthAdjustment + lengthFieldEndOffset;

        if (frameLength &lt; lengthFieldEndOffset) {
            in.skipBytes(lengthFieldEndOffset);
            throw new CorruptedFrameException(
                    &quot;Adjusted frame length (&quot; + frameLength + &quot;) is less &quot; +
                    &quot;than lengthFieldEndOffset: &quot; + lengthFieldEndOffset);
        }
        //如果修正后的报文长度大于ByteBuf的最大容量，说明接收到的消息长度大于系统允许的最大长度上线，需要设置discardingTooLongFrame，计算需要丢弃的字节数，根据情况选择是否需要抛出解码异常
        //丢弃的策略如下：frameLength减去ByteBuf的可读字节数就是需要丢弃的字节长度，如果需要丢弃的自己数小于缓冲区可读的字节数，则直接丢弃整包消息。如果需要丢弃的字节数大于当前的可读字节数，说明即便当前所有的可读字节数全部丢弃，也无法完成任务，则设置discardingTooLongFrame标识为true，下次解码的时候继续丢弃，丢弃完成后没调用failIfNecessary方法根据实际情况抛出异常
       
        if (frameLength &gt; maxFrameLength) {
            long discard = frameLength - in.readableBytes();
            tooLongFrameLength = frameLength;

            if (discard &lt; 0) {
                // buffer contains more bytes then the frameLength so we can discard all now
                in.skipBytes((int) frameLength);
            } else {
                // Enter the discard mode and discard everything received so far.
                discardingTooLongFrame = true;
                bytesToDiscard = discard;
                in.skipBytes(in.readableBytes());
            }
            failIfNecessary(true);
            return null;
        }

        // never overflows because it&#39;s less than maxFrameLength
        int frameLengthInt = (int) frameLength;
         //如果当前的可读字节数小于frameLength，说明是个半包消息，需要返回null，有I/O线程继续读取后续的数据包，等待下次解码
        if (in.readableBytes() &lt; frameLengthInt) {
            return null;
        }
        //对需要忽略的消息头字段进行判断，如果大于消息长度frameLength，说明码流非法，需要忽略当前的数据包，抛出异常，通过ByteBuf的skipBytes方法忽略消息头中不需要的字段，得到整包ByteBuf
        if (initialBytesToStrip &gt; frameLengthInt) {
            in.skipBytes(frameLengthInt);
            throw new CorruptedFrameException(
                    &quot;Adjusted frame length (&quot; + frameLength + &quot;) is less &quot; +
                    &quot;than initialBytesToStrip: &quot; + initialBytesToStrip);
        }
        in.skipBytes(initialBytesToStrip);

        // extract frame
        int readerIndex = in.readerIndex();
        int actualFrameLength = frameLengthInt - initialBytesToStrip;
        //通过extractFrame方法获取解码后的整包消息缓冲区
        ByteBuf frame = extractFrame(ctx, in, readerIndex, actualFrameLength);
        in.readerIndex(readerIndex + actualFrameLength);
        return frame;
    }

     private void failIfNecessary(boolean firstDetectionOfTooLongFrame) {
        if (bytesToDiscard == 0) {
            // Reset to the initial state and tell the handlers that
            // the frame was too large.
            long tooLongFrameLength = this.tooLongFrameLength;
            this.tooLongFrameLength = 0;
            discardingTooLongFrame = false;
            if (!failFast ||
                failFast &amp;&amp; firstDetectionOfTooLongFrame) {
                fail(tooLongFrameLength);
            }
        } else {
            // Keep discarding and notify handlers if necessary.
            if (failFast &amp;&amp; firstDetectionOfTooLongFrame) {
                fail(tooLongFrameLength);
            }
        }
    }

    protected long getUnadjustedFrameLength(ByteBuf buf, int offset, int length, ByteOrder order) {
        buf = buf.order(order);
        long frameLength;
        switch (length) {
        case 1:
            frameLength = buf.getUnsignedByte(offset);
            break;
        case 2:
            frameLength = buf.getUnsignedShort(offset);
            break;
        case 3:
            frameLength = buf.getUnsignedMedium(offset);
            break;
        case 4:
            frameLength = buf.getUnsignedInt(offset);
            break;
        case 8:
            frameLength = buf.getLong(offset);
            break;
        default:
            throw new DecoderException(
                    &quot;unsupported lengthFieldLength: &quot; + lengthFieldLength + &quot; (expected: 1, 2, 3, 4, or 8)&quot;);
        }
        return frameLength;
    }
    //根据消息的实际长度分配一个新的ByteBuf对象，将需要解码的ByteBuf可写缓冲区复制到新创建的ByteBuf中返回，返回之后更新原解码缓冲区ByteBuf为原读索引+消息报文的实际长度（actualFrameLength）
    protected ByteBuf extractFrame(ChannelHandlerContext ctx, ByteBuf buffer, int index, int length) {
        ByteBuf frame = ctx.alloc().buffer(length);
        frame.writeBytes(buffer, index, length);
        return frame;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>MessageToByteEncoder源码分析 <ul><li>MessageToByteEncoder将用户的POJO对象编码成ByteBuf</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    @Override
    public void write(ChannelHandlerContext ctx, Object msg, ChannelPromise promise) throws Exception {
        ByteBuf buf = null;
        try {
            //判断当前编码器是否支持需要发送的消息，不支持则直接透传，支持则判断缓冲区类型，对于直接内存分配ioBuffer，对于堆内存通过heapBuffer方法分配
            if (acceptOutboundMessage(msg)) {
                @SuppressWarnings(&quot;unchecked&quot;)
                I cast = (I) msg;
                if (preferDirect) {
                    buf = ctx.alloc().ioBuffer();
                } else {
                    buf = ctx.alloc().heapBuffer();
                }
                try {
                    //编码使用的缓冲区分配完成之后，调用encode抽象方法进行编码
                    encode(ctx, cast, buf);
                } finally {
                    //释放编码对象msg
                    //如果缓冲区包含可发送的字节，则调用ChannelHandlerContext的write方法发送ByteBuf
                    //如果缓冲区没有包含可写的字节，则需要释放编码后的ByteBuf，写入一个空的ByteBuf到ChannelhandlerContext中
                    ReferenceCountUtil.release(cast);
                }

                if (buf.isReadable()) {
                    ctx.write(buf, promise);
                } else {
                    buf.release();
                    ctx.write(Unpooled.EMPTY_BUFFER, promise);
                }
                buf = null;
            } else {
                ctx.write(msg, promise);
            }
        } catch (EncoderException e) {
            throw e;
        } catch (Throwable e) {
            throw new EncoderException(e);
        } finally {
            if (buf != null) {
                buf.release();
            }
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>MessageToMessageEncoder源码 <ul><li>MessageToMessageEncoder负责将一个POJO对象编码成另一个POJO对象</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    @Override
    public void write(ChannelHandlerContext ctx, Object msg, ChannelPromise promise) throws Exception {
        RecyclableArrayList out = null;
        try {
            if (acceptOutboundMessage(msg)) {
                //创建RecyclableArrayList对象，判断当前需要编码的对象是否是编码器可处理的类型，不是则忽略，执行ChannelHandler的write方法
                out = RecyclableArrayList.newInstance();
                @SuppressWarnings(&quot;unchecked&quot;)
                I cast = (I) msg;
                try {
                    encode(ctx, cast, out);
                } finally {
                    ReferenceCountUtil.release(cast);
                }
                //具体的编码方法实现由用户子类编码器负责完成，如果编码后的RecyclableArrayList为空，说明编码没有成功，释放RecyclableArrayList引用。
                if (out.isEmpty()) {
                    out.recycle();
                    out = null;

                    throw new EncoderException(
                            StringUtil.simpleClassName(this) + &quot; must produce at least one message.&quot;);
                }
            } else {
                ctx.write(msg, promise);
            }
        } catch (EncoderException e) {
            throw e;
        } catch (Throwable t) {
            throw new EncoderException(t);
        } finally {
            if (out != null) {
                //如果编码成功，则通过遍历RecyclableArrayList，循环发送编码后的POJO对象
                final int sizeMinusOne = out.size() - 1;
                if (sizeMinusOne &gt;= 0) {
                    for (int i = 0; i &lt; sizeMinusOne; i ++) {
                        ctx.write(out.get(i));
                    }
                    ctx.write(out.get(sizeMinusOne), promise);
                }
                out.recycle();
            }
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>LengthFieldPrepender源码分析 <ul><li>LengthFieldPrepender负责在待发送的ByteBuf消息头中增加一个长度字段标识消息的长度</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    @Override
    protected void encode(ChannelHandlerContext ctx, ByteBuf msg, List&lt;Object&gt; out) throws Exception {
        //首先对长度字段进行设置，如果需要包含消息长度自身，则在原来长度的基础之上加lengthFieldLength长度
        int length = msg.readableBytes() + lengthAdjustment;
        if (lengthIncludesLengthFieldLength) {
            length += lengthFieldLength;
        }

        if (length &lt; 0) {
            throw new IllegalArgumentException(
                    &quot;Adjusted frame length (&quot; + length + &quot;) is less than zero&quot;);
        }

        switch (lengthFieldLength) {
        case 1:
            if (length &gt;= 256) {
                throw new IllegalArgumentException(
                        &quot;length does not fit into a byte: &quot; + length);
            }
            out.add(ctx.alloc().buffer(1).writeByte((byte) length));
            break;
        case 2:
            if (length &gt;= 65536) {
                throw new IllegalArgumentException(
                        &quot;length does not fit into a short integer: &quot; + length);
            }
            out.add(ctx.alloc().buffer(2).writeShort((short) length));
            break;
        case 3:
            if (length &gt;= 16777216) {
                throw new IllegalArgumentException(
                        &quot;length does not fit into a medium integer: &quot; + length);
            }
            out.add(ctx.alloc().buffer(3).writeMedium(length));
            break;
        case 4:
            out.add(ctx.alloc().buffer(4).writeInt(length));
            break;
        case 8:
            out.add(ctx.alloc().buffer(8).writeLong(length));
            break;
        default:
            throw new Error(&quot;should not reach here&quot;);
        }
        out.add(msg.retain());
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Reactor单线程模型 <ul><li>Reactor单线程模型，是指所有的I/O操作都在同一个NIO线程上面完成，使用的是异步非阻塞I/O，理论上一个线程可以独立处理所有I/O操作。从架构层面看，一个NIO线程确实可以完成其承担的职责、</li><li>在一些小容量应用场景下，可以使用单线程模型。但是对于高负载，打并发的应用场景并不合适 <ul><li>一个NIO线程同时处理成败上千的链路，性能上无法支撑，即便NIO线程的CPU负荷达到100%，也无法瞒住海量消息的编码，解码，读取和发送</li><li>NIO线程负载过重之后，处理速度将变慢，这会导致大量客户端连接超时，超时之后往往会进行重发，加重了NIO线程的负载，最终会导致大量消息积压和处理超时吗，称为系统的性能瓶颈</li><li>可靠性问题；一旦NIO线程以外抛费，或者进入死循环，会导致整个系统通信模块不能用，不能接受和处理外部消息，造成节点故障</li></ul></li></ul></li><li>Reator多线程模型 <ul><li>有一组NIO线程处理I/O操作</li><li>有一个NIO线程Acceptor线程用于监听服务端，接受客户端的TCP连接请求</li><li>网络I/O操作---读写等由一个NIO线程池负责，包含一个任务队列和N个可用的线程，由这些NIO线程负责消息的读取，解码，编码和发送</li><li>一个NIO线程可以同时处理N条链路，但是一个链路只对应一个NIO线程，防止发送并发操作问题</li><li>在绝大多数场景下，Reactor多线程模型可以满足性能需求。但是，在个别特殊场景中，一个NIO线程负责监听和处理所有的客户端连接可能会存在心性能问题，例如并发百万客户端连接，或者服务端需要对客户端握手进行安全认证，但是认证本身非常损耗性能。在这类场景下，单独一个Acceptor线程可能会存在性能不足的问题</li></ul></li><li>主从Reactor多线程模型 <ul><li>主从Reactor线程模型的特点：服务端用于接收客户端连接不再是一个单独的NIO线程，而是一个独立的NIO线程池，Acceptor接收到客户端TCP连接请求并处理完成后（可能包含接入认证等） ，将新创建的SocketChannel注册到I/O线程池(sub reactor线程池)的某个I/O线程上，由它醋则SocketChannel的读写和编解码工作。Acceptor线程池仅仅用于客户端的登录。握手和安全认证，一旦链路建立成功，就将链路注册到后端subReactor线程池的I/O线程上，由I/O线程负责后续的I/O操作</li><li>利用主从NIO线程模型，可以解决一个服务端监听线程无法有效处理所有客户端连接的性能不足问题</li></ul></li><li>Netty线程模型 <ul><li>Netty线程模型取决于用户的启动参数配置，可以同时支持Reactor单线程模型，多线程模型和主从Reactor多线程模型</li><li>服务端启动的时候，创建了两个NioEventLoopGroup，实际是两个独立的Reactor线程池。一个用于接收客户端的TCP连接，一个用于处理I/O相关的读写操作。或者执行系统Task,定时任务Task等</li><li>Netty用于接收客户端请求的线程池职责如下 <ul><li>接收客户端TCP连接，初始化Channel参数</li><li>将链路状态变更事件通知给ChannelPipeline</li></ul></li><li>Netty处理I/O操作的Reactor线程池职责如下 <ul><li>异步读取通信对端的数据报，发送读事件到ChannelPipeline</li><li>异步发送消息到通信对端，调用ChannelPipeline的消息发送接口</li><li>执行系统调用task</li><li>执行定时任务task，例如链路空闲状态测定定时任务</li></ul></li><li>Netty的NioEventLoop读取到消息后，直接调用ChannelPipelien的fireChannelRead(Object msg).只要用户不主动切换线程，一直都是由NioEventLoop调用用户的Handler，期间不进行线程切换，这种串行化处理方式避免了多线程操作导致的锁的竞争，从性能角度看是最优的</li><li>最佳实践 <ul><li>创建两个NioEventLoopGroup，用于逻辑隔离NIOAcceptor和NIO I/O线程</li><li>尽量不要再ChannelHandler中启动用户线程（解码后用于将POJO消息派发到后端业务线程的除外）</li><li>解码要放在NIO线程调用的解码Handler中进行，不要切换到用户线程中完成消息的解码</li><li>如果业务逻辑操作非常简单，没有复杂的业务逻辑计算，没有可能会导致线程被阻塞的磁盘操作、数据库操作、网络操作等，可以直接在NIO线程上完成业务逻辑编排，不需要切换到用户线程</li><li>如果业务逻辑处理复杂，不要再NIO线程上完成，建议将解码后的POJO消息封装成Task，派发到业务线程池中由业务线程执行，以保证NIO线程尽快被释放，处理其他的I/O操作</li><li>线程数量=（线程总时间/瓶颈资源时间）x瓶颈资源的线程并行数</li><li>QPS=1000/线程总时间x线程数</li></ul></li></ul></li><li>NioEventLoop源码分析 <ul><li>NioEventLoop并不是一个纯粹的I/O线程，除负责I/O的读写之外，还兼顾以下任务 <ul><li>系统task，通过调用NioEventLoop的execute(Runnable task) 方法实现，Netty有很多系统task，创建原因是，当I/O线程和用户线程同时操作网络资源时，为了防止并发操作导致的锁竞争，将用户线程的操作封装成task放入消息队列中，由I/O线程负责执行，实现了局部无所华</li><li>定时任务，通过调用NioEventLoop的schedule(Runnable command,long delay,TimeUnit unit)实现</li></ul></li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
    private static final boolean DISABLE_KEYSET_OPTIMIZATION =
            SystemPropertyUtil.getBoolean(&quot;io.netty.noKeySetOptimization&quot;, false);
    Selector selector;
    private SelectedSelectionKeySet selectedKeys;

    private final SelectorProvider provider;

    NioEventLoop(NioEventLoopGroup parent, Executor executor, SelectorProvider selectorProvider) {
        super(parent, executor, false);
        if (selectorProvider == null) {
            throw new NullPointerException(&quot;selectorProvider&quot;);
        }
        provider = selectorProvider;
        selector = openSelector();
    }

    private Selector openSelector() {
        final Selector selector;
        try {
            selector = provider.openSelector();
        } catch (IOException e) {
            throw new ChannelException(&quot;failed to open a new selector&quot;, e);
        }
        //默认不对selectionKeys进行优化
        if (DISABLE_KEYSET_OPTIMIZATION) {
            return selector;
        }

        try {
            //如果开启了优化开关，则通过反射的方式从selector实例中获取selectedkeys和publicSelectedKeys,将上述两个成员变量设置为可写，通过反射方式使用Netty构造的selectedKeys包装类selectedKeySet将原JDK的selectedKeys替换掉
            SelectedSelectionKeySet selectedKeySet = new SelectedSelectionKeySet();

            Class&lt;?&gt; selectorImplClass =
                    Class.forName(&quot;sun.nio.ch.SelectorImpl&quot;, false, ClassLoader.getSystemClassLoader());

            // Ensure the current selector implementation is what we can instrument.
            if (!selectorImplClass.isAssignableFrom(selector.getClass())) {
                return selector;
            }

            Field selectedKeysField = selectorImplClass.getDeclaredField(&quot;selectedKeys&quot;);
            Field publicSelectedKeysField = selectorImplClass.getDeclaredField(&quot;publicSelectedKeys&quot;);

            selectedKeysField.setAccessible(true);
            publicSelectedKeysField.setAccessible(true);

            selectedKeysField.set(selector, selectedKeySet);
            publicSelectedKeysField.set(selector, selectedKeySet);

            selectedKeys = selectedKeySet;
            logger.trace(&quot;Instrumented an optimized java.util.Set into: {}&quot;, selector);
        } catch (Throwable t) {
            selectedKeys = null;
            logger.trace(&quot;Failed to instrument an optimized java.util.Set into: {}&quot;, selector, t);
        }

        return selector;
    }

    @Override
    protected void run() {
        for (;;) {
            //将wakeup还原为false，并将之前的wake up状态保存到oleWakenUp变量中
            oldWakenUp = wakenUp.getAndSet(false);
            try {
                //判断当前的消息队列中是否有消息尚未处理
                if (hasTasks()) {
                    selectNow();//立即进行select操作，看是否有准备就绪的Channel需要处理
                } else {
                    //由多路复用器轮询，看是否有准备就绪的Channel
                    select();

                    // &#39;wakenUp.compareAndSet(false, true)&#39; is always evaluated
                    // before calling &#39;selector.wakeup()&#39; to reduce the wake-up
                    // overhead. (Selector.wakeup() is an expensive operation.)
                    //
                    // However, there is a race condition in this approach.
                    // The race condition is triggered when &#39;wakenUp&#39; is set to
                    // true too early.
                    //
                    // &#39;wakenUp&#39; is set to true too early if:
                    // 1) Selector is waken up between &#39;wakenUp.set(false)&#39; and
                    //    &#39;selector.select(...)&#39;. (BAD)
                    // 2) Selector is waken up between &#39;selector.select(...)&#39; and
                    //    &#39;if (wakenUp.get()) { ... }&#39;. (OK)
                    //
                    // In the first case, &#39;wakenUp&#39; is set to true and the
                    // following &#39;selector.select(...)&#39; will wake up immediately.
                    // Until &#39;wakenUp&#39; is set to false again in the next round,
                    // &#39;wakenUp.compareAndSet(false, true)&#39; will fail, and therefore
                    // any attempt to wake up the Selector will fail, too, causing
                    // the following &#39;selector.select(...)&#39; call to block
                    // unnecessarily.
                    //
                    // To fix this problem, we wake up the selector again if wakenUp
                    // is true immediately after selector.select(...).
                    // It is inefficient in that it wakes up the selector for both
                    // the first case (BAD - wake-up required) and the second case
                    // (OK - no wake-up required).

                    if (wakenUp.get()) {
                        selector.wakeup();
                    }
                }

                cancelledKeys = 0;
                //如果轮询到了处于就绪状态的SocketChnanel，则需要处理网络I/O事件
                final long ioStartTime = System.nanoTime();
                needsToSelectAgain = false;
                if (selectedKeys != null) {
                    processSelectedKeysOptimized(selectedKeys.flip());
                } else {
                    processSelectedKeysPlain(selector.selectedKeys());
                }
                //处理完I/O事件之后，NioEventLoop需要执行非I/O操作的系统Task和定时任务
                final long ioTime = System.nanoTime() - ioStartTime;

                final int ioRatio = this.ioRatio;
                runAllTasks(ioTime * (100 - ioRatio) / ioRatio);

                if (isShuttingDown()) {
                    closeAll();//释放资源
                    if (confirmShutdown()) {
                        break;
                    }
                }
            } catch (Throwable t) {
                logger.warn(&quot;Unexpected exception in the selector loop.&quot;, t);

                // Prevent possible consecutive immediate failures that lead to
                // excessive CPU consumption.
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    // Ignore.
                }
            }
        }
    }

    void selectNow() throws IOException {
        try {
            selector.selectNow();
        } finally {
            // restore wakup state if needed
            //判断用户是否调用了selector的wakeup方法
            if (wakenUp.get()) {
                selector.wakeup();
            }
        }
    }

    private void select() throws IOException {
        Selector selector = this.selector;
        try {
            int selectCnt = 0;
            long currentTimeNanos = System.nanoTime();
            //获得定时任务的触发时间
            long selectDeadLineNanos = currentTimeNanos + delayNanos(currentTimeNanos);
            for (;;) {
                //计算下一个要触发的定时任务的剩余超时时间，将它转换成毫秒，为超时时间增加0.5毫秒的调整值
                long timeoutMillis = (selectDeadLineNanos - currentTimeNanos + 500000L) / 1000000L;
                if (timeoutMillis &lt;= 0) {
                    if (selectCnt == 0) {
                        //需要立即执行或者已经超时，则调用selectNow()进行轮询操作
                        selector.selectNow();
                        selectCnt = 1;
                    }
                    break;
                }
                //将定时任务剩余的超时时间作为参数进行select操作，每完成一次，就selectCnt加1
                int selectedKeys = selector.select(timeoutMillis);
                selectCnt ++;
                //selectedKeys != 0有Channel处于就绪状态，说明有读写事件要初七
                //wakenUp.get()系统或者用户调用了wakeup操作，唤醒当前的多路复用器
                //hasTasks()消息队列中有新任务要处理
                if (selectedKeys != 0 || oldWakenUp || wakenUp.get() || hasTasks()) {
                    // Selected something,
                    // waken up by user, or
                    // the task queue has a pending task.
                    break;
                }
                //如果本次selector的轮询结果为空，也没有wakeup操作或者是新的消息需要处理，则说明是个空轮询，有可能触发了JDK的epoll bug，会导致selector的空轮询，使I/O线程一直处于100%状态 bug-id=6403933
                //对该bug的修复策略如下
                //1.对Selector的select操作周期进行统计
                //2.每完成一次空的select操作进行一次计数
                //3.在某个周期(例如100ms)内如果连续发生N次空轮询，说明触发了bug,检测到selector处于死循环后，需要通过重建selector的方式让系统恢复正常
                if (SELECTOR_AUTO_REBUILD_THRESHOLD &gt; 0 &amp;&amp;
                        selectCnt &gt;= SELECTOR_AUTO_REBUILD_THRESHOLD) {
                    // The selector returned prematurely many times in a row.
                    // Rebuild the selector to work around the problem.
                    logger.warn(
                            &quot;Selector.select() returned prematurely {} times in a row; rebuilding selector.&quot;,
                            selectCnt);

                    rebuildSelector();
                    selector = this.selector;

                    // Select again to populate selectedKeys.
                    selector.selectNow();
                    selectCnt = 1;
                    break;
                }

                currentTimeNanos = System.nanoTime();
            }

            if (selectCnt &gt; MIN_PREMATURE_SELECTOR_RETURNS) {
                if (logger.isDebugEnabled()) {
                    logger.debug(&quot;Selector.select() returned prematurely {} times in a row.&quot;, selectCnt - 1);
                }
            }
        } catch (CancelledKeyException e) {
            if (logger.isDebugEnabled()) {
                logger.debug(CancelledKeyException.class.getSimpleName() + &quot; raised by a Selector - JDK bug?&quot;, e);
            }
            // Harmless exception - log anyway
        }
    }

    public void rebuildSelector() {
        //判断是否是其它线程发起的rebuildSelector，如果是由其它线程发起，为了避免多线程并发操作selector和其他资源，需要将rebuildSelector封装成task，放到NioEventLoop的消息队列中，由NioEventLoop线程负责调用，避免了多线程并发操作导致的线程安全问题
        if (!inEventLoop()) {
            execute(new Runnable() {
                @Override
                public void run() {
                    rebuildSelector();
                }
            });
            return;
        }

        final Selector oldSelector = selector;
        final Selector newSelector;

        if (oldSelector == null) {
            return;
        }

        try {
            newSelector = openSelector();
        } catch (Exception e) {
            logger.warn(&quot;Failed to create a new Selector.&quot;, e);
            return;
        }

        // Register all channels to the new Selector.
        //将原selector上注册的SocketChannel从旧的Selector上去注册，并重新注册到新的selector上，并将老的selector关闭
        //通过销毁旧的，有问题的多路复用器，使用新建的selector，就可以解决空轮询selector导致的I/O线程占用100%的问题
        int nChannels = 0;
        for (;;) {
            try {
                for (SelectionKey key: oldSelector.keys()) {
                    Object a = key.attachment();
                    try {
                        if (key.channel().keyFor(newSelector) != null) {
                            continue;
                        }

                        int interestOps = key.interestOps();
                        key.cancel();
                        key.channel().register(newSelector, interestOps, a);
                        nChannels ++;
                    } catch (Exception e) {
                        logger.warn(&quot;Failed to re-register a Channel to the new Selector.&quot;, e);
                        if (a instanceof AbstractNioChannel) {
                            AbstractNioChannel ch = (AbstractNioChannel) a;
                            ch.unsafe().close(ch.unsafe().voidPromise());
                        } else {
                            @SuppressWarnings(&quot;unchecked&quot;)
                            NioTask&lt;SelectableChannel&gt; task = (NioTask&lt;SelectableChannel&gt;) a;
                            invokeChannelUnregistered(task, key, e);
                        }
                    }
                }
            } catch (ConcurrentModificationException e) {
                // Probably due to concurrent modification of the key set.
                continue;
            }

            break;
        }

        selector = newSelector;

        try {
            // time to close the old selector as everything else is registered to the new one
            oldSelector.close();
        } catch (Throwable t) {
            if (logger.isWarnEnabled()) {
                logger.warn(&quot;Failed to close the old Selector.&quot;, t);
            }
        }

        logger.info(&quot;Migrated &quot; + nChannels + &quot; channel(s) to the new Selector.&quot;);
    }

    private void processSelectedKeysPlain(Set&lt;SelectionKey&gt; selectedKeys) {
        // check if the set is empty and if so just return to not create garbage by
        // creating a new Iterator every time even if there is nothing to process.
        // See https://github.com/netty/netty/issues/597
        if (selectedKeys.isEmpty()) {
            return;
        }

        Iterator&lt;SelectionKey&gt; i = selectedKeys.iterator();
        //将已经选择的选择键从迭代器中删除，防止下次被重复选择和处理
        for (;;) {
            final SelectionKey k = i.next();
            final Object a = k.attachment();
            i.remove();

            if (a instanceof AbstractNioChannel) {
                //说明是NioServerSocketChannel或者NioSocketChannel，需要进行I/O读写相关操作
                processSelectedKey(k, (AbstractNioChannel) a);//
            } else {
                @SuppressWarnings(&quot;unchecked&quot;)
                //Netty自身没有实现NioTask接口，通常情况下，系统不会执行该分支，除非用户自行注册该Task到多路复用器
                NioTask&lt;SelectableChannel&gt; task = (NioTask&lt;SelectableChannel&gt;) a;
                processSelectedKey(k, task);
            }

            if (!i.hasNext()) {
                break;
            }

            if (needsToSelectAgain) {
                selectAgain();
                selectedKeys = selector.selectedKeys();

                // Create the iterator again to avoid ConcurrentModificationException
                if (selectedKeys.isEmpty()) {
                    break;
                } else {
                    i = selectedKeys.iterator();
                }
            }
        }
    }

    private static void processSelectedKey(SelectionKey k, AbstractNioChannel ch) {
        final NioUnsafe unsafe = ch.unsafe();
        if (!k.isValid()) {
            // close the channel if the key is not valid anymore
            unsafe.close(unsafe.voidPromise());
            return;
        }

        try {
            int readyOps = k.readyOps();
            // Also check for readOps of 0 to workaround possible JDK bug which may otherwise lead
            // to a spin loop
            if ((readyOps &amp; (SelectionKey.OP_READ | SelectionKey.OP_ACCEPT)) != 0 || readyOps == 0) {
                unsafe.read();
                if (!ch.isOpen()) {
                    // Connection already closed - no need to handle write.
                    return;
                }
            }
            //如果网络操作位为写，则说明还有半包消息尚未发送完成，需要继续调用flush方法发送
            if ((readyOps &amp; SelectionKey.OP_WRITE) != 0) {
                // Call forceFlush which will also take care of clear the OP_WRITE once there is nothing left to write
                ch.unsafe().forceFlush();
            }
            //如果网络操作状态未连接状态，则需要对连接结果进行判读
            if ((readyOps &amp; SelectionKey.OP_CONNECT) != 0) {
                // remove OP_CONNECT as otherwise Selector.select(..) will always return without blocking
                // See https://github.com/netty/netty/issues/924
                int ops = k.interestOps();
                ops &amp;= ~SelectionKey.OP_CONNECT;
                //在进行finishConnect判断之前，需要将网络操作位进行修改，注销掉selectionKey.OP_CONNECT
                k.interestOps(ops);

                unsafe.finishConnect();
            }
        } catch (CancelledKeyException e) {
            unsafe.close(unsafe.voidPromise());
        }
    }
    protected boolean runAllTasks(long timeoutNanos) {
        //由于NioEventLoop需要同时处理I/O时间和非I/O任务，为了保证两者都能得到足够的CPU时间被执行，Netty提供了I/O比例供用户定制。默认值50%
        //Task的执行时间根据本次I/O操作的执行时间计算的得来
        fetchFromDelayedQueue();
        Runnable task = pollTask();
        if (task == null) {
            return false;
        }

        final long deadline = ScheduledFutureTask.nanoTime() + timeoutNanos;
        //执行Task Queue中原有的任务和从延时队列中复制的已经超时或者处于超时状态的定时任务
        long runTasks = 0;
        long lastExecutionTime;
        for (;;) {
            try {
                task.run();
            } catch (Throwable t) {
                logger.warn(&quot;A task raised an exception.&quot;, t);
            }

            runTasks ++;

            // Check timeout every 64 tasks because nanoTime() is relatively expensive.
            // XXX: Hard-coded value - will make it configurable if it is really a problem.
            //由于获取系统纳秒时间是耗时操作，每次循环都获取当前系统纳秒时间进行超时判断会降低性能，每执行60次循环判断一次，如果当前系统时间已经到了分配给非I/O操作的超时时间，则退出循环，为了防止由于非I/O任务过多导致的I/O操作被长时间阻塞
            if ((runTasks &amp; 0x3F) == 0) {
                lastExecutionTime = ScheduledFutureTask.nanoTime();
                if (lastExecutionTime &gt;= deadline) {
                    break;
                }
            }

            task = pollTask();
            if (task == null) {
                lastExecutionTime = ScheduledFutureTask.nanoTime();
                break;
            }
        }

        this.lastExecutionTime = lastExecutionTime;
        return true;
    }

    private void fetchFromDelayedQueue() {
        long nanoTime = 0L;
        for (;;) {
            ScheduledFutureTask&lt;?&gt; delayedTask = delayedTaskQueue.peek();
            if (delayedTask == null) {
                break;
            }

            if (nanoTime == 0L) {
                nanoTime = ScheduledFutureTask.nanoTime();
            }

            if (delayedTask.deadlineNanos() &lt;= nanoTime) {
                delayedTaskQueue.remove();
                taskQueue.add(delayedTask);
            } else {
                break;
            }
        }
    }

    private void closeAll() {
        selectAgain();
        Set&lt;SelectionKey&gt; keys = selector.keys();
        Collection&lt;AbstractNioChannel&gt; channels = new ArrayList&lt;AbstractNioChannel&gt;(keys.size());
        for (SelectionKey k: keys) {
            Object a = k.attachment();
            if (a instanceof AbstractNioChannel) {
                channels.add((AbstractNioChannel) a);
            } else {
                k.cancel();
                @SuppressWarnings(&quot;unchecked&quot;)
                NioTask&lt;SelectableChannel&gt; task = (NioTask&lt;SelectableChannel&gt;) a;
                invokeChannelUnregistered(task, k, null);
            }
        }

        for (AbstractNioChannel ch: channels) {
            ch.unsafe().close(ch.unsafe().voidPromise());
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Future <ul><li>java.util.concurrent.Future，用于代表异步操作的结果，可以通过get方法获取操作结构，如果操作尚未完成，则会同步阻塞当前调用线程，如果不允许阻塞太长时间或无限期阻塞，可以通过带超时时间的get方法获取结果；如果达到超时时间操作仍然没有完成，则抛出TimeoutException。通过isDone()方法可以判断当前的异步操作是否完成，如果完成，无论成功与否，都返回true，否则返回false，通过cancel可以尝试取消异步操作，结果未知，如果操作完成，或者发生其他未知的原因拒绝取消，取消操作将会失败</li><li>Netty的Future都是与异步I/O操作相关的 <ul><li>ChannelFuture addListener(GenericFutureListener&lt;? extends Future&lt;? super java.lang.Void&gt;&gt; listener)</li><li>ChannelFuture addListener(GenericFutureListener&lt;? extends Future&lt;? super java.lang.Void&gt;&gt;... listeners)</li><li>ChannelFuture await();</li><li>ChannelFuture awaitUninteruptibly()</li><li>ChannelFuture channel()</li><li>ChannelFuture removeListener(GenericFutureListener&lt;? extends Future&lt;? super java.lang.Void&gt;&gt; listener)</li><li>ChannelFuture removeListeners(GenericFutureListener&lt;? extends Future&lt;? super java.lang.Void&gt;&gt; ... listeners)</li><li>ChannelFuture sync()</li><li>ChannelFuture syncUninteruptibly()</li></ul></li></ul></li><li>在Netty中，所有的I/O操作都是异步的，ChannelFuture有两种状态uncompleted和completed。当开始一个I/O操作时，一个新的ChannelFuture被创建，此时他处于uncompleted状态：非失败，非成功，非取消，因为此时I/O操作还没有完成，一旦I/O操作完成，有三种可能：成功，失败。被取消；可以通过添加监听器的方式获取I/O操作的结果，或者进行后续相关操作。I/O操作完成之后，I/O操作线程会回调ChannelFuture三种GenericFutureListener的operationComplete方法，并吧ChannelFuture对象当作方法的入参。如果用户需要做上下文相关操作，需要把上下文信息保存到对应的ChannelFuture中</li><li>推荐使用GenericFutureListener代替ChannelFuture的get等方法的原因是，当进行一步I/O操作时，完成的时间是无法预测的，如果不设置超时时间，会导致调用线程长时间阻塞，甚至挂死，而设置超时时间，时间又无法精确预测。利用异步通知机制回调GenericFutureListener是最佳的解决方案啊，它的性能最优</li><li>不要再ChannelHandler中调用ChannelFuture的await()方法，会导致死锁，因为发起I/O操作之后，由I/O线程负责异步通知发起I/O操作的用户线程，如果I/O线程和用户线程是同一个线程，就会导致I/O线程等待自己通知操作完成，导致死锁</li><li>异步I/O操作有两类超时：一个是TCP层面的I/O超时，另一个是业务逻辑层面的操作超时。两者没有必然的；联系，但通常情况下业务逻辑超时时间应该大于I/O超时时间，两者是包含关系</li><li>ChannelFuture超时不代表I/O超时，意味着ChannelFuture超时后，如果没有关闭连接资源，随后连接依旧可能会成功，这会导致严重的问题，通常情况下，需要考虑是设置I/O超时还是ChannelFuture超时</li><li>AbstractFuture</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    @Override
    public V get() throws InterruptedException, ExecutionException {
        await();

        Throwable cause = cause();
        if (cause == null) {
            return getNow();
        }
        throw new ExecutionException(cause);
    }

    @Override
    public V get(long timeout, TimeUnit unit) throws InterruptedException, ExecutionException, TimeoutException {
        if (await(timeout, unit)) {
            Throwable cause = cause();
            if (cause == null) {
                return getNow();
            }
            throw new ExecutionException(cause);
        }
        throw new TimeoutException();
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Promise <ul><li>Promise是可写的Future，自身并没有写操作相关的接口，Netty通过Promise对Future进行扩展，用于设置I/O操作的结果。Netty发起I/O操作时，会创建一个新的Promise对象，例如调用ChannelHandlerContext的write(Object object)方法时，会创建一个新的ChannelPromise</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>  - boolean tryFailure(Throwable cause);
  - Promise&lt;V&gt; setSuccess(V result);
  - boolean setUncancellable();
  - boolean trySuccess(V result);
  - boolean tryFailure(Throwable cause);
  - Promise&lt;V&gt; sync() throws InterruptedException;
  - Promise&lt;V&gt; syncUninterruptibly();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>DefaultPromise</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    @Override
    public Promise&lt;V&gt; setSuccess(V result) {
        if (setSuccess0(result)) {
            notifyListeners();
            return this;
        }
        throw new IllegalStateException(&quot;complete already: &quot; + this);
    }

    private boolean setSuccess0(V result) {
        if (isDone()) {
            return false;
        }

        synchronized (this) {//由于可能存在I/O线程和用户线程同时操作Promise
            // Allow only once.
            if (isDone()) {
                return false;
            }
            if (result == null) {
                //说明仅仅需要notify在等待的业务线程，不包含具体的业务逻辑对象
                this.result = SUCCESS;
            } else {
                this.result = result;
            }
            //如果有正在等待异步I/O操作完成的用户线程或者其它线程，唤醒他们
            //注意notify和wait方法都必须在同步块内使用
            if (hasWaiters()) {
                notifyAll();
            }
        }
        return true;
    }

    @Override
    public Promise&lt;V&gt; await() throws InterruptedException {
        if (isDone()) {
            return this;
        }

        if (Thread.interrupted()) {
            throw new InterruptedException(toString());
        }

        synchronized (this) {
            while (!isDone()) {//防止线程被以外唤醒导致的功能异常。《Effective java》
                //由于在I/O线程中调用Promise的await或者sync方法会导致死锁，所以在循环体中需要对死锁进行保护性校验，防止I/O线程被挂死，最后调用java.lang.Object.await方法进行无限期等待，直到I/O线程调用setSuccess等方法
                checkDeadLock();
                incWaiters();
                try {
                    wait();
                } finally {
                    decWaiters();
                }
            }
        }
        return this;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Java内存模型 <ul><li>JVM规范定义了Java内存模型(Java Memory Model)来屏蔽掉各种操作系统，虚拟机实现厂商和硬件的内存访问差异，以确保Java程序在所有操作系统和平台上能够实现一次编写，到处运行的效果</li><li>工作内存和主内存 <ul><li>所有的变量都存储在主内存中（JVM内存的一部分），每个线程有自己独立的工作内存，它保存了被该线程使用的变量的主内存复制，线程对这些变量的操作都在自己的工作内存中进行， 不能直接操作主内存和其它工作内存中存储变量或者变量副本，线程间的变量访问须通过主内存完成、</li><li>java内存交互协议：java定义了8中操作来完成主内存和工作内存的变量访问 <ul><li>lock主内存变量，把一个变量表示为某个线程独占的状态</li><li>unlock 主内存变量，把一个处于锁定状态的变量释放出来，被释放后的变量才可以被其它线程锁定</li><li>read 主内存变量，把一个变量的值从主内存中传输到线程的工作内存中，一遍随后的load动作使用</li><li>load 工作内存变量，把read读取到的主内存变量放入到工作内存变量副本中</li><li>use 工作内存变量 吧工作内存中变量的值传递给java虚拟机执行引擎，每当虚拟机遇到一个需要使用到该变量值的字节码指令时，将会执行该操作</li><li>assgin 工作内存变量，把执行引擎中接收到的变量的值赋值给工作变量，每当虚拟机遇到一个给变量赋值的字节码时，就会执行该操作</li><li>store 工作内存变量 把工作内存中一个变量的值传送到主内存中，以便随后的writte操作的使用</li><li>write 主内存变量，把store操作从工作内存中得到的变量值放入主内存的变量中</li></ul></li></ul></li></ul></li><li>java线程 <ul><li>java通过单进程-多线程的模型进行多任务的并发处理，线程是比进程更加轻量级的调度执行单元，它可以把进程的资源分配和调度执行分开，各个线程可以共享内存，I/O等操作系统资源，但是又能够被操作系统的内核线程或者进程执行。各线程可以独立地启动，运行和停止，实现任务的解耦 <ul><li>内核线程(KLT)实现，由内核来完成线程的切换，内核通过线程调度器对线程进行调度，并负责将线程任务映射到不同的处理器上</li><li>用户线程(UT)实现，完全建立在用户空闲线程库上的线程，用户线程的创建，启动，运行和销毁完全在用户态中完成，不要内核帮助。性能更高</li><li>混合实现</li></ul></li></ul></li><li>wait方法用来使线程等待某个条件，它必须在同步块内部被调用，这个同步块通常会锁定当前对象实例</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    synchroized(this){
        while(condition)
            Object.wait;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>始终使用wait循环来调用wait方法，因为尽管并不满足被唤醒条件，但是由于其他线程调用notifyAll()方法会导致被阻塞的线程意外唤醒，此时执行条件并不满足，将破坏被锁保护的约定关系，导致约束失效</li><li>唤醒线程保守使用notifyAll，从优化的角度看，如果处于等待的所有线程都在等待同一个条件，而每次只有一个线程可以从这个条件中被唤醒，那么就应该选择调用notify</li><li>volatile有两个特性： <ul><li>线程可见性：当一个线程修改了被volatile修饰的变量后，无论是否枷锁，其它线程都能立即看到最新的修改</li><li>禁止指令重排序优化：保证变量赋值操作的顺序和程序代码执行顺序一致</li><li>不能保证互斥性，会产生多线程问题</li><li>最适合一个线程写，其它线程读的场合，如果多个线程并发写操作，还是需要使用锁或者线程安全的容器或原子变量代替</li></ul></li><li>互斥同步最主要的问题是进行线程阻塞和唤醒所带来的性能的额外损耗，被称为阻塞同步， 是悲观锁。乐观锁：先进行操作，完成之后再判断是否成功，是否有并发问题，有则进行失败补偿，如果没有就算操作成功，从根本上避免了同步锁的弊端，使用最广泛的非阻塞同步是CAS，通过cmpxchg指令完成</li><li>在任何情况下，程序都不能依赖JDK自带的线程优先级来保证执行顺序，比例和策略</li><li>Netty高性能原因 <ul><li>采用异步非阻塞I/O类库，基于Reactor模式实现，解决了传统同步阻塞I/O模式下一个服务端无法平滑地处理线性增长的客户端的问题</li><li>TCP接收和发送缓冲区使用直接内存代替堆内存，避免内存复制，提升了I/O读取和写入性能</li><li>支持通过内存池的方式循环利用ByteBuf，避免了频繁创建和销毁ByteBuf带来的性能损耗</li><li>可配置的I/O线程数，TCP参数等，为不同的用户场景提供定制化的调优参数，满足不同的性能场景</li><li>采用环形数组缓冲区实现无锁化并发编程，代替传统的线程安全容器或者锁</li><li>关键资源的处理使用单线程串行化的方式，避免多线程并发访问带来的锁竞争和额外CPU资源消耗问题</li><li>通过引用计数器及时地申请释放不再被引用的对象，细粒度的内存管理降低了GC的频率，减少了频繁GC带来的时延增大和CPU损耗</li></ul></li><li>Netty提供如下两种链路空闲检测机制 <ul><li>读空闲超时机制：当连续周期T没有消息可读是，触发超时Handler，用户可以基于读空闲超时发送心跳消息，进行链路检测，如果连续N个周期都没有读取到心跳消息，可以主动关闭链路</li><li>写空闲超时机制：当连续周期T没有消息要发送时吗，触发超时Handler，用户可以基于写空闲超时发送心跳消息，进行链路检测， 如果连续N个周期仍然没有接收到对方的心跳消息，可以主动关闭链路</li><li>为了满足不同用户场景的心跳定制，Netty提供了空闲状态检测事件通知机制，用户可以订阅空闲超时事件，写空闲超时事件，读或者写超时事件，在接收到对应的空闲事件之后，灵活地进行定制</li><li>优雅停机：JVM通过注册额度Shutdown Hook拦截到退出信号量，然后执行退出操作，释放相关模块的资源占用，将缓冲区消息处理完成或者清空，将待刷新的数据持久化到磁盘或者数据库中，等到资源回收和缓冲消息处理完成之后再退出</li></ul></li></ul><p>NioEventLoopGroup源码<br> EventExecutor[nThreads] children = new NioEventLoop();-&gt;selector = SelectorProvider.provider().openSelector</p><p>NioServerSocketChannel源码<br> pipeline = DefaultChannelPipeline(NioServerSocketChannel)<br> SelectableChannel ch = SelectorProvider.provider().openServerSocketChannel()</p><p>ServerBootstrap<br> group = NioEventLoopGroup(1);<br> childGroup = NioEventLoopGroup;<br> channelFactory = new ReflectiveChannelFactory(NioServerSocketChannel.class);<br> handler = handler<br> this.childHandler = childHandler</p><p>bind-&gt;doBind<br> -&gt;initAndRegister<br> -&gt;channelFactory创建NioServerSocketChannel<br> -&gt;init()<br> -&gt;register()</p><p>nThreads&gt; 0 &gt;NettyRuntime.availableProcessors()方法就可以获取当前机器处理器的核数<br> Executor&gt;null &gt;ThreadPerTaskExecutor(newDefaultThreadFactory())<br> SelectorProvider&gt;jdk()SelectorProvider.provider()<br> SelectStrategyFactory&gt;DefaultSelectStrategyFactory.INSTANCE<br> Reject RejectedExecutionHandlers.reject()<br> EventExecutor[nThreads] children = new NioEventLoop<br> NioEventLoopGroup parent EventExecutorGroup parent-&gt;NioEventLoopGroup<br> taskQueue-&gt;newTaskQueue0(DEFAULT_MAX_PENDING_TASKS)-&gt;MpscUnboundedArrayQueue<br> addTaskWakesUp-&gt;false<br> maxPendingTasks-&gt;Math.max(16,<br> SystemPropertyUtil.getInt(&quot;io.netty.eventexecutor.maxPendingTasks&quot;, Integer.MAX_VALUE))<br> rejectedExecutionHandler-&gt;RejectedExecutionHandlers.reject()<br> executor-&gt;ThreadPerTaskExecutor(newDefaultThreadFactory())<br> tailTasks-&gt;newTaskQueue0(DEFAULT_MAX_PENDING_TASKS)-&gt;MpscUnboundedArrayQueue<br> provider-&gt;jdk()SelectorProvider.provider()<br> selectStrategy-&gt;DefaultSelectStrategy.INSTANCE;<br> final SelectorTuple selectorTuple = openSelector();<br> this.selector = selectorTuple.selector;<br> this.unwrappedSelector = selectorTuple.unwrappedSelector;<br> EventExecutorChooser-&gt;PowerOfTwoEventExecutorChooser<br> readonlyChildren-&gt;Collections.unmodifiableSet(childrenSet);</p><p>ServerBootstrap源码<br> EventLoopGroup parent -&gt;bossGroup<br> EventLoopGroup childGroup-&gt; workergroup<br> ChannelFactory-&gt;ReflectiveChannelFactory-&gt; NioServerSocketChannel.class<br> options-&gt;options-&gt;ChannelOption.SO_BACKLOG，100<br> ChannelHandler-&gt;xxxHandler<br> childHandler-&gt;xxxxHandler</p><p>channel-&gt;ChannelFactory-&gt;NioServerSocketChannel-&gt;openServerSocketChannel()<br> NioMessageUnsafe<br> DefaultChannelPipeline()<br> -&gt;DefaultChannelHandlerContext</p><p>DefaultChannelPipeline<br> private PendingHandlerCallback pendingHandlerCallbackHead;pendingHandlerCallbackHead链表,延迟处理器</p>`,154),r=[d];function a(t,v){return n(),i("div",null,r)}const o=e(s,[["render",a],["__file","netty.html.vue"]]),b=JSON.parse('{"path":"/backend/server/netty.html","title":"Netty","lang":"zh-CN","frontmatter":{"title":"Netty","date":"2023-01-01T00:00:00.000Z","tags":"Netty","categories":"后端","description":"linux网络I/O模型(对于操作系统而言，底层支持异步I/O通信) linux的内核将所有外部设备都看作一个文件来操作，对文件的读写操作会调用内核提供的系统命令，返回一个file descriptor(fd，文件描述符)。而对一个socket的读写也会有相应的描述符，成为socketfd(socket描述符)，描述符就是一个数字，它只想内核中的一个结...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/server/netty.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"Netty"}],["meta",{"property":"og:description","content":"linux网络I/O模型(对于操作系统而言，底层支持异步I/O通信) linux的内核将所有外部设备都看作一个文件来操作，对文件的读写操作会调用内核提供的系统命令，返回一个file descriptor(fd，文件描述符)。而对一个socket的读写也会有相应的描述符，成为socketfd(socket描述符)，描述符就是一个数字，它只想内核中的一个结..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Netty\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":168.31,"words":50493},"filePathRelative":"backend/server/netty.md","localizedDate":"2023年1月1日","excerpt":"<!-- more -->\\n<ul>\\n<li>linux网络I/O模型(对于操作系统而言，底层支持异步I/O通信)\\n<ul>\\n<li>linux的内核将所有外部设备都看作一个文件来操作，对文件的读写操作会调用内核提供的系统命令，返回一个file descriptor(fd，文件描述符)。而对一个socket的读写也会有相应的描述符，成为socketfd(socket描述符)，描述符就是一个数字，它只想内核中的一个结构体（文件路径，数据区等一个些属性）</li>\\n<li>根据UNIX网络编程对I/O模型的分类，UNIX提供了5中I/O模型\\n<ul>\\n<li>阻塞I/O模型:缺省情形下，所有文件的操作都是阻塞的。以套接字接口为例：在进程空间中调用recvfrom，其系统调用直到数据包到达且被复制到应用进程的缓冲区中或者发生错误时才返回，在此期间一直会等待，进程在从调用recvfrom开始到它返回的争端时间内都是被阻塞的</li>\\n<li>非阻塞I/O模型:recvfrom从应用层到内核的时候，如果该缓冲区没有数据的话，就直接返回一个EWOULDBLIOCK错误，一般都对非阻塞I/O模型进行轮询检查这个状态，看内核是不是又数据到来</li>\\n<li>I/O复用模型:linux提供select/poll，进程通过将一个或多个fd传递给select或epoll系统调用，阻塞在select操作上，这样select/poll可以检测到多个fd是否处于就绪状态，select/poll是顺序扫描fd是否就绪，而且支持的fd数量有限。linux还提供了一个epoll系统调用，epoll使用基于时间驱动方式代替顺序扫描，性能更高。当有fd就绪是，就立即回调函数rollback</li>\\n<li>信号驱动I/O模型:首先开启套接扣信号驱动I/O功能，并通过系统调用sigaction执行一个信号处理函数（此系统调用立即返回，进程继续工作，非阻塞）。当数据准备就绪时，就为该进程生成一个SIGIO信号，通过信号回调通知应用程序调用recvfrom来读取数据，并通知主循环函数处理数据。</li>\\n<li>异步I/O:告知内核启动某个操作，并让内核在整个操作完成后（包括将数据从内核复制到用户自己的缓冲区）通知调用者，与信号驱动模型的主要区别是：信号驱动I/O有内核通知我们什么时候开始I/O操作，而异步I/O模型这由内核通知我们I/O操作何时完成</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li>I/O多路复用技术\\n<ul>\\n<li>通过把多个I/O的阻塞复用到同一个select的阻塞上，从而使得系统在单线程的情况下可以同时处理多个客户端需求，与传统的多线程/多进程模型相比，I/O多路复用的最大优势是系统开销小，系统不需要创建新的额外进程或者线程。也不需要维护这些进程和线程的运行，降低了系统的苇湖梁，节省系统资源</li>\\n<li>I/O复用的主要应用场景：服务器需要同时处理多个处于监听状态或者多个连接状态的套接字，多种网络协议的套接字</li>\\n<li>目前支持I/O多路复用的系统调用有select，pselect，poll，epoll，epoll新特性\\n<ul>\\n<li>支持一个进程的socket描述符（FD）不受限制（仅受限于操作系统的最大文件句柄数）：select最大的缺陷是单个进程所打开的FD是有一定限制的，它由FD_SETSIZE设置，默认1024。可以选择修改这个宏然后重新编译内核，但这回带来网络效率的下降。也可以选择多进程的方案（Apache），但创建进程需要付出一定代价，而且进程之间的数据交换非常麻烦。对于没有共享内存的java，需要通过socket通信或者其它方式进行数据同步，带来额外的性能消耗，增加了程序复杂度。1GB内存的机器上大约10万个句柄左右</li>\\n<li>I/O效率不会随着FD数目的增加而线性下降:传统的select/poll另一个致命弱点就是当你拥有一个很大的socket集合，由于网络延时或者链路空闲，在任一时刻只有少部分的socket是\\"活跃\\"的，但是select/poll每次调用都会现行扫描全部的集合，导致效率呈现线性下降。而内核实现中epoll是根据每个fd上面的callback函数实现的，只有活跃的socket才会主动调用callback函数，其它的idle状态socket则不会。epoll实现了一个伪AIO</li>\\n<li>使用mmap加速内核与用户空间的消息传递:无论select，poll还是epoll都需要内核把FD消息通知给用户空间，如何避免不必要的内存复制就显得非常重要，epoll是通过内核和用户控件mmap同一块内存实现</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li>NIO入门\\n<ul>\\n<li>传统的同步阻塞BIO编程:采用BIO通信模型的服务端，通常由一个独立的Acceptor线程负责监听客户端的连接，它接收到客户端连接请求之后未每个客户端创建一个新的线程进行链路处理，处理完成之后，通过输出流返回应答给客户端，线程销毁（典型的已请求一应答通信模型）。该模型最大的问题是当客户端并发访问量增加后，服务端的线程个数和客户端并发访问数成1:1正比关系，并发量很大是，系统会发生线程堆栈溢出、创建新线程失败等问题，导致进程宕机或僵死，不能对外提供服务。</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{o as comp,b as data};
