function calc() {

    let n1 = Number(prompt('primeiro'))
    let n2 = Number(prompt('segundo'))
    let op = Number(prompt(`numeros: ${n1} e ${n2}. \nO que vamos fazer? \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir`))

    let saida = document.getElementById('saida')
    saida.innerHTML = `<h2>Calculando...</h2>`
    switch (op) {
        case 1:
            saida.innerHTML += `${n1} + ${n2} = ${n1+n2}`
            break
        case 2:
            saida.innerHTML += `${n1} - ${n2} = ${n1-n2}`
            break
        case 3:
            saida.innerHTML += `${n1} x ${n2} = ${n1*n2}`
            break
        case 4:
            saida.innerHTML += `${n1} / ${n2} = ${n1/n2}`
            break
        default:
            saida.innerHTML += `Numeros Invalidos`



    }
}