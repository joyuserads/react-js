// vamos usar a variavel const


const pessoa = {
    nome: "Joyce",
    sobreNome: "Santos",        // dentro do objeto pessoa temos: nome, sobrenome,idade,cargo
    idade: "18",
    cargo: "Desenvolvedor"
};

// desconstruindo um objeto
let {nome} = pessoa; // pegando do objeto pessoa o elemento nome, e definindo ele

let {sobrenome} = pessoa;

let {idade, cargo} = pessoa;

//criando uma variavel programador atribuindo ao nome programador
let {cargo: programador} = pessoa; // definindo um novo nome