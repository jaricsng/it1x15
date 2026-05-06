function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

// console.log("Test isValidateEmail");
// console.log(" isValidateEmail(\"john.doe\")", isValidateEmail("john.doe"));
// console.log(" isValidateEmail(\"john.doe@yahoo.com\")", isValidateEmail("john.doe@yahoo.com"));
function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (err) {
        return false;
    }
}

// console.log("Test isValidUrl");
// console.log(" isValidUrl(\"asdfa\")", isValidUrl("asdfa"));
// console.log(" isValidUrl(\"http://www.google.com\")", isValidUrl("http://www.google.com"));

function isValidPhoneNumber(phoneNumber) {
    // Regex for exactly 10 digits
    const regex = /^\d{8}$/;
    return regex.test(phoneNumber);
}

// console.log("Test isValidatePhoneNumber");
// console.log(" isValidatePhoneNumber(\"asdfa\")", isValidatePhoneNumber("asdfa"));
// console.log(" isValidatePhoneNumber(\"12345678\")", isValidatePhoneNumber("12345678"));



// use below to export functions to work with mocha
// export keyword for individual function will fail for use in HTML in browser
module.exports = { isValidEmail, isValidPhoneNumber, isValidUrl };