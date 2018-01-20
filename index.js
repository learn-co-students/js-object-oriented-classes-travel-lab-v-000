class Driver {
  constructor (name, date) {
    this.name = name
    this.startDate = new Date(date)
  }

  yearsExperienceFromBeginningOf(year) {
    let now = new Date(year, 1, 1)
    let difference = (now- this.startDate)/(365*24*60*60*1000) + 1
    return parseInt(difference)
  }
}

class Route {
  constructor (beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let endAvenue = eastWest.indexOf(`${this.endingLocation.horizontal}`)
    let startAvenue = eastWest.indexOf(`${this.beginningLocation.horizontal}`)
    let distance = (endAvenue - startAvenue) + (parseInt(`${this.endingLocation.vertical}`) - parseInt(`${this.beginningLocation.vertical}`))
    return distance
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled()/2
    }
    else {
      return this.blocksTravelled()/3
    }
  }
}
