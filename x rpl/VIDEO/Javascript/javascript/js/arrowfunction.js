let fungsi = function (nama) {
    console.log("Belajar Function" + nama);
};

fungsi("Jimin");

let contoh = (nama) => {
    console.log("Belajar Function " + nama);
};


contoh("Budi");

let tambah = function (a, b) {
    return a +b;
};

console.log(tambah(2, 3));

let plush = (a, b) => a + b;

console.log(plush(2, 3));

let hasil = (a) => a * 2;

console.log(hasil(4));

let lagi = () => console.log("coba lagi");

lagi();

let belajar = () => {
    console.log("Baris satu");
    console.log("Baris dua");
    console.log("Baris tiga");
    console.log("Baris selanjutnya");
};

belajar();

let nilai = 4;

let uji = nilai < 7 ? () => predikat = "Gagal" : () => (predikat = "LULUS");
console.log(uji());