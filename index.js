class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date (startDate);
  };

yearsExperienceFromBeginningOf(endDate) {
    return endDate - this.startDate.getFullYear();
  };
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  };

  blocksTravelled() {
      let eastWest = [
    '1st Avenue',
    '2nd Avenue',
    '3rd Avenue',
    'Lexington Avenue',
    'Park',
    'Madison Avenue',
    '5th Avenue'];

    let vertical = this.endingLocation.vertical - this.beginningLocation.vertical;
    let horizontal = eastWest.indexOf(this.endingLocation.horizontal)
                      - eastWest.indexOf(this.beginningLocation.horizontal);
    let total = vertical += horizontal;

    if (this.endingLocation.vertical != this.beginningLocation.vertical) {
      return vertical; }
    else if (this.endingLocation.horizontal != this.beginningLocation.horizontal) {
       return horizontal; }
      else {
         return total;}
    };


estimatedTime(peak) {
    if (!peak) {return this.blocksTravelled() /3}
  else {return this.blocksTravelled() /2}
  };
}
