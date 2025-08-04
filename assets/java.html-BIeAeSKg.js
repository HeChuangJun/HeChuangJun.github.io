import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o as d,c as r,a as e,b as t,d as l,e as i}from"./app-7KT7HDzT.js";const c={},u=i(`<p>java</p><h1 id="java概述" tabindex="-1"><a class="header-anchor" href="#java概述"><span>java概述</span></a></h1><ul><li>java是用来编写互联网(电商、P2P)和企业级应用(ERP、CRM、BOS、OA)等软件的一门面向对象编程语言</li><li>java跨平台(操作系统:Windows\\Linux\\Mac)特性:一次编写后在任意操作系统上运行，依赖虚拟机JVM（java Virtual Machine）实现</li><li>Java语言采用Unicode编码标准，Unicode（标准码），它为每个字符制订了一个唯一的数值</li><li>jdk1.5之后的三大版本 <ul><li>Java SE（J2SE，Java 2 Platform Standard Edition，标准版）桌面、服务器、嵌入式环境</li><li>Java EE（J2EE，Java 2 Platform Enterprise Edition，企业版）提供 Web 服务、组件模型、管理和通信 API</li><li>Java ME（J2ME，Java 2 Platform Micro Edition，微型版）移动设备和嵌入式设备</li></ul></li></ul><h1 id="java开发环境的搭建" tabindex="-1"><a class="header-anchor" href="#java开发环境的搭建"><span>java开发环境的搭建</span></a></h1><ul><li>java开发环境概述（java程序运行需要的环境） <ul><li>JDK：java Development Kit，程序员的电脑上安装JDK；JDK包含JRE</li><li>JRE：java Runtime Environment，java运行环境，用户在电脑上安装JRE即可</li></ul></li><li>java程序运行过程 <ul><li>java源代码-&gt;编译器-&gt;jvm可执行的java字节码(即虚拟指令)-&gt;jvm-&gt;jvm中解析器-&gt;机器可执行的二进制机器码-&gt;程序运行</li></ul></li><li>编写HelloWorld程序 <ul><li>编写java源代码文件:用记事本新建文件并命名为HelloWorld.java（类名必须与源文件名称完全相同）</li><li>编译：通过jvm编译器把源文件编译成字节码文件(扩展名为.class) <ul><li>编译器：JDK目录下的bin目录javac.exe</li><li>编译命令为：D:\\develop\\java\\jdk1.7.0_72\\bin\\javac.exe D:\\java\\HelloWorld.java</li><li>编译之后会在源文件同目录下生成字节码文件，字节码文件的扩展名为.class</li><li>编译时控制台上不会有输出，如果有输出说明源代码有错误</li></ul></li><li>运行：使用解释器来运行字节码文件 <ul><li>D:\\develop\\java\\jdk1.7.0_72\\bin\\java.exe HelloWord 在运行HelloWorld.class文件时不能给出“.class”，切记！！！</li></ul></li><li>解释器运行过程： <ul><li>查找classpath下面的所有的class文件，从根目录开始，解释器获取包的名称并将每个句点替换成反斜杠，以从classpath根中产生路径名称，得到的路径会与classpath中的各个不同的项相连接，解释器就在这些目录中查找与你所要创建的类名称相关的.class文件</li></ul></li><li>查看字节码文件 <ul><li>D:\\develop\\java\\jdk1.7.0_72\\bin\\javap.exe –c HelloWord 在运行HelloWorld.class文件时不能给出“.class”，切记！！！</li></ul></li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class HelloWorld {
    public static void main(String[] args) {
        System.out.println(&quot;HelloWorld&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置java环境变量（减少输入JDK的bin目录的麻烦） <ul><li>在DOS控制台中使用的程序只给出程序名称，而没有给出完整路径时，Windows系统会到Path变量保存的路径中查找程序 <ul><li>鼠标右键点击计算机→属性→高级系统设置→环境变量→系统变量中的Path→编辑，将JDK安装目录\\bin路径配置到PATH变量中，用英文分号与其他变量隔开</li><li>编译：D:&gt;javac HelloWorld.java</li><li>运行：D:&gt;java HelloWorld</li></ul></li></ul></li></ul><h1 id="注释、关键字与标识符" tabindex="-1"><a class="header-anchor" href="#注释、关键字与标识符"><span><code>注释、关键字与标识符</code></span></a></h1><ul><li><p>程序注释:对源码进行解释说明的文字, //单行注释、/*多行注释*/、/**文档注释**/</p></li><li><p>关键字:被赋予特殊含义，具有专门用途的均为小写的单词,public等|</p></li><li><p>标识符:类、方法、变量、包、接口名,组成元素 a-zA-Z、0-9、_与$</p><ul><li>规则:数字不能开头、不可以使用关键字、严格区分大小写，见名知意</li><li>命名规范 <ul><li>包名：多单词组成时所有字母均小写，使用.连接aaa.bbb.ccc</li><li>类名&amp;接口名：大驼峰式AaaBbbCcc</li><li>变量名&amp;方法名：小驼峰式aaaBbbCcc</li><li>常量名：多单词组成是所有字母均大写，使用_连接AAA_BBB_CCC</li><li>表名&amp;字段名&amp;视图名&amp;存储过程: 小写字母或者数字+下划线</li></ul></li></ul></li><li><p>查看注释文档 D:\\java\\jdk1.7.0_72\\bin\\javadoc.exe –c HelloWord.java</p></li></ul><h1 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型"><span><code>数据类型</code></span></a></h1><ul><li>数据类型数据范围从小到大：byte -&gt; short -&gt; int -&gt; long -&gt; float -&gt; double</li><li>范围小的数据类型值（如byte），可以直接转换为范围大的数据类型值（如int）</li><li>范围大的数据类型值（如int），不可以直接转换为范围小的数据类型值（如byte）</li><li>多种类型数据混合运算时，系统自动将所有数据转换成容量最大的那一种数据类型再计算</li><li>数据类型转换（布尔值除外）不同类型的变量可以在一起运算，但要先进行类型转换再运算 <ul><li>自动类型转换:范围小的数据类型转换成范围大的数据类型 格式:范围大的数据类型 变量 = 范围小的数据类型值</li><li>强制类型转换:范围大的数据类型转换成范围小的数据类型 格式:范围小的数据类型 变量 = (范围小的数据类型) 范围大的数据类型值，</li></ul></li><li>基本数据类型存储在堆栈中，对象存储在堆中</li><li>成员变量时上述数据类型才有默认值，局部变量没有</li></ul><h1 id="直接常量和变量" tabindex="-1"><a class="header-anchor" href="#直接常量和变量"><span>直接常量和变量</span></a></h1><table><thead><tr><th style="text-align:center;">直接常量(不变的数据量)数据类型</th><th style="text-align:center;">举例（字符均指汉字数字和字母）</th></tr></thead><tbody><tr><td style="text-align:center;">整数类型</td><td style="text-align:center;">二进制：以0零b(0B)开头 如0b1011 、0B1001</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">八进制：以0开头 如01、07、0721</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">十进制：正常数字 如 13、25等</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">十六进制：以0x(0X)开头,数字以0-9及A-F组成,如0x23A2、0xa、0x10</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">其他进制到十进制：把系数*基数的权次幂相加即可。</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">十进制到其他进制转换：除基取余，直到商为0，最后，余数反转就是结果</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">整数常量根据所在范围来确定类型、默认的整数类型是int类型</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">添加了“L”后缀的整数常量都是long类型</td></tr><tr><td style="text-align:center;">浮点类型</td><td style="text-align:center;">1.0、-3.15、3.168等</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">无后缀以及使用“D”后缀的小数都是double类型(默认的浮点类型)</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">float类型常量必须添加“F”后缀，默认的浮点类型是double类型</td></tr><tr><td style="text-align:center;">字符类型</td><td style="text-align:center;">字符必须使用’’ 包裹，并且其中只能且仅能包含一个字符</td></tr><tr><td style="text-align:center;">布尔类型</td><td style="text-align:center;">true、false</td></tr><tr><td style="text-align:center;">字符串类型String(引用类型)</td><td style="text-align:center;">字符串必须使用&quot;&quot;包裹，可以包含0~N个字符</td></tr></tbody></table><ul><li>变量:内存中装载数据的小盒子，用来存数据和取数据</li><li>定义变量：数据类型 变量名 = 数据值；</li><li>变量定义后可以不赋值，使用时再赋值。不赋值不能使用</li><li>变量不可以重复定义</li><li>变量使用时有作用域的限制</li></ul><h1 id="原码、反码、补码-看计算机组成原理" tabindex="-1"><a class="header-anchor" href="#原码、反码、补码-看计算机组成原理"><span>原码、反码、补码（看计算机组成原理）</span></a></h1><ul><li>原码：二进制数的有符号表示法，即最高位为符号位，</li><li>反码：A：正数 与原码相同B：负数 符号位不变，数值位按位取反，0变1,1变0</li><li>补码：A：正数 与原码相同B：负数 反码加1。</li></ul><h1 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符"><span>运算符</span></a></h1><ul><li>运算符是用来计算数据的符号。数据为常量或变量。被运算符操作的数我们称为操作数。</li><li>String与其他基本数据类型相加，会将其他类型转换为String再拼接</li><li>如果对char、byte、short类型进行移位处理，那么在移位进行之前，会先转成int，结果也是int。</li><li>int只有数值右端的低5位有效，防止溢出，因为2的5次方为32，int类型只有32位，同理，long只有6位</li></ul><table><thead><tr><th style="text-align:center;">运算符</th><th style="text-align:center;">举例</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">算术运算符</td><td style="text-align:center;">-(减、负号)、*、+(正、加号、连接字符串)</td><td style="text-align:center;">加法运算符在连接字符串时只有直接与字符串相加才会转成字符串</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">%(取模)</td><td style="text-align:center;">小数取余没有意义。结果符号与被取余符号相同</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">/</td><td style="text-align:center;">均为整数则取整舍余，当其中一边为浮点型则按正常规则相除。除数不为0</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">++(自增)--(自减)</td><td style="text-align:center;">单独使用，不参与运算操作时，运算符前后位置导致的运算结果一致</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">后置时运算后才自增/减1，前置则运算前自增/减1</td></tr><tr><td style="text-align:center;">赋值运算符</td><td style="text-align:center;">+=、-=、*=、/=、%=</td><td style="text-align:center;">将结果自动强转成等号左边的数据类型,左边必须是变量</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">=</td><td style="text-align:center;">将=符号右边的值，赋值给=符号左边的变量</td></tr><tr><td style="text-align:center;">比较运算符</td><td style="text-align:center;">!=、&lt;、&gt;、&lt;=、&gt;=</td><td style="text-align:center;">返回布尔值，判断两个操作数的大小关系及是否相等关系</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">==</td><td style="text-align:center;">比较左右基本数字类型的变量值或者引用数据类型的变量的内存地址是否相等</td></tr><tr><td style="text-align:center;">逻辑运算符</td><td style="text-align:center;">&amp;(与)、¦(或)、</td><td style="text-align:center;">连接两个其他表达式计算后的布尔值结果，并求出布尔值结果</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">&amp;&amp;(短路与)、¦¦(短路或)</td><td style="text-align:center;">只要能判断出结果则后边的部分就不再判断</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">逻辑非!</td><td style="text-align:center;">将true变false，false变true</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">异或^：</td><td style="text-align:center;">左右两边条件结果相同，结果就为false，否则true</td></tr><tr><td style="text-align:center;">三元运算符</td><td style="text-align:center;">(条件表达式)？表达式1：表达式2；</td><td style="text-align:center;">条件表达式的值若为true，结果为表达式1；否则为表达式2</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">System.out.println( 3&gt;2 ? “正确” : “错误” );</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">int a = 3;int b = 4;String result = (a==b) ? “相等” : “不相等”;</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">int n = (3&gt;2 &amp;&amp; 4&gt;6) ? 100 : 200;</td></tr><tr><td style="text-align:center;">按位操作符</td><td style="text-align:center;">&amp;(按位与)</td><td style="text-align:center;">仅当两个操作数都为1时。输出结果才为1。否则为0</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">¦(按位或)</td><td style="text-align:center;">仅当两个操作数都为0时，输出的结果才为0。</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">~(取反)</td><td style="text-align:center;">将各位数字取反：全部的0置为1，1置为0</td></tr><tr><td style="text-align:center;">移位操作符</td><td style="text-align:center;">^(异或)</td><td style="text-align:center;">仅当两个操作数不同一时候。对应的输出结果才为1，否则为0</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">&lt;&lt;</td><td style="text-align:center;">左移就是把一个数的全部位数都向左移动若干位，低位补0，乘以2的n次幂</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">&gt;&gt;</td><td style="text-align:center;">右移就是把一个数的全部位数都向右移动若干位，若正数，高位插入0，否则插入1，除以2的n次幂</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">&gt;&gt;&gt;</td><td style="text-align:center;">无符号右移一位。无论正负都在高位插入0</td></tr></tbody></table><table><thead><tr><th style="text-align:center;">运算符优先级</th><th style="text-align:center;">描述</th><th style="text-align:center;">运算符</th><th style="text-align:center;">优先级</th><th style="text-align:center;">描述</th><th style="text-align:center;">运算符</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:center;">括号</td><td style="text-align:center;">()、[]</td><td style="text-align:center;">9</td><td style="text-align:center;">按位与</td><td style="text-align:center;">&amp;</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:center;">正负号</td><td style="text-align:center;">+、-</td><td style="text-align:center;">10</td><td style="text-align:center;">按位异或</td><td style="text-align:center;">^</td></tr><tr><td style="text-align:center;">3</td><td style="text-align:center;">自增自减，非</td><td style="text-align:center;">++、--、!</td><td style="text-align:center;">11</td><td style="text-align:center;">按位或</td><td style="text-align:center;">|</td></tr><tr><td style="text-align:center;">4</td><td style="text-align:center;">乘除，取余</td><td style="text-align:center;">*、/、%</td><td style="text-align:center;">12</td><td style="text-align:center;">逻辑与</td><td style="text-align:center;">&amp;&amp;</td></tr><tr><td style="text-align:center;">5</td><td style="text-align:center;">加减</td><td style="text-align:center;">+、-</td><td style="text-align:center;">13</td><td style="text-align:center;">逻辑或</td><td style="text-align:center;">||</td></tr><tr><td style="text-align:center;">6</td><td style="text-align:center;">移位运算</td><td style="text-align:center;">&lt;&lt;、&gt;&gt;、&gt;&gt;&gt;</td><td style="text-align:center;">14</td><td style="text-align:center;">条件运算</td><td style="text-align:center;">?:</td></tr><tr><td style="text-align:center;">7</td><td style="text-align:center;">大小关系</td><td style="text-align:center;">&gt;、&gt;=、&lt;、&lt;=</td><td style="text-align:center;">15</td><td style="text-align:center;">赋值运算</td><td style="text-align:center;">=、+=、-=、*=、/=、%=</td></tr><tr><td style="text-align:center;">8</td><td style="text-align:center;">相等关系</td><td style="text-align:center;">==、!=</td><td style="text-align:center;">16</td><td style="text-align:center;">位赋值运算</td><td style="text-align:center;">&amp;=、|=、&lt;&lt;=、&gt;&gt;=、&gt;&gt;&gt;=</td></tr></tbody></table><h1 id="流程控制" tabindex="-1"><a class="header-anchor" href="#流程控制"><span>流程控制</span></a></h1><h2 id="顺序结构" tabindex="-1"><a class="header-anchor" href="#顺序结构"><span>顺序结构</span></a></h2><h2 id="选择结构" tabindex="-1"><a class="header-anchor" href="#选择结构"><span>选择结构</span></a></h2><ul><li>选择结构if</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	if语句判断条件是一个布尔值，当判断条件为true时，{}中的执行语句才会执行
		if (条件语句){ 
			执行语句;
			……
		}
	if…else语句指如果判断条件为true时，就进行某种处理，否则就进行另一种处理
		if (判断条件){
			执行语句1
			……
		}else{
			执行语句2
			……
		}//与三元运算符功能相似
	if…else if…else语句所有条件均未满足，else后面{}中的执行语句n+1会执行
		if (判断条件1) {
			执行语句1
		} else if (判断条件2) {
			执行语句2
		}
		...
		else if (判断条件n) {
			执行语句n
		} else {
			执行语句n+1
		}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>选择结构switch：if…else if…else语句来实现，但是由于判断条件比较多，实现起来代码过长，不便于阅读</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	switch (表达式){//表达式的值为byte、short、int、char、enum枚举、String
	case 目标值1:
		执行语句1
		break;
	case 目标值2:
	case 目标值3:
		执行语句2//多个条件满足
		break;
	．．．．．．
	case 目标值n:
		执行语句n
		break;
	default:
		执行语句n+1
		break;
	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="循环结构-迭代" tabindex="-1"><a class="header-anchor" href="#循环结构-迭代"><span>循环结构（迭代）</span></a></h2><ul><li>循环语句while：反复进行条件判断，条件成立，{}内的执行语句就会执行，直到条件不成立，while循环结束</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	while(循环条件表达式){//循环体
		执行语句...
		控制条件表达式;
	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>循环语句do…while：循环体会无条件执行一次，然后再根据循环条件来决定是否继续执行</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	do {
		执行语句………
		控制条件表达式;
	} while(循环条件表达式);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>循环语句for：一般用在循环次数已知的情况下</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>	for（初始化表达式; 循环条件; 操作表达式）{//1,243,243
		执行语句
		………
	}
	for(数据类型 变量名 : 遍历的变量){
		执行语句
	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>无限循环:while(true){} 或for(;😉{} ：无限循环存在的原因是并不知道循环多少次，而是根据某些条件，来控制循环</li><li>循环嵌套:在一个循环语句的循环体中再定义一个循环语句的语法结构</li></ul><h2 id="跳转语句" tabindex="-1"><a class="header-anchor" href="#跳转语句"><span>跳转语句</span></a></h2><ul><li>break语句 <ul><li>在switch条件语句中时，终止某个case并跳出switch结构</li><li>在循环语句中，作跳出本层循环语句，执行后面的代码</li><li>标记：当break语句出现在嵌套循环中的内层循环时，它只能跳出内层循环，</li><li>如果想使用break语句结束嵌套循环则需要对外层循环添加标签（后面跟有冒号的标识符） XXX：然后break XXX</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public static void main(String[] args) {
    ok:
    for (int i = 0; i &lt; 10; i++) {
        for (int j = 0; j &lt; 10; j++) {
            System.out.println(&quot;i=&quot; + i + &quot;,j=&quot; + j);
            if (j == 5) {
                break ok;
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>continue语句：终止本次循环，执行下一次循环；可以通过使用标记的方式结束本次嵌套循环，用法与break语句相似</li></ul><h1 id="数组" tabindex="-1"><a class="header-anchor" href="#数组"><span>数组</span></a></h1><ul><li>数组（长度固定，数组中存储的元素的数据类型要求一致）</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>|分类|说明|代码|
|:-:|:-:|:-:|
|一维数组|定义|动态初始化（定义数组时只指定数组长度，由系统自动为元素赋初值）|
|||数据类型[] 数组名 = new 数据类型[数组长度];|
|||静态初始化（定义数组时为元素赋值）|
|||类型[] 数组名 = new 类型[]{元素，元素，……};|
|||类型[] 数组名 = {元素，元素，元素，……};(建议)|
||访问|数组名[索引]、数组名[索引] =值、数组名.length|	
||遍历|for (int i = 0; i &lt; arr.length; i++) {System.out.println(arr[i]);}|
||最值|int max=arr[0];for(int x=1;x&lt;arr.length;x++){if(arr[x] &gt; max){max = arr[x];}}|
|二维数组|定义|int[][] arr = new int[m][n]|
|||m:二维数组中一维数组的个数,n:每个一维数组中元素的个数int[][] arr = new int[3][];|
|||每一个一维数组通过赋值来确定数组长度int[][] arr = &amp;#123;&amp;#123;1,2&amp;#125;,&amp;#123;3,4,5,6&amp;#125;,&amp;#123;7,8,9&amp;#125;&amp;#125;|
||访问|数组名[索引][索引]、数组名[索引][索引]=值、数组名.length|
||遍历|for(int i=0;i&lt;arr2.length;i++){for(int j=0;j&lt;arr2[i].length;j++){System.out.println(arr2[i][j]);}}|
|数组异常||NullPointerException变量引用数组时，变量的值必须是数组对象，不能为null
|||ArrayIndexOutOfBoundsException访问数组的元素时，索引不能超出0~length-1范围|
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="可变参数-object-args" tabindex="-1"><a class="header-anchor" href="#可变参数-object-args"><span>可变参数：(Object... args)</span></a></h1><h1 id="类与对象" tabindex="-1"><a class="header-anchor" href="#类与对象"><span>类与对象</span></a></h1><ul><li>类是对某一类事物的抽象描述，类用于描述多个对象的共同特征，它是对象的模板。</li><li>对象用于表示现实中该类事物的个体，它是类的实例</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[public] [abstract] class 类名{
    访问修饰符 [static] [final] 数据类型 变量名(s);//变量

    访问修饰符 [abstract|static]  [void/返回值] 方法名([参数类型 参数名])//参数列表//成员[静态]方法
    [{//局部代码块
        [执行语句………;]
        [return 返回值;]
    }](s);

    访问修饰符 类名{}(s);//构造方法

    {}(s);//构造代码块
    
    static{}(s);//静态代码块
    
    内部类(s);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>成员方法 <ul><li>形式参数：方法定义中参数列表的变量、实际参数：调用方法时，传入给方法的数值</li><li>当传入的数值为基本数据类型（包含String类型），传递的是变量的值</li><li>当传入的数值为引用数据类型（String类型除外），传递的是变量的地址</li><li>有返回值方法调用:①单独调用②输出调用③赋值调用、无返回值类型的方法调用方式：单独调用</li></ul></li><li>构造方法 <ul><li>构造方法名称必须和类型保持一致、想让其他程序无法创建该类的对象，则用private修饰</li><li>构造方法默认第一条语句为super();用来访问父类中的空参数构造方法，进行父类成员的初始化操作</li><li>super(参数) 与 this(参数) 不能同时在构造方法中存在</li><li>默认先执行父类的构造方法，再执行子类的构造方法</li></ul></li><li>局部代码块{}:定义在方法中的代码块,用来限制变量的作用范围</li><li>构造代码块{}:定义在类中方法外的代码块、创建对象时只执行一次，用于对象成员初始化、优先于构造方法执行</li><li>静态代码块static{}:定义在类中方法外使用static修饰的代码块、被加载时执行一次，用于给静态变量赋值、类静态成员初始化赋值。优于主方法、构造代码块执行</li><li>finalize()方法：一旦垃圾回收器准备好释放对象占用的存储空间，会先调用器finalize()方法，并且在下一次垃圾回收动作发生时，才会真正回收对象占用的内存 <ul><li>有时，若分配内存时采用类类似C语言中的做法，即调用本地方法时需要来释放内存，但不要滥用</li></ul></li></ul><h2 id="匿名对象" tabindex="-1"><a class="header-anchor" href="#匿名对象"><span>匿名对象</span></a></h2><ul><li>创建对象时，只有创建对象的语句，却没有把对象地址值赋值给某个变量 new 类名([参数]);</li><li>只能使用一次、可作为方法接收的参数、方法返回值使用</li></ul><h1 id="转型" tabindex="-1"><a class="header-anchor" href="#转型"><span>转型</span></a></h1><ul><li>向上转型:当有子类对象赋值给一个父类引用（多态） <ul><li>方法传参可以定义为父类，实际参数可以传子类</li><li>父类类型 变量名 = (父类类型) 子类类型的变量</li><li>好处：隐藏了子类类型，提高了代码的扩展性</li><li>弊端：只能使用父类共性的内容，而无法使用子类特有功能</li></ul></li><li>向下转型：一个已经向上转型的子类对象可以使用强制类型转换,将父类引用转为子类引用 <ul><li>如果是直接创建父类对象，是无法向下转型的！</li><li>子类类型 变量名 = (子类类型) 父类类型的变量</li><li>好处：可以使用子类特有功能</li><li>弊端：需要面对具体的子类对象；容易发生ClassCastException类型转换异常。在转换之前必须做类型判断</li></ul></li><li>当不需要面对子类类型时，通过提高扩展性，或者使用父类的功能就能完成相应的操作 当要使用子类特有功能时，就需要使用向下转型</li></ul><h1 id="抽象类-基础功能-与接口-扩展功能" tabindex="-1"><a class="header-anchor" href="#抽象类-基础功能-与接口-扩展功能"><span>抽象类（基础功能）与接口（扩展功能）</span></a></h1><ul><li>抽象类：被abstract关键字修饰的类是抽象类，定义了抽象方法的类 <ul><li>抽象类可以不定义抽象方法。但抽象方法一定要定义在抽象类中，含有抽象方法的类一定是抽象类</li><li>抽象类不可以直接创建对象，原因：调用抽象方法没有意义</li><li>只有覆盖了抽象类中所有抽象方法后，其子类才可以创建对象。否则该子类还是一个抽象类</li><li>抽象类都是父类，因为不断抽取而来的。</li><li>抽象类的存在的意义是为了不让该类创建对象,方法可以直接让子类去使用</li><li>abstract不可以和private、final、static共存</li><li>子类：抽象方法的实现类、抽象类</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>abstract class 类名 {
    [public abstract 返回值类型 方法名(参数);(s)]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>接口：功能的集合，是比抽象类更为抽象的”类”，只包含了功能声明的特殊类 <ul><li>优点：将功能的声明与实现分离，优化了程序设计，解耦</li><li>接口避免了单继承的局限性。父类中定义的事物的基本功能，接口中定义的事物的扩展功能</li><li>接口不可以创建对象，可通过多态的方式，由子类来创建对象，接口多态</li><li>子类必须覆盖掉接口中所有的抽象方法后，子类才可以实例化。否则子类是一个抽象类</li><li>解决了多继承时，当多个父类中有相同功能时，子类调用产生的不确定性。因为没有接口方法体</li><li>接口与类关系 class 类 implements 接口1,接口2 {}</li><li>接口与接口关系 interface Zi extends Fu1,Fu2,Fu3{}</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public interface 接口名{
    [public static final] A_B=值;//常量，接口变量，不可被修改
    [public abstract] 返回值类型 方法名(数据类型 变量名(s));//抽象方法
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="成员变量和局部变量区别" tabindex="-1"><a class="header-anchor" href="#成员变量和局部变量区别"><span>成员变量和局部变量区别</span></a></h1><table><thead><tr><th style="text-align:center;">项目</th><th style="text-align:center;">成员变量</th><th style="text-align:center;">局部变量</th></tr></thead><tbody><tr><td style="text-align:center;">定义的位置</td><td style="text-align:center;">类中的变量</td><td style="text-align:center;">方法中或者{}语句里面的变量</td></tr><tr><td style="text-align:center;">内存中的位置</td><td style="text-align:center;">堆内存的对象中</td><td style="text-align:center;">栈内存的方法中</td></tr><tr><td style="text-align:center;">生命周期</td><td style="text-align:center;">随着对象的出现而出现在堆中，随着对象的消失而从堆中消失</td><td style="text-align:center;">随着方法的运行而出现在栈中，随着方法的弹栈而消失</td></tr><tr><td style="text-align:center;">初始化</td><td style="text-align:center;">有默认的初始化值</td><td style="text-align:center;">必须手动的给其赋值才可以使用。</td></tr><tr><td style="text-align:center;">作用域</td><td style="text-align:center;">针对整个类有效</td><td style="text-align:center;">只在某个范围内有效。(方法,语句体内)</td></tr></tbody></table><h1 id="包的声明与访问" tabindex="-1"><a class="header-anchor" href="#包的声明与访问"><span>包的声明与访问</span></a></h1><ul><li>类中声明的包必须与实际class文件所在的文件夹情况相一致，否则，程序运行时会找不到类</li><li>类中包的声明：package 包名.包名.包名…; 必须在程序的第一行</li><li>包名采用全部小写字母，多层包之间用”.”连接</li><li>带有包的类创建对象：包名.类名 变量名 = new包名.类名();</li><li>导包：import 包名.类名; import 包名.*;(导入包内所有类)在声明包package后，定义所有类class前</li><li>同一个包中的类（同一个文件夹中），或者java.lang包中类时可以省略包名，直接使用该类</li><li>类用public修饰，则类名必须与文件名相同。一个文件中只能有一个public修饰的类</li></ul><h1 id="常见关键字-小写" tabindex="-1"><a class="header-anchor" href="#常见关键字-小写"><span>常见关键字(小写)</span></a></h1><ul><li>this <ul><li>指向当前对象指针，创建对象的时候就存在</li><li>调用本类对象构造方法：this([参数列表]);必须定义在构造方法的第一行，因为初始化动作要最先执行</li><li>调用本类对象一般方法：方法名([参数列表])或this.方法名([参数列表])</li><li>成员变量名前面加上this.区别成员变量和局部变量</li></ul></li><li>super <ul><li>指向直接父类的指针</li><li>调用父类变量：super.变量名</li><li>调用父类构造方法：super([实参列表])</li><li>调用父类方法：super.方法名([实参列表])</li><li>如果我们没写任何的构造方法，编译器提供给我们一个空参数构造方法</li><li>如果我们手动给出了构造方法，编译器不会在给我们提供默认的空参数构造方法</li><li>子类继承父类中的内容,必须先调用父类的构造方法进行初始化，故子类中所有构造方法有默认的隐式super();故父类的构造方法会先执行</li><li>如果默认的隐式super()在父类中没有对应的构造方法，那么必须在构造方法中通过this或者super的形式明确要调用的构造方法</li></ul></li><li>final <ul><li>类、变量或方法不想被继承、修改、重写，可以重载</li><li>但是可以继承其他类,可以覆盖其他方法时加上final</li><li>修饰的变量称为常量，只能赋值一次，必须在创建对象前赋值、没有显式赋值时，多个构造方法都要为其赋值</li><li>修饰引用类型的变量值为对象地址值，地址值不能更改、但是地址内的对象属性值可以修改</li><li>final成员变量 <ul><li>类变量static修饰的变量：直接赋值或者静态代码块中赋值</li><li>实例变量：声明变量直接赋初值，非静态初始化块、构造器中赋初值</li></ul></li><li>final局部变量 <ul><li>如果final局部变量已经进行了初始化则后面就不能再次进行更改，如果final变量未进行初始化，可以进行赋值，当且仅有一次赋值</li></ul></li><li>final方法参数</li><li>final方法： <ul><li>确保继承中使方法行为保持不变，而且不会被覆盖</li><li>效率，编译器将针对该方法的所有调用转为内嵌调用，跳过插入程序代码的方式而执行方法调用机制（将参数压入栈，跳至方法代码处执行，然后跳回并清理栈中的参数，处理返回值），并且以方法体中的实际代码的副本替代方法调用，消除方法的开销</li></ul></li></ul></li><li>static <ul><li>无需创建对象，独立于对象存在，多个对象共享</li><li>类的加载的时候只执行一次（性能优化），不能使用this/super</li><li>静态修饰的内容（方法、变量）存于静态区,同一个类中，静态成员只能访问静态成员，但非静态成员能访问静态成员</li><li>调用：类名.静态成员变量名\\类名.静态成员方法名(参数)</li><li>静态常量public static final 数据类型 AA_BB = 值</li><li>main方法为静态方法仅为程序执行入口，不属于任何一个对象，可以定义在任意类中</li></ul></li><li>instanceof <ul><li>判断某个对象是否属于某种数据类型,boolean b = 对象 instanceof 数据类型</li></ul></li></ul><h1 id="常用类api" tabindex="-1"><a class="header-anchor" href="#常用类api"><span>常用类api</span></a></h1><ul><li>api：Application(应用) Programming(程序) Interface(接口) <ul><li>java API就是jdk中提供给我们使用的类，这些类将底层的代码实现封装了起来</li><li>源码：JDK安装目录的src.zip</li></ul></li></ul><h2 id="scanner" tabindex="-1"><a class="header-anchor" href="#scanner"><span>Scanner</span></a></h2>`,65),v={href:"http://xn--System-9m7iy0fo4hxp2m.in",target:"_blank",rel:"noopener noreferrer"},o=e("li",null,"int nextInt(); 接收控制台录入的数字",-1),p=e("li",null,"String next(); 接收控制台录入的字符串",-1),b=i(`<h2 id="random" tabindex="-1"><a class="header-anchor" href="#random"><span>Random</span></a></h2><ul><li>Random()</li><li>int nextInt(int maxValue)产生[0,maxValue)范围的随机整数</li><li>double nextDouble() 产生[0,1)范围的随机小数</li></ul><h2 id="object-所有类的父类" tabindex="-1"><a class="header-anchor" href="#object-所有类的父类"><span>Object:所有类的父类</span></a></h2><ul><li>boolean equals(Object obj)比较两个对象是否相同（默认使用==比较地址）经常需要复写它根据对象属性判断对象是否相同</li><li>String toString()返回该对象的字符串(包名.类名+@+内存地址值) 经常重写得到相应的字符串表现形式</li><li>int hashCode()返回哈希码 <ul><li>为什么要有 hashCode？当你把对象加入 HashSet 时，HashSet 会先计算对象的 hashcode 值来判断对象加入的位置，同时也会与其他已经加入的对象的 hashcode 值作比较，如果没有相符的hashcode，HashSet会假设对象没有重复出现。但是如果发现有相同 hashcode 值的对象，这时会调用 equals()方法来检查 hashcode 相等的对象是否真的相同。如果两者相同，HashSet 就不会让其加入操作成功。如果不同的话，就会重新散列到其他位置。大大减少了 equals 的次数，相应就大大提高了执行速度。</li><li>如果两个对象相等，则hashcode一定也是相同的，两个对象有相同的hashcode值，它们也不一定是相等的</li><li>equals 方法被覆盖过，则 hashCode 方法也必须被覆盖。hashCode() 的默认行为是对堆上的对象产生独特值。如果没有重写 hashCode()，则该 class 的两个对象无论如何都不会相等（即使这两个对象指向相同的数据）</li><li>对象的相等 比的是内存中存放的内容是否相等而 引用相等 比较的是他们指向的内存地址是否相等</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//equals复写例子
class Person extends Object{
	int age ;
	//复写父类的equals方法，实现自己的比较方式
	public boolean equals(Object obj) {
		//判断当前调用equals方法的对象和传递进来的对象是否是同一个
		if(this == obj){
			return true;
		}
		//判断传递进来的对象是否是Person类型
		if(!(obj instanceof Person)){
			return false;
		}
		//将obj向下转型为Perosn引用，访问其属性
		Person p = (Person)obj;
		return this.age == p.age;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="date-dateformat-simpledateformat-calendar" tabindex="-1"><a class="header-anchor" href="#date-dateformat-simpledateformat-calendar"><span>Date,DateFormat,SimpleDateFormat,Calendar</span></a></h2><ul><li><p>Date()系统当前日期时间，表示特定的瞬间，精确到毫秒</p></li><li><p>Date(long date)1970年1月1日0点，加上date毫秒值对应的日期时间</p></li><li><p>long getTime()返回自1970年1月1日00:00：GMT以来此Date对象表示的毫秒数</p></li><li><p>DateFormat与语言环境无关的方式格式化并解析日期或时间的抽象类</p></li><li><p>SimpleDateFormat</p><ul><li>SimpleDateFormat()默认的格式化操作，可以字符串与Date对象相互转换</li><li>SimpleDateFormat(String pattern)替换”yyyy-MM-dd-HH-mm-ss-SS”剩余内容原样输出</li><li>String format(Date date) 把日期格式化成字符串</li><li>Date parse(String source)将字符串转成日期</li></ul></li><li><p>Calendar</p><ul><li>static Calendar getInstance();使用默认时区和语言环境获得一个日历</li><li>abstract void add(int field,int amount)指定字段增加某值12345</li><li>int get(int field)返回给定日历字段的值 field是指Calendar.YEAR/MONTH/DATE/HOUR/MINUTE/SECOND</li><li>final void set(int field,int value)设置指定字段的值</li><li>final Date getTime()获取该日历对象转成的日期对象</li><li>西方星期的开始为周日，中国为周一</li><li>在Calendar类中，月份的表示是以0-11代表1-12月</li></ul></li></ul><h2 id="system" tabindex="-1"><a class="header-anchor" href="#system"><span>System</span></a></h2><ul><li>不能手动创建对象因为构造方法被private修饰，阻止外界创建对象</li><li>long currentTimeMillis()当前系统时间与1970年01月01日00:00点的毫秒差值</li><li>void exit(int status)用来结束正在运行的Java程序。0正常退出</li><li>void gc()用来运行JVM中的垃圾回收器，完成内存中垃圾的清除</li><li>String getProperty(String key)用来获取指系统属性信息（自己查表）</li><li>从指定源数组中复制一个数组复制从指定位置开始到目标数组指定位置结束</li><li>void arrarycopy(Object src,int srcPog,Object dest,int destPes,int length</li></ul><h2 id="math" tabindex="-1"><a class="header-anchor" href="#math"><span>Math</span></a></h2><ul><li>Static double abs(double a)绝对值</li><li>Static double ceil(double a)结果为比参数值大的最小整数的double值</li><li>Static double floor(double a)结果为比参数值小的最大整数的double值</li><li>Static double max(double a,double b)返回两个参数值中较大的值</li><li>Static double min(double a,double b)返回两个参数值中较小的值</li><li>Static double pow(double a,double b)返回第一个参数的第二个参数次幂的值</li><li>Static double random()产生一个大于等于0.0且小于1.0的double小数</li></ul><h2 id="arrays" tabindex="-1"><a class="header-anchor" href="#arrays"><span>Arrays</span></a></h2><ul><li>Static void sort(int[] a)对指定数组中的元素进行排序（元素值从小到大进行排序）</li><li>Static void binarySearch(int[] a,int key)在指定的有序数组中，返回元素的位置或-1</li><li>Static String toString(int[] a)返回指定数组元素内容的字符串形式</li></ul><h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties"><span>Properties</span></a></h2><ul><li>持久的属性集。可保存在流中或从流中加载</li><li>Hashtable的子类，键值都是字符串键值可以存储到集合或文件中,来源也可以是文件</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>- void load(InputStream in)把指定流所对应的文件中的数据读取并保存到Propertie集合中
- void load(Reader)按面向行的格式从输入字符流中读取属性列表（键和元素对）
- void store(OutputStream out,String commonts)commonts代表对描述信息，无实际意义
- void store(Writer writer,String comments);与load(Reader)方法对应
- Object setProperty(String key, String value)调用 Hashtable 的方法 put。
- String getProperty(String key)用指定的键在此属性列表中搜索属性
- Set&lt;String&gt; stringPropertyNames()返回此属性列表中的键集，
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="resourcebundle" tabindex="-1"><a class="header-anchor" href="#resourcebundle"><span>ResourceBundle</span></a></h2><ul><li>static ResourceBundle getBundle(String fileNmae)获得ResourceBundle对象</li><li>getString(String key)获得properties文件中键对应的值</li></ul><h1 id="正则表达式-regular-expression" tabindex="-1"><a class="header-anchor" href="#正则表达式-regular-expression"><span>正则表达式：Regular Expression</span></a></h1><ul><li>用来定义匹配规则，匹配一系列符合某个句法规则的字符串。用于检索、替换那些符合某个规则的文本</li><li>Pattern类</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class RegexExample1{
   public static void main(String[] args){
      String content = &quot;I am noob &quot; +
        &quot;from runoob.com.&quot;;
 
      String pattern = &quot;.*runoob.*&quot;;
 
      boolean isMatch = Pattern.matches(pattern, content);
      System.out.println(&quot;字符串中是否包含了 &#39;runoob&#39; 子字符串? &quot; + isMatch);
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:center;">正则表达式</th><th style="text-align:center;">含义</th><th style="text-align:center;">匹配规则</th><th style="text-align:center;">匹配的字符串内容</th></tr></thead><tbody><tr><td style="text-align:center;">x</td><td style="text-align:center;">字符x</td><td style="text-align:center;">a</td><td style="text-align:center;">a</td></tr><tr><td style="text-align:center;">\\|反斜线字符|\\||</td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">\\t</td><td style="text-align:center;">制表符</td><td style="text-align:center;">\\t</td><td style="text-align:center;">产生一个制表符的空间</td></tr><tr><td style="text-align:center;">\\n</td><td style="text-align:center;">换行符</td><td style="text-align:center;">\\n</td><td style="text-align:center;">换行,光标在原有位置的下一行</td></tr><tr><td style="text-align:center;">\\r</td><td style="text-align:center;">回车符</td><td style="text-align:center;">\\r</td><td style="text-align:center;">产生回车后的效果,光标来到下一行行首</td></tr><tr><td style="text-align:center;">[abc]</td><td style="text-align:center;">字符a、b或c</td><td style="text-align:center;">[abc]</td><td style="text-align:center;">字符a，或者字符b，或字符c的一个</td></tr><tr><td style="text-align:center;">[^abc]</td><td style="text-align:center;">除了a、b、c以外的任何字符</td><td style="text-align:center;">[^abc]</td><td style="text-align:center;">不是字符a，或者不是字符b，或不是字符c的任意一个字符</td></tr><tr><td style="text-align:center;">[a-zA-Z]</td><td style="text-align:center;">a 到 z 或 A 到 Z，两头的字母包括在内</td><td style="text-align:center;">[a-zA-Z]</td><td style="text-align:center;">一个大写或者小写字母</td></tr><tr><td style="text-align:center;">[0-9]或者\\d</td><td style="text-align:center;">0到9数字，两头的数字包括在内</td><td style="text-align:center;">[0-9]</td><td style="text-align:center;">一个数字</td></tr><tr><td style="text-align:center;">[a-zA-Z_0-9]或者\\w</td><td style="text-align:center;">字母或者数字或者下划线(即单词字符)</td><td style="text-align:center;">[a-zA-Z_0-9]</td><td style="text-align:center;">一个字母或者是一个数字或一个下滑线</td></tr><tr><td style="text-align:center;">.</td><td style="text-align:center;">任何字符</td><td style="text-align:center;">\\\\.</td><td style="text-align:center;">一个任意字符</td></tr><tr><td style="text-align:center;">^</td><td style="text-align:center;">行的开头</td><td style="text-align:center;"><sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>[0-9]$</td><td style="text-align:center;">从[abc]这个位置开始, 相当于左双引号</td></tr><tr><td style="text-align:center;">$</td><td style="text-align:center;">行的结尾</td><td style="text-align:center;"><sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup>[0-9]$</td><td style="text-align:center;">以[0-9]这个结束, 相当于右双引号</td></tr><tr><td style="text-align:center;">\\b</td><td style="text-align:center;">单词边界</td><td style="text-align:center;">\\b[abc]\\b</td><td style="text-align:center;">字母a或b或c的左右两边需要的是非单词字符([a-zA-Z_0-9])</td></tr><tr><td style="text-align:center;">X?</td><td style="text-align:center;">X出现一次或一次也没有</td><td style="text-align:center;">a?</td><td style="text-align:center;">一个字符a，或者一个a都没有</td></tr><tr><td style="text-align:center;">X*</td><td style="text-align:center;">X出现零次或多次</td><td style="text-align:center;">a*</td><td style="text-align:center;">多个字符a，或者一个a都没有</td></tr><tr><td style="text-align:center;">X+</td><td style="text-align:center;">X出现一次或多次</td><td style="text-align:center;">a+</td><td style="text-align:center;">多个字符a，或者一个a</td></tr><tr><td style="text-align:center;">X{n}</td><td style="text-align:center;">X出现恰好 n 次</td><td style="text-align:center;">a{5}</td><td style="text-align:center;">5个字符a</td></tr><tr><td style="text-align:center;">X{n,}</td><td style="text-align:center;">X出现至少 n 次</td><td style="text-align:center;">a{5, }</td><td style="text-align:center;">最少有5个字符a</td></tr><tr><td style="text-align:center;">X{n,m}</td><td style="text-align:center;">X出现至少 n 次，但是不超过 m 次</td><td style="text-align:center;">a{5,8}</td><td style="text-align:center;">有5个字符a 到 8个字符a之间</td></tr></tbody></table><h1 id="动态代理" tabindex="-1"><a class="header-anchor" href="#动态代理"><span>动态代理</span></a></h1><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/9fed0d6aa26a8530ca255.png" alt="动态代理.png" tabindex="0"><figcaption>动态代理.png</figcaption></figure><ul><li>JDK动态代理（Proxy对象）使用（目标对象必须有接口） <ul><li>Object o = Poxy.newProxyInstance(ClassLoader loader,Class&lt;?&gt;[] interfaces,InvocationHandler h)); <ul><li>Object:代理对象</li><li>loader:与目标对象相同的类加载器:接口实现类Class对象.getClassLoader()/Thread.currentThread().getContextClassLoader()</li><li>interfaces:与目标对象实现的所有的接口Class对象数组:new Class[]{接口Class对象}/实现类Class对象.getInterfaces()</li><li>h:InvocationHandler接口实现类 <ul><li>Object invoke(Object proxy,Method method,Object[] args)</li><li>proxy:代理对象(实现类对象)</li><li>method:代理对象(实现类对象)当前执行方法method.getName()\\method.invoke(对象，实际参数)</li><li>args:方法实际参数</li></ul></li></ul></li></ul></li></ul><h1 id="注解" tabindex="-1"><a class="header-anchor" href="#注解"><span>注解</span></a></h1><ul><li><p>注解概述<br> - 代码级别的说明，与类、接口、枚举同一层次</p><ul><li>注释：在阅读程序时清楚----给程序员看的</li><li>注解：给jvm看的，给机器看的</li><li>注解作用:编译检查（@override）、代码分析（取代xml等配置文件）、编写文档（辅助生成帮助文档对应的内容）</li><li>注解优缺点：开发效率高 成本低 但耦合性大 并且不利于后期维护</li></ul></li><li><p>注解的实现</p><ul><li>java注解是一种继承自接口<code>java.lang.annotation.Annotation</code>的特殊接口</li><li>解析一个类或者方法的注解 <ul><li>编译期直接的扫描：编译器在对java代码编译字节码的过程中会检测到某个类或者方法被一些注解修饰并进行某些处理(@Override)</li><li>运行期反射</li></ul></li><li>本质:返回AnnotationInvocationHandler类的代理类(jdk动态代理) <ul><li>jdk:sun.reflect.annotation.AnnotationParser#annotationForMap方法返回AnnotationInvocationHandler类的代理类</li><li>jvm:invokevirual指令、</li></ul></li></ul></li><li><p>JDK提供的注解（不同的注解只能在不同的位置使用(方法上、字段上、类上)）</p></li></ul><table><thead><tr><th style="text-align:center;">注解</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">@Override</td><td style="text-align:center;">复写父类方法</td></tr><tr><td style="text-align:center;">@Deprecated</td><td style="text-align:center;">标注方法过时(①安全问题②新的API取代)</td></tr><tr><td style="text-align:center;">@SuppressWarnings（value）</td><td style="text-align:center;">压制(编译)警告</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">deprecation：忽略过时</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">rawtype：忽略类型安全</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">unused：忽略不使用</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">unchecked：忽略安全检查</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">null：忽略空指针</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">all：忽略所有</td></tr></tbody></table><ul><li>自定义注解</li><li>声明:4个元注解:用于确定被修饰的自定义注解的JDK提供的注解</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@Retention(//用于确定被修饰的自定义注解声明周期
	RetentionPolicy.SOURCE:注解在源码级别可见（提供给编译器使用）
	RetentionPolicy.CLASS：注解在源码和字节码文件级别可见（提供给JVM使用）
	RetentionPolicy.RUNTIME：注解在源码和字节码文件级别、内存可见（取代xml配置）
)
@Target(//代表注解修饰的范围：类上使用，方法上使用，字段上使用
	ElementType.FIELD:字段上可用此注解
	ElementType.METHOD:方法上可以用此注解
	ElementType.TYPE:类/接口上可以使用此注解
	ElementType.PARAMETER：允许作用在方法参数上
	ElementType.CONSTRUCTOR:构造方法上面可以用
	ElementType.LOCAL_VARIABLE：允许作用在本地局部变量上
	ElementType.ANNOTATION_TYPE：允许作用在注解上
	ElementType.PACKAGE：允许作用在包上
)
[@Documented //使用javaDoc生成api文档时，包含此注解
@Inherited子类继承父类当前注解]
[public] @interface 注解名{
	[[public abstract] 返回值类型(基本类型、String、枚举、注解、Class及其一维数组) 属性名()[default 值];](s)
}		
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用:一个对象上注解只能使用一次，不能重复使用，在类、方法、字段上 <ul><li>@注解名[([[属性名=]值(非数组)[,属性名=]{值,值}(数组)])]</li><li>解析使用了注解的类(实质：从注解中解析出属性值)</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>|字节码对象API|说明|
|:-:| :-: |
|boolean isAnnotationPresent(Class&lt;? extends Annotation&gt; annotationClass)|判断该字节码对象身上是否使用该注解了|
|T getAnnotation(Class&lt;A&gt; annotationClass)|获得该字节码对象身上指定的注解对象|
|Annotation[] getAnnotations();|获得当前对象及其父类上继承的所有注解,有@Inherited才行|
|Annotation[] getDeclaredAnnotations();|获得当前对象上所有的注解|
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="反射" tabindex="-1"><a class="header-anchor" href="#反射"><span>反射</span></a></h1><h2 id="类加载器" tabindex="-1"><a class="header-anchor" href="#类加载器"><span>类加载器</span></a></h2><ul><li>类加载器负责将.class文件加载到内存中，并为之生成对应的Class对象</li><li>Class对象无公共构造方法,有且只有一个（不能创建，只能获得），</li><li>加载类时由Java虚拟机和调用类加载器defineClass方法自动构造</li><li>类的加载机制:全盘委托机制</li><li>保证一个class文件只会被加载一次，形成一个Class对象。</li><li>自定义类加载可以将一个class文件加载多次。</li><li>一个class文件被两个类加载器加载将是两个对象</li></ul><h2 id="类的加载步骤" tabindex="-1"><a class="header-anchor" href="#类的加载步骤"><span>类的加载步骤</span></a></h2><ul><li>加载：指用类加载器将class文件读入内存，并为整个class文件创建一个Class对象（任何类被使用时系统都会建立一个Class对象）</li><li>连接 <ul><li>①验证 是否有正确的内部结构，并和其他类协调一致</li><li>②准备 负责为类的静态成员分配内存，并设置默认初始化值</li><li>③解析 将类的二进制数据中的符号引用替换为直接引用</li></ul></li><li>初始化</li></ul><h2 id="类加载到内存的时机" tabindex="-1"><a class="header-anchor" href="#类加载到内存的时机"><span>类加载到内存的时机</span></a></h2><ul><li>创建类的实例</li><li>初始化某个类的子类</li><li>类的静态变量，或者为静态变量赋值</li><li>类的静态方法</li><li>使用反射方式来强制创建某个类或接口对应的java.lang.Class对象</li><li>直接使用java.exe命令来运行某个主类</li></ul><h2 id="反射相关继承体系" tabindex="-1"><a class="header-anchor" href="#反射相关继承体系"><span>反射相关继承体系</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>- java.lang.Class&lt;T&gt;
    - 获得Class对象类名 
        - 变量名 = new 类名();Class c1 = 变量名.getClass();
        - Class c2 = 类名.class;(常用)  
        - Class c3 = Class.forName(&quot;完整类名&quot;);(常用)
    - ClassLoader getClassLoader();获得Class对象的类加载器
    - Constructor&lt;T&gt; getConstructor(Class&lt;?&gt;... parameterTypes);(public)//通过Class对象获得Constructor类
    - Constructor&lt;T&gt; getDeclaredConstructor(Class&lt;?&gt;... parameterTypes);(All)
    - Constructor&lt;?&gt;[] getConstructors()(public)
    - Constructor&lt;?&gt;[] getDeclaredConstructors(All))
    - Field getField(String name);(本类及父类public)
    - Field getDeclaredField() (本类All)
    - Field[] getFields() (本类及父类public)
    - Field[] getDeclaredFields() ;(本类All)
    - Method getMethod(String name, Class&lt;?&gt;... parameterTypes)(本类及父类public)
    - Method getDeclaredMethod(String name, Class&lt;?&gt;... parameterTypes)(本类All)
    - Method[] getMethods() (本类及父类public)
    - Method[] getDeclaredMethods()  (本类All)
    - Object newInstance();调用默认的构造方法创建对象

- java.lang.ClassLoader
    - ClassLoader getClassLoader();获得Class对象的类加载器
    - URL getResource(&quot;相对src路径&quot;).getPath();获得classes(src)下的任何资源绝对路径
    - InputStream getResourceAsStream(&quot;相对src路径&quot;);获得classes下(src)下的任何资源inputStream 

- java.lang.reflect.AccessibleObject		
    - void setAccessible(boolean flag) throws SecurityException(true取消);语言访问检查(允许访问私有)

    - java.lang.reflect.Constructor&lt;T&gt;						
        - 通过Constructor类创建对象T newInstance(Object... initargs)(传递构造函数参数);

    - java.lang.reflect.Field&lt;T&gt; 
        - 利用Field类对属性进行赋值取值
        - void set(Object obj,Object value)(obj传入实例化对象,静态属性则为null);
        - Object get(Object obj)(obj传入实例化对象,静态属性则为null)

    - java.lang.reflect.Method
        - Object invoke(Object obj,Object... args)(obj传入实例化对象,静态方法则为null)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>原始类型：boolean、char、byte、short、int、long、float、double</li><li>封装类型：Boolean、Character、Byte、Short、Integer、Long、Float、Double</li><li>基本类型/String-&gt;包装类 <ul><li>new 包装类(基本类型/字符串)(装箱)构造一个新分配的Integer对象表示指定的int值</li><li>包装类.parseXxxx(字符串);</li><li>包装类.valueOf(基本类型/字符串)返回一个指定的Integer实例</li></ul></li><li>包装类-&gt;基本类型/String <ul><li><p>包装类.xxxValue()(拆箱)返回该包装类的基本数据类型</p></li><li><p>包装类.toString();String.valueOf(基本类型);</p></li><li><p>子类对象(实现类对象)既可以给这个子类(实现类对象)引用变量赋值，又可以给这个子类(实现类对象)的父类(接口)变量赋值</p></li><li><p>绑定:将一个方法调用同一个方法主体关联起来</p></li><li><p>前期绑定:在程序执行前进行绑定（由编译器和连接程序实现）</p></li><li><p>后期绑定/运行时绑定:在运行时根据对象的类型进行绑定，除了static和final方法外，都是后期绑定</p></li><li><p>分类：编译时多态（方法重载overload）（前绑定）和运行时多态（方法重写override）（后绑定）</p></li><li><p>多态实现方法：1、子父类关系或者类实现接口关系2、方法重写3、父类引用指向子类对象</p><ul><li>普通类多态：父类 变量名 = new 子类();</li><li>抽象类多态：抽象类 变量名 = new 抽象类子类();</li><li>接口多态：接口 变量名 = new 接口实现类();</li></ul></li><li><p>优点：配合继承与方法重写提高了代码的复用性与扩展性</p></li><li><p>多态同名成员方法和变量的特点：方法的运行看右边，其他（编译（有没有重写方法/属性）、运行）都看左边</p></li></ul></li></ul><h1 id="什么是构造方法重载" tabindex="-1"><a class="header-anchor" href="#什么是构造方法重载"><span>什么是构造方法重载？</span></a></h1><ul><li>构造方法:对象创建时只执行一次的方法。用于初始化类的成员变量</li><li>没有给类提供构造方法的情况下，Java编译器会为这个类创建一个默认的构造方法。如果已经定义了一个构造方法，默认调用已定义的构造方法</li><li>构造方法重载：多个参数列表不同的构造方法</li></ul><h1 id="什么是内部类-作用" tabindex="-1"><a class="header-anchor" href="#什么是内部类-作用"><span>什么是内部类？作用？</span></a></h1><ul><li>内部类是指在一个类的内部再定义一个类。</li><li>优点 <ul><li>一个内部类对象可以访问创建它的外部类对象的所有成员</li><li>内部类不为同一包的其他类所见，封装性好</li><li>每个内部类可以各自继承类和实现接口，实现&#39;多重继承&#39;</li><li>匿名内部类可以定义回调</li></ul></li><li>场景：一些多算法场合；解决一些非面向对象的语句块；当某个类除了它的外部类，不再被其他的类使用时</li><li>对于一个名为outer的外部类和其内部定义的名为inner的内部类。编译完成后出现outer.class和outer$inner.class两类。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//非静态内部类不能定义静态属性和方法
public class Outer {
    private int a = 1;
    private static int b = 2;
    private static void outf1(){System.out.println(&quot;outf1&quot;);}
    private void outf2(){System.out.println(&quot;outf2&quot;);}
    //成员内部类：定义在类内部非静态类。内部类中不能定义静态成员
    class Inner {
        private int a = 3;
        //private static int b = 4; //内部类中不允许定义静态变量和方法
        public void inner() {
            System.out.println(a);//3 =this.a
            System.out.println(b);//2 =this.b;//内部类中不允许定义静态变量
            //System.out.println(Outer.a);//不能Outer.a访问外部非静态成员
            System.out.println(Outer.b);//2
            System.out.println(Outer.this.a);//1
            System.out.println(Outer.this.b);//2
            outf1();//=Outer.this.outf1();
            outf2();//=Outer.this.outf2();
        }
    }
    //静态内部类（nested class）：定义在类内部的静态类，不可访问外部类的非静态方法
    static class StaticInner {
        private int a = 3;
        private static int b = 4;
        public void inner() {
            System.out.println(a);//3 =this.a
            System.out.println(b);//4 =this.b;
            //System.out.println(Outer.a);//不能Outer.a访问外部非静态成员
            System.out.println(Outer.b);//2
            //System.out.println(Outer.this.a);//静态内部类不能访问this
            //System.out.println(Outer.this.b);//静态内部类不能访问this
            outf1();//Outer.this.outf1();//静态内部类不能访问this
            //outf2();//静态内部类不能访问非静态方法 Outer.this.outf2();////静态内部类不能访问this
        }
    }
    //局部内部类：定义在方法中的内部类。可以访问外部类的所有变量和方法，定义在静态方法中的局部类只能访问外部类的静态变量和方法,不能创建静态变量
    public static void outf3(){
        class Inner {
            private int a = 3;
            //private static int b = 4;//不允许静态
            public void inner() {
                System.out.println(a);//3 =this.a
                System.out.println(b);//2 =this.b//不允许静态
                //System.out.println(Outer.a);//不能Outer.a访问外部非静态成员
                System.out.println(Outer.b);
                //System.out.println(Outer.this.a);//静态方法内部类不能访问this
                //System.out.println(Outer.this.b);//静态方法内部类不能访问this
                outf1(); //Outer.this.outf1(); 静态方法内部类不能访问this
                //outf2();//静态内部类不能访问非静态方法 Outer.this.outf2();////静态方法内部类不能访问this
            }
        }
    }
    public void outf4(){
        class Inner {
            private int a = 3;
            //private static int b = 4;//不允许静态
            public void inner() {
                System.out.println(a);//3 = this.a
                System.out.println(b);//2 = this.b 不允许静态
                //System.out.println(Outer.a);//不能Outer.a访问外部非静态成员
                System.out.println(Outer.b);
                System.out.println(Outer.this.a);
                System.out.println(Outer.this.b);
                outf1();// = Outer.this.outf1();
                outf2();// =  Outer.this.outf2();
            }
        }
    }
    public static void main(String[] args) {
        Outer.Inner inner = new Outer().new Inner();//外部类名.内部类名 变量名 = new 外部类名().new 内部类名();
        inner.inner();
        
        Outer.StaticInner staticInner = new Outer.StaticInner();//静态内部类的创建方式，new 外部类.静态内部类()
        staticInner.inner();

        Outer outer = new Outer();
        Outer.outf3();
        outer.outf4();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>匿名内部类: 没有名字的内部类，不能是抽象的必须继承一个抽象类或者实现一个接口所有抽象方法。不能定义任何静态成员和静态方法。 <ul><li>当所在的方法的形参需要被匿名内部类使用时，必须声明为final？ <ul><li>因为生命周期不一致，局部变量直接存储在栈中，当方法执行结束后，非final的局部变量就被销毁。而局部内部类对局部变量的引用依然存在，如果局部内部类要调用局部变量时，就会出错。加了final，可以确保局部内部类使用的变量与外层的局部变量区分开，解决了这个问题</li></ul></li><li>临时定义某一指定类型的子类并创建刚刚定义的这个子类的对象</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class Outer {
    public void fun(Service service){//方法回调
        service.method();
    }
    public static void main(String[] args){
        Outer outer = new Outer();
        outer.fun(
            new Service() {
                public void method() { System.out.println(&quot;匿名内部类&quot; ); }
            }
        );
    }
}
interface Service{//匿名内部类必须继承或实现一个已有的接口
    void method();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//内部类的继承，父子类的内部类不能覆盖，只能继承
public class InheritInner extends Outer.Inner {
    InheritInner(Outer outer){
        outer.super();
    }
    public static void main(String[] args) {
        Outer outer = new Outer();
        InheritInner inheritInner = new InheritInner(outer);
    }
}
class Outer{
    class Inner{}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StringBuilderHolder</span> <span class="token punctuation">{</span><span class="token comment">//多线程版StringBuilder</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">StringBuilder</span> sb<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">StringBuilderHolder</span><span class="token punctuation">(</span><span class="token keyword">int</span> capacity<span class="token punctuation">)</span> <span class="token punctuation">{</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuidler</span><span class="token punctuation">(</span>capacity<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">StringBuilder</span> <span class="token function">resetAndGetStringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//3.重用StringBuilder</span>
        sb<span class="token punctuation">.</span><span class="token function">setLength</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> sb<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">StringBuilderHolder</span><span class="token punctuation">&gt;</span></span> threadLocalStringBuilderHolder 
<span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">StringBuilderHolder</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//2.ThreadLocal避免多线程冲突</span>
    <span class="token keyword">protected</span> <span class="token class-name">StringBuilderHolder</span> <span class="token function">initialValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//1.设置好初始长度，超过char[]默认16调用System.arraycopy成倍复制扩容太浪费资源</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilderHolder</span><span class="token punctuation">(</span><span class="token number">256</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> threadLocalStringBuilderHolder<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">resetAndGetStringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所有类都直接或者间接继承Object</p><h1 id="查看反编译代码" tabindex="-1"><a class="header-anchor" href="#查看反编译代码"><span>查看反编译代码</span></a></h1><ul><li>C:\\Java\\jdk-11.0.8\\bin\\server放入hsdis-amd64.dll</li><li>idea运行添加vm参数</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>-server
-Xcomp
-XX:+UnlockDiagnosticVMOptions
-XX:+PrintAssembly
-XX:CompileCommand=compileonly,*MyTest.fun
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,55),m={href:"http://stop.sh",target:"_blank",rel:"noopener noreferrer"},g={href:"http://stop.sh",target:"_blank",rel:"noopener noreferrer"},h={href:"http://start.sh",target:"_blank",rel:"noopener noreferrer"},x={href:"http://start.sh",target:"_blank",rel:"noopener noreferrer"},y=i(`<h2 id="jshell" tabindex="-1"><a class="header-anchor" href="#jshell"><span>Jshell</span></a></h2><p>cmd输入jshell</p><p>Files.readAll按tab键提示</p><p>Files.readAllBytes(Path.of(&quot;f1.png&quot;)) 回车</p><p>System.out.println(Base64.getEncoder().encodeToString($1))回车</p><h2 id="java闭包" tabindex="-1"><a class="header-anchor" href="#java闭包"><span>java闭包</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package com.itheima,
import java.util.function.Consumer;
public class Testclosure {
    public static void main(string[] args){
    a().accept( t: 10);
    }
	public static consumer&lt;Integer&gt; a(){
		int y= 20;
		Consumer&lt;Integer&gt;b= x-&gt; System.out.println(x+&quot;,&quot;+ y);
		return b;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>abc <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li><li id="footnote2" class="footnote-item"><p>abc <a href="#footnote-ref2" class="footnote-backref">↩︎</a></p></li></ol></section>`,9);function f(k,j){const n=s("ExternalLinkIcon");return d(),r("div",null,[u,e("ul",null,[e("li",null,[t("Scanner(InputStream source)"),e("a",v,[t("一般传入System.in"),l(n)])]),o,p]),b,e("p",null,[t("cd /opt/banzhutest && sh "),e("a",m,[t("stop.sh"),l(n)]),t(" && cd admin && sh "),e("a",g,[t("stop.sh"),l(n)]),t(" && cd && cd code/banzhunewserver && git pull && mvn clean package -Ptest && cp banzhu-api/target/testbanzhu.jar /opt/banzhutest/testbanzhu.jar && cp banzhu-admin/target/admintestbanzhu.jar /opt/banzhutest/admin/admintestbanzhu.jar && cd /opt/banzhutest && sh "),e("a",h,[t("start.sh"),l(n)]),t(" && cd admin && sh "),e("a",x,[t("start.sh"),l(n)]),t(" &")]),y])}const C=a(c,[["render",f],["__file","java.html.vue"]]),A=JSON.parse('{"path":"/backend/java/java.html","title":"java","lang":"zh-CN","frontmatter":{"title":"java","date":"2023-01-01T00:00:00.000Z","tags":"java","categories":"后端","description":"java java概述 java是用来编写互联网(电商、P2P)和企业级应用(ERP、CRM、BOS、OA)等软件的一门面向对象编程语言 java跨平台(操作系统:Windows\\\\Linux\\\\Mac)特性:一次编写后在任意操作系统上运行，依赖虚拟机JVM（java Virtual Machine）实现 Java语言采用Unicode编码标准，Unico...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/java/java.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"java"}],["meta",{"property":"og:description","content":"java java概述 java是用来编写互联网(电商、P2P)和企业级应用(ERP、CRM、BOS、OA)等软件的一门面向对象编程语言 java跨平台(操作系统:Windows\\\\Linux\\\\Mac)特性:一次编写后在任意操作系统上运行，依赖虚拟机JVM（java Virtual Machine）实现 Java语言采用Unicode编码标准，Unico..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/9fed0d6aa26a8530ca255.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"java\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/9fed0d6aa26a8530ca255.png\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"顺序结构","slug":"顺序结构","link":"#顺序结构","children":[]},{"level":2,"title":"选择结构","slug":"选择结构","link":"#选择结构","children":[]},{"level":2,"title":"循环结构（迭代）","slug":"循环结构-迭代","link":"#循环结构-迭代","children":[]},{"level":2,"title":"跳转语句","slug":"跳转语句","link":"#跳转语句","children":[]},{"level":2,"title":"匿名对象","slug":"匿名对象","link":"#匿名对象","children":[]},{"level":2,"title":"Scanner","slug":"scanner","link":"#scanner","children":[]},{"level":2,"title":"Random","slug":"random","link":"#random","children":[]},{"level":2,"title":"Object:所有类的父类","slug":"object-所有类的父类","link":"#object-所有类的父类","children":[]},{"level":2,"title":"Date,DateFormat,SimpleDateFormat,Calendar","slug":"date-dateformat-simpledateformat-calendar","link":"#date-dateformat-simpledateformat-calendar","children":[]},{"level":2,"title":"System","slug":"system","link":"#system","children":[]},{"level":2,"title":"Math","slug":"math","link":"#math","children":[]},{"level":2,"title":"Arrays","slug":"arrays","link":"#arrays","children":[]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[]},{"level":2,"title":"ResourceBundle","slug":"resourcebundle","link":"#resourcebundle","children":[]},{"level":2,"title":"类加载器","slug":"类加载器","link":"#类加载器","children":[]},{"level":2,"title":"类的加载步骤","slug":"类的加载步骤","link":"#类的加载步骤","children":[]},{"level":2,"title":"类加载到内存的时机","slug":"类加载到内存的时机","link":"#类加载到内存的时机","children":[]},{"level":2,"title":"反射相关继承体系","slug":"反射相关继承体系","link":"#反射相关继承体系","children":[]},{"level":2,"title":"Jshell","slug":"jshell","link":"#jshell","children":[]},{"level":2,"title":"java闭包","slug":"java闭包","link":"#java闭包","children":[]}],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":40.28,"words":12085},"filePathRelative":"backend/java/java.md","localizedDate":"2023年1月1日","excerpt":"<p>java</p>\\n<!--more-->\\n<h1>java概述</h1>\\n<ul>\\n<li>java是用来编写互联网(电商、P2P)和企业级应用(ERP、CRM、BOS、OA)等软件的一门面向对象编程语言</li>\\n<li>java跨平台(操作系统:Windows\\\\Linux\\\\Mac)特性:一次编写后在任意操作系统上运行，依赖虚拟机JVM（java Virtual Machine）实现</li>\\n<li>Java语言采用Unicode编码标准，Unicode（标准码），它为每个字符制订了一个唯一的数值</li>\\n<li>jdk1.5之后的三大版本\\n<ul>\\n<li>Java SE（J2SE，Java 2 Platform Standard Edition，标准版）桌面、服务器、嵌入式环境</li>\\n<li>Java EE（J2EE，Java 2 Platform Enterprise Edition，企业版）提供 Web 服务、组件模型、管理和通信 API</li>\\n<li>Java ME（J2ME，Java 2 Platform Micro Edition，微型版）移动设备和嵌入式设备</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{C as comp,A as data};
