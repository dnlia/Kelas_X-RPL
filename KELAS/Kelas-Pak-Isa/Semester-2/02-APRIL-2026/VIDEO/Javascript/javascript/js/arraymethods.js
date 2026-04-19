// array -> string, number, objek, function, campuran

let nilai = [
    {nama: "jimin", ipa: 90, bahasa: 80, matematika: 80},
    {nama: "taehyung", ipa: 80, bahasa: 76, matematika: 78},
    {nama: "jungkook", ipa: 77, bahasa: 78, matematika: 82},
    {nama: "namjoon", ipa: 98, bahasa: 100, matematika: 99},
];

let nama = ["jimin", "taehyung", "jungkook", "namjoon"];

// nama.push("suga", "jhope");

// // console.log(nama.shift());

// nama.unshift("seok-jin", "woo-min");

// console.log(nama.slice(0, 3));

let mapel =["ipa", "bahasa", "matematika"];

// console.log(nama.concat(mapel));

// console.log(nama.concat(["ips", "pkn", "sejarah"]));

// console.log(nama.splice(5, 2));

// console.log(nama.pop());

// nama.splice(0, 3);

// console.log(nilai[0].nama);
// console.log(nama);

// for (let index = 0; index < nama.length; index++) {
//     console.log(nama[index]);
    
// }

// nama.forEach(function (a) {
//     console.log(a);
// });

// nama.forEach(a => console.log(a));

// nilai.filter(function (a) {
//     if (a.ipa > 80) {
//         console.log(a.nama);
//     };
// });

// console.log(nilai);

// nilai.filter((a) => (a.ipa > 80 && a.matematika > 80 ? console.log(a.nama) : null));

// let siswa = nilai.map(function (a) {
//     return a.nama;
// });

// let siswa = nilai.map(a => [a.ipa, a.ipa, a.bahasa]);

// console.log(siswa);

// mapel.sort();

// console.log(mapel);

// let hasil = nilai.reduce(function (a, b) {
//     return (a = a + b.ipa);
// }, 0);

let hasil = nilai.reduce((a, b) => (a += b.bahasa), 0);

console.log(hasil);