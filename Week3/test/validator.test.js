// import assert from "node:assert";
const assert = require('assert');
const Utils = require('../validator');
// import * as Utils from "../validator.js";

describe("validator", function () {
    describe("#isValidEmail()", function () {
        it("should return true with john.doe@yahoo.com", function () {
            assert.equal(true, Utils.isValidEmail("john.doe@yahoo.com"));
        });
        it("should return false with john.doe@.com", function () {
            assert.equal(false, Utils.isValidEmail("john.doe@.com"));
        });
    });

    describe("#isValidUrl()", function () {
        it("should return true with http://www.yahoo.com", function () {
            assert.equal(true, Utils.isValidUrl("http://www.yahoo.com"));
        });
        it("should return true with https://www.yahoo.com", function () {
            assert.equal(true, Utils.isValidUrl("https://www.yahoo.com"));
        });
        it("should return true with https://www.company.org", function () {
            assert.equal(true, Utils.isValidUrl("https://www.company.org"));
        });
        it("should return false with www", function () {
            assert.equal(false, Utils.isValidUrl("www"));
        });
    })

    describe('#isValidPhoneNumber()', () => {
        it('should return true 12345678', () => {
            assert.equal(true, Utils.isValidPhoneNumber("12345678"));
        });
        it('should return false with asdf', () => {
            assert.equal(false, Utils.isValidPhoneNumber("asdf"));
        });
        it('should return false with 1234', () => {
            assert.equal(false, Utils.isValidPhoneNumber("1234"));
        });
    });
});

