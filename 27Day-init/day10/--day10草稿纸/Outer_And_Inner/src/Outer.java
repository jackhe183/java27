public class Outer {
    private  String name;
    public  int age;

    public Outer(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public InnerName createInnerName(){
        return new InnerName();
    }

    public InnerAge createInnerAge(){
        return new InnerAge();
    }

    class InnerName{
        void printName() {
            System.out.println(name);
        }
    }

    class InnerAge{
        void printAge(){
            System.out.println(age);
        }
    }

}
