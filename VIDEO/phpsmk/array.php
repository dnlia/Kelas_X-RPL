<?php 

    // array dimensi
    
    // $nama = array("Joni","Tejo","Budi","Siti",100, 2.5);

    // var_dump($nama);

    // echo "<br>";

    // echo $nama[5];

    // echo "<br>";

    // for ($i=0; $i < 6; $i++) { 
    //     // echo $i;
    //     echo $nama[$i]."<br>";
    // }

    // foreach ($nama as $key) {
    //     echo $key.'<br>';
    // }


    // array asosiatif

    // $nama = array(
    //     "Joni" => "Surabaya",
    //     "Budi" => "Malang Raya",
    //     "Tejo" => "Jakarta",
    //     "Siti" => "Sidoarjo"
    // );

    $nama["Joni"]="Surabaya";
    $nama["Budi"]="Malang Raya";
    $nama["Tejo"]="Jakarta";
    $nama["Siti"]="Sidoarjo";
    $nama["Edi"]="Semarang";




    var_dump($nama);

    echo "<br>";

    // echo $nama['Joni'];

    foreach ($nama as $key => $value) {
        echo $key." => ".$value;

        echo "<br>";    }
    

?>