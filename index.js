class Driver {
  constructor (name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    return year - (this.startDate.getFullYear()+1);
  }
}

class Route {
  constructor (beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let d1 = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
find beginning horizontal in east West
find ending horizontal in east West
and abs the difference
  //  let route = new Route({horizontal: 'Park', vertical: '34'}, {horizontal: 'Park', vertical: '45'})
  //  expect(route.blocksTravelled()).to.equal(11)
  }
}
