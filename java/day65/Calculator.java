package day65;

public class Calculator {
    private int num1;
    private int num2;
    // getters and setters
    public int getNum1() {
        return num1;
    }
    public void setNum1(int num1) {
        this.num1 = num1;
    }
    public int getNum2() {
        return num2;
    }
    public void setNum2(int num2) {
        this.num2 = num2;
    }
    public int addTwoNumbers(int num1,int num2){
        int result=num1+num2;
        return result;
    }
    public int substractTwoNumbers(int num1,int num2){
        int result=num1-num2;
        return result;
    }
}
