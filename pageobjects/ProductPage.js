const { expect } = require("@playwright/test");
const { debug } = require("console");

class ProductPage {

    constructor (page)

    {
        this.page = page;
        this.products=page.locator(".inventory_item_description");
        this.title = page.locator(".inventory_item_description a div");
        this.cart = page.locator("a.shopping_cart_link");
        this.prices = page.locator(".inventory_item_price")
        this.shoppingCartLink = page.locator("a.shopping_cart_link")
        this.sortproductDropdown = page.locator(".product_sort_container")
    }

    async searchandAddProduct(productName){

        const titles = await this.title.allTextContents()
        const prices = await this.prices.allTextContents()
        console.log(prices)
        const count =  await this.title.count();


    for(let i=0;i<count;++i)
    {
        if(await this.title.nth(i).textContent()===productName)
       {        
        //add to cart
        const price = await this.products.nth(i).locator(".inventory_item_price").textContent()
        console.log(price)
       await this.products.nth(i).locator("text=Add to cart").click()
       
       break;
       }
    }
   
   }
async clickonCart(){

    //await expect(this.shoppingcartbadge).toHaveCount(1)
    await this.shoppingCartLink.click()
}

async SortProduct(){
    await this.sortproductDropdown.selectOption("Price (high to low)");
    
    const prices = await this.prices.allTextContents()
    const price1 = await this.prices.nth(1).textContent()
     console.log(prices)
     const pricecount = await this.prices.count();
     console.log(pricecount)       
     for (let i = 0; i < pricecount - 1; i++) {
        if (await this.prices.nth(i).textContent() > this.prices.nth(i + 1).textContent()) { 

        }  
    }         
    console.log("Product is sorted from high to low")     
}

};
module.exports = {ProductPage};
