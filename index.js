let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver{
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endDate){
    return endDate - this.startDate.getFullYear();
  }
}

class Route{
  constructor(beginningLocation , endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation =  endingLocation
  }

  findIndexEastWest(avenue){
    return eastWest.indexOf(avenue)
  }

  blocksTravelled(){
    let start = this.findIndexEastWest(this.beginningLocation.horizontal)
    let end = this.findIndexEastWest(this.endingLocation.horizontal)
    return (this.endingLocation.vertical - this.beginningLocation.vertical) + (end - start)
  }


  estimatedTime(peak_hours){
    if(peak_hours){
      return this.blocksTravelled()/2
    }else{
      return this.blocksTravelled()/3
    }
  }

}
