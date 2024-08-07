module.exports = function reverse (n) {

    const reversedNumber = parseInt(n.toString().split('').reverse().join(''));
    return reversedNumber;
}
