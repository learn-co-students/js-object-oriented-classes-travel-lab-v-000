let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    let endDate = new Date(year, 1, 1);
    return Math.floor((endDate - this.startDate)/(365*24*60*60*1000));
  } //convert from milliseconds and round down to remove incomplete year
}


class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let horizontalTravel = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal));
    let verticalTravel = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    return horizontalTravel + verticalTravel;
  }

  estimatedTime(peakTime) {
    if (peakTime){
      return this.blocksTravelled() / 2;
    }
    else {
      return this.blocksTravelled() / 3;
    }
  }

}
