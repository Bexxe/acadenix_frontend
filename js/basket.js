// script.js
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 2000);
});


setTimeout(() => {
  document.getElementById("ruj").style.animation = "2s anim infinite";
}, 100);

setTimeout(() => {
  document.getElementById("book").style.animation = "2s anim infinite";
}, 500);

setTimeout(() => {
  document.getElementById("baget").style.animation = "2s anim infinite";
}, 1000);

setTimeout(() => {
  document.getElementById("pencil").style.animation = "2s anim infinite";
}, 1500);



const buttons = document.querySelectorAll(".select-btn");

buttons.forEach((button) => {
  let select = "checked"; // Her buton için ayrı bir select durumu

  // Tıklama olayını dinliyoruz
  button.addEventListener("click", () => {
    const checkIcon = button.querySelector(".check");

    if (select === "checked") {
      button.style.backgroundColor = "white";
      checkIcon.style.display = "inline";
      select = "check"; // Değeri değiştiriyoruz
    } else {
      button.style.backgroundColor = "transparent";
      checkIcon.style.display = "none";
      select = "checked"; // Değeri tekrar değiştiriyoruz
    }
  });
});
