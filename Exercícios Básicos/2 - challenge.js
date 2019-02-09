const users = [
    { nome: "Lucas", idade: 23, empresa: "prte" },
    { nome: "Thiago", idade: 20, empresa: "prte" },
    { nome: "André", idade: 20, empresa: "prte" }
  ];
  
  //Fazer map dos usuários
  
  const idades = users.map( users => users.idade );
  console.log(idades);
  
  // Fazer um filtro dos usuários de uma empresa X
  
  const PrteWork = usuarios.filter( users => users.empresa === "prte" && users.idade >= 18 );
  console.log(PrteWork);
  
  // Fazer uma busca
  
  const googleWork = users.find(users => users.empresa === "Google");
  console.log(googleWork);
  
  // Fazer uma map, multiplicando as idade por 2 e um filtro, do usuário menor que 50.
  
  const calculo = userss.map(users => ({ ...users, idade: users.idade * 2 })).filter(users => users.idade <= 50);
  console.log(calculo);