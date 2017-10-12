
class Driver {
  constructor(name, startDate ){
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear() - 1;
  }
}

class Route{

  constructor (beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled () {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue',
      'Park', 'Madison Avenue', '5th Avenue']
    let begHorizontal = eastWest.indexOf(this.beginningLocation.horizontal)
    let begvertical = parseInt(this.beginningLocation.vertical) + 1

    let endHorizontal = eastWest.indexOf(this.endingLocation.horizontal)
    let endvertical = parseInt(this.endingLocation.vertical) + 1

    let hBlocksTravelled = 0
    let vBlocksTravelled = 0

    if (begHorizontal > endHorizontal) {
      hBlocksTravelled = begHorizontal - endHorizontal
    } else {
      hBlocksTravelled = endHorizontal - begHorizontal
    };

    if (begvertical > endvertical) {
      vBlocksTravelled = begvertical - endvertical
    } else {
      vBlocksTravelled = endvertical - begvertical
    }

    let total = hBlocksTravelled + vBlocksTravelled
    return total

  }



  estimatedTime(peakTime){
    return peakTime ? this.blocksTravelled()/2 : this.blocksTravelled()/3
  }

}
