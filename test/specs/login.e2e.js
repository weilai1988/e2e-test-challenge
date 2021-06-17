const LoginPage = require('../pageobjects/login.page');
const NaviBar = require('../pageobjects/naviBar.page');


describe('Product Store test website', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('test22345', 'test22345');
        await expect(NaviBar.logOutLink).toBeDisplayed();
        await NaviBar.logout();
        await expect(NaviBar.signUpLink).toBeDisplayed();
    });
});


