module.exports = function reverse (n) {
    let str = n.toString();
    str[0] === '-' ? str = str.substring(1) : str;
    return str.split("").reverse().join("");
}
