<?php 

    require_once "function.php";

    $sql = "DELETE FROM tblkategori WHERE idkategori = $id";

    $result = mysqli_query($koneksi, $sql);

    header("http://localhost:8080/Restoran/Kategori/select.php");


?>