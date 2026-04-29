<nav>
    <ul>
        <li><a href="?menu=Isi">Isi</a></li>
        <li><a href="?menu=Hapus">Hapus</a></li>
        <li><a href="?menu=Destroy">Destroy</a></li>

    </ul>
</nav>


<?php 

    session_start();

    var_dump($_SESSION);

    echo '<br>';

    if (isset($_GET['menu'])) {
        $menu = $_GET['menu'];

        echo $menu;

        switch ($menu) {
            case 'Isi':
                isiSession();
                break;

            case 'Hapus':
                unset($_SESSION['user']);
                break;

            case 'Destroy':
                session_destroy();
                break;
            
            default:
                # code...
                break;
        }
    }

    

    function isiSession(){
        $_SESSION['user'] = 'Joni';

        $_SESSION['nama'] = 'Joni Rambo';

        $_SESSION['alamat'] = 'Sidoarjo';
    }


?>