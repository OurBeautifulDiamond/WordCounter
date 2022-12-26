const textInput = document.querySelector('.text-input');
const wordCountElement = document.querySelector('.word-count')
const wordCountExcludeSpaceElement = document.querySelector('.word-count-exclude-space')
const letterCountElement = document.querySelector('.letter-count');
const spaceCountElement = document.querySelector('.space-count');

textInput.addEventListener('input', () => {
  let wordCount = textInput.value.length.toLocaleString();
  let wordCountExcludeSpace = textInput.value.replace(/\s+/g, '').length.toLocaleString();
  let letterCount = (textInput.value.match(/\S+/g) || []).length.toLocaleString();
  let spaceCount = (textInput.value.match(/\s/g) || []).length.toLocaleString();
  
  wordCountElement.textContent = wordCount;
  wordCountExcludeSpaceElement.textContent = wordCountExcludeSpace;
  letterCountElement.textContent = letterCount;
  spaceCountElement.textContent = spaceCount;
});