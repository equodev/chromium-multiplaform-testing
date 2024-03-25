import { test, expect } from '@playwright/test';
import { setup_ide } from './ide_setup.ts';

const ide = "vscode"

test('Test example', async ({ page }) => {
  // IDE Setup
  await setup_ide(ide, page);

  await page.waitForTimeout(2000);
  await page.frameLocator('iframe[name="ad32f55e-8fd7-4463-acde-97d13190a954"]').frameLocator('iframe[title="undefined"]').locator('#workflow-diagram_0')
  // await page.waitForTimeout(40000);

  // TODO?
  // const frames = await page.frames()
  // console.log(frames)
  // await frames[0].frameLocator('iframe[title="undefined"]').locator('#workflow-diagram_0').getByText('Push').click();
  // await page.frameLocator('iframe[name="ad32f55e-8fd7-4463-acde-97d13190a954"]').frameLocator('iframe[title="undefined"]').locator('#workflow-diagram_0').getByText('Push').click();
  // await page.frameLocator('iframe[name="ad32f55e-8fd7-4463-acde-97d13190a954"]').frameLocator('iframe[title="undefined"]').locator('#workflow-diagram_0').getByText('Push').click();
  // await page.frameLocator('iframe[name="ad32f55e-8fd7-4463-acde-97d13190a954"]').frameLocator('iframe[title="undefined"]').getByRole('textbox').fill('Test');
  // await page.frameLocator('iframe[name="ad32f55e-8fd7-4463-acde-97d13190a954"]').frameLocator('iframe[title="undefined"]').getByRole('textbox').press('Enter');
  // await page.frameLocator('iframe[name="ad32f55e-8fd7-4463-acde-97d13190a954"]').frameLocator('iframe[title="undefined"]').locator('#workflow-diagram_0').getByText('Test').click();


  // await browser.close(); // Make sure 'browser' object is defined somewhere
})

