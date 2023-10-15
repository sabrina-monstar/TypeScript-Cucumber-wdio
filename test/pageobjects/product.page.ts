import Page from "./page";

class ProductPage extends Page {

    get productLink() { return $(`a[href='/products']`); }

    public open() {
        return super.open("products")
    }




}
export default new ProductPage()