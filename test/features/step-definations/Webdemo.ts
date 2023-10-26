import { Given, When, Then } from "@wdio/cucumber-framework";
import cartPage from "../../pageobjects/cart.page";
import homePage from "../../pageobjects/home.page";
import { faker } from '@faker-js/faker';
import registrationPage from "../../pageobjects/registration.page";
import resources from "../../resources";



Given(/^Launch browser and navigate to url$/, async function () {
    homePage.open();
    await browser.maximizeWindow(); 

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
    await browser.pause(2000)
});

When(/^Fill all details in Sign up and create account$/, async function () {
    (await registrationPage.userid).setValue(faker.internet.userName());
    (await registrationPage.email).setValue(faker.internet.email());
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
    (await registrationPage.first_Name).setValue(faker.person.firstName());
    (await registrationPage.last_name).setValue(faker.person.lastName());
    (await registrationPage.company).setValue(faker.company.name());
    (await registrationPage.address).setValue(faker.location.streetAddress());
    (await registrationPage.country).selectByVisibleText(resources.countryName);
    await browser.pause(3000);
    (await registrationPage.state).setValue(faker.location.state());
    await (await registrationPage.city).setValue(faker.location.city());
    await browser.pause(2000);
    (await registrationPage.zip).setValue(faker.location.zipCode());
    await browser.pause(2000);
    (await registrationPage.mobile).setValue(faker.phone.number());
    await browser.pause(2000);
    (await registrationPage.create_button).click();
    await browser.pause(5000);
});

Then(/^Verify (.*) and click Continue button$/, async function (accoutText) {
    await expect(registrationPage.accoutText).toHaveTextContaining(accoutText)
    await browser.pause(2000);
    (await registrationPage.continutButton).click();
    await browser.pause(2000);

});

Then(/^Verify Logged in as username at top$/, async function () {
    (await registrationPage.loginText).isDisplayed();

});

When(/^Click on cart button/, async function () {
    (await cartPage.cartLink).click();
    await browser.pause(2000);

});

When(/^Click on proceed to checkout button$/, async function () {
    (await cartPage.checkout).click();
    await browser.pause(2000);
});

Then(/^Verify Address Details and Review Your Order$/, async function () {
    (await cartPage.addressDetails).isDisplayed();
    (await cartPage.reviewOrder).isDisplayed();
    await browser.pause(2000);
});

When(/^Enter (.*) in comment text area and click Place Order$/, async function (description) {
    await browser.scroll(0, 700);
    await browser.pause(5000);
    (await cartPage.description).setValue(description);
    await browser.pause(3000);
    (await cartPage.placeOrder).click();
    await browser.pause(3000);

});

When(/^Enter payment details: Name on Card and (.*) and (.*) and (.*) and (.*)$/, async function (cardNumber, cvc, expirationMonth, expirationYear)  {
    (await cartPage.nameOnCard).setValue(faker.person.fullName());
    await browser.pause(3000);
    (await cartPage.cardNumber).setValue(cardNumber);
    (await cartPage.cvc).setValue(cvc);
    await browser.pause(3000);
    (await cartPage.ExpireMonth).setValue(expirationMonth);
    await browser.pause(5000);
    (await cartPage.ExpireYear).setValue(expirationYear);
    await browser.pause(5000);   

});

When(/^Click Pay and Confirm Order button$/, async function () {
    (await cartPage.submit).click()
     await browser.pause(6000); 
});

Then(/^Verify the success (.*)$/, async function (message) {
    expect(cartPage.orderMessage).toHaveTextContaining(message)
    await browser.pause(3000); 
});

