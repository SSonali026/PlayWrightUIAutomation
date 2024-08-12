const { expect } = require("@playwright/test");

class LoginPage {

    constructor (page)
    {
        this.page = page;
        this.LogInButton = page.locator('#login-button');
        this.username = page.locator('#user-name');
        this.password =page.locator("[type='password']");
    }

   async OpenUrl()
   {
     await this.page.goto('https://www.saucedemo.com/');
        
    }

async LoginToApplication(username,password)
{
    await this.username.fill(username);
    await this.password.fill(password);
    await this.LogInButton.click()
    await expect(this.page).toHaveTitle("Swag Labs");


}


};
module.exports = {LoginPage};
