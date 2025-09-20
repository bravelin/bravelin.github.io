import{_ as r,s as a,x as i,i as o,o as u,f as l,y as n}from"./index-Dav9PDu2.js";const s={};function p(c,e){const t=o("MyArticle");return u(),a(t,{title:"Java学习笔记之五：异常、断言和日志",date:"2024年03月07日"},{default:i(()=>e[0]||(e[0]=[l("div",{class:"_article-content"},[l("p",null,"异常处理的任务就是将控制权从产生错误的地方转移到能够处理这种情况的一个错误处理器。"),l("p",null,"Java允许每个方法有一个候选的退出路径，如果这个方法不能以正常的方式完成它的任务，就会选择这个退出路径。在这种情况下，方法不会返回一个值，而是抛出一个封装了错误信息的对象。这个方法会立刻退出，并不返回正常值，此外，也不会从调用这个方法的代码继续执行，取而代之的是，异常处理机制开始搜索一个能够处理这种异常状况的异常处理器。"),l("p",null,"异常对象都是派生于Throwable类的一个类的实例中，下一层分为Error和Exception。Error描述了Java运行时系统的内部错误和资源耗尽问题。"),l("p",null,"Exception层次结构又分为两个分支：一个分支派生于RuntimeException；另一个分支包括其他异常，不继承这个类。"),l("p",null,"由编程错误导致的异常属于RuntimeException；如果程序本身没有问题,但由于I/O错误之类的问题导致的异常属于其他异常。"),l("p",null,"继承自RuntimeException的异常包括以下问题：错误的强制类型转换、越界的数组访问、访问null指针。不继承RuntimeException的异常包括：试图越过文件末尾继续读取数据、试图打开一个不存在的文件、试图根据给定的字符串查找class对象，而这个字符串表示的类并不存在。"),l("p",null,[n("将派生于Error类或RuntimeException类的所有异常称为"),l("strong",null,"非检查型异常"),n("；所有其他异常称为"),l("strong",null,"检查型异常"),n("。编译器将检查你是否为所有的检查型异常提供了异常处理器。")]),l("p",null,"如果一个方法有可能抛出多个检查型异常类型，那么就必须在方法的首部列出所有的异常类。每个异常类之间用逗号隔开。"),l("p",null,"以下4种情况，需要在所写的方法中用throws子句声明异常："),l("ul",{class:"inner-list"},[l("li",null,"调用了一个抛出检查型异常的方法；"),l("li",null,"检测到一个错误，并且利用throw语句抛出一个检查型异常；"),l("li",null,"程序出现错误；"),l("li",null,"虚拟机或运行时库出现内部错误。")]),l("p",null,"不需要声明Java的内部错误，即从Error继承的异常。也不应该声明从RuntimeException继承的那些非检查型异常。"),l("p",null,"如果方法没有声明所有可能发生的检查型异常，编译器就会发出一个错误消息。"),l("p",null,"如果在子类中覆盖了超类的一个方法，子类方法中声明的检查型异常不能比超类方法中声明的异常更通用。如果超类方法没有抛出任何检查型异常，子类也不能抛出任何检查型并常。"),l("p",null,"自定义异常："),l("pre",null,[l("code",null,`public class FileFormatException extends IOException{
    public FileFormatException() {}
    public FileFormatException(String message) {
        super(message);
    }
}`)]),l("h3",{class:"title"},"捕获异常"),l("p",null,"如果发生了某个异常，但没有在任何地方捕获这个异常，程序就会终止，并在控制台上打印一个消息。其中包括这个异常的类型和一个栈轨迹。"),l("pre",null,[l("code",null,`try {
    ...
} catch(ExceptionType e){
    ...
}`)]),l("p",null,"如果try语句块中的任何代码抛出了catch子句中指定的一个异常类，那么程序将跳过try语句块的其余代码，并将执行catch子句中的处理器代码。"),l("p",null,"如果方法中的任何代码抛出了一个异常，但不是catch子句中指定的异常类型，那么这个方法会立即退出。"),l("p",null,"要捕获那些你知道如何处理的异常，而继续传播那些你不知道怎样处理的异常。"),l("p",null,"可以在catch子句中抛出一个异常，希望改变异常的类型时会这样做。"),l("pre",null,[l("code",null,`try{
    ...
} catch (SQLException e) {
    throw new ServletException("database error" + e.getMessage());
}`)]),l("p",null,"不管是否捕获到异常，finally子句中的代码都会执行。try语句可以只有finally子句，而没有catch子句。"),l("p",null,"finally子句的体要用于清理资源，不要把改变控制流的语句：return、throw、break、continue放在其中。"),l("p",null,"try-with-Resources语句："),l("pre",null,[l("code",null,"try( Resource res = ...){ work with res }")]),l("p",null,"try块退出时，会自动调用res.close()："),l("pre",null,[l("code",null,`try (var in = new Scanner(Path.of("in.txt"), StandardCharsets.UTF_8)){
    while(in.hasNext()){
        System.out.println(in.next());
    }
}`)]),l("p",null,"还可以指定多个资源："),l("pre",null,[l("code",null,`try (var in = new Scanner(Path.of("in.txt"), StandardCharsets.UTF_8);
    var out = new PrintWriter(Path.of("out.txt"), StandardCharsets.UTF_8))
{
    while(in.hasNext()){
        out.println(in.next());
    }
}`)]),l("p",null,"try-with-Resources语句自身也可以有catch子句，甚至还可以有一个finally子句。这些子句会在关闭资源之后执行。"),l("p",null,"栈轨迹是程序执行过程中某个特定点上所有挂起的方法调用的一个列表。"),l("p",null,"使用异常的一些技巧："),l("ul",{class:"inner-list"},[l("li",null,"异常处理不能代替简单的测试；"),l("li",null,"不要过分地细化异常；"),l("li",null,"合理利用异常层次结构；"),l("li",null,"不要压制异常；"),l("li",null,"在检测错误时，“苛刻”要比放任更好；"),l("li",null,"不要羞于传递异常；"),l("li",null,"便用标准方法报告null指针和越界异常；"),l("li",null,"不要向最终用户显示栈轨迹。")]),l("h3",{class:"title"},"断言"),l("p",null,"断言（assertion）机制允许你在测试期间在代码中捕人一些检查，而在生产代码中自动删除这些检查。断言的两种形式："),l("ul",{class:"inner-list"},[l("li",null,"assert condition; // 如果结果为false，则抛出一个AssertionError异常；"),l("li",null,"assert condition : expression; // 如果结果为false，则抛出一个AssertionError异常；expression将传入AssertionError对象的构造器，并转换成一个消息字符串。")]),l("p",null,"默认情况下，断言是禁用的口 可以在运行程序时用-enableassertions或者-ea选项启用断言："),l("pre",null,[l("code",null,`java -enableassertions MyApp
java -ea:MyClass -ea:com.mycompany.mylib MyApp`)]),l("p",null,"选项-disableassertions或-da在特定的类和包中禁用断言："),l("pre",null,[l("code",null,"java -ea:... -da:MyClass MyApp")]),l("p",null,"启用和禁用所有断言的-ea和-da开关不能应用于那些没有类加载器的“系统类”。需要使用-enablesystemassertions或者-esa开关启用系统类中的断言。"),l("p",null,[n("Java语言中3种处理系统错误的机制："),l("strong",null,"抛出异常、记录日志、使用断言"),n("。")]),l("p",null,"断言失败是致命的、不可恢复的错误。断言检查只在开发和测试阶段打开。不应该使用断言向程序的其他部分通知发生了可恢复性的错误。断言只应该用于在测试阶段确定程序内部错误的位置。"),l("p",null,"日志是一种用于程序整个生命周期的战略性工具。"),l("h3",{class:"title"},"日志"),l("p",null,"日志API的优点："),l("ul",{class:"inner-list"},[l("li",null,"按级别划分日志，可以很容易地控制显示日志记录；"),l("li",null,"日志代码留在应用中只有很小的开销；"),l("li",null,"日志记录可以定向到不同的处理器，如在控制台显示、写至文件；"),l("li",null,"日志记录器和处理器都可以对记录进行过滤，过滤器可以根据实现过滤器的程序员提供的标准丢弃那些无用的日志记录；"),l("li",null,"日志记录可以采用不同的方式格式化，例如，纯文本或XML；"),l("li",null,"应用程序可以使用多个日志记录器；"),l("li",null,"日志系统的配置由配置文件控制；")]),l("p",null,"对于简单的日志记录，可以便用全局日志记录器并调用其info方法："),l("pre",null,[l("code",null,'Logger.getGlobal().info("apple is red");')]),l("p",null,"可以调用getLogger方法创建或获取一个日志记录器："),l("pre",null,[l("code",null,'private static final Logger myLogger = Logger.getLogger("com.mycomapp.myapp");')]),l("p",null,"未被任何变量引用的日志记录器可能会被垃圾回收，为了防止这种情况发生，可以使用静态变量存储日志记录器的一个引用。"),l("p",null,"如果对日志记录器“com.mycompany”设置了日志级别，它的子日志记录器也会继承这个级别。"),l("p",null,"日志的七个级别：SEVERE、WARNING、INFO、CONFIG、FINE、FINER、FINEST。"),l("p",null,"在默认情况下，实际上只记录前3个级别，也可以设置一个不同的级别："),l("pre",null,[l("code",null,"logger.setLevel(Level.FINE); // 会记录FINE以及所有更高级别的日志")]),l("p",null,"还可以使用Level.ALL开启所有级别的日志记录，或者使用Level.OFF关闭所有日志。"),l("pre",null,[l("code",null,`logger.warning(message);
logger.fine(message);
logger.log(Level.FINE, message);`)]),l("p",null,"默认的日志记录会显示包含日志调用的类和方法的名字，不过，如果虚拟机对执行过程进行了优化，就可能得不到准确的调用信息。可以使用logp方法："),l("pre",null,[l("code",null,"void logp(Level l, String className, String methodName, String message);")]),l("p",null,"用来跟踪执行流的便利方法："),l("pre",null,[l("code",null,`void entering(String className, String methodName);
void entering(String className, String methodName, Object param);
void entering(String className, String methodName, Object[] params);
void exiting(String className, String methodName);
void exiting(String className, String methodName, Object result);`)]),l("pre",null,[l("code",null,`int read(String file, String pattern){
    logger.entering("com.mycompany.myapp.FileReader", "read", new Object[]{file, pattern});
    ...
    logger.exiting("com.mycompany.myapp.FileReader", "read", count);
    return count;
}`)]),l("p",null,"将生成FINER级别而且以字符串ENTRY和RETURN开头的日志记录。"),l("p",null,"可以使用下面两个便利方法在日志记录中包含异常的描述："),l("pre",null,[l("code",null,`void throwing(String className, String methodName, Throwble t);
void log(Level l, String message, Throwable t);`)]),l("p",null,"典型的用法："),l("pre",null,[l("code",null,`if (...) {
    var e = new IOException("...");
    logger.throwing("com.mycompany.mylib.Reader", "read", e);
    throw e;
}

try {
    ...
} catch (IOException e) {
    Logger.getLogger("com.mycompany.myapp").log(Level.WARNING, "Reading image", e);
}`)]),l("p",null,"throwing调用可以记录一条FINER级别的日志记录和一个以THROW开头的消息。"),l("p",null,"修改日志管理器配置："),l("pre",null,[l("code",null,`.level=INFO
com.mycompany.myapp.level=INFO
java.util.logging.ConsoleHandler.level=FINE`)])],-1)])),_:1})}const m=r(s,[["render",p]]);export{m as default};
