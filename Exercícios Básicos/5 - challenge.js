
const array = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr; // Y está recebendo toda o restante dos números

console.log(x); 
console.log(y);


function soma(...numbers) {
  return numbers.reduce((x, y) => x + y);
}

console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2));


const usuario = {
  nome: "Lucas",
  idade: 22,
  endereco: {
    cidade: "Porangatu",
    uf: "Go",
    pais: "Brasil"
  }
};

const usuario2 = { ...usuario, nome: "Lucas" };
const usuario3 = { ...usuario, endereco: { ...usuario.endereco, cidade: "Lucas" }
};