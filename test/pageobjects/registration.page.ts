//import { faker } from "@faker-js/faker";
import Page from "./page";
//import resources from "../resources";

class RegistrationPage extends Page {

    //Registration_form_personal_details
    get uname() { return $(`input[data-qa='login-email']`) }
    get password() { return $(`input[placeholder='Password']`) }
    get button() { return $(`button[data-qa='login-button']`) }
    get submitButton() { return $(`//button[normalize-space()='Signup']`) }
    get email() { return $(`input[data-qa='signup-email']`) }
    get userid() { return $(`input[placeholder='Name']`) }
    get title() { return $(`//input[@value="Mrs"]`) }
    get headerText() { return $(`//b[contains(text(),'Enter Account Information')]`) }
    get signupText() { return $(`div[class='signup-form'] h2`) }
    get signupButton() { return $(`a[href='/login']`) }
    get pass() { return $(`#password`) }
    get day_ddown() { return $(`#days`) }
    get month_ddown() { return $(`#months`) }
    get year_ddown() { return $(`#years`) }
    get newsletter() { return $(`#newsletter`) }
    get optin() { return $(`//input[@id='optin']`) }

    //Registration_Form_Address
    get first_Name() { return $(`#first_name`) }
    get last_name() { return $(`#last_name`) }
    get company() { return $(`#company`) }
    get address() { return $(`#address1`) }
    get country() { return $(`#country`) }
    get state() { return $(`#state`) }
    get city() { return $(`//input[@id='city']`) }
    get zip() { return $(`#zipcode`) }
    get mobile() { return $(`#mobile_number`) }
    get create_button() { return $(`button[data-qa='create-account']`) }


    //after_registration
    get accoutText() { return $(`h2[class='title text-center'] b`) }
    get continutButton() { return $(`.btn.btn-primary`) }
    get loginText() { return $(`//*[text()=' Logged in as ']`) }
    get logOut() { return $(`a[href='/logout']`) }


    //subscriptionButton
    get subscriptionText() { return $(`#susbscribe_email`) }
    get subscribeButton() { return $(`.fa.fa-arrow-circle-o-right`) }


    //method
    public open() {
        return super.open("login")
    }

    async enterDOB(date: number, month: string, year: string) {
        this.day_ddown.selectByVisibleText(date)
        this.month_ddown.selectByVisibleText(month)
        this.year_ddown.selectByVisibleText(year)     

    }

    async clickNewsletter() {
        await(await this.newsletter).click()
        //await this.newsletter.click();
        await (await this.optin).click();

    }

    async createAccount(firstName: string, lastName: string, company: string, address: string) {
        (await this.first_Name).setValue(firstName);
        (await this.last_name).setValue(lastName);
        (await this.company).setValue(company);
        (await this.address).setValue(address);   

    }

    async otherInformation(country: string, state: string, city: string, zip: string, mobileNumber: string) {
        (await this.country).selectByVisibleText(country);
        await (await this.state).setValue(state);
        await (await this.city).setValue(city);
        await (await this.zip).setValue(zip);
        await (await this.mobile).setValue(mobileNumber);
        await (await this.create_button).click();
        //await (await this.logOut).click()

    }

    async clickSubscription(email:string) {
        (await (this.subscriptionText)).setValue(email);
        (await (this.subscribeButton)).click();
    }



























    // async enterFirstName() {
    //     let firstName = faker.person.firstName()
    //     await (await this.first_Name).setValue(firstName);
    // }

    // async enterLastName() {
    //     let lastName = faker.person.lastName()
    //     await (await this.last_name).setValue(lastName)
    // }

    // async enterCompany() {
    //     let company = resources.companyName
    //     await (await this.company).setValue(company);
    //     browser.pause(2000);
    // }

    // async enterAddress() {
    //     let address = faker.location.streetAddress()
    //     await (await this.address).setValue(address)
    //     browser.pause(2000);
    // }

    // async enterCountry() {
    //     let country = resources.countryName;
    //     await (await this.country).selectByVisibleText(country);
    //     browser.pause(2000);
    // }

    // async enterState() {
    //     let state = faker.location.state()
    //     await (await this.state).setValue(state);

    // }

    // async enterCity() {
    //     let city = faker.location.city()
    //     await (await this.city).setValue(city);

    // }

    // async enterZipCode() {
    //     let zip = faker.location.zipCode()
    //     await (await this.zip).setValue(zip);

    // }

    // async enterPhoneNumber() {
    //     let mobileNumber = faker.phone.number()
    //     await (await this.mobile).setValue(mobileNumber);
    //     browser.pause(2000);
    // }

    // async clickCreteButton() {
    //     await (await this.create_button).click();
    //     browser.pause(2000);
    // }


}
export default new RegistrationPage();

