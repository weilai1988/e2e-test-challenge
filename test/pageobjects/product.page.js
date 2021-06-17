const Page = require('./page');


class productPage extends Page {

    get addCartBtn () { return $('#tbodyid > div.row > div > a') }
    get alert () { return $("=JavaScript Alerts") }
    get placeOrderBtn () { return $('#page-wrapper > div > div.col-lg-1 > button')}

}

module.exports = new productPage();
