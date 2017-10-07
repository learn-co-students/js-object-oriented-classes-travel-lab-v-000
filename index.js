
class Driver {
  constructor(name, day) {
    this.name = name;
    this.day = day;
    this.startDate = new Date(day);
  }

  yearsExperienceFromBeginningOf(year) {
    return Math.abs(this.startDate.getFullYear() - year + 1);
  }
}

let eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  avenueToInteger(avenue) {
    return eastWest.indexOf(avenue)
  }

  blocksTravelled(){
      let horizontalDistance = this.avenueToInteger(this.endingLocation.horizontal) - this.avenueToInteger(this.beginningLocation.horizontal)
      let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical
      return (Math.abs(horizontalDistance) + Math.abs(verticalDistance))
    }

  estimatedTime(peak){
    if(peak){
      return this.blocksTravelled()/2
    } else {
      return this.blocksTravelled()/3
    }
  }
}
