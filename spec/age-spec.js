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

  it('should return the seconds between two same months', function() {
    let date1 = new Date("8/15/2018");
    let date2 = new Date("8/15/2018");

    let dateDiff = new DateDiff(date1, date2);

    expect(dateDiff.dateSeconds()).toEqual(0);
  });

  it('should return the seconds between two set dates with date1 date being less than date2 date', function() {
    let date1 = new Date("8/15/2018");
    let date2 = new Date("8/16/2018");

    let dateDiff = new DateDiff(date1, date2);

    expect(dateDiff.dateSeconds()).toEqual(86400);
  });

  it('should return the seconds between two months with same date and year', function() {
    let date1 = new Date("9/15/2018");
    let date2 = new Date("8/15/2018");

    let dateDiff = new DateDiff(date1, date2);

    expect(dateDiff.dateSeconds()).toEqual(2678400);
    console.log(dateDiff.dateSeconds());
  });

  it('should return the seconds between two months with same date and year', function() {
    let date1 = new Date("8/15/2018");
    let date2 = new Date("9/15/2018");

    let dateDiff = new DateDiff(date1, date2);

    expect(dateDiff.dateSeconds()).toEqual(2678400);
    console.log(dateDiff.dateSeconds());
  });

  it('should return the seconds between two set dates with greater date1 year than date2', function() {
    let date1 = new Date("8/15/2018");
    let date2 = new Date("8/15/2017");

    let dateDiff = new DateDiff(date1, date2);

    expect(dateDiff.dateSeconds()).toEqual(31536000);
  });

  it('should return the seconds between two set dates with less date1 year than date2', function() {
    let date1 = new Date("8/15/2017");
    let date2 = new Date("8/15/2018");

    let dateDiff = new DateDiff(date1, date2);

    expect(dateDiff.dateSeconds()).toEqual(31536000);
  });

  it('should return the seconds between two set dates with mixed month, date, and year', function() {
    let date1 = new Date("4/15/2018");
    let date2 = new Date("11/15/2017");

    let dateDiff = new DateDiff(date1, date2);

    expect(dateDiff.dateSeconds()).toEqual(44928000);
  });

  it('should return the seconds between two set dates with date1 = greater month but less year', function() {
    let date1 = new Date("10/15/2017");
    let date2 = new Date("8/15/2018");

    let dateDiff = new DateDiff(date1, date2);

    expect(dateDiff.dateSeconds()).toEqual(58320000);
  });

  it('should return the seconds between two set dates with date1 = less month and year with one less date', function() {
    let date1 = new Date("8/15/2017");
    let date2 = new Date("10/16/2018");

    let dateDiff = new DateDiff(date1, date2);

    expect(dateDiff.dateSeconds()).toEqual(58406400);
  });
});
