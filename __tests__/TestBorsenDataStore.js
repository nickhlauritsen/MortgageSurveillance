jest.autoMockOff();

const BorsenDataStore = require('../src/stores/BorsenDataStore.js').default;

var fs = require('fs');
const borsenP1 = fs.readFileSync('__tests__/data/borsen_p1.html', 'utf8');

describe('When contacting host and receiving the result', () => {
  const s = new BorsenDataStore(() => borsenP1);
  const res = s.get();

  it('contains 50 elements', () => {
    expect(50).toEqual(res.length);
  });

  const elmNumber = 0;

  it('has a first element with a title', () => {
    expect('1 % Nykredit med afdrag 2027').toEqual(res[elmNumber].title);
  });

  it('has a first element with a price', () => {
    expect('100,80').toEqual(res[elmNumber].price);
  });

  it('has a first element with a price difference', () => {
    expect('0,20').toEqual(res[elmNumber].priceDiff);
  });
});

describe('When contacting host and receiving the result', () => {
  const s = new BorsenDataStore(() => borsenP1);
  const res = s.get();

  it('contains 50 elements', () => {
    expect(50).toEqual(res.length);
  });

  const elmNumber = 1;

  it('has a second element with a title', () => {
    expect('1,5 % Nykredit med afdrag 2037').toEqual(res[elmNumber].title);
  });

  it('has a second element with a price', () => {
    expect('98,60').toEqual(res[elmNumber].price);
  });

  it('has a second element with a price difference', () => {
    expect('0,13').toEqual(res[elmNumber].priceDiff);
  });
});

describe('When contacting host and receiving the result', () => {
  const s = new BorsenDataStore(() => borsenP1);
  const res = s.get();

  it('contains 50 elements', () => {
    expect(50).toEqual(res.length);
  });

  const elmNumber = 3;

  it('has a fourth element with a title', () => {
    expect('1,5 % Realkredit Danmark med afdrag 2037').toEqual(res[elmNumber].title);
  });

  it('has a fourth element with a price', () => {
    expect('98,78').toEqual(res[elmNumber].price);
  });

  it('has a fourth element with a price difference', () => {
    expect('-0,03').toEqual(res[elmNumber].priceDiff);
  });
});
