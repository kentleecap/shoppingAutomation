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

    

    get inputUserEmail () { return $("#email") }
    get inputLoginPassword () { return $("#passwd") }
    get signInBtn () { return $("#SubmitLogin") }

    get createPassword () { return $('#passwd') }
    get inputEmail () { return $('#email_create') }
    get btnCreateSubmit () { return $('#SubmitCreate') }
    get submitCreate () { return $('#submitAccount') }

    

    get nameText(){ return $("a[title='View my customer account']") }
    get logIn(){ return $("a[title='Log in to your customer account']") }

    get moveOverAddCart(){ return $("a[title='Add to cart']") }
    get proceedCheckout () { return $("a[title='Proceed to checkout']") }
    
    get signOut(){ return $("a[title='Log me out']") }
    get myCustomerName(){ return $("a[title='View my customer account']") }

    
    //This is use only for create email dynamic
    globalemail = "";


    /**
     * Fuction to return random number
     */
    randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    /**
     * Click on SignOut
     */
     async signOutClick() {
        await (await this.signOut).click();
    }

    
    /**
     * SignUp with new Email
     */
    async createAccount (email){
        //const rndInt = this.randomIntFromInterval(1, 1000);
        const milliseconds = new Date().getTime();
        if(email=="random"){
            email = "myrand"+milliseconds + "@sd.com"; //replace with timestamp to ensure unique
            this.globalemail = email;
            console.log("New email:" + email);
        }
        await (await this.inputEmail).setValue(email);
        await (await this.btnCreateSubmit).click();
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
    }

     /**
     * Function to sleep, pause
     * Debug only
     */
    async waitsleep(sec) {
        await browser.takeScreenshot();
        await browser.pause(sec);
    }

    async maxWindows(){
        await browser.maximizeWindow();
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
