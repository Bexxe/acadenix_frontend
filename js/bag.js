var secim = "secildi";

document.getElementById("white").addEventListener("click", function () {
    secim = "secildi";
    document.getElementById("slider1").src = "image/slider/bags/3804c36a-8f87-4c99-bd1e-0ea54cafe173.jpg";
    document.getElementById("slider2").src = "image/slider/bags/3804c36a-8f87-4c99-bd1e-0ea54cafe173.jpg";
    document.getElementById("slider3").src = "image/slider/bags/3804c36a-8f87-4c99-bd1e-0ea54cafe173.jpg";
    document.getElementById("white").style.border = "1px solid black";
    document.getElementById("black").style.border = "none";
    document.getElementById("large").src = "image/bags/Kopie van IG Post 1  producten.png";
    document.getElementById("small").src = "image/bags/Kopie van IG Post 1  producten (1).png";
});

document.getElementById("black").addEventListener("click", function () {
    secim = "secilmedi";
    document.getElementById("slider1").src = "image/slider/bags/b886aae5-68dc-4a9c-8c05-84423d5f6209.jpg";
    document.getElementById("slider2").src = "image/slider/bags/b886aae5-68dc-4a9c-8c05-84423d5f6209.jpg";
    document.getElementById("slider3").src = "image/slider/bags/b886aae5-68dc-4a9c-8c05-84423d5f6209.jpg";
    document.getElementById("large").src = "image/bags/Kopie van IG Post 1  producten (2).png";
    document.getElementById("small").src = "image/bags/Kopie van IG Post 1  producten (3).png";
    document.getElementById("white").style.border = "none";
    document.getElementById("black").style.border = "1px solid black";
});

// Large button click
document.getElementById("large").addEventListener("click", function () {
    document.getElementById("large").style.border = "1px solid black";
    document.getElementById("small").style.border = "none";

    if (secim === "secildi") {
        document.getElementById("slider1").src = "image/bags/Kopie van IG Post 1  producten.png";
        document.getElementById("slider2").src = "image/bags/Kopie van IG Post 1  producten.png";
        document.getElementById("slider3").src = "image/bags/Kopie van IG Post 1  producten.png";
    } else if (secim === "secilmedi") {
        document.getElementById("slider1").src = "image/bags/Kopie van IG Post 1  producten (2).png";
        document.getElementById("slider2").src = "image/bags/Kopie van IG Post 1  producten (2).png";
        document.getElementById("slider3").src = "image/bags/Kopie van IG Post 1  producten (2).png";
    }
});

// Small button click
document.getElementById("small").addEventListener("click", function () {
    document.getElementById("small").style.border = "1px solid black";
    document.getElementById("large").style.border = "none";

    if (secim === "secildi") {
        document.getElementById("slider1").src = "image/bags/Kopie van IG Post 1  producten (1).png";
        document.getElementById("slider2").src = "image/bags/Kopie van IG Post 1  producten (1).png";
        document.getElementById("slider3").src = "image/bags/Kopie van IG Post 1  producten (1).png";
    } else if (secim === "secilmedi") {
        document.getElementById("slider1").src = "image/bags/Kopie van IG Post 1  producten (3).png";
        document.getElementById("slider2").src = "image/bags/Kopie van IG Post 1  producten (3).png";
        document.getElementById("slider3").src = "image/bags/Kopie van IG Post 1  producten (3).png";
    }
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
