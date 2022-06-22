# WPChunk Component Model 

WPChunks provides a simple component system form *Wordpress*.
This folder contains the **javascript** component system structure and files necessary to run and embed the component inside a *Wordpress* page. 

To execute the component from a Wordpress page, use the command:

    Component::J('%componentname%');
    or
    Component::js('%componentname%');

To execute the component from Wordpress content, use the shortcode:

    [componentjs '%componentname%'];

## Folder and files

The component default folder structure: 

	Wordpress ThemeFolder/ComponentFolder
		└── %componentname%
			├── readme.md
			└── src
				└── functions
					└── breakpoints.php
				├── index.js
				└── style.php
