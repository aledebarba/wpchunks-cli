/**
 * Basic JS component.
 */
function message() {
    return 'Hello from JS component!';
}

document.addEventListener("DOMContentLoaded", () => {
    alert(message());
})