var pos = 0;
var name = "Daniel";
var escolha = 0;
var length = 10;
var resp = 0;
const  facil = {
 Resposta:[{"Pergunta 1":["O que significa Das Auto", "1 - Casa", "2 - Carro", "3 - Moto", "2"]
 ,"Pergunta 2":["O que significa Das Haus", "1 - Casa", "2 - Carro", "3 - Bala", "1"]}
 ]};

function testEasy() {
    var current = "pos" + pos;
    // alert(isTheLast());
    if (isTheLast != true) {
        pos++;
        gerarPergunta();
        var newPos = "pos" + pos;
        document.getElementById(current).innerHTML = "";
        document.getElementById(newPos).innerHTML = name;
    }else{
        alert("End");
    }
}


function isTheLast() {
    if (pos < 9) {
        return true;
    }
    return false;
}

function gerarPergunta() {
    var choice = "Pergunta "+2;
    // alert(choice);
    var resposta = facil.Resposta[0][choice][4];
    resp = resposta;
    document.getElementById("pergunta").innerHTML = facil.Resposta[0][choice][0];
    document.getElementById("op1").innerHTML = facil.Resposta[0][choice][1];
    document.getElementById("op2").innerHTML = facil.Resposta[0][choice][2];
    document.getElementById("op3").innerHTML = facil.Resposta[0][choice][3];
}
