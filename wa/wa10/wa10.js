// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

// 2. RAW TEXT STRINGS (Updated Story and Variables)

let storyText = "One night it was 94 fahrenheit, :insertx: found themselves drawn to :inserty:. As they approached, they noticed :insertz:. it felt like 300 pounds weighing down on them. Bob took a deep breath and stepped closer, feeling a strange energy fill the air.";

let insertX = ["Alien Joe", "Cucumber", "Tay-K"];
let insertY = ["a bag of beans", "your house", "the entrance"];
let insertZ = ["a faint Thom Yorke, lead singer of the band radiohead, in the distance", "a lil guy running around, super speedy", "an old guy lying on the ground, pointing somewhere unknown"];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
  // Create a new story each time by copying storyText
  let newStory = storyText;

  // Randomly select values from insertX, insertY, and insertZ arrays
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  // Replace placeholders with selected values
  newStory = newStory.replaceAll(':insertx:', xItem)
                     .replace(':inserty:', yItem)
                     .replace(':insertz:', zItem);

  // If a custom name is entered, replace "Bob" with it
  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  // Convert values if UK is selected
  if (document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.0714286) + ' stone';  // Pounds to stones
    const temperature = Math.round((94 - 32) * (5 / 9)) + ' celsius';  // Fahrenheit to Celsius

    newStory = newStory.replace('300 pounds', weight);
    newStory = newStory.replace('94 fahrenheit', temperature);
  }

  // Display the final story
  story.textContent = newStory;
  story.style.visibility = 'visible';
}