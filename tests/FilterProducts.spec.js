const {test, expect} = require('@playwright/test')
const {LoginPage} = require('../pageobjects/LoginPage.js')
const {ProductPage} = require('../pageobjects/ProductPage.js')
const logindataset = JSON.parse(JSON.stringify(require('../utils/LoginTestData.json')))

test("@smoke Filter Products from price high to low", async ({page})=> 
    {    
    const loginpage = new LoginPage(page);
    const productpage = new ProductPage(page);
       
    loginpage.OpenUrl()
    loginpage.LoginToApplication(logindataset.username,logindataset.password);
    await page.waitForLoadState('networkidle')

    productpage.SortProduct()

    //await page.pause()     
   
    
})