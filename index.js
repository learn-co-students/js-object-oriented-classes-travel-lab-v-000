class Driver {
	constructor(name, startDate) {
		this.name = name;
		this.startDate = new Date(startDate);
	}

	yearsExperienceFromBeginningOf(year) {return year - this.startDate.getFullYear()};

	
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
	constructor(beginningLocation, endingLocation) {
		this.beginningLocation = beginningLocation;
		this.endingLocation = endingLocation;

	}

	blocksTravelled() {
		let vert = Math.abs((this.beginningLocation.vertical) - (this.endingLocation.vertical));
		let horiz1 = eastWest.findIndex(element => element === this.beginningLocation.horizontal)
		let horiz2 = eastWest.findIndex(element => element === this.endingLocation.horizontal)

		let horizdistance = Math.abs(horiz1 - horiz2)
		
		return vert + horizdistance;
	}

	estimatedTime(n) {

		let blocks = this.blocksTravelled();
		if(n === undefined) {
			return blocks/3
		} else {
			return blocks/2
		}
		
	}
}

