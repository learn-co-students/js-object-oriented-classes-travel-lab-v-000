
class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endDate){
    return Number(endDate) - this.startDate.getFullYear()
  }
}

let aveArr = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'];

class Route {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  blocksTravelled(){
    var eastwest = aveArr.indexOf(this.y.horizontal) - aveArr.indexOf(this.x.horizontal)
    var northsouth = Number(this.y.vertical) - Number(this.x.vertical)
    return eastwest + northsouth
  }

  estimatedTime(bool){
    if (bool === true){
      return this.blocksTravelled() / 2
    }
    else {
      return this.blocksTravelled() / 3
    }
  }
}
