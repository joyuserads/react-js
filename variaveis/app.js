// criando uma variavel var

var nome = 'Joyce';

//criando uma condição com a variavel var
if (nome == 'Joyce') {
    var idade = 40;
    console.log("Tem",+idade);    
}

// podemos usar let como uma variavel também
//let sobreNome = 'Santos';

// diferença usando let
if (nome == 'Joyce') {
    let sobreNome = 'Silva';  //ao acessa ro que tem dentro da variavel sobreNome, me retorna undefined;
    //o let só é acessado dentro desse escopo
    console.log("Joyce"+ sobreNome);
}


// Exemplificando criando uma lista
var lista = [0,1,2];

for(var i in lista){ // vai percorrer toda a lista com a varivel i
    console.log(lista[i]);
}


for(let b in lista){
    console.log(lista[b]);
  //ao tentar acessar let b no console, retorna undefined, pois não é possivel acessar a variavel fora do escopo (for)
}

// Exemplificando acessando o let dentro do escopo
let apelido = "Raquel";
var idade = 45;
if(idade == 45){
    console.log(apelido);
    //quando não queremos que a váriavel saia da função, utilzamos let
}


// Const, variavel que não muda de valor

const darNome = "Joyce"
// se tento modificar : da erro. (visualização no console)
// darNome = "ssa";