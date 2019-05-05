let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver{
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear();
  }

}

class Route{
  constructor(start, end){
    this.start = start
    this.end = end
  }

  blocksTravelled(){
    let vertical = this.end.vertical - this.start.vertical
    let horizontal = eastWest.indexOf(this.end.horizontal) - eastWest.indexOf(this.start.horizontal)
    return vertical + horizontal;
  }

  estimatedTime(peak){
    if(peak === true){
      return this.blocksTravelled() / 2
    }
    else{
      return this.blocksTravelled() / 3
    }
  }
}
