#! /usr/bin/env node
const hrstart = process.hrtime(); // start timer

// import modules
import chalk from 'chalk';
import shell from "shelljs";
import path from 'path';
import { fileURLToPath } from 'url';
import * as child from 'child_process';
import * as fse from 'fs-extra';
import * as fs from 'fs';
import { createRequire } from 'module';
import camelCase from 'camelcase';

//informational constants
const require = createRequire(import.meta.url);
const pjson = require('../package.json');

const version = pjson.version ? pjson.version : "0.0.1";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// process arguments
let chunkname  = process.argv[2];
let chunktype  = process.argv[3] || 'php'; // defaults to php model if not specifield
let chunkdir   = process.argv[4] || './'; // defaults to current directory if not specifield

chunkdir = chunkdir == "./" ? "./" : chunkdir+"/";
chalk.level = 1;

welcomeMessage( version );

// user asked for help
if(chunkname == "-help" || chunkname == "--help" || chunkname == "-h" ) {
    help();
    process.exit(0);
}
// user didn't pass the right number of arguments
if(!chunkname) { 
    error(`Component name is required
    use: npx wpchunk --help for more info`);
    process.exit(1);
}
// transform the chuck type and validate it
chunktype = chunktype.toLowerCase();
if(!['php', 'js', 'javascript', 'react', 'jsapp', 'jsbundle','themefrontend'].includes(chunktype)) {
    // invalid chunk type
    error(`Component type is not supported
    use: npx wpchunk --help for more info`);
    process.exit(1);
};

// select model
let models = {
    php:"component-php", 
    js:"component-js", 
    javascript:"component-js", 
    react:"component-react",
    jsbundle: "component-jsbundle"
};
chunktype = models[chunktype];

copyModule(chunktype, chunkdir);
// end this is the end


/**
 * copyModule copies the module from the models folder to the component folder
 *      and perform post copying tasks
 * @param {string} modelType - is the name of the folder that contains the component model
 * @param {string} dest - is the destination folder of the component
 * @return {void}
 * 
 */
function copyModule(modelType, dest) {

    const srcDir = `${__dirname}/models/${modelType}/`;
    const destDir = `${dest}${chunkname}/`;
    const fnCamelCase  = camelCase(chunkname);
    const fnPascalCase = camelCase(chunkname, { pascalCase: true });
    
    // if destDir exists, throw error and exit
    if(fs.existsSync(destDir)) {
        error(`Component ${chunkname} cannot be created because destination folder already exist.`);
        process.exit(1);
    }

    // copy the models
    fse.copy(srcDir, destDir).then(() => {  
        // perform post copying tasks
        if (modelType == "component-php") {
            // replace string %componentname% with the chunkname 
            searchReplace(`${destDir}src/index.php`, /%componentname%/g, chunkname);
            searchReplace(`${destDir}src/index.php`, /%cliversion%/g, version);
            searchReplace(`${destDir}src/index.scss`, /%componentname%/g, chunkname);
            searchReplace(`${destDir}package.json`, /%componentname%/g, chunkname);
            searchReplace(`${destDir}readme.md`, /%componentname%/g, chunkname);
            byeMessage(chunkname, "PHP");
        }

        if (modelType == "component-js") {
            searchReplace(`${destDir}src/index.js`, /%componentname%/g, chunkname);
            searchReplace(`${destDir}src/index.scss`, /%componentname%/g, chunkname);
            searchReplace(`${destDir}src/style.php`, /%componentname%/g, chunkname);
            searchReplace(`${destDir}readme.md`, /%componentname%/g, chunkname);
            searchReplace(`${destDir}package.json`, /%componentname%/g, chunkname);
            searchReplace(`${destDir}src/index.js`, /%componentfnname%/g, fnCamelCase);
            byeMessage(chunkname, "JavaScript");
        }

        if (modelType == "component-jsbundle") {
            searchReplace(`${destDir}src/index.js`, /%componentname%/g, chunkname);
            searchReplace(`${destDir}src/index.scss`, /%componentname%/g, chunkname);
            searchReplace(`${destDir}src/style.php`, /%componentname%/g, chunkname);
            searchReplace(`${destDir}readme.md`, /%componentname%/g, chunkname);
            searchReplace(`${destDir}package.json`, /%componentname%/g, chunkname);
            searchReplace(`${destDir}src/index.js`, /%componentfnname%/g, fnCamelCase);
            log(chalk.magentaBright(` Installing ${chunkname} dependencies...
            \>\$ chdir ${destDir}
            \>\$ npm install --include=dev
            `));
            shell.cd(`${destDir}`);

            // try npm install 
            try {
                child.execSync('npm install --include=dev',{stdio:[0,1,2]});
            } catch(e) {
                error(e);
                process.exit(1);
            }

            // npm run build
            log(chalk.magentaBright(` 
                > npm run build
            `));
            try {
                child.execSync('npm run build',{stdio:[0,1,2]});
            } catch(e) {
                error(e);
                process.exit(1);
            }
            hr();
            jsBundleNote();
            byeMessage(chunkname, "JavaScript");
        } 

        if (modelType == "component-react") {
            
            // Perform search and replace
            searchReplace(`${destDir}package.json`, /%componentname%/g, chunkname);
            searchReplace(`${destDir}src/index.jsx`, /%componentname%/g, chunkname);
            searchReplace(`${destDir}src/index.scss`, /%componentname%/g, chunkname);
            searchReplace(`${destDir}readme.md`, /%componentname%/g, chunkname);
            searchReplace(`${destDir}src/index.jsx`, /%componentreactname%/g, fnPascalCase);
            // install dependencies
            log(chalk.magentaBright(` Installing React component ${chunkname}
            \>\$ chdir ${destDir}
            \>\$ npm install --include=dev
            `));

            shell.cd(`${destDir}`);

            // try npm install 
            try {
                child.execSync('npm install --include=dev',{stdio:[0,1,2]});
            } catch(e) {
                error(e);
                process.exit(1);
            }

            // npm run build
            log(chalk.magentaBright(` 
                > npm run build
            `));
            try {
                child.execSync('npm run build',{stdio:[0,1,2]});
            } catch(e) {
                error(e);
                process.exit(1);
            }
            hr();
            reactNote();
            byeMessage(chunkname, "ReactJS");
        }
    })
    
}

/**
 * Show welcome message after starting tasks passes
 */
function welcomeMessage( version ) {
    br();
    log(chalk.yellowBright(` 🦄 Welcome to WPChunk vs: ${version} 🦄
    This cli tool creates the folders and files
    structure for a wpchunk component.`));
    br();
}
/**
 * Display help information and examples
 */
function help() {
    hr();
    log(chalk.whiteBright(`
    Syntax:

    npx wpchunk <${chalk.magenta.bold('component-name')}> <[${chalk.magenta.bold(' php | js | javascrip | react ')}]> <[${chalk.magenta.bold('folder')}]>
    
    ${chalk.magenta.bold('component-name')} - is the component name (don't use spaces or special characters)
    ${chalk.magenta.bold('php | js | javascript | react')} - optional parameter determine the component model to be created (defaults to php)
    ${chalk.magenta.bold('folder')} - the folder path where the component will be created into (defaults to current)

    ${chalk.cyan(`▪ Example 1: ${chalk.cyan.bold('npx wpchunk hello-world php ./components/')} `)}
    Creates a ${chalk.bold('PHP')} component named ${chalk.bold('hello-world')} inside ${chalk.bold('components')} folder.

    ${chalk.cyan(`▪ Example 2: ${chalk.cyan.bold('npx wpchunk alertmessage js')} `)}
    Creates a ${chalk.bold('JavaScript')} component named ${chalk.bold('alertmessage')} inside current folder.

    ${chalk.cyan(`▪ Example 3: ${chalk.cyan.bold('npx wpchunk tasklist react')} `)}
    Creates a ${chalk.bold('react')} component named ${chalk.bold('tasklist')} inside current folder.
    `));
    }
/**
 * Display a note about wordpress/react system and scripts when the cli creates a react component
 */
function reactNote() {
    br();
    log(chalk.white(`Note: react components are installed with npm install --save-dev
    and then builded (with npm run build) for the first time inside 
    the component ${chalk.bold('build')} folder.
    This way the built code can be embeded inside a wordpress page.
    For continuous development (watch / refresh on save),
    you can ${chalk.bold('npm run start')} from the component folder.

    More information about wordpress/react system: https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/
    More information about @wordpress/scripts: https://www.npmjs.com/package/@wordpress/scripts 

    `));
}
/**
 * Display a note about wordpress/react system and scripts when the cli creates a react component
 */
function jsBundleNote() {
    br();
    log(chalk.white(`Note: javascript bundled components are installed with npm install --save-dev
    and then builded (with npm run build) for the first time inside 
    the component ${chalk.bold('build')} folder.
    This way the built code can be embeded inside a wordpress page.
    For continuous development (watch / refresh on save),
    you can ${chalk.bold('npm run start')} from the component folder.

    More information about wordpress/react system: https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/
    More information about @wordpress/scripts: https://www.npmjs.com/package/@wordpress/scripts 

    `));
}
/**
 * Display an error message before exiting the script
 * @param {string} msg 
 */
function error(msg) {
    log(chalk.white(` 👹 There was an ${chalk.bgRedBright.bold(' error ')} creating your chunk.`));
    log(chalk.white(` 👉 ${msg} `));
    br();    
}
function log(s) { 
    console.log(s);
}
function br() {
    log('\n');
}
function hr() {
    console.log(chalk("▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔"));
}
/**
 * Display the ending message
 */
function byeMessage( chunkname, chunkType ) {
    let hrend = process.hrtime(hrstart);
    
    let minutes = Math.floor(hrend[0] / 60);
    let seconds = hrend[0] - minutes * 60;
    let ms = hrend[1] / 1000000;

    log(chalk.white(` ✅ ${chunkType} component ${chalk.bold(chunkname)} created in ${minutes}m:${seconds}s:${ms}ms`));
    br();
    log(chalk.greenBright(`🦄  WPChunk is done!  🦄 
    ${chalk.whiteBright(`You can now insert the component in your theme.`)}
    ${chalk.blue(`For more info: https://github.com/aledebarba/wpchunks-plugin`)}
    ${chalk.magentaBright(`Happy coding! `)}
    `)
    );
}
/**
 * Search and Replace model files placeholders with component informations
 * 
 * @param {string} file - the name of file model to be searched
 * @param {string|regular expression} search - the information to be replaced
 * @param {string} replace - the text that replace the search expression
 */
function searchReplace(file, search, replace) {
    shell.sed("-i", search, replace, file);
};