class Driver {

  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

  startDate() {
    return this.startDate;
  };

  yearsExperienceFromBeginningOf(year) {
    let beginningYearDate = new Date(`${year}-01-01`);
    return (beginningYearDate.getFullYear() - this.startDate.getFullYear() +1);
  }

}

let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Route {

  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }


  distanceStreets() {
    return Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
  }

  distanceAvenues() {
    return Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal));
  }

  blocksTravelled() {
    return this.distanceStreets() + this.distanceAvenues();
  };

  estimatedTime(isPeakHours) {
    let factor = 3;
    if (isPeakHours) {factor = 2};
    console.log(factor);
    console.log(this.blocksTravelled());

    return this.blocksTravelled() / factor;
  }

}
