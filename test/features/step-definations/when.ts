import { When } from "@wdio/cucumber-framework";
import cartPage from "../../pageobjects/cart.page";
import loginPage from "../../pageobjects/login.page";
import locatorPage from "../../pageobjects/locator.page";
import registrationPage from "../../pageobjects/registration.page";
import homePage from "../../pageobjects/home.page";
import productPage from "../../pageobjects/product.page";

//cart
When(/^click on add to the cart$/, async function () {
	await browser.scroll(0, 700);
	(await cartPage.addToCart).click();
	await browser.pause(3000);

});

When(/^click on view cart$/, async function () {
	(await cartPage.viewCart).click();
	await browser.pause(2000);
	(await cartPage.checkout).click();

});

When(/^click on login link and enter login credentials$/, async function () {
	await cartPage.loginLink.click();
	await browser.pause(2000);
	//login-method
	await loginPage.login(process.env.TEST_STD_USERNAME!, process.env.TEST_PASSWORD!)
	await browser.pause(4000);
});

When(/^click on subscription$/, async function () {
	await browser.scroll(0, 700);

	//subscription email
	await (await locatorPage.subscriptionEmail).setValue(process.env.TEST_EMAIL!);
	(await locatorPage.subscriptionButton).click()
	await browser.pause(4000);
});

// Login
When(/^Click on Login button with valid credential$/, async function () {
	//with login method
	await loginPage.login(process.env.TEST_STD_USERNAME!, process.env.TEST_PASSWORD!)
	await browser.pause(2000)

});

When(/^Click on Login button and provide invalid credential$/, async function () {
	await loginPage.login(process.env.TEST_STD_USERNAME!, process.env.TEST_PASSWORD!)
	await browser.pause(2000)
});


//registrationPage

When(/^Enter (.*) and (.*)$/, async function (UserName, Email) {
	(await registrationPage.userid).setValue(UserName);
	(await registrationPage.email).setValue(Email);
	(await registrationPage.submitButton).click();
	(await registrationPage.submitButton).click();
	await browser.pause(2000);
});


When(/^Select the Title$/, async function () {
	await browser.scroll(0, 700);
	await registrationPage.title.click();
	await browser.pause(2000);
});

When(/^click on Password$/, async function () {
	await registrationPage.pass.addValue(process.env.TEST_PASSWORD!);
	await browser.pause(2000);
});

//home
When(/^Click on the homepage link$/, async function () {
	(await homePage.home).click();
	await browser.pause(3000);

});

When(/^Click on the product page link$/, async function () {
	productPage.productLink.click();
   await browser.pause(5000);
});
