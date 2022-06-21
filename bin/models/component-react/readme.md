# WPChunk Component Model 

WPChunks provides a simple component system form *Wordpress*.
This folder contains the **react** component system structure and files necessary to run and embed the component inside a *Wordpress* page. From inside this folder, run the command:

    npm run start

This command will start the building / watching process and, if not interrupted, every time you make changes to this folder files, the build process will output the compiled code to the build folder. 
To include the component inside a php page, use the command:

    Component::react('<component-name>');
    or
    Component::D('<component-name>');

## Folder and files

The component default folder structure: 

    - <Themne Folder>
    		 + /WPChunks
    			 + /components
    				 + /component-name
    					 + readme.md
    					 + package,json
    					 + ,gitignore
    					 + /src	
    						 + index.jsx
    						 + index.scss
