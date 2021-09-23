
function booWho(bool) {
    if (bool === false) {
        bool = true
    } else if (bool !== true) {
        bool = false
    }
    return bool;
}

booWho(null);
console.log(booWho(false))