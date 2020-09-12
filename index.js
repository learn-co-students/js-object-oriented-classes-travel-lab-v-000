class Driver {
	//A driver can be initialized with a name, and a string representing the day
	constructor(name, startDate) {
		this.name = name;
		//returns a JavaScript Date object
		//how to create a new Date object from argument, startDate?
		//sets the driver startDate as a date object
		this.startDate = new Date(startDate);
	}

	yearsExperienceFromBeginningOf(year) {
    console.log(year)
    console.log(this.startDate)
		//calculates the number of years driven given an endDate
		debugger;
		//driver.startDate.getFullYear(); -> 1995 && this: Driver (from Chrome Dev) ? this.startDate.getFullYear(); : "";
		// return year - this.startDate.getFullYear();
	}
}

class Route {
	//initialized with two arguments, a `beginningLocation` and an
	 // `endingLocation`. Both of these arguments are JavaScript objects with attributes
	//  of horizontal and vertical
	constructor(beginningLocation, endingLocation) {
		this.beginningLocation = beginningLocation;
		this.endingLocation = endingLocation;
	}

	blocksTravelled() {
		//goal:returns an integer with the number of blocks travelled
		//to travel from 15th Street and 1st Avenue to 20th Street and Lexington Avenue
		//is to travel eight blocks (five blocks North and three blocks West).
		//eastWest variable assignment: to travel East and West you cross avenues
		let avenues = [
		  '1st Avenue',      //block 0
		  '2nd Avenue',      //block 1
		  '3rd Avenue',      //block 2
		  'Lexington Avenue',//block 3
		  'Park',            //block 4
		  'Madison Avenue',  //block 5
		  '5th Avenue'       //block 6
		];
    console.log(this.beginningLocation.vertical);
    console.log(this.endingLocation.vertical);
		debugger;
		//how to progam difference of this.beginningLocation.vertical and this.endingLocation.vertical
		// this.beginningLocation.vertical - this.endingLocation.vertical
		debugger;
    console.log(Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical));
		//how to assign value from Math.abs value to a variable ? const northSouth : rereview MDN on Math.abs() to return value!
		const northSouth =  Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
		console.log(northSouth)
		//how to solve eastWest of sum of northSouth and eastWest?
		console.log(this.beginningLocation.horizontal)//attribute's value of objects are accessible w/ dot operator
		console.log(this.endingLocation.horizontal)//attribute's value of objects are accessible w/ dot operator
		debugger;
		////how determine avenues' array index # for driver.beginningLocation.horizontal
		//google to search and find index of array in javascript ? array.indexOf(???) : google search for js method for array index search and find
    console.log(avenues.indexOf(this.beginningLocation.horizontal));
		let start = avenues.indexOf(this.beginningLocation.horizontal);
		console.log(start)
		debugger;
    console.log(avenues.indexOf(this.endingLocation.horizontal));
		let end = avenues.indexOf(this.endingLocation.horizontal)
		console.log(end)
		debugger;
    console.log(Math.abs(avenues.indexOf(this.beginningLocation.horizontal) - avenues.indexOf(this.endingLocation.horizontal)));
		const eastWest = Math.abs(avenues.indexOf(this.beginningLocation.horizontal) - avenues.indexOf(this.endingLocation.horizontal));
    console.log(northSouth);
    console.log(eastWest);
		//combines horizontal and vertical blocks travelled
		return northSouth + eastWest;
	}
  estimatedTime(peak) {
    console.log(peak)
 		if (peak === true) {
      console.log(this.blocksTravelled())
 			return this.blocksTravelled() / 2;
 		}
 		else {
      console.log(this.blocksTravelled())
 			return this.blocksTravelled() / 3;
 		}
 	}
}
