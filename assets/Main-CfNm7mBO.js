import{_ as r,q as a,s as i,h as o,o as u,e,x as l}from"./index-BMi8E4Cr.js";const s={};function d(p,t){const n=o("MyArticle");return u(),a(n,{title:"Java学习笔记之七：集合(1)",date:"2024年03月13日"},{default:i(()=>t[0]||(t[0]=[e("div",{class:"_article-content"},[e("p",null,"Java集合类库也将接口与实现分离。集合类的基本接口是Collection接口："),e("pre",null,[e("code",null,`public interface Collection<E>{
    boolean add(E element);
    Iterator<E> iterator();
}`)]),e("p",null,"add方法用于向集合中添加元素，如果添加元素确实改变了集合就返回true，如果集合没有发生变化就返回false。iterator方法用于返回一个实现了Iterator接口的对象。可以使用这个迭代器对象依次访问集合中的元素。"),e("p",null,"Iterator接口包含4个方法："),e("pre",null,[e("code",null,`public interface Iterator<E>{
    boolean hasNext();
    E next();
    void remove();
    default void forEachRemaining(Consumer<? super E> action);
}`)]),e("p",null,"在调用next之前需要调用hasNext方法："),e("pre",null,[e("code",null,`Collection<String> c = ....;
Iterator<String> it = c.iterator();
while(it.hasNext()){
    String s = it.next();
    //do something
}`)]),e("p",null,"也可以使用for each循环："),e("pre",null,[e("code",null,"for (String element : c){ do something }")]),e("p",null,"对于标准类库中的任何集合都可以使用for each循环。"),e("p",null,"也可以调用forEachRemaining方法并提供一个lambda表达式，将对迭代器的每一个元素调用这个lambda表达式，直到再没有元素为止："),e("pre",null,[e("code",null,"iterator.forEachRemaining(element -> do something);")]),e("p",null,"Iterator接口的remove方法会删除上次调用next方法返回的元素。调用remove之前没有调用next，将是不合法的，如果这样做，会抛出一个IllegalStateException异常。"),e("pre",null,[e("code",null,`ArrayList<String> arr = new ArrayList<String>();
                Iterator iterator = arr.iterator();
arr.add("a1");
arr.add("b2");
iterator.next();
iterator.remove(); //将删除a1`)]),e("p",null,"Collection接口中的其他方法："),e("pre",null,[e("code",null,`int size();
boolean isEmpty();
boolean contains(Object o);
boolean containsAll(Collection<?> c);// 如果这个集合中包含other集合中的所有元素，返回true
boolean equals(Object other);
boolean addAll(Collection<? extends E> c);
boolean remove(Object o); // 从这个集合中删除等于o的对象，如果有匹配的对象被删除，返回true
boolean removeAll(Collection<?> c);
void clear();
boolean retainAll(Collection<?> other);// 从这个集合中删除所有与other集合中元素不同的元素
Object[] toArray();
boolean removeIf(Predicate<? spuer E> filter); // 从这个集合删除让filter返回true的所有元素`)]),e("p",null,"集合框架中的接口继承关系："),e("figure",{class:"common"},[e("a",{class:"pswp-img",href:"https://gitee.com/bravelin/pics/raw/master/article/202503130839.webp","data-pswp-width":"1077","data-pswp-height":"848",target:"_blank"},[e("img",{class:"thumbnail-img",src:"https://gitee.com/bravelin/pics/raw/master/article/202503130839.webp"})])]),e("p",null,"Map包含键/值对，要用put方法在Map中添加元素："),e("pre",null,[e("code",null,"V put(V key, V value);")]),e("p",null,"List是一个有序集合；Set接口等同于Collection，但Set的add方法不允许增加重复的元素。"),e("p",null,"Java类库中的具体集合："),e("table",{class:"inner-table"},[e("thead",null,[e("tr",null,[e("th",{style:{width:"20%"}},"类型"),e("th",null,"描述")])]),e("tbody",null,[e("tr",null,[e("td",null,"ArrayList"),e("td",null,"可以动态增氏和缩减的一个索引序列")]),e("tr",null,[e("td",null,"LinkedList"),e("td",null,"可以在任意位置高效插入和删除的一个有序序列")]),e("tr",null,[e("td",null,"ArrayDeque"),e("td",null,"实现为循环数组的一个双端队列")]),e("tr",null,[e("td",null,"HashSet"),e("td",null,"没有重复元素的一个无序集合")]),e("tr",null,[e("td",null,"TreeSet"),e("td",null,"一个有序集")]),e("tr",null,[e("td",null,"EnumSet"),e("td",null,"一个包含枚举类型值的集")]),e("tr",null,[e("td",null,"LinkedHashSet"),e("td",null,"一个可以记住元素插入次序的集")]),e("tr",null,[e("td",null,"PriorityQueue"),e("td",null,"允许高效删除最小元素的一个集合")]),e("tr",null,[e("td",null,"HashMap"),e("td",null,"存储键/值关联的一个数据结构")]),e("tr",null,[e("td",null,"TreeMap"),e("td",null,"键有序的一个映射")]),e("tr",null,[e("td",null,"EnumMap"),e("td",null,"键属于枚举类型的一个映射")]),e("tr",null,[e("td",null,"LinkedHashMap"),e("td",null,"可以记住键/值项添加次序的一个映射")]),e("tr",null,[e("td",null,"WeakHashMap"),e("td",null,"这个映射中的值如果不在别处使用，就会被垃圾回收器回收")]),e("tr",null,[e("td",null,"IdentityHashMap"),e("td",null,"用==而不是用equals比较键的一个映射")])])]),e("p",null,"以Map结尾的类实现了Map接口，其他类都实现了Collection接口。"),e("figure",{class:"common"},[e("a",{class:"pswp-img",href:"https://gitee.com/bravelin/pics/raw/master/article/202503130914.webp","data-pswp-width":"839","data-pswp-height":"901",target:"_blank"},[e("img",{class:"thumbnail-img",src:"https://gitee.com/bravelin/pics/raw/master/article/202503130914.webp"})])]),e("h3",{class:"title"},"LinkedList类"),e("p",null,"在Java程序设计语言中，所有链表实际上都有双向链接（doubly linked），即每个链接存储着其前驱和后驱的引用。"),e("p",null,"LinkedList是一个有序集合，LinkedList.add方法将对象添加到链表的尾部；如果需要在中间添加元素，需要使用ListIterator接口："),e("pre",null,[e("code",null,`LinkedList staff = new LinkedList<String>();
staff.add("Amy");
staff.add("Bob");
staff.add("Carl");
ListIterator<String> iterator = staff.listIterator();
iterator.next();
iterator.add("Dave"); // Amy、Dave、Bob、Carl`)]),e("p",null,"ListIterator接口有两个方法可以用来反向遍历链表："),e("pre",null,[e("code",null,`E previouse();
boolean hasPrevious();`)]),e("p",null,"ListIterator接口的set方法会用一个新元素替换调用next或者previous方法返回的上一个元素："),e("pre",null,[e("code",null,`ListIterator<String> iterator = staff.listIterator();
iterator.next();
iterator.set("cycle");`)]),e("p",null,"如果一个迭代器发现它的集合被另一个迭代器修改了，或是被该集合后身的某个方法修改了，就会抛出一个ConcurrentModificationException异常。"),e("p",null,"LinkedList类提供了一个get方法，用来访问某个特定元素，但效率不高："),e("pre",null,[e("code",null,`LinkedList staff = new LinkedList<String>();
......
String str = staff.get(n);`)]),e("p",null,"使用链表的唯一理由是尽可能地减少在列表中间插入或删除元素的开销。"),e("p",null,"iterator的指向顺序不会动态改变："),e("pre",null,[e("code",null,`LinkedList<String> arr1 = new LinkedList<String>();
arr1.add("a");
arr1.add("b");
arr1.add("c");
ListIterator<String> iterator1 = arr1.listIterator();

LinkedList<String> arr2 = new LinkedList<String>();
arr2.add("u");
arr2.add("p");
arr2.add("w");
arr2.add("z");
ListIterator<String> iterator2 = arr2.listIterator();

while (iterator2.hasNext()) {
    if (iterator1.hasNext()) {
        iterator1.next();
    }
    iterator1.add(iterator2.next());
}
System.out.println(arr1.toString()); // [a, u, b, p, c, w, z]`)]),e("h3",{class:"title"},"ArrayList类"),e("p",null,"ArrayList封装了一个动态再分配的对象数组。Vector类的所有方法都是同步的，可以安全地从两个线程访问一个Vector对象，ArrayList方法是不同步的，不需要同步时建议使用ArrayList。"),e("h3",{class:"title"},"散列集"),e("p",null,"散列表为每个对象计算一个整数，称为散列码（hash code）。散列码是以某种方式由对象的实例字段得出的一个整数，这种方式可以尽可能保证有不同数据的对象将生成不同的散列码。"),e("p",null,"散列表实现为链表数组，每个列表被称为桶。要想查找一个对象在表中的位置，就要先计算它的散列码，然后与桶的总数取余, 所得到的数就是保存这个元素的那个桶的索引。如果桶中没有其他元素，此时将元素直接插人这个桶中就可以了，有时候会遇到桶已经填充了元素的情况，这种现象被称为散列冲突。需要将新对象与那个桶中的所有对象进行比较，查看这个对象是否已经存在。"),e("figure",{class:"common"},[e("a",{class:"pswp-img",href:"https://gitee.com/bravelin/pics/raw/master/article/202503131107.webp","data-pswp-width":"567","data-pswp-height":"432",target:"_blank"},[e("img",{class:"thumbnail-img",src:"https://gitee.com/bravelin/pics/raw/master/article/202503131107.webp"})])]),e("p",null,"散列表的键要尽可能属于一个实现了Comparable接口的类，就能保证不会由于散列码分布不均而导致性能低下。"),e("p",null,"可以指定一个初始的桶数，桶数是指用于收集有相同散列值的桶的数目，如果要插入到散列表中的元素太多，冲突数就会增加，这会降低检索性能。"),e("p",null,"通常，要将桶数设置为预计元素个数的75%~150%。如果散列表太满，就需要再散列（rehashed）：创建一个桶数更多的表，并将所有元素插人这个新表中，然后丢弃原来的表。装填因子可以确定何时对散列表进行再散列。如果装填因子为0.75（默认值），而表中已经填满了75%以上，就会自动再散列，新表的桶数是原来的两倍。"),e("p",null,"集是没有重复元素的元素集合。集的add方法首先尝试在这个集中查找要添加的对象，只有这个元素不存在时才会添加这个对象。"),e("pre",null,[e("code",null,"var words = new HashSet<String>();")]),e("p",null,"TreeSet类与散列集十分类似，不过，它比散列集有所改进。树集是一个有序集合，可以以任意顺序将元素插入集合中。在对集合进行遍历时，值将自动地按照排序后的顺序出现。"),e("pre",null,[e("code",null,`TreeSet<String> arr1 = new TreeSet<String>();
arr1.add("Bob");
arr1.add("Amy");
arr1.add("Carl");
System.out.println(arr1.toString()); // [Amy, Bob, Carl]`)]),e("p",null,"排序是用红黑树数据结构完成的。每次将一个元素添加到树中时，都会将其放置在正确的排序位置上，因此，迭代器总是以有序的顺序访问每个元素。"),e("p",null,[l("将一个元素添加到树中要比添加到散列表中慢，但是，与检查数组或链表中的重复元素相比，使用树还是会快得多。如果树中包含n个元素，查找新元素的正确位置平均需要log"),e("sub",null,"2"),l("N次比较。")]),e("h3",{class:"title"},"队列"),e("p",null,"队列允许高效地在队尾添加元素，并在队头删除元素。双端队列在队头和队尾都能高效地添加或删除元素。不支持在队列中问添加元素。ArrayDeque和LinkedList类实现了Deque接口，这两个类都可以提供双端队列，其大小可以根据需要扩展。"),e("p",null,"优先队列中的元素可以按照任意的顺序插入，但会按照有序的顺序获取。也就是说，调用remove方法时，总会获得当前优先队列中最小的元素。内部利用了堆这种数据结构。堆是一个自组织的二叉树，其添加和删除操作会让最小的元素移动到根。"),e("p",null,"优先队列的题型用法是任务调度。每一个任务有一个优先级，任务以随机顺序添加到队列中，每当启动一个新的任务时，将从队列中删除优先级最高的任务。"),e("pre",null,[e("code",null,`PriorityQueue<LocalDate> arr1 = new PriorityQueue<LocalDate>();
arr1.add(LocalDate.of(1988, 4, 20));
arr1.add(LocalDate.of(1980, 2, 20));
arr1.add(LocalDate.of(1990, 1, 20));
arr1.add(LocalDate.of(1950, 1, 20));
System.out.println(arr1.toString());
while (!arr1.isEmpty()) {
    System.out.println(arr1.remove()); // 依次输出：1950-01-20, 1980-02-20, 1988-04-20, 1990-01-20
}`)]),e("h3",{class:"title"},"映射"),e("p",null,"映射用来存放键/值对，如果提供了键，可以查找一个值。HashMap散列映射对键进行散列，TreeMap树映射根据键的顺序将它们组织为一个搜索树。散列或比较函数只应用于键，与键关联的值不进行散列或比较。"),e("p",null,"如果不需要按照有序的顺序访问键，最好选择散列映射。"),e("pre",null,[e("code",null,`var staff = new HashMap<String, Employee>();
var lucy = new Employee("Lucy", 10000);
staff.put("999-098-187", lucy);

String id = "999-098-187";
Employee e = staff.get(id);`)]),e("p",null,"如果映射中没有存储与指定键对应的信息，get将返回null。"),e("p",null,"有时对于没有出现在映射中的键，可以有一个合适的默认值，可以使用getOrDefault："),e("pre",null,[e("code",null,`Map<String, Integer> scores = ...
int score = scores.getOrDefault(name, 0);`)]),e("p",null,"键必须是唯一的，不能对同一个键存放两个值。如果用同一个键调用两次put方法，第二个值就会取代第一个值。remove方法从映射中删除给定键对应的元素，size方法返回映射中的元素数。"),e("p",null,"迭代处理映射的键和值："),e("pre",null,[e("code",null,'scores.forEach((k, v) -> System.out.print("key=" + k + ",value=" + v));')]),e("p",null,"映射视图：键集、值集合、以及键值对集："),e("pre",null,[e("code",null,`Set<K> keySet();
Collection<V> values();
Set<Map.Entry<K, V>> entrySet();`)]),e("p",null,"枚举一个映射的所有键："),e("pre",null,[e("code",null,`Set<String> keys = map.keySet();
for (String key : keys) {
    System.out.println(key);
}`)]),e("p",null,"枚举键值对集："),e("pre",null,[e("code",null,`for (Map.Entry<String, Employee> entry : staff.entrySet()){
    String k = entry.getKey();
    Employee v = entry.getValue();
    System.out.println("key=" + k + ",value=" + v);
}`)]),e("p",null,"可以从键值对集中删除元素，所删除的元素也将从映射中删除，但是不能添加任何元素。"),e("p",null,"WeakHashMap使用弱引用保存键，WeakReference对象将包含另一个对象的引用，如果垃圾回收器发现某个特定的对象已经没有引用了，就会将其回收。"),e("p",null,"LinkedHashSet和LinkedHaspMap类会记住插入元素项的顺序，这样可以避免散列表中看起来随机的元素顺序。在散列表中插人元素项时，它们会加人一个双向链表中。"),e("p",null,"EnumSet是一个高效的集实现, 其元素属于一个枚举类型。因为枚举类型只有有限个实例，所以在内部实现为一个位序列。EnumSet类没有公共构造器，要使用静态工厂方法构造这个集："),e("pre",null,[e("code",null,`enum Weekday { MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY };
EnumSet<Weekday> set = EnumSet.of(Weekday.MONDAY, Weekday.WEDNESDAY, Weekday.FRIDAY);
EnumSet<Weekday> set = EnumSet.range(Weekday.MONDAY, Weekday.FRIDAY);`)]),e("p",null,"EnumMap是一个映射，它的键属于一个枚举类型，EnumMap可以简单高效地实现为一个值数组，需要在构造器中指定键类型："),e("pre",null,[e("code",null,"var personInCharge = new EnumMap<Weekday, Employee>(Weekday.class);")]),e("p",null,"IdentityHashMap键的散列值不是用hasCode函数计算的，而是用System.identityHashCode方法计算的。对两个对象进行比较时，IdentityHashMap使用了==，而不是equals。也就是说，不同的键对象即使内容相同，也被视为不同的对象。")],-1)])),_:1})}const m=r(s,[["render",d]]);export{m as default};
