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

//sort mengurutkan elemen sebagai string dalam urutan abjad dan menaik.
const months = ['March', 'Jan', 'Feb', 'Dec']
months.sort();
console.log(months); // output: Dec, Feb, Jan, March

const arr5 = [1, 30, 4, 21, 100000];
arr5.sort();
console.log(arr5); //output: 1, 100000, 21, 30, 4

//splice untuk memanipulasi/menggantikan nilai array
const months2 = ['Jan', 'Marh', 'April', 'June'];
months2.splice(1, 0, 'Feb'); //output: 'Jan', 'Feb', 'Marh', 'April', 'June' -> menambahkan nilai index dari index ke 1 tanpa mengganti/menghapus nilai index yg ada
months2.splice(4, 1, 'May'); //output: 'Jan', 'Feb', 'Marh', 'April', 'May' -> menambahkan nilai dari index ke 4 dan menggantikan nilai index setelah index ke 4
//paramater pertama di index berapa yg akan ditambahkan
//parametr kedua index setelah paramater pertama yg akan dimanipulasi
//paramater ketiga input nilai yg akan dimasukan

//slice menghapus element array. paramater pertama element start paramater kedua element end
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
console.log(animals.splice(2)); //output: 'camel', 'duck', 'elephant'
console.log(animals.slice(2, 4)); //output: 'camel', 'duck'
console.log(animals.slice(1, 5)); //output: 'ant', 'bison', 'camel', 'duck', 'elephant' -> karaena index 5 tidak ada
console.log(animals.slice(-2)); //output: 'duck', 'elephant'
console.log(animals.slice(2, -1)); //output: 'duck', 'duck'
console.log(animals.slice()); //output: 'ant', 'bison', 'camel', 'duck', 'elephant'

//revers metode membalik urutan elemen dalam array
const arr6 = ['one', 'two', 'there']
const reversed = arr6.reverse();
console.log(reversed, '<--- reversed'); //output: 'three', 'two' 'one'