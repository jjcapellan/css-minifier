function rmComments(str) {
    const regex = /(\/\*)[\n\s\W\w]*(\*\/)/gm;
    str = str.replaceAll(regex, '');
    return str;
}

function rmJumps(str) {
    const regex = /\r?\n|\r/gm;
    str = str.replaceAll('\n', '');
    return str;
}

function rmSpaces(str) {
    const regex = /(?<=[\{\}\,;\=:\)\(\]\[\+\>\~])\s* | \s*(?=[\{\}\,;\=:\)\(\]\[\+\>\~])/gm;
    str = str.replaceAll(regex, '');
    return str;
}

function rmSemicolon(str) {
    const regex = /;\s*\}/gm;
    str = str.replaceAll(regex, '}');
    return str;
}

function rmLeadingZeros(str) {
    const regex = /(?<=[^0-9])0(?=\.)/gm;
    str = str.replaceAll(regex, '');
    return str;
}

/**
 * Minifies a css string
 * 
 * @param {string} cssString original css to be minified
 * @returns {string} css minified
 */
function minify(cssString) {
    cssString = rmComments(cssString);
    cssString = rmJumps(cssString);
    cssString = rmSpaces(cssString);
    cssString = rmSemicolon(cssString);
    cssString = rmLeadingZeros(cssString);
    return cssString;
}

export { minify, rmComments, rmJumps, rmSpaces, rmSemicolon, rmLeadingZeros };