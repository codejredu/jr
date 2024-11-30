// index9.js - Updated to change cursor for interactive elements

document.addEventListener('DOMContentLoaded', () => {
    // Add cursor style to all interactive elements
    function addCursorToInteractiveElements() {
        document.querySelectorAll('.clickable, .draggable').forEach(el => {
            el.style.cursor = 'pointer'; // Set cursor to pointer
        });
    }

    // Initial run to set cursor for existing elements
    addCursorToInteractiveElements();

    // Dynamically handle new elements or hover events
    document.addEventListener('mouseover', (event) => {
        if (event.target.matches('.clickable, .draggable')) {
            event.target.style.cursor = 'pointer';
        }
    });
});
