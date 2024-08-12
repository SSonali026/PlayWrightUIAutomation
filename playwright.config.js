// @ts-check
const {  devices } = require('@playwright/test');


const config ={
  testDir: './tests',
  retries :1,
 timeout:100*1000,

expect:{
     timeout:9000
  },

  reporter: 'html',
  projects:[
    {
      name : 'chrome',
      use: {   
      
        browserName: 'chromium',
        headless: false,
        screenshot :'on',
        trace :'on',
        video :'retain-on-failure'
        
    }
  },
  //{
  //  name: 'firefox',
   // use: {   
      
   //   browserName: 'firefox',
   //   headless: true,
    //  screenshot :'on',
   //   trace :'on'
   //  }
 // }
  ]
        
      };
    
  
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  



module.exports = config;

