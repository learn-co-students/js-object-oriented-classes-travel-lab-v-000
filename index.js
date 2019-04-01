class Driver{
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(endDate){
    return endDate - this.startDate.getFullYear();
  }
}

class Route{
  constructor(beginningLocation,endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled(){
   let eastWest = [
    '1st Avenue','2nd Avenue','3rd Avenue',
    'Lexington Avenue','Park','Madison Avenue',
    '5th Avenue'
  ];
//indexOf points to the array location. So we know the 2nd avenue will be on the 2nd index but because arrays start at 0 we add+1
//then we grab the vertical location

  let horizontal = (eastWest.indexOf(this.endingLocation.horizontal) + 1) - (eastWest.indexOf(this.beginningLocation.horizontal) + 1);
  let vertical = this.endingLocation.vertical - this.beginningLocation.vertical;

    return horizontal + vertical;

  }

  estimatedTime(peak){
    if (peak){
       return this.blocksTravelled()/2 ;
    } else {
       return this.blocksTravelled() * (1/3);
    }

  }
}
