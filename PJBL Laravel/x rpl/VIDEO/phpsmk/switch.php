<?php 

//   $hari = 1;

//   switch ($hari) {
//     case 1:
//         echo 'Minggu';
//         break;
//     case 2:
//         echo 'Senin';
//         break;
//     case 3:
//         echo 'Selasa';
//         break;
    
//     default:
//         echo 'Hari Belum Dibuat';
//         break;
//   }

    $pilihan = 'Tambah';
    switch ($pilihan) {
        case 'Tambah':
            echo 'Anda Memilih Tambah';
            break;
        case 'Ubah':
            echo 'Anda Memilih Ubah';
            break;
        case 'Hapus':
            echo 'Anda Memilih Hapus';
            break;
        
        default:
            echo 'Pilihan Belum Ada';
            break;
    }

?>