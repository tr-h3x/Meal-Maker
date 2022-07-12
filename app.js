const menu = {
    _meal: '',
    set meal(mealToCheck) {
      if (typeof this.meal === 'string') {
        this._meal = mealToCheck;
      }
    },
    _price: 0,
    set price(priceToCheck) {
      if (typeof this.price === 'number') {
        this._price = priceToCheck;
      }
    },
    get todaysSpecial() {
      if (this._meal && this._price) {
        return 'Today\'s special is Blue Milk';
      } else {
        return 'Meal or price was not set correctly!';
      }
    }
  }
  
  
  
  
  menu._meal = 'Alderaanian Ale';
  menu._price = 10;
  
  console.log(menu._meal);
  console.log(menu._price);
  console.log(menu.todaysSpecial);