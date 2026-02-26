
package Selasa_03_02_2026;


public class BelajarPerulangan {

    
    public static void main(String[] args) {
//        for (int a = 0 ; a <= 5 ; a++)
//            System.out.println(a+". Dinda Aulia");
        


        int n = 5;
//     =================================================
//            SEGITIGA SIKU-SIKU KIRI BAWAH
//     =================================================
        System.out.println("===== SEGITIGA SIKU-SIKU KIRI BAWAH =====");

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
        
        
        System.out.println();
        
        
//     =================================================
//            SEGITIGA SIKU-SIKU KIRI ATAS
//     =================================================
        System.out.println("===== SEGITIGA SIKU-SIKU KIRI ATAS =====");
        
        for (int i = n; i >= 1; i--) {
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
        
        
        System.out.println();
        
        
//     =================================================
//           SEGITIGA SIKU-SIKU KANAN BAWAH
//     =================================================
        System.out.println("===== SEGITIGA SKU-SIKU KANAN BAWAH =====");
        
        for (int i = 1; i <= n; i++) {
            for (int m = 1; m <= (n - i) * 2; m++) {
                System.out.print(" ");
            }
            
            for (int p = 1; p <= i; p++) {
                System.out.print("* ");
            }
            System.out.println();
        }
        
        
        System.out.println();
        
        
//     =================================================
//          SEGITIGA SIKU-SIKU KANAN ATAS
//     =================================================
        System.out.println("===== SEGITIGA SIKU-SIKU KANAN ATAS =====");
        
        for (int i = n; i >= 1; i--) {
            for (int spasi = 1; spasi <= (n - i) * 2; spasi++) {
                System.out.print(" ");
            }
            
            for (int p = 1; p <= i; p++) {
                System.out.print("* ");
            }
            System.out.println();
        }
        
    }
    
}
