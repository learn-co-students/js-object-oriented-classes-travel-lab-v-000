let eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

class Driver {
    constructor(name, startDate){
        this.name = name;
        this.startDate = new Date(startDate);
    };

   yearsExperienceFromBeginningOf(year){
    let endDate = new Date(year, 1, 1)
    let totalYears = (endDate - this.startDate)/(365*24*60*60*1000)
    return parseInt(totalYears)
  }
}

class Route {
    constructor(beginningLocation, endingLocation){
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    };

    avenueToInteger(avenue){
        return eastWest.indexOf(avenue)
    }
    
    blocksTravelled(){
        let horizontalDistance = this.avenueToInteger(this.endingLocation.horizontal) - this.avenueToInteger(this.beginningLocation.horizontal)
        let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical
        return (Math.abs(horizontalDistance) + Math.abs(verticalDistance))
      }

    estimatedTime(truthyArgument){
        if (truthyArgument){
            return this.blocksTravelled() / 2;
        }
        else {
            return this.blocksTravelled() / 3;
        }
    };
}

// Remember we are building methods for the objects. These will be called like object.method(). These methods will operate on themselves. 
// Thus we use this (for the route) instead of passing in the route. 

// Remember we must invoke the methods still with ()'s. 

// Pay very close to how the method is being called. Is it being called on itself, with what arguments if any? What is the format of the input and oututs?


 // to more accurately capture how long its been in years, do end DAY - start DAY(beginning of year). 
    // date subtraction in Javascript is returned in miliseconds by default 
    /* my original solution --------------------------------------------------------------

    yearsExperienceFromBeginningOf(endYear){
               
       return endYear - this.startDate.getFullYear() - 1;
    
    };
    */

/* MY ORIGINAL SOLUTION ---------------------------------------------------------------------------
    blocksTravelled(){
       
        let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
       
        let horizontalIndexEnd = eastWest.indexOf(this.endingLocation.horizontal); 
        
        let horizontalIndexBeg = eastWest.indexOf(this.beginningLocation.horizontal);

        let horizontalDistance = horizontalIndexEnd - horizontalIndexBeg;
        

        let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical;

        return Math.abs(verticalDistance) + Math.abs(horizontalDistance);
    };
    */ 

    //Flatirons Soln extracts index of logic;