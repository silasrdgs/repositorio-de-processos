document.getElementById('salvar').addEventListener('click', () => {
  const funcionario = document.querySelector('.name').textContent.trim(); // Nome do funcionário
  const departamento = document.getElementById('departamento').value;
  const projeto = document.getElementById('projeto').value;
  const nivelAcesso = document.getElementById('nivel-acesso').value;
  const nomeInput = document.getElementById('Nome').innerText;
  const nomeApresentado = document.getElementById('nomeApresentado');

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
});

// Função para fechar o pop-up
function fecharPopup() {
  document.getElementById('popup').style.display = 'none';
}

// Função para carregar os dados salvos do funcionário
window.addEventListener('load', () => {
  const funcionario = document.querySelector('.name').textContent.trim(); // Nome do funcionário
  const dadosSalvos = localStorage.getItem(funcionario);

  if (dadosSalvos) {
    const dados = JSON.parse(dadosSalvos); // Converter os dados de volta para objeto
    document.getElementById('departamento').value = dados.departamento || '';
    document.getElementById('projeto').value = dados.projeto || '';
    document.getElementById('nivel-acesso').value = dados.nivelAcesso || '';
  }
});



