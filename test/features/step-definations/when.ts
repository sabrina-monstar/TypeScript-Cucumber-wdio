import { When } from "@wdio/cucumber-framework";
import cartPage from "../../pageobjects/cart.page";
import loginPage from "../../pageobjects/login.page";
import locatorPage from "../../pageobjects/locator.page";
import registrationPage from "../../pageobjects/registration.page";
import homePage from "../../pageobjects/home.page";
import productPage from "../../pageobjects/product.page";
import { faker } from "@faker-js/faker";


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
	cartPage.loginLink.click();
	//login-method
    loginPage.login(process.env.TEST_STD_USERNAME!, process.env.TEST_PASSWORD!)
	await browser.pause(4000);
});

When(/^click on subscription$/, async function () {
	await browser.scroll(0, 700);

	//subscription email
	await (await locatorPage.subscriptionEmail).setValue(process.env.TEST_EMAIL!);
	(await locatorPage.subscriptionButton).click()
	await browser.pause(4000);
});

When(/^Click on Login button and provide invalid credential$/, async function () {
	loginPage.login(process.env.TEST_STD_USERNAME!, process.env.TEST_REG_PASSWORD!)

});

When(/^Click on signup button and provide valid (.*) and (.*)$/,  async function (userName:string, email:string) {
	loginPage.signUp(userName,email);
	//await browser.pause(2000);
	//await browser.setTimeout({ implicit: 15000, pageLoad: 10000 })
});

When(/^Click on Login button with valid credential$/, async function () {
	loginPage.login(process.env.TEST_STD_USERNAME!, process.env.TEST_PASSWORD!)
});


//registrationPage
When(/^Enter UserName and Email$/, async function () {
	loginPage.signUp(faker.internet.userName(),faker.internet.email());
	await browser.pause(2000);
});


When(/^Select the Title$/, async function () {
	await browser.scroll(0, 700);
	await registrationPage.title.click();
	await browser.pause(2000);
});

When(/^Click on Password$/, async function () {
	await registrationPage.pass.addValue(process.env.TEST_PASSWORD!);
	await browser.pause(2000);
});


When(/^Click on the Newsletter and Subsctiption (.*)$/, async function (email) {
	registrationPage.clickSubscription(email)	
	await browser.pause(3000);

});

//home
When(/^Click on the homepage link$/, async function () {
	(await homePage.home).click();
	await browser.pause(3000);
	(await productPage.viewProduct).click();
	await browser.pause(3000);


});

When(/^Click on the product page link$/, async function () {
	productPage.productLink.click();
	await browser.pause(2000);

});

When(/^Search the product (.*)$/, async function (ele: string) {
	(await productPage.searchProduct).setValue(ele);
	await browser.pause(5000);
	(await productPage.searchButton).click()
	await browser.pause(5000);
	//productPage.searchAnyProduct(ele);
});

When(/^click on view Product$/, async function () {
	productPage.scroll();
	// (await productPage.viewProduct).click()
	// await browser.pause(5000);
	//productPage.clickViewProduct();

});

When(/^Launch the product page$/, async function () {
	 (await productPage.productLink).click();
	 (await productPage.loginLink).click();
	 browser.pause(2000);
});


