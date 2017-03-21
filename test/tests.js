const expect = require("chai").expect;
const assert = require("chai").assert;
const app = require('../estimateCalculator.js')

describe('estimate calculator', function() {
	it('calculates the correct values', function() {
		expect(app._test.totalEstimate("1,299.99", "3 people", "food")).to.equal('$1,591.58');
		expect(app._test.totalEstimate("5,432.00", "1 person", "drugs")).to.equal('$6,199.81');
		expect(app._test.totalEstimate("12,456.95", "4 people", "books")).to.equal('$13,707.63');
	})
})

describe('flat markup', function() {
  it('is a number', function() {
  	let estimateTotal = app._test.flatMarkup(222.22);
    assert.typeOf(estimateTotal,'number')
  });
  it('adds 5% to all jobs', function() {
  	let baseAmount = 1;
  	expect(app._test.flatMarkup(baseAmount)).to.equal(baseAmount + (baseAmount * 0.05));
  });
});

describe('labour markup', function() {
  it('is a number', function() {
  	let labourMarkup = app._test.labourMarkup(2);
    assert.typeOf(labourMarkup,'number')
  });
  it('adds 1.2% for each worker', function() {
  	let baseAmount = 300;
  	let workers = 5
  	let flatMarkup = app._test.flatMarkup(baseAmount)
  	expect(app._test.labourMarkup(baseAmount, workers)).to.equal((flatMarkup * 0.012) * workers);
  });
});

describe('material markup', function() {
  it('is a number', function() {
  	let estimateTotal = app._test.materialMarkup("books");
    assert.typeOf(estimateTotal,'number')
  });
  it('adds 7.5% for drugs', function() {
    let baseAmount = 300;
    let flatMarkup = app._test.flatMarkup(baseAmount)
    expect(app._test.materialMarkup(baseAmount, "drugs")).to.equal(flatMarkup * 0.075);
  });
    it('adds 13% for food', function() {
    let baseAmount = 300;
    let flatMarkup = app._test.flatMarkup(baseAmount)
    expect(app._test.materialMarkup(baseAmount, "food")).to.equal(flatMarkup * 0.13);
  });
    it('adds 2% for electronics', function() {
    let baseAmount = 300;
    let flatMarkup = app._test.flatMarkup(baseAmount)
    expect(app._test.materialMarkup(baseAmount, "electronics")).to.equal(flatMarkup * 0.02);
  });
    it('adds nothing for any other material', function() {
    let baseAmount = 300;
    let flatMarkup = app._test.flatMarkup(baseAmount)
    expect(app._test.materialMarkup(baseAmount, "anything else")).to.equal(0);
  });
});


describe('removesCommas function', function() {
  it('removes commas from a string', function() {
  	expect(app._test.removeCommas("122,333,444")).to.equal("122333444");
  });
});

describe('insertCommas function', function() {
  it('inserts commas to show millions', function() {
  	expect(app._test.insertCommas("122333444")).to.equal("122,333,444");
  });
});

describe('"n people/person"', function() {
  it('becomes a number', function() {
  	expect(app._test.workersToInt("2 people")).to.equal('2');
  	expect(app._test.workersToInt("1 person")).to.equal('1');
  });
});