var app = angular.module('customerModule', ['dbApp']);

// Stores all data about a customer
app.service('customerData', function(orderDatabase) {
  var tableId = 0;  // Eventually will be linked with session
  var order_cart = []; // Stores items added but not placed yet
  var order_cost = 0.0; // Stores hypothetical cost if they placed the order so they can see how much its at
  var order_overall = []; // Stores the items of all orders placed
  var final_bill = 0.0; // Stores the final bill of all orders placed
  var refills = [];//stores refills needed by customer
  return {
    setTableId: setTableId,
    addToCart: addToCart,
    getTableId: getTableId,
    getCart: getCart,
    getCost: getCost,
    addToBill: addToBill,
    getOrderOverall: getOrderOverall,
    getBill: getBill,
    getRefills: getRefills
  };

  function setTableId(id) {
    tableId = id;
  }

  function getTableId() {
    return tableId;
  }

  // Adding an item to their order cart, not yet placed
  function addToCart(phone, id, name, floatPrice, type) {
    order_cart.push({'phone_no': phone, 'sid': id, 'item_name': name, 'price': floatPrice, 'type': type, 'active': 1});
    console.log("order cost curr:");
    console.log(order_cost);
    console.log(floatPrice);
    order_cost += floatPrice;
    console.log(order_cost);
  }

  // Returns items added to order
  function getCart() {
    return order_cart;
  }

  // Returns cost of their current order so far, not their overall bill
  function getCost() {
    return order_cost;
  }

  // Submits items from cart to their total bill and clears cart
  function addToBill() {
    orderDatabase.push_order(order_cart);
    order_overall = order_overall.concat(order_cart);
    final_bill += order_cost;
    order_cart = [];
    order_cost = 0.0;
  }

  // Returns overall order, for bill
  function getOrderOverall() {
    return order_overall;
  }

  // Returns payment amount due
  function getBill() {
    return final_bill;
  }

  function getRefills() {
    for(var i = 0; i < order_overall.length; i++){
      if(order_overall[i].type == drink){
        refill.concat(order_overall[i]);
      }
    }
    return refill;
  }
})
