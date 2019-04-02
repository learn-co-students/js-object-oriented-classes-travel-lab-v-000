class Driver {

  constructor(name, startDate) {
      this.name = name;
      this.startDate = new Date(startDate);
    }

    yearsExperienceFromBeginningOf(endDate) {
      let eDate = new Date(endDate)
      let total = new Date(endDate) - this.startDate
      return Math.floor(total/31536000000)
    }

}


class Route {

  constructor(start, end) {
      this.beginningLocation = start;
      this.endingLocation = end;
    }


  blocksTravelled() {

    function begIn(element, index, array) {
        if (element === this.beginningLocation.horizontal) {
          return index
        }
    }

    function endIn(element, index, array) {
        if (element === this.endingLocation.horizontal) {
          return index
        }
    }

    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

    var beginingIndex = eastWest.findIndex(begIn, this)

    if (beginingIndex < 0){
      var beginingIndex = 0
    }

    let endingIndex = eastWest.findIndex(endIn, this)

    let eastWestBlocks = Math.abs(beginingIndex - endingIndex)
    let northSouthBlocks = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical)
    return eastWestBlocks + northSouthBlocks

  }


  estimatedTime(isPeak) {

    if(isPeak === true) {
      return Math.round(this.blocksTravelled() / 2)
    } else {
      return this.blocksTravelled() / 3
    }
  }






}
