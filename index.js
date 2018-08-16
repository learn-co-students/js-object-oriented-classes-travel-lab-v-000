
class Driver {

  constructor(name, day) {
    this.name = name;
    this.startDate =  new Date(day);
  }




  yearsExperienceFromBeginningOf(year){
    const hiredYear = this.startDate.getFullYear();
    return (year-1) - hiredYear;
  }

}
let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
class Route {

  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  avenueToInteger(avenue){
  return eastWest.indexOf(avenue)
}
  blocksTravelled(){
    let horizontalDistance = this.avenueToInteger(this.beginningLocation.horizontal) - this.avenueToInteger(this.endingLocation.horizontal);
    let verticalDistance = this.beginningLocation.vertical - this.endingLocation.vertical;
    return Math.abs(horizontalDistance) + Math.abs(verticalDistance);
  }


  estimatedTime(peak){
    if (peak) {
      return this.blocksTravelled() / 2;
    }else{
      return this.blocksTravelled() / 3;

    }

  }

}
