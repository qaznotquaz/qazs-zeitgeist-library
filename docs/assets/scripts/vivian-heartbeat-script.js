color_text = function () {
    const matches = ["ink-dark", "ink-", "inky", "ink"];
    const r = new RegExp('(^|\\W)(' + matches.join('|') + ')(?=\\W|$)', 'g');
    for (var element of document.getElementsByClassName("section")) {
        element.children.item(1).innerHTML = element.children.item(1).innerHTML
            .replace(r, '$1<span class="match">$2</span>');
    }
}

window.onload = color_text();