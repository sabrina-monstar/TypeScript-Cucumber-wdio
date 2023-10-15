import { Given, When, Then } from "@wdio/cucumber-framework";
import homePage from "../../pageobjects/home.page";
import cartPage from "../../pageobjects/cart.page";
import registrationPage from "../../pageobjects/registration.page";
import resources from "../../resources";


Given(/^Launch browser and navigate to url$/, async function () {
    homePage.open();
    await browser.pause(2000)
    console.log(`test: ${process.env.TEST_REG_PASSWORD!}`);
});
Then(/^Verify that homepageis visible successfully$/, async function () {
    await expect(browser).toHaveTitleContaining('Automation Exercise')
    await browser.pause(2000)
});

When(/^Add products to cart$/, async function () {
    await browser.scroll(0, 700);
    (await cartPage.addToCart).click();
    await browser.pause(2000)
});

When(/^Click Cart button$/, async function () {
    (await cartPage.viewCart).click();
    await browser.pause(2000)
});

Then(/^Verify that cart page is displayed$/, async function () {
    await expect(browser).toHaveTitleContaining('Automation Exercise - Checkout')
    await browser.pause(2000)

});

When(/^Click Proceed To Checkout$/, async function () {
    (await cartPage.checkout).click()
    await browser.pause(2000)
});

When(/^Click Register button$/, async function () {
    (await cartPage.loginLink).click()
    await browser.pause(5000)
});

When(/^Fill all details in Sign up and create account$/, async function () {
    (await registrationPage.userid).setValue(resources.username);
    (await registrationPage.email).setValue(resources.email);
    (await registrationPage.submitButton).click();
    (await registrationPage.submitButton).click();
    await browser.pause(2000);
    (await registrationPage.title).click();
    (await registrationPage.pass).setValue(process.env.TEST_REG_PASSWORD!);
    (await registrationPage.day_ddown).selectByVisibleText(resources.date);
    (await registrationPage.month_ddown).selectByVisibleText(resources.month);
    (await registrationPage.year_ddown).selectByVisibleText(resources.year);
    (await registrationPage.newsletter).click();
    (await registrationPage.optin).click();
    (await registrationPage.first_Name).setValue(resources.fName);
    (await registrationPage.last_name).setValue(resources.lName);
    (await registrationPage.company).setValue(resources.companyName);
    (await registrationPage.address).setValue(resources.addressInfo);
    (await registrationPage.country).selectByVisibleText(resources.countryName);
    await browser.pause(3000);
    //await browser.scroll(0, 700);
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

Then(/^Verify (.*) and click Continue button$/, async function (accoutText)  {
    await expect(registrationPage.accoutText).toHaveTextContaining(accoutText)
    await browser.pause(5000);
    (await registrationPage.continutButton).click();
    await browser.pause(5000);

});

Then(/^Verify (.*) at top$/, async function ()  {
});

// When(/^Click Cart button$/, async function () {
// });

// When(/^Click Proceed To Checkout button$/, async function () {
// });

// Then(/^Verify Address Details and Review Your Order$/, async function ()  {
// });

// When(/^Enter description in comment text area and click Place Order$/, async function () {
// });

// When(/^Enter payment details: Name on Card, Card Number, CVC, Expiration date$/, () => {

// });

// When(/^Click Pay and Confirm Order button$/, async function () {
// });

// Then(/^Verify the success message (.*)$/, async function () {
// });
