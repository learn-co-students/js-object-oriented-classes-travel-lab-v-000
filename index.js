

class Driver {
	constructor(name, startDate) {
		this.name = name;
		this.startDate = new Date(startDate);
	}

	yearsExperienceFromBeginningOf(year){
		let todayDate = new Date(year, 0, 1);
		return (todayDate.getFullYear() - this.startDate.getFullYear());
	}
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
	}

	blocksTravelled(){
		let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
		let aveOne = eastWest.indexOf(this.beginningLocation.horizontal);
		let aveTwo = eastWest.indexOf(this.endingLocation.horizontal);
		let eastWestBlocks = aveTwo - aveOne;
		let northSouthBlocks = this.endingLocation.vertical - this.beginningLocation.vertical;
		return eastWestBlocks + northSouthBlocks;
	}

	estimatedTime(peak){
		if(peak)
			{return this.blocksTravelled() / 2} 
		else
			{return this.blocksTravelled() / 3}; 
	}
}