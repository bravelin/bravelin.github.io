import{_ as a,q as o,s as i,h as r,o as u,e as n,x as l}from"./index-5cTkXVTa.js";const c={};function s(d,t){const e=r("MyArticle");return u(),o(e,{title:"Java学习笔记之八：并发(1)",date:"2024年03月21日"},{default:i(()=>t[0]||(t[0]=[n("div",{class:"_article-content"},[n("p",null,"多进程与多线程本质的区别是进程拥有独立资源和内存空间，而线程共享进程资源，轻量级。创建、撤销单个线程开销要小很多。"),n("p",null,"创建线程可以通过实现Runnable接口，将执行任务的代码放进run方法中："),n("pre",null,[n("code",null,"public interface Runnable{ void run(); }")]),n("p",null,"或者lambda表达式的形式："),n("pre",null,[n("code",null,"Runnable r = () -> { task code }")]),n("p",null,"构造线程并启动："),n("pre",null,[n("code",null,`Thread t = new Thread(r);
t.start();`)]),n("p",null,"不要调用Thread类或者Runnable对象的run方法。直接调用run方法只会在同一个线程中执行这个任务，而没有启动新线程。"),n("pre",null,[n("code",null,`import java.util.*;
public class Bank {
    private final double[] accounts;

    public Bank (int n, double initBalance) {
        accounts = new double[n];
        Arrays.fill(accounts, initBalance);
    }

    public void transfer (int from, int to, double amount) {
        if (accounts[from] < amount) {
            return;
        }
        System.out.print(Thread.currentThread());
        accounts[from] -= amount;
        System.out.printf("%10.2f from %d to %d", amount, from, to);
        accounts[to] += amount;
        System.out.printf("total balance %10.2f%n", getTotalBalance());
    }

    public double getTotalBalance () {
        double sum = 0;
        for (double item : accounts) {
            sum += item;
        }
        return sum;
    }
}`)]),n("pre",null,[n("code",null,`public class ThreadTest {
    public static final int DELAY = 500;
    public static final int STEPS = 1000;
    public static final double MAX_AMOUNT = 1000;

    public static void main(String[] args) {
        Bank bank = new Bank(4, 100000);

        Runnable task1 = () -> {
            try {
                for (int i = 0; i < STEPS; i++) {
                    double amount = Math.random() * MAX_AMOUNT;
                    bank.transfer(0, 1, amount);
                    Thread.sleep((int) (DELAY * Math.random()));
                }
            } catch (InterruptedException e) {
                System.out.println(e);
            }
        };

        Runnable task2 = () -> {
            try {
                for (int i = 0; i < STEPS; i++) {
                    double amount = Math.random() * MAX_AMOUNT;
                    bank.transfer(2, 3, amount);
                    Thread.sleep((int) (DELAY * Math.random()));
                }
            } catch (InterruptedException e) {
                System.out.println(e);
            }
        };

        new Thread(task1).start();
        new Thread(task2).start();
    }
}`)]),n("h3",{class:"title"},"线程状态"),n("p",null,[l("调用getState方法可以获取线程当前状态，线程可以有6种状态："),n("strong",null,"New（新建）、Runnable（可运行）、Blocked（阻塞）、Waiting（等待）、Time waiting（计时等待）、Terminated（终止）"),l("。")]),n("p",null,"当用new Thread操作符创建线程时，此时线程还没有开始运行，处于New状态。"),n("p",null,"一旦调用start方法，线程将处于可运行状态，一个runnable状态的线程可能正在运行也可能没有运行。要由操作系统提供具体的运行时间。一旦一个线程开始运行，它不一定始终处于运行状态。运行中的线程有时需要暂停，让其他线程有机会执行。抢占式调度系统给每一个可运行线程一个时间片来执行任务。当时间片用完，操作系统剥夺该线程的运行权，并依据线程的优先级程度给另一个线程运行的机会。"),n("p",null,"在有多个处理器的机器上，每个处理器可以运行一个线程，而且可以有多个线程并行运行。"),n("p",null,"yield()方法使当前正在执行的线程向另一个线程交出运行权。"),n("p",null,"当线程处于阻塞或者等待状态时，它暂时是不活动的，不执行任何代码。"),n("ul",{class:"inner-list"},[n("li",null,"当一个线程试图获取一个内部的对象锁，而这个锁目前被其他线程占用，该线程将会被阻塞；当所有线程释放了该锁，并且线程调度器允许该线程持有该锁，它将变成非阻塞状态；"),n("li",null,"当一个线程等待另一个线程通知调度器出现某个条件时，该线程将进入等待状态；调用Object.wait或者Thread.join，或者等待java.util.concurrent库中的Lock或Condition时，将进入等待状态；"),n("li",null,"有些方法如Thread.sleep、Object.wait、Thread.join、Lock.tryLock及Condition.await带有超时参数，调用这些方法会让线程进入计时等待状态Time waiting；这一状态将一直保持到超时期满或者接收到适当的通知；")]),n("p",null,"线程进入到终止状态可能有以下原因："),n("ul",{class:"inner-list"},[n("li",null,"run方法正常退出，线程自然终止；"),n("li",null,"因没有捕获的异常终止了run方法，使线程异外终止；")]),n("figure",{class:"common"},[n("a",{class:"pswp-img",href:"https://gitee.com/bravelin/pics/raw/master/article/20250423162917.webp","data-pswp-width":"768","data-pswp-height":"972",target:"_blank"},[n("img",{class:"thumbnail-img",src:"https://gitee.com/bravelin/pics/raw/master/article/20250423162917.webp"})])]),n("pre",null,[n("code",null,`void join() // 等待指定的线程终止
void join(long millis) // 等待指定的线程终止或者等待经过指定的毫秒数`)]),n("h3",{class:"title"},"线程属性"),n("p",null,"除了以及废弃的stop方法，没有办法强制一个线程终止，interrupt方法可以用来请求终止一个线程。"),n("p",null,"当对一个线程调用interrupt方法时，就会设置线程的中断状态（interrupted status），这是每个线程都有的一个boolean标志。各个线程需要不时地检查该标志，以判断线程是否被中断："),n("pre",null,[n("code",null,"while(!Thread.currentThread().isInterrupted()) { ... }")]),n("p",null,[l("但是，如果线程被阻塞，是无法检查中断状态的。需要捕获InterruptedException异常。"),n("strong",null,"在一个被sleep或者wait调用阻塞的线程上调用interrupt方法时，那个阻塞调用将被一个InterruptedException异常中断。")]),n("p",null,"Java语言没有要求中断的线程应当终止。被中断的线程可以决定如何响应中断。如果某些线程非常重要，应该处理这个异常之后继续执行下去。大部分情况下是如下形式："),n("pre",null,[n("code",null,`try{
    while(!Thread.currentThread().isInterrupted() && moreWorkToDo) { ... }
} catch (InterruptedException e) {
    ...
} finally {
    ...
}`)]),n("p",null,"如果每次工作迭代之后都调用sleep方法，则没有必要检查isInterrupted。如果设置了中断状态，如果此时调用sleep方法，则该线程不休眠，将清除中断状态并抛出InterruptedException异常。因此，如果线程循环中调用了sleep，应写成如下形式："),n("pre",null,[n("code",null,`try{
    while(moreWorkToDo) { 
        ... 
        Thread.sleep(delay)
    }
} catch (InterruptedException e) {
    ...
} finally {
    ...
}`)]),n("p",null,"两个类似的方法："),n("ul",{class:"inner-list"},[n("li",null,"interrupted：静态方法，检查当前线程是否被中断，而且，调用interrupted方法会清除该线程的中断状态；"),n("li",null,"isInterrupted：实例方法，可以用来检查是否有线程被中断，调用此方法不会改变中断状态；")]),n("p",null,"将一个线程转换为守护线程："),n("pre",null,[n("code",null,"t.setDaemon(true); // 必须在线程启动之前调用")]),n("p",null,"守护线程唯一的用途是为其他线程提供服务。"),n("p",null,"为线程设置名字："),n("pre",null,[n("code",null,`var t = new Thread(runnable);
t.setName("MyThread");`)]),n("p",null,"线程的run方法不能抛出任何检查型异常，但是非检查型异常会导致线程终止。在线程终止之前，异常会传递到一个用于处理未捕获异常的处理器。这个处理器必须属于实现了Thread.UncaughtExceptionHandler接口的类。"),n("p",null,"可以用setUncaughtExceptionHandler方法为任何线程安装处理器，也可以使用Thread类的静态方法setDefaultUncaughtExceptionHandler为所有线程安装默认的处理器。"),n("p",null,"如果没有为单个线程安装处理器，处理器则为该线程的ThreadGroup对象。线程组是可以一起管理的线程集合。默认情况下创建的所有线程都属于相同的同一个线程组，也可以建立其他线程组。"),n("p",null,"ThreadGroup类实现了Thread.UncaughtExceptionHandler接口，执行以下操作："),n("ul",{class:"inner-list"},[n("li",null,"如果该线程组有父线程组，则调用父线程组的uncaughtException方法；"),n("li",null,"否则，如果Thread.getDefaultUncaughtExceptionHandler()不为null，则调用该处理器；"),n("li",null,"否则，如果Throwable是ThreadDeath的一个实例，什么都不做；"),n("li",null,"否则，将线程的名字以及Throwable的栈轨迹输出到System.err")]),n("p",null,"每个线程有一个优先级，默认情况下，一个线程会继承构造它的线程的优先级。使用setPriority方法设置优先级，可以设置为MIN_PRIORITY（定义为1）与MAX_PRIORITY（定义为10）之间的任何值。NORMAL_PRIORITY（定义为5）为默认优先级。"),n("h3",{class:"title"},"同步"),n("p",null,[l("在大多数实际的多线程应用中，两个或者两个以上的线程需要共享存取相同的数据。如果两个线程存取同一个对象，并且每个线程调用了修改该对象状态的方法，这种情况称为"),n("strong",null,"竞态条件"),l("。")]),n("p",null,"竞态条件例子："),n("pre",null,[n("code",null,`public static final int DELAY = 10;
public static final int NUM = 50;
public static final double MAX_AMOUNT = 1000;

public static void main(String[] args) {
    Bank bank = new Bank(NUM, 100000);

    for (int i = 0; i < NUM; i++) {
        int from = i;
        Runnable task = () -> {
            try {
                while(true){
                    int to = (int) (bank.getSize() * Math.random());
                    double amount = Math.random() * MAX_AMOUNT;
                    bank.transfer(from, to, amount);
                    Thread.sleep((int) (DELAY * Math.random()));
                }
            } catch (InterruptedException e) {
                System.out.println(e);
            }
        };

        new Thread(task).start();
    }
}`)]),n("p",null,"transfer方法在执行到中间时有可能被打断："),n("pre",null,[n("code",null,`Thread[Thread-8,5,main]    259.73 from 8 to 16total balance 5000000.00
Thread[Thread-21,5,main]    233.07 from 21 to 49total balance 5000000.00
Thread[Thread-19,5,main]    283.42 from 19 to 29total balance 5000000.00
Thread[Thread-19,5,main]    969.30 from 19 to 14total balance 5000000.00
Thread[Thread-47,5,main]Thread[Thread-34,5,main]    539.71 from 47 to 23total balance 4999808.03
Thread[Thread-29,5,main]    617.22 from 29 to 27total balance 4999808.03
Thread[Thread-11,5,main]    214.08 from 11 to 17total balance 4999808.03
    191.97 from 34 to 49total balance 5000000.00
Thread[Thread-4,5,main]    376.63 from 4 to 2total balance 5000000.00
Thread[Thread-10,5,main]Thread[Thread-19,5,main]    779.45 from 19 to 36total balance 4999211.74
Thread[Thread-48,5,main]Thread[Thread-22,5,main]    270.57 from 22 to 14total balance 4999081.97`)]),n("p",null,"使用ReentrantLock保护代码块的基本结构："),n("pre",null,[n("code",null,`myLock.lock();
try{
    // 临界区代码
}finally{
    myLock.unlock();
}`)]),n("p",null,"确保任何时候只有一个线程进入临界区。一旦一个线程锁定了锁对象，其他线程调用lock时，将暂停直到第一个线程释放锁对象。"),n("pre",null,[n("code",null,`private Lock bankLock = new ReentrantLock();
public void transfer (int from, int to, double amount) { // 改写transfer
    if (accounts[from] < amount) {
        return;
    }
    bankLock.lock();
    try{
        System.out.print(Thread.currentThread());
        accounts[from] -= amount;
        System.out.printf("%10.2f from %d to %d", amount, from, to);
        accounts[to] += amount;
        System.out.printf("total balance %10.2f%n", getTotalBalance());
    } finally {
        bankLock.unlock();
    }
}`)]),n("p",null,"ReentrantLock称为重入锁，因为线程可以反复获得已拥有的锁。它有一个持有计数来跟踪对lock方法的嵌套调用。由于这个特性，由一个锁保护的代码可以调用另外一个同样使用这个锁的方法。"),n("p",null,"线程进入临界区之后发现只有满足了某个条件之后才能执行，此时需要使用条件对象来管理那些已经获得了一个锁却不能有效工作的线程。"),n("p",null,"调用条件对象的await()方法将使当前线程暂停并放弃锁，进入条件的等待集，此时允许另外的线程执行。该线程保持非活动状态，直到另一个线程在相同的条件对象上调用signalAll()方法。"),n("p",null,"signalAll调用会重新激活等待这个条件的所有线程。它们会尝试重新进入该对象，一旦锁可用，将从await调用返回得到锁，并从之前暂停的地方继续执行下去。"),n("p",null,[n("strong",null,"signalAll方法仅仅是通知等待的线程。只要对象的状态发生改变，并且可能有利于正在等待的线程，就可以调用signalAll方法。"),l("signalAll不会立即激活一个等待的线程，它只是解除等待线程的阻塞，使这些线程可以在当前线程释放锁之后竞争访问对象。")]),n("p",null,"signal()方法只是随机选择等待集中的一个线程，解除该线程的阻塞状态，更高效但存在死锁的危险。"),n("pre",null,[n("code",null,`public class Bank {
    private final double[] accounts;
    private Lock bankLock = new ReentrantLock();
    private Condition sufficientFunds = bankLock.newCondition();

    public Bank (int n, double initBalance) {
        accounts = new double[n];
        Arrays.fill(accounts, initBalance);
    }

    public int getSize () {
        return accounts.length;
    }

    public void transfer (int from, int to, double amount) throws  InterruptedException {
        bankLock.lock();
        try{
            while (accounts[from] < amount) {
                sufficientFunds.await();
            }
            System.out.print(Thread.currentThread());
            accounts[from] -= amount;
            System.out.printf("%10.2f from %d to %d", amount, from, to);
            accounts[to] += amount;
            System.out.printf("total balance %10.2f%n", getTotalBalance());
            sufficientFunds.signalAll();
        } finally {
            bankLock.unlock();
        }
    }

    public double getTotalBalance () {
        bankLock.lock();
        try{
            double sum = 0;
            for (double item : accounts) {
                sum += item;
            }
            return sum;
        } finally {
            bankLock.unlock();
        }
    }
}`)]),n("p",null,"Java中每个对象都有一个内部锁，如果方法声明有synchronized关键字，那么对象锁将保护整个方法。"),n("pre",null,[n("code",null,`public synchronized void method () {
    ...
}`)]),n("p",null,"等价于："),n("pre",null,[n("code",null,`public void method () {
    this.intrinsicLock.lock();
    try {
        ...
    } finally {
        this.intrinsicLock.unlock();
    }
}`)]),n("p",null,"内部对象锁只有一个关联条件，wait方法将一个线程添加到等待集中，notifyAll/notify方法可以解除等待线程的阻塞。调用wait和notifyAll方法等价于："),n("pre",null,[n("code",null,`intrinsicCondition.await();
intrinsicCondition.signalAll();`)]),n("p",null,"synchronized的应用，简化代码："),n("pre",null,[n("code",null,`public class Bank {
    private final double[] accounts;

    public Bank (int n, double initBalance) {
        accounts = new double[n];
        Arrays.fill(accounts, initBalance);
    }

    public int getSize () {
        return accounts.length;
    }

    public synchronized void transfer (int from, int to, double amount) throws  InterruptedException {
        while (accounts[from] < amount) {
            wait();
        }
        System.out.print(Thread.currentThread());
        accounts[from] -= amount;
        System.out.printf("%10.2f from %d to %d", amount, from, to);
        accounts[to] += amount;
        System.out.printf("total balance %10.2f%n", getTotalBalance());
        notifyAll();
    }

    public synchronized double getTotalBalance () {
        double sum = 0;
        for (double item : accounts) {
            sum += item;
        }
        return sum;
    }
}`)]),n("p",null,"内部锁和条件存在一些限制，包括："),n("ul",{class:"inner-list"},[n("li",null,"不能中断一个正在尝试获得锁的线程；"),n("li",null,"不能指定尝试获得锁的时间；"),n("li",null,"每个锁只有一个条件，很低效；")]),n("p",null,[n("strong",null,"同步块"),l("：当线程进入有如下形式的一个块时，它会获取obj的锁。")]),n("pre",null,[n("code",null,"synchronized (obj) { ... }")]),n("p",null,"要避免使用基本类型包装器作为锁。如果需要修改一个静态字段，会从特定的类上获得锁，而不是从getClass()返回的值上获取："),n("pre",null,[n("code",null,`synchronized (MyClass.class) { staticCounter++; } // OK
synchronized (getClass()) { staticCounter++; } // ERROR`)]),n("p",null,"监视器有如下属性："),n("ul",{class:"inner-list"},[n("li",null,"监视器是只包含私有字段的类；确保一个线程处理字段时，没有其他线程可以访问这些字段；"),n("li",null,"监视器类的每个对象有一个关联的锁；"),n("li",null,"所有方法由这个锁锁定；即调用obj.method()，方法调用开始时自动获得obj对象的锁，并在方法返回时自动释放这个锁；"),n("li",null,"锁可以有任意多个关联的条件。")]),n("p",null,"“同步格言”：如果写一个变量，而这个变量接下来可能会被另一个线程读取，或者如果读一个变量，而这个变量可能已经被另一个线程写入值，则必须使用同步。"),n("h3",{class:"title"},"volatile"),n("p",null,"volatile关键字为实例字段的同步访问提供了一种免锁机制。如果声明一个字段为volatile，那么编译器和虚拟机就会考虑到该字段可能被另一个线程并发更新。是一种轻量级的同步机制，主要用于解决多线程环境下的可见性和有序性问题，但不保证原子性。"),n("ul",{class:"inner-list"},[n("li",null,"线程操作共享变量时，可能将数据缓存在CPU缓存中，导致其他线程无法立即感知修改后的值。使用volatile修饰的变量，写操作会强制刷新到主内存，读操作会直接从主内存读取最新值，确保所有线程看到的变量值一致。"),n("li",null,"编译器和处理器可能对指令进行重排序优化，导致多线程程序出现意外行为，通过插入内存屏障，volatile禁止对相关指令进行重排序优化，保证代码执行顺序与预期一致。")]),n("p",null,"相比synchronized，volatile不会引起线程上下文切换，适用于简单的状态标记或单次读写操作。"),n("pre",null,[n("code",null,`volatile boolean shutdownRequested = false;

public void shutdown() {
    shutdownRequested = true; // 线程A修改标志
}

public void doWork() {
    while (!shutdownRequested) { // 线程B检测标志
        // 执行任务
    }
}`)]),n("p",null,"单例模式中通过双重检查减少锁竞争："),n("pre",null,[n("code",null,`public class Singleton {
    private static volatile Singleton instance;
    
    public static Singleton getInstance() {
        if (instance == null) { // 第一次检查
            synchronized (Singleton.class) {
                if (instance == null) { // 第二次检查
                    instance = new Singleton(); // 防止重排序为a-c-b（分配内存->引用赋值->初始化）
                }
            }
        }
        return instance;
    }
}`)]),n("p",null,"volatile变量需满足以下条件才能安全使用："),n("ul",{class:"inner-list"},[n("li",null,"写操作不依赖当前值，如赋值flag=true，而非flag=!flag"),n("li",null,"变量不参与其他变量的不变式，如lower <= upper")]),n("p",null,"volatile无法保证原子性，多线程下仍可能导致数据不一致，需改用原子类或者锁机制（synchronized、ReentrantLock）。"),n("p",null,"volatile会禁用编译器和处理器的部分优化（如缓存、指令重排），频繁写入可能影响性能。")],-1)])),_:1})}const m=a(c,[["render",s]]);export{m as default};
