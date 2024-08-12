const { expect } = require("@playwright/test");

class CheckOutCompletePage {

    constructor (page)
    {
        this.page = page;
        
       
    }

   async VerifyOrderSuccessMessage()
   {
     await this.page.goto('https://www.saucedemo.com/');
        
    }

};
module.exports = {CheckOutCompletePage};
