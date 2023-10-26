import Page from "./page";

class ProductPage extends Page {

    get productLink() { return $(`a[href='/products']`); }
    get searchProduct() { return $(`#search_product`) }
    get searchButton() { return $(`#submit_search`) }
    get viewProduct() { return $(`a[href='/product_details/1']`) }
    get loginLink() { return $(`a[href='/login']`)}

    async clickProduct() {
        (await this.productLink).click();

    }
    async searchAnyProduct(ele: string) {
        (await this.searchProduct).setValue(ele);
        (await this.searchButton).click();
    }

    public open() {
        return super.open("products")
    }

    async scroll(){
      await browser.scroll(0, 700);
        
    }

    // async clickViewProduct() {
    //     await browser.pause(2000);
    //     (await this.viewProduct).click()
    //     await browser.pause(2000);

    // }

}
export default new ProductPage()