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

// scroll-box adlı elementi seçiyoruz
const scrollBox = document.querySelector('.scroll-box');
const scrollUpBtn = document.getElementById("top");
const scrollDownBtn = document.getElementById("bottom");

// Scroll sınırlarını kontrol eden fonksiyon
function checkScrollLimits() {
  // Scroll'un en üstte olup olmadığını kontrol eder
  if (scrollBox.scrollTop === 0) {
    scrollUpBtn.disabled = true; // Yukarı butonunu devre dışı bırak
  } else {
    scrollUpBtn.disabled = false; // Yukarı butonunu aktif et
  }

  // Scroll'un en aşağıda olup olmadığını kontrol eder
  if (scrollBox.scrollTop + scrollBox.clientHeight >= scrollBox.scrollHeight) {
    scrollDownBtn.disabled = true; // Aşağı butonunu devre dışı bırak
  } else {
    scrollDownBtn.disabled = false; // Aşağı butonunu aktif et
  }
}

// Sayfa yüklendiğinde ve kaydırma olduğunda kontrol et
scrollBox.addEventListener("scroll", checkScrollLimits);

// Yukarı butonuna tıklayınca scroll-box içerisindeki içerik yukarı kayar
scrollUpBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (scrollBox.scrollTop > 0) {
    scrollBox.scrollBy({
      top: -scrollAmount,
      left: 0,
      behavior: "smooth"
    });
  }
});

// Aşağı butonuna tıklayınca scroll-box içerisindeki içerik aşağı kayar
scrollDownBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (scrollBox.scrollTop + scrollBox.clientHeight < scrollBox.scrollHeight) {
    scrollBox.scrollBy({
      top: scrollAmount,
      left: 0,
      behavior: "smooth"
    });
  }
});


