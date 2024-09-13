# Mobile Test Automation

This project is a mobile test automation framework using WebdriverIO, Cucumber, and Appium.

## Table of Contents

1. [Framework Features](#framework-features)
2. [Built With](#built-with)
3. [Installation](#installation)
4. [Running Tests](#running-tests)
5. [Configuration](#configuration)
6. [Reporters](#reporters)
7. [Test Data](#test-data)
8. [Page Objects](#page-objects)
9. [Step Definitions](#step-definitions)
10. [Utilities](#utilities)
11. [Custom Allure Reporter](#custom-allure-reporter)
12. [Environment Variables](#environment-variables)
13. [Scripts](#scripts)
14. [Capabilities](#capabilities)
15. [Allure Results](#allure-results)
16. [Reports](#reports)
17. [Locators](#locators)
18. [Features](#features)
19. [Conclusion](#conclusion)

## Framework Features

1. **Modular and Scalable**: The framework is designed with modularity in mind. It uses the Page Object Model design pattern, making it easy to maintain and scale.

2. **Cross-Platform Testing**: The framework supports testing on both Android and iOS platforms.

3. **Multiple Reporting**: The framework uses Allure and HTML Nice reporters for comprehensive and visually appealing test reports.

4. **Environment Specific Data Handling**: The framework supports multiple environments like UAT, Test, etc., and handles test data accordingly.

5. **Customizable**: The framework is highly customizable. You can easily add new tests, modify existing ones, or change the configuration to suit your needs.

6. **Cucumber Integration**: The framework uses Cucumber, allowing you to write your tests in a natural language format that's easy to read, write, and understand.

7. **Continuous Integration Compatibility**: The framework can be easily integrated with CI/CD pipelines for automated execution of tests.

## Built With

- **WebdriverIO**: A next-gen browser and mobile automation test framework for Node.js.

- **Cucumber**: A tool for running automated tests written in plain language.

- **Appium**: An open-source tool for automating native, mobile web, and hybrid applications on iOS mobile, Android mobile, and Windows desktop platforms.

- **Allure Reporter**: A flexible lightweight multi-language test report tool that not only shows a very concise representation of what has been tested in a neat web report form but allows everyone participating in the development process to extract maximum useful information from everyday testing process.

- **HTML Nice Reporter**: A reporter for WebdriverIO which generates a nice HTML report with screenshots, console logs and nested suites.

- **Prettier**: An opinionated code formatter that ensures one unified code format.

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine. It's used for developing server-side and networking applications.

- **NPM (Node Package Manager)**: Used for package management.

- **JavaScript (ES6)**: The project is written in ES6.

- **Cross-env**: A library that allows for setting environment variables in scripts, in a cross-platform way.

## Installation

1. Clone the repository
2. Install the dependencies with `npm install`

## Running Tests

- To run all tests, use `npm run wdio`
- To run tests on Android, use `npm run wdio-android`
- To generate Allure report, use `npm run allure-report`
- To format code with Prettier, use `npm run prettier`

## Configuration

The configuration of your tests is done in the `wdio.conf.js` file. You can define your capabilities, test specifications, reporters, and other options in this file.

## Reporters

This project uses the Allure and HTML Nice reporters for generating test reports. The Allure reporter generates a set of JSON files in the `allure-results` directory, which can be served as a website using the Allure command line. The HTML Nice reporter generates a single HTML file in the `reports/html-reports` directory.

## Test Data

Test data is stored in the `test_data` directory. There are separate directories for different environments (e.g., `test` and `uat`).

## Page Objects

Page Objects are stored in the `test/specs/pageobjects` directory. Each page object represents a screen in your mobile application and provides methods to interact with its elements.

## Step Definitions

Step definitions for Cucumber scenarios are stored in the `test/step-definitions` directory. Each step definition file corresponds to a feature file.

## Utilities

Utility functions and classes are stored in the `test/utils` directory. This includes functions for fetching data and getting capabilities.

## Custom Allure Reporter

The `customAllureReporter.js` file contains a custom implementation of the Allure reporter. This allows you to customize the information that is included in the Allure report.

## Environment Variables

The following environment variables can be used to control the execution of your tests:

- `TEST_FILE`: The path to the test file to run.
- `TEST_ENV`: The test environment to use (e.g., `test` or `uat`).
- `DEVICE`: The device to run the tests on (e.g., `ANDROID`).

## Scripts

The following scripts are defined in the `package.json` file:

- `wdio`: Runs the WebdriverIO tests.
- `wdio-android`: Sets the `TEST_ENV` and `DEVICE` environment variables and runs the WebdriverIO tests.
- `allure-report`: Serves the Allure report.
- `prettier`: Formats the code with Prettier.

## Capabilities

Capabilities for different environments and devices are stored in the `config` directory. Each environment has a separate directory with capabilities for Android and iOS.

## Allure Results

The `allure-results` directory contains the raw JSON files generated by the Allure reporter. These files can be served as a website using the Allure command line.

## Reports

The `reports` directory contains the HTML reports generated by the HTML Nice reporter. The `html-reports` directory contains the main report file and any associated assets. The `html-reportsscreenshots` directory contains screenshots taken during the test execution.

## Locators

Locators for elements in your mobile application are stored in the `test/specs/locators` directory. Each locator is stored in a separate JSON file.

## Features

Feature files for Cucumber scenarios are stored in the `test/features` directory. Each feature file corresponds to a feature in your mobile application.

## Conclusion

This project provides a robust framework for automating mobile tests using WebdriverIO, Cucumber, and Appium. It includes custom reporting, multiple environments, and a modular structure that makes it easy to maintain and extend.
