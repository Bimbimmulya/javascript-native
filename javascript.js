let loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('siniii ');

  let username = document.getElementById('username');
  console.log(username, '<--- username');

  const nameAlreadyExist = 'supakul';
  const newName = nameAlreadyExist.toLowerCase();

  if (username.value.toLowerCase() === newName) {
    console.log('username already exist, please gunakan username yg lain');
  } else {
    if (username.value.length >= 6 && username.value.indexOf(' ') === -1) {
      console.log('password valid');
    } else {
      console.log('password minimal 6 karakter');
    }
  }
});

// struktur data Array

let arr = [1, 'satu', true, false, null];

//concat
const arr1 = ['a', 'b', 'c'];
const arr2 = ['d', 'e', 'f']
const arr3 = arr1.concat(arr2) // concat untuk menggabungkan nilai array

//indexOf mencari nilai index dari string
const beast = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beast.indexOf('bison')); //output: 1 -> karena mencari indexOf spesifik dengan string
console.log(beast.indexOf('bison', 2)); // output: 4 -> karena mencari indexOf dengan paramater index 2
console.log(beast.indexOf('giraffe')) // output: -1 -> karena tidak ditemukan maka indexOf mengambilakn -1

//includes mengembalikan true jika suatu array berisi nilai yang ditentukan..
const arr4 = [1, 2, 4];
console.log(arr4.includes(2));//output: true 
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat')); //output: true
console.log(pets.includes('at')); //output: false