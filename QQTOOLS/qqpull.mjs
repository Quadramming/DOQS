#!/bin/nodejs

function main() {
	if ( isGit() ) {
		gitPull();
	} else {
		pullAllFolders();
	}
}

// Oneliners v2022.04.22
const c = (...text) => console.log(...text)||text[0];
const a = text => alert(text);
const t = text => {throw Error(text)};
const d = () => {debugger};
const check = (expression, text = `check failed`) => expression || t(text);
const checkString = what => check(typeof what === `string`, `Not a string`);
const checkType = (what, type, text = `type error`) => check(typeof what === type, text);
const zeroPad = (text, size) => String(text).padStart(size, `0`);
const sleep = seconds => new Promise(resolve => setTimeout(resolve, seconds*1000));
const removeLastNL = data => String(data).replace(/(\x0d)?\x0a$/g, ``);
const spawn = (command,_,t=command.split(` `)) => cp.spawnSync(t[0], t.splice(1), {stdio: `inherit`});
const exec = (command,_,t=command.split(` `)) => removeLastNL(cp.spawnSync(t[0], t.splice(1)).stdout);
const killLinux = name => spawn(`sudo killall -9 ${name}`);
const killWindows = name => { try { execSync(`taskkill /F /T /IM ${name}`, {stdio: `ignore`}) } catch {}};
const kill = name => process.platform === `linux` ? killLinux(name) : killWindows(name);
const removeFile = file => {try{ fs.unlinkSync(file) }catch{}};
const removeFolder = folder => {try{ fs.rmSync(folder, { recursive: true, force: true }) }catch{}};
const makeFolder = folder => {try { fs.mkdirSync(folder) } catch {}};
const copy = (from, to) => { try { fs.copyFileSync(from, to) } catch {} };
const remove = file => { try { fs.unlinkSync(file); } catch {}};
const exists = path => fs.existsSync(path);
const lcgRandom = max => (lcgRandom.seed=(69069*(lcgRandom.seed??0)+1)%(2**32))%max;
const random = (a=6, b=1) => ([a,b]=[a,b].sort())&&(a+Math.floor(Math.random()*((b+1)-a)));
const charHex = char => zeroPad(char.charCodeAt(0).toString(16),2);
const charFromHex = hex => checkString(hex)&&check(hex.length === 2)&&String.fromCharCode(Number(`0x${hex}`));
const charFromCode = code => String.fromCharCode(code);
const swapElements = (a,x,y) => [a[x],a[y]]=[a[y],a[x]];
const shuffleString = (t,_,a=[...t],l=t.length) => a.forEach((e,i) => swapElements(a,i,random(i,l-1)))||a.join(``);
const clipboard = text => navigator.clipboard.writeText(text);
const capitalize = text => text[0].toUpperCase() + text.slice(1).toLowerCase();
const path = (p, ...k) => {let i=0,r=``;for(const s of p) r+=s+(k[i++]||'');return pathLib.normalize(r)}
const cd = folder => process.chdir(folder);
// End oneliners

import * as cp from 'child_process';
import * as fs from 'fs';
import * as pathLib from 'path';

const isGit = () => exists(`.git`);

function gitPull() {
	spawn('git pull');
	spawn('git submodule update');
}

function pullAllFolders() {
	const myFolder = process.cwd();
	const items = fs.readdirSync(myFolder, {withFileTypes: true});
	for ( const item of items ) {
		if ( item.isDirectory() ) {
		cd(item.name);
		if ( isGit() ) {
			gitPull();
		}
		cd(myFolder);
		}
	}
}

try {
	main();
} catch ( error ) {
	c(`main() function problem:\n ${error.message}`);
}
