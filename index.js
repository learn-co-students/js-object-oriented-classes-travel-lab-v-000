
let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date (startDate)
  }

  yearsExperienceFromBeginningOf(endDate) {
    let end = new Date(endDate, 1, 1)
    let totalYears = Math.floor((end - this.startDate) / (365 * 24 * 60 * 60 * 1000));
    return totalYears
  }
}

class Route {
  constructor( beginningLocation, endingLocation ) {
     this.beginningLocation = beginningLocation;
     this.endingLocation = endingLocation;
   }

   avenueToInteger( avenue ) {
     return eastWest.indexOf( avenue );
   }

  blocksTravelled() {
    let horizontalBlocks = Math.abs( this.avenueToInteger( this.endingLocation.horizontal ) -
      this.avenueToInteger( this.beginningLocation.horizontal ));

    let verticalBlocks = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical)

    return horizontalBlocks + verticalBlocks;
  }

  estimatedTime(peak) {
    if (peak) {
      return Math.floor(this.blocksTravelled() / 2)
    } else {
      return Math.floor(this.blocksTravelled() / 3)
    }
  }
}
