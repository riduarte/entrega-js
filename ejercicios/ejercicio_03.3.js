const input1 = 'string';
const darVuelta = (word)=>{
    let reverseWord = word.split('').reverse().join('')
    let infWord = `${word.length} ${reverseWord}`
    return infWord
}
darVuelta(input1); // '6 gnirts'
const input2 = 'variable';
darVuelta(input2); // '8 elbairav'
const input3 = 'pointer';
darVuelta(input3); // '7 retniop'

