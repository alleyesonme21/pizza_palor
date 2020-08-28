//Business Logic
function Pizza(size, toppings) {
this.size = size;
this.toppings = toppings;
this.price = 10;
}

Pizza.prototype.costPizza = function() {
// Still working on it.
  if (this.size === "large") {
    this.price += 5;
  } else if (this.size === "medium") {
    this.price  += 2;
  } else if (this.size === "small") {
    this.price;
  } else {
    alert("Fix your code")
  }
  return this.price 
}

// UI Logic
$(document).ready(function() {
  $("#formOne").submit(function(event) { 
  event.preventDefault();
  const inputtedPizza = $("#pizza").val();
  // trying to fix this part
  const inputtedTopping = $('input[type="checkbox"]').length;
  let pizzaNew = new Pizza(inputtedPizza, inputtedToppings);
  let result = Object.keys(pizzaNew);
  let finalPrice = pizzaNew.costPizza(result)
  console.log(finalPrice)
  $("#price").text(finalPrice)
  $("#output").show()
  })
})