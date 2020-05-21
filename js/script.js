// Questions to ask the user
var numberOfKm = parseInt(prompt('How many kilometers do you want to travel?'));
var passengerAge = parseInt(prompt('How old are you?'));

// Full price ticket
var fullPriceTicket = numberOfKm * 0.21;
var juniorPriceTicket;
var seniorPriceTicket;

if (passengerAge < 18) {
   juniorDiscount = (fullPriceTicket * 20) / 100;
   juniorPriceTicket = fullPriceTicket - juniorDiscount;
  document.getElementById('ticket-price').innerHTML = juniorPriceTicket.toFixed(2);
} else if (passengerAge > 65) {
  seniorDiscount = (fullPriceTicket * 40) / 100;
  seniorPriceTicket = fullPriceTicket - seniorDiscount;
  document.getElementById('ticket-price').innerHTML = seniorPriceTicket.toFixed(2);
} else {
  document.getElementById('ticket-price').innerHTML = fullPriceTicket.toFixed(2);
}
