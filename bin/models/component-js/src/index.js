/**
 * %componentname% is a wpchunk javascript component model.
 * 
 */
function %componentname%__main() {
    let chunkElement = document.querySelector("[chunk-%componentname%]");
    if (chunkElement) { 
        chunkElement.innerHTML= /*html*/`
            <h1>%componentname% was created and loaded</h1>
            <p>This element is the entry point for this code.</p>
            <p>🦄 Code yours! 🦄</p>
        `;
    } else {
        alert("🦄 Component %componentname% created and loaded! 🦄");
    }    
}

document.addEventListener("DOMContentLoaded", () => { %componentname%__main() });