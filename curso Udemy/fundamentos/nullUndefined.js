let valor // não atribui nada não inicializada
console.log(valor)

valor = null // alsencia de valor
console.log(valor)
// console.log(valor.toString) // erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir underfine
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)