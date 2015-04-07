
  (function () {

    var topPotDonuts = function(franchise, options) {
      this.franchise = franchise;
      this.minCustomersPerHour = options.minCustomersPerHour;
      this.maxCustomersPerHour = options.maxCustomersPerHour;
      this.avrgDonutsPerCust = options.avrgDonutsPerCust;
      this.myArray = [];
    };

   topPotDonuts.prototype.hourlyTotal = function() {
    var custPerDay = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour) + this.minCustomersPerHour);
      return Math.round(custPerDay * this.avrgDonutsPerCust);
   };

   topPotDonuts.prototype.dailyTotal = function () {
      var total = 0;
      for(var i = 0; i <= 11; i++) {
        total += this.hourlyTotal();
        this.myArray.push(total);
      };
      console.log(this.myArray);
      return total;
   }


    topPotDonuts.prototype.render = function() {
     var dailyDonuts = this.dailyTotal();
        var elRows = document.getElementById(this.franchise);
      for(var i = 0; i <= this.myArray.length; i++) {
        var td = document.createElement('td');
        td.textContent = this.myArray[i];
        elRows.appendChild(td);
      }
      td.textContent = dailyDonuts;
    elRows.appendChild(td);

    };
    var downtown = new topPotDonuts('downtown', {minCustomersPerHour: 8, maxCustomersPerHour: 43, avrgDonutsPerCust: 4.5});
    var capitolHill = new topPotDonuts('capitolHill', {minCustomersPerHour: 4, maxCustomersPerHour: 47, avrgDonutsPerCust: 2});
    var southLakeUnion = new topPotDonuts('southLakeUnion', {minCustomersPerHour: 9, maxCustomersPerHour: 23, avrgDonutsPerCust: 6.33});
    var wedgewood = new topPotDonuts('wedgewood', {minCustomersPerHour: 2, maxCustomersPerHour: 28, avrgDonutsPerCust: 1.25});
    var ballard = new topPotDonuts('ballard', {minCustomersPerHour: 8, maxCustomersPerHour: 58, avrgDonutsPerCust: 3.75});

    downtown.render();
    capitolHill.render();
    southLakeUnion.render();
    wedgewood.render();
    ballard.render();

})();
