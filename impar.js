function teste(){
    let num = Number(window.prompt('digite um numero'))
    let tipo
    if (num % 2 == 0) {
        tipo = '<strong>PAR</strong>'
    
    }else{
        tipo = '<strong>IMPAR</strong>'
    }
    let res = document.querySelector('section#result')
    res.innerHTML = `<p>O número ${num} que foi digitando é ${tipo}!</p>`
    
    }