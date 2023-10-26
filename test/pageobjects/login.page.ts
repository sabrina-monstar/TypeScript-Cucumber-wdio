import Page from "./page";

class LoginPage extends Page {
  get username() {
    return $(`input[data-qa='login-email']`);
  }

  get password() {
    return $(`input[placeholder='Password']`);
  }

  get loginButton() {
    return $(`button[data-qa='login-button']`);
  }

  get submitButton() { return $(`//button[normalize-space()='Signup']`) }
  get email() { return $(`input[data-qa='signup-email']`) }
  get userid() { return $(`input[placeholder='Name']`) }
  get logOut() { return $(`a[href='/logout']`) }

  async login(uname: string, pass: string) {
    await this.username.setValue(uname);
    await this.password.setValue(pass);
    await this.loginButton.click();
    //await this.logOut.click();
    
  }

  public open() {
    return super.open('login');
  }

  async signUp(userName: string, email: string) {
    (await this.userid).setValue(userName);
    (await this.email).setValue(email);
    (await this.submitButton).click();
    (await this.submitButton).click();
  }

}

export default new LoginPage();
