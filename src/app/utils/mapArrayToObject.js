const mapArrayToObject = (array, toLowerCase = false) => {
    const object = {};

    array.forEach((entry) => {
        object[entry] = toLowerCase ? entry.toLowerCase() : entry;
    });

    return object;
};

export default mapArrayToObject;
