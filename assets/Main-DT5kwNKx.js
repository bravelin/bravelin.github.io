import{_ as n,s as r,x as a,h as o,o as i,f as l}from"./index-CxcENImR.js";const s={};function u(p,e){const t=o("MyArticle");return i(),r(t,{title:"Java学习笔记之九：流",date:"2024年03月29日"},{default:a(()=>[...e[0]||(e[0]=[l("div",{class:"_article-content"},[l("p",null,"与集合相比，流提供了一种在更高的概念级别上指定计算任务的数据视图，通过使用流，可以指明想要完成什么任务，而不是指明如何去实现它。用来以“做什么而非怎么做”的方式处理集合。"),l("pre",null,[l("code",null,`//统计单词计数
int count = 0;
for (String word : words) {
    if (word.length() > 12) {
        count++;
    }
}
// 使用流改写
int count = words.stream().filter(word -> word.length() > 12).count();`)]),l("p",null,"仅将stream修改为parallelStream就可以让流库以并行方式来执行过滤和计数："),l("pre",null,[l("code",null,"int count = words.parallelStream().filter(word -> word.length() > 12).count();")]),l("p",null,"流与集合的差异："),l("ul",{class:"inner-list"},[l("li",null,"流并不存储其元素，这些元素可能存储在底层的集合中，或者是按需生成的。"),l("li",null,"流的操作不会修改其数据源。"),l("li",null,"流的操作是尽可能惰性执行的。这意味着直至需要其结果时，操作才会执行。")]),l("h3",{class:"title"},"流的创建"),l("p",null,"使用Stream.of创建流："),l("pre",null,[l("code",null,`Stream<String> words = Stream.of(content.split("\\\\PL+"));
Stream<String> song = Stream.of("a", "b", "c");`)]),l("p",null,"创建不包含任何元素的流："),l("pre",null,[l("code",null,"Stream<String> silence = Stream.empty();")]),l("p",null,"Stream接口有两个用于创建无限流的静态方法，Stream.generate和Stream.iterate："),l("pre",null,[l("code",null,`Stream<String> echos = Stream.generate(()-> 'Echo'); // 常量值流
Stream<Double> randoms = Stream.generate(Math::random); // 随机数流
Stream<BigInteger> numbers = Stream.iterate(BigInteger.ZERO, n -> n.add(BigInteger.ONE)); // 无限BigInteger流

// 有限流
BigInteger limit = new BigInteger("100000000");
Stream<BigInteger> numbers = Stream.iterate(BigInteger.ZERO, n ->n.compareTo(limit) < 0, n -> n.add(BigInteger.ONE));`)]),l("p",null,"Stream.ofNullable方法会用一个对象来创建一个非常短的流。如果该对象为null，那么这个流的长度就为0；否则，这个流的长度为1，即只包含该对象。"),l("p",null,"JavaAPI中有大量方法都可以产生流："),l("pre",null,[l("code",null,`Stream<String> greetings = "Hello\\nCuten Tag\\nBonjour'.lines(); // 产生一个由字符串中所有的行构成的流
Stream<String> words = Pattern.compile("\\\\PL+").splitAsStream(contents); // 将一个字符串分割为一个个的单词
Stream<String> lines = Files.Unes(path) // 静态的Files.lines方法会返回一个包含了文件中所有行的Stream`)]),l("p",null,"查看流中的内容，可以使用toList方法，它会将流中的元素收集到一个列表中。如果流是无限的，那么首先要用limit方法截断："),l("pre",null,[l("code",null,"System.out.println(Stream.generate(Math::random).limit(10).toList());")]),l("p",null,"在执行流的操作时，并没有修改流背后的集合。"),l("h3",{class:"title"},"filter、map和flatMap方法"),l("p",null,"流的转换会产生一个新的流，它的元素派生自另一个流中的元素。filter的引元是一个Predicate<T>类型的对象，即一个从T映射到boolean值的函数："),l("pre",null,[l("code",null,`List<String> words = ...
Stream<String> longWords = words.stream().fliter(w -> w.length() > 12);`)]),l("p",null,"如果需要按照某种方式来转换流中的值，可以使用map方法并传递执行该转换的函数："),l("pre",null,[l("code",null,`Stream<String> lowercaseWords = words.stream().map(String::toLowerCase);
Stream<String> firstLetters words.stream().map(s-> s.substring(6, 1)); // 提取单词的首字母`)]),l("p",null,"flatMap则产生一个流，它是通过将mapper应用于当前流中所有元素所产生的结果连接到一起而获得的："),l("pre",null,[l("code",null,`String[] words = new String[]{ "My", "name", "is", "Lucy"};
Stream<Stream<String>> result1 = Arrays.stream(words).map(w -> codePoints(w));
System.out.println(result1.toList()); //[java.util.stream.IntPipeline$1@4f3f5b24, java.util.stream.IntPipeline$1@15aeb7ab, java.util.stream.IntPipeline$1@7b23ec81, java.util.stream.IntPipeline$1@6acbcfc0]

Stream<String> result2 = Arrays.stream(words).flatMap(w -> codePoints(w));
System.out.println(result2.toList()); // [M, y, n, a, m, e, i, s, L, u, c, y]`)]),l("p",null,"flatMap摊平为单个流。当单个元素需要生成零或多个元素时，mapMulti()比flatMap()更高效。例如，将整数映射为平方和立方："),l("pre",null,[l("code",null,`Stream<Integer> stream = Stream.of(1, 2, 3);
stream.mapMulti((num, consumer) -> {
    consumer.accept(num * num);  // 平方
    consumer.accept(num * num * num);  // 立方
}).forEach(System.out::println); // 1 1 4 8 9 27`)]),l("p",null,"mapMulti展开嵌套数据结构，如将目录流转换为文件流："),l("pre",null,[l("code",null,`Stream<File> directories = Stream.of(new File("dir1"), new File("dir2"));
directories.mapMulti((dir, consumer) -> {
    File[] files = dir.listFiles();
    if (files != null) {
        for (File file : files) {
            consumer.accept(file);
        }
    }
}).forEach(System.out::println);`)]),l("p",null,"mapMulti中每一个流元素都会调用mapper, 并且所有在调用期间传递给Consumer的元素都会被添加到结果流中。"),l("h3",{class:"title"},"抽取子流和组合流"),l("p",null,"调用stream.limit(n)会返回一个新的流，它在n个元素之后结束，如果原来的流比n短，那么就会在该流结束时结束。此方法可以用于裁剪无限流："),l("pre",null,[l("code",null,"Stream<Double> randoms = Stream.generate(Math::random).limit(100); // 产生一个包含100个随机数的流")]),l("p",null,"调用srream.skip(n) 正好相反：它会丢弃前n个元素："),l("pre",null,[l("code",null,'Stream<String> words = Stream.of(contents.split("\\\\PL+")).skip(1); // 跳过第一个元素')]),l("p",null,"stream.takeWhile(predicate)调用会在谓词为真时获取流中的所有元素，然后停止："),l("pre",null,[l("code",null,'Stream<String> initialDigits = codePoints(str).takeWhile(s -> "0123456789".contains(s));')]),l("p",null,"dropwhile方法的做法正好相反，它会在条件为真时丢弃元索，并产生一个由第一个使该条件为假的字符开始的所有元素构成的流："),l("pre",null,[l("code",null,"Stream<String> withoutInitialWhiteSpace = codePoints(str).dropWhile(s -> s.trim().length == 0);")]),l("p",null,"concat方法可以将两个流连接起来：(第一个流不应该是无限的)"),l("pre",null,[l("code",null,'Stream<String> combined = Stream.concat(codePoints("hello"), codePoints("world"));')]),l("p",null,"distinct方法会返回一个流，剔除流中重复元素后产生的："),l("pre",null,[l("code",null,'Stream<String> uniqueWords = Stream.of("merrily", "gently", "merrily").distinct();')]),l("p",null,"sorted方法可以对流进行排序，产生一个新的流："),l("pre",null,[l("code",null,"Stream<String> longestFirst = words.stream().sorted(Comparator.comparing(String::length).reversed());")]),l("p",null,"peek方法会产生另一个流，它的元素与原来流中的元素相同，但是在每次获取一个元素时，都会调用一个函数："),l("pre",null,[l("code",null,`Object[] powers = Stream.iterate(1.0, p -> p * 2)
                .peek(e -> System.out.println("Fetching: " + e))
                .limit(20)
                .toArray(); // 当实际访问一个元素时，就会打印出来一条消息`)]),l("h3",{class:"title"},"Reduction约简"),l("p",null,"Reduction是一种终结操作，它们会将流约简为可以在程序中使用的非流值。获取流中的最大值："),l("pre",null,[l("code",null,`Optional<String> largest = words.max(String::compareToIgnoreCase);
System.out.println("largest = " + largest.orElse(""));`)]),l("p",null,"findFirst返回的是非空集合中的第一个值，它通常在与filter组合使用时很有用。"),l("pre",null,[l("code",null,`Optional<String> startsWithQ = words.filter(s-> s.startsWith('Q")).findFirst(); // 找到第一个以字母Q开头的单词`)]),l("p",null,"如果不强调使用第一个匹配，而是使用任意的匹配都可以，那么就可以使用findAny方法。"),l("pre",null,[l("code",null,`Optional<String> startsWithQ = words.filter(s-> s.startsWith('Q")).findAny();`)]),l("p",null,"如果只想知道是否存在匹配，那么可以使用anyMatch，这个方法会接受一个谓词引元，因此不需要使用filter："),l("pre",null,[l("code",null,'boolean aWordStartsWithQ = words.parallel().anyMatch(s -> s.startsWith("Q"));')]),l("p",null,"allMatch和noneMatch方法，它们分别在所有元素和没有任何元素匹配谓词的情况下返回true，这些方法也可以通过并行运行。"),l("h3",{class:"title"},"Optional类型"),l("p",null,"Optional<T>对象是一种包装器对象，要么包装了类型T的对象，要么没有包装任何对象。对于第一种情况，我们称这种值是存在的，Optional<T>类型被当作一种更安全的方式，用来替代类型T的引用，这种引用要么引用某个对象，要么为null。"),l("p",null,"它在值不存在的情况下会产生一个可替代物，而只有在值存在的情况下才会使用这个值："),l("pre",null,[l("code",null,`String result = optionalString.orElse(""); // 如果值不存在，使用空字符串
String result = optionalString.orElseGet(()-> System.getProperty("myapp.default")); // 如果值不存在，调用代码来计算默认值
String result = optionalString.orElseThrow(IllegalStateException::new); // 如果值不存在，抛出异常`)]),l("p",null,"ifPresent方法法会接受一个函数。如果可选值存在，那么它会被传递给该函数。否则，不会发生任何事情："),l("pre",null,[l("code",null,"optionalValue.ifPresent(v -> results.add(v));")]),l("p",null,"如果想要在可选值存在时执行一种动作，在可选值不存在时执行另一种动作，可以使用ifPresentOrElse："),l("pre",null,[l("code",null,'optionalValue.ifPresentOrElse(v -> results.add(v), () -> results.add(""));')]),l("p",null,"可以使用map方法来转换Optional内部的值："),l("pre",null,[l("code",null,"Optional<String> transformed = optionalString.map(String::toUpperCase); // 如果optionalString为空，那么transformed也为空")]),l("p",null,"也可以用or方法将空Optional替换为一个可替代的Optional。这个可替代值将以惰性方式计算："),l("pre",null,[l("code",null,"Optional<String> result = optionalString.or(()->alternatives.stream().findFirst()); // 如果optionalString的值存在，那么result为optionalString。如果值不存在，那么就会计算lambda表达式的结果。")]),l("p",null,"Optional类型正确用法的提示："),l("ul",{class:"inner-list"},[l("li",null,"Optional类型的变量永远都不应该为null；"),l("li",null,"不要使用Optional类型的域，因为其代价是额外多出来一个对象；"),l("li",null,"类型为Optional的方法参数是有问题的；"),l("li",null,"不要在集合中放置Optional对象，并且不要将它们用作map的键。")]),l("h3",{class:"title"},"收集结果"),l("p",null,"当处理完流之后，通常会想要查看其结果。此时可以调用iterator方法，它会产生用来访问元素的旧式风格的迭代器。或者，可以调用forEach方法，将某个函数应用于每个元素："),l("pre",null,[l("code",null,"stream.forEach(System.out::println);")]),l("p",null,"在并行流上，forEach方法会以任意顺序遍历各个元素。如果想要按照流中的顺序来处理它们，可以调用forEachOrdered方法。但是这个方法会丧失并行处理的部分甚至全部优势。"),l("p",null,"如果想要将结果收集到数据结构中，此时，可以调用toList，获得由流的元素构成的列表；调用toArray可以获得由流的元素构成的数组。"),l("p",null,"表达式stream.toArray()会返回一个Object[]数组，如果想要让数组具有正确的类型，可以向其传递数组构造器："),l("pre",null,[l("code",null,"String[] result = stream.toArray(String[]::new);")]),l("p",null,"如果需要将流中的元素收集到另一个目标中，可以使用collect方法，接受一个Collector接口的实例。收集器是一种收集众多元素并产生单一结果的对象，Collectors类提供了大量用于生成常见收集器的工厂方法："),l("pre",null,[l("code",null,`Set<String> result = stream.collect(Collectors.toSet()); // 将流的元素收集到Set中
TreeSet<String> result = stream.collect(Collectors.toCollection(TreeSet::new));`)]),l("p",null,"收集流中的字符串并连接："),l("pre",null,[l("code",null,`String result = stream.collect(Collectors.joining());
String result = stream.collect(Collectors.joining(", ")); // 用逗号分隔
String result = stream.map(Object::toString).collect(Collectors.joining()); // 将流中的对象转换为字符串`)]),l("p",null,"如果想要将流的结果约简为总和、数量、平均值、最大值或最小值，可以使用summarizingInt|summarizingLong|summarizingDouble方法中的某一个，这些方法会接受一个将流对象映射为数值的函数，产生类型为IntSummaryStatistics|LongSummaryStatistics|DoubleSummaryStatistics的结果："),l("pre",null,[l("code",null,`IntSummaryStatistics summary = stream.collect(Collector.summarizingInt(String::length));
double average = summary.getAverage(); // 获取平均值
int count = summary.getCount(); // 获取元素个数
int max = summary.getMax(); // 获取最大值
int min = summary.getMin(); // 获取最小值`)]),l("h3",{class:"title"},"收集到映射表中"),l("p",null,"Collectors.toMap可以将流中元素收集到一个映射表中，需要提供两个函数引元："),l("pre",null,[l("code",null,`Map<Integer, String> idToName = people.collect(Collectors.toMap(Person::id, Person::name));
// 值设置为元素
Map<Integer, Person> idToPerson = people.collect(Collectors.toMap(Person::id, Function.identity()));`)]),l("p",null,"如果有多个元素具有相同的键，就会存在冲突，收集器将会抛出一个IllegalStateException异常，可以通过提供第3个函数引元来覆盖这种行为，该函数会针对给定的已有值和新值来解决冲突并确定键对应的值，这个函数应该返回已有值、新值或它们的组合："),l("pre",null,[l("code",null,`Stream<Local> locales = Stream.of(Local.getAvailableLocales());
Map<String, Locale> locales = locales.collect(Collectors.toMap(Locale::getDisplayName, Function.identity(), (oldValue, newValue) -> oldValue)); // 选择第一个值`)]),l("p",null,"构建更复杂的Map："),l("pre",null,[l("code",null,`Map<String, Set<String>> countryLanguageSets = locales.collect(
    Collectors.toMap(
        Locale::getDisplayCountry,
        l -> Set.of(l.getLanguage()),
        (oldValue, newValue) -> {
            Set<String> set = new HashSet<>(oldValue);
            set.addAll(newValue);
            return set;
        }
    ));`)]),l("p",null,"生成TreeMap："),l("pre",null,[l("code",null,`Map<Integer, Person> idToPerson = people.collect(Collectors.toMap(
                        Person::id,
                        Function.identity(),
                        (existingVal, newVal) -> { throw new IllegalStateException(); },
                        TreeMap::new));`)])],-1)])]),_:1})}const m=n(s,[["render",u]]);export{m as default};
