class Driver {
    constructor(name, date){
        this.name = name;
        this.startDate = new Date(date);
    };

    yearsExperienceFromBeginningOf(yr){
        return yr - this.startDate.getFullYear();
    };
};

class Route {
    constructor(begLoc, endLoc){
        this.beginningLocation = begLoc;
        this.endingLocation = endLoc;
    };

    blocksTravelled(){
        let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
        const verticalDist = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);
        const horizontalDist = Math.abs(eastWest.indexOf(this.endingLocation.horizontal)- eastWest.indexOf(this.beginningLocation.horizontal));
        
        return verticalDist + horizontalDist;
    };

    estimatedTime(peak){
        if (peak === true) {
            return this.blocksTravelled()/2; 
        } else {
            return this.blocksTravelled()/3; 
        }
    };
};