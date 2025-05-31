// SPREAD OPERATOR

//Criando variavel
let primeiros = [1,2,3];

//colocando os primeiros numeros dentro de array numeros
let numeros = [...primeiros,4,5,6]; // devolve 1,2,3,4,5,6
// ... ---> SPREAD OPERATOR

// TESTANDO PASSAR SEM O SPREAD OPERATOR 
let numeros2 = [primeiros,4,5,6]; // devolve no console: [Array(3), 4,5,6]
//------ Ele cria um array dentro de um array

//-----------------------------------------------
//utilizando um objetos

let pessoas = {
    nome: "Raquel",
    idade: 46,
    cargo: "Advogada"
}

// utilizando Spread Operator em pessoas
let novaPessoa = {
   ...pessoas,       // recebendo objeto  
   anoAtual: 2050,  // juntando pessoas e novaPessoa
   cidade: "São Paulo"   
} 


// Aplicando em uma função Spread Operator

function cadastroPessoa(info){ // passando uma informação para cadastroPessoa
   
    let novosDados = {
        ...info,    //usando spreado Operator
        cargo: 'Adm',
        status: 1,      //passando dados a mais dentro da função
        codigo: '321312312312'
    }
    return novosDados; // retorna novosDados
}

//exibindo meu codigo no console, la ele me retorna o objeto
// cadastroPessoa({ nome3: 'Raquel', sobreNome: 'Andreozzi', anoInicio: 2025}); // passando um objeto para a função

console.log(cadastroPessoa({ nome3: 'Raquel', sobreNome: 'Andreozzi', anoInicio: 2025})); // passando um objeto para a função