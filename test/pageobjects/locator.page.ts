
class locator {
  //subscription-feature
  get subscriptionEmail() { return $(`#susbscribe_email`) }
  get subscriptionButton() { return $(`.fa.fa-arrow-circle-o-right`) }

  //product
  get productLink() { return $(`a[href='/products']`) }
  get home() { return $(`//a[normalize-space()='Home']`) }

  get pagetitle() { return $(`//title[normalize-space()='Automation Exercise']`)}




  get sause_user() {return $(`#user-name`)}
  get sause_pass() {return $(`#password`)}
  get log_button() {return $(`#login-button`)}
  get burger_icon() {return $(`#react-burger-menu-btn`)}
  get logout() {return $(`#logout_sidebar_link`)}

}

export default new locator()
