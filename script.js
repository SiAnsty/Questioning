const CURRENT_YEAR = 2023;

const inputNode = document.querySelector('.js-input');
const buttonNode = document.querySelector('.js-button');
const outputNode = document.querySelector('.js-output');

buttonNode.addEventListener('click', function() {
  const inputValue = inputNode.value;

  if (!inputValue) {
    return;
  }

  const answer = Number(inputValue);
  let output = 'The answer is correct';

  if (answer !== CURRENT_YEAR) {
    output = 'Wrong answer';
  }

  outputNode.innerHTML = output;
})
