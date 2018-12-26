class Driver {
	constructor(name, startDate) {
		this.name = name;
		this.startDate = new Date(startDate);
	}

	yearsExperienceFromBeginningOf(year) {
    console.log(year)
    console.log(this.startDate.getFullYear())
		return year - this.startDate.getFullYear();
	}
}

class Route {
	constructor(beginningLocation, endingLocation) {
		this.beginningLocation = beginningLocation;
		this.endingLocation = endingLocation;
	}

	blocksTravelled() {
		let avenues = [
		  '1st Avenue',
		  '2nd Avenue',
		  '3rd Avenue',
		  'Lexington Avenue',
		  'Park',
		  'Madison Avenue',
		  '5th Avenue'
		];
    console.log(this.beginningLocation.vertical);
    console.log(this.endingLocation.vertical);
    console.log(Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical));
		const northSouth =  Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    console.log(avenues.indexOf(this.beginningLocation.horizontal));
    console.log(avenues.indexOf(this.endingLocation.horizontal));
    console.log(Math.abs(avenues.indexOf(this.beginningLocation.horizontal) - avenues.indexOf(this.endingLocation.horizontal)));
		const eastWest = Math.abs(avenues.indexOf(this.beginningLocation.horizontal) - avenues.indexOf(this.endingLocation.horizontal));
    console.log(northSouth);
    console.log(eastWest);
		return northSouth + eastWest;
	}
  estimatedTime(peak) {
    console.log(peak)
 		if (peak === true) {
      console.log(this.blocksTravelled())
 			return this.blocksTravelled() / 2;
 		}
 		else {
      console.log(this.blocksTravelled())
 			return this.blocksTravelled() / 3;
 		}
 	}
}
