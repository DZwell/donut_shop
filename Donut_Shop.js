
  (function () {

    var TopPotDonuts = function(franchise, options) {
      this.franchise = franchise;
      this.minCustomersPerHour = options.minCustomersPerHour;
      this.maxCustomersPerHour = options.maxCustomersPerHour;
      this.avrgDonutsPerCust = options.avrgDonutsPerCust;
      this.hourlyArray = []; //Stores individual hourlyTotal values for each iteration of loop
      this.total;  //stores sum of hourlyrray values
    };


   TopPotDonuts.prototype.hourlyTotal = function() {
    var custPerDay = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour) + this.minCustomersPerHour);
      return Math.round(custPerDay * this.avrgDonutsPerCust);
   };

   TopPotDonuts.prototype.dailyTotal = function () {
      this.total = 0;
      for(var i = 0; i < 11; i++) {
        this.total += this.hourlyTotal();
        this.hourlyArray.push(this.total);
      };
   }


    TopPotDonuts.prototype.render = function() {
      // 1. Info needed from constructor obj: location name, hourly totals, daily totals.
      //var dailyDonuts = this.total; //Grabbing this.total value and storing in dailyDonuts
      //var hourlyDonuts = this.hourlyArray; //stores results of daily total method
      //var locationName = this.franchise; //grabs location names
      // 2. Create row elemnt in which to push new data from user inputs
      console.log(this.total);
      var row = document.createElement('tr');
      // 3. Create data element for row
      var data = document.createElement('td');
      // 4. Put data from user into td tags
      data.textContent = this.franchise;
      //5. Append newly created data to tr tag
      row.appendChild(data);
      // 6. Create 'for' loop to iterate through hourlyArray and put in table
      for(var i = 0; i < this.hourlyArray.length; i++) {
        data = document.createElement('td');
      data.textContent = this.hourlyArray[i];
      row.appendChild(data);
      };
       // 3. Create data element for row
      data = document.createElement('td');
      // 4. Put data from user into td tags
      data.textContent = this.total;
      row.appendChild(data);

      //Take completed row and inster into table body
      document.getElementById('table-body').appendChild(row);
    };


    var downtown = new TopPotDonuts('Downtown', {minCustomersPerHour: 8, maxCustomersPerHour: 43, avrgDonutsPerCust: 4.5});
    var capitolHill = new TopPotDonuts('Capitol Hill', {minCustomersPerHour: 4, maxCustomersPerHour: 47, avrgDonutsPerCust: 2});
    var southLakeUnion = new TopPotDonuts('South Lake Union', {minCustomersPerHour: 9, maxCustomersPerHour: 23, avrgDonutsPerCust: 6.33});
    var wedgewood = new TopPotDonuts('Wedgewood', {minCustomersPerHour: 2, maxCustomersPerHour: 28, avrgDonutsPerCust: 1.25});
    var ballard = new TopPotDonuts('Ballard', {minCustomersPerHour: 8, maxCustomersPerHour: 58, avrgDonutsPerCust: 3.75});

    downtown.dailyTotal();
    capitolHill.dailyTotal();
    southLakeUnion.dailyTotal();
    wedgewood.dailyTotal();
    ballard.dailyTotal();

    //Calls render function on instances of topPotDonuts object
    downtown.render();
    capitolHill.render();
    southLakeUnion.render();
    wedgewood.render();
    ballard.render();

    //Passes topPotDonuts constructor function to top most level so it can be accessed from other files
    window.TopPotDonuts = TopPotDonuts;

})();
