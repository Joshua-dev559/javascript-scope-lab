// Write your solution in this file!
// Step 1: Variable Data
var burgers = ['Hamburger', 'Cheeseburger'];
var featuredDrink = 'Strawberry Milkshake';

// Step 2: Function
function addBurger() {
    var newBurger = 'Flatburger';
    burgers.push(newBurger);
}

// Step 3: Block Scope
if (true) {
    let anotherNewBurger = 'Maple Bacon Burger';
    burgers.push(anotherNewBurger);

    function changeFeaturedDrink() {
        featuredDrink = 'The JavaShake';
    }
}