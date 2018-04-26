class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    let currentDate = new Date();
    return year - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation; 
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    const vertical = Math.abs(parseInt(this.beginningLocation.vertical) - parseInt(this.endingLocation.vertical));
    const horizontal = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal));
    return vertical + horizontal;
  }

  estimatedTime(peak = false) {
    if (peak) {
      return this.blocksTravelled()/2;
    } else {    
      return this.blocksTravelled()/3;
    }
  }
}