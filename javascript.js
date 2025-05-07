//multiple paramater & argument
//sometimes argumentnya harus di isi semua, sometimes tidak perlu di isi semua

//contoh harus diisi semua
increament = (a, b) => {
  const increas = a + b;
  console.log(increas, '<---- increas')
}

//contoh tidak harus di isi 
increament2 = (a = 0, b = 0) => { // tidak harus di isi karena sudah ada nilai paramater default
  const increas = a + b;
  console.log(increas, '<--- increas 2')
}

//contoh tidak harus di isi
cekUserID = (data = '') => {
  console.log(data, '<--- data')

  if (data) {
    console.log('show user ID')
  } else {
    console.log('hide user ID')
  }

  //pada kasus ini tidak harus di isi tapi tergantung penyikapan argument tersebut, yg harus diperhatikan adalah tidak boleh terjadi errorr ketika tidak mengirim argument, atau argument yg dikirim tidak sesuai
}