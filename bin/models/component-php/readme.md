# WPChunk Component Model 

WPChunks provides a simple component system form *Wordpress*.
This folder contains the **php** component system structure and files necessary to run and embed the component inside a *Wordpress* page. 

    Component::P('<component-name>');
    or
    Component::php('<component-name>');

## Folder and files

The component default folder structure: 

    - <Themne Folder>
    		 + /WPChunks
    			 + /components
    				 + /component-name
    					 + readme.md
    					 + /src	
    						 + index.php
    						 + style.php

**Observe that** the style file must be a php file. It contains SCSS compatible code, wich is compiled by SASS Php Compiler on server side and embedded to the page that use the component via *Wordpress* functions.                             
                             