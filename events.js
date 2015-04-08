var TopPotDonuts = window.TopPotDonuts;
var locationName = document.getElementById('franchise');
var minCustomers = document.getElementById('minCustomersPerHour');
var maxCustomers = document.getElementById('maxCustomersPerHour');
var avrgDonuts = document.getElementById('avrgDountsPerCust');
var locationBoxes = document.getElementById('textBoxes');
var submit = document.getElementById('submit');
var clearLocationButton = document.getElementById('clear');
var locationData = [];

var renderData = function() {
  franchise.innerHTML = '';
  locationData = [];
};

var newFranchise = new TopPotDonuts(event.target.franchise.value, event.target.minCustomersPerHour.value, event.target.maxCustomersPerHour.value, event.target.avrgDountsPerCust.value);
event.target.franchise.value = null;
event.target.minCustomersPerHour.value = null;
event.target.maxCustomersPerHour.value = null;
event.target.avrgDountsPerCust.value  null;
locationData.push(newFranchise);


var renderLocation  = function() {
  textBoxes.innerHTML = '';
  locationData.forEach(function(franchise) {
    locationBoxes.appendChild(franchise.render());
  });
};
console.log(locationData);

var noRefresh = function(event) {
  event.preventDefault();

  if(!event.target.franchise.value) {
    return alert('Location cannot be blank');
  }
}
