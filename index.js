class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(year) {
    let calcYear = this.startDate
    let test = calcYear.getFullYear()
    return (year - test - 1)
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let vert = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    let hor = eastWest.indexOf(this.beginningLocation.horizontal) + 1 - eastWest.indexOf(this.endingLocation.horiztonal) + 1

    if (this.beginningLocation.horizontal === this.endingLocation.horizontal) {
    return vert
    }
    return hor + vert + 1
  }

  estimatedTime(peak) {
     return (peak ? this.blocksTravelled() /2 : this.blocksTravelled() / 3);
   }
}
