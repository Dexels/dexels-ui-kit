export default (array) => {
    const object = {};

    array.forEach((entry) => {
        object[entry] = entry;
    });

    return object;
};
