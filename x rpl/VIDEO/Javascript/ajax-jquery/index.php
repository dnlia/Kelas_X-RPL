<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <script src="js/jquery.js"></script>

    <script src="js/app.js"></script>

    <title>Ajax-Jquery Bootstrap PHP</title>
  </head>
  <body>


    <div class="container">
        <div class="row mt-4" ><h1>Belajar Ajax Jquery Bootstrap PHP</h1></div>

        <!-- Button trigger modal -->
        <div class="row">
            <div class="col-4">
                <button type="button" id="btn-tambah" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Tambah Pelanggan
                </button>
            </div>
        </div>


        <div class="row mt-4">
            <!-- <div class="col-sm">
                <div class="row">
                    <h2>Input Data Pelanggan</h2>
                </div>

                <div class="row">
                    <div class="msg"></div>
                </div>
            </div> -->

            <div class="col-sm">

            <div class="row"><h2>Data Pelanggan</h2></div>
            <div class="row">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">No</th>
                        <th scope="col">Pelanggan</th>
                        <th scope="col">Alamat</th>
                        <th scope="col">Telp</th>
                        <th scope="col">Hapus</th>
                        <th scope="col">Ubah</th>
                        </tr>
                    </thead>
                    <tbody id="isidata">
                    </tbody>
                </table>
            </div>
            </div>
        </div>

        

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Tambah Data</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <input type="text" hidden class="form-control" id="id" required aria-describedby="emailHelp">
                                <label for="exampleInputEmail1" class="form-label">Nama Pelanggan</label>
                                <input type="text" class="form-control" id="pelanggan" required aria-describedby="emailHelp">
                                <div id="emailHelp" class="form-text">Harus diisi!!.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Alamat</label>
                                <input type="text" class="form-control" id="alamat" required>
                                <div id="emailHelp" class="form-text">Harus diisi!!.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Telp</label>
                                <input type="text" class="form-control" id="telp" required>
                                <div id="emailHelp" class="form-text">Harus diisi!!.</div>
                            </div>
                            <button type="submit" id="submit" data-bs-dismiss="modal" class="btn btn-primary">Simpan</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>




    </div>

    <!-- Optional JavaScript; choose one of the two! -->


    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    -->
  </body>
</html>