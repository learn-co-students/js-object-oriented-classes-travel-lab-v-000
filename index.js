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
      return endDate - this.startDate.getFullYear();
    }
}

class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  verticalBlocksTravelled(){
    return Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
  }

  horizontalBlocksTravelled(){
     return Math.abs(this.eastWestToInt(this.endingLocation.horizontal) - this.eastWestToInt(this.beginningLocation.horizontal));
   }

  eastWestToInt(ave){
    return eastWest.indexOf(ave);
  }

  blocksTravelled(){
      return this.verticalBlocksTravelled() + this.horizontalBlocksTravelled();
  }

  estimatedTime(peak){
    if (peak){
      return this.blocksTravelled()/2;
    } else {
    return this.blocksTravelled()/3;
  }
  }

}
