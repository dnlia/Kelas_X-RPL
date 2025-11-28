document.querySelector("#klik").addEventListener("click", tampil);

function tampil(params) {

    let url = "js/tblmenu.json"

    fetch(url)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        let output = "<h1>DATA MENU</h1> <table><th>Menu</th><th>Harga</th><th>Warna</th>";
        data.forEach(element => {
            output += `<tr>
                <td>${element.menu}</td>
                <td>${element.harga}</td>
                <td>${element.warna[0]}</td>
            </tr>`
        });
        output += "</table>";
         document.querySelector("#isi").innerHTML= output;
    })
}










// let tblmenu = [ 
//     {
//         "idmenu" : 1,
//         "idkategori" : 1,
//         "menu" : "Apel Manalagi",
//         "harga" : 15000,
//         "warna" : ["Merah", "Kuning", "Hijau"],
//         "stok" : true,
//         "keterangan" : null
//     },

//     {
//         "idmenu" : 2,
//         "idkategori" : 1,
//         "menu" : "Durian",
//         "harga" : 30000,
//         "warna" : ["Merah", "Kuning", "Coklat"],
//         "stok" : false,
//         "keterangan" : null
//     }
// ]

// console.log(tblmenu[0].menu);