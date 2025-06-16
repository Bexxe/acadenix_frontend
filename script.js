 const button = document.getElementById('seviyom');

    button.addEventListener('click', () => {
      document.getElementById("azseviyo").innerText="Nedemek Az Seviyom Aşkım Şaka Dimi🥺";
      const maxX = window.innerWidth - button.offsetWidth;
      const maxY = window.innerHeight - button.offsetHeight;

      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);

      button.style.left = `${randomX}px`;
      button.style.top = `${randomY}px`;
    }); 