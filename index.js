class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
 
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
 
class Teacher extends User {
  sayHello(){
    console.log('hello')
  }
}

class Driver {
	constructor (name, startDate) {
		this.name = name;
		this.startDate = new Date(startDate);
	}
	
	yearsExperienceFromBeginningOf (endDate) {
		return (endDate - this.startDate.getFullYear());
	}
}

class Route {
	constructor (beginningLocation, endingLocation) {
		this.beginningLocation = beginningLocation;
		this.endingLocation = endingLocation;
	}

	upDown () {
		return Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);
	}

	across () {	
		const eastWest = [
			'1st Avenue',
			'2nd Avenue',
			'3rd Avenue',
			'Lexington Avenue',
			'Park',
			'Madison Avenue',
			'5th Avenue'
		];
		
		return Math.abs(eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal));
	}

	blocksTravelled () {
		return this.upDown() + this.across();
	}
	
	estimatedTime (peak = false) {
		if (peak) {
			return (this.blocksTravelled() / 2);
		} else {
			return (this.blocksTravelled() / 3);
		}
	}

}
