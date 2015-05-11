var randomNumber = function(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
};

var randomObject = function(array) {
    return array[randomNumber(0, array.length-1)];
};

module.exports = randomObject;