//public class Main {
//    // 定义一个final变量，它引用一个Person对象
//    private final Person person = new Person("Alice", 25);
//
//    public static void main(String[] args) {
//        Main example = new Main();
//
//        // 尝试修改person变量引用另一个对象（这将导致编译错误）
//        // example.person = new Person("Bob", 30); // 编译错误：无法为final变量person分配不同的值
//
//        // 修改person对象内部的属性（这是允许的）
//        example.person.setName("Charlie");
//        example.person.setAge(35);
//
//        // 打印修改后的对象状态
//        System.out.println(example.person.getName() + " is now " + example.person.getAge() + " years old.");
//    }
//}
//
//// 一个简单的Person类，有name和age属性
//class Person {
//    private String name;
//    private int age;
//
//    public Person(String name, int age) {
//        this.name = name;
//        this.age = age;
//    }
//
//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    public int getAge() {
//        return age;
//    }
//
//    public void setAge(int age) {
//        this.age = age;
//    }
//}

//Charlie is now 35 years old.

class Main{
    public static void main(String[] args) {
        Outer Kunkun = new Outer("蔡徐坤", 18);
        Kunkun.createInnerName().printName();
        Kunkun.createInnerAge().printAge();
        Kunkun.age = 19;
        Kunkun.createInnerName().printName();
        Kunkun.createInnerAge().printAge();
    }
}