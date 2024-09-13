import { driver } from '@wdio/globals';
import commonFunctions from '../../utils/commonFunctions';
import menuPageLocator from '../locators/menu.json';

class MenuPage {
  constructor() {
    // Convert platform to lowercase to avoid case-sensitive issues
    const platform = process.env.DEVICE.toLowerCase();
    this.menuPageLocator = menuPageLocator[platform];
  }

  // Click hamburger menu
  async clickHamburgerMenu() {
    try {
      const element = await $(this.menuPageLocator.hamburgerMenu);
      await commonFunctions.tapElement(element);
    } catch (error) {
      console.error(`Failed to click hamburger menu: ${error}`);
    }
  }

  // Click login button
  async clickLoginButton() {
    try {
      const element = await $(this.menuPageLocator.loginButton);
      await commonFunctions.tapElement(element);
    } catch (error) {
      console.error(`Failed to click login button: ${error}`);
    }
  }

  // Click logout button
  async clickLogoutButton() {
    try {
      const element = await $(this.menuPageLocator.logoutButton);
      await commonFunctions.tapElement(element);
    } catch (error) {
      console.error(`Failed to click logout button: ${error}`);
    }
  }

  // Verify product page
  async verifyProductPage() {
    try {
      const element = await $(this.menuPageLocator.verifyProductScreen);
      await commonFunctions.tapElement(element);
    } catch (error) {
      console.error(`Failed to verify product page: ${error}`);
    }
  }

  // Terminate app
  async terminateApp() {
    try {
      let activity = await driver.getCurrentPackage();
      await driver.terminateApp(activity);
    } catch (error) {
      console.error(`Failed to terminate app: ${error}`);
    }
  }
}

export default new MenuPage();
