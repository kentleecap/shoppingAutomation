import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CustomerPage extends Page {
    /**
     * define selectors using getter methods
     */
     get customer_firstname () { return $('#customer_firstname') }
     get customer_lastname () { return $('#customer_lastname') }
     get customer_address1 () { return $('#address1') }
     get customer_city () { return $('#city') }
     get customer_postcode () { return $('#postcode') }
     get customer_id_state () { return $('#id_state') }
     get customer_alias () { return $('#alias') }
     get customer_mobile () { return $('#phone_mobile') }

    /**
     * SignUp Information with input for firstname,lastname,alias
     */
     async enterName(firstname,lastname,alias) {
        await (await this.customer_firstname).waitForDisplayed({ timeout: 10000 });
        await (await this.customer_firstname).setValue(firstname);
        await (await this.customer_lastname).setValue(lastname);
        await (await this.customer_alias).setValue(alias);
        
    }

     /**
     * SignUp Information with address information
     */
    async enterAddress(address,city,postcode,state) {
        await (await this.customer_address1).setValue(address);
        await (await this.customer_city).setValue(city);
        await (await this.customer_postcode).setValue(postcode);
        await (await this.customer_mobile).setValue("0412345221");
        await (await this.customer_id_state).selectByVisibleText('Florida')

    }

}

export default new CustomerPage();