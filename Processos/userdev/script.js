// document.getElementById('salvar').addEventListener('click', () => {
//   const funcionario = document.querySelector('.name').textContent.trim(); // Nome do funcionário
//   const departamento = document.getElementById('departamento').value;
//   const projeto = document.getElementById('projeto').value;
//   const nivelAcesso = document.getElementById('nivel-acesso').value;
//   const nomeInput = document.getElementById('Nome').innerText;
//   const nomeApresentado = document.getElementById('nomeApresentado');

//   // Objeto para armazenar as informações do funcionário
//   const dadosFuncionario = {
//     departamento: departamento,
//     projeto: projeto,
//     nivelAcesso: nivelAcesso,
//   };

//   // Salvar no localStorage com a chave baseada no nome do funcionário
//   localStorage.setItem(funcionario, JSON.stringify(dadosFuncionario));

//   // Mostrar pop-up de sucesso
//   document.getElementById('popup').style.display = 'flex';
//   nomeApresentado.textContent = nomeInput;
// });

// // Função para fechar o pop-up
// function fecharPopup() {
//   document.getElementById('popup').style.display = 'none';
// }

// // Função para carregar os dados salvos do funcionário
// window.addEventListener('load', () => {
//   const funcionario = document.querySelector('.name').textContent.trim(); // Nome do funcionário
//   const dadosSalvos = localStorage.getItem(funcionario);

//   if (dadosSalvos) {
//     const dados = JSON.parse(dadosSalvos); // Converter os dados de volta para objeto
//     document.getElementById('departamento').value = dados.departamento || '';
//     document.getElementById('projeto').value = dados.projeto || '';
//     document.getElementById('nivel-acesso').value = dados.nivelAcesso || '';
//   }
// });


document.getElementById('salvar').addEventListener('click', () => {
  const funcionario = document.querySelector('.name').textContent.trim(); // Nome do funcionário
  const departamento = document.getElementById('departamento').value;
  const projeto = document.getElementById('projeto').value;
  const nivelAcesso = document.getElementById('nivel-acesso').value;
  const senha = document.getElementById('senha').value;
  const nomeInput = document.getElementById('Nome').innerText;
  const nomeApresentado = document.getElementById('nomeApresentado');
  const mensagemErro = document.getElementById('error-message');
  
  // Verifica se a senha está correta
  if (senha === 'Felipe123') {
    // Objeto para armazenar as informações do funcionário
    const dadosFuncionario = {
      departamento: departamento,
      projeto: projeto,
      nivelAcesso: nivelAcesso,
    };

    // Salvar no localStorage com a chave baseada no nome do funcionário
    localStorage.setItem(funcionario, JSON.stringify(dadosFuncionario));

    // Mostrar pop-up de sucesso
    document.getElementById('popup').style.display = 'flex';
    nomeApresentado.textContent = nomeInput;

    // Ocultar mensagem de erro, caso esteja visível
    mensagemErro.style.opacity = 0;
  } else {
    // Mostrar mensagem de erro se a senha estiver incorreta
    mensagemErro.textContent = 'Senha incorreta! Por favor, tente novamente.';
    mensagemErro.style.opacity = 1;
  }
});

// Função para fechar o pop-up
function fecharPopup() {
  document.getElementById('popup').style.display = 'none';
}

// Função para carregar os dados salvos do funcionário
window.addEventListener('load', () => {
  const funcionario = document.querySelector('.name').textContent.trim();
  const dadosSalvos = localStorage.getItem(funcionario);

  if (dadosSalvos) {
    const { departamento, projeto, nivelAcesso } = JSON.parse(dadosSalvos);
    document.getElementById('departamento').value = departamento;
    document.getElementById('projeto').value = projeto;
    document.getElementById('nivel-acesso').value = nivelAcesso;
  }
});



