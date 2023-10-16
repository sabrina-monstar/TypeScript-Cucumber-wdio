import { Then } from "@wdio/cucumber-framework";
import registrationPage from "../../pageobjects/registration.page";
import resources from "../../resources";


//registrationPage
Then(/^Verify (.*) is visible$/, async function (NewText) {
    expect(registrationPage.signupText).toHaveText(NewText);
    await browser.pause(2000);
});

Then(/^Verify the (.*)$/, async function (Header) {
    expect(await registrationPage.headerText).toHaveText(Header);
    await browser.pause(2000);
});

Then(/^click on DOB$/, async function () {
    registrationPage.day_ddown.selectByVisibleText(resources.date)
    registrationPage.month_ddown.selectByVisibleText(resources.month)
    registrationPage.year_ddown.selectByVisibleText(resources.year)
    browser.pause(3000)

    registrationPage.newsletter.click();
    registrationPage.optin.click()
    await browser.pause(3000)

});

Then(/^user will enter the following details$/, async function () {

    await browser.scroll(0, 700);
    (await registrationPage.first_Name).setValue(resources.fName);
    (await registrationPage.last_name).setValue(resources.lName);
    (await registrationPage.company).setValue(resources.companyName);
    (await registrationPage.address).setValue(resources.addressInfo);
    (await registrationPage.country).selectByVisibleText(resources.countryName);
    await browser.pause(3000);
    //await browser.scroll(0, 700);
    (await registrationPage.state).setValue(resources.stateName);
    await (await registrationPage.city).setValue(resources.cityName);
    await browser.pause(2000);
    (await registrationPage.zip).setValue(resources.zipCode);
    await browser.pause(2000);
    (await registrationPage.mobile).setValue(resources.mobilenumber);
    await browser.pause(2000);
    (await registrationPage.create_button).click();
    await browser.pause(5000);

});
