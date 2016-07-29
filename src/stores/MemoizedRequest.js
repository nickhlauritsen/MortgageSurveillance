import memoize from 'memoizee';
import request from 'request';

class MemoizedRequest {
  constructor(url) {
    const CACHE_TIMEOUT = 60*60*1;

    const fn = function() {
      return request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          return body;
        }
      });
    }
    this.memoized = memoize(fn, { maxAge: CACHE_TIMEOUT, preFetch: true }); //cache for one hour and prefetch when close to cache expiry
  }

  get() {
    return this.memoized();
  }
}

export default MemoizedRequest;
