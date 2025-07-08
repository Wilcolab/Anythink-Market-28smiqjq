/**
 * Converts a hyphen- or underscore-separated string to camelCase.
 *
 * @function
 * @param {string} str - The input string to convert. Must be a non-empty string containing only letters, numbers, hyphens, or underscores, with at least one separator.
 * @throws {TypeError} If the input is not a string.
 * @throws {Error} If the input string is empty, contains only whitespace, contains invalid characters, has consecutive/leading/trailing separators, or does not contain at least two words separated by hyphens or underscores.
 * @returns {string} The camelCase version of the input string.
 *
 * @example
 * toCamelCase('mobile-number'); // returns "mobileNumber"
 * toCamelCase('mobile_number'); // returns "mobileNumber"
 * toCamelCase('mobilenumber'); // throws Error
 */

/**
 * Converts a hyphen- or underscore-separated string to dot.case (lowercase words joined by dots).
 *
 * @function
 * @param {string} str - The input string to convert. Must be a non-empty string containing only letters, numbers, hyphens, or underscores, with at least one separator.
 * @throws {TypeError} If the input is not a string.
 * @throws {Error} If the input string is empty, contains only whitespace, contains invalid characters, has consecutive/leading/trailing separators, or does not contain at least two words separated by hyphens or underscores.
 * @returns {string} The dot.case version of the input string.
 *
 * @example
 * toDotCase('mobile-number'); // returns "mobile.number"
 * toDotCase('mobile_number'); // returns "mobile.number"
 * toDotCase('  mobile-number  '); // returns "mobile.number"
 */
function toCamelCase(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string.');
    }

    // Trim whitespace and check for empty string
    str = str.trim();
    if (!str) {
        throw new Error('Input string cannot be empty or whitespace.');
    }

    // Check for invalid characters (allow only letters, numbers, hyphens, underscores)
    if (!/^[\w\-]+$/.test(str)) {
        throw new Error('Input string contains invalid characters. Only letters, numbers, hyphens, and underscores are allowed.');
    }

    // Check for consecutive separators or leading/trailing separators
    if (/[-_]{2,}/.test(str) || /^[-_]|[-_]$/.test(str)) {
        throw new Error('Input string cannot have consecutive, leading, or trailing separators.');
    }

    // Check if string contains at least one separator (hyphen or underscore)
    if (!/[-_]/.test(str)) {
        throw new Error('Input string must contain at least one hyphen or underscore separator.');
    }

    // Split by hyphen or underscore, filter out empty parts
    const parts = str.split(/[-_]/).filter(Boolean);

    if (parts.length < 2) {
        throw new Error('Input string must contain at least two words separated by hyphens or underscores.');
    }

    // Convert to camelCase
    return parts[0].toLowerCase() + parts.slice(1).map(word =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join('');
}

// Example usage:
// console.log(toCamelCase('mobile-number')); // "mobileNumber"
// console.log(toCamelCase('mobile_number')); // "mobileNumber"
// console.log(toCamelCase('mobilenumber')); // Error
// console.log(toCamelCase('mobile--number')); // Error
// console.log(toCamelCase('-mobile-number')); // Error
// console.log(toCamelCase('mobile-number-')); // Error
// console.log(toCamelCase('mobile_number!')); // Error
function toDotCase(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string.');
    }

    // Trim whitespace and check for empty string
    str = str.trim();
    if (!str) {
        throw new Error('Input string cannot be empty or whitespace.');
    }

    // Check for invalid characters (allow only letters, numbers, hyphens, underscores)
    if (!/^[\w\-]+$/.test(str)) {
        throw new Error('Input string contains invalid characters. Only letters, numbers, hyphens, and underscores are allowed.');
    }

    // Check for consecutive separators or leading/trailing separators
    if (/[-_]{2,}/.test(str) || /^[-_]|[-_]$/.test(str)) {
        throw new Error('Input string cannot have consecutive, leading, or trailing separators.');
    }

    // Check if string contains at least one separator (hyphen or underscore)
    if (!/[-_]/.test(str)) {
        throw new Error('Input string must contain at least one hyphen or underscore separator.');
    }

    // Split by hyphen or underscore, filter out empty parts
    const parts = str.split(/[-_]/).filter(Boolean);

    if (parts.length < 2) {
        throw new Error('Input string must contain at least two words separated by hyphens or underscores.');
    }

    // Convert to dot.case (all lowercase, joined by dots)
    return parts.map(word => word.toLowerCase()).join('.');
}

// Example usage:
console.log(toDotCase('mobile-number')); // "mobile.number"
console.log(toDotCase('mobile_number')); // "mobile.number"
console.log(toDotCase('  mobile-number  ')); // "mobile.number"