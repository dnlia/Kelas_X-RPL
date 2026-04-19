
package Selasa_24_02_2026.BelajarOOP;


public class XRpl {

    
    public static void main(String[] args) {
        MuridRpl objek = new MuridRpl();
        
        System.out.println(objek.nama);
        System.out.println("Nama Saya Adalah : " + objek.nama);
        objek.nama = "Park Jimin";
        System.out.println("Diubah Menjadi : " + objek.nama);
        System.out.println("");
        System.out.println("");
        
        objek.DataSiswa();
        
        int Luas = objek.MenghitungLuasPersegi();
        System.out.println("Luas Persegi Adalah : " + Luas);
        System.out.println("");
        System.out.println("");
        
        SiswaRpl obj = new SiswaRpl();
        System.out.println("Hobi Siswa Kelas : " + obj.siswa);
        
        obj.Hobi();
    }
    
}
