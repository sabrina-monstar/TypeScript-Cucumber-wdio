import { Given, When } from "@wdio/cucumber-framework";
import productPage from "../../pageobjects/product.page";


Given(/^Launch the Product Page$/, async function () {
    productPage.open();
    await browser.maximizeWindow();
    await browser.pause(3000);
});


When(/^Click on the product page link$/, async function () {
	 productPage.productLink.click();
    await browser.pause(5000);
});
