function collapseHover() {
    const e = this
    e.innerHTML = e.getAttribute('icon-text')

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

function expandHover() {
    const e = this;
    e.innerHTML = e.getAttribute('swatch-text')
    e.justifyContent = null;

    requestAnimationFrame(function () {
        const width = e.scrollWidth + 10;
        e.style.width = width + 'px';

        requestAnimationFrame(function () {
            e.justifyContent = 'center';
        });
    });
}

for (const element of document.getElementsByClassName('banner-swatch')) {
    element.addEventListener('mouseenter', expandHover);
    element.addEventListener('mouseleave', collapseHover);
    element.innerHTML = element.getAttribute('icon-text')
}