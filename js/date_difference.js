export class DateDiff {
  constructor(date1, date2) {
    this.date1 = date1;
    this.date2 = date2;
  }

  dateSeconds() {
    let date1 = new Date(this.date1);
    let date2 = new Date(this.date2);
    let yearDiff = 0;
    let monthDiff = 0;
    let dateDiff = 0;

    if (date1.getFullYear() == date2.getFullYear()) {
      if (date1.getMonth() + 1 > date2.getMonth() + 1) {
        monthDiff = (date1.getMonth() + 1) - (date2.getMonth() + 1);
      } else {
        monthDiff = (date2.getMonth() + 1) - (date1.getMonth() + 1);
      }
    } else if (date1.getFullYear() > date2.getFullYear()) {
      yearDiff = date1.getFullYear() - date2.getFullYear();
        if (date1.getMonth() + 1 > date2.getMonth() + 1) {
          monthDiff = 12 + (date1.getMonth() + 1) - (date2.getMonth() + 1);
          if (monthDiff == 12) {
            monthDiff = 0;
          }
        } else if (date1.getMonth() + 1 < date2.getMonth() + 1) {
            monthDiff = 12 - ((date2.getMonth() + 1) - (date1.getMonth() + 1));
            if (monthDiff == 12) {
              monthDiff = 0;
            }
        }
    } else if (date1.getFullYear() < date2.getFullYear()){
      yearDiff = date2.getFullYear() - date1.getFullYear();

      if(date1.getMonth() + 1 > date2.getMonth() + 1) {
        monthDiff = 12 - ((date1.getMonth() + 1) - (date2.getMonth() + 1));
        if (monthDiff == 12) {
          monthDiff = 0;
        }
      } else {
        monthDiff = 12 + ((date1.getMonth() + 1) - (date2.getMonth() + 1));
        if (monthDiff == 12) {
          monthDiff = 0;
        }
      }
    }

    if (date1.getDate() >= date2.getDate()) {
      dateDiff = (date1.getDate()) - (date2.getDate());
    } else {
      dateDiff = (date2.getDate()) - (date1.getDate());
    }

    let secondsDiff = (yearDiff * 31536000) + (monthDiff * 2678400) + (dateDiff * 86400);

    return secondsDiff;
  }

}
