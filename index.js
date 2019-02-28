let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
]; // use eastWest.indexOf(this...horionztal) to get block number

class Driver {
  constructor(name, year) {
    this.name = name;
    this.startDate = new Date(year);
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
    // horizontal is just a string
    // const x = this.endingLocation.horizontal - this.beginningLocation.horizontal;
    const x = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal);
    const y = this.endingLocation.vertical - this.beginningLocation.vertical;
    return x + y;
  }
  
  estimatedTime(isPeak) {
    if (isPeak === true) {
      return this.blocksTravelled()/2;
    } else {
      return this.blocksTravelled()/3;
    }
  }

}


