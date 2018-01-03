class Driver{
  constructor(name, date){
    this.name = name;
    this.startDate = new Date(date);
  }
  yearsExperienceFromBeginningOf(endDate){
    return endDate - this.startDate.getFullYear();
  }
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled(){
    const verticalDist = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    const horizontalDist = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal));
    return horizontalDist + verticalDist;
  }

estimatedTime (peak){
  if(peak){
    return this.blocksTravelled()/2;
  }else{
    return this.blocksTravelled()/3;
    }
  }
}
