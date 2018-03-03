class Driver {
  constructor(name,date) {
    this.name = name
    this.startDate = new Date(date)
  }

  yearsExperienceFromBeginningOf(endDate) {
    return endDate - this.startDate.getFullYear()
  }
}

class Route {
  constructor(beginningLocation,endingLocation) {
    this.horizontal = beginningLocation
    this.vertical = endingLocation
  }

  blocksTravelled() {
    const vertical = Math.abs(this.horizontal.vertical - this.vertical.vertical)
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    const start = eastWest.indexOf(this.horizontal.horizontal)
    const end = eastWest.indexOf(this.vertical.horizontal)
    const horizontal = Math.abs(start - end)

    return horizontal + vertical
  }

  estimatedTime(optionalArg) {
    if (typeof optionalArg === "undefined") {
      const vertical = Math.abs(this.horizontal.vertical - this.vertical.vertical)
      let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
      const start = eastWest.indexOf(this.horizontal.horizontal)
      const end = eastWest.indexOf(this.vertical.horizontal)
      const horizontal = Math.abs(start - end)

      return (horizontal + vertical) / 3
    } else {
      const vertical = Math.abs(this.horizontal.vertical - this.vertical.vertical)
      let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
      const start = eastWest.indexOf(this.horizontal.horizontal)
      const end = eastWest.indexOf(this.vertical.horizontal)
      const horizontal = Math.abs(start - end)
      return (horizontal + vertical) / 2
      }
  }


}
