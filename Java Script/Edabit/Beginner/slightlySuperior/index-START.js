{
    const isFirstSuperior = (arr1 = [], arr2 = []) => {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] < arr2[i]) {
                return false;
            } else if (i === arr1.length - 1 && arr1[i] === arr2[i]) {
                return false;
            }
        }
        return true
    }
    console.log(isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]));
    module.exports = isFirstSuperior;
}