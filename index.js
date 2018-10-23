class Driver {
    constructor(name, startDate){
        this.name = name;
        this.startDate = new Date(startDate);
    }

    yearsExperienceFromBeginningOf(year){
       let endDate = new Date (year, 1, 1);
       let difference = (endDate - this.startDate)/(365*1000*60*60*24);
        return parseInt(difference);
    }
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
    constructor(beginningLocation, endingLocation){
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    }

    avenueIndex(avenue){
        return eastWest.indexOf(avenue);
        //find index of avenue passed in as argument in the array,eastWest
    }

    blocksTravelled(){
        let horizontalDist = this.avenueIndex(this.endingLocation.horizontal) - this.avenueIndex(this.beginningLocation.horizontal);
        let verticalDist = this.endingLocation.vertical - this.beginningLocation.vertical;
        
        return Math.abs(horizontalDist) + Math.abs(verticalDist);
    }

    estimatedTime(peak){
        if(peak){
            return this.blocksTravelled()/2
        }else{
            return this.blocksTravelled()/3
        }
    }
}