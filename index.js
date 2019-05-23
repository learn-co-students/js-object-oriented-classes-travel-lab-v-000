class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endDate) {
    return parseInt((new Date(endDate, 0, 1) - this.startDate)/(365 * 24 * 60 * 60 * 1000))

  }
}

class Route {
  constructor(beginningLocation, endingLocation) {

    beginningLocation["vertical"] = parseInt(beginningLocation["vertical"])
    endingLocation["vertical"] = parseInt(endingLocation["vertical"])

    if (beginningLocation["horizontal"] === "1st Avenue")
      {beginningLocation["horizontal"] = 1}
    else if (beginningLocation["horizontal"] === "2nd Avenue")
      {beginningLocation["horizontal"] = 2}
    else if (beginningLocation["horizontal"] === "3rd Avenue")
        {beginningLocation["horizontal"] = 3}
    else if (beginningLocation["horizontal"] === "Lexington Avenue")
          {beginningLocation["horizontal"] = 4}
    else if (beginningLocation["horizontal"] === "Park")
            {beginningLocation["horizontal"] = 5}
    else if (beginningLocation["horizontal"] === "Madison Avenue")
              {beginningLocation["horizontal"] = 6}
    else if (beginningLocation["horizontal"] === "5th Avenue")
                {beginningLocation["horizontal"] = 7}

                if (endingLocation["horizontal"] === "1st Avenue")
                  {endingLocation["horizontal"] = 1}
                else if (endingLocation["horizontal"] === "2nd Avenue")
                  {endingLocation["horizontal"] = 2}
                else if (endingLocation["horizontal"] === "3rd Avenue")
                    {endingLocation["horizontal"] = 3}
                else if (endingLocation["horizontal"] === "Lexington Avenue")
                      {endingLocation["horizontal"] = 4}
                else if (endingLocation["horizontal"] === "Park")
                        {endingLocation["horizontal"] = 5}
                else if (endingLocation["horizontal"] === "Madison Avenue")
                          {endingLocation["horizontal"] = 6}
                else if (endingLocation["horizontal"] === "5th Avenue")
                            {endingLocation["horizontal"] = 7}

                this.beginningLocation = beginningLocation
                this.endingLocation = endingLocation

}

  blocksTravelled() {
    let vertical
    let horizontal
    
    if (this.beginningLocation["vertical"] > this.endingLocation["vertical"])
      {vertical = this.beginningLocation["vertical"] - this.endingLocation["vertical"]}
    else
      {vertical = this.endingLocation["vertical"] - this.beginningLocation["vertical"]}


      if (this.beginningLocation["horizontal"] > this.endingLocation["horizontal"])
        {horizontal = this.beginningLocation["horizontal"] - this.endingLocation["horizontal"]}
      else
        {horizontal = this.endingLocation["horizontal"] - this.beginningLocation["horizontal"]}

      return vertical + horizontal
  }

  estimatedTime(peak){

  if (peak === true)
    { return (this.blocksTravelled()/2) }
  else
    { return (this.blocksTravelled()/3) }
  }
}
