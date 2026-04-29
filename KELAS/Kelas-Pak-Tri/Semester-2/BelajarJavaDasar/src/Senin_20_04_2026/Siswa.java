
package Senin_20_04_2026;


public class Siswa {
    Siswa(){
        System.out.println("Ini adalah Constructor-1");
    }
    
    Siswa(String nama){
        System.out.println("Ini Constructor-2");
        System.out.println("Nama saya adalah " + nama);
    }
    
    Siswa(String nama, int usia) {
        System.out.println("Ini Constructor-3");
        System.out.println("Nama saya adalah " + nama);
        System.out.println("Umur saya " + usia);
    }
    
    Siswa(String nama, int usia, String  alamat) {
        System.out.println("Ini Constructor-4");
        System.out.println("Nama saya adalah " + nama);
        System.out.println("Usia saya adalah " + usia);
        System.out.println("Saya bertempat tinggal di " + alamat);
    }
}
