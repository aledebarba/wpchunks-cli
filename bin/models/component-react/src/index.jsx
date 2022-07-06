import "./index.scss";  // Import the stylesheet

const params = getParams(); // get the params from Component::react() function;
const { render, useState } = wp.element; // react functions are inside wp.element 
 
const %componentreactname% = () => { 
    
    let ajaxUrl = params.ajaxUrl;
    let ajaxNonce = params.ajaxNonce;

    return (<>
    <div className ={"%componentname%"}>
        <div class='content'>
            <span class="label">
                <img src="https://user-images.githubusercontent.com/28566959/177341564-50baf21f-5b21-449e-875a-990d41f97840.png"/>
                <img src="https://user-images.githubusercontent.com/28566959/177224209-55c1bb68-c9f1-48c8-ba07-1635894c7202.png"/>
            </span>
            <span class="data">WPChunk Component Loaded</span>
            <span class="label">Project Name:</span>
            <span class="data">%componentname%</span>
            <span class="label">Component Function Name:</span>
            <span class="data">%componentreactname%</span>
            <span class="label">Ajax URL</span>
            <span class="data">{ajaxUrl}</span>
            <span class="label">Ajax nonce</span>
            <span class="data">{ajaxNonce}</span>
            <span class="label">Build:</span>
            <span class="data">npm run build</span>
        </div>
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