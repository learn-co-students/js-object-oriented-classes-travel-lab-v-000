
let eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver{
  constructor(name, startDate){
      this.name = name
      this.startDate = new Date(startDate)
      //lab wants the startDate to be set as a date object
  }
  yearsExperienceFromBeginningOf(year){
    //debugger
    return year - this.startDate.getFullYear()
  }
}

class Route{
  //the arguments passed into the iteration of a new route are objects that contain horizontal and vertical keys that can be abstracted using dot notation
  constructor(beginningLocation, endingLocation){
        this.beginningLocation = beginningLocation
        this.endingLocation =  endingLocation
  }

  //convert an avenue to its index
  avenueToInteger(avenue){
      return eastWest.indexOf(avenue)
  }

  blocksTravelled(){
      //this object will respond to methods and arguments/objects passed to it
      let horizontalDistance = this.avenueToInteger(this.endingLocation.horizontal) - this.avenueToInteger(this.beginningLocation.horizontal)
      //route.avenueToInteger(route.endingLocationOBJECT.horizontalARGUMENT)
      let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical

      return (Math.abs(horizontalDistance) + Math.abs(verticalDistance))
  }
  estimatedTime(peakActive){
      const peakDivisor = (typeof peakActive === "undefined") ? 3 : 2;
      return (this.blocksTravelled() / peakDivisor)
      //or
          //  if(peakActive){
          //      return this.blocksTravelled()/2
          //  } else{
          //    return this.blocks()/3
          //  }
  }

}
