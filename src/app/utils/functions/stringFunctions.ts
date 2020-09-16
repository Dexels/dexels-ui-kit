export const toBasicLowercase = (inputString: string): string => {
    const sourceString = 'àáâãäåāăąæßçćĉċčèéêëēĕėęěĝğġģĥħìíîïĩīĭıįĵķĸĺļľŀłñńņňŋòóôöõøōŏőœŕŗřśŝşšţťŧùúûüũůūŭűųŵýÿŷźżž';
    const outputString = 'aaaaaaaaaabccccceeeeeeeeegggghhiiiiiiiiijkklllllnnnnnoooooooooorrrsssstttuuuuuuuuuuwyyyzzz';

    const updatedCharArray = inputString.split('').map((c) => {
        const index = sourceString.indexOf(c.toLowerCase());

        return index < 0 ? c.toLowerCase() : outputString.charAt(index);
    });

    return updatedCharArray.join('');
};

export const capitalizeFirstLetter = (value: string): string => value[0].toUpperCase() + value.slice(1).toLowerCase();

export const capitalizeFirstLetters = (value: string): string => {
    const newValue = value.split(' ');

    for (let i = 0, x = newValue.length; i < x; i += 1) {
        newValue[i] = newValue[i][0].toUpperCase() + newValue[i].substr(1).toLowerCase();
    }

    return newValue.join(' ');
};
