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
        this.startDate = new Date( day) 
    }
    yearsExperienceFromBeginningOf( year ) {
        let endDate = new Date( year, 1, 1 );
        let totalYears = ( endDate - this.startDate ) / ( 365 * 24 * 60 * 60 * 1000 );
        return parseInt( totalYears );
      }

}

class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation
        this.endingLocation = endingLocation
    }
    //get the index of the avenue 
    avenueToInteger( avenue ) {
        return eastWest.indexOf( avenue );
      }
      //sample location is { horizontal: 'Park', vertical: '34' }
    blocksTravelled() {
        let horizontalDistance =
        //get the index of the starting location for travel across avenues 
          this.avenueToInteger( this.endingLocation.horizontal ) -
          this.avenueToInteger( this.beginningLocation.horizontal );
        let verticalDistance =
        //just subtract one street number for the other
          this.endingLocation.vertical - this.beginningLocation.vertical;
        return Math.abs( horizontalDistance ) + Math.abs( verticalDistance );
      }
      estimatedTime( peak ) {
        if ( peak ) {
          return this.blocksTravelled() / 2;
        } else {
          return this.blocksTravelled() / 3;
        }
      }

}
