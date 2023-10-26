import { Then } from "@wdio/cucumber-framework";
import registrationPage from "../../pageobjects/registration.page";
import resources from "../../resources";
import { faker } from "@faker-js/faker";

//registrationPage
Then(/^Verify (.*) is visible$/, async function (NewText) {
    expect(registrationPage.signupText).toHaveText(NewText);;
});

Then(/^Verify the (.*)$/, async function (Header) {
    expect(await registrationPage.headerText).toHaveText(Header);;
});

Then(/^Click on DOB (.*) and (.*) and (.*)$/, async function (date: number, month: string, year: string) {
    registrationPage.enterDOB(date, month, year)
    await browser.pause(5000);
});


Then(/^User will select newsletter and special offer$/, async function () {
    registrationPage.clickNewsletter()
    await browser.pause(5000);

});

Then(/^User will enter the following details$/, async function () {
    registrationPage.createAccount(faker.person.firstName(), faker.person.lastName(), resources.companyName, faker.location.streetAddress());
    registrationPage.otherInformation(resources.countryName, faker.location.city(), faker.location.state(), faker.location.zipCode(), faker.phone.number());
    await browser.pause(6000);

});

