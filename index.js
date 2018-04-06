class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(endYear){
    return endYear - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocationHorizontal = beginningLocation.horizontal;
    this.beginningLocationVertical = beginningLocation.vertical;
    this.endingLocationHorizontal = endingLocation.horizontal;
    this.endingLocationVertical = endingLocation.vertical;
  }

  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    let travelNorthSouth = Math.abs(this.beginningLocationVertical - this.endingLocationVertical);
    let travelEastWest = Math.abs(eastWest.indexOf(this.beginningLocationHorizontal) - eastWest.indexOf(this.endingLocationHorizontal))
    return travelNorthSouth + travelEastWest;
  }

  estimatedTime(peak){
    return peak ? this.blocksTravelled()/2 : this.blocksTravelled()/3;
  }
}
