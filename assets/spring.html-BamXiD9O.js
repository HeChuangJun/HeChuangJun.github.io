import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as s,c as l,a as t,b as n,d as i,e as a}from"./app-7KT7HDzT.js";const d={},c=a(`<p>spring源码</p><h1 id="_1-annotationconfigapplicationcontext-extends-genericapplicationcontext-abstractapplicationcontext-defaultresourceloader" tabindex="-1"><a class="header-anchor" href="#_1-annotationconfigapplicationcontext-extends-genericapplicationcontext-abstractapplicationcontext-defaultresourceloader"><span>1. AnnotationConfigApplicationContext extends GenericApplicationContext,AbstractApplicationContext,DefaultResourceLoader</span></a></h1><p>implements AnnotationConfigRegistry,BeanDefinitionRegistry,ConfigurableApplicationContext,AliasRegistry,ApplicationContext,Lifecycle,Closeable<br> EnvironmentCapable, ListableBeanFactory, HierarchicalBeanFactory,MessageSource, ApplicationEventPublisher, ResourcePatternResolver,BeanFactory,ResourceLoader,AutoCloseable<br> public class AnnotationConfigApplicationContext extends GenericApplicationContext implements AnnotationConfigRegistry{<br> private final AnnotatedBeanDefinitionReader reader;</p><pre><code>private final ClassPathBeanDefinitionScanner scanner;

public AnnotationConfigApplicationContext() {
	this.reader = new AnnotatedBeanDefinitionReader(this);
	this.scanner = new ClassPathBeanDefinitionScanner(this);
}
public AnnotationConfigApplicationContext(Class&lt;?&gt;... annotatedClasses) {
	this();//创建AnnotatedBeanDefinitionReader和ClassPathBeanDefinitionScanner
	register(annotatedClasses);
	refresh();
}
//GenericApplicationContext 父类构造
private final DefaultListableBeanFactory beanFactory;
public GenericApplicationContext() {
	this.beanFactory = new DefaultListableBeanFactory();//默认创建了BeanFactory
}
//AbstractApplicationContext 父父类构造
private ResourcePatternResolver resourcePatternResolver;
public AbstractApplicationContext() {
	this.resourcePatternResolver = getResourcePatternResolver();
}

protected ResourcePatternResolver getResourcePatternResolver() {
	return new PathMatchingResourcePatternResolver(this);
}

public void register(Class&lt;?&gt;... annotatedClasses) {
	Assert.notEmpty(annotatedClasses, &quot;At least one annotated class must be specified&quot;);
	this.reader.register(annotatedClasses);
}
public void register(Class&lt;?&gt;... annotatedClasses) {
	for (Class&lt;?&gt; annotatedClass : annotatedClasses) {
		registerBean(annotatedClass);
	}
}
public void registerBean(Class&lt;?&gt; annotatedClass) {
	doRegisterBean(annotatedClass, null, null, null);
}
//1.初始化AnnotatedGenericBeanDefinition
//		属性class = 传入的class
// 		属性metadata=StandardAnnotationMetadata 对象 里面的annotations=传入class的所有注解 nestedAnnotationsAsMap = true introspectedClass = 传入的class
//2.shouldSkip判断是否应该跳过，即是否有conditional注解(内部通过Processor接口实现类alwaysTrueAnnotationProcessor的调用searchWithGetSemantics判断返回null确定不跳过)
//3.解析@Scope注解，获取bean的作用域配置信息
//4.解析公共注解Lazy DependsOn Role Description
//5.将启动类注册到beanDefinitionMap中
&lt;T&gt; void doRegisterBean(Class&lt;T&gt; annotatedClass, @Nullable Supplier&lt;T&gt; instanceSupplier, @Nullable String name,
		@Nullable Class&lt;? extends Annotation&gt;[] qualifiers, BeanDefinitionCustomizer... definitionCustomizers) {
	AnnotatedGenericBeanDefinition abd = new AnnotatedGenericBeanDefinition(annotatedClass);
	if (this.conditionEvaluator.shouldSkip(abd.getMetadata())) {
		return;
	}

	abd.setInstanceSupplier(instanceSupplier);
	//解析@Scope注解，获取bean的作用域配置信息
	ScopeMetadata scopeMetadata = this.scopeMetadataResolver.resolveScopeMetadata(abd);
	abd.setScope(scopeMetadata.getScopeName());
	String beanName = (name != null ? name : this.beanNameGenerator.generateBeanName(abd, this.registry));//产生BeanName
	//解析公共注解Lazy DependsOn Role Description
	AnnotationConfigUtils.processCommonDefinitionAnnotations(abd);
	if (qualifiers != null) {
		for (Class&lt;? extends Annotation&gt; qualifier : qualifiers) {
			if (Primary.class == qualifier) {
				abd.setPrimary(true);
			}
			else if (Lazy.class == qualifier) {
				abd.setLazyInit(true);
			}
			else {
				abd.addQualifier(new AutowireCandidateQualifier(qualifier));
			}
		}
	}
	for (BeanDefinitionCustomizer customizer : definitionCustomizers) {
		customizer.customize(abd);
	}

	BeanDefinitionHolder definitionHolder = new BeanDefinitionHolder(abd, beanName);
	definitionHolder = AnnotationConfigUtils.applyScopedProxyMode(scopeMetadata, definitionHolder, this.registry);
	BeanDefinitionReaderUtils.registerBeanDefinition(definitionHolder, this.registry);
}
</code></pre><p>}</p><h1 id="_2-beandefinitionreaderutils" tabindex="-1"><a class="header-anchor" href="#_2-beandefinitionreaderutils"><span>2. BeanDefinitionReaderUtils</span></a></h1><p>public class BeanDefinitionReaderUtils {<br> public static void registerBeanDefinition(<br> BeanDefinitionHolder definitionHolder, BeanDefinitionRegistry registry)<br> throws BeanDefinitionStoreException {</p><pre><code>	// Register bean definition under primary name.
	String beanName = definitionHolder.getBeanName();
	registry.registerBeanDefinition(beanName, definitionHolder.getBeanDefinition());

	// Register aliases for bean name, if any.
	String[] aliases = definitionHolder.getAliases();
	if (aliases != null) {
		for (String alias : aliases) {
			registry.registerAlias(beanName, alias);
		}
	}
}
</code></pre><p>}</p><h1 id="_3-pathmatchingresourcepatternresolver" tabindex="-1"><a class="header-anchor" href="#_3-pathmatchingresourcepatternresolver"><span>3. PathMatchingResourcePatternResolver</span></a></h1><p>public class PathMatchingResourcePatternResolver implements ResourcePatternResolver {<br> private final ResourceLoader resourceLoader;<br> public PathMatchingResourcePatternResolver(ResourceLoader resourceLoader) {<br> Assert.notNull(resourceLoader, &quot;ResourceLoader must not be null&quot;);<br> this.resourceLoader = resourceLoader;<br> }<br> }</p><h1 id="_4-defaultlistablebeanfactory-extends-abstractautowirecapablebeanfactory-abstractbeanfactory-factorybeanregistrysupport-defaultsingletonbeanregistry-simplealiasregistry" tabindex="-1"><a class="header-anchor" href="#_4-defaultlistablebeanfactory-extends-abstractautowirecapablebeanfactory-abstractbeanfactory-factorybeanregistrysupport-defaultsingletonbeanregistry-simplealiasregistry"><span>4. DefaultListableBeanFactory extends AbstractAutowireCapableBeanFactory,AbstractBeanFactory,FactoryBeanRegistrySupport,DefaultSingletonBeanRegistry,SimpleAliasRegistry</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>implements ConfigurableListableBeanFactory,ListableBeanFactory, AutowireCapableBeanFactory, ConfigurableBeanFactory,BeanFactory,HierarchicalBeanFactory, SingletonBeanRegistry,AliasRegistry

public class DefaultListableBeanFactory extends AbstractAutowireCapableBeanFactory implements ConfigurableListableBeanFactory, BeanDefinitionRegistry, Serializable {
			private final Map&lt;String, BeanDefinition&gt; beanDefinitionMap = new ConcurrentHashMap&lt;&gt;(256);
			private volatile List&lt;String&gt; beanDefinitionNames = new ArrayList&lt;&gt;(256);
			private AutowireCandidateResolver autowireCandidateResolver = new SimpleAutowireCandidateResolver();
			private Comparator&lt;Object&gt; dependencyComparator;
			private final Map&lt;String, String&gt; aliasMap = new ConcurrentHashMap&lt;&gt;(16);
			private final Set&lt;String&gt; alreadyCreated = Collections.newSetFromMap(new ConcurrentHashMap&lt;&gt;(256));
			private volatile Set&lt;String&gt; manualSingletonNames = new LinkedHashSet&lt;&gt;(16);
			/** Cached array of bean definition names in case of frozen configuration */
			private volatile String[] frozenBeanDefinitionNames;

			DefaultListableBeanFactory{}
			//父类DefaultSingletonBeanRegistry
			/** Cache of singleton objects: bean name --&gt; bean instance */
			private final Map&lt;String, Object&gt; singletonObjects = new ConcurrentHashMap&lt;&gt;(256);

			/** Cache of singleton factories: bean name --&gt; ObjectFactory */
			private final Map&lt;String, ObjectFactory&lt;?&gt;&gt; singletonFactories = new HashMap&lt;&gt;(16);

			/** Cache of early singleton objects: bean name --&gt; bean instance */
			private final Map&lt;String, Object&gt; earlySingletonObjects = new HashMap&lt;&gt;(16);
			//父类AbstractBeanFactory
			@Nullable
			private ClassLoader beanClassLoader = ClassUtils.getDefaultClassLoader();
		}

		protected boolean hasBeanCreationStarted() {
			return !this.alreadyCreated.isEmpty();
		}

		public void registerBeanDefinition(String beanName, BeanDefinition beanDefinition) throws BeanDefinitionStoreException {
			if (beanDefinition instanceof AbstractBeanDefinition) {
				try {
					((AbstractBeanDefinition) beanDefinition).validate();
				}
				catch (BeanDefinitionValidationException ex) {
					throw new BeanDefinitionStoreException(beanDefinition.getResourceDescription(), beanName,
							&quot;Validation of bean definition failed&quot;, ex);
				}
			}

			BeanDefinition existingDefinition = this.beanDefinitionMap.get(beanName);
			if (existingDefinition != null) {
				this.beanDefinitionMap.put(beanName, beanDefinition);
			}
			else {
				if (hasBeanCreationStarted()) {
					// Cannot modify startup-time collection elements anymore (for stable iteration)
					synchronized (this.beanDefinitionMap) {
						this.beanDefinitionMap.put(beanName, beanDefinition);
						List&lt;String&gt; updatedDefinitions = new ArrayList&lt;&gt;(this.beanDefinitionNames.size() + 1);
						updatedDefinitions.addAll(this.beanDefinitionNames);
						updatedDefinitions.add(beanName);
						this.beanDefinitionNames = updatedDefinitions;
						if (this.manualSingletonNames.contains(beanName)) {
							Set&lt;String&gt; updatedSingletons = new LinkedHashSet&lt;&gt;(this.manualSingletonNames);
							updatedSingletons.remove(beanName);
							this.manualSingletonNames = updatedSingletons;
						}
					}
				}
				else {
					this.beanDefinitionMap.put(beanName, beanDefinition);
					this.beanDefinitionNames.add(beanName);
					this.manualSingletonNames.remove(beanName);
				}
				this.frozenBeanDefinitionNames = null;
			}

			if (existingDefinition != null || containsSingleton(beanName)) {
				resetBeanDefinition(beanName);
			}
			else if (isConfigurationFrozen()) {
				clearByTypeCache();
			}
		}
		public void registerAlias(String name, String alias) {
			synchronized (this.aliasMap) {
				if (alias.equals(name)) {
					this.aliasMap.remove(alias);
				}
				else {
					String registeredName = this.aliasMap.get(alias);
					if (registeredName != null) {
						if (registeredName.equals(name)) {
							return;
						}
						if (!allowAliasOverriding()) {
							throw new IllegalStateException(&quot;Cannot define alias &#39;&quot; + alias + &quot;&#39; for name &#39;&quot; +
									name + &quot;&#39;: It is already registered for name &#39;&quot; + registeredName + &quot;&#39;.&quot;);
						}
					}
					checkForAliasCircle(name, alias);
					this.aliasMap.put(alias, name);
				}
			}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_5-annotatedbeandefinitionreader" tabindex="-1"><a class="header-anchor" href="#_5-annotatedbeandefinitionreader"><span>5. AnnotatedBeanDefinitionReader</span></a></h1>`,14),u=t("br",null,null,-1),v=t("br",null,null,-1),m=t("br",null,null,-1),b=t("br",null,null,-1),p=t("br",null,null,-1),Q=t("br",null,null,-1),T=t("br",null,null,-1),g=t("br",null,null,-1),f=t("br",null,null,-1),h=t("br",null,null,-1),A=t("br",null,null,-1),y=t("br",null,null,-1),C={href:"//xn--org-zr0f.springframework.context.annotation.internalConfigurationAnnotationProcessor//%E6%B3%A8%E8%A7%A3%E5%90%8E%E7%BD%AE%E5%A4%84%E7%90%86%E5%99%A8",target:"_blank",rel:"noopener noreferrer"},D=t("br",null,null,-1),B={href:"//org.springframework.context.annotation.internalAutowiredAnnotationProcessor",target:"_blank",rel:"noopener noreferrer"},S=t("br",null,null,-1),N={href:"//org.springframework.context.annotation.internalRequiredAnnotationProcessor",target:"_blank",rel:"noopener noreferrer"},R=t("br",null,null,-1),x={href:"//org.springframework.context.annotation.internalCommonAnnotationProcessor",target:"_blank",rel:"noopener noreferrer"},L=t("br",null,null,-1),M={href:"//org.springframework.context.event.internalEventListenerProcessor",target:"_blank",rel:"noopener noreferrer"},P=t("br",null,null,-1),E={href:"//org.springframework.context.event.internalEventListenerFactory",target:"_blank",rel:"noopener noreferrer"},w=t("br",null,null,-1),_=t("br",null,null,-1),H=t("br",null,null,-1),O=t("br",null,null,-1),F=t("br",null,null,-1),q=t("br",null,null,-1),I=t("br",null,null,-1),Z=t("br",null,null,-1),j=a(`<pre><code>public AnnotatedBeanDefinitionReader(BeanDefinitionRegistry registry, Environment environment) {
	Assert.notNull(registry, &quot;BeanDefinitionRegistry must not be null&quot;);
	Assert.notNull(environment, &quot;Environment must not be null&quot;);
	this.registry = registry;
	this.conditionEvaluator = new ConditionEvaluator(registry, environment, null);
	AnnotationConfigUtils.registerAnnotationConfigProcessors(this.registry);//将AnnotationConfigProcessors封装成RootBeanDefinition放入BeanFactory
}

//判断registry是否实现了ConfigurableEnvironment接口，没有实现环境的接口的话返回默认实现的环境StandardEnvironment
private static Environment getOrCreateEnvironment(BeanDefinitionRegistry registry) {
	Assert.notNull(registry, &quot;BeanDefinitionRegistry must not be null&quot;);
	if (registry instanceof EnvironmentCapable) {
		//由于AnnotationConfigApplicationContext实现了EnvironmentCapable从这里返回
		//默认使用StandardEnvironment
		return ((EnvironmentCapable) registry).getEnvironment();
	}
	return new StandardEnvironment();
}
</code></pre><p>}</p><h1 id="_6-conditionevaluator" tabindex="-1"><a class="header-anchor" href="#_6-conditionevaluator"><span>6. ConditionEvaluator</span></a></h1><p>class ConditionEvaluator{<br> private final ConditionContextImpl context;<br> public ConditionEvaluator(@Nullable BeanDefinitionRegistry registry,@Nullable Environment environment, @Nullable ResourceLoader resourceLoader) {<br> this.context = new ConditionContextImpl(registry, environment, resourceLoader);//resourceLoader=null<br> }<br> private static class ConditionContextImpl implements ConditionContext {<br> private final BeanDefinitionRegistry registry;<br> private final ConfigurableListableBeanFactory beanFactory;<br> private final Environment environment;<br> private final ResourceLoader resourceLoader;<br> private final ClassLoader classLoader;<br> public ConditionContextImpl(@Nullable BeanDefinitionRegistry registry,@Nullable Environment environment, @Nullable ResourceLoader resourceLoader) {<br> this.registry = registry;<br> this.beanFactory = deduceBeanFactory(registry);<br> this.environment = (environment != null ? environment : deduceEnvironment(registry));<br> this.resourceLoader = (resourceLoader != null ? resourceLoader : deduceResourceLoader(registry));<br> this.classLoader = deduceClassLoader(resourceLoader, this.beanFactory);<br> }<br> }<br> //取出ConfigurableListableBeanFactory接口或ConfigurableApplicationContext接口的BeanFactory，否则为null<br> private ConfigurableListableBeanFactory deduceBeanFactory(@Nullable BeanDefinitionRegistry source) {<br> if (source instanceof ConfigurableListableBeanFactory) {<br> return (ConfigurableListableBeanFactory) source;<br> }<br> if (source instanceof ConfigurableApplicationContext) {<br> return (((ConfigurableApplicationContext) source).getBeanFactory());由于AnnotationConfigApplicationContext实现了ConfigurableApplicationContext从这里返回<br> }<br> return null;<br> }<br> //取出EnvironmentCapable接口的environment，否则使用StandardEnvironment<br> private Environment deduceEnvironment(@Nullable BeanDefinitionRegistry source) {<br> if (source instanceof EnvironmentCapable) {<br> return ((EnvironmentCapable) source).getEnvironment();由于AnnotationConfigApplicationContext实现了EnvironmentCapable从这里返回<br> }<br> return new StandardEnvironment();<br> }<br> //取出ResourceLoader接口的资源配置类，否则使用DefaultResourceLoader<br> private ResourceLoader deduceResourceLoader(@Nullable BeanDefinitionRegistry source) {<br> if (source instanceof ResourceLoader) {<br> return (ResourceLoader) source;//由于AnnotationConfigApplicationContext实现了ResourceLoader从这里返回<br> }<br> return new DefaultResourceLoader();<br> }</p><pre><code>//取出BeanFactory的classLoader，否则使用DefaultClassLoader
private ClassLoader deduceClassLoader(@Nullable ResourceLoader resourceLoader,@Nullable ConfigurableListableBeanFactory beanFactory) {
	if (resourceLoader != null) {
		ClassLoader classLoader = resourceLoader.getClassLoader();
		if (classLoader != null) {
			return classLoader;
		}
	}
	if (beanFactory != null) {
		return beanFactory.getBeanClassLoader();//resourceLoader为null从这里返回
	}
	return ClassUtils.getDefaultClassLoader();
}
public boolean shouldSkip(AnnotatedTypeMetadata metadata) {
	return shouldSkip(metadata, null);
}
public boolean shouldSkip(@Nullable AnnotatedTypeMetadata metadata, @Nullable ConfigurationPhase phase) {
	if (metadata == null || !metadata.isAnnotated(Conditional.class.getName())) {
		return false;
	}

	if (phase == null) {
		if (metadata instanceof AnnotationMetadata &amp;&amp;
				ConfigurationClassUtils.isConfigurationCandidate((AnnotationMetadata) metadata)) {
			return shouldSkip(metadata, ConfigurationPhase.PARSE_CONFIGURATION);
		}
		return shouldSkip(metadata, ConfigurationPhase.REGISTER_BEAN);
	}

	List&lt;Condition&gt; conditions = new ArrayList&lt;&gt;();
	for (String[] conditionClasses : getConditionClasses(metadata)) {
		for (String conditionClass : conditionClasses) {
			Condition condition = getCondition(conditionClass, this.context.getClassLoader());
			conditions.add(condition);
		}
	}

	AnnotationAwareOrderComparator.sort(conditions);

	for (Condition condition : conditions) {
		ConfigurationPhase requiredPhase = null;
		if (condition instanceof ConfigurationCondition) {
			requiredPhase = ((ConfigurationCondition) condition).getConfigurationPhase();
		}
		if ((requiredPhase == null || requiredPhase == phase) &amp;&amp; !condition.matches(this.context, metadata)) {
			return true;
		}
	}

	return false;
}
</code></pre><p>}</p><h1 id="_7-annotationconfigutils" tabindex="-1"><a class="header-anchor" href="#_7-annotationconfigutils"><span>7. AnnotationConfigUtils</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class AnnotationConfigUtils{
	public static void registerAnnotationConfigProcessors(BeanDefinitionRegistry registry) {
		registerAnnotationConfigProcessors(registry, null);
	}
	public static Set&lt;BeanDefinitionHolder&gt; registerAnnotationConfigProcessors(BeanDefinitionRegistry registry, @Nullable Object source) {
		//取出DefaultListableBeanFactory
		DefaultListableBeanFactory beanFactory = unwrapDefaultListableBeanFactory(registry);
		//设置类的加载顺序和自动加载解决者
		if (beanFactory != null) {
			if (!(beanFactory.getDependencyComparator() instanceof AnnotationAwareOrderComparator)) {
				beanFactory.setDependencyComparator(AnnotationAwareOrderComparator.INSTANCE);//为null自动写入
			}
			if (!(beanFactory.getAutowireCandidateResolver() instanceof ContextAnnotationAutowireCandidateResolver)) {
				beanFactory.setAutowireCandidateResolver(new ContextAnnotationAutowireCandidateResolver());//
			}
		}

		Set&lt;BeanDefinitionHolder&gt; beanDefs = new LinkedHashSet&lt;&gt;(8);
		//添加一堆BeanPostProcessors（RootBeanDefinition）
		if (!registry.containsBeanDefinition(CONFIGURATION_ANNOTATION_PROCESSOR_BEAN_NAME)) {
			RootBeanDefinition def = new RootBeanDefinition(ConfigurationClassPostProcessor.class);
			def.setSource(source);
			beanDefs.add(registerPostProcessor(registry, def, CONFIGURATION_ANNOTATION_PROCESSOR_BEAN_NAME));
		}

		if (!registry.containsBeanDefinition(AUTOWIRED_ANNOTATION_PROCESSOR_BEAN_NAME)) {
			RootBeanDefinition def = new RootBeanDefinition(AutowiredAnnotationBeanPostProcessor.class);
			def.setSource(source);
			beanDefs.add(registerPostProcessor(registry, def, AUTOWIRED_ANNOTATION_PROCESSOR_BEAN_NAME));
		}

		if (!registry.containsBeanDefinition(REQUIRED_ANNOTATION_PROCESSOR_BEAN_NAME)) {
			RootBeanDefinition def = new RootBeanDefinition(RequiredAnnotationBeanPostProcessor.class);
			def.setSource(source);
			beanDefs.add(registerPostProcessor(registry, def, REQUIRED_ANNOTATION_PROCESSOR_BEAN_NAME));
		}

		// Check for JSR-250 support, and if present add the CommonAnnotationBeanPostProcessor.
		if (jsr250Present &amp;&amp; !registry.containsBeanDefinition(COMMON_ANNOTATION_PROCESSOR_BEAN_NAME)) {
			RootBeanDefinition def = new RootBeanDefinition(CommonAnnotationBeanPostProcessor.class);
			def.setSource(source);
			beanDefs.add(registerPostProcessor(registry, def, COMMON_ANNOTATION_PROCESSOR_BEAN_NAME));
		}

		// Check for JPA support, and if present add the PersistenceAnnotationBeanPostProcessor.
		if (jpaPresent &amp;&amp; !registry.containsBeanDefinition(PERSISTENCE_ANNOTATION_PROCESSOR_BEAN_NAME)) {
			RootBeanDefinition def = new RootBeanDefinition();
			try {
				def.setBeanClass(ClassUtils.forName(PERSISTENCE_ANNOTATION_PROCESSOR_CLASS_NAME,
						AnnotationConfigUtils.class.getClassLoader()));
			}
			catch (ClassNotFoundException ex) {
				throw new IllegalStateException(
						&quot;Cannot load optional framework class: &quot; + PERSISTENCE_ANNOTATION_PROCESSOR_CLASS_NAME, ex);
			}
			def.setSource(source);
			beanDefs.add(registerPostProcessor(registry, def, PERSISTENCE_ANNOTATION_PROCESSOR_BEAN_NAME));
		}

		if (!registry.containsBeanDefinition(EVENT_LISTENER_PROCESSOR_BEAN_NAME)) {
			RootBeanDefinition def = new RootBeanDefinition(EventListenerMethodProcessor.class);
			def.setSource(source);
			beanDefs.add(registerPostProcessor(registry, def, EVENT_LISTENER_PROCESSOR_BEAN_NAME));
		}

		if (!registry.containsBeanDefinition(EVENT_LISTENER_FACTORY_BEAN_NAME)) {
			RootBeanDefinition def = new RootBeanDefinition(DefaultEventListenerFactory.class);
			def.setSource(source);
			beanDefs.add(registerPostProcessor(registry, def, EVENT_LISTENER_FACTORY_BEAN_NAME));
		}

		return beanDefs;
	}

	private static DefaultListableBeanFactory unwrapDefaultListableBeanFactory(BeanDefinitionRegistry registry) {
		if (registry instanceof DefaultListableBeanFactory) {
			return (DefaultListableBeanFactory) registry;
		}
		else if (registry instanceof GenericApplicationContext) {
			return ((GenericApplicationContext) registry).getDefaultListableBeanFactory();//由于AnnotationConfigApplicationContext实现了GenericApplicationContext
		}
		else {
			return null;
		}
	}

	//注册基础的registry并返回BeanDefinitionHolder
	private static BeanDefinitionHolder registerPostProcessor(BeanDefinitionRegistry registry, RootBeanDefinition definition, String beanName) {
		definition.setRole(BeanDefinition.ROLE_INFRASTRUCTURE);
		registry.registerBeanDefinition(beanName, definition);
		return new BeanDefinitionHolder(definition, beanName);
	}
	
	//将注解里面的method封装为AnnotationAttributes对象然后key为method的Name，Value为ValueHolder
	static AnnotationAttributes attributesFor(AnnotatedTypeMetadata metadata, Class&lt;?&gt; annotationClass) {
		return attributesFor(metadata, annotationClass.getName());
	}
	static AnnotationAttributes attributesFor(AnnotatedTypeMetadata metadata, String annotationClassName) {
		return AnnotationAttributes.fromMap(metadata.getAnnotationAttributes(annotationClassName, false));
	}

	public static void processCommonDefinitionAnnotations(AnnotatedBeanDefinition abd) {
		processCommonDefinitionAnnotations(abd, abd.getMetadata());
	}

	static void processCommonDefinitionAnnotations(AnnotatedBeanDefinition abd, AnnotatedTypeMetadata metadata) {
		AnnotationAttributes lazy = attributesFor(metadata, Lazy.class);
		if (lazy != null) {
			abd.setLazyInit(lazy.getBoolean(&quot;value&quot;));
		}
		else if (abd.getMetadata() != metadata) {
			lazy = attributesFor(abd.getMetadata(), Lazy.class);
			if (lazy != null) {
				abd.setLazyInit(lazy.getBoolean(&quot;value&quot;));
			}
		}

		if (metadata.isAnnotated(Primary.class.getName())) {
			abd.setPrimary(true);
		}
		AnnotationAttributes dependsOn = attributesFor(metadata, DependsOn.class);
		if (dependsOn != null) {
			abd.setDependsOn(dependsOn.getStringArray(&quot;value&quot;));
		}

		if (abd instanceof AbstractBeanDefinition) {
			AbstractBeanDefinition absBd = (AbstractBeanDefinition) abd;
			AnnotationAttributes role = attributesFor(metadata, Role.class);
			if (role != null) {
				absBd.setRole(role.getNumber(&quot;value&quot;).intValue());
			}
			AnnotationAttributes description = attributesFor(metadata, Description.class);
			if (description != null) {
				absBd.setDescription(description.getString(&quot;value&quot;));
			}
		}
	}

	static BeanDefinitionHolder applyScopedProxyMode(ScopeMetadata metadata, BeanDefinitionHolder definition, BeanDefinitionRegistry registry) {

		ScopedProxyMode scopedProxyMode = metadata.getScopedProxyMode();
		if (scopedProxyMode.equals(ScopedProxyMode.NO)) {
			return definition;
		}
		boolean proxyTargetClass = scopedProxyMode.equals(ScopedProxyMode.TARGET_CLASS);
		return ScopedProxyCreator.createScopedProxy(definition, registry, proxyTargetClass);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_8-scopedproxycreator" tabindex="-1"><a class="header-anchor" href="#_8-scopedproxycreator"><span>8. ScopedProxyCreator</span></a></h1><p>class ScopedProxyCreator {</p><pre><code>public static BeanDefinitionHolder createScopedProxy(
		BeanDefinitionHolder definitionHolder, BeanDefinitionRegistry registry, boolean proxyTargetClass) {

	return ScopedProxyUtils.createScopedProxy(definitionHolder, registry, proxyTargetClass);
}

public static String getTargetBeanName(String originalBeanName) {
	return ScopedProxyUtils.getTargetBeanName(originalBeanName);
}
</code></pre><p>}</p><h1 id="_9-scopedproxyutils" tabindex="-1"><a class="header-anchor" href="#_9-scopedproxyutils"><span>9. ScopedProxyUtils</span></a></h1><p>public abstract class ScopedProxyUtils {<br> public static BeanDefinitionHolder createScopedProxy(BeanDefinitionHolder definition,<br> BeanDefinitionRegistry registry, boolean proxyTargetClass) {</p><pre><code>	String originalBeanName = definition.getBeanName();
	BeanDefinition targetDefinition = definition.getBeanDefinition();
	String targetBeanName = getTargetBeanName(originalBeanName);

	// Create a scoped proxy definition for the original bean name,
	// &quot;hiding&quot; the target bean in an internal target definition.
	RootBeanDefinition proxyDefinition = new RootBeanDefinition(ScopedProxyFactoryBean.class);
	proxyDefinition.setDecoratedDefinition(new BeanDefinitionHolder(targetDefinition, targetBeanName));
	proxyDefinition.setOriginatingBeanDefinition(targetDefinition);
	proxyDefinition.setSource(definition.getSource());
	proxyDefinition.setRole(targetDefinition.getRole());

	proxyDefinition.getPropertyValues().add(&quot;targetBeanName&quot;, targetBeanName);
	if (proxyTargetClass) {
		targetDefinition.setAttribute(AutoProxyUtils.PRESERVE_TARGET_CLASS_ATTRIBUTE, Boolean.TRUE);
		// ScopedProxyFactoryBean&#39;s &quot;proxyTargetClass&quot; default is TRUE, so we don&#39;t need to set it explicitly here.
	}
	else {
		proxyDefinition.getPropertyValues().add(&quot;proxyTargetClass&quot;, Boolean.FALSE);
	}

	// Copy autowire settings from original bean definition.
	proxyDefinition.setAutowireCandidate(targetDefinition.isAutowireCandidate());
	proxyDefinition.setPrimary(targetDefinition.isPrimary());
	if (targetDefinition instanceof AbstractBeanDefinition) {
		proxyDefinition.copyQualifiersFrom((AbstractBeanDefinition) targetDefinition);
	}

	// The target bean should be ignored in favor of the scoped proxy.
	targetDefinition.setAutowireCandidate(false);
	targetDefinition.setPrimary(false);

	// Register the target bean as separate bean in the factory.
	registry.registerBeanDefinition(targetBeanName, targetDefinition);

	// Return the scoped proxy definition as primary bean definition
	// (potentially an inner bean).
	return new BeanDefinitionHolder(proxyDefinition, originalBeanName, definition.getAliases());
}
</code></pre><p>}</p><h1 id="_10-classpathbeandefinitionscanner-extends-classpathscanningcandidatecomponentprovider-implements-environmentcapable-resourceloaderaware-aware" tabindex="-1"><a class="header-anchor" href="#_10-classpathbeandefinitionscanner-extends-classpathscanningcandidatecomponentprovider-implements-environmentcapable-resourceloaderaware-aware"><span>10. ClassPathBeanDefinitionScanner extends ClassPathScanningCandidateComponentProvider implements EnvironmentCapable, ResourceLoaderAware，Aware</span></a></h1><p>public class ClassPathBeanDefinitionScanner extends ClassPathScanningCandidateComponentProvider{</p><pre><code>private final BeanDefinitionRegistry registry;
private final List&lt;TypeFilter&gt; includeFilters = new LinkedList&lt;&gt;();
//初始化对象当前属性
//1. useDefaultFilters = true 同时注册给当前includeFilters注册两个 javax.annotation.ManagedBean 和javax.inject.Named 两个 AnnotationTypeFilter
//2. environment = getOrCreateEnvironment判断registry是否实现了ConfigurableEnvironment接口，没有实现环境的接口的话返回默认实现的环境StandardEnvironment
//3. ResourceLoader =   registry是否实现ResourceLoader，否则为null
//4. registry = 传过来的registry
//5.this.includeFilter注册两个filter javax.annotation.ManagedBean和javax.inject.Named
public ClassPathBeanDefinitionScanner(BeanDefinitionRegistry registry) {
	this(registry, true);
}
public ClassPathBeanDefinitionScanner(BeanDefinitionRegistry registry, boolean useDefaultFilters) {
	this(registry, useDefaultFilters, getOrCreateEnvironment(registry));
}
public ClassPathBeanDefinitionScanner(BeanDefinitionRegistry registry, boolean useDefaultFilters,Environment environment) {
	this(registry, useDefaultFilters, environment,(registry instanceof ResourceLoader ? (ResourceLoader) registry : null));
}
public ClassPathBeanDefinitionScanner(BeanDefinitionRegistry registry, boolean useDefaultFilters,Environment environment, @Nullable ResourceLoader resourceLoader) {
	this.registry = registry;
	if (useDefaultFilters) {
		registerDefaultFilters();
	}
	setEnvironment(environment);
	setResourceLoader(resourceLoader);
}
protected void registerDefaultFilters() {
	this.includeFilters.add(new AnnotationTypeFilter(Component.class));
	ClassLoader cl = ClassPathScanningCandidateComponentProvider.class.getClassLoader();
	try {
		this.includeFilters.add(new AnnotationTypeFilter(((Class&lt;? extends Annotation&gt;) ClassUtils.forName(&quot;javax.annotation.ManagedBean&quot;, cl)), false));
	}
	catch (ClassNotFoundException ex) {}
	try {
		this.includeFilters.add(new AnnotationTypeFilter(((Class&lt;? extends Annotation&gt;) ClassUtils.forName(&quot;javax.inject.Named&quot;, cl)), false));
	}
	catch (ClassNotFoundException ex) {}
}
private static Environment getOrCreateEnvironment(BeanDefinitionRegistry registry) {
	Assert.notNull(registry, &quot;BeanDefinitionRegistry must not be null&quot;);
	if (registry instanceof EnvironmentCapable) {
		return ((EnvironmentCapable) registry).getEnvironment();
	}
	return new StandardEnvironment();
}
</code></pre><p>}</p><h1 id="_11-annotatedgenericbeandefinition-extends-genericbeandefinition-abstractbeandefinition-beanmetadataattributeaccessor-attributeaccessorsupport-implements-annotatedbeandefinition-beanmetadataelement-beandefinition-cloneable-attributeaccessor-beanmetadataelement-serializable" tabindex="-1"><a class="header-anchor" href="#_11-annotatedgenericbeandefinition-extends-genericbeandefinition-abstractbeandefinition-beanmetadataattributeaccessor-attributeaccessorsupport-implements-annotatedbeandefinition-beanmetadataelement-beandefinition-cloneable-attributeaccessor-beanmetadataelement-serializable"><span>11. AnnotatedGenericBeanDefinition extends GenericBeanDefinition,AbstractBeanDefinition,BeanMetadataAttributeAccessor,AttributeAccessorSupport implements AnnotatedBeanDefinition ,BeanMetadataElement,BeanDefinition, Cloneable,AttributeAccessor, BeanMetadataElement,Serializable</span></a></h1><p>public class AnnotatedGenericBeanDefinition extends GenericBeanDefinition implements AnnotatedBeanDefinition {<br> @Nullable<br> private volatile Object beanClass;<br> public AnnotatedGenericBeanDefinition(Class&lt;?&gt; beanClass) {<br> setBeanClass(beanClass);<br> this.metadata = new StandardAnnotationMetadata(beanClass, true);<br> }<br> }</p><h1 id="_12-standardannotationmetadata-extends-standardclassmetadata-implements-annotationmetadata-classmetadata-annotatedtypemetadata" tabindex="-1"><a class="header-anchor" href="#_12-standardannotationmetadata-extends-standardclassmetadata-implements-annotationmetadata-classmetadata-annotatedtypemetadata"><span>12. StandardAnnotationMetadata extends StandardClassMetadata implements AnnotationMetadata,ClassMetadata,AnnotatedTypeMetadata</span></a></h1><p>public class StandardAnnotationMetadata extends StandardClassMetadata implements AnnotationMetadata{<br> private final Annotation[] annotations;</p><pre><code>private final boolean nestedAnnotationsAsMap;
public StandardAnnotationMetadata(Class&lt;?&gt; introspectedClass, boolean nestedAnnotationsAsMap) {

	super(introspectedClass);
	this.annotations = introspectedClass.getAnnotations();
	this.nestedAnnotationsAsMap = nestedAnnotationsAsMap;
}
public boolean isAnnotated(String annotationName) {
	return (this.annotations.length &gt; 0 &amp;&amp;
			AnnotatedElementUtils.isAnnotated(getIntrospectedClass(), annotationName));
}
//父类
private final Class&lt;?&gt; introspectedClass;
public StandardClassMetadata(Class&lt;?&gt; introspectedClass) {
	Assert.notNull(introspectedClass, &quot;Class must not be null&quot;);
	this.introspectedClass = introspectedClass;
}

public Map&lt;String, Object&gt; getAnnotationAttributes(String annotationName, boolean classValuesAsString) {
	return (this.annotations.length &gt; 0 ? AnnotatedElementUtils.getMergedAnnotationAttributes(
			getIntrospectedClass(), annotationName, classValuesAsString, this.nestedAnnotationsAsMap) : null);
}
</code></pre><p>}</p><h1 id="_13-annotatedelementutils" tabindex="-1"><a class="header-anchor" href="#_13-annotatedelementutils"><span>13. AnnotatedElementUtils</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class AnnotatedElementUtils {
	public static boolean isAnnotated(AnnotatedElement element, String annotationName) {
		return Boolean.TRUE.equals(searchWithGetSemantics(element, null, annotationName, alwaysTrueAnnotationProcessor));
	}
	private interface Processor&lt;T&gt; {

		/**
		 * Process the supplied annotation.
		 * &lt;p&gt;The supplied annotation will be an actual target annotation
		 * that has been found by the search algorithm, unless this processor
		 * is configured to {@linkplain #alwaysProcesses always process}
		 * annotations in which case it may be some other annotation within an
		 * annotation hierarchy. In the latter case, the {@code metaDepth}
		 * will have a value greater than {@code 0}. In any case, it is
		 * up to concrete implementations of this method to decide what to
		 * do with the supplied annotation.
		 * &lt;p&gt;The {@code metaDepth} parameter represents the depth of the
		 * annotation relative to the first annotated element in the
		 * annotation hierarchy. For example, an annotation that is
		 * &lt;em&gt;present&lt;/em&gt; on a non-annotation element will have a depth
		 * of 0; a meta-annotation will have a depth of 1; and a
		 * meta-meta-annotation will have a depth of 2; etc.
		 * @param annotatedElement the element that is annotated with the
		 * supplied annotation, used for contextual logging; may be
		 * {@code null} if unknown
		 * @param annotation the annotation to process
		 * @param metaDepth the meta-depth of the annotation
		 * @return the result of the processing, or {@code null} to continue
		 * searching for additional annotations
		 */
		@Nullable
		T process(@Nullable AnnotatedElement annotatedElement, Annotation annotation, int metaDepth);

		/**
		 * Post-process the result returned by the {@link #process} method.
		 * &lt;p&gt;The {@code annotation} supplied to this method is an annotation
		 * that is present in the annotation hierarchy, between the initial
		 * {@link AnnotatedElement} and an invocation of {@link #process}
		 * that returned a non-null value.
		 * @param annotatedElement the element that is annotated with the
		 * supplied annotation, used for contextual logging; may be
		 * {@code null} if unknown
		 * @param annotation the annotation to post-process
		 * @param result the result to post-process
		 */
		void postProcess(@Nullable AnnotatedElement annotatedElement, Annotation annotation, T result);

		/**
		 * Determine if this processor always processes annotations regardless of
		 * whether or not the target annotation has been found.
		 * @return {@code true} if this processor always processes annotations
		 * @since 4.3
		 */
		boolean alwaysProcesses();

		/**
		 * Determine if this processor aggregates the results returned by {@link #process}.
		 * &lt;p&gt;If this method returns {@code true}, then {@link #getAggregatedResults()}
		 * must return a non-null value.
		 * @return {@code true} if this processor supports aggregated results
		 * @since 4.3
		 * @see #getAggregatedResults
		 */
		boolean aggregates();

		/**
		 * Get the list of results aggregated by this processor.
		 * &lt;p&gt;NOTE: the processor does &lt;strong&gt;not&lt;/strong&gt; aggregate the results
		 * itself. Rather, the search algorithm that uses this processor is
		 * responsible for asking this processor if it {@link #aggregates} results
		 * and then adding the post-processed results to the list returned by this
		 * method.
		 * @return the list of results aggregated by this processor (never {@code null})
		 * @since 4.3
		 * @see #aggregates
		 */
		List&lt;T&gt; getAggregatedResults();
	}
	static class AlwaysTrueBooleanAnnotationProcessor extends SimpleAnnotationProcessor&lt;Boolean&gt; {

		@Override
		public final Boolean process(@Nullable AnnotatedElement annotatedElement, Annotation annotation, int metaDepth) {
			return Boolean.TRUE;
		}
	}

	private static class MergedAnnotationAttributesProcessor implements Processor&lt;AnnotationAttributes&gt; {

		private final boolean classValuesAsString;

		private final boolean nestedAnnotationsAsMap;

		private final boolean aggregates;

		private final List&lt;AnnotationAttributes&gt; aggregatedResults;

		MergedAnnotationAttributesProcessor() {
			this(false, false, false);
		}

		MergedAnnotationAttributesProcessor(boolean classValuesAsString, boolean nestedAnnotationsAsMap) {
			this(classValuesAsString, nestedAnnotationsAsMap, false);
		}

		MergedAnnotationAttributesProcessor(boolean classValuesAsString, boolean nestedAnnotationsAsMap,
				boolean aggregates) {

			this.classValuesAsString = classValuesAsString;
			this.nestedAnnotationsAsMap = nestedAnnotationsAsMap;
			this.aggregates = aggregates;
			this.aggregatedResults = (aggregates ? new ArrayList&lt;&gt;() : Collections.emptyList());
		}

		@Override
		public boolean alwaysProcesses() {
			return false;
		}

		@Override
		public boolean aggregates() {
			return this.aggregates;
		}

		@Override
		public List&lt;AnnotationAttributes&gt; getAggregatedResults() {
			return this.aggregatedResults;
		}

		@Override
		@Nullable
		public AnnotationAttributes process(@Nullable AnnotatedElement annotatedElement, Annotation annotation, int metaDepth) {
			return AnnotationUtils.retrieveAnnotationAttributes(annotatedElement, annotation,
					this.classValuesAsString, this.nestedAnnotationsAsMap);
		}

		@Override
		public void postProcess(@Nullable AnnotatedElement element, Annotation annotation, AnnotationAttributes attributes) {
			annotation = AnnotationUtils.synthesizeAnnotation(annotation, element);
			Class&lt;? extends Annotation&gt; targetAnnotationType = attributes.annotationType();

			// Track which attribute values have already been replaced so that we can short
			// circuit the search algorithms.
			Set&lt;String&gt; valuesAlreadyReplaced = new HashSet&lt;&gt;();

			for (Method attributeMethod : AnnotationUtils.getAttributeMethods(annotation.annotationType())) {
				String attributeName = attributeMethod.getName();
				String attributeOverrideName = AnnotationUtils.getAttributeOverrideName(attributeMethod, targetAnnotationType);

				// Explicit annotation attribute override declared via @AliasFor
				if (attributeOverrideName != null) {
					if (valuesAlreadyReplaced.contains(attributeOverrideName)) {
						continue;
					}

					List&lt;String&gt; targetAttributeNames = new ArrayList&lt;&gt;();
					targetAttributeNames.add(attributeOverrideName);
					valuesAlreadyReplaced.add(attributeOverrideName);

					// Ensure all aliased attributes in the target annotation are overridden. (SPR-14069)
					List&lt;String&gt; aliases = AnnotationUtils.getAttributeAliasMap(targetAnnotationType).get(attributeOverrideName);
					if (aliases != null) {
						for (String alias : aliases) {
							if (!valuesAlreadyReplaced.contains(alias)) {
								targetAttributeNames.add(alias);
								valuesAlreadyReplaced.add(alias);
							}
						}
					}

					overrideAttributes(element, annotation, attributes, attributeName, targetAttributeNames);
				}
				// Implicit annotation attribute override based on convention
				else if (!AnnotationUtils.VALUE.equals(attributeName) &amp;&amp; attributes.containsKey(attributeName)) {
					overrideAttribute(element, annotation, attributes, attributeName, attributeName);
				}
			}
		}

		private void overrideAttributes(@Nullable AnnotatedElement element, Annotation annotation,
				AnnotationAttributes attributes, String sourceAttributeName, List&lt;String&gt; targetAttributeNames) {

			Object adaptedValue = getAdaptedValue(element, annotation, sourceAttributeName);

			for (String targetAttributeName : targetAttributeNames) {
				attributes.put(targetAttributeName, adaptedValue);
			}
		}

		private void overrideAttribute(@Nullable AnnotatedElement element, Annotation annotation,
				AnnotationAttributes attributes, String sourceAttributeName, String targetAttributeName) {

			attributes.put(targetAttributeName, getAdaptedValue(element, annotation, sourceAttributeName));
		}

		@Nullable
		private Object getAdaptedValue(
				@Nullable AnnotatedElement element, Annotation annotation, String sourceAttributeName) {

			Object value = AnnotationUtils.getValue(annotation, sourceAttributeName);
			return AnnotationUtils.adaptValue(element, value, this.classValuesAsString, this.nestedAnnotationsAsMap);
		}
	}

	private static &lt;T&gt; T searchWithGetSemantics(AnnotatedElement element,
			@Nullable Class&lt;? extends Annotation&gt; annotationType,
			@Nullable String annotationName, Processor&lt;T&gt; processor) {

		return searchWithGetSemantics(element, annotationType, annotationName, null, processor);
	}
	private static &lt;T&gt; T searchWithGetSemantics(AnnotatedElement element,
			@Nullable Class&lt;? extends Annotation&gt; annotationType, @Nullable String annotationName,
			@Nullable Class&lt;? extends Annotation&gt; containerType, Processor&lt;T&gt; processor) {

		try {
			return searchWithGetSemantics(element, annotationType, annotationName, containerType, processor,
					new HashSet&lt;&gt;(), 0);
		}
		catch (Throwable ex) {
			AnnotationUtils.rethrowAnnotationConfigurationException(ex);
			throw new IllegalStateException(&quot;Failed to introspect annotations on &quot; + element, ex);
		}
	}
	// 在提供的注释列表中进行实际搜索。应该先用本地声明的注释调用该方法，然后再用继承的注释调用，从而允许本地注释优先于继承的注释。
	// ①记录已经访问的注解（用set防止重复）重复则不执行
	// ②调用searchWithGetSemanticsInAnnotations返回结果
	// ③没有结果就找当前类的父类的所有注解，调用searchWithGetSemanticsInAnnotations返回结果，再没有结果就返回null
	//总结：调用searchWithGetSemanticsInAnnotations解析当前注解返回结果（true或者是AnnotationAttributes暂时发现），结果为null，则继续找父注解，直到无结果返回
	private static &lt;T&gt; T searchWithGetSemantics(AnnotatedElement element,
			@Nullable Class&lt;? extends Annotation&gt; annotationType, @Nullable String annotationName,
			@Nullable Class&lt;? extends Annotation&gt; containerType, Processor&lt;T&gt; processor,
			Set&lt;AnnotatedElement&gt; visited, int metaDepth) {

		if (visited.add(element)) {
			try {
				// Start searching within locally declared annotations
				List&lt;Annotation&gt; declaredAnnotations = Arrays.asList(element.getDeclaredAnnotations());
				T result = searchWithGetSemanticsInAnnotations(element, declaredAnnotations,
						annotationType, annotationName, containerType, processor, visited, metaDepth);
				if (result != null) {
					return result;
				}

				if (element instanceof Class) {  // otherwise getAnnotations doesn&#39;t return anything new
					Class&lt;?&gt; superclass = ((Class) element).getSuperclass();
					if (superclass != null &amp;&amp; superclass != Object.class) {
						List&lt;Annotation&gt; inheritedAnnotations = new LinkedList&lt;&gt;();
						for (Annotation annotation : element.getAnnotations()) {
							if (!declaredAnnotations.contains(annotation)) {
								inheritedAnnotations.add(annotation);
							}
						}
						// Continue searching within inherited annotations
						result = searchWithGetSemanticsInAnnotations(element, inheritedAnnotations,
								annotationType, annotationName, containerType, processor, visited, metaDepth);
						if (result != null) {
							return result;
						}
					}
				}
			}
			catch (Throwable ex) {
				AnnotationUtils.handleIntrospectionFailure(element, ex);
			}
		}

		return null;
	}
	@Nullable
	// 在提供的注释列表中进行实际搜索。应该先用本地声明的注释调用该方法，然后再用继承的注释调用，从而允许本地注释优先于继承的注释。
	// ①遍历提供的注解，如果是spring的注解就调用processor接口的实现返回结果并记录总结果
	// ②再次遍历提供的注解，如果是spring的注解，那么调用searchWithGetSemantics解析结果并记录总结果
		//searchWithGetSemantics实现
		// ①记录已经访问的注解（用set防止重复）重复则不执行
		// ②调用searchWithGetSemanticsInAnnotations返回结果
		// ③没有结果就找当前类的父类的所有注解，调用searchWithGetSemanticsInAnnotations返回结果，再没有结果就返回null
		//总结：调用searchWithGetSemanticsInAnnotations解析当前注解返回结果，结果为null，则继续找父注解，直到无结果返回
	private static &lt;T&gt; T searchWithGetSemanticsInAnnotations(@Nullable AnnotatedElement element,
			List&lt;Annotation&gt; annotations, @Nullable Class&lt;? extends Annotation&gt; annotationType,
			@Nullable String annotationName, @Nullable Class&lt;? extends Annotation&gt; containerType,
			Processor&lt;T&gt; processor, Set&lt;AnnotatedElement&gt; visited, int metaDepth) {

		// Search in annotations
		for (Annotation annotation : annotations) {
			Class&lt;? extends Annotation&gt; currentAnnotationType = annotation.annotationType();
			if (!AnnotationUtils.isInJavaLangAnnotationPackage(currentAnnotationType)) {//判断是否是jdk本身的注解
				if (currentAnnotationType == annotationType ||
						currentAnnotationType.getName().equals(annotationName) ||
						processor.alwaysProcesses()) {
					T result = processor.process(element, annotation, metaDepth);
					if (result != null) {
						if (processor.aggregates() &amp;&amp; metaDepth == 0) {
							processor.getAggregatedResults().add(result);
						}
						else {
							return result;
						}
					}
				}
				// Repeatable annotations in container?
				else if (currentAnnotationType == containerType) {
					for (Annotation contained : getRawAnnotationsFromContainer(element, annotation)) {
						T result = processor.process(element, contained, metaDepth);
						if (result != null) {
							// No need to post-process since repeatable annotations within a
							// container cannot be composed annotations.
							//不需要进行后处理，因为容器内的可重复注释不能组成注释
							processor.getAggregatedResults().add(result);
						}
					}
				}
			}
		}

		// Recursively search in meta-annotations
		//递归搜索元注解
		for (Annotation annotation : annotations) {
			Class&lt;? extends Annotation&gt; currentAnnotationType = annotation.annotationType();
			if (hasSearchableMetaAnnotations(currentAnnotationType, annotationType, annotationName)) {//根据传入的三个类型判断是不是Spring本身的注解
				T result = searchWithGetSemantics(currentAnnotationType, annotationType,
						annotationName, containerType, processor, visited, metaDepth + 1);
				if (result != null) {
					processor.postProcess(element, annotation, result);
					if (processor.aggregates() &amp;&amp; metaDepth == 0) {
						processor.getAggregatedResults().add(result);
					}
					else {
						return result;
					}
				}
			}
		}

		return null;
	}
		@Nullable
	//获得合并的注解
	// MergedAnnotationAttributesProcessor
	//将注解里面所有的方法合并 成key为MethodName,value为holdler或者String最后//处理别名
	public static AnnotationAttributes getMergedAnnotationAttributes(AnnotatedElement element,
			String annotationName, boolean classValuesAsString, boolean nestedAnnotationsAsMap) {

		AnnotationAttributes attributes = searchWithGetSemantics(element, null, annotationName,
				new MergedAnnotationAttributesProcessor(classValuesAsString, nestedAnnotationsAsMap));
		AnnotationUtils.postProcessAnnotationAttributes(element, attributes, classValuesAsString, nestedAnnotationsAsMap);
		return attributes;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_14-annotationscopemetadataresolver-implements-scopemetadataresolver" tabindex="-1"><a class="header-anchor" href="#_14-annotationscopemetadataresolver-implements-scopemetadataresolver"><span>14. AnnotationScopeMetadataResolver implements ScopeMetadataResolver</span></a></h1><p>public class AnnotationScopeMetadataResolver implements ScopeMetadataResolver {<br> private final ScopedProxyMode defaultProxyMode;</p><pre><code>public AnnotationScopeMetadataResolver() {
	this.defaultProxyMode = ScopedProxyMode.NO;
}
//解析Scope的注解
public ScopeMetadata resolveScopeMetadata(BeanDefinition definition) {
	ScopeMetadata metadata = new ScopeMetadata();
	if (definition instanceof AnnotatedBeanDefinition) {
		AnnotatedBeanDefinition annDef = (AnnotatedBeanDefinition) definition;
		AnnotationAttributes attributes = AnnotationConfigUtils.attributesFor(
				annDef.getMetadata(), this.scopeAnnotationType);//获得Scope所有的方法及属性值
		if (attributes != null) {
			metadata.setScopeName(attributes.getString(&quot;value&quot;));
			ScopedProxyMode proxyMode = attributes.getEnum(&quot;proxyMode&quot;);
			if (proxyMode == ScopedProxyMode.DEFAULT) {
				proxyMode = this.defaultProxyMode;
			}
			metadata.setScopedProxyMode(proxyMode);
		}
	}
	return metadata;
}
</code></pre><p>}</p><h1 id="_15-annotationbeannamegenerator" tabindex="-1"><a class="header-anchor" href="#_15-annotationbeannamegenerator"><span>15. AnnotationBeanNameGenerator</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class AnnotationBeanNameGenerator implements BeanNameGenerator {
		@Override
	public String generateBeanName(BeanDefinition definition, BeanDefinitionRegistry registry) {
		if (definition instanceof AnnotatedBeanDefinition) {
			String beanName = determineBeanNameFromAnnotation((AnnotatedBeanDefinition) definition);
			if (StringUtils.hasText(beanName)) {
				// Explicit bean name found.
				return beanName;
			}
		}
		// Fallback: generate a unique default bean name.
		return buildDefaultBeanName(definition, registry);
	}
	@Nullable
	//从注解上决定Bean名字，从所有的属性里面读出value，如果没有则返回null
	protected String determineBeanNameFromAnnotation(AnnotatedBeanDefinition annotatedDef) {
		AnnotationMetadata amd = annotatedDef.getMetadata();
		Set&lt;String&gt; types = amd.getAnnotationTypes();
		String beanName = null;
		for (String type : types) {
			AnnotationAttributes attributes = AnnotationConfigUtils.attributesFor(amd, type);
			if (attributes != null &amp;&amp; isStereotypeWithNameValue(type, amd.getMetaAnnotationTypes(type), attributes)) {
				Object value = attributes.get(&quot;value&quot;);
				if (value instanceof String) {
					String strVal = (String) value;
					if (StringUtils.hasLength(strVal)) {
						if (beanName != null &amp;&amp; !strVal.equals(beanName)) {
							throw new IllegalStateException(&quot;Stereotype annotations suggest inconsistent &quot; +
									&quot;component names: &#39;&quot; + beanName + &quot;&#39; versus &#39;&quot; + strVal + &quot;&#39;&quot;);
						}
						beanName = strVal;
					}
				}
			}
		}
		return beanName;
	}

	protected String buildDefaultBeanName(BeanDefinition definition, BeanDefinitionRegistry registry) {
		return buildDefaultBeanName(definition);
	}

	/**
	 * Derive a default bean name from the given bean definition.
	 * &lt;p&gt;The default implementation simply builds a decapitalized version
	 * of the short class name: e.g. &quot;mypackage.MyJdbcDao&quot; -&gt; &quot;myJdbcDao&quot;.
	 * &lt;p&gt;Note that inner classes will thus have names of the form
	 * &quot;outerClassName.InnerClassName&quot;, which because of the period in the
	 * name may be an issue if you are autowiring by name.
	 * @param definition the bean definition to build a bean name for
	 * @return the default bean name (never {@code null})
	 */
	protected String buildDefaultBeanName(BeanDefinition definition) {
		String beanClassName = definition.getBeanClassName();
		Assert.state(beanClassName != null, &quot;No bean class name set&quot;);
		String shortClassName = ClassUtils.getShortName(beanClassName);
		return Introspector.decapitalize(shortClassName);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_16-beandefinitionholder-implements-beanmetadataelement" tabindex="-1"><a class="header-anchor" href="#_16-beandefinitionholder-implements-beanmetadataelement"><span>16. BeanDefinitionHolder implements BeanMetadataElement</span></a></h1><p>public class BeanDefinitionHolder implements BeanMetadataElement {<br> public BeanDefinitionHolder(BeanDefinition beanDefinition, String beanName) {<br> this(beanDefinition, beanName, null);<br> }<br> public BeanDefinitionHolder(BeanDefinition beanDefinition, String beanName, @Nullable String[] aliases) {<br> Assert.notNull(beanDefinition, &quot;BeanDefinition must not be null&quot;);<br> Assert.notNull(beanName, &quot;Bean name must not be null&quot;);<br> this.beanDefinition = beanDefinition;<br> this.beanName = beanName;<br> this.aliases = aliases;<br> }<br> }</p><h1 id="_17-classutils" tabindex="-1"><a class="header-anchor" href="#_17-classutils"><span>17. ClassUtils</span></a></h1>`,37),U=t("br",null,null,-1),k=t("br",null,null,-1),V={class:"MathJax",jax:"SVG",style:{position:"relative"}},G={style:{"vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"34.956ex",height:"2.283ex",role:"img",focusable:"false",viewBox:"0 -759 15450.3 1009","aria-hidden":"true"},z=a('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msup"><g data-mml-node="mi"></g><g data-mml-node="mo" transform="translate(33,363) scale(0.707)"><path data-c="2032" d="M79 43Q73 43 52 49T30 61Q30 68 85 293T146 528Q161 560 198 560Q218 560 240 545T262 501Q262 496 260 486Q259 479 173 263T84 45T79 43Z"></path></g></g><g data-mml-node="mo" transform="translate(277.5,0)"><path data-c="3B" d="M78 370Q78 394 95 412T138 430Q162 430 180 414T199 371Q199 346 182 328T139 310T96 327T78 370ZM78 60Q78 85 94 103T137 121Q202 121 202 8Q202 -44 183 -94T144 -169T118 -194Q115 -194 106 -186T95 -174Q94 -171 107 -155T137 -107T160 -38Q161 -32 162 -22T165 -4T165 4Q165 5 161 4T142 0Q110 0 94 18T78 60Z"></path></g><g data-mml-node="TeXAtom" data-mjx-texclass="ORD" transform="translate(722.1,0)"><g data-mml-node="mo"><path data-c="2F" d="M423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750Z"></path></g></g><g data-mml-node="mo" transform="translate(1444.3,0)"><path data-c="2217" d="M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z"></path></g><g data-mml-node="mo" transform="translate(2166.6,0)"><path data-c="2217" d="M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z"></path></g><g data-mml-node="mi" transform="translate(2666.6,0)"><path data-c="1D447" d="M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z"></path></g><g data-mml-node="mi" transform="translate(3370.6,0)"><path data-c="210E" d="M137 683Q138 683 209 688T282 694Q294 694 294 685Q294 674 258 534Q220 386 220 383Q220 381 227 388Q288 442 357 442Q411 442 444 415T478 336Q478 285 440 178T402 50Q403 36 407 31T422 26Q450 26 474 56T513 138Q516 149 519 151T535 153Q555 153 555 145Q555 144 551 130Q535 71 500 33Q466 -10 419 -10H414Q367 -10 346 17T325 74Q325 90 361 192T398 345Q398 404 354 404H349Q266 404 205 306L198 293L164 158Q132 28 127 16Q114 -11 83 -11Q69 -11 59 -2T48 16Q48 30 121 320L195 616Q195 629 188 632T149 637H128Q122 643 122 645T124 664Q129 683 137 683Z"></path></g><g data-mml-node="mi" transform="translate(3946.6,0)"><path data-c="1D452" d="M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z"></path></g><g data-mml-node="mi" transform="translate(4412.6,0)"><path data-c="1D436" d="M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q484 659 454 652T382 628T299 572T226 479Q194 422 175 346T156 222Q156 108 232 58Q280 24 350 24Q441 24 512 92T606 240Q610 253 612 255T628 257Q648 257 648 248Q648 243 647 239Q618 132 523 55T319 -22Q206 -22 128 53T50 252Z"></path></g><g data-mml-node="mi" transform="translate(5172.6,0)"><path data-c="1D43A" d="M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q492 659 471 656T418 643T357 615T294 567T236 496T189 394T158 260Q156 242 156 221Q156 173 170 136T206 79T256 45T308 28T353 24Q407 24 452 47T514 106Q517 114 529 161T541 214Q541 222 528 224T468 227H431Q425 233 425 235T427 254Q431 267 437 273H454Q494 271 594 271Q634 271 659 271T695 272T707 272Q721 272 721 263Q721 261 719 249Q714 230 709 228Q706 227 694 227Q674 227 653 224Q646 221 643 215T629 164Q620 131 614 108Q589 6 586 3Q584 1 581 1Q571 1 553 21T530 52Q530 53 528 52T522 47Q448 -22 322 -22Q201 -22 126 55T50 252Z"></path></g><g data-mml-node="mi" transform="translate(5958.6,0)"><path data-c="1D43F" d="M228 637Q194 637 192 641Q191 643 191 649Q191 673 202 682Q204 683 217 683Q271 680 344 680Q485 680 506 683H518Q524 677 524 674T522 656Q517 641 513 637H475Q406 636 394 628Q387 624 380 600T313 336Q297 271 279 198T252 88L243 52Q243 48 252 48T311 46H328Q360 46 379 47T428 54T478 72T522 106T564 161Q580 191 594 228T611 270Q616 273 628 273H641Q647 264 647 262T627 203T583 83T557 9Q555 4 553 3T537 0T494 -1Q483 -1 418 -1T294 0H116Q32 0 32 10Q32 17 34 24Q39 43 44 45Q48 46 59 46H65Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Q285 635 228 637Z"></path></g><g data-mml-node="mi" transform="translate(6639.6,0)"><path data-c="1D43C" d="M43 1Q26 1 26 10Q26 12 29 24Q34 43 39 45Q42 46 54 46H60Q120 46 136 53Q137 53 138 54Q143 56 149 77T198 273Q210 318 216 344Q286 624 286 626Q284 630 284 631Q274 637 213 637H193Q184 643 189 662Q193 677 195 680T209 683H213Q285 681 359 681Q481 681 487 683H497Q504 676 504 672T501 655T494 639Q491 637 471 637Q440 637 407 634Q393 631 388 623Q381 609 337 432Q326 385 315 341Q245 65 245 59Q245 52 255 50T307 46H339Q345 38 345 37T342 19Q338 6 332 0H316Q279 2 179 2Q143 2 113 2T65 2T43 1Z"></path></g><g data-mml-node="mi" transform="translate(7143.6,0)"><path data-c="1D435" d="M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z"></path></g><g data-mml-node="mi" transform="translate(7902.6,0)"><path data-c="1D450" d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z"></path></g><g data-mml-node="mi" transform="translate(8335.6,0)"><path data-c="1D459" d="M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z"></path></g><g data-mml-node="mi" transform="translate(8633.6,0)"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"></path></g><g data-mml-node="mi" transform="translate(9162.6,0)"><path data-c="1D460" d="M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z"></path></g><g data-mml-node="mi" transform="translate(9631.6,0)"><path data-c="1D460" d="M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z"></path></g><g data-mml-node="mi" transform="translate(10100.6,0)"><path data-c="1D460" d="M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z"></path></g><g data-mml-node="mi" transform="translate(10569.6,0)"><path data-c="1D452" d="M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z"></path></g><g data-mml-node="mi" transform="translate(11035.6,0)"><path data-c="1D45D" d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z"></path></g><g data-mml-node="mi" transform="translate(11538.6,0)"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"></path></g><g data-mml-node="mi" transform="translate(12067.6,0)"><path data-c="1D45F" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z"></path></g><g data-mml-node="mi" transform="translate(12518.6,0)"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"></path></g><g data-mml-node="mi" transform="translate(13047.6,0)"><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z"></path></g><g data-mml-node="mi" transform="translate(13408.6,0)"><path data-c="1D45C" d="M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z"></path></g><g data-mml-node="mi" transform="translate(13893.6,0)"><path data-c="1D45F" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z"></path></g><g data-mml-node="mo" transform="translate(14622.3,0)"><path data-c="3A" d="M78 370Q78 394 95 412T138 430Q162 430 180 414T199 371Q199 346 182 328T139 310T96 327T78 370ZM78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z"></path></g><g data-mml-node="TeXAtom" data-mjx-texclass="ORD" transform="translate(14900.3,0)"><g data-mml-node="mo"><g data-c="2033"><path data-c="2032" d="M79 43Q73 43 52 49T30 61Q30 68 85 293T146 528Q161 560 198 560Q218 560 240 545T262 501Q262 496 260 486Q259 479 173 263T84 45T79 43Z"></path><path data-c="2032" d="M79 43Q73 43 52 49T30 61Q30 68 85 293T146 528Q161 560 198 560Q218 560 240 545T262 501Q262 496 260 486Q259 479 173 263T84 45T79 43Z" transform="translate(275,0)"></path></g></g></g></g></g>',1),W=[z],J=t("mjx-assistive-mml",{unselectable:"on",display:"inline"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msup",null,[t("mi"),t("mo",{"data-mjx-alternate":"1"},"′")]),t("mo",null,";"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mo",null,"/")]),t("mo",null,"∗"),t("mo",null,"∗"),t("mi",null,"T"),t("mi",null,"h"),t("mi",null,"e"),t("mi",null,"C"),t("mi",null,"G"),t("mi",null,"L"),t("mi",null,"I"),t("mi",null,"B"),t("mi",null,"c"),t("mi",null,"l"),t("mi",null,"a"),t("mi",null,"s"),t("mi",null,"s"),t("mi",null,"s"),t("mi",null,"e"),t("mi",null,"p"),t("mi",null,"a"),t("mi",null,"r"),t("mi",null,"a"),t("mi",null,"t"),t("mi",null,"o"),t("mi",null,"r"),t("mo",null,":"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mo",{"data-mjx-pseudoscript":"true"},'"')])])],-1),Y={class:"MathJax",jax:"SVG",style:{position:"relative"}},K={style:{"vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"61.579ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 27217.7 1000","aria-hidden":"true"},X=a('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="TeXAtom" data-mjx-texclass="ORD"><g data-mml-node="mo"><g data-c="2033"><path data-c="2032" d="M79 43Q73 43 52 49T30 61Q30 68 85 293T146 528Q161 560 198 560Q218 560 240 545T262 501Q262 496 260 486Q259 479 173 263T84 45T79 43Z"></path><path data-c="2032" d="M79 43Q73 43 52 49T30 61Q30 68 85 293T146 528Q161 560 198 560Q218 560 240 545T262 501Q262 496 260 486Q259 479 173 263T84 45T79 43Z" transform="translate(275,0)"></path></g></g></g><g data-mml-node="mo" transform="translate(772.2,0)"><path data-c="2217" d="M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z"></path></g><g data-mml-node="TeXAtom" data-mjx-texclass="ORD" transform="translate(1494.4,0)"><g data-mml-node="mo"><path data-c="2F" d="M423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750Z"></path></g></g><g data-mml-node="mi" transform="translate(1994.4,0)"><path data-c="1D45D" d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z"></path></g><g data-mml-node="mi" transform="translate(2497.4,0)"><path data-c="1D462" d="M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path></g><g data-mml-node="mi" transform="translate(3069.4,0)"><path data-c="1D44F" d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z"></path></g><g data-mml-node="mi" transform="translate(3498.4,0)"><path data-c="1D459" d="M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z"></path></g><g data-mml-node="mi" transform="translate(3796.4,0)"><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path></g><g data-mml-node="mi" transform="translate(4141.4,0)"><path data-c="1D450" d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z"></path></g><g data-mml-node="mi" transform="translate(4574.4,0)"><path data-c="1D460" d="M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z"></path></g><g data-mml-node="mi" transform="translate(5043.4,0)"><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z"></path></g><g data-mml-node="mi" transform="translate(5404.4,0)"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"></path></g><g data-mml-node="mi" transform="translate(5933.4,0)"><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z"></path></g><g data-mml-node="mi" transform="translate(6294.4,0)"><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path></g><g data-mml-node="mi" transform="translate(6639.4,0)"><path data-c="1D450" d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z"></path></g><g data-mml-node="mi" transform="translate(7072.4,0)"><path data-c="1D453" d="M118 -162Q120 -162 124 -164T135 -167T147 -168Q160 -168 171 -155T187 -126Q197 -99 221 27T267 267T289 382V385H242Q195 385 192 387Q188 390 188 397L195 425Q197 430 203 430T250 431Q298 431 298 432Q298 434 307 482T319 540Q356 705 465 705Q502 703 526 683T550 630Q550 594 529 578T487 561Q443 561 443 603Q443 622 454 636T478 657L487 662Q471 668 457 668Q445 668 434 658T419 630Q412 601 403 552T387 469T380 433Q380 431 435 431Q480 431 487 430T498 424Q499 420 496 407T491 391Q489 386 482 386T428 385H372L349 263Q301 15 282 -47Q255 -132 212 -173Q175 -205 139 -205Q107 -205 81 -186T55 -132Q55 -95 76 -78T118 -61Q162 -61 162 -103Q162 -122 151 -136T127 -157L118 -162Z"></path></g><g data-mml-node="mi" transform="translate(7622.4,0)"><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path></g><g data-mml-node="mi" transform="translate(7967.4,0)"><path data-c="1D45B" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"></path></g><g data-mml-node="mi" transform="translate(8567.4,0)"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"></path></g><g data-mml-node="mi" transform="translate(9096.4,0)"><path data-c="1D459" d="M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z"></path></g><g data-mml-node="mi" transform="translate(9394.4,0)"><path data-c="1D446" d="M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z"></path></g><g data-mml-node="mi" transform="translate(10039.4,0)"><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z"></path></g><g data-mml-node="mi" transform="translate(10400.4,0)"><path data-c="1D45F" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z"></path></g><g data-mml-node="mi" transform="translate(10851.4,0)"><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path></g><g data-mml-node="mi" transform="translate(11196.4,0)"><path data-c="1D45B" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"></path></g><g data-mml-node="mi" transform="translate(11796.4,0)"><path data-c="1D454" d="M311 43Q296 30 267 15T206 0Q143 0 105 45T66 160Q66 265 143 353T314 442Q361 442 401 394L404 398Q406 401 409 404T418 412T431 419T447 422Q461 422 470 413T480 394Q480 379 423 152T363 -80Q345 -134 286 -169T151 -205Q10 -205 10 -137Q10 -111 28 -91T74 -71Q89 -71 102 -80T116 -111Q116 -121 114 -130T107 -144T99 -154T92 -162L90 -164H91Q101 -167 151 -167Q189 -167 211 -155Q234 -144 254 -122T282 -75Q288 -56 298 -13Q311 35 311 43ZM384 328L380 339Q377 350 375 354T369 368T359 382T346 393T328 402T306 405Q262 405 221 352Q191 313 171 233T151 117Q151 38 213 38Q269 38 323 108L331 118L384 328Z"></path></g><g data-mml-node="mi" transform="translate(12273.4,0)"><path data-c="1D436" d="M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q484 659 454 652T382 628T299 572T226 479Q194 422 175 346T156 222Q156 108 232 58Q280 24 350 24Q441 24 512 92T606 240Q610 253 612 255T628 257Q648 257 648 248Q648 243 647 239Q618 132 523 55T319 -22Q206 -22 128 53T50 252Z"></path></g><g data-mml-node="mi" transform="translate(13033.4,0)"><path data-c="1D43A" d="M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q492 659 471 656T418 643T357 615T294 567T236 496T189 394T158 260Q156 242 156 221Q156 173 170 136T206 79T256 45T308 28T353 24Q407 24 452 47T514 106Q517 114 529 161T541 214Q541 222 528 224T468 227H431Q425 233 425 235T427 254Q431 267 437 273H454Q494 271 594 271Q634 271 659 271T695 272T707 272Q721 272 721 263Q721 261 719 249Q714 230 709 228Q706 227 694 227Q674 227 653 224Q646 221 643 215T629 164Q620 131 614 108Q589 6 586 3Q584 1 581 1Q571 1 553 21T530 52Q530 53 528 52T522 47Q448 -22 322 -22Q201 -22 126 55T50 252Z"></path></g><g data-mml-node="mi" transform="translate(13819.4,0)"><path data-c="1D43F" d="M228 637Q194 637 192 641Q191 643 191 649Q191 673 202 682Q204 683 217 683Q271 680 344 680Q485 680 506 683H518Q524 677 524 674T522 656Q517 641 513 637H475Q406 636 394 628Q387 624 380 600T313 336Q297 271 279 198T252 88L243 52Q243 48 252 48T311 46H328Q360 46 379 47T428 54T478 72T522 106T564 161Q580 191 594 228T611 270Q616 273 628 273H641Q647 264 647 262T627 203T583 83T557 9Q555 4 553 3T537 0T494 -1Q483 -1 418 -1T294 0H116Q32 0 32 10Q32 17 34 24Q39 43 44 45Q48 46 59 46H65Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Q285 635 228 637Z"></path></g><g data-mml-node="mi" transform="translate(14500.4,0)"><path data-c="1D43C" d="M43 1Q26 1 26 10Q26 12 29 24Q34 43 39 45Q42 46 54 46H60Q120 46 136 53Q137 53 138 54Q143 56 149 77T198 273Q210 318 216 344Q286 624 286 626Q284 630 284 631Q274 637 213 637H193Q184 643 189 662Q193 677 195 680T209 683H213Q285 681 359 681Q481 681 487 683H497Q504 676 504 672T501 655T494 639Q491 637 471 637Q440 637 407 634Q393 631 388 623Q381 609 337 432Q326 385 315 341Q245 65 245 59Q245 52 255 50T307 46H339Q345 38 345 37T342 19Q338 6 332 0H316Q279 2 179 2Q143 2 113 2T65 2T43 1Z"></path></g><g data-mml-node="msub" transform="translate(15004.4,0)"><g data-mml-node="mi"><path data-c="1D435" d="M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z"></path></g><g data-mml-node="mi" transform="translate(792,-150) scale(0.707)"><path data-c="1D436" d="M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q484 659 454 652T382 628T299 572T226 479Q194 422 175 346T156 222Q156 108 232 58Q280 24 350 24Q441 24 512 92T606 240Q610 253 612 255T628 257Q648 257 648 248Q648 243 647 239Q618 132 523 55T319 -22Q206 -22 128 53T50 252Z"></path></g></g><g data-mml-node="mi" transform="translate(16383.8,0)"><path data-c="1D43F" d="M228 637Q194 637 192 641Q191 643 191 649Q191 673 202 682Q204 683 217 683Q271 680 344 680Q485 680 506 683H518Q524 677 524 674T522 656Q517 641 513 637H475Q406 636 394 628Q387 624 380 600T313 336Q297 271 279 198T252 88L243 52Q243 48 252 48T311 46H328Q360 46 379 47T428 54T478 72T522 106T564 161Q580 191 594 228T611 270Q616 273 628 273H641Q647 264 647 262T627 203T583 83T557 9Q555 4 553 3T537 0T494 -1Q483 -1 418 -1T294 0H116Q32 0 32 10Q32 17 34 24Q39 43 44 45Q48 46 59 46H65Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Q285 635 228 637Z"></path></g><g data-mml-node="mi" transform="translate(17064.8,0)"><path data-c="1D434" d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"></path></g><g data-mml-node="mi" transform="translate(17814.8,0)"><path data-c="1D446" d="M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z"></path></g><g data-mml-node="msub" transform="translate(18459.8,0)"><g data-mml-node="mi"><path data-c="1D446" d="M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z"></path></g><g data-mml-node="mi" transform="translate(646,-150) scale(0.707)"><path data-c="1D446" d="M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z"></path></g></g><g data-mml-node="mi" transform="translate(19611.9,0)"><path data-c="1D438" d="M492 213Q472 213 472 226Q472 230 477 250T482 285Q482 316 461 323T364 330H312Q311 328 277 192T243 52Q243 48 254 48T334 46Q428 46 458 48T518 61Q567 77 599 117T670 248Q680 270 683 272Q690 274 698 274Q718 274 718 261Q613 7 608 2Q605 0 322 0H133Q31 0 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H757Q764 676 764 669Q764 664 751 557T737 447Q735 440 717 440H705Q698 445 698 453L701 476Q704 500 704 528Q704 558 697 578T678 609T643 625T596 632T532 634H485Q397 633 392 631Q388 629 386 622Q385 619 355 499T324 377Q347 376 372 376H398Q464 376 489 391T534 472Q538 488 540 490T557 493Q562 493 565 493T570 492T572 491T574 487T577 483L544 351Q511 218 508 216Q505 213 492 213Z"></path></g><g data-mml-node="mi" transform="translate(20375.9,0)"><path data-c="1D443" d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path></g><g data-mml-node="mi" transform="translate(21126.9,0)"><path data-c="1D434" d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"></path></g><g data-mml-node="mi" transform="translate(21876.9,0)"><path data-c="1D445" d="M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z"></path></g><g data-mml-node="mi" transform="translate(22635.9,0)"><path data-c="1D434" d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"></path></g><g data-mml-node="mi" transform="translate(23385.9,0)"><path data-c="1D447" d="M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z"></path></g><g data-mml-node="mi" transform="translate(24089.9,0)"><path data-c="1D442" d="M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z"></path></g><g data-mml-node="mi" transform="translate(24852.9,0)"><path data-c="1D445" d="M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z"></path></g><g data-mml-node="mo" transform="translate(25889.7,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path></g><g data-mml-node="TeXAtom" data-mjx-texclass="ORD" transform="translate(26667.7,0)"><g data-mml-node="mo"><g data-c="2033"><path data-c="2032" d="M79 43Q73 43 52 49T30 61Q30 68 85 293T146 528Q161 560 198 560Q218 560 240 545T262 501Q262 496 260 486Q259 479 173 263T84 45T79 43Z"></path><path data-c="2032" d="M79 43Q73 43 52 49T30 61Q30 68 85 293T146 528Q161 560 198 560Q218 560 240 545T262 501Q262 496 260 486Q259 479 173 263T84 45T79 43Z" transform="translate(275,0)"></path></g></g></g></g></g>',1),$=[X],tt=t("mjx-assistive-mml",{unselectable:"on",display:"inline"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mrow",{"data-mjx-texclass":"ORD"},[t("mo",{"data-mjx-pseudoscript":"true"},'"')]),t("mo",null,"∗"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mo",null,"/")]),t("mi",null,"p"),t("mi",null,"u"),t("mi",null,"b"),t("mi",null,"l"),t("mi",null,"i"),t("mi",null,"c"),t("mi",null,"s"),t("mi",null,"t"),t("mi",null,"a"),t("mi",null,"t"),t("mi",null,"i"),t("mi",null,"c"),t("mi",null,"f"),t("mi",null,"i"),t("mi",null,"n"),t("mi",null,"a"),t("mi",null,"l"),t("mi",null,"S"),t("mi",null,"t"),t("mi",null,"r"),t("mi",null,"i"),t("mi",null,"n"),t("mi",null,"g"),t("mi",null,"C"),t("mi",null,"G"),t("mi",null,"L"),t("mi",null,"I"),t("msub",null,[t("mi",null,"B"),t("mi",null,"C")]),t("mi",null,"L"),t("mi",null,"A"),t("mi",null,"S"),t("msub",null,[t("mi",null,"S"),t("mi",null,"S")]),t("mi",null,"E"),t("mi",null,"P"),t("mi",null,"A"),t("mi",null,"R"),t("mi",null,"A"),t("mi",null,"T"),t("mi",null,"O"),t("mi",null,"R"),t("mo",null,"="),t("mrow",{"data-mjx-texclass":"ORD"},[t("mo",{"data-mjx-pseudoscript":"true"},'"')])])],-1),nt=a(`<pre><code>public static String getShortName(String className) {
	Assert.hasLength(className, &quot;Class name must not be empty&quot;);
	int lastDotIndex = className.lastIndexOf(PACKAGE_SEPARATOR);
	int nameEndIndex = className.indexOf(CGLIB_CLASS_SEPARATOR);
	if (nameEndIndex == -1) {
		nameEndIndex = className.length();
	}
	String shortName = className.substring(lastDotIndex + 1, nameEndIndex);
	shortName = shortName.replace(INNER_CLASS_SEPARATOR, PACKAGE_SEPARATOR);
	return shortName;
}

public static String getShortName(String className) {
	Assert.hasLength(className, &quot;Class name must not be empty&quot;);
	int lastDotIndex = className.lastIndexOf(PACKAGE_SEPARATOR);
	int nameEndIndex = className.indexOf(CGLIB_CLASS_SEPARATOR);
	if (nameEndIndex == -1) {
		nameEndIndex = className.length();
	}
	String shortName = className.substring(lastDotIndex + 1, nameEndIndex);
	shortName = shortName.replace(INNER_CLASS_SEPARATOR, PACKAGE_SEPARATOR);
	return shortName;
}
</code></pre><p>}</p><h1 id="_18-introspector" tabindex="-1"><a class="header-anchor" href="#_18-introspector"><span>18. Introspector</span></a></h1><p>public class Introspector {<br> public static String decapitalize(String name) {<br> if (name == null || name.length() == 0) {<br> return name;<br> }<br> if (name.length() &gt; 1 &amp;&amp; Character.isUpperCase(name.charAt(1)) &amp;&amp;<br> Character.isUpperCase(name.charAt(0))){<br> return name;<br> }<br> char chars[] = name.toCharArray();<br> chars[0] = Character.toLowerCase(chars[0]);<br> return new String(chars);<br> }<br> }</p><h1 id="_19-annotationconfigapplicationcontext创建流程" tabindex="-1"><a class="header-anchor" href="#_19-annotationconfigapplicationcontext创建流程"><span>19. AnnotationConfigApplicationContext创建流程</span></a></h1><ul><li><p>创建AnnotationConfigApplicationContext</p><ul><li>属性ResourcePatternResolver resourcePatternResolver：new PathMatchingResourcePatternResolver(this);（AbstractApplicationContext构造） <ul><li>属性ResourceLoader resourceLoader：AnnotationConfigApplicationContext:DefaultResourceLoader</li></ul></li><li>属性ClassLoader classLoader：AppClassLoader();（DefaultResourceLoader构造）</li><li>属性DefaultListableBeanFactory beanFactory：new DefaultListableBeanFactory();（GenericApplicationContext构造） <ul><li>属性<code>Comparator&lt;Object&gt;</code> dependencyComparator: new AnnotationAwareOrderComparator();//排序BeanPostprocessor</li><li>属性AutowireCandidateResolver autowireCandidateResolver：new ContextAnnotationAutowireCandidateResolver();</li><li>属性<code>Map&lt;String,BeanDefinition&gt;</code> beanDefinitionMap = new ConcurrentHashMap&lt;&gt;(256) <ul><li>RootBeanDefinition(ConfigurationClassPostProcessor.class implements BeanDefinitionRegistryPostProcessor): internalConfigurationAnnotationProcessor//注解后置处理器</li><li>RootBeanDefinition(AutowiredAnnotationBeanPostProcessor.class): internalAutowiredAnnotationProcessor</li><li>RootBeanDefinition(RequiredAnnotationBeanPostProcessor.class): internalRequiredAnnotationProcessor</li><li>RootBeanDefinition(CommonAnnotationBeanPostProcessor.class): internalCommonAnnotationProcessor</li><li>RootBeanDefinition(EventListenerMethodProcessor.class): internalEventListenerProcessor</li><li>RootBeanDefinition(DefaultEventListenerFactory.class): internalEventListenerFactory</li></ul></li><li>属性<code>List&lt;String&gt;</code> beanDefinitionNames = new ArrayList&lt;&gt;(256) <ul><li>&quot;org.springframework.context.annotation.internalConfigurationAnnotationProcessor&quot;//注解后置处理器</li><li>&quot;org.springframework.context.annotation.internalAutowiredAnnotationProcessor&quot;</li><li>&quot;org.springframework.context.annotation.internalRequiredAnnotationProcessor&quot;</li><li>&quot;org.springframework.context.annotation.internalCommonAnnotationProcessor&quot;</li><li>&quot;org.springframework.context.event.internalEventListenerProcessor&quot;</li><li>&quot;org.springframework.context.event.internalEventListenerFactory&quot;</li></ul></li></ul></li><li>属性ConfigurableEnvironment environment：new StandardEnvironment();</li><li>属性AnnotatedBeanDefinitionReader reader：new AnnotatedBeanDefinitionReader(); <ul><li>属性BeanDefinitionRegistry registry：AnnotationConfigApplicationContext</li><li>属性ConditionEvaluator conditionEvaluator：new ConditionEvaluator(); <ul><li>属性ConditionContextImpl context：new ConditionContextImpl(); <ul><li>属性BeanDefinitionRegistry registry: AnnotationConfigApplicationContext</li><li>属性ConfigurableListableBeanFactory beanFactory: DefaultListableBeanFactory</li><li>属性Environment environment：StandardEnvironment</li><li>属性ResourceLoader resourceLoader：DefaultResourceLoader</li><li>属性ClassLoader classLoader：AppClassLoader</li></ul></li></ul></li><li>属性默认ScopeMetadataResolver scopeMetadataResolver = new AnnotationScopeMetadataResolver()</li><li>属性默认BeanNameGenerator beanNameGenerator = new AnnotationBeanNameGenerator()</li></ul></li><li>属性ClassPathBeanDefinitionScanner scanner：new ClassPathBeanDefinitionScanner() <ul><li>属性BeanDefinitionRegistry registry：AnnotationConfigApplicationContext</li><li>属性<code>List&lt;TypeFilter&gt;</code> includeFilters = new LinkedList&lt;&gt;() <ul><li>new AnnotationTypeFilter(Component.class)</li></ul></li><li>属性Environment environment：StandardEnvironment</li><li>属性ResourcePatternResolver resourcePatternResolver：AnnotationConfigApplicationContext（DefaultResourceLoader）</li><li>属性MetadataReaderFactory metadataReaderFactory：new CachingMetadataReaderFactory()（属性省略）</li></ul></li></ul></li><li><p>AnnotatedBeanDefinitionReader.register方法将class注册到DefaultListableBeanFactory的beanDefinitionMap中</p><ul><li>构造AnnotatedGenericBeanDefinition <ul><li>属性beanClass：class</li><li>属性AnnotationMetadata metadata：new StandardAnnotationMetadata(beanClass, true) <ul><li>属性Annotation[] annotations: class.getAnnotations();</li><li>属性boolean nestedAnnotationsAsMap：true;</li><li>属性Class&lt;?&gt; introspectedClass：class</li></ul></li></ul></li><li>调用ConditionEvaluator.shouSkip判断是否是conditional注解，若是无需注册</li><li>调用scopeMetadataResolver.resolveScopeMetadata判断是否被@Scope注解注解了，并解析Value属性和proxyMode</li><li>调用beanNameGenerator.generateBeanName得到BeanName</li><li>调用processCommonDefinitionAnnotations判断是否被lazy，Primary，DependsOn，Role，Description注解，给AnnotatedGenericBeanDefinition设置相应的属性</li><li>调用AnnotationConfigUtils.applyScopedProxyMode判断是否要是多例的</li><li>调用BeanDefinitionReaderUtils.registerBeanDefinition将AnnotatedGenericBeanDefinition注册到DefaultListableBeanFactory的beanDefinitionMap中，注意别名的注册</li></ul></li><li><p>AnnotationConfigApplicationContext的refresh()方法</p><ul><li><p>prepareRefresh()</p><ul><li>属性long startupDate：System.currentTimeMillis()记录启动时间</li><li>属性AtomicBoolean active：true</li><li>属性AtomicBoolean closed：false</li><li>初始化系统属性initPropertySources钩子方法</li><li>使用ConfigurablePropertyResolver校验设置的setRequiredProperties环境参数（getEnvironment().validateRequiredProperties）(没看)</li><li>属性<code>Set&lt;ApplicationListener&lt;?&gt;&gt;</code> earlyApplicationListeners：new LinkedHashSet&lt;&gt;();</li><li>属性<code>Set&lt;ApplicationEvent&gt;</code> earlyApplicationEvents：new LinkedHashSet&lt;&gt;()</li></ul></li><li><p>ConfigurableListableBeanFactory beanFactory = obtainFreshBeanFactory();</p><ul><li>refreshBeanFactory()；由于AnnotationConfigApplicationContext继承了GenericApplicationContext，复写了refreshBeanFactory()方法，只给AnnotationConfigApplicationContext的beanFactory设置了一个SerializationId</li></ul></li><li><p>prepareBeanFactory(beanFactory);</p><ul><li>给AnnotationConfigApplicationContext的beanFactory设置ClassLoader beanClassLoader：AppClassLoader</li><li>给AnnotationConfigApplicationContext的beanFactory设置BeanExpressionResolver beanExpressionResolver：new StandardBeanExpressionResolver(AppClassLoader)</li><li>给AnnotationConfigApplicationContext的beanFactory设置<code>Set&lt;PropertyEditorRegistrar&gt;</code> propertyEditorRegistrars：add ResourceEditorRegistrar(StandardEnvironment)</li></ul><p>// Configure the bean factory with context callbacks.</p><ul><li>给AnnotationConfigApplicationContext的beanFactory设置<code>List&lt;BeanPostProcessor&gt;</code> beanPostProcessors： <ul><li>add new ApplicationContextAwareProcessor(this)</li><li>add new ApplicationListenerDetector(this)</li></ul></li><li>给AnnotationConfigApplicationContext的beanFactory设置<code>Set&lt;Class&lt;?&gt;&gt;</code> ignoredDependencyInterfaces： <ul><li>add EnvironmentAware.class</li><li>add EmbeddedValueResolverAware.class</li><li>add ResourceLoaderAware.class</li><li>add ApplicationEventPublisherAware.class</li><li>add MessageSourceAware.class</li><li>add ApplicationContextAware.class</li></ul></li><li>给AnnotationConfigApplicationContext的beanFactory设置<code>Map&lt;Class&lt;?&gt;</code>, Object&gt; resolvableDependencies <ul><li>put BeanFactory.class, BeanFactory</li><li>put ResourceLoader.class, this</li><li>put ApplicationEventPublisher.class, this</li><li>put ApplicationContext.class, this</li></ul></li><li>if (beanFactory.containsBean(LOAD_TIME_WEAVER_BEAN_NAME)) {<br> beanFactory.addBeanPostProcessor(new LoadTimeWeaverAwareProcessor(beanFactory));<br> // Set a temporary ClassLoader for type matching.<br> beanFactory.setTempClassLoader(new ContextTypeMatchClassLoader(beanFactory.getBeanClassLoader()));<br> }</li><li>给AnnotationConfigApplicationContext的beanFactory设置<code>Map&lt;String,Object&gt;</code> singletonObjects <ul><li><code>&lt;environment,StandardEnvironment&gt;</code></li><li><code>&lt;systemProperties,properties&gt;</code>,</li><li><code>&lt;systemEnvironment,Map&gt;</code></li></ul></li><li>给AnnotationConfigApplicationContext的beanFactory设置<code>Set&lt;String&gt;</code> registeredSingletons： <ul><li>&quot;environment&quot;</li><li>&quot;systemProperties&quot;</li><li>&quot;systemEnvironment&quot;</li></ul></li><li>给<code>Set&lt;String&gt;</code> manualSingletonNames添加 <ul><li>&quot;environment&quot;</li><li>&quot;systemProperties&quot;</li><li>&quot;systemEnvironment&quot;</li></ul></li><li>将上一步三个对象放入到singletonObjects</li></ul></li><li><p>postProcessBeanFactory(beanFactory)钩子方法（没看）</p></li><li><p>invokeBeanFactoryPostProcessors(beanFactory)</p><ul><li>调用PostProcessorRegistrationDelegate.invokeBeanFactoryPostProcessors <ul><li>判断beanFacctory是否实现了BeanDefinitionRegistry接口 <ul><li>创建<code>List&lt;BeanFactoryPostProcessor&gt;</code> regularPostProcessors = new ArrayList&lt;&gt;();存放实现了BeanDefinitionRegistryPostProcessor</li><li>创建<code>List&lt;BeanDefinitionRegistryPostProcessor&gt;</code> registryProcessors = new ArrayList&lt;&gt;();存放实现了BeanDefinitionRegistryPostProcessor</li><li>遍历BeanFactoryPostProcessor，找到BeanDefinitionRegistryPostProcessor实现类调用postProcessBeanDefinitionRegistry方法，并放入到registryProcessors中，其他放入regularPostProcessors中</li><li>遍历beanFactory中的beanDefinitionNames找到同时实现了BeanDefinitionRegistryPostProcessor.class和PriorityOrdered.class的类，按实现了AnnotationAwareOrderComparator接口进行排序，（这个方法里面找到ConfigurationClassPostProcessor）调用其postProcessBeanDefinitionRegistry实现接口方法 <ul><li>ConfigurationClassPostProcessor调用postProcessBeanDefinitionRegistry(本质调用processConfigBeanDefinitions)重点 <ul><li>扫描已经注册的BeanDefinition,找到所有Component、ComponentScan、Import、ImportResource、或者Configuration注解的类并解析order注解，最后按order排序，创建ConfigurationClassParser，并循环做如下解析(本质doProcessConfigurationClass) <ul><li>解析@PropertySource注解（待看），使用componentScanParser找上面的解析@ComponentScan，解析到那个类之后再doProcessConfigurationClass一遍（递归）</li><li>解析@Import、@ImportResource</li><li>从配置类@Configuration中解析@Bean，找到的所有类加入到BeanFactory中</li><li>创建ConfigurationClassBeanDefinitionReader，找到相关@Bean里面的bean定义，找到@Import的资源加载进来</li></ul></li></ul></li></ul></li><li>除了上面的后置处理器外，找到有@orderd注解的重复上面的步骤</li><li>找到除了上面2种后置处理器外的接口，重复上面的步骤</li><li>调用上面收集到的regularPostProcessors和registryProcessors的postProcessBeanFactory方法</li></ul></li><li>没实现则直接遍历BeanFactoryPostProcessors调用postProcessBeanFactory方法</li><li>最后调用除了上面的所有实现了BeanFactoryPostProcessor接口的类，分成priorityOrdered.class\\ordered.class\\其他\\各自排序完成后调用postProcessBeanFactory方法</li></ul></li><li>检查如果搜索到LoadTimeWeaver，需要准备织入 <ul><li>if (beanFactory.getTempClassLoader() == null &amp;&amp; beanFactory.containsBean(LOAD_TIME_WEAVER_BEAN_NAME)) {</li><li>beanFactory.addBeanPostProcessor(new LoadTimeWeaverAwareProcessor(beanFactory));</li><li>beanFactory.setTempClassLoader(new ContextTypeMatchClassLoader(beanFactory.getBeanClassLoader()));</li><li>}</li></ul></li></ul></li><li><p>registerBeanPostProcessors(beanFactory)</p><ul><li>找到所有BeanPostProcessor.class的类名字</li><li>beanFactory的BeanPostProcessor添加BeanPostProcessorChecker</li><li>从beanFactory找到实现了BeanPostProcessor.class的类，同时priorityOrdered.class\\ordered.class\\nonOrdered各自排序，并将其注册到AnnotationConfigApplicationContext的beanPostProcessors中，将上面三种类中同时实现了MergedBeanDefinitionPostProcessor接口的类排序后也注册进去</li><li>beanFactory的BeanPostProcessor添加ApplicationListenerDetector</li></ul></li><li><p>初始化国际化initMessageSource();</p></li><li><p>注册广播initApplicationEventMulticaster()</p></li><li><p>onRefresh()启动别的容器的子类</p></li><li><p>registerListeners()注册监听类</p></li><li><p>finishBeanFactoryInitialization(beanFactory)初始化所有的bean（本质调用preInstantiateSingletons）</p><ul><li><code>beanFactory的List&lt;StringValueResolver&gt;</code> embeddedValueResolvers添加getEnvironment().resolvePlaceholders(strVal)(待看)</li><li>String[] weaverAwareNames = beanFactory.getBeanNamesForType(LoadTimeWeaverAware.class, false, false);<br> for (String weaverAwareName : weaverAwareNames) {<br> getBean(weaverAwareName);<br> }</li><li>beanFactory.configurationFrozen = true;</li><li>beanFactory.frozenBeanDefinitionNames = StringUtils.toStringArray(this.beanDefinitionNames);</li><li>beanFactory.preInstantiateSingletons(); <ul><li>遍历beanDefinitionNames、调用getMergedLocalBeanDefinition判断BeanDefinition当且仅当非抽象类、单例、非懒加载时 <ul><li>isFactoryBean()判断是否是FactoryBean实现类(待看) <ul><li>如果实现了FactoryBean而且是SmartFactoryBean类型且isEagerInit，则getBean初始化</li></ul></li><li>当不是FactoryBean实现类时,直接getBean初始化</li><li>getBean(name)-&gt;doGetBean(name)方法 <ul><li>如果该name是FactoryBean，那么截取掉&amp;，得到BeanName</li><li>getSingleton(beanName,true)</li><li>如果getSingleton!=null,getObjectForBeanInstance();(待看)</li><li>如果getSingleton==null,第一次进来 <ul><li>如果prototypesCurrentlyInCreation找到它，则抛出循环依赖的异常</li><li>从mergedBeanDefinitions查找，没有则从父容器中doGetBean继续找</li><li>如果是typeCheckOnly-&gt;添加到<code>Set&lt;String&gt;</code> alreadyCreated</li><li>并将其他的BeanDefinition、GenericBeanDefinition转成RootBeanDefinition(getMergedBeanDefinition())</li><li>判断BeanDefinition的dependsOn关系，如果dependentBeanMap中有则抛出循环依赖异常，否则记录到dependentBeanMap并getBean找到对应的类</li><li>如果是单例，调用getSingleton(beanName,CreatBean()); <ul><li>复制RootBeanDefinition，遍历MethodOverrides调用prepareMethodOverrides，（解析@ Lookup和lookup-method标签得到的）</li><li>自定义Bean的调用——遍历BeanPostProcessor中实现InstantiationAwareBeanPostProcessor的类，调用postProcessBeforeInstantiation创建对象，如果有对象则调用postProcessAfterInitialization，如果没有的话，就执行doCreateBean由spring产生 <ul><li>通过createBeanInstance获得BeanWrapper <ul><li>从父类中拿到实例(待看)</li><li>从FactoryMethod中拿到实例(待看)</li><li>判断是否有@AutoWired相关的，找到则autowireConstructor(待看)</li><li>没有与@AutoWired相关的，调用SimpleInstantiationStrategy.instantiateBean通过反射创建(待看)</li></ul></li><li>将resolvedTargetType赋给RootBeanDefinition的resolvedTargetType</li><li>遍历BeanPostProcessor中实现了MergedBeanDefinitionPostProcessor的postProcessMergedBeanDefinition方法，并将其postProcessed置为true</li><li>如果是allowCircularReferences、singletonsCurrentlyInCreation、单例的情况下，先放入到singletonFactories、registeredSingletons、移走earlySingletonObjects三级缓存中防止循环依赖</li><li>populateBean：填充属性 <ul><li>如果含有InstantiationAwareBeanPostProcessors且非synthetic合成，则遍历BeanPostProcessors调用InstantiationAwareBeanPostProcessor的postProcessAfterInstantiation</li><li>判断@AutoWired属性并且完成属性注入(待看)</li><li>initializeBean：初始化属性</li><li>非合成类则遍历BeanPostProcessor调用postProcessBeforeInitialization</li><li>非合成类则遍历BeanPostProcessor调用postProcessAfterInitialization</li></ul></li><li>registerDisposableBeanIfNecessary();(待看)</li></ul></li></ul></li><li>如果是多例(待看)</li><li>其他情况(待看)</li><li>最后大家都调用getObjectForBeanInstance（判断是否实现了FactoryBean，不是FactoryBean直接返回传入的对象）(待看)</li></ul></li></ul></li></ul></li><li>遍历beanDefinitionNames调用实现了SmartInitializingSingleton接口bean的afterSingletonsInstantiated方法</li></ul></li></ul></li></ul></li><li><p>解析XML</p></li><li><p>resourcePatternResolver().getResources(location)-&gt;new ClassPathContextResource(location) implements Resource -&gt;new EncodedResource(Resource) implements InputStreamSource<br> -&gt;classLoader.getResourceAsStream Inputstream -&gt;InputSource-&gt;DOMParser.Document</p></li><li><p>PathMatchingResourcePatternResolver解析basePackage</p></li><li><p><code>Enumeration&lt;URL&gt;</code> classLoder.getResource() -&gt;<code>Set&lt;Resource&gt;</code></p></li></ul><h1 id="_20-spring-annotatedelementutils遍历搜索注解的属性的方法" tabindex="-1"><a class="header-anchor" href="#_20-spring-annotatedelementutils遍历搜索注解的属性的方法"><span>20. Spring AnnotatedElementUtils遍历搜索注解的属性的方法</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//搜索本注解及其父类的@inherited注解的集合
private static &lt;T&gt; T searchWithGetSemantics(
	AnnotatedElement element,//含有注解的类
	@Nullable Class&lt;? extends Annotation&gt; annotationType, 
	@Nullable String annotationName,
	@Nullable Class&lt;? extends Annotation&gt; containerType, //可重复注解的容器对象(暂时看全部都是为null，功能未知)
	Processor&lt;T&gt; processor,//实现了Processor接口的接口类，通过Processor来对元素进行处理
	Set&lt;AnnotatedElement&gt; visited, //已经访问的元素：用set防止重复，并终止递归
	int metaDepth//注解深度，控制注解收集，processor只收集第一次拿到的结果
	) {
	if (visited.add(element)) {
		try {
			List&lt;Annotation&gt; declaredAnnotations = Arrays.asList(element.getDeclaredAnnotations());
			T result = searchWithGetSemanticsInAnnotations(element, declaredAnnotations,
				annotationType, annotationName, containerType, processor, visited, metaDepth);
			if (result != null) {return result;}
			if (element instanceof Class) {  // otherwise getAnnotations doesn&#39;t return anything new
				Class&lt;?&gt; superclass = ((Class) element).getSuperclass();
				if (superclass != null &amp;&amp; superclass != Object.class) {
					List&lt;Annotation&gt; inheritedAnnotations = new LinkedList&lt;&gt;();
					for (Annotation annotation : element.getAnnotations()) {//拿到从父类继承过来的@inherited注解再找一遍
						if (!declaredAnnotations.contains(annotation)) {
							inheritedAnnotations.add(annotation);
						}
					}
					// Continue searching within inherited annotations
					result = searchWithGetSemanticsInAnnotations(element, inheritedAnnotations,
					annotationType, annotationName, containerType, processor, visited, metaDepth);
					if (result != null) {
						return result;
					}
				}
			}
		}
		catch (Throwable ex) {
			AnnotationUtils.handleIntrospectionFailure(element, ex);
		}
	}

	return null;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//搜索本注解及其注解的注解
private static &lt;T&gt; T searchWithGetSemanticsInAnnotations(
	@Nullable AnnotatedElement element,//含有注解的类
	List&lt;Annotation&gt; annotations, //被搜索的注解列表
	@Nullable Class&lt;? extends Annotation&gt; annotationType,//需要搜索的注解
	@Nullable String annotationName, //需要搜索的注解的全类名
	@Nullable Class&lt;? extends Annotation&gt; containerType,//可重复注解的容器对象(暂时看全部都是为null，功能未知)
	Processor&lt;T&gt; processor, //实现了Processor接口的接口类，通过Processor来对元素进行处理
	Set&lt;AnnotatedElement&gt; visited, //已经访问的元素：用set防止重复，并终止递归
	int metaDepth //注解深度，控制注解收集，processor只收集第一次拿到的结果
	) {

		for (Annotation annotation : annotations) {
			Class&lt;? extends Annotation&gt; currentAnnotationType = annotation.annotationType();
			//判断是否是jdk本身的注解:currentAnnotationType.getName()判断是否是java.lang.annotation开头
			if (!AnnotationUtils.isInJavaLangAnnotationPackage(currentAnnotationType)) {
				//判断类型一致，全类名一致、或者Processor接口alwaysProcesses决定必须执行process
				if (currentAnnotationType == annotationType ||
					currentAnnotationType.getName().equals(annotationName) ||
					processor.alwaysProcesses()) {
					T result = processor.process(element, annotation, metaDepth);
					if (result != null) {
						//Processor接口aggregates和metaDepth为0是决定是否要收集结果到processor
						if (processor.aggregates() &amp;&amp; metaDepth == 0) {
							processor.getAggregatedResults().add(result);
						}
						else {
							return result;
						}
					}
				}
				// Repeatable annotations in container?
				//全部为null，基本没啥用这个方法，功能未知，可能是@Repeatable注解?
				else if (currentAnnotationType == containerType) {
					for (Annotation contained : getRawAnnotationsFromContainer(element, annotation)) {
						T result = processor.process(element, contained, metaDepth);
						if (result != null) {
							processor.getAggregatedResults().add(result);
						}
					}
				}
			}
		}

		//递归搜索注解上的注解,递归搜索元注解，然后调用过postProcess后置处理
		for (Annotation annotation : annotations) {
			Class&lt;? extends Annotation&gt; currentAnnotationType = annotation.annotationType();
			//currentAnnotationType不是java.lang.annotation开头，annotationType, annotationName不是以java开头
			if (hasSearchableMetaAnnotations(currentAnnotationType, annotationType, annotationName)) {
				//递归搜索注解上的注解
				T result = searchWithGetSemantics(currentAnnotationType, annotationType,
						annotationName, containerType, processor, visited, metaDepth + 1);
				if (result != null) {
					//调用processor的后置处理结果处理结果
					processor.postProcess(element, annotation, result);
					//Processor接口aggregates和metaDepth为0是决定是否要收集结果到processor
					if (processor.aggregates() &amp;&amp; metaDepth == 0) {
						processor.getAggregatedResults().add(result);
					}
					else {
						return result;
					}
				}
			}
		}

		return null;
	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Processor接口实现类之一 MergedAnnotationAttributesProcessor
private static class MergedAnnotationAttributesProcessor implements Processor&lt;AnnotationAttributes&gt; {
		private final boolean classValuesAsString;
		private final boolean nestedAnnotationsAsMap;
		private final boolean aggregates;
		private final List&lt;AnnotationAttributes&gt; aggregatedResults;

		MergedAnnotationAttributesProcessor() {this(false, false, false);}

		MergedAnnotationAttributesProcessor(boolean classValuesAsString, boolean nestedAnnotationsAsMap) {
			this(classValuesAsString, nestedAnnotationsAsMap, false);
		}

		MergedAnnotationAttributesProcessor(boolean classValuesAsString, 
			boolean nestedAnnotationsAsMap, boolean aggregates) {
			this.classValuesAsString = classValuesAsString;
			this.nestedAnnotationsAsMap = nestedAnnotationsAsMap;
			this.aggregates = aggregates;
			this.aggregatedResults = (aggregates ? new ArrayList&lt;&gt;() : Collections.emptyList());
		}

		@Override
		public boolean alwaysProcesses() {return false;}

		@Override
		public boolean aggregates() {return this.aggregates;}

		@Override
		public List&lt;AnnotationAttributes&gt; getAggregatedResults() {
			return this.aggregatedResults;
		}

		@Override
		@Nullable
		public AnnotationAttributes process(@Nullable AnnotatedElement annotatedElement, Annotation annotation, int metaDepth) {
			return AnnotationUtils.retrieveAnnotationAttributes(annotatedElement, annotation,
					this.classValuesAsString, this.nestedAnnotationsAsMap);
		}

		@Override
		public void postProcess(@Nullable AnnotatedElement element, Annotation annotation, AnnotationAttributes attributes) {
			annotation = AnnotationUtils.synthesizeAnnotation(annotation, element);
			Class&lt;? extends Annotation&gt; targetAnnotationType = attributes.annotationType();

			// Track which attribute values have already been replaced so that we can short
			// circuit the search algorithms.
			Set&lt;String&gt; valuesAlreadyReplaced = new HashSet&lt;&gt;();

			for (Method attributeMethod : AnnotationUtils.getAttributeMethods(annotation.annotationType())) {
				String attributeName = attributeMethod.getName();
				String attributeOverrideName = AnnotationUtils.getAttributeOverrideName(attributeMethod, targetAnnotationType);

				// Explicit annotation attribute override declared via @AliasFor
				if (attributeOverrideName != null) {
					if (valuesAlreadyReplaced.contains(attributeOverrideName)) {
						continue;
					}

					List&lt;String&gt; targetAttributeNames = new ArrayList&lt;&gt;();
					targetAttributeNames.add(attributeOverrideName);
					valuesAlreadyReplaced.add(attributeOverrideName);

					// Ensure all aliased attributes in the target annotation are overridden. (SPR-14069)
					List&lt;String&gt; aliases = AnnotationUtils.getAttributeAliasMap(targetAnnotationType).get(attributeOverrideName);
					if (aliases != null) {
						for (String alias : aliases) {
							if (!valuesAlreadyReplaced.contains(alias)) {
								targetAttributeNames.add(alias);
								valuesAlreadyReplaced.add(alias);
							}
						}
					}

					overrideAttributes(element, annotation, attributes, attributeName, targetAttributeNames);
				}
				// Implicit annotation attribute override based on convention
				else if (!AnnotationUtils.VALUE.equals(attributeName) &amp;&amp; attributes.containsKey(attributeName)) {
					overrideAttribute(element, annotation, attributes, attributeName, attributeName);
				}
			}
		}
	}
AnnotationUtils
//检索注解里面的方法并返回AnnotationAttributes(非常常用)
static AnnotationAttributes retrieveAnnotationAttributes(
	@Nullable Object annotatedElement, 
	Annotation annotation,
	boolean classValuesAsString, 
	boolean nestedAnnotationsAsMap
	) {

	Class&lt;? extends Annotation&gt; annotationType = annotation.annotationType();
	AnnotationAttributes attributes = new AnnotationAttributes(annotationType);

	for (Method method : getAttributeMethods(annotationType)) {
		try {
			Object attributeValue = method.invoke(annotation);
			Object defaultValue = method.getDefaultValue();
			if (defaultValue != null &amp;&amp; ObjectUtils.nullSafeEquals(attributeValue, defaultValue)) {
				attributeValue = new DefaultValueHolder(defaultValue);
			}
			attributes.put(method.getName(),
					adaptValue(annotatedElement, attributeValue, classValuesAsString, nestedAnnotationsAsMap));
		}
		catch (Throwable ex) {
			if (ex instanceof InvocationTargetException) {
				Throwable targetException = ((InvocationTargetException) ex).getTargetException();
				rethrowAnnotationConfigurationException(targetException);
			}
			throw new IllegalStateException(&quot;Could not obtain annotation attribute value for &quot; + method, ex);
		}
	}

	return attributes;
}

//先从缓存里面去，没有则取出与传入接口的所有相关方法并设置为允许访问，最后把结果以 key 为annotationType 值为List&lt;Method&gt; attributeMethodsCache缓存起来，
static List&lt;Method&gt; getAttributeMethods(Class&lt;? extends Annotation&gt; annotationType) {
	List&lt;Method&gt; methods = attributeMethodsCache.get(annotationType);
	if (methods != null) {return methods;}
	methods = new ArrayList&lt;&gt;();
	for (Method method : annotationType.getDeclaredMethods()) {
		//(method != null &amp;&amp; method.getParameterCount() == 0 &amp;&amp; method.getReturnType() != void.class);
		if (isAttributeMethod(method)) {//判断是否是注解的方法
			ReflectionUtils.makeAccessible(method);
			methods.add(method);
		}
	}

	attributeMethodsCache.put(annotationType, methods);
	return methods;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>spring三级缓存
DefaultSingletonBeanRegistry
//从singletonObjects找
	// 在singletonsCurrentlyInCreation的单例，从earlySingletonObjects中找
	// allowEarlyReference，那么从singletonFactories找，并将对象singletonFactories放到earlySingletonObjects中
	protected Object getSingleton(String beanName, boolean allowEarlyReference) {
		Object singletonObject = this.singletonObjects.get(beanName);
		if (singletonObject == null &amp;&amp; isSingletonCurrentlyInCreation(beanName)) {
			synchronized (this.singletonObjects) {
				singletonObject = this.earlySingletonObjects.get(beanName);
				if (singletonObject == null &amp;&amp; allowEarlyReference) {
					ObjectFactory&lt;?&gt; singletonFactory = this.singletonFactories.get(beanName);
					if (singletonFactory != null) {
						singletonObject = singletonFactory.getObject();
						this.earlySingletonObjects.put(beanName, singletonObject);
						this.singletonFactories.remove(beanName);
					}
				}
			}
		}
		return singletonObject;
	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//从mergedBeanDefinitions中找到RootBeanDefinition
	protected RootBeanDefinition getMergedLocalBeanDefinition(String beanName) throws BeansException {
		RootBeanDefinition mbd = this.mergedBeanDefinitions.get(beanName);
		if (mbd != null) {return mbd;}
		return getMergedBeanDefinition(beanName, getBeanDefinition(beanName));//getBeanDefinition从beanDefinitionMap找BeanDefinition
	}
	protected RootBeanDefinition getMergedBeanDefinition(String beanName, BeanDefinition bd)
		throws BeanDefinitionStoreException {
		return getMergedBeanDefinition(beanName, bd, null);
	}
	//如果给定bean的定义是子bean定义，则通过与父bean合并返回给定bean的RootBeanDefinition
	//在mergedBeanDefinitions找-&gt;RootBeanDefinition类型则复制，否则之间创建
	// -&gt;从父容器的ConfigurableBeanFactory得到getMergedBeanDefinition，构造RootBeanDefinition，设置Scope
	//缓存到mergedBeanDefinitions
	protected RootBeanDefinition getMergedBeanDefinition(
			String beanName, BeanDefinition bd, @Nullable BeanDefinition containingBd)
			throws BeanDefinitionStoreException {

		synchronized (this.mergedBeanDefinitions) {
			RootBeanDefinition mbd = null;
			if (containingBd == null) {
				mbd = this.mergedBeanDefinitions.get(beanName);
			}

			if (mbd == null) {
				if (bd.getParentName() == null) {
					if (bd instanceof RootBeanDefinition) {
						mbd = ((RootBeanDefinition) bd).cloneBeanDefinition();
					}
					else {
						mbd = new RootBeanDefinition(bd);
					}
				}
				else {
					// Child bean definition: needs to be merged with parent.
					BeanDefinition pbd;
					try {
						String parentBeanName = transformedBeanName(bd.getParentName());
						if (!beanName.equals(parentBeanName)) {
							pbd = getMergedBeanDefinition(parentBeanName);
						}
						else {
							BeanFactory parent = getParentBeanFactory();
							if (parent instanceof ConfigurableBeanFactory) {
								pbd = ((ConfigurableBeanFactory) parent).getMergedBeanDefinition(parentBeanName);
							}
							else {
								throw new NoSuchBeanDefinitionException(parentBeanName,
										&quot;Parent name &#39;&quot; + parentBeanName + &quot;&#39; is equal to bean name &#39;&quot; + beanName +
										&quot;&#39;: cannot be resolved without a ConfigurableBeanFactory parent&quot;);
							}
						}
					}
					catch (NoSuchBeanDefinitionException ex) {
						throw new BeanDefinitionStoreException(bd.getResourceDescription(), beanName,
								&quot;Could not resolve parent bean definition &#39;&quot; + bd.getParentName() + &quot;&#39;&quot;, ex);
					}
					// Deep copy with overridden values.
					mbd = new RootBeanDefinition(pbd);
					mbd.overrideFrom(bd);
				}

				// Set default singleton scope, if not configured before.
				if (!StringUtils.hasLength(mbd.getScope())) {
					mbd.setScope(SCOPE_SINGLETON);
				}

				// A bean contained in a non-singleton bean cannot be a singleton itself.
				// Let&#39;s correct this on the fly here, since this might be the result of
				// parent-child merging for the outer bean, in which case the original inner bean
				// definition will not have inherited the merged outer bean&#39;s singleton status.
				if (containingBd != null &amp;&amp; !containingBd.isSingleton() &amp;&amp; mbd.isSingleton()) {
					mbd.setScope(containingBd.getScope());
				}

				// Cache the merged bean definition for the time being
				// (it might still get re-merged later on in order to pick up metadata changes)
				if (containingBd == null &amp;&amp; isCacheBeanMetadata()) {
					this.mergedBeanDefinitions.put(beanName, mbd);
				}
			}

			return mbd;
		}
	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>ClassUtils中计算class及其父类的所有符合的method的个数
public static int getMethodCountForName(Class&lt;?&gt; clazz, String methodName) {
		Assert.notNull(clazz, &quot;Class must not be null&quot;);
		Assert.notNull(methodName, &quot;Method name must not be null&quot;);
		int count = 0;
		Method[] declaredMethods = clazz.getDeclaredMethods();
		for (Method method : declaredMethods) {
			if (methodName.equals(method.getName())) {
				count++;
			}
		}
		Class&lt;?&gt;[] ifcs = clazz.getInterfaces();
		for (Class&lt;?&gt; ifc : ifcs) {
			count += getMethodCountForName(ifc, methodName);
		}
		if (clazz.getSuperclass() != null) {
			count += getMethodCountForName(clazz.getSuperclass(), methodName);
		}
		return count;
	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class RootBeanDefinition extends AbstractBeanDefinition,BeanMetadataAttributeAccessor,AttributeAccessorSupport
	implements BeanDefinition,Cloneable,BeanMetadataElement,AttributeAccessor,Serializable{
	
	//RootBeanDefinition
	private BeanDefinitionHolder decoratedDefinition;
	private AnnotatedElement qualifiedElement;
	boolean allowCaching = true;
	boolean isFactoryMethodUnique = false;
	volatile ResolvableType targetType;
	volatile Class&lt;?&gt; resolvedTargetType;//包可见的字段，用于缓存给定bean定义的确定类
	volatile ResolvableType factoryMethodReturnType;//包可见字段，用于缓存泛型工厂方法的返回类型

	final Object constructorArgumentLock = new Object();下面四个构造函数字段的公共锁
	Executable resolvedConstructorOrFactoryMethod;//包可见字段，用于缓存已解析的构造函数或工厂方法
	boolean constructorArgumentsResolved = false;//包可见的字段，将构造函数参数标记为已解析
	Object[] resolvedConstructorArguments;//包可见的字段，用于缓存完全解析的构造函数参数
	Object[] preparedConstructorArguments;//包可见的字段，用于缓存部分准备的构造函数参数

	final Object postProcessingLock = new Object();//下面两个后处理字段的通用锁
	boolean postProcessed = false;//包可见的字段，指示已经应用了MergedBeanDefinitionPostProcessor
	volatile Boolean beforeInstantiationResolved;//包可见字段，指示实例化前的后处理程序已经启动

	private Set&lt;Member&gt; externallyManagedConfigMembers;
	private Set&lt;String&gt; externallyManagedInitMethods;
	private Set&lt;String&gt; externallyManagedDestroyMethods;

	//AbstractBeanDefinition
	private String scope = SCOPE_DEFAULT;
	public static final String SCOPE_DEFAULT = &quot;&quot;;//@Scope相关,除非被父bean定义覆盖，否则等同于单例状态
	public static final int AUTOWIRE_NO = AutowireCapableBeanFactory.AUTOWIRE_NO;//常数，表示根本没有外部自动装配
	public static final int AUTOWIRE_BY_NAME = AutowireCapableBeanFactory.AUTOWIRE_BY_NAME;//常量，按名称指示自动装配bean属性
	public static final int AUTOWIRE_BY_TYPE = AutowireCapableBeanFactory.AUTOWIRE_BY_TYPE;//按类型指示自动装配bean属性的常量
	public static final int AUTOWIRE_CONSTRUCTOR = AutowireCapableBeanFactory.AUTOWIRE_CONSTRUCTOR;//常量，指示自动装配构造函数
	@Deprecated
	public static final int AUTOWIRE_AUTODETECT = AutowireCapableBeanFactory.AUTOWIRE_AUTODETECT;//常量，指示通过bean类的内省来确定适当的自动装配策略

	public static final int DEPENDENCY_CHECK_NONE = 0;//表示根本没有依赖项检查的常量
	public static final int DEPENDENCY_CHECK_OBJECTS = 1;//常量，指示对对象引用进行依赖项检查
	public static final int DEPENDENCY_CHECK_SIMPLE = 2;//常量，指示对“简单”属性的依赖项检查
	public static final int DEPENDENCY_CHECK_ALL = 3;//常量，指示对所有属性进行依赖项检查
	public static final String INFER_METHOD = &quot;(inferred)&quot;;//常量，指示容器应该尝试推断bean的销毁方法名，而不是显式地指定方法名 
	//@Value专门设计为在方法名中包含否则不合法的字符 确保与具有相同名称的合法命名方法不发生冲突


	private volatile Object beanClass;
	private boolean abstractFlag = false;
	private boolean lazyInit = false;
	private int autowireMode = AUTOWIRE_NO;
	private int dependencyCheck = DEPENDENCY_CHECK_NONE;
	private String[] dependsOn;

	private boolean autowireCandidate = true;//是否被认为是自动类型装配，不影响名字装配
	private boolean primary = false;//优先被依赖的类@primary/primary标签
	private final Map&lt;String, AutowireCandidateQualifier&gt; qualifiers = new LinkedHashMap&lt;&gt;();
	private Supplier&lt;?&gt; instanceSupplier;
	private boolean nonPublicAccessAllowed = true;
	private boolean lenientConstructorResolution = true;//使多个构造函数的参数数量相同、类型存在父子类、接口实现类关系也能正常创建bean

	private String factoryBeanName;
	private String factoryMethodName;

	private ConstructorArgumentValues constructorArgumentValues;
	private MutablePropertyValues propertyValues;
	private MethodOverrides methodOverrides = new MethodOverrides();//@lookup/&lt;lookup-method&gt;

	private String initMethodName;//&lt;init-method&gt;/@PostConstruct(java自己的注解)
	private String destroyMethodName;//&lt;destroy-method&gt;/@PreDestroy(java自己的注解)
	private boolean enforceInitMethod = true;//是否执行init-method，程序设置
	private boolean enforceDestroyMethod = true;//是否执行destroy-method，程序设置
	
	private boolean synthetic = false;//非应用自己定义的，类似Aop产生的对象

	private int role = BeanDefinition.ROLE_APPLICATION;
	//BeanDefinition
	int ROLE_APPLICATION = 0;//用户定义的bean
	int ROLE_SUPPORT = 1;//指示BeanDefinition是某个较大配置(通常是外部组件定义)的支持部分。
	int ROLE_INFRASTRUCTURE = 2;//内部注册的bean类似internalConfigurationAnnotationProcessor
	//------------

	private String description;//@Description或者&lt;description&gt;
	private Resource resource;//来源的文件

	//BeanMetadataAttributeAccessor-----------------------------------------------------------------
	private Object source;
	
	//AttributeAccessorSupport-----------------------------------------------------------------
	/** Map with String keys and Object values */
	private final Map&lt;String, Object&gt; attributes = new LinkedHashMap&lt;&gt;();

	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function et(it,at){const e=o("ExternalLinkIcon");return s(),l("div",null,[c,t("p",null,[n("public class AnnotatedBeanDefinitionReader{"),u,n(" // 1.getOrCreateEnvironment判断registry是否实现了ConfigurableEnvironment接口，没有实现环境的接口的话返回默认实现的环境StandardEnvironment"),v,n(" // 2.(1)将registry赋值给当前对象"),m,n(" //(2)给当前对象创建conditionEvaluator（"),b,n(" // conditionEvaluator对象初始化属性 ConditionContextImpl"),p,n(" //registry 直接赋值"),Q,n(" // resourceLoader : 取出传递的resourceLoader(null)的ClassLoader或者是beanFactory的BeanClassLoader,最后才返回getDefaultClassLoader"),T,n(" // beanfactory属性：取出ConfigurableListableBeanFactory接口或ConfigurableApplicationContext接口的BeanFactory）"),g,n(" // 取出实现EnvironmentCapable接口的environment，否则使用StandardEnvironment"),f,n(" //取出ResourceLoader接口的资源配置类,否则使用DefaultResourceLoader"),h,n(" //(3)给当前对象registry注册AnnotationConfigProcessors"),A,n(" //将registry强转为DefaultListableBeanFactory并设置AnnotationAwareOrderComparator和ContextAnnotationAutowireCandidateResolver属性"),y,t("a",C,[n("//将org.springframework.context.annotation.internalConfigurationAnnotationProcessor//注解后置处理器"),i(e)]),D,t("a",B,[n("//org.springframework.context.annotation.internalAutowiredAnnotationProcessor"),i(e)]),n('"'),S,t("a",N,[n("//org.springframework.context.annotation.internalRequiredAnnotationProcessor"),i(e)]),R,t("a",x,[n("//org.springframework.context.annotation.internalCommonAnnotationProcessor"),i(e)]),L,t("a",M,[n("//org.springframework.context.event.internalEventListenerProcessor"),i(e)]),P,t("a",E,[n("//org.springframework.context.event.internalEventListenerFactory"),i(e)]),w,n(" // 放入到registry中"),_,n(" private final BeanDefinitionRegistry registry;"),H,n(" private ConditionEvaluator conditionEvaluator;"),O,n(" private ScopeMetadataResolver scopeMetadataResolver = new AnnotationScopeMetadataResolver();"),F,n(" private BeanNameGenerator beanNameGenerator = new AnnotationBeanNameGenerator();"),q,n(" public AnnotatedBeanDefinitionReader(BeanDefinitionRegistry registry) {"),I,n(" this(registry, getOrCreateEnvironment(registry));"),Z,n(" }")]),j,t("p",null,[n("public abstract class ClassUtils {"),U,n(" private static final char PACKAGE_SEPARATOR = '.';"),k,n(" private static final char INNER_CLASS_SEPARATOR = '"),t("mjx-container",V,[(s(),l("svg",G,W)),J]),t("mjx-container",Y,[(s(),l("svg",K,$)),tt]),n('$";')]),nt])}const rt=r(d,[["render",et],["__file","spring.html.vue"]]),ot=JSON.parse('{"path":"/backend/java/spring.html","title":"Spring","lang":"zh-CN","frontmatter":{"title":"Spring","date":"2023-01-01T00:00:00.000Z","tags":"sourcecode","categories":"源码","description":"spring源码 1. AnnotationConfigApplicationContext extends GenericApplicationContext,AbstractApplicationContext,DefaultResourceLoader implements AnnotationConfigRegistry,BeanDefinit...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/backend/java/spring.html"}],["meta",{"property":"og:site_name","content":"JavaGuide"}],["meta",{"property":"og:title","content":"Spring"}],["meta",{"property":"og:description","content":"spring源码 1. AnnotationConfigApplicationContext extends GenericApplicationContext,AbstractApplicationContext,DefaultResourceLoader implements AnnotationConfigRegistry,BeanDefinit..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T01:56:33.000Z"}],["meta",{"property":"article:author","content":"HeChuangJun"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T01:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T01:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeChuangJun\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[],"git":{"createdTime":1733536593000,"updatedTime":1733536593000,"contributors":[{"name":"HeChuangJun","email":"1105128664@qq.com","commits":1}]},"readingTime":{"minutes":30.15,"words":9045},"filePathRelative":"backend/java/spring.md","localizedDate":"2023年1月1日","excerpt":"<p>spring源码</p>\\n<!--more-->\\n<!-- TOC -->\\n<!-- /TOC -->\\n<h1>1. AnnotationConfigApplicationContext extends GenericApplicationContext,AbstractApplicationContext,DefaultResourceLoader</h1>\\n<p>implements AnnotationConfigRegistry,BeanDefinitionRegistry,ConfigurableApplicationContext,AliasRegistry,ApplicationContext,Lifecycle,Closeable<br>\\nEnvironmentCapable, ListableBeanFactory, HierarchicalBeanFactory,MessageSource, ApplicationEventPublisher, ResourcePatternResolver,BeanFactory,ResourceLoader,AutoCloseable<br>\\npublic class AnnotationConfigApplicationContext extends GenericApplicationContext implements AnnotationConfigRegistry{<br>\\nprivate final AnnotatedBeanDefinitionReader reader;</p>","autoDesc":true}');export{rt as comp,ot as data};
