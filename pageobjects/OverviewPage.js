const { expect } = require("@playwright/test");

class OverviewPage {

    constructor (page)
    {
        this.page = page;
        this.cartquantity = page.locator(".cart_quantity")        
        this.itemInOverviewPage = page.locator("#checkout_summary_container .inventory_item_name")
        this.itemtotal = page.locator(".summary_subtotal_label")
        this.taxtotal = page.locator(".summary_tax_label")
        this.totalvalue = page.locator(".summary_total_label")
        this.finishbutton = page.locator("#finish")
    }

    async ClickOnFinishButton(){
        await this.finishbutton.click()
       
    }

    async getItemNameAndtotalPrice(ProductName){
        await expect(this.itemInOverviewPage).toHaveText(ProductName)
        const IP = await this.itemtotal.textContent()
        const  ItemPrice = IP.split("$")[1]
        console.log(IP)
        const PT = await this.taxtotal.textContent()  
         const pricetax = PT.split("$")[1]
        console.log(pricetax)
        const sum = (parseFloat(ItemPrice))+(parseFloat(pricetax))
        const TotalPriceWithTax = sum.toString()
        const TP = await this.totalvalue.textContent()
        const totalPrice = TP.split("$")[1]
        console.log(totalPrice)

        await expect(totalPrice).toEqual(TotalPriceWithTax)
        
       

        

    }



};
module.exports = {OverviewPage};