class Driver{
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear() -1;
  }
}

class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled(){
    let vert = this.beginningLocation.vertical - this.endingLocation.vertical;
    if (vert < 0) {
      vert = vert * -1;
    }
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    let horz = eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal);
    if (horz < 0) {
      horz = horz * -1;
    }
    return vert + horz;
  }

  estimatedTime(peak){
    let distance = this.blocksTravelled();
    if (peak){
      return distance / 2;
    } else {
      return distance / 3;
    }
  }
}
