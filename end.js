function endVideo(){
    var nukeCode = document.getElementById("nukeCode").value;
    if( nukeCode == "abc"){
        playFinalAudio(["sound/If you type in the final nuclear code.mp3", "sound/if you type in final nuclear code.mp3"]);
    }
    else{ 
        window.alert("WRONG CODE - What are you doing????")
    }
}