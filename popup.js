let vscode = document.getElementById("vscode")
let eclipse = document.getElementById("eclipse")
let spotify = document.getElementById("spotify")
let slack = document.getElementById("slack")

var port = null;

vscode.addEventListener('click', () => {
    port = chrome.runtime.connectNative('com.letcode.vscode');
    onDisconnect();
})

eclipse.addEventListener('click', () => {
})

spotify.addEventListener('click', () => {
    port = chrome.runtime.connectNative("com.letcode.sp")
    onDisconnect();
})

slack.addEventListener('click', () => {
})

function onDisconnect() {
    port.onDisconnect.addListener(function () {
        if (chrome.runtime.lastError) {
            console.log(chrome.runtime.lastError);
        }
    });
}
