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
            playKeysAudio(["sound/After getting all three keys.mp3"]);
        }
        else if (getKeys().length == 1) {
            playAudio(["sound/after typing all 3 codes.mp3"]);
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

function initLoadingBar() {
    var elem = document.getElementById("myBar");
    var widthAnim = widthValue;
    var id = setInterval(frame, 10);
    var widthIncrement =  33;

    console.log(getKeys());
    widthValue = widthAnim + widthIncrement;
    if (getKeys().length >= correctKeys.length){
        window.location = "finalGame.html"; 
    }    

    function frame() {
        // for debugging purposes
        if (widthValue > 100) {
            widthValue = 100;
        }

        if (widthAnim >= widthValue) {
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
    initLoadingBar();
}