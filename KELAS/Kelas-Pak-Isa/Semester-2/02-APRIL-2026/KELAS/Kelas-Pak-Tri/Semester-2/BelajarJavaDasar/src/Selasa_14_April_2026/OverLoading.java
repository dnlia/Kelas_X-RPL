
package Selasa_14_April_2026;


public class OverLoading {
    int perkalian(int a, int b){
        int hasil = a*b;
            return hasil;
    }
    
    int perkalian(int a, int b, int c){
        int hasil = a*b*c;
            return hasil;
    }
    
    int perkalian(int a, int b, String penjelasan){
        System.out.print("Jadi," + penjelasan);
        int hasil = a*b;
            return hasil;
    }
}
