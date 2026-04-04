if (true) {
    console.log("Dijalankan jika benar");
} else {
    console.log("Dijalankan jika salah");
}

let nilai = 1000;
let standar = 60;
let baik = "LULUS";
let gagal = "TIDAK LULUS";
let batasatas = 100;
let batasbawah = 0;
let peringatan = "Nilai salah"; 

if (nilai <= batasatas && nilai >= batasbawah) {
    if (nilai >= standar) {
        console.log(baik);
    } else {
        console.log(gagal);
    }
} else {
    console.log(peringatan);
}