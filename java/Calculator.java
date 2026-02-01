public class Calculator {

    // method overloading
    // public int addInt(int a,int b) {
    // return a+b;
    // }
    //
    // public double addDouble(double a,double b) {
    // return a+b;
    // }
    //
    int add(int a, int b) { // 10.5 20
        return a + b; // 30
    }

    double add(double a, double b) {
        return a + b;
    }

    // this is static method

    static String staticMethod() {
        return "this is static method";
    }
    // subtract return integer
    public int substract(int a, int b) {
        return a - b;
    }

    public int multiply(int a, int b) {
        return a * b;
    }

    // divide
    public int divide(int a, int b) {
        try {
            return a / b;
        } catch (Exception e) {
            System.out.println("e");
            return -1;
        }
    }

    public static void main(String[] args) {

        // int a = 10;
        // int b = 20;
        // int sum = a+b;
        //
        // int k1 = 60;
        // int k2 =80;
        // int sumk1 = k1+k2;
        //
        // System.out.println(sum);
        // System.out.println(sumk1);

        // add(10,20)
        // logical solve code
        // object of class
        // object use method
        Calculator calculator = new Calculator();
        int sum = calculator.add(10, 20);
        System.out.println(sum);
        // 10.5 20.5
        double d = calculator.add(10.5, 20.5);
        System.out.println(d);
        // 10,5
        int s1 = calculator.substract(10, 5);
        System.out.println(s1);
        int result = calculator.multiply(2, 5);
        System.out.println(result);
        staticMethod();
    }

}
