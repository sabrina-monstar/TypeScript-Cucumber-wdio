import { Given } from "@wdio/cucumber-framework";
import cartPage from "../../pageobjects/cart.page";
import loginPage from "../../pageobjects/login.page";
import registrationPage from "../../pageobjects/registration.page";
import homePage from "../../pageobjects/home.page";
import productPage from "../../pageobjects/product.page";

Given(/^Launch the browser$/, async function () {
  cartPage.open();
  await browser.maximizeWindow();
  await browser.pause(3000);
 
});

Given(/^Launch the brower$/, async function () {
  loginPage.open();
  await browser.maximizeWindow();
  await browser.pause(3000);
  
});

Given(/^open the browser and navigate to test url$/, async function () {
  registrationPage.open();
  await browser.maximizeWindow();

});

Given(/^Launch the Home page$/, async function () {
  homePage.open();
  await browser.maximizeWindow();
  await browser.pause(3000);
 
});

Given(/^Launch the Product Page$/, async function () {
  productPage.open();
  await browser.maximizeWindow();
  await browser.pause(3000);
 
});




