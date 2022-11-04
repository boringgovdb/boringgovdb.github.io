function playAudio(src) {
    var audioElement = new Audio(src);
    audioElement.play();
    if (src.slice(6,8) == "ai") {
        var face = "";
        if (src == "sound/ai_after the world is nuked.mp3") { face = "sad";}
        else if (src == "sound/ai_if you type in final nuclear code.mp3") { face = "evil";}
        else if (src == "sound/ai_after typing all 3 codes.mp3") { face = "angry"; }
        else { face = "happy"; }
        aiDisplayBubble("*talking*", face);
    }
    return audioElement
}
  
function playAudios(sequences) {
    // play audio
    let index = 0
    const audioElement = playAudio(sequences[index])
    audioElement.addEventListener('ended', (e) => {
    index++
    if (index < sequences.length) {
        audioElement.src = sequences[index]
        audioElement.play();
        if (sequences[index].slice(6,8) == "ai") {
            var face = "";
            var src = sequences[index];
            if (src == "sound/ai_after the world is nuked.mp3") { face = "sad";}
            else if (src == "sound/ai_if you type in final nuclear code.mp3") { face = "evil";}
            else if (src == "sound/ai_after typing all 3 codes.mp3") { face = "angry"; }
            else { face = "happy"; }
            aiDisplayBubble("*talking*", face);
        }
    } else {
        aiHideBubble();
    }
    })
}

function fail() {
    window.location = "fail.html";
}

function playFinalAudio(sequences) {
    // play audio
    let index = 0
    const audioElement = playAudio(sequences[index])
    audioElement.addEventListener('ended', (e) => {
    index++
    if (index < sequences.length) {
        audioElement.src = sequences[index]
        audioElement.play();
        if (sequences[index].slice(6,8) == "ai") {
            var face = "";
            var src = sequences[index];
            if (src == "sound/ai_after the world is nuked.mp3") { face = "sad";}
            else if (src == "sound/ai_if you type in final nuclear code.mp3") { face = "evil";}
            else if (src == "sound/ai_after typing all 3 codes.mp3") { face = "angry"; }
            else { face = "happy"; }
            aiDisplayBubble("*talking*", face);
        }
    } else {
        window.location="endVideo.html";
    }
    })
}

function playKeysAudio(sequences) {
    // play audio
    let index = 0
    const audioElement = playAudio(sequences[index])
    audioElement.addEventListener('ended', (e) => {
    index++
    if (index < sequences.length) {
        audioElement.src = sequences[index]
        audioElement.play();
    } else {
        window.location = "finalGame.html"; 
    }
    })
}