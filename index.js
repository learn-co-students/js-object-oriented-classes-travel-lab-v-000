const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

class Driver {
    constructor(name, joinDate){
        this.name = name;
        this.startDate = new Date(joinDate);
    }
    
    yearsExperienceFromBeginningOf(year){
        const endDate = new Date(year, 1, 1)
        
        // difference is in milliseconds so:
        // miliseconds* seconds/1000ms *minutes/60sec * hours/60min * days/24hr * years/365day = years
        const totalYears = (endDate - this.startDate)/(365*24*60*60*1000)
        return parseInt(totalYears)
    }
}
class Route {
    constructor(beginningLocation, endingLocation){
        this.beginningSt = parseInt(beginningLocation.vertical); 
        this.beginningAve = beginningLocation.horizontal;
        this.endingSt = parseInt(endingLocation.vertical);
        this.endingAve = endingLocation.horizontal;
    }
    blocksTravelled(){
        const streetsTravelled = Math.abs(this.endingSt - this.beginningSt);
        const avenuesTravelled = Math.abs(eastWest.indexOf(this.endingAve)) - Math.abs(eastWest.indexOf(this.beginningAve));
        return streetsTravelled + avenuesTravelled;
    }
    estimatedTime(peak = false){
        let time = 0;
        if (peak === true){
            time = this.blocksTravelled() / 2;
        }else{
            time = this.blocksTravelled() / 3;
          
        }
        return parseInt(time);
    }
}

// estimatedTime — The method returns the number of minutes estimated for the trip. The estimated time depends on the distance in blocks and whether the trip is occurring during peak hours or off peak hours. During off peak hours, a driver travels three blocks in a minute, while during peak hours a driver travels an estimated two blocks in a minute.
