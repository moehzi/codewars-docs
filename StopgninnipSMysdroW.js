function spinWords(string) {
  const words = string.split(' ');
  const result = [];

  words.forEach((v, i) => {
    if (v.length >= 5) {
      const reversedWord = v.split('').reverse().join('');
      result.push(reversedWord);
    } else {
      result.push(v);
    }
    console.log(result);
  });
  return result.join(' ');
}
