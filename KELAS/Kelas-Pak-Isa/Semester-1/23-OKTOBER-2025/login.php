<h1>Login</h1>

<form action="" method="POST">
    <input type="email" name="email" placeholder="Email" required> <br>
    <input type="password" name="password" placeholder="Password" required> <br>
    <input type="submit" value="login" name="login">
</form>

<?php 

    if (isset($_POST['login'])) {
        $email = $_POST['email'];
        $password = $_POST['password'];

        if ($email == "admin@gmail.com" && $password == "12345") {
            $_SESSION['email'] = $email;
            header("location: index.php");
        } else {
            echo "Email atau password salah";
        }
    }

?>