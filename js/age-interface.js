import {Age} from './../js/age.js';
import {DateDiff} from './../js/date_difference.js';

$(function() {
  $('#seconds').click(function(event) {
    event.preventDefault();
    let age = parseInt($('#age').val());
    let ageInput = new Age(age);
    let seconds = ageInput.seconds();

    $('#seconds-result').append("<p>" + "<strong>" + "Age input: " + "</strong>" + age + "<br>" +  "<strong>" + " Age in seconds: " + "</strong>" + seconds + "</p>");
  });
  $('#mercury').click(function(event) {
    event.preventDefault();
    let age = parseInt($('#age').val());
    let ageInput = new Age(age);
    let mercuryAge = ageInput.mercury();

    $('#mercury-age').append("<p>" + "<strong>" + "Age input: " + "</strong>" + age + "<br>" +  "<strong>" + " Mercury years: " + "</strong>" + mercuryAge + "</p>");
    $('.show-clear-mercury-age').show();
    $('.show-death-button').show();
  });
  $('#venus').click(function(event) {
    event.preventDefault();
    let age = parseInt($('#age').val());
    let ageInput = new Age(age);
    let venusAge = ageInput.venus();

    $('#venus-age').append("<p>" + "<strong>" + "Age input: " + "</strong>" + age + "<br>" +  "<strong>" + " Venus years: " + "</strong>" + venusAge + "</p>");
  });
  $('#mars').click(function(event) {
    event.preventDefault();
    let age = parseInt($('#age').val());
    let ageInput = new Age(age);
    let marsAge = ageInput.mars();

    $('#mars-age').append("<p>" + "<strong>" + "Age input: " + "</strong>" + age + "<br>" +  "<strong>" + " Mars years: " + "</strong>" + marsAge + "</p>");
  });
  $('#jupiter').click(function(event) {
    event.preventDefault();
    let age = parseInt($('#age').val());
    let ageInput = new Age(age);
    let jupiterAge = ageInput.jupiter();

    $('#jupiter-age').append("<p>" + "<strong>" + "Age input: " + "</strong>" + age + "<br>" +  "<strong>" + " Jupiter years: " + "</strong>" + jupiterAge + "</p>");
  });
  $('#mercury-death-avg').click(function(event) {
    event.preventDefault();
    let age = parseInt($('#age').val());
    let ageInput = new Age(age);
    let result = ageInput.yearsLeftMercury();

    $('.mercury-death-result').append("<p>" + "<strong>" + "Age input: " + "</strong>" + age + "<br>" + result + "</p>");
    $('.show-death-results-mercury').show();
  });
  $('#venus-death-avg').click(function(event) {
    event.preventDefault();
    let age = parseInt($('#age').val());
    let ageInput = new Age(age);
    let result = ageInput.yearsLeftVenus();

    $('.venus-death-result').append("<p>" + "<strong>" + "Age input: " + "</strong>" + age + "<br>" + result + "</p>");
  });
  $('#mars-death-avg').click(function(event) {
    event.preventDefault();
    let age = parseInt($('#age').val());
    let ageInput = new Age(age);
    let result = ageInput.yearsLeftMars();

    $('.mars-death-result').append("<p>" + "<strong>" + "Age input: " + "</strong>" + age + "<br>" + result + "</p>");
  });
  $('#jupiter-death-avg').click(function(event) {
    event.preventDefault();
    let age = parseInt($('#age').val());
    let ageInput = new Age(age);
    let result = ageInput.yearsLeftJupiter();

    $('.jupiter-death-result').append("<p>" + "<strong>" + "Age input: " + "</strong>" + age + "<br>" + result + "</p>");
  });
  $('.clear-mercury-age').click(function(event) {
    event.preventDefault();
    $('#mercury-age').html("");
  });
  $('.clear-mercury-death').click(function(event) {
    event.preventDefault();
    $('#mercury-death-result').html("");
  });
  $('#date-diff-form').submit(function(event) {
    event.preventDefault();
    let date1 = $('#date1').val();
    console.log(date1);
    let date2 = $('#date2').val();
    let dateComp = new DateDiff(date1, date2);
    let dateSec = dateComp.dateSeconds();

    $('#date-diff-result').append("<p>" + "<strong>" + "Date 1 input: " + "</strong>" + date1 + "<br>" +  "<strong>" + "Date 2 input: " + "</strong>" + date2 + "<br>" + "<strong>" + " Difference in seconds: " + "</strong>" + dateSec + "</p>");
  });
});
