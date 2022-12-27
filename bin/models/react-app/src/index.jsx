
/*
 * @package %componentname%
 * This package is a React component for WordPress. 
 * It is a part of the WPChunk project.
 * The main content of this file is the React component and its sub-components.
 * You have to export the main component as default.
 *
*/
import { useState } from "react";

const %componentreactname% = ( props ) => { 
    
    // the first two params are always the ajaxUrl and the ajaxNonce
    const ajaxUrl = props.ajaxUrl;
    const ajaxNonce = props.ajaxNonce;

    // other params are passed in sequence
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

// it is important to export the main component as default
export default %componentreactname%;