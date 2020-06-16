//Programa para o primeiro desafio
//Cálculo de aposentadoria

const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

const regra = idade + contribuicao;

if (sexo === "F") {
    if (regra >= 85 && contribuicao >= 30) {
        console.log(`${nome}, você pode se aposentar!`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar!`)
    }
} else if (sexo === "M") {
    if (regra >= 95 && contribuicao >= 35) {
        console.log(`${nome}, você pode se aposentar!`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar!`)
    }
}

