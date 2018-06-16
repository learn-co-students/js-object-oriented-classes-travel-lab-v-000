class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(endDate){
    return endDate - this.startDate.getFullYear()
  }
}

class Route {

  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

    const begVertLocation = Object.entries(this)[0][1].vertical
    const endVertLocation = Object.entries(this)[1][1].vertical
    const begHoriLocation = Object.entries(this)[0][1].horizontal
    const endHoriLocation = Object.entries(this)[1][1].horizontal

    const verticalDistance = Math.abs(Number(begVertLocation) - Number(endVertLocation))

    const horizantalDistance = Math.abs(eastWest.indexOf(begHoriLocation) - eastWest.indexOf(endHoriLocation))


    return verticalDistance + horizantalDistance

  }

  estimatedTime(peak = false){
    if (peak === true){
      return this.blocksTravelled()/2 }
    else {
      return this.blocksTravelled()/3 }


  }
}
