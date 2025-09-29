import{_ as i,s as a,x as r,h as l,o as c,f as e}from"./index-CxcENImR.js";const o={};function u(s,n){const t=l("MyArticle");return c(),a(t,{title:"Java学习笔记之八：并发(2)",date:"2024年03月24日"},{default:r(()=>[...n[0]||(n[0]=[e("div",{class:"_article-content"},[e("h3",{class:"title"},"原子类"),e("p",null,"java.util.concurrent.atomic包中提供了许多原子类，它们通过使用高效的机器级指令（而不是锁）来保证操作的原子性。"),e("p",null,"原子类提供了一些方法，用于在多线程环境下安全地执行一些操作，如加、减、更新等。"),e("pre",null,[e("code",null,`public static AtomicLong nextNumber = new AtomicLong();
long id = nextNumber.incrementAndGet();`)]),e("ul",{class:"inner-list"},[e("li",null,"基本类型原子类：AtomicInteger（原子更新整型）、AtomicLong（原子更新长整型）、AtomicBoolean（原子更新布尔值）"),e("li",null,"数组类型原子类：原子更新数组中的元素，AtomicIntegerArray（整型数组原子操作）、AtomicLongArray（长整型数组原子操作）"),e("li",null,"引用类型原子类：原子更新对象引用，解决多变量操作的线程安全问题。AtomicReference（通用对象引用原子操作）、AtomicStampedReference（带版本号的引用）、AtomicMarkableReference（带标记位的引用）"),e("li",null,"字段更新器：原子更新类的字段，字段为volatile修饰，AtomicIntegerFieldUpdater（更新整型字段）、AtomicLongFieldUpdater（更新长整型字段）")]),e("pre",null,[e("code",null,`// 引用类型原子类
AtomicReference<String> ref = new AtomicReference<>("初始值");
ref.compareAndSet("初始值", "新值"); // 原子更新引用（若当前值为"初始值"，则更新为"新值"）

// 字段更新器
class User {
    public volatile int age;
}
AtomicIntegerFieldUpdater<User> updater = AtomicIntegerFieldUpdater.newUpdater(User.class, "age");
User user = new User();
updater.getAndIncrement(user);  // 原子递增age字段`)]),e("p",null,"SimpleDateFormat因为共享可变状态导致线程不安全问题，可以为每个线程构造一个实例："),e("pre",null,[e("code",null,`public static final ThreadLocal<SimpleDateFormat> dateFormat = ThreadLocal.withInitial(() -> new SimpleDateFormat("yyyy-MM-dd"));
// 访问具体的格式化方法
String date = dateFormat.get().format(new Date());`)]),e("p",null,"原子类保证单个操作的原子性，但复合操作（如先读后写）仍需同步。"),e("h3",{class:"title"},"线程安全的集合"),e("p",null,"如果多个线程要并发地修改一个数据结构，那么很容易破坏这种结构。可以通过提供锁来保护共享的数据结构，但通常选择类库中提供的线程安全集合。"),e("p",null,"很多线程问题可以使用一个或多个队列以优雅和安全的方式解决。生产者线程向队列插入元素，消费者线程则获取元素。"),e("p",null,"当试图向队列添加元素而队列已满时，或者试图想从队列移除元素而队列已空时，阻塞队列将使线程阻塞。"),e("p",null,"搜索某个目录下文本文件中的关键字："),e("pre",null,[e("code",null,`import java.io.*;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Scanner;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;
import java.util.stream.*;

public class BlockingQueueTest {
    private static final int FILE_QUEUE_SIZE = 10;
    private static final int SEARCH_THREAD_NUM = 10;
    private static final Path DUMMP = Path.of("");
    private static final BlockingQueue<Path> queue = new ArrayBlockingQueue<>(FILE_QUEUE_SIZE);

    private static final String SEARCH_DIR = "E:\\\\项目列表\\\\安远鹤子\\\\hzbs\\\\src";
    private static final String KEY_WORDS = "true";

    public static void enumerate (Path dir) throws IOException, InterruptedException {
        Stream<Path> children = Files.list(dir);
        for (Path child : children.toList()) {
            if (Files.isDirectory(child)) {
                enumerate(child);
            } else {
                queue.put(child);
            }
        }
    }

    public static void search (Path file) throws IOException {
        Scanner in = new Scanner(file, StandardCharsets.UTF_8);
        int lineNumber = 0;
        String line = "";
        while (in.hasNext()) {
            lineNumber++;
            line = in.nextLine();
            if (line.contains(KEY_WORDS)) {
                System.out.printf("%s:%d:%s", file, lineNumber, line);
            }
        }
    }

    public static void main (String[] args) {
        Runnable enumerator = () -> {
            try {
                enumerate(Path.of(SEARCH_DIR));
                queue.put(DUMMP);
            } catch (IOException e) {
              e.printStackTrace();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        };
        new Thread(enumerator).start();

        for (int i = 1; i <= SEARCH_THREAD_NUM; i++) {
            Runnable searchTask = () -> {
                try {
                    boolean done = false;
                    Path file = null;
                    while (!done) {
                        file = queue.take();
                        if (file == DUMMP) {
                            done = true;
                            queue.put(file);
                        } else {
                            search(file);
                        }
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            };
            new Thread(searchTask).start();
        }
    }
}`)])],-1)])]),_:1})}const d=i(o,[["render",u]]);export{d as default};
