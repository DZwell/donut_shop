

    var TopPotDonuts = window.TopPotDonuts;
    var clearButton = document.getElementById('clear');

    //Make event listener on data entry form
      //1. Make variable to store data entry form
        var newForm = document.getElementById('userInput');
        //2. Create event listener
        clearButton.addEventListener('click', function() {
          newForm.textContent = '';
        });
        newForm.addEventListener('submit', function(event) {
          event.preventDefault(); //prevents whole page refresh
          //3. Validate inputs before submitting
          if(!event.target.franchise.value) {
            //3a. Create alert inside browser
            var alert1 = document.getElementById('franchiseAlert')
            var alert1Text = document.createTextNode('Location can\'t be left blank!');
            return;
          } else if(!event.target.minCustomersPerHour.value) {
            var alert2 = document.getElementById('minCustomersPerHour')
            var alert2Text = document.createTextNode('Minimum customers can\'t be left blank!');
            return;
          } else if(!event.target.maxCustomersPerHour.value) {
            var alert3 = document.getElementById('maxCustAlert')
            var alert3Text = document.createTextNode('Maximum customers can\'t be left blank!');
            return;
          } else if(!event.target.avrgDonutsPerCust.value) {
            var alert4 = document.getElementById('avrgDountsPerCustAlert')
            var alert4Text = document.createTextNode('Average donuts can\'t be left blank!');
            return;
          }

    //Make new instance of donut shop for user input.
    //First param must be 'franchise' since it was listed first in obj const, 2nd param is obj se we pass in obj literal using {}
    var newFranchise = new TopPotDonuts(event.target.franchise.value, {minCustomersPerHour: event.target.minCustomersPerHour.value, maxCustomersPerHour: event.target.maxCustomersPerHour.value, avrgDonutsPerCust: event.target.avrgDonutsPerCust.value});
    event.target.franchise.value = null;
    event.target.minCustomersPerHour.value = null;
    event.target.maxCustomersPerHour.value = null;
    event.target.avrgDonutsPerCust.value = null;

    //Call daily total and render functions respectively
    newFranchise.dailyTotal();
    newFranchise.render();

    });
