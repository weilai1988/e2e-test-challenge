const Page = require('./page');


class productGrid extends Page {

    get firstProduct () { return $('//*[@id="tbodyid"]/div[1]/div/div/h4/a') }

}

module.exports = new productGrid();
