import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as r,c as s,b as t,d as e,e as o,a as i}from"./app-Cw8r8IGg.js";const d={},c=i('<p>socket</p><ul><li><a href="#1-tcpip%E5%8D%8F%E8%AE%AE%E7%BB%93%E6%9E%84transmission-control-protocalinternet-protoal-%E4%BC%A0%E8%BE%93%E6%8E%A7%E5%88%B6%E5%8D%8F%E8%AE%AE">1. TCP/IP协议结构(Transmission Control Protocal/Internet Protoal 传输控制协议)</a></li><li><a href="#2-ip%E5%9C%B0%E5%9D%80%E5%8F%8A%E5%85%B6%E4%BD%BF%E7%94%A8">2. IP地址及其使用</a></li><li><a href="#3-%E7%AB%AF%E5%8F%A3%E5%8F%B7%E5%8F%8A%E5%85%B6%E4%BD%BF%E7%94%A8">3. 端口号及其使用</a></li><li><a href="#4-inetaddress%E7%B1%BB%E5%B0%81%E8%A3%85%E4%BA%86ip%E5%9C%B0%E5%9D%80%E7%AD%89%E4%BF%A1%E6%81%AF">4. InetAddress类（封装了IP地址等信息）</a></li><li><a href="#5-udp%E5%8D%8F%E8%AE%AEuser-datagram-protocol%E7%94%A8%E6%88%B7%E6%95%B0%E6%8D%AE%E6%8A%A5%E5%8D%8F%E8%AE%AE%E6%97%A0%E8%BF%9E%E6%8E%A5%E9%80%9A%E4%BF%A1%E5%8D%8F%E8%AE%AE">5. UDP协议(User Datagram Protocol用户数据报协议/无连接通信协议)</a></li><li><a href="#6-tcptransmission-control-protocol%E4%BC%A0%E8%BE%93%E6%8E%A7%E5%88%B6%E5%8D%8F%E8%AE%AE%E9%9D%A2%E5%90%91%E8%BF%9E%E6%8E%A5%E7%9A%84%E9%80%9A%E4%BF%A1%E5%8D%8F%E8%AE%AE">6. TCP(Transmission Control Protocol传输控制协议/面向连接的通信协议)</a></li><li><a href="#7-tcp%E5%8D%8F%E8%AE%AE%E5%92%8Cudp%E5%8D%8F%E8%AE%AE%E7%9A%84%E5%BC%82%E5%90%8C">7. TCP协议和UDP协议的异同</a></li></ul><h1 id="_1-tcp-ip协议结构-transmission-control-protocal-internet-protoal-传输控制协议" tabindex="-1"><a class="header-anchor" href="#_1-tcp-ip协议结构-transmission-control-protocal-internet-protoal-传输控制协议"><span>1. TCP/IP协议结构(Transmission Control Protocal/Internet Protoal 传输控制协议)</span></a></h1><ul><li>应用层：主要负责应用程序的协议，例如HTTP协议、FTP协议、DNS协议等。</li><li>传输层：主要使网络程序进行通信，在进行网络通信时，采用TCP协议/UDP协议</li><li>网络层：整个TCP/IP协议核心，将传输的数据进行分组并将分组数据发送到目标计算机或者网络IP、ICMP、IOMP协议</li><li>链路层：定义物理传输通道，通常是对某些网络连接设备的驱动协议，例如针对光纤、网线提供的驱动程序和接口</li></ul><h1 id="_2-ip地址及其使用" tabindex="-1"><a class="header-anchor" href="#_2-ip地址及其使用"><span>2. IP地址及其使用</span></a></h1><ul><li>唯一标识网络中的计算机标示号，可指定接受或连接计算机或者发送数据的计算机</li><li>广泛使用的是IPv4版本，由4个字节的二进制数表示，为了方便写成十进制，</li><li>每个字节用一个十进制数字（0-255）表示，数字间用“.”表示</li><li>IPv4地址枯竭，诞生了IPv6，用16个字节表示IP地址</li></ul><h1 id="_3-端口号及其使用" tabindex="-1"><a class="header-anchor" href="#_3-端口号及其使用"><span>3. 端口号及其使用</span></a></h1><ul><li>访问计算机的应用程序的标识号</li><li>用两个字节表示（16位的二进制数2的16次方表示：0-65535）</li><li>0-1023的端口用于知名网络服务，普通程序使用1024以上的端口号</li><li>一个端口只能访问一个应用程序，被占用就不行</li></ul><h1 id="_4-inetaddress类-封装了ip地址等信息" tabindex="-1"><a class="header-anchor" href="#_4-inetaddress类-封装了ip地址等信息"><span>4. InetAddress类（封装了IP地址等信息）</span></a></h1>',9),p={href:"http://www.baidu.com",target:"_blank",rel:"noopener noreferrer"},u=t("li",null,"static InetAddress getLocalHost()返回本地主机",-1),E=t("li",null,"String getHostName()获取此IP地址的主机名",-1),m=t("li",null,"String getHostAddress()返回IP地址字符串(以文本表现形式)182.61.34.226",-1),v=i(`<h1 id="_5-udp协议-user-datagram-protocol用户数据报协议-无连接通信协议" tabindex="-1"><a class="header-anchor" href="#_5-udp协议-user-datagram-protocol用户数据报协议-无连接通信协议"><span>5. UDP协议(User Datagram Protocol用户数据报协议/无连接通信协议)</span></a></h1><ul><li><p>数据传输时，数据的发送端和接收端不建立逻辑连接。</p></li><li><p>当一台计算机向另外一台计算机发送数据时，发送端不会确认接收端是否存在，就会发出数据，</p></li><li><p>同样接收端在收到数据时，也不会向发送端反馈是否收到数据</p></li><li><p>UDP协议消耗资源小，通信效率高，传输速度快，通常用于音频、视频和普通数据的传输例如视频会议都使用UDP协议，</p></li><li><p>因为这种情况即使偶尔丢失一两个数据包，也不会对接收结果产生太大影响</p></li><li><p>在使用UDP协议传送数据时，由于UDP的面向无连接性，不能保证数据的完整性，因此在传输重要数据时不建议使用UDP协议</p></li><li><p>DatagramPacket类 数据报包：封装UDP通信中发送或者接收的数据</p><ul><li>DatagramPacket(byte[] buf,int length)//用于接收端，不需要明确来源，只需接受数据即可</li><li>DatagramPacket(byte[] buf,int length，inetAddress address，int port)//用于发送端，发送端必须指定接收端的ip地址和 端口号，该端口号必须与接收端DatagramSocket创建对象时的端口号相同才能通信</li><li>byte[] getData()返回数据缓冲区(对应构造)</li><li>int getLength()返回将要发送或接收到的数据的长度</li><li>InetAddress getAddress()返回数据来源机器或者将要发给的机器的IP地址</li><li>int getPort()返回数据来源机器或者将要发给的机器的端口号，对应发送端的构造方法参数</li></ul></li><li><p>DatagramSocket类数据报套接字类：发送和接收DatagramPacket数据包</p><ul><li>DatagramSocket()创建发送端的DatagramSocket对象,并绑定到任何可用端口</li><li>DatagramSocket(int port)一般用于接受端以指定接收端的监听端口号，但也可用于发送端绑定到指定的端口</li><li>void receive(DatagramPacket p)从此套接字接收数据报包</li><li>void send(DataramPacket p)从此套接字发送数据报包</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	UDP发送端
	public class UDPSend {
	public static void main(String[] args) throws IOException {
		DatagramSocket sendSocket = new DatagramSocket();
		byte[] buffer = &quot;hello,UDP&quot;.getBytes();
		DatagramPacket dp = new DatagramPacket(buffer, buffer.length, 
		InetAddress.getByName(&quot;192.168.75.58&quot;), 12306);
		sendSocket.send(dp);
		sendSocket.close();
	}
	}
	UDP接收端
	public class UDPReceive {
		public static void main(String[] args) throws IOException {
			DatagramSocket receiveSocket = new DatagramSocket(12306);
			byte[] buffer = new byte[1024];
			DatagramPacket dp = new DatagramPacket(buffer, 1024);
			receiveSocket.receive(dp);
			InetAddress ipAddress = dp.getAddress();
			String ip = ipAddress.getHostAddress();//获取到了IP地址
			byte[] data = dp.getData();	//发来了什么数据  getData()
			int length = dp.getLength();	//发来了多少数据 getLenth()
			String dataStr = new String(data,0,length);	//显示收到的数据
			System.out.println(&quot;IP地址：&quot;+ip+ &quot;数据是&quot;+ dataStr);
			receiveSocket.close();		//5,释放流资源
		}
	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_6-tcp-transmission-control-protocol传输控制协议-面向连接的通信协议" tabindex="-1"><a class="header-anchor" href="#_6-tcp-transmission-control-protocol传输控制协议-面向连接的通信协议"><span>6. TCP(Transmission Control Protocol传输控制协议/面向连接的通信协议)</span></a></h1><ul><li><p>传输数据前发送端和接收端建立逻辑连接再传输数据(可靠无差错的数据传输)</p></li><li><p>TCP连接由客户端向服务端发出连接请求，每次创建连接都经过“三次握手”</p></li><li><p>第一次握手，客户端向服务器端发出连接请求，等待服务器确认，</p></li><li><p>第二次握手，服务器端向客户端回送一个响应，通知客户端收到了连接请求，</p></li><li><p>第三次握手，客户端再次向服务器端发送确认信息，确认连接。</p></li><li><p>通信时，首先创建代表服务器端ServerSocket对象，相当于开启一个服务，并等待客户端的连接</p></li><li><p>然后创建代表客户端Socket对象向服务器端发出连接请求，服务器端响应请求</p></li><li><p>两者建立连接开始通信，客户端和服务器端是通过IO流进行交互的</p></li><li><p>由于TCP协议的面向连接特性，它可以保证传输数据的安全性和稳定性，被广泛采用</p></li><li><p>例如在下载或上传文件时，如果数据接收不完整，将会导致文件数据丢失而不能被打开，因此，下载或上传文件时必须采用TCP协议。</p></li><li><p>ServerSocket服务器端</p><ul><li>ServerSocket(int port)创建绑定到特定端口的服务器套接字</li><li>Socket accept()监听并接收到此套接字的连接、通过不同socket辨别不同计算机</li><li>InetAddress getInetAddress()返回此服务器套接字的本地地址</li><li>ServerSocket对象负责监听某台计算机的某个端口号，在创建ServerSocket对象后，</li><li>需要继续调用该对象的accept()方法，接收来自客户端的请求。当执行了accept()方法之后，</li><li>服务器端程序会发生阻塞，直到客户端发出连接请求，accept()方法才会返回一个Scoket对象用于和客户端实现通信，程序才能继续向下执行</li></ul></li><li><p>Socket客户端</p><ul><li>Socket(String host,int port)将Socket连接到指定主机上的指定端口号（常用）</li><li>Socket(InetAddress address,int port)将Socket连接到指定IP上的指定端口号。一旦创建马上连接，连接不到就报错</li><li>int getPort()返回一个int类型对象，该对象是Socket对象与服务器端连接的端口号</li><li>InetAddress getLocalAddress()获取Socket对象绑定的本地IP地址，并封装成InetAddress</li><li>void close()关闭Socket连接，关闭socket前，应将与socket相关的所有输入/输出流关闭</li><li>InputStream getInputStream()返回调用者的InputStream 对象并执行相应操作</li><li>OutputStream getOutputStream()返回调用者的InputStream 对象并执行相应操作</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	TCP 服务器端
	public class TCPServer {
		public static void main(String[] args) throws IOException {
			ServerSocket ss = new ServerSocket(8888);
			Socket s = ss.accept();
			//要读取s中传递的数据，s.getInputstream是取得s输入的字符
			InputStreamReader isr=new InputStreamReader(s.getInputStream());
			BufferedReader br=new BufferedReader(isr);
			//读取br中的字符，读取一个文本行
			String info=br.readLine();
			System.out.println(&quot;服务器接收到:\\t&quot;+info);
			//true是及时更新数据的意思	s.getOutputstream是取得s输出的字
			PrintWriter pw=new PrintWriter(s.getOutputStream(),true);
			pw.println(&quot;我是服务器，已收到你发送的信息!&quot;);	
		}
	}
	TCP 客户端
	public class TCPClient {
		public static void main(String[] args) throws IOException {
			//Socket()就是去连接某个服务器端 127.0.0.1表示服务器的ip 9999是服务器的端口号
			Socket s=new Socket(&quot;127.0.0.1&quot;,9999);

			//如果s连接成功，就可以发送数据到服务器端
			//我们通过pw向s写数据,true表示即时刷新
			PrintWriter pw=new PrintWriter(s.getOutputStream(),true);
			pw.println(&quot;你好吗？我是客户端&quot;);
			//要读取s中传递的数据
			InputStreamReader isr=new InputStreamReader(s.getInputStream());
			BufferedReader br=new BufferedReader(isr);
			String info=br.readLine();
			System.out.println(&quot;接收到服务器：\\t&quot;+info);
		}
	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_7-tcp协议和udp协议的异同" tabindex="-1"><a class="header-anchor" href="#_7-tcp协议和udp协议的异同"><span>7. TCP协议和UDP协议的异同</span></a></h1><ul><li>TCP通信同UDP通信一样，都能实现两台计算机之间的通信，通信的两端都需要创建socket对象</li><li>UDP中只有发送端和接收端，不区分客户端与服务器端，计算机之间可以任意地发送数据 <ul><li>TCP中是严格区分客户端与服务器端的，在通信时，必须先由客户端去连接服务器端才能实现通信</li><li>服务器端不可以主动连接客户端，并且服务器端程序需要事先启动，等待客户端的连接</li></ul></li><li>UDP协议传输速度快,效率高,资源消耗少,但会丢失数据;TCP协议传输安全稳定,不丢失数据</li></ul>`,8);function A(P,b){const n=l("ExternalLinkIcon");return r(),s("div",null,[c,t("ul",null,[t("li",null,[e('static InetAddress getByName(String host)在给定主机名的情况下确定主机的IP地址，主机名如"'),t("a",p,[e("www.baidu.com"),o(n)]),e('"')]),u,E,m]),v])}const D=a(d,[["render",A],["__file","socket.html.vue"]]),S=JSON.parse('{"path":"/backend/java/socket.html","title":"socket","lang":"zh-CN","frontmatter":{"title":"socket","date":"2023-01-01T00:00:00.000Z","tags":"socket","categories":"后端","description":"socket 1. TCP/IP协议结构(Transmission Control Protocal/Internet Protoal 传输控制协议) 2. IP地址及其使用 3. 端口号及其使用 4. InetAddress类（封装了IP地址等信息） 5. UDP协议(User Datagram Protocol用户数据报协议/无连接通信协议) 6....","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/java/socket.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"socket"}],["meta",{"property":"og:description","content":"socket 1. TCP/IP协议结构(Transmission Control Protocal/Internet Protoal 传输控制协议) 2. IP地址及其使用 3. 端口号及其使用 4. InetAddress类（封装了IP地址等信息） 5. UDP协议(User Datagram Protocol用户数据报协议/无连接通信协议) 6...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"socket\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":8.28,"words":2485},"filePathRelative":"backend/java/socket.md","localizedDate":"2023年1月1日","excerpt":"<p>socket</p>\\n<!--more-->\\n<!-- TOC -->\\n<ul>\\n<li><a href=\\"#1-tcpip%E5%8D%8F%E8%AE%AE%E7%BB%93%E6%9E%84transmission-control-protocalinternet-protoal-%E4%BC%A0%E8%BE%93%E6%8E%A7%E5%88%B6%E5%8D%8F%E8%AE%AE\\">1. TCP/IP协议结构(Transmission Control Protocal/Internet Protoal 传输控制协议)</a></li>\\n<li><a href=\\"#2-ip%E5%9C%B0%E5%9D%80%E5%8F%8A%E5%85%B6%E4%BD%BF%E7%94%A8\\">2. IP地址及其使用</a></li>\\n<li><a href=\\"#3-%E7%AB%AF%E5%8F%A3%E5%8F%B7%E5%8F%8A%E5%85%B6%E4%BD%BF%E7%94%A8\\">3. 端口号及其使用</a></li>\\n<li><a href=\\"#4-inetaddress%E7%B1%BB%E5%B0%81%E8%A3%85%E4%BA%86ip%E5%9C%B0%E5%9D%80%E7%AD%89%E4%BF%A1%E6%81%AF\\">4. InetAddress类（封装了IP地址等信息）</a></li>\\n<li><a href=\\"#5-udp%E5%8D%8F%E8%AE%AEuser-datagram-protocol%E7%94%A8%E6%88%B7%E6%95%B0%E6%8D%AE%E6%8A%A5%E5%8D%8F%E8%AE%AE%E6%97%A0%E8%BF%9E%E6%8E%A5%E9%80%9A%E4%BF%A1%E5%8D%8F%E8%AE%AE\\">5. UDP协议(User Datagram Protocol用户数据报协议/无连接通信协议)</a></li>\\n<li><a href=\\"#6-tcptransmission-control-protocol%E4%BC%A0%E8%BE%93%E6%8E%A7%E5%88%B6%E5%8D%8F%E8%AE%AE%E9%9D%A2%E5%90%91%E8%BF%9E%E6%8E%A5%E7%9A%84%E9%80%9A%E4%BF%A1%E5%8D%8F%E8%AE%AE\\">6. TCP(Transmission Control Protocol传输控制协议/面向连接的通信协议)</a></li>\\n<li><a href=\\"#7-tcp%E5%8D%8F%E8%AE%AE%E5%92%8Cudp%E5%8D%8F%E8%AE%AE%E7%9A%84%E5%BC%82%E5%90%8C\\">7. TCP协议和UDP协议的异同</a></li>\\n</ul>","autoDesc":true}');export{D as comp,S as data};
