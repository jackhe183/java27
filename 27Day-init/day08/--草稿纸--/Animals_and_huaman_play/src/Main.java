//动物：猫、狗、鸡
//人：明星（蔡徐坤、刘亦菲）、学生（男学生（何乃滔）、女学生）

class Main{
    public static void main(String[] args) {
        Chicken ji = new Chicken("Tony", 18);
        CaiXuKun kun = new CaiXuKun();
        ji.eat();
        kun.speak();
        kun.attack(ji);
    }
}

class Animal{
    private String name;
    private int age;

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
    public void eat(){
        System.out.println("this animal is eating.");
    }

}

class Person{
    private String name;
    private int age;

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

    public void attack(Animal animal){
        System.out.println("this person is attacking animal.");
    }

    public void speak(){
        System.out.println("this person is speaking something.");
    }
}

class Chicken extends Animal{
    public Chicken(String name, int age) {
        super.setName(name);
        super.setAge(age);
    }

    @Override
    public void eat() {
        System.out.println("鸡在吃东西。。。");
    }
}

class CaiXuKun extends Person{
    public CaiXuKun() {
        super.setName("蔡徐坤");
        super.setAge(20);
    }

    @Override
    public void attack(Animal animal) {
        System.out.println(super.getName() + " is hitting " + animal.getName() + ", 诶哟你干嘛~");
    }

    @Override
    public void speak() {
        System.out.println("鸡你太美！");
    }

}












