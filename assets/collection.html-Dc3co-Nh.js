import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as t,e as l}from"./app-7KT7HDzT.js";const n={},a=l(`<p>Collection</p><h2 id="集合与数组的异同" tabindex="-1"><a class="header-anchor" href="#集合与数组的异同"><span>集合与数组的异同</span></a></h2><ul><li>数组的长度是固定的。集合的长度是可变的。</li><li>数组可以存储基本数据类型和引用数据类型；集合中存储的元素必须是引用类型数据</li><li>数组存储的元素必须是同一个数据类型；集合存储的对象可以是不同数据类型</li><li>集合中存储其实都是对象的地址</li><li>集合中可以存储基本数值吗？可以通过基本类型包装类，自动装箱操作存储</li><li>没指定&lt;&gt;时，元素存储时自动提升为Object。取出时要使用元素的特有内容，必须向下转型</li><li>如果集合中存放的是多个对象，这时进行向下转型会发生类型转换异常</li><li>Iterator接口使用&lt;&gt;控制迭代元素的类型就不需要强转了.获取到的元素直接就是元素类型</li></ul><h2 id="iterable" tabindex="-1"><a class="header-anchor" href="#iterable"><span>Iterable</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># ArrayList迭代
for (int i = 0; i &lt; list.size(); i++) {
	String str = list.get(i);
}
for (Iterator&lt;String&gt; it2 = coll.iterator(); it2.hasNext();) {
	System.out.println(it2.next());
} 
Iterator&lt;String&gt; it=list.iterator();
while(it.hasNext()){
	String str=it.next();
	it.remove();//遍历删除
}

# Vector枚举迭代
Enumeration&lt;String&gt; en=list.elements();
while(en.hasMoreElements()){
	String str=en.nextElement();
}
# Map迭代
# 推荐使用 entrySet 遍历 Map 类集合 KV，而不是 keySet 方式进行遍历。keySet 其实是遍历了2次，一次是转为Iterator对象，另一次是从 hashMap中取出key所对应的value。而entrySet只是遍历了一次就把key和value都放到了entry中，效率更高

①Entry键值对对象方式
Map&lt;String, String&gt; map = new HashMap&lt;String,String&gt;();
Iterator&lt;Map.Entry&lt;String,String&gt;&gt; it = map.entrySet().iterator();
while(it.hasNext()){
	Map.Entry&lt;String,String&gt; entry = it.next();//得到每一对对应关系
	String key = entry.getKey();//通过每一对对应关系获取对应的key
	String value = entry.getValue();//通过每一对对应关系获取对应的value
	System.out.println(key+&quot;=&quot;+value);
}
for (Map.Entry&lt;Integer, Integer&gt; entry : map.entrySet()) {  
	System.out.println(&quot;Key=&quot; + entry.getKey() + &quot;,Value =&quot; +entry.getValue());  
}

②遍历键找值方式
Map&lt;String, String&gt; map = new HashMap&lt;String,String&gt;();
Iterator&lt;String&gt; it =map.keySet().iterator();
while(it.hasNext()){
	String key = it.next();//得到每一个key
	String value = map.get(key);//通过key获取对应的value
}

for (String key : map.keySet()) {
	System.out.println(&quot;key:&quot; + key + &quot;,value:&quot; + map.get(key));
}

③遍历所有的value
for (String value : map.values()) {
	System.out.println(&quot;value:&quot; + value);
}
map.forEach((key, value) -&gt; {
	System.out.println(&quot;key=&quot; + key + &quot;,value=&quot; + value);
});
# 增强for:没有索引,不能操作容器里面的元素
for(元素类型  变量名 : 数组或者集合 ){
	sop(变量);//相当于直接每次循环将集合或者数组中的元素赋给变量
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型"><span>泛型</span></a></h2><ul><li>泛型实现了参数化类型的概念，使代码可以应用于多种类型</li><li>泛型可以用于内部类</li><li>泛型概念 <ul><li>指明了集合中存储数据的类型 &lt;数据类型&gt;(安全简单)。在编译的时候检查类型安全，避免了迭代时类型强转的麻烦</li></ul></li><li>泛型声明 <ul><li>泛型类 修饰符 <code> class 类名&lt;代表泛型的变量&gt; {}</code></li><li>泛型方法 修饰符 &lt;代表泛型的变量&gt; 返回值类型 方法名(参数){} <code>public &lt;T&gt; T[] toArray(T[] a){} </code></li><li>泛型接口 <code>public interface List &lt;E&gt;{abstract boolean add(E e);}</code></li></ul></li><li>泛型擦除：使得泛化的客户端可以用非泛化的类库来使用 <ul><li>泛型只在编译时存在,编译后就被擦除,在编译之前我们就可以限制集合的类型,起到作用</li><li>例如:<code>ArrayList&lt;String&gt; al=new ArrayList&lt;String&gt;()</code>;编译后:ArrayList al=new ArrayList();</li><li>获得泛型声明所声明的类型参数：<code>TypeVariable&lt;Class&lt;T&gt;&gt;[] typeParameters = al.getClass().getTypeParameters();</code></li></ul></li><li>通配符和泛型的限定：为了传入泛型后能做到调用具体类型的方法，必须做限定 <ul><li>Iterator&lt;?&gt; it = coll.iterator()泛型的通配,匹配所有的数据类型，被擦除成Object</li><li><code>&lt;? extends Employee&gt;</code> 限制的是父类, 上限限定, 可以传递Employee，传递他的子类对象，被擦除成Employee</li><li><code>&lt;? super Employee&gt;</code> 限制的是子类, 下限限定, 可以传递Employee，传递他的父类对象，被擦除成Employee</li><li><code>&lt;? extends class &amp; interface&gt;</code>//多个限定</li></ul></li><li>元组 <ul><li>将一组对象之间打包存储于其中的一个单一对象，这个容器对象允许读取其中元素，但是不允许向其中存放新的对象</li><li>元组可以有任意长度，元组中的对象可以是任意不同的类型，</li><li>元组可以实现一次方法调用返回多个对象，并且在编译期就能确保类型安全。当然也可以创建一个对象，持有返回的多个对象</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class TwoTuple&lt;A,B&gt;{
	public final A first;
	public final B second;
	public TwoTuple(A a,B b){
		this.first = a;
		this.second = b;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>泛型类型参数推断 <ul><li>声明变量的的时候已经指明了参数类型，初始化对象时还需指定（jdk7后不用）<code>Map&lt;String,Object&gt; myMap = new HashMap&lt;String,Object&gt;();</code>jdk7后=&gt;<code>HashMap&lt;String,Object&gt; map = new HashMap&lt;&gt;();</code></li></ul></li><li>泛型构造器</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//泛型必须有无参构造函数
public class Generator&lt;T&gt; {
    private Class&lt;T&gt; type;
    public Generator(Class&lt;T&gt; type){this.type = type;}
    public T get(){
        try {
            return (T) type.newInstance();
        } catch (InstantiationException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        }
        return null;
    }
    public T[] getArray(int size){
        return (T[]) Array.newInstance(this.type,size);
    }
    public static &lt;T&gt; Generator&lt;T&gt; create(Class&lt;T&gt; type){
        type.getTypeParameters();
        return  new Generator&lt;&gt;(type);
    }
	public static void main(String[] args) {
        System.out.println(Generator.create(Test.class).get());
		System.out.println(Generator.create(Test.class).getArray(10));
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动态获得子类的类型" tabindex="-1"><a class="header-anchor" href="#动态获得子类的类型"><span>动态获得子类的类型</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//在父类(IBaseDaoImpl)的构造方法中动态获得entityClass字节码对象
public IBaseDaoImpl() {
  //获得T
  ParameterizedType Superclass = (ParameterizedType) this.getClass().getGenericSuperclass();
  //获得父类上声明的泛型数组
  Type[] actualTypeArguments = Superclass.getActualTypeArguments();
  entityClass=(Class&lt;T&gt;) actualTypeArguments[0];
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),s=[a];function r(d,c){return i(),t("div",null,s)}const o=e(n,[["render",r],["__file","collection.html.vue"]]),m=JSON.parse('{"path":"/backend/java/collection.html","title":"集合","lang":"zh-CN","frontmatter":{"title":"集合","date":"2023-01-01T00:00:00.000Z","tags":"Collection","categories":"后端","description":"Collection 集合与数组的异同 数组的长度是固定的。集合的长度是可变的。 数组可以存储基本数据类型和引用数据类型；集合中存储的元素必须是引用类型数据 数组存储的元素必须是同一个数据类型；集合存储的对象可以是不同数据类型 集合中存储其实都是对象的地址 集合中可以存储基本数值吗？可以通过基本类型包装类，自动装箱操作存储 没指定<>时，元素存储时自动...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/java/collection.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"集合"}],["meta",{"property":"og:description","content":"Collection 集合与数组的异同 数组的长度是固定的。集合的长度是可变的。 数组可以存储基本数据类型和引用数据类型；集合中存储的元素必须是引用类型数据 数组存储的元素必须是同一个数据类型；集合存储的对象可以是不同数据类型 集合中存储其实都是对象的地址 集合中可以存储基本数值吗？可以通过基本类型包装类，自动装箱操作存储 没指定<>时，元素存储时自动..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"集合\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"集合与数组的异同","slug":"集合与数组的异同","link":"#集合与数组的异同","children":[]},{"level":2,"title":"Iterable","slug":"iterable","link":"#iterable","children":[]},{"level":2,"title":"泛型","slug":"泛型","link":"#泛型","children":[]},{"level":2,"title":"动态获得子类的类型","slug":"动态获得子类的类型","link":"#动态获得子类的类型","children":[]}],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":4.48,"words":1343},"filePathRelative":"backend/java/collection.md","localizedDate":"2023年1月1日","excerpt":"<p>Collection</p>\\n<!--more-->\\n<h2>集合与数组的异同</h2>\\n<ul>\\n<li>数组的长度是固定的。集合的长度是可变的。</li>\\n<li>数组可以存储基本数据类型和引用数据类型；集合中存储的元素必须是引用类型数据</li>\\n<li>数组存储的元素必须是同一个数据类型；集合存储的对象可以是不同数据类型</li>\\n<li>集合中存储其实都是对象的地址</li>\\n<li>集合中可以存储基本数值吗？可以通过基本类型包装类，自动装箱操作存储</li>\\n<li>没指定&lt;&gt;时，元素存储时自动提升为Object。取出时要使用元素的特有内容，必须向下转型</li>\\n<li>如果集合中存放的是多个对象，这时进行向下转型会发生类型转换异常</li>\\n<li>Iterator接口使用&lt;&gt;控制迭代元素的类型就不需要强转了.获取到的元素直接就是元素类型</li>\\n</ul>","autoDesc":true}');export{o as comp,m as data};
