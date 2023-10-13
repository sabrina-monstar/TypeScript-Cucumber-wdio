import { Given, When } from "@wdio/cucumber-framework";
import LoginPage from "../../pageobjects/login.page";
//import locatorPage from "../../pageobjects/locator.page";

Given(/^Launch the brower$/, async function () {
  await browser.url("https://automationexercise.com/login");
  await browser.maximizeWindow();
  await browser.pause(3000);
});

//valid login
When(/^Click on Login button with valid credential$/, async function () {
    //with login method
    await LoginPage.login(process.env.TEST_STD_USERNAME!,process.env.TEST_PASSWORD!)
    await browser.pause(2000)
    
});

//invalid login
When(/^Click on Login button and provide invalid credential$/, async function () {
  await LoginPage.login(process.env.TEST_STD_USERNAME!,process.env.TEST_PASSWORD!)
    await browser.pause(2000)
});

	
