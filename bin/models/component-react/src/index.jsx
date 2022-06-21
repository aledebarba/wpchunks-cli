import "./index.scss";
const { render, useState } = wp.element; // react functions came from wp.element library

const location = window.location.pathname;
const path = location.substring(0, location.lastIndexOf("/"));
const __dir = path.substring(path.lastIndexOf("/")+1);
const componentSelector = document.querySelectorAll(`[${__dir}]`);

const WPChunkReactComponent = () => { // change the name of the component element here
    return (<>
        <div className="wpChunkReactComponent">
            <h1>Hello from react component.</h1>
        </div>
    </>
)}

componentSelector.forEach(el => {
    render(<WPChunkReactComponent />, el )
});
