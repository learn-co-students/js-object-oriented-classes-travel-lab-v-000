class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(endDate) {
    return parseInt(endDate) - this.startDate.getFullYear();
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
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    debugger;
    let horizontalTotal = Math.abs(parseInt(this.beginningLocation.horizontal) - parseInt(this.endingLocation.horizontal))

    if (this.beginningLocation.vertical === this.endingLocation.vertical) {
      return horizontalTotal;
    } else {
        let verticalTotal = Math.abs(eastWest.indexOf(this.beginningLocation.vertical) - eastWest.indexOf(this.endingLocation.vertical))
        return (horizontalTotal + verticalTotal);
    }
  }
}
