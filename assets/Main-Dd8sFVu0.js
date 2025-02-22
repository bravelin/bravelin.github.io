import{_ as u,m as a,p as s,h as o,o as r,e as l,q as e}from"./index-D4Bwbg5j.js";const c={};function p(i,n){const t=o("MyArticle");return r(),a(t,{title:"Java学习笔记之三：继承",date:"2024年02月22日"},{default:s(()=>n[0]||(n[0]=[l("div",{class:"_article-content"},[l("p",null,'继承的基本思想是，可以基于已有的类创建新的类。继承已存在的类就是复用（继承）这些类的方法，而且可以增加一些新的方法和字段，使新类能够适应新的情况。"is-a"关系是继承的一个明显特征。'),l("p",null,"反射是指在程序运行期间更多地了解类及其属性的能力。"),l("pre",null,[l("code",null,`public class Manager extends Employee{
}`)]),l("p",null,"关键字extends指示正在构造的新类派生于一个已存在的类，这个已存在的类称为超类、基类或父类，新类称为子类或派生类。子类比超类拥有的功能更多。声明为私有的类成员不会被这个类的子类继承。因此，在设计类的时候，应该将最一般的方法放在超类中, 而将更特殊的方法放在子类中。"),l("p",null,[l("strong",null,"record类和枚举类是隐式final的，不能被继承。")]),l("p",null,"使用super调用构造器的语句必须是子类构造器的第一条语句。如果构造子类对象时没有显式地调用超类的构造器，那么超类必须有一个无参数构造。这个构造器要在子类构造之前调用。"),l("p",null,"一个对象变量可以指示多种实际类型，这一点称为多态。在运行时能够自动地选择适当的方法，这称为劫态绑定。"),l("p",null,"在覆盖一个方法的时候，子类方法不能低于超类方法的可见性。具体地，如果超类方法是public,子类方法必须也要声明为public。"),l("p",null,"不允许扩展的类被称为final类："),l("pre",null,[l("code",null,`public final class Executive extends Manager{
}`)]),l("p",null,"将一个类声明为final，只有其中的方法自动地成为final，而不包括字段。"),l("p",null,"也可以将类中的某个特定方法声明为final，如果这样做，那么所有子类都不能覆盖这个方法："),l("pre",null,[l("code",null,`public class Employee{
    public final String getName () {
        return name;
    }
}`)]),l("p",null,[e("在进行强制类型转换之前，先查看是否能够成功地转换，为此只需要使用"),l("strong",null,"instanceof"),e("操作符：")]),l("pre",null,[l("code",null,`if(staff[i] instanceof Manager) {
    boss = (Manager) staff[i];
    boss.setBonus(5000);
}`)]),l("p",null,"在java 16中的简便方式："),l("pre",null,[l("code",null,`if(staff[i] instanceof Manager boss) {
    boss.setBonus(5000);
}`)]),l("p",null,"声明为受保护protected的方法或者字段，将只允许子类访问。受保护字段只能由同一个包中的类访问。"),l("table",{class:"inner-table"},[l("thead",null,[l("tr",null,[l("th",{style:{width:"30%"}},"访问控制修饰符"),l("th",null,"访问权限")])]),l("tbody",null,[l("tr",null,[l("td",null,"private"),l("td",null,"仅本类可以访问")]),l("tr",null,[l("td",null,"public"),l("td",null,"可由外部访问")]),l("tr",null,[l("td",null,"protected"),l("td",null,"本包和所有子类可以访问")]),l("tr",null,[l("td",null,"默认"),l("td",null,"本包中可以访问")])])]),l("p",null,"Object类是Java中所有类的始祖。Object类型的变量只能用于作为任意值的一个泛型容器，要想对其中的内容进行具体的操作，还需要清楚对象的原始类型，并进行相应的强制类型转换："),l("pre",null,[l("code",null,`Object obj = new Employee("Harry Hacker", 3500);
Employee e =（Employee）obj;`)]),l("p",null,"Object类中的equals方法用于检测一个对象是否等于另外一个对象，Object类中实现的equals方法将确定两个对象引用是否相同。在子类中定义equals方法时，首先调用超类的equals，如果检测失败，那么对象就不可能相等，如果超类中的字段都相等，则可以继续比较子类中的实例字段。")],-1)])),_:1})}const f=u(c,[["render",p]]);export{f as default};
