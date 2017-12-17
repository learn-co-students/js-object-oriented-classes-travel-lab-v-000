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

    function calcStartAve (element) {
      return element === this.beginningLocation.horizontal;
    }

    function calcEndAve (element) {
      return element === this.endingLocation.horizontal;
    }

    const startHorizontal = eastWest.findIndex(calcStartAve, this);
    const endHorizontal = eastWest.findIndex(calcEndAve, this);

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
