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
  constructor(name, date){
    this.name = name
    this.startDate = new Date(date)
  }

  yearsExperienceFromBeginningOf(endDate){
    return endDate - this.startDate.getFullYear()
  }
}

class Route{
  constructor (start, end){
    this.start = start
    this.end = end
  }

  blocksTravelled(){

    let vert = Math.abs(this.end.vertical - this.start.vertical)
    // debugger
    let horiz = Math.abs(
      eastWest.indexOf(this.end.horizontal) - eastWest.indexOf(this.start.horizontal))
    return vert + horiz
  }

  estimatedTime(peakBool){
    if (peakBool){
      return this.blocksTravelled() / 2
    }
    else {
      return this.blocksTravelled() / 3
    }
  }

}
