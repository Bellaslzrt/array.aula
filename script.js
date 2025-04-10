const alunos = [
    {
      nome: "Lucas Silva",
      idade: 16,
      altura: 1.75,
      foto: "./fotos/lucas.jpg",
      observacao: "Aluno participativo e pontual"
    },
     {
      nome: "Mariana Costa",
      idade: 17,
      altura: 1.68,
      foto: "./fotos/mariana.jpg",
      observacao: "Dificuldades em matemática, mas muito dedicada"
    },
    {
      nome: "João Pedro",
      idade: 16,
      altura: 1.80,
      foto: "./fotos/joao.jpg",
      observacao: "Boa desenvoltura em apresentações"
    },
     {
      nome: "Ana Beatriz",
      idade: 15,
      altura: 1.60,
      foto: "./fotos/ana.jpg",
      observacao: "Precisa melhorar a frequência"
    },
     {
      nome: "Carlos Henrique",
      idade: 17,
      altura: 1.78,
      foto: "./fotos/carlos.jpg",
      observacao: "Muito bom em trabalhos em grupo"
    }
]

console.log(alunos.length); 
console.log (alunos[1].nome);
console.log (alunos[1].idade);
console.log (alunos[4].nome);

//  ESTRUTURA DE REPETICAO
  for (let chave in alunos) {
    const aluno = alunos[chave];
    console.log("Usando FOR");
    console.log(`Nome: ${aluno.nome}`);
    console.log(`Idade: ${aluno.idade}`);
    console.log(`Altura: ${aluno.altura} m`);
    console.log('-----------------------------');
  }



let i = 0;
while (i < alunos.length) {
    console.log("Usando WHILE");
    console.log("Nome: " + alunos[i].nome);
    console.log("Idade: " + alunos[i].idade);
    console.log("Altura: " + alunos[i].altura);
    console.log("------------------------");
    i++;
}
  
