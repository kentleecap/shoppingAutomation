import { Given, When, Then } from '@cucumber/cucumber';

import LoginPage from '../pageobjects/login.page';
import CommonPage from '../pageobjects/common.page';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

Then(/^I click on signIn link$/, async () => {
    await LoginPage.clicksignInLink()
});

When(/^I login with (.*) and (.+)$/, async (username, password) => {
    await LoginPage.enterLoginIDPassword(username, password)
});

When(/^I signIn with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.signIn(username, password)
});

Then(/^I enter firstname with (.*) and last name with (.*)$/, async (firstname,lastname) => {
    await LoginPage.enterName(firstname,lastname,"alias");
});

Then(/^I enter address with (.*) and city with (.*) and poscode with (.*)$/, async (address,city,postcode) => {
    await LoginPage.enterAddress(address,city,postcode,"state");
});


Then(/^I start to create email account with (.*)$/, async (email) => {
    await LoginPage.createAccount(email);
});

Then(/^I save the screenshot$/, async () => {
    browser.saveScreenshot("screen.jpg");
});

Then(/^I click on Register button$/, async () => {
    await LoginPage.registerNow();
});

Then(/^I check my firstname (.*) and lastname (.*) match$/, async (firstname,lastname) => {
    await expect(CommonPage.myCustomerName).toHaveTextContaining(firstname + " " + lastname );
});

Then(/^I click on Sign Out$/, async () => {
    await CommonPage.signOutClick();
});

Then(/^I click on Log In$/, async () => {
    await LoginPage.logInAccountClick();
});

Then(/^I enter email with (.*) and password with (.*)$/, async (email,password) => {
    await LoginPage.loginNow(email,password);
});

Then(/^I wait in sec until (.*)$/, async (sec) => {
    await LoginPage.waitsleep(sec);
});

Then(/^I start to order product name by search (.*)$/, async (productname) => {
    await LoginPage.searchProduct(productname);
    //await LoginPage.scrolltoProduct();
   //await LoginPage.moveToProduct();
    
});


Then(/^I add product to cart$/, async () => {
    await LoginPage.addProductToCart();
});

Then(/^I scroll to product$/, async () => {
    await LoginPage.scrolltoProduct();
});

Then(/^I move to product$/, async () => {
    await LoginPage.moveToProduct();
});

Then(/^I start to order selected product$/, async () => {
    await LoginPage.orderProduct();
});

Then(/^I start to confirm the address details$/, async () => {
    await LoginPage.confirmAddress();
});

Then(/^I start to confirm the delivery details$/, async () => {
    await LoginPage.confirmDelivery();
});

Then(/^I select payment wire$/, async () => {
    await LoginPage.makePaymentWire();
});

Then(/^I select final confirmation$/, async () => {
    await LoginPage.finalConformation();
});

Then(/^I maximise the windows$/, async () => {
    await LoginPage.maxWindows();
});

