/*  
    1. Big Data na Recomendação

    Uma matriz esparsa é aquela onde a maioria dos elementos são zeros. No Netflix, temos uma matriz onde as linhas são usuários e as colunas são filmes. Como um usuário assiste a apenas uma fração minúscula do catálogo, armazenar todos os zeros é um desperdício massivo de recursos. 
    
    Desafio de Cálculo de Memória
    Considere o seguinte cenário real:
    • Usuários: 1.000.000 (1 milhão)
    • Filmes no Catálogo: 10.000
    • Média de filmes assistidos por usuário: 100

        1. Calcule quantos Gigabytes (GB) seriam necessários para armazenar essa matriz no formato Denso (onde guardamos todos os zeros), considerando que cada número ocupa o tipo padrão de 4 bytes.
            r: 40gb -> pois, 1.000.000 * 10.000 * 4 = 40.000.000.000 bytes = 40gb

        2. Calcule o espaço necessário no formato Esparso (COO), onde para cada filme assistido guardamos a tripla: {linha, coluna, valor}. (Dica: cada tripla terá 3 números de 4 bytes cada).
            r: 1.2gb -> pois 1.000.000 * 100 * 3 * 4 = 1.200.000.000 bytes = 1.2gb

        3. Qual é a economia real de memória em porcetagem?
            r: ~= 
                40x = 1.2 * 100
                40x = 120
                x = 12 / 4
                x = 3 = 3% de uso

                100% - 3% = 97%

                logo, a economia real de memoria em porcent é 97% :)

    
    
    2. Big Data na Netflix (Código) 
    Imagine que você é um desenvolvedor na Netflix. Temos uma matriz onde as linhas são usuários e as colunas são filmes. Como a maioria dos usuários não assistiu a todos os filmes, usamos o formato COO (Lista de Triplas) para não desperdiçar memória.
    Especificações Técnicas:
        - Total de Usuários (Linhas): 4
        - Total de Filmes (Colunas): 5
        - Vetor de Pesos: Contém a importância de cada um dos 5 filmes para uma recomendação atual.

    Sua Tarefa de Programação: 

    Implemente em JavaScript uma função que realize a multiplicação da Matriz Esparsa (COO) pelo Vetor de Pesos.
        Requisitos do Código:
            - A função deve receber um array de objetos (a matriz) e um array simples (o vetor).
            - Proibido: Você não deve criar uma matriz densa (com zeros) em nenhum momento.
            - O processamento deve ser eficiente, percorrendo apenas os elementos que existem na lista de triplas.

*/

// matriz esparça
const avaliacoes = [ 
    { row: 0, column: 1, value: 5 }, // Usuário 0 -> Filme 1 -> (Nota 5)
    { row: 1, column: 3, value: 2 },
    { row: 3, column: 0, value: 4 },
];

// vetor denso
const pesos = [10, 20, 30, 40, 50]; // Pesos para os filmes 0, 1, 2, 3 e 4

function multiplicarRecomendacao(avaliacoes, pesos) {
    // 1. Crie o vetor de resultado com tamanho 4 (número de usuários) preenchido com zeros
    // Dica: Use new Array(x).fill(x)
    let results = new Array(4).fill(0);

    // 2. Percorra a matriz esparsa (lista de triplas) com um único laço
    for(const { row, column, value } of avaliacoes){
        console.log(`usuario: ${row}, filme: ${column}, value: ${value} `)
    }

    // 3. Aplique a lógica: Multiplique o 'valor' da nota pelo peso no 'vetorDenso' correspondente à 'coluna' e some no índice 'linha' do resultado.
    let i = 0;
    for(const { row, column, value } of avaliacoes){
        results[i] = value * pesos[column];
        i++;
    }
    // 4. Retorne o vetor de scores final
    return results;
}

console.log("Seu resultado: ", multiplicarRecomendacao(avaliacoes, pesos));

// --- DADOS PARA TESTE ---
// Resultado esperado: [100, 80, 0, 40, 0]