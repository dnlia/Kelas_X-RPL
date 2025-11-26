<?php 

    class calculator {
        function penjumlahan(){
            echo "Penjumlahan";
        }

        function pengurangan(){
            echo "Pengurangan";
        }

        function perkalian(){
            echo "Perkalian";
        }

        function pembagian(){
            echo "Pembagian";
        }

    }

    $kalkulator = new calculator();
    $kalkulator->penjumlahan();
    $kalkulator->perkalian();


?>