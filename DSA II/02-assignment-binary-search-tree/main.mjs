import { AlunosABB } from './AlunosABB.mjs';

const tree = new AlunosABB();

const studentData = [
  { ra: 2026050, nome: 'Ana Beatriz Souza', media: 8.5 },
  { ra: 2026020, nome: 'João Silva', media: 7.0 },
  { ra: 2026080, nome: 'Mariana Lopes', media: 9.0 },
  { ra: 2026010, nome: 'Pedro Henrique Alves', media: 6.5 },
  { ra: 2026030, nome: 'João Silva', media: 8.0 },
  { ra: 2026070, nome: 'Camila Ferreira', media: 7.5 },
  { ra: 2026090, nome: 'Rafael Costa', media: 5.5 },
  { ra: 2026025, nome: 'Luiza Martins', media: 9.5 },
  { ra: 2026075, nome: 'Bruno Carvalho', media: 6.0 },
  { ra: 2026095, nome: 'Fernanda Ribeiro', media: 8.0 },
];

console.log('\n==================================================');
console.log(' 1. STUDENT REGISTRATION AND INSERTION ');
console.log('\n\n');

studentData.forEach((student) => {
  let success = tree.insert(student);
  if (success) {
    console.log(`Inserted: ${student.ra} - ${student.nome}`);
  }
});

console.log(
  '\nAttempting to register duplicate RA (2026030 - Carlos Mendes)...'
);
const duplicateStudent = { ra: 2026030, nome: 'Carlos Mendes', media: 4.0 };
let insertedDuplicate = tree.insert(duplicateStudent);
if (!insertedDuplicate) {
  console.log('RA already exists');
}

console.log('\n==================================================');
console.log(' 2. IN-ORDER LISTING AND TREE METRICS ');
console.log('\n\n');

console.log('Registered students (Ascending order of RA):');
let inOrderRAs = [];
tree.inOrder((student) => {
  inOrderRAs.push(student.ra);
  console.log(
    `  RA: ${student.ra} | Name: ${student.nome.padEnd(23)} | Average: ${student.media.toFixed(1)}`
  );
});

console.log('\nSimplified list for validation:');
console.log(inOrderRAs.join(', '));

console.log(`\nCalculated Metrics:`);
console.log(`  count = ${tree.count()}`);
console.log(`  height = ${tree.height()}`);
console.log(`  folhas = ${tree.countLeaves()}`);
console.log(`  média = ${tree.averageGrade().toFixed(2)}`);

console.log('\n==================================================');
console.log(' 3. SEARCH TESTS ');
console.log('\n\n');

function runSearchTest(ra) {
  console.log(`Searching for RA ${ra}...`);
  let result = tree.searchStudent(ra);
  if (result) {
    console.log(`  Found -> Name: ${result.nome}, Average: ${result.media}`);
  } else {
    console.log('RA not found');
  }
}

runSearchTest(2026075);
runSearchTest(2026099);

console.log('\n==================================================');
console.log(' 4. REMOVAL FLOW AND CASE TESTS ');
console.log('\n\n');

function printListAfterRemoval(removedRA) {
  let currentList = [];
  tree.inOrder((s) => currentList.push(s.ra));
  console.log(`In-order after insertions:`);
  console.log(`  ${currentList.join(', ')}\n`);
}

console.log('Removing RA 2026025 (Leaf Node)...');
tree.remove(2026025);
printListAfterRemoval(2026025);

console.log('Removing RA 2026090 (Degree 1 Node)...');
tree.remove(2026090);
printListAfterRemoval(2026090);

console.log('Removing RA 2026050 (Degree 2 Node / Root)...');
tree.remove(2026050);
printListAfterRemoval(2026050);

console.log('==================================================');
console.log(' 5. FINAL TREE STRUCTURE ');
console.log('\n\n');

let preOrderRAs = [];
tree.preOrder((s) => preOrderRAs.push(s.ra));
console.log('Final tree pre-order:');
console.log(`  ${preOrderRAs.join(', ')}`);

console.log(`\nFinal Metrics:`);
console.log(`  count = ${tree.count()}`);
console.log(`  height = ${tree.height()}`);

console.log('\n==================================================');
console.log('SIDEWAYS TREE PRINT ');
console.log('\n\n');
tree.printTree();
