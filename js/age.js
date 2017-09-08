export class Age {
  constructor(age) {
    this.age = age;
  }
  // const yearSec = 31536000;
  // const monthSec = 2678400;
  // const daySec = 86400;
  seconds() {
    const yearSec = 31536000;

    let ageSeconds = this.age * yearSec;
    return ageSeconds;
  }

  mercury() {
    let mercuryYear = 365 * ".24";
    let mercuryYearRound = Math.round(mercuryYear);
    let mercuryAge = this.age * mercuryYearRound;
    return mercuryAge;
  }

  venus() {
    let venusYear = 365 * ".62";
    let venusYearRound = Math.round(venusYear);
    let venusAge = this.age * venusYearRound;
    return venusAge;
  }

  mars() {
    let marsYear = 365 * "1.88";
    let marsYearRound = Math.round(marsYear);
    let marsAge = this.age * marsYearRound;
    return marsAge;
  }

  jupiter() {
    let jupiterYear = 365 * "11.86";
    let jupiterYearRound = Math.round(jupiterYear);
    let jupiterAge = this.age * jupiterYearRound;
    return jupiterAge;
  }

  yearsLeftMercury() {
    let mercuryYear = 365 * ".24";
    let mercuryYearRound = Math.round(mercuryYear);
    let mercuryAge = this.age * mercuryYearRound;
    let avgDeathAge = 79 * mercuryYearRound;

    if (mercuryAge >= avgDeathAge) {
      let yearsAbove = mercuryAge - avgDeathAge;
      return yearsAbove;
    } else {
      let yearsBelow = avgDeathAge - mercuryAge;
      return yearsBelow;
    }
  }

  yearsLeftVenus() {
    let venusYear = 365 * ".62";
    let venusYearRound = Math.round(venusYear);
    let venusAge = this.age * venusYearRound;
    let avgDeathAge = 79 * venusYearRound;

    if (venusAge >= avgDeathAge) {
      let yearsAbove = venusAge - avgDeathAge;
      return yearsAbove;
    } else {
      let yearsBelow = avgDeathAge - venusAge;
      return yearsBelow;
    }
  }

  yearsLeftMars() {
    let marsYear = 365 * "1.88";
    let marsYearRound = Math.round(marsYear);
    let marsAge = this.age * marsYearRound;
    let avgDeathAge = 79 * marsYearRound;

    if (marsAge >= avgDeathAge) {
      let yearsAbove = marsAge - avgDeathAge;
      return yearsAbove;
    } else {
      let yearsBelow = avgDeathAge - marsAge;
      return yearsBelow;
    }
  }

  yearsLeftJupiter() {
    let jupiterYear = 365 * "11.86";
    let jupiterYearRound = Math.round(jupiterYear);
    let jupiterAge = this.age * jupiterYearRound;
    let avgDeathAge = 79 * jupiterYearRound;

    if (jupiterAge >= avgDeathAge) {
      let yearsAbove = jupiterAge - avgDeathAge;
      return yearsAbove;
    } else {
      let yearsBelow = avgDeathAge - jupiterAge;
      return yearsBelow;
    }
  }

}
