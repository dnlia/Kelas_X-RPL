<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web SMKN 2 Buduran</title>
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <style>
        body{
            background-color: rgba(223, 234, 253, 1);
            font-family: "Nunito", sans-serif;
        }

        .judul{
            font-family: "Monolisa", "nunito", sans-serif;
            color: rgba(74, 118, 214, 1);
            font-weight: 600;
            margin-right: 100px;
        }

        nav{
            background-color: rgb(185, 211, 254);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 1);
            padding: 10px 5px;
        }

        .nav-link{
            color: white;
            font-weight: 600;
            background-color: rgba(107, 139, 207, 1);
            border-radius: 10px;
            margin: 0 5px;
            transition: all 0.3s ease;
            box-shadow: 3px 3px 5px rgba(11, 11, 11, 1);
        }

        .nav-link:hover{
            background-color: rgba(208, 222, 252, 1);
            color: rgba(107, 131, 183, 1);
            transform: translateY(3px);
        }

        section{
            border: 2px solid rgba(123, 143, 186, 1);
            border-radius: 40px;
            background-color: white;
            margin: 25px;
            padding: 20px 25px;
            box-shadow: 0 5px 10px;
            margin-bottom: 70px;
        }

        section#kontak{
            width: 600px;
            max-width: 90%;
            border: 2px solid rgba(123, 143, 186, 1);
            border-radius: 30px;
            background-color: white;
            margin: 40px auto;
            padding: 20px 25px;
            box-shadow: 0 5px 10px;
            align-items: center;
            justify-content: center;
            margin-bottom: 80px;
        }

        #kontak input,
        #kontak textarea{
            width: 100%;
            border: 1.5px solid rgba(136, 153, 189, 1);
            border-radius: 8px;
            padding: 10px;
            font-size: 16px;
        }

        #kontak input:focus,
        #kontak textarea:focus{
            border-color: rgba(128, 166, 198, 1);
            box-shadow: 0 0 5px rgba(93, 108, 129, 1);
            outline: none;
        }

        #kontak input[type= "button"]{
            background-color: rgba(67, 100, 128, 1);
            border-color: rgba(140, 176, 206, 1);
            color: white;
            border-radius: 10px;
            padding: 10px;
            font-size: 16px;
            width: 100%;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        #kontak input[type= "button"]:hover{
            background-color: rgba(128, 168, 201, 1);
            transform: translateY(2px);
        }
        

        footer{
            background-color: rgba(132, 167, 242, 1);
            color: rgba(0, 0, 0, 1);
            text-align: center;
            padding: 10px;
            margin-top: 300px;
            font-size: 16px;
            position: fixed;
            bottom: 0;
            width: 100%;
        }



    </style>
</head>
<body>

    <nav class="d-flex justify-content-between align-items-center">

        <div style="margin: 10px">
            <img src="img/logo.png" width= 100px alt="logo">
        </div>

        <h2 class="judul">SMK NEGERI 2 BUDURAN</h2>

        <ul class="nav justify-content-end" style="margin-right: 15px">

            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="?menu=profil">Profil</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="?menu=sejarah">Sejarah</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="?menu=jurusan">Jurusan</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="?menu=prestasi">Prestasi</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="?menu=kegiatan">Kegiatan</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="?menu=kontak">Kontak</a>
            </li>
        </ul>
    </nav>

        <section id= "<?php echo isset($_GET['menu']) ? $_GET['menu'] : 'profil'; ?>">
            <?php 
                if (isset($_GET['menu'])) {
                    $isi = $_GET['menu'];
                    
                    if ($isi == "sejarah") {
                        require_once "pages/sejarah.php";
                    }
                    if ($isi == "jurusan") {
                        require_once "pages/jurusan.php";
                    }
                    if ($isi == "kegiatan") {
                        require_once "pages/kegiatan.php";
                    }
                    if ($isi == "prestasi") {
                        require_once "pages/prestasi.php";
                    }
                    if ($isi == "profil") {
                        require_once "pages/profil.php";
                    }
                    if ($isi == "kontak") {
                        require_once "pages/kontak.php";
                    }
                } else {
                    require_once "pages/profil.php";
                }


                if (isset($_POST['tombol'])) {
                    $nama = $_POST['nama'];
                    $pesan = $_POST['pesan'];
                    $email = $_POST['email'];

                    echo $nama;
                    echo "<br>";
                    echo $pesan;
                    echo "<br>";
                    echo $email;
                    
                }
            ?>
        </section>






        <footer>
            &copy; <?= date("Y");?> Web ini dibuat oleh dnlia
        </footer>


    </div>
</body>
</html>