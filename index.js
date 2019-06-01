class Driver {
  constructor(name,startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation,endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

    let horizontal = 0;
    let startAve = eastWest.indexOf(this.beginningLocation.horizontal);
    let endAve = eastWest.indexOf(this.endingLocation.horizontal);

    if (startAve === endAve) {
      horizontal = 0;
    } else {
      horizontal = endAve - startAve;
    };

    let vertical = this.endingLocation.vertical - this.beginningLocation.vertical;

    return vertical + horizontal;
  }

  estimatedTime(peak) {
    let minutes = 0;
    if (peak === true) {
      minutes = this.blocksTravelled() / 2;
    } else {
      minutes = this.blocksTravelled() / 3;
    }
    return minutes
  };

}
