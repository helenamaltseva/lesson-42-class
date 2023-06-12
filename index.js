class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    this._radius = value;
  }

  get diameter() {
    return this._radius * 2;
  }

  calculateArea() {
    return Math.PI * Math.pow(this._radius, 2);
  }

  calculateCircumference() {
    return 2 * Math.PI * this._radius;
  }
}

// Створення об'єкту кола зі стартовим радіусом 5
const circle = new Circle(5);

// Отримання значень та виведення інформації
const radiusValue = document.getElementById('radiusValue');
const diameterValue = document.getElementById('diameterValue');
const areaValue = document.getElementById('areaValue');
const circumferenceValue = document.getElementById('circumferenceValue');

radiusValue.textContent = circle.radius;
diameterValue.textContent = circle.diameter;
areaValue.textContent = circle.calculateArea().toFixed(2);
circumferenceValue.textContent = circle.calculateCircumference().toFixed(2);