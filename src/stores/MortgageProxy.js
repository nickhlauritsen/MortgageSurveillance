var memoize = require('memoizee');

class MortgageSupplier {
  const CACHE_TIMEOUT = 60*60*1;

  constructor(fn) {
    this.memoized = memoize(fn, { maxAge: 60*60*1, preFetch: true }); //cache for one hour and prefetch when close to cache expiry
  }

  get() {
    return memoized();
  }
}
