var resimYukle = document.getElementById('resimYukle');
var gosterimAlani = document.getElementById('gosterimAlani');

resimYukle.addEventListener('change', function(event) {
  var dosya = event.target.files[0];
  
  if (dosya) {
    var resimOkuyucu = new FileReader();
    
    resimOkuyucu.onload = function(e) {
      gosterimAlani.setAttribute('src', e.target.result);
      document.getElementById("sec").style.display="none";
      document.getElementById("secildi").style.display="inline";
    };
    
    resimOkuyucu.readAsDataURL(dosya);
  }
});
