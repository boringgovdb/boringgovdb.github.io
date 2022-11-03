function playAudio(src) {
    var audioElement = new Audio(src);
    audioElement.play();
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
    }
    })
}