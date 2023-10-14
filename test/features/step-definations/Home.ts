import { Given, When } from "@wdio/cucumber-framework";
import homePage from "../../pageobjects/home.page";

Given(/^Launch the Home page$/, async function () {
  homePage.open()
  await browser.maximizeWindow();
  await browser.pause(2000);

});

When(/^Click on the homepage link$/,  async function () {
    (await homePage.home).click();
     await browser.pause(3000);

  });