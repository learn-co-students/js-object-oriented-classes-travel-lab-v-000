class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endDate) {
    return endDate - this.startDate.getUTCFullYear()
  }
}

class Route {
  constructor(location1, location2) {
    this.location1 = location1
    this.location2 = location2
  }

  blocksTravelled() {
    const vertical = Math.abs(this.location1.vertical - this.location2.vertical)
    const horizontal = () => {
      if (this.location1.horizontal === this.location2.horizontal) {
        return 0
      } else {
        return 4
      }
    }
    return vertical + horizontal()
  }

  estimatedTime(rushHour) {
    if (rushHour) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }
}
