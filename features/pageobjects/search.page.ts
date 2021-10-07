import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {
    /**
     * define selectors using getter methods
     */
     get searchQuery() { return $("#search_query_top")}
     get searchBtn() { return $("form[method='get'] button[type='submit']")}

    /**
     * Search Product
     */
     async searchProduct(productName) {
        await (await this.searchQuery).setValue(productName);
        await (await this.searchBtn).click();
    }

    /**
     * Scroll to Product
     */
     async scrolltoProduct() {

        const productSelect = await $('a.product_img_link >img');
        await (await productSelect).scrollIntoView();
        await (await productSelect).waitForDisplayed({ timeout: 10000 });
    }

    /**
     * move near to Product
     */
     async moveToProduct() {
        const productSelect = await $('a.product_img_link >img');
        await (await productSelect).moveTo();
        await (await this.moveOverAddCart).click();
    }
}

export default new SearchPage();
