import "./index.scss";

const { render, useState } = wp.element; // react functions came from wp.element library

const componentSelector = document.querySelector('[chunk-%componentname%]');

const %componentreactname% = () => { 
    
    const [ theme, setThemeDark ] = useState("default");
    
    return ( 
    <>
    <div className ={"%componentname% "+theme}>
        <h1>Component built and loaded</h1>
        <p><strong>%componentname%</strong> is ready to be edited</p>
        <button onClick = { () => setTheme( theme == "default" ? "dark" : "default")}>Change Theme</button>
    </div>
    </>
)}
render(<%componentreactname% />, componentSelector);
