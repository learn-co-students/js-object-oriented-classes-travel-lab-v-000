

class Driver {
    constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
    }
    
    yearsExperienceFromBeginningOf() {
        const newDate = new Date(new Date().getFullYear(), 0, 1);
        return newDate - this.startDate.getFullYear();
    }
}
// let driver = new Driver('Alfie', 'Jan 1, 1995');

// class Route {
//     constructor(beginningLocation, EndLocation) {

//     }
// ]