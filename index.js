class Driver {
    constructor(name, startDate){
        this.name = name;
        this.startDate = new Date(startDate);
    }

    yearsExperienceFromBeginningOf(endDate){
        return new Date(endDate).getUTCFullYear() - this.startDate.getUTCFullYear();
    }
}

class Route {
    constructor(beginningLocation, endingLocation){
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
        this.eastWest = [
            '1st Avenue',
            '2nd Avenue',
            '3rd Avenue',
            'Lexington Avenue',
            'Park',
            'Madison Avenue',
            '5th Avenue'
          ];
    }

    blocksTravelled(){
        const beginVert = this.beginningLocation.vertical;
        const endVert = this.endingLocation.vertical;
        const beginHorz = this.eastWest.indexOf(this.beginningLocation.horizontal);
        const endHorz = this.eastWest.indexOf(this.endingLocation.horizontal);

        return (endVert - beginVert) + (endHorz - beginHorz);
    }

    estimatedTime(peak){
        if(peak){
            return this.blocksTravelled() / 2;
        } else {
            return this.blocksTravelled() / 3;
        }
    }
}
