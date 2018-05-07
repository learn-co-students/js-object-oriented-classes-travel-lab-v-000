class Driver {
  constructor(name, date){
    this.name = name
    this.startDate = new Date(date)
  }

  yearsExperienceFromBeginningOf(year){
    return Math.abs(year - this.startDate.getFullYear())
  }
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  convertToNumbers(obj){
    let numberValues = {}
    switch(obj.horizontal){
      case '1st Avenue':
        numberValues["horizontal"] = 1
        break;
      case '2nd Avenue':
        numberValues["horizontal"] = 2
        break;
      case "3rd Avenue":
        numberValues["horizontal"] = 3
        break;
      case "Lexington":
        numberValues["horizontal"] = 4
        break;
      case "Park":
        numberValues["horizontal"] = 5
        break;
      case "Madison":
        numberValues["horizontal"] = 6
        break;
      case "5th Avenue":
        numberValues["horizontal"] = 7
        break;
    }
    numberValues["vertical"] = parseInt(obj.vertical)
    return numberValues
  }

    blocksTravelled(){
      const start = this.convertToNumbers(this.beginningLocation)
      const finish = this.convertToNumbers(this.endingLocation)

      return (Math.abs(start.horizontal - finish.horizontal)) + (Math.abs(start.vertical - finish.vertical))
    }

    estimatedTime(peak = false){
    return peak ? this.blocksTravelled() / 2 : this.blocksTravelled() / 3
    }

}
