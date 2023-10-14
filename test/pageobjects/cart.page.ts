import Page from "./page";

class CartPage extends Page {

    get addToCart() { return $(`//body[1]/section[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]`) }
    get viewCart() { return $(`//u[contains(text(),'View Cart')]`) }
    get checkout() { return $(`//a[normalize-space()='Proceed To Checkout']`) }
    get loginLink() { return $(`//u[contains(text(),'Register / Login')]`) }

    public open() {
        return super.open("")
    }

}

export default new CartPage()