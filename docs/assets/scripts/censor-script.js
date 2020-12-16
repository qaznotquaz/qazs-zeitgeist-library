color_text = function () {
    const matches = ["fucking", "fucked", "fuck", "dammit", "damned", "damn", "hell", "bullshit", "shit", "bitch", "asshole", "ass"];
    const r = new RegExp('(^|\\W)(' + matches.join('|') + ')(?=\\W|$)', 'g');
    for (var element of document.getElementsByClassName("section")) {
        element.children.item(1).innerHTML = element.children.item(1).innerHTML
            .replace(r, "$1<span class='censor'>$2</span>");
    }
}

window.onload = color_text();