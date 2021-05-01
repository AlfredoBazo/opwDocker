"use strict";

const protractor = require('protractor');
const chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var utils = require('./../Utils/utils.js');
const pageObject = require('./pageObject');
const ecTimeout = 15000;

const log4js = require('log4js');
log4js.configure({
    appenders: {
        out: { type: 'stdout' }
    },
    categories: {
        default: { appenders: ['out'], level: browser.params.level ? browser.params.level : 'INFO' }
    }
});

var logger = log4js.getLogger();

module.exports = {
    /**
     * Function to open the main page of the UI.
     * @param product
     * @param callback
     */
    angularPage: function (callback) {

        browser.get(pageObject.homePage.url).then(function () {
            logger.info('Navegamos a: https://angular.io/ ' );
            callback(); // To tell the cucumber that we are done with thi
        });
    },



    urlOpened: function(callback) {
        browser.wait(protractor.ExpectedConditions.urlContains(pageObject.homePage.url), ecTimeout).then(function() {
            logger.info('Web de ' + pageObject.homePage.url + 'abierta');
            callback();
        });
    },
};
