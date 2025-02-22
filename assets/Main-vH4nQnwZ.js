import{_ as u,m as r,p as i,h as a,o as s,e as l,q as n}from"./index-D4Bwbg5j.js";const p={};function o(d,t){const e=a("MyArticle");return s(),r(e,{title:"Java学习笔记之一：基本程序设计结构",date:"2024年02月20日"},{default:i(()=>t[0]||(t[0]=[l("div",{class:"_article-content"},[l("p",null,[n("Java的11个特性："),l("strong",null,"简单性、面向对象、分布式、健壮性、安全性、体系结构中立、可移植性、解释性、高性能、多线程、动态性"),n("。")]),l("p",null,"Java与C++的主要不同点在于多重继承，在Java中，取而代之的是更简单的接口概念。"),l("p",null,[n("解释虚拟机指令肯定比全速运行机器指令慢很多，不过，虚拟机有一个选项，可以将执行最频繁的字节码序列转换成机器码，这一过程称为"),l("strong",null,"即时编译"),n("（just-in-time-compilation)")]),l("p",null,"多线程可以带来更好的交互响应和实时行为。"),l("p",null,[n("标准命名约定为：类名是以大写字母开头的名词，如果名字由多个单词组成，每个单词的第一个字母都应该大写。即"),l("strong",null,"骆驼命名法"),n("（CamelCase）。源代码的文件名必须与公共类的类名相同，并用.java作为扩展名。")]),l("p",null,"可以用来自动生成文档的注释：以/** 开始，以*/结束。"),l("h3",{class:"title"},"基本类型"),l("table",{class:"inner-table"},[l("thead",null,[l("tr",null,[l("th",{style:{width:"20%"}},"类型"),l("th",{style:{width:"20%"}},"字节数"),l("th",null,"取值范围")])]),l("tbody",null,[l("tr",null,[l("td",null,"int"),l("td",null,"4"),l("td",null,[n("-2"),l("sup",null,"31"),n("~2"),l("sup",null,"31"),n("-1")])]),l("tr",null,[l("td",null,"short"),l("td",null,"2"),l("td",null,[n("-2"),l("sup",null,"15"),n("~2"),l("sup",null,"15"),n("-1")])]),l("tr",null,[l("td",null,"long"),l("td",null,"8"),l("td",null,[n("-2"),l("sup",null,"63"),n("~2"),l("sup",null,"63"),n("-1")])]),l("tr",null,[l("td",null,"byte"),l("td",null,"1"),l("td",null,[n("-2"),l("sup",null,"7"),n("~2"),l("sup",null,"7"),n("-1")])]),l("tr",null,[l("td",null,"float"),l("td",null,"4"),l("td",null,[n("±3.402 823 47 * 10"),l("sup",null,"38")])]),l("tr",null,[l("td",null,"double"),l("td",null,"8"),l("td",null,[n("± 1.797 693 134 862 315 70 * 10"),l("sup",null,"308")])]),l("tr",null,[l("td",null,"char"),l("td",null,"2"),l("td")]),l("tr",null,[l("td",null,"boolean"),l("td"),l("td",null,"true、false")])])]),l("p",null,"长整型数值有一个后缀L或l，十六进制数值有一个前缀外0x或0X，八进制有一个前缀0，加上前缀0b或0B还可以写二进制数，如0b1001就是9。"),l("p",null,[n("可以使用十六进制表示浮点数字面量，例如，0.125 = 2"),l("sup",null,"-3"),n("，可以写为0x1.0p-3, 在十六进制表示法中，使用p表示指数，而不是e。（e是一个十六进制数位）注意，尾数采用十六进制，指数采用十进制。指数的基数是2, 而不是10。")]),l("p",null,"三个特殊的值：Double.POSITIVE_INFINITY、Double.NEGATIVE_INFINITY、Double.NaN。"),l("h3",{class:"title"},"码点"),l("p",null,[l("strong",null,"码点（code point）"),n("：是指与一个编码表中的某个字符对应的代码值，在Unicode标准中，码点采用十六进制书写，并加上前缀U+。Unicode的码点可以分成17个代妈平面（Code Plane），第一个代码平面称为基本多语言平面（Basic Multilingual Plane），包括码点从U+0000到U+FFFF的经典Unicode代码。其余的16个平面的码点从U+10000到U+10FFFF，包含各种辅助字符。")]),l("p",null,"UTF-16编码采用不同长度的代码表示所有Unicode码点。在基本多语言平面中，每个字符用16位表示，通常称为代码单元（Code Unit）；而辅助字符编码为一对连续的代码单元。基本多语言平面内，从U+D800到U+DFFF之间的码位区段是永久保留不映射到Unicode字符。UTF-16就利用保留下来的0xD800-0xDFFF区段的码位来对辅助平面的字符的码位进行编码。"),l("p",null,"在Java中，char类型描述了采用UTF-16编码的一个代码单元。建议不要在程序中使用由char类型，除非确实需要处理UTF-16代码单元。"),l("h3",{class:"title"},"变量"),l("p",null,[l("strong",null,"尽管$是一个合法的标识符字符，但不要在你自己的代码中使用这个字符，它只用于Java编译器或其他工具生成的名字。")]),l("p",null,"可以用关键字final指示常量。一旦赋值，就不能再更改了。习惯上，常量名使用全大写。"),l("p",null,"枚举类型定义："),l("pre",null,[l("code",null,`enum Size { SMALL, MEDIUM, LARGE, EXTRA_LARGE };
Size s = Size.MEDIUM;`)]),l("p",null,"枚举类型的变量只能存储这个类型声明中所列的某个值，或者特殊值null。"),l("h3",{class:"title"},"数学函数"),l("p",null,"整数被0除将产生一个异常，而浮点数被0除将会得到一个无穷大或NaN结果。"),l("p",null,"在Math类中，为了达到最佳的性能，所有的方法都使用计算机浮点单元中的例程。如果得到一个完全可预测的结果比运行速度更重要的话，就应该使用StrictMath类，确保在所有平台上得到相同的结果。"),l("p",null,"当用一个二元运算符连接两个值时，先要将两个操作数转换为同一种类型，然后再进行计算：如果两个操作数中有一个是double类型，另一个操作数就会转换为double类型；否则，如果其中一个操作数是float类型，另一个操作数将会转换为float类型；否则，如果其中一个操作数是long类型，另一个操作数将会转换为long类型；否则，两个操作数都将被转换为int类型。"),l("p",null,"如果试图将一个数从一种类型强制转换为另一种类型，而又超出了目标类型的表示范围，结果就会截断成一个完全不同的值。"),l("h3",{class:"title"},"运算符"),l("p",null,"&&和||运算符是按照“短路”方式来求值的：如果第一个操作数已经能够确定表达式的值，第二个操作数就不必计算了。"),l("p",null,">>和<<运算符可以将位模式左移或右移，>>>运算符会用0填充高位，>>会用符号位填充高位，不存在<<<运算符。"),l("p",null,"移位运算符的右操作数要完成模32的运算，除非左操作数是long类型，在这种情况下需要对右操作数完成模64运算。"),l("pre",null,[l("code",null,`int a = 1 << 3; // 8
int b = 1 << 35; // 8`)]),l("h3",{class:"title"},"字符串"),l("p",null,"String类对象称为是不可变的(immutable)。各个字符串存放一个在公共存储池中, 字符串变量指向存储池中相应的位置。"),l("p",null,"可以使用equals方法检测两个字符串是否相等。要想检测两个字符串是否相等，而不区分大小写，可以使用equalsIgnoreCase方法。不要使用==运算符检测两个字符串是否相等！这个运算符只能够确定两个字符串是否存放在同一个位置上。"),l("p",null,"检查一个字符串是否为null："),l("pre",null,[l("code",null,"if (str == null)")]),l("p",null,"检查一个字符串既不是null也不是空串："),l("pre",null,[l("code",null,"if (str != null && str.length() != 0)")]),l("p",null,"字符串是一个char值序列，char数据类型是采用UTF-16编码表示Unicode码点的一个代码单元，最常用的Unicode字符可以用一个代码单元表示，而辅助字符需要一对代码单元表示。length方法将返回采用UTF-16编码表示给定字符串所需要的代码单元个数。"),l("p",null,"StringBuilder构建字符串："),l("pre",null,[l("code",null,`StringBuilder builder = new StringBuilder();
builder.append(ch);
builder.append(str);
String completedString = builder.toString();`)]),l("p",null,"StringBuffer类的效率不如StringBuilder类，不过它允许采用多线程的方式添加或删除字符。如果所有字符串编辑操作都在单个线程中执行 (通常都是这样)，则应当使用StringBuilder类。这两个类的API是一样的。"),l("h3",{class:"title"},"输入输出"),l("p",null,"构造标准输入流System.in关联的Scanner对象："),l("pre",null,[l("code",null,`Scanner in = new Scanner(System.in);
String name = in.nextLine(); // 读取一行
String firstName = in.next(); // 读取一个单词
int age = in.nextInt(); // 读取一个整数
double height = in.nextDouble(); // 读取一个浮点数`)]),l("p",null,"读取一个文件："),l("pre",null,[l("code",null,'Scanner in = new Scanner(Path.of("c:\\\\mydirectory\\\\myfile.txt"), StandardCharsets.UTF_8);')]),l("p",null,"写入文件，构造一个PrintWriter对象，提供文件名和字符编码："),l("pre",null,[l("code",null,`PrintWriter out = new PrintWriter("c:\\\\mydirectory\\\\myfile.txt", StandardCharsets.UTF_8);
out.println("hello java");
out.close();`)]),l("p",null,"如果文件不存在，则创建该文件。可以像输出到System.out一样使用print、println以及printf命令。"),l("h3",{class:"title"},"switch流程控制"),l("p",null,"switch语句case标签可以是：类型为char、byte、short或int的常量表达式；枚举常量；字符串字面量；多个字符串，用逗号分隔。"),l("p",null,"如果忘记在一个分支末尾增加break语句，就会接着执行下一个分支。不能在一个switch语句中混合使用冒号和箭头，注意如itch 表达式中的yield关键字，与break类似，yield会终止执行，但还会生成一个值，这就是表达式的值。"),l("pre",null,[l("code",null,`int numLetters = switch (seasonName) {
    case "Spring" -> {
        System.out.println("Spring time!");
        yield 6;
    }
    case "Summer", "Winter" -> 6;
    case "Fall" -> 4;
    default -> -1;
};`)]),l("p",null,"完全可以在switch表达式的一个分支中抛出异常："),l("pre",null,[l("code",null,'default throw new IllegalArgumentException("Not a valid season");')]),l("p",null,"switch表达式的关键是生成一个值，或者产生一个异常而失败，不允许“跳出” switch表达式。具体来讲，不能在switch表达式中使用return、break、continue语句。"),l("h3",{class:"title"},"大数"),l("p",null,"BigInteger和BigDecimal两个类可以处理包含任意长度数字序列的数值。"),l("p",null,"使用静态的valueOf方法可以将一个普通的数转换为大数："),l("pre",null,[l("code",null,"BigInteger big = BigInteger.valueOf(1234567890);")]),l("p",null,"对于更长的数，可以使用一个带字符串参数的构造器："),l("pre",null,[l("code",null,'BigInteger big = new BigInteger("12345678901234567890");')]),l("p",null,"算术运算需要使用大数类中的add、multiply、divide、subtract等方法。"),l("h3",{class:"title"},"数组"),l("p",null,"一旦创建了数组，就不能再改变它的长度。如果程序运行中需要经常扩展数组的大小，就应该使用另一种数据结构——数组列表（array list）。"),l("pre",null,[l("code",null,`int[] arr = new int[] { 1, 2, 3, 4, 5, 6, 7, 8 };
for (int a : arr) {
    System.out.println(a);
}`)]),l("p",null,"如果确实希望将一个数组的所有值拷贝到一个新的数组中，就要使用Array类的copyOf方法："),l("pre",null,[l("code",null,"int[] copiedLuckyNumbers = Arrays.copyOf(luckyNumbers, luckyNumbers.length);")]),l("p",null,"多维数组，其实为“数组的数组”："),l("pre",null,[l("code",null,`double[][] balances = new double[10][10];
System out.printin(Arrays.deepToString(a));`)])],-1)])),_:1})}const h=u(p,[["render",o]]);export{h as default};
