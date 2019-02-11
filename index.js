

class Driver {
    constructor(name, startDate){
        this.name = name 
        this.startDate = new Date (startDate)
    }
    yearsExperienceFromBeginningOf(year){
        return year - this.startDate.getFullYear()
    }
}

class Route {
    constructor(start, end) {
      this.start = start
      this.end = end
    }
  
    blocksTravelled() {
      let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
      let eastWestDistance;
      let northSouthDistance;
  
      let startVertical = parseInt(this.start["vertical"])
      let endVertical = parseInt(this.end["vertical"])
  
      if (this.start["horizontal"] > this.end["horizontal"]) {
        eastWestDistance = (eastWest.indexOf(this.start["horizontal"]) + 1) - (eastWest.indexOf(this.end["horizontal"]) + 1)
      } else {
        eastWestDistance = (eastWest.indexOf(this.end["horizontal"]) + 1) - (eastWest.indexOf(this.start["horizontal"]) + 1)
      }
  
      if (startVertical > endVertical){
        northSouthDistance = startVertical - endVertical
      } else {
        northSouthDistance = endVertical - startVertical
      }
  
      return eastWestDistance + northSouthDistance
    }
  
    estimatedTime(peakHours) {
      if(peakHours) {
        return this.blocksTravelled() / 2
      } else {
        return this.blocksTravelled() / 3
      }
    }
  }




