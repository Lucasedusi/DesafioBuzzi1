// Exercício de desestruturação

const empresa = {
    nome: "Prte",
    endereco: { cidade: "Porangatu", stado: "Go" }
  };
  
  const {
    nome, endereco: { cidade, estado }} = empresa;
  
  console.log(nome);
  console.log(cidade);
  console.log(estado);
  
  
  function mostraInfo({ nome, idade }) {
    return `${nome} tem ${idade} anos.`;
  }
  mostraInfo({ nome: "LUCAS", idade: 22 });