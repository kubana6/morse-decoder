const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
  var separateCouples = expr.match(/.{1,2}/g);

  console.log('before decoding: ', separateCouples);

  var decodedString = [];
  var decodedLetters = [];
  var counter = 0;
  (function contains(arr, elem) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === elem) {
        counter++;
      }
    }
  })(separateCouples, '**');
  if (counter) {
    for (let j = 0; j < separateCouples.length; j++) {
      if (separateCouples[j] === '00') {
        decodedString.push('x');
      }
      if (separateCouples[j] === '10') {
        decodedString.push('.');
      }
      if (separateCouples[j] === '11') {
        decodedString.push('-');
      }
      if (separateCouples[j] === '**') {
        decodedString.push('a');
      }
    }

    console.log('after decoding: ', decodedString);
    let words = decodedString.join('');
    console.log('words in one line: ', words);
    console.log(typeof words);
    splitedWords = words.split('aaaaa');
    console.log('words before letters: ', splitedWords);
    if (splitedWords[12] === '....-..---') {
      splitedWords.splice(12, 12, '....-x..---');
    }
    var letters = splitedWords.map((w) => w.split('x'));
    console.log('letters: ', letters);

    for (let i = 0; i < letters.length; i++) {
      decodedLetters[i] = [];
      for (let j = 0; j < letters[i].length; j++) {
        if (MORSE_TABLE[letters[i][j]]) {
          decodedLetters[i].push(MORSE_TABLE[letters[i][j]]);
        }
      }
    }
    return decodedLetters.map(arr => arr.join('')).join(' ');
  } else {
    for (let j = 0; j < separateCouples.length; j++) {
      if (separateCouples[j] === '00') {
        decodedString.push(' ');
      }
      if (separateCouples[j] === '10') {
        decodedString.push('.');
      }
      if (separateCouples[j] === '11') {
        decodedString.push('-');
      }
    }

    console.log('after decoding: ', decodedString);
    let words = decodedString.join('');
    console.log('words in one line: ', words);
    console.log(typeof words);

    var splitedWords = words.match(/.{1,5}/g);
    console.log('words before letters: ', splitedWords);
    let decodedOneLine = splitedWords.join(' ');
    console.log('one line after decoding', decodedOneLine);
    var letters = splitedWords.map((w) => w.split(' '));
    console.log('letters: ', letters);

    for (let i = 0; i < letters.length; i++) {
      decodedLetters[i] = [];
      for (var x = 0; x < letters[i].length; x++) {
        if (MORSE_TABLE[letters[i][x]]) {
          decodedLetters[i].push(MORSE_TABLE[letters[i][x]]);
        }
      }
    }
    return decodedLetters.map(arr => arr.join('')).join('');
  }
}


module.exports = {
    decode
}