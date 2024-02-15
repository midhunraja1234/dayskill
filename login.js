function validate() {
    var email = document.getElementById("inp1").value;
    var reg = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
    if (reg.test(email)) {
      document.getElementById("email").innerHTML = "";
    } else {
      document.getElementById("email").innerHTML = "Invalid email address";
    }
  }
function check()
{
    var b=document.getElementById("inp2").value 
    var c=document.querySelector("#inp3").value
    var d=document.getElementById("confirm")
    if (b !== c )
    {
     d.innerHTML="Password doesn't match!";
     d.style.color="red" ; 
    }
    else if (b !== "" && c !== ""){
        alert("Password Matched,Submitted Successfully");
        d.innerHTML="";
    }
}
// A = require('./script')
// console.log(A)