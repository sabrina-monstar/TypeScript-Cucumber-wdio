import { Given, When, Then } from "@wdio/cucumber-framework";
//import chai from "chai";
import registrationPage from "../../pageobjects/registration.page";
import resources from "../../resources";


Given(/^open the browser and navigate to test url$/, async function () {
  registrationPage.open()
  await browser.maximizeWindow();
  await browser.pause(2000);
});

Then(/^Verify (.*) is visible$/, async function (NewText) {
  expect(registrationPage.signupText).toHaveText(NewText);
  await browser.pause(2000);
});

When(/^Enter (.*) and (.*)$/, async function (UserName, Email) {
  (await registrationPage.userid).setValue(UserName);
  (await registrationPage.email).setValue(Email);
  (await registrationPage.submitButton).click();
  (await registrationPage.submitButton).click();
  await browser.pause(2000);
});

Then(/^Verify the (.*)$/, async function (Header) {
  expect(await registrationPage.headerText).toHaveText(Header);
  await browser.pause(2000);
});

When(/^Select the Title$/, async function () {
  await browser.scroll(0, 700);
  await registrationPage.title.click();
  await browser.pause(2000);
});

When(/^click on Password$/, async function () {
  await registrationPage.pass.addValue("1234");
  await browser.pause(2000);
});



Then(/^click on DOB$/, async function () {
  registrationPage.day_ddown.selectByVisibleText("4")
  registrationPage.month_ddown.selectByVisibleText("November")
  registrationPage.year_ddown.selectByVisibleText("1994")
  browser.pause(3000)

  registrationPage.newsletter.click();
  registrationPage.optin.click()
  await browser.pause(3000)

});


Then(/^user will enter the following details$/, async function () {

  await browser.scroll(0, 700);
  (await registrationPage.first_Name).setValue(resources.fName);
  (await registrationPage.last_name).setValue(resources.lName);
  (await registrationPage.company).setValue(resources.companyName);
  (await registrationPage.address).setValue(resources.addressInfo);
  (await registrationPage.country).selectByVisibleText(resources.countryName);
  await browser.pause(3000);
  await browser.scroll(0, 700);
  (await registrationPage.state).setValue(resources.stateName);
  await (await registrationPage.city).setValue(resources.cityName);
  await browser.pause(2000);
  (await registrationPage.zip).setValue(resources.zipCode);
  await browser.pause(2000);
  (await registrationPage.mobile).setValue(resources.mobilenumber);
  await browser.pause(2000);
  (await registrationPage.create_button).click();
  await browser.pause(5000);

});


