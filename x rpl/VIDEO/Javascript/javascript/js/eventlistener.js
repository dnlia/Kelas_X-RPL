function coba() {
    a = document.querySelector(".isi");
    a.innerHTML = "belajar event listener";
    console.log("Coba eventlistener");
}


// judul.addEventListener("click", coba);

// judul.onclick = coba;
// judul.onmouseover = coba;

judul.onmouseover = function () {
    console.log("coba function anonymus");
};