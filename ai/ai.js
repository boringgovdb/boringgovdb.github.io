const ai = document.getElementById("ai");
const bot = document.getElementById("aiBot");

const strings = ["... seriously?", "Oi stop it!", "I swear if you poke me ONCE MORE....", "ILL FUCKING NUKE YOU", "STOOOOOOOOOOOP!!!!!!!!"]

function aiDisplayBubble(string) {
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
}

var index = 0;
bot.addEventListener("click", function() {
    if (index < strings.length - 1) index += 1;
    else index = strings.length - 1;
    aiDisplayBubble(strings[index]);
});