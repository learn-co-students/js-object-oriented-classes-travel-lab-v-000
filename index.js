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
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endDate){
    return new Date(endDate).getFullYear() - this.startDate.getFullYear() + 1
  }
}
class Route{
  constructor(beginningLocation, endLocation) {
    this.beginningLocation = beginningLocation;
    this.endLocation = endLocation;
  }
  aveToInt(ave) {
    return eastWest.indexOf(ave);
  }
  blocksTravelled() {
    let vert = Math.abs(this.beginningLocation.vertical - this.endLocation.vertical);
    let startHor = this.aveToInt(this.beginningLocation.horizontal);
    let endHor = this.aveToInt(this.endLocation.horizontal);
    let hor = Math.abs(startHor - endHor);
    return hor + vert;
  }
  estimatedTime(peak = false) {
    let travelTime = this.blocksTravelled()
    peak ? travelTime = travelTime/2 : travelTime = travelTime/3
    return travelTime
  }
}
