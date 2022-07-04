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
        <div class='title'>
            <img src="https://user-images.githubusercontent.com/28566959/177155727-b1fe427a-52a0-4cd4-a4a0-916de66a332c.png"/>
            <h1>Component loaded</h1>
        </div>
        <span class="label">Project Name:</span>
        <span class="data">%componentname%</span>
        <span class="label">Languade/Framework</span>
        <span class="data">PHP</span>
        <span class="label">CLI Version</span>
        <span class="data">wpchunk %cliversion%</span>
        
    </div>
</div>
