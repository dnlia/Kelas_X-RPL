let tblmenu = [
    {
        idmenu: 1, 
        idkategori: 1, 
        menu: "Apel Manalagi", 
        gambar: "apel.jpeg", 
        harga: 30000,
    },

    {
        idmenu: 2, 
        idkategori: 1, 
        menu: "Durian Musang King", 
        gambar: "durian.jpg", 
        harga: 35000,
    },

    {
        idmenu: 3, 
        idkategori: 2, 
        menu: "Bakso Tetel", 
        gambar: "bakso.avif", 
        harga: 15000,
    },

    {
        idmenu: 4, 
        idkategori: 2, 
        menu: "Mie Ayam Ceker", 
        gambar: "mieayamceker.png", 
        harga: 1000,
    },

    {
        idmenu: 5, 
        idkategori: 3, 
        menu: "Jus Mangga", 
        gambar: "jusmangga.jpg", 
        harga: 8000,
    },

    {
        idmenu: 6, 
        idkategori: 3, 
        menu: "Jus Alpukat", 
        gambar: "jusalpukat.jpeg", 
        harga: 8000,
    },

];

let tampil = tblmenu.map(function (kolom) {
    return `<div class="produk">
                <div>
                    <img src="img/${kolom.gambar}" alt="">
                </div>

                <div>
                    <h2>${kolom.menu}</h2>
                </div>

                <div>
                    <h2>${kolom.harga}</h2>
                </div>

                <div class="btn-beli">
                    <button data-idmenu=${kolom.idmenu}>Beli</button>
                </div>
            </div>`;
});

let isi = document.querySelector(".produk-container");
isi.innerHTML = tampil;

let btnbeli = document.querySelectorAll(".btn-beli > button");

let cart = [];

for (let index = 0; index < btnbeli.length; index++) {
    btnbeli[index].onclick = function () {
    //    console.log(btnbeli[index].dataset["idmenu"]);
    //    cart.push(btnbeli[index].dataset["idmenu"]);

       tblmenu.filter(function (a) {
            if (a.idmenu == btnbeli[index].dataset["idmenu"]) {
                cart.push(a);
                console.log(cart);
            }
       })

    };
}

console.log(cart);


// console.log(tampil);