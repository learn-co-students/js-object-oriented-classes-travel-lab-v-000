class Route {
    constructor(begin, end) {
        this.beginningLocation = begin;
        this.endingLocation = end;
    }
    blocksTravelled() {
        return this.streetDistance() + this.blockDistance();
    }
    estimatedTime(isPeak) {
        if (isPeak) {
            return Math.ceil(this.blocksTravelled() / 2);
        }
        else {
            return Math.ceil(this.blocksTravelled() / 3);
        }
    }
    streetDistance() {
        return Math.abs(Number(this.beginningLocation.vertical) -
            Number(this.endingLocation.vertical));
    }
    blockDistance() {
        const eastWest = [
            "1st Avenue",
            "2nd Avenue",
            "3rd Avenue",
            "Lexington Avenue",
            "Park",
            "Madison Avenue",
            "5th Avenue"
        ];
        return Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) -
            eastWest.indexOf(this.endingLocation.horizontal));
    }
}
class Driver {
    constructor(name, startDate) {
        this.name = name;
        this.startDate = new Date(startDate);
    }
    yearsExperienceFromBeginningOf(year) {
        if (this.startDate.getMonth() === 0 && this.startDate.getDate() === 1) {
            return year - this.startDate.getFullYear();
        }
        else {
            return year - this.startDate.getFullYear() - 1;
        }
    }
}
//# sourceMappingURL=index.js.map