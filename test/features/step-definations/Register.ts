import { Given, When, Then } from "@wdio/cucumber-framework";
//import chai from "chai";
import locatorPage from "../../pageobjects/locator.page";

Given(/^open the browser and navigate to test url$/, async function () {
  await browser.url("https://automationexercise.com/login");
  await browser.maximizeWindow();
  await browser.pause(2000);
});

Then(/^Verify (.*) is visible$/, async function (NewText) {
  expect(locatorPage.signupText).toHaveText(NewText);
  await browser.pause(2000);
});

When(/^Enter (.*) and (.*)$/, async function (UserName, Email) {
  (await locatorPage.userid).setValue(UserName);
  (await locatorPage.email).setValue(Email);
  (await locatorPage.submitButton).click();
  (await locatorPage.submitButton).click();
  await browser.pause(2000);
});

Then(/^Verify the (.*)$/, async function (Header) {
  expect(await locatorPage.headerText).toHaveText(Header);
  await browser.pause(2000);
});

When(/^Select the Title$/, async function () {
  locatorPage.title.click();
  await browser.pause(2000);
});

When(/^click on Password$/, async function () {
  await locatorPage.pass.addValue("1234");
  browser.pause(5000);
});



When(/^Product page can be clickable$/, async function () {
  let productLink = await $(`a[href='/products']`);
  await productLink.click();
  await browser.pause(5000);
});

When(/^Verify that home page is visible successfully$/, async function () {
  let ele = await $(`//a[normalize-space()='Home']`);
  //let ele = await $(`li:nth-child(1) a:nth-child(1)`);
  await ele.click();
  //await browser.debug()
  await browser.pause(5000);
});
