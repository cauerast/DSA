// ============================================================================
// HASH TABLE (TABELA HASH)
// 
//      [ Key ] ---> { Hash Function } ---> [ Index ] ---> [ Array/Bucket ]
//    "username"          h(x)                idx 3         [3] -> (Key, Value)
// 
// --- TERMINOLOGY & GLOSSARY ---
// * Hash Table: A data structure that maps keys to values using a hash function.
// * Hash Function: A algorithm that converts a key into a numeric array index.
// * Key: The unique identifier used to look up a value (e.g., a text string).
// * Value: The actual data stored and associated with a specific key.
// * Bucket/Slot: The specific location in the underlying array where data is kept.
// * Collision: When two different keys generate the exact same index.
// * Load Factor: The ratio of stored items to total capacity (Size / Capacity).
// * Rehashing: Resizing the table and redistributing items when it gets too full.
// 
// --- COLLISION RESOLUTION METHODS ---
// * Chaining (Separate) -> Each bucket holds a Linked List of colliding items.
// * Open Addressing     -> Finds another empty slot inside the array itself.
//   - Linear Probing    -> Checks the next available slot sequentially (idx + 1).
//   - Quadratic Probing -> Checks slots using a quadratic equation (idx + i²).
//   - Double Hashing    -> Uses a second hash function to calculate the step size.
// 
// EXTENDED VISUAL EXAMPLE (Separate Chaining Model)
// 
//   [Index]    [Buckets / Array Slots]
//     [0] ---> Null
//     [1] ---> [ "Apple" : $1.99 ] ---> [ "Grape" : $2.50 ] ---> Null  (Collision!)
//     [2] ---> Null
//     [3] ---> [ "Banana" : $0.99 ] ---> Null
//     [4] ---> [ "Orange" : $1.49 ] ---> Null
//     [5] ---> Null
// 
// --- METRICS & ROLES FOR THIS SPECIFIC TABLE ---
// * Total Capacity = 6 (Array size from 0 to 5)
// * Current Size = 4 (Total elements inserted)
// * Load Factor = 4 / 6 ≈ 0.66 (66% full)
// * Collisions = 1 (At Index)
// 
// --- TIME COMPLEXITY (BIG O) ---
// * Insertion (Put) -> Average: O(1) | Worst Case: O(n) (Due to collisions)
// * Deletion (Delete) -> Average: O(1) | Worst Case: O(n)
// * Search (Get)      -> Average: O(1) | Worst Case: O(n)
// ============================================================================

class HashTable {
  constructor(len = 11) {
    this.length = len; // Tamanho total do array principal
    this.table = Array.from({ length: len }, () => []); // Inicializa os buckets vazios
    this.qtd = 0; // Contador de elementos inseridos
  }

  // Método privado: Transforma a string em um índice numérico válido
  #hash(key) {
    let h = 0;
    for (let i = 0; i < key.length; i++) {
      // Multiplicação por 31 ajuda a distribuir melhor os hashes
      h = (h * 31 + key.charCodeAt(i)) % this.length;
    }
    return h;
  }

  // Insere ou atualiza um par chave-valor
  set(key, value) {
    const bucket = this.table[this.#hash(key)];

    // 1º caso: A chave já existe, então atualiza o valor
    for (const pair of bucket) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }

    // 2º caso: A chave é nova, adiciona ao fim do bucket
    bucket.push([key, value]);
    this.qtd++;

    // Controla a densidade da tabela para evitar lentidão
    if (this.qtd / this.length > 0.75) {
      this.#rehash();
    }
  }

  // Busca o valor associado a uma chave
  get(key) {
    const bucket = this.table[this.#hash(key)];

    // Percorre o bucket específico buscando a chave exata
    for (const [k, v] of bucket) {
      if (k === key) {
        return v; // Retorna o valor se encontrado
      }
    }
    return undefined; // Retorna undefined caso não exista
  }

  // Remove um elemento da tabela
  delete(key) {
    const bucket = this.table[this.#hash(key)];

    // Busca o índice do par dentro do sub-array (bucket)
    const i = bucket.findIndex(([k]) => k === key);

    // 1º caso: Chave não encontrada
    if (i === -1) return false;

    // 2º caso: Chave encontrada, remove do bucket usando splice
    bucket.splice(i, 1);
    this.qtd--;
    return true;
  }

  // Método privado para redimensionar a tabela (você está desenvolvendo)
  #rehash() {
    const antiga = this.table;
    this.length = this.length * 2 + 1;
    this.table = Array.from({ length: length }, () => []);
    this.qtd = 0;
    for(const bucket of old) {
      for (const [k, v] of bucket){
        this.set(k, v);
      }
    }
  }

  print(){
    
  }
}

export default HashTable;
