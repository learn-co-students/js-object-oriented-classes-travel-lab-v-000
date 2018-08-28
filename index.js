class Driver{
  constructor(name, startDate){
  this.name = name
  this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(){
    return new Date().getFullYear() - this.startDate.getFullYear() - 2
  }
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  getEastWestIndex(location){
   let eastWIndex = 0
   let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
   eastWIndex = eastWest.indexOf(location.horizontal)
   return  eastWIndex
 }

  blocksTravelled(){
  let northSBegin = 0
   let northSEnd = 0
   let northSouth = 0

   let eastWBegin = 0
   let eastWEnd = 0
   let eastWest = 0

   northSBegin = this.beginningLocation.vertical
   northSEnd = this.endingLocation.vertical
   northSouth = (northSBegin > northSEnd)? northSBegin - northSEnd : northSEnd - northSBegin

   eastWBegin = this.getEastWestIndex(this.beginningLocation)
   eastWEnd = this.getEastWestIndex(this.endingLocation)
   eastWest = (eastWBegin > eastWEnd)? eastWBegin - eastWEnd : eastWEnd - eastWBegin

   return northSouth + eastWest
  }

  estimatedTime(peak){
    if (!peak ){
      return this.blocksTravelled()/3}
    else
      if (peak){
     return this.blocksTravelled() / 2
   }

  }
}
