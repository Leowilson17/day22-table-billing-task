

var totalAcPrice = 0;
var totalFanPrice = 0;
var totalFridgePrice = 0;
var totalOvenPrice = 0;
var totalTVPrice = 0;

function tv_price(){
    var televison;
    var amount;
    televison = document.getElementById('tv').value;
    amount = document.getElementById("price_for_tv");
    amount.innerHTML = 35000 * televison; 
    totalTVPrice = parseInt (amount.innerHTML);
    total_amount();
    // return ( parseInt (amount.innerHTML));
}

function freidge_price(){
    var product_2;
    var amount_2;
    product_2 = document.getElementById('friedge').value;
    amount_2 = document.getElementById('price_for_refri');
    amount_2.innerHTML = 14000 * product_2;
    totalFridgePrice = parseInt (amount_2 . innerHTML);
    total_amount();
    // return  (parseInt (amount_2 . innerHTML));
}


function fan_price(){
    var product_3;
    var amount_3;
    product_3 = document . getElementById('fans').value;
    amount_3 = document.getElementById('price_for_fan');
    amount_3 . innerHTML = 3000 * product_3;
    totalFanPrice = parseInt (amount_3 . innerHTML);
    total_amount();
    // return  (parseInt (amount_3 . innerHTML));
}


function ovan_price(){
    var product_4;
    var amount_4;
    product_4 = document .getElementById('ovan').value;
    amount_4 = document . getElementById('price_for_ovan');
    amount_4.innerHTML = 11500 * product_4;
    totalOvenPrice =parseInt (amount_4 . innerHTML);
    total_amount();
//    return  (parseInt (amount_4 . innerHTML));
}


function ac_price(){
    var product_5;
    var amount_5;
    product_5 = document . getElementById('ac').value;
    amount_5 = document . getElementById('price_for_ac');
    amount_5 . innerHTML = 25000 * product_5;
    totalAcPrice = parseInt (amount_5 . innerHTML);
    total_amount();
    // return  (parseInt (amount_5 . innerHTML));
}

var show;
show = document . getElementById('display_total');
function total_amount(){
var total = totalTVPrice + totalFridgePrice + totalFanPrice + totalOvenPrice + totalAcPrice;
// console.log( show. innerHTML);
var taxAmount = document . getElementById('tax');
var tax = total * (18 /100 );
show . innerHTML = total;
taxAmount.innerHTML  = tax;

var grandTotal = document . getElementById('gtotal');
 grandTotal.innerHTML =  total + tax;
}




// var totalAmount;
// var totalAcPrice;
// var totalFanPrice;
// var totalFridgePrice;
// var totalOvenPrice;
// var totalTVPrice;

// function calculateItemPrice(itemId, noOfItems){
//     if(itemId == 1){
//         totalTVPrice = 35000 * noOfItems; 
//     }
//     else if(itemId == 2){
//         totalFanPrice = 2500 * noOfItems;
//     }
//     else if(itemId == 3){
//         totalFridgePrice = 4000 * noOfItems;
//     }
//     else if(itemId == 4){
//         totalAcPrice = 7000 * noOfItems;
//     }
//     else{
//         totalOvenPrice = 3500 * noOfItems;
//     }
//     console.log(calculateTotalPrice);

// }

// function calculateTotalPrice(){
//     return totalAcPrice + totalFanPrice + totalFridgePrice + totalOvenPrice + totalTVPrice;
// }

