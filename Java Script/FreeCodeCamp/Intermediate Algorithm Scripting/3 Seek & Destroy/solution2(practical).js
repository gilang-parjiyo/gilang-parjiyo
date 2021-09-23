function destroyer(arr = []) {
    let arr2 = Object.values(arguments).slice(1)

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr[i] === arr2[j]) {
                delete arr[i]
            }
        }

    }

    return arr.filter(value => value !== null)


}

console.log(
    destroyer(
        [
            "possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"
        ],
        "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")
);