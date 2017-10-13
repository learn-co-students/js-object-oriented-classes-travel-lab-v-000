
class Driver {
	constructor (name, startDate) {
		this.name = name;
		this.startDate = new Date(startDate);
	}

	yearsExperienceFromBeginningOf(endYear){
		return endYear - this.startDate.getFullYear() - 1;
	}
}

class Route {
	constructor (beginningLocation, endingLocation) {
		this.beginningLocation = beginningLocation;
		this.endingLocation = endingLocation;
	}

	blocksTravelled () {
		let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

		let horizonalBlksTravelled = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal));

		let verticalBlksTravelled = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);

		return horizonalBlksTravelled + verticalBlksTravelled;

	}

	estimatedTime(peakHour = false) {
		if (peakHour) {
			return this.blocksTravelled()/2
		} else {
			return this.blocksTravelled()/3
		}
	}

}

