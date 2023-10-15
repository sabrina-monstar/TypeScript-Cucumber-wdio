import Page from "./page";

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
    get continutButton() {return  $(`.btn.btn-primary`) }


    public open() {
        return super.open("login")

    }

}
export default new RegistrationPage();

