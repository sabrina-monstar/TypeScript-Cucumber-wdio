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
    await loginPage.login(process.env.TEST_STD_USERNAME!, process.env.TEST_PASSWORD!)
	await browser.pause(4000);
});

When(/^click on subscription$/, async function () {
	await browser.scroll(0, 700);
	await browser.pause(2000);

	//subscription email
	await (await locatorPage.subscriptionEmail).setValue(process.env.TEST_EMAIL!);
	await browser.pause(2000);
	await locatorPage.subscriptionButton.click()
	
});

When(/^Click on Login button and provide invalid credential$/, async function () {
	await loginPage.login(process.env.TEST_STD_USERNAME!, process.env.TEST_REG_PASSWORD!)

});

// When(/^Click on signup button and provide valid (.*) and (.*)$/,  async function (userName:string, email:string) {
// 	await loginPage.signUp(userName,email);
// });

When(/^Click on Login button with valid credential$/, async function () {
	await loginPage.login(process.env.TEST_STD_USERNAME!, process.env.TEST_PASSWORD!)
});


//registrationPage
When(/^Enter UserName and Email$/, async function () {
	await loginPage.signUp(faker.internet.userName(),faker.internet.email());
});


When(/^Select the Title$/, async function () {
	await browser.scroll(0, 700);
	await registrationPage.title.click();
});

When(/^Click on Password$/, async function () {
	await registrationPage.pass.addValue(process.env.TEST_PASSWORD!);
});


// When(/^Click on the Newsletter and Subsctiption (.*)$/, async function (email) {
// 	await registrationPage.clickSubscription(email)	
// });

//home
When(/^Click on the homepage link$/, async function () {
	(await homePage.home).click();
	await browser.pause(3000);
	(await productPage.viewProduct).click();
	 await browser.pause(3000);


});

When(/^Click on the product page link$/, async function () {
	await (await productPage.productLink).click();
	await browser.pause(2000);

});

When(/^Search the product (.*)$/, async function (ele: string) {
	await (await productPage.searchProduct).setValue(ele);
	await browser.pause(5000);
	await (await productPage.searchButton).click()
	await browser.pause(5000);
	productPage.searchAnyProduct(ele);
});

When(/^click on view Product$/, async function () {
	productPage.scroll();
	await(await productPage.viewProduct).click()
	await browser.pause(5000);
	//productPage.clickViewProduct();

});

When(/^Launch the product page$/, async function () {
	 await (await productPage.productLink).click();
	 await (await productPage.loginLink).click();
	 browser.pause(2000);
});


