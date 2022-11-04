function endVideo(){
    var nukeCode = document.getElementById("nukeCode").value;
    if( nukeCode == "T4AHPY32H"){
        var bot = document.getElementById("aiBot");
        bot.innerHTML = "<img src='ai/ai_evil.png' style='width: 100px; height: 100px;' alt='Button Image'><i class='my-float'></i>";
        playFinalAudio(["sound/agent_If you type in the final nuclear code.mp3", "sound/ai_if you type in final nuclear code.mp3"]);
    }
    else{ 
        window.alert("WRONG CODE - What are you doing????")
    }
}