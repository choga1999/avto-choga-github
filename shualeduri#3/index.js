
// 1 question
const users = [
    {name: 'avto', age:24},
    {name: 'luka', age:23},
    {name: 'jano', age:21},
    {name: 'nino', age:14},
    {name: 'lika', age:18},
    {name: 'giorgi', age:24},
    {name: 'vaxo', age:16},
    
  ];
  
  
  const sumOfAges = users.reduce((accumulator, currentUser) => {
    return accumulator + currentUser.age;
  }, 0);
  
  console.log('Sum of ages:', sumOfAges);

// 2 question

function submitForm() {
            
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;
  const subscribe = document.getElementById('subscribe').checked;

  
  console.log('Name:', name);
  console.log('Age:', age);
  console.log('Gender:', gender);
  console.log('Subscribe to newsletter:', subscribe);
}
// 3 question




function findLongestWord(wordArray) {
  if (!Array.isArray(wordArray) || wordArray.length === 0) {
      console.log('ar aris swori');
      return null;
  }

  let longestWord = wordArray[0];

  for (let i = 1; i < wordArray.length; i++) {
      if (wordArray[i].length > longestWord.length) {
          longestWord = wordArray[i];
      }
  }

  console.log('The longest word is:', longestWord);
  return longestWord;
}


const words = ['mustangi', 'avtobusi', 'matarebeli', 'mercedesbenz', 'shevroleti camaro'];

const longestWord = findLongestWord(words);