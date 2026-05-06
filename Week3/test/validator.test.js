// import assert from "node:assert";
const assert = require('assert');
const Utils = require('../validator');
// import * as Utils from "../validator.js";

describe("validator", function () {
    describe("#isValidEmail()", function () {
        it("should return true when the value is a valid email", function () {
            assert.equal(true, Utils.isValidEmail("john.doe@yahoo.com"));
        });
        it("should return false when the value is invalid email", function () {
            assert.equal(false, Utils.isValidEmail("john.doe@.com"));
        });
    });

    describe("#isValidUrl()", function () {
        it("should return true when the value is valid URL", function () {
            assert.equal(true, Utils.isValidUrl("http://www.yahoo.com"));
        });
        it("should return true when the value is valid URL", function () {
            assert.equal(true, Utils.isValidUrl("https://www.yahoo.com"));
        });
        it("should return true when the value is valid URL", function () {
            assert.equal(true, Utils.isValidUrl("https://www.company.org"));
        });
        it("should return false when the value is invalid URL", function () {
            assert.equal(false, Utils.isValidUrl("www"));
        });
    })

    describe('#isValidPhoneNumber()', () => {
        it('should return true when value is length of 8 digits only', () => {
            assert.equal(true, Utils.isValidPhoneNumber("12345678"));
        });
        it('should return false when value is non digits or length < 8', () => {
            assert.equal(false, Utils.isValidPhoneNumber("asdf"));
        });
        it('should return false when value is non digits or length < 8', () => {
            assert.equal(false, Utils.isValidPhoneNumber("1234"));
        });
    });
});

