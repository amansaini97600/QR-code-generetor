const createBtn = document.querySelector('.Generat-btn');
const qrImg = document.querySelector('#qr-image');
let qrInput = document.querySelector('#qr-input');

createBtn.addEventListener('click', () => {
    if(qrInput.value === ""){
        alert("Kuchh to likho bhai");
    }else{
        inputValue = qrInput.value;
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
    }
});
