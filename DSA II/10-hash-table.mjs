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
