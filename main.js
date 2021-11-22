var pos = 0;
var name;
var points = 0;
var escolha = 0;
var length = 10;
var resp = 0;
const facil = {
    Facil: [{
        "Pergunta 1": ["O que significa  Auto", "1 - Casa", "2 - Carro", "3 - Moto", "2"]
        , "Pergunta 2": ["O que significa  Haus", "1 - Casa", "2 - Carro", "3 - Bala", "1"]
        , "Pergunta 3": ["O que significa  Frau", "1 - Frauda", "2 - Homem", "3 - Mulher", "3"]

    }
    ]
};


const medio = {
    Facil: [{
        "Pergunta 1": ["O que significa  Grun", "1 - Vermelho", "2 - Verde", "3 - Amarelo", "2"]
        , "Pergunta 2": ["O que significa  Müde", "1 - Cansado", "2 - Mudo", "3 - Morte", "1"]
        , "Pergunta 3": ["O que significa  Stark", "1 - Shampoo", "2 - Estrela", "3 - Forte", "3"]

    }
    ]
};

const dificio = {
    Facil: [{
        "Pergunta 1": ["O que significa  Krankenhaus", "1 - Casa", "2 - Hospital", "3 - Roupa", "2"]
        , "Pergunta 2": ["O que significa  Zeit", "1 - Tempo", "2 - Cavalo", "3 - Bala", "1"]
        , "Pergunta 3": ["O que significa  Arbeit", "1 - Frauda", "2 - Foca", "3 - Trabalho", "3"]

    }
    ]
};







function setName() {
    var nome = document.getElementById("fname").value;
    name = nome;
    var x = document.getElementById("nameSection");
    x.style.display = "none";
    showPerguntas();
    updateBoard();
    showBoard();
}

function testHard() {
    var current = "pos" + pos;
    // alert(isTheLast());
    updateBoard();
    if (isTheLast() != true) {
        pos+=3;
        gerarPerguntaD();
        var newPos = "pos" + pos;
        document.getElementById(current).innerHTML = "";
        document.getElementById(newPos).innerHTML = name;
    } else {
        window.location.href = "end.html";
    }
}

function gerarPerguntaD() {
    hideBoard();
    hidePerguntas();
    var num = Math.floor(Math.random() * 3) + 1;
    var choice = "Pergunta " + num;
    // alert(choice);
    var resposta = dificio.Facil[0][choice][4];
    resp = resposta;
    document.getElementById("pergunta").innerHTML = dificio.Facil[0][choice][0];
    document.getElementById("op1").innerHTML = dificio.Facil[0][choice][1];
    document.getElementById("op2").innerHTML = dificio.Facil[0][choice][2];
    document.getElementById("op3").innerHTML = dificio.Facil[0][choice][3];
}





function testMedio() {
    var current = "pos" + pos;
    // alert(isTheLast());
    updateBoard();
    if (isTheLast() != true) {
        pos+=2;
        gerarPerguntaM();
        var newPos = "pos" + pos;
        document.getElementById(current).innerHTML = "";
        document.getElementById(newPos).innerHTML = name;
    } else {
        window.location.href = "end.html";
    }
}

function gerarPerguntaM() {
    hideBoard();
    hidePerguntas();
    var num = Math.floor(Math.random() * 3) + 1;
    var choice = "Pergunta " + num;
    // alert(choice);
    var resposta = medio.Facil[0][choice][4];
    resp = resposta;
    document.getElementById("pergunta").innerHTML = medio.Facil[0][choice][0];
    document.getElementById("op1").innerHTML = medio.Facil[0][choice][1];
    document.getElementById("op2").innerHTML = medio.Facil[0][choice][2];
    document.getElementById("op3").innerHTML = medio.Facil[0][choice][3];
}



function testEasy() {
    var current = "pos" + pos;
    // alert(isTheLast());
    updateBoard();
    if (isTheLast() != true) {
        pos++;
        gerarPerguntaF();
        var newPos = "pos" + pos;
        document.getElementById(current).innerHTML = "";
        document.getElementById(newPos).innerHTML = name;
    } else {
        window.location.href = "end.html";
    }
}
function updateBoard() {
    showBoard();
    document.getElementById("showName").innerText = name;
    document.getElementById("showPlacar").innerHTML = points;
}

function isTheLast() {
    if (pos <= 9) {

        return false;

    }
    return true;
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
        // alert("Certo");
        points++;
        updateBoard();
        
        
    } else {
        // alert("Errado");
        points--;
        updateBoard();
        
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
    x.style.display = "none";
    var y = document.getElementById("area");
    // y.style.display = "none";

}

function showPerguntas() {
    var x = document.getElementById("quantasCasas");
    x.style.display = "block";
    var y = document.getElementById("area");
    y.style.display = "block";
}
