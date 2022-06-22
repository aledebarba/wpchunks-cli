# WPChunk Component Model 

WPChunks provides a simple component system form ***Wordpress***.
This folder contains the **react** component system structure and files necessary to run and embed the component inside a ***Wordpress*** page. 

To start the watch/refresh build of the component, use the command from the component folder:

    npm run start

To build the productions version of the component, use the command from the component folder:

    npm run build

To include the component inside a php page, use the command:

    Component::react('%componentname%');
    or
    Component::D('%componentname%');

## Folder and files

The component default folder structure: 

	Wordpress ThemeFolder/ComponentFolder
		└── %componentname%
			├── readme.md (this file)
			├── src
			│	├── mixins
			│	│	└── mixins.scss 
			│	├── index.jsx (source component code)
			│	└── index.scss 
			└── build
				├── index.js  (entry point for built component)
				└── index.css (compiled resulto of scss file)
