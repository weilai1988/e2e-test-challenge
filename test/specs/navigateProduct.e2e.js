const LoginPage = require('../pageobjects/login.page');
const CategoryTab = require('../pageobjects/category.page');
const productGrid = require('../pageobjects/productGrid.page');


describe('Product Store test website', () => {
    it('should navigate via Categories with no login', async () => {
        await LoginPage.open();
        await (await CategoryTab.phoneTab).click();
        await expect(productGrid.firstProduct).toHaveText('Samsung galaxy s6');
        await (await CategoryTab.laptopTab).click();
        await expect(productGrid.firstProduct).toHaveText('Sony vaio i5');
        await (await CategoryTab.monitorTab).click();
        await expect(productGrid.firstProduct).toHaveText('Apple monitor 24');
    });
});


