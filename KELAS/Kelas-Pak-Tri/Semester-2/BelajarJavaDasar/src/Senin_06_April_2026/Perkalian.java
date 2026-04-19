
package Senin_06_April_2026;


public class Perkalian {

//    Metode 1
    static int kali(int a, int b) {
        return a * b;
    }
    
//    Metode 2
    static int kali(int a, int b, int c) {
        return a * b * c;
    }
    
//    Metode 3
    static double kali(double a, double b) {
        return a * b;
    }
    
    public static void main(String[] args) {
        System.out.println("Hasil Metode 1: " + kali(4, 6));
        System.out.println("Hasil Metode 2: " + kali(3, 5, 8));
        System.out.println("Hasil metode 3: " + kali(5.5, 8.0));
    }
    
}
