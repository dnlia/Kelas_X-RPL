
package Selasa_20_01_2026;

import java.util.Scanner;


public class BelajarInputOutput {

    
    public static void main(String[] args) {
        Scanner inputUser = new Scanner(System.in);
        
            System.out.print("Inputkan Nama Anda : ");
        String nama = inputUser.nextLine();
            System.out.println("Nama yang di Inputkan : "+nama);
            
            System.out.print("Berapakah Nomer Absen Anda: ");
        int absen = inputUser.nextInt();
            System.out.println("Nomer Absen Anda: "+absen);
            
            System.out.print("Berapakah Uang Sakumu: ");
        double uang = inputUser.nextDouble();
            System.out.println("Uang Sakuku adalah Rp."+uang);
     
            
        Scanner masukkan = new Scanner(System.in);
        
            System.out.print("Karakter apa yang paling kamu suka: ");
        String simbol = masukkan.nextLine();
            System.out.println("Karakter yang kamu suka "+simbol);
    }
    
}
