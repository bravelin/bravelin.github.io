import{_ as t,q as o,s as r,h as a,o as i,e}from"./index-Gk4_0vGT.js";const s={};function u(p,l){const n=a("MyArticle");return i(),o(n,{title:"Java学习笔记之七：集合(2)",date:"2024年03月17日"},{default:r(()=>l[0]||(l[0]=[e("div",{class:"_article-content"},[e("p",null,"通过使用视图可以得到其他实现了Collection接口或者Map接口的对象。"),e("p",null,"Java9引入了一些静态方法，可以生成给定元素的集或列表，以及给定键/值对的映射："),e("pre",null,[e("code",null,`List<String> names = List.of("Peter", "Paul", "Mary");
Set<Integer> numbers = Set.of(1, 2, 3, 4, 5);
Map<String, Integer> scores = Map.of("Peter", 100, "Paul", 200, "Mary", 300);`)]),e("p",null,"元素、键或值不能为null，集和映射键不能重复。对于这些集和映射中的迭代顺序，并没有任何保证。"),e("p",null,"这些集合对象是不可修改的，如果试图改变它们的内容，会导致一个UnsupportedOperationException异常。如果需要一个可更改的集合，可以把这个不可修改的集合传递到构造器："),e("pre",null,[e("code",null,'var names = new ArrayList<>(List.of("Peter", "Paul", "Mary"));')]),e("p",null,"下面的调用将创建一个包含100个字符串的List，每个字符串包含“DEFAULT”："),e("pre",null,[e("code",null,'List<String> arr = Collections.nCopies(100, "DEFAULT");')]),e("p",null,"为了建立一个集合的不可修改的副本，可以使用集合类型的copyOf方法："),e("pre",null,[e("code",null,`ArrayList<String> names = ...
Set<String> nameSet = Set.copyOf(names);
List<String> nameList = List.copyOf(names);`)]),e("p",null,"每个copyOf方法都会建立集合的一个副本，如果修改了原集合，这个副本不受影响。"),e("p",null,"如果原集合恰好是不可修改的，而且类型正确，copyOf则会直接返回原集合："),e("pre",null,[e("code",null,`Set<String> names = Set.Of("Peter", "Paul", "Mary");
Set<String> nameSet = Set.copyOf(names); // nameSet == names`)]),e("p",null,"Collections类还有一些方法可以生成集合的不可修改的视图，这些视图对现有集合增加了一个运行时检查。如果检测到试图修改不可修改的集合，就抛出一个异常。如果原集合改变，视图会反映这些变化。"),e("pre",null,[e("code",null,`Collections.unmodifiableCollection
Collections.unmodifiableList
Collections.unmodifiableSet
Collections.unmodifiableMap
Collections.unmodifiableNavigableSet
Collections.unmodifiableSortedSet
Collections.unmodifiableNavigableMap
Collections.unmodifiableSortedMap`)]),e("p",null,"每个方法都定义为处理一个接口，Collections.unmodifiableList可以处理ArrayList、LinkedList或者实现了List接口的任何其他类。"),e("pre",null,[e("code",null,`var staff = new LinkedList<String>();
......
lookAt(Collections.unmodifiableList(staff));`)]),e("p",null,"不可修改的视图并不会让集合本身变为不可变。视图只是包装了接口而不是具体的集合对象，所以只能访问接口中定义的方法。"),e("p",null,"可以为很多集合建立子范围视图："),e("pre",null,[e("code",null,"List<Employee> group = staff.subList(10, 20);")]),e("p",null,"第一个索引包含在内，而不包含第二个索引。可以对子范围应用任何操作，而且这些操作会自动反映到整个列表，例如，可以删除子范围："),e("pre",null,[e("code",null,"group.clear(); // 元素会自动地从staff删除")]),e("p",null,"对于有序集和映射，可以使用排序顺序而不是元素位置建立子范围，SortedSet接口声明了3个方法："),e("pre",null,[e("code",null,`SortedSet<E> subSet(E from, E to);
SortedSet<E> headSet(E to);
SortedSet<E> tailSet(E from);`)]),e("p",null,"这些方法将返回大于等于from且小于to的所有元素构成的子集。SortedMap也有类似的接口："),e("pre",null,[e("code",null,`SortedMap<E> subMap(E from, E to);
SortedMap<E> headMap(E to);
SortedMap<E> tailMap(E from);`)]),e("p",null,"这些方法会返回映射的视图，其中包含落在指定范围内的键相应的所有元素。"),e("p",null,"Java6引人的NavigableSet接口允许对这些子范围操作有更多控制，可以指定是否包括边界："),e("pre",null,[e("code",null,`NavigableSet<E> subSet(E from, boolean fromInclusive, E to, boolean toInclusive);
NavigableSet<E> headSet(E to, boolean toInclusive);
NavigableSet<E> tailSet(E from, boolean fromInclusive);`)]),e("p",null,"检查型视图（Checked View）是集合框架中用于增强类型安全性的重要机制，它通过动态类型检查，确保集合操作时元素的类型符合预期："),e("pre",null,[e("code",null,`List<String> safeList = Collections.checkedList(new ArrayList<>(), String.class);
safeList.add("Test"); // 正常
safeList.add(123); // 抛出 ClassCastException`)]),e("p",null,"Java提供Collections类的多个方法创建检查型视图："),e("pre",null,[e("code",null,`checkedCollection()
checkedList()
checkedMap()
checkedNavigableMap()
checkedNavigableSet()
checkedQueue()
checkedSet()
checkedSortedMap()
checkedSortedSet()`)]),e("p",null,"如果从多个线程访问集合，就必须确保集合不会被意外地破坏。如果一个线程试图为散列表增加元素，同时另一个线程正在对元素进行再散列，则结果将混乱。"),e("p",null,"类库的设计者使用视图机制来确保常规集合是线程安全的，例如Collections类的静态synchronizedMap方法可以将任何一个映射转换成有同步访问方法的Map："),e("pre",null,[e("code",null,"var map = Collections.synchronizedMap(new HashMap<String, Employee>());")]),e("p",null,"这样就可以从多线程访问这个Map对象，get和put方法是同步的，即每个方法调用必须完全结束，另一个线程才能调用另一个方法。"),e("p",null,"Collections类中的sort方法可以对实现了List接口的集合进行排序："),e("pre",null,[e("code",null,`var staff = new LinkedList<String>();
Collections.sort(staff); // 假定列表元素实现了Comparable接口`)]),e("p",null,"也可以传入Comparator对象："),e("pre",null,[e("code",null,`staff.sort(Comparator.comparingDouble(Employee::getSalary));
staff.sort(Comparator.comparingDouble(Employee::getSalary).reversed()); // 倒序`)]),e("p",null,"集合类库中使用的排序算法比快速排序要慢一些，优点是它是稳定的算法，不会改变相等元素的顺序。"),e("p",null,"Collections类的shuffle算法，其功能与排序刚好相反，它会随机地混排列表中元素的顺序："),e("pre",null,[e("code",null,`ArrayList<Card> cards = ....;
Collections.shuffle(cards);`)]),e("p",null,"Collections类的binarySearch方法实现了二分查找算法，注意集合必须有序，否则算法会返回错误的答案。"),e("pre",null,[e("code",null,`i = Collections.binarySearch(c, element);
i = Collections.binarySearch(c, element, comparator); // 使用自定义的比较器`)]),e("p",null,"如果返回一个非负的值，这表示匹配对象的索引；如果返回负值，则表示没有匹配的元素。"),e("p",null,"负值可以用来计算应该将element插入集合的哪个位置，以保持集合的有序性，插入的位置是："),e("pre",null,[e("code",null,"insertionPoint = -i - 1;")]),e("p",null,"只有采用随机访问方式，二分查找才有意义。如果为binarySearch算法提供了一个链表，它将退化为线性查找。"),e("p",null,"批操作："),e("pre",null,[e("code",null,`coll1.removeAll(coll2); // 将从coll1中删除coll2中出现的所有元素
coll1.retainAll(coll2); // 将从coll1中删除所有未在coll2中出现的元素`)]),e("p",null,"求两个集合的交集："),e("pre",null,[e("code",null,`var result = new HashSet<String>(firstSet);
result.retainAll(secondSet);`)]),e("p",null,"集合与数组之间的转换："),e("pre",null,[e("code",null,`// 将数组转换为集合
String[] names = {"Tom", "Dick", "Harry"};
List<String> list = List.of(names);

// 从集合到数组
Object[] names = staff.toArray();
String[] names = staff.toArray(new String[0]); // JDK11之前
String[] names = staff.toArray(String[]::new); // 传入一个数组构造器表达式`)]),e("h3",{class:"title"},"属性映射Properties"),e("p",null,"是一个特殊类型的映射结构：它的键与值都是字符串；这个映射可以很容易地保存到文件以及从文件加载；有一个二级表存放默认值。"),e("pre",null,[e("code",null,`var setting = new Properties();
settings.setProperty("width", "640.00");
settings.setProperty("filename", "/home/user/data.txt");

// 保存到一个文件中
var out = new FileWriter("settings.properties", StandardCharsets.UTF_8);
setting.store(out, "Settings");

// 从文件中加载
var in = new FileReader("settings.properties", StandardCharsets.UTF_8);
setting.load(in);`)]),e("p",null,"读取属性可以提供默认值："),e("pre",null,[e("code",null,'String filename = settings.getProperty("filename", "");')]),e("p",null,"也可以将所有默认值都放在一个二级属性映射中，井在主属性映射的构造器中提供这个二级映射："),e("pre",null,[e("code",null,`var defaultSetting = new Properties();
defaultSetting.setProperty("width", "640.00");
defaultSetting.setProperty("filename", "/home/user/data.txt");
var setting = new Properties(defaultSetting);`)]),e("p",null,"System.getProperties方法会生成一个Properties对象来描述系统信息："),e("pre",null,[e("code",null,`Properties props = System.getProperties();
String userHome = props.getProperty("user.home");
String jdkVersion = props.getProperty("java.version");
System.out.println("userHome：" + userHome); // userHome：C:\\Users\\Administrator
System.out.println("jdkVersion：" + jdkVersion); // jdkVersion：17`)])],-1)])),_:1})}const d=t(s,[["render",u]]);export{d as default};
