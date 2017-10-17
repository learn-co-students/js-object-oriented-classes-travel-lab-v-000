class Driver {
  constructor (name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    return Math.floor((new Date(year, 0) - this.startDate)/(1000*60*60*24*365.25))
  }
}

class Route {
  constructor (beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    let verticalDist = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical)
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let end = eastWest.findIndex(street => street == this.endingLocation.horizontal);
    let start = eastWest.findIndex(street => street == this.beginningLocation.horizontal);
    let horizontalDist = (Math.abs(end-start))
    let totalDist = horizontalDist + verticalDist
    return totalDist
    }

    estimatedTime(peak) {
     return peak ? Math.round((this.blocksTravelled()*.5)) : Math.round((this.blocksTravelled()*.333))
    }

  }
