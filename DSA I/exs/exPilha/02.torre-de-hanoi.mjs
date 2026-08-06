
/*
1. Veja, na imagem "Torre-De-Hanoi-4-Discos.png", como funciona o jogo das Torres de Hanoi com 4 discos.

2. Cada uma das torres do jogo se comporta como uma pilha.

3. Em hipótese alguma, um disco maior pode ficar sobre um disco menor.

3. Importe a classe apropriada "PILHA" da pasta "lib" e crie três pilhas, representando as três torres.

4. Comece o jogo com os 4 discos na TorreB conforme a imagem "Torre-De-Hanoi-4-Discos.png", nesta ordem [1,2,3,4].

5. Implemente o método correto que move um disco de uma torre para outra. -> (pushs and pops)

6. Finalize o jogo com os 4 discos na TorreA. Use o método print() para exibir as três pilhas ANTES e DEPOIS,
conforme a imagem "Torre-Impressao.png". DEPOIS das movimentações, a TorreA deve estar com os discos na
ordem [1,2,3,4] e as outras duas torres (TorreB e TorreC) devem estar vazias.
*/

import Stack from "../../lib/Stack.mjs";

function showTowers(){
    return console.log("\t", "tower A: ", towerA.print(),
                       "\n\t", "tower B: ", towerB.print(),
                       "\n\t", "tower C: ", towerC.print(),);
}
let towerA = new Stack();
let towerB = new Stack();
let towerC = new Stack();

towerB.push(1); // grather
towerB.push(2);
towerB.push(3);
towerB.push(4); // less
console.log("before ->");
showTowers();

console.log("1 ->");
towerB.pop();
towerC.push(4);
towerB.pop();
towerA.push(3);
showTowers();

console.log("2 ->");
towerC.pop();
towerA.push(4);
towerB.pop();
towerC.push(2);
showTowers();

console.log("3 ->");
towerA.pop();
towerB.push(4);
towerA.pop();
towerC.push(3);
showTowers();

console.log("4 ->");
towerB.pop();
towerC.push(4);
towerB.pop();
towerA.push(1);
showTowers();

console.log("5 ->");
towerC.pop();
towerA.push(4);
towerC.pop();
towerB.push(3);
showTowers();

console.log("6 ->");
towerA.pop();
towerB.push(4);
towerC.pop();
towerA.push(2);
showTowers();

console.log("7 ->");
towerB.pop();
towerC.push(4);
towerB.pop();
towerA.push(3);
showTowers();

console.log("8 (after) ->");
towerC.pop();
towerA.push(4);
showTowers();

console.log("\n\nend! :)");
