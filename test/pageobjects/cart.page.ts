import Page from "./page";

class CartPage extends Page {

    get addToCart() { return $(`//body[1]/section[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]`) }
    get viewCart() { return $(`//u[contains(text(),'View Cart')]`) }
    get continue() { return $(`//button[normalize-space()='Continue Shopping']`) }
    get checkout() { return $(`//a[normalize-space()='Proceed To Checkout']`) }
    get loginLink() { return $(`//u[contains(text(),'Register / Login')]`) }
    get cartLink() { return $(`//*[text()=' Cart']`) }
    get addressDetails() { return $(`//h2[contains(text(),'Address Details')]`) }
    get reviewOrder() { return $(`//h2[contains(text(),'Review Your Order')]`) }
    get description() { return $(`//textarea[@name='message']`) }
    get placeOrder() { return $(`//a[contains(text(),'Place Order')]`) }
    get nameOnCard() { return $(`input[name='name_on_card']`) }
    get cardNumber() { return $(`input[name='card_number']`) }
    get cvc() { return $(`input[placeholder='ex. 311']`) }
    get ExpireMonth() { return $(`input[placeholder='MM']`) }
    get ExpireYear() { return $(`input[placeholder='YYYY']`) }
    get submit() { return $(`//button[@id='submit']`) }

    public open() {
        return super.open("")
    }

}

export default new CartPage()