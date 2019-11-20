const padZero = (string, length = 2) => (
    string.padStart(length, '0')
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

    const numberR = parseInt(hexTmp.slice(0, 2), 16);
    const numberG = parseInt(hexTmp.slice(2, 4), 16);
    const numberB = parseInt(hexTmp.slice(4, 6), 16);

    if (bw) {
        return (numberR * 0.299 + numberG * 0.587 + numberB * 0.114) > 186 ? '#000000' : '#FFFFFF';
    }

    // invert color components
    const stringR = (255 - numberR).toString(16);
    const stringG = (255 - numberG).toString(16);
    const stringb = (255 - numberB).toString(16);

    // pad each with zeros and return
    return `#${padZero(stringR)}${padZero(stringG)}${padZero(stringb)}`;
};

export default invertColor;
