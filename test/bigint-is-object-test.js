const mocha = require('mocha');
const expect = require('chai').expect;

describe("Testing if object returns in parse function", function () {
  const input = '{"big":92233720368547758070,"small":123,"deci":1234567890.0123456,"shortExp":1.79e+308,"longExp":1.7976931348623157e+308,"subObject":{"test": "test-str"}}';

  it("Should show JSONbig.parse returns real object", function (done) {
    const JSONbig = require('../index')({
        storeAsString: true
    });
    const obj = JSONbig.parse(input);
    expect(obj, "parsed subobject").to.be.instanceOf(Object);
    expect(obj, "parsed object").to.be.instanceOf(Object);
    done();
  });

  it("Should show JSONbig.parse returns object has toString method", function (done) {
    const JSONbig = require('../index')({
        storeAsString: true
    });
    const obj = JSONbig.parse(input);
    expect(() => obj.toString(), "stringified object").to.not.throw();
    expect(() => `My object: ${obj}, "stringified object in interpolated string"`).to.not.throw();
    done();
  });
});