
let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log('siniii ')

  let username = document.getElementById("username");
  let password = document.getElementById("password");
  console.log(username, '<--- username')
  console.log(password, '<---- password')

  const nameAlreadyExist = 'supakul'
  const newName = nameAlreadyExist.toLowerCase()

  if (username.value.toLowerCase() === newName) {
    console.log('username already exist, please gunakan username yg lain')
  } else {
    if (username.value.length >= 6 ) {
      if (username.value.indexOf(' ') === -1) {
        console.log('password valid')
      } else {
        console.log('password tidak boleh ada spasi')
      }
    } else {
      console.log('password minimal 6 karakter')
    }
  }
 

});
