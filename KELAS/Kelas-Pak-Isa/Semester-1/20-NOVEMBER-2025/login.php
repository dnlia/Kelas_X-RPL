<?php
    session_start();
    echo $_SESSION['email'];

    if (isset($_SESSION['email'])) {
        echo $_SESSION['email'];
        echo "<br>";
        echo "<a href = 'logout.php'> Logout </a>";
    } else {
        echo "Register";
        echo "<br>";
        echo "<a href = index.php>Login </a>";
    }
?>