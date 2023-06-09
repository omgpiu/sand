export const TaskInfo = () => (
  <div className="task">
    <p className="title">
      Асинхронное получение данных и вывод в виде динамического списка
    </p>
    <ul className="list">
      <li>
        Реализовать компонент выводящий динамический список не просроченных,
        (отсортированных по значению поля order (в порядке возрастания))
        записей.
      </li>
      <li>
        Реализовать компонент с кнопкой Удалить - удаляющей текущую запись.
      </li>
      <li>Убрать лишние дублирущиеся буквы/цифры в value.</li>
      <li>
        Данные о записях получаются из двух асинхронных методов getItems и
        getItemsExpirations
      </li>
      <li>Добавить изображение для каждого элемента из папки assets</li>
      <li>Добавить возможность скрывать и показывать изображение</li>
      <li>
        Добавить стилей, разбив карточку на 3 части. Изображение, текст, кнопка
        удалить.
      </li>
    </ul>
  </div>
);
