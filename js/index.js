var attempt = 3;
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "MrPr35ident" && password == "1wantNuk3s"){
        window.location = "dashboard.html"; 
        return false;
    }
    else{
    attempt --;
        if( attempt <= 0){
            window.location = "fail.html";
            return false;
        }
        else {
            alert("You have "+attempt+" attempts left");
        }  
    }
}

// Convert to green call and start audio when call clicked on
function activeCall() {
    var phone = document.getElementById("call-phone");
    phone.innerHTML = "<div class='call-phone__circle-fill_active'></div>"+
    "<div class='call-phone__circle-img_active'>"+
    "<i class='fa fa-phone icon-phone_active'></i>"+ 
    "</div>";
}