import {test,chromium } from "@playwright/test";

test("Learning CSS and Xpath Locators",async()=>{
   // test.setTimeout(5000);
    
    
             const browser = await chromium.launch({headless:false,channel:"chrome"});
             const browserContext=await browser.newContext();
             const page=await browserContext.newPage();
    
    
             await page.goto("http://leaftaps.com/opentaps/control/main");
    
    
             //await page.fill("#username","demoSalesManager");
            const credentials= page.locator("[class='inputLogin']");
            await credentials.nth(0).fill("demoSalesManager");
            await credentials.nth(1).fill("crmsfa");
            await page.click(".decorativeSubmit");
           // await page.click("text=CRM/SFA");
            await page.click("//a[contains(text(),'CRM/SFA')]");
            await page.waitForTimeout(5000);
            console.log(await page.title());

            await page.click("//a[contains(text(),'Leads')]");
            await page.waitForTimeout(5000);
            await page.click("//a[contains(text(),'Create Lead')]");
            await page.waitForTimeout(5000);

            const companyName =  page.locator('#createLeadForm_companyName');
           // if(companyName){
              await  companyName.fill("Dmgmedia");
           // }



            const firstname=  page.locator('#createLeadForm_firstName');
         
               await firstname.fill("Gowri");
          

            const lstname=  page.locator('#createLeadForm_lastName');
          //  if(lstname){
               await lstname.fill("Palanichamy");
          //  }
            
           await page.click(".smallSubmit");

           await page.waitForTimeout(1000);
    
    
    })
    