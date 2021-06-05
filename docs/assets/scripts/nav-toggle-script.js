function collapse(e) {
    // get the width of the element's inner content, regardless of its actual size
    const width = e.scrollWidth;

    // temporarily disable all css transitions
    const elementTransition = e.style.transition;
    e.style.transition = '';

    // on the next frame (as soon as the previous style change has taken effect),
    // explicitly set the element's width to its current pixel width, so we
    // aren't transitioning out of 'auto'
    requestAnimationFrame(function () {
        e.style.width = width + 'px';
        e.style.transition = elementTransition;

        // on the next frame (as soon as the previous style change has taken effect),
        // have the element transition to width: 0
        requestAnimationFrame(function () {
            e.style.width = null;
        });
    });
}

function expand(e) {
    requestAnimationFrame(function () {
        const width = e.scrollWidth + 10;
        e.style.width = width + 'px';
    });
}

function expandSwatch() {
    const e = this;

    e.innerHTML = e.getAttribute('icon-text') + e.getAttribute('swatch-text')

    expand(e);
}

function collapseSwatch() {
    const e = this;

    e.innerHTML = e.getAttribute('icon-text')

    collapse(e);
}

function toggleSidebar() {
    const e = this;
    const sidebar = document.getElementById('sidebar')
    const urhere = document.getElementById('urhere')
    const elevatorButtons = document.getElementsByClassName('elevator-button')

    if (e.getAttribute('out') === 'yes') {
        e.setAttribute('out', 'no');
        urhere.style.height = "0px";
        elevatorButtons[0].style.height = "75px";
        elevatorButtons[1].style.height = "75px";
        e.innerHTML = '<i class="fas fa-bars"></i>'
        collapse(sidebar);
    } else {
        e.setAttribute('out', 'yes')
        urhere.style.height = "50px";
        elevatorButtons[0].style.height = "50px";
        elevatorButtons[1].style.height = "50px";
        e.innerHTML = '<i class="fas fa-bars"></i> Nav-Menu'
        expand(sidebar);
    }
}

document.getElementById('hamburger').addEventListener('click', toggleSidebar);

for (const element of document.getElementsByClassName('banner-swatch')) {
    element.addEventListener('mouseenter', expandSwatch);
    element.addEventListener('mouseleave', collapseSwatch);
    element.innerHTML = element.getAttribute('icon-text')
}
