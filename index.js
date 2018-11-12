class Driver {
	constructor(name, day){
		this.name = name;
		this.startDate = new Date(day);
	}
	
	yearsExperienceFromBeginningOf(year){
		return year - this.startDate.getFullYear();
	};
}

class Route {
	constructor(beginningLocation, endingLocation){
		this.beginningLocation = beginningLocation;
		this.endingLocation = endingLocation;
	}
	blocksTravelled(){
		let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
		let northSouthTraveled = this.endingLocation.vertical - this.beginningLocation.vertical;
		let horizEnd = eastWest.indexOf(this.endingLocation.horizontal);
		let horizStart = eastWest.indexOf(this.beginningLocation.horizontal);
		let eastWestTraveled = horizEnd - horizStart;
		return northSouthTraveled + eastWestTraveled;
	};
	estimatedTime(peak){
		if (peak) {
			return this.blocksTravelled() / 2;
		} else
			return this.blocksTravelled() / 3;
	};
}
