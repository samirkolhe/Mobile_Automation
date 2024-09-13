import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, driver } from '@wdio/globals';
import LoginPage from '../specs/pageobjects/loginPage.js';
import MenuPage from '../specs/pageobjects/menuPage.js';
import fetchData from '../utils/fetchData.js';

// Step for navigating to the product page
Given(/^user is on the product homepage$/, async () => {
  await MenuPage.verifyProductPage();
});

// Step for clicking the hamburger menu
When(/^user clicks on the hamburger menu$/, async () => {
  await MenuPage.clickHamburgerMenu();
});

// Step for clicking the Login button
When(/^user clicks on the Login button$/, async () => {
  await MenuPage.clickLoginButton();
});

Then(
  /^user should see the product homepage after successful login$/,
  async () => {
    await MenuPage.verifyProductPage();
  },
);

// Step for entering the username
When(/^user enters (.+) username$/, async (userType) => {
  let userData = await fetchData.getValue('loginData', userType);
  await LoginPage.inputUsername(userData.username);
});

// Step for entering the password
When(/^user enters (.+) password$/, async (userType) => {
  let userData = await fetchData.getValue('loginData', userType);
  await LoginPage.inputPassword(userData.password);
});

// Step for logging in
When(/^user clicks on the Login button to login$/, async () => {
  await LoginPage.clickLoginButton();
});

// Step for logging out
When(/^user logs out of the application$/, async () => {
  await MenuPage.clickHamburgerMenu();
  await MenuPage.clickLogoutButton();
  await LoginPage.performLogout();
  await driver.pause(2500);
});

When(/^user perform UI Validation on login page$/, async () => {
  await LoginPage.verifyLoginPageUI();
});

// Step for clearing and relaunching the app
When('user clears app data and relaunches app', async () => {
  await MenuPage.terminateApp();
  await driver.activateApp('com.saucelabs.mydemoapp.rn');
});

// Step for receiving error messages
Then(/^user receives an error message (.*)$/, async (errorMessage) => {
  switch (errorMessage) {
    case 'Username is required':
      await LoginPage.verifyUserNameRequiredError();
      break;
    case 'Password is required':
      await LoginPage.verifyPasswordIsRequiredError();
      break;
    case 'Incorrect password':
      await LoginPage.verifyIncorrectPasswordError();
      break;
    case 'Locked user':
      await LoginPage.verifyLockedUserError();
      break;
    default:
  }
});

// Step for receiving error messages
Then(/^user receive an error message "(.*)"$/, async (errorMessage) => {
  switch (errorMessage) {
    case 'Username is required':
      await LoginPage.verifyUserNameRequiredError();
      break;
    case 'Password is required':
      await LoginPage.verifyPasswordIsRequiredError();
      break;
    case 'Incorrect password':
      await LoginPage.verifyIncorrectPasswordError();
      break;
    case 'Locked user':
      await LoginPage.verifyLockedUserError();
      break;
    default:
  }
});
