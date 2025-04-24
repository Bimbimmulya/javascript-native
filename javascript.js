
let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log('siniii ')

  let username = document.getElementById("username");
  console.log(username, '<--- username')

  const nameAlreadyExist = 'supakul'
  const newName = nameAlreadyExist.toLowerCase()

  if (username.value.toLowerCase() === newName) {
    console.log('username already exist, please gunakan username yg lain')
  } else {
    if (username.value.length >= 6 && username.value.indexOf(' ') === -1 ) {
        console.log('password valid')
    } else {
      console.log('password minimal 6 karakter')
    }
  }
});
