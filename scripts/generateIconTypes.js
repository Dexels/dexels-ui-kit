const selection = require('../src/app/styles/fonts/iconfont/selection.json');

const icons = selection.icons.map(({ properties: { name } }) => name.toUpperCase()).sort();

const iconTypes = `
    export enum IconType {
    ${icons.map(name => `
        ${name} = '${name}',`).join('\n')}
    }
`;

// Out
console.log(iconTypes);
