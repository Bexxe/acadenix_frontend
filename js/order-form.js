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
const scrollAmount = 100;

// scroll-box ve butonları seç
document.addEventListener("DOMContentLoaded", function () {
  const scrollBox = document.querySelector('.scroll-box');
  const scrollUpBtn = document.getElementById("top");
  const scrollDownBtn = document.getElementById("bottom");

  // Scroll sınırlarını kontrol et
  function checkScrollLimits() {
    setTimeout(() => {
      // Eğer en üstteyse yukarı butonunu devre dışı bırak
      scrollUpBtn.disabled = scrollBox.scrollTop === 0;

      // Eğer en alttaysa aşağı butonunu devre dışı bırak
      scrollDownBtn.disabled = scrollBox.scrollTop + scrollBox.clientHeight >= scrollBox.scrollHeight;
    }, 300); // 300ms gecikme ekledim
  }

  // Sayfa yüklendiğinde sınırları kontrol et
  checkScrollLimits();

  scrollBox.addEventListener("scroll", checkScrollLimits);

  // Yukarı butonuna tıklama
  scrollUpBtn.addEventListener("click", function () {
    scrollBox.scrollBy({ top: -scrollAmount, left: 0, behavior: "smooth" });
    setTimeout(checkScrollLimits, 500); // 500ms gecikme
  });

  // Aşağı butonuna tıklama
  scrollDownBtn.addEventListener("click", function () {
    scrollBox.scrollBy({ top: scrollAmount, left: 0, behavior: "smooth" });
    setTimeout(checkScrollLimits, 500); // 500ms gecikme
  });
});


