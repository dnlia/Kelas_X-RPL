const hari = 6;
let hasil;

switch (hari) {
    case 1:
        hasil = "Mimggu";
        break;
    case 2:
        hasil = "Senin";
        break;
    case 3:
        hasil = "Selasa";
        break;
    case 4:
        hasil = "Rabu";
        break;
    case 5:
        hasil = "Kamis";
        break;
    case 6:
        hasil = "Jum'at";
        break;
    case 7:
        hasil = "Sabtu";
        break;


    default:
        hasil = "hari tidak ada";
        break;
}
console.log(hasil);


const bln = "Maret";
let bulan;

switch (bln) {
    case "Januari":
        bulan = 1;
        break;
    case "Februari":
        bulan = 2;
        break;
    case "Maret":
        bulan = 3;
        break;
    case "April":
        bulan = 4;
        break;

    default:
        bulan = "Belum dibuat"
        break;
}

console.log(bulan);