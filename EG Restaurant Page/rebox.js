const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const submit = document.getElementById("mybtn");
const form = document.getElementById("myForm");




 function showModal(message) {

    document.getElementById("modalMessage").textContent = message;

    modal.style.display = "block";

 }


 form.addEventListener('submit', function(){

    event.preventDefault();

    var fname=document.getElementById("fname").value.trim();
    var lname=document.getElementById("lname").value;
    var email=document.getElementById("email").value;
    var number=document.getElementById("number").value;
    var subject=document.getElementById("subject").value;
    var comment=document.getElementById("comment").value;

    const lettersRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



    // Check if the form fields are empty

  if(fname=="" && lname=="" && email=="" && number=="" && subject==""){
      showModal("Please Enter the all the required field.");
    }
    
    else if(!lettersRegex.test(fname)) {
      showModal("Please Enter Your Vaild first Name.");
    } 

    else if(!lettersRegex.test(lname)){
      showModal("Please Enter Your Vaild Last Name.");
    }

    else if(!emailRegex.test(email)){
      showModal("Please Enter Your Vaild Email.");
    }

    else if(number.length < 10 || number.length > 10){
      showModal("Please Enter 10 Digit of Your Phone Number.");
    }

    else if(subject=="" || subject.length<25){
      showModal("Please Enter Your Subject.");
    }  

    else if(comment=="" || comment.length<50){
      showModal("Please Enter Your Comment ( Must 50 Letters ).");
    }  

    else {

      // Display the popup with a message
      showModal(`Thank you, ${fname}! Your form has been submitted successfully.`);

      // Clear the form
      form.reset();

    }

});





span.onclick = function() {

    modal.style.display = "none";

}

window.onclick = function(event) {

    if (event.target == modal) {

      modal.style.display = "none";

    }
}











































































// var modal = document.getElementById("myModal");
// var btn = document.getElementById("mybtn");

// var span = document.getElementsByClassName("close")[0];



// btn.onclick = function() {
//     modal.style.display = "block";
//   }
//   span.onclick = function() {
//     modal.style.display = "none";
//   }

  



// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

