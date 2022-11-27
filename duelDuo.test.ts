
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Clicking the draw button displays the div with the id of choices', async () => {
    
    const theDrawButton = await driver.findElement(By.id('draw'));
    await theDrawButton.click();
    
    const choices = await driver.findElement(By.id('choices'));
    const displayed = await choices.isDisplayed()
    
    expect(displayed).toBe(true)
})

test('Clicking the see-all button displays the div with the id of all-bots', async () =>{
  
    const seeAllButton = await driver.findElement(By.id('see-all'));
    await seeAllButton.click();

    const allBots = await driver.findElement(By.id('all-bots'));
    const displayed = await allBots.isDisplayed()
    
    await driver.sleep(3000);

    expect(displayed).toBe(true)

})
