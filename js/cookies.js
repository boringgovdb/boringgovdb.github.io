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
    document.cookie = "count=0; path=/";
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
function updateStates() {
    var count = JSON.parse(getCookie("count"));
    var keys = JSON.parse(getCookie("keys"));

    count += 1;
    document.cookie = "keys=" + JSON.stringify(keys) + "; path=/";
    document.cookie = "count=" + count + "; path=/";
}

function addKey(key) {
    var count = JSON.parse(getCookie("count"));
    var keys = JSON.parse(getCookie("keys"));

    keys.push(key);
    document.cookie = "keys=" + JSON.stringify(keys) + "; path=/";
    document.cookie = "count=" + count + "; path=/";
}

function getKeys() { return JSON.parse(getCookie("keys")); }
function getCount() { return JSON.parse(getCookie("count")); }