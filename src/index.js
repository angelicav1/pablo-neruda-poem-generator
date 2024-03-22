function generatePoem(event) {
  event.preventDefault();

  let poemElement = document.querySelector('#poem');

  new Typewriter('#poem', {
    strings: 'La flor mas bella',
    autoStart: true,
    delay: 6,
    cursor: '🌸',
  });
}

let poemFormElement = document.querySelector('#poem-generator-form');
poemFormElement.addEventListener('submit', generatePoem);
