let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear() -1
  }

}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  integerAvenue(avenue){
      return eastWest.indexOf(avenue)
  }

  blocksTravelled() {
    const verticalBlocks = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);
    const horizontalBlocks = Math.abs(this.integerAvenue(this.endingLocation.horizontal) - Math.abs(this.integerAvenue(this.beginningLocation.horizontal)))
    return verticalBlocks + horizontalBlocks
  }

  estimatedTime(peak){
    if (peak){
      return this.blocksTravelled()/2}
    else {
      return this.blocksTravelled()/3}
    }

}
