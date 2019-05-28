let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
	constructor (name, startDate){
		this.name = name;
		this.startDate = new Date(startDate);
	}

	yearsExperienceFromBeginningOf(year) {
		return year - this.startDate.getFullYear()
	}
}

class Route {
	constructor (beginningLocation, endingLocation){
		this.beginningLocation = beginningLocation;
		this.endingLocation = endingLocation;
	}

	blocksTravelled(){
		return Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical) + 
					 Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal));
	}

	estimatedTime(peak){
		let blocksPerMinute = peak ? 2 : 3;
		return this.blocksTravelled() / blocksPerMinute;
	}
}

