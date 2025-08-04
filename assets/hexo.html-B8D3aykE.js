import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,e as t}from"./app-7KT7HDzT.js";const s={},a=t(`<p>记录一下搭建博客</p><ul><li><a href="#1-%E9%85%8D%E7%BD%AE">1. 配置</a></li><li><a href="#2-vscode%E9%85%8D%E7%BD%AE">2. VSCode配置</a></li></ul><h1 id="_1-配置" tabindex="-1"><a class="header-anchor" href="#_1-配置"><span>1. 配置</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 安装：node.js、git
# 创建博客文件夹 
- hexo init
# 安装依赖包
- npm install
# 本地调试 浏览器中输入 localhost:4000
- hexo generate 
- hexo server
# 创建  用户名.github.io 仓库
# 编辑本地Hexo目录下文件_config.yml,在最后添加如下代码
deploy:
  type: git
  repository: http://github.com/用户名/用户名.github.io.git
  branch: master
# 部署到github
- hexo generate 
- hexo deploy

# 生成SSH
ssh-keygen -t rsa -C &quot;1105128664@qq.com&quot;，一路回车
找到本用户下的C:\\Users\\\${username}\\.ssh\\id_rsa把里面的内容复制
在github上面对应的仓库点击Setting，然后点击Deploy Keys
黏贴刚才的内容，Allow write access 打钩，点击Add Key

# 测试上传
ssh -T git@github.com，即使报错也一路点yes,至此配置成功
git config --global user.name &quot;yourusername&quot;
git config --golbal user.email &quot;youremail&quot;
配置以上两个去掉很多警告
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-vscode配置" tabindex="-1"><a class="header-anchor" href="#_2-vscode配置"><span>2. VSCode配置</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>ctrl+shift+P 找到 Markdown Preview Enhanced: Extend Parser，打开 parser.js

修改其中 onWillParseMarkdown 方法为：
  onWillParseMarkdown: async function(markdown) {
    return new Promise((resolve, reject)=&gt; {
      /** 处理 {% asset_img xxx%}**/
      // markdown = markdown.replace(
      // /\\{%\\s*asset_img\\s*(.*)\\s*%\\}/g,
      // (whole, content) =&gt; (\`![](/source/_posts/\${markdown.match(/title\\: (\\S*)/)[1]}/\${content})\`)
      // )
      /** 处理 [](xxx.html/xxx)**/
      // markdown = markdown.replace(
      //   /\\[.*]\\(.*\\.html\\/.*\\)/g,
      //   (whole, content) =&gt; (\`\${whole}\`.replace(/\\.html\\//g,&#39;.md/&#39;))
      //     )
      /** 处理 [](xxx/xxxx.png)**/
      // markdown = markdown.replace(
      //   /!\\[.*]\\(.*\\.(png|jpg|gif)\\)/g,
      //   (whole, content) =&gt; (\`\${whole}\`.replace(/]\\(/g,&#39;](/docs/.vuepress/public/&#39;))
      // )
  
      /** 处理 [](xxxx.png)**/
      markdown = markdown.replace(
        /!\\[.*]\\(.*\\.(png|jpg|gif)\\)/g,
        (whole, content) =&gt; (\`\${whole}\`.replace(/]\\(/g,\`](./\${markdown.match(/title\\: (\\S*)/)[1]}/\`))
      )
  
      return resolve(markdown)
    })
  },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[a];function d(r,o){return n(),i("div",null,l)}const v=e(s,[["render",d],["__file","hexo.html.vue"]]),u=JSON.parse('{"path":"/backend/server/hexo.html","title":"Hexo","lang":"zh-CN","frontmatter":{"title":"Hexo","date":"2023-01-01T00:00:00.000Z","tags":"Hexo","categories":"后端","description":"记录一下搭建博客 1. 配置 2. VSCode配置 1. 配置 2. VSCode配置","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/server/hexo.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"Hexo"}],["meta",{"property":"og:description","content":"记录一下搭建博客 1. 配置 2. VSCode配置 1. 配置 2. VSCode配置"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://javaguide.cn/source/_posts/${markdown.match(/title\\\\: (\\\\S*"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Hexo\\",\\"image\\":[\\"https://javaguide.cn/source/_posts/${markdown.match(/title\\\\\\\\: (\\\\\\\\S*\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":1.29,"words":386},"filePathRelative":"backend/server/hexo.md","localizedDate":"2023年1月1日","excerpt":"<p>记录一下搭建博客</p>\\n<!--more-->\\n<!-- TOC -->\\n<ul>\\n<li><a href=\\"#1-%E9%85%8D%E7%BD%AE\\">1. 配置</a></li>\\n<li><a href=\\"#2-vscode%E9%85%8D%E7%BD%AE\\">2. VSCode配置</a></li>\\n</ul>\\n<!-- /TOC -->\\n<h1>1. 配置</h1>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code># 安装：node.js、git\\n# 创建博客文件夹 \\n- hexo init\\n# 安装依赖包\\n- npm install\\n# 本地调试 浏览器中输入 localhost:4000\\n- hexo generate \\n- hexo server\\n# 创建  用户名.github.io 仓库\\n# 编辑本地Hexo目录下文件_config.yml,在最后添加如下代码\\ndeploy:\\n  type: git\\n  repository: http://github.com/用户名/用户名.github.io.git\\n  branch: master\\n# 部署到github\\n- hexo generate \\n- hexo deploy\\n\\n# 生成SSH\\nssh-keygen -t rsa -C \\"1105128664@qq.com\\"，一路回车\\n找到本用户下的C:\\\\Users\\\\${username}\\\\.ssh\\\\id_rsa把里面的内容复制\\n在github上面对应的仓库点击Setting，然后点击Deploy Keys\\n黏贴刚才的内容，Allow write access 打钩，点击Add Key\\n\\n# 测试上传\\nssh -T git@github.com，即使报错也一路点yes,至此配置成功\\ngit config --global user.name \\"yourusername\\"\\ngit config --golbal user.email \\"youremail\\"\\n配置以上两个去掉很多警告\\n</code></pre></div>","autoDesc":true}');export{v as comp,u as data};
