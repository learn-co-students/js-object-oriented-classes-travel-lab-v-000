class Driver {
    constructor(name, startDate) {
        this.name = name;
        this.startDate = new Date(startDate);
    }

    yearsExperienceFromBeginningOf(year) {
        return year - this.startDate.getFullYear()
    }
}

let eastWest = [
    '1st Avenue',
    '2nd Avenue',
    '3rd Avenue',
    'Lexington Avenue',
    'Park',
    'Madison Avenue',
    '5th Avenue'
];

class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    }

    blockNameToInt(avenue) {
        return eastWest.indexOf(avenue)
    }

    blocksTravelled() {
        let horizontalDistance = this.blockNameToInt(this.endingLocation.horizontal) - this.blockNameToInt(this.beginningLocation.horizontal);

        let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical;

        return horizontalDistance + verticalDistance;
    }

    estimatedTime(peak) {
        if (peak) {
            return this.blocksTravelled() / 2;
        } else {
            return this.blocksTravelled() / 3;
        }

    }

}