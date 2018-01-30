class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }
  
  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }
  
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  
  }
  
  blocksTravelled() {
    let startIdx = eastWest.indexOf(this.beginningLocation['horizontal'])
    let endIdx = eastWest.indexOf(this.endingLocation['horizontal'])
    
    let vertical = Math.abs(this.endingLocation['vertical'] - this.beginningLocation['vertical'])
    
    return Math.abs(endIdx - startIdx) + vertical
  }
  
  estimatedTime(peakHours) {
    return peakHours ? this.blocksTravelled() / 2 : this.blocksTravelled() / 3
  }
  
  
}