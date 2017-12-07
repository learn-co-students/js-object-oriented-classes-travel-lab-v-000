
class Driver {
  constructor(name, date) {
    this.name = name;
    this.date = date;
    this.startDate = this.startDate()
  }

  startDate() {
    return new Date(this.date);
  }

  yearsExperienceFromBeginningOf(endDate) {
    return endDate - this.startDate.getFullYear()-1
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

    let verticalDistance = this.beginningLocation.vertical - this.endingLocation.vertical;
    let horizontalDistance = eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal);

    return Math.abs(verticalDistance) + Math.abs(horizontalDistance);
  }

  estimatedTime(peak){
    if (peak === true){
      return this.blocksTravelled() / 2
    }else {
      return this.blocksTravelled() / 3
    }
  }
}
