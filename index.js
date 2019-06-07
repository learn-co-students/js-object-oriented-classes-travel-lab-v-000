let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Driver{
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(endDate){
    let end = new Date(endDate);
    return end.getFullYear() - this.startDate.getFullYear() + 1;
  }
}
class Route{
  constructor(beginningLocation, endLocation){
    this.beginningLocation = beginningLocation;
    this.endLocation = endLocation;
  }
   aveToIntegers(avenue){
    return eastWest.indexOf(avenue)
  }
  blocksTravelled(){
    let vertNum = Math.abs(this.endLocation.vertical - this.beginningLocation.vertical);
    let horzNum = Math.abs(this.aveToIntegers(this.endLocation.horizontal) - this.aveToIntegers(this.beginningLocation.horizontal));
    return vertNum + horzNum;
  }
  estimatedTime(peak){
    if (peak){
      return this.blocksTravelled() / 2;
    } else{
      return this.blocksTravelled() / 3;
    }
  }
}