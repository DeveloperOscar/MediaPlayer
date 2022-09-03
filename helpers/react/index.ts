export const randomArange = function(min: number, max: number) {
    var numPosibilities = max - min;
    var randomNumber = Math.random() * (numPosibilities + 1);
    randomNumber = Math.floor(randomNumber);
    return min + randomNumber;
}
