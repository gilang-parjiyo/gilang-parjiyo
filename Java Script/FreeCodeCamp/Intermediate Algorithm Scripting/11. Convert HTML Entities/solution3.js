function convertHTML(str = '') {
    const HTMLentities = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;'
    }

    return str.split('')
        .map(entity => HTMLentities[entity] || entity)
        .join('')
}

console.log(
    convertHTML('Dolce & Gabbana')
);