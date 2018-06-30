class Driver {
  constructor (name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf (year) {
    return year - this.startDate.getFullYear();
  }
}

class Route {
  constructor (beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  blocksTravelled() {
    let eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    let hor1 = eastWest.findIndex(el => el == this.beginningLocation.horizontal);
    let hor2 = eastWest.findIndex(el => el == this.endingLocation.horizontal);
    return (this.endingLocation.vertical - this.beginningLocation.vertical) + (hor2 -hor1);
  }
  estimatedTime(peak) {
    if (peak === true) {
      return this.blocksTravelled()/2;
    } else {
      return this.blocksTravelled()/3;
    }
  };
}
