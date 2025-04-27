import{_ as l,q as r,s as a,h as o,o as i,e}from"./index-5cTkXVTa.js";const s={};function m(u,n){const t=o("MyArticle");return i(),r(t,{title:"Java学习笔记之九：流",date:"2024年03月29日"},{default:a(()=>n[0]||(n[0]=[e("div",{class:"_article-content"},[e("p",null,"与集合相比，流提供了一种在更高的概念级别上指定计算任务的数据视图，通过使用流，可以指明想要完成什么任务，而不是指明如何去实现它。用来以“做什么而非怎么做”的方式处理集合。"),e("pre",null,[e("code",null,`//统计单词计数
int count = 0;
for (String word : words) {
    if (word.length() > 12) {
        count++;
    }
}
// 使用流改写
int count = words.stream().filter(word -> word.length() > 12).count();`)]),e("p",null,"仅将stream修改为parallelStream就可以让流库以并行方式来执行过滤和计数："),e("pre",null,[e("code",null,"int count = words.parallelStream().filter(word -> word.length() > 12).count();")]),e("p",null,"流与集合的差异："),e("ul",{class:"inner-list"},[e("li",null,"流并不存储其元素，这些元素可能存储在底层的集合中，或者是按需生成的。"),e("li",null,"流的操作不会修改其数据源。"),e("li",null,"流的操作是尽可能惰性执行的。这意味着直至需要其结果时，操作才会执行。")]),e("h3",{class:"title"},"流的创建"),e("p",null,"使用Stream.of创建流："),e("pre",null,[e("code",null,`Stream<String> words = Stream.of(content.split("\\\\PL+"));
Stream<String> song = Stream.of("a", "b", "c");`)]),e("p",null,"创建不包含任何元素的流："),e("pre",null,[e("code",null,"Stream<String> silence = Stream.empty();")]),e("p",null,"Stream接口有两个用于创建无限流的静态方法，Stream.generate和Stream.iterate："),e("pre",null,[e("code",null,`Stream<String> echos = Stream.generate(()-> 'Echo'); // 常量值流
Stream<Double> randoms = Stream.generate(Math::random); // 随机数流
Stream<BigInteger> numbers = Stream.iterate(BigInteger.ZERO, n -> n.add(BigInteger.ONE)); // 无限BigInteger流

// 有限流
BigInteger limit = new BigInteger("100000000");
Stream<BigInteger> numbers = Stream.iterate(BigInteger.ZERO, n ->n.compareTo(limit) < 0, n -> n.add(BigInteger.ONE));`)]),e("p",null,"Stream.ofNullable方法会用一个对象来创建一个非常短的流。如果该对象为null，那么这个流的长度就为0；否则，这个流的长度为1，即只包含该对象。"),e("p",null,"JavaAPI中有大量方法都可以产生流："),e("pre",null,[e("code",null,`Stream<String> greetings = "Hello\\nCuten Tag\\nBonjour'.lines(); // 产生一个由字符串中所有的行构成的流
Stream<String> words = Pattern.compile("\\\\PL+").splitAsStream(contents); // 将一个字符串分割为一个个的单词
Stream<String> lines = Files.Unes(path) // 静态的Files.lines方法会返回一个包含了文件中所有行的Stream`)]),e("p",null,"查看流中的内容，可以使用toList方法，它会将流中的元素收集到一个列表中。如果流是无限的，那么首先要用limit方法截断："),e("pre",null,[e("code",null,"System.out.println(Stream.generate(Math::random).limit(10).toList());")]),e("p",null,"在执行流的操作时，并没有修改流背后的集合。"),e("h3",{class:"title"},"filter、map和flatMap方法")],-1)])),_:1})}const g=l(s,[["render",m]]);export{g as default};
