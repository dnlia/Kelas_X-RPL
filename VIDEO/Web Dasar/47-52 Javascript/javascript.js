function tampil() {
  //document.querySelector("h1").innerText = "belajar javascript";
  //document.querySelector(".container").style.backgroundColor = "red";
  //document.querySelector("#para").style.fontSize = "50px";
  
  //console.log( document.querySelectorAll("img") );
  
  //min = Math.ceil(0);
  //max = Math.floor(2);
  //let n = Math.floor(Math.random() * (max - min + 1) + min);
  //console.log(n);
  
  //document.querySelectorAll("img")[n].style.visibility="visible";
  
  //alert( document.querySelector("#nama").value );
  
  document.querySelector("#hasil").value = document.querySelector("#nama").value;
  
  document.querySelector("#para").innerText = document.querySelector("#nama").value;
}

// btn.onclick = tampil;

btn.onmouseover = function () {
 alert("javascript");
}

//btn.addEventListener('mouseover',tampil);

btn.addEventListener('mouseover',function () {
  alert("event")
});

btn.onclick = function () {
  
  const nama = document.querySelector("#nama");
  if  (nama.value == "a") {
    alert("Nama sama")
  }else{
    alert(nama.value)
  }
  
  // > < == != <= =>
  
  //let a = 4;
 // let b = 2;
  
  //b = b + a;
  //b = b - a;
  //b = b * a;
  //b = b / a;
 // b = a ** b;
  
 // console.log(b);
  
  //let menu = document.querySelector("ul");
  
  //menu.removeChild(menu.children[0]);
  
  //const nama = document.querySelector("#nama");
  //const judul = document.querySelector("h1");
  
  //let tampil = "belajar";
  
  //judul.innerHTML = tampil + nama.value;
  
  //let tampil = "javascript";
  //judul.innerHTML = tampil + nama.value;
}