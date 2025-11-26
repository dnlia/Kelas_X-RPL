<nav>
    <ul>
        <li><a hreft="?menu=kontak">Kontak</a></li>
        <li><a hreft="?menu=sejarah">Sejarah</a></li>
        <li><a hreft="?menu=jurusan">Jurusan</a></li>
    </ul>
</nav>

<?php 

    if (isset($_GET['menu'])) {
        $menu = $_GET['menu'];

        require_once $menu.'.php';
    }

    
?>