import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.println("Please type in:");

        Scanner scan = new Scanner(System.in);//练习输入对象创建,String字符串一旦被创建就不能被改变
        String str2 = "something";//练习string直接创建
        String str3 = new String("is getting wrong.");//练习String对象创建
        int l = str2.length();
        int m = str3.indexOf('t',1);

        if(scan.hasNextInt()){  //还有hasNext, hasNextInt, hasNextLine, hasNextFloat
            String str1 = scan.next();
            System.out.println("输入的数据为：" + str1);
        }else{
            System.out.println(str2 + " " + str3 + l + m);//字符串更多是通过加号连接
        }
        scan.close();
    }
}