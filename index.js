class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    let startYear = parseInt(this.startDate.getFullYear(), 10);
    let newYear = parseInt(year, 10);
    return newYear - startYear;
  }

}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let verticalBlocks = this.endingLocation.vertical - this.beginningLocation.vertical;
    let startHorizontal = eastWest.indexOf(this.beginningLocation.horizontal) + 1;
    let endHorizontal = eastWest.indexOf(this.endingLocation.horizontal) + 1;
    return (Math.abs(endHorizontal) - Math.abs(startHorizontal)) + verticalBlocks;
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2;
    }
    else {
      return this.blocksTravelled() / 3;
    }
  }
}
