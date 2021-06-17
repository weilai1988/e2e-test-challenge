const LoginPage = require('../pageobjects/login.page');
const CategoryTab = require('../pageobjects/category.page');
const productGrid = require('../pageobjects/productGrid.page');
const productPage = require('../pageobjects/product.page')
const naviBar = require('../pageobjects/naviBar.page')


describe('Product Store test website', () => {

    const productName = 'Apple monitor 24';
    const username = 'test22345';
    const password = 'test22345';

    it('should allow user add product to cart and place order', async () => {
        await LoginPage.open();
        await LoginPage.login(username, password);
        await (await CategoryTab.monitorTab).click();
        await expect(productGrid.firstProduct).toHaveText(productName);
        await (await productGrid.firstProduct).click();
        await (await productPage.addCartBtn).click();
        await (await naviBar.cartLink).click();
        await expect(productPage.placeOrderBtn).toBeDisplayed();
        await (await productPage.placeOrderBtn).click();

    });
});


