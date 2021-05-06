const path = require('path');
const fs = require('fs');
const extract = require('extract-comments');

const utilitiesPath = path.join(__dirname, '..', 'packages', 'css', 'src', 'css');
const outPath = path.join(__dirname, '..', 'site', 'docs', 'css-utilities');

const dirs = fs.readdirSync(utilitiesPath);
const filesPath = [];

dirs.forEach((dir) => {

    const dirPath = path.join(utilitiesPath, dir);
    
    if(fs.statSync(dirPath).isDirectory()) {

        const files = fs.readdirSync(dirPath).filter((file) => file !== 'index.ts');

        files.forEach((file) => {

            filesPath.push(path.join(dirPath, file));
        });
    };
});

let order = 2;

filesPath.forEach((filePath) => {

    const fileName = path.basename(filePath, '.ts');
    const utilityName = `${fileName[0].toUpperCase()}${fileName.slice(1)}`; 
    const fileContent = fs.readFileSync(filePath).toString();

    let content = `---
title: '${utilityName}'
order: ${order++}
---

## Table of Contents
`;

    const comments = extract.block(fileContent);

    comments.forEach(({ value, code }) => {

        const [text, usage] = value.split('@example');
        let parameters = '';
       
        const [description, output] = text.split('@returns');

        if(description.includes('@param')) {

            parameters += `
### Parameters
`;

            const [, ...params] = description.split('@param');
            
            params.forEach((param) => {

                parameters += `- \`${param.split(' - ')[0]}\` ${param.split(' - ')[1]}`;
            });

            parameters += '\n';
        }

        const nameResult = /export const ([a-zA-Z]+)/.exec(code.value)
        const name = nameResult ? nameResult[1] : '';

        content += `
## ${name} 
${description.split('@')[0]}

### Output
${output}
${parameters}
### Example 
\`\`\`typescript
import { ${name} } from '@niftycss/css';

css({
    ${usage.replace(/^\n/g, '').split('\n').join(',\n    ')}
});
\`\`\`
`
    });

    const out = path.join(outPath, `${utilityName}.md`);

    fs.writeFileSync(out, content);
});
