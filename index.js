class Driver {
        constructor(name, startDate){
        this.name = name;
        this.startDate = new Date(startDate);
    }

    yearsExperienceFromBeginningOf(year){
        return year - this.startDate.getFullYear();
        //let endDate = new Date(year, 1, 1)
        //let totalYears = (endDate - this.startDate)/(365*24*60*60*1000)
        //return parseInt(totalYears)
    }
}

class Route {
    constructor(beginningLocation, endLocation){
        this.beginningLocation = beginningLocation;
        this.endLocation = endLocation;
    }

    blocksTravelled(){
        let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
        
        return Math.abs(this.beginningLocation.vertical - this.endLocation.vertical) + Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endLocation.horizontal));
    }

    estimatedTime(peakHour){
        if (peakHour){
            return this.blocksTravelled()/2;
        }
        else {
            return this.blocksTravelled()/3;
        }
    }
}