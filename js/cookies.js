/**
 * -2 = event not possible yet
 * -1 = event possible but not triggered
 * 0 = event triggered
 * 1 = action completed
 * 2 = event ended
 */

function initCookie() {
    var states = {
        'login' : 0,
        'dashboard' : -2,
        'summary' : -2,
        'system' : -2,
        'database' : -2,
        'enterkeys' : -2,
        'fight' : -2,
        'end' : -2
    }

    var keys = []; 
    document.cookie = "keys=" + JSON.stringify(keys) + "; path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
           if (c.indexOf(name)==0) return c.substring(name.length,c.length);
    }
    return "";
}

// For the other files to use
function updateStates(stateName) {
    var states = JSON.parse(getCookie("states"));
    var keys = JSON.parse(getCookie("keys"));

    states[stateName] += 1;
    document.cookie = "keys=" + JSON.stringify(keys) + "; path=/";
}

function addKey(key) {
    var states = JSON.parse(getCookie("states"));
    var keys = JSON.parse(getCookie("keys"));

    keys.push(key);
    document.cookie = "keys=" + JSON.stringify(keys) + "; path=/";
}

function getKeys() { return JSON.parse(getCookie("keys")); }
