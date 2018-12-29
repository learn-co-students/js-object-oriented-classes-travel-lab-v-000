class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    const endDate = new Date(year, 1, 1);
    return endDate.getFullYear() - this.startDate.getFullYear();
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

  horizontalBlocksTravelled() {
    const endingIndex = eastWest.indexOf(this.endingLocation.horizontal);
    const startingIndex = eastWest.indexOf(this.beginningLocation.horizontal);
    return endingIndex - startingIndex;
  }

  verticalBlocksTravelled() {
    return this.endingLocation.vertical - this.beginningLocation.vertical;
  }

  blocksTravelled() {
    return this.horizontalBlocksTravelled() + this.verticalBlocksTravelled();
  }

  estimatedTime(peakHours) {
    return (peakHours ? this.blocksTravelled() / 2 : this.blocksTravelled() / 3);
  }
}
