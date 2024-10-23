import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,a as t}from"./app-CbX7tyD8.js";const a={},l=t(`<h2 id="你觉得应该怎么实现一个热部署功能" tabindex="-1"><a class="header-anchor" href="#你觉得应该怎么实现一个热部署功能"><span>你觉得应该怎么实现一个热部署功能？</span></a></h2><ul><li>实现一个热部署（Hot Deployment）功能通常涉及到类的加载和卸载机制，使得在不重启应用程序的情况下，能够动态替换或更新应用程序的组件。<br> -第一步，使用文件监控机制（如 Java NIO 的 WatchService）来监控类文件或配置文件的变更。当监控到文件变更时，触发热部署流程。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class FileWatcher {
    public static void watchDirectoryPath(Path path) {
        // 检查路径是否是文件夹
        try {
            Boolean isFolder = (Boolean) Files.getAttribute(path, &quot;basic:isDirectory&quot;, LinkOption.NOFOLLOW_LINKS);
            if (!isFolder) {
                throw new IllegalArgumentException(&quot;Path: &quot; + path + &quot; is not a folder&quot;);
            }
        } catch (IOException ioe) {
            // 文件 I/O 错误
            ioe.printStackTrace();
        }

        System.out.println(&quot;Watching path: &quot; + path);

        // 我们获得文件系统的WatchService对象
        FileSystem fs = path.getFileSystem();

        try (WatchService service = fs.newWatchService()) {
            // 注册路径到监听服务
            // 监听目录内文件的创建、修改、删除事件
            path.register(service, ENTRY_CREATE, ENTRY_MODIFY, ENTRY_DELETE);

            // 开始无限循环，等待事件发生
            WatchKey key = null;
            while (true) {
                key = service.take(); // 会阻塞直到有事件发生

                // 对于每个发生的事件
                for (WatchEvent&lt;?&gt; watchEvent : key.pollEvents()) {
                    WatchEvent.Kind&lt;?&gt; kind = watchEvent.kind();

                    // 获取文件路径
                    @SuppressWarnings(&quot;unchecked&quot;)
                    WatchEvent&lt;Path&gt; ev = (WatchEvent&lt;Path&gt;) watchEvent;
                    Path fileName = ev.context();

                    System.out.println(kind.name() + &quot;: &quot; + fileName);
                }

                // 重置watchKey
                boolean valid = key.reset();
                // 退出循环如果watchKey无效
                if (!valid) {
                    break;
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        // 监控当前目录
        Path pathToWatch = Paths.get(&quot;.&quot;);
        watchDirectoryPath(pathToWatch);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>第二步，创建一个自定义类加载器，继承自java.lang.ClassLoader，重写findClass()方法，实现类的加载。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class HotSwapClassLoader extends ClassLoader {
    public HotSwapClassLoader() {
        super(ClassLoader.getSystemClassLoader());
    }

    @Override
    protected Class&lt;?&gt; findClass(String name) throws ClassNotFoundException {
        // 加载指定路径下的类文件字节码
        byte[] classBytes = loadClassData(name);
        if (classBytes == null) {
            throw new ClassNotFoundException(name);
        }
        // 调用defineClass将字节码转换为Class对象
        return defineClass(name, classBytes, 0, classBytes.length);
    }

    private byte[] loadClassData(String name) {
        // 实现从文件系统或其他来源加载类文件的字节码
        // ...
        return null;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),s=[l];function d(c,r){return n(),i("div",null,s)}const u=e(a,[["render",d],["__file","hotreload.html.vue"]]),m=JSON.parse('{"path":"/interview/scenedesign/hotreload.html","title":"热部署功能设计","lang":"zh-CN","frontmatter":{"title":"热部署功能设计","date":"2023-01-01T00:00:00.000Z","tags":"java","categories":"面试","description":"你觉得应该怎么实现一个热部署功能？ 实现一个热部署（Hot Deployment）功能通常涉及到类的加载和卸载机制，使得在不重启应用程序的情况下，能够动态替换或更新应用程序的组件。 -第一步，使用文件监控机制（如 Java NIO 的 WatchService）来监控类文件或配置文件的变更。当监控到文件变更时，触发热部署流程。 第二步，创建一个自定义类...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/interview/scenedesign/hotreload.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"热部署功能设计"}],["meta",{"property":"og:description","content":"你觉得应该怎么实现一个热部署功能？ 实现一个热部署（Hot Deployment）功能通常涉及到类的加载和卸载机制，使得在不重启应用程序的情况下，能够动态替换或更新应用程序的组件。 -第一步，使用文件监控机制（如 Java NIO 的 WatchService）来监控类文件或配置文件的变更。当监控到文件变更时，触发热部署流程。 第二步，创建一个自定义类..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"热部署功能设计\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"你觉得应该怎么实现一个热部署功能？","slug":"你觉得应该怎么实现一个热部署功能","link":"#你觉得应该怎么实现一个热部署功能","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.59,"words":477},"filePathRelative":"interview/scenedesign/hotreload.md","localizedDate":"2023年1月1日","excerpt":"<h2>你觉得应该怎么实现一个热部署功能？</h2>\\n<ul>\\n<li>实现一个热部署（Hot Deployment）功能通常涉及到类的加载和卸载机制，使得在不重启应用程序的情况下，能够动态替换或更新应用程序的组件。<br>\\n-第一步，使用文件监控机制（如 Java NIO 的 WatchService）来监控类文件或配置文件的变更。当监控到文件变更时，触发热部署流程。</li>\\n</ul>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>class FileWatcher {\\n    public static void watchDirectoryPath(Path path) {\\n        // 检查路径是否是文件夹\\n        try {\\n            Boolean isFolder = (Boolean) Files.getAttribute(path, \\"basic:isDirectory\\", LinkOption.NOFOLLOW_LINKS);\\n            if (!isFolder) {\\n                throw new IllegalArgumentException(\\"Path: \\" + path + \\" is not a folder\\");\\n            }\\n        } catch (IOException ioe) {\\n            // 文件 I/O 错误\\n            ioe.printStackTrace();\\n        }\\n\\n        System.out.println(\\"Watching path: \\" + path);\\n\\n        // 我们获得文件系统的WatchService对象\\n        FileSystem fs = path.getFileSystem();\\n\\n        try (WatchService service = fs.newWatchService()) {\\n            // 注册路径到监听服务\\n            // 监听目录内文件的创建、修改、删除事件\\n            path.register(service, ENTRY_CREATE, ENTRY_MODIFY, ENTRY_DELETE);\\n\\n            // 开始无限循环，等待事件发生\\n            WatchKey key = null;\\n            while (true) {\\n                key = service.take(); // 会阻塞直到有事件发生\\n\\n                // 对于每个发生的事件\\n                for (WatchEvent&lt;?&gt; watchEvent : key.pollEvents()) {\\n                    WatchEvent.Kind&lt;?&gt; kind = watchEvent.kind();\\n\\n                    // 获取文件路径\\n                    @SuppressWarnings(\\"unchecked\\")\\n                    WatchEvent&lt;Path&gt; ev = (WatchEvent&lt;Path&gt;) watchEvent;\\n                    Path fileName = ev.context();\\n\\n                    System.out.println(kind.name() + \\": \\" + fileName);\\n                }\\n\\n                // 重置watchKey\\n                boolean valid = key.reset();\\n                // 退出循环如果watchKey无效\\n                if (!valid) {\\n                    break;\\n                }\\n            }\\n        } catch (Exception e) {\\n            e.printStackTrace();\\n        }\\n    }\\n\\n    public static void main(String[] args) {\\n        // 监控当前目录\\n        Path pathToWatch = Paths.get(\\".\\");\\n        watchDirectoryPath(pathToWatch);\\n    }\\n}\\n</code></pre></div>","autoDesc":true}');export{u as comp,m as data};
