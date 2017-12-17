class Driver {
  constructor(name, startDateString) {
    this.name = name;
    this.startDate = new Date(startDateString);
  }

  yearsExperienceFromBeginningOf(year){
    let startYear =  this.startDate.getFullYear()
    return year - startYear
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    const eastWest = ["1st Avenue", "2nd Avenue", "3rd Avenue", "Lexington Avenue", "Park", "Madison Avenue", "5th Avenue"];

    function calcAvenue(ave) {
      return eastWest.indexOf(ave)
    }

    const startHorizontal = calcAvenue(this.beginningLocation.horizontal);
    const endHorizontal = calcAvenue(this.endingLocation.horizontal);

    let horizontal = Math.abs(startHorizontal - endHorizontal);
    let vertical = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    return horizontal + vertical;
  }

  estimatedTime(peakTime) {
    if (peakTime === true) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }
}
