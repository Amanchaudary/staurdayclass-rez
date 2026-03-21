package day66;

import day65.Cat;

public class Main {
    public static void main(String[] args) {
         Cat c=new Cat();
         c.makeSound();
         Frog f=new Frog();
         f.makeSound();
         f.eat();
         Cow co=new Cow();
         co.makeSound();
         co.eat();
        Monkey m=new Monkey();
        m.makeSound();
    }
}
