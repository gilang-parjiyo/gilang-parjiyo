## Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowered-case-words-joined-by-dasehs

example ```'thisIs_Spinal-Tap' to 'this-is-spinal-tap'```

**Solution1**

1. ```replace(/([a-z])([A-Z])/g, '$1 $2')``` gunakan method replace menggunakan regex, patternya lower-uppercase diganti dengan lower-space-upper. [replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
2. ```split``` string menjadi array dengan delimeter regex spasi dan underscore.
3. ```join``` array dengan delimeter '-'.
4. ```toLowerCase``` convert semua karakter menjadi lowercase.