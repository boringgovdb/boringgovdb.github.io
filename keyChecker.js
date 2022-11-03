var widthValue = 0;
var keys ={"AY2LB9" : false, "P2LCN7" : false, "HJ5Z23" : false};

function keyChecker() {
    var key = document.getElementById("keyUser").value;
    var elem = document.getElementById("myBar");
    var widthAnim = widthValue;
    var id = setInterval(frame, 10);
    var widthIncrement = 33;
    if (key in keys && keys[key] == false) {
        keys[key] = true;
        widthValue = widthAnim + widthIncrement;
        if (keys["AY2LB9"]== true && keys["P2LCN7"]== true && keys["HJ5Z23"]== true ){
            window.location = "finalGame.html"; 
        }
    }
    
    else{                
        window.alert("Incorrect Key");
    }        

    function frame() {
        if (widthAnim >= widthValue || widthValue > 100) {
        clearInterval(id);
        } else {
        widthAnim++;
        elem.style.width = widthAnim + '%';
        elem.innerHTML = widthAnim * 1 + '%';
        }
    }
}
