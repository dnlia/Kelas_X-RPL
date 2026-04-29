<?php 

  funtion belajar(){
    echo "Saya Belajar PHP";
  }

  function LuasPersegi($p = 5, $l = 3){
    $Luas = $p * $l;

    echo $Luas;
  }

  function Luas($p = 5, $l = 3){
    $Luas = $p * $l;

    return $Luas;
  }
  
  function output(){
    return "Belajar Function";
  }
  
  echo Luas(100,3) * 5;

?>