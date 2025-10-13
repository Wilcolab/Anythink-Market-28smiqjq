/**
 * Converts a string to kebab-case.
 * Handles spaces, underscores, and camelCase.
 * Returns an empty string for invalid input.
 * @param {string} str
 * @returns {string}
 */
function toKebabCase(str) {
    if (typeof str !== 'string' || !str) return '';
    // Replace underscores and spaces with a space
    let result = str.replace(/[_\s]+/g, ' ');
    // Insert space before uppercase letters (for camelCase)
    result = result.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
    // Trim, lowercase, split by spaces, and join with hyphens
    return result
        .trim()
        .toLowerCase()
        .split(/\s+/)
        .join('-');
}

// Example usage:
// console.log(toKebabCase('myVariableName')); // 'my-variable-name'
// console.log(toKebabCase('my_variable_name')); // 'my-variable-name'
// console.log(toKebabCase('My Variable Name')); // 'my-variable-name'
// console.log(toKebabCase(null)); // ''