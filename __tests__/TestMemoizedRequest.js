jest.autoMockOff();

const MemoizedRequest = require('../src/stores/MemoizedRequest.js').default;

describe('GET a page once', () => {
  const request = jest.genMockFromModule('request');
  request.mockReturnValueOnce('test');

  it('contacts the host and returns the result', () => {
    const s = new MemoizedRequest(request);
    const res = s.get('url');
    expect(1).toEqual(request.mock.calls.length);
    expect('test').toEqual(res);
  });
});

describe('GET a page twice', () => {
  const request = jest.genMockFromModule('request');
  request.mockReturnValue('test');

  const s = new MemoizedRequest(request);

  it('contacts the host on the first request and returns the result', () => {
    const res = s.get('url');

    expect(1).toEqual(request.mock.calls.length);
    expect('test').toEqual(res);
  });

  it('returns the result from the first request on the second request', () => {
    const res = s.get('url');

    request.mockReturnValueOnce('test2');
    expect(1).toEqual(request.mock.calls.length);
    expect('test').toEqual(res);
  });
});
