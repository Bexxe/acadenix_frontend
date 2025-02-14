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

  let isScrolling = false; // Kaydırma işlemi devam edip etmediğini kontrol eden değişken

  // Scroll sınırlarını kontrol et
  function checkScrollLimits() {
    setTimeout(() => {
      scrollUpBtn.disabled = scrollBox.scrollTop === 0;
      scrollDownBtn.disabled = scrollBox.scrollTop + scrollBox.clientHeight >= scrollBox.scrollHeight;
    }, 300);
  }

  scrollBox.addEventListener("scroll", checkScrollLimits);

  // Yukarı kaydırma butonu
  scrollUpBtn.addEventListener("click", function () {
    if (!isScrolling) {
      isScrolling = true;
      scrollBox.scrollBy({ top: -scrollAmount, left: 0, behavior: "smooth" });

      // Kaydırma işlemini belirli bir süre sonra tekrar aktif et
      setTimeout(() => { isScrolling = false; checkScrollLimits(); }, 500);
    }
  });

  // Aşağı kaydırma butonu
  scrollDownBtn.addEventListener("click", function () {
    if (!isScrolling) {
      isScrolling = true;
      scrollBox.scrollBy({ top: scrollAmount, left: 0, behavior: "smooth" });

      // Kaydırma işlemini belirli bir süre sonra tekrar aktif et
      setTimeout(() => { isScrolling = false; checkScrollLimits(); }, 500);
    }
  });
});
