const Alpabit =document.querySelector('.Alpabit');
const number =document.querySelector('.number');
const code =document.querySelector('.code-number');

window.addEventListener('keydown', (e) =>{
    if (e.key == 'Backspace'){
     code.innerHTML = "number"
     Alpabit.innerHTML = e.key;
     number.innerHTML = "space"
    }else if (e.key == ""){
        number.innerHTML = "code-number"
        Alpabit.innerHTML = e.key;
        code.innerHTML = "backspace"
    }else {
        number.innerHTML = "space"
        Alpabit.innerHTML = e.key;
        code.innerHTML = "backspace"
    }
    console.log(e);
})

