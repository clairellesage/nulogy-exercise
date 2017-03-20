const expect = require("chai").expect;
const estimateCalculator = require('./estimateCalculator')

expect(estimateCalculator("1,299.99", "3 people", "food")).to.equal('$1,591.58');
expect(estimateCalculator("5,432.00", "1 person", "drugs")).to.equal('$6,199.81');
expect(estimateCalculator("12,456.95", "4 people", "books")).to.equal('$13,707.63');