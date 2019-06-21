class Driver {
  constructor(name, date) {
    this.name = name;
    this.startDate = new Date(date);
  }
  yearsExperienceFromBeginningOf(year) { 
    return year - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation; 
  }
  blocksTravelled() { 
    const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    const streetDistance = (this.endingLocation.vertical - this.beginningLocation.vertical);
    const avenueDistance = (eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal)); 
    return streetDistance + avenueDistance;
  }
  estimatedTime(peak) {
    
    if (peak) {
      return this.blocksTravelled()/2;
    }
    else {
      return this.blocksTravelled()/3;
    }
  }
} 