//import Page from "./page";

class LoginPage {
  get username() {
    return $(`input[data-qa='login-email']`);
  }

  get password() {
    return $(`input[placeholder='Password']`);
  }

  get loginButton() {
    return $(`button[data-qa='login-button']`);
  }

  async login(uname: string, pass: string) {
    await this.username.setValue(uname);
    await this.password.setValue(pass);
    await this.loginButton.click();
  }
}

export default new LoginPage();
