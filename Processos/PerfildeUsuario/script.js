// Função para excluir o usuário
function excluirUsuario(event) {


  const botaoDeletar = event.target.closest('.delete-user'); // Botão de exclusão clicado
  if (!botaoDeletar) return; // Certifica que o clique foi no botão correto

  // Localiza o nome do usuário dentro do mesmo bloco
  const userCard = botaoDeletar.closest('.process-item'); // Container do usuário
  const username = userCard.querySelector('.name1').textContent.trim(); // Nome do usuário

  // Remover do DOM
  userCard.remove(); // Remove o bloco do usuário

  // Remover do localStorage
  if (localStorage.getItem(username)) {
    localStorage.removeItem(username);
    console.log(`Usuário ${username} removido do localStorage.`);
  }
}

// Carregar usuários salvos ao carregar a página
function carregarUsuariosSalvos() {
  const container = document.querySelector('.container');
  Object.keys(localStorage).forEach(username => {
    console.log(`Usuário ${username} encontrado no localStorage.`);
    // Aqui, recrie o HTML dos usuários salvos, se necessário
  });
}

// Adicionar evento ao botão de deletar
document.addEventListener('click', excluirUsuario);

// Carregar usuários salvos ao carregar a página
document.addEventListener('DOMContentLoaded', carregarUsuariosSalvos);


document.addEventListener("DOMContentLoaded", () => {
  const saveButton = document.querySelector(".add-button");
  const popup = document.getElementById("confirm-popup");
  const confirmYes = document.getElementById("confirm-yes");
  const confirmNo = document.getElementById("confirm-no");
  const userNames = Array.from(document.querySelectorAll(".name1"));

  // Função para mostrar o popup
  const showPopup = () => {
    popup.classList.remove("hidden");
  };

  // Função para esconder o popup
  const hidePopup = () => {
    popup.classList.add("hidden");
  };

  // Função para salvar os dados no LocalStorage
  const saveToLocalStorage = () => {
    const users = userNames.map(user => user.textContent);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Alterações salvas com sucesso!");
  };

  // Evento de clique no botão "Salvar"
  saveButton.addEventListener("click", showPopup);

  // Evento de clique no botão "Sim" do popup
  confirmYes.addEventListener("click", () => {
    saveToLocalStorage();
    hidePopup();
  });

  // Evento de clique no botão "Não" do popup
  confirmNo.addEventListener("click", hidePopup);

  // Recuperar dados do LocalStorage ao carregar a página
  const savedUsers = JSON.parse(localStorage.getItem("users"));
  if (savedUsers) {
    userNames.forEach((user, index) => {
      if (savedUsers[index]) {
        user.textContent = savedUsers[index];
      }
    });
  }
});
