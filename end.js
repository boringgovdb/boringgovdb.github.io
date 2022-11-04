function endVideo(){
    var nukeCode = document.getElementById("nukeCode").value;
    if( nukeCode == "T4AHPY32H"){
        playFinalAudio(["sound/agent_If you type in the final nuclear code.mp3", "sound/ai_if you type in final nuclear code.mp3"]);
    }
    else{ 
        window.alert("WRONG CODE - What are you doing????")
    }
}