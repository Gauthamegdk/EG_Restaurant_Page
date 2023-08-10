var modale = document.getElementById("myModal1");


var btnn = document.getElementById("mybtnslt1");
var btnn1 = document.getElementById("mybtnslt2");
var btnn2 = document.getElementById("mybtnslt3");

var spann = document.getElementsByClassName("close1")[0];




btnn.onclick = function() {
  modale.style.display = "block";
}

btnn1.onclick = function() {
  modale.style.display = "block";
}

btnn2.onclick = function() {
  modale.style.display = "block";

}

spann.onclick = function() {
  modale.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modale) {
    modale.style.display = "none";
  }
}





// On click value 


function changeTextField(message) {
  document.getElementById("mypaybtn11").innerText = message;
  myModal1.style.display = "block";
  
}

mybtnslt3.onclick=function(){
  changeTextField("Pay $49/Month");
}             


mybtnslt2.onclick=function(){
  changeTextField("Pay $29/Month");
}               


mybtnslt1.onclick=function(){
  changeTextField("Pay $0/Month");
}                            



// payment method 

var modalepay1 = document.getElementById("myModalpayment");
var btnnpay1 = document.getElementById("mypaybtn11");
var spannpay1 = document.getElementsByClassName("closepay")[0];



btnnpay1.onclick = function() {
  modalepay1.style.display = "block";

  modale.style.display="none";

  setTimeout(function(){   //it closes automatically after 5sec

    modalepay1.style.display="none";

    },5000);

    event.preventDefault();
}


spannpay1.onclick = function() {
  modalepay1.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modale) {
    modalepay1.style.display = "none";
  }
}







 