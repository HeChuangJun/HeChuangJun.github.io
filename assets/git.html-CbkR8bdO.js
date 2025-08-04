import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as s,c as r,a as i,b as e,d,e as t}from"./app-7KT7HDzT.js";const g={},c=t(`<p>git代码管理工具</p><ul><li><a href="#1-%E4%BB%8B%E7%BB%8D">1. 介绍</a></li><li><a href="#git%E4%BB%93%E5%BA%93%E7%BB%84%E6%88%90%E9%83%A8%E5%88%86">git仓库组成部分</a></li><li><a href="#2-%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86">2. 项目管理</a></li><li><a href="#3-git%E5%91%BD%E4%BB%A4">3. git命令</a></li><li><a href="#git-%E5%92%8C-svn-%E7%9A%84%E4%BC%98%E7%BC%BA%E7%82%B9">Git 和 SVN 的优缺点？</a></li><li><a href="#git%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3%E5%86%B2%E7%AA%81">git如何解决冲突？</a></li><li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF-fork-%E6%93%8D%E4%BD%9C">什么是 fork 操作？</a></li></ul><h1 id="_1-介绍" tabindex="-1"><a class="header-anchor" href="#_1-介绍"><span>1. 介绍</span></a></h1><p>Git是一个开源的分布式版本控制系统，可以有效、高速的处理从很小到非常大的项目版本管理。</p><figure><img src="https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwac4b6b53d5456c8e13428f6803458191.png" alt="1.png" tabindex="0"><figcaption>1.png</figcaption></figure><h1 id="git仓库组成部分" tabindex="-1"><a class="header-anchor" href="#git仓库组成部分"><span>git仓库组成部分</span></a></h1><ul><li>工作区(Working Directory)：在 Git 管理下的正常目录都算是工作区，我们平时的编辑工作都是在工作区完成。</li><li>暂存区(Stage)：临时区域。里面存放将要提交文件的快照。</li><li>历史记录区(History)：git commit 后的记录区。</li><li>三个区的转换关系以及转换所使用的命令<br><img src="https://290ff162.telegraph-image-eg9.pages.dev/file/0c8b9d3839f0f3a1b3e90.png" alt="Git仓库组成部分.jpg"></li></ul><h1 id="_2-项目管理" tabindex="-1"><a class="header-anchor" href="#_2-项目管理"><span>2. 项目管理</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>- 没有仓库时创建仓库并提交代码
echo &quot;# utils&quot; &gt;&gt; README.md
git init
git add README.md
git commit -m &quot;first commit&quot;
git remote add origin https://github.com/HeChuangJun/utils.git
git push -u origin master

- 有仓库时提交代码
git remote add origin https://github.com/HeChuangJun/utils.git
git push -u origin master

- 第二次提交代码
git add .
git commit -m &quot;提交信息&quot;
git push
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-git命令" tabindex="-1"><a class="header-anchor" href="#_3-git命令"><span>3. git命令</span></a></h1>`,10),m={href:"https://gitee.com/liaoxuefeng/learn-java/raw/master/teach/git-cheatsheet.pdf",target:"_blank",rel:"noopener noreferrer"},o=t(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 创建版本库
- git clone &lt;ulr&gt; //克隆远程版本库
- git init //初始化本地版本库(当前目录下多了一个.git隐藏目录)

# 修改和提交
- git status //查看文件的提交情况
- git diff [&lt;file&gt;]//查看[文件]变更内容
- git add . //跟踪所有改动文件,提交到暂存区
- git add &lt;file&gt; //跟踪指定文件 文件添加到暂存区.
- git mv &lt;old&gt; &lt;new&gt; //文件改名
- git rm &lt;file&gt; //删除文件
- git rm --cached &lt;file&gt; //停止跟踪文件但不删除
- git commit -m &quot;commit message&quot; //将暂存区的文件添加到仓库
- git commit --amend //修改最后一次提交

- git stash  //暂存。
- git stash pop //恢复最近一次的暂存。
- git stash list//git显示所有备份:
- git stash pop，恢复的备份同时把stash内容也删了
- git stash apply stash@{0} //git恢复单个备份不删除stash的内容:

# 查看提交历史
- git log //显示git最近到最远的提交commit id历史
- git log -p &lt;file&gt; //查看指定文件的提交历史
- git blame &lt;file&gt; //以列表的方式查看指定文件的提交历史
- git show &lt;commit&gt;//查看某次提交内容
- git reflog //显示命令历史
- git log --pretty=oneline //显示git最近一次的commit id历史

# 撤销
- git reset &lt;file&gt; //从暂存区恢复到工作文件。git add &lt;file&gt; 的逆操作。
- git reset --hard HEAD //撤销工作目录中所有未提交文件的修改内容
- git reset --hard HEAD^(^)//回退上(上)个版本
- git reset --hard HEAD~100//回退许多版本
- git reset --hard &lt;commit id&gt;//回退（更新）到指定版本
- git reset HEAD^ ：恢复最近一次提交过的状态，即放弃上次提交后的所有本次修改\` 。
- git checkout HEAD &lt;file&gt; //撤销指定的未提交文件的修改内容
- git revert &lt;commit&gt; //撤销指定的提交id

# 分支
- git branch //查看所有本地分支,并显示当前分支
- git branch -r //查看远程分支
- git branch &lt;new-branch&gt; //创建新分支 
- git checkout &lt;branch/tag&gt; //切换分支
- git checkout -b &lt;branch&gt; //git创建分支并切换到分支,相当于 git branch &lt;分支名&gt; + git checkout &lt;分支名&gt;
- git branch -d &lt;branch&gt; //删除本地分支
- git push origin :&lt;branch&gt; //冒号删除远程分支

# 标签
- git tag //查看本地所有tag标签
- gti show &lt;tagname&gt;//查看指定标签
- git tag &lt;tagname&gt; [&lt;commitid&gt;] //基于[提交id]最新提交创建标签
- git tag -a v0.1 -m &quot;version 0.1 released&quot; 1094adb //git打标签指定版本和标签的信息:
- git push origin &lt;tagname&gt;//推送本地标签到远程
- git push origin ---tags//把所有未推送的标签推送到远程
- git tag -d &lt;tagname&gt; //删除本地错误的标签
- git push origin :&lt;tagname&gt;//删除远程标签

# 合并与衍合
- git merge &lt;branch&gt; //合并指定分支到当前分支 git status 然后手动处理冲突文件，最后git add &lt;filename&gt; git commit -m &lt;message&gt;
- git rebase &lt;branch&gt; //衍合指定分支到当前分支
- git log --graph --pretty=oneline --abbrev-commit //查看分支合并图
- git merge --no-ff -m &quot;message&quot; &lt;分支名&gt; //合并分支并保存合并历史

# 远程操作
- git remote [-v] //查看远程仓库信息
- git remote show &lt;remote&gt; //查看指定版本远程仓库信息
- git remote add origin &lt;remote&gt; &lt;url&gt;  //添加远程版本仓库
- git fetch &lt;remote&gt; //从远程获取代码
- git pull &lt;remote&gt; &lt;branch&gt; //下载代码并合并 pull = fetch + merge
- git push &lt;branch&gt; //上传代码并合并
- git push &lt;remote&gt;:&lt;branch/tag-name&gt; //删除远程分支或标签
- git push --tags //上传所有标签
- git push origin &lt;branch&gt; ：将本地主分支推到远程主分支。失败则 git pull 抓取新提交，有冲突额解决冲突并在本地提交，再推送分支，若提示no tracking information，则说明本地分支和远程分支的链接关系没有创建，用命令git branch --set-upstream-to &lt;branch-name&gt; origin/&lt;branch-name&gt;。建立本地分支和远程分支的关联

# 其他
- [所有]git仓库指定不同的用户名和Email地址:git config [--global] user.name &quot;Your Name&quot;/user.email &quot;email@example.com&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="git-和-svn-的优缺点" tabindex="-1"><a class="header-anchor" href="#git-和-svn-的优缺点"><span>Git 和 SVN 的优缺点？</span></a></h1><ul><li>Git 是分布式版本控制系统，SVN 是集中式版本控制系统。</li><li>SVN的优缺点 <ul><li>优点 <ul><li>安全性比git搞。</li><li>代码一致性非常高。</li><li>适合开发人数不多的项目开发。</li></ul></li><li>缺点 <ul><li>服务器压力太大，数据库容量暴增。</li><li>不能离线工作，因为 SVN 是集中式服务器，如果服务器不能连接上，就不能提交，还原，对比等等。</li><li>不适合开源开发。但是一般集中式管理的有非常明确的权限管理机制（例如分支访问限制），可以实现分层管理，从而很好的解决开发人数众多的问题。</li></ul></li></ul></li><li>Git 优缺点<br> -优点<br> - 适合分布式开发，强调个体。<br> - 公共服务器压力和数据量都不会太大。<br> - 速度快、灵活。<br> - 任意两个开发者之间可以很容易的解决冲突。<br> - 离线工作。<br> -缺点<br> - 学习周期相对而言比较长。<br> - 不符合常规思维。<br> - 代码保密性差，一旦开发者把整个库克隆下来就可以完全公开所有代码和版本信息。<br> - 所以，很多公司的开发团队使用 Git 作为版本管理，而产品团队使用 SVN</li></ul><h1 id="git如何解决冲突" tabindex="-1"><a class="header-anchor" href="#git如何解决冲突"><span>git如何解决冲突？</span></a></h1><ul><li>git stash-&gt;git pull-&gt;git stash pop 隐藏自己修改的代码，然后把远程仓库的代码拉下来，然后把自己隐藏的修改的代码释放出来，让 Git 自动合并。</li></ul><h1 id="什么是-fork-操作" tabindex="-1"><a class="header-anchor" href="#什么是-fork-操作"><span>什么是 fork 操作？</span></a></h1><ul><li>fork ，是对一个仓库的克隆。克隆一个仓库允许你自由试验各种改变，而不影响原始的项目。</li><li>一般来说，fork 被用于去更改别人的项目（贡献代码给已经开源的项目）或者使用别人的项目作为你自己想法的初始开发点。</li><li>使用 fork 提出改变的一个很好的例子是漏洞修复。fork 这个仓库进行修复并向这个项目的拥有者提交一个 pull requset。如果这个项目的拥有者认同你的成果，他们可能会将你的修复更新到原始的仓库中！</li><li>目前很多开源项目，采用 fork + pull request 的方式，实现新功能的开发，Code Review 等等。</li></ul>`,7);function v(u,b){const n=a("ExternalLinkIcon");return s(),r("div",null,[c,i("ul",null,[i("li",null,[e("git命令表:"),i("a",m,[e("https://gitee.com/liaoxuefeng/learn-java/raw/master/teach/git-cheatsheet.pdf"),d(n)])])]),o])}const f=l(g,[["render",v],["__file","git.html.vue"]]),E=JSON.parse('{"path":"/backend/developmenttool/git.html","title":"Git","lang":"zh-CN","frontmatter":{"title":"Git","date":"2023-01-01T00:00:00.000Z","tags":"Git","categories":"理论","description":"git代码管理工具 1. 介绍 git仓库组成部分 2. 项目管理 3. git命令 Git 和 SVN 的优缺点？ git如何解决冲突？ 什么是 fork 操作？ 1. 介绍 Git是一个开源的分布式版本控制系统，可以有效、高速的处理从很小到非常大的项目版本管理。 1.png1.png git仓库组成部分 工作区(Working Directory)...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/developmenttool/git.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"Git"}],["meta",{"property":"og:description","content":"git代码管理工具 1. 介绍 git仓库组成部分 2. 项目管理 3. git命令 Git 和 SVN 的优缺点？ git如何解决冲突？ 什么是 fork 操作？ 1. 介绍 Git是一个开源的分布式版本控制系统，可以有效、高速的处理从很小到非常大的项目版本管理。 1.png1.png git仓库组成部分 工作区(Working Directory)..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwac4b6b53d5456c8e13428f6803458191.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Git\\",\\"image\\":[\\"https://b.bdstatic.com/comment/Y_bZHaS27NSYIAE9PqRzMwac4b6b53d5456c8e13428f6803458191.png\\",\\"https://290ff162.telegraph-image-eg9.pages.dev/file/0c8b9d3839f0f3a1b3e90.png\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":6.53,"words":1959},"filePathRelative":"backend/developmenttool/git.md","localizedDate":"2023年1月1日","excerpt":"<p>git代码管理工具</p>\\n<!--more-->\\n<!-- TOC -->\\n<ul>\\n<li><a href=\\"#1-%E4%BB%8B%E7%BB%8D\\">1. 介绍</a></li>\\n<li><a href=\\"#git%E4%BB%93%E5%BA%93%E7%BB%84%E6%88%90%E9%83%A8%E5%88%86\\">git仓库组成部分</a></li>\\n<li><a href=\\"#2-%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86\\">2. 项目管理</a></li>\\n<li><a href=\\"#3-git%E5%91%BD%E4%BB%A4\\">3. git命令</a></li>\\n<li><a href=\\"#git-%E5%92%8C-svn-%E7%9A%84%E4%BC%98%E7%BC%BA%E7%82%B9\\">Git 和 SVN 的优缺点？</a></li>\\n<li><a href=\\"#git%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3%E5%86%B2%E7%AA%81\\">git如何解决冲突？</a></li>\\n<li><a href=\\"#%E4%BB%80%E4%B9%88%E6%98%AF-fork-%E6%93%8D%E4%BD%9C\\">什么是 fork 操作？</a></li>\\n</ul>","autoDesc":true}');export{f as comp,E as data};
