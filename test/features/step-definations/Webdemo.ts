import { Given, When, Then } from "@wdio/cucumber-framework";
import cartPage from "../../pageobjects/cart.page";
import homePage from "../../pageobjects/home.page";
import { faker } from '@faker-js/faker';
import registrationPage from "../../pageobjects/registration.page";
import resources from "../../resources";
import loginPage from "../../pageobjects/login.page";



Given(/^Launch browser and navigate to url$/, async function () {
    homePage.open();
    await browser.maximizeWindow();

});

Then(/^Verify that homepageis visible successfully$/, async function () {
    await expect(browser).toHaveTitleContaining('Automation Exercise')
});

When(/^Add products to cart$/, async function () {
    await browser.scroll(0, 700);
    await (await cartPage.addToCart).click();
    await browser.saveScreenshot('./test/resources/evidence/CartScreenshot.png');

});

When(/^Click Cart button$/, async function () {
    await (await cartPage.viewCart).click();
    await browser.pause(3000);
});

Then(/^Verify that cart page is displayed$/, async function () {
    await expect(browser).toHaveTitleContaining('Automation Exercise - Checkout')
    await browser.pause(2000);

});

When(/^Click Proceed To Checkout$/, async function () {
    await (await cartPage.checkout).click()
    await browser.pause(2000);
});

When(/^Click Register button$/, async function () {
    await (await cartPage.loginLink).click()

});


When(/^Enter login credential and Password and DOB (.*) and (.*) and (.*)$/, async function (date: number, month: string, year: string) {
    await loginPage.signUp(faker.internet.userName(), faker.internet.email());
    await registrationPage.pass.addValue(process.env.TEST_PASSWORD!);
    await registrationPage.enterDOB(date, month, year)
});


When(/^User will select the newsletter and special offer$/, async function () {
    await registrationPage.clickNewsletter();
    await browser.pause(3000);
	
});


When(/^Fill all details in Sign up and create account$/, async function () {
    await registrationPage.createAccount(faker.person.firstName(), faker.person.lastName(), resources.companyName, faker.location.streetAddress());
    await browser.pause(4000)
    await registrationPage.otherInformation(resources.countryName, faker.location.city(), faker.location.state(), faker.location.zipCode(), faker.phone.number());
    await browser.pause(4000)

});

Then(/^Verify (.*) and click Continue button$/, async function (accoutText) {
    await expect(registrationPage.accoutText).toHaveTextContaining(accoutText)
    await (await registrationPage.continutButton).click();

});

Then(/^Verify Logged in as username at top$/, async function () {
    await (await registrationPage.loginText).isDisplayed();

});

When(/^Click on cart button/, async function () {
    await (await cartPage.cartLink).click();
    await browser.pause(2000);
});

When(/^Click on proceed to checkout button$/, async function () {
    await (await cartPage.checkout).click();
});

Then(/^Verify Address Details and Review Your Order$/, async function () {
    await (await cartPage.addressDetails).isDisplayed();
    await (await cartPage.reviewOrder).isDisplayed();
});

When(/^Enter (.*) in comment text area and click Place Order$/, async function (description) {
    await browser.scroll(0, 700);
    await browser.pause(5000);
    await (await cartPage.description).setValue(description);
    await (await cartPage.placeOrder).click();

});

When(/^Enter payment details: Name on Card and (.*) and (.*) and (.*) and (.*)$/, async function (cardNumber, cvc, expirationMonth, expirationYear) {
    await (await cartPage.nameOnCard).setValue(faker.person.fullName());
    await (await cartPage.cardNumber).setValue(cardNumber);
    await (await cartPage.cvc).setValue(cvc);
    await (await cartPage.ExpireMonth).setValue(expirationMonth);
    await browser.pause(3000);
    await (await cartPage.ExpireYear).setValue(expirationYear);
    await browser.pause(3000);

});

When(/^Click Pay and Confirm Order button$/, async function () {
    (await cartPage.submit).click()
    await browser.pause(3000);
});

Then(/^Verify the success (.*)$/, async function (message) {
    expect(cartPage.orderMessage).toHaveTextContaining(message)
    await browser.pause(2000);
});

