import CustomAllureReporter from './customAllureReporter.js';
import { getCapabilities } from './test/utils/getCapabilities.js';

const testFile = process.env.TEST_FILE;
const testEnv = process.env.TEST_ENV;
const device = process.env.DEVICE;

console.log(`TEST_FILE: ${testFile}`);
console.log(`TEST_ENV: ${testEnv}`);
console.log(`DEVICE: ${device}`);

export const config = {
  runner: 'local',
  port: 4723,
  specs: testFile ? [testFile] : ['./test/features/*.feature'],
  exclude: [],
  maxInstances: 1,
  capabilities: [getCapabilities(testEnv, device)],
  logLevel: 'warn',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['appium'],
  framework: 'cucumber',
  reporters: [
    'spec',
    [
      CustomAllureReporter,
      {
        outputDir: './reports/allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
    [
      'html-nice',
      {
        outputDir: './reports/html-reports',
        filename: 'report.html',
        reportTitle: 'Mobile Test Report',
        linkScreenshots: true,
        showInBrowser: true,
        collapseTests: true,
        useOnAfterCommandForScreenshot: true,
        LOG: {
          logLevel: 'info',
          outputDir: './logs',
        },
      },
    ],
  ],
  cucumberOpts: {
    require: ['./test/step-definitions/*.js'],
    backtrace: false,
    dryRun: false,
    failFast: false,
    name: [],
    snippets: true,
    source: true,
    strict: false,
    tagExpression: '',
    timeout: 60000,
    ignoreUndefinedDefinitions: false,
  },
  beforeScenario: function (world) {
    const scenarioName = world.pickle.name;
    console.log(`\x1b[36m\nExecuting Scenario: ${scenarioName}\x1b[0m`);
  },
};
