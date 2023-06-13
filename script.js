const button = document.getElementById("toastButton");

button.addEventListener("click", showToast);

function showToast() {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerText = "You Bakaaaaa !";

  document.body.appendChild(toast);

  setTimeout(function () {
    toast.remove();
  }, 3000);
}
