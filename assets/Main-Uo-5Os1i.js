import{_ as t,s as r,x as i,h as a,o,f as n}from"./index-CxcENImR.js";const u={};function p(s,e){const l=a("MyArticle");return o(),r(l,{title:"Java学习笔记之四：接口、lambda表达式与内部类",date:"2024年02月24日"},{default:i(()=>[...e[0]||(e[0]=[n("div",{class:"_article-content"},[n("p",null,"接口用来描述类应该做什么，而不指定它们具体应该如何做。一个类可以实现一个或多个接口。只要符合所要求的接口，就可以使用实现了这个接口的类的对象。"),n("p",null,"接口不是类，而是对希望符合这个接口的类的一组需求。"),n("p",null,"接口中的所有方法都自动是public方法。接口绝不会有实例字段。"),n("p",null,"为了让类实现一个接口，需要将类声明为实现给定的接口，并对接口中的所有方法提供定义："),n("pre",null,[n("code",null,`class Employee implements Comparable<Employee>{
    public int compareTo(Employee other){
        return Double.compare(this.salary, other.salary);
    }
}`)]),n("p",null,"在实现接口时，必须把方法声明为public。否则，编译器将认为这个方法的访问属性是包可访问。"),n("p",null,"接口变量必须引用实现了这个接口的一个类对象。"),n("p",null,"接口中不能包含实例字段，但是可以包含常量，并且允许有多条接口链："),n("pre",null,[n("code",null,`public interface Moveable{
    void move(double x, double y);
}
public interface Powered extends Moveable{
    double milesPerGallon();
    double SPEED_LIMIT = 120;
}`)]),n("p",null,"接口中的字段总是public static final。"),n("p",null,"可以使用逗号将想要实现的各个接口分隔开："),n("pre",null,[n("code",null,"class Employee implements Cloneable, Comparable{ ... }")]),n("p",null,"记录和枚举类不能扩展其他类，因为它们隐式地扩展了Record和Enum，但是他们可以实现接口。"),n("p",null,"接口可以是密封的，与密封类一样，直接子类型（类或者接口）必须在permits子句中声明，或者要放在同一个源文件中。"),n("p",null,"在Java9中，接口中的方法可以是private方法，可以是静态方法或实例方法，私有方法只能在接口本身的方法中使用，所以它们的用途很有限，只是作为接口中其他方法的辅助方法。"),n("p",null,"可以为任何接口方法提供一个默认实现，用default修饰符标记这样一个方法："),n("pre",null,[n("code",null,`public interface Collection{
    int size();
    default boolean isEmpty(){
        return size() == 0;
    }
}`)]),n("p",null,"默认方法的一个重要用法是“接口演化”。"),n("h3",{class:"title"},"解决默认方法冲突"),n("p",null,"①超类优先，如果超类提供了一个具体方法，同名而且有相同参数类型的默认方法会被忽略。"),n("p",null,"②接口冲突，如果两个接口有同名且参数相同的方法，则编译器会报错。必须覆盖这个方法来解决冲突。"),n("pre",null,[n("code",null,`public interface Person{
    default String getName() { return ""; }
}
public interface Named{
    default String getName() { return getClass().getName() + "_" + hashCode(); }
}
public class Employee implements Person, Named{
    public String getName(){
        return Person.super.getName();
    }
}
`)]),n("p",null,"回调的应用："),n("pre",null,[n("code",null,`import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.*;
import java.time.*;
import javax.swing.*;

class TimePrinter implements ActionListener{
	@Override
	public void actionPerformed(ActionEvent e) {
		System.out.println("curr time is " + Instant.ofEpochMilli(e.getWhen()));
	}
}

public class Test{
	public static void main(String[] args) {
		TimePrinter listener = new TimePrinter();
		Timer timer = new Timer(1000, listener);
		timer.start();
		JOptionPane.showMessageDialog(null, "Quit program？");
		System.exit(0);
	}
}`)]),n("p",null,"对字符串自定义比较器："),n("pre",null,[n("code",null,`class LengthComparator implements Comparator<String>{
    public int compare(String s1, String s2){
        return s1.length() - s2.length();
    }
}

LengthComparator comp = new LengthComparator();
String[] words = { "abort", "boundary", "cell", "digital" };
Arrays.sort(words, comp);
System.out.println(Arrays.toString(words));`)]),n("p",null,"Cloneable接口是Java提供的少数标记接口之一，标记接口不 包含任何方法，它唯一的作用就是允许在类型查询中使用instanceof："),n("pre",null,[n("code",null,"if (obj instanceof Cloneable){}")]),n("p",null,"深拷贝的例子："),n("pre",null,[n("code",null,`class Employee implements Cloneable{
    public Employee clone() throws CloneNotSupportedException{
        Employee cloned = (Employee)super.clone();
        cloned.hireDay = (Date) hireDay.clone();
        return cloned;
    }
}`)]),n("p",null,"lambda表达式是一个可传递的代码块，可以在以后执行一次或多次。"),n("p",null,"无须指定lambda表达式的返回类型，返回类型总是会由上下文推导得出。"),n("pre",null,[n("code",null,`String[] words = { "abort", "boundary", "cell", "digital" };
Arrays.sort(words, (String first, String second) -> first.length() - second.length());
System.out.println(Arrays.toString(words));`)]),n("p",null,"Timer回调："),n("pre",null,[n("code",null,`Timer timer = new Timer(1000, (e) -> System.out.println("curr time is " + Instant.ofEpochMilli(e.getWhen())));
timer.start();`)]),n("p",null,"对于只有一个抽象方法的接口，需要这种接口的对象时，就可以提供一个lambda表达式。这种接口称为函教式接口（functional interface）。"),n("p",null,"方法引用"),n("pre",null,[n("code",null,`Timer timer = new Timer(1000, (e) -> System.out.println(e));
// 可以简化为：
Timer timer = new Timer(1000, System.out::println);`)]),n("p",null,"可以在方法引用中使用this、super等参数："),n("pre",null,[n("code",null,`this::equals // x -> this.equals(x)
super::instanceMethod // x -> super.instanceMethod(x)`)]),n("p",null,"构造器引用与方法名类似，只不过方法名为new。"),n("p",null,"在Java中，lambda表达式就是闭包，可以捕获外围作用域中变量的值，并且只能引用值不会改变的变量。lambda表达式中捕获的变量必须是事实最终变量，事实最终变量是指，这个变量初始化之后就不会再为它赋新值。"),n("p",null,"在一个lambda表达式中使用this关键字时，是指创建这个lambda表达式的方法的this参数。"),n("p",null,"使用lambda表达式的重点是延迟执行。"),n("pre",null,[n("code",null,`repeat(10, () -> System.out.println("Hello World！"));
public static void repeat(int n, Runnable action){
    for (int i = 0; i < n; i++){
        action.run();
    }
}`)]),n("p",null,"Comparator接口包含很多方便的静态方法来创建比较器："),n("pre",null,[n("code",null,"Arrays.sort(people, Comparator.comparing(Person::getLastName).thenComparing(Person::getFirstName))")]),n("h3",{class:"title"},"内部类"),n("p",null,"内部类（inner class）是定义在另一个类中的类，内部类可以对同一个包中的其他类隐藏；内部类方法可以访问定义这些方法的作用域中的数据，包括原本私有的数据。"),n("p",null,"内部类的对象会有一个隐式引用，指向实例化这个对象的外部类对象。通过这个指针，它可以访问外部对象的全部状态。"),n("p",null,"一个内部类方法可以访问自身的实例字段，也可以访问创建它的外部类对象的实例字段。"),n("p",null,"只有内部类可以是私有的，而常规类可以有包可见性或公共可见性。"),n("p",null,"外部类引用的正规语法：OuterClass.this："),n("pre",null,[n("code",null,`public void actionPerformed(ActionEvent e) {
    if (TalkingClock.this.beep) {
        Toolkit.getDefaultToolkit().beep();
    }
}`)]),n("p",null,"内部类对象的构造器：outerObject.new InnerClass(construction parameters)"),n("pre",null,[n("code",null,"ActionListener listener = this.new TimePrinter();")]),n("p",null,"在外部类的作用域之外，可以这样引用内部类：OuterClass.InnerClass"),n("pre",null,[n("code",null,`var jabberer = new TalkingClock(1000, true);
TalkingClock.TimePrinter listener = jabberer.new TimePrinter();`)]),n("p",null,"内部类中声明的所有静态字段都必须是final，并初始化为一个编译时常量。内部类不能有static方法。"),n("p",null,"声明局部类时不能有访问说明符，局部类的作用域总是限定在声明这个局部类的块中。局部类不仅能够访问外部类的字段, 还可以访问局部变量，局部变量必须是事实最终变量。"),n("p",null,"匿名内部类："),n("pre",null,[n("code",null,`new SuperType(construction parameters){
    methods and fields
}`)]),n("p",null,"SuperType可以是接口，也可以是类。匿名内部类没有类名，也无法有构造器。"),n("pre",null,[n("code",null,`var queen = new Person("Mary"); // Person类实例
var count = new Person("Dracula"){ ... }; // Person类匿名子类实例`)]),n("p",null,"尽管匿名类不能有构造器，但可以提供一个对象初始化块。"),n("p",null,"将内部类声明为static，将使该类成为静态内部类。不会生成外部类对象的引用。只有内部类可以声明为static，静态内部类可以有静态字段和方法。"),n("p",null,"在接口中声明的内部类自动是static和public，类中声明的接口、记录和枚举都自动为static。"),n("h3",{class:"title"},"代理"),n("p",null,"利用代理可以在运行时创建实现了一组给定接口的新类，只有在编译时无法确定需要实现哪个接口时才有必要使用代理。"),n("p",null,"代理类包含以下方法：指定接口所需要的全部方法；Object类中定义的全部方法（toString、equals等）。不能在运行时为这些方法定义新代码。"),n("p",null,"代理类总是public和final。")],-1)])]),_:1})}const m=t(u,[["render",p]]);export{m as default};
