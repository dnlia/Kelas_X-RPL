<h3>Insert User</h3>

<div class="form-group">
    <form action="" method="post">
        <div class="form-group w-50">
            <label for="">Nama user</label>
            <input type="text" name="user" required placeholder="isi user" class="form-control">
        </div>

        <div class="form-group w-50">
            <label for="">Email</label>
            <input type="email" name="email" required placeholder="Email" class="form-control">
        </div>

        <div class="form-group w-50">
            <label for="">Password</label>
            <input type="password" name="password" required placeholder="password" class="form-control">
        </div>

        <div class="form-group w-50">
            <label for="">Konfirmasi Password</label>
            <input type="password" name="konfirmasi" required placeholder="password" class="form-control">
        </div>

        <div class="form-group w-50">
            <label for="">Level</label>
            <br>
            <select name="level" id="">

                <option value="admin">Admin</option>
                <option value="koki">Koki</option>
                <option value="kasir">Kasir</option>

            </select>
        </div>

        <div>
            <input type="submit" name="simpan" value="simpan" class="btn btn-primary">
        </div>
    </form>
</div>

<?php 
    if (isset($_POST['simpan'])) {
        $user = $_POST['user'];
        $email = $_POST['email'];
        $password = hash('sha256',$_POST['password']);
        $konfirmasi = hash('sha256',$_POST['konfirmasi']);
        $level = $_POST['level'];

        if ($password === $konfirmasi) {
            $sql = "INSERT INTO tbluser VALUES ('','$user','$email','$password','$level',1)";
            $db->runSQL($sql);
            header("location:?f=user&m=select");
        } else {
            echo "<h3>PASSWORD TIDAK SAMA DENGAN KONFIRMASI</h3>";
        }

        
    }
?>