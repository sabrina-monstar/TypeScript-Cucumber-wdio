//import Page from "./page";

class locator {

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

}

export default new locator()