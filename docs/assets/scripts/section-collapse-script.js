const coll = document.getElementsByClassName("section-button");
let i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.transition = "max-height 0.2s ease, padding 0.2s ease";
            content.style.padding = null;
            content.style.maxHeight = null;
        } else {
            content.style.transition = "max-height 0.2s ease, padding 0s";
            setTimeout(() => {
                content.style.padding = "18px 18px 0";
            }, 1);
            setTimeout(() => {
                content.style.maxHeight = content.scrollHeight + "px";
            }, 2);
        }
    });
}