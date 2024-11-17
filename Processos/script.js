// document.addEventListener('DOMContentLoaded', () => {
//   const popup = document.getElementById('popup');
//   const novoProcessoButton = document.querySelector('.add-button');
//   const cancelarButton = document.getElementById('cancelar');
//   const diretorSelect = document.getElementById('diretor');

//   // Lista de usuários (diretores) - Simulação
//   const usuarios = [
//     'Felipe Alves',
//     'Marcela Silva',
//     'Jorge Cruz',
//     'Silas Rodrigues',
//     'Eliel Lino',
//     'Mauricio de Souza'
//   ];

//   // Preenche os diretores no select
//   usuarios.forEach((usuario) => {
//     const option = document.createElement('option');
//     option.value = usuario;
//     option.textContent = usuario;
//     diretorSelect.appendChild(option);
//   });

//   // Mostrar o popup ao clicar em "Novo Processo"
//   novoProcessoButton.addEventListener('click', () => {
//     popup.classList.remove('hidden');
//   });

//   // Fechar o popup ao clicar em "Cancelar"
//   cancelarButton.addEventListener('click', () => {
//     popup.classList.add('hidden');
//   });
// });



// Elementos do DOM
const addButton = document.querySelector('.add-button');
const popup = document.getElementById('popup');
const addProcessButton = document.getElementById('add-processo');
const cancelButton = document.getElementById('cancelar');
const form = document.querySelector('form'); // Formulário que contém os campos
const errorMessage = document.getElementById('error-message');

// Popup de auditoria
const auditoriaPopup = document.createElement('div');
auditoriaPopup.classList.add('popup');
auditoriaPopup.innerHTML = `
  <div class="popup-content aligntext">
    <h2>Processo Enviado para Aprovação</h2>
    <p>Seu pedido de criação de processo foi encaminhado para aprovação pelo time de <b>auditoria</b>.</p>
    <button id="fechar-auditoria" class="btn1">Fechar</button>
  </div>
`;

const cancelarAuditoriaButton = auditoriaPopup.querySelector('#fechar-auditoria');

// Função para mostrar o popup de auditoria
function showAuditoriaPopup(message) {
  auditoriaPopup.querySelector('h2').textContent = message.title;
  auditoriaPopup.querySelector('p').textContent = message.body;
  document.body.appendChild(auditoriaPopup);
  cancelarAuditoriaButton.addEventListener('click', closeAuditoriaPopup);
}

// Função para fechar o popup de auditoria
function closeAuditoriaPopup() {
  auditoriaPopup.remove();
}

// Evento para abrir o popup de criação de processo
addButton.addEventListener('click', function () {
  popup.classList.remove('hidden');
});

// Evento para adicionar o processo e mostrar o popup de auditoria
addProcessButton.addEventListener('click', function (event) {
  // Previne o comportamento padrão de envio do formulário
  event.preventDefault();

  // Verifica se o formulário é válido
  if (form.checkValidity()) {
    // Fechar o popup de criação de processo
    popup.classList.add('hidden');

    // Exibir o popup de auditoria com a mensagem de sucesso
    showAuditoriaPopup({
      title: 'Aguardando Aprovação',
      body: 'Seu pedido de criação de processo foi encaminhado para aprovação pelo time de auditoria.',
    });
  } else {
    // Se o formulário não for válido, exibe uma mensagem de erro no console (pode ser adaptado conforme necessário)
    errorMessage.style.color = 'red';
    console.log("Preencha todos os campos obrigatórios.");
  }
});

// Evento para cancelar a criação de processo
cancelButton.addEventListener('click', function () {
  // Fechar o popup de criação de processo
  popup.classList.add('hidden');

  // Exibir o popup de auditoria com a mensagem de cancelamento
  showAuditoriaPopup({
    title: 'Processo Não Criado',
    body: 'O processo não foi criado. Você pode tentar novamente se desejar.',
  });
});







