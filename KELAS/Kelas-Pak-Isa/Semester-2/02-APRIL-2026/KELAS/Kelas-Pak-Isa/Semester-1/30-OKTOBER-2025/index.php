<!-- <form action="" method="POST">
    Tanggal:
    <input type="number" name="tanggal" placeholder="Masukkan Tanggal"> <br>
    Bulan:
    <input type="number" name="bulan" placeholder="Masukkan Bulan"> <br>


    <input type="submit" name="kirim" value="Zodiak anda ...">
</form> -->


<form action="" method="POST">
    Masukkan Angka 1:
    <input type="number" name="a" placeholder="Masukkan Angka"> <br>
    Masukkan Angka 2:
    <input type="number" name="b" placeholder="Masukkan Angka"> <br>

    <input type="submit" name="kirim" value="Penjumlahan">
    <input type="submit" name="kirim" value="Pengurangan">
    <input type="submit" name="kirim" value="Perkalian">
    <input type="submit" name="kirim" value="Pembagian">
</form>



<?php 

    if (isset($_POST['kirim'])) {
        $a = $_POST['a'];
        $b = $_POST['b'];
        $kirim = $_POST['kirim'];

        if ($kirim == 'Penjumlahan') {
            echo "Hasil dari Penjumlahan $a + $b adalah: ";
            echo $a + $b;
        }

        if ($kirim == 'Pengurangan') {
            echo "Hasil dari Pengurangan $a - $b adalah: ";
            echo $a - $b;
        }

        if ($kirim == 'Perkalian') {
            echo "Hasil dari Perkalian $a x $b adalah: ";
            echo $a * $b;
        }

        if ($kirim == 'Pembagian') {
            echo "Hasil dari Pembagian $a / $b adalah: ";
            echo $a / $b;
        }


    }


    // TUGAS MEMBUAT FUNCTION OPERATOR HITUNGAN
    // function Penjumlahan($a, $b){
    //     return $a + $b;
    // }

    // function Pengurangan($a, $b){
    //     return $a - $b;
    // }

    // function Perkalian($a, $b){
    //     return $a * $b;
    // }

    // function Pembagian($a, $b){
    //     return $b / $b;
    // }

    
    // echo "Hasil dari Operator Hitungan Anda Adalah: ";
    // echo penjumlahan($a, $b);







    // if (isset($_POST['kirim'])) {
    //     $tgl = $_POST['tanggal'];
    //     $bln = $_POST['bulan'];

    //     zodiak($tgl,$bln);
    // }



    // function belajar(){
    //     echo "Hari ini, Saya Belajar Function";
    // }

    
    // function cekTanggal($tgl){

    //     if ($tgl > 0 && $tgl < 32) {
    //         // echo "Tanggal Benar !";
    //         return true;
    //     } else {
    //         // echo "Tanggal Salah !";
    //         return false;
    //     }
    // }
    
    // Memanggil Function
    // cekTanggal(1);
    // cekTanggal(0);
    // cekTanggal(100);


    // $tgl = 25;
    // $bln = 1;
    


    // function zodiak($bln, $tgl){
    //     if ($tgl > 0 && $tgl < 32 && $bln > 0 && $bln < 13) {


    //         if ($bln == 1) {
    //             if ($tgl > 0 && $tgl < 20) {
    //                 echo "Zodiak Anda Capricorn";
    //             } else {
    //                 echo "Zodiak Anda Aquarius";
    //             }
    //         }

    //         if ($bln == 2) {
    //             if ($tgl > 0 && $tgl < 20) {
    //                 echo "Zodiak anda Aquarius";
    //             } else {
    //                 echo "Zodiak anda Pisces";
    //             }
    //         }

    //         if ($bln == 3) {
    //             if ($tgl > 0 && $tgl < 20) {
    //                 echo "Zodiak anda Pisces";
    //             } else {
    //                 echo "Zodiak anda Aries";
    //             }
    //         }

    //         if ($bln == 4) {
    //             if ($tgl > 0 && $tgl < 20) {
    //                 echo "Zodiak anda Taurus";
    //             } else {
    //                 echo "Zodiak anda Gemini";
    //             }
    //         }

    //         if ($bln == 5) {
    //             if ($tgl > 0 && $tgl < 20) {
    //                 echo "Zodiak anda Gemini";
    //             } else {
    //                 echo "Zodiak anda Cancer";
    //             }
    //         }

    //         if ($bln == 6) {
    //             if ($tgl > 0 && $tgl < 20) {
    //                 echo "Zodiak anda Cancer";
    //             } else {
    //                 echo "Zodiak anda Leo";
    //             }
    //         }

    //         if ($bln == 7) {
    //             if ($tgl > 0 && $tgl < 20) {
    //                 echo "Zodiak anda Leo";
    //             } else {
    //                 echo "Zodiak anda Virgo";
    //             }
    //         }

    //         if ($bln == 8) {
    //             if ($tgl > 0 && $tgl < 20) {
    //                 echo "Zodiak anda Virgo";
    //             } else {
    //                 echo "Zodiak anda Libra";
    //             }
    //         }

    //         if ($bln == 9) {
    //             if ($tgl > 0 && $tgl < 20) {
    //                 echo "Zodiak anda Libra";
    //             } else {
    //                 echo "Zodiak anda Scorpio";
    //             }
    //         }

    //         if ($bln == 10) {
    //             if ($tgl > 0 && $tgl < 20) {
    //                 echo "Zodiak anda Scorpio";
    //             } else {
    //                 echo "Sagitaurus";
    //             }
    //         }

    //         if ($bln == 11) {
    //             if ($tgl > 0 && $tgl < 20) {
    //             echo "Zodiak anda Sagitaurus";
    //             } else {
    //                 echo "Zodiak anda Capricorn";
    //             }
    //         }

    //         if ($bln == 12) {
    //             if ($tgl > 0 && $tgl < 20) {
    //                 echo "Zodiak anda Capricorn";
    //             } else {
    //                 echo "Zodiak anda Aquarius";
    //             }
    //         }

    //     } else {
    //         echo "Tanggal atau Bulan SALAH";
    //     }
    // }

    // zodiak(100,1);
    // zodiak(12,30);
    // zodiak(5,20);



    // function cekBulan($bln){
    //     if ($bln > 0 && $bln < 13) {
    //         return true;
    //     } else {
    //         return false;

    //     }
    // }

    // cekBulan(0);

    // if (cekBulan(1) && cekTanggal(0)) {
    //     echo "Bulan atau Tanggal Benar";
    // } else {
    //     echo "Bulan atau Tanggal Salah";
    // }



    // function luasPersegiPanjang($p, $l){
    //     $luas = $p * $l;
    //     return $luas;
    // }


    // $p = 55;
    // $l = 33;
    // $t = 155;

    // echo "Volume Balok dengan Panjang $p, Lebar $l, dan Tinggi $t adalah: ";
    // echo luasPersegiPanjang($p, $l) * $t;






    







?>