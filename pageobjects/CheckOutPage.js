const { expect } = require("@playwright/test");

class CheckOutPage {

    constructor(page)

    {
        this.page = page;
        this.firstName =  page.locator("#first-name");
        this.lastName = page.locator("#last-name")
        this.postalcode = page.locator("#postal-code")
        this.checkoutContinue = page.locator(".checkout_buttons #continue")
    }

    async FillYourInformation(firstname,lastname,postalcode){
        await this.firstName.fill(firstname)
        await this.lastName.fill(lastname)
        await this.postalcode.fill(postalcode)
       
    }

    async ClickCheckOutContinue(){
        await this.checkoutContinue.click()
    }

};
module.exports = {CheckOutPage};
