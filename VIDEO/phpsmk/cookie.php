<?php 

    $cookie_name = 'user';
    $cookie_value = 'Joni';

    setcookie($cookie_name, $cookie_value);

    $cookie_value = 'Tejo';

    setcookie($cookie_name, $cookie_value);

    echo $_COOKIE[$cookie_name];

    setcookie("user", "", time() - 3600);

    echo '<br>';

    var_dump($_COOKIE);

?>