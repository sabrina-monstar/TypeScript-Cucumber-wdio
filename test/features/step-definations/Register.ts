import { Given, When, Then } from "@wdio/cucumber-framework";
//import chai from "chai";
import locatorPage from "../../pageobjects/locator.page";
import registrationPage from "../../pageobjects/registration.page";



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
  await browser.scroll(0, 700);
  await locatorPage.title.click();
  await browser.pause(2000);
});

When(/^click on Password$/, async function () {
  await locatorPage.pass.addValue("1234");
  browser.pause(5000);
});



Then(/^click on DOB$/, async function () {

  let day_ddown = await $(`#days`)
  await day_ddown.selectByVisibleText("4")
  browser.pause(3000)

  let month_ddown = await $(`#months`)
  await month_ddown.selectByVisibleText("November")
  browser.pause(3000)

  let year_ddown = await $(`#years`)
  await year_ddown.selectByVisibleText("1994")
  browser.pause(3000)

  let newsletter = $(`#newsletter`)
  newsletter.click();
  await browser.pause(3000)

  let optin = $(`//input[@id='optin']`)
  optin.click()
  await browser.pause(3000)


});


Then(/^enter adress info$/, async function () {
  await browser.scroll(0, 700);

  (await registrationPage.first_Name).setValue("Sabrina");
  await browser.pause(3000);
  (await registrationPage.last_name).setValue("Rashid");
  await browser.pause(3000);
  (await registrationPage.company).setValue("Monstarlab");
  await browser.pause(3000);
  (await registrationPage.address).setValue("Dhaka");
  await browser.pause(3000);
  (await registrationPage.country).selectByVisibleText("India");
  await browser.pause(3000);
  (await registrationPage.state).setValue("Dhaka");
  await browser.pause(3000);
  await (await registrationPage.city).setValue("Dhaka");
  (await registrationPage.zip).setValue("1200");
  await browser.pause(3000);
  (await registrationPage.mobile).setValue("01675885735");
  await browser.pause(3000);
  (await registrationPage.create_button).click();
  await browser.pause(3000);

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