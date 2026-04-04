<form action="" method="post" enctype="multipart/form-data">

    Pilih File Gambar :
    <input type="file" name="upload">
    <input type="submit" name="kirim" value="simpan">

</form>


<?php 

    if (isset($_POST['kirim'])) {
        
        // $file = $_FILES['upload'];

        // var_dump($_FILES['upload']);

        // foreach ($file as $key => $value) {
        //     echo $key.'= '.$value;
        //     echo '<br>';

        // }

        $name = $_FILES['upload']['name'];
        $temp = $_FILES['upload']['tmp_name'];

        // echo $name.'='.$temp;

        move_uploaded_file($temp,'gambar/'.$name);


    }
?>