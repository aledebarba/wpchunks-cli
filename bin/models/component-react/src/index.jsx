import "./index.scss";  // Import the stylesheet
import { useState } from "react";
import { render } from "react-dom";

const %componentreactname% = ( props ) => { 
    
    const ajaxUrl = props.ajaxUrl;
    const ajaxNonce = props.ajaxNonce;
    // const [ other, params ] = props.params;

    return (<>
    <div className="%componentname%">
    <div className="content">
            <h1 className='title'>
                React Component Example
            </h1>
            <div className='icons'>
                <img src="https://user-images.githubusercontent.com/28566959/177224209-55c1bb68-c9f1-48c8-ba07-1635894c7202.png"/>
                <img src="https://user-images.githubusercontent.com/28566959/177341564-50baf21f-5b21-449e-875a-990d41f97840.png"/>
                <img src="https://user-images.githubusercontent.com/28566959/177224255-cb1d9437-1222-44ce-a2f9-0f35d1c51a11.png"/>
            </div>
            <div className='info'>
                <InfoItem title="Folder:" text="%componentname%"/>
                <InfoItem title="React Function:" text="%componentreactname%.jsx"/>
                <InfoItem title="WP Nonce:" text={ajaxNonce}/>
                <InfoItem title="Ajax URL:" text={ajaxUrl}/>
            </div>
            <div className='commands'>
                <CommandItem title="Install" command="npm install"/>
                <CommandItem title="Build" command="npm run build"/>
                <CommandItem title="Watch" command="npm run start"/>
                <CommandItem title="Browser Sync" command="npm run bs &lt;https://url-to-sync/&gt;"/>
            </div>            
        </div>
    </div>
</>)}

const InfoItem = ( { title, text } ) => <>
    <div className='info-item'>
        <div className="component-label">{title}</div>
        <div className="component-data">{text}</div>
    </div>
</>

const CommandItem = ( { title, command } ) => <>
    <div className='info-item'>
        <div>{title}</div>
        <div>{command}</div>
    </div>
</>

/**
 * Component connection functions
 * You must keep this code as is
 */
 (function(){document.querySelectorAll('[wpchunk-%componentname%]')
    .forEach(function(el) {
        let name = el.dataset.wpchunk.replaceAll("-", "_");
        let instance = parseInt(el.dataset.instance);
        let params = window[name][instance];
        render( <%componentreactname% {...params} />, el );
    })
})();