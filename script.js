function firstWord(str) {
  // Check for an empty string or no space
  if (str === '' || !str.includes(' ')) {
    return str;
  }

  // Extract the first word (characters up to the first space)
  const firstSpaceIndex = str.indexOf(' ');
  const firstWord = str.substring(0, firstSpaceIndex);

  return firstWord;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
