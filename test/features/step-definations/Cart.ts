import { Given, When } from "@wdio/cucumber-framework";
import LoginPage from "../../pageobjects/login.page";
import locatorPage from "../../pageobjects/locator.page";
import cartPage from "../../pageobjects/cart.page";

Given(/^Launch the browser$/, async function () {
	cartPage.open()
	await browser.maximizeWindow();
	await browser.pause(3000);

});

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
	await LoginPage.login(process.env.TEST_STD_USERNAME!, process.env.TEST_PASSWORD!)
	await browser.pause(4000);
});


When(/^click on subscription$/, async function () {
	await browser.scroll(0, 700);

	//subscription email
	await (await locatorPage.subscriptionEmail).setValue(process.env.TEST_EMAIL!);
	(await locatorPage.subscriptionButton).click()
	await browser.pause(4000);
});
