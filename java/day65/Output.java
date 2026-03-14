package day65;

public class Output {
    public static void main(String[] args) {
        // person.java file
        Person p1 = new Person();
        Person p2 = new Person();
        Person p3 = new Person();
        p1.setFirstName("Aman");
        p1.setLastName("Chaudhary");
        p1.setAge(25);
        String first = p1.getFirstName();
        String last = p1.getLastName();
        int age = p1.getAge();
        System.out.println(first);
        System.out.println(last);
        System.out.println(age);
        // 2
        p2.setFirstName("rez");
        p2.setLastName("lama");
        p2.setAge(32);
        String first1 = p2.getFirstName();
        String last1 = p2.getLastName();
        int age1 = p2.getAge();
        System.out.println(first1);
        System.out.println(last1);
        System.out.println(age1);
        // 3
        p3.setFirstName("gokul");
        p3.setLastName("aryal");
        p3.setAge(34);
        String first2 = p3.getFirstName();
        String last2 = p3.getLastName();
        int age2 = p3.getAge();
        System.out.println(first2);
        System.out.println(last2);
        System.out.println(age2);

        // constructor ==> dherai object bauana parekale constructor ko use aauxa
        // get ra set garna garo vayakale constructor aako ho
        Person p5 = new Person("niranjan", "kuswar");
        System.out.println(p5.getFirstName());
        System.out.println(p5.getLastName());

        // Cat.java file ==> learn method
        Cat c = new Cat();
        c.makeSound();

        // calculator.java file calculator banako
        Calculator cal = new Calculator();
        int res = cal.addTwoNumbers(5, 6);
        System.out.println(res);
        
        int res1 = cal.substractTwoNumbers(5, 6);
        System.out.println(res1);
    }
}
