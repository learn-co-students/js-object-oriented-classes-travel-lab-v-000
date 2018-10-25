class Driver {
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }
    yearsExperienceFromBeginningOf(endYear){
      return endYear - this.startDate.getFullYear()
    }
};

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  horizontalDistance(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue','Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let endAve = eastWest.indexOf(this.endingLocation.horizontal)
    let startAve = eastWest.indexOf(this.beginningLocation.horizontal)
    return Math.abs(endAve - startAve)
  }

  verticalDistance(){
    let endStreet = this.endingLocation.vertical
    let startStreet = this.beginningLocation.vertical
    return Math.abs(endStreet - startStreet)
  }

  blocksTravelled(){return this.horizontalDistance() + this.verticalDistance()}

  estimatedTime(peak){
    let time
      peak ? time = this.blocksTravelled() /2 : time = this.blocksTravelled()/3
    return time
  }
};
