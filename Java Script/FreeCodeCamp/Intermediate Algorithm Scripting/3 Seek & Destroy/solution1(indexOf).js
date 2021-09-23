function destroyer(arr = [], ...args) {
        return arr.filter(item => args.indexOf(item) === -1)
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3, 4);

console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));