
package Senin_26_01_2026;

import java.util.Scanner;


public class BelajarPercabangan {

    
    public static void main(String[] args) {
        Scanner Inputuser = new Scanner(System.in);
            System.out.print("Inputkan Nilai Anda : ");
            int nilai = Inputuser.nextInt();
//            System.out.println("Nilai anda: "+nilai);
//            
//        if (nilai >= 70) {
//            System.out.println("Anda Lulus");
//        } else { System.out.println("Anda Tidak Lulus");
//        }
        
        if (nilai < 0 || nilai > 100) {
            System.out.println("Nilai Anda Tidak Tedeteksi");
        } else {
            if (nilai >=90 && nilai <=100) {
                System.out.println("Nilai Anda A");
            }
            
            if (nilai >= 80 && nilai <= 89) {
                System.out.println("Nilai Anda B");
            }
            
            if (nilai >= 70 && nilai <= 79) {
                System.out.println("Nilai Anda C");
            }
            
            if (nilai >= 60 && nilai <= 69) {
                System.out.println("Nilai Anda D");
            }
            
            if (nilai >= 0 && nilai <= 59) {
                System.out.println("Anda Remidial");
            }
            
        }
        
        
    }
    
}
