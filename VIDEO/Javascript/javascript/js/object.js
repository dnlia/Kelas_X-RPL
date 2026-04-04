const objek = {

    nama : "Dinda Aulia",
    telp : 123456,

    buah : ["Apel", "Jeruk", "Mangga"],

    coba : function () {
        return "Coba Function dalam objek";
    },

    boleh : true,
    "Tulis aja" : 1234,

};


console.log(objek.nama);
console.log(objek.telp);
console.log(objek.boleh);
console.log(objek.coba());
console.log(objek.buah[1]);
console.log(objek["Tulis aja"]);