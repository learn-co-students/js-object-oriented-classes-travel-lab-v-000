class Driver {
  constructor(name, date) {
    this.name = name;
    this.startDate = new Date(date);
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()-1;
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

// beginningLocation.horizontal: '1st Avenue'
// beginningLocation.vertical: '34'
// endingLocation.horizontal: 'Park'
// endingLocation.vertical: '42'

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

    horizontalLocationToIndex(location) {
      return eastWest.indexOf(location);
    }

    

   }

}
