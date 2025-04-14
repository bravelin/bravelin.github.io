import{_ as r,q as a,s as i,h as t,o as c,e as n}from"./index-DvbT3Ksl.js";const u={};function s(p,l){const e=t("MyArticle");return c(),a(e,{title:"Java学习笔记之六：泛型程序设计",date:"2024年03月10日"},{default:i(()=>l[0]||(l[0]=[n("div",{class:"_article-content"},[n("p",null,"泛型程序设计（generic programming）意味着编写的代码可以对多种不同类型的对象重用。类型参数会让你的程序更易读，也更安全。"),n("p",null,"泛型类是有一个或多个类型变量的类："),n("pre",null,[n("code",null,`public class Pair<T>{
    private T first;
}
public class Pair<T, U>{}`)]),n("p",null,"类型变量在整个类定义中用于指定方法的返回类型以及字段和局部变量的类型。类型变量使用大写字母，E表示集合的元素类型，K和V分别表示键和值的类型，T、S、U表示任意类型。"),n("p",null,"泛型方法："),n("pre",null,[n("code",null,`public class ArrayAlg{
    public static <T> T getMiddle(T[] a){
        return a[a.length / 2];
    }
}`)]),n("p",null,"调用："),n("pre",null,[n("code",null,`String middle = ArrayAlg.<String>getMiddle("John", "lucy", "public");
// 简化
String middle = ArrayAlg.getMiddle("John", "lucy", "public");`)]),n("p",null,"类型变量放在修饰符的后面，并在返回类型的前面。可以在普通类中定义泛型方法，也可以在泛型类中定义。"),n("p",null,"限定类型变量：<T extends BoundingType>，T和限定类型可以是类，也可以是接口。"),n("pre",null,[n("code",null,"public static <T extends Comparable> T min(T[] a) { ... }")]),n("p",null,"一个类型变量或通配符可以有多个限定："),n("pre",null,[n("code",null,"T extends Comparable & Serializable")]),n("p",null,"可以根据需要拥有多个接口超类型，但最多有一个限定可以是类。如果有一个类作为限定，它必须是限定列表中的第一个限定。"),n("pre",null,[n("code",null,`public static <T extends Comparable> Pair<T> minmax(T[] arr){
    if (arr == null || arr.length == 0) {
        return null;
    }
    T min = arr[0];
    T max = arr[0];
    for (int i = 1; i < arr.length; i++) {
        if (min.compareTo(arr[i]) > 0) {
            min = arr[i];
        }
        if (max.compareTo(arr[i]) < 0) {
            max = arr[i];
        }
    }
    return new Pair<T>(min, max);
}`)]),n("p",null,"虚拟机没有泛型类型对象，所有对象都属于普通类。无论何时定义一个泛型类型，都会自动提供一个相应的原始类型，这个原始类型的名字就是去掉类型参数后的泛型类型名，类型变量会被擦除，并替换为其限定类型。对于无限定的变量则替换为Object。"),n("pre",null,[n("code",null,`public class Pair{
    private Object first;
    private Object second;
    public Pair(Object first, Object second){
        this.first = first;
        this.second = second;
    }
}`)]),n("p",null,"原始类型用第一个限定来替换类型变量，或者，如果没有给定限定，就替换为Object。"),n("p",null,'注解@SuppressWarnings("unchecked")会关闭对方法中所有代码的检查。'),n("h3",{class:"title"},"限制与局限性"),n("p",null,"不能用基本类型实例化类型参数；如果试图查询一个对象是否属于某个泛型类型，会得到一个编译器错误或者得到一个警告。"),n("pre",null,[n("code",null,`if (a instanceof Pair<String>) // ERROR
if (a instanceof Pair<T>) // ERROR`)]),n("p",null,"getClass方法总是返回原始类型："),n("pre",null,[n("code",null,`Pair<String> stringPair = ...
Pair<Employee> employeePair = ...
if (stringPair.getClass() == employeePair.getClass()) { // ALWAYS TRUE
    System.out.println("Same!");
}`)]),n("p",null,"不能实例化参数化类型的数组："),n("pre",null,[n("code",null,"var table = new Pair<String>[10]; // ERROR")]),n("p",null,"如果需要收集参数化类型对象，可以使用ArrayList："),n("pre",null,[n("code",null,"ArrayList<Pair<String>>")]),n("p",null,"不能在类似new T(...)的表达式中使用类型变量："),n("pre",null,[n("code",null,`public Pair() {
    first = new T(); // ERROR
    second = new T(); // ERROR
}`)]),n("p",null,"Java8之后，最好的解决办法是让调用者提供一个构造器表达式："),n("pre",null,[n("code",null,`Pair<String> p = Pair.makePair(String::new);
public static <T> Pair<T> makePair(Supplier<T> constr) {
    return new Pair<T>(constr.get(), constr.get());
}`)]),n("p",null,"或者通过反射："),n("pre",null,[n("code",null,`public static <T> Pair<T> makePair(Class<T> cl) {
    try {
        Constructor<T> c = cl.getConstructor();
        return new Pair<T>(c.newInstance(), c.newInstance());
    } catch (Exception e) {
        throw new RuntimeException(e);
    }
}
Pair<String> p = Pair.makePair(String.class);`)]),n("p",null,"Class类本身是泛型的，String.class是Class<String>的一个实例。"),n("p",null,"不能构造泛型数组："),n("pre",null,[n("code",null,`public static <T extends Comparable> T[] minmax(T...a){
    T[] mm = new T[2]; // ERROR
}`)]),n("p",null,"泛型类不能在静态字段或方法中引用类型变量："),n("pre",null,[n("code",null,`public class Singleton<T>{
    private static T instance; // ERROR
    public static T getInstance(){ // ERROR
        if (instance == null) {
            instance = new T();
        }
        return instance;
    }
}`)]),n("p",null,"不能抛出或捕获泛型类的实例，甚至泛型类扩展Throwable都是不合法的："),n("pre",null,[n("code",null,`public class Problem<T> extends Exception{ // ERROR
}`)]),n("p",null,"catch子句中不能使用类型变量，以下方法将不能编译："),n("pre",null,[n("code",null,`public static <T entends Throwable> void doWork(class<T> t){
    try{
        ...
    }catch(T e){ // ERROR
        ...
    }
}`)]),n("p",null,"在异常规范中使用类型变量是允许的，以下方法是合法的："),n("pre",null,[n("code",null,`public static <T extends Throwable> void doWork(class<T> t) throws T{
    try{
        ...
    } catch(Throwable realCause){
    }
}`)]),n("p",null,"倘若两个接口类型是同一接口的不同参数化, 一个类或类型变量就不能同时作为这两个接口类型的子类："),n("pre",null,[n("code",null,`class Employee implements Comparable<Employee>{}
class Manager extends Employee implaments Comparable<Manager>{} // ERROR`)]),n("p",null,"Manager不能同时实现Comparable<Employee>和Comparable<Manager>。"),n("p",null,"一般来讲，无论S与T有什么关系，Pair<S>与Pair<T>都没有任何关系。"),n("p",null,"通配符类型 Pair<? extends Employee>表示Pair类型，它的类型参数是Employee的子类，如Pair<Manager>，但不能是Pair<String>。"),n("p",null,"通配符的超类型限定："),n("pre",null,[n("code",null,"? super Manager // 限制为Manager的所有超类型")]),n("p",null,"直观地讲，带有超类型限定的通配符允许你写入一个泛型对象，而带有子类型限定的通配符允许你读取一个泛型对象。")],-1)])),_:1})}const d=r(u,[["render",s]]);export{d as default};
