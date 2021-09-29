function convertHTML(str = '') {
    const HTMLentities = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;'
    }

    return str.replace(/([&<>\'"])/g, match => HTMLentities[match])
}

console.log(
    convertHTML("Schindler's List")
);