class Driver {
  constructor(name, startDate) {
    this.name = name;
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    // Errors if a[dditional] zero is placed in front of 2nd and 3rd arguments
    const now = new Date(year, 0, 1);
    // https://www.w3resource.com/javascript-exercises/javascript-date-exercise-49.php
    const seconds = (now.getTime() - this.startDate.getTime()) / 1000;
    const days = seconds / (60 * 60 * 24);
    return Math.abs(Math.round(days / 365.25));
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let blocks = 0;
    const end = this.endingLocation;
    const start = this.beginningLocation;
    // To calculate the distance of avenues travelled, you will need to know
    // the names and order of avenues in New York City. You can use the
    // following array to help with your calculation:
    const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue',
                    'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    const horizontal = Math.abs(eastWest.indexOf(end.horizontal) - eastWest.indexOf(start.horizontal));
    // To calculate the distance of in streets, you can use subtraction (eg.
    // 13th street to 10th street is three blocks).
    const vertical = Math.abs(end.vertical - start.vertical)
    blocks = blocks + (horizontal + vertical);
    // returns an integer with the number of blocks travelled
    return blocks;
  }

  estimatedTime(peak = false) {
    if (peak) {
      return this.blocksTravelled() / 2;
    }
    return this.blocksTravelled() / 3;
  }
}
