class Driver {
  constructor(name, date) {
    this.name = name;
    this.startDate = new Date(date);
  }

  yearsExperienceFromBeginningOf(year) {
    let start = this.startDate.getFullYear();
    let end = year;
    return end - start;
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {

    let diff = function(a, b) {
      return Math.abs(a - b);
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

    let horIndex = function (str) {
      return eastWest.indexOf(str);
    }

    let horIndexBegin = horIndex(this.beginningLocation.horizontal);
    let horIndexEnd = horIndex(this.endingLocation.horizontal);

    let horizontalBlocks = diff(horIndexBegin, horIndexEnd);

    let verticalBlocks = diff(this.beginningLocation.vertical, this.endingLocation.vertical);

    return horizontalBlocks + verticalBlocks;
  }
}