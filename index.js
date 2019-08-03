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
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
  blocksTravelled() {
    let northSouthBlocks = this.endingLocation.vertical - this.beginningLocation.vertical;
    let eastWestBlocks = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal);
    return (Math.abs(northSouthBlocks) + Math.abs(eastWestBlocks));
  }
  estimatedTime(peakHours) {
   if(peakHours) {
     return this.blocksTravelled() / 2;
   }
   else {
     return this.blocksTravelled() / 3;
   }
  }
}
