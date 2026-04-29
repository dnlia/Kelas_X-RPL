<?php 

require_once "koneksi.php";

$sql = "SELECT * FROM tblpelanggan";
$result = mysqli_query($con, $sql);

if (mysqli_num_rows($result) > 0) {
    $data = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }

    print_r($data);
}

echo json_encode($data);

?>