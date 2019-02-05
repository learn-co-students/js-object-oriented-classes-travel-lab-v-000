let eastWest = [
    '1st Avenue',
    '2nd Avenue',
    '3rd Avenue',
    'Lexington Avenue',
    'Park',
    'Madison Avenue',
    '5th Avenue'
  ];

class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(n) {
    return parseInt(n, 10) - this.startDate.getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled () {
    let avenues = eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal)

    let streets = this.beginningLocation.vertical - this.endingLocation.vertical

    let blocks = Math.abs(avenues) + Math.abs(streets)
    return blocks
  }
  estimatedTime(peakHours){
    return peakHours ? this.blocksTravelled()/2 : this.blocksTravelled()/3
  }
}
