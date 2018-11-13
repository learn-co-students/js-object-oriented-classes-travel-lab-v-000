class Driver{
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(year){
    let endDate = new Date(year, 1, 1);
    let diff = (endDate - this.startDate)/(365*24*60*60*1000);
    return parseInt(diff);
  }
}
let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  avenueToInteger(avenue){
    return eastWest.indexOf(avenue);
  }

  blocksTravelled(){
    let verticalDiff = this.endingLocation.vertical - this.beginningLocation.vertical;
    let horizontalDiff = this.avenueToInteger(this.endingLocation.horizontal) - this.avenueToInteger(this.beginningLocation.horizontal);
    return verticalDiff + horizontalDiff;
  }

  estimatedTime(peakHours){
    if(peakHours) {
      return this.blocksTravelled()/2;
    }
    else {
      return this.blocksTravelled()/3;
    }
  }
}
