class Driver {
	constructor(name, dateStarted) {
		this.name = name;
		this.startDate = new Date(dateStarted);
	}

	yearsExperienceFromBeginningOf(year) {
		const diff = new Date(`Jan 1, ${year}`) - this.startDate;
		const millisecsPerYear = 3.154e+10;
		return Math.round(diff/millisecsPerYear);
	} 
}

class Route {

	constructor(beginningLocation, endingLocation) {
		 this.beginning = beginningLocation;
		 this.ending = endingLocation;
	}

	blocksTravelled() {
		let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
		
		const northSouthDist = Math.abs(parseInt(this.ending.vertical, 10) - parseInt(this.beginning.vertical, 10));

		let beginningIndex = 0;
		let endingIndex = 0;
		eastWest.forEach(function(avenue, i, arr) {
			if (arr[i] === this.beginning.horizontal) {
				beginningIndex = i;
			}
			if (arr[i] === this.ending.horizontal) {
				endingIndex = i;
			}
		}, this);
		const eastWestDist = Math.abs(endingIndex -  beginningIndex);
		return northSouthDist + eastWestDist;
	}

	estimatedTime(peak = false) {

		const peakRate = 2;
		const offPeakRate = 3;

		if (peak) {
			return this.blocksTravelled() / peakRate;
		} else {
			return this.blocksTravelled() / offPeakRate;
		}
	}  
}






