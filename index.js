class Driver {
  constructor(name, dayJoined){
    this.name = name
    this.startDate = new Date(dayJoined)
  }


  yearsExperienceFromBeginningOf(year) {
    const endYear = new Date(year, 1, 1, )
    const elapsedTime = endYear.getYear() - (this.startDate.getYear() +1)
    return elapsedTime
  }
}


class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    function aveToCoordinate(name){
      let coordinate = eastWest.findIndex(function(el) {
        return el === name
      })
      return coordinate
    }
    const xBegin = aveToCoordinate(this.beginningLocation.horizontal)
    const xEnd = aveToCoordinate(this.endingLocation.horizontal)

    const yBegin = this.beginningLocation.vertical
    const yEnd = this.endingLocation.vertical

    const xTravel =  Math.abs(xBegin - xEnd)

    const yTravel = Math.abs(yBegin - yEnd)

    return xTravel + yTravel
  }

  estimatedTime(peakHours){
    let duration
    if(peakHours === true){
      duration = this.blocksTravelled() / 2
    } else {
      duration = this.blocksTravelled()/ 3
    }
    return duration
  }


 }
