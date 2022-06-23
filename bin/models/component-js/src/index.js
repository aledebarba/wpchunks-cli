/**
 * %componentname% is a wpchunk javascript component model.
 * 
 */
function %componentfnname%__main() {
    let chunkElement = document.querySelector("[wpchunk-%componentname%]");
    if (chunkElement) { 
        chunkElement.innerHTML= /*html*/`
            <h1>%componentname% was created and loaded</h1>
            <p>This element is the component's entry point.</p>
            <p>🦄 Happy Coding! 🦄</p>
        `;
    } else {
        alert("🦄 Component %componentname% created and loaded! 🦄");
    }    
}

document.addEventListener("DOMContentLoaded", () => { %componentfnname%__main() });