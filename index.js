class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(endDate) {
    return endDate - `${this.startDate.getFullYear()}` - 1;
  }
} //end of class

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
   //beginning and ending locations have vertical and horizontal facets
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

     aveToInt(avenue) {
       return eastWest.indexOf(avenue);
     }

  blocksTravelled() {
    let horizontalDistance = this.aveToInt(this.endingLocation.horizontal) - this.aveToInt(this.beginningLocation.horizontal);
    let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical
    // Math.abs() function returns the absolute value of a number, that is
    return Math.abs(horizontalDistance) + Math.abs(verticalDistance);
  }

  estimatedTime(peak_hours) {
    if(peak_hours) {
      return this.blocksTravelled()/2;
    } else {
      return this.blocksTravelled()/3;
    }
  }

} //EOC
