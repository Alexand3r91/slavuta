
  // Получаем ссылку на кнопку и контейнер
  const teamButton = document.querySelector('.buttomteam');
  const aboutUs = document.getElementById('aboutUs');
  // const teamSection = document.getElementById('teamSection')
  const aboutText = document.getElementById('aboutText');
  
  document.addEventListener('DOMContentLoaded', function () {
    const teamSection = Array.from(document.querySelectorAll('teamSection'));
    // Назначаем класс animate элементам при загрузке страницы
    teamSection.forEach(function (element) {
      element.classList.add('animate');
    });
  });
  
  
  // Получаем ссылки на блоки
  let blocksRight = document.getElementsByClassName('blockRight');
  let blocksLeft = document.getElementsByClassName('blockLeft');
  
  // Функция для проверки видимости блока
  function isBlockVisible(block) {
    let blockTop = block.getBoundingClientRect().top;
    let blockBottom = block.getBoundingClientRect().bottom;
    let windowHeight = window.innerHeight;
    
    return blockBottom > 0 && blockTop < windowHeight;
  }
  
  // Назначаем обработчик события скролла
  window.addEventListener('scroll', function() {
    // Проверяем видимость блоков с классом blockRight и добавляем/удаляем класс animate
    for (let i = 0; i < blocksRight.length; i++) {
      let block = blocksRight[i];
      if (isBlockVisible(block)) {
        block.classList.add('animate');
      } else {
        block.classList.remove('animate');
      };
    };
  
    
    // Проверяем видимость блоков с классом blockLeft и добавляем/удаляем класс animate
    for (let j = 0; j < blocksLeft.length; j++) {
      let block = blocksLeft[j];
      if (isBlockVisible(block)) {
        block.classList.add('animate');
      } else {
        block.classList.remove('animate');
      }
    }
  });