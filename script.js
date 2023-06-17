const button = document.getElementById("toastButton");

button.addEventListener("click", showToast);

function showToast() {
  const toast = document.createElement("div");
  toast.classList.add("toast");

  const text = document.createElement("div");
  text.classList.add("toast-text");
  text.innerText = "MEMORABLE MEME OF WEEK 1 AT REVOU 😂 :";
  toast.appendChild(text);

  const gif = document.createElement("img");
  gif.src = "./img/secret.gif";
  gif.alt = "secret GIF";
  toast.appendChild(gif);

  const sound = document.getElementById("sound");
  sound.play();

  document.body.appendChild(toast);

  setTimeout(function () {
    toast.remove();
    sound.pause();
    sound.currentTime = 0;
  }, 12000);
}


