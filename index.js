let eastWestAve = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  blocksTravelled(){
    const northSouth = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    const beginningIndex = eastWestAve.indexOf(this.beginningLocation.horizontal);
    const endingIndex = eastWestAve.indexOf(this.endingLocation.horizontal);
    const eastWest = Math.abs(beginningIndex - endingIndex);
    return northSouth + eastWest;
  }
  estimatedTime(peak){
    if (peak) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }
}
