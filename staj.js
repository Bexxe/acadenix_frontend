const giris = document.getElementById('giris');
const up =document.getElementById('up');
const down =document.getElementById('down');
const x = document.querySelectorAll("a.aday-g");

giris.addEventListener('mouseover', function handleMouseOver() {
 document.querySelector('#giris-sec').classList.add('giris-sec');
 up.style.opacity="0";
 down.style.opacity="1";
 document.getElementById("giris-sec").style.display="inline";
 document.getElementById("a").style.display="inline";
 document.getElementById("b").style.display="inline";
 document.getElementById("c").style.display="inline";
 document.getElementById("d").style.display="inline";
});

giris.addEventListener('mouseout', function handleMouseOut() {
        document.querySelector('#giris-sec').classList.remove('giris-sec');
        up.style.opacity="1";
        down.style.opacity="0";
        document.getElementById("giris-sec").style.display="none";
        document.getElementById("a").style.display="none";
        document.getElementById("b").style.display="none";
        document.getElementById("c").style.display="none";
        document.getElementById("d").style.display="none";
        
});
const girisec = document.getElementById('giris-sec');
girisec.addEventListener('mouseover', function handleMouseOver() {
    document.querySelector('#giris-sec').classList.add('giris-sec');
    up.style.opacity="0";
    down.style.opacity="1";
    document.getElementById("giris-sec").style.display="inline";
    document.getElementById("a").style.display="inline";
    document.getElementById("b").style.display="inline";
    document.getElementById("c").style.display="inline";
    document.getElementById("d").style.display="inline";
    
   });
   
   girisec.addEventListener('mouseout', function handleMouseOut() {
           document.querySelector('#giris-sec').classList.remove('giris-sec');
           up.style.opacity="1";
           down.style.opacity="0";
        document.getElementById("giris-sec").style.display="none";
        document.getElementById("a").style.display="none";
        document.getElementById("b").style.display="none";
        document.getElementById("c").style.display="none";
        document.getElementById("d").style.display="none";
   });

   var container = document.getElementById('container')
   var slider = document.getElementById('slider');
   var slides = document.getElementsByClassName('slide').length;
   var buttons = document.getElementsByClassName('btn');
   
   
   var currentPosition = 0;
   var currentMargin = 0;
   var slidesPerPage = 0;
   var slidesCount = slides - slidesPerPage;
   var containerWidth = container.offsetWidth;
   var prevKeyActive = false;
   var nextKeyActive = true;
   
   window.addEventListener("resize", checkWidth);
   
   function checkWidth() {
       containerWidth = container.offsetWidth;
       setParams(containerWidth);
   }
   
   function setParams(w) {
       if (w < 551) {
           slidesPerPage = 1;
       } else {
           if (w < 901) {
               slidesPerPage = 2;
           } else {
               if (w < 1101) {
                   slidesPerPage = 5;
               } else {
                   slidesPerPage = 4;
               }
           }
       }
       slidesCount = slides - slidesPerPage;
       if (currentPosition > slidesCount) {
           currentPosition -= slidesPerPage;
       };
       currentMargin = - currentPosition * (90 / slidesPerPage);
       slider.style.marginLeft = currentMargin + '%';
       if (currentPosition > 0) {
           buttons[0].classList.remove('inactive');
       }
       if (currentPosition < slidesCount) {
           buttons[1].classList.remove('inactive');
       }
       if (currentPosition >= slidesCount) {
           buttons[1].classList.add('inactive');
       }
   }
   setParams();
     var sayac = 1;
     while (sayac <= 1){
     const myTimeout = setTimeout(myGreeting, 2500);
     function myGreeting() {
     left.onclick()
  }
  sayac++;
 } 

 setInterval(function(){
    left.onclick()
  },2500);

  var sayac = 1;
  while (sayac <= 5){
  const myTimeout = setTimeout(myGreeting, 20000);
  function myGreeting() {
   right.onclick()
}
sayac++;
};






















let options = document.getElementById("options");
   let optionList = [

   "DÜZCE",
   "OSMANİYE",
   "KİLİS",
   "KARABÜK",
   "YALOVA",
   "IĞDIR",
   "ARDAHAN",
   "BARTIN",
   "ŞIRNAK",	
   "BATMAN",
   "KIRIKKALE",	
   "KARAMAN",
   "BAYBURT",
   "AKSARAY",
   "ZONGULDAK",
   "YOZGAT",
   "VAN",
   "UŞAK",
   "ŞANLIURFA",
   "TUNCELİ",	
   "TRABZON",
   "TOKAT",
   "TEKİRDAĞ",
   "SİVAS",
   "SİNOP",
   "SİİRT",	
   "SAMSUN",
   "SAKARYA",
   "RİZE",
   "ORDU",
   "NİĞDE",
   "NEVŞEHİR",
   "MUŞ",
   "MUĞLA",
   "MARDİN",
   "KAHRAMANMARAŞ",
   "MANİSA",
   "MALATYA",
   "KÜTAHYA",
   "KONYA",
   "KOCAELİ",
   "KIRŞEHİR",	
   "KIRKLARELİ",
   "KAYSERİ",
   "KASTAMONU",
   "KARS",
   "İZMİR",
   "İSTANBUL",
   "MERSİN",
   "ISPARTA",	
   "HATAY",	
   "HAKKARİ",
   "GÜMÜŞHANE",
   "GİRESUN",
   "GAZİANTEP",
   "ESKİŞEHİR",
   "ERZURUM",
   "ERZİNCAN",
   "ELAZIĞ",	
   "EDİRNE",	
   "DİYARBAKIR",
   "DENİZLİ",
   "ÇORUM",
   "ÇANKIRI",
   "ÇANAKKALE",
   "BURSA",
   "BURDUR",
   "BOLU",
   "BİTLİS",
   "BİNGÖL",
   "BİLECİK",
   "BALIKESİR",
   "AYDIN",
   "ARTVİN",
   "ANTALYA",
   "ANKARA",
   "AMASYA",
   "AĞRI",
   "AFYONKARAHİSAR",
   "ADIYAMAN",
   "ADANA",
   ];
   
   let button = document.getElementById("button");
   
   let isOpen = false;
   
   button.addEventListener("click", getMessage);
   options.addEventListener("click", addToUIOptions);
   
   function getMessage() {
       let message = document.createElement("div");
       message.className = "message";
   
       if (options.firstElementChild.classList.contains("hide-option")) {
           message.classList.add("danger");
           message.textContent = "Oh no! It is cannot be blank";
   
           document.body.appendChild(message);
   
           deleteMessage(message);
       }
       else {
           message.classList.add("success");
           message.textContent = "Thanks for completing :)";
   
           document.body.appendChild(message);
   
           deleteMessage(message);
       }
   
   }
   
   function deleteMessage(el) {
       setTimeout(() => {
           document.body.removeChild(el);
       }, 6000);
   }
   
   function addToUIOptions(e) {
       if (e.target.classList.contains("hide-option")) {
           controlOptions(e);
       }
       else {
           const pickedOption = e.target;
   
           if (options.firstElementChild.classList.contains("hide-option")) {
               options.removeChild(options.firstElementChild);
           }
           options.insertAdjacentElement("afterbegin", pickedOption);
   
           deleteOptions();
           controlOptions(e);
       }
   }
   
   function controlOptions(e) {
       if (isOpen === false) {
           createOptions();
           options.classList.add("opened");
           isOpen = true;
       }
       else {
           deleteOptions();
           options.classList.remove("opened");
           isOpen = false;
       }
   }
   
   function deleteOptions() {
       while (options.childElementCount > 1) {
           options.removeChild(options.lastElementChild);
       }
   }
   
   function createOptions() {
       optionList.forEach(element => {
           if (options.firstElementChild.textContent !== element) {
               let option = document.createElement("div");
               option.className = "option";
               option.textContent = element;
   
               options.firstElementChild.insertAdjacentElement("afterend", option);
           }
       });
   };
