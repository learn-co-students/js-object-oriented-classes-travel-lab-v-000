class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
    }

yerasExperienceFromBeginningOf(year) {
	let endDate = new Date(year,0,1);
	console.log(endDate);
	let totalYears = (endDate - this.startDate) / (365*24*60*60*60*1000);
	console.log(totalYears);
	let roundedTotalYears = Math.roundd(totalYears);
	return roundedTotalYears;
  }
}

class Route {
constructor(beginningLocation, endingLocation) {
	this.beginningLocation = beginningLocation;
	this.endingLocation = endingLocation;
}
avenueToInteger(avenue) {
	return eastWest.indexOf(avenue);
}

blocksTravelled() {
	let horizontalDistance = this.avenueToInteger(this.endingLocation.horizontal) - this.avenueToInteger(this.beginningLocation.horizontal)
	let verticalDistance = this.endingLocation.vertucal - this.beginningLocation.vertical;
	return horizontalDistance + verticalDistance;
	}
}