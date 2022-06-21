# WPChunk Component Model 

WPChunks provides a simple component system form *Wordpress*.
This folder contains the **javascript** component system structure and files necessary to run and embed the component inside a *Wordpress* page. From inside this folder, run the command:


    Component::J('<component-name>');
    or
    Component::js(')

## Folder and files

The component default folder structure: 

	Wordpress ThemeFolder
		└─ WPChunks
			└─ components
				└── component-name
					├── readme.md
					└── src
						├── index.js
						└── style.php