class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  };

  yearsExperienceFromBeginningOf(year) {
    let startYear = this.startDate.getFullYear();
    return year - startYear;
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  };

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

    function avenuesTravelled(avenue) {
      return eastWest.indexOf(avenue);
    };

    let horizontalDistance = avenuesTravelled(this.endingLocation.horizontal) - avenuesTravelled(this.beginningLocation.horizontal);
    let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical;

    return (Math.abs(horizontalDistance) + Math.abs(verticalDistance));
  };

  estimatedTime(peakBoolean) {
    if (peakBoolean === true) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }
}
