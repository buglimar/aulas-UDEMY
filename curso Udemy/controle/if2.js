function teste1(num) {
    if(num > 7)
    console.log(num)
    console.log('Final')

}

teste1(6)
teste1(8)


// errado com ";"
function teste1(num) {
    if(num > 7); //não usar ";" com as estrutura de controle "if"
    console.log(num)
    console.log('Final')
}

teste1(6)
teste1(8)
