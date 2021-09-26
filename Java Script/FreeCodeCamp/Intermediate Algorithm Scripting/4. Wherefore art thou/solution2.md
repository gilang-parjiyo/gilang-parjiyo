# WhatIsInName

**Problem**

Buat function yang melihat serangkaian array object dan **return** array semua yang objectnya memiliki nama dan pasangan value yang sama. setiap nama dan value harus ikut direturn.

---

**Solution**
1. Ambil value dari source dengan `Object.keys()`
2. Filter collection jangan lupa `return`
3. Gunakan `every` method untuk mencocokan setiap object collection dengan key.
4. Gunakan  method `hasOwnProperty` untuk memastikan properti ada dan value sama.

