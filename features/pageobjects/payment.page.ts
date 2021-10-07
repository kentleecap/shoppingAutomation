import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PaymentPage extends Page {
    /**
     * define selectors using getter methods
     */
     get paymentWire () { return $("a[title='Pay by bank wire']") }
     get paymentCheck () { return $("a[title='Pay by check.']") }
     get paymentHeader () { return $("#center_column > h1") }
     get productDescSummary() { return $("td.cart_description") }


    /**
     * Make Payment wire
     */
    async makePaymentWire(){
        await (await this.paymentWire).click();
    }

    async verifyPaymentProduct(productName) {
        await expect(this.paymentHeader).toHaveTextContaining("PLEASE CHOOSE YOUR PAYMENT METHOD");
        await expect(this.productDescSummary).toHaveTextContaining(productName);
    }

}

export default new PaymentPage();
