var widthValue = 0;
var correctKeys = ["AY2LB9", "P2LCN7", "HJ5Z23"];

function keyChecker() {
    var key = document.getElementById("keyUser").value;
    var elem = document.getElementById("myBar");
    var widthAnim = widthValue;
    var id = setInterval(frame, 10);
    var widthIncrement = 33;

    if (correctKeys.indexOf(key) != -1 && getKeys().indexOf(key) == -1) {
        addKey(key);
        console.log(getKeys());
        widthValue = widthAnim + widthIncrement;
        if (getKeys().length == correctKeys.length){
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

function initLoadingBar(width) {
    var elem = document.getElementById("myBar");
    var widthAnim = width;
    var id = setInterval(frame, 10);
    var widthIncrement =  33;

    console.log(getKeys());
    width = widthAnim + widthIncrement;
    if (getKeys().length >= correctKeys.length){
        window.location = "finalGame.html"; 
    }    

    function frame() {
        // for debugging purposes
        if (width > 100) {
            width = 100;
        }

        if (widthAnim >= width) {
        clearInterval(id);
        }
        else {
            widthAnim++;
            elem.style.width = widthAnim + '%';
            elem.innerHTML = widthAnim * 1 + '%';
        }
    }
}

for (var i = 0; i < getKeys().length; i++) {
    widthValue = i*33;
    initLoadingBar(widthValue);
}