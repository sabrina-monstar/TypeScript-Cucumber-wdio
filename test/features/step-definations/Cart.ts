import { Given, When } from "@wdio/cucumber-framework";
import LoginPage from "../../pageobjects/login.page";

Given(/^Launch the browser$/, async function () {
	await browser.url("http://automationexercise.com");
	await browser.maximizeWindow();
	await browser.pause(3000);

});

When(/^click on add to the cart$/, async function () {
	// let scrollEle= await $(`//h2[contains(text(),'Brands')]`)
	let scrollEle = await $(`//a[normalize-space()='Women']`);
	await scrollEle.scrollIntoView();
	await browser.pause(3000);
	let ele = await $(`a[href='/product_details/1']`);
	//ele.isDisplayed()
	ele.waitForDisplayed();
	//await browser.pause(3000);
	let ele2 = $(
		`//body[1]/section[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]`
	);
	ele2.click();
	await browser.pause(3000);
	//await browser.debug(5000)
});

When(/^click on view cart$/, async function () {
	let viewCart = await $(`//u[contains(text(),'View Cart')]`);
	await viewCart.click();
	await browser.pause(3000);
	let checkout = await $(`//a[normalize-space()='Proceed To Checkout']`);
	await checkout.click();
	await browser.pause(4000);

});

When(/^click on login link and enter login credentials$/, async function () {
	let loginLink = await $(`//u[contains(text(),'Register / Login')]`);
	await loginLink.click();
	//login-method
	await LoginPage.login(process.env.TEST_STD_USERNAME!, process.env.TEST_PASSWORD!)
	await browser.pause(4000);
});


// When(/^click on subscription$/, async function () {
// 	let subscription = await $(`//h2[normalize-space()='Subscription']`)
// 	subscription.scrollIntoView()

// 	//subscription email
// 	let subscriptionEmail = await $(`#susbscribe_email`);
// 	await subscriptionEmail.setValue("sabrinamdel@gmail.com");
// 	await browser.pause(2000);
// 	let subscriptionButton = await $(`.fa.fa-arrow-circle-o-right`);
// 	subscriptionButton.click();
// 	await browser.pause(4000);
// });
