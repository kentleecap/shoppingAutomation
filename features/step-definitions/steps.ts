import { Given, When, Then } from '@cucumber/cucumber';

import LoginPage from '../pageobjects/login.page';
import SearchPage from '../pageobjects/search.page';
import CartPage from '../pageobjects/cart.page';
import CustomerPage from '../pageobjects/customer.page';
import ConfirmPage from '../pageobjects/confirm.page';
import PaymentPage from '../pageobjects/payment.page';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

Then(/^I click on signIn link$/, async () => {
    await LoginPage.clicksignInLink()
});

Then(/^I enter firstname with (.*) and last name with (.*)$/, async (firstname,lastname) => {
    await CustomerPage.enterName(firstname,lastname,"alias");
});

Then(/^I enter address with (.*) and city with (.*) and poscode with (.*)$/, async (address,city,postcode) => {
    await CustomerPage.enterAddress(address,city,postcode,"state");
});

Then(/^I start to create email account with (.*)$/, async (email) => {
    await LoginPage.createAccount(email);
});

Then(/^I click on Register button$/, async () => {
    await LoginPage.registerNow();
});

Then(/^I check my firstname (.*) and lastname (.*) match$/, async (firstname,lastname) => {
    await expect(LoginPage.myCustomerName).toHaveTextContaining(firstname + " " + lastname );
});

Then(/^I click on Sign Out$/, async () => {
    await LoginPage.signOutClick();
});

Then(/^I click on Log In$/, async () => {
    await LoginPage.logInAccountClick();
});

Then(/^I enter email with (.*) and password with (.*)$/, async (email,password) => {
    await LoginPage.loginNow(email,password);
});

Then(/^I start to order product name by search (.*)$/, async (productname) => {
    await SearchPage.searchProduct(productname);
});

Then(/^I add product to cart$/, async () => {
    await CartPage.addProductToCart();
});

Then(/^I scroll to product$/, async () => {
    await SearchPage.scrolltoProduct();
});

Then(/^I move to product$/, async () => {
    await SearchPage.moveToProduct();
});

Then(/^I start to order selected product (.*)$/, async (productname) => {
    await CartPage.orderProduct(productname);
});

Then(/^I land on summary page with my product order (.*)$/, async (productname) => {
    await CartPage.summaryPage(productname);
}); 

Then(/^I start to confirm the address details$/, async () => {
    await ConfirmPage.confirmAddress();
});

Then(/^I start to confirm the delivery details$/, async () => {
    await ConfirmPage.confirmDelivery();
});

Then(/^I select payment wire$/, async () => {
    await PaymentPage.makePaymentWire();
});

Then(/^I select final confirmation$/, async () => {
    await ConfirmPage.finalConformation();
    await ConfirmPage.finalConfirmDetails();
});

Then(/^I maximise the windows$/, async () => {
    await LoginPage.maxWindows();
});