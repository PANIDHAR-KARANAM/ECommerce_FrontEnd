function verify(){
    var email = document.getElementById("email").value;
    var pas = document.getElementById("password").value;
    if(email == "admin@admin.com" && pas == "123456"){
        alert("Login Successfull");
    }
    else{
        alert("Incorrect password or email");
    }
}
function cart(){
    var number = document.getElementById("inputbox").value;
    var num = parseInt(number);
    if(num < 0){
        alert("Please enter a valid input");
    }else{
       document.getElementById("costbox").value = "$" +  num*15;
       var final = num*15+5; 
       document.getElementById("outputbox").value = "$" + final;
    }
}