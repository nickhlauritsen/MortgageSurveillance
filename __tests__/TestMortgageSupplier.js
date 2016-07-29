jest.autoMockOff();

const MemoizedRequest = require('../src/stores/MemoizedRequest.js').default;

describe('sum', () => {
  it('returns the value of a function', () => {
    const s = new MemoizedRequest("http://google.com");
    expect(s.get().uri.hostname).toBe("google.com");
  });
});
