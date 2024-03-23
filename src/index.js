function displayPoem(response) {
  new Typewriter('#poem', {
    strings: response.data.answer,
    autoStart: true,
    delay: 6,
    cursor: '🌸',
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector('#user-instructions');
  let apiKey = 'fct488b6f5355e5e50b3a1a472eo74dd';
  let context =
    'You are an expert in Pablo Neruda poetry and love to write short romantic poems. Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br/>. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with "Inspired by love" inside a <stron></strong> element at the end of the poem and NOT at the beginning of the poem';
  let prompt = `User instructions: Generate a poem by Pablo Neruda about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector('#poem');
  poemElement.classList.remove('hidden');
  poemElement.innerHTML = `Generating a Pablo Neruda poem ${instructionsInput.value}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector('#poem-generator-form');
poemFormElement.addEventListener('submit', generatePoem);
