
class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  };

  yearsExperienceFromBeginningOf(date){
    return date - 1 - this.startDate.getFullYear();
  }
}


class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  };

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    return Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical) + Math.abs((eastWest.indexOf(this.beginningLocation.horizontal)) - (eastWest.indexOf(this.endingLocation.horizontal)))
   }

  estimatedTime(hour) {
    if (hour === true) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }


  }
