/**
 * Converts a given string to camelCase format.
 *
 * Handles strings with spaces, underscores, hyphens, and SCREAMING_SNAKE_CASE.
 * If the input is already in camelCase, it returns the string unchanged.
 *
 * @param {string} str - The input string to convert.
 * @throws {Error} Throws an error if the input is not a single string argument.
 * @returns {string} The camelCase formatted string.
 *
 * @example
 * toCamelCase('first name'); // returns 'firstName'
 * toCamelCase('user_id'); // returns 'userId'
 * toCamelCase('SCREEN_NAME'); // returns 'screenName'
 * toCamelCase('mobile-number'); // returns 'mobileNumber'
 * toCamelCase('alreadyCamelCase'); // returns 'alreadyCamelCase'
 */

/**
 * Converts a given string to dot.case format.
 *
 * Handles strings with spaces, underscores, hyphens, camelCase, PascalCase, and SCREAMING_SNAKE_CASE.
 * All words are lowercased and joined by dots.
 *
 * @param {string} str - The input string to convert.
 * @throws {Error} Throws an error if the input is not a single string argument.
 * @returns {string} The dot.case formatted string.
 *
 * @example
 * toDotCase('first name'); // returns 'first.name'
 * toDotCase('user_id'); // returns 'user.id'
 * toDotCase('SCREEN_NAME'); // returns 'screen.name'
 * toDotCase('mobile-number'); // returns 'mobile.number'
 * toDotCase('alreadyCamelCase'); // returns 'already.camel.case'
 */
function toCamelCase(str) {
    if (arguments.length !== 1 || typeof str !== 'string' || str === undefined || str === null) {
        throw new Error('Invalid input: expects a single string argument');
    }

    // Trim and check for empty string
    str = str.trim();
    if (str === '') return '';

    // If already camelCase (starts with lowercase, no separators, has uppercase inside)
    if (/^[a-z][a-zA-Z0-9]*$/.test(str) && /[A-Z]/.test(str.slice(1))) {
        return str;
    }

    // Lowercase the string and split by common separators
    const words = str
        .replace(/([A-Z]+)/g, (m, p1, offset) => (offset ? ' ' + p1 : p1)) // handle SCREAMING_SNAKE_CASE
        .split(/[\s_\-]+/)
        .filter(Boolean);

    // Convert to camelCase
    return words
        .map((word, i) =>
            i === 0
                ? word.toLowerCase()
                : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join('');
}

// Example usage:
// console.log(toCamelCase('first name')); // firstName
// console.log(toCamelCase('user_id')); // userId
// console.log(toCamelCase('SCREEN_NAME')); // screenName
// console.log(toCamelCase('mobile-number')); // mobileNumber
// console.log(toCamelCase('alreadyCamelCase')); // alreadyCamelCase
// toCamelCase(5, "welcome"); // throws error

function toDotCase(str) {
    if (arguments.length !== 1 || typeof str !== 'string' || str === undefined || str === null) {
        throw new Error('Invalid input: expects a single string argument');
    }

    str = str.trim();
    if (str === '') return '';

    // Insert space before uppercase letters (for camelCase, PascalCase)
    str = str.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
    // Replace separators with space
    str = str.replace(/[\s_\-]+/g, ' ');
    // Split into words, lowercase, and join with dots
    return str
        .split(' ')
        .filter(Boolean)
        .map(word => word.toLowerCase())
        .join('.');
}

// Example usage:
// console.log(toDotCase('first name')); // first.name
// console.log(toDotCase('user_id')); // user.id
// console.log(toDotCase('SCREEN_NAME')); // screen.name
// console.log(toDotCase('mobile-number')); // mobile.number
// console.log(toDotCase('alreadyCamelCase')); // already.camel.case

