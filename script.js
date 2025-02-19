let isDragging = false;
let startY, scrollStart;

const handle = document.querySelector('.handle');

handle.addEventListener('mousedown', (e) => {
    isDragging = true;
    startY = e.clientY;
    scrollStart = window.scrollY;
    handle.style.cursor = "grabbing";
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    let deltaY = e.clientY - startY;
    let scrollAmount = scrollStart - deltaY * 3; // Adjust multiplier for sensitivity

    window.scrollTo({
        top: scrollAmount,
        behavior: 'smooth'
    });
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    handle.style.cursor = "grab";
});

// Mobile touch support
handle.addEventListener('touchstart', (e) => {
    isDragging = true;
    startY = e.touches[0].clientY;
    scrollStart = window.scrollY;
});

document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;

    let deltaY = e.touches[0].clientY - startY;
    let scrollAmount = scrollStart - deltaY * 3;

    window.scrollTo({
        top: scrollAmount,
        behavior: 'smooth'
    });
});

document.addEventListener('touchend', () => {
    isDragging = false;
});
