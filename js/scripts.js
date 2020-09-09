//Business Logic
function Pizza(size, toppings) {
this.size = size;
this.toppings = toppings;
this.price = 10;
}

Pizza.prototype.costPizza = function() { 
  if (this.size === 1) {
    this.price += 5 + this.toppings;
  } else if (this.size === 2) {
    this.price += 2 + this.toppings;
  } else {
    this.price += this.toppings;
  } 
  return this.price;
}

// UI Logic
$(document).ready(function() {
  $("#formOne").submit(function(event) { 
  event.preventDefault();
  const inputtedPizza = parseInt($("#pizza").val());
  const inputtedTopping = $("input:checkbox[name=pizza-parlor]:checked").length;
  let pizzaNew = new Pizza(inputtedPizza, inputtedTopping);
  let result = Object.keys(pizzaNew);
  let finalPrice = pizzaNew.costPizza(result);
  $("#price").text(finalPrice);
  $("#output").show();
  })
})

