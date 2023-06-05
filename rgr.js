  const burger = document.querySelector('#burger');
  const menu = document.querySelector('#menu');

  burger.addEventListener('click',() => {
    menu.classList.toggle('disp');
  });

  
  const showFormButton = document.getElementById('showFormButton');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalContainer = document.querySelector('.modal-container');
    const form = document.getElementById('myForm');

    showFormButton.addEventListener('click', () => {
      modalOverlay.classList.add('show-modal');
      modalContainer.classList.add('show-modal');
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const surname = document.getElementById('surname').value;
      const phone = document.getElementById('phone').value;
      const question = document.getElementById('question').value;
      alert("Дякуємо!Ми вам зателефонуємо за 10 хвилин!");
      // Ваш код для надсилання даних на пошту тут
      // Цей код повинен викликати серверну сторону для обробки і надсилання пошти

      // Очищення полів форми після відправки
      form.reset();

      modalOverlay.classList.remove('show-modal');
      modalContainer.classList.remove('show-modal');
    });
