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
  
  document.querySelector("#para").innerHTML = document.querySelector("#nama").value;
}