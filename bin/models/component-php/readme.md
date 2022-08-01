# WPChunk Component Model 

WPChunks provides a simple component system to **Wordpress** coding, allowing the use of bundled javascript code, plain javascript code, react+jsx code or php code to exist as php functions calls and shortcodes.
This folder contains the **php** wpchunk component model structure and files necessary to run and embed the component inside a **Wordpress** page. 

## 🔗 To import component in page or template

	Import::component('functionName')->from('folder-name');

🪄 This will create the function 
	
	FunctionName()
	
Which calls the component inside the folder **&lt;folder-name&gt;**

🪄 This also create the shortcode

	[folder-name]
Which calls the component inside the folder **&lt;folder-name&gt;** from pages and posts.

## Folder and files

The component default folder structure: 

    Wordpress ThemeFolder/ComponentFolder
		└── %componentname%
			├── readme.md (this file)
			└── src
				└── functions
					└── breakpoints.php (break points variables to style.php sass code)
				├── index.php (main plugin code)
				└── style.scss (compiles sass code and embed to page)

## 🗒️ Notes about the components

- The component "function name" is arbitrary, you can call it with any php valid unused function name.
- The "folder-name" refers to a folder inside the &lt;theme/components/folder-name&gt;. 
- "component" default folder name can be changed on plugin settings screen
- You can import components outside the "component" path with:

		Import::component('functionName')->path('path-inside-theme');
		
		where &lt;path-inside-theme&gt; is the path inside the theme folder

- You can import components from plugin's components packs with

		Import::component('functionName')->plugin('plugin-name');

- If you attempt to use a shortcode without importing the plugin inside the code, the system will creante a function temporary random function name. The component system can run only on shortcodes, if necessary.
- If you attempt to create another component with the same function name, the system will fail silently and maintain the function calling the same code.
- If you attempt to create another function name to the same component, both functions will call the same component.
= Each ecosystem has it's own way to retrieve the functions parameters. Refer to the component generated code for more details.