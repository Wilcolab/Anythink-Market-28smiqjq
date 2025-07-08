function toKebabCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError(`Input must be a string, but received ${typeof input}.`);
    }
    // Match all sequences of word characters (letters, numbers, underscore)
    // The 'u' flag ensures Unicode support
    const words = input.match(/\p{L}+\p{N}*|\p{N}+/gu);
    if (!words) return '';
    return words.map(word => word.toLowerCase()).join('-');
}

// Example usage:
// console.log(toKebabCase("Hello World!")); // "hello-world"
// console.log(toKebabCase("JavaScript_is-awesome")); // "javascript-is-awesome"
// console.log(toKebabCase(" Lucca lucca - Image ")); // "lucca-lucca-image"
// toKebabCase(123); // Throws TypeError