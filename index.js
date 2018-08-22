let eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name,startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    let endDate = new Date(year, 1, 1)
    let years = (endDate - this.startDate)/(365*24*60*60*1000)
    return parseInt(years)
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  avenueToInteger(avenue){
    return eastWest.indexOf(avenue)
  }

  blocksTravelled() {
    let horizontalDistance = this.avenueToInteger(this.endingLocation.horizontal) - this.avenueToInteger(this.beginningLocation.horizontal)
    let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical
    return (Math.abs(horizontalDistance) + Math.abs(verticalDistance))
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }



  } //ends estimated time
}
    // let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    // let beginHorizontal = this.beginningLocation.horizontal
    // let beginVeritcal = this.beginningLocation.vertical
    // let endHorizontal = this.endingLocation.horizontal
    // let endVertical = this.endingLocation.vertical
    // let beginHorizontalIndex = eastWest.indexOf(beginHorizontal)
    // let endHorizontalIndex = eastWest.indexOf(endHorizontal)
    //
    // if (beginHorizontal === endHorizontal) {
    //   if ( beginVeritcal > endVertical ) {
    //     return beginVeritcal - endVertical
    //     } else {
    //       return endVertical - beginVeritcal
    //     }
    // } else if (beginVeritcal === endVertical) {
    //
    //     if (beginHorizontalIndex > endHorizontalIndex) {
    //       return beginHorizontalIndex - endHorizontalIndex
    //     } else {
    //       return endHorizontalIndex  - beginHorizontalIndex
    //     }
    // } else {
    //   if (beginHorizontalIndex > endHorizontalIndex) {
    //     const totalHorizontal = beginHorizontalIndex - endHorizontalIndex
    //   } else {
    //      const totalHorizontal = endHorizontalIndex  - beginHorizontalIndex
    //   }
    //   if ( beginVeritcal > endVertical ) {
    //     const totalVertical = beginVeritcal - endVertical
    //     } else {
    //     const totalVertical = endVertical - beginVeritcal
    //     }
    //     return totalVertical + totalHorizontal
    // }
