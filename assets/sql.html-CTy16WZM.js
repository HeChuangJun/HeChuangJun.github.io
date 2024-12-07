import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as n,a as l}from"./app-CAt2Ig6m.js";const i={},d=l(`<ul><li>t_grade成绩表</li></ul><table><thead><tr><th style="text-align:center;">name</th><th style="text-align:center;">kemu</th><th style="text-align:center;">fenshu</th></tr></thead><tbody><tr><td style="text-align:center;">张三</td><td style="text-align:center;">语文</td><td style="text-align:center;">81</td></tr><tr><td style="text-align:center;">张三</td><td style="text-align:center;">数学</td><td style="text-align:center;">72</td></tr><tr><td style="text-align:center;">李四</td><td style="text-align:center;">语文</td><td style="text-align:center;">76</td></tr><tr><td style="text-align:center;">李四</td><td style="text-align:center;">数学</td><td style="text-align:center;">90</td></tr><tr><td style="text-align:center;">王五</td><td style="text-align:center;">语文</td><td style="text-align:center;">81</td></tr><tr><td style="text-align:center;">王五</td><td style="text-align:center;">数学</td><td style="text-align:center;">100</td></tr><tr><td style="text-align:center;">...</td><td style="text-align:center;">...</td><td style="text-align:center;">...</td></tr></tbody></table><h2 id="case-when使用" tabindex="-1"><a class="header-anchor" href="#case-when使用"><span>case when使用</span></a></h2><ul><li>分数等级：每门课成绩的等级划分为三个，分数小于80为及格，大于等于80低于90分为中等；大于等于90分为优秀，结果如下</li></ul><table><thead><tr><th style="text-align:center;">name</th><th style="text-align:center;">kemu</th><th style="text-align:center;">fenshu</th></tr></thead><tbody><tr><td style="text-align:center;">张三</td><td style="text-align:center;">语文</td><td style="text-align:center;">中等</td></tr><tr><td style="text-align:center;">张三</td><td style="text-align:center;">数学</td><td style="text-align:center;">合格</td></tr><tr><td style="text-align:center;">李四</td><td style="text-align:center;">语文</td><td style="text-align:center;">合格</td></tr><tr><td style="text-align:center;">李四</td><td style="text-align:center;">数学</td><td style="text-align:center;">优秀</td></tr><tr><td style="text-align:center;">王五</td><td style="text-align:center;">语文</td><td style="text-align:center;">中等</td></tr><tr><td style="text-align:center;">王五</td><td style="text-align:center;">数学</td><td style="text-align:center;">优秀</td></tr></tbody></table><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>select name,kemu,case when fenshu&gt;=90 then  &#39;优秀&#39; when  fenshu&lt;90 and fenshu&gt;=80 then &#39;中等&#39;when  fenshu&lt;80 then &#39;合格&#39; end  as fenshu from t_grade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="分组及其组内比较" tabindex="-1"><a class="header-anchor" href="#分组及其组内比较"><span>分组及其组内比较</span></a></h2><ul><li>如：查出每个学科低于其平均分的学生等。首先查询出每条记录对应的分组函数值select * from table t1 left join (select 分组函数(统计字段) as 比较字段 from table group by 分组字段) t2 on 唯一条件 where 比较条件</li><li>用一条sql语句查询出每个学科低于其平均分的学生/平均分低于60的学生(查询结果表头名为：姓名、学科、分数、学科平均分)</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Select 
	a.name,a.kemu,a.fenshu,(Select avg(b.fenshu) From score b where a.kemu=b.kemu GROUP BY b.kemu )
From 
	score a Where a.fenshu&lt;(Select avg(b.fenshu) From score b where a.kemu=b.kemu GROUP BY b.kemu ) 
GROUP BY 
	a.kemu

SELECT 
	a.name,a.kemu,a.fenshu,b.aa
FROM 
	test a,(SELECT kemu,AVG(fenshu) aa FROM test GROUP BY kemu) b
WHERE a.kemu=b.kemu AND a.fenshu&lt;b.aa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="都大于问题" tabindex="-1"><a class="header-anchor" href="#都大于问题"><span>都大于问题</span></a></h2><ul><li>查出某条件下都大于都小于的数据（not in）</li><li>用一条sql语句查询出每门课都大于80分的学生姓名</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>SELECT 
	name,kemu,fenshu 
from 
	t_grade 
where name not in(select name from t_grade where fenshu&lt;=80)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="行转列" tabindex="-1"><a class="header-anchor" href="#行转列"><span>行转列</span></a></h2><ul><li>如：把表中特定行的数据去重后做为列名;将同一个人的科目显示出来</li><li>利用max(case when then)或者sum(case when then)或者sum(IF()) 或者max(IF())：先将数据按某个条件分组，然后通过sum或者max将行转列，但是问题是，行转列有限制</li><li>用一条sql语句写出如下的查询结果</li></ul><table><thead><tr><th style="text-align:center;">姓名</th><th style="text-align:center;">语文</th><th style="text-align:center;">数学</th></tr></thead><tbody><tr><td style="text-align:center;">张三</td><td style="text-align:center;">81</td><td style="text-align:center;">72</td></tr><tr><td style="text-align:center;">李四</td><td style="text-align:center;">76</td><td style="text-align:center;">90</td></tr><tr><td style="text-align:center;">王五</td><td style="text-align:center;">81</td><td style="text-align:center;">100</td></tr></tbody></table><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>SELECT 
	a.name &#39;分数&#39;,a.fenshu &#39;语文&#39;,b.fenshu &#39;数学&#39;
FROM 
	(SELECT NAME,fenshu FROM test WHERE kemu=&#39;语文&#39;) a,
	(SELECT NAME,fenshu FROM test WHERE kemu=&#39;数学&#39;) b
WHERE 
	a.name=b.name;

SELECT
	name as 姓名,
	MAX(
		CASE 
		WHEN  kemu=&#39;语文&#39; THEN
			fenshu
		END
	) AS 语文,
	MAX(
		CASE 
		WHEN kemu=&#39;数学&#39; THEN
			fenshu
		END
	) AS 数学 
FROM
	t_grade
GROUP BY name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="列转行" tabindex="-1"><a class="header-anchor" href="#列转行"><span>列转行</span></a></h2><ul><li>如：把表中特定列做为每一行数据对应行的值（union）</li><li>将上面的结果变回例子的样子</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>select name, &#39;语文&#39; kemu , 语文 as SCORE from t_grade
union select name, &#39;数学&#39; kemu, 数学 as SCORE from t_grade
union select name, &#39;英语&#39; kemu, 英语 as SCORE from t_grade
order by name,kemu;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="top-n问题" tabindex="-1"><a class="header-anchor" href="#top-n问题"><span>top-n问题</span></a></h2><ul><li><p>如：求出第二(n)高/低的薪水</p></li><li><p>如果是找第二高之类的问题：select max(distinct 字段) from table where 字段&lt; (select max(distinct 字段) from table group by 分组字段) where 条件</p></li><li><p>如果是找第n高的问题：select distinct 字段 FROM table t1 where (SELECT count(distinct 字段) from table t2 WHERE t2.字段 &gt; t1.字段) = n-1</p></li><li><p>如果是找前n高的问题：select distinct 字段 from table t1 where (select count(distinct 字段) from table t2 where t2.字段 &gt; t1.字段)&lt; n</p></li><li><p>如果是找当前记录处于第几的问题：select 字段,(select count(distinct 字段) from table t2 where t2.字段 &gt;= t1.字段) from Scores t1 order by 字段 DESC</p></li><li><p>Employee 表包含所有员工信息，每个员工有其对应的工号 Id，姓名 Name，工资 Salary 和部门编号 DepartmentId</p></li></ul><table><thead><tr><th style="text-align:center;">Id</th><th style="text-align:center;">Name</th><th style="text-align:center;">Salary</th><th style="text-align:center;">DepartmentId</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:center;">Joe</td><td style="text-align:center;">85000</td><td style="text-align:center;">1</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:center;">Henry</td><td style="text-align:center;">80000</td><td style="text-align:center;">2</td></tr><tr><td style="text-align:center;">3</td><td style="text-align:center;">Sam</td><td style="text-align:center;">60000</td><td style="text-align:center;">2</td></tr><tr><td style="text-align:center;">4</td><td style="text-align:center;">Max</td><td style="text-align:center;">90000</td><td style="text-align:center;">1</td></tr><tr><td style="text-align:center;">5</td><td style="text-align:center;">Janet</td><td style="text-align:center;">69000</td><td style="text-align:center;">1</td></tr><tr><td style="text-align:center;">6</td><td style="text-align:center;">Randy</td><td style="text-align:center;">85000</td><td style="text-align:center;">1</td></tr><tr><td style="text-align:center;">7</td><td style="text-align:center;">Will</td><td style="text-align:center;">70000</td><td style="text-align:center;">1</td></tr></tbody></table><ul><li>Department 表包含公司所有部门的信息。</li></ul><table><thead><tr><th style="text-align:center;">Id</th><th style="text-align:center;">Name</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:center;">IT</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:center;">Sales</td></tr></tbody></table><ul><li>编写一个 SQL 查询，找出每个部门获得前三高工资的所有员工</li></ul><p>|Department|Employee|Salary|<br> |:-😐:-😐:-😐:-😐<br> |IT|Max|90000|<br> |IT|Randy|85000|<br> |IT|Joe|85000|<br> |IT|Will|70000|<br> |Sales|Henry|80000|<br> |Sales|Sam| 60000|</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>SELECT
	d.NAME AS Department,
	e.NAME AS Employee,
	e.Salary AS Salary 
FROM
	employee e
	LEFT JOIN Department d ON d.id = e.DepartmentId 
WHERE
	e.id IN (
	SELECT
		e1.id 
	FROM
		Employee e1
		LEFT JOIN Employee e2 ON e2.DepartmentId = e1.DepartmentId 
		AND e2.Salary &gt; e1.Salary 
	GROUP BY
		e1.Id 
	HAVING
		count( DISTINCT e2.Salary ) &lt;= 2 --选取top几
	) 
and e.DepartmentId in (select Id from Department) 补全数据，不用补全的话不用加上这句
ORDER BY
	d.Id ASC,
	e.Salary DESC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>编写一个 SQL 查询，获取 Employee 表中第二高的薪水（Salary）</li><li>例如上述 Employee 表，SQL查询应该返回 200 作为第二高的薪水。如果不存在第二高的薪水，那么查询应返回 null</li></ul><h2 id="删除重复数据" tabindex="-1"><a class="header-anchor" href="#删除重复数据"><span>删除重复数据</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>-- 删除多余的重复记录(多个字段)，只保留最小id的记录
DELETE FROM student WHERE id IN (
    SELECT * FROM (
        SELECT id FROM student WHERE (stuno,stuname) -- 注意：此处一定要加括号，当成联合字段来处理
        IN (
            -- 查找学号和姓名均重复的学生信息
            SELECT stuno,stuname FROM student GROUP BY stuno,stuname HAVING COUNT(1) &gt; 1
        ) AND id NOT IN (
            -- 查询最小id的记录
            SELECT MIN(id) FROM student GROUP BY stuno,stuname HAVING COUNT(1) &gt; 1
        )
    ) AS stu_repeat_copy

);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查找每个学科分数低于60的人数" tabindex="-1"><a class="header-anchor" href="#查找每个学科分数低于60的人数"><span>查找每个学科分数低于60的人数</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>CREATE TABLE \`xueke\`  (
  \`id\` int(11) NOT NULL AUTO_INCREMENT,
  \`tid\` int(11) NULL DEFAULT NULL,
  \`sid\` int(11) NULL DEFAULT NULL,
  \`name\` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  \`score\` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (\`id\`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of xueke
-- ----------------------------
INSERT INTO \`xueke\` VALUES (1, 1, 1, &#39;数学&#39;, 80);
INSERT INTO \`xueke\` VALUES (2, 1, 2, &#39;数学&#39;, 50);
INSERT INTO \`xueke\` VALUES (3, 2, 3, &#39;英语&#39;, 61);
INSERT INTO \`xueke\` VALUES (4, 2, 4, &#39;英语&#39;, 59);
INSERT INTO \`xueke\` VALUES (5, 3, 5, &#39;语文&#39;, 62);
INSERT INTO \`xueke\` VALUES (6, 3, 6, &#39;语文&#39;, 58);
INSERT INTO \`xueke\` VALUES (7, 1, 7, &#39;数学&#39;, 81);

select name,count(sid) from xueke where score &lt; 60 GROUP BY name;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="去除最高值与最低值的平均问题" tabindex="-1"><a class="header-anchor" href="#去除最高值与最低值的平均问题"><span>去除最高值与最低值的平均问题</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>SELECT
	t.cid,
	round(AVG(t.saleMoney),2) &#39;平均值&#39;
FROM
(
SELECT
	a.date,
	a.cid,
	a.saleMoney,
	RANK() over(partition by a.cid order by a.saleMoney) as rank1,
	RANK() over(partition by a.cid order by a.saleMoney desc) as rank2
FROM
	city_sale a
GROUP BY a.date,a.cid
)t
WHERE t.rank1&gt;1 
and t.rank2&gt;1
GROUP BY t.cid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lead、lag函数平移列-求记录之间的差值最大值或者最小值" tabindex="-1"><a class="header-anchor" href="#lead、lag函数平移列-求记录之间的差值最大值或者最小值"><span>lead、lag函数平移列（求记录之间的差值最大值或者最小值）</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>select 
	t2.uid,
	count(1),
	min(t2.minute2)
from
(
select *,
	TIMESTAMPDIFF(MINUTE,t.crtime,t.rank1) minute2
from 
(
SELECT
	a.uid,
	a.crtime,
	lead(a.crtime,1) over(PARTITION BY a.uid ORDER BY a.crtime) as rank1
FROM
	user_sale a
)t
)t2
where t2.minute2&gt;0
GROUP BY t2.uid
ORDER BY count(1) desc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="中位数" tabindex="-1"><a class="header-anchor" href="#中位数"><span>中位数</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>## 单个cid的中位数

SELECT
	avg(t.saleMoney)
FROM
(
SELECT
	a.cid,
	a.saleMoney,
	row_number() over(ORDER BY a.saleMoney desc) rank1,
	row_number() over(ORDER BY a.saleMoney) rank2
FROM
	city_sale a
where a.cid=10240
)t
where  t.rank1=t.rank2+1 or t.rank1=t.rank2-1 or rank1=rank2

## 分组求中位数

SELECT
	t.cid,
	avg(t.saleMoney)
FROM
(
SELECT
	a.cid,
	a.saleMoney,
	row_number() over(PARTITION by a.cid ORDER BY a.saleMoney desc) rank1,
	row_number() over(PARTITION by a.cid ORDER BY a.saleMoney) rank2
FROM
	city_sale a
)t
where  t.rank1=t.rank2+1 or t.rank1=t.rank2-1 or rank1=rank2

GROUP BY t.cid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38),a=[d];function s(r,c){return t(),n("div",null,a)}const m=e(i,[["render",s],["__file","sql.html.vue"]]),b=JSON.parse('{"path":"/interview/db/sql.html","title":"sql宝典","lang":"zh-CN","frontmatter":{"title":"sql宝典","date":"2023-01-01T00:00:00.000Z","tags":"java","categories":"面试","description":"t_grade成绩表 case when使用 分数等级：每门课成绩的等级划分为三个，分数小于80为及格，大于等于80低于90分为中等；大于等于90分为优秀，结果如下 分组及其组内比较 如：查出每个学科低于其平均分的学生等。首先查询出每条记录对应的分组函数值select * from table t1 left join (select 分组函数(统计字...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/interview/db/sql.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"sql宝典"}],["meta",{"property":"og:description","content":"t_grade成绩表 case when使用 分数等级：每门课成绩的等级划分为三个，分数小于80为及格，大于等于80低于90分为中等；大于等于90分为优秀，结果如下 分组及其组内比较 如：查出每个学科低于其平均分的学生等。首先查询出每条记录对应的分组函数值select * from table t1 left join (select 分组函数(统计字..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"sql宝典\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"case when使用","slug":"case-when使用","link":"#case-when使用","children":[]},{"level":2,"title":"分组及其组内比较","slug":"分组及其组内比较","link":"#分组及其组内比较","children":[]},{"level":2,"title":"都大于问题","slug":"都大于问题","link":"#都大于问题","children":[]},{"level":2,"title":"行转列","slug":"行转列","link":"#行转列","children":[]},{"level":2,"title":"列转行","slug":"列转行","link":"#列转行","children":[]},{"level":2,"title":"top-n问题","slug":"top-n问题","link":"#top-n问题","children":[]},{"level":2,"title":"删除重复数据","slug":"删除重复数据","link":"#删除重复数据","children":[]},{"level":2,"title":"查找每个学科分数低于60的人数","slug":"查找每个学科分数低于60的人数","link":"#查找每个学科分数低于60的人数","children":[]},{"level":2,"title":"去除最高值与最低值的平均问题","slug":"去除最高值与最低值的平均问题","link":"#去除最高值与最低值的平均问题","children":[]},{"level":2,"title":"lead、lag函数平移列（求记录之间的差值最大值或者最小值）","slug":"lead、lag函数平移列-求记录之间的差值最大值或者最小值","link":"#lead、lag函数平移列-求记录之间的差值最大值或者最小值","children":[]},{"level":2,"title":"中位数","slug":"中位数","link":"#中位数","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":5.45,"words":1635},"filePathRelative":"interview/db/sql.md","localizedDate":"2023年1月1日","excerpt":"<!-- TOC -->\\n<!-- /TOC -->\\n<ul>\\n<li>t_grade成绩表</li>\\n</ul>\\n<table>\\n<thead>\\n<tr>\\n<th style=\\"text-align:center\\">name</th>\\n<th style=\\"text-align:center\\">kemu</th>\\n<th style=\\"text-align:center\\">fenshu</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\"text-align:center\\">张三</td>\\n<td style=\\"text-align:center\\">语文</td>\\n<td style=\\"text-align:center\\">81</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">张三</td>\\n<td style=\\"text-align:center\\">数学</td>\\n<td style=\\"text-align:center\\">72</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">李四</td>\\n<td style=\\"text-align:center\\">语文</td>\\n<td style=\\"text-align:center\\">76</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">李四</td>\\n<td style=\\"text-align:center\\">数学</td>\\n<td style=\\"text-align:center\\">90</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">王五</td>\\n<td style=\\"text-align:center\\">语文</td>\\n<td style=\\"text-align:center\\">81</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">王五</td>\\n<td style=\\"text-align:center\\">数学</td>\\n<td style=\\"text-align:center\\">100</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">...</td>\\n<td style=\\"text-align:center\\">...</td>\\n<td style=\\"text-align:center\\">...</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{m as comp,b as data};
