var app = angular.module('customerModule', ['dbApp']);

// Stores all data about a customer
app.service('customerData', function(orderDatabase) {
  var tableId = 0;  // Eventually will be linked with session
  var phone_no = "0000000000"; //customer phone/loyalty id
  var pts = 0; //loyalty points
  var order_cart = []; // Stores items added but not placed yet
  var order_cost = 0.0; // Stores hypothetical cost if they placed the order so they can see how much its at
  var order_overall = []; // Stores the items of all orders placed
  var final_bill = 0; // Stores the final bill of all orders placed
  var refills = [];//stores refills needed by customer
  var help_requests = [];//stores pairs of tables and help requests needed
  var needHelp = false;//stores whether a table has called for help or not
  var my_tab = []; //push tab items here. Don't know how to create dynamically
  var usedCoupon = false;
  var usedLoyalty = false; //stores if they have redeemed a loyalty reward yet
  var spaghettiHour = false;

  return {
    setTableId: setTableId,
    setPhoneNo: setPhoneNo,
    setPts: setPts,
    addToCart: addToCart,
    getTableId: getTableId,
    getPhoneNo: getPhoneNo,
    getPts: getPts,
    getCart: getCart,
    getCost: getCost,
    addToBill: addToBill,
    getOrderOverall: getOrderOverall,
    getBill: getBill,
    getRefills: getRefills,
    removeFromCart: removeFromCart,
    removeFromBill: removeFromBill,
    removeFromYourOrder: removeFromYourOrder,
    customerHelp: customerHelp,
    getHelpRequests: getHelpRequests,
    getHighestItemofType: getHighestItemofType,
    setUsedCoupon: setUsedCoupon,
    getUsedCoupon: getUsedCoupon,
    setUsedLoyalty: setUsedLoyalty,
    getUsedLoyalty: getUsedLoyalty,
    setSpaghettiHour: setSpaghettiHour,
    getSpaghettiHour: getSpaghettiHour
  };

  function setTableId(id) {
    console.log(parseInt(id));
    if(parseInt(id) < 1 || parseInt(id) > 24) {
      alert("Table ID must be between 1-24, please try again.")
    }
    else if(!Number.isInteger(parseFloat(id))) {
      alert("Table ID must be a number, please try again.");
    }
    else {
      tableId = id;
      alert("Table ID Set! Your Table is: " + tableId);
    }
  }

  function getTableId() {
    return tableId;
  }

  function setPhoneNo(phone) {
    phone_no = phone;
    if(order_cart.length != 0) {
      for(var i = 0; i < order_cart.length; i++) {
        order_cart[i].phone_no = phone_no;
      }
    }
    if(order_overall.length != 0) {
      for(var i = 0; i < order_overall.length; i++) {
        order_overall[i].phone_no = phone_no;
      }
    }
    orderDatabase.update_phone("0000000000", phone_no, tableId);
  }

  function getPhoneNo() {
    return phone_no;
  }

  function setPts(p) {
    pts = p;
  }

  function getPts() {
    return pts;
  }
  // Adding an item to their order cart, not yet placed
  function addToCart(phone, id, name, floatPrice, type) {
    if(getSpaghettiHour()) {
      floatPrice -= (floatPrice * .10);
    }
    order_cart.push({'phone_no': phone, 'sid': id, 'item_name': name, 'price': floatPrice, 'type': type, 'active': "1"});
    order_cost += floatPrice;
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
    order_overall = [];
    final_bill = 0.0;
    var tmp = orderDatabase.get_active_orders().then(function(response) {
      for(var i = 0; i < tmp.length; i++) {
        if(tmp[i].sid == tableId && tmp[i].phone_no == phone_no) {
          order_overall.concat(tmp[i]);
          final_bill += tmp[i].price;
        }
      }
      console.log(order_overall);
      return order_overall;
    });
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

  function removeFromCart(index) {
    var idx = order_cart.indexOf(index);
    orde_cart.delete(idx, 1);

  }

  function removeFromYourOrder(name) {
    var index;
    for(var i = 0; i < order_cart.length; i++) {
      if(order_cart[i].item_name == name) {
        index = i;
        break;
      }
    }
    if(index > -1) {
      order_cost -= order_cart[i].price;
      order_cart.splice(index, 1);
    }
  }

 function removeFromBill(selected_orders_cost) {
   final_bill -= selected_orders_cost;
 }

 function customerHelp(t_id) {
   for(var i = 0; i < help_requests.length; i++){
     if(help_requests[i].ID == t_id){
       help_requests[i].needsHelp = !help_requests[i].needsHelp;
       return;
     }
   }
   help_requests.push({'ID': t_id, 'needsHelp': true});
   console.log("added true " + t_id);
 }

 function getHelpRequests() {
   return help_requests;
 }

 //function returns the item with the highest value in order_overall
 function getHighestItemofType(type_f) {
   var highestsum = 0.0;
   var highestPricedItem;

   for(var i = 0; i < order_overall.length; i++){
     console.log(order_overall[i]);
     if(order_overall[i].type == type_f && order_overall[i].price > highestsum){
       console.log('found more expensive item to discount!');
       highestPricedItem = order_overall[i];
       highestsum = parseFloat(order_overall[i].price);
     }
   }

   console.log('highestPricedItem: ');
   console.log(highestPricedItem);

   return highestPricedItem;
 }

 // For seeing if they've used a coupon or not so 10% off is maintained if they leave page && they cannot use more than 1 coupon at a time
 function setUsedCoupon(used) {
   usedCoupon = used;
 }

 function getUsedCoupon() {
   return usedCoupon;
 }

 function setUsedLoyalty(used) {
   usedLoyalty = used;
 }

 function getUsedLoyalty() {
   return usedLoyalty;
 }

 function setSpaghettiHour(status) {
   spaghettiHour = status;
 }

 function getSpaghettiHour(status) {
   return spaghettiHour;
 }
})
