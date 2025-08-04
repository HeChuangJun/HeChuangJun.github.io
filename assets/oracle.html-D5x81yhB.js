import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as n,e as a}from"./app-7KT7HDzT.js";const r={},l=a(`<p>oralce:大型数据库</p><h2 id="oracle-10g" tabindex="-1"><a class="header-anchor" href="#oracle-10g"><span>oracle 10g</span></a></h2><h3 id="单表查询" tabindex="-1"><a class="header-anchor" href="#单表查询"><span>单表查询</span></a></h3><pre><code>select *|[distinct] colum|expression|function() [as][alias](s)]
	from table[alias](s)|dual
	[where condition(s)]
	[group by column(s)]
	[having condition(s)] 
	[order by column|number|alias|expression 
	[asc|desc] [nulls first|nulls last](s)];
</code></pre><h4 id="select" tabindex="-1"><a class="header-anchor" href="#select"><span>select:</span></a></h4><pre><code>distinct作用与后面所有的列，所有列相同的才会去掉
	alias有特殊符号或者关键字(数字汉字)就要加双引号(pl/sql就不用)，单引号表示日期和字符
	select * from emp;
	select empno,ename,job,mgr,hiredate,sal,comm,deptno from emp;
	select empno as &quot;员工号&quot;,ename,sal &quot;月 薪&quot;,
	sal*12,comm,sal*12+nvl(comm,0) from emp
	select distinct deptno from emp;
	select distinct deptno,job from emp;
	select ename,sal*12 from emp;
	select ename,sal*12 income,sal*12+comm from emp;
</code></pre><h4 id="condition" tabindex="-1"><a class="header-anchor" href="#condition"><span>condition</span></a></h4><pre><code>where 中的字母是区分大小写，日期格式必须与数据库一致，默认DD-MON-RR\\mysql不区分大小写
	比较运算符=、&lt;&gt;（！=）、&gt;、&gt;=、&lt;=、&lt;、between and （闭区间，小到大、日期也行）
	in（set集合）、not in（set集合）、is null、is not null、like（%、_、日期、\\escape）
	lib
	转意字符\\紧跟后面的一个按本身，不按特殊字符、   
	select *from emp where ename like &#39;%\\_%&#39; escape &#39;\\&#39;；
	逻辑运算符
	and（两个考虑between and）、or （多个or考虑in）、not（不大于：not（sal&gt;1500））
	例子
	select * from emp where sal between 1500 and 3000
	select * from emp where sal &gt;1500 and sal&lt;3000
	select * from emp where hiredate bettweeen &#39;1-1月-1981&#39; and &#39;31-12月-1981&#39; 
	select * from emp where empno in (7396,7499,7521)
	select * from emp where ename in(&#39;SMITH&#39;,&#39;ALLEN&#39;,&#39;WARD&#39;)
	select * from emp where comm is not null
	select * from emp where comm is null
	select * from emp where deptno not in (10,20)
	select * from emp where empno=7396 or empno=7499 or empno=7521;
	select * from emp where deptno=10;
	select * from emp where ename=&#39;KING&#39;
	select * from emp where ename=&#39;King&#39;
	select * from emp where hiredate=&#39;17-11月-81&#39;;
	select * from emp where hiredate=&#39;1981-11-17&#39;
	select * from emp where empno &lt;&gt; 7396;
	select * from emp where empno != 7396;
	select * from emp where empno like &#39;_M%&#39;
	select * from emp where empno like &#39;%M%&#39;
	select last_name, hire_date from employees where hire_date like &#39;% -94&#39;
	select * from emp where ename like &#39;____&#39;
	select * from emp where comm is not null or sal&gt;1500;
	select * from emp where comm is not null and sal&gt;1500;
	select * from emp where comm is not null and not(sal&gt;1500);
</code></pre><h4 id="order-by" tabindex="-1"><a class="header-anchor" href="#order-by"><span>order by</span></a></h4><pre><code>①默认升序asc desc 降序  排序放在最后执行，降序只作用与与他最近的列、
	②nulls First和 null last 调节显示位置
	③作用于后面所有的列，先按第一列升序，相同的按第二列降序排列
	④排序后的结果，是否是原来的表？不是，是临时表
	⑤order by 后面  + 列、表达式、别名、序号（第几列、不能超过列数）
	例子
	select * from emp order by sal asc, hiredate desc;
	select * from emp order by sal desc
	select * from emp order by sal
	select empno,ename,sal,sal*12 from emp order by sal*12 desc;
	select empno,ename,sal,sal*12 年薪  from emp order by 年薪 desc
	select empno,ename,sal,sal*12 年薪  from emp order by 4 desc
	select empno,ename,sal,sal*12 年薪 from emp order by 5 desc
	ORDER BY 项必须是 SELECT-list 表达式的数目 
	select * from emp  order by deptno,sal;
	select *  from emp order by deptno,sal desc
	select sal from emp order by sal*12
	select * from emp order by sal nulls first;
	select * from emp order by sal nulls last;
</code></pre><h4 id="group-by" tabindex="-1"><a class="header-anchor" href="#group-by"><span>group by</span></a></h4><pre><code>①分组函数只能查出group by 分组条件字段和分组函数的值，不能有其他字段
	不使用group by 只可以查询出来分组函数的值
	②存在于select表中，而未被组函数包含的所有的列都要包含在group by中，
	包含在groupby子句中的列不必包含在select中
	③过滤分组函数的值having 与where的区别，where后面不能有组函数
	④多个列的分组: 先按照第一个列分组，如果相同，再第二个列分组，以此类推
	例子
	select deptno,avg(sal) from emp group by deptno having avg(sal)&gt;2000
	select deptno,avg(sal) from emp  where deptno=10 group by deptno
	select deptno,avg(sal)  from emp  group by deptno  having deptno=10;
	select deptno,job,sum(sal)  from emp group by deptno,job  order by 1;
	select deptno，count（ename）,avg(sal)  from emp group by deptno
</code></pre><h4 id="group-by增强" tabindex="-1"><a class="header-anchor" href="#group-by增强"><span>group by增强</span></a></h4><pre><code>SQL&gt; group by 的增强oracle才行，做报表
	SQL&gt; select deptno,job,sum(sal) from emp group by deptno,job
	SQL&gt; +
	SQL&gt; select deptno,sum(sal) from emp group by deptno
	SQL&gt; +
	SQL&gt; select sum(sal) from emp
	SQL&gt; 
	SQL&gt; ====
	SQL&gt; select deptno,job,sum(sal) from emp group by rollup(deptno,job)
	SQL&gt; 抽象
	SQL&gt; group by rollup(a,b)
	SQL&gt; =
	SQL&gt; group by a,b
	SQL&gt; +
	SQL&gt; group by a
	SQL&gt; +
	SQL&gt; 没有group by
	oracle的支持报表功能，break on null，相同的不显示，不同部门号，以deptno为标志，
	分组后隔行显示break on deptno skip 2、select可以通过集合运算相加减
</code></pre><h2 id="函数-简化操作" tabindex="-1"><a class="header-anchor" href="#函数-简化操作"><span>函数：简化操作</span></a></h2><h3 id="单行函数" tabindex="-1"><a class="header-anchor" href="#单行函数"><span>单行函数</span></a></h3><h4 id="字符函数" tabindex="-1"><a class="header-anchor" href="#字符函数"><span>字符函数</span></a></h4><h5 id="大小写控制函数" tabindex="-1"><a class="header-anchor" href="#大小写控制函数"><span>大小写控制函数</span></a></h5><pre><code>select lower(&#39;HELLO&#39;) ,upper(&#39;hello&#39;),initcap(&#39;hello&#39;) from dual (伪表)
</code></pre><h5 id="字符控制函数" tabindex="-1"><a class="header-anchor" href="#字符控制函数"><span>字符控制函数</span></a></h5><pre><code>select concat(&#39;hello&#39;,&#39;World&#39;) from dual(伪表)
	select &#39;编号是&#39;  || empno  || &#39;的雇员,姓名是&#39;||ename from emp;
	select substr(&#39;Hello World&#39;,4) 子串 from dual;lo World  
	select substr(&#39;Hello World&#39;,4,3) 子串 from dual;lo 
	select length(&#39;Hello World&#39;) 字符,lengthb(&#39;Hello World&#39;) 字节 from dual;11、11
	select length(&#39;北京&#39;) 字符,lengthb(&#39;北京&#39;) 字节 from dual
	2、4英文字符和字节一样，一个汉字两个字节
	select replace(&#39;hello&#39;,&#39;l&#39;,&#39;x&#39;)from dual; hexxo
	select instr(&#39;Hello World&#39;,&#39;ll&#39;) 位置 from dual;3
	select lpad(&#39;a&#39;,1,&#39;*&#39;) 左,rpad(&#39;abcd&#39;,1,&#39;*&#39;) 右 from dual;*a a* 左右填充
	select trim(&#39;H&#39; from &#39;Hello WorldH&#39;) from dual;ello World 去掉前后指定的字符
	select wm_concat(ename) nameslist from emp group by deptno;  10 CLARK,KING
</code></pre><h4 id="数值函数" tabindex="-1"><a class="header-anchor" href="#数值函数"><span>数值函数</span></a></h4><pre><code>	select round(45.926,2) 一,round(45.926,1) 二,round(45.926,0) 三,
		round(45.926,-1) 四,round(45.926,-2) 五 from dual;
		45.93       45.9         46         50          0   
		select trunc(45.926,2) 一,trunc(45.926,1) 二,trunc(45.926,0) 三,
		trunc(45.926,-1) 四,trunc(45.926,-2) 五 from dual
		45.92       45.9         45         40          0   
		select mod(1600,300) from dual; 100看小数点的位置：向右为正
</code></pre><h4 id="日期函数" tabindex="-1"><a class="header-anchor" href="#日期函数"><span>日期函数</span></a></h4><pre><code>默认含有日期和时间，默认格式DD-MON-RR  mysql date日期、datetime时间
	数学运算：日期加减（没乘除）数字仍为日期，
	日期之差（不加，没意义）为天数（数字）
	天数（数字）可以加减乘除
	select (sysdate-1) 昨天,sysdate 今天,(sysdate+1) 明天 from dual;29-9月 -16 
	select ename,hiredate,(sysdate-hiredate) 天,(sysdate-hiredate)/7 星期,
	(sysdate-hiredate)/30 月,(sysdate-hiredate)/365 年 from emp;
	select to_char(sysdate,&#39;yyyy-mm-dd hh24:mi:ss&#39;) from dual;2016-09-29 11:58:32   
	next_day指定日期的 下个日期
	select next_day(sysdate,&#39;礼拜五&#39;) from dual 周中的日无效 
	每个星期一自动备份表中的数据 1、分布式数据库，物理上不在一起，逻辑一起的数据库
	2、触发器 快照拷贝数据
	round、trunc
	假设SYSDATE=‘25-JUL-95’
	round(SYSDATE,&#39;MONTH&#39;)→01-AUG-95
	round(SYSDATE,&#39;YEAR&#39;)→01-JAN-96
	trunc(SYSDATE,&#39;MONTH&#39;)→01-JUL-95
	trunc(SYSDATE,&#39;YEAR&#39;)→01-JAN-95
	select months_between(sysdate,hiredate),add_months(sysdate,53) ,
	next_day(sysdate,&#39;sunday&#39;) ,last_day(sysdate) from emp;计算工龄
</code></pre><h4 id="转换函数" tabindex="-1"><a class="header-anchor" href="#转换函数"><span>转换函数</span></a></h4><pre><code>隐式oracle自动:select * from emp where deptno=10;
	显式:日期转换格式to_char（date，’格式‘）&#39;yyyy-mm-dd&#39;、&#39;fmyyyy-mm-dd&#39;去掉09的0
	可以用来分别取出年、月、日
</code></pre><p><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/9988d14146fdb19c78d04.png" alt="oracle转换函数.png"><br> select to_char(sysdate,&#39;yyyy-mm-dd hh24:mi:ss&quot;今天是&quot;day&#39;) from dual;<br> 数字转换格式to_char（number，’格式‘）可以分别取出各个位置的位数 <br> L本地货币符号，.小数点，千位符$美元符0零9数字<br> select to_char(sal,&#39;L9,999.99&#39;) from emp;￥800.00<br> 字符转换为数字to_number(char[,&#39;格式&#39;])<br> 字符转换成日期to_date(char[,&#39;格式&#39;&#39;])</p><h4 id="通用函数-适用于任何数据类型包括null" tabindex="-1"><a class="header-anchor" href="#通用函数-适用于任何数据类型包括null"><span>通用函数:适用于任何数据类型包括null</span></a></h4><pre><code>nvl（e1,e2）、nvl2（a,b,c）、nullif（a,b）、coalesce（e1,e2）
	nvl2的非null为b，null为c nullif两个表达式相同返回null，否则返回a
	select sal*12+nvl2(comm,comm,0) from emp;
	select nullif(&#39;abc&#39;,&#39;abc&#39;) 值 from dual;	
	select comm,sal,coalesce(comm,sal) &quot;第一个不为null的值&quot; from emp;
		  COMM        SAL 第一个不为null的值                                        
	---------- ---------- ------------------                                        
					  800                800                                        
		   300       1600                300     
</code></pre><h4 id="条件表达式" tabindex="-1"><a class="header-anchor" href="#条件表达式"><span>条件表达式</span></a></h4><h5 id="case表达式" tabindex="-1"><a class="header-anchor" href="#case表达式"><span>case表达式</span></a></h5><pre><code>select ename,job,sal “涨前”,
	case  when job=&#39;PRESIDENT&#39; then sal+1000
		when job=&#39;MANAGER&#39; then sal+800
			else sal+400
			end “涨后”
	from emp;
</code></pre><h5 id="decode函数-oracle独有" tabindex="-1"><a class="header-anchor" href="#decode函数-oracle独有"><span>decode函数:oracle独有</span></a></h5><pre><code>select ename,job,sal 涨前,
	decode(job,&#39;PRESIDENT&#39;,sal+1000,
		 &#39;MANAGER&#39;,sal+800,
					 sal+400) 涨后
	from emp;
</code></pre><h3 id="多行函数、组函数、分组函数" tabindex="-1"><a class="header-anchor" href="#多行函数、组函数、分组函数"><span>多行函数、组函数、分组函数</span></a></h3><pre><code>多行函数一般要用子查询另起一张表来对应本表的值
	count（*） 不建议使用，不滤空，其他都滤null，
	nvl函数使之无法忽略null,分组函数一组数据返回一个值
	avg(列|function)、count（*|function）建议用某列作为计数的列、
	max(列|function)、min(列|function)、sum(列|function)，可以镶嵌单行函数进行处理
	平均奖金(存在null值)、一是全部人的平均工资、二、三是非空的人的平均工资
	select sum(comm)/count(*) 一,sum(comm)/count(comm) 二,avg(comm) 三 from emp;
	157.142857   550        550 
	select count(*),count(ename),sum(sal),avg(sal),max(sal),min(sal) from emp;
</code></pre><h3 id="子查询-内查询" tabindex="-1"><a class="header-anchor" href="#子查询-内查询"><span>子查询（内查询）</span></a></h3><pre><code>不能一步求解的时候使用、在主查询之前一次执行完成，结果被主查询使用
	注意问题
	括号、合理的书写风格
	select * from emp  where sal &gt; (select sal from emp  where ename=&#39;SCOTT&#39;);
	可以在主查询的where select having  from 后面使用子查询
	不可以在group by、使用子查询、强调from后面的子查询
	select * from (select empno,ename,sal,sal*12 annsal from emp)
	select empno,ename,sal,(select job from emp where empno=7839) 第四列  from emp;
	主查询和子查询可以不是同一张表；只有子查询返回的结果 主查询可以使用 即可
	select * from emp where deptno=(select deptno from dept where dname=&#39;SALES&#39;);
	select e.*  from emp e,dept d where e.deptno=d.deptno and d.dname=&#39;SALES&#39;;
	一般不在子查询中排序；但在top-n分析问题中 必须对子查询排序
	一般先执行子查询，再执行主查询；但相关子查询例外
	单行子查询只能使用单行操作符；多行子查询只能使用多行操作符,
	单行是指结果有一行，多行是指结果不止一行
	子查询中的null
</code></pre><h4 id="多行子查询-返回多条记录" tabindex="-1"><a class="header-anchor" href="#多行子查询-返回多条记录"><span>多行子查询:返回多条记录</span></a></h4><pre><code>多行操作符（in 、any、all）
	any: 和集合中的任意一个值比较
	select *  from emp  where sal &gt; any (select sal from emp where deptno=30);
	select * from emp where sal &gt; (select min(sal) from emp where deptno=30)
	all:和集合中的所有值比较
	select *  from emp  where sal &gt; all (select sal from emp where deptno=30);
	select * from emp where sal &gt; (select max(sal) from emp where deptno=30)
	select e.*  from emp e,dept d  where e.deptno=d.deptno 
	(d.dname=&#39;SALES&#39; or d.dname=&#39;ACCOUNTING&#39;);先and后or
	select e.* from emp e,dept d where e.deptno=d.deptno 
	and (d.dname=&#39;SALES&#39; or d.dname=&#39;ACCOUNTING&#39;);
	select * from emp where deptno in 
	(select deptno from dept where dname=&#39;SALES&#39; or dname=&#39;ACCOUNTING&#39;);
</code></pre><h4 id="相关子查询-将主查询中的值-作为参数传递给子查询" tabindex="-1"><a class="header-anchor" href="#相关子查询-将主查询中的值-作为参数传递给子查询"><span>相关子查询:将主查询中的值 作为参数传递给子查询</span></a></h4><pre><code>select empno,ename,sal,(select avg(sal) from emp where deptno=e.deptno) 
	avgsal from emp e where sal &gt; 
	(select avg(sal) from emp where deptno=e.deptno);
</code></pre><h4 id="单行子查询-单行操作符-、-、-、-、-、" tabindex="-1"><a class="header-anchor" href="#单行子查询-单行操作符-、-、-、-、-、"><span>单行子查询:单行操作符（=、&lt;&gt;（！=）、&gt;、&gt;=、&lt;=、&lt;）</span></a></h4><h3 id="集合运算-union、intersect交集、minus差集" tabindex="-1"><a class="header-anchor" href="#集合运算-union、intersect交集、minus差集"><span>集合运算:union、intersect交集、minus差集</span></a></h3><pre><code>查询10和20号部门的员工
	select * from emp where deptno=10 or deptno=20;
	select * from emp where deptno in (10,20);
	select * from emp where deptno=10 union select * from emp where deptno=20;
	select deptno,job,sum(sal) from emp group by deptno,job
	union
	select deptno,to_char(null),sum(sal) from emp group by deptno
	union
	select to_number(null),to_char(null),sum(sal) from emp;
	select deptno,job,sum(sal) from emp group by rollup(deptno,job);
	参与运算的各个集合必须列数相同 且类型一致
	采用第一个集合作为最后的表头
	order by永远在最后,最后一句的后面
	括号
</code></pre><h3 id="rownum-伪列-行号-top-n问题" tabindex="-1"><a class="header-anchor" href="#rownum-伪列-行号-top-n问题"><span>rownum （伪列）行号:top-n问题</span></a></h3><pre><code>rownum永远按照默认的顺序生成永远从1开始,就是按原来的表的行号来算
	rownum只能使用&lt; &lt;=；不能使用&gt; &gt;=
	select rownum,empno,ename,sal from emp  where rownum&lt;=3  order by sal desc;
	select rownum,empno,ename,sal from emp order by sal desc;
</code></pre><h3 id="分页查询" tabindex="-1"><a class="header-anchor" href="#分页查询"><span>分页查询</span></a></h3><pre><code>select *
	from 
	(select rownum r,e1.*
	 from emp
	 where rownum &lt;=8
	)
	where r &gt;=5;
</code></pre><h3 id="多表查询-至少有n-1个连接条件才能去掉笛卡尔集" tabindex="-1"><a class="header-anchor" href="#多表查询-至少有n-1个连接条件才能去掉笛卡尔集"><span>多表查询：至少有n-1个连接条件才能去掉笛卡尔集</span></a></h3><h4 id="笛卡尔集-查出两张表的乘积" tabindex="-1"><a class="header-anchor" href="#笛卡尔集-查出两张表的乘积"><span>笛卡尔集：查出两张表的乘积</span></a></h4><h4 id="等值连接" tabindex="-1"><a class="header-anchor" href="#等值连接"><span>等值连接</span></a></h4><pre><code>	select e.empno,e.ename,d.dname from emp e,dept d  where e.deptno=d.deptno;
</code></pre><h4 id="不等值连接-注意这种联系" tabindex="-1"><a class="header-anchor" href="#不等值连接-注意这种联系"><span>不等值连接:注意这种联系</span></a></h4><pre><code>select e.empno,e.ename,e.sal,s.grade from emp e,
	salgrade s where e.sal between s.losal  and s.hisal;
</code></pre><h4 id="外连接" tabindex="-1"><a class="header-anchor" href="#外连接"><span>外连接</span></a></h4><pre><code>左外连接right join 、(+)
	当where e.deptno=d.deptno不成立的时候，等号左边的表任然被包含在最后的结果中
	右外连接right join 、(+)
	当where e.deptno=d.deptno不成立的时候，等号右边的表任然被包含在最后的结果中
	查询40号部门
	希望把某些不成立的记录（40号部门），任然包含在最后的结果中,哪个不要的记录就给他+
	select d.deptno 部门号,d.dname 部门名称,count(e.empno) 人数
	 from emp e,dept d
	 where e.deptno(+)=d.deptno
	 group by d.deptno,d.dname;
</code></pre><h3 id="自连接" tabindex="-1"><a class="header-anchor" href="#自连接"><span>自连接</span></a></h3><pre><code>通过表的别名，将同一张表视为多张表、自连接不适合操作大表
	select e.ename 员工,b.ename 老板 from emp e,emp b where e.mgr=b.empno;
</code></pre><h3 id="层次查询-上层的员工等于下层的老板-从哪个节点开始遍历树" tabindex="-1"><a class="header-anchor" href="#层次查询-上层的员工等于下层的老板-从哪个节点开始遍历树"><span>层次查询:上层的员工等于下层的老板，从哪个节点开始遍历树</span></a></h3><pre><code>select level,empno,ename,mgr  from emp connect by prior empno=mgr
	start with mgr is null  order by 1;
</code></pre><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/081898e8834c711d9d02d.png" alt="层次查询.png" tabindex="0"><figcaption>层次查询.png</figcaption></figure><h2 id="空值" tabindex="-1"><a class="header-anchor" href="#空值"><span>空值</span></a></h2><pre><code>无效的，未指定的，内容不存在的，未知的或不可预知的值、并不是空格或者0
	如果集合中含有null，不能使用not in相当于and 连接 表达式中null为false使结果永远为null
	但可以使用in相当于or 连接 表达式中含null不影响结果
	select * from emp where deptno in (10,20,null)
	空值永远不等于null，判断null 用is null 或is not null 不要用列名=null
	null的排序：null值最大:nulls First和 null last 调节显示位置		
	包含null的表达式都为null
	(注意求和的时候显示null值，要用nvl函数nvl（a,b）解决 )，sum（null）、+null
	组函数会自动滤空；可以嵌套滤空函数来屏蔽他的滤空功能；select count(*), 
	count(nvl(comm,0)) from emp;
</code></pre><h2 id="其他语句" tabindex="-1"><a class="header-anchor" href="#其他语句"><span>其他语句</span></a></h2><pre><code>将查询语句保存在文件中 spool d:\\基本查询.txt spool off
	连接数据库语句sqlplus scott/password@192.168.198.130:1521/orcl记得不要加分号！！！
	查询当前用户show user
	当前用户下的表select * from tab;
	表的结构desc 表名
	清屏host cls
	显示行宽show linesize
	设置行宽set linesize 120
	设置列宽col 列名 for a8（a8，a是字符串，a8，8个字符串）或者col 列名 for 9999
	（9代表一个数字位数，9999四个数字）
	执行上一条语句/
	显示时间set timing on、set timing off
	关闭提示 set feedback on set feedback off
	导入脚本@d:\\temp
	修改错误语句：ed或者输入错误行数，然后 c  \\错误单词\\正确单词
	修改日期格式
	select * from v$nls_parameters;alter session set NLS_DATE_FORMAT=&#39;yyyy-mm-dd&#39;;
	参数替代：列名、表名（全部都可以）--地址符（ &amp; 值） 手动输入
	执行计划explain plan for select * from emp where deptno=10;判断sql效率
	select * from table(dbms_xplan.display)
	字符串可以表示一个字符数字日期，日期和字符串只能在单引号中出现，双引号表示列的别名，
	每当返回一行时，字符串被输出一次
	关键字能缩写的就是sqlplus（oracle的特性），不能的是sql，配置pl/sqldevelope必须32位
	管理员可以主机认证随便密码和用户名，只要写as dba和正确密码认证，而普通用户不行
</code></pre><h2 id="sql优化" tabindex="-1"><a class="header-anchor" href="#sql优化"><span>sql优化</span></a></h2><pre><code>①尽量使用列名
	②where 解析的顺序，从右向左，and容易假的放右，or容易真的放右
	③尽量使用where、少用having
	④尽量使用多表查询、不要子查询
	⑤尽量不要使用集合运算
</code></pre><h2 id="事务" tabindex="-1"><a class="header-anchor" href="#事务"><span>事务</span></a></h2><pre><code>可以回滚，oracle自动开启事务，必须提交了数据库才会更新，而mysql手动
	commit提交\\rollback回滚
	起始标志: 事务中的第一条DML语句,相当于DML+commit
	结束标志：
	提交： 显式commit  	  隐式正常退出 DDL DCL
    回滚： 显式rollback   隐式：非正常退出 掉电  宕机
	set transaction read only;
	数据提交后不一定会保存下来，可能有临时表
	事务的保存点
	中间不能提交事务
		rollback to savepoint a;
		savepoint a
</code></pre><h2 id="oracle隔离级别" tabindex="-1"><a class="header-anchor" href="#oracle隔离级别"><span>oracle隔离级别</span></a></h2><pre><code>oracle支持read commit（默认）、serializable、read only
</code></pre><h2 id="数据库对象" tabindex="-1"><a class="header-anchor" href="#数据库对象"><span>数据库对象</span></a></h2><h3 id="表" tabindex="-1"><a class="header-anchor" href="#表"><span>表</span></a></h3><pre><code>标准表（自己创建的表）
	索引表
	临时表
		手动创建 create global temporary table  ****
		自动创建：排序
		特点：当事务或者会话结束的时候，表中的数据自动删除*/
</code></pre><h4 id="创建表" tabindex="-1"><a class="header-anchor" href="#创建表"><span>创建表</span></a></h4><pre><code>create table [schema.]tablename (column datatype[default expr][，..]);
</code></pre><h5 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型"><span>数据类型</span></a></h5><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/438148725c275b842adb8.png" alt="数据库数据类型.png" tabindex="0"><figcaption>数据库数据类型.png</figcaption></figure><h5 id="约束" tabindex="-1"><a class="header-anchor" href="#约束"><span>约束</span></a></h5><pre><code>create table student(
	sid number constraint student_pk primary key,
	sname varchar2(20) constraint student_name_notnull not null,
	gender varchar2(2) constraint student_gender check (gender in (&#39;男&#39;,&#39;女&#39;)),
	email varchar2(40) constraint student_email_unique unique
                		constraint student_email_notnull not null,
	deptno number constraint student_fk references dept(deptno) on delete set null);
	主键是有唯一性质，唯一有索引性质，故查主键即查索引，速度最快
	外键一定是主表的主键
	删表时一定先删字表再删主表，如果直接删主表会出现由于约束无法删除的问题
	删除主表的数据可以先删除子表的关联数据，再删主表数据
	也可以使用级联删除在外键建约束时加上on delete casacade
	数据完整性表示约束，约束级别，表级别约束（联合主键），列级约束				
</code></pre><h4 id="子查询创建表" tabindex="-1"><a class="header-anchor" href="#子查询创建表"><span>子查询创建表</span></a></h4><pre><code>create table xxx[(column,column)] as subquery
	create table emp20  as select * from emp where deptno=20;
	create table empinfo  as  select e.empno,e.ename,e.sal,e.sal*12 annsal,
	d.dname  from emp e,dept d  where e.deptno=d.deptno;创建表并导入数据
	create table emp10 as select * from emp where 1=2;只创建结构
</code></pre><h4 id="删除表" tabindex="-1"><a class="header-anchor" href="#删除表"><span>删除表</span></a></h4><pre><code>	drop table 表名;表已删除。没有真正删除，到回收站 
</code></pre><h5 id="查看回收站-管理员没有回收站" tabindex="-1"><a class="header-anchor" href="#查看回收站-管理员没有回收站"><span>查看回收站(管理员没有回收站)</span></a></h5><pre><code>	show recyclebin;
</code></pre><h5 id="清空回收站" tabindex="-1"><a class="header-anchor" href="#清空回收站"><span>清空回收站</span></a></h5><pre><code>	purge recyclebin;
</code></pre><h5 id="删除表后不进入回收站" tabindex="-1"><a class="header-anchor" href="#删除表后不进入回收站"><span>删除表后不进入回收站</span></a></h5><pre><code>	drop table purge
</code></pre><h5 id="找回在回收站中的表" tabindex="-1"><a class="header-anchor" href="#找回在回收站中的表"><span>找回在回收站中的表</span></a></h5><pre><code>	select * from &quot;BIN$384BF4yOT+aAlXzC7eLPIA==$0&quot;
</code></pre><h5 id="闪回删除-回收站" tabindex="-1"><a class="header-anchor" href="#闪回删除-回收站"><span>闪回删除 ---&gt; 回收站</span></a></h5><pre><code>	flashback table TESTSAVEPOINT to before drop;
</code></pre><h5 id="rowid-行地址-伪列" tabindex="-1"><a class="header-anchor" href="#rowid-行地址-伪列"><span>rowid 行地址（伪列）</span></a></h5><pre><code>select rowid,empno,ename,sal from emp;
	ROWID   EMPNO ENAME  SAL  
	AAAMfPAAEAAAAAgAAA 7369 SMITH 800    
	select * from emp where rowid=&#39;AAAMfPAAEAAAAAgAAJ&#39;;
</code></pre><h4 id="修改表" tabindex="-1"><a class="header-anchor" href="#修改表"><span>修改表</span></a></h4><h5 id="重命名表" tabindex="-1"><a class="header-anchor" href="#重命名表"><span>重命名表</span></a></h5><pre><code>rename test1 to test2;
</code></pre><h5 id="增加新列" tabindex="-1"><a class="header-anchor" href="#增加新列"><span>增加新列</span></a></h5><pre><code>alter table test1 add column 列名1 类型[约束](s);
</code></pre><h5 id="删除列" tabindex="-1"><a class="header-anchor" href="#删除列"><span>删除列</span></a></h5><pre><code>alter table test1 drop column 列名1;
</code></pre><h5 id="修改列" tabindex="-1"><a class="header-anchor" href="#修改列"><span>修改列</span></a></h5><pre><code>alter table test1 modify 列名1 类型[约束];
</code></pre><h5 id="重命名列" tabindex="-1"><a class="header-anchor" href="#重命名列"><span>重命名列</span></a></h5><pre><code>alter table test1 rename column 列名 to 列名;
</code></pre><h3 id="数据" tabindex="-1"><a class="header-anchor" href="#数据"><span>数据</span></a></h3><h4 id="插入数据" tabindex="-1"><a class="header-anchor" href="#插入数据"><span>插入数据</span></a></h4><pre><code>insert into emp(empno,ename,sal,deptno) values(1001,&#39;Tom_AB&#39;,3000,10);
	insert into emp values(1001,&#39;Tom_AB&#39;,3000,10);字段顺序个数必须相同，没有则置null
	一次插入多条记录,一次性将emp中，所有10号部门的员工插入到emp10中，不必写values
	insert into emp10 select * from emp where deptno=10;
	海量插入数据：效率高  1、数据泵（PLSQL程序） dbms_datapump(程序包) 
	2、SQL*Loader数据加载工具 3、外部表
</code></pre><h4 id="修改数据" tabindex="-1"><a class="header-anchor" href="#修改数据"><span>修改数据</span></a></h4><pre><code>update 表名 set 列名=值(s) where condition(s)
	更新与mysql一样，子查询增删改查都能用、数据完整性指约束
</code></pre><h4 id="删除数据" tabindex="-1"><a class="header-anchor" href="#删除数据"><span>删除数据</span></a></h4><pre><code>delete from 表名 where condition(s)
</code></pre><h5 id="delete和truncate的区别" tabindex="-1"><a class="header-anchor" href="#delete和truncate的区别"><span>delete和truncate的区别</span></a></h5><pre><code>delete逐条删除DML  (可以回滚) ；
	truncate先摧毁表 再重建DDL（不可以回滚）     
	delete不会释放空间 
	truncate会释放空间
	delete会产生碎片（删除的位置不继续存放新数据，
	而是占着位置使数据不能连续起来，影响查询效率，
	去除碎片：1\\alter table&lt;表名&gt; move 
	2\\数据导出和导入exp imp exdp impdp） 
	truncate不会产生碎片
	delete可以闪回(flashback)  truncate不可以，
	绝大多数操作可以撤销即使提交了  flashback其实是一种恢复
	delete from testdelete 块，在mysql 中truncate和delete相反
	（重要）undo数据（还原数据）oracle的强大与闪回有关
	drop table testdelete purge;完全删除表，不进入回收站
	truncate table testdelete 慢
</code></pre><h3 id="视图" tabindex="-1"><a class="header-anchor" href="#视图"><span>视图</span></a></h3><h4 id="创建视图" tabindex="-1"><a class="header-anchor" href="#创建视图"><span>创建视图</span></a></h4><pre><code>必须有创建视图的权限grant create view to scott 
	视图中没有数据，视图能简化查询语句，封装了一条复杂的查询语句，是一个虚表
	create or replace view empinfoview
	as
	select e.empno,e.ename,e.sal,e.sal*12 annsal,d.dname
	from emp e,dept d
	where e.deptno=d.deptno
	with read only;
	|with check option 只能插入与where一样的数据，
	最好不要通过视图对表中的数据进行修改，因为会受到很多限制
</code></pre><h4 id="删除视图" tabindex="-1"><a class="header-anchor" href="#删除视图"><span>删除视图</span></a></h4><pre><code>drop view 视图名
</code></pre><h3 id="序列" tabindex="-1"><a class="header-anchor" href="#序列"><span>序列</span></a></h3><pre><code>实质是数组在内存中，提高访问速率、自动增长的列，
	相当于mysql的increment，默认指针在1，从1开始
	select myseq.currval from dual;取得序列的下一个内容
	select myseq.nextval from dual;取得序列的当前内容
</code></pre><h4 id="创建序列" tabindex="-1"><a class="header-anchor" href="#创建序列"><span>创建序列</span></a></h4><pre><code>create sequence myseq;
	increment by n
	start with n
	[maxvalue n|nomaxvlaue]
	[minvalue n|nominvlaue]
	[cycle|nocycle]
	[cache n|nocache]
	insert into  testseq values(myseq.nextval,&#39;aaa&#39;);
</code></pre><h4 id="序列可能产生裂缝-数据不连续" tabindex="-1"><a class="header-anchor" href="#序列可能产生裂缝-数据不连续"><span>序列可能产生裂缝（数据不连续）</span></a></h4><pre><code>回滚
	系统异常
	多表共用同一个序列
</code></pre><h3 id="索引" tabindex="-1"><a class="header-anchor" href="#索引"><span>索引</span></a></h3><pre><code>索引加速数据存取、降低了i/o次数，提高访问性能
	索引所在的列经常更新就不要建立索引
</code></pre><h4 id="单列索引" tabindex="-1"><a class="header-anchor" href="#单列索引"><span>单列索引</span></a></h4><pre><code>create index 索引名 on 表名(列名);
</code></pre><h4 id="复合索引" tabindex="-1"><a class="header-anchor" href="#复合索引"><span>复合索引</span></a></h4><pre><code>create index 索引名 on 表名(列名1,列名2);
</code></pre><h4 id="删除索引" tabindex="-1"><a class="header-anchor" href="#删除索引"><span>删除索引</span></a></h4><pre><code>drop index 索引名;
</code></pre><h4 id="索引原理" tabindex="-1"><a class="header-anchor" href="#索引原理"><span>索引原理</span></a></h4><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/aea0aa071569b649d45a2.png" alt="索引原理.png" tabindex="0"><figcaption>索引原理.png</figcaption></figure><h3 id="同义词-别名" tabindex="-1"><a class="header-anchor" href="#同义词-别名"><span>同义词(别名)</span></a></h3><pre><code>能查询别的用户的表，synonym 为了安全
	select count(*) from hr.employees;
	grant select on hr.employees to scott
	create [public] synonym hremp for hr.employees;
	grant create synonym to scott
	drop [public] synonym emp;
	方便访问其他用户的数据库对象，缩短了对象名字的长度		
</code></pre><h3 id="表空间" tabindex="-1"><a class="header-anchor" href="#表空间"><span>表空间</span></a></h3><pre><code>create tablespace 表空间名
	datafile &#39;c:\\xxx.dbf&#39;
	size 100m
	autoextend on
	next 10m
</code></pre><h3 id="用户" tabindex="-1"><a class="header-anchor" href="#用户"><span>用户</span></a></h3><h4 id="创建用户" tabindex="-1"><a class="header-anchor" href="#创建用户"><span>创建用户</span></a></h4><pre><code>create user 用户名
	identified by 密码
	default tablespace 表空间名
</code></pre><h4 id="用户赋予权限" tabindex="-1"><a class="header-anchor" href="#用户赋予权限"><span>用户赋予权限</span></a></h4><pre><code>grant 角色 to 用户
	connnect角色、resource角色、dba角色，
	没授权的话登录没有任何权限
</code></pre><h2 id="oracle概述" tabindex="-1"><a class="header-anchor" href="#oracle概述"><span>oracle概述</span></a></h2><h3 id="集群" tabindex="-1"><a class="header-anchor" href="#集群"><span>集群</span></a></h3><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/59d0830ebdfd8e34b8640.png" alt="集群.png" tabindex="0"><figcaption>集群.png</figcaption></figure><h3 id="体系结构" tabindex="-1"><a class="header-anchor" href="#体系结构"><span>体系结构</span></a></h3><h4 id="数据库" tabindex="-1"><a class="header-anchor" href="#数据库"><span>数据库：</span></a></h4><pre><code>oracle数据库是数据的物理存储(一堆文件)，包括数据文件ORA或者DBF、
	控制文件、联机日志、参数文件等。一个操作系统只有一个oracle数据库
</code></pre><h4 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h4><pre><code>oracle 数据库读入内存时的映射、oracle数据库可以有多个实例，
	但建议一个数据库只有一个实例，实例用于操作数据库
</code></pre><h4 id="数据文件" tabindex="-1"><a class="header-anchor" href="#数据文件"><span>数据文件</span></a></h4><pre><code>数据库的物理存储单位，数据存储在表空间的一个或多个数据文件中、
</code></pre><h4 id="表空间-1" tabindex="-1"><a class="header-anchor" href="#表空间-1"><span>表空间</span></a></h4><pre><code>一个数据文件只属于一个表空间，一个表空间包括多个数据文件、删除数据文件，只能删除表空间
	表空间由同一磁盘上的一个或多个文件组成，一个数据库有多个表空间，
	每个数据库至少有一个表空间
</code></pre><h4 id="用户-1" tabindex="-1"><a class="header-anchor" href="#用户-1"><span>用户：</span></a></h4><pre><code>实例下建立的，不同实例中可以建相同名字的用户，
	数据的操作CRUD由用户来执行，表空间把表数据放到一个或者多个数据文件中，
	因为不同的用户可以在同一个表空间建立同一个名字的表。
</code></pre><h4 id="原理图" tabindex="-1"><a class="header-anchor" href="#原理图"><span>原理图</span></a></h4><p><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/3892bb77e055b88ad5157.png" alt="体系结构.png"><br> 自己的理解：数据库与实例对应，一个数据库可以有多个实例，表空间与数据文件对应，<br> 一个表空间里面有多个数据文件，表空间与用户关联用户（两者同级），<br> 每个用户对应的表都是不同的，但也可以同名，可以通过授权的方式实现相互访问</p><h2 id="sql的类型" tabindex="-1"><a class="header-anchor" href="#sql的类型"><span>SQL的类型</span></a></h2><pre><code>DML（Data Manipulation Language 数据操作语言）: select insert update delete
	DDL(Data Definition Language 数据定义语言): 
	create table,alter table,truncate table,drop table
	create/drop view,sequnece,index,synonym(同义词)
	DCL(Data Control Language 数据控制语言): grant(授权) revoke(撤销权限)
</code></pre><h2 id="pl-sql" tabindex="-1"><a class="header-anchor" href="#pl-sql"><span>PL/SQL</span></a></h2><pre><code>面向过程的编程语言，对sql语言的扩展，结合sql语言的扩展，速率比原生sql高
</code></pre><h3 id="pl-sql语法" tabindex="-1"><a class="header-anchor" href="#pl-sql语法"><span>PL/SQL语法</span></a></h3><pre><code>declare 
	说明部分（变量说明，光标说明，例外说明）
	begin
	语句序列 （sql语句）
	exception
	例外处理语句
	End
	/
</code></pre><h3 id="变量的定义" tabindex="-1"><a class="header-anchor" href="#变量的定义"><span>变量的定义:</span></a></h3><pre><code>(char varchar2 date number boolean long)
	var1 char(15);变量名，数据类型和长度分号结束说明语句
	married boolean := true;
	psal number(7,2);
	my_name emp.ename%type;
	引用型变量：my_name的类型与emp表中的ename列的类型一样，引用一列
	emp_rec emp%rowtype;
	记录型变量;记录整个表的引用
	数组，每个值是表中的每一列，获得某一列就 .列名
	变量的赋值 变量名 ：= 值;
	select后一定要定义into变量接收
</code></pre><h3 id="if语句" tabindex="-1"><a class="header-anchor" href="#if语句"><span>if语句</span></a></h3><pre><code>if 条件 then 语句; 
	end if;
	
	if 条件 then 语句;
	else 语句2;
	end if;
	
	if 条件 then 语句1；
	elsif 条件 then 语句2;
	else 语句3;
	end if；
</code></pre><h3 id="循环" tabindex="-1"><a class="header-anchor" href="#循环"><span>循环</span></a></h3><pre><code>while 条件
	loop
	语句;
	条件调节语句；
	end loop;
	
	for i in 1..3
	loop
	语句；
	end loop；
	
	loop
	exit [when 条件]
	语句;
	条件调节语句；
	end loop;
	找出退出条件是关键，一般是notfound和题目条件
</code></pre><h3 id="游标-光标cursor" tabindex="-1"><a class="header-anchor" href="#游标-光标cursor"><span>游标（光标cursor）</span></a></h3><pre><code>declare 
	定义游标：cursor 游标名 [(参数名 数据类型；参数名 数据类型..)] is 语句;
	定义接收游标的变量：变量名 数据类型；大多数为引用型变量，使用了函数后为一般类型
	begin
	打开游标：open 游标名[(参数名 数据类型；参数名 数据类型..)] ；
	打开循环：loop 
	取游标的值：fetch 游标名 into 变量名，变量名；变量的类型必须与游标取出的东西一致，
	关键是根据程序穿过来的参数调用带参数的游标（根据参数查询）
	查询出相应的结果赋值给接收游标的变量进行进一步的操作或者获得传过来的参数后继续操作
	游标结束方式：exit when 游标名%notfound；
	关闭循环：end loop；
	关闭游标： close 游标名；
	end;
	
	光标的属性： %isopen   %rowcount(影响的行数)%found    %notfound
	有参数的游标抓取不用写参数
</code></pre><h3 id="异常" tabindex="-1"><a class="header-anchor" href="#异常"><span>异常</span></a></h3><h4 id="系统异常不用主动raise-异常名" tabindex="-1"><a class="header-anchor" href="#系统异常不用主动raise-异常名"><span>系统异常不用主动raise 异常名</span></a></h4><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/bce7347d76795608a9a08.png" alt="系统异常.png" tabindex="0"><figcaption>系统异常.png</figcaption></figure><h4 id="自定义异常" tabindex="-1"><a class="header-anchor" href="#自定义异常"><span>自定义异常</span></a></h4><pre><code>declare
	异常名 Exception；
	begin
		raise 异常名；
	exception
		when 异常名 then 语句；
		when others then 语句；
	end;
	进程：pmon进程(proccesss monitor)自动finally关闭
</code></pre><h3 id="存储过程" tabindex="-1"><a class="header-anchor" href="#存储过程"><span>存储过程</span></a></h3><h4 id="定义" tabindex="-1"><a class="header-anchor" href="#定义"><span>定义</span></a></h4><pre><code>create [or replace] PROCEDURE 过程名 [（参数名 in/out 数据类型）]
	is/as 定义变量
	begin plsql子程序体;
	End 过程名;
</code></pre><h4 id="调用" tabindex="-1"><a class="header-anchor" href="#调用"><span>调用</span></a></h4><pre><code>declare 
		输入参数 数据类型；
		输出参数 数据类型；
	begin 
		 过程名（输入参数名=&gt;值，输出参数名=值）
		commit；
	end；
</code></pre><h3 id="存储函数" tabindex="-1"><a class="header-anchor" href="#存储函数"><span>存储函数</span></a></h3><h4 id="定义-1" tabindex="-1"><a class="header-anchor" href="#定义-1"><span>定义</span></a></h4><pre><code>create or replace function 函数名(参数名in/out 数据类型..)return 数据类型
	is 
	[结果变量 数据类型；]
	begin 
	  return（结果变量）;
	end 函数名;
</code></pre><h3 id="存储函数与存储过程的区别" tabindex="-1"><a class="header-anchor" href="#存储函数与存储过程的区别"><span>存储函数与存储过程的区别</span></a></h3><pre><code>函数可以有返回值，而过程没有返回值，
	但过程和函数都可以通过指定一个或多个输出参数，
	可以利用out参数在过程和函数中实现返多个值
</code></pre><h3 id="触发器" tabindex="-1"><a class="header-anchor" href="#触发器"><span>触发器</span></a></h3><pre><code>查询没有触发器
	与表关联，存储的pl/sql程序，每当特定语句执行，触发定义触发器中定义的语法
</code></pre><h3 id="创建" tabindex="-1"><a class="header-anchor" href="#创建"><span>创建</span></a></h3><pre><code>create [or replace ] trigger 触发器名
		before|after
		delete|insert|update[of 列名]
		on 表名
		[for each row [when(条件)]]有这条语句就是行级触发器
	declare
	plsql语句
	begin
	plsql 块
	end 触发器名;
</code></pre><h3 id="触发器的分类" tabindex="-1"><a class="header-anchor" href="#触发器的分类"><span>触发器的分类</span></a></h3><pre><code>触发器要判断行级还是语句级，面试
语句级触发器：
	在指定的操作语句操作之前或之后执行，不管这条语句影响了多少行
	行级触发器：
	触发语句作用与每条记录都被触发在行级触发器中使用old和new伪记录变量识别值的状态
</code></pre><figure><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/2f9e74d404c197b58d825.png" alt="针对行级触发器的语句.png" tabindex="0"><figcaption>针对行级触发器的语句.png</figcaption></figure><h3 id="触发器的用途" tabindex="-1"><a class="header-anchor" href="#触发器的用途"><span>触发器的用途</span></a></h3><pre><code>数据确认
	安全性检查
	审计（日志），跟踪表上的数据操作
	数据的备份和同步
</code></pre><h4 id="安全性检查" tabindex="-1"><a class="header-anchor" href="#安全性检查"><span>安全性检查</span></a></h4><pre><code>/*
	实施复杂的安全性检查
	禁止在非工作时间 插入新员工
	1、周末:  to_char(sysdate,&#39;day&#39;) in (&#39;星期六&#39;,&#39;星期日&#39;)
	2、上班前 下班后：to_number(to_char(sysdate,&#39;hh24&#39;)) not between 9 and 17
	*/
	create or replace trigger securityemp
	before insert
	on emp
	begin
	   if to_char(sysdate,&#39;day&#39;) in (&#39;星期六&#39;,&#39;星期日&#39;,&#39;星期五&#39;) or 
		  to_number(to_char(sysdate,&#39;hh24&#39;)) not between 9 and 17 then
		  --禁止insert
		  raise_application_error(-20001,&#39;禁止在非工作时间插入新员工&#39;);
	   end if;
	end securityemp;
	/
	/*
</code></pre><h4 id="数据的确认" tabindex="-1"><a class="header-anchor" href="#数据的确认"><span>数据的确认</span></a></h4><pre><code>涨后的薪水不能少于涨前的薪水
	*/
	create or replace trigger checksalary
	before update
	on emp
	for each row
	begin
		if :new.sal &lt; :old.sal then
		   raise_application_error(-20002,&#39;涨后的薪水不能少于涨前的薪水&#39;);
		end if;
	end checksalary;
	/
</code></pre><h3 id="其他语句-1" tabindex="-1"><a class="header-anchor" href="#其他语句-1"><span>其他语句</span></a></h3><pre><code>--接受键盘输入变量num：是一个地址值，在该地址上保存了输入的值
	accept num prompt &#39;请输入一个数字&#39;;
	declare 
	--定义变量保存输入 的数字pnum number := &amp;num;
	使用别的工具才行
	控制台输出dbms_output.put_line();
	raise application_errror(-20001,‘不能在非法时间内插入数据’)
	desc dbms_output 表示简化程序包的结构，简化查看帮助文档
</code></pre><h3 id="包-在out参数中使用光标-解决了输出参数太多的问题" tabindex="-1"><a class="header-anchor" href="#包-在out参数中使用光标-解决了输出参数太多的问题"><span>包：在out参数中使用光标，解决了输出参数太多的问题</span></a></h3><pre><code>--2、查询某个部门中的所有员工信息 ----&gt; 返回的是集合
	create or replace package mypackage is
	type empcursor is ref cursor;
	procedure queryEmpList(dno in number,empList out empcursor);
	end mypackage;
	/
	create or replace package body mypackage is
	procedure queryEmpList(dno in number,empList out empcursor)
	as
	begin
	open empList for select * from emp where deptno=dno;
	end;
	end mypackage;
	/
</code></pre><h2 id="java程序调用存储过程、存储函数、包、包体" tabindex="-1"><a class="header-anchor" href="#java程序调用存储过程、存储函数、包、包体"><span>Java程序调用存储过程、存储函数、包、包体</span></a></h2><h3 id="导入ojdbc14-jar" tabindex="-1"><a class="header-anchor" href="#导入ojdbc14-jar"><span>导入ojdbc14.jar</span></a></h3><h3 id="声明包、包体、存储过程、存储函数" tabindex="-1"><a class="header-anchor" href="#声明包、包体、存储过程、存储函数"><span>声明包、包体、存储过程、存储函数</span></a></h3><h3 id="jdbcutils" tabindex="-1"><a class="header-anchor" href="#jdbcutils"><span>jdbcutils</span></a></h3><pre><code>package demo;
	public class JDBCUtils {
	private static String driver = &quot;oracle.jdbc.OracleDriver&quot;;
	private static String url = &quot;jdbc:oracle:thin:@192.168.137.129:1521/orcl&quot;;
	private static String user = &quot;scott&quot;;
	private static String password = &quot;tiger&quot;;
	static{
		//DriverManager.registerDriver(driver)
		try {
			Class.forName(driver);
		} catch (ClassNotFoundException e) {
			throw new ExceptionInInitializerError(e);
		}
	}
	public static Connection getConnection(){
		try {
			return DriverManager.getConnection(url, user, password);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return null;
	}

	public static void release(Connection conn,Statement st,ResultSet rs){
		if(rs != null){
			try {
				rs.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}finally{
				rs = null; ///-----&gt; 原因：Java GC: Java的GC不受代码的控制
			}
		}
		if(st != null){
			try {
				st.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}finally{
				st = null;
			}
		}
		if(conn != null){
			try {
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}finally{
				conn = null;
			}
		}
	}
	}
</code></pre><h3 id="调用存储函数" tabindex="-1"><a class="header-anchor" href="#调用存储函数"><span>调用存储函数</span></a></h3><pre><code>public void testFunction(){
	//{?= call &lt;procedure-name&gt;[(&lt;arg1&gt;,&lt;arg2&gt;, ...)]}
	String sql = &quot;{?=call queryEmpIncome(?)}&quot;;
	Connection conn = null;
	CallableStatement call = null;
	try {
		conn = JDBCUtils.getConnection();
		call = conn.prepareCall(sql);		
		call.registerOutParameter(1, OracleTypes.NUMBER);
		call.setInt(2, 7839);
		call.execute();
		double income = call.getDouble(1);
		System.out.println(income);
	} catch (Exception e) {
		e.printStackTrace();
	}finally{
		JDBCUtils.release(conn, call, null);
	}		
	}
	--查询某个员工的年收入
	create or replace function queryEmpIncome(eno in number) 
	return number
	is
		   psal emp.sal%type;
		   pcomm emp.comm%type;
	begin
		   select sal,comm into psal,pcomm from emp where empno=eno; 
		   return psal*12+nvl(pcomm,0);
	end queryEmpIncome;
	/
</code></pre><h3 id="调用存储过程" tabindex="-1"><a class="header-anchor" href="#调用存储过程"><span>调用存储过程</span></a></h3><pre><code>@Test
	public void testProcedure(){
		//{call &lt;procedure-name&gt;[(&lt;arg1&gt;,&lt;arg2&gt;, ...)]}
		String sql = &quot;{call queryEmpInformation(?,?,?,?)}&quot;;
		Connection conn = null;
		CallableStatement call = null;
		try {
			conn = JDBCUtils.getConnection();
			call = conn.prepareCall(sql);	
			call.setInt(1,7839);
			call.registerOutParameter(2, OracleTypes.VARCHAR);
			call.registerOutParameter(3, OracleTypes.NUMBER);
			call.registerOutParameter(4, OracleTypes.VARCHAR);
			call.execute();	
			String name = call.getString(2);
			double sal = call.getDouble(3);
			String job = call.getString(4);	
			System.out.println(name+&quot;\\t&quot;+sal+&quot;\\t&quot;+job);
		} catch (Exception e) {
			e.printStackTrace();
		}finally{
			JDBCUtils.release(conn, call, null);
		}
	}
	--给指定的员工涨100，并且打印涨前和涨后的薪水
	create or replace procedure raiseSalary(eno in number)
	is
		   psal emp.sal%type;
	begin
		   select sal into psal from emp where empno=eno;
		   update emp set sal=sal+100 where empno=eno;
		   --要不要commit？
		   dbms_output.put_line(&#39;涨前:&#39;||psal||&#39;   涨后：&#39;||(psal+100));
	end raiseSalary;
	/
</code></pre><h3 id="调用包及包体中的过程" tabindex="-1"><a class="header-anchor" href="#调用包及包体中的过程"><span>调用包及包体中的过程</span></a></h3><pre><code>public void testCursor(){
	String sql = &quot;{call mypackage.QUERYEMPLIST(?,?)}&quot;;
	Connection conn = null;
	CallableStatement call = null;
	ResultSet rs = null;
	try {
		conn = JDBCUtils.getConnection();
		call = conn.prepareCall(sql);
		call.setInt(1,20);
		call.registerOutParameter(2, OracleTypes.CURSOR);
		call.execute();
		rs = ((OracleCallableStatement)call).getCursor(2);
		while(rs.next()){
			String name = rs.getString(&quot;ename&quot;);
			double sal = rs.getDouble(&quot;sal&quot;);
			System.out.println(name+&quot;\\t&quot;+sal);
		}
	} catch (Exception e) {
		e.printStackTrace();
	}finally{
		在这里将光标关掉了，不用在存储过程中关
		JDBCUtils.release(conn, call, rs);
	}		
	--2、查询某个部门中的所有员工信息 ----&gt; 返回的是集合
	create or replace package mypackage is
		   type empcursor is ref cursor;
		   procedure queryEmpList(dno in number,empList out empcursor);
	end mypackage;
	/
	create or replace package body mypackage is
		   procedure queryEmpList(dno in number,empList out empcursor)
		   as
		   begin
			  open empList for select * from emp where deptno=dno;
		   end;
	end mypackage;
	/
</code></pre><h3 id="主要步骤" tabindex="-1"><a class="header-anchor" href="#主要步骤"><span>主要步骤</span></a></h3><pre><code>编写sql
	conn.preparecall(sql)
	call.setXXX
	call.registOutputSteam
	[[oralcestatement]call].getxxx
	in\\out 参数不用重复定义
</code></pre>`,223),s=[l];function o(c,d){return t(),n("div",null,s)}const h=e(r,[["render",o],["__file","oracle.html.vue"]]),m=JSON.parse(`{"path":"/backend/database/oracle.html","title":"oracle","lang":"zh-CN","frontmatter":{"title":"oracle","date":"2023-01-01T00:00:00.000Z","tags":"oracle","categories":"数据库","description":"oralce:大型数据库 oracle 10g 单表查询 select: condition order by group by group by增强 函数：简化操作 单行函数 字符函数 大小写控制函数 字符控制函数 数值函数 日期函数 转换函数 oracle转换函数.png select to_char(sysdate,'yyyy-mm-dd hh2...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/database/oracle.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"oracle"}],["meta",{"property":"og:description","content":"oralce:大型数据库 oracle 10g 单表查询 select: condition order by group by group by增强 函数：简化操作 单行函数 字符函数 大小写控制函数 字符控制函数 数值函数 日期函数 转换函数 oracle转换函数.png select to_char(sysdate,'yyyy-mm-dd hh2..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://290ff162.telegraph-image-eg9.pages.dev/file/9988d14146fdb19c78d04.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"oracle\\",\\"image\\":[\\"https://290ff162.telegraph-image-eg9.pages.dev/file/9988d14146fdb19c78d04.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/081898e8834c711d9d02d.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/438148725c275b842adb8.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/aea0aa071569b649d45a2.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/59d0830ebdfd8e34b8640.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/3892bb77e055b88ad5157.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/bce7347d76795608a9a08.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/2f9e74d404c197b58d825.png\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"oracle 10g","slug":"oracle-10g","link":"#oracle-10g","children":[{"level":3,"title":"单表查询","slug":"单表查询","link":"#单表查询","children":[]}]},{"level":2,"title":"函数：简化操作","slug":"函数-简化操作","link":"#函数-简化操作","children":[{"level":3,"title":"单行函数","slug":"单行函数","link":"#单行函数","children":[]},{"level":3,"title":"多行函数、组函数、分组函数","slug":"多行函数、组函数、分组函数","link":"#多行函数、组函数、分组函数","children":[]},{"level":3,"title":"子查询（内查询）","slug":"子查询-内查询","link":"#子查询-内查询","children":[]},{"level":3,"title":"集合运算:union、intersect交集、minus差集","slug":"集合运算-union、intersect交集、minus差集","link":"#集合运算-union、intersect交集、minus差集","children":[]},{"level":3,"title":"rownum （伪列）行号:top-n问题","slug":"rownum-伪列-行号-top-n问题","link":"#rownum-伪列-行号-top-n问题","children":[]},{"level":3,"title":"分页查询","slug":"分页查询","link":"#分页查询","children":[]},{"level":3,"title":"多表查询：至少有n-1个连接条件才能去掉笛卡尔集","slug":"多表查询-至少有n-1个连接条件才能去掉笛卡尔集","link":"#多表查询-至少有n-1个连接条件才能去掉笛卡尔集","children":[]},{"level":3,"title":"自连接","slug":"自连接","link":"#自连接","children":[]},{"level":3,"title":"层次查询:上层的员工等于下层的老板，从哪个节点开始遍历树","slug":"层次查询-上层的员工等于下层的老板-从哪个节点开始遍历树","link":"#层次查询-上层的员工等于下层的老板-从哪个节点开始遍历树","children":[]}]},{"level":2,"title":"空值","slug":"空值","link":"#空值","children":[]},{"level":2,"title":"其他语句","slug":"其他语句","link":"#其他语句","children":[]},{"level":2,"title":"sql优化","slug":"sql优化","link":"#sql优化","children":[]},{"level":2,"title":"事务","slug":"事务","link":"#事务","children":[]},{"level":2,"title":"oracle隔离级别","slug":"oracle隔离级别","link":"#oracle隔离级别","children":[]},{"level":2,"title":"数据库对象","slug":"数据库对象","link":"#数据库对象","children":[{"level":3,"title":"表","slug":"表","link":"#表","children":[]},{"level":3,"title":"数据","slug":"数据","link":"#数据","children":[]},{"level":3,"title":"视图","slug":"视图","link":"#视图","children":[]},{"level":3,"title":"序列","slug":"序列","link":"#序列","children":[]},{"level":3,"title":"索引","slug":"索引","link":"#索引","children":[]},{"level":3,"title":"同义词(别名)","slug":"同义词-别名","link":"#同义词-别名","children":[]},{"level":3,"title":"表空间","slug":"表空间","link":"#表空间","children":[]},{"level":3,"title":"用户","slug":"用户","link":"#用户","children":[]}]},{"level":2,"title":"oracle概述","slug":"oracle概述","link":"#oracle概述","children":[{"level":3,"title":"集群","slug":"集群","link":"#集群","children":[]},{"level":3,"title":"体系结构","slug":"体系结构","link":"#体系结构","children":[]}]},{"level":2,"title":"SQL的类型","slug":"sql的类型","link":"#sql的类型","children":[]},{"level":2,"title":"PL/SQL","slug":"pl-sql","link":"#pl-sql","children":[{"level":3,"title":"PL/SQL语法","slug":"pl-sql语法","link":"#pl-sql语法","children":[]},{"level":3,"title":"变量的定义:","slug":"变量的定义","link":"#变量的定义","children":[]},{"level":3,"title":"if语句","slug":"if语句","link":"#if语句","children":[]},{"level":3,"title":"循环","slug":"循环","link":"#循环","children":[]},{"level":3,"title":"游标（光标cursor）","slug":"游标-光标cursor","link":"#游标-光标cursor","children":[]},{"level":3,"title":"异常","slug":"异常","link":"#异常","children":[]},{"level":3,"title":"存储过程","slug":"存储过程","link":"#存储过程","children":[]},{"level":3,"title":"存储函数","slug":"存储函数","link":"#存储函数","children":[]},{"level":3,"title":"存储函数与存储过程的区别","slug":"存储函数与存储过程的区别","link":"#存储函数与存储过程的区别","children":[]},{"level":3,"title":"触发器","slug":"触发器","link":"#触发器","children":[]},{"level":3,"title":"创建","slug":"创建","link":"#创建","children":[]},{"level":3,"title":"触发器的分类","slug":"触发器的分类","link":"#触发器的分类","children":[]},{"level":3,"title":"触发器的用途","slug":"触发器的用途","link":"#触发器的用途","children":[]},{"level":3,"title":"其他语句","slug":"其他语句-1","link":"#其他语句-1","children":[]},{"level":3,"title":"包：在out参数中使用光标，解决了输出参数太多的问题","slug":"包-在out参数中使用光标-解决了输出参数太多的问题","link":"#包-在out参数中使用光标-解决了输出参数太多的问题","children":[]}]},{"level":2,"title":"Java程序调用存储过程、存储函数、包、包体","slug":"java程序调用存储过程、存储函数、包、包体","link":"#java程序调用存储过程、存储函数、包、包体","children":[{"level":3,"title":"导入ojdbc14.jar","slug":"导入ojdbc14-jar","link":"#导入ojdbc14-jar","children":[]},{"level":3,"title":"声明包、包体、存储过程、存储函数","slug":"声明包、包体、存储过程、存储函数","link":"#声明包、包体、存储过程、存储函数","children":[]},{"level":3,"title":"jdbcutils","slug":"jdbcutils","link":"#jdbcutils","children":[]},{"level":3,"title":"调用存储函数","slug":"调用存储函数","link":"#调用存储函数","children":[]},{"level":3,"title":"调用存储过程","slug":"调用存储过程","link":"#调用存储过程","children":[]},{"level":3,"title":"调用包及包体中的过程","slug":"调用包及包体中的过程","link":"#调用包及包体中的过程","children":[]},{"level":3,"title":"主要步骤","slug":"主要步骤","link":"#主要步骤","children":[]}]}],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":25.91,"words":7772},"filePathRelative":"backend/database/oracle.md","localizedDate":"2023年1月1日","excerpt":"<p>oralce:大型数据库</p>\\n<!--more-->\\n<h2>oracle 10g</h2>\\n<h3>单表查询</h3>\\n<pre><code>select *|[distinct] colum|expression|function() [as][alias](s)]\\n\\tfrom table[alias](s)|dual\\n\\t[where condition(s)]\\n\\t[group by column(s)]\\n\\t[having condition(s)] \\n\\t[order by column|number|alias|expression \\n\\t[asc|desc] [nulls first|nulls last](s)];\\n</code></pre>","autoDesc":true}`);export{h as comp,m as data};
