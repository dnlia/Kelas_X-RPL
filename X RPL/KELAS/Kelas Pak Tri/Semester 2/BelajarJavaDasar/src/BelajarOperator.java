
public class BelajarOperator {

    
    public static void main(String[] args) {
       // Operator Aritmatika
       int a = 10;
       int b = 3;
       
       int penjumlahan = a+b;
       int pengurangan = a-b;
       int perkalian = a*b;
       double pembagian = a/b;
       int modulo = a%b;
            
            System.out.println("Hasil penjumlahan 2 angka adalah : "+penjumlahan);
            System.out.println("Hasil pengurangan 2 angka adalah : "+pengurangan);
            System.out.println("Hasil perkalian 2 angka adalah : "+perkalian);
            System.out.println("Hasil pembagian 2 angka adalah : "+pembagian);
            System.out.println("Hasil modulo 2 angka adalah : "+modulo);
        
            
       // Operator Penugasan
       // = Memberi Nilai
       // += Penjumlahan Nilai
       // -=
       // *=
       // /=
       // %=
       
       int c =20;
       int f =10;
       int q =95;
       
       c += 5;
       a -= 2;
       b *= 100;
       f /= 2;
       q %= 4;
       
            System.out.println(c);
            System.out.println(a);
            System.out.println(b);
            System.out.println(f);
            System.out.println(q);
            
       
            
       // Operator Pembanding
       // ==
       // !=
       // >>=
       // <<=
       
       int d = 50;
       int e = 10;
       
       
       boolean hasil = d == e;
       boolean hasil1 = d >= e;
       boolean hasil2 = d <= e;
       boolean hasil3 = d != e;
       
            System.out.println(hasil);
            System.out.println(hasil1);
            System.out.println(hasil2);
            System.out.println(hasil3);
       
       // Operator Logika
        boolean result = true && true;
        boolean result2 = d > e && d == e;
        boolean result3 = true || true;
        boolean result4 = d != e || d < e;
            System.out.println("Operator Logika-1 " +result);
            System.out.println("Operator Logika-2 " +result2);
            System.out.println("Operator Logika-3 " +result3);
            System.out.println("Operator Logika-4 " +result4);
    }
    
}
