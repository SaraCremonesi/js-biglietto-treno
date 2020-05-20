// Questions to ask the user
var numberOfKm = parseInt(prompt('How many kilometers do you want to travel?'));
var passengerAge = parseInt(prompt('How old are you?'));

// Full price ticket
var fullPriceTicket = numberOfKm * 0.21;

if (passengerAge < 18) {
  juniorPriceTicket = (fullPriceTicket * 20) / 100;
  document.getElementById('ticket-price').innerHTML = juniorPriceTicket;
} else if (passengerAge > 65) {
  seniorPriceTicket = (fullPriceTicket * 40) / 100;
  document.getElementById('ticket-price').innerHTML = seniorPriceTicket;
} else {
  document.getElementById('ticket-price').innerHTML = fullPriceTicket;
}
