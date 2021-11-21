var pos = 0;
var name;
var points = 0;
var escolha = 0;
var length = 10;
var resp = 0;
const facil = {
    Facil: [{
        "Pergunta 1": ["O que significa Das Auto", "1 - Casa", "2 - Carro", "3 - Moto", "2"]
        , "Pergunta 2": ["O que significa Das Haus", "1 - Casa", "2 - Carro", "3 - Bala", "1"]
        , "Pergunta 3": ["O que significa Die Frau", "1 - Frauda", "2 - Homem", "3 - Mulher", "3"]

    }
    ]
};

function setName() {
    var nome = document.getElementById("fname").value;
    name = nome;
}

function testEasy() {
    var current = "pos" + pos;
    // alert(isTheLast());
    updateBoard();
    if (isTheLast != true) {
        pos++;
        gerarPerguntaF();
        var newPos = "pos" + pos;
        document.getElementById(current).innerHTML = "";
        document.getElementById(newPos).innerHTML = name;
    } else {
        alert("End");
    }
}
function updateBoard() {
    showBoard();
    document.getElementById("showName").innerText = name;
    document.getElementById("showPlacar").innerHTML = points;
}

function isTheLast() {
    if (pos < 9) {
        return true;
    }
    return false;
}

function gerarPerguntaF() {
    hideBoard();
    hidePerguntas();
    var num = Math.floor(Math.random() * 3) + 1;
    var choice = "Pergunta " + num;
    // alert(choice);
    var resposta = facil.Facil[0][choice][4];
    resp = resposta;
    document.getElementById("pergunta").innerHTML = facil.Facil[0][choice][0];
    document.getElementById("op1").innerHTML = facil.Facil[0][choice][1];
    document.getElementById("op2").innerHTML = facil.Facil[0][choice][2];
    document.getElementById("op3").innerHTML = facil.Facil[0][choice][3];
}

function responder() {
    var e = document.getElementById("options").selectedIndex;
    showPerguntas();
    if (resp == e) {
        alert("Certo");
        updateBoard();
        points++;
    } else {
        alert("Errado");
        updateBoard();
        points--;
    }
}


function hideBoard() {
    var x = document.getElementById("board");
    x.style.display = "none";

}

function showBoard() {
    var x = document.getElementById("board");
    x.style.display = "block";
}

function hidePerguntas() {
    var x = document.getElementById("quantasCasas");
    x.style.display = "hidden";

}

function showPerguntas() {
    var x = document.getElementById("quantasCasas");
    x.style.display = "block";
}
