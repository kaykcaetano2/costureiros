function escolha() {
    var nome = document.getElementById("nome").value;
    var dia = prompt("Qual dia você deseja coloca-ló?(de sengunda à sexta. Certifique-se que escreveu certo)")
        if(dia =="segunda"){
            document.getElementById("seg").innerHTML = `${nome}`;
            horario = 1
            hora()
        }
        else if(dia =="terça"){
            document.getElementById("ter").innerHTML = `${nome}`;
            horario = 2
            hora()
        }
        else if(dia =="quarta"){
            document.getElementById("qua").innerHTML = `${nome}`;
            horario = 3
            hora()
        }
        else if(dia =="quinta"){
            document.getElementById("qui").innerHTML = `${nome}`;
            horario = 4
            hora()
        }
        else if(dia =="sexta"){
            document.getElementById("sex").innerHTML = `${nome}`;
            horario = 5
            hora()
        }
        else{
            alert("Mudou de ideia, né, tudo bem")
        }
        hora
    return horario   
}
function hora(){
    var hora = prompt("Qual Horario é você deseja coloca-ló(coloque Horarios como: 18:00  19:57  13:30)")
    if(horario =="1")
        document.getElementById("ho1").innerHTML = `${hora}`;
    else if(horario =="2")
        document.getElementById("ho2").innerHTML = `${hora}`;
    else if(horario =="3")
        document.getElementById("ho3").innerHTML = `${hora}`;
    else if(horario =="4")
        document.getElementById("ho4").innerHTML = `${hora}`;
    else if(horario =="5")
        document.getElementById("ho5").innerHTML = `${hora}`;
    else
        alert("Mudou de ideia, né, tudo bem")
}