set_scramble_width = function () {
    for (var element of document.getElementsByClassName("scramble")) {
        element.style.width = element.scrollWidth + "px"
    }

    requestAnimationFrame(scramble_text)
}

scramble_text = function () {
    chars = "0123456789" +
        "abcdefghijklmnopqrztuvwxyzABCDEFGHIJKLMNOPQRZTUVWXYZ" +
        "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρςστυφχψω" +
        "ᚠᚡᚢᚣᚤᚥᚦᚧᚨᚩᚪᚫᚬᚭᚮᚯᚰᚱᚲᚳᚴᚵᚶᚷᚸᚹᚺᚻᚼᚽᚾᚿᛀᛁᛂᛃᛄᛅᛆᛇᛈᛉᛊᛋᛒᛓᛔᛕᛖᛗᛘᛜᛝᛞᛟᛠᛡᛢᛣᛤᛥᛦᛨᛩᛪᛮᛯᛰ" +
        "♠♡♢♣♤♥♦♧"

    for (var element of document.getElementsByClassName("scramble")) {
        text = ""
        for (let i = 0; i < element.innerHTML.length; i++) {
            text += chars[Math.floor(Math.random() * chars.length)]
        }
        element.innerHTML = text
    }

    setTimeout(scramble_text, 100)
}

window.onload = set_scramble_width;