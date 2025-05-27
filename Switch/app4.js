// switch

const { createElement } = require("react");

//criando uma variavel x

/*  INICIO
x = 2;
switch( x ){ // passar parametro do valor que está recebendo
    //condições e casos que seram executadas
    case 0:
        alert("O x vale 0!")
        break; 
    case 1:
        alert("O x vale 1!")
        break;
    case 2:
        alert("O x vale 2!");

        // o x vai cair no case 2, pois x vale 2
}

FIM    */ 
// criando função pedir do botão
function pedir(){
    x = prompt("O que deseja pedir?"); // todo uso de prompt deve ser uma string
switch( x ){ // passar parametro do valor que está recebendo
    //condições e casos que seram executadas
    case "0": 
        alert("Voce pediu sorvete")
        break; 
    case "1":
        alert("Voce pediu água")
        break;
    case "2":
        alert("Você pediu uma coca");
        break;
        // o x vai cair no case 2, pois x vale 2
        default: 
            alert("Ops não temos essa opção!");
            break; // para exibir erro
}
}