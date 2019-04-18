let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];



class Driver {
  constructor(name, day) {
    this.name = name
    this.startDate = new Date(day)
  }

  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear()
  }

}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  horizontalStreet(street) {
    return eastWest.indexOf(street)
  }


  blocksTravelled() {
    let vertical
    let horizontal
    if (this.beginningLocation.vertical >= this.endingLocation.vertical) {
       vertical = this.beginningLocation.vertical - this.endingLocation.vertical
    }
    else if (this.beginningLocation.vertical < this.endingLocation.vertical) {
       vertical = this.endingLocation.vertical - this.beginningLocation.vertical
    }
    if (this.horizontalStreet(this.beginningLocation.horizontal) >= this.horizontalStreet(this.endingLocation.horizontal)) {
       horizontal = this.horizontalStreet(this.beginningLocation.horizontal) - this.horizontalStreet(this.endingLocation.horizontal)
    }
    else if (this.horizontalStreet(this.beginningLocation.horizontal) < this.horizontalStreet(this.endingLocation.horizontal)) {
       horizontal = this.horizontalStreet(this.endingLocation.horizontal) - this.horizontalStreet(this.beginningLocation.horizontal)
    }
      return vertical + horizontal
    }


  estimatedTime(peak) {
    if ( peak ) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }

}
