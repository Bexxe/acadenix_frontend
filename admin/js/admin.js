document.querySelectorAll(".btn-image").forEach(button => {
    button.addEventListener("click", function() {
        // Eğer zaten seçili butona tıklanırsa tüm seçimleri kaldır
        if (this.style.border) {
            this.style.border = ""; // Seçiliyse kaldır
        } else {
            // Önce tüm butonlardan border'ı kaldır
            document.querySelectorAll(".btn-image").forEach(btn => {
                btn.style.border = "";
            });

            // Sadece tıklanan butona border ekle
            this.style.border = "2px solid black";
        }
    });
});
