//jshint strict: false
exports.config = {
  seleniumAddress: 'http://selenium-hub:4444/wd/hub',

  onPrepare() {
    browser.driver
        .executeScript(function() {
          return {
            width: window.screen.availWidth,
            height: window.screen.availHeight
          };
        })
        .then(function(result) {
          browser.driver.manage().window().setPosition(0, 0);
          browser.driver.manage().window().setSize(result.width, result.height);
        });
  },
//   plugins: [
//     {
//       package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
//       options: {
//         removeExistingJsonReportFile: true,
//         removeOriginalJsonReportFile: true,
//         automaticallyGenerateReport: true,
//         openReportInBrowser: true
//       }
//     }
//   ],

  allScriptsTimeout: 11000,

  specs: ['../e2e-tests/src/Features/*.feature'],

  capabilities: {
    browserName: 'chrome'
  },

  //baseUrl: 'http://localhost:8000/',

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'), // Here it is

  cucumberOpts: {
    format: [require.resolve('cucumber-pretty')],
    require: '../e2e-tests/src/step_definitions/mysteps.js' // This is where we'll be writing our actual tests
  },

 // resultJsonOutputFile: './testResults.json', //output file path to store the final results in .json format
};
