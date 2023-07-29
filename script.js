function func(){
  var nric = document.getElementById("nric").value;
  var password = document.getElementById("password").value;
  if (NRIC=="G87447381N, G52587564L, G12654875R" && password=="admin123"){
    alert("Login Successfully")
    window.location.assign("des.html")
}
  else{
    alert("Invalid Value");
    return;
}
}
