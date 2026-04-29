<h1>Anda sudah logout!!</h1>

<?php 
    session_start();
    session_destroy();
    header("location: index.php");
?>