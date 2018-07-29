class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year){
    return (year - this.startDate.getFullYear() -1)
  }
}

class Route {
  constructor(beginningLocation, endingLocation){
  this.beginningLocation = beginningLocation
  this.endingLocation = endingLocation
  }

  blocksTravelled(){
    const vs = this.beginningLocation.vertical
    const ve = this.endingLocation.vertical
    const hs = this.beginningLocation.horizontal === 'Park' ? 5 : 1
    const he = this.endingLocation.horizontal === 'Park' ? 5 : 1
    return (ve > vs ? ve - vs : vs - ve) + (he > hs ? he - hs : hs - he)
  }

  estimatedTime(peak = false){
      if(peak === true){
        return this.blocksTravelled() / 2
      }else{
        return this.blocksTravelled() / 3
      }
  }
}
