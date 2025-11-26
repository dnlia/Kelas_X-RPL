<form action="" method="post">
    Email :
    <input type="email" name="email">
    Password :
    <input type="password" name="password">
    <input type="submit" name="kirim" value="Login">

</form>

<?php 

    if (isset($_POST['kirim'])) {
        $email = $_POST['email'];
        $password = $POST['password'];

        echo $email;
        echo '<br>';
        echo $password;

    }

    
?>