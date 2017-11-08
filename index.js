class Driver {
	constructor(name,startDate) {
		this.name = name;
		this.startDate = new Date(startDate);
	};
	yearsExperienceFromBeginningOf(year) {
		return year - this.startDate.getFullYear() - 1	
	};
};

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
	constructor(beginningLocation,endingLocation) {
		this.beginningLocation = beginningLocation;
		this.endingLocation = endingLocation;
	};
	avenueToInt(avenue) {
		return eastWest.indexOf(avenue);
	};
	blocksTravelled() {
		let horizontal = this.avenueToInt(this.beginningLocation.horizontal) - this.avenueToInt(this.endingLocation.horizontal);
		let vertical = this.beginningLocation.vertical - this.endingLocation.vertical;
		return Math.abs(horizontal) + Math.abs(vertical);
	};
	estimatedTime(peak) {
		if(peak) {
			return this.blocksTravelled()/2;
		} else {
			return this.blocksTravelled()/3;
		};
	};
};
