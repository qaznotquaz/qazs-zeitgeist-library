function collapse() {
    const e = this

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

function expand() {
    const e = this;

    requestAnimationFrame(function () {
        const width = e.scrollWidth + 10;
        e.style.width = width + 'px';
    });
}

function expandSwatch() {
    const e = this;

    e.innerHTML = e.getAttribute('swatch-text')

    expand();
}

function collapseSwatch() {
    const e = this;

    e.innerHTML = e.getAttribute('icon-text')

    collapse();
}

function toggleSidebar() {
    const e = this;

    if (e.getAttribute('out') === 'yes') {
        e.setAttribute('out', 'no');
        e.innerHTML = '<a><i class="fas fa-bars"></i></a>'
        collapse();
    } else {
        e.setAttribute('out', 'yes')
        e.innerHTML = 'hopefully this menu expands?'
        expand();
    }
}

document.getElementById('hamburger').addEventListener('onclick', (toggleSidebar));

for (const element of document.getElementsByClassName('banner-swatch')) {
    element.addEventListener('mouseenter', expandSwatch);
    element.addEventListener('mouseleave', collapseSwatch);
    element.innerHTML = element.getAttribute('icon-text')
}
