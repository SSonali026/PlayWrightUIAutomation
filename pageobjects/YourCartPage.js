const { expect } = require("@playwright/test");

class YourCartPage {

    constructor (page)

    {
        this.page = page;
        this.cartitem=  page.locator(".cart_item a div");
        this.cartprice=  page.locator(".cart_item_label .inventory_item_price");
        this.checkoutButton= page.locator("#checkout");
        this.continueshopping= page.locator("#continue-shopping");
    }

    async ClickOnCheckoutButton(){
        await this.checkoutButton.click()
       
    }

    async GetItemAndPrice(){
        const CartPrice = await this.cartprice.textContent();
        console.log(CartPrice);
        const GetItemName =await this.cartitem.textContent();
        console.log(GetItemName)
        
    }

};
module.exports = {YourCartPage};
