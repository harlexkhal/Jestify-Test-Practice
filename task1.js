const stringLength = (string) => {
    return string.length;
}

const stringLengthVersion2_0 = (string) => {
    if(string.length >= 1 && string.length <= 10)
    return string.length;

    return "string not between 1 and 10 characters long";
}

module.exports = { stringLength, stringLengthVersion2_0 };