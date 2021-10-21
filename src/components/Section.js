export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items; //массив данных, которые добавляются при инициализации класса
    this._renderer = renderer; //ф-ция, отвечает за создание и отрисовку данных на странице
    this._container = document.querySelector(containerSelector); //селектор контейнера
  }
  renderAll() {
    this._items.forEach(item => this._renderer(item));
    //отрисовка всех элементов
  }
  addItem(element) {
    this._container.prepend(element);
    //принимает DOM-элемент и добавляет его в контейнер
  }
}


