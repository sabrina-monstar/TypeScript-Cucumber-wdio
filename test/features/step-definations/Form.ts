import { Given, When } from "@wdio/cucumber-framework";

Given(/^open the browser and navigate to url$/, async function () {
  await browser.url("http://automationexercise.com");
  await browser.maximizeWindow();
  await browser.pause(3000);
});

When(/^Click on Signup button$/, async function () {
  let logEle = await $(`a[href='/login']`);
  await logEle.click();
  await browser.pause(2000);
});

When(/^Enter (.*) and (.*)$/, async function (UserName, Email) {
  let uName = await $(`input[placeholder='Name']`);
  uName.setValue(UserName);
  let email = await $(`input[data-qa='signup-email']`);
  email.setValue(Email);
});

When(/^click on submit button$/, async function () {
  let submitBtn = await $(`button[data-qa='login-button']`);
  await submitBtn.click();
  await browser.pause(3000);
});

When(/^Select the Title$/, async function () {
  let title = await $(`//input[@value="Mrs"]`);
  await title.click();
  await browser.pause(2000);
});
