// Transformar as seguintes funções em Arrow Functions

const array = [1, 2, 3, 4, 5];

array.map(item => item + 10);


const user = { nome: "Lucas", idade: 22 };

const idade = user => user.idade;

idade(user);



const nome = "José";
const idade = 33;

const user2 = (nome = "Pedro", idade = 34) => ({
  nome,
  idade
});

user2(nome, idade);
user2(nome);


const promise = () => new Promise((resolve, reject) => resolve());