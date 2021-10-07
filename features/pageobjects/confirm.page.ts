import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ConfirmPage extends Page {
    /**
     * define selectors using getter methods
     */
    get proceedToCheckoutDeliveryBtn () { return $(".standard-checkout.button-medium") }
    get proceedToCheckoutProcessAddressBtn () { return $("button[name='processAddress'] span") }
    get clickTerms () { return $("#cgv") }
    get confirmOrder () { return $("p[id='cart_navigation'] span") }

    get confirmHeader () { return $("#center_column > h1") }
    get confirmDetail () { return $("#center_column > div") }
    


    /**
     * Proceed checkout to confirm correct address
     */
     async confirmAddress(){
        await (await this.proceedToCheckoutProcessAddressBtn).waitForDisplayed({ timeout: 10000 });
        await (await this.proceedToCheckoutProcessAddressBtn).click();
    }

    /**
     * Proceed checkout to confirm develivery
     */
    async confirmDelivery(){
        await (await this.clickTerms).click();
        await (await this.proceedToCheckoutDeliveryBtn).waitForDisplayed({ timeout: 10000 });
        await (await this.proceedToCheckoutDeliveryBtn).click();
    }

    /**
     * Final confirmation for the shopping cart order
     */
     async finalConformation(){
        await (await this.confirmOrder).waitForDisplayed({ timeout: 10000 });
        await (await this.confirmOrder).click();
    }

    /**
     * Final confirmation Order confirmation
     */
     async finalConfirmDetails(){
        await (await this.confirmDetail).waitForDisplayed({ timeout: 10000 });
        await expect(this.confirmHeader).toHaveTextContaining("ORDER CONFIRMATION");
        await expect(this.confirmDetail).toHaveTextContaining('Your order on My Store is complete.');
    }

    /**
     * Verify confirmation information
     */
    async verifyOrderConfirmation() {
        await expect(this.confirmHeader).toHaveTextContaining("ORDER CONFIRMATION");
        await expect(this.confirmDetail).toHaveTextContaining("Your order on My Store is complete.");
        
    }
}

export default new ConfirmPage();
