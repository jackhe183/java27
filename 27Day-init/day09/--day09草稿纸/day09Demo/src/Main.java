//接口：说语言，英语，中文。美国人American和中国人Chinese

class Main{
    public static void main(String[] args) {
        System.out.println("Java接口");
        American John = new American("John", 18);
        Chinese Kunkun = new Chinese("蔡徐坤", 20);
        System.out.print(John.getName() + ": ");
        John.speak();
        System.out.print(Kunkun.getName() + ": ");
        Kunkun.speak();
    }
}

interface Speak{
    public abstract void speak();
}

class Person{
    String name;
    int age;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}

class American extends Person implements Speak {
    public American(String name, int age) {
        super.name = name;
        super.age = age;
    }

    @Override
    public void speak() {
        System.out.println("I am Speaking English now.");
    }
}

class Chinese extends Person implements Speak {
    public Chinese(String name, int age) {
        super.name = name;
        super.age = age;
    }

    @Override
    public void speak() {
        System.out.println("我在说中文。");
    }
}
