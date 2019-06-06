class Driver {
	constructor(name, startDate) {
		this.name = name;
		this.startDate = new Date(startDate);
	}

	yearsExperienceFromBeginningOf(year) {
		let end = new Date(year)
		let endDate = end.getFullYear();
		let start = this.startDate.getFullYear();
		return (endDate +1) - start;
	}

}

class Route {
	constructor(beginningLocation, endingLocation) {
		this.beginningLocation = beginningLocation;
		this.endingLocation = endingLocation;
	}

	blocksTravelled() {
		let eastWest = [
  		'1st Avenue',
  		'2nd Avenue',
  		'3rd Avenue',
  		'Lexington Avenue',
  		'Park',
  		'Madison Avenue',
  		'5th Avenue'
		];
		
		var verticalBlocksTravelled;
		var horizontalBlocksTravelled;

		if(this.endingLocation.vertical > this.beginningLocation.vertical) {
			verticalBlocksTravelled = this.endingLocation.vertical - this.beginningLocation.vertical;
		} else {
			verticalBlocksTravelled = this.beginningLocation.vertical - this.endingLocation.vertical;
		}

		let firstHorizontalBlock = this.beginningLocation.horizontal;
		let secondHorizontalBlock = this.endingLocation.horizontal;
		let firstIndex = eastWest.findIndex(element => element === firstHorizontalBlock);
		let secondIndex = eastWest.findIndex(element => element === secondHorizontalBlock);
		
		if(firstIndex > secondIndex) {
			horizontalBlocksTravelled = (firstIndex + 1) - (secondIndex +1);
		} else {
			horizontalBlocksTravelled = (secondIndex +1) - (firstIndex + 1);
		}

		return verticalBlocksTravelled + horizontalBlocksTravelled
	}

	estimatedTime(isPeakTime) {
		if(isPeakTime) {
			return this.blocksTravelled() / 2;
		} else {
			return this.blocksTravelled() /3;
		}
	}
}
