const Page = require('./page');


class categoryTab extends Page {

    get phoneTab () { return $('*=Phones') }
    get laptopTab () { return $('*=Laptops') }
    get monitorTab () { return $('*=Monitors') }

}

module.exports = new categoryTab();
