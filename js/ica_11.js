function tellFortune(children, partnerName, location, jobTitle) {
    const fortune = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${children} kids.`;
    document.getElementById('output').innerHTML += `<p>${fortune}</p>`;
}

// Calling tellFortune function
tellFortune(2, 'Alice', 'New York', 'Developer');
tellFortune(3, 'Bob', 'Los Angeles', 'Designer');
tellFortune(1, 'Charlie', 'Chicago', 'Artist');

// Function to calculate dog's age
function calculateDogAge(puppyAge) {
    const dogAge = puppyAge * 7;
    const message = `Your doggie is ${dogAge} years old in dog years!`;
    document.getElementById('output').innerHTML += `<p>${message}</p>`;
}

// Calling calculateDogAge function with different values
calculateDogAge(1);
calculateDogAge(3);
calculateDogAge(5);

// Function to reverse a number
function reverseNumber(num) {
    return num.toString().split('').reverse().join('');
}

// Calling reverseNumber function
document.getElementById('output').innerHTML += `<p>Reversed number: ${reverseNumber(32243)}</p>`;
document.getElementById('output').innerHTML += `<p>Reversed number: ${reverseNumber(12345)}</p>`;

// Function to sort letters in alphabetical order
function sortLetters(str) {
    return str.split('').sort().join('');
}

// Calling sortLetters function with different strings
document.getElementById('output').innerHTML += `<p>Sorted letters: ${sortLetters('webmaster')}</p>`;
document.getElementById('output').innerHTML += `<p>Sorted letters: ${sortLetters('javascript')}</p>`;

// Function to capitalize the first letter of each word
function capitalizeFirstLetter(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Calling capitalizeFirstLetter function
document.getElementById('output').innerHTML += `<p>Capitalized: ${capitalizeFirstLetter('the quick brown fox')}</p>`;
document.getElementById('output').innerHTML += `<p>Capitalized: ${capitalizeFirstLetter('hello world')}</p>`;
