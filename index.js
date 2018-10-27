class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)     //to create a new Date object
    //console.log(this.startDate)
  }

  //yearsExperienceFromBeginningOf(year) {
  //  return year - this.startDate.getUTCFullYear() - 1
  //}

  //or can do Learn solution which actually takes it back to the beginning of the year
  yearsExperienceFromBeginningOf(year) {
    let endDate = new Date(year, 0, 1)           //this will make endDate jan 1st of argument year
    let totalYears = (endDate - this.startDate) /  //gives answer in millisecs so you have
    (365 * 24 * 60 * 60 * 1000)                   // to divide by # millisecs per year(days * hours * min * sec * millisecs)
    //console.log(totalYears)
  return Math.floor(totalYears)                 //Math.floor removes the decimal & just leaves full years
  }
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue',
  'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
  constructor(beginningLocation, endingLocation) { //both args are objects w/horizontal & vertical attributes
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    let horizontalDistance = eastWest.indexOf(this.endingLocation.horizontal) -  //use index of eastWest array
    eastWest.indexOf(this.beginningLocation.horizontal);

    let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical   //vertical can just be subtracted
    return horizontalDistance + verticalDistance              //add horizontal & vertical distances
  }

  estimatedTime(peak) {                     //whether or not peak time is fed in
    if (peak) {
      return this.blocksTravelled() / 2      //use return value from above function to get time
    } else {
    return this.blocksTravelled() / 3
    }
  }

}
