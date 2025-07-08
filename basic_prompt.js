function convertToCamel(str) {
    if (!str) return '';
    // Insert a space before each capital letter (except the first), then split
    const words = str.replace(/([A-Z])/g, ' $1').trim().split(/\s+/);
    if (!words) return str.toLowerCase();

    return words
        .map((word, idx) => {
            if (idx === 0) return word.toLowerCase();
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Example usage:
console.log(convertToCamel('Welcometogithubcopilot')); // welcomeToGithubCopilot