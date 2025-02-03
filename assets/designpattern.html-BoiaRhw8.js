import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as n,a as l}from"./app-Cw8r8IGg.js";const s={},d=l(`<p>设计模式</p><h1 id="_1-为什么要使用设计模式" tabindex="-1"><a class="header-anchor" href="#_1-为什么要使用设计模式"><span>1. 为什么要使用设计模式?</span></a></h1><ul><li>代码重用性 (相同功能的代码，不用多次编写)</li><li>可读性 (编程规范性, 便于其他程序员的阅读和理解)</li><li>可扩展性 (当需要增加新的功能时，非常的方便，称为可维护)</li><li>可靠性 (当我们增加新的功能后，对原来的功能没有影响)</li><li>使程序呈现高内聚，低耦合的特性</li></ul><h1 id="_2-设计模式七大原则" tabindex="-1"><a class="header-anchor" href="#_2-设计模式七大原则"><span>2. 设计模式七大原则</span></a></h1><ul><li>单一职责原则SRP(Single Responsibility Principle):一个类或者一个方法应该只负责一项职责</li><li>接口隔离原则ISP(the Interface Segregation Principle ISP):客户端不应该依赖它不需要的接口(接口有A、B方法，只用到A的话，把接口拆成两个)</li><li>依赖倒转(倒置)原则DIP(the Dependency Inversion Principle DIP):面向接口编程，私有属性依赖接口或抽象类，继承时遵循里氏替换原则</li><li>里氏替换原则(the Liskov Substitution Principle LSP):继承时，子类的尽量不要重写父类方法，父类的通用方法尽量不要改，避免发生未知错误，可用聚合、组合、依赖解决</li><li>开闭原则ocp(Open－Close Principle):模块和函数应该对扩展开放(对提供方)，对修改关闭(对使用方)。(通过增加代码而不是修改代码完成)用抽象构建框架，用实现扩展细节</li><li>迪米特法则:一个对象尽量降低对其他类的依赖，无关的类不要以局部变量出现在类的内部</li><li>合成复用原则:使用合成/聚合的方式，而不是使用继承;依赖：方法传参传给他 聚合：声明属性和set的方法，组合 直接属性new一个</li></ul><h1 id="_3-设计模式及其类型-23种" tabindex="-1"><a class="header-anchor" href="#_3-设计模式及其类型-23种"><span>3. 设计模式及其类型（23种）</span></a></h1><h2 id="_3-1-创建型模式" tabindex="-1"><a class="header-anchor" href="#_3-1-创建型模式"><span>3.1. 创建型模式</span></a></h2><h3 id="_3-1-1-单例模式" tabindex="-1"><a class="header-anchor" href="#_3-1-1-单例模式"><span>3.1.1. 单例模式</span></a></h3><ul><li>单例模式：保证在系统中，对某个类只能存在一个对象实例，并且该类只提供一个取得其对象实例的方法(静态方法)</li><li>使用场景：频繁的创建和销毁的对象、创建对象时耗时过多或耗费资源过多(重量级对象)，但又常用的工具类对象、频繁访问数据库或文件的对象(数据库连接池、多线程池、SessionFactory等)</li><li>步骤：1. 构造器私有化, 外部不能new 2.本类内部创建对象实例 3. 提供一个公有的静态方法，返回实例对象</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//饿汉式：线程安全、无延时加载、内存浪费(在类装载的时候就完成实例，避免了多线程的同步问题)
class Singleton {
    private Singleton() {}
    private final static Singleton instance = new Singleton();
    public static Singleton getInstance() { return instance; }
}

//懒汉式：线程安全，同步方法,但效率太低
class Singleton {
    private Singleton() {}
    private static Singleton instance;
    public static synchronized Singleton getInstance() {
        if(instance == null) { 
            instance = new Singleton();
        }
        return instance;
    }
}

//双重检查：线程安全；延迟加载；效率较高√
class Singleton {
    private Singleton() {}
    private static volatile Singleton instance;//将线程中的东西更新到主存
    //需要加volatile关键字，否则会出现错误，因为JVM指令的重排优化
    //创建对象包括三个指令
    //    1.new #2 &lt;T&gt; ：分配内存地址，属性初始化并赋予默认值
    //    2.invokespecial #3 &lt;T.&lt;init&gt;&gt; 调用构造方法并完成对象初始化
    //    3.astore_1 将对象指针指向对象 如果以上三个指令顺序错误，将导致程序出错
    public static Singleton getInstance() {
        if(instance == null) {
            synchronized (Singleton.class) {
                if(instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}

//静态内部类：延时加载，效率高；类的静态属性只会在第一次加载类的时候初始化，在类进行初始化时，别的线程是无法进入的。保证了线程的安全性√
class Singleton {
    private Singleton() {}
    private static class SingletonInstance {
        private static final Singleton INSTANCE = new Singleton(); //写一个静态内部类,该类中有一个静态属性 Singleton
    }
    public static Singleton getInstance() {
        return SingletonInstance.INSTANCE;
    }
}

//枚举：枚举线程安全，而且还能防止反序列化重新创建新的对象。
public class Cilent {
    public static void main(String[] args) {
        Singleton instance = Singleton.INSTANCE;            
        instance.sayOK();
    }
}
enum Singleton {
    INSTANCE;
    public void sayOK() { System.out.println(&quot;ok~&quot;); }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-1-2-工厂模式" tabindex="-1"><a class="header-anchor" href="#_3-1-2-工厂模式"><span>3.1.2. 工厂模式</span></a></h3><ul><li>工厂模式:大量的创建某种、某类或者某批对象，定义创建对象的抽象方法，由子类决定要实例化的类。工厂方法模式将对象的实例化推迟到子类。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class Client{
    public static void main(String[] args) {
        new ProductFactoryB().useProduct(&quot;ProductC&quot;);
    }
}

interface Product{void createProduct();}

class ProductA implements Product{public void createProduct(){System.out.println(&quot;ProductA&quot;);}}
class ProductB implements Product{public void createProduct(){System.out.println(&quot;ProductB&quot;);}}
class ProductC implements Product{public void createProduct(){System.out.println(&quot;ProductC&quot;);}}
class ProductD implements Product{public void createProduct(){System.out.println(&quot;ProductD&quot;);}}

//抽象工厂：描述具体工厂的公共接口 核心，只需传入名字
abstract class ProductFactory {
    private Product product = null;
    void useProduct(String name){product = getProduct(name);product.createProduct();}
    abstract Product getProduct(String name);
}

//具体工厂：描述具体工厂，创建产品的实例，供外界调用
class ProductFactoryA extends ProductFactory{
    public Product getProduct(String name){
        if(name.equals(&quot;ProductA&quot;)){ return new ProductA(); }else{ return new ProductB(); }
    }
}

class ProductFactoryB extends ProductFactory{
    public Product getProduct(String name){
        if(name.equals(&quot;ProductC&quot;)){ return new ProductC(); }else{ return new ProductD(); }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-1-3-抽象工厂模式" tabindex="-1"><a class="header-anchor" href="#_3-1-3-抽象工厂模式"><span>3.1.3. 抽象工厂模式</span></a></h3><ul><li>抽象工厂模式：定义了一个interface用于创建相关或有依赖关系的对象簇，而无需指明具体的类</li><li>将工厂抽象成两层，AbsFactory(抽象工厂) 和 具体实现的工厂子类。程序员可以根据创建对象类型使用对应的工厂子类。这样将单个的简单工厂类变成了工厂簇，更利于代码的维护和扩展</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class Client{
    public static void main(String[] args) {
        new FoodFactory(new ProductFactoryB()).getProduct(&quot;ProductC&quot;);
    }
}

interface Product{void createProduct();}

class ProductA implements Product{public void createProduct(){System.out.println(&quot;ProductA&quot;);}}
class ProductB implements Product{public void createProduct(){System.out.println(&quot;ProductB&quot;);}}
class ProductC implements Product{public void createProduct(){System.out.println(&quot;ProductC&quot;);}}
class ProductD implements Product{public void createProduct(){System.out.println(&quot;ProductD&quot;);}}

//抽象工厂：描述具体工厂的公共接口
interface AbsProductFactory {public Product getProduct(String name);}

//具体工厂：描述具体工厂，创建产品的实例，供外界调用
class ProductFactoryA implements AbsProductFactory{
    public Product getProduct(String name){
        if(name.equals(&quot;ProductA&quot;)){ return new ProductA(); }else{ return new ProductB(); }
    }
}

class ProductFactoryB implements AbsProductFactory{
    public Product getProduct(String name){
        if(name.equals(&quot;ProductC&quot;)){ return new ProductC(); }else{ return new ProductD(); }
    }
}

//抽象产品族：描述抽象产品的公共接口 核心。传入工厂和名字 增加了这个类可以指定工厂生产
class FoodFactory {
    AbsProductFactory factory;
    public FoodFactory(AbsProductFactory factory) {
        this.factory = factory;
    }
    public void getProduct(String name) {
        this.factory.getProduct(name).createProduct();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-1-4-原型模式" tabindex="-1"><a class="header-anchor" href="#_3-1-4-原型模式"><span>3.1.4. 原型模式</span></a></h3><ul><li>原型模式(Prototype模式):拷贝对象实例（不是同一个对象）违背了ocp原则；逃避构造函数的约束</li><li>资源优化场景:类初始化需要消化非常多的资源，这个资源包括数据、硬件资源等。</li><li>性能和安全要求的场景:通过new产生一个对象需要非常繁琐的数据准备或访问权限时</li><li>一个对象多个修改者的场景:一个对象需要提供给其他对象访问，而且各个调用者可能都需要修改其值时，可以使用原型模式拷贝多个对象供调用者使用</li><li>创建新的对象比较复杂时，可以利用原型模式简化对象的创建过程，同时也能够提高效率</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//浅拷贝仅仅复制所考虑的对象，而不复制它所引用的对象(基本数据类型直接复制，引用数据类型引用传递)
//1.实现Cloneable接口，2.重写clone()方法：
public class Client {
    public static void main(String[] args) {
        Sheep sheep = new Sheep(&quot;tom&quot;);
        Sheep firend = new Sheep(&quot;jack&quot;);
        sheep.setFriend(firend);
        Sheep sheep2 = (Sheep)sheep.clone(); //克隆
        System.out.println(&quot;firend=&quot; + firend + &quot;,sheep2.friend=&quot; + sheep2.getFriend());
    }
}

class Sheep implements Cloneable {
    private String name;//基本数据类型直接复制
    private Sheep friend; //引用数据类型引用传递
    public Sheep(String name) {this.name = name;}

    public String getName() { return name; }
    public Sheep getFriend() { return friend; }
    public void setFriend(Sheep friend) { this.friend = friend; }

    @Override
    protected Object clone()  {//克隆该实例，使用默认的clone方法来完成
        Sheep sheep = null;
        try {
            sheep = (Sheep)super.clone();
        } catch (Exception e) {}
        return sheep;
    }
}

//深拷贝把要复制的对象所引用的对象都复制了一遍
//1.重写clone方法来实现深拷贝，然后对所有引用属性进行拷贝
//2.通过对象序列化实现深拷贝(推荐)
public class Client {
    public static void main(String[] args) throws Exception {
        Sheep sheep = new Sheep(&quot;tom&quot;);
        Sheep firend = new Sheep(&quot;jack&quot;);
        sheep.setFriend(firend);
        //方式1 完成深拷贝
//      Sheep sheep2 = (Sheep)sheep.clone();
//      System.out.println(&quot;firend=&quot; + firend + &quot;,sheep2.friend=&quot; + sheep2.getFriend());
        //方式2 完成深拷贝
        Sheep sheep2 = (Sheep)sheep.deepClone();
        System.out.println(&quot;firend=&quot; + firend + &quot;,sheep2.friend=&quot; + sheep2.getFriend());
    }
}

class Sheep implements Cloneable,Serializable {
    private String name;//基本数据类型直接复制
    private Sheep friend; //引用数据类型引用传递
    public Sheep(String name) { this.name = name; }

    public String getName() { return name; }
    public Sheep getFriend() { return friend; }
    public void setFriend(Sheep friend) { this.friend = friend; }

    @Override
    protected Object clone()  {//克隆该实例，使用默认的clone方法来完成
        Sheep sheep = null;
        try {
            sheep = (Sheep)super.clone();
            sheep.setFriend((Sheep) friend.clone());
        } catch (Exception e) {}
        return sheep;
    }

    //深拷贝 - 方式2 通过对象的序列化实现 (推荐)
    public Object deepClone() {
        ByteArrayOutputStream bos = null;
        ObjectOutputStream oos = null;
        ByteArrayInputStream bis = null;
        ObjectInputStream ois = null;
        try {
            //序列化
            bos = new ByteArrayOutputStream();
            oos = new ObjectOutputStream(bos);
            oos.writeObject(this); //当前这个对象以对象流的方式输出
            //反序列化
            bis = new ByteArrayInputStream(bos.toByteArray());
            ois = new ObjectInputStream(bis);
            Sheep copyObj = (Sheep) ois.readObject();
            return copyObj;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        } finally {//关闭流
            try {
                bos.close();
                oos.close();
                bis.close();
                ois.close();
            } catch (Exception e2) {
                System.out.println(e2.getMessage());
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-1-5-建造者模式" tabindex="-1"><a class="header-anchor" href="#_3-1-5-建造者模式"><span>3.1.5. 建造者模式</span></a></h3><ul><li>建造者模式，将<strong>组成部分相似</strong>的复杂对象的建造过程抽象出来（抽象类别），使这个抽象过程的不同实现方法可以构造出不同表现（属性）的对象。</li><li>建造者模式是一步一步创建一个复杂的对象，它允许用户只通过指定复杂对象的类型和内容就可以构建它们，用户不需要知道内部的具体构建细节</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class Client{
    public static void main(String[] args) {
        System.out.println(new ProductDricter().build(new ProductBuilder()));
    }
}

//Product（产品角色）： 一个具体的产品对象。
class Product{
    private String name;
    private String price;
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getPrice() { return price; }
    public void setPrice(String price) { this.price = price; }

    public String toString() { return &quot;Product{name=&quot; + name + &quot;, price=&quot; + price + &quot;}&quot;; }
}

//抽象建造者： 创建一个Product对象的各个部件指定的 接口/抽象类
abstract class Builder{
    protected Product product = new Product();
    abstract void buildName();
    abstract void bulidPrice();
    public Product getProduct(){return product;}
}

//多个具体建造者
class ProductBuilder extends Builder{
    public void buildName(){this.product.setName(&quot;炸鸡&quot;);}
    public void bulidPrice(){this.product.setPrice(&quot;10元&quot;);}
    public Product getProduct(){return product;}
}

//指挥者 传入不同的制造者
class ProductDricter {
    public Product build(Builder builder){
        builder.buildName();
        builder.bulidPrice();
        return builder.getProduct();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-2-结构型模式" tabindex="-1"><a class="header-anchor" href="#_3-2-结构型模式"><span>3.2. 结构型模式</span></a></h2><h3 id="_3-2-1-适配器模式" tabindex="-1"><a class="header-anchor" href="#_3-2-1-适配器模式"><span>3.2.1. 适配器模式</span></a></h3><ul><li>适配器模式(Adapter Pattern)将一个类的接口转换成另一种接口.让原本接口不兼容的类可以兼容</li><li>用户调用适配器转化处理的目标接口方法，适配器在调用被适配者的相关接口方法</li><li><strong>C根据接口要求将不合适的类A转成接口要的类B，只不过传入不合适类A的方式不一样</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class Client {
    public static void main(String[] args) {
        new ClassAdapter().request();
        new ObjectAdapter(new Adaptee()).request();
    }
}

//目标接口
interface Target{public void request();}

//被适配类（不符合要求的类）
class Adaptee{public void specialRequest(){System.out.println(&quot;适配者中的业务代码被调用!&quot;);}}


//类适配器模式-适配器类实现目标接口并继承被适配类完成目标接口转换
class ClassAdapter extends Adaptee implements Target{
    @Override
    public void request(){
        specialRequest();
    };
}

//对象适配模式-对象适配类
class ObjectAdapter implements Target{
    private Adaptee adaptee;//继承改成实现 关联关系-聚合
    public ObjectAdapter(Adaptee adaptee) {
        this.adaptee = adaptee;
    }
    @Override
    public void request(){
        adaptee.specialRequest();
    }
}

//接口适配器模式-接口适配类
abstract class InterfaceAdapter implements Target{public void request(){}}

public class Client {
    public static void main(String[] args) {
        InterfaceAdapter interfaceAdapter = new InterfaceAdapter() {
            @Override
            public void request() {
                System.out.println(&quot;使用了m1的方法&quot;);
            }
        };
        interfaceAdapter.request();
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-2-桥接模式" tabindex="-1"><a class="header-anchor" href="#_3-2-2-桥接模式"><span>3.2.2. 桥接模式</span></a></h3><ul><li>桥接模式(Bridge模式)：将实现与抽象放在两个不同的类层次中，使两个层次可以独立改变。</li><li>桥接模式要求正确识别出系统中<strong>两个独立变化的维度</strong>，因此其使用范围有一定的局限性，即需要有这样的应用场景。</li><li>对于那些不希望使用继承或因为多层次继承导致系统类的个数急剧增加的系统，桥接模式尤为适用.</li><li>常见的应用场景: -JDBC驱动程序</li><li>银行转账系统 <ul><li>转账分类: 网上转账，柜台转账，AMT转账</li><li>转账用户类型：普通用户，银卡用户，金卡用户..</li></ul></li><li>消息管理 <ul><li>消息类型：即时消息，延时消息</li><li>消息分类：手机短信，邮件消息，QQ消息...</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//桥接模式:将C的功能抽象为接口A，将A的功能桥接回到C上，调用C的方法相当于调用A的实现方法
public class Client{
    public static void main(String[] args) {
        RefinedAbstraction refinedAbstraction = new RefinedAbstraction();
        refinedAbstraction.setImplementor(new ConcreteImplementorA());
        refinedAbstraction.do1();
    }
}

//实现化角色
interface Implementor{public void do1();}

//具体实现化角色
class ConcreteImplementorA implements Implementor{public void do1(){}}

//抽象化角色
abstract class Abstraction {//桥接类
    protected Implementor implementor;
    public void setImplementor(Implementor implementor){this.implementor = implementor;}
    protected abstract void do1();
}

//扩展抽象化角色
class RefinedAbstraction extends Abstraction{
    public void do1(){this.implementor.do1();System.out.println(&quot;子类自己的功能&quot;);}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-3-装饰者模式" tabindex="-1"><a class="header-anchor" href="#_3-2-3-装饰者模式"><span>3.2.3. 装饰者模式</span></a></h3><ul><li>装饰者模式：动态的将新功能附加到对象上。在对象功能扩展方面，它比继承更有弹性</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class Client {
    public static void main(String[] args) {
        D d = new D();
        d.setA(new B());
        System.out.println(d.fun());
    }
}

//抽象构件角色
interface A{int fun();}

//具体构件角色
class B implements A{public int fun(){return 1;}}

//抽象装饰角色
abstract class C implements A{
    private A a;
    public void setA(A a){this.a = a;}
    public int fun(){return a.fun();};
}

//具体装饰角色
class D extends C{
    public int fun(){
        return super.fun() + decorate();
    }
    private int decorate(){System.out.println(&quot;为具体构件角色增加额外的功能&quot;);return 1;}//装饰
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-4-组合模式" tabindex="-1"><a class="header-anchor" href="#_3-2-4-组合模式"><span>3.2.4. 组合模式</span></a></h3><ul><li>组合模式（Composite Pattern），又叫部分整体模式，它创建了对象组的树形结构，将对象组合成树状结构以表示“整体-部分”的层次关系</li><li>组合模式让客户以一致的方式处理个别对象以及组合对象</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class Client{
    public static void main(String[] args) {
        B b = new B();
        C c = new C();
        D d = new D();
        b.addA(c);
        c.addA(d);
        b.print();
    }
}

//BCD实现继承一个抽象类达到嵌套组合的目的，层层包含的关系
abstract class A{protected void addA(A a){} protected abstract void print();}

class B extends A{
    private List&lt;A&gt; list = new ArrayList&lt;A&gt;();
    public void addA(A a){list.add(a);}
    public void print(){for(A a:list){a.print();}}
}

class C extends A{
    private List&lt;A&gt; list = new ArrayList&lt;A&gt;();
    public void addA(A a){list.add(a);}
    public void print(){for(A a:list){a.print();}}
}

class D extends A{
    private List&lt;A&gt; list = new ArrayList&lt;A&gt;();
    public void addA(A a){list.add(a);}
    public void print(){System.out.print(&quot;D&quot;);};
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-5-外观者模式" tabindex="-1"><a class="header-anchor" href="#_3-2-5-外观者模式"><span>3.2.5. 外观者模式</span></a></h3><ul><li>外观模式（Facade）为子系统中的一组接口提供一个一致的界面，此模式定义了一个高层接口，这个接口使得这一子系统更加容易使用</li><li>外观模式通过定义一个一致的接口，用以屏蔽内部子系统的细节，使得调用端只需跟这个接口发生调用，而无需关心这个子系统的内部细节</li><li>当系统需要分层次设计时，可以使用</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//对Facade操作实现对A和B操作
public class Client{
    public static void main(String[] args) {
        Facade f = new Facade();
        f.setA(new A());
        f.setB(new B());
        f.fun();
        f.fun2();
    }
}

class Facade{
    private A a;
    private B b;
    public void setA(A a){this.a=a;}
    public void setB(B b){this.b=b;}
    public void fun(){
        a.fun1();b.fun4();//分两个层次了
    }
    public void fun2(){
        b.fun3();a.fun2();
    }
}

class A {public void fun1(){System.out.println(&quot;fun1&quot;);} public void fun2(){System.out.println(&quot;fun2&quot;);}}
class B {public void fun3(){System.out.println(&quot;fun3&quot;);} public void fun4(){System.out.println(&quot;fun4&quot;);}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-6-享元模式-池技术" tabindex="-1"><a class="header-anchor" href="#_3-2-6-享元模式-池技术"><span>3.2.6. 享元模式(池技术)</span></a></h3><ul><li>享元模式（Flyweight Pattern）: 运用共享技术有效地支持大量细粒度的对象，减少对象的创建</li><li>常用于系统底层开发，解决系统的性能问题。像数据库连接池，里面都是创建好的连接对象，在这些连接对象中有我们需要的则直接拿来用，避免重新创建，如果没有我们需要的，则创建一个</li><li>享元模式能够解决重复对象的内存浪费的问题，当系统中有大量相似对象，需要缓冲池时。不需总是创建新对象，可以从缓冲池里拿。这样可以降低系统内存，同时提高效率</li><li>享元模式经典的应用场景就是池技术了，String常量池、数据库连接池、缓冲池等等都是享元模式的应用，享元模式是池技术的重要实现方式</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class Client{
    public static void main(String[] args) {
        B b = new B();
        ((A) b.getA(&quot;test&quot;)).fun();
        ((A) b.getA(&quot;test&quot;)).fun();
    }
}
class A{public void fun(){System.out.println(this);}}

class B{
    private Map&lt;String,A&gt; map = new HashMap&lt;String,A&gt;();
    public A getA(String name){
        A a = map.get(name);
        if(a == null){
            A nA = new A();
            map.put(name,nA);
            return nA;
        }
        return a;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-7-代理模式-jdk与cglib" tabindex="-1"><a class="header-anchor" href="#_3-2-7-代理模式-jdk与cglib"><span>3.2.7. 代理模式(JDK与cglib)</span></a></h3><ul><li>代理模式：为一个对象提供一个替身，以控制对这个对象的访问。即通过代理对象访问目标对象.这样做的好处是:可以在目标对象实现的基础上,增强额外的功能操作,即扩展目标对象的功能。</li><li>被代理的对象可以是远程对象、创建开销大的对象或需要安全控制的对象</li><li>代理模式有不同的形式, 主要有三种 静态代理、动态代理 (JDK代理、接口代理)和 Cglib代理 (可以在内存动态的创建对象，而不需要实现接口， 他是属于动态代理的范畴) 。</li><li>代理模式(Proxy)的变体 <ul><li>防火墙代理:内网通过代理穿透防火墙，实现对公网的访问。</li><li>缓存代理:比如：当请求图片文件等资源时，先到缓存代理取，如果取到资源则ok,如果取不到资源，再到公网或者数据库取，然后缓存。</li><li>远程代理:远程对象的本地代表，通过它可以把远程对象当本地对象来调用。远程代理通过网络和真正的远程对象沟通信息</li><li>同步代理:主要使用在多线程编程中，完成多线程间同步工作</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>- 静态代理：需要定义接口或者父类,被代理对象(即目标对象)与代理对象一起实现相同的接口或者是继承相同父类；一旦接口增加方法，目标对象和代理对象都要维护，因为代理对象和目标对象实现一样的接口，所以会有很多代理类
public class Client{
    public static void main(String[] args) {
        B b = new B();
        C c = new C();
        c.setA(b);
        c.fun();
    }
}
interface A{void fun();}

class B implements A{public void fun(){System.out.println(&quot;目标对象...&quot;);}}//被代理对象/目标对象

class C implements A{//代理对象
    private B b;
    private A a;
    public void setA(A a){this.a = a;}
    public void fun(){
        System.out.println(&quot;前处理....&quot;);
        this.a.fun();
        System.out.println(&quot;后处理....&quot;);
    }
}

动态代理模式的(JDK代理、接口代理)
- 代理对象不需要实现接口，但是目标对象要实现接口
- 代理类所在包:java.lang.reflect.Proxy
- JDK实现代理只需要使用newProxyInstance方法,但是该方法需要接收三个参数,完整的写法是: 
    - static Object newProxyInstance(ClassLoader loader, Class&lt;?&gt;[] interfaces,InvocationHandler h )
    - ClassLoader 指定当前目标对象使用的类加载器，获取加载器的方法固定
    - Class&lt;?&gt;[] interfaces 目标对象实现的接口类型，使用泛型方法确认类型
    - InvocationHandler h 执行目标对象的方法时，会触发该方法，会把当前执行的对象方法当参数传入

public class Client {
    public static void main(String[] args) {
        A proxyInstance = (A)new ProxyFactory(new B()).getProxyInstance();
        proxyInstance.a();
    }
}

interface A {void a();}

class B implements A{ public void a() {System.out.println(&quot;代理对象&quot;);} }//被代理对象/目标对象

class ProxyFactory {
    private Object target;
    public ProxyFactory(Object target) {this.target = target;}
    public Object getProxyInstance() {//代理对象
        return Proxy.newProxyInstance(target.getClass().getClassLoader(), target.getClass().getInterfaces(),
                new InvocationHandler() {
                    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
                        System.out.println(&quot;前处理....&quot;);
                        Object object = method.invoke(target, args);
                        System.out.println(&quot;后处理....&quot;);
                        return object;
                    }
                });
    }
}

Cglib代理/子类代理
- Cglib代理是在内存中构建一个子类对象从而实现对目标对象功能扩展。
- Cglib是一个强大的高性能的代码生成包,它可以在运行期扩展java类与实现java接 口.它广泛的被许多AOP的框架使用,例如Spring AOP，实现方法拦截
- 在AOP编程中如何选择代理模式：目标对象需要实现接口，用JDK代理、目标对象不需要实现接口，用Cglib代理
- Cglib包的底层是通过使用字节码处理框架ASM来转换字节码并生成新的类
public class Client {
    public static void main(String[] args) {
        A target = new A();
        ((A)new ProxyFactory(target).getProxyInstance()).fun();
    }
}

class A{public void fun(){System.out.println(&quot;代理对象...&quot;);}}

class ProxyFactory implements MethodInterceptor {
    private Object target;
    public ProxyFactory(Object target) {this.target = target;}
    public Object getProxyInstance() {
        Enhancer enhancer = new Enhancer();
        enhancer.setSuperclass(target.getClass());
        enhancer.setCallback(this);
        return enhancer.create();
    }
    @Override
    public Object intercept(Object arg0, Method method, Object[] args, MethodProxy proxy) throws Throwable {
        System.out.println(&quot;前处理....&quot;);
        Object object = method.invoke(target, args);
        System.out.println(&quot;后处理....&quot;);
        return object;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-3-行为型模式" tabindex="-1"><a class="header-anchor" href="#_3-3-行为型模式"><span>3.3. 行为型模式</span></a></h2><h3 id="_3-3-1-模板方法模式" tabindex="-1"><a class="header-anchor" href="#_3-3-1-模板方法模式"><span>3.3.1. 模板方法模式</span></a></h3><ul><li>模板方法模式（Template Method Pattern），在一个抽象类公开定义了执行它的方法的模板。它的子类可以按需要重写方法实现，但调用将以抽象类中定义的方式进行。</li><li>模板方法模式 定义一个操作中的算法的骨架，而将一些步骤延迟到子类中，使得子类可以不改变一个算法的结构，就可以重定义该算法的某些特定步骤</li><li>一般模板方法加上final关键字，防止子类重新模板方法</li><li>当要完成某个过程。该过程要执行一系列步骤，这一系列的步骤基本相同，但其个别步骤在实现可能不同，考虑使用模板方法模式来处理</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class Client {
    public static void main(String[] args) {
        A a = new B(); a.make();
    }
}

abstract class A {
    //模板方法, make , 模板方法可以做成final , 不让子类去覆盖.
    final void make() {if(gouzi()){B();}C();}
    abstract void B();
    abstract void C();
    boolean gouzi(){return false;}//默认不做任何事，子类可以视情况要不要覆盖它，该方法称为“钩子”。
}

class B extends A{
    void B(){System.out.println(&quot;B实现了模板方法B&quot;);};
    void C(){System.out.println(&quot;B实现了模板方法C&quot;);};
    boolean gouzi(){return true;}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-2-命令模式" tabindex="-1"><a class="header-anchor" href="#_3-3-2-命令模式"><span>3.3.2. 命令模式</span></a></h3><ul><li>命令模式：我们经常需要向某些对象发送请求，但是并不知道请求的接收者是谁，也不知道被请求的操作是哪个，只需在程序运行时指定具体的请求接收者即可</li><li>命名模式通过命令对象使得请求发送者与请求接收者消除彼此之间的耦合，让对象之间的调用关系更加灵活，实现解耦。</li><li>在命名模式中，会将一个请求封装为一个对象，以便使用不同参数来表示不同的请求(即命名)，同时命令模式也支持可撤销的操作。</li><li>容易设计一个命令队列。只要把命令对象放到列队，就可以多线程的执行命令；容易实现对请求的撤销和重做</li><li>命令模式可能导致某些系统有过多的具体命令类，增加了系统的复杂度，这点在使用的时候要注意</li><li>命令模式经典使用场景：界面的一个按钮都是一条命令、模拟CMD、订单的撤销/恢复、触发-反馈机制</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//命令调用者集合了所有的命令，调用命令时实际调用接收者的方法，而命令可以选择调用不同的接受者方法
public class Client {
    public static void main(String[] args) {
        Receiver receiver = new Receiver();
        ConcreteCommand concreteCommand = new ConcreteCommand(receiver);
        Invoker invoker = new Invoker();
        invoker.takeCommand(concreteCommand);
        invoker.placeCommands();
    }
}

//命令模式 命令接口命令角色Command
interface Command {void execute();}

//请求实现类 命令实现类 依赖接收者 将一个接受者对象与一个动作绑定，调用接受者相应的动作，实现execute
class ConcreteCommand implements Command {
    private Receiver receiver;
    public ConcreteCommand(Receiver receiver){this.receiver = receiver;}
    public void execute() {receiver.buy();}
}

//请求类 接受者Receiver
class Receiver {
    public void buy(){}
}

//命令调用类：调用者角色
class Invoker {
    private List&lt;Command&gt; commandList = new ArrayList&lt;Command&gt;();
    public void takeCommand(Command command){commandList.add(command);}
    public void placeCommands(){
        for (Command command : commandList) {
            command.execute();
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-3-访问者模式" tabindex="-1"><a class="header-anchor" href="#_3-3-3-访问者模式"><span>3.3.3. 访问者模式</span></a></h3><ul><li>访问者模式（Visitor Pattern），封装一些作用于某种数据结构的各元素的操作，它可以在不改变数据结构的前提下定义作用于这些元素的新的操作。</li><li>主要将数据结构与数据操作分离，解决 数据结构和操作耦合性问题</li><li>访问者模式的基本工作原理是：在被访问的类里面加一个对外提供接待访问者的接口</li><li>访问者模式主要应用场景是：需要对一个对象结构中的对象进行很多不同操作(这些操作彼此没有关联)，同时需要避免让这些操作&quot;污染&quot;这些对象的类，可以选用访问者模式解决</li><li>重载是静态绑定，重写是动态绑定，双分派把重写放在重载之前，以实现在运行时动态判断执行那个子类的方法。</li><li>访问者模式可以对功能进行统一，可以做报表、UI、拦截器与过滤器，适用于数据结构相对稳定的系统</li><li>因此，如果一个系统有比较稳定的数据结构，又有经常变化的功能需求，那么访问者模式就是比较合适的.</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class Client {
    public static void main(String[] args) {
        ObjectStructure objectStructure = new ObjectStructure();
        objectStructure.attach(new Man());
        objectStructure.attach(new Woman());

        //成功
        Success success = new Success();
        objectStructure.display(success);

        Fail fail = new Fail();
        objectStructure.display(fail);
    }
}

//抽象访问者 Visitor抽象访问者
abstract class Action {
    public abstract void getManResult(Man man);
    public abstract void getWomanResult(Woman woman);
}

//实际访问者  ConcreteVisitor具体访问者
class Success extends Action {
    public void getManResult(Man man) {System.out.println(&quot; 男人给的评价该歌手很成功 !&quot;);}
    public void getWomanResult(Woman woman) {System.out.println(&quot; 女人给的评价该歌手很成功 !&quot;);}
}

class Fail extends Action {
    public void getManResult(Man man) {System.out.println(&quot; 男人给的评价该歌手失败 !&quot;);}
    public void getWomanResult(Woman woman) {System.out.println(&quot; 女人给的评价该歌手失败 !&quot;);}
}

//抽象元素 接收一个访问者对象
abstract class Person {
    public abstract void accept(Action action);
}

//实际元素
//使用了双分派, 即
//首先在客户端程序中，将具体状态作为参数传递Woman中(第一次分派)
// 然后Woman 类调用作为参数的 &quot;具体方法&quot; 中方法getWomanResult, 同时将自己(this)作为参数传入，完成第二次的分派
//双分派是指不管类怎么变化，我们都能找到期望的方法运行。
//双分派意味着得到执行的操作取决于请求的种类和两个接收者的类型 -
//假设我们要添加一个Wait的状态类，只需增加一个Action子类即可在客户端调用即可，不需要改动任何其他类的代码
class Woman extends Person{
    public void accept(Action action) {action.getWomanResult(this);}
}

class Man extends Person {
    public void accept(Action action) {action.getManResult(this);}
}

//数据结构，管理很多人（Man , Woman）ObjectStructure
class ObjectStructure {
    private List&lt;Person&gt; persons = new LinkedList&lt;&gt;();
    public void attach(Person p) {persons.add(p);}
    public void detach(Person p) {persons.remove(p);}
    public void display(Action action) {
        for(Person p: persons) {
            p.accept(action);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-4-迭代器模式" tabindex="-1"><a class="header-anchor" href="#_3-3-4-迭代器模式"><span>3.3.4. 迭代器模式</span></a></h3><ul><li>如果我们的集合元素是用不同的方式实现的，有数组，还有java的集合类，或者还有其他方式，当客户端要遍历这些集合元素的时候就要使用多种遍历方式，而且还会暴露元素的内部结构，可以考虑使用迭代器模式解决。</li><li>迭代器模式，提供一种遍历集合元素的统一接口，用一致的方法遍历集合元素，不需要知道集合对象的底层表示，即：不暴露其内部的结构。</li><li>提供了一种设计思想，就是一个类应该只有一个引起变化的原因（叫做单一责任原则）。在聚合类中，我们把迭代器分开，就是要把管理对象集合和遍历对象集合的责任分开，这样一来集合改变的话，只影响到聚合对象。而如果遍历方式改变的话，只影响到了迭代器。</li><li>当要展示一组相似对象，或者遍历一组相同对象时使用, 适合使用迭代器模式<br> -每个聚合对象都要一个迭代器，会生成多个迭代器不好管理类</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class Client {
    public static void main(String[] args) {
        ConcreteAggregate aggregate = new ConcreteAggregate();
        Iterator iterator = aggregate.createIterator();
        while(iterator.hasNext()) {
            Element e = (Element)iterator.next();
            System.out.println(e.getName());
        }
    }
}

//需要被迭代的对象
class Element {
    private String name;//set/get
    public Element(String name) {this.name = name;}
    public String getName() { return name; }
}
//aggregate接口
interface Aggregate {
    Iterator createIterator();
}

//aggregate接口实现
class ConcreteAggregate implements Aggregate {
    Element[] elements;
    public ConcreteAggregate() {elements = new Element[]{new Element(&quot;test1&quot;),new Element(&quot;test2&quot;)};}
    @Override
    public Iterator createIterator() {return new ConcreteIterator(elements);}
}

//迭代器实现
class ConcreteIterator implements Iterator {
    Element[] elements;
    int position = 0; //遍历的位置
    public ConcreteIterator(Element[] elements) {this.elements = elements;}
    //判断是否还有下一个元素
    @Override
    public boolean hasNext() {
        if(position &gt;= elements.length || elements[position] == null) {
            return false;
        }else {
            return true;
        }
    }
    @Override
    public Object next() {
        Element element = elements[position];
        position += 1;
        return element;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-5-观察者模式" tabindex="-1"><a class="header-anchor" href="#_3-3-5-观察者模式"><span>3.3.5. 观察者模式</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class Client {
    public static void main(String[] args) {
        Subject subject = new Subject();
        new BinaryObserver(subject);
        subject.setState(15);
    }
}

//通知者
class Subject {
    private List&lt;Observer&gt; observers = new ArrayList&lt;Observer&gt;();
    private int state;
    public int getState() {return state;}
    //通知核心
    public void setState(int state) {
        this.state = state;
        notifyAllObservers();
    }
    public void attach(Observer observer){observers.add(observer);}
    public void notifyAllObservers(){
        for (Observer observer : observers) {
            observer.update();
        }
    }
}

//观察者抽象
abstract class Observer {
    protected Subject subject;
    public abstract void update();
}

//观察者
class BinaryObserver extends Observer{
    public BinaryObserver(Subject subject){
        this.subject = subject;
        this.subject.attach(this);
    }
    @Override
    public void update() {
        System.out.println( &quot;Binary String: &quot; + Integer.toBinaryString( subject.getState() ) );
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-6-中介者模式" tabindex="-1"><a class="header-anchor" href="#_3-3-6-中介者模式"><span>3.3.6. 中介者模式</span></a></h3><ul><li>中介者模式（Mediator Pattern），用一个中介对象来封装一系列的对象交互。中介者使各个对象不需要显式地相互引用，从而使其耦合松散，而且可以独立地改变它们之间的交互</li><li>比如MVC模式，C（Controller控制器）是M（Model模型）和V（View视图）的中介者，在前后端交互时起到了中间人的作用</li><li>多个类相互耦合，会形成网状结构, 使用中介者模式将网状结构分离为星型结构，进行解耦</li><li>中介者承担了较多的责任，一旦中介者出现了问题，整个系统就会受到影响</li><li>如果设计不当，中介者对象本身变得过于复杂，这点在实际使用时，要特别注意</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class Client {
    public static void main(String[] args) {
        Mediator mediator = new ConcreteMediator();
        ConcreteColleague concreteColleague = new ConcreteColleague(mediator, &quot;alarm&quot;);
        concreteColleague.SendMessage(0);
    }
}

//同事抽象类
abstract class Colleague {
    private Mediator mediator;
    public String name;
    public Colleague(Mediator mediator, String name) {this.mediator = mediator;this.name = name;mediator.Register(name, this);}
    public Mediator GetMediator() {return this.mediator;}
    public abstract void SendMessage(int stateChange);
    public Colleague(){}

}

//具体同事类
class ConcreteColleague extends Colleague {
    public ConcreteColleague(Mediator mediator, String alarm) {
        super(mediator,alarm);
    }
    @Override
    public void SendMessage(int stateChange) {this.GetMediator().GetMessage(stateChange, this.name);}
    public void StartCoffee() {System.out.println(&quot;It&#39;s time to startcoffee!&quot;);}
}

//抽象中介者
abstract class Mediator {
    public abstract void Register(String colleagueName, Colleague colleague);//将给中介者对象，加入到集合中
    public abstract void GetMessage(int stateChange, String colleagueName);//接收消息, 具体的同事对象发出
}

//具体的中介者类
class ConcreteMediator extends Mediator {
    private HashMap&lt;String, Colleague&gt; colleagueMap = new HashMap&lt;String, Colleague&gt;();//集合，放入所有的同事对象
    private HashMap&lt;String, String&gt; interMap = new HashMap&lt;String, String&gt;();
    public ConcreteMediator() {}

    @Override
    public void Register(String colleagueName, Colleague colleague) {
        colleagueMap.put(colleagueName, colleague);
        if (colleague instanceof ConcreteColleague) {interMap.put(&quot;ConcreteColleague&quot;, colleagueName);}
    }

    //具体中介者的核心方法
    //1. 根据得到消息，完成对应任务
    //2. 中介者在这个方法，协调各个具体的同事对象，完成任务
    @Override
    public void GetMessage(int stateChange, String colleagueName) {
        if (colleagueMap.get(colleagueName) instanceof ConcreteColleague) {
            if (stateChange == 0) {((ConcreteColleague) (colleagueMap.get(interMap.get(&quot;ConcreteColleague&quot;)))).StartCoffee();}
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-7-解释器模式" tabindex="-1"><a class="header-anchor" href="#_3-3-7-解释器模式"><span>3.3.7. 解释器模式</span></a></h3><ul><li>在编译原理中，一个算术表达式通过词法分析器形成词法单元，而后这些词法单元再通过语法分析器构建语法分析树，最终形成一颗抽象的语法分析树。这里的词法分析器和语法分析器都可以看做是解释器</li><li>解释器模式（Interpreter Pattern）：是指给定一个语言(表达式)，定义它的文法的一种表示，并定义一个解释器，使用该解释器来解释语言中的句子(表达式)</li><li>应用场景:可以将一个需要解释执行的语言中的句子表示为一个抽象语法树 ;一些重复出现的问题可以用一种简单的语言来表达 一个简单语法需要解释的场景;这样的例子还有，比如编译器、运算表达式计算、正则表达式、机器人等</li><li>当有一个语言需要解释执行，可将该语言中的句子表示为一个抽象语法树，就可以考虑使用解释器模式，让程序具有良好的扩展性</li><li>使用解释器可能带来的问题：解释器模式会引起类膨胀、解释器模式采用递归调用方法，将会导致调试非常复杂、效率可能降低.</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//表达式接口
public interface Expression {
    public boolean interpret(String context);
}

//表达式实现
public class TerminalExpression implements Expression {
    private String data;
    public TerminalExpression(String data){this.data = data; }
    @Override
    public boolean interpret(String context) {
        if(context.contains(data)){return true;}
        return false;
    }
}

public class OrExpression implements Expression {
    private Expression expr1 = null;
    private Expression expr2 = null;
    public OrExpression(Expression expr1, Expression expr2) { 
        this.expr1 = expr1;
        this.expr2 = expr2;
    }
    @Override
    public boolean interpret(String context) {      
        return expr1.interpret(context) || expr2.interpret(context);
    }
}

public class AndExpression implements Expression {
    private Expression expr1 = null;
    private Expression expr2 = null;
    public AndExpression(Expression expr1, Expression expr2) { 
        this.expr1 = expr1;
        this.expr2 = expr2;
    }
    @Override
    public boolean interpret(String context) {      
        return expr1.interpret(context) &amp;&amp; expr2.interpret(context);
    }
}

public class client {
    //规则：Robert 和 John 是男性
    public static Expression getMaleExpression(){
        Expression robert = new TerminalExpression(&quot;Robert&quot;);
        Expression john = new TerminalExpression(&quot;John&quot;);
        return new OrExpression(robert, john);    
    }
    //规则：Julie 是一个已婚的女性
    public static Expression getMarriedWomanExpression(){
        Expression julie = new TerminalExpression(&quot;Julie&quot;);
        Expression married = new TerminalExpression(&quot;Married&quot;);
        return new AndExpression(julie, married);    
    }
    public static void main(String[] args) {
        Expression isMale = getMaleExpression();
        Expression isMarriedWoman = getMarriedWomanExpression();
        System.out.println(&quot;John is male? &quot; + isMale.interpret(&quot;John&quot;));
        System.out.println(&quot;Julie is a married women? &quot; + isMarriedWoman.interpret(&quot;Married Julie&quot;));
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-8-备忘录模式" tabindex="-1"><a class="header-anchor" href="#_3-3-8-备忘录模式"><span>3.3.8. 备忘录模式</span></a></h3><ul><li>备忘录模式（Memento Pattern）在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态。这样以后就可将该对象恢复到原先保存的状态</li><li>备忘录对象主要用来记录一个对象的某种状态，或者某些数据，当要做回退时，可以从备忘录对象里获取原来的数据进行恢复操作</li><li>给用户提供了一种可以恢复状态的机制，可以使用户能够比较方便地回到某个历史的状态</li><li>如果类的成员变量过多，势必会占用比较大的资源，而且每一次保存都会消耗一定的内存, 这个需要注意</li><li>适用的应用场景：1、后悔药。 2、打游戏时的存档。 3、Windows 里的 ctri + z。 4、IE 中的后退。 4、数据库的事务管理</li><li>为了节约内存，备忘录模式可以和原型模式配合使用</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class Client {
    public static void main(String[] args) {
        Originator originator = new Originator();
        Caretaker caretaker = new Caretaker();
        originator.setState(&quot; 状态#1 攻击力 100 &quot;);
        //保存了当前的状态
        caretaker.add(originator.saveStateMemento());
        originator.setState(&quot; 状态#2 攻击力 80 &quot;);
        caretaker.add(originator.saveStateMemento());
        originator.setState(&quot; 状态#3 攻击力 50 &quot;);
        caretaker.add(originator.saveStateMemento());
        System.out.println(&quot;当前的状态是 =&quot; + originator.getState());
        //希望得到状态 1, 将 originator 恢复到状态1
        originator.getStateFromMemento(caretaker.get(0));
        System.out.println(&quot;恢复到状态1 , 当前的状态是&quot;);
        System.out.println(&quot;当前的状态是 =&quot; + originator.getState());
    }
}

//备忘录对象
class Memento {
    private String state;
    public Memento(String state) {this.state = state;}
    public String getState() {return state;}
}

//守护者对象,负责保存多个备忘录对象
class Caretaker {
    //在List 集合中会有很多的备忘录对象
    private List&lt;Memento&gt; mementoList = new ArrayList&lt;Memento&gt;();
    public void add(Memento memento) {mementoList.add(memento);}
    //获取到第index个Originator 的 备忘录对象(即保存状态)
    public Memento get(int index) {return mementoList.get(index);}
}

//originator : 对象(需要保存状态的对象)
class Originator {
    private String state;//状态信息
    public String getState() {return state;}
    public void setState(String state) {this.state = state;}
    //编写一个方法，可以保存一个状态对象 Memento
    //因此编写一个方法，返回 Memento
    public Memento saveStateMemento() {return new Memento(state);}
    //通过备忘录对象，恢复状态(将自己的属性转成传入来的属性)
    public void getStateFromMemento(Memento memento) {state = memento.getState();}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-9-状态模式" tabindex="-1"><a class="header-anchor" href="#_3-3-9-状态模式"><span>3.3.9. 状态模式</span></a></h3><ul><li>状态模式（State Pattern）：它主要用来解决对象在多种状态转换时，需要对外输出不同的行为的问题。状态和行为是一一对应的，状态之间可以相互转换</li><li>当一个对象的内在状态改变时，允许改变其行为，这个对象看起来像是改变了其类</li><li>方便维护。将容易产生问题的if-else语句删除了，如果把每个状态的行为都放到一个类中，每次调用方法时都要判断当前是什么状态，不但会产出很多if-else语句，而且容易出错,容易增删状态</li><li>会产生很多类。每个状态都要一个对应的类，当状态过多时会产生很多类，加大维护难度</li><li>应用场景：当一个事件或者对象有很多种状态，状态之间会相互转换，对不同的状态要求有不同的行为的时候，可以考虑使用状态模式</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class Client {
    public static void main(String[] args) {
        Context context = new Context();
        StartState startState = new StartState();
        startState.doAction(context);
        System.out.println(context.getState().toString());
        StopState stopState = new StopState();
        stopState.doAction(context);
        System.out.println(context.getState().toString());
    }
}

//状态接口
interface State {
    void doAction(Context context);
}

//状态实现
class StartState implements State {
    public void doAction(Context context) {
        System.out.println(&quot;Player is in start state&quot;);
        context.setState(this);
    }
    public String toString(){return &quot;Start State&quot;;}
}

class StopState implements State {
    public void doAction(Context context) {
        System.out.println(&quot;Player is in stop state&quot;);
        context.setState(this);
    }
    public String toString(){return &quot;Stop State&quot;;}
}

//context
class Context {
    private State state;
    public void setState(State state){
        this.state = state;
    }
    public State getState(){
        return state;
    }
}
//将接口实现类放入到传入参数context的接口属性中，调用传入参数context可获得接口实现类及调用其方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-10-策略模式" tabindex="-1"><a class="header-anchor" href="#_3-3-10-策略模式"><span>3.3.10. 策略模式</span></a></h3><ul><li>策略模式（Strategy Pattern）中定义算法族，分别封装起来，让他们之间可以互相替换，此模式让算法的变化独立于使用算法的客户分别封装行为接口，实现算法族，超类里放行为接口对象，在子类里具体设定行为对象。原则就是：分离变化部分，封装接口，基于接口编程各种功能。此模式让行为的变化独立于算法的使用者</li><li>策略模式的关键是：分析项目中变化部分与不变部分</li><li>策略模式的核心思想是：多用组合/聚合 少用继承；用行为类组合，而不是行为的继承。更有弹性</li><li>提供了可以替换继承关系的办法： 策略模式将算法封装在独立的Strategy类中使得你可以独立于其Context改变它，使它易于切换、易于理解、易于扩展</li><li>需要注意的是：每添加一个策略就要增加一个类，当策略过多是会导致类数目庞大</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class Client {
    public static void main(String[] args) {
        Context context = new Context(new OperationAdd());    
        System.out.println(&quot;10 + 5 = &quot; + context.executeStrategy(10, 5));
        context = new Context(new OperationSubstract());      
        System.out.println(&quot;10 - 5 = &quot; + context.executeStrategy(10, 5));
    }
}
//策略接口
interface Strategy {
    public int doOperation(int num1, int num2);
}
//策略实现
class OperationAdd implements Strategy{
    @Override
    public int doOperation(int num1, int num2) {
        return num1 + num2;
    }
}
class OperationSubstract implements Strategy{
    @Override
    public int doOperation(int num1, int num2) {
        return num1 - num2;
    }
}
//context
class Context {
    private Strategy strategy;
    public Context(Strategy strategy){
        this.strategy = strategy;
    }
    public int executeStrategy(int num1, int num2){
        return strategy.doOperation(num1, num2);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-11-职责链模式" tabindex="-1"><a class="header-anchor" href="#_3-3-11-职责链模式"><span>3.3.11. 职责链模式</span></a></h3><ul><li>职责链模式Chain of Responsibility Pattern责任链模式，为请求创建了一个接收者对象的链对请求的发送者和接收者进行解耦。</li><li>职责链模式通常每个接收者都包含对另一个接收者的引用。如果一个对象不能处理该请求，那么它会把相同的请求传给下一个接收者，依此类推。</li><li>性能会受到影响，特别是在链比较长的时候，因此需控制链中最大节点数量，一般通过在Handler中设置一个最大节点数量，在setNext()方法中判断是否已经超过阀值，超过则不允许该链建立，避免出现超长链无意识地破坏系统性能</li><li>最佳应用场景：有多个对象可以处理同一个请求时，比如：多级请求、请假/加薪等审批流程、Java Web中Tomcat对Encoding的处理、拦截器</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class Client {
    public static void main(String[] args) {

        DepartmentApprover departmentApprover = new DepartmentApprover(&quot;张主任&quot;);//创建相关的审批人
        CollegeApprover collegeApprover = new CollegeApprover(&quot;李院长&quot;);
        SchoolMasterApprover schoolMasterApprover = new SchoolMasterApprover(&quot;佟校长&quot;);

        departmentApprover.setApprover(collegeApprover);//需要将各个审批级别的下一个设置好 (处理人构成环形: )
        collegeApprover.setApprover(schoolMasterApprover);
        schoolMasterApprover.setApprover(departmentApprover);

        departmentApprover.processRequest(new PurchaseRequest(31000, 1));
        collegeApprover.processRequest(new PurchaseRequest(200, 2));
    }
}

//处理者抽象
abstract class Approver {
    Approver approver;  //下一个处理者
    String name; // 名字
    public Approver(String name) {this.name = name;}
    public void setApprover(Approver approver) {this.approver = approver;}
    //处理审批请求的方法，得到一个请求, 处理是子类完成，因此该方法做成抽象
    public abstract void processRequest(PurchaseRequest purchaseRequest);
}

//具体处理者
class CollegeApprover extends Approver {
    public CollegeApprover(String name) {super(name);}
    @Override
    public void processRequest(PurchaseRequest purchaseRequest) {
        if(purchaseRequest.getPrice() &gt; 5000 &amp;&amp; purchaseRequest.getPrice() &lt;= 10000) {
            System.out.println(&quot; 请求编号 id= &quot; + purchaseRequest.getId() + &quot; 被 &quot; + this.name + &quot; 处理&quot;);
        }else {
            approver.processRequest(purchaseRequest);
        }
    }
}

class DepartmentApprover extends Approver {
    public DepartmentApprover(String name) {super(name);}
    @Override
    public void processRequest(PurchaseRequest purchaseRequest) {
        if(purchaseRequest.getPrice() &lt;= 5000) {
            System.out.println(&quot; 请求编号 id= &quot; + purchaseRequest.getId() + &quot; 被 &quot; + this.name + &quot; 处理&quot;);
        }else {
            approver.processRequest(purchaseRequest);
        }
    }
}

class SchoolMasterApprover extends Approver {
    public SchoolMasterApprover(String name) {super(name);}
    @Override
    public void processRequest(PurchaseRequest purchaseRequest) {
        if(purchaseRequest.getPrice() &gt; 10000) {
            System.out.println(&quot; 请求编号 id= &quot; + purchaseRequest.getId() + &quot; 被 &quot; + this.name + &quot; 处理&quot;);
        }else {
            approver.processRequest(purchaseRequest);
        }
    }
}

//请求类
class PurchaseRequest {
    private float price = 0.0f; //请求金额
    private int id = 0;
    public PurchaseRequest(float price, int id) {
        this.price = price;
        this.id = id;
    }
    public float getPrice() {
        return price;
    }
    public int getId() {
        return id;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,77),a=[d];function r(t,v){return i(),n("div",null,a)}const m=e(s,[["render",r],["__file","designpattern.html.vue"]]),b=JSON.parse('{"path":"/interview/designpattern.html","title":"设计模式","lang":"zh-CN","frontmatter":{"title":"设计模式","date":"2023-01-01T00:00:00.000Z","tags":"面试","categories":"面试","description":"设计模式","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/interview/designpattern.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"设计模式"}],["meta",{"property":"og:description","content":"设计模式"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"设计模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"3.1. 创建型模式","slug":"_3-1-创建型模式","link":"#_3-1-创建型模式","children":[{"level":3,"title":"3.1.1. 单例模式","slug":"_3-1-1-单例模式","link":"#_3-1-1-单例模式","children":[]},{"level":3,"title":"3.1.2. 工厂模式","slug":"_3-1-2-工厂模式","link":"#_3-1-2-工厂模式","children":[]},{"level":3,"title":"3.1.3. 抽象工厂模式","slug":"_3-1-3-抽象工厂模式","link":"#_3-1-3-抽象工厂模式","children":[]},{"level":3,"title":"3.1.4. 原型模式","slug":"_3-1-4-原型模式","link":"#_3-1-4-原型模式","children":[]},{"level":3,"title":"3.1.5. 建造者模式","slug":"_3-1-5-建造者模式","link":"#_3-1-5-建造者模式","children":[]}]},{"level":2,"title":"3.2. 结构型模式","slug":"_3-2-结构型模式","link":"#_3-2-结构型模式","children":[{"level":3,"title":"3.2.1. 适配器模式","slug":"_3-2-1-适配器模式","link":"#_3-2-1-适配器模式","children":[]},{"level":3,"title":"3.2.2. 桥接模式","slug":"_3-2-2-桥接模式","link":"#_3-2-2-桥接模式","children":[]},{"level":3,"title":"3.2.3. 装饰者模式","slug":"_3-2-3-装饰者模式","link":"#_3-2-3-装饰者模式","children":[]},{"level":3,"title":"3.2.4. 组合模式","slug":"_3-2-4-组合模式","link":"#_3-2-4-组合模式","children":[]},{"level":3,"title":"3.2.5. 外观者模式","slug":"_3-2-5-外观者模式","link":"#_3-2-5-外观者模式","children":[]},{"level":3,"title":"3.2.6. 享元模式(池技术)","slug":"_3-2-6-享元模式-池技术","link":"#_3-2-6-享元模式-池技术","children":[]},{"level":3,"title":"3.2.7. 代理模式(JDK与cglib)","slug":"_3-2-7-代理模式-jdk与cglib","link":"#_3-2-7-代理模式-jdk与cglib","children":[]}]},{"level":2,"title":"3.3. 行为型模式","slug":"_3-3-行为型模式","link":"#_3-3-行为型模式","children":[{"level":3,"title":"3.3.1. 模板方法模式","slug":"_3-3-1-模板方法模式","link":"#_3-3-1-模板方法模式","children":[]},{"level":3,"title":"3.3.2. 命令模式","slug":"_3-3-2-命令模式","link":"#_3-3-2-命令模式","children":[]},{"level":3,"title":"3.3.3. 访问者模式","slug":"_3-3-3-访问者模式","link":"#_3-3-3-访问者模式","children":[]},{"level":3,"title":"3.3.4. 迭代器模式","slug":"_3-3-4-迭代器模式","link":"#_3-3-4-迭代器模式","children":[]},{"level":3,"title":"3.3.5. 观察者模式","slug":"_3-3-5-观察者模式","link":"#_3-3-5-观察者模式","children":[]},{"level":3,"title":"3.3.6. 中介者模式","slug":"_3-3-6-中介者模式","link":"#_3-3-6-中介者模式","children":[]},{"level":3,"title":"3.3.7. 解释器模式","slug":"_3-3-7-解释器模式","link":"#_3-3-7-解释器模式","children":[]},{"level":3,"title":"3.3.8. 备忘录模式","slug":"_3-3-8-备忘录模式","link":"#_3-3-8-备忘录模式","children":[]},{"level":3,"title":"3.3.9. 状态模式","slug":"_3-3-9-状态模式","link":"#_3-3-9-状态模式","children":[]},{"level":3,"title":"3.3.10. 策略模式","slug":"_3-3-10-策略模式","link":"#_3-3-10-策略模式","children":[]},{"level":3,"title":"3.3.11. 职责链模式","slug":"_3-3-11-职责链模式","link":"#_3-3-11-职责链模式","children":[]}]}],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":34.5,"words":10350},"filePathRelative":"interview/designpattern.md","localizedDate":"2023年1月1日","excerpt":"<p>设计模式</p>\\n","autoDesc":true}');export{m as comp,b as data};
