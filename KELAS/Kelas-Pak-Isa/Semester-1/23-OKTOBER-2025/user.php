<?php 

    if (!isset($_SESSION['email'])) {
        header("location: index.php");
    }

?>


<h1>Selamat Datang <?= $_SESSION['email']?></h1>

