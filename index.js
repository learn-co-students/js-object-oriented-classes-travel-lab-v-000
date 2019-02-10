class Driver {
  constructor(name, date){
    this.startDate = new Date(date);
    this.name = name;
  }

  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear();
  }
};

let avenues = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  avenueNumber(avenue) {
  return avenues.indexOf(avenue);
  }

  blocksTravelled(){
    let horizontalDistance = this.avenueNumber(this.endingLocation.horizontal) - this.avenueNumber(this.beginningLocation.horizontal);
    let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical;
    return Math.abs(horizontalDistance) + Math.abs(verticalDistance);
  }

  estimatedTime(peak) {
    if (peak){
      return this.blocksTravelled()/2;
    }else{
      return this.blocksTravelled()/3;
    }
  }
};
