
class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year){
    return Math.abs(this.startDate.getFullYear() - year);
  }
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled(){
    const verticalBlocksTravelled = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);

    const horizontalBlocksTravelled = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal))

    return verticalBlocksTravelled + horizontalBlocksTravelled
  }

  estimatedTime(peakHour){
    if(peakHour){
      return this.blocksTravelled()/2
    } else {
      return this.blocksTravelled()/3
    }
  }

}
