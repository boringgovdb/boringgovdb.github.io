var attempt = 3;
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "123" && password == "abc"){
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

