import{_ as a,q as s,s as r,h as u,o,e as l,x as n}from"./index-Gk4_0vGT.js";const i={};function p(c,e){const t=u("MyArticle");return o(),s(t,{title:"Java学习笔记之三：继承",date:"2024年02月22日"},{default:r(()=>e[0]||(e[0]=[l("div",{class:"_article-content"},[l("p",null,'继承的基本思想是，可以基于已有的类创建新的类。继承已存在的类就是复用（继承）这些类的方法，而且可以增加一些新的方法和字段，使新类能够适应新的情况。"is-a"关系是继承的一个明显特征。'),l("p",null,"反射是指在程序运行期间更多地了解类及其属性的能力。"),l("pre",null,[l("code",null,`public class Manager extends Employee{
}`)]),l("p",null,"关键字extends指示正在构造的新类派生于一个已存在的类，这个已存在的类称为超类、基类或父类，新类称为子类或派生类。子类比超类拥有的功能更多。声明为私有的类成员不会被这个类的子类继承。因此，在设计类的时候，应该将最一般的方法放在超类中, 而将更特殊的方法放在子类中。"),l("p",null,[l("strong",null,"record类和枚举类是隐式final的，不能被继承。")]),l("p",null,"使用super调用构造器的语句必须是子类构造器的第一条语句。如果构造子类对象时没有显式地调用超类的构造器，那么超类必须有一个无参数构造。这个构造器要在子类构造之前调用。"),l("p",null,"一个对象变量可以指示多种实际类型，这一点称为多态。在运行时能够自动地选择适当的方法，这称为劫态绑定。"),l("p",null,"在覆盖一个方法的时候，子类方法不能低于超类方法的可见性。具体地，如果超类方法是public,子类方法必须也要声明为public。"),l("p",null,"不允许扩展的类被称为final类："),l("pre",null,[l("code",null,`public final class Executive extends Manager{
}`)]),l("p",null,"将一个类声明为final，只有其中的方法自动地成为final，而不包括字段。"),l("p",null,"也可以将类中的某个特定方法声明为final，如果这样做，那么所有子类都不能覆盖这个方法："),l("pre",null,[l("code",null,`public class Employee{
    public final String getName () {
        return name;
    }
}`)]),l("p",null,[n("在进行强制类型转换之前，先查看是否能够成功地转换，为此只需要使用"),l("strong",null,"instanceof"),n("操作符：")]),l("pre",null,[l("code",null,`if(staff[i] instanceof Manager) {
    boss = (Manager) staff[i];
    boss.setBonus(5000);
}`)]),l("p",null,"在java 16中的简便方式："),l("pre",null,[l("code",null,`if(staff[i] instanceof Manager boss) {
    boss.setBonus(5000);
}`)]),l("p",null,"声明为受保护protected的方法或者字段，将只允许子类访问。受保护字段只能由同一个包中的类访问。"),l("table",{class:"inner-table"},[l("thead",null,[l("tr",null,[l("th",{style:{width:"30%"}},"访问控制修饰符"),l("th",null,"访问权限")])]),l("tbody",null,[l("tr",null,[l("td",null,"private"),l("td",null,"仅本类可以访问")]),l("tr",null,[l("td",null,"public"),l("td",null,"可由外部访问")]),l("tr",null,[l("td",null,"protected"),l("td",null,"本包和所有子类可以访问")]),l("tr",null,[l("td",null,"默认"),l("td",null,"本包中可以访问")])])]),l("p",null,"Object类是Java中所有类的始祖。Object类型的变量只能用于作为任意值的一个泛型容器，要想对其中的内容进行具体的操作，还需要清楚对象的原始类型，并进行相应的强制类型转换："),l("pre",null,[l("code",null,`Object obj = new Employee("Harry Hacker", 3500);
Employee e =（Employee）obj;`)]),l("h3",{class:"title"},"equals方法"),l("p",null,"Object类中的equals方法用于检测一个对象是否等于另外一个对象，Object类中实现的equals方法将确定两个对象引用是否相同。在子类中定义equals方法时，首先调用超类的equals，如果检测失败，那么对象就不可能相等，如果超类中的字段都相等，则可以继续比较子类中的实例字段。"),l("pre",null,[l("code",null,`public class Employee {
    public boolean equals (Object otherObject) {
        // if (!super.equals(otherObject) ) return false;
        if (this == otherObject) return true;
        if (otherObject == null) return false;
        if (getClass() != otherObject.getClass()) return false;

        Employee other = (Employee) otherObject;
        return Object.equals(this.name, other.name) && this.salary == other.salary && Object.equals(this.hireDay, other.hireDay);
    }
}`)]),l("p",null,"getClass方法将返回一个对象所属的类。"),l("p",null,"记录会自动定义一个比较字段的equals方法，两个记录实例中相应字段值相等时，这两个记录实例就相等。"),l("p",null,"Java语言规范要求equals方法具有下述性质："),l("ul",{class:"inner-list"},[l("li",null,"自反性：对于任何非null引用x, x.equals(x)应该返回true。"),l("li",null,"对称性：对于任何非null引用x和y，如果x.equals(y)返回true，那么y.equals(x)也必须返回true。"),l("li",null,"传递性：对于任何非null引用x,y,z，如果x.equals(y)返回true，y.equals(z)返回true，那么x.equals(z)也必须返回true。"),l("li",null,"一致性：对于任何非null引用x和y，如果x.equals(y)返回true，那么x.equals(y)应该一直返回true，直到x或y被修改。"),l("li",null,"对于任何非null引用x，x.equals(null)应该返回false。")]),l("p",null,"如果在子类中重新定义equals,就要在其中包含一个super.equals(other)调用。"),l("p",null,"对于数组类型的字段，可以使用静态的Arrays.equals方法检查相应的数组元素是否相等。对于多维数组，可以Arrays.deepEquals方法。"),l("p",null,"可以使用@Override标记要覆盖超类方法的那些子类方法："),l("pre",null,[l("code",null,"@Override public boolean equals(Object otherObject)")]),l("h3",{class:"title"},"散列码（hash code）"),l("p",null,"由对象导出的一个整型值，散列码是没有规律的，如果x和y是两个不同的对象，那么x.hashCode()与y.hashCode()基本上不会相同。"),l("p",null,"字符串的散列码是由内容导出的，相同内容的字符串散列码相等："),l("pre",null,[l("code",null,`String a = "abcedf";
String b = new String("abcedf");
System.out.println(a.hashCode()); // -1424385019
System.out.println(b.hashCode()); // -1424385019`)]),l("p",null,"对象的默认散列码由对象的存储地址得出。可以重新定义："),l("pre",null,[l("code",null,`public int hashCode() {
    return Objects.hash(name, salary, hireDay);
}`)]),l("p",null,"如果有数组类型的字段，那么可以使用静态的Arrays.hashCode方法计算一个散列码，这个散列码由数组元素的散列鸡组成。record类型会自动提供一个hashCode方法，它会由字段值的散列码得出一个散列码。"),l("h3",{class:"title"},"toString方法"),l("p",null,"toString方法返回一个字符串，该字符串描述了对象。绝大多数toString方法都遵循这样的格式：首先是类名，随后是一对方括号括起来的字段值。"),l("pre",null,[l("code",null,`public String toString(){
    return getClass().getName() + "[" + name + "," + salary + "," + hireDay + "]";
}`)]),l("p",null,"子类的toString方法可以调用super.toString："),l("pre",null,[l("code",null,`public class Manager extends Employee{
    public String toString(){
        return super.toString() + "[department=" + department + "]";
    }
}`)]),l("p",null,"只要对象与一个字符串通过操作符+拼接起来，编译器就会自动地调用toString方法来获得这个对象的字符串描述。"),l("h3",{class:"title"},"泛型数组列表"),l("p",null,"ArrayList是一个有类型参数的泛型类，为了指定数组列表保存的元素对象的类型，需要用一对尖括号将类名括起来追加到ArrayList后面。"),l("pre",null,[l("code",null,`ArrayList<Employee> staff = new ArrayList<Employee>();
staff.add(new Employee("Carl Cracker", 75000, 1987, 12, 15));
staff.size() // 返回数组列表中包含的实际元素个数
`)]),l("p",null,"数组列表的容量与数组的大小有一个非常重要的区别，完成初始化构造之后，数组列表并不包含任何元素；数组列表即使设置了初始容量也可以重新分配空间。一旦能够确认数组列表的大小将保持恒定，不再发生变化，就可以调用trimToSize方法，这个方法将内存块的大小调整为保存当前元素数量所需要的存储空间，垃圾回收器将回收多余的存储空间。"),l("p",null,[l("strong",null,"一旦削减了数组列表的大小，添加新元素就需要再次移动内存块，这很耗费时间，所以应当只有在确认不会再向数组列表添加任何元素时才调用trimToSize方法。")]),l("p",null,"访问ArrayList："),l("pre",null,[l("code",null,`staff.set(i, employeeObj);
Employee obj = staff.get(i);
// 没有泛型类时
Employee obj = (Employee)staff.get(i);
// 删除元素
Employee e = staff.remove(n);
            `)]),l("p",null,"循环遍历ArrayList："),l("pre",null,[l("code",null,`for (Employee e : staff){
    System.out.print(e);
}
// 等价于
for (int i = 0; i < staff.size(); i++){
    Employee e = staff.get(i);
    System.out.print(e);
}`)]),l("h3",{class:"tibtle"},"对象包装器与自动装箱"),l("p",null,"包装器类：Integer、Long、Double、Float、Short、Boolean、Byte、Character，是不可变的。即一旦构造了包装器，就不允许更改包装在其中的值。包装器类还是final, 因此不能派生它们的子类。"),l("p",null,"自动拆箱与自动装箱："),l("pre",null,[l("code",null,`Array<Integer> list = new Array<Integer>();
list.add(1); // 装箱设置值
int n = list.get(0); // 拆箱获取值`)]),l("p",null,"自动装箱和自动拆箱甚至也适用于算术表达式："),l("pre",null,[l("code",null,`Integer a = 3;
a++;
System.out.println(a);`)]),l("h3",{class:"title"},"参数个数可变的方法"),l("p",null,"使用可变参数列表，方法参数可以接受一个数组作为参数。"),l("pre",null,[l("code",null,`public double max(double... values){
    double largest = Double.NEGATIVE_INFINITY;
    for (double d : values){
        if (d > largest){
            largest = d;
        }
    }
    return largest;
}`)]),l("h3",{class:"title"},"抽象类"),l("p",null,"包含一个或多个抽象方法的类本身必须被声明为抽象的："),l("pre",null,[l("code",null,`public abstract class Person{
    public abstract String getDescription();
}`)]),l("p",null,"抽象类还可以包含字段和具体方法，抽象类不能实例化，但可以创建具体子类的对象；也可以创建一个抽象类的对象变量，但是这样一个变量只能引用非抽象子类的对象。"),l("h3",{class:"title"},"枚举类"),l("p",null,"枚举类是一个特殊的类，它不能被继承，并且它的所有实例都是相同的，并且它们是final的。在比较枚举类型的值时，并不需要使用equals，可以直接使用==来比较。如果需要的话，可以为枚举类型增加构造器、方法和字段。"),l("pre",null,[l("code",null,`public enum Size{
    SMALL("S"), MEDIUM("M"), LARGE("L"), EXTRA_LARGE("XL);
    private String abbreviation;
    private Size(String abbreviation){
        this.abbreviation = abbreviation;
    }
    public String getAbbreviation(){
        return abbreviation;
    }
}`)]),l("p",null,'枚举的构造器总是私有的。所有的枚举类型都是抽象类Enum的子类，它们继承了这个类的许多方法。其中，最有用的一个是toString, 这个方法会返回枚举常量名。例如，Size.SMALL.toString()将返回字符串"SMALL"。toString的逆方法是静态方法valueOf。'),l("pre",null,[l("code",null,'Size s = Enum.valueOf(Size.class, "SMALL"); // s设置成Size.SMALL')]),l("p",null,"每个枚举类型都有一个静态的values方法，它将返回一个包含全部枚举值的数组："),l("pre",null,[l("code",null,"Size[] values = Size.values();")]),l("p",null,"ordinal方法返回一个枚举常量在enum声明中的位置，位置从0开始计数。Size.MEDIUM.ordinal()返回1。"),l("h3",{class:"title"},"密封类"),l("p",null,"密封类(sealed class)会控制哪些类可以继承它中，Java 15 中作为一个预览特性增加了密封类，并在Java 17中最终确定了这个特性。"),l("pre",null,[l("code",null,`public abstract sealed class JSONValue
    permits JSONObject, JSONArray, JSONString, JSONNumber, JSONBoolean, JSONNull{
    ...
}`)]),l("p",null,"一个密封类允许的子类必须是可访问的。它们不能是嵌套在另一个类中的私有类，也不能是位于另一个包中的包可见的类。对于允许的公共子类，规则要更为严格。它们必须与密封类在同一个包中，如果使用模块，则必须在同一个模块中。"),l("p",null,"密封类的子类必须指定它是sealed、final，还是允许继续派生子类（必须声明为non-sealed）。"),l("p",null,"non-sealed关犍字是第一个带连字符的Java关键字。"),l("pre",null,[l("code",null,`public abstract sealed class Node
    permits Element, Text, Comment, CDATASection, EntityReference, ProcessingInstruction{
    ......
}
public non-sealed class Element extends Node
{
    ......
}
public class HTMLDivElement extends Element{
    ......
}`)]),l("h3",{class:"title"},"反射"),l("p",null,"反射库提供了一个丰富且精巧的工具集，可以用来编写动态操纵Java代码的程序。能够分析类能力的程序称为可反射，反射机制可以：在运行时分析类的能力、在运行时检查对象、实现泛型数组操作代码、利用Method对象（类似C++函数指针）。"),l("p",null,"运行时系统始终为所有对象维护一个运行时类型标识，这个信息会跟踪每个对象所属的类，虚拟机利用运行时类型信息选择要执行的正确方法。"),l("p",null,"获取Class对象的三种方式："),l("pre",null,[l("code",null,`// ①
Employee e = new Employee();
Class c1 = e.getClass();
// ②
var generator = new Random();
Class c2 = generator.class;
System.out.println(c2.getName());
// ③
Class c3 = Class.forName("java.util.Random");
System.out.println(c3.getName());`)]),l("p",null,"如果有一个Class类型的对象，可以用它构造类的实例。调用getConstructor方法将得到一个Constructor类型的对象，然后使用newInstance方法来构造一个实例："),l("pre",null,[l("code",null,`String className = "java.util.Random";
Class cl = Class.forName(className);
Object obj = cl.getConstructor().newInstance();`)]),l("p",null,"利用反射Copy数组："),l("pre",null,[l("code",null,`public static Object goodCopyOf(Object a, int newLength){
    Class cl = a.getClass();
    if (!cl.isArray()){ // 如果不是数组，则返回null
        return null;
    }
    Class componentType = cl.getComponentType();
    int length = Array.getLength(a);
    Object newArray = Array.newInstance(componentType, newLength);
    System.arraycopy(a, 0, newArray, 0, Math.min(length, newLength));
    return newArray;
}`)]),l("p",null,"反射很脆弱，如果使用反射。编译器将无法帮助你查找编程错误，直到运行时才会发现错误并导致异常。"),l("h3",{class:"title"},"继承的设计技巧"),l("p",null,"将公共操作和字段放在超类中；不要使用受保护的字段；使用继承实现is-a关系；除非所有继承的方法都有意义，否则不要使用继承；覆盖方法时，不要改变预期的行为；使用多态，而不要使用类型信息；不要滥用反射。")],-1)])),_:1})}const b=a(i,[["render",p]]);export{b as default};
