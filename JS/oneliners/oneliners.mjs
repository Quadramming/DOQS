import * as cp from 'child_process';
import * as fs from 'fs';
import * as pathLib from 'path';

// Oneliners v2022.04.24
const c = (...text) => console.log(...text) ?? text[0];
const a = text => alert(text);
const t = text => { throw Error(text); };
const d = () => { debugger; };
const check = (expression, text = `check failed`) => expression || t(text);
const checkEq = (a, b, text = `check failed`) => check(Object.is(a, b), text);
const checkString = what => check(typeof what === `string`, `Not a string`);
const checkNumber = what => check(typeof what === `number`, `Not a string`);
const checkArray = what => check(Array.isArray(what), `Not an array`);
const checkType = (what, type, text = `type error`) => check(typeof what === type, text);
const zeroPad = (text, size) => String(text).padStart(size, `0`);
const sleep = seconds => new Promise(resolve => setTimeout(resolve, seconds * 1000));
const removeLastNL = data => String(data).replace(/(\x0d)?\x0a$/g, ``);
const spawn = (command, _, t = command.split(` `)) => cp.spawnSync(t[0], t.splice(1), { stdio: `inherit` });
const exec = (command, _, t = command.split(` `)) => removeLastNL(cp.spawnSync(t[0], t.splice(1)).stdout);
const killLinux = name => spawn(`sudo killall -9 ${ name }`);
const killWindows = name => { try { execSync(`taskkill /F /T /IM ${ name }`, { stdio: `ignore` }); } catch {} };
const kill = name => process.platform === `linux` ? killLinux(name) : killWindows(name);
const removeFile = file => { try { fs.unlinkSync(file); } catch {} };
const removeFolder = folder => { try { fs.rmSync(folder, { recursive: true, force: true }); } catch {} };
const makeFolder = folder => { try { fs.mkdirSync(folder); } catch {} };
const copy = (from, to) => { try { fs.copyFileSync(from, to); } catch {} };
const remove = file => { try { fs.unlinkSync(file); } catch {} };
const exists = path => fs.existsSync(path);
const lcgRandom = max => (lcgRandom.seed = (69069 * (lcgRandom.seed ?? 0) + 1) % (2 ** 32)) % max;
const createLcgRandom = (s = 0) => m => { s = (69069 * s + 1) % (2 ** 32); return s % m; };
const random = (a = 6, b = 1) => ([a, b] = [a, b].sort()) && (a + Math.floor(Math.random() * ((b + 1) - a)));
const randomIndex = a => (Array.isArray(a) || typeof (a) === `string` || t(`Wrong type`)) && check(a.length > 0) && Math.floor(Math.random() * a.length);
const randomElement = a => checkArray(a) && a[randomIndex(a)];
const randomChar = text => checkString(text) && text[randomIndex(text)];
const charHex = char => zeroPad(char.charCodeAt(0).toString(16), 2);
const charFromHex = hex => checkString(hex) && check(hex.length === 2) && String.fromCharCode(Number(`0x${ hex }`));
const charFromCode = code => String.fromCharCode(code);
const swapElements = (a, x, y) => [a[x], a[y]] = [a[y], a[x]];
const shuffleString = (t, _, a = [...t], l = t.length) => a.forEach((e, i) => swapElements(a, i, random(i, l - 1))) ?? a.join(``);
const shuffleArray = (a, _, l = a.length) => a.forEach((e, i) => swapElements(a, i, random(i, l - 1)));
const clipboard = text => navigator.clipboard.writeText(text);
const capitalize = text => text[0].toUpperCase() + text.slice(1).toLowerCase();
const path = (p, ...k) => { let i = 0, r = ``; for (const s of p) r += s + (k[i++] ?? ''); return pathLib.normalize(r); };
const cd = folder => process.chdir(folder);
const hexToBase64 = h => btoa(h.match(/\w{2}/g).map(d => String.fromCharCode(parseInt(d, 16))).join(``));
// End oneliners
