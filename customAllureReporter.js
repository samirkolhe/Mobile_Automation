import AllureReporter from '@wdio/allure-reporter';

class CustomAllureReporter extends AllureReporter {
  constructor(options) {
    super(options);
  }

  onHookStart(hook) {}

  onHookEnd(hook) {}
}

export default CustomAllureReporter;
