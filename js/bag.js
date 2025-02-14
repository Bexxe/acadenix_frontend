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



  document.addEventListener("DOMContentLoaded", function () {
    // Başlangıç değerleri (Varsayılan: Naturel & Large, ilk küçük resim seçili)
    let isNaturelSelected = true;
    let isBlackSelected = false;
    let largeselected = true;
    let smallselected = false;
    
    let resim1 = true;
    let resim2 = false;
    let resim3 = false;
    
    // Varsayılan border ayarları
    document.getElementById("naturel").style.border = "3px solid black";
    document.getElementById("black").style.border = "0px";
    document.getElementById("large").style.border = "3px solid black";
    document.getElementById("small").style.border = "0px";
    
    document.getElementById("resim1").style.border = "3px solid black";
    document.getElementById("resim2").style.border = "0px";
    document.getElementById("resim3").style.border = "0px";
    
    // Renk Butonları
    document.getElementById("naturel").addEventListener("click", function () {
      isNaturelSelected = true;
      isBlackSelected = false;
      document.getElementById("naturel").style.border = "3px solid black";
      document.getElementById("black").style.border = "0px";
      updateImages();
      updateCarousel();
    });
    
    document.getElementById("black").addEventListener("click", function () {
      isBlackSelected = true;
      isNaturelSelected = false;
      document.getElementById("black").style.border = "3px solid black";
      document.getElementById("naturel").style.border = "0px";
      updateImages();
      updateCarousel();
    });
    
    // Boyut Butonları
    document.getElementById("large").addEventListener("click", function () {
      largeselected = true;
      smallselected = false;
      document.getElementById("large").style.border = "3px solid black";
      document.getElementById("small").style.border = "0px";
      updateImages();
      updateCarousel();
    });
    
    document.getElementById("small").addEventListener("click", function () {
      smallselected = true;
      largeselected = false;
      document.getElementById("small").style.border = "3px solid black";
      document.getElementById("large").style.border = "0px";
      updateImages();
      updateCarousel();
    });
    
    // Küçük Resim (Thumbnail) Butonları
    document.getElementById("resim1").addEventListener("click", function () {
      resim1 = true;
      resim2 = false;
      resim3 = false;
      document.getElementById("resim1").style.border = "3px solid black";
      document.getElementById("resim2").style.border = "0px";
      document.getElementById("resim3").style.border = "0px";
      updateCarousel();
    });
    
    document.getElementById("resim2").addEventListener("click", function () {
      resim1 = false;
      resim2 = true;
      resim3 = false;
      document.getElementById("resim2").style.border = "3px solid black";
      document.getElementById("resim1").style.border = "0px";
      document.getElementById("resim3").style.border = "0px";
      updateCarousel();
    });
    
    document.getElementById("resim3").addEventListener("click", function () {
      resim1 = false;
      resim2 = false;
      resim3 = true;
      document.getElementById("resim3").style.border = "3px solid black";
      document.getElementById("resim1").style.border = "0px";
      document.getElementById("resim2").style.border = "0px";
      updateCarousel();
    });
    
    // Ürün Görsellerini (küçük resimler alanındaki) güncelleyen fonksiyon
    function updateImages() {
      if (isNaturelSelected && largeselected) {
        document.getElementById("resim1").src = "image/products/N-1.jpg";
        document.getElementById("resim2").src = "image/products/N2.jpg";
        document.getElementById("resim3").src = "image/products/N3.jpg";
        document.getElementById("price").innerText = "€15.50";
      } else if (isNaturelSelected && smallselected) {
        document.getElementById("resim1").src = "image/products/N1-S.jpg";
        document.getElementById("price").innerText = "€10";
      } else if (isBlackSelected && largeselected) {
        document.getElementById("resim1").src = "image/products/B1.jpg";
        document.getElementById("resim2").src = "image/products/B2.jpg";
        document.getElementById("resim3").src = "image/products/B3.jpg";
        document.getElementById("price").innerText = "€15.50";
      } else if (isBlackSelected && smallselected) {
        document.getElementById("resim1").src = "image/products/B1-S.jpg";
        document.getElementById("resim2").src = "image/products/B2-S.jpg";
        document.getElementById("resim3").src = "image/products/B3-S.jpg";
        document.getElementById("price").innerText = "€10";
      }
    }
    
    // Carousel'deki büyük resmi güncelleyen fonksiyon
    function updateCarousel() {
      if (isNaturelSelected && largeselected) {
        if (resim1) {
          document.getElementById("carousel").src = "image/products/N-1.jpg";
        } else if (resim2) {
          document.getElementById("carousel").src = "image/products/N2.jpg";
        } else if (resim3) {
          document.getElementById("carousel").src = "image/products/N3.jpg";
        }
      } else if (isNaturelSelected && smallselected) {
        if (resim1) {
          document.getElementById("carousel").src = "image/products/N1-S.jpg";
        }
        // Diğer küçük resim seçenekleri eklenebilir...
      } else if (isBlackSelected && largeselected) {
        if (resim1) {
          document.getElementById("carousel").src = "image/products/B1.jpg";
        } else if (resim2) {
          document.getElementById("carousel").src = "image/products/B2.jpg";
        } else if (resim3) {
          document.getElementById("carousel").src = "image/products/B3.jpg";
        }
      } else if (isBlackSelected && smallselected) {
        if (resim1) {
          document.getElementById("carousel").src = "image/products/B1-S.jpg";
        } else if (resim2) {
          document.getElementById("carousel").src = "image/products/B2-S.jpg";
        } else if (resim3) {
          document.getElementById("carousel").src = "image/products/B3-S.jpg";
        }
      }
    }
    
    // İlk yüklemede güncelleme yapalım
    updateImages();
    updateCarousel();
  });


// Butonu seçiyoruz
const button = document.getElementById("basketbtn");

// Hover olayları için dinleyiciler ekliyoruz
button.addEventListener("mouseenter", () => {
  document.getElementById("basket").style.animation="baskethover 2s alternate forwards";
  document.getElementById("basket").style.left="60%";
});

button.addEventListener("mouseleave", () => {
    document.getElementById("basket").style.animation="basketover 2s alternate forwards";
    document.getElementById("basket").style.left="-25%";
});
