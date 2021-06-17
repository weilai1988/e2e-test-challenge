const Page = require('./page');


class NaviBar extends Page {
    
     get logOutLink () { return $('#logout2') }
     get signUpLink () { return $('#signin2') }
     get cartLink () { return $('#navbarExample > ul > li:nth-child(4) > a')}

    async logout () {
        await (await this.logOutLink).click();
    }

}

module.exports = new NaviBar();
