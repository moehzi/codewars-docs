function duplicateEncode(word) {
  let newWord = '';

  for (let i = 0; i < word.length; i++) {
    const expectWord = word
      .toLowerCase()
      .split('')
      .filter((_v, index) => i !== index);
    console.log(expectWord);
    if (expectWord.includes(word[i].toLowerCase())) {
      newWord += ')';
    } else {
      newWord += '(';
    }
  }
  return newWord;
}
