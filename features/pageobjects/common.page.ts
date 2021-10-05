import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CommonPage extends Page {
    /**
     * define selectors using getter methods
     */
    get signOut(){ return $("a[title='Log me out']") }
    get myCustomerName(){ return $("a[title='View my customer account']") }

    /**
     * Click on SignOut
     */
    async signOutClick() {
        await (await this.signOut).click();
    }
}

export default new CommonPage();
