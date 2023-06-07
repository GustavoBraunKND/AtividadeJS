

function Atividade1() {
    let dias      = document.getElementById('atvd1-dias')
    let meses     = document.getElementById('atvd1-meses')
    let anos      = document.getElementById('atvd1-anos')
    let resultado = document.getElementById('textarea1')

    let soma = 0

    if(dias.value == '') {
        alert("Insira dados na coluna 'Dias'")
        dias.focus()
        resultado.innerHTML = ""
    } else if(meses.value == '') {
        alert("Insira dados na coluna 'Meses'")
        meses.focus()
        resultado.innerHTML = ""
    } else if(anos.value == '') {
        alert("Insira dados na coluna 'Anos'")
        anos.focus()
        resultado.innerHTML = ""
    } else {
        soma = parseInt(dias.value) + (parseInt(meses.value) * 30) + (parseInt(anos.value) * 365)
        resultado.innerHTML = `Sua idade em dias é: ${soma}`
    }
}

function Atividade2() {
    let nota1     = document.getElementById('atvd2-nota1')
    let nota2     = document.getElementById('atvd2-nota2')
    let nota3     = document.getElementById('atvd2-nota3')
    let nota4     = document.getElementById('atvd2-nota4')
    let resultado = document.getElementById('textarea2')

    let media = 0
    let quartaNota

    if(nota1.value == '') {
        alert("Insira dados na coluna 'Nota1'")
        nota1.focus()
        resultado.innerHTML = ""
        return
    } else if(nota2.value == '') {
        alert("Insira dados na coluna 'Nota2'")
        nota2.focus()
        resultado.innerHTML = ""
        return
    } else if(nota3.value == '') {
        alert("Insira dados na coluna 'Nota3'")
        nota3.focus()
        resultado.innerHTML = ""
        return
    } 

    if(nota4.value == '') {
        quartaNota = 0
    } else {
        quartaNota = nota4.value
    }

     if(parseInt(nota3.value) > parseInt(quartaNota)) {
        media = (parseInt(nota1.value) + parseInt(nota2.value) + parseInt(nota3.value)) / 3
        resultado.innerHTML = `A média é: ${media}`
    } else {
        media = (parseInt(nota1.value) + parseInt(nota2.value) + parseInt(quartaNota)) / 3
        resultado.innerHTML = `A média é: ${media}`
    }
}

function Atividade3() {
    let numero = document.getElementById('atvd3-numero')
    let resultado = document.getElementById('textarea3')

    let numeroPar, numeroImpar

    if(numero.value == '') {
        alert("Insira dados na coluna 'Número'")
        numero.focus()
        resultado.innerHTML = ''
        return
    }

    for(let i = 1; i <= parseInt(numero.value); i++) {
        if(parseInt(numero.value) < 2) {
            numeroPar = "Não há números pares"
            } if(i % 2 == 0) {
                if (numeroPar == undefined) {
                    numeroPar = i
                } else {
                    numeroPar = numeroPar + ', ' + i
                }
            } if(i % 2 != 0) {
                if(numeroImpar == undefined) {
                numeroImpar = i
            } else {
                numeroImpar = numeroImpar + ', ' + i
            }
        }
        resultado.innerHTML = `Numeros pares: ${numeroPar}\nNúmeros ímpares: ${numeroImpar}`
    }
}

function Atividade4() {
    let usuario = document.getElementById('atvd4-usuario')
    let senha = document.getElementById('atvd4-senha')
    let resultado = document.getElementById('textarea4')

    if(usuario.value == '') {
        alert("Insira dados na coluna 'Usuário'")
        usuario.focus()
        resultado.innerHTML = ''
        return
    } else if(senha.value == '') {
        alert("Insira dados na coluna 'Senha'")
        senha.focus()
        resultado.innerHTML = ''
        return
    }

    if(usuario.value != "KUNDEN") {
        resultado.innerHTML = "O campo 'Usuário' está incorreto!"
        usuario.focus()
        return
    } else if(senha.value != "KUNDENJS2023") {
        resultado.innerHTML = "O campo 'Senha' está incorreto!"
        senha.focus()
        return
    } else {
        resultado.innerHTML = 'Login efetuado com sucesso!'
    }
}

function Atividade5() {
    let senha = document.getElementById('atvd5-senha')
    let resultado = document.getElementById('textarea5')

    let numeros = /([0-9])/
    let alfabeto = /([a-zA-Z])/

    if(senha.value == '') {
        alert("Insira dados na coluna 'Senha'")
        senha.focus()
        resultado.innerHTML = ''
        return
    }

    if(senha.value.length<8) {
        resultado.innerHTML = "A senha deve conter no mínimo 8 caracteres"
        return
    } else if(senha.value.length>10) {
        resultado.innerHTML = "A senha deve conter no máximo 10 caracteres"
        return
    } else if(senha.value.search(numeros) == -1) {
        resultado.innerHTML = "A senha deve conter pelo menos um número"
        return
    } else if(senha.value.search(alfabeto) == -1) {
        resultado.innerHTML = "A senha deve conter pelo menos uma letra"
        return
    } else if(senha.value.indexOf(' ') > -1) {
        resultado.innerHTML = "A senha não deve conter espaços em branco"
        return
    } else {
        resultado.innerHTML = `Senha válida!`
    }
}

function Atividade6() {
    let Fahrenheit = document.getElementById('atvd6-graus')
    let resultado = document.getElementById('textarea6')

    let numeros = /([0-9])/
    let alfabeto = /([a-zA-Z])/
    let celsius = 0

    if(Fahrenheit.value == '') {
        alert("Insira dados na coluna 'Fahrenheit'")
        Fahrenheit.focus()
        resultado.innerHTML = ""
        return
    } else if(Fahrenheit.value.search(alfabeto) != -1) {
        resultado.innerHTML = "Deverá conter apenas números"
        return
    }
        celsius = (((parseInt(Fahrenheit.value) - 32) * 5) / 9)
        resultado.innerHTML = `A temperatura em graus Celsius é: ${celsius}`
}

function Atividade7() {
    let a = document.getElementById('atvd7-a')
    let b = document.getElementById('atvd7-b')
    let c = document.getElementById('atvd7-c')
    let resultado = document.getElementById('textarea7')

    let delta = 0
    let x1 = 0
    let x2 = 0
    let alfabeto = /([a-zA-Z])/

   if(a.value == '') {
        alert("Insira dados na coluna 'A'")
        a.focus()
        resultado.innerHTML = ""
        return
    } else if(b.value == '') {
        alert("Insira dados na coluna 'B'")
        b.focus()
        resultado.innerHTML = ""
        return
    } else if(c.value == '') {
        alert("Insira dados na coluna 'C'")
        c.focus()
        resultado.innerHTML = ""
        return
    } else if(a.value.search(alfabeto) != -1) {
        resultado.innerHTML = "A coluna 'A' deverá conter apenas números"
        return
    } else if(b.value.search(alfabeto) != -1) {
        resultado.innerHTML = "A coluna 'B' deverá conter apenas números"
        return
    } else if(c.value.search(alfabeto) != -1) {
        resultado.innerHTML = "A coluna 'C' deverá conter apenas números"
        return
    }
    
    delta = Math.sqrt((parseInt(b.value) ** 2) - ((4 * parseInt(a.value)) * parseInt(c.value)))
    x1 = (-(b.value) + delta) / (2 * a.value)
    x2 = (-(b.value) - delta) / (2 * a.value)
    resultado.innerHTML = `X1: ${x1}\nX2: ${x2}`
}

function Atividade8() {
    let frase = document.getElementById('atvd8-frase')
    let resultado = document.getElementById('textarea8')

    let vogal
    let espacosEmBranco
    let mensagem = resultado

    if(frase.value == '') {
        alert("Insira dados na coluna 'Frase'")
        frase.focus()
        resultado.innerHTML = ""
        return
    }

    if(frase.value.search(/['aeiou']/gi) > -1) {
        vogal = frase.value.match(/['aeiou']/gi)
        vogal = vogal.length

        mensagem = `Vogais: ${vogal}`

    } else if(frase.value.search(/['aeiou']/gi) == -1) {
        mensagem = "Não há vogais nessa frase"
    }

    if(frase.value.search(/['\s']/gi) > -1) {
        espacosEmBranco = frase.value.match(/['\s']/gi)
        espacosEmBranco = espacosEmBranco.length

        mensagem += `\nEspaços em branco: ${espacosEmBranco}`

    } else if(frase.value.search(/['\s']/) == -1) {
        mensagem += "\nNão há espaços em branco nessa frase"
}

    resultado.innerHTML = `${mensagem}`

}

function Atividade9() {
    let salario = document.getElementById('atvd9-salario')
    let percComissao = document.getElementById('atvd9-prc-comissao')
    let qtdCarrosVendidos = document.getElementById('atvd9-carros-vendidos')
    let valorCarro = document.getElementById('atvd9-valor-carro')
    let resultado = document.getElementById('textarea9')

    let comissao, comissaoExtra = 0, salarioTotal, valorTotalVendas

    if(salario.value == '') {
        alert("Inserir dados na coluna 'Salário'")
        salario.focus()
        resultado.innerHTML = ""
        return
    } else if(percComissao.value == '') {
        alert("Inserir dados na coluna 'PercComissao'")
        percComissao.focus()
        resultado.innerHTML = ""
        return
    } else if(qtdCarrosVendidos.value == '') {
        alert("Inserir dados na coluna 'qtdCarrosVendidos'")
        qtdCarrosVendidos.focus()
        resultado.innerHTML = ""
        return
    } else if(valorCarro.value == '') {
        alert("Inserir dados na coluna 'valorCarro'")
        valorCarro.focus()
        resultado.innerHTML = ""
        return
    }

    valorTotalVendas = parseInt(qtdCarrosVendidos.value) * parseInt(valorCarro.value)
    comissao = (parseInt(percComissao.value) / 100) * parseInt(qtdCarrosVendidos.value)

    if(valorTotalVendas > 100000) {
        comissaoExtra = (7.5 / 100) * valorTotalVendas
    }

    salarioTotal = parseInt(salario.value) + comissao + valorTotalVendas + comissaoExtra
    resultado.innerHTML = `Salário fixo: ${salario.value}\nValor da comissão: ${comissao}\nValor da comissão exta: ${comissaoExtra}\nSalário total: ${salarioTotal}`
}

function Atividade10() {
    let resultado = document.getElementById('textarea10')

    const joioETrigo = ["joio", "trigo", "trigo", "joio", "trigo", "joio", "joio", "joio", "joio", "trigo", "trigo", "joio", 
    "joio", "joio", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "joio", "joio", 
    "joio", "joio", "joio", "joio", "joio", "joio", "trigo", "trigo", "joio", "joio", "joio", "joio", "joio", "joio", "joio", "joio", 
    "joio", "joio", "joio", "joio", "joio", "joio", "joio", "joio", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", 
    "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "joio", "joio", "joio", "joio", 
    "joio", "joio", "joio", "joio", "joio", "joio", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", "trigo", 
    "joio", "joio", "joio", "joio", "joio", "joio", "trigo", "joio", "joio", "joio", "joio", "joio", "trigo", "trigo", "trigo", 
    "trigo", "joio", "joio", "joio", "joio", "joio", "joio", "joio", "trigo", "trigo", "trigo", "joio", "trigo", "joio", "joio", 
    "joio"]

    let joio = []
    let trigo = []

    for(const palavra of joioETrigo) {
        
        if(palavra == "joio") {
          
            joio.push(palavra)

        } else if(palavra == "trigo") {

            trigo.push(palavra)
        }
    } 

    resultado.innerHTML = `Joios: ${joio.length}\nTrigos: ${trigo.length}`
}

function Atividade11() {
    let capital = document.getElementById('atvd11-capital')
    let tempo = document.getElementById('atvd11-tempo')
    let juros = document.getElementById('atvd11-juros')
    let resultado = document.getElementById('textarea11')

    let montante, calculo

    if(capital.value == '') {
        alert("Insira dados na coluna 'Capital'")
        capital.focus()
        resultado.innerText = ""
        return
    } else if(tempo.value == '') {
        alert("Insira dados na coluna 'Tempo'")
        tempo.focus()
        resultado.innerText = ""
        return
    } else if (juros.value == '') {
        alert("Insira dados na coluna 'Juros'")
        juros.focus()
        resultado.innerText = ""
        return
    }

    calculo = (1 + (juros.value / 100)) ** tempo.value
    montante = capital.value * calculo

    resultado.innerHTML = `O montante é: ${montante.toFixed(2)}`
}