const ai = document.getElementById("ai");
const bot = document.getElementById("aiBot");

const strings = ["... seriously?", "Oi stop it!", "I swear if you poke me ONCE MORE....", "ILL FUCKING NUKE YOU", "STOOOOOOOOOOOP!!!!!!!!"]

function aiDisplayBubble(string, face) {
    const bubble = document.createElement("div");
    bubble.className = "aiBubble";
    bubble.innerText = string;

    if (ai.childElementCount == 1) {
        ai.appendChild(bubble);
    }
    else {
        for (const child of ai.childNodes) {
            if (child.className == "aiBubble") {
                ai.removeChild(child);
            }
        }
        ai.appendChild(bubble);
    }

    // change face
    bot.innerHTML = "<img src='ai/ai_"+face+".png' style='width: 100px; height: 100px;' alt='Button Image'><i class='my-float'></i>";
}

function aiHideBubble() {
    for (const child of ai.childNodes) {
        if (child.className == "aiBubble") {
            ai.removeChild(child);
        }
    }
}

var index = 0;
bot.addEventListener("click", function() {
    if (index < strings.length - 1) index += 1;
    else index = strings.length - 1;
    aiDisplayBubble(strings[index], "angry");
});