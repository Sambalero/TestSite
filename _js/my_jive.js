
function outTitle(){
  document.getElementById("titleOut").innerHTML="Title: " + $('input[name="title"]:checked').val();
}
function outName(){
  document.getElementById("nameOut").innerHTML="Name: " + document.getElementById("username").value;
}
function outMail(){
  document.getElementById("eMailOut").innerHTML="Email: " + $('#usermail').val();
}

function outCardType(){
  document.getElementById("cardTypeOut").innerHTML="Card Type: " + $('#card option:selected').text();
}
function outCardNumber(){
  var L = document.getElementById("cardNumber").value.length;
  document.getElementById("cardNumberOut").innerHTML="Card Number Ending In: " + document.getElementById("cardNumber").value.substring(L-4);
}
function outExpDate(){
  document.getElementById("expDateOut").innerHTML="Exp Date: " + $('#expDate').val();
}