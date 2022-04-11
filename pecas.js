let pesoPeca = 200
let numeroPecas = 10
let listaPecas = ["Disco de Freio", "Motor", "Pastilha de Freio", "Caixa de Marchas", "Pneu"]
let nomePeca = "Disco de Freio"

// Verificação do Peso da peça
if (pesoPeca > 100) {
    // Podemos cadastrar
    console.log("Peso adequado, podemos cadastrar")

} else {
    // Não podemos cadastrar
    console.log("Peso menor que 100g, não podemos cadastrar")
}

// Verificação quantidade de peças
if (numeroPecas >= 10) {
    // Capacidade máxima atingida
    console.log("Capacidade máxima atingida")
} else {
    // Ainda há espaço para cadastro
    console.log("Ainda há espaço para cadastro")
}

// Verificação Tamanho da lista de paças
if (listaPecas.length >= 10) {
    // Capacidade máxima atingida
    console.log("Capacidade máxima atingida")
} else {
    // Ainda há espaço para cadastro
    console.log("Ainda há espaço para cadastro")
}

// Verificação do nome da peça
if (nomePeca.length < 3) {
    // Nome inválido
    console.log("Nome inválido, o nome precisa ter três caracteres ou mais")
} else {
    // Nome de peça adequado
    console.log("Nome adequado")
}