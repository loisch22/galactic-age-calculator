(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Age = exports.Age = function () {
  function Age(age) {
    _classCallCheck(this, Age);

    this.age = age;
  }

  _createClass(Age, [{
    key: "seconds",
    value: function seconds() {
      var yearSec = 31536000;

      var ageSeconds = this.age * yearSec;
      return ageSeconds;
    }
  }, {
    key: "mercury",
    value: function mercury() {
      var mercuryYear = 365 * ".24";
      var mercuryYearRound = Math.round(mercuryYear);
      var mercuryAge = this.age * mercuryYearRound;
      return mercuryAge;
    }
  }, {
    key: "venus",
    value: function venus() {
      var venusYear = 365 * ".62";
      var venusYearRound = Math.round(venusYear);
      var venusAge = this.age * venusYearRound;
      return venusAge;
    }
  }, {
    key: "mars",
    value: function mars() {
      var marsYear = 365 * "1.88";
      var marsYearRound = Math.round(marsYear);
      var marsAge = this.age * marsYearRound;
      return marsAge;
    }
  }, {
    key: "jupiter",
    value: function jupiter() {
      var jupiterYear = 365 * "11.86";
      var jupiterYearRound = Math.round(jupiterYear);
      var jupiterAge = this.age * jupiterYearRound;
      return jupiterAge;
    }
  }, {
    key: "yearsLeftMercury",
    value: function yearsLeftMercury() {
      var mercuryYear = 365 * ".24";
      var mercuryYearRound = Math.round(mercuryYear);
      var mercuryAge = this.age * mercuryYearRound;
      var avgDeathAge = 79 * mercuryYearRound;

      if (mercuryAge >= avgDeathAge) {
        var yearsAbove = mercuryAge - avgDeathAge;
        return yearsAbove;
      } else {
        var yearsBelow = avgDeathAge - mercuryAge;
        return yearsBelow;
      }
    }
  }, {
    key: "yearsLeftVenus",
    value: function yearsLeftVenus() {
      var venusYear = 365 * ".62";
      var venusYearRound = Math.round(venusYear);
      var venusAge = this.age * venusYearRound;
      var avgDeathAge = 79 * venusYearRound;

      if (venusAge >= avgDeathAge) {
        var yearsAbove = venusAge - avgDeathAge;
        return yearsAbove;
      } else {
        var yearsBelow = avgDeathAge - venusAge;
        return yearsBelow;
      }
    }
  }, {
    key: "yearsLeftMars",
    value: function yearsLeftMars() {
      var marsYear = 365 * "1.88";
      var marsYearRound = Math.round(marsYear);
      var marsAge = this.age * marsYearRound;
      var avgDeathAge = 79 * marsYearRound;

      if (marsAge >= avgDeathAge) {
        var yearsAbove = marsAge - avgDeathAge;
        return yearsAbove;
      } else {
        var yearsBelow = avgDeathAge - marsAge;
        return yearsBelow;
      }
    }
  }, {
    key: "yearsLeftJupiter",
    value: function yearsLeftJupiter() {
      var jupiterYear = 365 * "11.86";
      var jupiterYearRound = Math.round(jupiterYear);
      var jupiterAge = this.age * jupiterYearRound;
      var avgDeathAge = 79 * jupiterYearRound;

      if (jupiterAge >= avgDeathAge) {
        var yearsAbove = jupiterAge - avgDeathAge;
        return yearsAbove;
      } else {
        var yearsBelow = avgDeathAge - jupiterAge;
        return yearsBelow;
      }
    }
  }]);

  return Age;
}();

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DateDiff = exports.DateDiff = function () {
  function DateDiff(date1, date2) {
    _classCallCheck(this, DateDiff);

    this.date1 = date1;
    this.date2 = date2;
  }

  _createClass(DateDiff, [{
    key: "dateSeconds",
    value: function dateSeconds() {
      var date1 = new Date(this.date1);
      var date2 = new Date(this.date2);
      var yearDiff = 0;
      var monthDiff = 0;
      var dateDiff = 0;

      if (date1.getFullYear() == date2.getFullYear()) {
        if (date1.getMonth() + 1 > date2.getMonth() + 1) {
          monthDiff = date1.getMonth() + 1 - (date2.getMonth() + 1);
        } else {
          monthDiff = date2.getMonth() + 1 - (date1.getMonth() + 1);
        }
      } else if (date1.getFullYear() > date2.getFullYear()) {
        yearDiff = date1.getFullYear() - date2.getFullYear();
        if (date1.getMonth() + 1 > date2.getMonth() + 1) {
          monthDiff = 12 + (date1.getMonth() + 1) - (date2.getMonth() + 1);
          if (monthDiff == 12) {
            monthDiff = 0;
          }
        } else if (date1.getMonth() + 1 < date2.getMonth() + 1) {
          monthDiff = 12 - (date2.getMonth() + 1 - (date1.getMonth() + 1));
          if (monthDiff == 12) {
            monthDiff = 0;
          }
        }
      } else if (date1.getFullYear() < date2.getFullYear()) {
        yearDiff = date2.getFullYear() - date1.getFullYear();

        if (date1.getMonth() + 1 > date2.getMonth() + 1) {
          monthDiff = 12 - (date1.getMonth() + 1 - (date2.getMonth() + 1));
          if (monthDiff == 12) {
            monthDiff = 0;
          }
        } else {
          monthDiff = 12 + (date1.getMonth() + 1 - (date2.getMonth() + 1));
          if (monthDiff == 12) {
            monthDiff = 0;
          }
        }
      }

      if (date1.getDate() >= date2.getDate()) {
        dateDiff = date1.getDate() - date2.getDate();
      } else {
        dateDiff = date2.getDate() - date1.getDate();
      }

      var secondsDiff = yearDiff * 31536000 + monthDiff * 2678400 + dateDiff * 86400;

      return secondsDiff;
    }
  }]);

  return DateDiff;
}();

},{}],3:[function(require,module,exports){
'use strict';

var _age = require('./../js/age.js');

var _date_difference = require('./../js/date_difference.js');

$(function () {
  $('#seconds').click(function (event) {
    event.preventDefault();
    var age = parseInt($('#age').val());
    var ageInput = new _age.Age(age);
    var seconds = ageInput.seconds();

    $('#seconds-result').append("<p>" + "<strong>" + "Age input: " + "</strong>" + age + "<br>" + "<strong>" + " Age in seconds: " + "</strong>" + seconds + "</p>");
  });
  $('#mercury').click(function (event) {
    event.preventDefault();
    var age = parseInt($('#age').val());
    var ageInput = new _age.Age(age);
    var mercuryAge = ageInput.mercury();

    $('#mercury-age').append("<p>" + "<strong>" + "Age input: " + "</strong>" + age + "<br>" + "<strong>" + " Mercury years: " + "</strong>" + mercuryAge + "</p>");
  });
  $('#venus').click(function (event) {
    event.preventDefault();
    var age = parseInt($('#age').val());
    var ageInput = new _age.Age(age);
    var venusAge = ageInput.venus();

    $('#venus-age').append("<p>" + "<strong>" + "Age input: " + "</strong>" + age + "<br>" + "<strong>" + " Venus years: " + "</strong>" + venusAge + "</p>");
  });
  $('#mars').click(function (event) {
    event.preventDefault();
    var age = parseInt($('#age').val());
    var ageInput = new _age.Age(age);
    var marsAge = ageInput.mars();

    $('#mars-age').append("<p>" + "<strong>" + "Age input: " + "</strong>" + age + "<br>" + "<strong>" + " Mars years: " + "</strong>" + marsAge + "</p>");
  });
  $('#jupiter').click(function (event) {
    event.preventDefault();
    var age = parseInt($('#age').val());
    var ageInput = new _age.Age(age);
    var jupiterAge = ageInput.jupiter();

    $('#jupiter-age').append("<p>" + "<strong>" + "Age input: " + "</strong>" + age + "<br>" + "<strong>" + " Jupiter years: " + "</strong>" + jupiterAge + "</p>");
  });
});

},{"./../js/age.js":1,"./../js/date_difference.js":2}]},{},[3]);
