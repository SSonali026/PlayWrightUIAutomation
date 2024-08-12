const {test, expect} = require('@playwright/test')
const {LoginPage} = require('../pageobjects/LoginPage')
const {ProductPage} = require('../pageobjects/ProductPage')
const {YourCartPage} = require('../pageobjects/YourCartPage.js')
const {CheckOutPage} = require('../pageobjects/CheckOutPage.js')
const {OverviewPage} = require('../pageobjects/OverviewPage.js')
const dataset = JSON.parse(JSON.stringify(require('../utils/placeorderTestDataForMultipleUser.json')))
const dataseterror = JSON.parse(JSON.stringify(require('../utils/placeorderTestDataForError.json')))



for(const data of dataset)
    {
test(`e2e Successful Order Placement with ${data.username}`, async ({page})=> 
    {

    
    const loginpage = new LoginPage(page);
    const productpage = new ProductPage(page);
    const yourcartpage = new YourCartPage(page);
    const checkoutpage = new CheckOutPage(page);
    const overviewpage = new OverviewPage(page)


    'Open URL and login to application'
    loginpage.OpenUrl()
    loginpage.LoginToApplication(data.username,data.password);
    await page.waitForLoadState('networkidle')

    'Search and add product'
    productpage.searchandAddProduct(data.productName)
   
    await page.waitForTimeout(2000)

    'Click on cart icon on top'
    productpage.clickonCart()   
    await page.waitForLoadState('networkidle')

    'Get Item price and click on checkout button'
    yourcartpage.GetItemAndPrice()
    yourcartpage.ClickOnCheckoutButton()
    
    'Enter mailing address and click on continue'
    await page.waitForTimeout(2000)
    checkoutpage.FillYourInformation(data.firstname,data.lastname,data.postalcode)
    await page.waitForTimeout(1000)
    checkoutpage.ClickCheckOutContinue()
    await page.waitForTimeout(2000)

    'Get Item name and total price ic correct and click on finish button'
    overviewpage.getItemNameAndtotalPrice(data.productName)
    overviewpage.ClickOnFinishButton()
    await page.waitForTimeout(2000)

    'Verify order success message'
   await page.getByText("Thank you for your order!").isVisible();
   //await page.pause()

});
}

test("@smoke Verify error when checkout information is not filled", async ({page})=> 
{

    const loginpage = new LoginPage(page);
    const productpage = new ProductPage(page);
    const yourcartpage = new YourCartPage(page);
    const checkoutpage = new CheckOutPage(page);

    'Open url and login to application'
    loginpage.OpenUrl()
    loginpage.LoginToApplication(dataseterror.username,dataseterror.password);
    await page.waitForLoadState('networkidle')
   'Search/add product and click on cart'
    productpage.searchandAddProduct(dataseterror.productName)
    await page.waitForTimeout(2000)
    productpage.clickonCart()
    
    await page.waitForLoadState('networkidle')
   'Click on checkout button'
    yourcartpage.ClickOnCheckoutButton()    
    await page.waitForTimeout(2000)

    'Enter details in checkout page'
    checkoutpage.FillYourInformation(dataseterror.firstname,dataseterror.lastname,dataseterror.postalcode)
    await page.waitForTimeout(1000)
    checkoutpage.ClickCheckOutContinue()
    await page.waitForTimeout(2000)

   'Verify error displayed when field is missing'
    await page.getByText("Error: First Name is required").isVisible();
    
})