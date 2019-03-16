class Driver {
  constructor(name, joinDate){
    this.name = name
    this.joinDate = joinDate
    this.startDate = new Date(this.joinDate)
  }
    yearsExperienceFromBeginningOf(input){
      return input - this.startDate.getFullYear()
    }
  }
  let eastWest = [
    '1st Avenue',
    '2nd Avenue',
    '3rd Avenue',
    'Lexington Avenue',
    'Park',
    'Madison Avenue',
    '5th Avenue'
  ];
class Route {
  constructor(beginningLocation,endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

blocksTravelled(){

let output = 0
output = this.beginningLocation.vertical - this.endingLocation.vertical
if (output < 0){output = output * -1}
let horizontal = eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal)
if (horizontal < 0){horizontal = horizontal * -1}
output += horizontal
return output
}

estimatedTime(peak){
  if (!peak) {return this.blocksTravelled() /3}
  else {return this.blocksTravelled() /2}
}


}
