
package Selasa_14_April_2026;


public class AplikasiOverLoading {

    public static void main(String[] args) {
        OverLoading objek = new OverLoading();
        int tampil = objek.perkalian(78, 5);
        System.out.println(tampil);
        
        System.out.println(objek.perkalian(7, 5, 2));
        
        System.out.println(objek.perkalian(6, 9, "hasil perkalian adalah " ));
    }
    
}
