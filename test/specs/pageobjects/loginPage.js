import { driver } from '@wdio/globals';
import commonFunctions from '../../utils/commonFunctions';
import loginPageLocator from '../locators/login.json';

class LoginPage {
  constructor() {
    // Convert platform to lowercase
    const platform = process.env.DEVICE.toLowerCase();
    this.loginPageLocator = loginPageLocator[platform];
  }

  // Input username
  async inputUsername(username) {
    try {
      const element = await $(this.loginPageLocator.usernameInput);
      await commonFunctions.setValue(element, username);
    } catch (error) {
      console.error(`Failed to input username: ${error}`);
    }
  }

  // Input password
  async inputPassword(password) {
    try {
      const element = await $(this.loginPageLocator.passwordInput);
      await commonFunctions.setValue(element, password);
    } catch (error) {
      console.error(`Failed to input password: ${error}`);
    }
  }

  // Click login button
  async clickLoginButton() {
    try {
      const element = await $(this.loginPageLocator.loginButton);
      await commonFunctions.tapElement(element);
    } catch (error) {
      console.error(`Failed to click login button: ${error}`);
    }
  }

  // Perform logout
  async performLogout() {
    try {
      const element = await $(this.loginPageLocator.logoutButton);
      await commonFunctions.tapElement(element);
    } catch (error) {
      console.error(`Failed to perform logout: ${error}`);
    }
  }

  // Verify username required error
  async verifyUserNameRequiredError() {
    try {
      const element = await $(this.loginPageLocator.userNameIsRequired);
      await commonFunctions.verifyElementDisplayed(element);
    } catch (error) {
      console.error(`Failed to verify username required error: ${error}`);
    }
  }

  // Verify password required error
  async verifyPasswordIsRequiredError() {
    try {
      const element = await $(this.loginPageLocator.passwordIsRequired);
      await commonFunctions.verifyElementDisplayed(element);
    } catch (error) {
      console.error(`Failed to verify password required error: ${error}`);
    }
  }

  // Verify incorrect password error
  async verifyIncorrectPasswordError() {
    try {
      const element = await $(this.loginPageLocator.passwordIncorrect);
      await commonFunctions.verifyElementDisplayed(element);
    } catch (error) {
      console.error(`Failed to verify incorrect password error: ${error}`);
    }
  }
  // Verify locked user error
  async verifyLockedUserError(user) {
    try {
      const element = await $(this.loginPageLocator.lockedUserError);
      await commonFunctions.verifyElementDisplayed(element);
    } catch (error) {
      console.error(`Failed to verify locked user error: ${error}`);
    }
  }

  // Verify login page UI elements
  async verifyLoginPageUI() {
    try {
      const loginPageHeading = await $(this.loginPageLocator.loginPageHeading);
      await commonFunctions.verifyElementDisplayed(loginPageHeading);
      const usernameLabel = await $(this.loginPageLocator.usernameLabel);
      await commonFunctions.verifyElementDisplayed(usernameLabel);
      const passwordLabel = await $(this.loginPageLocator.passwordLabel);
      await commonFunctions.verifyElementDisplayed(passwordLabel);
      const loginButton = await $(this.loginPageLocator.loginButton);
      await commonFunctions.verifyElementDisplayed(loginButton);
    } catch (error) {
      console.error(`Failed to verify Login page UI: ${error}`);
    }
  }
}

export default new LoginPage();
