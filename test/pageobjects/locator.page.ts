
class locator {
  //subscription-feature
  get subscriptionEmail() { return $(`#susbscribe_email`) }
  get subscriptionButton() { return $(`.fa.fa-arrow-circle-o-right`) }

  //product
  get productLink() { return $(`a[href='/products']`) }
  get home() { return $(`//a[normalize-space()='Home']`) }

  get pagetitle() { return $(`//title[normalize-space()='Automation Exercise']`)}
}

  

export default new locator()
