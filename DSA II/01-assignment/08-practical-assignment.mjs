// Atividade Prática 1º Bim - (Valor 10 - Peso 2,0)

// INSTRUÇÕES:
// 1. Leia atentamente as instruções para realizar a atividade.
// 2. Conteúdo Programático: busca sequencial, busca binária, ordenação com bubble-sort, selection-sort, merge-sort (recursividade).
// 3. O trabalho prático deverá ser feito INDIVIDUAL.
// 4. O programa-fonte deverá ser feito em Javascript (código) e deverá ser compactado e enviado na tarefa do AVA.
// 5. A data limite para a entrega e envio do arquivo Fonte é: 13/09/2026 (23:59h).

// DEFINIÇÃO DE REQUISITOS / ESPECIFICAÇÕES / CONSIDERAÇÕES /RECOMENDAÇÔES:
// ESTRUTURA: Construa uma aplicação em Javascript para a manipulação de dados armazenados em uma estrutura de dados heterogênea dinâmica utilizando um Array de Objetos por exemplo. O software deve ser capaz de realizar um Cadastro de Alunos de uma Faculdade. Se preferir, poderá definir um limite máximo de alunos cadastrados. Você deve implementar os algoritmos sem usar Array.sort() 
// DADOS: Os dados/campos a serem armazenados sobre os alunos são Obrigatoriamente: NOME; RA; IDADE; SEXO; MÉDIA e RESULTADO (Aprovado/Reprovado). Observação para média de aprovados: >= 6,0 

// TELA DE APRESENTAÇÃO DO PROGRAMA: (conter)
//. - Cadastrar Alunos.
//. - Relatório de Alunos em ordem crescente por Nome.
//. - Relatório de Alunos em ordem decrescente por RA.
//. - Relatório de Alunos em ordem crescente por Nome, apenas dos Aprovados.
// Obs: Para os relatórios, todos os campos de cada aluno deverão ser apresentados na tela.

let university = []

function addStudent(university){

    let nome = prompt("nome: ");
    let ra = prompt("ra: ");
    let idade = prompt("idade: ");
    let sexo = prompt("sexo: ");
    let media = prompt("media: ");
    let resultado = media >= 6.0 ? "Aprovado" : "Reprovado";

  let student = {
    nome,
    ra,
    idade,
    sexo,
    media,
    resultado,
  }

  university.push(student);
  alert("Aluno cadastrado!");
}

function showReportRADSC(university){
  if(university.length === 0){
    console.log("Nenhum aluno cadastrado");
    return;
  }

  let arr = [...university]; // agr é uma copia
  let change;

  do {
    change = false;

    for(let i = 0; i < arr.length - 1; i++){
      if(arr[i].ra < arr[i+1].ra){ // compara string DSC
        [ arr[i], arr[i+1] ] = [ arr[i+1], arr[i] ];
        change = true;
      }
    }
  } while(change);
  
  console.log(arr);
}
function showReportNameASC(university){
 if(university.length === 0){
    console.log("Nenhum aluno cadastrado");
    return;
  }

  let arr = [...university]; // agr é uma copia
  let change;

  do {
    change = false;

    for(let i = 0; i < arr.length - 1; i++){
      if(arr[i].nome > arr[i+1].nome){ // compara string ASC
        [ arr[i], arr[i+1] ] = [ arr[i+1], arr[i] ];
        change = true;
      }
    }
  } while(change);
  
  console.log(arr);
}
function showReportApprovedASC(university){
  if(university.length === 0){
    console.log("Nenhum aluno cadastrado");
    return;
  }

  let arr = [];
  for(let i = 0; i < university.length; i++){
    if(university[i].resultado === "Aprovado") arr.push(university[i])
  }
  let change;

  do {
    change = false;

    for(let i = 0; i < arr.length - 1; i++){
      if(arr[i].nome > arr[i+1].nome){ // compara string ASC
        [ arr[i], arr[i+1] ] = [ arr[i+1], arr[i] ];
        change = true;
      }
    }
  } while(change);
  
  console.log(arr);
}


function startProgram() {
    let nav = 0;
    do {
        let menu = "SISTEMA FACULDADE\n\n" +
                   "1 - Adicionar Aluno\n" +
                   "2 - Relatório de Alunos em ordem crescente por Nome\n" +
                   "3 - Relatório de Alunos em ordem decrescente por RA\n" +
                   "4 - Relatório de Alunos em ordem crescente por Nome (Apenas Aprovados)\n" +
                   "5 - Sair\n\n" +
                   "Escolha uma opção:";
        
        nav = parseInt(prompt(menu));

        switch(nav) {
            case 1: 
                addStudent(university);
                break;
            case 2: 
                showReportNameASC(university);
                break;
            case 3: 
                showReportRADSC(university);
                break;
            case 4: 
                showReportApprovedASC(university);
                break;
            case 5:
                alert("Adeus professor (Fechando o programa)...");
                break;
            default:
                alert("Opção inválida!");
        }
    } while(nav !== 5);
}

startProgram();