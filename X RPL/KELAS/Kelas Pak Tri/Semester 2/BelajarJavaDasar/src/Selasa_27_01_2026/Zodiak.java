
package Selasa_27_01_2026;

import java.util.Scanner;


public class Zodiak {

    
    public static void main(String[] args) {
        Scanner zodiak = new Scanner(System.in);
            System.out.print("Masukkan Tanggal Lahir Anda: ");
            int tgl = zodiak.nextInt();
            System.out.print("Masukkan Bulan Lahir Anda (1-12): ");
            int bln = zodiak.nextInt();
            
            if (tgl < 1 || tgl > 31 || bln < 1 || bln > 12) {
                System.out.println("Tidak Ditemukan!!!");
            }   else {
                
                    if ((tgl >= 20 && bln == 1) || (tgl <= 18 && bln == 2)) {
                        System.out.println("========== Zodiak Anda: Aquarius ==========");
                    }
                
                    if ((tgl >= 19 && bln == 2) || (tgl <= 20 && bln == 3)) {
                        System.out.println("========== Zodiak Anda: Pisces ==========");
                    }
                    
                    if ((tgl >= 21 && bln == 3) || (tgl <= 19 && bln == 4)) {
                        System.out.println("========== Zodiak Anda: Aries ==========");
                    }
                    
                    if ((tgl >= 20 && bln == 4) || (tgl <= 20 && bln == 5)) {
                        System.out.println("========== Zodiak Anda: Taurus ==========");
                    }
                    
                    if ((tgl >= 21 && bln == 5) || (tgl <= 20 && bln == 6)) {
                        System.out.println("========== Zodiak Anda: Gemini ==========");
                    }
                    
                    if ((tgl >= 21 && bln == 6) || (tgl <= 22 && bln == 7)) {
                        System.out.println("========== Zodiak Anda: Cancer ==========");
                    }
                    
                    if ((tgl >= 23 && bln == 7) || (tgl <= 22 && bln == 8)) {
                        System.out.println("========== Zodiak Anda: Leo ==========");
                    }
                    
                    if ((tgl >= 23 && bln == 8) || (tgl <= 22 && bln == 9)) {
                        System.out.println("========== Zodiak Anda: Virgo ==========");
                    }
                    
                    if ((tgl >= 23 && bln == 9) || (tgl <= 22 && bln == 10)) {
                        System.out.println("========== Zodiak Anda: Libra ==========");
                    }
                    
                    if ((tgl >= 23 && bln == 10) || (tgl <= 21 && bln == 11)) {
                        System.out.println("========== Zodiak Anda: Scorpio ==========");
                    }
                    
                    if ((tgl >= 22 && bln == 11) || (tgl <= 21 && bln == 12)) {
                        System.out.println("========== Zodiak Anda: Sagitaurus ==========");
                    }
                    
                    if ((tgl >= 22 && bln == 12) || (tgl <= 19 && bln == 1)) {
                        System.out.println("========== Zodiak Anda: Capricorn ==========");
                    }
        }
    }
    
}
