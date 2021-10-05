import { TIMEOUT } from 'dns';
import Page from './page';
import AllureReporter from '@wdio/allure-reporter';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get signInLink() { return $(".nav div.header_user_info")}
    get inputUsername () { return $('#username') }
    get btnSubmit () { return $('button[type="submit"]') }

    get searchQuery() { return $("#search_query_top")}
    get searchBtn() { return $("form[method='get'] button[type='submit']")}

    get inputUserEmail () { return $("#email") }
    get inputLoginPassword () { return $("#passwd") }
    get signInBtn () { return $("#SubmitLogin") }

    get createPassword () { return $('#passwd') }
    get inputEmail () { return $('#email_create') }
    get btnCreateSubmit () { return $('#SubmitCreate') }
    get submitCreate () { return $('#submitAccount') }

    get customer_firstname () { return $('#customer_firstname') }
    get customer_lastname () { return $('#customer_lastname') }
    get customer_address1 () { return $('#address1') }
    get customer_city () { return $('#city') }
    get customer_postcode () { return $('#postcode') }
    get customer_id_state () { return $('#id_state') }
    get customer_alias () { return $('#alias') }
    get customer_mobile () { return $('#phone_mobile') }

    get nameText(){ return $("a[title='View my customer account']") }
    get logIn(){ return $("a[title='Log in to your customer account']") }

    get viewList () { return $('#list') }
    get firtsProductionImg () { return $('a.product_img_link >img') }
    get addToCart () { return $(".ajax_add_to_cart_button.btn") }

    get moveOverAddCart(){ return $("a[title='Add to cart']") }
    get proceedCheckout () { return $("a[title='Proceed to checkout']") }
    
    get proceedToCheckoutpopBtn () { return $("a.btn.button-medium") }
    get proceedToCheckoutDeliveryBtn () { return $(".standard-checkout.button-medium") }
    get proceedToCheckoutBottomBtn () { return $(".standard-checkout.button-medium") }
    get proceedToCheckoutProcessAddressBtn () { return $("button[name='processAddress'] span") }
    get clickTerms () { return $("#cgv") }
    
    get paymentWire () { return $("a[title='Pay by bank wire']") }
    get paymentCheck () { return $("a[title='Pay by check.']") }

    get confirmOrder () { return $("p[id='cart_navigation'] span") }
    
    //This is use only for create email dynamic
    globalemail = "";

    //common method
    async inputField(element: Element,value: string) {
        await element.waitForDisplayed({ timeout: 3000 });
        await (await element).setValue(value);
    }

    async clickLink(element: Element) {
        await element.waitForDisplayed({ timeout: 3000 });
        await (await element).click();
    }

    async clickLink(element: Element,value) {
        await element.waitForDisplayed({ timeout: value });
        await (await element).click();
    }

    /**
     * Fuction to return random number
     */
    randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    
    /**
     * SignUp with new Email
     */
    async createAccount (email){
        const rndInt = this.randomIntFromInterval(1, 1000);
        if(email=="random"){
            email = "myrand"+rndInt + "@sd.com";
            this.globalemail = email;
        }
        await (await this.inputEmail).setValue(email);
        await (await this.btnCreateSubmit).click();
        await browser.pause(5000);
     }

     
     /**
     * SignUp Information with input for firstname,lastname,alias
     */
    async enterName(firstname,lastname,alias) {
        await (await this.customer_firstname).waitForDisplayed({ timeout: 10000 });
        await (await this.customer_firstname).setValue(firstname);
        //console.log("Enter firstName:" + firstname);
        
        await (await this.customer_lastname).setValue(lastname);
        await (await this.customer_alias).setValue(alias);
        
    }

     /**
     * SignUp Information with address information
     */
    async enterAddress(address,city,postcode,state) {
        //await (await this.customer_address1).waitForDisplayed({ timeout: 10000 });
        await (await this.customer_address1).setValue(address);
        await (await this.customer_city).setValue(city);
        await (await this.customer_postcode).setValue(postcode);
        await (await this.customer_mobile).setValue("0412345221");
        await (await this.customer_id_state).selectByVisibleText('Florida')

    }

    /**
     * Last step of SignUp Information, click on REGISTER
     */
    async registerNow (){
        AllureReporter.addDescription("Registration Creation","text");
        await (await this.createPassword).setValue("Test@123");
        await (await this.submitCreate).click();
    }

     /**
     * Validate Name match
     */
    async checkNameCreateMatch(firstname,lastname) {
        const fullname = await $("a[title='View my customer account'] ");
        await expect(fullname.getText() == firstname + " " + lastname );
    }

     /**
     *click on Login
     */
    async logInAccountClick() {
        await (await this.logIn).click();
    }
    
    /**
     * Enter Login information
     */
    async loginNow(email,password) {

        if(email=="random"){
            email =this.globalemail;
        }

        await (await this.inputLoginPassword).setValue(password);
        await (await this.inputUserEmail).setValue(email);
        await (await this.signInBtn).click();
        await browser.pause(3000);
    }

     /**
     * Function to sleep, pause
     */
    async waitsleep(sec) {
        await browser.takeScreenshot();
        await browser.pause(sec);
    }

    async maxWindows(){
        await browser.maximizeWindow();
    }

    /**
     * Search Product
     */
    async searchProduct(productName) {
        await (await this.searchQuery).setValue(productName);
        await (await this.searchBtn).click();
        await browser.pause(3000);
        
    }

     /**
     * AddCart Product
     */
    async addProductToCart() {
        await (await this.viewList).click();
        await (await this.addToCart).click();
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

    
    /**
     * Proceed checkout here
     */
    async orderProduct() {
        await (await this.proceedToCheckoutpopBtn).waitForDisplayed({ timeout: 10000 });
        await (await this.proceedToCheckoutpopBtn).click();

        await (await this.proceedToCheckoutBottomBtn).waitForDisplayed({ timeout: 10000 });
        await (await this.proceedToCheckoutBottomBtn).click();
    }


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
     * Make Payment wire
     */
    async makePaymentWire(){
        await (await this.paymentWire).click();
    }
    
    /**
     * Final confirmation for the shopping cart order
     */
    async finalConformation(){
        await (await this.confirmOrder).waitForDisplayed({ timeout: 10000 });
        await (await this.confirmOrder).click();
    }

    async clicksignInLink (){
       await (await this.signInLink).click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('index.php');
    }
}

export default new LoginPage();
