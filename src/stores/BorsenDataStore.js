import cheerio from 'cheerio';

class BorsenDataStore {
  constructor(request) {
    this.request = request;
  }

  get() {
    const trim = (s) => s.replace(/[\n\t\r]/g,"");

    let res = [];

    const data = this.request();

    const $ = cheerio.load(data);
    $('.stock-live-updates').each(function(i, elm) {
      const title = trim($(this).find('.stock-name').text());
      const price = trim($(this).find('.PRICE').text());
      const priceDiff = trim($(this).find('.PERFORMANCE_PCT').text());

      res.push(
        {
          'title': title,
          'price': price,
          'priceDiff': priceDiff
        }
      );
    });

    return res;
  }
}

export default BorsenDataStore;
