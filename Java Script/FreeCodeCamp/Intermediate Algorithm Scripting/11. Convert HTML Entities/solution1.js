function convertHTML(str='') {
    const HTMLentities = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;'
    }
    for (const i in HTMLentities) {
        str.split("").forEach(item => {
            if (item.includes(i)) {
                str = str.replace(i, HTMLentities[i])
            }
        })
    }

    return str

}

console.log(
    convertHTML("Hamburgers < Pizza < Tacos")
);

/*
<	less than	&lt;	&#60;
>	greater than	&gt;	&#62;
&	ampersand	&amp;	&#38;
"	double quotation mark	&quot;	&#34;
'	single quotation mark (apostrophe)	&apos;	&#39;



*/