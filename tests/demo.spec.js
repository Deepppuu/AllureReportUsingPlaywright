import { test, expect } from '@playwright/test';

test('test box testing',async ({page})=>{

   const textBox= await page.goto('https://demoqa.com/text-box');
   const fullName= await page.locator('#userName');
   await fullName.type('Narayanapally Deepika',{delay:10});

   const email=await page.locator('#userEmail');
   await email.type('deepika@gmail.com',{delay:10});

   const currentAddress=await page.locator('#currentAddress');
   await currentAddress.type('Yelhanka,Karnataka',{delay:10});

   const permanentAddress=await page.locator('#permanentAddress');
   await permanentAddress.type('Hyderabad,Telangana',{delay:10});

   const btn=await page.getByText('Submit');
   await btn.click();


   const outputName = page.locator('#name');
   const outputEmail = page.locator('#email');
   const outputCurrentAddress = page.locator('#output #currentAddress');
   const outputPermanentAddress = page.locator('#output #permanentAddress');

   await expect(outputName).toHaveText('Name:Narayanapally Deepika');
   await expect(outputEmail).toHaveText('Email:deepika@gmail.com');
   await expect(outputCurrentAddress).toHaveText('Current Address :Yelhanka,Karnataka');
   await expect(outputPermanentAddress).toHaveText('Permananet Address :Hyderabad,Telangana');

})




test('Radio Button testing', async ({ page }) => {


  await page.goto('https://demoqa.com/radio-button');
  const yesRadio = page.locator('label[for="yesRadio"]');
  await yesRadio.click();

  const output = page.locator('.text-success');
  await expect(output).toHaveText('Yes');

  const impressiveRadio = page.locator('label[for="impressiveRadio"]');
  await impressiveRadio.click();

  await expect(output).toHaveText('Impressive');
});




test('Buttons testing', async ({ page }) => {
  await page.goto('https://demoqa.com/buttons');

  const doubleBtn = page.locator('#doubleClickBtn');
  await doubleBtn.dblclick();
  await expect(page.locator('#doubleClickMessage')).toHaveText('You have done a double click');

  const rightBtn = page.locator('#rightClickBtn');
  await rightBtn.click({ button: 'right' });
  await expect(page.locator('#rightClickMessage')).toHaveText('You have done a right click');

  const clickBtn = page.locator('//button[text()="Click Me"]');
   await clickBtn.click();
    const message = page.locator('#dynamicClickMessage');
    await expect(message).toHaveText('You have done a dynamic click');
  });



