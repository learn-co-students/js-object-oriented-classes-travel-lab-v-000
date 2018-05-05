let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, start) {
    this.name = name;
    this.startDate = new Date(start)
  }

  yearsExperienceFromBeginningOf(year) {
    let end = new Date(year, 1, 1)
    let years = (end - this.startDate)/(365*24*60*60*1000)
    return parseInt(years)
  }
  
}

class Route {
  constructor(beg, end) {
    this.beginningLocation = beg;
    this.endingLocation = end;
  }

  avenueToInt(ave) {
    return eastWest.indexOf(ave)
  }

  blocksTravelled(){
    let horiz = this.avenueToInt(this.endingLocation.horizontal) - this.avenueToInt(this.beginningLocation.horizontal)
    let vert = this.endingLocation.vertical - this.beginningLocation.vertical;
    return vert + horiz;
  }  

  estimatedTime(peak){
    if (peak) {
      return this.blocksTravelled()/2
    } else {
      return this.blocksTravelled()/3
    }
  }
}


