class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(endDate){
    return endDate - this.startDate.getFullYear();
  }
}

class Route {
  constructor(startLoc, endLoc) {
    this.startLoc = startLoc;
    this.endLoc = endLoc;
  }

  blocksTravelled(){
    let vert = Math.abs(Number(this.endLoc.vertical) - Number(this.startLoc.vertical));
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    let hort = Math.abs(eastWest.indexOf(this.startLoc.horizontal) - eastWest.indexOf(this.endLoc.horizontal));
    return vert + hort;
  }

  estimatedTime(peak){
    let speed = 3;
    if (peak) {
      speed = 2;
    }
    return this.blocksTravelled() / speed;
  }

}
