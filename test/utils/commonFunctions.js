import { join } from 'path';
import { readFile } from 'fs/promises';
import allureReporter from '@wdio/allure-reporter';

class CommonFunctions {
  async log(action, isSuccess, elementName = '') {
    const timestamp = new Date().toISOString();
    const status = isSuccess ? 'INFO' : 'ERROR';
    const color = isSuccess ? '\x1b[43m' : '\x1b[41m';
    console.log(
      `${color}[${status}]\x1b[0m [${timestamp}] '${action}' action ${
        isSuccess ? 'passed' : 'failed'
      } on '${elementName}'`,
    );

    if (!isSuccess) {
      throw new Error(`'${action}' action failed on '${elementName}'`);
    }
  }

  async report(action, isSuccess, elementName = '') {
    if (isSuccess) {
      allureReporter.addStep(`'${action}' action passed on '${elementName}'`);
    } else {
      allureReporter.addStep(`'${action}' action failed on '${elementName}'`, {
        status: 'failed',
      });
    }
  }

  async performAction(action, elementName, actionName) {
    try {
      const result = await action();
      this.log(actionName, true, elementName);
      this.report(actionName, true, elementName);
      return result;
    } catch (error) {
      this.log(actionName, false, elementName);
      this.report(actionName, false, elementName);
      allureReporter.addAttachment(
        'Screenshot',
        Buffer.from(await browser.takeScreenshot(), 'base64'),
        'image/png',
      );
      return false;
    }
  }

  async tapElement(element) {
    return this.performAction(
      async () => {
        await element.click();
      },
      element.selector,
      'Click',
    );
  }

  async getAttributeValue(element, attributeName) {
    return this.performAction(
      async () => {
        const returnValue = await element.getAttribute(attributeName);
        return returnValue;
      },
      element.selector,
      'getAttributeValue',
    );
  }

  async verifyElementDisplayed(element) {
    return this.performAction(
      async () => {
        await element.waitForDisplayed();
        return true;
      },
      element.selector,
      'verifyElementDisplayed',
    );
  }

  async setValue(element, value) {
    return this.performAction(
      async () => {
        await element.isEnabled();
        await element.setValue(value);
        allureReporter.addStep(`'${value}' entered successfully'`);
      },
      element.selector,
      'setValue',
    );
  }

  async addValue(element, value) {
    return this.performAction(
      async () => {
        await element.addValue(value);
      },
      element.selector,
      'addValue',
    );
  }

  async clearInputField(element) {
    return this.performAction(
      async () => {
        await element.clearValue();
      },
      element.selector,
      'clearInputField',
    );
  }

  async verifyElementText(element, expectedText) {
    return this.performAction(
      async () => {
        const actualText = await element.getText();
        expect(actualText).toEqual(expectedText);
      },
      element.selector,
      'verifyElementText',
    );
  }

  async verifyElementContainsText(element, expectedText) {
    return this.performAction(
      async () => {
        const actualText = await element.getText();
        expect(actualText).toContain(expectedText);
        return true;
      },
      element.selector,
      'verifyElementContainsText',
    );
  }

  async fetchJSON(filename) {
    try {
      const data = await readFile(
        join(
          process.cwd(),
          `test_data/${process.env.TEST_ENV.toLowerCase()}/${filename}.json`,
        ),
        'utf8',
      );
      const jsonData = JSON.parse(data);
      return jsonData;
    } catch (error) {
      console.error('Error reading JSON file:', error);
      throw new Error(
        `Error reading JSON file '${filename}': ${error.message}`,
      );
    }
  }

  async toBe_Assertion(actual, expected, message) {
    return this.performAction(
      async () => {
        expect(actual).toBe(expected);
        return true;
      },
      `Actual value : ${actual}`,
      `${message} Expected value : ${expected}`,
    );
  }
}

export default new CommonFunctions();
