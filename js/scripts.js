//Business Logic
function Pizza(size, toppings) {
this.size = size;
this.toppings = toppings;
this.price = 10;
}

Pizza.prototype.costPizza = function() {
  if (this.size === "large") {
   this.price += 5;
  } else if (this.size == "medium") {
   this.price  += 2;
  } else  {
    this.price;
  }
  if()
    return this.price;
  
}










$(document).ready(function() {
  $("#formOne").submit(function(event) { 
  event.preventDefault();
  const inputtedPizza = $("#pizza").val();
  // $("input:checkbox[name=pizza-parlor]:checked").each(function() {
  //   let inputtedTopping = $(this).val();
  // });
 
  
  })
})


