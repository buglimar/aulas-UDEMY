function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const conprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) bitwise xor  bit a bit 'ou' excluzivo
    const conprarTv32 = trabalho1 != trabalho2 // tambem 'ou' excluzivo
    const manterSaudavel = !comprarSorvete // operador unário
    return { comprarSorvete, comprarSorvete, conprarTv50, conprarTv32, manterSaudavel } 
}
console.log(compras( true, true))
console.log(compras( true, false))
console.log(compras( false, true))
console.log(compras( false, false))
