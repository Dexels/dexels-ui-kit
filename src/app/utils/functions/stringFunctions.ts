export const toBasicLowercase = (inputString: string): string => {
    const sourceString = 'àáâãäåāăąæßçćĉċčèéêëēĕėęěĝğġģĥħìíîïĩīĭıįĵķĸĺļľŀłñńņňŋòóôöõøōŏőœŕŗřśŝşšţťŧùúûüũůūŭűųŵýÿŷźżž';
    const outputString = 'aaaaaaaaaabccccceeeeeeeeegggghhiiiiiiiiijkklllllnnnnnoooooooooorrrsssstttuuuuuuuuuuwyyyzzz';

    const updatedCharArray = inputString.split('').map((c) => {
        const index = sourceString.indexOf(c.toLowerCase());

        return index < 0 ? c.toLowerCase() : outputString.charAt(index);
    });

    return updatedCharArray.join('');
};
