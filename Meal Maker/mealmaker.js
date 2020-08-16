const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers() {

  },
  set appetizers(appetizersIn) {

  },
  get mains() {

  },
  set mains(mainsIn) {

  },
  get desserts() {

  },
  set desserts(dessertsIn) {

  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };

    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price

    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is $${totalPrice}.`;

  }
};

menu.addDishToCourse('appetizers', 'bread', 1.50);
menu.addDishToCourse('appetizers', 'salad', 2.70);
menu.addDishToCourse('appetizers', 'soup', 3.20);
menu.addDishToCourse('mains', 'steak', 14.65);
menu.addDishToCourse('mains', 'chicken', 12.50);
menu.addDishToCourse('mains', 'fish', 13.00);
menu.addDishToCourse('desserts', 'cake', 5.75);
menu.addDishToCourse('desserts', 'chocolate', 3.30);
menu.addDishToCourse('desserts', 'ice cream', 2.50);

const meal = menu.generateRandomMeal();
console.log(meal);
