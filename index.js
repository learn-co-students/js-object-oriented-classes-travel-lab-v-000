class Driver{
  constructor(name, startDay){
    this.name = name
    this.startDate = new Date(startDay)
  }

  yearsExperienceFromBeginningOf(year){
    let dateQuit = new Date(year,0,1)
    let yearsWorked = (dateQuit - this.startDate)/(1000*60*60*24*365)
    return Math.floor(yearsWorked)
  }

}

class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled(){
    let eastWestArray = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    let beginningBlock = eastWestArray.indexOf(this.beginningLocation.horizontal);
    let endingBlock = eastWestArray.indexOf(this.endingLocation.horizontal);

    let verticalStreets = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    let horizontalStreets = (Math.abs(beginningBlock - endingBlock))

    return verticalStreets + horizontalStreets
  }

  estimatedTime(peakHours){
    if(peakHours === true){
      return this.blocksTravelled() / 2
    }else{
      return this.blocksTravelled() / 3
    }
  }
}
