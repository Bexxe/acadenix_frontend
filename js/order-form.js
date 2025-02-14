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





// Her tıklamada kaydırılacak miktar (piksel cinsinden)
const scrollAmount = 300;

// scroll-box adlı elementi seç
const scrollBox = document.querySelector('.scroll-box');

// Yukarı butonuna tıklanınca, scroll-box içerisindeki içerik yukarı kaysın
document.getElementById("top").addEventListener("click", function () {
  scrollBox.scrollBy({
    top: -scrollAmount,
    left: 0,
    behavior: "smooth"
  });
});

// Aşağı butonuna tıklanınca, scroll-box içerisindeki içerik aşağı kaysın
document.getElementById("bottom").addEventListener("click", function () {
  scrollBox.scrollBy({
    top: scrollAmount,
    left: 0,
    behavior: "smooth"
  });
});

