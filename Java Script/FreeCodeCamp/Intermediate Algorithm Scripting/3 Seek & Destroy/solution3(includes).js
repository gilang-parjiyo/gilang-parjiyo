function destroyer(arr = []) {
    let valsToRemove = Array.from(arguments).slice(1);
    return arr.filter(item => !valsToRemove.includes(item))
}

console.log(
    destroyer(
        [
            "possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"
        ],
        "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")
);



