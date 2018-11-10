var app = angular.module('customerModule', ['dbApp']);

// Stores all data about a customer
app.service('customerData', function(orderDatabase) {
  var tableId = 0;  // Eventually will be linked with session
  var order_cart = []; // Stores items added but not placed yet
  var order_cost = 0.0; // Stores hypothetical cost if they placed the order so they can see how much its at
  var order_overall = []; // Stores the items of all orders placed
  var final_bill = 0.0; // Stores the final bill of all orders placed
  var refills = [];//stores refills needed by customer

  var bill_info = [
      {'phone_no': "0000000000", 'sid': 1, 'item_name': "Test Item 1", 'price': 12.50, 'type': "appetizer", 'active': "1"},
      {'phone_no': "0000000001", 'sid': 1, 'item_name': "Test Item 2", 'price': 8.50, 'type': "entree", 'active': "1"},
      {'phone_no': "0000000002", 'sid': 1, 'item_name': "Test Item 3", 'price': 9.50, 'type': "dessert", 'active': "1"}
  ];

  return {
    setTableId: setTableId,
    addToCart: addToCart,
    getTableId: getTableId,
    getCart: getCart,
    getCost: getCost,
    addToBill: addToBill,
    getOrderOverall: getOrderOverall,
    getBill: getBill,
    getRefills: getRefills,
    // completedTransaction : splitBillOverall
  };

  function setTableId(id) {
    tableId = id;
  }

  function getTableId() {
    return tableId;
  }

  // Adding an item to their order cart, not yet placed
  function addToCart(phone, id, name, floatPrice, type) {
    order_cart.push({'phone_no': phone, 'sid': id, 'item_name': name, 'price': floatPrice, 'type': type, 'active': "1"});
    console.log("order cost curr:");
    console.log(order_cost);
    console.log(floatPrice);
    order_cost += floatPrice;
    console.log(order_cost);
  }

  // need to find a way to select times. done?
  // // the selected items are returned from groupBy() we call pay from here
  function removeFromCart(selected_orders) {
    console.log(selected_orders);
    var index = bill_info.indexOf(selected_orders);
    if(index > -1){
      bill_info.splice(index, 1);
    }
    console.log(bill_info);

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

//  TODO :     //this function needs to accept an object selected_orders
  function removeFromBill(selected_orders, selected_orders_cost) {
    final_bill -= selected_orders_cost;
    // order_cart = order_cart [] - selected_orders; TODO
    // orderDatabase.push_order(order_cart)
  }

//   // plan to use this function to group by the selections made in dropdown menu
//   function groupBy(order_overall, item_name) {
//     var selected_orders = {};
//     for (var i=0; i<order_overall.length; i++) {
//       var p = order_overall[i][item_name];
//       if (!selected_orders[p]) {
//         selected_orders[p] = [];
//       }
//       selected_orders[p].push(order_overall[i]);
//     }
//     return selected_orders;
//   }

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
      if(order_overall[i].type == 'drink'){
        refills.push(order_overall[i]);
      }
    }
    return refills;
  }

 // Display current items in order_overall ??
  // order_overall.forEach(function(item){
  //   var option = document.createElement('My Tab');
  //   option.value = order_overall.price;
  //   option.innerHTML = oreder_overall.item_name;
  //   selections.appendChild(option)
  // })
  //
  // selections.onchange = function(){
  //   alert(this.item_name);
  // }


})
