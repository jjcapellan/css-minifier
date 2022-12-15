import { rmComments, rmJumps, rmLeadingZeros, rmSpaces, rmSemicolon, minify } from '../minifier.js';
import { cssText } from './assets.js';
import validator from 'w3c-css-validator';
import { exit } from 'node:process';

const CSS_LENGTH = cssText.length;

let passed = true;

async function test_func(testName, func) {
    let cssMin = func(cssText);
    const result = await validator.validateText(cssMin);
    if (!result.valid) {
        passed = false;
        console.log(`\nFAILED ${testName} : not valid css`);
    }
    if (CSS_LENGTH <= cssMin.length) {
        passed = false;
        console.log(`\nFAILED ${testName} : minified size >= original size`);
    }
    console.log(`PASSED ${testName} --> Original size = ${CSS_LENGTH} ; Minified size = ${cssMin.length}`);
}

await test_func('rmComments', rmComments);
await test_func('rmJumps', rmJumps);
await test_func('rmLeadingZeros', rmLeadingZeros);
await test_func('rmSpaces', rmSpaces);
await test_func('rmSemicolon', rmSemicolon);
await test_func('minify', minify);

if (passed) {
    console.log('\n*** TEST PASSED ***');
} else {
    console.log('\n*** TEST FAILED ***');
    process.exit(1);
}