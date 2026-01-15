Belajar PHP
<h1>Saya Belajar PHP</h1>

<?php 

    $nama = "Dinda Aulia Nur Waqidiyah";
    $kelas = 10;
    $umur = 16;
    $alamat = "Krgan, Sidoarjo";
    $hobi = "Mendengar Musik";
    $cita_cita = "Ustadzah";
    $enter = "<br>";

    echo  $nama;
    echo $enter;

    echo $kelas;
    echo $enter;

    echo $umur;
    echo $enter;

    echo $alamat;
    echo $enter;

    echo $hobi;
    echo $enter;

    echo $cita_cita;



    // echo "<h1>Saya Belajar PHP</h1>";
    // echo "Nama: Dinda Aulia Nur Waqidiyah.";
    // echo "Saya Kelas:";
    // echo 12;
    // echo "<br>";
    // echo "Umur: 16 Tahun.";
    // echo "<br>";
    // echo "Alamat: Jl. Kyai Subaki RT01 RW01, Kragan, Gedangan, Sidoarjo."."<br>";
    // echo "Hobi: Mendengar Musik."."<br/>";
    // echo "Cita-cita: Ustadzah, Orang Sukses.";
    
?>




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Dinda A</title>
</head>
<body>
    <div>
        <h1>Identitas</h1>

        <table>
            <tbody>

                <tr>
                    <td>Nama :</td>
                    <td>
                        <?= $nama;?>
                    </td>
                </tr>

                <tr>
                    <td>Kelas :</td>
                    <td>
                        <?= $kelas;?>
                    </td>
                </tr>

                <tr>
                    <td>Umur :</td>
                    <td>
                        <?= $umur;?>
                    </td>
                </tr>

                <tr>
                    <td>Alamat :</td>
                    <td>
                        <?= $alamat;?>
                    </td>
                </tr>

                <tr>
                    <td>Hobi :</td>
                    <td>
                        <?= $hobi;?>
                    </td>
                </tr>

                <tr>
                    <td>Cita-cita :</td>
                    <td>
                        <?= $cita_cita;?>
                    </td>
                </tr>


            </tbody>
        </table>
    </div>
</body>
</html>