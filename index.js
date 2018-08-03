class Driver {
    constructor(name, startDate){
        this.name = name;
        this.startDate = new Date(startDate);
    };

    yearsExperienceFromBeginningOf(endYear){
               
       return endYear - this.startDate.getFullYear() - 1;
        
    };
}

class Route {
    constructor(beginningLocation, endingLocation){
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    };

    blocksTravelled(){
       
        let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
       
        let horizontalIndexEnd = eastWest.indexOf(this.endingLocation.horizontal) + 1; 
        
        let horizontalIndexBeg = eastWest.indexOf(this.beginningLocation.horizontal) + 1;

        let horizontalDistance = horizontalIndexEnd - horizontalIndexBeg;
        

        let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical;

        return Math.abs(verticalDistance) + Math.abs(horizontalDistance);
    };

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