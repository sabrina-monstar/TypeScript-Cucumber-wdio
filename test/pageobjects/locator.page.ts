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

  //cart
  // get addToCart() { return $(`//body[1]/section[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]`) }
  // get viewCart() { return $(`//u[contains(text(),'View Cart')]`) }
  // get checkout() { return $(`//a[normalize-space()='Proceed To Checkout']`) }
  // get loginLink() { return $(`//u[contains(text(),'Register / Login')]`)}

  //subscription-feature
  get subscriptionEmail() {return $(`#susbscribe_email`)}
  get subscriptionButton() {return $(`.fa.fa-arrow-circle-o-right`)}

  //product
  get productLink() { return $(`a[href='/products']`)}
  get home() { return $(`//a[normalize-space()='Home']`)}
}


export default new locator()


