import { Given, When, Then } from "@wdio/cucumber-framework";
import locatorPage from "../../pageobjects/locator.page";


Given(/^I open the site$/, async function () {
    await browser.url("https://www.saucedemo.com/");
    await browser.maximizeWindow();
    await browser.pause(3000);

});

Then(/^I enter valid username and Password$/, async function () {
    await locatorPage.sause_user.setValue(process.env.TEST_STD_USERNAME!);
    await locatorPage.sause_pass.setValue(process.env.TEST_PASSWORD!);
    await browser.pause(3000);
    await locatorPage.log_button.click();
    await browser.pause(3000);

});

Then(/^I enter invalid username and password$/, async function () {
    await locatorPage.sause_user.setValue(process.env.TEST_STD_USERNAME!);
    await locatorPage.sause_pass.setValue(process.env.TEST_REG_PASSWORD!);
    await browser.pause(3000);
    await locatorPage.log_button.click();
    await browser.pause(3000);
});

When(/^Click on the logout button$/, async function () {
    await locatorPage.sause_user.setValue(process.env.TEST_STD_USERNAME!);
    await locatorPage.sause_pass.setValue(process.env.TEST_PASSWORD!);
    await browser.pause(3000);
    await locatorPage.log_button.click();
    await browser.pause(3000);
    (await locatorPage.burger_icon).click();
    await browser.pause(3000);
    (await locatorPage.logout).click();
    await browser.pause(3000);
	
});
