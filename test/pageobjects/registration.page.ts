import Page from "./page";

class RegistrationPage extends Page {

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


public open() {
    return super.open("login")
    
}
    
}
export default new RegistrationPage();

