// Referências dos elementos
const editButton = document.getElementById("editButton");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

// Exibir o popup ao clicar em "Editar"
editButton.addEventListener("click", () => {
  popup.classList.remove("hidden");
});

// Fechar o popup ao clicar em "Sair"
closePopup.addEventListener("click", () => {
  popup.classList.add("hidden");
});


// Referências dos elementos
const downloadButton = document.getElementById("downloadButton");
const downloadPopup = document.getElementById("downloadPopup");
const closeDownloadPopup = document.getElementById("closeDownloadPopup");

// Exibir o popup ao clicar em "Baixar PDF"
downloadButton.addEventListener("click", () => {
  downloadPopup.classList.remove("hidden");
});

// Fechar o popup ao clicar em "Sair"
closeDownloadPopup.addEventListener("click", () => {
  downloadPopup.classList.add("hidden");
});