/**
 * Validates whether the provided string is in a valid email address format.
 *
 * Validation rules:
 * - Must contain a local part before the "@" symbol
 * - Must contain a domain name after the "@" symbol
 * - Domain must include a valid top-level domain (e.g. .com, .org)
 * - Allows common email characters such as:
 *   letters, numbers, dots (.), underscores (_),
 *   percent signs (%), plus signs (+), and hyphens (-)
 *
 * Supported examples:
 * - "john.doe@example.com"       -> valid
 * - "user123@test.org"           -> valid
 * - "my_email+work@gmail.com"    -> valid
 *
 * Invalid examples:
 * - "john.doe@"                  -> invalid
 * - "@example.com"               -> invalid
 * - "invalid-email"              -> invalid
 * - "user@domain"                -> invalid (missing top-level domain)
 *
 * @param {string} email - The email address string to validate.
 * @returns {boolean} Returns true if the email format is valid; otherwise false.
 */
function isValidEmail(email) {
    // Regular expression to validate standard email format
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Test the email string against the regex pattern
    return regex.test(email);
}

// console.log("Test isValidateEmail");
// console.log(" isValidateEmail(\"john.doe\")", isValidateEmail("john.doe"));
// console.log(" isValidateEmail(\"john.doe@yahoo.com\")", isValidateEmail("john.doe@yahoo.com"));
/**
 * Validates whether the provided string is a properly formatted URL.
 *
 * Validation behavior:
 * - Uses the built-in JavaScript URL constructor
 * - Returns true if the string can be parsed as a valid URL
 * - Returns false if the string is malformed or invalid
 *
 * Supported examples:
 * - "https://example.com"           -> valid
 * - "http://localhost:3000"         -> valid
 * - "ftp://files.server.com"        -> valid
 * - "https://sub.domain.com/path"   -> valid
 *
 * Invalid examples:
 * - "example"                       -> invalid
 * - "ht!tp://bad-url"               -> invalid
 * - ""                              -> invalid
 * - "12345"                         -> invalid
 *
 * @param {string} string - The URL string to validate.
 * @returns {boolean} Returns true if the string is a valid URL; otherwise false.
 */
function isValidUrl(string) {
    try {
        // Attempt to construct a URL object from the input string
        // If successful, the URL format is valid
        new URL(string);

        return true;
    } catch (err) {
        // If URL construction fails, the input is not a valid URL
        return false;
    }
}

// console.log("Test isValidUrl");
// console.log(" isValidUrl(\"asdfa\")", isValidUrl("asdfa"));
// console.log(" isValidUrl(\"http://www.google.com\")", isValidUrl("http://www.google.com"));

/**
 * Validates whether the provided phone number contains exactly 8 numeric digits.
 *
 * Validation rules:
 * - Must contain only numbers (0-9)
 * - Must be exactly 8 digits long
 * - No spaces, symbols, or country codes allowed
 *
 * Examples:
 * - "91234567"  -> valid
 * - "1234567"   -> invalid (less than 8 digits)
 * - "123456789" -> invalid (more than 8 digits)
 * - "9123-4567" -> invalid (contains special character)
 * - "+6591234567" -> invalid (contains country code)
 *
 * @param {string} phoneNumber - The phone number string to validate.
 * @returns {boolean} Returns true if the phone number is valid; otherwise false.
 */
function isValidPhoneNumber(phoneNumber) {
    // Regular expression to match exactly 8 digits from start to end
    const regex = /^\d{8}$/;

    // Test the input string against the regex pattern
    return regex.test(phoneNumber);
}

// console.log("Test isValidatePhoneNumber");
// console.log(" isValidatePhoneNumber(\"asdfa\")", isValidatePhoneNumber("asdfa"));
// console.log(" isValidatePhoneNumber(\"12345678\")", isValidatePhoneNumber("12345678"));



// use below to export functions to work with mocha
// export keyword for individual function will fail for use in HTML in browser
module.exports = { isValidEmail, isValidPhoneNumber, isValidUrl };