import {Age} from './../js/age.js';
import {DateDiff} from './../js/date_difference.js';

describe('Age to seconds calculator test methods', function() {

  it('should convert 1 Earth year into seconds', function() {
    let age = new Age(1);

    expect(age.seconds()).toEqual(31536000);
  });

  it('should return Mercury age in years', function() {
    let age = new Age(1);

    expect(age.mercury()).toEqual(88);
  });

  it('should return Mercury age in years', function() {
    let age = new Age(5);

    expect(age.mercury()).toEqual(440);
  });

  it('should return Venus age in years', function() {
    let age = new Age(1);

    expect(age.venus()).toEqual(226);
  });

  it('should return Venus age in years', function() {
    let age = new Age(5);

    expect(age.venus()).toEqual(1130);
  });

  it('should return Mars age in years', function() {
    let age = new Age(1);

    expect(age.mars()).toEqual(686);
  });

  it('should return Mars age in years', function() {
    let age = new Age(5);

    expect(age.mars()).toEqual(3430);
  });

  it('should return Jupiter age in years', function() {
    let age = new Age(1);

    expect(age.jupiter()).toEqual(4329);
  });

  it('should return Jupiter age in years', function() {
    let age = new Age(5);

    expect(age.jupiter()).toEqual(21645);
  });

  it('should return how many years above the average life expectancy in Mercury years', function() {
    let age = new Age(80);

    expect(age.yearsLeftMercury()).toEqual("You lived beyond the average age by: 88 years");
  });

  it('should return how many years above the average life expectancy in Mercury years', function() {
    let age = new Age(82);

    expect(age.yearsLeftMercury()).toEqual("You lived beyond the average age by: 264 years");
  });

  it('should return how many years before the average life expectancy in Mercury years', function() {
    let age = new Age(78);

    expect(age.yearsLeftMercury()).toEqual("Years you have left: 88");
  });

  it('should return how many years before the average life expectancy in Mercury years', function() {
    let age = new Age(76);

    expect(age.yearsLeftMercury()).toEqual("Years you have left: 264");
  });

  it('should return how many years above the average life expectancy in Venus years', function() {
    let age = new Age(80);

    expect(age.yearsLeftVenus()).toEqual("You lived beyond the average age by: 226 years");
  });

  it('should return how many years below the average life expectancy in Venus years', function() {
    let age = new Age(78);

    expect(age.yearsLeftVenus()).toEqual("Years you have left: 226");
  });

  it('should return how many years above the average life expectancy in Mars years', function() {
    let age = new Age(80);

    expect(age.yearsLeftMars()).toEqual("You lived beyond the average age by: 686 years");
  });

  it('should return how many years below the average life expectancy in Mars years', function() {
    let age = new Age(78);

    expect(age.yearsLeftMars()).toEqual("Years you have left: 686");
  });

  it('should return how many years above the average life expectancy in Jupiter years', function() {
    let age = new Age(80);

    expect(age.yearsLeftJupiter()).toEqual("You lived beyond the average age by: 4329 years");
  });

  it('should return how many years below the average life expectancy in Jupiter years', function() {
    let age = new Age(78);

    expect(age.yearsLeftJupiter()).toEqual("Years you have left: 4329");
  });

});

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
