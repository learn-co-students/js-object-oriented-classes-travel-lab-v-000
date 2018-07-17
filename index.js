class Driver {
  constructor(name,stringDate){
    this.name = name;
    this.startDate = new Date(stringDate);
  }

  yearsExperienceFromBeginningOf(endDate){
    return endDate - this.startDate.getUTCFullYear();
  }

}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  horizontalToInt(street){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    return eastWest.indexOf(street);
  }

  blocksTravelled(){
    let horizontalDist = this.horizontalToInt(this.endingLocation.horizontal) - this.horizontalToInt(this.beginningLocation.horizontal);
    let verticalDist = this.endingLocation.vertical - this.beginningLocation.vertical;
    return (Math.abs(horizontalDist) +  Math.abs(verticalDist))
  }

  estimatedTime(peak){
    if(peak){
      return this.blocksTravelled()/2
    } else {
      return this.blocksTravelled()/3
    }
  }
}