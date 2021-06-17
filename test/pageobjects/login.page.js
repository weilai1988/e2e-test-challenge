const Page = require('./page');


class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get loginLink () { return $('=Log in') }
    get usernameInput () {  return $('#loginusername') }
    get loginModal () { return $('#logInModalLabel') }
    get passwordInput () {  return $('#loginpassword') }
    get logInBtn () { return $('#logInModal > div > div > div.modal-footer > button.btn.btn-primary') }

    async login (username, password) {
        await (await this.loginLink).click();
        await (await this.loginModal).waitForDisplayed(3000);
        await (await this.usernameInput).setValue(username);
        await (await this.passwordInput).setValue(username);
        await (await this.logInBtn).click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new LoginPage();
