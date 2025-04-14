import{_ as t,q as o,s as i,h as a,o as s,e}from"./index-DvbT3Ksl.js";const r={};function u(c,n){const l=a("MyArticle");return s(),o(l,{title:"Java学习笔记之七：集合(2)",date:"2024年03月17日"},{default:i(()=>n[0]||(n[0]=[e("div",{class:"_article-content"},[e("p",null,"通过使用视图可以得到其他实现了Collection接口或者Map接口的对象。"),e("p",null,"Java9引入了一些静态方法，可以生成给定元素的集或列表，以及给定键/值对的映射："),e("pre",null,[e("code",null,`List<String> names = List.of("Peter", "Paul", "Mary");
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
lookAt(Collections.unmodifiableList(staff));`)]),e("p",null,"不可修改的视图并不会让集合本身变为不可变。视图只是包装了接口而不是具体的集合对象，所以只能访问接口中定义的方法。"),e("p",null,"可以为很多集合建立子范围视图："),e("pre",null,[e("code",null,"List<Employee> group = staff.subList(10, 20);")]),e("p",null,"第一个索引包含在内，而不包含第二个索引。可以对子范围应用任何操作，而且这些操作会自动反映到整个列表，")],-1)])),_:1})}const f=t(r,[["render",u]]);export{f as default};
