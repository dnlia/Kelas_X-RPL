function tampil(b) {
    a = document.querySelector("p").innerText="Belajar event js " + b;
    // a.innerText = "Belajar event js";
    console.log("Belajar event js ")
}

judul.onclick = function () {
    // console.log("belajar event js menggunakan id");
    document.querySelector(".isi").innerHTML = "Belajar event js mengguakan id";
}

