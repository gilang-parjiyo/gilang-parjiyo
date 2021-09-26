## Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowered-case-words-joined-by-dasehs

example ```'thisIs_Spinal-Tap' to 'this-is-spinal-tap'```

---

**New Learning**
- replace hanya menambahkan karakter.
- regex group untuk membuat pattern lebih dari 1
- use same metod twice.

---

**Solution1**

method use : ``` replace, split, join, toLowerCase, regex```

1. ```replace(/([a-z])([A-Z])/g, '$1 $2')``` gunakan method replace menggunakan regex, patternya lower-uppercase diganti dengan lower-space-upper. [replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
2. ```split``` string menjadi array dengan delimeter regex spasi dan underscore.
3. ```join``` array dengan delimeter '-'.
4. ```toLowerCase``` convert semua karakter menjadi lowercase.

---

**Solution2**

method use: ```replace, toLowerCase```

1. ```replace``` untuk menambahkan spasi disetitap spasi diantara lowercase dan upercase.
2. ```replace``` kembali untuk mengganti ```spasi,underscore``` dengan ```-```.
3. convert all to lowercase.

---

**Solution3**

method use: ```regex, split, join, toLowerCase```

1. ```split``` string into array using regex ```/\s|_|(?=[A-Z])/```
-   ```\s``` delimeternya spasi ```|``` atau ```_``` underscore ```|``` di ikuti ```(?=[A-Z])``` oleh upercase.

2. ```join``` dengan delimeter '-'.
3. ```toLowerCase``` convert semua karakter menjadi lowercase.