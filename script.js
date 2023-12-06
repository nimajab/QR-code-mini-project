const generatebtn = document.querySelector('form button')
const qrCodeBox = document.querySelector('.qr-code ')
const qrInput = document.querySelector('form input')
const qrImage = document.querySelector('.qr-code img')

generatebtn.addEventListener('click', function (){
  let qrvalue = qrInput.value
  if (!qrvalue) {
    return alert('لطفا يك متن ؤارد كن')
  }
  generatebtn.innerHTML = 'دريافت Qr code '
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=$[]`
  qrImage.addEventListener('load' , function (){
    qrCodeBox.classList.remove('hidden')
    generatebtn.innerHTML = 'توليد QR code '
  })
})
qrInput.addEventListener('keyup', ()=>{
  if(!qrInput.value) {
    qrCodeBox.classList.add('hidden')
  }
})
