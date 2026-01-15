<form action="" method="POST">

    Email: <input type="email" name="email" require placeholder="Masukkan Email"> <br> <br>
    Password: <input type="password" name="password" require placeholder="Masukkan Pasword"> <br>
    <input type="submit" value="Login" name="login">


</form>



<?php 

    session_start();

    if (isset($_POST['login'])) {
        $email = $_POST['email'];
        $password = $_POST['password'];
        $_SESSION['email'] = $email;

        header("location: login.php");
        echo "email : ".$email. "<br>";
        echo "password :".$password. "<br>";

    }

    $isi = "halo dunia";
    $hasil = isset($isi);
    echo $hasil;

    if (isset($isi)){
        echo "Variabel ada isi ";
    } else {
        echo "Variabel tidak ada isi";
    }

    var_dump($isi);



?>