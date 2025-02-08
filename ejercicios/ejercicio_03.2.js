const input = 10;
const convertNumber = (number) =>{
    const toStringNumber = number.toString().split('').join('-')
    return toStringNumber
}
convertNumber(input); // '1-0'
const secondInput = 1;
convertNumber(secondInput); // '1'
const thirdInput = 11234;
convertNumber(thirdInput); // '1-1-2-3-4'

