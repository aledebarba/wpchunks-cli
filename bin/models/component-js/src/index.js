/**
 * %componentname% is a basic javascript component 
 * created with WPChunk cli tool that works with the
 * WPChunks framework for Wordpress
 * 
 */

document.addEventListener("DOMContentLoaded", () => {
    let el = document.querySelector("[%componentname%]");
    if (el) { 
        el.innetHTML= /*html*/`
            <h1>%componentname% was created and loaded</h1>
            <p>This element is the entry point for this code.</p>
            <p>Code yours!</p>
        `;
    } else {
        alert("Component %componentname% created and loaded!");
    }    
})