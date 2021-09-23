function mutation([target, test], i = 0) {
    target = target.toLowerCase(); // convert to lowercase
    test = test.toLowerCase(); 
    return i >= test.length // terminator jika i sudah sama atau lebih dari test.length
        ? true // return true jika terminator terpenuhi
        : !target.includes(test[i]) // mengecek element test[i] tidak ada 
            ? false // jika element tidak ada return false
            : mutation([target, test], i + 1); // jika element ada panggil fungsi mutation lagi dengan menambhakan nilai i + 1 sehingga termination bisa terpenuhi.
}

console.log(mutation(['bayam', 'ayam']));