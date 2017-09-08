import {Planets} from './../js/planets.js';
import {Age} from './../js/age.js';
import {DateDiff} from './../js/date_difference.js';

describe('Age to seconds calculator test methods', function() {

  it('should convert 1 Earth year into seconds', function() {
    let age = new Age(1);

    expect(age.seconds()).toEqual(31536000);
  });
})

;

describe('Date difference in seconds test methods', function() {

  it('should return the seconds between two set dates', function() {
    let date1 = new Date("8/15/2017");
    let date2 = new Date("8/16/2018");

    let dateDiff = new DateDiff(date1, date2);

    expect(dateDiff.dateSeconds()).toEqual(31622400);
    console.log("actual ====" + dateDiff.dateSeconds());
  });

  it('should return the seconds between two set dates', function() {
    let date1 = new Date("4/15/2018");
    let date2 = new Date("11/16/2017");

    let dateDiff = new DateDiff(date1, date2);

    expect(dateDiff.dateSeconds()).toEqual(31622400);
    console.log("actual ====" + dateDiff.dateSeconds());
  });

  it('should return the seconds between two set dates', function() {
    let date1 = new Date("8/15/2017");
    let date2 = new Date("10/16/2018");

    let dateDiff = new DateDiff(date1, date2);

    expect(dateDiff.dateSeconds()).toEqual(31622400);
    console.log("actual ====" + dateDiff.dateSeconds());
  });
});
