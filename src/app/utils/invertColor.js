const padZero = (str, len) => {
    const lenTmp = len || 2;
    const zeros = new Array(lenTmp).join('0');

    return (zeros.concat(str)).slice(-lenTmp);
const padZero = (str, len = 2) => (
    `${new Array(len).join('0')}${str}`.slice(-len)
);

export const invertColor = (hex, bw = false) => {
    let hexTmp = hex;

    if (hexTmp.indexOf('#') === 0) {
        hexTmp = hexTmp.slice(1);
    }

    // convert 3-digit hex to 6-digits.
    if (hexTmp.length === 3) {
        hexTmp = hexTmp[0] + hexTmp[0] + hexTmp[1] + hexTmp[1] + hexTmp[2] + hexTmp[2];
    }

    if (hexTmp.length !== 6) {
        throw new Error('Invalid HEX color.');
    }

    let r = parseInt(hexTmp.slice(0, 2), 16);
    let g = parseInt(hexTmp.slice(2, 4), 16);
    let b = parseInt(hexTmp.slice(4, 6), 16);

    if (bw) {
        // http://stackoverflow.com/a/3943023/112731
        return (r * 0.299 + g * 0.587 + b * 0.114) > 186
            ? '#000000'
            : '#FFFFFF';
    }

    // invert color components
    r = (255 - r).toString(16);
    g = (255 - g).toString(16);
    b = (255 - b).toString(16);

    // pad each with zeros and return
    return '#'.concat(padZero(r)).concat(padZero(g)).concat(padZero(b));
};

export default invertColor;
