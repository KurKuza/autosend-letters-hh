// Импортируем константы
import { CONSTANTS } from '../../config/constants.js';

// Импортируем селекторы
import { SELECTORS } from '../../config/selectors.js';

// Импортируем функцию задержки выполнения кода
import { delay } from '../../utils/delay.js';

// Импортируем функцию для переключения состояния кнопки
import { toggleResponseBtn } from './toggleResponseBtn.js';

// Импортируем функцию для поиска элемента с указанным текстом
import { findElementByText } from './findElementByText.js';

// Функция добавляет новую кнопку в навигации "Отправить отклики"
export async function addResponseBtn() {
  // Ждём заданное время перед продолжением
  await delay(CONSTANTS.delayMs);

  // Создаем контейнер с фиксированной позицией
  const stickyContainer = document.createElement('div');
  stickyContainer.style.position = 'sticky';
  stickyContainer.style.top = '90px';
  stickyContainer.style.left = '20px';
  stickyContainer.style.zIndex = '10000';
  stickyContainer.style.background = '#fff';
  stickyContainer.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
  stickyContainer.style.width = '130px';
  stickyContainer.style.height = '0px';
  stickyContainer.style.borderRadius = '10px';

  // Кнопка запуска
  const button = document.createElement('button');
  button.setAttribute('data-action', 'submit-responses');
  button.textContent = 'Отправить отклики';
  button.style.padding = '10px 20px';
  button.style.fontSize = '14px';
  button.style.cursor = 'pointer';
  button.style.border = 'none';
  button.style.borderRadius = '8px';
  button.style.backgroundColor = '#000';
  button.style.color = '#fff';
  button.style.fontWeight = 'bold';
  button.style.width = '100%';
  button.style.marginBottom = '8px';
  stickyContainer.appendChild(button);

  // // Чекбокс блокировки
  // const label = document.createElement('label');
  // label.style.display = 'flex';
  // label.style.alignItems = 'center';
  // label.style.fontSize = '12px';
  // label.style.cursor = 'pointer';

  // const checkbox = document.createElement('input');
  // checkbox.type = 'checkbox';
  // checkbox.style.marginRight = '5px';
  // checkbox.addEventListener('change', () => {
  //   blockRedirects = checkbox.checked;
  //   console.log(`🚫 Блокировка переходов: ${blockRedirects ? 'ВКЛ' : 'ВЫКЛ'}`);
  // });

  // label.appendChild(checkbox);
  // label.appendChild(document.createTextNode('Блок. переходов'));
  // stickyContainer.appendChild(label);

  // Добавляем контейнер в начало документа
  document.body.prepend(stickyContainer);

  button.addEventListener('click', toggleResponseBtn);
}
