import "./index.scss";  // Import the stylesheet
import logo from "./chunk.png"

const params = getParams(); // get the params from Component::react() function;
const { render, useState } = wp.element; // react functions are inside wp.element 
 
const %componentreactname% = () => { 
    
    let ajaxUrl = params.ajaxUrl;
    let ajaxNonce = params.ajaxNonce;

    return (<>
    <div className ={"%componentname%"}>
        <div class='content'>
            <div class='title'>
                <img src="logo"/>
                <h1>Component loaded</h1>
            </div>
        </div>
        <span class="label">Project Name:</span>
        <span class="data">%componentname%</span>
        <span class="label">Component Function Name:</span>
        <span class="data">%componentreactname%</span>
        <span class="label">Build:</span>
        <span class="data">npm run build</span>
    </div>
</>)}

/**
 * Component connection functions
 */
function getParams(){
    let res = { ajaxUrl: %paramsname%.ajaxUrl, ajaxNonce: %paramsname%.ajaxNonce };
    if ( %paramsname%.params.length > 0 ) { %paramsname%.params.forEach( param => { res = {...res, ...param }  }) }
    return res; 
}
const componentSelector = document.querySelector('[wpchunk-%componentname%]');
render(<%componentreactname% />, componentSelector);