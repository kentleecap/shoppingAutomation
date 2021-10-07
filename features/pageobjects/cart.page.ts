import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {
    /**
     * define selectors using getter methods
     */
     get viewList () { return $('#list') }
     get firtsProductionImg () { return $('a.product_img_link >img') }
     get addToCart () { return $(".ajax_add_to_cart_button.btn") }
     get proceedToCheckoutpopBtn () { return $("a.btn.button-medium") }
     get proceedToCheckoutBottomBtn () { return $(".standard-checkout.button-medium") }
     get summary() { return $("#cart_title") }
     get cartDescSummary() { return $("td.cart_description") }

    /**
     * AddCart Product
     */
     async addProductToCart() {
        await (await this.viewList).click();
        await (await this.addToCart).click();
    }

    /**
     * Proceed checkout here
     */
     async orderProduct(productName) {
        await (await this.proceedToCheckoutpopBtn).waitForDisplayed({ timeout: 10000 });
        await (await this.proceedToCheckoutpopBtn).click();

        await expect(this.summary).toHaveTextContaining('SHOPPING-CART SUMMARY');
        await expect(this.cartDescSummary).toHaveTextContaining(productName);
        
        await (await this.proceedToCheckoutBottomBtn).waitForDisplayed({ timeout: 10000 });
        await (await this.proceedToCheckoutBottomBtn).click();
    }

    /**
     * Proceed checkout here
     */
     async summaryPage(productName) {

        await expect(this.summary).toHaveTextContaining('SHOPPING-CART SUMMARY');
        await expect(this.cartDescSummary).toHaveTextContaining(productName);

        await (await this.proceedToCheckoutBottomBtn).waitForDisplayed({ timeout: 10000 });
        await (await this.proceedToCheckoutBottomBtn).click();
    }

    async verifycartOrder(productName) {
        await expect(this.cartDescSummary).toHaveTextContaining(productName);
    }

}

export default new CartPage();