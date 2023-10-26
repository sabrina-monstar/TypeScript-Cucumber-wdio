import Page from "./page";

class HomePage extends Page{

    get home() {return $(`//a[normalize-space()='Home']`)}

    public open() {
        return super.open("")
        
    }

}
export default new HomePage()