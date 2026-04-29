$(document).ready(function () {

    let id = "";
    let pelanggan = "";
    let alamat = "";
    let telp = "";

    $("#submit").click(function (e) { 
        e.preventDefault();
        id = $("#id").val();
        pelanggan = $("#pelanggan").val();
        alamat = $("#alamat").val();
        telp = $("#telp").val();

        if (id == "") {
            insertData();
        } else {
            updateData();
        }

        $("#id").val("");
        $("#pelanggan").val("");
        $("#alamat").val("");
        $("#telp").val("");

        console.log(pelanggan)
    });


    $("#btn-tambah").click(function (e) { 
        e.preventDefault();
        $("#title").html("<p>Tambah Data</p>");

        $("#id").val("");
        $("#pelanggan").val("");
        $("#alamat").val("");
        $("#telp").val("");
    });

    $("tbody").on(click,".btn-del", function () {
        let id = $(this).attr(data-id);
        if (confirm("Yakin Akan Menghapus??")) {
            deleteData(id);
        }
    });

    $("tbody").on(click,".btn-ubah", function () {
        let id = $(this).attr(data-id);
        $("#title").html("<p>Ubah Data</p>");
        selectData(id);
    });


    function selectUpdate(id) {
        let idpelanggan = {
            idpelanggan : id,
        }

        $.ajax({
            type: "post",
            url: "php/selectupdate..php",
            cache: false,
            data: JSON.stringify(idpelanggan),
            // dataType: "dataType",
            success: function (response) {
                let data = JSON.parse(response);
                $("#id").val("idpelanggan");
                $("#pelanggan").val("pelanggan");
                $("#alamat").val("alamat");
                $("#telp").val("telp");
            }
        });

        selectData();

    }

    function updateData() {
        alert("update")
    }

    selectData();


    function selectData() {
        $.ajax({
            type: "get",
            url: "php/select.php",
            cache: false,
            dataType: "json",
            success: function (response) {
                let out = "";
                let No = 1;
                $.each(response, function (key, val) { 
                    out += `<tr>
                    <td>${No++}</td>
                    <td>${val.pelanggan}</td>
                    <td>${val.alamat}</td>
                    <td>${val.telp}</td>
                    <td><button type="button" class="btn btn-danger btn-del" data-id=${val.idpelanggan}>DEL</button></td>
                    <td><button type="button" class="btn btn-warning btn-ubah" data-id=${val.idpelanggan}>UBAH</button></td>
                    
                    </tr>`;
                });

                $("#isidata").html(out);

            }
        });
        
        selectData();
    };




    function insertData() {
        let dataPelanggan = {
            pelanggan : pelanggan,
            alamat : alamat,
            telp : telp
        }

        $.ajax({
            type: "post",
            url: "php/insert.php",
            cache: false,
            data: JSON.stringify(dataPelanggan),
            // dataType: "dataType",
            success: function (response) {
                let out = `<p>${response}</p>`
                $("#msg").html(out);
            }
        });

        selectData();
            
    }




    function deleteData(id) {
        let idpelanggan = {
            idpelanggan : id
        }

        $.ajax({
            type: "post",
            url: "php/delete.php",
            cache: false,
            data: JSON.stringify(idpelanggan),
            // dataType: "dataType",
            success: function (response) {
                let out = `<p>${response}</p>`
                $("#msg").html(out);
            }
        });

        selectData();

    }

    function updateData() {
        let dataPelanggan = {
            idpelanggan : id,
            pelanggan : pelanggan,
            alamat : alamat,
            telp : telp
        }

        $.ajax({
            type: "post",
            url: "php/update.php",
            cache: false,
            data: JSON.stringify(dataPelanggan),
            // dataType: "dataType",
            success: function (response) {
                let out = `<p>${response}</p>`
                $("#msg").html(out);
            }
        });
    }

    selectData();
});