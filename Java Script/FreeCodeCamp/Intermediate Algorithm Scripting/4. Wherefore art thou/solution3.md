
### Soltuion3

**Solution**
1. Mengambil property name kedalam array dengan `Object.keys` 
2. Menyaring object di collection dengan filter `Filter`
3. Membuat array baru dengan kondis properti ada (`hasOwnProperty`) dan nilai valuenya sama dengan source menggunakan method `map`
4. Gunakan method reduce pada map boolean value untuk menjadikanya single boolean value sehingga bisa digunakan oleh method `filter`