let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

class Driver {
  constructor(name, joinedOn){
    this.name = name;
    this.joinedOn = joinedOn;
    this.startDate = new Date(joinedOn)
  };

  yearsExperienceFromBeginningOf(year){
    return (year - this.startDate.getFullYear())
  };
};

class Route {

  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation
  };

  avenueConverter(ave){
     return eastWest.indexOf(ave)
  };

  blocksTravelled(){
    let horizontalDistance = this.avenueConverter(this.endingLocation.horizontal) - this.avenueConverter(this.beginningLocation.horizontal)
    let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical
    return (Math.abs(horizontalDistance) + Math.abs(verticalDistance))
  }

  estimatedTime(peak){
    if(peak){
      return this.blocksTravelled()/2
    }else{
      return this.blocksTravelled()/3
    }
  }
}
