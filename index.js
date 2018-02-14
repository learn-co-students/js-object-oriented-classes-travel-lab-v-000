class Driver {
  constructor(name, startDate) {
    this.name = name;

    const date = Date.parse(startDate);
    this.startDate = new Date(date);
  };
  yearsExperienceFromBeginningOf(year) {
    // console.log(this.startDate.getFullYear() - year);
    return year - this.startDate.getFullYear();
  };
};

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  };
  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    let horizontalDistance = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal));
    let verticalDistance = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    return horizontalDistance + verticalDistance
    // console.log(eastWest)
    // console.log(this.beginningLocation.horizontal);
    // console.log(this.endingLocation.horizontal);
    // console.log(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal));
  };
  estimatedTime(peakTime) {
    if (peakTime === true) {
      return this.blocksTravelled()/2
    }
    else {
      return this.blocksTravelled()/3;
    }
  };
};
