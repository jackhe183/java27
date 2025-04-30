class demo08 {
    public static void main(String[] args) {
        System.out.println("hello");
        zi ZI = new zi("何乃滔", 18);
        ZI.eat();
        System.out.println("Age: " + ZI.getAge());
        System.out.println("Name: " + ZI.getName());
    }
}

class zi extends fu {
    public zi(String name, int age) {
        super.setName(name); // 使用父类的 setter 方法
        super.setAge(age);   // 使用父类的 setter 方法
    }

    final public void eat() {
        System.out.println("我吃饭啦！");
    }

    final public String getName(){
        System.out.print("---");
        return super.getName();
    }

    @Override
    public int getAge() {
        return super.getAge();
    }

    @Override
    public void setAge(int age) {
        super.setAge(age);
    }

}

class fu {
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
}