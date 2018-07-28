class Driver{
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year){
    return (year - 1) - this.startDate.getFullYear()
  }
}


class Route{
  constructor(beginningLocation, endingLocation){
     this.beginningLocation = beginningLocation
     this.endingLocation = endingLocation

  }

  blocksTravelled(){
    let startHorizontal  = this.beginningLocation.horizontal
    let startVertical = this.beginningLocation.vertical
    let endHorizontal  = this.endingLocation.horizontal
    let endVertical = this.endingLocation.vertical

    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

    let startTotal = 0
    let start = eastWest.indexOf(startHorizontal)
    let endTotal = Math.abs(parseInt(endVertical) - parseInt(startVertical))
      for (var i = 0; i< eastWest.length; i++ ){
        if (eastWest[i] == endHorizontal){
          startTotal += i - start
        }
      }
      return startTotal + endTotal
      }


      estimatedTime(boolean){
        if (boolean === true){
          return Math.floor(this.blocksTravelled()/ 2)
        } else {
        return Math.floor(this.blocksTravelled()/ 3)
        }
      }


}
