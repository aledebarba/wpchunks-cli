#! /usr/bin/env node
import chalk from 'chalk';
import shell from "shelljs";
import path from 'path';
import { fileURLToPath } from 'url';
import * as child from 'child_process';
import * as fse from 'fs-extra';

const version = process.env.npm_package_version ?? '0.0.1';
const gitUrl = '';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let chunkname = process.argv[2];
let chunktype = process.argv[3] || 'php'; // defaults to php model if not specifield
let chunkdir = process.argv[4] || './'; // defaults to current directory if not specifield
chunkdir = chunkdir == "./" ? "./" : chunkdir+"/";
chalk.level = 1;

welcome();

if(chunkname == "-help" || chunkname == "--help" || chunkname == "-h" ) {
    help();
    process.exit(0);
}

if(!chunkname) { 
    error(`Component name is required
    use: npx wpchunk --help for more info`);
    process.exit(1);
}

chunktype = chunktype.toLowerCase();
if(!['php', 'js', 'javascript', 'react'].includes(chunktype)) {
    error(`Component type is not supported
    use: npx wpchunk --help for more info`);
    process.exit(1);
};

let models = {php:"component-php", js:"component-js", javascript:"component-js", react:"component-react"};
chunktype = models[chunktype];
copyModule(chunktype, chunkdir);

function copyModule(modelType, dest) {

    const srcDir = `${__dirname}/models/${modelType}/`;
    const destDir = `${dest}${chunkname}/`;
        
    fse.copy(srcDir, destDir).then(() => { 
        if(modelType=="component-react") {
            log(chalk.magentaBright(` Installing React component ${chunkname}`));
            log(chalk.magentaBright(` Running npm install in ${destDir}`));
            shell.cd(`${dest}${chunkname}/`);
            // try npm install 
            try {
                child.execSync('npm install --save-dev',{stdio:[0,1,2]});
            } catch(e) {
                error(e);
                process.exit(1);
            }
            br();
            // try npm run build
            try {
                child.execSync('npm run build',{stdio:[0,1,2]});
            } catch(e) {
                error(e);
                process.exit(1);
            }
            hr();
            reactNote();
        }
    })
}

function welcome() {
    br();
    log(chalk.yellowBright(` 🦄 Welcome to WPChunk vs: ${version} 🦄`));
    log(chalk.yellowBright(`    WPChunk creates component's folder structure`));
    log(chalk.yellowBright(`    for WPChunkPlugin component system `));
    br();
}

function help() {
    hr();
    log(chalk.whiteBright(` Syntax: `));
    log(chalk.whiteBright(` npx wpchunk <component-name> <php|js|javascript|react> <directory>`));
    br();
    log(chalk.cyan(`▪ Example 1: ${chalk.cyan.bold('npx wpchunk hello-world php ./components/')} `));
    log(chalk.cyan(`             Creates a ${chalk.bold('PHP')} component named ${chalk.bold('hello-world')} inside ${chalk.bold('components')} folder.`));
    br();
    log(chalk.cyan(`▪ Example 2: ${chalk.cyan.bold('npx wpchunk task-list react ./components/')} `));
    log(chalk.cyan(`             Creates a ${chalk.bold('react')} component named ${chalk.bold('task-list')} inside ${chalk.bold('components')} folder.`));
    br();
}

function reactNote() {
    br();
    hr();
    log(chalk.yellowBright(` 🦄 WPChunk component built.`));
    log(chalk.white(`Note: react components are installed with npm install --save-dev`));
    log(chalk.white(`      and then builded for the first time inside the component ${chalk.bold('build')} folder.`));
    log(chalk.white(`      For continuous development, you can ${chalk.bold('npm run start')} from the component folder.`));
    br();
}
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