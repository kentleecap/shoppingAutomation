/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path: string) {
        browser.setWindowSize(1000, 1000);
        //browser.maximizeWindow()
        return browser.url(`http://automationpractice.com/${path}`)
    }
}
