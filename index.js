
class Driver { //opens driver
  constructor(name, startDate) {
this.name = name;
this.startDate = new Date (startDate)
  }

  yearsExperienceFromBeginningOf(year){
    let endDate = new Date(year, 1, 1)
    let totalYears = (endDate - this.startDate)/(365*24*60*60*1000)
    return parseInt(totalYears)
  } // closes yearsExperienceFromBeginningOf

} //closes driver


class Route { //opens route
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
  avenueToInteger(avenue){
    return eastWest.indexOf(avenue)} //returns avenue as a number.

blocksTravelled(){
  let horizontalDistance = this.avenueToInteger(this.endingLocation.horizontal) - this.avenueToInteger(this.beginningLocation.horizontal)
     let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical
     return (Math.abs(horizontalDistance) + Math.abs(verticalDistance))
} // closes blocksTravelled

estimatedTime(peak){
  if(peak){
    return this.blocksTravelled()/2 // estimates time in minutes, with travel time of 2 blocks in a minute
  } else {
    return this.blocksTravelled()/3} // estimates time in minutes, with travel time of 3 blocks in a minute
} // closes estimatedTime

} //closes route

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
