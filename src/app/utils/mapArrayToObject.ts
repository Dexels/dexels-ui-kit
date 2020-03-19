const mapArrayToObject = (array: string[], toLowerCase = false): { [key: string]: string } => {
    const object: { [key: string]: string } = {};

    array.forEach((entry) => {
        object[entry] = toLowerCase ? entry.toLowerCase() : entry;
    });

    return object;
};

export default mapArrayToObject;
