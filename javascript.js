//paramater & argument

//paramater adalah sebuah data penampung argument
//argument adalah sebuah data yg dikirim ke paramater
//argument yg dikirim kedalam paramater bisa digunakan/dimanipulasi didalam function
greeting = (data) => {
  console.log(`Halo selamat siang ${data}`) //dalam blok scope ini kita bisa menggunakan/memanipulasi argument yg dikirim kedalam paramater
}

greeting('john')