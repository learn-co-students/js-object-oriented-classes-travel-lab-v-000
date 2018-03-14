
class Driver {

  constructor(name, date) {
    this.name = name;
    this.startDate = new Date(date);
  }

  yearsExperienceFromBeginningOf(year){
    let experience = year - this.startDate.getFullYear()
    return experience
  }

}


class Route {

  constructor(beginningLocation, endingLocation) {
    this.start = beginningLocation;
    this.end = endingLocation;
  }

// let route = new Route({horizontal: 'Park', vertical: '34'}, {horizontal: 'Park', vertical: '45'})
  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    let vertical = parseInt(this.end.vertical) - parseInt(this.start.vertical);
    let horizontal = eastWest.indexOf(this.end.horizontal) - eastWest.indexOf(this.start.horizontal);
    return horizontal + vertical
  }


  estimatedTime(peakHours){
    // Returns number of minutes estimated for trip
    // 3 blocks per minute in off-peak hours
    // 2 blocks per minute in peak hours
    if (peakHours) {
      return this.blocksTravelled()/2
    } else {
      return this.blocksTravelled()/3
    }
  }
}
