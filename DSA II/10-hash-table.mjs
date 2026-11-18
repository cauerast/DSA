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
    this.length = len; // Total size of the main array
    this.table = Array.from({ length: len }, () => []); // Initialize empty buckets
    this.qtd = 0; // Counter for inserted elements
  }

  // Private method: Converts a string into a valid numeric index
  #hash(key) {
    let h = 0;
    for (let i = 0; i < key.length; i++) {
      // Multiplying by 31 helps distribute hashes better
      h = (h * 31 + key.charCodeAt(i)) % this.length;
    }
    return h;
  }

  // Inserts or updates a key-value pair
  set(key, value) {
    const bucket = this.table[this.#hash(key)];

    // Case 1: Key already exists, so update its value
    for (const pair of bucket) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }

    // Case 2: Key is new, append to the end of the bucket
    bucket.push([key, value]);
    this.qtd++;

    // Control table load factor to avoid slowdown
    if ((this.qtd / this.length) > 0.75) {
      this.#rehash();
    }
  }

  // Retrieves the value associated with a key
  get(key) {
    const bucket = this.table[this.#hash(key)];

    // Traverse the specific bucket looking for the exact key
    for (const [k, v] of bucket) {
      if (k === key) {
        return v; // Return value if found
      }
    }
    return undefined; // Return undefined if not found
  }

  // Removes an element from the table
  delete(key) {
    const bucket = this.table[this.#hash(key)];

    // Find the index of the pair inside the sub-array (bucket)
    const i = bucket.findIndex(([k]) => k === key);

    // Case 1: Key not found
    if (i === -1) return false;

    // Case 2: Key found, remove from bucket using splice
    bucket.splice(i, 1);
    this.qtd--;
    return true;
  }

  // Private method to resize the table
  #rehash() {
    const old = this.table;
    this.length = this.length * 2 + 1;
    this.table = Array.from({ length: this.length }, () => []);
    this.qtd = 0;
    for (const bucket of old) {
      for (const [k, v] of bucket) {
        this.set(k, v);
      }
    }
  }

  print() {
    this.table.forEach((bucket, i) => {
      const items = bucket.map(([k, v]) => `${k}: ${v}`).join(' -> ');
      console.log(`${i}: ${items || '(empty)'}`);
    });
    console.log(`Quantity: ${this.qtd} Length: ${this.length}`);
  }
}

const t = new HashTable();
const scene = (n, title) => console.log(`\n=== Scene ${n}: ${title}`);

scene(1, 'set("ana", 8) in an empty bucket');
t.set('ana', 8);
t.print();

scene(2, 'set("eva", 6) colides w/ ana');
t.set('eva', 6);
t.print();

scene(3, 'set("maria", 7) in other bucket');
t.set('maria', 7);
t.print();

scene(4, 'set("pedro", 4) colides w/ maria');
t.set('pedro', 4);
t.print();

scene(5, 'set("ana", 9) update ana');
t.set('ana', 9);
t.print();

scene(6, 'set("eva") 2nd on bucket');
console.log("eva's value ->", t.get('eva'));
t.print();


scene(7, 'set("zeca") empty bucket; get("mel") full bucket');
console.log("zeca's value ->", t.get('zeca'));
console.log("mel's value ->", t.get('mel'));
t.print();


scene(8, 'get("ana") lowercase');
console.log("ana's value ->", t.get('ana'));
t.print();


scene(9, 'delete("ana") 1st on 5th bucket');
console.log('ana deleted? ->', t.delete('ana'));
t.print();

scene(10, 'delete("zeca"); delete("mel"), no keys');
console.log('zeca deleted? ->', t.delete('zeca'));
console.log('mel deleted? ->', t.delete('mel'));
t.print();

scene(11, 'setting 0 and undefined values');
t.set('zeca', 0);
t.set('lia', undefined);
console.log('get zeca ->', t.get('zeca'));
console.log('get lia ->', t.get('lia'), 'undefined value');
console.log('get mel ->', t.get('mel'));
t.print();

scene(12, 'rehash: 8 keys and 0,73 perc,9 keys sooner');
t.set('bia', 7);
t.set('caio', 5);
t.set('davi', 9);
console.log('before: ', t.qtd, 'perc: ', (t.qtd / t.length).toFixed(2));
t.set('luca', 6);
t.print();

export default HashTable;
