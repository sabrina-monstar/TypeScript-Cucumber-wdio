import { browser } from '@wdio/globals'

export default class Page {

    public open(path:string) {
        return browser.url(`https://automationexercise.com/${path}`)
        //return browser.url(`browser.config.automationexerciseURL${path}`)
    }
}
