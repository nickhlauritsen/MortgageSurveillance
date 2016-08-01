import memoize from 'memoizee';

class MemoizedRequest {
  constructor(request) {
    const CACHE_TIMEOUT = 60*60*1;

    const fn = (url) => request(url, (error, response, body) => body);

    //cache for one hour and prefetch when close to cache expiry
    this.memoized = memoize(fn,
                            { maxAge: CACHE_TIMEOUT, preFetch: true }
                           );
  }

  get(url) {
    return this.memoized(url);
  }
}

export default MemoizedRequest;
