<?php 
/**
 * Component:  %componentname%
 * Description:  %componentname% - is a basic structure for a WPChunk component
 *      use this as a starting point for your writing any extra functions or
 *      hooks for your component.
 * 
 * Parameters: You can pass parameters to this component via Component::php(  '%componentname%', <parameter-value>, <parameter-value>, ... );
 *
 * Replace variables names and uncomment next line to get component parameres
 * [$productName, $description, $price, $sale] = $params;
 */
?>
<div class="%componentname%" wpchunk-%componentname%="true">
    <div class='content'>
        <span class="label">
            <img src="https://user-images.githubusercontent.com/28566959/177341564-50baf21f-5b21-449e-875a-990d41f97840.png"/>
            <img src="https://user-images.githubusercontent.com/28566959/177224209-55c1bb68-c9f1-48c8-ba07-1635894c7202.png"/>
        </span>
        <span class="data">WPChunk Component Loaded</span>
        <span class="label">Project Name:</span>
        <span class="data">%componentname%</span>
        <span class="label">Languade/Framework</span>
        <span class="data">PHP</span>
        <span class="label">CLI Version</span>
        <span class="data">wpchunk %cliversion%</span>
    </div>
</div>
