let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
]


class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate =  new Date(startDate);
    //
  }
  yearsExperienceFromBeginningOf(year){
   let endDate = new Date(year, 1, 1)
   return parseInt((endDate - this.startDate) / (1000 * 60 * 60 * 24 * 365))
  }
}

class Route {

  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
  aveIndex(ave){
    return eastWest.indexOf(ave);
  }

  blocksTravelled(){

    let horizontalDistance =
      this.aveIndex(this.endingLocation.horizontal) -
      this.aveIndex(this.beginningLocation.horizontal);

    let verticalDistance =
      this.endingLocation.vertical -
      this.beginningLocation.vertical ;

    return Math.abs(verticalDistance)  + Math.abs(horizontalDistance);
  }

  estimatedTime(peak){
    if (peak) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }

}
