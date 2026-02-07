// ========== 1. FUNCTION DECLARATION ==========
//   => Dibuat menggunakan keyword function
//   => Dapat dipanggil sebelum dideklarasikan karena bersifat hoisting.
function sapa() {
    console.log('Halo');
}

function tambah(a, b) {
    return a + b;
}

function kurang(a, b) {
    return a - b;
}

function kali(a, b){
    return a * b;
}

function bagi(a, b) {
    return a / b;
}

sapa();
console.log(tambah(13, 2));
console.log(kurang(5, 2));
console.log(kali(9, 6));
console.log(bagi(8, 4));



// ========== 2. FUNCTION EXPRESSION ==========
//   => Function yang disimpan ke dalam variabel.
//   => Tidak dapat dipanggil sebelum didefinisikan.
const sapa2 = function() {
    console.log('Haloo-!!');
}

const tambah2 = function(a,b) {
    return a + b;
}

const cekGenap = function(n) {
    return n%2 === 0;
}

const luasPersegi = function(s) {
    return s * s;
}

const pajak = function(h) {
    return h * 0.1;
}

sapa2();
console.log(tambah2(3, 4));
console.log(cekGenap(2));
console.log(luasPersegi(7));
console.log(pajak(50000));



// ========== 3. ARROW FUNCTION ==========
//   => Penulisan function yang lebih singkat dan modern (ES6) / menggunakan tanda panah: =>.
//   => Tidak memiliki this sendiri.
const sapa3 = () => console.log('Hay-! Pacar Jimin');
const tambah3 = (a, b) => a + b;
const kuadrat = x => x * x;
const diskon = h => h * 0.1;
const cekUmur = u => u >= 17;

sapa3();
console.log(tambah3(7, 3))
console.log(kuadrat(4));
console.log(diskon(80000));
console.log(cekUmur(17));



// ========== 4. Anonymous Function ==========
//  => Function tanpa nama yang biasanya digunakan sebagai callback atau event handler.
setTimeout(function () {
    console.log('Selesai');
}, 1000);

document.getElementById('btn');
btn.onclick = function () {
    alert('Haii, Pacar Jimin-!!!');
};

[1, 2, 3].forEach(function (n) {
  console.log(n);  
});

document.addEventListener('click', function () {
    console.log('sudah di klik');
});

(function () {
    console.log('Pesan ini anonim');
})();


// ========== 5. Callback Function ==========
//   => Dikirim sebagai parameter ke function lain untuk dijalankan setelah proses tertentu.
function proses(a,cb){
    cb(a);
}

proses(5, function(x){
    console.log(x);
});

[1,2].map(function(n){
    return n*2;
});

setTimeout(()=> console.log('OK'), 500);

function hitung(a, b, op){
    return op(a,b);
}


// ========== 6. IIFE ========== 
//   => Immediately Invoked Function Expression
//   => Langsung dijalankan setelah dibuat tanpa perlu dipanggil.
(function() {
    console.log('Mulai IIFE');
})();

(()=> console.log('Start IIFE'))();

(function(n) {
    console.log(n);
})(5);

(()=> {
    let x = 10;
    console.log(x);
})();

(function() {
    alert('Ini dari IIFE');
})();


// ========== 7. Function Constructor ==========
//   => Membuat object baru dengan keyword new dan biasanya digunakan dalam konsep OOP JavaScript.
function User(n) {
    this.nama = n;
}
const u1 = new User('Jimin');

function Mobil(m) {
    this.merk = m;
}
const m1 = new Mobil('Honda');

function Produk(n, h) {
    this.nama = n;
    this.harga = h;
}

// ========== 8. Async Function ==========
//   => menanggani proses asynchronous dan biasanya dikombinasikan dengan await.
async function getData() {
    return 'Yapss, Data di terima!';
}

const cek = async() => 'Siapp';

async function delay() {
    await new Promise(r => setTimeout(r, 1000)); 
}

async function hitung(a) {
    return a*2;
}

async function tampil() {
    console.log(await getData());
}